"use strict";(self.webpackChunkfirmware_vault_docs=self.webpackChunkfirmware_vault_docs||[]).push([[8659],{1923:(I,i,e)=>{e.r(i),e.d(i,{assets:()=>g,contentTitle:()=>t,default:()=>s,frontMatter:()=>c,metadata:()=>j,toc:()=>o});const j=JSON.parse('{"id":"Documentation/docusaurus","title":"Docusaurus","description":"Overview","source":"@site/docs/Documentation/docusaurus.md","sourceDirName":"Documentation","slug":"/Documentation/docusaurus","permalink":"/firmware_vault_documentation/docs/Documentation/docusaurus","draft":false,"unlisted":false,"editUrl":"https://github.com/nmkzzztos/firmware_vault_documentation/tree/main/docs/Documentation/docusaurus.md","tags":[],"version":"current","frontMatter":{"title":"Docusaurus","sidebar_label":"Docusaurus"},"sidebar":"gettingStartedSidebar","previous":{"title":"Wrapper Documentation","permalink":"/firmware_vault_documentation/docs/Backend/wrapperdoku"}}');var n=e(4848),a=e(8453);const c={title:"Docusaurus",sidebar_label:"Docusaurus"},t=void 0,g={},o=[{value:"Overview",id:"overview",level:2},{value:"Create a new documentation page",id:"create-a-new-documentation-page",level:3},{value:"Images",id:"images",level:3},{value:"Navbar new category",id:"navbar-new-category",level:3}];function l(I){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...I.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(i.p,{children:["This documentation is built using ",(0,n.jsx)(i.a,{href:"https://docusaurus.io/docs/",children:"Docusaurus"}),". Docusaurus is a static site generator that is used to create documentation websites. It is a modern and flexible tool that allows for easy creation and maintenance of documentation websites."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Docusaurus",src:e(120).A+"",width:"200",height:"200"})}),"\n",(0,n.jsx)(i.h3,{id:"create-a-new-documentation-page",children:(0,n.jsx)(i.a,{href:"https://docusaurus.io/docs/create-doc",children:"Create a new documentation page"})}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Create a new Markdown file (",(0,n.jsx)(i.code,{children:".md"}),") in the appropriate directory under ",(0,n.jsx)(i.code,{children:"docs/"}),":"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"docs/\n\u251c\u2500\u2500 Getting Started/\n\u2502   \u2514\u2500\u2500 your-new-file.md\n\u251c\u2500\u2500 Frontend/\n\u251c\u2500\u2500 Backend/\n\u2514\u2500\u2500 your-new-folder/\n    \u2514\u2500\u2500 your-new-file.md\n"})}),"\n",(0,n.jsxs)(i.ol,{start:"2",children:["\n",(0,n.jsxs)(i.li,{children:["Add the following ",(0,n.jsx)(i.code,{children:"frontmatter"})," at the top of your Markdown file:"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-markdown",children:"---\ntitle: Your New Page Title \nsidebar_label: Your New Page Label\n---\n\nYour content here...\n"})}),"\n",(0,n.jsxs)(i.ol,{start:"3",children:["\n",(0,n.jsxs)(i.li,{children:["Update the ",(0,n.jsx)(i.code,{children:"sidebars.ts"}),' file to include your new page. For example, to add a new page to the "Frontend" category:']}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"{\n  type: 'category',\n  label: 'Frontend',\n  items: [\n    'Frontend/introduction',\n    'Frontend/your-new-file'  // Add your new file here\n  ],\n},\n"})}),"\n",(0,n.jsx)(i.h3,{id:"images",children:(0,n.jsx)(i.a,{href:"https://docusaurus.io/docs/markdown-features#images",children:"Images"})}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"To add an image, you have to put it in the img folder of the directory where the markdown file is located."}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"# Example for the root docs folder\ndocs/\n\u2514\u2500\u2500 img/\n    \u2514\u2500\u2500 your-new-image.png // If the markdown file is located in the root docs folder.\n\n# Example for a specific folder\ndocs/\n\u2514\u2500\u2500 Frontend/\n    \u2514\u2500\u2500 img/\n        \u2514\u2500\u2500 your-new-image.png // If the markdown file is located in a specific folder.\n"})}),"\n",(0,n.jsxs)(i.ol,{start:"2",children:["\n",(0,n.jsx)(i.li,{children:"Reference the image in your Markdown file using the following syntax:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-markdown",children:"![Image Description](img/your-new-image.png)\n"})}),"\n",(0,n.jsx)(i.h3,{id:"navbar-new-category",children:(0,n.jsx)(i.a,{href:"https://docusaurus.io/docs/docs-multi-instance#docs-navbar-items",children:"Navbar new category"})}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Add the following to the ",(0,n.jsx)(i.code,{children:"docusaurus.config.ts"})," file in the ",(0,n.jsx)(i.code,{children:"themeConfig"})," section. Make sure to add the new category to the ",(0,n.jsx)(i.code,{children:"items"})," array:"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"{\n  type: 'dropdown',\n  label: 'Docs',\n  position: 'left',\n\n  items: [\n    {\n      label: 'Introduction',\n      to: '/docs/introduction',\n    },\n    ...,\n    {\n      label: 'New Item', // Add the new item here\n      to: '/docs/new-item',\n    },\n  ],\n},\n"})})]})}function s(I={}){const{wrapper:i}={...(0,a.R)(),...I.components};return i?(0,n.jsx)(i,{...I,children:(0,n.jsx)(l,{...I})}):l(I)}},120:(I,i,e)=>{e.d(i,{A:()=>j});const j="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48cmVjdCBpZD0iayIgeD0iMCIgd2lkdGg9IjQuODgzIiBoZWlnaHQ9IjQuODgzIiByeD0iMSIvPjxyZWN0IGlkPSJmbiIgeD0iMCIgeT0iMS40NDciIHdpZHRoPSI0LjU2MyIgaGVpZ2h0PSIxLjQ0NyIgcng9Ii43MjMiLz48cGF0aCBkPSJNNC44ODMuMDl2MS4wOGExIDEgMCAwMS0xIDFIMWExIDEgMCAwMS0xLTFWLjA5aDQuODgzeiIgaWQ9ImEiLz48L2RlZnM+PGcgZmlsbD0iIzNFQ0M1RiI+PHBhdGggZD0iTTIzIDE2M2MtNy40IDAtMTQtNC0xNy4zLTEwQTIwIDIwIDAgMDAzIDE2M2MwIDExIDkgMjAgMjAgMjBoMjB2LTIwSDIzek0xNjQgMTgzaDl2LTRoLTh6Ii8+PHBhdGggZD0iTTE4MyA1M1Y0M2MwLTExLTktMjAtMjAtMjBINzNjLTQtOC02LTgtMTAgMC00LTgtNi04LTEwIDAtNC04LTYtOC0xMCAwLTctOS05LTUtMTAuMyAyLjMtOS0zLTEwLjMtMS43LTcuMyA3LjMtOSAyLTEwIDMtMi40IDEwLjQtOCA0LTggNiAwIDEwLTggNC04IDYgMCAxMC04IDQtOCA2IDAgMTAtOCA0LTggNiAwIDEwLTggNC04IDYgMCAxMC04IDQtOCA2IDAgMTAtOCA0LTggNiAwIDEwLTggNC04IDYgMCAxMC04IDQtOCA2IDAgMTAtOCA0LTggNiAwIDEwLTggNC04IDYgMCAxMC04IDQtOCA2IDAgMTAgMCAxMSA5IDIwIDIwIDIwaDEyMGMxMSAwIDIwLTkgMjAtMjAiLz48L2c+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4MyA4M2wtNzAtNC4zYy0xMy4zLTEuNS0xMy4zLTE5LjggMC0yMS4zbDcwLTQuNCIvPjx1c2UgaHJlZj0iI2giIHg9IjYwIi8+PHVzZSBocmVmPSIjZiIgeD0iNTAiLz48cGF0aCBkPSJNMTAzIDE4M2g2MGMxMSAwIDIwLTkgMjAtMjBWOTNoLTYwYy0xMSAwLTIwIDktMjAgMjB2NzB6IiBmaWxsPSIjRkZGRjUwIi8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTYzIDUzYTEgMSAwIDEwLTIwIDAiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0xODMgNjIuNmMtNSAwLTUgMTAtMTAgMTAuNy01IDAtNS0xMC0xMC0xMHMtNSA5LTEwIDktNS04LjUtMTAtOC41LTUgOC0xMCA4LTUtNy4yNS0xMC03LjI1LTUgNi41LTEwIDYuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMTY4IDExM2gtNTBtNTAgMTBoLTUwbTUwIDEwaC01MG01MCAxMGgtNTBtNTAgMTBoLTUwbTUwIDEwaC01MCIvPjwvZz48Y2lyY2xlIGN4PSIxNDMiIGN5PSIzOS4zIiByPSIyLjUiLz48Y2lyY2xlIGN4PSIxNjMiIGN5PSIzOCIgcj0iMi41Ii8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iNzEiIHI9IjEiLz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgtMTUgNDMzLjQ4NyAtMzQwLjg5MikiPjxyZWN0IGZpbGw9IiNEOEQ4RDgiIHdpZHRoPSI4NC41MjIiIGhlaWdodD0iMzMuMzY3IiByeD0iMiIvPjxyZWN0IGZpbGw9IiM0QTRBNEEiIHg9IjEuODA4IiB5PSIxLjA4NSIgd2lkdGg9IjgxLjM3OSIgaGVpZ2h0PSIyLjE3IiByeD0iMS4wODUiLz48ZyBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIuMTM2Ij48dXNlIGhyZWY9IiNmbiIgeD0iMy43OTgiLz48dXNlIGhyZWY9IiNmbiIgeD0iMTAuMDQyIi8+PHVzZSBocmVmPSIjZm4iIHg9IjE0Ljg0NiIvPjx1c2UgaHJlZj0iI2ZuIiB4PSIxOS42NDkiLz48dXNlIGhyZWY9IiNmbiIgeD0iMjQuNDUzIi8+PHVzZSBocmVmPSIjZm4iIHg9IjMwLjQ1NyIvPjx1c2UgaHJlZj0iI2ZuIiB4PSIzNS4yNiIvPjx1c2UgaHJlZj0iI2ZuIiB4PSI0MC4wNjQiLz48dXNlIGhyZWY9IiNmbiIgeD0iNDQuODY3Ii8+PHVzZSBocmVmPSIjZm4iIHg9IjUwLjg3MiIvPjx1c2UgaHJlZj0iI2ZuIiB4PSI1NS42NzUiLz48dXNlIGhyZWY9IiNmbiIgeD0iNjAuNDc5Ii8+PHVzZSBocmVmPSIjZm4iIHg9IjY2LjQ4MyIvPjx1c2UgaHJlZj0iI2ZuIiB4PSI3MS4yODYiLz48dXNlIGhyZWY9IiNmbiIgeD0iNzYuMDkiLz48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCA0MS42ODQgNC4zNzUpIiBmaWxsPSIjNEE0QTRBIj48dXNlIGhyZWY9IiNrIiB4PSI3LjU5NSIvPjx1c2UgaHJlZj0iI2siIHg9IjEzLjM4MiIvPjx1c2UgaHJlZj0iI2siIHg9IjE5LjE2OSIvPjx1c2UgaHJlZj0iI2siIHg9IjI0Ljk1NiIvPjx1c2UgaHJlZj0iI2siIHg9IjMwLjc0MyIvPjx1c2UgaHJlZj0iI2siIHg9IjM2LjUzIi8+PHVzZSBocmVmPSIjayIgeD0iNDIuMzE3Ii8+PHVzZSBocmVmPSIjayIgeD0iNDguMTA0Ii8+PHVzZSBocmVmPSIjayIgeD0iNTMuODkxIi8+PHVzZSBocmVmPSIjayIgeD0iNTkuNjc4Ii8+PHVzZSBocmVmPSIjayIgeD0iNjUuNDY1Ii8+PHVzZSBocmVmPSIjayIgeD0iNzEuMjUyIi8+PHVzZSBocmVmPSIjayIgeD0iNzcuMDM4Ii8+PHVzZSBocmVmPSIjayIgeD0iNy41OTUiLz48dXNlIGhyZWY9IiNrIiB4PSIxMy4zODIiLz48dXNlIGhyZWY9IiNrIiB4PSIxOS4xNjkiLz48dXNlIGhyZWY9IiNrIiB4PSIyNC45NTYiLz48dXNlIGhyZWY9IiNrIiB4PSIzMC43NDMiLz48dXNlIGhyZWY9IiNrIiB4PSIzNi41MyIvPjx1c2UgaHJlZj0iI2siIHg9IjQyLjMxNyIvPjx1c2UgaHJlZj0iI2siIHg9IjQ4LjEwNCIvPjx1c2UgaHJlZj0iI2siIHg9IjUzLjg5MSIvPjx1c2UgaHJlZj0iI2siIHg9IjU5LjY3OCIvPjx1c2UgaHJlZj0iI2siIHg9IjY1LjQ2NSIvPjx1c2UgaHJlZj0iI2siIHg9IjcxLjI1MiIvPjx1c2UgaHJlZj0iI2siIHg9Ijc3LjAzOCIvPjxyZWN0IHJ4PSIxIiB3aWR0aD0iNi43IiBoZWlnaHQ9IjQuODgzIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgOS41KSIgZmlsbD0iIzRBNEE0QSI+PHVzZSBocmVmPSIjayIgeD0iOC4wNDIiLz48dXNlIGhyZWY9IiNrIiB4PSIxMy44MjkiLz48dXNlIGhyZWY9IiNrIiB4PSIxOS42MTYiLz48dXNlIGhyZWY9IiNrIiB4PSIyNS40MDMiLz48dXNlIGhyZWY9IiNrIiB4PSIzMS4xOSIvPjx1c2UgaHJlZj0iI2siIHg9IjM2Ljk3NyIvPjx1c2UgaHJlZj0iI2siIHg9IjQyLjc2NCIvPjx1c2UgaHJlZj0iI2siIHg9IjQ4LjU1MSIvPjx1c2UgaHJlZj0iI2siIHg9IjU0LjMzNyIvPjx1c2UgaHJlZj0iI2siIHg9IjYwLjEyNCIvPjx1c2UgaHJlZj0iI2siIHg9IjY1LjkxMSIvPjx1c2UgaHJlZj0iI2siIHg9IjcxLjY5OCIvPjx1c2UgaHJlZj0iI2siIHg9Ijc3LjQ4NSIvPjwvZz48ZyBmaWxsPSIjNEE0QTRBIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS4yMTIgMTUuMTkpIj48dXNlIGhyZWY9IiNrIi8+PHVzZSBocmVmPSIjayIgeD0iNS43ODciLz48dXNlIGhyZWY9IiNrIiB4PSIxMS41NzQiLz48dXNlIGhyZWY9IiNrIiB4PSIxNy4zNjEiLz48dXNlIGhyZWY9IiNrIiB4PSIyMy4xNDgiLz48dXNlIGhyZWY9IiNrIiB4PSIyOC45MzUiLz48dXNlIGhyZWY9IiNrIiB4PSIzNC43MjIiLz48dXNlIGhyZWY9IiNrIiB4PSI0MC41MDgiLz48dXNlIGhyZWY9IiNrIiB4PSI0Ni4yOTUiLz48dXNlIGhyZWY9IiNrIiB4PSI1Mi4wODIiLz48dXNlIGhyZWY9IiNrIiB4PSI1Ny44NjkiLz48L2c+PHJlY3QgeD0iNzUiIHk9IjE1LjIiIHJ4PSIxIiB3aWR0aD0iOC40IiBoZWlnaHQ9IjQuODgzIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMjEuMTQ0KSIgZmlsbD0iIzRBNEE0QSI+PHVzZSBocmVmPSIjayIgeD0iMTUuODE4Ii8+PHVzZSBocmVmPSIjayIgeD0iMjEuNjA1Ii8+PHVzZSBocmVmPSIjayIgeD0iMjcuMzkyIi8+PHVzZSBocmVmPSIjayIgeD0iMzMuMTc5Ii8+PHVzZSBocmVmPSIjayIgeD0iMzguOTY2Ii8+PHVzZSBocmVmPSIjayIgeD0iNDQuNzUzIi8+PHVzZSBocmVmPSIjayIgeD0iNTAuNTQiLz48dXNlIGhyZWY9IiNrIiB4PSI1Ni4zMjciLz48dXNlIGhyZWY9IiNrIiB4PSI2Mi4xMTQiLz48cmVjdCB4PSIuNSIgcng9IjEiIHdpZHRoPSIxNC4zIiBoZWlnaHQ9IjQuODgzIi8+PHJlY3QgeD0iNjgiIHJ4PSIxIiB3aWR0aD0iMTQuMyIgaGVpZ2h0PSI0Ljg4MyIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDI3LjEyNikiIGZpbGw9IiM0QTRBNEEiPjx1c2UgaHJlZj0iI2siIHg9Ii40NDciLz48dXNlIGhyZWY9IiNrIiB4PSI2LjIzNCIvPjx1c2UgaHJlZj0iI2siIHg9IjEyLjAyMSIvPjx1c2UgaHJlZj0iI2siIHg9IjE3LjgwOCIvPjxyZWN0IHg9IjIzLjUiIHJ4PSIxIiB3aWR0aD0iMzAiIGhlaWdodD0iNC44ODMiLz48cmVjdCB4PSI1NC40IiByeD0iMSIgd2lkdGg9IjUuNiIgaGVpZ2h0PSI0Ljg4MyIvPjx1c2UgaHJlZj0iI2siIHg9IjYwLjg0OCIvPjx1c2UgaHJlZj0iI2siIHg9IjY2LjYzNSIvPjx1c2UgaHJlZj0iI2siIHg9Ijc3LjQ4NSIvPjx1c2UgaHJlZj0iI2EiIHRyYW5zZm9ybT0icm90YXRlKC0xODAgMzguNDcxIDEuMDc0KSIvPjx1c2UgaHJlZj0iI2EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyLjA2IDIuNzEzKSIvPjwvZz48L2c+PGcgZmlsbD0iIzNFQ0M1RiI+PHBhdGggZD0iTTgzIDEyM2g0MHYtMjBIODN6TTgzIDE4M2g0MHYtNDBIODN6Ii8+PC9nPjxnIGlkPSJoIiBmaWxsPSIjNDREODYwIj48Y2lyY2xlIGN4PSIxMjMiIGN5PSIxMTMiIHI9IjEwIi8+PGNpcmNsZSBjeD0iMTI4IiBjeT0iMTA0LjMiIHI9IjIuNCIvPjxjaXJjbGUgY3g9IjEzMS43IiBjeT0iMTA4IiByPSIyLjQiLz48Y2lyY2xlIGN4PSIxMzMiIGN5PSIxMTMiIHI9IjIuNCIvPjxjaXJjbGUgY3g9IjEzMS43IiBjeT0iMTE4IiByPSIyLjQiLz48Y2lyY2xlIGN4PSIxMjgiIGN5PSIxMjEuNyIgcj0iMi40Ii8+PC9nPjxnIGlkPSJmIiBmaWxsPSIjNDREODYwIj48Y2lyY2xlIGN4PSIxMjMiIGN5PSIxNjMiIHI9IjIwIi8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iMTQ1LjciIHI9IjUiLz48Y2lyY2xlIGN4PSIxMjMiIGN5PSIxNDMiIHI9IjUiLz48Y2lyY2xlIGN4PSIxMzMiIGN5PSIxNDUuNyIgcj0iNSIvPjxjaXJjbGUgY3g9IjE0MC4zIiBjeT0iMTUzIiByPSI1Ii8+PGNpcmNsZSBjeD0iMTQzIiBjeT0iMTYzIiByPSI1Ii8+PC9nPjxzY3JpcHQgeG1sbnM9IiIvPjwvc3ZnPg=="},8453:(I,i,e)=>{e.d(i,{R:()=>c,x:()=>t});var j=e(6540);const n={},a=j.createContext(n);function c(I){const i=j.useContext(a);return j.useMemo((function(){return"function"==typeof I?I(i):{...i,...I}}),[i,I])}function t(I){let i;return i=I.disableParentContext?"function"==typeof I.components?I.components(n):I.components||n:c(I.components),j.createElement(a.Provider,{value:i},I.children)}}}]);