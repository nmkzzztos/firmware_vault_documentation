---
id: firmwalker
title: Firmwalker
---

# Firmwalker

As mentioned before, [firmwalker](https://github.com/craigz28/firmwalker) is an open-source bash script.


The following three primary components are found in the `/jobs`directory: 

1. **`firmwalker.py`**: A client-side script that interacts with the Flask API to request firmware analysis.
2. **`firmwalker_service.py`**: A Flask web service that exposes an API for remote requests to analyze firmware images using Firmwalker.
3. **`firmwalker_analysis.py`**: A Python script that performs the actual analysis of the firmware by invoking the open source bash script `firmwalker.sh` to process extracted firmware data, that we previously extracted with `binwalk`.

---

## The Individual Components

### 1. **`firmwalker.py`** (Client-side Script)

This script acts like the entry point for sending requests to the **Firmwalker service**. It is responsible for:

- Sending an HTTP request to the **Firmwalker service** (Flask API).
- Passing the necessary parameters (`image_id`, `path`, `output_path`) to the service.
- Handling the response from the service and printing the results.

The script accepts three arguments:
   - `image_id`: The unique identifier for the firmware image from the database.
   - `path`: The path to the extracted firmware image directory.
   - `output_path`: The output location for the analysis results.

The script constructs a **POST request** to the `/post` endpoint of the Flask service `firmwalker_service.py` running at `http://firmwalker:5004/post`.

The **request** body includes a JSON payload with the keys `image_id`, `path` and `output_path`


Upon receiving a response from the Flask API:
   - If successful , as in `status_code == 200`, the script prints the JSON **response** from the API, which includes the result of the firmware analysis.
   - If an error occurs, it prints the error message.

### 2. **`firmwalker_service.py`** (Flask API Server)

This is the **Flask web service** that acts as a middleman between the **client** `firmwalker.py` and the **analysis process** `firmwalker_analysis.py`.

The Flask service listens for **POST requests** on the `/post` endpoint.
The request body should contain a JSON payload with the three parameters mentioned above.


The service then verifies that the required parameters `image_id`, `path`, `output_path` are present in the request. It also checks if the specified firmware extraction directory (`extracted`) exists in the provided `path` and if not, prints `Please extract the firmware first with binwalk!`

If the extraction directory is present valid, the Flask service calls **`firmwalker_analysis.py`** to perform the actual analysis, this will be explained later. It passes the `path` argument to this script.
   - This is done using the `subprocess.run()` function, which executes the **`firmwalker_analysis.py`** script as a subprocess.

After the analysis completes, the service returns a **JSON response**:
   - If successful, it includes a success message along with the path to the saved output file.
   - If any error occurs, it returns an error message and logs the issue.

The service logs important events, such as incoming requests, successful analyses, and errors, to a log file (`firmwalker.log`) to help with auditing and debugging.

### 3. **`firmwalker_analysis.py`** (Firmware Analysis Script)

This script is a wrapper around the `firmwalker.sh` script and is responsible for the actual analysis of the firmware image. It processes the extracted firmware files and generates analysis results.

The script takes one argument: the **path to the extracted firmware directory** `firmwalker_extracted_path`.

**`firmwalker_analysis.py`** calls the `firmwalker.sh` Bash script to process the extracted firmware.
The `firmwalker.sh` script analyzes the contents of the extracted directory (e.g., checking for passwords, configuration files, etc.).

After running `firmwalker.sh`, the script processes its output, extracting key sections like: `passwd`, `shadow`, `conf files`, `bin files`, etc. **those are defined as sections, and those sections can be added/removed.** To see which sections are availabe, please refer to the following [firmwalker output](https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvcyFBdWNRTVlYSk5lZmR2R1p5ZVl0MTZINzJWQ0x2&cid=DDE735C9853110E7&id=DDE735C9853110E7%217784&parId=DDE735C9853110E7%217782&o=OneUp) taken from the script's GitHub repository.
A section is what comes after the 37 `#` charachters, for example: 
```
passwd
*id_rsa*
*.conf
emails
```
The results are saved in separate text files for each section as well as a file for the complete output.

The output file and results are stored in the `firmwalker_results` directory.

## Firmwalker and Docker

The goal now is for the firmwalker module to be integrated into the project's docker environment.

For this, we need the `Dockerfile_firmwalker`,also found in the directory `/jobs`, which ensures the proper installation and configuration of firmwalker within the Docker container.

The Dockerfile begins by using `python:3.11` as the base image.
It then updates the package lists and installs `bash` for script execution.
Afterwards, it creats a python virtual environment in `/app/venv`, upgrades `pip` and installs necessary dependencies, then sets up the environment variable `PATH` to include the virtual environment.
Next, the working directroy is set to `/app` where all the needed files are copied to in the container.
The script `firmwalker.sh` is given executable permissions, and it i s specified that the container should run `python3 /app/firmwalker_service.py` when started. This initializes the Firmwalker API Service.

The newly made container should then be made part of the docker-compose file found in the cloned project under `firmware_vault/docker_compose_dir/docker-compose.yaml`, this is done by adding the following as a service: 

``` yaml
  firmwalker:
    container_name: firmwalker
    build:
      context: ../jobs
      dockerfile: Dockerfile_firmwalker
    volumes:
      - executor:/tasks
      - scraper_downloads:/amos_project/downloads/
    environment:
      - DB_CONTAINER=${DATABASE_DB_CONTAINER}
      - MYSQL_USER=${DATABASE_USER}
      - MYSQL_PASSWORD=${DATABASE_PASSWORD}
      - DB_SCHEMA=${DATABASE_SCHEMA}
      - DB_PORT=${DATABASE_PORT}
    networks:
      - firmware_network
    ports:
      - "5004:5004"
    restart: unless-stopped
```
We start by specifying the name of the service, then the name of the container.
under `build` we have `context` which points to the files needed to build the image, as well as `dockerfile` which specifies which Dockerfile to use.

Then, we define the needed volumes to presist data and share it between containers or use data shared from other containers.
Here we mount the volumes `executor` and `scraper_downloads` (found in the cloned project under `firmware_vault/docker_compose_dir/volumes`) respectively to the `/tasks` and `/amos_project/downloads/` directories inside the container.

Next, the needed environment variables are set, and the network `firmware_network` is defined as the network for this container to join. This makes sure that our container will be connected to the same Docker network as the other services in our compose setup.

Lastly, with 
```yaml
ports:
  - "5004:5004"
```
we map the port **5004** from inside the container to port **5004** on the host machine. 

On a last note, we need to make sure to copy the **client-side** script `firmwalker.py` to the executor container. This is done by adding the following line:
``` yaml
COPY firmwalker.py /working_dir
```
to the `Dockerfile_executor` file found under `/jobs`.