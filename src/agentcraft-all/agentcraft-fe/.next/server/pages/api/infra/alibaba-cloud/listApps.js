"use strict";(()=>{var e={};e.id=8086,e.ids=[8086],e.modules={8113:e=>{e.exports=require("@alicloud/fc-open20210406")},3272:e=>{e.exports=require("@alicloud/openapi-client")},487:e=>{e.exports=require("@alicloud/ram20150501")},78:e=>{e.exports=require("@alicloud/serverless20210924")},319:e=>{e.exports=require("@alicloud/sts20150401")},2151:e=>{e.exports=require("@alicloud/tea-util")},2807:e=>{e.exports=require("@alicloud/vpc20160428")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6674:(e,r,a)=>{a.r(r),a.d(r,{config:()=>u,default:()=>c,routeModule:()=>p});var i={};a.r(i),a.d(i,{default:()=>handler});var t=a(1802),l=a(7153),s=a(6249),o=a(3502),d=a(5796);async function handler(e,r){let a;let i=e.headers,t=i["x-fc-access-key-id"],l=i["x-fc-access-key-secret"],s=i["x-fc-security-token"];t&&(a={accessKeyId:t,accessKeySecret:l,securityToken:s});let c=new o.G(a),u=200,p={code:200};try{let e=await c.listApplications();p.code=e.statusCode;let r=e.body.result;p.data=r.filter(e=>0===e.name.indexOf(d.Ad))}catch(e){u=500,p.code=u,p.error=e.message}r.status(u).json(p)}let c=(0,s.l)(i,"default"),u=(0,s.l)(i,"config"),p=new t.PagesAPIRouteModule({definition:{kind:l.x.PAGES_API,page:"/api/infra/alibaba-cloud/listApps",pathname:"/api/infra/alibaba-cloud/listApps",bundlePath:"",filename:""},userland:i})}};var r=require("../../../../webpack-api-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),a=r.X(0,[4222,3502,5796],()=>__webpack_exec__(6674));module.exports=a})();