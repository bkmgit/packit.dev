"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[8482],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,s=function(e,t){if(null==e)return{};var a,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=o.createContext({}),p=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=s,h=c["".concat(i,".").concat(u)]||c[u]||m[u]||r;return a?o.createElement(h,n(n({ref:t},d),{},{components:a})):o.createElement(h,n({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,n=new Array(r);n[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:s,n[1]=l;for(var p=2;p<r;p++)n[p]=a[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42357:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(87462),s=(a(67294),a(3905));const r={title:"Data stores",authors:"jpopelka"},n=void 0,l={unversionedId:"database/data-stores",id:"database/data-stores",title:"Data stores",description:"Why",source:"@site/research/database/data-stores.md",sourceDirName:"database",slug:"/database/data-stores",permalink:"/research/database/data-stores",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/database/data-stores.md",tags:[],version:"current",frontMatter:{title:"Data stores",authors:"jpopelka"},sidebar:"autogenerated",previous:{title:"Usage of composite type to store the pipelines",permalink:"/research/database/composite-types"},next:{title:"Postgres views",permalink:"/research/database/postgres-views/"}},i={},p=[{value:"Why",id:"why",level:2},{value:"SQL",id:"sql",level:2},{value:"SQLite",id:"sqlite",level:3},{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4},{value:"Postgresql",id:"postgresql",level:3},{value:"Pros",id:"pros-1",level:4},{value:"Cons",id:"cons-1",level:4},{value:"NoSQL",id:"nosql",level:2},{value:"Pros",id:"pros-2",level:3},{value:"Cons",id:"cons-2",level:3},{value:"DBaaS",id:"dbaas",level:2},{value:"Deploy in OpenShift",id:"deploy-in-openshift",level:3},{value:"AWS",id:"aws",level:3},{value:"Postgresql",id:"postgresql-1",level:4},{value:"MongoDB",id:"mongodb",level:4}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"why"},"Why"),(0,s.kt)("p",null,"At the moment (Nov 19) we use Redis as a Celery backend (i.e. for storing results of Celery tasks) as well as a data store where we track copr builds, github app installations and whitelist of users.\nRedis is in-memory DB, i.e. the more data we store the more memory we use.\nBecause memory is (unlike disk) quite expensive we want to move to a DB which stores the data on disk.\nThe task here is to decide between SQL or NoSQL and then between our own deployment or a database in a cloud."),(0,s.kt)("h2",{id:"sql"},"SQL"),(0,s.kt)("p",null,"SQL stores data in a structured way of interconnected tables.\nThe question here is whether we actually need structured tables to do some crazy queries.\nBig plus here is that Celery supports ",(0,s.kt)("a",{parentName:"p",href:"https://www.sqlalchemy.org"},"SQLAlchemy")," as a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.celeryproject.org/en/latest/getting-started/first-steps-with-celery.html#keeping-results"},"built-in backend")," and the same applies to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pallets/flask-sqlalchemy"},"Flask"),".\nFrom the databases which SQLAlchemy supports I'd select SQLite and Postgresql (see also ",(0,s.kt)("a",{parentName:"p",href:"https://tableplus.com/blog/2018/08/sqlite-vs-postgresql-which-database-to-use-and-why.html"},"this")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems"},"this"),"):"),(0,s.kt)("h3",{id:"sqlite"},"SQLite"),(0,s.kt)("h4",{id:"pros"},"Pros"),(0,s.kt)("p",null,"Ultra-lightweight in setup, administration, and required resource. Very fast."),(0,s.kt)("h4",{id:"cons"},"Cons"),(0,s.kt)("p",null,"Because SQLite is a serverless database, it doesn\u2019t provide direct network access to its data. An application (as I understand it) just stores data in a file by using a SQLite library. If more containers (in our case service and more workers) need to access the db, they probably need to have the file on a shared (RWX) volume."),(0,s.kt)("h3",{id:"postgresql"},"Postgresql"),(0,s.kt)("h4",{id:"pros-1"},"Pros"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://www.postgresqltutorial.com/postgresql-json"},"JSON data type")," is a big plus, because we already have our data serialized as jsons so we can just store them that way and then do all kinds of queries over them."),(0,s.kt)("h4",{id:"cons-1"},"Cons"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems#when-not-to-use-postgresql"},"Overkill")),(0,s.kt)("h2",{id:"nosql"},"NoSQL"),(0,s.kt)("p",null,"Example of a NoSQL (",(0,s.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/a-comparison-of-nosql-database-management-systems-and-models#document-oriented-databases"},"Document-oriented"),") database is ",(0,s.kt)("a",{parentName:"p",href:"https://www.mongodb.com/what-is-mongodb"},"MongoDB"),"."),(0,s.kt)("h3",{id:"pros-2"},"Pros"),(0,s.kt)("p",null,"Stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time. It also ",(0,s.kt)("a",{parentName:"p",href:"https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm"},"supports queries")," and indexing."),(0,s.kt)("h3",{id:"cons-2"},"Cons"),(0,s.kt)("p",null,"Using MongoDB as a Celery backend is not that straightforward, but there are options: ",(0,s.kt)("a",{parentName:"p",href:"http://docs.celeryproject.org/en/latest/_modules/celery/backends/mongodb.html"},"[1]"),", ",(0,s.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/15740755/working-example-of-celery-with-mongo-db"},"[2]"),", ",(0,s.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/53017827/example-celery-v4-2-with-mongodb-results-backend"},"[3]")),(0,s.kt)("h2",{id:"dbaas"},"DBaaS"),(0,s.kt)("p",null,"Deploy ourselves or ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cloud_database"},"cloud-native"),"? That's the question."),(0,s.kt)("h3",{id:"deploy-in-openshift"},"Deploy in OpenShift"),(0,s.kt)("p",null,"There are publicly available container images for both ",(0,s.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/3.11/using_images/db_images/postgresql.html"},"Postgresql")," and ",(0,s.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/3.11/using_images/db_images/mongodb.html"},"MongoDB"),"."),(0,s.kt)("h3",{id:"aws"},"AWS"),(0,s.kt)("h4",{id:"postgresql-1"},"Postgresql"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://aws.amazon.com/rds/postgresql"},"Amazon RDS for PostgreSQL")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html"},"PostgreSQL on Amazon RDS"))),(0,s.kt)("h4",{id:"mongodb"},"MongoDB"),(0,s.kt)("p",null,"Even that one can use MongoDB in AWS (see ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/quickstart/latest/mongodb/welcome.html"},"[1]"),", ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/quickstart/architecture/mongodb"},"[2]"),"), Amazon seems to be pushing their MongoDB compatible ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/documentdb"},"DocumentDB")," (see also ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/documentdb/latest/developerguide"},"Docs/Developer Guide"),").\nGiven that we don't need full MongoDB compatibility, the DocumentDB seems to be the preferred one. (and the winner of today's battle)"))}m.isMDXComponent=!0}}]);