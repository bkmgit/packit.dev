"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[6623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Update a spec file",date:new Date("2021-01-25T22:59:59.000Z"),sidebar_position:10},o="Update a spec file",c={unversionedId:"work-with-source-git/update-spec",id:"work-with-source-git/update-spec",title:"Update a spec file",description:"Changing a spec file is very straightforward:",source:"@site/source-git/work-with-source-git/update-spec.md",sourceDirName:"work-with-source-git",slug:"/work-with-source-git/update-spec",permalink:"/source-git/work-with-source-git/update-spec",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/source-git/work-with-source-git/update-spec.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Update a spec file",date:"2021-01-25T22:59:59.000Z",sidebar_position:10},sidebar:"autogenerated",previous:{title:"Create a source-git repo",permalink:"/source-git/work-with-source-git/create-source-git"},next:{title:"Pull fixes from the upstream",permalink:"/source-git/work-with-source-git/pull-upstream-fixes"}},p={},l=[],s={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-a-spec-file"},"Update a spec file"),(0,a.kt)("p",null,"Changing a spec file is very straightforward:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Edit the file."),(0,a.kt)("li",{parentName:"ol"},"Commit the change locally.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please make sure that your change complies with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/packaging-guidelines/"},"Fedora Packaging\nGuidelines")," if\nyou intend to bring it to the Fedora ecosystem.")),(0,a.kt)("p",null,"Once that's done, it's a great practice to ",(0,a.kt)("a",{parentName:"p",href:"build-locally"},"create a SRPM and build the spec file change locally"),"."),(0,a.kt)("p",null,"If you are planning to pull an upstream fix, you can ",(0,a.kt)("a",{parentName:"p",href:"pull-upstream-fixes"},"read more here"),"."))}f.isMDXComponent=!0}}]);