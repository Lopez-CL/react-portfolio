(this["webpackJsonplopez-portfolio"]=this["webpackJsonplopez-portfolio"]||[]).push([[0],{32:function(A,e,t){},33:function(A,e,t){},34:function(A,e,t){},35:function(A,e,t){},37:function(A,e,t){"use strict";t.r(e);var i=t(0),s=t.n(i),a=t(23),r=t.n(a),c=(t(32),t(4)),n=(t(33),t(34),t(35),t(11)),o=t(3),d=t(1),l=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Chris Lopez"})})})},g=t.p+"static/media/profile.5f496823.png",p=t.p+"static/media/code.803673b1.png",h=t.p+"static/media/design.c7e565e2.png",j=t.p+"static/media/resume.df862f6a.png",m=t.p+"static/media/email.a743251c.png",u=t.p+"static/media/github.86e14df8.png",b=t.p+"static/media/linkedIn.ad16c2b0.png",f=function(A){var e=A.footer,t=A.setFooterDown,s=Object(o.n)(),a=Object(i.useState)(null),r=Object(c.a)(a,2),n=r[0],l=r[1],f=[{src:p,alt:"coding symbol",heading:"Coding",title:"Coding Portfolio",path:"coding"},{src:h,alt:"design symbol",heading:"Inst. Design",title:"Instructional Design Portfolio",path:"inst-design"},{src:j,alt:"resume symbol",heading:"Resume",title:"Resume",path:"resume"}],B=[{src:m,alt:"email icon",title:"Reach out via email",href:"mailto:darkwing24@duck.com"},{src:u,alt:"github icon",title:"Reach out via GitHub",href:"https://github.com/Lopez-CL"},{src:b,alt:"email icon",title:"Reach out via LinkedIn",href:"https://www.linkedin.com/in/christopher-lee-lopez"}];return Object(d.jsxs)("div",{id:"home-body",children:[Object(d.jsxs)("div",{id:"home-container",children:[Object(d.jsx)("div",{className:"flex-item",id:"profile-img",children:Object(d.jsx)("img",{src:g,alt:"chris profile"})}),Object(d.jsxs)("div",{className:"",id:"about",children:[Object(d.jsx)("h2",{children:" About Me"}),Object(d.jsx)("p",{children:"I'm a collaborative programmer and educator with foundational skills in full-stack web development (Python/Flask & MERN) and instructional design. As a researcher and librarian, my focus lies at the intersection of social ethics, critical pedagogy, and emerging technologies (right now I'm doing a deep dive into AI ethics!) I'm always expanding my programming skills-set and seeking out new project ideas. The portfolios below capture what I have, am, and will work on. Always down to chat:"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"contact-me",children:B.map((function(A,e){return Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:A.href,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:"contact-icon",src:A.src,alt:A.alt,title:A.title})})})}))}),Object(d.jsx)("p",{children:"Toggle through my portfolios by using the buttons below"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"\xa1Pa'Lante!"})})]})]}),Object(d.jsx)("div",{id:"project-categories",children:f.map((function(A,i){return Object(d.jsx)("div",{className:"portfolios active-hover",onMouseEnter:function(A){return function(A){l(A)}(i)},onMouseLeave:function(A){l(null)},onClick:function(i){return a=A.path,!e&&t(!0),void s("/".concat(a));var a},children:Object(d.jsxs)("div",{className:"category",title:A.title,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{to:"/".concat(A.path),className:"cat-pic ".concat(i===n?"shake":""),src:A.src,alt:A.alt})}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"".concat(i===n?"active-heading link":"link"),children:A.heading.toUpperCase()})})]})})}))})]})},B=function(A){var e=A.footer,t=(new Date).getFullYear();return Object(d.jsxs)("div",{id:e?"footer":"footer-abs",children:[" ",Object(d.jsxs)("p",{children:["\xa9\ufe0f Chris Lopez ",t]})]})},O=function(A){var e=Object(o.p)().str,t="",i=A.skills;return t="coding"===e?"Languages & Frameworks":"inst-design"===e?"Communication & Education Technologies":null,Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:"port-heading",children:t}),Object(d.jsx)("div",{className:"carousel-container",children:Object(d.jsx)("div",{className:"carousel-wrapper",children:i.map((function(A,e){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"lang-icon",title:A.title,alt:"".concat(A.title," icon"),src:A.src})},e)}))})})]})},w=function(A){var e=Object(o.p)().str,t=A.projects,s=Object(i.useState)(null),a=Object(c.a)(s,2),r=a[0],n=a[1],l=function(A){n(A)},g=function(){n(null)},p="";return p="coding"===e?"Projects":"inst-design"===e?"Learning Modules":null,Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"port-heading",children:p}),Object(d.jsxs)("div",{className:"portfolio-projects",children:["coding"===e&&t.map((function(A,e){return Object(d.jsxs)("div",{className:e===r?"portfolio-project-active":"portfolio-project",onMouseEnter:function(A){return l(e)},onMouseLeave:function(A){return g()},children:[Object(d.jsxs)("div",{className:"image-container",children:[Object(d.jsx)("img",{className:e===r?"active-img":"",src:A.projIcon,alt:"icon for ".concat(A.title)}),Object(d.jsx)("h3",{children:A.title})]}),Object(d.jsxs)("div",{className:"description-container",children:[Object(d.jsxs)("p",{className:"proj-card-text",children:[Object(d.jsx)("strong",{children:"Specs:"})," ",A.techSpec]}),Object(d.jsxs)("p",{className:"proj-card-text",children:[Object(d.jsx)("strong",{children:"Description:"})," ",A.description]}),Object(d.jsx)("p",{className:"proj-card-text",children:Object(d.jsx)("a",{href:A.url,target:"_blank",rel:"noreferrer",children:"CHECK OUT THE REPO"})})]})]})})),"inst-design"===e&&t.map((function(A,e){return Object(d.jsxs)("div",{className:e===r?"portfolio-project-active":"portfolio-project",onMouseEnter:function(A){return l(e)},onMouseLeave:function(A){return g()},children:[Object(d.jsxs)("div",{className:"image-container",children:[Object(d.jsx)("img",{className:e===r?"active-img":"",src:A.reSrc,alt:"icon for ".concat(A.title)}),Object(d.jsx)("h3",{children:A.title})]}),Object(d.jsxs)("div",{className:"description-container",children:[Object(d.jsxs)("p",{className:"proj-card-text",children:[Object(d.jsx)("strong",{children:"Resource Type:"})," ",A.mode]}),Object(d.jsxs)("p",{className:"proj-card-text",children:[Object(d.jsx)("strong",{children:"Description:"})," ",A.description]}),Object(d.jsx)("p",{className:"proj-card-text",children:Object(d.jsx)("a",{href:A.url,target:"_blank",rel:"noreferrer",children:"EXPLORE RESOURCE"})})]})]})}))]})]})},x=t.p+"static/media/python.eeac4731.png",D=t.p+"static/media/html.14e81cfc.png",I=t.p+"static/media/css.4a957a62.png",z=t.p+"static/media/js.b335f70a.png",C=t.p+"static/media/node.324dfb89.png",E=t.p+"static/media/react.0169a6f9.png",N=t.p+"static/media/bootstrap.fc6570b5.png",H=t.p+"static/media/jquery.c1460744.png",Q=t.p+"static/media/MySQL.3b8829c8.png",v=t.p+"static/media/sql.69b2f23c.png",y=t.p+"static/media/mongodb.01fc6def.png",V=t.p+"static/media/superSocial.c89d75cc.png",M=t.p+"static/media/researcherVillage.ec7505be.png",T=t.p+"static/media/audition.6afb5a2f.png",R=t.p+"static/media/canva.0b7d82c2.png",P=t.p+"static/media/moovly.dc4a7a65.jpg",F=t.p+"static/media/prempro.b228d0c2.png",Y=t.p+"static/media/tableau.25534260.png",L=t.p+"static/media/wordpress-icon.fe63d505.png",q=t.p+"static/media/aiLec.e2ec6909.png",S=t.p+"static/media/infoLit.c22339a7.png",U=t.p+"static/media/positionality.54d35951.png",G=t.p+"static/media/articles.5c5a046b.png",W=t.p+"static/media/findingimages.8f8f5c15.png",k=t.p+"static/media/annotatedbibs.6685a408.png",X=t.p+"static/media/dataliteracy.e5ea2b60.png",J=[{title:"python",src:x},{title:"html",src:D},{title:"css",src:I},{title:"js",src:z},{title:"node",src:C},{title:"react",src:E},{title:"bootstrap",src:N},{title:"jquery",src:H},{title:"MySql",src:Q},{title:"sql",src:v},{title:"mongo",src:y}],K=[{projIcon:V,title:"Super Social Reader",gitHubUrl:"https://github.com/Lopez-CL/super_social_reader",techSpec:"Python, Flask, SQL, HTML, CSS, jQuery, AJAX",description:"A social reader tracker for superhero comic book readers to connect, discuss, and keep track of the comics they read."},{projIcon:M,title:"Researcher Village",url:"https://github.com/Coding-Dojo-Project-Team/Researcher-Village",techSpec:"Python, Flask, SQL, HTML, CSS, jQuery",description:"Registered students can create, update, and delete research project to-do lists that help them create tasks, keep track of project status, and categorize research projects by subject."}],Z=[{title:"audition",src:T},{title:"canva",src:R},{title:"h5p",src:"data:image/jpeg;base64,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"},{title:"hypothesis",src:"data:image/png;base64,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"},{title:"moovly",src:P},{title:"prempro",src:F},{title:"tableau",src:Y},{title:"zotero",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADAFBMVEVHcEzq6uoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDAwAAADq6urp6ekXFxfi4uIhISHs7OwAAAD////k5OT////q6urh4eHo6OgtLS3p6ekAAAAAAAAAAAAAAADMzMzp6enp6eno6OgAAADp6ens7Ozj4+NRUVFHR0fo6Ojp6ene3t7p6eng4ODp6enb29vo6OjV1dVlZWXj4+Po6Oiurq7p6enq6urY2Njh4eHCwsK0tLS5ubk+Pj7s7Ozq6uqRkZHp6enn5+dYWFjh4eG4uLjJycmXl5fp6ene3t7q6urn5+fp6enp6enq6urq6urR0dHq6uq0tLTU1NTBwcHd3d2pqamFhYXn5+fi4uLq6urGxsbq6up5eXnq6ura2tpfX19xcXFtbW3p6enp6enm5ubq6urc3NykpKS/v7/p6eno6Ojn5+cKCgro6Ojo6Ojo6OjT09PqYqiMjIzT09Pp6enq6uqcnJzGxsbX19fp6enp6emurq7p6eno6Ojq6urq6urp6enZ2dk1NTXNzc3o6Ojp6emLi4t+fn6ioqLp6emenp7m5ubpR/+BgYHg4OCSkpLo6Oijo6PR0dG8vLyBgYHOzs7p6enn5+fq6urNzc3p6EEAAADp6enp6enn5+fm5ubWuf+4AFeo6eXn6Obk5OSoFxfp6enl5eXn5+fo6Ojm5ua8XFyvLi6pGhrj4OCoGBjk4+OsJCTj4+OrISGwMTGpHBzf0tLh2NiuLCy2Rkbi3d3WsrK3SkrkhUHIhYW0QUHez8/GfX2qHx/awsLAaGjh29vOl5euKirSpaWtJyexNjbXtbWyOTm8WVnYvLzEd3fCbm7i3t7bxcXNlJTf1NSzPDzYuLi+YmLRo6PUrq7g1tbcy8u5UFDFenrav7+9X1+wMzPKjIy7VVXMkJDUq6u5UlLPnJy4TEzPnZ3JiIjPmpq9XV3EdHTTqKjHgIDdzc20Pj7cx8fVr6/cycnQoKC/ZWUAAAAAAAD+a0g4AAABAHRSTlMA/gEkAhcsMzAuEwULGikeCDUm/KQ49zoEDQH+AvHxgTzrDxEHIbFMC4sd5w79SERw+eetB/TbIcpP+xuA9znS7aOFlUElk2XcMEj0jKht4Oq1EcWdzNjCYI/AnOV6YTT55KPvWVjXTFZSZ9UU0t96kl5HXTQ/ekO8vmfGLb9snM8XcYiag9CUVNY/ubWoYFtzvXUnxmHta8txuptctrEqwavIEMjHK3jPjP///////////////////////////////////////////////////////////////////////////////////////////////////////////////wEkqzM+OQAAFRVJREFUeNrsnWuMVdUZhmckuDVeqM5gcHQ6jjGBCTSBwoRUMog/SqFeCIXBaaASSog3+IENaCxthCBoAk0IiZqmEZpU/bPOOTMDDMP9NuEiN7mJICJSUEGtAt5tk85MpTIXzmHOuuy19ve8vzVzXN/j/t53rf2tXVCAEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQggh5KMGTZz+3MKl0yaVlhal06V9RyxdWFEzshfrIkL9psx9uSrdiYrmzZ0ylfVJtgaXvVqUzqKi6rLFrFJi/9/vX12Yzq3qOb9hrRKoxfNL01eoAQNHsl4J08TRhekuqHDRUNYsQVrySpfK36oFs1i3hGjq/AHpPFRUPIS1S0Lmn9lZ76+rra/PZFSrMpn6+tq6Tv6hqoo+rF/omjKpY+1/KHx7ZTpS0Lf/7SxhyJpR3a6ilyv+jxC0+xeeeJJVDFaDBxZ2qfqdMzCGTJgM71errlj1uMHwvd+cyW2qWK+6pLYIlJYNYkUD836jdMrfEYG+j5ewqOFoaHW+D//LIzANNxiM9ysuNFD+FrW1g4s4KAxB/SraeL+6jNJQpq6tG5zN+nquXnPKzZW/IwKlz+EGvVbvEbreL5cVmIQb9Nj7vZo21PyzITDvKVbaU+9X1PVtv3zcYOEC3KCH3u+5SrPNP6sbHMtbY37p9sfLzTf/rG6QvUGvvN842+XvaAVGTWfdPdHIP9nxfrk2hqpnsPYeaIhF75cLgdG/ZP1jVh+73i+XFaiajxuM1fvV9HXR/LMhMHkmM4UJ93653OCIP1CJWDRrgSvvl8sKjJlINZxr9tgit80/24uDhaMHUxG33q+sMs7yd+IGh+MG3amkZlI8zT8bAuVzcIOO9OQT8TX/rG7weWrjQK8t8KX8uMEYNHV+UdzNP6sb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"},{title:"wordpress",src:L}],_=[{reSrc:q,title:"AI Literacy Intro",mode:"Slides",url:"https://www.canva.com/design/DAFb466sOPo/qQ3esq1sXlpwWTq6v5R-mQ/view?utm_content=DAFb466sOPo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",description:"Final workshop in a digital literacy series that walks attendees through a series of questions and practices that comprise the foundation of AI Literacy. Attendees were encouraged to consider what costs us and our planet's resources to create and power these tools."},{reSrc:S,title:"Information Literacy 101",mode:"Slides",url:"https://www.canva.com/design/DAFMgu4dzBE/b2fQZVSQKaCfNT-l3xbcqQ/view?utm_content=DAFMgu4dzBE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",description:"Registered students can create, update, and delete research project to-do lists that help them create tasks, keep track of project status, and categorize research projects by subject."},{reSrc:U,title:"Positionality and Resources",mode:"H5P Module",url:"https://uclalibrary.github.io/research-tips/positionality/",description:"This resource introduces learners to the concept of positionality, explains how their positionality shapes their research process, and helps them identify ways to remain aware of their positionality."},{reSrc:G,title:"Breaking Down Academic Articles",mode:"H5P Module",url:"https://uclalibrary.github.io/research-tips/breaking-down-academic-articles/",description:"A webcomic tutorial that walks through the most important aspects of an academic article, to help you prepare for class discussion on the article(s) or take away essential information from the article to support future research."},{reSrc:W,title:"Finding Images @ UCLA Library",mode:"H5P Module",url:"https://uclalibrary.github.io/research-tips/finding-images/",description:"An interactive webcomic is your introduction to finding digital images at the UCLA Library and beyond! It covers how to find image databases and online exhibits, as well as how to approach searching for and citing online images."},{reSrc:k,title:"Annotated Bibliographies",mode:"H5P Module",url:"https://uclalibrary.github.io/research-tips/annotated-bibliographies/",description:"Webcomic that wlaks students through the reasons why their instructor would assign an AB and explains several types of annotated bibliographies that a student might be asked to create."},{reSrc:X,title:"Intro to Data Literacy",mode:"H5P Module",url:"https://uclalibrary.github.io/research-tips/dataliteracy/",description:"Introduces learners to a variety of ways different academic disciplines conduct data research; it also helps data research beginners appreciate the contextual factors that shape the definition of data."}],$=function(){var A=[],e=[],t=Object(o.p)().str;return"coding"===t?(A=J,e=K):"inst-design"===t&&(A=Z,e=_),Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{skills:A}),Object(d.jsx)(w,{projects:e})]})},AA=function(){return Object(d.jsxs)("div",{id:"resume-container",children:[Object(d.jsx)("h3",{className:"resume-heading",children:"PROFESSIONAL EXPERIENCE"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"position",children:"Student Success Librarian | Borough of Manhattan Community College | NY, NY (2022-Present)"}),Object(d.jsxs)("ul",{className:"responsibilities",children:[Object(d.jsx)("li",{children:"Originated a Library student-centered work study cohort of four students, which provides professional development opportunities and peer-lead services for students."}),Object(d.jsx)("li",{children:"Coordinates student workshops on emerging technologies for use in educational contexts."}),Object(d.jsx)("li",{children:"Provides in-depth research assistance and consultation on educational technologies."}),Object(d.jsx)("li",{children:"Lead designer and strategist for Library Instagram, @bmcclibrary."})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"position",children:"Instructional Design & Technology Consultant | UCLA | Westwood, CA (2020-2022)"}),Object(d.jsxs)("ul",{className:"responsibilities",children:[Object(d.jsx)("li",{children:"Designed open online instructional resources and tutorials addressing information literacy gaps within undergraduate and graduate populations."}),Object(d.jsx)("li",{children:"Serves on the Library's anti-racism initiative steering team, providing guidance, research assistance, and project management in areas such as racial climate in the workplace, recruitment & retention, and safe spaces for BIPoC staff."}),Object(d.jsx)("li",{children:"Managed web content on the UCLA.library.edu ensuring that content reflects UCLA brand design standards and meets web accessibility standards."}),Object(d.jsx)("li",{children:"Created social media graphics for posts related to tools and resources in humanities and social sciences on UCLA Library's account."})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"position",children:"Catalog & Circulation Assistant | David Allan Hubbard Library | Pasadena, CA (2017-2020)"}),Object(d.jsxs)("ul",{className:"responsibilities",children:[Object(d.jsx)("li",{children:"Assisted Cataloging Librarian in creating copy and original records of Spanish Theological books for local catalog."}),Object(d.jsx)("li",{children:"Managed and redistributed the metadata of +10,000 regional campus and main campus records in the local catalog."}),Object(d.jsx)("li",{children:"Assisted library patrons in finding pertinent resources for information needs through resources in Library databases and Worldcat."}),Object(d.jsx)("li",{children:"Familiarized library patrons with e-resources, computer lab software, and arrangement of print resources."})]})]}),Object(d.jsx)("h3",{className:"resume-heading",children:"EDUCATION"}),Object(d.jsx)("div",{className:"school",children:Object(d.jsx)("p",{children:"Coding Dojo | Full-Stack Developer Certificate | Remote (2022-2023)"})}),Object(d.jsx)("div",{className:"school",children:Object(d.jsx)("p",{children:"San Jose State University | Masters of Library & Information Science | San Jose, CA (2019-2021)"})}),Object(d.jsx)("div",{className:"school",children:Object(d.jsx)("p",{children:"Fuller Theological Seminary | Masters of Divinity | Pasadena, CA (2018-2021)"})}),Object(d.jsx)("div",{className:"school",children:Object(d.jsx)("p",{children:"Palm Beach Atlantic University | Bachelors of Arts in Religious Studies | West Palm Beach, FL (2010-2014)"})})]})};var eA=function(){var A=Object(i.useState)(!1),e=Object(c.a)(A,2),t=e[0],s=e[1];return Object(d.jsx)("div",{className:"app-container",children:Object(d.jsxs)(n.a,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(f,{footer:t,setFooterDown:s}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/:str",element:Object(d.jsx)($,{})}),Object(d.jsx)(o.a,{path:"/resume",element:Object(d.jsx)(AA,{})})]}),Object(d.jsx)("div",{children:Object(d.jsx)(B,{footer:t})})]})})},tA=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(e){var t=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;t(A),i(A),s(A),a(A),r(A)}))};r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(eA,{})})),tA()}},[[37,1,2]]]);
//# sourceMappingURL=main.e5826c08.chunk.js.map