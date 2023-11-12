(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{918:function(e,t,n){"use strict";n.d(t,{Z:function(){return CopyToClipboard}});var a=n(85893),o=n(67294),s=n(55652),i=n(69876),r=n(95117),l=n(49834),c=n(88198),d=n(93625),u=n(90589),p=n.n(u);function CopyToClipboard(e){let{value:t,content:n,truncate:u,width:h=300}=e,g=function(){let{timeout:e=2e3}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,o.useState)(null),[a,s]=(0,o.useState)(!1),[i,r]=(0,o.useState)(null),handleCopyResult=t=>{clearTimeout(i),r(setTimeout(()=>s(!1),e)),s(t)};return{copy:e=>{if("clipboard"in navigator)navigator.clipboard.writeText(e).then(()=>handleCopyResult(!0)).catch(e=>n(e));else{let t=document.createElement("textarea");t.value=e,t.style.position="absolute",t.style.left="-999999px",document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(e){console.error(e)}finally{t.remove(),handleCopyResult(!0)}}},reset:()=>{s(!1),n(null),clearTimeout(i)},error:t,copied:a}}({timeout:500});return(0,a.jsx)(s.u,{label:g.copied?"已复制":"复制",withArrow:!0,position:"right",children:(0,a.jsxs)(i.k,{onClick:()=>g.copy(t),mih:50,style:{width:h},gap:"xs",justify:"flex-start",align:"center",direction:"row",wrap:"nowrap",children:[n?(0,a.jsx)(r.x,{truncate:u,className:p()["copy-to-clipboard-content"],children:n}):null,(0,a.jsx)(l.A,{color:g.copied?"teal":"gray",children:g.copied?(0,a.jsx)(c.Z,{size:"1rem"}):(0,a.jsx)(d.Z,{size:"1rem"})})]})})}},2394:function(e,t,n){"use strict";n.d(t,{Z:function(){return FeatureDescription}});var a=n(85893),o=n(92716),s=n(95117),i=n(64523),r=n(69876),l=n(19236),c=n(91759);function InfoDetail(e){let{detail:t,title:n}=e,[i,{open:r,close:l}]=(0,c.q)(!1);return(0,a.jsx)(a.Fragment,{children:t?(0,a.jsxs)("div",{children:[(0,a.jsx)(o.d,{opened:i,onClose:l,title:n,children:(0,a.jsx)(s.x,{children:t})}),(0,a.jsx)(s.x,{onClick:()=>r(),children:"信息"})]}):null})}function FeatureDescription(e){let{title:t,description:n,detail:o,mt:c,mb:d}=e;return(0,a.jsxs)(i.x,{mt:c||24,mb:d||24,children:[(0,a.jsxs)(r.k,{mih:20,gap:"md",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:[(0,a.jsx)(l.D,{order:2,children:t}),(0,a.jsx)(InfoDetail,{title:t,detail:o})]}),n?(0,a.jsx)(s.x,{lineClamp:4,children:n}):null]})}},61286:function(e,t,n){"use strict";n.d(t,{Z:function(){return Home}});var a,o,s,i,r=n(85893),l=n(67294),c=n(20966),d=n(74655),u=n(30399),p=n(24087),h=n(83047),g=n(1241),f=n(30489);n(918),n(73150);let m=l.memo(function(e){return(0,r.jsx)(d.D,{remarkPlugins:[u.Z,g.Z,p.Z],rehypePlugins:[h.Z,[f.Z,{detect:!1,ignoreMissing:!0}]],components:{p:e=>(0,r.jsx)("p",{...e,dir:"auto"}),a:e=>{var t;let n=e.href||"",a=/^\/#/i.test(n),o=a?"_self":null!==(t=e.target)&&void 0!==t?t:"_blank";return(0,r.jsx)("a",{...e,target:o})}},children:e.content})});function Markdown(e){var t;let n=(0,l.useRef)(null);return(0,r.jsx)("div",{className:"markdown-body",style:{fontSize:"".concat(null!==(t=e.fontSize)&&void 0!==t?t:14,"px")},ref:n,onContextMenu:e.onContextMenu,onDoubleClickCapture:e.onDoubleClickCapture,children:e.loading?(0,r.jsx)(c.a,{}):(0,r.jsx)(m,{content:e.content})})}var y=n(47876);(a=s||(s={})).SYSTEM="system",a.USER="user",a.ASSISTANT="assistant",(o=i||(i={}))[o.NOTLABELED=0]="NOTLABELED",o[o.NEUTRAL=2]="NEUTRAL",o[o.POSITIVE=1]="POSITIVE";var w=n(29235),x=n(25872),S=n.n(x);function Home(e){let{fromChat:t=!1}=e,n=(0,w.s6)().currentKnowledgeBase,[a,o]=(0,l.useState)(""),[i,d]=(0,l.useState)(!1),[u,p]=(0,l.useState)([{message:"你好！有什么我可以帮助你的吗？",sourceIdx:-1,type:s.SYSTEM,showFeedback:!1,liked:!1,disLiked:!1}]),h=(0,l.useRef)(null),g=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=h.current;e.scrollTop=e.scrollHeight},[u]),(0,l.useEffect)(()=>{g.current.focus()},[]);let handleError=e=>{p(t=>[...t,{message:e.message,type:s.ASSISTANT,sourceIdx:-1,showFeedback:!1,liked:!1,disLiked:!1}]),d(!1),o("")},handleSubmit=e=>{if(e.preventDefault(),""===a.trim())return;let t=[...u,{message:a,type:s.USER,sourceIdx:-1,showFeedback:!1,liked:!1,disLiked:!1}];d(!0),p(t);try{let e=JSON.parse(JSON.stringify(t)),s={message:"",type:"assistant",sourceIdx:-1,showFeedback:!1,liked:!1,disLiked:!1};o(""),(0,y.dr)({messages:[{role:"user",content:a}],config:{stream:!0,max_tokens:1024},onFinish:e=>{d(!1)},onUpdate:(t,n)=>{s.message+=n,console.log(n,"delta"),p([...e,s])}},n.token)}catch(e){handleError(e)}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:S().main,children:[(0,r.jsx)("div",{className:S().cloud,children:(0,r.jsx)("div",{ref:h,className:S().messagelist,children:u.map((e,t)=>(0,r.jsxs)("div",{className:e.type===s.USER&&i&&t===u.length-1?S().usermessagewaiting:e.type!==s.USER?S().apimessage:S().usermessage,children:[e.type!==s.USER?(0,r.jsx)("div",{className:S().avatar,onClick:handleError,children:(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2573",width:"24",height:"24",children:(0,r.jsx)("path",{fill:"#E4782C",d:"M512 1024c-80.64-74.88-77.354667-159.701333-77.354667-159.701333h154.709334S592.64 949.12 512 1024z m0-939.178667c-68.053333 89.856-200.234667 294.101333-200.234667 524.416 0 66.645333 12.501333 122.453333 25.130667 161.834667h350.208c12.629333-39.381333 25.130667-95.189333 25.130667-161.834667 0-230.314667-132.181333-434.56-200.234667-524.416z m253.866667 524.416c0 151.722667-58.154667 251.861333-58.154667 251.861334l-62.208-36.394667H378.496l-62.208 36.394667S258.133333 760.96 258.133333 609.237333C258.133333 275.029333 511.914667 0.085333 512 0c0.085333 0.085333 253.866667 275.029333 253.866667 609.237333z m35.114666 99.626667c0 58.154667-25.813333 121.386667-43.605333 148.053333h123.264l-13.653333-83.84-66.005334-64.213333zM157.013333 773.12l-13.653333 83.84h123.264c-17.834667-26.666667-43.605333-89.898667-43.605333-148.053333L157.013333 773.12z m306.645334-242.005333a11.946667 11.946667 0 1 0 0 23.808 11.946667 11.946667 0 0 0 0-23.808z m38.186666 0a11.946667 11.946667 0 1 0 0 23.808 11.946667 11.946667 0 0 0 0-23.808z m38.186667 0a11.946667 11.946667 0 1 0 0 23.808 11.946667 11.946667 0 0 0 0-23.808z m130.474667 150.698666a61.653333 61.653333 0 1 1-115.2-30.677333l-15.402667-21.034667a94.677333 94.677333 0 0 1-99.626667-14.72l-17.194666 14.933334a36.906667 36.906667 0 1 1-36.053334-29.184c4.437333 0 8.618667 0.896 12.544 2.346666l18.304-15.914666a94.592 94.592 0 0 1 8.277334-101.973334l-19.242667-20.906666c-1.408 0.170667-2.773333 0.426667-4.181333 0.426666a31.36 31.36 0 1 1 30.549333-24.490666l19.413333 21.12a94.592 94.592 0 0 1 95.872-1.536l16.426667-16.426667a48.810667 48.810667 0 1 1 30.293333 30.293333l-15.061333 15.061334a94.634667 94.634667 0 0 1-5.888 115.370666l14.037333 19.157334c6.442667-2.261333 13.312-3.584 20.522667-3.584a61.738667 61.738667 0 0 1 61.610667 61.738666z m-168.661334-63.957333a74.837333 74.837333 0 1 0 0-149.632 74.837333 74.837333 0 0 0 0 149.632z","p-id":"2574"})})}):(0,r.jsx)("div",{className:S().avatar,children:(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3538",width:"24",height:"24",children:(0,r.jsx)("path",{d:"M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z","p-id":"3539"})})}),(0,r.jsx)("div",{className:S().markdownanswer,children:(0,r.jsx)(Markdown,{content:e.message})})]},t))})}),(0,r.jsx)("div",{className:S().center,children:(0,r.jsx)("div",{className:S().cloudform,children:(0,r.jsxs)("form",{style:{width:"100%"},onSubmit:handleSubmit,children:[(0,r.jsx)("textarea",{disabled:i,onKeyDown:e=>{13===e.keyCode&&a?!e.shiftKey&&a&&handleSubmit(e):"Enter"===e.key&&e.preventDefault()},ref:g,autoFocus:!1,rows:1,maxLength:512,id:"userInput",name:"userInput",placeholder:i?"等待回复中":"请输入你的问题",value:a,onChange:e=>o(e.target.value),className:S().textarea}),(0,r.jsx)("button",{type:"submit",disabled:i,className:S().generatebutton,children:i?(0,r.jsx)(c.a,{}):(0,r.jsx)("svg",{viewBox:"0 0 20 20",className:S().svgicon,xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})})})]})})})]})})}},47876:function(e,t,n){"use strict";n.d(t,{dr:function(){return chatStream},Ag:function(){return getChatList},aK:function(){return h}});var a=n(33250),o={Error:{Unauthorized:"无权限"}};let s={cn:o},i=Object.keys(s),r=s[function(){let e=function(e){try{return localStorage.getItem(e)}catch(e){return null}}("lang");if(i.includes(null!=e?e:""))return e;let t=function(){try{return navigator.language.toLowerCase()}catch(e){return"cn"}}();for(let e of i)if(t.includes(e))return e;return"cn"}()];!function merge(e,t){Object.keys(t).forEach(function(n){if(t[n]&&"object"==typeof t[n]){merge(e[n]=e[n]||{},t[n]);return}e[n]=t[n]})}(o,r);var l=n(64529),c=n(86105),d=n(23062),u=n(782),p=n(23824);let h=(0,l.Ue)()((0,u.mW)(e=>({chatList:[],open:!1,loading:!1,isEdit:!1,currentChatItem:{},updateCurrentChatItem:t=>e(e=>({currentChatItem:t})),setEditStatus:t=>e(e=>({isEdit:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t})),updateChatList:t=>e(e=>({chatList:t}))})));async function getChatList(e){let t=h.getState(),n=t.updateChatList,a=await (0,p.W)("/api/chat/chatlist?id=".concat(e)),o=a.data;o&&n(o)}function chatStream(e,t){var n;let s=new AbortController;null===(n=e.onController)||void 0===n||n.call(e,s);let i={method:"POST",headers:{"Content-Type":"application/json"},signal:s.signal,body:JSON.stringify(Object.assign({stream:!0},e,{token:t}))},r=setTimeout(()=>s.abort(),c.tb),l="",u=!1,finish=()=>{u||(e.onFinish(l),u=!0)};s.signal.onabort=finish,(0,a.L)("/api/chat",{...i,async onopen(e){var t;clearTimeout(r);let n=e.headers.get("content-type");if(console.log("AgentCraft request response content type: ",n),null==n?void 0:n.startsWith("text/plain"))return l=await e.clone().text(),finish();if(!e.ok||!(null===(t=e.headers.get("content-type"))||void 0===t?void 0:t.startsWith("application/octet-stream"))||200!==e.status){let t=[l],n=await e.clone().text();try{let t=await e.clone().json();n=(0,d.Bs)(t)}catch(e){console.log(e)}return 401===e.status&&t.push(o.Error.Unauthorized),n&&t.push(n),l=t.join("\n\n"),finish()}},onmessage(t){if("[DONE]"===t.data||u)return finish();let n=t.data;try{let t=JSON.parse(n),o=t.choices[0].delta.content;if(o){var a;l+=o,null===(a=e.onUpdate)||void 0===a||a.call(e,l,o)}}catch(e){console.error("[Request] parse error",n,t)}},onclose(){finish()},onerror(t){var n;throw null===(n=e.onError)||void 0===n||n.call(e,t),t},openWhenHidden:!0})}},61494:function(e,t,n){"use strict";n.d(t,{cv:function(){return addDataSet},ln:function(){return getDataSetList},s6:function(){return i},uo:function(){return deleteDataSet}});var a=n(64529),o=n(782),s=n(23824);let i=(0,a.Ue)()((0,o.mW)(e=>({dataSetList:[],open:!1,loading:!1,updateDataSetList:t=>e(e=>({dataSetList:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t}))})));async function getDataSetList(){let e=i.getState(),t=e.updateDataSetList,n=await (0,s.W)("/api/dataset/list"),a=n.data;a&&t(a)}async function deleteDataSet(e){return await (0,s.W)("/api/dataset/delete?id=".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}async function addDataSet(e){return await (0,s.W)("/api/dataset/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}},29235:function(e,t,n){"use strict";n.d(t,{CH:function(){return updateKnowledgeBase},Co:function(){return getKnowledgeBaseList},IV:function(){return getKnowledgeBase},Sk:function(){return getAccessUrl},g$:function(){return refreshToken},s6:function(){return i},uA:function(){return addKnowledgeBase}});var a=n(64529),o=n(782),s=n(23824);let i=(0,a.Ue)()((0,o.mW)(e=>({knowledgeBaseList:[],knowledgeBaseChatList:[],open:!1,chatDrawer:!1,loading:!1,isEdit:!1,accessUrl:{openApiUrl:"",innerApiUrl:""},currentKnowledgeBase:void 0,updateCurrentKnowledgeBase:t=>e(e=>({currentKnowledgeBase:t})),setChatDrawer:t=>e(e=>({chatDrawer:t})),setAccessUrl:t=>e(e=>({accessUrl:t})),setEditStatus:t=>e(e=>({isEdit:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t})),updateKnowledgeBaseList:t=>e(e=>({knowledgeBaseList:t}))})));async function getKnowledgeBaseList(e){let t=i.getState(),n=t.updateKnowledgeBaseList,a=await (0,s.W)("/api/knowledgeBase/list?appId=".concat(e)),o=a.data;o&&n(o)}async function getKnowledgeBase(e){let t=await (0,s.W)("/api/knowledgeBase/get?id=".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});return t.data}async function addKnowledgeBase(e){return await (0,s.W)("/api/knowledgeBase/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}async function updateKnowledgeBase(e,t){return await (0,s.W)("/api/knowledgeBase/update?id=".concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}async function refreshToken(e){return await (0,s.W)("/api/knowledgeBase/token?agentId=".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}})}async function getAccessUrl(){let e=await (0,s.W)("/api/knowledgeBase/getAccessUrl",{method:"GET",headers:{"Content-Type":"application/json"}});return e}},91939:function(e,t,n){"use strict";n.d(t,{$s:function(){return deleteModel},QB:function(){return updateModel},fZ:function(){return getModelList},mS:function(){return addModel},s6:function(){return i}});var a=n(64529),o=n(782),s=n(23824);let i=(0,a.Ue)()((0,o.mW)(e=>({modelList:[],loading:!1,open:!1,isEdit:!1,updateCurrentModel:t=>e(e=>({currentModel:t})),setEditStatus:t=>e(e=>({isEdit:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t})),updateModelList:t=>e(e=>({modelList:t}))})));async function getModelList(){let e=i.getState(),t=e.updateModelList,n=await (0,s.W)("/api/model/list"),a=await n.data;a&&t(a)}async function deleteModel(e){return await (0,s.W)("/api/model/delete?id=".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}async function addModel(e){return await (0,s.W)("/api/model/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}async function updateModel(e,t){return await (0,s.W)("/api/model/update?id=".concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}},13962:function(e,t,n){"use strict";var a,o;n.d(t,{I:function(){return a}}),(o=a||(a={}))[o.QUESTION=1]="QUESTION",o[o.DOCUMENT=2]="DOCUMENT"},23062:function(e,t,n){"use strict";function unicodeDecode(e){let t=e;try{t=JSON.parse(e)}catch(e){console.error("Invalid URI sequence",e)}return t}function prettyObject(e){let t=e;return("string"!=typeof e&&(e=JSON.stringify(e,null,"  ")),"{}"===e)?t.toString():e.startsWith("```json")?e:["```json",e,"```"].join("\n")}n.d(t,{Bs:function(){return prettyObject},pI:function(){return unicodeDecode}})},90589:function(e){e.exports={"copy-to-clipboard-content":"CopyToClipboard_copy-to-clipboard-content__cxI0e"}}}]);