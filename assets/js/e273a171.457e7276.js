"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[6982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return r?i.createElement(f,a(a({ref:t},p),{},{components:r})):i.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<n;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var i=r(87462),o=(r(67294),r(3905));const n={title:"Koji builds",sidebar_position:2},a="job: koji_build",s={unversionedId:"configuration/downstream/koji_build",id:"configuration/downstream/koji_build",title:"Koji builds",description:"Trigger the build in",source:"@site/docs/configuration/downstream/koji_build.md",sourceDirName:"configuration/downstream",slug:"/configuration/downstream/koji_build",permalink:"/docs/configuration/downstream/koji_build",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/configuration/downstream/koji_build.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Koji builds",sidebar_position:2},sidebar:"autogenerated",previous:{title:"Pull from upstream",permalink:"/docs/configuration/downstream/pull_from_upstream"},next:{title:"Bodhi updates",permalink:"/docs/configuration/downstream/bodhi_update"}},l={},u=[{value:"Supported triggers",id:"supported-triggers",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Example",id:"example",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"job-koji_build"},(0,o.kt)("inlineCode",{parentName:"h1"},"job: koji_build")),(0,o.kt)("p",null,"Trigger the build in\n",(0,o.kt)("a",{parentName:"p",href:"https://koji.fedoraproject.org/koji/"},"Fedora Koji")," build system\nas a reaction to a new dist-git commit.\nA Packit config file needs to be in the dist-git repository\nto allow this job to be triggered.\nPackit loads the config from the default dist-git branch (usually ",(0,o.kt)("inlineCode",{parentName:"p"},"rawhide"),"). Packit configs on other branches are ignored."),(0,o.kt)("p",null,"The build is triggered only for commits with a spec-file change."),(0,o.kt)("p",null,"By default, only merged pull requests created by Packit are being acted upon so the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/fesco/Provenpackager_policy/"},"proven packager\nworkflow")," is\npreserved, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/issues/1490"},"details\nhere"),". You can override this behaviour by specifying\n",(0,o.kt)("inlineCode",{parentName:"p"},"allowed_pr_authors")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"allowed_committers")," in the job configuration (see below). For direct pushes, the committer needs to\nbe specified in the  ",(0,o.kt)("inlineCode",{parentName:"p"},"allowed_committers")," and for merged pull requests the author of the PR needs to be\nspecified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"allowed_pr_authors"),"."),(0,o.kt)("p",null,"There is no UI provided by Packit for the job,\nbut it is visible across Fedora systems (as you can see in the following image).\nThe koji build behaves as it was created manually, and you can utilise\n",(0,o.kt)("a",{parentName:"p",href:"https://apps.fedoraproject.org/notifications/about"},"Fedora Notifications"),"\nto be informed about the builds. Also, you can configure a repository where should we\nopen issues in case of errors during the job via ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,o.kt)("inlineCode",{parentName:"a"},"issue_repository"))," configuration key."),(0,o.kt)("p",null,"For retriggering the job, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide"},"our release guide"),"."),(0,o.kt)("p",null,"For Koji builds from upstream, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/upstream/upstream_koji_build"},(0,o.kt)("inlineCode",{parentName:"a"},"upstream_koji_build")),"."),(0,o.kt)("h2",{id:"supported-triggers"},"Supported triggers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"commit")," - reacts to new commits to the specified branch (in dist-git)")),(0,o.kt)("h2",{id:"required-parameters"},"Required parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"dist_git_branches")," - the name of the dist-git branch we want to build for when using ",(0,o.kt)("strong",{parentName:"li"},"commit")," trigger.\nYou can also use the ",(0,o.kt)("a",{parentName:"li",href:"/docs/configuration#aliases"},"aliases provided by Packit"),"\nto not need to change the config file when the new system version is released.")),(0,o.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"scratch")," - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", use to create scratch (test) builds\ninstead of the real production builds"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"allowed_pr_authors")," - a list of FAS accounts of PR authors whose merged pull requests will trigger koji builds\n(defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"['packit']"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"allowed_committers")," - a list of FAS accounts of committers whose direct pushes to dist-git will trigger koji builds\n(defaults to an empty list). You do not need to configure this option if you want to have koji builds triggered only by merged pull requests.")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'issue_repository: https://github.com/my-username/packit-notifications\n\njobs:\n- job: koji_build\n  trigger: commit\n  allowed_committers: ["jsmith"]\n  dist_git_branches:\n    - fedora-all\n    - epel-8\n')))}c.isMDXComponent=!0}}]);