const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LandingLayout-CLaJeT8j.js","assets/QLayout-DuqvgNil.js","assets/use-timeout-Bw-UEUPx.js","assets/QImg-DyuNGt1G.js","assets/QHeader-CrZneper.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/HomePage-Bo8mKt-J.js","assets/QDialog-6xVF8BPr.js","assets/use-quasar-B7cg2p2u.js","assets/seo.service-CDriDjfm.js","assets/firestore.service-LQq7Y7Ik.js","assets/touch-BjYP5sR0.js","assets/selection-CJerqyRi.js","assets/use-fullscreen-B4ubWitu.js","assets/HomePage-Bhjpuacr.css","assets/ErrorNotFoundPage-BuZk1ruR.js","assets/AdminLoginPage-BGa_B8H8.js","assets/QForm-CjumaL_y.js","assets/format-BvkBI9bc.js","assets/QInput-Cv-SvHr5.js","assets/AdminLayout-DgZ7PZgf.js","assets/QItem-BgK-P3Rp.js","assets/admin-config.service-B7Jt9OFH.js","assets/AdminDashboardPage-Bmtxixrz.js","assets/AdminDashboardPage-YtpbPr6I.css","assets/AdminCollectionPage-CRltP-yy.js","assets/AdminCollectionPage-DXY__fAY.css"])))=>i.map(i=>d[i]);
const fT=function(){const e=typeof document<"u"&&document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),dT=function(t){return"/"+t},id={},er=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(n.map(c=>{if(c=dT(c),c in id)return;id[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":fT,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ju(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},Cs=[],hn=()=>{},pT=()=>!1,al=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qu=t=>t.startsWith("onUpdate:"),et=Object.assign,Hu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gT=Object.prototype.hasOwnProperty,Pe=(t,e)=>gT.call(t,e),ce=Array.isArray,Ps=t=>go(t)==="[object Map]",sm=t=>go(t)==="[object Set]",mT=t=>go(t)==="[object RegExp]",pe=t=>typeof t=="function",$e=t=>typeof t=="string",jn=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",im=t=>(Fe(t)||pe(t))&&pe(t.then)&&pe(t.catch),om=Object.prototype.toString,go=t=>om.call(t),_T=t=>go(t).slice(8,-1),am=t=>go(t)==="[object Object]",zu=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ki=ju(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ll=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yT=/-(\w)/g,Kt=ll(t=>t.replace(yT,(e,n)=>n?n.toUpperCase():"")),vT=/\B([A-Z])/g,Or=ll(t=>t.replace(vT,"-$1").toLowerCase()),cl=ll(t=>t.charAt(0).toUpperCase()+t.slice(1)),uc=ll(t=>t?`on${cl(t)}`:""),pr=(t,e)=>!Object.is(t,e),Oi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ET=t=>{const e=parseFloat(t);return isNaN(e)?t:e},TT=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let od;const ul=()=>od||(od=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wu(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?AT(r):Wu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||Fe(t))return t}const wT=/;(?![^(]*\))/g,IT=/:([^]+)/,bT=/\/\*[^]*?\*\//g;function AT(t){const e={};return t.replace(bT,"").split(wT).forEach(n=>{if(n){const r=n.split(IT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ku(t){let e="";if($e(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Ku(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const RT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ST=ju(RT);function lm(t){return!!t||t===""}const cm=t=>!!(t&&t.__v_isRef===!0),CT=t=>$e(t)?t:t==null?"":ce(t)||Fe(t)&&(t.toString===om||!pe(t.toString))?cm(t)?CT(t.value):JSON.stringify(t,um,2):String(t),um=(t,e)=>cm(e)?um(t,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[hc(r,i)+" =>"]=s,n),{})}:sm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hc(n))}:jn(e)?hc(e):Fe(e)&&!ce(e)&&!am(e)?String(e):e,hc=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class PT{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){++this._on===1&&(this.prevScope=Pt,Pt=this)}off(){this._on>0&&--this._on===0&&(Pt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kT(){return Pt}let xe;const fc=new WeakSet;class hm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&Pt.active&&Pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fc.has(this)&&(fc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ad(this),pm(this);const e=xe,n=Xt;xe=this,Xt=!0;try{return this.fn()}finally{gm(this),xe=e,Xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yu(e);this.deps=this.depsTail=void 0,ad(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Kc(this)&&this.run()}get dirty(){return Kc(this)}}let fm=0,Di,Ni;function dm(t,e=!1){if(t.flags|=8,e){t.next=Ni,Ni=t;return}t.next=Di,Di=t}function Gu(){fm++}function Qu(){if(--fm>0)return;if(Ni){let e=Ni;for(Ni=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Di;){let e=Di;for(Di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function pm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Yu(r),OT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Kc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Gi)||(t.globalVersion=Gi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Kc(t))))return;t.flags|=2;const e=t.dep,n=xe,r=Xt;xe=t,Xt=!0;try{pm(t);const s=t.fn(t._value);(e.version===0||pr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xe=n,Xt=r,gm(t),t.flags&=-3}}function Yu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Yu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function OT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xt=!0;const _m=[];function xn(){_m.push(Xt),Xt=!1}function Vn(){const t=_m.pop();Xt=t===void 0?!0:t}function ad(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let Gi=0;class DT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ju{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xe||!Xt||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new DT(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,ym(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=r)}return n}trigger(e){this.version++,Gi++,this.notify(e)}notify(e){Gu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qu()}}}function ym(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ym(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Gc=new WeakMap,Kr=Symbol(""),Qc=Symbol(""),Qi=Symbol("");function vt(t,e,n){if(Xt&&xe){let r=Gc.get(t);r||Gc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ju),s.map=r,s.key=n),s.track()}}function Cn(t,e,n,r,s,i){const o=Gc.get(t);if(!o){Gi++;return}const l=c=>{c&&c.trigger()};if(Gu(),e==="clear")o.forEach(l);else{const c=ce(t),u=c&&zu(n);if(c&&n==="length"){const h=Number(r);o.forEach((d,g)=>{(g==="length"||g===Qi||!jn(g)&&g>=h)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Qi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Kr)),Ps(t)&&l(o.get(Qc)));break;case"delete":c||(l(o.get(Kr)),Ps(t)&&l(o.get(Qc)));break;case"set":Ps(t)&&l(o.get(Kr));break}}Qu()}function gs(t){const e=Se(t);return e===t?e:(vt(e,"iterate",Qi),Wt(t)?e:e.map(lt))}function hl(t){return vt(t=Se(t),"iterate",Qi),t}const NT={__proto__:null,[Symbol.iterator](){return dc(this,Symbol.iterator,lt)},concat(...t){return gs(this).concat(...t.map(e=>ce(e)?gs(e):e))},entries(){return dc(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return An(this,"every",t,e,void 0,arguments)},filter(t,e){return An(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return An(this,"find",t,e,lt,arguments)},findIndex(t,e){return An(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return An(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return An(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return An(this,"forEach",t,e,void 0,arguments)},includes(...t){return pc(this,"includes",t)},indexOf(...t){return pc(this,"indexOf",t)},join(t){return gs(this).join(t)},lastIndexOf(...t){return pc(this,"lastIndexOf",t)},map(t,e){return An(this,"map",t,e,void 0,arguments)},pop(){return pi(this,"pop")},push(...t){return pi(this,"push",t)},reduce(t,...e){return ld(this,"reduce",t,e)},reduceRight(t,...e){return ld(this,"reduceRight",t,e)},shift(){return pi(this,"shift")},some(t,e){return An(this,"some",t,e,void 0,arguments)},splice(...t){return pi(this,"splice",t)},toReversed(){return gs(this).toReversed()},toSorted(t){return gs(this).toSorted(t)},toSpliced(...t){return gs(this).toSpliced(...t)},unshift(...t){return pi(this,"unshift",t)},values(){return dc(this,"values",lt)}};function dc(t,e,n){const r=hl(t),s=r[e]();return r!==t&&!Wt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const xT=Array.prototype;function An(t,e,n,r,s,i){const o=hl(t),l=o!==t&&!Wt(t),c=o[e];if(c!==xT[e]){const d=c.apply(t,i);return l?lt(d):d}let u=n;o!==t&&(l?u=function(d,g){return n.call(this,lt(d),g,t)}:n.length>2&&(u=function(d,g){return n.call(this,d,g,t)}));const h=c.call(o,u,r);return l&&s?s(h):h}function ld(t,e,n,r){const s=hl(t);let i=n;return s!==t&&(Wt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,lt(l),c,t)}),s[e](i,...r)}function pc(t,e,n){const r=Se(t);vt(r,"iterate",Qi);const s=r[e](...n);return(s===-1||s===!1)&&eh(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function pi(t,e,n=[]){xn(),Gu();const r=Se(t)[e].apply(t,n);return Qu(),Vn(),r}const VT=ju("__proto__,__v_isRef,__isVue"),vm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn));function LT(t){jn(t)||(t=String(t));const e=Se(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Em{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?WT:bm:i?Im:wm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=NT[n]))return c;if(n==="hasOwnProperty")return LT}const l=Reflect.get(e,n,Tt(e)?e:r);return(jn(n)?vm.has(n):VT(n))||(s||vt(e,"get",n),i)?l:Tt(l)?o&&zu(n)?l:l.value:Fe(l)?s?Rm(l):Ks(l):l}}class Tm extends Em{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=vr(i);if(!Wt(r)&&!vr(r)&&(i=Se(i),r=Se(r)),!ce(e)&&Tt(i)&&!Tt(r))return c?!1:(i.value=r,!0)}const o=ce(e)&&zu(n)?Number(n)<e.length:Pe(e,n),l=Reflect.set(e,n,r,Tt(e)?e:s);return e===Se(s)&&(o?pr(r,i)&&Cn(e,"set",n,r):Cn(e,"add",n,r)),l}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jn(n)||!vm.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",ce(e)?"length":Kr),Reflect.ownKeys(e)}}class MT extends Em{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const FT=new Tm,UT=new MT,BT=new Tm(!0);const Yc=t=>t,Ko=t=>Reflect.getPrototypeOf(t);function $T(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Ps(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?Yc:e?Sa:lt;return!e&&vt(i,"iterate",c?Qc:Kr),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:l?[h(d[0]),h(d[1])]:h(d),done:g}},[Symbol.iterator](){return this}}}}function Go(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jT(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),l=Se(s);t||(pr(s,l)&&vt(o,"get",s),vt(o,"get",l));const{has:c}=Ko(o),u=e?Yc:t?Sa:lt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Se(s),"iterate",Kr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),l=Se(s);return t||(pr(s,l)&&vt(o,"has",s),vt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Se(l),u=e?Yc:t?Sa:lt;return!t&&vt(c,"iterate",Kr),l.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return et(n,t?{add:Go("add"),set:Go("set"),delete:Go("delete"),clear:Go("clear")}:{add(s){!e&&!Wt(s)&&!vr(s)&&(s=Se(s));const i=Se(this);return Ko(i).has.call(i,s)||(i.add(s),Cn(i,"add",s,s)),this},set(s,i){!e&&!Wt(i)&&!vr(i)&&(i=Se(i));const o=Se(this),{has:l,get:c}=Ko(o);let u=l.call(o,s);u||(s=Se(s),u=l.call(o,s));const h=c.call(o,s);return o.set(s,i),u?pr(i,h)&&Cn(o,"set",s,i):Cn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:l}=Ko(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Cn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&Cn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$T(s,t,e)}),n}function Xu(t,e){const n=jT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const qT={get:Xu(!1,!1)},HT={get:Xu(!1,!0)},zT={get:Xu(!0,!1)};const wm=new WeakMap,Im=new WeakMap,bm=new WeakMap,WT=new WeakMap;function KT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GT(t){return t.__v_skip||!Object.isExtensible(t)?0:KT(_T(t))}function Ks(t){return vr(t)?t:Zu(t,!1,FT,qT,wm)}function Am(t){return Zu(t,!1,BT,HT,Im)}function Rm(t){return Zu(t,!0,UT,zT,bm)}function Zu(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=GT(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function ks(t){return vr(t)?ks(t.__v_raw):!!(t&&t.__v_isReactive)}function vr(t){return!!(t&&t.__v_isReadonly)}function Wt(t){return!!(t&&t.__v_isShallow)}function eh(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function mo(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&Wc(t,"__v_skip",!0),t}const lt=t=>Fe(t)?Ks(t):t,Sa=t=>Fe(t)?Rm(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function Er(t){return Sm(t,!1)}function QT(t){return Sm(t,!0)}function Sm(t,e){return Tt(t)?t:new YT(t,e)}class YT{constructor(e,n){this.dep=new Ju,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Wt(e)||vr(e);e=r?e:Se(e),pr(e,n)&&(this._rawValue=e,this._value=r?e:lt(e),this.dep.trigger())}}function Gr(t){return Tt(t)?t.value:t}const JT={get:(t,e,n)=>e==="__v_raw"?t:Gr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cm(t){return ks(t)?t:new Proxy(t,JT)}class XT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ju(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return dm(this,!0),!0}get value(){const e=this.dep.track();return mm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ZT(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new XT(r,s,n)}const Qo={},Ca=new WeakMap;let Hr;function ew(t,e=!1,n=Hr){if(n){let r=Ca.get(n);r||Ca.set(n,r=[]),r.push(t)}}function tw(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=N=>s?N:Wt(N)||s===!1||s===0?Pn(N,1):Pn(N);let h,d,g,_,S=!1,C=!1;if(Tt(t)?(d=()=>t.value,S=Wt(t)):ks(t)?(d=()=>u(t),S=!0):ce(t)?(C=!0,S=t.some(N=>ks(N)||Wt(N)),d=()=>t.map(N=>{if(Tt(N))return N.value;if(ks(N))return u(N);if(pe(N))return c?c(N,2):N()})):pe(t)?e?d=c?()=>c(t,2):t:d=()=>{if(g){xn();try{g()}finally{Vn()}}const N=Hr;Hr=h;try{return c?c(t,3,[_]):t(_)}finally{Hr=N}}:d=hn,e&&s){const N=d,H=s===!0?1/0:s;d=()=>Pn(N(),H)}const P=kT(),L=()=>{h.stop(),P&&P.active&&Hu(P.effects,h)};if(i&&e){const N=e;e=(...H)=>{N(...H),L()}}let D=C?new Array(t.length).fill(Qo):Qo;const x=N=>{if(!(!(h.flags&1)||!h.dirty&&!N))if(e){const H=h.run();if(s||S||(C?H.some((z,I)=>pr(z,D[I])):pr(H,D))){g&&g();const z=Hr;Hr=h;try{const I=[H,D===Qo?void 0:C&&D[0]===Qo?[]:D,_];D=H,c?c(e,3,I):e(...I)}finally{Hr=z}}}else h.run()};return l&&l(x),h=new hm(d),h.scheduler=o?()=>o(x,!1):x,_=N=>ew(N,!1,h),g=h.onStop=()=>{const N=Ca.get(h);if(N){if(c)c(N,4);else for(const H of N)H();Ca.delete(h)}},e?r?x(!0):D=h.run():o?o(x.bind(null,!0),!0):h.run(),L.pause=h.pause.bind(h),L.resume=h.resume.bind(h),L.stop=L,L}function Pn(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Tt(t))Pn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Pn(t[r],e,n);else if(sm(t)||Ps(t))t.forEach(r=>{Pn(r,e,n)});else if(am(t)){for(const r in t)Pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _o(t,e,n,r){try{return r?t(...r):t()}catch(s){fl(s,e,n)}}function tn(t,e,n,r){if(pe(t)){const s=_o(t,e,n,r);return s&&im(s)&&s.catch(i=>{fl(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}}function fl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}l=l.parent}if(i){xn(),_o(i,null,10,[t,c,u]),Vn();return}}nw(t,n,s,r,o)}function nw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let an=-1;const Os=[];let nr=null,Ts=0;const Pm=Promise.resolve();let Pa=null;function km(t){const e=Pa||Pm;return t?e.then(this?t.bind(this):t):e}function rw(t){let e=an+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Yi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function th(t){if(!(t.flags&1)){const e=Yi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Yi(n)?Rt.push(t):Rt.splice(rw(e),0,t),t.flags|=1,Om()}}function Om(){Pa||(Pa=Pm.then(Nm))}function sw(t){ce(t)?Os.push(...t):nr&&t.id===-1?nr.splice(Ts+1,0,t):t.flags&1||(Os.push(t),t.flags|=1),Om()}function cd(t,e,n=an+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Dm(t){if(Os.length){const e=[...new Set(Os)].sort((n,r)=>Yi(n)-Yi(r));if(Os.length=0,nr){nr.push(...e);return}for(nr=e,Ts=0;Ts<nr.length;Ts++){const n=nr[Ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,Ts=0}}const Yi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Nm(t){try{for(an=0;an<Rt.length;an++){const e=Rt[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<Rt.length;an++){const e=Rt[an];e&&(e.flags&=-2)}an=-1,Rt.length=0,Dm(),Pa=null,(Rt.length||Os.length)&&Nm()}}let nt=null,xm=null;function ka(t){const e=nt;return nt=t,xm=t&&t.type.__scopeId||null,e}function iw(t,e=nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wd(-1);const i=ka(e);let o;try{o=t(...s)}finally{ka(i),r._d&&wd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Vm(t,e){if(nt===null)return t;const n=El(nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ne]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Pn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function $r(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(xn(),tn(c,n,8,[t.el,l,t,e]),Vn())}}const Lm=Symbol("_vte"),Mm=t=>t.__isTeleport,xi=t=>t&&(t.disabled||t.disabled===""),ud=t=>t&&(t.defer||t.defer===""),hd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,fd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Jc=(t,e)=>{const n=t&&t.to;return $e(n)?e?e(n):null:n},Fm={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:h,pc:d,pbc:g,o:{insert:_,querySelector:S,createText:C,createComment:P}}=u,L=xi(e.props);let{shapeFlag:D,children:x,dynamicChildren:N}=e;if(t==null){const H=e.el=C(""),z=e.anchor=C("");_(H,n,r),_(z,n,r);const I=(y,w)=>{D&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),h(x,y,w,s,i,o,l,c))},v=()=>{const y=e.target=Jc(e.props,S),w=Um(y,e,C,_);y&&(o!=="svg"&&hd(y)?o="svg":o!=="mathml"&&fd(y)&&(o="mathml"),L||(I(y,w),ua(e,!1)))};L&&(I(n,z),ua(e,!0)),ud(e.props)?(e.el.__isMounted=!1,Ye(()=>{v(),delete e.el.__isMounted},i)):v()}else{if(ud(e.props)&&t.el.__isMounted===!1){Ye(()=>{Fm.process(t,e,n,r,s,i,o,l,c,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const H=e.anchor=t.anchor,z=e.target=t.target,I=e.targetAnchor=t.targetAnchor,v=xi(t.props),y=v?n:z,w=v?H:I;if(o==="svg"||hd(z)?o="svg":(o==="mathml"||fd(z))&&(o="mathml"),N?(g(t.dynamicChildren,N,y,s,i,o,l),ah(t,e,!0)):c||d(t,e,y,w,s,i,o,l,!1),L)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Yo(e,n,H,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=Jc(e.props,S);R&&Yo(e,R,null,u,0)}else v&&Yo(e,z,I,u,1);ua(e,L)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:h,target:d,props:g}=t;if(d&&(s(u),s(h)),i&&s(c),o&16){const _=i||!xi(g);for(let S=0;S<l.length;S++){const C=l[S];r(C,e,n,_,!!C.dynamicChildren)}}},move:Yo,hydrate:ow};function Yo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:h}=t,d=i===2;if(d&&r(o,e,n),(!d||xi(h))&&c&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);d&&r(l,e,n)}function ow(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:h}},d){const g=e.target=Jc(e.props,c);if(g){const _=xi(e.props),S=g._lpa||g.firstChild;if(e.shapeFlag&16)if(_)e.anchor=d(o(t),e,l(t),n,r,s,i),e.targetStart=S,e.targetAnchor=S&&o(S);else{e.anchor=o(t);let C=S;for(;C;){if(C&&C.nodeType===8){if(C.data==="teleport start anchor")e.targetStart=C;else if(C.data==="teleport anchor"){e.targetAnchor=C,g._lpa=e.targetAnchor&&o(e.targetAnchor);break}}C=o(C)}e.targetAnchor||Um(g,e,h,u),d(S&&o(S),e,g,n,r,s,i)}ua(e,_)}return e.anchor&&o(e.anchor)}const oN=Fm;function ua(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Um(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Lm]=i,t&&(r(s,t),r(i,t)),i}const rr=Symbol("_leaveCb"),Jo=Symbol("_enterCb");function Bm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ml(()=>{t.isMounted=!0}),_l(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],$m={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},jm=t=>{const e=t.subTree;return e.component?jm(e.component):e},aw={name:"BaseTransition",props:$m,setup(t,{slots:e}){const n=Gs(),r=Bm();return()=>{const s=e.default&&nh(e.default(),!0);if(!s||!s.length)return;const i=qm(s),o=Se(t),{mode:l}=o;if(r.isLeaving)return gc(i);const c=dd(i);if(!c)return gc(i);let u=Ji(c,o,r,n,d=>u=d);c.type!==ct&&Tr(c,u);let h=n.subTree&&dd(n.subTree);if(h&&h.type!==ct&&!ar(c,h)&&jm(n).type!==ct){let d=Ji(h,o,r,n);if(Tr(h,d),l==="out-in"&&c.type!==ct)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},gc(i);l==="in-out"&&c.type!==ct?d.delayLeave=(g,_,S)=>{const C=Hm(r,h);C[String(h.key)]=h,g[rr]=()=>{_(),g[rr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function qm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ct){e=n;break}}return e}const lw=aw;function Hm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ji(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:g,onLeave:_,onAfterLeave:S,onLeaveCancelled:C,onBeforeAppear:P,onAppear:L,onAfterAppear:D,onAppearCancelled:x}=e,N=String(t.key),H=Hm(n,t),z=(y,w)=>{y&&tn(y,r,9,w)},I=(y,w)=>{const R=w[1];z(y,w),ce(y)?y.every(A=>A.length<=1)&&R():y.length<=1&&R()},v={mode:o,persisted:l,beforeEnter(y){let w=c;if(!n.isMounted)if(i)w=P||c;else return;y[rr]&&y[rr](!0);const R=H[N];R&&ar(t,R)&&R.el[rr]&&R.el[rr](),z(w,[y])},enter(y){let w=u,R=h,A=d;if(!n.isMounted)if(i)w=L||u,R=D||h,A=x||d;else return;let E=!1;const Q=y[Jo]=_e=>{E||(E=!0,_e?z(A,[y]):z(R,[y]),v.delayedLeave&&v.delayedLeave(),y[Jo]=void 0)};w?I(w,[y,Q]):Q()},leave(y,w){const R=String(t.key);if(y[Jo]&&y[Jo](!0),n.isUnmounting)return w();z(g,[y]);let A=!1;const E=y[rr]=Q=>{A||(A=!0,w(),Q?z(C,[y]):z(S,[y]),y[rr]=void 0,H[R]===t&&delete H[R])};H[R]=t,_?I(_,[y,E]):E()},clone(y){const w=Ji(y,e,n,r,s);return s&&s(w),w}};return v}function gc(t){if(pl(t))return t=Ln(t),t.children=null,t}function dd(t){if(!pl(t))return Mm(t.type)&&t.children?qm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Tr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Tr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function nh(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ot?(o.patchFlag&128&&s++,r=r.concat(nh(o.children,e,l))):(e||o.type!==ct)&&r.push(l!=null?Ln(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function dl(t,e){return pe(t)?et({name:t.name},e,{setup:t}):t}function zm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vi(t,e,n,r,s=!1){if(ce(t)){t.forEach((S,C)=>Vi(S,e&&(ce(e)?e[C]:e),n,r,s));return}if(Qr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Vi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?El(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===Ne?l.refs={}:l.refs,d=l.setupState,g=Se(d),_=d===Ne?()=>!1:S=>Pe(g,S);if(u!=null&&u!==c&&($e(u)?(h[u]=null,_(u)&&(d[u]=null)):Tt(u)&&(u.value=null)),pe(c))_o(c,l,12,[o,h]);else{const S=$e(c),C=Tt(c);if(S||C){const P=()=>{if(t.f){const L=S?_(c)?d[c]:h[c]:c.value;s?ce(L)&&Hu(L,i):ce(L)?L.includes(i)||L.push(i):S?(h[c]=[i],_(c)&&(d[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else S?(h[c]=o,_(c)&&(d[c]=o)):C&&(c.value=o,t.k&&(h[t.k]=o))};o?(P.id=-1,Ye(P,n)):P()}}}ul().requestIdleCallback;ul().cancelIdleCallback;const Qr=t=>!!t.type.__asyncLoader,pl=t=>t.type.__isKeepAlive,cw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Gs(),r=n.ctx;if(!r.renderer)return()=>{const D=e.default&&e.default();return D&&D.length===1?D[0]:D};const s=new Map,i=new Set;let o=null;const l=n.suspense,{renderer:{p:c,m:u,um:h,o:{createElement:d}}}=r,g=d("div");r.activate=(D,x,N,H,z)=>{const I=D.component;u(D,x,N,0,l),c(I.vnode,D,x,N,I,l,H,D.slotScopeIds,z),Ye(()=>{I.isDeactivated=!1,I.a&&Oi(I.a);const v=D.props&&D.props.onVnodeMounted;v&&Ht(v,I.parent,D)},l)},r.deactivate=D=>{const x=D.component;Da(x.m),Da(x.a),u(D,g,null,1,l),Ye(()=>{x.da&&Oi(x.da);const N=D.props&&D.props.onVnodeUnmounted;N&&Ht(N,x.parent,D),x.isDeactivated=!0},l)};function _(D){mc(D),h(D,n,l,!0)}function S(D){s.forEach((x,N)=>{const H=ru(x.type);H&&!D(H)&&C(N)})}function C(D){const x=s.get(D);x&&(!o||!ar(x,o))?_(x):o&&mc(o),s.delete(D),i.delete(D)}Yr(()=>[t.include,t.exclude],([D,x])=>{D&&S(N=>Ei(D,N)),x&&S(N=>!Ei(x,N))},{flush:"post",deep:!0});let P=null;const L=()=>{P!=null&&(Na(n.subTree.type)?Ye(()=>{s.set(P,Xo(n.subTree))},n.subTree.suspense):s.set(P,Xo(n.subTree)))};return ml(L),rh(L),_l(()=>{s.forEach(D=>{const{subTree:x,suspense:N}=n,H=Xo(x);if(D.type===H.type&&D.key===H.key){mc(H);const z=H.component.da;z&&Ye(z,N);return}_(D)})}),()=>{if(P=null,!e.default)return o=null;const D=e.default(),x=D[0];if(D.length>1)return o=null,D;if(!Fs(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return o=null,x;let N=Xo(x);if(N.type===ct)return o=null,N;const H=N.type,z=ru(Qr(N)?N.type.__asyncResolved||{}:H),{include:I,exclude:v,max:y}=t;if(I&&(!z||!Ei(I,z))||v&&z&&Ei(v,z))return N.shapeFlag&=-257,o=N,x;const w=N.key==null?H:N.key,R=s.get(w);return N.el&&(N=Ln(N),x.shapeFlag&128&&(x.ssContent=N)),P=w,R?(N.el=R.el,N.component=R.component,N.transition&&Tr(N,N.transition),N.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),y&&i.size>parseInt(y,10)&&C(i.values().next().value)),N.shapeFlag|=256,o=N,Na(x.type)?x:N}}},aN=cw;function Ei(t,e){return ce(t)?t.some(n=>Ei(n,e)):$e(t)?t.split(",").includes(e):mT(t)?(t.lastIndex=0,t.test(e)):!1}function Wm(t,e){Gm(t,"a",e)}function Km(t,e){Gm(t,"da",e)}function Gm(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(gl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pl(s.parent.vnode)&&uw(r,e,n,s),s=s.parent}}function uw(t,e,n,r){const s=gl(e,t,r,!0);sh(()=>{Hu(r[e],s)},n)}function mc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Xo(t){return t.shapeFlag&128?t.ssContent:t}function gl(t,e,n=ut,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{xn();const l=yo(n),c=tn(e,n,t,o);return l(),Vn(),c});return r?s.unshift(i):s.push(i),i}}const qn=t=>(e,n=ut)=>{(!Zi||t==="sp")&&gl(t,(...r)=>e(...r),n)},hw=qn("bm"),ml=qn("m"),fw=qn("bu"),rh=qn("u"),_l=qn("bum"),sh=qn("um"),dw=qn("sp"),pw=qn("rtg"),gw=qn("rtc");function mw(t,e=ut){gl("ec",t,e)}const _w="components";function yw(t,e){return Ew(_w,t,!0,e)||t}const vw=Symbol.for("v-ndc");function Ew(t,e,n=!0,r=!1){const s=nt||ut;if(s){const i=s.type;{const l=ru(i,!1);if(l&&(l===e||l===Kt(e)||l===cl(Kt(e))))return i}const o=pd(s[t]||i[t],e)||pd(s.appContext[t],e);return!o&&r?i:o}}function pd(t,e){return t&&(t[e]||t[Kt(e)]||t[cl(Kt(e))])}function lN(t,e,n,r){let s;const i=n,o=ce(t);if(o||$e(t)){const l=o&&ks(t);let c=!1,u=!1;l&&(c=!Wt(t),u=vr(t),t=hl(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?u?Sa(lt(t[h])):lt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}function cN(t,e,n={},r,s){if(nt.ce||nt.parent&&Qr(nt.parent)&&nt.parent.ce)return e!=="default"&&(n.name=e),xa(),Va(Ot,null,[St("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),xa();const o=i&&Qm(i(n)),l=n.key||o&&o.key,c=Va(Ot,{key:(l&&!jn(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Qm(t){return t.some(e=>Fs(e)?!(e.type===ct||e.type===Ot&&!Qm(e.children)):!0)?t:null}const Xc=t=>t?p_(t)?El(t):Xc(t.parent):null,Li=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xc(t.parent),$root:t=>Xc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Jm(t),$forceUpdate:t=>t.f||(t.f=()=>{th(t.update)}),$nextTick:t=>t.n||(t.n=km.bind(t.proxy)),$watch:t=>$w.bind(t)}),_c=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Pe(t,e),Tw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_c(r,e))return o[e]=1,r[e];if(s!==Ne&&Pe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(n!==Ne&&Pe(n,e))return o[e]=4,n[e];Zc&&(o[e]=0)}}const h=Li[e];let d,g;if(h)return e==="$attrs"&&vt(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Ne&&Pe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Pe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _c(s,e)?(s[e]=n,!0):r!==Ne&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ne&&Pe(t,o)||_c(e,o)||(l=i[0])&&Pe(l,o)||Pe(r,o)||Pe(Li,o)||Pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gd(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zc=!0;function ww(t){const e=Jm(t),n=t.proxy,r=t.ctx;Zc=!1,e.beforeCreate&&md(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:d,mounted:g,beforeUpdate:_,updated:S,activated:C,deactivated:P,beforeDestroy:L,beforeUnmount:D,destroyed:x,unmounted:N,render:H,renderTracked:z,renderTriggered:I,errorCaptured:v,serverPrefetch:y,expose:w,inheritAttrs:R,components:A,directives:E,filters:Q}=e;if(u&&Iw(u,r,null),o)for(const we in o){const ve=o[we];pe(ve)&&(r[we]=ve.bind(n))}if(s){const we=s.call(n,n);Fe(we)&&(t.data=Ks(we))}if(Zc=!0,i)for(const we in i){const ve=i[we],Nt=pe(ve)?ve.bind(n,n):pe(ve.get)?ve.get.bind(n,n):hn,Gt=!pe(ve)&&pe(ve.set)?ve.set.bind(n):hn,Ut=he({get:Nt,set:Gt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:Ue=>Ut.value=Ue})}if(l)for(const we in l)Ym(l[we],r,n,we);if(c){const we=pe(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ve=>{ha(ve,we[ve])})}h&&md(h,t,"c");function Oe(we,ve){ce(ve)?ve.forEach(Nt=>we(Nt.bind(n))):ve&&we(ve.bind(n))}if(Oe(hw,d),Oe(ml,g),Oe(fw,_),Oe(rh,S),Oe(Wm,C),Oe(Km,P),Oe(mw,v),Oe(gw,z),Oe(pw,I),Oe(_l,D),Oe(sh,N),Oe(dw,y),ce(w))if(w.length){const we=t.exposed||(t.exposed={});w.forEach(ve=>{Object.defineProperty(we,ve,{get:()=>n[ve],set:Nt=>n[ve]=Nt})})}else t.exposed||(t.exposed={});H&&t.render===hn&&(t.render=H),R!=null&&(t.inheritAttrs=R),A&&(t.components=A),E&&(t.directives=E),y&&zm(t)}function Iw(t,e,n=hn){ce(t)&&(t=eu(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=Zt(s.from||r,s.default,!0):i=Zt(s.from||r):i=Zt(s),Tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function md(t,e,n){tn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ym(t,e,n,r){let s=r.includes(".")?c_(n,r):()=>n[r];if($e(t)){const i=e[t];pe(i)&&Yr(s,i)}else if(pe(t))Yr(s,t.bind(n));else if(Fe(t))if(ce(t))t.forEach(i=>Ym(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Yr(s,i,t)}}function Jm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Oa(c,u,o,!0)),Oa(c,e,o)),Fe(e)&&i.set(e,c),c}function Oa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oa(t,i,n,!0),s&&s.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=bw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const bw={data:_d,props:yd,emits:yd,methods:Ti,computed:Ti,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Ti,directives:Ti,watch:Rw,provide:_d,inject:Aw};function _d(t,e){return e?t?function(){return et(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function Aw(t,e){return Ti(eu(t),eu(e))}function eu(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Ti(t,e){return t?et(Object.create(null),t,e):e}function yd(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:et(Object.create(null),gd(t),gd(e??{})):e}function Rw(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Xm(){return{app:null,config:{isNativeTag:pT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sw=0;function Cw(t,e){return function(r,s=null){pe(r)||(r=et({},r)),s!=null&&!Fe(s)&&(s=null);const i=Xm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:Sw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lI,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...d)):pe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,g){if(!c){const _=u._ceVNode||St(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,h,g),c=!0,u._container=h,h.__vue_app__=u,El(_.component)}},onUnmount(h){l.push(h)},unmount(){c&&(tn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Ds;Ds=u;try{return h()}finally{Ds=d}}};return u}}let Ds=null;function ha(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function Zt(t,e,n=!1){const r=ut||nt;if(r||Ds){let s=Ds?Ds._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const Zm={},e_=()=>Object.create(Zm),t_=t=>Object.getPrototypeOf(t)===Zm;function Pw(t,e,n,r=!1){const s={},i=e_();t.propsDefaults=Object.create(null),n_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Am(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Se(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let g=h[d];if(yl(t.emitsOptions,g))continue;const _=e[g];if(c)if(Pe(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const S=Kt(g);s[S]=tu(c,l,S,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{n_(t,e,s,i)&&(u=!0);let h;for(const d in l)(!e||!Pe(e,d)&&((h=Or(d))===d||!Pe(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=tu(c,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!Pe(e,d))&&(delete i[d],u=!0)}u&&Cn(t.attrs,"set","")}function n_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ki(c))continue;const u=e[c];let h;s&&Pe(s,h=Kt(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:yl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Se(n),u=l||Ne;for(let h=0;h<i.length;h++){const d=i[h];n[d]=tu(s,c,d,u[d],t,!Pe(u,d))}}return o}function tu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Pe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=yo(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const Ow=new WeakMap;function r_(t,e,n=!1){const r=n?Ow:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const h=d=>{c=!0;const[g,_]=r_(d,e,!0);et(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Fe(t)&&r.set(t,Cs),Cs;if(ce(i))for(let h=0;h<i.length;h++){const d=Kt(i[h]);vd(d)&&(o[d]=Ne)}else if(i)for(const h in i){const d=Kt(h);if(vd(d)){const g=i[h],_=o[d]=ce(g)||pe(g)?{type:g}:et({},g),S=_.type;let C=!1,P=!0;if(ce(S))for(let L=0;L<S.length;++L){const D=S[L],x=pe(D)&&D.name;if(x==="Boolean"){C=!0;break}else x==="String"&&(P=!1)}else C=pe(S)&&S.name==="Boolean";_[0]=C,_[1]=P,(C||Pe(_,"default"))&&l.push(d)}}const u=[o,l];return Fe(t)&&r.set(t,u),u}function vd(t){return t[0]!=="$"&&!ki(t)}const ih=t=>t[0]==="_"||t==="$stable",oh=t=>ce(t)?t.map(cn):[cn(t)],Dw=(t,e,n)=>{if(e._n)return e;const r=iw((...s)=>oh(e(...s)),n);return r._c=!1,r},s_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ih(s))continue;const i=t[s];if(pe(i))e[s]=Dw(s,i,r);else if(i!=null){const o=oh(i);e[s]=()=>o}}},i_=(t,e)=>{const n=oh(e);t.slots.default=()=>n},o_=(t,e,n)=>{for(const r in e)(n||!ih(r))&&(t[r]=e[r])},Nw=(t,e,n)=>{const r=t.slots=e_();if(t.vnode.shapeFlag&32){const s=e.__;s&&Wc(r,"__",s,!0);const i=e._;i?(o_(r,e,n),n&&Wc(r,"_",i,!0)):s_(e,r)}else e&&i_(t,e)},xw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:o_(s,e,n):(i=!e.$stable,s_(e,s)),o=e}else e&&(i_(t,e),o={default:1});if(i)for(const l in s)!ih(l)&&o[l]==null&&delete s[l]},Ye=Gw;function Vw(t){return Lw(t)}function Lw(t,e){const n=ul();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:g,setScopeId:_=hn,insertStaticContent:S}=t,C=(T,b,k,F=null,$=null,U=null,J=void 0,K=null,W=!!b.dynamicChildren)=>{if(T===b)return;T&&!ar(T,b)&&(F=M(T),Ue(T,$,U,!0),T=null),b.patchFlag===-2&&(W=!1,b.dynamicChildren=null);const{type:q,ref:se,shapeFlag:Y}=b;switch(q){case vl:P(T,b,k,F);break;case ct:L(T,b,k,F);break;case vc:T==null&&D(b,k,F,J);break;case Ot:A(T,b,k,F,$,U,J,K,W);break;default:Y&1?H(T,b,k,F,$,U,J,K,W):Y&6?E(T,b,k,F,$,U,J,K,W):(Y&64||Y&128)&&q.process(T,b,k,F,$,U,J,K,W,te)}se!=null&&$?Vi(se,T&&T.ref,U,b||T,!b):se==null&&T&&T.ref!=null&&Vi(T.ref,null,U,T,!0)},P=(T,b,k,F)=>{if(T==null)r(b.el=l(b.children),k,F);else{const $=b.el=T.el;b.children!==T.children&&u($,b.children)}},L=(T,b,k,F)=>{T==null?r(b.el=c(b.children||""),k,F):b.el=T.el},D=(T,b,k,F)=>{[T.el,T.anchor]=S(T.children,b,k,F,T.el,T.anchor)},x=({el:T,anchor:b},k,F)=>{let $;for(;T&&T!==b;)$=g(T),r(T,k,F),T=$;r(b,k,F)},N=({el:T,anchor:b})=>{let k;for(;T&&T!==b;)k=g(T),s(T),T=k;s(b)},H=(T,b,k,F,$,U,J,K,W)=>{b.type==="svg"?J="svg":b.type==="math"&&(J="mathml"),T==null?z(b,k,F,$,U,J,K,W):y(T,b,$,U,J,K,W)},z=(T,b,k,F,$,U,J,K)=>{let W,q;const{props:se,shapeFlag:Y,transition:re,dirs:ue}=T;if(W=T.el=o(T.type,U,se&&se.is,se),Y&8?h(W,T.children):Y&16&&v(T.children,W,null,F,$,yc(T,U),J,K),ue&&$r(T,null,F,"created"),I(W,T,T.scopeId,J,F),se){for(const me in se)me!=="value"&&!ki(me)&&i(W,me,null,se[me],U,F);"value"in se&&i(W,"value",null,se.value,U),(q=se.onVnodeBeforeMount)&&Ht(q,F,T)}ue&&$r(T,null,F,"beforeMount");const oe=Mw($,re);oe&&re.beforeEnter(W),r(W,b,k),((q=se&&se.onVnodeMounted)||oe||ue)&&Ye(()=>{q&&Ht(q,F,T),oe&&re.enter(W),ue&&$r(T,null,F,"mounted")},$)},I=(T,b,k,F,$)=>{if(k&&_(T,k),F)for(let U=0;U<F.length;U++)_(T,F[U]);if($){let U=$.subTree;if(b===U||Na(U.type)&&(U.ssContent===b||U.ssFallback===b)){const J=$.vnode;I(T,J,J.scopeId,J.slotScopeIds,$.parent)}}},v=(T,b,k,F,$,U,J,K,W=0)=>{for(let q=W;q<T.length;q++){const se=T[q]=K?sr(T[q]):cn(T[q]);C(null,se,b,k,F,$,U,J,K)}},y=(T,b,k,F,$,U,J)=>{const K=b.el=T.el;let{patchFlag:W,dynamicChildren:q,dirs:se}=b;W|=T.patchFlag&16;const Y=T.props||Ne,re=b.props||Ne;let ue;if(k&&jr(k,!1),(ue=re.onVnodeBeforeUpdate)&&Ht(ue,k,b,T),se&&$r(b,T,k,"beforeUpdate"),k&&jr(k,!0),(Y.innerHTML&&re.innerHTML==null||Y.textContent&&re.textContent==null)&&h(K,""),q?w(T.dynamicChildren,q,K,k,F,yc(b,$),U):J||ve(T,b,K,null,k,F,yc(b,$),U,!1),W>0){if(W&16)R(K,Y,re,k,$);else if(W&2&&Y.class!==re.class&&i(K,"class",null,re.class,$),W&4&&i(K,"style",Y.style,re.style,$),W&8){const oe=b.dynamicProps;for(let me=0;me<oe.length;me++){const Ie=oe[me],rt=Y[Ie],st=re[Ie];(st!==rt||Ie==="value")&&i(K,Ie,rt,st,$,k)}}W&1&&T.children!==b.children&&h(K,b.children)}else!J&&q==null&&R(K,Y,re,k,$);((ue=re.onVnodeUpdated)||se)&&Ye(()=>{ue&&Ht(ue,k,b,T),se&&$r(b,T,k,"updated")},F)},w=(T,b,k,F,$,U,J)=>{for(let K=0;K<b.length;K++){const W=T[K],q=b[K],se=W.el&&(W.type===Ot||!ar(W,q)||W.shapeFlag&198)?d(W.el):k;C(W,q,se,null,F,$,U,J,!0)}},R=(T,b,k,F,$)=>{if(b!==k){if(b!==Ne)for(const U in b)!ki(U)&&!(U in k)&&i(T,U,b[U],null,$,F);for(const U in k){if(ki(U))continue;const J=k[U],K=b[U];J!==K&&U!=="value"&&i(T,U,K,J,$,F)}"value"in k&&i(T,"value",b.value,k.value,$)}},A=(T,b,k,F,$,U,J,K,W)=>{const q=b.el=T?T.el:l(""),se=b.anchor=T?T.anchor:l("");let{patchFlag:Y,dynamicChildren:re,slotScopeIds:ue}=b;ue&&(K=K?K.concat(ue):ue),T==null?(r(q,k,F),r(se,k,F),v(b.children||[],k,se,$,U,J,K,W)):Y>0&&Y&64&&re&&T.dynamicChildren?(w(T.dynamicChildren,re,k,$,U,J,K),(b.key!=null||$&&b===$.subTree)&&ah(T,b,!0)):ve(T,b,k,se,$,U,J,K,W)},E=(T,b,k,F,$,U,J,K,W)=>{b.slotScopeIds=K,T==null?b.shapeFlag&512?$.ctx.activate(b,k,F,J,W):Q(b,k,F,$,U,J,W):_e(T,b,W)},Q=(T,b,k,F,$,U,J)=>{const K=T.component=nI(T,F,$);if(pl(T)&&(K.ctx.renderer=te),rI(K,!1,J),K.asyncDep){if($&&$.registerDep(K,Oe,J),!T.el){const W=K.subTree=St(ct);L(null,W,b,k)}}else Oe(K,T,b,k,$,U,J)},_e=(T,b,k)=>{const F=b.component=T.component;if(Ww(T,b,k))if(F.asyncDep&&!F.asyncResolved){we(F,b,k);return}else F.next=b,F.update();else b.el=T.el,F.vnode=b},Oe=(T,b,k,F,$,U,J)=>{const K=()=>{if(T.isMounted){let{next:Y,bu:re,u:ue,parent:oe,vnode:me}=T;{const dt=a_(T);if(dt){Y&&(Y.el=me.el,we(T,Y,J)),dt.asyncDep.then(()=>{T.isUnmounted||K()});return}}let Ie=Y,rt;jr(T,!1),Y?(Y.el=me.el,we(T,Y,J)):Y=me,re&&Oi(re),(rt=Y.props&&Y.props.onVnodeBeforeUpdate)&&Ht(rt,oe,Y,me),jr(T,!0);const st=Ed(T),Bt=T.subTree;T.subTree=st,C(Bt,st,d(Bt.el),M(Bt),T,$,U),Y.el=st.el,Ie===null&&Kw(T,st.el),ue&&Ye(ue,$),(rt=Y.props&&Y.props.onVnodeUpdated)&&Ye(()=>Ht(rt,oe,Y,me),$)}else{let Y;const{el:re,props:ue}=b,{bm:oe,m:me,parent:Ie,root:rt,type:st}=T,Bt=Qr(b);jr(T,!1),oe&&Oi(oe),!Bt&&(Y=ue&&ue.onVnodeBeforeMount)&&Ht(Y,Ie,b),jr(T,!0);{rt.ce&&rt.ce._def.shadowRoot!==!1&&rt.ce._injectChildStyle(st);const dt=T.subTree=Ed(T);C(null,dt,k,F,T,$,U),b.el=dt.el}if(me&&Ye(me,$),!Bt&&(Y=ue&&ue.onVnodeMounted)){const dt=b;Ye(()=>Ht(Y,Ie,dt),$)}(b.shapeFlag&256||Ie&&Qr(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&T.a&&Ye(T.a,$),T.isMounted=!0,b=k=F=null}};T.scope.on();const W=T.effect=new hm(K);T.scope.off();const q=T.update=W.run.bind(W),se=T.job=W.runIfDirty.bind(W);se.i=T,se.id=T.uid,W.scheduler=()=>th(se),jr(T,!0),q()},we=(T,b,k)=>{b.component=T;const F=T.vnode.props;T.vnode=b,T.next=null,kw(T,b.props,F,k),xw(T,b.children,k),xn(),cd(T),Vn()},ve=(T,b,k,F,$,U,J,K,W=!1)=>{const q=T&&T.children,se=T?T.shapeFlag:0,Y=b.children,{patchFlag:re,shapeFlag:ue}=b;if(re>0){if(re&128){Gt(q,Y,k,F,$,U,J,K,W);return}else if(re&256){Nt(q,Y,k,F,$,U,J,K,W);return}}ue&8?(se&16&&Ct(q,$,U),Y!==q&&h(k,Y)):se&16?ue&16?Gt(q,Y,k,F,$,U,J,K,W):Ct(q,$,U,!0):(se&8&&h(k,""),ue&16&&v(Y,k,F,$,U,J,K,W))},Nt=(T,b,k,F,$,U,J,K,W)=>{T=T||Cs,b=b||Cs;const q=T.length,se=b.length,Y=Math.min(q,se);let re;for(re=0;re<Y;re++){const ue=b[re]=W?sr(b[re]):cn(b[re]);C(T[re],ue,k,null,$,U,J,K,W)}q>se?Ct(T,$,U,!0,!1,Y):v(b,k,F,$,U,J,K,W,Y)},Gt=(T,b,k,F,$,U,J,K,W)=>{let q=0;const se=b.length;let Y=T.length-1,re=se-1;for(;q<=Y&&q<=re;){const ue=T[q],oe=b[q]=W?sr(b[q]):cn(b[q]);if(ar(ue,oe))C(ue,oe,k,null,$,U,J,K,W);else break;q++}for(;q<=Y&&q<=re;){const ue=T[Y],oe=b[re]=W?sr(b[re]):cn(b[re]);if(ar(ue,oe))C(ue,oe,k,null,$,U,J,K,W);else break;Y--,re--}if(q>Y){if(q<=re){const ue=re+1,oe=ue<se?b[ue].el:F;for(;q<=re;)C(null,b[q]=W?sr(b[q]):cn(b[q]),k,oe,$,U,J,K,W),q++}}else if(q>re)for(;q<=Y;)Ue(T[q],$,U,!0),q++;else{const ue=q,oe=q,me=new Map;for(q=oe;q<=re;q++){const it=b[q]=W?sr(b[q]):cn(b[q]);it.key!=null&&me.set(it.key,q)}let Ie,rt=0;const st=re-oe+1;let Bt=!1,dt=0;const Wn=new Array(st);for(q=0;q<st;q++)Wn[q]=0;for(q=ue;q<=Y;q++){const it=T[q];if(rt>=st){Ue(it,$,U,!0);continue}let $t;if(it.key!=null)$t=me.get(it.key);else for(Ie=oe;Ie<=re;Ie++)if(Wn[Ie-oe]===0&&ar(it,b[Ie])){$t=Ie;break}$t===void 0?Ue(it,$,U,!0):(Wn[$t-oe]=q+1,$t>=dt?dt=$t:Bt=!0,C(it,b[$t],k,null,$,U,J,K,W),rt++)}const ti=Bt?Fw(Wn):Cs;for(Ie=ti.length-1,q=st-1;q>=0;q--){const it=oe+q,$t=b[it],Oo=it+1<se?b[it+1].el:F;Wn[q]===0?C(null,$t,k,Oo,$,U,J,K,W):Bt&&(Ie<0||q!==ti[Ie]?Ut($t,k,Oo,2):Ie--)}}},Ut=(T,b,k,F,$=null)=>{const{el:U,type:J,transition:K,children:W,shapeFlag:q}=T;if(q&6){Ut(T.component.subTree,b,k,F);return}if(q&128){T.suspense.move(b,k,F);return}if(q&64){J.move(T,b,k,te);return}if(J===Ot){r(U,b,k);for(let Y=0;Y<W.length;Y++)Ut(W[Y],b,k,F);r(T.anchor,b,k);return}if(J===vc){x(T,b,k);return}if(F!==2&&q&1&&K)if(F===0)K.beforeEnter(U),r(U,b,k),Ye(()=>K.enter(U),$);else{const{leave:Y,delayLeave:re,afterLeave:ue}=K,oe=()=>{T.ctx.isUnmounted?s(U):r(U,b,k)},me=()=>{Y(U,()=>{oe(),ue&&ue()})};re?re(U,oe,me):me()}else r(U,b,k)},Ue=(T,b,k,F=!1,$=!1)=>{const{type:U,props:J,ref:K,children:W,dynamicChildren:q,shapeFlag:se,patchFlag:Y,dirs:re,cacheIndex:ue}=T;if(Y===-2&&($=!1),K!=null&&(xn(),Vi(K,null,k,T,!0),Vn()),ue!=null&&(b.renderCache[ue]=void 0),se&256){b.ctx.deactivate(T);return}const oe=se&1&&re,me=!Qr(T);let Ie;if(me&&(Ie=J&&J.onVnodeBeforeUnmount)&&Ht(Ie,b,T),se&6)sn(T.component,k,F);else{if(se&128){T.suspense.unmount(k,F);return}oe&&$r(T,null,b,"beforeUnmount"),se&64?T.type.remove(T,b,k,te,F):q&&!q.hasOnce&&(U!==Ot||Y>0&&Y&64)?Ct(q,b,k,!1,!0):(U===Ot&&Y&384||!$&&se&16)&&Ct(W,b,k),F&&Be(T)}(me&&(Ie=J&&J.onVnodeUnmounted)||oe)&&Ye(()=>{Ie&&Ht(Ie,b,T),oe&&$r(T,null,b,"unmounted")},k)},Be=T=>{const{type:b,el:k,anchor:F,transition:$}=T;if(b===Ot){zn(k,F);return}if(b===vc){N(T);return}const U=()=>{s(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(T.shapeFlag&1&&$&&!$.persisted){const{leave:J,delayLeave:K}=$,W=()=>J(k,U);K?K(T.el,U,W):W()}else U()},zn=(T,b)=>{let k;for(;T!==b;)k=g(T),s(T),T=k;s(b)},sn=(T,b,k)=>{const{bum:F,scope:$,job:U,subTree:J,um:K,m:W,a:q,parent:se,slots:{__:Y}}=T;Da(W),Da(q),F&&Oi(F),se&&ce(Y)&&Y.forEach(re=>{se.renderCache[re]=void 0}),$.stop(),U&&(U.flags|=8,Ue(J,T,b,k)),K&&Ye(K,b),Ye(()=>{T.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Ct=(T,b,k,F=!1,$=!1,U=0)=>{for(let J=U;J<T.length;J++)Ue(T[J],b,k,F,$)},M=T=>{if(T.shapeFlag&6)return M(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const b=g(T.anchor||T.el),k=b&&b[Lm];return k?g(k):b};let ee=!1;const X=(T,b,k)=>{T==null?b._vnode&&Ue(b._vnode,null,null,!0):C(b._vnode||null,T,b,null,null,null,k),b._vnode=T,ee||(ee=!0,cd(),Dm(),ee=!1)},te={p:C,um:Ue,m:Ut,r:Be,mt:Q,mc:v,pc:ve,pbc:w,n:M,o:t};return{render:X,hydrate:void 0,createApp:Cw(X)}}function yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Mw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ah(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=sr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&ah(o,l)),l.type===vl&&(l.el=o.el),l.type===ct&&!l.el&&(l.el=o.el)}}function Fw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function a_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:a_(e)}function Da(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Uw=Symbol.for("v-scx"),Bw=()=>Zt(Uw);function Yr(t,e,n){return l_(t,e,n)}function l_(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,l=et({},n),c=e&&r||!e&&i!=="post";let u;if(Zi){if(i==="sync"){const _=Bw();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=hn,_.resume=hn,_.pause=hn,_}}const h=ut;l.call=(_,S,C)=>tn(_,h,S,C);let d=!1;i==="post"?l.scheduler=_=>{Ye(_,h&&h.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(_,S)=>{S?_():th(_)}),l.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const g=tw(t,e,l);return Zi&&(u?u.push(g):c&&g()),g}function $w(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?c_(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=yo(this),l=l_(s,i.bind(r),n);return o(),l}function c_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const jw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function qw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&jw(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>$e(h)?h.trim():h)),o.number&&(s=n.map(ET)));let l,c=r[l=uc(e)]||r[l=uc(Kt(e))];!c&&i&&(c=r[l=uc(Or(e))]),c&&tn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,tn(u,t,6,s)}}function u_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=u=>{const h=u_(u,e,!0);h&&(l=!0,et(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Fe(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):et(o,i),Fe(t)&&r.set(t,o),o)}function yl(t,e){return!t||!al(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Or(e))||Pe(t,e))}function Ed(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:d,data:g,setupState:_,ctx:S,inheritAttrs:C}=t,P=ka(t);let L,D;try{if(n.shapeFlag&4){const N=s||r,H=N;L=cn(u.call(H,N,h,d,_,g,S)),D=l}else{const N=e;L=cn(N.length>1?N(d,{attrs:l,slots:o,emit:c}):N(d,null)),D=e.props?l:Hw(l)}}catch(N){Mi.length=0,fl(N,t,1),L=St(ct)}let x=L;if(D&&C!==!1){const N=Object.keys(D),{shapeFlag:H}=x;N.length&&H&7&&(i&&N.some(qu)&&(D=zw(D,i)),x=Ln(x,D,!1,!0))}return n.dirs&&(x=Ln(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&Tr(x,n.transition),L=x,ka(P),L}const Hw=t=>{let e;for(const n in t)(n==="class"||n==="style"||al(n))&&((e||(e={}))[n]=t[n]);return e},zw=(t,e)=>{const n={};for(const r in t)(!qu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ww(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Td(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const g=h[d];if(o[g]!==r[g]&&!yl(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Td(r,o,u):!0:!!o;return!1}function Td(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!yl(n,i))return!0}return!1}function Kw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Na=t=>t.__isSuspense;function Gw(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):sw(t)}const Ot=Symbol.for("v-fgt"),vl=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),vc=Symbol.for("v-stc"),Mi=[];let Lt=null;function xa(t=!1){Mi.push(Lt=t?null:[])}function Qw(){Mi.pop(),Lt=Mi[Mi.length-1]||null}let Xi=1;function wd(t,e=!1){Xi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function h_(t){return t.dynamicChildren=Xi>0?Lt||Cs:null,Qw(),Xi>0&&Lt&&Lt.push(t),t}function uN(t,e,n,r,s,i){return h_(d_(t,e,n,r,s,i,!0))}function Va(t,e,n,r,s){return h_(St(t,e,n,r,s,!0))}function Fs(t){return t?t.__v_isVNode===!0:!1}function ar(t,e){return t.type===e.type&&t.key===e.key}const f_=({key:t})=>t??null,fa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Tt(t)||pe(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function d_(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&f_(e),ref:e&&fa(e),scopeId:xm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nt};return l?(lh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=$e(n)?8:16),Xi>0&&!o&&Lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Lt.push(c),c}const St=Yw;function Yw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vw)&&(t=ct),Fs(t)){const l=Ln(t,e,!0);return n&&lh(l,n),Xi>0&&!i&&Lt&&(l.shapeFlag&6?Lt[Lt.indexOf(t)]=l:Lt.push(l)),l.patchFlag=-2,l}if(aI(t)&&(t=t.__vccOpts),e){e=Jw(e);let{class:l,style:c}=e;l&&!$e(l)&&(e.class=Ku(l)),Fe(c)&&(eh(c)&&!ce(c)&&(c=et({},c)),e.style=Wu(c))}const o=$e(t)?1:Na(t)?128:Mm(t)?64:Fe(t)?4:pe(t)?2:0;return d_(t,e,n,r,s,o,i,!0)}function Jw(t){return t?eh(t)||t_(t)?et({},t):t:null}function Ln(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Zw(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&f_(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(fa(e)):[i,fa(e)]:fa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ln(t.ssContent),ssFallback:t.ssFallback&&Ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Tr(h,c.clone(h)),h}function Xw(t=" ",e=0){return St(vl,null,t,e)}function hN(t="",e=!1){return e?(xa(),Va(ct,null,t)):St(ct,null,t)}function cn(t){return t==null||typeof t=="boolean"?St(ct):ce(t)?St(Ot,null,t.slice()):Fs(t)?sr(t):St(vl,null,String(t))}function sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ln(t)}function lh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),lh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!t_(e)?e._ctx=nt:s===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),r&64?(n=16,e=[Xw(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ku([e.class,r.class]));else if(s==="style")e.style=Wu([e.style,r.style]);else if(al(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ht(t,e,n,r=null){tn(t,e,7,[n,r])}const eI=Xm();let tI=0;function nI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||eI,i={uid:tI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new PT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:r_(r,s),emitsOptions:u_(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qw.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const Gs=()=>ut||nt;let La,nu;{const t=ul(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};La=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),nu=e("__VUE_SSR_SETTERS__",n=>Zi=n)}const yo=t=>{const e=ut;return La(t),t.scope.on(),()=>{t.scope.off(),La(e)}},Id=()=>{ut&&ut.scope.off(),La(null)};function p_(t){return t.vnode.shapeFlag&4}let Zi=!1;function rI(t,e=!1,n=!1){e&&nu(e);const{props:r,children:s}=t.vnode,i=p_(t);Pw(t,r,i,e),Nw(t,s,n||e);const o=i?sI(t,e):void 0;return e&&nu(!1),o}function sI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Tw);const{setup:r}=n;if(r){xn();const s=t.setupContext=r.length>1?oI(t):null,i=yo(t),o=_o(r,t,0,[t.props,s]),l=im(o);if(Vn(),i(),(l||t.sp)&&!Qr(t)&&zm(t),l){if(o.then(Id,Id),e)return o.then(c=>{bd(t,c)}).catch(c=>{fl(c,t,0)});t.asyncDep=o}else bd(t,o)}else g_(t)}function bd(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Cm(e)),g_(t)}function g_(t,e,n){const r=t.type;t.render||(t.render=r.render||hn);{const s=yo(t);xn();try{ww(t)}finally{Vn(),s()}}}const iI={get(t,e){return vt(t,"get",""),t[e]}};function oI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,iI),slots:t.slots,emit:t.emit,expose:e}}function El(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cm(mo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Li)return Li[n](t)},has(e,n){return n in e||n in Li}})):t.proxy}function ru(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function aI(t){return pe(t)&&"__vccOpts"in t}const he=(t,e)=>ZT(t,e,Zi);function fe(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!ce(e)?Fs(e)?St(t,null,[e]):St(t,e):St(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fs(n)&&(n=[n]),St(t,e,n))}const lI="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let su;const Ad=typeof window<"u"&&window.trustedTypes;if(Ad)try{su=Ad.createPolicy("vue",{createHTML:t=>t})}catch{}const m_=su?t=>su.createHTML(t):t=>t,cI="http://www.w3.org/2000/svg",uI="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,Rd=Sn&&Sn.createElement("template"),hI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Sn.createElementNS(cI,t):e==="mathml"?Sn.createElementNS(uI,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Rd.innerHTML=m_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Rd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yn="transition",gi="animation",Us=Symbol("_vtc"),__={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},y_=et({},$m,__),fI=t=>(t.displayName="Transition",t.props=y_,t),dI=fI((t,{slots:e})=>fe(lw,v_(t),e)),qr=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Sd=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function v_(t){const e={};for(const A in t)A in __||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,S=pI(s),C=S&&S[0],P=S&&S[1],{onBeforeEnter:L,onEnter:D,onEnterCancelled:x,onLeave:N,onLeaveCancelled:H,onBeforeAppear:z=L,onAppear:I=D,onAppearCancelled:v=x}=e,y=(A,E,Q,_e)=>{A._enterCancelled=_e,tr(A,E?h:l),tr(A,E?u:o),Q&&Q()},w=(A,E)=>{A._isLeaving=!1,tr(A,d),tr(A,_),tr(A,g),E&&E()},R=A=>(E,Q)=>{const _e=A?I:D,Oe=()=>y(E,A,Q);qr(_e,[E,Oe]),Cd(()=>{tr(E,A?c:i),on(E,A?h:l),Sd(_e)||Pd(E,r,C,Oe)})};return et(e,{onBeforeEnter(A){qr(L,[A]),on(A,i),on(A,o)},onBeforeAppear(A){qr(z,[A]),on(A,c),on(A,u)},onEnter:R(!1),onAppear:R(!0),onLeave(A,E){A._isLeaving=!0;const Q=()=>w(A,E);on(A,d),A._enterCancelled?(on(A,g),iu()):(iu(),on(A,g)),Cd(()=>{A._isLeaving&&(tr(A,d),on(A,_),Sd(N)||Pd(A,r,P,Q))}),qr(N,[A,Q])},onEnterCancelled(A){y(A,!1,void 0,!0),qr(x,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),qr(v,[A])},onLeaveCancelled(A){w(A),qr(H,[A])}})}function pI(t){if(t==null)return null;if(Fe(t))return[Ec(t.enter),Ec(t.leave)];{const e=Ec(t);return[e,e]}}function Ec(t){return TT(t)}function on(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Us]||(t[Us]=new Set)).add(e)}function tr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Us];n&&(n.delete(e),n.size||(t[Us]=void 0))}function Cd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let gI=0;function Pd(t,e,n,r){const s=t._endId=++gI,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=E_(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,g),i()},g=_=>{_.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},l+1),t.addEventListener(u,g)}function E_(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${Yn}Delay`),i=r(`${Yn}Duration`),o=kd(s,i),l=r(`${gi}Delay`),c=r(`${gi}Duration`),u=kd(l,c);let h=null,d=0,g=0;e===Yn?o>0&&(h=Yn,d=o,g=i.length):e===gi?u>0&&(h=gi,d=u,g=c.length):(d=Math.max(o,u),h=d>0?o>u?Yn:gi:null,g=h?h===Yn?i.length:c.length:0);const _=h===Yn&&/\b(transform|all)(,|$)/.test(r(`${Yn}Property`).toString());return{type:h,timeout:d,propCount:g,hasTransform:_}}function kd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Od(n)+Od(t[r])))}function Od(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function iu(){return document.body.offsetHeight}function mI(t,e,n){const r=t[Us];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Dd=Symbol("_vod"),_I=Symbol("_vsh"),yI=Symbol(""),vI=/(^|;)\s*display\s*:/;function EI(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&da(r,l,"")}else for(const o in e)n[o]==null&&da(r,o,"");for(const o in n)o==="display"&&(i=!0),da(r,o,n[o])}else if(s){if(e!==n){const o=r[yI];o&&(n+=";"+o),r.cssText=n,i=vI.test(n)}}else e&&t.removeAttribute("style");Dd in t&&(t[Dd]=i?r.display:"",t[_I]&&(r.display="none"))}const Nd=/\s*!important$/;function da(t,e,n){if(ce(n))n.forEach(r=>da(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=TI(t,e);Nd.test(n)?t.setProperty(Or(r),n.replace(Nd,""),"important"):t[r]=n}}const xd=["Webkit","Moz","ms"],Tc={};function TI(t,e){const n=Tc[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return Tc[e]=r;r=cl(r);for(let s=0;s<xd.length;s++){const i=xd[s]+r;if(i in t)return Tc[e]=i}return e}const Vd="http://www.w3.org/1999/xlink";function Ld(t,e,n,r,s,i=ST(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Vd,e.slice(6,e.length)):t.setAttributeNS(Vd,e,n):n==null||i&&!lm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":jn(n)?String(n):n)}function Md(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?m_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=lm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function wI(t,e,n,r){t.addEventListener(e,n,r)}function II(t,e,n,r){t.removeEventListener(e,n,r)}const Fd=Symbol("_vei");function bI(t,e,n,r,s=null){const i=t[Fd]||(t[Fd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=AI(e);if(r){const u=i[e]=CI(r,s);wI(t,l,u,c)}else o&&(II(t,l,o,c),i[e]=void 0)}}const Ud=/(?:Once|Passive|Capture)$/;function AI(t){let e;if(Ud.test(t)){e={};let r;for(;r=t.match(Ud);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let wc=0;const RI=Promise.resolve(),SI=()=>wc||(RI.then(()=>wc=0),wc=Date.now());function CI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tn(PI(r,n.value),e,5,[r])};return n.value=t,n.attached=SI(),n}function PI(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?mI(t,r,o):e==="style"?EI(t,n,r):al(e)?qu(e)||bI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):OI(t,e,r,o))?(Md(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ld(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!$e(r))?Md(t,Kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ld(t,e,r,o))};function OI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bd(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bd(e)&&$e(n)?!1:e in t}const T_=new WeakMap,w_=new WeakMap,Ma=Symbol("_moveCb"),$d=Symbol("_enterCb"),DI=t=>(delete t.props.mode,t),NI=DI({name:"TransitionGroup",props:et({},y_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Gs(),r=Bm();let s,i;return rh(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!FI(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(VI),s.forEach(LI);const l=s.filter(MI);iu(),l.forEach(c=>{const u=c.el,h=u.style;on(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const d=u[Ma]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",d),u[Ma]=null,tr(u,o))};u.addEventListener("transitionend",d)}),s=[]}),()=>{const o=Se(t),l=v_(o);let c=o.tag||Ot;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),Tr(h,Ji(h,l,r,n)),T_.set(h,h.el.getBoundingClientRect()))}i=e.default?nh(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&Tr(h,Ji(h,l,r,n))}return St(c,null,i)}}}),xI=NI;function VI(t){const e=t.el;e[Ma]&&e[Ma](),e[$d]&&e[$d]()}function LI(t){w_.set(t,t.el.getBoundingClientRect())}function MI(t){const e=T_.get(t),n=w_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function FI(t,e,n){const r=t.cloneNode(),s=t[Us];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=E_(r);return i.removeChild(r),o}const UI=["ctrl","shift","alt","meta"],BI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>UI.some(n=>t[`${n}Key`]&&!e.includes(n))},fN=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=BI[e[o]];if(l&&l(s,e))return}return t(s,...i)})},$I={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dN=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Or(s.key);if(e.some(o=>o===i||$I[o]===i))return t(s)})},jI=et({patchProp:kI},hI);let jd;function qI(){return jd||(jd=Vw(jI))}const I_=(...t)=>{const e=qI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=zI(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,HI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function HI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zI(t){return $e(t)?document.querySelector(t):t}function Tl(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}function pN(t,e){for(const n in e)Tl(t,n,e[n]);return t}const wr=Er(!1);let ou;function WI(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:e[0]||""}}function KI(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const b_="ontouchstart"in window||window.navigator.maxTouchPoints>0;function GI(t){const e=t.toLowerCase(),n=KI(e),r=WI(e,n),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||e.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,e.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),wr.value===!0&&(ou={is:{...s}}),b_===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const qd=navigator.userAgent||navigator.vendor||window.opera,QI={has:{touch:!1,webStorage:!1},within:{iframe:!1}},fn={userAgent:qd,is:GI(qd),has:{touch:b_},within:{iframe:window.self!==window.top}},au={install(t){const{$q:e}=t;wr.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,fn),wr.value=!1}),e.platform=Ks(this)):e.platform=this}};{let t;Tl(fn.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(au,fn),wr.value===!0&&(Object.assign(au,ou,QI),ou=null)}function vo(t){return mo(dl(t))}function YI(t){return mo(t)}const wl=(t,e)=>{const n=Ks(t);for(const r in t)Tl(e,r,()=>n[r],s=>{n[r]=s});return e},Zr={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Zr,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function eo(){}function gN(t){return t.button===0}function JI(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function mN(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function A_(t){t.stopPropagation()}function lu(t){t.cancelable!==!1&&t.preventDefault()}function ms(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function _N(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",lu,Zr.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",lu,Zr.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function XI(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],t[s[2]],Zr[s[3]])})}function ZI(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],Zr[r[3]])}),t[n]=void 0)}function eb(t,e=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,t.apply(this,i)};r!==null&&clearTimeout(r),r=setTimeout(o,e)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const Ic=["sm","md","lg","xl"],{passive:Hd}=Zr,tb=wl({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:eo,setDebounce:eo,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||fn.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=t.config.screen?.bodyClasses===!0;this.__update=d=>{const[g,_]=i();if(_!==this.height&&(this.height=_),g!==this.width)this.width=g;else if(d!==!0)return;let S=this.sizes;this.gt.xs=g>=S.sm,this.gt.sm=g>=S.md,this.gt.md=g>=S.lg,this.gt.lg=g>=S.xl,this.lt.sm=g<S.sm,this.lt.md=g<S.md,this.lt.lg=g<S.lg,this.lt.xl=g<S.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,S=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",S!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${S}`)),this.name=S)};let l,c={},u=16;this.setSizes=d=>{Ic.forEach(g=>{d[g]!==void 0&&(c[g]=d[g])})},this.setDebounce=d=>{u=d};const h=()=>{const d=getComputedStyle(document.body);d.getPropertyValue("--q-size-sm")&&Ic.forEach(g=>{this.sizes[g]=parseInt(d.getPropertyValue(`--q-size-${g}`),10)}),this.setSizes=g=>{Ic.forEach(_=>{g[_]&&(this.sizes[_]=g[_])}),this.__update(!0)},this.setDebounce=g=>{l!==void 0&&r.removeEventListener("resize",l,Hd),l=g>0?eb(this.__update,g):this.__update,r.addEventListener("resize",l,Hd)},this.setDebounce(u),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};wr.value===!0?e.push(h):h()}}),_t=wl({isActive:!1,mode:!1},{__media:void 0,set(t){_t.mode=t,t==="auto"?(_t.__media===void 0&&(_t.__media=window.matchMedia("(prefers-color-scheme: dark)"),_t.__updateMedia=()=>{_t.set("auto")},_t.__media.addListener(_t.__updateMedia)),t=_t.__media.matches):_t.__media!==void 0&&(_t.__media.removeListener(_t.__updateMedia),_t.__media=void 0),_t.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){_t.set(_t.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function nb(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let R_=!1;function rb(t){R_=t.isComposing===!0}function sb(t){return R_===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function cu(t,e){return sb(t)===!0?!1:[].concat(e).includes(t.keyCode)}function S_(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function ib({is:t,has:e,within:n},r){const s=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const i=S_(t);i!==void 0&&s.push("platform-"+i)}if(t.nativeMobile===!0){const i=t.nativeMobileWrapper;s.push(i),s.push("native-mobile"),t.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else t.electron===!0?s.push("electron"):t.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function ob(){const{is:t}=fn,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=S_(t);s!==void 0&&n.add(`platform-${s}`)}}fn.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),fn.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function ab(t){for(const e in t)nb(e,t[e])}const lb={install(t){if(this.__installed!==!0){if(wr.value===!0)ob();else{const{$q:e}=t;e.config.brand!==void 0&&ab(e.config.brand);const n=ib(fn,e.config);document.body.classList.add.apply(document.body.classList,n)}fn.is.ios===!0&&document.body.addEventListener("touchstart",eo),window.addEventListener("keydown",rb,!0)}}},C_=()=>!0;function cb(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function ub(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function hb(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return C_;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(cb).map(ub)),()=>e.includes(window.location.hash)}const fb={__history:[],add:eo,remove:eo,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=fn.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r?.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=C_),this.__history.push(o)},this.remove=o=>{const l=this.__history.indexOf(o);l>=0&&this.__history.splice(l,1)};const s=hb(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},zd={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:t=>`Previous ${t} years`,nextRangeYears:t=>`Next ${t} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Wd(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const ir=wl({__qLang:{}},{getLocale:Wd,set(t=zd,e){const n={...t,rtl:t.rtl===!0,getLocale:Wd};{if(n.set=ir.set,ir.__langConfig===void 0||ir.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(ir.__qLang,n)}},install({$q:t,lang:e,ssrContext:n}){t.lang=ir.__qLang,ir.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(e||zd))}}),db={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},Fa=wl({iconMapFn:null,__qIconSet:{}},{set(t,e){const n={...t};n.set=Fa.set,Object.assign(Fa.__qIconSet,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__qIconSet,Tl(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(e||db))}}),pb="_q_",yN="_q_l_",vN="_q_pc_",EN="_q_fo_";function TN(){}const Ua={};let P_=!1;function gb(){P_=!0}function bc(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(bc(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let i=t.entries();for(r=i.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=i.next()}for(i=t.entries(),r=i.next();r.done!==!0;){if(bc(r.value[1],e.get(r.value[0]))!==!0)return!1;r=i.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const i=t.entries();for(r=i.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=i.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const s=Object.keys(t).filter(i=>t[i]!==void 0);if(n=s.length,n!==Object.keys(e).filter(i=>e[i]!==void 0).length)return!1;for(r=n;r--!==0;){const i=s[r];if(bc(t[i],e[i])!==!0)return!1}return!0}return t!==t&&e!==e}function to(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function wN(t){return Object.prototype.toString.call(t)==="[object Date]"}function IN(t){return typeof t=="number"&&isFinite(t)}const Kd=[au,lb,_t,tb,fb,ir,Fa];function mb(t,e){const n=I_(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...s}=e._context;return Object.assign(n._context,s),n}function Gd(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function _b(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(pb,n.$q),Gd(n,Kd),e.components!==void 0&&Object.values(e.components).forEach(r=>{to(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{to(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&Gd(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&Kd.includes(r)===!1)),wr.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}const yb=function(t,e={}){const n={version:"2.18.1"};P_===!1?(e.config!==void 0&&Object.assign(Ua,e.config),n.config={...Ua},gb()):n.config=e.config||{},_b(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},vb={name:"Quasar",version:"2.18.1",install:yb,lang:ir,iconSet:Fa},Eb=Object.prototype.toString,Ac=Object.prototype.hasOwnProperty,Tb=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(t=>"[object "+t+"]"));function Qd(t){if(t!==Object(t)||Tb.has(Eb.call(t))===!0||t.constructor&&Ac.call(t,"constructor")===!1&&Ac.call(t.constructor.prototype,"isPrototypeOf")===!1)return!1;let e;for(e in t);return e===void 0||Ac.call(t,e)}function k_(){let t,e,n,r,s,i,o=arguments[0]||{},l=1,c=!1;const u=arguments.length;for(typeof o=="boolean"&&(c=o,o=arguments[1]||{},l=2),Object(o)!==o&&typeof o!="function"&&(o={}),u===l&&(o=this,l--);l<u;l++)if((t=arguments[l])!==null)for(e in t)n=o[e],r=t[e],o!==r&&(c===!0&&r&&((s=Array.isArray(r))||Qd(r)===!0)?(s===!0?i=Array.isArray(n)===!0?n:[]:i=Qd(n)===!0?n:{},o[e]=k_(c,i,r)):r!==void 0&&(o[e]=r));return o}let pa=null,uu;const Fi=[];function wb(t){t.title&&(t.title=t.titleTemplate?t.titleTemplate(t.title):t.title,delete t.titleTemplate),[["meta","content"],["link","href"]].forEach(e=>{const n=t[e[0]],r=e[1];for(const s in n){const i=n[s];i.template&&(Object.keys(i).length===1?delete n[s]:(i[r]=i.template(i[r]||""),delete i.template))}})}function Ib(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!0;for(const n in t)if(t[n]!==e[n])return!0}function Yd(t){return["class","style"].includes(t)===!1}function Jd(t){return["lang","dir"].includes(t)===!1}function bb(t,e){const n={},r={};return t===void 0?{add:e,remove:r}:(t.title!==e.title&&(n.title=e.title),["meta","link","script","htmlAttr","bodyAttr"].forEach(s=>{const i=t[s],o=e[s];if(r[s]=[],i==null){n[s]=o;return}n[s]={};for(const l in i)o.hasOwnProperty(l)===!1&&r[s].push(l);for(const l in o)i.hasOwnProperty(l)===!1?n[s][l]=o[l]:Ib(i[l],o[l])===!0&&(r[s].push(l),n[s][l]=o[l])}),{add:n,remove:r})}function Ab({add:t,remove:e}){t.title&&(document.title=t.title),Object.keys(e).length!==0&&(["meta","link","script"].forEach(n=>{e[n].forEach(r=>{document.head.querySelector(`${n}[data-qmeta="${r}"]`).remove()})}),e.htmlAttr.filter(Jd).forEach(n=>{document.documentElement.removeAttribute(n)}),e.bodyAttr.filter(Yd).forEach(n=>{document.body.removeAttribute(n)})),["meta","link","script"].forEach(n=>{const r=t[n];for(const s in r){const i=document.createElement(n);for(const o in r[s])o!=="innerHTML"&&i.setAttribute(o,r[s][o]);i.setAttribute("data-qmeta",s),n==="script"&&(i.innerHTML=r[s].innerHTML||""),document.head.appendChild(i)}}),Object.keys(t.htmlAttr).filter(Jd).forEach(n=>{document.documentElement.setAttribute(n,t.htmlAttr[n]||"")}),Object.keys(t.bodyAttr).filter(Yd).forEach(n=>{document.body.setAttribute(n,t.bodyAttr[n]||"")})}function Rb(){pa=null;const t={title:"",titleTemplate:null,meta:{},link:{},script:{},htmlAttr:{},bodyAttr:{}};for(let e=0;e<Fi.length;e++){const{active:n,val:r}=Fi[e];n===!0&&k_(!0,t,r)}wb(t),Ab(bb(uu,t)),uu=t}function mi(){pa!==null&&clearTimeout(pa),pa=setTimeout(Rb,50)}const Sb={install(t){this.__installed!==!0&&wr.value===!0&&(uu=window.__Q_META__,document.getElementById("qmeta-init").remove())}};function Cb(t){{const e={active:!0};if(typeof t=="function"){const n=he(t);e.val=n.value,Yr(n,r=>{e.val=r,e.active===!0&&mi()})}else e.val=t;Fi.push(e),mi(),Wm(()=>{e.active=!0,mi()}),Km(()=>{e.active=!1,mi()}),sh(()=>{Fi.splice(Fi.indexOf(e),1),mi()})}}const Xd={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_HOST:"https://api.mylara.ru/api",VITE_API_DOMAIN:"api.mylara.ru",VITE_API_PORT:"",VITE_API_VERSION:"1",VITE_APP_BASE:"/",VITE_APP_VERSION:"0.1.35",VITE_BUILD_DATE:"05.07.2025 12:45:31",VITE_DARK:"false",VITE_DESCRIPTION:"Инновационная косметика по уходу за лицом от MYLARA. Натуральные ингредиенты и эффективные формулы для вашей красоты.",VITE_DOMAIN:"mylara.ru",VITE_FIREBASE_API_KEY:"AIzaSyCYxI-u9jWIl-obR8FmvOXOh91sYD29toQ",VITE_FIREBASE_APP_ID:"1:890771851225:web:bf606c67130d45fbc3fbc8",VITE_FIREBASE_AUTH_DOMAIN:"mylara-landing.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-JYDX2J8JMZ",VITE_FIREBASE_MESSAGING_SENDER_ID:"890771851225",VITE_FIREBASE_PROJECT_ID:"mylara-landing",VITE_FIREBASE_STORAGE_BUCKET:"mylara-landing.firebasestorage.app",VITE_HTTPS_HOST:"https://api.mylara.ru",VITE_HTTPS_PROTOCOL:"https:",VITE_KEYWORDS:"косметика, уход за лицом, натуральная косметика, MYLARA, красота",VITE_NAME_FULL:"MYLARA",VITE_NAME_FULL_EN:"MYLARA",VITE_NAME_SHORT:"mylara-landing",VITE_ROUTER_BASE:"/",VITE_WS_HOST:"ws://api.mylara.ru",VITE_WS_PROTOCOL:"ws:"},Hn=(t,e="")=>typeof import.meta<"u"&&Xd?Xd[t]??e:e,Pb=Hn("VITE_NAME_FULL","MYLARA");Hn("VITE_REDIRECT_PATH","");Hn("VITE_REDIRECT_PATH_DEV","");const bN=Hn("VITE_DESCRIPTION",""),kb=Hn("VITE_KEYWORDS",""),Ob=Hn("VITE_ROUTER_BASE","/");Hn("VITE_APP_BASE","/");Hn("VITE_API_HOST","");Hn("VITE_API_BASE_HOST","");new Date().getFullYear();const Zo={NAME:{APP:Pb,DESCRIPTION:"description",KEYWORDS:"keywords"},KEYWORDS:kb,NOSCRIPT:{default:"Это содержимое для браузеров без JS (или с отключенным JS)"},EQUIV:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}},Db={VITE_APP_VERSION:"0.1.35",VITE_BUILD_DATE:"05.07.2025 12:45:31",VITE_DESCRIPTION:"Инновационная косметика по уходу за лицом от MYLARA. Натуральные ингредиенты и эффективные формулы для вашей красоты.",VITE_NAME_FULL:"MYLARA"},{VITE_NAME_FULL:Nb,VITE_DESCRIPTION:Ba,VITE_APP_VERSION:xb,VITE_BUILD_DATE:Vb}=Db,Lb=`${Nb} | ${Ba}`,AN=Ba,RN=xb,SN=Vb,Mb={title:Lb,meta:{description:{name:Zo.NAME.DESCRIPTION,content:Ba},keywords:{name:Zo.NAME.KEYWORDS,content:Ba},robots:{name:"robots",content:"noindex"},equiv:Zo.EQUIV,noscript:Zo.NOSCRIPT}},Fb=()=>{};var Zd={};/**
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
 */const O_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ub=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},D_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),r.push(n[h],n[d],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(O_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ub(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new Bb;const g=i<<2|l>>4;if(r.push(g),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const S=u<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $b=function(t){const e=O_(t);return D_.encodeByteArray(e,!0)},$a=function(t){return $b(t).replace(/\./g,"")},N_=function(t){try{return D_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qb=()=>jb().__FIREBASE_DEFAULTS__,Hb=()=>{if(typeof process>"u"||typeof Zd>"u")return;const t=Zd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&N_(t[1]);return e&&JSON.parse(e)},Il=()=>{try{return Fb()||qb()||Hb()||zb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x_=t=>{var e,n;return(n=(e=Il())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},V_=t=>{const e=x_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},L_=()=>{var t;return(t=Il())===null||t===void 0?void 0:t.config},M_=t=>{var e;return(e=Il())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Wb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Dr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ch(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function F_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$a(JSON.stringify(n)),$a(JSON.stringify(o)),""].join(".")}const Ui={};function Kb(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ui))Ui[e]?t.emulator.push(e):t.prod.push(e);return t}function Gb(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ep=!1;function uh(t,e){if(typeof window>"u"||typeof document>"u"||!Dr(window.location.host)||Ui[t]===e||Ui[t]||ep)return;Ui[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Kb().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{ep=!0,o()},g}function h(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function d(){const g=Gb(r),_=n("text"),S=document.getElementById(_)||document.createElement("span"),C=n("learnmore"),P=document.getElementById(C)||document.createElement("a"),L=n("preprendIcon"),D=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const x=g.element;l(x),h(P,C);const N=u();c(D,L),x.append(D,S,P,N),document.body.appendChild(x)}i?(S.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Yb(){var t;const e=(t=Il())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eA(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tA(){return!Yb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nA(){try{return typeof indexedDB=="object"}catch{return!1}}function rA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const sA="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sA,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?iA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wn(s,l,r)}}function iA(t,e){return t.replace(oA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const oA=/\{\$([^}]+)}/g;function aA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(tp(i)&&tp(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tp(t){return t!==null&&typeof t=="object"}/**
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
 */function To(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lA(t,e){const n=new cA(t,e);return n.subscribe.bind(n)}class cA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rc),s.error===void 0&&(s.error=Rc),s.complete===void 0&&(s.complete=Rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class hA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dA(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fA(t){return t===zr?void 0:t}function dA(t){return t.instantiationMode==="EAGER"}/**
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
 */class pA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const gA={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},mA=Ee.INFO,_A={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},yA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_A[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hh{constructor(e){this.name=e,this._logLevel=mA,this._logHandler=yA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const vA=(t,e)=>e.some(n=>t instanceof n);let np,rp;function EA(){return np||(np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TA(){return rp||(rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U_=new WeakMap,hu=new WeakMap,B_=new WeakMap,Sc=new WeakMap,fh=new WeakMap;function wA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&U_.set(n,t)}).catch(()=>{}),fh.set(e,t),e}function IA(t){if(hu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hu.set(t,e)}let fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||B_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bA(t){fu=t(fu)}function AA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return B_.set(r,e.sort?e.sort():[e]),gr(r)}:TA().includes(t)?function(...e){return t.apply(Cc(this),e),gr(U_.get(this))}:function(...e){return gr(t.apply(Cc(this),e))}}function RA(t){return typeof t=="function"?AA(t):(t instanceof IDBTransaction&&IA(t),vA(t,EA())?new Proxy(t,fu):t)}function gr(t){if(t instanceof IDBRequest)return wA(t);if(Sc.has(t))return Sc.get(t);const e=RA(t);return e!==t&&(Sc.set(t,e),fh.set(e,t)),e}const Cc=t=>fh.get(t);function SA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(gr(o.result),c.oldVersion,c.newVersion,gr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const CA=["get","getKey","getAll","getAllKeys","count"],PA=["put","add","delete","clear"],Pc=new Map;function sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=PA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||CA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Pc.set(e,i),i}bA(t=>({...t,get:(e,n,r)=>sp(e,n)||t.get(e,n,r),has:(e,n)=>!!sp(e,n)||t.has(e,n)}));/**
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
 */class kA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OA(t){const e=t.getComponent();return e?.type==="VERSION"}const du="@firebase/app",ip="0.13.2";/**
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
 */const Mn=new hh("@firebase/app"),DA="@firebase/app-compat",NA="@firebase/analytics-compat",xA="@firebase/analytics",VA="@firebase/app-check-compat",LA="@firebase/app-check",MA="@firebase/auth",FA="@firebase/auth-compat",UA="@firebase/database",BA="@firebase/data-connect",$A="@firebase/database-compat",jA="@firebase/functions",qA="@firebase/functions-compat",HA="@firebase/installations",zA="@firebase/installations-compat",WA="@firebase/messaging",KA="@firebase/messaging-compat",GA="@firebase/performance",QA="@firebase/performance-compat",YA="@firebase/remote-config",JA="@firebase/remote-config-compat",XA="@firebase/storage",ZA="@firebase/storage-compat",e0="@firebase/firestore",t0="@firebase/ai",n0="@firebase/firestore-compat",r0="firebase",s0="11.10.0";/**
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
 */const pu="[DEFAULT]",i0={[du]:"fire-core",[DA]:"fire-core-compat",[xA]:"fire-analytics",[NA]:"fire-analytics-compat",[LA]:"fire-app-check",[VA]:"fire-app-check-compat",[MA]:"fire-auth",[FA]:"fire-auth-compat",[UA]:"fire-rtdb",[BA]:"fire-data-connect",[$A]:"fire-rtdb-compat",[jA]:"fire-fn",[qA]:"fire-fn-compat",[HA]:"fire-iid",[zA]:"fire-iid-compat",[WA]:"fire-fcm",[KA]:"fire-fcm-compat",[GA]:"fire-perf",[QA]:"fire-perf-compat",[YA]:"fire-rc",[JA]:"fire-rc-compat",[XA]:"fire-gcs",[ZA]:"fire-gcs-compat",[e0]:"fire-fst",[n0]:"fire-fst-compat",[t0]:"fire-vertex","fire-js":"fire-js",[r0]:"fire-js-all"};/**
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
 */const ja=new Map,o0=new Map,gu=new Map;function op(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(gu.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of ja.values())op(n,t);for(const n of o0.values())op(n,t);return!0}function bl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const a0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new Eo("app","Firebase",a0);/**
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
 */class l0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const as=s0;function $_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw mr.create("bad-app-name",{appName:String(s)});if(n||(n=L_()),!n)throw mr.create("no-options");const i=ja.get(s);if(i){if(es(n,i.options)&&es(r,i.config))return i;throw mr.create("duplicate-app",{appName:s})}const o=new pA(s);for(const c of gu.values())o.addComponent(c);const l=new l0(n,r,o);return ja.set(s,l),l}function dh(t=pu){const e=ja.get(t);if(!e&&t===pu&&L_())return $_();if(!e)throw mr.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let s=(r=i0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(l.join(" "));return}ts(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const c0="firebase-heartbeat-database",u0=1,no="firebase-heartbeat-store";let kc=null;function j_(){return kc||(kc=SA(c0,u0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(no)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),kc}async function h0(t){try{const n=(await j_()).transaction(no),r=await n.objectStore(no).get(q_(t));return await n.done,r}catch(e){if(e instanceof wn)Mn.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e?.message});Mn.warn(n.message)}}}async function ap(t,e){try{const r=(await j_()).transaction(no,"readwrite");await r.objectStore(no).put(e,q_(t)),await r.done}catch(n){if(n instanceof wn)Mn.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n?.message});Mn.warn(r.message)}}}function q_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const f0=1024,d0=30;class p0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new m0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>d0){const o=_0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lp(),{heartbeatsToSend:r,unsentEntries:s}=g0(this._heartbeatsCache.heartbeats),i=$a(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Mn.warn(n),""}}}function lp(){return new Date().toISOString().substring(0,10)}function g0(t,e=f0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class m0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nA()?rA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await h0(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cp(t){return $a(JSON.stringify({version:2,heartbeats:t})).length}function _0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function y0(t){ts(new Ir("platform-logger",e=>new kA(e),"PRIVATE")),ts(new Ir("heartbeat",e=>new p0(e),"PRIVATE")),dn(du,ip,t),dn(du,ip,"esm2017"),dn("fire-js","")}y0("");function ph(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function H_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v0=H_,z_=new Eo("auth","Firebase",H_());/**
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
 */const qa=new hh("@firebase/auth");function E0(t,...e){qa.logLevel<=Ee.WARN&&qa.warn(`Auth (${as}): ${t}`,...e)}function ga(t,...e){qa.logLevel<=Ee.ERROR&&qa.error(`Auth (${as}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw gh(t,...e)}function pn(t,...e){return gh(t,...e)}function W_(t,e,n){const r=Object.assign(Object.assign({},v0()),{[e]:n});return new Eo("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return W_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return z_.create(t,...e)}function ae(t,e,...n){if(!t)throw gh(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ga(e),new Error(e)}function Fn(t,e){t||kn(e)}/**
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
 */function mu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function T0(){return up()==="http:"||up()==="https:"}function up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function w0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(T0()||Xb()||"connection"in navigator)?navigator.onLine:!0}function I0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=Qb()||Zb()}get(){return w0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mh(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class K_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const b0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const A0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],R0=new wo(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xr(t,e,n,r,s={}){return G_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=To(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Jb()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Dr(t.emulatorConfig.host)&&(u.credentials="include"),K_.fetch()(await Q_(t,t.config.apiHost,n,l),u)})}async function G_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},b0),e);try{const s=new C0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ea(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ea(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ea(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ea(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw W_(t,h,u);nn(t,h)}}catch(s){if(s instanceof wn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function Io(t,e,n,r,s={}){const i=await xr(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Q_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?mh(t.config,s):`${t.config.apiScheme}://${s}`;return A0.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function S0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class C0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),R0.get())})}}function ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pn(t,e,r);return s.customData._tokenResponse=n,s}function hp(t){return t!==void 0&&t.enterprise!==void 0}class P0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return S0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function k0(t,e){return xr(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
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
 */async function O0(t,e){return xr(t,"POST","/v1/accounts:delete",e)}async function Ha(t,e){return xr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D0(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=_h(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Bi(Oc(s.auth_time)),issuedAtTime:Bi(Oc(s.iat)),expirationTime:Bi(Oc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Oc(t){return Number(t)*1e3}function _h(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ga("JWT malformed, contained fewer than 3 sections"),null;try{const s=N_(n);return s?JSON.parse(s):(ga("Failed to decode base64 JWT payload"),null)}catch(s){return ga("Caught error parsing JWT payload as JSON",s?.toString()),null}}function fp(t){const e=_h(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&N0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function N0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class x0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _u{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function za(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ro(t,Ha(n,{idToken:r}));ae(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Y_(i.providerUserInfo):[],l=L0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!l?.length,h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new _u(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function V0(t){const e=He(t);await za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function L0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Y_(t){return t.map(e=>{var{providerId:n}=e,r=ph(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function M0(t,e){const n=await G_(t,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Q_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Dr(t.emulatorConfig.host)&&(c.credentials="include"),K_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function F0(t,e){return xr(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
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
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=fp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await M0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ns;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
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
 */function Jn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ph(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new x0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _u(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return D0(this,e)}reload(){return V0(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await ro(this,O0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:N,isAnonymous:H,providerData:z,stsTokenManager:I}=n;ae(x&&I,e,"internal-error");const v=Ns.fromJSON(this.name,I);ae(typeof x=="string",e,"internal-error"),Jn(d,e.name),Jn(g,e.name),ae(typeof N=="boolean",e,"internal-error"),ae(typeof H=="boolean",e,"internal-error"),Jn(_,e.name),Jn(S,e.name),Jn(C,e.name),Jn(P,e.name),Jn(L,e.name),Jn(D,e.name);const y=new Jt({uid:x,auth:e,email:g,emailVerified:N,displayName:d,isAnonymous:H,photoURL:S,phoneNumber:_,tenantId:C,stsTokenManager:v,createdAt:L,lastLoginAt:D});return z&&Array.isArray(z)&&(y.providerData=z.map(w=>Object.assign({},w))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ns;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await za(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Y_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Ns;l.updateFromIdToken(r);const c=new Jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _u(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const dp=new Map;function On(t){Fn(t instanceof Function,"Expected a class definition");let e=dp.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dp.set(t,e),e)}/**
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
 */class J_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}J_.type="NONE";const pp=J_;/**
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
 */function ma(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ma(this.userKey,s.apiKey,i),this.fullPersistenceKey=ma("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ha(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(On(pp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||On(pp);const o=ma(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const g=await Ha(e,{idToken:h}).catch(()=>{});if(!g)break;d=await Jt._fromGetAccountInfoResponse(e,g,h)}else d=Jt._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new xs(i,e,r))}}/**
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
 */function gp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ty(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ry(e))return"Blackberry";if(sy(e))return"Webos";if(Z_(e))return"Safari";if((e.includes("chrome/")||ey(e))&&!e.includes("edge/"))return"Chrome";if(ny(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function X_(t=wt()){return/firefox\//i.test(t)}function Z_(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ey(t=wt()){return/crios\//i.test(t)}function ty(t=wt()){return/iemobile/i.test(t)}function ny(t=wt()){return/android/i.test(t)}function ry(t=wt()){return/blackberry/i.test(t)}function sy(t=wt()){return/webos/i.test(t)}function yh(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function U0(t=wt()){var e;return yh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function B0(){return eA()&&document.documentMode===10}function iy(t=wt()){return yh(t)||ny(t)||sy(t)||ry(t)||/windows phone/i.test(t)||ty(t)}/**
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
 */function oy(t,e=[]){let n;switch(t){case"Browser":n=gp(wt());break;case"Worker":n=`${gp(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${r}`}/**
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
 */class $0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function j0(t,e={}){return xr(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
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
 */const q0=6;class H0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:q0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class z0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mp(this),this.idTokenSubscription=new mp(this),this.beforeStateQueue=new $0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ha(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await za(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Dn(this));const n=e?He(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await j0(this),n=new H0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await F0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&E0(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ls(t){return He(t)}class mp{constructor(e){this.auth=e,this.observer=null,this.addObserver=lA(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Al={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W0(t){Al=t}function ay(t){return Al.loadJS(t)}function K0(){return Al.recaptchaEnterpriseScript}function G0(){return Al.gapiScript}function Q0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Y0{constructor(){this.enterprise=new J0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class J0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const X0="recaptcha-enterprise",ly="NO_RECAPTCHA";class Z0{constructor(e){this.type=X0,this.auth=ls(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{k0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new P0(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;hp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ly)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Y0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&hp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=K0();c.length!==0&&(c+=l),ay(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function _p(t,e,n,r=!1,s=!1){const i=new Z0(t);let o;if(s)o=ly;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function yu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _p(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await _p(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function eR(t,e){const n=bl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(es(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function tR(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(On);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function nR(t,e,n){const r=ls(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cy(e),{host:o,port:l}=rR(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(es(u,r.config.emulator)&&es(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Dr(o)?(ch(`${i}//${o}${c}`),uh("Auth",!0)):sR()}function cy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rR(t){const e=cy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yp(o)}}}function yp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function iR(t,e){return xr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function oR(t,e){return Io(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
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
 */async function aR(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function lR(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
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
 */class so extends vh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yu(e,n,"signInWithPassword",oR);case"emailLink":return aR(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yu(e,r,"signUpPassword",iR);case"emailLink":return lR(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vs(t,e){return Io(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
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
 */const cR="http://localhost";class ns extends vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ph(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:cR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
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
 */function uR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hR(t){const e=wi(Ii(t)).link,n=e?wi(Ii(e)).deep_link_id:null,r=wi(Ii(t)).deep_link_id;return(r?wi(Ii(r)).link:null)||r||n||e||t}class Eh{constructor(e){var n,r,s,i,o,l;const c=wi(Ii(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,d=uR((s=c.mode)!==null&&s!==void 0?s:null);ae(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=hR(e);try{return new Eh(n)}catch{return null}}}/**
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
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Eh.parseLink(n);return ae(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bo extends uy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends bo{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class cr extends bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class ur extends bo{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
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
 */class hr extends bo{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */async function fR(t,e){return Io(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
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
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=vp(r);return new rs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vp(r);return new rs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wa extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wa(e,n,r,s)}}function hy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wa._fromErrorAndOperation(t,i,e,r):i})}async function dR(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rs._forOperation(t,"link",r)}/**
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
 */async function pR(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(Dn(r));const s="reauthenticate";try{const i=await ro(t,hy(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=_h(i.idToken);ae(o,r,"internal-error");const{sub:l}=o;return ae(t.uid===l,r,"user-mismatch"),rs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
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
 */async function fy(t,e,n=!1){if(Vt(t.app))return Promise.reject(Dn(t));const r="signIn",s=await hy(t,r,e),i=await rs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gR(t,e){return fy(ls(t),e)}/**
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
 */async function dy(t){const e=ls(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mR(t,e,n){if(Vt(t.app))return Promise.reject(Dn(t));const r=ls(t),o=await yu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&dy(t),c}),l=await rs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function _R(t,e,n){return Vt(t.app)?Promise.reject(Dn(t)):gR(He(t),Qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dy(t),r})}function yR(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function vR(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function ER(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function TR(t){return He(t).signOut()}const Ka="__sak";/**
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
 */class py{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ka,"1"),this.storage.removeItem(Ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wR=1e3,IR=10;class gy extends py{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);B0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gy.type="LOCAL";const bR=gy;/**
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
 */class my extends py{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}my.type="SESSION";const _y=my;/**
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
 */function AR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Rl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await AR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rl.receivers=[];/**
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
 */function Th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Th("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gn(){return window}function SR(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function CR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PR(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kR(){return yy()?self:null}/**
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
 */const vy="firebaseLocalStorageDb",OR=1,Ga="firebaseLocalStorage",Ey="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sl(t,e){return t.transaction([Ga],e?"readwrite":"readonly").objectStore(Ga)}function DR(){const t=indexedDB.deleteDatabase(vy);return new Ao(t).toPromise()}function vu(){const t=indexedDB.open(vy,OR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ga,{keyPath:Ey})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ga)?e(r):(r.close(),await DR(),e(await vu()))})})}async function Ep(t,e,n){const r=Sl(t,!0).put({[Ey]:e,value:n});return new Ao(r).toPromise()}async function NR(t,e){const n=Sl(t,!1).get(e),r=await new Ao(n).toPromise();return r===void 0?null:r.value}function Tp(t,e){const n=Sl(t,!0).delete(e);return new Ao(n).toPromise()}const xR=800,VR=3;class Ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rl._getInstance(kR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CR(),!this.activeServiceWorker)return;this.sender=new RR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vu();return await Ep(e,Ka,"1"),await Tp(e,Ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sl(s,!1).getAll();return new Ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ty.type="LOCAL";const LR=Ty;new wo(3e4,6e4);/**
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
 */function MR(t,e){return e?On(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wh extends vh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FR(t){return fy(t.auth,new wh(t),t.bypassAuthState)}function UR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),pR(n,new wh(t),t.bypassAuthState)}async function BR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),dR(n,new wh(t),t.bypassAuthState)}/**
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
 */class wy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FR;case"linkViaPopup":case"linkViaRedirect":return BR;case"reauthViaPopup":case"reauthViaRedirect":return UR;default:nn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $R=new wo(2e3,1e4);class Ss extends wy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$R.get())};e()}}Ss.currentPopupAction=null;/**
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
 */const jR="pendingRedirect",_a=new Map;class qR extends wy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_a.get(this.auth._key());if(!e){try{const r=await HR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_a.set(this.auth._key(),e)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HR(t,e){const n=KR(e),r=WR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zR(t,e){_a.set(t._key(),e)}function WR(t){return On(t._redirectPersistence)}function KR(t){return ma(jR,t.config.apiKey,t.name)}async function GR(t,e,n=!1){if(Vt(t.app))return Promise.reject(Dn(t));const r=ls(t),s=MR(r,e),o=await new qR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const QR=10*60*1e3;class YR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Iy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QR&&this.cachedEventUids.clear(),this.cachedEventUids.has(wp(e))}saveEventToCache(e){this.cachedEventUids.add(wp(e)),this.lastProcessedEventTime=Date.now()}}function wp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Iy({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function JR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iy(t);default:return!1}}/**
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
 */async function XR(t,e={}){return xr(t,"GET","/v1/projects",e)}/**
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
 */const ZR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eS=/^https?/;async function tS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XR(t);for(const n of e)try{if(nS(n))return}catch{}nn(t,"unauthorized-domain")}function nS(t){const e=mu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eS.test(n))return!1;if(ZR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new wo(3e4,6e4);function Ip(){const t=gn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sS(t){return new Promise((e,n)=>{var r,s,i;function o(){Ip(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ip(),n(pn(t,"network-request-failed"))},timeout:rS.get()})}if(!((s=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=gn().gapi)===null||i===void 0)&&i.load)o();else{const l=Q0("iframefcb");return gn()[l]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},ay(`${G0()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ya=null,e})}let ya=null;function iS(t){return ya=ya||sS(t),ya}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=new wo(5e3,15e3),aS="__/auth/iframe",lS="emulator/auth/iframe",cS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hS(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mh(e,lS):`https://${t.config.authDomain}/${aS}`,r={apiKey:e.apiKey,appName:t.name,v:as},s=uS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${To(r).slice(1)}`}async function fS(t){const e=await iS(t),n=gn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:hS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),l=gn().setTimeout(()=>{i(o)},oS.get());function c(){gn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pS=500,gS=600,mS="_blank",_S="http://localhost";class bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yS(t,e,n,r=pS,s=gS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},dS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=wt().toLowerCase();n&&(l=ey(u)?mS:n),X_(u)&&(e=e||_S,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[_,S])=>`${g}${_}=${S},`,"");if(U0(u)&&l!=="_self")return vS(e||"",l),new bp(null);const d=window.open(e||"",l,h);ae(d,t,"popup-blocked");try{d.focus()}catch{}return new bp(d)}function vS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ES="__/auth/handler",TS="emulator/auth/handler",wS=encodeURIComponent("fac");async function Ap(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:as,eventId:s};if(e instanceof uy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof bo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${wS}=${encodeURIComponent(c)}`:"";return`${IS(t)}?${To(l).slice(1)}${u}`}function IS({config:t}){return t.emulator?mh(t,TS):`https://${t.authDomain}/${ES}`}/**
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
 */const Dc="webStorageSupport";class bS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_y,this._completeRedirectFn=GR,this._overrideRedirectResult=zR}async _openPopup(e,n,r,s){var i;Fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ap(e,n,r,mu(),s);return yS(e,o,Th())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ap(e,n,r,mu(),s);return SR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fS(e),r=new YR(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[Dc];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iy()||Z_()||yh()}}const AS=bS;var Rp="@firebase/auth",Sp="1.10.8";/**
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
 */class RS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CS(t){ts(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(t)},u=new z0(r,s,i,c);return tR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Ir("auth-internal",e=>{const n=ls(e.getProvider("auth").getImmediate());return(r=>new RS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Rp,Sp,SS(t)),dn(Rp,Sp,"esm2017")}/**
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
 */const PS=5*60,kS=M_("authIdTokenMaxAge")||PS;let Cp=null;const OS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kS)return;const s=n?.token;Cp!==s&&(Cp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function DS(t=dh()){const e=bl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eR(t,{popupRedirectResolver:AS,persistence:[LR,bR,_y]}),r=M_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=OS(i.toString());vR(n,o,()=>o(n.currentUser)),yR(n,l=>o(l))}}const s=x_("auth");return s&&nR(n,`http://${s}`),n}function NS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}W0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",NS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CS("Browser");var xS="firebase",VS="11.10.0";/**
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
 */dn(xS,VS,"app");var Pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,by;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function y(){}y.prototype=v.prototype,I.D=v.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(w,R,A){for(var E=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)E[Q-2]=arguments[Q];return v.prototype[R].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,y){y||(y=0);var w=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)w[R]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(R=0;16>R;++R)w[R]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=I.g[0],y=I.g[1],R=I.g[2];var A=I.g[3],E=v+(A^y&(R^A))+w[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+w[1]+3905402710&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+w[2]+606105819&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+w[3]+3250441966&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(A^y&(R^A))+w[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+w[5]+1200080426&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+w[6]+2821735955&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+w[7]+4249261313&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(A^y&(R^A))+w[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+w[9]+2336552879&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+w[10]+4294925233&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+w[11]+2304563134&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(A^y&(R^A))+w[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+w[13]+4254626195&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+w[14]+2792965006&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+w[15]+1236535329&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(R^A&(y^R))+w[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+w[6]+3225465664&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+w[11]+643717713&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+w[0]+3921069994&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^A&(y^R))+w[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+w[10]+38016083&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+w[15]+3634488961&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+w[4]+3889429448&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^A&(y^R))+w[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+w[14]+3275163606&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+w[3]+4107603335&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+w[8]+1163531501&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^A&(y^R))+w[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+w[2]+4243563512&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+w[7]+1735328473&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+w[12]+2368359562&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(y^R^A)+w[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+w[8]+2272392833&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+w[11]+1839030562&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+w[14]+4259657740&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^A)+w[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+w[4]+1272893353&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+w[7]+4139469664&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+w[10]+3200236656&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^A)+w[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+w[0]+3936430074&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+w[3]+3572445317&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+w[6]+76029189&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^A)+w[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+w[12]+3873151461&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+w[15]+530742520&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+w[2]+3299628645&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(R^(y|~A))+w[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+w[7]+1126891415&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+w[14]+2878612391&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+w[5]+4237533241&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~A))+w[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+w[3]+2399980690&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+w[10]+4293915773&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+w[1]+2240044497&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~A))+w[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+w[15]+4264355552&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+w[6]+2734768916&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+w[13]+1309151649&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~A))+w[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+w[11]+3174756917&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+w[2]+718787259&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var y=v-this.blockSize,w=this.B,R=this.h,A=0;A<v;){if(R==0)for(;A<=y;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<v;)if(w[R++]=I.charCodeAt(A++),R==this.blockSize){s(this,w),R=0;break}}else for(;A<v;)if(w[R++]=I[A++],R==this.blockSize){s(this,w),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var y=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=y&255,y/=256;for(this.u(I),I=Array(16),v=y=0;4>v;++v)for(var w=0;32>w;w+=8)I[y++]=this.g[v]>>>w&255;return I};function i(I,v){var y=l;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=v(I)}function o(I,v){this.h=v;for(var y=[],w=!0,R=I.length-1;0<=R;R--){var A=I[R]|0;w&&A==v||(y[R]=A,w=!1)}this.g=y}var l={};function c(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return d;if(0>I)return P(u(-I));for(var v=[],y=1,w=0;I>=y;w++)v[w]=I/y|0,y*=4294967296;return new o(v,0)}function h(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return P(h(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),w=d,R=0;R<I.length;R+=8){var A=Math.min(8,I.length-R),E=parseInt(I.substring(R,R+A),v);8>A?(A=u(Math.pow(v,A)),w=w.j(A).add(u(E))):(w=w.j(y),w=w.add(u(E)))}return w}var d=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(C(this))return-P(this).m();for(var I=0,v=1,y=0;y<this.g.length;y++){var w=this.i(y);I+=(0<=w?w:4294967296+w)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(C(this))return"-"+P(this).toString(I);for(var v=u(Math.pow(I,6)),y=this,w="";;){var R=N(y,v).g;y=L(y,R.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=R,S(y))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function C(I){return I.h==-1}t.l=function(I){return I=L(this,I),C(I)?-1:S(I)?0:1};function P(I){for(var v=I.g.length,y=[],w=0;w<v;w++)y[w]=~I.g[w];return new o(y,~I.h).add(g)}t.abs=function(){return C(this)?P(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),y=[],w=0,R=0;R<=v;R++){var A=w+(this.i(R)&65535)+(I.i(R)&65535),E=(A>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);w=E>>>16,A&=65535,E&=65535,y[R]=E<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function L(I,v){return I.add(P(v))}t.j=function(I){if(S(this)||S(I))return d;if(C(this))return C(I)?P(this).j(P(I)):P(P(this).j(I));if(C(I))return P(this.j(P(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var v=this.g.length+I.g.length,y=[],w=0;w<2*v;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<I.g.length;R++){var A=this.i(w)>>>16,E=this.i(w)&65535,Q=I.i(R)>>>16,_e=I.i(R)&65535;y[2*w+2*R]+=E*_e,D(y,2*w+2*R),y[2*w+2*R+1]+=A*_e,D(y,2*w+2*R+1),y[2*w+2*R+1]+=E*Q,D(y,2*w+2*R+1),y[2*w+2*R+2]+=A*Q,D(y,2*w+2*R+2)}for(w=0;w<v;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=v;w<2*v;w++)y[w]=0;return new o(y,0)};function D(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function x(I,v){this.g=I,this.h=v}function N(I,v){if(S(v))throw Error("division by zero");if(S(I))return new x(d,d);if(C(I))return v=N(P(I),v),new x(P(v.g),P(v.h));if(C(v))return v=N(I,P(v)),new x(P(v.g),v.h);if(30<I.g.length){if(C(I)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,w=v;0>=w.l(I);)y=H(y),w=H(w);var R=z(y,1),A=z(w,1);for(w=z(w,2),y=z(y,2);!S(w);){var E=A.add(w);0>=E.l(I)&&(R=R.add(y),A=E),w=z(w,1),y=z(y,1)}return v=L(I,R.j(v)),new x(R,v)}for(R=d;0<=I.l(v);){for(y=Math.max(1,Math.floor(I.m()/v.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=u(y),E=A.j(v);C(E)||0<E.l(I);)y-=w,A=u(y),E=A.j(v);S(A)&&(A=g),R=R.add(A),I=L(I,E)}return new x(R,I)}t.A=function(I){return N(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)&I.i(w);return new o(y,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)|I.i(w);return new o(y,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)^I.i(w);return new o(y,this.h^I.h)};function H(I){for(var v=I.g.length+1,y=[],w=0;w<v;w++)y[w]=I.i(w)<<1|I.i(w-1)>>>31;return new o(y,I.h)}function z(I,v){var y=v>>5;v%=32;for(var w=I.g.length-y,R=[],A=0;A<w;A++)R[A]=0<v?I.i(A+y)>>>v|I.i(A+y+1)<<32-v:I.i(A+y);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,by=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,_r=o}).apply(typeof Pp<"u"?Pp:typeof self<"u"?self:typeof window<"u"?window:{});var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ay,bi,Ry,va,Eu,Sy,Cy,Py;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ta=="object"&&ta];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var O=a[m];if(!(O in p))break e;p=p[O]}a=a[a.length-1],m=p[a],f=f(m),f!=m&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var p=0,m=!1,O={next:function(){if(!m&&p<a.length){var V=p++;return{value:f(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,m),a.apply(f,O)}}return function(){return a.apply(f,arguments)}}function g(a,f,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,g.apply(null,arguments)}function _(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(m,O,V){for(var G=Array(arguments.length-2),De=2;De<arguments.length;De++)G[De-2]=arguments[De];return f.prototype[O].apply(m,G)}}function C(a){const f=a.length;if(0<f){const p=Array(f);for(let m=0;m<f;m++)p[m]=a[m];return p}return[]}function P(a,f){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(c(m)){const O=a.length||0,V=m.length||0;a.length=O+V;for(let G=0;G<V;G++)a[O+G]=m[G]}else a.push(m)}}class L{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function D(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var H=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function z(a,f,p){for(const m in a)f.call(p,a[m],m,a)}function I(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function v(a){const f={};for(const p in a)f[p]=a[p];return f}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,f){let p,m;for(let O=1;O<arguments.length;O++){m=arguments[O];for(p in m)a[p]=m[p];for(let V=0;V<y.length;V++)p=y[V],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function R(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function A(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Nt;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Q{constructor(){this.h=this.g=null}add(f,p){const m=_e.get();m.set(f,p),this.h?this.h.next=m:this.g=m,this.h=m}}var _e=new L(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let we,ve=!1,Nt=new Q,Gt=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(Ut)}};var Ut=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(p){A(p)}var f=_e;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}ve=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var zn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,f),l.removeEventListener("test",p,f)}catch{}return a}();function sn(a,f){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(H){e:{try{N(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&sn.aa.h.call(this)}}S(sn,Be);var Ct={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(a,f,p,m,O){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!m,this.ha=O,this.key=++ee,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ae(a){this.src=a,this.g={},this.h=0}Ae.prototype.add=function(a,f,p,m,O){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=b(a,f,m,O);return-1<G?(f=a[G],p||(f.fa=!1)):(f=new X(f,this.src,V,!!m,O),f.fa=p,a.push(f)),f};function T(a,f){var p=f.type;if(p in a.g){var m=a.g[p],O=Array.prototype.indexOf.call(m,f,void 0),V;(V=0<=O)&&Array.prototype.splice.call(m,O,1),V&&(te(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function b(a,f,p,m){for(var O=0;O<a.length;++O){var V=a[O];if(!V.da&&V.listener==f&&V.capture==!!p&&V.ha==m)return O}return-1}var k="closure_lm_"+(1e6*Math.random()|0),F={};function $(a,f,p,m,O){if(Array.isArray(f)){for(var V=0;V<f.length;V++)$(a,f[V],p,m,O);return null}return p=ue(p),a&&a[M]?a.K(f,p,u(m)?!!m.capture:!1,O):U(a,f,p,!1,m,O)}function U(a,f,p,m,O,V){if(!f)throw Error("Invalid event type");var G=u(O)?!!O.capture:!!O,De=Y(a);if(De||(a[k]=De=new Ae(a)),p=De.add(f,p,m,G,V),p.proxy)return p;if(m=J(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)zn||(O=G),O===void 0&&(O=!1),a.addEventListener(f.toString(),m,O);else if(a.attachEvent)a.attachEvent(q(f.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function J(){function a(p){return f.call(a.src,a.listener,p)}const f=se;return a}function K(a,f,p,m,O){if(Array.isArray(f))for(var V=0;V<f.length;V++)K(a,f[V],p,m,O);else m=u(m)?!!m.capture:!!m,p=ue(p),a&&a[M]?(a=a.i,f=String(f).toString(),f in a.g&&(V=a.g[f],p=b(V,p,m,O),-1<p&&(te(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete a.g[f],a.h--)))):a&&(a=Y(a))&&(f=a.g[f.toString()],a=-1,f&&(a=b(f,p,m,O)),(p=-1<a?f[a]:null)&&W(p))}function W(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[M])T(f.i,a);else{var p=a.type,m=a.proxy;f.removeEventListener?f.removeEventListener(p,m,a.capture):f.detachEvent?f.detachEvent(q(p),m):f.addListener&&f.removeListener&&f.removeListener(m),(p=Y(f))?(T(p,a),p.h==0&&(p.src=null,f[k]=null)):te(a)}}}function q(a){return a in F?F[a]:F[a]="on"+a}function se(a,f){if(a.da)a=!0;else{f=new sn(f,this);var p=a.listener,m=a.ha||a.src;a.fa&&W(a),a=p.call(m,f)}return a}function Y(a){return a=a[k],a instanceof Ae?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[re]||(a[re]=function(f){return a.handleEvent(f)}),a[re])}function oe(){Ue.call(this),this.i=new Ae(this),this.M=this,this.F=null}S(oe,Ue),oe.prototype[M]=!0,oe.prototype.removeEventListener=function(a,f,p,m){K(this,a,f,p,m)};function me(a,f){var p,m=a.F;if(m)for(p=[];m;m=m.F)p.push(m);if(a=a.M,m=f.type||f,typeof f=="string")f=new Be(f,a);else if(f instanceof Be)f.target=f.target||a;else{var O=f;f=new Be(m,a),w(f,O)}if(O=!0,p)for(var V=p.length-1;0<=V;V--){var G=f.g=p[V];O=Ie(G,m,!0,f)&&O}if(G=f.g=a,O=Ie(G,m,!0,f)&&O,O=Ie(G,m,!1,f)&&O,p)for(V=0;V<p.length;V++)G=f.g=p[V],O=Ie(G,m,!1,f)&&O}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],m=0;m<p.length;m++)te(p[m]);delete a.g[f],a.h--}}this.F=null},oe.prototype.K=function(a,f,p,m){return this.i.add(String(a),f,!1,p,m)},oe.prototype.L=function(a,f,p,m){return this.i.add(String(a),f,!0,p,m)};function Ie(a,f,p,m){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,V=0;V<f.length;++V){var G=f[V];if(G&&!G.da&&G.capture==p){var De=G.listener,ot=G.ha||G.src;G.fa&&T(a.i,G),O=De.call(ot,m)!==!1&&O}}return O&&!m.defaultPrevented}function rt(a,f,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function st(a){a.g=rt(()=>{a.g=null,a.i&&(a.i=!1,st(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Bt extends Ue{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(a){Ue.call(this),this.h=a,this.g={}}S(dt,Ue);var Wn=[];function ti(a){z(a.g,function(f,p){this.g.hasOwnProperty(p)&&W(f)},a),a.g={}}dt.prototype.N=function(){dt.aa.N.call(this),ti(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var it=l.JSON.stringify,$t=l.JSON.parse,Oo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ql(){}Ql.prototype.h=null;function pf(a){return a.h||(a.h=a.i())}function gf(){}var ni={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yl(){Be.call(this,"d")}S(Yl,Be);function Jl(){Be.call(this,"c")}S(Jl,Be);var Mr={},mf=null;function Do(){return mf=mf||new oe}Mr.La="serverreachability";function _f(a){Be.call(this,Mr.La,a)}S(_f,Be);function ri(a){const f=Do();me(f,new _f(f))}Mr.STAT_EVENT="statevent";function yf(a,f){Be.call(this,Mr.STAT_EVENT,a),this.stat=f}S(yf,Be);function It(a){const f=Do();me(f,new yf(f,a))}Mr.Ma="timingevent";function vf(a,f){Be.call(this,Mr.Ma,a),this.size=f}S(vf,Be);function si(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function ii(){this.g=!0}ii.prototype.xa=function(){this.g=!1};function qE(a,f,p,m,O,V){a.info(function(){if(a.g)if(V)for(var G="",De=V.split("&"),ot=0;ot<De.length;ot++){var Re=De[ot].split("=");if(1<Re.length){var pt=Re[0];Re=Re[1];var gt=pt.split("_");G=2<=gt.length&&gt[1]=="type"?G+(pt+"="+Re+"&"):G+(pt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+m+") [attempt "+O+"]: "+f+`
`+p+`
`+G})}function HE(a,f,p,m,O,V,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+O+"]: "+f+`
`+p+`
`+V+" "+G})}function hs(a,f,p,m){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+WE(a,p)+(m?" "+m:"")})}function zE(a,f){a.info(function(){return"TIMEOUT: "+f})}ii.prototype.info=function(){};function WE(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var m=p[a];if(!(2>m.length)){var O=m[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<O.length;G++)O[G]=""}}}}return it(p)}catch{return f}}var No={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ef={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xl;function xo(){}S(xo,Ql),xo.prototype.g=function(){return new XMLHttpRequest},xo.prototype.i=function(){return{}},Xl=new xo;function Kn(a,f,p,m){this.j=a,this.i=f,this.l=p,this.R=m||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tf}function Tf(){this.i=null,this.g="",this.h=!1}var wf={},Zl={};function ec(a,f,p){a.L=1,a.v=Fo(In(f)),a.m=p,a.P=!0,If(a,null)}function If(a,f){a.F=Date.now(),Vo(a),a.A=In(a.v);var p=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Mf(p.i,"t",m),a.C=0,p=a.j.J,a.h=new Tf,a.g=td(a.j,p?f:null,!a.m),0<a.O&&(a.M=new Bt(g(a.Y,a,a.g),a.O)),f=a.U,p=a.g,m=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Wn[0]=O.toString()),O=Wn);for(var V=0;V<O.length;V++){var G=$(p,O[V],m||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),ri(),qE(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const f=this.M;f&&bn(a)==3?f.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const gt=bn(this.g);var f=this.g.Ba();const ps=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Hf(this.g)))){this.J||gt!=4||f==7||(f==8||0>=ps?ri(3):ri(2)),tc(this);var p=this.g.Z();this.X=p;t:if(bf(this)){var m=Hf(this.g);a="";var O=m.length,V=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),oi(this);var G="";break t}this.h.i=new l.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,a+=this.h.i.decode(m[f],{stream:!(V&&f==O-1)});m.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,HE(this.i,this.u,this.A,this.l,this.R,gt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var De,ot=this.g;if((De=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(De)){var Re=De;break t}}Re=null}if(p=Re)hs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nc(this,p);else{this.o=!1,this.s=3,It(12),Fr(this),oi(this);break e}}if(this.P){p=!0;let Qt;for(;!this.J&&this.C<G.length;)if(Qt=KE(this,G),Qt==Zl){gt==4&&(this.s=4,It(14),p=!1),hs(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==wf){this.s=4,It(15),hs(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else hs(this.i,this.l,Qt,null),nc(this,Qt);if(bf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||G.length!=0||this.h.h||(this.s=1,It(16),p=!1),this.o=this.o&&p,!p)hs(this.i,this.l,G,"[Invalid Chunked Response]"),Fr(this),oi(this);else if(0<G.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),lc(pt),pt.M=!0,It(11))}}else hs(this.i,this.l,G,null),nc(this,G);gt==4&&Fr(this),this.o&&!this.J&&(gt==4?Jf(this.j,this):(this.o=!1,Vo(this)))}else uT(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Fr(this),oi(this)}}}catch{}finally{}};function bf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function KE(a,f){var p=a.C,m=f.indexOf(`
`,p);return m==-1?Zl:(p=Number(f.substring(p,m)),isNaN(p)?wf:(m+=1,m+p>f.length?Zl:(f=f.slice(m,m+p),a.C=m+p,f)))}Kn.prototype.cancel=function(){this.J=!0,Fr(this)};function Vo(a){a.S=Date.now()+a.I,Af(a,a.I)}function Af(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=si(g(a.ba,a),f)}function tc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(zE(this.i,this.A),this.L!=2&&(ri(),It(17)),Fr(this),this.s=2,oi(this)):Af(this,this.S-a)};function oi(a){a.j.G==0||a.J||Jf(a.j,a)}function Fr(a){tc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,ti(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function nc(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||rc(p.h,a))){if(!a.K&&rc(p.h,a)&&p.G==3){try{var m=p.Da.g.parse(f)}catch{m=null}if(Array.isArray(m)&&m.length==3){var O=m;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ho(p),jo(p);else break e;ac(p),It(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=si(g(p.Za,p),6e3));if(1>=Cf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Br(p,11)}else if((a.K||p.g==a)&&Ho(p),!D(f))for(O=p.Da.g.parse(f),f=0;f<O.length;f++){let Re=O[f];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const pt=Re[3];pt!=null&&(p.la=pt,p.j.info("VER="+p.la));const gt=Re[4];gt!=null&&(p.Aa=gt,p.j.info("SVER="+p.Aa));const ps=Re[5];ps!=null&&typeof ps=="number"&&0<ps&&(m=1.5*ps,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const Qt=a.g;if(Qt){const Wo=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wo){var V=m.h;V.g||Wo.indexOf("spdy")==-1&&Wo.indexOf("quic")==-1&&Wo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(sc(V,V.h),V.h=null))}if(m.D){const cc=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;cc&&(m.ya=cc,Ve(m.I,m.D,cc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var G=a;if(m.qa=ed(m,m.J?m.ia:null,m.W),G.K){Pf(m.h,G);var De=G,ot=m.L;ot&&(De.I=ot),De.B&&(tc(De),Vo(De)),m.g=G}else Qf(m);0<p.i.length&&qo(p)}else Re[0]!="stop"&&Re[0]!="close"||Br(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Br(p,7):oc(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}ri(4)}catch{}}var GE=class{constructor(a,f){this.g=a,this.map=f}};function Rf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cf(a){return a.h?1:a.g?a.g.size:0}function rc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function sc(a,f){a.g?a.g.add(f):a.h=f}function Pf(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Rf.prototype.cancel=function(){if(this.i=kf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return C(a.i)}function QE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],p=a.length,m=0;m<p;m++)f.push(a[m]);return f}f=[],p=0;for(m in a)f[p++]=a[m];return f}function YE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const m in a)f[p++]=m;return f}}}function Of(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=YE(a),m=QE(a),O=m.length,V=0;V<O;V++)f.call(void 0,m[V],p&&p[V],a)}var Df=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JE(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var m=a[p].indexOf("="),O=null;if(0<=m){var V=a[p].substring(0,m);O=a[p].substring(m+1)}else V=a[p];f(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ur){this.h=a.h,Lo(this,a.j),this.o=a.o,this.g=a.g,Mo(this,a.s),this.l=a.l;var f=a.i,p=new ci;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Nf(this,p),this.m=a.m}else a&&(f=String(a).match(Df))?(this.h=!1,Lo(this,f[1]||"",!0),this.o=ai(f[2]||""),this.g=ai(f[3]||"",!0),Mo(this,f[4]),this.l=ai(f[5]||"",!0),Nf(this,f[6]||"",!0),this.m=ai(f[7]||"")):(this.h=!1,this.i=new ci(null,this.h))}Ur.prototype.toString=function(){var a=[],f=this.j;f&&a.push(li(f,xf,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(li(f,xf,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(li(p,p.charAt(0)=="/"?eT:ZE,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",li(p,nT)),a.join("")};function In(a){return new Ur(a)}function Lo(a,f,p){a.j=p?ai(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Mo(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Nf(a,f,p){f instanceof ci?(a.i=f,rT(a.i,a.h)):(p||(f=li(f,tT)),a.i=new ci(f,a.h))}function Ve(a,f,p){a.i.set(f,p)}function Fo(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ai(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function li(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,XE),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function XE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xf=/[#\/\?@]/g,ZE=/[#\?:]/g,eT=/[#\?]/g,tT=/[#\?@]/g,nT=/#/g;function ci(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&JE(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=ci.prototype,t.add=function(a,f){Gn(this),this.i=null,a=fs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function Vf(a,f){Gn(a),f=fs(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Lf(a,f){return Gn(a),f=fs(a,f),a.g.has(f)}t.forEach=function(a,f){Gn(this),this.g.forEach(function(p,m){p.forEach(function(O){a.call(f,O,m,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let m=0;m<f.length;m++){const O=a[m];for(let V=0;V<O.length;V++)p.push(f[m])}return p},t.V=function(a){Gn(this);let f=[];if(typeof a=="string")Lf(this,a)&&(f=f.concat(this.g.get(fs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return Gn(this),this.i=null,a=fs(this,a),Lf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Mf(a,f,p){Vf(a,f),0<p.length&&(a.i=null,a.g.set(fs(a,f),C(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var m=f[p];const V=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var O=V;G[m]!==""&&(O+="="+encodeURIComponent(String(G[m]))),a.push(O)}}return this.i=a.join("&")};function fs(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function rT(a,f){f&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(p,m){var O=m.toLowerCase();m!=O&&(Vf(this,m),Mf(this,O,p))},a)),a.j=f}function sT(a,f){const p=new ii;if(l.Image){const m=new Image;m.onload=_(Qn,p,"TestLoadImage: loaded",!0,f,m),m.onerror=_(Qn,p,"TestLoadImage: error",!1,f,m),m.onabort=_(Qn,p,"TestLoadImage: abort",!1,f,m),m.ontimeout=_(Qn,p,"TestLoadImage: timeout",!1,f,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else f(!1)}function iT(a,f){const p=new ii,m=new AbortController,O=setTimeout(()=>{m.abort(),Qn(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(O),V.ok?Qn(p,"TestPingServer: ok",!0,f):Qn(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Qn(p,"TestPingServer: error",!1,f)})}function Qn(a,f,p,m,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),m(p)}catch{}}function oT(){this.g=new Oo}function aT(a,f,p){const m=p||"";try{Of(a,function(O,V){let G=O;u(O)&&(G=it(O)),f.push(m+V+"="+encodeURIComponent(G))})}catch(O){throw f.push(m+"type="+encodeURIComponent("_badmap")),O}}function Uo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Uo,Ql),Uo.prototype.g=function(){return new Bo(this.l,this.j)},Uo.prototype.i=function(a){return function(){return a}}({});function Bo(a,f){oe.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Bo,oe),t=Bo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,hi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,hi(this)),this.g&&(this.readyState=3,hi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ff(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ff(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?ui(this):hi(this),this.readyState==3&&Ff(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ui(this))},t.Qa=function(a){this.g&&(this.response=a,ui(this))},t.ga=function(){this.g&&ui(this)};function ui(a){a.readyState=4,a.l=null,a.j=null,a.v=null,hi(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function hi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Uf(a){let f="";return z(a,function(p,m){f+=m,f+=":",f+=p,f+=`\r
`}),f}function ic(a,f,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=Uf(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ve(a,f,p))}function qe(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(qe,oe);var lT=/^https?$/i,cT=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xl.g(),this.v=this.o?pf(this.o):pf(Xl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(V){Bf(this,V);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var O in m)p.set(O,m[O]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())p.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(cT,f,void 0))||m||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of p)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qf(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Bf(this,V)}};function Bf(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,$f(a),$o(a)}function $f(a){a.A||(a.A=!0,me(a,"complete"),me(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,me(this,"complete"),me(this,"abort"),$o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$o(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jf(this):this.bb())},t.bb=function(){jf(this)};function jf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bn(a)!=4||a.Z()!=2)){if(a.u&&bn(a)==4)rt(a.Ea,0,a);else if(me(a,"readystatechange"),bn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var m;if(m=G===0){var O=String(a.D).match(Df)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),m=!lT.test(O?O.toLowerCase():"")}p=m}if(p)me(a,"complete"),me(a,"success");else{a.m=6;try{var V=2<bn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",$f(a)}}finally{$o(a)}}}}function $o(a,f){if(a.g){qf(a);const p=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||me(a,"ready");try{p.onreadystatechange=m}catch{}}}function qf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),$t(f)}};function Hf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uT(a){const f={};a=(a.g&&2<=bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(D(a[m]))continue;var p=R(a[m]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=f[O]||[];f[O]=V,V.push(p)}I(f,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fi(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function zf(a){this.Aa=0,this.i=[],this.j=new ii,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fi("baseRetryDelayMs",5e3,a),this.cb=fi("retryDelaySeedMs",1e4,a),this.Wa=fi("forwardChannelMaxRetries",2,a),this.wa=fi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Rf(a&&a.concurrentRequestLimit),this.Da=new oT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zf.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,m){It(0),this.W=a,this.H=f||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=ed(this,null,this.W),qo(this)};function oc(a){if(Wf(a),a.G==3){var f=a.U++,p=In(a.I);if(Ve(p,"SID",a.K),Ve(p,"RID",f),Ve(p,"TYPE","terminate"),di(a,p),f=new Kn(a,a.j,f),f.L=2,f.v=Fo(In(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=f.v,p=!0),p||(f.g=td(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Vo(f)}Zf(a)}function jo(a){a.g&&(lc(a),a.g.cancel(),a.g=null)}function Wf(a){jo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ho(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function qo(a){if(!Sf(a.h)&&!a.s){a.s=!0;var f=a.Ga;we||Gt(),ve||(we(),ve=!0),Nt.add(f,a),a.B=0}}function hT(a,f){return Cf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=si(g(a.Ga,a,f),Xf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new Kn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),w(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(f+=m,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=Gf(this,O,f),p=In(this.I),Ve(p,"RID",a),Ve(p,"CVER",22),this.D&&Ve(p,"X-HTTP-Session-Id",this.D),di(this,p),V&&(this.O?f="headers="+encodeURIComponent(String(Uf(V)))+"&"+f:this.m&&ic(p,this.m,V)),sc(this.h,O),this.Ua&&Ve(p,"TYPE","init"),this.P?(Ve(p,"$req",f),Ve(p,"SID","null"),O.T=!0,ec(O,p,null)):ec(O,p,f),this.G=2}}else this.G==3&&(a?Kf(this,a):this.i.length==0||Sf(this.h)||Kf(this))};function Kf(a,f){var p;f?p=f.l:p=a.U++;const m=In(a.I);Ve(m,"SID",a.K),Ve(m,"RID",p),Ve(m,"AID",a.T),di(a,m),a.m&&a.o&&ic(m,a.m,a.o),p=new Kn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Gf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),sc(a.h,p),ec(p,m,f)}function di(a,f){a.H&&z(a.H,function(p,m){Ve(f,m,p)}),a.l&&Of({},function(p,m){Ve(f,m,p)})}function Gf(a,f,p){p=Math.min(a.i.length,p);var m=a.l?g(a.l.Na,a.l,a):null;e:{var O=a.i;let V=-1;for(;;){const G=["count="+p];V==-1?0<p?(V=O[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let De=!0;for(let ot=0;ot<p;ot++){let Re=O[ot].g;const pt=O[ot].map;if(Re-=V,0>Re)V=Math.max(0,O[ot].g-100),De=!1;else try{aT(pt,G,"req"+Re+"_")}catch{m&&m(pt)}}if(De){m=G.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,m}function Qf(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;we||Gt(),ve||(we(),ve=!0),Nt.add(f,a),a.v=0}}function ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=si(g(a.Fa,a),Xf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Yf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=si(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),jo(this),Yf(this))};function lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Yf(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=In(a.qa);Ve(f,"RID","rpc"),Ve(f,"SID",a.K),Ve(f,"AID",a.T),Ve(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(f,"TO",a.ja),Ve(f,"TYPE","xmlhttp"),di(a,f),a.m&&a.o&&ic(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Fo(In(f)),p.m=null,p.P=!0,If(p,a)}t.Za=function(){this.C!=null&&(this.C=null,jo(this),ac(this),It(19))};function Ho(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Jf(a,f){var p=null;if(a.g==f){Ho(a),lc(a),a.g=null;var m=2}else if(rc(a.h,f))p=f.D,Pf(a.h,f),m=1;else return;if(a.G!=0){if(f.o)if(m==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var O=a.B;m=Do(),me(m,new vf(m,p)),qo(a)}else Qf(a);else if(O=f.s,O==3||O==0&&0<f.X||!(m==1&&hT(a,f)||m==2&&ac(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),O){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function Xf(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function Br(a,f){if(a.j.info("Error code "+f),f==2){var p=g(a.fb,a),m=a.Xa;const O=!m;m=new Ur(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Lo(m,"https"),Fo(m),O?sT(m.toString(),p):iT(m.toString(),p)}else It(2);a.G=0,a.l&&a.l.sa(f),Zf(a),Wf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Zf(a){if(a.G=0,a.ka=[],a.l){const f=kf(a.h);(f.length!=0||a.i.length!=0)&&(P(a.ka,f),P(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function ed(a,f,p){var m=p instanceof Ur?In(p):new Ur(p);if(m.g!="")f&&(m.g=f+"."+m.g),Mo(m,m.s);else{var O=l.location;m=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var V=new Ur(null);m&&Lo(V,m),f&&(V.g=f),O&&Mo(V,O),p&&(V.l=p),m=V}return p=a.D,f=a.ya,p&&f&&Ve(m,p,f),Ve(m,"VER",a.la),di(a,m),m}function td(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new qe(new Uo({eb:p})):new qe(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nd(){}t=nd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function zo(){}zo.prototype.g=function(a,f){return new xt(a,f)};function xt(a,f){oe.call(this),this.g=new zf(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!D(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!D(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new ds(this)}S(xt,oe),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){oc(this.g)},xt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=it(a),a=p);f.i.push(new GE(f.Ya++,a)),f.G==3&&qo(f)},xt.prototype.N=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,xt.aa.N.call(this)};function rd(a){Yl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}S(rd,Yl);function sd(){Jl.call(this),this.status=1}S(sd,Jl);function ds(a){this.g=a}S(ds,nd),ds.prototype.ua=function(){me(this.g,"a")},ds.prototype.ta=function(a){me(this.g,new rd(a))},ds.prototype.sa=function(a){me(this.g,new sd)},ds.prototype.ra=function(){me(this.g,"b")},zo.prototype.createWebChannel=zo.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Py=function(){return new zo},Cy=function(){return Do()},Sy=Mr,Eu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},No.NO_ERROR=0,No.TIMEOUT=8,No.HTTP_ERROR=6,va=No,Ef.COMPLETE="complete",Ry=Ef,gf.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",oe.prototype.listen=oe.prototype.K,bi=gf,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,Ay=qe}).apply(typeof ta<"u"?ta:typeof self<"u"?self:typeof window<"u"?window:{});const kp="@firebase/firestore",Op="4.8.0";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let Ys="11.10.0";/**
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
 */const ss=new hh("@firebase/firestore");function ws(){return ss.logLevel}function Z(t,...e){if(ss.logLevel<=Ee.DEBUG){const n=e.map(Ih);ss.debug(`Firestore (${Ys}): ${t}`,...n)}}function Un(t,...e){if(ss.logLevel<=Ee.ERROR){const n=e.map(Ih);ss.error(`Firestore (${Ys}): ${t}`,...n)}}function br(t,...e){if(ss.logLevel<=Ee.WARN){const n=e.map(Ih);ss.warn(`Firestore (${Ys}): ${t}`,...n)}}function Ih(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ky(t,r,n)}function ky(t,e,n){let r=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Un(r),new Error(r)}function ke(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||ky(e,s,r)}function ge(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Oy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class MS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FS{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string",31837,{l:r}),new Oy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class US{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class BS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new US(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $S{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ke(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function jS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Dy(){return new TextEncoder}/**
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
 */class bh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=jS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Tu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ye(r,s);{const i=Dy(),o=qS(i.encode(Np(t,n)),i.encode(Np(e,n)));return o!==0?o:ye(r,s)}}n+=r>65535?2:1}return ye(t.length,e.length)}function Np(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function qS(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function Bs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const xp="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=ln.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),s=ln.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?ln.extractNumericId(e).compare(ln.extractNumericId(n)):Tu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class Le extends ln{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const HS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends ln{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return HS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xp}static keyField(){return new ht([xp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Le.fromString(e))}static fromName(e){return new ie(Le.fromString(e).popFirst(5))}static empty(){return new ie(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Le(e.slice()))}}/**
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
 */function Ny(t,e,n){if(!n)throw new ne(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zS(t,e,n,r){if(e===!0&&r===!0)throw new ne(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vp(t){if(!ie.isDocumentKey(t))throw new ne(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lp(t){if(ie.isDocumentKey(t))throw new ne(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ah(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Bn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ah(t);throw new ne(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ro(t,e){if(!xy(t))throw new ne(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ne(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const Mp=-62135596800,Fp=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Fp);return new Me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Mp)throw new ne(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fp}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ro(e,Me._jsonSchema))return new Me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Mp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Me._jsonSchemaVersion="firestore/timestamp/1.0",Me._jsonSchema={type:Qe("string",Me._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new Me(0,0))}static max(){return new de(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const io=-1;function WS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Ar(s,ie.empty(),e)}function KS(t){return new Ar(t.readTime,t.key,io)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(de.min(),ie.empty(),io)}static max(){return new Ar(de.max(),ie.empty(),io)}}function GS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const QS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Js(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==QS)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function JS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Cl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Cl.ue=-1;/**
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
 */const Rh=-1;function Pl(t){return t==null}function Qa(t){return t===0&&1/t==-1/0}function XS(t){return typeof t=="number"&&Number.isInteger(t)&&!Qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Vy="";function ZS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Up(e)),e=eC(t.get(n),e);return Up(e)}function eC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Vy:n+="";break;default:n+=i}}return n}function Up(t){return t+Vy+""}/**
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
 */function Bp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ly(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new na(this.root,e,this.comparator,!1)}getReverseIterator(){return new na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new na(this.root,e,this.comparator,!0)}}class na{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $p(this.data.getIterator())}getIteratorFrom(e){return new $p(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class $p{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Ze(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class My extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new My("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const tC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(ke(!!t,39018),typeof t=="string"){let e=0;const n=tC.exec(t);if(ke(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */const Fy="server_timestamp",Uy="__type__",By="__previous_value__",$y="__local_write_time__";function Sh(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Uy])===null||n===void 0?void 0:n.stringValue)===Fy}function kl(t){const e=t.mapValue.fields[By];return Sh(e)?kl(e):e}function oo(t){const e=Rr(t.mapValue.fields[$y].timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class nC{constructor(e,n,r,s,i,o,l,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const Ya="(default)";class ao{constructor(e,n){this.projectId=e,this.database=n||Ya}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database===Ya}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const jy="__type__",rC="__max__",ra={mapValue:{}},qy="__vector__",Ja="value";function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sh(t)?4:iC(t)?9007199254740991:sC(t)?10:11:le(28295,{value:t})}function En(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),l=Rr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ke(s.doubleValue),l=Ke(i.doubleValue);return o===l?Qa(o)===Qa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Bp(o)!==Bp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!En(o[c],l[c])))return!1;return!0}(t,e);default:return le(52216,{left:t})}}function lo(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ke(i.integerValue||i.doubleValue),c=Ke(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return jp(t.timestampValue,e.timestampValue);case 4:return jp(oo(t),oo(e));case 5:return Tu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Sr(i),c=Sr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=ye(l[u],c[u]);if(h!==0)return h}return ye(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(Ke(i.latitude),Ke(o.latitude));return l!==0?l:ye(Ke(i.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,h;const d=i.fields||{},g=o.fields||{},_=(l=d[Ja])===null||l===void 0?void 0:l.arrayValue,S=(c=g[Ja])===null||c===void 0?void 0:c.arrayValue,C=ye(((u=_?.values)===null||u===void 0?void 0:u.length)||0,((h=S?.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:qp(_,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ra.mapValue&&o===ra.mapValue)return 0;if(i===ra.mapValue)return 1;if(o===ra.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const g=Tu(c[d],h[d]);if(g!==0)return g;const _=$s(l[c[d]],u[h[d]]);if(_!==0)return _}return ye(c.length,h.length)}(t.mapValue,e.mapValue);default:throw le(23264,{le:n})}}function jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Rr(t),r=Rr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function qp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=$s(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function js(t){return wu(t)}function wu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wu(n.fields[o])}`;return s+"}"}(t.mapValue):le(61005,{value:t})}function Ea(t){switch(Cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kl(t);return e?16+Ea(e):16;case 5:return 2*t.stringValue.length;case 6:return Sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ea(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Vr(r.fields,(i,o)=>{s+=i.length+Ea(o)}),s}(t.mapValue);default:throw le(13486,{value:t})}}function Iu(t){return!!t&&"integerValue"in t}function Ch(t){return!!t&&"arrayValue"in t}function Hp(t){return!!t&&"nullValue"in t}function zp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ta(t){return!!t&&"mapValue"in t}function sC(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[jy])===null||n===void 0?void 0:n.stringValue)===qy}function $i(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$i(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$i(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===rC}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$i(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=$i(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt($i(this.value))}}function Hy(t){const e=[];return Vr(t.fields,(n,r)=>{const s=new ht([n]);if(Ta(r)){const i=Hy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
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
 */class Et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,de.min(),de.min(),de.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,de.min(),de.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,de.min(),de.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xa{constructor(e,n){this.position=e,this.inclusive=n}}function Wp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=$s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Za{constructor(e,n="asc"){this.field=e,this.dir=n}}function oC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class zy{}class Je extends zy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lC(e,n,r):n==="array-contains"?new hC(e,r):n==="in"?new fC(e,r):n==="not-in"?new dC(e,r):n==="array-contains-any"?new pC(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cC(e,r):new uC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison($s(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends zy{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Tn(e,n)}matches(e){return Wy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Wy(t){return t.op==="and"}function Ky(t){return aC(t)&&Wy(t)}function aC(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function bu(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+js(t.value);if(Ky(t))return t.filters.map(e=>bu(e)).join(",");{const e=t.filters.map(n=>bu(n)).join(",");return`${t.op}(${e})`}}function Gy(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)}(t,e):t instanceof Tn?function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Gy(o,s.filters[l]),!0):!1}(t,e):void le(19439)}function Qy(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${js(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Qy).join(" ,")+"}"}(t):"Filter"}class lC extends Je{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class cC extends Je{constructor(e,n){super(e,"in",n),this.keys=Yy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uC extends Je{constructor(e,n){super(e,"not-in",n),this.keys=Yy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Yy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class hC extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ch(n)&&lo(n.arrayValue,this.value)}}class fC extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&lo(this.value.arrayValue,n)}}class dC extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!lo(this.value.arrayValue,n)}}class pC extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ch(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>lo(this.value.arrayValue,r))}}/**
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
 */class gC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Gp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new gC(t,e,n,r,s,i,o)}function Ph(t){const e=ge(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>js(r)).join(",")),e.Pe=n}return e.Pe}function kh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Gy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kp(t.startAt,e.startAt)&&Kp(t.endAt,e.endAt)}function Au(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ol{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function mC(t,e,n,r,s,i,o,l){return new Ol(t,e,n,r,s,i,o,l)}function Oh(t){return new Ol(t)}function Qp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _C(t){return t.collectionGroup!==null}function ji(t){const e=ge(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(ht.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Za(i,r))}),n.has(ht.keyField().canonicalString())||e.Te.push(new Za(ht.keyField(),r))}return e.Te}function mn(t){const e=ge(t);return e.Ie||(e.Ie=yC(e,ji(t))),e.Ie}function yC(t,e){if(t.limitType==="F")return Gp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Za(s.field,i)});const n=t.endAt?new Xa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xa(t.startAt.position,t.startAt.inclusive):null;return Gp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ru(t,e,n){return new Ol(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dl(t,e){return kh(mn(t),mn(e))&&t.limitType===e.limitType}function Jy(t){return`${Ph(mn(t))}|lt:${t.limitType}`}function Is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Qy(s)).join(", ")}]`),Pl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>js(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>js(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Nl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ji(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Wp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,ji(r),s)||r.endAt&&!function(o,l,c){const u=Wp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,ji(r),s))}(t,e)}function vC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xy(t){return(e,n)=>{let r=!1;for(const s of ji(t)){const i=EC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function EC(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?$s(c,u):le(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
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
 */class cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ly(this.inner)}size(){return this.innerSize}}/**
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
 */const TC=new je(ie.comparator);function $n(){return TC}const Zy=new je(ie.comparator);function Ai(...t){let e=Zy;for(const n of t)e=e.insert(n.key,n);return e}function ev(t){let e=Zy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return qi()}function tv(){return qi()}function qi(){return new cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const wC=new je(ie.comparator),IC=new Ze(ie.comparator);function Te(...t){let e=IC;for(const n of t)e=e.add(n);return e}const bC=new Ze(ye);function AC(){return bC}/**
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
 */function Dh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qa(e)?"-0":e}}function nv(t){return{integerValue:""+t}}function RC(t,e){return XS(e)?nv(e):Dh(t,e)}/**
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
 */class xl{constructor(){this._=void 0}}function SC(t,e,n){return t instanceof co?function(s,i){const o={fields:{[Uy]:{stringValue:Fy},[$y]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sh(i)&&(i=kl(i)),i&&(o.fields[By]=i),{mapValue:o}}(n,e):t instanceof uo?sv(t,e):t instanceof ho?iv(t,e):function(s,i){const o=rv(s,i),l=Yp(o)+Yp(s.Ee);return Iu(o)&&Iu(s.Ee)?nv(l):Dh(s.serializer,l)}(t,e)}function CC(t,e,n){return t instanceof uo?sv(t,e):t instanceof ho?iv(t,e):n}function rv(t,e){return t instanceof el?function(r){return Iu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class co extends xl{}class uo extends xl{constructor(e){super(),this.elements=e}}function sv(t,e){const n=ov(e);for(const r of t.elements)n.some(s=>En(s,r))||n.push(r);return{arrayValue:{values:n}}}class ho extends xl{constructor(e){super(),this.elements=e}}function iv(t,e){let n=ov(e);for(const r of t.elements)n=n.filter(s=>!En(s,r));return{arrayValue:{values:n}}}class el extends xl{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Yp(t){return Ke(t.integerValue||t.doubleValue)}function ov(t){return Ch(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class PC{constructor(e,n){this.field=e,this.transform=n}}function kC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof uo&&s instanceof uo||r instanceof ho&&s instanceof ho?Bs(r.elements,s.elements,En):r instanceof el&&s instanceof el?En(r.Ee,s.Ee):r instanceof co&&s instanceof co}(t.transform,e.transform)}class OC{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vl{}function av(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nh(t.key,en.none()):new So(t.key,t.data,en.none());{const n=t.data,r=Dt.empty();let s=new Ze(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new Mt(s.toArray()),en.none())}}function DC(t,e,n){t instanceof So?function(s,i,o){const l=s.value.clone(),c=Xp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(s,i,o){if(!wa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Xp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(lv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Hi(t,e,n,r){return t instanceof So?function(i,o,l,c){if(!wa(i.precondition,o))return l;const u=i.value.clone(),h=Zp(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(i,o,l,c){if(!wa(i.precondition,o))return l;const u=Zp(i.fieldTransforms,c,o),h=o.data;return h.setAll(lv(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,l){return wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function NC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=rv(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function Jp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bs(r,s,(i,o)=>kC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends Vl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends Vl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xp(t,e,n){const r=new Map;ke(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,CC(o,l,n[s]))}return r}function Zp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,SC(i,o,e))}return r}class Nh extends Vl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xC extends Vl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class VC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&DC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=av(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,r)=>Jp(n,r))&&Bs(this.baseMutations,e.baseMutations,(n,r)=>Jp(n,r))}}class xh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return wC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new xh(e,n,r,s)}}/**
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
 */class LC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class MC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,be;function FC(t){switch(t){case j.OK:return le(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function cv(t){if(t===void 0)return Un("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ge.OK:return j.OK;case Ge.CANCELLED:return j.CANCELLED;case Ge.UNKNOWN:return j.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return j.INTERNAL;case Ge.UNAVAILABLE:return j.UNAVAILABLE;case Ge.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ge.NOT_FOUND:return j.NOT_FOUND;case Ge.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ge.ABORTED:return j.ABORTED;case Ge.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ge.DATA_LOSS:return j.DATA_LOSS;default:return le(39323,{code:t})}}(be=Ge||(Ge={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const UC=new _r([4294967295,4294967295],0);function eg(t){const e=Dy().encode(t),n=new by;return n.update(e),new Uint8Array(n.digest())}function tg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _r([n,r],0),new _r([s,i],0)]}class Vh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ri(`Invalid padding: ${n}`);if(r<0)throw new Ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ri(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ri(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=_r.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(_r.fromNumber(r)));return s.compare(UC)===1&&(s=new _r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=eg(e),[r,s]=tg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Vh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=eg(e),[r,s]=tg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ll{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ll(de.min(),s,new je(ye),$n(),Te())}}class Co{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Co(r,n,Te(),Te(),Te())}}/**
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
 */class Ia{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class uv{constructor(e,n){this.targetId=e,this.De=n}}class hv{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ng{constructor(){this.ve=0,this.Ce=rg(),this.Fe=ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Te(),n=Te(),r=Te();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}}),new Co(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=rg()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ke(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class BC{constructor(e){this.We=e,this.Ge=new Map,this.ze=$n(),this.je=sa(),this.Je=sa(),this.He=new je(ye)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:le(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Au(i))if(r===0){const o=new ie(i.path);this.Xe(n,o,Et.newNoDocument(o,de.min()))}else ke(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Sr(r).toUint8Array()}catch(c){if(c instanceof My)return br("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Vh(o,s,i)}catch(c){return br(c instanceof Ri?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&Au(l.target)){const c=new ie(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Et.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=Te();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new Ll(e,n,this.He,this.ze,r);return this.ze=$n(),this.je=sa(),this.Je=sa(),this.He=new je(ye),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new ng,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ze(ye),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ze(ye),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ng),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function sa(){return new je(ie.comparator)}function rg(){return new je(ie.comparator)}const $C={asc:"ASCENDING",desc:"DESCENDING"},jC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qC={and:"AND",or:"OR"};class HC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Su(t,e){return t.useProto3Json||Pl(e)?e:{value:e}}function tl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zC(t,e){return tl(t,e.toTimestamp())}function _n(t){return ke(!!t,49232),de.fromTimestamp(function(n){const r=Rr(n);return new Me(r.seconds,r.nanos)}(t))}function Lh(t,e){return Cu(t,e).canonicalString()}function Cu(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dv(t){const e=Le.fromString(t);return ke(yv(e),10190,{key:e.toString()}),e}function Pu(t,e){return Lh(t.databaseId,e.path)}function Nc(t,e){const n=dv(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(gv(n))}function pv(t,e){return Lh(t.databaseId,e)}function WC(t){const e=dv(t);return e.length===4?Le.emptyPath():gv(e)}function ku(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gv(t){return ke(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function sg(t,e,n){return{name:Pu(t,e),fields:n.value.mapValue.fields}}function KC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ke(h===void 0||typeof h=="string",58123),ft.fromBase64String(h||"")):(ke(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ft.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?j.UNKNOWN:cv(u.code);return new ne(h,u.message||"")}(o);n=new hv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nc(t,r.document.name),i=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):de.min(),l=new Dt({mapValue:{fields:r.document.fields}}),c=Et.newFoundDocument(s,i,o,l),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ia(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nc(t,r.document),i=r.readTime?_n(r.readTime):de.min(),o=Et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ia([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nc(t,r.document),i=r.removedTargetIds||[];n=new Ia([],i,s,null)}else{if(!("filter"in e))return le(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new MC(s,i),l=r.targetId;n=new uv(l,o)}}return n}function GC(t,e){let n;if(e instanceof So)n={update:sg(t,e.key,e.value)};else if(e instanceof Nh)n={delete:Pu(t,e.key)};else if(e instanceof Lr)n={update:sg(t,e.key,e.data),updateMask:rP(e.fieldMask)};else{if(!(e instanceof xC))return le(16599,{Rt:e.type});n={verify:Pu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof co)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ho)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof el)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw le(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)}(t,e.precondition)),n}function QC(t,e){return t&&t.length>0?(ke(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?_n(s.updateTime):_n(i);return o.isEqual(de.min())&&(o=_n(i)),new OC(o,s.transformResults||[])}(n,e))):[]}function YC(t,e){return{documents:[pv(t,e.path)]}}function JC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pv(t,s);const i=function(u){if(u.length!==0)return _v(Tn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:bs(g.field),direction:eP(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Su(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:n,parent:s}}function XC(t){let e=WC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const g=mv(d);return g instanceof Tn&&Ky(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(S){return new Za(As(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(d){let g;return g=typeof d=="object"?d.value:d,Pl(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(d){const g=!!d.before,_=d.values||[];return new Xa(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const g=!d.before,_=d.values||[];return new Xa(_,g)}(n.endAt)),mC(e,s,o,i,l,"F",c,u)}function ZC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=As(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=As(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=As(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(As(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>mv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}}(n.compositeFilter.op))}(t):le(30097,{filter:t})}function eP(t){return $C[t]}function tP(t){return jC[t]}function nP(t){return qC[t]}function bs(t){return{fieldPath:t.canonicalString()}}function As(t){return ht.fromServerFormat(t.fieldPath)}function _v(t){return t instanceof Je?function(n){if(n.op==="=="){if(zp(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NAN"}};if(Hp(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(zp(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NOT_NAN"}};if(Hp(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(n.field),op:tP(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(s=>_v(s));return r.length===1?r[0]:{compositeFilter:{op:nP(n.op),filters:r}}}(t):le(54877,{filter:t})}function rP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class dr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sP{constructor(e){this.gt=e}}function iP(t){const e=XC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ru(e,e.limit,"L"):e}/**
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
 */class oP{constructor(){this.Dn=new aP}addToCollectionParentIndex(e,n){return this.Dn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ar.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class aP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Le.comparator)).toArray()}}/**
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
 */const ig={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vv=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(vv,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
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
 */class qs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new qs(0)}static ur(){return new qs(-1)}}/**
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
 */const og="LruGarbageCollector",lP=1048576;function ag([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class cP{constructor(e){this.Tr=e,this.buffer=new Ze(ag),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ag(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Z(og,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xs(n)?Z(og,"Ignoring IndexedDB error during garbage collection: ",n):await Js(n)}await this.Rr(3e5)})}}class hP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Cl.ue);const r=new cP(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(ig)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ig):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,l=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),ws()<=Ee.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function fP(t,e){return new hP(t,e)}/**
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
 */class dP{constructor(){this.changes=new cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class pP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Hi(r.mutation,s,Mt.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ai();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=$n();const o=qi(),l=function(){return qi()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Lr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Hi(h.mutation,u,h.mutation.getFieldMask(),Me.now())):o.set(u.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return l.set(u,new pP(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const r=qi();let s=new je((o,l)=>o-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||Mt.empty();h=l.applyToLocalView(u,h),r.set(c,h);const d=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,d)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,d=tv();h.forEach(g=>{if(!i.has(g)){const _=av(n.get(g),r.get(g));_!==null&&d.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_C(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Wr());let l=io,c=i;return o.next(u=>B.forEach(u,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(h=>({batchId:l,changes:ev(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=Ai();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ai();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(d,g){return new Ol(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Et.newInvalidDocument(h)))});let l=Ai();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Hi(h.mutation,u,Mt.empty(),Me.now()),Nl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class mP{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return B.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_n(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:iP(s.bundledQuery),readTime:_n(s.readTime)}}(n)),B.resolve()}}/**
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
 */class _P{constructor(){this.overlays=new je(ie.comparator),this.kr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Wr(),i=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Wr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=Wr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=s)););return B.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LC(n,r));let i=this.kr.get(n);i===void 0&&(i=Te(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class yP{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Mh{constructor(){this.qr=new Ze(tt.Qr),this.$r=new Ze(tt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new tt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new ie(new Le([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ie(new Le([])),r=new tt(n,e),s=new tt(n,e+1);let i=Te();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ie.comparator(e.key,n.key)||ye(e.Hr,n.Hr)}static Ur(e,n){return ye(e.Hr,n.Hr)||ie.comparator(e.key,n.key)}}/**
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
 */class vP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ze(tt.Qr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Rh:this.er-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ye);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),B.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new tt(new ie(i),0);let l=new Ze(ye);return this.Yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)},o),B.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return B.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new tt(n,0),s=this.Yr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class EP{constructor(e){this.ni=e,this.docs=function(){return new je(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$n();const o=n.path,l=new ie(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||GS(KS(h),r)<=0||(s.has(h.key)||Nl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ri(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TP(this)}getSize(e){return B.resolve(this.size)}}class TP extends dP{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class wP{constructor(e){this.persistence=e,this.ii=new cs(n=>Ph(n),kh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.si=0,this.oi=new Mh,this.targetCount=0,this._i=qs.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),B.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new qs(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.hr(n),B.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.oi.containsKey(n))}}/**
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
 */class Ev{constructor(e,n){this.ai={},this.overlays={},this.ui=new Cl(0),this.ci=!1,this.ci=!0,this.li=new yP,this.referenceDelegate=e(this),this.hi=new wP(this),this.indexManager=new oP,this.remoteDocumentCache=function(s){return new EP(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new sP(n),this.Ti=new mP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _P,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new vP(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new IP(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return B.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class IP extends YS{constructor(e){super(),this.currentSequenceNumber=e}}class Fh{constructor(e){this.persistence=e,this.Ai=new Mh,this.Ri=null}static Vi(e){return new Fh(e)}get mi(){if(this.Ri)return this.Ri;throw le(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.mi,r=>{const s=ie.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return B.or([()=>B.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class nl{constructor(e,n){this.persistence=e,this.gi=new cs(r=>ZS(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=fP(this,n)}static Vi(e,n){return new nl(e,n)}Ii(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return B.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),B.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ea(e.data.value)),n}Sr(e,n,r){return B.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Uh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Uh(e,n.fromCache,r,s)}}/**
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
 */class bP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class AP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return tA()?8:JS(wt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new bP;return this.ws(e,n,o).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(ws()<=Ee.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(ws()<=Ee.DEBUG&&Z("QueryEngine","Query:",Is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ws()<=Ee.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):B.resolve())}ps(e,n){if(Qp(n))return B.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ru(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Ru(n,null,"F")):this.vs(e,u,n,c)}))})))}ys(e,n,r,s){return Qp(n)||s.isEqual(de.min())?B.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?B.resolve(null):(ws()<=Ee.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Is(n)),this.vs(e,o,n,WS(s,io)).next(l=>l))})}bs(e,n){let r=new Ze(Xy(e));return n.forEach((s,i)=>{Nl(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return ws()<=Ee.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Is(n)),this.gs.getDocumentsMatchingQuery(e,n,Ar.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Bh="LocalStore",RP=3e8;class SP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new je(ye),this.Ms=new cs(i=>Ph(i),kh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function CP(t,e,n,r){return new SP(t,e,n,r)}async function Tv(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Te();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:l}))})})}function PP(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const d=u.batch,g=d.keys();let _=B.resolve();return g.forEach(S=>{_=_.next(()=>h.getEntry(c,S)).next(C=>{const P=u.docVersions.get(S);ke(P!==null,48541),C.version.compareTo(P)<0&&(d.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function wv(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function kP(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach((h,d)=>{const g=s.get(d);if(!g)return;l.push(n.hi.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.hi.addMatchingKeys(i,h.addedDocuments,d)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(ft.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(d,_),function(C,P,L){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=RP?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(g,_,h)&&l.push(n.hi.updateTargetData(i,_))});let c=$n(),u=Te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(OP(i,o,e.documentUpdates).next(h=>{c=h.Ls,u=h.ks})),!r.isEqual(de.min())){const h=n.hi.getLastRemoteSnapshotVersion(i).next(d=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(h)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Fs=s,i))}function OP(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=$n();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z(Bh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ls:o,ks:s}})}function DP(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Rh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NP(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Ou(t,e,n){const r=ge(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xs(o))throw o;Z(Bh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function lg(t,e,n){const r=ge(t);let s=de.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=ge(c),g=d.Ms.get(h);return g!==void 0?B.resolve(d.Fs.get(g)):d.hi.getTargetData(u,h)}(r,o,mn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Te())).next(l=>(xP(r,vC(e),l),{documents:l,qs:i})))}function xP(t,e,n){let r=t.xs.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class cg{constructor(){this.activeTargetIds=AC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VP{constructor(){this.Fo=new cg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new cg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class LP{xo(e){}shutdown(){}}/**
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
 */const ug="ConnectivityMonitor";class hg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Z(ug,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Z(ug,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ia=null;function Du(){return ia===null?ia=function(){return 268435456+Math.round(2147483648*Math.random())}():ia++,"0x"+ia.toString(16)}/**
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
 */const xc="RestConnection",MP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class FP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Ya?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Du(),l=this.Go(e,n.toUriEncodedString());Z(xc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),h=Dr(u);return this.jo(e,l,c,r,h).then(d=>(Z(xc,`Received RPC '${e}' ${o}: `,d),d),d=>{throw br(xc,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",r),d})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ys}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=MP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class UP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const mt="WebChannelConnection";class BP extends FP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Du();return new Promise((l,c)=>{const u=new Ay;u.setWithCredentials(!0),u.listenOnce(Ry.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case va.NO_ERROR:const d=u.getResponseJson();Z(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case va.TIMEOUT:Z(mt,`RPC '${e}' ${o} timed out`),c(new ne(j.DEADLINE_EXCEEDED,"Request time out"));break;case va.HTTP_ERROR:const g=u.getStatus();if(Z(mt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_?.error;if(S&&S.status&&S.message){const C=function(L){const D=L.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(D)>=0?D:j.UNKNOWN}(S.status);c(new ne(C,S.message))}else c(new ne(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ne(j.UNAVAILABLE,"Connection failed."));break;default:le(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Z(mt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);Z(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}P_(e,n,r){const s=Du(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Py(),l=Cy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");Z(mt,`Creating RPC '${e}' stream ${s}: ${h}`,c);const d=o.createWebChannel(h,c);this.T_(d);let g=!1,_=!1;const S=new UP({Ho:P=>{_?Z(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(Z(mt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),Z(mt,`RPC '${e}' stream ${s} sending:`,P),d.send(P))},Yo:()=>d.close()}),C=(P,L,D)=>{P.listen(L,x=>{try{D(x)}catch(N){setTimeout(()=>{throw N},0)}})};return C(d,bi.EventType.OPEN,()=>{_||(Z(mt,`RPC '${e}' stream ${s} transport opened.`),S.s_())}),C(d,bi.EventType.CLOSE,()=>{_||(_=!0,Z(mt,`RPC '${e}' stream ${s} transport closed`),S.__(),this.I_(d))}),C(d,bi.EventType.ERROR,P=>{_||(_=!0,br(mt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),S.__(new ne(j.UNAVAILABLE,"The operation could not be completed")))}),C(d,bi.EventType.MESSAGE,P=>{var L;if(!_){const D=P.data[0];ke(!!D,16349);const x=D,N=x?.error||((L=x[0])===null||L===void 0?void 0:L.error);if(N){Z(mt,`RPC '${e}' stream ${s} received error:`,N);const H=N.status;let z=function(y){const w=Ge[y];if(w!==void 0)return cv(w)}(H),I=N.message;z===void 0&&(z=j.INTERNAL,I="Unknown error status: "+H+" with message "+N.message),_=!0,S.__(new ne(z,I)),d.close()}else Z(mt,`RPC '${e}' stream ${s} received:`,D),S.a_(D)}}),C(l,Sy.STAT_EVENT,P=>{P.stat===Eu.PROXY?Z(mt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Eu.NOPROXY&&Z(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.o_()},0),S}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Vc(){return typeof document<"u"?document:null}/**
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
 */function Ml(t){return new HC(t,!0)}/**
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
 */class Iv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const fg="PersistentStream";class bv{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Iv(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new ne(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return Z(fg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(Z(fg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $P extends bv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=KC(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?_n(o.readTime):de.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=ku(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Au(c)?{documents:YC(i,c)}:{query:JC(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=fv(i,o.resumeToken);const u=Su(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=tl(i,o.snapshotVersion.toTimestamp());const u=Su(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=ZC(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=ku(this.serializer),n.removeTarget=e,this.k_(n)}}class jP extends bv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=QC(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=ku(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>GC(this.serializer,r))};this.k_(n)}}/**
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
 */class qP{}class HP extends qP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ne(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Cu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(j.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Cu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(j.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class zP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Un(n),this._a=!1):Z("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const is="RemoteStore";class WP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{us(this)&&(Z(is,"Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.Ia.add(4),await Po(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Fl(u)}(this))})}),this.Aa=new zP(r,s)}}async function Fl(t){if(us(t))for(const e of t.da)await e(!0)}async function Po(t){for(const e of t.da)await e(!1)}function Av(t,e){const n=ge(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Hh(n)?qh(n):Zs(n).x_()&&jh(n,e))}function $h(t,e){const n=ge(t),r=Zs(n);n.Ta.delete(e),r.x_()&&Rv(n,e),n.Ta.size===0&&(r.x_()?r.B_():us(n)&&n.Aa.set("Unknown"))}function jh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zs(t).H_(e)}function Rv(t,e){t.Ra.$e(e),Zs(t).Y_(e)}function qh(t){t.Ra=new BC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Zs(t).start(),t.Aa.aa()}function Hh(t){return us(t)&&!Zs(t).M_()&&t.Ta.size>0}function us(t){return ge(t).Ia.size===0}function Sv(t){t.Ra=void 0}async function KP(t){t.Aa.set("Online")}async function GP(t){t.Ta.forEach((e,n)=>{jh(t,e)})}async function QP(t,e){Sv(t),Hh(t)?(t.Aa.la(e),qh(t)):t.Aa.set("Unknown")}async function YP(t,e,n){if(t.Aa.set("Online"),e instanceof hv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))}(t,e)}catch(r){Z(is,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rl(t,r)}else if(e instanceof Ia?t.Ra.Ye(e):e instanceof uv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(de.min()))try{const r=await wv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ta.get(u);h&&i.Ta.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.Ta.get(c);if(!h)return;i.Ta.set(c,h.withResumeToken(ft.EMPTY_BYTE_STRING,h.snapshotVersion)),Rv(i,c);const d=new dr(h.target,c,u,h.sequenceNumber);jh(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z(is,"Failed to raise snapshot:",r),await rl(t,r)}}async function rl(t,e,n){if(!Xs(e))throw e;t.Ia.add(1),await Po(t),t.Aa.set("Offline"),n||(n=()=>wv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(is,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Fl(t)})}function Cv(t,e){return e().catch(n=>rl(t,n,e))}async function Ul(t){const e=ge(t),n=Pr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Rh;for(;JP(e);)try{const s=await DP(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,XP(e,s)}catch(s){await rl(e,s)}Pv(e)&&kv(e)}function JP(t){return us(t)&&t.Pa.length<10}function XP(t,e){t.Pa.push(e);const n=Pr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Pv(t){return us(t)&&!Pr(t).M_()&&t.Pa.length>0}function kv(t){Pr(t).start()}async function ZP(t){Pr(t).na()}async function ek(t){const e=Pr(t);for(const n of t.Pa)e.X_(n.mutations)}async function tk(t,e,n){const r=t.Pa.shift(),s=xh.from(r,e,n);await Cv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ul(t)}async function nk(t,e){e&&Pr(t).Z_&&await async function(r,s){if(function(o){return FC(o)&&o!==j.ABORTED}(s.code)){const i=r.Pa.shift();Pr(r).N_(),await Cv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ul(r)}}(t,e),Pv(t)&&kv(t)}async function dg(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),Z(is,"RemoteStore received new credentials");const r=us(n);n.Ia.add(3),await Po(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Fl(n)}async function rk(t,e){const n=ge(t);e?(n.Ia.delete(2),await Fl(n)):e||(n.Ia.add(2),await Po(n),n.Aa.set("Unknown"))}function Zs(t){return t.Va||(t.Va=function(n,r,s){const i=ge(n);return i.ia(),new $P(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:KP.bind(null,t),e_:GP.bind(null,t),n_:QP.bind(null,t),J_:YP.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Hh(t)?qh(t):t.Aa.set("Unknown")):(await t.Va.stop(),Sv(t))})),t.Va}function Pr(t){return t.ma||(t.ma=function(n,r,s){const i=ge(n);return i.ia(),new jP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:ZP.bind(null,t),n_:nk.bind(null,t),ea:ek.bind(null,t),ta:tk.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Ul(t)):(await t.ma.stop(),t.Pa.length>0&&(Z(is,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class zh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new zh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wh(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Xs(t))return new ne(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ls{static emptySet(e){return new Ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Ai(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class pg{constructor(){this.fa=new je(ie.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):le(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Hs(e,n,Ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class sk{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class ik{constructor(){this.queries=gg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=gg(),i.forEach((o,l)=>{for(const c of l.wa)c.onError(r)})})(this,new ne(j.ABORTED,"Firestore shutting down"))}}function gg(){return new cs(t=>Jy(t),Dl)}async function Ov(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new sk,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Wh(o,`Initialization of query '${Is(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Kh(n)}async function Dv(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ok(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Kh(n)}function ak(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Kh(t){t.Da.forEach(e=>{e.next()})}var Nu,mg;(mg=Nu||(Nu={})).Fa="default",mg.Cache="cache";class Nv{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Nu.Cache}}/**
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
 */class xv{constructor(e){this.key=e}}class Vv{constructor(e){this.key=e}}class lk{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Te(),this.mutatedKeys=Te(),this.Xa=Xy(e),this.eu=new Ls(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new pg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const g=s.get(h),_=Nl(this.query,d)?d:null,S=!!g&&this.mutatedKeys.has(g.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;g&&_?g.data.isEqual(_.data)?S!==C&&(r.track({type:3,doc:_}),P=!0):this.iu(g,_)||(r.track({type:2,doc:_}),P=!0,(c&&this.Xa(_,c)>0||u&&this.Xa(_,u)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),P=!0):g&&!_&&(r.track({type:1,doc:g}),P=!0,(c||u)&&(l=!0)),P&&(_?(o=o.add(_),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,d)=>function(_,S){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{At:P})}};return C(_)-C(S)}(h.type,d.type)||this.Xa(h.doc,d.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Hs(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new pg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Te(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new Vv(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new xv(r))}),n}uu(e){this.Ha=e.qs,this.Za=Te();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Hs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Gh="SyncEngine";class ck{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uk{constructor(e){this.key=e,this.lu=!1}}class hk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new cs(l=>Jy(l),Dl),this.Tu=new Map,this.Iu=new Set,this.du=new je(ie.comparator),this.Eu=new Map,this.Au=new Mh,this.Ru={},this.Vu=new Map,this.mu=qs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function fk(t,e,n=!0){const r=$v(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Lv(r,e,n,!0),s}async function dk(t,e){const n=$v(t);await Lv(n,e,!0,!1)}async function Lv(t,e,n,r){const s=await NP(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await pk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Av(t.remoteStore,s),l}async function pk(t,e,n,r,s){t.gu=(d,g,_)=>async function(C,P,L,D){let x=P.view.nu(L);x.Ds&&(x=await lg(C.localStore,P.query,!1).then(({documents:I})=>P.view.nu(I,x)));const N=D&&D.targetChanges.get(P.targetId),H=D&&D.targetMismatches.get(P.targetId)!=null,z=P.view.applyChanges(x,C.isPrimaryClient,N,H);return yg(C,P.targetId,z._u),z.snapshot}(t,d,g,_);const i=await lg(t.localStore,e,!0),o=new lk(e,i.qs),l=o.nu(i.documents),c=Co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);yg(t,n,u._u);const h=new ck(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function gk(t,e,n){const r=ge(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!Dl(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ou(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&$h(r.remoteStore,s.targetId),xu(r,s.targetId)}).catch(Js)):(xu(r,s.targetId),await Ou(r.localStore,s.targetId,!0))}async function mk(t,e){const n=ge(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$h(n.remoteStore,r.targetId))}async function _k(t,e,n){const r=bk(t);try{const s=await function(o,l){const c=ge(o),u=Me.now(),h=l.reduce((_,S)=>_.add(S.key),Te());let d,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=$n(),C=Te();return c.Os.getEntries(_,h).next(P=>{S=P,S.forEach((L,D)=>{D.isValidDocument()||(C=C.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,S)).next(P=>{d=P;const L=[];for(const D of l){const x=NC(D,d.get(D.key).overlayedDocument);x!=null&&L.push(new Lr(D.key,x,Hy(x.value.mapValue),en.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,L,l)}).next(P=>{g=P;const L=P.applyToLocalDocumentSet(d,C);return c.documentOverlayCache.saveOverlays(_,P.batchId,L)})}).then(()=>({batchId:g.batchId,changes:ev(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new je(ye)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u}(r,s.batchId,n),await ko(r,s.changes),await Ul(r.remoteStore)}catch(s){const i=Wh(s,"Failed to persist write");n.reject(i)}}async function Mv(t,e){const n=ge(t);try{const r=await kP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ke(o.lu,14607):s.removedDocuments.size>0&&(ke(o.lu,42227),o.lu=!1))}),await ko(n,r,e)}catch(r){await Js(r)}}function _g(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((h,d)=>{for(const g of d.wa)g.va(l)&&(u=!0)}),u&&Kh(c)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yk(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new je(ie.comparator);o=o.insert(i,Et.newNoDocument(i,de.min()));const l=Te().add(i),c=new Ll(de.min(),new Map,new je(ye),o,l);await Mv(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Qh(r)}else await Ou(r.localStore,e,!1).then(()=>xu(r,e,n)).catch(Js)}async function vk(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await PP(n.localStore,e);Uv(n,r,null),Fv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ko(n,s)}catch(s){await Js(s)}}async function Ek(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(ke(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);Uv(r,e,n),Fv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ko(r,s)}catch(s){await Js(s)}}function Fv(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function Uv(t,e,n){const r=ge(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function xu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||Bv(t,r)})}function Bv(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&($h(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Qh(t))}function yg(t,e,n){for(const r of n)r instanceof xv?(t.Au.addReference(r.key,e),Tk(t,r)):r instanceof Vv?(Z(Gh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Bv(t,r.key)):le(19791,{yu:r})}function Tk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(Z(Gh,"New document in limbo: "+n),t.Iu.add(r),Qh(t))}function Qh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ie(Le.fromString(e)),r=t.mu.next();t.Eu.set(r,new uk(n)),t.du=t.du.insert(n,r),Av(t.remoteStore,new dr(mn(Oh(n.path)),r,"TargetPurposeLimboResolution",Cl.ue))}}async function ko(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,c)=>{o.push(r.gu(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n?.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Uh.Es(c.targetId,u);i.push(d)}}))}),await Promise.all(o),r.hu.J_(s),await async function(c,u){const h=ge(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,g=>B.forEach(g.Is,_=>h.persistence.referenceDelegate.addReference(d,g.targetId,_)).next(()=>B.forEach(g.ds,_=>h.persistence.referenceDelegate.removeReference(d,g.targetId,_)))))}catch(d){if(!Xs(d))throw d;Z(Bh,"Failed to update sequence numbers: "+d)}for(const d of u){const g=d.targetId;if(!d.fromCache){const _=h.Fs.get(g),S=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(S);h.Fs=h.Fs.insert(g,C)}}}(r.localStore,i))}async function wk(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){Z(Gh,"User change. New user:",e.toKey());const r=await Tv(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(l=>{l.forEach(c=>{c.reject(new ne(j.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ko(n,r.Bs)}}function Ik(t,e){const n=ge(t),r=n.Eu.get(e);if(r&&r.lu)return Te().add(r.key);{let s=Te();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function $v(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ik.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yk.bind(null,e),e.hu.J_=ok.bind(null,e.eventManager),e.hu.pu=ak.bind(null,e.eventManager),e}function bk(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ek.bind(null,e),e}class sl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ml(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return CP(this.persistence,new AP,e.initialUser,this.serializer)}Du(e){return new Ev(Fh.Vi,this.serializer)}bu(e){return new VP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sl.provider={build:()=>new sl};class Ak extends sl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ke(this.persistence.referenceDelegate instanceof nl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new uP(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new Ev(r=>nl.Vi(r,n),this.serializer)}}class Vu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_g(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wk.bind(null,this.syncEngine),await rk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ik}()}createDatastore(e){const n=Ml(e.databaseInfo.databaseId),r=function(i){return new BP(i)}(e.databaseInfo);return function(i,o,l,c){return new HP(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new WP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>_g(this.syncEngine,n,0),function(){return hg.C()?new hg:new LP}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,h){const d=new hk(s,i,o,l,c,u);return h&&(d.fu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);Z(is,"RemoteStore shutting down."),i.Ia.add(5),await Po(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Vu.provider={build:()=>new Vu};/**
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
 */class jv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const kr="FirestoreClient";class Rk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=bh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),Z(kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{br("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{Z("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{br("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function vg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sk(t);Z(kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>dg(e.remoteStore,s)),t._onlineComponents=e}async function Sk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(kr,"Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;br("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new sl)}}else Z(kr,"Using default OfflineComponentProvider"),await Lc(t,new Ak(void 0));return t._offlineComponents}async function qv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(kr,"Using user provided OnlineComponentProvider"),await vg(t,t._uninitializedComponentsProvider._online)):(Z(kr,"Using default OnlineComponentProvider"),await vg(t,new Vu))),t._onlineComponents}function Ck(t){return qv(t).then(e=>e.syncEngine)}async function Hv(t){const e=await qv(t),n=e.eventManager;return n.onListen=fk.bind(null,e.syncEngine),n.onUnlisten=gk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mk.bind(null,e.syncEngine),n}function Pk(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new jv({next:g=>{h.Ou(),o.enqueueAndForget(()=>Dv(i,d));const _=g.docs.has(l);!_&&g.fromCache?u.reject(new ne(j.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?u.reject(new ne(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new Nv(Oh(l.path),h,{includeMetadataChanges:!0,ka:!0});return Ov(i,d)}(await Hv(t),t.asyncQueue,e,n,r)),r.promise}function kk(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new jv({next:g=>{h.Ou(),o.enqueueAndForget(()=>Dv(i,d)),g.fromCache&&c.source==="server"?u.reject(new ne(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new Nv(l,h,{includeMetadataChanges:!0,ka:!0});return Ov(i,d)}(await Hv(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function zv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Eg=new Map;/**
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
 */const Wv="firestore.googleapis.com",Tg=!0;class wg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wv,this.ssl=Tg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Tg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lP)throw new ne(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LS;switch(r.type){case"firstParty":return new BS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Eg.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Eg.delete(n),r.terminate())}(this),Promise.resolve()}}function Ok(t,e,n,r={}){var s;t=Bn(t,Bl);const i=Dr(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(ch(`https://${c}`),uh("Firestore",!0)),o.host!==Wv&&o.host!==c&&br("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!es(u,l)&&(t._setSettings(u),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=yt.MOCK_USER;else{h=F_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ne(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new yt(g)}t._authCredentials=new MS(new Oy(h,d))}}/**
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
 */class $l{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $l(this.firestore,e,this._query)}}class Xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}toJSON(){return{type:Xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ro(n,Xe._jsonSchema))return new Xe(e,r||null,new ie(Le.fromString(n.referencePath)))}}Xe._jsonSchemaVersion="firestore/documentReference/1.0",Xe._jsonSchema={type:Qe("string",Xe._jsonSchemaVersion),referencePath:Qe("string")};class yr extends $l{constructor(e,n,r){super(e,n,Oh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new ie(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function PN(t,e,...n){if(t=He(t),Ny("collection","path",e),t instanceof Bl){const r=Le.fromString(e,...n);return Lp(r),new yr(t,null,r)}{if(!(t instanceof Xe||t instanceof yr))throw new ne(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Lp(r),new yr(t.firestore,null,r)}}function Dk(t,e,...n){if(t=He(t),arguments.length===1&&(e=bh.newId()),Ny("doc","path",e),t instanceof Bl){const r=Le.fromString(e,...n);return Vp(r),new Xe(t,null,new ie(r))}{if(!(t instanceof Xe||t instanceof yr))throw new ne(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Vp(r),new Xe(t.firestore,t instanceof yr?t.converter:null,new ie(r))}}/**
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
 */const Ig="AsyncQueue";class bg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Iv(this,"async_queue_retry"),this.oc=()=>{const r=Vc();r&&Z(Ig,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Vc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Nn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Xs(e))throw e;Z(Ig,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Un("INTERNAL UNHANDLED ERROR: ",Ag(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=zh.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&le(47125,{hc:Ag(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Ag(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ei extends Bl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new bg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bg(e),this._firestoreClient=void 0,await e}}}function Nk(t,e){const n=typeof t=="object"?t:dh(),r=typeof t=="string"?t:Ya,s=bl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=V_("firestore");i&&Ok(s,...i)}return s}function Yh(t){if(t._terminated)throw new ne(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xk(t),t._firestoreClient}function xk(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,h){return new nC(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,zv(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Rk(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(ft.fromBase64String(e))}catch(n){throw new ne(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ro(e,zt._jsonSchema))return zt.fromBase64String(e.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:Qe("string",zt._jsonSchemaVersion),bytes:Qe("string")};/**
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
 */class jl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ql{constructor(e){this._methodName=e}}/**
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
 */class yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yn._jsonSchemaVersion}}static fromJSON(e){if(Ro(e,yn._jsonSchema))return new yn(e.latitude,e.longitude)}}yn._jsonSchemaVersion="firestore/geoPoint/1.0",yn._jsonSchema={type:Qe("string",yn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
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
 */class vn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ro(e,vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new vn(e.vectorValues);throw new ne(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vn._jsonSchemaVersion="firestore/vectorValue/1.0",vn._jsonSchema={type:Qe("string",vn._jsonSchemaVersion),vectorValues:Qe("object")};/**
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
 */const Vk=/^__.*__$/;class Lk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new So(e,this.data,n,this.fieldTransforms)}}class Kv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ec:t})}}class Jh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Jh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return il(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Gv(this.Ec)&&Vk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Mk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ml(e)}Dc(e,n,r,s=!1){return new Jh({Ec:e,methodName:n,bc:r,path:ht.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qv(t){const e=t._freezeSettings(),n=Ml(t._databaseId);return new Mk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fk(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Zh("Data must be an object, but it was:",o,r);const l=Yv(r,o);let c,u;if(i.merge)c=new Mt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const g=Lu(e,d,n);if(!o.contains(g))throw new ne(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Xv(h,g)||h.push(g)}c=new Mt(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new Lk(new Dt(l),c,u)}class Hl extends ql{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hl}}class Xh extends ql{_toFieldTransform(e){return new PC(e.path,new co)}isEqual(e){return e instanceof Xh}}function Uk(t,e,n,r){const s=t.Dc(1,e,n);Zh("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();Vr(r,(c,u)=>{const h=ef(e,c,n);u=He(u);const d=s.gc(h);if(u instanceof Hl)i.push(h);else{const g=zl(u,d);g!=null&&(i.push(h),o.set(h,g))}});const l=new Mt(i);return new Kv(o,l,s.fieldTransforms)}function Bk(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[Lu(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Lu(e,i[g])),c.push(i[g+1]);const u=[],h=Dt.empty();for(let g=l.length-1;g>=0;--g)if(!Xv(u,l[g])){const _=l[g];let S=c[g];S=He(S);const C=o.gc(_);if(S instanceof Hl)u.push(_);else{const P=zl(S,C);P!=null&&(u.push(_),h.set(_,P))}}const d=new Mt(u);return new Kv(h,d,o.fieldTransforms)}function zl(t,e){if(Jv(t=He(t)))return Zh("Unsupported field value:",e,t),Yv(t,e);if(t instanceof ql)return function(r,s){if(!Gv(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=zl(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:tl(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tl(s.serializer,i)}}if(r instanceof yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:fv(s.serializer,r._byteString)};if(r instanceof Xe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vn)return function(o,l){return{mapValue:{fields:{[jy]:{stringValue:qy},[Ja]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return Dh(l.serializer,u)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Ah(r)}`)}(t,e)}function Yv(t,e){const n={};return Ly(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(t,(r,s)=>{const i=zl(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Jv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof yn||t instanceof zt||t instanceof Xe||t instanceof ql||t instanceof vn)}function Zh(t,e,n){if(!Jv(n)||!xy(n)){const r=Ah(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Lu(t,e,n){if((e=He(e))instanceof jl)return e._internalPath;if(typeof e=="string")return ef(t,e);throw il("Field path arguments must be of type string or ",t,!1,void 0,n)}const $k=new RegExp("[~\\*/\\[\\]]");function ef(t,e,n){if(e.search($k)>=0)throw il(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jl(...e.split("."))._internalPath}catch{throw il(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function il(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(j.INVALID_ARGUMENT,l+t+c)}function Xv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Zv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jk extends Zv{data(){return super.data()}}function eE(t,e){return typeof e=="string"?ef(t,e):e instanceof jl?e._internalPath:e._delegate._internalPath}/**
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
 */function qk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hk{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ja].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ke(o.doubleValue));return new vn(i)}convertGeoPoint(e){return new yn(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);ke(yv(r),9688,{name:e});const s=new ao(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function zk(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jr extends Zv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(eE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Jr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jr._jsonSchema={type:Qe("string",Jr._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class ba extends Jr{data(e={}){return super.data(e)}}class Ms{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Si(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ba(this._firestore,this._userDataWriter,r.key,r,new Si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ba(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Si(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ba(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Si(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:Wk(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ms._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Wk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}/**
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
 */function kN(t){t=Bn(t,Xe);const e=Bn(t.firestore,ei);return Pk(Yh(e),t._key).then(n=>Kk(e,t,n))}Ms._jsonSchemaVersion="firestore/querySnapshot/1.0",Ms._jsonSchema={type:Qe("string",Ms._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class tE extends Hk{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,n)}}function ON(t){t=Bn(t,$l);const e=Bn(t.firestore,ei),n=Yh(e),r=new tE(e);return qk(t._query),kk(n,t._query).then(s=>new Ms(e,r,t,s))}function DN(t,e,n,...r){t=Bn(t,Xe);const s=Bn(t.firestore,ei),i=Qv(s);let o;return o=typeof(e=He(e))=="string"||e instanceof jl?Bk(i,"updateDoc",t._key,e,n,r):Uk(i,"updateDoc",t._key,e),tf(s,[o.toMutation(t._key,en.exists(!0))])}function NN(t){return tf(Bn(t.firestore,ei),[new Nh(t._key,en.none())])}function xN(t,e){const n=Bn(t.firestore,ei),r=Dk(t),s=zk(t.converter,e);return tf(n,[Fk(Qv(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function tf(t,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>_k(await Ck(r),s,i)),i.promise}(Yh(t),e)}function Kk(t,e,n){const r=n.docs.get(e._key),s=new tE(t);return new Jr(t,s,e._key,r,new Si(n.hasPendingWrites,n.fromCache),e.converter)}function VN(){return new Xh("serverTimestamp")}(function(e,n=!0){(function(s){Ys=s})(as),ts(new Ir("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ei(new FS(r.getProvider("auth-internal")),new $S(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ao(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),dn(kp,Op,e),dn(kp,Op,"esm2017")})();/**
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
 */const nE="firebasestorage.googleapis.com",rE="storageBucket",Gk=2*60*1e3,Qk=10*60*1e3;/**
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
 */class We extends wn{constructor(e,n,r=0){super(Mc(e),`Firebase Storage: ${n} (${Mc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ze||(ze={}));function Mc(t){return"storage/"+t}function nf(){const t="An unknown error occurred, please check the error payload for server response.";return new We(ze.UNKNOWN,t)}function Yk(t){return new We(ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Jk(t){return new We(ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Xk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(ze.UNAUTHENTICATED,t)}function Zk(){return new We(ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function e1(t){return new We(ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function t1(){return new We(ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function n1(){return new We(ze.CANCELED,"User canceled the upload/download.")}function r1(t){return new We(ze.INVALID_URL,"Invalid URL '"+t+"'.")}function s1(t){return new We(ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function i1(){return new We(ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rE+"' property when initializing the app?")}function o1(){return new We(ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function a1(){return new We(ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function l1(t){return new We(ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Mu(t){return new We(ze.INVALID_ARGUMENT,t)}function sE(){return new We(ze.APP_DELETED,"The Firebase app was deleted.")}function c1(t){return new We(ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zi(t,e){return new We(ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function _i(t){throw new We(ze.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw s1(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${h}/b/${s}/o${g}`,"i"),S={bucket:1,path:3},C=n===nE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",L=new RegExp(`^https?://${C}/${s}/${P}`,"i"),x=[{regex:l,indices:c,postModify:i},{regex:_,indices:S,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<x.length;N++){const H=x[N],z=H.regex.exec(e);if(z){const I=z[H.indices.bucket];let v=z[H.indices.path];v||(v=""),r=new Ft(I,v),H.postModify(r);break}}if(r==null)throw r1(e);return r}}class u1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function h1(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function d(P){s=setTimeout(()=>{s=null,t(_,c())},P)}function g(){i&&clearTimeout(i)}function _(P,...L){if(u){g();return}if(P){g(),h.call(null,P,...L);return}if(c()||o){g(),h.call(null,P,...L);return}r<64&&(r*=2);let x;l===1?(l=2,x=0):x=(r+Math.random())*1e3,d(x)}let S=!1;function C(P){S||(S=!0,g(),!u&&(s!==null?(P||(l=2),clearTimeout(s),d(0)):P||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,C(!0)},n),C}function f1(t){t(!1)}/**
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
 */function d1(t){return t!==void 0}function p1(t){return typeof t=="object"&&!Array.isArray(t)}function rf(t){return typeof t=="string"||t instanceof String}function Rg(t){return sf()&&t instanceof Blob}function sf(){return typeof Blob<"u"}function Sg(t,e,n,r){if(r<e)throw Mu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Mu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Wl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function iE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Xr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xr||(Xr={}));/**
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
 */function g1(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class m1{constructor(e,n,r,s,i,o,l,c,u,h,d,g=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=g,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,C)=>{this.resolve_=S,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new oa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Xr.NO_ERROR,c=i.getStatus();if(!l||g1(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Xr.ABORT;r(!1,new oa(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new oa(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());d1(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=nf();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?sE():n1();o(c)}else{const c=t1();o(c)}};this.canceled_?n(!1,new oa(!1,null,!0)):this.backoffId_=h1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&f1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function _1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function y1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function v1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function E1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function T1(t,e,n,r,s,i,o=!0,l=!1){const c=iE(t.urlParams),u=t.url+c,h=Object.assign({},t.headers);return v1(h,e),_1(h,n),y1(h,i),E1(h,r),new m1(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function w1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function I1(...t){const e=w1();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(sf())return new Blob(t);throw new We(ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function b1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function A1(t){if(typeof atob>"u")throw l1("base-64");return atob(t)}/**
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
 */const un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fc{constructor(e,n){this.data=e,this.contentType=n||null}}function R1(t,e){switch(t){case un.RAW:return new Fc(oE(e));case un.BASE64:case un.BASE64URL:return new Fc(aE(t,e));case un.DATA_URL:return new Fc(C1(e),P1(e))}throw nf()}function oE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function S1(t){let e;try{e=decodeURIComponent(t)}catch{throw zi(un.DATA_URL,"Malformed data URL.")}return oE(e)}function aE(t,e){switch(t){case un.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw zi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case un.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw zi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=A1(e)}catch(s){throw s.message.includes("polyfill")?s:zi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class lE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zi(un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=k1(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function C1(t){const e=new lE(t);return e.base64?aE(un.BASE64,e.rest):S1(e.rest)}function P1(t){return new lE(t).contentType}function k1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class fr{constructor(e,n){let r=0,s="";Rg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Rg(this.data_)){const r=this.data_,s=b1(r,e,n);return s===null?null:new fr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(sf()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(I1.apply(null,n))}else{const n=e.map(o=>rf(o)?R1(un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new fr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function cE(t){let e;try{e=JSON.parse(t)}catch{return null}return p1(e)?e:null}/**
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
 */function O1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function D1(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function uE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function N1(t,e){return e}class bt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||N1}}let aa=null;function x1(t){return!rf(t)||t.length<2?t:uE(t)}function hE(){if(aa)return aa;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(i,o){return x1(o)}const n=new bt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new bt("size");return s.xform=r,t.push(s),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),aa=t,aa}function V1(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function L1(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return V1(r,t),r}function fE(t,e,n){const r=cE(e);return r===null?null:L1(t,r,n)}function M1(t,e,n,r){const s=cE(e);if(s===null||!rf(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,g="/b/"+o(h)+"/o/"+o(d),_=Wl(g,n,r),S=iE({alt:"media",token:u});return _+S})[0]}function F1(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class of{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function dE(t){if(!t)throw nf()}function U1(t,e){function n(r,s){const i=fE(t,s,e);return dE(i!==null),i}return n}function B1(t,e){function n(r,s){const i=fE(t,s,e);return dE(i!==null),M1(i,s,t.host,t._protocol)}return n}function pE(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Zk():s=Xk():n.getStatus()===402?s=Jk(t.bucket):n.getStatus()===403?s=e1(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function gE(t){const e=pE(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Yk(t.path)),i.serverResponse=s.serverResponse,i}return n}function $1(t,e,n){const r=e.fullServerUrl(),s=Wl(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new of(s,i,B1(t,n),o);return l.errorHandler=gE(e),l}function j1(t,e){const n=e.fullServerUrl(),r=Wl(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new of(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=gE(e),l}function q1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function H1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=q1(null,e)),r}function z1(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let x="";for(let N=0;N<2;N++)x=x+Math.random().toString().slice(2);return x}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=H1(e,r,s),h=F1(u,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",_=fr.getBlob(d,r,g);if(_===null)throw o1();const S={name:u.fullPath},C=Wl(i,t.host,t._protocol),P="POST",L=t.maxUploadRetryTime,D=new of(C,P,U1(t,n),L);return D.urlParams=S,D.headers=o,D.body=_.uploadData(),D.errorHandler=pE(e),D}class W1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw _i("cannot .send() more than once");if(Dr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _i("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _i("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _i("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _i("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class K1 extends W1{initXhr(){this.xhr_.responseType="text"}}function af(){return new K1}/**
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
 */class os{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new os(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uE(this._location.path)}get storage(){return this._service}get parent(){const e=O1(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw c1(e)}}function G1(t,e,n){t._throwIfRoot("uploadBytes");const r=z1(t.storage,t._location,hE(),new fr(e,!0),n);return t.storage.makeRequestWithTokens(r,af).then(s=>({metadata:s,ref:t}))}function Q1(t){t._throwIfRoot("getDownloadURL");const e=$1(t.storage,t._location,hE());return t.storage.makeRequestWithTokens(e,af).then(n=>{if(n===null)throw a1();return n})}function Y1(t){t._throwIfRoot("deleteObject");const e=j1(t.storage,t._location);return t.storage.makeRequestWithTokens(e,af)}function J1(t,e){const n=D1(t._location.path,e),r=new Ft(t._location.bucket,n);return new os(t.storage,r)}/**
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
 */function X1(t){return/^[A-Za-z]+:\/\//.test(t)}function Z1(t,e){return new os(t,e)}function mE(t,e){if(t instanceof lf){const n=t;if(n._bucket==null)throw i1();const r=new os(n,n._bucket);return e!=null?mE(r,e):r}else return e!==void 0?J1(t,e):t}function eO(t,e){if(e&&X1(e)){if(t instanceof lf)return Z1(t,e);throw Mu("To use ref(service, url), the first argument must be a Storage instance.")}else return mE(t,e)}function Cg(t,e){const n=e?.[rE];return n==null?null:Ft.makeFromBucketSpec(n,t)}function tO(t,e,n,r={}){t.host=`${e}:${n}`;const s=Dr(e);s&&(ch(`https://${t.host}/b`),uh("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:F_(i,t.app.options.projectId))}class lf{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=nE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Gk,this._maxUploadRetryTime=Qk,this._requests=new Set,s!=null?this._bucket=Ft.makeFromBucketSpec(s,this._host):this._bucket=Cg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=Cg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new os(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new u1(sE());{const o=T1(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Pg="@firebase/storage",kg="0.13.14";/**
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
 */const _E="storage";function LN(t,e,n){return t=He(t),G1(t,e,n)}function MN(t){return t=He(t),Q1(t)}function FN(t){return t=He(t),Y1(t)}function UN(t,e){return t=He(t),eO(t,e)}function nO(t=dh(),e){t=He(t);const r=bl(t,_E).getImmediate({identifier:e}),s=V_("storage");return s&&rO(r,...s),r}function rO(t,e,n,r={}){tO(t,e,n,r)}function sO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new lf(n,r,s,e,as)}function iO(){ts(new Ir(_E,sO,"PUBLIC").setMultipleInstances(!0)),dn(Pg,kg,""),dn(Pg,kg,"esm2017")}iO();const Og={apiKey:"AIzaSyCYxI-u9jWIl-obR8FmvOXOh91sYD29toQ",authDomain:"mylara-landing.firebaseapp.com",projectId:"mylara-landing",storageBucket:"mylara-landing.firebasestorage.app",messagingSenderId:"890771851225",appId:"1:890771851225:web:bf606c67130d45fbc3fbc8"};let la,yE,vE,oO;try{Og.projectId||console.warn("Firebase projectId is undefined. Using offline mode only."),la=$_(Og),yE=Nk(la),vE=DS(la),oO=nO(la)}catch(t){console.error("Error initializing Firebase:",t)}const BN=()=>yE,ca=()=>vE,_s=Er(null),Xn=Er(!1),Uc=Er(!0);function EE(){const t=he(()=>_s.value!==null);function e(){const o=ca();if(!o){console.warn("Firebase Auth не инициализирован"),Uc.value=!1;return}ER(o,l=>{_s.value=l,Xn.value=!1,Uc.value=!1})}async function n(o,l){const c=ca();if(!c)return{success:!1,error:"Firebase Auth не инициализирован"};Xn.value=!0;try{const u=await _R(c,o,l);return _s.value=u.user,{success:!0}}catch(u){let h="Произошла ошибка при входе";if(u&&typeof u=="object"&&"code"in u)switch(u.code){case"auth/user-not-found":h="Пользователь не найден";break;case"auth/wrong-password":h="Неверный пароль";break;case"auth/invalid-email":h="Неверный формат email";break;case"auth/user-disabled":h="Пользователь заблокирован";break;case"auth/too-many-requests":h="Слишком много попыток входа. Попробуйте позже";break;default:console.error("Login error:",u)}else console.error("Login error:",u);return{success:!1,error:h}}finally{Xn.value=!1}}async function r(o,l){const c=ca();if(!c)return{success:!1,error:"Firebase Auth не инициализирован"};Xn.value=!0;try{const u=await mR(c,o,l);return _s.value=u.user,{success:!0}}catch(u){let h="Произошла ошибка при регистрации";if(u&&typeof u=="object"&&"code"in u)switch(u.code){case"auth/email-already-in-use":h="Пользователь с таким email уже существует";break;case"auth/invalid-email":h="Неверный формат email";break;case"auth/weak-password":h="Пароль слишком слабый";break;default:console.error("Registration error:",u)}else console.error("Registration error:",u);return{success:!1,error:h}}finally{Xn.value=!1}}async function s(){const o=ca();if(!o)return{success:!1,error:"Firebase Auth не инициализирован"};Xn.value=!0;try{return await TR(o),_s.value=null,{success:!0}}catch(l){return console.error("Logout error:",l),{success:!1,error:"Произошла ошибка при выходе"}}finally{Xn.value=!1}}function i(){return t.value}return{currentUser:_s,isAuthenticated:t,loading:Xn,initializing:Uc,login:n,logout:s,register:r,checkAuth:i,initAuth:e}}const aO=dl({name:"App",__name:"App",setup(t){const{initAuth:e}=EE();return ml(()=>{e()}),Cb(Mb),(n,r)=>{const s=yw("router-view");return xa(),Va(s)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Rs=typeof document<"u";function TE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&TE(t.default)}const Ce=Object.assign;function Bc(t,e){const n={};for(const r in e){const s=e[r];n[r]=rn(s)?s.map(t):t(s)}return n}const Wi=()=>{},rn=Array.isArray,wE=/#/g,cO=/&/g,uO=/\//g,hO=/=/g,fO=/\?/g,IE=/\+/g,dO=/%5B/g,pO=/%5D/g,bE=/%5E/g,gO=/%60/g,AE=/%7B/g,mO=/%7C/g,RE=/%7D/g,_O=/%20/g;function cf(t){return encodeURI(""+t).replace(mO,"|").replace(dO,"[").replace(pO,"]")}function yO(t){return cf(t).replace(AE,"{").replace(RE,"}").replace(bE,"^")}function Fu(t){return cf(t).replace(IE,"%2B").replace(_O,"+").replace(wE,"%23").replace(cO,"%26").replace(gO,"`").replace(AE,"{").replace(RE,"}").replace(bE,"^")}function vO(t){return Fu(t).replace(hO,"%3D")}function EO(t){return cf(t).replace(wE,"%23").replace(fO,"%3F")}function TO(t){return t==null?"":EO(t).replace(uO,"%2F")}function fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const wO=/\/$/,IO=t=>t.replace(wO,"");function $c(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=SO(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:fo(o)}}function bO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Dg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function AO(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&zs(e.matched[r],n.matched[s])&&SE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function SE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!RO(t[n],e[n]))return!1;return!0}function RO(t,e){return rn(t)?Ng(t,e):rn(e)?Ng(e,t):t===e}function Ng(t,e){return rn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function SO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var po;(function(t){t.pop="pop",t.push="push"})(po||(po={}));var Ki;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ki||(Ki={}));function CO(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IO(t)}const PO=/^[^#]+#/;function kO(t,e){return t.replace(PO,"#")+e}function OO(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Kl=()=>({left:window.scrollX,top:window.scrollY});function DO(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=OO(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xg(t,e){return(history.state?history.state.position-e:-1)+t}const Uu=new Map;function NO(t,e){Uu.set(t,e)}function xO(t){const e=Uu.get(t);return Uu.delete(t),e}let VO=()=>location.protocol+"//"+location.host;function CE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Dg(c,"")}return Dg(n,t)+r+s}function LO(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=CE(t,location),S=n.value,C=e.value;let P=0;if(g){if(n.value=_,e.value=g,o&&o===S){o=null;return}P=C?g.position-C.position:0}else r(_);s.forEach(L=>{L(n.value,S,{delta:P,type:po.pop,direction:P?P>0?Ki.forward:Ki.back:Ki.unknown})})};function c(){o=n.value}function u(g){s.push(g);const _=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(_),_}function h(){const{history:g}=window;g.state&&g.replaceState(Ce({},g.state,{scroll:Kl()}),"")}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function Vg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Kl():null}}function MO(t){const{history:e,location:n}=window,r={value:CE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:VO()+t+c;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[h?"replace":"assign"](g)}}function o(c,u){const h=Ce({},e.state,Vg(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function l(c,u){const h=Ce({},s.value,e.state,{forward:c,scroll:Kl()});i(h.current,h,!0);const d=Ce({},Vg(r.value,c,null),{position:h.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function FO(t){t=CO(t);const e=MO(t),n=LO(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:kO.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function UO(t){return typeof t=="string"||t&&typeof t=="object"}function PE(t){return typeof t=="string"||typeof t=="symbol"}const kE=Symbol("");var Lg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lg||(Lg={}));function Ws(t,e){return Ce(new Error,{type:t,[kE]:!0},e)}function Rn(t,e){return t instanceof Error&&kE in t&&(e==null||!!(t.type&e))}const Mg="[^/]+?",BO={sensitive:!1,strict:!1,start:!0,end:!0},$O=/[.+*?^${}()[\]/\\]/g;function jO(t,e){const n=Ce({},BO,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let _=40+(n.sensitive?.25:0);if(g.type===0)d||(s+="/"),s+=g.value.replace($O,"\\$&"),_+=40;else if(g.type===1){const{value:S,repeatable:C,optional:P,regexp:L}=g;i.push({name:S,repeatable:C,optional:P});const D=L||Mg;if(D!==Mg){_+=10;try{new RegExp(`(${D})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${S}" (${D}): `+N.message)}}let x=C?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(x=P&&u.length<2?`(?:/${x})`:"/"+x),P&&(x+="?"),s+=x,_+=20,P&&(_+=-8),C&&(_+=-20),D===".*"&&(_+=-50)}h.push(_)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const h=u.match(o),d={};if(!h)return null;for(let g=1;g<h.length;g++){const _=h[g]||"",S=i[g-1];d[S.name]=_&&S.repeatable?_.split("/"):_}return d}function c(u){let h="",d=!1;for(const g of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const _ of g)if(_.type===0)h+=_.value;else if(_.type===1){const{value:S,repeatable:C,optional:P}=_,L=S in u?u[S]:"";if(rn(L)&&!C)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const D=rn(L)?L.join("/"):L;if(!D)if(P)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);h+=D}}return h||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function qO(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function OE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=qO(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Fg(r))return 1;if(Fg(s))return-1}return s.length-r.length}function Fg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const HO={type:0,value:""},zO=/[a-zA-Z0-9_]/;function WO(t){if(!t)return[[]];if(t==="/")return[[HO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:zO.test(c)?g():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function KO(t,e,n){const r=jO(WO(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function GO(t,e){const n=[],r=new Map;e=jg({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,g,_){const S=!_,C=Bg(d);C.aliasOf=_&&_.record;const P=jg(e,d),L=[C];if("alias"in d){const N=typeof d.alias=="string"?[d.alias]:d.alias;for(const H of N)L.push(Bg(Ce({},C,{components:_?_.record.components:C.components,path:H,aliasOf:_?_.record:C})))}let D,x;for(const N of L){const{path:H}=N;if(g&&H[0]!=="/"){const z=g.record.path,I=z[z.length-1]==="/"?"":"/";N.path=g.record.path+(H&&I+H)}if(D=KO(N,g,P),_?_.alias.push(D):(x=x||D,x!==D&&x.alias.push(D),S&&d.name&&!$g(D)&&o(d.name)),DE(D)&&c(D),C.children){const z=C.children;for(let I=0;I<z.length;I++)i(z[I],D,_&&_.children[I])}_=_||D}return x?()=>{o(x)}:Wi}function o(d){if(PE(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const g=JO(d,n);n.splice(g,0,d),d.record.name&&!$g(d)&&r.set(d.record.name,d)}function u(d,g){let _,S={},C,P;if("name"in d&&d.name){if(_=r.get(d.name),!_)throw Ws(1,{location:d});P=_.record.name,S=Ce(Ug(g.params,_.keys.filter(x=>!x.optional).concat(_.parent?_.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&Ug(d.params,_.keys.map(x=>x.name))),C=_.stringify(S)}else if(d.path!=null)C=d.path,_=n.find(x=>x.re.test(C)),_&&(S=_.parse(C),P=_.record.name);else{if(_=g.name?r.get(g.name):n.find(x=>x.re.test(g.path)),!_)throw Ws(1,{location:d,currentLocation:g});P=_.record.name,S=Ce({},g.params,d.params),C=_.stringify(S)}const L=[];let D=_;for(;D;)L.unshift(D.record),D=D.parent;return{name:P,path:C,params:S,matched:L,meta:YO(L)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:s}}function Ug(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Bg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:QO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function QO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $g(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function YO(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function jg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function JO(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;OE(t,e[i])<0?r=i:n=i+1}const s=XO(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function XO(t){let e=t;for(;e=e.parent;)if(DE(e)&&OE(t,e)===0)return e}function DE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ZO(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(IE," "),o=i.indexOf("="),l=fo(o<0?i:i.slice(0,o)),c=o<0?null:fo(i.slice(o+1));if(l in e){let u=e[l];rn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function qg(t){let e="";for(let n in t){const r=t[n];if(n=vO(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rn(r)?r.map(i=>i&&Fu(i)):[r&&Fu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function eD(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const tD=Symbol(""),Hg=Symbol(""),Gl=Symbol(""),uf=Symbol(""),Bu=Symbol("");function yi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function or(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Ws(4,{from:n,to:e})):g instanceof Error?c(g):UO(g)?c(Ws(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(g=>c(g))})}function jc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(TE(c)){const h=(c.__vccOpts||c)[e];h&&i.push(or(h,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=lO(h)?h.default:h;o.mods[l]=h,o.components[l]=d;const _=(d.__vccOpts||d)[e];return _&&or(_,n,r,o,l,s)()}))}}return i}function zg(t){const e=Zt(Gl),n=Zt(uf),r=he(()=>{const c=Gr(t.to);return e.resolve(c)}),s=he(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const g=d.findIndex(zs.bind(null,h));if(g>-1)return g;const _=Wg(c[u-2]);return u>1&&Wg(h)===_&&d[d.length-1].path!==_?d.findIndex(zs.bind(null,c[u-2])):g}),i=he(()=>s.value>-1&&oD(n.params,r.value.params)),o=he(()=>s.value>-1&&s.value===n.matched.length-1&&SE(n.params,r.value.params));function l(c={}){if(iD(c)){const u=e[Gr(t.replace)?"replace":"push"](Gr(t.to)).catch(Wi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:he(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function nD(t){return t.length===1?t[0]:t}const rD=dl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zg,setup(t,{slots:e}){const n=Ks(zg(t)),{options:r}=Zt(Gl),s=he(()=>({[Kg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Kg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&nD(e.default(n));return t.custom?i:fe("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),sD=rD;function iD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oD(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!rn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Kg=(t,e,n)=>t??e??n,aD=dl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Zt(Bu),s=he(()=>t.route||r.value),i=Zt(Hg,0),o=he(()=>{let u=Gr(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),l=he(()=>s.value.matched[o.value]);ha(Hg,he(()=>o.value+1)),ha(tD,l),ha(Bu,s);const c=Er();return Yr(()=>[c.value,l.value,t.name],([u,h,d],[g,_,S])=>{h&&(h.instances[d]=u,_&&_!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!zs(h,_)||!g)&&(h.enterCallbacks[d]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=l.value,g=d&&d.components[h];if(!g)return Gg(n.default,{Component:g,route:u});const _=d.props[h],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,P=fe(g,Ce({},S,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return Gg(n.default,{Component:P,route:u})||P}}});function Gg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lD=aD;function cD(t){const e=GO(t.routes,t),n=t.parseQuery||ZO,r=t.stringifyQuery||qg,s=t.history,i=yi(),o=yi(),l=yi(),c=QT(Zn);let u=Zn;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Bc.bind(null,M=>""+M),d=Bc.bind(null,TO),g=Bc.bind(null,fo);function _(M,ee){let X,te;return PE(M)?(X=e.getRecordMatcher(M),te=ee):te=M,e.addRoute(te,X)}function S(M){const ee=e.getRecordMatcher(M);ee&&e.removeRoute(ee)}function C(){return e.getRoutes().map(M=>M.record)}function P(M){return!!e.getRecordMatcher(M)}function L(M,ee){if(ee=Ce({},ee||c.value),typeof M=="string"){const k=$c(n,M,ee.path),F=e.resolve({path:k.path},ee),$=s.createHref(k.fullPath);return Ce(k,F,{params:g(F.params),hash:fo(k.hash),redirectedFrom:void 0,href:$})}let X;if(M.path!=null)X=Ce({},M,{path:$c(n,M.path,ee.path).path});else{const k=Ce({},M.params);for(const F in k)k[F]==null&&delete k[F];X=Ce({},M,{params:d(k)}),ee.params=d(ee.params)}const te=e.resolve(X,ee),Ae=M.hash||"";te.params=h(g(te.params));const T=bO(r,Ce({},M,{hash:yO(Ae),path:te.path})),b=s.createHref(T);return Ce({fullPath:T,hash:Ae,query:r===qg?eD(M.query):M.query||{}},te,{redirectedFrom:void 0,href:b})}function D(M){return typeof M=="string"?$c(n,M,c.value.path):Ce({},M)}function x(M,ee){if(u!==M)return Ws(8,{from:ee,to:M})}function N(M){return I(M)}function H(M){return N(Ce(D(M),{replace:!0}))}function z(M){const ee=M.matched[M.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let te=typeof X=="function"?X(M):X;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=D(te):{path:te},te.params={}),Ce({query:M.query,hash:M.hash,params:te.path!=null?{}:M.params},te)}}function I(M,ee){const X=u=L(M),te=c.value,Ae=M.state,T=M.force,b=M.replace===!0,k=z(X);if(k)return I(Ce(D(k),{state:typeof k=="object"?Ce({},Ae,k.state):Ae,force:T,replace:b}),ee||X);const F=X;F.redirectedFrom=ee;let $;return!T&&AO(r,te,X)&&($=Ws(16,{to:F,from:te}),Ut(te,te,!0,!1)),($?Promise.resolve($):w(F,te)).catch(U=>Rn(U)?Rn(U,2)?U:Gt(U):ve(U,F,te)).then(U=>{if(U){if(Rn(U,2))return I(Ce({replace:b},D(U.to),{state:typeof U.to=="object"?Ce({},Ae,U.to.state):Ae,force:T}),ee||F)}else U=A(F,te,!0,b,Ae);return R(F,te,U),U})}function v(M,ee){const X=x(M,ee);return X?Promise.reject(X):Promise.resolve()}function y(M){const ee=zn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(M):M()}function w(M,ee){let X;const[te,Ae,T]=uD(M,ee);X=jc(te.reverse(),"beforeRouteLeave",M,ee);for(const k of te)k.leaveGuards.forEach(F=>{X.push(or(F,M,ee))});const b=v.bind(null,M,ee);return X.push(b),Ct(X).then(()=>{X=[];for(const k of i.list())X.push(or(k,M,ee));return X.push(b),Ct(X)}).then(()=>{X=jc(Ae,"beforeRouteUpdate",M,ee);for(const k of Ae)k.updateGuards.forEach(F=>{X.push(or(F,M,ee))});return X.push(b),Ct(X)}).then(()=>{X=[];for(const k of T)if(k.beforeEnter)if(rn(k.beforeEnter))for(const F of k.beforeEnter)X.push(or(F,M,ee));else X.push(or(k.beforeEnter,M,ee));return X.push(b),Ct(X)}).then(()=>(M.matched.forEach(k=>k.enterCallbacks={}),X=jc(T,"beforeRouteEnter",M,ee,y),X.push(b),Ct(X))).then(()=>{X=[];for(const k of o.list())X.push(or(k,M,ee));return X.push(b),Ct(X)}).catch(k=>Rn(k,8)?k:Promise.reject(k))}function R(M,ee,X){l.list().forEach(te=>y(()=>te(M,ee,X)))}function A(M,ee,X,te,Ae){const T=x(M,ee);if(T)return T;const b=ee===Zn,k=Rs?history.state:{};X&&(te||b?s.replace(M.fullPath,Ce({scroll:b&&k&&k.scroll},Ae)):s.push(M.fullPath,Ae)),c.value=M,Ut(M,ee,X,b),Gt()}let E;function Q(){E||(E=s.listen((M,ee,X)=>{if(!sn.listening)return;const te=L(M),Ae=z(te);if(Ae){I(Ce(Ae,{replace:!0,force:!0}),te).catch(Wi);return}u=te;const T=c.value;Rs&&NO(xg(T.fullPath,X.delta),Kl()),w(te,T).catch(b=>Rn(b,12)?b:Rn(b,2)?(I(Ce(D(b.to),{force:!0}),te).then(k=>{Rn(k,20)&&!X.delta&&X.type===po.pop&&s.go(-1,!1)}).catch(Wi),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ve(b,te,T))).then(b=>{b=b||A(te,T,!1),b&&(X.delta&&!Rn(b,8)?s.go(-X.delta,!1):X.type===po.pop&&Rn(b,20)&&s.go(-1,!1)),R(te,T,b)}).catch(Wi)}))}let _e=yi(),Oe=yi(),we;function ve(M,ee,X){Gt(M);const te=Oe.list();return te.length?te.forEach(Ae=>Ae(M,ee,X)):console.error(M),Promise.reject(M)}function Nt(){return we&&c.value!==Zn?Promise.resolve():new Promise((M,ee)=>{_e.add([M,ee])})}function Gt(M){return we||(we=!M,Q(),_e.list().forEach(([ee,X])=>M?X(M):ee()),_e.reset()),M}function Ut(M,ee,X,te){const{scrollBehavior:Ae}=t;if(!Rs||!Ae)return Promise.resolve();const T=!X&&xO(xg(M.fullPath,0))||(te||!X)&&history.state&&history.state.scroll||null;return km().then(()=>Ae(M,ee,T)).then(b=>b&&DO(b)).catch(b=>ve(b,M,ee))}const Ue=M=>s.go(M);let Be;const zn=new Set,sn={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:C,resolve:L,options:t,push:N,replace:H,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Oe.add,isReady:Nt,install(M){const ee=this;M.component("RouterLink",sD),M.component("RouterView",lD),M.config.globalProperties.$router=ee,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Gr(c)}),Rs&&!Be&&c.value===Zn&&(Be=!0,N(s.location).catch(Ae=>{}));const X={};for(const Ae in Zn)Object.defineProperty(X,Ae,{get:()=>c.value[Ae],enumerable:!0});M.provide(Gl,ee),M.provide(uf,Am(X)),M.provide(Bu,c);const te=M.unmount;zn.add(M),M.unmount=function(){zn.delete(M),zn.size<1&&(u=Zn,E&&E(),E=null,c.value=Zn,Be=!1,we=!1),te()}}};function Ct(M){return M.reduce((ee,X)=>ee.then(()=>y(X)),Promise.resolve())}return sn}function uD(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>zs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>zs(u,c))||s.push(c))}return[n,r,s]}function $N(){return Zt(Gl)}function jN(t){return Zt(uf)}function qN(t){return t}const hD=[{path:Ob,component:async()=>await er(()=>import("./LandingLayout-CLaJeT8j.js"),__vite__mapDeps([0,1,2,3,4,5])),children:[{path:"",component:async()=>await er(()=>import("./HomePage-Bo8mKt-J.js"),__vite__mapDeps([6,7,8,2,9,10,11,12,13,14]))},{path:":catchAll(.*)*",component:async()=>await er(()=>import("./ErrorNotFoundPage-BuZk1ruR.js"),__vite__mapDeps([15,9]))}]},{path:"/admin",children:[{path:"login",component:async()=>await er(()=>import("./AdminLoginPage-BGa_B8H8.js"),__vite__mapDeps([16,17,18,8,2,7,19,1]))},{path:"",component:async()=>await er(()=>import("./AdminLayout-DgZ7PZgf.js"),__vite__mapDeps([20,21,12,8,2,4,1,22,11,18])),children:[{path:"",component:async()=>await er(()=>import("./AdminDashboardPage-Bmtxixrz.js"),__vite__mapDeps([23,7,8,2,22,19,10,5,24]))},{path:"collection/:collection",component:async()=>await er(()=>import("./AdminCollectionPage-CRltP-yy.js"),__vite__mapDeps([25,19,8,2,7,21,12,22,18,13,17,3,5,10,26]))}]}]}],qc=function(){const e=cD({scrollBehavior:(n,r,s)=>s||{left:0,top:0},routes:hD,history:FO("/")});return e.beforeEach((n,r,s)=>{if(n.path.startsWith("/admin")&&n.path!=="/admin/login"){const{isAuthenticated:i,initializing:o}=EE();if(o.value){const l=Yr(()=>o.value,c=>{c||(l(),i.value?s():s({path:"/admin/login",query:{redirect:n.fullPath}}))});return}if(!i.value){s({path:"/admin/login",query:{redirect:n.fullPath}});return}}s()}),e.afterEach(n=>{setTimeout(()=>{const s=document.querySelector("#q-app")?.__vue_app__;if(s?.config?.globalProperties?.$updateCanonicalUrl&&s.config.globalProperties.$updateCanonicalUrl(n.fullPath),s?.config?.globalProperties?.$addJsonLd){const i={"@context":"https://schema.org","@type":"WebPage",url:window.location.href,name:document.title,description:document.querySelector('meta[name="description"]')?.getAttribute("content")??""};s.config.globalProperties.$addJsonLd(i)}},0)}),e};async function fD(t,e){const n=t(aO);n.use(vb,e);const r=mo(typeof qc=="function"?await qc({}):qc);return{app:n,router:r}}function dD(t,e){return e[t%10===1&&t%100!==11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2]}const pD={isoName:"ru",nativeName:"русский",label:{clear:"Очистить",ok:"OK",cancel:"Отмена",close:"Закрыть",set:"Установить",select:"Выбрать",reset:"Сбросить",remove:"Удалить",update:"Обновить",create:"Создать",search:"Поиск",filter:"Фильтр",refresh:"Обновить",expand:t=>t?`Расширьте "${t}"`:"Расширять",collapse:t=>t?`Свернуть "${t}"`:"Крах"},date:{days:"Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split("_"),daysShort:"Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),months:"Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_"),monthsShort:"Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек".split("_"),firstDayOfWeek:1,format24h:!0,pluralDay:"дней",prevMonth:"Предыдущий месяц",nextMonth:"Следующий месяц",prevYear:"Предыдущий год",nextYear:"Следующий год",today:"Сегодня",prevRangeYears:t=>`Предыдущий ${t} Годы`,nextRangeYears:t=>`Далее ${t} годы`},table:{noData:"Нет данных",noResults:"Совпадений не найдено",loading:"Загрузка...",selectedRecords:t=>t>0?t+" "+dD(t,["строка выбрана","строки выбраны","строк выбрано"])+".":"Ни одна строка не выбрана.",recordsPerPage:"Строк на странице:",allRows:"Все",pagination:(t,e,n)=>t+"-"+e+" из "+n,columns:"Колонки"},pagination:{first:"Первая страница",prev:"Предыдущая страница",next:"Следующая страница",last:"Последняя страница"},editor:{url:"URL",bold:"Полужирный",italic:"Курсив",strikethrough:"Зачеркнутый",underline:"Подчеркнутый",unorderedList:"Маркированный список",orderedList:"Нумерованный список",subscript:"Подстрочный",superscript:"Надстрочный",hyperlink:"Гиперссылка",toggleFullscreen:"Полноэкранный режим",quote:"Цитата",left:"Выравнивание по левому краю",center:"Выравнивание по центру",right:"Выравнивание по правому краю",justify:"Выравнивание по ширине",print:"Печать",outdent:"Уменьшить отступ",indent:"Увеличить отступ",removeFormat:"Удалить форматирование",formatting:"Форматирование",fontSize:"Размер шрифта",align:"Выравнивание",hr:"Вставить горизонтальную линию",undo:"Отменить",redo:"Повторить",heading1:"Заголовок 1",heading2:"Заголовок 2",heading3:"Заголовок 3",heading4:"Заголовок 4",heading5:"Заголовок 5",heading6:"Заголовок 6",paragraph:"Параграф",code:"Код",size1:"Очень маленький",size2:"Маленький",size3:"Нормальный",size4:"Средний",size5:"Большой",size6:"Очень большой",size7:"Огромный",defaultFont:"Шрифт по умолчанию",viewSource:"Просмотреть исходный код"},tree:{noNodes:"Нет доступных узлов",noResults:"Совпадений не найдено"}},$u={xs:18,sm:24,md:32,lg:38,xl:46},hf={size:String};function ff(t,e=$u){return he(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}function gD(t,e){return t!==void 0&&t()||e}function HN(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function Ci(t,e){return t!==void 0?e.concat(t()):e}function mD(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function zN(t,e,n,r,s,i){e.key=r+s;const o=fe(t,e,n);return s===!0?Vm(o,i()):o}const Qg="0 0 24 24",Hc=t=>t,zc=t=>`ionicons ${t}`,NE={"mdi-":t=>`mdi ${t}`,"icon-":Hc,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":zc,"ion-ios":zc,"ion-logo":zc,"iconfont ":Hc,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`,"i-":Hc},xE={o_:"-outlined",r_:"-round",s_:"-sharp"},VE={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},_D=new RegExp("^("+Object.keys(NE).join("|")+")"),yD=new RegExp("^("+Object.keys(xE).join("|")+")"),Yg=new RegExp("^("+Object.keys(VE).join("|")+")"),vD=/^[Mm]\s?[-+]?\.?\d/,ED=/^img:/,TD=/^svguse:/,wD=/^ion-/,ID=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,ol=vo({name:"QIcon",props:{...hf,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Gs(),r=ff(t),s=he(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),i=he(()=>{let o,l=t.name;if(l==="none"||!l)return{none:!0};if(n.iconMapFn!==null){const h=n.iconMapFn(l);if(h!==void 0)if(h.icon!==void 0){if(l=h.icon,l==="none"||!l)return{none:!0}}else return{cls:h.cls,content:h.content!==void 0?h.content:" "}}if(vD.test(l)===!0){const[h,d=Qg]=l.split("|");return{svg:!0,viewBox:d,nodes:h.split("&&").map(g=>{const[_,S,C]=g.split("@@");return fe("path",{style:S,d:_,transform:C})})}}if(ED.test(l)===!0)return{img:!0,src:l.substring(4)};if(TD.test(l)===!0){const[h,d=Qg]=l.split("|");return{svguse:!0,src:h.substring(7),viewBox:d}}let c=" ";const u=l.match(_D);if(u!==null)o=NE[u[1]](l);else if(ID.test(l)===!0)o=l;else if(wD.test(l)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${l.substring(3)}`;else if(Yg.test(l)===!0){o="notranslate material-symbols";const h=l.match(Yg);h!==null&&(l=l.substring(6),o+=VE[h[1]]),c=l}else{o="notranslate material-icons";const h=l.match(yD);h!==null&&(l=l.substring(2),o+=xE[h[1]]),c=l}return{cls:o,content:c}});return()=>{const o={class:s.value,style:r.value,"aria-hidden":"true"};return i.value.none===!0?fe(t.tag,o,gD(e.default)):i.value.img===!0?fe(t.tag,o,Ci(e.default,[fe("img",{src:i.value.src})])):i.value.svg===!0?fe(t.tag,o,Ci(e.default,[fe("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?fe(t.tag,o,Ci(e.default,[fe("svg",{viewBox:i.value.viewBox},[fe("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(o.class+=" "+i.value.cls),fe(t.tag,o,Ci(e.default,[i.value.content])))}}}),bD=vo({name:"QAvatar",props:{...hf,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=ff(t),r=he(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),s=he(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const i=t.icon!==void 0?[fe(ol,{name:t.icon})]:void 0;return fe("div",{class:r.value,style:n.value},[fe("div",{class:"q-avatar__content row flex-center overflow-hidden",style:s.value},mD(e.default,i))])}}}),AD={size:{type:[String,Number],default:"1em"},color:String};function RD(t){return{cSize:he(()=>t.size in $u?`${$u[t.size]}px`:t.size),classes:he(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}const LE=vo({name:"QSpinner",props:{...AD,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=RD(t);return()=>fe("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[fe("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function SD(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function WN(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=Gr(t);if(e)return e.$el||e}function KN(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function CD(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function Jg(t,e,n,r){n.modifiers.stop===!0&&A_(t);const s=n.modifiers.color;let i=n.modifiers.center;i=i===!0||r===!0;const o=document.createElement("span"),l=document.createElement("span"),c=JI(t),{left:u,top:h,width:d,height:g}=e.getBoundingClientRect(),_=Math.sqrt(d*d+g*g),S=_/2,C=`${(d-_)/2}px`,P=i?C:`${c.left-u-S}px`,L=`${(g-_)/2}px`,D=i?L:`${c.top-h-S}px`;l.className="q-ripple__inner",SD(l,{height:`${_}px`,width:`${_}px`,transform:`translate3d(${P},${D},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${s?" text-"+s:""}`,o.setAttribute("dir","ltr"),o.appendChild(l),e.appendChild(o);const x=()=>{o.remove(),clearTimeout(N)};n.abort.push(x);let N=setTimeout(()=>{l.classList.add("q-ripple__inner--enter"),l.style.transform=`translate3d(${C},${L},0) scale3d(1,1,1)`,l.style.opacity=.2,N=setTimeout(()=>{l.classList.remove("q-ripple__inner--enter"),l.classList.add("q-ripple__inner--leave"),l.style.opacity=0,N=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(x),1)},275)},250)},50)}function Xg(t,{modifiers:e,value:n,arg:r}){const s=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||r,keyCodes:[].concat(s.keyCodes||13)}}const PD=YI({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(s){r.enabled===!0&&s.qSkipRipple!==!0&&s.type===(r.modifiers.early===!0?"pointerdown":"click")&&Jg(s,t,r,s.qKeyEvent===!0)},keystart:CD(s=>{r.enabled===!0&&s.qSkipRipple!==!0&&cu(s,r.modifiers.keyCodes)===!0&&s.type===`key${r.modifiers.early===!0?"down":"up"}`&&Jg(s,t,r,!0)},300)};Xg(r,e),t.__qripple=r,XI(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&Xg(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),ZI(e,"main"),delete t._qripple)}}),ME={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},kD=Object.keys(ME),OD={align:{type:String,validator:t=>kD.includes(t)}};function DD(t){return he(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${ME[e]}`})}function GN(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function FE(t,e){typeof e.type=="symbol"?Array.isArray(e.children)===!0&&e.children.forEach(n=>{FE(t,n)}):t.add(e)}function QN(t){const e=new Set;return t.forEach(n=>{FE(e,n)}),Array.from(e)}function ND(t){return t.appContext.config.globalProperties.$router!==void 0}function YN(t){return t.isUnmounted===!0||t.isDeactivated===!0}function Zg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function em(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xD(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(Array.isArray(s)===!1||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function tm(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function VD(t,e){return Array.isArray(t)===!0?tm(t,e):Array.isArray(e)===!0?tm(e,t):t===e}function LD(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(VD(t[n],e[n])===!1)return!1;return!0}const UE={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},JN={...UE,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function MD({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Gs(),{props:r,proxy:s,emit:i}=n,o=ND(n),l=he(()=>r.disable!==!0&&r.href!==void 0),c=he(e===!0?()=>o===!0&&r.disable!==!0&&l.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&l.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),u=he(()=>c.value===!0?D(r.to):null),h=he(()=>u.value!==null),d=he(()=>l.value===!0||h.value===!0),g=he(()=>r.type==="a"||d.value===!0?"a":r.tag||t||"div"),_=he(()=>l.value===!0?{href:r.href,target:r.target}:h.value===!0?{href:u.value.href,target:r.target}:{}),S=he(()=>{if(h.value===!1)return-1;const{matched:H}=u.value,{length:z}=H,I=H[z-1];if(I===void 0)return-1;const v=s.$route.matched;if(v.length===0)return-1;const y=v.findIndex(em.bind(null,I));if(y!==-1)return y;const w=Zg(H[z-2]);return z>1&&Zg(I)===w&&v[v.length-1].path!==w?v.findIndex(em.bind(null,H[z-2])):y}),C=he(()=>h.value===!0&&S.value!==-1&&xD(s.$route.params,u.value.params)),P=he(()=>C.value===!0&&S.value===s.$route.matched.length-1&&LD(s.$route.params,u.value.params)),L=he(()=>h.value===!0?P.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":C.value===!0?` ${r.activeClass}`:"":"");function D(H){try{return s.$router.resolve(H)}catch{}return null}function x(H,{returnRouterError:z,to:I=r.to,replace:v=r.replace}={}){if(r.disable===!0)return H.preventDefault(),Promise.resolve(!1);if(H.metaKey||H.altKey||H.ctrlKey||H.shiftKey||H.button!==void 0&&H.button!==0||r.target==="_blank")return Promise.resolve(!1);H.preventDefault();const y=s.$router[v===!0?"replace":"push"](I);return z===!0?y:y.then(()=>{}).catch(()=>{})}function N(H){if(h.value===!0){const z=I=>x(H,I);i("click",H,z),H.defaultPrevented!==!0&&z()}else i("click",H)}return{hasRouterLink:h,hasHrefLink:l,hasLink:d,linkTag:g,resolvedLink:u,linkIsActive:C,linkIsExactActive:P,linkClass:L,linkAttrs:_,getLink:D,navigateToRouterLink:x,navigateOnClick:N}}const nm={none:0,xs:4,sm:8,md:16,lg:24,xl:32},FD={xs:8,sm:10,md:14,lg:20,xl:24},UD=["button","submit","reset"],BD=/[^\s]\/[^\s]/,$D=["flat","outline","push","unelevated"];function jD(t,e){return t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e}const qD={...hf,...UE,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...$D.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...OD.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},HD={...qD,round:Boolean};function zD(t){const e=ff(t,FD),n=DD(t),{hasRouterLink:r,hasLink:s,linkTag:i,linkAttrs:o,navigateOnClick:l}=MD({fallbackTag:"button"}),c=he(()=>{const P=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},P,{padding:t.padding.split(/\s+/).map(L=>L in nm?nm[L]+"px":L).join(" "),minWidth:"0",minHeight:"0"}):P}),u=he(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),h=he(()=>t.disable!==!0&&t.loading!==!0),d=he(()=>h.value===!0?t.tabindex||0:-1),g=he(()=>jD(t,"standard")),_=he(()=>{const P={tabindex:d.value};return s.value===!0?Object.assign(P,o.value):UD.includes(t.type)===!0&&(P.type=t.type),i.value==="a"?(t.disable===!0?P["aria-disabled"]="true":P.href===void 0&&(P.role="button"),r.value!==!0&&BD.test(t.type)===!0&&(P.type=t.type)):t.disable===!0&&(P.disabled="",P["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(P,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),P}),S=he(()=>{let P;t.color!==void 0?t.flat===!0||t.outline===!0?P=`text-${t.textColor||t.color}`:P=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(P=`text-${t.textColor}`);const L=t.round===!0?"round":`rectangle${u.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${g.value} q-btn--${L}`+(P!==void 0?" "+P:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),C=he(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:S,style:c,innerClasses:C,attributes:_,hasLink:s,linkTag:i,navigateOnClick:l,isActionable:h}}const{passiveCapture:qt}=Zr;let ys=null,vs=null,Es=null;const WD=vo({name:"QBtn",props:{...HD,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=Gs(),{classes:s,style:i,innerClasses:o,attributes:l,hasLink:c,linkTag:u,navigateOnClick:h,isActionable:d}=zD(t),g=Er(null),_=Er(null);let S=null,C,P=null;const L=he(()=>t.label!==void 0&&t.label!==null&&t.label!==""),D=he(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),x=he(()=>({center:t.round})),N=he(()=>{const Q=Math.max(0,Math.min(100,t.percentage));return Q>0?{transition:"transform 0.6s",transform:`translateX(${Q-100}%)`}:{}}),H=he(()=>{if(t.loading===!0)return{onMousedown:E,onTouchstart:E,onClick:E,onKeydown:E,onKeyup:E};if(d.value===!0){const Q={onClick:I,onKeydown:v,onMousedown:w};if(r.$q.platform.has.touch===!0){const _e=t.onTouchstart!==void 0?"":"Passive";Q[`onTouchstart${_e}`]=y}return Q}return{onClick:ms}}),z=he(()=>({ref:g,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:i.value,...l.value,...H.value}));function I(Q){if(g.value!==null){if(Q!==void 0){if(Q.defaultPrevented===!0)return;const _e=document.activeElement;if(t.type==="submit"&&_e!==document.body&&g.value.contains(_e)===!1&&_e.contains(g.value)===!1){Q.qAvoidFocus!==!0&&g.value.focus();const Oe=()=>{document.removeEventListener("keydown",ms,!0),document.removeEventListener("keyup",Oe,qt),g.value?.removeEventListener("blur",Oe,qt)};document.addEventListener("keydown",ms,!0),document.addEventListener("keyup",Oe,qt),g.value.addEventListener("blur",Oe,qt)}}h(Q)}}function v(Q){g.value!==null&&(n("keydown",Q),cu(Q,[13,32])===!0&&vs!==g.value&&(vs!==null&&A(),Q.defaultPrevented!==!0&&(Q.qAvoidFocus!==!0&&g.value.focus(),vs=g.value,g.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),g.value.addEventListener("blur",R,qt)),ms(Q)))}function y(Q){g.value!==null&&(n("touchstart",Q),Q.defaultPrevented!==!0&&(ys!==g.value&&(ys!==null&&A(),ys=g.value,S=Q.target,S.addEventListener("touchcancel",R,qt),S.addEventListener("touchend",R,qt)),C=!0,P!==null&&clearTimeout(P),P=setTimeout(()=>{P=null,C=!1},200)))}function w(Q){g.value!==null&&(Q.qSkipRipple=C===!0,n("mousedown",Q),Q.defaultPrevented!==!0&&Es!==g.value&&(Es!==null&&A(),Es=g.value,g.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,qt)))}function R(Q){if(g.value!==null&&!(Q?.type==="blur"&&document.activeElement===g.value)){if(Q?.type==="keyup"){if(vs===g.value&&cu(Q,[13,32])===!0){const _e=new MouseEvent("click",Q);_e.qKeyEvent=!0,Q.defaultPrevented===!0&&lu(_e),Q.cancelBubble===!0&&A_(_e),g.value.dispatchEvent(_e),ms(Q),Q.qKeyEvent=!0}n("keyup",Q)}A()}}function A(Q){const _e=_.value;Q!==!0&&(ys===g.value||Es===g.value)&&_e!==null&&_e!==document.activeElement&&(_e.setAttribute("tabindex",-1),_e.focus()),ys===g.value&&(S!==null&&(S.removeEventListener("touchcancel",R,qt),S.removeEventListener("touchend",R,qt)),ys=S=null),Es===g.value&&(document.removeEventListener("mouseup",R,qt),Es=null),vs===g.value&&(document.removeEventListener("keyup",R,!0),g.value?.removeEventListener("blur",R,qt),vs=null),g.value?.classList.remove("q-btn--active")}function E(Q){ms(Q),Q.qSkipRipple=!0}return _l(()=>{A(!0)}),Object.assign(r,{click:Q=>{d.value===!0&&I(Q)}}),()=>{let Q=[];t.icon!==void 0&&Q.push(fe(ol,{name:t.icon,left:t.stack!==!0&&L.value===!0,role:"img"})),L.value===!0&&Q.push(fe("span",{class:"block"},[t.label])),Q=Ci(e.default,Q),t.iconRight!==void 0&&t.round===!1&&Q.push(fe(ol,{name:t.iconRight,right:t.stack!==!0&&L.value===!0,role:"img"}));const _e=[fe("span",{class:"q-focus-helper",ref:_})];return t.loading===!0&&t.percentage!==void 0&&_e.push(fe("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[fe("span",{class:"q-btn__progress-indicator fit block",style:N.value})])),_e.push(fe("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},Q)),t.loading!==null&&_e.push(fe(dI,{name:"q-transition--fade"},()=>t.loading===!0?[fe("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[fe(LE)])]:null)),Vm(fe(u.value,z.value,_e),[[PD,D.value,void 0,x.value]])}}});let KD=1,GD=document.body;function QD(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${KD++}`:t,Ua.globalNodes!==void 0){const r=Ua.globalNodes.class;r!==void 0&&(n.className=r)}return GD.appendChild(n),n}function XN(t){t.remove()}let YD=0;const Aa={},Ra={},Yt={},BE={},JD=/^\s*$/,$E=[],XD=[void 0,null,!0,!1,""],df=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],ZD=["top-left","top-right","bottom-left","bottom-right"],Pi={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function jE(t,e,n){if(!t)return vi("parameter required");let r;const s={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(s,Aa),to(t)===!1&&(s.type&&Object.assign(s,Pi[s.type]),t={message:t}),Object.assign(s,Pi[t.type||s.type],t),typeof s.icon=="function"&&(s.icon=s.icon(e)),s.spinner?(s.spinner===!0&&(s.spinner=LE),s.spinner=mo(s.spinner)):s.spinner=!1,s.meta={hasMedia:!!(s.spinner!==!1||s.icon||s.avatar),hasText:rm(s.message)||rm(s.caption)},s.position){if(df.includes(s.position)===!1)return vi("wrong position",t)}else s.position="bottom";if(XD.includes(s.timeout)===!0)s.timeout=5e3;else{const c=Number(s.timeout);if(isNaN(c)||c<0)return vi("wrong timeout",t);s.timeout=Number.isFinite(c)?c:0}s.timeout===0?s.progress=!1:s.progress===!0&&(s.meta.progressClass="q-notification__progress"+(s.progressClass?` ${s.progressClass}`:""),s.meta.progressStyle={animationDuration:`${s.timeout+1e3}ms`});const i=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(Aa.actions)===!0?Aa.actions:[]).concat(Array.isArray(Pi[t.type]?.actions)===!0?Pi[t.type].actions:[]),{closeBtn:o}=s;if(o&&i.push({label:typeof o=="string"?o:e.lang.label.close}),s.actions=i.map(({handler:c,noDismiss:u,...h})=>({flat:!0,...h,onClick:typeof c=="function"?()=>{c(),u!==!0&&l()}:()=>{l()}})),s.multiLine===void 0&&(s.multiLine=s.actions.length>1),Object.assign(s.meta,{class:`q-notification row items-stretch q-notification--${s.multiLine===!0?"multi-line":"standard"}`+(s.color!==void 0?` bg-${s.color}`:"")+(s.textColor!==void 0?` text-${s.textColor}`:"")+(s.classes!==void 0?` ${s.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(s.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(s.multiLine===!0?"":" col"),leftClass:s.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...s.attrs}}),s.group===!1?(s.group=void 0,s.meta.group=void 0):((s.group===void 0||s.group===!0)&&(s.group=[s.message,s.caption,s.multiline].concat(s.actions.map(c=>`${c.label}*${c.icon}`)).join("|")),s.meta.group=s.group+"|"+s.position),s.actions.length===0?s.actions=void 0:s.meta.actionsClass="q-notification__actions row items-center "+(s.multiLine===!0?"justify-end":"col-auto")+(s.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),s.meta.uid=n.notif.meta.uid;const c=Yt[s.position].value.indexOf(n.notif);Yt[s.position].value[c]=s}else{const c=Ra[s.meta.group];if(c===void 0){if(s.meta.uid=YD++,s.meta.badge=1,["left","right","center"].indexOf(s.position)!==-1)Yt[s.position].value.splice(Math.floor(Yt[s.position].value.length/2),0,s);else{const u=s.position.indexOf("top")!==-1?"unshift":"push";Yt[s.position].value[u](s)}s.group!==void 0&&(Ra[s.meta.group]=s)}else{if(c.meta.timer&&(clearTimeout(c.meta.timer),c.meta.timer=void 0),s.badgePosition!==void 0){if(ZD.includes(s.badgePosition)===!1)return vi("wrong badgePosition",t)}else s.badgePosition=`top-${s.position.indexOf("left")!==-1?"right":"left"}`;s.meta.uid=c.meta.uid,s.meta.badge=c.meta.badge+1,s.meta.badgeClass=`q-notification__badge q-notification__badge--${s.badgePosition}`+(s.badgeColor!==void 0?` bg-${s.badgeColor}`:"")+(s.badgeTextColor!==void 0?` text-${s.badgeTextColor}`:"")+(s.badgeClass?` ${s.badgeClass}`:"");const u=Yt[s.position].value.indexOf(c);Yt[s.position].value[u]=Ra[s.meta.group]=s}}const l=()=>{eN(s),r=void 0};if(s.timeout>0&&(s.meta.timer=setTimeout(()=>{s.meta.timer=void 0,l()},s.timeout+1e3)),s.group!==void 0)return c=>{c!==void 0?vi("trying to update a grouped one which is forbidden",t):l()};if(r={dismiss:l,config:t,notif:s},n!==void 0){Object.assign(n,r);return}return c=>{if(r!==void 0)if(c===void 0)r.dismiss();else{const u=Object.assign({},r.config,c,{group:!1,position:s.position});jE(u,e,r)}}}function eN(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=Yt[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete Ra[t.meta.group];const n=$E[""+t.meta.uid];if(n){const{width:r,height:s}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=s}Yt[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function rm(t){return t!=null&&JD.test(t)!==!0}function vi(t,e){return console.error(`Notify: ${t}`,e),!1}function tN(){return vo({name:"QNotifications",devtools:{hide:!0},setup(){return()=>fe("div",{class:"q-notifications"},df.map(t=>fe(xI,{key:t,class:BE[t],tag:"div",name:`q-notification--${t}`},()=>Yt[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(fe(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(fe(ol,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(fe(bD,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>fe("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let i;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const l=[e.message];i=e.caption?[fe("div",l),fe("div",{class:"q-notification__caption"},[e.caption])]:l}r.push(fe("div",o,i))}const s=[fe("div",{class:n.contentClass},r)];return e.progress===!0&&s.push(fe("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&s.push(fe("div",{class:n.actionsClass},e.actions.map(i=>fe(WD,i)))),n.badge>1&&s.push(fe("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),fe("div",{ref:i=>{$E[""+n.uid]=i},key:n.uid,class:n.class,...n.attrs},[fe("div",{class:n.wrapperClass},s)])}))))}})}const nN={setDefaults(t){to(t)===!0&&Object.assign(Aa,t)},registerType(t,e){to(e)===!0&&(Pi[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>jE(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){df.forEach(r=>{Yt[r]=Er([]);const s=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")!==-1?"top":"bottom",i=r.indexOf("left")!==-1?"start":r.indexOf("right")!==-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${i}`;BE[r]=`q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`});const n=QD("q-notify");mb(tN(),e).mount(n)}}},rN={config:{},lang:pD,plugins:{Notify:nN,Meta:Sb}},sN="/";async function iN({app:t,router:e},n){let r=!1;const s=l=>{try{return e.resolve(l).href}catch{}return Object(l)===l?null:l},i=l=>{if(r=!0,typeof l=="string"&&/^https?:\/\//.test(l)){window.location.href=l;return}const c=s(l);c!==null&&(window.location.href=c)},o=window.location.href.replace(window.location.origin,"");for(let l=0;r===!1&&l<n.length;l++)try{await n[l]({app:t,router:e,ssrContext:null,redirect:i,urlPath:o,publicPath:sN})}catch(c){if(c&&c.url){i(c.url);return}console.error("[Quasar] boot error:",c);return}r!==!0&&(t.use(e),t.mount("#q-app"))}fD(I_,rN).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[e]([er(()=>import("./seo-Bewm7Jq1.js"),[])]).then(r=>{const s=n(r).filter(i=>typeof i=="function");iN(t,s)})});export{zN as $,RN as A,SN as B,gD as C,ml as D,uN as E,hN as F,cN as G,Ot as H,Xw as I,WD as J,ol as K,lN as L,Vm as M,Ku as N,ZI as O,fn as P,LE as Q,_N as R,eo as S,dI as T,XI as U,ms as V,JI as W,gN as X,QN as Y,aN as Z,IN as _,wr as a,DD as a$,Cb as a0,kb as a1,bN as a2,Lb as a3,AN as a4,Zo as a5,$N as a6,EE as a7,dN as a8,lu as a9,Tl as aA,UN as aB,LN as aC,MN as aD,FN as aE,nO as aF,rO as aG,fN as aH,bD as aI,YN as aJ,ND as aK,fb as aL,EN as aM,JN as aN,MD as aO,au as aP,Dk as aQ,BN as aR,NN as aS,VN as aT,DN as aU,xN as aV,PN as aW,kN as aX,ON as aY,ca as aZ,OD as a_,A_ as aa,km as ab,jN as ac,PD as ad,HN as ae,ha as af,vN as ag,Zr as ah,Ks as ai,sh as aj,eb as ak,hw as al,Km as am,Wm as an,hf as ao,ff as ap,mD as aq,KN as ar,bc as as,sb as at,fw as au,rh as av,Se as aw,wN as ax,to as ay,pN as az,qN as b,GN as b0,oN as b1,QD as b2,XN as b3,mN as b4,pb as b5,SD as b6,WN as b7,vo as c,he as d,TN as e,Ci as f,Gs as g,fe as h,Zt as i,dl as j,Va as k,yN as l,xa as m,iw as n,_l as o,St as p,d_ as q,Er as r,yw as s,CT as t,Gr as u,YI as v,Yr as w,cu as x,AD as y,RD as z};
