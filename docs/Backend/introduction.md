# Analysis Engine

Currently, everything related to the Analysis Engine is located in the jobs directory.

## Wording
First, I want to explain what I mean when I refer to a job or a task.

**Job:** This is an analysis that needs to be performed on a range of images.
- The analysis to be performed is specified by the command that is used to execute it.
- The range of images is defined by the SQL statement that will return the DB entries of the images (table products).

**Task:** This is an analysis that needs to be performed on a single image.
- A task belongs to a job (jobs can be split up into multiple tasks).
- You'll also notice that we store the execution number with the tasks; this number indicates to which execution of a job the tasks belong (if a job is executed for the first time, the execution number is 1; if the job is executed again the next day, it would be 2, and so on). Since we support jobs that potentially analyze the same image again and again with each execution (reanalyze = true), this helps to identify what the newest results are.

Basically, jobs define an analysis for a range of firmware and are broken up into tasks during execution.

## Overview
What I call the analysis engine is loosely responsible for performing analysis jobs on the Firmware store.

If the user wants to perform the same security analysis for many firmware images, it would take a long time to do them manually. So the goal of the engine is to automate this process.

The engine is mostly made up of three parts:

- API: Takes requests from the frontend.
- Scheduler: Decides when to execute jobs.
- Executor: Performs the job execution.

All of them are located in the jobs directory.

In terms of Docker containers, API and scheduler run in the same container (api_scheduler). In theory, they could be separated into two containers, but that would offer no benefits, and so we decided to combine them to keep the Docker environment cleaner. The executor gets its own container since, in that container, all the analysis tools are run, and separating third-party software from the rest of the system seems logical.

# Analysis Execution Start to Finish

1. User creates a job using the frontend.
2. The frontend sends a POST request to the API (container: api_scheduler, port: 5000).
3. The API confirms that the SQL query selects the correct fields.
4. The API inserts the job data into the DB.
5. The API sends a signal (HTTP POST, container: api_scheduler, port: 5001, contents: job_id) to the scheduler.py.
6. Scheduler:
    * If a new job is created, it's executed once immediately. This is done regardless if a cron schedule is provided.
    * Scheduler also checks if the job has a cron schedule; if it does, it is also entered into the internal ap_scheduler and is subsequently executed at the appropriate time.
    * Before a job is executed, the scheduler checks if it is still set to active (disabled = 0).
    * Finally, if the job is ready to be executed, a signal is sent to the executor (HTTP POST, container: executor, port 5002, contents: job_id).
7. The executor receives the signal in its main thread.
8. The request is then added into a queue for further handling.
9. The job splitter thread then removes the job from the queue.
10. The job splitter pulls the job data from the DB, executes the SQL statement to get the selected images, and creates a task for each image (it also ensures that the images actually have a file path/are downloaded).
11. If the job does not have a schedule, we assume the user wants the output as soon as possible, and the tasks are entered into a priority queue; otherwise, they are entered into the normal queue.
12. The worker processes (there are as many workers as there are processor cores) pull the tasks from the normal/prio queue.
13. The worker generates the file path for the output.txt (base_dir/job_\<job_id\>/execution_\<execution_nr\>/image_\<image_id\>/).
14. It replaces the placeholders in the command ("\<image_path\>" is replaced with the actual image path, same for logging_path and image_id).
15. Command is executed, and the contents of stdout and stderr are written to the designated output.txt.
16. An entry for the task is inserted into the tasks table in the DB.

17. done

If you need further insights, try to check the code. I made every effort to document what every part does in comments.