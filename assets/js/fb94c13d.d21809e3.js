"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[8500],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||n;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={title:"What adoption metrics Packit team wants to measure",authors:"jkyjovsk"},o=void 0,s={unversionedId:"monitoring/adoption-metrics/define-adoption-metrics",id:"monitoring/adoption-metrics/define-adoption-metrics",title:"What adoption metrics Packit team wants to measure",description:"Static meaurement (updated periodically)",source:"@site/research/monitoring/adoption-metrics/define-adoption-metrics.md",sourceDirName:"monitoring/adoption-metrics",slug:"/monitoring/adoption-metrics/define-adoption-metrics",permalink:"/research/monitoring/adoption-metrics/define-adoption-metrics",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/monitoring/adoption-metrics/define-adoption-metrics.md",tags:[],version:"current",frontMatter:{title:"What adoption metrics Packit team wants to measure",authors:"jkyjovsk"},sidebar:"autogenerated",previous:{title:"Adoption metrics",permalink:"/research/monitoring/adoption-metrics/"},next:{title:"Implementation",permalink:"/research/monitoring/adoption-metrics/implementation"}},l={},c=[{value:"Static meaurement (updated periodically)",id:"static-meaurement-updated-periodically",level:2},{value:"Newcomers adoption",id:"newcomers-adoption",level:3},{value:"Active namespaces",id:"active-namespaces",level:3},{value:"Users retention",id:"users-retention",level:3},{value:"Usage of Packit services",id:"usage-of-packit-services",level:3},{value:"The following metrics will be displayed as a histograms",id:"the-following-metrics-will-be-displayed-as-a-histograms",level:2},{value:"Real time metrics",id:"real-time-metrics",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"static-meaurement-updated-periodically"},"Static meaurement (updated periodically)"),(0,i.kt)("h3",{id:"newcomers-adoption"},"Newcomers adoption"),(0,i.kt)("p",null,"Newcomers are newly approved namespaces."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Total amount of newcomers in a given period (monthly/quarterly/half yearly/yearly).")),(0,i.kt)("h3",{id:"active-namespaces"},"Active namespaces"),(0,i.kt)("p",null,"Active namespaces are those from whom we have recorded at least one activity in the past period\n(a given period of time month/quarter - can be specified via promql) and they do not fit into\nthe category of newcomers."),(0,i.kt)("h3",{id:"users-retention"},"Users retention"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Total amount of active namespaces."),(0,i.kt)("li",{parentName:"ul"},"Percentage of previous newcomers who became active Packit users.\n((amount of newcomers from previous period becoming an active namespaces\n/ amount of newcomers from previous period) ","*"," 100)"),(0,i.kt)("li",{parentName:"ul"},"What percentage of all namespaces are active namespaces?\n(How many inactive namespaces do we have?)")),(0,i.kt)("h3",{id:"usage-of-packit-services"},"Usage of Packit services"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Total number of work of individual services Packit has done in a given period\n(e.g. Packit has triggered X builds in the last month/quarter/year.)"),(0,i.kt)("li",{parentName:"ul"},"Percentage representation of individual services e.g. (COPR requests / all requests) ","*"," 100")),(0,i.kt)("h2",{id:"the-following-metrics-will-be-displayed-as-a-histograms"},"The following metrics will be displayed as a histograms"),(0,i.kt)("p",null,"As the metrics above - these will be updated once a given period."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Show most 15/20 active project of ... COPR, TF, all downstream jobs\n(with links to their project as an inspiration)")),(0,i.kt)("p",null,"It may look in very similar way how Packit team does its yearly evaluation. As an example\nI took a graph of ",(0,i.kt)("a",{parentName:"p",href:"https://packit.dev/posts/2021-in-numbers/#top-20-projects-in-the-number-of-pr-copr-builds"},"Top 20 projects in the number of PR Copr Builds in 2021")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://packit.dev/images/2021-in-numbers-top20-copr-builds.png",alt:"alt text"})),(0,i.kt)("h2",{id:"real-time-metrics"},"Real time metrics"),(0,i.kt)("p",null,"This is heavily inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://copr.fedorainfracloud.org/status/stats/"},"COPR's real time stats")),(0,i.kt)("p",null,"Real time graph will show overall activity of users in a given period (day/week/quarter)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make a graph for each service packit provides (COPR, TF, all downstream jobs) and display\nactivity. This may help to see and identify peaks and lows in overall activity of users.")),(0,i.kt)("p",null,"Example below shows how COPR does it and how it may look:\n",(0,i.kt)("img",{alt:"alt text",src:a(12096).Z,width:"1628",height:"487"})))}d.isMDXComponent=!0},12096:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/copr_real_time_metrics-11c2938d356e6c23d105298ef0c4f71e.png"}}]);