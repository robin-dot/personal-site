(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{166:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),o=n(5),i=n(21),a=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(a,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var b=d;function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var c=j(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return h(this,n)}}var g=n(56),O=n(54),v=function(e){var t=e.handleClick,n=e.active,c=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[c]?"skillbutton-active":""),type:"button",onClick:function(){return t(c)},children:c})},x=function(e){var t=e.data,n=e.categories,c=t.category,o=t.competency,i=t.title,a={background:n.filter((function(e){return c.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(O.a)(Object(O.a)({},a),{},{width:"".concat(String(Math.min(100,Math.max(o/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:a,children:Object(r.jsx)("span",{children:i})}),Object(r.jsx)("div",{className:"skillbar-bar",style:s}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[o," / 5"]})]})};x.defaultProps={categories:[]};var k=x,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,c,o=y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(O.a)(Object(O.a)({},n),{},Object(g.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(O.a)(Object(O.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(v,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsxs)("p",{children:["1 - some knowledge ",Object(r.jsx)("br",{}),"5 - mediocre"]})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),c&&p(t,c),i}(c.Component);w.defaultProps={skills:[],categories:[]};var S=w,C=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};C.defaultProps={last:!1};var N=C,P=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(N,{data:e,last:n===t.length-1},e.title)})))})]})};P.defaultProps={data:[]};var A=P,R=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"references"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(o.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"References are available upon request"})})})]})},D=[{title:"Programming and Data Structures",number:"ENGRD 2100",link:"https://www.cs.cornell.edu/courses/cs2110/2017fa/courseinfo.html#about",university:"Cornell University"},{title:"Design The Future",link:"https://www.youdesignthefuture.com/",university:"Stanford University"},{title:"CS50",link:"https://cs50.harvard.edu/",university:"Harvard University"},{title:"Khan Academy",link:"https://www.khanacademy.org/computing/computer-programming"}],J=[{school:"The Stony Brook School",degree:"High School Diploma",link:"https://www.sbs.org/",year:2022}],E=[{company:"Zenerate",position:"Intern",link:"https://www.zenerate.ai/",daterange:"July 7th - august 28th",points:["Built a Python algorithm for AI architecture SaaS company to efficiently identify characteristics of lots, 3D-map real estate + measure & collect data","Used a diversity of technologies including Python, Jupyter Notebook, shapely, pandas, geopandas"]},{company:"Japanese Pop-Culture Club ",position:"Co-founder",daterange:"December 2020 - Present",points:["Created community to share love of Japanese pop culture with SBS students.","Grew community to 15 active members with whom we host remote gatherings through discord, 1-3 times per month"]},{company:"FIRST Robotics",position:"Programmer",link:"https://www.sbs.org/news-detail?pk=1314256&fromId=249338",daterange:"December 2021 - Present",points:["Code with team of 5 programmers in preparation for the annual FIRST Robotics competition.","Used Java to create a robot that autonomously moves, shoots rings, picks up items, etc.","Competed in a national competition called First Tech Challenge (FTC) annually."]},{company:"Varsity Soccer",daterange:"September 2019 - Present",points:["Goalie and Midfielder/Defender/Attack on school's soccer team.","Undefeated champions in 2020 within the PSAA league."]},{company:"Varsity Lacrosse",daterange:"April 2019 - May 2021",points:["Played midfielder or attacking position.","Helped new players learn and get used to lacrosse."]},{company:"Player Movement",position:"Independent Project",daterange:"January 2021 - June 2021",points:["Applied learnings from self-taught coding videos on YouTube to create basic structures/components for games using Unity.","Showcased knowledge of using player movement models for game development."]},{company:"CS50 Final Project",position:"Independent Project",daterange:"June 2020 - June 2020",points:[""]},{company:"Cascade Server",position:"Web/Server Development",link:"https://cascadeservers.net/forum/",daterange:"November 2019 - July 2021",points:["Created an independent server and self-designed website to connect different users around the world to collaborate and communicate while playing counter strike global offensive (CSGO).","Grew community to 200+ users by communicating with previous community member under (Steam-Gamers)."]}],I=n(17);var M=n(24);var T,G=[{title:"Unity",competency:3,category:["Coding"]},{title:"Python",competency:5,category:["Coding"]},{title:"C++",competency:5,category:["Coding"]},{title:"C#",competency:4,category:["Coding"]},{title:"Java",competency:5,category:["Coding"]},{title:"Adobe Illustrator",competency:5,category:["Art"]},{title:"Adobe Photoshop",competency:3,category:["Art"]},{title:"Adobe Dimension",competency:4,category:["Art"]},{title:"Adobe InDesign",competency:5,category:["Art"]},{title:"Guitar + Composition",competency:5,category:["Music"]},{title:"Piano",competency:4,category:["Music"]},{title:"Percussion",competency:3,category:["Music"]},{title:"Cooking",competency:5,category:["Art"]},{title:"Jupyter",competency:5,category:["Coding"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Coding"]},{title:"Pandas",competency:5,category:["Coding"]},{title:"Matplotlib",competency:4,category:["Coding"]},{title:"Fruity Loop Studio",competency:3,category:["Music"]}].map((function(e){return Object(O.a)(Object(O.a)({},e),{},{category:e.category.sort()})})),U=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],_=(T=new Set(G.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(I.a)(e)}(T)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(T)||Object(M.a)(T)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:U[t]}})),F=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(r.jsx)(i.a,{title:"Resume",description:"Robin Young's Resume. Guitar beat, magazine design, graphic design, and interior design",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(o.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:F.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:J}),Object(r.jsx)(b,{data:E}),Object(r.jsx)(S,{skills:G,categories:_}),Object(r.jsx)(A,{data:D}),Object(r.jsx)(R,{})]})})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(56);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},56:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.f836f55a.chunk.js.map