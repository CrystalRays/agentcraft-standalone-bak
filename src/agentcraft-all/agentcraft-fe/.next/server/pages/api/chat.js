"use strict";(()=>{var e={};e.id=3772,e.ids=[3772],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9454:(e,a,t)=>{t.r(a),t.d(a,{config:()=>p,default:()=>l,routeModule:()=>c});var r={};t.r(r),t.d(r,{default:()=>handle});var i=t(1802),n=t(7153),o=t(6249);let d=require("stream"),s=process.env.baseUrl;async function handle(e,a){let t=e.body,{token:r,...i}=t,{messages:n,config:o}=i,{...l}=o,p=await fetch(`${s}/v1/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify(Object.assign({},l,{messages:n}))}),c=p.body.getReader(),u=new d.Readable({read(e){}});for(a.setHeader("Content-Type","application/octet-stream"),a.setHeader("Cache-Control","no-cache"),u.pipe(a);;){let{done:e,value:a}=await c.read();if(e){await u.push(null);break}await u.push(a)}}let l=(0,o.l)(r,"default"),p=(0,o.l)(r,"config"),c=new i.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/chat",pathname:"/api/chat",bundlePath:"",filename:""},userland:r})}};var a=require("../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[4222],()=>__webpack_exec__(9454));module.exports=t})();