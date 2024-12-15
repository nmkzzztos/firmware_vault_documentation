"use strict";(self.webpackChunkfirmware_vault_docs=self.webpackChunkfirmware_vault_docs||[]).push([[4854],{9731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Getting Started/knowntodos","title":"Known TODOs","description":"Small TODOs","source":"@site/docs/Getting Started/knowntodos.md","sourceDirName":"Getting Started","slug":"/Getting Started/knowntodos","permalink":"/firmware_vault_documentation/docs/Getting Started/knowntodos","draft":false,"unlisted":false,"editUrl":"https://github.com/nmkzzztos/firmware_vault_documentation/docs/Getting Started/knowntodos.md","tags":[],"version":"current","frontMatter":{},"sidebar":"gettingStartedSidebar","previous":{"title":"Debugging Docker Problems","permalink":"/firmware_vault_documentation/docs/Getting Started/debugdocker"},"next":{"title":"Angular","permalink":"/firmware_vault_documentation/docs/Frontend/introduction"}}');var s=n(4848),r=n(8453);const o={},a="Known TODOs",l={},d=[{value:"Small TODOs",id:"small-todos",level:2},{value:"Big Features / Projects",id:"big-features--projects",level:2}];function c(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"known-todos",children:"Known TODOs"})}),"\n",(0,s.jsx)(t.h2,{id:"small-todos",children:"Small TODOs"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Separate the requirements.txt for api_scheduler and executor, or create an additional list of analysis modules to be loaded into the executor."}),"\n",(0,s.jsx)(t.li,{children:"(Optional) Have the (job) scheduler remove jobs from its internal store if they are disabled. This also means that if a job is toggled active again, the API will need to re-add it."}),"\n",(0,s.jsx)(t.li,{children:"We currently have no analysis tools that produce their own log files. In theory, Firmware_Vault does have a placeholder and support for this, but it was never actually tested."}),"\n",(0,s.jsx)(t.li,{children:"clean up the products table"}),"\n",(0,s.jsx)(t.li,{children:'clean up the jobs directory (also rename to "Analysis Engine". jobs dose no longe make sense)'}),"\n",(0,s.jsx)(t.li,{children:"clean up the init scripts for the DB"}),"\n",(0,s.jsx)(t.li,{children:"change the job overview (in the frontend) so it only shows enabled jobs by default and add a option to unhide disabled jobs"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"big-features--projects",children:"Big Features / Projects"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"turns out the configs of the amos scraper are not functional and max products is defined in each vendor specific part. this should be changed"}),"\n",(0,s.jsx)(t.li,{children:"More scraper spiders (each manufacturer's web page requires a specialized spider; it would be nice to pull firmware from more manufacturers)."}),"\n",(0,s.jsx)(t.li,{children:"More analysis modules (right now there are only binwalk and cve-bin-tool)."}),"\n",(0,s.jsx)(t.li,{children:"Add EMBA support (EMBA is very demanding on resources and picky in terms of the operating system). (Possibly add a remote VM that handles EMBA tasks)."}),"\n",(0,s.jsx)(t.li,{children:"Analysis results that are not entered into the DB are held in output.txt files. There is no way to quickly search over all the output.txt files for specific outputs. Some kind of filter in the job overview that filters tasks based on keywords in the output might be handy."}),"\n",(0,s.jsx)(t.li,{children:"Since Firmware_Vault is intended to mostly passively run, it might make sense to add email alerts if an analysis detects vulnerable firmware. (Eventually, automatically send bug reports directly to the manufacturers?)"}),"\n",(0,s.jsx)(t.li,{children:"Some better way to view the Firmware store (product table in the DB) than the SQL test screen in the job creation view."}),"\n",(0,s.jsx)(t.li,{children:"Some statistics about the system, like scraped images and other metrics."}),"\n",(0,s.jsx)(t.li,{children:"The DB layout in the front end is hard-coded. It would be nice if it were pulled dynamically from the DB."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);