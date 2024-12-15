# Wrapper Documentation

The wrappers for the analysis tools are currently stored in the ```/jobs/```
directory of the Project

## cve-bin-tool.py

The cve-bin-tool.py is an example implementation of a wrapper for an analysis 
tool. In this case Intel's [cve-bin-tool](https://github.com/intel/cve-bin-tool)
was used. The analysis binary gets called with the path to analyze and the 
output gets written to a ```json``` file. Before the data of the output file 
gets inserted, it is checked whether the data already exists in the database 
or not, so the results are not inserted twice.

## binwalk.py

```binwalk.py``` automates the process of running Binwalk on a given firmware 
image, extracting relevant information, and storing the results in a 
database. It is just a basic implementation, because running it with the 
```-Mer``` flags, which is required for deeper analysis, requires additional
software like ```sasquatch```, which we could neither install nor compile. 
Therefore this wrapper is a ```TODO```. 


## Requirements for writing your own analysis wrapper


Generally, you can decide yourself how the command with which your wrapper is called looks. You will probably want to define some parameters like filepath, image ID, and potentially the directory for logs (if your tool creates any). When defining a bulk job, the user can then enter the placeholder strings for the parameters, which will be replaced with the actual values during execution.

The following parameter placeholders are currently available (all are optional):

- `<image_path>`: The path to the image file that should be analyzed.
- `<image_id>`: The ID by which the image can be identified in the database.
- `<logging_path>`: If you create permanent files, like logs, your wrapper should place them in this directory.

So, if a user creates a job in the UI with this command:

```python
python my_scrapper <image_path> <image_id> <logging_path>
```

a command that is actually executed could look like this:

```python
python my_scrapper /path/to/the/image.bin 123 /dir/where/you/can/place/logs
```

In your program, you can then call the analysis tool you're wrapping with the image file path. You'll have to write some code that parses the output of the tool and inserts it into the database. For that, you need to create a new table in the database that should include the `image_id` you get in the arguments and the results. All database interaction is currently handled by `DBConnector.py`. You will have to add the necessary insert functions into it.

Finally, you need to edit the `Dockerfile_executor`. Copy your newly created wrapper into the working directory. Also, don't forget to add any necessary commands to install/load the analysis tool you are wrapping.
