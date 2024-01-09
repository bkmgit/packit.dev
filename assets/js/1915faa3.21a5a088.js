"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[5279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"End of the year in Packit",authors:"mfocko",date:new Date("2024-01-02T00:00:00.000Z"),tags:["2023-December",2023,"December"]},i=void 0,l={permalink:"/posts/weekly/2023/week-52",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2023/week-52.md",source:"@site/weekly/2023/week-52.md",title:"End of the year in Packit",description:"End of the year in Packit",date:"2024-01-02T00:00:00.000Z",formattedDate:"January 2, 2024",tags:[{label:"2023-December",permalink:"/posts/weekly/tags/2023-december"},{label:"2023",permalink:"/posts/weekly/tags/2023"},{label:"December",permalink:"/posts/weekly/tags/december"}],readingTime:.55,hasTruncateMarker:!1,authors:[{name:"Matej Focko",email:"mfocko@redhat.com",url:"https://github.com/mfocko",imageURL:"https://github.com/mfocko.png",key:"mfocko"}],frontMatter:{title:"End of the year in Packit",authors:"mfocko",date:"2024-01-02T00:00:00.000Z",tags:["2023-December","2023","December"]},prevItem:{title:"Week 1 in Packit",permalink:"/posts/weekly/2024/week-1"},nextItem:{title:"Week 50 in Packit",permalink:"/posts/weekly/2023/week-50"}},c={authorsImageUrls:[void 0]},s=[{value:"End of the year in Packit",id:"end-of-the-year-in-packit",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"end-of-the-year-in-packit"},"End of the year in Packit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have hit some issues with the firewall rules on the new cluster hosting our production. We are waiting for the required fix that is done outside of our team which should be deployed around January 11th. We will keep you informed about the current status. At the moment we are aware of the issues related to the:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pull-from-upstream")," jobs that have sources hosted at infradead.org, sourceforge.net and gitlab.gnome.org"),(0,a.kt)("li",{parentName:"ul"},"jobs running on the gitlab.gnome.org in general"))),(0,a.kt)("li",{parentName:"ul"},"We have also fixed an issue that caused some Cockpit releases to fail, others might've been affected too, though there are no reports.")))}m.isMDXComponent=!0}}]);