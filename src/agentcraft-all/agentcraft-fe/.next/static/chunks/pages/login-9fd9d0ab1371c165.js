(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{73700:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(56725)}])},56725:function(e,s,r){"use strict";r.r(s);var n=r(85893);r(67294);var l=r(41664),t=r.n(l),i=r(82623),a=r(80061),u=r(73193),d=r(67841),o=r(77248),c=r(11163),h=r(18986);s.default=()=>{let e=(0,c.useRouter)(),s=(0,h.O_)().setToken,r=(0,o.c)({initialValues:{username:"serverless_llm",password:"serverless_LLM"},validate:{}}),handleSubmit=async()=>{r.validate();let{username:n,password:l}=r.values,t=await (0,h.x4)(n,l);t.access_token&&(s(t.access_token),e.push("/"))};return(0,n.jsx)("div",{style:{maxWidth:400,margin:"200px auto",paddingTop:"2rem"},children:(0,n.jsxs)(i.X,{shadow:"xs",children:[(0,n.jsxs)("div",{style:{textAlign:"center",width:"100%"},children:[" ",(0,n.jsx)(t(),{href:"/register",children:"前往注册"})]}),(0,n.jsxs)("form",{children:[(0,n.jsx)(a.o,{label:"用户名",placeholder:"请输入用户名",required:!0,...r.getInputProps("username")}),(0,n.jsx)(u.W,{label:"密码",placeholder:"请输入密码",required:!0,...r.getInputProps("password")}),(0,n.jsx)(d.z,{color:"blue",fullWidth:!0,style:{marginTop:"1rem"},onClick:()=>{handleSubmit()},children:"登录"})]})]})})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=73700)}),_N_E=e.O()}]);