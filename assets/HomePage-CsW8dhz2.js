import{c as Gt,g as ee,i as Qs,e as Ue,l as jc,d as zc,a as K,h as tt,b as Ee,I as Hc,J as Kc,T as xr,Q as Qc,K as Gc,L as Wc,j as Kn,M as kr,N as Xc,m as Gs,v as Yc,w as jt,O as Al,o as Qr,P as Ir,r as it,s as Jc,R as Zc,S as th,U as eh,V as nh,W as Mt,f as Se,X as Ar,Y as rh,Z as Cl,_ as sh,$ as bl,a0 as ih,u as Gr,a1 as Ft,y as gt,B as Lt,A as ut,z as Ot,D as rt,a2 as Nr,C as Jt,a3 as Ve,a4 as Cr,x as Ke,a5 as Ds,a6 as Sl,a7 as Rl,a8 as oh,a9 as Pl,aa as ah,ab as xs,ac as ks,n as lh,ad as pr,ae as Wo,af as uh,ag as ch,ah as hh,ai as dh,aj as fh,ak as mh,t as ph}from"./index-wDcdCf_4.js";import{b as gh,a as _h,h as yh,u as Vl}from"./use-timeout-BxPhXYz9.js";const vh=Gt({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:t}){const{proxy:{$q:e}}=ee(),r=Qs(jc,Ue);if(r===Ue)return console.error("QPage needs to be a deep child of QLayout"),Ue;if(Qs(zc,Ue)===Ue)return console.error("QPage needs to be child of QPageContainer"),Ue;const o=K(()=>{const c=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof n.styleFn=="function"){const h=r.isContainer.value===!0?r.containerHeight.value:e.screen.height;return n.styleFn(c,h)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-c+"px":e.screen.height===0?c!==0?`calc(100vh - ${c}px)`:"100vh":e.screen.height-c+"px"}}),a=K(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>tt("main",{class:a.value,style:o.value},Ee(t.default))}}),Eh='<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',yi=Gt({name:"QSpinnerDots",props:Hc,setup(n){const{cSize:t,classes:e}=Kc(n);return()=>tt("svg",{class:e.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",innerHTML:Eh})}}),vi={dark:{type:Boolean,default:null}};function Ei(n,t){return K(()=>n.dark===null?t.dark.isActive:n.dark)}const Dl={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function xl(n,t=()=>{},e=()=>{}){return{transitionProps:K(()=>{const r=`q-transition--${n.transitionShow||t()}`,i=`q-transition--${n.transitionHide||e()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:K(()=>`--q-transition-duration: ${n.transitionDuration}ms`)}}const Ti=Gt({name:"QInnerLoading",props:{...vi,...Dl,showing:Boolean,color:String,size:{type:[String,Number],default:"42px"},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(n,{slots:t}){const e=ee(),r=Ei(n,e.proxy.$q),{transitionProps:i,transitionStyle:o}=xl(n),a=K(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(r.value===!0?" q-inner-loading--dark":"")),c=K(()=>"q-inner-loading__label"+(n.labelClass!==void 0?` ${n.labelClass}`:""));function h(){const m=[tt(Qc,{size:n.size,color:n.color})];return n.label!==void 0&&m.push(tt("div",{class:c.value,style:n.labelStyle},[n.label])),m}function f(){return n.showing===!0?tt("div",{class:a.value,style:o.value},t.default!==void 0?t.default():h()):null}return()=>tt(xr,i.value,f)}}),Ns=Gt({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(n,{slots:t}){const e=K(()=>`q-card__section q-card__section--${n.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>tt(n.tag,{class:e.value},Ee(t.default))}}),Xo=Gt({name:"QCard",props:{...vi,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(n,{slots:t}){const{proxy:{$q:e}}=ee(),r=Ei(n,e),i=K(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(n.bordered===!0?" q-card--bordered":"")+(n.square===!0?" q-card--square no-border-radius":"")+(n.flat===!0?" q-card--flat no-shadow":""));return()=>tt(n.tag,{class:i.value},Ee(t.default))}}),Th=Gt({name:"QCardActions",props:{...Gc,vertical:Boolean},setup(n,{slots:t}){const e=Wc(n),r=K(()=>`q-card__actions ${e.value} q-card__actions--${n.vertical===!0?"vert column":"horiz row"}`);return()=>tt("div",{class:r.value},Ee(t.default))}});function wh(n,t,e){let r;function i(){r!==void 0&&(kr.remove(r),r=void 0)}return Kn(()=>{n.value===!0&&i()}),{removeFromHistory:i,addToHistory(){r={condition:()=>e.value===!0,handler:t},kr.add(r)}}}function Ih(){let n;const t=ee();function e(){n=void 0}return Xc(e),Kn(e),{removeTick:e,registerTick(r){n=r,Gs(()=>{n===r&&(Yc(t)===!1&&n(),n=void 0)})}}}const Ah={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ch=["beforeShow","show","beforeHide","hide"];function bh({showing:n,canShow:t,hideOnRouteChange:e,handleShow:r,handleHide:i,processOnMount:o}){const a=ee(),{props:c,emit:h,proxy:f}=a;let m;function T(k){n.value===!0?R(k):w(k)}function w(k){if(c.disable===!0||k?.qAnchorHandled===!0||t!==void 0&&t(k)!==!0)return;const M=c["onUpdate:modelValue"]!==void 0;M===!0&&(h("update:modelValue",!0),m=k,Gs(()=>{m===k&&(m=void 0)})),(c.modelValue===null||M===!1)&&S(k)}function S(k){n.value!==!0&&(n.value=!0,h("beforeShow",k),r!==void 0?r(k):h("show",k))}function R(k){if(c.disable===!0)return;const M=c["onUpdate:modelValue"]!==void 0;M===!0&&(h("update:modelValue",!1),m=k,Gs(()=>{m===k&&(m=void 0)})),(c.modelValue===null||M===!1)&&N(k)}function N(k){n.value!==!1&&(n.value=!1,h("beforeHide",k),i!==void 0?i(k):h("hide",k))}function D(k){c.disable===!0&&k===!0?c["onUpdate:modelValue"]!==void 0&&h("update:modelValue",!1):k===!0!==n.value&&(k===!0?S:N)(m)}jt(()=>c.modelValue,D),e!==void 0&&Al(a)===!0&&jt(()=>f.$route.fullPath,()=>{e.value===!0&&n.value===!0&&R()}),Qr(()=>{D(c.modelValue)});const j={show:w,hide:R,toggle:T};return Object.assign(f,j),j}let Sn=[],Fn=[];function kl(n){Fn=Fn.filter(t=>t!==n)}function Sh(n){kl(n),Fn.push(n)}function Yo(n){kl(n),Fn.length===0&&Sn.length!==0&&(Sn[Sn.length-1](),Sn=[])}function Rh(n){Fn.length===0?n():Sn.push(n)}const br=[];function Ph(n){return br.find(t=>t.contentEl!==null&&t.contentEl.contains(n))}function Vh(n,t){do{if(n.$options.name==="QMenu"){if(n.hide(t),n.$props.separateClosePopup===!0)return Ir(n)}else if(n.__qPortal===!0){const e=Ir(n);return e?.$options.name==="QPopupProxy"?(n.hide(t),e):n}n=Ir(n)}while(n!=null)}function Dh(n,t,e){for(;e!==0&&n!==void 0&&n!==null;){if(n.__qPortal===!0){if(e--,n.$options.name==="QMenu"){n=Vh(n,t);continue}n.hide(t)}n=Ir(n)}}const xh=Gt({name:"QPortal",setup(n,{slots:t}){return()=>t.default()}});function kh(n){for(n=n.parent;n!=null;){if(n.type.name==="QGlobalDialog")return!0;if(n.type.name==="QDialog"||n.type.name==="QMenu")return!1;n=n.parent}return!1}function Nh(n,t,e,r){const i=it(!1),o=it(!1);let a=null;const c={},h=kh(n);function f(T){if(T===!0){Yo(c),o.value=!0;return}o.value=!1,i.value===!1&&(h===!1&&a===null&&(a=eh(!1,r)),i.value=!0,br.push(n.proxy),Sh(c))}function m(T){if(o.value=!1,T!==!0)return;Yo(c),i.value=!1;const w=br.indexOf(n.proxy);w!==-1&&br.splice(w,1),a!==null&&(nh(a),a=null)}return Jc(()=>{m(!0)}),n.proxy.__qPortal=!0,Zc(n.proxy,"contentEl",()=>t.value),{showPortal:f,hidePortal:m,portalIsActive:i,portalIsAccessible:o,renderPortal:()=>h===!0?e():i.value===!0?[tt(th,{to:a},tt(xh,e))]:void 0}}let Cn=0,Os,Ms,Rn,Ls=!1,Jo,Zo,ta,Re=null;function Oh(n){Mh(n)&&Ar(n)}function Mh(n){if(n.target===document.body||n.target.classList.contains("q-layout__backdrop"))return!0;const t=rh(n),e=n.shiftKey&&!n.deltaX,r=!e&&Math.abs(n.deltaX)<=Math.abs(n.deltaY),i=e||r?n.deltaY:n.deltaX;for(let o=0;o<t.length;o++){const a=t[o];if(yh(a,r))return r?i<0&&a.scrollTop===0?!0:i>0&&a.scrollTop+a.clientHeight===a.scrollHeight:i<0&&a.scrollLeft===0?!0:i>0&&a.scrollLeft+a.clientWidth===a.scrollWidth}return!0}function ea(n){n.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function gr(n){Ls!==!0&&(Ls=!0,requestAnimationFrame(()=>{Ls=!1;const{height:t}=n.target,{clientHeight:e,scrollTop:r}=document.scrollingElement;(Rn===void 0||t!==window.innerHeight)&&(Rn=e-t,document.scrollingElement.scrollTop=r),r>Rn&&(document.scrollingElement.scrollTop-=Math.ceil((r-Rn)/8))}))}function na(n){const t=document.body,e=window.visualViewport!==void 0;if(n==="add"){const{overflowY:r,overflowX:i}=window.getComputedStyle(t);Os=gh(window),Ms=_h(window),Jo=t.style.left,Zo=t.style.top,ta=window.location.href,t.style.left=`-${Os}px`,t.style.top=`-${Ms}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,Mt.is.ios===!0&&(e===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",gr,Se.passiveCapture),window.visualViewport.addEventListener("scroll",gr,Se.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ea,Se.passiveCapture))}Mt.is.desktop===!0&&Mt.is.mac===!0&&window[`${n}EventListener`]("wheel",Oh,Se.notPassive),n==="remove"&&(Mt.is.ios===!0&&(e===!0?(window.visualViewport.removeEventListener("resize",gr,Se.passiveCapture),window.visualViewport.removeEventListener("scroll",gr,Se.passiveCapture)):window.removeEventListener("scroll",ea,Se.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Jo,t.style.top=Zo,window.location.href===ta&&window.scrollTo(Os,Ms),Rn=void 0)}function Lh(n){let t="add";if(n===!0){if(Cn++,Re!==null){clearTimeout(Re),Re=null;return}if(Cn>1)return}else{if(Cn===0||(Cn--,Cn>0))return;if(t="remove",Mt.is.ios===!0&&Mt.is.nativeMobile===!0){Re!==null&&clearTimeout(Re),Re=setTimeout(()=>{na(t),Re=null},100);return}}na(t)}function Fh(){let n;return{preventBodyScroll(t){t!==n&&(n!==void 0||t===!0)&&(n=t,Lh(t))}}}const xe=[];let Xe;function Bh(n){Xe=n.keyCode===27}function qh(){Xe===!0&&(Xe=!1)}function Uh(n){Xe===!0&&(Xe=!1,Cl(n,27)===!0&&xe[xe.length-1](n))}function Nl(n){window[n]("keydown",Bh),window[n]("blur",qh),window[n]("keyup",Uh),Xe=!1}function $h(n){Mt.is.desktop===!0&&(xe.push(n),xe.length===1&&Nl("addEventListener"))}function ra(n){const t=xe.indexOf(n);t!==-1&&(xe.splice(t,1),xe.length===0&&Nl("removeEventListener"))}const ke=[];function Ol(n){ke[ke.length-1](n)}function jh(n){Mt.is.desktop===!0&&(ke.push(n),ke.length===1&&document.body.addEventListener("focusin",Ol))}function sa(n){const t=ke.indexOf(n);t!==-1&&(ke.splice(t,1),ke.length===0&&document.body.removeEventListener("focusin",Ol))}let _r=0;const zh={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ia={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},Hh=Gt({name:"QDialog",inheritAttrs:!1,props:{...Ah,...Dl,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:n=>["standard","top","bottom","left","right"].includes(n)}},emits:[...Ch,"shake","click","escapeKey"],setup(n,{slots:t,emit:e,attrs:r}){const i=ee(),o=it(null),a=it(!1),c=it(!1);let h=null,f=null,m,T;const w=K(()=>n.persistent!==!0&&n.noRouteDismiss!==!0&&n.seamless!==!0),{preventBodyScroll:S}=Fh(),{registerTimeout:R}=Vl(),{registerTick:N,removeTick:D}=Ih(),{transitionProps:j,transitionStyle:k}=xl(n,()=>ia[n.position][0],()=>ia[n.position][1]),M=K(()=>k.value+(n.backdropFilter!==void 0?`;backdrop-filter:${n.backdropFilter};-webkit-backdrop-filter:${n.backdropFilter}`:"")),{showPortal:q,hidePortal:G,portalIsAccessible:X,renderPortal:v}=Nh(i,o,we,"dialog"),{hide:p}=bh({showing:a,hideOnRouteChange:w,handleShow:Z,handleHide:Tt,processOnMount:!0}),{addToHistory:_,removeFromHistory:y}=wh(a,p,w),E=K(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${n.maximized===!0?"maximized":"minimized"} q-dialog__inner--${n.position} ${zh[n.position]}`+(c.value===!0?" q-dialog__inner--animating":"")+(n.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(n.fullHeight===!0?" q-dialog__inner--fullheight":"")+(n.square===!0?" q-dialog__inner--square":"")),I=K(()=>a.value===!0&&n.seamless!==!0),g=K(()=>n.autoClose===!0?{onClick:qt}:{}),F=K(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${I.value===!0?"modal":"seamless"}`,r.class]);jt(()=>n.maximized,Y=>{a.value===!0&&cn(Y)}),jt(I,Y=>{S(Y),Y===!0?(jh(hn),$h(Te)):(sa(hn),ra(Te))});function Z(Y){_(),f=n.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,cn(n.maximized),q(),c.value=!0,n.noFocus!==!0?(document.activeElement?.blur(),N(wt)):D(),R(()=>{if(i.proxy.$q.platform.is.ios===!0){if(n.seamless!==!0&&document.activeElement){const{top:lt,bottom:ne}=document.activeElement.getBoundingClientRect(),{innerHeight:Yn}=window,re=window.visualViewport!==void 0?window.visualViewport.height:Yn;lt>0&&ne>re/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-re,ne>=Yn?1/0:Math.ceil(document.scrollingElement.scrollTop+ne-re/2))),document.activeElement.scrollIntoView()}T=!0,o.value.click(),T=!1}q(!0),c.value=!1,e("show",Y)},n.transitionDuration)}function Tt(Y){D(),y(),un(!0),c.value=!0,G(),f!==null&&(((Y?.type.indexOf("key")===0?f.closest('[tabindex]:not([tabindex^="-"])'):void 0)||f).focus(),f=null),R(()=>{G(!0),c.value=!1,e("hide",Y)},n.transitionDuration)}function wt(Y){Rh(()=>{let lt=o.value;if(lt!==null){if(Y!==void 0){const ne=lt.querySelector(Y);if(ne!==null){ne.focus({preventScroll:!0});return}}lt.contains(document.activeElement)!==!0&&(lt=lt.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||lt.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||lt.querySelector("[autofocus], [data-autofocus]")||lt,lt.focus({preventScroll:!0}))}})}function Wt(Y){Y&&typeof Y.focus=="function"?Y.focus({preventScroll:!0}):wt(),e("shake");const lt=o.value;lt!==null&&(lt.classList.remove("q-animate--scale"),lt.classList.add("q-animate--scale"),h!==null&&clearTimeout(h),h=setTimeout(()=>{h=null,o.value!==null&&(lt.classList.remove("q-animate--scale"),wt())},170))}function Te(){n.seamless!==!0&&(n.persistent===!0||n.noEscDismiss===!0?n.maximized!==!0&&n.noShake!==!0&&Wt():(e("escapeKey"),p()))}function un(Y){h!==null&&(clearTimeout(h),h=null),(Y===!0||a.value===!0)&&(cn(!1),n.seamless!==!0&&(S(!1),sa(hn),ra(Te))),Y!==!0&&(f=null)}function cn(Y){Y===!0?m!==!0&&(_r<1&&document.body.classList.add("q-body--dialog"),_r++,m=!0):m===!0&&(_r<2&&document.body.classList.remove("q-body--dialog"),_r--,m=!1)}function qt(Y){T!==!0&&(p(Y),e("click",Y))}function pt(Y){n.persistent!==!0&&n.noBackdropDismiss!==!0?p(Y):n.noShake!==!0&&Wt()}function hn(Y){n.allowFocusOutside!==!0&&X.value===!0&&sh(o.value,Y.target)!==!0&&wt('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:wt,shake:Wt,__updateRefocusTarget(Y){f=Y||null}}),Kn(un);function we(){return tt("div",{role:"dialog","aria-modal":I.value===!0?"true":"false",...r,class:F.value},[tt(xr,{name:"q-transition--fade",appear:!0},()=>I.value===!0?tt("div",{class:"q-dialog__backdrop fixed-full",style:M.value,"aria-hidden":"true",tabindex:-1,onClick:pt}):null),tt(xr,j.value,()=>a.value===!0?tt("div",{ref:o,class:E.value,style:k.value,tabindex:-1,...g.value},Ee(t.default)):null)])}return v}});function oa(n){if(n===!1)return 0;if(n===!0||n===void 0)return 1;const t=parseInt(n,10);return isNaN(t)?0:t}const Kh=bl({name:"close-popup",beforeMount(n,{value:t}){const e={depth:oa(t),handler(r){e.depth!==0&&setTimeout(()=>{const i=Ph(n);i!==void 0&&Dh(i,r,e.depth)})},handlerKey(r){Cl(r,13)===!0&&e.handler(r)}};n.__qclosepopup=e,n.addEventListener("click",e.handler),n.addEventListener("keyup",e.handlerKey)},updated(n,{value:t,oldValue:e}){t!==e&&(n.__qclosepopup.depth=oa(t))},beforeUnmount(n){const t=n.__qclosepopup;n.removeEventListener("click",t.handler),n.removeEventListener("keyup",t.handlerKey),delete n.__qclosepopup}});function Ml(){return Qs(ih)}const Qh=()=>{const n=Ml();return{isMobile:K(()=>n.screen.lt.sm)}},Gh=()=>{};var aa={};/**
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
 */const Ll=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Wh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],c=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,c=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,m=o>>2,T=(o&3)<<4|c>>4;let w=(c&15)<<2|f>>6,S=f&63;h||(S=64,a||(w=64)),r.push(e[m],e[T],e[w],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ll(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Wh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const T=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||T==null)throw new Xh;const w=o<<2|c>>4;if(r.push(w),f!==64){const S=c<<4&240|f>>2;if(r.push(S),T!==64){const R=f<<6&192|T;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Xh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yh=function(n){const t=Ll(n);return Fl.encodeByteArray(t,!0)},Or=function(n){return Yh(n).replace(/\./g,"")},Jh=function(n){try{return Fl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Zh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const td=()=>Zh().__FIREBASE_DEFAULTS__,ed=()=>{if(typeof process>"u"||typeof aa>"u")return;const n=aa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Jh(n[1]);return t&&JSON.parse(t)},wi=()=>{try{return Gh()||td()||ed()||nd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rd=n=>{var t,e;return(e=(t=wi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},sd=n=>{const t=rd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Bl=()=>{var n;return(n=wi())===null||n===void 0?void 0:n.config};/**
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
 */class id{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ii(n){return n.endsWith(".cloudworkstations.dev")}async function od(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ad(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Or(JSON.stringify(e)),Or(JSON.stringify(a)),""].join(".")}const kn={};function ld(){const n={prod:[],emulator:[]};for(const t of Object.keys(kn))kn[t]?n.emulator.push(t):n.prod.push(t);return n}function ud(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let la=!1;function cd(n,t){if(typeof window>"u"||typeof document>"u"||!Ii(window.location.host)||kn[n]===t||kn[n]||la)return;kn[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=ld().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,S){w.setAttribute("width","24"),w.setAttribute("id",S),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{la=!0,a()},w}function m(w,S){w.setAttribute("id",S),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=ud(r),S=e("text"),R=document.getElementById(S)||document.createElement("span"),N=e("learnmore"),D=document.getElementById(N)||document.createElement("a"),j=e("preprendIcon"),k=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const M=w.element;c(M),m(D,N);const q=f();h(k,j),M.append(k,R,D,q),document.body.appendChild(M)}o?(R.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function hd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dd(){var n;const t=(n=wi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fd(){return!dd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function md(){try{return typeof indexedDB=="object"}catch{return!1}}function pd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const gd="FirebaseError";class sn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=gd,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ql.prototype.create)}}class ql{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?_d(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new sn(i,c,r)}}function _d(n,t){return n.replace(yd,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const yd=/\{\$([^}]+)}/g;function Mr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(ua(o)&&ua(a)){if(!Mr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ua(n){return n!==null&&typeof n=="object"}/**
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
 */function Ul(n){return n&&n._delegate?n._delegate:n}class Bn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Pe="[DEFAULT]";/**
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
 */class vd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new id;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Td(t))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Pe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pe){return this.instances.has(t)}getOptions(t=Pe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ed(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Pe){return this.component?this.component.multipleInstances?t:Pe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ed(n){return n===Pe?void 0:n}function Td(n){return n.instantiationMode==="EAGER"}/**
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
 */class wd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new vd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Id={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Ad=H.INFO,Cd={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},bd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Cd[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $l{constructor(t){this.name=t,this._logLevel=Ad,this._logHandler=bd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Id[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const Sd=(n,t)=>t.some(e=>n instanceof e);let ca,ha;function Rd(){return ca||(ca=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pd(){return ha||(ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jl=new WeakMap,Ws=new WeakMap,zl=new WeakMap,Fs=new WeakMap,Ai=new WeakMap;function Vd(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ue(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&jl.set(e,n)}).catch(()=>{}),Ai.set(t,n),t}function Dd(n){if(Ws.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ws.set(n,t)}let Xs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ws.get(n);if(t==="objectStoreNames")return n.objectStoreNames||zl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ue(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function xd(n){Xs=n(Xs)}function kd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Bs(this),t,...e);return zl.set(r,t.sort?t.sort():[t]),ue(r)}:Pd().includes(n)?function(...t){return n.apply(Bs(this),t),ue(jl.get(this))}:function(...t){return ue(n.apply(Bs(this),t))}}function Nd(n){return typeof n=="function"?kd(n):(n instanceof IDBTransaction&&Dd(n),Sd(n,Rd())?new Proxy(n,Xs):n)}function ue(n){if(n instanceof IDBRequest)return Vd(n);if(Fs.has(n))return Fs.get(n);const t=Nd(n);return t!==n&&(Fs.set(n,t),Ai.set(t,n)),t}const Bs=n=>Ai.get(n);function Od(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),c=ue(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ue(a.result),h.oldVersion,h.newVersion,ue(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Md=["get","getKey","getAll","getAllKeys","count"],Ld=["put","add","delete","clear"],qs=new Map;function da(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(qs.get(t))return qs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Ld.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Md.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&h.done]))[0]};return qs.set(t,o),o}xd(n=>({...n,get:(t,e,r)=>da(t,e)||n.get(t,e,r),has:(t,e)=>!!da(t,e)||n.has(t,e)}));/**
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
 */class Fd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Bd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Bd(n){const t=n.getComponent();return t?.type==="VERSION"}const Ys="@firebase/app",fa="0.13.1";/**
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
 */const Zt=new $l("@firebase/app"),qd="@firebase/app-compat",Ud="@firebase/analytics-compat",$d="@firebase/analytics",jd="@firebase/app-check-compat",zd="@firebase/app-check",Hd="@firebase/auth",Kd="@firebase/auth-compat",Qd="@firebase/database",Gd="@firebase/data-connect",Wd="@firebase/database-compat",Xd="@firebase/functions",Yd="@firebase/functions-compat",Jd="@firebase/installations",Zd="@firebase/installations-compat",tf="@firebase/messaging",ef="@firebase/messaging-compat",nf="@firebase/performance",rf="@firebase/performance-compat",sf="@firebase/remote-config",of="@firebase/remote-config-compat",af="@firebase/storage",lf="@firebase/storage-compat",uf="@firebase/firestore",cf="@firebase/ai",hf="@firebase/firestore-compat",df="firebase",ff="11.9.0";/**
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
 */const Js="[DEFAULT]",mf={[Ys]:"fire-core",[qd]:"fire-core-compat",[$d]:"fire-analytics",[Ud]:"fire-analytics-compat",[zd]:"fire-app-check",[jd]:"fire-app-check-compat",[Hd]:"fire-auth",[Kd]:"fire-auth-compat",[Qd]:"fire-rtdb",[Gd]:"fire-data-connect",[Wd]:"fire-rtdb-compat",[Xd]:"fire-fn",[Yd]:"fire-fn-compat",[Jd]:"fire-iid",[Zd]:"fire-iid-compat",[tf]:"fire-fcm",[ef]:"fire-fcm-compat",[nf]:"fire-perf",[rf]:"fire-perf-compat",[sf]:"fire-rc",[of]:"fire-rc-compat",[af]:"fire-gcs",[lf]:"fire-gcs-compat",[uf]:"fire-fst",[hf]:"fire-fst-compat",[cf]:"fire-vertex","fire-js":"fire-js",[df]:"fire-js-all"};/**
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
 */const Lr=new Map,pf=new Map,Zs=new Map;function ma(n,t){try{n.container.addComponent(t)}catch(e){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fr(n){const t=n.name;if(Zs.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;Zs.set(t,n);for(const e of Lr.values())ma(e,n);for(const e of pf.values())ma(e,n);return!0}function gf(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function _f(n){return n==null?!1:n.settings!==void 0}/**
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
 */const yf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ce=new ql("app","Firebase",yf);/**
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
 */class vf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}/**
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
 */const Ef=ff;function Hl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Js,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw ce.create("bad-app-name",{appName:String(i)});if(e||(e=Bl()),!e)throw ce.create("no-options");const o=Lr.get(i);if(o){if(Mr(e,o.options)&&Mr(r,o.config))return o;throw ce.create("duplicate-app",{appName:i})}const a=new wd(i);for(const h of Zs.values())a.addComponent(h);const c=new vf(e,r,a);return Lr.set(i,c),c}function Tf(n=Js){const t=Lr.get(n);if(!t&&n===Js&&Bl())return Hl();if(!t)throw ce.create("no-app",{appName:n});return t}function Qe(n,t,e){var r;let i=(r=mf[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(c.join(" "));return}Fr(new Bn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const wf="firebase-heartbeat-database",If=1,qn="firebase-heartbeat-store";let Us=null;function Kl(){return Us||(Us=Od(wf,If,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(qn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ce.create("idb-open",{originalErrorMessage:n.message})})),Us}async function Af(n){try{const e=(await Kl()).transaction(qn),r=await e.objectStore(qn).get(Ql(n));return await e.done,r}catch(t){if(t instanceof sn)Zt.warn(t.message);else{const e=ce.create("idb-get",{originalErrorMessage:t?.message});Zt.warn(e.message)}}}async function pa(n,t){try{const r=(await Kl()).transaction(qn,"readwrite");await r.objectStore(qn).put(t,Ql(n)),await r.done}catch(e){if(e instanceof sn)Zt.warn(e.message);else{const r=ce.create("idb-set",{originalErrorMessage:e?.message});Zt.warn(r.message)}}}function Ql(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Cf=1024,bf=30;class Sf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ga();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>bf){const a=Vf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ga(),{heartbeatsToSend:r,unsentEntries:i}=Rf(this._heartbeatsCache.heartbeats),o=Or(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Zt.warn(e),""}}}function ga(){return new Date().toISOString().substring(0,10)}function Rf(n,t=Cf){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),_a(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),_a(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Pf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return md()?pd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Af(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return pa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return pa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function _a(n){return Or(JSON.stringify({version:2,heartbeats:n})).length}function Vf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Df(n){Fr(new Bn("platform-logger",t=>new Fd(t),"PRIVATE")),Fr(new Bn("heartbeat",t=>new Sf(t),"PRIVATE")),Qe(Ys,fa,n),Qe(Ys,fa,"esm2017"),Qe("fire-js","")}Df("");var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var he,Gl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,I){for(var g=Array(arguments.length-2),F=2;F<arguments.length;F++)g[F-2]=arguments[F];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],E=v.g[2];var I=v.g[3],g=p+(I^_&(E^I))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(_^E))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^I)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~I))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=_;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)v[_++]=this.g[p]>>>y&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(_[E]=I,y=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return T;if(0>v)return D(f(-v));for(var p=[],_=1,y=0;v>=_;y++)p[y]=v/_|0,_*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=T,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var T=h(0),w=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-D(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(N(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),_=this,y="";;){var E=q(_,p).g;_=j(_,E.j(p));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,R(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function N(v){return v.h==-1}n.l=function(v){return v=j(this,v),N(v)?-1:R(v)?0:1};function D(v){for(var p=v.g.length,_=[],y=0;y<p;y++)_[y]=~v.g[y];return new a(_,~v.h).add(w)}n.abs=function(){return N(this)?D(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,_[E]=g<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(v,p){return v.add(D(p))}n.j=function(v){if(R(this)||R(v))return T;if(N(this))return N(v)?D(this).j(D(v)):D(D(this).j(v));if(N(v))return D(this.j(D(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,F=v.i(E)>>>16,Z=v.i(E)&65535;_[2*y+2*E]+=g*Z,k(_,2*y+2*E),_[2*y+2*E+1]+=I*Z,k(_,2*y+2*E+1),_[2*y+2*E+1]+=g*F,k(_,2*y+2*E+1),_[2*y+2*E+2]+=I*F,k(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function k(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function M(v,p){this.g=v,this.h=p}function q(v,p){if(R(p))throw Error("division by zero");if(R(v))return new M(T,T);if(N(v))return p=q(D(v),p),new M(D(p.g),D(p.h));if(N(p))return p=q(v,D(p)),new M(D(p.g),p.h);if(30<v.g.length){if(N(v)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,y=p;0>=y.l(v);)_=G(_),y=G(y);var E=X(_,1),I=X(y,1);for(y=X(y,2),_=X(_,2);!R(y);){var g=I.add(y);0>=g.l(v)&&(E=E.add(_),I=g),y=X(y,1),_=X(_,1)}return p=j(v,E.j(p)),new M(E,p)}for(E=T;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),g=I.j(p);N(g)||0<g.l(v);)_-=y,I=f(_),g=I.j(p);R(I)&&(I=w),E=E.add(I),v=j(v,g)}return new M(E,v)}n.A=function(v){return q(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function G(v){for(var p=v.g.length+1,_=[],y=0;y<p;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function X(v,p){var _=p>>5;p%=32;for(var y=v.g.length-_,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+_)>>>p|v.i(I+_+1)<<32-p:v.i(I+_);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Gl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,he=a}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});var yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wl,Pn,Xl,Sr,ti,Yl,Jl,Zl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,u){return s==Array.prototype||s==Object.prototype||(s[l]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof yr=="object"&&yr];for(var l=0;l<s.length;++l){var u=s[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,l){if(l)t:{var u=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var A=s[d];if(!(A in u))break t;u=u[A]}s=s[s.length-1],d=u[s],l=l(d),l!=d&&l!=null&&t(u,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var u=0,d=!1,A={next:function(){if(!d&&u<s.length){var C=u++;return{value:l(C,s[C]),done:!1}}return d=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function f(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function m(s,l,u){return s.call.apply(s.bind,arguments)}function T(s,l,u){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,d),s.apply(l,A)}}return function(){return s.apply(l,arguments)}}function w(s,l,u){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,w.apply(null,arguments)}function S(s,l){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function R(s,l){function u(){}u.prototype=l.prototype,s.aa=l.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(d,A,C){for(var P=Array(arguments.length-2),et=2;et<arguments.length;et++)P[et-2]=arguments[et];return l.prototype[A].apply(d,P)}}function N(s){const l=s.length;if(0<l){const u=Array(l);for(let d=0;d<l;d++)u[d]=s[d];return u}return[]}function D(s,l){for(let u=1;u<arguments.length;u++){const d=arguments[u];if(h(d)){const A=s.length||0,C=d.length||0;s.length=A+C;for(let P=0;P<C;P++)s[A+P]=d[P]}else s.push(d)}}class j{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function k(s){return/^[\s\xa0]*$/.test(s)}function M(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function q(s){return q[" "](s),s}q[" "]=function(){};var G=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function X(s,l,u){for(const d in s)l.call(u,s[d],d,s)}function v(s,l){for(const u in s)l.call(void 0,s[u],u,s)}function p(s){const l={};for(const u in s)l[u]=s[u];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,l){let u,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(u in d)s[u]=d[u];for(let C=0;C<_.length;C++)u=_[C],Object.prototype.hasOwnProperty.call(d,u)&&(s[u]=d[u])}}function E(s){var l=1;s=s.split(":");const u=[];for(;0<l&&s.length;)u.push(s.shift()),l--;return s.length&&u.push(s.join(":")),u}function I(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Te;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class F{constructor(){this.h=this.g=null}add(l,u){const d=Z.get();d.set(l,u),this.h?this.h.next=d:this.g=d,this.h=d}}var Z=new j(()=>new Tt,s=>s.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let wt,Wt=!1,Te=new F,un=()=>{const s=c.Promise.resolve(void 0);wt=()=>{s.then(cn)}};var cn=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(u){I(u)}var l=Z;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}Wt=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pt(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var hn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return s}();function we(s,l){if(pt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(G){t:{try{q(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=s.fromElement:u=="mouseout"&&(l=s.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Y[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&we.aa.h.call(this)}}R(we,pt);var Y={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),ne=0;function Yn(s,l,u,d,A){this.listener=s,this.proxy=null,this.src=l,this.type=u,this.capture=!!d,this.ha=A,this.key=++ne,this.da=this.fa=!1}function re(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Jn(s){this.src=s,this.g={},this.h=0}Jn.prototype.add=function(s,l,u,d,A){var C=s.toString();s=this.g[C],s||(s=this.g[C]=[],this.h++);var P=us(s,l,d,A);return-1<P?(l=s[P],u||(l.fa=!1)):(l=new Yn(l,this.src,C,!!d,A),l.fa=u,s.push(l)),l};function ls(s,l){var u=l.type;if(u in s.g){var d=s.g[u],A=Array.prototype.indexOf.call(d,l,void 0),C;(C=0<=A)&&Array.prototype.splice.call(d,A,1),C&&(re(l),s.g[u].length==0&&(delete s.g[u],s.h--))}}function us(s,l,u,d){for(var A=0;A<s.length;++A){var C=s[A];if(!C.da&&C.listener==l&&C.capture==!!u&&C.ha==d)return A}return-1}var cs="closure_lm_"+(1e6*Math.random()|0),hs={};function Wi(s,l,u,d,A){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Wi(s,l[C],u,d,A);return null}return u=Ji(u),s&&s[lt]?s.K(l,u,f(d)?!!d.capture:!1,A):mc(s,l,u,!1,d,A)}function mc(s,l,u,d,A,C){if(!l)throw Error("Invalid event type");var P=f(A)?!!A.capture:!!A,et=fs(s);if(et||(s[cs]=et=new Jn(s)),u=et.add(l,u,d,P,C),u.proxy)return u;if(d=pc(),u.proxy=d,d.src=s,d.listener=u,s.addEventListener)hn||(A=P),A===void 0&&(A=!1),s.addEventListener(l.toString(),d,A);else if(s.attachEvent)s.attachEvent(Yi(l.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function pc(){function s(u){return l.call(s.src,s.listener,u)}const l=gc;return s}function Xi(s,l,u,d,A){if(Array.isArray(l))for(var C=0;C<l.length;C++)Xi(s,l[C],u,d,A);else d=f(d)?!!d.capture:!!d,u=Ji(u),s&&s[lt]?(s=s.i,l=String(l).toString(),l in s.g&&(C=s.g[l],u=us(C,u,d,A),-1<u&&(re(C[u]),Array.prototype.splice.call(C,u,1),C.length==0&&(delete s.g[l],s.h--)))):s&&(s=fs(s))&&(l=s.g[l.toString()],s=-1,l&&(s=us(l,u,d,A)),(u=-1<s?l[s]:null)&&ds(u))}function ds(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[lt])ls(l.i,s);else{var u=s.type,d=s.proxy;l.removeEventListener?l.removeEventListener(u,d,s.capture):l.detachEvent?l.detachEvent(Yi(u),d):l.addListener&&l.removeListener&&l.removeListener(d),(u=fs(l))?(ls(u,s),u.h==0&&(u.src=null,l[cs]=null)):re(s)}}}function Yi(s){return s in hs?hs[s]:hs[s]="on"+s}function gc(s,l){if(s.da)s=!0;else{l=new we(l,this);var u=s.listener,d=s.ha||s.src;s.fa&&ds(s),s=u.call(d,l)}return s}function fs(s){return s=s[cs],s instanceof Jn?s:null}var ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ji(s){return typeof s=="function"?s:(s[ms]||(s[ms]=function(l){return s.handleEvent(l)}),s[ms])}function It(){qt.call(this),this.i=new Jn(this),this.M=this,this.F=null}R(It,qt),It.prototype[lt]=!0,It.prototype.removeEventListener=function(s,l,u,d){Xi(this,s,l,u,d)};function Pt(s,l){var u,d=s.F;if(d)for(u=[];d;d=d.F)u.push(d);if(s=s.M,d=l.type||l,typeof l=="string")l=new pt(l,s);else if(l instanceof pt)l.target=l.target||s;else{var A=l;l=new pt(d,s),y(l,A)}if(A=!0,u)for(var C=u.length-1;0<=C;C--){var P=l.g=u[C];A=Zn(P,d,!0,l)&&A}if(P=l.g=s,A=Zn(P,d,!0,l)&&A,A=Zn(P,d,!1,l)&&A,u)for(C=0;C<u.length;C++)P=l.g=u[C],A=Zn(P,d,!1,l)&&A}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var u=s.g[l],d=0;d<u.length;d++)re(u[d]);delete s.g[l],s.h--}}this.F=null},It.prototype.K=function(s,l,u,d){return this.i.add(String(s),l,!1,u,d)},It.prototype.L=function(s,l,u,d){return this.i.add(String(s),l,!0,u,d)};function Zn(s,l,u,d){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,C=0;C<l.length;++C){var P=l[C];if(P&&!P.da&&P.capture==u){var et=P.listener,yt=P.ha||P.src;P.fa&&ls(s.i,P),A=et.call(yt,d)!==!1&&A}}return A&&!d.defaultPrevented}function Zi(s,l,u){if(typeof s=="function")u&&(s=w(s,u));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(s,l||0)}function to(s){s.g=Zi(()=>{s.g=null,s.i&&(s.i=!1,to(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class _c extends qt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:to(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dn(s){qt.call(this),this.h=s,this.g={}}R(dn,qt);var eo=[];function no(s){X(s.g,function(l,u){this.g.hasOwnProperty(u)&&ds(l)},s),s.g={}}dn.prototype.N=function(){dn.aa.N.call(this),no(this)},dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ps=c.JSON.stringify,yc=c.JSON.parse,vc=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function gs(){}gs.prototype.h=null;function ro(s){return s.h||(s.h=s.i())}function so(){}var fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _s(){pt.call(this,"d")}R(_s,pt);function ys(){pt.call(this,"c")}R(ys,pt);var Ie={},io=null;function tr(){return io=io||new It}Ie.La="serverreachability";function oo(s){pt.call(this,Ie.La,s)}R(oo,pt);function mn(s){const l=tr();Pt(l,new oo(l))}Ie.STAT_EVENT="statevent";function ao(s,l){pt.call(this,Ie.STAT_EVENT,s),this.stat=l}R(ao,pt);function Vt(s){const l=tr();Pt(l,new ao(l,s))}Ie.Ma="timingevent";function lo(s,l){pt.call(this,Ie.Ma,s),this.size=l}R(lo,pt);function pn(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},l)}function gn(){this.g=!0}gn.prototype.xa=function(){this.g=!1};function Ec(s,l,u,d,A,C){s.info(function(){if(s.g)if(C)for(var P="",et=C.split("&"),yt=0;yt<et.length;yt++){var J=et[yt].split("=");if(1<J.length){var At=J[0];J=J[1];var Ct=At.split("_");P=2<=Ct.length&&Ct[1]=="type"?P+(At+"="+J+"&"):P+(At+"=redacted&")}}else P=null;else P=C;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+l+`
`+u+`
`+P})}function Tc(s,l,u,d,A,C,P){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+l+`
`+u+`
`+C+" "+P})}function Le(s,l,u,d){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ic(s,u)+(d?" "+d:"")})}function wc(s,l){s.info(function(){return"TIMEOUT: "+l})}gn.prototype.info=function(){};function Ic(s,l){if(!s.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var d=u[s];if(!(2>d.length)){var A=d[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var P=1;P<A.length;P++)A[P]=""}}}}return ps(u)}catch{return l}}var er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vs;function nr(){}R(nr,gs),nr.prototype.g=function(){return new XMLHttpRequest},nr.prototype.i=function(){return{}},vs=new nr;function se(s,l,u,d){this.j=s,this.i=l,this.l=u,this.R=d||1,this.U=new dn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new co}function co(){this.i=null,this.g="",this.h=!1}var ho={},Es={};function Ts(s,l,u){s.L=1,s.v=or(Xt(l)),s.m=u,s.P=!0,fo(s,null)}function fo(s,l){s.F=Date.now(),rr(s),s.A=Xt(s.v);var u=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),So(u.i,"t",d),s.C=0,u=s.j.J,s.h=new co,s.g=Ho(s.j,u?l:null,!s.m),0<s.O&&(s.M=new _c(w(s.Y,s,s.g),s.O)),l=s.U,u=s.g,d=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(eo[0]=A.toString()),A=eo);for(var C=0;C<A.length;C++){var P=Wi(u,A[C],d||l.handleEvent,!1,l.h||l);if(!P)break;l.g[P.key]=P}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),mn(),Ec(s.i,s.u,s.A,s.l,s.R,s.m)}se.prototype.ca=function(s){s=s.target;const l=this.M;l&&Yt(s)==3?l.j():this.Y(s)},se.prototype.Y=function(s){try{if(s==this.g)t:{const Ct=Yt(this.g);var l=this.g.Ba();const qe=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||No(this.g)))){this.J||Ct!=4||l==7||(l==8||0>=qe?mn(3):mn(2)),ws(this);var u=this.g.Z();this.X=u;e:if(mo(this)){var d=No(this.g);s="";var A=d.length,C=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ae(this),_n(this);var P="";break e}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,s+=this.h.i.decode(d[l],{stream:!(C&&l==A-1)});d.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=u==200,Tc(this.i,this.u,this.A,this.l,this.R,Ct,u),this.o){if(this.T&&!this.K){e:{if(this.g){var et,yt=this.g;if((et=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(et)){var J=et;break e}}J=null}if(u=J)Le(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Is(this,u);else{this.o=!1,this.s=3,Vt(12),Ae(this),_n(this);break t}}if(this.P){u=!0;let Bt;for(;!this.J&&this.C<P.length;)if(Bt=Ac(this,P),Bt==Es){Ct==4&&(this.s=4,Vt(14),u=!1),Le(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==ho){this.s=4,Vt(15),Le(this.i,this.l,P,"[Invalid Chunk]"),u=!1;break}else Le(this.i,this.l,Bt,null),Is(this,Bt);if(mo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||P.length!=0||this.h.h||(this.s=1,Vt(16),u=!1),this.o=this.o&&u,!u)Le(this.i,this.l,P,"[Invalid Chunked Response]"),Ae(this),_n(this);else if(0<P.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Ps(At),At.M=!0,Vt(11))}}else Le(this.i,this.l,P,null),Is(this,P);Ct==4&&Ae(this),this.o&&!this.J&&(Ct==4?Uo(this.j,this):(this.o=!1,rr(this)))}else Uc(this.g),u==400&&0<P.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),Ae(this),_n(this)}}}catch{}finally{}};function mo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Ac(s,l){var u=s.C,d=l.indexOf(`
`,u);return d==-1?Es:(u=Number(l.substring(u,d)),isNaN(u)?ho:(d+=1,d+u>l.length?Es:(l=l.slice(d,d+u),s.C=d+u,l)))}se.prototype.cancel=function(){this.J=!0,Ae(this)};function rr(s){s.S=Date.now()+s.I,po(s,s.I)}function po(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=pn(w(s.ba,s),l)}function ws(s){s.B&&(c.clearTimeout(s.B),s.B=null)}se.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(wc(this.i,this.A),this.L!=2&&(mn(),Vt(17)),Ae(this),this.s=2,_n(this)):po(this,this.S-s)};function _n(s){s.j.G==0||s.J||Uo(s.j,s)}function Ae(s){ws(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,no(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Is(s,l){try{var u=s.j;if(u.G!=0&&(u.g==s||As(u.h,s))){if(!s.K&&As(u.h,s)&&u.G==3){try{var d=u.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)dr(u),cr(u);else break t;Rs(u),Vt(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=pn(w(u.Za,u),6e3));if(1>=yo(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else be(u,11)}else if((s.K||u.g==s)&&dr(u),!k(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let J=A[l];if(u.T=J[0],J=J[1],u.G==2)if(J[0]=="c"){u.K=J[1],u.ia=J[2];const At=J[3];At!=null&&(u.la=At,u.j.info("VER="+u.la));const Ct=J[4];Ct!=null&&(u.Aa=Ct,u.j.info("SVER="+u.Aa));const qe=J[5];qe!=null&&typeof qe=="number"&&0<qe&&(d=1.5*qe,u.L=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const Bt=s.g;if(Bt){const mr=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mr){var C=d.h;C.g||mr.indexOf("spdy")==-1&&mr.indexOf("quic")==-1&&mr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Cs(C,C.h),C.h=null))}if(d.D){const Vs=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vs&&(d.ya=Vs,nt(d.I,d.D,Vs))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),d=u;var P=s;if(d.qa=zo(d,d.J?d.ia:null,d.W),P.K){vo(d.h,P);var et=P,yt=d.L;yt&&(et.I=yt),et.B&&(ws(et),rr(et)),d.g=P}else Bo(d);0<u.i.length&&hr(u)}else J[0]!="stop"&&J[0]!="close"||be(u,7);else u.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?be(u,7):Ss(u):J[0]!="noop"&&u.l&&u.l.ta(J),u.v=0)}}mn(4)}catch{}}var Cc=class{constructor(s,l){this.g=s,this.map=l}};function go(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _o(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function yo(s){return s.h?1:s.g?s.g.size:0}function As(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function Cs(s,l){s.g?s.g.add(l):s.h=l}function vo(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}go.prototype.cancel=function(){if(this.i=Eo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Eo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const u of s.g.values())l=l.concat(u.D);return l}return N(s.i)}function bc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],u=s.length,d=0;d<u;d++)l.push(s[d]);return l}l=[],u=0;for(d in s)l[u++]=s[d];return l}function Sc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var u=0;u<s;u++)l.push(u);return l}l=[],u=0;for(const d in s)l[u++]=d;return l}}}function To(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var u=Sc(s),d=bc(s),A=d.length,C=0;C<A;C++)l.call(void 0,d[C],u&&u[C],s)}var wo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rc(s,l){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var d=s[u].indexOf("="),A=null;if(0<=d){var C=s[u].substring(0,d);A=s[u].substring(d+1)}else C=s[u];l(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ce(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Ce){this.h=s.h,sr(this,s.j),this.o=s.o,this.g=s.g,ir(this,s.s),this.l=s.l;var l=s.i,u=new En;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Io(this,u),this.m=s.m}else s&&(l=String(s).match(wo))?(this.h=!1,sr(this,l[1]||"",!0),this.o=yn(l[2]||""),this.g=yn(l[3]||"",!0),ir(this,l[4]),this.l=yn(l[5]||"",!0),Io(this,l[6]||"",!0),this.m=yn(l[7]||"")):(this.h=!1,this.i=new En(null,this.h))}Ce.prototype.toString=function(){var s=[],l=this.j;l&&s.push(vn(l,Ao,!0),":");var u=this.g;return(u||l=="file")&&(s.push("//"),(l=this.o)&&s.push(vn(l,Ao,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(vn(u,u.charAt(0)=="/"?Dc:Vc,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",vn(u,kc)),s.join("")};function Xt(s){return new Ce(s)}function sr(s,l,u){s.j=u?yn(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function ir(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Io(s,l,u){l instanceof En?(s.i=l,Nc(s.i,s.h)):(u||(l=vn(l,xc)),s.i=new En(l,s.h))}function nt(s,l,u){s.i.set(l,u)}function or(s){return nt(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function yn(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function vn(s,l,u){return typeof s=="string"?(s=encodeURI(s).replace(l,Pc),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Pc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ao=/[#\/\?@]/g,Vc=/[#\?:]/g,Dc=/[#\?]/g,xc=/[#\?@]/g,kc=/#/g;function En(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function ie(s){s.g||(s.g=new Map,s.h=0,s.i&&Rc(s.i,function(l,u){s.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=En.prototype,n.add=function(s,l){ie(this),this.i=null,s=Fe(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(l),this.h+=1,this};function Co(s,l){ie(s),l=Fe(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function bo(s,l){return ie(s),l=Fe(s,l),s.g.has(l)}n.forEach=function(s,l){ie(this),this.g.forEach(function(u,d){u.forEach(function(A){s.call(l,A,d,this)},this)},this)},n.na=function(){ie(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let d=0;d<l.length;d++){const A=s[d];for(let C=0;C<A.length;C++)u.push(l[d])}return u},n.V=function(s){ie(this);let l=[];if(typeof s=="string")bo(this,s)&&(l=l.concat(this.g.get(Fe(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)l=l.concat(s[u])}return l},n.set=function(s,l){return ie(this),this.i=null,s=Fe(this,s),bo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function So(s,l,u){Co(s,l),0<u.length&&(s.i=null,s.g.set(Fe(s,l),N(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var d=l[u];const C=encodeURIComponent(String(d)),P=this.V(d);for(d=0;d<P.length;d++){var A=C;P[d]!==""&&(A+="="+encodeURIComponent(String(P[d]))),s.push(A)}}return this.i=s.join("&")};function Fe(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function Nc(s,l){l&&!s.j&&(ie(s),s.i=null,s.g.forEach(function(u,d){var A=d.toLowerCase();d!=A&&(Co(this,d),So(this,A,u))},s)),s.j=l}function Oc(s,l){const u=new gn;if(c.Image){const d=new Image;d.onload=S(oe,u,"TestLoadImage: loaded",!0,l,d),d.onerror=S(oe,u,"TestLoadImage: error",!1,l,d),d.onabort=S(oe,u,"TestLoadImage: abort",!1,l,d),d.ontimeout=S(oe,u,"TestLoadImage: timeout",!1,l,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else l(!1)}function Mc(s,l){const u=new gn,d=new AbortController,A=setTimeout(()=>{d.abort(),oe(u,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:d.signal}).then(C=>{clearTimeout(A),C.ok?oe(u,"TestPingServer: ok",!0,l):oe(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),oe(u,"TestPingServer: error",!1,l)})}function oe(s,l,u,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(u)}catch{}}function Lc(){this.g=new vc}function Fc(s,l,u){const d=u||"";try{To(s,function(A,C){let P=A;f(A)&&(P=ps(A)),l.push(d+C+"="+encodeURIComponent(P))})}catch(A){throw l.push(d+"type="+encodeURIComponent("_badmap")),A}}function ar(s){this.l=s.Ub||null,this.j=s.eb||!1}R(ar,gs),ar.prototype.g=function(){return new lr(this.l,this.j)},ar.prototype.i=function(s){return function(){return s}}({});function lr(s,l){It.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(lr,It),n=lr.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,wn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ro(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ro(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?Tn(this):wn(this),this.readyState==3&&Ro(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Tn(this))},n.Qa=function(s){this.g&&(this.response=s,Tn(this))},n.ga=function(){this.g&&Tn(this)};function Tn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,wn(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=l.next();return s.join(`\r
`)};function wn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Po(s){let l="";return X(s,function(u,d){l+=d,l+=":",l+=u,l+=`\r
`}),l}function bs(s,l,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=Po(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):nt(s,l,u))}function at(s){It.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(at,It);var Bc=/^https?$/i,qc=["POST","PUT"];n=at.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vs.g(),this.v=this.o?ro(this.o):ro(vs),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(C){Vo(this,C);return}if(s=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)u.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const C of d.keys())u.set(C,d.get(C));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(C=>C.toLowerCase()=="content-type"),A=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(qc,l,void 0))||d||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,P]of u)this.g.setRequestHeader(C,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ko(this),this.u=!0,this.g.send(s),this.u=!1}catch(C){Vo(this,C)}};function Vo(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Do(s),ur(s)}function Do(s){s.A||(s.A=!0,Pt(s,"complete"),Pt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Pt(this,"complete"),Pt(this,"abort"),ur(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ur(this,!0)),at.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xo(this):this.bb())},n.bb=function(){xo(this)};function xo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Yt(s)!=4||s.Z()!=2)){if(s.u&&Yt(s)==4)Zi(s.Ea,0,s);else if(Pt(s,"readystatechange"),Yt(s)==4){s.h=!1;try{const P=s.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var d;if(d=P===0){var A=String(s.D).match(wo)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),d=!Bc.test(A?A.toLowerCase():"")}u=d}if(u)Pt(s,"complete"),Pt(s,"success");else{s.m=6;try{var C=2<Yt(s)?s.g.statusText:""}catch{C=""}s.l=C+" ["+s.Z()+"]",Do(s)}}finally{ur(s)}}}}function ur(s,l){if(s.g){ko(s);const u=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Pt(s,"ready");try{u.onreadystatechange=d}catch{}}}function ko(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Yt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),yc(l)}};function No(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Uc(s){const l={};s=(s.g&&2<=Yt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(k(s[d]))continue;var u=E(s[d]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const C=l[A]||[];l[A]=C,C.push(u)}v(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function In(s,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||l}function Oo(s){this.Aa=0,this.i=[],this.j=new gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=In("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=In("baseRetryDelayMs",5e3,s),this.cb=In("retryDelaySeedMs",1e4,s),this.Wa=In("forwardChannelMaxRetries",2,s),this.wa=In("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new go(s&&s.concurrentRequestLimit),this.Da=new Lc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oo.prototype,n.la=8,n.G=1,n.connect=function(s,l,u,d){Vt(0),this.W=s,this.H=l||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.I=zo(this,null,this.W),hr(this)};function Ss(s){if(Mo(s),s.G==3){var l=s.U++,u=Xt(s.I);if(nt(u,"SID",s.K),nt(u,"RID",l),nt(u,"TYPE","terminate"),An(s,u),l=new se(s,s.j,l),l.L=2,l.v=or(Xt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Ho(l.j,null),l.g.ea(l.v)),l.F=Date.now(),rr(l)}jo(s)}function cr(s){s.g&&(Ps(s),s.g.cancel(),s.g=null)}function Mo(s){cr(s),s.u&&(c.clearTimeout(s.u),s.u=null),dr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function hr(s){if(!_o(s.h)&&!s.s){s.s=!0;var l=s.Ga;wt||un(),Wt||(wt(),Wt=!0),Te.add(l,s),s.B=0}}function $c(s,l){return yo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=pn(w(s.Ga,s,l),$o(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new se(this,this.j,s);let C=this.o;if(this.S&&(C?(C=p(C),y(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=Fo(this,A,l),u=Xt(this.I),nt(u,"RID",s),nt(u,"CVER",22),this.D&&nt(u,"X-HTTP-Session-Id",this.D),An(this,u),C&&(this.O?l="headers="+encodeURIComponent(String(Po(C)))+"&"+l:this.m&&bs(u,this.m,C)),Cs(this.h,A),this.Ua&&nt(u,"TYPE","init"),this.P?(nt(u,"$req",l),nt(u,"SID","null"),A.T=!0,Ts(A,u,null)):Ts(A,u,l),this.G=2}}else this.G==3&&(s?Lo(this,s):this.i.length==0||_o(this.h)||Lo(this))};function Lo(s,l){var u;l?u=l.l:u=s.U++;const d=Xt(s.I);nt(d,"SID",s.K),nt(d,"RID",u),nt(d,"AID",s.T),An(s,d),s.m&&s.o&&bs(d,s.m,s.o),u=new se(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Fo(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Cs(s.h,u),Ts(u,d,l)}function An(s,l){s.H&&X(s.H,function(u,d){nt(l,d,u)}),s.l&&To({},function(u,d){nt(l,d,u)})}function Fo(s,l,u){u=Math.min(s.i.length,u);var d=s.l?w(s.l.Na,s.l,s):null;t:{var A=s.i;let C=-1;for(;;){const P=["count="+u];C==-1?0<u?(C=A[0].g,P.push("ofs="+C)):C=0:P.push("ofs="+C);let et=!0;for(let yt=0;yt<u;yt++){let J=A[yt].g;const At=A[yt].map;if(J-=C,0>J)C=Math.max(0,A[yt].g-100),et=!1;else try{Fc(At,P,"req"+J+"_")}catch{d&&d(At)}}if(et){d=P.join("&");break t}}}return s=s.i.splice(0,u),l.D=s,d}function Bo(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;wt||un(),Wt||(wt(),Wt=!0),Te.add(l,s),s.v=0}}function Rs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=pn(w(s.Fa,s),$o(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,qo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=pn(w(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),cr(this),qo(this))};function Ps(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function qo(s){s.g=new se(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Xt(s.qa);nt(l,"RID","rpc"),nt(l,"SID",s.K),nt(l,"AID",s.T),nt(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&nt(l,"TO",s.ja),nt(l,"TYPE","xmlhttp"),An(s,l),s.m&&s.o&&bs(l,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=or(Xt(l)),u.m=null,u.P=!0,fo(u,s)}n.Za=function(){this.C!=null&&(this.C=null,cr(this),Rs(this),Vt(19))};function dr(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Uo(s,l){var u=null;if(s.g==l){dr(s),Ps(s),s.g=null;var d=2}else if(As(s.h,l))u=l.D,vo(s.h,l),d=1;else return;if(s.G!=0){if(l.o)if(d==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=s.B;d=tr(),Pt(d,new lo(d,u)),hr(s)}else Bo(s);else if(A=l.s,A==3||A==0&&0<l.X||!(d==1&&$c(s,l)||d==2&&Rs(s)))switch(u&&0<u.length&&(l=s.h,l.i=l.i.concat(u)),A){case 1:be(s,5);break;case 4:be(s,10);break;case 3:be(s,6);break;default:be(s,2)}}}function $o(s,l){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*l}function be(s,l){if(s.j.info("Error code "+l),l==2){var u=w(s.fb,s),d=s.Xa;const A=!d;d=new Ce(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||sr(d,"https"),or(d),A?Oc(d.toString(),u):Mc(d.toString(),u)}else Vt(2);s.G=0,s.l&&s.l.sa(l),jo(s),Mo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function jo(s){if(s.G=0,s.ka=[],s.l){const l=Eo(s.h);(l.length!=0||s.i.length!=0)&&(D(s.ka,l),D(s.ka,s.i),s.h.i.length=0,N(s.i),s.i.length=0),s.l.ra()}}function zo(s,l,u){var d=u instanceof Ce?Xt(u):new Ce(u);if(d.g!="")l&&(d.g=l+"."+d.g),ir(d,d.s);else{var A=c.location;d=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var C=new Ce(null);d&&sr(C,d),l&&(C.g=l),A&&ir(C,A),u&&(C.l=u),d=C}return u=s.D,l=s.ya,u&&l&&nt(d,u,l),nt(d,"VER",s.la),An(s,d),d}function Ho(s,l,u){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new at(new ar({eb:u})):new at(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ko(){}n=Ko.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fr(){}fr.prototype.g=function(s,l){return new Nt(s,l)};function Nt(s,l){It.call(this),this.g=new Oo(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!k(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!k(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new Be(this)}R(Nt,It),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Ss(this.g)},Nt.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=ps(s),s=u);l.i.push(new Cc(l.Ya++,s)),l.G==3&&hr(l)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Ss(this.g),delete this.g,Nt.aa.N.call(this)};function Qo(s){_s.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){t:{for(const u in l){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}R(Qo,_s);function Go(){ys.call(this),this.status=1}R(Go,ys);function Be(s){this.g=s}R(Be,Ko),Be.prototype.ua=function(){Pt(this.g,"a")},Be.prototype.ta=function(s){Pt(this.g,new Qo(s))},Be.prototype.sa=function(s){Pt(this.g,new Go)},Be.prototype.ra=function(){Pt(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Zl=function(){return new fr},Jl=function(){return tr()},Yl=Ie,ti={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},er.NO_ERROR=0,er.TIMEOUT=8,er.HTTP_ERROR=6,Sr=er,uo.COMPLETE="complete",Xl=uo,so.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",It.prototype.listen=It.prototype.K,Pn=so,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,Wl=at}).apply(typeof yr<"u"?yr:typeof self<"u"?self:typeof window<"u"?window:{});const va="@firebase/firestore",Ea="4.7.17";/**
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
 */class St{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */let on="11.9.0";/**
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
 */const Oe=new $l("@firebase/firestore");function $e(){return Oe.logLevel}function x(n,...t){if(Oe.logLevel<=H.DEBUG){const e=t.map(Ci);Oe.debug(`Firestore (${on}): ${n}`,...e)}}function te(n,...t){if(Oe.logLevel<=H.ERROR){const e=t.map(Ci);Oe.error(`Firestore (${on}): ${n}`,...e)}}function Ye(n,...t){if(Oe.logLevel<=H.WARN){const e=t.map(Ci);Oe.warn(`Firestore (${on}): ${n}`,...e)}}function Ci(n){if(typeof n=="string")return n;try{/**
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
 */function U(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,tu(n,r,e)}function tu(n,t,e){let r=`FIRESTORE (${on}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw te(r),new Error(r)}function ot(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||tu(t,i,r)}function Q(n,t){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends sn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class de{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class eu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(St.UNAUTHENTICATED))}shutdown(){}}class kf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Nf{constructor(t){this.t=t,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ot(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new de;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new de,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new de)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ot(typeof r.accessToken=="string",31837,{l:r}),new eu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ot(t===null||typeof t=="string",2055,{h:t}),new St(t)}}class Of{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Mf{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Of(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ta{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_f(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ot(this.o===void 0,3512);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ta(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ot(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ta(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ff(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function nu(){return new TextEncoder}/**
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
 */class ru{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Ff(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function ei(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return $(r,i);{const o=nu(),a=Bf(o.encode(wa(n,e)),o.encode(wa(t,e)));return a!==0?a:$(r,i)}}e+=r>65535?2:1}return $(n.length,t.length)}function wa(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Bf(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return $(n[e],t[e]);return $(n.length,t.length)}function Je(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */const Ia=-62135596800,Aa=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(t){return kt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Aa);return new kt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ia)throw new O(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Aa}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Ia;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{static fromTimestamp(t){return new B(t)}static min(){return new B(new kt(0,0))}static max(){return new B(new kt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ca="__name__";class Ut{constructor(t,e,r){e===void 0?e=0:e>t.length&&U(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&U(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ut.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ut?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Ut.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return $(t.length,e.length)}static compareSegments(t,e){const r=Ut.isNumericId(t),i=Ut.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Ut.extractNumericId(t).compare(Ut.extractNumericId(e)):ei(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return he.fromString(t.substring(4,t.length-2))}}class st extends Ut{construct(t,e,r){return new st(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new st(e)}static emptyPath(){return new st([])}}const qf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Ut{construct(t,e,r){return new Dt(t,e,r)}static isValidIdentifier(t){return qf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ca}static keyField(){return new Dt([Ca])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new O(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new O(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Dt(e)}static emptyPath(){return new Dt([])}}/**
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
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(st.fromString(t))}static fromName(t){return new L(st.fromString(t).popFirst(5))}static empty(){return new L(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&st.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return st.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new st(t.slice()))}}/**
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
 */const Un=-1;function Uf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new kt(e+1,0):new kt(e,r));return new me(i,L.empty(),t)}function $f(n){return new me(n.readTime,n.key,Un)}class me{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new me(B.min(),L.empty(),Un)}static max(){return new me(B.max(),L.empty(),Un)}}function jf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
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
 */const zf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Wr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==zf)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,r)=>{e(t)})}static reject(t){return new b((e,r)=>{r(t)})}static waitFor(t){return new b((e,r)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next(i=>i?b.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new b((r,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++c,c===o&&r(a)},m=>i(m))}})}static doWhile(t,e){return new b((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Kf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function an(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Xr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Xr.le=-1;/**
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
 */const Qf=-1;function Yr(n){return n==null}function ni(n){return n===0&&1/n==-1/0}/**
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
 */const su="";function Gf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ba(t)),t=Wf(n.get(e),t);return ba(t)}function Wf(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case su:e+="";break;default:e+=o}}return e}function ba(n){return n+su+""}/**
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
 */function Sa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Qn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Xf(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class ht{constructor(t,e){this.comparator=t,this.root=e||vt.EMPTY}insert(t,e){return new ht(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new ht(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new vr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new vr(this.root,t,this.comparator,!1)}getReverseIterator(){return new vr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new vr(this.root,t,this.comparator,!0)}}class vr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??vt.RED,this.left=i??vt.EMPTY,this.right=o??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new vt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw U(27949);return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(t){this.comparator=t,this.data=new ht(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ra(this.data.getIterator())}getIteratorFrom(t){return new Ra(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new mt(this.comparator);return e.data=t,e}}class Ra{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ae{constructor(t){this.fields=t,t.sort(Dt.comparator)}static empty(){return new ae([])}unionWith(t){let e=new mt(Dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ae(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Je(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class iu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new iu("Invalid base64 string: "+o):o}}(t);return new Et(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new Et(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const Yf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(n){if(ot(!!n,39018),typeof n=="string"){let t=0;const e=Yf.exec(n);if(ot(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ge(n){return typeof n=="string"?Et.fromBase64String(n):Et.fromUint8Array(n)}/**
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
 */const ou="server_timestamp",au="__type__",lu="__previous_value__",uu="__local_write_time__";function bi(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[au])===null||e===void 0?void 0:e.stringValue)===ou}function Jr(n){const t=n.mapValue.fields[lu];return bi(t)?Jr(t):t}function $n(n){const t=pe(n.mapValue.fields[uu].timestampValue);return new kt(t.seconds,t.nanos)}/**
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
 */class Jf{constructor(t,e,r,i,o,a,c,h,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const Br="(default)";class jn{constructor(t,e){this.projectId=t,this.database=e||Br}static empty(){return new jn("","")}get isDefaultDatabase(){return this.database===Br}isEqual(t){return t instanceof jn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Zf="__type__",tm="__max__",Er={mapValue:{}},em="__vector__",ri="value";function _e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bi(n)?4:rm(n)?9007199254740991:nm(n)?10:11:U(28295,{value:n})}function Kt(n,t){if(n===t)return!0;const e=_e(n);if(e!==_e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return $n(n).isEqual($n(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=pe(i.timestampValue),c=pe(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return ge(i.bytesValue).isEqual(ge(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return ct(i.geoPointValue.latitude)===ct(o.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ct(i.integerValue)===ct(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ct(i.doubleValue),c=ct(o.doubleValue);return a===c?ni(a)===ni(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Je(n.arrayValue.values||[],t.arrayValue.values||[],Kt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Sa(a)!==Sa(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Kt(a[h],c[h])))return!1;return!0}(n,t);default:return U(52216,{left:n})}}function zn(n,t){return(n.values||[]).find(e=>Kt(e,t))!==void 0}function Ze(n,t){if(n===t)return 0;const e=_e(n),r=_e(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=ct(o.integerValue||o.doubleValue),h=ct(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Pa(n.timestampValue,t.timestampValue);case 4:return Pa($n(n),$n(t));case 5:return ei(n.stringValue,t.stringValue);case 6:return function(o,a){const c=ge(o),h=ge(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=$(c[f],h[f]);if(m!==0)return m}return $(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=$(ct(o.latitude),ct(a.latitude));return c!==0?c:$(ct(o.longitude),ct(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Va(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,f,m;const T=o.fields||{},w=a.fields||{},S=(c=T[ri])===null||c===void 0?void 0:c.arrayValue,R=(h=w[ri])===null||h===void 0?void 0:h.arrayValue,N=$(((f=S?.values)===null||f===void 0?void 0:f.length)||0,((m=R?.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:Va(S,R)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Er.mapValue&&a===Er.mapValue)return 0;if(o===Er.mapValue)return 1;if(a===Er.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const w=ei(h[T],m[T]);if(w!==0)return w;const S=Ze(c[h[T]],f[m[T]]);if(S!==0)return S}return $(h.length,m.length)}(n.mapValue,t.mapValue);default:throw U(23264,{Pe:e})}}function Pa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=pe(n),r=pe(t),i=$(e.seconds,r.seconds);return i!==0?i:$(e.nanos,r.nanos)}function Va(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ze(e[i],r[i]);if(o)return o}return $(e.length,r.length)}function tn(n){return si(n)}function si(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=pe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ge(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return L.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=si(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${si(e.fields[a])}`;return i+"}"}(n.mapValue):U(61005,{value:n})}function Rr(n){switch(_e(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Jr(n);return t?16+Rr(t):16;case 5:return 2*n.stringValue.length;case 6:return ge(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Rr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Qn(r.fields,(o,a)=>{i+=o.length+Rr(a)}),i}(n.mapValue);default:throw U(13486,{value:n})}}function ii(n){return!!n&&"integerValue"in n}function Si(n){return!!n&&"arrayValue"in n}function Da(n){return!!n&&"nullValue"in n}function xa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $s(n){return!!n&&"mapValue"in n}function nm(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Zf])===null||e===void 0?void 0:e.stringValue)===em}function Nn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Qn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Nn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Nn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function rm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tm}/**
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
 */class $t{constructor(t){this.value=t}static empty(){return new $t({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!$s(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Nn(e)}setAll(t){let e=Dt.emptyPath(),r={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=c.popLast()}a?r[c.lastSegment()]=Nn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());$s(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];$s(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Qn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new $t(Nn(this.value))}}/**
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
 */class Rt{constructor(t,e,r,i,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Rt(t,0,B.min(),B.min(),B.min(),$t.empty(),0)}static newFoundDocument(t,e,r,i){return new Rt(t,1,e,B.min(),r,i,0)}static newNoDocument(t,e){return new Rt(t,2,e,B.min(),B.min(),$t.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,B.min(),B.min(),$t.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qr{constructor(t,e){this.position=t,this.inclusive=e}}function ka(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),e.key):r=Ze(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Na(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Kt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ur{constructor(t,e="asc"){this.field=t,this.dir=e}}function sm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class cu{}class ft extends cu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new om(t,e,r):e==="array-contains"?new um(t,r):e==="in"?new cm(t,r):e==="not-in"?new hm(t,r):e==="array-contains-any"?new dm(t,r):new ft(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new am(t,r):new lm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ze(e,this.value)):e!==null&&_e(this.value)===_e(e)&&this.matchesComparison(Ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends cu{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Qt(t,e)}matches(t){return hu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function hu(n){return n.op==="and"}function du(n){return im(n)&&hu(n)}function im(n){for(const t of n.filters)if(t instanceof Qt)return!1;return!0}function oi(n){if(n instanceof ft)return n.field.canonicalString()+n.op.toString()+tn(n.value);if(du(n))return n.filters.map(t=>oi(t)).join(",");{const t=n.filters.map(e=>oi(e)).join(",");return`${n.op}(${t})`}}function fu(n,t){return n instanceof ft?function(r,i){return i instanceof ft&&r.op===i.op&&r.field.isEqual(i.field)&&Kt(r.value,i.value)}(n,t):n instanceof Qt?function(r,i){return i instanceof Qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&fu(a,i.filters[c]),!0):!1}(n,t):void U(19439)}function mu(n){return n instanceof ft?function(e){return`${e.field.canonicalString()} ${e.op} ${tn(e.value)}`}(n):n instanceof Qt?function(e){return e.op.toString()+" {"+e.getFilters().map(mu).join(" ,")+"}"}(n):"Filter"}class om extends ft{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class am extends ft{constructor(t,e){super(t,"in",e),this.keys=pu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class lm extends ft{constructor(t,e){super(t,"not-in",e),this.keys=pu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function pu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>L.fromName(r.referenceValue))}class um extends ft{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Si(e)&&zn(e.arrayValue,this.value)}}class cm extends ft{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&zn(this.value.arrayValue,e)}}class hm extends ft{constructor(t,e){super(t,"not-in",e)}matches(t){if(zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!zn(this.value.arrayValue,e)}}class dm extends ft{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Si(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>zn(this.value.arrayValue,r))}}/**
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
 */class fm{constructor(t,e=null,r=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.Ie=null}}function Oa(n,t=null,e=[],r=[],i=null,o=null,a=null){return new fm(n,t,e,r,i,o,a)}function Ri(n){const t=Q(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>oi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Yr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>tn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>tn(r)).join(",")),t.Ie=e}return t.Ie}function Pi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!sm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!fu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Na(n.startAt,t.startAt)&&Na(n.endAt,t.endAt)}function ai(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Zr{constructor(t,e=null,r=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function mm(n,t,e,r,i,o,a,c){return new Zr(n,t,e,r,i,o,a,c)}function Vi(n){return new Zr(n)}function Ma(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pm(n){return n.collectionGroup!==null}function On(n){const t=Q(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new mt(Dt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new Ur(o,r))}),e.has(Dt.keyField().canonicalString())||t.Ee.push(new Ur(Dt.keyField(),r))}return t.Ee}function zt(n){const t=Q(n);return t.de||(t.de=gm(t,On(n))),t.de}function gm(n,t){if(n.limitType==="F")return Oa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ur(i.field,o)});const e=n.endAt?new qr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qr(n.startAt.position,n.startAt.inclusive):null;return Oa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function li(n,t,e){return new Zr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ts(n,t){return Pi(zt(n),zt(t))&&n.limitType===t.limitType}function gu(n){return`${Ri(zt(n))}|lt:${n.limitType}`}function je(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>mu(i)).join(", ")}]`),Yr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>tn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>tn(i)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function es(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of On(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,c,h){const f=ka(a,c,h);return a.inclusive?f<=0:f<0}(r.startAt,On(r),i)||r.endAt&&!function(a,c,h){const f=ka(a,c,h);return a.inclusive?f>=0:f>0}(r.endAt,On(r),i))}(n,t)}function _m(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _u(n){return(t,e)=>{let r=!1;for(const i of On(n)){const o=ym(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function ym(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ze(h,f):U(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
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
 */class Me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Qn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Xf(this.inner)}size(){return this.innerSize}}/**
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
 */const vm=new ht(L.comparator);function ye(){return vm}const yu=new ht(L.comparator);function Vn(...n){let t=yu;for(const e of n)t=t.insert(e.key,e);return t}function Em(n){let t=yu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function De(){return Mn()}function vu(){return Mn()}function Mn(){return new Me(n=>n.toString(),(n,t)=>n.isEqual(t))}const Tm=new mt(L.comparator);function W(...n){let t=Tm;for(const e of n)t=t.add(e);return t}const wm=new mt($);function Im(){return wm}/**
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
 */function Am(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ni(t)?"-0":t}}function Cm(n){return{integerValue:""+n}}/**
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
 */class ns{constructor(){this._=void 0}}function bm(n,t,e){return n instanceof ui?function(i,o){const a={fields:{[au]:{stringValue:ou},[uu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&bi(o)&&(o=Jr(o)),o&&(a.fields[lu]=o),{mapValue:a}}(e,t):n instanceof $r?Eu(n,t):n instanceof jr?Tu(n,t):function(i,o){const a=Rm(i,o),c=La(a)+La(i.Re);return ii(a)&&ii(i.Re)?Cm(c):Am(i.serializer,c)}(n,t)}function Sm(n,t,e){return n instanceof $r?Eu(n,t):n instanceof jr?Tu(n,t):e}function Rm(n,t){return n instanceof ci?function(r){return ii(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class ui extends ns{}class $r extends ns{constructor(t){super(),this.elements=t}}function Eu(n,t){const e=wu(t);for(const r of n.elements)e.some(i=>Kt(i,r))||e.push(r);return{arrayValue:{values:e}}}class jr extends ns{constructor(t){super(),this.elements=t}}function Tu(n,t){let e=wu(t);for(const r of n.elements)e=e.filter(i=>!Kt(i,r));return{arrayValue:{values:e}}}class ci extends ns{constructor(t,e){super(),this.serializer=t,this.Re=e}}function La(n){return ct(n.integerValue||n.doubleValue)}function wu(n){return Si(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Pm(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof $r&&i instanceof $r||r instanceof jr&&i instanceof jr?Je(r.elements,i.elements,Kt):r instanceof ci&&i instanceof ci?Kt(r.Re,i.Re):r instanceof ui&&i instanceof ui}(n.transform,t.transform)}class Ne{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ne}static exists(t){return new Ne(void 0,t)}static updateTime(t){return new Ne(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Di{}function Iu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Dm(n.key,Ne.none()):new xi(n.key,n.data,Ne.none());{const e=n.data,r=$t.empty();let i=new mt(Dt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new rs(n.key,r,new ae(i.toArray()),Ne.none())}}function Vm(n,t,e){n instanceof xi?function(i,o,a){const c=i.value.clone(),h=Ba(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof rs?function(i,o,a){if(!Pr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Ba(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Au(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Ln(n,t,e,r){return n instanceof xi?function(o,a,c,h){if(!Pr(o.precondition,a))return c;const f=o.value.clone(),m=qa(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof rs?function(o,a,c,h){if(!Pr(o.precondition,a))return c;const f=qa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Au(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,c){return Pr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Fa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Je(r,i,(o,a)=>Pm(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class xi extends Di{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rs extends Di{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Au(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ba(n,t,e){const r=new Map;ot(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,c=t.data.field(o.field);r.set(o.field,Sm(a,c,e[i]))}return r}function qa(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,bm(o,a,t))}return r}class Dm extends Di{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xm{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Vm(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ln(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ln(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=vu();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=Iu(a,c);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&Je(this.mutations,t.mutations,(e,r)=>Fa(e,r))&&Je(this.baseMutations,t.baseMutations,(e,r)=>Fa(e,r))}}/**
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
 */class km{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Nm{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var dt,z;function Cu(n){if(n===void 0)return te("GRPC error has no .code"),V.UNKNOWN;switch(n){case dt.OK:return V.OK;case dt.CANCELLED:return V.CANCELLED;case dt.UNKNOWN:return V.UNKNOWN;case dt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case dt.INTERNAL:return V.INTERNAL;case dt.UNAVAILABLE:return V.UNAVAILABLE;case dt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case dt.NOT_FOUND:return V.NOT_FOUND;case dt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case dt.ABORTED:return V.ABORTED;case dt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case dt.DATA_LOSS:return V.DATA_LOSS;default:return U(39323,{code:n})}}(z=dt||(dt={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Om=new he([4294967295,4294967295],0);function Ua(n){const t=nu().encode(n),e=new Gl;return e.update(t),new Uint8Array(e.digest())}function $a(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new he([e,r],0),new he([i,o],0)]}class ki{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Dn(`Invalid padding: ${e}`);if(r<0)throw new Dn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Dn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Dn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=he.fromNumber(this.pe)}we(t,e,r){let i=t.add(e.multiply(he.fromNumber(r)));return i.compare(Om)===1&&(i=new he([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=Ua(t),[r,i]=$a(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ki(o,i,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.pe===0)return;const e=Ua(t),[r,i]=$a(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Dn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ss{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Gn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ss(B.min(),i,new ht($),ye(),W())}}class Gn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Gn(r,e,W(),W(),W())}}/**
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
 */class Vr{constructor(t,e,r,i){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=i}}class bu{constructor(t,e){this.targetId=t,this.Ce=e}}class Su{constructor(t,e,r=Et.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ja{constructor(){this.Fe=0,this.Me=za(),this.xe=Et.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=W(),e=W(),r=W();return this.Me.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:U(38017,{changeType:o})}}),new Gn(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=za()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,ot(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Mm{constructor(t){this.ze=t,this.je=new Map,this.He=ye(),this.Je=Tr(),this.Ye=Tr(),this.Ze=new ht($)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:U(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,i)=>{this.it(i)&&e(i)})}ot(t){const e=t.targetId,r=t.Ce.count,i=this._t(e);if(i){const o=i.target;if(ai(o))if(r===0){const a=new L(o.path);this.tt(e,a,Rt.newNoDocument(a,B.min()))}else ot(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const c=this.ct(t),h=c?this.lt(c,t,a):1;if(h!==0){this.st(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=ge(r).toUint8Array()}catch(h){if(h instanceof iu)return Ye("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ki(a,i,o)}catch(h){return Ye(h instanceof Dn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.ze.Pt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.tt(e,o,null),i++)}),i}It(t){const e=new Map;this.je.forEach((o,a)=>{const c=this._t(a);if(c){if(o.current&&ai(c.target)){const h=new L(c.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,Rt.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=W();this.Ye.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this._t(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const i=new ss(t,e,this.Ze,this.He,r);return this.He=ye(),this.Je=Tr(),this.Ye=Tr(),this.Ze=new ht($),i}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const i=this.rt(t);this.dt(t,e)?i.$e(e,1):i.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new ja,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new mt($),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new mt($),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new ja),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Tr(){return new ht(L.comparator)}function za(){return new ht(L.comparator)}const Lm={asc:"ASCENDING",desc:"DESCENDING"},Fm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bm={and:"AND",or:"OR"};class qm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function hi(n,t){return n.useProto3Json||Yr(t)?t:{value:t}}function Um(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $m(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ge(n){return ot(!!n,49232),B.fromTimestamp(function(e){const r=pe(e);return new kt(r.seconds,r.nanos)}(n))}function jm(n,t){return di(n,t).canonicalString()}function di(n,t){const e=function(i){return new st(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ru(n){const t=st.fromString(n);return ot(ku(t),10190,{key:t.toString()}),t}function js(n,t){const e=Ru(t);if(e.get(1)!==n.databaseId.projectId)throw new O(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new L(Vu(e))}function Pu(n,t){return jm(n.databaseId,t)}function zm(n){const t=Ru(n);return t.length===4?st.emptyPath():Vu(t)}function Ha(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vu(n){return ot(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Hm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:U(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(ot(m===void 0||typeof m=="string",58123),Et.fromBase64String(m||"")):(ot(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Et.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const m=f.code===void 0?V.UNKNOWN:Cu(f.code);return new O(m,f.message||"")}(a);e=new Su(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=js(n,r.document.name),o=Ge(r.document.updateTime),a=r.document.createTime?Ge(r.document.createTime):B.min(),c=new $t({mapValue:{fields:r.document.fields}}),h=Rt.newFoundDocument(i,o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];e=new Vr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=js(n,r.document),o=r.readTime?Ge(r.readTime):B.min(),a=Rt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new Vr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=js(n,r.document),o=r.removedTargetIds||[];e=new Vr([],o,i,null)}else{if(!("filter"in t))return U(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Nm(i,o),c=r.targetId;e=new bu(c,a)}}return e}function Km(n,t){return{documents:[Pu(n,t.path)]}}function Qm(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Pu(n,i);const o=function(f){if(f.length!==0)return xu(Qt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(w){return{field:ze(w.field),direction:Xm(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=hi(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:i}}function Gm(n){let t=zm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){ot(r===1,65062);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const w=Du(T);return w instanceof Qt&&du(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(w=>function(R){return new Ur(He(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(T){let w;return w=typeof T=="object"?T.value:T,Yr(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(T){const w=!!T.before,S=T.values||[];return new qr(S,w)}(e.startAt));let f=null;return e.endAt&&(f=function(T){const w=!T.before,S=T.values||[];return new qr(S,w)}(e.endAt)),mm(t,i,a,o,c,"F",h,f)}function Wm(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Du(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=He(e.unaryFilter.field);return ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=He(e.unaryFilter.field);return ft.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=He(e.unaryFilter.field);return ft.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=He(e.unaryFilter.field);return ft.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(n):n.fieldFilter!==void 0?function(e){return ft.create(He(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Qt.create(e.compositeFilter.filters.map(r=>Du(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(e.compositeFilter.op))}(n):U(30097,{filter:n})}function Xm(n){return Lm[n]}function Ym(n){return Fm[n]}function Jm(n){return Bm[n]}function ze(n){return{fieldPath:n.canonicalString()}}function He(n){return Dt.fromServerFormat(n.fieldPath)}function xu(n){return n instanceof ft?function(e){if(e.op==="=="){if(xa(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NAN"}};if(Da(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xa(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NOT_NAN"}};if(Da(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ze(e.field),op:Ym(e.op),value:e.value}}}(n):n instanceof Qt?function(e){const r=e.getFilters().map(i=>xu(i));return r.length===1?r[0]:{compositeFilter:{op:Jm(e.op),filters:r}}}(n):U(54877,{filter:n})}function ku(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class le{constructor(t,e,r,i,o=B.min(),a=B.min(),c=Et.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new le(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Zm{constructor(t){this.wt=t}}function tp(n){const t=Gm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?li(t,t.limit,"L"):t}/**
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
 */class ep{constructor(){this.Cn=new np}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(me.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(me.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class np{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new mt(st.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new mt(st.comparator)).toArray()}}/**
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
 */const Ka={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nu=41943040;class xt{static withCacheSize(t){return new xt(t,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(Nu,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);/**
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
 */class en{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new en(0)}static lr(){return new en(-1)}}/**
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
 */const Qa="LruGarbageCollector",rp=1048576;function Ga([n,t],[e,r]){const i=$(n,e);return i===0?$(t,r):i}class sp{constructor(t){this.Er=t,this.buffer=new mt(Ga),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ga(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ip{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){x(Qa,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){an(e)?x(Qa,"Ignoring IndexedDB error during garbage collection: ",e):await Wr(e)}await this.mr(3e5)})}}class op{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return b.resolve(Xr.le);const r=new sp(e);return this.gr.forEachTarget(t,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(t,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Ka)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ka):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,i,o,a,c,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,a=Date.now(),this.nthSequenceNumber(t,i))).next(T=>(r=T,c=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(f=Date.now(),$e()<=H.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${T} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function ap(n,t){return new op(n,t)}/**
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
 */class lp{constructor(){this.changes=new Me(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class up{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class cp{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Ln(r.mutation,i,ae.empty(),kt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,W()).next(()=>r))}getLocalViewOfDocuments(t,e,r=W()){const i=De();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=Vn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=De();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,W()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,i){let o=ye();const a=Mn(),c=function(){return Mn()}();return e.forEach((h,f)=>{const m=r.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof rs)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),Ln(m.mutation,f,m.mutation.getFieldMask(),kt.now())):a.set(f.key,ae.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var T;return c.set(f,new up(m,(T=a.get(f))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Mn();let i=new ht((a,c)=>a-c),o=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||ae.empty();m=c.applyToLocalView(f,m),r.set(h,m);const T=(i.get(c.batchId)||W()).add(h);i=i.insert(c.batchId,T)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,T=vu();m.forEach(w=>{if(!o.has(w)){const S=Iu(e.get(w),r.get(w));S!==null&&T.set(w,S),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,T))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):pm(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):b.resolve(De());let c=Un,h=o;return a.next(f=>b.forEach(f,(m,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,W())).next(m=>({batchId:c,changes:Em(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(r=>{let i=Vn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=Vn();return this.indexManager.getCollectionParents(t,o).next(c=>b.forEach(c,h=>{const f=function(T,w){return new Zr(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(m=>{m.forEach((T,w)=>{a=a.insert(T,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Rt.newInvalidDocument(m)))});let c=Vn();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&Ln(m.mutation,f,ae.empty(),kt.now()),es(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class hp{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return b.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ge(i.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(i){return{name:i.name,query:tp(i.bundledQuery),readTime:Ge(i.readTime)}}(e)),b.resolve()}}/**
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
 */class dp{constructor(){this.overlays=new ht(L.comparator),this.Qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=De();return b.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.St(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const i=De(),o=e.length+1,a=new L(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return b.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new ht((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=De(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=De(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=i)););return b.resolve(c)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new km(e,r));let o=this.Qr.get(e);o===void 0&&(o=W(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
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
 */class fp{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
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
 */class Ni{constructor(){this.$r=new mt(_t.Ur),this.Kr=new mt(_t.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new _t(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new _t(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new L(new st([])),r=new _t(e,t),i=new _t(e,t+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new L(new st([])),r=new _t(e,t),i=new _t(e,t+1);let o=W();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new _t(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class _t{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return L.comparator(t.key,e.key)||$(t.Zr,e.Zr)}static Wr(t,e){return $(t.Zr,e.Zr)||L.comparator(t.key,e.key)}}/**
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
 */class mp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new mt(_t.Ur)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new xm(o,e,r,i);this.mutationQueue.push(a);for(const c of i)this.Xr=this.Xr.add(new _t(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ti(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Qf:this.nr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new _t(e,0),i=new _t(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,i],a=>{const c=this.ei(a.Zr);o.push(c)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new mt($);return e.forEach(i=>{const o=new _t(i,0),a=new _t(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],c=>{r=r.add(c.Zr)})}),b.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new _t(new L(o),0);let c=new mt($);return this.Xr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.Zr)),!0)},a),b.resolve(this.ni(c))}ni(t){const e=[];return t.forEach(r=>{const i=this.ei(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){ot(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return b.forEach(e.mutations,i=>{const o=new _t(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new _t(e,0),i=this.Xr.firstAfterOrEqual(r);return b.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class pp{constructor(t){this.ii=t,this.docs=function(){return new ht(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(e))}getEntries(t,e){let r=ye();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Rt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=ye();const a=e.path,c=new L(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||jf($f(m),r)<=0||(i.has(m.key)||es(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,i){U(9500)}si(t,e){return b.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new gp(this)}getSize(t){return b.resolve(this.size)}}class gp extends lp{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Br.addEntry(t,i)):this.Br.removeEntry(r)}),b.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
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
 */class _p{constructor(t){this.persistence=t,this.oi=new Me(e=>Ri(e),Pi),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this._i=0,this.ai=new Ni,this.targetCount=0,this.ui=en.cr()}forEachTarget(t,e){return this.oi.forEach((r,i)=>e(i)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),b.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new en(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Tr(e),b.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.oi.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this.ai.containsKey(e))}}/**
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
 */class Ou{constructor(t,e){this.ci={},this.overlays={},this.li=new Xr(0),this.hi=!1,this.hi=!0,this.Pi=new fp,this.referenceDelegate=t(this),this.Ti=new _p(this),this.indexManager=new ep,this.remoteDocumentCache=function(i){return new pp(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Zm(e),this.Ei=new hp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new dp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new mp(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const i=new yp(this.li.next());return this.referenceDelegate.di(),r(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(t,e){return b.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class yp extends Hf{constructor(t){super(),this.currentSequenceNumber=t}}class Oi{constructor(t){this.persistence=t,this.Vi=new Ni,this.mi=null}static fi(t){return new Oi(t)}get gi(){if(this.mi)return this.mi;throw U(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.gi,r=>{const i=L.fromPath(r);return this.pi(t,i).next(o=>{o||e.removeEntry(i,B.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return b.or([()=>b.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class zr{constructor(t,e){this.persistence=t,this.yi=new Me(r=>Gf(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ap(this,e)}static fi(t,e){return new zr(t,e)}di(){}Ai(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}br(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return b.forEach(this.yi,(r,i)=>this.Dr(t,r,i).next(o=>o?b.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(t,a=>this.Dr(t,a,e).next(c=>{c||(r++,o.removeEntry(a,B.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),b.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),b.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Rr(t.data.value)),e}Dr(t,e,r){return b.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.yi.get(e);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class vp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Ep{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return fd()?8:Kf(hd())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ws(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new vp;return this.Ss(t,e,a).next(c=>{if(o.result=c,this.fs)return this.Ds(t,e,a,c.size)})}).next(()=>o.result)}Ds(t,e,r,i){return r.documentReadCount<this.gs?($e()<=H.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",je(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),b.resolve()):($e()<=H.DEBUG&&x("QueryEngine","Query:",je(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?($e()<=H.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",je(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,zt(e))):b.resolve())}ws(t,e){if(Ma(e))return b.resolve(null);let r=zt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=li(e,null,"F"),r=zt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=W(...o);return this.ys.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.vs(e,c);return this.Cs(e,f,a,h.readTime)?this.ws(t,li(e,null,"F")):this.Fs(t,f,e,h)}))})))}bs(t,e,r,i){return Ma(e)||i.isEqual(B.min())?b.resolve(null):this.ys.getDocuments(t,r).next(o=>{const a=this.vs(e,o);return this.Cs(e,a,r,i)?b.resolve(null):($e()<=H.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),je(e)),this.Fs(t,a,e,Uf(i,Un)).next(c=>c))})}vs(t,e){let r=new mt(_u(t));return e.forEach((i,o)=>{es(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return $e()<=H.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",je(e)),this.ys.getDocumentsMatchingQuery(t,e,me.min(),r)}Fs(t,e,r,i){return this.ys.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Li="LocalStore",Tp=3e8;class wp{constructor(t,e,r,i){this.persistence=t,this.Ms=e,this.serializer=i,this.xs=new ht($),this.Os=new Me(o=>Ri(o),Pi),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cp(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function Ip(n,t,e,r){return new wp(n,t,e,r)}async function Mu(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=W();for(const f of i){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({ks:f,removedBatchIds:a,addedBatchIds:c}))})})}function Lu(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Ap(n,t){const e=Q(n),r=t.snapshotVersion;let i=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Bs.newChangeBuffer({trackRemovals:!0});i=e.xs;const c=[];t.targetChanges.forEach((m,T)=>{const w=i.get(T);if(!w)return;c.push(e.Ti.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.Ti.addMatchingKeys(o,m.addedDocuments,T)));let S=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?S=S.withResumeToken(Et.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),i=i.insert(T,S),function(N,D,j){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Tp?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(w,S,m)&&c.push(e.Ti.updateTargetData(o,S))});let h=ye(),f=W();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Cp(o,a,t.documentUpdates).next(m=>{h=m.qs,f=m.Qs})),!r.isEqual(B.min())){const m=e.Ti.getLastRemoteSnapshotVersion(o).next(T=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return b.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.xs=i,o))}function Cp(n,t,e){let r=W(),i=W();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ye();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(B.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):x(Li,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{qs:a,Qs:i}})}function bp(n,t){const e=Q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ti.getTargetData(r,t).next(o=>o?(i=o,b.resolve(i)):e.Ti.allocateTargetId(r).next(a=>(i=new le(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.xs=e.xs.insert(r.targetId,r),e.Os.set(t,r.targetId)),r})}async function fi(n,t,e){const r=Q(n),i=r.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!an(a))throw a;x(Li,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(i.target)}function Wa(n,t,e){const r=Q(n);let i=B.min(),o=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const T=Q(h),w=T.Os.get(m);return w!==void 0?b.resolve(T.xs.get(w)):T.Ti.getTargetData(f,m)}(r,a,zt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,t,e?i:B.min(),e?o:W())).next(c=>(Sp(r,_m(t),c),{documents:c,$s:o})))}function Sp(n,t,e){let r=n.Ns.get(t)||B.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(t,r)}class Xa{constructor(){this.activeTargetIds=Im()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rp{constructor(){this.xo=new Xa,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Xa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Pp{No(t){}shutdown(){}}/**
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
 */const Ya="ConnectivityMonitor";class Ja{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){x(Ya,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){x(Ya,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wr=null;function mi(){return wr===null?wr=function(){return 268435456+Math.round(2147483648*Math.random())}():wr++,"0x"+wr.toString(16)}/**
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
 */const zs="RestConnection",Vp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Dp{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===Br?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(t,e,r,i,o){const a=mi(),c=this.jo(t,e.toUriEncodedString());x(zs,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,i,o);const{host:f}=new URL(c),m=Ii(f);return this.Jo(t,c,h,r,m).then(T=>(x(zs,`Received RPC '${t}' ${a}: `,T),T),T=>{throw Ye(zs,`RPC '${t}' ${a} failed with error: `,T,"url: ",c,"request:",r),T})}Yo(t,e,r,i,o,a){return this.zo(t,e,r,i,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+on}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}jo(t,e){const r=Vp[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
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
 */class xp{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const bt="WebChannelConnection";class kp extends Dp{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const a=mi();return new Promise((c,h)=>{const f=new Wl;f.setWithCredentials(!0),f.listenOnce(Xl.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Sr.NO_ERROR:const T=f.getResponseJson();x(bt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(T)),c(T);break;case Sr.TIMEOUT:x(bt,`RPC '${t}' ${a} timed out`),h(new O(V.DEADLINE_EXCEEDED,"Request time out"));break;case Sr.HTTP_ERROR:const w=f.getStatus();if(x(bt,`RPC '${t}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S?.error;if(R&&R.status&&R.message){const N=function(j){const k=j.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(k)>=0?k:V.UNKNOWN}(R.status);h(new O(N,R.message))}else h(new O(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new O(V.UNAVAILABLE,"Connection failed."));break;default:U(9055,{h_:t,streamId:a,P_:f.getLastErrorCode(),T_:f.getLastError()})}}finally{x(bt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(i);x(bt,`RPC '${t}' ${a} sending request:`,i),f.send(e,"POST",m,r,15)})}I_(t,e,r){const i=mi(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Zl(),c=Jl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");x(bt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const T=a.createWebChannel(m,h);this.E_(T);let w=!1,S=!1;const R=new xp({Zo:D=>{S?x(bt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(w||(x(bt,`Opening RPC '${t}' stream ${i} transport.`),T.open(),w=!0),x(bt,`RPC '${t}' stream ${i} sending:`,D),T.send(D))},Xo:()=>T.close()}),N=(D,j,k)=>{D.listen(j,M=>{try{k(M)}catch(q){setTimeout(()=>{throw q},0)}})};return N(T,Pn.EventType.OPEN,()=>{S||(x(bt,`RPC '${t}' stream ${i} transport opened.`),R.__())}),N(T,Pn.EventType.CLOSE,()=>{S||(S=!0,x(bt,`RPC '${t}' stream ${i} transport closed`),R.u_(),this.d_(T))}),N(T,Pn.EventType.ERROR,D=>{S||(S=!0,Ye(bt,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),R.u_(new O(V.UNAVAILABLE,"The operation could not be completed")))}),N(T,Pn.EventType.MESSAGE,D=>{var j;if(!S){const k=D.data[0];ot(!!k,16349);const M=k,q=M?.error||((j=M[0])===null||j===void 0?void 0:j.error);if(q){x(bt,`RPC '${t}' stream ${i} received error:`,q);const G=q.status;let X=function(_){const y=dt[_];if(y!==void 0)return Cu(y)}(G),v=q.message;X===void 0&&(X=V.INTERNAL,v="Unknown error status: "+G+" with message "+q.message),S=!0,R.u_(new O(X,v)),T.close()}else x(bt,`RPC '${t}' stream ${i} received:`,k),R.c_(k)}}),N(c,Yl.STAT_EVENT,D=>{D.stat===ti.PROXY?x(bt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===ti.NOPROXY&&x(bt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function Hs(){return typeof document<"u"?document:null}/**
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
 */function Fu(n){return new qm(n,!0)}/**
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
 */class Bu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.xi=t,this.timerId=e,this.A_=r,this.R_=i,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,e-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Za="PersistentStream";class Np{constructor(t,e,r,i,o,a,c,h){this.xi=t,this.S_=r,this.D_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Bu(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===e&&this.z_(r,i)},r=>{t(()=>{const i=new O(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(t,e){const r=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return x(Za,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(x(Za,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Op extends Np{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=Hm(this.serializer,t),r=function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Ge(a.readTime):B.min()}(t);return this.listener.Y_(e,r)}Z_(t){const e={};e.database=Ha(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=ai(h)?{documents:Km(o,h)}:{query:Qm(o,h).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=$m(o,a.resumeToken);const f=hi(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=Um(o,a.snapshotVersion.toTimestamp());const f=hi(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=Wm(this.serializer,t);r&&(e.labels=r),this.Q_(e)}X_(t){const e={};e.database=Ha(this.serializer),e.removeTarget=t,this.Q_(e)}}/**
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
 */class Mp{}class Lp extends Mp{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new O(V.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(t,di(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(V.UNKNOWN,o.toString())})}Yo(t,e,r,i,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Yo(t,di(e,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(V.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class Fp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(te(e),this.ua=!1):x("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const nn="RemoteStore";class Bp{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{Xn(this)&&(x(nn,"Restarting streams for network reachability change."),await async function(h){const f=Q(h);f.da.add(4),await Wn(f),f.Va.set("Unknown"),f.da.delete(4),await is(f)}(this))})}),this.Va=new Fp(r,i)}}async function is(n){if(Xn(n))for(const t of n.Aa)await t(!0)}async function Wn(n){for(const t of n.Aa)await t(!1)}function qu(n,t){const e=Q(n);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),Ui(e)?qi(e):ln(e).N_()&&Bi(e,t))}function Fi(n,t){const e=Q(n),r=ln(e);e.Ea.delete(t),r.N_()&&Uu(e,t),e.Ea.size===0&&(r.N_()?r.k_():Xn(e)&&e.Va.set("Unknown"))}function Bi(n,t){if(n.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ln(n).Z_(t)}function Uu(n,t){n.ma.Ke(t),ln(n).X_(t)}function qi(n){n.ma=new Mm({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Ea.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),ln(n).start(),n.Va.ca()}function Ui(n){return Xn(n)&&!ln(n).O_()&&n.Ea.size>0}function Xn(n){return Q(n).da.size===0}function $u(n){n.ma=void 0}async function qp(n){n.Va.set("Online")}async function Up(n){n.Ea.forEach((t,e)=>{Bi(n,t)})}async function $p(n,t){$u(n),Ui(n)?(n.Va.Pa(t),qi(n)):n.Va.set("Unknown")}async function jp(n,t,e){if(n.Va.set("Online"),t instanceof Su&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.Ea.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Ea.delete(c),i.ma.removeTarget(c))}(n,t)}catch(r){x(nn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await tl(n,r)}else if(t instanceof Vr?n.ma.Xe(t):t instanceof bu?n.ma.ot(t):n.ma.nt(t),!e.isEqual(B.min()))try{const r=await Lu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.ma.It(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ea.get(f);m&&o.Ea.set(f,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const m=o.Ea.get(h);if(!m)return;o.Ea.set(h,m.withResumeToken(Et.EMPTY_BYTE_STRING,m.snapshotVersion)),Uu(o,h);const T=new le(m.target,h,f,m.sequenceNumber);Bi(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){x(nn,"Failed to raise snapshot:",r),await tl(n,r)}}async function tl(n,t,e){if(!an(t))throw t;n.da.add(1),await Wn(n),n.Va.set("Offline"),e||(e=()=>Lu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(nn,"Retrying IndexedDB access"),await e(),n.da.delete(1),await is(n)})}async function el(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),x(nn,"RemoteStore received new credentials");const r=Xn(e);e.da.add(3),await Wn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await is(e)}async function zp(n,t){const e=Q(n);t?(e.da.delete(2),await is(e)):t||(e.da.add(2),await Wn(e),e.Va.set("Unknown"))}function ln(n){return n.fa||(n.fa=function(e,r,i){const o=Q(e);return o.oa(),new Op(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:qp.bind(null,n),n_:Up.bind(null,n),i_:$p.bind(null,n),Y_:jp.bind(null,n)}),n.Aa.push(async t=>{t?(n.fa.L_(),Ui(n)?qi(n):n.Va.set("Unknown")):(await n.fa.stop(),$u(n))})),n.fa}/**
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
 */class $i{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new de,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,c=new $i(t,e,a,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ju(n,t){if(te("AsyncQueue",`${t}: ${n}`),an(n))return new O(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class We{static emptySet(t){return new We(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||L.comparator(e.key,r.key):(e,r)=>L.comparator(e.key,r.key),this.keyedMap=Vn(),this.sortedSet=new ht(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof We)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new We;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class nl{constructor(){this.pa=new ht(L.comparator)}track(t){const e=t.doc.key,r=this.pa.get(e);r?t.type!==0&&r.type===3?this.pa=this.pa.insert(e,t):t.type===3&&r.type!==1?this.pa=this.pa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.pa=this.pa.remove(e):t.type===1&&r.type===2?this.pa=this.pa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):U(63341,{Vt:t,ya:r}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,r)=>{t.push(r)}),t}}class rn{constructor(t,e,r,i,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new rn(t,e,We.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ts(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Hp{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class Kp{constructor(){this.queries=rl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=Q(e),o=i.queries;i.queries=rl(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new O(V.ABORTED,"Firestore shutting down"))}}function rl(){return new Me(n=>gu(n),ts)}async function zu(n,t){const e=Q(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.Da()&&t.va()&&(r=2):(o=new Hp,r=t.va()?0:1);try{switch(r){case 0:o.ba=await e.onListen(i,!0);break;case 1:o.ba=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=ju(a,`Initialization of query '${je(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.Sa.push(t),t.Fa(e.onlineState),o.ba&&t.Ma(o.ba)&&ji(e)}async function Hu(n,t){const e=Q(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=t.va()?0:1:!o.Da()&&t.va()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Qp(n,t){const e=Q(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.Sa)c.Ma(i)&&(r=!0);a.ba=i}}r&&ji(e)}function Gp(n,t,e){const r=Q(n),i=r.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);r.queries.delete(t)}function ji(n){n.Ca.forEach(t=>{t.next()})}var pi,sl;(sl=pi||(pi={})).xa="default",sl.Cache="cache";class Ku{constructor(t,e,r){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new rn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const r=e!=="Offline";return(!this.options.Qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=rn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==pi.Cache}}/**
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
 */class Qu{constructor(t){this.key=t}}class Gu{constructor(t){this.key=t}}class Wp{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=W(),this.mutatedKeys=W(),this.Za=_u(t),this.Xa=new We(this.Za)}get eu(){return this.Ha}tu(t,e){const r=e?e.nu:new nl,i=e?e.Xa:this.Xa;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,T)=>{const w=i.get(m),S=es(this.query,T)?T:null,R=!!w&&this.mutatedKeys.has(w.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;w&&S?w.data.isEqual(S.data)?R!==N&&(r.track({type:3,doc:S}),D=!0):this.ru(w,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.Za(S,h)>0||f&&this.Za(S,f)<0)&&(c=!0)):!w&&S?(r.track({type:0,doc:S}),D=!0):w&&!S&&(r.track({type:1,doc:w}),D=!0,(h||f)&&(c=!0)),D&&(S?(a=a.add(S),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Xa:a,nu:r,Cs:c,mutatedKeys:o}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((m,T)=>function(S,R){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Vt:D})}};return N(S)-N(R)}(m.type,T.type)||this.Za(m.doc,T.doc)),this.iu(r),i=i!=null&&i;const c=e&&!i?this.su():[],h=this.Ya.size===0&&this.current&&!i?1:0,f=h!==this.Ja;return this.Ja=h,a.length!==0||f?{snapshot:new rn(this.query,t.Xa,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:c}:{ou:c}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new nl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=W(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new Gu(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new Qu(r))}),e}au(t){this.Ha=t.$s,this.Ya=W();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return rn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const zi="SyncEngine";class Xp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Yp{constructor(t){this.key=t,this.cu=!1}}class Jp{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new Me(c=>gu(c),ts),this.Pu=new Map,this.Tu=new Set,this.Iu=new ht(L.comparator),this.Eu=new Map,this.du=new Ni,this.Au={},this.Ru=new Map,this.Vu=en.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function Zp(n,t,e=!0){const r=Zu(n);let i;const o=r.hu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.uu()):i=await Wu(r,t,e,!0),i}async function tg(n,t){const e=Zu(n);await Wu(e,t,!0,!1)}async function Wu(n,t,e,r){const i=await bp(n.localStore,zt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await eg(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&qu(n.remoteStore,i),c}async function eg(n,t,e,r,i){n.fu=(T,w,S)=>async function(N,D,j,k){let M=D.view.tu(j);M.Cs&&(M=await Wa(N.localStore,D.query,!1).then(({documents:v})=>D.view.tu(v,M)));const q=k&&k.targetChanges.get(D.targetId),G=k&&k.targetMismatches.get(D.targetId)!=null,X=D.view.applyChanges(M,N.isPrimaryClient,q,G);return ol(N,D.targetId,X.ou),X.snapshot}(n,T,w,S);const o=await Wa(n.localStore,t,!0),a=new Wp(t,o.$s),c=a.tu(o.documents),h=Gn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=a.applyChanges(c,n.isPrimaryClient,h);ol(n,e,f.ou);const m=new Xp(t,e,a);return n.hu.set(t,m),n.Pu.has(e)?n.Pu.get(e).push(t):n.Pu.set(e,[t]),f.snapshot}async function ng(n,t,e){const r=Q(n),i=r.hu.get(t),o=r.Pu.get(i.targetId);if(o.length>1)return r.Pu.set(i.targetId,o.filter(a=>!ts(a,t))),void r.hu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await fi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Fi(r.remoteStore,i.targetId),gi(r,i.targetId)}).catch(Wr)):(gi(r,i.targetId),await fi(r.localStore,i.targetId,!0))}async function rg(n,t){const e=Q(n),r=e.hu.get(t),i=e.Pu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Fi(e.remoteStore,r.targetId))}async function Xu(n,t){const e=Q(n);try{const r=await Ap(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Eu.get(o);a&&(ot(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.cu=!0:i.modifiedDocuments.size>0?ot(a.cu,14607):i.removedDocuments.size>0&&(ot(a.cu,42227),a.cu=!1))}),await Ju(e,r,t)}catch(r){await Wr(r)}}function il(n,t,e){const r=Q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.hu.forEach((o,a)=>{const c=a.view.Fa(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=Q(a);h.onlineState=c;let f=!1;h.queries.forEach((m,T)=>{for(const w of T.Sa)w.Fa(c)&&(f=!0)}),f&&ji(h)}(r.eventManager,t),i.length&&r.lu.Y_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function sg(n,t,e){const r=Q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Eu.get(t),o=i&&i.key;if(o){let a=new ht(L.comparator);a=a.insert(o,Rt.newNoDocument(o,B.min()));const c=W().add(o),h=new ss(B.min(),new Map,new ht($),a,c);await Xu(r,h),r.Iu=r.Iu.remove(o),r.Eu.delete(t),Hi(r)}else await fi(r.localStore,t,!1).then(()=>gi(r,t,e)).catch(Wr)}function gi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Pu.get(t))n.hu.delete(r),e&&n.lu.gu(r,e);n.Pu.delete(t),n.isPrimaryClient&&n.du.Hr(t).forEach(r=>{n.du.containsKey(r)||Yu(n,r)})}function Yu(n,t){n.Tu.delete(t.path.canonicalString());const e=n.Iu.get(t);e!==null&&(Fi(n.remoteStore,e),n.Iu=n.Iu.remove(t),n.Eu.delete(e),Hi(n))}function ol(n,t,e){for(const r of e)r instanceof Qu?(n.du.addReference(r.key,t),ig(n,r)):r instanceof Gu?(x(zi,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,t),n.du.containsKey(r.key)||Yu(n,r.key)):U(19791,{pu:r})}function ig(n,t){const e=t.key,r=e.path.canonicalString();n.Iu.get(e)||n.Tu.has(r)||(x(zi,"New document in limbo: "+e),n.Tu.add(r),Hi(n))}function Hi(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const t=n.Tu.values().next().value;n.Tu.delete(t);const e=new L(st.fromString(t)),r=n.Vu.next();n.Eu.set(r,new Yp(e)),n.Iu=n.Iu.insert(e,r),qu(n.remoteStore,new le(zt(Vi(e.path)),r,"TargetPurposeLimboResolution",Xr.le))}}async function Ju(n,t,e){const r=Q(n),i=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((c,h)=>{a.push(r.fu(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const T=f?!f.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(f){i.push(f);const T=Mi.Rs(h.targetId,f);o.push(T)}}))}),await Promise.all(a),r.lu.Y_(i),await async function(h,f){const m=Q(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>b.forEach(f,w=>b.forEach(w.ds,S=>m.persistence.referenceDelegate.addReference(T,w.targetId,S)).next(()=>b.forEach(w.As,S=>m.persistence.referenceDelegate.removeReference(T,w.targetId,S)))))}catch(T){if(!an(T))throw T;x(Li,"Failed to update sequence numbers: "+T)}for(const T of f){const w=T.targetId;if(!T.fromCache){const S=m.xs.get(w),R=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(R);m.xs=m.xs.insert(w,N)}}}(r.localStore,o))}async function og(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){x(zi,"User change. New user:",t.toKey());const r=await Mu(e.localStore,t);e.currentUser=t,function(o,a){o.Ru.forEach(c=>{c.forEach(h=>{h.reject(new O(V.CANCELLED,a))})}),o.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ju(e,r.ks)}}function ag(n,t){const e=Q(n),r=e.Eu.get(t);if(r&&r.cu)return W().add(r.key);{let i=W();const o=e.Pu.get(t);if(!o)return i;for(const a of o){const c=e.hu.get(a);i=i.unionWith(c.view.eu)}return i}}function Zu(n){const t=Q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ag.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=sg.bind(null,t),t.lu.Y_=Qp.bind(null,t.eventManager),t.lu.gu=Gp.bind(null,t.eventManager),t}class Hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Fu(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return Ip(this.persistence,new Ep,t.initialUser,this.serializer)}Su(t){return new Ou(Oi.fi,this.serializer)}bu(t){return new Rp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hr.provider={build:()=>new Hr};class lg extends Hr{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){ot(this.persistence.referenceDelegate instanceof zr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ip(r,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Ou(r=>zr.fi(r,e),this.serializer)}}class _i{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>il(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=og.bind(null,this.syncEngine),await zp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Kp}()}createDatastore(t){const e=Fu(t.databaseInfo.databaseId),r=function(o){return new kp(o)}(t.databaseInfo);return function(o,a,c,h){return new Lp(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,c){return new Bp(r,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>il(this.syncEngine,e,0),function(){return Ja.C()?new Ja:new Pp}())}createSyncEngine(t,e){return function(i,o,a,c,h,f,m){const T=new Jp(i,o,a,c,h,f);return m&&(T.mu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=Q(i);x(nn,"RemoteStore shutting down."),o.da.add(5),await Wn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}_i.provider={build:()=>new _i};/**
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
 */class tc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):te("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const ve="FirestoreClient";class ug{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=St.UNAUTHENTICATED,this.clientId=ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{x(ve,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x(ve,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new de;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ju(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ks(n,t){n.asyncQueue.verifyOperationInProgress(),x(ve,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function al(n,t){n.asyncQueue.verifyOperationInProgress();const e=await cg(n);x(ve,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>el(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>el(t.remoteStore,i)),n._onlineComponents=t}async function cg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(ve,"Using user provided OfflineComponentProvider");try{await Ks(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ye("Error using user provided cache. Falling back to memory cache: "+e),await Ks(n,new Hr)}}else x(ve,"Using default OfflineComponentProvider"),await Ks(n,new lg(void 0));return n._offlineComponents}async function hg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(ve,"Using user provided OnlineComponentProvider"),await al(n,n._uninitializedComponentsProvider._online)):(x(ve,"Using default OnlineComponentProvider"),await al(n,new _i))),n._onlineComponents}async function ec(n){const t=await hg(n),e=t.eventManager;return e.onListen=Zp.bind(null,t.syncEngine),e.onUnlisten=ng.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=tg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=rg.bind(null,t.syncEngine),e}function dg(n,t,e={}){const r=new de;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const m=new tc({next:w=>{m.xu(),a.enqueueAndForget(()=>Hu(o,T));const S=w.docs.has(c);!S&&w.fromCache?f.reject(new O(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&h&&h.source==="server"?f.reject(new O(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),T=new Ku(Vi(c.path),m,{includeMetadataChanges:!0,Qa:!0});return zu(o,T)}(await ec(n),n.asyncQueue,t,e,r)),r.promise}function fg(n,t,e={}){const r=new de;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const m=new tc({next:w=>{m.xu(),a.enqueueAndForget(()=>Hu(o,T)),w.fromCache&&h.source==="server"?f.reject(new O(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),T=new Ku(c,m,{includeMetadataChanges:!0,Qa:!0});return zu(o,T)}(await ec(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function nc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */function rc(n,t,e){if(!e)throw new O(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function mg(n,t,e,r){if(t===!0&&r===!0)throw new O(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ul(n){if(!L.isDocumentKey(n))throw new O(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cl(n){if(L.isDocumentKey(n))throw new O(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pg(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function Hn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=pg(n);throw new O(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const sc="firestore.googleapis.com",hl=!0;class dl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sc,this.ssl=hl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:hl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Nu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<rp)throw new O(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class os{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dl(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xf;switch(r.type){case"firstParty":return new Mf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ll.get(e);r&&(x("ComponentProvider","Removing Datastore"),ll.delete(e),r.terminate())}(this),Promise.resolve()}}function gg(n,t,e,r={}){var i;n=Hn(n,os);const o=Ii(t),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(od(`https://${h}`),cd("Firestore",!0)),a.host!==sc&&a.host!==h&&Ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!Mr(f,c)&&(n._setSettings(f),r.mockUserToken)){let m,T;if(typeof r.mockUserToken=="string")m=r.mockUserToken,T=St.MOCK_USER;else{m=ad(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new O(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new St(w)}n._authCredentials=new kf(new eu(m,T))}}/**
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
 */class as{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new as(this.firestore,t,this._query)}}class Ht{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ht(this.firestore,t,this._key)}}class fe extends as{constructor(t,e,r){super(t,e,Vi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ht(this.firestore,null,new L(t))}withConverter(t){return new fe(this.firestore,t,this._path)}}function ic(n,t,...e){if(n=Ul(n),rc("collection","path",t),n instanceof os){const r=st.fromString(t,...e);return cl(r),new fe(n,null,r)}{if(!(n instanceof Ht||n instanceof fe))throw new O(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(t,...e));return cl(r),new fe(n.firestore,null,r)}}function _g(n,t,...e){if(n=Ul(n),arguments.length===1&&(t=ru.newId()),rc("doc","path",t),n instanceof os){const r=st.fromString(t,...e);return ul(r),new Ht(n,null,new L(r))}{if(!(n instanceof Ht||n instanceof fe))throw new O(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(t,...e));return ul(r),new Ht(n.firestore,n instanceof fe?n.converter:null,new L(r))}}/**
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
 */const fl="AsyncQueue";class ml{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Bu(this,"async_queue_retry"),this.rc=()=>{const r=Hs();r&&x(fl,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const e=Hs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=Hs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new de;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!an(t))throw t;x(fl,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,te("INTERNAL UNHANDLED ERROR: ",pl(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=e,e}enqueueAfterDelay(t,e,r){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const i=$i.createAndSchedule(this,t,e,r,o=>this.uc(o));return this.Zu.push(i),i}oc(){this.Xu&&U(47125,{cc:pl(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function pl(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Ki extends os{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new ml,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ml(t),this._firestoreClient=void 0,await t}}}function yg(n,t){const e=typeof n=="object"?n:Tf(),r=typeof n=="string"?n:Br,i=gf(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=sd("firestore");o&&gg(i,...o)}return i}function oc(n){if(n._terminated)throw new O(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vg(n),n._firestoreClient}function vg(n){var t,e,r;const i=n._freezeSettings(),o=function(c,h,f,m){return new Jf(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,nc(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new ug(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c?._online.build();return{_offline:c?._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Kr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Kr(Et.fromBase64String(t))}catch(e){throw new O(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Kr(Et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ac{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Eg{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
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
 */class Tg{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}const wg=new RegExp("[~\\*/\\[\\]]");function Ig(n,t,e){if(t.search(wg)>=0)throw gl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new ac(...t.split("."))._internalPath}catch{throw gl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function gl(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let a="";return new O(V.INVALID_ARGUMENT,o+n+a)}/**
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
 */class lc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ag(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(uc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ag extends lc{data(){return super.data()}}function uc(n,t){return typeof t=="string"?Ig(n,t):t instanceof ac?t._internalPath:t._delegate._internalPath}/**
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
 */function Cg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bg{convertValue(t,e="none"){switch(_e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ge(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw U(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Qn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[ri].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ct(a.doubleValue));return new Tg(o)}convertGeoPoint(t){return new Eg(ct(t.latitude),ct(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Jr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp($n(t));default:return null}}convertTimestamp(t){const e=pe(t);return new kt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=st.fromString(t);ot(ku(r),9688,{name:t});const i=new jn(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(e)||te(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class xn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class cc extends lc{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(uc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Dr extends cc{data(t={}){return super.data(t)}}class Sg{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new xn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Dr(this._firestore,this._userDataWriter,r.key,r,new xn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new Dr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new xn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Dr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new xn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Rg(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Rg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
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
 */function Pg(n){n=Hn(n,Ht);const t=Hn(n.firestore,Ki);return dg(oc(t),n._key).then(e=>Vg(t,n,e))}class hc extends bg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Kr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ht(this.firestore,null,e)}}function dc(n){n=Hn(n,as);const t=Hn(n.firestore,Ki),e=oc(t),r=new hc(t);return Cg(n._query),fg(e,n._query).then(i=>new Sg(t,r,n,i))}function Vg(n,t,e){const r=e.docs.get(t._key),i=new hc(n);return new cc(n,i,t._key,r,new xn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){on=i})(Ef),Fr(new Bn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Ki(new Nf(r.getProvider("auth-internal")),new Lf(a,r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jn(f.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Qe(va,Ea,t),Qe(va,Ea,"esm2017")})();var Dg="firebase",xg="11.9.1";/**
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
 */Qe(Dg,xg,"app");const _l={apiKey:"AIzaSyCYxI-u9jWIl-obR8FmvOXOh91sYD29toQ",authDomain:"mylara-landing.firebaseapp.com",projectId:"mylara-landing",storageBucket:"mylara-landing.firebasestorage.app",messagingSenderId:"890771851225",appId:"1:890771851225:web:bf606c67130d45fbc3fbc8"};let yl,fc;try{_l.projectId||console.warn("Firebase projectId is undefined. Using offline mode only."),yl=Hl(_l),fc=yg(yl)}catch(n){console.error("Error initializing Firebase:",n)}const Qi=()=>fc,kg=async()=>{const n=Qi();if(!n)return{items:[],error:"Firebase не инициализирован"};try{const t=await dc(ic(n,"carousel")),e=[];return t.forEach(r=>{const i=r.data();e.push({id:r.id,...i})}),{items:e,error:null}}catch(t){return console.error("Error fetching carousel data:",t),{items:[],error:"Не удалось загрузить данные карусели"}}},Ng=()=>{const n=it([]),t=it(!0),e=it(null),r=async()=>{t.value=!0,e.value=null;try{const i=await kg();i.error?e.value=i.error:n.value=i.items}catch(i){console.error("Error in fetchData:",i),e.value="Произошла ошибка при загрузке данных"}finally{t.value=!1}};return r(),{carouselItems:n,loading:t,error:e,refresh:r}},Og={class:"carousel-wrapper relative-position"},Mg={key:0,class:"text-center q-pa-md"},Lg={class:"text-negative"},Fg={key:1,class:"text-center q-pa-md"},Bg=["src"],qg={class:"text-subtitle2"},Ug={class:"text-h6"},$g=Gr({__name:"LandingCarousel",setup(n){const{isMobile:t}=Qh(),e=it(0),r=it(!1),i=it(null),o=it(null),a=it(null),c=it(0),{carouselItems:h,loading:f,error:m,refresh:T}=Ng(),w=({id:M,img:q,label:G,link:X,info:v})=>{i.value={id:M,img:q,label:G,link:X,info:v},r.value=!0,a.value=M},S=K(()=>h.value),R=()=>{e.value<h.value.length-1&&(e.value++,D())},N=()=>{e.value>0&&(e.value--,D())},D=()=>{const M=document.querySelector(".carousel-items-container"),G=document.querySelectorAll(".carousel-card-container")[e.value];if(M&&G){const X=G.clientWidth||0;M.scrollTo({left:X*e.value,behavior:"smooth"})}},j=M=>{c.value=M.touches[0].clientX},k=M=>{const q=M.changedTouches[0].clientX,G=c.value-q;Math.abs(G)>50&&(G>0?R():N())};return Qr(()=>{o.value&&(o.value.addEventListener("touchstart",j,{passive:!0}),o.value.addEventListener("touchend",k,{passive:!0}))}),(M,q)=>(gt(),Ft(Cr,null,[Lt("div",Og,[ut(Ti,{showing:rt(f)},{default:Ot(()=>[ut(yi,{color:"primary",size:"40px"})]),_:1},8,["showing"]),rt(m)?(gt(),Ft("div",Mg,[ut(Nr,{color:"negative",name:"error",size:"2rem"}),Lt("p",Lg,Jt(rt(m)),1),ut(Ve,{color:"primary",label:"Повторить",onClick:rt(T)},null,8,["onClick"])])):rt(h).length===0&&!rt(f)?(gt(),Ft("div",Fg,[ut(Nr,{color:"info",name:"info",size:"2rem"}),q[2]||(q[2]=Lt("p",null,"Нет доступных данных",-1))])):(gt(),Ft(Cr,{key:2},[!rt(t)&&!rt(f)?(gt(),Ke(Ve,{key:0,disable:e.value===0,class:"carousel-nav-btn carousel-prev-btn",color:"primary",icon:"chevron_left",round:"",onClick:N},null,8,["disable"])):Ds("",!0),Lt("div",{ref_key:"carouselRef",ref:o,class:"carousel-items-container q-py-lg q-my-sm"},[(gt(!0),Ft(Cr,null,Sl(S.value,({id:G,img:X,label:v,link:p,info:_})=>(gt(),Ft("div",{key:G,class:"carousel-card-container"},[ut(Xo,{class:Pl(["cursor-pointer my-card",{active:a.value===G}]),onClick:y=>w({id:G,img:X,label:v,link:p,info:_})},{default:Ot(()=>[Lt("img",{src:X,style:{height:"200px","object-fit":"cover"}},null,8,Bg),ut(Ns,{class:"text-center"},{default:Ot(()=>[Lt("div",qg,Jt(v),1)]),_:2},1024)]),_:2},1032,["class","onClick"])]))),128))],512),!rt(t)&&!rt(f)?(gt(),Ke(Ve,{key:1,disable:e.value===rt(h).length-1,class:"carousel-nav-btn carousel-next-btn",color:"primary",icon:"chevron_right",round:"",onClick:R},null,8,["disable"])):Ds("",!0)],64))]),ut(Hh,{modelValue:r.value,"onUpdate:modelValue":q[0]||(q[0]=G=>r.value=G),onHide:q[1]||(q[1]=G=>a.value=null)},{default:Ot(()=>[i.value?(gt(),Ke(Xo,{key:0,style:{"max-width":"350px"}},{default:Ot(()=>[ut(Ns,null,{default:Ot(()=>[Lt("div",Ug,Jt(i.value.label),1)]),_:1}),ut(Ns,{class:"q-pt-none"},{default:Ot(()=>[Rl(Jt(i.value.info),1)]),_:1}),ut(Th,{align:"right"},{default:Ot(()=>[oh(ut(Ve,{color:"primary",label:"Закрыть",flat:""},null,512),[[Kh]])]),_:1})]),_:1})):Ds("",!0)]),_:1},8,["modelValue"])],64))}}),Gi={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},jg=Object.keys(Gi);Gi.all=!0;function vl(n){const t={};for(const e of jg)n[e]===!0&&(t[e]=!0);return Object.keys(t).length===0?Gi:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const zg=["INPUT","TEXTAREA"];function El(n,t){return t.event===void 0&&n.target!==void 0&&n.target.draggable!==!0&&typeof t.handler=="function"&&zg.includes(n.target.nodeName.toUpperCase())===!1&&(n.qClonedBy===void 0||n.qClonedBy.indexOf(t.uid)===-1)}function Hg(){if(window.getSelection!==void 0){const n=window.getSelection();n.empty!==void 0?n.empty():n.removeAllRanges!==void 0&&(n.removeAllRanges(),ah.is.mobile!==!0&&n.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Kg(n){const t=[.06,6,50];return typeof n=="string"&&n.length&&n.split(":").forEach((e,r)=>{const i=parseFloat(e);i&&(t[r]=i)}),t}const Qg=bl({name:"touch-swipe",beforeMount(n,{value:t,arg:e,modifiers:r}){if(r.mouse!==!0&&Mt.has.touch!==!0)return;const i=r.mouseCapture===!0?"Capture":"",o={handler:t,sensitivity:Kg(e),direction:vl(r),noop:lh,mouseStart(a){El(a,o)&&uh(a)&&(pr(o,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),o.start(a,!0))},touchStart(a){if(El(a,o)){const c=a.target;pr(o,"temp",[[c,"touchmove","move","notPassiveCapture"],[c,"touchcancel","end","notPassiveCapture"],[c,"touchend","end","notPassiveCapture"]]),o.start(a)}},start(a,c){Mt.is.firefox===!0&&ks(n,!0);const h=Wo(a);o.event={x:h.left,y:h.top,time:Date.now(),mouse:c===!0,dir:!1}},move(a){if(o.event===void 0)return;if(o.event.dir!==!1){Ar(a);return}const c=Date.now()-o.event.time;if(c===0)return;const h=Wo(a),f=h.left-o.event.x,m=Math.abs(f),T=h.top-o.event.y,w=Math.abs(T);if(o.event.mouse!==!0){if(m<o.sensitivity[1]&&w<o.sensitivity[1]){o.end(a);return}}else if(window.getSelection().toString()!==""){o.end(a);return}else if(m<o.sensitivity[2]&&w<o.sensitivity[2])return;const S=m/c,R=w/c;o.direction.vertical===!0&&m<w&&m<100&&R>o.sensitivity[0]&&(o.event.dir=T<0?"up":"down"),o.direction.horizontal===!0&&m>w&&w<100&&S>o.sensitivity[0]&&(o.event.dir=f<0?"left":"right"),o.direction.up===!0&&m<w&&T<0&&m<100&&R>o.sensitivity[0]&&(o.event.dir="up"),o.direction.down===!0&&m<w&&T>0&&m<100&&R>o.sensitivity[0]&&(o.event.dir="down"),o.direction.left===!0&&m>w&&f<0&&w<100&&S>o.sensitivity[0]&&(o.event.dir="left"),o.direction.right===!0&&m>w&&f>0&&w<100&&S>o.sensitivity[0]&&(o.event.dir="right"),o.event.dir!==!1?(Ar(a),o.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Hg(),o.styleCleanup=N=>{o.styleCleanup=void 0,document.body.classList.remove("non-selectable");const D=()=>{document.body.classList.remove("no-pointer-events--children")};N===!0?setTimeout(D,50):D()}),o.handler({evt:a,touch:o.event.mouse!==!0,mouse:o.event.mouse,direction:o.event.dir,duration:c,distance:{x:m,y:w}})):o.end(a)},end(a){o.event!==void 0&&(xs(o,"temp"),Mt.is.firefox===!0&&ks(n,!1),o.styleCleanup?.(!0),a!==void 0&&o.event.dir!==!1&&Ar(a),o.event=void 0)}};if(n.__qtouchswipe=o,r.mouse===!0){const a=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";pr(o,"main",[[n,"mousedown","mouseStart",`passive${a}`]])}Mt.has.touch===!0&&pr(o,"main",[[n,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[n,"touchmove","noop","notPassiveCapture"]])},updated(n,t){const e=n.__qtouchswipe;e!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&e.end(),e.handler=t.value),e.direction=vl(t.modifiers))},beforeUnmount(n){const t=n.__qtouchswipe;t!==void 0&&(xs(t,"main"),xs(t,"temp"),Mt.is.firefox===!0&&ks(n,!1),t.styleCleanup?.(),delete n.__qtouchswipe)}});function Gg(){let n=Object.create(null);return{getCache:(t,e)=>n[t]===void 0?n[t]=typeof e=="function"?e():e:n[t],setCache(t,e){n[t]=e},hasCache(t){return Object.hasOwnProperty.call(n,t)},clearCache(t){t!==void 0?delete n[t]:n=Object.create(null)}}}const Wg={name:{required:!0},disable:Boolean},Tl={setup(n,{slots:t}){return()=>tt("div",{class:"q-panel scroll",role:"tabpanel"},Ee(t.default))}},Xg={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Yg=["update:modelValue","beforeTransition","transition"];function Jg(){const{props:n,emit:t,proxy:e}=ee(),{getCache:r}=Gg(),{registerTimeout:i}=Vl();let o,a;const c=it(null),h={value:null};function f(F){const Z=n.vertical===!0?"up":"left";p((e.$q.lang.rtl===!0?-1:1)*(F.direction===Z?1:-1))}const m=K(()=>[[Qg,f,void 0,{horizontal:n.vertical!==!0,vertical:n.vertical,mouse:!0}]]),T=K(()=>n.transitionPrev||`slide-${n.vertical===!0?"down":"right"}`),w=K(()=>n.transitionNext||`slide-${n.vertical===!0?"up":"left"}`),S=K(()=>`--q-transition-duration: ${n.transitionDuration}ms`),R=K(()=>typeof n.modelValue=="string"||typeof n.modelValue=="number"?n.modelValue:String(n.modelValue)),N=K(()=>({include:n.keepAliveInclude,exclude:n.keepAliveExclude,max:n.keepAliveMax})),D=K(()=>n.keepAliveInclude!==void 0||n.keepAliveExclude!==void 0);jt(()=>n.modelValue,(F,Z)=>{const Tt=q(F)===!0?G(F):-1;a!==!0&&v(Tt===-1?0:Tt<G(Z)?-1:1),h.value!==Tt&&(h.value=Tt,t("beforeTransition",F,Z),i(()=>{t("transition",F,Z)},n.transitionDuration))});function j(){p(1)}function k(){p(-1)}function M(F){t("update:modelValue",F)}function q(F){return F!=null&&F!==""}function G(F){return o.findIndex(Z=>Z.props.name===F&&Z.props.disable!==""&&Z.props.disable!==!0)}function X(){return o.filter(F=>F.props.disable!==""&&F.props.disable!==!0)}function v(F){const Z=F!==0&&n.animated===!0&&h.value!==-1?"q-transition--"+(F===-1?T.value:w.value):null;c.value!==Z&&(c.value=Z)}function p(F,Z=h.value){let Tt=Z+F;for(;Tt!==-1&&Tt<o.length;){const wt=o[Tt];if(wt!==void 0&&wt.props.disable!==""&&wt.props.disable!==!0){v(F),a=!0,t("update:modelValue",wt.props.name),setTimeout(()=>{a=!1});return}Tt+=F}n.infinite===!0&&o.length!==0&&Z!==-1&&Z!==o.length&&p(F,F===-1?o.length:-1)}function _(){const F=G(n.modelValue);return h.value!==F&&(h.value=F),!0}function y(){const F=q(n.modelValue)===!0&&_()&&o[h.value];return n.keepAlive===!0?[tt(hh,N.value,[tt(D.value===!0?r(R.value,()=>({...Tl,name:R.value})):Tl,{key:R.value,style:S.value},()=>F)])]:[tt("div",{class:"q-panel scroll",style:S.value,key:R.value,role:"tabpanel"},[F])]}function E(){if(o.length!==0)return n.animated===!0?[tt(xr,{name:c.value},y)]:y()}function I(F){return o=ch(Ee(F.default,[])).filter(Z=>Z.props!==null&&Z.props.slot===void 0&&q(Z.props.name)===!0),o.length}function g(){return o}return Object.assign(e,{next:j,previous:k,goTo:M}),{panelIndex:h,panelDirectives:m,updatePanelsList:I,updatePanelIndex:_,getPanelContent:E,getEnabledPanels:X,getPanels:g,isValidPanelName:q,keepAliveProps:N,needsUniqueKeepAliveWrapper:D,goToPanelByOffset:p,goToPanel:M,nextPanel:j,previousPanel:k}}const Zg=Gt({name:"QCarouselSlide",props:{...Wg,imgSrc:String},setup(n,{slots:t}){const e=K(()=>n.imgSrc?{backgroundImage:`url("${n.imgSrc}")`}:{});return()=>tt("div",{class:"q-carousel__slide",style:e.value},Ee(t.default))}});let bn=0;const t_={fullscreen:Boolean,noRouteFullscreenExit:Boolean},e_=["update:fullscreen","fullscreen"];function n_(){const n=ee(),{props:t,emit:e,proxy:r}=n;let i,o,a;const c=it(!1);Al(n)===!0&&jt(()=>r.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&m()}),jt(()=>t.fullscreen,T=>{c.value!==T&&h()}),jt(c,T=>{e("update:fullscreen",T),e("fullscreen",T)});function h(){c.value===!0?m():f()}function f(){c.value!==!0&&(c.value=!0,a=r.$el.parentNode,a.replaceChild(o,r.$el),document.body.appendChild(r.$el),bn++,bn===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:m},kr.add(i))}function m(){c.value===!0&&(i!==void 0&&(kr.remove(i),i=void 0),a.replaceChild(r.$el,o),c.value=!1,bn=Math.max(0,bn-1),bn===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),r.$el.scrollIntoView!==void 0&&setTimeout(()=>{r.$el.scrollIntoView()})))}return dh(()=>{o=document.createElement("span")}),Qr(()=>{t.fullscreen===!0&&f()}),Kn(m),Object.assign(r,{toggleFullscreen:h,setFullscreen:f,exitFullscreen:m}),{inFullscreen:c,toggleFullscreen:h}}const r_=["top","right","bottom","left"],s_=["regular","flat","outline","push","unelevated"],i_=Gt({name:"QCarousel",props:{...vi,...Xg,...t_,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:n=>s_.includes(n),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:n=>r_.includes(n)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...e_,...Yg],setup(n,{slots:t}){const{proxy:{$q:e}}=ee(),r=Ei(n,e);let i=null,o;const{updatePanelsList:a,getPanelContent:c,panelDirectives:h,goToPanel:f,previousPanel:m,nextPanel:T,getEnabledPanels:w,panelIndex:S}=Jg(),{inFullscreen:R}=n_(),N=K(()=>R.value!==!0&&n.height!==void 0?{height:n.height}:{}),D=K(()=>n.vertical===!0?"vertical":"horizontal"),j=K(()=>n.navigationPosition||(n.vertical===!0?"right":"bottom")),k=K(()=>`q-carousel q-panel-parent q-carousel--with${n.padding===!0?"":"out"}-padding`+(R.value===!0?" fullscreen":"")+(r.value===!0?" q-carousel--dark q-dark":"")+(n.arrows===!0?` q-carousel--arrows-${D.value}`:"")+(n.navigation===!0?` q-carousel--navigation-${j.value}`:"")),M=K(()=>{const y=[n.prevIcon||e.iconSet.carousel[n.vertical===!0?"up":"left"],n.nextIcon||e.iconSet.carousel[n.vertical===!0?"down":"right"]];return n.vertical===!1&&e.lang.rtl===!0?y.reverse():y}),q=K(()=>n.navigationIcon||e.iconSet.carousel.navigationIcon),G=K(()=>n.navigationActiveIcon||q.value),X=K(()=>({color:n.controlColor,textColor:n.controlTextColor,round:!0,[n.controlType]:!0,dense:!0}));jt(()=>n.modelValue,()=>{n.autoplay&&v()}),jt(()=>n.autoplay,y=>{y?v():i!==null&&(clearTimeout(i),i=null)});function v(){const y=fh(n.autoplay)===!0?Math.abs(n.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,y>=0?T():m()},y)}Qr(()=>{n.autoplay&&v()}),Kn(()=>{i!==null&&clearTimeout(i)});function p(y,E){return tt("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${y} q-carousel__navigation--${j.value}`+(n.controlColor!==void 0?` text-${n.controlColor}`:"")},[tt("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},w().map(E))])}function _(){const y=[];if(n.navigation===!0){const E=t["navigation-icon"]!==void 0?t["navigation-icon"]:g=>tt(Ve,{key:"nav"+g.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${g.active===!0?"":"in"}active`,...g.btnProps,onClick:g.onClick}),I=o-1;y.push(p("buttons",(g,F)=>{const Z=g.props.name,Tt=S.value===F;return E({index:F,maxIndex:I,name:Z,active:Tt,btnProps:{icon:Tt===!0?G.value:q.value,size:"sm",...X.value},onClick:()=>{f(Z)}})}))}else if(n.thumbnails===!0){const E=n.controlColor!==void 0?` text-${n.controlColor}`:"";y.push(p("thumbnails",I=>{const g=I.props;return tt("img",{key:"tmb#"+g.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${g.name===n.modelValue?"":"in"}active`+E,src:g.imgSrc||g["img-src"],onClick:()=>{f(g.name)}})}))}return n.arrows===!0&&S.value>=0&&((n.infinite===!0||S.value>0)&&y.push(tt("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${D.value} absolute flex flex-center`},[tt(Ve,{icon:M.value[0],...X.value,onClick:m})])),(n.infinite===!0||S.value<o-1)&&y.push(tt("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${D.value} absolute flex flex-center`},[tt(Ve,{icon:M.value[1],...X.value,onClick:T})]))),ph(t.control,y)}return()=>(o=a(t),tt("div",{class:k.value,style:N.value},[mh("div",{class:"q-carousel__slides-container"},c(),"sl-cont",n.swipeable,()=>h.value)].concat(_())))}}),o_=async()=>{const n=Qi();if(!n)return{slides:[],error:"Firebase не инициализирован"};try{const t=await dc(ic(n,"slides")),e=[];return t.forEach(r=>{const i=r.data();e.push({id:Number(r.id),...i})}),{slides:e,error:null}}catch(t){return console.error("Error fetching slides data:",t),{slides:[],error:"Не удалось загрузить данные слайдов"}}},wl=[{id:1,img:"https://cdn.quasar.dev/img/mountains.jpg",title:"Mountains",subtitle:"Majestic peaks and valleys"},{id:2,img:"https://cdn.quasar.dev/img/parallax1.jpg",title:"City",subtitle:"Urban landscapes and architecture"},{id:3,img:"https://cdn.quasar.dev/img/parallax2.jpg",title:"Technology",subtitle:"Innovation and advancement"}],a_=()=>{const n=it(wl),t=it(!0),e=it(null),r=async()=>{t.value=!0,e.value=null;try{const i=await o_();i.error?(e.value=i.error,n.value=wl):i.slides.length>0&&(n.value=i.slides)}catch(i){console.error("Error in fetchSlides:",i),e.value="Произошла ошибка при загрузке слайдов"}finally{t.value=!1}};return r(),{slides:n,loading:t,error:e,refresh:r}},l_={class:"relative-position"},u_={key:0,class:"text-center q-pa-md"},c_={class:"text-negative"},h_={class:"absolute-bottom custom-caption"},d_={class:"text-h2"},f_={class:"text-subtitle1"},m_=Gr({__name:"LandingSlider",setup(n){const t=Ml(),e=it(1),{slides:r,loading:i,error:o}=a_();return(a,c)=>(gt(),Ft("div",l_,[ut(Ti,{showing:rt(i)},{default:Ot(()=>[ut(yi,{color:"primary",size:"40px"})]),_:1},8,["showing"]),rt(o)?(gt(),Ft("div",u_,[ut(Nr,{color:"negative",name:"error",size:"2rem"}),Lt("p",c_,Jt(rt(o)),1)])):(gt(),Ke(i_,{key:1,modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=h=>e.value=h),class:Pl([{"height-xs":rt(t).screen.xs,"height-sm":rt(t).screen.sm,"height-md":rt(t).screen.md,"height-lg":rt(t).screen.lg||rt(t).screen.xl},"bg-white text-white"]),"transition-next":"slide-left","transition-prev":"slide-right",animated:"",arrows:"",autoplay:"",infinite:"",swipeable:""},{default:Ot(()=>[(gt(!0),Ft(Cr,null,Sl(rt(r),({id:h,img:f,title:m,subtitle:T})=>(gt(),Ke(Zg,{key:h,"img-src":f,name:h},{default:Ot(()=>[Lt("div",h_,[Lt("div",d_,Jt(m),1),Lt("div",f_,Jt(T),1)])]),_:2},1032,["img-src","name"]))),128))]),_:1},8,["modelValue","class"]))]))}}),p_=async()=>{const n=Qi();if(!n)return{title:"",error:"Firebase не инициализирован"};try{const t=_g(n,"slogan","1"),e=await Pg(t);return e.exists()?{title:e.data().title,error:null}:{title:"",error:"Слоган не найден"}}catch(t){return console.error("Error fetching slogan data:",t),{title:"",error:"Не удалось загрузить данные слогана"}}},Il="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",g_=()=>{const n=it(Il),t=it(!0),e=it(null),r=async()=>{t.value=!0,e.value=null;try{const i=await p_();i.error?(e.value=i.error,n.value=Il):i.title&&(n.value=i.title)}catch(i){console.error("Error in fetchSlogan:",i),e.value="Произошла ошибка при загрузке слогана"}finally{t.value=!1}};return r(),{slogan:n,loading:t,error:e,refresh:r}},__={class:"q-pt-xl q-px-md relative-position"},y_={key:0,class:"text-center text-negative"},v_={key:1},E_=Gr({__name:"LandingSlogan",setup(n){const{slogan:t,loading:e,error:r}=g_();return(i,o)=>(gt(),Ft("div",__,[ut(Ti,{showing:rt(e)},{default:Ot(()=>[ut(yi,{color:"primary",size:"40px"})]),_:1},8,["showing"]),rt(r)?(gt(),Ft("div",y_,[ut(Nr,{class:"q-mr-xs",color:"negative",name:"error",size:"1rem"}),Rl(" "+Jt(rt(r)),1)])):(gt(),Ft("div",v_,Jt(rt(t)),1))]))}}),T_={class:"q-mx-auto",style:{"max-width":"1200px"}},C_=Gr({__name:"HomePage",setup(n){return(t,e)=>(gt(),Ke(vh,null,{default:Ot(()=>[ut(m_),Lt("div",T_,[ut(E_)]),ut($g)]),_:1}))}});export{C_ as default};
