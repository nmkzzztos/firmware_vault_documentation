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

## binwalk

```binwalk3.py``` automates the process of running Binwalk on a given firmware 
image, extracting relevant information, and storing the results in a 
database.
It runs with the ```-Me``` flags, which are required for deeper analysis

## Firmwalker

```firmwalker_service.py``` is a wrapper around the [firmwalker.sh](https://github.com/craigz28/firmwalker) open-source bash script, which automates finding file that could be of interest for further analysis, such as **/etc/shadow** or .cfg files. 

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

### 1. Writing the client-sided script to interact with the Wrapper
The following template cann be used to make the script, make sure to change the `name of service` and `port`
```python
import requests
import sys

def run_firmwalker(image_id: str, path: str, output_path: str):
    """Send a request to the Firmwalker service."""
    url = "http://<name of service>:<port>/post"
    payload = {
        "image_id": image_id,
        "path": path,
        "output_path": output_path,
    }

    try:
        response = requests.post(url, json=payload)

        if response.status_code == 200:
            print(f"Successful response: {response.json()}")
        else:
            print(f"Error during processing: {response.text}")
    except Exception as e:
        print(f"Error sending request: {e}")

def main(image_id: str, path: str, output_path: str):
    run_firmwalker(image_id, path, output_path)

if __name__ == "__main__":
    image_id: str = sys.argv[1]
    path: str = sys.argv[2]
    output_path: str = sys.argv[3]
    main(image_id, path, output_path)
```
### 2. Writing the wrapper itself
The Flask API here will handle requests from the client script and invoke the desired services or components to process the data.
Please look at the file `firmwalker_service.py` while reading this part so it makes sense.

First make the necessary imports:
```python
from flask import Flask, request, jsonify
from multiprocessing import Pool, freeze_support, set_start_method, get_start_method
import os
import subprocess
import logging
```
- Instantiate the Flask App with:
```python 
app = Flask(__name__)
```

- Keep the logging part and change the name of the logfile to match the name of your service: 
```python 
logging.basicConfig(
    filename="<Name of Service>.log",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)
```
- Implement the `run_<service name>()`method which contains the main functionality of your Wrapper.

- Keep the `handle_<service name>_task(image_id: str, path: str, output_path: str) -> dict` method as is, don't forget to change the name of `run_<service name>` when calling it.

- Keep the `@app.route("/post", methods=["POST"])
def handle_request()` method. Don't forget to make the necessary changes to the called functions as mentioned above.

- Keep the `if __name__ == "__main__":`part, and don't forget to change the **port** in the `app.run()` method call.

- Finally, you need to edit the `Dockerfile_executor`. Copy your newly created **client-side script** into the working directory. Also, don't forget to add any necessary commands to install/load the analysis tool you are wrapping.


**Note:**

The previous example was based on `firmwalker_service.py`, which doesn't save the output to the database, if that functionality is needed, please refer to `binwalk3.py`. 
