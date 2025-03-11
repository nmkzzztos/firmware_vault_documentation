"use strict";(self.webpackChunkfirmware_vault_docs=self.webpackChunkfirmware_vault_docs||[]).push([[5390],{3088:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Backend/firmwalker","title":"Firmwalker","description":"As mentioned before, firmwalker is an open-source bash script.","source":"@site/docs/Backend/firmwalker.md","sourceDirName":"Backend","slug":"/Backend/firmwalker","permalink":"/firmware_vault_documentation/docs/Backend/firmwalker","draft":false,"unlisted":false,"editUrl":"https://github.com/nmkzzztos/firmware_vault_documentation/tree/main/docs/Backend/firmwalker.md","tags":[],"version":"current","frontMatter":{"id":"firmwalker","title":"Firmwalker"},"sidebar":"gettingStartedSidebar","previous":{"title":"The Implemented Modules","permalink":"/firmware_vault_documentation/docs/Backend/implemented-modules"},"next":{"title":"Debugging Docker","permalink":"/firmware_vault_documentation/docs/Backend/debugging-docker"}}');var i=s(4848),t=s(8453);const c={id:"firmwalker",title:"Firmwalker"},a="Firmwalker",o={},l=[{value:"The Individual Components",id:"the-individual-components",level:2},{value:"1. <strong><code>firmwalker.py</code></strong> (Client-side Script)",id:"1-firmwalkerpy-client-side-script",level:3},{value:"2. <strong><code>firmwalker_service.py</code></strong> (Flask API Server)",id:"2-firmwalker_servicepy-flask-api-server",level:3},{value:"3. <strong><code>firmwalker_analysis.py</code></strong> (Firmware Analysis Script)",id:"3-firmwalker_analysispy-firmware-analysis-script",level:3},{value:"Firmwalker and Docker",id:"firmwalker-and-docker",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"firmwalker",children:"Firmwalker"})}),"\n",(0,i.jsxs)(r.p,{children:["As mentioned before, ",(0,i.jsx)(r.a,{href:"https://github.com/craigz28/firmwalker",children:"firmwalker"})," is an open-source bash script."]}),"\n",(0,i.jsxs)(r.p,{children:["The following three primary components are found in the ",(0,i.jsx)(r.code,{children:"/jobs"}),"directory:"]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"firmwalker.py"})}),": A client-side script that interacts with the Flask API to request firmware analysis."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"firmwalker_service.py"})}),": A Flask web service that exposes an API for remote requests to analyze firmware images using Firmwalker."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"firmwalker_analysis.py"})}),": A Python script that performs the actual analysis of the firmware by invoking the open source bash script ",(0,i.jsx)(r.code,{children:"firmwalker.sh"})," to process extracted firmware data, that we previously extracted with ",(0,i.jsx)(r.code,{children:"binwalk"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"the-individual-components",children:"The Individual Components"}),"\n",(0,i.jsxs)(r.h3,{id:"1-firmwalkerpy-client-side-script",children:["1. ",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"firmwalker.py"})})," (Client-side Script)"]}),"\n",(0,i.jsxs)(r.p,{children:["This script acts like the entry point for sending requests to the ",(0,i.jsx)(r.strong,{children:"Firmwalker service"}),". It is responsible for:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Sending an HTTP request to the ",(0,i.jsx)(r.strong,{children:"Firmwalker service"})," (Flask API)."]}),"\n",(0,i.jsxs)(r.li,{children:["Passing the necessary parameters (",(0,i.jsx)(r.code,{children:"image_id"}),", ",(0,i.jsx)(r.code,{children:"path"}),", ",(0,i.jsx)(r.code,{children:"output_path"}),") to the service."]}),"\n",(0,i.jsx)(r.li,{children:"Handling the response from the service and printing the results."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"The script accepts three arguments:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"image_id"}),": The unique identifier for the firmware image from the database."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"path"}),": The path to the extracted firmware image directory."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"output_path"}),": The output location for the analysis results."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["The script constructs a ",(0,i.jsx)(r.strong,{children:"POST request"})," to the ",(0,i.jsx)(r.code,{children:"/post"})," endpoint of the Flask service ",(0,i.jsx)(r.code,{children:"firmwalker_service.py"})," running at ",(0,i.jsx)(r.code,{children:"http://firmwalker:5004/post"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.strong,{children:"request"})," body includes a JSON payload with the keys ",(0,i.jsx)(r.code,{children:"image_id"}),", ",(0,i.jsx)(r.code,{children:"path"})," and ",(0,i.jsx)(r.code,{children:"output_path"})]}),"\n",(0,i.jsx)(r.p,{children:"Upon receiving a response from the Flask API:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["If successful , as in ",(0,i.jsx)(r.code,{children:"status_code == 200"}),", the script prints the JSON ",(0,i.jsx)(r.strong,{children:"response"})," from the API, which includes the result of the firmware analysis."]}),"\n",(0,i.jsx)(r.li,{children:"If an error occurs, it prints the error message."}),"\n"]}),"\n",(0,i.jsxs)(r.h3,{id:"2-firmwalker_servicepy-flask-api-server",children:["2. ",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"firmwalker_service.py"})})," (Flask API Server)"]}),"\n",(0,i.jsxs)(r.p,{children:["This is the ",(0,i.jsx)(r.strong,{children:"Flask web service"})," that acts as a middleman between the ",(0,i.jsx)(r.strong,{children:"client"})," ",(0,i.jsx)(r.code,{children:"firmwalker.py"})," and the ",(0,i.jsx)(r.strong,{children:"analysis process"})," ",(0,i.jsx)(r.code,{children:"firmwalker_analysis.py"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["The Flask service listens for ",(0,i.jsx)(r.strong,{children:"POST requests"})," on the ",(0,i.jsx)(r.code,{children:"/post"})," endpoint.\nThe request body should contain a JSON payload with the three parameters mentioned above."]}),"\n",(0,i.jsxs)(r.p,{children:["The service then verifies that the required parameters ",(0,i.jsx)(r.code,{children:"image_id"}),", ",(0,i.jsx)(r.code,{children:"path"}),", ",(0,i.jsx)(r.code,{children:"output_path"})," are present in the request. It also checks if the specified firmware extraction directory (",(0,i.jsx)(r.code,{children:"extracted"}),") exists in the provided ",(0,i.jsx)(r.code,{children:"path"})," and if not, prints ",(0,i.jsx)(r.code,{children:"Please extract the firmware first with binwalk!"})]}),"\n",(0,i.jsxs)(r.p,{children:["If the extraction directory is present valid, the Flask service calls ",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"firmwalker_analysis.py"})})," to perform the actual analysis, this will be explained later. It passes the ",(0,i.jsx)(r.code,{children:"path"})," argument to this script."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["This is done using the ",(0,i.jsx)(r.code,{children:"subprocess.run()"})," function, which executes the ",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"firmwalker_analysis.py"})})," script as a subprocess."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["After the analysis completes, the service returns a ",(0,i.jsx)(r.strong,{children:"JSON response"}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"If successful, it includes a success message along with the path to the saved output file."}),"\n",(0,i.jsx)(r.li,{children:"If any error occurs, it returns an error message and logs the issue."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["The service logs important events, such as incoming requests, successful analyses, and errors, to a log file (",(0,i.jsx)(r.code,{children:"firmwalker.log"}),") to help with auditing and debugging."]}),"\n",(0,i.jsxs)(r.h3,{id:"3-firmwalker_analysispy-firmware-analysis-script",children:["3. ",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"firmwalker_analysis.py"})})," (Firmware Analysis Script)"]}),"\n",(0,i.jsxs)(r.p,{children:["This script is a wrapper around the ",(0,i.jsx)(r.code,{children:"firmwalker.sh"})," script and is responsible for the actual analysis of the firmware image. It processes the extracted firmware files and generates analysis results."]}),"\n",(0,i.jsxs)(r.p,{children:["The script takes one argument: the ",(0,i.jsx)(r.strong,{children:"path to the extracted firmware directory"})," ",(0,i.jsx)(r.code,{children:"firmwalker_extracted_path"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"firmwalker_analysis.py"})})," calls the ",(0,i.jsx)(r.code,{children:"firmwalker.sh"})," Bash script to process the extracted firmware.\nThe ",(0,i.jsx)(r.code,{children:"firmwalker.sh"})," script analyzes the contents of the extracted directory (e.g., checking for passwords, configuration files, etc.)."]}),"\n",(0,i.jsxs)(r.p,{children:["After running ",(0,i.jsx)(r.code,{children:"firmwalker.sh"}),", the script processes its output, extracting key sections like: ",(0,i.jsx)(r.code,{children:"passwd"}),", ",(0,i.jsx)(r.code,{children:"shadow"}),", ",(0,i.jsx)(r.code,{children:"conf files"}),", ",(0,i.jsx)(r.code,{children:"bin files"}),", etc. ",(0,i.jsx)(r.strong,{children:"those are defined as sections, and those sections can be added/removed."})," To see which sections are availabe, please refer to the following ",(0,i.jsx)(r.a,{href:"https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvcyFBdWNRTVlYSk5lZmR2R1p5ZVl0MTZINzJWQ0x2&cid=DDE735C9853110E7&id=DDE735C9853110E7%217784&parId=DDE735C9853110E7%217782&o=OneUp",children:"firmwalker output"})," taken from the script's GitHub repository.\nA section is what comes after the 37 ",(0,i.jsx)(r.code,{children:"#"})," charachters, for example:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"passwd\n*id_rsa*\n*.conf\nemails\n"})}),"\n",(0,i.jsx)(r.p,{children:"The results are saved in separate text files for each section as well as a file for the complete output."}),"\n",(0,i.jsxs)(r.p,{children:["The output file and results are stored in the ",(0,i.jsx)(r.code,{children:"firmwalker_results"})," directory."]}),"\n",(0,i.jsx)(r.h2,{id:"firmwalker-and-docker",children:"Firmwalker and Docker"}),"\n",(0,i.jsx)(r.p,{children:"The goal now is for the firmwalker module to be integrated into the project's docker environment."}),"\n",(0,i.jsxs)(r.p,{children:["For this, we need the ",(0,i.jsx)(r.code,{children:"Dockerfile_firmwalker"}),",also found in the directory ",(0,i.jsx)(r.code,{children:"/jobs"}),", which ensures the proper installation and configuration of firmwalker within the Docker container."]}),"\n",(0,i.jsxs)(r.p,{children:["The Dockerfile begins by using ",(0,i.jsx)(r.code,{children:"python:3.11"})," as the base image.\nIt then updates the package lists and installs ",(0,i.jsx)(r.code,{children:"bash"})," for script execution.\nAfterwards, it creats a python virtual environment in ",(0,i.jsx)(r.code,{children:"/app/venv"}),", upgrades ",(0,i.jsx)(r.code,{children:"pip"})," and installs necessary dependencies, then sets up the environment variable ",(0,i.jsx)(r.code,{children:"PATH"})," to include the virtual environment.\nNext, the working directroy is set to ",(0,i.jsx)(r.code,{children:"/app"})," where all the needed files are copied to in the container.\nThe script ",(0,i.jsx)(r.code,{children:"firmwalker.sh"})," is given executable permissions, and it i s specified that the container should run ",(0,i.jsx)(r.code,{children:"python3 /app/firmwalker_service.py"})," when started. This initializes the Firmwalker API Service."]}),"\n",(0,i.jsxs)(r.p,{children:["The newly made container should then be made part of the docker-compose file found in the cloned project under ",(0,i.jsx)(r.code,{children:"firmware_vault/docker_compose_dir/docker-compose.yaml"}),", this is done by adding the following as a service:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:'  firmwalker:\n    container_name: firmwalker\n    build:\n      context: ../jobs\n      dockerfile: Dockerfile_firmwalker\n    volumes:\n      - executor:/tasks\n      - scraper_downloads:/amos_project/downloads/\n    environment:\n      - DB_CONTAINER=${DATABASE_DB_CONTAINER}\n      - MYSQL_USER=${DATABASE_USER}\n      - MYSQL_PASSWORD=${DATABASE_PASSWORD}\n      - DB_SCHEMA=${DATABASE_SCHEMA}\n      - DB_PORT=${DATABASE_PORT}\n    networks:\n      - firmware_network\n    ports:\n      - "5004:5004"\n    restart: unless-stopped\n'})}),"\n",(0,i.jsxs)(r.p,{children:["We start by specifying the name of the service, then the name of the container.\nunder ",(0,i.jsx)(r.code,{children:"build"})," we have ",(0,i.jsx)(r.code,{children:"context"})," which points to the files needed to build the image, as well as ",(0,i.jsx)(r.code,{children:"dockerfile"})," which specifies which Dockerfile to use."]}),"\n",(0,i.jsxs)(r.p,{children:["Then, we define the needed volumes to presist data and share it between containers or use data shared from other containers.\nHere we mount the volumes ",(0,i.jsx)(r.code,{children:"executor"})," and ",(0,i.jsx)(r.code,{children:"scraper_downloads"})," (found in the cloned project under ",(0,i.jsx)(r.code,{children:"firmware_vault/docker_compose_dir/volumes"}),") respectively to the ",(0,i.jsx)(r.code,{children:"/tasks"})," and ",(0,i.jsx)(r.code,{children:"/amos_project/downloads/"})," directories inside the container."]}),"\n",(0,i.jsxs)(r.p,{children:["Next, the needed environment variables are set, and the network ",(0,i.jsx)(r.code,{children:"firmware_network"})," is defined as the network for this container to join. This makes sure that our container will be connected to the same Docker network as the other services in our compose setup."]}),"\n",(0,i.jsx)(r.p,{children:"Lastly, with"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:'ports:\n  - "5004:5004"\n'})}),"\n",(0,i.jsxs)(r.p,{children:["we map the port ",(0,i.jsx)(r.strong,{children:"5004"})," from inside the container to port ",(0,i.jsx)(r.strong,{children:"5004"})," on the host machine."]}),"\n",(0,i.jsxs)(r.p,{children:["On a last note, we need to make sure to copy the ",(0,i.jsx)(r.strong,{children:"client-side"})," script ",(0,i.jsx)(r.code,{children:"firmwalker.py"})," to the executor container. This is done by adding the following line:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"COPY firmwalker.py /working_dir\n"})}),"\n",(0,i.jsxs)(r.p,{children:["to the ",(0,i.jsx)(r.code,{children:"Dockerfile_executor"})," file found under ",(0,i.jsx)(r.code,{children:"/jobs"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>a});var n=s(6540);const i={},t=n.createContext(i);function c(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);