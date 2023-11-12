"use strict";(()=>{var e={};e.id=8846,e.ids=[8846,2888,660],e.modules={7124:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>h,getServerSideProps:()=>g,getStaticPaths:()=>u,getStaticProps:()=>x,reportWebVitals:()=>j,routeModule:()=>P,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>w});var i=r(7093),a=r(5244),d=r(1323),n=r(9209),o=r.n(n),l=r(5913),p=r(8766),c=e([l,p]);[l,p]=c.then?(await c)():c;let h=(0,d.l)(p,"default"),x=(0,d.l)(p,"getStaticProps"),u=(0,d.l)(p,"getStaticPaths"),g=(0,d.l)(p,"getServerSideProps"),m=(0,d.l)(p,"config"),j=(0,d.l)(p,"reportWebVitals"),w=(0,d.l)(p,"unstable_getStaticProps"),v=(0,d.l)(p,"unstable_getStaticPaths"),f=(0,d.l)(p,"unstable_getStaticParams"),S=(0,d.l)(p,"unstable_getServerProps"),b=(0,d.l)(p,"unstable_getServerSideProps"),P=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/app/[id]/knowledgeBase/[knowledgeBaseId]/chatlist",pathname:"/app/[id]/knowledgeBase/[knowledgeBaseId]/chatlist",bundlePath:"",filename:""},components:{App:l.default,Document:o()},userland:p});s()}catch(e){s(e)}})},4793:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{f:()=>ChatListPage});var i=r(997),a=r(6689),d=r(2247),n=r(5641),o=r(3062),l=r(2394),p=e([n]);function List({knowledgeBaseId:e}){let t=(0,n.aK)().chatList,r=(0,n.aK)().loading,s=(0,n.aK)().setLoading,l=(0,n.aK)().setOpen,getKnowledgeBaseChatList=async e=>{s(!0),await (0,n.Ag)(e),s(!1)},p=t.map(e=>(0,i.jsxs)("tr",{children:[i.jsx("td",{children:e.id}),i.jsx("td",{children:i.jsx("div",{style:{width:100,wordWrap:"break-word"},children:e.question})}),i.jsx("td",{children:i.jsx("div",{style:{width:200,wordWrap:"break-word"},children:(0,o.pI)(e.answer)})}),i.jsx("td",{children:i.jsx("div",{style:{width:200,wordWrap:"break-word"},children:e.prompt})}),i.jsx("td",{children:e.ip}),i.jsx("td",{children:i.jsx("div",{style:{width:200,wordWrap:"break-word"},children:JSON.stringify((0,o.pI)(e.source))})}),i.jsx("td",{children:e.model_name}),i.jsx("td",{children:e.created}),i.jsx("td",{children:i.jsx(d.Button,{onClick:()=>{l(!0)},size:"xs",children:"编辑"})})]},e.id));return(0,a.useEffect)(()=>{getKnowledgeBaseChatList(e)},[e]),(0,i.jsxs)(d.Box,{pos:"relative",children:[i.jsx(d.LoadingOverlay,{visible:r,overlayOpacity:.3}),(0,i.jsxs)(d.Table,{striped:!0,withBorder:!0,withColumnBorders:!0,mt:12,children:[i.jsx("thead",{children:(0,i.jsxs)("tr",{children:[i.jsx("th",{children:"编号"}),i.jsx("th",{children:"问题"}),i.jsx("th",{children:"答案"}),i.jsx("th",{children:"完整提示词"}),i.jsx("th",{children:"访问IP"}),i.jsx("th",{children:"知识库结果"}),i.jsx("th",{children:"使用模型"}),i.jsx("th",{children:"问答创建时间"}),i.jsx("th",{children:"操作"})]})}),i.jsx("tbody",{children:p})]})]})}function ChatListPage({appId:e,knowledgeBaseId:t}){let r=(0,n.aK)().loading,s=[{title:"应用列表",href:"/app"},{title:"知识库",href:`/app/${e}/knowledgeBase`},{title:"问答记录",href:`/app/${e}/knowledgeBase/${t}/chatlist`}].map((e,t)=>i.jsx(d.Anchor,{href:e.href,children:e.title},t));return(0,i.jsxs)(d.Box,{pos:"relative",children:[i.jsx(d.LoadingOverlay,{visible:r,overlayOpacity:.3}),i.jsx(d.Breadcrumbs,{children:s}),i.jsx(l.Z,{title:"问答记录",description:"您可以在此查看该知识库的问答历史记录"}),i.jsx(List,{knowledgeBaseId:t})]})}n=(p.then?(await p)():p)[0],s()}catch(e){s(e)}})},8766:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>IndexPage,getServerSideProps:()=>getServerSideProps});var i=r(997),a=r(4793),d=e([a]);function getServerSideProps(e){let{params:t}=e,r=t.id,s=t.knowledgeBaseId;return{props:{appId:r,knowledgeBaseId:s}}}function IndexPage({appId:e,knowledgeBaseId:t}){return i.jsx(a.f,{appId:e,knowledgeBaseId:t})}a=(d.then?(await d)():d)[0],s()}catch(e){s(e)}})},2247:e=>{e.exports=require("@mantine/core")},9445:e=>{e.exports=require("@mantine/form")},32:e=>{e.exports=require("@mantine/hooks")},1280:e=>{e.exports=require("@mantine/modals")},914:e=>{e.exports=require("@mantine/notifications")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},727:e=>{e.exports=require("react-syntax-highlighter")},4794:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/styles/prism")},997:e=>{e.exports=require("react/jsx-runtime")},4827:e=>{e.exports=import("@fortaine/fetch-event-source")},5611:e=>{e.exports=import("nanoid")},3135:e=>{e.exports=import("react-markdown")},7984:e=>{e.exports=import("remark-breaks")},6809:e=>{e.exports=import("remark-gfm")},9832:e=>{e.exports=import("remark-math")},9890:e=>{e.exports=import("zustand")},3602:e=>{e.exports=import("zustand/middleware")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[2761,5021,9209,8450,5913,2394,5641],()=>__webpack_exec__(7124));module.exports=r})();