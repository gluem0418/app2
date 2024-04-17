var up=Object.defineProperty;var fp=(n,e,t)=>e in n?up(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ue=(n,e,t)=>(fp(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function bl(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const _t={},As=[],Wn=()=>{},dp=()=>!1,hp=/^on[^a-z]/,Pa=n=>hp.test(n),Tl=n=>n.startsWith("onUpdate:"),Vt=Object.assign,Al=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},pp=Object.prototype.hasOwnProperty,ot=(n,e)=>pp.call(n,e),We=Array.isArray,ws=n=>Da(n)==="[object Map]",Kf=n=>Da(n)==="[object Set]",Je=n=>typeof n=="function",Ut=n=>typeof n=="string",La=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Zf=n=>(xt(n)||Je(n))&&Je(n.then)&&Je(n.catch),Jf=Object.prototype.toString,Da=n=>Jf.call(n),mp=n=>Da(n).slice(8,-1),Qf=n=>Da(n)==="[object Object]",wl=n=>Ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fa=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},_p=/-(\w)/g,Us=Ia(n=>n.replace(_p,(e,t)=>t?t.toUpperCase():"")),gp=/\B([A-Z])/g,zs=Ia(n=>n.replace(gp,"-$1").toLowerCase()),ed=Ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),io=Ia(n=>n?`on${ed(n)}`:""),Zi=(n,e)=>!Object.is(n,e),so=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ga=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},vp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let dc;const Xo=()=>dc||(dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rn(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ut(i)?yp(i):Rn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ut(n)||xt(n))return n}const xp=/;(?![^(]*\))/g,Mp=/:([^]+)/,Sp=/\/\*[^]*?\*\//g;function yp(n){const e={};return n.replace(Sp,"").split(xp).forEach(t=>{if(t){const i=t.split(Mp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ht(n){let e="";if(Ut(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=Ht(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ep="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bp=bl(Ep);function td(n){return!!n||n===""}const Re=n=>Ut(n)?n:n==null?"":We(n)||xt(n)&&(n.toString===Jf||!Je(n.toString))?JSON.stringify(n,nd,2):String(n),nd=(n,e)=>e&&e.__v_isRef?nd(n,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:Kf(e)?{[`Set(${e.size})`]:[...e.values()]}:xt(e)&&!We(e)&&!Qf(e)?String(e):e;let mn;class id{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=mn;try{return mn=this,e()}finally{mn=t}}}on(){mn=this}off(){mn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Cl(n){return new id(n)}function Tp(n,e=mn){e&&e.active&&e.effects.push(n)}function sd(){return mn}function rd(n){mn&&mn.cleanups.push(n)}const Rl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},ad=n=>(n.w&bi)>0,od=n=>(n.n&bi)>0,Ap=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=bi},wp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];ad(s)&&!od(s)?s.delete(n):e[t++]=s,s.w&=~bi,s.n&=~bi}e.length=t}},va=new WeakMap;let nr=0,bi=1;const Yo=30;let Ln;const qi=Symbol(""),jo=Symbol("");class Pl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Tp(this,i)}run(){if(!this.active)return this.fn();let e=Ln,t=vi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ln,Ln=this,vi=!0,bi=1<<++nr,nr<=Yo?Ap(this):hc(this),this.fn()}finally{nr<=Yo&&wp(this),bi=1<<--nr,Ln=this.parent,vi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ln===this?this.deferStop=!0:this.active&&(hc(this),this.onStop&&this.onStop(),this.active=!1)}}function hc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let vi=!0;const ld=[];function Gs(){ld.push(vi),vi=!1}function Vs(){const n=ld.pop();vi=n===void 0?!0:n}function un(n,e,t){if(vi&&Ln){let i=va.get(n);i||va.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Rl()),cd(s)}}function cd(n,e){let t=!1;nr<=Yo?od(n)||(n.n|=bi,t=!ad(n)):t=!n.has(Ln),t&&(n.add(Ln),Ln.deps.push(n))}function si(n,e,t,i,s,r){const a=va.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&We(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!La(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":We(n)?wl(t)&&o.push(a.get("length")):(o.push(a.get(qi)),ws(n)&&o.push(a.get(jo)));break;case"delete":We(n)||(o.push(a.get(qi)),ws(n)&&o.push(a.get(jo)));break;case"set":ws(n)&&o.push(a.get(qi));break}if(o.length===1)o[0]&&Ko(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Ko(Rl(l))}}function Ko(n,e){const t=We(n)?n:[...n];for(const i of t)i.computed&&pc(i);for(const i of t)i.computed||pc(i)}function pc(n,e){(n!==Ln||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function Cp(n,e){var t;return(t=va.get(n))==null?void 0:t.get(e)}const Rp=bl("__proto__,__v_isRef,__isVue"),ud=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(La)),mc=Pp();function Pp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=at(this);for(let r=0,a=this.length;r<a;r++)un(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(at)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Gs();const i=at(this)[e].apply(this,t);return Vs(),i}}),n}function Lp(n){const e=at(this);return un(e,"has",n),e.hasOwnProperty(n)}class fd{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const s=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw"&&i===(s?r?Wp:md:r?pd:hd).get(e))return e;const a=We(e);if(!s){if(a&&ot(mc,t))return Reflect.get(mc,t,i);if(t==="hasOwnProperty")return Lp}const o=Reflect.get(e,t,i);return(La(t)?ud.has(t):Rp(t))||(s||un(e,"get",t),r)?o:bt(o)?a&&wl(t)?o:o.value:xt(o)?s?_d(o):Xt(o):o}}class dd extends fd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(Fs(r)&&bt(r)&&!bt(i))return!1;if(!this._shallow&&(!xa(i)&&!Fs(i)&&(r=at(r),i=at(i)),!We(e)&&bt(r)&&!bt(i)))return r.value=i,!0;const a=We(e)&&wl(t)?Number(t)<e.length:ot(e,t),o=Reflect.set(e,t,i,s);return e===at(s)&&(a?Zi(i,r)&&si(e,"set",t,i):si(e,"add",t,i)),o}deleteProperty(e,t){const i=ot(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&si(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!La(t)||!ud.has(t))&&un(e,"has",t),i}ownKeys(e){return un(e,"iterate",We(e)?"length":qi),Reflect.ownKeys(e)}}class Dp extends fd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ip=new dd,Up=new Dp,Fp=new dd(!0),Ll=n=>n,Ua=n=>Reflect.getPrototypeOf(n);function Lr(n,e,t=!1,i=!1){n=n.__v_raw;const s=at(n),r=at(e);t||(Zi(e,r)&&un(s,"get",e),un(s,"get",r));const{has:a}=Ua(s),o=i?Ll:t?Ul:fr;if(a.call(s,e))return o(n.get(e));if(a.call(s,r))return o(n.get(r));n!==s&&n.get(e)}function Dr(n,e=!1){const t=this.__v_raw,i=at(t),s=at(n);return e||(Zi(n,s)&&un(i,"has",n),un(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Ir(n,e=!1){return n=n.__v_raw,!e&&un(at(n),"iterate",qi),Reflect.get(n,"size",n)}function _c(n){n=at(n);const e=at(this);return Ua(e).has.call(e,n)||(e.add(n),si(e,"add",n,n)),this}function gc(n,e){e=at(e);const t=at(this),{has:i,get:s}=Ua(t);let r=i.call(t,n);r||(n=at(n),r=i.call(t,n));const a=s.call(t,n);return t.set(n,e),r?Zi(e,a)&&si(t,"set",n,e):si(t,"add",n,e),this}function vc(n){const e=at(this),{has:t,get:i}=Ua(e);let s=t.call(e,n);s||(n=at(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&si(e,"delete",n,void 0),r}function xc(){const n=at(this),e=n.size!==0,t=n.clear();return e&&si(n,"clear",void 0,void 0),t}function Ur(n,e){return function(i,s){const r=this,a=r.__v_raw,o=at(a),l=e?Ll:n?Ul:fr;return!n&&un(o,"iterate",qi),a.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Fr(n,e,t){return function(...i){const s=this.__v_raw,r=at(s),a=ws(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Ll:e?Ul:fr;return!e&&un(r,"iterate",l?jo:qi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function oi(n){return function(...e){return n==="delete"?!1:this}}function kp(){const n={get(r){return Lr(this,r)},get size(){return Ir(this)},has:Dr,add:_c,set:gc,delete:vc,clear:xc,forEach:Ur(!1,!1)},e={get(r){return Lr(this,r,!1,!0)},get size(){return Ir(this)},has:Dr,add:_c,set:gc,delete:vc,clear:xc,forEach:Ur(!1,!0)},t={get(r){return Lr(this,r,!0)},get size(){return Ir(this,!0)},has(r){return Dr.call(this,r,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:Ur(!0,!1)},i={get(r){return Lr(this,r,!0,!0)},get size(){return Ir(this,!0)},has(r){return Dr.call(this,r,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:Ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Fr(r,!1,!1),t[r]=Fr(r,!0,!1),e[r]=Fr(r,!1,!0),i[r]=Fr(r,!0,!0)}),[n,t,e,i]}const[Np,Op,Bp,Hp]=kp();function Dl(n,e){const t=e?n?Hp:Bp:n?Op:Np;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ot(t,s)&&s in i?t:i,s,r)}const zp={get:Dl(!1,!1)},Gp={get:Dl(!1,!0)},Vp={get:Dl(!0,!1)},hd=new WeakMap,pd=new WeakMap,md=new WeakMap,Wp=new WeakMap;function qp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $p(n){return n.__v_skip||!Object.isExtensible(n)?0:qp(mp(n))}function Xt(n){return Fs(n)?n:Il(n,!1,Ip,zp,hd)}function Xp(n){return Il(n,!1,Fp,Gp,pd)}function _d(n){return Il(n,!0,Up,Vp,md)}function Il(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=$p(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function xi(n){return Fs(n)?xi(n.__v_raw):!!(n&&n.__v_isReactive)}function Fs(n){return!!(n&&n.__v_isReadonly)}function xa(n){return!!(n&&n.__v_isShallow)}function gd(n){return xi(n)||Fs(n)}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function Fa(n){return ga(n,"__v_skip",!0),n}const fr=n=>xt(n)?Xt(n):n,Ul=n=>xt(n)?_d(n):n;function vd(n){vi&&Ln&&(n=at(n),cd(n.dep||(n.dep=Rl())))}function xd(n,e){n=at(n);const t=n.dep;t&&Ko(t)}function bt(n){return!!(n&&n.__v_isRef===!0)}function Se(n){return Md(n,!1)}function Cs(n){return Md(n,!0)}function Md(n,e){return bt(n)?n:new Yp(n,e)}class Yp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:at(e),this._value=t?e:fr(e)}get value(){return vd(this),this._value}set value(e){const t=this.__v_isShallow||xa(e)||Fs(e);e=t?e:at(e),Zi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:fr(e),xd(this))}}function re(n){return bt(n)?n.value:n}const jp={get:(n,e,t)=>re(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return bt(s)&&!bt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Sd(n){return xi(n)?n:new Proxy(n,jp)}function yd(n){const e=We(n)?new Array(n.length):{};for(const t in n)e[t]=Zp(n,t);return e}class Kp{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Cp(at(this._object),this._key)}}function Zp(n,e,t){const i=n[e];return bt(i)?i:new Kp(n,e,t)}class Jp{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Pl(e,()=>{this._dirty||(this._dirty=!0,xd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=at(this);return vd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qp(n,e,t=!1){let i,s;const r=Je(n);return r?(i=n,s=Wn):(i=n.get,s=n.set),new Jp(i,s,r||!s,t)}function Mi(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){ka(r,e,t)}return s}function Fn(n,e,t,i){if(Je(n)){const r=Mi(n,e,t,i);return r&&Zf(r)&&r.catch(a=>{ka(a,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(Fn(n[r],e,t,i));return s}function ka(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Mi(l,null,10,[n,a,o]);return}}em(n,t,s,i)}function em(n,e,t,i=!0){console.error(n)}let dr=!1,Zo=!1;const $t=[];let Gn=0;const Rs=[];let ei=null,Hi=0;const Ed=Promise.resolve();let Fl=null;function Ws(n){const e=Fl||Ed;return n?e.then(this?n.bind(this):n):e}function tm(n){let e=Gn+1,t=$t.length;for(;e<t;){const i=e+t>>>1,s=$t[i],r=hr(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function kl(n){(!$t.length||!$t.includes(n,dr&&n.allowRecurse?Gn+1:Gn))&&(n.id==null?$t.push(n):$t.splice(tm(n.id),0,n),bd())}function bd(){!dr&&!Zo&&(Zo=!0,Fl=Ed.then(Ad))}function nm(n){const e=$t.indexOf(n);e>Gn&&$t.splice(e,1)}function im(n){We(n)?Rs.push(...n):(!ei||!ei.includes(n,n.allowRecurse?Hi+1:Hi))&&Rs.push(n),bd()}function Mc(n,e=dr?Gn+1:0){for(;e<$t.length;e++){const t=$t[e];t&&t.pre&&($t.splice(e,1),e--,t())}}function Td(n){if(Rs.length){const e=[...new Set(Rs)];if(Rs.length=0,ei){ei.push(...e);return}for(ei=e,ei.sort((t,i)=>hr(t)-hr(i)),Hi=0;Hi<ei.length;Hi++)ei[Hi]();ei=null,Hi=0}}const hr=n=>n.id==null?1/0:n.id,sm=(n,e)=>{const t=hr(n)-hr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Ad(n){Zo=!1,dr=!0,$t.sort(sm);try{for(Gn=0;Gn<$t.length;Gn++){const e=$t[Gn];e&&e.active!==!1&&Mi(e,null,14)}}finally{Gn=0,$t.length=0,Td(),dr=!1,Fl=null,($t.length||Rs.length)&&Ad()}}function rm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||_t;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||_t;d&&(s=t.map(m=>Ut(m)?m.trim():m)),f&&(s=t.map(vp))}let o,l=i[o=io(e)]||i[o=io(Us(e))];!l&&r&&(l=i[o=io(zs(e))]),l&&Fn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Fn(c,n,6,s)}}function wd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Je(n)){const l=c=>{const u=wd(c,e,!0);u&&(o=!0,Vt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(xt(n)&&i.set(n,null),null):(We(r)?r.forEach(l=>a[l]=null):Vt(a,r),xt(n)&&i.set(n,a),a)}function Na(n,e){return!n||!Pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(n,e[0].toLowerCase()+e.slice(1))||ot(n,zs(e))||ot(n,e))}let vn=null,Oa=null;function Ma(n){const e=vn;return vn=n,Oa=n&&n.type.__scopeId||null,e}function kn(n){Oa=n}function Nn(){Oa=null}function da(n,e=vn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Pc(-1);const r=Ma(e);let a;try{a=n(...s)}finally{Ma(r),i._d&&Pc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ro(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:_,inheritAttrs:g}=n;let p,h;const b=Ma(n);try{if(t.shapeFlag&4){const T=s||i;p=Hn(u.call(T,T,f,r,m,d,_)),h=l}else{const T=e;p=Hn(T.length>1?T(r,{attrs:l,slots:o,emit:c}):T(r,null)),h=e.props?l:am(l)}}catch(T){or.length=0,ka(T,n,1),p=Le(Ji)}let y=p;if(h&&g!==!1){const T=Object.keys(h),{shapeFlag:R}=y;T.length&&R&7&&(a&&T.some(Tl)&&(h=om(h,a)),y=Ti(y,h))}return t.dirs&&(y=Ti(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),p=y,Ma(b),p}const am=n=>{let e;for(const t in n)(t==="class"||t==="style"||Pa(t))&&((e||(e={}))[t]=n[t]);return e},om=(n,e)=>{const t={};for(const i in n)(!Tl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function lm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Sc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Na(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Sc(i,a,c):!0:!!a;return!1}function Sc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Na(t,r))return!0}return!1}function cm({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const um=Symbol.for("v-ndc"),fm=n=>n.__isSuspense;function dm(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):im(n)}function Ba(n,e){return Nl(n,null,e)}const kr={};function Tt(n,e,t){return Nl(n,e,t)}function Nl(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:a}=_t){var o;const l=sd()===((o=Bt)==null?void 0:o.scope)?Bt:null;let c,u=!1,f=!1;if(bt(n)?(c=()=>n.value,u=xa(n)):xi(n)?(c=()=>n,i=!0):We(n)?(f=!0,u=n.some(T=>xi(T)||xa(T)),c=()=>n.map(T=>{if(bt(T))return T.value;if(xi(T))return Wi(T);if(Je(T))return Mi(T,l,2)})):Je(n)?e?c=()=>Mi(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Fn(n,l,3,[m])}:c=Wn,e&&i){const T=c;c=()=>Wi(T())}let d,m=T=>{d=b.onStop=()=>{Mi(T,l,4)}},_;if(_r)if(m=Wn,e?t&&Fn(e,l,3,[c(),f?[]:void 0,m]):c(),s==="sync"){const T=s_();_=T.__watcherHandles||(T.__watcherHandles=[])}else return Wn;let g=f?new Array(n.length).fill(kr):kr;const p=()=>{if(b.active)if(e){const T=b.run();(i||u||(f?T.some((R,F)=>Zi(R,g[F])):Zi(T,g)))&&(d&&d(),Fn(e,l,3,[T,g===kr?void 0:f&&g[0]===kr?[]:g,m]),g=T)}else b.run()};p.allowRecurse=!!e;let h;s==="sync"?h=p:s==="post"?h=()=>sn(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),h=()=>kl(p));const b=new Pl(c,h);e?t?p():g=b.run():s==="post"?sn(b.run.bind(b),l&&l.suspense):b.run();const y=()=>{b.stop(),l&&l.scope&&Al(l.scope.effects,b)};return _&&_.push(y),y}function hm(n,e,t){const i=this.proxy,s=Ut(n)?n.includes(".")?Cd(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const a=Bt;ks(this);const o=Nl(s,r.bind(i),t);return a?ks(a):$i(),o}function Cd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Wi(n,e){if(!xt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),bt(n))Wi(n.value,e);else if(We(n))for(let t=0;t<n.length;t++)Wi(n[t],e);else if(Kf(n)||ws(n))n.forEach(t=>{Wi(t,e)});else if(Qf(n))for(const t in n)Wi(n[t],e);return n}function Pt(n,e){const t=vn;if(t===null)return n;const i=Va(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[a,o,l,c=_t]=e[r];a&&(Je(a)&&(a={mounted:a,updated:a}),a.deep&&Wi(o),s.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Li(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Gs(),Fn(l,t,8,[n.el,o,n,e]),Vs())}}/*! #__NO_SIDE_EFFECTS__ */function qe(n,e){return Je(n)?Vt({name:n.name},e,{setup:n}):n}const ha=n=>!!n.type.__asyncLoader,Rd=n=>n.type.__isKeepAlive;function pm(n,e){Pd(n,"a",e)}function mm(n,e){Pd(n,"da",e)}function Pd(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ha(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Rd(s.parent.vnode)&&_m(i,e,t,s),s=s.parent}}function _m(n,e,t,i){const s=Ha(e,n,i,!0);Ol(()=>{Al(i[e],s)},t)}function Ha(n,e,t=Bt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Gs(),ks(t);const o=Fn(e,t,n,a);return $i(),Vs(),o});return i?s.unshift(r):s.push(r),r}}const ai=n=>(e,t=Bt)=>(!_r||n==="sp")&&Ha(n,(...i)=>e(...i),t),gm=ai("bm"),ts=ai("m"),vm=ai("bu"),xm=ai("u"),Mm=ai("bum"),Ol=ai("um"),Sm=ai("sp"),ym=ai("rtg"),Em=ai("rtc");function bm(n,e=Bt){Ha("ec",n,e)}function Yt(n,e,t,i){let s;const r=t&&t[i];if(We(n)||Ut(n)){s=new Array(n.length);for(let a=0,o=n.length;a<o;a++)s[a]=e(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(xt(n))if(n[Symbol.iterator])s=Array.from(n,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(n);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];s[o]=e(n[c],c,o,r&&r[o])}}else s=[];return t&&(t[i]=s),s}const Jo=n=>n?Gd(n)?Va(n)||n.proxy:Jo(n.parent):null,ar=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Jo(n.parent),$root:n=>Jo(n.root),$emit:n=>n.emit,$options:n=>Bl(n),$forceUpdate:n=>n.f||(n.f=()=>kl(n.update)),$nextTick:n=>n.n||(n.n=Ws.bind(n.proxy)),$watch:n=>hm.bind(n)}),ao=(n,e)=>n!==_t&&!n.__isScriptSetup&&ot(n,e),Tm={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ao(i,e))return a[e]=1,i[e];if(s!==_t&&ot(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&ot(c,e))return a[e]=3,r[e];if(t!==_t&&ot(t,e))return a[e]=4,t[e];Qo&&(a[e]=0)}}const u=ar[e];let f,d;if(u)return e==="$attrs"&&un(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==_t&&ot(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,ot(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ao(s,e)?(s[e]=t,!0):i!==_t&&ot(i,e)?(i[e]=t,!0):ot(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==_t&&ot(n,a)||ao(e,a)||(o=r[0])&&ot(o,a)||ot(i,a)||ot(ar,a)||ot(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function yc(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Qo=!0;function Am(n){const e=Bl(n),t=n.proxy,i=n.ctx;Qo=!1,e.beforeCreate&&Ec(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:_,activated:g,deactivated:p,beforeDestroy:h,beforeUnmount:b,destroyed:y,unmounted:T,render:R,renderTracked:F,renderTriggered:I,errorCaptured:X,serverPrefetch:M,expose:w,inheritAttrs:Y,components:j,directives:ee,filters:k}=e;if(c&&wm(c,i,null),a)for(const K in a){const le=a[K];Je(le)&&(i[K]=le.bind(t))}if(s){const K=s.call(t,t);xt(K)&&(n.data=Xt(K))}if(Qo=!0,r)for(const K in r){const le=r[K],me=Je(le)?le.bind(t,t):Je(le.get)?le.get.bind(t,t):Wn,ce=!Je(le)&&Je(le.set)?le.set.bind(t):Wn,O=Dt({get:me,set:ce});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>O.value,set:q=>O.value=q})}if(o)for(const K in o)Ld(o[K],i,t,K);if(l){const K=Je(l)?l.call(t):l;Reflect.ownKeys(K).forEach(le=>{yn(le,K[le])})}u&&Ec(u,n,"c");function Z(K,le){We(le)?le.forEach(me=>K(me.bind(t))):le&&K(le.bind(t))}if(Z(gm,f),Z(ts,d),Z(vm,m),Z(xm,_),Z(pm,g),Z(mm,p),Z(bm,X),Z(Em,F),Z(ym,I),Z(Mm,b),Z(Ol,T),Z(Sm,M),We(w))if(w.length){const K=n.exposed||(n.exposed={});w.forEach(le=>{Object.defineProperty(K,le,{get:()=>t[le],set:me=>t[le]=me})})}else n.exposed||(n.exposed={});R&&n.render===Wn&&(n.render=R),Y!=null&&(n.inheritAttrs=Y),j&&(n.components=j),ee&&(n.directives=ee)}function wm(n,e,t=Wn){We(n)&&(n=el(n));for(const i in n){const s=n[i];let r;xt(s)?"default"in s?r=gt(s.from||i,s.default,!0):r=gt(s.from||i):r=gt(s),bt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Ec(n,e,t){Fn(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ld(n,e,t,i){const s=i.includes(".")?Cd(t,i):()=>t[i];if(Ut(n)){const r=e[n];Je(r)&&Tt(s,r)}else if(Je(n))Tt(s,n.bind(t));else if(xt(n))if(We(n))n.forEach(r=>Ld(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&Tt(s,r,n)}}function Bl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Sa(l,c,a,!0)),Sa(l,e,a)),xt(e)&&r.set(e,l),l}function Sa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Sa(n,r,t,!0),s&&s.forEach(a=>Sa(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Cm[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Cm={data:bc,props:Tc,emits:Tc,methods:ir,computed:ir,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:ir,directives:ir,watch:Pm,provide:bc,inject:Rm};function bc(n,e){return e?n?function(){return Vt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function Rm(n,e){return ir(el(n),el(e))}function el(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Zt(n,e){return n?[...new Set([].concat(n,e))]:e}function ir(n,e){return n?Vt(Object.create(null),n,e):e}function Tc(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:Vt(Object.create(null),yc(n),yc(e??{})):e}function Pm(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const i in e)t[i]=Zt(n[i],e[i]);return t}function Dd(){return{app:null,config:{isNativeTag:dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lm=0;function Dm(n,e){return function(i,s=null){Je(i)||(i=Vt({},i)),s!=null&&!xt(s)&&(s=null);const r=Dd(),a=new WeakSet;let o=!1;const l=r.app={_uid:Lm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:r_,get config(){return r.config},set config(c){},use(c,...u){return a.has(c)||(c&&Je(c.install)?(a.add(c),c.install(l,...u)):Je(c)&&(a.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!o){const d=Le(i,s);return d.appContext=r,u&&e?e(d,c):n(d,c,f),o=!0,l._container=c,c.__vue_app__=l,Va(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){pr=l;try{return c()}finally{pr=null}}};return l}}let pr=null;function yn(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function gt(n,e,t=!1){const i=Bt||vn;if(i||pr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:pr._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}function Im(){return!!(Bt||vn||pr)}function Um(n,e,t,i=!1){const s={},r={};ga(r,Ga,1),n.propsDefaults=Object.create(null),Id(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Xp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Fm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=at(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Na(n.emitsOptions,d))continue;const m=e[d];if(l)if(ot(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const _=Us(d);s[_]=tl(l,o,_,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{Id(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!ot(e,f)&&((u=zs(f))===f||!ot(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=tl(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!ot(e,f))&&(delete r[f],c=!0)}c&&si(n,"set","$attrs")}function Id(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(fa(l))continue;const c=e[l];let u;s&&ot(s,u=Us(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=at(t),c=o||_t;for(let u=0;u<r.length;u++){const f=r[u];t[f]=tl(s,l,f,c[f],n,!ot(c,f))}}return a}function tl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ot(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Je(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(ks(s),i=c[t]=l.call(null,e),$i())}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===zs(t))&&(i=!0))}return i}function Ud(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Je(n)){const u=f=>{l=!0;const[d,m]=Ud(f,e,!0);Vt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return xt(n)&&i.set(n,As),As;if(We(r))for(let u=0;u<r.length;u++){const f=Us(r[u]);Ac(f)&&(a[f]=_t)}else if(r)for(const u in r){const f=Us(u);if(Ac(f)){const d=r[u],m=a[f]=We(d)||Je(d)?{type:d}:Vt({},d);if(m){const _=Rc(Boolean,m.type),g=Rc(String,m.type);m[0]=_>-1,m[1]=g<0||_<g,(_>-1||ot(m,"default"))&&o.push(f)}}}const c=[a,o];return xt(n)&&i.set(n,c),c}function Ac(n){return n[0]!=="$"}function wc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Cc(n,e){return wc(n)===wc(e)}function Rc(n,e){return We(e)?e.findIndex(t=>Cc(t,n)):Je(e)&&Cc(e,n)?0:-1}const Fd=n=>n[0]==="_"||n==="$stable",Hl=n=>We(n)?n.map(Hn):[Hn(n)],km=(n,e,t)=>{if(e._n)return e;const i=da((...s)=>Hl(e(...s)),t);return i._c=!1,i},kd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Fd(s))continue;const r=n[s];if(Je(r))e[s]=km(s,r,i);else if(r!=null){const a=Hl(r);e[s]=()=>a}}},Nd=(n,e)=>{const t=Hl(e);n.slots.default=()=>t},Nm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=at(e),ga(e,"_",t)):kd(e,n.slots={})}else n.slots={},e&&Nd(n,e);ga(n.slots,Ga,1)},Om=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=_t;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(Vt(s,e),!t&&o===1&&delete s._):(r=!e.$stable,kd(e,s)),a=e}else e&&(Nd(n,e),a={default:1});if(r)for(const o in s)!Fd(o)&&a[o]==null&&delete s[o]};function nl(n,e,t,i,s=!1){if(We(n)){n.forEach((d,m)=>nl(d,e&&(We(e)?e[m]:e),t,i,s));return}if(ha(i)&&!s)return;const r=i.shapeFlag&4?Va(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===_t?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(Ut(c)?(u[c]=null,ot(f,c)&&(f[c]=null)):bt(c)&&(c.value=null)),Je(l))Mi(l,o,12,[a,u]);else{const d=Ut(l),m=bt(l);if(d||m){const _=()=>{if(n.f){const g=d?ot(f,l)?f[l]:u[l]:l.value;s?We(g)&&Al(g,r):We(g)?g.includes(r)||g.push(r):d?(u[l]=[r],ot(f,l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,ot(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,sn(_,t)):_()}}}const sn=dm;function Bm(n){return Hm(n)}function Hm(n,e){const t=Xo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Wn,insertStaticContent:_}=n,g=(x,U,L,G=null,z=null,ue=null,fe=!1,Q=null,de=!!U.dynamicChildren)=>{if(x===U)return;x&&!Ys(x,U)&&(G=Fe(x),q(x,z,ue,!0),x=null),U.patchFlag===-2&&(de=!1,U.dynamicChildren=null);const{type:ae,ref:Te,shapeFlag:E}=U;switch(ae){case za:p(x,U,L,G);break;case Ji:h(x,U,L,G);break;case oo:x==null&&b(U,L,G,fe);break;case ft:j(x,U,L,G,z,ue,fe,Q,de);break;default:E&1?R(x,U,L,G,z,ue,fe,Q,de):E&6?ee(x,U,L,G,z,ue,fe,Q,de):(E&64||E&128)&&ae.process(x,U,L,G,z,ue,fe,Q,de,ke)}Te!=null&&z&&nl(Te,x&&x.ref,ue,U||x,!U)},p=(x,U,L,G)=>{if(x==null)i(U.el=o(U.children),L,G);else{const z=U.el=x.el;U.children!==x.children&&c(z,U.children)}},h=(x,U,L,G)=>{x==null?i(U.el=l(U.children||""),L,G):U.el=x.el},b=(x,U,L,G)=>{[x.el,x.anchor]=_(x.children,U,L,G,x.el,x.anchor)},y=({el:x,anchor:U},L,G)=>{let z;for(;x&&x!==U;)z=d(x),i(x,L,G),x=z;i(U,L,G)},T=({el:x,anchor:U})=>{let L;for(;x&&x!==U;)L=d(x),s(x),x=L;s(U)},R=(x,U,L,G,z,ue,fe,Q,de)=>{fe=fe||U.type==="svg",x==null?F(U,L,G,z,ue,fe,Q,de):M(x,U,z,ue,fe,Q,de)},F=(x,U,L,G,z,ue,fe,Q)=>{let de,ae;const{type:Te,props:E,shapeFlag:v,transition:N,dirs:se}=x;if(de=x.el=a(x.type,ue,E&&E.is,E),v&8?u(de,x.children):v&16&&X(x.children,de,null,G,z,ue&&Te!=="foreignObject",fe,Q),se&&Li(x,null,G,"created"),I(de,x,x.scopeId,fe,G),E){for(const he in E)he!=="value"&&!fa(he)&&r(de,he,null,E[he],ue,x.children,G,z,ye);"value"in E&&r(de,"value",null,E.value),(ae=E.onVnodeBeforeMount)&&Bn(ae,G,x)}se&&Li(x,null,G,"beforeMount");const oe=zm(z,N);oe&&N.beforeEnter(de),i(de,U,L),((ae=E&&E.onVnodeMounted)||oe||se)&&sn(()=>{ae&&Bn(ae,G,x),oe&&N.enter(de),se&&Li(x,null,G,"mounted")},z)},I=(x,U,L,G,z)=>{if(L&&m(x,L),G)for(let ue=0;ue<G.length;ue++)m(x,G[ue]);if(z){let ue=z.subTree;if(U===ue){const fe=z.vnode;I(x,fe,fe.scopeId,fe.slotScopeIds,z.parent)}}},X=(x,U,L,G,z,ue,fe,Q,de=0)=>{for(let ae=de;ae<x.length;ae++){const Te=x[ae]=Q?mi(x[ae]):Hn(x[ae]);g(null,Te,U,L,G,z,ue,fe,Q)}},M=(x,U,L,G,z,ue,fe)=>{const Q=U.el=x.el;let{patchFlag:de,dynamicChildren:ae,dirs:Te}=U;de|=x.patchFlag&16;const E=x.props||_t,v=U.props||_t;let N;L&&Di(L,!1),(N=v.onVnodeBeforeUpdate)&&Bn(N,L,U,x),Te&&Li(U,x,L,"beforeUpdate"),L&&Di(L,!0);const se=z&&U.type!=="foreignObject";if(ae?w(x.dynamicChildren,ae,Q,L,G,se,ue):fe||le(x,U,Q,null,L,G,se,ue,!1),de>0){if(de&16)Y(Q,U,E,v,L,G,z);else if(de&2&&E.class!==v.class&&r(Q,"class",null,v.class,z),de&4&&r(Q,"style",E.style,v.style,z),de&8){const oe=U.dynamicProps;for(let he=0;he<oe.length;he++){const Ee=oe[he],xe=E[Ee],Ce=v[Ee];(Ce!==xe||Ee==="value")&&r(Q,Ee,xe,Ce,z,x.children,L,G,ye)}}de&1&&x.children!==U.children&&u(Q,U.children)}else!fe&&ae==null&&Y(Q,U,E,v,L,G,z);((N=v.onVnodeUpdated)||Te)&&sn(()=>{N&&Bn(N,L,U,x),Te&&Li(U,x,L,"updated")},G)},w=(x,U,L,G,z,ue,fe)=>{for(let Q=0;Q<U.length;Q++){const de=x[Q],ae=U[Q],Te=de.el&&(de.type===ft||!Ys(de,ae)||de.shapeFlag&70)?f(de.el):L;g(de,ae,Te,null,G,z,ue,fe,!0)}},Y=(x,U,L,G,z,ue,fe)=>{if(L!==G){if(L!==_t)for(const Q in L)!fa(Q)&&!(Q in G)&&r(x,Q,L[Q],null,fe,U.children,z,ue,ye);for(const Q in G){if(fa(Q))continue;const de=G[Q],ae=L[Q];de!==ae&&Q!=="value"&&r(x,Q,ae,de,fe,U.children,z,ue,ye)}"value"in G&&r(x,"value",L.value,G.value)}},j=(x,U,L,G,z,ue,fe,Q,de)=>{const ae=U.el=x?x.el:o(""),Te=U.anchor=x?x.anchor:o("");let{patchFlag:E,dynamicChildren:v,slotScopeIds:N}=U;N&&(Q=Q?Q.concat(N):N),x==null?(i(ae,L,G),i(Te,L,G),X(U.children,L,Te,z,ue,fe,Q,de)):E>0&&E&64&&v&&x.dynamicChildren?(w(x.dynamicChildren,v,L,z,ue,fe,Q),(U.key!=null||z&&U===z.subTree)&&Od(x,U,!0)):le(x,U,L,Te,z,ue,fe,Q,de)},ee=(x,U,L,G,z,ue,fe,Q,de)=>{U.slotScopeIds=Q,x==null?U.shapeFlag&512?z.ctx.activate(U,L,G,fe,de):k(U,L,G,z,ue,fe,de):$(x,U,de)},k=(x,U,L,G,z,ue,fe)=>{const Q=x.component=Km(x,G,z);if(Rd(x)&&(Q.ctx.renderer=ke),Jm(Q),Q.asyncDep){if(z&&z.registerDep(Q,Z),!x.el){const de=Q.subTree=Le(Ji);h(null,de,U,L)}return}Z(Q,x,U,L,z,ue,fe)},$=(x,U,L)=>{const G=U.component=x.component;if(lm(x,U,L))if(G.asyncDep&&!G.asyncResolved){K(G,U,L);return}else G.next=U,nm(G.update),G.update();else U.el=x.el,G.vnode=U},Z=(x,U,L,G,z,ue,fe)=>{const Q=()=>{if(x.isMounted){let{next:Te,bu:E,u:v,parent:N,vnode:se}=x,oe=Te,he;Di(x,!1),Te?(Te.el=se.el,K(x,Te,fe)):Te=se,E&&so(E),(he=Te.props&&Te.props.onVnodeBeforeUpdate)&&Bn(he,N,Te,se),Di(x,!0);const Ee=ro(x),xe=x.subTree;x.subTree=Ee,g(xe,Ee,f(xe.el),Fe(xe),x,z,ue),Te.el=Ee.el,oe===null&&cm(x,Ee.el),v&&sn(v,z),(he=Te.props&&Te.props.onVnodeUpdated)&&sn(()=>Bn(he,N,Te,se),z)}else{let Te;const{el:E,props:v}=U,{bm:N,m:se,parent:oe}=x,he=ha(U);if(Di(x,!1),N&&so(N),!he&&(Te=v&&v.onVnodeBeforeMount)&&Bn(Te,oe,U),Di(x,!0),E&&Ge){const Ee=()=>{x.subTree=ro(x),Ge(E,x.subTree,x,z,null)};he?U.type.__asyncLoader().then(()=>!x.isUnmounted&&Ee()):Ee()}else{const Ee=x.subTree=ro(x);g(null,Ee,L,G,x,z,ue),U.el=Ee.el}if(se&&sn(se,z),!he&&(Te=v&&v.onVnodeMounted)){const Ee=U;sn(()=>Bn(Te,oe,Ee),z)}(U.shapeFlag&256||oe&&ha(oe.vnode)&&oe.vnode.shapeFlag&256)&&x.a&&sn(x.a,z),x.isMounted=!0,U=L=G=null}},de=x.effect=new Pl(Q,()=>kl(ae),x.scope),ae=x.update=()=>de.run();ae.id=x.uid,Di(x,!0),ae()},K=(x,U,L)=>{U.component=x;const G=x.vnode.props;x.vnode=U,x.next=null,Fm(x,U.props,G,L),Om(x,U.children,L),Gs(),Mc(),Vs()},le=(x,U,L,G,z,ue,fe,Q,de=!1)=>{const ae=x&&x.children,Te=x?x.shapeFlag:0,E=U.children,{patchFlag:v,shapeFlag:N}=U;if(v>0){if(v&128){ce(ae,E,L,G,z,ue,fe,Q,de);return}else if(v&256){me(ae,E,L,G,z,ue,fe,Q,de);return}}N&8?(Te&16&&ye(ae,z,ue),E!==ae&&u(L,E)):Te&16?N&16?ce(ae,E,L,G,z,ue,fe,Q,de):ye(ae,z,ue,!0):(Te&8&&u(L,""),N&16&&X(E,L,G,z,ue,fe,Q,de))},me=(x,U,L,G,z,ue,fe,Q,de)=>{x=x||As,U=U||As;const ae=x.length,Te=U.length,E=Math.min(ae,Te);let v;for(v=0;v<E;v++){const N=U[v]=de?mi(U[v]):Hn(U[v]);g(x[v],N,L,null,z,ue,fe,Q,de)}ae>Te?ye(x,z,ue,!0,!1,E):X(U,L,G,z,ue,fe,Q,de,E)},ce=(x,U,L,G,z,ue,fe,Q,de)=>{let ae=0;const Te=U.length;let E=x.length-1,v=Te-1;for(;ae<=E&&ae<=v;){const N=x[ae],se=U[ae]=de?mi(U[ae]):Hn(U[ae]);if(Ys(N,se))g(N,se,L,null,z,ue,fe,Q,de);else break;ae++}for(;ae<=E&&ae<=v;){const N=x[E],se=U[v]=de?mi(U[v]):Hn(U[v]);if(Ys(N,se))g(N,se,L,null,z,ue,fe,Q,de);else break;E--,v--}if(ae>E){if(ae<=v){const N=v+1,se=N<Te?U[N].el:G;for(;ae<=v;)g(null,U[ae]=de?mi(U[ae]):Hn(U[ae]),L,se,z,ue,fe,Q,de),ae++}}else if(ae>v)for(;ae<=E;)q(x[ae],z,ue,!0),ae++;else{const N=ae,se=ae,oe=new Map;for(ae=se;ae<=v;ae++){const Xe=U[ae]=de?mi(U[ae]):Hn(U[ae]);Xe.key!=null&&oe.set(Xe.key,ae)}let he,Ee=0;const xe=v-se+1;let Ce=!1,Be=0;const et=new Array(xe);for(ae=0;ae<xe;ae++)et[ae]=0;for(ae=N;ae<=E;ae++){const Xe=x[ae];if(Ee>=xe){q(Xe,z,ue,!0);continue}let Ne;if(Xe.key!=null)Ne=oe.get(Xe.key);else for(he=se;he<=v;he++)if(et[he-se]===0&&Ys(Xe,U[he])){Ne=he;break}Ne===void 0?q(Xe,z,ue,!0):(et[Ne-se]=ae+1,Ne>=Be?Be=Ne:Ce=!0,g(Xe,U[Ne],L,null,z,ue,fe,Q,de),Ee++)}const Me=Ce?Gm(et):As;for(he=Me.length-1,ae=xe-1;ae>=0;ae--){const Xe=se+ae,Ne=U[Xe],ze=Xe+1<Te?U[Xe+1].el:G;et[ae]===0?g(null,Ne,L,ze,z,ue,fe,Q,de):Ce&&(he<0||ae!==Me[he]?O(Ne,L,ze,2):he--)}}},O=(x,U,L,G,z=null)=>{const{el:ue,type:fe,transition:Q,children:de,shapeFlag:ae}=x;if(ae&6){O(x.component.subTree,U,L,G);return}if(ae&128){x.suspense.move(U,L,G);return}if(ae&64){fe.move(x,U,L,ke);return}if(fe===ft){i(ue,U,L);for(let E=0;E<de.length;E++)O(de[E],U,L,G);i(x.anchor,U,L);return}if(fe===oo){y(x,U,L);return}if(G!==2&&ae&1&&Q)if(G===0)Q.beforeEnter(ue),i(ue,U,L),sn(()=>Q.enter(ue),z);else{const{leave:E,delayLeave:v,afterLeave:N}=Q,se=()=>i(ue,U,L),oe=()=>{E(ue,()=>{se(),N&&N()})};v?v(ue,se,oe):oe()}else i(ue,U,L)},q=(x,U,L,G=!1,z=!1)=>{const{type:ue,props:fe,ref:Q,children:de,dynamicChildren:ae,shapeFlag:Te,patchFlag:E,dirs:v}=x;if(Q!=null&&nl(Q,null,L,x,!0),Te&256){U.ctx.deactivate(x);return}const N=Te&1&&v,se=!ha(x);let oe;if(se&&(oe=fe&&fe.onVnodeBeforeUnmount)&&Bn(oe,U,x),Te&6)be(x.component,L,G);else{if(Te&128){x.suspense.unmount(L,G);return}N&&Li(x,null,U,"beforeUnmount"),Te&64?x.type.remove(x,U,L,z,ke,G):ae&&(ue!==ft||E>0&&E&64)?ye(ae,U,L,!1,!0):(ue===ft&&E&384||!z&&Te&16)&&ye(de,U,L),G&&pe(x)}(se&&(oe=fe&&fe.onVnodeUnmounted)||N)&&sn(()=>{oe&&Bn(oe,U,x),N&&Li(x,null,U,"unmounted")},L)},pe=x=>{const{type:U,el:L,anchor:G,transition:z}=x;if(U===ft){ve(L,G);return}if(U===oo){T(x);return}const ue=()=>{s(L),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(x.shapeFlag&1&&z&&!z.persisted){const{leave:fe,delayLeave:Q}=z,de=()=>fe(L,ue);Q?Q(x.el,ue,de):de()}else ue()},ve=(x,U)=>{let L;for(;x!==U;)L=d(x),s(x),x=L;s(U)},be=(x,U,L)=>{const{bum:G,scope:z,update:ue,subTree:fe,um:Q}=x;G&&so(G),z.stop(),ue&&(ue.active=!1,q(fe,x,U,L)),Q&&sn(Q,U),sn(()=>{x.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},ye=(x,U,L,G=!1,z=!1,ue=0)=>{for(let fe=ue;fe<x.length;fe++)q(x[fe],U,L,G,z)},Fe=x=>x.shapeFlag&6?Fe(x.component.subTree):x.shapeFlag&128?x.suspense.next():d(x.anchor||x.el),Ie=(x,U,L)=>{x==null?U._vnode&&q(U._vnode,null,null,!0):g(U._vnode||null,x,U,null,null,null,L),Mc(),Td(),U._vnode=x},ke={p:g,um:q,m:O,r:pe,mt:k,mc:X,pc:le,pbc:w,n:Fe,o:n};let ut,Ge;return e&&([ut,Ge]=e(ke)),{render:Ie,hydrate:ut,createApp:Dm(Ie,ut)}}function Di({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function zm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Od(n,e,t=!1){const i=n.children,s=e.children;if(We(i)&&We(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=mi(s[r]),o.el=a.el),t||Od(a,o)),o.type===za&&(o.el=a.el)}}function Gm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const Vm=n=>n.__isTeleport,ft=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),Ji=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),or=[];let Un=null;function ie(n=!1){or.push(Un=n?null:[])}function Wm(){or.pop(),Un=or[or.length-1]||null}let mr=1;function Pc(n){mr+=n}function Bd(n){return n.dynamicChildren=mr>0?Un||As:null,Wm(),mr>0&&Un&&Un.push(n),n}function ge(n,e,t,i,s,r){return Bd(P(n,e,t,i,s,r,!0))}function Lt(n,e,t,i,s){return Bd(Le(n,e,t,i,s,!0))}function il(n){return n?n.__v_isVNode===!0:!1}function Ys(n,e){return n.type===e.type&&n.key===e.key}const Ga="__vInternal",Hd=({key:n})=>n??null,pa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ut(n)||bt(n)||Je(n)?{i:vn,r:n,k:e,f:!!t}:n:null);function P(n,e=null,t=null,i=0,s=null,r=n===ft?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Hd(e),ref:e&&pa(e),scopeId:Oa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vn};return o?(zl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ut(t)?8:16),mr>0&&!a&&Un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Un.push(l),l}const Le=qm;function qm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===um)&&(n=Ji),il(n)){const o=Ti(n,e,!0);return t&&zl(o,t),mr>0&&!r&&Un&&(o.shapeFlag&6?Un[Un.indexOf(n)]=o:Un.push(o)),o.patchFlag|=-2,o}if(n_(n)&&(n=n.__vccOpts),e){e=$m(e);let{class:o,style:l}=e;o&&!Ut(o)&&(e.class=Ht(o)),xt(l)&&(gd(l)&&!We(l)&&(l=Vt({},l)),e.style=Rn(l))}const a=Ut(n)?1:fm(n)?128:Vm(n)?64:xt(n)?4:Je(n)?2:0;return P(n,e,t,i,s,a,r,!0)}function $m(n){return n?gd(n)||Ga in n?Vt({},n):n:null}function Ti(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:a}=n,o=e?zd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Hd(o),ref:e&&e.ref?t&&s?We(s)?s.concat(pa(e)):[s,pa(e)]:pa(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ft?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ti(n.ssContent),ssFallback:n.ssFallback&&Ti(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Xm(n=" ",e=0){return Le(za,null,n,e)}function Ye(n="",e=!1){return e?(ie(),Lt(Ji,null,n)):Le(Ji,null,n)}function Hn(n){return n==null||typeof n=="boolean"?Le(Ji):We(n)?Le(ft,null,n.slice()):typeof n=="object"?mi(n):Le(za,null,String(n))}function mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ti(n)}function zl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),zl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Ga in e)?e._ctx=vn:s===3&&vn&&(vn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:vn},t=32):(e=String(e),i&64?(t=16,e=[Xm(e)]):t=8);n.children=e,n.shapeFlag|=t}function zd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ht([e.class,i.class]));else if(s==="style")e.style=Rn([e.style,i.style]);else if(Pa(s)){const r=e[s],a=i[s];a&&r!==a&&!(We(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Bn(n,e,t,i=null){Fn(n,e,7,[t,i])}const Ym=Dd();let jm=0;function Km(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Ym,r={uid:jm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ud(i,s),emitsOptions:wd(i,s),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:i.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=rm.bind(null,r),n.ce&&n.ce(r),r}let Bt=null;const Zm=()=>Bt||vn;let Gl,rs,Lc="__VUE_INSTANCE_SETTERS__";(rs=Xo()[Lc])||(rs=Xo()[Lc]=[]),rs.push(n=>Bt=n),Gl=n=>{rs.length>1?rs.forEach(e=>e(n)):rs[0](n)};const ks=n=>{Gl(n),n.scope.on()},$i=()=>{Bt&&Bt.scope.off(),Gl(null)};function Gd(n){return n.vnode.shapeFlag&4}let _r=!1;function Jm(n,e=!1){_r=e;const{props:t,children:i}=n.vnode,s=Gd(n);Um(n,t,s,e),Nm(n,i);const r=s?Qm(n,e):void 0;return _r=!1,r}function Qm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Fa(new Proxy(n.ctx,Tm));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?t_(n):null;ks(n),Gs();const r=Mi(i,n,0,[n.props,s]);if(Vs(),$i(),Zf(r)){if(r.then($i,$i),e)return r.then(a=>{Dc(n,a,e)}).catch(a=>{ka(a,n,0)});n.asyncDep=r}else Dc(n,r,e)}else Vd(n,e)}function Dc(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=Sd(e)),Vd(n,t)}let Ic;function Vd(n,e,t){const i=n.type;if(!n.render){if(!e&&Ic&&!i.render){const s=i.template||Bl(n).template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Vt(Vt({isCustomElement:r,delimiters:o},a),l);i.render=Ic(s,c)}}n.render=i.render||Wn}{ks(n),Gs();try{Am(n)}finally{Vs(),$i()}}}function e_(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return un(n,"get","$attrs"),e[t]}}))}function t_(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return e_(n)},slots:n.slots,emit:n.emit,expose:e}}function Va(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Sd(Fa(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ar)return ar[t](n)},has(e,t){return t in e||t in ar}}))}function n_(n){return Je(n)&&"__vccOpts"in n}const Dt=(n,e)=>Qp(n,e,_r);function Gt(n,e,t){const i=arguments.length;return i===2?xt(e)&&!We(e)?il(e)?Le(n,null,[e]):Le(n,e):Le(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&il(t)&&(t=[t]),Le(n,e,t))}const i_=Symbol.for("v-scx"),s_=()=>gt(i_),r_="3.3.8",a_="http://www.w3.org/2000/svg",zi=typeof document<"u"?document:null,Uc=zi&&zi.createElement("template"),o_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?zi.createElementNS(a_,n):zi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>zi.createTextNode(n),createComment:n=>zi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Uc.innerHTML=i?`<svg>${n}</svg>`:n;const o=Uc.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},l_=Symbol("_vtc");function c_(n,e,t){const i=n[l_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Vl=Symbol("_vod"),It={beforeMount(n,{value:e},{transition:t}){n[Vl]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):js(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),js(n,!0),i.enter(n)):i.leave(n,()=>{js(n,!1)}):js(n,e))},beforeUnmount(n,{value:e}){js(n,e)}};function js(n,e){n.style.display=e?n[Vl]:"none"}function u_(n,e,t){const i=n.style,s=Ut(t);if(t&&!s){if(e&&!Ut(e))for(const r in e)t[r]==null&&sl(i,r,"");for(const r in t)sl(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),Vl in n&&(i.display=r)}}const Fc=/\s*!important$/;function sl(n,e,t){if(We(t))t.forEach(i=>sl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=f_(n,e);Fc.test(t)?n.setProperty(zs(i),t.replace(Fc,""),"important"):n[i]=t}}const kc=["Webkit","Moz","ms"],lo={};function f_(n,e){const t=lo[e];if(t)return t;let i=Us(e);if(i!=="filter"&&i in n)return lo[e]=i;i=ed(i);for(let s=0;s<kc.length;s++){const r=kc[s]+i;if(r in n)return lo[e]=r}return e}const Nc="http://www.w3.org/1999/xlink";function d_(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Nc,e.slice(6,e.length)):n.setAttributeNS(Nc,e,t);else{const r=bp(e);t==null||r&&!td(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function h_(n,e,t,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=td(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function p_(n,e,t,i){n.addEventListener(e,t,i)}function m_(n,e,t,i){n.removeEventListener(e,t,i)}const Oc=Symbol("_vei");function __(n,e,t,i,s=null){const r=n[Oc]||(n[Oc]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=g_(e);if(i){const c=r[e]=M_(i,s);p_(n,o,c,l)}else a&&(m_(n,o,a,l),r[e]=void 0)}}const Bc=/(?:Once|Passive|Capture)$/;function g_(n){let e;if(Bc.test(n)){e={};let i;for(;i=n.match(Bc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zs(n.slice(2)),e]}let co=0;const v_=Promise.resolve(),x_=()=>co||(v_.then(()=>co=0),co=Date.now());function M_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Fn(S_(i,t.value),e,5,[i])};return t.value=n,t.attached=x_(),t}function S_(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Hc=/^on[a-z]/,y_=(n,e,t,i,s=!1,r,a,o,l)=>{e==="class"?c_(n,i,s):e==="style"?u_(n,t,i):Pa(e)?Tl(e)||__(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):E_(n,e,i,s))?h_(n,e,i,r,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),d_(n,e,i,s))};function E_(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Hc.test(e)&&Je(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Hc.test(e)&&Ut(t)?!1:e in n}const b_=Vt({patchProp:y_},o_);let zc;function T_(){return zc||(zc=Bm(b_))}const A_=(...n)=>{const e=T_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=w_(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function w_(n){return Ut(n)?document.querySelector(n):n}var C_=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Wd;const Wa=n=>Wd=n,qd=Symbol();function rl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var lr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(lr||(lr={}));function R_(){const n=Cl(!0),e=n.run(()=>Se({}));let t=[],i=[];const s=Fa({install(r){Wa(s),s._a=r,r.provide(qd,s),r.config.globalProperties.$pinia=s,i.forEach(a=>t.push(a)),i=[]},use(r){return!this._a&&!C_?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const $d=()=>{};function Gc(n,e,t,i=$d){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&sd()&&rd(s),s}function as(n,...e){n.slice().forEach(t=>{t(...e)})}const P_=n=>n();function al(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];rl(s)&&rl(i)&&n.hasOwnProperty(t)&&!bt(i)&&!xi(i)?n[t]=al(s,i):n[t]=i}return n}const L_=Symbol();function D_(n){return!rl(n)||!n.hasOwnProperty(L_)}const{assign:pi}=Object;function I_(n){return!!(bt(n)&&n.effect)}function U_(n,e,t,i){const{state:s,actions:r,getters:a}=e,o=t.state.value[n];let l;function c(){o||(t.state.value[n]=s?s():{});const u=yd(t.state.value[n]);return pi(u,r,Object.keys(a||{}).reduce((f,d)=>(f[d]=Fa(Dt(()=>{Wa(t);const m=t._s.get(n);return a[d].call(m,m)})),f),{}))}return l=Xd(n,c,e,t,i,!0),l}function Xd(n,e,t={},i,s,r){let a;const o=pi({actions:{}},t),l={deep:!0};let c,u,f=[],d=[],m;const _=i.state.value[n];!r&&!_&&(i.state.value[n]={}),Se({});let g;function p(X){let M;c=u=!1,typeof X=="function"?(X(i.state.value[n]),M={type:lr.patchFunction,storeId:n,events:m}):(al(i.state.value[n],X),M={type:lr.patchObject,payload:X,storeId:n,events:m});const w=g=Symbol();Ws().then(()=>{g===w&&(c=!0)}),u=!0,as(f,M,i.state.value[n])}const h=r?function(){const{state:M}=t,w=M?M():{};this.$patch(Y=>{pi(Y,w)})}:$d;function b(){a.stop(),f=[],d=[],i._s.delete(n)}function y(X,M){return function(){Wa(i);const w=Array.from(arguments),Y=[],j=[];function ee(Z){Y.push(Z)}function k(Z){j.push(Z)}as(d,{args:w,name:X,store:R,after:ee,onError:k});let $;try{$=M.apply(this&&this.$id===n?this:R,w)}catch(Z){throw as(j,Z),Z}return $ instanceof Promise?$.then(Z=>(as(Y,Z),Z)).catch(Z=>(as(j,Z),Promise.reject(Z))):(as(Y,$),$)}}const T={_p:i,$id:n,$onAction:Gc.bind(null,d),$patch:p,$reset:h,$subscribe(X,M={}){const w=Gc(f,X,M.detached,()=>Y()),Y=a.run(()=>Tt(()=>i.state.value[n],j=>{(M.flush==="sync"?u:c)&&X({storeId:n,type:lr.direct,events:m},j)},pi({},l,M)));return w},$dispose:b},R=Xt(T);i._s.set(n,R);const I=(i._a&&i._a.runWithContext||P_)(()=>i._e.run(()=>(a=Cl()).run(e)));for(const X in I){const M=I[X];if(bt(M)&&!I_(M)||xi(M))r||(_&&D_(M)&&(bt(M)?M.value=_[X]:al(M,_[X])),i.state.value[n][X]=M);else if(typeof M=="function"){const w=y(X,M);I[X]=w,o.actions[X]=M}}return pi(R,I),pi(at(R),I),Object.defineProperty(R,"$state",{get:()=>i.state.value[n],set:X=>{p(M=>{pi(M,X)})}}),i._p.forEach(X=>{pi(R,a.run(()=>X({store:R,app:i._a,pinia:i,options:o})))}),_&&r&&t.hydrate&&t.hydrate(R.$state,_),c=!0,u=!0,R}function ns(n,e,t){let i,s;const r=typeof e=="function";typeof n=="string"?(i=n,s=r?t:e):(s=n,i=n.id);function a(o,l){const c=Im();return o=o||(c?gt(qd,null):null),o&&Wa(o),o=Wd,o._s.has(i)||(r?Xd(i,e,s,o):U_(i,s,o)),o._s.get(i)}return a.$id=i,a}const F_={class:"btnFlame"},k_=qe({__name:"GreenBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(ie(),ge("div",F_,Re(n.inside),1))}}),Ke=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},N_=Ke(k_,[["__scopeId","data-v-826d7761"]]),C={title:"Seventh Dawn",newgame:"NEW GAME",loadgame:"LOAD GAME",textYes:"YES",textNo:"NO",strLog1:"GENERAL",strLog2:"BATTLE",statusOpening:"OPENING",statusTown:"TOWN",statusDungeon:"DUNGEON",processSearch:"SEARCH",processBattle:"BATTLE",processGuild:"GUILD",menuAddMember:"Add a Member",menuRemoveMember:"Remove Member",processInn:"INN",processPub:"PUB",processChurch:"CHURCH",processSmith:"SMITH",processEquipShop:"EQUPMENT SHOP",processItemShop:"ITEM SHOP",nameDungeon1:"Forest of Envy",nameDungeon2:"Swamp of Gluttony",nameDungeon3:"Desert of Sloth",nameDungeon4:"Volcano of Wrath",nameDungeon5:"Cave of Greed",nameDungeon6:"Palace of Lust",nameDungeon7:"Tower of Pride",mainChaid:1,clsSamurai:"Samurai",clsHolyKnight:"HolyKnight",clsPriest:"Priest",clsArcher:"Archer",MapWidth:100,MapHeight:100,MapWall:0,MapRoom:1,MapRoad:2,SetDoorUp:11,SetDoorUnder:12,SetDoorLeft:13,SetDoorRight:14,roomMinHeight:5,roomMaxHeight:15,roomMinWidth:5,roomMaxWidth:15,RoomCountMin:10,RoomCountMax:20,BlockSize:10,BlockHeight:15,meetPointCount:2,MiniHeight:300,MiniWallColor:"#02040F",MiniRoomColor:"#C2B8B2",MiniMoveColor:"#197BBD",MiniPlayerColor:"#CBEF43",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",TurnLeft:"TurnLeft",TurnRight:"TurnRight",encountMin:1,encountMax:5,encountLimit:100,monNumMin:1,monNumMax:6,minEffectTop:20,maxEffectTop:40,minEffectLeft:30,maxEffectLeft:50,initHitRate:70,monsterHitRate:75,normalDamageRate:1,critDamageRate:1.5,effectTime:1e3,normalAttackTime:400,monsterAttackTime:500,delayTime:100,awaitTime:1500,nextTime:500,strAttack:"Attack",strSkill:"Skill",strMagic:"Magic",strAtk:"ATK",strMgc:"MGC",strMiss:"MISS",mscTitle:"maou_bgm_orchestra18",mscTown:"maou_bgm_acoustic36",mscDungeon1:"maou_bgm_fantasy01",mscBattle1:"Bite_the_Bullet",mscBattle2:"maou_bgm_fantasy15",mscBattle3:"maou_bgm_orchestra12",mscBattle4:"Strike_the_Despair",mscBattle5:"Integral-one",logEnterDungeon:"Enter the dungeon",logMonsterEncounter:"Monster Encounter",msgInGame1:"Please turn the screen horizontally.",msgInGame2:"Music plays in this game.",msgAddParty1:"Do you add ",msgAddParty2:" to your party?",msgRemoveParty1:"Do you remove ",msgRemoveParty2:" from the party?",msgAddPartyError:"The party is full. Please remove someone.",msgRemovePartyError:"This character cannot remove from party.",msgSkillCostError:"Skill cost limit error test12345678901234567890"},$n=ns("status",{state:()=>({status:C.statusOpening,processTown:C.statusTown,processDungeon:C.processSearch,guildMenu:"",whichDungeon:"",musicDungeon:""})}),yr=ns("audio",{state:()=>({currentBgm:null,audioElements:{}}),actions:{playBgm(n){this.currentBgm&&this.audioElements[this.currentBgm].pause(),this.audioElements[n]||(this.audioElements[n]=new Audio(`music/bgm/${n}.mp3`),this.audioElements[n].loop=!0),this.audioElements[n].play(),this.currentBgm=n},playSfx(n){new Audio(require(`music/se/${n}.mp3`)).play()}}}),O_=n=>(kn("data-v-c958c814"),n=n(),Nn(),n),B_=O_(()=>P("div",{class:"enter"},"ENTER THE CLICK",-1)),H_=[B_],z_={key:1,class:"background"},G_={class:"title"},V_=qe({__name:"Opening",setup(n){const e=$n(),t=yr(),i=Se(!1);ts(()=>{window.innerHeight>window.innerWidth&&(window.onload=()=>{alert(C.msgInGame1)}),window.onload=()=>{alert(C.msgInGame2)}});function s(){i.value=!0,t.playBgm(C.mscTitle)}function r(){e.status=C.statusTown,e.processTown=C.statusTown}return(a,o)=>i.value?(ie(),ge("div",z_,[P("div",G_,Re(re(C).title),1),Le(N_,{class:"btnCard",id:"btn2",inside:re(C).newgame,onClick:o[0]||(o[0]=l=>r())},null,8,["inside"])])):(ie(),ge("div",{key:0,class:"background",onClick:s},H_))}}),W_=Ke(V_,[["__scopeId","data-v-c958c814"]]);/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const Ct={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Vc={itemsToShow:{default:Ct.itemsToShow,type:Number},itemsToScroll:{default:Ct.itemsToScroll,type:Number},wrapAround:{default:Ct.wrapAround,type:Boolean},throttle:{default:Ct.throttle,type:Number},snapAlign:{default:Ct.snapAlign,validator(n){return["start","end","center","center-even","center-odd"].includes(n)}},transition:{default:Ct.transition,type:Number},breakpoints:{default:Ct.breakpoints,type:Object},autoplay:{default:Ct.autoplay,type:Number},pauseAutoplayOnHover:{default:Ct.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:Ct.mouseDrag,type:Boolean},touchDrag:{default:Ct.touchDrag,type:Boolean},dir:{default:Ct.dir,validator(n){return["rtl","ltr"].includes(n)}},i18n:{default:Ct.i18n,type:Object},settings:{default(){return{}},type:Object}};function q_({config:n,slidesCount:e}){const{snapAlign:t,wrapAround:i,itemsToShow:s=1}=n;if(i)return Math.max(e-1,0);let r;switch(t){case"start":r=e-s;break;case"end":r=e-1;break;case"center":case"center-odd":r=e-Math.ceil((s-.5)/2);break;case"center-even":r=e-Math.ceil(s/2);break;default:r=0;break}return Math.max(r,0)}function $_({config:n,slidesCount:e}){const{wrapAround:t,snapAlign:i,itemsToShow:s=1}=n;let r=0;if(t||s>e)return r;switch(i){case"start":r=0;break;case"end":r=s-1;break;case"center":case"center-odd":r=Math.floor((s-1)/2);break;case"center-even":r=Math.floor((s-2)/2);break;default:r=0;break}return r}function ol({val:n,max:e,min:t}){return e<t?n:Math.min(Math.max(n,t),e)}function X_({config:n,currentSlide:e,slidesCount:t}){const{snapAlign:i,wrapAround:s,itemsToShow:r=1}=n;let a=e;switch(i){case"center":case"center-odd":a-=(r-1)/2;break;case"center-even":a-=(r-2)/2;break;case"end":a-=r-1;break}return s?a:ol({val:a,max:t-r,min:0})}function Yd(n){return n?n.reduce((e,t)=>{var i;return t.type===ft?[...e,...Yd(t.children)]:((i=t.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...e,t]:e},[]):[]}function ya({val:n,max:e,min:t=0}){return n>e?ya({val:n-(e+1),max:e,min:t}):n<t?ya({val:n+(e+1),max:e,min:t}):n}function Y_(n,e){let t;return e?function(...i){const s=this;t||(n.apply(s,i),t=!0,setTimeout(()=>t=!1,e))}:n}function j_(n,e){let t;return function(...i){t&&clearTimeout(t),t=setTimeout(()=>{n(...i),t=null},e)}}function jd(n="",e={}){return Object.entries(e).reduce((t,[i,s])=>t.replace(`{${i}}`,String(s)),n)}var K_=qe({name:"ARIA",setup(){const n=gt("config",Xt(Object.assign({},Ct))),e=gt("currentSlide",Se(0)),t=gt("slidesCount",Se(0));return()=>Gt("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},jd(n.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:t.value}))}}),Z_=qe({name:"Carousel",props:Vc,setup(n,{slots:e,emit:t,expose:i}){var s;const r=Se(null),a=Se([]),o=Se(0),l=Se(0),c=Xt(Object.assign({},Ct));let u=Object.assign({},Ct),f;const d=Se((s=n.modelValue)!==null&&s!==void 0?s:0),m=Se(0),_=Se(0),g=Se(0),p=Se(0);let h,b;yn("config",c),yn("slidesCount",l),yn("currentSlide",d),yn("maxSlide",g),yn("minSlide",p),yn("slideWidth",o);function y(){f=Object.assign({},n.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),n),{i18n:Object.assign(Object.assign({},u.i18n),n.i18n),breakpoints:void 0}),R(u)}function T(){if(!f||!Object.keys(f).length)return;const L=Object.keys(f).map(z=>Number(z)).sort((z,ue)=>+ue-+z);let G=Object.assign({},u);L.some(z=>{const ue=window.matchMedia(`(min-width: ${z}px)`).matches;return ue&&(G=Object.assign(Object.assign({},G),f[z])),ue}),R(G)}function R(L){Object.entries(L).forEach(([G,z])=>c[G]=z)}const F=j_(()=>{T(),I()},16);function I(){if(!r.value)return;const L=r.value.getBoundingClientRect();o.value=L.width/c.itemsToShow}function X(){l.value<=0||(_.value=Math.ceil((l.value-1)/2),g.value=q_({config:c,slidesCount:l.value}),p.value=$_({config:c,slidesCount:l.value}),c.wrapAround||(d.value=ol({val:d.value,max:g.value,min:p.value})))}ts(()=>{Ws(()=>I()),setTimeout(()=>I(),1e3),T(),ce(),window.addEventListener("resize",F,{passive:!0}),t("init")}),Ol(()=>{b&&clearTimeout(b),h&&clearInterval(h),window.removeEventListener("resize",F,{passive:!0})});let M=!1;const w={x:0,y:0},Y={x:0,y:0},j=Xt({x:0,y:0}),ee=Se(!1),k=Se(!1),$=()=>{ee.value=!0},Z=()=>{ee.value=!1};function K(L){["INPUT","TEXTAREA","SELECT"].includes(L.target.tagName)||(M=L.type==="touchstart",M||L.preventDefault(),!(!M&&L.button!==0||q.value)&&(w.x=M?L.touches[0].clientX:L.clientX,w.y=M?L.touches[0].clientY:L.clientY,document.addEventListener(M?"touchmove":"mousemove",le,!0),document.addEventListener(M?"touchend":"mouseup",me,!0)))}const le=Y_(L=>{k.value=!0,Y.x=M?L.touches[0].clientX:L.clientX,Y.y=M?L.touches[0].clientY:L.clientY;const G=Y.x-w.x,z=Y.y-w.y;j.y=z,j.x=G},c.throttle);function me(){const L=c.dir==="rtl"?-1:1,G=Math.sign(j.x)*.4,z=Math.round(j.x/o.value+G)*L;if(z&&!M){const ue=fe=>{fe.stopPropagation(),window.removeEventListener("click",ue,!0)};window.addEventListener("click",ue,!0)}pe(d.value-z),j.x=0,j.y=0,k.value=!1,document.removeEventListener(M?"touchmove":"mousemove",le,!0),document.removeEventListener(M?"touchend":"mouseup",me,!0)}function ce(){!c.autoplay||c.autoplay<=0||(h=setInterval(()=>{c.pauseAutoplayOnHover&&ee.value||ve()},c.autoplay))}function O(){h&&(clearInterval(h),h=null),ce()}const q=Se(!1);function pe(L){const G=c.wrapAround?L:ol({val:L,max:g.value,min:p.value});d.value===G||q.value||(t("slide-start",{slidingToIndex:L,currentSlideIndex:d.value,prevSlideIndex:m.value,slidesCount:l.value}),q.value=!0,m.value=d.value,d.value=G,b=setTimeout(()=>{if(c.wrapAround){const z=ya({val:G,max:g.value,min:0});z!==d.value&&(d.value=z,t("loop",{currentSlideIndex:d.value,slidingToIndex:L}))}t("update:modelValue",d.value),t("slide-end",{currentSlideIndex:d.value,prevSlideIndex:m.value,slidesCount:l.value}),q.value=!1,O()},c.transition))}function ve(){pe(d.value+c.itemsToScroll)}function be(){pe(d.value-c.itemsToScroll)}const ye={slideTo:pe,next:ve,prev:be};yn("nav",ye),yn("isSliding",q);const Fe=Dt(()=>X_({config:c,currentSlide:d.value,slidesCount:l.value}));yn("slidesToScroll",Fe);const Ie=Dt(()=>{const L=c.dir==="rtl"?-1:1,G=Fe.value*o.value*L;return{transform:`translateX(${j.x-G}px)`,transition:`${q.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${l.value*o.value}px`:"",width:"100%"}});function ke(){y(),T(),X(),I(),O()}Object.keys(Vc).forEach(L=>{["modelValue"].includes(L)||Tt(()=>n[L],ke)}),Tt(()=>n.modelValue,L=>{L!==d.value&&pe(Number(L))}),Tt(l,X),t("before-init"),y();const ut={config:c,slidesCount:l,slideWidth:o,next:ve,prev:be,slideTo:pe,currentSlide:d,maxSlide:g,minSlide:p,middleSlide:_};i({updateBreakpointsConfigs:T,updateSlidesData:X,updateSlideWidth:I,initDefaultConfigs:y,restartCarousel:ke,slideTo:pe,next:ve,prev:be,nav:ye,data:ut});const Ge=e.default||e.slides,x=e.addons,U=Xt(ut);return()=>{const L=Yd(Ge==null?void 0:Ge(U)),G=(x==null?void 0:x(U))||[];L.forEach((Q,de)=>Q.props.index=de);let z=L;if(c.wrapAround){const Q=L.map((ae,Te)=>Ti(ae,{index:-L.length+Te,isClone:!0,key:`clone-before-${Te}`})),de=L.map((ae,Te)=>Ti(ae,{index:L.length+Te,isClone:!0,key:`clone-after-${Te}`}));z=[...Q,...L,...de]}a.value=L,l.value=Math.max(L.length,1);const ue=Gt("ol",{class:"carousel__track",style:Ie.value,onMousedownCapture:c.mouseDrag?K:null,onTouchstartPassiveCapture:c.touchDrag?K:null},z),fe=Gt("div",{class:"carousel__viewport"},ue);return Gt("section",{ref:r,class:{carousel:!0,"is-sliding":q.value,"is-dragging":k.value,"is-hover":ee.value,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":c.i18n.ariaGallery,tabindex:"0",onMouseenter:$,onMouseleave:Z},[fe,G,Gt(K_)])}}}),ll;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(ll||(ll={}));const J_={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function Q_(n){return n in ll}const cl=n=>{const e=gt("config",Xt(Object.assign({},Ct))),t=String(n.name),i=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!Q_(t))return;const s=J_[t],r=Gt("path",{d:s}),a=e.i18n[i]||n.title||t,o=Gt("title",a);return Gt("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":a},[o,r])};cl.props={name:String,title:String};const eg=(n,{slots:e,attrs:t})=>{const{next:i,prev:s}=e||{},r=gt("config",Xt(Object.assign({},Ct))),a=gt("maxSlide",Se(1)),o=gt("minSlide",Se(1)),l=gt("currentSlide",Se(1)),c=gt("nav",{}),{dir:u,wrapAround:f,i18n:d}=r,m=u==="rtl",_=Gt("button",{type:"button",class:["carousel__prev",!f&&l.value<=o.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":d.ariaPreviousSlide,onClick:c.prev},(s==null?void 0:s())||Gt(cl,{name:m?"arrowRight":"arrowLeft"})),g=Gt("button",{type:"button",class:["carousel__next",!f&&l.value>=a.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":d.ariaNextSlide,onClick:c.next},(i==null?void 0:i())||Gt(cl,{name:m?"arrowLeft":"arrowRight"}));return[_,g]},tg=()=>{const n=gt("config",Xt(Object.assign({},Ct))),e=gt("maxSlide",Se(1)),t=gt("minSlide",Se(1)),i=gt("currentSlide",Se(1)),s=gt("nav",{}),r=o=>ya({val:i.value,max:e.value,min:0})===o,a=[];for(let o=t.value;o<e.value+1;o++){const l=Gt("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(o)},"aria-label":jd(n.i18n.ariaNavigateToSlide,{slideNumber:o+1}),onClick:()=>s.slideTo(o)}),c=Gt("li",{class:"carousel__pagination-item",key:o},l);a.push(c)}return Gt("ol",{class:"carousel__pagination"},a)};var ng=qe({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(n,{slots:e}){const t=gt("config",Xt(Object.assign({},Ct))),i=gt("currentSlide",Se(0)),s=gt("slidesToScroll",Se(0)),r=gt("isSliding",Se(!1)),a=()=>n.index===i.value,o=()=>n.index===i.value-1,l=()=>n.index===i.value+1,c=()=>{const u=Math.floor(s.value),f=Math.ceil(s.value+t.itemsToShow-1);return n.index>=u&&n.index<=f};return()=>{var u;return Gt("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":c(),"carousel__slide--active":a(),"carousel__slide--prev":o(),"carousel__slide--next":l(),"carousel__slide--sliding":r.value},"aria-hidden":!c()},(u=e.default)===null||u===void 0?void 0:u.call(e))}}});const ig=[{cha_id:1,name:"Ace",class:"Samurai",faceGraphicUrl:"img/character/chara1face.png",poseGraphicUrl:"img/character/chara1.png",backgroundUrl:"img/character/chara1back.jpg",LV:10,exp:50,nextLvExp:100,HP:220,MP:80,ATK:70,MGC:30,DEF:50,MDF:40,DEX:60,SPD:50,Slash:10,Hit:10,Stab:0,Fire:10,Water:0,Earth:10,Wind:0,Light:0,Dark:0,equipment:{WEP:103,ARM:1003,ACC:2001},activeSkill:[101,102,103,104,105,106],passiveCost:40,passiveSkill:[1,2,3,4],equipSkill:[1,3]},{cha_id:2,name:"Sophia",class:"Holy Knight",faceGraphicUrl:"img/character/chara2face.png",poseGraphicUrl:"img/character/chara2.png",backgroundUrl:"img/character/chara2back.jpg",LV:10,exp:50,nextLvExp:1e3,HP:250,MP:100,ATK:50,MGC:40,DEF:60,MDF:60,DEX:50,SPD:50,Slash:10,Hit:10,Stab:10,Fire:0,Water:0,Earth:10,Wind:0,Light:10,Dark:0,equipment:{WEP:101,ARM:1002,ACC:2101},activeSkill:[201,202,203,204,205],passiveCost:40,passiveSkill:[2,3,4,5],equipSkill:[2,5]},{cha_id:3,name:"Miroku",class:"Priest",faceGraphicUrl:"img/character/chara3face.png",poseGraphicUrl:"img/character/chara3.png",backgroundUrl:"img/character/chara3back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:200,MP:150,ATK:40,MGC:60,DEF:40,MDF:60,DEX:40,SPD:40,Slash:0,Hit:0,Stab:0,Fire:0,Water:10,Earth:0,Wind:0,Light:10,Dark:0,equipment:{WEP:501,ARM:1201,ACC:2201},activeSkill:[301,302,303,304,305],passiveCost:40,passiveSkill:[5,6,7,8],equipSkill:[5,7]},{cha_id:4,name:"Diana",class:"Archer",faceGraphicUrl:"img/character/chara4face.png",poseGraphicUrl:"img/character/chara4.png",backgroundUrl:"img/character/chara4back.jpg",LV:10,exp:500,nextLvExp:1e3,HP:180,MP:150,ATK:60,MGC:30,DEF:40,MDF:40,DEX:60,SPD:60,Slash:0,Hit:0,Stab:10,Fire:0,Water:0,Earth:0,Wind:10,Light:0,Dark:10,equipment:{WEP:401,ARM:1301,ACC:2001},activeSkill:[401,402,403,404,405],passiveCost:40,passiveSkill:[4,7,8,9],equipSkill:[4,9]},{cha_id:5,name:"Perseus",class:"Warrior",faceGraphicUrl:"img/character/chara5face.png",poseGraphicUrl:"img/character/chara5.png",backgroundUrl:"img/character/chara5back.jpg",LV:10,exp:50,nextLvExp:1e3,HP:250,MP:50,ATK:65,MGC:20,DEF:55,MDF:40,DEX:40,SPD:30,Slash:10,Hit:10,Stab:10,Fire:0,Water:0,Earth:20,Wind:0,Light:10,Dark:0,equipment:{WEP:601,ARM:1001,ACC:2101},activeSkill:[501,502,503,504,505,506],passiveCost:40,passiveSkill:[1,2,3,4],equipSkill:[1,4]},{cha_id:6,name:"Nyx",class:"Witch",faceGraphicUrl:"img/character/chara6face.png",poseGraphicUrl:"img/character/chara6.png",backgroundUrl:"img/character/chara6back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:150,MP:200,ATK:30,MGC:80,DEF:30,MDF:70,DEX:40,SPD:40,Slash:0,Hit:0,Stab:0,Fire:20,Water:0,Earth:0,Wind:20,Light:0,Dark:10,equipment:{WEP:502,ARM:1201,ACC:2301},activeSkill:[601,602,603,604,605],passiveCost:40,passiveSkill:[9,10,11,12],equipSkill:[8,9]},{cha_id:7,name:"Raven",class:"Assassin",faceGraphicUrl:"img/character/chara7face.png",poseGraphicUrl:"img/character/chara7.png",backgroundUrl:"img/character/chara7back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:180,MP:80,ATK:70,MGC:30,DEF:40,MDF:40,DEX:80,SPD:80,Slash:20,Hit:20,Stab:20,Fire:0,Water:0,Earth:0,Wind:0,Light:0,Dark:20,equipment:{WEP:201,ARM:1301,ACC:2001},activeSkill:[701,702,703,704,705,706],passiveCost:40,passiveSkill:[13,14,15,16],equipSkill:[10,11]}],sg=[{skill_id:1,name:"Master Of Swords",info:"When equipped with a sword, physical attack power and accuracy increase.",skill_cost:10,condition:{equipment:"WEP",kind:"sword"},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:20,target:1},{effect_type:1,effect_target:"DEX",effect_amount:10,target:1}]},{skill_id:2,name:"Body Of Steel",info:"When HP is below 50%, physical defense and magic defense increase.",skill_cost:15,condition:{character:"nowHP",under:.5},effect_number:2,skill_effect:[{effect_type:1,effect_target:"DEF",effect_amount:30,target:1},{effect_type:1,effect_target:"MDF",effect_amount:30,target:1}]},{skill_id:3,name:"Flame Blade",info:"Deals additional fire damage when attacking.",skill_cost:20,condition:{attack:.3},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:50,target:4}]},{skill_id:4,name:"Fighting Spirit",info:"When HP is below 20%, attack power and speed increase.",skill_cost:25,condition:{character:"nowHP",under:.2},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:50,target:1},{effect_type:1,effect_target:"SPD",effect_amount:50,target:1}]},{skill_id:5,name:"Ready To Counterattack",info:"被ダメージ時に確率で反撃する",skill_cost:30,condition:{counter:.3},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:100,target:4}]},{skill_id:6,name:"Divine Protection",info:"常にHPが少しずつ回復する",skill_cost:10,condition:[],effect_number:1,skill_effect:[{effect_type:9,effect_target:"HP",effect_amount:10,target:1}]},{skill_id:7,name:"God's Wrath",info:"HPが50%以下の時、聖属性の追加ダメージを与える",skill_cost:100,condition:{character:"nowHP",under:.5},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:50,target:4}]},{skill_id:8,name:"God's Mercy",info:"HPが10%以下の時、完全回復する",skill_cost:20,condition:{character:"nowHP",under:.1},effect_number:1,skill_effect:[{effect_type:9,effect_target:"HP",effect_amount:0,target:1}]},{skill_id:9,name:"Power Of God",info:"2ターンの間、自分の攻撃力と防御力を上げる",skill_cost:25,condition:{underturns:2},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:30,target:1},{effect_type:1,effect_target:"DEF",effect_amount:30,target:1}]}];class Kd{constructor(e){Ue(this,"skill_id");Ue(this,"name");Ue(this,"info");Ue(this,"skill_cost");Ue(this,"condition");Ue(this,"effect_number");Ue(this,"skill_effect");Ue(this,"equip");this.skill_id=e.skill_id,this.name=e.name,this.info=e.info,this.skill_cost=e.skill_cost,this.condition=e.condition,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect,this.equip=!1}}const Zd=sg.map(n=>new Kd(n)),rg=[{eqp_id:101,type:"WEP",kind:"Sword",attribute:1,name:"Sword",status:{ATK:10,HitRate:90}},{eqp_id:102,type:"WEP",kind:"Sword",attribute:1,name:"LongSword",status:{ATK:15,HitRate:90}},{eqp_id:103,type:"WEP",kind:"Sword",attribute:1,name:"Katana",status:{ATK:12,DEX:3,HitRate:90}},{eqp_id:110,type:"WEP",kind:"Sword",attribute:1,name:"x-Cariver",status:{ATK:100,HitRate:90,Earth:50}},{eqp_id:201,type:"WEP",kind:"Dagger",attribute:1,name:"Dagger",status:{ATK:5,DEX:5,HitRate:95}},{eqp_id:301,type:"WEP",kind:"Spear",attribute:1,name:"Spear",status:{ATK:12,HitRate:90}},{eqp_id:401,type:"WEP",kind:"Bow",attribute:3,name:"Bow",status:{ATK:5,DEX:5,HitRate:90}},{eqp_id:402,type:"WEP",kind:"Bow",attribute:7,name:"Artemis",status:{ATK:50,DEX:50,HitRate:100,Wind:50}},{eqp_id:501,type:"WEP",kind:"Wand",attribute:2,name:"Staff",status:{ATK:5,MGC:5,HitRate:85}},{eqp_id:502,type:"WEP",kind:"Wand",attribute:2,name:"Wand",status:{MGC:10,HitRate:85}},{eqp_id:510,type:"WEP",kind:"Wand",attribute:2,name:"WaWaWand",status:{MGC:100,HitRate:85,Dark:50}},{eqp_id:601,type:"WEP",kind:"Axe",attribute:1,name:"Axe",status:{ATK:15,HitRate:80}},{eqp_id:1001,type:"ARM",kind:"Armor",attribute:0,name:"Armor",status:{DEF:5,MDF:5,SPD:-5}},{eqp_id:1002,type:"ARM",kind:"Armor",attribute:0,name:"Plate Armor",status:{DEF:10,MDF:5,SPD:-10}},{eqp_id:1003,type:"ARM",kind:"Armor",attribute:0,name:"Leather Armor",status:{DEF:5,MDF:5}},{eqp_id:1020,type:"ARM",kind:"Armor",attribute:0,name:"12Armor",status:{DEF:50,MDF:50,Slash:20,Hit:20,Stab:20}},{eqp_id:1101,type:"ARM",kind:"Shield",attribute:0,name:"Shield",status:{DEF:7,MDF:3}},{eqp_id:1110,type:"ARM",kind:"Shield",attribute:0,name:"TRXShield",status:{DEF:70,MDF:30,Earth:50}},{eqp_id:1201,type:"ARM",kind:"Robe",attribute:0,name:"Robe",status:{DEF:3,MDF:7}},{eqp_id:1210,type:"ARM",kind:"Robe",attribute:8,name:"EngelRobe",status:{DEF:40,MDF:60,Light:100}},{eqp_id:1301,type:"ARM",kind:"Cloth",attribute:0,name:"Cloth",status:{DEF:4,MDF:4}},{eqp_id:1321,type:"ARM",kind:"Cloth",attribute:9,name:"NinjaSuits",status:{DEF:30,MDF:30,DEX:30,SPD:10,Dark:50}},{eqp_id:2001,type:"ACC",kind:"Bangle",attribute:0,name:"Bangle",status:{ATK:5}},{eqp_id:2101,type:"ACC",kind:"Ring",attribute:0,name:"Ring",status:{DEF:5}},{eqp_id:2151,type:"ACC",kind:"Ring",attribute:9,name:"DevilRing",status:{ATK:50,MDF:-50,Dark:100}},{eqp_id:2201,type:"ACC",kind:"Neckless",attribute:0,name:"Neckless",status:{MDF:5}},{eqp_id:2301,type:"ACC",kind:"Amulet",attribute:0,name:"Amulet",status:{MGC:5}},{eqp_id:2451,type:"ACC",kind:"Belt",attribute:0,name:"RiderBelt",status:{HP:100,MP:50,ATK:30,MGC:10,DEF:30,MDF:30,DEX:30,SPD:10,Fire:30,Water:30,Earth:30,Wind:30}},{eqp_id:2551,type:"ACC",kind:"cape",attribute:8,name:"HolyBless",status:{MP:100,MGC:50,DEF:20,MDF:50,Light:100}}];class ag{constructor(e){Ue(this,"eqp_id");Ue(this,"type");Ue(this,"kind");Ue(this,"attribute");Ue(this,"name");Ue(this,"status");this.eqp_id=e.eqp_id,this.type=e.type,this.kind=e.kind,this.attribute=e.attribute,this.name=e.name,this.status=e.status}}const cr=rg.map(n=>new ag(n)),og=[{skill_id:101,name:"Zan",info:"A basic sword attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/zan.gif",anime_time:700}]},{skill_id:102,name:"Suienzan",info:"A swift sword attack that deals physical damage to one enemy.",attribute:5,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:2,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/suienzan.gif",anime_time:1050}]},{skill_id:103,name:"Kishouzan",info:"A sword attack that deals physical damage to one enemy and heals the user.",attribute:9,interval:3,consume_type:"HP",consume_amount:10,effect_number:2,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/kishouzan1.gif",anime_time:480},{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:.5,target:1,target_type:"myself",skill_anime:"effect/skill/samurai/kishouzan2.gif",anime_time:700}]},{skill_id:104,name:"Oukazan",info:"A powerful sword attack that deals physical damage to one enemies.",attribute:1,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",effect_amount:1.3,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/oukazan.gif",anime_time:1200}]},{skill_id:105,name:"Hienzan",info:"A powerful sword attack that deals physical damage to one row of enemies.",attribute:4,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/samurai/hienzan.gif",anime_time:1e3}]},{skill_id:106,name:"Ryuuhasuizan",info:"A element sword attack that deals water damage to all enemies.",attribute:5,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"allEnemy",skill_anime:"effect/skill/samurai/ryuuhasuizan.gif",anime_time:1500}]},{skill_id:201,name:"Holy Strike",info:"A holy sword attack that deals light damage to one enemy and reduces their dark resistance.",attribute:8,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.4,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/holyknight/holy_strike.gif",anime_time:930}]},{skill_id:202,name:"Heal",info:"A healing spell that restores HP to one ally.",attribute:10,interval:1,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:1,target:1,target_type:"oneFriend",skill_anime:"effect/skill/holyknight/heal.gif",anime_time:740}]},{skill_id:203,name:"Holy Shield",info:"A protective spell that increases the physical and magical defense of one ally for a few turns.",attribute:8,interval:2,consume_type:"MP",consume_amount:15,effect_number:2,skill_effect:[{effect_type:"buff",effect_kind:"DEF",effect_times:3,base_status:"MGC",effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"effect/skill/holyknight/holy_shield.gif",anime_time:750},{effect_type:"buff",effect_kind:"MDF",effect_times:3,base_status:"MGC",effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"",anime_time:0}]},{skill_id:204,name:"Holy Light",info:"A radiant spell that deals light damage to all enemies and heals all allies.",attribute:8,interval:3,consume_type:"MP",consume_amount:20,effect_number:2,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1,target:2,target_type:"allEnemy",skill_anime:"effect/skill/holyknight/holy_light.gif",anime_time:1040},{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:.5,target:1,target_type:"allFriends",skill_anime:"",anime_time:0}]},{skill_id:205,name:"Divine Judgment",info:"A supreme spell that deals massive light damage to one enemy and has a chance to inflict instant death.",attribute:8,interval:4,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:2.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/holyknight/divine_judgment.gif",anime_time:1680}]},{skill_id:206,name:"Blaze Slash",info:"A fiery sword attack that deals fire damage to all enemies.",attribute:4,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"allEnemy",skill_anime:"effect/skill/samura/blaze_slash.gif",anime_time:1e3}]},{skill_id:301,name:"Pray",info:"A simple prayer that restores a small amount of MP to the user.",attribute:10,interval:1,consume_type:"HP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowMP",effect_times:1,base_status:"MGC",effect_amount:.2,target:1,target_type:"myself",skill_anime:"effect/skill/priest/pray.gif",anime_time:980}]},{skill_id:302,name:"Cure",info:"A healing spell that restores HP to one ally and removes one negative status effect.",attribute:10,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:.8,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/cure.gif",anime_time:1050}]},{skill_id:303,name:"Bless",info:"A holy spell that increases the luck of one ally for a few turns.",attribute:8,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"buff",effect_kind:"LUK",effect_times:3,base_status:"MGC",effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/bless.gif",anime_time:1040}]},{skill_id:304,name:"Regen",info:"A healing spell that restores HP to all allies gradually for a few turns.",attribute:10,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"condition",effect_kind:"regeneration",effect_times:3,base_status:"MGC",effect_amount:.3,target:1,target_type:"allFriends",skill_anime:"effect/skill/priest/regen.gif",anime_time:2080}]},{skill_id:305,name:"Resurrect",info:"A miracle spell that revives one fallen ally with some HP.",attribute:10,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"revive",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:.5,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/resurrect.gif",anime_time:1470}]},{skill_id:401,name:"Arrow Shot",info:"A basic bow attack that deals physical damage to one enemy.",attribute:0,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/arrow_shot.gif",anime_time:480}]},{skill_id:402,name:"Multi Shot",info:"A bow attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:4,base_status:"ATK",effect_amount:.8,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/archar/multi_shot.gif",anime_time:1600}]},{skill_id:403,name:"Piercing Shot",info:"A bow attack that deals physical damage to one column of enemies and ignores their defense.",attribute:0,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"columnEnemy",skill_anime:"effect/skill/archar/piercing_shot.gif",anime_time:880}]},{skill_id:404,name:"Poison Shot",info:"A bow attack that deals physical damage to one enemy and has a chance to inflict poison status for a few turns.",attribute:0,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/poison_shot.gif",anime_time:720}]},{skill_id:405,name:"Explosive Shot",info:"A bow attack that deals fire damage to one enemy and causes an explosion that damages nearby enemies.",attribute:4,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:2.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/explosive_shot.gif",anime_time:1400}]},{skill_id:501,name:"Wild Strike",info:"A strike attack with a weapon that deals physical damage to one enemy.",attribute:2,interval:1.5,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/wild_strike.gif",anime_time:500}]},{skill_id:502,name:"Heavy Strike",info:"A strike attack with a weapon that deals physical damage to one enemy and stun target.",attribute:2,interval:1.5,consume_type:"MP",consume_amount:8,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/heavy_strike.gif",anime_time:500}]},{skill_id:503,name:"Double Slash",info:"A swift sword attack that deals physical damage to one enemy twice.",attribute:1,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/double_slash.gif",anime_time:800}]},{skill_id:504,name:"Tornado Slash",info:"A fierce slash like a tornado that deals damage to row enemies.",attribute:1,interval:2.5,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"ATK",effect_amount:.5,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/warrior/tornado_slash.gif",anime_time:900}]},{skill_id:505,name:"Explosive Strike",info:"A furious weapons blows attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:3,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:8,base_status:"ATK",effect_amount:.5,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/warrior/explosive_strike.gif",anime_time:1600}]},{skill_id:506,name:"Gale Road",info:"A attack that deals damage to all enemies.",attribute:5,interval:2.5,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.8,target:2,target_type:"allEnemy",skill_anime:"effect/skill/warrior/gale_road.gif",anime_time:1300}]},{skill_id:601,name:"Pillar Fire",info:"A magic fire attack that deals damage to one enemy.",attribute:4,interval:2,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/witch/PillarFire.gif",anime_time:1e3}]},{skill_id:602,name:"Windlash",info:"A magical wind blade that deals magical damage to one row of enemies.",attribute:7,interval:3,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:1.2,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/witch/Windlash.gif",anime_time:1e3}]},{skill_id:603,name:"Flame Tower",info:"A flame magic that deals damage to one column of enemies.",attribute:4,interval:2,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:1.5,target:2,target_type:"columnEnemy",skill_anime:"effect/skill/witch/FlameTower.gif",anime_time:1500}]},{skill_id:604,name:"Earthquake",info:"Raise the ground with magic and attack all enemiess.",attribute:6,interval:3,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:1.5,target:2,target_type:"allEnemy",skill_anime:"effect/skill/witch/Earthquake.gif",anime_time:2200}]},{skill_id:605,name:"Heaven's Roar",info:"Generates a dense thundercloud that attacks all enemies.",attribute:8,interval:4,consume_type:"MP",consume_amount:30,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"MGC",effect_amount:.7,target:2,target_type:"allEnemy",skill_anime:"effect/skill/witch/Heaven's Roar.gif",anime_time:3e3}]},{skill_id:701,name:"Cross Cut",info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/cross_cut.gif",anime_time:600}]},{skill_id:702,name:"Dark Crescent",info:"A powerful sword flash that deals physical damage to one row of enemies.",attribute:10,interval:2,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"ATK",effect_amount:.4,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/assassin/dark_crescent.gif",anime_time:1100}]},{skill_id:703,name:"Momentary Slash",info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:2,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/momentary_slash.gif",anime_time:800}]},{skill_id:704,name:"Rapid Slash",info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:5,base_status:"ATK",effect_amount:.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/rapid_slash.gif",anime_time:900}]},{skill_id:705,name:"Dark Cross",info:"A basic attack that deals physical damage to one enemy.",attribute:10,interval:1,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/dark_cross.gif",anime_time:800}]},{skill_id:706,name:"High Speed Slash",info:"A furious weapons blows attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:10,base_status:"ATK",effect_amount:.5,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/assassin/high_speed_slash.gif",anime_time:1600}]}];class Jd{constructor(e){Ue(this,"skill_id");Ue(this,"name");Ue(this,"info");Ue(this,"attribute");Ue(this,"interval");Ue(this,"consume_type");Ue(this,"consume_amount");Ue(this,"effect_number");Ue(this,"skill_effect");this.skill_id=e.skill_id,this.name=e.name,this.info=e.info,this.attribute=e.attribute,this.interval=e.interval,this.consume_type=e.consume_type,this.consume_amount=e.consume_amount,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect}}const Qd=og.map(n=>new Jd(n));class an{constructor(e,t){Ue(this,"cha_id");Ue(this,"name");Ue(this,"class");Ue(this,"faceGraphicUrl");Ue(this,"poseGraphicUrl");Ue(this,"backgroundUrl");Ue(this,"LV");Ue(this,"exp");Ue(this,"nextLvExp");Ue(this,"baseStatus");Ue(this,"equipment");Ue(this,"totalStatus");Ue(this,"buffs",[]);Ue(this,"conditions",[]);Ue(this,"nowHP");Ue(this,"nowMP");Ue(this,"activeSkill");Ue(this,"passiveCost");Ue(this,"passiveSkill");this.cha_id=e.cha_id,this.name=e.name,this.class=e.class,this.faceGraphicUrl=e.faceGraphicUrl,this.poseGraphicUrl=e.poseGraphicUrl,this.backgroundUrl=e.backgroundUrl,this.LV=e.LV,this.exp=e.exp,this.nextLvExp=e.nextLvExp,this.baseStatus={HP:e.HP,MP:e.MP,ATK:e.ATK,MGC:e.MGC,DEF:e.DEF,MDF:e.MDF,DEX:e.DEX,SPD:e.SPD,HitRate:0,CritRate:0,Hate:1-t*.1,Slash:e.Slash,Stab:e.Stab,Hit:e.Hit,Fire:e.Fire,Water:e.Water,Earth:e.Earth,Wind:e.Wind,Light:e.Light,Dark:e.Dark},this.equipment={WEP:cr.find(i=>i.eqp_id===e.equipment.WEP)??null,ARM:cr.find(i=>i.eqp_id===e.equipment.ARM)??null,ACC:cr.find(i=>i.eqp_id===e.equipment.ACC)??null},this.totalStatus=this.calculateTotalStatus(),this.nowHP=this.totalStatus.HP,this.nowMP=this.totalStatus.MP,this.activeSkill=e.activeSkill.map(i=>Qd.find(s=>s.skill_id===i)),this.passiveCost=e.passiveCost,this.passiveSkill=e.passiveSkill.map(i=>{const s=Zd.find(a=>a.skill_id===i);let r;return s&&(r=new Kd(s),r.equip=e.equipSkill.includes(i)),r}).filter(i=>i!==void 0)}changeEquipment(e,t){this.equipment[e]=t,this.totalStatus=this.calculateTotalStatus()}calculateTotalStatus(){let e={...this.baseStatus};for(let t in this.equipment){let i=this.equipment[t];if(i)for(let s in i.status)e[s]+=i.status[s]}e.HitRate=this.calculateHitRate(e.DEX),e.CritRate=Math.floor(e.DEX/8);for(let t of this.buffs.values())e[t.status]+=t.value;return e}calculateHitRate(e){var i,s;return((i=this.equipment.WEP)!=null&&i.status.HitRate?(s=this.equipment.WEP)==null?void 0:s.status.HitRate:C.initHitRate)+Math.floor(e/10)}updateHate(e){this.baseStatus.Hate=1-e*.1,this.totalStatus=this.calculateTotalStatus()}addBuff(e,t,i,s){const r=this.buffs.findIndex(a=>a.name===e&&a.status===t);r!==-1?(this.buffs[r].value=i,this.buffs[r].duration=s):this.buffs.push({name:e,status:t,value:i,duration:s})}removeBuff(e,t){this.buffs=this.buffs.filter(i=>!(i.name===e&&i.status===t))}updateBuffs(){this.buffs=this.buffs.map(e=>(e.duration--,e.duration<=0?null:e)).filter(e=>e!==null),this.totalStatus=this.calculateTotalStatus()}addCondition(e,t,i,s){const r=this.conditions.findIndex(a=>a.name===e&&a.status===t);r!==-1?(this.conditions[r].value=i,this.conditions[r].duration=s):this.conditions.push({name:e,status:t,value:i,duration:s})}removeCondition(e,t){this.conditions=this.conditions.filter(i=>!(i.name===e&&i.status===t))}updateConditions(){this.conditions=this.conditions.map(e=>(e.duration--,e.duration<=0?null:e)).filter(e=>e!==null)}}const Wl=ig.map((n,e)=>new an(n,e)),eh=n=>(kn("data-v-194a8221"),n=n(),Nn(),n),lg={key:0,class:"CharaCardUI"},cg={class:"line1"},ug={class:"name"},fg={class:"leftItem"},dg=eh(()=>P("span",{class:"statuskinds"},"LV ",-1)),hg={class:"line2"},pg=eh(()=>P("span",{class:"statuskinds"},"CLASS",-1)),mg={class:"leftItem"},_g=qe({__name:"CharaCard",props:{character:{type:an}},setup(n){return(e,t)=>n.character?(ie(),ge("div",lg,[P("div",cg,[P("span",ug,Re(n.character.name),1),P("span",fg,[dg,P("span",null,Re(n.character.LV),1)])]),P("div",hg,[pg,P("span",mg,Re(n.character.class),1)])])):Ye("",!0)}}),th=Ke(_g,[["__scopeId","data-v-194a8221"]]),gg={class:"progress-bar-hp"},vg=["value","max"],xg={class:"nowHP"},Mg=qe({__name:"ProgressBarHp",props:{nowHP:{type:Number},maxHP:{type:Number}},setup(n){return(e,t)=>(ie(),ge("div",gg,[P("progress",{class:"progress-hp",value:n.nowHP,max:n.maxHP},null,8,vg),P("span",xg,Re(n.nowHP)+"/"+Re(n.maxHP),1)]))}}),qa=Ke(Mg,[["__scopeId","data-v-48f5d701"]]),Sg={class:"progress-bar-mp"},yg=["value","max"],Eg={class:"nowMP"},bg=qe({__name:"ProgressBarMp",props:{nowMP:{type:Number},maxMP:{type:Number}},setup(n){return(e,t)=>(ie(),ge("div",Sg,[P("progress",{class:"progress-mp",value:n.nowMP,max:n.maxMP},null,8,yg),P("span",Eg,Re(n.nowMP)+"/"+Re(n.maxMP),1)]))}}),ql=Ke(bg,[["__scopeId","data-v-2ef7ebd3"]]),Tg=n=>(kn("data-v-75494c40"),n=n(),Nn(),n),Ag=["value","max"],wg=Tg(()=>P("span",{class:"next"},"NEXT",-1)),Cg={class:"nextExp"},Rg=qe({__name:"ProgressBarExp",props:{exp:{type:Number},next:{type:Number}},setup(n){return(e,t)=>(ie(),ge(ft,null,[P("progress",{class:"progress-exp",value:n.exp,max:n.next},null,8,Ag),wg,P("span",Cg,Re(n.next-n.exp),1)],64))}}),nh=Ke(Rg,[["__scopeId","data-v-75494c40"]]),xn=n=>(kn("data-v-9d132a4e"),n=n(),Nn(),n),Pg={key:0,class:"CharaStatusUI"},Lg={class:"hpline"},Dg=xn(()=>P("span",{class:"statuskinds"},"HP",-1)),Ig={class:"progress-bar"},Ug={class:"mpline"},Fg=xn(()=>P("span",{class:"statuskinds"},"MP",-1)),kg={class:"progress-bar"},Ng={class:"expline"},Og=xn(()=>P("span",{class:"statuskinds"},"EXP",-1)),Bg={class:"progress-bar-exp"},Hg={class:"atkline"},zg={class:"leftItem"},Gg=xn(()=>P("span",{class:"statuskinds"},"ATK",-1)),Vg={class:"statusValue"},Wg={class:"rightItem"},qg=xn(()=>P("span",{class:"statuskinds"},"MGC",-1)),$g={class:"statusValue"},Xg={class:"defline"},Yg={class:"leftItem"},jg=xn(()=>P("span",{class:"statuskinds"},"DEF",-1)),Kg={class:"statusValue"},Zg={class:"rightItem"},Jg=xn(()=>P("span",{class:"statuskinds"},"MDF",-1)),Qg={class:"statusValue"},e0={class:"dexline"},t0={class:"leftItem"},n0=xn(()=>P("span",{class:"statuskinds"},"DEX",-1)),i0={class:"statusValue"},s0={class:"rightItem"},r0=xn(()=>P("span",{class:"statuskinds"},"SPD",-1)),a0={class:"statusValue"},o0={class:"wepline"},l0=xn(()=>P("span",{class:"statuskinds"},"WEP",-1)),c0={class:"equipName"},u0={class:"armline"},f0=xn(()=>P("span",{class:"statuskinds"},"ARM",-1)),d0={class:"equipName"},h0={class:"accline"},p0=xn(()=>P("span",{class:"statuskinds"},"ACC",-1)),m0={class:"equipName"},_0={class:"passiveSkill"},g0=xn(()=>P("div",{class:"statuskinds"},"PASSIVE SKILL",-1)),v0={class:"skillList",density:"compact"},x0={key:0},M0=qe({__name:"CharaStatus",props:{character:{type:an}},setup(n){return(e,t)=>{var i,s,r;return n.character?(ie(),ge("div",Pg,[P("div",Lg,[Dg,P("span",Ig,[Le(qa,{nowHP:n.character.nowHP,maxHP:n.character.totalStatus.HP},null,8,["nowHP","maxHP"])])]),P("div",Ug,[Fg,P("span",kg,[Le(ql,{nowMP:n.character.nowMP,maxMP:n.character.totalStatus.MP},null,8,["nowMP","maxMP"])])]),P("div",Ng,[Og,P("span",Bg,[Le(nh,{exp:n.character.exp,next:n.character.nextLvExp},null,8,["exp","next"])])]),P("div",Hg,[P("span",zg,[Gg,P("span",Vg,Re(n.character.totalStatus.ATK),1)]),P("span",Wg,[qg,P("span",$g,Re(n.character.totalStatus.MGC),1)])]),P("div",Xg,[P("span",Yg,[jg,P("span",Kg,Re(n.character.totalStatus.DEF),1)]),P("span",Zg,[Jg,P("span",Qg,Re(n.character.totalStatus.MDF),1)])]),P("div",e0,[P("span",t0,[n0,P("span",i0,Re(n.character.totalStatus.DEX),1)]),P("span",s0,[r0,P("span",a0,Re(n.character.totalStatus.SPD),1)])]),P("div",o0,[l0,P("span",c0,Re((i=n.character.equipment.WEP)==null?void 0:i.name),1)]),P("div",u0,[f0,P("span",d0,Re((s=n.character.equipment.ARM)==null?void 0:s.name),1)]),P("div",h0,[p0,P("span",m0,Re((r=n.character.equipment.ACC)==null?void 0:r.name),1)]),P("div",_0,[g0,P("ul",v0,[(ie(!0),ge(ft,null,Yt(n.character.passiveSkill,a=>(ie(),ge("li",{key:a.skill_id,class:"skillItem"},[a.equip===!0?(ie(),ge("span",x0,Re(a.name),1)):Ye("",!0)]))),128))])])])):Ye("",!0)}}}),S0=Ke(M0,[["__scopeId","data-v-9d132a4e"]]),y0="/app2/icon/slash.png",E0="/app2/icon/stab.png",b0="/app2/icon/hit.png",T0="/app2/icon/fire.png",A0="/app2/icon/water.png",w0="/app2/icon/earth.png",C0="/app2/icon/wind.png",R0="/app2/icon/light.png",P0="/app2/icon/dark.png",L0=n=>(kn("data-v-d1f1001b"),n=n(),Nn(),n),D0={key:0,class:"CharaStatusUI"},I0=L0(()=>P("div",{class:"statuskinds"},"RESISTANCE",-1)),U0={class:"slashline"},F0={class:"leftItem"},k0=["src"],N0={class:"elementValue"},O0={class:"rightItem"},B0=["src"],H0={class:"elementValue"},z0={class:"hitline"},G0={class:"leftItem"},V0=["src"],W0={class:"elementValue"},q0={class:"fireline"},$0={class:"leftItem"},X0=["src"],Y0={class:"elementValue"},j0={class:"rightItem"},K0=["src"],Z0={class:"elementValue"},J0={class:"earthline"},Q0={class:"leftItem"},ev=["src"],tv={class:"elementValue"},nv={class:"rightItem"},iv=["src"],sv={class:"elementValue"},rv={class:"lightline"},av={class:"leftItem"},ov=["src"],lv={class:"elementValue"},cv={class:"rightItem"},uv=["src"],fv={class:"elementValue"},dv=qe({__name:"CharaSubStatus",props:{character:{type:an}},setup(n){return(e,t)=>n.character?(ie(),ge("div",D0,[I0,P("div",U0,[P("span",F0,[P("img",{class:"Icon",src:re(y0),alt:"Slash"},null,8,k0),P("span",N0,Re(n.character.totalStatus.Slash),1)]),P("span",O0,[P("img",{class:"Icon",src:re(E0),alt:"Water"},null,8,B0),P("span",H0,Re(n.character.totalStatus.Stab),1)])]),P("div",z0,[P("span",G0,[P("img",{class:"Icon",src:re(b0),alt:"Hit"},null,8,V0),P("span",W0,Re(n.character.totalStatus.Hit),1)])]),P("div",q0,[P("span",$0,[P("img",{class:"Icon",src:re(T0),alt:"Fire"},null,8,X0),P("span",Y0,Re(n.character.totalStatus.Fire),1)]),P("span",j0,[P("img",{class:"Icon",src:re(A0),alt:"Water"},null,8,K0),P("span",Z0,Re(n.character.totalStatus.Water),1)])]),P("div",J0,[P("span",Q0,[P("img",{class:"Icon",src:re(w0),alt:"Earth"},null,8,ev),P("span",tv,Re(n.character.totalStatus.Earth),1)]),P("span",nv,[P("img",{class:"Icon",src:re(C0),alt:"Wind"},null,8,iv),P("span",sv,Re(n.character.totalStatus.Wind),1)])]),P("div",rv,[P("span",av,[P("img",{class:"Icon",src:re(R0),alt:"Light"},null,8,ov),P("span",lv,Re(n.character.totalStatus.Light),1)]),P("span",cv,[P("img",{class:"Icon",src:re(P0),alt:"Dark"},null,8,uv),P("span",fv,Re(n.character.totalStatus.Dark),1)])])])):Ye("",!0)}}),hv=Ke(dv,[["__scopeId","data-v-d1f1001b"]]),pv=[{eqpbag_id:1,eqp_id:103,type:"WEP",equippedBy:1},{eqpbag_id:2,eqp_id:1003,type:"ARM",equippedBy:1},{eqpbag_id:3,eqp_id:2001,type:"ACC",equippedBy:1},{eqpbag_id:4,eqp_id:101,type:"WEP",equippedBy:2},{eqpbag_id:5,eqp_id:1002,type:"ARM",equippedBy:2},{eqpbag_id:6,eqp_id:2101,type:"ACC",equippedBy:2},{eqpbag_id:7,eqp_id:501,type:"WEP",equippedBy:3},{eqpbag_id:8,eqp_id:1201,type:"ARM",equippedBy:3},{eqpbag_id:9,eqp_id:2201,type:"ACC",equippedBy:3},{eqpbag_id:10,eqp_id:401,type:"WEP",equippedBy:4},{eqpbag_id:11,eqp_id:1301,type:"ARM",equippedBy:4},{eqpbag_id:12,eqp_id:2001,type:"ACC",equippedBy:4},{eqpbag_id:13,eqp_id:601,type:"WEP",equippedBy:5},{eqpbag_id:14,eqp_id:1001,type:"ARM",equippedBy:5},{eqpbag_id:15,eqp_id:2101,type:"ACC",equippedBy:5},{eqpbag_id:16,eqp_id:502,type:"WEP",equippedBy:6},{eqpbag_id:17,eqp_id:1201,type:"ARM",equippedBy:6},{eqpbag_id:18,eqp_id:2301,type:"ACC",equippedBy:6},{eqpbag_id:19,eqp_id:201,type:"WEP",equippedBy:7},{eqpbag_id:20,eqp_id:1301,type:"ARM",equippedBy:7},{eqpbag_id:21,eqp_id:2001,type:"ACC",equippedBy:7},{eqpbag_id:22,eqp_id:102,type:"WEP",equippedBy:null},{eqpbag_id:23,eqp_id:110,type:"WEP",equippedBy:null},{eqpbag_id:24,eqp_id:301,type:"WEP",equippedBy:null},{eqpbag_id:25,eqp_id:402,type:"WEP",equippedBy:null},{eqpbag_id:26,eqp_id:510,type:"WEP",equippedBy:null},{eqpbag_id:27,eqp_id:1020,type:"ARM",equippedBy:null},{eqpbag_id:28,eqp_id:1101,type:"ARM",equippedBy:null},{eqpbag_id:29,eqp_id:1110,type:"ARM",equippedBy:null},{eqpbag_id:30,eqp_id:1210,type:"ARM",equippedBy:null},{eqpbag_id:31,eqp_id:1321,type:"ARM",equippedBy:null},{eqpbag_id:32,eqp_id:2151,type:"ACC",equippedBy:null},{eqpbag_id:33,eqp_id:2451,type:"ACC",equippedBy:null},{eqpbag_id:34,eqp_id:2551,type:"ACC",equippedBy:null}],ih=ns("equipBag",{state:()=>({equipmentType:{},equipmentItem:{}}),actions:{setEquipBag(){for(let n of pv)this.addEquipment(n.eqpbag_id,n.eqp_id,n.type,n.equippedBy)},addEquipment(n,e,t,i){this.equipmentType[t]||(this.equipmentType[t]=[]);const s={eqpbag_id:n,eqp_id:e,type:t,equippedBy:i};this.equipmentType[t].push(s),this.equipmentItem[n]=s},removeEquipment(n){if(!this.equipmentItem[n])throw new Error(`装備 ${n} は存在しません。`);delete this.equipmentItem[n]},getEquipmentByType(n){return this.equipmentType[n]||[]},equipEquipment(n,e){const t=this.equipmentItem[n];if(!t)throw new Error(`装備 ${n} は存在しません。`);t.equippedBy=e,this.equipmentItem[n]=t},unequipOldEquipment(n,e){const t=this.equipmentType[n].find(i=>i.equippedBy===e);if(!t)throw new Error(`装備 ${n} ${e} は存在しません。`);t.equippedBy=null}}}),sh=n=>(kn("data-v-bf170dfa"),n=n(),Nn(),n),mv={key:0,class:"EquipmentUI"},_v={class:"EquipmentTab"},gv=["onClick"],vv=sh(()=>P("div",{class:"underLine"},null,-1)),xv={key:0},Mv={class:"EquipmentTypeList",density:"compact"},Sv=["onClick"],yv=["src"],Ev={key:1,class:"faceFlame"},bv={class:"itemName"},Tv={key:2,class:"buttonPosition"},Av=["onClick"],wv=sh(()=>P("div",{class:"underLine"},null,-1)),Cv={key:0,class:"equipment-status"},Rv={class:"status-key"},Pv={class:"status-value"},Lv=qe({__name:"Equipment",props:{character:{type:an}},setup(n){const e=n,t=ih(),i=["WEP","ARM","ACC"],s=Se("WEP"),r=g=>{s.value=g,l.value=null,o.value=null},a=Dt(()=>{var g;return(g=e.character)==null?void 0:g.equipment[s.value]}),o=Se(null),l=Se(null),c=(g,p,h)=>{const b=cr.find(y=>y.eqp_id===g&&y.type===p);b&&(o.value=b,l.value=h)},u=g=>Wl.find(p=>p.cha_id===g),f=g=>{const p=cr.find(h=>h.eqp_id===g);return p?p.name:null},d=g=>{var p;return((p=e.character)==null?void 0:p.cha_id)==g?"Unequip":"Equip"},m=Dt(()=>{var h;if(!o.value)return;const g={};let p;for(const b in o.value.status)p=o.value.status[b]-(((h=a.value)==null?void 0:h.status[b])||0),g[b]=p>0?"+"+String(p):String(p);return g}),_=(g,p)=>{var b,y,T;let h=e.character.cha_id;p===h?(t.equipEquipment(g,null),(b=e.character)==null||b.changeEquipment(s.value,null)):(a.value&&t.unequipOldEquipment(s.value,h),p!==null&&((y=u(p))==null||y.changeEquipment(s.value,null),console.log(u(p))),t.equipEquipment(g,h),(T=e.character)==null||T.changeEquipment(s.value,o.value)),console.log(t),console.log(e.character)};return(g,p)=>n.character?(ie(),ge("div",mv,[P("ul",_v,[(ie(),ge(ft,null,Yt(i,h=>P("li",{key:h,onClick:b=>r(h),class:Ht([{"selected-tab":h===s.value},"EquipmentTabItem"])},Re(h),11,gv)),64))]),vv,s.value?(ie(),ge("div",xv,[P("ul",Mv,[(ie(!0),ge(ft,null,Yt(re(t).equipmentType[s.value],h=>{var b;return ie(),ge("li",{key:h.eqpbag_id,onClick:y=>c(h.eqp_id,s.value,h.eqpbag_id),class:Ht(["EquipmentItem",{"selected-tab":o.value&&h.eqpbag_id===l.value}])},[h.equippedBy!==null?(ie(),ge("img",{key:0,class:"smallface",src:(b=u(h.equippedBy))==null?void 0:b.faceGraphicUrl,alt:"Character face"},null,8,yv)):(ie(),ge("span",Ev)),P("span",bv,Re(f(h.eqp_id)),1),o.value&&h.eqpbag_id===l.value?(ie(),ge("span",Tv,[P("span",{class:Ht(["button-equip",{equip:n.character.cha_id!=h.equippedBy,unequip:n.character.cha_id==h.equippedBy}]),onClick:y=>_(h.eqpbag_id,h.equippedBy)},Re(d(h.equippedBy)),11,Av)])):Ye("",!0)],10,Sv)}),128))]),wv,o.value?(ie(),ge("div",Cv,[m.value!==void 0?(ie(!0),ge(ft,{key:0},Yt(o.value.status,(h,b)=>(ie(),ge("div",{class:"status",key:b},[P("span",Rv,Re(b),1),P("span",Pv,Re(h),1),P("span",{class:Ht(["status-diff",{colorblue:Number(m.value[b])>=0,colorred:Number(m.value[b])<0}])},Re(m.value[b]),3)]))),128)):Ye("",!0)])):Ye("",!0)])):Ye("",!0)])):Ye("",!0)}}),Dv=Ke(Lv,[["__scopeId","data-v-bf170dfa"]]),Iv={class:"skillInfo"},Uv=qe({__name:"SkillInfo",props:{skillInfo:{type:String}},setup(n){return(e,t)=>(ie(),ge("div",Iv,Re(n.skillInfo),1))}}),rh=Ke(Uv,[["__scopeId","data-v-ad3c27c7"]]),Fv={class:"information"},kv={class:"message"},Nv=qe({__name:"Information",props:{message:{type:String,default:null}},emits:["hideError"],setup(n,{emit:e}){const t=e;return(i,s)=>(ie(),ge("div",{class:"modal",onClick:s[0]||(s[0]=r=>t("hideError"))},[P("div",Fv,[P("div",kv,Re(n.message),1)])]))}}),$l=Ke(Nv,[["__scopeId","data-v-f72a2979"]]),Xl=n=>(kn("data-v-294474c0"),n=n(),Nn(),n),Ov={key:0,class:"SkillUI"},Bv={class:"skillSelect"},Hv={class:"skillType"},zv={key:0},Gv=["onClick"],Vv=Xl(()=>P("div",{class:"underLine"},null,-1)),Wv={key:0},qv={class:"skillList",density:"compact"},$v=["onClick"],Xv={key:0,class:"statuskinds"},Yv={key:1,class:"marginEquip"},jv={class:"marginLeft05"},Kv={class:"costValue"},Zv={key:2,class:"buttonPosition"},Jv=["onClick"],Qv={class:"totalCost"},ex=Xl(()=>P("span",{class:"statuskinds"},"TOTAL COST",-1)),tx={class:"costValue"},nx={class:"totalCost"},ix=Xl(()=>P("span",{class:"statuskinds"},"SKILL COST CAP",-1)),sx={class:"costValue"},rx={key:1},ax={class:"skillList",density:"compact"},ox=["onClick"],lx={class:"marginLeft1"},cx={class:"costValue"},ux={class:"consumeType"},fx=qe({__name:"Skill",props:{character:{type:an},processBattle:{type:Boolean}},emits:["useSkill"],setup(n,{emit:e}){const t=n,i=["PASSIVE","ACTIVE"],s=Se(!1),r=C.msgSkillCostError,a=Se(void 0);t.processBattle==!0?a.value="ACTIVE":a.value="PASSIVE";const o=p=>{a.value=p,l.value=null},l=Se(null),c=p=>{t.processBattle&&p instanceof Jd&&l.value==p&&_(p),l.value=p},u=p=>p?"Unequip":"Equip",f=Se(0),d=p=>{t.character&&(f.value=t.character.passiveSkill.filter(h=>h.equip).reduce((h,b)=>h+b.skill_cost,0),p.equip?p.equip=!1:Number(f.value)+p.skill_cost>t.character.passiveCost?s.value=!0:p.equip=!0)},m=e,_=p=>{m("useSkill",p)},g=()=>{s.value=!1};return(p,h)=>n.character?(ie(),ge("div",Ov,[P("div",Bv,[P("ul",Hv,[n.processBattle?(ie(),ge("li",zv,Re("ACTIVE"),1)):(ie(),ge(ft,{key:1},Yt(i,b=>P("li",{key:b,onClick:y=>o(b),class:Ht({"selected-tab":b===a.value})},Re(b),11,Gv)),64))]),Vv,a.value=="PASSIVE"?(ie(),ge("div",Wv,[P("ul",qv,[(ie(!0),ge(ft,null,Yt(n.character.passiveSkill,b=>(ie(),ge("li",{key:b.skill_id,onClick:y=>c(b),class:Ht(["skillItem",{"selected-tab":b===l.value}])},[b.equip===!0?(ie(),ge("span",Xv,"E")):(ie(),ge("span",Yv)),P("span",jv,Re(b.name),1),P("span",Kv,Re(b.skill_cost),1),b===l.value?(ie(),ge("span",Zv,[P("span",{onClick:y=>d(b),class:Ht(["button-equip",{equip:b.equip==!1,unequip:b.equip==!0}])},Re(u(b.equip)),11,Jv)])):Ye("",!0)],10,$v))),128)),P("li",Qv,[ex,P("span",tx,Re(n.character.passiveSkill.filter(b=>b.equip).reduce((b,y)=>b+y.skill_cost,0)),1)]),P("li",nx,[ix,P("span",sx,Re(n.character.passiveCost),1)])])])):Ye("",!0),Pt(Le($l,{message:re(r),onHideError:g},null,8,["message"]),[[It,s.value]]),a.value=="ACTIVE"?(ie(),ge("div",rx,[P("ul",ax,[(ie(!0),ge(ft,null,Yt(n.character.activeSkill,b=>(ie(),ge("li",{key:b.skill_id,onClick:y=>c(b),class:Ht(["skillItem",{"selected-tab":b===l.value}])},[P("span",lx,Re(b.name),1),P("span",cx,Re(b.consume_amount),1),P("span",ux,Re(b.consume_type),1)],10,ox))),128))])])):Ye("",!0)]),l.value?(ie(),Lt(rh,{key:0,class:"skillInfo",skillInfo:l.value.info},null,8,["skillInfo"])):Ye("",!0)])):Ye("",!0)}}),ah=Ke(fx,[["__scopeId","data-v-294474c0"]]),dx={key:0,class:"first"},hx={key:1,class:"second"},px=qe({__name:"SwitchBtn",props:{switchWord:{type:Array}},setup(n){const e=Se(!0),t=()=>{e.value=!e.value};return(i,s)=>(ie(),ge("div",{class:"outline",onClick:t},[e.value?(ie(),ge("span",dx,Re(n.switchWord[0]),1)):(ie(),ge("span",hx,Re(n.switchWord[1]),1))]))}}),Wc=Ke(px,[["__scopeId","data-v-d517f9cd"]]),mx="/app2/icon/arrow-left.png",_x=["src"],gx=qe({__name:"IconLeft",setup(n){return(e,t)=>(ie(),ge("img",{class:"Icon",src:re(mx),alt:"Left"},null,8,_x))}}),vx=Ke(gx,[["__scopeId","data-v-18105755"]]),xx="/app2/icon/arrow-right.png",Mx=["src"],Sx=qe({__name:"IconRight",setup(n){return(e,t)=>(ie(),ge("img",{class:"Icon",src:re(xx),alt:"Right"},null,8,Mx))}}),yx=Ke(Sx,[["__scopeId","data-v-ccc46121"]]),Ex={class:"btnFlame"},bx=qe({__name:"BlueBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(ie(),ge("div",Ex,Re(n.inside),1))}}),Tx=Ke(bx,[["__scopeId","data-v-8e35d936"]]),Ax={class:"btnFlame"},wx=qe({__name:"RedBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(ie(),ge("div",Ax,Re(n.inside),1))}}),Cx=Ke(wx,[["__scopeId","data-v-88eed994"]]),Rx={class:"modal"},Px={class:"confirmation"},Lx={class:"message"},Dx=qe({__name:"Confirmation",props:{message:{type:String}},emits:["confirmationResponse"],setup(n,{emit:e}){const t=s=>{i("confirmationResponse",s)},i=e;return(s,r)=>(ie(),ge("div",Rx,[P("div",Px,[P("div",Lx,Re(n.message),1),Le(Tx,{class:"YesBtn",inside:re(C).textYes,onClick:r[0]||(r[0]=a=>t(re(C).textYes))},null,8,["inside"]),Le(Cx,{class:"NoBtn",inside:re(C).textNo,onClick:r[1]||(r[1]=a=>t(re(C).textNo))},null,8,["inside"])])]))}}),oh=Ke(Dx,[["__scopeId","data-v-5cb96a3c"]]),Qt=(n,e)=>Math.floor(Math.random()*(e-n)+n),uo=n=>Math.floor(Math.random()*n),li=n=>new Promise(e=>setTimeout(e,n)),pt=Array(C.MapHeight).fill(C.MapWall).map(()=>Array(C.MapWidth).fill(C.MapWall)),sr=Array(C.MapHeight).fill(0).map(()=>Array(C.MapWidth).fill(0)),Ea={X:0,Y:0};function Ix(){let n=[],e=Qt(C.RoomCountMin,C.RoomCountMax),t=new Array(C.meetPointCount).fill(0),i=new Array(C.meetPointCount).fill(0);for(let s=0;s<t.length;s++)t[s]=Qt(C.MapWidth/4,C.MapWidth*3/4),i[s]=Qt(C.MapHeight/4,C.MapHeight*3/4),pt[i[s]][t[s]]=C.MapRoad;for(let s=0;s<e;s++){const r={Height:Qt(C.roomMinHeight,C.roomMaxHeight),Width:Qt(C.roomMinWidth,C.roomMaxWidth),PointX:Qt(2,C.MapWidth-C.roomMaxWidth-2),PointY:Qt(2,C.MapHeight-C.roomMaxHeight-2),Overlap:!1};r.Overlap=Fx(r.Height,r.Width,r.PointX,r.PointY),n.push(r)}for(let s=0;s<e;s++)if(n[s].Overlap==!1){let r=Qt(n[s].PointX,n[s].PointX+n[s].Width),a=Qt(n[s].PointY,n[s].PointY+n[s].Height);s==0&&(Ea.X=r,Ea.Y=a),kx(r,a,t[Qt(0,t.length-1)],i[Qt(0,i.length-1)])}for(let s=0;s<pt.length;s++)for(let r=0;r<pt[s].length;r++)pt[s][r]==C.MapRoad&&Ux(s,r)}function Ux(n,e){ti(n,e-1)&&ti(n,e+1)&&(Mn(n-1,e)&&(Mn(n-1,e-1)||Mn(n-1,e+1))&&(sr[n][e]=C.SetDoorUp),Mn(n+1,e)&&(Mn(n+1,e-1)||Mn(n+1,e+1))&&(sr[n][e]=C.SetDoorUnder)),ti(n-1,e)&&ti(n+1,e)&&(Mn(n,e-1)&&(Mn(n-1,e-1)||Mn(n+1,e-1))&&(sr[n][e]=C.SetDoorLeft),Mn(n,e+1)&&(Mn(n-1,e+1)||Mn(n+1,e+1))&&(sr[n][e]=C.SetDoorRight))}function ti(n,e){return n>=0&&n<pt.length&&e>=0&&e<pt[0].length&&pt[n][e]==C.MapWall}function Mn(n,e){return n>=0&&n<pt.length&&e>=0&&e<pt[0].length&&pt[n][e]==C.MapRoom}function Fx(n,e,t,i){let s=!1;for(let r=0;r<n;r++)for(let a=0;a<e;a++)pt[i+r][t+a]==C.MapRoom?s=!0:pt[i+r][t+a]=C.MapRoom;return s}function kx(n,e,t,i){let s=n>t,r=e<=i;if(Math.floor(Math.random()*2)==0){for(;n!=t;)a(1);for(;e!=i;)a(2)}else{for(;e!=i;)a(2);for(;n!=t;)a(1)}function a(o){pt[e][n]==C.MapWall&&(pt[e][n]=C.MapRoad),o==1?n=s?n-1:n+1:e=r?e+1:e-1}}let Nr={characters:[1,5,6,7],gold:1e5,location:[570,180],home:[500,200]};const is=ns("party",{state:()=>({characters:[],gold:Nr.gold,location:Nr.location,home:Nr.location,map:[]}),actions:{setParty(){this.characters=Wl.filter(n=>Nr.characters.includes(n.cha_id)),this.map=pt}}}),Ci=ns("showUI",{state:()=>({map:!0,current:!0,party:!1,character:!1,message:!1,errorMessage:!1})}),Nx=["src"],Ox=qe({__name:"Character",props:{index:{type:Number},character:{type:an}},emits:["changeCharacter"],setup(n,{emit:e}){const t=$n(),i=is(),s=Ci(),r=n,a=Se(0),o=Se(void 0),l=Se(!0),c=["MAIN","SUB"],u=()=>{l.value=!l.value},f=Se(!0),d=["EQUIP","SKILL"],m=()=>{f.value=!f.value},_=e,g=I=>{_("changeCharacter",I)};function p(){g("next")}function h(){g("back")}let b,y;function T(){if(t.guildMenu==C.menuAddMember){if(i.characters.length==4){y=C.msgAddPartyError,s.errorMessage=!0;return}b=C.msgAddParty1+o.value.name+C.msgAddParty2,s.message=!0}}const R=I=>{s.message=!1,I==C.textYes&&(i.characters.push(o.value),s.character=!1)},F=()=>{s.errorMessage=!1};return Tt(()=>r.index,()=>{r.index&&(a.value=r.index)}),Tt(()=>r.character,()=>{r.character&&(o.value=r.character)}),(I,X)=>o.value?(ie(),ge("div",{key:0,class:"CharacterUI",style:Rn({backgroundImage:"url("+o.value.backgroundUrl+")"})},[P("div",{class:"imageFlame",onClick:T},[P("img",{class:"charaimage",src:o.value.poseGraphicUrl,alt:""},null,8,Nx)]),Le(th,{class:"CharaCardUI",character:o.value},null,8,["character"]),l.value?(ie(),Lt(S0,{key:0,class:"CharaStatusUI",character:o.value},null,8,["character"])):(ie(),Lt(hv,{key:1,class:"CharaSubStatusUI",character:o.value},null,8,["character"])),Le(Wc,{class:"ChangeStatus",onClick:u,switchWord:c}),f.value?(ie(),Lt(Dv,{key:2,class:"EquipmentUI",character:o.value},null,8,["character"])):(ie(),Lt(ah,{key:3,class:"SkillUI",character:o.value},null,8,["character"])),Le(Wc,{class:"ChangeSkill",onClick:m,switchWord:d}),Le(vx,{class:"IconCharaBack",onClick:h}),Le(yx,{class:"IconCharaNext",onClick:p}),Pt(Le(oh,{message:re(b),onConfirmationResponse:R},null,8,["message"]),[[It,re(s).message]]),Pt(Le($l,{message:re(y),onHideError:F},null,8,["message"]),[[It,re(s).errorMessage]])],4)):Ye("",!0)}}),lh=Ke(Ox,[["__scopeId","data-v-2c6aec89"]]),Bx={class:"AddMember"},Hx=["onClick"],zx=["src"],Gx=qe({__name:"AddMember",setup(n){const e=is(),t=Ci(),i=Dt(()=>Wl.filter(l=>!e.characters.some(c=>c.cha_id===l.cha_id))),s=Se(void 0),r=Se(void 0);function a(l,c){s.value=l,r.value=c,t.character=!0}const o=l=>{l=="next"?(s.value=s.value==i.value.length-1?0:s.value+1,r.value=i.value[s.value]):(s.value=s.value==0?i.value.length-1:s.value-1,r.value=i.value[s.value])};return(l,c)=>(ie(),ge("div",Bx,[Pt(Le(re(Z_),{"items-to-show":3,"wrap-around":!0},{addons:da(()=>[Le(re(eg)),Le(re(tg))]),default:da(()=>[(ie(!0),ge(ft,null,Yt(i.value,(u,f)=>(ie(),Lt(re(ng),{key:f},{default:da(()=>[P("div",{class:"carousel__item",onClick:d=>a(f,u)},[Le(th,{class:"CharaCardUI",character:u},null,8,["character"]),P("img",{class:"chara-image",src:u.poseGraphicUrl,alt:""},null,8,zx)],8,Hx)]),_:2},1024))),128))]),_:1},512),[[It,!re(t).character]]),Pt(Le(lh,{character:r.value,index:s.value,onChangeCharacter:o},null,8,["character","index"]),[[It,re(t).character]])]))}}),Vx=Ke(Gx,[["__scopeId","data-v-0a4310ec"]]),Tn=n=>(kn("data-v-4202f880"),n=n(),Nn(),n),Wx={key:0,class:"StatusUI"},qx={class:"nameline"},$x={class:"name"},Xx={class:"level"},Yx=Tn(()=>P("span",{class:"statuskinds"},"LV ",-1)),jx={class:"hpline"},Kx=Tn(()=>P("span",{class:"statuskinds"},"HP",-1)),Zx={class:"progress-bar"},Jx={class:"mpline"},Qx=Tn(()=>P("span",{class:"statuskinds"},"MP",-1)),eM={class:"progress-bar"},tM={class:"atkline"},nM={class:"leftItem"},iM=Tn(()=>P("span",{class:"statuskinds"},"ATK",-1)),sM={class:"itemValue"},rM={class:"rightItem"},aM=Tn(()=>P("span",{class:"statuskinds"},"MGC",-1)),oM={class:"itemValue"},lM={class:"defline"},cM={class:"leftItem"},uM=Tn(()=>P("span",{class:"statuskinds"},"DEF",-1)),fM={class:"itemValue"},dM={class:"rightItem"},hM=Tn(()=>P("span",{class:"statuskinds"},"MDF",-1)),pM={class:"itemValue"},mM={class:"dexline"},_M={class:"leftItem"},gM=Tn(()=>P("span",{class:"statuskinds"},"DEX",-1)),vM={class:"itemValue"},xM={class:"rightItem"},MM=Tn(()=>P("span",{class:"statuskinds"},"SPD",-1)),SM={class:"itemValue"},yM={class:"wepline"},EM=Tn(()=>P("span",{class:"statuskinds"},"WEP",-1)),bM={class:"equipName"},TM={class:"armline"},AM=Tn(()=>P("span",{class:"statuskinds"},"ARM",-1)),wM={class:"equipName"},CM={class:"accline"},RM=Tn(()=>P("span",{class:"statuskinds"},"ACC",-1)),PM={class:"equipName"},LM=qe({__name:"Status",props:{character:{type:an}},setup(n){return(e,t)=>{var i,s,r;return n.character?(ie(),ge("div",Wx,[P("div",qx,[P("span",$x,Re(n.character.name),1),P("span",Xx,[Yx,P("span",null,Re(n.character.LV),1)])]),P("div",jx,[Kx,P("span",Zx,[Le(qa,{nowHP:n.character.nowHP,maxHP:n.character.totalStatus.HP},null,8,["nowHP","maxHP"])])]),P("div",Jx,[Qx,P("span",eM,[Le(ql,{nowMP:n.character.nowMP,maxMP:n.character.totalStatus.MP},null,8,["nowMP","maxMP"])])]),P("div",tM,[P("span",nM,[iM,P("span",sM,Re(n.character.totalStatus.ATK),1)]),P("span",rM,[aM,P("span",oM,Re(n.character.totalStatus.MGC),1)])]),P("div",lM,[P("span",cM,[uM,P("span",fM,Re(n.character.totalStatus.DEF),1)]),P("span",dM,[hM,P("span",pM,Re(n.character.totalStatus.MDF),1)])]),P("div",mM,[P("span",_M,[gM,P("span",vM,Re(n.character.totalStatus.DEX),1)]),P("span",xM,[MM,P("span",SM,Re(n.character.totalStatus.SPD),1)])]),P("div",yM,[EM,P("span",bM,Re((i=n.character.equipment.WEP)==null?void 0:i.name),1)]),P("div",TM,[AM,P("span",wM,Re((s=n.character.equipment.ARM)==null?void 0:s.name),1)]),P("div",CM,[RM,P("span",PM,Re((r=n.character.equipment.ACC)==null?void 0:r.name),1)])])):Ye("",!0)}}}),DM=Ke(LM,[["__scopeId","data-v-4202f880"]]),IM="/app2/icon/back.svg",UM=["src"],FM=qe({__name:"IconBack",setup(n){return(e,t)=>(ie(),ge("img",{class:"Icon",src:re(IM),alt:"Back"},null,8,UM))}}),ch=Ke(FM,[["__scopeId","data-v-6b7e6f2e"]]),kM="/app2/icon/party.svg",NM=["src"],OM=qe({__name:"IconParty",setup(n){return(e,t)=>(ie(),ge("img",{class:"Icon",src:re(kM),alt:"Party"},null,8,NM))}}),BM=Ke(OM,[["__scopeId","data-v-ba6ce6be"]]),HM="/app2/icon/change.svg",zM=["src"],GM=qe({__name:"IconChange",setup(n){return(e,t)=>(ie(),ge("img",{class:"Icon",src:re(HM),alt:"Change"},null,8,zM))}}),VM=Ke(GM,[["__scopeId","data-v-e7f25d89"]]),WM={key:0,class:"partyUI"},qM={class:"characters"},$M=["onClick"],XM={class:"charaflame"},YM=["src"],jM=qe({__name:"Party",setup(n){const e=is(),t=Ci(),i=$n(),s=()=>{f.value=!1,t.party?r():a()},r=()=>{f.value=!1,t.party=!1,t.character=!1,t.map=!0,t.current=!0},a=()=>{t.party=!0,t.character=!1,c.value=void 0,u.value=void 0},o=()=>{if(f.value=!1,!t.party&&!t.character&&(t.map=!1,t.current=!1),t.party){r();return}t.party=!t.party,t.character=!1},l=y=>{y=="next"?(c.value=c.value==e.characters.length-1?0:c.value+1,u.value=e.characters[c.value]):(c.value=c.value==0?e.characters.length-1:c.value-1,u.value=e.characters[c.value])},c=Se(void 0),u=Se(void 0),f=Se(!1),d=Se([]);let m,_;function g(y,T){if(i.guildMenu==C.menuRemoveMember){if(T.cha_id==C.mainChaid){_=C.msgRemovePartyError,t.errorMessage=!0;return}m=C.msgRemoveParty1+T.name+C.msgRemoveParty2,t.message=!0,u.value=T;return}if(f.value){if(d.value.includes(y)?d.value=d.value.filter(R=>R!==y):d.value.length<2&&d.value.push(y),d.value.length===2){const R=e.characters[d.value[0]];e.characters[d.value[0]]=e.characters[d.value[1]],e.characters[d.value[1]]=R;for(let F of d.value)e.characters[F].updateHate(F),console.log("partyStore.characters[order]",e.characters[F]);d.value=[]}}else c.value=y,u.value=T,t.party=!1,t.character=!0}const p=y=>{t.message=!1,y==C.textYes&&(e.characters=e.characters.filter(T=>T.cha_id!==u.value.cha_id),t.character=!1)},h=()=>{t.errorMessage=!1},b=()=>{f.value=!f.value};return(y,T)=>(ie(),ge(ft,null,[re(t).party||re(i).guildMenu==re(C).menuRemoveMember?(ie(),ge("div",WM,[P("div",qM,[(ie(!0),ge(ft,null,Yt(re(e).characters,(R,F)=>(ie(),ge("div",{key:R.cha_id,onClick:I=>g(F,R),class:Ht(["character-card",{changing:f.value&&d.value.includes(F)}])},[Le(DM,{class:"StatusUI",character:R},null,8,["character"]),P("div",XM,[P("img",{src:R.poseGraphicUrl,alt:"",class:"charaimage"},null,8,YM)])],10,$M))),128))])])):Ye("",!0),Pt(Le(lh,{character:u.value,index:c.value,onChangeCharacter:l},null,8,["character","index"]),[[It,re(t).character]]),Pt(Le(ch,{class:"IconBack",onClick:s},null,512),[[It,re(t).party||re(t).character]]),re(i).guildMenu!=re(C).menuRemoveMember?(ie(),Lt(BM,{key:1,class:"IconParty",onClick:o})):Ye("",!0),Pt(Le(VM,{class:Ht(["IconChange",{changing:f.value}]),onClick:b},null,8,["class"]),[[It,re(t).party]]),Pt(Le(oh,{message:re(m),onConfirmationResponse:p},null,8,["message"]),[[It,re(t).message]]),Pt(Le($l,{message:re(_),onHideError:h},null,8,["message"]),[[It,re(t).errorMessage]])],64))}}),Yl=Ke(jM,[["__scopeId","data-v-2a092099"]]),$a=n=>(kn("data-v-8b8282cc"),n=n(),Nn(),n),KM={class:"information"},ZM={key:0,class:"flame"},JM=$a(()=>P("div",{class:"firstItem"},"Quest",-1)),QM=$a(()=>P("div",{class:"secondItem"},"Accept a Quest",-1)),eS=$a(()=>P("div",{class:"secondItem"},"Receive Rewards",-1)),tS=$a(()=>P("div",{class:"firstItem"},"About Member",-1)),nS=qe({__name:"Guild",setup(n){const e=$n();function t(i){e.guildMenu=i}return(i,s)=>(ie(),ge("div",KM,[re(e).guildMenu==""?(ie(),ge("div",ZM,[JM,QM,eS,tS,P("div",{class:"secondItem",onClick:s[0]||(s[0]=r=>t(re(C).menuAddMember))},Re(re(C).menuAddMember),1),P("div",{class:"secondItem",onClick:s[1]||(s[1]=r=>t(re(C).menuRemoveMember))},Re(re(C).menuRemoveMember),1)])):Ye("",!0),re(e).guildMenu==re(C).menuAddMember?(ie(),Lt(Vx,{key:1,class:"into"})):Ye("",!0),re(e).guildMenu==re(C).menuRemoveMember?(ie(),Lt(Yl,{key:2})):Ye("",!0)]))}}),iS=Ke(nS,[["__scopeId","data-v-8b8282cc"]]),sS={},rS={class:"back"};function aS(n,e){return ie(),ge("div",rS)}const oS=Ke(sS,[["render",aS],["__scopeId","data-v-13d16ec1"]]),lS=qe({__name:"ProcessBack",setup(n){const e=$n(),t=Ci();function i(){t.message?t.message=!1:t.character?t.character=!1:e.guildMenu?e.guildMenu="":e.processTown=C.statusTown}return(s,r)=>(ie(),Lt(ch,{class:"IconBack",onClick:i}))}});function uh(){return{enterFullscreen:async()=>{try{await document.documentElement.requestFullscreen()}catch(t){console.error(t)}},exitFullscreen:async()=>{try{await document.exitFullscreen()}catch(t){console.error(t)}}}}const cS="/app2/icon/town/guild.jpg",uS="/app2/icon/town/pub.jpg",fS="/app2/icon/town/forest.jpg",dS="/app2/icon/town/swamp.jpg",hS="/app2/icon/town/desert.jpg",pS="/app2/icon/town/volcano.jpg",mS="/app2/icon/town/cave.jpg",_S="/app2/icon/town/palace.jpg",gS="/app2/icon/town/tower.jpg",vS={class:"town"},xS={key:0},MS={key:0},SS=["src"],yS=["src"],ES=["src"],bS=["src"],TS=["src"],AS=["src"],wS=["src"],CS=["src"],RS=["src"],PS=qe({__name:"Town",setup(n){const{enterFullscreen:e}=uh(),t=$n(),i=Ci(),s=yr();ts(()=>{s.playBgm(C.mscTown)});async function r(o){t.processTown=o}async function a(o){await e(),t.status=C.statusDungeon,t.processDungeon=C.processSearch,t.whichDungeon=o}return(o,l)=>(ie(),ge("div",vS,[re(t).processTown==re(C).statusTown?(ie(),ge("div",xS,[re(i).party?Ye("",!0):(ie(),ge("div",MS,[P("img",{class:"guild",src:re(cS),alt:"GUILD",onClick:l[0]||(l[0]=c=>r(re(C).processGuild))},null,8,SS),P("img",{class:"pub",src:re(uS),alt:"PUB",onClick:l[1]||(l[1]=c=>r(re(C).processPub))},null,8,yS),P("img",{class:"dungeon1",src:re(fS),alt:"Dungeon1",onClick:l[2]||(l[2]=c=>a(re(C).nameDungeon1))},null,8,ES),P("img",{class:"dungeon2",src:re(dS),alt:"Dungeon2",onClick:l[3]||(l[3]=c=>a(re(C).nameDungeon2))},null,8,bS),P("img",{class:"dungeon3",src:re(hS),alt:"Dungeon3",onClick:l[4]||(l[4]=c=>a(re(C).nameDungeon3))},null,8,TS),P("img",{class:"dungeon4",src:re(pS),alt:"Dungeon4",onClick:l[5]||(l[5]=c=>a(re(C).nameDungeon4))},null,8,AS),P("img",{class:"dungeon5",src:re(mS),alt:"Dungeon5",onClick:l[6]||(l[6]=c=>a(re(C).nameDungeon5))},null,8,wS),P("img",{class:"dungeon6",src:re(_S),alt:"Dungeon6",onClick:l[7]||(l[7]=c=>a(re(C).nameDungeon6))},null,8,CS),P("img",{class:"dungeon7",src:re(gS),alt:"Dungeon7",onClick:l[8]||(l[8]=c=>a(re(C).nameDungeon7))},null,8,RS)])),Le(Yl)])):re(t).processTown==re(C).processGuild?(ie(),Lt(iS,{key:1,class:"into"})):re(t).processTown==re(C).processPub?(ie(),Lt(oS,{key:2,class:"into"})):Ye("",!0),re(t).processTown!=re(C).statusTown?(ie(),Lt(lS,{key:3,class:"ProcessBack"})):Ye("",!0)]))}}),LS=Ke(PS,[["__scopeId","data-v-34edf507"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="158",DS=0,qc=1,IS=2,fh=1,US=2,Qn=3,Ai=0,on=1,gn=2,Si=0,Ps=1,$c=2,Xc=3,Yc=4,FS=5,Gi=100,kS=101,NS=102,jc=103,Kc=104,OS=200,BS=201,HS=202,zS=203,ul=204,fl=205,GS=206,VS=207,WS=208,qS=209,$S=210,XS=211,YS=212,jS=213,KS=214,ZS=0,JS=1,QS=2,ba=3,ey=4,ty=5,ny=6,iy=7,Kl=0,sy=1,ry=2,yi=0,ay=1,oy=2,ly=3,cy=4,uy=5,dh=300,Ns=301,Os=302,dl=303,hl=304,Xa=306,pl=1e3,Dn=1001,ml=1002,en=1003,Zc=1004,fo=1005,En=1006,fy=1007,gr=1008,Ei=1009,dy=1010,hy=1011,Zl=1012,hh=1013,_i=1014,gi=1015,vr=1016,ph=1017,mh=1018,Xi=1020,py=1021,In=1023,my=1024,_y=1025,Yi=1026,Bs=1027,gy=1028,_h=1029,vy=1030,gh=1031,vh=1033,ho=33776,po=33777,mo=33778,_o=33779,Jc=35840,Qc=35841,eu=35842,tu=35843,xy=36196,nu=37492,iu=37496,su=37808,ru=37809,au=37810,ou=37811,lu=37812,cu=37813,uu=37814,fu=37815,du=37816,hu=37817,pu=37818,mu=37819,_u=37820,gu=37821,go=36492,vu=36494,xu=36495,My=36283,Mu=36284,Su=36285,yu=36286,xh=3e3,ji=3001,Sy=3200,yy=3201,Mh=0,Ey=1,bn="",zt="srgb",ri="srgb-linear",Jl="display-p3",Ya="display-p3-linear",Ta="linear",mt="srgb",Aa="rec709",wa="p3",os=7680,Eu=519,by=512,Ty=513,Ay=514,wy=515,Cy=516,Ry=517,Py=518,Ly=519,bu=35044,Tu="300 es",_l=1035,ni=2e3,Ca=2001;class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vo=Math.PI/180,gl=180/Math.PI;function Er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function Dy(n,e){return(n%e+e)%e}function xo(n,e,t){return(1-t)*n+t*e}function Au(n){return(n&n-1)===0&&n!==0}function vl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ks(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,s,r,a,o,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],g=s[0],p=s[3],h=s[6],b=s[1],y=s[4],T=s[7],R=s[2],F=s[5],I=s[8];return r[0]=a*g+o*b+l*R,r[3]=a*p+o*y+l*F,r[6]=a*h+o*T+l*I,r[1]=c*g+u*b+f*R,r[4]=c*p+u*y+f*F,r[7]=c*h+u*T+f*I,r[2]=d*g+m*b+_*R,r[5]=d*p+m*y+_*F,r[8]=d*h+m*T+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,m=c*r-a*l,_=t*f+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*c-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new it;function Sh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Iy(){const n=xr("canvas");return n.style.display="block",n}const wu={};function ur(n){n in wu||(wu[n]=!0,console.warn(n))}const Cu=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ru=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Or={[ri]:{transfer:Ta,primaries:Aa,toReference:n=>n,fromReference:n=>n},[zt]:{transfer:mt,primaries:Aa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ya]:{transfer:Ta,primaries:wa,toReference:n=>n.applyMatrix3(Ru),fromReference:n=>n.applyMatrix3(Cu)},[Jl]:{transfer:mt,primaries:wa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ru),fromReference:n=>n.applyMatrix3(Cu).convertLinearToSRGB()}},Uy=new Set([ri,Ya]),ht={enabled:!0,_workingColorSpace:ri,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Uy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Or[e].toReference,s=Or[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Or[n].primaries},getTransfer:function(n){return n===bn?Ta:Or[n].transfer}};function Ls(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function So(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class yh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=xr("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ls(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ls(t[i]/255)*255):t[i]=Ls(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fy=0;class Eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yo(s[a].image)):r.push(yo(s[a]))}else r=yo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function yo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ky=0;class ln extends qs{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=Dn,s=Dn,r=En,a=gr,o=In,l=Ei,c=ln.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Er(),this.name="",this.source=new Eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ji?zt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pl:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pl:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?ji:xh}set encoding(e){ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ji?zt:bn}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=dh;ln.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(m+1)/2,R=(h+1)/2,F=(u+d)/4,I=(f+g)/4,X=(_+p)/4;return y>T&&y>R?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=F/i,r=I/i):T>R?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=F/s,r=X/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=I/r,s=X/r),this.set(i,s,r,t),this}let b=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(f-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ny extends qs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(ur("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ji?zt:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Ny{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bh extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oy extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==m||u!==_){let p=1-o;const h=l*d+c*m+u*_+f*g,b=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const R=Math.sqrt(y),F=Math.atan2(R,h*b);p=Math.sin(p*F)/R,o=Math.sin(o*F)/R}const T=o*b;if(l=l*p+d*T,c=c*p+m*T,u=u*p+_*T,f=f*p+g*T,p===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*m-c*d,e[t+1]=l*_+u*d+c*f-o*m,e[t+2]=c*_+u*m+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new V,Pu=new br;class Tr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Hr.subVectors(this.max,Zs),cs.subVectors(e.a,Zs),us.subVectors(e.b,Zs),fs.subVectors(e.c,Zs),ci.subVectors(us,cs),ui.subVectors(fs,us),Ii.subVectors(cs,fs);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ii.y,Ii.x,0];return!bo(t,cs,us,fs,Hr)||(t=[1,0,0,0,1,0,0,0,1],!bo(t,cs,us,fs,Hr))?!1:(zr.crossVectors(ci,ui),t=[zr.x,zr.y,zr.z],bo(t,cs,us,fs,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new V,new V,new V,new V,new V,new V,new V,new V],An=new V,Br=new Tr,cs=new V,us=new V,fs=new V,ci=new V,ui=new V,Ii=new V,Zs=new V,Hr=new V,zr=new V,Ui=new V;function bo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ui.fromArray(n,r);const o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const By=new Tr,Js=new V,To=new V;class Ql{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):By.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(To)),this.expandByPoint(Js.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new V,Ao=new V,Gr=new V,fi=new V,wo=new V,Vr=new V,Co=new V;class Th{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ao.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Ao);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Gr),o=fi.dot(this.direction),l=-fi.dot(Gr),c=fi.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ao).addScaledVector(Gr,d),m}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,s,r){wo.subVectors(t,e),Vr.subVectors(i,e),Co.crossVectors(wo,Vr);let a=this.direction.dot(Co),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot(Vr.crossVectors(fi,Vr));if(l<0)return null;const c=o*this.direction.dot(wo.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(Co);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,s,r,a,o,l,c,u,f,d,m,_,g,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,d,m,_,g,p)}set(e,t,i,s,r,a,o,l,c,u,f,d,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,g=c*f;t[0]=d+g*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,g=c*f;t[0]=d-g*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hy,e,zy)}lookAt(e,t,i){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),di.crossVectors(i,hn),di.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),di.crossVectors(i,hn)),di.normalize(),Wr.crossVectors(hn,di),s[0]=di.x,s[4]=Wr.x,s[8]=hn.x,s[1]=di.y,s[5]=Wr.y,s[9]=hn.y,s[2]=di.z,s[6]=Wr.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],g=i[6],p=i[10],h=i[14],b=i[3],y=i[7],T=i[11],R=i[15],F=s[0],I=s[4],X=s[8],M=s[12],w=s[1],Y=s[5],j=s[9],ee=s[13],k=s[2],$=s[6],Z=s[10],K=s[14],le=s[3],me=s[7],ce=s[11],O=s[15];return r[0]=a*F+o*w+l*k+c*le,r[4]=a*I+o*Y+l*$+c*me,r[8]=a*X+o*j+l*Z+c*ce,r[12]=a*M+o*ee+l*K+c*O,r[1]=u*F+f*w+d*k+m*le,r[5]=u*I+f*Y+d*$+m*me,r[9]=u*X+f*j+d*Z+m*ce,r[13]=u*M+f*ee+d*K+m*O,r[2]=_*F+g*w+p*k+h*le,r[6]=_*I+g*Y+p*$+h*me,r[10]=_*X+g*j+p*Z+h*ce,r[14]=_*M+g*ee+p*K+h*O,r[3]=b*F+y*w+T*k+R*le,r[7]=b*I+y*Y+T*$+R*me,r[11]=b*X+y*j+T*Z+R*ce,r[15]=b*M+y*ee+T*K+R*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15];return _*(+r*l*f-s*c*f-r*o*d+i*c*d+s*o*m-i*l*m)+g*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*u-r*l*u)+p*(+t*c*f-t*o*m-r*a*f+i*a*m+r*o*u-i*c*u)+h*(-s*o*u-t*l*f+t*o*d+s*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],b=f*p*c-g*d*c+g*l*m-o*p*m-f*l*h+o*d*h,y=_*d*c-u*p*c-_*l*m+a*p*m+u*l*h-a*d*h,T=u*g*c-_*f*c+_*o*m-a*g*m-u*o*h+a*f*h,R=_*f*l-u*g*l-_*o*d+a*g*d+u*o*p-a*f*p,F=t*b+i*y+s*T+r*R;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=b*I,e[1]=(g*d*r-f*p*r-g*s*m+i*p*m+f*s*h-i*d*h)*I,e[2]=(o*p*r-g*l*r+g*s*c-i*p*c-o*s*h+i*l*h)*I,e[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*m-i*l*m)*I,e[4]=y*I,e[5]=(u*p*r-_*d*r+_*s*m-t*p*m-u*s*h+t*d*h)*I,e[6]=(_*l*r-a*p*r-_*s*c+t*p*c+a*s*h-t*l*h)*I,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*m+t*l*m)*I,e[8]=T*I,e[9]=(_*f*r-u*g*r-_*i*m+t*g*m+u*i*h-t*f*h)*I,e[10]=(a*g*r-_*o*r+_*i*c-t*g*c-a*i*h+t*o*h)*I,e[11]=(u*o*r-a*f*r-u*i*c+t*f*c+a*i*m-t*o*m)*I,e[12]=R*I,e[13]=(u*g*s-_*f*s+_*i*d-t*g*d-u*i*p+t*f*p)*I,e[14]=(_*o*s-a*g*s-_*i*l+t*g*l+a*i*p-t*o*p)*I,e[15]=(a*f*s-u*o*s+u*i*l-t*f*l-a*i*d+t*o*d)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,m=r*u,_=r*f,g=a*u,p=a*f,h=o*f,b=l*c,y=l*u,T=l*f,R=i.x,F=i.y,I=i.z;return s[0]=(1-(g+h))*R,s[1]=(m+T)*R,s[2]=(_-y)*R,s[3]=0,s[4]=(m-T)*F,s[5]=(1-(d+h))*F,s[6]=(p+b)*F,s[7]=0,s[8]=(_+y)*I,s[9]=(p-b)*I,s[10]=(1-(d+g))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ds.set(s[0],s[1],s[2]).length();const a=ds.set(s[4],s[5],s[6]).length(),o=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);const c=1/r,u=1/a,f=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,t.setFromRotationMatrix(wn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ni){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let m,_;if(o===ni)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ca)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ni){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(a-r),d=(t+e)*c,m=(i+s)*u;let _,g;if(o===ni)_=(a+r)*f,g=-2*f;else if(o===Ca)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ds=new V,wn=new Rt,Hy=new V(0,0,0),zy=new V(1,1,1),di=new V,Wr=new V,hn=new V,Lu=new Rt,Du=new br;class ja{constructor(e=0,t=0,i=0,s=ja.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ja.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const Iu=new V,hs=new br,Kn=new Rt,qr=new V,Qs=new V,Vy=new V,Wy=new br,Uu=new V(1,0,0),Fu=new V(0,1,0),ku=new V(0,0,1),qy={type:"added"},$y={type:"removed"};class cn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new V,t=new ja,i=new br,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new it}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Uu,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uu,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qr.copy(e):qr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Qs,qr,this.up):Kn.lookAt(qr,Qs,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Kn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($y)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,Vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}cn.DEFAULT_UP=new V(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new V,Zn=new V,Ro=new V,Jn=new V,ps=new V,ms=new V,Nu=new V,Po=new V,Lo=new V,Do=new V;let $r=!1;class Pn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),Zn.subVectors(i,t),Ro.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(Zn),l=Cn.dot(Ro),c=Zn.dot(Zn),u=Zn.dot(Ro),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,i,s,r,a,o,l){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Jn),l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),Zn.subVectors(e,t),Cn.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Cn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,i),ms.subVectors(r,i),Po.subVectors(e,i);const l=ps.dot(Po),c=ms.dot(Po);if(l<=0&&c<=0)return t.copy(i);Lo.subVectors(e,s);const u=ps.dot(Lo),f=ms.dot(Lo);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ps,a);Do.subVectors(e,r);const m=ps.dot(Do),_=ms.dot(Do);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(ms,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Nu.subVectors(r,s),o=(f-u)/(f-u+(m-_)),t.copy(s).addScaledVector(Nu,o);const h=1/(p+g+d);return a=g*h,o=d*h,t.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Io(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=Dy(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Io(a,r,e+1/3),this.g=Io(a,r,e),this.b=Io(a,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=Ah[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ht.fromWorkingColorSpace(qt.copy(this),e),Math.round(rn(qt.r*255,0,255))*65536+Math.round(rn(qt.g*255,0,255))*256+Math.round(rn(qt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=zt){ht.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Xr);const i=xo(hi.h,Xr.h,t),s=xo(hi.s,Xr.s,t),r=xo(hi.l,Xr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new lt;lt.NAMES=Ah;let Xy=0;class Ar extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=Ps,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=fl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ul&&(i.blendSrc=this.blendSrc),this.blendDst!==fl&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ba&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wh extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new V,Yr=new ct;class qn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bu,this.updateRange={offset:0,count:-1},this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ch extends qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rh extends qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ki extends qn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Yy=0;const Sn=new Rt,Uo=new cn,_s=new V,pn=new Tr,er=new Tr,Ot=new V;class ss extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sh(e)?Rh:Ch)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ki(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(pn.min,er.min),pn.expandByPoint(Ot),Ot.addVectors(pn.max,er.max),pn.expandByPoint(Ot)):(pn.expandByPoint(er.min),pn.expandByPoint(er.max))}pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ot.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),Ot.add(_s)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new V,u[w]=new V;const f=new V,d=new V,m=new V,_=new ct,g=new ct,p=new ct,h=new V,b=new V;function y(w,Y,j){f.fromArray(s,w*3),d.fromArray(s,Y*3),m.fromArray(s,j*3),_.fromArray(a,w*2),g.fromArray(a,Y*2),p.fromArray(a,j*2),d.sub(f),m.sub(f),g.sub(_),p.sub(_);const ee=1/(g.x*p.y-p.x*g.y);isFinite(ee)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(ee),b.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(ee),c[w].add(h),c[Y].add(h),c[j].add(h),u[w].add(b),u[Y].add(b),u[j].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let w=0,Y=T.length;w<Y;++w){const j=T[w],ee=j.start,k=j.count;for(let $=ee,Z=ee+k;$<Z;$+=3)y(i[$+0],i[$+1],i[$+2])}const R=new V,F=new V,I=new V,X=new V;function M(w){I.fromArray(r,w*3),X.copy(I);const Y=c[w];R.copy(Y),R.sub(I.multiplyScalar(I.dot(Y))).normalize(),F.crossVectors(X,Y);const ee=F.dot(u[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=ee}for(let w=0,Y=T.length;w<Y;++w){const j=T[w],ee=j.start,k=j.count;for(let $=ee,Z=ee+k;$<Z;$+=3)M(i[$+0]),M(i[$+1]),M(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[m++]}return new qn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ss,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new Rt,Fi=new Th,jr=new Ql,Bu=new V,gs=new V,vs=new V,xs=new V,Fo=new V,Kr=new V,Zr=new ct,Jr=new ct,Qr=new ct,Hu=new V,zu=new V,Gu=new V,ea=new V,ta=new V;class tn extends cn{constructor(e=new ss,t=new wh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Fo.fromBufferAttribute(f,e),a?Kr.addScaledVector(Fo,u):Kr.addScaledVector(Fo.sub(t),u))}t.add(Kr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(r),Fi.copy(e.ray).recast(e.near),!(jr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(jr,Bu)===null||Fi.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Ou.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(Ou),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,R=y;T<R;T+=3){const F=o.getX(T),I=o.getX(T+1),X=o.getX(T+2);s=na(this,h,e,i,c,u,f,F,I,X),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const b=o.getX(p),y=o.getX(p+1),T=o.getX(p+2);s=na(this,a,e,i,c,u,f,b,y,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,R=y;T<R;T+=3){const F=T,I=T+1,X=T+2;s=na(this,h,e,i,c,u,f,F,I,X),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const b=p,y=p+1,T=p+2;s=na(this,a,e,i,c,u,f,b,y,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function jy(n,e,t,i,s,r,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ai,o),l===null)return null;ta.copy(o),ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:n}}function na(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,gs),n.getVertexPosition(l,vs),n.getVertexPosition(c,xs);const u=jy(n,e,t,i,gs,vs,xs,ea);if(u){s&&(Zr.fromBufferAttribute(s,o),Jr.fromBufferAttribute(s,l),Qr.fromBufferAttribute(s,c),u.uv=Pn.getInterpolation(ea,gs,vs,xs,Zr,Jr,Qr,new ct)),r&&(Zr.fromBufferAttribute(r,o),Jr.fromBufferAttribute(r,l),Qr.fromBufferAttribute(r,c),u.uv1=Pn.getInterpolation(ea,gs,vs,xs,Zr,Jr,Qr,new ct),u.uv2=u.uv1),a&&(Hu.fromBufferAttribute(a,o),zu.fromBufferAttribute(a,l),Gu.fromBufferAttribute(a,c),u.normal=Pn.getInterpolation(ea,gs,vs,xs,Hu,zu,Gu,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};Pn.getNormal(gs,vs,xs,f.normal),u.face=f}return u}class wr extends ss{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(u,3)),this.setAttribute("uv",new Ki(f,2));function _(g,p,h,b,y,T,R,F,I,X,M){const w=T/I,Y=R/X,j=T/2,ee=R/2,k=F/2,$=I+1,Z=X+1;let K=0,le=0;const me=new V;for(let ce=0;ce<Z;ce++){const O=ce*Y-ee;for(let q=0;q<$;q++){const pe=q*w-j;me[g]=pe*b,me[p]=O*y,me[h]=k,c.push(me.x,me.y,me.z),me[g]=0,me[p]=0,me[h]=F>0?1:-1,u.push(me.x,me.y,me.z),f.push(q/I),f.push(1-ce/X),K+=1}}for(let ce=0;ce<X;ce++)for(let O=0;O<I;O++){const q=d+O+$*ce,pe=d+O+$*(ce+1),ve=d+(O+1)+$*(ce+1),be=d+(O+1)+$*ce;l.push(q,pe,be),l.push(pe,ve,be),le+=6}o.addGroup(m,le,M),m+=le,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=Hs(n[t]);for(const s in i)e[s]=i[s]}return e}function Ky(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ph(n){return n.getRenderTarget()===null?n.outputColorSpace:ht.workingColorSpace}const Zy={clone:Hs,merge:Jt};var Jy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jy,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lh extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends Lh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,Ss=1;class eE extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Ms,Ss,e,t);s.layers=this.layers,this.add(s);const r=new _n(Ms,Ss,e,t);r.layers=this.layers,this.add(r);const a=new _n(Ms,Ss,e,t);a.layers=this.layers,this.add(a);const o=new _n(Ms,Ss,e,t);o.layers=this.layers,this.add(o);const l=new _n(Ms,Ss,e,t);l.layers=this.layers,this.add(l);const c=new _n(Ms,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Dh extends ln{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tE extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ur("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ji?zt:bn),this.texture=new Dh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wr(5,5,5),r=new es({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Si});r.uniforms.tEquirect.value=t;const a=new tn(s,r),o=t.minFilter;return t.minFilter===gr&&(t.minFilter=En),new eE(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const ko=new V,nE=new V,iE=new it;class Oi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ko.subVectors(i,t).cross(nE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ko),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||iE.getNormalMatrix(e),s=this.coplanarPoint(ko).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Ql,ia=new V;class tc{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],m=s[8],_=s[9],g=s[10],p=s[11],h=s[12],b=s[13],y=s[14],T=s[15];if(i[0].setComponents(l-r,d-c,p-m,T-h).normalize(),i[1].setComponents(l+r,d+c,p+m,T+h).normalize(),i[2].setComponents(l+a,d+u,p+_,T+b).normalize(),i[3].setComponents(l-a,d-u,p-_,T-b).normalize(),i[4].setComponents(l-o,d-f,p-g,T-y).normalize(),t===ni)i[5].setComponents(l+o,d+f,p+g,T+y).normalize();else if(t===Ca)i[5].setComponents(o,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ih(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function sE(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ds extends ss{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,m=[],_=[],g=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let y=0;y<c;y++){const T=y*f-r;_.push(T,-b,0),g.push(0,0,1),p.push(y/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const y=b+c*h,T=b+c*(h+1),R=b+1+c*(h+1),F=b+1+c*h;m.push(y,T,F),m.push(T,R,F)}this.setIndex(m),this.setAttribute("position",new Ki(_,3)),this.setAttribute("normal",new Ki(g,3)),this.setAttribute("uv",new Ki(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}var rE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
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
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fE=`#ifdef USE_AOMAP
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
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_E=`#ifdef USE_IRIDESCENCE
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
#endif`,gE=`#ifdef USE_BUMPMAP
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
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,AE=`#define PI 3.141592653589793
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
} // validated`,wE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CE=`vec3 transformedNormal = objectNormal;
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
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",UE=`
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
}`,FE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WE=`#ifdef USE_GRADIENTMAP
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
}`,qE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jE=`uniform bool receiveShadow;
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
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tb=`PhysicalMaterial material;
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
#endif`,nb=`struct PhysicalMaterial {
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
}`,ib=`
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
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
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ab=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ob=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hb=`#if defined( USE_POINTS_UV )
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
#endif`,pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_b=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gb=`#ifdef USE_MORPHNORMALS
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
#endif`,vb=`#ifdef USE_MORPHTARGETS
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
#endif`,xb=`#ifdef USE_MORPHTARGETS
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
#endif`,Mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tb=`#ifdef USE_NORMALMAP
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
#endif`,Ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zb=`float getShadowMask() {
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
}`,Gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vb=`#ifdef USE_SKINNING
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
#endif`,Wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qb=`#ifdef USE_SKINNING
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
#endif`,$b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kb=`#ifdef USE_TRANSMISSION
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
#endif`,Zb=`#ifdef USE_TRANSMISSION
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
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
}`,c1=`#if DEPTH_PACKING == 3200
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
}`,u1=`#define DISTANCE
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
}`,f1=`#define DISTANCE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
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
}`,m1=`uniform vec3 diffuse;
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
}`,_1=`#include <common>
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
}`,g1=`uniform vec3 diffuse;
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
}`,v1=`#define LAMBERT
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
}`,x1=`#define LAMBERT
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
}`,M1=`#define MATCAP
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
}`,S1=`#define MATCAP
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
}`,y1=`#define NORMAL
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
}`,E1=`#define NORMAL
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
}`,b1=`#define PHONG
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
}`,T1=`#define PHONG
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
}`,A1=`#define STANDARD
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
}`,w1=`#define STANDARD
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
}`,C1=`#define TOON
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
}`,R1=`#define TOON
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
}`,P1=`uniform float size;
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
}`,L1=`uniform vec3 diffuse;
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
}`,D1=`#include <common>
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
}`,I1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,F1=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:rE,alphahash_pars_fragment:aE,alphamap_fragment:oE,alphamap_pars_fragment:lE,alphatest_fragment:cE,alphatest_pars_fragment:uE,aomap_fragment:fE,aomap_pars_fragment:dE,begin_vertex:hE,beginnormal_vertex:pE,bsdfs:mE,iridescence_fragment:_E,bumpmap_pars_fragment:gE,clipping_planes_fragment:vE,clipping_planes_pars_fragment:xE,clipping_planes_pars_vertex:ME,clipping_planes_vertex:SE,color_fragment:yE,color_pars_fragment:EE,color_pars_vertex:bE,color_vertex:TE,common:AE,cube_uv_reflection_fragment:wE,defaultnormal_vertex:CE,displacementmap_pars_vertex:RE,displacementmap_vertex:PE,emissivemap_fragment:LE,emissivemap_pars_fragment:DE,colorspace_fragment:IE,colorspace_pars_fragment:UE,envmap_fragment:FE,envmap_common_pars_fragment:kE,envmap_pars_fragment:NE,envmap_pars_vertex:OE,envmap_physical_pars_fragment:KE,envmap_vertex:BE,fog_vertex:HE,fog_pars_vertex:zE,fog_fragment:GE,fog_pars_fragment:VE,gradientmap_pars_fragment:WE,lightmap_fragment:qE,lightmap_pars_fragment:$E,lights_lambert_fragment:XE,lights_lambert_pars_fragment:YE,lights_pars_begin:jE,lights_toon_fragment:ZE,lights_toon_pars_fragment:JE,lights_phong_fragment:QE,lights_phong_pars_fragment:eb,lights_physical_fragment:tb,lights_physical_pars_fragment:nb,lights_fragment_begin:ib,lights_fragment_maps:sb,lights_fragment_end:rb,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:ob,logdepthbuf_pars_vertex:lb,logdepthbuf_vertex:cb,map_fragment:ub,map_pars_fragment:fb,map_particle_fragment:db,map_particle_pars_fragment:hb,metalnessmap_fragment:pb,metalnessmap_pars_fragment:mb,morphcolor_vertex:_b,morphnormal_vertex:gb,morphtarget_pars_vertex:vb,morphtarget_vertex:xb,normal_fragment_begin:Mb,normal_fragment_maps:Sb,normal_pars_fragment:yb,normal_pars_vertex:Eb,normal_vertex:bb,normalmap_pars_fragment:Tb,clearcoat_normal_fragment_begin:Ab,clearcoat_normal_fragment_maps:wb,clearcoat_pars_fragment:Cb,iridescence_pars_fragment:Rb,opaque_fragment:Pb,packing:Lb,premultiplied_alpha_fragment:Db,project_vertex:Ib,dithering_fragment:Ub,dithering_pars_fragment:Fb,roughnessmap_fragment:kb,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Ob,shadowmap_pars_vertex:Bb,shadowmap_vertex:Hb,shadowmask_pars_fragment:zb,skinbase_vertex:Gb,skinning_pars_vertex:Vb,skinning_vertex:Wb,skinnormal_vertex:qb,specularmap_fragment:$b,specularmap_pars_fragment:Xb,tonemapping_fragment:Yb,tonemapping_pars_fragment:jb,transmission_fragment:Kb,transmission_pars_fragment:Zb,uv_pars_fragment:Jb,uv_pars_vertex:Qb,uv_vertex:e1,worldpos_vertex:t1,background_vert:n1,background_frag:i1,backgroundCube_vert:s1,backgroundCube_frag:r1,cube_vert:a1,cube_frag:o1,depth_vert:l1,depth_frag:c1,distanceRGBA_vert:u1,distanceRGBA_frag:f1,equirect_vert:d1,equirect_frag:h1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:_1,meshbasic_frag:g1,meshlambert_vert:v1,meshlambert_frag:x1,meshmatcap_vert:M1,meshmatcap_frag:S1,meshnormal_vert:y1,meshnormal_frag:E1,meshphong_vert:b1,meshphong_frag:T1,meshphysical_vert:A1,meshphysical_frag:w1,meshtoon_vert:C1,meshtoon_frag:R1,points_vert:P1,points_frag:L1,shadow_vert:D1,shadow_frag:I1,sprite_vert:U1,sprite_frag:F1},we={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},zn={basic:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Jt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Jt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Jt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Jt([we.points,we.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Jt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Jt([we.common,we.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Jt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Jt([we.sprite,we.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Jt([we.common,we.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Jt([we.lights,we.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};zn.physical={uniforms:Jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const sa={r:0,b:0,g:0};function k1(n,e,t,i,s,r,a){const o=new lt(0);let l=r===!0?0:1,c,u,f=null,d=0,m=null;function _(p,h){let b=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Xa)?(u===void 0&&(u=new tn(new wr(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:Hs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ht.getTransfer(y.colorSpace)!==mt,(f!==y||d!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new tn(new Ds(2,2),new es({name:"BackgroundMaterial",uniforms:Hs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){p.getRGB(sa,Ph(n)),i.buffers.color.setClear(sa.r,sa.g,sa.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function N1(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function f(k,$,Z,K,le){let me=!1;if(a){const ce=g(K,Z,$);c!==ce&&(c=ce,m(c.object)),me=h(k,K,Z,le),me&&b(k,K,Z,le)}else{const ce=$.wireframe===!0;(c.geometry!==K.id||c.program!==Z.id||c.wireframe!==ce)&&(c.geometry=K.id,c.program=Z.id,c.wireframe=ce,me=!0)}le!==null&&t.update(le,n.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,X(k,$,Z,K),le!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(k){return i.isWebGL2?n.bindVertexArray(k):r.bindVertexArrayOES(k)}function _(k){return i.isWebGL2?n.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function g(k,$,Z){const K=Z.wireframe===!0;let le=o[k.id];le===void 0&&(le={},o[k.id]=le);let me=le[$.id];me===void 0&&(me={},le[$.id]=me);let ce=me[K];return ce===void 0&&(ce=p(d()),me[K]=ce),ce}function p(k){const $=[],Z=[],K=[];for(let le=0;le<s;le++)$[le]=0,Z[le]=0,K[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Z,attributeDivisors:K,object:k,attributes:{},index:null}}function h(k,$,Z,K){const le=c.attributes,me=$.attributes;let ce=0;const O=Z.getAttributes();for(const q in O)if(O[q].location>=0){const ve=le[q];let be=me[q];if(be===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(be=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(be=k.instanceColor)),ve===void 0||ve.attribute!==be||be&&ve.data!==be.data)return!0;ce++}return c.attributesNum!==ce||c.index!==K}function b(k,$,Z,K){const le={},me=$.attributes;let ce=0;const O=Z.getAttributes();for(const q in O)if(O[q].location>=0){let ve=me[q];ve===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(ve=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(ve=k.instanceColor));const be={};be.attribute=ve,ve&&ve.data&&(be.data=ve.data),le[q]=be,ce++}c.attributes=le,c.attributesNum=ce,c.index=K}function y(){const k=c.newAttributes;for(let $=0,Z=k.length;$<Z;$++)k[$]=0}function T(k){R(k,0)}function R(k,$){const Z=c.newAttributes,K=c.enabledAttributes,le=c.attributeDivisors;Z[k]=1,K[k]===0&&(n.enableVertexAttribArray(k),K[k]=1),le[k]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,$),le[k]=$)}function F(){const k=c.newAttributes,$=c.enabledAttributes;for(let Z=0,K=$.length;Z<K;Z++)$[Z]!==k[Z]&&(n.disableVertexAttribArray(Z),$[Z]=0)}function I(k,$,Z,K,le,me,ce){ce===!0?n.vertexAttribIPointer(k,$,Z,le,me):n.vertexAttribPointer(k,$,Z,K,le,me)}function X(k,$,Z,K){if(i.isWebGL2===!1&&(k.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const le=K.attributes,me=Z.getAttributes(),ce=$.defaultAttributeValues;for(const O in me){const q=me[O];if(q.location>=0){let pe=le[O];if(pe===void 0&&(O==="instanceMatrix"&&k.instanceMatrix&&(pe=k.instanceMatrix),O==="instanceColor"&&k.instanceColor&&(pe=k.instanceColor)),pe!==void 0){const ve=pe.normalized,be=pe.itemSize,ye=t.get(pe);if(ye===void 0)continue;const Fe=ye.buffer,Ie=ye.type,ke=ye.bytesPerElement,ut=i.isWebGL2===!0&&(Ie===n.INT||Ie===n.UNSIGNED_INT||pe.gpuType===hh);if(pe.isInterleavedBufferAttribute){const Ge=pe.data,x=Ge.stride,U=pe.offset;if(Ge.isInstancedInterleavedBuffer){for(let L=0;L<q.locationSize;L++)R(q.location+L,Ge.meshPerAttribute);k.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let L=0;L<q.locationSize;L++)T(q.location+L);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let L=0;L<q.locationSize;L++)I(q.location+L,be/q.locationSize,Ie,ve,x*ke,(U+be/q.locationSize*L)*ke,ut)}else{if(pe.isInstancedBufferAttribute){for(let Ge=0;Ge<q.locationSize;Ge++)R(q.location+Ge,pe.meshPerAttribute);k.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ge=0;Ge<q.locationSize;Ge++)T(q.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Ge=0;Ge<q.locationSize;Ge++)I(q.location+Ge,be/q.locationSize,Ie,ve,be*ke,be/q.locationSize*Ge*ke,ut)}}else if(ce!==void 0){const ve=ce[O];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(q.location,ve);break;case 3:n.vertexAttrib3fv(q.location,ve);break;case 4:n.vertexAttrib4fv(q.location,ve);break;default:n.vertexAttrib1fv(q.location,ve)}}}}F()}function M(){j();for(const k in o){const $=o[k];for(const Z in $){const K=$[Z];for(const le in K)_(K[le].object),delete K[le];delete $[Z]}delete o[k]}}function w(k){if(o[k.id]===void 0)return;const $=o[k.id];for(const Z in $){const K=$[Z];for(const le in K)_(K[le].object),delete K[le];delete $[Z]}delete o[k.id]}function Y(k){for(const $ in o){const Z=o[$];if(Z[k.id]===void 0)continue;const K=Z[k.id];for(const le in K)_(K[le].object),delete K[le];delete Z[k.id]}}function j(){ee(),u=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:ee,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:Y,initAttributes:y,enableAttribute:T,disableUnusedAttributes:F}}function O1(n,e,t,i){const s=i.isWebGL2;let r;function a(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,m;if(s)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function B1(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=a||e.has("OES_texture_float"),R=y&&T,F=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:F}}function H1(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Oi,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const b=r?0:i,y=b*4;let T=h.clippingState||null;l.value=T,T=u(_,d,y,m);for(let R=0;R!==y;++R)T[R]=t[R];h.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,T=m;y!==g;++y,T+=4)a.copy(f[y]).applyMatrix4(b,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function z1(n){let e=new WeakMap;function t(a,o){return o===dl?a.mapping=Ns:o===hl&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===dl||o===hl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tE(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class G1 extends Lh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,Vu=[.125,.215,.35,.446,.526,.582],Vi=20,No=new G1,Wu=new lt;let Oo=null,Bo=0,Ho=0;const Bi=(1+Math.sqrt(5))/2,ys=1/Bi,qu=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Bi,ys),new V(0,Bi,-ys),new V(ys,0,Bi),new V(-ys,0,Bi),new V(Bi,ys,0),new V(-Bi,ys,0)];class $u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,Bo,Ho),e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:vr,format:In,colorSpace:ri,depthBuffer:!1},s=Xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V1(r)),this._blurMaterial=W1(r,e,t)}return s}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,i,s){const o=new _n(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Wu),u.toneMapping=yi,u.autoClear=!1;const m=new wh({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new tn(new wr,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Wu),g=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;ra(s,b*y,h>2?y:0,y,y),u.setRenderTarget(s),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ns||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new tn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ra(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,No)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qu[(s-1)%qu.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new tn(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):Vi;p>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const h=[];let b=0;for(let I=0;I<Vi;++I){const X=I/g,M=Math.exp(-X*X/2);h.push(M),I===0?b+=M:I<p&&(b+=2*M)}for(let I=0;I<h.length;I++)h[I]=h[I]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const T=this._sizeLods[s],R=3*T*(s>y-Ts?s-y+Ts:0),F=4*(this._cubeSize-T);ra(t,R,F,3*T,2*T),l.setRenderTarget(t),l.render(f,No)}}function V1(n){const e=[],t=[],i=[];let s=n;const r=n-Ts+1+Vu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ts?l=Vu[a-n+Ts-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,g=3,p=2,h=1,b=new Float32Array(g*_*m),y=new Float32Array(p*_*m),T=new Float32Array(h*_*m);for(let F=0;F<m;F++){const I=F%3*2/3-1,X=F>2?0:-1,M=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];b.set(M,g*_*F),y.set(d,p*_*F);const w=[F,F,F,F,F,F];T.set(w,h*_*F)}const R=new ss;R.setAttribute("position",new qn(b,g)),R.setAttribute("uv",new qn(y,p)),R.setAttribute("faceIndex",new qn(T,h)),e.push(R),s>Ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xu(n,e,t){const i=new Qi(n,e,t);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function W1(n,e,t){const i=new Float32Array(Vi),s=new V(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Yu(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ju(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function q1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===dl||l===hl,u=l===Ns||l===Os;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new $u(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new $u(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function $1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function X1(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,h=g.length;p<h;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let y=0,T=b.length;y<T;y+=3){const R=b[y+0],F=b[y+1],I=b[y+2];d.push(R,F,F,I,I,R)}}else if(_!==void 0){const b=_.array;g=_.version;for(let y=0,T=b.length/3-1;y<T;y+=3){const R=y+0,F=y+1,I=y+2;d.push(R,F,F,I,I,R)}}else return;const p=new(Sh(d)?Rh:Ch)(d,1);p.version=g;const h=r.get(f);h&&e.remove(h),r.set(f,p)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Y1(n,e,t,i){const s=i.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(r,m,o,d*l),t.update(m,r,1)}function f(d,m,_){if(_===0)return;let g,p;if(s)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,o,d*l,_),t.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function j1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function K1(n,e){return n[0]-e[0]}function Z1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function J1(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let $=function(){ee.dispose(),r.delete(u),u.removeEventListener("dispose",$)};var m=$;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],X=u.morphAttributes.color||[];let M=0;y===!0&&(M=1),T===!0&&(M=2),R===!0&&(M=3);let w=u.attributes.position.count*M,Y=1;w>e.maxTextureSize&&(Y=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const j=new Float32Array(w*Y*4*g),ee=new bh(j,w,Y,g);ee.type=gi,ee.needsUpdate=!0;const k=M*4;for(let Z=0;Z<g;Z++){const K=F[Z],le=I[Z],me=X[Z],ce=w*Y*4*Z;for(let O=0;O<K.count;O++){const q=O*k;y===!0&&(a.fromBufferAttribute(K,O),j[ce+q+0]=a.x,j[ce+q+1]=a.y,j[ce+q+2]=a.z,j[ce+q+3]=0),T===!0&&(a.fromBufferAttribute(le,O),j[ce+q+4]=a.x,j[ce+q+5]=a.y,j[ce+q+6]=a.z,j[ce+q+7]=0),R===!0&&(a.fromBufferAttribute(me,O),j[ce+q+8]=a.x,j[ce+q+9]=a.y,j[ce+q+10]=a.z,j[ce+q+11]=me.itemSize===4?a.w:1)}}p={count:g,texture:ee,size:new ct(w,Y)},r.set(u,p),u.addEventListener("dispose",$)}let h=0;for(let y=0;y<d.length;y++)h+=d[y];const b=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let T=0;T<_;T++)g[T]=[T,0];i[u.id]=g}for(let T=0;T<_;T++){const R=g[T];R[0]=T,R[1]=d[T]}g.sort(Z1);for(let T=0;T<8;T++)T<_&&g[T][1]?(o[T][0]=g[T][0],o[T][1]=g[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(K1);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let b=0;for(let T=0;T<8;T++){const R=o[T],F=R[0],I=R[1];F!==Number.MAX_SAFE_INTEGER&&I?(p&&u.getAttribute("morphTarget"+T)!==p[F]&&u.setAttribute("morphTarget"+T,p[F]),h&&u.getAttribute("morphNormal"+T)!==h[F]&&u.setAttribute("morphNormal"+T,h[F]),s[T]=I,b+=I):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),h&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),s[T]=0)}const y=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Q1(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Uh=new ln,Fh=new bh,kh=new Oy,Nh=new Dh,Ku=[],Zu=[],Ju=new Float32Array(16),Qu=new Float32Array(9),ef=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ka(n,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function nT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function iT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function sT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;ef.set(i),n.uniformMatrix2fv(this.addr,!1,ef),kt(t,i)}}function rT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;Qu.set(i),n.uniformMatrix3fv(this.addr,!1,Qu),kt(t,i)}}function aT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;Ju.set(i),n.uniformMatrix4fv(this.addr,!1,Ju),kt(t,i)}}function oT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function cT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function uT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function fT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function hT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function pT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function mT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Uh,s)}function _T(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||kh,s)}function gT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Nh,s)}function vT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Fh,s)}function xT(n){switch(n){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return sT;case 35675:return rT;case 35676:return aT;case 5124:case 35670:return oT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return fT;case 36294:return dT;case 36295:return hT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return vT}}function MT(n,e){n.uniform1fv(this.addr,e)}function ST(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function yT(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function ET(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function bT(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function TT(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function AT(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wT(n,e){n.uniform1iv(this.addr,e)}function CT(n,e){n.uniform2iv(this.addr,e)}function RT(n,e){n.uniform3iv(this.addr,e)}function PT(n,e){n.uniform4iv(this.addr,e)}function LT(n,e){n.uniform1uiv(this.addr,e)}function DT(n,e){n.uniform2uiv(this.addr,e)}function IT(n,e){n.uniform3uiv(this.addr,e)}function UT(n,e){n.uniform4uiv(this.addr,e)}function FT(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Uh,r[a])}function kT(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||kh,r[a])}function NT(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nh,r[a])}function OT(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Fh,r[a])}function BT(n){switch(n){case 5126:return MT;case 35664:return ST;case 35665:return yT;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return wT;case 35667:case 35671:return CT;case 35668:case 35672:return RT;case 35669:case 35673:return PT;case 5125:return LT;case 36294:return DT;case 36295:return IT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return OT}}class HT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=xT(t.type)}}class zT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=BT(t.type)}}class GT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function tf(n,e){n.seq.push(e),n.map[e.id]=e}function VT(n,e,t){const i=n.name,s=i.length;for(zo.lastIndex=0;;){const r=zo.exec(i),a=zo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){tf(t,c===void 0?new HT(o,n,e):new zT(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new GT(o),tf(t,f)),t=f}}}class ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);VT(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function nf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const WT=37297;let qT=0;function $T(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function XT(n){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(n);let i;switch(e===t?i="":e===wa&&t===Aa?i="LinearDisplayP3ToLinearSRGB":e===Aa&&t===wa&&(i="LinearSRGBToLinearDisplayP3"),n){case ri:case Ya:return[i,"LinearTransferOETF"];case zt:case Jl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function sf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$T(n.getShaderSource(e),a)}else return s}function YT(n,e){const t=XT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jT(n,e){let t;switch(e){case ay:t="Linear";break;case oy:t="Reinhard";break;case ly:t="OptimizedCineon";break;case cy:t="ACESFilmic";break;case uy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function KT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function ZT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function JT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function rr(n){return n!==""}function rf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function af(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(n){return n.replace(QT,tA)}const eA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tA(n,e){let t=Qe[e];if(t===void 0){const i=eA.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(n){return n.replace(nA,iA)}function iA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===US?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function rA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Os:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function oA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case sy:e="ENVMAP_BLENDING_MIX";break;case ry:e="ENVMAP_BLENDING_ADD";break}return e}function lA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cA(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=sA(t),c=rA(t),u=aA(t),f=oA(t),d=lA(t),m=t.isWebGL2?"":KT(t),_=ZT(r),g=s.createProgram();let p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rr).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rr).join(`
`),h.length>0&&(h+=`
`)):(p=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),h=[m,lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==yi?jT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,YT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=xl(a),a=rf(a,t),a=af(a,t),o=xl(o),o=rf(o,t),o=af(o,t),a=of(a),o=of(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=b+p+a,T=b+h+o,R=nf(s,s.VERTEX_SHADER,y),F=nf(s,s.FRAGMENT_SHADER,T);s.attachShader(g,R),s.attachShader(g,F),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function I(Y){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(g).trim(),ee=s.getShaderInfoLog(R).trim(),k=s.getShaderInfoLog(F).trim();let $=!0,Z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,R,F);else{const K=sf(s,R,"vertex"),le=sf(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+K+`
`+le)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(ee===""||k==="")&&(Z=!1);Z&&(Y.diagnostics={runnable:$,programLog:j,vertexShader:{log:ee,prefix:p},fragmentShader:{log:k,prefix:h}})}s.deleteShader(R),s.deleteShader(F),X=new ma(s,g),M=JT(s,g)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,WT)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=F,this}let uA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new dA(e),t.set(e,i)),i}}class dA{constructor(e){this.id=uA++,this.code=e,this.usedTimes=0}}function hA(n,e,t,i,s,r,a){const o=new ec,l=new fA,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,w,Y,j,ee){const k=j.fog,$=ee.geometry,Z=M.isMeshStandardMaterial?j.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),le=K&&K.mapping===Xa?K.image.height:null,me=_[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ce=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,O=ce!==void 0?ce.length:0;let q=0;$.morphAttributes.position!==void 0&&(q=1),$.morphAttributes.normal!==void 0&&(q=2),$.morphAttributes.color!==void 0&&(q=3);let pe,ve,be,ye;if(me){const Mt=zn[me];pe=Mt.vertexShader,ve=Mt.fragmentShader}else pe=M.vertexShader,ve=M.fragmentShader,l.update(M),be=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const Fe=n.getRenderTarget(),Ie=ee.isInstancedMesh===!0,ke=!!M.map,ut=!!M.matcap,Ge=!!K,x=!!M.aoMap,U=!!M.lightMap,L=!!M.bumpMap,G=!!M.normalMap,z=!!M.displacementMap,ue=!!M.emissiveMap,fe=!!M.metalnessMap,Q=!!M.roughnessMap,de=M.anisotropy>0,ae=M.clearcoat>0,Te=M.iridescence>0,E=M.sheen>0,v=M.transmission>0,N=de&&!!M.anisotropyMap,se=ae&&!!M.clearcoatMap,oe=ae&&!!M.clearcoatNormalMap,he=ae&&!!M.clearcoatRoughnessMap,Ee=Te&&!!M.iridescenceMap,xe=Te&&!!M.iridescenceThicknessMap,Ce=E&&!!M.sheenColorMap,Be=E&&!!M.sheenRoughnessMap,et=!!M.specularMap,Me=!!M.specularColorMap,Xe=!!M.specularIntensityMap,Ne=v&&!!M.transmissionMap,ze=v&&!!M.thicknessMap,He=!!M.gradientMap,Pe=!!M.alphaMap,tt=M.alphaTest>0,S=!!M.alphaHash,D=!!M.extensions,H=!!$.attributes.uv1,B=!!$.attributes.uv2,_e=!!$.attributes.uv3;let Ae=yi;return M.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Ae=n.toneMapping),{isWebGL2:u,shaderID:me,shaderType:M.type,shaderName:M.name,vertexShader:pe,fragmentShader:ve,defines:M.defines,customVertexShaderID:be,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Ie,instancingColor:Ie&&ee.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Fe===null?n.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:ri,map:ke,matcap:ut,envMap:Ge,envMapMode:Ge&&K.mapping,envMapCubeUVHeight:le,aoMap:x,lightMap:U,bumpMap:L,normalMap:G,displacementMap:d&&z,emissiveMap:ue,normalMapObjectSpace:G&&M.normalMapType===Ey,normalMapTangentSpace:G&&M.normalMapType===Mh,metalnessMap:fe,roughnessMap:Q,anisotropy:de,anisotropyMap:N,clearcoat:ae,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:he,iridescence:Te,iridescenceMap:Ee,iridescenceThicknessMap:xe,sheen:E,sheenColorMap:Ce,sheenRoughnessMap:Be,specularMap:et,specularColorMap:Me,specularIntensityMap:Xe,transmission:v,transmissionMap:Ne,thicknessMap:ze,gradientMap:He,opaque:M.transparent===!1&&M.blending===Ps,alphaMap:Pe,alphaTest:tt,alphaHash:S,combine:M.combine,mapUv:ke&&g(M.map.channel),aoMapUv:x&&g(M.aoMap.channel),lightMapUv:U&&g(M.lightMap.channel),bumpMapUv:L&&g(M.bumpMap.channel),normalMapUv:G&&g(M.normalMap.channel),displacementMapUv:z&&g(M.displacementMap.channel),emissiveMapUv:ue&&g(M.emissiveMap.channel),metalnessMapUv:fe&&g(M.metalnessMap.channel),roughnessMapUv:Q&&g(M.roughnessMap.channel),anisotropyMapUv:N&&g(M.anisotropyMap.channel),clearcoatMapUv:se&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&g(M.sheenRoughnessMap.channel),specularMapUv:et&&g(M.specularMap.channel),specularColorMapUv:Me&&g(M.specularColorMap.channel),specularIntensityMapUv:Xe&&g(M.specularIntensityMap.channel),transmissionMapUv:Ne&&g(M.transmissionMap.channel),thicknessMapUv:ze&&g(M.thicknessMap.channel),alphaMapUv:Pe&&g(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(G||de),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:H,vertexUv2s:B,vertexUv3s:_e,pointsUvs:ee.isPoints===!0&&!!$.attributes.uv&&(ke||Pe),fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ee.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ke&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gn,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:D&&M.extensions.derivatives===!0,extensionFragDepth:D&&M.extensions.fragDepth===!0,extensionDrawBuffers:D&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)w.push(Y),w.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(b(w,M),y(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function b(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function y(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function T(M){const w=_[M.type];let Y;if(w){const j=zn[w];Y=Zy.clone(j.uniforms)}else Y=M.uniforms;return Y}function R(M,w){let Y;for(let j=0,ee=c.length;j<ee;j++){const k=c[j];if(k.cacheKey===w){Y=k,++Y.usedTimes;break}}return Y===void 0&&(Y=new cA(n,w,M,r),c.push(Y)),Y}function F(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function I(M){l.remove(M)}function X(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:R,releaseProgram:F,releaseShaderCache:I,programs:c,dispose:X}}function pA(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function mA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,m,_,g,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=p),e++,h}function o(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||mA),i.length>1&&i.sort(d||cf),s.length>1&&s.sort(d||cf)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function _A(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new uf,n.set(i,[a])):s>=r.length?(a=new uf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function gA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new lt};break;case"SpotLight":t={position:new V,direction:new V,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function vA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xA=0;function MA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SA(n,e){const t=new gA,i=vA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new V);const r=new V,a=new Rt,o=new Rt;function l(u,f){let d=0,m=0,_=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let g=0,p=0,h=0,b=0,y=0,T=0,R=0,F=0,I=0,X=0,M=0;u.sort(MA);const w=f===!0?Math.PI:1;for(let j=0,ee=u.length;j<ee;j++){const k=u[j],$=k.color,Z=k.intensity,K=k.distance,le=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=$.r*Z*w,m+=$.g*Z*w,_+=$.b*Z*w;else if(k.isLightProbe){for(let me=0;me<9;me++)s.probe[me].addScaledVector(k.sh.coefficients[me],Z);M++}else if(k.isDirectionalLight){const me=t.get(k);if(me.color.copy(k.color).multiplyScalar(k.intensity*w),k.castShadow){const ce=k.shadow,O=i.get(k);O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,s.directionalShadow[g]=O,s.directionalShadowMap[g]=le,s.directionalShadowMatrix[g]=k.shadow.matrix,T++}s.directional[g]=me,g++}else if(k.isSpotLight){const me=t.get(k);me.position.setFromMatrixPosition(k.matrixWorld),me.color.copy($).multiplyScalar(Z*w),me.distance=K,me.coneCos=Math.cos(k.angle),me.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),me.decay=k.decay,s.spot[h]=me;const ce=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,ce.updateMatrices(k),k.castShadow&&X++),s.spotLightMatrix[h]=ce.matrix,k.castShadow){const O=i.get(k);O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,s.spotShadow[h]=O,s.spotShadowMap[h]=le,F++}h++}else if(k.isRectAreaLight){const me=t.get(k);me.color.copy($).multiplyScalar(Z),me.halfWidth.set(k.width*.5,0,0),me.halfHeight.set(0,k.height*.5,0),s.rectArea[b]=me,b++}else if(k.isPointLight){const me=t.get(k);if(me.color.copy(k.color).multiplyScalar(k.intensity*w),me.distance=k.distance,me.decay=k.decay,k.castShadow){const ce=k.shadow,O=i.get(k);O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,O.shadowCameraNear=ce.camera.near,O.shadowCameraFar=ce.camera.far,s.pointShadow[p]=O,s.pointShadowMap[p]=le,s.pointShadowMatrix[p]=k.shadow.matrix,R++}s.point[p]=me,p++}else if(k.isHemisphereLight){const me=t.get(k);me.skyColor.copy(k.color).multiplyScalar(Z*w),me.groundColor.copy(k.groundColor).multiplyScalar(Z*w),s.hemi[y]=me,y++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=_;const Y=s.hash;(Y.directionalLength!==g||Y.pointLength!==p||Y.spotLength!==h||Y.rectAreaLength!==b||Y.hemiLength!==y||Y.numDirectionalShadows!==T||Y.numPointShadows!==R||Y.numSpotShadows!==F||Y.numSpotMaps!==I||Y.numLightProbes!==M)&&(s.directional.length=g,s.spot.length=h,s.rectArea.length=b,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=F+I-X,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=M,Y.directionalLength=g,Y.pointLength=p,Y.spotLength=h,Y.rectAreaLength=b,Y.hemiLength=y,Y.numDirectionalShadows=T,Y.numPointShadows=R,Y.numSpotShadows=F,Y.numSpotMaps=I,Y.numLightProbes=M,s.version=xA++)}function c(u,f){let d=0,m=0,_=0,g=0,p=0;const h=f.matrixWorldInverse;for(let b=0,y=u.length;b<y;b++){const T=u[b];if(T.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(h),d++}else if(T.isSpotLight){const R=s.spot[_];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(h),_++}else if(T.isRectAreaLight){const R=s.rectArea[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(h),o.identity(),a.copy(T.matrixWorld),a.premultiply(h),o.extractRotation(a),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const R=s.point[m];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(h),m++}else if(T.isHemisphereLight){const R=s.hemi[p];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:s}}function ff(n,e){const t=new SA(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(f){i.push(f)}function o(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yA(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new ff(n,e),t.set(r,[l])):a>=o.length?(l=new ff(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class EA extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bA extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AA=`uniform sampler2D shadow_pass;
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
}`;function wA(n,e,t){let i=new tc;const s=new ct,r=new ct,a=new vt,o=new EA({depthPacking:yy}),l=new bA,c={},u=t.maxTextureSize,f={[Ai]:on,[on]:Ai,[gn]:gn},d=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:TA,fragmentShader:AA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new ss;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new tn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let h=this.type;this.render=function(R,F,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const X=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Si),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const j=h!==Qn&&this.type===Qn,ee=h===Qn&&this.type!==Qn;for(let k=0,$=R.length;k<$;k++){const Z=R[k],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const le=K.getFrameExtents();if(s.multiply(le),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,K.mapSize.y=r.y)),K.map===null||j===!0||ee===!0){const ce=this.type!==Qn?{minFilter:en,magFilter:en}:{};K.map!==null&&K.map.dispose(),K.map=new Qi(s.x,s.y,ce),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const me=K.getViewportCount();for(let ce=0;ce<me;ce++){const O=K.getViewport(ce);a.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),Y.viewport(a),K.updateMatrices(Z,ce),i=K.getFrustum(),T(F,I,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===Qn&&b(K,I),K.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(X,M,w)};function b(R,F){const I=e.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Qi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(F,null,I,d,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(F,null,I,m,g,null)}function y(R,F,I,X){let M=null;const w=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)M=w;else if(M=I.isPointLight===!0?l:o,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const Y=M.uuid,j=F.uuid;let ee=c[Y];ee===void 0&&(ee={},c[Y]=ee);let k=ee[j];k===void 0&&(k=M.clone(),ee[j]=k),M=k}if(M.visible=F.visible,M.wireframe=F.wireframe,X===Qn?M.side=F.shadowSide!==null?F.shadowSide:F.side:M.side=F.shadowSide!==null?F.shadowSide:f[F.side],M.alphaMap=F.alphaMap,M.alphaTest=F.alphaTest,M.map=F.map,M.clipShadows=F.clipShadows,M.clippingPlanes=F.clippingPlanes,M.clipIntersection=F.clipIntersection,M.displacementMap=F.displacementMap,M.displacementScale=F.displacementScale,M.displacementBias=F.displacementBias,M.wireframeLinewidth=F.wireframeLinewidth,M.linewidth=F.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=n.properties.get(M);Y.light=I}return M}function T(R,F,I,X,M){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Qn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const j=e.update(R),ee=R.material;if(Array.isArray(ee)){const k=j.groups;for(let $=0,Z=k.length;$<Z;$++){const K=k[$],le=ee[K.materialIndex];if(le&&le.visible){const me=y(R,le,X,M);n.renderBufferDirect(I,null,j,me,R,K)}}}else if(ee.visible){const k=y(R,ee,X,M);n.renderBufferDirect(I,null,j,k,R,null)}}const Y=R.children;for(let j=0,ee=Y.length;j<ee;j++)T(Y[j],F,I,X,M)}}function CA(n,e,t){const i=t.isWebGL2;function s(){let S=!1;const D=new vt;let H=null;const B=new vt(0,0,0,0);return{setMask:function(_e){H!==_e&&!S&&(n.colorMask(_e,_e,_e,_e),H=_e)},setLocked:function(_e){S=_e},setClear:function(_e,Ae,st,Mt,yt){yt===!0&&(_e*=Mt,Ae*=Mt,st*=Mt),D.set(_e,Ae,st,Mt),B.equals(D)===!1&&(n.clearColor(_e,Ae,st,Mt),B.copy(D))},reset:function(){S=!1,H=null,B.set(-1,0,0,0)}}}function r(){let S=!1,D=null,H=null,B=null;return{setTest:function(_e){_e?ke(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(_e){D!==_e&&!S&&(n.depthMask(_e),D=_e)},setFunc:function(_e){if(H!==_e){switch(_e){case ZS:n.depthFunc(n.NEVER);break;case JS:n.depthFunc(n.ALWAYS);break;case QS:n.depthFunc(n.LESS);break;case ba:n.depthFunc(n.LEQUAL);break;case ey:n.depthFunc(n.EQUAL);break;case ty:n.depthFunc(n.GEQUAL);break;case ny:n.depthFunc(n.GREATER);break;case iy:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}H=_e}},setLocked:function(_e){S=_e},setClear:function(_e){B!==_e&&(n.clearDepth(_e),B=_e)},reset:function(){S=!1,D=null,H=null,B=null}}}function a(){let S=!1,D=null,H=null,B=null,_e=null,Ae=null,st=null,Mt=null,yt=null;return{setTest:function(dt){S||(dt?ke(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(dt){D!==dt&&!S&&(n.stencilMask(dt),D=dt)},setFunc:function(dt,jt,On){(H!==dt||B!==jt||_e!==On)&&(n.stencilFunc(dt,jt,On),H=dt,B=jt,_e=On)},setOp:function(dt,jt,On){(Ae!==dt||st!==jt||Mt!==On)&&(n.stencilOp(dt,jt,On),Ae=dt,st=jt,Mt=On)},setLocked:function(dt){S=dt},setClear:function(dt){yt!==dt&&(n.clearStencil(dt),yt=dt)},reset:function(){S=!1,D=null,H=null,B=null,_e=null,Ae=null,st=null,Mt=null,yt=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,g=[],p=null,h=!1,b=null,y=null,T=null,R=null,F=null,I=null,X=null,M=new lt(0,0,0),w=0,Y=!1,j=null,ee=null,k=null,$=null,Z=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,me=0;const ce=n.getParameter(n.VERSION);ce.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ce)[1]),le=me>=1):ce.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),le=me>=2);let O=null,q={};const pe=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),be=new vt().fromArray(pe),ye=new vt().fromArray(ve);function Fe(S,D,H,B){const _e=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(S,Ae),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<H;st++)i&&(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)?n.texImage3D(D,0,n.RGBA,1,1,B,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(D+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return Ae}const Ie={};Ie[n.TEXTURE_2D]=Fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ie[n.TEXTURE_CUBE_MAP]=Fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[n.TEXTURE_2D_ARRAY]=Fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ie[n.TEXTURE_3D]=Fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ke(n.DEPTH_TEST),l.setFunc(ba),fe(!1),Q(qc),ke(n.CULL_FACE),z(Si);function ke(S){d[S]!==!0&&(n.enable(S),d[S]=!0)}function ut(S){d[S]!==!1&&(n.disable(S),d[S]=!1)}function Ge(S,D){return m[S]!==D?(n.bindFramebuffer(S,D),m[S]=D,i&&(S===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=D),S===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=D)),!0):!1}function x(S,D){let H=g,B=!1;if(S)if(H=_.get(D),H===void 0&&(H=[],_.set(D,H)),S.isWebGLMultipleRenderTargets){const _e=S.texture;if(H.length!==_e.length||H[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,st=_e.length;Ae<st;Ae++)H[Ae]=n.COLOR_ATTACHMENT0+Ae;H.length=_e.length,B=!0}}else H[0]!==n.COLOR_ATTACHMENT0&&(H[0]=n.COLOR_ATTACHMENT0,B=!0);else H[0]!==n.BACK&&(H[0]=n.BACK,B=!0);B&&(t.isWebGL2?n.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function U(S){return p!==S?(n.useProgram(S),p=S,!0):!1}const L={[Gi]:n.FUNC_ADD,[kS]:n.FUNC_SUBTRACT,[NS]:n.FUNC_REVERSE_SUBTRACT};if(i)L[jc]=n.MIN,L[Kc]=n.MAX;else{const S=e.get("EXT_blend_minmax");S!==null&&(L[jc]=S.MIN_EXT,L[Kc]=S.MAX_EXT)}const G={[OS]:n.ZERO,[BS]:n.ONE,[HS]:n.SRC_COLOR,[ul]:n.SRC_ALPHA,[$S]:n.SRC_ALPHA_SATURATE,[WS]:n.DST_COLOR,[GS]:n.DST_ALPHA,[zS]:n.ONE_MINUS_SRC_COLOR,[fl]:n.ONE_MINUS_SRC_ALPHA,[qS]:n.ONE_MINUS_DST_COLOR,[VS]:n.ONE_MINUS_DST_ALPHA,[XS]:n.CONSTANT_COLOR,[YS]:n.ONE_MINUS_CONSTANT_COLOR,[jS]:n.CONSTANT_ALPHA,[KS]:n.ONE_MINUS_CONSTANT_ALPHA};function z(S,D,H,B,_e,Ae,st,Mt,yt,dt){if(S===Si){h===!0&&(ut(n.BLEND),h=!1);return}if(h===!1&&(ke(n.BLEND),h=!0),S!==FS){if(S!==b||dt!==Y){if((y!==Gi||F!==Gi)&&(n.blendEquation(n.FUNC_ADD),y=Gi,F=Gi),dt)switch(S){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}T=null,R=null,I=null,X=null,M.set(0,0,0),w=0,b=S,Y=dt}return}_e=_e||D,Ae=Ae||H,st=st||B,(D!==y||_e!==F)&&(n.blendEquationSeparate(L[D],L[_e]),y=D,F=_e),(H!==T||B!==R||Ae!==I||st!==X)&&(n.blendFuncSeparate(G[H],G[B],G[Ae],G[st]),T=H,R=B,I=Ae,X=st),(Mt.equals(M)===!1||yt!==w)&&(n.blendColor(Mt.r,Mt.g,Mt.b,yt),M.copy(Mt),w=yt),b=S,Y=!1}function ue(S,D){S.side===gn?ut(n.CULL_FACE):ke(n.CULL_FACE);let H=S.side===on;D&&(H=!H),fe(H),S.blending===Ps&&S.transparent===!1?z(Si):z(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),l.setFunc(S.depthFunc),l.setTest(S.depthTest),l.setMask(S.depthWrite),o.setMask(S.colorWrite);const B=S.stencilWrite;c.setTest(B),B&&(c.setMask(S.stencilWriteMask),c.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),c.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ae(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ke(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(S){j!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),j=S)}function Q(S){S!==DS?(ke(n.CULL_FACE),S!==ee&&(S===qc?n.cullFace(n.BACK):S===IS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),ee=S}function de(S){S!==k&&(le&&n.lineWidth(S),k=S)}function ae(S,D,H){S?(ke(n.POLYGON_OFFSET_FILL),($!==D||Z!==H)&&(n.polygonOffset(D,H),$=D,Z=H)):ut(n.POLYGON_OFFSET_FILL)}function Te(S){S?ke(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function E(S){S===void 0&&(S=n.TEXTURE0+K-1),O!==S&&(n.activeTexture(S),O=S)}function v(S,D,H){H===void 0&&(O===null?H=n.TEXTURE0+K-1:H=O);let B=q[H];B===void 0&&(B={type:void 0,texture:void 0},q[H]=B),(B.type!==S||B.texture!==D)&&(O!==H&&(n.activeTexture(H),O=H),n.bindTexture(S,D||Ie[S]),B.type=S,B.texture=D)}function N(){const S=q[O];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ne(S){be.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),be.copy(S))}function ze(S){ye.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),ye.copy(S))}function He(S,D){let H=f.get(D);H===void 0&&(H=new WeakMap,f.set(D,H));let B=H.get(S);B===void 0&&(B=n.getUniformBlockIndex(D,S.name),H.set(S,B))}function Pe(S,D){const B=f.get(D).get(S);u.get(D)!==B&&(n.uniformBlockBinding(D,B,S.__bindingPointIndex),u.set(D,B))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},O=null,q={},m={},_=new WeakMap,g=[],p=null,h=!1,b=null,y=null,T=null,R=null,F=null,I=null,X=null,M=new lt(0,0,0),w=0,Y=!1,j=null,ee=null,k=null,$=null,Z=null,be.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ke,disable:ut,bindFramebuffer:Ge,drawBuffers:x,useProgram:U,setBlending:z,setMaterial:ue,setFlipSided:fe,setCullFace:Q,setLineWidth:de,setPolygonOffset:ae,setScissorTest:Te,activeTexture:E,bindTexture:v,unbindTexture:N,compressedTexImage2D:se,compressedTexImage3D:oe,texImage2D:Me,texImage3D:Xe,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Be,texStorage3D:et,texSubImage2D:he,texSubImage3D:Ee,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ce,scissor:Ne,viewport:ze,reset:tt}}function RA(n,e,t,i,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,v){return h?new OffscreenCanvas(E,v):xr("canvas")}function y(E,v,N,se){let oe=1;if((E.width>se||E.height>se)&&(oe=se/Math.max(E.width,E.height)),oe<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const he=v?vl:Math.floor,Ee=he(oe*E.width),xe=he(oe*E.height);g===void 0&&(g=b(Ee,xe));const Ce=N?b(Ee,xe):g;return Ce.width=Ee,Ce.height=xe,Ce.getContext("2d").drawImage(E,0,0,Ee,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ee+"x"+xe+")."),Ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function T(E){return Au(E.width)&&Au(E.height)}function R(E){return o?!1:E.wrapS!==Dn||E.wrapT!==Dn||E.minFilter!==en&&E.minFilter!==En}function F(E,v){return E.generateMipmaps&&v&&E.minFilter!==en&&E.minFilter!==En}function I(E){n.generateMipmap(E)}function X(E,v,N,se,oe=!1){if(o===!1)return v;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he=v;if(v===n.RED&&(N===n.FLOAT&&(he=n.R32F),N===n.HALF_FLOAT&&(he=n.R16F),N===n.UNSIGNED_BYTE&&(he=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(he=n.R8UI),N===n.UNSIGNED_SHORT&&(he=n.R16UI),N===n.UNSIGNED_INT&&(he=n.R32UI),N===n.BYTE&&(he=n.R8I),N===n.SHORT&&(he=n.R16I),N===n.INT&&(he=n.R32I)),v===n.RG&&(N===n.FLOAT&&(he=n.RG32F),N===n.HALF_FLOAT&&(he=n.RG16F),N===n.UNSIGNED_BYTE&&(he=n.RG8)),v===n.RGBA){const Ee=oe?Ta:ht.getTransfer(se);N===n.FLOAT&&(he=n.RGBA32F),N===n.HALF_FLOAT&&(he=n.RGBA16F),N===n.UNSIGNED_BYTE&&(he=Ee===mt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function M(E,v,N){return F(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==en&&E.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function w(E){return E===en||E===Zc||E===fo?n.NEAREST:n.LINEAR}function Y(E){const v=E.target;v.removeEventListener("dispose",Y),ee(v),v.isVideoTexture&&_.delete(v)}function j(E){const v=E.target;v.removeEventListener("dispose",j),$(v)}function ee(E){const v=i.get(E);if(v.__webglInit===void 0)return;const N=E.source,se=p.get(N);if(se){const oe=se[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&k(E),Object.keys(se).length===0&&p.delete(N)}i.remove(E)}function k(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const N=E.source,se=p.get(N);delete se[v.__cacheKey],a.memory.textures--}function $(E){const v=E.texture,N=i.get(E),se=i.get(v);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(N.__webglFramebuffer[oe]))for(let he=0;he<N.__webglFramebuffer[oe].length;he++)n.deleteFramebuffer(N.__webglFramebuffer[oe][he]);else n.deleteFramebuffer(N.__webglFramebuffer[oe]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[oe])}else{if(Array.isArray(N.__webglFramebuffer))for(let oe=0;oe<N.__webglFramebuffer.length;oe++)n.deleteFramebuffer(N.__webglFramebuffer[oe]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let oe=0;oe<N.__webglColorRenderbuffer.length;oe++)N.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[oe]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let oe=0,he=v.length;oe<he;oe++){const Ee=i.get(v[oe]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),a.memory.textures--),i.remove(v[oe])}i.remove(v),i.remove(E)}let Z=0;function K(){Z=0}function le(){const E=Z;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Z+=1,E}function me(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function ce(E,v){const N=i.get(E);if(E.isVideoTexture&&ae(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const se=E.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(N,E,v);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function O(E,v){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ke(N,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function q(E,v){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ke(N,E,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function pe(E,v){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ut(N,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}const ve={[pl]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[ml]:n.MIRRORED_REPEAT},be={[en]:n.NEAREST,[Zc]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[fy]:n.LINEAR_MIPMAP_NEAREST,[gr]:n.LINEAR_MIPMAP_LINEAR},ye={[by]:n.NEVER,[Ly]:n.ALWAYS,[Ty]:n.LESS,[wy]:n.LEQUAL,[Ay]:n.EQUAL,[Py]:n.GEQUAL,[Cy]:n.GREATER,[Ry]:n.NOTEQUAL};function Fe(E,v,N){if(N?(n.texParameteri(E,n.TEXTURE_WRAP_S,ve[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ve[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ve[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,be[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,be[v.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Dn||v.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,w(v.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==en&&v.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===en||v.minFilter!==fo&&v.minFilter!==gr||v.type===gi&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===vr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(E,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Ie(E,v){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",Y));const se=v.source;let oe=p.get(se);oe===void 0&&(oe={},p.set(se,oe));const he=me(v);if(he!==E.__cacheKey){oe[he]===void 0&&(oe[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),oe[he].usedTimes++;const Ee=oe[E.__cacheKey];Ee!==void 0&&(oe[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&k(v)),E.__cacheKey=he,E.__webglTexture=oe[he].texture}return N}function ke(E,v,N){let se=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=n.TEXTURE_3D);const oe=Ie(E,v),he=v.source;t.bindTexture(se,E.__webglTexture,n.TEXTURE0+N);const Ee=i.get(he);if(he.version!==Ee.__version||oe===!0){t.activeTexture(n.TEXTURE0+N);const xe=ht.getPrimaries(ht.workingColorSpace),Ce=v.colorSpace===bn?null:ht.getPrimaries(v.colorSpace),Be=v.colorSpace===bn||xe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const et=R(v)&&T(v.image)===!1;let Me=y(v.image,et,!1,u);Me=Te(v,Me);const Xe=T(Me)||o,Ne=r.convert(v.format,v.colorSpace);let ze=r.convert(v.type),He=X(v.internalFormat,Ne,ze,v.colorSpace,v.isVideoTexture);Fe(se,v,Xe);let Pe;const tt=v.mipmaps,S=o&&v.isVideoTexture!==!0,D=Ee.__version===void 0||oe===!0,H=M(v,Me,Xe);if(v.isDepthTexture)He=n.DEPTH_COMPONENT,o?v.type===gi?He=n.DEPTH_COMPONENT32F:v.type===_i?He=n.DEPTH_COMPONENT24:v.type===Xi?He=n.DEPTH24_STENCIL8:He=n.DEPTH_COMPONENT16:v.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Yi&&He===n.DEPTH_COMPONENT&&v.type!==Zl&&v.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=_i,ze=r.convert(v.type)),v.format===Bs&&He===n.DEPTH_COMPONENT&&(He=n.DEPTH_STENCIL,v.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Xi,ze=r.convert(v.type))),D&&(S?t.texStorage2D(n.TEXTURE_2D,1,He,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,He,Me.width,Me.height,0,Ne,ze,null));else if(v.isDataTexture)if(tt.length>0&&Xe){S&&D&&t.texStorage2D(n.TEXTURE_2D,H,He,tt[0].width,tt[0].height);for(let B=0,_e=tt.length;B<_e;B++)Pe=tt[B],S?t.texSubImage2D(n.TEXTURE_2D,B,0,0,Pe.width,Pe.height,Ne,ze,Pe.data):t.texImage2D(n.TEXTURE_2D,B,He,Pe.width,Pe.height,0,Ne,ze,Pe.data);v.generateMipmaps=!1}else S?(D&&t.texStorage2D(n.TEXTURE_2D,H,He,Me.width,Me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,Ne,ze,Me.data)):t.texImage2D(n.TEXTURE_2D,0,He,Me.width,Me.height,0,Ne,ze,Me.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){S&&D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,H,He,tt[0].width,tt[0].height,Me.depth);for(let B=0,_e=tt.length;B<_e;B++)Pe=tt[B],v.format!==In?Ne!==null?S?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Pe.width,Pe.height,Me.depth,Ne,Pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,He,Pe.width,Pe.height,Me.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S?t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Pe.width,Pe.height,Me.depth,Ne,ze,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,He,Pe.width,Pe.height,Me.depth,0,Ne,ze,Pe.data)}else{S&&D&&t.texStorage2D(n.TEXTURE_2D,H,He,tt[0].width,tt[0].height);for(let B=0,_e=tt.length;B<_e;B++)Pe=tt[B],v.format!==In?Ne!==null?S?t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,Pe.width,Pe.height,Ne,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,B,He,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S?t.texSubImage2D(n.TEXTURE_2D,B,0,0,Pe.width,Pe.height,Ne,ze,Pe.data):t.texImage2D(n.TEXTURE_2D,B,He,Pe.width,Pe.height,0,Ne,ze,Pe.data)}else if(v.isDataArrayTexture)S?(D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,H,He,Me.width,Me.height,Me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ne,ze,Me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,Me.width,Me.height,Me.depth,0,Ne,ze,Me.data);else if(v.isData3DTexture)S?(D&&t.texStorage3D(n.TEXTURE_3D,H,He,Me.width,Me.height,Me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ne,ze,Me.data)):t.texImage3D(n.TEXTURE_3D,0,He,Me.width,Me.height,Me.depth,0,Ne,ze,Me.data);else if(v.isFramebufferTexture){if(D)if(S)t.texStorage2D(n.TEXTURE_2D,H,He,Me.width,Me.height);else{let B=Me.width,_e=Me.height;for(let Ae=0;Ae<H;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,He,B,_e,0,Ne,ze,null),B>>=1,_e>>=1}}else if(tt.length>0&&Xe){S&&D&&t.texStorage2D(n.TEXTURE_2D,H,He,tt[0].width,tt[0].height);for(let B=0,_e=tt.length;B<_e;B++)Pe=tt[B],S?t.texSubImage2D(n.TEXTURE_2D,B,0,0,Ne,ze,Pe):t.texImage2D(n.TEXTURE_2D,B,He,Ne,ze,Pe);v.generateMipmaps=!1}else S?(D&&t.texStorage2D(n.TEXTURE_2D,H,He,Me.width,Me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,ze,Me)):t.texImage2D(n.TEXTURE_2D,0,He,Ne,ze,Me);F(v,Xe)&&I(se),Ee.__version=he.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ut(E,v,N){if(v.image.length!==6)return;const se=Ie(E,v),oe=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const he=i.get(oe);if(oe.version!==he.__version||se===!0){t.activeTexture(n.TEXTURE0+N);const Ee=ht.getPrimaries(ht.workingColorSpace),xe=v.colorSpace===bn?null:ht.getPrimaries(v.colorSpace),Ce=v.colorSpace===bn||Ee===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Be=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let B=0;B<6;B++)!Be&&!et?Me[B]=y(v.image[B],!1,!0,c):Me[B]=et?v.image[B].image:v.image[B],Me[B]=Te(v,Me[B]);const Xe=Me[0],Ne=T(Xe)||o,ze=r.convert(v.format,v.colorSpace),He=r.convert(v.type),Pe=X(v.internalFormat,ze,He,v.colorSpace),tt=o&&v.isVideoTexture!==!0,S=he.__version===void 0||se===!0;let D=M(v,Xe,Ne);Fe(n.TEXTURE_CUBE_MAP,v,Ne);let H;if(Be){tt&&S&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Pe,Xe.width,Xe.height);for(let B=0;B<6;B++){H=Me[B].mipmaps;for(let _e=0;_e<H.length;_e++){const Ae=H[_e];v.format!==In?ze!==null?tt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e,0,0,Ae.width,Ae.height,ze,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e,Pe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e,0,0,Ae.width,Ae.height,ze,He,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e,Pe,Ae.width,Ae.height,0,ze,He,Ae.data)}}}else{H=v.mipmaps,tt&&S&&(H.length>0&&D++,t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Pe,Me[0].width,Me[0].height));for(let B=0;B<6;B++)if(et){tt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Me[B].width,Me[B].height,ze,He,Me[B].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Pe,Me[B].width,Me[B].height,0,ze,He,Me[B].data);for(let _e=0;_e<H.length;_e++){const st=H[_e].image[B].image;tt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e+1,0,0,st.width,st.height,ze,He,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e+1,Pe,st.width,st.height,0,ze,He,st.data)}}else{tt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ze,He,Me[B]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Pe,ze,He,Me[B]);for(let _e=0;_e<H.length;_e++){const Ae=H[_e];tt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e+1,0,0,ze,He,Ae.image[B]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e+1,Pe,ze,He,Ae.image[B])}}}F(v,Ne)&&I(n.TEXTURE_CUBE_MAP),he.__version=oe.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ge(E,v,N,se,oe,he){const Ee=r.convert(N.format,N.colorSpace),xe=r.convert(N.type),Ce=X(N.internalFormat,Ee,xe,N.colorSpace);if(!i.get(v).__hasExternalTextures){const et=Math.max(1,v.width>>he),Me=Math.max(1,v.height>>he);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,he,Ce,et,Me,v.depth,0,Ee,xe,null):t.texImage2D(oe,he,Ce,et,Me,0,Ee,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),de(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,oe,i.get(N).__webglTexture,0,Q(v)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,oe,i.get(N).__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function x(E,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let se=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||de(v)){const oe=v.depthTexture;oe&&oe.isDepthTexture&&(oe.type===gi?se=n.DEPTH_COMPONENT32F:oe.type===_i&&(se=n.DEPTH_COMPONENT24));const he=Q(v);de(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,se,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,he,se,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const se=Q(v);N&&de(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,v.width,v.height):de(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const se=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let oe=0;oe<se.length;oe++){const he=se[oe],Ee=r.convert(he.format,he.colorSpace),xe=r.convert(he.type),Ce=X(he.internalFormat,Ee,xe,he.colorSpace),Be=Q(v);N&&de(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Ce,v.width,v.height):de(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,Ce,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ce(v.depthTexture,0);const se=i.get(v.depthTexture).__webglTexture,oe=Q(v);if(v.depthTexture.format===Yi)de(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(v.depthTexture.format===Bs)de(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function L(E){const v=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");U(v.__webglFramebuffer,E)}else if(N){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]=n.createRenderbuffer(),x(v.__webglDepthbuffer[se],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),x(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(E,v,N){const se=i.get(E);v!==void 0&&Ge(se.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&L(E)}function z(E){const v=E.texture,N=i.get(E),se=i.get(v);E.addEventListener("dispose",j),E.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=v.version,a.memory.textures++);const oe=E.isWebGLCubeRenderTarget===!0,he=E.isWebGLMultipleRenderTargets===!0,Ee=T(E)||o;if(oe){N.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(o&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[xe]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)N.__webglFramebuffer[xe][Ce]=n.createFramebuffer()}else N.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let xe=0;xe<v.mipmaps.length;xe++)N.__webglFramebuffer[xe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(he)if(s.drawBuffers){const xe=E.texture;for(let Ce=0,Be=xe.length;Ce<Be;Ce++){const et=i.get(xe[Ce]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&de(E)===!1){const xe=he?v:[v];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Be=xe[Ce];N.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[Ce]);const et=r.convert(Be.format,Be.colorSpace),Me=r.convert(Be.type),Xe=X(Be.internalFormat,et,Me,Be.colorSpace,E.isXRRenderTarget===!0),Ne=Q(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Xe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,N.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),x(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,v,Ee);for(let xe=0;xe<6;xe++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)Ge(N.__webglFramebuffer[xe][Ce],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce);else Ge(N.__webglFramebuffer[xe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);F(v,Ee)&&I(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const xe=E.texture;for(let Ce=0,Be=xe.length;Ce<Be;Ce++){const et=xe[Ce],Me=i.get(et);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),Fe(n.TEXTURE_2D,et,Ee),Ge(N.__webglFramebuffer,E,et,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),F(et,Ee)&&I(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?xe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,se.__webglTexture),Fe(xe,v,Ee),o&&v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)Ge(N.__webglFramebuffer[Ce],E,v,n.COLOR_ATTACHMENT0,xe,Ce);else Ge(N.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,xe,0);F(v,Ee)&&I(xe),t.unbindTexture()}E.depthBuffer&&L(E)}function ue(E){const v=T(E)||o,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let se=0,oe=N.length;se<oe;se++){const he=N[se];if(F(he,v)){const Ee=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(he).__webglTexture;t.bindTexture(Ee,xe),I(Ee),t.unbindTexture()}}}function fe(E){if(o&&E.samples>0&&de(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,se=E.height;let oe=n.COLOR_BUFFER_BIT;const he=[],Ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(E),Ce=E.isWebGLMultipleRenderTargets===!0;if(Ce)for(let Be=0;Be<v.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Be=0;Be<v.length;Be++){he.push(n.COLOR_ATTACHMENT0+Be),E.depthBuffer&&he.push(Ee);const et=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(et===!1&&(E.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),Ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Be]),et===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ee])),Ce){const Me=i.get(v[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,N,se,0,0,N,se,oe,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Be=0;Be<v.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Be]);const et=i.get(v[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Q(E){return Math.min(f,E.samples)}function de(E){const v=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ae(E){const v=a.render.frame;_.get(E)!==v&&(_.set(E,v),E.update())}function Te(E,v){const N=E.colorSpace,se=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===_l||N!==ri&&N!==bn&&(ht.getTransfer(N)===mt?o===!1?e.has("EXT_sRGB")===!0&&se===In?(E.format=_l,E.minFilter=En,E.generateMipmaps=!1):v=yh.sRGBToLinear(v):(se!==In||oe!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=le,this.resetTextureUnits=K,this.setTexture2D=ce,this.setTexture2DArray=O,this.setTexture3D=q,this.setTextureCube=pe,this.rebindTextures=G,this.setupRenderTarget=z,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=de}function PA(n,e,t){const i=t.isWebGL2;function s(r,a=bn){let o;const l=ht.getTransfer(a);if(r===Ei)return n.UNSIGNED_BYTE;if(r===ph)return n.UNSIGNED_SHORT_4_4_4_4;if(r===mh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===dy)return n.BYTE;if(r===hy)return n.SHORT;if(r===Zl)return n.UNSIGNED_SHORT;if(r===hh)return n.INT;if(r===_i)return n.UNSIGNED_INT;if(r===gi)return n.FLOAT;if(r===vr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===py)return n.ALPHA;if(r===In)return n.RGBA;if(r===my)return n.LUMINANCE;if(r===_y)return n.LUMINANCE_ALPHA;if(r===Yi)return n.DEPTH_COMPONENT;if(r===Bs)return n.DEPTH_STENCIL;if(r===_l)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===gy)return n.RED;if(r===_h)return n.RED_INTEGER;if(r===vy)return n.RG;if(r===gh)return n.RG_INTEGER;if(r===vh)return n.RGBA_INTEGER;if(r===ho||r===po||r===mo||r===_o)if(l===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ho)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ho)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===po)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jc||r===Qc||r===eu||r===tu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Jc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===eu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xy)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===nu||r===iu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===nu)return l===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===iu)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===su||r===ru||r===au||r===ou||r===lu||r===cu||r===uu||r===fu||r===du||r===hu||r===pu||r===mu||r===_u||r===gu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===su)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ru)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===au)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ou)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lu)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cu)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uu)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fu)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===du)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hu)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pu)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mu)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_u)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gu)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===go||r===vu||r===xu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===go)return l===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===My||r===Mu||r===Su||r===yu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===go)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Mu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Su)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class LA extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aa extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DA={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(DA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class IA extends ln{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:Yi,u!==Yi&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Yi&&(i=_i),i===void 0&&u===Bs&&(i=Xi),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class UA extends qs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,_=null;const g=t.getContextAttributes();let p=null,h=null;const b=[],y=[],T=new _n;T.layers.enable(1),T.viewport=new vt;const R=new _n;R.layers.enable(2),R.viewport=new vt;const F=[T,R],I=new LA;I.layers.enable(1),I.layers.enable(2);let X=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let q=b[O];return q===void 0&&(q=new Go,b[O]=q),q.getTargetRaySpace()},this.getControllerGrip=function(O){let q=b[O];return q===void 0&&(q=new Go,b[O]=q),q.getGripSpace()},this.getHand=function(O){let q=b[O];return q===void 0&&(q=new Go,b[O]=q),q.getHandSpace()};function w(O){const q=y.indexOf(O.inputSource);if(q===-1)return;const pe=b[q];pe!==void 0&&(pe.update(O.inputSource,O.frame,c||a),pe.dispatchEvent({type:O.type,data:O.inputSource}))}function Y(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",j);for(let O=0;O<b.length;O++){const q=y[O];q!==null&&(y[O]=null,b[O].disconnect(q))}X=null,M=null,e.setRenderTarget(p),m=null,d=null,f=null,s=null,h=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:m}),h=new Qi(m.framebufferWidth,m.framebufferHeight,{format:In,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let q=null,pe=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=g.stencil?Bs:Yi,pe=g.stencil?Xi:_i);const be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(be),s.updateRenderState({layers:[d]}),h=new Qi(d.textureWidth,d.textureHeight,{format:In,type:Ei,depthTexture:new IA(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ye=e.properties.get(h);ye.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function j(O){for(let q=0;q<O.removed.length;q++){const pe=O.removed[q],ve=y.indexOf(pe);ve>=0&&(y[ve]=null,b[ve].disconnect(pe))}for(let q=0;q<O.added.length;q++){const pe=O.added[q];let ve=y.indexOf(pe);if(ve===-1){for(let ye=0;ye<b.length;ye++)if(ye>=y.length){y.push(pe),ve=ye;break}else if(y[ye]===null){y[ye]=pe,ve=ye;break}if(ve===-1)break}const be=b[ve];be&&be.connect(pe)}}const ee=new V,k=new V;function $(O,q,pe){ee.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(pe.matrixWorld);const ve=ee.distanceTo(k),be=q.projectionMatrix.elements,ye=pe.projectionMatrix.elements,Fe=be[14]/(be[10]-1),Ie=be[14]/(be[10]+1),ke=(be[9]+1)/be[5],ut=(be[9]-1)/be[5],Ge=(be[8]-1)/be[0],x=(ye[8]+1)/ye[0],U=Fe*Ge,L=Fe*x,G=ve/(-Ge+x),z=G*-Ge;q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(z),O.translateZ(G),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const ue=Fe+G,fe=Ie+G,Q=U-z,de=L+(ve-z),ae=ke*Ie/fe*ue,Te=ut*Ie/fe*ue;O.projectionMatrix.makePerspective(Q,de,ae,Te,ue,fe),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function Z(O,q){q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;I.near=R.near=T.near=O.near,I.far=R.far=T.far=O.far,(X!==I.near||M!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),X=I.near,M=I.far);const q=O.parent,pe=I.cameras;Z(I,q);for(let ve=0;ve<pe.length;ve++)Z(pe[ve],q);pe.length===2?$(I,T,R):I.projectionMatrix.copy(T.projectionMatrix),K(O,I,q)};function K(O,q,pe){pe===null?O.matrix.copy(q.matrixWorld):(O.matrix.copy(pe.matrixWorld),O.matrix.invert(),O.matrix.multiply(q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(q.projectionMatrix),O.projectionMatrixInverse.copy(q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=gl*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)};let le=null;function me(O,q){if(u=q.getViewerPose(c||a),_=q,u!==null){const pe=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ve=!1;pe.length!==I.cameras.length&&(I.cameras.length=0,ve=!0);for(let be=0;be<pe.length;be++){const ye=pe[be];let Fe=null;if(m!==null)Fe=m.getViewport(ye);else{const ke=f.getViewSubImage(d,ye);Fe=ke.viewport,be===0&&(e.setRenderTargetTextures(h,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(h))}let Ie=F[be];Ie===void 0&&(Ie=new _n,Ie.layers.enable(be),Ie.viewport=new vt,F[be]=Ie),Ie.matrix.fromArray(ye.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ye.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),be===0&&(I.matrix.copy(Ie.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ve===!0&&I.cameras.push(Ie)}}for(let pe=0;pe<b.length;pe++){const ve=y[pe],be=b[pe];ve!==null&&be!==void 0&&be.update(ve,q,c||a)}le&&le(O,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const ce=new Ih;ce.setAnimationLoop(me),this.setAnimationLoop=function(O){le=O},this.dispose=function(){}}}function FA(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Ph(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,b,y,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),g(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===on&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===on&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=y*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===on&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kA(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,y){const T=y.program;i.uniformBlockBinding(b,T)}function c(b,y){let T=s[b.id];T===void 0&&(_(b),T=u(b),s[b.id]=T,b.addEventListener("dispose",p));const R=y.program;i.updateUBOMapping(b,R);const F=e.render.frame;r[b.id]!==F&&(d(b),r[b.id]=F)}function u(b){const y=f();b.__bindingPointIndex=y;const T=n.createBuffer(),R=b.__size,F=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=s[b.id],T=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let F=0,I=T.length;F<I;F++){const X=T[F];if(m(X,F,R)===!0){const M=X.__offset,w=Array.isArray(X.value)?X.value:[X.value];let Y=0;for(let j=0;j<w.length;j++){const ee=w[j],k=g(ee);typeof ee=="number"?(X.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,M+Y,X.__data)):ee.isMatrix3?(X.__data[0]=ee.elements[0],X.__data[1]=ee.elements[1],X.__data[2]=ee.elements[2],X.__data[3]=ee.elements[0],X.__data[4]=ee.elements[3],X.__data[5]=ee.elements[4],X.__data[6]=ee.elements[5],X.__data[7]=ee.elements[0],X.__data[8]=ee.elements[6],X.__data[9]=ee.elements[7],X.__data[10]=ee.elements[8],X.__data[11]=ee.elements[0]):(ee.toArray(X.__data,Y),Y+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,X.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,y,T){const R=b.value;if(T[y]===void 0){if(typeof R=="number")T[y]=R;else{const F=Array.isArray(R)?R:[R],I=[];for(let X=0;X<F.length;X++)I.push(F[X].clone());T[y]=I}return!0}else if(typeof R=="number"){if(T[y]!==R)return T[y]=R,!0}else{const F=Array.isArray(T[y])?T[y]:[T[y]],I=Array.isArray(R)?R:[R];for(let X=0;X<F.length;X++){const M=F[X];if(M.equals(I[X])===!1)return M.copy(I[X]),!0}}return!1}function _(b){const y=b.uniforms;let T=0;const R=16;let F=0;for(let I=0,X=y.length;I<X;I++){const M=y[I],w={boundary:0,storage:0},Y=Array.isArray(M.value)?M.value:[M.value];for(let j=0,ee=Y.length;j<ee;j++){const k=Y[j],$=g(k);w.boundary+=$.boundary,w.storage+=$.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=T,I>0){F=T%R;const j=R-F;F!==0&&j-w.boundary<0&&(T+=R-F,M.__offset=T)}T+=w.storage}return F=T%R,F>0&&(T+=R-F),b.__size=T,b.__cache={},this}function g(b){const y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Oh{constructor(e={}){const{canvas:t=Iy(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const y=this;let T=!1,R=0,F=0,I=null,X=-1,M=null;const w=new vt,Y=new vt;let j=null;const ee=new lt(0);let k=0,$=t.width,Z=t.height,K=1,le=null,me=null;const ce=new vt(0,0,$,Z),O=new vt(0,0,$,Z);let q=!1;const pe=new tc;let ve=!1,be=!1,ye=null;const Fe=new Rt,Ie=new ct,ke=new V,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return I===null?K:1}let x=i;function U(A,W){for(let J=0;J<A.length;J++){const te=A[J],ne=t.getContext(te,W);if(ne!==null)return ne}return null}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jl}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",S,!1),t.addEventListener("webglcontextcreationerror",D,!1),x===null){const W=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&W.shift(),x=U(W,A),x===null)throw U(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,G,z,ue,fe,Q,de,ae,Te,E,v,N,se,oe,he,Ee,xe,Ce,Be,et,Me,Xe,Ne,ze;function He(){L=new $1(x),G=new B1(x,L,e),L.init(G),Xe=new PA(x,L,G),z=new CA(x,L,G),ue=new j1(x),fe=new pA,Q=new RA(x,L,z,fe,G,Xe,ue),de=new z1(y),ae=new q1(y),Te=new sE(x,G),Ne=new N1(x,L,Te,G),E=new X1(x,Te,ue,Ne),v=new Q1(x,E,Te,ue),Be=new J1(x,G,Q),Ee=new H1(fe),N=new hA(y,de,ae,L,G,Ne,Ee),se=new FA(y,fe),oe=new _A,he=new yA(L,G),Ce=new k1(y,de,ae,z,v,d,l),xe=new wA(y,v,G),ze=new kA(x,ue,G,z),et=new O1(x,L,ue,G),Me=new Y1(x,L,ue,G),ue.programs=N.programs,y.capabilities=G,y.extensions=L,y.properties=fe,y.renderLists=oe,y.shadowMap=xe,y.state=z,y.info=ue}He();const Pe=new UA(y,x);this.xr=Pe,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize($,Z,!1))},this.getSize=function(A){return A.set($,Z)},this.setSize=function(A,W,J=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,Z=W,t.width=Math.floor(A*K),t.height=Math.floor(W*K),J===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set($*K,Z*K).floor()},this.setDrawingBufferSize=function(A,W,J){$=A,Z=W,K=J,t.width=Math.floor(A*J),t.height=Math.floor(W*J),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,W,J,te){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,W,J,te),z.viewport(w.copy(ce).multiplyScalar(K).floor())},this.getScissor=function(A){return A.copy(O)},this.setScissor=function(A,W,J,te){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,W,J,te),z.scissor(Y.copy(O).multiplyScalar(K).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(A){z.setScissorTest(q=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(A=!0,W=!0,J=!0){let te=0;if(A){let ne=!1;if(I!==null){const De=I.texture.format;ne=De===vh||De===gh||De===_h}if(ne){const De=I.texture.type,Oe=De===Ei||De===_i||De===Zl||De===Xi||De===ph||De===mh,Ve=Ce.getClearColor(),$e=Ce.getClearAlpha(),nt=Ve.r,je=Ve.g,Ze=Ve.b;Oe?(m[0]=nt,m[1]=je,m[2]=Ze,m[3]=$e,x.clearBufferuiv(x.COLOR,0,m)):(_[0]=nt,_[1]=je,_[2]=Ze,_[3]=$e,x.clearBufferiv(x.COLOR,0,_))}else te|=x.COLOR_BUFFER_BIT}W&&(te|=x.DEPTH_BUFFER_BIT),J&&(te|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",S,!1),t.removeEventListener("webglcontextcreationerror",D,!1),oe.dispose(),he.dispose(),fe.dispose(),de.dispose(),ae.dispose(),v.dispose(),Ne.dispose(),ze.dispose(),N.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",yt),Pe.removeEventListener("sessionend",dt),ye&&(ye.dispose(),ye=null),jt.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function S(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=ue.autoReset,W=xe.enabled,J=xe.autoUpdate,te=xe.needsUpdate,ne=xe.type;He(),ue.autoReset=A,xe.enabled=W,xe.autoUpdate=J,xe.needsUpdate=te,xe.type=ne}function D(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function H(A){const W=A.target;W.removeEventListener("dispose",H),B(W)}function B(A){_e(A),fe.remove(A)}function _e(A){const W=fe.get(A).programs;W!==void 0&&(W.forEach(function(J){N.releaseProgram(J)}),A.isShaderMaterial&&N.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,J,te,ne,De){W===null&&(W=ut);const Oe=ne.isMesh&&ne.matrixWorld.determinant()<0,Ve=ap(A,W,J,te,ne);z.setMaterial(te,Oe);let $e=J.index,nt=1;if(te.wireframe===!0){if($e=E.getWireframeAttribute(J),$e===void 0)return;nt=2}const je=J.drawRange,Ze=J.attributes.position;let Et=je.start*nt,fn=(je.start+je.count)*nt;De!==null&&(Et=Math.max(Et,De.start*nt),fn=Math.min(fn,(De.start+De.count)*nt)),$e!==null?(Et=Math.max(Et,0),fn=Math.min(fn,$e.count)):Ze!=null&&(Et=Math.max(Et,0),fn=Math.min(fn,Ze.count));const Nt=fn-Et;if(Nt<0||Nt===1/0)return;Ne.setup(ne,te,Ve,J,$e);let Xn,St=et;if($e!==null&&(Xn=Te.get($e),St=Me,St.setIndex(Xn)),ne.isMesh)te.wireframe===!0?(z.setLineWidth(te.wireframeLinewidth*Ge()),St.setMode(x.LINES)):St.setMode(x.TRIANGLES);else if(ne.isLine){let rt=te.linewidth;rt===void 0&&(rt=1),z.setLineWidth(rt*Ge()),ne.isLineSegments?St.setMode(x.LINES):ne.isLineLoop?St.setMode(x.LINE_LOOP):St.setMode(x.LINE_STRIP)}else ne.isPoints?St.setMode(x.POINTS):ne.isSprite&&St.setMode(x.TRIANGLES);if(ne.isInstancedMesh)St.renderInstances(Et,Nt,ne.count);else if(J.isInstancedBufferGeometry){const rt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Qa=Math.min(J.instanceCount,rt);St.renderInstances(Et,Nt,Qa)}else St.render(Et,Nt)};function Ae(A,W,J){A.transparent===!0&&A.side===gn&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,Pr(A,W,J),A.side=Ai,A.needsUpdate=!0,Pr(A,W,J),A.side=gn):Pr(A,W,J)}this.compile=function(A,W,J=null){J===null&&(J=A),p=he.get(J),p.init(),b.push(p),J.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),A!==J&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),p.setupLights(y._useLegacyLights);const te=new Set;return A.traverse(function(ne){const De=ne.material;if(De)if(Array.isArray(De))for(let Oe=0;Oe<De.length;Oe++){const Ve=De[Oe];Ae(Ve,J,ne),te.add(Ve)}else Ae(De,J,ne),te.add(De)}),b.pop(),p=null,te},this.compileAsync=function(A,W,J=null){const te=this.compile(A,W,J);return new Promise(ne=>{function De(){if(te.forEach(function(Oe){fe.get(Oe).currentProgram.isReady()&&te.delete(Oe)}),te.size===0){ne(A);return}setTimeout(De,10)}L.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let st=null;function Mt(A){st&&st(A)}function yt(){jt.stop()}function dt(){jt.start()}const jt=new Ih;jt.setAnimationLoop(Mt),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(A){st=A,Pe.setAnimationLoop(A),A===null?jt.stop():jt.start()},Pe.addEventListener("sessionstart",yt),Pe.addEventListener("sessionend",dt),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(W),W=Pe.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,W,I),p=he.get(A,b.length),p.init(),b.push(p),Fe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),pe.setFromProjectionMatrix(Fe),be=this.localClippingEnabled,ve=Ee.init(this.clippingPlanes,be),g=oe.get(A,h.length),g.init(),h.push(g),On(A,W,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(le,me),this.info.render.frame++,ve===!0&&Ee.beginShadows();const J=p.state.shadowsArray;if(xe.render(J,A,W),ve===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ce.render(g,A),p.setupLights(y._useLegacyLights),W.isArrayCamera){const te=W.cameras;for(let ne=0,De=te.length;ne<De;ne++){const Oe=te[ne];ac(g,A,Oe,Oe.viewport)}}else ac(g,A,W);I!==null&&(Q.updateMultisampleRenderTarget(I),Q.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,W),Ne.resetDefaultState(),X=-1,M=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function On(A,W,J,te){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||pe.intersectsSprite(A)){te&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Fe);const Oe=v.update(A),Ve=A.material;Ve.visible&&g.push(A,Oe,Ve,J,ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||pe.intersectsObject(A))){const Oe=v.update(A),Ve=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),ke.copy(Oe.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ve)){const $e=Oe.groups;for(let nt=0,je=$e.length;nt<je;nt++){const Ze=$e[nt],Et=Ve[Ze.materialIndex];Et&&Et.visible&&g.push(A,Oe,Et,J,ke.z,Ze)}}else Ve.visible&&g.push(A,Oe,Ve,J,ke.z,null)}}const De=A.children;for(let Oe=0,Ve=De.length;Oe<Ve;Oe++)On(De[Oe],W,J,te)}function ac(A,W,J,te){const ne=A.opaque,De=A.transmissive,Oe=A.transparent;p.setupLightsView(J),ve===!0&&Ee.setGlobalState(y.clippingPlanes,J),De.length>0&&rp(ne,De,W,J),te&&z.viewport(w.copy(te)),ne.length>0&&Rr(ne,W,J),De.length>0&&Rr(De,W,J),Oe.length>0&&Rr(Oe,W,J),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function rp(A,W,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const De=G.isWebGL2;ye===null&&(ye=new Qi(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?vr:Ei,minFilter:gr,samples:De?4:0})),y.getDrawingBufferSize(Ie),De?ye.setSize(Ie.x,Ie.y):ye.setSize(vl(Ie.x),vl(Ie.y));const Oe=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(ee),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear();const Ve=y.toneMapping;y.toneMapping=yi,Rr(A,J,te),Q.updateMultisampleRenderTarget(ye),Q.updateRenderTargetMipmap(ye);let $e=!1;for(let nt=0,je=W.length;nt<je;nt++){const Ze=W[nt],Et=Ze.object,fn=Ze.geometry,Nt=Ze.material,Xn=Ze.group;if(Nt.side===gn&&Et.layers.test(te.layers)){const St=Nt.side;Nt.side=on,Nt.needsUpdate=!0,oc(Et,J,te,fn,Nt,Xn),Nt.side=St,Nt.needsUpdate=!0,$e=!0}}$e===!0&&(Q.updateMultisampleRenderTarget(ye),Q.updateRenderTargetMipmap(ye)),y.setRenderTarget(Oe),y.setClearColor(ee,k),y.toneMapping=Ve}function Rr(A,W,J){const te=W.isScene===!0?W.overrideMaterial:null;for(let ne=0,De=A.length;ne<De;ne++){const Oe=A[ne],Ve=Oe.object,$e=Oe.geometry,nt=te===null?Oe.material:te,je=Oe.group;Ve.layers.test(J.layers)&&oc(Ve,W,J,$e,nt,je)}}function oc(A,W,J,te,ne,De){A.onBeforeRender(y,W,J,te,ne,De),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(y,W,J,te,A,De),ne.transparent===!0&&ne.side===gn&&ne.forceSinglePass===!1?(ne.side=on,ne.needsUpdate=!0,y.renderBufferDirect(J,W,te,ne,A,De),ne.side=Ai,ne.needsUpdate=!0,y.renderBufferDirect(J,W,te,ne,A,De),ne.side=gn):y.renderBufferDirect(J,W,te,ne,A,De),A.onAfterRender(y,W,J,te,ne,De)}function Pr(A,W,J){W.isScene!==!0&&(W=ut);const te=fe.get(A),ne=p.state.lights,De=p.state.shadowsArray,Oe=ne.state.version,Ve=N.getParameters(A,ne.state,De,W,J),$e=N.getProgramCacheKey(Ve);let nt=te.programs;te.environment=A.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(A.isMeshStandardMaterial?ae:de).get(A.envMap||te.environment),nt===void 0&&(A.addEventListener("dispose",H),nt=new Map,te.programs=nt);let je=nt.get($e);if(je!==void 0){if(te.currentProgram===je&&te.lightsStateVersion===Oe)return cc(A,Ve),je}else Ve.uniforms=N.getUniforms(A),A.onBuild(J,Ve,y),A.onBeforeCompile(Ve,y),je=N.acquireProgram(Ve,$e),nt.set($e,je),te.uniforms=Ve.uniforms;const Ze=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Ee.uniform),cc(A,Ve),te.needsLights=lp(A),te.lightsStateVersion=Oe,te.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMap.value=ne.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotShadowMap.value=ne.state.spotShadowMap,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMap.value=ne.state.pointShadowMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.currentProgram=je,te.uniformsList=null,je}function lc(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=ma.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function cc(A,W){const J=fe.get(A);J.outputColorSpace=W.outputColorSpace,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function ap(A,W,J,te,ne){W.isScene!==!0&&(W=ut),Q.resetTextureUnits();const De=W.fog,Oe=te.isMeshStandardMaterial?W.environment:null,Ve=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ri,$e=(te.isMeshStandardMaterial?ae:de).get(te.envMap||Oe),nt=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,je=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!J.morphAttributes.position,Et=!!J.morphAttributes.normal,fn=!!J.morphAttributes.color;let Nt=yi;te.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Nt=y.toneMapping);const Xn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=Xn!==void 0?Xn.length:0,rt=fe.get(te),Qa=p.state.lights;if(ve===!0&&(be===!0||A!==M)){const dn=A===M&&te.id===X;Ee.setState(te,A,dn)}let At=!1;te.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Qa.state.version||rt.outputColorSpace!==Ve||ne.isInstancedMesh&&rt.instancing===!1||!ne.isInstancedMesh&&rt.instancing===!0||ne.isSkinnedMesh&&rt.skinning===!1||!ne.isSkinnedMesh&&rt.skinning===!0||ne.isInstancedMesh&&rt.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&rt.instancingColor===!1&&ne.instanceColor!==null||rt.envMap!==$e||te.fog===!0&&rt.fog!==De||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ee.numPlanes||rt.numIntersection!==Ee.numIntersection)||rt.vertexAlphas!==nt||rt.vertexTangents!==je||rt.morphTargets!==Ze||rt.morphNormals!==Et||rt.morphColors!==fn||rt.toneMapping!==Nt||G.isWebGL2===!0&&rt.morphTargetsCount!==St)&&(At=!0):(At=!0,rt.__version=te.version);let Ri=rt.currentProgram;At===!0&&(Ri=Pr(te,W,ne));let uc=!1,Xs=!1,eo=!1;const Kt=Ri.getUniforms(),Pi=rt.uniforms;if(z.useProgram(Ri.program)&&(uc=!0,Xs=!0,eo=!0),te.id!==X&&(X=te.id,Xs=!0),uc||M!==A){Kt.setValue(x,"projectionMatrix",A.projectionMatrix),Kt.setValue(x,"viewMatrix",A.matrixWorldInverse);const dn=Kt.map.cameraPosition;dn!==void 0&&dn.setValue(x,ke.setFromMatrixPosition(A.matrixWorld)),G.logarithmicDepthBuffer&&Kt.setValue(x,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Kt.setValue(x,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Xs=!0,eo=!0)}if(ne.isSkinnedMesh){Kt.setOptional(x,ne,"bindMatrix"),Kt.setOptional(x,ne,"bindMatrixInverse");const dn=ne.skeleton;dn&&(G.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Kt.setValue(x,"boneTexture",dn.boneTexture,Q),Kt.setValue(x,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const to=J.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&G.isWebGL2===!0)&&Be.update(ne,J,Ri),(Xs||rt.receiveShadow!==ne.receiveShadow)&&(rt.receiveShadow=ne.receiveShadow,Kt.setValue(x,"receiveShadow",ne.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Pi.envMap.value=$e,Pi.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Xs&&(Kt.setValue(x,"toneMappingExposure",y.toneMappingExposure),rt.needsLights&&op(Pi,eo),De&&te.fog===!0&&se.refreshFogUniforms(Pi,De),se.refreshMaterialUniforms(Pi,te,K,Z,ye),ma.upload(x,lc(rt),Pi,Q)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ma.upload(x,lc(rt),Pi,Q),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Kt.setValue(x,"center",ne.center),Kt.setValue(x,"modelViewMatrix",ne.modelViewMatrix),Kt.setValue(x,"normalMatrix",ne.normalMatrix),Kt.setValue(x,"modelMatrix",ne.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const dn=te.uniformsGroups;for(let no=0,cp=dn.length;no<cp;no++)if(G.isWebGL2){const fc=dn[no];ze.update(fc,Ri),ze.bind(fc,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function op(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function lp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,W,J){fe.get(A.texture).__webglTexture=W,fe.get(A.depthTexture).__webglTexture=J;const te=fe.get(A);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const J=fe.get(A);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,J=0){I=A,R=W,F=J;let te=!0,ne=null,De=!1,Oe=!1;if(A){const $e=fe.get(A);$e.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(x.FRAMEBUFFER,null),te=!1):$e.__webglFramebuffer===void 0?Q.setupRenderTarget(A):$e.__hasExternalTextures&&Q.rebindTextures(A,fe.get(A.texture).__webglTexture,fe.get(A.depthTexture).__webglTexture);const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Oe=!0);const je=fe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[W])?ne=je[W][J]:ne=je[W],De=!0):G.isWebGL2&&A.samples>0&&Q.useMultisampledRTT(A)===!1?ne=fe.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?ne=je[J]:ne=je,w.copy(A.viewport),Y.copy(A.scissor),j=A.scissorTest}else w.copy(ce).multiplyScalar(K).floor(),Y.copy(O).multiplyScalar(K).floor(),j=q;if(z.bindFramebuffer(x.FRAMEBUFFER,ne)&&G.drawBuffers&&te&&z.drawBuffers(A,ne),z.viewport(w),z.scissor(Y),z.setScissorTest(j),De){const $e=fe.get(A.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+W,$e.__webglTexture,J)}else if(Oe){const $e=fe.get(A.texture),nt=W||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,$e.__webglTexture,J||0,nt)}X=-1},this.readRenderTargetPixels=function(A,W,J,te,ne,De,Oe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){z.bindFramebuffer(x.FRAMEBUFFER,Ve);try{const $e=A.texture,nt=$e.format,je=$e.type;if(nt!==In&&Xe.convert(nt)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=je===vr&&(L.has("EXT_color_buffer_half_float")||G.isWebGL2&&L.has("EXT_color_buffer_float"));if(je!==Ei&&Xe.convert(je)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===gi&&(G.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-te&&J>=0&&J<=A.height-ne&&x.readPixels(W,J,te,ne,Xe.convert(nt),Xe.convert(je),De)}finally{const $e=I!==null?fe.get(I).__webglFramebuffer:null;z.bindFramebuffer(x.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(A,W,J=0){const te=Math.pow(2,-J),ne=Math.floor(W.image.width*te),De=Math.floor(W.image.height*te);Q.setTexture2D(W,0),x.copyTexSubImage2D(x.TEXTURE_2D,J,0,0,A.x,A.y,ne,De),z.unbindTexture()},this.copyTextureToTexture=function(A,W,J,te=0){const ne=W.image.width,De=W.image.height,Oe=Xe.convert(J.format),Ve=Xe.convert(J.type);Q.setTexture2D(J,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,J.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,J.unpackAlignment),W.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,te,A.x,A.y,ne,De,Oe,Ve,W.image.data):W.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,te,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Oe,W.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,te,A.x,A.y,Oe,Ve,W.image),te===0&&J.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(A,W,J,te,ne=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=A.max.x-A.min.x+1,Oe=A.max.y-A.min.y+1,Ve=A.max.z-A.min.z+1,$e=Xe.convert(te.format),nt=Xe.convert(te.type);let je;if(te.isData3DTexture)Q.setTexture3D(te,0),je=x.TEXTURE_3D;else if(te.isDataArrayTexture)Q.setTexture2DArray(te,0),je=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,te.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,te.unpackAlignment);const Ze=x.getParameter(x.UNPACK_ROW_LENGTH),Et=x.getParameter(x.UNPACK_IMAGE_HEIGHT),fn=x.getParameter(x.UNPACK_SKIP_PIXELS),Nt=x.getParameter(x.UNPACK_SKIP_ROWS),Xn=x.getParameter(x.UNPACK_SKIP_IMAGES),St=J.isCompressedTexture?J.mipmaps[0]:J.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,St.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,St.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,A.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,A.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,A.min.z),J.isDataTexture||J.isData3DTexture?x.texSubImage3D(je,ne,W.x,W.y,W.z,De,Oe,Ve,$e,nt,St.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(je,ne,W.x,W.y,W.z,De,Oe,Ve,$e,St.data)):x.texSubImage3D(je,ne,W.x,W.y,W.z,De,Oe,Ve,$e,nt,St),x.pixelStorei(x.UNPACK_ROW_LENGTH,Ze),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Et),x.pixelStorei(x.UNPACK_SKIP_PIXELS,fn),x.pixelStorei(x.UNPACK_SKIP_ROWS,Nt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Xn),ne===0&&te.generateMipmaps&&x.generateMipmap(je),z.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),z.unbindTexture()},this.resetState=function(){R=0,F=0,I=null,z.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jl?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Ya?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?ji:xh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ji?zt:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class NA extends Oh{}NA.prototype.isWebGL1Renderer=!0;class OA extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class oa extends Ar{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const df={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class BA{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const HA=new BA;class ic{constructor(e){this.manager=e!==void 0?e:HA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ic.DEFAULT_MATERIAL_NAME="__DEFAULT";class zA extends ic{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=df.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=xr("img");function l(){u(),df.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class GA extends ic{constructor(e){super(e)}load(e,t,i,s){const r=new ln,a=new zA(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class VA extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Vo=new Rt,hf=new V,pf=new V;class WA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(hf),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mf=new Rt,tr=new V,Wo=new V;class qA extends WA{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),i.position.copy(tr),Wo.copy(i.position),Wo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wo),i.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),mf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf)}}class $A extends VA{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new qA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _f{constructor(e,t,i=0,s=1/0){this.ray=new Th(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ec,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ml(e,this,i,t),i.sort(gf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ml(e[s],this,i,t);return i.sort(gf),i}}function gf(n,e){return n.distance-e.distance}function Ml(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)Ml(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);const XA="/app2/icon/close.svg",YA=["src"],jA=qe({__name:"IconClose",setup(n){return(e,t)=>(ie(),ge("img",{class:"Icon",src:re(XA),alt:"Close"},null,8,YA))}}),KA=Ke(jA,[["__scopeId","data-v-e1b07c4f"]]),ZA="/app2/icon/message1.svg",JA=ns("log",{state:()=>({GENERAL:[],BATTLE:[]})}),QA={class:"actionLog"},ew={class:"logWindow"},tw={class:"logTab"},nw=["onClick"],iw={key:0,class:"logList",density:"compact"},sw=["src"],rw=qe({__name:"ActionLog",setup(n,{expose:e}){const t=JA(),i=$n(),s=Se(!0),r=[C.strLog1,C.strLog2],a=Se(),o=d=>{a.value=d};function l(d,m){m==0?t.GENERAL.push(d):t.BATTLE.push(d),Ws(()=>{f()})}function c(){s.value=!0}function u(){s.value=!1}function f(){const d=document.querySelector(".logList");d&&(d.scrollTop=d.scrollHeight)}return ts(()=>{a.value=i.process==C.processBattle?C.strLog2:C.strLog1,f()}),e({addLog:l}),(d,m)=>(ie(),ge("div",QA,[Pt(P("div",ew,[P("ul",tw,[(ie(),ge(ft,null,Yt(r,_=>P("li",{onClick:g=>o(_),class:Ht([{"selected-tab":_==a.value},"tabItem"])},Re(_),11,nw)),64))]),Le(KA,{class:"IconClose",onClick:m[0]||(m[0]=_=>u())}),a.value?(ie(),ge("ul",iw,[(ie(!0),ge(ft,null,Yt(re(t)[a.value],(_,g)=>(ie(),ge("li",{key:g,class:"logMessage"},Re(_),1))),128))])):Ye("",!0)],512),[[It,s.value]]),Pt(P("img",{class:"iconLog",src:re(ZA),alt:"Log",onClick:m[1]||(m[1]=_=>c())},null,8,sw),[[It,!s.value]])]))}}),Bh=Ke(rw,[["__scopeId","data-v-98f61e70"]]),vf="/app2/img/back/wall/water03.jpg",aw="/app2/img/back/wall/mable-black-p.jpg",ow="/app2/img/back/wall/wood-deck-02.jpg",lw="/app2/img/back/wall/stone-tile02-p.jpg",cw="/app2/img/back/wall/brick1.jpg",uw="/app2/img/back/wall/tesukiwashi06.jpg",fw="/app2/img/back/wall/forest1.jpg",dw="/app2/img/back/floor/Wonder-Marble.jpg",hw="/app2/img/back/floor/wood-deck-03.jpg",pw="/app2/img/back/floor/rockland3.jpg",mw="/app2/img/back/floor/rockland2.jpg",_w="/app2/img/back/floor/tatami02.jpg",gw="/app2/img/back/floor/forest1.jpg",vw="/app2/img/back/door/leftdoor1.jpg",xw="/app2/img/back/door/rightdoor1.jpg",Hh=ns("position",{state:()=>({playerPosition:new V})}),Mw={key:0,class:"crossKey"},Sw=qe({__name:"Dungeon",setup(n){const e=new Array(vf,aw,ow,lw,cw,uw);new Array(vf,dw,hw,pw,mw,_w);const t=$n(),i=Hh(),s=Ci(),r=yr(),a=Se(null);let o=new OA,l=new _n(75,window.innerWidth/window.innerHeight,.1,1e3),c=new Oh,u,f=new V,d=0,m=0,_=[],g;ts(()=>{switch(Ix(),h(),b(),window.addEventListener("keydown",R),window.addEventListener("click",T),p(),X(),t.whichDungeon){case C.nameDungeon1:t.musicDungeon=C.mscDungeon1;break}r.playBgm(t.musicDungeon)});const p=function(){requestAnimationFrame(p),c.render(o,l)};function h(){var j;c.setSize(window.innerWidth,window.innerHeight),(j=a.value)==null||j.appendChild(c.domElement),i.playerPosition=new V(C.BlockSize*Ea.X,5,C.BlockSize*Ea.Y),f.copy(i.playerPosition),l.position.copy(i.playerPosition),w(C.logEnterDungeon);const Y={point:16514559};u=new $A(Y.point,12,100,1),u.position.copy(i.playerPosition),o.add(u)}function b(){Math.floor(Math.random()*e.length);const Y=new GA,j=new Ds(C.BlockSize,C.BlockHeight),ee=Y.load(fw),k=new oa({map:ee,side:gn,bumpMap:ee,bumpScale:.2}),$=new Ds(C.BlockSize/2,C.BlockHeight),Z=Y.load(vw),K=Y.load(xw),le=new oa({map:Z,side:gn,bumpMap:Z,bumpScale:.2}),me=new oa({map:K,side:gn,bumpMap:K,bumpScale:.2}),ce=new Ds(C.BlockSize,C.BlockSize),O=Y.load(gw),q=new oa({map:O,side:gn,bumpMap:O,bumpScale:.2});for(let pe=0;pe<pt.length;pe++)for(let ve=0;ve<pt[pe].length;ve++)if(pt[pe][ve]==C.MapRoom||pt[pe][ve]==C.MapRoad){const be=new tn(ce,q);if(be.position.set(C.BlockSize*ve,0,C.BlockSize*pe),be.rotation.x=90*Math.PI/180,o.add(be),ti(pe-1,ve)){const Ie=new tn(j,k);Ie.position.set(C.BlockSize*ve,C.BlockHeight/2,C.BlockSize*(pe-.5)),o.add(Ie)}if(ti(pe+1,ve)){const Ie=new tn(j,k);Ie.position.set(C.BlockSize*ve,C.BlockHeight/2,C.BlockSize*(pe+.5)),o.add(Ie)}if(ti(pe,ve-1)){const Ie=new tn(j,k);Ie.position.set(C.BlockSize*(ve-.5),C.BlockHeight/2,C.BlockSize*pe),Ie.rotation.y=90*Math.PI/180,o.add(Ie)}if(ti(pe,ve+1)){const Ie=new tn(j,k);Ie.position.set(C.BlockSize*(ve+.5),C.BlockHeight/2,C.BlockSize*pe),Ie.rotation.y=90*Math.PI/180,o.add(Ie)}const ye=new tn($,le),Fe=new tn($,me);switch(sr[pe][ve]){case C.SetDoorUp:ye.position.set(C.BlockSize*ve-C.BlockSize/4,C.BlockHeight/2,C.BlockSize*(pe-.5)),o.add(ye),Fe.position.set(C.BlockSize*ve+C.BlockSize/4,C.BlockHeight/2,C.BlockSize*(pe-.5)),o.add(Fe),y(ye,Fe);break;case C.SetDoorUnder:ye.position.set(C.BlockSize*ve-C.BlockSize/4,C.BlockHeight/2,C.BlockSize*(pe+.5)),o.add(ye),Fe.position.set(C.BlockSize*ve+C.BlockSize/4,C.BlockHeight/2,C.BlockSize*(pe+.5)),o.add(Fe),y(ye,Fe);break;case C.SetDoorLeft:ye.position.set(C.BlockSize*(ve-.5),C.BlockHeight/2,C.BlockSize*pe+C.BlockSize/4),ye.rotation.y=90*Math.PI/180,o.add(ye),Fe.position.set(C.BlockSize*(ve-.5),C.BlockHeight/2,C.BlockSize*pe-C.BlockSize/4),Fe.rotation.y=90*Math.PI/180,o.add(Fe),y(ye,Fe);break;case C.SetDoorRight:ye.position.set(C.BlockSize*(ve+.5),C.BlockHeight/2,C.BlockSize*pe+C.BlockSize/4),ye.rotation.y=90*Math.PI/180,o.add(ye),Fe.position.set(C.BlockSize*(ve+.5),C.BlockHeight/2,C.BlockSize*pe-C.BlockSize/4),Fe.rotation.y=90*Math.PI/180,o.add(Fe),y(ye,Fe);break}}}function y(Y,j){_.push({id:g,leftDoor:Y,rightDoor:j,isOpen:!1}),g+=1}const T=Y=>{if(t.processDungeon==C.processBattle)return;const j=new _f,ee=new ct;ee.x=Y.clientX/window.innerWidth*2-1,ee.y=-(Y.clientY/window.innerHeight)*2+1,j.setFromCamera(ee,l);const k=j.intersectObjects(_.flatMap($=>[$.leftDoor,$.rightDoor]));if(k.length>0){const $=_.find(Z=>Z.leftDoor===k[0].object||Z.rightDoor===k[0].object);$&&($.isOpen||($.leftDoor.translateOnAxis(new V(-1,0,0),C.BlockSize/4),$.rightDoor.translateOnAxis(new V(1,0,0),C.BlockSize/4),$.leftDoor.rotateY(-Math.PI/2.1),$.rightDoor.rotateY(Math.PI/2.1),$.leftDoor.translateOnAxis(new V(1,0,0),C.BlockSize/4),$.rightDoor.translateOnAxis(new V(-1,0,0),C.BlockSize/4),$.isOpen=!0))}},R=Y=>{switch(Y.key){case"a":case"A":F(C.TurnLeft);break;case"d":case"D":F(C.TurnRight);break;default:F(Y.key)}};function F(Y){if(console.log("playerMove",Y),s.party||s.character||t.processDungeon==C.processBattle||!l)return;const j=new V;l.getWorldDirection(j);let ee=i.playerPosition.clone();switch(Y){case C.ArrowUp:ee.add(j.multiplyScalar(C.BlockSize)),k();break;case C.ArrowDown:ee.sub(j.multiplyScalar(C.BlockSize)),k();break;case C.ArrowLeft:ee.x+=j.z*C.BlockSize,ee.z-=j.x*C.BlockSize,k();break;case C.ArrowRight:ee.x-=j.z*C.BlockSize,ee.z+=j.x*C.BlockSize,k();break;case C.TurnLeft:d+=Math.PI/2;break;case C.TurnRight:d-=Math.PI/2;break;default:return}if(ee==i.playerPosition)return;function k(){ee.x=Math.round(ee.x/C.BlockSize)*C.BlockSize,ee.z=Math.round(ee.z/C.BlockSize)*C.BlockSize}let $=Math.floor((ee.x+5)/C.BlockSize),Z=Math.floor((ee.z+5)/C.BlockSize);if(!ti(Z,$)){const K=new _f,le=ee.clone().sub(i.playerPosition).normalize();K.set(i.playerPosition,le);const me=K.intersectObjects(_.flatMap(ce=>[ce.leftDoor,ce.rightDoor]));if(me.length>0){const ce=_.find(O=>O.leftDoor===me[0].object||O.rightDoor===me[0].object);if(ce&&!ce.isOpen&&me[0].distance<=C.BlockSize)return}i.playerPosition.copy(ee),f.copy(ee),m+=Qt(C.encountMin,C.encountMax),m>=C.encountLimit&&(I(),m=0)}}function I(){w(C.logMonsterEncounter),s.map=!1,t.processDungeon=C.processBattle}const X=()=>{l.position.equals(f)||(l.position.lerp(f,.05),u.position.copy(f)),l.rotation.y!==d&&(l.rotation.y+=(d-l.rotation.y)*.1),requestAnimationFrame(X)},M=Se(null),w=Y=>{M.value&&M.value.addLog(Y,0)};return(Y,j)=>(ie(),ge(ft,null,[P("div",{ref_key:"dungeon",ref:a},null,512),re(t).processDungeon==re(C).processSearch&&!re(s).party&&!re(s).character?(ie(),ge("div",Mw,[P("div",{class:"upKey",onClick:j[0]||(j[0]=ee=>F(re(C).ArrowUp))}),P("div",{class:"downKey",onClick:j[1]||(j[1]=ee=>F(re(C).ArrowDown))}),P("div",{class:"leftKey",onClick:j[2]||(j[2]=ee=>F(re(C).TurnLeft))}),P("div",{class:"rightKey",onClick:j[3]||(j[3]=ee=>F(re(C).TurnRight))}),Le(Bh,{ref_key:"actionLog",ref:M,class:"actionLog"},null,512)])):Ye("",!0)],64))}}),yw=Ke(Sw,[["__scopeId","data-v-62727409"]]),Ew="/app2/img/flame/flame032401.png",bw="/app2/img/flame/flame032402.png",Tw={class:"TurnOrder"},Aw=["src"],ww=qe({__name:"TurnOrder",props:{turnOrder:Array,numOrder:Number},setup(n){const e=i=>i instanceof an?Ew:bw,t=i=>i instanceof an?i.faceGraphicUrl:i.GraphicUrl;return(i,s)=>(ie(),ge("div",Tw,[(ie(!0),ge(ft,null,Yt(n.turnOrder,(r,a)=>Pt((ie(),ge("div",{key:a,class:Ht(["turnOrderFlame",{currentOrder:a==n.numOrder}]),style:Rn({backgroundImage:"url("+e(r)+")"})},[P("img",{src:t(r),alt:"",class:"turnOrderImage"},null,8,Aw)],6)),[[It,r.nowHP>0]])),128))]))}}),Cw=Ke(ww,[["__scopeId","data-v-4bc464c4"]]),sc=n=>(kn("data-v-35b7f0f8"),n=n(),Nn(),n),Rw=sc(()=>P("div",{class:"result"},"RESULT",-1)),Pw={class:"resultFlame"},Lw={class:"expGoldLine"},Dw={class:"expItem"},Iw=sc(()=>P("span",{class:"itemKinds"},"GET EXP",-1)),Uw={class:"itemValue"},Fw={class:"goldItem"},kw=sc(()=>P("span",{class:"itemKinds"},"GET GOLD",-1)),Nw={class:"itemValue"},Ow={class:"character"},Bw={class:"characterFlame"},Hw=["src"],zw={class:"rightFlame"},Gw={class:"level"},Vw={class:"progress-bar"},Ww=qe({__name:"BattleResult",props:{getExp:{type:Number},getGold:{type:Number}},setup(n){const e=is(),t=Ci(),i=$n(),s=yr();function r(){t.map=!0,i.processDungeon=C.processSearch,s.playBgm(i.musicDungeon)}return(a,o)=>(ie(),ge("div",{class:"battleResult",onClick:o[0]||(o[0]=l=>r())},[Rw,P("div",Pw,[P("div",Lw,[P("span",Dw,[Iw,P("span",Uw,Re(n.getExp),1)]),P("span",Fw,[kw,P("span",Nw,Re(n.getGold),1)])]),(ie(!0),ge(ft,null,Yt(re(e).characters,l=>(ie(),ge("div",Ow,[P("div",Bw,[P("img",{class:"face",src:l.faceGraphicUrl},null,8,Hw),P("div",zw,[P("div",Gw,"LV "+Re(l.LV),1),P("span",Vw,[Le(nh,{exp:l.exp,next:l.nextLvExp},null,8,["exp","next"])])])])]))),256))])]))}}),qw=Ke(Ww,[["__scopeId","data-v-35b7f0f8"]]),$w={class:"CurrentUI"},Xw=["onClick","onMouseover"],Yw=["src"],jw=["src"],Kw={class:"progress-bar-hp"},Zw={class:"progress-bar-mp"},Jw=qe({__name:"Current",props:{currentCharacter:{type:an},targetCharacter:{type:Array},showCharacterEffect:{type:Array},toCharacterEffect:{type:Array,default:()=>[]},toCharacterEffectType:{type:String},showCharacterAnime:{type:Array},toCharacterAnime:{type:[String,null],default:null},selectionMode:{type:String}},emits:["selectCharacter"],setup(n,{emit:e}){const t=n,i=is();function s(l){var c;t.selectionMode=="oneFriend"&&((c=t.targetCharacter)!=null&&c.includes(l)||o("over",l))}function r(l){var c;t.selectionMode=="myself"?o("click"):t.selectionMode=="oneFriend"?(c=t.targetCharacter)!=null&&c.includes(l)?o("click",l):o("over",l):t.selectionMode=="allFriends"&&o("click")}const a=e,o=(l,c=null)=>{a("selectCharacter",l,c)};return Tt(()=>t.showCharacterEffect,()=>{console.log("showCharacterEffect",t.showCharacterEffect)}),Tt(()=>t.toCharacterEffect,()=>{console.log("toCharacterEffect",t.toCharacterEffect)}),Tt(()=>t.toCharacterEffectType,()=>{console.log("toCharacterEffectType",t.toCharacterEffectType)}),Tt(()=>t.selectionMode,()=>{console.log("selectionMode",t.selectionMode)}),(l,c)=>(ie(),ge("div",$w,[(ie(!0),ge(ft,null,Yt(re(i).characters,(u,f)=>{var d;return ie(),ge("div",{class:Ht(["character",{currentCharacter:u==n.currentCharacter,targetCharacter:(d=n.targetCharacter)==null?void 0:d.includes(u)}]),onClick:m=>r(u),onMouseover:m=>s(u)},[Pt(P("div",{class:Ht(["characterEffect",{effectGreen:n.toCharacterEffectType=="heal",effectRed:n.toCharacterEffectType=="damage"}])},Re(n.toCharacterEffect[f]),3),[[It,n.showCharacterEffect&&n.showCharacterEffect[f]]]),Pt(P("img",{src:n.toCharacterAnime,class:"toCharacterAnime",alt:"skill effect"},null,8,Yw),[[It,n.showCharacterAnime&&n.showCharacterAnime[f]]]),P("img",{class:"characterface",src:u.faceGraphicUrl},null,8,jw),P("span",Kw,[Le(qa,{nowHP:u.nowHP,maxHP:u.totalStatus.HP},null,8,["nowHP","maxHP"])]),P("div",Zw,[Le(ql,{nowMP:u.nowMP,maxMP:u.totalStatus.MP},null,8,["nowMP","maxMP"])])],42,Xw)}),256))]))}}),zh=Ke(Jw,[["__scopeId","data-v-72f64bd1"]]);class Sl{constructor(e){Ue(this,"mon_id");Ue(this,"mon_type");Ue(this,"name");Ue(this,"GraphicUrl");Ue(this,"LV");Ue(this,"HP");Ue(this,"MP");Ue(this,"ATK");Ue(this,"MGC");Ue(this,"DEF");Ue(this,"MDF");Ue(this,"DEX");Ue(this,"SPD");Ue(this,"HitRate");Ue(this,"CritRate");Ue(this,"nowHP");Ue(this,"nowMP");Ue(this,"GOLD");Ue(this,"EXP");Ue(this,"order");this.mon_id=e.mon_id,this.mon_type=e.mon_type,this.name=e.name,this.GraphicUrl=e.GraphicUrl,this.LV=e.LV,this.HP=e.HP,this.MP=e.MP,this.ATK=e.ATK,this.MGC=e.MGC,this.DEF=e.DEF,this.MDF=e.MDF,this.DEX=e.DEX,this.SPD=e.SPD,this.HitRate=C.monsterHitRate+Math.floor(this.DEX/10),this.CritRate=Math.floor(this.DEX/8),this.nowHP=e.HP,this.nowMP=e.MP,this.GOLD=e.GOLD,this.EXP=e.EXP,this.order=void 0}}const Qw="/app2/img/back/lightning.gif",eC=n=>(kn("data-v-0c155cb7"),n=n(),Nn(),n),tC=eC(()=>P("div",{class:"txtEncount"},"Encounter",-1)),nC=["src"],iC=qe({__name:"ImgEncount",setup(n){return(e,t)=>(ie(),ge(ft,null,[tC,P("img",{class:"imgEncount",src:re(Qw),alt:"imgEncount"},null,8,nC)],64))}}),sC=Ke(iC,[["__scopeId","data-v-0c155cb7"]]),rC="/app2/icon/AttackOrb.png",aC=["src"],oC=qe({__name:"IconAttack",setup(n){return(e,t)=>(ie(),ge("img",{class:"Icon",src:re(rC),alt:"Attack"},null,8,aC))}}),lC=Ke(oC,[["__scopeId","data-v-c09d57d2"]]),cC="/app2/icon/SkillOrb.png",uC=["src"],fC=qe({__name:"IconSkill",setup(n){return(e,t)=>(ie(),ge("img",{class:"Icon",src:re(cC),alt:"Attack"},null,8,uC))}}),dC=Ke(fC,[["__scopeId","data-v-b31f90eb"]]),hC="/app2/icon/MagicOrb.png",pC=["src"],mC=qe({__name:"IconMagic",setup(n){return(e,t)=>(ie(),ge("img",{class:"Icon",src:re(hC),alt:"Magic"},null,8,pC))}}),_C=Ke(mC,[["__scopeId","data-v-5de73f17"]]),gC="/app2/effect/normal/slash.gif",vC="/app2/effect/normal/shot.gif",xf="/app2/effect/normal/hit.gif",xC="/app2/effect/monster/claw1.gif",MC={key:2,class:"BattleUI"},SC={class:"monsterGrid"},yC=["onClick","onMouseover"],EC=["src","onLoad"],bC=["src"],TC=["src"],AC=["src"],wC=["src"],CC={key:3,class:"startTurn"},RC={key:4,class:"endBattle"},PC={key:5,class:"monsterInfo"},LC={class:"monsterName"},DC={class:"progress-bar-hp"},IC={key:6},UC={key:3},FC={class:"attackName",id:"skillName"},kC={key:4,class:"attackName",id:"normalAttackName"},NC=qe({__name:"Battle",setup(n){const e=is(),t=yr(),i=Se(Array(6).fill(null)),s=gt("monsterList"),r=[],a=Se(Array(6).fill([])),o=Se(void 0),l=Se([]),c=Se(""),u=Se([]),f=Se(""),d=Se(0),m=Se(0),_=Se(void 0),g=Se(),p=Se([]),h=Se(new Array(e.characters.length).fill(!1)),b=Se(null),y=Se(new Array(e.characters.length).fill(!1)),T=Se(new Array(e.characters.length).fill(null)),R=Se(),F=Se(0),I=Se(0),X=Se([]),M=Se(0),w=Se("encount");let Y=null;const j=Se(""),ee=Xt({AttackBtn:{},SkillBtn:{}}),k=new Array(C.mscBattle1,C.mscBattle2,C.mscBattle3,C.mscBattle4,C.mscBattle5),$=S=>e.characters.findIndex(D=>D===S),Z=i.value.findIndex(S=>S!==null);ts(async()=>{for(K(),await li(C.awaitTime),le(),w.value="startTurn";w.value!=="result";)w.value="startTurn",await ce()});function K(){let S;S=Math.floor(Math.random()*k.length),t.playBgm(k[S])}function le(){const S=Qt(C.monNumMin,C.monNumMax);for(let H=0;H<S;H++){const B=new Sl(s[uo(s.length)]);r.push(B)}let D=[];for(;D.length<r.length;){const H=uo(6);D.includes(H)||D.push(H)}D.forEach((H,B)=>{r[B].order=H,i.value[H]=r[B]}),console.log(r)}let me=1;async function ce(){g.value=void 0,X.value=[...e.characters.filter(S=>S.nowHP>0),...r.filter(S=>S.nowHP>0)],X.value.sort((S,D)=>{let H=S instanceof an?S.totalStatus.SPD:S.SPD;return(D instanceof an?D.totalStatus.SPD:D.SPD)-H}),await li(C.awaitTime);for(let S=0;S<X.value.length;S++){let D=X.value[S];if(console.log("currentTurn",D),M.value=S,be.value="",p.value=[],l.value=[],D.nowHP>0&&(D instanceof an?(g.value=D,await O(D),g.value=void 0):D instanceof Sl&&(o.value=D,await ue(D),o.value=void 0)),!r.some(H=>H.nowHP>0)){w.value="endBattle",await li(C.awaitTime),w.value="result";break}if(!e.characters.some(H=>H.nowHP>0)){w.value="result";break}await li(C.nextTime)}He(),me+=1,await li(C.nextTime)}async function O(S){w.value="characterTurn",S.class==C.clsPriest?j.value=C.strMagic:j.value=C.strSkill,await L(),w.value="",await Te(S),U(!0)}const q=Se(!1);let pe;function ve(S){w.value="characterTurn",pe===S?(q.value=!1,U(!0),pe=null):(U(),ee[S]={transform:"scale(1.5) translateY(-20%)",opacity:1},pe=S,S==C.strAttack?(q.value=!1,be.value="oneEnemy",ke(Z),w.value="selectTarget"):q.value=!0)}const be=Se("");let ye;const Fe=S=>{q.value=!1,ye=S,be.value=S.skill_effect[0].target_type,ke(Z),w.value="selectTarget"},Ie=S=>w.value!="selectTarget"||!l.value?!1:l.value.includes(S);function ke(S){switch(p.value=[],l.value=[],be.value){case"myself":p.value.push(g.value);break;case"oneFriend":p.value.push(g.value);break;case"allFriends":p.value=e.characters.filter(D=>D.nowHP>0);break;case"randomFriend":break;case"oneEnemy":l.value.push(i.value[S]);break;case"columnEnemy":ut(S);break;case"rowEnemy":Ge(S);break;case"allEnemy":l.value=i.value.filter(D=>D!==null);break;case"randomEnemy":l.value=i.value.filter(D=>D!==null);break}}const ut=S=>{for(let D=S%3;D<i.value.length;D+=3)i.value[D]!==null&&l.value.push(i.value[D])},Ge=S=>{let D=S<=2?0:3,H=S<=2?2:5;for(let B=D;B<=H;B++)i.value[B]!==null&&l.value.push(i.value[B])},x=(S,D)=>{S=="over"?(p.value=[],p.value.push(D)):S=="click"&&Y&&(Y(),Y=null)},U=(S=!1)=>{ee.AttackBtn=S?{}:{opacity:.5},ee.SkillBtn=S?{}:{opacity:.5}};async function L(){return new Promise(S=>{Y=S})}function G(S,D){i.value[S]&&w.value==="selectTarget"&&(_.value=D,ke(S))}function z(S,D){i.value[S]&&w.value==="selectTarget"&&(_.value=D,l.value.includes(i.value[S])?Y&&(Y(),Y=null):ke(S))}async function ue(S){w.value="monsterTurn",await Ne(S,fe())}const fe=()=>{const S=e.characters.filter(Ae=>Ae.nowHP>0),D=S.reduce((Ae,st)=>Ae+st.totalStatus.Hate,0),H=S.map(Ae=>Ae.totalStatus.Hate/D),B=Math.random();let _e=0;for(let Ae=0;Ae<H.length;Ae++)if(_e+=H[Ae],B<_e)return S[Ae]};let Q,de,ae;async function Te(S){let D,H;if(pe==C.strAttack)tt(S.name+"'s "+C.strAttack),H=l.value[0],D=H.order,a.value[D]=[],v(S,H,D),Q=C.normalAttackTime,xe(S),await li(C.normalAttackTime+C.effectTime);else{tt(S.name+"'s "+ye.name);for(const B of ye.skill_effect){if(Q=B.anime_time,de=0,ae=0,be.value!=B.target_type&&E(B.target_type,S),be.value=B.target_type,B.target==1)he(S,B,ye.name);else if(B.target==2){if(a.value=Array.from({length:6},()=>[]),B.target_type=="randomEnemy")for(let _e=1;_e<=B.effect_times;_e++)H=l.value[uo(l.value.length)],D=H.order,v(S,H,D,B),ae+=1;else for(let _e of l.value){D=_e.order;for(let Ae=1;Ae<=B.effect_times;Ae++)v(S,_e,D,B),ae+=1}Ce(B)}de=C.effectTime+ae*C.delayTime,await li(Q+de)}}}function E(S,D){switch(p.value=[],l.value=[],S){case"myself":p.value.push(D);break;case"allFriends":p.value=e.characters.filter(H=>H.nowHP>0);break;case"randomFriend":break;case"allEnemy":l.value=i.value.filter(H=>H!==null);break;case"randomEnemy":l.value=i.value.filter(H=>H!==null);break}}function v(S,D,H,B){let _e=0,Ae=0,st=0,Mt=0,yt=0;if(se(S.totalStatus.HitRate,D.SPD)){pe==C.strAttack||pe==C.strSkill&&(B==null?void 0:B.base_status)==C.strAtk?(_e=S.totalStatus.ATK,Ae=D.DEF):pe==C.strSkill&&(B==null?void 0:B.base_status)==C.strMgc&&(_e=S.totalStatus.MGC,Ae=D.MDF),Mt=oe(S.totalStatus.CritRate,Ae)?C.critDamageRate:C.normalDamageRate,st=pe==C.strAttack?1:B.effect_amount,yt=Math.floor((_e-Ae/1.5)*st*Mt),console.log("characterAttack",_e),yt=yt<0?0:yt;const dt=N(yt);D.nowHP=yt>D.nowHP?0:D.nowHP-yt,D.nowHP==0&&(I.value+=D.EXP,F.value+=D.GOLD),a.value[H].push(dt),tt("> "+yt+" damage to "+D.name)}else{const dt=N(C.strMiss);a.value[H].push(dt)}}const N=S=>{const D={top:Qt(C.minEffectTop,C.maxEffectTop)+"%",left:Qt(C.minEffectLeft,C.maxEffectLeft)+"%"};return{effect:S,position:D,visible:!1}};function se(S,D){let H=S-Math.floor(D/10);return Math.random()<=H/100}function oe(S,D){let H=S-Math.floor(D/5);return Math.random()<=H/100}function he(S,D,H){let B=0;switch(B=S.totalStatus[D.base_status]*D.effect_amount,D.effect_type){case"heal":switch(D.target_type){case"myself":case"oneFriend":Ee(p.value[0],B,D.effect_kind);break;case"allFriends":for(let _e of e.characters)Ee(_e,B,D.effect_kind);break}break;case"buff":switch(D.target_type){case"myself":case"oneFriend":if(!p.value)return;p.value[0].addBuff(H,D.effect_kind,B,D.effect_times),p.value[0].calculateTotalStatus();break;case"allFriends":for(let _e of e.characters)_e.addBuff(H,D.effect_kind,B,D.effect_times),_e.calculateTotalStatus();break}break;case"condition":switch(D.target_type){case"myself":case"oneFriend":p.value[0].addCondition(H,D.effect_kind,B,D.effect_times);break;case"allFriends":for(let _e of e.characters)_e.addCondition(H,D.effect_kind,B,D.effect_times);break}break}et(D)}function Ee(S,D,H){console.log("characterHeal",S,H,D),H=="nowHP"?S.nowHP=S.nowHP+D>S.totalStatus.HP?S.totalStatus.HP:S.nowHP+D:H=="nowMP"&&(S.nowMP=S.nowMP+D>S.totalStatus.MP?S.totalStatus.MP:S.nowMP+D),T.value[$(S)]=D,ae+=1,tt("> Recovers "+S.name+"'s "+H+" by "+D)}function xe(S){if(S.equipment.WEP)switch(S.equipment.WEP.kind){case"Sword":case"Axe":case"Dagger":c.value=gC;break;case"Wand":c.value=xf;break;case"Bow":case"Spear":c.value=vC;break}else c.value=xf;let D=l.value[0].order;u.value[D]=!0}function Ce(S){c.value=S.skill_anime;let D=l.value[0].order;if(S.target_type=="oneEnemy")u.value[D]=!0;else switch(S.target_type){case"columnEnemy":f.value="column",m.value=7+D%3*27;break;case"rowEnemy":f.value="row",d.value=15+Math.floor(D/3)*25;break;case"allEnemy":f.value="all";break;case"randomEnemy":f.value="all";break}}const Be=(S=0)=>{setTimeout(()=>{f.value="",u.value[S]=!1,Xe()},Q)};function et(S){switch(console.log("skillEffect",S),S.target_type){case"myself":case"oneFriend":let D=$(p.value[0]);b.value=S.skill_anime,h.value[D]=!0,setTimeout(()=>{h.value[D]=!1,b.value=null,Me(S.effect_type)},Q);break;case"allFriends":f.value="all",c.value=S.skill_anime,setTimeout(()=>{c.value="",f.value="",Me(S.effect_type)},Q);break}}function Me(S){let D=C.delayTime;R.value=S;for(let H=0;H<e.characters.length;H++)console.log("applyEffectToCharacters",T.value[H],R.value),T.value[H]!=null&&(setTimeout(()=>{y.value[H]=!0,setTimeout(()=>{y.value[H]=!1,T.value[H]=null},C.effectTime)},D),D+=C.delayTime,de=C.effectTime+D)}function Xe(){let S=C.delayTime;for(let D of a.value)if(Array.isArray(D))for(let H of D)setTimeout(()=>{H.visible=!0,setTimeout(()=>{H.visible=!1},C.effectTime)},S),S+=C.delayTime;for(let D of l.value)D.nowHP==0&&setTimeout(()=>{i.value=i.value.map(H=>H===D?null:H)},de)}async function Ne(S,D){console.log("monsterAction",S),ze(S,D);let H=$(D);p.value=[],p.value.push(D),b.value=xC,h.value[H]=!0,setTimeout(()=>{h.value[H]=!1,b.value=null,Me("damage")},C.monsterAttackTime),D.nowHP==0,await li(C.monsterAttackTime+C.effectTime)}function ze(S,D){let H=0,B=0,_e=0,Ae=0;se(S.HitRate,D.totalStatus.SPD)?(H=S.ATK,B=D.totalStatus.DEF,_e=oe(S.CritRate,B)?C.critDamageRate:C.normalDamageRate,Ae=Math.floor((H-B/1.5)*_e),console.log("monsterAttack",H),Ae=Ae<0?0:Ae,T.value[$(D)]=Ae,D.nowHP=Ae>D.nowHP?0:D.nowHP-Ae):T.value[$(D)]="MISS"}function He(){p.value=[],l.value=[];for(let S of e.characters){for(let D of S.conditions)switch(D.status){case"regeneration":Ee(S,D.value,"nowHP"),Me("heal"),console.log("regeneration",D);break}S.updateBuffs(),S.updateConditions()}}const Pe=Se(null),tt=S=>{Pe.value&&Pe.value.addLog(S,1)};return(S,D)=>(ie(),ge(ft,null,[w.value=="encount"?(ie(),Lt(sC,{key:0})):Ye("",!0),w.value=="result"?(ie(),Lt(qw,{key:1,getGold:F.value,getExp:I.value},null,8,["getGold","getExp"])):Ye("",!0),w.value!=="encount"&&w.value!=="result"?(ie(),ge("div",MC,[Le(Cw,{class:"turnOrder",turnOrder:X.value,numOrder:M.value},null,8,["turnOrder","numOrder"]),P("div",SC,[(ie(!0),ge(ft,null,Yt(i.value,(H,B)=>(ie(),ge("div",{key:B,class:Ht(["monsterCell",{pickMonster:Ie(H),currentMonster:H!=null&&H==o.value}])},[H?(ie(),ge("div",{key:0,onClick:_e=>z(B,H),onMouseover:_e=>G(B,H)},[(ie(!0),ge(ft,null,Yt(a.value[B],(_e,Ae)=>(ie(),ge("span",{key:Ae},[_e.visible?(ie(),ge("span",{key:0,class:"monsterEffect",style:Rn(_e.position)},Re(_e.effect),5)):Ye("",!0)]))),128)),u.value[B]?(ie(),ge("img",{key:0,src:c.value,class:"skillOneEffect",alt:"skill effect",onLoad:_e=>Be(B)},null,40,EC)):Ye("",!0),P("img",{src:H.GraphicUrl,class:"monsterImage",alt:"monsterImage"},null,8,bC)],40,yC)):Ye("",!0)],2))),128))]),f.value=="row"?(ie(),ge("img",{key:0,src:c.value,class:"skillRowEffect",style:Rn({top:d.value+"vh"}),alt:"skill effect",onLoad:D[0]||(D[0]=H=>Be())},null,44,TC)):Ye("",!0),f.value=="column"?(ie(),ge("img",{key:1,src:c.value,class:"skillColEffect",style:Rn({left:m.value+"vw"}),alt:"skill effect",onLoad:D[1]||(D[1]=H=>Be())},null,44,AC)):Ye("",!0),f.value=="all"?(ie(),ge("img",{key:2,src:c.value,class:"skillAllEffect",alt:"skill effect",onLoad:D[2]||(D[2]=H=>Be())},null,40,wC)):Ye("",!0),w.value=="startTurn"?(ie(),ge("div",CC,Re(re(me))+" Turn Start",1)):Ye("",!0),w.value=="endBattle"?(ie(),ge("div",RC,"Battle Ends")):Ye("",!0),Le(zh,{class:"CurrentUI",currentCharacter:g.value,targetCharacter:p.value,showCharacterEffect:y.value,toCharacterEffect:T.value,toCharacterEffectType:R.value,showCharacterAnime:h.value,toCharacterAnime:b.value,selectionMode:be.value,onSelectCharacter:x},null,8,["currentCharacter","targetCharacter","showCharacterEffect","toCharacterEffect","toCharacterEffectType","showCharacterAnime","toCharacterAnime","selectionMode"]),w.value=="selectTarget"&&_.value?(ie(),ge("div",PC,[P("div",LC,Re(_.value.name),1),P("div",DC,[Le(qa,{nowHP:_.value.nowHP,maxHP:_.value.HP},null,8,["nowHP","maxHP"])])])):Ye("",!0),Le(Bh,{ref_key:"actionLog",ref:Pe,class:"actionLog"},null,512),w.value=="characterTurn"||w.value=="selectTarget"?(ie(),ge("div",IC,[Le(lC,{id:"IconAttack",class:"IconAttack",onClick:D[3]||(D[3]=H=>ve(re(C).strAttack)),style:Rn(ee.AttackBtn)},null,8,["style"]),j.value=="Skill"?(ie(),Lt(dC,{key:0,id:"IconAttack",class:"IconSkill",onClick:D[4]||(D[4]=H=>ve(re(C).strSkill)),style:Rn(ee.SkillBtn)},null,8,["style"])):(ie(),Lt(_C,{key:1,id:"IconAttack",class:"IconSkill",onClick:D[5]||(D[5]=H=>ve(re(C).strSkill)),style:Rn(ee.SkillBtn)},null,8,["style"])),q.value?(ie(),Lt(ah,{key:2,class:"SkillUI",character:g.value,processBattle:q.value,onUseSkill:Fe},null,8,["character","processBattle"])):Ye("",!0),re(pe)==re(C).strSkill&&w.value=="selectTarget"?(ie(),ge("div",UC,[P("div",FC,Re(re(ye).name),1),Le(rh,{class:"skillInfo",skillInfo:re(ye).info},null,8,["skillInfo"])])):Ye("",!0),re(pe)==re(C).strAttack?(ie(),ge("div",kC,"Normal Attack")):Ye("",!0)])):Ye("",!0)])):Ye("",!0)],64))}}),OC=Ke(NC,[["__scopeId","data-v-f9772a61"]]),BC="/app2/icon/playerPosition.png",HC={class:"modal"},zC=qe({__name:"Map",setup(n){const e=Hh(),t=Se(),i=Se(),s=new Image;s.src=BC;const r=Se(!1),a=()=>{if(pt.length==0||!i.value||!t.value)return;const c=i.value.getContext("2d");if(c){i.value.width=pt[0].length*3,i.value.height=pt.length*3,t.value.width=40*3,t.value.height=40*3;for(let u=0;u<pt.length;u++)for(let f=0;f<pt[u].length;f++){switch(pt[u][f]){case 0:c.fillStyle=C.MiniWallColor;break;case 1:case 2:c.fillStyle=C.MiniRoomColor;break}c.fillRect(f*3,u*3,3,3)}o()}},o=()=>{var m;if(!t.value||!i.value||!e.playerPosition)return;const c=(m=t.value)==null?void 0:m.getContext("2d"),u=i.value.getContext("2d");if(!c||!u)return;const f=Math.floor(e.playerPosition.x/C.BlockSize-1),d=Math.floor(e.playerPosition.z/C.BlockSize-1);c.clearRect(0,0,t.value.width,t.value.height),c.drawImage(i.value,f*3-20*3,d*3-20*3,40*3,40*3,0,0,40*3,40*3),c.drawImage(s,20*3,20*3,C.BlockSize,C.BlockSize),u.fillStyle=C.MiniMoveColor,u.fillRect((f+1)*3,(d+1)*3,3,3),e.playerPosition.clone()};function l(){r.value=!r.value,o(),console.log("clickMap",r)}return Tt(()=>pt,()=>{Ws(a)},{immediate:!0,deep:!0}),Tt(()=>e.playerPosition,()=>{o()},{immediate:!0,deep:!0}),(c,u)=>(ie(),ge("div",null,[P("canvas",{class:"miniMap",ref_key:"MapUI",ref:t,onClick:u[0]||(u[0]=f=>l())},null,512),Pt(P("div",HC,[P("canvas",{class:"fullMap",ref_key:"fullMap",ref:i,onClick:u[1]||(u[1]=f=>l())},null,512)],512),[[It,r.value]])]))}}),GC=Ke(zC,[["__scopeId","data-v-a00f7274"]]),VC=[{mon_id:1,mon_type:1,name:"mon1",GraphicUrl:"img/monster/mon1.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:2,mon_type:1,name:"mon2",GraphicUrl:"img/monster/mon2.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:3,mon_type:1,name:"mon3",GraphicUrl:"img/monster/mon3.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:4,mon_type:1,name:"mon4",GraphicUrl:"img/monster/mon4.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:5,mon_type:1,name:"mon5",GraphicUrl:"img/monster/mon5.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:6,mon_type:1,name:"mon6",GraphicUrl:"img/monster/mon6.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:7,mon_type:1,name:"mon7",GraphicUrl:"img/monster/mon7.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:8,mon_type:1,name:"mon8",GraphicUrl:"img/monster/mon8.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:9,mon_type:1,name:"boss3",GraphicUrl:"img/monster/boss3.png",LV:10,HP:200,MP:8,ATK:50,MGC:50,DEF:50,MDF:50,DEX:50,SPD:50,GOLD:100,EXP:300},{mon_id:10,mon_type:1,name:"boss5",GraphicUrl:"img/monster/boss5.png",LV:20,HP:500,MP:100,ATK:100,MGC:100,DEF:100,MDF:100,DEX:100,SPD:50,GOLD:1e3,EXP:1e3}],WC="/app2/icon/fullscreen.svg",qC=["src"],$C=qe({__name:"IconFullscreen",setup(n){const{enterFullscreen:e}=uh(),t=Se(document.fullscreenElement!==null);return Ba(()=>{document.onfullscreenchange=()=>{t.value=document.fullscreenElement!==null}}),(i,s)=>Pt((ie(),ge("img",{class:"Icon",src:re(WC),alt:"Fullscreen",onClick:s[0]||(s[0]=r=>re(e)())},null,8,qC)),[[It,!t.value]])}}),XC=Ke($C,[["__scopeId","data-v-7a725939"]]),YC={class:"UI"},jC={key:0},KC={key:1},ZC={key:2},JC={key:0},QC={key:1},eR=qe({__name:"App",setup(n){const e=$n();console.log("activeSkills",Qd),console.log("passiveSkills",Zd);const t=is();t.setParty(),console.log("party",t.characters);const i=ih();i.setEquipBag(),console.log("equipmentType",i.equipmentType),console.log("equipmentItem",i.equipmentItem);const s=Se(VC.map(a=>new Sl(a)));yn("monsterList",s.value),console.log("monsterList",s.value);const r=Ci();return(a,o)=>(ie(),ge("div",YC,[re(e).status==re(C).statusOpening?(ie(),ge("div",jC,[Le(W_)])):re(e).status==re(C).statusTown?(ie(),ge("div",KC,[Le(LS)])):re(e).status==re(C).statusDungeon?(ie(),ge("div",ZC,[re(e).processDungeon==re(C).processSearch?(ie(),ge("div",JC,[Pt(Le(zh,{class:"CurrentUI"},null,512),[[It,re(r).current]]),Le(Yl)])):re(e).processDungeon==re(C).processBattle?(ie(),ge("div",QC,[Le(OC)])):Ye("",!0),Le(yw),Pt(Le(GC,{class:"MapUI"},null,512),[[It,re(r).map]])])):Ye("",!0),Le(XC,{class:"IconFullscreen"})]))}}),tR=Ke(eR,[["__scopeId","data-v-edf96551"]]),nR={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},iR={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function sR(n,e){let t;function i(){t=Cl(),t.run(()=>e.length?e(()=>{t==null||t.stop(),i()}):e())}Tt(n,s=>{s&&!t?i():s||(t==null||t.stop(),t=void 0)},{immediate:!0}),rd(()=>{t==null||t.stop()})}const Vn=typeof window<"u",rR=Vn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function aR(n,e,t){const i=e.length-1;if(i<0)return n===void 0?t:n;for(let s=0;s<i;s++){if(n==null)return t;n=n[e[s]]}return n==null||n[e[i]]===void 0?t:n[e[i]]}function Mf(n,e,t){return n==null||!e||typeof e!="string"?t:n[e]!==void 0?n[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),aR(n,e.split("."),t))}function Gh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:n},(t,i)=>e+i)}function Sf(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function qo(n,e){return e.every(t=>n.hasOwnProperty(t))}function oR(n,e){const t={},i=new Set(Object.keys(n));for(const s of e)i.has(s)&&(t[s]=n[s]);return t}function lR(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(t,n))}function yf(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return n+t.repeat(Math.max(0,e-n.length))}function Ef(n,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-n.length))+n}function cR(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let i=0;for(;i<n.length;)t.push(n.substr(i,e)),i+=e;return t}function wi(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const i={};for(const s in n)i[s]=n[s];for(const s in e){const r=n[s],a=e[s];if(Sf(r)&&Sf(a)){i[s]=wi(r,a,t);continue}if(Array.isArray(r)&&Array.isArray(a)&&t){i[s]=t(r,a);continue}i[s]=a}return i}function Is(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Is.cache.has(n))return Is.cache.get(n);const e=n.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Is.cache.set(n,e),e}Is.cache=new Map;const Es=2.4,bf=.2126729,Tf=.7151522,Af=.072175,uR=.55,fR=.58,dR=.57,hR=.62,la=.03,wf=1.45,pR=5e-4,mR=1.25,_R=1.25,Cf=.078,Rf=12.82051282051282,ca=.06,Pf=.001;function Lf(n,e){const t=(n.r/255)**Es,i=(n.g/255)**Es,s=(n.b/255)**Es,r=(e.r/255)**Es,a=(e.g/255)**Es,o=(e.b/255)**Es;let l=t*bf+i*Tf+s*Af,c=r*bf+a*Tf+o*Af;if(l<=la&&(l+=(la-l)**wf),c<=la&&(c+=(la-c)**wf),Math.abs(c-l)<pR)return 0;let u;if(c>l){const f=(c**uR-l**fR)*mR;u=f<Pf?0:f<Cf?f-f*Rf*ca:f-ca}else{const f=(c**hR-l**dR)*_R;u=f>-Pf?0:f>-Cf?f-f*Rf*ca:f+ca}return u*100}const Ra=.20689655172413793,gR=n=>n>Ra**3?Math.cbrt(n):n/(3*Ra**2)+4/29,vR=n=>n>Ra?n**3:3*Ra**2*(n-4/29);function Vh(n){const e=gR,t=e(n[1]);return[116*t-16,500*(e(n[0]/.95047)-t),200*(t-e(n[2]/1.08883))]}function Wh(n){const e=vR,t=(n[0]+16)/116;return[e(t+n[1]/500)*.95047,e(t),e(t-n[2]/200)*1.08883]}const xR=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],MR=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055,SR=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],yR=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function qh(n){const e=Array(3),t=MR,i=xR;for(let s=0;s<3;++s)e[s]=Math.round(lR(t(i[s][0]*n[0]+i[s][1]*n[1]+i[s][2]*n[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function rc(n){let{r:e,g:t,b:i}=n;const s=[0,0,0],r=yR,a=SR;e=r(e/255),t=r(t/255),i=r(i/255);for(let o=0;o<3;++o)s[o]=a[o][0]*e+a[o][1]*t+a[o][2]*i;return s}const Df=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,ER={rgb:(n,e,t,i)=>({r:n,g:e,b:t,a:i}),rgba:(n,e,t,i)=>({r:n,g:e,b:t,a:i}),hsl:(n,e,t,i)=>If({h:n,s:e,l:t,a:i}),hsla:(n,e,t,i)=>If({h:n,s:e,l:t,a:i}),hsv:(n,e,t,i)=>Mr({h:n,s:e,v:t,a:i}),hsva:(n,e,t,i)=>Mr({h:n,s:e,v:t,a:i})};function ii(n){if(typeof n=="number")return{r:(n&16711680)>>16,g:(n&65280)>>8,b:n&255};if(typeof n=="string"&&Df.test(n)){const{groups:e}=n.match(Df),{fn:t,values:i}=e,s=i.split(/,\s*/).map(r=>r.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(r)/100:parseFloat(r));return ER[t](...s)}else if(typeof n=="string"){let e=n.startsWith("#")?n.slice(1):n;return[3,4].includes(e.length)?e=e.split("").map(t=>t+t).join(""):[6,8].includes(e.length),TR(e)}else if(typeof n=="object"){if(qo(n,["r","g","b"]))return n;if(qo(n,["h","s","l"]))return Mr($h(n));if(qo(n,["h","s","v"]))return Mr(n)}throw new TypeError(`Invalid color: ${n==null?n:String(n)||n.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Mr(n){const{h:e,s:t,v:i,a:s}=n,r=o=>{const l=(o+e/60)%6;return i-i*t*Math.max(Math.min(l,4-l,1),0)},a=[r(5),r(3),r(1)].map(o=>Math.round(o*255));return{r:a[0],g:a[1],b:a[2],a:s}}function If(n){return Mr($h(n))}function $h(n){const{h:e,s:t,l:i,a:s}=n,r=i+t*Math.min(i,1-i),a=r===0?0:2-2*i/r;return{h:e,s:a,v:r,a:s}}function ua(n){const e=Math.round(n).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function bR(n){let{r:e,g:t,b:i,a:s}=n;return`#${[ua(e),ua(t),ua(i),s!==void 0?ua(Math.round(s*255)):""].join("")}`}function TR(n){n=AR(n);let[e,t,i,s]=cR(n,2).map(r=>parseInt(r,16));return s=s===void 0?s:s/255,{r:e,g:t,b:i,a:s}}function AR(n){return n.startsWith("#")&&(n=n.slice(1)),n=n.replace(/([^0-9a-f])/gi,"F"),(n.length===3||n.length===4)&&(n=n.split("").map(e=>e+e).join("")),n.length!==6&&(n=yf(yf(n,6),8,"F")),n}function wR(n,e){const t=Vh(rc(n));return t[0]=t[0]+e*10,qh(Wh(t))}function CR(n,e){const t=Vh(rc(n));return t[0]=t[0]-e*10,qh(Wh(t))}function RR(n){const e=ii(n);return rc(e)[1]}function PR(n){const e=Math.abs(Lf(ii(0),ii(n)));return Math.abs(Lf(ii(16777215),ii(n)))>Math.min(e,50)?"#fff":"#000"}function Xh(n,e){return t=>Object.keys(n).reduce((i,s)=>{const a=typeof n[s]=="object"&&n[s]!=null&&!Array.isArray(n[s])?n[s]:{type:n[s]};return t&&s in t?i[s]={...a,default:t[s]}:i[s]=a,e&&!i[s].source&&(i[s].source=e),i},{})}const Sr=Symbol.for("vuetify:defaults");function LR(n){return Se(n)}function Yh(){const n=gt(Sr);if(!n)throw new Error("[Vuetify] Could not find defaults instance");return n}function DR(n,e){var t,i;return typeof((t=n.props)==null?void 0:t[e])<"u"||typeof((i=n.props)==null?void 0:i[Is(e)])<"u"}function IR(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Yh();const i=Za("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=Dt(()=>{var l;return(l=t.value)==null?void 0:l[n._as??e]}),r=new Proxy(n,{get(l,c){var f,d,m,_;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=s.value)==null?void 0:f[c],u].filter(g=>g!=null):typeof c=="string"&&!DR(i.vnode,c)?((d=s.value)==null?void 0:d[c])??((_=(m=t.value)==null?void 0:m.global)==null?void 0:_[c])??u:u}}),a=Cs();Ba(()=>{if(s.value){const l=Object.entries(s.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});a.value=l.length?Object.fromEntries(l):void 0}else a.value=void 0});function o(){const l=FR(Sr,i);yn(Sr,Dt(()=>a.value?wi((l==null?void 0:l.value)??{},a.value):l==null?void 0:l.value))}return{props:r,provideSubDefaults:o}}function Cr(n){if(n._setup=n._setup??n.setup,!n.name)return n;if(n._setup){n.props=Xh(n.props??{},n.name)();const e=Object.keys(n.props).filter(t=>t!=="class"&&t!=="style");n.filterProps=function(i){return oR(i,e)},n.props._as=String,n.setup=function(i,s){const r=Yh();if(!r.value)return n._setup(i,s);const{props:a,provideSubDefaults:o}=IR(i,i._as??n.name,r),l=n._setup(a,s);return o(),l}}return n}function UR(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(n?Cr:qe)(e)}function Za(n,e){const t=Zm();if(!t)throw new Error(`[Vuetify] ${n} ${e||"must be called from inside a setup function"}`);return t}let jh=0,_a=new WeakMap;function Kh(){const n=Za("getUid");if(_a.has(n))return _a.get(n);{const e=jh++;return _a.set(n,e),e}}Kh.reset=()=>{jh=0,_a=new WeakMap};function FR(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Za("injectSelf");const{provides:t}=e;if(t&&n in t)return t[n]}function kR(n,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const r=Za("useProxiedModel"),a=Se(n[e]!==void 0?n[e]:t),o=Is(e),c=Dt(o!==e?()=>{var f,d,m,_;return n[e],!!(((f=r.vnode.props)!=null&&f.hasOwnProperty(e)||(d=r.vnode.props)!=null&&d.hasOwnProperty(o))&&((m=r.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)||(_=r.vnode.props)!=null&&_.hasOwnProperty(`onUpdate:${o}`)))}:()=>{var f,d;return n[e],!!((f=r.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=r.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});sR(()=>!c.value,()=>{Tt(()=>n[e],f=>{a.value=f})});const u=Dt({get(){const f=n[e];return i(c.value?f:a.value)},set(f){const d=s(f),m=at(c.value?n[e]:a.value);m===d||i(m)===f||(a.value=d,r==null||r.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?n[e]:a.value}),u}const Uf="$vuetify.",Ff=(n,e)=>n.replace(/\{(\d+)\}/g,(t,i)=>String(e[+i])),Zh=(n,e,t)=>function(i){for(var s=arguments.length,r=new Array(s>1?s-1:0),a=1;a<s;a++)r[a-1]=arguments[a];if(!i.startsWith(Uf))return Ff(i,r);const o=i.replace(Uf,""),l=n.value&&t.value[n.value],c=e.value&&t.value[e.value];let u=Mf(l,o,null);return u||(`${i}${n.value}`,u=Mf(c,o,null)),u||(u=i),typeof u!="string"&&(u=i),Ff(u,r)};function Jh(n,e){return(t,i)=>new Intl.NumberFormat([n.value,e.value],i).format(t)}function $o(n,e,t){const i=kR(n,e,n[e]??t.value);return i.value=n[e]??t.value,Tt(t,s=>{n[e]==null&&(i.value=t.value)}),i}function Qh(n){return e=>{const t=$o(e,"locale",n.current),i=$o(e,"fallback",n.fallback),s=$o(e,"messages",n.messages);return{name:"vuetify",current:t,fallback:i,messages:s,t:Zh(t,i,s),n:Jh(t,i),provide:Qh({current:t,fallback:i,messages:s})}}}function NR(n){const e=Cs((n==null?void 0:n.locale)??"en"),t=Cs((n==null?void 0:n.fallback)??"en"),i=Se({en:nR,...n==null?void 0:n.messages});return{name:"vuetify",current:e,fallback:t,messages:i,t:Zh(e,t,i),n:Jh(e,t),provide:Qh({current:e,fallback:t,messages:i})}}const kf=Symbol.for("vuetify:locale");function OR(n){return n.name!=null}function BR(n){const e=n!=null&&n.adapter&&OR(n==null?void 0:n.adapter)?n==null?void 0:n.adapter:NR(n),t=HR(e,n);return{...e,...t}}function HR(n,e){const t=Se((e==null?void 0:e.rtl)??iR),i=Dt(()=>t.value[n.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:Dt(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}const yl={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function zR(n,e){const t=[];let i=[];const s=ep(n),r=tp(n),a=(s.getDay()-yl[e.slice(-2).toUpperCase()]+7)%7,o=(r.getDay()-yl[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<a;l++){const c=new Date(s);c.setDate(c.getDate()-(a-l)),i.push(c)}for(let l=1;l<=r.getDate();l++){const c=new Date(n.getFullYear(),n.getMonth(),l);i.push(c),i.length===7&&(t.push(i),i=[])}for(let l=1;l<7-o;l++){const c=new Date(r);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&t.push(i),t}function GR(n){const e=new Date(n);for(;e.getDay()!==0;)e.setDate(e.getDate()-1);return e}function VR(n){const e=new Date(n);for(;e.getDay()!==6;)e.setDate(e.getDate()+1);return e}function ep(n){return new Date(n.getFullYear(),n.getMonth(),1)}function tp(n){return new Date(n.getFullYear(),n.getMonth()+1,0)}function WR(n){const e=n.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const qR=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function np(n){if(n==null)return new Date;if(n instanceof Date)return n;if(typeof n=="string"){let e;if(qR.test(n))return WR(n);if(e=Date.parse(n),!isNaN(e))return new Date(e)}return null}const Nf=new Date(2e3,0,2);function $R(n){const e=yl[n.slice(-2).toUpperCase()];return Gh(7).map(t=>{const i=new Date(Nf);i.setDate(Nf.getDate()+e+t);const s=new Intl.DateTimeFormat(n,{weekday:"short"}).format(i);return s.charAt(0).toUpperCase()+s.slice(1)})}function XR(n,e,t,i){const s=np(n)??new Date,r=i==null?void 0:i[e];if(typeof r=="function")return r(s,e,t);let a={};switch(e){case"fullDateWithWeekday":a={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"hours12h":a={hour:"numeric",hour12:!0};break;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":a={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"dayOfMonth":a={day:"numeric"};break;case"shortDate":a={year:"2-digit",month:"numeric",day:"numeric"};break;case"weekdayShort":a={weekday:"short"};break;case"year":a={year:"numeric"};break;default:a=r??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(t,a).format(s)}function YR(n,e){const t=n.toJsDate(e),i=t.getFullYear(),s=Ef(String(t.getMonth()+1),2,"0"),r=Ef(String(t.getDate()),2,"0");return`${i}-${s}-${r}`}function jR(n){const[e,t,i]=n.split("-").map(Number);return new Date(e,t-1,i)}function KR(n,e){const t=new Date(n);return t.setMinutes(t.getMinutes()+e),t}function ZR(n,e){const t=new Date(n);return t.setHours(t.getHours()+e),t}function JR(n,e){const t=new Date(n);return t.setDate(t.getDate()+e),t}function QR(n,e){const t=new Date(n);return t.setDate(t.getDate()+e*7),t}function eP(n,e){const t=new Date(n);return t.setMonth(t.getMonth()+e),t}function tP(n){return n.getFullYear()}function nP(n){return n.getMonth()}function iP(n){return new Date(n.getFullYear(),n.getMonth()+1,1)}function sP(n){return n.getHours()}function rP(n){return n.getMinutes()}function aP(n){return new Date(n.getFullYear(),0,1)}function oP(n){return new Date(n.getFullYear(),11,31)}function lP(n,e){return El(n,e[0])&&uP(n,e[1])}function cP(n){const e=new Date(n);return e instanceof Date&&!isNaN(e.getTime())}function El(n,e){return n.getTime()>e.getTime()}function uP(n,e){return n.getTime()<e.getTime()}function Of(n,e){return n.getTime()===e.getTime()}function fP(n,e){return n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function dP(n,e){return n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function hP(n,e,t){const i=new Date(n),s=new Date(e);return t==="month"?i.getMonth()-s.getMonth()+(i.getFullYear()-s.getFullYear())*12:Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24))}function pP(n,e){const t=new Date(n);return t.setHours(e),t}function mP(n,e){const t=new Date(n);return t.setMinutes(e),t}function _P(n,e){const t=new Date(n);return t.setMonth(e),t}function gP(n,e){const t=new Date(n);return t.setFullYear(e),t}function vP(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate())}function xP(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate(),23,59,59,999)}class MP{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return np(e)}toJsDate(e){return e}toISO(e){return YR(this,e)}parseISO(e){return jR(e)}addMinutes(e,t){return KR(e,t)}addHours(e,t){return ZR(e,t)}addDays(e,t){return JR(e,t)}addWeeks(e,t){return QR(e,t)}addMonths(e,t){return eP(e,t)}getWeekArray(e){return zR(e,this.locale)}startOfWeek(e){return GR(e)}endOfWeek(e){return VR(e)}startOfMonth(e){return ep(e)}endOfMonth(e){return tp(e)}format(e,t){return XR(e,t,this.locale,this.formats)}isEqual(e,t){return Of(e,t)}isValid(e){return cP(e)}isWithinRange(e,t){return lP(e,t)}isAfter(e,t){return El(e,t)}isBefore(e,t){return!El(e,t)&&!Of(e,t)}isSameDay(e,t){return fP(e,t)}isSameMonth(e,t){return dP(e,t)}setMinutes(e,t){return mP(e,t)}setHours(e,t){return pP(e,t)}setMonth(e,t){return _P(e,t)}setYear(e,t){return gP(e,t)}getDiff(e,t,i){return hP(e,t,i)}getWeekdays(){return $R(this.locale)}getYear(e){return tP(e)}getMonth(e){return nP(e)}getNextMonth(e){return iP(e)}getHours(e){return sP(e)}getMinutes(e){return rP(e)}startOfDay(e){return vP(e)}endOfDay(e){return xP(e)}startOfYear(e){return aP(e)}endOfYear(e){return oP(e)}}const SP=Symbol.for("vuetify:date-options"),Bf=Symbol.for("vuetify:date-adapter");function yP(n,e){const t=wi({adapter:MP,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},n);return{options:t,instance:EP(t,e)}}function EP(n,e){const t=Xt(typeof n.adapter=="function"?new n.adapter({locale:n.locale[e.current.value]??e.current.value,formats:n.formats}):n.adapter);return Tt(e.current,i=>{t.locale=n.locale[i]??i??t.locale}),t}const Hf=Symbol.for("vuetify:display"),zf={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},bP=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:zf;return wi(zf,n)};function Gf(n){return Vn&&!n?window.innerWidth:typeof n=="object"&&n.clientWidth||0}function Vf(n){return Vn&&!n?window.innerHeight:typeof n=="object"&&n.clientHeight||0}function Wf(n){const e=Vn&&!n?window.navigator.userAgent:"ssr";function t(_){return!!e.match(_)}const i=t(/android/i),s=t(/iphone|ipad|ipod/i),r=t(/cordova/i),a=t(/electron/i),o=t(/chrome/i),l=t(/edge/i),c=t(/firefox/i),u=t(/opera/i),f=t(/win/i),d=t(/mac/i),m=t(/linux/i);return{android:i,ios:s,cordova:r,electron:a,chrome:o,edge:l,firefox:c,opera:u,win:f,mac:d,linux:m,touch:rR,ssr:e==="ssr"}}function TP(n,e){const{thresholds:t,mobileBreakpoint:i}=bP(n),s=Cs(Vf(e)),r=Cs(Wf(e)),a=Xt({}),o=Cs(Gf(e));function l(){s.value=Vf(),o.value=Gf()}function c(){l(),r.value=Wf()}return Ba(()=>{const u=o.value<t.sm,f=o.value<t.md&&!u,d=o.value<t.lg&&!(f||u),m=o.value<t.xl&&!(d||f||u),_=o.value<t.xxl&&!(m||d||f||u),g=o.value>=t.xxl,p=u?"xs":f?"sm":d?"md":m?"lg":_?"xl":"xxl",h=typeof i=="number"?i:t[i],b=o.value<h;a.xs=u,a.sm=f,a.md=d,a.lg=m,a.xl=_,a.xxl=g,a.smAndUp=!u,a.mdAndUp=!(u||f),a.lgAndUp=!(u||f||d),a.xlAndUp=!(u||f||d||m),a.smAndDown=!(d||m||_||g),a.mdAndDown=!(m||_||g),a.lgAndDown=!(_||g),a.xlAndDown=!g,a.name=p,a.height=s.value,a.width=o.value,a.mobile=b,a.mobileBreakpoint=i,a.platform=r.value,a.thresholds=t}),Vn&&window.addEventListener("resize",l,{passive:!0}),{...yd(a),update:c,ssr:!!e}}const AP={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},wP={component:n=>Gt(ip,{...n,class:"mdi"})},CP=[String,Function,Object,Array],qf=Symbol.for("vuetify:icons"),Ja=Xh({icon:{type:CP},tag:{type:String,required:!0}},"icon");UR()({name:"VComponentIcon",props:Ja(),setup(n,e){let{slots:t}=e;return()=>{const i=n.icon;return Le(n.tag,null,{default:()=>{var s;return[n.icon?Le(i,null,null):(s=t.default)==null?void 0:s.call(t)]}})}}});const RP=Cr({name:"VSvgIcon",inheritAttrs:!1,props:Ja(),setup(n,e){let{attrs:t}=e;return()=>Le(n.tag,zd(t,{style:null}),{default:()=>[Le("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(n.icon)?n.icon.map(i=>Array.isArray(i)?Le("path",{d:i[0],"fill-opacity":i[1]},null):Le("path",{d:i},null)):Le("path",{d:n.icon},null)])]})}});Cr({name:"VLigatureIcon",props:Ja(),setup(n){return()=>Le(n.tag,null,{default:()=>[n.icon]})}});const ip=Cr({name:"VClassIcon",props:Ja(),setup(n){return()=>Le(n.tag,{class:n.icon},null)}}),PP={svg:{component:RP},class:{component:ip}};function LP(n){return wi({defaultSet:"mdi",sets:{...PP,mdi:wP},aliases:{...AP,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},n)}const $f=Symbol.for("vuetify:theme");function Xf(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function DP(){var i,s;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Xf();const e=Xf();if(!n)return{...e,isDisabled:!0};const t={};for(const[r,a]of Object.entries(n.themes??{})){const o=a.dark||r==="dark"?(i=e.themes)==null?void 0:i.dark:(s=e.themes)==null?void 0:s.light;t[r]=wi(o,a)}return wi(e,{...n,themes:t})}function IP(n){const e=DP(n),t=Se(e.defaultTheme),i=Se(e.themes),s=Dt(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const m=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const _ of e.variations.colors){const g=m.colors[_];if(g)for(const p of["lighten","darken"]){const h=p==="lighten"?wR:CR;for(const b of Gh(e.variations[p],1))m.colors[`${_}-${p}-${b}`]=bR(h(ii(g),b))}}for(const _ of Object.keys(m.colors)){if(/^on-[a-z]/.test(_)||m.colors[`on-${_}`])continue;const g=`on-${_}`,p=ii(m.colors[_]);m.colors[g]=PR(p)}}return u}),r=Dt(()=>s.value[t.value]),a=Dt(()=>{const u=[];r.value.dark&&Ni(u,":root",["color-scheme: dark"]),Ni(u,":root",Yf(r.value));for(const[_,g]of Object.entries(s.value))Ni(u,`.v-theme--${_}`,[`color-scheme: ${g.dark?"dark":"normal"}`,...Yf(g)]);const f=[],d=[],m=new Set(Object.values(s.value).flatMap(_=>Object.keys(_.colors)));for(const _ of m)/^on-[a-z]/.test(_)?Ni(d,`.${_}`,[`color: rgb(var(--v-theme-${_})) !important`]):(Ni(f,`.bg-${_}`,[`--v-theme-overlay-multiplier: var(--v-theme-${_}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${_})) !important`,`color: rgb(var(--v-theme-on-${_})) !important`]),Ni(d,`.text-${_}`,[`color: rgb(var(--v-theme-${_})) !important`]),Ni(d,`.border-${_}`,[`--v-border-color: var(--v-theme-${_})`]));return u.push(...f,...d),u.map((_,g)=>g===0?_:`    ${_}`).join("")});function o(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const m=f.push(o);Vn&&Tt(a,()=>{m.patch(o)})}else Vn?(f.addHeadObjs(Dt(o)),Ba(()=>f.updateDOM())):f.addHeadObjs(o());else{let _=function(){if(typeof document<"u"&&!m){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",e.cspNonce&&g.setAttribute("nonce",e.cspNonce),m=g,document.head.appendChild(m)}m&&(m.innerHTML=a.value)};var d=_;let m=Vn?document.getElementById("vuetify-theme-stylesheet"):null;Vn?Tt(a,_,{immediate:!0}):_()}}const c=Dt(()=>e.isDisabled?void 0:`v-theme--${t.value}`);return{install:l,isDisabled:e.isDisabled,name:t,themes:i,current:r,computedThemes:s,themeClasses:c,styles:a,global:{name:t,current:r}}}function Ni(n,e,t){n.push(`${e} {
`,...t.map(i=>`  ${i};
`),`}
`)}function Yf(n){const e=n.dark?2:1,t=n.dark?1:2,i=[];for(const[s,r]of Object.entries(n.colors)){const a=ii(r);i.push(`--v-theme-${s}: ${a.r},${a.g},${a.b}`),s.startsWith("on-")||i.push(`--v-theme-${s}-overlay-multiplier: ${RR(r)>.18?e:t}`)}for(const[s,r]of Object.entries(n.variables)){const a=typeof r=="string"&&r.startsWith("#")?ii(r):void 0,o=a?`${a.r}, ${a.g}, ${a.b}`:void 0;i.push(`--v-${s}: ${o??r}`)}return i}function sp(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...t}=n,i=wi(e,t),{aliases:s={},components:r={},directives:a={}}=i,o=LR(i.defaults),l=TP(i.display,i.ssr),c=IP(i.theme),u=LP(i.icons),f=BR(i.locale),d=yP(i.date,f);return{install:_=>{for(const g in a)_.directive(g,a[g]);for(const g in r)_.component(g,r[g]);for(const g in s)_.component(g,Cr({...s[g],name:g,aliasName:s[g].name}));if(c.install(_),_.provide(Sr,o),_.provide(Hf,l),_.provide($f,c),_.provide(qf,u),_.provide(kf,f),_.provide(SP,d.options),_.provide(Bf,d.instance),Vn&&i.ssr)if(_.$nuxt)_.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:g}=_;_.mount=function(){const p=g(...arguments);return Ws(()=>l.update()),_.mount=g,p}}Kh.reset(),_.mixin({computed:{$vuetify(){return Xt({defaults:bs.call(this,Sr),display:bs.call(this,Hf),theme:bs.call(this,$f),icons:bs.call(this,qf),locale:bs.call(this,kf),date:bs.call(this,Bf)})}}})},defaults:o,display:l,theme:c,icons:u,locale:f,date:d}}const UP="3.4.9";sp.version=UP;function bs(n){var i,s;const e=this.$,t=((i=e.parent)==null?void 0:i.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(t&&n in t)return t[n]}const FP=sp(),kP="modulepreload",NP=function(n){return"/app2/"+n},jf={},OP=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.all(t.map(l=>{if(l=NP(l),l in jf)return;jf[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!i)for(let m=r.length-1;m>=0;m--){const _=r[m];if(_.href===l&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":kP,c||(d.as="script",d.crossOrigin=""),d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((m,_)=>{d.addEventListener("load",m),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};async function BP(){(await OP(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}BP();const HP=R_();A_(tR).use(FP).use(HP).mount("#app");
//# sourceMappingURL=index-CDhbYvhy.js.map
