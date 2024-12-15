# Angular

The frontend uses the Angular framework, which employs a component-based approach. This allows for the reuse of components in various scenarios.

**General**

Our website is developed in dark mode. For Styling we use bootstrap. Before adding new pages make sure to create it in the *src/app/pages* directory. Components in the *src/app/components* directory.

**Component**

A component consists of 3 files. The .html, .tsx and .scss.
The .html as the file name says contains html "code". In .tsx is the logic of how the component works. Styling is possible in the .scss.

**Setup**

The frontend will automatically start with the docker compose.

For development purpose it can be start via *ng serve*.

If started for the first time do *npm i*.

**Add new components**

A new component can be created with the angular cli:

    command ng g c component-name

After that import and then insert the component into the @NgModule declerations.

# Project Structure

**Pages**

Pages are components too. But it is not recommended to reuse them.

Each Page consists of html elements + reusable components that can be found in the components directory (src/app/components).

So far there a 4 pages:
* Home
* Jobs
* Job Detail
* Tutorial

*Home:*

Landing Page to add a new Job and trigger a analysis.

*Jobs:*

Here are all Jobs listed.

*Job Detail:*

Specific Details for a job. There is also a list of tasks that the job contains.

**Useful Components**

* table-button
* table
* navbar
* shelleditor
* sql editor

**Components in Detail**

*table-button:*

This table is especially designed for tasks data. It could be used for different data, but it has some functionality that is specifically for tasks (show full output). The table takes various inputs. The main inputs are what data should be shown, how the styling of the table should look like and to decide how the table is scaled in height and width.

*table:*

It works pretty much like the table-button with the only difference that it mainly takes jobs as data. It also has a href element in the last colum to get to the specific job.

*shelleditor:*

This component uses the ace editor. With the editor it is possible to set Themes and set a mode, in this case sh.

*sql editor*

Same as shelleditor just a different mode.

*label-output*

Just a form input with certain styling.

**Services**

Services provide interfaces to get data from the database. To utilize a service in Angular, include it as a parameter in the constructor of the component class. Angular's dependency injection system will then provide an instance of the service to the component.Now the service is usable inside the class.

Services:

* image.service.ts
* job.service.ts
* task.service.ts