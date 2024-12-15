"use strict";(self.webpackChunkfirmware_vault_docs=self.webpackChunkfirmware_vault_docs||[]).push([[5494],{8778:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"introduction","title":"Introduction","description":"In our project, we aim to build a system that automates firmware analysis as much as possible. Firmware_Vault independently collects firmware images from device manufacturers and catalogs them. With a user-friendly interface, analysis jobs can be created. Users have great flexibility in choosing analysis methods and the ability to run jobs repeatedly. This way, a wide collection of various firmware can be quickly and mostly automatically scanned for vulnerabilities.","source":"@site/docs/Introduction.md","sourceDirName":".","slug":"/introduction","permalink":"/firmware_vault_documentation/docs/introduction","draft":false,"unlisted":false,"editUrl":"https://gitlab.informatik.hs-augsburg.de/firmware-analysis/firmware_vault/docs/Introduction.md","tags":[],"version":"current","frontMatter":{"id":"introduction","title":"Introduction"},"sidebar":"gettingStartedSidebar","next":{"title":"Installation","permalink":"/firmware_vault_documentation/docs/Getting Started/installation"}}');var s=i(4848),r=i(8453);const a={id:"introduction",title:"Introduction"},l="Overview",o={},c=[{value:"Scraping",id:"scraping",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Analysis Engine",id:"analysis-engine",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,s.jsx)(n.h1,{id:"about-firmwarevault",children:"About Firmwarevault"}),"\n",(0,s.jsx)(n.p,{children:"In our project, we aim to build a system that automates firmware analysis as much as possible. Firmware_Vault independently collects firmware images from device manufacturers and catalogs them. With a user-friendly interface, analysis jobs can be created. Users have great flexibility in choosing analysis methods and the ability to run jobs repeatedly. This way, a wide collection of various firmware can be quickly and mostly automatically scanned for vulnerabilities."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"About Firmwarevault",src:i(8577).A+"",width:"1699",height:"874"})}),"\n",(0,s.jsx)(n.h2,{id:"scraping",children:"Scraping"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The scraping process is started by the scheduler container, which starts the Python scraper container."}),"\n",(0,s.jsx)(n.li,{children:"The scraper then pulls the latest firmware from the enabled vendors. Metadata is inserted in the DB, and the firmware is located in the file system. It also attempts to extract the .bin file from zip files."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"frontend",children:"Frontend"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To simplify user interactions, a simple web UI is provided."}),"\n",(0,s.jsx)(n.li,{children:"It can be viewed by visiting port 80 (HTTP) of the host the system is running on."}),"\n",(0,s.jsx)(n.li,{children:"From here, the user can run non-editing SQL queries, view the analysis jobs and the test results, as well as create new analysis jobs."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"analysis-engine",children:"Analysis Engine"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This is the part that enables security testing of the firmware catalog."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The Analysis Engine is mainly made up of three parts running in two containers."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"api_scheduler container:"}),"\n",(0,s.jsx)(n.p,{children:"This container hosts the API as well as the scheduler."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"api.py:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Can be reached under port 5000."}),"\n",(0,s.jsx)(n.li,{children:"Acts as the backend and works on requests from the web UI."}),"\n",(0,s.jsx)(n.li,{children:"Requests can be data requests from the DB, running SQL queries, or creating a new job."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"scheduler.py:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Can be reached under port 5001."}),"\n",(0,s.jsx)(n.li,{children:"The scheduler decides if and when a job is handed to the executor."}),"\n",(0,s.jsx)(n.li,{children:"Once the API has created a job, it sends a signal to the scheduler."}),"\n",(0,s.jsx)(n.li,{children:"All jobs are executed once immediately. If a cron schedule was provided, the job is also entered into ap_scheduler and executed according to the schedule."}),"\n",(0,s.jsx)(n.li,{children:"Before handing the job to the executor, the scheduler checks if the job is disabled."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"executor:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"executor.py program runs in this container."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The analysis tools, like binwalk, etc., will also be executed in this container."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To use new analysis tools, they will have to be loaded onto the executor container."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"executor.py:"}),"\n",(0,s.jsx)(n.p,{children:"The executor is relatively complex; please also see the dedicated documentation."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The executor can be reached under port 5002."}),"\n",(0,s.jsx)(n.li,{children:"The executor receives only signals, so it has to pull the job data from the DB."}),"\n",(0,s.jsx)(n.li,{children:"Before executing the job (an analysis that has to be performed for multiple firmware images), it has to be split into tasks (an analysis that is to be performed for a single image)."}),"\n",(0,s.jsx)(n.li,{children:"The execution of the tasks is done in parallel."}),"\n",(0,s.jsx)(n.li,{children:"Output of the analysis tool is placed into an output.txt in the file system (volume: executor)."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,s.jsx)(n.p,{children:"All components of Firmware Vault run in Docker containers. To avoid lengthy setup, the containers are combined in a Docker Compose file."}),"\n",(0,s.jsx)(n.p,{children:"Data that needs to be stored in a file system should be stored in a Docker volume that references a folder in the /docker_compose_dir/volumes."}),"\n",(0,s.jsx)(n.p,{children:"If you're having trouble with Docker, take a look at the DebugDocker documentation."}),"\n",(0,s.jsx)(n.h1,{id:"todos",children:(0,s.jsx)(n.strong,{children:"Todos"})}),"\n",(0,s.jsxs)(n.p,{children:["If you're interested in improving Firmware Vault, take a look in the ",(0,s.jsx)(n.a,{href:"Getting%20Started/knowntodos",children:"Known TODOs"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8577:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Aufbau_Dark-ad9a07d467db9549b070b5849cd4db01.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);