"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[754],{14127:function(e,r,t){t.d(r,{Y:function(){return _}});var n=t(67294);function clamp(e,r,t){return Math.min(Math.max(e,r),t)}var o=t(83979),a=t(80665),i=t(10129);function getOS(){if("undefined"==typeof window)return"undetermined";let{userAgent:e}=window.navigator;return/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i.test(e)?"macos":/(iPhone)|(iPad)|(iPod)/i.test(e)?"ios":/(Win32)|(Win64)|(Windows)|(WinCE)/i.test(e)?"windows":/Android/i.test(e)?"android":/Linux/i.test(e)?"linux":"undetermined"}var l=t(96768),s=t(3241),u=t(14258);let getInputMode=(e,r,t)=>Number.isInteger(e)&&e>=0&&0===r?"numeric":!Number.isInteger(e)&&e>=0&&0!==r?"decimal":Number.isInteger(e)&&e<0&&0===r||!Number.isInteger(e)&&e<0&&0!==r?"ios"===t?"text":"decimal":"numeric";function Chevron({direction:e,size:r}){return n.createElement("svg",{style:{transform:"up"===e?"rotate(180deg)":void 0},width:(0,l.h)(r),height:(0,l.h)(r),viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var d=t(56817);let p={xs:(0,l.h)(20),sm:(0,l.h)(24),md:(0,l.h)(30),lg:(0,l.h)(34),xl:(0,l.h)(36)};var c=(0,d.k)((e,{radius:r},{size:t})=>({rightSection:{display:"flex",flexDirection:"column",height:`calc(100% - ${(0,l.h)(2)})`,margin:(0,l.h)(1),overflow:"hidden",borderTopRightRadius:e.fn.radius(r),borderBottomRightRadius:e.fn.radius(r)},control:{margin:0,position:"relative",flex:"0 0 50%",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:(0,u.a)({size:t,sizes:p}),padding:0,WebkitTapHighlightColor:"transparent",borderBottom:`${(0,l.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,borderLeft:`${(0,l.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,borderTop:0,borderRight:0,backgroundColor:"transparent",marginRight:(0,l.h)(1),color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,"&:not(:disabled):hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[0]},"&:disabled":{color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[4]}},controlUp:{},controlDown:{borderBottom:0}})),f=t(80061),m=Object.defineProperty,h=Object.defineProperties,g=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))y.call(r,t)&&__defNormalProp(e,t,r[t]);if(b)for(var t of b(r))v.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>h(e,g(r)),__objRest=(e,r)=>{var t={};for(var n in e)y.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&b)for(var n of b(e))0>r.indexOf(n)&&v.call(e,n)&&(t[n]=e[n]);return t};let w={xs:(0,l.h)(10),sm:(0,l.h)(14),md:(0,l.h)(16),lg:(0,l.h)(18),xl:(0,l.h)(20)},S={step:1,hideControls:!1,size:"sm",precision:0,noClampOnBlur:!1,removeTrailingZeros:!1,formatter:e=>e||"",parser:e=>{if("-"===e)return e;let r=e;"."===r[0]&&(r=`0${e}`);let t=parseFloat(r);return Number.isNaN(t)?"":e},type:"text"},_=(0,n.forwardRef)((e,r)=>{let t=(0,s.N4)("NumberInput",S,e),{readOnly:d,disabled:m,value:h,onChange:g,decimalSeparator:b,min:y,max:v,startValue:_,step:x,stepHoldInterval:P,stepHoldDelay:C,onBlur:R,onKeyDown:N,onKeyUp:z,hideControls:E,radius:k,variant:O,precision:D,removeTrailingZeros:I,defaultValue:L,noClampOnBlur:V,handlersRef:W,classNames:T,styles:j,size:F,rightSection:H,rightSectionWidth:M,formatter:B,parser:$,inputMode:A,unstyled:U,type:K}=t,Z=__objRest(t,["readOnly","disabled","value","onChange","decimalSeparator","min","max","startValue","step","stepHoldInterval","stepHoldDelay","onBlur","onKeyDown","onKeyUp","hideControls","radius","variant","precision","removeTrailingZeros","defaultValue","noClampOnBlur","handlersRef","classNames","styles","size","rightSection","rightSectionWidth","formatter","parser","inputMode","unstyled","type"]),{classes:Y,cx:q}=c({radius:k},{classNames:T,styles:j,unstyled:U,name:"NumberInput",variant:O,size:F}),parsePrecision=e=>{if(""===e)return"";let r=e.toFixed(D);return I&&D>0&&((r=r.replace(RegExp(`[0]{0,${D}}$`),"")).endsWith(".")||r.endsWith(b))&&(r=r.slice(0,-1)),r},[G,J]=(0,n.useState)("number"==typeof h?h:"number"==typeof L?L:""),Q="number"==typeof h?h:G,[X,ee]=(0,n.useState)("number"==typeof Q?parsePrecision(Q):""),er=(0,n.useRef)(),handleValueChange=e=>{e===G||Number.isNaN(e)||("function"==typeof g&&g(e),J(e))},parseNum=e=>{let r=e;return b&&(r=r.replace(RegExp(`\\${b}`,"g"),".")),$(r)},et="number"==typeof y?y:-1/0,en="number"==typeof v?v:1/0,eo=(0,n.useRef)();eo.current=()=>{var e,r,t;if(""===G)handleValueChange(null!=(e=null!=_?_:y)?e:0),ee(_&&null!=(t=null!=(r=parsePrecision(_))?r:parsePrecision(y))?t:"0");else{let e=parsePrecision(clamp(G+x,et,en));handleValueChange(parseFloat(e)),ee(e)}};let ea=(0,n.useRef)();ea.current=()=>{var e,r,t;if(""===G)handleValueChange(null!=(e=null!=_?_:y)?e:0),ee(_&&null!=(t=null!=(r=parsePrecision(_))?r:parsePrecision(y))?t:"0");else{let e=parsePrecision(clamp(G-x,et,en));handleValueChange(parseFloat(e)),ee(e)}},(0,o.k)(W,{increment:eo.current,decrement:ea.current}),(0,n.useEffect)(()=>{"number"==typeof h&&(J(h),ee(parsePrecision(h))),(""===L||void 0===L)&&""===h&&(J(h),ee(""))},[h,D]);let ei=void 0!==C&&void 0!==P,el=(0,n.useRef)(null),es=(0,n.useRef)(0),onStepDone=()=>{el.current&&window.clearTimeout(el.current),el.current=null,es.current=0},onStepHandleChange=e=>{e?eo.current():ea.current(),es.current+=1},onStepLoop=e=>{if(onStepHandleChange(e),ei){let r="number"==typeof P?P:P(es.current);el.current=window.setTimeout(()=>onStepLoop(e),r)}},onStep=(e,r)=>{e.preventDefault(),er.current.focus(),onStepHandleChange(r),ei&&(el.current=window.setTimeout(()=>onStepLoop(r),C))};(0,n.useEffect)(()=>(onStepDone(),onStepDone),[]);let eu=n.createElement("div",{className:Y.rightSection},n.createElement("button",{type:"button",tabIndex:-1,"aria-hidden":!0,disabled:Q>=v,className:q(Y.control,Y.controlUp),onPointerDown:e=>{onStep(e,!0)},onPointerUp:onStepDone,onPointerLeave:onStepDone},n.createElement(Chevron,{size:(0,u.a)({size:F,sizes:w}),direction:"up"})),n.createElement("button",{type:"button",tabIndex:-1,"aria-hidden":!0,disabled:Q<=y,className:q(Y.control,Y.controlDown),onPointerDown:e=>{onStep(e,!1)},onPointerUp:onStepDone,onPointerLeave:onStepDone},n.createElement(Chevron,{size:(0,u.a)({size:F,sizes:w}),direction:"down"})));return n.createElement(f.o,__spreadProps(__spreadValues({},Z),{type:K,variant:O,value:((e="")=>{let r="number"==typeof e?String(e):e;return b&&(r=r.replace(/\./g,b)),B(r)})(X),disabled:m,readOnly:d,ref:(0,a.Y)(er,r),onChange:e=>{let r=e.nativeEvent;if(r.isComposing)return;let t=e.target.value,n=parseNum(t);ee(n),""===t||"-"===t?handleValueChange(""):""===t.trim()||Number.isNaN(n)||handleValueChange(parseFloat(n))},onBlur:e=>{var r;if("number"==typeof h||""===h){ee(parsePrecision(h));return}if(""===e.target.value)ee(""),handleValueChange("");else{let t=e.target.value;(t[0]===`${b}`||"."===t[0])&&(t=`0${t}`);let n=parseNum(t),o=clamp(parseFloat(n),et,en);Number.isNaN(o)?ee(null!=(r=parsePrecision(Q))?r:""):V||(ee(parsePrecision(o)),handleValueChange(parseFloat(parsePrecision(o))))}"function"==typeof R&&R(e)},onKeyDown:e=>{if("function"==typeof N&&N(e),e.repeat&&ei&&("ArrowUp"===e.key||"ArrowDown"===e.key)){e.preventDefault();return}d||("ArrowUp"===e.key?onStep(e,!0):"ArrowDown"===e.key&&onStep(e,!1))},onKeyUp:e=>{"function"==typeof z&&z(e),("ArrowUp"===e.key||"ArrowDown"===e.key)&&onStepDone()},rightSection:H||(m||d||E||"unstyled"===O?null:eu),rightSectionWidth:null!=M?M:`calc(${(0,u.a)({size:F,sizes:p})} + ${(0,l.h)(1)})`,radius:k,max:v,min:y,step:x,size:F,styles:j,classNames:T,inputMode:A||getInputMode(x,D,function(e={getValueInEffect:!0}){let[r,t]=(0,n.useState)(e.getValueInEffect?"undetermined":getOS());return(0,i.Y)(()=>{e.getValueInEffect&&t(getOS)},[]),r}()),__staticSelector:"NumberInput",unstyled:U}))});_.displayName="@mantine/core/NumberInput"},52615:function(e,r,t){t.d(r,{g:function(){return P}});var n=t(67294),o=t(87462),a=t(63366),i=n.useLayoutEffect,useLatest=function(e){var r=n.useRef(e);return i(function(){r.current=e}),r},updateRef=function(e,r){if("function"==typeof e){e(r);return}e.current=r},use_composed_ref_esm=function(e,r){var t=(0,n.useRef)();return(0,n.useCallback)(function(n){e.current=n,t.current&&updateRef(t.current,null),t.current=r,r&&updateRef(r,n)},[r])},l={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},forceHiddenStyles=function(e){Object.keys(l).forEach(function(r){e.style.setProperty(r,l[r],"important")})},s=null,getHeight=function(e,r){var t=e.scrollHeight;return"border-box"===r.sizingStyle.boxSizing?t+r.borderSize:t-r.paddingSize},noop=function(){},u=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],d=!!document.documentElement.currentStyle,getSizingData=function(e){var r=window.getComputedStyle(e);if(null===r)return null;var t=u.reduce(function(e,t){return e[t]=r[t],e},{}),n=t.boxSizing;if(""===n)return null;d&&"border-box"===n&&(t.width=parseFloat(t.width)+parseFloat(t.borderRightWidth)+parseFloat(t.borderLeftWidth)+parseFloat(t.paddingRight)+parseFloat(t.paddingLeft)+"px");var o=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),a=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth);return{sizingStyle:t,paddingSize:o,borderSize:a}},useWindowResizeListener=function(e){var r=useLatest(e);(0,n.useLayoutEffect)(function(){var handler=function(e){r.current(e)};return window.addEventListener("resize",handler),function(){window.removeEventListener("resize",handler)}},[])},p=(0,n.forwardRef)(function(e,r){var t=e.cacheMeasurements,i=e.maxRows,l=e.minRows,u=e.onChange,d=void 0===u?noop:u,p=e.onHeightChange,c=void 0===p?noop:p,f=(0,a.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),m=void 0!==f.value,h=(0,n.useRef)(null),g=use_composed_ref_esm(h,r),b=(0,n.useRef)(0),y=(0,n.useRef)(),resizeTextarea=function(){var e,r,n,o,a,u,d,p,f,m,g,v=h.current,w=t&&y.current?y.current:getSizingData(v);if(w){y.current=w;var S=(e=v.value||v.placeholder||"x",void 0===(r=l)&&(r=1),void 0===(n=i)&&(n=1/0),s||((s=document.createElement("textarea")).setAttribute("tabindex","-1"),s.setAttribute("aria-hidden","true"),forceHiddenStyles(s)),null===s.parentNode&&document.body.appendChild(s),o=w.paddingSize,a=w.borderSize,d=(u=w.sizingStyle).boxSizing,Object.keys(u).forEach(function(e){s.style[e]=u[e]}),forceHiddenStyles(s),s.value=e,p=getHeight(s,w),s.value="x",m=(f=s.scrollHeight-o)*r,"border-box"===d&&(m=m+o+a),p=Math.max(m,p),g=f*n,"border-box"===d&&(g=g+o+a),[p=Math.min(g,p),f]),_=S[0],x=S[1];b.current!==_&&(b.current=_,v.style.setProperty("height",_+"px","important"),c(_,{rowHeight:x}))}};return(0,n.useLayoutEffect)(resizeTextarea),useWindowResizeListener(resizeTextarea),(0,n.createElement)("textarea",(0,o.Z)({},f,{onChange:function(e){m||resizeTextarea(),d(e)},ref:g}))}),c=t(83051),f=t(3241),m=(0,t(56817).k)(e=>({input:{paddingTop:e.spacing.xs,paddingBottom:e.spacing.xs}})),h=t(12756),g=t(94151),b=Object.defineProperty,y=Object.defineProperties,v=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))S.call(r,t)&&__defNormalProp(e,t,r[t]);if(w)for(var t of w(r))_.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>y(e,v(r)),__objRest=(e,r)=>{var t={};for(var n in e)S.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&w)for(var n of w(e))0>r.indexOf(n)&&_.call(e,n)&&(t[n]=e[n]);return t};let x={autosize:!1,size:"sm",__staticSelector:"Textarea"},P=(0,n.forwardRef)((e,r)=>{let t=(0,f.N4)("Textarea",x,e),{autosize:o,maxRows:a,minRows:i,label:l,error:s,description:u,id:d,className:b,required:y,style:v,wrapperProps:w,classNames:S,styles:_,size:P,__staticSelector:C,sx:R,errorProps:N,descriptionProps:z,labelProps:E,inputWrapperOrder:k,inputContainer:O,unstyled:D,withAsterisk:I,variant:L}=t,V=__objRest(t,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled","withAsterisk","variant"]),W=(0,c.M)(d),{classes:T,cx:j}=m(),{systemStyles:F,rest:H}=(0,h.x)(V),M=__spreadValues({required:y,ref:r,error:s,id:W,classNames:__spreadProps(__spreadValues({},S),{input:j(T.input,null==S?void 0:S.input)}),styles:_,__staticSelector:C,size:P,multiline:!0,unstyled:D,variant:L},H);return n.createElement(g.I.Wrapper,__spreadValues(__spreadValues({label:l,error:s,id:W,description:u,required:y,style:v,className:b,classNames:S,styles:_,size:P,__staticSelector:C,sx:R,errorProps:N,labelProps:E,descriptionProps:z,inputContainer:O,inputWrapperOrder:k,unstyled:D,withAsterisk:I,variant:L},F),w),o?n.createElement(g.I,__spreadProps(__spreadValues({},M),{component:p,maxRows:a,minRows:i})):n.createElement(g.I,__spreadProps(__spreadValues({},M),{component:"textarea",rows:i})))});P.displayName="@mantine/core/Textarea"}}]);