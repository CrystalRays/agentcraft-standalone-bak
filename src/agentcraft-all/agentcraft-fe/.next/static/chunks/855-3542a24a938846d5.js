"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{66879:function(e,r,t){t.d(r,{A:function(){return s}});var o=t(67294),n=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&__defNormalProp(e,t,r[t]);if(a)for(var t of a(r))i.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__objRest=(e,r)=>{var t={};for(var o in e)l.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&a)for(var o of a(e))0>r.indexOf(o)&&i.call(e,o)&&(t[o]=e[o]);return t};let s=(0,o.forwardRef)((e,r)=>{var{label:t,value:n}=e,a=__objRest(e,["label","value"]);return o.createElement("div",__spreadValues({ref:r},a),t||n)});s.displayName="@mantine/core/DefaultItem"},28855:function(e,r,t){t.d(r,{Ph:function(){return D}});var o=t(67294),n=t(32819),a=t(15851),l=t(37048),i=t(80665),s=t(3594),c=t(65053),p=t(75851),d=t(66879),u=t(73498),f=t(97176),m=t(3409),v=(0,t(56817).k)(()=>({input:{"&:not(:disabled)":{cursor:"pointer","&::selection":{backgroundColor:"transparent"}}}})),h=t(66261),g=t(94151),b=Object.defineProperty,_=Object.defineProperties,w=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))y.call(r,t)&&__defNormalProp(e,t,r[t]);if(P)for(var t of P(r))O.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>_(e,w(r)),__objRest=(e,r)=>{var t={};for(var o in e)y.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&P)for(var o of P(e))0>r.indexOf(o)&&O.call(e,o)&&(t[o]=e[o]);return t};let S={required:!1,size:"sm",shadow:"sm",itemComponent:d.A,transitionProps:{transition:"fade",duration:0},initiallyOpened:!1,filter:function(e,r){return r.label.toLowerCase().trim().includes(e.toLowerCase().trim())},maxDropdownHeight:220,searchable:!1,clearable:!1,limit:1/0,disabled:!1,creatable:!1,shouldCreate:function(e,r){return!!e&&!r.some(r=>r.label.toLowerCase()===e.toLowerCase())},selectOnBlur:!1,switchDirectionOnFlip:!1,filterDataOnExactSearchMatch:!1,zIndex:(0,s.w)("popover"),positionDependencies:[],dropdownPosition:"flip"},D=(0,o.forwardRef)((e,r)=>{let t=(0,h.k)("Select",S,e),{inputProps:s,wrapperProps:d,shadow:b,data:_,value:w,defaultValue:P,onChange:y,itemComponent:O,onKeyDown:D,onBlur:x,onFocus:j,transitionProps:C,initiallyOpened:E,unstyled:I,classNames:N,styles:R,filter:k,maxDropdownHeight:V,searchable:z,clearable:T,nothingFound:$,limit:L,disabled:F,onSearchChange:M,searchValue:A,rightSection:B,rightSectionWidth:H,creatable:Y,getCreateLabel:K,shouldCreate:W,selectOnBlur:Z,onCreate:q,dropdownComponent:Q,onDropdownClose:X,onDropdownOpen:J,withinPortal:U,switchDirectionOnFlip:G,zIndex:ee,name:er,dropdownPosition:et,allowDeselect:eo,placeholder:en,filterDataOnExactSearchMatch:ea,form:el,positionDependencies:ei,readOnly:es,clearButtonProps:ec,hoverOnSearchChange:ep}=t,ed=__objRest(t,["inputProps","wrapperProps","shadow","data","value","defaultValue","onChange","itemComponent","onKeyDown","onBlur","onFocus","transitionProps","initiallyOpened","unstyled","classNames","styles","filter","maxDropdownHeight","searchable","clearable","nothingFound","limit","disabled","onSearchChange","searchValue","rightSection","rightSectionWidth","creatable","getCreateLabel","shouldCreate","selectOnBlur","onCreate","dropdownComponent","onDropdownClose","onDropdownOpen","withinPortal","switchDirectionOnFlip","zIndex","name","dropdownPosition","allowDeselect","placeholder","filterDataOnExactSearchMatch","form","positionDependencies","readOnly","clearButtonProps","hoverOnSearchChange"]),{classes:eu,cx:ef,theme:em}=v(),[ev,eh]=(0,o.useState)(E),[eg,eb]=(0,o.useState)(-1),e_=(0,o.useRef)(),ew=(0,o.useRef)({}),[eP,ey]=(0,o.useState)("column"),eO="column"===eP,{scrollIntoView:eS,targetRef:eD,scrollableRef:ex}=(0,n.g)({duration:0,offset:5,cancelable:!1,isList:!0}),ej=void 0===eo?T:eo,setDropdownOpened=e=>{if(ev!==e){eh(e);let r=e?J:X;"function"==typeof r&&r()}},eC=Y&&"function"==typeof K,eE=null,eI=_.map(e=>"string"==typeof e?{label:e,value:e}:e),eN=(0,c.j)({data:eI}),[eR,ek,eV]=(0,a.C)({value:w,defaultValue:P,finalValue:null,onChange:y}),ez=eN.find(e=>e.value===eR),[eT,e$]=(0,a.C)({value:A,defaultValue:(null==ez?void 0:ez.label)||"",finalValue:void 0,onChange:M}),handleSearchChange=e=>{e$(e),z&&"function"==typeof M&&M(e)};(0,o.useEffect)(()=>{let e=eN.find(e=>e.value===eR);e?handleSearchChange(e.label):eC&&eR||handleSearchChange("")},[eR]),(0,o.useEffect)(()=>{!ez||z&&ev||handleSearchChange(ez.label)},[null==ez?void 0:ez.label]);let handleItemSelect=e=>{if(!es){if(ej&&(null==ez?void 0:ez.value)===e.value)ek(null),setDropdownOpened(!1);else{if(e.creatable&&"function"==typeof q){let r=q(e.value);null!=r&&("string"==typeof r?ek(r):ek(r.value))}else ek(e.value);eV||handleSearchChange(e.label),eb(-1),setDropdownOpened(!1),e_.current.focus()}}},eL=function({data:e,searchable:r,limit:t,searchValue:o,filter:n,value:a,filterDataOnExactSearchMatch:l}){if(!r)return e;let i=null!=a&&e.find(e=>e.value===a)||null;if(i&&!l&&(null==i?void 0:i.label)===o){if(t){if(t>=e.length)return e;let r=e.indexOf(i),o=r+t,n=o-e.length;return n>0?e.slice(r-n):e.slice(r,o)}return e}let s=[];for(let r=0;r<e.length&&(n(o,e[r])&&s.push(e[r]),!(s.length>=t));r+=1);return s}({data:eN,searchable:z,limit:L,searchValue:eT,filter:k,filterDataOnExactSearchMatch:ea,value:eR});eC&&W(eT,eL)&&(eE=K(eT),eL.push({label:eT,value:eT,creatable:!0}));let getNextIndex=(e,r,t)=>{let o=e;for(;t(o);)if(!eL[o=r(o)].disabled)return o;return e};(0,l.l)(()=>{ep&&eT?eb(0):eb(-1)},[eT,ep]);let eF=eR?eL.findIndex(e=>e.value===eR):0,eM=!es&&(eL.length>0?ev:ev&&!!$),handlePrevious=()=>{eb(e=>{var r;let t=getNextIndex(e,e=>e-1,e=>e>0);return eD.current=ew.current[null==(r=eL[t])?void 0:r.value],eM&&eS({alignment:eO?"start":"end"}),t})},handleNext=()=>{eb(e=>{var r;let t=getNextIndex(e,e=>e+1,e=>e<eL.length-1);return eD.current=ew.current[null==(r=eL[t])?void 0:r.value],eM&&eS({alignment:eO?"end":"start"}),t})},scrollSelectedItemIntoView=()=>window.setTimeout(()=>{var e;eD.current=ew.current[null==(e=eL[eF])?void 0:e.value],eS({alignment:eO?"end":"start"})},0);return(0,l.l)(()=>{eM&&scrollSelectedItemIntoView()},[eM]),o.createElement(g.I.Wrapper,__spreadProps(__spreadValues({},d),{__staticSelector:"Select"}),o.createElement(m.v,{opened:eM,transitionProps:C,shadow:"sm",withinPortal:U,__staticSelector:"Select",onDirectionChange:ey,switchDirectionOnFlip:G,zIndex:ee,dropdownPosition:et,positionDependencies:[...ei,eT],classNames:N,styles:R,unstyled:I,variant:s.variant},o.createElement(m.v.Target,null,o.createElement("div",{role:"combobox","aria-haspopup":"listbox","aria-owns":eM?`${s.id}-items`:null,"aria-controls":s.id,"aria-expanded":eM,onMouseLeave:()=>eb(-1),tabIndex:-1},o.createElement("input",{type:"hidden",name:er,value:eR||"",form:el,disabled:F}),o.createElement(g.I,__spreadValues(__spreadProps(__spreadValues(__spreadValues({autoComplete:"off",type:"search"},s),ed),{ref:(0,i.Y)(r,e_),onKeyDown:e=>{switch("function"==typeof D&&D(e),e.key){case"ArrowUp":e.preventDefault(),ev?eO?handlePrevious():handleNext():(eb(eF),setDropdownOpened(!0),scrollSelectedItemIntoView());break;case"ArrowDown":e.preventDefault(),ev?eO?handleNext():handlePrevious():(eb(eF),setDropdownOpened(!0),scrollSelectedItemIntoView());break;case"Home":if(!z){e.preventDefault(),ev||setDropdownOpened(!0);let r=eL.findIndex(e=>!e.disabled);eb(r),eM&&eS({alignment:eO?"end":"start"})}break;case"End":if(!z){e.preventDefault(),ev||setDropdownOpened(!0);let r=eL.map(e=>!!e.disabled).lastIndexOf(!1);eb(r),eM&&eS({alignment:eO?"end":"start"})}break;case"Escape":e.preventDefault(),setDropdownOpened(!1),eb(-1);break;case" ":z||(e.preventDefault(),eL[eg]&&ev?handleItemSelect(eL[eg]):(setDropdownOpened(!0),eb(eF),scrollSelectedItemIntoView()));break;case"Enter":z||e.preventDefault(),eL[eg]&&ev&&(e.preventDefault(),handleItemSelect(eL[eg]))}},__staticSelector:"Select",value:eT,placeholder:en,onChange:e=>{es||(handleSearchChange(e.currentTarget.value),T&&""===e.currentTarget.value&&ek(null),eb(-1),setDropdownOpened(!0))},"aria-autocomplete":"list","aria-controls":eM?`${s.id}-items`:null,"aria-activedescendant":eg>=0?`${s.id}-${eg}`:null,onMouseDown:()=>{es||(setDropdownOpened(!ev),eR&&!ev&&eb(eF))},onBlur:e=>{"function"==typeof x&&x(e);let r=eN.find(e=>e.value===eR);Z&&eL[eg]&&ev&&handleItemSelect(eL[eg]),handleSearchChange((null==r?void 0:r.label)||""),setDropdownOpened(!1)},onFocus:e=>{"function"==typeof j&&j(e),z&&setDropdownOpened(!0)},readOnly:!z||es,disabled:F,"data-mantine-stop-propagation":eM,name:null,classNames:__spreadProps(__spreadValues({},N),{input:ef({[eu.input]:!z},null==N?void 0:N.input)})}),(0,u.o)({theme:em,rightSection:B,rightSectionWidth:H,styles:R,size:s.size,shouldClear:T&&!!ez,onClear:()=>{var e;es||(ek(null),eV||handleSearchChange(""),null==(e=e_.current)||e.focus())},error:d.error,clearButtonProps:ec,disabled:F,readOnly:es}))))),o.createElement(m.v.Dropdown,{component:Q||p.r,maxHeight:V,direction:eP,id:s.id,innerRef:ex,__staticSelector:"Select",classNames:N,styles:R},o.createElement(f.j,{data:eL,hovered:eg,classNames:N,styles:R,isItemSelected:e=>e===eR,uuid:s.id,__staticSelector:"Select",onItemHover:eb,onItemSelect:handleItemSelect,itemsRefs:ew,itemComponent:O,size:s.size,nothingFound:$,creatable:eC&&!!eE,createLabel:eE,"aria-label":d.label,unstyled:I,variant:s.variant}))))});D.displayName="@mantine/core/Select"},97176:function(e,r,t){t.d(r,{j:function(){return SelectItems}});var o=t(67294),n=t(89058),a=t(95117),l=t(54777),i=t(56817),s=t(14258),c=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&__defNormalProp(e,t,r[t]);if(u)for(var t of u(r))m.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>p(e,d(r)),v=(0,i.k)((e,r,{size:t})=>({item:__spreadProps(__spreadValues({},e.fn.fontStyles()),{boxSizing:"border-box",textAlign:"left",width:"100%",padding:`calc(${(0,s.a)({size:t,sizes:e.spacing})} / 1.5) ${(0,s.a)({size:t,sizes:e.spacing})}`,cursor:"pointer",fontSize:(0,s.a)({size:t,sizes:e.fontSizes}),color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,borderRadius:e.fn.radius(),"&[data-hovered]":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[1]},"&[data-selected]":__spreadValues({backgroundColor:e.fn.variant({variant:"filled"}).background,color:e.fn.variant({variant:"filled"}).color},e.fn.hover({backgroundColor:e.fn.variant({variant:"filled"}).hover})),"&[data-disabled]":{cursor:"default",color:e.colors.dark[2]}}),nothingFound:{boxSizing:"border-box",color:e.colors.gray[6],paddingTop:`calc(${(0,s.a)({size:t,sizes:e.spacing})} / 2)`,paddingBottom:`calc(${(0,s.a)({size:t,sizes:e.spacing})} / 2)`,textAlign:"center"},separator:{boxSizing:"border-box",textAlign:"left",width:"100%",padding:`calc(${(0,s.a)({size:t,sizes:e.spacing})} / 1.5) ${(0,s.a)({size:t,sizes:e.spacing})}`},separatorLabel:{color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]}})),h=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,SelectItems_defNormalProp=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,SelectItems_spreadValues=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&SelectItems_defNormalProp(e,t,r[t]);if(g)for(var t of g(r))_.call(r,t)&&SelectItems_defNormalProp(e,t,r[t]);return e};function SelectItems({data:e,hovered:r,classNames:t,styles:i,isItemSelected:s,uuid:c,__staticSelector:p,onItemHover:d,onItemSelect:u,itemsRefs:f,itemComponent:m,size:h,nothingFound:g,creatable:b,createLabel:_,unstyled:w,variant:P}){let{classes:y}=v(null,{classNames:t,styles:i,unstyled:w,name:p,variant:P,size:h}),O=[],S=[],D=null,constructItemComponent=(e,t)=>{let n="function"==typeof s&&s(e.value);return o.createElement(m,SelectItems_spreadValues({key:e.value,className:y.item,"data-disabled":e.disabled||void 0,"data-hovered":!e.disabled&&r===t||void 0,"data-selected":!e.disabled&&n||void 0,selected:n,onMouseEnter:()=>d(t),id:`${c}-${t}`,role:"option",tabIndex:-1,"aria-selected":r===t,ref:r=>{f&&f.current&&(f.current[e.value]=r)},onMouseDown:e.disabled?null:r=>{r.preventDefault(),u(e)},disabled:e.disabled,variant:P},e))},x=null;if(e.forEach((e,r)=>{e.creatable?D=r:e.group?(x!==e.group&&(x=e.group,S.push(o.createElement("div",{className:y.separator,key:`__mantine-divider-${r}`},o.createElement(l.i,{classNames:{label:y.separatorLabel},label:e.group})))),S.push(constructItemComponent(e,r))):O.push(constructItemComponent(e,r))}),b){let t=e[D];O.push(o.createElement("div",{key:(0,n.k)(),className:y.item,"data-hovered":r===D||void 0,onMouseEnter:()=>d(D),onMouseDown:e=>{e.preventDefault(),u(t)},tabIndex:-1,ref:e=>{f&&f.current&&(f.current[t.value]=e)}},_))}return S.length>0&&O.length>0&&O.unshift(o.createElement("div",{className:y.separator,key:"empty-group-separator"},o.createElement(l.i,null))),S.length>0||O.length>0?o.createElement(o.Fragment,null,S,O):o.createElement(a.x,{size:h,unstyled:w,className:y.nothingFound},g)}SelectItems.displayName="@mantine/core/SelectItems"},3409:function(e,r,t){t.d(r,{v:function(){return SelectPopover}});var o=t(67294),n=t(96768),a=t(75851),l=t(56817),i=(0,l.k)(()=>({dropdown:{},itemsWrapper:{padding:(0,n.h)(4),display:"flex",width:"100%",boxSizing:"border-box"}})),s=t(83051);let c=["mousedown","touchstart"];var p=t(3594),d=t(3241),u=t(15851),f=t(37048),m=t(85983),v=t(58463),h=t(94993),g=t(30212),b=t(68216);let _={context:"Popover component was not found in the tree",children:"Popover.Target component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"},[w,P]=(0,b.R)(_.context);var y=t(80665),O=t(24241),S=t(86010),D=Object.defineProperty,x=Object.defineProperties,j=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?D(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))E.call(r,t)&&__defNormalProp(e,t,r[t]);if(C)for(var t of C(r))I.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>x(e,j(r)),__objRest=(e,r)=>{var t={};for(var o in e)E.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&C)for(var o of C(e))0>r.indexOf(o)&&I.call(e,o)&&(t[o]=e[o]);return t};let N={refProp:"ref",popupType:"dialog"},R=(0,o.forwardRef)((e,r)=>{let t=(0,d.N4)("PopoverTarget",N,e),{children:n,refProp:a,popupType:l}=t,i=__objRest(t,["children","refProp","popupType"]);if(!(0,O.k)(n))throw Error(_.children);let s=P(),c=(0,y.Y)(s.reference,n.ref,r),p=s.withRoles?{"aria-haspopup":l,"aria-expanded":s.opened,"aria-controls":s.getDropdownId(),id:s.getTargetId()}:{};return(0,o.cloneElement)(n,__spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues({},i),p),s.targetProps),{className:(0,S.Z)(s.targetProps.className,i.className,n.props.className),[a]:c}),s.controlled?null:{onClick:s.onToggle}))});R.displayName="@mantine/core/PopoverTarget";let noop=()=>{};var k=t(96362),V=(0,l.k)((e,{radius:r,shadow:t})=>({dropdown:{position:"absolute",backgroundColor:e.white,background:"dark"===e.colorScheme?e.colors.dark[6]:e.white,border:`${(0,n.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2]}`,padding:`${e.spacing.sm} ${e.spacing.md}`,boxShadow:e.shadows[t]||t||"none",borderRadius:e.fn.radius(r),"&:focus":{outline:0}},arrow:{backgroundColor:"inherit",border:`${(0,n.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2]}`,zIndex:1}})),z=t(83143),T=t(58036),$=t(63990),L=t(64523),F=t(63468),M=Object.defineProperty,A=Object.defineProperties,B=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,PopoverDropdown_defNormalProp=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,PopoverDropdown_spreadValues=(e,r)=>{for(var t in r||(r={}))Y.call(r,t)&&PopoverDropdown_defNormalProp(e,t,r[t]);if(H)for(var t of H(r))K.call(r,t)&&PopoverDropdown_defNormalProp(e,t,r[t]);return e},PopoverDropdown_spreadProps=(e,r)=>A(e,B(r)),PopoverDropdown_objRest=(e,r)=>{var t={};for(var o in e)Y.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&H)for(var o of H(e))0>r.indexOf(o)&&K.call(e,o)&&(t[o]=e[o]);return t};let W={};function PopoverDropdown(e){var r;let t=(0,d.N4)("PopoverDropdown",W,e),{style:a,className:l,children:i,onKeyDownCapture:s}=t,c=PopoverDropdown_objRest(t,["style","className","children","onKeyDownCapture"]),p=P(),{classes:u,cx:f}=V({radius:p.radius,shadow:p.shadow},{name:p.__staticSelector,classNames:p.classNames,styles:p.styles,unstyled:p.unstyled,variant:p.variant}),m=(0,k.u)({opened:p.opened,shouldReturnFocus:p.returnFocus}),v=p.withRoles?{"aria-labelledby":p.getTargetId(),id:p.getDropdownId(),role:"dialog"}:{};return p.disabled?null:o.createElement(z.q,{withinPortal:p.withinPortal},o.createElement(T.u,PopoverDropdown_spreadProps(PopoverDropdown_spreadValues({mounted:p.opened},p.transitionProps),{transition:p.transitionProps.transition||"fade",duration:null!=(r=p.transitionProps.duration)?r:150,keepMounted:p.keepMounted,exitDuration:"number"==typeof p.transitionProps.exitDuration?p.transitionProps.exitDuration:p.transitionProps.duration}),e=>{var r,t;return o.createElement($.i,{active:p.trapFocus},o.createElement(L.x,PopoverDropdown_spreadValues(PopoverDropdown_spreadProps(PopoverDropdown_spreadValues({},v),{tabIndex:-1,key:p.placement,ref:p.floating,style:PopoverDropdown_spreadProps(PopoverDropdown_spreadValues(PopoverDropdown_spreadValues({},a),e),{zIndex:p.zIndex,top:null!=(r=p.y)?r:0,left:null!=(t=p.x)?t:0,width:"target"===p.width?void 0:(0,n.h)(p.width)}),className:f(u.dropdown,l),onKeyDownCapture:function(e,r={active:!0}){return"function"==typeof e&&r.active?t=>{var o;"Escape"===t.key&&(e(t),null==(o=r.onTrigger)||o.call(r))}:r.onKeyDown||noop}(p.onClose,{active:p.closeOnEscape,onTrigger:m,onKeyDown:s}),"data-position":p.placement}),c),i,o.createElement(F.Y,{ref:p.arrowRef,arrowX:p.arrowX,arrowY:p.arrowY,visible:p.withArrow,withBorder:!0,position:p.placement,arrowSize:p.arrowSize,arrowRadius:p.arrowRadius,arrowOffset:p.arrowOffset,arrowPosition:p.arrowPosition,className:u.arrow})))}))}PopoverDropdown.displayName="@mantine/core/PopoverDropdown";var Z=t(14870),q=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,Popover_objRest=(e,r)=>{var t={};for(var o in e)Q.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&q)for(var o of q(e))0>r.indexOf(o)&&X.call(e,o)&&(t[o]=e[o]);return t};let J={position:"bottom",offset:8,positionDependencies:[],transitionProps:{transition:"fade",duration:150},middlewares:{flip:!0,shift:!0,inline:!1},arrowSize:7,arrowOffset:5,arrowRadius:0,arrowPosition:"side",closeOnClickOutside:!0,withinPortal:!1,closeOnEscape:!0,trapFocus:!1,withRoles:!0,returnFocus:!1,clickOutsideEvents:["mousedown","touchstart"],zIndex:(0,p.w)("popover"),__staticSelector:"Popover",width:"max-content"};function Popover(e){var r,t,n,a,l,i;let p=(0,o.useRef)(null),b=(0,d.N4)("Popover",J,e),{children:_,position:P,offset:y,onPositionChange:O,positionDependencies:S,opened:D,transitionProps:x,width:j,middlewares:C,withArrow:E,arrowSize:I,arrowOffset:N,arrowRadius:R,arrowPosition:k,unstyled:V,classNames:z,styles:T,closeOnClickOutside:$,withinPortal:L,closeOnEscape:F,clickOutsideEvents:M,trapFocus:A,onClose:B,onOpen:H,onChange:Y,zIndex:K,radius:W,shadow:q,id:Q,defaultOpened:X,__staticSelector:U,withRoles:G,disabled:ee,returnFocus:er,variant:et,keepMounted:eo}=b,en=Popover_objRest(b,["children","position","offset","onPositionChange","positionDependencies","opened","transitionProps","width","middlewares","withArrow","arrowSize","arrowOffset","arrowRadius","arrowPosition","unstyled","classNames","styles","closeOnClickOutside","withinPortal","closeOnEscape","clickOutsideEvents","trapFocus","onClose","onOpen","onChange","zIndex","radius","shadow","id","defaultOpened","__staticSelector","withRoles","disabled","returnFocus","variant","keepMounted"]),[ea,el]=(0,o.useState)(null),[ei,es]=(0,o.useState)(null),ec=(0,s.M)(Q),ep=(0,d.rZ)(),ed=function(e){let[r,t]=(0,u.C)({value:e.opened,defaultValue:e.defaultOpened,finalValue:!1,onChange:e.onChange}),o=(0,h.YF)({placement:e.position,middleware:[...function(e){let r=[(0,m.cv)(e.offset)];return e.middlewares.shift&&r.push((0,m.uY)({limiter:(0,m.dr)()})),e.middlewares.flip&&r.push((0,m.RR)()),e.middlewares.inline&&r.push((0,m.Qo)()),r.push((0,v.x7)({element:e.arrowRef,padding:e.arrowOffset})),r}(e),..."target"===e.width?[(0,m.dp)({apply({rects:e}){var r,t;Object.assign(null!=(t=null==(r=o.refs.floating.current)?void 0:r.style)?t:{},{width:`${e.reference.width}px`})}})]:[]]});return(0,g.L)({opened:e.opened,positionDependencies:e.positionDependencies,floating:o}),(0,f.l)(()=>{var r;null==(r=e.onPositionChange)||r.call(e,o.placement)},[o.placement]),{floating:o,controlled:"boolean"==typeof e.opened,opened:r,onClose:()=>{var r;null==(r=e.onClose)||r.call(e),t(!1)},onToggle:()=>{var o,n;r?(null==(o=e.onClose)||o.call(e),t(!1)):(null==(n=e.onOpen)||n.call(e),t(!0))}}}({middlewares:C,width:j,position:(0,Z._)(ep.dir,P),offset:y+(E?I/2:0),arrowRef:p,arrowOffset:N,onPositionChange:O,positionDependencies:S,opened:D,defaultOpened:X,onChange:Y,onOpen:H,onClose:B});!function(e,r,t){let n=(0,o.useRef)();(0,o.useEffect)(()=>{let listener=r=>{let{target:o}=null!=r?r:{};if(Array.isArray(t)){let n=(null==o?void 0:o.hasAttribute("data-ignore-outside-clicks"))||!document.body.contains(o)&&"HTML"!==o.tagName,a=t.every(e=>!!e&&!r.composedPath().includes(e));a&&!n&&e()}else n.current&&!n.current.contains(o)&&e()};return(r||c).forEach(e=>document.addEventListener(e,listener)),()=>{(r||c).forEach(e=>document.removeEventListener(e,listener))}},[n,e,t])}(()=>$&&ed.onClose(),M,[ea,ei]);let eu=(0,o.useCallback)(e=>{el(e),ed.floating.reference(e)},[ed.floating.reference]),ef=(0,o.useCallback)(e=>{es(e),ed.floating.floating(e)},[ed.floating.floating]);return o.createElement(w,{value:{returnFocus:er,disabled:ee,controlled:ed.controlled,reference:eu,floating:ef,x:ed.floating.x,y:ed.floating.y,arrowX:null==(n=null==(t=null==(r=ed.floating)?void 0:r.middlewareData)?void 0:t.arrow)?void 0:n.x,arrowY:null==(i=null==(l=null==(a=ed.floating)?void 0:a.middlewareData)?void 0:l.arrow)?void 0:i.y,opened:ed.opened,arrowRef:p,transitionProps:x,width:j,withArrow:E,arrowSize:I,arrowOffset:N,arrowRadius:R,arrowPosition:k,placement:ed.floating.placement,trapFocus:A,withinPortal:L,zIndex:K,radius:W,shadow:q,closeOnEscape:F,onClose:ed.onClose,onToggle:ed.onToggle,getTargetId:()=>`${ec}-target`,getDropdownId:()=>`${ec}-dropdown`,withRoles:G,targetProps:en,__staticSelector:U,classNames:z,styles:T,unstyled:V,variant:et,keepMounted:eo}},_)}Popover.Target=R,Popover.Dropdown=PopoverDropdown,Popover.displayName="@mantine/core/Popover";var U=Object.defineProperty,G=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable,SelectPopover_defNormalProp=(e,r,t)=>r in e?U(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,SelectPopover_spreadValues=(e,r)=>{for(var t in r||(r={}))ee.call(r,t)&&SelectPopover_defNormalProp(e,t,r[t]);if(G)for(var t of G(r))er.call(r,t)&&SelectPopover_defNormalProp(e,t,r[t]);return e},SelectPopover_objRest=(e,r)=>{var t={};for(var o in e)ee.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&G)for(var o of G(e))0>r.indexOf(o)&&er.call(e,o)&&(t[o]=e[o]);return t};function SelectPopover({opened:e,transitionProps:r={transition:"fade",duration:0},shadow:t,withinPortal:n,children:a,__staticSelector:l,onDirectionChange:i,switchDirectionOnFlip:s,zIndex:c,dropdownPosition:p,positionDependencies:d=[],classNames:u,styles:f,unstyled:m,readOnly:v,variant:h}){return o.createElement(Popover,{unstyled:m,classNames:u,styles:f,width:"target",withRoles:!1,opened:e,middlewares:{flip:"flip"===p,shift:!1},position:"flip"===p?"bottom":p,positionDependencies:d,zIndex:c,__staticSelector:l,withinPortal:n,transitionProps:r,shadow:t,disabled:v,onPositionChange:e=>s&&(null==i?void 0:i("top"===e?"column-reverse":"column")),variant:h},a)}SelectPopover.Target=Popover.Target,SelectPopover.Dropdown=function(e){var{children:r,component:t="div",maxHeight:l=220,direction:s="column",id:c,innerRef:p,__staticSelector:d,styles:u,classNames:f,unstyled:m}=e,v=SelectPopover_objRest(e,["children","component","maxHeight","direction","id","innerRef","__staticSelector","styles","classNames","unstyled"]);let{classes:h}=i(null,{name:d,styles:u,classNames:f,unstyled:m});return o.createElement(Popover.Dropdown,SelectPopover_spreadValues({p:0,onMouseDown:e=>e.preventDefault()},v),o.createElement("div",{style:{maxHeight:(0,n.h)(l),display:"flex"}},o.createElement(L.x,{component:t||"div",id:`${c}-items`,"aria-labelledby":`${c}-label`,role:"listbox",onMouseDown:e=>e.preventDefault(),style:{flex:1,overflowY:t!==a.r?"auto":void 0},"data-combobox-popover":!0,ref:p},o.createElement("div",{className:h.itemsWrapper,style:{flexDirection:s}},r))))}},73498:function(e,r,t){t.d(r,{o:function(){return getSelectRightSectionProps}});var o=t(67294),n=t(96768),a=t(3241),l=t(14258),i=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&__defNormalProp(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__objRest=(e,r)=>{var t={};for(var o in e)c.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&s)for(var o of s(e))0>r.indexOf(o)&&p.call(e,o)&&(t[o]=e[o]);return t};let d={xs:(0,n.h)(14),sm:(0,n.h)(18),md:(0,n.h)(20),lg:(0,n.h)(24),xl:(0,n.h)(28)};function ChevronIcon(e){var{size:r,error:t,style:n}=e,i=__objRest(e,["size","error","style"]);let s=(0,a.rZ)(),c=(0,l.a)({size:r,sizes:d});return o.createElement("svg",__spreadValues({width:c,height:c,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:__spreadValues({color:t?s.colors.red[6]:s.colors.gray[6]},n),"data-chevron":!0},i),o.createElement("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var u=t(80971),f=Object.defineProperty,m=Object.defineProperties,v=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,SelectRightSection_defNormalProp=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,SelectRightSection_spreadValues=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&SelectRightSection_defNormalProp(e,t,r[t]);if(h)for(var t of h(r))b.call(r,t)&&SelectRightSection_defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>m(e,v(r));function SelectRightSection({shouldClear:e,clearButtonProps:r,onClear:t,size:n,error:a}){return e?o.createElement(u.P,__spreadProps(SelectRightSection_spreadValues({},r),{variant:"transparent",onClick:t,size:n,onMouseDown:e=>e.preventDefault()})):o.createElement(ChevronIcon,{error:a,size:n})}SelectRightSection.displayName="@mantine/core/SelectRightSection";var _=Object.defineProperty,w=Object.defineProperties,P=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,get_select_right_section_props_defNormalProp=(e,r,t)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,get_select_right_section_props_spreadValues=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&get_select_right_section_props_defNormalProp(e,t,r[t]);if(y)for(var t of y(r))S.call(r,t)&&get_select_right_section_props_defNormalProp(e,t,r[t]);return e},get_select_right_section_props_spreadProps=(e,r)=>w(e,P(r)),get_select_right_section_props_objRest=(e,r)=>{var t={};for(var o in e)O.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&y)for(var o of y(e))0>r.indexOf(o)&&S.call(e,o)&&(t[o]=e[o]);return t};function getSelectRightSectionProps(e){var{styles:r,rightSection:t,rightSectionWidth:n,theme:a}=e,l=get_select_right_section_props_objRest(e,["styles","rightSection","rightSectionWidth","theme"]);if(t)return{rightSection:t,rightSectionWidth:n,styles:r};let i="function"==typeof r?r(a):r;return{rightSection:!l.readOnly&&!(l.disabled&&l.shouldClear)&&o.createElement(SelectRightSection,get_select_right_section_props_spreadValues({},l)),styles:get_select_right_section_props_spreadProps(get_select_right_section_props_spreadValues({},i),{rightSection:get_select_right_section_props_spreadProps(get_select_right_section_props_spreadValues({},null==i?void 0:i.rightSection),{pointerEvents:l.shouldClear?void 0:"none"})})}}},75851:function(e,r,t){t.d(r,{r:function(){return d}});var o=t(67294),n=t(73723),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&__defNormalProp(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>l(e,i(r)),__objRest=(e,r)=>{var t={};for(var o in e)c.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&s)for(var o of s(e))0>r.indexOf(o)&&p.call(e,o)&&(t[o]=e[o]);return t};let d=(0,o.forwardRef)((e,r)=>{var{style:t}=e,a=__objRest(e,["style"]);return o.createElement(n.x,__spreadProps(__spreadValues({},a),{style:__spreadValues({width:"100%"},t),viewportRef:r}),a.children)});d.displayName="@mantine/core/SelectScrollArea"},32819:function(e,r,t){t.d(r,{g:function(){return useScrollIntoView}});var o=t(67294),n=t(73524),a=t(84137);let easeInOutQuad=e=>e<.5?2*e*e:-1+(4-2*e)*e,getRelativePosition=({axis:e,target:r,parent:t,alignment:o,offset:n,isList:a})=>{if(!r||!t&&"undefined"==typeof document)return 0;let l=!!t,i=t||document.body,s=i.getBoundingClientRect(),c=r.getBoundingClientRect(),getDiff=e=>c[e]-s[e];if("y"===e){let e=getDiff("top");if(0===e)return 0;if("start"===o){let r=e-n,t=r<=c.height*(a?0:1)||!a;return t?r:0}let r=l?s.height:window.innerHeight;if("end"===o){let t=e+n-r+c.height,o=t>=-c.height*(a?0:1)||!a;return o?t:0}return"center"===o?e-r/2+c.height/2:0}if("x"===e){let e=getDiff("left");if(0===e)return 0;if("start"===o){let r=e-n,t=r<=c.width||!a;return t?r:0}let r=l?s.width:window.innerWidth;if("end"===o){let t=e+n-r+c.width,o=t>=-c.width||!a;return o?t:0}if("center"===o)return e-r/2+c.width/2}return 0},getScrollStart=({axis:e,parent:r})=>{if(!r&&"undefined"==typeof document)return 0;let t="y"===e?"scrollTop":"scrollLeft";if(r)return r[t];let{body:o,documentElement:n}=document;return o[t]+n[t]},setScrollParam=({axis:e,parent:r,distance:t})=>{if(!r&&"undefined"==typeof document)return;let o="y"===e?"scrollTop":"scrollLeft";if(r)r[o]=t;else{let{body:e,documentElement:r}=document;e[o]=t,r[o]=t}};function useScrollIntoView({duration:e=1250,axis:r="y",onScrollFinish:t,easing:l=easeInOutQuad,offset:i=0,cancelable:s=!0,isList:c=!1}={}){let p=(0,o.useRef)(0),d=(0,o.useRef)(0),u=(0,o.useRef)(!1),f=(0,o.useRef)(null),m=(0,o.useRef)(null),v=(0,n.J)(),cancel=()=>{p.current&&cancelAnimationFrame(p.current)},h=(0,o.useCallback)(({alignment:o="start"}={})=>{var n;u.current=!1,p.current&&cancel();let a=null!=(n=getScrollStart({parent:f.current,axis:r}))?n:0,s=getRelativePosition({parent:f.current,target:m.current,axis:r,alignment:o,offset:i,isList:c})-(f.current?0:a);!function animateScroll(){0===d.current&&(d.current=performance.now());let o=performance.now(),n=o-d.current,i=v||0===e?1:n/e,c=a+s*l(i);setScrollParam({parent:f.current,axis:r,distance:c}),!u.current&&i<1?p.current=requestAnimationFrame(animateScroll):("function"==typeof t&&t(),d.current=0,p.current=0,cancel())}()},[r,e,l,c,i,t,v]),handleStop=()=>{s&&(u.current=!0)};return(0,a.s)("wheel",handleStop,{passive:!0}),(0,a.s)("touchmove",handleStop,{passive:!0}),(0,o.useEffect)(()=>cancel,[]),{scrollableRef:f,targetRef:m,scrollIntoView:h,cancel}}},65053:function(e,r,t){t.d(r,{j:function(){return groupOptions}});function groupOptions({data:e}){let r=[],t=[],o=e.reduce((e,r,o)=>(r.group?e[r.group]?e[r.group].push(o):e[r.group]=[o]:t.push(o),e),{});return Object.keys(o).forEach(t=>{r.push(...o[t].map(r=>e[r]))}),r.push(...t.map(r=>e[r])),r}}}]);