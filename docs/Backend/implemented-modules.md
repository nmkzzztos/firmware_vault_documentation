---
id: implemented-modules
title: The Implemented Modules
---

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

```firmwalker_service.py``` is a wrapper around the [firmwalker.sh](https://github.com/craigz28/firmwalker) open-source bash script.
More about Firmwalker in the dedicated Documentation page.