"use strict";(self.webpackChunkfirmware_vault_docs=self.webpackChunkfirmware_vault_docs||[]).push([[6322],{6014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"Frontend/Integrations/aggrid","title":"AG-Grid","description":"Overview","source":"@site/docs/Frontend/Integrations/aggrid.md","sourceDirName":"Frontend/Integrations","slug":"/Frontend/Integrations/aggrid","permalink":"/firmware_vault_documentation/docs/Frontend/Integrations/aggrid","draft":false,"unlisted":false,"editUrl":"https://github.com/nmkzzztos/firmware_vault_documentation/tree/main/docs/Frontend/Integrations/aggrid.md","tags":[],"version":"current","frontMatter":{"id":"aggrid","title":"AG-Grid"},"sidebar":"gettingStartedSidebar","previous":{"title":"Dynamic SQL Query Builder","permalink":"/firmware_vault_documentation/docs/Frontend/Services/dynamicsqlquerybuilder"},"next":{"title":"Analysis Engine","permalink":"/firmware_vault_documentation/docs/Backend/introduction"}}');var r=t(4848),s=t(8453);const a={id:"aggrid",title:"AG-Grid"},d="AG-Grid",l={},o=[{value:"Overview",id:"overview",level:2},{value:"Why AG-Grid?",id:"why-ag-grid",level:2},{value:"Grid Customization",id:"grid-customization",level:3},{value:"Key Features Implemented",id:"key-features-implemented",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ag-grid",children:"AG-Grid"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.ag-grid.com/javascript-data-grid/getting-started/",children:"AG-Grid"})," is a powerful JavaScript data grid library that offers extensive features for handling large datasets, real-time updates, and complex table interactions. In this project, AG-Grid has replaced static custom tables due to the increasing scale of firmware images and analysis tasks, which demand advanced functionality and high performance."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"AG-Grid",src:t(2858).A+"",width:"1193",height:"604"})}),"\n",(0,r.jsx)(n.h2,{id:"why-ag-grid",children:"Why AG-Grid?"}),"\n",(0,r.jsx)(n.p,{children:"Initially, static custom tables were used for rendering and managing data. However, as the system expanded to process a large number of firmware images and handle in-depth analysis, these tables lacked the necessary functionality to efficiently manage large datasets. The key reasons for transitioning to AG-Grid include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Performance & Scalability"}),": AG-Grid is optimized for handling large datasets with virtual scrolling, pagination, and lazy loading capabilities."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dynamic Data Handling"}),": Supports real-time data updates and refreshes efficiently without performance degradation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Rich Features"}),": Provides built-in sorting, filtering, grouping, and customizable columns."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Advanced Customization"}),": Allows custom cell renderers, action buttons, and inline editing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Auto-Resizing and Adaptive Layout"}),": Columns and rows adjust dynamically based on content and container size."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"grid-customization",children:"Grid Customization"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dynamic Columns"}),": The table columns are dynamically created based on ",(0,r.jsx)(n.code,{children:"columnTitles"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Conditional Columns"}),": If ",(0,r.jsx)(n.code,{children:"showActions"})," is enabled, an additional column for actions is included."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Resizable & Adaptive Layout"}),": AG-Grid dynamically adjusts to container size and allows auto-resizing."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"key-features-implemented",children:"Key Features Implemented"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Sorting & Filtering"})}),(0,r.jsx)(n.td,{children:"Supports multi-column sorting and advanced filtering options."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Dynamic Column Resizing"})}),(0,r.jsx)(n.td,{children:"Adjusts columns based on content and screen size."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Row Selection"})}),(0,r.jsx)(n.td,{children:"Allows row selection for user interactions."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Action Buttons"})}),(0,r.jsx)(n.td,{children:"Custom button renderer for interactive operations."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Real-Time Updates"})}),(0,r.jsx)(n.td,{children:"Integrates with backend services to update data dynamically."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2858:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ag_grid-84b8077ee14766f594326eb33ce603c9.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);