# Known TODOs

## Small TODOs
- Separate the requirements.txt for api_scheduler and executor, or create an additional list of analysis modules to be loaded into the executor.
- (Optional) Have the (job) scheduler remove jobs from its internal store if they are disabled. This also means that if a job is toggled active again, the API will need to re-add it.
- We currently have no analysis tools that produce their own log files. In theory, Firmware_Vault does have a placeholder and support for this, but it was never actually tested.
- clean up the products table 
- clean up the jobs directory (also rename to "Analysis Engine". jobs dose no longe make sense)
- clean up the init scripts for the DB
- change the job overview (in the frontend) so it only shows enabled jobs by default and add a option to unhide disabled jobs 


## Big Features / Projects
- turns out the configs of the amos scraper are not functional and max products is defined in each vendor specific part. this should be changed
- More scraper spiders (each manufacturer's web page requires a specialized spider; it would be nice to pull firmware from more manufacturers).
- More analysis modules (right now there are only binwalk and cve-bin-tool).
- Add EMBA support (EMBA is very demanding on resources and picky in terms of the operating system). (Possibly add a remote VM that handles EMBA tasks).
- Analysis results that are not entered into the DB are held in output.txt files. There is no way to quickly search over all the output.txt files for specific outputs. Some kind of filter in the job overview that filters tasks based on keywords in the output might be handy.
- Since Firmware_Vault is intended to mostly passively run, it might make sense to add email alerts if an analysis detects vulnerable firmware. (Eventually, automatically send bug reports directly to the manufacturers?)
- Some better way to view the Firmware store (product table in the DB) than the SQL test screen in the job creation view.
- Some statistics about the system, like scraped images and other metrics.
- The DB layout in the front end is hard-coded. It would be nice if it were pulled dynamically from the DB.
