"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{93284:function(e,o,r){r.d(o,{O:function(){return m}});var t=r(67294),n=r(3241),a=r(24241),l=(0,r(56817).k)(e=>({root:{display:"flex",alignItems:"center"},breadcrumb:{lineHeight:1,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"},separator:{marginLeft:e.spacing.xs,marginRight:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"}})),i=r(95117),s=r(64523),p=Object.defineProperty,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,o,r)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,__spreadValues=(e,o)=>{for(var r in o||(o={}))d.call(o,r)&&__defNormalProp(e,r,o[r]);if(c)for(var r of c(o))u.call(o,r)&&__defNormalProp(e,r,o[r]);return e},__objRest=(e,o)=>{var r={};for(var t in e)d.call(e,t)&&0>o.indexOf(t)&&(r[t]=e[t]);if(null!=e&&c)for(var t of c(e))0>o.indexOf(t)&&u.call(e,t)&&(r[t]=e[t]);return r};let f={separator:"/"},m=(0,t.forwardRef)((e,o)=>{let r=(0,n.N4)("Breadcrumbs",f,e),{className:p,children:c,separator:d,classNames:u,styles:m,unstyled:b,variant:g}=r,y=__objRest(r,["className","children","separator","classNames","styles","unstyled","variant"]),{classes:v,cx:h}=l(null,{classNames:u,styles:m,unstyled:b,name:"Breadcrumbs",variant:g}),_=t.Children.toArray(c).reduce((e,o,r,n)=>{var l;let s=(0,a.k)(o)?t.cloneElement(o,{className:h(v.breadcrumb,null==(l=o.props)?void 0:l.className),key:r}):t.createElement("div",{className:v.breadcrumb,key:r},o);return e.push(s),r!==n.length-1&&e.push(t.createElement(i.x,{size:"sm",className:v.separator,key:`separator-${r}`},d)),e},[]);return t.createElement(s.x,__spreadValues({className:h(v.root,p),ref:o},y),_)});m.displayName="@mantine/core/Breadcrumbs"},55652:function(e,o,r){r.d(o,{u:function(){return A}});var t=r(67294),n=r(24241),a=r(80665),l=r(3594),i=r(3241),s=r(94993);let p=(0,t.createContext)(!1),c=p.Provider,useTooltipGroupContext=()=>(0,t.useContext)(p);function TooltipGroup({children:e,openDelay:o=0,closeDelay:r=0}){return t.createElement(c,{value:!0},t.createElement(s.e0,{delay:{open:o,close:r}},e))}TooltipGroup.displayName="@mantine/core/TooltipGroup";var d=r(56817),u=Object.defineProperty,f=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,o,r)=>o in e?u(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,__spreadValues=(e,o)=>{for(var r in o||(o={}))g.call(o,r)&&__defNormalProp(e,r,o[r]);if(b)for(var r of b(o))y.call(o,r)&&__defNormalProp(e,r,o[r]);return e},__spreadProps=(e,o)=>f(e,m(o)),v=(0,d.k)((e,{color:o,radius:r,width:t,multiline:n})=>({tooltip:__spreadProps(__spreadValues(__spreadValues({},e.fn.fontStyles()),function(e,o){if(!o)return{backgroundColor:"dark"===e.colorScheme?e.colors.gray[2]:e.colors.gray[9],color:"dark"===e.colorScheme?e.black:e.white};let r=e.fn.variant({variant:"filled",color:o,primaryFallback:!1});return{backgroundColor:r.background,color:r.color}}(e,o)),{lineHeight:e.lineHeight,fontSize:e.fontSizes.sm,borderRadius:e.fn.radius(r),padding:`calc(${e.spacing.xs} / 2) ${e.spacing.xs}`,position:"absolute",whiteSpace:n?"unset":"nowrap",pointerEvents:"none",width:t}),arrow:{backgroundColor:"inherit",border:0,zIndex:1}}));let h={children:"Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"};var _=r(85983),w=r(68365),P=r(83143),O=r(64523),T=Object.defineProperty,N=Object.defineProperties,E=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,TooltipFloating_defNormalProp=(e,o,r)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,TooltipFloating_spreadValues=(e,o)=>{for(var r in o||(o={}))x.call(o,r)&&TooltipFloating_defNormalProp(e,r,o[r]);if(k)for(var r of k(o))j.call(o,r)&&TooltipFloating_defNormalProp(e,r,o[r]);return e},TooltipFloating_spreadProps=(e,o)=>N(e,E(o)),__objRest=(e,o)=>{var r={};for(var t in e)x.call(e,t)&&0>o.indexOf(t)&&(r[t]=e[t]);if(null!=e&&k)for(var t of k(e))0>o.indexOf(t)&&j.call(e,t)&&(r[t]=e[t]);return r};let F={refProp:"ref",withinPortal:!0,offset:10,position:"right",zIndex:(0,l.w)("popover")};function TooltipFloating(e){var o;let r=(0,i.N4)("TooltipFloating",F,e),{children:l,refProp:p,withinPortal:c,style:d,className:u,classNames:f,styles:m,unstyled:b,radius:g,color:y,label:T,offset:N,position:E,multiline:k,width:x,zIndex:j,disabled:C,variant:R}=r,M=__objRest(r,["children","refProp","withinPortal","style","className","classNames","styles","unstyled","radius","color","label","offset","position","multiline","width","zIndex","disabled","variant"]),{handleMouseMove:S,x:V,y:D,opened:I,boundaryRef:z,floating:L,setOpened:Y}=function({offset:e,position:o}){let[r,n]=(0,t.useState)(!1),a=(0,t.useRef)(),{x:l,y:i,reference:p,floating:c,refs:d,update:u,placement:f}=(0,s.YF)({placement:o,middleware:[(0,_.uY)({crossAxis:!0,padding:5,rootBoundary:"document"})]}),m=f.includes("right")?e:o.includes("left")?-1*e:0,b=f.includes("bottom")?e:o.includes("top")?-1*e:0,g=(0,t.useCallback)(({clientX:e,clientY:o})=>{p({getBoundingClientRect:()=>({width:0,height:0,x:e,y:o,left:e+m,top:o+b,right:e,bottom:o})})},[p]);return(0,t.useEffect)(()=>{if(d.floating.current){let e=a.current;e.addEventListener("mousemove",g);let o=(0,w.Kx)(d.floating.current);return o.forEach(e=>{e.addEventListener("scroll",u)}),()=>{e.removeEventListener("mousemove",g),o.forEach(e=>{e.removeEventListener("scroll",u)})}}},[p,d.floating.current,u,g,r]),{handleMouseMove:g,x:l,y:i,opened:r,setOpened:n,boundaryRef:a,floating:c}}({offset:N,position:E}),{classes:G,cx:B}=v({radius:g,color:y,multiline:k,width:x},{name:"TooltipFloating",classNames:f,styles:m,unstyled:b,variant:R});if(!(0,n.k)(l))throw Error(h.children);let H=(0,a.Y)(z,l.ref);return t.createElement(t.Fragment,null,t.createElement(P.q,{withinPortal:c},t.createElement(O.x,TooltipFloating_spreadProps(TooltipFloating_spreadValues({},M),{ref:L,className:B(G.tooltip,u),style:TooltipFloating_spreadProps(TooltipFloating_spreadValues({},d),{zIndex:j,display:!C&&I?"block":"none",top:null!=D?D:"",left:null!=(o=Math.round(V))?o:""})}),T)),(0,t.cloneElement)(l,TooltipFloating_spreadProps(TooltipFloating_spreadValues({},l.props),{[p]:H,onMouseEnter:e=>{var o,r;null==(r=(o=l.props).onMouseEnter)||r.call(o,e),S(e),Y(!0)},onMouseLeave:e=>{var o,r;null==(r=(o=l.props).onMouseLeave)||r.call(o,e),Y(!1)}})))}TooltipFloating.displayName="@mantine/core/TooltipFloating";var C=r(58463),R=r(83051),M=r(37048),S=r(30212),V=r(14870),D=r(58036),I=r(63468),z=Object.defineProperty,L=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,Tooltip_defNormalProp=(e,o,r)=>o in e?z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,Tooltip_spreadValues=(e,o)=>{for(var r in o||(o={}))B.call(o,r)&&Tooltip_defNormalProp(e,r,o[r]);if(G)for(var r of G(o))H.call(o,r)&&Tooltip_defNormalProp(e,r,o[r]);return e},Tooltip_spreadProps=(e,o)=>L(e,Y(o)),Tooltip_objRest=(e,o)=>{var r={};for(var t in e)B.call(e,t)&&0>o.indexOf(t)&&(r[t]=e[t]);if(null!=e&&G)for(var t of G(e))0>o.indexOf(t)&&H.call(e,t)&&(r[t]=e[t]);return r};let Z={position:"top",refProp:"ref",withinPortal:!1,inline:!1,arrowSize:4,arrowOffset:5,arrowRadius:0,arrowPosition:"side",offset:5,transitionProps:{duration:100,transition:"fade"},width:"auto",events:{hover:!0,focus:!1,touch:!1},zIndex:(0,l.w)("popover"),positionDependencies:[]},q=(0,t.forwardRef)((e,o)=>{var r;let l=(0,t.useRef)(null),p=(0,i.N4)("Tooltip",Z,e),{children:c,position:d,refProp:u,label:f,openDelay:m,closeDelay:b,onPositionChange:g,opened:y,withinPortal:w,radius:T,color:N,classNames:E,styles:k,unstyled:x,style:j,className:F,withArrow:z,arrowSize:L,arrowOffset:Y,arrowRadius:G,arrowPosition:B,offset:H,transitionProps:q,multiline:A,width:K,events:Q,zIndex:X,disabled:$,positionDependencies:W,onClick:J,onMouseEnter:U,onMouseLeave:ee,inline:eo,variant:er,keepMounted:et}=p,en=Tooltip_objRest(p,["children","position","refProp","label","openDelay","closeDelay","onPositionChange","opened","withinPortal","radius","color","classNames","styles","unstyled","style","className","withArrow","arrowSize","arrowOffset","arrowRadius","arrowPosition","offset","transitionProps","multiline","width","events","zIndex","disabled","positionDependencies","onClick","onMouseEnter","onMouseLeave","inline","variant","keepMounted"]),{classes:ea,cx:el,theme:ei}=v({radius:T,color:N,width:K,multiline:A},{name:"Tooltip",classNames:E,styles:k,unstyled:x,variant:er}),es=function(e){let[o,r]=(0,t.useState)(!1),n="boolean"==typeof e.opened,a=n?e.opened:o,l=useTooltipGroupContext(),i=(0,R.M)(),{delay:p,currentId:c,setCurrentId:d}=(0,s.tj)(),u=(0,t.useCallback)(e=>{r(e),e&&d(i)},[d,i]),{x:f,y:m,reference:b,floating:g,context:y,refs:v,update:h,placement:w,middlewareData:{arrow:{x:P,y:O}={}}}=(0,s.YF)({placement:e.position,open:a,onOpenChange:u,middleware:[(0,_.cv)(e.offset),(0,_.uY)({padding:8}),(0,_.RR)(),(0,C.x7)({element:e.arrowRef,padding:e.arrowOffset}),...e.inline?[(0,_.Qo)()]:[]]}),{getReferenceProps:T,getFloatingProps:N}=(0,s.NI)([(0,s.XI)(y,{enabled:e.events.hover,delay:l?p:{open:e.openDelay,close:e.closeDelay},mouseOnly:!e.events.touch}),(0,s.KK)(y,{enabled:e.events.focus,keyboardOnly:!0}),(0,s.qs)(y,{role:"tooltip"}),(0,s.bQ)(y,{enabled:(e.opened,!1)}),(0,s.Qu)(y,{id:i})]);(0,S.L)({opened:a,positionDependencies:e.positionDependencies,floating:{refs:v,update:h}}),(0,M.l)(()=>{var o;null==(o=e.onPositionChange)||o.call(e,w)},[w]);let E=a&&c&&c!==i;return{x:f,y:m,arrowX:P,arrowY:O,reference:b,floating:g,getFloatingProps:N,getReferenceProps:T,isGroupPhase:E,opened:a,placement:w}}({position:(0,V._)(ei.dir,d),closeDelay:b,openDelay:m,onPositionChange:g,opened:y,events:Q,arrowRef:l,arrowOffset:Y,offset:H+(z?L/2:0),positionDependencies:[...W,c],inline:eo});if(!(0,n.k)(c))throw Error(h.children);let ep=(0,a.Y)(es.reference,c.ref,o);return t.createElement(t.Fragment,null,t.createElement(P.q,{withinPortal:w},t.createElement(D.u,Tooltip_spreadProps(Tooltip_spreadValues({keepMounted:et,mounted:!$&&es.opened},q),{transition:q.transition||"fade",duration:es.isGroupPhase?10:null!=(r=q.duration)?r:100}),e=>{var o,r;return t.createElement(O.x,Tooltip_spreadValues(Tooltip_spreadValues({},en),es.getFloatingProps({ref:es.floating,className:ea.tooltip,style:Tooltip_spreadProps(Tooltip_spreadValues(Tooltip_spreadValues({},j),e),{zIndex:X,top:null!=(o=es.y)?o:0,left:null!=(r=es.x)?r:0})})),f,t.createElement(I.Y,{ref:l,arrowX:es.arrowX,arrowY:es.arrowY,visible:z,withBorder:!1,position:es.placement,arrowSize:L,arrowOffset:Y,arrowRadius:G,arrowPosition:B,className:ea.arrow}))})),(0,t.cloneElement)(c,es.getReferenceProps(Tooltip_spreadValues({onClick:J,onMouseEnter:U,onMouseLeave:ee,onMouseMove:e.onMouseMove,onPointerDown:e.onPointerDown,onPointerEnter:e.onPointerEnter,[u]:ep,className:el(F,c.props.className)},c.props))))});q.Group=TooltipGroup,q.Floating=TooltipFloating,q.displayName="@mantine/core/Tooltip";let A=q},88198:function(e,o,r){r.d(o,{Z:function(){return t}});var t=(0,r(30853).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},93625:function(e,o,r){r.d(o,{Z:function(){return t}});var t=(0,r(30853).Z)("copy","IconCopy",[["path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2",key:"svg-1"}]])}}]);