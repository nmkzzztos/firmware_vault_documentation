"use strict";(self.webpackChunkfirmware_vault_docs=self.webpackChunkfirmware_vault_docs||[]).push([[8789],{3941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Frontend/introduction","title":"Angular","description":"The frontend uses the Angular framework, which employs a component-based approach. This allows for the reuse of components in various scenarios.","source":"@site/docs/Frontend/introduction.md","sourceDirName":"Frontend","slug":"/Frontend/introduction","permalink":"/firmware_vault_documentation/docs/Frontend/introduction","draft":false,"unlisted":false,"editUrl":"https://gitlab.informatik.hs-augsburg.de/firmware-analysis/firmware_vault/docs/Frontend/introduction.md","tags":[],"version":"current","frontMatter":{},"sidebar":"gettingStartedSidebar","previous":{"title":"Known TODOs","permalink":"/firmware_vault_documentation/docs/Getting Started/knowntodos"},"next":{"title":"Analysis Engine","permalink":"/firmware_vault_documentation/docs/Backend/introduction"}}');var i=t(4848),r=t(8453);const o={},l="Angular",a={},c=[];function d(e){const n={em:"em",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"angular",children:"Angular"})}),"\n",(0,i.jsx)(n.p,{children:"The frontend uses the Angular framework, which employs a component-based approach. This allows for the reuse of components in various scenarios."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"General"})}),"\n",(0,i.jsxs)(n.p,{children:["Our website is developed in dark mode. For Styling we use bootstrap. Before adding new pages make sure to create it in the ",(0,i.jsx)(n.em,{children:"src/app/pages"})," directory. Components in the ",(0,i.jsx)(n.em,{children:"src/app/components"})," directory."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Component"})}),"\n",(0,i.jsx)(n.p,{children:'A component consists of 3 files. The .html, .tsx and .scss.\nThe .html as the file name says contains html "code". In .tsx is the logic of how the component works. Styling is possible in the .scss.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Setup"})}),"\n",(0,i.jsx)(n.p,{children:"The frontend will automatically start with the docker compose."}),"\n",(0,i.jsxs)(n.p,{children:["For development purpose it can be start via ",(0,i.jsx)(n.em,{children:"ng serve"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If started for the first time do ",(0,i.jsx)(n.em,{children:"npm i"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Add new components"})}),"\n",(0,i.jsx)(n.p,{children:"A new component can be created with the angular cli:"}),"\n",(0,i.jsx)(n.p,{children:"command ng g c component-name"}),"\n",(0,i.jsx)(n.p,{children:"After that import and then insert the component into the @NgModule declerations."}),"\n",(0,i.jsx)(n.h1,{id:"project-structure",children:"Project Structure"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Pages"})}),"\n",(0,i.jsx)(n.p,{children:"Pages are components too. But it is not recommended to reuse them."}),"\n",(0,i.jsx)(n.p,{children:"Each Page consists of html elements + reusable components that can be found in the components directory (src/app/components)."}),"\n",(0,i.jsx)(n.p,{children:"So far there a 4 pages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Home"}),"\n",(0,i.jsx)(n.li,{children:"Jobs"}),"\n",(0,i.jsx)(n.li,{children:"Job Detail"}),"\n",(0,i.jsx)(n.li,{children:"Tutorial"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Home:"})}),"\n",(0,i.jsx)(n.p,{children:"Landing Page to add a new Job and trigger a analysis."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Jobs:"})}),"\n",(0,i.jsx)(n.p,{children:"Here are all Jobs listed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Job Detail:"})}),"\n",(0,i.jsx)(n.p,{children:"Specific Details for a job. There is also a list of tasks that the job contains."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Useful Components"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"table-button"}),"\n",(0,i.jsx)(n.li,{children:"table"}),"\n",(0,i.jsx)(n.li,{children:"navbar"}),"\n",(0,i.jsx)(n.li,{children:"shelleditor"}),"\n",(0,i.jsx)(n.li,{children:"sql editor"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Components in Detail"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"table-button:"})}),"\n",(0,i.jsx)(n.p,{children:"This table is especially designed for tasks data. It could be used for different data, but it has some functionality that is specifically for tasks (show full output). The table takes various inputs. The main inputs are what data should be shown, how the styling of the table should look like and to decide how the table is scaled in height and width."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"table:"})}),"\n",(0,i.jsx)(n.p,{children:"It works pretty much like the table-button with the only difference that it mainly takes jobs as data. It also has a href element in the last colum to get to the specific job."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"shelleditor:"})}),"\n",(0,i.jsx)(n.p,{children:"This component uses the ace editor. With the editor it is possible to set Themes and set a mode, in this case sh."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"sql editor"})}),"\n",(0,i.jsx)(n.p,{children:"Same as shelleditor just a different mode."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"label-output"})}),"\n",(0,i.jsx)(n.p,{children:"Just a form input with certain styling."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Services"})}),"\n",(0,i.jsx)(n.p,{children:"Services provide interfaces to get data from the database. To utilize a service in Angular, include it as a parameter in the constructor of the component class. Angular's dependency injection system will then provide an instance of the service to the component.Now the service is usable inside the class."}),"\n",(0,i.jsx)(n.p,{children:"Services:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"image.service.ts"}),"\n",(0,i.jsx)(n.li,{children:"job.service.ts"}),"\n",(0,i.jsx)(n.li,{children:"task.service.ts"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);