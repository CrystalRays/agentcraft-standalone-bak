"use strict";(()=>{var e={};e.id=1222,e.ids=[1222],e.modules={8113:e=>{e.exports=require("@alicloud/fc-open20210406")},3272:e=>{e.exports=require("@alicloud/openapi-client")},487:e=>{e.exports=require("@alicloud/ram20150501")},78:e=>{e.exports=require("@alicloud/serverless20210924")},319:e=>{e.exports=require("@alicloud/sts20150401")},2151:e=>{e.exports=require("@alicloud/tea-util")},2807:e=>{e.exports=require("@alicloud/vpc20160428")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},5611:e=>{e.exports=import("nanoid")},9618:(e,a,r)=>{r.a(e,async(e,t)=>{try{r.r(a),r.d(a,{config:()=>d,default:()=>n,routeModule:()=>u});var i=r(1802),c=r(7153),o=r(6249),s=r(28),l=e([s]);s=(l.then?(await l)():l)[0];let n=(0,o.l)(s,"default"),d=(0,o.l)(s,"config"),u=new i.PagesAPIRouteModule({definition:{kind:c.x.PAGES_API,page:"/api/infra/alibaba-cloud/createApp",pathname:"/api/infra/alibaba-cloud/createApp",bundlePath:"",filename:""},userland:s});t()}catch(e){t(e)}})},28:(e,a,r)=>{r.a(e,async(e,t)=>{try{r.r(a),r.d(a,{default:()=>handler});var i=r(5611),c=r(3502),o=r(5796),s=e([i]);async function handler(e,a){let r;let t=e.query.template,s=e.body,l=e.headers,n=l["x-fc-account-id"]||process.env.MAIN_ACCOUNT_ID,d=l["x-fc-access-key-id"],u=l["x-fc-access-key-secret"],p=l["x-fc-security-token"];d&&(r={accessKeyId:d,accessKeySecret:u,securityToken:p});let x=new c.G(r),{description:f="",name:y="",..._}=s,m=y||`${o.Ad}_${(0,i.nanoid)()}`,A={name:m,description:f||"由AgentCraft创建，谨慎删除",template:t,parameters:_,roleArn:`acs:ram::${n}:role/aliyunfcserverlessdevsrole`,autoDeploy:!0},v=200,b={code:200};try{let e=await x.createMainAccountApplication(A);b.data=e.body}catch(e){v=500,b.code=v,b.error=e.message}a.status(v).json(b)}i=(s.then?(await s)():s)[0],t()}catch(e){t(e)}})}};var a=require("../../../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),r=a.X(0,[4222,3502,5796],()=>__webpack_exec__(9618));module.exports=r})();