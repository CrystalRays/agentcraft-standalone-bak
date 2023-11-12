(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{93284:function(e,t,r){"use strict";r.d(t,{O:function(){return h}});var a=r(67294),o=r(3241),n=r(24241),i=(0,r(56817).k)(e=>({root:{display:"flex",alignItems:"center"},breadcrumb:{lineHeight:1,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"},separator:{marginLeft:e.spacing.xs,marginRight:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"}})),l=r(95117),s=r(64523),d=Object.defineProperty,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&__defNormalProp(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__objRest=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))0>t.indexOf(a)&&u.call(e,a)&&(r[a]=e[a]);return r};let f={separator:"/"},h=(0,a.forwardRef)((e,t)=>{let r=(0,o.N4)("Breadcrumbs",f,e),{className:d,children:c,separator:p,classNames:u,styles:h,unstyled:g,variant:m}=r,b=__objRest(r,["className","children","separator","classNames","styles","unstyled","variant"]),{classes:y,cx:x}=i(null,{classNames:u,styles:h,unstyled:g,name:"Breadcrumbs",variant:m}),_=a.Children.toArray(c).reduce((e,t,r,o)=>{var i;let s=(0,n.k)(t)?a.cloneElement(t,{className:x(y.breadcrumb,null==(i=t.props)?void 0:i.className),key:r}):a.createElement("div",{className:y.breadcrumb,key:r},t);return e.push(s),r!==o.length-1&&e.push(a.createElement(l.x,{size:"sm",className:y.separator,key:`separator-${r}`},p)),e},[]);return a.createElement(s.x,__spreadValues({className:x(y.root,d),ref:t},b),_)});h.displayName="@mantine/core/Breadcrumbs"},95033:function(e,t,r){"use strict";r.d(t,{y:function(){return j}});var a=r(67294),o=r(3241),n=r(48427),i=r(95117),l=(0,r(56817).k)((e,{color:t})=>({root:{backgroundColor:e.fn.themeColor(t,"dark"===e.colorScheme?5:2),color:"dark"===e.colorScheme?e.colors.dark[9]:"inherit"}})),s=r(64523),d=Object.defineProperty,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&__defNormalProp(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__objRest=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))0>t.indexOf(a)&&u.call(e,a)&&(r[a]=e[a]);return r};let f={color:"yellow"},h=(0,a.forwardRef)((e,t)=>{let r=(0,o.N4)("Mark",f,e),{color:n,className:i,unstyled:d,variant:c}=r,p=__objRest(r,["color","className","unstyled","variant"]),{classes:u,cx:h}=l({color:n},{unstyled:d,name:"Mark",variant:c});return a.createElement(s.x,__spreadValues({component:"mark",ref:t,className:h(u.root,i)},p))});function escapeRegex(e){return e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&")}h.displayName="@mantine/core/Mark";var g=Object.defineProperty,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,Highlight_defNormalProp=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Highlight_spreadValues=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&Highlight_defNormalProp(e,r,t[r]);if(m)for(var r of m(t))y.call(t,r)&&Highlight_defNormalProp(e,r,t[r]);return e},Highlight_objRest=(e,t)=>{var r={};for(var a in e)b.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&m)for(var a of m(e))0>t.indexOf(a)&&y.call(e,a)&&(r[a]=e[a]);return r};let x={highlightColor:"yellow"},_=(0,a.forwardRef)((e,t)=>{let r=(0,o.N4)("Highlight",x,e),{children:n,highlight:l,highlightColor:s,highlightStyles:d,unstyled:c}=r,p=Highlight_objRest(r,["children","highlight","highlightColor","highlightStyles","unstyled"]),u=function(e,t){if(null==t)return[{chunk:e,highlighted:!1}];let r=Array.isArray(t)?t.map(escapeRegex):escapeRegex(t),a=Array.isArray(r)?r.filter(e=>e.trim().length>0).length>0:""!==r.trim();if(!a)return[{chunk:e,highlighted:!1}];let o="string"==typeof r?r.trim():r.filter(e=>0!==e.trim().length).map(e=>e.trim()).join("|"),n=RegExp(`(${o})`,"gi"),i=e.split(n).map(e=>({chunk:e,highlighted:n.test(e)})).filter(({chunk:e})=>e);return i}(n,l);return a.createElement(i.x,Highlight_spreadValues({unstyled:c,ref:t,__staticSelector:"Highlight"},p),u.map(({chunk:e,highlighted:t},r)=>t?a.createElement(h,{unstyled:c,key:r,color:s,sx:d,"data-highlight":e},e):a.createElement("span",{key:r},e)))});_.displayName="@mantine/core/Highlight";let j=(0,n.F)(_)},95078:function(e,t,r){"use strict";r.d(t,{i:function(){return w}});var a=r(67294),o=r(3241),n=r(56817),i=r(96768),l=r(14258),s=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&__defNormalProp(e,r,t[r]);if(p)for(var r of p(t))f.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>d(e,c(t)),h=(0,n.k)((e,{captionSide:t,horizontalSpacing:r,verticalSpacing:a,fontSize:o,withBorder:n,withColumnBorders:s})=>{let d=`${(0,i.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`;return{root:__spreadProps(__spreadValues({},e.fn.fontStyles()),{width:"100%",borderCollapse:"collapse",captionSide:t,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,border:n?d:void 0,"& caption":{marginTop:"top"===t?0:e.spacing.xs,marginBottom:"bottom"===t?0:e.spacing.xs,fontSize:e.fontSizes.sm,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},"& thead tr th, & tfoot tr th, & tbody tr th":{textAlign:"left",fontWeight:"bold",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:(0,l.a)({size:o,sizes:e.fontSizes}),padding:`${(0,l.a)({size:a,sizes:e.spacing})} ${(0,l.a)({size:r,sizes:e.spacing})}`},"& thead tr th":{borderBottom:d},"& tfoot tr th, & tbody tr th":{borderTop:d},"& tbody tr td":{padding:`${(0,l.a)({size:a,sizes:e.spacing})} ${(0,l.a)({size:r,sizes:e.spacing})}`,borderTop:d,fontSize:(0,l.a)({size:o,sizes:e.fontSizes})},"& tbody tr:first-of-type td, & tbody tr:first-of-type th":{borderTop:"none"},"& thead th, & tbody td":{borderRight:s?d:"none","&:last-of-type":{borderRight:"none",borderLeft:s?d:"none"}},"& tbody tr th":{borderRight:s?d:"none"},"&[data-striped] tbody tr:nth-of-type(odd)":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},"&[data-hover] tbody tr":e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1]})})}}),g=r(64523),m=Object.defineProperty,b=Object.defineProperties,y=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,Table_defNormalProp=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Table_spreadValues=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&Table_defNormalProp(e,r,t[r]);if(x)for(var r of x(t))j.call(t,r)&&Table_defNormalProp(e,r,t[r]);return e},Table_spreadProps=(e,t)=>b(e,y(t)),__objRest=(e,t)=>{var r={};for(var a in e)_.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&x)for(var a of x(e))0>t.indexOf(a)&&j.call(e,a)&&(r[a]=e[a]);return r};let v={striped:!1,highlightOnHover:!1,captionSide:"top",horizontalSpacing:"xs",fontSize:"sm",verticalSpacing:7,withBorder:!1,withColumnBorders:!1},w=(0,a.forwardRef)((e,t)=>{let r=(0,o.N4)("Table",v,e),{className:n,children:i,striped:l,highlightOnHover:s,captionSide:d,horizontalSpacing:c,verticalSpacing:p,fontSize:u,unstyled:f,withBorder:m,withColumnBorders:b,variant:y}=r,x=__objRest(r,["className","children","striped","highlightOnHover","captionSide","horizontalSpacing","verticalSpacing","fontSize","unstyled","withBorder","withColumnBorders","variant"]),{classes:_,cx:j}=h({captionSide:d,verticalSpacing:p,horizontalSpacing:c,fontSize:u,withBorder:m,withColumnBorders:b},{unstyled:f,name:"Table",variant:y});return a.createElement(g.x,Table_spreadProps(Table_spreadValues({},x),{component:"table",ref:t,className:j(_.root,n),"data-striped":l||void 0,"data-hover":s||void 0}),i)});w.displayName="@mantine/core/Table"},52615:function(e,t,r){"use strict";r.d(t,{g:function(){return S}});var a=r(67294),o=r(87462),n=r(63366),i=a.useLayoutEffect,useLatest=function(e){var t=a.useRef(e);return i(function(){t.current=e}),t},updateRef=function(e,t){if("function"==typeof e){e(t);return}e.current=t},use_composed_ref_esm=function(e,t){var r=(0,a.useRef)();return(0,a.useCallback)(function(a){e.current=a,r.current&&updateRef(r.current,null),r.current=t,t&&updateRef(t,a)},[t])},l={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},forceHiddenStyles=function(e){Object.keys(l).forEach(function(t){e.style.setProperty(t,l[t],"important")})},s=null,getHeight=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},noop=function(){},d=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],c=!!document.documentElement.currentStyle,getSizingData=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=d.reduce(function(e,r){return e[r]=t[r],e},{}),a=r.boxSizing;if(""===a)return null;c&&"border-box"===a&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var o=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),n=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:o,borderSize:n}},useWindowResizeListener=function(e){var t=useLatest(e);(0,a.useLayoutEffect)(function(){var handler=function(e){t.current(e)};return window.addEventListener("resize",handler),function(){window.removeEventListener("resize",handler)}},[])},p=(0,a.forwardRef)(function(e,t){var r=e.cacheMeasurements,i=e.maxRows,l=e.minRows,d=e.onChange,c=void 0===d?noop:d,p=e.onHeightChange,u=void 0===p?noop:p,f=(0,n.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),h=void 0!==f.value,g=(0,a.useRef)(null),m=use_composed_ref_esm(g,t),b=(0,a.useRef)(0),y=(0,a.useRef)(),resizeTextarea=function(){var e,t,a,o,n,d,c,p,f,h,m,x=g.current,_=r&&y.current?y.current:getSizingData(x);if(_){y.current=_;var j=(e=x.value||x.placeholder||"x",void 0===(t=l)&&(t=1),void 0===(a=i)&&(a=1/0),s||((s=document.createElement("textarea")).setAttribute("tabindex","-1"),s.setAttribute("aria-hidden","true"),forceHiddenStyles(s)),null===s.parentNode&&document.body.appendChild(s),o=_.paddingSize,n=_.borderSize,c=(d=_.sizingStyle).boxSizing,Object.keys(d).forEach(function(e){s.style[e]=d[e]}),forceHiddenStyles(s),s.value=e,p=getHeight(s,_),s.value="x",h=(f=s.scrollHeight-o)*t,"border-box"===c&&(h=h+o+n),p=Math.max(h,p),m=f*a,"border-box"===c&&(m=m+o+n),[p=Math.min(m,p),f]),v=j[0],w=j[1];b.current!==v&&(b.current=v,x.style.setProperty("height",v+"px","important"),u(v,{rowHeight:w}))}};return(0,a.useLayoutEffect)(resizeTextarea),useWindowResizeListener(resizeTextarea),(0,a.createElement)("textarea",(0,o.Z)({},f,{onChange:function(e){h||resizeTextarea(),c(e)},ref:m}))}),u=r(83051),f=r(3241),h=(0,r(56817).k)(e=>({input:{paddingTop:e.spacing.xs,paddingBottom:e.spacing.xs}})),g=r(12756),m=r(94151),b=Object.defineProperty,y=Object.defineProperties,x=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&__defNormalProp(e,r,t[r]);if(_)for(var r of _(t))v.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>y(e,x(t)),__objRest=(e,t)=>{var r={};for(var a in e)j.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&_)for(var a of _(e))0>t.indexOf(a)&&v.call(e,a)&&(r[a]=e[a]);return r};let w={autosize:!1,size:"sm",__staticSelector:"Textarea"},S=(0,a.forwardRef)((e,t)=>{let r=(0,f.N4)("Textarea",w,e),{autosize:o,maxRows:n,minRows:i,label:l,error:s,description:d,id:c,className:b,required:y,style:x,wrapperProps:_,classNames:j,styles:v,size:S,__staticSelector:O,sx:P,errorProps:z,descriptionProps:N,labelProps:k,inputWrapperOrder:E,inputContainer:R,unstyled:C,withAsterisk:T,variant:D}=r,H=__objRest(r,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled","withAsterisk","variant"]),I=(0,u.M)(c),{classes:L,cx:V}=h(),{systemStyles:W,rest:A}=(0,g.x)(H),B=__spreadValues({required:y,ref:t,error:s,id:I,classNames:__spreadProps(__spreadValues({},j),{input:V(L.input,null==j?void 0:j.input)}),styles:v,__staticSelector:O,size:S,multiline:!0,unstyled:C,variant:D},A);return a.createElement(m.I.Wrapper,__spreadValues(__spreadValues({label:l,error:s,id:I,description:d,required:y,style:x,className:b,classNames:j,styles:v,size:S,__staticSelector:O,sx:P,errorProps:z,labelProps:k,descriptionProps:N,inputContainer:R,inputWrapperOrder:E,unstyled:C,withAsterisk:T,variant:D},W),_),o?a.createElement(m.I,__spreadProps(__spreadValues({},B),{component:p,maxRows:n,minRows:i})):a.createElement(m.I,__spreadProps(__spreadValues({},B),{component:"textarea",rows:i})))});S.displayName="@mantine/core/Textarea"},45460:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dataset",function(){return r(91251)}])},2394:function(e,t,r){"use strict";r.d(t,{Z:function(){return FeatureDescription}});var a=r(85893),o=r(92716),n=r(95117),i=r(64523),l=r(69876),s=r(19236),d=r(91759);function InfoDetail(e){let{detail:t,title:r}=e,[i,{open:l,close:s}]=(0,d.q)(!1);return(0,a.jsx)(a.Fragment,{children:t?(0,a.jsxs)("div",{children:[(0,a.jsx)(o.d,{opened:i,onClose:s,title:r,children:(0,a.jsx)(n.x,{children:t})}),(0,a.jsx)(n.x,{onClick:()=>l(),children:"信息"})]}):null})}function FeatureDescription(e){let{title:t,description:r,detail:o,mt:d,mb:c}=e;return(0,a.jsxs)(i.x,{mt:d||24,mb:c||24,children:[(0,a.jsxs)(l.k,{mih:20,gap:"md",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:[(0,a.jsx)(s.D,{order:2,children:t}),(0,a.jsx)(InfoDetail,{title:t,detail:o})]}),r?(0,a.jsx)(n.x,{lineClamp:4,children:r}):null]})}},91251:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return IndexPage}});var a=r(85893),o=r(67294),n=r(41664),i=r.n(n),l=r(94491),s=r(64523),d=r(80061),c=r(28855),p=r(52615),u=r(67841),f=r(95117),h=r(95033),g=r(49737),m=r(95078),b=r(54685),y=r(93284),x=r(77248),_=r(73344),j=r(61494),v=r(13962),w=r(2394),S=r(25288),O=r(86105);function Add(){let e=(0,j.s6)().open,t=(0,j.s6)().setOpen,r=(0,j.s6)().setLoading,o=(0,x.c)({initialValues:{name:"",dataset_type:"".concat(v.I.DOCUMENT),description:""},validate:{name:e=>e?null:"数据集名必填"}});return(0,a.jsxs)(l.u,{opened:e,onClose:()=>{t(!1)},title:"创建数据集",centered:!0,children:[(0,a.jsxs)(s.x,{maw:O.hE,mx:"auto",children:[(0,a.jsx)(d.o,{withAsterisk:!0,label:"名称",placeholder:"输入数据集名称",...o.getInputProps("name")}),(0,a.jsx)(c.Ph,{withAsterisk:!0,label:"数据集类型",placeholder:"请选择数据集类型",data:[{value:"".concat(v.I.QUESTION),label:"精准类型（QA）"},{value:"".concat(v.I.DOCUMENT),label:"模糊类型（文档）"}],...o.getInputProps("dataset_type")}),(0,a.jsx)(p.g,{label:"描述",placeholder:"输入数据集描述",...o.getInputProps("description")})]}),(0,a.jsx)(s.x,{maw:O.hE,mx:"auto",pt:12,style:{textAlign:"right"},children:(0,a.jsx)(u.z,{onClick:async()=>{if(o.validate(),o.isValid()){r(!0);let e=(null==o?void 0:o.values)||{};await (0,j.cv)(e),await (0,j.ln)(),t(!1),r(!1)}},children:"确认"})})]})}function List(){let e=(0,j.s6)().dataSetList,t=(0,j.s6)().loading,r=(0,j.s6)().setLoading,removeDataDataSet=e=>{let{id:t,name:o}=e;_.qk.openConfirmModal({title:"删除数据集",centered:!0,children:(0,a.jsx)(f.x,{size:"sm",children:(0,a.jsx)(h.y,{highlight:o,children:"确定删除 ".concat(o,"?")})}),labels:{confirm:"确定",cancel:"取消"},onCancel:()=>console.log("Cancel"),confirmProps:{color:"red"},onConfirm:async()=>{r(!0),await (0,j.uo)(t),await (0,j.ln)(),r(!1)}})},n=e.map(e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.id}),(0,a.jsx)("td",{children:(0,a.jsx)(i(),{href:"/dataset/".concat(e.id,"/datasource?dataSetType=").concat(e.dataset_type),children:e.name})}),(0,a.jsx)("td",{children:e.dataset_type===v.I.DOCUMENT?"文档数据集":"问答数据集"}),(0,a.jsx)("td",{children:e.description}),(0,a.jsx)("td",{children:(0,S.o0)(e.created)}),(0,a.jsx)("td",{children:(0,S.o0)(e.modified)}),(0,a.jsxs)("td",{children:[" ",(0,a.jsx)(u.z,{variant:"filled",color:"red",size:"xs",onClick:()=>removeDataDataSet(e),children:"删除"})]})]},e.id)),getDataSet=async()=>{r(!0),await (0,j.ln)(),r(!1)};return(0,o.useEffect)(()=>{getDataSet()},[]),(0,a.jsxs)(s.x,{pos:"relative",children:[(0,a.jsx)(g.f,{visible:t,overlayOpacity:.3}),(0,a.jsxs)(m.i,{striped:!0,withBorder:!0,withColumnBorders:!0,mt:12,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"编号"}),(0,a.jsx)("th",{children:"名称"}),(0,a.jsx)("th",{children:"类型"}),(0,a.jsx)("th",{children:"描述"}),(0,a.jsx)("th",{children:"创建时间"}),(0,a.jsx)("th",{children:"修改时间"}),(0,a.jsx)("th",{children:"操作"})]})}),(0,a.jsx)("tbody",{children:n})]})]})}function DataSetPage(){let e=(0,j.s6)().setOpen,t=[{title:"AgentCraft",href:"#"},{title:"数据集",href:"/dataset"}].map((e,t)=>(0,a.jsx)(b.e,{href:e.href,children:e.title},t));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.O,{children:t}),(0,a.jsx)(w.Z,{title:"数据集",description:"AgentCraft中的数据集是对业务数据的高层抽象，您可以构建多个业务场景的数据集，并将他们进行知识库的关联"}),(0,a.jsx)(s.x,{mt:12,children:(0,a.jsx)(u.z,{onClick:()=>e(!0),children:"新建数据集"})}),(0,a.jsx)(Add,{}),(0,a.jsx)(List,{})]})}function IndexPage(){return(0,a.jsx)(DataSetPage,{})}},61494:function(e,t,r){"use strict";r.d(t,{cv:function(){return addDataSet},ln:function(){return getDataSetList},s6:function(){return i},uo:function(){return deleteDataSet}});var a=r(64529),o=r(782),n=r(23824);let i=(0,a.Ue)()((0,o.mW)(e=>({dataSetList:[],open:!1,loading:!1,updateDataSetList:t=>e(e=>({dataSetList:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t}))})));async function getDataSetList(){let e=i.getState(),t=e.updateDataSetList,r=await (0,n.W)("/api/dataset/list"),a=r.data;a&&t(a)}async function deleteDataSet(e){return await (0,n.W)("/api/dataset/delete?id=".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}async function addDataSet(e){return await (0,n.W)("/api/dataset/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}},13962:function(e,t,r){"use strict";var a,o;r.d(t,{I:function(){return a}}),(o=a||(a={}))[o.QUESTION=1]="QUESTION",o[o.DOCUMENT=2]="DOCUMENT"}},function(e){e.O(0,[871,664,855,774,888,179],function(){return e(e.s=45460)}),_N_E=e.O()}]);