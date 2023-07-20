"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[7159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),k=r,m=c["".concat(l,".").concat(k)]||c[k]||h[k]||i;return a?n.createElement(m,p(p({ref:t},s),{},{components:a})):n.createElement(m,p({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,p[1]=o;for(var u=2;u<i;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},98202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={title:"June 2023",date:new Date("2023-06-05T22:18:53.000Z"),tags:[2023]},p=void 0,o={permalink:"/posts/weekly/June-2023",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/June-2023.md",source:"@site/weekly/June-2023.md",title:"June 2023",description:"Week 22 (May 30th \u2013 June 5th)",date:"2023-06-05T22:18:53.000Z",formattedDate:"June 5, 2023",tags:[{label:"2023",permalink:"/posts/weekly/tags/2023"}],readingTime:1.87,hasTruncateMarker:!1,authors:[],frontMatter:{title:"June 2023",date:"2023-06-05T22:18:53.000Z",tags:["2023"]},prevItem:{title:"July 2023",permalink:"/posts/weekly/July-2023"},nextItem:{title:"May 2023",permalink:"/posts/weekly/May-2023"}},l={authorsImageUrls:[]},u=[{value:"Week 22 (May 30th \u2013 June 5th)",id:"week-22-may-30th--june-5th",level:2},{value:"Week 23 (June 6th \u2013 June 12th)",id:"week-23-june-6th--june-12th",level:2},{value:"Week 24 (June 13th \u2013 June 19th)",id:"week-24-june-13th--june-19th",level:2},{value:"Week 25 (June 21st \u2013 June 27th)",id:"week-25-june-21st--june-27th",level:2},{value:"Week 26 (June 27th \u2013 July 3rd)",id:"week-26-june-27th--july-3rd",level:2}],s={toc:u},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"week-22-may-30th--june-5th"},"Week 22 (May 30th \u2013 June 5th)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Packit will now filter the pull requests based on the target branch if the ",(0,r.kt)("inlineCode",{parentName:"li"},"branch")," is specified in the particular job configuration. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2074"},"packit-service#2074"),")"),(0,r.kt)("li",{parentName:"ul"},"Packit now supports ",(0,r.kt)("inlineCode",{parentName:"li"},"manual_trigger")," in the configuration that allows you to make jobs run only when explicitly triggered by a comment. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2069"},"packit-service#2069"),")")),(0,r.kt)("h2",{id:"week-23-june-6th--june-12th"},"Week 23 (June 6th \u2013 June 12th)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Our dashboard now shows projects in a table instead of the cards.\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/dashboard/pull/267"},"dashboard#267"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/packit test")," command has two new options:"),(0,r.kt)("p",{parentName:"li"},"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--identifier")," option, Testing Farm will trigger only jobs with that identifier.\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/pull/2079"},"packit-service#2079"),")"),(0,r.kt)("p",{parentName:"li"},"Also, it is now possible to specify labels for a job and trigger tests based on labels\nusing a ",(0,r.kt)("inlineCode",{parentName:"p"},"--labels")," option of the ",(0,r.kt)("inlineCode",{parentName:"p"},"/packit test")," command.\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/packit/pull/1988"},"packit#1988"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/pull/2088"},"packit-service#2088"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"vm_image_build job")," doesn't have Copr project/owner configured,\nCopr project used for the latest Copr build of the pull request will be now used.\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/pull/2080"},"packit-service#2080"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed filters in ",(0,r.kt)("inlineCode",{parentName:"p"},"files_to_sync")," not being applied properly.\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/packit/pull/1977"},"packit#1977"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The issue that could've caused inconsistencies when tests from a PR\nwere supposed to be merged during the test runs on the Testing Farm has been fixed.\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/pull/2090"},"packit-service#2090"),")"))),(0,r.kt)("h2",{id:"week-24-june-13th--june-19th"},"Week 24 (June 13th \u2013 June 19th)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Packit now includes dist-git branch in the title of the PRs for ",(0,r.kt)("inlineCode",{parentName:"p"},"propose-downstream")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pull-from-upstream"),".\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/packit/pull/1996"},"packit#1996"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Many dashboard issues have been fixed during the\n",(0,r.kt)("a",{parentName:"p",href:"https://sched.co/1MvMM"},"Contribute to an Open Source Service"),"\nworkshop at ",(0,r.kt)("a",{parentName:"p",href:"https://www.devconf.info/cz/"},"DevConf.CZ"),".\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stefwalter"},"Stef Walter"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SpyTec"},"Erik Gustavsson"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RFJBraunstingl"},"Roman Braunstingl"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jreznik"},"Jaroslav Reznik"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/c3d"},"Christophe de Dinechin"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cathay4t"},"Gris Ge"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/davdunc"},"David Duncan"),",\nthank you for your contribution!\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/dashboard/pull/291"},"dashboard#291"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/dashboard/pull/292"},"dashboard#292"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/dashboard/pull/293"},"dashboard#293"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/dashboard/pull/294"},"dashboard#294"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/dashboard/pull/295"},"dashboard#295"),")"))),(0,r.kt)("h2",{id:"week-25-june-21st--june-27th"},"Week 25 (June 21st \u2013 June 27th)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are interested about the manual triggering deployed two weeks ago, David Kornel and Jakub Stejskal published ",(0,r.kt)("a",{parentName:"li",href:"https://fedoramagazine.org/how-to-use-testing-farm-outside-of-rhel/"},"a blog post")," about this on fedoramagazine.org."),(0,r.kt)("li",{parentName:"ul"},"Copr builds configured as a monorepo job will now be built in one Copr project together. The bug with overwriting the statuses for monorepo jobs has been fixed as well. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2097"},"packit-service#2097"),")")),(0,r.kt)("h2",{id:"week-26-june-27th--july-3rd"},"Week 26 (June 27th \u2013 July 3rd)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The bug which prevented errors on Testing Farm request submission from being\ncorrectly propagated to the user was fixed.\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2103"},"packit-service#2103"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pull_from_upstream")," jobs can now be retriggered with a comment\n",(0,r.kt)("inlineCode",{parentName:"li"},"/packit pull-from-upstream")," in a dist-git pull request.\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2087"},"packit-service#2087"),")")))}h.isMDXComponent=!0}}]);