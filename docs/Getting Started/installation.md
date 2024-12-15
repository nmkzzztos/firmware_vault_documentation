---
id: installation
title: Installation
---

# Setup

1. Clone the git repo to your machine.
2. Depending on your operating system, execute the `init_script.sh` or the `init_script_windows.ps1` scripts. They will guide you through the configuration. (This will configure config.json for the scraper, frontend, analysis engine, and docker environment.)
3. Navigate into the docker_compose_dir.
4. Start the system with `docker compose up -d`.

* If you have already built the containers and want to rebuild them, use:

    ```bash 
    docker compose up -d --build
    ```

* If you start the entire system, the scraper will start immediately. This will potentially take up a lot of disk space. If you want to start only some parts of the system for testing purposes, you can do that like so:

    ```bash 
    docker compose up --build -d mysql_db frontend api_scheduler executor
    ```

    Depending on what you are trying to achieve, you can also append more containers like:

    ```python_scraper```: scraper service that downloads Firmware-Images 

    ```scheduler```: cron service that starts the python_scraper 

    ```backup```: service that backs up the mysql_db data

# Usage

Once the system is running, you can view the web UI by visiting port 80 (http) of the host the system is running on:

```http://localhost```

```http://<ip.of.your.server>```

For a guide on how to create analysis jobs, refer to the "how to use" page in the web UI.

The system comes with two analysis tools pre-installed; both are set up to write the results into the DB:

* Intel's CVE Binary Tool: 
    Looks for known vulnerabilities in binary files.

    ```bash
    python 
    ```

* Binwalk:
    Checks the headers of binary files.
    (Binwalk is intended to gain information to use in further testing.)

    ```bash
    python binwalk.py <image_id> <image_path>
    ```

We recommend adding your own tools/analysis modules to the executor container.

Please note the scraper will first scrape all the metadata, and only after this step is done, the downloading begins. So you will need to wait a bit before you have data to test.

Currently, our scraper is only set up to pull firmware from 4 vendors. Unfortunately, every time the web page of the vendor changes, the scraping process breaks, so you will likely need to redo the vendor-specific parts of the scraper (see documentation).

# Documentation

For further information about Firmware_Vault, see the documentation folder.


# Caution

Firmware Vault exposes ports to the local network. Because we don't want to limit what security testing tools a user might want to run, Firmware Vault essentially  exposes remote code execution to the local network. 

We also let the user run SQL commands. The checks that prevent data editing are very rudimentary, and malicious queries are likely possible.

Because of this, please ensure that only trusted persons have access.



