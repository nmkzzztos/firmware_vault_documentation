---
id: introduction
title: Introduction
---

# About Firmware_vault

This project aims to automate firmware analysis as much as possible. Firmware_Vault independently collects firmware images from device manufacturers using the [AMOS Firmware Scraper](https://github.com/amosproj/amos2022ws01-firmware-scraper) and catalogs them. With a user-friendly interface, analysis jobs can be created. Users have great flexibility in choosing analysis methods (eg. binwalk, cve-bin-tool .. etc.) and the ability to run jobs repeatedly as cronjobs. This way, a wide collection of various firmware can be quickly scanned for vulnerabilities.

![About Firmwarevault](img/architecture.svg)

## Scraping

* The scraping process is started by the scheduler container, which starts the Python scraper container.
* The scraper then pulls the latest firmware from the enabled vendors. Metadata is inserted in the DB, and the firmware is located in the file system. It also attempts to extract the .bin file from zip files.

## Frontend

* To simplify user interactions, a reworked web UI is provided.
* It can be viewed by visiting port 80 (HTTP) of the host the system is running on.
* From here, the user can interact with the three main parts that make the UI; [Data Explorer](https://nmkzzztos.github.io/firmware_vault_documentation/docs/Frontend/data-explorer), [Firmware Vault](https://nmkzzztos.github.io/firmware_vault_documentation/docs/Frontend/firmware-vault) and [Overview](https://nmkzzztos.github.io/firmware_vault_documentation/docs/Frontend/overview).

## Analysis Engine

* This is the part that enables security testing of the firmware catalog.
* The Analysis Engine is mainly made up of three parts running in two containers.
* api_scheduler container: 

    This container hosts the API as well as the scheduler.
    
    * api.py:

        * Can be reached under port 5000.
        * Acts as the backend and works on requests from the web UI.
        * Requests can be data requests from the DB, running SQL queries, or creating a new job.
        
    * scheduler.py:

        * Can be reached under port 5001.
        * The scheduler decides if and when a job is handed to the executor.
        * Once the API has created a job, it sends a signal to the scheduler.
        * All jobs are executed once immediately. If a cron schedule was provided, the job is also entered into ap_scheduler and executed according to the schedule.
        * Before handing the job to the executor, the scheduler checks if the job is disabled.

    * executor: 
     
        * executor.py program runs in this container.
        * The analysis tools, like binwalk, etc., will also be executed in this container.
        * To use new analysis tools, **they will have to be loaded onto the executor container** using the executor's _Dockerfile_.

        * executor.py: 

            The executor is relatively complex; please also see the dedicated documentation.

            * The executor can be reached under port 5002.
            * The executor receives only signals, so it has to pull the job data from the DB.
            * Before executing the job (an analysis that has to be performed for multiple firmware images), it has to be split into tasks (an analysis that is to be performed for a single image).
            * The execution of the tasks is done in parallel.
            * Output of the analysis tool is placed into an output.txt in the file system (volume: executor).

# Docker Compose

All components of Firmware Vault run in Docker containers. To avoid lengthy setup, the containers are combined in a Docker Compose file. 

Data that needs to be stored in a file system should be stored in a Docker volume that references a folder in the /docker_compose_dir/volumes.

If you're having trouble with Docker, take a look at the DebugDocker documentation.
