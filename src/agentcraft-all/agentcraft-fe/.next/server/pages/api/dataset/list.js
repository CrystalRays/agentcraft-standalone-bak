"use strict";(()=>{var e={};e.id=3676,e.ids=[3676],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:e=>{e.exports=import("axios")},4637:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.r(a),t.d(a,{config:()=>c,default:()=>l,routeModule:()=>u});var r=t(1802),i=t(7153),n=t(6249),o=t(9431),d=e([o]);o=(d.then?(await d)():d)[0];let l=(0,n.l)(o,"default"),c=(0,n.l)(o,"config"),u=new r.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/dataset/list",pathname:"/api/dataset/list",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},9431:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.r(a),t.d(a,{default:()=>handler});var r=t(15),i=e([r]);async function handler(e,a){let{page:t=0,limit:s=20,dataset_type:i}=e.query;r.Z.defaults.headers.common.Authorization=e.headers.authorization;let n=await r.Z.get("/dataset/list",{params:{page:t,limit:s,dataset_type:i}}),{status:o,data:d}=n;a.status(o).json(d)}r=(i.then?(await i)():i)[0],s()}catch(e){s(e)}})},15:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.d(a,{Z:()=>o});var r=t(9648),i=e([r]);r=(i.then?(await i)():i)[0];let n=r.default.create({baseURL:process.env.baseUrl||"",headers:{"Content-Type":"application/json"}});n.interceptors.response.use(e=>Promise.resolve(e),e=>{if(e.response.status){let{status:a,data:t}=e.response;return Promise.resolve({status:a,data:{code:a,message:t.detail}})}});let o=n;s()}catch(e){s(e)}})}};var a=require("../../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[4222],()=>__webpack_exec__(4637));module.exports=t})();