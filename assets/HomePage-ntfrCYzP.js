import{c as Bt,g as Wt,i as Ws,e as je,l as qc,f as Uc,a as z,h as j,d as Ft,J as $c,K as jc,k as Gn,L as Mr,M as zc,q as Xs,v as Hc,w as zt,N as Il,o as Wn,O as Rr,r as pt,t as Kc,P as Qc,R as Gc,S as Wc,U as Xc,V as Ot,j as Re,W as Pr,X as Yc,Y as Al,T as Lr,Z as Jc,_ as Cl,$ as Zc,a0 as th,Q as eh,x as Xn,a1 as Zt,z as St,B as ct,a2 as De,A as _t,C as Lt,a3 as vr,a4 as Bn,D as te,a5 as bl,a6 as ce,a7 as Wo,a8 as nh,y as ke,E as $t,a9 as Sl,aa as rh,ab as Rl,ac as sh,ad as Ns,ae as Os,n as ih,af as Er,ag as Xo,ah as oh,ai as ah,aj as lh,ak as uh,al as ch,am as hh,u as dh,an as fh}from"./index-BXaH0Sh5.js";import{S as mh,a as ph}from"./seo.service-yVOiZe1v.js";import{b as gh,a as _h,h as yh,u as Pl}from"./use-timeout-BMCahFq9.js";const vh=Bt({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:t}){const{proxy:{$q:e}}=Wt(),r=Ws(qc,je);if(r===je)return console.error("QPage needs to be a deep child of QLayout"),je;if(Ws(Uc,je)===je)return console.error("QPage needs to be child of QPageContainer"),je;const o=z(()=>{const u=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof n.styleFn=="function"){const h=r.isContainer.value===!0?r.containerHeight.value:e.screen.height;return n.styleFn(u,h)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-u+"px":e.screen.height===0?u!==0?`calc(100vh - ${u}px)`:"100vh":e.screen.height-u+"px"}}),a=z(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>j("main",{class:a.value,style:o.value},Ft(t.default))}}),Ms=Bt({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(n,{slots:t}){const e=z(()=>`q-card__section q-card__section--${n.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>j(n.tag,{class:e.value},Ft(t.default))}}),Xr={dark:{type:Boolean,default:null}};function Yr(n,t){return z(()=>n.dark===null?t.dark.isActive:n.dark)}const Ys=Bt({name:"QCard",props:{...Xr,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(n,{slots:t}){const{proxy:{$q:e}}=Wt(),r=Yr(n,e),i=z(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(n.bordered===!0?" q-card--bordered":"")+(n.square===!0?" q-card--square no-border-radius":"")+(n.flat===!0?" q-card--flat no-shadow":""));return()=>j(n.tag,{class:i.value},Ft(t.default))}}),Eh=Bt({name:"QCardActions",props:{...$c,vertical:Boolean},setup(n,{slots:t}){const e=jc(n),r=z(()=>`q-card__actions ${e.value} q-card__actions--${n.vertical===!0?"vert column":"horiz row"}`);return()=>j("div",{class:r.value},Ft(t.default))}});function Th(n,t,e){let r;function i(){r!==void 0&&(Mr.remove(r),r=void 0)}return Gn(()=>{n.value===!0&&i()}),{removeFromHistory:i,addToHistory(){r={condition:()=>e.value===!0,handler:t},Mr.add(r)}}}function wh(){let n;const t=Wt();function e(){n=void 0}return zc(e),Gn(e),{removeTick:e,registerTick(r){n=r,Xs(()=>{n===r&&(Hc(t)===!1&&n(),n=void 0)})}}}const Ih={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ah=["beforeShow","show","beforeHide","hide"];function Ch({showing:n,canShow:t,hideOnRouteChange:e,handleShow:r,handleHide:i,processOnMount:o}){const a=Wt(),{props:u,emit:h,proxy:d}=a;let m;function w(x){n.value===!0?P(x):T(x)}function T(x){if(u.disable===!0||x?.qAnchorHandled===!0||t!==void 0&&t(x)!==!0)return;const B=u["onUpdate:modelValue"]!==void 0;B===!0&&(h("update:modelValue",!0),m=x,Xs(()=>{m===x&&(m=void 0)})),(u.modelValue===null||B===!1)&&S(x)}function S(x){n.value!==!0&&(n.value=!0,h("beforeShow",x),r!==void 0?r(x):h("show",x))}function P(x){if(u.disable===!0)return;const B=u["onUpdate:modelValue"]!==void 0;B===!0&&(h("update:modelValue",!1),m=x,Xs(()=>{m===x&&(m=void 0)})),(u.modelValue===null||B===!1)&&k(x)}function k(x){n.value!==!1&&(n.value=!1,h("beforeHide",x),i!==void 0?i(x):h("hide",x))}function R(x){u.disable===!0&&x===!0?u["onUpdate:modelValue"]!==void 0&&h("update:modelValue",!1):x===!0!==n.value&&(x===!0?S:k)(m)}zt(()=>u.modelValue,R),e!==void 0&&Il(a)===!0&&zt(()=>d.$route.fullPath,()=>{e.value===!0&&n.value===!0&&P()}),Wn(()=>{R(u.modelValue)});const M={show:T,hide:P,toggle:w};return Object.assign(d,M),M}const Vl={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Dl(n,t=()=>{},e=()=>{}){return{transitionProps:z(()=>{const r=`q-transition--${n.transitionShow||t()}`,i=`q-transition--${n.transitionHide||e()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:z(()=>`--q-transition-duration: ${n.transitionDuration}ms`)}}let Rn=[],qn=[];function xl(n){qn=qn.filter(t=>t!==n)}function bh(n){xl(n),qn.push(n)}function Yo(n){xl(n),qn.length===0&&Rn.length!==0&&(Rn[Rn.length-1](),Rn=[])}function Sh(n){qn.length===0?n():Rn.push(n)}const Vr=[];function Rh(n){return Vr.find(t=>t.contentEl!==null&&t.contentEl.contains(n))}function Ph(n,t){do{if(n.$options.name==="QMenu"){if(n.hide(t),n.$props.separateClosePopup===!0)return Rr(n)}else if(n.__qPortal===!0){const e=Rr(n);return e?.$options.name==="QPopupProxy"?(n.hide(t),e):n}n=Rr(n)}while(n!=null)}function Vh(n,t,e){for(;e!==0&&n!==void 0&&n!==null;){if(n.__qPortal===!0){if(e--,n.$options.name==="QMenu"){n=Ph(n,t);continue}n.hide(t)}n=Rr(n)}}const Dh=Bt({name:"QPortal",setup(n,{slots:t}){return()=>t.default()}});function xh(n){for(n=n.parent;n!=null;){if(n.type.name==="QGlobalDialog")return!0;if(n.type.name==="QDialog"||n.type.name==="QMenu")return!1;n=n.parent}return!1}function kh(n,t,e,r){const i=pt(!1),o=pt(!1);let a=null;const u={},h=r==="dialog"&&xh(n);function d(w){if(w===!0){Yo(u),o.value=!0;return}o.value=!1,i.value===!1&&(h===!1&&a===null&&(a=Wc(!1,r)),i.value=!0,Vr.push(n.proxy),bh(u))}function m(w){if(o.value=!1,w!==!0)return;Yo(u),i.value=!1;const T=Vr.indexOf(n.proxy);T!==-1&&Vr.splice(T,1),a!==null&&(Xc(a),a=null)}return Kc(()=>{m(!0)}),n.proxy.__qPortal=!0,Qc(n.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:m,portalIsActive:i,portalIsAccessible:o,renderPortal:()=>h===!0?e():i.value===!0?[j(Gc,{to:a},j(Dh,e))]:void 0}}let bn=0,Ls,Fs,Pn,Bs=!1,Jo,Zo,ta,Pe=null;function Nh(n){Oh(n)&&Pr(n)}function Oh(n){if(n.target===document.body||n.target.classList.contains("q-layout__backdrop"))return!0;const t=Yc(n),e=n.shiftKey&&!n.deltaX,r=!e&&Math.abs(n.deltaX)<=Math.abs(n.deltaY),i=e||r?n.deltaY:n.deltaX;for(let o=0;o<t.length;o++){const a=t[o];if(yh(a,r))return r?i<0&&a.scrollTop===0?!0:i>0&&a.scrollTop+a.clientHeight===a.scrollHeight:i<0&&a.scrollLeft===0?!0:i>0&&a.scrollLeft+a.clientWidth===a.scrollWidth}return!0}function ea(n){n.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Tr(n){Bs!==!0&&(Bs=!0,requestAnimationFrame(()=>{Bs=!1;const{height:t}=n.target,{clientHeight:e,scrollTop:r}=document.scrollingElement;(Pn===void 0||t!==window.innerHeight)&&(Pn=e-t,document.scrollingElement.scrollTop=r),r>Pn&&(document.scrollingElement.scrollTop-=Math.ceil((r-Pn)/8))}))}function na(n){const t=document.body,e=window.visualViewport!==void 0;if(n==="add"){const{overflowY:r,overflowX:i}=window.getComputedStyle(t);Ls=gh(window),Fs=_h(window),Jo=t.style.left,Zo=t.style.top,ta=window.location.href,t.style.left=`-${Ls}px`,t.style.top=`-${Fs}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,Ot.is.ios===!0&&(e===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Tr,Re.passiveCapture),window.visualViewport.addEventListener("scroll",Tr,Re.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ea,Re.passiveCapture))}Ot.is.desktop===!0&&Ot.is.mac===!0&&window[`${n}EventListener`]("wheel",Nh,Re.notPassive),n==="remove"&&(Ot.is.ios===!0&&(e===!0?(window.visualViewport.removeEventListener("resize",Tr,Re.passiveCapture),window.visualViewport.removeEventListener("scroll",Tr,Re.passiveCapture)):window.removeEventListener("scroll",ea,Re.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Jo,t.style.top=Zo,window.location.href===ta&&window.scrollTo(Ls,Fs),Pn=void 0)}function Mh(n){let t="add";if(n===!0){if(bn++,Pe!==null){clearTimeout(Pe),Pe=null;return}if(bn>1)return}else{if(bn===0||(bn--,bn>0))return;if(t="remove",Ot.is.ios===!0&&Ot.is.nativeMobile===!0){Pe!==null&&clearTimeout(Pe),Pe=setTimeout(()=>{na(t),Pe=null},100);return}}na(t)}function Lh(){let n;return{preventBodyScroll(t){t!==n&&(n!==void 0||t===!0)&&(n=t,Mh(t))}}}const Ne=[];let Ye;function Fh(n){Ye=n.keyCode===27}function Bh(){Ye===!0&&(Ye=!1)}function qh(n){Ye===!0&&(Ye=!1,Al(n,27)===!0&&Ne[Ne.length-1](n))}function kl(n){window[n]("keydown",Fh),window[n]("blur",Bh),window[n]("keyup",qh),Ye=!1}function Uh(n){Ot.is.desktop===!0&&(Ne.push(n),Ne.length===1&&kl("addEventListener"))}function ra(n){const t=Ne.indexOf(n);t!==-1&&(Ne.splice(t,1),Ne.length===0&&kl("removeEventListener"))}const Oe=[];function Nl(n){Oe[Oe.length-1](n)}function $h(n){Ot.is.desktop===!0&&(Oe.push(n),Oe.length===1&&document.body.addEventListener("focusin",Nl))}function sa(n){const t=Oe.indexOf(n);t!==-1&&(Oe.splice(t,1),Oe.length===0&&document.body.removeEventListener("focusin",Nl))}let wr=0;const jh={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ia={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},zh=Bt({name:"QDialog",inheritAttrs:!1,props:{...Ih,...Vl,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:n=>["standard","top","bottom","left","right"].includes(n)}},emits:[...Ah,"shake","click","escapeKey"],setup(n,{slots:t,emit:e,attrs:r}){const i=Wt(),o=pt(null),a=pt(!1),u=pt(!1);let h=null,d=null,m,w;const T=z(()=>n.persistent!==!0&&n.noRouteDismiss!==!0&&n.seamless!==!0),{preventBodyScroll:S}=Lh(),{registerTimeout:P}=Pl(),{registerTick:k,removeTick:R}=wh(),{transitionProps:M,transitionStyle:x}=Dl(n,()=>ia[n.position][0],()=>ia[n.position][1]),B=z(()=>x.value+(n.backdropFilter!==void 0?`;backdrop-filter:${n.backdropFilter};-webkit-backdrop-filter:${n.backdropFilter}`:"")),{showPortal:H,hidePortal:lt,portalIsAccessible:Z,renderPortal:E}=kh(i,o,Ie,"dialog"),{hide:p}=Ch({showing:a,hideOnRouteChange:T,handleShow:J,handleHide:Et,processOnMount:!0}),{addToHistory:_,removeFromHistory:y}=Th(a,p,T),v=z(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${n.maximized===!0?"maximized":"minimized"} q-dialog__inner--${n.position} ${jh[n.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(n.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(n.fullHeight===!0?" q-dialog__inner--fullheight":"")+(n.square===!0?" q-dialog__inner--square":"")),I=z(()=>a.value===!0&&n.seamless!==!0),g=z(()=>n.autoClose===!0?{onClick:qt}:{}),F=z(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${I.value===!0?"modal":"seamless"}`,r.class]);zt(()=>n.maximized,X=>{a.value===!0&&hn(X)}),zt(I,X=>{S(X),X===!0?($h(dn),Uh(we)):(sa(dn),ra(we))});function J(X){_(),d=n.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,hn(n.maximized),H(),u.value=!0,n.noFocus!==!0?(document.activeElement?.blur(),k(Tt)):R(),P(()=>{if(i.proxy.$q.platform.is.ios===!0){if(n.seamless!==!0&&document.activeElement){const{top:it,bottom:re}=document.activeElement.getBoundingClientRect(),{innerHeight:er}=window,se=window.visualViewport!==void 0?window.visualViewport.height:er;it>0&&re>se/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-se,re>=er?1/0:Math.ceil(document.scrollingElement.scrollTop+re-se/2))),document.activeElement.scrollIntoView()}w=!0,o.value.click(),w=!1}H(!0),u.value=!1,e("show",X)},n.transitionDuration)}function Et(X){R(),y(),cn(!0),u.value=!0,lt(),d!==null&&(((X?.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),P(()=>{lt(!0),u.value=!1,e("hide",X)},n.transitionDuration)}function Tt(X){Sh(()=>{let it=o.value;if(it!==null){if(X!==void 0){const re=it.querySelector(X);if(re!==null){re.focus({preventScroll:!0});return}}it.contains(document.activeElement)!==!0&&(it=it.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||it.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||it.querySelector("[autofocus], [data-autofocus]")||it,it.focus({preventScroll:!0}))}})}function Xt(X){X&&typeof X.focus=="function"?X.focus({preventScroll:!0}):Tt(),e("shake");const it=o.value;it!==null&&(it.classList.remove("q-animate--scale"),it.classList.add("q-animate--scale"),h!==null&&clearTimeout(h),h=setTimeout(()=>{h=null,o.value!==null&&(it.classList.remove("q-animate--scale"),Tt())},170))}function we(){n.seamless!==!0&&(n.persistent===!0||n.noEscDismiss===!0?n.maximized!==!0&&n.noShake!==!0&&Xt():(e("escapeKey"),p()))}function cn(X){h!==null&&(clearTimeout(h),h=null),(X===!0||a.value===!0)&&(hn(!1),n.seamless!==!0&&(S(!1),sa(dn),ra(we))),X!==!0&&(d=null)}function hn(X){X===!0?m!==!0&&(wr<1&&document.body.classList.add("q-body--dialog"),wr++,m=!0):m===!0&&(wr<2&&document.body.classList.remove("q-body--dialog"),wr--,m=!1)}function qt(X){w!==!0&&(p(X),e("click",X))}function ft(X){n.persistent!==!0&&n.noBackdropDismiss!==!0?p(X):n.noShake!==!0&&Xt()}function dn(X){n.allowFocusOutside!==!0&&Z.value===!0&&Jc(o.value,X.target)!==!0&&Tt('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:Tt,shake:Xt,__updateRefocusTarget(X){d=X||null}}),Gn(cn);function Ie(){return j("div",{role:"dialog","aria-modal":I.value===!0?"true":"false",...r,class:F.value},[j(Lr,{name:"q-transition--fade",appear:!0},()=>I.value===!0?j("div",{class:"q-dialog__backdrop fixed-full",style:B.value,"aria-hidden":"true",tabindex:-1,onClick:ft}):null),j(Lr,M.value,()=>a.value===!0?j("div",{ref:o,class:v.value,style:x.value,tabindex:-1,...g.value},Ft(t.default)):null)])}return E}});function oa(n){if(n===!1)return 0;if(n===!0||n===void 0)return 1;const t=parseInt(n,10);return isNaN(t)?0:t}const Hh=Cl({name:"close-popup",beforeMount(n,{value:t}){const e={depth:oa(t),handler(r){e.depth!==0&&setTimeout(()=>{const i=Rh(n);i!==void 0&&Vh(i,r,e.depth)})},handlerKey(r){Al(r,13)===!0&&e.handler(r)}};n.__qclosepopup=e,n.addEventListener("click",e.handler),n.addEventListener("keyup",e.handlerKey)},updated(n,{value:t,oldValue:e}){t!==e&&(n.__qclosepopup.depth=oa(t))},beforeUnmount(n){const t=n.__qclosepopup;n.removeEventListener("click",t.handler),n.removeEventListener("keyup",t.handlerKey),delete n.__qclosepopup}}),Kh='<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',Qh=Bt({name:"QSpinnerDots",props:Zc,setup(n){const{cSize:t,classes:e}=th(n);return()=>j("svg",{class:e.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",innerHTML:Kh})}}),Gh=Bt({name:"QInnerLoading",props:{...Xr,...Vl,showing:Boolean,color:String,size:{type:[String,Number],default:"42px"},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(n,{slots:t}){const e=Wt(),r=Yr(n,e.proxy.$q),{transitionProps:i,transitionStyle:o}=Dl(n),a=z(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(r.value===!0?" q-inner-loading--dark":"")),u=z(()=>"q-inner-loading__label"+(n.labelClass!==void 0?` ${n.labelClass}`:""));function h(){const m=[j(eh,{size:n.size,color:n.color})];return n.label!==void 0&&m.push(j("div",{class:u.value,style:n.labelStyle},[n.label])),m}function d(){return n.showing===!0?j("div",{class:a.value,style:o.value},t.default!==void 0?t.default():h()):null}return()=>j(Lr,i.value,d)}}),Wh=Bt({name:"QBanner",props:{...Xr,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(n,{slots:t}){const{proxy:{$q:e}}=Wt(),r=Yr(n,e),i=z(()=>"q-banner row items-center"+(n.dense===!0?" q-banner--dense":"")+(r.value===!0?" q-banner--dark q-dark":"")+(n.rounded===!0?" rounded-borders":"")),o=z(()=>`q-banner__actions row items-center justify-end col-${n.inlineActions===!0?"auto":"all"}`);return()=>{const a=[j("div",{class:"q-banner__avatar col-auto row items-center self-start"},Ft(t.avatar)),j("div",{class:"q-banner__content col text-body2"},Ft(t.default))],u=Ft(t.action);return u!==void 0&&a.push(j("div",{class:o.value},u)),j("div",{class:i.value+(n.inlineActions===!1&&u!==void 0?" q-banner--top-padding":""),role:"alert"},a)}}}),Xh={key:0},Yh={key:0,class:"q-my-md"},Jh={key:0},Zh={class:"text-h6 q-mt-md text-secondary"},Ti=Xn({__name:"DataLoader",props:{error:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},emptyText:{default:"Нет доступных данных"},errorText:{default:"Произошла ошибка при загрузке данных"},loadingText:{default:""},fetchData:{type:Function,default:()=>Promise.resolve({})},dataKey:{default:""}},emits:["retry","data-loaded"],setup(n,{emit:t}){const e=n,r=t,i=pt(!1),o=pt(""),a=pt(null),u=async()=>{i.value=!0,o.value="";try{const d=await e.fetchData();a.value=e.dataKey!==""&&typeof d=="object"&&d!==null?d[e.dataKey]:d,r("data-loaded",a.value)}catch(d){o.value=d instanceof Error?d.message:"Произошла ошибка при загрузке данных"}finally{i.value=!1}},h=()=>{u(),r("retry")};return Wn(()=>{u()}),(d,m)=>(St(),Zt(Bn,null,[ct(Gh,{showing:d.loading||i.value},{default:_t(()=>[Lt("div",null,[vr(d.$slots,"loading",{},()=>[ct(Qh,{color:"primary",size:"40px"}),d.loadingText?(St(),Zt("div",Xh,te(d.$props.loadingText),1)):De("",!0)])])]),_:3},8,["showing"]),!(d.loading||i.value)&&(d.error||o.value)?(St(),Zt("div",Yh,[vr(d.$slots,"error",{},()=>[ct(Wh,{class:"bg-negative text-white",rounded:""},{avatar:_t(()=>[ct(Wo,{name:"error"})]),action:_t(()=>[ct(ce,{color:"white",label:"Попробовать снова",flat:"",onClick:h})]),default:_t(()=>[bl(" "+te(o.value||d.$props.errorText)+" ",1)]),_:1})])])):De("",!0),!(d.loading||i.value)&&!(d.error||o.value)?(St(),Zt(Bn,{key:1},[!d.$props.isEmpty&&(a.value||d.$slots.content)?vr(d.$slots,"content",{key:0,data:a.value},()=>[a.value?(St(),Zt("div",Jh,te(a.value),1)):De("",!0)]):vr(d.$slots,"empty",{key:1},()=>[ct(Ys,{class:"q-pa-md"},{default:_t(()=>[ct(Wo,{color:"grey-6",name:"o_info",size:"4em"}),Lt("div",Zh,te(d.$props.emptyText),1),ct(ce,{class:"q-mt-md",color:"primary",label:"Обновить",outline:"",onClick:h})]),_:1})])],64)):De("",!0)],64))}});function Ol(){return Ws(nh)}const td=()=>{const n=Ol();return{isMobile:z(()=>n.screen.lt.sm)}},ed=()=>{};var aa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},nd=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],u=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,m=o>>2,w=(o&3)<<4|u>>4;let T=(u&15)<<2|d>>6,S=d&63;h||(S=64,a||(T=64)),r.push(e[m],e[w],e[T],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ml(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):nd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||w==null)throw new rd;const T=o<<2|u>>4;if(r.push(T),d!==64){const S=u<<4&240|d>>2;if(r.push(S),w!==64){const P=d<<6&192|w;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sd=function(n){const t=Ml(n);return Ll.encodeByteArray(t,!0)},Fr=function(n){return sd(n).replace(/\./g,"")},id=function(n){try{return Ll.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=()=>od().__FIREBASE_DEFAULTS__,ld=()=>{if(typeof process>"u"||typeof aa>"u")return;const n=aa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ud=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&id(n[1]);return t&&JSON.parse(t)},wi=()=>{try{return ed()||ad()||ld()||ud()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cd=n=>{var t,e;return(e=(t=wi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},hd=n=>{const t=cd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Fl=()=>{var n;return(n=wi())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n){return n.endsWith(".cloudworkstations.dev")}async function fd(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fr(JSON.stringify(e)),Fr(JSON.stringify(a)),""].join(".")}const Nn={};function pd(){const n={prod:[],emulator:[]};for(const t of Object.keys(Nn))Nn[t]?n.emulator.push(t):n.prod.push(t);return n}function gd(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let la=!1;function _d(n,t){if(typeof window>"u"||typeof document>"u"||!Ii(window.location.host)||Nn[n]===t||Nn[n]||la)return;Nn[n]=t;function e(T){return`__firebase__banner__${T}`}const r="__firebase__banner",o=pd().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function u(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function h(T,S){T.setAttribute("width","24"),T.setAttribute("id",S),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{la=!0,a()},T}function m(T,S){T.setAttribute("id",S),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=gd(r),S=e("text"),P=document.getElementById(S)||document.createElement("span"),k=e("learnmore"),R=document.getElementById(k)||document.createElement("a"),M=e("preprendIcon"),x=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const B=T.element;u(B),m(R,k);const H=d();h(x,M),B.append(x,P,R,H),document.body.appendChild(B)}o?(P.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vd(){var n;const t=(n=wi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ed(){return!vd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Td(){try{return typeof indexedDB=="object"}catch{return!1}}function wd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="FirebaseError";class on extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Id,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bl.prototype.create)}}class Bl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Ad(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new on(i,u,r)}}function Ad(n,t){return n.replace(Cd,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Cd=/\{\$([^}]+)}/g;function Br(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(ua(o)&&ua(a)){if(!Br(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ua(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){return n&&n._delegate?n._delegate:n}class Un{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new dd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rd(t))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Ve){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ve){return this.instances.has(t)}getOptions(t=Ve){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ve){return this.component?this.component.multipleInstances?t:Ve:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sd(n){return n===Ve?void 0:n}function Rd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new bd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Vd={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Dd=Q.INFO,xd={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},kd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=xd[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ul{constructor(t){this.name=t,this._logLevel=Dd,this._logHandler=kd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const Nd=(n,t)=>t.some(e=>n instanceof e);let ca,ha;function Od(){return ca||(ca=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Md(){return ha||(ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $l=new WeakMap,Js=new WeakMap,jl=new WeakMap,qs=new WeakMap,Ai=new WeakMap;function Ld(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(he(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&$l.set(e,n)}).catch(()=>{}),Ai.set(t,n),t}function Fd(n){if(Js.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Js.set(n,t)}let Zs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Js.get(n);if(t==="objectStoreNames")return n.objectStoreNames||jl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return he(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Bd(n){Zs=n(Zs)}function qd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Us(this),t,...e);return jl.set(r,t.sort?t.sort():[t]),he(r)}:Md().includes(n)?function(...t){return n.apply(Us(this),t),he($l.get(this))}:function(...t){return he(n.apply(Us(this),t))}}function Ud(n){return typeof n=="function"?qd(n):(n instanceof IDBTransaction&&Fd(n),Nd(n,Od())?new Proxy(n,Zs):n)}function he(n){if(n instanceof IDBRequest)return Ld(n);if(qs.has(n))return qs.get(n);const t=Ud(n);return t!==n&&(qs.set(n,t),Ai.set(t,n)),t}const Us=n=>Ai.get(n);function $d(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),u=he(a);return r&&a.addEventListener("upgradeneeded",h=>{r(he(a.result),h.oldVersion,h.newVersion,he(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const jd=["get","getKey","getAll","getAllKeys","count"],zd=["put","add","delete","clear"],$s=new Map;function da(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if($s.get(t))return $s.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=zd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jd.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),i&&h.done]))[0]};return $s.set(t,o),o}Bd(n=>({...n,get:(t,e,r)=>da(t,e)||n.get(t,e,r),has:(t,e)=>!!da(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Kd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Kd(n){const t=n.getComponent();return t?.type==="VERSION"}const ti="@firebase/app",fa="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new Ul("@firebase/app"),Qd="@firebase/app-compat",Gd="@firebase/analytics-compat",Wd="@firebase/analytics",Xd="@firebase/app-check-compat",Yd="@firebase/app-check",Jd="@firebase/auth",Zd="@firebase/auth-compat",tf="@firebase/database",ef="@firebase/data-connect",nf="@firebase/database-compat",rf="@firebase/functions",sf="@firebase/functions-compat",of="@firebase/installations",af="@firebase/installations-compat",lf="@firebase/messaging",uf="@firebase/messaging-compat",cf="@firebase/performance",hf="@firebase/performance-compat",df="@firebase/remote-config",ff="@firebase/remote-config-compat",mf="@firebase/storage",pf="@firebase/storage-compat",gf="@firebase/firestore",_f="@firebase/ai",yf="@firebase/firestore-compat",vf="firebase",Ef="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]",Tf={[ti]:"fire-core",[Qd]:"fire-core-compat",[Wd]:"fire-analytics",[Gd]:"fire-analytics-compat",[Yd]:"fire-app-check",[Xd]:"fire-app-check-compat",[Jd]:"fire-auth",[Zd]:"fire-auth-compat",[tf]:"fire-rtdb",[ef]:"fire-data-connect",[nf]:"fire-rtdb-compat",[rf]:"fire-fn",[sf]:"fire-fn-compat",[of]:"fire-iid",[af]:"fire-iid-compat",[lf]:"fire-fcm",[uf]:"fire-fcm-compat",[cf]:"fire-perf",[hf]:"fire-perf-compat",[df]:"fire-rc",[ff]:"fire-rc-compat",[mf]:"fire-gcs",[pf]:"fire-gcs-compat",[gf]:"fire-fst",[yf]:"fire-fst-compat",[_f]:"fire-vertex","fire-js":"fire-js",[vf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Map,wf=new Map,ni=new Map;function ma(n,t){try{n.container.addComponent(t)}catch(e){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ur(n){const t=n.name;if(ni.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;ni.set(t,n);for(const e of qr.values())ma(e,n);for(const e of wf.values())ma(e,n);return!0}function If(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Af(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},de=new Bl("app","Firebase",Cf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=Ef;function zl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ei,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw de.create("bad-app-name",{appName:String(i)});if(e||(e=Fl()),!e)throw de.create("no-options");const o=qr.get(i);if(o){if(Br(e,o.options)&&Br(r,o.config))return o;throw de.create("duplicate-app",{appName:i})}const a=new Pd(i);for(const h of ni.values())a.addComponent(h);const u=new bf(e,r,a);return qr.set(i,u),u}function Rf(n=ei){const t=qr.get(n);if(!t&&n===ei&&Fl())return zl();if(!t)throw de.create("no-app",{appName:n});return t}function Ge(n,t,e){var r;let i=(r=Tf[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(u.join(" "));return}Ur(new Un(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="firebase-heartbeat-database",Vf=1,$n="firebase-heartbeat-store";let js=null;function Hl(){return js||(js=$d(Pf,Vf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore($n)}catch(e){console.warn(e)}}}}).catch(n=>{throw de.create("idb-open",{originalErrorMessage:n.message})})),js}async function Df(n){try{const e=(await Hl()).transaction($n),r=await e.objectStore($n).get(Kl(n));return await e.done,r}catch(t){if(t instanceof on)ee.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:t?.message});ee.warn(e.message)}}}async function pa(n,t){try{const r=(await Hl()).transaction($n,"readwrite");await r.objectStore($n).put(t,Kl(n)),await r.done}catch(e){if(e instanceof on)ee.warn(e.message);else{const r=de.create("idb-set",{originalErrorMessage:e?.message});ee.warn(r.message)}}}function Kl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=1024,kf=30;class Nf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Mf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ga();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>kf){const a=Lf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ee.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ga(),{heartbeatsToSend:r,unsentEntries:i}=Of(this._heartbeatsCache.heartbeats),o=Fr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ee.warn(e),""}}}function ga(){return new Date().toISOString().substring(0,10)}function Of(n,t=xf){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),_a(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),_a(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Mf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Td()?wd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Df(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return pa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return pa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function _a(n){return Fr(JSON.stringify({version:2,heartbeats:n})).length}function Lf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){Ur(new Un("platform-logger",t=>new Hd(t),"PRIVATE")),Ur(new Un("heartbeat",t=>new Nf(t),"PRIVATE")),Ge(ti,fa,n),Ge(ti,fa,"esm2017"),Ge("fire-js","")}Ff("");var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fe,Ql;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.D=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,v,I){for(var g=Array(arguments.length-2),F=2;F<arguments.length;F++)g[F-2]=arguments[F];return p.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],v=E.g[2];var I=E.g[3],g=p+(I^_&(v^I))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=I+(v^p&(_^v))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(_^I&(p^_))+y[2]+606105819&4294967295,v=I+(g<<17&4294967295|g>>>15),g=_+(p^v&(I^p))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(I^_&(v^I))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(v^p&(_^v))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(_^I&(p^_))+y[6]+2821735955&4294967295,v=I+(g<<17&4294967295|g>>>15),g=_+(p^v&(I^p))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(I^_&(v^I))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(v^p&(_^v))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(_^I&(p^_))+y[10]+4294925233&4294967295,v=I+(g<<17&4294967295|g>>>15),g=_+(p^v&(I^p))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(I^_&(v^I))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(v^p&(_^v))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(_^I&(p^_))+y[14]+2792965006&4294967295,v=I+(g<<17&4294967295|g>>>15),g=_+(p^v&(I^p))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(v^I&(_^v))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^v&(p^_))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(I^p))+y[11]+643717713&4294967295,v=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(v^I))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^I&(_^v))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^v&(p^_))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(I^p))+y[15]+3634488961&4294967295,v=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(v^I))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^I&(_^v))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^v&(p^_))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(I^p))+y[3]+4107603335&4294967295,v=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(v^I))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^I&(_^v))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^v&(p^_))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(I^p))+y[7]+1735328473&4294967295,v=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(v^I))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(_^v^I)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^v)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^_)+y[11]+1839030562&4294967295,v=I+(g<<16&4294967295|g>>>16),g=_+(v^I^p)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^I)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^v)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^_)+y[7]+4139469664&4294967295,v=I+(g<<16&4294967295|g>>>16),g=_+(v^I^p)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^I)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^v)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^_)+y[3]+3572445317&4294967295,v=I+(g<<16&4294967295|g>>>16),g=_+(v^I^p)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^I)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^v)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^_)+y[15]+530742520&4294967295,v=I+(g<<16&4294967295|g>>>16),g=_+(v^I^p)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(v^(_|~I))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~v))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~_))+y[14]+2878612391&4294967295,v=I+(g<<15&4294967295|g>>>17),g=_+(I^(v|~p))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~I))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~v))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~_))+y[10]+4293915773&4294967295,v=I+(g<<15&4294967295|g>>>17),g=_+(I^(v|~p))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~I))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~v))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~_))+y[6]+2734768916&4294967295,v=I+(g<<15&4294967295|g>>>17),g=_+(I^(v|~p))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~I))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~v))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~_))+y[2]+718787259&4294967295,v=I+(g<<15&4294967295|g>>>17),g=_+(I^(v|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var _=p-this.blockSize,y=this.B,v=this.h,I=0;I<p;){if(v==0)for(;I<=_;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<p;)if(y[v++]=E.charCodeAt(I++),v==this.blockSize){i(this,y),v=0;break}}else for(;I<p;)if(y[v++]=E[I++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var _=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=_&255,_/=256;for(this.u(E),E=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)E[_++]=this.g[p]>>>y&255;return E};function o(E,p){var _=u;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function a(E,p){this.h=p;for(var _=[],y=!0,v=E.length-1;0<=v;v--){var I=E[v]|0;y&&I==p||(_[v]=I,y=!1)}this.g=_}var u={};function h(E){return-128<=E&&128>E?o(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return R(d(-E));for(var p=[],_=1,y=0;E>=_;y++)p[y]=E/_|0,_*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return R(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),y=w,v=0;v<E.length;v+=8){var I=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+I),p);8>I?(I=d(Math.pow(p,I)),y=y.j(I).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var w=h(0),T=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-R(this).m();for(var E=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(k(this))return"-"+R(this).toString(E);for(var p=d(Math.pow(E,6)),_=this,y="";;){var v=H(_,p).g;_=M(_,v.j(p));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=v,P(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=M(this,E),k(E)?-1:P(E)?0:1};function R(E){for(var p=E.g.length,_=[],y=0;y<p;y++)_[y]=~E.g[y];return new a(_,~E.h).add(T)}n.abs=function(){return k(this)?R(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0,v=0;v<=p;v++){var I=y+(this.i(v)&65535)+(E.i(v)&65535),g=(I>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=g>>>16,I&=65535,g&=65535,_[v]=g<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function M(E,p){return E.add(R(p))}n.j=function(E){if(P(this)||P(E))return w;if(k(this))return k(E)?R(this).j(R(E)):R(R(this).j(E));if(k(E))return R(this.j(R(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var I=this.i(y)>>>16,g=this.i(y)&65535,F=E.i(v)>>>16,J=E.i(v)&65535;_[2*y+2*v]+=g*J,x(_,2*y+2*v),_[2*y+2*v+1]+=I*J,x(_,2*y+2*v+1),_[2*y+2*v+1]+=g*F,x(_,2*y+2*v+1),_[2*y+2*v+2]+=I*F,x(_,2*y+2*v+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function x(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function B(E,p){this.g=E,this.h=p}function H(E,p){if(P(p))throw Error("division by zero");if(P(E))return new B(w,w);if(k(E))return p=H(R(E),p),new B(R(p.g),R(p.h));if(k(p))return p=H(E,R(p)),new B(R(p.g),p.h);if(30<E.g.length){if(k(E)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var _=T,y=p;0>=y.l(E);)_=lt(_),y=lt(y);var v=Z(_,1),I=Z(y,1);for(y=Z(y,2),_=Z(_,2);!P(y);){var g=I.add(y);0>=g.l(E)&&(v=v.add(_),I=g),y=Z(y,1),_=Z(_,1)}return p=M(E,v.j(p)),new B(v,p)}for(v=w;0<=E.l(p);){for(_=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(_),g=I.j(p);k(g)||0<g.l(E);)_-=y,I=d(_),g=I.j(p);P(I)&&(I=T),v=v.add(I),E=M(E,g)}return new B(v,E)}n.A=function(E){return H(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&E.i(y);return new a(_,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|E.i(y);return new a(_,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^E.i(y);return new a(_,this.h^E.h)};function lt(E){for(var p=E.g.length+1,_=[],y=0;y<p;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(_,E.h)}function Z(E,p){var _=p>>5;p%=32;for(var y=E.g.length-_,v=[],I=0;I<y;I++)v[I]=0<p?E.i(I+_)>>>p|E.i(I+_+1)<<32-p:E.i(I+_);return new a(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ql=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,fe=a}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gl,Vn,Wl,Dr,ri,Xl,Yl,Jl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,c){return s==Array.prototype||s==Object.prototype||(s[l]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ir=="object"&&Ir];for(var l=0;l<s.length;++l){var c=s[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,l){if(l)t:{var c=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in c))break t;c=c[A]}s=s[s.length-1],f=c[s],l=l(f),l!=f&&l!=null&&t(c,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var c=0,f=!1,A={next:function(){if(!f&&c<s.length){var C=c++;return{value:l(C,s[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function m(s,l,c){return s.call.apply(s.bind,arguments)}function w(s,l,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),s.apply(l,A)}}return function(){return s.apply(l,arguments)}}function T(s,l,c){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:w,T.apply(null,arguments)}function S(s,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function P(s,l){function c(){}c.prototype=l.prototype,s.aa=l.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,A,C){for(var V=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)V[tt-2]=arguments[tt];return l.prototype[A].apply(f,V)}}function k(s){const l=s.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=s[f];return c}return[]}function R(s,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=s.length||0,C=f.length||0;s.length=A+C;for(let V=0;V<C;V++)s[A+V]=f[V]}else s.push(f)}}class M{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function x(s){return/^[\s\xa0]*$/.test(s)}function B(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function H(s){return H[" "](s),s}H[" "]=function(){};var lt=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function Z(s,l,c){for(const f in s)l.call(c,s[f],f,s)}function E(s,l){for(const c in s)l.call(void 0,s[c],c,s)}function p(s){const l={};for(const c in s)l[c]=s[c];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)s[c]=f[c];for(let C=0;C<_.length;C++)c=_[C],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function v(s){var l=1;s=s.split(":");const c=[];for(;0<l&&s.length;)c.push(s.shift()),l--;return s.length&&c.push(s.join(":")),c}function I(s){u.setTimeout(()=>{throw s},0)}function g(){var s=we;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class F{constructor(){this.h=this.g=null}add(l,c){const f=J.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var J=new M(()=>new Et,s=>s.reset());class Et{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Tt,Xt=!1,we=new F,cn=()=>{const s=u.Promise.resolve(void 0);Tt=()=>{s.then(hn)}};var hn=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){I(c)}var l=J;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}Xt=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var dn=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return s}();function Ie(s,l){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(lt){t:{try{H(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=s.fromElement:c=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:X[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ie.aa.h.call(this)}}P(Ie,ft);var X={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),re=0;function er(s,l,c,f,A){this.listener=s,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++re,this.da=this.fa=!1}function se(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function nr(s){this.src=s,this.g={},this.h=0}nr.prototype.add=function(s,l,c,f,A){var C=s.toString();s=this.g[C],s||(s=this.g[C]=[],this.h++);var V=ds(s,l,f,A);return-1<V?(l=s[V],c||(l.fa=!1)):(l=new er(l,this.src,C,!!f,A),l.fa=c,s.push(l)),l};function hs(s,l){var c=l.type;if(c in s.g){var f=s.g[c],A=Array.prototype.indexOf.call(f,l,void 0),C;(C=0<=A)&&Array.prototype.splice.call(f,A,1),C&&(se(l),s.g[c].length==0&&(delete s.g[c],s.h--))}}function ds(s,l,c,f){for(var A=0;A<s.length;++A){var C=s[A];if(!C.da&&C.listener==l&&C.capture==!!c&&C.ha==f)return A}return-1}var fs="closure_lm_"+(1e6*Math.random()|0),ms={};function Wi(s,l,c,f,A){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Wi(s,l[C],c,f,A);return null}return c=Ji(c),s&&s[it]?s.K(l,c,d(f)?!!f.capture:!1,A):hc(s,l,c,!1,f,A)}function hc(s,l,c,f,A,C){if(!l)throw Error("Invalid event type");var V=d(A)?!!A.capture:!!A,tt=gs(s);if(tt||(s[fs]=tt=new nr(s)),c=tt.add(l,c,f,V,C),c.proxy)return c;if(f=dc(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)dn||(A=V),A===void 0&&(A=!1),s.addEventListener(l.toString(),f,A);else if(s.attachEvent)s.attachEvent(Yi(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function dc(){function s(c){return l.call(s.src,s.listener,c)}const l=fc;return s}function Xi(s,l,c,f,A){if(Array.isArray(l))for(var C=0;C<l.length;C++)Xi(s,l[C],c,f,A);else f=d(f)?!!f.capture:!!f,c=Ji(c),s&&s[it]?(s=s.i,l=String(l).toString(),l in s.g&&(C=s.g[l],c=ds(C,c,f,A),-1<c&&(se(C[c]),Array.prototype.splice.call(C,c,1),C.length==0&&(delete s.g[l],s.h--)))):s&&(s=gs(s))&&(l=s.g[l.toString()],s=-1,l&&(s=ds(l,c,f,A)),(c=-1<s?l[s]:null)&&ps(c))}function ps(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[it])hs(l.i,s);else{var c=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(c,f,s.capture):l.detachEvent?l.detachEvent(Yi(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=gs(l))?(hs(c,s),c.h==0&&(c.src=null,l[fs]=null)):se(s)}}}function Yi(s){return s in ms?ms[s]:ms[s]="on"+s}function fc(s,l){if(s.da)s=!0;else{l=new Ie(l,this);var c=s.listener,f=s.ha||s.src;s.fa&&ps(s),s=c.call(f,l)}return s}function gs(s){return s=s[fs],s instanceof nr?s:null}var _s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ji(s){return typeof s=="function"?s:(s[_s]||(s[_s]=function(l){return s.handleEvent(l)}),s[_s])}function wt(){qt.call(this),this.i=new nr(this),this.M=this,this.F=null}P(wt,qt),wt.prototype[it]=!0,wt.prototype.removeEventListener=function(s,l,c,f){Xi(this,s,l,c,f)};function Pt(s,l){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new ft(l,s);else if(l instanceof ft)l.target=l.target||s;else{var A=l;l=new ft(f,s),y(l,A)}if(A=!0,c)for(var C=c.length-1;0<=C;C--){var V=l.g=c[C];A=rr(V,f,!0,l)&&A}if(V=l.g=s,A=rr(V,f,!0,l)&&A,A=rr(V,f,!1,l)&&A,c)for(C=0;C<c.length;C++)V=l.g=c[C],A=rr(V,f,!1,l)&&A}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var c=s.g[l],f=0;f<c.length;f++)se(c[f]);delete s.g[l],s.h--}}this.F=null},wt.prototype.K=function(s,l,c,f){return this.i.add(String(s),l,!1,c,f)},wt.prototype.L=function(s,l,c,f){return this.i.add(String(s),l,!0,c,f)};function rr(s,l,c,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,C=0;C<l.length;++C){var V=l[C];if(V&&!V.da&&V.capture==c){var tt=V.listener,gt=V.ha||V.src;V.fa&&hs(s.i,V),A=tt.call(gt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Zi(s,l,c){if(typeof s=="function")c&&(s=T(s,c));else if(s&&typeof s.handleEvent=="function")s=T(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(s,l||0)}function to(s){s.g=Zi(()=>{s.g=null,s.i&&(s.i=!1,to(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class mc extends qt{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:to(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fn(s){qt.call(this),this.h=s,this.g={}}P(fn,qt);var eo=[];function no(s){Z(s.g,function(l,c){this.g.hasOwnProperty(c)&&ps(l)},s),s.g={}}fn.prototype.N=function(){fn.aa.N.call(this),no(this)},fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ys=u.JSON.stringify,pc=u.JSON.parse,gc=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function vs(){}vs.prototype.h=null;function ro(s){return s.h||(s.h=s.i())}function so(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Es(){ft.call(this,"d")}P(Es,ft);function Ts(){ft.call(this,"c")}P(Ts,ft);var Ae={},io=null;function sr(){return io=io||new wt}Ae.La="serverreachability";function oo(s){ft.call(this,Ae.La,s)}P(oo,ft);function pn(s){const l=sr();Pt(l,new oo(l))}Ae.STAT_EVENT="statevent";function ao(s,l){ft.call(this,Ae.STAT_EVENT,s),this.stat=l}P(ao,ft);function Vt(s){const l=sr();Pt(l,new ao(l,s))}Ae.Ma="timingevent";function lo(s,l){ft.call(this,Ae.Ma,s),this.size=l}P(lo,ft);function gn(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},l)}function _n(){this.g=!0}_n.prototype.xa=function(){this.g=!1};function _c(s,l,c,f,A,C){s.info(function(){if(s.g)if(C)for(var V="",tt=C.split("&"),gt=0;gt<tt.length;gt++){var Y=tt[gt].split("=");if(1<Y.length){var It=Y[0];Y=Y[1];var At=It.split("_");V=2<=At.length&&At[1]=="type"?V+(It+"="+Y+"&"):V+(It+"=redacted&")}}else V=null;else V=C;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+V})}function yc(s,l,c,f,A,C,V){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+C+" "+V})}function Be(s,l,c,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ec(s,c)+(f?" "+f:"")})}function vc(s,l){s.info(function(){return"TIMEOUT: "+l})}_n.prototype.info=function(){};function Ec(s,l){if(!s.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return ys(c)}catch{return l}}var ir={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ws;function or(){}P(or,vs),or.prototype.g=function(){return new XMLHttpRequest},or.prototype.i=function(){return{}},ws=new or;function ie(s,l,c,f){this.j=s,this.i=l,this.l=c,this.R=f||1,this.U=new fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new co}function co(){this.i=null,this.g="",this.h=!1}var ho={},Is={};function As(s,l,c){s.L=1,s.v=cr(Yt(l)),s.m=c,s.P=!0,fo(s,null)}function fo(s,l){s.F=Date.now(),ar(s),s.A=Yt(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),So(c.i,"t",f),s.C=0,c=s.j.J,s.h=new co,s.g=Ho(s.j,c?l:null,!s.m),0<s.O&&(s.M=new mc(T(s.Y,s,s.g),s.O)),l=s.U,c=s.g,f=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(eo[0]=A.toString()),A=eo);for(var C=0;C<A.length;C++){var V=Wi(c,A[C],f||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),pn(),_c(s.i,s.u,s.A,s.l,s.R,s.m)}ie.prototype.ca=function(s){s=s.target;const l=this.M;l&&Jt(s)==3?l.j():this.Y(s)},ie.prototype.Y=function(s){try{if(s==this.g)t:{const At=Jt(this.g);var l=this.g.Ba();const $e=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||No(this.g)))){this.J||At!=4||l==7||(l==8||0>=$e?pn(3):pn(2)),Cs(this);var c=this.g.Z();this.X=c;e:if(mo(this)){var f=No(this.g);s="";var A=f.length,C=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ce(this),yn(this);var V="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(C&&l==A-1)});f.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=c==200,yc(this.i,this.u,this.A,this.l,this.R,At,c),this.o){if(this.T&&!this.K){e:{if(this.g){var tt,gt=this.g;if((tt=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(tt)){var Y=tt;break e}}Y=null}if(c=Y)Be(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bs(this,c);else{this.o=!1,this.s=3,Vt(12),Ce(this),yn(this);break t}}if(this.P){c=!0;let Mt;for(;!this.J&&this.C<V.length;)if(Mt=Tc(this,V),Mt==Is){At==4&&(this.s=4,Vt(14),c=!1),Be(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==ho){this.s=4,Vt(15),Be(this.i,this.l,V,"[Invalid Chunk]"),c=!1;break}else Be(this.i,this.l,Mt,null),bs(this,Mt);if(mo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||V.length!=0||this.h.h||(this.s=1,Vt(16),c=!1),this.o=this.o&&c,!c)Be(this.i,this.l,V,"[Invalid Chunked Response]"),Ce(this),yn(this);else if(0<V.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),xs(It),It.M=!0,Vt(11))}}else Be(this.i,this.l,V,null),bs(this,V);At==4&&Ce(this),this.o&&!this.J&&(At==4?Uo(this.j,this):(this.o=!1,ar(this)))}else Fc(this.g),c==400&&0<V.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),Ce(this),yn(this)}}}catch{}finally{}};function mo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Tc(s,l){var c=s.C,f=l.indexOf(`
`,c);return f==-1?Is:(c=Number(l.substring(c,f)),isNaN(c)?ho:(f+=1,f+c>l.length?Is:(l=l.slice(f,f+c),s.C=f+c,l)))}ie.prototype.cancel=function(){this.J=!0,Ce(this)};function ar(s){s.S=Date.now()+s.I,po(s,s.I)}function po(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=gn(T(s.ba,s),l)}function Cs(s){s.B&&(u.clearTimeout(s.B),s.B=null)}ie.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(vc(this.i,this.A),this.L!=2&&(pn(),Vt(17)),Ce(this),this.s=2,yn(this)):po(this,this.S-s)};function yn(s){s.j.G==0||s.J||Uo(s.j,s)}function Ce(s){Cs(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,no(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function bs(s,l){try{var c=s.j;if(c.G!=0&&(c.g==s||Ss(c.h,s))){if(!s.K&&Ss(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)gr(c),mr(c);else break t;Ds(c),Vt(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=gn(T(c.Za,c),6e3));if(1>=yo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Se(c,11)}else if((s.K||c.g==s)&&gr(c),!x(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let Y=A[l];if(c.T=Y[0],Y=Y[1],c.G==2)if(Y[0]=="c"){c.K=Y[1],c.ia=Y[2];const It=Y[3];It!=null&&(c.la=It,c.j.info("VER="+c.la));const At=Y[4];At!=null&&(c.Aa=At,c.j.info("SVER="+c.Aa));const $e=Y[5];$e!=null&&typeof $e=="number"&&0<$e&&(f=1.5*$e,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Mt=s.g;if(Mt){const yr=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yr){var C=f.h;C.g||yr.indexOf("spdy")==-1&&yr.indexOf("quic")==-1&&yr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Rs(C,C.h),C.h=null))}if(f.D){const ks=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;ks&&(f.ya=ks,et(f.I,f.D,ks))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var V=s;if(f.qa=zo(f,f.J?f.ia:null,f.W),V.K){vo(f.h,V);var tt=V,gt=f.L;gt&&(tt.I=gt),tt.B&&(Cs(tt),ar(tt)),f.g=V}else Bo(f);0<c.i.length&&pr(c)}else Y[0]!="stop"&&Y[0]!="close"||Se(c,7);else c.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Se(c,7):Vs(c):Y[0]!="noop"&&c.l&&c.l.ta(Y),c.v=0)}}pn(4)}catch{}}var wc=class{constructor(s,l){this.g=s,this.map=l}};function go(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _o(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function yo(s){return s.h?1:s.g?s.g.size:0}function Ss(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function Rs(s,l){s.g?s.g.add(l):s.h=l}function vo(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}go.prototype.cancel=function(){if(this.i=Eo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Eo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const c of s.g.values())l=l.concat(c.D);return l}return k(s.i)}function Ic(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],c=s.length,f=0;f<c;f++)l.push(s[f]);return l}l=[],c=0;for(f in s)l[c++]=s[f];return l}function Ac(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var c=0;c<s;c++)l.push(c);return l}l=[],c=0;for(const f in s)l[c++]=f;return l}}}function To(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var c=Ac(s),f=Ic(s),A=f.length,C=0;C<A;C++)l.call(void 0,f[C],c&&c[C],s)}var wo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cc(s,l){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),A=null;if(0<=f){var C=s[c].substring(0,f);A=s[c].substring(f+1)}else C=s[c];l(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function be(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof be){this.h=s.h,lr(this,s.j),this.o=s.o,this.g=s.g,ur(this,s.s),this.l=s.l;var l=s.i,c=new Tn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Io(this,c),this.m=s.m}else s&&(l=String(s).match(wo))?(this.h=!1,lr(this,l[1]||"",!0),this.o=vn(l[2]||""),this.g=vn(l[3]||"",!0),ur(this,l[4]),this.l=vn(l[5]||"",!0),Io(this,l[6]||"",!0),this.m=vn(l[7]||"")):(this.h=!1,this.i=new Tn(null,this.h))}be.prototype.toString=function(){var s=[],l=this.j;l&&s.push(En(l,Ao,!0),":");var c=this.g;return(c||l=="file")&&(s.push("//"),(l=this.o)&&s.push(En(l,Ao,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(En(c,c.charAt(0)=="/"?Rc:Sc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",En(c,Vc)),s.join("")};function Yt(s){return new be(s)}function lr(s,l,c){s.j=c?vn(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function ur(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Io(s,l,c){l instanceof Tn?(s.i=l,Dc(s.i,s.h)):(c||(l=En(l,Pc)),s.i=new Tn(l,s.h))}function et(s,l,c){s.i.set(l,c)}function cr(s){return et(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function vn(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function En(s,l,c){return typeof s=="string"?(s=encodeURI(s).replace(l,bc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function bc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ao=/[#\/\?@]/g,Sc=/[#\?:]/g,Rc=/[#\?]/g,Pc=/[#\?@]/g,Vc=/#/g;function Tn(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function oe(s){s.g||(s.g=new Map,s.h=0,s.i&&Cc(s.i,function(l,c){s.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=Tn.prototype,n.add=function(s,l){oe(this),this.i=null,s=qe(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(l),this.h+=1,this};function Co(s,l){oe(s),l=qe(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function bo(s,l){return oe(s),l=qe(s,l),s.g.has(l)}n.forEach=function(s,l){oe(this),this.g.forEach(function(c,f){c.forEach(function(A){s.call(l,A,f,this)},this)},this)},n.na=function(){oe(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=s[f];for(let C=0;C<A.length;C++)c.push(l[f])}return c},n.V=function(s){oe(this);let l=[];if(typeof s=="string")bo(this,s)&&(l=l.concat(this.g.get(qe(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)l=l.concat(s[c])}return l},n.set=function(s,l){return oe(this),this.i=null,s=qe(this,s),bo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function So(s,l,c){Co(s,l),0<c.length&&(s.i=null,s.g.set(qe(s,l),k(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const C=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var A=C;V[f]!==""&&(A+="="+encodeURIComponent(String(V[f]))),s.push(A)}}return this.i=s.join("&")};function qe(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function Dc(s,l){l&&!s.j&&(oe(s),s.i=null,s.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(Co(this,f),So(this,A,c))},s)),s.j=l}function xc(s,l){const c=new _n;if(u.Image){const f=new Image;f.onload=S(ae,c,"TestLoadImage: loaded",!0,l,f),f.onerror=S(ae,c,"TestLoadImage: error",!1,l,f),f.onabort=S(ae,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(ae,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function kc(s,l){const c=new _n,f=new AbortController,A=setTimeout(()=>{f.abort(),ae(c,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(C=>{clearTimeout(A),C.ok?ae(c,"TestPingServer: ok",!0,l):ae(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),ae(c,"TestPingServer: error",!1,l)})}function ae(s,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function Nc(){this.g=new gc}function Oc(s,l,c){const f=c||"";try{To(s,function(A,C){let V=A;d(A)&&(V=ys(A)),l.push(f+C+"="+encodeURIComponent(V))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function hr(s){this.l=s.Ub||null,this.j=s.eb||!1}P(hr,vs),hr.prototype.g=function(){return new dr(this.l,this.j)},hr.prototype.i=function(s){return function(){return s}}({});function dr(s,l){wt.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(dr,wt),n=dr.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,In(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ro(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ro(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?wn(this):In(this),this.readyState==3&&Ro(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,wn(this))},n.Qa=function(s){this.g&&(this.response=s,wn(this))},n.ga=function(){this.g&&wn(this)};function wn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,In(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=l.next();return s.join(`\r
`)};function In(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(dr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Po(s){let l="";return Z(s,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function Ps(s,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=Po(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):et(s,l,c))}function st(s){wt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(st,wt);var Mc=/^https?$/i,Lc=["POST","PUT"];n=st.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ws.g(),this.v=this.o?ro(this.o):ro(ws),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(C){Vo(this,C);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())c.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(C=>C.toLowerCase()=="content-type"),A=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Lc,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,V]of c)this.g.setRequestHeader(C,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ko(this),this.u=!0,this.g.send(s),this.u=!1}catch(C){Vo(this,C)}};function Vo(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Do(s),fr(s)}function Do(s){s.A||(s.A=!0,Pt(s,"complete"),Pt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Pt(this,"complete"),Pt(this,"abort"),fr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fr(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xo(this):this.bb())},n.bb=function(){xo(this)};function xo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Jt(s)!=4||s.Z()!=2)){if(s.u&&Jt(s)==4)Zi(s.Ea,0,s);else if(Pt(s,"readystatechange"),Jt(s)==4){s.h=!1;try{const V=s.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=V===0){var A=String(s.D).match(wo)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!Mc.test(A?A.toLowerCase():"")}c=f}if(c)Pt(s,"complete"),Pt(s,"success");else{s.m=6;try{var C=2<Jt(s)?s.g.statusText:""}catch{C=""}s.l=C+" ["+s.Z()+"]",Do(s)}}finally{fr(s)}}}}function fr(s,l){if(s.g){ko(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Pt(s,"ready");try{c.onreadystatechange=f}catch{}}}function ko(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Jt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),pc(l)}};function No(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Fc(s){const l={};s=(s.g&&2<=Jt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(x(s[f]))continue;var c=v(s[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const C=l[A]||[];l[A]=C,C.push(c)}E(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function An(s,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||l}function Oo(s){this.Aa=0,this.i=[],this.j=new _n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=An("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=An("baseRetryDelayMs",5e3,s),this.cb=An("retryDelaySeedMs",1e4,s),this.Wa=An("forwardChannelMaxRetries",2,s),this.wa=An("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new go(s&&s.concurrentRequestLimit),this.Da=new Nc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oo.prototype,n.la=8,n.G=1,n.connect=function(s,l,c,f){Vt(0),this.W=s,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=zo(this,null,this.W),pr(this)};function Vs(s){if(Mo(s),s.G==3){var l=s.U++,c=Yt(s.I);if(et(c,"SID",s.K),et(c,"RID",l),et(c,"TYPE","terminate"),Cn(s,c),l=new ie(s,s.j,l),l.L=2,l.v=cr(Yt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Ho(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ar(l)}jo(s)}function mr(s){s.g&&(xs(s),s.g.cancel(),s.g=null)}function Mo(s){mr(s),s.u&&(u.clearTimeout(s.u),s.u=null),gr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function pr(s){if(!_o(s.h)&&!s.s){s.s=!0;var l=s.Ga;Tt||cn(),Xt||(Tt(),Xt=!0),we.add(l,s),s.B=0}}function Bc(s,l){return yo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=gn(T(s.Ga,s,l),$o(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new ie(this,this.j,s);let C=this.o;if(this.S&&(C?(C=p(C),y(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=Fo(this,A,l),c=Yt(this.I),et(c,"RID",s),et(c,"CVER",22),this.D&&et(c,"X-HTTP-Session-Id",this.D),Cn(this,c),C&&(this.O?l="headers="+encodeURIComponent(String(Po(C)))+"&"+l:this.m&&Ps(c,this.m,C)),Rs(this.h,A),this.Ua&&et(c,"TYPE","init"),this.P?(et(c,"$req",l),et(c,"SID","null"),A.T=!0,As(A,c,null)):As(A,c,l),this.G=2}}else this.G==3&&(s?Lo(this,s):this.i.length==0||_o(this.h)||Lo(this))};function Lo(s,l){var c;l?c=l.l:c=s.U++;const f=Yt(s.I);et(f,"SID",s.K),et(f,"RID",c),et(f,"AID",s.T),Cn(s,f),s.m&&s.o&&Ps(f,s.m,s.o),c=new ie(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Fo(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Rs(s.h,c),As(c,f,l)}function Cn(s,l){s.H&&Z(s.H,function(c,f){et(l,f,c)}),s.l&&To({},function(c,f){et(l,f,c)})}function Fo(s,l,c){c=Math.min(s.i.length,c);var f=s.l?T(s.l.Na,s.l,s):null;t:{var A=s.i;let C=-1;for(;;){const V=["count="+c];C==-1?0<c?(C=A[0].g,V.push("ofs="+C)):C=0:V.push("ofs="+C);let tt=!0;for(let gt=0;gt<c;gt++){let Y=A[gt].g;const It=A[gt].map;if(Y-=C,0>Y)C=Math.max(0,A[gt].g-100),tt=!1;else try{Oc(It,V,"req"+Y+"_")}catch{f&&f(It)}}if(tt){f=V.join("&");break t}}}return s=s.i.splice(0,c),l.D=s,f}function Bo(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;Tt||cn(),Xt||(Tt(),Xt=!0),we.add(l,s),s.v=0}}function Ds(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=gn(T(s.Fa,s),$o(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,qo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=gn(T(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),mr(this),qo(this))};function xs(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function qo(s){s.g=new ie(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Yt(s.qa);et(l,"RID","rpc"),et(l,"SID",s.K),et(l,"AID",s.T),et(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&et(l,"TO",s.ja),et(l,"TYPE","xmlhttp"),Cn(s,l),s.m&&s.o&&Ps(l,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=cr(Yt(l)),c.m=null,c.P=!0,fo(c,s)}n.Za=function(){this.C!=null&&(this.C=null,mr(this),Ds(this),Vt(19))};function gr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Uo(s,l){var c=null;if(s.g==l){gr(s),xs(s),s.g=null;var f=2}else if(Ss(s.h,l))c=l.D,vo(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=s.B;f=sr(),Pt(f,new lo(f,c)),pr(s)}else Bo(s);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Bc(s,l)||f==2&&Ds(s)))switch(c&&0<c.length&&(l=s.h,l.i=l.i.concat(c)),A){case 1:Se(s,5);break;case 4:Se(s,10);break;case 3:Se(s,6);break;default:Se(s,2)}}}function $o(s,l){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*l}function Se(s,l){if(s.j.info("Error code "+l),l==2){var c=T(s.fb,s),f=s.Xa;const A=!f;f=new be(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||lr(f,"https"),cr(f),A?xc(f.toString(),c):kc(f.toString(),c)}else Vt(2);s.G=0,s.l&&s.l.sa(l),jo(s),Mo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function jo(s){if(s.G=0,s.ka=[],s.l){const l=Eo(s.h);(l.length!=0||s.i.length!=0)&&(R(s.ka,l),R(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function zo(s,l,c){var f=c instanceof be?Yt(c):new be(c);if(f.g!="")l&&(f.g=l+"."+f.g),ur(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var C=new be(null);f&&lr(C,f),l&&(C.g=l),A&&ur(C,A),c&&(C.l=c),f=C}return c=s.D,l=s.ya,c&&l&&et(f,c,l),et(f,"VER",s.la),Cn(s,f),f}function Ho(s,l,c){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new st(new hr({eb:c})):new st(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ko(){}n=Ko.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _r(){}_r.prototype.g=function(s,l){return new Nt(s,l)};function Nt(s,l){wt.call(this),this.g=new Oo(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!x(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!x(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new Ue(this)}P(Nt,wt),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Vs(this.g)},Nt.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=ys(s),s=c);l.i.push(new wc(l.Ya++,s)),l.G==3&&pr(l)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Vs(this.g),delete this.g,Nt.aa.N.call(this)};function Qo(s){Es.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){t:{for(const c in l){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}P(Qo,Es);function Go(){Ts.call(this),this.status=1}P(Go,Ts);function Ue(s){this.g=s}P(Ue,Ko),Ue.prototype.ua=function(){Pt(this.g,"a")},Ue.prototype.ta=function(s){Pt(this.g,new Qo(s))},Ue.prototype.sa=function(s){Pt(this.g,new Go)},Ue.prototype.ra=function(){Pt(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Jl=function(){return new _r},Yl=function(){return sr()},Xl=Ae,ri={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ir.NO_ERROR=0,ir.TIMEOUT=8,ir.HTTP_ERROR=6,Dr=ir,uo.COMPLETE="complete",Wl=uo,so.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",wt.prototype.listen=wt.prototype.K,Vn=so,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,Gl=st}).apply(typeof Ir<"u"?Ir:typeof self<"u"?self:typeof window<"u"?window:{});const va="@firebase/firestore",Ea="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new Ul("@firebase/firestore");function ze(){return Le.logLevel}function N(n,...t){if(Le.logLevel<=Q.DEBUG){const e=t.map(Ci);Le.debug(`Firestore (${an}): ${n}`,...e)}}function ne(n,...t){if(Le.logLevel<=Q.ERROR){const e=t.map(Ci);Le.error(`Firestore (${an}): ${n}`,...e)}}function Je(n,...t){if(Le.logLevel<=Q.WARN){const e=t.map(Ci);Le.warn(`Firestore (${an}): ${n}`,...e)}}function Ci(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Zl(n,r,e)}function Zl(n,t,e){let r=`FIRESTORE (${an}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw ne(r),new Error(r)}function rt(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Zl(t,i,r)}function G(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends on{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(bt.UNAUTHENTICATED))}shutdown(){}}class qf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Uf{constructor(t){this.t=t,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){rt(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new me;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new me,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new me)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string",31837,{l:r}),new tu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string",2055,{h:t}),new bt(t)}}class $f{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jf{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new $f(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ta{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Af(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){rt(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ta(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(rt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ta(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Hf(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function si(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return $(r,i);{const o=eu(),a=Kf(o.encode(wa(n,e)),o.encode(wa(t,e)));return a!==0?a:$(r,i)}}e+=r>65535?2:1}return $(n.length,t.length)}function wa(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Kf(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return $(n[e],t[e]);return $(n.length,t.length)}function Ze(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=-62135596800,Aa=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(t){return kt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Aa);return new kt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ia)throw new O(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Aa}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Ia;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(t){return new q(t)}static min(){return new q(new kt(0,0))}static max(){return new q(new kt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="__name__";class Ut{constructor(t,e,r){e===void 0?e=0:e>t.length&&U(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&U(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ut.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ut?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Ut.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return $(t.length,e.length)}static compareSegments(t,e){const r=Ut.isNumericId(t),i=Ut.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Ut.extractNumericId(t).compare(Ut.extractNumericId(e)):si(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return fe.fromString(t.substring(4,t.length-2))}}class nt extends Ut{construct(t,e,r){return new nt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new nt(e)}static emptyPath(){return new nt([])}}const Qf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Ut{construct(t,e,r){return new Dt(t,e,r)}static isValidIdentifier(t){return Qf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ca}static keyField(){return new Dt([Ca])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new O(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new O(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Dt(e)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(nt.fromString(t))}static fromName(t){return new L(nt.fromString(t).popFirst(5))}static empty(){return new L(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new nt(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=-1;function Gf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new kt(e+1,0):new kt(e,r));return new ge(i,L.empty(),t)}function Wf(n){return new ge(n.readTime,n.key,jn)}class ge{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ge(q.min(),L.empty(),jn)}static max(){return new ge(q.max(),L.empty(),jn)}}function Xf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Yf)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,r)=>{e(t)})}static reject(t){return new b((e,r)=>{r(t)})}static waitFor(t){return new b((e,r)=>{let i=0,o=0,a=!1;t.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next(i=>i?b.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new b((r,i)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>i(m))}})}static doWhile(t,e){return new b((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Zf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Zr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=-1;function ts(n){return n==null}function ii(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="";function em(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ba(t)),t=nm(n.get(e),t);return ba(t)}function nm(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case ru:e+="";break;default:e+=o}}return e}function ba(n){return n+ru+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Yn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function rm(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e){this.comparator=t,this.root=e||yt.EMPTY}insert(t,e){return new at(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(t){return new at(this.comparator,this.root.remove(t,this.comparator).copy(null,null,yt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ar(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ar(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ar(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ar(this.root,t,this.comparator,!0)}}class Ar{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class yt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??yt.RED,this.left=i??yt.EMPTY,this.right=o??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new yt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw U(27949);return t+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.comparator=t,this.data=new at(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ra(this.data.getIterator())}getIteratorFrom(t){return new Ra(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class Ra{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.fields=t,t.sort(Dt.comparator)}static empty(){return new le([])}unionWith(t){let e=new dt(Dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new le(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ze(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new su("Invalid base64 string: "+o):o}}(t);return new vt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const sm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _e(n){if(rt(!!n,39018),typeof n=="string"){let t=0;const e=sm.exec(n);if(rt(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ye(n){return typeof n=="string"?vt.fromBase64String(n):vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="server_timestamp",ou="__type__",au="__previous_value__",lu="__local_write_time__";function bi(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[ou])===null||e===void 0?void 0:e.stringValue)===iu}function es(n){const t=n.mapValue.fields[au];return bi(t)?es(t):t}function zn(n){const t=_e(n.mapValue.fields[lu].timestampValue);return new kt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t,e,r,i,o,a,u,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const $r="(default)";class Hn{constructor(t,e){this.projectId=t,this.database=e||$r}static empty(){return new Hn("","")}get isDefaultDatabase(){return this.database===$r}isEqual(t){return t instanceof Hn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="__type__",am="__max__",Cr={mapValue:{}},lm="__vector__",oi="value";function ve(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bi(n)?4:cm(n)?9007199254740991:um(n)?10:11:U(28295,{value:n})}function Qt(n,t){if(n===t)return!0;const e=ve(n);if(e!==ve(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return zn(n).isEqual(zn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=_e(i.timestampValue),u=_e(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return ye(i.bytesValue).isEqual(ye(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return ot(i.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ot(i.integerValue)===ot(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ot(i.doubleValue),u=ot(o.doubleValue);return a===u?ii(a)===ii(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Ze(n.arrayValue.values||[],t.arrayValue.values||[],Qt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Sa(a)!==Sa(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Qt(a[h],u[h])))return!1;return!0}(n,t);default:return U(52216,{left:n})}}function Kn(n,t){return(n.values||[]).find(e=>Qt(e,t))!==void 0}function tn(n,t){if(n===t)return 0;const e=ve(n),r=ve(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=ot(o.integerValue||o.doubleValue),h=ot(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Pa(n.timestampValue,t.timestampValue);case 4:return Pa(zn(n),zn(t));case 5:return si(n.stringValue,t.stringValue);case 6:return function(o,a){const u=ye(o),h=ye(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=$(u[d],h[d]);if(m!==0)return m}return $(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=$(ot(o.latitude),ot(a.latitude));return u!==0?u:$(ot(o.longitude),ot(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Va(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,m;const w=o.fields||{},T=a.fields||{},S=(u=w[oi])===null||u===void 0?void 0:u.arrayValue,P=(h=T[oi])===null||h===void 0?void 0:h.arrayValue,k=$(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((m=P?.values)===null||m===void 0?void 0:m.length)||0);return k!==0?k:Va(S,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Cr.mapValue&&a===Cr.mapValue)return 0;if(o===Cr.mapValue)return 1;if(a===Cr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let w=0;w<h.length&&w<m.length;++w){const T=si(h[w],m[w]);if(T!==0)return T;const S=tn(u[h[w]],d[m[w]]);if(S!==0)return S}return $(h.length,m.length)}(n.mapValue,t.mapValue);default:throw U(23264,{Pe:e})}}function Pa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=_e(n),r=_e(t),i=$(e.seconds,r.seconds);return i!==0?i:$(e.nanos,r.nanos)}function Va(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=tn(e[i],r[i]);if(o)return o}return $(e.length,r.length)}function en(n){return ai(n)}function ai(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=_e(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ye(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return L.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ai(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ai(e.fields[a])}`;return i+"}"}(n.mapValue):U(61005,{value:n})}function xr(n){switch(ve(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=es(n);return t?16+xr(t):16;case 5:return 2*n.stringValue.length;case 6:return ye(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+xr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Yn(r.fields,(o,a)=>{i+=o.length+xr(a)}),i}(n.mapValue);default:throw U(13486,{value:n})}}function li(n){return!!n&&"integerValue"in n}function Si(n){return!!n&&"arrayValue"in n}function Da(n){return!!n&&"nullValue"in n}function xa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function zs(n){return!!n&&"mapValue"in n}function um(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[om])===null||e===void 0?void 0:e.stringValue)===lm}function On(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Yn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=On(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=On(n.arrayValue.values[e]);return t}return Object.assign({},n)}function cm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===am}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.value=t}static empty(){return new jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!zs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=On(e)}setAll(t){let e=Dt.emptyPath(),r={},i=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=u.popLast()}a?r[u.lastSegment()]=On(a):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());zs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];zs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Yn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new jt(On(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,r,i,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Rt(t,0,q.min(),q.min(),q.min(),jt.empty(),0)}static newFoundDocument(t,e,r,i){return new Rt(t,1,e,q.min(),r,i,0)}static newNoDocument(t,e){return new Rt(t,2,e,q.min(),q.min(),jt.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,q.min(),q.min(),jt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e){this.position=t,this.inclusive=e}}function ka(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),e.key):r=tn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Na(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Qt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e="asc"){this.field=t,this.dir=e}}function hm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{}class ht extends uu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new fm(t,e,r):e==="array-contains"?new gm(t,r):e==="in"?new _m(t,r):e==="not-in"?new ym(t,r):e==="array-contains-any"?new vm(t,r):new ht(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new mm(t,r):new pm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(tn(e,this.value)):e!==null&&ve(this.value)===ve(e)&&this.matchesComparison(tn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends uu{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Gt(t,e)}matches(t){return cu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function cu(n){return n.op==="and"}function hu(n){return dm(n)&&cu(n)}function dm(n){for(const t of n.filters)if(t instanceof Gt)return!1;return!0}function ui(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+en(n.value);if(hu(n))return n.filters.map(t=>ui(t)).join(",");{const t=n.filters.map(e=>ui(e)).join(",");return`${n.op}(${t})`}}function du(n,t){return n instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&Qt(r.value,i.value)}(n,t):n instanceof Gt?function(r,i){return i instanceof Gt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&du(a,i.filters[u]),!0):!1}(n,t):void U(19439)}function fu(n){return n instanceof ht?function(e){return`${e.field.canonicalString()} ${e.op} ${en(e.value)}`}(n):n instanceof Gt?function(e){return e.op.toString()+" {"+e.getFilters().map(fu).join(" ,")+"}"}(n):"Filter"}class fm extends ht{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class mm extends ht{constructor(t,e){super(t,"in",e),this.keys=mu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class pm extends ht{constructor(t,e){super(t,"not-in",e),this.keys=mu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function mu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>L.fromName(r.referenceValue))}class gm extends ht{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Si(e)&&Kn(e.arrayValue,this.value)}}class _m extends ht{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Kn(this.value.arrayValue,e)}}class ym extends ht{constructor(t,e){super(t,"not-in",e)}matches(t){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Kn(this.value.arrayValue,e)}}class vm extends ht{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Si(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Kn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t,e=null,r=[],i=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.Ie=null}}function Oa(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Em(n,t,e,r,i,o,a)}function Ri(n){const t=G(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ui(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ts(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>en(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>en(r)).join(",")),t.Ie=e}return t.Ie}function Pi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!hm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!du(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Na(n.startAt,t.startAt)&&Na(n.endAt,t.endAt)}function ci(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Tm(n,t,e,r,i,o,a,u){return new ns(n,t,e,r,i,o,a,u)}function Vi(n){return new ns(n)}function Ma(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wm(n){return n.collectionGroup!==null}function Mn(n){const t=G(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new dt(Dt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new zr(o,r))}),e.has(Dt.keyField().canonicalString())||t.Ee.push(new zr(Dt.keyField(),r))}return t.Ee}function Ht(n){const t=G(n);return t.de||(t.de=Im(t,Mn(n))),t.de}function Im(n,t){if(n.limitType==="F")return Oa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new zr(i.field,o)});const e=n.endAt?new jr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new jr(n.startAt.position,n.startAt.inclusive):null;return Oa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function hi(n,t,e){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function rs(n,t){return Pi(Ht(n),Ht(t))&&n.limitType===t.limitType}function pu(n){return`${Ri(Ht(n))}|lt:${n.limitType}`}function He(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>fu(i)).join(", ")}]`),ts(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>en(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>en(i)).join(",")),`Target(${r})`}(Ht(n))}; limitType=${n.limitType})`}function ss(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Mn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,u,h){const d=ka(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Mn(r),i)||r.endAt&&!function(a,u,h){const d=ka(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Mn(r),i))}(n,t)}function Am(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gu(n){return(t,e)=>{let r=!1;for(const i of Mn(n)){const o=Cm(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Cm(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?tn(h,d):U(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Yn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return rm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=new at(L.comparator);function Ee(){return bm}const _u=new at(L.comparator);function Dn(...n){let t=_u;for(const e of n)t=t.insert(e.key,e);return t}function Sm(n){let t=_u;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function xe(){return Ln()}function yu(){return Ln()}function Ln(){return new Fe(n=>n.toString(),(n,t)=>n.isEqual(t))}const Rm=new dt(L.comparator);function W(...n){let t=Rm;for(const e of n)t=t.add(e);return t}const Pm=new dt($);function Vm(){return Pm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ii(t)?"-0":t}}function xm(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this._=void 0}}function km(n,t,e){return n instanceof di?function(i,o){const a={fields:{[ou]:{stringValue:iu},[lu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&bi(o)&&(o=es(o)),o&&(a.fields[au]=o),{mapValue:a}}(e,t):n instanceof Hr?vu(n,t):n instanceof Kr?Eu(n,t):function(i,o){const a=Om(i,o),u=La(a)+La(i.Re);return li(a)&&li(i.Re)?xm(u):Dm(i.serializer,u)}(n,t)}function Nm(n,t,e){return n instanceof Hr?vu(n,t):n instanceof Kr?Eu(n,t):e}function Om(n,t){return n instanceof fi?function(r){return li(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class di extends is{}class Hr extends is{constructor(t){super(),this.elements=t}}function vu(n,t){const e=Tu(t);for(const r of n.elements)e.some(i=>Qt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Kr extends is{constructor(t){super(),this.elements=t}}function Eu(n,t){let e=Tu(t);for(const r of n.elements)e=e.filter(i=>!Qt(i,r));return{arrayValue:{values:e}}}class fi extends is{constructor(t,e){super(),this.serializer=t,this.Re=e}}function La(n){return ot(n.integerValue||n.doubleValue)}function Tu(n){return Si(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Mm(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Hr&&i instanceof Hr||r instanceof Kr&&i instanceof Kr?Ze(r.elements,i.elements,Qt):r instanceof fi&&i instanceof fi?Qt(r.Re,i.Re):r instanceof di&&i instanceof di}(n.transform,t.transform)}class Me{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Me}static exists(t){return new Me(void 0,t)}static updateTime(t){return new Me(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Di{}function wu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Fm(n.key,Me.none()):new xi(n.key,n.data,Me.none());{const e=n.data,r=jt.empty();let i=new dt(Dt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new os(n.key,r,new le(i.toArray()),Me.none())}}function Lm(n,t,e){n instanceof xi?function(i,o,a){const u=i.value.clone(),h=Ba(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof os?function(i,o,a){if(!kr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ba(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Iu(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Fn(n,t,e,r){return n instanceof xi?function(o,a,u,h){if(!kr(o.precondition,a))return u;const d=o.value.clone(),m=qa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof os?function(o,a,u,h){if(!kr(o.precondition,a))return u;const d=qa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Iu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,a,u){return kr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Fa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ze(r,i,(o,a)=>Mm(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class xi extends Di{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class os extends Di{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Iu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ba(n,t,e){const r=new Map;rt(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,u=t.data.field(o.field);r.set(o.field,Nm(a,u,e[i]))}return r}function qa(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,km(o,a,t))}return r}class Fm extends Di{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Lm(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=yu();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(i.key)?null:u;const h=wu(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&Ze(this.mutations,t.mutations,(e,r)=>Fa(e,r))&&Ze(this.baseMutations,t.baseMutations,(e,r)=>Fa(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,K;function Au(n){if(n===void 0)return ne("GRPC error has no .code"),D.UNKNOWN;switch(n){case ut.OK:return D.OK;case ut.CANCELLED:return D.CANCELLED;case ut.UNKNOWN:return D.UNKNOWN;case ut.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ut.INTERNAL:return D.INTERNAL;case ut.UNAVAILABLE:return D.UNAVAILABLE;case ut.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ut.NOT_FOUND:return D.NOT_FOUND;case ut.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ut.ABORTED:return D.ABORTED;case ut.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ut.DATA_LOSS:return D.DATA_LOSS;default:return U(39323,{code:n})}}(K=ut||(ut={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new fe([4294967295,4294967295],0);function Ua(n){const t=eu().encode(n),e=new Ql;return e.update(t),new Uint8Array(e.digest())}function $a(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new fe([e,r],0),new fe([i,o],0)]}class ki{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new xn(`Invalid padding: ${e}`);if(r<0)throw new xn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new xn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new xn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=fe.fromNumber(this.pe)}we(t,e,r){let i=t.add(e.multiply(fe.fromNumber(r)));return i.compare($m)===1&&(i=new fe([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=Ua(t),[r,i]=$a(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ki(o,i,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.pe===0)return;const e=Ua(t),[r,i]=$a(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class xn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Jn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new as(q.min(),i,new at($),Ee(),W())}}class Jn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Jn(r,e,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,r,i){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=i}}class Cu{constructor(t,e){this.targetId=t,this.Ce=e}}class bu{constructor(t,e,r=vt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ja{constructor(){this.Fe=0,this.Me=za(),this.xe=vt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=W(),e=W(),r=W();return this.Me.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:U(38017,{changeType:o})}}),new Jn(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=za()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,rt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class jm{constructor(t){this.ze=t,this.je=new Map,this.He=Ee(),this.Je=br(),this.Ye=br(),this.Ze=new at($)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:U(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,i)=>{this.it(i)&&e(i)})}ot(t){const e=t.targetId,r=t.Ce.count,i=this._t(e);if(i){const o=i.target;if(ci(o))if(r===0){const a=new L(o.path);this.tt(e,a,Rt.newNoDocument(a,q.min()))}else rt(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const u=this.ct(t),h=u?this.lt(u,t,a):1;if(h!==0){this.st(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,u;try{a=ye(r).toUint8Array()}catch(h){if(h instanceof su)return Je("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new ki(a,i,o)}catch(h){return Je(h instanceof xn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.pe===0?null:u}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.tt(e,o,null),i++)}),i}It(t){const e=new Map;this.je.forEach((o,a)=>{const u=this._t(a);if(u){if(o.current&&ci(u.target)){const h=new L(u.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,Rt.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=W();this.Ye.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const i=new as(t,e,this.Ze,this.He,r);return this.He=Ee(),this.Je=br(),this.Ye=br(),this.Ze=new at($),i}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const i=this.rt(t);this.dt(t,e)?i.$e(e,1):i.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new ja,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new dt($),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new dt($),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new ja),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function br(){return new at(L.comparator)}function za(){return new at(L.comparator)}const zm={asc:"ASCENDING",desc:"DESCENDING"},Hm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Km={and:"AND",or:"OR"};class Qm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function mi(n,t){return n.useProto3Json||ts(t)?t:{value:t}}function Gm(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wm(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function We(n){return rt(!!n,49232),q.fromTimestamp(function(e){const r=_e(e);return new kt(r.seconds,r.nanos)}(n))}function Xm(n,t){return pi(n,t).canonicalString()}function pi(n,t){const e=function(i){return new nt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Su(n){const t=nt.fromString(n);return rt(xu(t),10190,{key:t.toString()}),t}function Hs(n,t){const e=Su(t);if(e.get(1)!==n.databaseId.projectId)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new L(Pu(e))}function Ru(n,t){return Xm(n.databaseId,t)}function Ym(n){const t=Su(n);return t.length===4?nt.emptyPath():Pu(t)}function Ha(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pu(n){return rt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Jm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(rt(m===void 0||typeof m=="string",58123),vt.fromBase64String(m||"")):(rt(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),vt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?D.UNKNOWN:Au(d.code);return new O(m,d.message||"")}(a);e=new bu(r,i,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hs(n,r.document.name),o=We(r.document.updateTime),a=r.document.createTime?We(r.document.createTime):q.min(),u=new jt({mapValue:{fields:r.document.fields}}),h=Rt.newFoundDocument(i,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Nr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Hs(n,r.document),o=r.readTime?We(r.readTime):q.min(),a=Rt.newNoDocument(i,o),u=r.removedTargetIds||[];e=new Nr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Hs(n,r.document),o=r.removedTargetIds||[];e=new Nr([],o,i,null)}else{if(!("filter"in t))return U(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Um(i,o),u=r.targetId;e=new Cu(u,a)}}return e}function Zm(n,t){return{documents:[Ru(n,t.path)]}}function tp(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ru(n,i);const o=function(d){if(d.length!==0)return Du(Gt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(T){return{field:Ke(T.field),direction:rp(T.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=mi(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{gt:e,parent:i}}function ep(n){let t=Ym(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){rt(r===1,65062);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(w){const T=Vu(w);return T instanceof Gt&&hu(T)?T.getFilters():[T]}(e.where));let a=[];e.orderBy&&(a=function(w){return w.map(T=>function(P){return new zr(Qe(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(T))}(e.orderBy));let u=null;e.limit&&(u=function(w){let T;return T=typeof w=="object"?w.value:w,ts(T)?null:T}(e.limit));let h=null;e.startAt&&(h=function(w){const T=!!w.before,S=w.values||[];return new jr(S,T)}(e.startAt));let d=null;return e.endAt&&(d=function(w){const T=!w.before,S=w.values||[];return new jr(S,T)}(e.endAt)),Tm(t,i,a,o,u,"F",h,d)}function np(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Vu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Qe(e.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qe(e.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qe(e.unaryFilter.field);return ht.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Qe(e.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(n):n.fieldFilter!==void 0?function(e){return ht.create(Qe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Gt.create(e.compositeFilter.filters.map(r=>Vu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(e.compositeFilter.op))}(n):U(30097,{filter:n})}function rp(n){return zm[n]}function sp(n){return Hm[n]}function ip(n){return Km[n]}function Ke(n){return{fieldPath:n.canonicalString()}}function Qe(n){return Dt.fromServerFormat(n.fieldPath)}function Du(n){return n instanceof ht?function(e){if(e.op==="=="){if(xa(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NAN"}};if(Da(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xa(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NAN"}};if(Da(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ke(e.field),op:sp(e.op),value:e.value}}}(n):n instanceof Gt?function(e){const r=e.getFilters().map(i=>Du(i));return r.length===1?r[0]:{compositeFilter:{op:ip(e.op),filters:r}}}(n):U(54877,{filter:n})}function xu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e,r,i,o=q.min(),a=q.min(),u=vt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new ue(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t){this.wt=t}}function ap(n){const t=ep({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.Cn=new up}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(ge.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(ge.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class up{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new dt(nt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new dt(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ku=41943040;class xt{static withCacheSize(t){return new xt(t,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(ku,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new nn(0)}static lr(){return new nn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="LruGarbageCollector",cp=1048576;function Ga([n,t],[e,r]){const i=$(n,e);return i===0?$(t,r):i}class hp{constructor(t){this.Er=t,this.buffer=new dt(Ga),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ga(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class dp{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){N(Qa,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ln(e)?N(Qa,"Ignoring IndexedDB error during garbage collection: ",e):await Jr(e)}await this.mr(3e5)})}}class fp{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return b.resolve(Zr.le);const r=new hp(e);return this.gr.forEachTarget(t,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(t,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Ka)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ka):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,i,o,a,u,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,a=Date.now(),this.nthSequenceNumber(t,i))).next(w=>(r=w,u=Date.now(),this.removeTargets(t,r,e))).next(w=>(o=w,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(d=Date.now(),ze()<=Q.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${w} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function mp(n,t){return new fp(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.changes=new Fe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Fn(r.mutation,i,le.empty(),kt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,W()).next(()=>r))}getLocalViewOfDocuments(t,e,r=W()){const i=xe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=Dn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=xe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,W()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,i){let o=Ee();const a=Ln(),u=function(){return Ln()}();return e.forEach((h,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof os)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Fn(m.mutation,d,m.mutation.getFieldMask(),kt.now())):a.set(d.key,le.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var w;return u.set(d,new gp(m,(w=a.get(d))!==null&&w!==void 0?w:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Ln();let i=new at((a,u)=>a-u),o=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||le.empty();m=u.applyToLocalView(d,m),r.set(h,m);const w=(i.get(u.batchId)||W()).add(h);i=i.insert(u.batchId,w)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,w=yu();m.forEach(T=>{if(!o.has(T)){const S=wu(e.get(T),r.get(T));S!==null&&w.set(T,S),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,w))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):wm(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):b.resolve(xe());let u=jn,h=o;return a.next(d=>b.forEach(d,(m,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(t,m).next(T=>{h=h.insert(m,T)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,W())).next(m=>({batchId:u,changes:Sm(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(r=>{let i=Dn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=Dn();return this.indexManager.getCollectionParents(t,o).next(u=>b.forEach(u,h=>{const d=function(w,T){return new ns(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(m=>{m.forEach((w,T)=>{a=a.insert(w,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Rt.newInvalidDocument(m)))});let u=Dn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Fn(m.mutation,d,le.empty(),kt.now()),ss(e,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return b.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:We(i.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(i){return{name:i.name,query:ap(i.bundledQuery),readTime:We(i.readTime)}}(e)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.overlays=new at(L.comparator),this.Qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=xe();return b.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.St(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const i=xe(),o=e.length+1,a=new L(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return b.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new at((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=xe(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=xe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=i)););return b.resolve(u)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new qm(e,r));let o=this.Qr.get(e);o===void 0&&(o=W(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.$r=new dt(mt.Ur),this.Kr=new dt(mt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new mt(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new mt(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new L(new nt([])),r=new mt(e,t),i=new mt(e,t+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new L(new nt([])),r=new mt(e,t),i=new mt(e,t+1);let o=W();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new mt(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class mt{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return L.comparator(t.key,e.key)||$(t.Zr,e.Zr)}static Wr(t,e){return $(t.Zr,e.Zr)||L.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new dt(mt.Ur)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Bm(o,e,r,i);this.mutationQueue.push(a);for(const u of i)this.Xr=this.Xr.add(new mt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ti(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?tm:this.nr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new mt(e,0),i=new mt(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,i],a=>{const u=this.ei(a.Zr);o.push(u)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new dt($);return e.forEach(i=>{const o=new mt(i,0),a=new mt(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],u=>{r=r.add(u.Zr)})}),b.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new mt(new L(o),0);let u=new dt($);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.Zr)),!0)},a),b.resolve(this.ni(u))}ni(t){const e=[];return t.forEach(r=>{const i=this.ei(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){rt(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return b.forEach(e.mutations,i=>{const o=new mt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new mt(e,0),i=this.Xr.firstAfterOrEqual(r);return b.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t){this.ii=t,this.docs=function(){return new at(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(e))}getEntries(t,e){let r=Ee();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Rt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Ee();const a=e.path,u=new L(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Xf(Wf(m),r)<=0||(i.has(m.key)||ss(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,i){U(9500)}si(t,e){return b.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ip(this)}getSize(t){return b.resolve(this.size)}}class Ip extends pp{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Br.addEntry(t,i)):this.Br.removeEntry(r)}),b.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t){this.persistence=t,this.oi=new Fe(e=>Ri(e),Pi),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this._i=0,this.ai=new Ni,this.targetCount=0,this.ui=nn.cr()}forEachTarget(t,e){return this.oi.forEach((r,i)=>e(i)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),b.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new nn(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Tr(e),b.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,e){this.ci={},this.overlays={},this.li=new Zr(0),this.hi=!1,this.hi=!0,this.Pi=new Ep,this.referenceDelegate=t(this),this.Ti=new Ap(this),this.indexManager=new lp,this.remoteDocumentCache=function(i){return new wp(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new op(e),this.Ei=new yp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new Tp(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new Cp(this.li.next());return this.referenceDelegate.di(),r(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(t,e){return b.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class Cp extends Jf{constructor(t){super(),this.currentSequenceNumber=t}}class Oi{constructor(t){this.persistence=t,this.Vi=new Ni,this.mi=null}static fi(t){return new Oi(t)}get gi(){if(this.mi)return this.mi;throw U(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.gi,r=>{const i=L.fromPath(r);return this.pi(t,i).next(o=>{o||e.removeEntry(i,q.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return b.or([()=>b.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class Qr{constructor(t,e){this.persistence=t,this.yi=new Fe(r=>em(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=mp(this,e)}static fi(t,e){return new Qr(t,e)}di(){}Ai(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}br(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return b.forEach(this.yi,(r,i)=>this.Dr(t,r,i).next(o=>o?b.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(t,a=>this.Dr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,q.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),b.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),b.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=xr(t.data.value)),e}Dr(t,e,r){return b.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.yi.get(e);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ds=r,this.As=i}static Rs(t,e){let r=W(),i=W();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Mi(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Ed()?8:Zf(yd())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ws(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new bp;return this.Ss(t,e,a).next(u=>{if(o.result=u,this.fs)return this.Ds(t,e,a,u.size)})}).next(()=>o.result)}Ds(t,e,r,i){return r.documentReadCount<this.gs?(ze()<=Q.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),b.resolve()):(ze()<=Q.DEBUG&&N("QueryEngine","Query:",He(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(ze()<=Q.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ht(e))):b.resolve())}ws(t,e){if(Ma(e))return b.resolve(null);let r=Ht(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=hi(e,null,"F"),r=Ht(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=W(...o);return this.ys.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.vs(e,u);return this.Cs(e,d,a,h.readTime)?this.ws(t,hi(e,null,"F")):this.Fs(t,d,e,h)}))})))}bs(t,e,r,i){return Ma(e)||i.isEqual(q.min())?b.resolve(null):this.ys.getDocuments(t,r).next(o=>{const a=this.vs(e,o);return this.Cs(e,a,r,i)?b.resolve(null):(ze()<=Q.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),He(e)),this.Fs(t,a,e,Gf(i,jn)).next(u=>u))})}vs(t,e){let r=new dt(gu(t));return e.forEach((i,o)=>{ss(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return ze()<=Q.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",He(e)),this.ys.getDocumentsMatchingQuery(t,e,ge.min(),r)}Fs(t,e,r,i){return this.ys.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="LocalStore",Rp=3e8;class Pp{constructor(t,e,r,i){this.persistence=t,this.Ms=e,this.serializer=i,this.xs=new at($),this.Os=new Fe(o=>Ri(o),Pi),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _p(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function Vp(n,t,e,r){return new Pp(n,t,e,r)}async function Ou(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=W();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:u}))})})}function Mu(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Dp(n,t){const e=G(n),r=t.snapshotVersion;let i=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Bs.newChangeBuffer({trackRemovals:!0});i=e.xs;const u=[];t.targetChanges.forEach((m,w)=>{const T=i.get(w);if(!T)return;u.push(e.Ti.removeMatchingKeys(o,m.removedDocuments,w).next(()=>e.Ti.addMatchingKeys(o,m.addedDocuments,w)));let S=T.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(vt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),i=i.insert(w,S),function(k,R,M){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Rp?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(T,S,m)&&u.push(e.Ti.updateTargetData(o,S))});let h=Ee(),d=W();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(xp(o,a,t.documentUpdates).next(m=>{h=m.qs,d=m.Qs})),!r.isEqual(q.min())){const m=e.Ti.getLastRemoteSnapshotVersion(o).next(w=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return b.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.xs=i,o))}function xp(n,t,e){let r=W(),i=W();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Ee();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(q.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):N(Li,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:i}})}function kp(n,t){const e=G(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ti.getTargetData(r,t).next(o=>o?(i=o,b.resolve(i)):e.Ti.allocateTargetId(r).next(a=>(i=new ue(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.xs=e.xs.insert(r.targetId,r),e.Os.set(t,r.targetId)),r})}async function gi(n,t,e){const r=G(n),i=r.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ln(a))throw a;N(Li,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(i.target)}function Wa(n,t,e){const r=G(n);let i=q.min(),o=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const w=G(h),T=w.Os.get(m);return T!==void 0?b.resolve(w.xs.get(T)):w.Ti.getTargetData(d,m)}(r,a,Ht(t)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,t,e?i:q.min(),e?o:W())).next(u=>(Np(r,Am(t),u),{documents:u,$s:o})))}function Np(n,t,e){let r=n.Ns.get(t)||q.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(t,r)}class Xa{constructor(){this.activeTargetIds=Vm()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Op{constructor(){this.xo=new Xa,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Xa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="ConnectivityMonitor";class Ja{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(Ya,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){N(Ya,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr=null;function _i(){return Sr===null?Sr=function(){return 268435456+Math.round(2147483648*Math.random())}():Sr++,"0x"+Sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="RestConnection",Lp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Fp{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===$r?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(t,e,r,i,o){const a=_i(),u=this.jo(t,e.toUriEncodedString());N(Ks,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,i,o);const{host:d}=new URL(u),m=Ii(d);return this.Jo(t,u,h,r,m).then(w=>(N(Ks,`Received RPC '${t}' ${a}: `,w),w),w=>{throw Je(Ks,`RPC '${t}' ${a} failed with error: `,w,"url: ",u,"request:",r),w})}Yo(t,e,r,i,o,a){return this.zo(t,e,r,i,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+an}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}jo(t,e){const r=Lp[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class qp extends Fp{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const a=_i();return new Promise((u,h)=>{const d=new Gl;d.setWithCredentials(!0),d.listenOnce(Wl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Dr.NO_ERROR:const w=d.getResponseJson();N(Ct,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(w)),u(w);break;case Dr.TIMEOUT:N(Ct,`RPC '${t}' ${a} timed out`),h(new O(D.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const T=d.getStatus();if(N(Ct,`RPC '${t}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S?.error;if(P&&P.status&&P.message){const k=function(M){const x=M.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(x)>=0?x:D.UNKNOWN}(P.status);h(new O(k,P.message))}else h(new O(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new O(D.UNAVAILABLE,"Connection failed."));break;default:U(9055,{h_:t,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{N(Ct,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(i);N(Ct,`RPC '${t}' ${a} sending request:`,i),d.send(e,"POST",m,r,15)})}I_(t,e,r){const i=_i(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Jl(),u=Yl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");N(Ct,`Creating RPC '${t}' stream ${i}: ${m}`,h);const w=a.createWebChannel(m,h);this.E_(w);let T=!1,S=!1;const P=new Bp({Zo:R=>{S?N(Ct,`Not sending because RPC '${t}' stream ${i} is closed:`,R):(T||(N(Ct,`Opening RPC '${t}' stream ${i} transport.`),w.open(),T=!0),N(Ct,`RPC '${t}' stream ${i} sending:`,R),w.send(R))},Xo:()=>w.close()}),k=(R,M,x)=>{R.listen(M,B=>{try{x(B)}catch(H){setTimeout(()=>{throw H},0)}})};return k(w,Vn.EventType.OPEN,()=>{S||(N(Ct,`RPC '${t}' stream ${i} transport opened.`),P.__())}),k(w,Vn.EventType.CLOSE,()=>{S||(S=!0,N(Ct,`RPC '${t}' stream ${i} transport closed`),P.u_(),this.d_(w))}),k(w,Vn.EventType.ERROR,R=>{S||(S=!0,Je(Ct,`RPC '${t}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),P.u_(new O(D.UNAVAILABLE,"The operation could not be completed")))}),k(w,Vn.EventType.MESSAGE,R=>{var M;if(!S){const x=R.data[0];rt(!!x,16349);const B=x,H=B?.error||((M=B[0])===null||M===void 0?void 0:M.error);if(H){N(Ct,`RPC '${t}' stream ${i} received error:`,H);const lt=H.status;let Z=function(_){const y=ut[_];if(y!==void 0)return Au(y)}(lt),E=H.message;Z===void 0&&(Z=D.INTERNAL,E="Unknown error status: "+lt+" with message "+H.message),S=!0,P.u_(new O(Z,E)),w.close()}else N(Ct,`RPC '${t}' stream ${i} received:`,x),P.c_(x)}}),k(u,Xl.STAT_EVENT,R=>{R.stat===ri.PROXY?N(Ct,`RPC '${t}' stream ${i} detected buffering proxy`):R.stat===ri.NOPROXY&&N(Ct,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function Qs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n){return new Qm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.xi=t,this.timerId=e,this.A_=r,this.R_=i,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="PersistentStream";class Up{constructor(t,e,r,i,o,a,u,h){this.xi=t,this.S_=r,this.D_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Fu(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(ne(e.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===e&&this.z_(r,i)},r=>{t(()=>{const i=new O(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(t,e){const r=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return N(Za,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(N(Za,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $p extends Up{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=Jm(this.serializer,t),r=function(o){if(!("targetChange"in o))return q.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?We(a.readTime):q.min()}(t);return this.listener.Y_(e,r)}Z_(t){const e={};e.database=Ha(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=ci(h)?{documents:Zm(o,h)}:{query:tp(o,h).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Wm(o,a.resumeToken);const d=mi(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){u.readTime=Gm(o,a.snapshotVersion.toTimestamp());const d=mi(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=np(this.serializer,t);r&&(e.labels=r),this.Q_(e)}X_(t){const e={};e.database=Ha(this.serializer),e.removeTarget=t,this.Q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{}class zp extends jp{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(t,pi(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(D.UNKNOWN,o.toString())})}Yo(t,e,r,i,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(t,pi(e,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(D.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class Hp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(ne(e),this.ua=!1):N("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="RemoteStore";class Kp{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{tr(this)&&(N(rn,"Restarting streams for network reachability change."),await async function(h){const d=G(h);d.da.add(4),await Zn(d),d.Va.set("Unknown"),d.da.delete(4),await ls(d)}(this))})}),this.Va=new Hp(r,i)}}async function ls(n){if(tr(n))for(const t of n.Aa)await t(!0)}async function Zn(n){for(const t of n.Aa)await t(!1)}function Bu(n,t){const e=G(n);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),Ui(e)?qi(e):un(e).N_()&&Bi(e,t))}function Fi(n,t){const e=G(n),r=un(e);e.Ea.delete(t),r.N_()&&qu(e,t),e.Ea.size===0&&(r.N_()?r.k_():tr(e)&&e.Va.set("Unknown"))}function Bi(n,t){if(n.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}un(n).Z_(t)}function qu(n,t){n.ma.Ke(t),un(n).X_(t)}function qi(n){n.ma=new jm({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Ea.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),un(n).start(),n.Va.ca()}function Ui(n){return tr(n)&&!un(n).O_()&&n.Ea.size>0}function tr(n){return G(n).da.size===0}function Uu(n){n.ma=void 0}async function Qp(n){n.Va.set("Online")}async function Gp(n){n.Ea.forEach((t,e)=>{Bi(n,t)})}async function Wp(n,t){Uu(n),Ui(n)?(n.Va.Pa(t),qi(n)):n.Va.set("Unknown")}async function Xp(n,t,e){if(n.Va.set("Online"),t instanceof bu&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.Ea.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ea.delete(u),i.ma.removeTarget(u))}(n,t)}catch(r){N(rn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await tl(n,r)}else if(t instanceof Nr?n.ma.Xe(t):t instanceof Cu?n.ma.ot(t):n.ma.nt(t),!e.isEqual(q.min()))try{const r=await Mu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.ma.It(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ea.get(d);m&&o.Ea.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.Ea.get(h);if(!m)return;o.Ea.set(h,m.withResumeToken(vt.EMPTY_BYTE_STRING,m.snapshotVersion)),qu(o,h);const w=new ue(m.target,h,d,m.sequenceNumber);Bi(o,w)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){N(rn,"Failed to raise snapshot:",r),await tl(n,r)}}async function tl(n,t,e){if(!ln(t))throw t;n.da.add(1),await Zn(n),n.Va.set("Offline"),e||(e=()=>Mu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(rn,"Retrying IndexedDB access"),await e(),n.da.delete(1),await ls(n)})}async function el(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),N(rn,"RemoteStore received new credentials");const r=tr(e);e.da.add(3),await Zn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await ls(e)}async function Yp(n,t){const e=G(n);t?(e.da.delete(2),await ls(e)):t||(e.da.add(2),await Zn(e),e.Va.set("Unknown"))}function un(n){return n.fa||(n.fa=function(e,r,i){const o=G(e);return o.oa(),new $p(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:Qp.bind(null,n),n_:Gp.bind(null,n),i_:Wp.bind(null,n),Y_:Xp.bind(null,n)}),n.Aa.push(async t=>{t?(n.fa.L_(),Ui(n)?qi(n):n.Va.set("Unknown")):(await n.fa.stop(),Uu(n))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,u=new $i(t,e,a,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(n,t){if(ne("AsyncQueue",`${t}: ${n}`),ln(n))return new O(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{static emptySet(t){return new Xe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||L.comparator(e.key,r.key):(e,r)=>L.comparator(e.key,r.key),this.keyedMap=Dn(),this.sortedSet=new at(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Xe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Xe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.pa=new at(L.comparator)}track(t){const e=t.doc.key,r=this.pa.get(e);r?t.type!==0&&r.type===3?this.pa=this.pa.insert(e,t):t.type===3&&r.type!==1?this.pa=this.pa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.pa=this.pa.remove(e):t.type===1&&r.type===2?this.pa=this.pa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):U(63341,{Vt:t,ya:r}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,r)=>{t.push(r)}),t}}class sn{constructor(t,e,r,i,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new sn(t,e,Xe.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&rs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class Zp{constructor(){this.queries=rl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=G(e),o=i.queries;i.queries=rl(),o.forEach((a,u)=>{for(const h of u.Sa)h.onError(r)})})(this,new O(D.ABORTED,"Firestore shutting down"))}}function rl(){return new Fe(n=>pu(n),rs)}async function ju(n,t){const e=G(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.Da()&&t.va()&&(r=2):(o=new Jp,r=t.va()?0:1);try{switch(r){case 0:o.ba=await e.onListen(i,!0);break;case 1:o.ba=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=$u(a,`Initialization of query '${He(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,o),o.Sa.push(t),t.Fa(e.onlineState),o.ba&&t.Ma(o.ba)&&ji(e)}async function zu(n,t){const e=G(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=t.va()?0:1:!o.Da()&&t.va()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function tg(n,t){const e=G(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const u of a.Sa)u.Ma(i)&&(r=!0);a.ba=i}}r&&ji(e)}function eg(n,t,e){const r=G(n),i=r.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);r.queries.delete(t)}function ji(n){n.Ca.forEach(t=>{t.next()})}var yi,sl;(sl=yi||(yi={})).xa="default",sl.Cache="cache";class Hu{constructor(t,e,r){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new sn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const r=e!=="Offline";return(!this.options.Qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==yi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t){this.key=t}}class Qu{constructor(t){this.key=t}}class ng{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=W(),this.mutatedKeys=W(),this.Za=gu(t),this.Xa=new Xe(this.Za)}get eu(){return this.Ha}tu(t,e){const r=e?e.nu:new nl,i=e?e.Xa:this.Xa;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,w)=>{const T=i.get(m),S=ss(this.query,w)?w:null,P=!!T&&this.mutatedKeys.has(T.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let R=!1;T&&S?T.data.isEqual(S.data)?P!==k&&(r.track({type:3,doc:S}),R=!0):this.ru(T,S)||(r.track({type:2,doc:S}),R=!0,(h&&this.Za(S,h)>0||d&&this.Za(S,d)<0)&&(u=!0)):!T&&S?(r.track({type:0,doc:S}),R=!0):T&&!S&&(r.track({type:1,doc:T}),R=!0,(h||d)&&(u=!0)),R&&(S?(a=a.add(S),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Xa:a,nu:r,Cs:u,mutatedKeys:o}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((m,w)=>function(S,P){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Vt:R})}};return k(S)-k(P)}(m.type,w.type)||this.Za(m.doc,w.doc)),this.iu(r),i=i!=null&&i;const u=e&&!i?this.su():[],h=this.Ya.size===0&&this.current&&!i?1:0,d=h!==this.Ja;return this.Ja=h,a.length!==0||d?{snapshot:new sn(this.query,t.Xa,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:u}:{ou:u}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new nl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=W(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new Qu(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new Ku(r))}),e}au(t){this.Ha=t.$s,this.Ya=W();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return sn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const zi="SyncEngine";class rg{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class sg{constructor(t){this.key=t,this.cu=!1}}class ig{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new Fe(u=>pu(u),rs),this.Pu=new Map,this.Tu=new Set,this.Iu=new at(L.comparator),this.Eu=new Map,this.du=new Ni,this.Au={},this.Ru=new Map,this.Vu=nn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function og(n,t,e=!0){const r=Ju(n);let i;const o=r.hu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.uu()):i=await Gu(r,t,e,!0),i}async function ag(n,t){const e=Ju(n);await Gu(e,t,!0,!1)}async function Gu(n,t,e,r){const i=await kp(n.localStore,Ht(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await lg(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Bu(n.remoteStore,i),u}async function lg(n,t,e,r,i){n.fu=(w,T,S)=>async function(k,R,M,x){let B=R.view.tu(M);B.Cs&&(B=await Wa(k.localStore,R.query,!1).then(({documents:E})=>R.view.tu(E,B)));const H=x&&x.targetChanges.get(R.targetId),lt=x&&x.targetMismatches.get(R.targetId)!=null,Z=R.view.applyChanges(B,k.isPrimaryClient,H,lt);return ol(k,R.targetId,Z.ou),Z.snapshot}(n,w,T,S);const o=await Wa(n.localStore,t,!0),a=new ng(t,o.$s),u=a.tu(o.documents),h=Jn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);ol(n,e,d.ou);const m=new rg(t,e,a);return n.hu.set(t,m),n.Pu.has(e)?n.Pu.get(e).push(t):n.Pu.set(e,[t]),d.snapshot}async function ug(n,t,e){const r=G(n),i=r.hu.get(t),o=r.Pu.get(i.targetId);if(o.length>1)return r.Pu.set(i.targetId,o.filter(a=>!rs(a,t))),void r.hu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Fi(r.remoteStore,i.targetId),vi(r,i.targetId)}).catch(Jr)):(vi(r,i.targetId),await gi(r.localStore,i.targetId,!0))}async function cg(n,t){const e=G(n),r=e.hu.get(t),i=e.Pu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Fi(e.remoteStore,r.targetId))}async function Wu(n,t){const e=G(n);try{const r=await Dp(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Eu.get(o);a&&(rt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.cu=!0:i.modifiedDocuments.size>0?rt(a.cu,14607):i.removedDocuments.size>0&&(rt(a.cu,42227),a.cu=!1))}),await Yu(e,r,t)}catch(r){await Jr(r)}}function il(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.hu.forEach((o,a)=>{const u=a.view.Fa(t);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=G(a);h.onlineState=u;let d=!1;h.queries.forEach((m,w)=>{for(const T of w.Sa)T.Fa(u)&&(d=!0)}),d&&ji(h)}(r.eventManager,t),i.length&&r.lu.Y_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hg(n,t,e){const r=G(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Eu.get(t),o=i&&i.key;if(o){let a=new at(L.comparator);a=a.insert(o,Rt.newNoDocument(o,q.min()));const u=W().add(o),h=new as(q.min(),new Map,new at($),a,u);await Wu(r,h),r.Iu=r.Iu.remove(o),r.Eu.delete(t),Hi(r)}else await gi(r.localStore,t,!1).then(()=>vi(r,t,e)).catch(Jr)}function vi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Pu.get(t))n.hu.delete(r),e&&n.lu.gu(r,e);n.Pu.delete(t),n.isPrimaryClient&&n.du.Hr(t).forEach(r=>{n.du.containsKey(r)||Xu(n,r)})}function Xu(n,t){n.Tu.delete(t.path.canonicalString());const e=n.Iu.get(t);e!==null&&(Fi(n.remoteStore,e),n.Iu=n.Iu.remove(t),n.Eu.delete(e),Hi(n))}function ol(n,t,e){for(const r of e)r instanceof Ku?(n.du.addReference(r.key,t),dg(n,r)):r instanceof Qu?(N(zi,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,t),n.du.containsKey(r.key)||Xu(n,r.key)):U(19791,{pu:r})}function dg(n,t){const e=t.key,r=e.path.canonicalString();n.Iu.get(e)||n.Tu.has(r)||(N(zi,"New document in limbo: "+e),n.Tu.add(r),Hi(n))}function Hi(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const t=n.Tu.values().next().value;n.Tu.delete(t);const e=new L(nt.fromString(t)),r=n.Vu.next();n.Eu.set(r,new sg(e)),n.Iu=n.Iu.insert(e,r),Bu(n.remoteStore,new ue(Ht(Vi(e.path)),r,"TargetPurposeLimboResolution",Zr.le))}}async function Yu(n,t,e){const r=G(n),i=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((u,h)=>{a.push(r.fu(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const w=d?!d.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(d){i.push(d);const w=Mi.Rs(h.targetId,d);o.push(w)}}))}),await Promise.all(a),r.lu.Y_(i),await async function(h,d){const m=G(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>b.forEach(d,T=>b.forEach(T.ds,S=>m.persistence.referenceDelegate.addReference(w,T.targetId,S)).next(()=>b.forEach(T.As,S=>m.persistence.referenceDelegate.removeReference(w,T.targetId,S)))))}catch(w){if(!ln(w))throw w;N(Li,"Failed to update sequence numbers: "+w)}for(const w of d){const T=w.targetId;if(!w.fromCache){const S=m.xs.get(T),P=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(P);m.xs=m.xs.insert(T,k)}}}(r.localStore,o))}async function fg(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){N(zi,"User change. New user:",t.toKey());const r=await Ou(e.localStore,t);e.currentUser=t,function(o,a){o.Ru.forEach(u=>{u.forEach(h=>{h.reject(new O(D.CANCELLED,a))})}),o.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Yu(e,r.ks)}}function mg(n,t){const e=G(n),r=e.Eu.get(t);if(r&&r.cu)return W().add(r.key);{let i=W();const o=e.Pu.get(t);if(!o)return i;for(const a of o){const u=e.hu.get(a);i=i.unionWith(u.view.eu)}return i}}function Ju(n){const t=G(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hg.bind(null,t),t.lu.Y_=tg.bind(null,t.eventManager),t.lu.gu=eg.bind(null,t.eventManager),t}class Gr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Lu(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return Vp(this.persistence,new Sp,t.initialUser,this.serializer)}Su(t){return new Nu(Oi.fi,this.serializer)}bu(t){return new Op}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gr.provider={build:()=>new Gr};class pg extends Gr{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){rt(this.persistence.referenceDelegate instanceof Qr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dp(r,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Nu(r=>Qr.fi(r,e),this.serializer)}}class Ei{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>il(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fg.bind(null,this.syncEngine),await Yp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Zp}()}createDatastore(t){const e=Lu(t.databaseInfo.databaseId),r=function(o){return new qp(o)}(t.databaseInfo);return function(o,a,u,h){return new zp(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,u){return new Kp(r,i,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>il(this.syncEngine,e,0),function(){return Ja.C()?new Ja:new Mp}())}createSyncEngine(t,e){return function(i,o,a,u,h,d,m){const w=new ig(i,o,a,u,h,d);return m&&(w.mu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=G(i);N(rn,"RemoteStore shutting down."),o.da.add(5),await Zn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ei.provider={build:()=>new Ei};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):ne("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="FirestoreClient";class gg{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=bt.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(Te,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(Te,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=$u(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Gs(n,t){n.asyncQueue.verifyOperationInProgress(),N(Te,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ou(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function al(n,t){n.asyncQueue.verifyOperationInProgress();const e=await _g(n);N(Te,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>el(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>el(t.remoteStore,i)),n._onlineComponents=t}async function _g(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Te,"Using user provided OfflineComponentProvider");try{await Gs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Je("Error using user provided cache. Falling back to memory cache: "+e),await Gs(n,new Gr)}}else N(Te,"Using default OfflineComponentProvider"),await Gs(n,new pg(void 0));return n._offlineComponents}async function yg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Te,"Using user provided OnlineComponentProvider"),await al(n,n._uninitializedComponentsProvider._online)):(N(Te,"Using default OnlineComponentProvider"),await al(n,new Ei))),n._onlineComponents}async function tc(n){const t=await yg(n),e=t.eventManager;return e.onListen=og.bind(null,t.syncEngine),e.onUnlisten=ug.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ag.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=cg.bind(null,t.syncEngine),e}function vg(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Zu({next:T=>{m.xu(),a.enqueueAndForget(()=>zu(o,w));const S=T.docs.has(u);!S&&T.fromCache?d.reject(new O(D.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&T.fromCache&&h&&h.source==="server"?d.reject(new O(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),w=new Hu(Vi(u.path),m,{includeMetadataChanges:!0,Qa:!0});return ju(o,w)}(await tc(n),n.asyncQueue,t,e,r)),r.promise}function Eg(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Zu({next:T=>{m.xu(),a.enqueueAndForget(()=>zu(o,w)),T.fromCache&&h.source==="server"?d.reject(new O(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),w=new Hu(u,m,{includeMetadataChanges:!0,Qa:!0});return ju(o,w)}(await tc(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n,t,e){if(!e)throw new O(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Tg(n,t,e,r){if(t===!0&&r===!0)throw new O(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ul(n){if(!L.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cl(n){if(L.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wg(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function Qn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=wg(n);throw new O(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="firestore.googleapis.com",hl=!0;class dl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rc,this.ssl=hl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:hl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ku;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<cp)throw new O(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Tg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ec((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class us{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dl(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Bf;switch(r.type){case"firstParty":return new jf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ll.get(e);r&&(N("ComponentProvider","Removing Datastore"),ll.delete(e),r.terminate())}(this),Promise.resolve()}}function Ig(n,t,e,r={}){var i;n=Qn(n,us);const o=Ii(t),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(fd(`https://${h}`),_d("Firestore",!0)),a.host!==rc&&a.host!==h&&Je("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!Br(d,u)&&(n._setSettings(d),r.mockUserToken)){let m,w;if(typeof r.mockUserToken=="string")m=r.mockUserToken,w=bt.MOCK_USER;else{m=md(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new O(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new bt(T)}n._authCredentials=new qf(new tu(m,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new cs(this.firestore,t,this._query)}}class Kt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Kt(this.firestore,t,this._key)}}class pe extends cs{constructor(t,e,r){super(t,e,Vi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Kt(this.firestore,null,new L(t))}withConverter(t){return new pe(this.firestore,t,this._path)}}function Ag(n,t,...e){if(n=ql(n),nc("collection","path",t),n instanceof us){const r=nt.fromString(t,...e);return cl(r),new pe(n,null,r)}{if(!(n instanceof Kt||n instanceof pe))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(t,...e));return cl(r),new pe(n.firestore,null,r)}}function Cg(n,t,...e){if(n=ql(n),arguments.length===1&&(t=nu.newId()),nc("doc","path",t),n instanceof us){const r=nt.fromString(t,...e);return ul(r),new Kt(n,null,new L(r))}{if(!(n instanceof Kt||n instanceof pe))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(t,...e));return ul(r),new Kt(n.firestore,n instanceof pe?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="AsyncQueue";class ml{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Fu(this,"async_queue_retry"),this.rc=()=>{const r=Qs();r&&N(fl,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const e=Qs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=Qs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new me;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!ln(t))throw t;N(fl,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,ne("INTERNAL UNHANDLED ERROR: ",pl(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=e,e}enqueueAfterDelay(t,e,r){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const i=$i.createAndSchedule(this,t,e,r,o=>this.uc(o));return this.Zu.push(i),i}oc(){this.Xu&&U(47125,{cc:pl(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function pl(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Ki extends us{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new ml,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ml(t),this._firestoreClient=void 0,await t}}}function bg(n,t){const e=typeof n=="object"?n:Rf(),r=typeof n=="string"?n:$r,i=If(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=hd("firestore");o&&Ig(i,...o)}return i}function sc(n){if(n._terminated)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Sg(n),n._firestoreClient}function Sg(n){var t,e,r;const i=n._freezeSettings(),o=function(u,h,d,m){return new im(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,ec(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new gg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u?._online.build();return{_offline:u?._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wr(vt.fromBase64String(t))}catch(e){throw new O(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Wr(vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}const Vg=new RegExp("[~\\*/\\[\\]]");function Dg(n,t,e){if(t.search(Vg)>=0)throw gl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new ic(...t.split("."))._internalPath}catch{throw gl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function gl(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let a="";return new O(D.INVALID_ARGUMENT,o+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ac("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class xg extends oc{data(){return super.data()}}function ac(n,t){return typeof t=="string"?Dg(n,t):t instanceof ic?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ng{convertValue(t,e="none"){switch(ve(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ye(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw U(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Yn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[oi].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ot(a.doubleValue));return new Pg(o)}convertGeoPoint(t){return new Rg(ot(t.latitude),ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=es(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(zn(t));default:return null}}convertTimestamp(t){const e=_e(t);return new kt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=nt.fromString(t);rt(xu(r),9688,{name:t});const i=new Hn(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(e)||ne(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class lc extends oc{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ac("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Or extends lc{data(t={}){return super.data(t)}}class Og{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new kn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Or(this._firestore,this._userDataWriter,r.key,r,new kn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const h=new Or(i._firestore,i._userDataWriter,u.doc.key,u.doc,new kn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Or(i._firestore,i._userDataWriter,u.doc.key,u.doc,new kn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Mg(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Mg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n){n=Qn(n,Kt);const t=Qn(n.firestore,Ki);return vg(sc(t),n._key).then(e=>Bg(t,n,e))}class uc extends Ng{constructor(t){super(),this.firestore=t}convertBytes(t){return new Wr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Kt(this.firestore,null,e)}}function Fg(n){n=Qn(n,cs);const t=Qn(n.firestore,Ki),e=sc(t),r=new uc(t);return kg(n._query),Eg(e,n._query).then(i=>new Og(t,r,n,i))}function Bg(n,t,e){const r=e.docs.get(t._key),i=new uc(n);return new lc(n,i,t._key,r,new kn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){an=i})(Sf),Ur(new Un("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Ki(new Uf(r.getProvider("auth-internal")),new zf(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ge(va,Ea,t),Ge(va,Ea,"esm2017")})();var qg="firebase",Ug="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(qg,Ug,"app");const _l={apiKey:"AIzaSyCYxI-u9jWIl-obR8FmvOXOh91sYD29toQ",authDomain:"mylara-landing.firebaseapp.com",projectId:"mylara-landing",storageBucket:"mylara-landing.firebasestorage.app",messagingSenderId:"890771851225",appId:"1:890771851225:web:bf606c67130d45fbc3fbc8"};let yl,cc;try{_l.projectId||console.warn("Firebase projectId is undefined. Using offline mode only."),yl=zl(_l),cc=bg(yl)}catch(n){console.error("Error initializing Firebase:",n)}const vl=()=>cc,Qi={async getCollection(n,t="Не удалось загрузить данные"){const e=vl();if(!e)return{items:[],error:"Firebase не инициализирован"};try{const r=await Fg(Ag(e,n)),i=[];return r.forEach(o=>{const a=o.data();i.push({id:o.id,...a})}),{items:i,error:null}}catch(r){return console.error(`Error fetching ${n} data:`,r),{items:[],error:t}}},async getDocument(n,t,e="Не удалось загрузить данные"){const r=vl();if(!r)return{data:null,error:"Firebase не инициализирован"};try{const i=Cg(r,n,t),o=await Lg(i);return o.exists()?{data:o.data(),error:null}:{data:null,error:"Документ не найден"}}catch(i){return console.error(`Error fetching ${n}/${t} data:`,i),{data:null,error:e}}}},$g=async()=>Qi.getCollection("carousel","Не удалось загрузить данные карусели"),jg={class:"carousel-wrapper relative-position"},zg=["onTouchend"],Hg=["src"],Kg={class:"text-subtitle2"},Qg={class:"text-h6"},Gg=Xn({__name:"LandingCarousel",setup(n){const{isMobile:t}=td(),e=pt(0),r=pt(!1),i=pt(null),o=pt(null),a=pt(null),u=pt(),h=pt(),d=({id:k,img:R,label:M,link:x,info:B})=>{i.value={id:k,img:R,label:M,link:x,info:B},r.value=!0,a.value=k},m=k=>{e.value<k.length-1&&(e.value++,T())},w=()=>{e.value>0&&(e.value--,T())},T=()=>{const k=document.querySelector(".carousel-items-container"),M=document.querySelectorAll(".carousel-card-container")[e.value];if(k&&M){const x=M.clientWidth;k.scrollTo({left:x*e.value,behavior:"smooth"})}},S=k=>{u.value=k?.touches[0]?.clientX},P=(k,R)=>{if(k.changedTouches&&k.changedTouches.length>0){h.value=k?.changedTouches[0]?.clientX;const M=u.value-h.value;Math.abs(M)>50&&(M>0?m(R):w())}};return Wn(()=>{o.value&&o.value.addEventListener("touchstart",S,{passive:!0})}),(k,R)=>(St(),Zt(Bn,null,[ct(Ti,{"fetch-data":$t($g),"data-key":"items"},{content:_t(({data:M})=>[Lt("div",jg,[$t(t)?De("",!0):(St(),ke(ce,{key:0,disable:e.value===0,class:"carousel-nav-btn carousel-prev-btn",color:"primary",icon:"chevron_left",round:"",onClick:w},null,8,["disable"])),Lt("div",{ref_key:"carouselRef",ref:o,class:"carousel-items-container q-py-lg q-my-sm",onTouchend:x=>P(x,Array.isArray(M)?M:[])},[(St(!0),Zt(Bn,null,Sl(Array.isArray(M)?M:[],({id:x,img:B,label:H,link:lt,info:Z})=>(St(),Zt("div",{key:x,class:"carousel-card-container"},[ct(Ys,{class:Rl(["cursor-pointer my-card",{active:a.value===x}]),onClick:E=>d({id:x,img:B,label:H,link:lt,info:Z})},{default:_t(()=>[Lt("img",{src:B,style:{height:"200px","object-fit":"cover"}},null,8,Hg),ct(Ms,{class:"text-center"},{default:_t(()=>[Lt("div",Kg,te(H),1)]),_:2},1024)]),_:2},1032,["class","onClick"])]))),128))],40,zg),$t(t)?De("",!0):(St(),ke(ce,{key:1,disable:e.value===(Array.isArray(M)?M.length:0)-1,class:"carousel-nav-btn carousel-next-btn",color:"primary",icon:"chevron_right",round:"",onClick:x=>m(Array.isArray(M)?M:[])},null,8,["disable","onClick"]))])]),_:1},8,["fetch-data"]),ct(zh,{modelValue:r.value,"onUpdate:modelValue":R[0]||(R[0]=M=>r.value=M),onHide:R[1]||(R[1]=M=>a.value=null)},{default:_t(()=>[i.value?(St(),ke(Ys,{key:0,style:{"max-width":"350px"}},{default:_t(()=>[ct(Ms,null,{default:_t(()=>[Lt("div",Qg,te(i.value.label),1)]),_:1}),ct(Ms,{class:"q-pt-none"},{default:_t(()=>[bl(te(i.value.info),1)]),_:1}),ct(Eh,{align:"right"},{default:_t(()=>[rh(ct(ce,{color:"primary",label:"Закрыть",flat:""},null,512),[[Hh]])]),_:1})]),_:1})):De("",!0)]),_:1},8,["modelValue"])],64))}}),Gi={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Wg=Object.keys(Gi);Gi.all=!0;function El(n){const t={};for(const e of Wg)n[e]===!0&&(t[e]=!0);return Object.keys(t).length===0?Gi:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Xg=["INPUT","TEXTAREA"];function Tl(n,t){return t.event===void 0&&n.target!==void 0&&n.target.draggable!==!0&&typeof t.handler=="function"&&Xg.includes(n.target.nodeName.toUpperCase())===!1&&(n.qClonedBy===void 0||n.qClonedBy.indexOf(t.uid)===-1)}function Yg(){if(window.getSelection!==void 0){const n=window.getSelection();n.empty!==void 0?n.empty():n.removeAllRanges!==void 0&&(n.removeAllRanges(),sh.is.mobile!==!0&&n.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Jg(n){const t=[.06,6,50];return typeof n=="string"&&n.length&&n.split(":").forEach((e,r)=>{const i=parseFloat(e);i&&(t[r]=i)}),t}const Zg=Cl({name:"touch-swipe",beforeMount(n,{value:t,arg:e,modifiers:r}){if(r.mouse!==!0&&Ot.has.touch!==!0)return;const i=r.mouseCapture===!0?"Capture":"",o={handler:t,sensitivity:Jg(e),direction:El(r),noop:ih,mouseStart(a){Tl(a,o)&&oh(a)&&(Er(o,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),o.start(a,!0))},touchStart(a){if(Tl(a,o)){const u=a.target;Er(o,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),o.start(a)}},start(a,u){Ot.is.firefox===!0&&Os(n,!0);const h=Xo(a);o.event={x:h.left,y:h.top,time:Date.now(),mouse:u===!0,dir:!1}},move(a){if(o.event===void 0)return;if(o.event.dir!==!1){Pr(a);return}const u=Date.now()-o.event.time;if(u===0)return;const h=Xo(a),d=h.left-o.event.x,m=Math.abs(d),w=h.top-o.event.y,T=Math.abs(w);if(o.event.mouse!==!0){if(m<o.sensitivity[1]&&T<o.sensitivity[1]){o.end(a);return}}else if(window.getSelection().toString()!==""){o.end(a);return}else if(m<o.sensitivity[2]&&T<o.sensitivity[2])return;const S=m/u,P=T/u;o.direction.vertical===!0&&m<T&&m<100&&P>o.sensitivity[0]&&(o.event.dir=w<0?"up":"down"),o.direction.horizontal===!0&&m>T&&T<100&&S>o.sensitivity[0]&&(o.event.dir=d<0?"left":"right"),o.direction.up===!0&&m<T&&w<0&&m<100&&P>o.sensitivity[0]&&(o.event.dir="up"),o.direction.down===!0&&m<T&&w>0&&m<100&&P>o.sensitivity[0]&&(o.event.dir="down"),o.direction.left===!0&&m>T&&d<0&&T<100&&S>o.sensitivity[0]&&(o.event.dir="left"),o.direction.right===!0&&m>T&&d>0&&T<100&&S>o.sensitivity[0]&&(o.event.dir="right"),o.event.dir!==!1?(Pr(a),o.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Yg(),o.styleCleanup=k=>{o.styleCleanup=void 0,document.body.classList.remove("non-selectable");const R=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(R,50):R()}),o.handler({evt:a,touch:o.event.mouse!==!0,mouse:o.event.mouse,direction:o.event.dir,duration:u,distance:{x:m,y:T}})):o.end(a)},end(a){o.event!==void 0&&(Ns(o,"temp"),Ot.is.firefox===!0&&Os(n,!1),o.styleCleanup?.(!0),a!==void 0&&o.event.dir!==!1&&Pr(a),o.event=void 0)}};if(n.__qtouchswipe=o,r.mouse===!0){const a=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";Er(o,"main",[[n,"mousedown","mouseStart",`passive${a}`]])}Ot.has.touch===!0&&Er(o,"main",[[n,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[n,"touchmove","noop","notPassiveCapture"]])},updated(n,t){const e=n.__qtouchswipe;e!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&e.end(),e.handler=t.value),e.direction=El(t.modifiers))},beforeUnmount(n){const t=n.__qtouchswipe;t!==void 0&&(Ns(t,"main"),Ns(t,"temp"),Ot.is.firefox===!0&&Os(n,!1),t.styleCleanup?.(),delete n.__qtouchswipe)}});function t_(){let n=Object.create(null);return{getCache:(t,e)=>n[t]===void 0?n[t]=typeof e=="function"?e():e:n[t],setCache(t,e){n[t]=e},hasCache(t){return Object.hasOwnProperty.call(n,t)},clearCache(t){t!==void 0?delete n[t]:n=Object.create(null)}}}const e_={name:{required:!0},disable:Boolean},wl={setup(n,{slots:t}){return()=>j("div",{class:"q-panel scroll",role:"tabpanel"},Ft(t.default))}},n_={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},r_=["update:modelValue","beforeTransition","transition"];function s_(){const{props:n,emit:t,proxy:e}=Wt(),{getCache:r}=t_(),{registerTimeout:i}=Pl();let o,a;const u=pt(null),h={value:null};function d(F){const J=n.vertical===!0?"up":"left";p((e.$q.lang.rtl===!0?-1:1)*(F.direction===J?1:-1))}const m=z(()=>[[Zg,d,void 0,{horizontal:n.vertical!==!0,vertical:n.vertical,mouse:!0}]]),w=z(()=>n.transitionPrev||`slide-${n.vertical===!0?"down":"right"}`),T=z(()=>n.transitionNext||`slide-${n.vertical===!0?"up":"left"}`),S=z(()=>`--q-transition-duration: ${n.transitionDuration}ms`),P=z(()=>typeof n.modelValue=="string"||typeof n.modelValue=="number"?n.modelValue:String(n.modelValue)),k=z(()=>({include:n.keepAliveInclude,exclude:n.keepAliveExclude,max:n.keepAliveMax})),R=z(()=>n.keepAliveInclude!==void 0||n.keepAliveExclude!==void 0);zt(()=>n.modelValue,(F,J)=>{const Et=H(F)===!0?lt(F):-1;a!==!0&&E(Et===-1?0:Et<lt(J)?-1:1),h.value!==Et&&(h.value=Et,t("beforeTransition",F,J),i(()=>{t("transition",F,J)},n.transitionDuration))});function M(){p(1)}function x(){p(-1)}function B(F){t("update:modelValue",F)}function H(F){return F!=null&&F!==""}function lt(F){return o.findIndex(J=>J.props.name===F&&J.props.disable!==""&&J.props.disable!==!0)}function Z(){return o.filter(F=>F.props.disable!==""&&F.props.disable!==!0)}function E(F){const J=F!==0&&n.animated===!0&&h.value!==-1?"q-transition--"+(F===-1?w.value:T.value):null;u.value!==J&&(u.value=J)}function p(F,J=h.value){let Et=J+F;for(;Et!==-1&&Et<o.length;){const Tt=o[Et];if(Tt!==void 0&&Tt.props.disable!==""&&Tt.props.disable!==!0){E(F),a=!0,t("update:modelValue",Tt.props.name),setTimeout(()=>{a=!1});return}Et+=F}n.infinite===!0&&o.length!==0&&J!==-1&&J!==o.length&&p(F,F===-1?o.length:-1)}function _(){const F=lt(n.modelValue);return h.value!==F&&(h.value=F),!0}function y(){const F=H(n.modelValue)===!0&&_()&&o[h.value];return n.keepAlive===!0?[j(lh,k.value,[j(R.value===!0?r(P.value,()=>({...wl,name:P.value})):wl,{key:P.value,style:S.value},()=>F)])]:[j("div",{class:"q-panel scroll",style:S.value,key:P.value,role:"tabpanel"},[F])]}function v(){if(o.length!==0)return n.animated===!0?[j(Lr,{name:u.value},y)]:y()}function I(F){return o=ah(Ft(F.default,[])).filter(J=>J.props!==null&&J.props.slot===void 0&&H(J.props.name)===!0),o.length}function g(){return o}return Object.assign(e,{next:M,previous:x,goTo:B}),{panelIndex:h,panelDirectives:m,updatePanelsList:I,updatePanelIndex:_,getPanelContent:v,getEnabledPanels:Z,getPanels:g,isValidPanelName:H,keepAliveProps:k,needsUniqueKeepAliveWrapper:R,goToPanelByOffset:p,goToPanel:B,nextPanel:M,previousPanel:x}}const i_=Bt({name:"QCarouselSlide",props:{...e_,imgSrc:String},setup(n,{slots:t}){const e=z(()=>n.imgSrc?{backgroundImage:`url("${n.imgSrc}")`}:{});return()=>j("div",{class:"q-carousel__slide",style:e.value},Ft(t.default))}});let Sn=0;const o_={fullscreen:Boolean,noRouteFullscreenExit:Boolean},a_=["update:fullscreen","fullscreen"];function l_(){const n=Wt(),{props:t,emit:e,proxy:r}=n;let i,o,a;const u=pt(!1);Il(n)===!0&&zt(()=>r.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&m()}),zt(()=>t.fullscreen,w=>{u.value!==w&&h()}),zt(u,w=>{e("update:fullscreen",w),e("fullscreen",w)});function h(){u.value===!0?m():d()}function d(){u.value!==!0&&(u.value=!0,a=r.$el.parentNode,a.replaceChild(o,r.$el),document.body.appendChild(r.$el),Sn++,Sn===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:m},Mr.add(i))}function m(){u.value===!0&&(i!==void 0&&(Mr.remove(i),i=void 0),a.replaceChild(r.$el,o),u.value=!1,Sn=Math.max(0,Sn-1),Sn===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),r.$el.scrollIntoView!==void 0&&setTimeout(()=>{r.$el.scrollIntoView()})))}return uh(()=>{o=document.createElement("span")}),Wn(()=>{t.fullscreen===!0&&d()}),Gn(m),Object.assign(r,{toggleFullscreen:h,setFullscreen:d,exitFullscreen:m}),{inFullscreen:u,toggleFullscreen:h}}const u_=["top","right","bottom","left"],c_=["regular","flat","outline","push","unelevated"],h_=Bt({name:"QCarousel",props:{...Xr,...n_,...o_,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:n=>c_.includes(n),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:n=>u_.includes(n)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...a_,...r_],setup(n,{slots:t}){const{proxy:{$q:e}}=Wt(),r=Yr(n,e);let i=null,o;const{updatePanelsList:a,getPanelContent:u,panelDirectives:h,goToPanel:d,previousPanel:m,nextPanel:w,getEnabledPanels:T,panelIndex:S}=s_(),{inFullscreen:P}=l_(),k=z(()=>P.value!==!0&&n.height!==void 0?{height:n.height}:{}),R=z(()=>n.vertical===!0?"vertical":"horizontal"),M=z(()=>n.navigationPosition||(n.vertical===!0?"right":"bottom")),x=z(()=>`q-carousel q-panel-parent q-carousel--with${n.padding===!0?"":"out"}-padding`+(P.value===!0?" fullscreen":"")+(r.value===!0?" q-carousel--dark q-dark":"")+(n.arrows===!0?` q-carousel--arrows-${R.value}`:"")+(n.navigation===!0?` q-carousel--navigation-${M.value}`:"")),B=z(()=>{const y=[n.prevIcon||e.iconSet.carousel[n.vertical===!0?"up":"left"],n.nextIcon||e.iconSet.carousel[n.vertical===!0?"down":"right"]];return n.vertical===!1&&e.lang.rtl===!0?y.reverse():y}),H=z(()=>n.navigationIcon||e.iconSet.carousel.navigationIcon),lt=z(()=>n.navigationActiveIcon||H.value),Z=z(()=>({color:n.controlColor,textColor:n.controlTextColor,round:!0,[n.controlType]:!0,dense:!0}));zt(()=>n.modelValue,()=>{n.autoplay&&E()}),zt(()=>n.autoplay,y=>{y?E():i!==null&&(clearTimeout(i),i=null)});function E(){const y=ch(n.autoplay)===!0?Math.abs(n.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,y>=0?w():m()},y)}Wn(()=>{n.autoplay&&E()}),Gn(()=>{i!==null&&clearTimeout(i)});function p(y,v){return j("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${y} q-carousel__navigation--${M.value}`+(n.controlColor!==void 0?` text-${n.controlColor}`:"")},[j("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},T().map(v))])}function _(){const y=[];if(n.navigation===!0){const v=t["navigation-icon"]!==void 0?t["navigation-icon"]:g=>j(ce,{key:"nav"+g.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${g.active===!0?"":"in"}active`,...g.btnProps,onClick:g.onClick}),I=o-1;y.push(p("buttons",(g,F)=>{const J=g.props.name,Et=S.value===F;return v({index:F,maxIndex:I,name:J,active:Et,btnProps:{icon:Et===!0?lt.value:H.value,size:"sm",...Z.value},onClick:()=>{d(J)}})}))}else if(n.thumbnails===!0){const v=n.controlColor!==void 0?` text-${n.controlColor}`:"";y.push(p("thumbnails",I=>{const g=I.props;return j("img",{key:"tmb#"+g.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${g.name===n.modelValue?"":"in"}active`+v,src:g.imgSrc||g["img-src"],onClick:()=>{d(g.name)}})}))}return n.arrows===!0&&S.value>=0&&((n.infinite===!0||S.value>0)&&y.push(j("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${R.value} absolute flex flex-center`},[j(ce,{icon:B.value[0],...Z.value,onClick:m})])),(n.infinite===!0||S.value<o-1)&&y.push(j("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${R.value} absolute flex flex-center`},[j(ce,{icon:B.value[1],...Z.value,onClick:w})]))),dh(t.control,y)}return()=>(o=a(t),j("div",{class:x.value,style:k.value},[hh("div",{class:"q-carousel__slides-container"},u(),"sl-cont",n.swipeable,()=>h.value)].concat(_())))}}),d_=async()=>{const n=await Qi.getCollection("slides","Не удалось загрузить данные слайдов");return{slides:n.items.map(e=>({...e,id:Number(e.id)})),error:n.error}},f_={class:"absolute-bottom custom-caption"},m_={class:"text-h2"},p_={class:"text-subtitle1"},g_=Xn({__name:"LandingSlider",setup(n){const t=Ol(),e=pt(1);return(r,i)=>(St(),ke(Ti,{"fetch-data":$t(d_),"data-key":"slides"},{content:_t(({data:o})=>[ct(h_,{modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),class:Rl([{"height-xs":$t(t).screen.xs,"height-sm":$t(t).screen.sm,"height-md":$t(t).screen.md,"height-lg":$t(t).screen.lg||$t(t).screen.xl},"bg-white text-white"]),"transition-next":"slide-left","transition-prev":"slide-right",animated:"",arrows:"",autoplay:"",infinite:"",swipeable:""},{default:_t(()=>[(St(!0),Zt(Bn,null,Sl(o||[],({id:a,img:u,title:h,subtitle:d})=>(St(),ke(i_,{key:a,"img-src":u,name:a},{default:_t(()=>[Lt("div",f_,[Lt("div",m_,te(h),1),Lt("div",p_,te(d),1)])]),_:2},1032,["img-src","name"]))),128))]),_:2},1032,["modelValue","class"])]),_:1},8,["fetch-data"]))}}),__=async()=>{const n=await Qi.getDocument("slogan","1","Не удалось загрузить данные слогана");return{title:n.data?.title??"",error:n.error}},y_=Xn({__name:"LandingSlogan",setup(n){return(t,e)=>(St(),ke(Ti,{"fetch-data":$t(__),"is-empty":!1,"data-key":"title"},null,8,["fetch-data"]))}}),v_={class:"q-mx-auto q-pt-xl q-px-md",style:{"max-width":"1200px"}},A_=Xn({__name:"HomePage",setup(n){return fh(()=>mh.setMeta(ph)),(t,e)=>(St(),ke(vh,null,{default:_t(()=>[ct(g_),Lt("div",v_,[ct(y_)]),ct(Gg)]),_:1}))}});export{A_ as default};
