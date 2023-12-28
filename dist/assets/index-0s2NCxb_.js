var Mm=Object.defineProperty;var Sm=(t,e,n)=>e in t?Mm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ft=(t,e,n)=>(Sm(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ql(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ct={},yr=[],Hn=()=>{},ym=()=>!1,Em=/^on[^a-z]/,$a=t=>Em.test(t),$l=t=>t.startsWith("onUpdate:"),bt=Object.assign,Yl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bm=Object.prototype.hasOwnProperty,Qe=(t,e)=>bm.call(t,e),Pe=Array.isArray,Er=t=>ja(t)==="[object Map]",Fd=t=>ja(t)==="[object Set]",He=t=>typeof t=="function",vt=t=>typeof t=="string",Ya=t=>typeof t=="symbol",ot=t=>t!==null&&typeof t=="object",Od=t=>(ot(t)||He(t))&&He(t.then)&&He(t.catch),Bd=Object.prototype.toString,ja=t=>Bd.call(t),Tm=t=>ja(t).slice(8,-1),Hd=t=>ja(t)==="[object Object]",jl=t=>vt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ya=ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ka=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Am=/-(\w)/g,Mn=Ka(t=>t.replace(Am,(e,n)=>n?n.toUpperCase():"")),wm=/\B([A-Z])/g,Hr=Ka(t=>t.replace(wm,"-$1").toLowerCase()),zr=Ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),xo=Ka(t=>t?`on${zr(t)}`:""),Zi=(t,e)=>!Object.is(t,e),Mo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ca=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Cm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Rm=t=>{const e=vt(t)?Number(t):NaN;return isNaN(e)?t:e};let Xc;const ll=()=>Xc||(Xc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kl(t){if(Pe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=vt(i)?Im(i):Kl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(t)||ot(t))return t}const Pm=/;(?![^(]*\))/g,Lm=/:([^]+)/,Dm=/\/\*[^]*?\*\//g;function Im(t){const e={};return t.replace(Dm,"").split(Pm).forEach(n=>{if(n){const i=n.split(Lm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zl(t){let e="";if(vt(t))e=t;else if(Pe(t))for(let n=0;n<t.length;n++){const i=Zl(t[n]);i&&(e+=i+" ")}else if(ot(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Um="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nm=ql(Um);function zd(t){return!!t||t===""}const Pt=t=>vt(t)?t:t==null?"":Pe(t)||ot(t)&&(t.toString===Bd||!He(t.toString))?JSON.stringify(t,kd,2):String(t),kd=(t,e)=>e&&e.__v_isRef?kd(t,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Fd(e)?{[`Set(${e.size})`]:[...e.values()]}:ot(e)&&!Pe(e)&&!Hd(e)?String(e):e;let sn;class Vd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=sn;try{return sn=this,e()}finally{sn=n}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Fm(t){return new Vd(t)}function Om(t,e=sn){e&&e.active&&e.effects.push(t)}function Bm(){return sn}function Hm(t){sn&&sn.cleanups.push(t)}const Jl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Gd=t=>(t.w&Ei)>0,Wd=t=>(t.n&Ei)>0,zm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ei},km=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Gd(r)&&!Wd(r)?r.delete(t):e[n++]=r,r.w&=~Ei,r.n&=~Ei}e.length=n}},Ra=new WeakMap;let rs=0,Ei=1;const cl=30;let wn;const Wi=Symbol(""),ul=Symbol("");class Ql{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Om(this,i)}run(){if(!this.active)return this.fn();let e=wn,n=_i;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wn,wn=this,_i=!0,Ei=1<<++rs,rs<=cl?zm(this):qc(this),this.fn()}finally{rs<=cl&&km(this),Ei=1<<--rs,wn=this.parent,_i=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wn===this?this.deferStop=!0:this.active&&(qc(this),this.onStop&&this.onStop(),this.active=!1)}}function qc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _i=!0;const Xd=[];function kr(){Xd.push(_i),_i=!1}function Vr(){const t=Xd.pop();_i=t===void 0?!0:t}function Qt(t,e,n){if(_i&&wn){let i=Ra.get(t);i||Ra.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Jl()),qd(r)}}function qd(t,e){let n=!1;rs<=cl?Wd(t)||(t.n|=Ei,n=!Gd(t)):n=!t.has(wn),n&&(t.add(wn),wn.deps.push(t))}function ei(t,e,n,i,r,s){const a=Ra.get(t);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(n==="length"&&Pe(t)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!Ya(u)&&u>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(a.get(n)),e){case"add":Pe(t)?jl(n)&&o.push(a.get("length")):(o.push(a.get(Wi)),Er(t)&&o.push(a.get(ul)));break;case"delete":Pe(t)||(o.push(a.get(Wi)),Er(t)&&o.push(a.get(ul)));break;case"set":Er(t)&&o.push(a.get(Wi));break}if(o.length===1)o[0]&&fl(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);fl(Jl(l))}}function fl(t,e){const n=Pe(t)?t:[...t];for(const i of n)i.computed&&$c(i);for(const i of n)i.computed||$c(i)}function $c(t,e){(t!==wn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Vm(t,e){var n;return(n=Ra.get(t))==null?void 0:n.get(e)}const Gm=ql("__proto__,__v_isRef,__isVue"),$d=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ya)),Yc=Wm();function Wm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=We(this);for(let s=0,a=this.length;s<a;s++)Qt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){kr();const i=We(this)[e].apply(this,n);return Vr(),i}}),t}function Xm(t){const e=We(this);return Qt(e,"has",t),e.hasOwnProperty(t)}class Yd{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const r=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&i===(r?s?rg:Jd:s?Zd:Kd).get(e))return e;const a=Pe(e);if(!r){if(a&&Qe(Yc,n))return Reflect.get(Yc,n,i);if(n==="hasOwnProperty")return Xm}const o=Reflect.get(e,n,i);return(Ya(n)?$d.has(n):Gm(n))||(r||Qt(e,"get",n),s)?o:pt(o)?a&&jl(n)?o:o.value:ot(o)?r?nc(o):er(o):o}}class jd extends Yd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(Rr(s)&&pt(s)&&!pt(i))return!1;if(!this._shallow&&(!Pa(i)&&!Rr(i)&&(s=We(s),i=We(i)),!Pe(e)&&pt(s)&&!pt(i)))return s.value=i,!0;const a=Pe(e)&&jl(n)?Number(n)<e.length:Qe(e,n),o=Reflect.set(e,n,i,r);return e===We(r)&&(a?Zi(i,s)&&ei(e,"set",n,i):ei(e,"add",n,i)),o}deleteProperty(e,n){const i=Qe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ei(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ya(n)||!$d.has(n))&&Qt(e,"has",n),i}ownKeys(e){return Qt(e,"iterate",Pe(e)?"length":Wi),Reflect.ownKeys(e)}}class qm extends Yd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $m=new jd,Ym=new qm,jm=new jd(!0),ec=t=>t,Za=t=>Reflect.getPrototypeOf(t);function Vs(t,e,n=!1,i=!1){t=t.__v_raw;const r=We(t),s=We(e);n||(Zi(e,s)&&Qt(r,"get",e),Qt(r,"get",s));const{has:a}=Za(r),o=i?ec:n?rc:ds;if(a.call(r,e))return o(t.get(e));if(a.call(r,s))return o(t.get(s));t!==r&&t.get(e)}function Gs(t,e=!1){const n=this.__v_raw,i=We(n),r=We(t);return e||(Zi(t,r)&&Qt(i,"has",t),Qt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ws(t,e=!1){return t=t.__v_raw,!e&&Qt(We(t),"iterate",Wi),Reflect.get(t,"size",t)}function jc(t){t=We(t);const e=We(this);return Za(e).has.call(e,t)||(e.add(t),ei(e,"add",t,t)),this}function Kc(t,e){e=We(e);const n=We(this),{has:i,get:r}=Za(n);let s=i.call(n,t);s||(t=We(t),s=i.call(n,t));const a=r.call(n,t);return n.set(t,e),s?Zi(e,a)&&ei(n,"set",t,e):ei(n,"add",t,e),this}function Zc(t){const e=We(this),{has:n,get:i}=Za(e);let r=n.call(e,t);r||(t=We(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&ei(e,"delete",t,void 0),s}function Jc(){const t=We(this),e=t.size!==0,n=t.clear();return e&&ei(t,"clear",void 0,void 0),n}function Xs(t,e){return function(i,r){const s=this,a=s.__v_raw,o=We(a),l=e?ec:t?rc:ds;return!t&&Qt(o,"iterate",Wi),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function qs(t,e,n){return function(...i){const r=this.__v_raw,s=We(r),a=Er(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?ec:e?rc:ds;return!e&&Qt(s,"iterate",l?ul:Wi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function si(t){return function(...e){return t==="delete"?!1:this}}function Km(){const t={get(s){return Vs(this,s)},get size(){return Ws(this)},has:Gs,add:jc,set:Kc,delete:Zc,clear:Jc,forEach:Xs(!1,!1)},e={get(s){return Vs(this,s,!1,!0)},get size(){return Ws(this)},has:Gs,add:jc,set:Kc,delete:Zc,clear:Jc,forEach:Xs(!1,!0)},n={get(s){return Vs(this,s,!0)},get size(){return Ws(this,!0)},has(s){return Gs.call(this,s,!0)},add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear"),forEach:Xs(!0,!1)},i={get(s){return Vs(this,s,!0,!0)},get size(){return Ws(this,!0)},has(s){return Gs.call(this,s,!0)},add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear"),forEach:Xs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=qs(s,!1,!1),n[s]=qs(s,!0,!1),e[s]=qs(s,!1,!0),i[s]=qs(s,!0,!0)}),[t,n,e,i]}const[Zm,Jm,Qm,eg]=Km();function tc(t,e){const n=e?t?eg:Qm:t?Jm:Zm;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Qe(n,r)&&r in i?n:i,r,s)}const tg={get:tc(!1,!1)},ng={get:tc(!1,!0)},ig={get:tc(!0,!1)},Kd=new WeakMap,Zd=new WeakMap,Jd=new WeakMap,rg=new WeakMap;function sg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ag(t){return t.__v_skip||!Object.isExtensible(t)?0:sg(Tm(t))}function er(t){return Rr(t)?t:ic(t,!1,$m,tg,Kd)}function og(t){return ic(t,!1,jm,ng,Zd)}function nc(t){return ic(t,!0,Ym,ig,Jd)}function ic(t,e,n,i,r){if(!ot(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const a=ag(t);if(a===0)return t;const o=new Proxy(t,a===2?i:n);return r.set(t,o),o}function br(t){return Rr(t)?br(t.__v_raw):!!(t&&t.__v_isReactive)}function Rr(t){return!!(t&&t.__v_isReadonly)}function Pa(t){return!!(t&&t.__v_isShallow)}function Qd(t){return br(t)||Rr(t)}function We(t){const e=t&&t.__v_raw;return e?We(e):t}function eh(t){return Ca(t,"__v_skip",!0),t}const ds=t=>ot(t)?er(t):t,rc=t=>ot(t)?nc(t):t;function th(t){_i&&wn&&(t=We(t),qd(t.dep||(t.dep=Jl())))}function nh(t,e){t=We(t);const n=t.dep;n&&fl(n)}function pt(t){return!!(t&&t.__v_isRef===!0)}function Je(t){return ih(t,!1)}function Dt(t){return ih(t,!0)}function ih(t,e){return pt(t)?t:new lg(t,e)}class lg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:We(e),this._value=n?e:ds(e)}get value(){return th(this),this._value}set value(e){const n=this.__v_isShallow||Pa(e)||Rr(e);e=n?e:We(e),Zi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ds(e),nh(this))}}function jt(t){return pt(t)?t.value:t}const cg={get:(t,e,n)=>jt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return pt(r)&&!pt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function rh(t){return br(t)?t:new Proxy(t,cg)}function sc(t){const e=Pe(t)?new Array(t.length):{};for(const n in t)e[n]=sh(t,n);return e}class ug{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Vm(We(this._object),this._key)}}class fg{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Nt(t,e,n){return pt(t)?t:He(t)?new fg(t):ot(t)&&arguments.length>1?sh(t,e,n):Je(t)}function sh(t,e,n){const i=t[e];return pt(i)?i:new ug(t,e,n)}class dg{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ql(e,()=>{this._dirty||(this._dirty=!0,nh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=We(this);return th(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function hg(t,e,n=!1){let i,r;const s=He(t);return s?(i=t,r=Hn):(i=t.get,r=t.set),new dg(i,r,s||!r,n)}function vi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Ja(s,e,n)}return r}function vn(t,e,n,i){if(He(t)){const s=vi(t,e,n,i);return s&&Od(s)&&s.catch(a=>{Ja(a,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(vn(t[s],e,n,i));return r}function Ja(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){vi(l,null,10,[t,a,o]);return}}pg(t,n,r,i)}function pg(t,e,n,i=!0){console.error(t)}let hs=!1,dl=!1;const Ft=[];let On=0;const Tr=[];let Zn=null,Bi=0;const ah=Promise.resolve();let ac=null;function Qa(t){const e=ac||ah;return t?e.then(this?t.bind(this):t):e}function mg(t){let e=On+1,n=Ft.length;for(;e<n;){const i=e+n>>>1,r=Ft[i],s=ps(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function oc(t){(!Ft.length||!Ft.includes(t,hs&&t.allowRecurse?On+1:On))&&(t.id==null?Ft.push(t):Ft.splice(mg(t.id),0,t),oh())}function oh(){!hs&&!dl&&(dl=!0,ac=ah.then(ch))}function gg(t){const e=Ft.indexOf(t);e>On&&Ft.splice(e,1)}function _g(t){Pe(t)?Tr.push(...t):(!Zn||!Zn.includes(t,t.allowRecurse?Bi+1:Bi))&&Tr.push(t),oh()}function Qc(t,e=hs?On+1:0){for(;e<Ft.length;e++){const n=Ft[e];n&&n.pre&&(Ft.splice(e,1),e--,n())}}function lh(t){if(Tr.length){const e=[...new Set(Tr)];if(Tr.length=0,Zn){Zn.push(...e);return}for(Zn=e,Zn.sort((n,i)=>ps(n)-ps(i)),Bi=0;Bi<Zn.length;Bi++)Zn[Bi]();Zn=null,Bi=0}}const ps=t=>t.id==null?1/0:t.id,vg=(t,e)=>{const n=ps(t)-ps(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ch(t){dl=!1,hs=!0,Ft.sort(vg);try{for(On=0;On<Ft.length;On++){const e=Ft[On];e&&e.active!==!1&&vi(e,null,14)}}finally{On=0,Ft.length=0,lh(),hs=!1,ac=null,(Ft.length||Tr.length)&&ch()}}function xg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ct;let r=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||ct;d&&(r=n.map(p=>vt(p)?p.trim():p)),f&&(r=n.map(Cm))}let o,l=i[o=xo(e)]||i[o=xo(Mn(e))];!l&&s&&(l=i[o=xo(Hr(e))]),l&&vn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,vn(c,t,6,r)}}function uh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!He(t)){const l=c=>{const u=uh(c,e,!0);u&&(o=!0,bt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(ot(t)&&i.set(t,null),null):(Pe(s)?s.forEach(l=>a[l]=null):bt(a,s),ot(t)&&i.set(t,a),a)}function eo(t,e){return!t||!$a(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(t,e[0].toLowerCase()+e.slice(1))||Qe(t,Hr(e))||Qe(t,e))}let cn=null,to=null;function La(t){const e=cn;return cn=t,to=t&&t.type.__scopeId||null,e}function lc(t){to=t}function cc(){to=null}function ss(t,e=cn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&fu(-1);const s=La(e);let a;try{a=t(...r)}finally{La(s),i._d&&fu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function So(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:_}=t;let m,h;const A=La(t);try{if(n.shapeFlag&4){const b=r||i;m=Nn(u.call(b,b,f,s,p,d,g)),h=l}else{const b=e;m=Nn(b.length>1?b(s,{attrs:l,slots:o,emit:c}):b(s,null)),h=e.props?l:Mg(l)}}catch(b){us.length=0,Ja(b,t,1),m=ce(Dn)}let y=m;if(h&&_!==!1){const b=Object.keys(h),{shapeFlag:w}=y;b.length&&w&7&&(a&&b.some($l)&&(h=Sg(h,a)),y=bi(y,h))}return n.dirs&&(y=bi(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),m=y,La(A),m}const Mg=t=>{let e;for(const n in t)(n==="class"||n==="style"||$a(n))&&((e||(e={}))[n]=t[n]);return e},Sg=(t,e)=>{const n={};for(const i in t)(!$l(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function yg(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?eu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!eo(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?eu(i,a,c):!0:!!a;return!1}function eu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!eo(n,s))return!0}return!1}function Eg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fh="components",bg="directives",dh=Symbol.for("v-ndc");function Tg(t){return vt(t)?ph(fh,t,!1)||t:t||dh}function hh(t){return ph(bg,t)}function ph(t,e,n=!0,i=!1){const r=cn||Rt;if(r){const s=r.type;if(t===fh){const o=p_(s,!1);if(o&&(o===e||o===Mn(e)||o===zr(Mn(e))))return s}const a=tu(r[t]||s[t],e)||tu(r.appContext[t],e);return!a&&i?s:a}}function tu(t,e){return t&&(t[e]||t[Mn(e)]||t[zr(Mn(e))])}const Ag=t=>t.__isSuspense;function wg(t,e){e&&e.pendingBranch?Pe(t)?e.effects.push(...t):e.effects.push(t):_g(t)}function no(t,e){return io(t,null,e)}function Cg(t,e){return io(t,null,{flush:"post"})}const $s={};function Ot(t,e,n){return io(t,e,n)}function io(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:a}=ct){var o;const l=Bm()===((o=Rt)==null?void 0:o.scope)?Rt:null;let c,u=!1,f=!1;if(pt(t)?(c=()=>t.value,u=Pa(t)):br(t)?(c=()=>t,i=!0):Pe(t)?(f=!0,u=t.some(b=>br(b)||Pa(b)),c=()=>t.map(b=>{if(pt(b))return b.value;if(br(b))return Gi(b);if(He(b))return vi(b,l,2)})):He(t)?e?c=()=>vi(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),vn(t,l,3,[p])}:c=Hn,e&&i){const b=c;c=()=>Gi(b())}let d,p=b=>{d=A.onStop=()=>{vi(b,l,4)}},g;if(vs)if(p=Hn,e?n&&vn(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const b=__();g=b.__watcherHandles||(b.__watcherHandles=[])}else return Hn;let _=f?new Array(t.length).fill($s):$s;const m=()=>{if(A.active)if(e){const b=A.run();(i||u||(f?b.some((w,L)=>Zi(w,_[L])):Zi(b,_)))&&(d&&d(),vn(e,l,3,[b,_===$s?void 0:f&&_[0]===$s?[]:_,p]),_=b)}else A.run()};m.allowRecurse=!!e;let h;r==="sync"?h=m:r==="post"?h=()=>Xt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),h=()=>oc(m));const A=new Ql(c,h);e?n?m():_=A.run():r==="post"?Xt(A.run.bind(A),l&&l.suspense):A.run();const y=()=>{A.stop(),l&&l.scope&&Yl(l.scope.effects,A)};return g&&g.push(y),y}function Rg(t,e,n){const i=this.proxy,r=vt(t)?t.includes(".")?mh(i,t):()=>i[t]:t.bind(i,i);let s;He(e)?s=e:(s=e.handler,n=e);const a=Rt;Dr(this);const o=io(r,s.bind(i),n);return a?Dr(a):Xi(),o}function mh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Gi(t,e){if(!ot(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pt(t))Gi(t.value,e);else if(Pe(t))for(let n=0;n<t.length;n++)Gi(t[n],e);else if(Fd(t)||Er(t))t.forEach(n=>{Gi(n,e)});else if(Hd(t))for(const n in t)Gi(t[n],e);return t}function xi(t,e){const n=cn;if(n===null)return t;const i=lo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,l,c=ct]=e[s];a&&(He(a)&&(a={mounted:a,updated:a}),a.deep&&Gi(o),r.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ci(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(kr(),vn(l,n,8,[t.el,o,t,e]),Vr())}}const hi=Symbol("_leaveCb"),Ys=Symbol("_enterCb");function gh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ws(()=>{t.isMounted=!0}),Cs(()=>{t.isUnmounting=!0}),t}const hn=[Function,Array],_h={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:hn,onEnter:hn,onAfterEnter:hn,onEnterCancelled:hn,onBeforeLeave:hn,onLeave:hn,onAfterLeave:hn,onLeaveCancelled:hn,onBeforeAppear:hn,onAppear:hn,onAfterAppear:hn,onAppearCancelled:hn},Pg={name:"BaseTransition",props:_h,setup(t,{slots:e}){const n=oo(),i=gh();let r;return()=>{const s=e.default&&uc(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const _ of s)if(_.type!==Dn){a=_;break}}const o=We(t),{mode:l}=o;if(i.isLeaving)return yo(a);const c=nu(a);if(!c)return yo(a);const u=ms(c,o,i,n);gs(c,u);const f=n.subTree,d=f&&nu(f);let p=!1;const{getTransitionKey:g}=c.type;if(g){const _=g();r===void 0?r=_:_!==r&&(r=_,p=!0)}if(d&&d.type!==Dn&&(!Hi(c,d)||p)){const _=ms(d,o,i,n);if(gs(d,_),l==="out-in")return i.isLeaving=!0,_.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},yo(a);l==="in-out"&&c.type!==Dn&&(_.delayLeave=(m,h,A)=>{const y=vh(i,d);y[String(d.key)]=d,m[hi]=()=>{h(),m[hi]=void 0,delete u.delayedLeave},u.delayedLeave=A})}return a}}},Lg=Pg;function vh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ms(t,e,n,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:_,onAppear:m,onAfterAppear:h,onAppearCancelled:A}=e,y=String(t.key),b=vh(n,t),w=(O,M)=>{O&&vn(O,i,9,M)},L=(O,M)=>{const T=M[1];w(O,M),Pe(O)?O.every(k=>k.length<=1)&&T():O.length<=1&&T()},C={mode:s,persisted:a,beforeEnter(O){let M=o;if(!n.isMounted)if(r)M=_||o;else return;O[hi]&&O[hi](!0);const T=b[y];T&&Hi(t,T)&&T.el[hi]&&T.el[hi](),w(M,[O])},enter(O){let M=l,T=c,k=u;if(!n.isMounted)if(r)M=m||l,T=h||c,k=A||u;else return;let R=!1;const z=O[Ys]=D=>{R||(R=!0,D?w(k,[O]):w(T,[O]),C.delayedLeave&&C.delayedLeave(),O[Ys]=void 0)};M?L(M,[O,z]):z()},leave(O,M){const T=String(t.key);if(O[Ys]&&O[Ys](!0),n.isUnmounting)return M();w(f,[O]);let k=!1;const R=O[hi]=z=>{k||(k=!0,M(),z?w(g,[O]):w(p,[O]),O[hi]=void 0,b[T]===t&&delete b[T])};b[T]=t,d?L(d,[O,R]):R()},clone(O){return ms(O,e,n,i)}};return C}function yo(t){if(ro(t))return t=bi(t),t.children=null,t}function nu(t){return ro(t)?t.children?t.children[0]:void 0:t}function gs(t,e){t.shapeFlag&6&&t.component?gs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function uc(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===dt?(a.patchFlag&128&&r++,i=i.concat(uc(a.children,e,o))):(e||a.type!==Dn)&&i.push(o!=null?bi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function un(t,e){return He(t)?bt({name:t.name},e,{setup:t}):t}const Ea=t=>!!t.type.__asyncLoader,ro=t=>t.type.__isKeepAlive;function Dg(t,e){xh(t,"a",e)}function Ig(t,e){xh(t,"da",e)}function xh(t,e,n=Rt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(so(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ro(r.parent.vnode)&&Ug(i,e,n,r),r=r.parent}}function Ug(t,e,n,i){const r=so(e,t,i,!0);fc(()=>{Yl(i[e],r)},n)}function so(t,e,n=Rt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;kr(),Dr(n);const o=vn(e,n,t,a);return Xi(),Vr(),o});return i?r.unshift(s):r.push(s),s}}const ni=t=>(e,n=Rt)=>(!vs||t==="sp")&&so(t,(...i)=>e(...i),n),Mh=ni("bm"),ws=ni("m"),Ng=ni("bu"),Sh=ni("u"),Cs=ni("bum"),fc=ni("um"),Fg=ni("sp"),Og=ni("rtg"),Bg=ni("rtc");function Hg(t,e=Rt){so("ec",t,e)}function Da(t,e,n,i){let r;const s=n&&n[i];if(Pe(t)||vt(t)){r=new Array(t.length);for(let a=0,o=t.length;a<o;a++)r[a]=e(t[a],a,void 0,s&&s[a])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(ot(t))if(t[Symbol.iterator])r=Array.from(t,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(t);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(t[c],c,o,s&&s[o])}}else r=[];return n&&(n[i]=r),r}const hl=t=>t?Ih(t)?lo(t)||t.proxy:hl(t.parent):null,cs=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hl(t.parent),$root:t=>hl(t.root),$emit:t=>t.emit,$options:t=>dc(t),$forceUpdate:t=>t.f||(t.f=()=>oc(t.update)),$nextTick:t=>t.n||(t.n=Qa.bind(t.proxy)),$watch:t=>Rg.bind(t)}),Eo=(t,e)=>t!==ct&&!t.__isScriptSetup&&Qe(t,e),zg={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Eo(i,e))return a[e]=1,i[e];if(r!==ct&&Qe(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&Qe(c,e))return a[e]=3,s[e];if(n!==ct&&Qe(n,e))return a[e]=4,n[e];pl&&(a[e]=0)}}const u=cs[e];let f,d;if(u)return e==="$attrs"&&Qt(t,"get",e),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==ct&&Qe(n,e))return a[e]=4,n[e];if(d=l.config.globalProperties,Qe(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Eo(r,e)?(r[e]=n,!0):i!==ct&&Qe(i,e)?(i[e]=n,!0):Qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==ct&&Qe(t,a)||Eo(e,a)||(o=s[0])&&Qe(o,a)||Qe(i,a)||Qe(cs,a)||Qe(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function iu(t){return Pe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pl=!0;function kg(t){const e=dc(t),n=t.proxy,i=t.ctx;pl=!1,e.beforeCreate&&ru(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:A,destroyed:y,unmounted:b,render:w,renderTracked:L,renderTriggered:C,errorCaptured:O,serverPrefetch:M,expose:T,inheritAttrs:k,components:R,directives:z,filters:D}=e;if(c&&Vg(c,i,null),a)for(const Y in a){const Z=a[Y];He(Z)&&(i[Y]=Z.bind(n))}if(r){const Y=r.call(n,n);ot(Y)&&(t.data=er(Y))}if(pl=!0,s)for(const Y in s){const Z=s[Y],ae=He(Z)?Z.bind(n,n):He(Z.get)?Z.get.bind(n,n):Hn,se=!He(Z)&&He(Z.set)?Z.set.bind(n):Hn,F=Ae({get:ae,set:se});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>F.value,set:X=>F.value=X})}if(o)for(const Y in o)yh(o[Y],i,n,Y);if(l){const Y=He(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(Z=>{ii(Z,Y[Z])})}u&&ru(u,t,"c");function $(Y,Z){Pe(Z)?Z.forEach(ae=>Y(ae.bind(n))):Z&&Y(Z.bind(n))}if($(Mh,f),$(ws,d),$(Ng,p),$(Sh,g),$(Dg,_),$(Ig,m),$(Hg,O),$(Bg,L),$(Og,C),$(Cs,A),$(fc,b),$(Fg,M),Pe(T))if(T.length){const Y=t.exposed||(t.exposed={});T.forEach(Z=>{Object.defineProperty(Y,Z,{get:()=>n[Z],set:ae=>n[Z]=ae})})}else t.exposed||(t.exposed={});w&&t.render===Hn&&(t.render=w),k!=null&&(t.inheritAttrs=k),R&&(t.components=R),z&&(t.directives=z)}function Vg(t,e,n=Hn){Pe(t)&&(t=ml(t));for(const i in t){const r=t[i];let s;ot(r)?"default"in r?s=xn(r.from||i,r.default,!0):s=xn(r.from||i):s=xn(r),pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function ru(t,e,n){vn(Pe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function yh(t,e,n,i){const r=i.includes(".")?mh(n,i):()=>n[i];if(vt(t)){const s=e[t];He(s)&&Ot(r,s)}else if(He(t))Ot(r,t.bind(n));else if(ot(t))if(Pe(t))t.forEach(s=>yh(s,e,n,i));else{const s=He(t.handler)?t.handler.bind(n):e[t.handler];He(s)&&Ot(r,s,t)}}function dc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ia(l,c,a,!0)),Ia(l,e,a)),ot(e)&&s.set(e,l),l}function Ia(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ia(t,s,n,!0),r&&r.forEach(a=>Ia(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=Gg[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const Gg={data:su,props:au,emits:au,methods:as,computed:as,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:as,directives:as,watch:Xg,provide:su,inject:Wg};function su(t,e){return e?t?function(){return bt(He(t)?t.call(this,this):t,He(e)?e.call(this,this):e)}:e:t}function Wg(t,e){return as(ml(t),ml(e))}function ml(t){if(Pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function zt(t,e){return t?[...new Set([].concat(t,e))]:e}function as(t,e){return t?bt(Object.create(null),t,e):e}function au(t,e){return t?Pe(t)&&Pe(e)?[...new Set([...t,...e])]:bt(Object.create(null),iu(t),iu(e??{})):e}function Xg(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const i in e)n[i]=zt(t[i],e[i]);return n}function Eh(){return{app:null,config:{isNativeTag:ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qg=0;function $g(t,e){return function(i,r=null){He(i)||(i=bt({},i)),r!=null&&!ot(r)&&(r=null);const s=Eh(),a=new WeakSet;let o=!1;const l=s.app={_uid:qg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:v_,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&He(c.install)?(a.add(c),c.install(l,...u)):He(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const d=ce(i,r);return d.appContext=s,u&&e?e(d,c):t(d,c,f),o=!0,l._container=c,c.__vue_app__=l,lo(d.component)||d.component.proxy}},unmount(){o&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Ua=l;try{return c()}finally{Ua=null}}};return l}}let Ua=null;function ii(t,e){if(Rt){let n=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===n&&(n=Rt.provides=Object.create(i)),n[t]=e}}function xn(t,e,n=!1){const i=Rt||cn;if(i||Ua){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ua._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&He(e)?e.call(i&&i.proxy):e}}function Yg(t,e,n,i=!1){const r={},s={};Ca(s,ao,1),t.propsDefaults=Object.create(null),bh(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:og(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function jg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=We(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(eo(t.emitsOptions,d))continue;const p=e[d];if(l)if(Qe(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=Mn(d);r[g]=gl(l,o,g,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{bh(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Qe(e,f)&&((u=Hr(f))===f||!Qe(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=gl(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&ei(t,"set","$attrs")}function bh(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(ya(l))continue;const c=e[l];let u;r&&Qe(r,u=Mn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:eo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=We(n),c=o||ct;for(let u=0;u<s.length;u++){const f=s[u];n[f]=gl(r,l,f,c[f],t,!Qe(c,f))}}return a}function gl(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=Qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&He(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Dr(r),i=c[n]=l.call(null,e),Xi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Hr(n))&&(i=!0))}return i}function Th(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!He(t)){const u=f=>{l=!0;const[d,p]=Th(f,e,!0);bt(a,d),p&&o.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ot(t)&&i.set(t,yr),yr;if(Pe(s))for(let u=0;u<s.length;u++){const f=Mn(s[u]);ou(f)&&(a[f]=ct)}else if(s)for(const u in s){const f=Mn(u);if(ou(f)){const d=s[u],p=a[f]=Pe(d)||He(d)?{type:d}:bt({},d);if(p){const g=uu(Boolean,p.type),_=uu(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||Qe(p,"default"))&&o.push(f)}}}const c=[a,o];return ot(t)&&i.set(t,c),c}function ou(t){return t[0]!=="$"}function lu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cu(t,e){return lu(t)===lu(e)}function uu(t,e){return Pe(e)?e.findIndex(n=>cu(n,t)):He(e)&&cu(e,t)?0:-1}const Ah=t=>t[0]==="_"||t==="$stable",hc=t=>Pe(t)?t.map(Nn):[Nn(t)],Kg=(t,e,n)=>{if(e._n)return e;const i=ss((...r)=>hc(e(...r)),n);return i._c=!1,i},wh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Ah(r))continue;const s=t[r];if(He(s))e[r]=Kg(r,s,i);else if(s!=null){const a=hc(s);e[r]=()=>a}}},Ch=(t,e)=>{const n=hc(e);t.slots.default=()=>n},Zg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=We(e),Ca(e,"_",n)):wh(e,t.slots={})}else t.slots={},e&&Ch(t,e);Ca(t.slots,ao,1)},Jg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=ct;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:(bt(r,e),!n&&o===1&&delete r._):(s=!e.$stable,wh(e,r)),a=e}else e&&(Ch(t,e),a={default:1});if(s)for(const o in r)!Ah(o)&&a[o]==null&&delete r[o]};function _l(t,e,n,i,r=!1){if(Pe(t)){t.forEach((d,p)=>_l(d,e&&(Pe(e)?e[p]:e),n,i,r));return}if(Ea(i)&&!r)return;const s=i.shapeFlag&4?lo(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===ct?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(vt(c)?(u[c]=null,Qe(f,c)&&(f[c]=null)):pt(c)&&(c.value=null)),He(l))vi(l,o,12,[a,u]);else{const d=vt(l),p=pt(l);if(d||p){const g=()=>{if(t.f){const _=d?Qe(f,l)?f[l]:u[l]:l.value;r?Pe(_)&&Yl(_,s):Pe(_)?_.includes(s)||_.push(s):d?(u[l]=[s],Qe(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=a,Qe(f,l)&&(f[l]=a)):p&&(l.value=a,t.k&&(u[t.k]=a))};a?(g.id=-1,Xt(g,n)):g()}}}const Xt=wg;function Qg(t){return e_(t)}function e_(t,e){const n=ll();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Hn,insertStaticContent:g}=t,_=(x,P,N,V=null,G=null,oe=null,re=!1,J=null,le=!!P.dynamicChildren)=>{if(x===P)return;x&&!Hi(x,P)&&(V=Xe(x),X(x,G,oe,!0),x=null),P.patchFlag===-2&&(le=!1,P.dynamicChildren=null);const{type:ne,ref:Me,shapeFlag:S}=P;switch(ne){case Rs:m(x,P,N,V);break;case Dn:h(x,P,N,V);break;case ba:x==null&&A(P,N,V,re);break;case dt:R(x,P,N,V,G,oe,re,J,le);break;default:S&1?w(x,P,N,V,G,oe,re,J,le):S&6?z(x,P,N,V,G,oe,re,J,le):(S&64||S&128)&&ne.process(x,P,N,V,G,oe,re,J,le,Ne)}Me!=null&&G&&_l(Me,x&&x.ref,oe,P||x,!P)},m=(x,P,N,V)=>{if(x==null)i(P.el=o(P.children),N,V);else{const G=P.el=x.el;P.children!==x.children&&c(G,P.children)}},h=(x,P,N,V)=>{x==null?i(P.el=l(P.children||""),N,V):P.el=x.el},A=(x,P,N,V)=>{[x.el,x.anchor]=g(x.children,P,N,V,x.el,x.anchor)},y=({el:x,anchor:P},N,V)=>{let G;for(;x&&x!==P;)G=d(x),i(x,N,V),x=G;i(P,N,V)},b=({el:x,anchor:P})=>{let N;for(;x&&x!==P;)N=d(x),r(x),x=N;r(P)},w=(x,P,N,V,G,oe,re,J,le)=>{re=re||P.type==="svg",x==null?L(P,N,V,G,oe,re,J,le):M(x,P,G,oe,re,J,le)},L=(x,P,N,V,G,oe,re,J)=>{let le,ne;const{type:Me,props:S,shapeFlag:v,transition:U,dirs:Q}=x;if(le=x.el=a(x.type,oe,S&&S.is,S),v&8?u(le,x.children):v&16&&O(x.children,le,null,V,G,oe&&Me!=="foreignObject",re,J),Q&&Ci(x,null,V,"created"),C(le,x,x.scopeId,re,V),S){for(const ie in S)ie!=="value"&&!ya(ie)&&s(le,ie,null,S[ie],oe,x.children,V,G,ye);"value"in S&&s(le,"value",null,S.value),(ne=S.onVnodeBeforeMount)&&Un(ne,V,x)}Q&&Ci(x,null,V,"beforeMount");const ee=t_(G,U);ee&&U.beforeEnter(le),i(le,P,N),((ne=S&&S.onVnodeMounted)||ee||Q)&&Xt(()=>{ne&&Un(ne,V,x),ee&&U.enter(le),Q&&Ci(x,null,V,"mounted")},G)},C=(x,P,N,V,G)=>{if(N&&p(x,N),V)for(let oe=0;oe<V.length;oe++)p(x,V[oe]);if(G){let oe=G.subTree;if(P===oe){const re=G.vnode;C(x,re,re.scopeId,re.slotScopeIds,G.parent)}}},O=(x,P,N,V,G,oe,re,J,le=0)=>{for(let ne=le;ne<x.length;ne++){const Me=x[ne]=J?pi(x[ne]):Nn(x[ne]);_(null,Me,P,N,V,G,oe,re,J)}},M=(x,P,N,V,G,oe,re)=>{const J=P.el=x.el;let{patchFlag:le,dynamicChildren:ne,dirs:Me}=P;le|=x.patchFlag&16;const S=x.props||ct,v=P.props||ct;let U;N&&Ri(N,!1),(U=v.onVnodeBeforeUpdate)&&Un(U,N,P,x),Me&&Ci(P,x,N,"beforeUpdate"),N&&Ri(N,!0);const Q=G&&P.type!=="foreignObject";if(ne?T(x.dynamicChildren,ne,J,N,V,Q,oe):re||Z(x,P,J,null,N,V,Q,oe,!1),le>0){if(le&16)k(J,P,S,v,N,V,G);else if(le&2&&S.class!==v.class&&s(J,"class",null,v.class,G),le&4&&s(J,"style",S.style,v.style,G),le&8){const ee=P.dynamicProps;for(let ie=0;ie<ee.length;ie++){const ge=ee[ie],fe=S[ge],ve=v[ge];(ve!==fe||ge==="value")&&s(J,ge,fe,ve,G,x.children,N,V,ye)}}le&1&&x.children!==P.children&&u(J,P.children)}else!re&&ne==null&&k(J,P,S,v,N,V,G);((U=v.onVnodeUpdated)||Me)&&Xt(()=>{U&&Un(U,N,P,x),Me&&Ci(P,x,N,"updated")},V)},T=(x,P,N,V,G,oe,re)=>{for(let J=0;J<P.length;J++){const le=x[J],ne=P[J],Me=le.el&&(le.type===dt||!Hi(le,ne)||le.shapeFlag&70)?f(le.el):N;_(le,ne,Me,null,V,G,oe,re,!0)}},k=(x,P,N,V,G,oe,re)=>{if(N!==V){if(N!==ct)for(const J in N)!ya(J)&&!(J in V)&&s(x,J,N[J],null,re,P.children,G,oe,ye);for(const J in V){if(ya(J))continue;const le=V[J],ne=N[J];le!==ne&&J!=="value"&&s(x,J,ne,le,re,P.children,G,oe,ye)}"value"in V&&s(x,"value",N.value,V.value)}},R=(x,P,N,V,G,oe,re,J,le)=>{const ne=P.el=x?x.el:o(""),Me=P.anchor=x?x.anchor:o("");let{patchFlag:S,dynamicChildren:v,slotScopeIds:U}=P;U&&(J=J?J.concat(U):U),x==null?(i(ne,N,V),i(Me,N,V),O(P.children,N,Me,G,oe,re,J,le)):S>0&&S&64&&v&&x.dynamicChildren?(T(x.dynamicChildren,v,N,G,oe,re,J),(P.key!=null||G&&P===G.subTree)&&Rh(x,P,!0)):Z(x,P,N,Me,G,oe,re,J,le)},z=(x,P,N,V,G,oe,re,J,le)=>{P.slotScopeIds=J,x==null?P.shapeFlag&512?G.ctx.activate(P,N,V,re,le):D(P,N,V,G,oe,re,le):W(x,P,le)},D=(x,P,N,V,G,oe,re)=>{const J=x.component=c_(x,V,G);if(ro(x)&&(J.ctx.renderer=Ne),u_(J),J.asyncDep){if(G&&G.registerDep(J,$),!x.el){const le=J.subTree=ce(Dn);h(null,le,P,N)}return}$(J,x,P,N,G,oe,re)},W=(x,P,N)=>{const V=P.component=x.component;if(yg(x,P,N))if(V.asyncDep&&!V.asyncResolved){Y(V,P,N);return}else V.next=P,gg(V.update),V.update();else P.el=x.el,V.vnode=P},$=(x,P,N,V,G,oe,re)=>{const J=()=>{if(x.isMounted){let{next:Me,bu:S,u:v,parent:U,vnode:Q}=x,ee=Me,ie;Ri(x,!1),Me?(Me.el=Q.el,Y(x,Me,re)):Me=Q,S&&Mo(S),(ie=Me.props&&Me.props.onVnodeBeforeUpdate)&&Un(ie,U,Me,Q),Ri(x,!0);const ge=So(x),fe=x.subTree;x.subTree=ge,_(fe,ge,f(fe.el),Xe(fe),x,G,oe),Me.el=ge.el,ee===null&&Eg(x,ge.el),v&&Xt(v,G),(ie=Me.props&&Me.props.onVnodeUpdated)&&Xt(()=>Un(ie,U,Me,Q),G)}else{let Me;const{el:S,props:v}=P,{bm:U,m:Q,parent:ee}=x,ie=Ea(P);if(Ri(x,!1),U&&Mo(U),!ie&&(Me=v&&v.onVnodeBeforeMount)&&Un(Me,ee,P),Ri(x,!0),S&&ze){const ge=()=>{x.subTree=So(x),ze(S,x.subTree,x,G,null)};ie?P.type.__asyncLoader().then(()=>!x.isUnmounted&&ge()):ge()}else{const ge=x.subTree=So(x);_(null,ge,N,V,x,G,oe),P.el=ge.el}if(Q&&Xt(Q,G),!ie&&(Me=v&&v.onVnodeMounted)){const ge=P;Xt(()=>Un(Me,ee,ge),G)}(P.shapeFlag&256||ee&&Ea(ee.vnode)&&ee.vnode.shapeFlag&256)&&x.a&&Xt(x.a,G),x.isMounted=!0,P=N=V=null}},le=x.effect=new Ql(J,()=>oc(ne),x.scope),ne=x.update=()=>le.run();ne.id=x.uid,Ri(x,!0),ne()},Y=(x,P,N)=>{P.component=x;const V=x.vnode.props;x.vnode=P,x.next=null,jg(x,P.props,V,N),Jg(x,P.children,N),kr(),Qc(),Vr()},Z=(x,P,N,V,G,oe,re,J,le=!1)=>{const ne=x&&x.children,Me=x?x.shapeFlag:0,S=P.children,{patchFlag:v,shapeFlag:U}=P;if(v>0){if(v&128){se(ne,S,N,V,G,oe,re,J,le);return}else if(v&256){ae(ne,S,N,V,G,oe,re,J,le);return}}U&8?(Me&16&&ye(ne,G,oe),S!==ne&&u(N,S)):Me&16?U&16?se(ne,S,N,V,G,oe,re,J,le):ye(ne,G,oe,!0):(Me&8&&u(N,""),U&16&&O(S,N,V,G,oe,re,J,le))},ae=(x,P,N,V,G,oe,re,J,le)=>{x=x||yr,P=P||yr;const ne=x.length,Me=P.length,S=Math.min(ne,Me);let v;for(v=0;v<S;v++){const U=P[v]=le?pi(P[v]):Nn(P[v]);_(x[v],U,N,null,G,oe,re,J,le)}ne>Me?ye(x,G,oe,!0,!1,S):O(P,N,V,G,oe,re,J,le,S)},se=(x,P,N,V,G,oe,re,J,le)=>{let ne=0;const Me=P.length;let S=x.length-1,v=Me-1;for(;ne<=S&&ne<=v;){const U=x[ne],Q=P[ne]=le?pi(P[ne]):Nn(P[ne]);if(Hi(U,Q))_(U,Q,N,null,G,oe,re,J,le);else break;ne++}for(;ne<=S&&ne<=v;){const U=x[S],Q=P[v]=le?pi(P[v]):Nn(P[v]);if(Hi(U,Q))_(U,Q,N,null,G,oe,re,J,le);else break;S--,v--}if(ne>S){if(ne<=v){const U=v+1,Q=U<Me?P[U].el:V;for(;ne<=v;)_(null,P[ne]=le?pi(P[ne]):Nn(P[ne]),N,Q,G,oe,re,J,le),ne++}}else if(ne>v)for(;ne<=S;)X(x[ne],G,oe,!0),ne++;else{const U=ne,Q=ne,ee=new Map;for(ne=Q;ne<=v;ne++){const ke=P[ne]=le?pi(P[ne]):Nn(P[ne]);ke.key!=null&&ee.set(ke.key,ne)}let ie,ge=0;const fe=v-Q+1;let ve=!1,Le=0;const je=new Array(fe);for(ne=0;ne<fe;ne++)je[ne]=0;for(ne=U;ne<=S;ne++){const ke=x[ne];if(ge>=fe){X(ke,G,oe,!0);continue}let Ce;if(ke.key!=null)Ce=ee.get(ke.key);else for(ie=Q;ie<=v;ie++)if(je[ie-Q]===0&&Hi(ke,P[ie])){Ce=ie;break}Ce===void 0?X(ke,G,oe,!0):(je[Ce-Q]=ne+1,Ce>=Le?Le=Ce:ve=!0,_(ke,P[Ce],N,null,G,oe,re,J,le),ge++)}const de=ve?n_(je):yr;for(ie=de.length-1,ne=fe-1;ne>=0;ne--){const ke=Q+ne,Ce=P[ke],De=ke+1<Me?P[ke+1].el:V;je[ne]===0?_(null,Ce,N,De,G,oe,re,J,le):ve&&(ie<0||ne!==de[ie]?F(Ce,N,De,2):ie--)}}},F=(x,P,N,V,G=null)=>{const{el:oe,type:re,transition:J,children:le,shapeFlag:ne}=x;if(ne&6){F(x.component.subTree,P,N,V);return}if(ne&128){x.suspense.move(P,N,V);return}if(ne&64){re.move(x,P,N,Ne);return}if(re===dt){i(oe,P,N);for(let S=0;S<le.length;S++)F(le[S],P,N,V);i(x.anchor,P,N);return}if(re===ba){y(x,P,N);return}if(V!==2&&ne&1&&J)if(V===0)J.beforeEnter(oe),i(oe,P,N),Xt(()=>J.enter(oe),G);else{const{leave:S,delayLeave:v,afterLeave:U}=J,Q=()=>i(oe,P,N),ee=()=>{S(oe,()=>{Q(),U&&U()})};v?v(oe,Q,ee):ee()}else i(oe,P,N)},X=(x,P,N,V=!1,G=!1)=>{const{type:oe,props:re,ref:J,children:le,dynamicChildren:ne,shapeFlag:Me,patchFlag:S,dirs:v}=x;if(J!=null&&_l(J,null,N,x,!0),Me&256){P.ctx.deactivate(x);return}const U=Me&1&&v,Q=!Ea(x);let ee;if(Q&&(ee=re&&re.onVnodeBeforeUnmount)&&Un(ee,P,x),Me&6)be(x.component,N,V);else{if(Me&128){x.suspense.unmount(N,V);return}U&&Ci(x,null,P,"beforeUnmount"),Me&64?x.type.remove(x,P,N,G,Ne,V):ne&&(oe!==dt||S>0&&S&64)?ye(ne,P,N,!1,!0):(oe===dt&&S&384||!G&&Me&16)&&ye(le,P,N),V&&_e(x)}(Q&&(ee=re&&re.onVnodeUnmounted)||U)&&Xt(()=>{ee&&Un(ee,P,x),U&&Ci(x,null,P,"unmounted")},N)},_e=x=>{const{type:P,el:N,anchor:V,transition:G}=x;if(P===dt){xe(N,V);return}if(P===ba){b(x);return}const oe=()=>{r(N),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(x.shapeFlag&1&&G&&!G.persisted){const{leave:re,delayLeave:J}=G,le=()=>re(N,oe);J?J(x.el,oe,le):le()}else oe()},xe=(x,P)=>{let N;for(;x!==P;)N=d(x),r(x),x=N;r(P)},be=(x,P,N)=>{const{bum:V,scope:G,update:oe,subTree:re,um:J}=x;V&&Mo(V),G.stop(),oe&&(oe.active=!1,X(re,x,P,N)),J&&Xt(J,P),Xt(()=>{x.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},ye=(x,P,N,V=!1,G=!1,oe=0)=>{for(let re=oe;re<x.length;re++)X(x[re],P,N,V,G)},Xe=x=>x.shapeFlag&6?Xe(x.component.subTree):x.shapeFlag&128?x.suspense.next():d(x.anchor||x.el),Fe=(x,P,N)=>{x==null?P._vnode&&X(P._vnode,null,null,!0):_(P._vnode||null,x,P,null,null,null,N),Qc(),lh(),P._vnode=x},Ne={p:_,um:X,m:F,r:_e,mt:D,mc:O,pc:Z,pbc:T,n:Xe,o:t};let st,ze;return e&&([st,ze]=e(Ne)),{render:Fe,hydrate:st,createApp:$g(Fe,st)}}function Ri({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function t_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rh(t,e,n=!1){const i=t.children,r=e.children;if(Pe(i)&&Pe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=pi(r[s]),o.el=a.el),n||Rh(a,o)),o.type===Rs&&(o.el=a.el)}}function n_(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}const i_=t=>t.__isTeleport,dt=Symbol.for("v-fgt"),Rs=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),ba=Symbol.for("v-stc"),us=[];let Pn=null;function ht(t=!1){us.push(Pn=t?null:[])}function r_(){us.pop(),Pn=us[us.length-1]||null}let _s=1;function fu(t){_s+=t}function Ph(t){return t.dynamicChildren=_s>0?Pn||yr:null,r_(),_s>0&&Pn&&Pn.push(t),t}function _t(t,e,n,i,r,s){return Ph(Oe(t,e,n,i,r,s,!0))}function Lh(t,e,n,i,r){return Ph(ce(t,e,n,i,r,!0))}function vl(t){return t?t.__v_isVNode===!0:!1}function Hi(t,e){return t.type===e.type&&t.key===e.key}const ao="__vInternal",Dh=({key:t})=>t??null,Ta=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?vt(t)||pt(t)||He(t)?{i:cn,r:t,k:e,f:!!n}:t:null);function Oe(t,e=null,n=null,i=0,r=null,s=t===dt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dh(e),ref:e&&Ta(e),scopeId:to,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:cn};return o?(pc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=vt(n)?8:16),_s>0&&!a&&Pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Pn.push(l),l}const ce=s_;function s_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===dh)&&(t=Dn),vl(t)){const o=bi(t,e,!0);return n&&pc(o,n),_s>0&&!s&&Pn&&(o.shapeFlag&6?Pn[Pn.indexOf(t)]=o:Pn.push(o)),o.patchFlag|=-2,o}if(m_(t)&&(t=t.__vccOpts),e){e=a_(e);let{class:o,style:l}=e;o&&!vt(o)&&(e.class=Zl(o)),ot(l)&&(Qd(l)&&!Pe(l)&&(l=bt({},l)),e.style=Kl(l))}const a=vt(t)?1:Ag(t)?128:i_(t)?64:ot(t)?4:He(t)?2:0;return Oe(t,e,n,i,r,a,s,!0)}function a_(t){return t?Qd(t)||ao in t?bt({},t):t:null}function bi(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:a}=t,o=e?Lr(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&Dh(o),ref:e&&e.ref?n&&r?Pe(r)?r.concat(Ta(e)):[r,Ta(e)]:Ta(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bi(t.ssContent),ssFallback:t.ssFallback&&bi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function xl(t=" ",e=0){return ce(Rs,null,t,e)}function Pr(t="",e=!1){return e?(ht(),Lh(Dn,null,t)):ce(Dn,null,t)}function Nn(t){return t==null||typeof t=="boolean"?ce(Dn):Pe(t)?ce(dt,null,t.slice()):typeof t=="object"?pi(t):ce(Rs,null,String(t))}function pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bi(t)}function pc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Pe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),pc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ao in e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:cn},n=32):(e=String(e),i&64?(n=16,e=[xl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lr(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Zl([e.class,i.class]));else if(r==="style")e.style=Kl([e.style,i.style]);else if($a(r)){const s=e[r],a=i[r];a&&s!==a&&!(Pe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Un(t,e,n,i=null){vn(t,e,7,[n,i])}const o_=Eh();let l_=0;function c_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||o_,s={uid:l_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Th(i,r),emitsOptions:uh(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=xg.bind(null,s),t.ce&&t.ce(s),s}let Rt=null;const oo=()=>Rt||cn;let mc,nr,du="__VUE_INSTANCE_SETTERS__";(nr=ll()[du])||(nr=ll()[du]=[]),nr.push(t=>Rt=t),mc=t=>{nr.length>1?nr.forEach(e=>e(t)):nr[0](t)};const Dr=t=>{mc(t),t.scope.on()},Xi=()=>{Rt&&Rt.scope.off(),mc(null)};function Ih(t){return t.vnode.shapeFlag&4}let vs=!1;function u_(t,e=!1){vs=e;const{props:n,children:i}=t.vnode,r=Ih(t);Yg(t,n,r,e),Zg(t,i);const s=r?f_(t,e):void 0;return vs=!1,s}function f_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=eh(new Proxy(t.ctx,zg));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?h_(t):null;Dr(t),kr();const s=vi(i,t,0,[t.props,r]);if(Vr(),Xi(),Od(s)){if(s.then(Xi,Xi),e)return s.then(a=>{hu(t,a,e)}).catch(a=>{Ja(a,t,0)});t.asyncDep=s}else hu(t,s,e)}else Uh(t,e)}function hu(t,e,n){He(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ot(e)&&(t.setupState=rh(e)),Uh(t,n)}let pu;function Uh(t,e,n){const i=t.type;if(!t.render){if(!e&&pu&&!i.render){const r=i.template||dc(t).template;if(r){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:l}=i,c=bt(bt({isCustomElement:s,delimiters:o},a),l);i.render=pu(r,c)}}t.render=i.render||Hn}{Dr(t),kr();try{kg(t)}finally{Vr(),Xi()}}}function d_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Qt(t,"get","$attrs"),e[n]}}))}function h_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return d_(t)},slots:t.slots,emit:t.emit,expose:e}}function lo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rh(eh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cs)return cs[n](t)},has(e,n){return n in e||n in cs}}))}function p_(t,e=!0){return He(t)?t.displayName||t.name:t.name||e&&t.__name}function m_(t){return He(t)&&"__vccOpts"in t}const Ae=(t,e)=>hg(t,e,vs);function Gr(t,e,n){const i=arguments.length;return i===2?ot(e)&&!Pe(e)?vl(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&vl(n)&&(n=[n]),ce(t,e,n))}const g_=Symbol.for("v-scx"),__=()=>xn(g_),v_="3.3.8",x_="http://www.w3.org/2000/svg",zi=typeof document<"u"?document:null,mu=zi&&zi.createElement("template"),M_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?zi.createElementNS(x_,t):zi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>zi.createTextNode(t),createComment:t=>zi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{mu.innerHTML=i?`<svg>${t}</svg>`:t;const o=mu.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ai="transition",jr="animation",Ir=Symbol("_vtc"),Ps=(t,{slots:e})=>Gr(Lg,Fh(t),e);Ps.displayName="Transition";const Nh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},S_=Ps.props=bt({},_h,Nh),Pi=(t,e=[])=>{Pe(t)?t.forEach(n=>n(...e)):t&&t(...e)},gu=t=>t?Pe(t)?t.some(e=>e.length>1):t.length>1:!1;function Fh(t){const e={};for(const R in t)R in Nh||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=y_(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:h,onEnter:A,onEnterCancelled:y,onLeave:b,onLeaveCancelled:w,onBeforeAppear:L=h,onAppear:C=A,onAppearCancelled:O=y}=e,M=(R,z,D)=>{di(R,z?u:o),di(R,z?c:a),D&&D()},T=(R,z)=>{R._isLeaving=!1,di(R,f),di(R,p),di(R,d),z&&z()},k=R=>(z,D)=>{const W=R?C:A,$=()=>M(z,R,D);Pi(W,[z,$]),_u(()=>{di(z,R?l:s),jn(z,R?u:o),gu(W)||vu(z,i,_,$)})};return bt(e,{onBeforeEnter(R){Pi(h,[R]),jn(R,s),jn(R,a)},onBeforeAppear(R){Pi(L,[R]),jn(R,l),jn(R,c)},onEnter:k(!1),onAppear:k(!0),onLeave(R,z){R._isLeaving=!0;const D=()=>T(R,z);jn(R,f),Bh(),jn(R,d),_u(()=>{R._isLeaving&&(di(R,f),jn(R,p),gu(b)||vu(R,i,m,D))}),Pi(b,[R,D])},onEnterCancelled(R){M(R,!1),Pi(y,[R])},onAppearCancelled(R){M(R,!0),Pi(O,[R])},onLeaveCancelled(R){T(R),Pi(w,[R])}})}function y_(t){if(t==null)return null;if(ot(t))return[bo(t.enter),bo(t.leave)];{const e=bo(t);return[e,e]}}function bo(t){return Rm(t)}function jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ir]||(t[Ir]=new Set)).add(e)}function di(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Ir];n&&(n.delete(e),n.size||(t[Ir]=void 0))}function _u(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let E_=0;function vu(t,e,n,i){const r=t._endId=++E_,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=Oh(t,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),t.addEventListener(c,d)}function Oh(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${ai}Delay`),s=i(`${ai}Duration`),a=xu(r,s),o=i(`${jr}Delay`),l=i(`${jr}Duration`),c=xu(o,l);let u=null,f=0,d=0;e===ai?a>0&&(u=ai,f=a,d=s.length):e===jr?c>0&&(u=jr,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?ai:jr:null,d=u?u===ai?s.length:l.length:0);const p=u===ai&&/\b(transform|all)(,|$)/.test(i(`${ai}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function xu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Mu(n)+Mu(t[i])))}function Mu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Bh(){return document.body.offsetHeight}function b_(t,e,n){const i=t[Ir];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gc=Symbol("_vod"),Ar={beforeMount(t,{value:e},{transition:n}){t[gc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Kr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Kr(t,!0),i.enter(t)):i.leave(t,()=>{Kr(t,!1)}):Kr(t,e))},beforeUnmount(t,{value:e}){Kr(t,e)}};function Kr(t,e){t.style.display=e?t[gc]:"none"}function T_(t,e,n){const i=t.style,r=vt(n);if(n&&!r){if(e&&!vt(e))for(const s in e)n[s]==null&&Ml(i,s,"");for(const s in n)Ml(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),gc in t&&(i.display=s)}}const Su=/\s*!important$/;function Ml(t,e,n){if(Pe(n))n.forEach(i=>Ml(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=A_(t,e);Su.test(n)?t.setProperty(Hr(i),n.replace(Su,""),"important"):t[i]=n}}const yu=["Webkit","Moz","ms"],To={};function A_(t,e){const n=To[e];if(n)return n;let i=Mn(e);if(i!=="filter"&&i in t)return To[e]=i;i=zr(i);for(let r=0;r<yu.length;r++){const s=yu[r]+i;if(s in t)return To[e]=s}return e}const Eu="http://www.w3.org/1999/xlink";function w_(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Eu,e.slice(6,e.length)):t.setAttributeNS(Eu,e,n);else{const s=Nm(e);n==null||s&&!zd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function C_(t,e,n,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){t._value=n;const c=o==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=zd(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function R_(t,e,n,i){t.addEventListener(e,n,i)}function P_(t,e,n,i){t.removeEventListener(e,n,i)}const bu=Symbol("_vei");function L_(t,e,n,i,r=null){const s=t[bu]||(t[bu]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=D_(e);if(i){const c=s[e]=N_(i,r);R_(t,o,c,l)}else a&&(P_(t,o,a,l),s[e]=void 0)}}const Tu=/(?:Once|Passive|Capture)$/;function D_(t){let e;if(Tu.test(t)){e={};let i;for(;i=t.match(Tu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hr(t.slice(2)),e]}let Ao=0;const I_=Promise.resolve(),U_=()=>Ao||(I_.then(()=>Ao=0),Ao=Date.now());function N_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;vn(F_(i,n.value),e,5,[i])};return n.value=t,n.attached=U_(),n}function F_(t,e){if(Pe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Au=/^on[a-z]/,O_=(t,e,n,i,r=!1,s,a,o,l)=>{e==="class"?b_(t,i,r):e==="style"?T_(t,n,i):$a(e)?$l(e)||L_(t,e,n,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):B_(t,e,i,r))?C_(t,e,i,s,a,o,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),w_(t,e,i,r))};function B_(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Au.test(e)&&He(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Au.test(e)&&vt(n)?!1:e in t}function H_(t){const e=oo();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>yl(s,r))},i=()=>{const r=t(e.proxy);Sl(e.subTree,r),n(r)};Cg(i),ws(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),fc(()=>r.disconnect())})}function Sl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Sl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)yl(t.el,e);else if(t.type===dt)t.children.forEach(n=>Sl(n,e));else if(t.type===ba){let{el:n,anchor:i}=t;for(;n&&(yl(n,e),n!==i);)n=n.nextSibling}}function yl(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const Hh=new WeakMap,zh=new WeakMap,Na=Symbol("_moveCb"),wu=Symbol("_enterCb"),kh={name:"TransitionGroup",props:bt({},S_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=oo(),i=gh();let r,s;return Sh(()=>{if(!r.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!X_(r[0].el,n.vnode.el,a))return;r.forEach(V_),r.forEach(G_);const o=r.filter(W_);Bh(),o.forEach(l=>{const c=l.el,u=c.style;jn(c,a),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Na]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[Na]=null,di(c,a))};c.addEventListener("transitionend",f)})}),()=>{const a=We(t),o=Fh(a);let l=a.tag||dt;r=s,s=e.default?uc(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&gs(u,ms(u,o,i,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];gs(u,ms(u,o,i,n)),Hh.set(u,u.el.getBoundingClientRect())}return ce(l,null,s)}}},z_=t=>delete t.mode;kh.props;const k_=kh;function V_(t){const e=t.el;e[Na]&&e[Na](),e[wu]&&e[wu]()}function G_(t){zh.set(t,t.el.getBoundingClientRect())}function W_(t){const e=Hh.get(t),n=zh.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function X_(t,e,n){const i=t.cloneNode(),r=t[Ir];r&&r.forEach(o=>{o.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:a}=Oh(i);return s.removeChild(i),a}const q_=bt({patchProp:O_},M_);let Cu;function $_(){return Cu||(Cu=Qg(q_))}const Y_=(...t)=>{const e=$_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=j_(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function j_(t){return vt(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="158",K_=0,Ru=1,Z_=2,Vh=1,J_=2,Kn=3,Ti=0,Kt=1,on=2,Mi=0,wr=1,Pu=2,Lu=3,Du=4,Q_=5,ki=100,ev=101,tv=102,Iu=103,Uu=104,nv=200,iv=201,rv=202,sv=203,El=204,bl=205,av=206,ov=207,lv=208,cv=209,uv=210,fv=211,dv=212,hv=213,pv=214,mv=0,gv=1,_v=2,Fa=3,vv=4,xv=5,Mv=6,Sv=7,vc=0,yv=1,Ev=2,Si=0,bv=1,Tv=2,Av=3,wv=4,Cv=5,Gh=300,Ur=301,Nr=302,Tl=303,Al=304,co=306,wl=1e3,Cn=1001,Cl=1002,Vt=1003,Nu=1004,wo=1005,mn=1006,Rv=1007,xs=1008,yi=1009,Pv=1010,Lv=1011,xc=1012,Wh=1013,mi=1014,gi=1015,Ms=1016,Xh=1017,qh=1018,qi=1020,Dv=1021,Rn=1023,Iv=1024,Uv=1025,$i=1026,Fr=1027,Nv=1028,$h=1029,Fv=1030,Yh=1031,jh=1033,Co=33776,Ro=33777,Po=33778,Lo=33779,Fu=35840,Ou=35841,Bu=35842,Hu=35843,Ov=36196,zu=37492,ku=37496,Vu=37808,Gu=37809,Wu=37810,Xu=37811,qu=37812,$u=37813,Yu=37814,ju=37815,Ku=37816,Zu=37817,Ju=37818,Qu=37819,ef=37820,tf=37821,Do=36492,nf=36494,rf=36495,Bv=36283,sf=36284,af=36285,of=36286,Kh=3e3,Yi=3001,Hv=3200,zv=3201,Zh=0,kv=1,gn="",Lt="srgb",ti="srgb-linear",Mc="display-p3",uo="display-p3-linear",Oa="linear",lt="srgb",Ba="rec709",Ha="p3",ir=7680,lf=519,Vv=512,Gv=513,Wv=514,Xv=515,qv=516,$v=517,Yv=518,jv=519,cf=35044,uf="300 es",Rl=1035,Jn=2e3,za=2001;class Wr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Io=Math.PI/180,Pl=180/Math.PI;function Ls(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function Kv(t,e){return(t%e+e)%e}function Uo(t,e,n){return(1-n)*t+n*e}function ff(t){return(t&t-1)===0&&t!==0}function Ll(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],A=r[1],y=r[4],b=r[7],w=r[2],L=r[5],C=r[8];return s[0]=a*_+o*A+l*w,s[3]=a*m+o*y+l*L,s[6]=a*h+o*b+l*C,s[1]=c*_+u*A+f*w,s[4]=c*m+u*y+f*L,s[7]=c*h+u*b+f*C,s[2]=d*_+p*A+g*w,s[5]=d*m+p*y+g*L,s[8]=d*h+p*b+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(No.makeScale(e,n)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,n){return this.premultiply(No.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const No=new Ye;function Jh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ss(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Zv(){const t=Ss("canvas");return t.style.display="block",t}const df={};function fs(t){t in df||(df[t]=!0,console.warn(t))}const hf=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pf=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[ti]:{transfer:Oa,primaries:Ba,toReference:t=>t,fromReference:t=>t},[Lt]:{transfer:lt,primaries:Ba,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[uo]:{transfer:Oa,primaries:Ha,toReference:t=>t.applyMatrix3(pf),fromReference:t=>t.applyMatrix3(hf)},[Mc]:{transfer:lt,primaries:Ha,toReference:t=>t.convertSRGBToLinear().applyMatrix3(pf),fromReference:t=>t.applyMatrix3(hf).convertLinearToSRGB()}},Jv=new Set([ti,uo]),it={enabled:!0,_workingColorSpace:ti,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Jv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=js[e].toReference,r=js[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return js[t].primaries},getTransfer:function(t){return t===gn?Oa:js[t].transfer}};function Cr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let rr;class Qh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rr===void 0&&(rr=Ss("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ss("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cr(n[i]/255)*255):n[i]=Cr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qv=0;class ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Oo(r[a].image)):s.push(Oo(r[a]))}else s=Oo(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Oo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qh.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0;class Zt extends Wr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Cn,r=Cn,s=mn,a=xs,o=Rn,l=yi,c=Zt.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Ls(),this.name="",this.source=new ep(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Yi?Lt:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wl:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wl:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?Yi:Kh}set encoding(e){fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yi?Lt:gn}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Gh;Zt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,b=(p+1)/2,w=(h+1)/2,L=(u+d)/4,C=(f+_)/4,O=(g+m)/4;return y>b&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=L/i,s=C/i):b>w?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=L/r,s=O/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=O/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-_)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t0 extends Wr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yi?Lt:gn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ep(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends t0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class tp extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class n0 extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==p||u!==g){let m=1-o;const h=l*d+c*p+u*g+f*_,A=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const w=Math.sqrt(y),L=Math.atan2(w,h*A);m=Math.sin(m*L)/w,o=Math.sin(o*L)/w}const b=o*A;if(l=l*m+d*b,c=c*m+p*b,u=u*m+g*b,f=f*m+_*b,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[n]=o*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-o*p,e[n+2]=c*g+u*p+o*d-l*f,e[n+3]=u*g-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new H,mf=new Ds;class Is{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ks.copy(i.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Zs.subVectors(this.max,Jr),sr.subVectors(e.a,Jr),ar.subVectors(e.b,Jr),or.subVectors(e.c,Jr),oi.subVectors(ar,sr),li.subVectors(or,ar),Li.subVectors(sr,or);let n=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Li.z,Li.y,oi.z,0,-oi.x,li.z,0,-li.x,Li.z,0,-Li.x,-oi.y,oi.x,0,-li.y,li.x,0,-Li.y,Li.x,0];return!Ho(n,sr,ar,or,Zs)||(n=[1,0,0,0,1,0,0,0,1],!Ho(n,sr,ar,or,Zs))?!1:(Js.crossVectors(oi,li),n=[Js.x,Js.y,Js.z],Ho(n,sr,ar,or,Zs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new H,new H,new H,new H,new H,new H,new H,new H],yn=new H,Ks=new Is,sr=new H,ar=new H,or=new H,oi=new H,li=new H,Li=new H,Jr=new H,Zs=new H,Js=new H,Di=new H;function Ho(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Di.fromArray(t,s);const o=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),l=e.dot(Di),c=n.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const i0=new Is,Qr=new H,zo=new H;class Sc{constructor(e=new H,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):i0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const n=Qr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(zo)),this.expandByPoint(Qr.copy(e.center).sub(zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new H,ko=new H,Qs=new H,ci=new H,Vo=new H,ea=new H,Go=new H;class r0{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,n),Xn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ko.copy(e).add(n).multiplyScalar(.5),Qs.copy(n).sub(e).normalize(),ci.copy(this.origin).sub(ko);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Qs),o=ci.dot(this.direction),l=-ci.dot(Qs),c=ci.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ko).addScaledVector(Qs,d),p}intersectSphere(e,n){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,n,i,r,s){Vo.subVectors(n,e),ea.subVectors(i,e),Go.crossVectors(Vo,ea);let a=this.direction.dot(Go),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const l=o*this.direction.dot(ea.crossVectors(ci,ea));if(l<0)return null;const c=o*this.direction.dot(Vo.cross(ci));if(c<0||l+c>a)return null;const u=-o*ci.dot(Go);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,a,o,l,c,u,f,d,p,g,_,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,p,g,_,m)}set(e,n,i,r,s,a,o,l,c,u,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,g=o*u,_=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-_*c,n[9]=-o*l,n[2]=_-d*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d+_*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-g,n[6]=_+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d-_*o,n[4]=-a*f,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*u,n[9]=_-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,g=o*u,_=o*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=a*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=o*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,a0)}lookAt(e,n,i){const r=this.elements;return nn.subVectors(e,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ui.crossVectors(i,nn),ui.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ui.crossVectors(i,nn)),ui.normalize(),ta.crossVectors(nn,ui),r[0]=ui.x,r[4]=ta.x,r[8]=nn.x,r[1]=ui.y,r[5]=ta.y,r[9]=nn.y,r[2]=ui.z,r[6]=ta.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],A=i[3],y=i[7],b=i[11],w=i[15],L=r[0],C=r[4],O=r[8],M=r[12],T=r[1],k=r[5],R=r[9],z=r[13],D=r[2],W=r[6],$=r[10],Y=r[14],Z=r[3],ae=r[7],se=r[11],F=r[15];return s[0]=a*L+o*T+l*D+c*Z,s[4]=a*C+o*k+l*W+c*ae,s[8]=a*O+o*R+l*$+c*se,s[12]=a*M+o*z+l*Y+c*F,s[1]=u*L+f*T+d*D+p*Z,s[5]=u*C+f*k+d*W+p*ae,s[9]=u*O+f*R+d*$+p*se,s[13]=u*M+f*z+d*Y+p*F,s[2]=g*L+_*T+m*D+h*Z,s[6]=g*C+_*k+m*W+h*ae,s[10]=g*O+_*R+m*$+h*se,s[14]=g*M+_*z+m*Y+h*F,s[3]=A*L+y*T+b*D+w*Z,s[7]=A*C+y*k+b*W+w*ae,s[11]=A*O+y*R+b*$+w*se,s[15]=A*M+y*z+b*Y+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+_*(+n*l*p-n*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-n*l*f+n*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],A=f*m*c-_*d*c+_*l*p-o*m*p-f*l*h+o*d*h,y=g*d*c-u*m*c-g*l*p+a*m*p+u*l*h-a*d*h,b=u*_*c-g*f*c+g*o*p-a*_*p-u*o*h+a*f*h,w=g*f*l-u*_*l-g*o*d+a*_*d+u*o*m-a*f*m,L=n*A+i*y+r*b+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=A*C,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*C,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*h+i*l*h)*C,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*C,e[4]=y*C,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*h+n*d*h)*C,e[6]=(g*l*s-a*m*s-g*r*c+n*m*c+a*r*h-n*l*h)*C,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*p+n*l*p)*C,e[8]=b*C,e[9]=(g*f*s-u*_*s-g*i*p+n*_*p+u*i*h-n*f*h)*C,e[10]=(a*_*s-g*o*s+g*i*c-n*_*c-a*i*h+n*o*h)*C,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*p-n*o*p)*C,e[12]=w*C,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*C,e[14]=(g*o*r-a*_*r-g*i*l+n*_*l+a*i*m-n*o*m)*C,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*d+n*o*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,g=s*f,_=a*u,m=a*f,h=o*f,A=l*c,y=l*u,b=l*f,w=i.x,L=i.y,C=i.z;return r[0]=(1-(_+h))*w,r[1]=(p+b)*w,r[2]=(g-y)*w,r[3]=0,r[4]=(p-b)*L,r[5]=(1-(d+h))*L,r[6]=(m+A)*L,r[7]=0,r[8]=(g+y)*C,r[9]=(m-A)*C,r[10]=(1-(d+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=lr.set(r[0],r[1],r[2]).length();const a=lr.set(r[4],r[5],r[6]).length(),o=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const c=1/s,u=1/a,f=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,n.setFromRotationMatrix(En),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Jn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(o===Jn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===za)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Jn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),d=(n+e)*c,p=(i+r)*u;let g,_;if(o===Jn)g=(a+s)*f,_=-2*f;else if(o===za)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const lr=new H,En=new Et,s0=new H(0,0,0),a0=new H(1,1,1),ui=new H,ta=new H,nn=new H,gf=new Et,_f=new Ds;class fo{constructor(e=0,n=0,i=0,r=fo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _f.setFromEuler(this),this.setFromQuaternion(_f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fo.DEFAULT_ORDER="XYZ";class np{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o0=0;const vf=new H,cr=new Ds,qn=new Et,na=new H,es=new H,l0=new H,c0=new Ds,xf=new H(1,0,0),Mf=new H(0,1,0),Sf=new H(0,0,1),u0={type:"added"},f0={type:"removed"};class Jt extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new H,n=new fo,i=new Ds,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ye}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cr.setFromAxisAngle(e,n),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,n){return cr.setFromAxisAngle(e,n),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(xf,e)}rotateY(e){return this.rotateOnAxis(Mf,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,n){return vf.copy(e).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xf,e)}translateY(e){return this.translateOnAxis(Mf,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?na.copy(e):na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(es,na,this.up):qn.lookAt(na,es,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(qn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(u0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(f0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,l0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,c0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new H(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new H,$n=new H,Wo=new H,Yn=new H,ur=new H,fr=new H,yf=new H,Xo=new H,qo=new H,$o=new H;let ia=!1;class An{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),$n.subVectors(i,n),Wo.subVectors(e,n);const a=bn.dot(bn),o=bn.dot($n),l=bn.dot(Wo),c=$n.dot($n),u=$n.dot(Wo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Yn),Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,n,i,r,s,a,o,l){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Yn),l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),$n.subVectors(e,n),bn.cross($n).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),bn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return An.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ur.subVectors(r,i),fr.subVectors(s,i),Xo.subVectors(e,i);const l=ur.dot(Xo),c=fr.dot(Xo);if(l<=0&&c<=0)return n.copy(i);qo.subVectors(e,r);const u=ur.dot(qo),f=fr.dot(qo);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(ur,a);$o.subVectors(e,s);const p=ur.dot($o),g=fr.dot($o);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(fr,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return yf.subVectors(s,r),o=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(yf,o);const h=1/(m+_+d);return a=_*h,o=d*h,n.copy(i).addScaledVector(ur,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Yo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=Kv(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Yo(a,s,e+1/3),this.g=Yo(a,s,e),this.b=Yo(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Lt){const i=ip[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return it.fromWorkingColorSpace(Ut.copy(this),e),Math.round(qt(Ut.r*255,0,255))*65536+Math.round(qt(Ut.g*255,0,255))*256+Math.round(qt(Ut.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Ut.copy(this),n);const i=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Ut.copy(this),n),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Lt){it.fromWorkingColorSpace(Ut.copy(this),e);const n=Ut.r,i=Ut.g,r=Ut.b;return e!==Lt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+n,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fi),e.getHSL(ra);const i=Uo(fi.h,ra.h,n),r=Uo(fi.s,ra.s,n),s=Uo(fi.l,ra.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new et;et.NAMES=ip;let d0=0;class Us extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=wr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=bl,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==El&&(i.blendSrc=this.blendSrc),this.blendDst!==bl&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rp extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new H,sa=new nt;class zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cf,this.updateRange={offset:0,count:-1},this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sa.fromBufferAttribute(this,n),sa.applyMatrix3(e),this.setXY(n,sa.x,sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class sp extends zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ap extends zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ji extends zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let h0=0;const pn=new Et,jo=new Jt,dr=new H,rn=new Is,ts=new Is,Ct=new H;class tr extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?ap:sp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,n,i){return pn.makeTranslation(e,n,i),this.applyMatrix4(pn),this}scale(e,n,i){return pn.makeScale(e,n,i),this.applyMatrix4(pn),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ji(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(rn.min,ts.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,ts.max),rn.expandByPoint(Ct)):(rn.expandByPoint(ts.min),rn.expandByPoint(ts.max))}rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(dr.fromBufferAttribute(e,c),Ct.add(dr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new H,u[T]=new H;const f=new H,d=new H,p=new H,g=new nt,_=new nt,m=new nt,h=new H,A=new H;function y(T,k,R){f.fromArray(r,T*3),d.fromArray(r,k*3),p.fromArray(r,R*3),g.fromArray(a,T*2),_.fromArray(a,k*2),m.fromArray(a,R*2),d.sub(f),p.sub(f),_.sub(g),m.sub(g);const z=1/(_.x*m.y-m.x*_.y);isFinite(z)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(z),A.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(z),c[T].add(h),c[k].add(h),c[R].add(h),u[T].add(A),u[k].add(A),u[R].add(A))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,k=b.length;T<k;++T){const R=b[T],z=R.start,D=R.count;for(let W=z,$=z+D;W<$;W+=3)y(i[W+0],i[W+1],i[W+2])}const w=new H,L=new H,C=new H,O=new H;function M(T){C.fromArray(s,T*3),O.copy(C);const k=c[T];w.copy(k),w.sub(C.multiplyScalar(C.dot(k))).normalize(),L.crossVectors(O,k);const z=L.dot(u[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=z}for(let T=0,k=b.length;T<k;++T){const R=b[T],z=R.start,D=R.count;for(let W=z,$=z+D;W<$;W+=3)M(i[W+0]),M(i[W+1]),M(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new zn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ef=new Et,Ii=new r0,aa=new Sc,bf=new H,hr=new H,pr=new H,mr=new H,Ko=new H,oa=new H,la=new nt,ca=new nt,ua=new nt,Tf=new H,Af=new H,wf=new H,fa=new H,da=new H;class $t extends Jt{constructor(e=new tr,n=new rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ko.fromBufferAttribute(f,e),a?oa.addScaledVector(Ko,u):oa.addScaledVector(Ko.sub(n),u))}n.add(oa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(aa.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(aa,bf)===null||Ii.origin.distanceToSquared(bf)>(e.far-e.near)**2))&&(Ef.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Ef),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ii)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=a[m.materialIndex],A=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,w=y;b<w;b+=3){const L=o.getX(b),C=o.getX(b+1),O=o.getX(b+2);r=ha(this,h,e,i,c,u,f,L,C,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const A=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);r=ha(this,a,e,i,c,u,f,A,y,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=a[m.materialIndex],A=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,w=y;b<w;b+=3){const L=b,C=b+1,O=b+2;r=ha(this,h,e,i,c,u,f,L,C,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const A=m,y=m+1,b=m+2;r=ha(this,a,e,i,c,u,f,A,y,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function p0(t,e,n,i,r,s,a,o){let l;if(e.side===Kt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ti,o),l===null)return null;da.copy(o),da.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(da);return c<n.near||c>n.far?null:{distance:c,point:da.clone(),object:t}}function ha(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,hr),t.getVertexPosition(l,pr),t.getVertexPosition(c,mr);const u=p0(t,e,n,i,hr,pr,mr,fa);if(u){r&&(la.fromBufferAttribute(r,o),ca.fromBufferAttribute(r,l),ua.fromBufferAttribute(r,c),u.uv=An.getInterpolation(fa,hr,pr,mr,la,ca,ua,new nt)),s&&(la.fromBufferAttribute(s,o),ca.fromBufferAttribute(s,l),ua.fromBufferAttribute(s,c),u.uv1=An.getInterpolation(fa,hr,pr,mr,la,ca,ua,new nt),u.uv2=u.uv1),a&&(Tf.fromBufferAttribute(a,o),Af.fromBufferAttribute(a,l),wf.fromBufferAttribute(a,c),u.normal=An.getInterpolation(fa,hr,pr,mr,Tf,Af,wf,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};An.getNormal(hr,pr,mr,f.normal),u.face=f}return u}class Ns extends tr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ji(c,3)),this.setAttribute("normal",new ji(u,3)),this.setAttribute("uv",new ji(f,2));function g(_,m,h,A,y,b,w,L,C,O,M){const T=b/C,k=w/O,R=b/2,z=w/2,D=L/2,W=C+1,$=O+1;let Y=0,Z=0;const ae=new H;for(let se=0;se<$;se++){const F=se*k-z;for(let X=0;X<W;X++){const _e=X*T-R;ae[_]=_e*A,ae[m]=F*y,ae[h]=D,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[h]=L>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(X/C),f.push(1-se/O),Y+=1}}for(let se=0;se<O;se++)for(let F=0;F<C;F++){const X=d+F+W*se,_e=d+F+W*(se+1),xe=d+(F+1)+W*(se+1),be=d+(F+1)+W*se;l.push(X,_e,be),l.push(_e,xe,be),Z+=6}o.addGroup(p,Z,M),p+=Z,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function kt(t){const e={};for(let n=0;n<t.length;n++){const i=Or(t[n]);for(const r in i)e[r]=i[r]}return e}function m0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function op(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const g0={clone:Or,merge:kt};var _0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class lp extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Jn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends lp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pl*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Io*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gr=-90,_r=1;class x0 extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(gr,_r,e,n);r.layers=this.layers,this.add(r);const s=new an(gr,_r,e,n);s.layers=this.layers,this.add(s);const a=new an(gr,_r,e,n);a.layers=this.layers,this.add(a);const o=new an(gr,_r,e,n);o.layers=this.layers,this.add(o);const l=new an(gr,_r,e,n);l.layers=this.layers,this.add(l);const c=new an(gr,_r,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cp extends Zt{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ur,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M0 extends Ji{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yi?Lt:gn),this.texture=new cp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ns(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Mi});s.uniforms.tEquirect.value=n;const a=new $t(r,s),o=n.minFilter;return n.minFilter===xs&&(n.minFilter=mn),new x0(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Zo=new H,S0=new H,y0=new Ye;class Fi{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zo.subVectors(i,n).cross(S0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||y0.getNormalMatrix(e),r=this.coplanarPoint(Zo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Sc,pa=new H;class yc{constructor(e=new Fi,n=new Fi,i=new Fi,r=new Fi,s=new Fi,a=new Fi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Jn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],A=r[13],y=r[14],b=r[15];if(i[0].setComponents(l-s,d-c,m-p,b-h).normalize(),i[1].setComponents(l+s,d+c,m+p,b+h).normalize(),i[2].setComponents(l+a,d+u,m+g,b+A).normalize(),i[3].setComponents(l-a,d-u,m-g,b-A).normalize(),i[4].setComponents(l-o,d-f,m-_,b-y).normalize(),n===Jn)i[5].setComponents(l+o,d+f,m+_,b+y).normalize();else if(n===za)i[5].setComponents(o,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function up(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function E0(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=t.SHORT;else if(f instanceof Uint32Array)g=t.UNSIGNED_INT;else if(f instanceof Int32Array)g=t.INT;else if(f instanceof Int8Array)g=t.BYTE;else if(f instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class ys extends tr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const A=h*d-a;for(let y=0;y<c;y++){const b=y*f-s;g.push(b,-A,0),_.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const y=A+c*h,b=A+c*(h+1),w=A+1+c*(h+1),L=A+1+c*h;p.push(y,b,L),p.push(b,w,L)}this.setIndex(p),this.setAttribute("position",new ji(g,3)),this.setAttribute("normal",new ji(_,3)),this.setAttribute("uv",new ji(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ux=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:b0,alphahash_pars_fragment:T0,alphamap_fragment:A0,alphamap_pars_fragment:w0,alphatest_fragment:C0,alphatest_pars_fragment:R0,aomap_fragment:P0,aomap_pars_fragment:L0,begin_vertex:D0,beginnormal_vertex:I0,bsdfs:U0,iridescence_fragment:N0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:z0,color_fragment:k0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:$0,displacementmap_pars_vertex:Y0,displacementmap_vertex:j0,emissivemap_fragment:K0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:Q0,envmap_fragment:ex,envmap_common_pars_fragment:tx,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:sx,fog_pars_vertex:ax,fog_fragment:ox,fog_pars_fragment:lx,gradientmap_pars_fragment:cx,lightmap_fragment:ux,lightmap_pars_fragment:fx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:hx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:vx,lights_phong_pars_fragment:xx,lights_physical_fragment:Mx,lights_physical_pars_fragment:Sx,lights_fragment_begin:yx,lights_fragment_maps:Ex,lights_fragment_end:bx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Cx,map_fragment:Rx,map_pars_fragment:Px,map_particle_fragment:Lx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Ux,morphcolor_vertex:Nx,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:Bx,normal_fragment_begin:Hx,normal_fragment_maps:zx,normal_pars_fragment:kx,normal_pars_vertex:Vx,normal_vertex:Gx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:Yx,opaque_fragment:jx,packing:Kx,premultiplied_alpha_fragment:Zx,project_vertex:Jx,dithering_fragment:Qx,dithering_pars_fragment:eM,roughnessmap_fragment:tM,roughnessmap_pars_fragment:nM,shadowmap_pars_fragment:iM,shadowmap_pars_vertex:rM,shadowmap_vertex:sM,shadowmask_pars_fragment:aM,skinbase_vertex:oM,skinning_pars_vertex:lM,skinning_vertex:cM,skinnormal_vertex:uM,specularmap_fragment:fM,specularmap_pars_fragment:dM,tonemapping_fragment:hM,tonemapping_pars_fragment:pM,transmission_fragment:mM,transmission_pars_fragment:gM,uv_pars_fragment:_M,uv_pars_vertex:vM,uv_vertex:xM,worldpos_vertex:MM,background_vert:SM,background_frag:yM,backgroundCube_vert:EM,backgroundCube_frag:bM,cube_vert:TM,cube_frag:AM,depth_vert:wM,depth_frag:CM,distanceRGBA_vert:RM,distanceRGBA_frag:PM,equirect_vert:LM,equirect_frag:DM,linedashed_vert:IM,linedashed_frag:UM,meshbasic_vert:NM,meshbasic_frag:FM,meshlambert_vert:OM,meshlambert_frag:BM,meshmatcap_vert:HM,meshmatcap_frag:zM,meshnormal_vert:kM,meshnormal_frag:VM,meshphong_vert:GM,meshphong_frag:WM,meshphysical_vert:XM,meshphysical_frag:qM,meshtoon_vert:$M,meshtoon_frag:YM,points_vert:jM,points_frag:KM,shadow_vert:ZM,shadow_frag:JM,sprite_vert:QM,sprite_frag:eS},me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Fn={basic:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:kt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:kt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:kt([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:kt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:kt([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:kt([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:kt([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:kt([me.lights,me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Fn.physical={uniforms:kt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ma={r:0,b:0,g:0};function tS(t,e,n,i,r,s,a){const o=new et(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(m,h){let A=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?n:e).get(y)),y===null?_(o,l):y&&y.isColor&&(_(y,1),A=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||A)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===co)?(u===void 0&&(u=new $t(new Ns(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Or(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=it.getTransfer(y.colorSpace)!==lt,(f!==y||d!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $t(new ys(2,2),new Qi({name:"BackgroundMaterial",uniforms:Or(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,h){m.getRGB(ma,op(t)),i.buffers.color.setClear(ma.r,ma.g,ma.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function nS(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(D,W,$,Y,Z){let ae=!1;if(a){const se=_(Y,$,W);c!==se&&(c=se,p(c.object)),ae=h(D,Y,$,Z),ae&&A(D,Y,$,Z)}else{const se=W.wireframe===!0;(c.geometry!==Y.id||c.program!==$.id||c.wireframe!==se)&&(c.geometry=Y.id,c.program=$.id,c.wireframe=se,ae=!0)}Z!==null&&n.update(Z,t.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,O(D,W,$,Y),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(Z).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,W,$){const Y=$.wireframe===!0;let Z=o[D.id];Z===void 0&&(Z={},o[D.id]=Z);let ae=Z[W.id];ae===void 0&&(ae={},Z[W.id]=ae);let se=ae[Y];return se===void 0&&(se=m(d()),ae[Y]=se),se}function m(D){const W=[],$=[],Y=[];for(let Z=0;Z<r;Z++)W[Z]=0,$[Z]=0,Y[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:Y,object:D,attributes:{},index:null}}function h(D,W,$,Y){const Z=c.attributes,ae=W.attributes;let se=0;const F=$.getAttributes();for(const X in F)if(F[X].location>=0){const xe=Z[X];let be=ae[X];if(be===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),xe===void 0||xe.attribute!==be||be&&xe.data!==be.data)return!0;se++}return c.attributesNum!==se||c.index!==Y}function A(D,W,$,Y){const Z={},ae=W.attributes;let se=0;const F=$.getAttributes();for(const X in F)if(F[X].location>=0){let xe=ae[X];xe===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor));const be={};be.attribute=xe,xe&&xe.data&&(be.data=xe.data),Z[X]=be,se++}c.attributes=Z,c.attributesNum=se,c.index=Y}function y(){const D=c.newAttributes;for(let W=0,$=D.length;W<$;W++)D[W]=0}function b(D){w(D,0)}function w(D,W){const $=c.newAttributes,Y=c.enabledAttributes,Z=c.attributeDivisors;$[D]=1,Y[D]===0&&(t.enableVertexAttribArray(D),Y[D]=1),Z[D]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,W),Z[D]=W)}function L(){const D=c.newAttributes,W=c.enabledAttributes;for(let $=0,Y=W.length;$<Y;$++)W[$]!==D[$]&&(t.disableVertexAttribArray($),W[$]=0)}function C(D,W,$,Y,Z,ae,se){se===!0?t.vertexAttribIPointer(D,W,$,Z,ae):t.vertexAttribPointer(D,W,$,Y,Z,ae)}function O(D,W,$,Y){if(i.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Z=Y.attributes,ae=$.getAttributes(),se=W.defaultAttributeValues;for(const F in ae){const X=ae[F];if(X.location>=0){let _e=Z[F];if(_e===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),_e!==void 0){const xe=_e.normalized,be=_e.itemSize,ye=n.get(_e);if(ye===void 0)continue;const Xe=ye.buffer,Fe=ye.type,Ne=ye.bytesPerElement,st=i.isWebGL2===!0&&(Fe===t.INT||Fe===t.UNSIGNED_INT||_e.gpuType===Wh);if(_e.isInterleavedBufferAttribute){const ze=_e.data,x=ze.stride,P=_e.offset;if(ze.isInstancedInterleavedBuffer){for(let N=0;N<X.locationSize;N++)w(X.location+N,ze.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let N=0;N<X.locationSize;N++)b(X.location+N);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let N=0;N<X.locationSize;N++)C(X.location+N,be/X.locationSize,Fe,xe,x*Ne,(P+be/X.locationSize*N)*Ne,st)}else{if(_e.isInstancedBufferAttribute){for(let ze=0;ze<X.locationSize;ze++)w(X.location+ze,_e.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ze=0;ze<X.locationSize;ze++)b(X.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let ze=0;ze<X.locationSize;ze++)C(X.location+ze,be/X.locationSize,Fe,xe,be*Ne,be/X.locationSize*ze*Ne,st)}}else if(se!==void 0){const xe=se[F];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv(X.location,xe);break;case 3:t.vertexAttrib3fv(X.location,xe);break;case 4:t.vertexAttrib4fv(X.location,xe);break;default:t.vertexAttrib1fv(X.location,xe)}}}}L()}function M(){R();for(const D in o){const W=o[D];for(const $ in W){const Y=W[$];for(const Z in Y)g(Y[Z].object),delete Y[Z];delete W[$]}delete o[D]}}function T(D){if(o[D.id]===void 0)return;const W=o[D.id];for(const $ in W){const Y=W[$];for(const Z in Y)g(Y[Z].object),delete Y[Z];delete W[$]}delete o[D.id]}function k(D){for(const W in o){const $=o[W];if($[D.id]===void 0)continue;const Y=$[D.id];for(const Z in Y)g(Y[Z].object),delete Y[Z];delete $[D.id]}}function R(){z(),u=!0,c!==l&&(c=l,p(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:R,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:b,disableUnusedAttributes:L}}function iS(t,e,n,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,f),n.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function rS(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,b=a||e.has("OES_texture_float"),w=y&&b,L=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:A,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:L}}function sS(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Fi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,y=A*4;let b=h.clippingState||null;l.value=b,b=u(g,d,y,p);for(let w=0;w!==y;++w)b[w]=n[w];h.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,b=p;y!==_;++y,b+=4)a.copy(f[y]).applyMatrix4(A,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function aS(t){let e=new WeakMap;function n(a,o){return o===Tl?a.mapping=Ur:o===Al&&(a.mapping=Nr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Tl||o===Al)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new M0(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class oS extends lp{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Sr=4,Cf=[.125,.215,.35,.446,.526,.582],Vi=20,Jo=new oS,Rf=new et;let Qo=null,el=0,tl=0;const Oi=(1+Math.sqrt(5))/2,vr=1/Oi,Pf=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Oi,vr),new H(0,Oi,-vr),new H(vr,0,Oi),new H(-vr,0,Oi),new H(Oi,vr,0),new H(-Oi,vr,0)];class Lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ur||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ms,format:Rn,colorSpace:ti,depthBuffer:!1},r=Df(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Df(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lS(s)),this._blurMaterial=cS(s,e,n)}return r}_compileMaterial(e){const n=new $t(this._lodPlanes[0],e);this._renderer.compile(n,Jo)}_sceneToCubeUV(e,n,i,r){const o=new an(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Rf),u.toneMapping=Si,u.autoClear=!1;const p=new rp({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new $t(new Ns,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Rf),_=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):A===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;ga(r,A*y,h>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ur||e.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ga(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Jo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pf[(r-1)%Pf.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new $t(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const h=[];let A=0;for(let C=0;C<Vi;++C){const O=C/_,M=Math.exp(-O*O/2);h.push(M),C===0?A+=M:C<m&&(A+=2*M)}for(let C=0;C<h.length;C++)h[C]=h[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const b=this._sizeLods[r],w=3*b*(r>y-Sr?r-y+Sr:0),L=4*(this._cubeSize-b);ga(n,w,L,3*b,2*b),l.setRenderTarget(n),l.render(f,Jo)}}function lS(t){const e=[],n=[],i=[];let r=t;const s=t-Sr+1+Cf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Sr?l=Cf[a-t+Sr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,A=new Float32Array(_*g*p),y=new Float32Array(m*g*p),b=new Float32Array(h*g*p);for(let L=0;L<p;L++){const C=L%3*2/3-1,O=L>2?0:-1,M=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];A.set(M,_*g*L),y.set(d,m*g*L);const T=[L,L,L,L,L,L];b.set(T,h*g*L)}const w=new tr;w.setAttribute("position",new zn(A,_)),w.setAttribute("uv",new zn(y,m)),w.setAttribute("faceIndex",new zn(b,h)),e.push(w),r>Sr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Df(t,e,n){const i=new Ji(t,e,n);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cS(t,e,n){const i=new Float32Array(Vi),r=new H(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function If(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Uf(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uS(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Tl||l===Al,u=l===Ur||l===Nr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Lf(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Lf(t));const d=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function fS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dS(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const A=p.array;_=p.version;for(let y=0,b=A.length;y<b;y+=3){const w=A[y+0],L=A[y+1],C=A[y+2];d.push(w,L,L,C,C,w)}}else if(g!==void 0){const A=g.array;_=g.version;for(let y=0,b=A.length/3-1;y<b;y+=3){const w=y+0,L=y+1,C=y+2;d.push(w,L,L,C,C,w)}}else return;const m=new(Jh(d)?ap:sp)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function hS(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){t.drawElements(s,p,o,d*l),n.update(p,s,1)}function f(d,p,g){if(g===0)return;let _,m;if(r)_=t,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,o,d*l,g),n.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function pS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mS(t,e){return t[0]-e[0]}function gS(t,e){return Math.abs(e[1])-Math.abs(t[1])}function _S(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let W=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let M=0;y===!0&&(M=1),b===!0&&(M=2),w===!0&&(M=3);let T=u.attributes.position.count*M,k=1;T>e.maxTextureSize&&(k=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*k*4*_),z=new tp(R,T,k,_);z.type=gi,z.needsUpdate=!0;const D=M*4;for(let $=0;$<_;$++){const Y=L[$],Z=C[$],ae=O[$],se=T*k*4*$;for(let F=0;F<Y.count;F++){const X=F*D;y===!0&&(a.fromBufferAttribute(Y,F),R[se+X+0]=a.x,R[se+X+1]=a.y,R[se+X+2]=a.z,R[se+X+3]=0),b===!0&&(a.fromBufferAttribute(Z,F),R[se+X+4]=a.x,R[se+X+5]=a.y,R[se+X+6]=a.z,R[se+X+7]=0),w===!0&&(a.fromBufferAttribute(ae,F),R[se+X+8]=a.x,R[se+X+9]=a.y,R[se+X+10]=a.z,R[se+X+11]=ae.itemSize===4?a.w:1)}}m={count:_,texture:z,size:new nt(T,k)},s.set(u,m),u.addEventListener("dispose",W)}let h=0;for(let y=0;y<d.length;y++)h+=d[y];const A=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",A),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];i[u.id]=_}for(let b=0;b<g;b++){const w=_[b];w[0]=b,w[1]=d[b]}_.sort(gS);for(let b=0;b<8;b++)b<g&&_[b][1]?(o[b][0]=_[b][0],o[b][1]=_[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(mS);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let A=0;for(let b=0;b<8;b++){const w=o[b],L=w[0],C=w[1];L!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+b)!==m[L]&&u.setAttribute("morphTarget"+b,m[L]),h&&u.getAttribute("morphNormal"+b)!==h[L]&&u.setAttribute("morphNormal"+b,h[L]),r[b]=C,A+=C):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const y=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(t,"morphTargetBaseInfluence",y),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function vS(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const fp=new Zt,dp=new tp,hp=new n0,pp=new cp,Nf=[],Ff=[],Of=new Float32Array(16),Bf=new Float32Array(9),Hf=new Float32Array(4);function Xr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Nf[r];if(s===void 0&&(s=new Float32Array(r),Nf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ho(t,e){let n=Ff[e];n===void 0&&(n=new Int32Array(e),Ff[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function MS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function SS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function yS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function ES(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Hf.set(i),t.uniformMatrix2fv(this.addr,!1,Hf),At(n,i)}}function bS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Bf.set(i),t.uniformMatrix3fv(this.addr,!1,Bf),At(n,i)}}function TS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Of.set(i),t.uniformMatrix4fv(this.addr,!1,Of),At(n,i)}}function AS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function CS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function RS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function PS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function LS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function DS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function IS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function US(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||fp,r)}function NS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||hp,r)}function FS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pp,r)}function OS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||dp,r)}function BS(t){switch(t){case 5126:return xS;case 35664:return MS;case 35665:return SS;case 35666:return yS;case 35674:return ES;case 35675:return bS;case 35676:return TS;case 5124:case 35670:return AS;case 35667:case 35671:return wS;case 35668:case 35672:return CS;case 35669:case 35673:return RS;case 5125:return PS;case 36294:return LS;case 36295:return DS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}function HS(t,e){t.uniform1fv(this.addr,e)}function zS(t,e){const n=Xr(e,this.size,2);t.uniform2fv(this.addr,n)}function kS(t,e){const n=Xr(e,this.size,3);t.uniform3fv(this.addr,n)}function VS(t,e){const n=Xr(e,this.size,4);t.uniform4fv(this.addr,n)}function GS(t,e){const n=Xr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WS(t,e){const n=Xr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XS(t,e){const n=Xr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qS(t,e){t.uniform1iv(this.addr,e)}function $S(t,e){t.uniform2iv(this.addr,e)}function YS(t,e){t.uniform3iv(this.addr,e)}function jS(t,e){t.uniform4iv(this.addr,e)}function KS(t,e){t.uniform1uiv(this.addr,e)}function ZS(t,e){t.uniform2uiv(this.addr,e)}function JS(t,e){t.uniform3uiv(this.addr,e)}function QS(t,e){t.uniform4uiv(this.addr,e)}function ey(t,e,n){const i=this.cache,r=e.length,s=ho(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||fp,s[a])}function ty(t,e,n){const i=this.cache,r=e.length,s=ho(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||hp,s[a])}function ny(t,e,n){const i=this.cache,r=e.length,s=ho(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||pp,s[a])}function iy(t,e,n){const i=this.cache,r=e.length,s=ho(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||dp,s[a])}function ry(t){switch(t){case 5126:return HS;case 35664:return zS;case 35665:return kS;case 35666:return VS;case 35674:return GS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return qS;case 35667:case 35671:return $S;case 35668:case 35672:return YS;case 35669:case 35673:return jS;case 5125:return KS;case 36294:return ZS;case 36295:return JS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}class sy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=BS(n.type)}}class ay{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=ry(n.type)}}class oy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function zf(t,e){t.seq.push(e),t.map[e.id]=e}function ly(t,e,n){const i=t.name,r=i.length;for(nl.lastIndex=0;;){const s=nl.exec(i),a=nl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){zf(n,c===void 0?new sy(o,t,e):new ay(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new oy(o),zf(n,f)),n=f}}}class Aa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);ly(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function kf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cy=37297;let uy=0;function fy(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function dy(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Ha&&n===Ba?i="LinearDisplayP3ToLinearSRGB":e===Ba&&n===Ha&&(i="LinearSRGBToLinearDisplayP3"),t){case ti:case uo:return[i,"LinearTransferOETF"];case Lt:case Mc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Vf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+fy(t.getShaderSource(e),a)}else return r}function hy(t,e){const n=dy(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function py(t,e){let n;switch(e){case bv:n="Linear";break;case Tv:n="Reinhard";break;case Av:n="OptimizedCineon";break;case wv:n="ACESFilmic";break;case Cv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function my(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(os).join(`
`)}function gy(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _y(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function os(t){return t!==""}function Gf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(t){return t.replace(vy,My)}const xy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function My(t,e){let n=qe[e];if(n===void 0){const i=xy.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dl(n)}const Sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(t){return t.replace(Sy,yy)}function yy(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qf(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ey(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function by(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ur:case Nr:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ty(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ay(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vc:e="ENVMAP_BLENDING_MULTIPLY";break;case yv:e="ENVMAP_BLENDING_MIX";break;case Ev:e="ENVMAP_BLENDING_ADD";break}return e}function wy(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Cy(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Ey(n),c=by(n),u=Ty(n),f=Ay(n),d=wy(n),p=n.isWebGL2?"":my(n),g=gy(s),_=r.createProgram();let m,h,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(os).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(os).join(`
`),h.length>0&&(h+=`
`)):(m=[qf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),h=[p,qf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?qe.tonemapping_pars_fragment:"",n.toneMapping!==Si?py("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,hy("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(os).join(`
`)),a=Dl(a),a=Gf(a,n),a=Wf(a,n),o=Dl(o),o=Gf(o,n),o=Wf(o,n),a=Xf(a),o=Xf(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=A+m+a,b=A+h+o,w=kf(r,r.VERTEX_SHADER,y),L=kf(r,r.FRAGMENT_SHADER,b);r.attachShader(_,w),r.attachShader(_,L),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(k){if(t.debug.checkShaderErrors){const R=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(w).trim(),D=r.getShaderInfoLog(L).trim();let W=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,w,L);else{const Y=Vf(r,w,"vertex"),Z=Vf(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+Y+`
`+Z)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(z===""||D==="")&&($=!1);$&&(k.diagnostics={runnable:W,programLog:R,vertexShader:{log:z,prefix:m},fragmentShader:{log:D,prefix:h}})}r.deleteShader(w),r.deleteShader(L),O=new Aa(r,_),M=_y(r,_)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,cy)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=L,this}let Ry=0;class Py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Ly(e),n.set(e,i)),i}}class Ly{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}}function Dy(t,e,n,i,r,s,a){const o=new np,l=new Py,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,T,k,R,z){const D=R.fog,W=z.geometry,$=M.isMeshStandardMaterial?R.environment:null,Y=(M.isMeshStandardMaterial?n:e).get(M.envMap||$),Z=Y&&Y.mapping===co?Y.image.height:null,ae=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,F=se!==void 0?se.length:0;let X=0;W.morphAttributes.position!==void 0&&(X=1),W.morphAttributes.normal!==void 0&&(X=2),W.morphAttributes.color!==void 0&&(X=3);let _e,xe,be,ye;if(ae){const xt=Fn[ae];_e=xt.vertexShader,xe=xt.fragmentShader}else _e=M.vertexShader,xe=M.fragmentShader,l.update(M),be=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const Xe=t.getRenderTarget(),Fe=z.isInstancedMesh===!0,Ne=!!M.map,st=!!M.matcap,ze=!!Y,x=!!M.aoMap,P=!!M.lightMap,N=!!M.bumpMap,V=!!M.normalMap,G=!!M.displacementMap,oe=!!M.emissiveMap,re=!!M.metalnessMap,J=!!M.roughnessMap,le=M.anisotropy>0,ne=M.clearcoat>0,Me=M.iridescence>0,S=M.sheen>0,v=M.transmission>0,U=le&&!!M.anisotropyMap,Q=ne&&!!M.clearcoatMap,ee=ne&&!!M.clearcoatNormalMap,ie=ne&&!!M.clearcoatRoughnessMap,ge=Me&&!!M.iridescenceMap,fe=Me&&!!M.iridescenceThicknessMap,ve=S&&!!M.sheenColorMap,Le=S&&!!M.sheenRoughnessMap,je=!!M.specularMap,de=!!M.specularColorMap,ke=!!M.specularIntensityMap,Ce=v&&!!M.transmissionMap,De=v&&!!M.thicknessMap,Re=!!M.gradientMap,Te=!!M.alphaMap,Ze=M.alphaTest>0,I=!!M.alphaHash,Se=!!M.extensions,he=!!W.attributes.uv1,te=!!W.attributes.uv2,pe=!!W.attributes.uv3;let Ie=Si;return M.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(Ie=t.toneMapping),{isWebGL2:u,shaderID:ae,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:xe,defines:M.defines,customVertexShaderID:be,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Xe===null?t.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:ti,map:Ne,matcap:st,envMap:ze,envMapMode:ze&&Y.mapping,envMapCubeUVHeight:Z,aoMap:x,lightMap:P,bumpMap:N,normalMap:V,displacementMap:d&&G,emissiveMap:oe,normalMapObjectSpace:V&&M.normalMapType===kv,normalMapTangentSpace:V&&M.normalMapType===Zh,metalnessMap:re,roughnessMap:J,anisotropy:le,anisotropyMap:U,clearcoat:ne,clearcoatMap:Q,clearcoatNormalMap:ee,clearcoatRoughnessMap:ie,iridescence:Me,iridescenceMap:ge,iridescenceThicknessMap:fe,sheen:S,sheenColorMap:ve,sheenRoughnessMap:Le,specularMap:je,specularColorMap:de,specularIntensityMap:ke,transmission:v,transmissionMap:Ce,thicknessMap:De,gradientMap:Re,opaque:M.transparent===!1&&M.blending===wr,alphaMap:Te,alphaTest:Ze,alphaHash:I,combine:M.combine,mapUv:Ne&&_(M.map.channel),aoMapUv:x&&_(M.aoMap.channel),lightMapUv:P&&_(M.lightMap.channel),bumpMapUv:N&&_(M.bumpMap.channel),normalMapUv:V&&_(M.normalMap.channel),displacementMapUv:G&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:re&&_(M.metalnessMap.channel),roughnessMapUv:J&&_(M.roughnessMap.channel),anisotropyMapUv:U&&_(M.anisotropyMap.channel),clearcoatMapUv:Q&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(M.sheenRoughnessMap.channel),specularMapUv:je&&_(M.specularMap.channel),specularColorMapUv:de&&_(M.specularColorMap.channel),specularIntensityMapUv:ke&&_(M.specularIntensityMap.channel),transmissionMapUv:Ce&&_(M.transmissionMap.channel),thicknessMapUv:De&&_(M.thicknessMap.channel),alphaMapUv:Te&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(V||le),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:he,vertexUv2s:te,vertexUv3s:pe,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Ne||Te),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:X,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Se&&M.extensions.derivatives===!0,extensionFragDepth:Se&&M.extensions.fragDepth===!0,extensionDrawBuffers:Se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)T.push(k),T.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(A(T,M),y(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function A(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function b(M){const T=g[M.type];let k;if(T){const R=Fn[T];k=g0.clone(R.uniforms)}else k=M.uniforms;return k}function w(M,T){let k;for(let R=0,z=c.length;R<z;R++){const D=c[R];if(D.cacheKey===T){k=D,++k.usedTimes;break}}return k===void 0&&(k=new Cy(t,T,M,s),c.push(k)),k}function L(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:w,releaseProgram:L,releaseShaderCache:C,programs:c,dispose:O}}function Iy(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Uy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $f(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,p,g,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function o(f,d,p,g,_,m){const h=a(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,_,m){const h=a(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||Uy),i.length>1&&i.sort(d||$f),r.length>1&&r.sort(d||$f)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Ny(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Yf,t.set(i,[a])):r>=s.length?(a=new Yf,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Fy(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new et};break;case"SpotLight":n={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function Oy(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let By=0;function Hy(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zy(t,e){const n=new Fy,i=Oy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,a=new Et,o=new Et;function l(u,f){let d=0,p=0,g=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let _=0,m=0,h=0,A=0,y=0,b=0,w=0,L=0,C=0,O=0,M=0;u.sort(Hy);const T=f===!0?Math.PI:1;for(let R=0,z=u.length;R<z;R++){const D=u[R],W=D.color,$=D.intensity,Y=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=W.r*$*T,p+=W.g*$*T,g+=W.b*$*T;else if(D.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(D.sh.coefficients[ae],$);M++}else if(D.isDirectionalLight){const ae=n.get(D);if(ae.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const se=D.shadow,F=i.get(D);F.shadowBias=se.bias,F.shadowNormalBias=se.normalBias,F.shadowRadius=se.radius,F.shadowMapSize=se.mapSize,r.directionalShadow[_]=F,r.directionalShadowMap[_]=Z,r.directionalShadowMatrix[_]=D.shadow.matrix,b++}r.directional[_]=ae,_++}else if(D.isSpotLight){const ae=n.get(D);ae.position.setFromMatrixPosition(D.matrixWorld),ae.color.copy(W).multiplyScalar($*T),ae.distance=Y,ae.coneCos=Math.cos(D.angle),ae.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ae.decay=D.decay,r.spot[h]=ae;const se=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,se.updateMatrices(D),D.castShadow&&O++),r.spotLightMatrix[h]=se.matrix,D.castShadow){const F=i.get(D);F.shadowBias=se.bias,F.shadowNormalBias=se.normalBias,F.shadowRadius=se.radius,F.shadowMapSize=se.mapSize,r.spotShadow[h]=F,r.spotShadowMap[h]=Z,L++}h++}else if(D.isRectAreaLight){const ae=n.get(D);ae.color.copy(W).multiplyScalar($),ae.halfWidth.set(D.width*.5,0,0),ae.halfHeight.set(0,D.height*.5,0),r.rectArea[A]=ae,A++}else if(D.isPointLight){const ae=n.get(D);if(ae.color.copy(D.color).multiplyScalar(D.intensity*T),ae.distance=D.distance,ae.decay=D.decay,D.castShadow){const se=D.shadow,F=i.get(D);F.shadowBias=se.bias,F.shadowNormalBias=se.normalBias,F.shadowRadius=se.radius,F.shadowMapSize=se.mapSize,F.shadowCameraNear=se.camera.near,F.shadowCameraFar=se.camera.far,r.pointShadow[m]=F,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=D.shadow.matrix,w++}r.point[m]=ae,m++}else if(D.isHemisphereLight){const ae=n.get(D);ae.skyColor.copy(D.color).multiplyScalar($*T),ae.groundColor.copy(D.groundColor).multiplyScalar($*T),r.hemi[y]=ae,y++}}A>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const k=r.hash;(k.directionalLength!==_||k.pointLength!==m||k.spotLength!==h||k.rectAreaLength!==A||k.hemiLength!==y||k.numDirectionalShadows!==b||k.numPointShadows!==w||k.numSpotShadows!==L||k.numSpotMaps!==C||k.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=A,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=L+C-O,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=M,k.directionalLength=_,k.pointLength=m,k.spotLength=h,k.rectAreaLength=A,k.hemiLength=y,k.numDirectionalShadows=b,k.numPointShadows=w,k.numSpotShadows=L,k.numSpotMaps=C,k.numLightProbes=M,r.version=By++)}function c(u,f){let d=0,p=0,g=0,_=0,m=0;const h=f.matrixWorldInverse;for(let A=0,y=u.length;A<y;A++){const b=u[A];if(b.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),d++}else if(b.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),g++}else if(b.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(h),p++}else if(b.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function jf(t,e){const n=new zy(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ky(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new jf(t,e),n.set(s,[l])):a>=o.length?(l=new jf(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Vy extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gy extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qy(t,e,n){let i=new yc;const r=new nt,s=new nt,a=new ut,o=new Vy({depthPacking:zv}),l=new Gy,c={},u=n.maxTextureSize,f={[Ti]:Kt,[Kt]:Ti,[on]:on},d=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Wy,fragmentShader:Xy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new tr;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let h=this.type;this.render=function(w,L,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const O=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Mi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const R=h!==Kn&&this.type===Kn,z=h===Kn&&this.type!==Kn;for(let D=0,W=w.length;D<W;D++){const $=w[D],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const Z=Y.getFrameExtents();if(r.multiply(Z),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,Y.mapSize.y=s.y)),Y.map===null||R===!0||z===!0){const se=this.type!==Kn?{minFilter:Vt,magFilter:Vt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ji(r.x,r.y,se),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const ae=Y.getViewportCount();for(let se=0;se<ae;se++){const F=Y.getViewport(se);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),k.viewport(a),Y.updateMatrices($,se),i=Y.getFrustum(),b(L,C,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Kn&&A(Y,C),Y.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(O,M,T)};function A(w,L){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ji(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(L,null,C,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(L,null,C,p,_,null)}function y(w,L,C,O){let M=null;const T=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)M=T;else if(M=C.isPointLight===!0?l:o,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const k=M.uuid,R=L.uuid;let z=c[k];z===void 0&&(z={},c[k]=z);let D=z[R];D===void 0&&(D=M.clone(),z[R]=D),M=D}if(M.visible=L.visible,M.wireframe=L.wireframe,O===Kn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:f[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=t.properties.get(M);k.light=C}return M}function b(w,L,C,O,M){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Kn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const R=e.update(w),z=w.material;if(Array.isArray(z)){const D=R.groups;for(let W=0,$=D.length;W<$;W++){const Y=D[W],Z=z[Y.materialIndex];if(Z&&Z.visible){const ae=y(w,Z,O,M);t.renderBufferDirect(C,null,R,ae,w,Y)}}}else if(z.visible){const D=y(w,z,O,M);t.renderBufferDirect(C,null,R,D,w,null)}}const k=w.children;for(let R=0,z=k.length;R<z;R++)b(k[R],L,C,O,M)}}function $y(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const Se=new ut;let he=null;const te=new ut(0,0,0,0);return{setMask:function(pe){he!==pe&&!I&&(t.colorMask(pe,pe,pe,pe),he=pe)},setLocked:function(pe){I=pe},setClear:function(pe,Ie,tt,xt,dn){dn===!0&&(pe*=xt,Ie*=xt,tt*=xt),Se.set(pe,Ie,tt,xt),te.equals(Se)===!1&&(t.clearColor(pe,Ie,tt,xt),te.copy(Se))},reset:function(){I=!1,he=null,te.set(-1,0,0,0)}}}function s(){let I=!1,Se=null,he=null,te=null;return{setTest:function(pe){pe?Ne(t.DEPTH_TEST):st(t.DEPTH_TEST)},setMask:function(pe){Se!==pe&&!I&&(t.depthMask(pe),Se=pe)},setFunc:function(pe){if(he!==pe){switch(pe){case mv:t.depthFunc(t.NEVER);break;case gv:t.depthFunc(t.ALWAYS);break;case _v:t.depthFunc(t.LESS);break;case Fa:t.depthFunc(t.LEQUAL);break;case vv:t.depthFunc(t.EQUAL);break;case xv:t.depthFunc(t.GEQUAL);break;case Mv:t.depthFunc(t.GREATER);break;case Sv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=pe}},setLocked:function(pe){I=pe},setClear:function(pe){te!==pe&&(t.clearDepth(pe),te=pe)},reset:function(){I=!1,Se=null,he=null,te=null}}}function a(){let I=!1,Se=null,he=null,te=null,pe=null,Ie=null,tt=null,xt=null,dn=null;return{setTest:function(at){I||(at?Ne(t.STENCIL_TEST):st(t.STENCIL_TEST))},setMask:function(at){Se!==at&&!I&&(t.stencilMask(at),Se=at)},setFunc:function(at,Bt,In){(he!==at||te!==Bt||pe!==In)&&(t.stencilFunc(at,Bt,In),he=at,te=Bt,pe=In)},setOp:function(at,Bt,In){(Ie!==at||tt!==Bt||xt!==In)&&(t.stencilOp(at,Bt,In),Ie=at,tt=Bt,xt=In)},setLocked:function(at){I=at},setClear:function(at){dn!==at&&(t.clearStencil(at),dn=at)},reset:function(){I=!1,Se=null,he=null,te=null,pe=null,Ie=null,tt=null,xt=null,dn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,h=!1,A=null,y=null,b=null,w=null,L=null,C=null,O=null,M=new et(0,0,0),T=0,k=!1,R=null,z=null,D=null,W=null,$=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ae=0;const se=t.getParameter(t.VERSION);se.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(se)[1]),Z=ae>=1):se.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Z=ae>=2);let F=null,X={};const _e=t.getParameter(t.SCISSOR_BOX),xe=t.getParameter(t.VIEWPORT),be=new ut().fromArray(_e),ye=new ut().fromArray(xe);function Xe(I,Se,he,te){const pe=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(I,Ie),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<he;tt++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(Se,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(Se+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return Ie}const Fe={};Fe[t.TEXTURE_2D]=Xe(t.TEXTURE_2D,t.TEXTURE_2D,1),Fe[t.TEXTURE_CUBE_MAP]=Xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Fe[t.TEXTURE_2D_ARRAY]=Xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Fe[t.TEXTURE_3D]=Xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(t.DEPTH_TEST),l.setFunc(Fa),re(!1),J(Ru),Ne(t.CULL_FACE),G(Mi);function Ne(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function st(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function ze(I,Se){return p[I]!==Se?(t.bindFramebuffer(I,Se),p[I]=Se,i&&(I===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Se),I===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Se)),!0):!1}function x(I,Se){let he=_,te=!1;if(I)if(he=g.get(Se),he===void 0&&(he=[],g.set(Se,he)),I.isWebGLMultipleRenderTargets){const pe=I.texture;if(he.length!==pe.length||he[0]!==t.COLOR_ATTACHMENT0){for(let Ie=0,tt=pe.length;Ie<tt;Ie++)he[Ie]=t.COLOR_ATTACHMENT0+Ie;he.length=pe.length,te=!0}}else he[0]!==t.COLOR_ATTACHMENT0&&(he[0]=t.COLOR_ATTACHMENT0,te=!0);else he[0]!==t.BACK&&(he[0]=t.BACK,te=!0);te&&(n.isWebGL2?t.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function P(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const N={[ki]:t.FUNC_ADD,[ev]:t.FUNC_SUBTRACT,[tv]:t.FUNC_REVERSE_SUBTRACT};if(i)N[Iu]=t.MIN,N[Uu]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(N[Iu]=I.MIN_EXT,N[Uu]=I.MAX_EXT)}const V={[nv]:t.ZERO,[iv]:t.ONE,[rv]:t.SRC_COLOR,[El]:t.SRC_ALPHA,[uv]:t.SRC_ALPHA_SATURATE,[lv]:t.DST_COLOR,[av]:t.DST_ALPHA,[sv]:t.ONE_MINUS_SRC_COLOR,[bl]:t.ONE_MINUS_SRC_ALPHA,[cv]:t.ONE_MINUS_DST_COLOR,[ov]:t.ONE_MINUS_DST_ALPHA,[fv]:t.CONSTANT_COLOR,[dv]:t.ONE_MINUS_CONSTANT_COLOR,[hv]:t.CONSTANT_ALPHA,[pv]:t.ONE_MINUS_CONSTANT_ALPHA};function G(I,Se,he,te,pe,Ie,tt,xt,dn,at){if(I===Mi){h===!0&&(st(t.BLEND),h=!1);return}if(h===!1&&(Ne(t.BLEND),h=!0),I!==Q_){if(I!==A||at!==k){if((y!==ki||L!==ki)&&(t.blendEquation(t.FUNC_ADD),y=ki,L=ki),at)switch(I){case wr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pu:t.blendFunc(t.ONE,t.ONE);break;case Lu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Du:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case wr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Du:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,w=null,C=null,O=null,M.set(0,0,0),T=0,A=I,k=at}return}pe=pe||Se,Ie=Ie||he,tt=tt||te,(Se!==y||pe!==L)&&(t.blendEquationSeparate(N[Se],N[pe]),y=Se,L=pe),(he!==b||te!==w||Ie!==C||tt!==O)&&(t.blendFuncSeparate(V[he],V[te],V[Ie],V[tt]),b=he,w=te,C=Ie,O=tt),(xt.equals(M)===!1||dn!==T)&&(t.blendColor(xt.r,xt.g,xt.b,dn),M.copy(xt),T=dn),A=I,k=!1}function oe(I,Se){I.side===on?st(t.CULL_FACE):Ne(t.CULL_FACE);let he=I.side===Kt;Se&&(he=!he),re(he),I.blending===wr&&I.transparent===!1?G(Mi):G(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const te=I.stencilWrite;c.setTest(te),te&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ne(t.SAMPLE_ALPHA_TO_COVERAGE):st(t.SAMPLE_ALPHA_TO_COVERAGE)}function re(I){R!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),R=I)}function J(I){I!==K_?(Ne(t.CULL_FACE),I!==z&&(I===Ru?t.cullFace(t.BACK):I===Z_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):st(t.CULL_FACE),z=I}function le(I){I!==D&&(Z&&t.lineWidth(I),D=I)}function ne(I,Se,he){I?(Ne(t.POLYGON_OFFSET_FILL),(W!==Se||$!==he)&&(t.polygonOffset(Se,he),W=Se,$=he)):st(t.POLYGON_OFFSET_FILL)}function Me(I){I?Ne(t.SCISSOR_TEST):st(t.SCISSOR_TEST)}function S(I){I===void 0&&(I=t.TEXTURE0+Y-1),F!==I&&(t.activeTexture(I),F=I)}function v(I,Se,he){he===void 0&&(F===null?he=t.TEXTURE0+Y-1:he=F);let te=X[he];te===void 0&&(te={type:void 0,texture:void 0},X[he]=te),(te.type!==I||te.texture!==Se)&&(F!==he&&(t.activeTexture(he),F=he),t.bindTexture(I,Se||Fe[I]),te.type=I,te.texture=Se)}function U(){const I=X[F];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){be.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),be.copy(I))}function De(I){ye.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ye.copy(I))}function Re(I,Se){let he=f.get(Se);he===void 0&&(he=new WeakMap,f.set(Se,he));let te=he.get(I);te===void 0&&(te=t.getUniformBlockIndex(Se,I.name),he.set(I,te))}function Te(I,Se){const te=f.get(Se).get(I);u.get(Se)!==te&&(t.uniformBlockBinding(Se,te,I.__bindingPointIndex),u.set(Se,te))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},F=null,X={},p={},g=new WeakMap,_=[],m=null,h=!1,A=null,y=null,b=null,w=null,L=null,C=null,O=null,M=new et(0,0,0),T=0,k=!1,R=null,z=null,D=null,W=null,$=null,be.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:st,bindFramebuffer:ze,drawBuffers:x,useProgram:P,setBlending:G,setMaterial:oe,setFlipSided:re,setCullFace:J,setLineWidth:le,setPolygonOffset:ne,setScissorTest:Me,activeTexture:S,bindTexture:v,unbindTexture:U,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:de,texImage3D:ke,updateUBOMapping:Re,uniformBlockBinding:Te,texStorage2D:Le,texStorage3D:je,texSubImage2D:ie,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ce,viewport:De,reset:Ze}}function Yy(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,v){return h?new OffscreenCanvas(S,v):Ss("canvas")}function y(S,v,U,Q){let ee=1;if((S.width>Q||S.height>Q)&&(ee=Q/Math.max(S.width,S.height)),ee<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ie=v?Ll:Math.floor,ge=ie(ee*S.width),fe=ie(ee*S.height);_===void 0&&(_=A(ge,fe));const ve=U?A(ge,fe):_;return ve.width=ge,ve.height=fe,ve.getContext("2d").drawImage(S,0,0,ge,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ge+"x"+fe+")."),ve}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return ff(S.width)&&ff(S.height)}function w(S){return o?!1:S.wrapS!==Cn||S.wrapT!==Cn||S.minFilter!==Vt&&S.minFilter!==mn}function L(S,v){return S.generateMipmaps&&v&&S.minFilter!==Vt&&S.minFilter!==mn}function C(S){t.generateMipmap(S)}function O(S,v,U,Q,ee=!1){if(o===!1)return v;if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ie=v;if(v===t.RED&&(U===t.FLOAT&&(ie=t.R32F),U===t.HALF_FLOAT&&(ie=t.R16F),U===t.UNSIGNED_BYTE&&(ie=t.R8)),v===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(ie=t.R8UI),U===t.UNSIGNED_SHORT&&(ie=t.R16UI),U===t.UNSIGNED_INT&&(ie=t.R32UI),U===t.BYTE&&(ie=t.R8I),U===t.SHORT&&(ie=t.R16I),U===t.INT&&(ie=t.R32I)),v===t.RG&&(U===t.FLOAT&&(ie=t.RG32F),U===t.HALF_FLOAT&&(ie=t.RG16F),U===t.UNSIGNED_BYTE&&(ie=t.RG8)),v===t.RGBA){const ge=ee?Oa:it.getTransfer(Q);U===t.FLOAT&&(ie=t.RGBA32F),U===t.HALF_FLOAT&&(ie=t.RGBA16F),U===t.UNSIGNED_BYTE&&(ie=ge===lt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(S,v,U){return L(S,U)===!0||S.isFramebufferTexture&&S.minFilter!==Vt&&S.minFilter!==mn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function T(S){return S===Vt||S===Nu||S===wo?t.NEAREST:t.LINEAR}function k(S){const v=S.target;v.removeEventListener("dispose",k),z(v),v.isVideoTexture&&g.delete(v)}function R(S){const v=S.target;v.removeEventListener("dispose",R),W(v)}function z(S){const v=i.get(S);if(v.__webglInit===void 0)return;const U=S.source,Q=m.get(U);if(Q){const ee=Q[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(S),Object.keys(Q).length===0&&m.delete(U)}i.remove(S)}function D(S){const v=i.get(S);t.deleteTexture(v.__webglTexture);const U=S.source,Q=m.get(U);delete Q[v.__cacheKey],a.memory.textures--}function W(S){const v=S.texture,U=i.get(S),Q=i.get(v);if(Q.__webglTexture!==void 0&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(U.__webglFramebuffer[ee]))for(let ie=0;ie<U.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(U.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(U.__webglFramebuffer[ee]);U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer[ee])}else{if(Array.isArray(U.__webglFramebuffer))for(let ee=0;ee<U.__webglFramebuffer.length;ee++)t.deleteFramebuffer(U.__webglFramebuffer[ee]);else t.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&t.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ee=0;ee<U.__webglColorRenderbuffer.length;ee++)U.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(U.__webglColorRenderbuffer[ee]);U.__webglDepthRenderbuffer&&t.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ee=0,ie=v.length;ee<ie;ee++){const ge=i.get(v[ee]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(v[ee])}i.remove(v),i.remove(S)}let $=0;function Y(){$=0}function Z(){const S=$;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),$+=1,S}function ae(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function se(S,v){const U=i.get(S);if(S.isVideoTexture&&ne(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){const Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(U,S,v);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+v)}function F(S,v){const U=i.get(S);if(S.version>0&&U.__version!==S.version){Ne(U,S,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+v)}function X(S,v){const U=i.get(S);if(S.version>0&&U.__version!==S.version){Ne(U,S,v);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+v)}function _e(S,v){const U=i.get(S);if(S.version>0&&U.__version!==S.version){st(U,S,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+v)}const xe={[wl]:t.REPEAT,[Cn]:t.CLAMP_TO_EDGE,[Cl]:t.MIRRORED_REPEAT},be={[Vt]:t.NEAREST,[Nu]:t.NEAREST_MIPMAP_NEAREST,[wo]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[Rv]:t.LINEAR_MIPMAP_NEAREST,[xs]:t.LINEAR_MIPMAP_LINEAR},ye={[Vv]:t.NEVER,[jv]:t.ALWAYS,[Gv]:t.LESS,[Xv]:t.LEQUAL,[Wv]:t.EQUAL,[Yv]:t.GEQUAL,[qv]:t.GREATER,[$v]:t.NOTEQUAL};function Xe(S,v,U){if(U?(t.texParameteri(S,t.TEXTURE_WRAP_S,xe[v.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,xe[v.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,xe[v.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,be[v.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,be[v.minFilter])):(t.texParameteri(S,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(S,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(v.wrapS!==Cn||v.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(S,t.TEXTURE_MAG_FILTER,T(v.magFilter)),t.texParameteri(S,t.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==Vt&&v.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Vt||v.minFilter!==wo&&v.minFilter!==xs||v.type===gi&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Ms&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(t.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Fe(S,v){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",k));const Q=v.source;let ee=m.get(Q);ee===void 0&&(ee={},m.set(Q,ee));const ie=ae(v);if(ie!==S.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ee[ie].usedTimes++;const ge=ee[S.__cacheKey];ge!==void 0&&(ee[S.__cacheKey].usedTimes--,ge.usedTimes===0&&D(v)),S.__cacheKey=ie,S.__webglTexture=ee[ie].texture}return U}function Ne(S,v,U){let Q=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=Fe(S,v),ie=v.source;n.bindTexture(Q,S.__webglTexture,t.TEXTURE0+U);const ge=i.get(ie);if(ie.version!==ge.__version||ee===!0){n.activeTexture(t.TEXTURE0+U);const fe=it.getPrimaries(it.workingColorSpace),ve=v.colorSpace===gn?null:it.getPrimaries(v.colorSpace),Le=v.colorSpace===gn||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const je=w(v)&&b(v.image)===!1;let de=y(v.image,je,!1,u);de=Me(v,de);const ke=b(de)||o,Ce=s.convert(v.format,v.colorSpace);let De=s.convert(v.type),Re=O(v.internalFormat,Ce,De,v.colorSpace,v.isVideoTexture);Xe(Q,v,ke);let Te;const Ze=v.mipmaps,I=o&&v.isVideoTexture!==!0,Se=ge.__version===void 0||ee===!0,he=M(v,de,ke);if(v.isDepthTexture)Re=t.DEPTH_COMPONENT,o?v.type===gi?Re=t.DEPTH_COMPONENT32F:v.type===mi?Re=t.DEPTH_COMPONENT24:v.type===qi?Re=t.DEPTH24_STENCIL8:Re=t.DEPTH_COMPONENT16:v.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===$i&&Re===t.DEPTH_COMPONENT&&v.type!==xc&&v.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=mi,De=s.convert(v.type)),v.format===Fr&&Re===t.DEPTH_COMPONENT&&(Re=t.DEPTH_STENCIL,v.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=qi,De=s.convert(v.type))),Se&&(I?n.texStorage2D(t.TEXTURE_2D,1,Re,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Re,de.width,de.height,0,Ce,De,null));else if(v.isDataTexture)if(Ze.length>0&&ke){I&&Se&&n.texStorage2D(t.TEXTURE_2D,he,Re,Ze[0].width,Ze[0].height);for(let te=0,pe=Ze.length;te<pe;te++)Te=Ze[te],I?n.texSubImage2D(t.TEXTURE_2D,te,0,0,Te.width,Te.height,Ce,De,Te.data):n.texImage2D(t.TEXTURE_2D,te,Re,Te.width,Te.height,0,Ce,De,Te.data);v.generateMipmaps=!1}else I?(Se&&n.texStorage2D(t.TEXTURE_2D,he,Re,de.width,de.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,Ce,De,de.data)):n.texImage2D(t.TEXTURE_2D,0,Re,de.width,de.height,0,Ce,De,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Re,Ze[0].width,Ze[0].height,de.depth);for(let te=0,pe=Ze.length;te<pe;te++)Te=Ze[te],v.format!==Rn?Ce!==null?I?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,Te.width,Te.height,de.depth,Ce,Te.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Re,Te.width,Te.height,de.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,Te.width,Te.height,de.depth,Ce,De,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Re,Te.width,Te.height,de.depth,0,Ce,De,Te.data)}else{I&&Se&&n.texStorage2D(t.TEXTURE_2D,he,Re,Ze[0].width,Ze[0].height);for(let te=0,pe=Ze.length;te<pe;te++)Te=Ze[te],v.format!==Rn?Ce!==null?I?n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,Te.width,Te.height,Ce,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Re,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?n.texSubImage2D(t.TEXTURE_2D,te,0,0,Te.width,Te.height,Ce,De,Te.data):n.texImage2D(t.TEXTURE_2D,te,Re,Te.width,Te.height,0,Ce,De,Te.data)}else if(v.isDataArrayTexture)I?(Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Re,de.width,de.height,de.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ce,De,de.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,de.width,de.height,de.depth,0,Ce,De,de.data);else if(v.isData3DTexture)I?(Se&&n.texStorage3D(t.TEXTURE_3D,he,Re,de.width,de.height,de.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ce,De,de.data)):n.texImage3D(t.TEXTURE_3D,0,Re,de.width,de.height,de.depth,0,Ce,De,de.data);else if(v.isFramebufferTexture){if(Se)if(I)n.texStorage2D(t.TEXTURE_2D,he,Re,de.width,de.height);else{let te=de.width,pe=de.height;for(let Ie=0;Ie<he;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Re,te,pe,0,Ce,De,null),te>>=1,pe>>=1}}else if(Ze.length>0&&ke){I&&Se&&n.texStorage2D(t.TEXTURE_2D,he,Re,Ze[0].width,Ze[0].height);for(let te=0,pe=Ze.length;te<pe;te++)Te=Ze[te],I?n.texSubImage2D(t.TEXTURE_2D,te,0,0,Ce,De,Te):n.texImage2D(t.TEXTURE_2D,te,Re,Ce,De,Te);v.generateMipmaps=!1}else I?(Se&&n.texStorage2D(t.TEXTURE_2D,he,Re,de.width,de.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,De,de)):n.texImage2D(t.TEXTURE_2D,0,Re,Ce,De,de);L(v,ke)&&C(Q),ge.__version=ie.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function st(S,v,U){if(v.image.length!==6)return;const Q=Fe(S,v),ee=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+U);const ie=i.get(ee);if(ee.version!==ie.__version||Q===!0){n.activeTexture(t.TEXTURE0+U);const ge=it.getPrimaries(it.workingColorSpace),fe=v.colorSpace===gn?null:it.getPrimaries(v.colorSpace),ve=v.colorSpace===gn||ge===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Le=v.isCompressedTexture||v.image[0].isCompressedTexture,je=v.image[0]&&v.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!Le&&!je?de[te]=y(v.image[te],!1,!0,c):de[te]=je?v.image[te].image:v.image[te],de[te]=Me(v,de[te]);const ke=de[0],Ce=b(ke)||o,De=s.convert(v.format,v.colorSpace),Re=s.convert(v.type),Te=O(v.internalFormat,De,Re,v.colorSpace),Ze=o&&v.isVideoTexture!==!0,I=ie.__version===void 0||Q===!0;let Se=M(v,ke,Ce);Xe(t.TEXTURE_CUBE_MAP,v,Ce);let he;if(Le){Ze&&I&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Te,ke.width,ke.height);for(let te=0;te<6;te++){he=de[te].mipmaps;for(let pe=0;pe<he.length;pe++){const Ie=he[pe];v.format!==Rn?De!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,Ie.width,Ie.height,De,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Te,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,Ie.width,Ie.height,De,Re,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Te,Ie.width,Ie.height,0,De,Re,Ie.data)}}}else{he=v.mipmaps,Ze&&I&&(he.length>0&&Se++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Te,de[0].width,de[0].height));for(let te=0;te<6;te++)if(je){Ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,De,Re,de[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Te,de[te].width,de[te].height,0,De,Re,de[te].data);for(let pe=0;pe<he.length;pe++){const tt=he[pe].image[te].image;Ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,tt.width,tt.height,De,Re,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Te,tt.width,tt.height,0,De,Re,tt.data)}}else{Ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,Re,de[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Te,De,Re,de[te]);for(let pe=0;pe<he.length;pe++){const Ie=he[pe];Ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,De,Re,Ie.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Te,De,Re,Ie.image[te])}}}L(v,Ce)&&C(t.TEXTURE_CUBE_MAP),ie.__version=ee.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ze(S,v,U,Q,ee,ie){const ge=s.convert(U.format,U.colorSpace),fe=s.convert(U.type),ve=O(U.internalFormat,ge,fe,U.colorSpace);if(!i.get(v).__hasExternalTextures){const je=Math.max(1,v.width>>ie),de=Math.max(1,v.height>>ie);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ie,ve,je,de,v.depth,0,ge,fe,null):n.texImage2D(ee,ie,ve,je,de,0,ge,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),le(v)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(U).__webglTexture,0,J(v)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(U).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function x(S,v,U){if(t.bindRenderbuffer(t.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let Q=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(U||le(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===gi?Q=t.DEPTH_COMPONENT32F:ee.type===mi&&(Q=t.DEPTH_COMPONENT24));const ie=J(v);le(v)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,Q,v.width,v.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,Q,v.width,v.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,v.width,v.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const Q=J(v);U&&le(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,v.width,v.height):le(v)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,S)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ee=0;ee<Q.length;ee++){const ie=Q[ee],ge=s.convert(ie.format,ie.colorSpace),fe=s.convert(ie.type),ve=O(ie.internalFormat,ge,fe,ie.colorSpace),Le=J(v);U&&le(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ve,v.width,v.height):le(v)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,ve,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ve,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function P(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),se(v.depthTexture,0);const Q=i.get(v.depthTexture).__webglTexture,ee=J(v);if(v.depthTexture.format===$i)le(v)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Fr)le(v)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function N(S){const v=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");P(v.__webglFramebuffer,S)}else if(U){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=t.createRenderbuffer(),x(v.__webglDepthbuffer[Q],S,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=t.createRenderbuffer(),x(v.__webglDepthbuffer,S,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(S,v,U){const Q=i.get(S);v!==void 0&&ze(Q.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&N(S)}function G(S){const v=S.texture,U=i.get(S),Q=i.get(v);S.addEventListener("dispose",R),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=v.version,a.memory.textures++);const ee=S.isWebGLCubeRenderTarget===!0,ie=S.isWebGLMultipleRenderTargets===!0,ge=b(S)||o;if(ee){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let ve=0;ve<v.mipmaps.length;ve++)U.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else U.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)U.__webglFramebuffer[fe]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const fe=S.texture;for(let ve=0,Le=fe.length;ve<Le;ve++){const je=i.get(fe[ve]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&le(S)===!1){const fe=ie?v:[v];U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ve=0;ve<fe.length;ve++){const Le=fe[ve];U.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ve]);const je=s.convert(Le.format,Le.colorSpace),de=s.convert(Le.type),ke=O(Le.internalFormat,je,de,Le.colorSpace,S.isXRRenderTarget===!0),Ce=J(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ke,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,U.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),x(U.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,v,ge);for(let fe=0;fe<6;fe++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)ze(U.__webglFramebuffer[fe][ve],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ze(U.__webglFramebuffer[fe],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);L(v,ge)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const fe=S.texture;for(let ve=0,Le=fe.length;ve<Le;ve++){const je=fe[ve],de=i.get(je);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),Xe(t.TEXTURE_2D,je,ge),ze(U.__webglFramebuffer,S,je,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),L(je,ge)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?fe=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,Q.__webglTexture),Xe(fe,v,ge),o&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)ze(U.__webglFramebuffer[ve],S,v,t.COLOR_ATTACHMENT0,fe,ve);else ze(U.__webglFramebuffer,S,v,t.COLOR_ATTACHMENT0,fe,0);L(v,ge)&&C(fe),n.unbindTexture()}S.depthBuffer&&N(S)}function oe(S){const v=b(S)||o,U=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,ee=U.length;Q<ee;Q++){const ie=U[Q];if(L(ie,v)){const ge=S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(ie).__webglTexture;n.bindTexture(ge,fe),C(ge),n.unbindTexture()}}}function re(S){if(o&&S.samples>0&&le(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],U=S.width,Q=S.height;let ee=t.COLOR_BUFFER_BIT;const ie=[],ge=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(S),ve=S.isWebGLMultipleRenderTargets===!0;if(ve)for(let Le=0;Le<v.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Le=0;Le<v.length;Le++){ie.push(t.COLOR_ATTACHMENT0+Le),S.depthBuffer&&ie.push(ge);const je=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(je===!1&&(S.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Le]),je===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),ve){const de=i.get(v[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,U,Q,0,0,U,Q,ee,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Le=0;Le<v.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Le]);const je=i.get(v[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function J(S){return Math.min(f,S.samples)}function le(S){const v=i.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ne(S){const v=a.render.frame;g.get(S)!==v&&(g.set(S,v),S.update())}function Me(S,v){const U=S.colorSpace,Q=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Rl||U!==ti&&U!==gn&&(it.getTransfer(U)===lt?o===!1?e.has("EXT_sRGB")===!0&&Q===Rn?(S.format=Rl,S.minFilter=mn,S.generateMipmaps=!1):v=Qh.sRGBToLinear(v):(Q!==Rn||ee!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.setTexture2D=se,this.setTexture2DArray=F,this.setTexture3D=X,this.setTextureCube=_e,this.rebindTextures=V,this.setupRenderTarget=G,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=le}function jy(t,e,n){const i=n.isWebGL2;function r(s,a=gn){let o;const l=it.getTransfer(a);if(s===yi)return t.UNSIGNED_BYTE;if(s===Xh)return t.UNSIGNED_SHORT_4_4_4_4;if(s===qh)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Pv)return t.BYTE;if(s===Lv)return t.SHORT;if(s===xc)return t.UNSIGNED_SHORT;if(s===Wh)return t.INT;if(s===mi)return t.UNSIGNED_INT;if(s===gi)return t.FLOAT;if(s===Ms)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Dv)return t.ALPHA;if(s===Rn)return t.RGBA;if(s===Iv)return t.LUMINANCE;if(s===Uv)return t.LUMINANCE_ALPHA;if(s===$i)return t.DEPTH_COMPONENT;if(s===Fr)return t.DEPTH_STENCIL;if(s===Rl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Nv)return t.RED;if(s===$h)return t.RED_INTEGER;if(s===Fv)return t.RG;if(s===Yh)return t.RG_INTEGER;if(s===jh)return t.RGBA_INTEGER;if(s===Co||s===Ro||s===Po||s===Lo)if(l===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ro)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fu||s===Ou||s===Bu||s===Hu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Fu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ou)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ov)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zu||s===ku)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===zu)return l===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ku)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vu||s===Gu||s===Wu||s===Xu||s===qu||s===$u||s===Yu||s===ju||s===Ku||s===Zu||s===Ju||s===Qu||s===ef||s===tf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Vu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$u)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ju)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ku)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ju)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ef)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tf)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Do||s===nf||s===rf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Do)return l===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bv||s===sf||s===af||s===of)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Do)return o.COMPRESSED_RED_RGTC1_EXT;if(s===sf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===af)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===of)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qi?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Ky extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _a extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Jy extends Zt{constructor(e,n,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:$i,u!==$i&&u!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$i&&(i=mi),i===void 0&&u===Fr&&(i=qi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Qy extends Wr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const _=n.getContextAttributes();let m=null,h=null;const A=[],y=[],b=new an;b.layers.enable(1),b.viewport=new ut;const w=new an;w.layers.enable(2),w.viewport=new ut;const L=[b,w],C=new Ky;C.layers.enable(1),C.layers.enable(2);let O=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let X=A[F];return X===void 0&&(X=new il,A[F]=X),X.getTargetRaySpace()},this.getControllerGrip=function(F){let X=A[F];return X===void 0&&(X=new il,A[F]=X),X.getGripSpace()},this.getHand=function(F){let X=A[F];return X===void 0&&(X=new il,A[F]=X),X.getHandSpace()};function T(F){const X=y.indexOf(F.inputSource);if(X===-1)return;const _e=A[X];_e!==void 0&&(_e.update(F.inputSource,F.frame,c||a),_e.dispatchEvent({type:F.type,data:F.inputSource}))}function k(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",R);for(let F=0;F<A.length;F++){const X=y[F];X!==null&&(y[F]=null,A[F].disconnect(X))}O=null,M=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",k),r.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:p}),h=new Ji(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let X=null,_e=null,xe=null;_.depth&&(xe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=_.stencil?Fr:$i,_e=_.stencil?qi:mi);const be={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(be),r.updateRenderState({layers:[d]}),h=new Ji(d.textureWidth,d.textureHeight,{format:Rn,type:yi,depthTexture:new Jy(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ye=e.properties.get(h);ye.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(F){for(let X=0;X<F.removed.length;X++){const _e=F.removed[X],xe=y.indexOf(_e);xe>=0&&(y[xe]=null,A[xe].disconnect(_e))}for(let X=0;X<F.added.length;X++){const _e=F.added[X];let xe=y.indexOf(_e);if(xe===-1){for(let ye=0;ye<A.length;ye++)if(ye>=y.length){y.push(_e),xe=ye;break}else if(y[ye]===null){y[ye]=_e,xe=ye;break}if(xe===-1)break}const be=A[xe];be&&be.connect(_e)}}const z=new H,D=new H;function W(F,X,_e){z.setFromMatrixPosition(X.matrixWorld),D.setFromMatrixPosition(_e.matrixWorld);const xe=z.distanceTo(D),be=X.projectionMatrix.elements,ye=_e.projectionMatrix.elements,Xe=be[14]/(be[10]-1),Fe=be[14]/(be[10]+1),Ne=(be[9]+1)/be[5],st=(be[9]-1)/be[5],ze=(be[8]-1)/be[0],x=(ye[8]+1)/ye[0],P=Xe*ze,N=Xe*x,V=xe/(-ze+x),G=V*-ze;X.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(G),F.translateZ(V),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const oe=Xe+V,re=Fe+V,J=P-G,le=N+(xe-G),ne=Ne*Fe/re*oe,Me=st*Fe/re*oe;F.projectionMatrix.makePerspective(J,le,ne,Me,oe,re),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function $(F,X){X===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(X.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;C.near=w.near=b.near=F.near,C.far=w.far=b.far=F.far,(O!==C.near||M!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,M=C.far);const X=F.parent,_e=C.cameras;$(C,X);for(let xe=0;xe<_e.length;xe++)$(_e[xe],X);_e.length===2?W(C,b,w):C.projectionMatrix.copy(b.projectionMatrix),Y(F,C,X)};function Y(F,X,_e){_e===null?F.matrix.copy(X.matrixWorld):(F.matrix.copy(_e.matrixWorld),F.matrix.invert(),F.matrix.multiply(X.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(X.projectionMatrix),F.projectionMatrixInverse.copy(X.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Pl*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let Z=null;function ae(F,X){if(u=X.getViewerPose(c||a),g=X,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let xe=!1;_e.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let be=0;be<_e.length;be++){const ye=_e[be];let Xe=null;if(p!==null)Xe=p.getViewport(ye);else{const Ne=f.getViewSubImage(d,ye);Xe=Ne.viewport,be===0&&(e.setRenderTargetTextures(h,Ne.colorTexture,d.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(h))}let Fe=L[be];Fe===void 0&&(Fe=new an,Fe.layers.enable(be),Fe.viewport=new ut,L[be]=Fe),Fe.matrix.fromArray(ye.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ye.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),be===0&&(C.matrix.copy(Fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(Fe)}}for(let _e=0;_e<A.length;_e++){const xe=y[_e],be=A[_e];xe!==null&&be!==void 0&&be.update(xe,X,c||a)}Z&&Z(F,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}const se=new up;se.setAnimationLoop(ae),this.setAnimationLoop=function(F){Z=F},this.dispose=function(){}}}function eE(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,op(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,A,y,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,A,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Kt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Kt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=e.get(h).envMap;if(A&&(m.envMap.value=A,m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const y=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*y,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,A,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const A=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tE(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,y){const b=y.program;i.uniformBlockBinding(A,b)}function c(A,y){let b=r[A.id];b===void 0&&(g(A),b=u(A),r[A.id]=b,A.addEventListener("dispose",m));const w=y.program;i.updateUBOMapping(A,w);const L=e.render.frame;s[A.id]!==L&&(d(A),s[A.id]=L)}function u(A){const y=f();A.__bindingPointIndex=y;const b=t.createBuffer(),w=A.__size,L=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,w,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,b),b}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const y=r[A.id],b=A.uniforms,w=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let L=0,C=b.length;L<C;L++){const O=b[L];if(p(O,L,w)===!0){const M=O.__offset,T=Array.isArray(O.value)?O.value:[O.value];let k=0;for(let R=0;R<T.length;R++){const z=T[R],D=_(z);typeof z=="number"?(O.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,M+k,O.__data)):z.isMatrix3?(O.__data[0]=z.elements[0],O.__data[1]=z.elements[1],O.__data[2]=z.elements[2],O.__data[3]=z.elements[0],O.__data[4]=z.elements[3],O.__data[5]=z.elements[4],O.__data[6]=z.elements[5],O.__data[7]=z.elements[0],O.__data[8]=z.elements[6],O.__data[9]=z.elements[7],O.__data[10]=z.elements[8],O.__data[11]=z.elements[0]):(z.toArray(O.__data,k),k+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,O.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(A,y,b){const w=A.value;if(b[y]===void 0){if(typeof w=="number")b[y]=w;else{const L=Array.isArray(w)?w:[w],C=[];for(let O=0;O<L.length;O++)C.push(L[O].clone());b[y]=C}return!0}else if(typeof w=="number"){if(b[y]!==w)return b[y]=w,!0}else{const L=Array.isArray(b[y])?b[y]:[b[y]],C=Array.isArray(w)?w:[w];for(let O=0;O<L.length;O++){const M=L[O];if(M.equals(C[O])===!1)return M.copy(C[O]),!0}}return!1}function g(A){const y=A.uniforms;let b=0;const w=16;let L=0;for(let C=0,O=y.length;C<O;C++){const M=y[C],T={boundary:0,storage:0},k=Array.isArray(M.value)?M.value:[M.value];for(let R=0,z=k.length;R<z;R++){const D=k[R],W=_(D);T.boundary+=W.boundary,T.storage+=W.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,C>0){L=b%w;const R=w-L;L!==0&&R-T.boundary<0&&(b+=w-L,M.__offset=b)}b+=T.storage}return L=b%w,L>0&&(b+=w-L),A.__size=b,A.__cache={},this}function _(A){const y={boundary:0,storage:0};return typeof A=="number"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function m(A){const y=A.target;y.removeEventListener("dispose",m);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const A in r)t.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class mp{constructor(e={}){const{canvas:n=Zv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=Si,this.toneMappingExposure=1;const y=this;let b=!1,w=0,L=0,C=null,O=-1,M=null;const T=new ut,k=new ut;let R=null;const z=new et(0);let D=0,W=n.width,$=n.height,Y=1,Z=null,ae=null;const se=new ut(0,0,W,$),F=new ut(0,0,W,$);let X=!1;const _e=new yc;let xe=!1,be=!1,ye=null;const Xe=new Et,Fe=new nt,Ne=new H,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return C===null?Y:1}let x=i;function P(E,B){for(let q=0;q<E.length;q++){const j=E[q],K=n.getContext(j,B);if(K!==null)return K}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_c}`),n.addEventListener("webglcontextlost",Ze,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",Se,!1),x===null){const B=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&B.shift(),x=P(B,E),x===null)throw P(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let N,V,G,oe,re,J,le,ne,Me,S,v,U,Q,ee,ie,ge,fe,ve,Le,je,de,ke,Ce,De;function Re(){N=new fS(x),V=new rS(x,N,e),N.init(V),ke=new jy(x,N,V),G=new $y(x,N,V),oe=new pS(x),re=new Iy,J=new Yy(x,N,G,re,V,ke,oe),le=new aS(y),ne=new uS(y),Me=new E0(x,V),Ce=new nS(x,N,Me,V),S=new dS(x,Me,oe,Ce),v=new vS(x,S,Me,oe),Le=new _S(x,V,J),ge=new sS(re),U=new Dy(y,le,ne,N,V,Ce,ge),Q=new eE(y,re),ee=new Ny,ie=new ky(N,V),ve=new tS(y,le,ne,G,v,d,l),fe=new qy(y,v,V),De=new tE(x,oe,V,G),je=new iS(x,N,oe,V),de=new hS(x,N,oe,V),oe.programs=U.programs,y.capabilities=V,y.extensions=N,y.properties=re,y.renderLists=ee,y.shadowMap=fe,y.state=G,y.info=oe}Re();const Te=new Qy(y,x);this.xr=Te,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const E=N.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=N.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(W,$,!1))},this.getSize=function(E){return E.set(W,$)},this.setSize=function(E,B,q=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,$=B,n.width=Math.floor(E*Y),n.height=Math.floor(B*Y),q===!0&&(n.style.width=E+"px",n.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(W*Y,$*Y).floor()},this.setDrawingBufferSize=function(E,B,q){W=E,$=B,Y=q,n.width=Math.floor(E*q),n.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,B,q,j){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,B,q,j),G.viewport(T.copy(se).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy(F)},this.setScissor=function(E,B,q,j){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,B,q,j),G.scissor(k.copy(F).multiplyScalar(Y).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(E){G.setScissorTest(X=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(E=!0,B=!0,q=!0){let j=0;if(E){let K=!1;if(C!==null){const Ee=C.texture.format;K=Ee===jh||Ee===Yh||Ee===$h}if(K){const Ee=C.texture.type,we=Ee===yi||Ee===mi||Ee===xc||Ee===qi||Ee===Xh||Ee===qh,Ue=ve.getClearColor(),Be=ve.getClearAlpha(),$e=Ue.r,Ve=Ue.g,Ge=Ue.b;we?(p[0]=$e,p[1]=Ve,p[2]=Ge,p[3]=Be,x.clearBufferuiv(x.COLOR,0,p)):(g[0]=$e,g[1]=Ve,g[2]=Ge,g[3]=Be,x.clearBufferiv(x.COLOR,0,g))}else j|=x.COLOR_BUFFER_BIT}B&&(j|=x.DEPTH_BUFFER_BIT),q&&(j|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ze,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),ee.dispose(),ie.dispose(),re.dispose(),le.dispose(),ne.dispose(),v.dispose(),Ce.dispose(),De.dispose(),U.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",dn),Te.removeEventListener("sessionend",at),ye&&(ye.dispose(),ye=null),Bt.stop()};function Ze(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=oe.autoReset,B=fe.enabled,q=fe.autoUpdate,j=fe.needsUpdate,K=fe.type;Re(),oe.autoReset=E,fe.enabled=B,fe.autoUpdate=q,fe.needsUpdate=j,fe.type=K}function Se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function he(E){const B=E.target;B.removeEventListener("dispose",he),te(B)}function te(E){pe(E),re.remove(E)}function pe(E){const B=re.get(E).programs;B!==void 0&&(B.forEach(function(q){U.releaseProgram(q)}),E.isShaderMaterial&&U.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,j,K,Ee){B===null&&(B=st);const we=K.isMesh&&K.matrixWorld.determinant()<0,Ue=gm(E,B,q,j,K);G.setMaterial(j,we);let Be=q.index,$e=1;if(j.wireframe===!0){if(Be=S.getWireframeAttribute(q),Be===void 0)return;$e=2}const Ve=q.drawRange,Ge=q.attributes.position;let gt=Ve.start*$e,en=(Ve.start+Ve.count)*$e;Ee!==null&&(gt=Math.max(gt,Ee.start*$e),en=Math.min(en,(Ee.start+Ee.count)*$e)),Be!==null?(gt=Math.max(gt,0),en=Math.min(en,Be.count)):Ge!=null&&(gt=Math.max(gt,0),en=Math.min(en,Ge.count));const wt=en-gt;if(wt<0||wt===1/0)return;Ce.setup(K,j,Ue,q,Be);let Gn,mt=je;if(Be!==null&&(Gn=Me.get(Be),mt=de,mt.setIndex(Gn)),K.isMesh)j.wireframe===!0?(G.setLineWidth(j.wireframeLinewidth*ze()),mt.setMode(x.LINES)):mt.setMode(x.TRIANGLES);else if(K.isLine){let Ke=j.linewidth;Ke===void 0&&(Ke=1),G.setLineWidth(Ke*ze()),K.isLineSegments?mt.setMode(x.LINES):K.isLineLoop?mt.setMode(x.LINE_LOOP):mt.setMode(x.LINE_STRIP)}else K.isPoints?mt.setMode(x.POINTS):K.isSprite&&mt.setMode(x.TRIANGLES);if(K.isInstancedMesh)mt.renderInstances(gt,wt,K.count);else if(q.isInstancedBufferGeometry){const Ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,mo=Math.min(q.instanceCount,Ke);mt.renderInstances(gt,wt,mo)}else mt.render(gt,wt)};function Ie(E,B,q){E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,ks(E,B,q),E.side=Ti,E.needsUpdate=!0,ks(E,B,q),E.side=on):ks(E,B,q)}this.compile=function(E,B,q=null){q===null&&(q=E),m=ie.get(q),m.init(),A.push(m),q.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),E!==q&&E.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(y._useLegacyLights);const j=new Set;return E.traverse(function(K){const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let we=0;we<Ee.length;we++){const Ue=Ee[we];Ie(Ue,q,K),j.add(Ue)}else Ie(Ee,q,K),j.add(Ee)}),A.pop(),m=null,j},this.compileAsync=function(E,B,q=null){const j=this.compile(E,B,q);return new Promise(K=>{function Ee(){if(j.forEach(function(we){re.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){K(E);return}setTimeout(Ee,10)}N.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let tt=null;function xt(E){tt&&tt(E)}function dn(){Bt.stop()}function at(){Bt.start()}const Bt=new up;Bt.setAnimationLoop(xt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(E){tt=E,Te.setAnimationLoop(E),E===null?Bt.stop():Bt.start()},Te.addEventListener("sessionstart",dn),Te.addEventListener("sessionend",at),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(B),B=Te.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,B,C),m=ie.get(E,A.length),m.init(),A.push(m),Xe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),_e.setFromProjectionMatrix(Xe),be=this.localClippingEnabled,xe=ge.init(this.clippingPlanes,be),_=ee.get(E,h.length),_.init(),h.push(_),In(E,B,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Z,ae),this.info.render.frame++,xe===!0&&ge.beginShadows();const q=m.state.shadowsArray;if(fe.render(q,E,B),xe===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(_,E),m.setupLights(y._useLegacyLights),B.isArrayCamera){const j=B.cameras;for(let K=0,Ee=j.length;K<Ee;K++){const we=j[K];Hc(_,E,we,we.viewport)}}else Hc(_,E,B);C!==null&&(J.updateMultisampleRenderTarget(C),J.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(y,E,B),Ce.resetDefaultState(),O=-1,M=null,A.pop(),A.length>0?m=A[A.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function In(E,B,q,j){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_e.intersectsSprite(E)){j&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Xe);const we=v.update(E),Ue=E.material;Ue.visible&&_.push(E,we,Ue,q,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_e.intersectsObject(E))){const we=v.update(E),Ue=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ne.copy(we.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(Xe)),Array.isArray(Ue)){const Be=we.groups;for(let $e=0,Ve=Be.length;$e<Ve;$e++){const Ge=Be[$e],gt=Ue[Ge.materialIndex];gt&&gt.visible&&_.push(E,we,gt,q,Ne.z,Ge)}}else Ue.visible&&_.push(E,we,Ue,q,Ne.z,null)}}const Ee=E.children;for(let we=0,Ue=Ee.length;we<Ue;we++)In(Ee[we],B,q,j)}function Hc(E,B,q,j){const K=E.opaque,Ee=E.transmissive,we=E.transparent;m.setupLightsView(q),xe===!0&&ge.setGlobalState(y.clippingPlanes,q),Ee.length>0&&mm(K,Ee,B,q),j&&G.viewport(T.copy(j)),K.length>0&&zs(K,B,q),Ee.length>0&&zs(Ee,B,q),we.length>0&&zs(we,B,q),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function mm(E,B,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Ee=V.isWebGL2;ye===null&&(ye=new Ji(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?Ms:yi,minFilter:xs,samples:Ee?4:0})),y.getDrawingBufferSize(Fe),Ee?ye.setSize(Fe.x,Fe.y):ye.setSize(Ll(Fe.x),Ll(Fe.y));const we=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(z),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();const Ue=y.toneMapping;y.toneMapping=Si,zs(E,q,j),J.updateMultisampleRenderTarget(ye),J.updateRenderTargetMipmap(ye);let Be=!1;for(let $e=0,Ve=B.length;$e<Ve;$e++){const Ge=B[$e],gt=Ge.object,en=Ge.geometry,wt=Ge.material,Gn=Ge.group;if(wt.side===on&&gt.layers.test(j.layers)){const mt=wt.side;wt.side=Kt,wt.needsUpdate=!0,zc(gt,q,j,en,wt,Gn),wt.side=mt,wt.needsUpdate=!0,Be=!0}}Be===!0&&(J.updateMultisampleRenderTarget(ye),J.updateRenderTargetMipmap(ye)),y.setRenderTarget(we),y.setClearColor(z,D),y.toneMapping=Ue}function zs(E,B,q){const j=B.isScene===!0?B.overrideMaterial:null;for(let K=0,Ee=E.length;K<Ee;K++){const we=E[K],Ue=we.object,Be=we.geometry,$e=j===null?we.material:j,Ve=we.group;Ue.layers.test(q.layers)&&zc(Ue,B,q,Be,$e,Ve)}}function zc(E,B,q,j,K,Ee){E.onBeforeRender(y,B,q,j,K,Ee),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(y,B,q,j,E,Ee),K.transparent===!0&&K.side===on&&K.forceSinglePass===!1?(K.side=Kt,K.needsUpdate=!0,y.renderBufferDirect(q,B,j,K,E,Ee),K.side=Ti,K.needsUpdate=!0,y.renderBufferDirect(q,B,j,K,E,Ee),K.side=on):y.renderBufferDirect(q,B,j,K,E,Ee),E.onAfterRender(y,B,q,j,K,Ee)}function ks(E,B,q){B.isScene!==!0&&(B=st);const j=re.get(E),K=m.state.lights,Ee=m.state.shadowsArray,we=K.state.version,Ue=U.getParameters(E,K.state,Ee,B,q),Be=U.getProgramCacheKey(Ue);let $e=j.programs;j.environment=E.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(E.isMeshStandardMaterial?ne:le).get(E.envMap||j.environment),$e===void 0&&(E.addEventListener("dispose",he),$e=new Map,j.programs=$e);let Ve=$e.get(Be);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===we)return Vc(E,Ue),Ve}else Ue.uniforms=U.getUniforms(E),E.onBuild(q,Ue,y),E.onBeforeCompile(Ue,y),Ve=U.acquireProgram(Ue,Be),$e.set(Be,Ve),j.uniforms=Ue.uniforms;const Ge=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=ge.uniform),Vc(E,Ue),j.needsLights=vm(E),j.lightsStateVersion=we,j.needsLights&&(Ge.ambientLightColor.value=K.state.ambient,Ge.lightProbe.value=K.state.probe,Ge.directionalLights.value=K.state.directional,Ge.directionalLightShadows.value=K.state.directionalShadow,Ge.spotLights.value=K.state.spot,Ge.spotLightShadows.value=K.state.spotShadow,Ge.rectAreaLights.value=K.state.rectArea,Ge.ltc_1.value=K.state.rectAreaLTC1,Ge.ltc_2.value=K.state.rectAreaLTC2,Ge.pointLights.value=K.state.point,Ge.pointLightShadows.value=K.state.pointShadow,Ge.hemisphereLights.value=K.state.hemi,Ge.directionalShadowMap.value=K.state.directionalShadowMap,Ge.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ge.spotShadowMap.value=K.state.spotShadowMap,Ge.spotLightMatrix.value=K.state.spotLightMatrix,Ge.spotLightMap.value=K.state.spotLightMap,Ge.pointShadowMap.value=K.state.pointShadowMap,Ge.pointShadowMatrix.value=K.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function kc(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Aa.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Vc(E,B){const q=re.get(E);q.outputColorSpace=B.outputColorSpace,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function gm(E,B,q,j,K){B.isScene!==!0&&(B=st),J.resetTextureUnits();const Ee=B.fog,we=j.isMeshStandardMaterial?B.environment:null,Ue=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ti,Be=(j.isMeshStandardMaterial?ne:le).get(j.envMap||we),$e=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ge=!!q.morphAttributes.position,gt=!!q.morphAttributes.normal,en=!!q.morphAttributes.color;let wt=Si;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(wt=y.toneMapping);const Gn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,mt=Gn!==void 0?Gn.length:0,Ke=re.get(j),mo=m.state.lights;if(xe===!0&&(be===!0||E!==M)){const tn=E===M&&j.id===O;ge.setState(j,E,tn)}let Mt=!1;j.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==mo.state.version||Ke.outputColorSpace!==Ue||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||Ke.envMap!==Be||j.fog===!0&&Ke.fog!==Ee||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ge.numPlanes||Ke.numIntersection!==ge.numIntersection)||Ke.vertexAlphas!==$e||Ke.vertexTangents!==Ve||Ke.morphTargets!==Ge||Ke.morphNormals!==gt||Ke.morphColors!==en||Ke.toneMapping!==wt||V.isWebGL2===!0&&Ke.morphTargetsCount!==mt)&&(Mt=!0):(Mt=!0,Ke.__version=j.version);let Ai=Ke.currentProgram;Mt===!0&&(Ai=ks(j,B,K));let Gc=!1,Yr=!1,go=!1;const Ht=Ai.getUniforms(),wi=Ke.uniforms;if(G.useProgram(Ai.program)&&(Gc=!0,Yr=!0,go=!0),j.id!==O&&(O=j.id,Yr=!0),Gc||M!==E){Ht.setValue(x,"projectionMatrix",E.projectionMatrix),Ht.setValue(x,"viewMatrix",E.matrixWorldInverse);const tn=Ht.map.cameraPosition;tn!==void 0&&tn.setValue(x,Ne.setFromMatrixPosition(E.matrixWorld)),V.logarithmicDepthBuffer&&Ht.setValue(x,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ht.setValue(x,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Yr=!0,go=!0)}if(K.isSkinnedMesh){Ht.setOptional(x,K,"bindMatrix"),Ht.setOptional(x,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(V.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Ht.setValue(x,"boneTexture",tn.boneTexture,J),Ht.setValue(x,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _o=q.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0&&V.isWebGL2===!0)&&Le.update(K,q,Ai),(Yr||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Ht.setValue(x,"receiveShadow",K.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(wi.envMap.value=Be,wi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Yr&&(Ht.setValue(x,"toneMappingExposure",y.toneMappingExposure),Ke.needsLights&&_m(wi,go),Ee&&j.fog===!0&&Q.refreshFogUniforms(wi,Ee),Q.refreshMaterialUniforms(wi,j,Y,$,ye),Aa.upload(x,kc(Ke),wi,J)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Aa.upload(x,kc(Ke),wi,J),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ht.setValue(x,"center",K.center),Ht.setValue(x,"modelViewMatrix",K.modelViewMatrix),Ht.setValue(x,"normalMatrix",K.normalMatrix),Ht.setValue(x,"modelMatrix",K.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const tn=j.uniformsGroups;for(let vo=0,xm=tn.length;vo<xm;vo++)if(V.isWebGL2){const Wc=tn[vo];De.update(Wc,Ai),De.bind(Wc,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function _m(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function vm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,B,q){re.get(E.texture).__webglTexture=B,re.get(E.depthTexture).__webglTexture=q;const j=re.get(E);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const q=re.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,q=0){C=E,w=B,L=q;let j=!0,K=null,Ee=!1,we=!1;if(E){const Be=re.get(E);Be.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(x.FRAMEBUFFER,null),j=!1):Be.__webglFramebuffer===void 0?J.setupRenderTarget(E):Be.__hasExternalTextures&&J.rebindTextures(E,re.get(E.texture).__webglTexture,re.get(E.depthTexture).__webglTexture);const $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(we=!0);const Ve=re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?K=Ve[B][q]:K=Ve[B],Ee=!0):V.isWebGL2&&E.samples>0&&J.useMultisampledRTT(E)===!1?K=re.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[q]:K=Ve,T.copy(E.viewport),k.copy(E.scissor),R=E.scissorTest}else T.copy(se).multiplyScalar(Y).floor(),k.copy(F).multiplyScalar(Y).floor(),R=X;if(G.bindFramebuffer(x.FRAMEBUFFER,K)&&V.drawBuffers&&j&&G.drawBuffers(E,K),G.viewport(T),G.scissor(k),G.setScissorTest(R),Ee){const Be=re.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+B,Be.__webglTexture,q)}else if(we){const Be=re.get(E.texture),$e=B||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Be.__webglTexture,q||0,$e)}O=-1},this.readRenderTargetPixels=function(E,B,q,j,K,Ee,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){G.bindFramebuffer(x.FRAMEBUFFER,Ue);try{const Be=E.texture,$e=Be.format,Ve=Be.type;if($e!==Rn&&ke.convert($e)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===Ms&&(N.has("EXT_color_buffer_half_float")||V.isWebGL2&&N.has("EXT_color_buffer_float"));if(Ve!==yi&&ke.convert(Ve)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===gi&&(V.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-j&&q>=0&&q<=E.height-K&&x.readPixels(B,q,j,K,ke.convert($e),ke.convert(Ve),Ee)}finally{const Be=C!==null?re.get(C).__webglFramebuffer:null;G.bindFramebuffer(x.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(E,B,q=0){const j=Math.pow(2,-q),K=Math.floor(B.image.width*j),Ee=Math.floor(B.image.height*j);J.setTexture2D(B,0),x.copyTexSubImage2D(x.TEXTURE_2D,q,0,0,E.x,E.y,K,Ee),G.unbindTexture()},this.copyTextureToTexture=function(E,B,q,j=0){const K=B.image.width,Ee=B.image.height,we=ke.convert(q.format),Ue=ke.convert(q.type);J.setTexture2D(q,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,q.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,j,E.x,E.y,K,Ee,we,Ue,B.image.data):B.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,j,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,we,B.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,j,E.x,E.y,we,Ue,B.image),j===0&&q.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(E,B,q,j,K=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Ue=E.max.z-E.min.z+1,Be=ke.convert(j.format),$e=ke.convert(j.type);let Ve;if(j.isData3DTexture)J.setTexture3D(j,0),Ve=x.TEXTURE_3D;else if(j.isDataArrayTexture)J.setTexture2DArray(j,0),Ve=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,j.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,j.unpackAlignment);const Ge=x.getParameter(x.UNPACK_ROW_LENGTH),gt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),en=x.getParameter(x.UNPACK_SKIP_PIXELS),wt=x.getParameter(x.UNPACK_SKIP_ROWS),Gn=x.getParameter(x.UNPACK_SKIP_IMAGES),mt=q.isCompressedTexture?q.mipmaps[0]:q.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,mt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,mt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,E.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,E.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,E.min.z),q.isDataTexture||q.isData3DTexture?x.texSubImage3D(Ve,K,B.x,B.y,B.z,Ee,we,Ue,Be,$e,mt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(Ve,K,B.x,B.y,B.z,Ee,we,Ue,Be,mt.data)):x.texSubImage3D(Ve,K,B.x,B.y,B.z,Ee,we,Ue,Be,$e,mt),x.pixelStorei(x.UNPACK_ROW_LENGTH,Ge),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,gt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,en),x.pixelStorei(x.UNPACK_SKIP_ROWS,wt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Gn),K===0&&j.generateMipmaps&&x.generateMipmap(Ve),G.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),G.unbindTexture()},this.resetState=function(){w=0,L=0,C=null,G.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Mc?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===uo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?Yi:Kh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yi?Lt:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nE extends mp{}nE.prototype.isWebGL1Renderer=!0;class iE extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class va extends Us{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new et(16777215),this.specular=new et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Kf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class rE{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const sE=new rE;class bc{constructor(e){this.manager=e!==void 0?e:sE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bc.DEFAULT_MATERIAL_NAME="__DEFAULT";class aE extends bc{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Kf.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Ss("img");function l(){u(),Kf.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class oE extends bc{constructor(e){super(e)}load(e,n,i,r){const s=new Zt,a=new aE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class lE extends Jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const rl=new Et,Zf=new H,Jf=new H;class cE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Zf.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zf),Jf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jf),n.updateMatrixWorld(),rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qf=new Et,ns=new H,sl=new H;class uE extends cE{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ns.setFromMatrixPosition(e.matrixWorld),i.position.copy(ns),sl.copy(i.position),sl.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(sl),i.updateMatrixWorld(),r.makeTranslation(-ns.x,-ns.y,-ns.z),Qf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qf)}}class fE extends lE{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new uE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);const dE="/app2/img/back/opening.jpg",gp=t=>(lc("data-v-6ec629c9"),t=t(),cc(),t),hE={class:"background"},pE=gp(()=>Oe("div",{class:"title"}," Adventure In Dungeon ",-1)),mE=gp(()=>Oe("div",{class:"btn-1",id:"btn-a"},null,-1)),gE={class:"btn-1",id:"btn-b"},_E=un({__name:"Opening",emits:["updateStatus"],setup(t,{emit:e}){H_(s=>({10055250:n.value}));const n=Je("url("+dE+")"),i=e;function r(){i("updateStatus","Normal")}return(s,a)=>(ht(),_t("div",hE,[pE,mE,Oe("div",gE,[Oe("button",{onClick:a[0]||(a[0]=o=>r())},"NEW GAME")])]))}}),Sn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},vE=Sn(_E,[["__scopeId","data-v-6ec629c9"]]),ue={MapWidth:100,MapHeight:100,MapWall:0,MapRoom:1,MapRoad:2,SetDoorUp:11,SetDoorUnder:12,SetDoorLeft:13,SetDoorRight:14,roomMinHeight:5,roomMaxHeight:15,roomMinWidth:5,roomMaxWidth:15,RoomCountMin:10,RoomCountMax:20,BlockSize:10,BlockHeight:15,meetPointCount:2,MiniHeight:300,MiniWallColor:"#02040F",MiniRoomColor:"#C2B8B2",MiniMoveColor:"#197BBD",MiniPlayerColor:"#CBEF43"},xE="/app2/img/icon/playerPosition.png",ME=un({__name:"Map",props:{MapData:Array,playerPosition:H},setup(t){const e=t,n=Je(),i=new Image;i.src=xE;let r=null;const s=()=>{var l;if(e.MapData.length==0||!n.value)return;const o=(l=n.value)==null?void 0:l.getContext("2d");if(o){n.value.height=ue.MiniHeight;for(let c=0;c<e.MapData.length;c++)for(let u=0;u<e.MapData[c].length;u++){switch(e.MapData[c][u]){case 0:o.fillStyle=ue.MiniWallColor;break;case 1:case 2:o.fillStyle=ue.MiniRoomColor;break}o.fillRect(u*3,c*3,3,3)}}},a=()=>{var l;const o=(l=n.value)==null?void 0:l.getContext("2d");o&&e.playerPosition&&(r&&(o.fillStyle=ue.MiniMoveColor,o.fillRect(Math.floor(r.x/ue.BlockSize-1)*3,Math.floor(r.z/ue.BlockSize-1)*3,ue.BlockSize,ue.BlockSize)),o.drawImage(i,Math.floor(e.playerPosition.x/ue.BlockSize-1)*3,Math.floor(e.playerPosition.z/ue.BlockSize-1)*3,ue.BlockSize,ue.BlockSize),r=e.playerPosition.clone())};return Ot(()=>e.MapData,()=>{Qa(s)},{immediate:!0,deep:!0}),Ot(()=>e.playerPosition,()=>{a()},{immediate:!0,deep:!0}),(o,l)=>(ht(),_t("canvas",{ref_key:"MapUI",ref:n},null,512))}}),SE=Sn(ME,[["__scopeId","data-v-71e869a5"]]),yt=Array(ue.MapHeight).fill(ue.MapWall).map(()=>Array(ue.MapWidth).fill(ue.MapWall)),ka=Array(ue.MapHeight).fill(0).map(()=>Array(ue.MapWidth).fill(0)),Va={X:0,Y:0};function yE(){let t=[],e=Tn(ue.RoomCountMin,ue.RoomCountMax),n=new Array(ue.meetPointCount).fill(0),i=new Array(ue.meetPointCount).fill(0);for(let r=0;r<n.length;r++)n[r]=Tn(ue.MapWidth/4,ue.MapWidth*3/4),i[r]=Tn(ue.MapHeight/4,ue.MapHeight*3/4),yt[i[r]][n[r]]=ue.MapRoad;for(let r=0;r<e;r++){const s={Height:Tn(ue.roomMinHeight,ue.roomMaxHeight),Width:Tn(ue.roomMinWidth,ue.roomMaxWidth),PointX:Tn(2,ue.MapWidth-ue.roomMaxWidth-2),PointY:Tn(2,ue.MapHeight-ue.roomMaxHeight-2),Overlap:!1};s.Overlap=EE(s.Height,s.Width,s.PointX,s.PointY),console.log("Room",s.Height,s.Width,s.PointX,s.PointY,s.Overlap),t.push(s)}for(let r=0;r<e;r++)if(t[r].Overlap==!1){let s=Tn(t[r].PointX,t[r].PointX+t[r].Width),a=Tn(t[r].PointY,t[r].PointY+t[r].Height);r==0&&(Va.X=s,Va.Y=a),bE(s,a,n[Tn(0,n.length-1)],i[Tn(0,i.length-1)])}}function EE(t,e,n,i){let r=!1;for(let s=0;s<t;s++)for(let a=0;a<e;a++)yt[i+s][n+a]==ue.MapRoom?r=!0:yt[i+s][n+a]=ue.MapRoom;return r}function bE(t,e,n,i){console.log("Road",t,e,n,i);let r=t>n,s=e<=i,a=!0;if(Math.floor(Math.random()*2)==0){for(;t!=n;)o(1);for(;e!=i;)o(2)}else{for(;e!=i;)o(2);for(;t!=n;)o(1)}function o(l){yt[e][t]==ue.MapWall&&(yt[e][t]=ue.MapRoad,a&&(l==1?yt[e+1][t]==ue.MapWall&&yt[e-1][t]==ue.MapWall&&(ka[e][t]=r?ue.SetDoorRight:ue.SetDoorLeft,a=!1):yt[e][t+1]==ue.MapWall&&yt[e][t-1]==ue.MapWall&&(ka[e][t]=s?ue.SetDoorUp:ue.SetDoorUnder,a=!1))),l==1?t=r?t-1:t+1:e=s?e+1:e-1}}const Tn=(t,e)=>Math.floor(Math.random()*(e-t)+t),TE="/app2/img/back/wall01.jpg",AE="/app2/img/back/floor01.jpg",wE="/app2/img/back/ceil01.png",CE="/app2/img/back/door01.jpg",RE=un({__name:"Dungeon",props:{showUIstatus:Boolean},emits:["updatePosition"],setup(t,{emit:e}){const n=t,i=Je(null);let r=new iE,s=new an(75,window.innerWidth/window.innerHeight,.1,1e3),a=new mp,o,l=new H,c=0;const u=Je(new H),f=e,d=h=>{f("updatePosition",h)};ws(()=>{yE(),console.log(yt),console.log(ka),p(),g(),window.addEventListener("keydown",_);const h=function(){requestAnimationFrame(h),a.render(r,s)};h(),m()});function p(){a.setSize(window.innerWidth,window.innerHeight),i.value.appendChild(a.domElement),u.value=new H(ue.BlockSize*Va.X,5,ue.BlockSize*Va.Y),d(u.value),l.copy(u.value),s.position.copy(u.value);const h={point:16512459};o=new fE(h.point,15,150,1),o.position.copy(u.value),r.add(o)}function g(){const h=new oE,A=new ys(ue.BlockSize,ue.BlockHeight),y=h.load(TE),b=new va({map:y,side:on,bumpMap:y,bumpScale:.2}),w=h.load(CE),L=new va({map:w,side:on,bumpMap:w,bumpScale:.2}),C=new ys(ue.BlockSize,ue.BlockSize),O=h.load(AE),M=new va({map:O,side:on,bumpMap:O,bumpScale:.2}),T=h.load(wE);new va({map:T,side:on,bumpMap:T,bumpScale:.2});function k(R,z){return R>=0&&R<yt.length&&z>=0&&z<yt[0].length&&yt[R][z]==ue.MapWall}for(let R=0;R<yt.length;R++)for(let z=0;z<yt[R].length;z++)if(yt[R][z]==ue.MapRoom||yt[R][z]==ue.MapRoad){const D=new $t(C,M);if(D.position.set(ue.BlockSize*z,0,ue.BlockSize*R),D.rotation.x=90*Math.PI/180,r.add(D),k(R-1,z)){const $=new $t(A,b);$.position.set(ue.BlockSize*z,ue.BlockHeight/2,ue.BlockSize*(R-.5)),r.add($)}if(k(R+1,z)){const $=new $t(A,b);$.position.set(ue.BlockSize*z,ue.BlockHeight/2,ue.BlockSize*(R+.5)),r.add($)}if(k(R,z-1)){const $=new $t(A,b);$.position.set(ue.BlockSize*(z-.5),ue.BlockHeight/2,ue.BlockSize*R),$.rotation.y=90*Math.PI/180,r.add($)}if(k(R,z+1)){const $=new $t(A,b);$.position.set(ue.BlockSize*(z+.5),ue.BlockHeight/2,ue.BlockSize*R),$.rotation.y=90*Math.PI/180,r.add($)}const W=new $t(A,L);switch(ka[R][z]){case ue.SetDoorUp:(k(R,z+1)&&k(R,z-1)||k(R-1,z+1)&&k(R-1,z-1))&&(W.position.set(ue.BlockSize*z,ue.BlockHeight/2,ue.BlockSize*(R-.5)),r.add(W));break;case ue.SetDoorUnder:(k(R,z+1)&&k(R,z-1)||k(R+1,z+1)&&k(R+1,z-1))&&(W.position.set(ue.BlockSize*z,ue.BlockHeight/2,ue.BlockSize*(R+.5)),r.add(W));break;case ue.SetDoorLeft:(k(R+1,z)&&k(R-1,z)||k(R+1,z-1)&&k(R-1,z-1))&&(W.position.set(ue.BlockSize*(z-.5),ue.BlockHeight/2,ue.BlockSize*R),W.rotation.y=90*Math.PI/180,r.add(W));break;case ue.SetDoorRight:(k(R+1,z)&&k(R-1,z)||k(R+1,z+1)&&k(R-1,z+1))&&(W.position.set(ue.BlockSize*(z+.5),ue.BlockHeight/2,ue.BlockSize*R),W.rotation.y=90*Math.PI/180,r.add(W));break}}}const _=h=>{if(!n.showUIstatus||!s)return;const A=new H;s.getWorldDirection(A);let y=u.value.clone();switch(h.key){case"ArrowUp":y.add(A.multiplyScalar(ue.BlockSize)),b();break;case"ArrowDown":y.sub(A.multiplyScalar(ue.BlockSize)),b();break;case"ArrowLeft":y.x+=A.z*ue.BlockSize,y.z-=A.x*ue.BlockSize,b();break;case"ArrowRight":y.x-=A.z*ue.BlockSize,y.z+=A.x*ue.BlockSize,b();break;case"a":case"A":c+=Math.PI/2;break;case"d":case"D":c-=Math.PI/2;break}function b(){y.x=Math.round(y.x/ue.BlockSize)*ue.BlockSize,y.z=Math.round(y.z/ue.BlockSize)*ue.BlockSize}let w=Math.floor((y.x+5)/ue.BlockSize),L=Math.floor((y.z+5)/ue.BlockSize);console.log(y.x,w,y.z,L),yt[L][w]!==0&&(u.value.copy(y),d(y),l.copy(y))},m=()=>{s.position.equals(l)||(s.position.lerp(l,.05),o.position.copy(l)),s.rotation.y!==c&&(s.rotation.y+=(c-s.rotation.y)*.1),requestAnimationFrame(m)};return(h,A)=>(ht(),_t(dt,null,[ce(SE,{class:"MapUI",MapData:jt(yt),playerPosition:u.value},null,8,["MapData","playerPosition"]),Oe("div",{class:"dungeon",ref_key:"dungeon",ref:i},null,512)],64))}}),PE=Sn(RE,[["__scopeId","data-v-9bda3a7d"]]),LE={class:"CurrentUI"},DE=["src"],IE={class:"progress-bar"},UE=["value","max"],NE=["value","max"],FE=un({__name:"Current",props:{characters:Array},setup(t){return(e,n)=>(ht(),_t("div",LE,[(ht(!0),_t(dt,null,Da(t.characters,i=>(ht(),_t("div",{class:"character",key:i.cha_id},[Oe("img",{class:"chara-face",src:i.faceGraphicUrl},null,8,DE),Oe("div",IE,[Oe("progress",{class:"progress-hp",value:i.nowHP,max:i.totalStatus.HP},null,8,UE),Oe("progress",{class:"progress-mp",value:i.nowMP,max:i.totalStatus.MP},null,8,NE)])]))),128))]))}}),OE=Sn(FE,[["__scopeId","data-v-a92c04b3"]]),Fs=t=>(lc("data-v-ec349bd3"),t=t(),cc(),t),BE={key:0,class:"StatusUI"},HE={class:"char1"},zE={class:"margin-top2"},kE=Fs(()=>Oe("span",null,"HP",-1)),VE=["value","max"],GE={class:"nowhpmp"},WE={class:"margin-top1"},XE=Fs(()=>Oe("span",null,"MP",-1)),qE=["value","max"],$E={class:"nowhpmp"},YE={class:"margin-top2"},jE={class:"margin-left20"},KE={class:"margin-top1"},ZE={class:"margin-left20"},JE={class:"margin-top1"},QE={class:"margin-left20"},eb={class:"margin-top2"},tb=Fs(()=>Oe("span",null,"WEP",-1)),nb={class:"margin-left15"},ib={class:"margin-top1"},rb=Fs(()=>Oe("span",null,"ARM",-1)),sb={class:"margin-left15"},ab={class:"margin-top1"},ob=Fs(()=>Oe("span",null,"ACC",-1)),lb={class:"margin-left15"},cb=un({__name:"Status",props:{characters:Array,index:{type:Number,default:null}},setup(t){return(e,n)=>t.characters&&t.characters[t.index]?(ht(),_t("div",BE,[Oe("div",HE,[Oe("span",null,Pt(t.characters[t.index].name)+"  ",1),Oe("span",null,"LV "+Pt(t.characters[t.index].LV),1)]),Oe("div",zE,[kE,Oe("progress",{class:"progress-hp",value:t.characters[t.index].nowHP,max:t.characters[t.index].totalStatus.HP},null,8,VE),Oe("span",GE,Pt(t.characters[t.index].nowHP)+"/"+Pt(t.characters[t.index].totalStatus.HP),1)]),Oe("div",WE,[XE,Oe("progress",{class:"progress-mp",value:t.characters[t.index].nowMP,max:t.characters[t.index].totalStatus.MP},null,8,qE),Oe("span",$E,Pt(t.characters[t.index].nowMP)+"/"+Pt(t.characters[t.index].totalStatus.MP),1)]),Oe("div",YE,[Oe("span",null,"ATK  "+Pt(t.characters[t.index].totalStatus.ATK),1),Oe("span",jE,"MGC  "+Pt(t.characters[t.index].totalStatus.MGC),1)]),Oe("div",KE,[Oe("span",null,"DEF  "+Pt(t.characters[t.index].totalStatus.DEF),1),Oe("span",ZE,"MDF  "+Pt(t.characters[t.index].totalStatus.MDF),1)]),Oe("div",JE,[Oe("span",null,"DEX  "+Pt(t.characters[t.index].totalStatus.DEX),1),Oe("span",QE,"SPD  "+Pt(t.characters[t.index].totalStatus.SPD),1)]),Oe("div",eb,[tb,Oe("span",nb,Pt(t.characters[t.index].equipment.WEP.name),1)]),Oe("div",ib,[rb,Oe("span",sb,Pt(t.characters[t.index].equipment.ARM.name),1)]),Oe("div",ab,[ob,Oe("span",lb,Pt(t.characters[t.index].equipment.ACC.name),1)])])):Pr("",!0)}}),_p=Sn(cb,[["__scopeId","data-v-ec349bd3"]]);class ub{constructor(e){ft(this,"equipmentList");ft(this,"equipmentItem");this.equipmentList={},this.equipmentItem={};for(let n of e)this.addEquipment(n.eqp_id,n.type,n.name,n.equippedBy)}addEquipment(e,n,i,r){this.equipmentList[n]||(this.equipmentList[n]=[]);const s={eqp_id:e,type:n,name:i,equippedBy:r};this.equipmentList[n].push(s);const a=`${n}_${r===null?"null":r}`;this.equipmentItem[a]=s}removeEquipment(e){let n=this.equipmentList[e];if(!n||n.length===0)throw new Error(`装備 ${e} は存在しません。`);n.pop()}getEquipmentByType(e){return this.equipmentList[e]||[]}findEquipment(e,n){const i=`${e}_${n===null?"null":n}`;return this.equipmentItem[i]}equipEquipment(e,n){const i=`${e}_null`,r=this.equipmentItem[i];if(!r)throw new Error(`装備 ${e} は存在しません。`);r.equippedBy=n,this.equipmentItem[`${e}_${n}`]=r,delete this.equipmentItem[i]}unequipEquipment(e,n){const i=`${e}_${n}`,r=this.equipmentItem[i];if(!r)throw new Error(`装備 ${e} はキャラクター ${n} に装着されていません。`);r.equippedBy=null,this.equipmentItem[`${e}_null`]=r,delete this.equipmentItem[i]}}const fb=[{eqp_id:100,type:"WEP",name:"Sword",equippedBy:1},{eqp_id:300,type:"ARM",name:"Armor",equippedBy:1},{eqp_id:501,type:"ACC",name:"Bangle",equippedBy:1},{eqp_id:100,type:"WEP",name:"Sword",equippedBy:2},{eqp_id:350,type:"ARM",name:"Shield",equippedBy:2},{eqp_id:501,type:"ACC",name:"Bangle",equippedBy:2},{eqp_id:150,type:"WEP",name:"Wand",equippedBy:3},{eqp_id:400,type:"ARM",name:"Robe",equippedBy:3},{eqp_id:502,type:"ACC",name:"Ring",equippedBy:3},{eqp_id:200,type:"WEP",name:"Bow",equippedBy:4},{eqp_id:450,type:"ARM",name:"Cloth",equippedBy:4},{eqp_id:502,type:"ACC",name:"Ring",equippedBy:4},{eqp_id:101,type:"WEP",name:"x-Cariver",equippedBy:null},{eqp_id:151,type:"WEP",name:"WaWaWand",equippedBy:null},{eqp_id:201,type:"WEP",name:"Artemis",equippedBy:null},{eqp_id:301,type:"ARM",name:"12Armor",equippedBy:null},{eqp_id:351,type:"ARM",name:"TRXShield",equippedBy:null},{eqp_id:401,type:"ARM",name:"EngelRobe",equippedBy:null},{eqp_id:451,type:"ARM",name:"NinjaSuits",equippedBy:null},{eqp_id:510,type:"ACC",name:"Neckless",equippedBy:null},{eqp_id:511,type:"ACC",name:"DevilRing",equippedBy:null},{eqp_id:512,type:"ACC",name:"RiderBelt",equippedBy:null},{eqp_id:513,type:"ACC",name:"HolyBless",equippedBy:null}],Ln=typeof window<"u",vp=Ln&&"IntersectionObserver"in window,db=Ln&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function xp(t,e,n){const i=e.length-1;if(i<0)return t===void 0?n:t;for(let r=0;r<i;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[i]]===void 0?n:t[e[i]]}function Tc(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(i=>Tc(t[i],e[i]))}function Il(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),xp(t,e.split("."),n))}function is(t,e,n){if(e===!0)return t===void 0?n:t;if(e==null||typeof e=="boolean")return n;if(t!==Object(t)){if(typeof e!="function")return n;const r=e(t,n);return typeof r>"u"?n:r}if(typeof e=="string")return Il(t,e,n);if(Array.isArray(e))return xp(t,e,n);if(typeof e!="function")return n;const i=e(t,n);return typeof i>"u"?n:i}function Mp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,i)=>e+i)}function Yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Ul(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}const ed=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function al(t,e){return e.every(n=>t.hasOwnProperty(n))}function hb(t,e){const n={},i=new Set(Object.keys(t));for(const r of e)i.has(r)&&(n[r]=t[r]);return n}function pb(t,e){const n={...t};return e.forEach(i=>delete n[i]),n}function mb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function td(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function nd(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function gb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<t.length;)n.push(t.substr(i,e)),i+=e;return n}function _n(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in t)i[r]=t[r];for(const r in e){const s=t[r],a=e[r];if(Ul(s)&&Ul(a)){i[r]=_n(s,a,n);continue}if(Array.isArray(s)&&Array.isArray(a)&&n){i[r]=n(s,a);continue}i[r]=a}return i}function Sp(t){return t.map(e=>e.type===dt?Sp(e.children):e).flat()}function Ki(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Ki.cache.has(t))return Ki.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Ki.cache.set(t,e),e}Ki.cache=new Map;function yp(t){const e=er({}),n=Ae(t);return no(()=>{for(const i in n.value)e[i]=n.value[i]},{flush:"sync"}),sc(e)}function _b(t,e){return t.includes(e)}const id=()=>[Function,Array];function rd(t,e){return e="on"+zr(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function vb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${e?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...t.querySelectorAll(n)]}function xb(t,e,n){let i,r=t.indexOf(document.activeElement);const s=e==="next"?1:-1;do r+=s,i=t[r];while((!i||i.offsetParent==null||!((n==null?void 0:n(i))??!0))&&r<t.length&&r>=0);return i}function Ep(t,e){var i,r,s,a;const n=vb(t);if(!e)(t===document.activeElement||!t.contains(document.activeElement))&&((i=n[0])==null||i.focus());else if(e==="first")(r=n[0])==null||r.focus();else if(e==="last")(s=n.at(-1))==null||s.focus();else if(typeof e=="number")(a=n[e])==null||a.focus();else{const o=xb(n,e);o?o.focus():Ep(t,e==="next"?"first":"last")}}const xr=2.4,sd=.2126729,ad=.7151522,od=.072175,Mb=.55,Sb=.58,yb=.57,Eb=.62,xa=.03,ld=1.45,bb=5e-4,Tb=1.25,Ab=1.25,cd=.078,ud=12.82051282051282,Ma=.06,fd=.001;function dd(t,e){const n=(t.r/255)**xr,i=(t.g/255)**xr,r=(t.b/255)**xr,s=(e.r/255)**xr,a=(e.g/255)**xr,o=(e.b/255)**xr;let l=n*sd+i*ad+r*od,c=s*sd+a*ad+o*od;if(l<=xa&&(l+=(xa-l)**ld),c<=xa&&(c+=(xa-c)**ld),Math.abs(c-l)<bb)return 0;let u;if(c>l){const f=(c**Mb-l**Sb)*Tb;u=f<fd?0:f<cd?f-f*ud*Ma:f-Ma}else{const f=(c**Eb-l**yb)*Ab;u=f>-fd?0:f>-cd?f-f*ud*Ma:f+Ma}return u*100}function wb(t,e){e=Array.isArray(e)?e.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${e.at(-1)}'`:`'${e}'`}const Ga=.20689655172413793,Cb=t=>t>Ga**3?Math.cbrt(t):t/(3*Ga**2)+4/29,Rb=t=>t>Ga?t**3:3*Ga**2*(t-4/29);function bp(t){const e=Cb,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Tp(t){const e=Rb,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const Pb=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Lb=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,Db=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Ib=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Ap(t){const e=Array(3),n=Lb,i=Pb;for(let r=0;r<3;++r)e[r]=Math.round(mb(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Ac(t){let{r:e,g:n,b:i}=t;const r=[0,0,0],s=Ib,a=Db;e=s(e/255),n=s(n/255),i=s(i/255);for(let o=0;o<3;++o)r[o]=a[o][0]*e+a[o][1]*n+a[o][2]*i;return r}function Nl(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function Ub(t){return Nl(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const hd=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Nb={rgb:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),rgba:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),hsl:(t,e,n,i)=>pd({h:t,s:e,l:n,a:i}),hsla:(t,e,n,i)=>pd({h:t,s:e,l:n,a:i}),hsv:(t,e,n,i)=>Es({h:t,s:e,v:n,a:i}),hsva:(t,e,n,i)=>Es({h:t,s:e,v:n,a:i})};function Bn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&hd.test(t)){const{groups:e}=t.match(hd),{fn:n,values:i}=e,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return Nb[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),Ob(e)}else if(typeof t=="object"){if(al(t,["r","g","b"]))return t;if(al(t,["h","s","l"]))return Es(wp(t));if(al(t,["h","s","v"]))return Es(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Es(t){const{h:e,s:n,v:i,a:r}=t,s=o=>{const l=(o+e/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},a=[s(5),s(3),s(1)].map(o=>Math.round(o*255));return{r:a[0],g:a[1],b:a[2],a:r}}function pd(t){return Es(wp(t))}function wp(t){const{h:e,s:n,l:i,a:r}=t,s=i+n*Math.min(i,1-i),a=s===0?0:2-2*i/s;return{h:e,s:a,v:s,a:r}}function Sa(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function Fb(t){let{r:e,g:n,b:i,a:r}=t;return`#${[Sa(e),Sa(n),Sa(i),r!==void 0?Sa(Math.round(r*255)):""].join("")}`}function Ob(t){t=Bb(t);let[e,n,i,r]=gb(t,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:e,g:n,b:i,a:r}}function Bb(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=td(td(t,6),8,"F")),t}function Hb(t,e){const n=bp(Ac(t));return n[0]=n[0]+e*10,Ap(Tp(n))}function zb(t,e){const n=bp(Ac(t));return n[0]=n[0]-e*10,Ap(Tp(n))}function kb(t){const e=Bn(t);return Ac(e)[1]}function Cp(t){const e=Math.abs(dd(Bn(0),Bn(t)));return Math.abs(dd(Bn(16777215),Bn(t)))>Math.min(e,50)?"#fff":"#000"}function rt(t,e){return n=>Object.keys(t).reduce((i,r)=>{const a=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?i[r]={...a,default:n[r]}:i[r]=a,e&&!i[r].source&&(i[r].source=e),i},{})}const kn=rt({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),Br=Symbol.for("vuetify:defaults");function Vb(t){return Je(t)}function wc(){const t=xn(Br);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function Rp(t,e){const n=wc(),i=Je(t),r=Ae(()=>{if(jt(e==null?void 0:e.disabled))return n.value;const a=jt(e==null?void 0:e.scoped),o=jt(e==null?void 0:e.reset),l=jt(e==null?void 0:e.root);if(i.value==null&&!(a||o||l))return n.value;let c=_n(i.value,{prev:n.value});if(a)return c;if(o||l){const u=Number(o||1/0);for(let f=0;f<=u&&!(!c||!("prev"in c));f++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=_n(_n(c,{prev:c}),c[l])),c}return c.prev?_n(c.prev,c):c});return ii(Br,r),r}function Gb(t,e){var n,i;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((i=t.props)==null?void 0:i[Ki(e)])<"u"}function Wb(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:wc();const i=Vn("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=Ae(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),s=new Proxy(t,{get(l,c){var f,d,p,g;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=r.value)==null?void 0:f[c],u].filter(_=>_!=null):typeof c=="string"&&!Gb(i.vnode,c)?((d=r.value)==null?void 0:d[c])??((g=(p=n.value)==null?void 0:p.global)==null?void 0:g[c])??u:u}}),a=Dt();no(()=>{if(r.value){const l=Object.entries(r.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});a.value=l.length?Object.fromEntries(l):void 0}else a.value=void 0});function o(){const l=Xb(Br,i);ii(Br,Ae(()=>a.value?_n((l==null?void 0:l.value)??{},a.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:o}}function qr(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=rt(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(i){return hb(i,e)},t.props._as=String,t.setup=function(i,r){const s=wc();if(!s.value)return t._setup(i,r);const{props:a,provideSubDefaults:o}=Wb(i,i._as??t.name,s),l=t._setup(a,r);return o(),l}}return t}function Gt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?qr:un)(e)}function Pp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Gt()({name:n??zr(Mn(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...kn()},setup(i,r){let{slots:s}=r;return()=>{var a;return Gr(i.tag,{class:[t,i.class],style:i.style},(a=s.default)==null?void 0:a.call(s))}}})}function Vn(t,e){const n=oo();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function Os(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Vn(t).type;return Ki((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let Lp=0,wa=new WeakMap;function Cc(){const t=Vn("getUid");if(wa.has(t))return wa.get(t);{const e=Lp++;return wa.set(t,e),e}}Cc.reset=()=>{Lp=0,wa=new WeakMap};function Xb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vn("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function ri(t){const e=Vn("useRender");e.render=t}const qb=rt({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function fn(t,e,n){return Gt()({name:t,props:qb({mode:n,origin:e}),setup(i,r){let{slots:s}=r;const a={onBeforeEnter(o){i.origin&&(o.style.transformOrigin=i.origin)},onLeave(o){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:f}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${l}px`,o.style.left=`${c}px`,o.style.width=`${u}px`,o.style.height=`${f}px`}i.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(i.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:l,top:c,left:u,width:f,height:d}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=l||"",o.style.top=c||"",o.style.left=u||"",o.style.width=f||"",o.style.height=d||""}}};return()=>{const o=i.group?k_:Ps;return Gr(o,{name:i.disabled?"":t,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:a},s.default)}}})}function Dp(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Gt()({name:t,props:{mode:{type:String,default:n},disabled:Boolean},setup(i,r){let{slots:s}=r;return()=>Gr(Ps,{name:i.disabled?"":t,css:!i.disabled,...i.disabled?{}:e},s.default)}})}function Ip(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=Mn(`offset-${n}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[n]:a.style[n]}},onEnter(a){const o=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const l=`${a[i]}px`;a.style[n]="0",a.offsetHeight,a.style.transition=o.transition,t&&a._parent&&a._parent.classList.add(t),requestAnimationFrame(()=>{a.style[n]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[n]:a.style[n]},a.style.overflow="hidden",a.style[n]=`${a[i]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(a){t&&a._parent&&a._parent.classList.remove(t),s(a)}function s(a){const o=a._initialStyle[n];a.style.overflow=a._initialStyle.overflow,o!=null&&(a.style[n]=o),delete a._initialStyle}}fn("fab-transition","center center","out-in");fn("dialog-bottom-transition");fn("dialog-top-transition");fn("fade-transition");fn("scale-transition");fn("scroll-x-transition");fn("scroll-x-reverse-transition");fn("scroll-y-transition");fn("scroll-y-reverse-transition");fn("slide-x-transition");fn("slide-x-reverse-transition");fn("slide-y-transition");fn("slide-y-reverse-transition");const $b=Dp("expand-transition",Ip());Dp("expand-x-transition",Ip("",!0));const Yb=rt({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Fl=Gt(!1)({name:"VDefaultsProvider",props:Yb(),setup(t,e){let{slots:n}=e;const{defaults:i,disabled:r,reset:s,root:a,scoped:o}=sc(t);return Rp(i,{reset:s,root:a,scoped:o,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),Ol=Symbol.for("vuetify:list");function Up(){const t=xn(Ol,{hasPrepend:Dt(!1),updateHasPrepend:()=>null}),e={hasPrepend:Dt(!1),updateHasPrepend:n=>{n&&(e.hasPrepend.value=n)}};return ii(Ol,e),t}function Np(){return xn(Ol,null)}const jb={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},Kb={component:t=>Gr(Op,{...t,class:"mdi"})},Qn=[String,Function,Object,Array],Bl=Symbol.for("vuetify:icons"),po=rt({icon:{type:Qn},tag:{type:String,required:!0}},"icon"),md=Gt()({name:"VComponentIcon",props:po(),setup(t,e){let{slots:n}=e;return()=>{const i=t.icon;return ce(t.tag,null,{default:()=>{var r;return[t.icon?ce(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),Fp=qr({name:"VSvgIcon",inheritAttrs:!1,props:po(),setup(t,e){let{attrs:n}=e;return()=>ce(t.tag,Lr(n,{style:null}),{default:()=>[ce("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(i=>Array.isArray(i)?ce("path",{d:i[0],"fill-opacity":i[1]},null):ce("path",{d:i},null)):ce("path",{d:t.icon},null)])]})}});qr({name:"VLigatureIcon",props:po(),setup(t){return()=>ce(t.tag,null,{default:()=>[t.icon]})}});const Op=qr({name:"VClassIcon",props:po(),setup(t){return()=>ce(t.tag,{class:t.icon},null)}}),Zb={svg:{component:Fp},class:{component:Op}};function Jb(t){return _n({defaultSet:"mdi",sets:{...Zb,mdi:Kb},aliases:{...jb,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},t)}const Qb=t=>{const e=xn(Bl);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:Ae(()=>{var l;const i=jt(t);if(!i)return{component:md};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=e.aliases)==null?void 0:l[r.slice(1)])),!r)throw new Error(`Could not find aliased icon "${i}"`);if(Array.isArray(r))return{component:Fp,icon:r};if(typeof r!="string")return{component:md,icon:r};const s=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),a=s?r.slice(s.length+1):r;return{component:e.sets[s??e.defaultSet].component,icon:a}})}};function eT(t,e){let n;function i(){n=Fm(),n.run(()=>e.length?e(()=>{n==null||n.stop(),i()}):e())}Ot(t,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),Hm(()=>{n==null||n.stop()})}function Hl(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=Vn("useProxiedModel"),a=Je(t[e]!==void 0?t[e]:n),o=Ki(e),c=Ae(o!==e?()=>{var f,d,p,g;return t[e],!!(((f=s.vnode.props)!=null&&f.hasOwnProperty(e)||(d=s.vnode.props)!=null&&d.hasOwnProperty(o))&&((p=s.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${e}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${o}`)))}:()=>{var f,d;return t[e],!!((f=s.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=s.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});eT(()=>!c.value,()=>{Ot(()=>t[e],f=>{a.value=f})});const u=Ae({get(){const f=t[e];return i(c.value?f:a.value)},set(f){const d=r(f),p=We(c.value?t[e]:a.value);p===d||i(p)===f||(a.value=d,s==null||s.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:a.value}),u}const tT={open:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(n){const s=new Set;s.add(e);let a=r.get(e);for(;a!=null;)s.add(a),a=r.get(a);return s}else return i.delete(e),i},select:()=>null},Bp={open:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(n){let s=r.get(e);for(i.add(e);s!=null&&s!==e;)i.add(s),s=r.get(s);return i}else i.delete(e);return i},select:()=>null},nT={open:Bp.open,select:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(!n)return i;const s=[];let a=r.get(e);for(;a!=null;)s.push(a),a=r.get(a);return new Set(s)}},Rc=t=>{const e={select:n=>{let{id:i,value:r,selected:s}=n;if(i=We(i),t&&!r){const a=Array.from(s.entries()).reduce((o,l)=>{let[c,u]=l;return u==="on"?[...o,c]:o},[]);if(a.length===1&&a[0]===i)return s}return s.set(i,r?"on":"off"),s},in:(n,i,r)=>{let s=new Map;for(const a of n||[])s=e.select({id:a,value:!0,selected:new Map(s),children:i,parents:r});return s},out:n=>{const i=[];for(const[r,s]of n.entries())s==="on"&&i.push(r);return i}};return e},Hp=t=>{const e=Rc(t);return{select:i=>{let{selected:r,id:s,...a}=i;s=We(s);const o=r.has(s)?new Map([[s,r.get(s)]]):new Map;return e.select({...a,id:s,selected:o})},in:(i,r,s)=>{let a=new Map;return i!=null&&i.length&&(a=e.in(i.slice(0,1),r,s)),a},out:(i,r,s)=>e.out(i,r,s)}},iT=t=>{const e=Rc(t);return{select:i=>{let{id:r,selected:s,children:a,...o}=i;return r=We(r),a.has(r)?s:e.select({id:r,selected:s,children:a,...o})},in:e.in,out:e.out}},rT=t=>{const e=Hp(t);return{select:i=>{let{id:r,selected:s,children:a,...o}=i;return r=We(r),a.has(r)?s:e.select({id:r,selected:s,children:a,...o})},in:e.in,out:e.out}},sT=t=>{const e={select:n=>{let{id:i,value:r,selected:s,children:a,parents:o}=n;i=We(i);const l=new Map(s),c=[i];for(;c.length;){const f=c.shift();s.set(f,r?"on":"off"),a.has(f)&&c.push(...a.get(f))}let u=o.get(i);for(;u;){const f=a.get(u),d=f.every(g=>s.get(g)==="on"),p=f.every(g=>!s.has(g)||s.get(g)==="off");s.set(u,d?"on":p?"off":"indeterminate"),u=o.get(u)}return t&&!r&&Array.from(s.entries()).reduce((d,p)=>{let[g,_]=p;return _==="on"?[...d,g]:d},[]).length===0?l:s},in:(n,i,r)=>{let s=new Map;for(const a of n||[])s=e.select({id:a,value:!0,selected:new Map(s),children:i,parents:r});return s},out:(n,i)=>{const r=[];for(const[s,a]of n.entries())a==="on"&&!i.has(s)&&r.push(s);return r}};return e},bs=Symbol.for("vuetify:nested"),zp={id:Dt(),root:{register:()=>null,unregister:()=>null,parents:Je(new Map),children:Je(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:Je(new Set),selected:Je(new Map),selectedValues:Je([])}},aT=rt({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),oT=t=>{let e=!1;const n=Je(new Map),i=Je(new Map),r=Hl(t,"opened",t.opened,f=>new Set(f),f=>[...f.values()]),s=Ae(()=>{if(typeof t.selectStrategy=="object")return t.selectStrategy;switch(t.selectStrategy){case"single-leaf":return rT(t.mandatory);case"leaf":return iT(t.mandatory);case"independent":return Rc(t.mandatory);case"single-independent":return Hp(t.mandatory);case"classic":default:return sT(t.mandatory)}}),a=Ae(()=>{if(typeof t.openStrategy=="object")return t.openStrategy;switch(t.openStrategy){case"list":return nT;case"single":return tT;case"multiple":default:return Bp}}),o=Hl(t,"selected",t.selected,f=>s.value.in(f,n.value,i.value),f=>s.value.out(f,n.value,i.value));Cs(()=>{e=!0});function l(f){const d=[];let p=f;for(;p!=null;)d.unshift(p),p=i.value.get(p);return d}const c=Vn("nested"),u={id:Dt(),root:{opened:r,selected:o,selectedValues:Ae(()=>{const f=[];for(const[d,p]of o.value.entries())p==="on"&&f.push(d);return f}),register:(f,d,p)=>{d&&f!==d&&i.value.set(f,d),p&&n.value.set(f,[]),d!=null&&n.value.set(d,[...n.value.get(d)||[],f])},unregister:f=>{if(e)return;n.value.delete(f);const d=i.value.get(f);if(d){const p=n.value.get(d)??[];n.value.set(d,p.filter(g=>g!==f))}i.value.delete(f),r.value.delete(f)},open:(f,d,p)=>{c.emit("click:open",{id:f,value:d,path:l(f),event:p});const g=a.value.open({id:f,value:d,opened:new Set(r.value),children:n.value,parents:i.value,event:p});g&&(r.value=g)},openOnSelect:(f,d,p)=>{const g=a.value.select({id:f,value:d,selected:new Map(o.value),opened:new Set(r.value),children:n.value,parents:i.value,event:p});g&&(r.value=g)},select:(f,d,p)=>{c.emit("click:select",{id:f,value:d,path:l(f),event:p});const g=s.value.select({id:f,value:d,selected:new Map(o.value),children:n.value,parents:i.value,event:p});g&&(o.value=g),u.root.openOnSelect(f,d,p)},children:n,parents:i}};return ii(bs,u),u.root},kp=(t,e)=>{const n=xn(bs,zp),i=Symbol(Cc()),r=Ae(()=>t.value!==void 0?t.value:i),s={...n,id:r,open:(a,o)=>n.root.open(r.value,a,o),openOnSelect:(a,o)=>n.root.openOnSelect(r.value,a,o),isOpen:Ae(()=>n.root.opened.value.has(r.value)),parent:Ae(()=>n.root.parents.value.get(r.value)),select:(a,o)=>n.root.select(r.value,a,o),isSelected:Ae(()=>n.root.selected.value.get(We(r.value))==="on"),isIndeterminate:Ae(()=>n.root.selected.value.get(r.value)==="indeterminate"),isLeaf:Ae(()=>!n.root.children.value.get(r.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(r.value,n.id.value,e),Cs(()=>{!n.isGroupActivator&&n.root.unregister(r.value)}),e&&ii(bs,s),s},lT=()=>{const t=xn(bs,zp);ii(bs,{...t,isGroupActivator:!0})};function cT(){const t=Dt(!1);return ws(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:Ae(()=>t.value?void 0:{transition:"none !important"}),isBooted:nc(t)}}const $r=rt({tag:{type:String,default:"div"}},"tag"),uT=rt({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),ls=(t,e)=>{let{slots:n}=e;const{transition:i,disabled:r,...s}=t,{component:a=Ps,...o}=typeof i=="object"?i:{};return Gr(a,Lr(typeof i=="string"?{name:r?"":i}:o,s,{disabled:r}),n)},fT=qr({name:"VListGroupActivator",setup(t,e){let{slots:n}=e;return lT(),()=>{var i;return(i=n.default)==null?void 0:i.call(n)}}}),dT=rt({activeColor:String,baseColor:String,color:String,collapseIcon:{type:Qn,default:"$collapse"},expandIcon:{type:Qn,default:"$expand"},prependIcon:Qn,appendIcon:Qn,fluid:Boolean,subgroup:Boolean,title:String,value:null,...kn(),...$r()},"VListGroup"),gd=Gt()({name:"VListGroup",props:dT(),setup(t,e){let{slots:n}=e;const{isOpen:i,open:r,id:s}=kp(Nt(t,"value"),!0),a=Ae(()=>`v-list-group--id-${String(s.value)}`),o=Np(),{isBooted:l}=cT();function c(p){r(!i.value,p)}const u=Ae(()=>({onClick:c,class:"v-list-group__header",id:a.value})),f=Ae(()=>i.value?t.collapseIcon:t.expandIcon),d=Ae(()=>({VListItem:{active:i.value,activeColor:t.activeColor,baseColor:t.baseColor,color:t.color,prependIcon:t.prependIcon||t.subgroup&&f.value,appendIcon:t.appendIcon||!t.subgroup&&f.value,title:t.title,value:t.value}}));return ri(()=>ce(t.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":t.fluid,"v-list-group--subgroup":t.subgroup,"v-list-group--open":i.value},t.class],style:t.style},{default:()=>[n.activator&&ce(Fl,{defaults:d.value},{default:()=>[ce(fT,null,{default:()=>[n.activator({props:u.value,isOpen:i.value})]})]}),ce(ls,{transition:{component:$b},disabled:!l.value},{default:()=>{var p;return[xi(ce("div",{class:"v-list-group__items",role:"group","aria-labelledby":a.value},[(p=n.default)==null?void 0:p.call(n)]),[[Ar,i.value]])]}})]})),{}}}),hT=Pp("v-list-item-subtitle"),pT=Pp("v-list-item-title");function Pc(t){return yp(()=>{const e=[],n={};if(t.value.background)if(Nl(t.value.background)){if(n.backgroundColor=t.value.background,!t.value.text&&Ub(t.value.background)){const i=Bn(t.value.background);if(i.a==null||i.a===1){const r=Cp(i);n.color=r,n.caretColor=r}}}else e.push(`bg-${t.value.background}`);return t.value.text&&(Nl(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function Lc(t,e){const n=Ae(()=>({text:pt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=Pc(n);return{textColorClasses:i,textColorStyles:r}}function mT(t,e){const n=Ae(()=>({background:pt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=Pc(n);return{backgroundColorClasses:i,backgroundColorStyles:r}}const gT=["x-small","small","default","large","x-large"],Vp=rt({size:{type:[String,Number],default:"default"}},"size");function Gp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Os();return yp(()=>{let n,i;return _b(gT,t.size)?n=`${e}--size-${t.size}`:t.size&&(i={width:Yt(t.size),height:Yt(t.size)}),{sizeClasses:n,sizeStyles:i}})}const Wa=Symbol.for("vuetify:theme"),Bs=rt({theme:String},"theme");function _d(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function _T(){var i,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_d();const e=_d();if(!t)return{...e,isDisabled:!0};const n={};for(const[s,a]of Object.entries(t.themes??{})){const o=a.dark||s==="dark"?(i=e.themes)==null?void 0:i.dark:(r=e.themes)==null?void 0:r.light;n[s]=_n(o,a)}return _n(e,{...t,themes:n})}function vT(t){const e=_T(t),n=Je(e.defaultTheme),i=Je(e.themes),r=Ae(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const p=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const g of e.variations.colors){const _=p.colors[g];if(_)for(const m of["lighten","darken"]){const h=m==="lighten"?Hb:zb;for(const A of Mp(e.variations[m],1))p.colors[`${g}-${m}-${A}`]=Fb(h(Bn(_),A))}}for(const g of Object.keys(p.colors)){if(/^on-[a-z]/.test(g)||p.colors[`on-${g}`])continue;const _=`on-${g}`,m=Bn(p.colors[g]);p.colors[_]=Cp(m)}}return u}),s=Ae(()=>r.value[n.value]),a=Ae(()=>{const u=[];s.value.dark&&Ni(u,":root",["color-scheme: dark"]),Ni(u,":root",vd(s.value));for(const[g,_]of Object.entries(r.value))Ni(u,`.v-theme--${g}`,[`color-scheme: ${_.dark?"dark":"normal"}`,...vd(_)]);const f=[],d=[],p=new Set(Object.values(r.value).flatMap(g=>Object.keys(g.colors)));for(const g of p)/^on-[a-z]/.test(g)?Ni(d,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(Ni(f,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),Ni(d,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),Ni(d,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...f,...d),u.map((g,_)=>_===0?g:`    ${g}`).join("")});function o(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const p=f.push(o);Ln&&Ot(a,()=>{p.patch(o)})}else Ln?(f.addHeadObjs(Ae(o)),no(()=>f.updateDOM())):f.addHeadObjs(o());else{let g=function(){if(typeof document<"u"&&!p){const _=document.createElement("style");_.type="text/css",_.id="vuetify-theme-stylesheet",e.cspNonce&&_.setAttribute("nonce",e.cspNonce),p=_,document.head.appendChild(p)}p&&(p.innerHTML=a.value)};var d=g;let p=Ln?document.getElementById("vuetify-theme-stylesheet"):null;Ln?Ot(a,g,{immediate:!0}):g()}}const c=Ae(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:c,styles:a,global:{name:n,current:s}}}function Hs(t){Vn("provideTheme");const e=xn(Wa,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=Ae(()=>t.theme??e.name.value),i=Ae(()=>e.themes.value[n.value]),r=Ae(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,current:i,themeClasses:r};return ii(Wa,s),s}function Ni(t,e,n){t.push(`${e} {
`,...n.map(i=>`  ${i};
`),`}
`)}function vd(t){const e=t.dark?2:1,n=t.dark?1:2,i=[];for(const[r,s]of Object.entries(t.colors)){const a=Bn(s);i.push(`--v-theme-${r}: ${a.r},${a.g},${a.b}`),r.startsWith("on-")||i.push(`--v-theme-${r}-overlay-multiplier: ${kb(s)>.18?e:n}`)}for(const[r,s]of Object.entries(t.variables)){const a=typeof s=="string"&&s.startsWith("#")?Bn(s):void 0,o=a?`${a.r}, ${a.g}, ${a.b}`:void 0;i.push(`--v-${r}: ${o??s}`)}return i}const xT=rt({color:String,start:Boolean,end:Boolean,icon:Qn,...kn(),...Vp(),...$r({tag:"i"}),...Bs()},"VIcon"),zl=Gt()({name:"VIcon",props:xT(),setup(t,e){let{attrs:n,slots:i}=e;const r=Je(),{themeClasses:s}=Hs(t),{iconData:a}=Qb(Ae(()=>r.value||t.icon)),{sizeClasses:o}=Gp(t),{textColorClasses:l,textColorStyles:c}=Lc(Nt(t,"color"));return ri(()=>{var f,d;const u=(f=i.default)==null?void 0:f.call(i);return u&&(r.value=(d=Sp(u).filter(p=>p.type===Rs&&p.children&&typeof p.children=="string")[0])==null?void 0:d.children),ce(a.value.component,{tag:t.tag,icon:a.value.icon,class:["v-icon","notranslate",s.value,o.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[o.value?void 0:{fontSize:Yt(t.size),height:Yt(t.size),width:Yt(t.size)},c.value,t.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[u]})}),{}}}),Dc=rt({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ic(t){return{dimensionStyles:Ae(()=>({height:Yt(t.height),maxHeight:Yt(t.maxHeight),maxWidth:Yt(t.maxWidth),minHeight:Yt(t.minHeight),minWidth:Yt(t.minWidth),width:Yt(t.width)}))}}function MT(t){return{aspectStyles:Ae(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const Wp=rt({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...kn(),...Dc()},"VResponsive"),xd=Gt()({name:"VResponsive",props:Wp(),setup(t,e){let{slots:n}=e;const{aspectStyles:i}=MT(t),{dimensionStyles:r}=Ic(t);return ri(()=>{var s;return ce("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[r.value,t.style]},[ce("div",{class:"v-responsive__sizer",style:i.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&ce("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}});function ST(t,e){if(!vp)return;const n=e.modifiers||{},i=e.value,{handler:r,options:s}=typeof i=="object"?i:{handler:i,options:{}},a=new IntersectionObserver(function(){var f;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(f=t._observe)==null?void 0:f[e.instance.$.uid];if(!c)return;const u=o.some(d=>d.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&r(u,o,l),u&&n.once?Xp(t,e):c.init=!0},s);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:a},a.observe(t)}function Xp(t,e){var i;const n=(i=t._observe)==null?void 0:i[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const yT={mounted:ST,unmounted:Xp},ET=yT,bT=rt({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Wp(),...kn(),...uT()},"VImg"),TT=Gt()({name:"VImg",directives:{intersect:ET},props:bT(),emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:i}=e;const r=Vn("VImg"),s=Dt(""),a=Je(),o=Dt(t.eager?"loading":"idle"),l=Dt(),c=Dt(),u=Ae(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),f=Ae(()=>u.value.aspect||l.value/c.value||0);Ot(()=>t.src,()=>{d(o.value!=="idle")}),Ot(f,(M,T)=>{!M&&T&&a.value&&h(a.value)}),Mh(()=>d());function d(M){if(!(t.eager&&M)&&!(vp&&!M&&!t.eager)){if(o.value="loading",u.value.lazySrc){const T=new Image;T.src=u.value.lazySrc,h(T,null)}u.value.src&&Qa(()=>{var T;n("loadstart",((T=a.value)==null?void 0:T.currentSrc)||u.value.src),setTimeout(()=>{var k;if(!r.isUnmounted)if((k=a.value)!=null&&k.complete){if(a.value.naturalWidth||g(),o.value==="error")return;f.value||h(a.value,null),o.value==="loading"&&p()}else f.value||h(a.value),_()})})}}function p(){var M;r.isUnmounted||(_(),h(a.value),o.value="loaded",n("load",((M=a.value)==null?void 0:M.currentSrc)||u.value.src))}function g(){var M;r.isUnmounted||(o.value="error",n("error",((M=a.value)==null?void 0:M.currentSrc)||u.value.src))}function _(){const M=a.value;M&&(s.value=M.currentSrc||M.src)}let m=-1;Cs(()=>{clearTimeout(m)});function h(M){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(m),r.isUnmounted)return;const{naturalHeight:R,naturalWidth:z}=M;R||z?(l.value=z,c.value=R):!M.complete&&o.value==="loading"&&T!=null?m=window.setTimeout(k,T):(M.currentSrc.endsWith(".svg")||M.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,c.value=1)};k()}const A=Ae(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),y=()=>{var k;if(!u.value.src||o.value==="idle")return null;const M=ce("img",{class:["v-img__img",A.value],style:{objectPosition:t.position},src:u.value.src,srcset:u.value.srcset,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable,sizes:t.sizes,ref:a,onLoad:p,onError:g},null),T=(k=i.sources)==null?void 0:k.call(i);return ce(ls,{transition:t.transition,appear:!0},{default:()=>[xi(T?ce("picture",{class:"v-img__picture"},[T,M]):M,[[Ar,o.value==="loaded"]])]})},b=()=>ce(ls,{transition:t.transition},{default:()=>[u.value.lazySrc&&o.value!=="loaded"&&ce("img",{class:["v-img__img","v-img__img--preload",A.value],style:{objectPosition:t.position},src:u.value.lazySrc,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable},null)]}),w=()=>i.placeholder?ce(ls,{transition:t.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!i.error)&&ce("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,L=()=>i.error?ce(ls,{transition:t.transition,appear:!0},{default:()=>[o.value==="error"&&ce("div",{class:"v-img__error"},[i.error()])]}):null,C=()=>t.gradient?ce("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,O=Dt(!1);{const M=Ot(f,T=>{T&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),M())})}return ri(()=>{const M=xd.filterProps(t);return xi(ce(xd,Lr({class:["v-img",{"v-img--booting":!O.value},t.class],style:[{width:Yt(t.width==="auto"?l.value:t.width)},t.style]},M,{aspectRatio:f.value,"aria-label":t.alt,role:t.alt?"img":void 0}),{additional:()=>ce(dt,null,[ce(y,null,null),ce(b,null,null),ce(C,null,null),ce(w,null,null),ce(L,null,null)]),default:i.default}),[[hh("intersect"),{handler:d,options:t.options},null,{once:!0}]])}),{currentSrc:s,image:a,state:o,naturalWidth:l,naturalHeight:c}}}),AT=[null,"default","comfortable","compact"],Uc=rt({density:{type:String,default:"default",validator:t=>AT.includes(t)}},"density");function Nc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Os();return{densityClasses:Ae(()=>`${e}--density-${t.density}`)}}const Fc=rt({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Oc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Os();return{roundedClasses:Ae(()=>{const i=pt(t)?t.value:t.rounded,r=[];if(i===!0||i==="")r.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`rounded-${s}`);return r})}}const wT=["elevated","flat","tonal","outlined","text","plain"];function qp(t,e){return ce(dt,null,[t&&ce("span",{key:"overlay",class:`${e}__overlay`},null),ce("span",{key:"underlay",class:`${e}__underlay`},null)])}const Bc=rt({color:String,variant:{type:String,default:"elevated",validator:t=>wT.includes(t)}},"variant");function $p(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Os();const n=Ae(()=>{const{variant:s}=jt(t);return`${e}--variant-${s}`}),{colorClasses:i,colorStyles:r}=Pc(Ae(()=>{const{variant:s,color:a}=jt(t);return{[["elevated","flat"].includes(s)?"background":"text"]:a}}));return{colorClasses:i,colorStyles:r,variantClasses:n}}const CT=rt({start:Boolean,end:Boolean,icon:Qn,image:String,text:String,...kn(),...Uc(),...Fc(),...Vp(),...$r(),...Bs(),...Bc({variant:"flat"})},"VAvatar"),Md=Gt()({name:"VAvatar",props:CT(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=Hs(t),{colorClasses:r,colorStyles:s,variantClasses:a}=$p(t),{densityClasses:o}=Nc(t),{roundedClasses:l}=Oc(t),{sizeClasses:c,sizeStyles:u}=Gp(t);return ri(()=>ce(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},i.value,r.value,o.value,l.value,c.value,a.value,t.class],style:[s.value,u.value,t.style]},{default:()=>{var f;return[t.image?ce(TT,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?ce(zl,{key:"icon",icon:t.icon},null):((f=n.default)==null?void 0:f.call(n))??t.text,qp(!1,"v-avatar")]}})),{}}}),Yp=rt({border:[Boolean,Number,String]},"border");function jp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Os();return{borderClasses:Ae(()=>{const i=pt(t)?t.value:t.border,r=[];if(i===!0||i==="")r.push(`${e}--border`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`border-${s}`);return r})}}const Kp=rt({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Zp(t){return{elevationClasses:Ae(()=>{const n=pt(t)?t.value:t.elevation,i=[];return n==null||i.push(`elevation-${n}`),i})}}function RT(){const t=Vn("useRoute");return Ae(()=>{var e;return(e=t==null?void 0:t.proxy)==null?void 0:e.$route})}function PT(t,e){const n=Tg("RouterLink"),i=Ae(()=>!!(t.href||t.to)),r=Ae(()=>(i==null?void 0:i.value)||rd(e,"click")||rd(t,"click"));if(typeof n=="string")return{isLink:i,isClickable:r,href:Nt(t,"href")};const s=t.to?n.useLink(t):void 0,a=RT();return{isLink:i,isClickable:r,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&Ae(()=>{var o,l,c;return t.exact?a.value?((c=s.isExactActive)==null?void 0:c.value)&&Tc(s.route.value.query,a.value.query):(l=s.isExactActive)==null?void 0:l.value:(o=s.isActive)==null?void 0:o.value}),href:Ae(()=>t.to?s==null?void 0:s.route.value.href:t.href)}}const LT=rt({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),kl=Symbol("rippleStop"),DT=80;function Sd(t,e){t.style.transform=e,t.style.webkitTransform=e}function Vl(t){return t.constructor.name==="TouchEvent"}function Jp(t){return t.constructor.name==="KeyboardEvent"}const IT=function(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,r=0;if(!Jp(t)){const d=e.getBoundingClientRect(),p=Vl(t)?t.touches[t.touches.length-1]:t;i=p.clientX-d.left,r=p.clientY-d.top}let s=0,a=.3;(f=e._ripple)!=null&&f.circle?(a=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const o=`${(e.clientWidth-s*2)/2}px`,l=`${(e.clientHeight-s*2)/2}px`,c=n.center?o:`${i-s}px`,u=n.center?l:`${r-s}px`;return{radius:s,scale:a,x:c,y:u,centerX:o,centerY:l}},Xa={show(t,e){var p;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((p=e==null?void 0:e._ripple)!=null&&p.enabled))return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:s,scale:a,x:o,y:l,centerX:c,centerY:u}=IT(t,e,n),f=`${s*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,e.appendChild(i);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),Sd(r,`translate(${o}, ${l}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),Sd(r,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var s;if(!((s=t==null?void 0:t._ripple)!=null&&s.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===t&&t.removeChild(n.parentNode)},300)},r)}};function Qp(t){return typeof t>"u"||!!t}function Ts(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[kl])){if(t[kl]=!0,Vl(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Jp(t),n._ripple.class&&(e.class=n._ripple.class),Vl(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Xa.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},DT)}else Xa.show(t,n,e)}}function yd(t){t[kl]=!0}function ln(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{ln(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Xa.hide(e)}}function em(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let As=!1;function tm(t){!As&&(t.keyCode===ed.enter||t.keyCode===ed.space)&&(As=!0,Ts(t))}function nm(t){As=!1,ln(t)}function im(t){As&&(As=!1,ln(t))}function rm(t,e,n){const{value:i,modifiers:r}=e,s=Qp(i);if(s||Xa.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=s,t._ripple.centered=r.center,t._ripple.circle=r.circle,Ul(i)&&i.class&&(t._ripple.class=i.class),s&&!n){if(r.stop){t.addEventListener("touchstart",yd,{passive:!0}),t.addEventListener("mousedown",yd);return}t.addEventListener("touchstart",Ts,{passive:!0}),t.addEventListener("touchend",ln,{passive:!0}),t.addEventListener("touchmove",em,{passive:!0}),t.addEventListener("touchcancel",ln),t.addEventListener("mousedown",Ts),t.addEventListener("mouseup",ln),t.addEventListener("mouseleave",ln),t.addEventListener("keydown",tm),t.addEventListener("keyup",nm),t.addEventListener("blur",im),t.addEventListener("dragstart",ln,{passive:!0})}else!s&&n&&sm(t)}function sm(t){t.removeEventListener("mousedown",Ts),t.removeEventListener("touchstart",Ts),t.removeEventListener("touchend",ln),t.removeEventListener("touchmove",em),t.removeEventListener("touchcancel",ln),t.removeEventListener("mouseup",ln),t.removeEventListener("mouseleave",ln),t.removeEventListener("keydown",tm),t.removeEventListener("keyup",nm),t.removeEventListener("dragstart",ln),t.removeEventListener("blur",im)}function UT(t,e){rm(t,e,!1)}function NT(t){delete t._ripple,sm(t)}function FT(t,e){if(e.value===e.oldValue)return;const n=Qp(e.oldValue);rm(t,e,n)}const OT={mounted:UT,unmounted:NT,updated:FT},BT=rt({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Qn,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Qn,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:id(),onClickOnce:id(),...Yp(),...kn(),...Uc(),...Dc(),...Kp(),...Fc(),...LT(),...$r(),...Bs(),...Bc({variant:"text"})},"VListItem"),qa=Gt()({name:"VListItem",directives:{Ripple:OT},props:BT(),emits:{click:t=>!0},setup(t,e){let{attrs:n,slots:i,emit:r}=e;const s=PT(t,n),a=Ae(()=>t.value===void 0?s.href.value:t.value),{select:o,isSelected:l,isIndeterminate:c,isGroupActivator:u,root:f,parent:d,openOnSelect:p}=kp(a,!1),g=Np(),_=Ae(()=>{var Z;return t.active!==!1&&(t.active||((Z=s.isActive)==null?void 0:Z.value)||l.value)}),m=Ae(()=>t.link!==!1&&s.isLink.value),h=Ae(()=>!t.disabled&&t.link!==!1&&(t.link||s.isClickable.value||t.value!=null&&!!g)),A=Ae(()=>t.rounded||t.nav),y=Ae(()=>t.color??t.activeColor),b=Ae(()=>({color:_.value?y.value??t.baseColor:t.baseColor,variant:t.variant}));Ot(()=>{var Z;return(Z=s.isActive)==null?void 0:Z.value},Z=>{Z&&d.value!=null&&f.open(d.value,!0),Z&&p(Z)},{immediate:!0});const{themeClasses:w}=Hs(t),{borderClasses:L}=jp(t),{colorClasses:C,colorStyles:O,variantClasses:M}=$p(b),{densityClasses:T}=Nc(t),{dimensionStyles:k}=Ic(t),{elevationClasses:R}=Zp(t),{roundedClasses:z}=Oc(A),D=Ae(()=>t.lines?`v-list-item--${t.lines}-line`:void 0),W=Ae(()=>({isActive:_.value,select:o,isSelected:l.value,isIndeterminate:c.value}));function $(Z){var ae;r("click",Z),!(u||!h.value)&&((ae=s.navigate)==null||ae.call(s,Z),t.value!=null&&o(!l.value,Z))}function Y(Z){(Z.key==="Enter"||Z.key===" ")&&(Z.preventDefault(),$(Z))}return ri(()=>{const Z=m.value?"a":t.tag,ae=i.title||t.title!=null,se=i.subtitle||t.subtitle!=null,F=!!(t.appendAvatar||t.appendIcon),X=!!(F||i.append),_e=!!(t.prependAvatar||t.prependIcon),xe=!!(_e||i.prepend);return g==null||g.updateHasPrepend(xe),t.activeColor&&wb("active-color",["color","base-color"]),xi(ce(Z,{class:["v-list-item",{"v-list-item--active":_.value,"v-list-item--disabled":t.disabled,"v-list-item--link":h.value,"v-list-item--nav":t.nav,"v-list-item--prepend":!xe&&(g==null?void 0:g.hasPrepend.value),"v-list-item--slim":t.slim,[`${t.activeClass}`]:t.activeClass&&_.value},w.value,L.value,C.value,T.value,R.value,D.value,z.value,M.value,t.class],style:[O.value,k.value,t.style],href:s.href.value,tabindex:h.value?g?-2:0:void 0,onClick:$,onKeydown:h.value&&!m.value&&Y},{default:()=>{var be;return[qp(h.value||_.value,"v-list-item"),xe&&ce("div",{key:"prepend",class:"v-list-item__prepend"},[i.prepend?ce(Fl,{key:"prepend-defaults",disabled:!_e,defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var ye;return[(ye=i.prepend)==null?void 0:ye.call(i,W.value)]}}):ce(dt,null,[t.prependAvatar&&ce(Md,{key:"prepend-avatar",density:t.density,image:t.prependAvatar},null),t.prependIcon&&ce(zl,{key:"prepend-icon",density:t.density,icon:t.prependIcon},null)]),ce("div",{class:"v-list-item__spacer"},null)]),ce("div",{class:"v-list-item__content","data-no-activator":""},[ae&&ce(pT,{key:"title"},{default:()=>{var ye;return[((ye=i.title)==null?void 0:ye.call(i,{title:t.title}))??t.title]}}),se&&ce(hT,{key:"subtitle"},{default:()=>{var ye;return[((ye=i.subtitle)==null?void 0:ye.call(i,{subtitle:t.subtitle}))??t.subtitle]}}),(be=i.default)==null?void 0:be.call(i,W.value)]),X&&ce("div",{key:"append",class:"v-list-item__append"},[i.append?ce(Fl,{key:"append-defaults",disabled:!F,defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var ye;return[(ye=i.append)==null?void 0:ye.call(i,W.value)]}}):ce(dt,null,[t.appendIcon&&ce(zl,{key:"append-icon",density:t.density,icon:t.appendIcon},null),t.appendAvatar&&ce(Md,{key:"append-avatar",density:t.density,image:t.appendAvatar},null)]),ce("div",{class:"v-list-item__spacer"},null)])]}}),[[hh("ripple"),h.value&&t.ripple]])}),{}}}),HT=rt({color:String,inset:Boolean,sticky:Boolean,title:String,...kn(),...$r()},"VListSubheader"),zT=Gt()({name:"VListSubheader",props:HT(),setup(t,e){let{slots:n}=e;const{textColorClasses:i,textColorStyles:r}=Lc(Nt(t,"color"));return ri(()=>{const s=!!(n.default||t.title);return ce(t.tag,{class:["v-list-subheader",{"v-list-subheader--inset":t.inset,"v-list-subheader--sticky":t.sticky},i.value,t.class],style:[{textColorStyles:r},t.style]},{default:()=>{var a;return[s&&ce("div",{class:"v-list-subheader__text"},[((a=n.default)==null?void 0:a.call(n))??t.title])]}})}),{}}}),kT=rt({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...kn(),...Bs()},"VDivider"),VT=Gt()({name:"VDivider",props:kT(),setup(t,e){let{attrs:n}=e;const{themeClasses:i}=Hs(t),{textColorClasses:r,textColorStyles:s}=Lc(Nt(t,"color")),a=Ae(()=>{const o={};return t.length&&(o[t.vertical?"maxHeight":"maxWidth"]=Yt(t.length)),t.thickness&&(o[t.vertical?"borderRightWidth":"borderTopWidth"]=Yt(t.thickness)),o});return ri(()=>ce("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},i.value,r.value,t.class],style:[a.value,s.value,t.style],"aria-orientation":!n.role||n.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}}),GT=rt({items:Array,returnObject:Boolean},"VListChildren"),am=Gt()({name:"VListChildren",props:GT(),setup(t,e){let{slots:n}=e;return Up(),()=>{var i,r;return((i=n.default)==null?void 0:i.call(n))??((r=t.items)==null?void 0:r.map(s=>{var d,p;let{children:a,props:o,type:l,raw:c}=s;if(l==="divider")return((d=n.divider)==null?void 0:d.call(n,{props:o}))??ce(VT,o,null);if(l==="subheader")return((p=n.subheader)==null?void 0:p.call(n,{props:o}))??ce(zT,o,null);const u={subtitle:n.subtitle?g=>{var _;return(_=n.subtitle)==null?void 0:_.call(n,{...g,item:c})}:void 0,prepend:n.prepend?g=>{var _;return(_=n.prepend)==null?void 0:_.call(n,{...g,item:c})}:void 0,append:n.append?g=>{var _;return(_=n.append)==null?void 0:_.call(n,{...g,item:c})}:void 0,title:n.title?g=>{var _;return(_=n.title)==null?void 0:_.call(n,{...g,item:c})}:void 0},f=gd.filterProps(o);return a?ce(gd,Lr({value:o==null?void 0:o.value},f),{activator:g=>{let{props:_}=g;const m={...o,..._,value:t.returnObject?c:o.value};return n.header?n.header({props:m}):ce(qa,m,u)},default:()=>ce(am,{items:a},n)}):n.item?n.item({props:o}):ce(qa,Lr(o,{value:t.returnObject?c:o.value}),u)}))}}}),WT=rt({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Tc}},"list-items");function XT(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function qT(t,e){const n=is(e,t.itemType,"item"),i=XT(e)?e:is(e,t.itemTitle),r=is(e,t.itemValue,void 0),s=is(e,t.itemChildren),a=t.itemProps===!0?pb(e,["children"]):is(e,t.itemProps),o={title:i,value:r,...a};return{type:n,title:o.title,value:o.value,props:o,children:n==="item"&&s?om(t,s):void 0,raw:e}}function om(t,e){const n=[];for(const i of e)n.push(qT(t,i));return n}function $T(t){return{items:Ae(()=>om(t,t.items))}}const YT=rt({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...aT({selectStrategy:"single-leaf",openStrategy:"list"}),...Yp(),...kn(),...Uc(),...Dc(),...Kp(),itemType:{type:String,default:"type"},...WT(),...Fc(),...$r(),...Bs(),...Bc({variant:"text"})},"VList"),Ed=Gt()({name:"VList",props:YT(),emits:{"update:selected":t=>!0,"update:opened":t=>!0,"click:open":t=>!0,"click:select":t=>!0},setup(t,e){let{slots:n}=e;const{items:i}=$T(t),{themeClasses:r}=Hs(t),{backgroundColorClasses:s,backgroundColorStyles:a}=mT(Nt(t,"bgColor")),{borderClasses:o}=jp(t),{densityClasses:l}=Nc(t),{dimensionStyles:c}=Ic(t),{elevationClasses:u}=Zp(t),{roundedClasses:f}=Oc(t),{open:d,select:p}=oT(t),g=Ae(()=>t.lines?`v-list--${t.lines}-line`:void 0),_=Nt(t,"activeColor"),m=Nt(t,"baseColor"),h=Nt(t,"color");Up(),Rp({VListGroup:{activeColor:_,baseColor:m,color:h},VListItem:{activeClass:Nt(t,"activeClass"),activeColor:_,baseColor:m,color:h,density:Nt(t,"density"),disabled:Nt(t,"disabled"),lines:Nt(t,"lines"),nav:Nt(t,"nav"),slim:Nt(t,"slim"),variant:Nt(t,"variant")}});const A=Dt(!1),y=Je();function b(M){A.value=!0}function w(M){A.value=!1}function L(M){var T;!A.value&&!(M.relatedTarget&&((T=y.value)!=null&&T.contains(M.relatedTarget)))&&O()}function C(M){if(y.value){if(M.key==="ArrowDown")O("next");else if(M.key==="ArrowUp")O("prev");else if(M.key==="Home")O("first");else if(M.key==="End")O("last");else return;M.preventDefault()}}function O(M){if(y.value)return Ep(y.value,M)}return ri(()=>ce(t.tag,{ref:y,class:["v-list",{"v-list--disabled":t.disabled,"v-list--nav":t.nav},r.value,s.value,o.value,l.value,u.value,g.value,f.value,t.class],style:[a.value,c.value,t.style],tabindex:t.disabled||A.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:b,onFocusout:w,onFocus:L,onKeydown:C},{default:()=>[ce(am,{items:i.value,returnObject:t.returnObject},n)]})),{open:d,select:p,focus:O}}}),jT=t=>(lc("data-v-e4defab3"),t=t(),cc(),t),KT={key:0,class:"EquipmentUI"},ZT={key:0},JT=jT(()=>Oe("div",{class:"EquipmentStatus"},null,-1)),QT=un({__name:"Equipment",props:{index:{type:Number,default:null}},setup(t){const e=xn("party"),n=Je("WEP"),i=["WEP","ARM","ACC"];let r=Je(new ub(fb));console.log("equipmentBag",r);const s=a=>{n.value=a};return(a,o)=>jt(e).characters&&jt(e).characters[t.index]?(ht(),_t("div",KT,[ce(Ed,{class:"EquipmentTab"},{default:ss(()=>[(ht(),_t(dt,null,Da(i,l=>ce(qa,{key:l,onClick:c=>s(l),class:"EquipmentTabItem"},{default:ss(()=>[xl(Pt(l),1)]),_:2},1032,["onClick"])),64))]),_:1}),n.value?(ht(),_t("div",ZT,[ce(Ed,{class:"EquipmentList",density:"compact"},{default:ss(()=>[(ht(!0),_t(dt,null,Da(jt(r).equipmentList[n.value],l=>(ht(),Lh(qa,{key:l.eqp_id,onClick:c=>a.updateEquipment(0,l.eqp_id),class:"EquipmentItem"},{default:ss(()=>[xl(Pt(l.name),1)]),_:2},1032,["onClick"]))),128)),JT]),_:1})])):Pr("",!0)])):Pr("",!0)}}),eA=Sn(QT,[["__scopeId","data-v-e4defab3"]]),tA="/app2/icon/back.svg",nA=["src"],iA=un({__name:"IconBack",setup(t){const e=Je(tA);return(n,i)=>(ht(),_t("img",{class:"IconBack",src:e.value,alt:"Party"},null,8,nA))}}),Gl=Sn(iA,[["__scopeId","data-v-716c9cae"]]),rA="/app2/icon/next.svg",sA=["src"],aA=un({__name:"IconNext",setup(t){const e=Je(rA);return(n,i)=>(ht(),_t("img",{class:"IconNext",src:e.value,alt:"Party"},null,8,sA))}}),oA=Sn(aA,[["__scopeId","data-v-26b2588d"]]),lA={key:0,class:"CharacterUI"},cA={class:"Character"},uA=["src"],fA=un({__name:"Character",props:{characters:Array,index:{type:Number,default:null}},emits:["toggleParty"],setup(t,{emit:e}){const n=t,i=e,r=()=>{i("toggleParty")},s=Je(0);function a(){s.value=s.value==n.characters.length-1?0:s.value+1}function o(){s.value=s.value==0?n.characters.length-1:s.value-1}return Ot(()=>n.index,()=>{s.value=n.index}),(l,c)=>t.characters&&t.characters[s.value]?(ht(),_t("div",lA,[Oe("div",cA,[ce(Gl,{class:"IconCharaBack",onClick:o}),Oe("img",{src:t.characters[s.value].poseGraphicUrl,alt:"",class:"chara-image"},null,8,uA),ce(oA,{class:"IconCharaNext",onClick:a})]),ce(_p,{class:"StatusUI",characters:t.characters,index:s.value},null,8,["characters","index"]),ce(eA,{class:"EquipmentUI",characters:t.characters,index:s.value},null,8,["characters","index"]),ce(Gl,{class:"Back",onClick:r})])):Pr("",!0)}}),dA=Sn(fA,[["__scopeId","data-v-fb385382"]]),hA="/app2/icon/party.svg",pA=["src"],mA=un({__name:"IconParty",setup(t){const e=Je(hA);return(n,i)=>(ht(),_t("img",{class:"IconParty",src:e.value,alt:"Party"},null,8,pA))}}),gA=Sn(mA,[["__scopeId","data-v-fb74e94d"]]),_A={class:"partyUI"},vA=["onClick"],xA=["src"],MA=un({__name:"Party",props:{characters:Array},emits:["toggleUIup"],setup(t,{emit:e}){const n=Je(!1),i=Je(!1),r=e,s=()=>{r("toggleUIup",n.value),n.value=!n.value,i.value=!1},a=Je(null);function o(c){a.value=c,n.value=!1,i.value=!0}const l=()=>{i.value=!1,n.value=!0};return(c,u)=>(ht(),_t(dt,null,[xi(Oe("div",_A,[(ht(!0),_t(dt,null,Da(t.characters,(f,d)=>(ht(),_t("div",{key:f.cha_id,onClick:p=>o(d),class:"character-card"},[ce(_p,{class:"StatusUI",characters:t.characters,index:d},null,8,["characters","index"]),Oe("img",{src:f.poseGraphicUrl,alt:"",class:"chara-image"},null,8,xA)],8,vA))),128))],512),[[Ar,n.value]]),xi(Oe("div",null,[ce(dA,{characters:t.characters,index:a.value,onToggleParty:l},null,8,["characters","index"])],512),[[Ar,i.value]]),xi(ce(Gl,{class:"IconBack",onClick:s},null,512),[[Ar,n.value]]),ce(gA,{class:"IconParty",onClick:s})],64))}}),SA=Sn(MA,[["__scopeId","data-v-f5453792"]]);class yA{constructor(e,n){ft(this,"cha_id");ft(this,"name");ft(this,"class");ft(this,"faceGraphicUrl");ft(this,"poseGraphicUrl");ft(this,"LV");ft(this,"baseStatus");ft(this,"equipment");ft(this,"totalStatus");ft(this,"nowHP");ft(this,"nowMP");this.cha_id=e.cha_id,this.name=e.name,this.class=e.class,this.faceGraphicUrl=e.faceGraphicUrl,this.poseGraphicUrl=e.poseGraphicUrl,this.LV=e.LV,this.baseStatus={HP:e.HP,MP:e.MP,ATK:e.ATK,MGC:e.MGC,DEF:e.DEF,MDF:e.MDF,DEX:e.DEX,SPD:e.SPD},this.equipment={WEP:n.find(i=>i.name===e.equipment.WEP),ARM:n.find(i=>i.name===e.equipment.ARM),ACC:n.find(i=>i.name===e.equipment.ACC)},this.totalStatus=this.calculateTotalStatus(),this.nowHP=this.totalStatus.HP,this.nowMP=this.totalStatus.MP}changeEquipment(e,n){this.equipment[e]=n}calculateTotalStatus(){let e={...this.baseStatus};for(let n in this.equipment){let i=this.equipment[n];if(i)for(let r in i.status)e[r]&&(e[r]+=i.status[r])}return e}}class EA{constructor(e){ft(this,"eqp_id");ft(this,"type");ft(this,"name");ft(this,"status");this.eqp_id=e.eqp_id,this.type=e.type,this.name=e.name,this.status=e.status}}const bA=[{cha_id:1,name:"Ace",class:"Swordman",faceGraphicUrl:"img/character/chara1-face.png",poseGraphicUrl:"img/character/chara1.png",LV:10,HP:220,MP:80,ATK:70,MGC:30,DEF:50,MDF:40,DEX:60,SPD:50,equipment:{WEP:"Sword",ARM:"Armor",ACC:"Bangle"}},{cha_id:2,name:"Sophia",class:"Holy Warrior",faceGraphicUrl:"img/character/chara2-face.png",poseGraphicUrl:"img/character/chara2.png",LV:10,HP:250,MP:100,ATK:50,MGC:50,DEF:50,MDF:50,DEX:50,SPD:50,equipment:{WEP:"Sword",ARM:"Shield",ACC:"Bangle"}},{cha_id:3,name:"Nicole",class:"Priest",faceGraphicUrl:"img/character/chara3-face.png",poseGraphicUrl:"img/character/chara3.png",LV:10,HP:200,MP:150,ATK:40,MGC:70,DEF:40,MDF:60,DEX:40,SPD:40,equipment:{WEP:"Wand",ARM:"Robe",ACC:"Ring"}},{cha_id:4,name:"Ella",class:"Archer",faceGraphicUrl:"img/character/chara4-face.png",poseGraphicUrl:"img/character/chara4.png",LV:10,HP:180,MP:150,ATK:60,MGC:30,DEF:40,MDF:40,DEX:60,SPD:60,equipment:{WEP:"Bow",ARM:"Cloth",ACC:"Ring"}}],TA=[{eqp_id:100,type:"WEP",name:"Sword",status:{ATK:10}},{eqp_id:101,type:"WEP",name:"x-Cariver",status:{ATK:100}},{eqp_id:150,type:"WEP",name:"Wand",status:{MGC:10}},{eqp_id:151,type:"WEP",name:"WaWaWand",status:{MGC:100}},{eqp_id:200,type:"WEP",name:"Bow",status:{ATK:5,DEX:5}},{eqp_id:201,type:"WEP",name:"Artemis",status:{ATK:50,DEX:50}},{eqp_id:300,type:"ARM",name:"Armor",status:{DEF:5,MDF:5}},{eqp_id:301,type:"ARM",name:"12Armor",status:{DEF:50,MDF:50}},{eqp_id:350,type:"ARM",name:"Shield",status:{DEF:7,MDF:3}},{eqp_id:351,type:"ARM",name:"TRXShield",status:{DEF:70,MDF:30}},{eqp_id:400,type:"ARM",name:"Robe",status:{DEF:3,MDF:7}},{eqp_id:401,type:"ARM",name:"EngelRobe",status:{DEF:40,MDF:60}},{eqp_id:450,type:"ARM",name:"Cloth",status:{DEF:4,MDF:4}},{eqp_id:451,type:"ARM",name:"NinjaSuits",status:{DEF:30,MDF:30,DEX:30,SPD:10}},{eqp_id:501,type:"ACC",name:"Bangle",status:{ATK:5}},{eqp_id:502,type:"ACC",name:"Ring",status:{DEF:5}},{eqp_id:510,type:"ACC",name:"Neckless",status:{MDF:5}},{eqp_id:511,type:"ACC",name:"DevilRing",status:{ATK:50,MDF:-50}},{eqp_id:512,type:"ACC",name:"RiderBelt",status:{HP:100,ATK:30,DEF:30,MDF:30,DEX:30,SPD:10}},{eqp_id:513,type:"ACC",name:"HolyBless",status:{MP:100,MGC:50,DEF:20,MDF:50}}];class AA{constructor(e){ft(this,"characters");ft(this,"gold");ft(this,"location");ft(this,"home");ft(this,"map");let n=TA.map(i=>new EA(i));this.characters=bA.map(i=>new yA(i,n)),this.gold=e.gold,this.location=e.location,this.home=e.home,this.map=e.map}}const wA={class:"UI"},CA={key:0},RA={key:1},PA=un({__name:"App",setup(t){const e=Je("Opening"),n=l=>{e.value=l},i=Je(!0),r=l=>{i.value=l};new H;const s=l=>{};let a={gold:1e5,location:[570,180],home:[500,200],map:yt},o=Je(new AA(a));return ii("party",o),console.log(o),(l,c)=>(ht(),_t("div",wA,[e.value=="Opening"?(ht(),_t("div",CA,[ce(vE,{onUpdateStatus:n})])):Pr("",!0),e.value=="Normal"?(ht(),_t("div",RA,[xi(ce(OE,{class:"CurrentUI",characters:jt(o).characters},null,8,["characters"]),[[Ar,i.value]]),ce(SA,{class:"PartyUI",characters:jt(o).characters,onToggleUIup:r},null,8,["characters"]),ce(PE,{onUpdatePosition:s,showUIstatus:i.value},null,8,["showUIstatus"])])):Pr("",!0)]))}}),LA=Sn(PA,[["__scopeId","data-v-37bbee5a"]]),DA={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},IA={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},bd="$vuetify.",Td=(t,e)=>t.replace(/\{(\d+)\}/g,(n,i)=>String(e[+i])),lm=(t,e,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];if(!i.startsWith(bd))return Td(i,s);const o=i.replace(bd,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Il(l,o,null);return u||(`${i}${t.value}`,u=Il(c,o,null)),u||(u=i),typeof u!="string"&&(u=i),Td(u,s)};function cm(t,e){return(n,i)=>new Intl.NumberFormat([t.value,e.value],i).format(n)}function ol(t,e,n){const i=Hl(t,e,t[e]??n.value);return i.value=t[e]??n.value,Ot(n,r=>{t[e]==null&&(i.value=n.value)}),i}function um(t){return e=>{const n=ol(e,"locale",t.current),i=ol(e,"fallback",t.fallback),r=ol(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:lm(n,i,r),n:cm(n,i),provide:um({current:n,fallback:i,messages:r})}}}function UA(t){const e=Dt((t==null?void 0:t.locale)??"en"),n=Dt((t==null?void 0:t.fallback)??"en"),i=Je({en:DA,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:i,t:lm(e,n,i),n:cm(e,n),provide:um({current:e,fallback:n,messages:i})}}const Ad=Symbol.for("vuetify:locale");function NA(t){return t.name!=null}function FA(t){const e=t!=null&&t.adapter&&NA(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:UA(t),n=OA(e,t);return{...e,...n}}function OA(t,e){const n=Je((e==null?void 0:e.rtl)??IA),i=Ae(()=>n.value[t.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:Ae(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}const Wl={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function BA(t,e){const n=[];let i=[];const r=fm(t),s=dm(t),a=(r.getDay()-Wl[e.slice(-2).toUpperCase()]+7)%7,o=(s.getDay()-Wl[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<a;l++){const c=new Date(r);c.setDate(c.getDate()-(a-l)),i.push(c)}for(let l=1;l<=s.getDate();l++){const c=new Date(t.getFullYear(),t.getMonth(),l);i.push(c),i.length===7&&(n.push(i),i=[])}for(let l=1;l<7-o;l++){const c=new Date(s);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&n.push(i),n}function HA(t){const e=new Date(t);for(;e.getDay()!==0;)e.setDate(e.getDate()-1);return e}function zA(t){const e=new Date(t);for(;e.getDay()!==6;)e.setDate(e.getDate()+1);return e}function fm(t){return new Date(t.getFullYear(),t.getMonth(),1)}function dm(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function kA(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const VA=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function hm(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(VA.test(t))return kA(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const wd=new Date(2e3,0,2);function GA(t){const e=Wl[t.slice(-2).toUpperCase()];return Mp(7).map(n=>{const i=new Date(wd);i.setDate(wd.getDate()+e+n);const r=new Intl.DateTimeFormat(t,{weekday:"short"}).format(i);return r.charAt(0).toUpperCase()+r.slice(1)})}function WA(t,e,n,i){const r=hm(t)??new Date,s=i==null?void 0:i[e];if(typeof s=="function")return s(r,e,n);let a={};switch(e){case"fullDateWithWeekday":a={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"hours12h":a={hour:"numeric",hour12:!0};break;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":a={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"dayOfMonth":a={day:"numeric"};break;case"shortDate":a={year:"2-digit",month:"numeric",day:"numeric"};break;case"weekdayShort":a={weekday:"short"};break;case"year":a={year:"numeric"};break;default:a=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,a).format(r)}function XA(t,e){const n=t.toJsDate(e),i=n.getFullYear(),r=nd(String(n.getMonth()+1),2,"0"),s=nd(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function qA(t){const[e,n,i]=t.split("-").map(Number);return new Date(e,n-1,i)}function $A(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function YA(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function jA(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function KA(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function ZA(t,e){const n=new Date(t);return n.setMonth(n.getMonth()+e),n}function JA(t){return t.getFullYear()}function QA(t){return t.getMonth()}function ew(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function tw(t){return t.getHours()}function nw(t){return t.getMinutes()}function iw(t){return new Date(t.getFullYear(),0,1)}function rw(t){return new Date(t.getFullYear(),11,31)}function sw(t,e){return Xl(t,e[0])&&ow(t,e[1])}function aw(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function Xl(t,e){return t.getTime()>e.getTime()}function ow(t,e){return t.getTime()<e.getTime()}function Cd(t,e){return t.getTime()===e.getTime()}function lw(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function cw(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function uw(t,e,n){const i=new Date(t),r=new Date(e);return n==="month"?i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12:Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24))}function fw(t,e){const n=new Date(t);return n.setHours(e),n}function dw(t,e){const n=new Date(t);return n.setMinutes(e),n}function hw(t,e){const n=new Date(t);return n.setMonth(e),n}function pw(t,e){const n=new Date(t);return n.setFullYear(e),n}function mw(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function gw(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class _w{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return hm(e)}toJsDate(e){return e}toISO(e){return XA(this,e)}parseISO(e){return qA(e)}addMinutes(e,n){return $A(e,n)}addHours(e,n){return YA(e,n)}addDays(e,n){return jA(e,n)}addWeeks(e,n){return KA(e,n)}addMonths(e,n){return ZA(e,n)}getWeekArray(e){return BA(e,this.locale)}startOfWeek(e){return HA(e)}endOfWeek(e){return zA(e)}startOfMonth(e){return fm(e)}endOfMonth(e){return dm(e)}format(e,n){return WA(e,n,this.locale,this.formats)}isEqual(e,n){return Cd(e,n)}isValid(e){return aw(e)}isWithinRange(e,n){return sw(e,n)}isAfter(e,n){return Xl(e,n)}isBefore(e,n){return!Xl(e,n)&&!Cd(e,n)}isSameDay(e,n){return lw(e,n)}isSameMonth(e,n){return cw(e,n)}setMinutes(e,n){return dw(e,n)}setHours(e,n){return fw(e,n)}setMonth(e,n){return hw(e,n)}setYear(e,n){return pw(e,n)}getDiff(e,n,i){return uw(e,n,i)}getWeekdays(){return GA(this.locale)}getYear(e){return JA(e)}getMonth(e){return QA(e)}getNextMonth(e){return ew(e)}getHours(e){return tw(e)}getMinutes(e){return nw(e)}startOfDay(e){return mw(e)}endOfDay(e){return gw(e)}startOfYear(e){return iw(e)}endOfYear(e){return rw(e)}}const vw=Symbol.for("vuetify:date-options"),Rd=Symbol.for("vuetify:date-adapter");function xw(t,e){const n=_n({adapter:_w,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:Mw(n,e)}}function Mw(t,e){const n=er(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return Ot(e.current,i=>{n.locale=t.locale[i]??i??n.locale}),n}const Pd=Symbol.for("vuetify:display"),Ld={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Sw=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ld;return _n(Ld,t)};function Dd(t){return Ln&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function Id(t){return Ln&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function Ud(t){const e=Ln&&!t?window.navigator.userAgent:"ssr";function n(g){return!!e.match(g)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),a=n(/electron/i),o=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),f=n(/win/i),d=n(/mac/i),p=n(/linux/i);return{android:i,ios:r,cordova:s,electron:a,chrome:o,edge:l,firefox:c,opera:u,win:f,mac:d,linux:p,touch:db,ssr:e==="ssr"}}function yw(t,e){const{thresholds:n,mobileBreakpoint:i}=Sw(t),r=Dt(Id(e)),s=Dt(Ud(e)),a=er({}),o=Dt(Dd(e));function l(){r.value=Id(),o.value=Dd()}function c(){l(),s.value=Ud()}return no(()=>{const u=o.value<n.sm,f=o.value<n.md&&!u,d=o.value<n.lg&&!(f||u),p=o.value<n.xl&&!(d||f||u),g=o.value<n.xxl&&!(p||d||f||u),_=o.value>=n.xxl,m=u?"xs":f?"sm":d?"md":p?"lg":g?"xl":"xxl",h=typeof i=="number"?i:n[i],A=o.value<h;a.xs=u,a.sm=f,a.md=d,a.lg=p,a.xl=g,a.xxl=_,a.smAndUp=!u,a.mdAndUp=!(u||f),a.lgAndUp=!(u||f||d),a.xlAndUp=!(u||f||d||p),a.smAndDown=!(d||p||g||_),a.mdAndDown=!(p||g||_),a.lgAndDown=!(g||_),a.xlAndDown=!_,a.name=m,a.height=r.value,a.width=o.value,a.mobile=A,a.mobileBreakpoint=i,a.platform=s.value,a.thresholds=n}),Ln&&window.addEventListener("resize",l,{passive:!0}),{...sc(a),update:c,ssr:!!e}}function pm(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,i=_n(e,n),{aliases:r={},components:s={},directives:a={}}=i,o=Vb(i.defaults),l=yw(i.display,i.ssr),c=vT(i.theme),u=Jb(i.icons),f=FA(i.locale),d=xw(i.date,f);return{install:g=>{for(const _ in a)g.directive(_,a[_]);for(const _ in s)g.component(_,s[_]);for(const _ in r)g.component(_,qr({...r[_],name:_,aliasName:r[_].name}));if(c.install(g),g.provide(Br,o),g.provide(Pd,l),g.provide(Wa,c),g.provide(Bl,u),g.provide(Ad,f),g.provide(vw,d.options),g.provide(Rd,d.instance),Ln&&i.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:_}=g;g.mount=function(){const m=_(...arguments);return Qa(()=>l.update()),g.mount=_,m}}Cc.reset(),g.mixin({computed:{$vuetify(){return er({defaults:Mr.call(this,Br),display:Mr.call(this,Pd),theme:Mr.call(this,Wa),icons:Mr.call(this,Bl),locale:Mr.call(this,Ad),date:Mr.call(this,Rd)})}}})},defaults:o,display:l,theme:c,icons:u,locale:f,date:d}}const Ew="3.4.9";pm.version=Ew;function Mr(t){var i,r;const e=this.$,n=((i=e.parent)==null?void 0:i.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const bw=pm(),Tw="modulepreload",Aw=function(t){return"/app2/"+t},Nd={},ww=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Aw(s),s in Nd)return;Nd[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Tw,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};async function Cw(){(await ww(()=>import("./webfontloader-NopmBVuw.js").then(e=>e.w),__vite__mapDeps([]))).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Cw();Y_(LA).use(bw).mount("#app");
//# sourceMappingURL=index-0s2NCxb_.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}