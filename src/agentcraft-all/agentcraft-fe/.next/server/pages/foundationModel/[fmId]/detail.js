"use strict";(()=>{var e={};e.id=1805,e.ids=[1805,2888,660],e.modules={8198:(e,t,r)=>{r.d(t,{Z:()=>i});var i=(0,r(853).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},3625:(e,t,r)=>{r.d(t,{Z:()=>i});var i=(0,r(853).Z)("copy","IconCopy",[["path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2",key:"svg-1"}]])},7273:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>h,getServerSideProps:()=>m,getStaticPaths:()=>x,getStaticProps:()=>u,reportWebVitals:()=>f,routeModule:()=>y,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>j});var s=r(7093),a=r(5244),o=r(1323),n=r(9209),l=r.n(n),d=r(5913),c=r(3670),p=e([d,c]);[d,c]=p.then?(await p)():p;let h=(0,o.l)(c,"default"),u=(0,o.l)(c,"getStaticProps"),x=(0,o.l)(c,"getStaticPaths"),m=(0,o.l)(c,"getServerSideProps"),g=(0,o.l)(c,"config"),f=(0,o.l)(c,"reportWebVitals"),j=(0,o.l)(c,"unstable_getStaticProps"),v=(0,o.l)(c,"unstable_getStaticPaths"),P=(0,o.l)(c,"unstable_getStaticParams"),b=(0,o.l)(c,"unstable_getServerProps"),S=(0,o.l)(c,"unstable_getServerSideProps"),y=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/foundationModel/[fmId]/detail",pathname:"/foundationModel/[fmId]/detail",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:c});i()}catch(e){i(e)}})},8846:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.d(t,{O:()=>FoundationModelDetail});var s=r(997),a=r(6689),o=r(1163),n=r(2247),l=r(2394),d=r(8159),c=r(918),p=r(6105),h=e([d]);d=(h.then?(await h)():h)[0];let u={"fc-qwen":"client","fc-llm-api":"llm-server"},x={published:{color:"green",text:"已发布"},deploying:{color:"yellow",text:"部署中"}};function FoundationModelView({fmId:e}){let t=(0,d.bQ)().currentFoundationModel,r=(0,d.bQ)().setCurrentFoundationModel;(0,a.useEffect)(()=>{(async()=>{let t=await (0,d.Yo)(e),i=t?.lastRelease;r(i)})()},[e]);let i=function(e){try{let t=e.output,r=t?.deploy,i=Object.keys(r).filter(t=>u[e.appConfig.template]===t),s=r[i[0]];if(s)return s.customDomains[0].domainName}catch(e){console.log(e)}return""}(t),o=x[t?.status]||{color:"grey",text:"初始化"};return s.jsx("div",{children:(0,s.jsxs)("div",{children:[s.jsx(n.Title,{order:4,mb:8,children:"基础模型服务信息"}),(0,s.jsxs)(n.Paper,{shadow:"xs",p:"md",withBorder:!0,mb:12,children:[s.jsx(n.Title,{order:5,size:"h5",children:"应用信息"}),s.jsx(n.Box,{maw:p.cy,pl:4,pr:4,children:s.jsx("div",{children:(0,s.jsxs)(n.Flex,{align:"center",children:["应用访问状态：",s.jsx(n.Text,{color:o.color,children:o.text})]})})})]}),s.jsx(n.Title,{order:4,mb:8,children:"访问接入"}),(0,s.jsxs)(n.Paper,{shadow:"xs",p:"md",withBorder:!0,mb:12,children:[s.jsx(n.Title,{order:5,size:"h5",children:"基础模型服务访问信息"}),i?(0,s.jsxs)(n.Box,{maw:p.cy,pl:4,pr:4,children:[s.jsx("div",{children:(0,s.jsxs)(n.Flex,{align:"center",children:["API访问地址：",s.jsx(c.Z,{width:800,content:`http://${i}/v1/chat/completions`,value:`http://${i}/v1/chat/completions`})]})}),s.jsx("div",{children:(0,s.jsxs)("span",{children:["API访问文档：",`http://${i}/docs`]})})]}):null]}),s.jsx(n.Title,{order:4,mb:8,children:"云资源信息"}),(0,s.jsxs)(n.Paper,{shadow:"xs",p:"md",withBorder:!0,children:[s.jsx(n.Title,{order:5,size:"h5",children:"函数计算应用信息"}),s.jsx(n.Box,{maw:p.cy,pl:4,pr:4,children:s.jsx("div",{children:(0,s.jsxs)("span",{children:["应用名：",`${t?.appName}`]})})})]})]})})}function FoundationModelDetail(){let e=(0,o.useRouter)(),{query:t}=e,r=t.fmId,i=[{title:"AgentCraft",href:"/"},{title:"基础模型",href:"/foundationModel"},{title:"模型详情",href:`/foundationModel/${r}/detail`}].map((e,t)=>s.jsx(n.Anchor,{href:e.href,children:e.title},t));return(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.Breadcrumbs,{children:i}),s.jsx(l.Z,{title:`${r}详情`,description:"依托阿里云Serverless的丰富应用模版以及完整的工具链，AgentCraft可以创建丰富多样的基础模型服务"}),s.jsx(n.Box,{mt:12,children:s.jsx(FoundationModelView,{fmId:r})})]})}i()}catch(e){i(e)}})},3670:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>IndexPage,getServerSideProps:()=>getServerSideProps});var s=r(997),a=r(8846),o=e([a]);function getServerSideProps(e){let{params:t}=e,r=t.fmId;return{props:{fmId:r}}}function IndexPage(){return s.jsx(a.O,{})}a=(o.then?(await o)():o)[0],i()}catch(e){i(e)}})},2247:e=>{e.exports=require("@mantine/core")},9445:e=>{e.exports=require("@mantine/form")},32:e=>{e.exports=require("@mantine/hooks")},1280:e=>{e.exports=require("@mantine/modals")},914:e=>{e.exports=require("@mantine/notifications")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},727:e=>{e.exports=require("react-syntax-highlighter")},4794:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/styles/prism")},997:e=>{e.exports=require("react/jsx-runtime")},5611:e=>{e.exports=import("nanoid")},3135:e=>{e.exports=import("react-markdown")},7984:e=>{e.exports=import("remark-breaks")},6809:e=>{e.exports=import("remark-gfm")},9832:e=>{e.exports=import("remark-math")},9890:e=>{e.exports=import("zustand")},3602:e=>{e.exports=import("zustand/middleware")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[2761,5021,9209,8450,5913,2394,918],()=>__webpack_exec__(7273));module.exports=r})();