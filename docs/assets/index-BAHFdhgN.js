var Hp=Object.defineProperty;var zp=(n,e,t)=>e in n?Hp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Re=(n,e,t)=>(zp(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function zl(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const gt={},Us=[],Xn=()=>{},Gp=()=>!1,Vp=/^on[^a-z]/,Ha=n=>Vp.test(n),Gl=n=>n.startsWith("onUpdate:"),kt=Object.assign,Vl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wp=Object.prototype.hasOwnProperty,ct=(n,e)=>Wp.call(n,e),Xe=Array.isArray,Fs=n=>Ga(n)==="[object Map]",yd=n=>Ga(n)==="[object Set]",tt=n=>typeof n=="function",Ft=n=>typeof n=="string",za=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",Ed=n=>(Mt(n)||tt(n))&&tt(n.then)&&tt(n.catch),bd=Object.prototype.toString,Ga=n=>bd.call(n),$p=n=>Ga(n).slice(8,-1),Td=n=>Ga(n)==="[object Object]",Wl=n=>Ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ya=zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},qp=/-(\w)/g,zs=Va(n=>n.replace(qp,(e,t)=>t?t.toUpperCase():"")),Xp=/\B([A-Z])/g,Ys=Va(n=>n.replace(Xp,"-$1").toLowerCase()),Ad=Va(n=>n.charAt(0).toUpperCase()+n.slice(1)),_o=Va(n=>n?`on${Ad(n)}`:""),cs=(n,e)=>!Object.is(n,e),go=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},wa=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Yp=n=>{const e=parseFloat(n);return isNaN(e)?n:e},jp=n=>{const e=Ft(n)?Number(n):NaN;return isNaN(e)?n:e};let Ic;const ol=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tn(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ft(i)?Qp(i):Tn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(n)||Mt(n))return n}const Kp=/;(?![^(]*\))/g,Zp=/:([^]+)/,Jp=/\/\*[^]*?\*\//g;function Qp(n){const e={};return n.replace(Jp,"").split(Kp).forEach(t=>{if(t){const i=t.split(Zp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function It(n){let e="";if(Ft(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=It(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const em="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tm=zl(em);function wd(n){return!!n||n===""}const be=n=>Ft(n)?n:n==null?"":Xe(n)||Mt(n)&&(n.toString===bd||!tt(n.toString))?JSON.stringify(n,Cd,2):String(n),Cd=(n,e)=>e&&e.__v_isRef?Cd(n,e.value):Fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:yd(e)?{[`Set(${e.size})`]:[...e.values()]}:Mt(e)&&!Xe(e)&&!Td(e)?String(e):e;let gn;class Rd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gn,!e&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=gn;try{return gn=this,e()}finally{gn=t}}}on(){gn=this}off(){gn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $l(n){return new Rd(n)}function nm(n,e=gn){e&&e.active&&e.effects.push(n)}function Pd(){return gn}function Ld(n){gn&&gn.cleanups.push(n)}const ql=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Dd=n=>(n.w&Di)>0,Id=n=>(n.n&Di)>0,im=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Di},sm=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];Dd(s)&&!Id(s)?s.delete(n):e[t++]=s,s.w&=~Di,s.n&=~Di}e.length=t}},Ca=new WeakMap;let ur=0,Di=1;const ll=30;let Un;const is=Symbol(""),cl=Symbol("");class Xl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,nm(this,i)}run(){if(!this.active)return this.fn();let e=Un,t=Ai;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Un,Un=this,Ai=!0,Di=1<<++ur,ur<=ll?im(this):Uc(this),this.fn()}finally{ur<=ll&&sm(this),Di=1<<--ur,Un=this.parent,Ai=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Un===this?this.deferStop=!0:this.active&&(Uc(this),this.onStop&&this.onStop(),this.active=!1)}}function Uc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Ai=!0;const Ud=[];function js(){Ud.push(Ai),Ai=!1}function Ks(){const n=Ud.pop();Ai=n===void 0?!0:n}function dn(n,e,t){if(Ai&&Un){let i=Ca.get(n);i||Ca.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=ql()),Fd(s)}}function Fd(n,e){let t=!1;ur<=ll?Id(n)||(n.n|=Di,t=!Dd(n)):t=!n.has(Un),t&&(n.add(Un),Un.deps.push(n))}function oi(n,e,t,i,s,r){const a=Ca.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Xe(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!za(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Xe(n)?Wl(t)&&o.push(a.get("length")):(o.push(a.get(is)),Fs(n)&&o.push(a.get(cl)));break;case"delete":Xe(n)||(o.push(a.get(is)),Fs(n)&&o.push(a.get(cl)));break;case"set":Fs(n)&&o.push(a.get(is));break}if(o.length===1)o[0]&&ul(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ul(ql(l))}}function ul(n,e){const t=Xe(n)?n:[...n];for(const i of t)i.computed&&Fc(i);for(const i of t)i.computed||Fc(i)}function Fc(n,e){(n!==Un||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function rm(n,e){var t;return(t=Ca.get(n))==null?void 0:t.get(e)}const am=zl("__proto__,__v_isRef,__isVue"),kd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(za)),kc=om();function om(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=lt(this);for(let r=0,a=this.length;r<a;r++)dn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(lt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){js();const i=lt(this)[e].apply(this,t);return Ks(),i}}),n}function lm(n){const e=lt(this);return dn(e,"has",n),e.hasOwnProperty(n)}class Nd{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const s=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw"&&i===(s?r?Sm:zd:r?Hd:Bd).get(e))return e;const a=Xe(e);if(!s){if(a&&ct(kc,t))return Reflect.get(kc,t,i);if(t==="hasOwnProperty")return lm}const o=Reflect.get(e,t,i);return(za(t)?kd.has(t):am(t))||(s||dn(e,"get",t),r)?o:Ct(o)?a&&Wl(t)?o:o.value:Mt(o)?s?Gd(o):Kt(o):o}}class Od extends Nd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(Gs(r)&&Ct(r)&&!Ct(i))return!1;if(!this._shallow&&(!Ra(i)&&!Gs(i)&&(r=lt(r),i=lt(i)),!Xe(e)&&Ct(r)&&!Ct(i)))return r.value=i,!0;const a=Xe(e)&&Wl(t)?Number(t)<e.length:ct(e,t),o=Reflect.set(e,t,i,s);return e===lt(s)&&(a?cs(i,r)&&oi(e,"set",t,i):oi(e,"add",t,i)),o}deleteProperty(e,t){const i=ct(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&oi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!za(t)||!kd.has(t))&&dn(e,"has",t),i}ownKeys(e){return dn(e,"iterate",Xe(e)?"length":is),Reflect.ownKeys(e)}}class cm extends Nd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const um=new Od,fm=new cm,dm=new Od(!0),Yl=n=>n,Wa=n=>Reflect.getPrototypeOf(n);function zr(n,e,t=!1,i=!1){n=n.__v_raw;const s=lt(n),r=lt(e);t||(cs(e,r)&&dn(s,"get",e),dn(s,"get",r));const{has:a}=Wa(s),o=i?Yl:t?Zl:xr;if(a.call(s,e))return o(n.get(e));if(a.call(s,r))return o(n.get(r));n!==s&&n.get(e)}function Gr(n,e=!1){const t=this.__v_raw,i=lt(t),s=lt(n);return e||(cs(n,s)&&dn(i,"has",n),dn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Vr(n,e=!1){return n=n.__v_raw,!e&&dn(lt(n),"iterate",is),Reflect.get(n,"size",n)}function Nc(n){n=lt(n);const e=lt(this);return Wa(e).has.call(e,n)||(e.add(n),oi(e,"add",n,n)),this}function Oc(n,e){e=lt(e);const t=lt(this),{has:i,get:s}=Wa(t);let r=i.call(t,n);r||(n=lt(n),r=i.call(t,n));const a=s.call(t,n);return t.set(n,e),r?cs(e,a)&&oi(t,"set",n,e):oi(t,"add",n,e),this}function Bc(n){const e=lt(this),{has:t,get:i}=Wa(e);let s=t.call(e,n);s||(n=lt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&oi(e,"delete",n,void 0),r}function Hc(){const n=lt(this),e=n.size!==0,t=n.clear();return e&&oi(n,"clear",void 0,void 0),t}function Wr(n,e){return function(i,s){const r=this,a=r.__v_raw,o=lt(a),l=e?Yl:n?Zl:xr;return!n&&dn(o,"iterate",is),a.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function $r(n,e,t){return function(...i){const s=this.__v_raw,r=lt(s),a=Fs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Yl:e?Zl:xr;return!e&&dn(r,"iterate",l?cl:is),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function di(n){return function(...e){return n==="delete"?!1:this}}function hm(){const n={get(r){return zr(this,r)},get size(){return Vr(this)},has:Gr,add:Nc,set:Oc,delete:Bc,clear:Hc,forEach:Wr(!1,!1)},e={get(r){return zr(this,r,!1,!0)},get size(){return Vr(this)},has:Gr,add:Nc,set:Oc,delete:Bc,clear:Hc,forEach:Wr(!1,!0)},t={get(r){return zr(this,r,!0)},get size(){return Vr(this,!0)},has(r){return Gr.call(this,r,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:Wr(!0,!1)},i={get(r){return zr(this,r,!0,!0)},get size(){return Vr(this,!0)},has(r){return Gr.call(this,r,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:Wr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=$r(r,!1,!1),t[r]=$r(r,!0,!1),e[r]=$r(r,!1,!0),i[r]=$r(r,!0,!0)}),[n,t,e,i]}const[pm,mm,_m,gm]=hm();function jl(n,e){const t=e?n?gm:_m:n?mm:pm;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ct(t,s)&&s in i?t:i,s,r)}const vm={get:jl(!1,!1)},Mm={get:jl(!1,!0)},xm={get:jl(!0,!1)},Bd=new WeakMap,Hd=new WeakMap,zd=new WeakMap,Sm=new WeakMap;function ym(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Em(n){return n.__v_skip||!Object.isExtensible(n)?0:ym($p(n))}function Kt(n){return Gs(n)?n:Kl(n,!1,um,vm,Bd)}function bm(n){return Kl(n,!1,dm,Mm,Hd)}function Gd(n){return Kl(n,!0,fm,xm,zd)}function Kl(n,e,t,i,s){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=Em(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function wi(n){return Gs(n)?wi(n.__v_raw):!!(n&&n.__v_isReactive)}function Gs(n){return!!(n&&n.__v_isReadonly)}function Ra(n){return!!(n&&n.__v_isShallow)}function Vd(n){return wi(n)||Gs(n)}function lt(n){const e=n&&n.__v_raw;return e?lt(e):n}function $a(n){return wa(n,"__v_skip",!0),n}const xr=n=>Mt(n)?Kt(n):n,Zl=n=>Mt(n)?Gd(n):n;function Wd(n){Ai&&Un&&(n=lt(n),Fd(n.dep||(n.dep=ql())))}function $d(n,e){n=lt(n);const t=n.dep;t&&ul(t)}function Ct(n){return!!(n&&n.__v_isRef===!0)}function ge(n){return qd(n,!1)}function ks(n){return qd(n,!0)}function qd(n,e){return Ct(n)?n:new Tm(n,e)}class Tm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:lt(e),this._value=t?e:xr(e)}get value(){return Wd(this),this._value}set value(e){const t=this.__v_isShallow||Ra(e)||Gs(e);e=t?e:lt(e),cs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:xr(e),$d(this))}}function K(n){return Ct(n)?n.value:n}const Am={get:(n,e,t)=>K(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ct(s)&&!Ct(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Xd(n){return wi(n)?n:new Proxy(n,Am)}function Yd(n){const e=Xe(n)?new Array(n.length):{};for(const t in n)e[t]=Cm(n,t);return e}class wm{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rm(lt(this._object),this._key)}}function Cm(n,e,t){const i=n[e];return Ct(i)?i:new wm(n,e,t)}class Rm{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Xl(e,()=>{this._dirty||(this._dirty=!0,$d(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=lt(this);return Wd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Pm(n,e,t=!1){let i,s;const r=tt(n);return r?(i=n,s=Xn):(i=n.get,s=n.set),new Rm(i,s,r||!s,t)}function Ci(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){qa(r,e,t)}return s}function Cn(n,e,t,i){if(tt(n)){const r=Ci(n,e,t,i);return r&&Ed(r)&&r.catch(a=>{qa(a,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(Cn(n[r],e,t,i));return s}function qa(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ci(l,null,10,[n,a,o]);return}}Lm(n,t,s,i)}function Lm(n,e,t,i=!0){console.error(n)}let Sr=!1,fl=!1;const jt=[];let $n=0;const Ns=[];let ii=null,Ki=0;const jd=Promise.resolve();let Jl=null;function Zs(n){const e=Jl||jd;return n?e.then(this?n.bind(this):n):e}function Dm(n){let e=$n+1,t=jt.length;for(;e<t;){const i=e+t>>>1,s=jt[i],r=yr(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function Ql(n){(!jt.length||!jt.includes(n,Sr&&n.allowRecurse?$n+1:$n))&&(n.id==null?jt.push(n):jt.splice(Dm(n.id),0,n),Kd())}function Kd(){!Sr&&!fl&&(fl=!0,Jl=jd.then(Jd))}function Im(n){const e=jt.indexOf(n);e>$n&&jt.splice(e,1)}function Um(n){Xe(n)?Ns.push(...n):(!ii||!ii.includes(n,n.allowRecurse?Ki+1:Ki))&&Ns.push(n),Kd()}function zc(n,e=Sr?$n+1:0){for(;e<jt.length;e++){const t=jt[e];t&&t.pre&&(jt.splice(e,1),e--,t())}}function Zd(n){if(Ns.length){const e=[...new Set(Ns)];if(Ns.length=0,ii){ii.push(...e);return}for(ii=e,ii.sort((t,i)=>yr(t)-yr(i)),Ki=0;Ki<ii.length;Ki++)ii[Ki]();ii=null,Ki=0}}const yr=n=>n.id==null?1/0:n.id,Fm=(n,e)=>{const t=yr(n)-yr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Jd(n){fl=!1,Sr=!0,jt.sort(Fm);try{for($n=0;$n<jt.length;$n++){const e=jt[$n];e&&e.active!==!1&&Ci(e,null,14)}}finally{$n=0,jt.length=0,Zd(),Sr=!1,Jl=null,(jt.length||Ns.length)&&Jd()}}function km(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||gt;d&&(s=t.map(p=>Ft(p)?p.trim():p)),f&&(s=t.map(Yp))}let o,l=i[o=_o(e)]||i[o=_o(zs(e))];!l&&r&&(l=i[o=_o(Ys(e))]),l&&Cn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Cn(c,n,6,s)}}function Qd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!tt(n)){const l=c=>{const u=Qd(c,e,!0);u&&(o=!0,kt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(Mt(n)&&i.set(n,null),null):(Xe(r)?r.forEach(l=>a[l]=null):kt(a,r),Mt(n)&&i.set(n,a),a)}function Xa(n,e){return!n||!Ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,Ys(e))||ct(n,e))}let Mn=null,Ya=null;function Pa(n){const e=Mn;return Mn=n,Ya=n&&n.type.__scopeId||null,e}function Bn(n){Ya=n}function Hn(){Ya=null}function pr(n,e=Mn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Jc(-1);const r=Pa(e);let a;try{a=n(...s)}finally{Pa(r),i._d&&Jc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function vo(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:_,inheritAttrs:g}=n;let m,h;const w=Pa(n);try{if(t.shapeFlag&4){const E=s||i;m=Vn(u.call(E,E,f,r,p,d,_)),h=l}else{const E=e;m=Vn(E.length>1?E(r,{attrs:l,slots:o,emit:c}):E(r,null)),h=e.props?l:Nm(l)}}catch(E){_r.length=0,qa(E,n,1),m=Pe(On)}let y=m;if(h&&g!==!1){const E=Object.keys(h),{shapeFlag:C}=y;E.length&&C&7&&(a&&E.some(Gl)&&(h=Om(h,a)),y=jn(y,h))}return t.dirs&&(y=jn(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),m=y,Pa(w),m}const Nm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ha(t))&&((e||(e={}))[t]=n[t]);return e},Om=(n,e)=>{const t={};for(const i in n)(!Gl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Bm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Gc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Xa(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Gc(i,a,c):!0:!!a;return!1}function Gc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Xa(t,r))return!0}return!1}function Hm({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const zm=Symbol.for("v-ndc"),Gm=n=>n.__isSuspense;function Vm(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):Um(n)}function ja(n,e){return ec(n,null,e)}const qr={};function bt(n,e,t){return ec(n,e,t)}function ec(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:a}=gt){var o;const l=Pd()===((o=zt)==null?void 0:o.scope)?zt:null;let c,u=!1,f=!1;if(Ct(n)?(c=()=>n.value,u=Ra(n)):wi(n)?(c=()=>n,i=!0):Xe(n)?(f=!0,u=n.some(E=>wi(E)||Ra(E)),c=()=>n.map(E=>{if(Ct(E))return E.value;if(wi(E))return ts(E);if(tt(E))return Ci(E,l,2)})):tt(n)?e?c=()=>Ci(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Cn(n,l,3,[p])}:c=Xn,e&&i){const E=c;c=()=>ts(E())}let d,p=E=>{d=w.onStop=()=>{Ci(E,l,4)}},_;if(Tr)if(p=Xn,e?t&&Cn(e,l,3,[c(),f?[]:void 0,p]):c(),s==="sync"){const E=k_();_=E.__watcherHandles||(E.__watcherHandles=[])}else return Xn;let g=f?new Array(n.length).fill(qr):qr;const m=()=>{if(w.active)if(e){const E=w.run();(i||u||(f?E.some((C,k)=>cs(C,g[k])):cs(E,g)))&&(d&&d(),Cn(e,l,3,[E,g===qr?void 0:f&&g[0]===qr?[]:g,p]),g=E)}else w.run()};m.allowRecurse=!!e;let h;s==="sync"?h=m:s==="post"?h=()=>rn(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),h=()=>Ql(m));const w=new Xl(c,h);e?t?m():g=w.run():s==="post"?rn(w.run.bind(w),l&&l.suspense):w.run();const y=()=>{w.stop(),l&&l.scope&&Vl(l.scope.effects,w)};return _&&_.push(y),y}function Wm(n,e,t){const i=this.proxy,s=Ft(n)?n.includes(".")?eh(i,n):()=>i[n]:n.bind(i,i);let r;tt(e)?r=e:(r=e.handler,t=e);const a=zt;Vs(this);const o=ec(s,r.bind(i),t);return a?Vs(a):ss(),o}function eh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ts(n,e){if(!Mt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ct(n))ts(n.value,e);else if(Xe(n))for(let t=0;t<n.length;t++)ts(n[t],e);else if(yd(n)||Fs(n))n.forEach(t=>{ts(t,e)});else if(Td(n))for(const t in n)ts(n[t],e);return n}function At(n,e){const t=Mn;if(t===null)return n;const i=eo(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[a,o,l,c=gt]=e[r];a&&(tt(a)&&(a={mounted:a,updated:a}),a.deep&&ts(o),s.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Bi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(js(),Cn(l,t,8,[n.el,o,n,e]),Ks())}}const yi=Symbol("_leaveCb"),Xr=Symbol("_enterCb");function $m(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fi(()=>{n.isMounted=!0}),rh(()=>{n.isUnmounting=!0}),n}const Sn=[Function,Array],th={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},qm={name:"BaseTransition",props:th,setup(n,{slots:e}){const t=gh(),i=$m();let s;return()=>{const r=e.default&&ih(e.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){for(const g of r)if(g.type!==On){a=g;break}}const o=lt(n),{mode:l}=o;if(i.isLeaving)return Mo(a);const c=Vc(a);if(!c)return Mo(a);const u=dl(c,o,i,t);hl(c,u);const f=t.subTree,d=f&&Vc(f);let p=!1;const{getTransitionKey:_}=c.type;if(_){const g=_();s===void 0?s=g:g!==s&&(s=g,p=!0)}if(d&&d.type!==On&&(!Zi(c,d)||p)){const g=dl(d,o,i,t);if(hl(d,g),l==="out-in")return i.isLeaving=!0,g.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},Mo(a);l==="in-out"&&c.type!==On&&(g.delayLeave=(m,h,w)=>{const y=nh(i,d);y[String(d.key)]=d,m[yi]=()=>{h(),m[yi]=void 0,delete u.delayedLeave},u.delayedLeave=w})}return a}}},Xm=qm;function nh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function dl(n,e,t,i){const{appear:s,mode:r,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:g,onAppear:m,onAfterAppear:h,onAppearCancelled:w}=e,y=String(n.key),E=nh(t,n),C=(B,S)=>{B&&Cn(B,i,9,S)},k=(B,S)=>{const T=S[1];C(B,S),Xe(B)?B.every(J=>J.length<=1)&&T():B.length<=1&&T()},D={mode:r,persisted:a,beforeEnter(B){let S=o;if(!t.isMounted)if(s)S=g||o;else return;B[yi]&&B[yi](!0);const T=E[y];T&&Zi(n,T)&&T.el[yi]&&T.el[yi](),C(S,[B])},enter(B){let S=l,T=c,J=u;if(!t.isMounted)if(s)S=m||l,T=h||c,J=w||u;else return;let W=!1;const re=B[Xr]=U=>{W||(W=!0,U?C(J,[B]):C(T,[B]),D.delayedLeave&&D.delayedLeave(),B[Xr]=void 0)};S?k(S,[B,re]):re()},leave(B,S){const T=String(n.key);if(B[Xr]&&B[Xr](!0),t.isUnmounting)return S();C(f,[B]);let J=!1;const W=B[yi]=re=>{J||(J=!0,S(),re?C(_,[B]):C(p,[B]),B[yi]=void 0,E[T]===n&&delete E[T])};E[T]=n,d?k(d,[B,W]):W()},clone(B){return dl(B,e,t,i)}};return D}function Mo(n){if(Ka(n))return n=jn(n),n.children=null,n}function Vc(n){return Ka(n)?n.children?n.children[0]:void 0:n}function hl(n,e){n.shapeFlag&6&&n.component?hl(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ih(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===ut?(a.patchFlag&128&&s++,i=i.concat(ih(a.children,e,o))):(e||a.type!==On)&&i.push(o!=null?jn(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Ye(n,e){return tt(n)?kt({name:n.name},e,{setup:n}):n}const Ea=n=>!!n.type.__asyncLoader,Ka=n=>n.type.__isKeepAlive;function Ym(n,e){sh(n,"a",e)}function jm(n,e){sh(n,"da",e)}function sh(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Za(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ka(s.parent.vnode)&&Km(i,e,t,s),s=s.parent}}function Km(n,e,t,i){const s=Za(e,n,i,!0);tc(()=>{Vl(i[e],s)},t)}function Za(n,e,t=zt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;js(),Vs(t);const o=Cn(e,t,n,a);return ss(),Ks(),o});return i?s.unshift(r):s.push(r),r}}const ci=n=>(e,t=zt)=>(!Tr||n==="sp")&&Za(n,(...i)=>e(...i),t),Zm=ci("bm"),Fi=ci("m"),Jm=ci("bu"),Qm=ci("u"),rh=ci("bum"),tc=ci("um"),e_=ci("sp"),t_=ci("rtg"),n_=ci("rtc");function i_(n,e=zt){Za("ec",n,e)}function Vt(n,e,t,i){let s;const r=t&&t[i];if(Xe(n)||Ft(n)){s=new Array(n.length);for(let a=0,o=n.length;a<o;a++)s[a]=e(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(Mt(n))if(n[Symbol.iterator])s=Array.from(n,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(n);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];s[o]=e(n[c],c,o,r&&r[o])}}else s=[];return t&&(t[i]=s),s}const pl=n=>n?vh(n)?eo(n)||n.proxy:pl(n.parent):null,mr=kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>pl(n.parent),$root:n=>pl(n.root),$emit:n=>n.emit,$options:n=>nc(n),$forceUpdate:n=>n.f||(n.f=()=>Ql(n.update)),$nextTick:n=>n.n||(n.n=Zs.bind(n.proxy)),$watch:n=>Wm.bind(n)}),xo=(n,e)=>n!==gt&&!n.__isScriptSetup&&ct(n,e),s_={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(xo(i,e))return a[e]=1,i[e];if(s!==gt&&ct(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&ct(c,e))return a[e]=3,r[e];if(t!==gt&&ct(t,e))return a[e]=4,t[e];ml&&(a[e]=0)}}const u=mr[e];let f,d;if(u)return e==="$attrs"&&dn(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==gt&&ct(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,ct(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return xo(s,e)?(s[e]=t,!0):i!==gt&&ct(i,e)?(i[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==gt&&ct(n,a)||xo(e,a)||(o=r[0])&&ct(o,a)||ct(i,a)||ct(mr,a)||ct(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Wc(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ml=!0;function r_(n){const e=nc(n),t=n.proxy,i=n.ctx;ml=!1,e.beforeCreate&&$c(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:w,destroyed:y,unmounted:E,render:C,renderTracked:k,renderTriggered:D,errorCaptured:B,serverPrefetch:S,expose:T,inheritAttrs:J,components:W,directives:re,filters:U}=e;if(c&&a_(c,i,null),a)for(const q in a){const se=a[q];tt(se)&&(i[q]=se.bind(t))}if(s){const q=s.call(t,t);Mt(q)&&(n.data=Kt(q))}if(ml=!0,r)for(const q in r){const se=r[q],le=tt(se)?se.bind(t,t):tt(se.get)?se.get.bind(t,t):Xn,fe=!tt(se)&&tt(se.set)?se.set.bind(t):Xn,z=Dt({get:le,set:fe});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>z.value,set:Z=>z.value=Z})}if(o)for(const q in o)ah(o[q],i,t,q);if(l){const q=tt(l)?l.call(t):l;Reflect.ownKeys(q).forEach(se=>{bn(se,q[se])})}u&&$c(u,n,"c");function H(q,se){Xe(se)?se.forEach(le=>q(le.bind(t))):se&&q(se.bind(t))}if(H(Zm,f),H(Fi,d),H(Jm,p),H(Qm,_),H(Ym,g),H(jm,m),H(i_,B),H(n_,k),H(t_,D),H(rh,w),H(tc,E),H(e_,S),Xe(T))if(T.length){const q=n.exposed||(n.exposed={});T.forEach(se=>{Object.defineProperty(q,se,{get:()=>t[se],set:le=>t[se]=le})})}else n.exposed||(n.exposed={});C&&n.render===Xn&&(n.render=C),J!=null&&(n.inheritAttrs=J),W&&(n.components=W),re&&(n.directives=re)}function a_(n,e,t=Xn){Xe(n)&&(n=_l(n));for(const i in n){const s=n[i];let r;Mt(s)?"default"in s?r=vt(s.from||i,s.default,!0):r=vt(s.from||i):r=vt(s),Ct(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function $c(n,e,t){Cn(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ah(n,e,t,i){const s=i.includes(".")?eh(t,i):()=>t[i];if(Ft(n)){const r=e[n];tt(r)&&bt(s,r)}else if(tt(n))bt(s,n.bind(t));else if(Mt(n))if(Xe(n))n.forEach(r=>ah(r,e,t,i));else{const r=tt(n.handler)?n.handler.bind(t):e[n.handler];tt(r)&&bt(s,r,n)}}function nc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>La(l,c,a,!0)),La(l,e,a)),Mt(e)&&r.set(e,l),l}function La(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&La(n,r,t,!0),s&&s.forEach(a=>La(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=o_[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const o_={data:qc,props:Xc,emits:Xc,methods:fr,computed:fr,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:fr,directives:fr,watch:c_,provide:qc,inject:l_};function qc(n,e){return e?n?function(){return kt(tt(n)?n.call(this,this):n,tt(e)?e.call(this,this):e)}:e:n}function l_(n,e){return fr(_l(n),_l(e))}function _l(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Jt(n,e){return n?[...new Set([].concat(n,e))]:e}function fr(n,e){return n?kt(Object.create(null),n,e):e}function Xc(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:kt(Object.create(null),Wc(n),Wc(e??{})):e}function c_(n,e){if(!n)return e;if(!e)return n;const t=kt(Object.create(null),n);for(const i in e)t[i]=Jt(n[i],e[i]);return t}function oh(){return{app:null,config:{isNativeTag:Gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let u_=0;function f_(n,e){return function(i,s=null){tt(i)||(i=kt({},i)),s!=null&&!Mt(s)&&(s=null);const r=oh(),a=new WeakSet;let o=!1;const l=r.app={_uid:u_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:N_,get config(){return r.config},set config(c){},use(c,...u){return a.has(c)||(c&&tt(c.install)?(a.add(c),c.install(l,...u)):tt(c)&&(a.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!o){const d=Pe(i,s);return d.appContext=r,u&&e?e(d,c):n(d,c,f),o=!0,l._container=c,c.__vue_app__=l,eo(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Er=l;try{return c()}finally{Er=null}}};return l}}let Er=null;function bn(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function vt(n,e,t=!1){const i=zt||Mn;if(i||Er){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Er._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&tt(e)?e.call(i&&i.proxy):e}}function d_(){return!!(zt||Mn||Er)}function h_(n,e,t,i=!1){const s={},r={};wa(r,Qa,1),n.propsDefaults=Object.create(null),lh(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:bm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function p_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=lt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Xa(n.emitsOptions,d))continue;const p=e[d];if(l)if(ct(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=zs(d);s[_]=gl(l,o,_,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{lh(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!ct(e,f)&&((u=Ys(f))===f||!ct(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=gl(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!ct(e,f))&&(delete r[f],c=!0)}c&&oi(n,"set","$attrs")}function lh(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ya(l))continue;const c=e[l];let u;s&&ct(s,u=zs(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Xa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=lt(t),c=o||gt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=gl(s,l,f,c[f],n,!ct(c,f))}}return a}function gl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ct(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&tt(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(Vs(s),i=c[t]=l.call(null,e),ss())}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Ys(t))&&(i=!0))}return i}function ch(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!tt(n)){const u=f=>{l=!0;const[d,p]=ch(f,e,!0);kt(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Mt(n)&&i.set(n,Us),Us;if(Xe(r))for(let u=0;u<r.length;u++){const f=zs(r[u]);Yc(f)&&(a[f]=gt)}else if(r)for(const u in r){const f=zs(u);if(Yc(f)){const d=r[u],p=a[f]=Xe(d)||tt(d)?{type:d}:kt({},d);if(p){const _=Zc(Boolean,p.type),g=Zc(String,p.type);p[0]=_>-1,p[1]=g<0||_<g,(_>-1||ct(p,"default"))&&o.push(f)}}}const c=[a,o];return Mt(n)&&i.set(n,c),c}function Yc(n){return n[0]!=="$"}function jc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Kc(n,e){return jc(n)===jc(e)}function Zc(n,e){return Xe(e)?e.findIndex(t=>Kc(t,n)):tt(e)&&Kc(e,n)?0:-1}const uh=n=>n[0]==="_"||n==="$stable",ic=n=>Xe(n)?n.map(Vn):[Vn(n)],m_=(n,e,t)=>{if(e._n)return e;const i=pr((...s)=>ic(e(...s)),t);return i._c=!1,i},fh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(uh(s))continue;const r=n[s];if(tt(r))e[s]=m_(s,r,i);else if(r!=null){const a=ic(r);e[s]=()=>a}}},dh=(n,e)=>{const t=ic(e);n.slots.default=()=>t},__=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=lt(e),wa(e,"_",t)):fh(e,n.slots={})}else n.slots={},e&&dh(n,e);wa(n.slots,Qa,1)},g_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=gt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(kt(s,e),!t&&o===1&&delete s._):(r=!e.$stable,fh(e,s)),a=e}else e&&(dh(n,e),a={default:1});if(r)for(const o in s)!uh(o)&&a[o]==null&&delete s[o]};function vl(n,e,t,i,s=!1){if(Xe(n)){n.forEach((d,p)=>vl(d,e&&(Xe(e)?e[p]:e),t,i,s));return}if(Ea(i)&&!s)return;const r=i.shapeFlag&4?eo(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===gt?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(Ft(c)?(u[c]=null,ct(f,c)&&(f[c]=null)):Ct(c)&&(c.value=null)),tt(l))Ci(l,o,12,[a,u]);else{const d=Ft(l),p=Ct(l);if(d||p){const _=()=>{if(n.f){const g=d?ct(f,l)?f[l]:u[l]:l.value;s?Xe(g)&&Vl(g,r):Xe(g)?g.includes(r)||g.push(r):d?(u[l]=[r],ct(f,l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,ct(f,l)&&(f[l]=a)):p&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,rn(_,t)):_()}}}const rn=Vm;function v_(n){return M_(n)}function M_(n,e){const t=ol();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Xn,insertStaticContent:_}=n,g=(x,F,L,G=null,V=null,te=null,he=!1,ae=null,me=!!F.dynamicChildren)=>{if(x===F)return;x&&!Zi(x,F)&&(G=Be(x),Z(x,V,te,!0),x=null),F.patchFlag===-2&&(me=!1,F.dynamicChildren=null);const{type:ue,ref:Te,shapeFlag:b}=F;switch(ue){case Ja:m(x,F,L,G);break;case On:h(x,F,L,G);break;case So:x==null&&w(F,L,G,he);break;case ut:W(x,F,L,G,V,te,he,ae,me);break;default:b&1?C(x,F,L,G,V,te,he,ae,me):b&6?re(x,F,L,G,V,te,he,ae,me):(b&64||b&128)&&ue.process(x,F,L,G,V,te,he,ae,me,ke)}Te!=null&&V&&vl(Te,x&&x.ref,te,F||x,!F)},m=(x,F,L,G)=>{if(x==null)i(F.el=o(F.children),L,G);else{const V=F.el=x.el;F.children!==x.children&&c(V,F.children)}},h=(x,F,L,G)=>{x==null?i(F.el=l(F.children||""),L,G):F.el=x.el},w=(x,F,L,G)=>{[x.el,x.anchor]=_(x.children,F,L,G,x.el,x.anchor)},y=({el:x,anchor:F},L,G)=>{let V;for(;x&&x!==F;)V=d(x),i(x,L,G),x=V;i(F,L,G)},E=({el:x,anchor:F})=>{let L;for(;x&&x!==F;)L=d(x),s(x),x=L;s(F)},C=(x,F,L,G,V,te,he,ae,me)=>{he=he||F.type==="svg",x==null?k(F,L,G,V,te,he,ae,me):S(x,F,V,te,he,ae,me)},k=(x,F,L,G,V,te,he,ae)=>{let me,ue;const{type:Te,props:b,shapeFlag:M,transition:N,dirs:oe}=x;if(me=x.el=a(x.type,te,b&&b.is,b),M&8?u(me,x.children):M&16&&B(x.children,me,null,G,V,te&&Te!=="foreignObject",he,ae),oe&&Bi(x,null,G,"created"),D(me,x,x.scopeId,he,G),b){for(const pe in b)pe!=="value"&&!ya(pe)&&r(me,pe,null,b[pe],te,x.children,G,V,Fe);"value"in b&&r(me,"value",null,b.value),(ue=b.onVnodeBeforeMount)&&Gn(ue,G,x)}oe&&Bi(x,null,G,"beforeMount");const ce=x_(V,N);ce&&N.beforeEnter(me),i(me,F,L),((ue=b&&b.onVnodeMounted)||ce||oe)&&rn(()=>{ue&&Gn(ue,G,x),ce&&N.enter(me),oe&&Bi(x,null,G,"mounted")},V)},D=(x,F,L,G,V)=>{if(L&&p(x,L),G)for(let te=0;te<G.length;te++)p(x,G[te]);if(V){let te=V.subTree;if(F===te){const he=V.vnode;D(x,he,he.scopeId,he.slotScopeIds,V.parent)}}},B=(x,F,L,G,V,te,he,ae,me=0)=>{for(let ue=me;ue<x.length;ue++){const Te=x[ue]=ae?Ei(x[ue]):Vn(x[ue]);g(null,Te,F,L,G,V,te,he,ae)}},S=(x,F,L,G,V,te,he)=>{const ae=F.el=x.el;let{patchFlag:me,dynamicChildren:ue,dirs:Te}=F;me|=x.patchFlag&16;const b=x.props||gt,M=F.props||gt;let N;L&&Hi(L,!1),(N=M.onVnodeBeforeUpdate)&&Gn(N,L,F,x),Te&&Bi(F,x,L,"beforeUpdate"),L&&Hi(L,!0);const oe=V&&F.type!=="foreignObject";if(ue?T(x.dynamicChildren,ue,ae,L,G,oe,te):he||se(x,F,ae,null,L,G,oe,te,!1),me>0){if(me&16)J(ae,F,b,M,L,G,V);else if(me&2&&b.class!==M.class&&r(ae,"class",null,M.class,V),me&4&&r(ae,"style",b.style,M.style,V),me&8){const ce=F.dynamicProps;for(let pe=0;pe<ce.length;pe++){const ye=ce[pe],ve=b[ye],Ae=M[ye];(Ae!==ve||ye==="value")&&r(ae,ye,ve,Ae,V,x.children,L,G,Fe)}}me&1&&x.children!==F.children&&u(ae,F.children)}else!he&&ue==null&&J(ae,F,b,M,L,G,V);((N=M.onVnodeUpdated)||Te)&&rn(()=>{N&&Gn(N,L,F,x),Te&&Bi(F,x,L,"updated")},G)},T=(x,F,L,G,V,te,he)=>{for(let ae=0;ae<F.length;ae++){const me=x[ae],ue=F[ae],Te=me.el&&(me.type===ut||!Zi(me,ue)||me.shapeFlag&70)?f(me.el):L;g(me,ue,Te,null,G,V,te,he,!0)}},J=(x,F,L,G,V,te,he)=>{if(L!==G){if(L!==gt)for(const ae in L)!ya(ae)&&!(ae in G)&&r(x,ae,L[ae],null,he,F.children,V,te,Fe);for(const ae in G){if(ya(ae))continue;const me=G[ae],ue=L[ae];me!==ue&&ae!=="value"&&r(x,ae,ue,me,he,F.children,V,te,Fe)}"value"in G&&r(x,"value",L.value,G.value)}},W=(x,F,L,G,V,te,he,ae,me)=>{const ue=F.el=x?x.el:o(""),Te=F.anchor=x?x.anchor:o("");let{patchFlag:b,dynamicChildren:M,slotScopeIds:N}=F;N&&(ae=ae?ae.concat(N):N),x==null?(i(ue,L,G),i(Te,L,G),B(F.children,L,Te,V,te,he,ae,me)):b>0&&b&64&&M&&x.dynamicChildren?(T(x.dynamicChildren,M,L,V,te,he,ae),(F.key!=null||V&&F===V.subTree)&&hh(x,F,!0)):se(x,F,L,Te,V,te,he,ae,me)},re=(x,F,L,G,V,te,he,ae,me)=>{F.slotScopeIds=ae,x==null?F.shapeFlag&512?V.ctx.activate(F,L,G,he,me):U(F,L,G,V,te,he,me):$(x,F,me)},U=(x,F,L,G,V,te,he)=>{const ae=x.component=R_(x,G,V);if(Ka(x)&&(ae.ctx.renderer=ke),P_(ae),ae.asyncDep){if(V&&V.registerDep(ae,H),!x.el){const me=ae.subTree=Pe(On);h(null,me,F,L)}return}H(ae,x,F,L,V,te,he)},$=(x,F,L)=>{const G=F.component=x.component;if(Bm(x,F,L))if(G.asyncDep&&!G.asyncResolved){q(G,F,L);return}else G.next=F,Im(G.update),G.update();else F.el=x.el,G.vnode=F},H=(x,F,L,G,V,te,he)=>{const ae=()=>{if(x.isMounted){let{next:Te,bu:b,u:M,parent:N,vnode:oe}=x,ce=Te,pe;Hi(x,!1),Te?(Te.el=oe.el,q(x,Te,he)):Te=oe,b&&go(b),(pe=Te.props&&Te.props.onVnodeBeforeUpdate)&&Gn(pe,N,Te,oe),Hi(x,!0);const ye=vo(x),ve=x.subTree;x.subTree=ye,g(ve,ye,f(ve.el),Be(ve),x,V,te),Te.el=ye.el,ce===null&&Hm(x,ye.el),M&&rn(M,V),(pe=Te.props&&Te.props.onVnodeUpdated)&&rn(()=>Gn(pe,N,Te,oe),V)}else{let Te;const{el:b,props:M}=F,{bm:N,m:oe,parent:ce}=x,pe=Ea(F);if(Hi(x,!1),N&&go(N),!pe&&(Te=M&&M.onVnodeBeforeMount)&&Gn(Te,ce,F),Hi(x,!0),b&&Ce){const ye=()=>{x.subTree=vo(x),Ce(b,x.subTree,x,V,null)};pe?F.type.__asyncLoader().then(()=>!x.isUnmounted&&ye()):ye()}else{const ye=x.subTree=vo(x);g(null,ye,L,G,x,V,te),F.el=ye.el}if(oe&&rn(oe,V),!pe&&(Te=M&&M.onVnodeMounted)){const ye=F;rn(()=>Gn(Te,ce,ye),V)}(F.shapeFlag&256||ce&&Ea(ce.vnode)&&ce.vnode.shapeFlag&256)&&x.a&&rn(x.a,V),x.isMounted=!0,F=L=G=null}},me=x.effect=new Xl(ae,()=>Ql(ue),x.scope),ue=x.update=()=>me.run();ue.id=x.uid,Hi(x,!0),ue()},q=(x,F,L)=>{F.component=x;const G=x.vnode.props;x.vnode=F,x.next=null,p_(x,F.props,G,L),g_(x,F.children,L),js(),zc(),Ks()},se=(x,F,L,G,V,te,he,ae,me=!1)=>{const ue=x&&x.children,Te=x?x.shapeFlag:0,b=F.children,{patchFlag:M,shapeFlag:N}=F;if(M>0){if(M&128){fe(ue,b,L,G,V,te,he,ae,me);return}else if(M&256){le(ue,b,L,G,V,te,he,ae,me);return}}N&8?(Te&16&&Fe(ue,V,te),b!==ue&&u(L,b)):Te&16?N&16?fe(ue,b,L,G,V,te,he,ae,me):Fe(ue,V,te,!0):(Te&8&&u(L,""),N&16&&B(b,L,G,V,te,he,ae,me))},le=(x,F,L,G,V,te,he,ae,me)=>{x=x||Us,F=F||Us;const ue=x.length,Te=F.length,b=Math.min(ue,Te);let M;for(M=0;M<b;M++){const N=F[M]=me?Ei(F[M]):Vn(F[M]);g(x[M],N,L,null,V,te,he,ae,me)}ue>Te?Fe(x,V,te,!0,!1,b):B(F,L,G,V,te,he,ae,me,b)},fe=(x,F,L,G,V,te,he,ae,me)=>{let ue=0;const Te=F.length;let b=x.length-1,M=Te-1;for(;ue<=b&&ue<=M;){const N=x[ue],oe=F[ue]=me?Ei(F[ue]):Vn(F[ue]);if(Zi(N,oe))g(N,oe,L,null,V,te,he,ae,me);else break;ue++}for(;ue<=b&&ue<=M;){const N=x[b],oe=F[M]=me?Ei(F[M]):Vn(F[M]);if(Zi(N,oe))g(N,oe,L,null,V,te,he,ae,me);else break;b--,M--}if(ue>b){if(ue<=M){const N=M+1,oe=N<Te?F[N].el:G;for(;ue<=M;)g(null,F[ue]=me?Ei(F[ue]):Vn(F[ue]),L,oe,V,te,he,ae,me),ue++}}else if(ue>M)for(;ue<=b;)Z(x[ue],V,te,!0),ue++;else{const N=ue,oe=ue,ce=new Map;for(ue=oe;ue<=M;ue++){const Je=F[ue]=me?Ei(F[ue]):Vn(F[ue]);Je.key!=null&&ce.set(Je.key,ue)}let pe,ye=0;const ve=M-oe+1;let Ae=!1,Ve=0;const it=new Array(ve);for(ue=0;ue<ve;ue++)it[ue]=0;for(ue=N;ue<=b;ue++){const Je=x[ue];if(ye>=ve){Z(Je,V,te,!0);continue}let Oe;if(Je.key!=null)Oe=ce.get(Je.key);else for(pe=oe;pe<=M;pe++)if(it[pe-oe]===0&&Zi(Je,F[pe])){Oe=pe;break}Oe===void 0?Z(Je,V,te,!0):(it[Oe-oe]=ue+1,Oe>=Ve?Ve=Oe:Ae=!0,g(Je,F[Oe],L,null,V,te,he,ae,me),ye++)}const Me=Ae?S_(it):Us;for(pe=Me.length-1,ue=ve-1;ue>=0;ue--){const Je=oe+ue,Oe=F[Je],We=Je+1<Te?F[Je+1].el:G;it[ue]===0?g(null,Oe,L,We,V,te,he,ae,me):Ae&&(pe<0||ue!==Me[pe]?z(Oe,L,We,2):pe--)}}},z=(x,F,L,G,V=null)=>{const{el:te,type:he,transition:ae,children:me,shapeFlag:ue}=x;if(ue&6){z(x.component.subTree,F,L,G);return}if(ue&128){x.suspense.move(F,L,G);return}if(ue&64){he.move(x,F,L,ke);return}if(he===ut){i(te,F,L);for(let b=0;b<me.length;b++)z(me[b],F,L,G);i(x.anchor,F,L);return}if(he===So){y(x,F,L);return}if(G!==2&&ue&1&&ae)if(G===0)ae.beforeEnter(te),i(te,F,L),rn(()=>ae.enter(te),V);else{const{leave:b,delayLeave:M,afterLeave:N}=ae,oe=()=>i(te,F,L),ce=()=>{b(te,()=>{oe(),N&&N()})};M?M(te,oe,ce):ce()}else i(te,F,L)},Z=(x,F,L,G=!1,V=!1)=>{const{type:te,props:he,ref:ae,children:me,dynamicChildren:ue,shapeFlag:Te,patchFlag:b,dirs:M}=x;if(ae!=null&&vl(ae,null,L,x,!0),Te&256){F.ctx.deactivate(x);return}const N=Te&1&&M,oe=!Ea(x);let ce;if(oe&&(ce=he&&he.onVnodeBeforeUnmount)&&Gn(ce,F,x),Te&6)Ee(x.component,L,G);else{if(Te&128){x.suspense.unmount(L,G);return}N&&Bi(x,null,F,"beforeUnmount"),Te&64?x.type.remove(x,F,L,V,ke,G):ue&&(te!==ut||b>0&&b&64)?Fe(ue,F,L,!1,!0):(te===ut&&b&384||!V&&Te&16)&&Fe(me,F,L),G&&xe(x)}(oe&&(ce=he&&he.onVnodeUnmounted)||N)&&rn(()=>{ce&&Gn(ce,F,x),N&&Bi(x,null,F,"unmounted")},L)},xe=x=>{const{type:F,el:L,anchor:G,transition:V}=x;if(F===ut){Se(L,G);return}if(F===So){E(x);return}const te=()=>{s(L),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(x.shapeFlag&1&&V&&!V.persisted){const{leave:he,delayLeave:ae}=V,me=()=>he(L,te);ae?ae(x.el,te,me):me()}else te()},Se=(x,F)=>{let L;for(;x!==F;)L=d(x),s(x),x=L;s(F)},Ee=(x,F,L)=>{const{bum:G,scope:V,update:te,subTree:he,um:ae}=x;G&&go(G),V.stop(),te&&(te.active=!1,Z(he,x,F,L)),ae&&rn(ae,F),rn(()=>{x.isUnmounted=!0},F),F&&F.pendingBranch&&!F.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===F.pendingId&&(F.deps--,F.deps===0&&F.resolve())},Fe=(x,F,L,G=!1,V=!1,te=0)=>{for(let he=te;he<x.length;he++)Z(x[he],F,L,G,V)},Be=x=>x.shapeFlag&6?Be(x.component.subTree):x.shapeFlag&128?x.suspense.next():d(x.anchor||x.el),He=(x,F,L)=>{x==null?F._vnode&&Z(F._vnode,null,null,!0):g(F._vnode||null,x,F,null,null,null,L),zc(),Zd(),F._vnode=x},ke={p:g,um:Z,m:z,r:xe,mt:U,mc:B,pc:se,pbc:T,n:Be,o:n};let Ue,Ce;return e&&([Ue,Ce]=e(ke)),{render:He,hydrate:Ue,createApp:f_(He,Ue)}}function Hi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function x_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function hh(n,e,t=!1){const i=n.children,s=e.children;if(Xe(i)&&Xe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Ei(s[r]),o.el=a.el),t||hh(a,o)),o.type===Ja&&(o.el=a.el)}}function S_(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const y_=n=>n.__isTeleport,ut=Symbol.for("v-fgt"),Ja=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),_r=[];let Nn=null;function Q(n=!1){_r.push(Nn=n?null:[])}function E_(){_r.pop(),Nn=_r[_r.length-1]||null}let br=1;function Jc(n){br+=n}function ph(n){return n.dynamicChildren=br>0?Nn||Us:null,E_(),br>0&&Nn&&Nn.push(n),n}function de(n,e,t,i,s,r){return ph(P(n,e,t,i,s,r,!0))}function St(n,e,t,i,s){return ph(Pe(n,e,t,i,s,!0))}function Ml(n){return n?n.__v_isVNode===!0:!1}function Zi(n,e){return n.type===e.type&&n.key===e.key}const Qa="__vInternal",mh=({key:n})=>n??null,ba=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ft(n)||Ct(n)||tt(n)?{i:Mn,r:n,k:e,f:!!t}:n:null);function P(n,e=null,t=null,i=0,s=null,r=n===ut?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&mh(e),ref:e&&ba(e),scopeId:Ya,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mn};return o?(sc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),br>0&&!a&&Nn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Nn.push(l),l}const Pe=b_;function b_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===zm)&&(n=On),Ml(n)){const o=jn(n,e,!0);return t&&sc(o,t),br>0&&!r&&Nn&&(o.shapeFlag&6?Nn[Nn.indexOf(n)]=o:Nn.push(o)),o.patchFlag|=-2,o}if(U_(n)&&(n=n.__vccOpts),e){e=T_(e);let{class:o,style:l}=e;o&&!Ft(o)&&(e.class=It(o)),Mt(l)&&(Vd(l)&&!Xe(l)&&(l=kt({},l)),e.style=Tn(l))}const a=Ft(n)?1:Gm(n)?128:y_(n)?64:Mt(n)?4:tt(n)?2:0;return P(n,e,t,i,s,a,r,!0)}function T_(n){return n?Vd(n)||Qa in n?kt({},n):n:null}function jn(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:a}=n,o=e?_h(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&mh(o),ref:e&&e.ref?t&&s?Xe(s)?s.concat(ba(e)):[s,ba(e)]:ba(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ut?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&jn(n.ssContent),ssFallback:n.ssFallback&&jn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function A_(n=" ",e=0){return Pe(Ja,null,n,e)}function $e(n="",e=!1){return e?(Q(),St(On,null,n)):Pe(On,null,n)}function Vn(n){return n==null||typeof n=="boolean"?Pe(On):Xe(n)?Pe(ut,null,n.slice()):typeof n=="object"?Ei(n):Pe(Ja,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:jn(n)}function sc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),sc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Qa in e)?e._ctx=Mn:s===3&&Mn&&(Mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:Mn},t=32):(e=String(e),i&64?(t=16,e=[A_(e)]):t=8);n.children=e,n.shapeFlag|=t}function _h(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=It([e.class,i.class]));else if(s==="style")e.style=Tn([e.style,i.style]);else if(Ha(s)){const r=e[s],a=i[s];a&&r!==a&&!(Xe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Gn(n,e,t,i=null){Cn(n,e,7,[t,i])}const w_=oh();let C_=0;function R_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||w_,r={uid:C_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ch(i,s),emitsOptions:Qd(i,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=km.bind(null,r),n.ce&&n.ce(r),r}let zt=null;const gh=()=>zt||Mn;let rc,hs,Qc="__VUE_INSTANCE_SETTERS__";(hs=ol()[Qc])||(hs=ol()[Qc]=[]),hs.push(n=>zt=n),rc=n=>{hs.length>1?hs.forEach(e=>e(n)):hs[0](n)};const Vs=n=>{rc(n),n.scope.on()},ss=()=>{zt&&zt.scope.off(),rc(null)};function vh(n){return n.vnode.shapeFlag&4}let Tr=!1;function P_(n,e=!1){Tr=e;const{props:t,children:i}=n.vnode,s=vh(n);h_(n,t,s,e),__(n,i);const r=s?L_(n,e):void 0;return Tr=!1,r}function L_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=$a(new Proxy(n.ctx,s_));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?I_(n):null;Vs(n),js();const r=Ci(i,n,0,[n.props,s]);if(Ks(),ss(),Ed(r)){if(r.then(ss,ss),e)return r.then(a=>{eu(n,a,e)}).catch(a=>{qa(a,n,0)});n.asyncDep=r}else eu(n,r,e)}else Mh(n,e)}function eu(n,e,t){tt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=Xd(e)),Mh(n,t)}let tu;function Mh(n,e,t){const i=n.type;if(!n.render){if(!e&&tu&&!i.render){const s=i.template||nc(n).template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=kt(kt({isCustomElement:r,delimiters:o},a),l);i.render=tu(s,c)}}n.render=i.render||Xn}{Vs(n),js();try{r_(n)}finally{Ks(),ss()}}}function D_(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return dn(n,"get","$attrs"),e[t]}}))}function I_(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return D_(n)},slots:n.slots,emit:n.emit,expose:e}}function eo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Xd($a(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in mr)return mr[t](n)},has(e,t){return t in e||t in mr}}))}function U_(n){return tt(n)&&"__vccOpts"in n}const Dt=(n,e)=>Pm(n,e,Tr);function Gt(n,e,t){const i=arguments.length;return i===2?Mt(e)&&!Xe(e)?Ml(e)?Pe(n,null,[e]):Pe(n,e):Pe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ml(t)&&(t=[t]),Pe(n,e,t))}const F_=Symbol.for("v-scx"),k_=()=>vt(F_),N_="3.3.8",O_="http://www.w3.org/2000/svg",Ji=typeof document<"u"?document:null,nu=Ji&&Ji.createElement("template"),B_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?Ji.createElementNS(O_,n):Ji.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ji.createTextNode(n),createComment:n=>Ji.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ji.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{nu.innerHTML=i?`<svg>${n}</svg>`:n;const o=nu.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},hi="transition",tr="animation",Ar=Symbol("_vtc"),ac=(n,{slots:e})=>Gt(Xm,H_(n),e);ac.displayName="Transition";const xh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ac.props=kt({},th,xh);const zi=(n,e=[])=>{Xe(n)?n.forEach(t=>t(...e)):n&&n(...e)},iu=n=>n?Xe(n)?n.some(e=>e.length>1):n.length>1:!1;function H_(n){const e={};for(const W in n)W in xh||(e[W]=n[W]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=z_(s),g=_&&_[0],m=_&&_[1],{onBeforeEnter:h,onEnter:w,onEnterCancelled:y,onLeave:E,onLeaveCancelled:C,onBeforeAppear:k=h,onAppear:D=w,onAppearCancelled:B=y}=e,S=(W,re,U)=>{Gi(W,re?u:o),Gi(W,re?c:a),U&&U()},T=(W,re)=>{W._isLeaving=!1,Gi(W,f),Gi(W,p),Gi(W,d),re&&re()},J=W=>(re,U)=>{const $=W?D:w,H=()=>S(re,W,U);zi($,[re,H]),su(()=>{Gi(re,W?l:r),pi(re,W?u:o),iu($)||ru(re,i,g,H)})};return kt(e,{onBeforeEnter(W){zi(h,[W]),pi(W,r),pi(W,a)},onBeforeAppear(W){zi(k,[W]),pi(W,l),pi(W,c)},onEnter:J(!1),onAppear:J(!0),onLeave(W,re){W._isLeaving=!0;const U=()=>T(W,re);pi(W,f),W_(),pi(W,d),su(()=>{W._isLeaving&&(Gi(W,f),pi(W,p),iu(E)||ru(W,i,m,U))}),zi(E,[W,U])},onEnterCancelled(W){S(W,!1),zi(y,[W])},onAppearCancelled(W){S(W,!0),zi(B,[W])},onLeaveCancelled(W){T(W),zi(C,[W])}})}function z_(n){if(n==null)return null;if(Mt(n))return[yo(n.enter),yo(n.leave)];{const e=yo(n);return[e,e]}}function yo(n){return jp(n)}function pi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ar]||(n[Ar]=new Set)).add(e)}function Gi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ar];t&&(t.delete(e),t.size||(n[Ar]=void 0))}function su(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let G_=0;function ru(n,e,t,i){const s=n._endId=++G_,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=V_(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,d),r()},d=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,d)}function V_(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${hi}Delay`),r=i(`${hi}Duration`),a=au(s,r),o=i(`${tr}Delay`),l=i(`${tr}Duration`),c=au(o,l);let u=null,f=0,d=0;e===hi?a>0&&(u=hi,f=a,d=r.length):e===tr?c>0&&(u=tr,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?hi:tr:null,d=u?u===hi?r.length:l.length:0);const p=u===hi&&/\b(transform|all)(,|$)/.test(i(`${hi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function au(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>ou(t)+ou(n[i])))}function ou(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function W_(){return document.body.offsetHeight}function $_(n,e,t){const i=n[Ar];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const oc=Symbol("_vod"),wt={beforeMount(n,{value:e},{transition:t}){n[oc]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):nr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),nr(n,!0),i.enter(n)):i.leave(n,()=>{nr(n,!1)}):nr(n,e))},beforeUnmount(n,{value:e}){nr(n,e)}};function nr(n,e){n.style.display=e?n[oc]:"none"}function q_(n,e,t){const i=n.style,s=Ft(t);if(t&&!s){if(e&&!Ft(e))for(const r in e)t[r]==null&&xl(i,r,"");for(const r in t)xl(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),oc in n&&(i.display=r)}}const lu=/\s*!important$/;function xl(n,e,t){if(Xe(t))t.forEach(i=>xl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=X_(n,e);lu.test(t)?n.setProperty(Ys(i),t.replace(lu,""),"important"):n[i]=t}}const cu=["Webkit","Moz","ms"],Eo={};function X_(n,e){const t=Eo[e];if(t)return t;let i=zs(e);if(i!=="filter"&&i in n)return Eo[e]=i;i=Ad(i);for(let s=0;s<cu.length;s++){const r=cu[s]+i;if(r in n)return Eo[e]=r}return e}const uu="http://www.w3.org/1999/xlink";function Y_(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(uu,e.slice(6,e.length)):n.setAttributeNS(uu,e,t);else{const r=tm(e);t==null||r&&!wd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function j_(n,e,t,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=wd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function K_(n,e,t,i){n.addEventListener(e,t,i)}function Z_(n,e,t,i){n.removeEventListener(e,t,i)}const fu=Symbol("_vei");function J_(n,e,t,i,s=null){const r=n[fu]||(n[fu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Q_(e);if(i){const c=r[e]=ng(i,s);K_(n,o,c,l)}else a&&(Z_(n,o,a,l),r[e]=void 0)}}const du=/(?:Once|Passive|Capture)$/;function Q_(n){let e;if(du.test(n)){e={};let i;for(;i=n.match(du);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ys(n.slice(2)),e]}let bo=0;const eg=Promise.resolve(),tg=()=>bo||(eg.then(()=>bo=0),bo=Date.now());function ng(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Cn(ig(i,t.value),e,5,[i])};return t.value=n,t.attached=tg(),t}function ig(n,e){if(Xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const hu=/^on[a-z]/,sg=(n,e,t,i,s=!1,r,a,o,l)=>{e==="class"?$_(n,i,s):e==="style"?q_(n,t,i):Ha(e)?Gl(e)||J_(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rg(n,e,i,s))?j_(n,e,i,r,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Y_(n,e,i,s))};function rg(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&hu.test(e)&&tt(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||hu.test(e)&&Ft(t)?!1:e in n}const ag=kt({patchProp:sg},B_);let pu;function og(){return pu||(pu=v_(ag))}const lg=(...n)=>{const e=og().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=cg(i);if(!s)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function cg(n){return Ft(n)?document.querySelector(n):n}var ug=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Sh;const to=n=>Sh=n,yh=Symbol();function Sl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var gr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(gr||(gr={}));function fg(){const n=$l(!0),e=n.run(()=>ge({}));let t=[],i=[];const s=$a({install(r){to(s),s._a=r,r.provide(yh,s),r.config.globalProperties.$pinia=s,i.forEach(a=>t.push(a)),i=[]},use(r){return!this._a&&!ug?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Eh=()=>{};function mu(n,e,t,i=Eh){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Pd()&&Ld(s),s}function ps(n,...e){n.slice().forEach(t=>{t(...e)})}const dg=n=>n();function yl(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];Sl(s)&&Sl(i)&&n.hasOwnProperty(t)&&!Ct(i)&&!wi(i)?n[t]=yl(s,i):n[t]=i}return n}const hg=Symbol();function pg(n){return!Sl(n)||!n.hasOwnProperty(hg)}const{assign:Si}=Object;function mg(n){return!!(Ct(n)&&n.effect)}function _g(n,e,t,i){const{state:s,actions:r,getters:a}=e,o=t.state.value[n];let l;function c(){o||(t.state.value[n]=s?s():{});const u=Yd(t.state.value[n]);return Si(u,r,Object.keys(a||{}).reduce((f,d)=>(f[d]=$a(Dt(()=>{to(t);const p=t._s.get(n);return a[d].call(p,p)})),f),{}))}return l=bh(n,c,e,t,i,!0),l}function bh(n,e,t={},i,s,r){let a;const o=Si({actions:{}},t),l={deep:!0};let c,u,f=[],d=[],p;const _=i.state.value[n];!r&&!_&&(i.state.value[n]={}),ge({});let g;function m(B){let S;c=u=!1,typeof B=="function"?(B(i.state.value[n]),S={type:gr.patchFunction,storeId:n,events:p}):(yl(i.state.value[n],B),S={type:gr.patchObject,payload:B,storeId:n,events:p});const T=g=Symbol();Zs().then(()=>{g===T&&(c=!0)}),u=!0,ps(f,S,i.state.value[n])}const h=r?function(){const{state:S}=t,T=S?S():{};this.$patch(J=>{Si(J,T)})}:Eh;function w(){a.stop(),f=[],d=[],i._s.delete(n)}function y(B,S){return function(){to(i);const T=Array.from(arguments),J=[],W=[];function re(H){J.push(H)}function U(H){W.push(H)}ps(d,{args:T,name:B,store:C,after:re,onError:U});let $;try{$=S.apply(this&&this.$id===n?this:C,T)}catch(H){throw ps(W,H),H}return $ instanceof Promise?$.then(H=>(ps(J,H),H)).catch(H=>(ps(W,H),Promise.reject(H))):(ps(J,$),$)}}const E={_p:i,$id:n,$onAction:mu.bind(null,d),$patch:m,$reset:h,$subscribe(B,S={}){const T=mu(f,B,S.detached,()=>J()),J=a.run(()=>bt(()=>i.state.value[n],W=>{(S.flush==="sync"?u:c)&&B({storeId:n,type:gr.direct,events:p},W)},Si({},l,S)));return T},$dispose:w},C=Kt(E);i._s.set(n,C);const D=(i._a&&i._a.runWithContext||dg)(()=>i._e.run(()=>(a=$l()).run(e)));for(const B in D){const S=D[B];if(Ct(S)&&!mg(S)||wi(S))r||(_&&pg(S)&&(Ct(S)?S.value=_[B]:yl(S,_[B])),i.state.value[n][B]=S);else if(typeof S=="function"){const T=y(B,S);D[B]=T,o.actions[B]=S}}return Si(C,D),Si(lt(C),D),Object.defineProperty(C,"$state",{get:()=>i.state.value[n],set:B=>{m(S=>{Si(S,B)})}}),i._p.forEach(B=>{Si(C,a.run(()=>B({store:C,app:i._a,pinia:i,options:o})))}),_&&r&&t.hydrate&&t.hydrate(C.$state,_),c=!0,u=!0,C}function ki(n,e,t){let i,s;const r=typeof e=="function";typeof n=="string"?(i=n,s=r?t:e):(s=n,i=n.id);function a(o,l){const c=d_();return o=o||(c?vt(yh,null):null),o&&to(o),o=Sh,o._s.has(i)||(r?bh(i,e,s,o):_g(i,s,o)),o._s.get(i)}return a.$id=i,a}const gg={class:"btnFlame"},vg=Ye({__name:"GreenBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(Q(),de("div",gg,be(n.inside),1))}}),Ze=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Mg=Ze(vg,[["__scopeId","data-v-d40edbbe"]]),v={title:"Seventh Dawn",newgame:"NEW GAME",loadgame:"LOAD GAME",textYes:"YES",textNo:"NO",strLog1:"GENERAL",strLog2:"BATTLE",statusOpening:"OPENING",statusTown:"TOWN",statusDungeon:"DUNGEON",processSearch:"SEARCH",processBattle:"BATTLE",processGuild:"GUILD",menuAddMember:"Add a Member",menuRemoveMember:"Remove Member",processInn:"INN",processPub:"PUB",processChurch:"CHURCH",processSmith:"SMITH",processEquipShop:"EQUPMENT SHOP",processItemShop:"ITEM SHOP",nameDungeon1:"Forest of Envy",nameDungeon2:"Swamp of Gluttony",nameDungeon3:"Desert of Sloth",nameDungeon4:"Volcano of Wrath",nameDungeon5:"Cave of Greed",nameDungeon6:"Palace of Lust",nameDungeon7:"Tower of Pride",mainChaid:1,clsSamurai:"Samurai",clsHolyKnight:"HolyKnight",clsPriest:"Priest",clsArcher:"Archer",statusHP:"HP",statusMP:"MP",statusATK:"ATK",statusMGC:"MGC",statusDEF:"DEF",statusMDF:"MDF",statusDEX:"DEX",statusSPD:"SPD",statusnowHP:"nowHP",statusnowMP:"nowMP",wepSword:"Sword",wepAxe:"Axe",wepDagger:"Dagger",wepWand:"Wand",wepBow:"Bow",wepSpear:"Spear",MapWidth:100,MapHeight:100,MapWall:0,MapRoom:1,MapRoad:2,SetDoorUp:11,SetDoorUnder:12,SetDoorLeft:13,SetDoorRight:14,roomMinHeight:5,roomMaxHeight:15,roomMinWidth:5,roomMaxWidth:15,RoomCountMin:10,RoomCountMax:20,BlockSize:10,BlockHeight:20,meetPointCount:2,MiniHeight:300,MiniWallColor:"#02040F",MiniRoomColor:"#C2B8B2",MiniMoveColor:"#197BBD",MiniPlayerColor:"#CBEF43",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",TurnLeft:"TurnLeft",TurnRight:"TurnRight",encountMin:1,encountMax:5,encountLimit:100,monNumMin:1,monNumMax:6,minEffectTop:20,maxEffectTop:40,minEffectLeft:30,maxEffectLeft:50,initHitRate:70,monsterHitRate:75,normalDamageRate:1,critDamageRate:1.5,effectTime:1e3,normalAttackTime:400,monsterAttackTime:500,delayTime:100,awaitTime:1500,nextTime:500,actionAttack:"Attack",actionSkill:"Skill",actionMagic:"Magic",actionItem:"Item",strMiss:"MISS",targetMyself:"myself",targetOneFriend:"oneFriend",targetAllFriends:"allFriends",targetRandomFriend:"randomFriend",targetOneEnemy:"oneEnemy",targetColumnEnemy:"columnEnemy",targetRowEnemy:"rowEnemy",targetAllEnemy:"allEnemy",targetRandomEnemy:"randomEnemy",targetAll:"all",effectAttack:"attack",effectHeal:"heal",effectBuff:"buff",effectDebuff:"debuff",effectCondition:"condition",effectSpecial:"special",effectDamage:"damage",effectRegeneration:"regeneration",baseFixValue:"FixValue",baseFixRate:"FixRate",returnItemId:1,itemTabAll:"All",itemTab1:"Normal",itemTab2:"Battle",itemTab3:"Special",itemBtn1:"USE",mscTitle:"maou_bgm_orchestra18",mscTown:"maou_bgm_acoustic36",mscDungeon1:"maou_bgm_fantasy01",mscBattle1:"Bite_the_Bullet",mscBattle2:"maou_bgm_fantasy15",mscBattle3:"maou_bgm_orchestra12",mscBattle4:"Strike_the_Despair",mscBattle5:"Integral-one",logEnterDungeon:"Enter the dungeon",logMonsterEncounter:"Monster Encounter",msgInGame1:"Please turn the screen horizontally.",msgInGame2:"Music plays in this game.",msgEnterDungeon:"Do you enter The ",msgAddParty1:"Do you add ",msgAddParty2:" to your party?",msgRemoveParty1:"Do you remove ",msgRemoveParty2:" from the party?",msgAddPartyError:"The party is full. Please remove someone.",msgRemovePartyError:"This character cannot remove from party.",msgSkillCostError:"Skill cost limit error test12345678901234567890"},zn=ki("status",{state:()=>({status:v.statusOpening,processTown:v.statusTown,processDungeon:"",guildMenu:"",whichDungeon:"",musicDungeon:""})}),Dr=ki("audio",{state:()=>({currentBgm:null,audioElements:{}}),actions:{playBgm(n){this.currentBgm&&this.audioElements[this.currentBgm].pause(),this.audioElements[n]||(this.audioElements[n]=new Audio(`music/bgm/${n}.mp3`),this.audioElements[n].loop=!0),this.audioElements[n].play(),this.currentBgm=n},playSfx(n){new Audio(require(`music/se/${n}.mp3`)).play()}}}),xg=n=>(Bn("data-v-e99d991b"),n=n(),Hn(),n),Sg=xg(()=>P("div",{class:"enter"},"ENTER THE CLICK",-1)),yg=[Sg],Eg={key:1,class:"background"},bg={class:"title"},Tg=Ye({__name:"Opening",setup(n){const e=zn(),t=Dr(),i=ge(!1);Fi(()=>{window.innerHeight>window.innerWidth&&(window.onload=()=>{alert(v.msgInGame1)}),window.onload=()=>{alert(v.msgInGame2)}});function s(){i.value=!0,t.playBgm(v.mscTitle)}function r(){e.status=v.statusTown,e.processTown=v.statusTown}return(a,o)=>i.value?(Q(),de("div",Eg,[P("div",bg,be(K(v).title),1),Pe(Mg,{class:"btnCard",id:"btn2",inside:K(v).newgame,onClick:o[0]||(o[0]=l=>r())},null,8,["inside"])])):(Q(),de("div",{key:0,class:"background",onClick:s},yg))}}),Ag=Ze(Tg,[["__scopeId","data-v-e99d991b"]]);/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const Lt={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},_u={itemsToShow:{default:Lt.itemsToShow,type:Number},itemsToScroll:{default:Lt.itemsToScroll,type:Number},wrapAround:{default:Lt.wrapAround,type:Boolean},throttle:{default:Lt.throttle,type:Number},snapAlign:{default:Lt.snapAlign,validator(n){return["start","end","center","center-even","center-odd"].includes(n)}},transition:{default:Lt.transition,type:Number},breakpoints:{default:Lt.breakpoints,type:Object},autoplay:{default:Lt.autoplay,type:Number},pauseAutoplayOnHover:{default:Lt.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:Lt.mouseDrag,type:Boolean},touchDrag:{default:Lt.touchDrag,type:Boolean},dir:{default:Lt.dir,validator(n){return["rtl","ltr"].includes(n)}},i18n:{default:Lt.i18n,type:Object},settings:{default(){return{}},type:Object}};function wg({config:n,slidesCount:e}){const{snapAlign:t,wrapAround:i,itemsToShow:s=1}=n;if(i)return Math.max(e-1,0);let r;switch(t){case"start":r=e-s;break;case"end":r=e-1;break;case"center":case"center-odd":r=e-Math.ceil((s-.5)/2);break;case"center-even":r=e-Math.ceil(s/2);break;default:r=0;break}return Math.max(r,0)}function Cg({config:n,slidesCount:e}){const{wrapAround:t,snapAlign:i,itemsToShow:s=1}=n;let r=0;if(t||s>e)return r;switch(i){case"start":r=0;break;case"end":r=s-1;break;case"center":case"center-odd":r=Math.floor((s-1)/2);break;case"center-even":r=Math.floor((s-2)/2);break;default:r=0;break}return r}function El({val:n,max:e,min:t}){return e<t?n:Math.min(Math.max(n,t),e)}function Rg({config:n,currentSlide:e,slidesCount:t}){const{snapAlign:i,wrapAround:s,itemsToShow:r=1}=n;let a=e;switch(i){case"center":case"center-odd":a-=(r-1)/2;break;case"center-even":a-=(r-2)/2;break;case"end":a-=r-1;break}return s?a:El({val:a,max:t-r,min:0})}function Th(n){return n?n.reduce((e,t)=>{var i;return t.type===ut?[...e,...Th(t.children)]:((i=t.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...e,t]:e},[]):[]}function Da({val:n,max:e,min:t=0}){return n>e?Da({val:n-(e+1),max:e,min:t}):n<t?Da({val:n+(e+1),max:e,min:t}):n}function Pg(n,e){let t;return e?function(...i){const s=this;t||(n.apply(s,i),t=!0,setTimeout(()=>t=!1,e))}:n}function Lg(n,e){let t;return function(...i){t&&clearTimeout(t),t=setTimeout(()=>{n(...i),t=null},e)}}function Ah(n="",e={}){return Object.entries(e).reduce((t,[i,s])=>t.replace(`{${i}}`,String(s)),n)}var Dg=Ye({name:"ARIA",setup(){const n=vt("config",Kt(Object.assign({},Lt))),e=vt("currentSlide",ge(0)),t=vt("slidesCount",ge(0));return()=>Gt("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Ah(n.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:t.value}))}}),Ig=Ye({name:"Carousel",props:_u,setup(n,{slots:e,emit:t,expose:i}){var s;const r=ge(null),a=ge([]),o=ge(0),l=ge(0),c=Kt(Object.assign({},Lt));let u=Object.assign({},Lt),f;const d=ge((s=n.modelValue)!==null&&s!==void 0?s:0),p=ge(0),_=ge(0),g=ge(0),m=ge(0);let h,w;bn("config",c),bn("slidesCount",l),bn("currentSlide",d),bn("maxSlide",g),bn("minSlide",m),bn("slideWidth",o);function y(){f=Object.assign({},n.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),n),{i18n:Object.assign(Object.assign({},u.i18n),n.i18n),breakpoints:void 0}),C(u)}function E(){if(!f||!Object.keys(f).length)return;const L=Object.keys(f).map(V=>Number(V)).sort((V,te)=>+te-+V);let G=Object.assign({},u);L.some(V=>{const te=window.matchMedia(`(min-width: ${V}px)`).matches;return te&&(G=Object.assign(Object.assign({},G),f[V])),te}),C(G)}function C(L){Object.entries(L).forEach(([G,V])=>c[G]=V)}const k=Lg(()=>{E(),D()},16);function D(){if(!r.value)return;const L=r.value.getBoundingClientRect();o.value=L.width/c.itemsToShow}function B(){l.value<=0||(_.value=Math.ceil((l.value-1)/2),g.value=wg({config:c,slidesCount:l.value}),m.value=Cg({config:c,slidesCount:l.value}),c.wrapAround||(d.value=El({val:d.value,max:g.value,min:m.value})))}Fi(()=>{Zs(()=>D()),setTimeout(()=>D(),1e3),E(),fe(),window.addEventListener("resize",k,{passive:!0}),t("init")}),tc(()=>{w&&clearTimeout(w),h&&clearInterval(h),window.removeEventListener("resize",k,{passive:!0})});let S=!1;const T={x:0,y:0},J={x:0,y:0},W=Kt({x:0,y:0}),re=ge(!1),U=ge(!1),$=()=>{re.value=!0},H=()=>{re.value=!1};function q(L){["INPUT","TEXTAREA","SELECT"].includes(L.target.tagName)||(S=L.type==="touchstart",S||L.preventDefault(),!(!S&&L.button!==0||Z.value)&&(T.x=S?L.touches[0].clientX:L.clientX,T.y=S?L.touches[0].clientY:L.clientY,document.addEventListener(S?"touchmove":"mousemove",se,!0),document.addEventListener(S?"touchend":"mouseup",le,!0)))}const se=Pg(L=>{U.value=!0,J.x=S?L.touches[0].clientX:L.clientX,J.y=S?L.touches[0].clientY:L.clientY;const G=J.x-T.x,V=J.y-T.y;W.y=V,W.x=G},c.throttle);function le(){const L=c.dir==="rtl"?-1:1,G=Math.sign(W.x)*.4,V=Math.round(W.x/o.value+G)*L;if(V&&!S){const te=he=>{he.stopPropagation(),window.removeEventListener("click",te,!0)};window.addEventListener("click",te,!0)}xe(d.value-V),W.x=0,W.y=0,U.value=!1,document.removeEventListener(S?"touchmove":"mousemove",se,!0),document.removeEventListener(S?"touchend":"mouseup",le,!0)}function fe(){!c.autoplay||c.autoplay<=0||(h=setInterval(()=>{c.pauseAutoplayOnHover&&re.value||Se()},c.autoplay))}function z(){h&&(clearInterval(h),h=null),fe()}const Z=ge(!1);function xe(L){const G=c.wrapAround?L:El({val:L,max:g.value,min:m.value});d.value===G||Z.value||(t("slide-start",{slidingToIndex:L,currentSlideIndex:d.value,prevSlideIndex:p.value,slidesCount:l.value}),Z.value=!0,p.value=d.value,d.value=G,w=setTimeout(()=>{if(c.wrapAround){const V=Da({val:G,max:g.value,min:0});V!==d.value&&(d.value=V,t("loop",{currentSlideIndex:d.value,slidingToIndex:L}))}t("update:modelValue",d.value),t("slide-end",{currentSlideIndex:d.value,prevSlideIndex:p.value,slidesCount:l.value}),Z.value=!1,z()},c.transition))}function Se(){xe(d.value+c.itemsToScroll)}function Ee(){xe(d.value-c.itemsToScroll)}const Fe={slideTo:xe,next:Se,prev:Ee};bn("nav",Fe),bn("isSliding",Z);const Be=Dt(()=>Rg({config:c,currentSlide:d.value,slidesCount:l.value}));bn("slidesToScroll",Be);const He=Dt(()=>{const L=c.dir==="rtl"?-1:1,G=Be.value*o.value*L;return{transform:`translateX(${W.x-G}px)`,transition:`${Z.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${l.value*o.value}px`:"",width:"100%"}});function ke(){y(),E(),B(),D(),z()}Object.keys(_u).forEach(L=>{["modelValue"].includes(L)||bt(()=>n[L],ke)}),bt(()=>n.modelValue,L=>{L!==d.value&&xe(Number(L))}),bt(l,B),t("before-init"),y();const Ue={config:c,slidesCount:l,slideWidth:o,next:Se,prev:Ee,slideTo:xe,currentSlide:d,maxSlide:g,minSlide:m,middleSlide:_};i({updateBreakpointsConfigs:E,updateSlidesData:B,updateSlideWidth:D,initDefaultConfigs:y,restartCarousel:ke,slideTo:xe,next:Se,prev:Ee,nav:Fe,data:Ue});const Ce=e.default||e.slides,x=e.addons,F=Kt(Ue);return()=>{const L=Th(Ce==null?void 0:Ce(F)),G=(x==null?void 0:x(F))||[];L.forEach((ae,me)=>ae.props.index=me);let V=L;if(c.wrapAround){const ae=L.map((ue,Te)=>jn(ue,{index:-L.length+Te,isClone:!0,key:`clone-before-${Te}`})),me=L.map((ue,Te)=>jn(ue,{index:L.length+Te,isClone:!0,key:`clone-after-${Te}`}));V=[...ae,...L,...me]}a.value=L,l.value=Math.max(L.length,1);const te=Gt("ol",{class:"carousel__track",style:He.value,onMousedownCapture:c.mouseDrag?q:null,onTouchstartPassiveCapture:c.touchDrag?q:null},V),he=Gt("div",{class:"carousel__viewport"},te);return Gt("section",{ref:r,class:{carousel:!0,"is-sliding":Z.value,"is-dragging":U.value,"is-hover":re.value,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":c.i18n.ariaGallery,tabindex:"0",onMouseenter:$,onMouseleave:H},[he,G,Gt(Dg)])}}}),bl;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(bl||(bl={}));const Ug={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function Fg(n){return n in bl}const Tl=n=>{const e=vt("config",Kt(Object.assign({},Lt))),t=String(n.name),i=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!Fg(t))return;const s=Ug[t],r=Gt("path",{d:s}),a=e.i18n[i]||n.title||t,o=Gt("title",a);return Gt("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":a},[o,r])};Tl.props={name:String,title:String};const kg=(n,{slots:e,attrs:t})=>{const{next:i,prev:s}=e||{},r=vt("config",Kt(Object.assign({},Lt))),a=vt("maxSlide",ge(1)),o=vt("minSlide",ge(1)),l=vt("currentSlide",ge(1)),c=vt("nav",{}),{dir:u,wrapAround:f,i18n:d}=r,p=u==="rtl",_=Gt("button",{type:"button",class:["carousel__prev",!f&&l.value<=o.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":d.ariaPreviousSlide,onClick:c.prev},(s==null?void 0:s())||Gt(Tl,{name:p?"arrowRight":"arrowLeft"})),g=Gt("button",{type:"button",class:["carousel__next",!f&&l.value>=a.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":d.ariaNextSlide,onClick:c.next},(i==null?void 0:i())||Gt(Tl,{name:p?"arrowLeft":"arrowRight"}));return[_,g]},Ng=()=>{const n=vt("config",Kt(Object.assign({},Lt))),e=vt("maxSlide",ge(1)),t=vt("minSlide",ge(1)),i=vt("currentSlide",ge(1)),s=vt("nav",{}),r=o=>Da({val:i.value,max:e.value,min:0})===o,a=[];for(let o=t.value;o<e.value+1;o++){const l=Gt("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(o)},"aria-label":Ah(n.i18n.ariaNavigateToSlide,{slideNumber:o+1}),onClick:()=>s.slideTo(o)}),c=Gt("li",{class:"carousel__pagination-item",key:o},l);a.push(c)}return Gt("ol",{class:"carousel__pagination"},a)};var Og=Ye({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(n,{slots:e}){const t=vt("config",Kt(Object.assign({},Lt))),i=vt("currentSlide",ge(0)),s=vt("slidesToScroll",ge(0)),r=vt("isSliding",ge(!1)),a=()=>n.index===i.value,o=()=>n.index===i.value-1,l=()=>n.index===i.value+1,c=()=>{const u=Math.floor(s.value),f=Math.ceil(s.value+t.itemsToShow-1);return n.index>=u&&n.index<=f};return()=>{var u;return Gt("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":c(),"carousel__slide--active":a(),"carousel__slide--prev":o(),"carousel__slide--next":l(),"carousel__slide--sliding":r.value},"aria-hidden":!c()},(u=e.default)===null||u===void 0?void 0:u.call(e))}}});const Bg=[{cha_id:1,name:"Ace",class:"Samurai",faceGraphicUrl:"img/character/chara1face.png",poseGraphicUrl:"img/character/chara1.png",backgroundUrl:"img/character/chara1back.jpg",LV:10,exp:50,nextLvExp:100,HP:220,MP:80,ATK:70,MGC:30,DEF:50,MDF:40,DEX:60,SPD:50,Slash:10,Hit:10,Stab:0,Fire:10,Water:0,Earth:10,Wind:0,Light:0,Dark:0,equipment:{WEP:103,ARM:1003,ACC:2001},activeSkill:[101,102,103,104,105,106],passiveCost:40,passiveSkill:[1,2,3,4],equipSkill:[1,3]},{cha_id:2,name:"Sophia",class:"Holy Knight",faceGraphicUrl:"img/character/chara2face.png",poseGraphicUrl:"img/character/chara2.png",backgroundUrl:"img/character/chara2back.jpg",LV:10,exp:50,nextLvExp:1e3,HP:250,MP:100,ATK:50,MGC:40,DEF:60,MDF:60,DEX:50,SPD:50,Slash:10,Hit:10,Stab:10,Fire:0,Water:0,Earth:10,Wind:0,Light:10,Dark:0,equipment:{WEP:101,ARM:1002,ACC:2101},activeSkill:[201,202,203,204,205],passiveCost:40,passiveSkill:[2,3,4,5],equipSkill:[2,5]},{cha_id:3,name:"Miroku",class:"Priest",faceGraphicUrl:"img/character/chara3face.png",poseGraphicUrl:"img/character/chara3.png",backgroundUrl:"img/character/chara3back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:200,MP:150,ATK:40,MGC:60,DEF:40,MDF:60,DEX:40,SPD:40,Slash:0,Hit:0,Stab:0,Fire:0,Water:10,Earth:0,Wind:0,Light:10,Dark:0,equipment:{WEP:501,ARM:1201,ACC:2201},activeSkill:[301,302,303,304,305],passiveCost:40,passiveSkill:[5,6,7,8],equipSkill:[5,7]},{cha_id:4,name:"Diana",class:"Archer",faceGraphicUrl:"img/character/chara4face.png",poseGraphicUrl:"img/character/chara4.png",backgroundUrl:"img/character/chara4back.jpg",LV:10,exp:500,nextLvExp:1e3,HP:180,MP:150,ATK:60,MGC:30,DEF:40,MDF:40,DEX:60,SPD:60,Slash:0,Hit:0,Stab:10,Fire:0,Water:0,Earth:0,Wind:10,Light:0,Dark:10,equipment:{WEP:401,ARM:1301,ACC:2001},activeSkill:[401,402,403,404,405],passiveCost:40,passiveSkill:[4,7,8,9],equipSkill:[4,9]},{cha_id:5,name:"Perseus",class:"Warrior",faceGraphicUrl:"img/character/chara5face.png",poseGraphicUrl:"img/character/chara5.png",backgroundUrl:"img/character/chara5back.jpg",LV:10,exp:50,nextLvExp:1e3,HP:250,MP:50,ATK:65,MGC:20,DEF:55,MDF:40,DEX:40,SPD:30,Slash:10,Hit:10,Stab:10,Fire:0,Water:0,Earth:20,Wind:0,Light:10,Dark:0,equipment:{WEP:601,ARM:1001,ACC:2101},activeSkill:[501,502,503,504,505,506],passiveCost:40,passiveSkill:[1,2,3,4],equipSkill:[1,4]},{cha_id:6,name:"Nyx",class:"Witch",faceGraphicUrl:"img/character/chara6face.png",poseGraphicUrl:"img/character/chara6.png",backgroundUrl:"img/character/chara6back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:150,MP:200,ATK:30,MGC:80,DEF:30,MDF:70,DEX:40,SPD:40,Slash:0,Hit:0,Stab:0,Fire:20,Water:0,Earth:0,Wind:20,Light:0,Dark:10,equipment:{WEP:502,ARM:1201,ACC:2301},activeSkill:[601,602,603,604,605],passiveCost:40,passiveSkill:[9,10,11,12],equipSkill:[8,9]},{cha_id:7,name:"Raven",class:"Assassin",faceGraphicUrl:"img/character/chara7face.png",poseGraphicUrl:"img/character/chara7.png",backgroundUrl:"img/character/chara7back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:180,MP:80,ATK:70,MGC:30,DEF:40,MDF:40,DEX:80,SPD:80,Slash:20,Hit:20,Stab:20,Fire:0,Water:0,Earth:0,Wind:0,Light:0,Dark:20,equipment:{WEP:201,ARM:1301,ACC:2001},activeSkill:[701,702,703,704,705,706],passiveCost:40,passiveSkill:[13,14,15,16],equipSkill:[10,11]}],Hg=[{skill_id:1,name:"Master Of Swords",info:"When equipped with a sword, physical attack power and accuracy increase.",skill_cost:10,condition:{equipment:"WEP",kind:"sword"},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:20,target:1},{effect_type:1,effect_target:"DEX",effect_amount:10,target:1}]},{skill_id:2,name:"Body Of Steel",info:"When HP is below 50%, physical defense and magic defense increase.",skill_cost:15,condition:{character:"nowHP",under:.5},effect_number:2,skill_effect:[{effect_type:1,effect_target:"DEF",effect_amount:30,target:1},{effect_type:1,effect_target:"MDF",effect_amount:30,target:1}]},{skill_id:3,name:"Flame Blade",info:"Deals additional fire damage when attacking.",skill_cost:20,condition:{attack:.3},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:50,target:4}]},{skill_id:4,name:"Fighting Spirit",info:"When HP is below 20%, attack power and speed increase.",skill_cost:25,condition:{character:"nowHP",under:.2},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:50,target:1},{effect_type:1,effect_target:"SPD",effect_amount:50,target:1}]},{skill_id:5,name:"Ready To Counterattack",info:"被ダメージ時に確率で反撃する",skill_cost:30,condition:{counter:.3},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:100,target:4}]},{skill_id:6,name:"Divine Protection",info:"常にHPが少しずつ回復する",skill_cost:10,condition:[],effect_number:1,skill_effect:[{effect_type:9,effect_target:"HP",effect_amount:10,target:1}]},{skill_id:7,name:"God's Wrath",info:"HPが50%以下の時、聖属性の追加ダメージを与える",skill_cost:100,condition:{character:"nowHP",under:.5},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:50,target:4}]},{skill_id:8,name:"God's Mercy",info:"HPが10%以下の時、完全回復する",skill_cost:20,condition:{character:"nowHP",under:.1},effect_number:1,skill_effect:[{effect_type:9,effect_target:"HP",effect_amount:0,target:1}]},{skill_id:9,name:"Power Of God",info:"2ターンの間、自分の攻撃力と防御力を上げる",skill_cost:25,condition:{underturns:2},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:30,target:1},{effect_type:1,effect_target:"DEF",effect_amount:30,target:1}]}];class wh{constructor(e){Re(this,"skill_id");Re(this,"name");Re(this,"info");Re(this,"skill_cost");Re(this,"condition");Re(this,"effect_number");Re(this,"skill_effect");Re(this,"equip");this.skill_id=e.skill_id,this.name=e.name,this.info=e.info,this.skill_cost=e.skill_cost,this.condition=e.condition,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect,this.equip=!1}}const Ch=Hg.map(n=>new wh(n)),zg=[{eqp_id:101,type:"WEP",kind:"Sword",attribute:1,name:"Sword",status:{ATK:10,HitRate:90}},{eqp_id:102,type:"WEP",kind:"Sword",attribute:1,name:"LongSword",status:{ATK:15,HitRate:90}},{eqp_id:103,type:"WEP",kind:"Sword",attribute:1,name:"Katana",status:{ATK:12,DEX:3,HitRate:90}},{eqp_id:110,type:"WEP",kind:"Sword",attribute:1,name:"x-Cariver",status:{ATK:100,HitRate:90,Earth:50}},{eqp_id:201,type:"WEP",kind:"Dagger",attribute:1,name:"Dagger",status:{ATK:5,DEX:5,HitRate:95}},{eqp_id:301,type:"WEP",kind:"Spear",attribute:1,name:"Spear",status:{ATK:12,HitRate:90}},{eqp_id:401,type:"WEP",kind:"Bow",attribute:3,name:"Bow",status:{ATK:5,DEX:5,HitRate:90}},{eqp_id:402,type:"WEP",kind:"Bow",attribute:7,name:"Artemis",status:{ATK:50,DEX:50,HitRate:100,Wind:50}},{eqp_id:501,type:"WEP",kind:"Wand",attribute:2,name:"Staff",status:{ATK:5,MGC:5,HitRate:85}},{eqp_id:502,type:"WEP",kind:"Wand",attribute:2,name:"Wand",status:{MGC:10,HitRate:85}},{eqp_id:510,type:"WEP",kind:"Wand",attribute:2,name:"WaWaWand",status:{MGC:100,HitRate:85,Dark:50}},{eqp_id:601,type:"WEP",kind:"Axe",attribute:1,name:"Axe",status:{ATK:15,HitRate:80}},{eqp_id:1001,type:"ARM",kind:"Armor",attribute:0,name:"Armor",status:{DEF:5,MDF:5,SPD:-5}},{eqp_id:1002,type:"ARM",kind:"Armor",attribute:0,name:"Plate Armor",status:{DEF:10,MDF:5,SPD:-10}},{eqp_id:1003,type:"ARM",kind:"Armor",attribute:0,name:"Leather Armor",status:{DEF:5,MDF:5}},{eqp_id:1020,type:"ARM",kind:"Armor",attribute:0,name:"12Armor",status:{DEF:50,MDF:50,Slash:20,Hit:20,Stab:20}},{eqp_id:1101,type:"ARM",kind:"Shield",attribute:0,name:"Shield",status:{DEF:7,MDF:3}},{eqp_id:1110,type:"ARM",kind:"Shield",attribute:0,name:"TRXShield",status:{DEF:70,MDF:30,Earth:50}},{eqp_id:1201,type:"ARM",kind:"Robe",attribute:0,name:"Robe",status:{DEF:3,MDF:7}},{eqp_id:1210,type:"ARM",kind:"Robe",attribute:8,name:"EngelRobe",status:{DEF:40,MDF:60,Light:100}},{eqp_id:1301,type:"ARM",kind:"Cloth",attribute:0,name:"Cloth",status:{DEF:4,MDF:4}},{eqp_id:1321,type:"ARM",kind:"Cloth",attribute:9,name:"NinjaSuits",status:{DEF:30,MDF:30,DEX:30,SPD:10,Dark:50}},{eqp_id:2001,type:"ACC",kind:"Bangle",attribute:0,name:"Bangle",status:{ATK:5}},{eqp_id:2101,type:"ACC",kind:"Ring",attribute:0,name:"Ring",status:{DEF:5}},{eqp_id:2151,type:"ACC",kind:"Ring",attribute:9,name:"DevilRing",status:{ATK:50,MDF:-50,Dark:100}},{eqp_id:2201,type:"ACC",kind:"Neckless",attribute:0,name:"Neckless",status:{MDF:5}},{eqp_id:2301,type:"ACC",kind:"Amulet",attribute:0,name:"Amulet",status:{MGC:5}},{eqp_id:2451,type:"ACC",kind:"Belt",attribute:0,name:"RiderBelt",status:{HP:100,MP:50,ATK:30,MGC:10,DEF:30,MDF:30,DEX:30,SPD:10,Fire:30,Water:30,Earth:30,Wind:30}},{eqp_id:2551,type:"ACC",kind:"cape",attribute:8,name:"HolyBless",status:{MP:100,MGC:50,DEF:20,MDF:50,Light:100}}];class Gg{constructor(e){Re(this,"eqp_id");Re(this,"type");Re(this,"kind");Re(this,"attribute");Re(this,"name");Re(this,"status");this.eqp_id=e.eqp_id,this.type=e.type,this.kind=e.kind,this.attribute=e.attribute,this.name=e.name,this.status=e.status}}const vr=zg.map(n=>new Gg(n)),Vg=[{skill_id:101,name:"Zan",use:1,info:"A basic sword attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/zan.gif",anime_time:700}]},{skill_id:102,name:"Suienzan",use:1,info:"A swift sword attack that deals physical damage to one enemy.",attribute:5,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:2,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/suienzan.gif",anime_time:1050}]},{skill_id:103,name:"Kishouzan",use:1,info:"A sword attack that deals physical damage to one enemy and heals the user.",attribute:9,interval:3,consume_type:"HP",consume_amount:10,effect_number:2,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/kishouzan1.gif",anime_time:480},{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"myself",skill_anime:"effect/skill/samurai/kishouzan2.gif",anime_time:700}]},{skill_id:104,name:"Oukazan",use:1,info:"A powerful sword attack that deals physical damage to one enemies.",attribute:1,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",success_rate:1,effect_amount:1.3,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/oukazan.gif",anime_time:1200}]},{skill_id:105,name:"Hienzan",use:1,info:"A powerful sword attack that deals physical damage to one row of enemies.",attribute:4,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/samurai/hienzan.gif",anime_time:1e3}]},{skill_id:106,name:"Ryuuhasuizan",use:1,info:"A element sword attack that deals water damage to all enemies.",attribute:5,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"allEnemy",skill_anime:"effect/skill/samurai/ryuuhasuizan.gif",anime_time:1500}]},{skill_id:201,name:"Holy Strike",use:1,info:"A holy sword attack that deals light damage to one enemy and reduces their dark resistance.",attribute:8,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.4,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/holyknight/holy_strike.gif",anime_time:930}]},{skill_id:202,name:"Heal",use:0,info:"A healing spell that restores HP to one ally.",attribute:10,interval:1,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1,target:1,target_type:"oneFriend",skill_anime:"effect/skill/holyknight/heal.gif",anime_time:740}]},{skill_id:203,name:"Holy Shield",use:1,info:"A protective spell that increases the physical and magical defense of one ally for a few turns.",attribute:8,interval:2,consume_type:"MP",consume_amount:15,effect_number:2,skill_effect:[{effect_type:"buff",effect_kind:"DEF",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"effect/skill/holyknight/holy_shield.gif",anime_time:750},{effect_type:"buff",effect_kind:"MDF",effect_times:3,base_status:"MGC",effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"",anime_time:0}]},{skill_id:204,name:"Holy Light",use:1,info:"A radiant spell that deals light damage to all enemies and heals all allies.",attribute:8,interval:3,consume_type:"MP",consume_amount:20,effect_number:2,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1,target:2,target_type:"allEnemy",skill_anime:"effect/skill/holyknight/holy_light.gif",anime_time:1040},{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"allFriends",skill_anime:"",anime_time:0}]},{skill_id:205,name:"Divine Judgment",use:1,info:"A supreme spell that deals massive light damage to one enemy and has a chance to inflict instant death.",attribute:8,interval:4,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:2.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/holyknight/divine_judgment.gif",anime_time:1680}]},{skill_id:301,name:"Pray",use:0,info:"A simple prayer that restores a small amount of MP to the user.",attribute:10,interval:1,consume_type:"HP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowMP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.2,target:1,target_type:"myself",skill_anime:"effect/skill/priest/pray.gif",anime_time:980}]},{skill_id:302,name:"Cure",use:0,info:"A healing spell that restores HP to one ally and removes one negative status effect.",attribute:10,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.8,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/cure.gif",anime_time:1050}]},{skill_id:303,name:"Bless",use:1,info:"A holy spell that increases the ATK of one ally for a few turns.",attribute:8,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"buff",effect_kind:"ATK",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/bless.gif",anime_time:1040}]},{skill_id:304,name:"Regen",use:1,info:"A healing spell that restores HP to all allies gradually for a few turns.",attribute:10,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"condition",effect_kind:"regeneration",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:.3,target:1,target_type:"allFriends",skill_anime:"effect/skill/priest/regen.gif",anime_time:2080}]},{skill_id:305,name:"Resurrect",use:0,info:"A miracle spell that revives one fallen ally with some HP.",attribute:10,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"revive",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/resurrect.gif",anime_time:1470}]},{skill_id:401,name:"Arrow Shot",use:1,info:"A basic bow attack that deals physical damage to one enemy.",attribute:0,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/arrow_shot.gif",anime_time:480}]},{skill_id:402,name:"Multi Shot",use:1,info:"A bow attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:4,base_status:"ATK",success_rate:1,effect_amount:.8,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/archar/multi_shot.gif",anime_time:1600}]},{skill_id:403,name:"Piercing Shot",use:1,info:"A bow attack that deals physical damage to one column of enemies and ignores their defense.",attribute:0,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"columnEnemy",skill_anime:"effect/skill/archar/piercing_shot.gif",anime_time:880}]},{skill_id:404,name:"Poison Shot",use:1,info:"A bow attack that deals physical damage to one enemy and has a chance to inflict poison status for a few turns.",attribute:0,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/poison_shot.gif",anime_time:720}]},{skill_id:405,name:"Explosive Shot",use:1,info:"A bow attack that deals fire damage to one enemy and causes an explosion that damages nearby enemies.",attribute:4,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:2.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/explosive_shot.gif",anime_time:1400}]},{skill_id:501,name:"Wild Strike",use:1,info:"A strike attack with a weapon that deals physical damage to one enemy.",attribute:2,interval:1.5,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/wild_strike.gif",anime_time:500}]},{skill_id:502,name:"Heavy Strike",use:1,info:"A strike attack with a weapon that deals physical damage to one enemy and stun target.",attribute:2,interval:1.5,consume_type:"MP",consume_amount:8,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/heavy_strike.gif",anime_time:500}]},{skill_id:503,name:"Double Slash",use:1,info:"A swift sword attack that deals physical damage to one enemy twice.",attribute:1,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",success_rate:1,effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/double_slash.gif",anime_time:800}]},{skill_id:504,name:"Tornado Slash",use:1,info:"A fierce slash like a tornado that deals damage to row enemies.",attribute:1,interval:2.5,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/warrior/tornado_slash.gif",anime_time:900}]},{skill_id:505,name:"Explosive Strike",use:1,info:"A furious weapons blows attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:3,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:8,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/warrior/explosive_strike.gif",anime_time:1600}]},{skill_id:506,name:"Gale Road",use:1,info:"A attack that deals damage to all enemies.",attribute:5,interval:2.5,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.8,target:2,target_type:"allEnemy",skill_anime:"effect/skill/warrior/gale_road.gif",anime_time:1300}]},{skill_id:601,name:"Pillar Fire",use:1,info:"A magic fire attack that deals damage to one enemy.",attribute:4,interval:2,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/witch/PillarFire.gif",anime_time:1e3}]},{skill_id:602,name:"Windlash",use:1,info:"A magical wind blade that deals magical damage to one row of enemies.",attribute:7,interval:3,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.2,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/witch/Windlash.gif",anime_time:1e3}]},{skill_id:603,name:"Flame Tower",use:1,info:"A flame magic that deals damage to one column of enemies.",attribute:4,interval:2,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.5,target:2,target_type:"columnEnemy",skill_anime:"effect/skill/witch/FlameTower.gif",anime_time:1500}]},{skill_id:604,name:"Earthquake",use:1,info:"Raise the ground with magic and attack all enemiess.",attribute:6,interval:3,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.5,target:2,target_type:"allEnemy",skill_anime:"effect/skill/witch/Earthquake.gif",anime_time:2200}]},{skill_id:605,name:"Heaven's Roar",use:1,info:"Generates a dense thundercloud that attacks all enemies.",attribute:8,interval:4,consume_type:"MP",consume_amount:30,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:.7,target:2,target_type:"allEnemy",skill_anime:"effect/skill/witch/Heaven's Roar.gif",anime_time:3e3}]},{skill_id:701,name:"Cross Cut",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/cross_cut.gif",anime_time:600}]},{skill_id:702,name:"Dark Crescent",use:1,info:"A powerful sword flash that deals physical damage to one row of enemies.",attribute:10,interval:2,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"ATK",success_rate:1,effect_amount:.4,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/assassin/dark_crescent.gif",anime_time:1100}]},{skill_id:703,name:"Momentary Slash",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:2,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/momentary_slash.gif",anime_time:800}]},{skill_id:704,name:"Rapid Slash",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:5,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/rapid_slash.gif",anime_time:900}]},{skill_id:705,name:"Dark Cross",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:10,interval:1,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/dark_cross.gif",anime_time:800}]},{skill_id:706,name:"High Speed Slash",use:1,info:"A furious weapons blows attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:10,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/assassin/high_speed_slash.gif",anime_time:1600}]}];class Rh{constructor(e){Re(this,"skill_id");Re(this,"name");Re(this,"use");Re(this,"info");Re(this,"attribute");Re(this,"interval");Re(this,"consume_type");Re(this,"consume_amount");Re(this,"effect_number");Re(this,"skill_effect");this.skill_id=e.skill_id,this.name=e.name,this.use=e.use,this.info=e.info,this.attribute=e.attribute,this.interval=e.interval,this.consume_type=e.consume_type,this.consume_amount=e.consume_amount,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect}}const Ph=Vg.map(n=>new Rh(n));class ln{constructor(e,t){Re(this,"cha_id");Re(this,"name");Re(this,"class");Re(this,"faceGraphicUrl");Re(this,"poseGraphicUrl");Re(this,"backgroundUrl");Re(this,"LV");Re(this,"exp");Re(this,"nextLvExp");Re(this,"baseStatus");Re(this,"equipment");Re(this,"totalStatus");Re(this,"buffs",[]);Re(this,"conditions",[]);Re(this,"nowHP");Re(this,"nowMP");Re(this,"activeSkill");Re(this,"passiveCost");Re(this,"passiveSkill");this.cha_id=e.cha_id,this.name=e.name,this.class=e.class,this.faceGraphicUrl=e.faceGraphicUrl,this.poseGraphicUrl=e.poseGraphicUrl,this.backgroundUrl=e.backgroundUrl,this.LV=e.LV,this.exp=e.exp,this.nextLvExp=e.nextLvExp,this.baseStatus={HP:e.HP,MP:e.MP,ATK:e.ATK,MGC:e.MGC,DEF:e.DEF,MDF:e.MDF,DEX:e.DEX,SPD:e.SPD,HitRate:0,CritRate:0,Hate:1-t*.1,Slash:e.Slash,Stab:e.Stab,Hit:e.Hit,Fire:e.Fire,Water:e.Water,Earth:e.Earth,Wind:e.Wind,Light:e.Light,Dark:e.Dark},this.equipment={WEP:vr.find(i=>i.eqp_id===e.equipment.WEP)??null,ARM:vr.find(i=>i.eqp_id===e.equipment.ARM)??null,ACC:vr.find(i=>i.eqp_id===e.equipment.ACC)??null},this.totalStatus=this.calculateTotalStatus(),this.nowHP=this.totalStatus.HP,this.nowMP=this.totalStatus.MP,this.activeSkill=e.activeSkill.map(i=>Ph.find(s=>s.skill_id===i)),this.passiveCost=e.passiveCost,this.passiveSkill=e.passiveSkill.map(i=>{const s=Ch.find(a=>a.skill_id===i);let r;return s&&(r=new wh(s),r.equip=e.equipSkill.includes(i)),r}).filter(i=>i!==void 0)}changeEquipment(e,t){this.equipment[e]=t,this.totalStatus=this.calculateTotalStatus()}calculateTotalStatus(){let e={...this.baseStatus};for(let t in this.equipment){let i=this.equipment[t];if(i)for(let s in i.status)e[s]+=i.status[s]}e.HitRate=this.calculateHitRate(e.DEX),e.CritRate=Math.floor(e.DEX/8);for(let t of this.buffs.values())e[t.status]+=t.value;return e}calculateHitRate(e){var i,s;return((i=this.equipment.WEP)!=null&&i.status.HitRate?(s=this.equipment.WEP)==null?void 0:s.status.HitRate:v.initHitRate)+Math.floor(e/10)}updateHate(e){this.baseStatus.Hate=1-e*.1,this.totalStatus=this.calculateTotalStatus()}addBuff(e,t,i,s){const r=this.buffs.findIndex(a=>a.name===e&&a.status===t);r!==-1?(this.buffs[r].value=i,this.buffs[r].duration=s):this.buffs.push({name:e,status:t,value:i,duration:s})}removeBuff(e,t){this.buffs=this.buffs.filter(i=>!(i.name===e&&i.status===t))}updateBuffs(){this.buffs=this.buffs.map(e=>(e.duration--,e.duration<=0?null:e)).filter(e=>e!==null),this.totalStatus=this.calculateTotalStatus()}addCondition(e,t,i,s){const r=this.conditions.findIndex(a=>a.name===e&&a.status===t);r!==-1?(this.conditions[r].value=i,this.conditions[r].duration=s):this.conditions.push({name:e,status:t,value:i,duration:s})}removeCondition(e,t){this.conditions=this.conditions.filter(i=>!(i.name===e&&i.status===t))}updateConditions(){this.conditions=this.conditions.map(e=>(e.duration--,e.duration<=0?null:e)).filter(e=>e!==null)}}const lc=Bg.map((n,e)=>new ln(n,e)),Lh=n=>(Bn("data-v-194a8221"),n=n(),Hn(),n),Wg={key:0,class:"CharaCardUI"},$g={class:"line1"},qg={class:"name"},Xg={class:"leftItem"},Yg=Lh(()=>P("span",{class:"statuskinds"},"LV ",-1)),jg={class:"line2"},Kg=Lh(()=>P("span",{class:"statuskinds"},"CLASS",-1)),Zg={class:"leftItem"},Jg=Ye({__name:"CharaCard",props:{character:{type:ln}},setup(n){return(e,t)=>n.character?(Q(),de("div",Wg,[P("div",$g,[P("span",qg,be(n.character.name),1),P("span",Xg,[Yg,P("span",null,be(n.character.LV),1)])]),P("div",jg,[Kg,P("span",Zg,be(n.character.class),1)])])):$e("",!0)}}),Dh=Ze(Jg,[["__scopeId","data-v-194a8221"]]),Qg={class:"progress-bar-hp"},e0=["value","max"],t0={class:"nowHP"},n0=Ye({__name:"ProgressBarHp",props:{nowHP:{type:Number},maxHP:{type:Number}},setup(n){return(e,t)=>(Q(),de("div",Qg,[P("progress",{class:"progress-hp",value:n.nowHP,max:n.maxHP},null,8,e0),P("span",t0,be(n.nowHP)+"/"+be(n.maxHP),1)]))}}),no=Ze(n0,[["__scopeId","data-v-48f5d701"]]),i0={class:"progress-bar-mp"},s0=["value","max"],r0={class:"nowMP"},a0=Ye({__name:"ProgressBarMp",props:{nowMP:{type:Number},maxMP:{type:Number}},setup(n){return(e,t)=>(Q(),de("div",i0,[P("progress",{class:"progress-mp",value:n.nowMP,max:n.maxMP},null,8,s0),P("span",r0,be(n.nowMP)+"/"+be(n.maxMP),1)]))}}),cc=Ze(a0,[["__scopeId","data-v-2ef7ebd3"]]),o0=n=>(Bn("data-v-75494c40"),n=n(),Hn(),n),l0=["value","max"],c0=o0(()=>P("span",{class:"next"},"NEXT",-1)),u0={class:"nextExp"},f0=Ye({__name:"ProgressBarExp",props:{exp:{type:Number},next:{type:Number}},setup(n){return(e,t)=>(Q(),de(ut,null,[P("progress",{class:"progress-exp",value:n.exp,max:n.next},null,8,l0),c0,P("span",u0,be(n.next-n.exp),1)],64))}}),Ih=Ze(f0,[["__scopeId","data-v-75494c40"]]),xn=n=>(Bn("data-v-fc6a87ea"),n=n(),Hn(),n),d0={key:0,class:"CharaStatusUI"},h0={class:"hpline"},p0=xn(()=>P("span",{class:"statuskinds"},"HP",-1)),m0={class:"progress-bar"},_0={class:"mpline"},g0=xn(()=>P("span",{class:"statuskinds"},"MP",-1)),v0={class:"progress-bar"},M0={class:"expline"},x0=xn(()=>P("span",{class:"statuskinds"},"EXP",-1)),S0={class:"progress-bar-exp"},y0={class:"atkline"},E0={class:"leftItem"},b0=xn(()=>P("span",{class:"statuskinds"},"ATK",-1)),T0={class:"statusValue"},A0={class:"rightItem"},w0=xn(()=>P("span",{class:"statuskinds"},"MGC",-1)),C0={class:"statusValue"},R0={class:"defline"},P0={class:"leftItem"},L0=xn(()=>P("span",{class:"statuskinds"},"DEF",-1)),D0={class:"statusValue"},I0={class:"rightItem"},U0=xn(()=>P("span",{class:"statuskinds"},"MDF",-1)),F0={class:"statusValue"},k0={class:"dexline"},N0={class:"leftItem"},O0=xn(()=>P("span",{class:"statuskinds"},"DEX",-1)),B0={class:"statusValue"},H0={class:"rightItem"},z0=xn(()=>P("span",{class:"statuskinds"},"SPD",-1)),G0={class:"statusValue"},V0={class:"wepline"},W0=xn(()=>P("span",{class:"statuskinds"},"WEP",-1)),$0={class:"equipName"},q0={class:"armline"},X0=xn(()=>P("span",{class:"statuskinds"},"ARM",-1)),Y0={class:"equipName"},j0={class:"accline"},K0=xn(()=>P("span",{class:"statuskinds"},"ACC",-1)),Z0={class:"equipName"},J0={class:"passiveSkill"},Q0=xn(()=>P("div",{class:"statuskinds"},"PASSIVE SKILL",-1)),ev={class:"skillList",density:"compact"},tv={key:0},nv=Ye({__name:"CharaStatus",props:{character:{type:ln}},setup(n){return(e,t)=>{var i,s,r;return n.character?(Q(),de("div",d0,[P("div",h0,[p0,P("span",m0,[Pe(no,{nowHP:n.character.nowHP,maxHP:n.character.totalStatus.HP},null,8,["nowHP","maxHP"])])]),P("div",_0,[g0,P("span",v0,[Pe(cc,{nowMP:n.character.nowMP,maxMP:n.character.totalStatus.MP},null,8,["nowMP","maxMP"])])]),P("div",M0,[x0,P("span",S0,[Pe(Ih,{exp:n.character.exp,next:n.character.nextLvExp},null,8,["exp","next"])])]),P("div",y0,[P("span",E0,[b0,P("span",T0,be(n.character.totalStatus.ATK),1)]),P("span",A0,[w0,P("span",C0,be(n.character.totalStatus.MGC),1)])]),P("div",R0,[P("span",P0,[L0,P("span",D0,be(n.character.totalStatus.DEF),1)]),P("span",I0,[U0,P("span",F0,be(n.character.totalStatus.MDF),1)])]),P("div",k0,[P("span",N0,[O0,P("span",B0,be(n.character.totalStatus.DEX),1)]),P("span",H0,[z0,P("span",G0,be(n.character.totalStatus.SPD),1)])]),P("div",V0,[W0,P("span",$0,be((i=n.character.equipment.WEP)==null?void 0:i.name),1)]),P("div",q0,[X0,P("span",Y0,be((s=n.character.equipment.ARM)==null?void 0:s.name),1)]),P("div",j0,[K0,P("span",Z0,be((r=n.character.equipment.ACC)==null?void 0:r.name),1)]),P("div",J0,[Q0,P("ul",ev,[(Q(!0),de(ut,null,Vt(n.character.passiveSkill,a=>(Q(),de("li",{key:a.skill_id,class:"skillItem"},[a.equip===!0?(Q(),de("span",tv,be(a.name),1)):$e("",!0)]))),128))])])])):$e("",!0)}}}),iv=Ze(nv,[["__scopeId","data-v-fc6a87ea"]]),sv="/app2/icon/slash.png",rv="/app2/icon/stab.png",av="/app2/icon/hit.png",ov="/app2/icon/fire.png",lv="/app2/icon/water.png",cv="/app2/icon/earth.png",uv="/app2/icon/wind.png",fv="/app2/icon/light.png",dv="/app2/icon/dark.png",hv=n=>(Bn("data-v-d1f1001b"),n=n(),Hn(),n),pv={key:0,class:"CharaStatusUI"},mv=hv(()=>P("div",{class:"statuskinds"},"RESISTANCE",-1)),_v={class:"slashline"},gv={class:"leftItem"},vv=["src"],Mv={class:"elementValue"},xv={class:"rightItem"},Sv=["src"],yv={class:"elementValue"},Ev={class:"hitline"},bv={class:"leftItem"},Tv=["src"],Av={class:"elementValue"},wv={class:"fireline"},Cv={class:"leftItem"},Rv=["src"],Pv={class:"elementValue"},Lv={class:"rightItem"},Dv=["src"],Iv={class:"elementValue"},Uv={class:"earthline"},Fv={class:"leftItem"},kv=["src"],Nv={class:"elementValue"},Ov={class:"rightItem"},Bv=["src"],Hv={class:"elementValue"},zv={class:"lightline"},Gv={class:"leftItem"},Vv=["src"],Wv={class:"elementValue"},$v={class:"rightItem"},qv=["src"],Xv={class:"elementValue"},Yv=Ye({__name:"CharaSubStatus",props:{character:{type:ln}},setup(n){return(e,t)=>n.character?(Q(),de("div",pv,[mv,P("div",_v,[P("span",gv,[P("img",{class:"Icon",src:K(sv),alt:"Slash"},null,8,vv),P("span",Mv,be(n.character.totalStatus.Slash),1)]),P("span",xv,[P("img",{class:"Icon",src:K(rv),alt:"Water"},null,8,Sv),P("span",yv,be(n.character.totalStatus.Stab),1)])]),P("div",Ev,[P("span",bv,[P("img",{class:"Icon",src:K(av),alt:"Hit"},null,8,Tv),P("span",Av,be(n.character.totalStatus.Hit),1)])]),P("div",wv,[P("span",Cv,[P("img",{class:"Icon",src:K(ov),alt:"Fire"},null,8,Rv),P("span",Pv,be(n.character.totalStatus.Fire),1)]),P("span",Lv,[P("img",{class:"Icon",src:K(lv),alt:"Water"},null,8,Dv),P("span",Iv,be(n.character.totalStatus.Water),1)])]),P("div",Uv,[P("span",Fv,[P("img",{class:"Icon",src:K(cv),alt:"Earth"},null,8,kv),P("span",Nv,be(n.character.totalStatus.Earth),1)]),P("span",Ov,[P("img",{class:"Icon",src:K(uv),alt:"Wind"},null,8,Bv),P("span",Hv,be(n.character.totalStatus.Wind),1)])]),P("div",zv,[P("span",Gv,[P("img",{class:"Icon",src:K(fv),alt:"Light"},null,8,Vv),P("span",Wv,be(n.character.totalStatus.Light),1)]),P("span",$v,[P("img",{class:"Icon",src:K(dv),alt:"Dark"},null,8,qv),P("span",Xv,be(n.character.totalStatus.Dark),1)])])])):$e("",!0)}}),jv=Ze(Yv,[["__scopeId","data-v-d1f1001b"]]),Kv=[{eqpbag_id:1,eqp_id:103,type:"WEP",equippedBy:1},{eqpbag_id:2,eqp_id:1003,type:"ARM",equippedBy:1},{eqpbag_id:3,eqp_id:2001,type:"ACC",equippedBy:1},{eqpbag_id:4,eqp_id:101,type:"WEP",equippedBy:2},{eqpbag_id:5,eqp_id:1002,type:"ARM",equippedBy:2},{eqpbag_id:6,eqp_id:2101,type:"ACC",equippedBy:2},{eqpbag_id:7,eqp_id:501,type:"WEP",equippedBy:3},{eqpbag_id:8,eqp_id:1201,type:"ARM",equippedBy:3},{eqpbag_id:9,eqp_id:2201,type:"ACC",equippedBy:3},{eqpbag_id:10,eqp_id:401,type:"WEP",equippedBy:4},{eqpbag_id:11,eqp_id:1301,type:"ARM",equippedBy:4},{eqpbag_id:12,eqp_id:2001,type:"ACC",equippedBy:4},{eqpbag_id:13,eqp_id:601,type:"WEP",equippedBy:5},{eqpbag_id:14,eqp_id:1001,type:"ARM",equippedBy:5},{eqpbag_id:15,eqp_id:2101,type:"ACC",equippedBy:5},{eqpbag_id:16,eqp_id:502,type:"WEP",equippedBy:6},{eqpbag_id:17,eqp_id:1201,type:"ARM",equippedBy:6},{eqpbag_id:18,eqp_id:2301,type:"ACC",equippedBy:6},{eqpbag_id:19,eqp_id:201,type:"WEP",equippedBy:7},{eqpbag_id:20,eqp_id:1301,type:"ARM",equippedBy:7},{eqpbag_id:21,eqp_id:2001,type:"ACC",equippedBy:7},{eqpbag_id:22,eqp_id:102,type:"WEP",equippedBy:null},{eqpbag_id:23,eqp_id:110,type:"WEP",equippedBy:null},{eqpbag_id:24,eqp_id:301,type:"WEP",equippedBy:null},{eqpbag_id:25,eqp_id:402,type:"WEP",equippedBy:null},{eqpbag_id:26,eqp_id:510,type:"WEP",equippedBy:null},{eqpbag_id:27,eqp_id:1020,type:"ARM",equippedBy:null},{eqpbag_id:28,eqp_id:1101,type:"ARM",equippedBy:null},{eqpbag_id:29,eqp_id:1110,type:"ARM",equippedBy:null},{eqpbag_id:30,eqp_id:1210,type:"ARM",equippedBy:null},{eqpbag_id:31,eqp_id:1321,type:"ARM",equippedBy:null},{eqpbag_id:32,eqp_id:2151,type:"ACC",equippedBy:null},{eqpbag_id:33,eqp_id:2451,type:"ACC",equippedBy:null},{eqpbag_id:34,eqp_id:2551,type:"ACC",equippedBy:null}],Uh=ki("equipBag",{state:()=>({equipmentType:{},equipmentItem:{}}),actions:{setEquipBag(){for(let n of Kv)this.addEquipment(n.eqpbag_id,n.eqp_id,n.type,n.equippedBy)},addEquipment(n,e,t,i){this.equipmentType[t]||(this.equipmentType[t]=[]);const s={eqpbag_id:n,eqp_id:e,type:t,equippedBy:i};this.equipmentType[t].push(s),this.equipmentItem[n]=s},removeEquipment(n){if(!this.equipmentItem[n])throw new Error(`装備 ${n} は存在しません。`);delete this.equipmentItem[n]},getEquipmentByType(n){return this.equipmentType[n]||[]},equipEquipment(n,e){const t=this.equipmentItem[n];if(!t)throw new Error(`装備 ${n} は存在しません。`);t.equippedBy=e,this.equipmentItem[n]=t},unequipOldEquipment(n,e){const t=this.equipmentType[n].find(i=>i.equippedBy===e);if(!t)throw new Error(`装備 ${n} ${e} は存在しません。`);t.equippedBy=null}}}),Fh=n=>(Bn("data-v-5268adc1"),n=n(),Hn(),n),Zv={key:0,class:"EquipmentUI"},Jv={class:"EquipmentTab"},Qv=["onClick"],eM=Fh(()=>P("div",{class:"underLine"},null,-1)),tM={key:0},nM={class:"EquipmentTypeList",density:"compact"},iM=["onClick"],sM=["src"],rM={key:1,class:"faceFlame"},aM={class:"itemName"},oM={key:2,class:"buttonPosition"},lM=["onClick"],cM=Fh(()=>P("div",{class:"underLine"},null,-1)),uM={key:0,class:"equipment-status"},fM={class:"status-key"},dM={class:"status-value"},hM=Ye({__name:"Equipment",props:{character:{type:ln}},setup(n){const e=n,t=Uh(),i=["WEP","ARM","ACC"],s=ge("WEP"),r=g=>{s.value=g,l.value=null,o.value=null},a=Dt(()=>{var g;return(g=e.character)==null?void 0:g.equipment[s.value]}),o=ge(null),l=ge(null),c=(g,m,h)=>{const w=vr.find(y=>y.eqp_id===g&&y.type===m);w&&(o.value=w,l.value=h)},u=g=>lc.find(m=>m.cha_id===g),f=g=>{const m=vr.find(h=>h.eqp_id===g);return m?m.name:null},d=g=>{var m;return((m=e.character)==null?void 0:m.cha_id)==g?"Unequip":"Equip"},p=Dt(()=>{var h;if(!o.value)return;const g={};let m;for(const w in o.value.status)m=o.value.status[w]-(((h=a.value)==null?void 0:h.status[w])||0),g[w]=m>0?"+"+String(m):String(m);return g}),_=(g,m)=>{var w,y,E;let h=e.character.cha_id;m===h?(t.equipEquipment(g,null),(w=e.character)==null||w.changeEquipment(s.value,null)):(a.value&&t.unequipOldEquipment(s.value,h),m!==null&&((y=u(m))==null||y.changeEquipment(s.value,null),console.log(u(m))),t.equipEquipment(g,h),(E=e.character)==null||E.changeEquipment(s.value,o.value)),console.log(t),console.log(e.character)};return(g,m)=>n.character?(Q(),de("div",Zv,[P("ul",Jv,[(Q(),de(ut,null,Vt(i,h=>P("li",{key:h,onClick:w=>r(h),class:It([{"selected-tab":h===s.value},"EquipmentTabItem"])},be(h),11,Qv)),64))]),eM,s.value?(Q(),de("div",tM,[P("ul",nM,[(Q(!0),de(ut,null,Vt(K(t).equipmentType[s.value],h=>{var w;return Q(),de("li",{key:h.eqpbag_id,onClick:y=>c(h.eqp_id,s.value,h.eqpbag_id),class:It(["EquipmentItem",{"selected-tab":o.value&&h.eqpbag_id===l.value}])},[h.equippedBy!==null?(Q(),de("img",{key:0,class:"smallface",src:(w=u(h.equippedBy))==null?void 0:w.faceGraphicUrl,alt:"Character face"},null,8,sM)):(Q(),de("span",rM)),P("span",aM,be(f(h.eqp_id)),1),o.value&&h.eqpbag_id===l.value?(Q(),de("span",oM,[P("span",{class:It(["button-equip",{equip:n.character.cha_id!=h.equippedBy,unequip:n.character.cha_id==h.equippedBy}]),onClick:y=>_(h.eqpbag_id,h.equippedBy)},be(d(h.equippedBy)),11,lM)])):$e("",!0)],10,iM)}),128))]),cM,o.value?(Q(),de("div",uM,[p.value!==void 0?(Q(!0),de(ut,{key:0},Vt(o.value.status,(h,w)=>(Q(),de("div",{class:"status",key:w},[P("span",fM,be(w),1),P("span",dM,be(h),1),P("span",{class:It(["status-diff",{colorblue:Number(p.value[w])>=0,colorred:Number(p.value[w])<0}])},be(p.value[w]),3)]))),128)):$e("",!0)])):$e("",!0)])):$e("",!0)])):$e("",!0)}}),pM=Ze(hM,[["__scopeId","data-v-5268adc1"]]),mM={class:"skillInfo"},_M=Ye({__name:"SkillInfo",props:{skillInfo:{type:String}},setup(n){return(e,t)=>(Q(),de("div",mM,be(n.skillInfo),1))}}),uc=Ze(_M,[["__scopeId","data-v-ad3c27c7"]]),gM={class:"information"},vM={class:"message"},MM=Ye({__name:"Information",props:{message:{type:String,default:null}},emits:["hideError"],setup(n,{emit:e}){const t=e;return(i,s)=>(Q(),de("div",{class:"modal",onClick:s[0]||(s[0]=r=>t("hideError"))},[P("div",gM,[P("div",vM,be(n.message),1)])]))}}),fc=Ze(MM,[["__scopeId","data-v-fbb86de4"]]),dc=n=>(Bn("data-v-c1052c8f"),n=n(),Hn(),n),xM={key:0,class:"SkillUI"},SM={class:"skillSelect"},yM={class:"skillType"},EM={key:0},bM=["onClick"],TM=dc(()=>P("div",{class:"underLine"},null,-1)),AM={key:0},wM={class:"skillList",density:"compact"},CM=["onClick"],RM={key:0,class:"statuskinds"},PM={key:1,class:"marginEquip"},LM={class:"marginLeft05"},DM={class:"costValue"},IM={key:2,class:"buttonPosition"},UM=["onClick"],FM={class:"totalCost"},kM=dc(()=>P("span",{class:"statuskinds"},"TOTAL COST",-1)),NM={class:"costValue"},OM={class:"totalCost"},BM=dc(()=>P("span",{class:"statuskinds"},"SKILL COST CAP",-1)),HM={class:"costValue"},zM={key:1},GM={class:"skillList",density:"compact"},VM=["onClick"],WM={class:"marginLeft1"},$M={class:"costValue"},qM={class:"consumeType"},XM=Ye({__name:"Skill",props:{character:{type:ln},processBattle:{type:Boolean}},emits:["useSkill"],setup(n,{emit:e}){const t=n,i=["PASSIVE","ACTIVE"],s=ge(!1),r=v.msgSkillCostError,a=ge(void 0);t.processBattle==!0?a.value="ACTIVE":a.value="PASSIVE";const o=h=>{a.value=h,l.value=null},l=ge(null),c=h=>{t.processBattle&&h instanceof Rh&&l.value==h&&_(h),l.value=h},u=h=>h?"Unequip":"Equip",f=ge(0),d=h=>{t.character&&(f.value=t.character.passiveSkill.filter(w=>w.equip).reduce((w,y)=>w+y.skill_cost,0),h.equip?h.equip=!1:Number(f.value)+h.skill_cost>t.character.passiveCost?s.value=!0:h.equip=!0)},p=e,_=h=>{p("useSkill",h)},g=()=>{s.value=!1},m=ge(void 0);return bt(()=>t.character,()=>{t.character!==m.value&&(l.value=null),m.value=t.character}),(h,w)=>n.character?(Q(),de("div",xM,[P("div",SM,[P("ul",yM,[n.processBattle?(Q(),de("li",EM,be("ACTIVE"),1)):(Q(),de(ut,{key:1},Vt(i,y=>P("li",{key:y,onClick:E=>o(y),class:It({"selected-tab":y===a.value})},be(y),11,bM)),64))]),TM,a.value=="PASSIVE"?(Q(),de("div",AM,[P("ul",wM,[(Q(!0),de(ut,null,Vt(n.character.passiveSkill,y=>(Q(),de("li",{key:y.skill_id,onClick:E=>c(y),class:It(["skillItem",{"selected-tab":y===l.value}])},[y.equip===!0?(Q(),de("span",RM,"E")):(Q(),de("span",PM)),P("span",LM,be(y.name),1),P("span",DM,be(y.skill_cost),1),y===l.value?(Q(),de("span",IM,[P("span",{onClick:E=>d(y),class:It(["button-equip",{equip:y.equip==!1,unequip:y.equip==!0}])},be(u(y.equip)),11,UM)])):$e("",!0)],10,CM))),128)),P("li",FM,[kM,P("span",NM,be(n.character.passiveSkill.filter(y=>y.equip).reduce((y,E)=>y+E.skill_cost,0)),1)]),P("li",OM,[BM,P("span",HM,be(n.character.passiveCost),1)])])])):$e("",!0),At(Pe(fc,{message:K(r),onHideError:g},null,8,["message"]),[[wt,s.value]]),a.value=="ACTIVE"?(Q(),de("div",zM,[P("ul",GM,[(Q(!0),de(ut,null,Vt(n.character.activeSkill,y=>(Q(),de("li",{key:y.skill_id,onClick:E=>c(y),class:It(["skillItem",{"selected-tab":y===l.value}])},[P("span",WM,be(y.name),1),P("span",$M,be(y.consume_amount),1),P("span",qM,be(y.consume_type),1)],10,VM))),128))])])):$e("",!0)]),l.value?(Q(),St(uc,{key:0,class:"skillInfo",skillInfo:l.value.info},null,8,["skillInfo"])):$e("",!0)])):$e("",!0)}}),kh=Ze(XM,[["__scopeId","data-v-c1052c8f"]]),YM={key:0,class:"first"},jM={key:1,class:"second"},KM=Ye({__name:"SwitchBtn",props:{switchWord:{type:Array}},setup(n){const e=ge(!0),t=()=>{e.value=!e.value};return(i,s)=>(Q(),de("div",{class:"outline",onClick:t},[e.value?(Q(),de("span",YM,be(n.switchWord[0]),1)):(Q(),de("span",jM,be(n.switchWord[1]),1))]))}}),gu=Ze(KM,[["__scopeId","data-v-187355c5"]]),ZM="/app2/icon/arrow-left.png",JM=["src"],QM=Ye({__name:"IconLeft",setup(n){return(e,t)=>(Q(),de("img",{class:"Icon",src:K(ZM),alt:"Left"},null,8,JM))}}),ex=Ze(QM,[["__scopeId","data-v-18105755"]]),tx="/app2/icon/arrow-right.png",nx=["src"],ix=Ye({__name:"IconRight",setup(n){return(e,t)=>(Q(),de("img",{class:"Icon",src:K(tx),alt:"Right"},null,8,nx))}}),sx=Ze(ix,[["__scopeId","data-v-ccc46121"]]),rx={class:"btnFlame"},ax=Ye({__name:"BlueBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(Q(),de("div",rx,be(n.inside),1))}}),ox=Ze(ax,[["__scopeId","data-v-99a5fe5b"]]),lx={class:"btnFlame"},cx=Ye({__name:"RedBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(Q(),de("div",lx,be(n.inside),1))}}),ux=Ze(cx,[["__scopeId","data-v-24ab0359"]]),fx={class:"modal"},dx={class:"confirmation"},hx={class:"message"},px=Ye({__name:"Confirmation",props:{message:{type:String}},emits:["confirmationResponse"],setup(n,{emit:e}){const t=s=>{i("confirmationResponse",s)},i=e;return(s,r)=>(Q(),de("div",fx,[P("div",dx,[P("div",hx,be(n.message),1),Pe(ox,{class:"YesBtn",inside:K(v).textYes,onClick:r[0]||(r[0]=a=>t(K(v).textYes))},null,8,["inside"]),Pe(ux,{class:"NoBtn",inside:K(v).textNo,onClick:r[1]||(r[1]=a=>t(K(v).textNo))},null,8,["inside"])])]))}}),hc=Ze(px,[["__scopeId","data-v-46322d58"]]),en=(n,e)=>Math.floor(Math.random()*(e-n)+n),To=n=>Math.floor(Math.random()*n),mi=n=>new Promise(e=>setTimeout(e,n)),mt=Array(v.MapHeight).fill(v.MapWall).map(()=>Array(v.MapWidth).fill(v.MapWall)),dr=Array(v.MapHeight).fill(0).map(()=>Array(v.MapWidth).fill(0)),Ia={X:0,Y:0};function mx(){let n=[],e=en(v.RoomCountMin,v.RoomCountMax),t=new Array(v.meetPointCount).fill(0),i=new Array(v.meetPointCount).fill(0);for(let s=0;s<t.length;s++)t[s]=en(v.MapWidth/4,v.MapWidth*3/4),i[s]=en(v.MapHeight/4,v.MapHeight*3/4),mt[i[s]][t[s]]=v.MapRoad;for(let s=0;s<e;s++){const r={Height:en(v.roomMinHeight,v.roomMaxHeight),Width:en(v.roomMinWidth,v.roomMaxWidth),PointX:en(2,v.MapWidth-v.roomMaxWidth-2),PointY:en(2,v.MapHeight-v.roomMaxHeight-2),Overlap:!1};r.Overlap=gx(r.Height,r.Width,r.PointX,r.PointY),n.push(r)}for(let s=0;s<e;s++)if(n[s].Overlap==!1){let r=en(n[s].PointX,n[s].PointX+n[s].Width),a=en(n[s].PointY,n[s].PointY+n[s].Height);s==0&&(Ia.X=r,Ia.Y=a),vx(r,a,t[en(0,t.length-1)],i[en(0,i.length-1)])}for(let s=0;s<mt.length;s++)for(let r=0;r<mt[s].length;r++)mt[s][r]==v.MapRoad&&_x(s,r)}function _x(n,e){si(n,e-1)&&si(n,e+1)&&(yn(n-1,e)&&(yn(n-1,e-1)||yn(n-1,e+1))&&(dr[n][e]=v.SetDoorUp),yn(n+1,e)&&(yn(n+1,e-1)||yn(n+1,e+1))&&(dr[n][e]=v.SetDoorUnder)),si(n-1,e)&&si(n+1,e)&&(yn(n,e-1)&&(yn(n-1,e-1)||yn(n+1,e-1))&&(dr[n][e]=v.SetDoorLeft),yn(n,e+1)&&(yn(n-1,e+1)||yn(n+1,e+1))&&(dr[n][e]=v.SetDoorRight))}function si(n,e){return n>=0&&n<mt.length&&e>=0&&e<mt[0].length&&mt[n][e]==v.MapWall}function yn(n,e){return n>=0&&n<mt.length&&e>=0&&e<mt[0].length&&mt[n][e]==v.MapRoom}function gx(n,e,t,i){let s=!1;for(let r=0;r<n;r++)for(let a=0;a<e;a++)mt[i+r][t+a]==v.MapRoom?s=!0:mt[i+r][t+a]=v.MapRoom;return s}function vx(n,e,t,i){let s=n>t,r=e<=i;if(Math.floor(Math.random()*2)==0){for(;n!=t;)a(1);for(;e!=i;)a(2)}else{for(;e!=i;)a(2);for(;n!=t;)a(1)}function a(o){mt[e][n]==v.MapWall&&(mt[e][n]=v.MapRoad),o==1?n=s?n-1:n+1:e=r?e+1:e-1}}let Yr={characters:[1,5,6,3],gold:1e5,location:[570,180],home:[500,200]};const ui=ki("party",{state:()=>({characters:[],gold:Yr.gold,location:Yr.location,home:Yr.location,map:[]}),actions:{setParty(){this.characters=lc.filter(n=>Yr.characters.includes(n.cha_id)),this.map=mt}}}),fi=ki("showUI",{state:()=>({map:!0,current:!0,party:!1,character:!1,item:!1,message:!1,errorMessage:!1})}),Mx=["src"],xx=Ye({__name:"Character",props:{index:{type:Number},character:{type:ln}},emits:["changeCharacter"],setup(n,{emit:e}){const t=zn(),i=ui(),s=fi(),r=n,a=ge(0),o=ge(void 0),l=ge(!0),c=["MAIN","SUB"],u=()=>{l.value=!l.value},f=ge(!0),d=["EQUIP","SKILL"],p=()=>{f.value=!f.value},_=e,g=D=>{_("changeCharacter",D)};function m(){g("next")}function h(){g("back")}let w,y;function E(){if(t.guildMenu==v.menuAddMember){if(i.characters.length==4){y=v.msgAddPartyError,s.errorMessage=!0;return}w=v.msgAddParty1+o.value.name+v.msgAddParty2,s.message=!0}}const C=D=>{s.message=!1,D==v.textYes&&(i.characters.push(o.value),s.character=!1)},k=()=>{s.errorMessage=!1};return bt(()=>r.index,()=>{r.index&&(a.value=r.index)}),bt(()=>r.character,()=>{r.character&&(o.value=r.character)}),(D,B)=>o.value?(Q(),de("div",{key:0,class:"CharacterUI",style:Tn({backgroundImage:"url("+o.value.backgroundUrl+")"})},[P("div",{class:"imageFlame",onClick:E},[P("img",{class:"charaimage",src:o.value.poseGraphicUrl,alt:""},null,8,Mx)]),Pe(Dh,{class:"CharaCardUI",character:o.value},null,8,["character"]),l.value?(Q(),St(iv,{key:0,class:"CharaStatusUI",character:o.value},null,8,["character"])):(Q(),St(jv,{key:1,class:"CharaSubStatusUI",character:o.value},null,8,["character"])),Pe(gu,{class:"ChangeStatus",onClick:u,switchWord:c}),f.value?(Q(),St(pM,{key:2,class:"EquipmentUI",character:o.value},null,8,["character"])):(Q(),St(kh,{key:3,class:"SkillUI",character:o.value},null,8,["character"])),Pe(gu,{class:"ChangeSkill",onClick:p,switchWord:d}),Pe(ex,{class:"IconCharaBack",onClick:h}),Pe(sx,{class:"IconCharaNext",onClick:m}),At(Pe(hc,{message:K(w),onConfirmationResponse:C},null,8,["message"]),[[wt,K(s).message]]),At(Pe(fc,{message:K(y),onHideError:k},null,8,["message"]),[[wt,K(s).errorMessage]])],4)):$e("",!0)}}),Nh=Ze(xx,[["__scopeId","data-v-c2eb9bca"]]),Sx={class:"AddMember"},yx=["onClick"],Ex=["src"],bx=Ye({__name:"AddMember",setup(n){const e=ui(),t=fi(),i=Dt(()=>lc.filter(l=>!e.characters.some(c=>c.cha_id===l.cha_id))),s=ge(void 0),r=ge(void 0);function a(l,c){s.value=l,r.value=c,t.character=!0}const o=l=>{l=="next"?(s.value=s.value==i.value.length-1?0:s.value+1,r.value=i.value[s.value]):(s.value=s.value==0?i.value.length-1:s.value-1,r.value=i.value[s.value])};return(l,c)=>(Q(),de("div",Sx,[At(Pe(K(Ig),{"items-to-show":3,"wrap-around":!0},{addons:pr(()=>[Pe(K(kg)),Pe(K(Ng))]),default:pr(()=>[(Q(!0),de(ut,null,Vt(i.value,(u,f)=>(Q(),St(K(Og),{key:f},{default:pr(()=>[P("div",{class:"carousel__item",onClick:d=>a(f,u)},[Pe(Dh,{class:"CharaCardUI",character:u},null,8,["character"]),P("img",{class:"chara-image",src:u.poseGraphicUrl,alt:""},null,8,Ex)],8,yx)]),_:2},1024))),128))]),_:1},512),[[wt,!K(t).character]]),At(Pe(Nh,{character:r.value,index:s.value,onChangeCharacter:o},null,8,["character","index"]),[[wt,K(t).character]])]))}}),Tx=Ze(bx,[["__scopeId","data-v-0a4310ec"]]),Rn=n=>(Bn("data-v-396d7fd0"),n=n(),Hn(),n),Ax={key:0,class:"StatusUI"},wx={class:"nameline"},Cx={class:"name"},Rx={class:"level"},Px=Rn(()=>P("span",{class:"statuskinds"},"LV ",-1)),Lx={class:"hpline"},Dx=Rn(()=>P("span",{class:"statuskinds"},"HP",-1)),Ix={class:"progress-bar"},Ux={class:"mpline"},Fx=Rn(()=>P("span",{class:"statuskinds"},"MP",-1)),kx={class:"progress-bar"},Nx={class:"atkline"},Ox={class:"leftItem"},Bx=Rn(()=>P("span",{class:"statuskinds"},"ATK",-1)),Hx={class:"itemValue"},zx={class:"rightItem"},Gx=Rn(()=>P("span",{class:"statuskinds"},"MGC",-1)),Vx={class:"itemValue"},Wx={class:"defline"},$x={class:"leftItem"},qx=Rn(()=>P("span",{class:"statuskinds"},"DEF",-1)),Xx={class:"itemValue"},Yx={class:"rightItem"},jx=Rn(()=>P("span",{class:"statuskinds"},"MDF",-1)),Kx={class:"itemValue"},Zx={class:"dexline"},Jx={class:"leftItem"},Qx=Rn(()=>P("span",{class:"statuskinds"},"DEX",-1)),eS={class:"itemValue"},tS={class:"rightItem"},nS=Rn(()=>P("span",{class:"statuskinds"},"SPD",-1)),iS={class:"itemValue"},sS={class:"wepline"},rS=Rn(()=>P("span",{class:"statuskinds"},"WEP",-1)),aS={class:"equipName"},oS={class:"armline"},lS=Rn(()=>P("span",{class:"statuskinds"},"ARM",-1)),cS={class:"equipName"},uS={class:"accline"},fS=Rn(()=>P("span",{class:"statuskinds"},"ACC",-1)),dS={class:"equipName"},hS=Ye({__name:"Status",props:{character:{type:ln}},setup(n){return(e,t)=>{var i,s,r;return n.character?(Q(),de("div",Ax,[P("div",wx,[P("span",Cx,be(n.character.name),1),P("span",Rx,[Px,P("span",null,be(n.character.LV),1)])]),P("div",Lx,[Dx,P("span",Ix,[Pe(no,{nowHP:n.character.nowHP,maxHP:n.character.totalStatus.HP},null,8,["nowHP","maxHP"])])]),P("div",Ux,[Fx,P("span",kx,[Pe(cc,{nowMP:n.character.nowMP,maxMP:n.character.totalStatus.MP},null,8,["nowMP","maxMP"])])]),P("div",Nx,[P("span",Ox,[Bx,P("span",Hx,be(n.character.totalStatus.ATK),1)]),P("span",zx,[Gx,P("span",Vx,be(n.character.totalStatus.MGC),1)])]),P("div",Wx,[P("span",$x,[qx,P("span",Xx,be(n.character.totalStatus.DEF),1)]),P("span",Yx,[jx,P("span",Kx,be(n.character.totalStatus.MDF),1)])]),P("div",Zx,[P("span",Jx,[Qx,P("span",eS,be(n.character.totalStatus.DEX),1)]),P("span",tS,[nS,P("span",iS,be(n.character.totalStatus.SPD),1)])]),P("div",sS,[rS,P("span",aS,be((i=n.character.equipment.WEP)==null?void 0:i.name),1)]),P("div",oS,[lS,P("span",cS,be((s=n.character.equipment.ARM)==null?void 0:s.name),1)]),P("div",uS,[fS,P("span",dS,be((r=n.character.equipment.ACC)==null?void 0:r.name),1)])])):$e("",!0)}}}),pS=Ze(hS,[["__scopeId","data-v-396d7fd0"]]),mS={class:"CurrentUI"},_S=["onClick","onMouseover"],gS=["src"],vS=["src"],MS={class:"progress-bar-hp"},xS={class:"progress-bar-mp"},SS=Ye({__name:"Current",props:{currentCharacter:{type:ln},targetCharacter:{type:Array},showCharacterEffect:{type:Array},toCharacterEffect:{type:Array,default:()=>[]},toCharacterEffectType:{type:String},showCharacterAnime:{type:Array},toCharacterAnime:{type:[String,null],default:null},selectionMode:{type:String}},emits:["selectCharacter"],setup(n,{emit:e}){const t=n,i=ui();function s(l){var c;t.selectionMode==v.targetOneFriend&&((c=t.targetCharacter)!=null&&c.includes(l)||o("over",l))}function r(l){var c;t.selectionMode==v.targetMyself?o("click"):t.selectionMode==v.targetOneFriend?(c=t.targetCharacter)!=null&&c.includes(l)?o("click",l):o("over",l):t.selectionMode==v.targetAllFriends&&o("click")}const a=e,o=(l,c=null)=>{a("selectCharacter",l,c)};return bt(()=>t.showCharacterEffect,()=>{console.log("showCharacterEffect",t.showCharacterEffect)}),bt(()=>t.toCharacterEffect,()=>{console.log("toCharacterEffect",t.toCharacterEffect)}),bt(()=>t.toCharacterEffectType,()=>{console.log("toCharacterEffectType",t.toCharacterEffectType)}),bt(()=>t.selectionMode,()=>{console.log("selectionMode",t.selectionMode)}),(l,c)=>(Q(),de("div",mS,[(Q(!0),de(ut,null,Vt(K(i).characters,(u,f)=>{var d;return Q(),de("div",{class:It(["character",{currentCharacter:u==n.currentCharacter,targetCharacter:(d=n.targetCharacter)==null?void 0:d.includes(u)}]),onClick:p=>r(u),onMouseover:p=>s(u)},[At(P("div",{class:It(["characterEffect",{effectGreen:n.toCharacterEffectType==K(v).effectHeal,effectRed:n.toCharacterEffectType==K(v).effectDamage}])},be(n.toCharacterEffect[f]),3),[[wt,n.showCharacterEffect&&n.showCharacterEffect[f]]]),At(P("img",{src:n.toCharacterAnime,class:"toCharacterAnime",alt:"skill effect"},null,8,gS),[[wt,n.showCharacterAnime&&n.showCharacterAnime[f]]]),P("img",{class:"characterface",src:u.faceGraphicUrl},null,8,vS),P("span",MS,[Pe(no,{nowHP:u.nowHP,maxHP:u.totalStatus.HP},null,8,["nowHP","maxHP"])]),P("div",xS,[Pe(cc,{nowMP:u.nowMP,maxMP:u.totalStatus.MP},null,8,["nowMP","maxMP"])])],42,_S)}),256))]))}}),pc=Ze(SS,[["__scopeId","data-v-7069f346"]]),yS=[{item_id:1,use:2,number:1},{item_id:2,use:2,number:1},{item_id:1001,use:0,number:5},{item_id:1002,use:0,number:1},{item_id:2001,use:1,number:3},{item_id:2002,use:1,number:1}],ES=[{item_id:1,name:"Magic Circle of Return",use:2,info:"Magic circle escaping from dungeon.",attribute:0,consume:0,purchase_amount:0,selling_price:0,effect_number:0,skill_effect:[{effect_type:"special",effect_kind:"return",effect_times:1,base_status:"",success_rate:100,effect_amount:0,target:99,target_type:"other",skill_anime:"effect/item/magicCircle1.gif",anime_time:3e3}]},{item_id:2,name:"Special Item2",use:2,info:"Magic circle escaping from dungeon.",attribute:0,consume:0,purchase_amount:0,selling_price:0,effect_number:0,skill_effect:[]},{item_id:1001,name:"Healing Herb",use:0,info:"Recover 50 HP of one friend.",attribute:11,consume:1,purchase_amount:100,selling_price:50,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"FixValue",success_rate:100,effect_amount:50,target:1,target_type:"oneFriend",skill_anime:"",anime_time:500}]},{item_id:1002,name:"Normal Item2",use:0,info:"Recover 50 HP of one friend.",attribute:11,consume:1,purchase_amount:100,selling_price:50,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"FixValue",success_rate:100,effect_amount:50,target:1,target_type:"oneFriend",skill_anime:"",anime_time:500}]},{item_id:2001,name:"battle item1",use:1,info:"battle item info 1234567890.",attribute:0,consume:1,purchase_amount:100,selling_price:50,effect_number:1,skill_effect:[{effect_type:"debuff",effect_kind:"DEF",effect_times:1,base_status:"FixRate",success_rate:100,effect_amount:.2,target:2,target_type:"oneEnemy",skill_anime:"",anime_time:500}]},{item_id:2002,name:"battle item2",use:1,info:"battle item info 1234567890.",attribute:0,consume:1,purchase_amount:100,selling_price:50,effect_number:1,skill_effect:[{effect_type:"debuff",effect_kind:"DEF",effect_times:1,base_status:"FixRate",success_rate:100,effect_amount:.2,target:2,target_type:"oneEnemy",skill_anime:"",anime_time:500}]}];class bS{constructor(e){Re(this,"item_id");Re(this,"name");Re(this,"use");Re(this,"info");Re(this,"consume");Re(this,"attribute");Re(this,"purchase_amount");Re(this,"selling_price");Re(this,"effect_number");Re(this,"skill_effect");this.item_id=e.item_id,this.name=e.name,this.use=e.use,this.info=e.info,this.consume=e.consume,this.attribute=e.attribute,this.purchase_amount=e.purchase_amount,this.selling_price=e.selling_price,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect}}const TS=ES.map(n=>new bS(n)),AS=ki("itemBag",{state:()=>({itemBag:yS.map(n=>({...n,item:TS.find(e=>e.item_id===n.item_id)}))}),actions:{addItem(n){const e=this.itemBag.find(t=>t.item_id===n.item_id);e?e.number+=n.number:this.itemBag.push(n)},useItem(n){const e=this.itemBag.find(t=>t.item_id===n);e&&e.number>0&&(e.number-=1,e.number===0&&this.removeItem(n))},removeItem(n){const e=this.itemBag.findIndex(t=>t.item_id===n);e!==-1&&this.itemBag.splice(e,1)}}}),wS={class:"ItemBagUI"},CS={class:"itemBag"},RS={class:"selectItem"},PS={class:"tabSelect"},LS=["onClick"],DS={class:"itemBox"},IS=["onClick"],US={class:"itemName"},FS={key:0,class:"buttonPosition"},kS=["onClick"],NS={class:"itemNumber"},OS=["src"],BS=Ye({__name:"ItemBag",props:{processBattle:{type:Boolean}},emits:["useItem"],setup(n,{emit:e}){const t=zn(),i=AS(),s=fi(),r=ui(),a=n,o=ge([]),l=ge(new Array(r.characters.length).fill(!1)),c=ge(null),u=ge(new Array(r.characters.length).fill(!1)),f=ge(new Array(r.characters.length).fill(null)),d=ge(),p=ge(""),_={tabAll:v.itemTabAll,tab1:v.itemTab1,tab2:v.itemTab2,tab3:v.itemTab3},g=ge(v.itemTabAll),m=Dt(()=>{switch(h.value=null,g.value){case v.itemTab1:return i.itemBag.filter(U=>U.use===0);case v.itemTab2:return i.itemBag.filter(U=>U.use===1);case v.itemTab3:return i.itemBag.filter(U=>U.use===2);default:return i.itemBag}}),h=ge(null),w=U=>{a.processBattle&&h.value==U&&E(U),h.value=U},y=e,E=U=>{y("useItem",U.item)},C=ge(""),k=ge(0),D=ge("");async function B(U){if(U.item.use==2){switch(U.item_id){case v.returnItemId:D.value=v.targetAll,C.value=U.item.skill_effect[0].skill_anime,k.value=U.item.skill_effect[0].anime_time;break}return}if(U.item.skill_effect.length!==0){U.item.skill_effect[0].target==1&&(p.value=U.item.skill_effect[0].target_type,p.value==v.targetAllFriends?o.value=r.characters.filter($=>$.nowHP>0):o.value=[],await T());for(const $ of U.item.skill_effect)$.target==1&&characterAssist($,U.item.name)}}let S=null;async function T(){return new Promise(U=>{S=U})}const J=(U,$)=>{U=="over"?(o.value=[],o.value.push($)):U=="click"&&S&&(S(),S=null)},W=()=>{setTimeout(()=>{D.value=null,re()},k.value)},re=()=>{h.value&&h.value.item_id==v.returnItemId&&(t.status=v.statusTown,s.item=!1,console.log("useNormalItem",h.value))};return(U,$)=>(Q(),de("div",wS,[K(t).processDungeon==K(v).processSearch?(Q(),St(pc,{key:0,class:"CurrentUI",targetCharacter:o.value,showCharacterEffect:u.value,toCharacterEffect:f.value,toCharacterEffectType:d.value,showCharacterAnime:l.value,toCharacterAnime:c.value,selectionMode:p.value,onSelectCharacter:J},null,8,["targetCharacter","showCharacterEffect","toCharacterEffect","toCharacterEffectType","showCharacterAnime","toCharacterAnime","selectionMode"])):$e("",!0),P("div",CS,[P("div",RS,[P("ul",PS,[(Q(),de(ut,null,Vt(_,(H,q)=>P("li",{key:q,class:It(["tab",{"selected-tab":g.value===H}]),onClick:se=>g.value=H},be(H),11,LS)),64))]),P("ul",DS,[(Q(!0),de(ut,null,Vt(m.value,H=>(Q(),de("li",{key:H.item_id,class:It(["itemList",{"selected-tab":h.value===H}]),onClick:q=>w(H)},[P("span",US,be(H.item.name),1),h.value===H&&K(t).processDungeon==K(v).processSearch&&H.item.use!==1?(Q(),de("span",FS,[P("span",{onClick:q=>B(H),class:"button-equip"},be(K(v).itemBtn1),9,kS)])):$e("",!0),P("span",NS,be(H.number),1)],10,IS))),128))])]),h.value?(Q(),St(uc,{key:0,class:"skillInfo",skillInfo:h.value.item.info},null,8,["skillInfo"])):$e("",!0)]),Pe(ac,{name:"fade"},{default:pr(()=>[D.value==K(v).targetAll&&C.value?(Q(),de("div",{key:0,class:"gif-modal",onClick:$[1]||($[1]=H=>D.value=null)},[P("img",{src:C.value,alt:"animation",onLoad:$[0]||($[0]=H=>W())},null,40,OS)])):$e("",!0)]),_:1})]))}}),HS=Ze(BS,[["__scopeId","data-v-e29262e8"]]),zS="/app2/icon/back.svg",GS=["src"],VS=Ye({__name:"IconBack",setup(n){return(e,t)=>(Q(),de("img",{class:"Icon",src:K(zS),alt:"Back"},null,8,GS))}}),Oh=Ze(VS,[["__scopeId","data-v-6b7e6f2e"]]),WS="/app2/icon/bag.png",$S=["src"],qS=Ye({__name:"IconBag",setup(n){return(e,t)=>(Q(),de("img",{class:"Icon",src:K(WS),alt:"Bag"},null,8,$S))}}),Bh=Ze(qS,[["__scopeId","data-v-9194b00a"]]),XS="/app2/icon/party.png",YS=["src"],jS=Ye({__name:"IconParty",setup(n){return(e,t)=>(Q(),de("img",{class:"Icon",src:K(XS),alt:"Party"},null,8,YS))}}),KS=Ze(jS,[["__scopeId","data-v-4602665a"]]),ZS="/app2/icon/change.png",JS=["src"],QS=Ye({__name:"IconChange",setup(n){return(e,t)=>(Q(),de("img",{class:"Icon",src:K(ZS),alt:"Change"},null,8,JS))}}),ey=Ze(QS,[["__scopeId","data-v-a8d8ea0c"]]),ty={class:"partyUI"},ny={key:0,class:"party"},iy={class:"characters"},sy=["onClick"],ry={class:"charaflame"},ay=["src"],oy=Ye({__name:"Party",setup(n){const e=ui(),t=fi(),i=zn(),s=()=>{d.value=!1,t.party?r():a()},r=()=>{d.value=!1,t.party=!1,t.character=!1,t.map=!0,t.current=!0},a=()=>{t.party=!0,t.character=!1,u.value=void 0,f.value=void 0},o=()=>{t.item=!t.item,t.current=!t.item,t.party=!1},l=()=>{if(d.value=!1,t.item=!1,!t.party&&!t.character&&(t.map=!1,t.current=!1),t.party){r();return}t.party=!t.party,t.character=!1},c=E=>{E=="next"?(u.value=u.value==e.characters.length-1?0:u.value+1,f.value=e.characters[u.value]):(u.value=u.value==0?e.characters.length-1:u.value-1,f.value=e.characters[u.value])},u=ge(void 0),f=ge(void 0),d=ge(!1),p=ge([]);let _,g;function m(E,C){if(i.guildMenu==v.menuRemoveMember){if(C.cha_id==v.mainChaid){g=v.msgRemovePartyError,t.errorMessage=!0;return}_=v.msgRemoveParty1+C.name+v.msgRemoveParty2,t.message=!0,f.value=C;return}if(d.value){if(p.value.includes(E)?p.value=p.value.filter(k=>k!==E):p.value.length<2&&p.value.push(E),p.value.length===2){const k=e.characters[p.value[0]];e.characters[p.value[0]]=e.characters[p.value[1]],e.characters[p.value[1]]=k;for(let D of p.value)e.characters[D].updateHate(D),console.log("partyStore.characters[order]",e.characters[D]);p.value=[]}}else u.value=E,f.value=C,t.party=!1,t.character=!0}const h=E=>{t.message=!1,E==v.textYes&&(e.characters=e.characters.filter(C=>C.cha_id!==f.value.cha_id),t.character=!1)},w=()=>{t.errorMessage=!1},y=()=>{d.value=!d.value};return(E,C)=>(Q(),de("div",ty,[K(t).party||K(i).guildMenu==K(v).menuRemoveMember?(Q(),de("div",ny,[P("div",iy,[(Q(!0),de(ut,null,Vt(K(e).characters,(k,D)=>(Q(),de("div",{key:k.cha_id,onClick:B=>m(D,k),class:It(["character-card",{changing:d.value&&p.value.includes(D)}])},[Pe(pS,{class:"StatusUI",character:k},null,8,["character"]),P("div",ry,[P("img",{src:k.poseGraphicUrl,alt:"",class:"charaimage"},null,8,ay)])],10,sy))),128))])])):$e("",!0),At(Pe(Nh,{character:f.value,index:u.value,onChangeCharacter:c},null,8,["character","index"]),[[wt,K(t).character]]),At(Pe(HS,{class:"ItemBag"},null,512),[[wt,K(t).item]]),At(Pe(Oh,{class:"IconBack",onClick:s},null,512),[[wt,K(t).party||K(t).character]]),K(i).processDungeon==K(v).processSearch&&!K(t).character?(Q(),St(Bh,{key:1,class:"IconBag",onClick:o})):$e("",!0),At(Pe(ey,{class:It(["IconChange",{changing:d.value}]),onClick:y},null,8,["class"]),[[wt,K(t).party]]),K(i).guildMenu!=K(v).menuRemoveMember?(Q(),St(KS,{key:2,class:"IconParty",onClick:l})):$e("",!0),At(Pe(hc,{message:K(_),onConfirmationResponse:h},null,8,["message"]),[[wt,K(t).message]]),At(Pe(fc,{message:K(g),onHideError:w},null,8,["message"]),[[wt,K(t).errorMessage]])]))}}),mc=Ze(oy,[["__scopeId","data-v-d5e666e9"]]),io=n=>(Bn("data-v-8b8282cc"),n=n(),Hn(),n),ly={class:"information"},cy={key:0,class:"flame"},uy=io(()=>P("div",{class:"firstItem"},"Quest",-1)),fy=io(()=>P("div",{class:"secondItem"},"Accept a Quest",-1)),dy=io(()=>P("div",{class:"secondItem"},"Receive Rewards",-1)),hy=io(()=>P("div",{class:"firstItem"},"About Member",-1)),py=Ye({__name:"Guild",setup(n){const e=zn();function t(i){e.guildMenu=i}return(i,s)=>(Q(),de("div",ly,[K(e).guildMenu==""?(Q(),de("div",cy,[uy,fy,dy,hy,P("div",{class:"secondItem",onClick:s[0]||(s[0]=r=>t(K(v).menuAddMember))},be(K(v).menuAddMember),1),P("div",{class:"secondItem",onClick:s[1]||(s[1]=r=>t(K(v).menuRemoveMember))},be(K(v).menuRemoveMember),1)])):$e("",!0),K(e).guildMenu==K(v).menuAddMember?(Q(),St(Tx,{key:1,class:"into"})):$e("",!0),K(e).guildMenu==K(v).menuRemoveMember?(Q(),St(mc,{key:2})):$e("",!0)]))}}),my=Ze(py,[["__scopeId","data-v-8b8282cc"]]),_y={},gy={class:"back"};function vy(n,e){return Q(),de("div",gy)}const My=Ze(_y,[["render",vy],["__scopeId","data-v-c8f65fef"]]),xy=Ye({__name:"ProcessBack",setup(n){const e=zn(),t=fi();function i(){t.message?t.message=!1:t.character?t.character=!1:e.guildMenu?e.guildMenu="":e.processTown=v.statusTown}return(s,r)=>(Q(),St(Oh,{class:"IconBack",onClick:i}))}}),Sy={class:"flame"},yy=Ye({__name:"Flame1",props:{inside:{type:String}},setup(n){return(e,t)=>(Q(),de("div",Sy,be(n.inside),1))}}),Al=Ze(yy,[["__scopeId","data-v-e4f577cc"]]);function Hh(){return{enterFullscreen:async()=>{try{await document.documentElement.requestFullscreen()}catch(t){console.error(t)}},exitFullscreen:async()=>{try{await document.exitFullscreen()}catch(t){console.error(t)}}}}const Ey="/app2/icon/town/guild.jpg",by="/app2/icon/town/inn.jpg",Ty="/app2/icon/town/forest.jpg",Ay="/app2/icon/town/swamp.jpg",wy="/app2/icon/town/desert.jpg",Cy="/app2/icon/town/volcano.jpg",Ry="/app2/icon/town/cave.jpg",Py="/app2/icon/town/palace.jpg",Ly="/app2/icon/town/tower.jpg",Dy={class:"town"},Iy={key:0},Uy={key:0},Fy=["src"],ky=["src"],Ny=["src"],Oy=["src"],By=["src"],Hy=["src"],zy=["src"],Gy=["src"],Vy=["src"],Wy=Ye({__name:"Town",setup(n){const{enterFullscreen:e}=Hh(),t=zn(),i=fi(),s=Dr();Fi(()=>{s.playBgm(v.mscTown)});function r(p){t.processTown=p}let a,o;function l(p){a=v.msgEnterDungeon+p+".",o=p,i.message=!0}async function c(p){i.message=!1,p==v.textYes&&(await e(),t.status=v.statusDungeon,t.processDungeon=v.processSearch,t.whichDungeon=o)}const u=ge("");function f(p){u.value=p}function d(){u.value=""}return(p,_)=>(Q(),de("div",Dy,[K(t).processTown==K(v).statusTown?(Q(),de("div",Iy,[K(i).party?$e("",!0):(Q(),de("div",Uy,[P("img",{class:"guild",src:K(Ey),alt:"GUILD",onClick:_[0]||(_[0]=g=>r(K(v).processGuild)),onMouseover:_[1]||(_[1]=g=>f(K(v).processGuild)),onMouseout:_[2]||(_[2]=g=>d())},null,40,Fy),P("img",{class:"inn",src:K(by),alt:"INN",onClick:_[3]||(_[3]=g=>r(K(v).processInn)),onMouseover:_[4]||(_[4]=g=>f(K(v).processInn)),onMouseout:_[5]||(_[5]=g=>d())},null,40,ky),P("img",{class:"dungeon1",src:K(Ty),alt:"Dungeon1",onClick:_[6]||(_[6]=g=>l(K(v).nameDungeon1)),onMouseover:_[7]||(_[7]=g=>f(K(v).nameDungeon1)),onMouseout:_[8]||(_[8]=g=>d())},null,40,Ny),P("img",{class:"dungeon2",src:K(Ay),alt:"Dungeon2",onClick:_[9]||(_[9]=g=>l(K(v).nameDungeon2)),onMouseover:_[10]||(_[10]=g=>f(K(v).nameDungeon2)),onMouseout:_[11]||(_[11]=g=>d())},null,40,Oy),P("img",{class:"dungeon3",src:K(wy),alt:"Dungeon3",onClick:_[12]||(_[12]=g=>l(K(v).nameDungeon3)),onMouseover:_[13]||(_[13]=g=>f(K(v).nameDungeon3)),onMouseout:_[14]||(_[14]=g=>d())},null,40,By),P("img",{class:"dungeon4",src:K(Cy),alt:"Dungeon4",onClick:_[15]||(_[15]=g=>l(K(v).nameDungeon4)),onMouseover:_[16]||(_[16]=g=>f(K(v).nameDungeon4)),onMouseout:_[17]||(_[17]=g=>d())},null,40,Hy),P("img",{class:"dungeon5",src:K(Ry),alt:"Dungeon5",onClick:_[18]||(_[18]=g=>l(K(v).nameDungeon5)),onMouseover:_[19]||(_[19]=g=>f(K(v).nameDungeon5)),onMouseout:_[20]||(_[20]=g=>d())},null,40,zy),P("img",{class:"dungeon6",src:K(Py),alt:"Dungeon6",onClick:_[21]||(_[21]=g=>l(K(v).nameDungeon6)),onMouseover:_[22]||(_[22]=g=>f(K(v).nameDungeon6)),onMouseout:_[23]||(_[23]=g=>d())},null,40,Gy),P("img",{class:"dungeon7",src:K(Ly),alt:"Dungeon7",onClick:_[24]||(_[24]=g=>l(K(v).nameDungeon7)),onMouseover:_[25]||(_[25]=g=>f(K(v).nameDungeon7)),onMouseout:_[26]||(_[26]=g=>d())},null,40,Vy),u.value?(Q(),St(Al,{key:0,class:"selectName",inside:u.value},null,8,["inside"])):$e("",!0)])),Pe(mc),At(Pe(hc,{message:K(a),onConfirmationResponse:c},null,8,["message"]),[[wt,K(i).message]])])):K(t).processTown==K(v).processGuild?(Q(),St(my,{key:1,class:"into"})):K(t).processTown==K(v).processInn?(Q(),St(My,{key:2,class:"into"})):$e("",!0),K(t).processTown!=K(v).statusTown?(Q(),St(xy,{key:3,class:"ProcessBack"})):$e("",!0)]))}}),$y=Ze(Wy,[["__scopeId","data-v-0e4cd0e0"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="158",qy=0,vu=1,Xy=2,zh=1,Yy=2,ni=3,Ii=0,cn=1,on=2,Ri=0,Os=1,Mu=2,xu=3,Su=4,jy=5,Qi=100,Ky=101,Zy=102,yu=103,Eu=104,Jy=200,Qy=201,eE=202,tE=203,wl=204,Cl=205,nE=206,iE=207,sE=208,rE=209,aE=210,oE=211,lE=212,cE=213,uE=214,fE=0,dE=1,hE=2,Ua=3,pE=4,mE=5,_E=6,gE=7,gc=0,vE=1,ME=2,Pi=0,xE=1,SE=2,yE=3,EE=4,bE=5,Gh=300,Ws=301,$s=302,Rl=303,Pl=304,so=306,Ll=1e3,Fn=1001,Dl=1002,tn=1003,bu=1004,Ao=1005,An=1006,TE=1007,wr=1008,Li=1009,AE=1010,wE=1011,vc=1012,Vh=1013,bi=1014,Ti=1015,Cr=1016,Wh=1017,$h=1018,rs=1020,CE=1021,kn=1023,RE=1024,PE=1025,as=1026,qs=1027,LE=1028,qh=1029,DE=1030,Xh=1031,Yh=1033,wo=33776,Co=33777,Ro=33778,Po=33779,Tu=35840,Au=35841,wu=35842,Cu=35843,IE=36196,Ru=37492,Pu=37496,Lu=37808,Du=37809,Iu=37810,Uu=37811,Fu=37812,ku=37813,Nu=37814,Ou=37815,Bu=37816,Hu=37817,zu=37818,Gu=37819,Vu=37820,Wu=37821,Lo=36492,$u=36494,qu=36495,UE=36283,Xu=36284,Yu=36285,ju=36286,jh=3e3,os=3001,FE=3200,kE=3201,Kh=0,NE=1,wn="",qt="srgb",li="srgb-linear",Mc="display-p3",ro="display-p3-linear",Fa="linear",_t="srgb",ka="rec709",Na="p3",ms=7680,Ku=519,OE=512,BE=513,HE=514,zE=515,GE=516,VE=517,WE=518,$E=519,Zu=35044,Ju="300 es",Il=1035,ri=2e3,Oa=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Do=Math.PI/180,Ul=180/Math.PI;function Ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function qE(n,e){return(n%e+e)%e}function Io(n,e,t){return(1-t)*n+t*e}function Qu(n){return(n&n-1)===0&&n!==0}function Fl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,s,r,a,o,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],g=s[0],m=s[3],h=s[6],w=s[1],y=s[4],E=s[7],C=s[2],k=s[5],D=s[8];return r[0]=a*g+o*w+l*C,r[3]=a*m+o*y+l*k,r[6]=a*h+o*E+l*D,r[1]=c*g+u*w+f*C,r[4]=c*m+u*y+f*k,r[7]=c*h+u*E+f*D,r[2]=d*g+p*w+_*C,r[5]=d*m+p*y+_*k,r[8]=d*h+p*E+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=t*f+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*c-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new rt;function Zh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XE(){const n=Rr("canvas");return n.style.display="block",n}const ef={};function Mr(n){n in ef||(ef[n]=!0,console.warn(n))}const tf=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nf=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[li]:{transfer:Fa,primaries:ka,toReference:n=>n,fromReference:n=>n},[qt]:{transfer:_t,primaries:ka,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ro]:{transfer:Fa,primaries:Na,toReference:n=>n.applyMatrix3(nf),fromReference:n=>n.applyMatrix3(tf)},[Mc]:{transfer:_t,primaries:Na,toReference:n=>n.convertSRGBToLinear().applyMatrix3(nf),fromReference:n=>n.applyMatrix3(tf).convertLinearToSRGB()}},YE=new Set([li,ro]),pt={enabled:!0,_workingColorSpace:li,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!YE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=jr[e].toReference,s=jr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return jr[n].primaries},getTransfer:function(n){return n===wn?Fa:jr[n].transfer}};function Bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _s;class Jh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Rr("canvas")),_s.width=e.width,_s.height=e.height;const i=_s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bs(t[i]/255)*255):t[i]=Bs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jE=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ko(s[a].image)):r.push(ko(s[a]))}else r=ko(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KE=0;class un extends Js{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=Fn,s=Fn,r=An,a=wr,o=kn,l=Li,c=un.DEFAULT_ANISOTROPY,u=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Ir(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===os?qt:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qt?os:jh}set encoding(e){Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===os?qt:wn}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Gh;un.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(p+1)/2,C=(h+1)/2,k=(u+d)/4,D=(f+g)/4,B=(_+m)/4;return y>E&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=k/i,r=D/i):E>C?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=k/s,r=B/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=D/r,s=B/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-g)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZE extends Js{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===os?qt:wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new un(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends ZE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ep extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JE extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==p||u!==_){let m=1-o;const h=l*d+c*p+u*_+f*g,w=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),k=Math.atan2(C,h*w);m=Math.sin(m*k)/C,o=Math.sin(o*k)/C}const E=o*w;if(l=l*m+d*E,c=c*m+p*E,u=u*m+_*E,f=f*m+g*E,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*p-c*d,e[t+1]=l*_+u*d+c*f-o*p,e[t+2]=c*_+u*p+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new Y,sf=new Ur;class Fr{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kr.copy(i.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Zr.subVectors(this.max,sr),gs.subVectors(e.a,sr),vs.subVectors(e.b,sr),Ms.subVectors(e.c,sr),_i.subVectors(vs,gs),gi.subVectors(Ms,vs),Vi.subVectors(gs,Ms);let t=[0,-_i.z,_i.y,0,-gi.z,gi.y,0,-Vi.z,Vi.y,_i.z,0,-_i.x,gi.z,0,-gi.x,Vi.z,0,-Vi.x,-_i.y,_i.x,0,-gi.y,gi.x,0,-Vi.y,Vi.x,0];return!Oo(t,gs,vs,Ms,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,gs,vs,Ms,Zr))?!1:(Jr.crossVectors(_i,gi),t=[Jr.x,Jr.y,Jr.z],Oo(t,gs,vs,Ms,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Pn=new Y,Kr=new Fr,gs=new Y,vs=new Y,Ms=new Y,_i=new Y,gi=new Y,Vi=new Y,sr=new Y,Zr=new Y,Jr=new Y,Wi=new Y;function Oo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Wi.fromArray(n,r);const o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const QE=new Fr,rr=new Y,Bo=new Y;class xc{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):QE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Bo)),this.expandByPoint(rr.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new Y,Ho=new Y,Qr=new Y,vi=new Y,zo=new Y,ea=new Y,Go=new Y;class tp{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ho.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Ho);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=vi.dot(this.direction),l=-vi.dot(Qr),c=vi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ho).addScaledVector(Qr,d),p}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){zo.subVectors(t,e),ea.subVectors(i,e),Go.crossVectors(zo,ea);let a=this.direction.dot(Go),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);const l=o*this.direction.dot(ea.crossVectors(vi,ea));if(l<0)return null;const c=o*this.direction.dot(zo.cross(vi));if(c<0||l+c>a)return null;const u=-o*vi.dot(Go);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,i,s,r,a,o,l,c,u,f,d,p,_,g,m){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,d,p,_,g,m)}set(e,t,i,s,r,a,o,l,c,u,f,d,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,g=c*f;t[0]=d+g*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,g=c*f;t[0]=d-g*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e1,e,t1)}lookAt(e,t,i){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Mi.crossVectors(i,mn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Mi.crossVectors(i,mn)),Mi.normalize(),ta.crossVectors(mn,Mi),s[0]=Mi.x,s[4]=ta.x,s[8]=mn.x,s[1]=Mi.y,s[5]=ta.y,s[9]=mn.y,s[2]=Mi.z,s[6]=ta.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],w=i[3],y=i[7],E=i[11],C=i[15],k=s[0],D=s[4],B=s[8],S=s[12],T=s[1],J=s[5],W=s[9],re=s[13],U=s[2],$=s[6],H=s[10],q=s[14],se=s[3],le=s[7],fe=s[11],z=s[15];return r[0]=a*k+o*T+l*U+c*se,r[4]=a*D+o*J+l*$+c*le,r[8]=a*B+o*W+l*H+c*fe,r[12]=a*S+o*re+l*q+c*z,r[1]=u*k+f*T+d*U+p*se,r[5]=u*D+f*J+d*$+p*le,r[9]=u*B+f*W+d*H+p*fe,r[13]=u*S+f*re+d*q+p*z,r[2]=_*k+g*T+m*U+h*se,r[6]=_*D+g*J+m*$+h*le,r[10]=_*B+g*W+m*H+h*fe,r[14]=_*S+g*re+m*q+h*z,r[3]=w*k+y*T+E*U+C*se,r[7]=w*D+y*J+E*$+C*le,r[11]=w*B+y*W+E*H+C*fe,r[15]=w*S+y*re+E*q+C*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+r*l*f-s*c*f-r*o*d+i*c*d+s*o*p-i*l*p)+g*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*f-t*o*p-r*a*f+i*a*p+r*o*u-i*c*u)+h*(-s*o*u-t*l*f+t*o*d+s*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],w=f*m*c-g*d*c+g*l*p-o*m*p-f*l*h+o*d*h,y=_*d*c-u*m*c-_*l*p+a*m*p+u*l*h-a*d*h,E=u*g*c-_*f*c+_*o*p-a*g*p-u*o*h+a*f*h,C=_*f*l-u*g*l-_*o*d+a*g*d+u*o*m-a*f*m,k=t*w+i*y+s*E+r*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/k;return e[0]=w*D,e[1]=(g*d*r-f*m*r-g*s*p+i*m*p+f*s*h-i*d*h)*D,e[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*h+i*l*h)*D,e[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*p-i*l*p)*D,e[4]=y*D,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*h+t*d*h)*D,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*h-t*l*h)*D,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*D,e[8]=E*D,e[9]=(_*f*r-u*g*r-_*i*p+t*g*p+u*i*h-t*f*h)*D,e[10]=(a*g*r-_*o*r+_*i*c-t*g*c-a*i*h+t*o*h)*D,e[11]=(u*o*r-a*f*r-u*i*c+t*f*c+a*i*p-t*o*p)*D,e[12]=C*D,e[13]=(u*g*s-_*f*s+_*i*d-t*g*d-u*i*m+t*f*m)*D,e[14]=(_*o*s-a*g*s-_*i*l+t*g*l+a*i*m-t*o*m)*D,e[15]=(a*f*s-u*o*s+u*i*l-t*f*l-a*i*d+t*o*d)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,_=r*f,g=a*u,m=a*f,h=o*f,w=l*c,y=l*u,E=l*f,C=i.x,k=i.y,D=i.z;return s[0]=(1-(g+h))*C,s[1]=(p+E)*C,s[2]=(_-y)*C,s[3]=0,s[4]=(p-E)*k,s[5]=(1-(d+h))*k,s[6]=(m+w)*k,s[7]=0,s[8]=(_+y)*D,s[9]=(m-w)*D,s[10]=(1-(d+g))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=xs.set(s[0],s[1],s[2]).length();const a=xs.set(s[4],s[5],s[6]).length(),o=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const c=1/r,u=1/a,f=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,t.setFromRotationMatrix(Ln),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ri){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let p,_;if(o===ri)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Oa)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ri){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(a-r),d=(t+e)*c,p=(i+s)*u;let _,g;if(o===ri)_=(a+r)*f,g=-2*f;else if(o===Oa)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xs=new Y,Ln=new Ut,e1=new Y(0,0,0),t1=new Y(1,1,1),Mi=new Y,ta=new Y,mn=new Y,rf=new Ut,af=new Ur;class ao{constructor(e=0,t=0,i=0,s=ao.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ao.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n1=0;const of=new Y,Ss=new Ur,Qn=new Ut,na=new Y,ar=new Y,i1=new Y,s1=new Ur,lf=new Y(1,0,0),cf=new Y(0,1,0),uf=new Y(0,0,1),r1={type:"added"},a1={type:"removed"};class fn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new Y,t=new ao,i=new Ur,s=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new rt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(cf,e)}rotateZ(e){return this.rotateOnAxis(uf,e)}translateOnAxis(e,t){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(cf,e)}translateZ(e){return this.translateOnAxis(uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?na.copy(e):na.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ar,na,this.up):Qn.lookAt(na,ar,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(r1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,i1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,s1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}fn.DEFAULT_UP=new Y(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new Y,ei=new Y,Vo=new Y,ti=new Y,ys=new Y,Es=new Y,ff=new Y,Wo=new Y,$o=new Y,qo=new Y;let ia=!1;class In{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),ei.subVectors(i,t),Vo.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(ei),l=Dn.dot(Vo),c=ei.dot(ei),u=ei.dot(Vo),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);const d=1/f,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,i,s,r,a,o,l){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ti),l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),ei.subVectors(e,t),Dn.cross(ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Dn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ys.subVectors(s,i),Es.subVectors(r,i),Wo.subVectors(e,i);const l=ys.dot(Wo),c=Es.dot(Wo);if(l<=0&&c<=0)return t.copy(i);$o.subVectors(e,s);const u=ys.dot($o),f=Es.dot($o);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ys,a);qo.subVectors(e,r);const p=ys.dot(qo),_=Es.dot(qo);if(_>=0&&p<=_)return t.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Es,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return ff.subVectors(r,s),o=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(ff,o);const h=1/(m+g+d);return a=g*h,o=d*h,t.copy(i).addScaledVector(ys,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=qE(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xo(a,r,e+1/3),this.g=Xo(a,r,e),this.b=Xo(a,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=np[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return pt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(an(Yt.r*255,0,255))*65536+Math.round(an(Yt.g*255,0,255))*256+Math.round(an(Yt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=qt){pt.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,s=Yt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(sa);const i=Io(xi.h,sa.h,t),s=Io(xi.s,sa.s,t),r=Io(xi.l,sa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ft;ft.NAMES=np;let o1=0;class kr extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=Os,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Cl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Cl&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ip extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new Y,ra=new dt;class Yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zu,this.updateRange={offset:0,count:-1},this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class sp extends Yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rp extends Yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ls extends Yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let l1=0;const En=new Ut,Yo=new fn,bs=new Y,_n=new Fr,or=new Fr,Ht=new Y;class ds extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?rp:sp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ls(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(_n.min,or.min),_n.expandByPoint(Ht),Ht.addVectors(_n.max,or.max),_n.expandByPoint(Ht)):(_n.expandByPoint(or.min),_n.expandByPoint(or.max))}_n.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),Ht.add(bs)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new Y,u[T]=new Y;const f=new Y,d=new Y,p=new Y,_=new dt,g=new dt,m=new dt,h=new Y,w=new Y;function y(T,J,W){f.fromArray(s,T*3),d.fromArray(s,J*3),p.fromArray(s,W*3),_.fromArray(a,T*2),g.fromArray(a,J*2),m.fromArray(a,W*2),d.sub(f),p.sub(f),g.sub(_),m.sub(_);const re=1/(g.x*m.y-m.x*g.y);isFinite(re)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(re),w.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(re),c[T].add(h),c[J].add(h),c[W].add(h),u[T].add(w),u[J].add(w),u[W].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let T=0,J=E.length;T<J;++T){const W=E[T],re=W.start,U=W.count;for(let $=re,H=re+U;$<H;$+=3)y(i[$+0],i[$+1],i[$+2])}const C=new Y,k=new Y,D=new Y,B=new Y;function S(T){D.fromArray(r,T*3),B.copy(D);const J=c[T];C.copy(J),C.sub(D.multiplyScalar(D.dot(J))).normalize(),k.crossVectors(B,J);const re=k.dot(u[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=re}for(let T=0,J=E.length;T<J;++T){const W=E[T],re=W.start,U=W.count;for(let $=re,H=re+U;$<H;$+=3)S(i[$+0]),S(i[$+1]),S(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new Y,r=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Yn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ds,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const df=new Ut,$i=new tp,aa=new xc,hf=new Y,Ts=new Y,As=new Y,ws=new Y,jo=new Y,oa=new Y,la=new dt,ca=new dt,ua=new dt,pf=new Y,mf=new Y,_f=new Y,fa=new Y,da=new Y;class $t extends fn{constructor(e=new ds,t=new ip){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(jo.fromBufferAttribute(f,e),a?oa.addScaledVector(jo,u):oa.addScaledVector(jo.sub(t),u))}t.add(oa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(aa.containsPoint($i.origin)===!1&&($i.intersectSphere(aa,hf)===null||$i.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(df.copy(r).invert(),$i.copy(e.ray).applyMatrix4(df),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=a[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,C=y;E<C;E+=3){const k=o.getX(E),D=o.getX(E+1),B=o.getX(E+2);s=ha(this,h,e,i,c,u,f,k,D,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const w=o.getX(m),y=o.getX(m+1),E=o.getX(m+2);s=ha(this,a,e,i,c,u,f,w,y,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=a[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,C=y;E<C;E+=3){const k=E,D=E+1,B=E+2;s=ha(this,h,e,i,c,u,f,k,D,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const w=m,y=m+1,E=m+2;s=ha(this,a,e,i,c,u,f,w,y,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function c1(n,e,t,i,s,r,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ii,o),l===null)return null;da.copy(o),da.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:n}}function ha(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ts),n.getVertexPosition(l,As),n.getVertexPosition(c,ws);const u=c1(n,e,t,i,Ts,As,ws,fa);if(u){s&&(la.fromBufferAttribute(s,o),ca.fromBufferAttribute(s,l),ua.fromBufferAttribute(s,c),u.uv=In.getInterpolation(fa,Ts,As,ws,la,ca,ua,new dt)),r&&(la.fromBufferAttribute(r,o),ca.fromBufferAttribute(r,l),ua.fromBufferAttribute(r,c),u.uv1=In.getInterpolation(fa,Ts,As,ws,la,ca,ua,new dt),u.uv2=u.uv1),a&&(pf.fromBufferAttribute(a,o),mf.fromBufferAttribute(a,l),_f.fromBufferAttribute(a,c),u.normal=In.getInterpolation(fa,Ts,As,ws,pf,mf,_f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Y,materialIndex:0};In.getNormal(Ts,As,ws,f.normal),u.face=f}return u}class Nr extends ds{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ls(c,3)),this.setAttribute("normal",new ls(u,3)),this.setAttribute("uv",new ls(f,2));function _(g,m,h,w,y,E,C,k,D,B,S){const T=E/D,J=C/B,W=E/2,re=C/2,U=k/2,$=D+1,H=B+1;let q=0,se=0;const le=new Y;for(let fe=0;fe<H;fe++){const z=fe*J-re;for(let Z=0;Z<$;Z++){const xe=Z*T-W;le[g]=xe*w,le[m]=z*y,le[h]=U,c.push(le.x,le.y,le.z),le[g]=0,le[m]=0,le[h]=k>0?1:-1,u.push(le.x,le.y,le.z),f.push(Z/D),f.push(1-fe/B),q+=1}}for(let fe=0;fe<B;fe++)for(let z=0;z<D;z++){const Z=d+z+$*fe,xe=d+z+$*(fe+1),Se=d+(z+1)+$*(fe+1),Ee=d+(z+1)+$*fe;l.push(Z,xe,Ee),l.push(xe,Se,Ee),se+=6}o.addGroup(p,se,S),p+=se,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=Xs(n[t]);for(const s in i)e[s]=i[s]}return e}function u1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ap(n){return n.getRenderTarget()===null?n.outputColorSpace:pt.workingColorSpace}const f1={clone:Xs,merge:Qt};var d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=h1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=u1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class op extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends op{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Do*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Rs=1;class p1 extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Cs,Rs,e,t);s.layers=this.layers,this.add(s);const r=new vn(Cs,Rs,e,t);r.layers=this.layers,this.add(r);const a=new vn(Cs,Rs,e,t);a.layers=this.layers,this.add(a);const o=new vn(Cs,Rs,e,t);o.layers=this.layers,this.add(o);const l=new vn(Cs,Rs,e,t);l.layers=this.layers,this.add(l);const c=new vn(Cs,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class lp extends un{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class m1 extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===os?qt:wn),this.texture=new lp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nr(5,5,5),r=new fs({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ri});r.uniforms.tEquirect.value=t;const a=new $t(s,r),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=An),new p1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Ko=new Y,_1=new Y,g1=new rt;class Yi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ko.subVectors(i,t).cross(_1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ko),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||g1.getNormalMatrix(e),s=this.coplanarPoint(Ko).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new xc,pa=new Y;class yc{constructor(e=new Yi,t=new Yi,i=new Yi,s=new Yi,r=new Yi,a=new Yi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],h=s[12],w=s[13],y=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,m-p,E-h).normalize(),i[1].setComponents(l+r,d+c,m+p,E+h).normalize(),i[2].setComponents(l+a,d+u,m+_,E+w).normalize(),i[3].setComponents(l-a,d-u,m-_,E-w).normalize(),i[4].setComponents(l-o,d-f,m-g,E-y).normalize(),t===ri)i[5].setComponents(l+o,d+f,m+g,E+y).normalize();else if(t===Oa)i[5].setComponents(o,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function v1(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const f=c.array,d=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class ns extends ds{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<u;h++){const w=h*d-a;for(let y=0;y<c;y++){const E=y*f-r;_.push(E,-w,0),g.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<o;w++){const y=w+c*h,E=w+c*(h+1),C=w+1+c*(h+1),k=w+1+c*h;p.push(y,E,k),p.push(E,C,k)}this.setIndex(p),this.setAttribute("position",new ls(_,3)),this.setAttribute("normal",new ls(g,3)),this.setAttribute("uv",new ls(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var M1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x1=`#ifdef USE_ALPHAHASH
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
#endif`,S1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T1=`#ifdef USE_AOMAP
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
#endif`,A1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P1=`#ifdef USE_IRIDESCENCE
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
#endif`,L1=`#ifdef USE_BUMPMAP
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
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H1=`#define PI 3.141592653589793
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
} // validated`,z1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G1=`vec3 transformedNormal = objectNormal;
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
#endif`,V1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y1=`
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
}`,j1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sb=`#ifdef USE_GRADIENTMAP
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
}`,rb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cb=`uniform bool receiveShadow;
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
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,fb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mb=`PhysicalMaterial material;
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
#endif`,_b=`struct PhysicalMaterial {
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
}`,gb=`
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Eb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wb=`#if defined( USE_POINTS_UV )
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
#endif`,Cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lb=`#ifdef USE_MORPHNORMALS
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
#endif`,Db=`#ifdef USE_MORPHTARGETS
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
#endif`,Ib=`#ifdef USE_MORPHTARGETS
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
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bb=`#ifdef USE_NORMALMAP
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
#endif`,Hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tT=`float getShadowMask() {
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
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,sT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rT=`#ifdef USE_SKINNING
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
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gT=`uniform sampler2D t2D;
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
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
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
}`,ET=`#if DEPTH_PACKING == 3200
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
}`,bT=`#define DISTANCE
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
}`,TT=`#define DISTANCE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
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
}`,RT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,LT=`uniform vec3 diffuse;
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
}`,DT=`#define LAMBERT
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
}`,IT=`#define LAMBERT
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
}`,UT=`#define MATCAP
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
}`,FT=`#define MATCAP
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
}`,kT=`#define NORMAL
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
}`,NT=`#define NORMAL
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
}`,OT=`#define PHONG
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
}`,BT=`#define PHONG
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
}`,HT=`#define STANDARD
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
}`,zT=`#define STANDARD
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
}`,GT=`#define TOON
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
}`,VT=`#define TOON
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
}`,WT=`uniform float size;
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
}`,$T=`uniform vec3 diffuse;
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
}`,qT=`#include <common>
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
}`,XT=`uniform vec3 color;
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
}`,YT=`uniform float rotation;
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
}`,jT=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:M1,alphahash_pars_fragment:x1,alphamap_fragment:S1,alphamap_pars_fragment:y1,alphatest_fragment:E1,alphatest_pars_fragment:b1,aomap_fragment:T1,aomap_pars_fragment:A1,begin_vertex:w1,beginnormal_vertex:C1,bsdfs:R1,iridescence_fragment:P1,bumpmap_pars_fragment:L1,clipping_planes_fragment:D1,clipping_planes_pars_fragment:I1,clipping_planes_pars_vertex:U1,clipping_planes_vertex:F1,color_fragment:k1,color_pars_fragment:N1,color_pars_vertex:O1,color_vertex:B1,common:H1,cube_uv_reflection_fragment:z1,defaultnormal_vertex:G1,displacementmap_pars_vertex:V1,displacementmap_vertex:W1,emissivemap_fragment:$1,emissivemap_pars_fragment:q1,colorspace_fragment:X1,colorspace_pars_fragment:Y1,envmap_fragment:j1,envmap_common_pars_fragment:K1,envmap_pars_fragment:Z1,envmap_pars_vertex:J1,envmap_physical_pars_fragment:ub,envmap_vertex:Q1,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:sb,lightmap_fragment:rb,lightmap_pars_fragment:ab,lights_lambert_fragment:ob,lights_lambert_pars_fragment:lb,lights_pars_begin:cb,lights_toon_fragment:fb,lights_toon_pars_fragment:db,lights_phong_fragment:hb,lights_phong_pars_fragment:pb,lights_physical_fragment:mb,lights_physical_pars_fragment:_b,lights_fragment_begin:gb,lights_fragment_maps:vb,lights_fragment_end:Mb,logdepthbuf_fragment:xb,logdepthbuf_pars_fragment:Sb,logdepthbuf_pars_vertex:yb,logdepthbuf_vertex:Eb,map_fragment:bb,map_pars_fragment:Tb,map_particle_fragment:Ab,map_particle_pars_fragment:wb,metalnessmap_fragment:Cb,metalnessmap_pars_fragment:Rb,morphcolor_vertex:Pb,morphnormal_vertex:Lb,morphtarget_pars_vertex:Db,morphtarget_vertex:Ib,normal_fragment_begin:Ub,normal_fragment_maps:Fb,normal_pars_fragment:kb,normal_pars_vertex:Nb,normal_vertex:Ob,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:Hb,clearcoat_normal_fragment_maps:zb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Vb,opaque_fragment:Wb,packing:$b,premultiplied_alpha_fragment:qb,project_vertex:Xb,dithering_fragment:Yb,dithering_pars_fragment:jb,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:Zb,shadowmap_pars_fragment:Jb,shadowmap_pars_vertex:Qb,shadowmap_vertex:eT,shadowmask_pars_fragment:tT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:sT,skinnormal_vertex:rT,specularmap_fragment:aT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:cT,transmission_fragment:uT,transmission_pars_fragment:fT,uv_pars_fragment:dT,uv_pars_vertex:hT,uv_vertex:pT,worldpos_vertex:mT,background_vert:_T,background_frag:gT,backgroundCube_vert:vT,backgroundCube_frag:MT,cube_vert:xT,cube_frag:ST,depth_vert:yT,depth_frag:ET,distanceRGBA_vert:bT,distanceRGBA_frag:TT,equirect_vert:AT,equirect_frag:wT,linedashed_vert:CT,linedashed_frag:RT,meshbasic_vert:PT,meshbasic_frag:LT,meshlambert_vert:DT,meshlambert_frag:IT,meshmatcap_vert:UT,meshmatcap_frag:FT,meshnormal_vert:kT,meshnormal_frag:NT,meshphong_vert:OT,meshphong_frag:BT,meshphysical_vert:HT,meshphysical_frag:zT,meshtoon_vert:GT,meshtoon_frag:VT,points_vert:WT,points_frag:$T,shadow_vert:qT,shadow_frag:XT,sprite_vert:YT,sprite_frag:jT},we={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Wn={basic:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ft(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Qt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Qt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ft(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Qt([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Qt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Qt([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Qt([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Qt([we.common,we.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Qt([we.lights,we.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Wn.physical={uniforms:Qt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ma={r:0,b:0,g:0};function KT(n,e,t,i,s,r,a){const o=new ft(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function _(m,h){let w=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),w=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===so)?(u===void 0&&(u=new $t(new Nr(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:Xs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,k,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=pt.getTransfer(y.colorSpace)!==_t,(f!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $t(new ns(2,2),new fs({name:"BackgroundMaterial",uniforms:Xs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=pt.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,h){m.getRGB(ma,ap(n)),i.buffers.color.setClear(ma.r,ma.g,ma.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function ZT(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function f(U,$,H,q,se){let le=!1;if(a){const fe=g(q,H,$);c!==fe&&(c=fe,p(c.object)),le=h(U,q,H,se),le&&w(U,q,H,se)}else{const fe=$.wireframe===!0;(c.geometry!==q.id||c.program!==H.id||c.wireframe!==fe)&&(c.geometry=q.id,c.program=H.id,c.wireframe=fe,le=!0)}se!==null&&t.update(se,n.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,B(U,$,H,q),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(se).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(U){return i.isWebGL2?n.bindVertexArray(U):r.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?n.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function g(U,$,H){const q=H.wireframe===!0;let se=o[U.id];se===void 0&&(se={},o[U.id]=se);let le=se[$.id];le===void 0&&(le={},se[$.id]=le);let fe=le[q];return fe===void 0&&(fe=m(d()),le[q]=fe),fe}function m(U){const $=[],H=[],q=[];for(let se=0;se<s;se++)$[se]=0,H[se]=0,q[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:H,attributeDivisors:q,object:U,attributes:{},index:null}}function h(U,$,H,q){const se=c.attributes,le=$.attributes;let fe=0;const z=H.getAttributes();for(const Z in z)if(z[Z].location>=0){const Se=se[Z];let Ee=le[Z];if(Ee===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(Ee=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(Ee=U.instanceColor)),Se===void 0||Se.attribute!==Ee||Ee&&Se.data!==Ee.data)return!0;fe++}return c.attributesNum!==fe||c.index!==q}function w(U,$,H,q){const se={},le=$.attributes;let fe=0;const z=H.getAttributes();for(const Z in z)if(z[Z].location>=0){let Se=le[Z];Se===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor));const Ee={};Ee.attribute=Se,Se&&Se.data&&(Ee.data=Se.data),se[Z]=Ee,fe++}c.attributes=se,c.attributesNum=fe,c.index=q}function y(){const U=c.newAttributes;for(let $=0,H=U.length;$<H;$++)U[$]=0}function E(U){C(U,0)}function C(U,$){const H=c.newAttributes,q=c.enabledAttributes,se=c.attributeDivisors;H[U]=1,q[U]===0&&(n.enableVertexAttribArray(U),q[U]=1),se[U]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,$),se[U]=$)}function k(){const U=c.newAttributes,$=c.enabledAttributes;for(let H=0,q=$.length;H<q;H++)$[H]!==U[H]&&(n.disableVertexAttribArray(H),$[H]=0)}function D(U,$,H,q,se,le,fe){fe===!0?n.vertexAttribIPointer(U,$,H,se,le):n.vertexAttribPointer(U,$,H,q,se,le)}function B(U,$,H,q){if(i.isWebGL2===!1&&(U.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const se=q.attributes,le=H.getAttributes(),fe=$.defaultAttributeValues;for(const z in le){const Z=le[z];if(Z.location>=0){let xe=se[z];if(xe===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(xe=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(xe=U.instanceColor)),xe!==void 0){const Se=xe.normalized,Ee=xe.itemSize,Fe=t.get(xe);if(Fe===void 0)continue;const Be=Fe.buffer,He=Fe.type,ke=Fe.bytesPerElement,Ue=i.isWebGL2===!0&&(He===n.INT||He===n.UNSIGNED_INT||xe.gpuType===Vh);if(xe.isInterleavedBufferAttribute){const Ce=xe.data,x=Ce.stride,F=xe.offset;if(Ce.isInstancedInterleavedBuffer){for(let L=0;L<Z.locationSize;L++)C(Z.location+L,Ce.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let L=0;L<Z.locationSize;L++)E(Z.location+L);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let L=0;L<Z.locationSize;L++)D(Z.location+L,Ee/Z.locationSize,He,Se,x*ke,(F+Ee/Z.locationSize*L)*ke,Ue)}else{if(xe.isInstancedBufferAttribute){for(let Ce=0;Ce<Z.locationSize;Ce++)C(Z.location+Ce,xe.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)E(Z.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let Ce=0;Ce<Z.locationSize;Ce++)D(Z.location+Ce,Ee/Z.locationSize,He,Se,Ee*ke,Ee/Z.locationSize*Ce*ke,Ue)}}else if(fe!==void 0){const Se=fe[z];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(Z.location,Se);break;case 3:n.vertexAttrib3fv(Z.location,Se);break;case 4:n.vertexAttrib4fv(Z.location,Se);break;default:n.vertexAttrib1fv(Z.location,Se)}}}}k()}function S(){W();for(const U in o){const $=o[U];for(const H in $){const q=$[H];for(const se in q)_(q[se].object),delete q[se];delete $[H]}delete o[U]}}function T(U){if(o[U.id]===void 0)return;const $=o[U.id];for(const H in $){const q=$[H];for(const se in q)_(q[se].object),delete q[se];delete $[H]}delete o[U.id]}function J(U){for(const $ in o){const H=o[$];if(H[U.id]===void 0)continue;const q=H[U.id];for(const se in q)_(q[se].object),delete q[se];delete H[U.id]}}function W(){re(),u=!0,c!==l&&(c=l,p(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:re,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:J,initAttributes:y,enableAttribute:E,disableUnusedAttributes:k}}function JT(n,e,t,i){const s=i.isWebGL2;let r;function a(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,p;if(s)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function QT(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,E=a||e.has("OES_texture_float"),C=y&&E,k=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:k}}function eA(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Yi,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,y=w*4;let E=h.clippingState||null;l.value=E,E=u(_,d,y,p);for(let C=0;C!==y;++C)E[C]=t[C];h.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,E=p;y!==g;++y,E+=4)a.copy(f[y]).applyMatrix4(w,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function tA(n){let e=new WeakMap;function t(a,o){return o===Rl?a.mapping=Ws:o===Pl&&(a.mapping=$s),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Rl||o===Pl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new m1(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class nA extends op{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,gf=[.125,.215,.35,.446,.526,.582],es=20,Zo=new nA,vf=new ft;let Jo=null,Qo=0,el=0;const ji=(1+Math.sqrt(5))/2,Ps=1/ji,Mf=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,ji,Ps),new Y(0,ji,-Ps),new Y(Ps,0,ji),new Y(-Ps,0,ji),new Y(ji,Ps,0),new Y(-ji,Ps,0)];class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Qo,el),e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Cr,format:kn,colorSpace:li,depthBuffer:!1},s=Sf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iA(r)),this._blurMaterial=sA(r,e,t)}return s}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,i,s){const o=new vn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vf),u.toneMapping=Pi,u.autoClear=!1;const p=new ip({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new $t(new Nr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(vf),g=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):w===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;_a(s,w*y,h>2?y:0,y,y),u.setRenderTarget(s),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ws||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mf[(s-1)%Mf.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new $t(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*es-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const h=[];let w=0;for(let D=0;D<es;++D){const B=D/g,S=Math.exp(-B*B/2);h.push(S),D===0?w+=S:D<m&&(w+=2*S)}for(let D=0;D<h.length;D++)h[D]=h[D]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const E=this._sizeLods[s],C=3*E*(s>y-Is?s-y+Is:0),k=4*(this._cubeSize-E);_a(t,C,k,3*E,2*E),l.setRenderTarget(t),l.render(f,Zo)}}function iA(n){const e=[],t=[],i=[];let s=n;const r=n-Is+1+gf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Is?l=gf[a-n+Is-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,h=1,w=new Float32Array(g*_*p),y=new Float32Array(m*_*p),E=new Float32Array(h*_*p);for(let k=0;k<p;k++){const D=k%3*2/3-1,B=k>2?0:-1,S=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];w.set(S,g*_*k),y.set(d,m*_*k);const T=[k,k,k,k,k,k];E.set(T,h*_*k)}const C=new ds;C.setAttribute("position",new Yn(w,g)),C.setAttribute("uv",new Yn(y,m)),C.setAttribute("faceIndex",new Yn(E,h)),e.push(C),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sf(n,e,t){const i=new us(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sA(n,e,t){const i=new Float32Array(es),s=new Y(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function yf(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Ef(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function rA(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rl||l===Pl,u=l===Ws||l===$s;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new xf(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new xf(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function aA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function oA(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const w=p.array;g=p.version;for(let y=0,E=w.length;y<E;y+=3){const C=w[y+0],k=w[y+1],D=w[y+2];d.push(C,k,k,D,D,C)}}else if(_!==void 0){const w=_.array;g=_.version;for(let y=0,E=w.length/3-1;y<E;y+=3){const C=y+0,k=y+1,D=y+2;d.push(C,k,k,D,D,C)}}else return;const m=new(Zh(d)?rp:sp)(d,1);m.version=g;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function lA(n,e,t,i){const s=i.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){n.drawElements(r,p,o,d*l),t.update(p,r,1)}function f(d,p,_){if(_===0)return;let g,m;if(s)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,d*l,_),t.update(p,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function cA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function uA(n,e){return n[0]-e[0]}function fA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function dA(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new yt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let $=function(){re.dispose(),r.delete(u),u.removeEventListener("dispose",$)};var p=$;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,k=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let S=0;y===!0&&(S=1),E===!0&&(S=2),C===!0&&(S=3);let T=u.attributes.position.count*S,J=1;T>e.maxTextureSize&&(J=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const W=new Float32Array(T*J*4*g),re=new ep(W,T,J,g);re.type=Ti,re.needsUpdate=!0;const U=S*4;for(let H=0;H<g;H++){const q=k[H],se=D[H],le=B[H],fe=T*J*4*H;for(let z=0;z<q.count;z++){const Z=z*U;y===!0&&(a.fromBufferAttribute(q,z),W[fe+Z+0]=a.x,W[fe+Z+1]=a.y,W[fe+Z+2]=a.z,W[fe+Z+3]=0),E===!0&&(a.fromBufferAttribute(se,z),W[fe+Z+4]=a.x,W[fe+Z+5]=a.y,W[fe+Z+6]=a.z,W[fe+Z+7]=0),C===!0&&(a.fromBufferAttribute(le,z),W[fe+Z+8]=a.x,W[fe+Z+9]=a.y,W[fe+Z+10]=a.z,W[fe+Z+11]=le.itemSize===4?a.w:1)}}m={count:g,texture:re,size:new dt(T,J)},r.set(u,m),u.addEventListener("dispose",$)}let h=0;for(let y=0;y<d.length;y++)h+=d[y];const w=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",w),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];i[u.id]=g}for(let E=0;E<_;E++){const C=g[E];C[0]=E,C[1]=d[E]}g.sort(fA);for(let E=0;E<8;E++)E<_&&g[E][1]?(o[E][0]=g[E][0],o[E][1]=g[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(uA);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let w=0;for(let E=0;E<8;E++){const C=o[E],k=C[0],D=C[1];k!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+E)!==m[k]&&u.setAttribute("morphTarget"+E,m[k]),h&&u.getAttribute("morphNormal"+E)!==h[k]&&u.setAttribute("morphNormal"+E,h[k]),s[E]=D,w+=D):(m&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),h&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const y=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function hA(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const up=new un,fp=new ep,dp=new JE,hp=new lp,bf=[],Tf=[],Af=new Float32Array(16),wf=new Float32Array(9),Cf=new Float32Array(4);function Qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function oo(n,e){let t=Tf[e];t===void 0&&(t=new Int32Array(e),Tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function _A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function vA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;Cf.set(i),n.uniformMatrix2fv(this.addr,!1,Cf),Ot(t,i)}}function MA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;wf.set(i),n.uniformMatrix3fv(this.addr,!1,wf),Ot(t,i)}}function xA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;Af.set(i),n.uniformMatrix4fv(this.addr,!1,Af),Ot(t,i)}}function SA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function EA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function bA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function TA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function wA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function RA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||up,s)}function PA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||dp,s)}function LA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hp,s)}function DA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fp,s)}function IA(n){switch(n){case 5126:return pA;case 35664:return mA;case 35665:return _A;case 35666:return gA;case 35674:return vA;case 35675:return MA;case 35676:return xA;case 5124:case 35670:return SA;case 35667:case 35671:return yA;case 35668:case 35672:return EA;case 35669:case 35673:return bA;case 5125:return TA;case 36294:return AA;case 36295:return wA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return DA}}function UA(n,e){n.uniform1fv(this.addr,e)}function FA(n,e){const t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function kA(n,e){const t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function NA(n,e){const t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function OA(n,e){const t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BA(n,e){const t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HA(n,e){const t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zA(n,e){n.uniform1iv(this.addr,e)}function GA(n,e){n.uniform2iv(this.addr,e)}function VA(n,e){n.uniform3iv(this.addr,e)}function WA(n,e){n.uniform4iv(this.addr,e)}function $A(n,e){n.uniform1uiv(this.addr,e)}function qA(n,e){n.uniform2uiv(this.addr,e)}function XA(n,e){n.uniform3uiv(this.addr,e)}function YA(n,e){n.uniform4uiv(this.addr,e)}function jA(n,e,t){const i=this.cache,s=e.length,r=oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||up,r[a])}function KA(n,e,t){const i=this.cache,s=e.length,r=oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||dp,r[a])}function ZA(n,e,t){const i=this.cache,s=e.length,r=oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hp,r[a])}function JA(n,e,t){const i=this.cache,s=e.length,r=oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fp,r[a])}function QA(n){switch(n){case 5126:return UA;case 35664:return FA;case 35665:return kA;case 35666:return NA;case 35674:return OA;case 35675:return BA;case 35676:return HA;case 5124:case 35670:return zA;case 35667:case 35671:return GA;case 35668:case 35672:return VA;case 35669:case 35673:return WA;case 5125:return $A;case 36294:return qA;case 36295:return XA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return JA}}class ew{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=IA(t.type)}}class tw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=QA(t.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Rf(n,e){n.seq.push(e),n.map[e.id]=e}function iw(n,e,t){const i=n.name,s=i.length;for(tl.lastIndex=0;;){const r=tl.exec(i),a=tl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rf(t,c===void 0?new ew(o,n,e):new tw(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new nw(o),Rf(t,f)),t=f}}}class Ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);iw(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Pf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sw=37297;let rw=0;function aw(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function ow(n){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(n);let i;switch(e===t?i="":e===Na&&t===ka?i="LinearDisplayP3ToLinearSRGB":e===ka&&t===Na&&(i="LinearSRGBToLinearDisplayP3"),n){case li:case ro:return[i,"LinearTransferOETF"];case qt:case Mc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+aw(n.getShaderSource(e),a)}else return s}function lw(n,e){const t=ow(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cw(n,e){let t;switch(e){case xE:t="Linear";break;case SE:t="Reinhard";break;case yE:t="OptimizedCineon";break;case EE:t="ACESFilmic";break;case bE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function uw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function fw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function hr(n){return n!==""}function Df(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(hw,mw)}const pw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mw(n,e){let t=nt[e];if(t===void 0){const i=pw.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(n){return n.replace(_w,gw)}function gw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Mw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case $s:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function Sw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gc:e="ENVMAP_BLENDING_MULTIPLY";break;case vE:e="ENVMAP_BLENDING_MIX";break;case ME:e="ENVMAP_BLENDING_ADD";break}return e}function yw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ew(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vw(t),c=Mw(t),u=xw(t),f=Sw(t),d=yw(t),p=t.isWebGL2?"":uw(t),_=fw(r),g=s.createProgram();let m,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hr).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hr).join(`
`),h.length>0&&(h+=`
`)):(m=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),h=[p,Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,lw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=kl(a),a=Df(a,t),a=If(a,t),o=kl(o),o=Df(o,t),o=If(o,t),a=Uf(a),o=Uf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=w+m+a,E=w+h+o,C=Pf(s,s.VERTEX_SHADER,y),k=Pf(s,s.FRAGMENT_SHADER,E);s.attachShader(g,C),s.attachShader(g,k),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(J){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(g).trim(),re=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(k).trim();let $=!0,H=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,C,k);else{const q=Lf(s,C,"vertex"),se=Lf(s,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+q+`
`+se)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(re===""||U==="")&&(H=!1);H&&(J.diagnostics={runnable:$,programLog:W,vertexShader:{log:re,prefix:m},fragmentShader:{log:U,prefix:h}})}s.deleteShader(C),s.deleteShader(k),B=new Ta(s,g),S=dw(s,g)}let B;this.getUniforms=function(){return B===void 0&&D(this),B};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(g,sw)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=k,this}let bw=0;class Tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Aw(e),t.set(e,i)),i}}class Aw{constructor(e){this.id=bw++,this.code=e,this.usedTimes=0}}function ww(n,e,t,i,s,r,a){const o=new Sc,l=new Tw,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,T,J,W,re){const U=W.fog,$=re.geometry,H=S.isMeshStandardMaterial?W.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),se=q&&q.mapping===so?q.image.height:null,le=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,z=fe!==void 0?fe.length:0;let Z=0;$.morphAttributes.position!==void 0&&(Z=1),$.morphAttributes.normal!==void 0&&(Z=2),$.morphAttributes.color!==void 0&&(Z=3);let xe,Se,Ee,Fe;if(le){const qe=Wn[le];xe=qe.vertexShader,Se=qe.fragmentShader}else xe=S.vertexShader,Se=S.fragmentShader,l.update(S),Ee=l.getVertexShaderID(S),Fe=l.getFragmentShaderID(S);const Be=n.getRenderTarget(),He=re.isInstancedMesh===!0,ke=!!S.map,Ue=!!S.matcap,Ce=!!q,x=!!S.aoMap,F=!!S.lightMap,L=!!S.bumpMap,G=!!S.normalMap,V=!!S.displacementMap,te=!!S.emissiveMap,he=!!S.metalnessMap,ae=!!S.roughnessMap,me=S.anisotropy>0,ue=S.clearcoat>0,Te=S.iridescence>0,b=S.sheen>0,M=S.transmission>0,N=me&&!!S.anisotropyMap,oe=ue&&!!S.clearcoatMap,ce=ue&&!!S.clearcoatNormalMap,pe=ue&&!!S.clearcoatRoughnessMap,ye=Te&&!!S.iridescenceMap,ve=Te&&!!S.iridescenceThicknessMap,Ae=b&&!!S.sheenColorMap,Ve=b&&!!S.sheenRoughnessMap,it=!!S.specularMap,Me=!!S.specularColorMap,Je=!!S.specularIntensityMap,Oe=M&&!!S.transmissionMap,We=M&&!!S.thicknessMap,Ge=!!S.gradientMap,De=!!S.alphaMap,at=S.alphaTest>0,O=!!S.alphaHash,Le=!!S.extensions,I=!!$.attributes.uv1,R=!!$.attributes.uv2,X=!!$.attributes.uv3;let _e=Pi;return S.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(_e=n.toneMapping),{isWebGL2:u,shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:xe,fragmentShader:Se,defines:S.defines,customVertexShaderID:Ee,customFragmentShaderID:Fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:He,instancingColor:He&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:li,map:ke,matcap:Ue,envMap:Ce,envMapMode:Ce&&q.mapping,envMapCubeUVHeight:se,aoMap:x,lightMap:F,bumpMap:L,normalMap:G,displacementMap:d&&V,emissiveMap:te,normalMapObjectSpace:G&&S.normalMapType===NE,normalMapTangentSpace:G&&S.normalMapType===Kh,metalnessMap:he,roughnessMap:ae,anisotropy:me,anisotropyMap:N,clearcoat:ue,clearcoatMap:oe,clearcoatNormalMap:ce,clearcoatRoughnessMap:pe,iridescence:Te,iridescenceMap:ye,iridescenceThicknessMap:ve,sheen:b,sheenColorMap:Ae,sheenRoughnessMap:Ve,specularMap:it,specularColorMap:Me,specularIntensityMap:Je,transmission:M,transmissionMap:Oe,thicknessMap:We,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===Os,alphaMap:De,alphaTest:at,alphaHash:O,combine:S.combine,mapUv:ke&&g(S.map.channel),aoMapUv:x&&g(S.aoMap.channel),lightMapUv:F&&g(S.lightMap.channel),bumpMapUv:L&&g(S.bumpMap.channel),normalMapUv:G&&g(S.normalMap.channel),displacementMapUv:V&&g(S.displacementMap.channel),emissiveMapUv:te&&g(S.emissiveMap.channel),metalnessMapUv:he&&g(S.metalnessMap.channel),roughnessMapUv:ae&&g(S.roughnessMap.channel),anisotropyMapUv:N&&g(S.anisotropyMap.channel),clearcoatMapUv:oe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&g(S.sheenRoughnessMap.channel),specularMapUv:it&&g(S.specularMap.channel),specularColorMapUv:Me&&g(S.specularColorMap.channel),specularIntensityMapUv:Je&&g(S.specularIntensityMap.channel),transmissionMapUv:Oe&&g(S.transmissionMap.channel),thicknessMapUv:We&&g(S.thicknessMap.channel),alphaMapUv:De&&g(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(G||me),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:I,vertexUv2s:R,vertexUv3s:X,pointsUvs:re.isPoints===!0&&!!$.attributes.uv&&(ke||De),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&J.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Le&&S.extensions.derivatives===!0,extensionFragDepth:Le&&S.extensions.fragDepth===!0,extensionDrawBuffers:Le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const J in S.defines)T.push(J),T.push(S.defines[J]);return S.isRawShaderMaterial===!1&&(w(T,S),y(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function w(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function y(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function E(S){const T=_[S.type];let J;if(T){const W=Wn[T];J=f1.clone(W.uniforms)}else J=S.uniforms;return J}function C(S,T){let J;for(let W=0,re=c.length;W<re;W++){const U=c[W];if(U.cacheKey===T){J=U,++J.usedTimes;break}}return J===void 0&&(J=new Ew(n,T,S,r),c.push(J)),J}function k(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function D(S){l.remove(S)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:C,releaseProgram:k,releaseShaderCache:D,programs:c,dispose:B}}function Cw(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Rw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,p,_,g,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function o(f,d,p,_,g,m){const h=a(f,d,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,d,p,_,g,m){const h=a(f,d,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Rw),i.length>1&&i.sort(d||kf),s.length>1&&s.sort(d||kf)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Pw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Nf,n.set(i,[a])):s>=r.length?(a=new Nf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ft};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function Dw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Iw=0;function Uw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fw(n,e){const t=new Lw,i=Dw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new Y);const r=new Y,a=new Ut,o=new Ut;function l(u,f){let d=0,p=0,_=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let g=0,m=0,h=0,w=0,y=0,E=0,C=0,k=0,D=0,B=0,S=0;u.sort(Uw);const T=f===!0?Math.PI:1;for(let W=0,re=u.length;W<re;W++){const U=u[W],$=U.color,H=U.intensity,q=U.distance,se=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=$.r*H*T,p+=$.g*H*T,_+=$.b*H*T;else if(U.isLightProbe){for(let le=0;le<9;le++)s.probe[le].addScaledVector(U.sh.coefficients[le],H);S++}else if(U.isDirectionalLight){const le=t.get(U);if(le.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const fe=U.shadow,z=i.get(U);z.shadowBias=fe.bias,z.shadowNormalBias=fe.normalBias,z.shadowRadius=fe.radius,z.shadowMapSize=fe.mapSize,s.directionalShadow[g]=z,s.directionalShadowMap[g]=se,s.directionalShadowMatrix[g]=U.shadow.matrix,E++}s.directional[g]=le,g++}else if(U.isSpotLight){const le=t.get(U);le.position.setFromMatrixPosition(U.matrixWorld),le.color.copy($).multiplyScalar(H*T),le.distance=q,le.coneCos=Math.cos(U.angle),le.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),le.decay=U.decay,s.spot[h]=le;const fe=U.shadow;if(U.map&&(s.spotLightMap[D]=U.map,D++,fe.updateMatrices(U),U.castShadow&&B++),s.spotLightMatrix[h]=fe.matrix,U.castShadow){const z=i.get(U);z.shadowBias=fe.bias,z.shadowNormalBias=fe.normalBias,z.shadowRadius=fe.radius,z.shadowMapSize=fe.mapSize,s.spotShadow[h]=z,s.spotShadowMap[h]=se,k++}h++}else if(U.isRectAreaLight){const le=t.get(U);le.color.copy($).multiplyScalar(H),le.halfWidth.set(U.width*.5,0,0),le.halfHeight.set(0,U.height*.5,0),s.rectArea[w]=le,w++}else if(U.isPointLight){const le=t.get(U);if(le.color.copy(U.color).multiplyScalar(U.intensity*T),le.distance=U.distance,le.decay=U.decay,U.castShadow){const fe=U.shadow,z=i.get(U);z.shadowBias=fe.bias,z.shadowNormalBias=fe.normalBias,z.shadowRadius=fe.radius,z.shadowMapSize=fe.mapSize,z.shadowCameraNear=fe.camera.near,z.shadowCameraFar=fe.camera.far,s.pointShadow[m]=z,s.pointShadowMap[m]=se,s.pointShadowMatrix[m]=U.shadow.matrix,C++}s.point[m]=le,m++}else if(U.isHemisphereLight){const le=t.get(U);le.skyColor.copy(U.color).multiplyScalar(H*T),le.groundColor.copy(U.groundColor).multiplyScalar(H*T),s.hemi[y]=le,y++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;const J=s.hash;(J.directionalLength!==g||J.pointLength!==m||J.spotLength!==h||J.rectAreaLength!==w||J.hemiLength!==y||J.numDirectionalShadows!==E||J.numPointShadows!==C||J.numSpotShadows!==k||J.numSpotMaps!==D||J.numLightProbes!==S)&&(s.directional.length=g,s.spot.length=h,s.rectArea.length=w,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=k,s.spotShadowMap.length=k,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=k+D-B,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=S,J.directionalLength=g,J.pointLength=m,J.spotLength=h,J.rectAreaLength=w,J.hemiLength=y,J.numDirectionalShadows=E,J.numPointShadows=C,J.numSpotShadows=k,J.numSpotMaps=D,J.numLightProbes=S,s.version=Iw++)}function c(u,f){let d=0,p=0,_=0,g=0,m=0;const h=f.matrixWorldInverse;for(let w=0,y=u.length;w<y;w++){const E=u[w];if(E.isDirectionalLight){const C=s.directional[d];C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(h),d++}else if(E.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(h),_++}else if(E.isRectAreaLight){const C=s.rectArea[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(h),o.identity(),a.copy(E.matrixWorld),a.premultiply(h),o.extractRotation(a),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const C=s.point[p];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(h),p++}else if(E.isHemisphereLight){const C=s.hemi[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:s}}function Of(n,e){const t=new Fw(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(f){i.push(f)}function o(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function kw(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Of(n,e),t.set(r,[l])):a>=o.length?(l=new Of(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class Nw extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hw=`uniform sampler2D shadow_pass;
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
}`;function zw(n,e,t){let i=new yc;const s=new dt,r=new dt,a=new yt,o=new Nw({depthPacking:kE}),l=new Ow,c={},u=t.maxTextureSize,f={[Ii]:cn,[cn]:Ii,[on]:on},d=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Bw,fragmentShader:Hw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ds;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $t(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let h=this.type;this.render=function(C,k,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const B=n.getRenderTarget(),S=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Ri),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const W=h!==ni&&this.type===ni,re=h===ni&&this.type!==ni;for(let U=0,$=C.length;U<$;U++){const H=C[U],q=H.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const se=q.getFrameExtents();if(s.multiply(se),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,q.mapSize.y=r.y)),q.map===null||W===!0||re===!0){const fe=this.type!==ni?{minFilter:tn,magFilter:tn}:{};q.map!==null&&q.map.dispose(),q.map=new us(s.x,s.y,fe),q.map.texture.name=H.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const le=q.getViewportCount();for(let fe=0;fe<le;fe++){const z=q.getViewport(fe);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),J.viewport(a),q.updateMatrices(H,fe),i=q.getFrustum(),E(k,D,q.camera,H,this.type)}q.isPointLightShadow!==!0&&this.type===ni&&w(q,D),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(B,S,T)};function w(C,k){const D=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new us(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(k,null,D,d,g,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(k,null,D,p,g,null)}function y(C,k,D,B){let S=null;const T=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)S=T;else if(S=D.isPointLight===!0?l:o,n.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const J=S.uuid,W=k.uuid;let re=c[J];re===void 0&&(re={},c[J]=re);let U=re[W];U===void 0&&(U=S.clone(),re[W]=U),S=U}if(S.visible=k.visible,S.wireframe=k.wireframe,B===ni?S.side=k.shadowSide!==null?k.shadowSide:k.side:S.side=k.shadowSide!==null?k.shadowSide:f[k.side],S.alphaMap=k.alphaMap,S.alphaTest=k.alphaTest,S.map=k.map,S.clipShadows=k.clipShadows,S.clippingPlanes=k.clippingPlanes,S.clipIntersection=k.clipIntersection,S.displacementMap=k.displacementMap,S.displacementScale=k.displacementScale,S.displacementBias=k.displacementBias,S.wireframeLinewidth=k.wireframeLinewidth,S.linewidth=k.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const J=n.properties.get(S);J.light=D}return S}function E(C,k,D,B,S){if(C.visible===!1)return;if(C.layers.test(k.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const W=e.update(C),re=C.material;if(Array.isArray(re)){const U=W.groups;for(let $=0,H=U.length;$<H;$++){const q=U[$],se=re[q.materialIndex];if(se&&se.visible){const le=y(C,se,B,S);n.renderBufferDirect(D,null,W,le,C,q)}}}else if(re.visible){const U=y(C,re,B,S);n.renderBufferDirect(D,null,W,U,C,null)}}const J=C.children;for(let W=0,re=J.length;W<re;W++)E(J[W],k,D,B,S)}}function Gw(n,e,t){const i=t.isWebGL2;function s(){let O=!1;const Le=new yt;let I=null;const R=new yt(0,0,0,0);return{setMask:function(X){I!==X&&!O&&(n.colorMask(X,X,X,X),I=X)},setLocked:function(X){O=X},setClear:function(X,_e,Ne,qe,Wt){Wt===!0&&(X*=qe,_e*=qe,Ne*=qe),Le.set(X,_e,Ne,qe),R.equals(Le)===!1&&(n.clearColor(X,_e,Ne,qe),R.copy(Le))},reset:function(){O=!1,I=null,R.set(-1,0,0,0)}}}function r(){let O=!1,Le=null,I=null,R=null;return{setTest:function(X){X?ke(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(X){Le!==X&&!O&&(n.depthMask(X),Le=X)},setFunc:function(X){if(I!==X){switch(X){case fE:n.depthFunc(n.NEVER);break;case dE:n.depthFunc(n.ALWAYS);break;case hE:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case pE:n.depthFunc(n.EQUAL);break;case mE:n.depthFunc(n.GEQUAL);break;case _E:n.depthFunc(n.GREATER);break;case gE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}I=X}},setLocked:function(X){O=X},setClear:function(X){R!==X&&(n.clearDepth(X),R=X)},reset:function(){O=!1,Le=null,I=null,R=null}}}function a(){let O=!1,Le=null,I=null,R=null,X=null,_e=null,Ne=null,qe=null,Wt=null;return{setTest:function(ht){O||(ht?ke(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(ht){Le!==ht&&!O&&(n.stencilMask(ht),Le=ht)},setFunc:function(ht,xt,nn){(I!==ht||R!==xt||X!==nn)&&(n.stencilFunc(ht,xt,nn),I=ht,R=xt,X=nn)},setOp:function(ht,xt,nn){(_e!==ht||Ne!==xt||qe!==nn)&&(n.stencilOp(ht,xt,nn),_e=ht,Ne=xt,qe=nn)},setLocked:function(ht){O=ht},setClear:function(ht){Wt!==ht&&(n.clearStencil(ht),Wt=ht)},reset:function(){O=!1,Le=null,I=null,R=null,X=null,_e=null,Ne=null,qe=null,Wt=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,h=!1,w=null,y=null,E=null,C=null,k=null,D=null,B=null,S=new ft(0,0,0),T=0,J=!1,W=null,re=null,U=null,$=null,H=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const fe=n.getParameter(n.VERSION);fe.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(fe)[1]),se=le>=1):fe.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),se=le>=2);let z=null,Z={};const xe=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ee=new yt().fromArray(xe),Fe=new yt().fromArray(Se);function Be(O,Le,I,R){const X=new Uint8Array(4),_e=n.createTexture();n.bindTexture(O,_e),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<I;Ne++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Le,0,n.RGBA,1,1,R,0,n.RGBA,n.UNSIGNED_BYTE,X):n.texImage2D(Le+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,X);return _e}const He={};He[n.TEXTURE_2D]=Be(n.TEXTURE_2D,n.TEXTURE_2D,1),He[n.TEXTURE_CUBE_MAP]=Be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(He[n.TEXTURE_2D_ARRAY]=Be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),He[n.TEXTURE_3D]=Be(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ke(n.DEPTH_TEST),l.setFunc(Ua),he(!1),ae(vu),ke(n.CULL_FACE),V(Ri);function ke(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function Ue(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function Ce(O,Le){return p[O]!==Le?(n.bindFramebuffer(O,Le),p[O]=Le,i&&(O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Le),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Le)),!0):!1}function x(O,Le){let I=g,R=!1;if(O)if(I=_.get(Le),I===void 0&&(I=[],_.set(Le,I)),O.isWebGLMultipleRenderTargets){const X=O.texture;if(I.length!==X.length||I[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Ne=X.length;_e<Ne;_e++)I[_e]=n.COLOR_ATTACHMENT0+_e;I.length=X.length,R=!0}}else I[0]!==n.COLOR_ATTACHMENT0&&(I[0]=n.COLOR_ATTACHMENT0,R=!0);else I[0]!==n.BACK&&(I[0]=n.BACK,R=!0);R&&(t.isWebGL2?n.drawBuffers(I):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(I))}function F(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const L={[Qi]:n.FUNC_ADD,[Ky]:n.FUNC_SUBTRACT,[Zy]:n.FUNC_REVERSE_SUBTRACT};if(i)L[yu]=n.MIN,L[Eu]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(L[yu]=O.MIN_EXT,L[Eu]=O.MAX_EXT)}const G={[Jy]:n.ZERO,[Qy]:n.ONE,[eE]:n.SRC_COLOR,[wl]:n.SRC_ALPHA,[aE]:n.SRC_ALPHA_SATURATE,[sE]:n.DST_COLOR,[nE]:n.DST_ALPHA,[tE]:n.ONE_MINUS_SRC_COLOR,[Cl]:n.ONE_MINUS_SRC_ALPHA,[rE]:n.ONE_MINUS_DST_COLOR,[iE]:n.ONE_MINUS_DST_ALPHA,[oE]:n.CONSTANT_COLOR,[lE]:n.ONE_MINUS_CONSTANT_COLOR,[cE]:n.CONSTANT_ALPHA,[uE]:n.ONE_MINUS_CONSTANT_ALPHA};function V(O,Le,I,R,X,_e,Ne,qe,Wt,ht){if(O===Ri){h===!0&&(Ue(n.BLEND),h=!1);return}if(h===!1&&(ke(n.BLEND),h=!0),O!==jy){if(O!==w||ht!==J){if((y!==Qi||k!==Qi)&&(n.blendEquation(n.FUNC_ADD),y=Qi,k=Qi),ht)switch(O){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.ONE,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,C=null,D=null,B=null,S.set(0,0,0),T=0,w=O,J=ht}return}X=X||Le,_e=_e||I,Ne=Ne||R,(Le!==y||X!==k)&&(n.blendEquationSeparate(L[Le],L[X]),y=Le,k=X),(I!==E||R!==C||_e!==D||Ne!==B)&&(n.blendFuncSeparate(G[I],G[R],G[_e],G[Ne]),E=I,C=R,D=_e,B=Ne),(qe.equals(S)===!1||Wt!==T)&&(n.blendColor(qe.r,qe.g,qe.b,Wt),S.copy(qe),T=Wt),w=O,J=!1}function te(O,Le){O.side===on?Ue(n.CULL_FACE):ke(n.CULL_FACE);let I=O.side===cn;Le&&(I=!I),he(I),O.blending===Os&&O.transparent===!1?V(Ri):V(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const R=O.stencilWrite;c.setTest(R),R&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ke(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(O){W!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),W=O)}function ae(O){O!==qy?(ke(n.CULL_FACE),O!==re&&(O===vu?n.cullFace(n.BACK):O===Xy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),re=O}function me(O){O!==U&&(se&&n.lineWidth(O),U=O)}function ue(O,Le,I){O?(ke(n.POLYGON_OFFSET_FILL),($!==Le||H!==I)&&(n.polygonOffset(Le,I),$=Le,H=I)):Ue(n.POLYGON_OFFSET_FILL)}function Te(O){O?ke(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function b(O){O===void 0&&(O=n.TEXTURE0+q-1),z!==O&&(n.activeTexture(O),z=O)}function M(O,Le,I){I===void 0&&(z===null?I=n.TEXTURE0+q-1:I=z);let R=Z[I];R===void 0&&(R={type:void 0,texture:void 0},Z[I]=R),(R.type!==O||R.texture!==Le)&&(z!==I&&(n.activeTexture(I),z=I),n.bindTexture(O,Le||He[O]),R.type=O,R.texture=Le)}function N(){const O=Z[z];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(O){Ee.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ee.copy(O))}function We(O){Fe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Fe.copy(O))}function Ge(O,Le){let I=f.get(Le);I===void 0&&(I=new WeakMap,f.set(Le,I));let R=I.get(O);R===void 0&&(R=n.getUniformBlockIndex(Le,O.name),I.set(O,R))}function De(O,Le){const R=f.get(Le).get(O);u.get(Le)!==R&&(n.uniformBlockBinding(Le,R,O.__bindingPointIndex),u.set(Le,R))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},z=null,Z={},p={},_=new WeakMap,g=[],m=null,h=!1,w=null,y=null,E=null,C=null,k=null,D=null,B=null,S=new ft(0,0,0),T=0,J=!1,W=null,re=null,U=null,$=null,H=null,Ee.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ke,disable:Ue,bindFramebuffer:Ce,drawBuffers:x,useProgram:F,setBlending:V,setMaterial:te,setFlipSided:he,setCullFace:ae,setLineWidth:me,setPolygonOffset:ue,setScissorTest:Te,activeTexture:b,bindTexture:M,unbindTexture:N,compressedTexImage2D:oe,compressedTexImage3D:ce,texImage2D:Me,texImage3D:Je,updateUBOMapping:Ge,uniformBlockBinding:De,texStorage2D:Ve,texStorage3D:it,texSubImage2D:pe,texSubImage3D:ye,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ae,scissor:Oe,viewport:We,reset:at}}function Vw(n,e,t,i,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,M){return h?new OffscreenCanvas(b,M):Rr("canvas")}function y(b,M,N,oe){let ce=1;if((b.width>oe||b.height>oe)&&(ce=oe/Math.max(b.width,b.height)),ce<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const pe=M?Fl:Math.floor,ye=pe(ce*b.width),ve=pe(ce*b.height);g===void 0&&(g=w(ye,ve));const Ae=N?w(ye,ve):g;return Ae.width=ye,Ae.height=ve,Ae.getContext("2d").drawImage(b,0,0,ye,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ye+"x"+ve+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function E(b){return Qu(b.width)&&Qu(b.height)}function C(b){return o?!1:b.wrapS!==Fn||b.wrapT!==Fn||b.minFilter!==tn&&b.minFilter!==An}function k(b,M){return b.generateMipmaps&&M&&b.minFilter!==tn&&b.minFilter!==An}function D(b){n.generateMipmap(b)}function B(b,M,N,oe,ce=!1){if(o===!1)return M;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let pe=M;if(M===n.RED&&(N===n.FLOAT&&(pe=n.R32F),N===n.HALF_FLOAT&&(pe=n.R16F),N===n.UNSIGNED_BYTE&&(pe=n.R8)),M===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(pe=n.R8UI),N===n.UNSIGNED_SHORT&&(pe=n.R16UI),N===n.UNSIGNED_INT&&(pe=n.R32UI),N===n.BYTE&&(pe=n.R8I),N===n.SHORT&&(pe=n.R16I),N===n.INT&&(pe=n.R32I)),M===n.RG&&(N===n.FLOAT&&(pe=n.RG32F),N===n.HALF_FLOAT&&(pe=n.RG16F),N===n.UNSIGNED_BYTE&&(pe=n.RG8)),M===n.RGBA){const ye=ce?Fa:pt.getTransfer(oe);N===n.FLOAT&&(pe=n.RGBA32F),N===n.HALF_FLOAT&&(pe=n.RGBA16F),N===n.UNSIGNED_BYTE&&(pe=ye===_t?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function S(b,M,N){return k(b,N)===!0||b.isFramebufferTexture&&b.minFilter!==tn&&b.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function T(b){return b===tn||b===bu||b===Ao?n.NEAREST:n.LINEAR}function J(b){const M=b.target;M.removeEventListener("dispose",J),re(M),M.isVideoTexture&&_.delete(M)}function W(b){const M=b.target;M.removeEventListener("dispose",W),$(M)}function re(b){const M=i.get(b);if(M.__webglInit===void 0)return;const N=b.source,oe=m.get(N);if(oe){const ce=oe[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&U(b),Object.keys(oe).length===0&&m.delete(N)}i.remove(b)}function U(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const N=b.source,oe=m.get(N);delete oe[M.__cacheKey],a.memory.textures--}function $(b){const M=b.texture,N=i.get(b),oe=i.get(M);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(N.__webglFramebuffer[ce]))for(let pe=0;pe<N.__webglFramebuffer[ce].length;pe++)n.deleteFramebuffer(N.__webglFramebuffer[ce][pe]);else n.deleteFramebuffer(N.__webglFramebuffer[ce]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[ce])}else{if(Array.isArray(N.__webglFramebuffer))for(let ce=0;ce<N.__webglFramebuffer.length;ce++)n.deleteFramebuffer(N.__webglFramebuffer[ce]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ce=0;ce<N.__webglColorRenderbuffer.length;ce++)N.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[ce]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ce=0,pe=M.length;ce<pe;ce++){const ye=i.get(M[ce]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(M[ce])}i.remove(M),i.remove(b)}let H=0;function q(){H=0}function se(){const b=H;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),H+=1,b}function le(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function fe(b,M){const N=i.get(b);if(b.isVideoTexture&&ue(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const oe=b.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(N,b,M);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+M)}function z(b,M){const N=i.get(b);if(b.version>0&&N.__version!==b.version){ke(N,b,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+M)}function Z(b,M){const N=i.get(b);if(b.version>0&&N.__version!==b.version){ke(N,b,M);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+M)}function xe(b,M){const N=i.get(b);if(b.version>0&&N.__version!==b.version){Ue(N,b,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+M)}const Se={[Ll]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},Ee={[tn]:n.NEAREST,[bu]:n.NEAREST_MIPMAP_NEAREST,[Ao]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[TE]:n.LINEAR_MIPMAP_NEAREST,[wr]:n.LINEAR_MIPMAP_LINEAR},Fe={[OE]:n.NEVER,[$E]:n.ALWAYS,[BE]:n.LESS,[zE]:n.LEQUAL,[HE]:n.EQUAL,[WE]:n.GEQUAL,[GE]:n.GREATER,[VE]:n.NOTEQUAL};function Be(b,M,N){if(N?(n.texParameteri(b,n.TEXTURE_WRAP_S,Se[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Se[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Se[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Ee[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Ee[M.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Fn||M.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(M.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==tn&&M.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===tn||M.minFilter!==Ao&&M.minFilter!==wr||M.type===Ti&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Cr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(b,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function He(b,M){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",J));const oe=M.source;let ce=m.get(oe);ce===void 0&&(ce={},m.set(oe,ce));const pe=le(M);if(pe!==b.__cacheKey){ce[pe]===void 0&&(ce[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),ce[pe].usedTimes++;const ye=ce[b.__cacheKey];ye!==void 0&&(ce[b.__cacheKey].usedTimes--,ye.usedTimes===0&&U(M)),b.__cacheKey=pe,b.__webglTexture=ce[pe].texture}return N}function ke(b,M,N){let oe=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=n.TEXTURE_3D);const ce=He(b,M),pe=M.source;t.bindTexture(oe,b.__webglTexture,n.TEXTURE0+N);const ye=i.get(pe);if(pe.version!==ye.__version||ce===!0){t.activeTexture(n.TEXTURE0+N);const ve=pt.getPrimaries(pt.workingColorSpace),Ae=M.colorSpace===wn?null:pt.getPrimaries(M.colorSpace),Ve=M.colorSpace===wn||ve===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const it=C(M)&&E(M.image)===!1;let Me=y(M.image,it,!1,u);Me=Te(M,Me);const Je=E(Me)||o,Oe=r.convert(M.format,M.colorSpace);let We=r.convert(M.type),Ge=B(M.internalFormat,Oe,We,M.colorSpace,M.isVideoTexture);Be(oe,M,Je);let De;const at=M.mipmaps,O=o&&M.isVideoTexture!==!0,Le=ye.__version===void 0||ce===!0,I=S(M,Me,Je);if(M.isDepthTexture)Ge=n.DEPTH_COMPONENT,o?M.type===Ti?Ge=n.DEPTH_COMPONENT32F:M.type===bi?Ge=n.DEPTH_COMPONENT24:M.type===rs?Ge=n.DEPTH24_STENCIL8:Ge=n.DEPTH_COMPONENT16:M.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===as&&Ge===n.DEPTH_COMPONENT&&M.type!==vc&&M.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=bi,We=r.convert(M.type)),M.format===qs&&Ge===n.DEPTH_COMPONENT&&(Ge=n.DEPTH_STENCIL,M.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=rs,We=r.convert(M.type))),Le&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ge,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Oe,We,null));else if(M.isDataTexture)if(at.length>0&&Je){O&&Le&&t.texStorage2D(n.TEXTURE_2D,I,Ge,at[0].width,at[0].height);for(let R=0,X=at.length;R<X;R++)De=at[R],O?t.texSubImage2D(n.TEXTURE_2D,R,0,0,De.width,De.height,Oe,We,De.data):t.texImage2D(n.TEXTURE_2D,R,Ge,De.width,De.height,0,Oe,We,De.data);M.generateMipmaps=!1}else O?(Le&&t.texStorage2D(n.TEXTURE_2D,I,Ge,Me.width,Me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,We,Me.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Oe,We,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,I,Ge,at[0].width,at[0].height,Me.depth);for(let R=0,X=at.length;R<X;R++)De=at[R],M.format!==kn?Oe!==null?O?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,De.width,De.height,Me.depth,Oe,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,R,Ge,De.width,De.height,Me.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?t.texSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,De.width,De.height,Me.depth,Oe,We,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,R,Ge,De.width,De.height,Me.depth,0,Oe,We,De.data)}else{O&&Le&&t.texStorage2D(n.TEXTURE_2D,I,Ge,at[0].width,at[0].height);for(let R=0,X=at.length;R<X;R++)De=at[R],M.format!==kn?Oe!==null?O?t.compressedTexSubImage2D(n.TEXTURE_2D,R,0,0,De.width,De.height,Oe,De.data):t.compressedTexImage2D(n.TEXTURE_2D,R,Ge,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?t.texSubImage2D(n.TEXTURE_2D,R,0,0,De.width,De.height,Oe,We,De.data):t.texImage2D(n.TEXTURE_2D,R,Ge,De.width,De.height,0,Oe,We,De.data)}else if(M.isDataArrayTexture)O?(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,I,Ge,Me.width,Me.height,Me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,We,Me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,Me.width,Me.height,Me.depth,0,Oe,We,Me.data);else if(M.isData3DTexture)O?(Le&&t.texStorage3D(n.TEXTURE_3D,I,Ge,Me.width,Me.height,Me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,We,Me.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,Me.width,Me.height,Me.depth,0,Oe,We,Me.data);else if(M.isFramebufferTexture){if(Le)if(O)t.texStorage2D(n.TEXTURE_2D,I,Ge,Me.width,Me.height);else{let R=Me.width,X=Me.height;for(let _e=0;_e<I;_e++)t.texImage2D(n.TEXTURE_2D,_e,Ge,R,X,0,Oe,We,null),R>>=1,X>>=1}}else if(at.length>0&&Je){O&&Le&&t.texStorage2D(n.TEXTURE_2D,I,Ge,at[0].width,at[0].height);for(let R=0,X=at.length;R<X;R++)De=at[R],O?t.texSubImage2D(n.TEXTURE_2D,R,0,0,Oe,We,De):t.texImage2D(n.TEXTURE_2D,R,Ge,Oe,We,De);M.generateMipmaps=!1}else O?(Le&&t.texStorage2D(n.TEXTURE_2D,I,Ge,Me.width,Me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,We,Me)):t.texImage2D(n.TEXTURE_2D,0,Ge,Oe,We,Me);k(M,Je)&&D(oe),ye.__version=pe.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Ue(b,M,N){if(M.image.length!==6)return;const oe=He(b,M),ce=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);const pe=i.get(ce);if(ce.version!==pe.__version||oe===!0){t.activeTexture(n.TEXTURE0+N);const ye=pt.getPrimaries(pt.workingColorSpace),ve=M.colorSpace===wn?null:pt.getPrimaries(M.colorSpace),Ae=M.colorSpace===wn||ye===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let R=0;R<6;R++)!Ve&&!it?Me[R]=y(M.image[R],!1,!0,c):Me[R]=it?M.image[R].image:M.image[R],Me[R]=Te(M,Me[R]);const Je=Me[0],Oe=E(Je)||o,We=r.convert(M.format,M.colorSpace),Ge=r.convert(M.type),De=B(M.internalFormat,We,Ge,M.colorSpace),at=o&&M.isVideoTexture!==!0,O=pe.__version===void 0||oe===!0;let Le=S(M,Je,Oe);Be(n.TEXTURE_CUBE_MAP,M,Oe);let I;if(Ve){at&&O&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,De,Je.width,Je.height);for(let R=0;R<6;R++){I=Me[R].mipmaps;for(let X=0;X<I.length;X++){const _e=I[X];M.format!==kn?We!==null?at?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,X,0,0,_e.width,_e.height,We,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,X,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,X,0,0,_e.width,_e.height,We,Ge,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,X,De,_e.width,_e.height,0,We,Ge,_e.data)}}}else{I=M.mipmaps,at&&O&&(I.length>0&&Le++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,De,Me[0].width,Me[0].height));for(let R=0;R<6;R++)if(it){at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Me[R].width,Me[R].height,We,Ge,Me[R].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,De,Me[R].width,Me[R].height,0,We,Ge,Me[R].data);for(let X=0;X<I.length;X++){const Ne=I[X].image[R].image;at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,X+1,0,0,Ne.width,Ne.height,We,Ge,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,X+1,De,Ne.width,Ne.height,0,We,Ge,Ne.data)}}else{at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,We,Ge,Me[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,De,We,Ge,Me[R]);for(let X=0;X<I.length;X++){const _e=I[X];at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,X+1,0,0,We,Ge,_e.image[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,X+1,De,We,Ge,_e.image[R])}}}k(M,Oe)&&D(n.TEXTURE_CUBE_MAP),pe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Ce(b,M,N,oe,ce,pe){const ye=r.convert(N.format,N.colorSpace),ve=r.convert(N.type),Ae=B(N.internalFormat,ye,ve,N.colorSpace);if(!i.get(M).__hasExternalTextures){const it=Math.max(1,M.width>>pe),Me=Math.max(1,M.height>>pe);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,pe,Ae,it,Me,M.depth,0,ye,ve,null):t.texImage2D(ce,pe,Ae,it,Me,0,ye,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),me(M)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ce,i.get(N).__webglTexture,0,ae(M)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ce,i.get(N).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function x(b,M,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let oe=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||me(M)){const ce=M.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Ti?oe=n.DEPTH_COMPONENT32F:ce.type===bi&&(oe=n.DEPTH_COMPONENT24));const pe=ae(M);me(M)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,oe,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,oe,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,oe,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const oe=ae(M);N&&me(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,M.width,M.height):me(M)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const oe=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ce=0;ce<oe.length;ce++){const pe=oe[ce],ye=r.convert(pe.format,pe.colorSpace),ve=r.convert(pe.type),Ae=B(pe.internalFormat,ye,ve,pe.colorSpace),Ve=ae(M);N&&me(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ae,M.width,M.height):me(M)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,Ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),fe(M.depthTexture,0);const oe=i.get(M.depthTexture).__webglTexture,ce=ae(M);if(M.depthTexture.format===as)me(M)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(M.depthTexture.format===qs)me(M)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function L(b){const M=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");F(M.__webglFramebuffer,b)}else if(N){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=n.createRenderbuffer(),x(M.__webglDepthbuffer[oe],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),x(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(b,M,N){const oe=i.get(b);M!==void 0&&Ce(oe.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&L(b)}function V(b){const M=b.texture,N=i.get(b),oe=i.get(M);b.addEventListener("dispose",W),b.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=M.version,a.memory.textures++);const ce=b.isWebGLCubeRenderTarget===!0,pe=b.isWebGLMultipleRenderTargets===!0,ye=E(b)||o;if(ce){N.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(o&&M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ve]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)N.__webglFramebuffer[ve][Ae]=n.createFramebuffer()}else N.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)N.__webglFramebuffer[ve]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(pe)if(s.drawBuffers){const ve=b.texture;for(let Ae=0,Ve=ve.length;Ae<Ve;Ae++){const it=i.get(ve[Ae]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&me(b)===!1){const ve=pe?M:[M];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Ve=ve[Ae];N.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[Ae]);const it=r.convert(Ve.format,Ve.colorSpace),Me=r.convert(Ve.type),Je=B(Ve.internalFormat,it,Me,Ve.colorSpace,b.isXRRenderTarget===!0),Oe=ae(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Je,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,N.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),x(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Be(n.TEXTURE_CUBE_MAP,M,ye);for(let ve=0;ve<6;ve++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Ce(N.__webglFramebuffer[ve][Ae],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ae);else Ce(N.__webglFramebuffer[ve],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);k(M,ye)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){const ve=b.texture;for(let Ae=0,Ve=ve.length;Ae<Ve;Ae++){const it=ve[Ae],Me=i.get(it);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),Be(n.TEXTURE_2D,it,ye),Ce(N.__webglFramebuffer,b,it,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),k(it,ye)&&D(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ve=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,oe.__webglTexture),Be(ve,M,ye),o&&M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Ce(N.__webglFramebuffer[Ae],b,M,n.COLOR_ATTACHMENT0,ve,Ae);else Ce(N.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,ve,0);k(M,ye)&&D(ve),t.unbindTexture()}b.depthBuffer&&L(b)}function te(b){const M=E(b)||o,N=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let oe=0,ce=N.length;oe<ce;oe++){const pe=N[oe];if(k(pe,M)){const ye=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(pe).__webglTexture;t.bindTexture(ye,ve),D(ye),t.unbindTexture()}}}function he(b){if(o&&b.samples>0&&me(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],N=b.width,oe=b.height;let ce=n.COLOR_BUFFER_BIT;const pe=[],ye=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(b),Ae=b.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Ve=0;Ve<M.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ve=0;Ve<M.length;Ve++){pe.push(n.COLOR_ATTACHMENT0+Ve),b.depthBuffer&&pe.push(ye);const it=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(it===!1&&(b.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ve]),it===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ye])),Ae){const Me=i.get(M[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,N,oe,0,0,N,oe,ce,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Ve=0;Ve<M.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ve]);const it=i.get(M[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function ae(b){return Math.min(f,b.samples)}function me(b){const M=i.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(b){const M=a.render.frame;_.get(b)!==M&&(_.set(b,M),b.update())}function Te(b,M){const N=b.colorSpace,oe=b.format,ce=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Il||N!==li&&N!==wn&&(pt.getTransfer(N)===_t?o===!1?e.has("EXT_sRGB")===!0&&oe===kn?(b.format=Il,b.minFilter=An,b.generateMipmaps=!1):M=Jh.sRGBToLinear(M):(oe!==kn||ce!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}this.allocateTextureUnit=se,this.resetTextureUnits=q,this.setTexture2D=fe,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=xe,this.rebindTextures=G,this.setupRenderTarget=V,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=me}function Ww(n,e,t){const i=t.isWebGL2;function s(r,a=wn){let o;const l=pt.getTransfer(a);if(r===Li)return n.UNSIGNED_BYTE;if(r===Wh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===$h)return n.UNSIGNED_SHORT_5_5_5_1;if(r===AE)return n.BYTE;if(r===wE)return n.SHORT;if(r===vc)return n.UNSIGNED_SHORT;if(r===Vh)return n.INT;if(r===bi)return n.UNSIGNED_INT;if(r===Ti)return n.FLOAT;if(r===Cr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===CE)return n.ALPHA;if(r===kn)return n.RGBA;if(r===RE)return n.LUMINANCE;if(r===PE)return n.LUMINANCE_ALPHA;if(r===as)return n.DEPTH_COMPONENT;if(r===qs)return n.DEPTH_STENCIL;if(r===Il)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===LE)return n.RED;if(r===qh)return n.RED_INTEGER;if(r===DE)return n.RG;if(r===Xh)return n.RG_INTEGER;if(r===Yh)return n.RGBA_INTEGER;if(r===wo||r===Co||r===Ro||r===Po)if(l===_t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===wo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===wo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Tu||r===Au||r===wu||r===Cu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Tu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Au)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===IE)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ru||r===Pu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ru)return l===_t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Pu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Lu||r===Du||r===Iu||r===Uu||r===Fu||r===ku||r===Nu||r===Ou||r===Bu||r===Hu||r===zu||r===Gu||r===Vu||r===Wu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Lu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Du)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Iu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ku)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ou)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lo||r===$u||r===qu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Lo)return l===_t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$u)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===UE||r===Xu||r===Yu||r===ju)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Lo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Xu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ju)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rs?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class $w extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ga extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qw={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Xw extends un{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:as,u!==as&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===as&&(i=bi),i===void 0&&u===qs&&(i=rs),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yw extends Js{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,h=null;const w=[],y=[],E=new vn;E.layers.enable(1),E.viewport=new yt;const C=new vn;C.layers.enable(2),C.viewport=new yt;const k=[E,C],D=new $w;D.layers.enable(1),D.layers.enable(2);let B=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=w[z];return Z===void 0&&(Z=new nl,w[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=w[z];return Z===void 0&&(Z=new nl,w[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=w[z];return Z===void 0&&(Z=new nl,w[z]=Z),Z.getHandSpace()};function T(z){const Z=y.indexOf(z.inputSource);if(Z===-1)return;const xe=w[Z];xe!==void 0&&(xe.update(z.inputSource,z.frame,c||a),xe.dispatchEvent({type:z.type,data:z.inputSource}))}function J(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",W);for(let z=0;z<w.length;z++){const Z=y[z];Z!==null&&(y[z]=null,w[z].disconnect(Z))}B=null,S=null,e.setRenderTarget(m),p=null,d=null,f=null,s=null,h=null,fe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",J),s.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),h=new us(p.framebufferWidth,p.framebufferHeight,{format:kn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,xe=null,Se=null;g.depth&&(Se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?qs:as,xe=g.stencil?rs:bi);const Ee={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Ee),s.updateRenderState({layers:[d]}),h=new us(d.textureWidth,d.textureHeight,{format:kn,type:Li,depthTexture:new Xw(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Fe=e.properties.get(h);Fe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function W(z){for(let Z=0;Z<z.removed.length;Z++){const xe=z.removed[Z],Se=y.indexOf(xe);Se>=0&&(y[Se]=null,w[Se].disconnect(xe))}for(let Z=0;Z<z.added.length;Z++){const xe=z.added[Z];let Se=y.indexOf(xe);if(Se===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=y.length){y.push(xe),Se=Fe;break}else if(y[Fe]===null){y[Fe]=xe,Se=Fe;break}if(Se===-1)break}const Ee=w[Se];Ee&&Ee.connect(xe)}}const re=new Y,U=new Y;function $(z,Z,xe){re.setFromMatrixPosition(Z.matrixWorld),U.setFromMatrixPosition(xe.matrixWorld);const Se=re.distanceTo(U),Ee=Z.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,Be=Ee[14]/(Ee[10]-1),He=Ee[14]/(Ee[10]+1),ke=(Ee[9]+1)/Ee[5],Ue=(Ee[9]-1)/Ee[5],Ce=(Ee[8]-1)/Ee[0],x=(Fe[8]+1)/Fe[0],F=Be*Ce,L=Be*x,G=Se/(-Ce+x),V=G*-Ce;Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(V),z.translateZ(G),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const te=Be+G,he=He+G,ae=F-V,me=L+(Se-V),ue=ke*He/he*te,Te=Ue*He/he*te;z.projectionMatrix.makePerspective(ae,me,ue,Te,te,he),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function H(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;D.near=C.near=E.near=z.near,D.far=C.far=E.far=z.far,(B!==D.near||S!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,S=D.far);const Z=z.parent,xe=D.cameras;H(D,Z);for(let Se=0;Se<xe.length;Se++)H(xe[Se],Z);xe.length===2?$(D,E,C):D.projectionMatrix.copy(E.projectionMatrix),q(z,D,Z)};function q(z,Z,xe){xe===null?z.matrix.copy(Z.matrixWorld):(z.matrix.copy(xe.matrixWorld),z.matrix.invert(),z.matrix.multiply(Z.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ul*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let se=null;function le(z,Z){if(u=Z.getViewerPose(c||a),_=Z,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let Se=!1;xe.length!==D.cameras.length&&(D.cameras.length=0,Se=!0);for(let Ee=0;Ee<xe.length;Ee++){const Fe=xe[Ee];let Be=null;if(p!==null)Be=p.getViewport(Fe);else{const ke=f.getViewSubImage(d,Fe);Be=ke.viewport,Ee===0&&(e.setRenderTargetTextures(h,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(h))}let He=k[Ee];He===void 0&&(He=new vn,He.layers.enable(Ee),He.viewport=new yt,k[Ee]=He),He.matrix.fromArray(Fe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Fe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Be.x,Be.y,Be.width,Be.height),Ee===0&&(D.matrix.copy(He.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Se===!0&&D.cameras.push(He)}}for(let xe=0;xe<w.length;xe++){const Se=y[xe],Ee=w[xe];Se!==null&&Ee!==void 0&&Ee.update(Se,Z,c||a)}se&&se(z,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const fe=new cp;fe.setAnimationLoop(le),this.setAnimationLoop=function(z){se=z},this.dispose=function(){}}}function jw(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ap(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,w,y,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),g(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,w,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===cn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===cn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=e.get(h).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,w,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kw(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,y){const E=y.program;i.uniformBlockBinding(w,E)}function c(w,y){let E=s[w.id];E===void 0&&(_(w),E=u(w),s[w.id]=E,w.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(w,C);const k=e.render.frame;r[w.id]!==k&&(d(w),r[w.id]=k)}function u(w){const y=f();w.__bindingPointIndex=y;const E=n.createBuffer(),C=w.__size,k=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,k),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const y=s[w.id],E=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let k=0,D=E.length;k<D;k++){const B=E[k];if(p(B,k,C)===!0){const S=B.__offset,T=Array.isArray(B.value)?B.value:[B.value];let J=0;for(let W=0;W<T.length;W++){const re=T[W],U=g(re);typeof re=="number"?(B.__data[0]=re,n.bufferSubData(n.UNIFORM_BUFFER,S+J,B.__data)):re.isMatrix3?(B.__data[0]=re.elements[0],B.__data[1]=re.elements[1],B.__data[2]=re.elements[2],B.__data[3]=re.elements[0],B.__data[4]=re.elements[3],B.__data[5]=re.elements[4],B.__data[6]=re.elements[5],B.__data[7]=re.elements[0],B.__data[8]=re.elements[6],B.__data[9]=re.elements[7],B.__data[10]=re.elements[8],B.__data[11]=re.elements[0]):(re.toArray(B.__data,J),J+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,B.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,y,E){const C=w.value;if(E[y]===void 0){if(typeof C=="number")E[y]=C;else{const k=Array.isArray(C)?C:[C],D=[];for(let B=0;B<k.length;B++)D.push(k[B].clone());E[y]=D}return!0}else if(typeof C=="number"){if(E[y]!==C)return E[y]=C,!0}else{const k=Array.isArray(E[y])?E[y]:[E[y]],D=Array.isArray(C)?C:[C];for(let B=0;B<k.length;B++){const S=k[B];if(S.equals(D[B])===!1)return S.copy(D[B]),!0}}return!1}function _(w){const y=w.uniforms;let E=0;const C=16;let k=0;for(let D=0,B=y.length;D<B;D++){const S=y[D],T={boundary:0,storage:0},J=Array.isArray(S.value)?S.value:[S.value];for(let W=0,re=J.length;W<re;W++){const U=J[W],$=g(U);T.boundary+=$.boundary,T.storage+=$.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=E,D>0){k=E%C;const W=C-k;k!==0&&W-T.boundary<0&&(E+=C-k,S.__offset=E)}E+=T.storage}return k=E%C,k>0&&(E+=C-k),w.__size=E,w.__cache={},this}function g(w){const y={boundary:0,storage:0};return typeof w=="number"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class pp{constructor(e={}){const{canvas:t=XE(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;const y=this;let E=!1,C=0,k=0,D=null,B=-1,S=null;const T=new yt,J=new yt;let W=null;const re=new ft(0);let U=0,$=t.width,H=t.height,q=1,se=null,le=null;const fe=new yt(0,0,$,H),z=new yt(0,0,$,H);let Z=!1;const xe=new yc;let Se=!1,Ee=!1,Fe=null;const Be=new Ut,He=new dt,ke=new Y,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return D===null?q:1}let x=i;function F(A,j){for(let ee=0;ee<A.length;ee++){const ne=A[ee],ie=t.getContext(ne,j);if(ie!==null)return ie}return null}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_c}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Le,!1),x===null){const j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),x=F(j,A),x===null)throw F(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,G,V,te,he,ae,me,ue,Te,b,M,N,oe,ce,pe,ye,ve,Ae,Ve,it,Me,Je,Oe,We;function Ge(){L=new aA(x),G=new QT(x,L,e),L.init(G),Je=new Ww(x,L,G),V=new Gw(x,L,G),te=new cA(x),he=new Cw,ae=new Vw(x,L,V,he,G,Je,te),me=new tA(y),ue=new rA(y),Te=new v1(x,G),Oe=new ZT(x,L,Te,G),b=new oA(x,Te,te,Oe),M=new hA(x,b,Te,te),Ve=new dA(x,G,ae),ye=new eA(he),N=new ww(y,me,ue,L,G,Oe,ye),oe=new jw(y,he),ce=new Pw,pe=new kw(L,G),Ae=new KT(y,me,ue,V,M,d,l),ve=new zw(y,M,G),We=new Kw(x,te,G,V),it=new JT(x,L,te,G),Me=new lA(x,L,te,G),te.programs=N.programs,y.capabilities=G,y.extensions=L,y.properties=he,y.renderLists=ce,y.shadowMap=ve,y.state=V,y.info=te}Ge();const De=new Yw(y,x);this.xr=De,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize($,H,!1))},this.getSize=function(A){return A.set($,H)},this.setSize=function(A,j,ee=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,H=j,t.width=Math.floor(A*q),t.height=Math.floor(j*q),ee===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set($*q,H*q).floor()},this.setDrawingBufferSize=function(A,j,ee){$=A,H=j,q=ee,t.width=Math.floor(A*ee),t.height=Math.floor(j*ee),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(fe)},this.setViewport=function(A,j,ee,ne){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,j,ee,ne),V.viewport(T.copy(fe).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(z)},this.setScissor=function(A,j,ee,ne){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,j,ee,ne),V.scissor(J.copy(z).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){V.setScissorTest(Z=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(A=!0,j=!0,ee=!0){let ne=0;if(A){let ie=!1;if(D!==null){const Ie=D.texture.format;ie=Ie===Yh||Ie===Xh||Ie===qh}if(ie){const Ie=D.texture.type,ze=Ie===Li||Ie===bi||Ie===vc||Ie===rs||Ie===Wh||Ie===$h,je=Ae.getClearColor(),Ke=Ae.getClearAlpha(),st=je.r,Qe=je.g,et=je.b;ze?(p[0]=st,p[1]=Qe,p[2]=et,p[3]=Ke,x.clearBufferuiv(x.COLOR,0,p)):(_[0]=st,_[1]=Qe,_[2]=et,_[3]=Ke,x.clearBufferiv(x.COLOR,0,_))}else ne|=x.COLOR_BUFFER_BIT}j&&(ne|=x.DEPTH_BUFFER_BIT),ee&&(ne|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),ce.dispose(),pe.dispose(),he.dispose(),me.dispose(),ue.dispose(),M.dispose(),Oe.dispose(),We.dispose(),N.dispose(),De.dispose(),De.removeEventListener("sessionstart",Wt),De.removeEventListener("sessionend",ht),Fe&&(Fe.dispose(),Fe=null),xt.stop()};function at(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=te.autoReset,j=ve.enabled,ee=ve.autoUpdate,ne=ve.needsUpdate,ie=ve.type;Ge(),te.autoReset=A,ve.enabled=j,ve.autoUpdate=ee,ve.needsUpdate=ne,ve.type=ie}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function I(A){const j=A.target;j.removeEventListener("dispose",I),R(j)}function R(A){X(A),he.remove(A)}function X(A){const j=he.get(A).programs;j!==void 0&&(j.forEach(function(ee){N.releaseProgram(ee)}),A.isShaderMaterial&&N.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ee,ne,ie,Ie){j===null&&(j=Ue);const ze=ie.isMesh&&ie.matrixWorld.determinant()<0,je=kp(A,j,ee,ne,ie);V.setMaterial(ne,ze);let Ke=ee.index,st=1;if(ne.wireframe===!0){if(Ke=b.getWireframeAttribute(ee),Ke===void 0)return;st=2}const Qe=ee.drawRange,et=ee.attributes.position;let Tt=Qe.start*st,hn=(Qe.start+Qe.count)*st;Ie!==null&&(Tt=Math.max(Tt,Ie.start*st),hn=Math.min(hn,(Ie.start+Ie.count)*st)),Ke!==null?(Tt=Math.max(Tt,0),hn=Math.min(hn,Ke.count)):et!=null&&(Tt=Math.max(Tt,0),hn=Math.min(hn,et.count));const Bt=hn-Tt;if(Bt<0||Bt===1/0)return;Oe.setup(ie,ne,je,ee,Ke);let Kn,Et=it;if(Ke!==null&&(Kn=Te.get(Ke),Et=Me,Et.setIndex(Kn)),ie.isMesh)ne.wireframe===!0?(V.setLineWidth(ne.wireframeLinewidth*Ce()),Et.setMode(x.LINES)):Et.setMode(x.TRIANGLES);else if(ie.isLine){let ot=ne.linewidth;ot===void 0&&(ot=1),V.setLineWidth(ot*Ce()),ie.isLineSegments?Et.setMode(x.LINES):ie.isLineLoop?Et.setMode(x.LINE_LOOP):Et.setMode(x.LINE_STRIP)}else ie.isPoints?Et.setMode(x.POINTS):ie.isSprite&&Et.setMode(x.TRIANGLES);if(ie.isInstancedMesh)Et.renderInstances(Tt,Bt,ie.count);else if(ee.isInstancedBufferGeometry){const ot=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,fo=Math.min(ee.instanceCount,ot);Et.renderInstances(Tt,Bt,fo)}else Et.render(Tt,Bt)};function _e(A,j,ee){A.transparent===!0&&A.side===on&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,Hr(A,j,ee),A.side=Ii,A.needsUpdate=!0,Hr(A,j,ee),A.side=on):Hr(A,j,ee)}this.compile=function(A,j,ee=null){ee===null&&(ee=A),m=pe.get(ee),m.init(),w.push(m),ee.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),A!==ee&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),m.setupLights(y._useLegacyLights);const ne=new Set;return A.traverse(function(ie){const Ie=ie.material;if(Ie)if(Array.isArray(Ie))for(let ze=0;ze<Ie.length;ze++){const je=Ie[ze];_e(je,ee,ie),ne.add(je)}else _e(Ie,ee,ie),ne.add(Ie)}),w.pop(),m=null,ne},this.compileAsync=function(A,j,ee=null){const ne=this.compile(A,j,ee);return new Promise(ie=>{function Ie(){if(ne.forEach(function(ze){he.get(ze).currentProgram.isReady()&&ne.delete(ze)}),ne.size===0){ie(A);return}setTimeout(Ie,10)}L.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Ne=null;function qe(A){Ne&&Ne(A)}function Wt(){xt.stop()}function ht(){xt.start()}const xt=new cp;xt.setAnimationLoop(qe),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(A){Ne=A,De.setAnimationLoop(A),A===null?xt.stop():xt.start()},De.addEventListener("sessionstart",Wt),De.addEventListener("sessionend",ht),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(j),j=De.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,j,D),m=pe.get(A,w.length),m.init(),w.push(m),Be.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),xe.setFromProjectionMatrix(Be),Ee=this.localClippingEnabled,Se=ye.init(this.clippingPlanes,Ee),g=ce.get(A,h.length),g.init(),h.push(g),nn(A,j,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(se,le),this.info.render.frame++,Se===!0&&ye.beginShadows();const ee=m.state.shadowsArray;if(ve.render(ee,A,j),Se===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ae.render(g,A),m.setupLights(y._useLegacyLights),j.isArrayCamera){const ne=j.cameras;for(let ie=0,Ie=ne.length;ie<Ie;ie++){const ze=ne[ie];wc(g,A,ze,ze.viewport)}}else wc(g,A,j);D!==null&&(ae.updateMultisampleRenderTarget(D),ae.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(y,A,j),Oe.resetDefaultState(),B=-1,S=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function nn(A,j,ee,ne){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xe.intersectsSprite(A)){ne&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Be);const ze=M.update(A),je=A.material;je.visible&&g.push(A,ze,je,ee,ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xe.intersectsObject(A))){const ze=M.update(A),je=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),ke.copy(ze.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(Be)),Array.isArray(je)){const Ke=ze.groups;for(let st=0,Qe=Ke.length;st<Qe;st++){const et=Ke[st],Tt=je[et.materialIndex];Tt&&Tt.visible&&g.push(A,ze,Tt,ee,ke.z,et)}}else je.visible&&g.push(A,ze,je,ee,ke.z,null)}}const Ie=A.children;for(let ze=0,je=Ie.length;ze<je;ze++)nn(Ie[ze],j,ee,ne)}function wc(A,j,ee,ne){const ie=A.opaque,Ie=A.transmissive,ze=A.transparent;m.setupLightsView(ee),Se===!0&&ye.setGlobalState(y.clippingPlanes,ee),Ie.length>0&&Fp(ie,Ie,j,ee),ne&&V.viewport(T.copy(ne)),ie.length>0&&Br(ie,j,ee),Ie.length>0&&Br(Ie,j,ee),ze.length>0&&Br(ze,j,ee),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Fp(A,j,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Ie=G.isWebGL2;Fe===null&&(Fe=new us(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?Cr:Li,minFilter:wr,samples:Ie?4:0})),y.getDrawingBufferSize(He),Ie?Fe.setSize(He.x,He.y):Fe.setSize(Fl(He.x),Fl(He.y));const ze=y.getRenderTarget();y.setRenderTarget(Fe),y.getClearColor(re),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear();const je=y.toneMapping;y.toneMapping=Pi,Br(A,ee,ne),ae.updateMultisampleRenderTarget(Fe),ae.updateRenderTargetMipmap(Fe);let Ke=!1;for(let st=0,Qe=j.length;st<Qe;st++){const et=j[st],Tt=et.object,hn=et.geometry,Bt=et.material,Kn=et.group;if(Bt.side===on&&Tt.layers.test(ne.layers)){const Et=Bt.side;Bt.side=cn,Bt.needsUpdate=!0,Cc(Tt,ee,ne,hn,Bt,Kn),Bt.side=Et,Bt.needsUpdate=!0,Ke=!0}}Ke===!0&&(ae.updateMultisampleRenderTarget(Fe),ae.updateRenderTargetMipmap(Fe)),y.setRenderTarget(ze),y.setClearColor(re,U),y.toneMapping=je}function Br(A,j,ee){const ne=j.isScene===!0?j.overrideMaterial:null;for(let ie=0,Ie=A.length;ie<Ie;ie++){const ze=A[ie],je=ze.object,Ke=ze.geometry,st=ne===null?ze.material:ne,Qe=ze.group;je.layers.test(ee.layers)&&Cc(je,j,ee,Ke,st,Qe)}}function Cc(A,j,ee,ne,ie,Ie){A.onBeforeRender(y,j,ee,ne,ie,Ie),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(y,j,ee,ne,A,Ie),ie.transparent===!0&&ie.side===on&&ie.forceSinglePass===!1?(ie.side=cn,ie.needsUpdate=!0,y.renderBufferDirect(ee,j,ne,ie,A,Ie),ie.side=Ii,ie.needsUpdate=!0,y.renderBufferDirect(ee,j,ne,ie,A,Ie),ie.side=on):y.renderBufferDirect(ee,j,ne,ie,A,Ie),A.onAfterRender(y,j,ee,ne,ie,Ie)}function Hr(A,j,ee){j.isScene!==!0&&(j=Ue);const ne=he.get(A),ie=m.state.lights,Ie=m.state.shadowsArray,ze=ie.state.version,je=N.getParameters(A,ie.state,Ie,j,ee),Ke=N.getProgramCacheKey(je);let st=ne.programs;ne.environment=A.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(A.isMeshStandardMaterial?ue:me).get(A.envMap||ne.environment),st===void 0&&(A.addEventListener("dispose",I),st=new Map,ne.programs=st);let Qe=st.get(Ke);if(Qe!==void 0){if(ne.currentProgram===Qe&&ne.lightsStateVersion===ze)return Pc(A,je),Qe}else je.uniforms=N.getUniforms(A),A.onBuild(ee,je,y),A.onBeforeCompile(je,y),Qe=N.acquireProgram(je,Ke),st.set(Ke,Qe),ne.uniforms=je.uniforms;const et=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=ye.uniform),Pc(A,je),ne.needsLights=Op(A),ne.lightsStateVersion=ze,ne.needsLights&&(et.ambientLightColor.value=ie.state.ambient,et.lightProbe.value=ie.state.probe,et.directionalLights.value=ie.state.directional,et.directionalLightShadows.value=ie.state.directionalShadow,et.spotLights.value=ie.state.spot,et.spotLightShadows.value=ie.state.spotShadow,et.rectAreaLights.value=ie.state.rectArea,et.ltc_1.value=ie.state.rectAreaLTC1,et.ltc_2.value=ie.state.rectAreaLTC2,et.pointLights.value=ie.state.point,et.pointLightShadows.value=ie.state.pointShadow,et.hemisphereLights.value=ie.state.hemi,et.directionalShadowMap.value=ie.state.directionalShadowMap,et.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,et.spotShadowMap.value=ie.state.spotShadowMap,et.spotLightMatrix.value=ie.state.spotLightMatrix,et.spotLightMap.value=ie.state.spotLightMap,et.pointShadowMap.value=ie.state.pointShadowMap,et.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.currentProgram=Qe,ne.uniformsList=null,Qe}function Rc(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Ta.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Pc(A,j){const ee=he.get(A);ee.outputColorSpace=j.outputColorSpace,ee.instancing=j.instancing,ee.instancingColor=j.instancingColor,ee.skinning=j.skinning,ee.morphTargets=j.morphTargets,ee.morphNormals=j.morphNormals,ee.morphColors=j.morphColors,ee.morphTargetsCount=j.morphTargetsCount,ee.numClippingPlanes=j.numClippingPlanes,ee.numIntersection=j.numClipIntersection,ee.vertexAlphas=j.vertexAlphas,ee.vertexTangents=j.vertexTangents,ee.toneMapping=j.toneMapping}function kp(A,j,ee,ne,ie){j.isScene!==!0&&(j=Ue),ae.resetTextureUnits();const Ie=j.fog,ze=ne.isMeshStandardMaterial?j.environment:null,je=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:li,Ke=(ne.isMeshStandardMaterial?ue:me).get(ne.envMap||ze),st=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Qe=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!ee.morphAttributes.position,Tt=!!ee.morphAttributes.normal,hn=!!ee.morphAttributes.color;let Bt=Pi;ne.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Bt=y.toneMapping);const Kn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Et=Kn!==void 0?Kn.length:0,ot=he.get(ne),fo=m.state.lights;if(Se===!0&&(Ee===!0||A!==S)){const pn=A===S&&ne.id===B;ye.setState(ne,A,pn)}let Rt=!1;ne.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==fo.state.version||ot.outputColorSpace!==je||ie.isInstancedMesh&&ot.instancing===!1||!ie.isInstancedMesh&&ot.instancing===!0||ie.isSkinnedMesh&&ot.skinning===!1||!ie.isSkinnedMesh&&ot.skinning===!0||ie.isInstancedMesh&&ot.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ot.instancingColor===!1&&ie.instanceColor!==null||ot.envMap!==Ke||ne.fog===!0&&ot.fog!==Ie||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==ye.numPlanes||ot.numIntersection!==ye.numIntersection)||ot.vertexAlphas!==st||ot.vertexTangents!==Qe||ot.morphTargets!==et||ot.morphNormals!==Tt||ot.morphColors!==hn||ot.toneMapping!==Bt||G.isWebGL2===!0&&ot.morphTargetsCount!==Et)&&(Rt=!0):(Rt=!0,ot.__version=ne.version);let Ni=ot.currentProgram;Rt===!0&&(Ni=Hr(ne,j,ie));let Lc=!1,er=!1,ho=!1;const Zt=Ni.getUniforms(),Oi=ot.uniforms;if(V.useProgram(Ni.program)&&(Lc=!0,er=!0,ho=!0),ne.id!==B&&(B=ne.id,er=!0),Lc||S!==A){Zt.setValue(x,"projectionMatrix",A.projectionMatrix),Zt.setValue(x,"viewMatrix",A.matrixWorldInverse);const pn=Zt.map.cameraPosition;pn!==void 0&&pn.setValue(x,ke.setFromMatrixPosition(A.matrixWorld)),G.logarithmicDepthBuffer&&Zt.setValue(x,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Zt.setValue(x,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,er=!0,ho=!0)}if(ie.isSkinnedMesh){Zt.setOptional(x,ie,"bindMatrix"),Zt.setOptional(x,ie,"bindMatrixInverse");const pn=ie.skeleton;pn&&(G.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Zt.setValue(x,"boneTexture",pn.boneTexture,ae),Zt.setValue(x,"boneTextureSize",pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const po=ee.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0&&G.isWebGL2===!0)&&Ve.update(ie,ee,Ni),(er||ot.receiveShadow!==ie.receiveShadow)&&(ot.receiveShadow=ie.receiveShadow,Zt.setValue(x,"receiveShadow",ie.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Oi.envMap.value=Ke,Oi.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),er&&(Zt.setValue(x,"toneMappingExposure",y.toneMappingExposure),ot.needsLights&&Np(Oi,ho),Ie&&ne.fog===!0&&oe.refreshFogUniforms(Oi,Ie),oe.refreshMaterialUniforms(Oi,ne,q,H,Fe),Ta.upload(x,Rc(ot),Oi,ae)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ta.upload(x,Rc(ot),Oi,ae),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Zt.setValue(x,"center",ie.center),Zt.setValue(x,"modelViewMatrix",ie.modelViewMatrix),Zt.setValue(x,"normalMatrix",ie.normalMatrix),Zt.setValue(x,"modelMatrix",ie.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const pn=ne.uniformsGroups;for(let mo=0,Bp=pn.length;mo<Bp;mo++)if(G.isWebGL2){const Dc=pn[mo];We.update(Dc,Ni),We.bind(Dc,Ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ni}function Np(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Op(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,j,ee){he.get(A.texture).__webglTexture=j,he.get(A.depthTexture).__webglTexture=ee;const ne=he.get(A);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,j){const ee=he.get(A);ee.__webglFramebuffer=j,ee.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,ee=0){D=A,C=j,k=ee;let ne=!0,ie=null,Ie=!1,ze=!1;if(A){const Ke=he.get(A);Ke.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(x.FRAMEBUFFER,null),ne=!1):Ke.__webglFramebuffer===void 0?ae.setupRenderTarget(A):Ke.__hasExternalTextures&&ae.rebindTextures(A,he.get(A.texture).__webglTexture,he.get(A.depthTexture).__webglTexture);const st=A.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(ze=!0);const Qe=he.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[j])?ie=Qe[j][ee]:ie=Qe[j],Ie=!0):G.isWebGL2&&A.samples>0&&ae.useMultisampledRTT(A)===!1?ie=he.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ie=Qe[ee]:ie=Qe,T.copy(A.viewport),J.copy(A.scissor),W=A.scissorTest}else T.copy(fe).multiplyScalar(q).floor(),J.copy(z).multiplyScalar(q).floor(),W=Z;if(V.bindFramebuffer(x.FRAMEBUFFER,ie)&&G.drawBuffers&&ne&&V.drawBuffers(A,ie),V.viewport(T),V.scissor(J),V.setScissorTest(W),Ie){const Ke=he.get(A.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ke.__webglTexture,ee)}else if(ze){const Ke=he.get(A.texture),st=j||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ke.__webglTexture,ee||0,st)}B=-1},this.readRenderTargetPixels=function(A,j,ee,ne,ie,Ie,ze){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=he.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je){V.bindFramebuffer(x.FRAMEBUFFER,je);try{const Ke=A.texture,st=Ke.format,Qe=Ke.type;if(st!==kn&&Je.convert(st)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=Qe===Cr&&(L.has("EXT_color_buffer_half_float")||G.isWebGL2&&L.has("EXT_color_buffer_float"));if(Qe!==Li&&Je.convert(Qe)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===Ti&&(G.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ne&&ee>=0&&ee<=A.height-ie&&x.readPixels(j,ee,ne,ie,Je.convert(st),Je.convert(Qe),Ie)}finally{const Ke=D!==null?he.get(D).__webglFramebuffer:null;V.bindFramebuffer(x.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(A,j,ee=0){const ne=Math.pow(2,-ee),ie=Math.floor(j.image.width*ne),Ie=Math.floor(j.image.height*ne);ae.setTexture2D(j,0),x.copyTexSubImage2D(x.TEXTURE_2D,ee,0,0,A.x,A.y,ie,Ie),V.unbindTexture()},this.copyTextureToTexture=function(A,j,ee,ne=0){const ie=j.image.width,Ie=j.image.height,ze=Je.convert(ee.format),je=Je.convert(ee.type);ae.setTexture2D(ee,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,ee.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,ee.unpackAlignment),j.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,ne,A.x,A.y,ie,Ie,ze,je,j.image.data):j.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,ne,A.x,A.y,j.mipmaps[0].width,j.mipmaps[0].height,ze,j.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,ne,A.x,A.y,ze,je,j.image),ne===0&&ee.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(A,j,ee,ne,ie=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=A.max.x-A.min.x+1,ze=A.max.y-A.min.y+1,je=A.max.z-A.min.z+1,Ke=Je.convert(ne.format),st=Je.convert(ne.type);let Qe;if(ne.isData3DTexture)ae.setTexture3D(ne,0),Qe=x.TEXTURE_3D;else if(ne.isDataArrayTexture)ae.setTexture2DArray(ne,0),Qe=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,ne.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,ne.unpackAlignment);const et=x.getParameter(x.UNPACK_ROW_LENGTH),Tt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),hn=x.getParameter(x.UNPACK_SKIP_PIXELS),Bt=x.getParameter(x.UNPACK_SKIP_ROWS),Kn=x.getParameter(x.UNPACK_SKIP_IMAGES),Et=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,Et.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Et.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,A.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,A.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,A.min.z),ee.isDataTexture||ee.isData3DTexture?x.texSubImage3D(Qe,ie,j.x,j.y,j.z,Ie,ze,je,Ke,st,Et.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(Qe,ie,j.x,j.y,j.z,Ie,ze,je,Ke,Et.data)):x.texSubImage3D(Qe,ie,j.x,j.y,j.z,Ie,ze,je,Ke,st,Et),x.pixelStorei(x.UNPACK_ROW_LENGTH,et),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Tt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,hn),x.pixelStorei(x.UNPACK_SKIP_ROWS,Bt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Kn),ie===0&&ne.generateMipmaps&&x.generateMipmap(Qe),V.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),V.unbindTexture()},this.resetState=function(){C=0,k=0,D=null,V.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mc?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===ro?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qt?os:jh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===os?qt:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Zw extends pp{}Zw.prototype.isWebGL1Renderer=!0;class Jw extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class lr extends kr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Bf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Qw{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const eC=new Qw;class bc{constructor(e){this.manager=e!==void 0?e:eC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bc.DEFAULT_MATERIAL_NAME="__DEFAULT";class tC extends bc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Bf.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Rr("img");function l(){u(),Bf.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class nC extends bc{constructor(e){super(e)}load(e,t,i,s){const r=new un,a=new tC(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class iC extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const il=new Ut,Hf=new Y,zf=new Y;class sC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hf),zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zf),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gf=new Ut,cr=new Y,sl=new Y;class rC extends sC{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(cr),sl.copy(i.position),sl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(sl),i.updateMatrixWorld(),s.makeTranslation(-cr.x,-cr.y,-cr.z),Gf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gf)}}class aC extends iC{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vf{constructor(e,t,i=0,s=1/0){this.ray=new tp(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Nl(e,this,i,t),i.sort(Wf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Nl(e[s],this,i,t);return i.sort(Wf),i}}function Wf(n,e){return n.distance-e.distance}function Nl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)Nl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);const mp=ki("log",{state:()=>({GENERAL:[],BATTLE:[]})});class lo{constructor(){Re(this,"logStore",mp())}addNewLog(e,t){this.addLog(e,t)}addLog(e,t){t==0?this.logStore.GENERAL.push(e):this.logStore.BATTLE.push(e),Zs(()=>{this.scrollTop()})}scrollTop(){const e=document.querySelector(".logList");e&&(e.scrollTop=e.scrollHeight)}}const oC="/app2/icon/close.svg",lC=["src"],cC=Ye({__name:"IconClose",setup(n){return(e,t)=>(Q(),de("img",{class:"Icon",src:K(oC),alt:"Close"},null,8,lC))}}),uC=Ze(cC,[["__scopeId","data-v-e1b07c4f"]]),fC="/app2/icon/message1.svg",dC={class:"actionLog"},hC={class:"logWindow"},pC={class:"logTab"},mC=["onClick"],_C={key:0,class:"logList",density:"compact"},gC=["src"],vC=Ye({__name:"ActionLog",setup(n){const e=mp(),t=zn(),i=ge(!1),s=[v.strLog1,v.strLog2],r=ge(),a=c=>{r.value=c};function o(){i.value=!0}function l(){i.value=!1}return Fi(()=>{r.value=t.processDungeon==v.processBattle?v.strLog2:v.strLog1,new lo().scrollTop()}),(c,u)=>(Q(),de("div",dC,[At(P("div",hC,[P("ul",pC,[(Q(),de(ut,null,Vt(s,f=>P("li",{onClick:d=>a(f),class:It([{"selected-tab":f==r.value},"tabItem"])},be(f),11,mC)),64))]),Pe(uC,{class:"IconClose",onClick:u[0]||(u[0]=f=>l())}),r.value?(Q(),de("ul",_C,[(Q(!0),de(ut,null,Vt(K(e)[r.value],(f,d)=>(Q(),de("li",{key:d,class:"logMessage"},be(f),1))),128))])):$e("",!0)],512),[[wt,i.value]]),At(P("img",{class:"iconLog",src:K(fC),alt:"Log",onClick:u[1]||(u[1]=f=>o())},null,8,gC),[[wt,!i.value]])]))}}),_p=Ze(vC,[["__scopeId","data-v-b3b1444f"]]),va="/app2/img/dungeon/wall/forest1.jpg",MC="/app2/img/dungeon/wall/mable-black-p.jpg",xC="/app2/img/dungeon/wall/wood-deck-02.jpg",SC="/app2/img/dungeon/wall/stone-tile02-p.jpg",yC="/app2/img/dungeon/wall/brick1.jpg",EC="/app2/img/dungeon/wall/tesukiwashi06.jpg",bC="/app2/img/dungeon/floor/forest1.jpg",TC="/app2/img/dungeon/floor/Wonder-Marble.jpg",AC="/app2/img/dungeon/floor/wood-deck-03.jpg",wC="/app2/img/dungeon/floor/rockland3.jpg",CC="/app2/img/dungeon/floor/rockland2.jpg",RC="/app2/img/dungeon/floor/tatami02.jpg",PC="/app2/img/dungeon/door/leftdoor1.jpg",LC="/app2/img/dungeon/door/rightdoor1.jpg",gp=ki("position",{state:()=>({playerPosition:new Y})}),DC={key:0,class:"crossKey"},IC=Ye({__name:"Dungeon",setup(n){new Array(va,MC,xC,SC,yC,EC),new Array(va,TC,AC,wC,CC,RC);const e=zn(),t=gp(),i=fi(),s=Dr(),r=ge(null),a=new lo,o=($,H)=>a.addNewLog($,H),l=ge(null);let c=new Jw,u=new vn(75,window.innerWidth/window.innerHeight,.1,1e3),f=new pp,d,p=new Y,_=0,g=0,m,h,w,y=[],E;Fi(()=>{mx(),k(),D(),B(),window.addEventListener("keydown",J),window.addEventListener("click",T),C(),U()});const C=function(){requestAnimationFrame(C),f.render(c,u)};function k(){var H;f.setSize(window.innerWidth,window.innerHeight),(H=l.value)==null||H.appendChild(f.domElement),t.playerPosition=new Y(v.BlockSize*Ia.X,5,v.BlockSize*Ia.Y),p.copy(t.playerPosition),u.position.copy(t.playerPosition),o(v.logEnterDungeon,0);const $={point:16514559};d=new aC($.point,12,100,1),d.position.copy(t.playerPosition),c.add(d)}function D(){switch(e.whichDungeon){case v.nameDungeon1:m=va,h=bC,w=va,e.musicDungeon=v.mscDungeon1;break}s.playBgm(e.musicDungeon)}function B(){const $=new nC,H=new ns(v.BlockSize,v.BlockHeight),q=$.load(m),se=new lr({map:q,side:on,bumpMap:q,bumpScale:.2}),le=new ns(v.BlockSize/2,v.BlockHeight/1.5),fe=$.load(PC),z=$.load(LC),Z=new lr({map:fe,side:on,bumpMap:fe,bumpScale:.2}),xe=new lr({map:z,side:on,bumpMap:z,bumpScale:.2}),Se=new ns(v.BlockSize,v.BlockHeight/3),Ee=new ns(v.BlockSize,v.BlockSize),Fe=$.load(h),Be=new lr({map:Fe,side:on,bumpMap:Fe,bumpScale:.2}),He=$.load(w),ke=new lr({map:He,side:on,bumpMap:He,bumpScale:.2});for(let Ue=0;Ue<mt.length;Ue++)for(let Ce=0;Ce<mt[Ue].length;Ce++)if(mt[Ue][Ce]==v.MapRoom||mt[Ue][Ce]==v.MapRoad){const x=new $t(Ee,Be);x.position.set(v.BlockSize*Ce,0,v.BlockSize*Ue),x.rotation.x=90*Math.PI/180,c.add(x);const F=new $t(Ee,ke);if(F.position.set(v.BlockSize*Ce,v.BlockHeight,v.BlockSize*Ue),F.rotation.x=90*Math.PI/180,c.add(F),si(Ue-1,Ce)){const te=new $t(H,se);te.position.set(v.BlockSize*Ce,v.BlockHeight/2,v.BlockSize*(Ue-.5)),c.add(te)}if(si(Ue+1,Ce)){const te=new $t(H,se);te.position.set(v.BlockSize*Ce,v.BlockHeight/2,v.BlockSize*(Ue+.5)),c.add(te)}if(si(Ue,Ce-1)){const te=new $t(H,se);te.position.set(v.BlockSize*(Ce-.5),v.BlockHeight/2,v.BlockSize*Ue),te.rotation.y=90*Math.PI/180,c.add(te)}if(si(Ue,Ce+1)){const te=new $t(H,se);te.position.set(v.BlockSize*(Ce+.5),v.BlockHeight/2,v.BlockSize*Ue),te.rotation.y=90*Math.PI/180,c.add(te)}const L=new $t(le,Z),G=new $t(le,xe),V=new $t(Se,se);switch(dr[Ue][Ce]){case v.SetDoorUp:L.position.set(v.BlockSize*Ce-v.BlockSize/4,v.BlockHeight/3,v.BlockSize*(Ue-.5)),c.add(L),G.position.set(v.BlockSize*Ce+v.BlockSize/4,v.BlockHeight/3,v.BlockSize*(Ue-.5)),c.add(G),S(L,G),V.position.set(v.BlockSize*Ce,v.BlockHeight/1.2,v.BlockSize*(Ue-.5)),c.add(V);break;case v.SetDoorUnder:L.position.set(v.BlockSize*Ce-v.BlockSize/4,v.BlockHeight/3,v.BlockSize*(Ue+.5)),c.add(L),G.position.set(v.BlockSize*Ce+v.BlockSize/4,v.BlockHeight/3,v.BlockSize*(Ue+.5)),c.add(G),S(L,G),V.position.set(v.BlockSize*Ce,v.BlockHeight/1.2,v.BlockSize*(Ue+.5)),c.add(V);break;case v.SetDoorLeft:L.position.set(v.BlockSize*(Ce-.5),v.BlockHeight/3,v.BlockSize*Ue+v.BlockSize/4),L.rotation.y=90*Math.PI/180,c.add(L),G.position.set(v.BlockSize*(Ce-.5),v.BlockHeight/3,v.BlockSize*Ue-v.BlockSize/4),G.rotation.y=90*Math.PI/180,c.add(G),S(L,G),V.position.set(v.BlockSize*(Ce-.5),v.BlockHeight/1.2,v.BlockSize*Ue),V.rotation.y=90*Math.PI/180,c.add(V);break;case v.SetDoorRight:L.position.set(v.BlockSize*(Ce+.5),v.BlockHeight/3,v.BlockSize*Ue+v.BlockSize/4),L.rotation.y=90*Math.PI/180,c.add(L),G.position.set(v.BlockSize*(Ce+.5),v.BlockHeight/3,v.BlockSize*Ue-v.BlockSize/4),G.rotation.y=90*Math.PI/180,c.add(G),S(L,G),V.position.set(v.BlockSize*(Ce+.5),v.BlockHeight/1.2,v.BlockSize*Ue),V.rotation.y=90*Math.PI/180,c.add(V);break}}}function S($,H){y.push({id:E,leftDoor:$,rightDoor:H,isOpen:!1}),E+=1}const T=$=>{if(e.processDungeon==v.processBattle)return;const H=new Vf,q=new dt;q.x=$.clientX/window.innerWidth*2-1,q.y=-($.clientY/window.innerHeight)*2+1,H.setFromCamera(q,u);const se=H.intersectObjects(y.flatMap(le=>[le.leftDoor,le.rightDoor]));if(se.length>0){const le=y.find(fe=>fe.leftDoor===se[0].object||fe.rightDoor===se[0].object);le&&(le.isOpen||(le.leftDoor.translateOnAxis(new Y(-1,0,0),v.BlockSize/4),le.rightDoor.translateOnAxis(new Y(1,0,0),v.BlockSize/4),le.leftDoor.rotateY(-Math.PI/2.1),le.rightDoor.rotateY(Math.PI/2.1),le.leftDoor.translateOnAxis(new Y(1,0,0),v.BlockSize/4),le.rightDoor.translateOnAxis(new Y(-1,0,0),v.BlockSize/4),le.isOpen=!0))}},J=$=>{switch($.key){case"a":case"A":W(v.TurnLeft);break;case"d":case"D":W(v.TurnRight);break;default:W($.key)}};function W($){if(console.log("playerMove",$),i.party||i.character||i.item||e.processDungeon==v.processBattle||!u)return;const H=new Y;u.getWorldDirection(H);let q=t.playerPosition.clone();switch($){case v.ArrowUp:q.add(H.multiplyScalar(v.BlockSize)),se();break;case v.ArrowDown:q.sub(H.multiplyScalar(v.BlockSize)),se();break;case v.ArrowLeft:q.x+=H.z*v.BlockSize,q.z-=H.x*v.BlockSize,se();break;case v.ArrowRight:q.x-=H.z*v.BlockSize,q.z+=H.x*v.BlockSize,se();break;case v.TurnLeft:_+=Math.PI/2;break;case v.TurnRight:_-=Math.PI/2;break;default:return}if(q==t.playerPosition)return;function se(){q.x=Math.round(q.x/v.BlockSize)*v.BlockSize,q.z=Math.round(q.z/v.BlockSize)*v.BlockSize}let le=Math.floor((q.x+5)/v.BlockSize),fe=Math.floor((q.z+5)/v.BlockSize);if(!si(fe,le)){const z=new Vf,Z=q.clone().sub(t.playerPosition).normalize();z.set(t.playerPosition,Z);const xe=z.intersectObjects(y.flatMap(Se=>[Se.leftDoor,Se.rightDoor]));if(xe.length>0){const Se=y.find(Ee=>Ee.leftDoor===xe[0].object||Ee.rightDoor===xe[0].object);if(Se&&!Se.isOpen&&xe[0].distance<=v.BlockSize)return}t.playerPosition.copy(q),p.copy(q),g+=en(v.encountMin,v.encountMax),g>=v.encountLimit&&(re(),g=0)}}function re(){o(v.logMonsterEncounter,0),i.map=!1,e.processDungeon=v.processBattle}const U=()=>{u.position.equals(p)||(u.position.lerp(p,.05),d.position.copy(p)),u.rotation.y!==_&&(u.rotation.y+=(_-u.rotation.y)*.1),requestAnimationFrame(U)};return($,H)=>(Q(),de(ut,null,[P("div",{ref_key:"dungeon",ref:l},null,512),K(e).processDungeon==K(v).processSearch&&!K(i).party&&!K(i).character&&!K(i).item?(Q(),de("div",DC,[P("div",{class:"upKey",onClick:H[0]||(H[0]=q=>W(K(v).ArrowUp))}),P("div",{class:"leftKey",onClick:H[1]||(H[1]=q=>W(K(v).TurnLeft))}),P("div",{class:"rightKey",onClick:H[2]||(H[2]=q=>W(K(v).TurnRight))}),Pe(_p,{ref_key:"actionLog",ref:r,class:"actionLog"},null,512)])):$e("",!0)],64))}}),UC=Ze(IC,[["__scopeId","data-v-46aa5377"]]),FC="/app2/img/flame/flame032401.png",kC="/app2/img/flame/flame032402.png",NC={class:"TurnOrder"},OC=["src"],BC=Ye({__name:"TurnOrder",props:{turnOrder:Array,numOrder:Number},setup(n){const e=i=>i instanceof ln?FC:kC,t=i=>i instanceof ln?i.faceGraphicUrl:i.GraphicUrl;return(i,s)=>(Q(),de("div",NC,[(Q(!0),de(ut,null,Vt(n.turnOrder,(r,a)=>At((Q(),de("div",{key:a,class:It(["turnOrderFlame",{currentOrder:a==n.numOrder}]),style:Tn({backgroundImage:"url("+e(r)+")",zIndex:a==n.numOrder?1e3:n.turnOrder.length-a})},[P("img",{src:t(r),alt:"",class:"turnOrderImage"},null,8,OC)],6)),[[wt,r.nowHP>0]])),128))]))}}),HC=Ze(BC,[["__scopeId","data-v-479fed4f"]]),Tc=n=>(Bn("data-v-d2f919c5"),n=n(),Hn(),n),zC=Tc(()=>P("div",{class:"result"},"RESULT",-1)),GC={class:"resultFlame"},VC={class:"expGoldLine"},WC={class:"expItem"},$C=Tc(()=>P("span",{class:"itemKinds"},"GET EXP",-1)),qC={class:"itemValue"},XC={class:"goldItem"},YC=Tc(()=>P("span",{class:"itemKinds"},"GET GOLD",-1)),jC={class:"itemValue"},KC={class:"character"},ZC={class:"characterFlame"},JC=["src"],QC={class:"rightFlame"},eR={class:"level"},tR={class:"progress-bar"},nR=Ye({__name:"BattleResult",props:{getExp:{type:Number},getGold:{type:Number}},setup(n){const e=ui(),t=fi(),i=zn(),s=Dr();function r(){t.map=!0,i.processDungeon=v.processSearch,s.playBgm(i.musicDungeon)}return(a,o)=>(Q(),de("div",{class:"battleResult",onClick:o[0]||(o[0]=l=>r())},[zC,P("div",GC,[P("div",VC,[P("span",WC,[$C,P("span",qC,be(n.getExp),1)]),P("span",XC,[YC,P("span",jC,be(n.getGold),1)])]),(Q(!0),de(ut,null,Vt(K(e).characters,l=>(Q(),de("div",KC,[P("div",ZC,[P("img",{class:"face",src:l.faceGraphicUrl},null,8,JC),P("div",QC,[P("div",eR,"LV "+be(l.LV),1),P("span",tR,[Pe(Ih,{exp:l.exp,next:l.nextLvExp},null,8,["exp","next"])])])])]))),256))])]))}}),iR=Ze(nR,[["__scopeId","data-v-d2f919c5"]]);class Ol{constructor(e){Re(this,"mon_id");Re(this,"mon_type");Re(this,"name");Re(this,"GraphicUrl");Re(this,"LV");Re(this,"HP");Re(this,"MP");Re(this,"ATK");Re(this,"MGC");Re(this,"DEF");Re(this,"MDF");Re(this,"DEX");Re(this,"SPD");Re(this,"HitRate");Re(this,"CritRate");Re(this,"nowHP");Re(this,"nowMP");Re(this,"GOLD");Re(this,"EXP");Re(this,"order");this.mon_id=e.mon_id,this.mon_type=e.mon_type,this.name=e.name,this.GraphicUrl=e.GraphicUrl,this.LV=e.LV,this.HP=e.HP,this.MP=e.MP,this.ATK=e.ATK,this.MGC=e.MGC,this.DEF=e.DEF,this.MDF=e.MDF,this.DEX=e.DEX,this.SPD=e.SPD,this.HitRate=v.monsterHitRate+Math.floor(this.DEX/10),this.CritRate=Math.floor(this.DEX/8),this.nowHP=e.HP,this.nowMP=e.MP,this.GOLD=e.GOLD,this.EXP=e.EXP,this.order=void 0}}const sR="/app2/img/back/lightning.gif",rR=n=>(Bn("data-v-0c155cb7"),n=n(),Hn(),n),aR=rR(()=>P("div",{class:"txtEncount"},"Encounter",-1)),oR=["src"],lR=Ye({__name:"ImgEncount",setup(n){return(e,t)=>(Q(),de(ut,null,[aR,P("img",{class:"imgEncount",src:K(sR),alt:"imgEncount"},null,8,oR)],64))}}),cR=Ze(lR,[["__scopeId","data-v-0c155cb7"]]),uR="/app2/icon/AttackOrb.png",fR=["src"],dR=Ye({__name:"IconAttack",setup(n){return(e,t)=>(Q(),de("img",{class:"Icon",src:K(uR),alt:"Attack"},null,8,fR))}}),hR=Ze(dR,[["__scopeId","data-v-c09d57d2"]]),pR="/app2/icon/SkillOrb.png",mR=["src"],_R=Ye({__name:"IconSkill",setup(n){return(e,t)=>(Q(),de("img",{class:"Icon",src:K(pR),alt:"Attack"},null,8,mR))}}),gR=Ze(_R,[["__scopeId","data-v-b31f90eb"]]),vR="/app2/icon/MagicOrb.png",MR=["src"],xR=Ye({__name:"IconMagic",setup(n){return(e,t)=>(Q(),de("img",{class:"Icon",src:K(vR),alt:"Magic"},null,8,MR))}}),SR=Ze(xR,[["__scopeId","data-v-5de73f17"]]),yR="/app2/effect/normal/slash.gif",ER="/app2/effect/normal/shot.gif",$f="/app2/effect/normal/hit.gif",bR="/app2/effect/monster/claw1.gif";function TR(n,e,t,i){const s=new lo,r=(f,d)=>s.addNewLog(f,d),a=ui();let o=new Array(a.characters.length).fill(null);const l=f=>a.characters.findIndex(d=>d===f);console.log("characterAssist",e,n);let c=0;switch(n.base_status==v.baseFixValue||n.base_status==v.baseFixRate?c=n.effect_amount:c=i.totalStatus[n.base_status]*n.effect_amount,n.effect_type){case v.effectHeal:switch(n.target_type){case v.targetMyself:case v.targetOneFriend:u(t[0],c,n.effect_kind);break;case v.targetAllFriends:for(let f of a.characters)u(f,c,n.effect_kind);break;case v.targetRandomFriend:break}break;case v.effectBuff:switch(n.target_type){case v.targetMyself:case v.targetOneFriend:if(!t)break;t[0].addBuff(e,n.effect_kind,c,n.effect_times),t[0].calculateTotalStatus();break;case v.targetAllFriends:for(let f of a.characters)f.addBuff(e,n.effect_kind,c,n.effect_times),f.calculateTotalStatus();break;case v.targetRandomFriend:break}break;case v.effectCondition:switch(n.target_type){case v.targetMyself:case v.targetOneFriend:t[0].addCondition(e,n.effect_kind,c,n.effect_times);break;case v.targetAllFriends:for(let f of a.characters)f.addCondition(e,n.effect_kind,c,n.effect_times);break;case v.targetRandomFriend:break}break}return o;function u(f,d,p){console.log("characterHeal",f,p,d),p==v.statusnowHP?f.nowHP=f.nowHP+d>f.totalStatus.HP?f.totalStatus.HP:f.nowHP+d:p==v.statusnowMP&&(f.nowMP=f.nowMP+d>f.totalStatus.MP?f.totalStatus.MP:f.nowMP+d),o[l(f)]=d,r("> Recovers "+f.name+"'s "+p+" by "+d,1)}}const AR={key:2,class:"BattleUI"},wR={class:"monsterGrid"},CR=["onClick","onMouseover","onMouseout"],RR=["src","onLoad"],PR=["src"],LR={key:1,class:"monsterInfo"},DR={class:"monsterName"},IR={class:"progress-bar-hp"},UR=["src"],FR=["src"],kR=["src"],NR={key:3,class:"startTurn"},OR={key:4,class:"endBattle"},BR={key:5},HR={key:3},zR=Ye({__name:"Battle",setup(n){const e=ui(),t=Dr(),i=ge(Array(6).fill(null)),s=vt("monsterList"),r=[],a=ge(Array(6).fill([])),o=ge(void 0),l=ge([]),c=ge(""),u=ge([]),f=ge(""),d=ge(0),p=ge(0),_=ge(void 0),g=ge(),m=ge([]),h=ge(new Array(e.characters.length).fill(!1)),w=ge(null),y=ge(new Array(e.characters.length).fill(!1)),E=ge(new Array(e.characters.length).fill(null)),C=ge(),k=ge(0),D=ge(0),B=ge([]),S=ge(0),T=ge("encount");let J=null;const W=ge(""),re=Kt({AttackBtn:{},SkillBtn:{},ItemBtn:{}}),U=new Array(v.mscBattle1,v.mscBattle2,v.mscBattle3,v.mscBattle4,v.mscBattle5),$=I=>e.characters.findIndex(R=>R===I),H=()=>i.value.reduceRight((I,R,X)=>I==0&&R!==null?X:I,0),q=ge(null),se=new lo,le=(I,R)=>se.addNewLog(I,R);Fi(async()=>{for(fe(),await mi(v.awaitTime),z(),T.value="startTurn";T.value!=="result";)T.value="startTurn",await xe()});function fe(){let I;I=Math.floor(Math.random()*U.length),t.playBgm(U[I])}function z(){const I=en(v.monNumMin,v.monNumMax);for(let X=0;X<I;X++){const _e=new Ol(s[To(s.length)]);r.push(_e)}let R=[];for(;R.length<r.length;){const X=To(6);R.includes(X)||R.push(X)}R.forEach((X,_e)=>{r[_e].order=X,i.value[X]=r[_e]}),console.log(r)}let Z=1;async function xe(){g.value=void 0,B.value=[...e.characters.filter(I=>I.nowHP>0),...r.filter(I=>I.nowHP>0)],B.value.sort((I,R)=>{let X=I instanceof ln?I.totalStatus.SPD:I.SPD;return(R instanceof ln?R.totalStatus.SPD:R.SPD)-X}),await mi(v.awaitTime);for(let I=0;I<B.value.length;I++){let R=B.value[I];if(console.log("currentTurn",R),S.value=I,ke.value="",m.value=[],l.value=[],R.nowHP>0&&(R instanceof ln?(g.value=R,await Se(R),g.value=void 0,Be=null,_.value=void 0):R instanceof Ol&&(o.value=R,await Te(R),o.value=void 0)),!r.some(X=>X.nowHP>0)){T.value="endBattle",await mi(v.awaitTime),T.value="result";break}if(!e.characters.some(X=>X.nowHP>0)){T.value="result";break}await mi(v.nextTime)}Le(),Z+=1,await mi(v.nextTime)}async function Se(I){T.value="characterTurn",I.class==v.clsPriest?W.value=v.actionMagic:W.value=v.actionSkill,await he(),T.value="",await ce(I),te(!0)}const Ee=ge(!1),Fe=ge(!1);let Be;function He(I){if(T.value="characterTurn",Ee.value=!1,Fe.value=!1,Be===I)te(!0),Be=null;else switch(te(),re[I]={transform:"scale(1.5) translateY(-20%)",opacity:1},Be=I,I){case v.actionAttack:ke.value=v.targetOneEnemy,_.value=i.value[H()],F(H()),T.value="selectTarget";break;case v.actionSkill:case v.actionMagic:Ee.value=!0;break;case v.actionItem:Fe.value=!0;break}}const ke=ge("");let Ue;const Ce=I=>{Ee.value=!1,Ue=I,ke.value=I.skill_effect[0].target_type,F(H()),T.value="selectTarget"},x=I=>T.value!="selectTarget"||!l.value?!1:l.value.includes(I);function F(I){switch(m.value=[],l.value=[],ke.value){case v.targetMyself:m.value.push(g.value);break;case v.targetOneFriend:m.value.push(g.value);break;case v.targetAllFriends:m.value=e.characters.filter(R=>R.nowHP>0);break;case v.targetRandomFriend:break;case v.targetOneEnemy:l.value.push(i.value[I]);break;case v.targetColumnEnemy:L(I);break;case v.targetRowEnemy:G(I);break;case v.targetAllEnemy:l.value=i.value.filter(R=>R!==null);break;case v.targetRandomEnemy:l.value=i.value.filter(R=>R!==null);break}}const L=I=>{for(let R=I%3;R<i.value.length;R+=3)i.value[R]!==null&&l.value.push(i.value[R])},G=I=>{let R=I<=2?0:3,X=I<=2?2:5;for(let _e=R;_e<=X;_e++)i.value[_e]!==null&&l.value.push(i.value[_e])},V=(I,R)=>{I=="over"?(m.value=[],m.value.push(R)):I=="click"&&J&&(J(),J=null)},te=(I=!1)=>{re.AttackBtn=I?{}:{opacity:.5},re.SkillBtn=I?{}:{opacity:.5}};async function he(){return new Promise(I=>{J=I})}function ae(I,R){i.value[I]&&(_.value=R)}function me(I){i.value[I]&&(_.value=void 0)}function ue(I,R){i.value[I]&&(_.value=R,T.value==="selectTarget"&&(l.value.includes(i.value[I])?J&&(J(),J=null):F(I)))}async function Te(I){T.value="monsterTurn",await at(I,b())}const b=()=>{const I=e.characters.filter(qe=>qe.nowHP>0),R=I.reduce((qe,Wt)=>qe+Wt.totalStatus.Hate,0),X=I.map(qe=>qe.totalStatus.Hate/R),_e=Math.random();let Ne=0;for(let qe=0;qe<X.length;qe++)if(Ne+=X[qe],_e<Ne)return I[qe]};let M,N,oe;async function ce(I){let R,X;if(Be==v.actionAttack)le(I.name+"'s "+v.actionAttack,1),X=l.value[0],R=X.order,a.value[R]=[],ye(I,X,R),M=v.normalAttackTime,Me(I),await mi(v.normalAttackTime+v.effectTime);else{le(I.name+"'s "+Ue.name,1);for(const _e of Ue.skill_effect){if(M=_e.anime_time,N=0,oe=0,ke.value!=_e.target_type&&pe(_e.target_type,I),ke.value=_e.target_type,_e.target==1)E.value=TR(_e,Ue.name,m.value,I),We(_e);else if(_e.target==2){if(a.value=Array.from({length:6},()=>[]),_e.target_type==v.targetRandomEnemy)for(let Ne=1;Ne<=_e.effect_times;Ne++)X=l.value[To(l.value.length)],R=X.order,ye(I,X,R,_e),oe+=1;else for(let Ne of l.value){R=Ne.order;for(let qe=1;qe<=_e.effect_times;qe++)ye(I,Ne,R,_e),oe+=1}Je(_e)}N=v.effectTime+oe*v.delayTime,await mi(M+N)}}for(let _e of l.value)_e.nowHP==0&&(i.value=i.value.map(Ne=>Ne===_e?null:Ne))}function pe(I,R){switch(m.value=[],l.value=[],I){case v.targetMyself:m.value.push(R);break;case v.targetAllFriends:m.value=e.characters.filter(X=>X.nowHP>0);break;case v.targetRandomFriend:break;case v.targetAllEnemy:l.value=i.value.filter(X=>X!==null);break;case v.targetRandomEnemy:l.value=i.value.filter(X=>X!==null);break}}function ye(I,R,X,_e){let Ne=0,qe=0,Wt=0,ht=0,xt=0;if(Ae(I.totalStatus.HitRate,R.SPD)){Be==v.actionAttack||Be==v.actionSkill&&(_e==null?void 0:_e.base_status)==v.statusATK?(Ne=I.totalStatus.ATK,qe=R.DEF):Be==v.actionSkill&&(_e==null?void 0:_e.base_status)==v.statusMGC&&(Ne=I.totalStatus.MGC,qe=R.MDF),ht=Ve(I.totalStatus.CritRate,qe)?v.critDamageRate:v.normalDamageRate,Wt=Be==v.actionAttack?1:_e.effect_amount,xt=Math.floor((Ne-qe/1.5)*Wt*ht),console.log("characterAttack",Ne),xt=xt<0?0:xt;const nn=ve(xt);R.nowHP=xt>R.nowHP?0:R.nowHP-xt,R.nowHP==0&&(D.value+=R.EXP,k.value+=R.GOLD),a.value[X].push(nn),le("> "+xt+" damage to "+R.name,1)}else{const nn=ve(v.strMiss);a.value[X].push(nn)}}const ve=I=>{const R={top:en(v.minEffectTop,v.maxEffectTop)+"%",left:en(v.minEffectLeft,v.maxEffectLeft)+"%"};return{effect:I,position:R,visible:!1}};function Ae(I,R){let X=I-Math.floor(R/10);return Math.random()<=X/100}function Ve(I,R){let X=I-Math.floor(R/5);return Math.random()<=X/100}function it(I,R,X){console.log("characterHeal",I,X,R),X==v.statusnowHP?I.nowHP=I.nowHP+R>I.totalStatus.HP?I.totalStatus.HP:I.nowHP+R:X==v.statusnowMP&&(I.nowMP=I.nowMP+R>I.totalStatus.MP?I.totalStatus.MP:I.nowMP+R),E.value[$(I)]=R,oe+=1,le("> Recovers "+I.name+"'s "+X+" by "+R,1)}function Me(I){if(I.equipment.WEP)switch(I.equipment.WEP.kind){case v.wepSword:case v.wepAxe:case v.wepDagger:c.value=yR;break;case v.wepWand:c.value=$f;break;case v.wepBow:case v.wepSpear:c.value=ER;break}else c.value=$f;let R=l.value[0].order;u.value[R]=!0}function Je(I){c.value=I.skill_anime;let R=l.value[0].order;if(I.target_type==v.targetOneEnemy)u.value[R]=!0;else switch(f.value=I.target_type,I.target_type){case v.targetColumnEnemy:p.value=7+R%3*27;break;case v.targetRowEnemy:d.value=15+Math.floor(R/3)*25;break;case v.targetAllEnemy:f.value=v.targetAll;break;case v.targetRandomEnemy:f.value=v.targetAll;break}}const Oe=(I=0)=>{setTimeout(()=>{f.value="",u.value[I]=!1,De()},M)};function We(I){switch(console.log("skillEffect",I),I.target_type){case v.targetMyself:case v.targetOneFriend:let R=$(m.value[0]);w.value=I.skill_anime,h.value[R]=!0,setTimeout(()=>{h.value[R]=!1,w.value=null,Ge(I.effect_type)},M);break;case v.targetAllFriends:f.value=v.targetAll,c.value=I.skill_anime,setTimeout(()=>{c.value="",f.value="",Ge(I.effect_type)},M);break;case v.targetRandomFriend:break}}function Ge(I){let R=v.delayTime;C.value=I;for(let X=0;X<e.characters.length;X++)console.log("applyEffectToCharacters",E.value[X],C.value),E.value[X]!=null&&(setTimeout(()=>{y.value[X]=!0,setTimeout(()=>{y.value[X]=!1,E.value[X]=null},v.effectTime)},R),R+=v.delayTime,N=v.effectTime+R)}function De(){let I=v.delayTime;for(let R of a.value)if(Array.isArray(R))for(let X of R)setTimeout(()=>{X.visible=!0,setTimeout(()=>{X.visible=!1},v.effectTime)},I),I+=v.delayTime}async function at(I,R){console.log("monsterAction",I),O(I,R);let X=$(R);m.value=[],m.value.push(R),w.value=bR,h.value[X]=!0,setTimeout(()=>{h.value[X]=!1,w.value=null,Ge(v.effectDamage)},v.monsterAttackTime),R.nowHP==0,await mi(v.monsterAttackTime+v.effectTime)}function O(I,R){let X=0,_e=0,Ne=0,qe=0;Ae(I.HitRate,R.totalStatus.SPD)?(X=I.ATK,_e=R.totalStatus.DEF,Ne=Ve(I.CritRate,_e)?v.critDamageRate:v.normalDamageRate,qe=Math.floor((X-_e/1.5)*Ne),console.log("monsterAttack",X),qe=qe<0?0:qe,E.value[$(R)]=qe,R.nowHP=qe>R.nowHP?0:R.nowHP-qe):E.value[$(R)]=v.strMiss}function Le(){m.value=[],l.value=[];for(let I of e.characters){for(let R of I.conditions)switch(R.status){case v.effectRegeneration:it(I,R.value,v.statusnowHP),Ge(v.effectHeal),console.log(v.effectRegeneration,R);break}I.updateBuffs(),I.updateConditions()}}return(I,R)=>(Q(),de(ut,null,[T.value=="encount"?(Q(),St(cR,{key:0})):$e("",!0),T.value=="result"?(Q(),St(iR,{key:1,getGold:k.value,getExp:D.value},null,8,["getGold","getExp"])):$e("",!0),T.value!=="encount"&&T.value!=="result"?(Q(),de("div",AR,[Pe(HC,{class:"turnOrder",turnOrder:B.value,numOrder:S.value},null,8,["turnOrder","numOrder"]),P("div",wR,[(Q(!0),de(ut,null,Vt(i.value,(X,_e)=>(Q(),de("div",{key:_e,class:It(["monsterCell",{pickMonster:x(X),currentMonster:X!=null&&X==o.value}])},[X?(Q(),de("div",{key:0,onClick:Ne=>ue(_e,X),onMouseover:Ne=>ae(_e,X),onMouseout:Ne=>me(_e)},[(Q(!0),de(ut,null,Vt(a.value[_e],(Ne,qe)=>(Q(),de("span",{key:qe},[Ne.visible?(Q(),de("span",{key:0,class:"monsterEffect",style:Tn(Ne.position)},be(Ne.effect),5)):$e("",!0)]))),128)),u.value[_e]?(Q(),de("img",{key:0,src:c.value,class:"skillOneEffect",alt:"skill effect",onLoad:Ne=>Oe(_e)},null,40,RR)):$e("",!0),P("img",{src:X.GraphicUrl,class:"monsterImage",alt:"monsterImage"},null,8,PR)],40,CR)):$e("",!0),_.value&&_.value==X?(Q(),de("div",LR,[P("div",DR,be(_.value.name),1),P("div",IR,[Pe(no,{nowHP:_.value.nowHP,maxHP:_.value.HP},null,8,["nowHP","maxHP"])])])):$e("",!0)],2))),128))]),f.value==K(v).targetRowEnemy?(Q(),de("img",{key:0,src:c.value,class:"skillRowEffect",style:Tn({top:d.value+"vh"}),alt:"skill effect",onLoad:R[0]||(R[0]=X=>Oe())},null,44,UR)):$e("",!0),f.value==K(v).targetColumnEnemy?(Q(),de("img",{key:1,src:c.value,class:"skillColEffect",style:Tn({left:p.value+"vw"}),alt:"skill effect",onLoad:R[1]||(R[1]=X=>Oe())},null,44,FR)):$e("",!0),f.value==K(v).targetAll?(Q(),de("img",{key:2,src:c.value,class:"skillAllEffect",alt:"skill effect",onLoad:R[2]||(R[2]=X=>Oe())},null,40,kR)):$e("",!0),T.value=="startTurn"?(Q(),de("div",NR,be(K(Z))+" Turn Start",1)):$e("",!0),T.value=="endBattle"?(Q(),de("div",OR,"Battle Ends")):$e("",!0),Pe(pc,{class:"CurrentUI",currentCharacter:g.value,targetCharacter:m.value,showCharacterEffect:y.value,toCharacterEffect:E.value,toCharacterEffectType:C.value,showCharacterAnime:h.value,toCharacterAnime:w.value,selectionMode:ke.value,onSelectCharacter:V},null,8,["currentCharacter","targetCharacter","showCharacterEffect","toCharacterEffect","toCharacterEffectType","showCharacterAnime","toCharacterAnime","selectionMode"]),Pe(_p,{ref_key:"actionLog",ref:q,class:"actionLog"},null,512),T.value=="characterTurn"||T.value=="selectTarget"?(Q(),de("div",BR,[Pe(hR,{id:"IconAttack",class:"IconAttack",onClick:R[3]||(R[3]=X=>He(K(v).actionAttack)),style:Tn(re.AttackBtn)},null,8,["style"]),W.value==K(v).actionSkill?(Q(),St(gR,{key:0,id:"IconAttack",class:"IconSkill",onClick:R[4]||(R[4]=X=>He(K(v).actionSkill)),style:Tn(re.SkillBtn)},null,8,["style"])):(Q(),St(SR,{key:1,id:"IconAttack",class:"IconSkill",onClick:R[5]||(R[5]=X=>He(K(v).actionSkill)),style:Tn(re.SkillBtn)},null,8,["style"])),Pe(Bh,{id:"IconAttack",class:"IconBag",onClick:R[6]||(R[6]=X=>He(K(v).actionItem)),style:Tn(re.ItemBtn)},null,8,["style"]),Ee.value?(Q(),St(kh,{key:2,class:"SkillUI",character:g.value,processBattle:Ee.value,onUseSkill:Ce},null,8,["character","processBattle"])):$e("",!0),K(Be)==K(v).actionSkill&&T.value=="selectTarget"?(Q(),de("div",HR,[Pe(Al,{class:"attackName",inside:K(Ue).name},null,8,["inside"]),Pe(uc,{class:"skillInfo",skillInfo:K(Ue).info},null,8,["skillInfo"])])):$e("",!0),K(Be)==K(v).actionAttack?(Q(),St(Al,{key:4,class:"attackName",inside:K(v).actionAttack},null,8,["inside"])):$e("",!0)])):$e("",!0)])):$e("",!0)],64))}}),GR=Ze(zR,[["__scopeId","data-v-3cfa1aee"]]),VR="/app2/icon/playerPosition.png",WR={class:"miniMapFlame"},$R={class:"fullMapFlame"},qR=Ye({__name:"Map",setup(n){const e=gp(),t=ge(),i=ge(),s=new Image;s.src=VR;const r=ge(!1),a=()=>{if(mt.length==0||!i.value||!t.value)return;const c=i.value.getContext("2d");if(c){i.value.width=mt[0].length*3,i.value.height=mt.length*3,t.value.width=40*3,t.value.height=40*3;for(let u=0;u<mt.length;u++)for(let f=0;f<mt[u].length;f++){switch(mt[u][f]){case 0:c.fillStyle=v.MiniWallColor;break;case 1:case 2:c.fillStyle=v.MiniRoomColor;break}c.fillRect(f*3,u*3,3,3)}o()}},o=()=>{var p;if(!t.value||!i.value||!e.playerPosition)return;const c=(p=t.value)==null?void 0:p.getContext("2d"),u=i.value.getContext("2d");if(!c||!u)return;const f=Math.floor(e.playerPosition.x/v.BlockSize-1),d=Math.floor(e.playerPosition.z/v.BlockSize-1);c.clearRect(0,0,t.value.width,t.value.height),c.drawImage(i.value,f*3-20*3,d*3-20*3,40*3,40*3,0,0,40*3,40*3),c.drawImage(s,20*3,20*3,v.BlockSize,v.BlockSize),u.fillStyle=v.MiniMoveColor,u.fillRect((f+1)*3,(d+1)*3,3,3)};function l(){r.value=!r.value,o(),console.log("clickMap",r)}return bt(()=>mt,()=>{Zs(a)},{immediate:!0,deep:!0}),bt(()=>e.playerPosition,()=>{o()},{immediate:!0,deep:!0}),(c,u)=>(Q(),de("div",null,[P("div",WR,[P("canvas",{class:"miniMap",ref_key:"MapUI",ref:t,onClick:u[0]||(u[0]=f=>l())},null,512)]),At(P("div",{class:"modal",onClick:u[1]||(u[1]=f=>l())},[P("div",$R,[P("canvas",{class:"fullMap",ref_key:"fullMap",ref:i},null,512)])],512),[[wt,r.value]])]))}}),XR=Ze(qR,[["__scopeId","data-v-7ebbfdc1"]]),YR=[{mon_id:1,mon_type:1,name:"mon1",GraphicUrl:"img/monster/mon1.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:2,mon_type:1,name:"mon2",GraphicUrl:"img/monster/mon2.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:3,mon_type:1,name:"mon3",GraphicUrl:"img/monster/mon3.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:4,mon_type:1,name:"mon4",GraphicUrl:"img/monster/mon4.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:5,mon_type:1,name:"mon5",GraphicUrl:"img/monster/mon5.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:6,mon_type:1,name:"mon6",GraphicUrl:"img/monster/mon6.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:7,mon_type:1,name:"mon7",GraphicUrl:"img/monster/mon7.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:8,mon_type:1,name:"mon8",GraphicUrl:"img/monster/mon8.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:9,mon_type:1,name:"boss3",GraphicUrl:"img/monster/boss3.png",LV:10,HP:200,MP:8,ATK:50,MGC:50,DEF:50,MDF:50,DEX:50,SPD:50,GOLD:100,EXP:300},{mon_id:10,mon_type:1,name:"boss5",GraphicUrl:"img/monster/boss5.png",LV:20,HP:500,MP:100,ATK:100,MGC:100,DEF:100,MDF:100,DEX:100,SPD:50,GOLD:1e3,EXP:1e3}],jR="/app2/icon/fullscreen.svg",KR=["src"],ZR=Ye({__name:"IconFullscreen",setup(n){const{enterFullscreen:e}=Hh(),t=ge(document.fullscreenElement!==null);return ja(()=>{document.onfullscreenchange=()=>{t.value=document.fullscreenElement!==null}}),(i,s)=>At((Q(),de("img",{class:"Icon",src:K(jR),alt:"Fullscreen",onClick:s[0]||(s[0]=r=>K(e)())},null,8,KR)),[[wt,!t.value]])}}),JR=Ze(ZR,[["__scopeId","data-v-7a725939"]]),QR={class:"UI"},eP={key:0},tP={key:1},nP={key:2},iP={key:0},sP={key:1},rP=Ye({__name:"App",setup(n){const e=zn();console.log("activeSkills",Ph),console.log("passiveSkills",Ch);const t=ui();t.setParty(),console.log("party",t.characters);const i=Uh();i.setEquipBag(),console.log("equipmentType",i.equipmentType),console.log("equipmentItem",i.equipmentItem);const s=ge(YR.map(a=>new Ol(a)));bn("monsterList",s.value),console.log("monsterList",s.value);const r=fi();return(a,o)=>(Q(),de("div",QR,[K(e).status==K(v).statusOpening?(Q(),de("div",eP,[Pe(Ag)])):K(e).status==K(v).statusTown?(Q(),de("div",tP,[Pe($y)])):K(e).status==K(v).statusDungeon?(Q(),de("div",nP,[K(e).processDungeon==K(v).processSearch?(Q(),de("div",iP,[At(Pe(pc,{class:"CurrentUI"},null,512),[[wt,K(r).current]]),Pe(mc,{class:"PartyUI"})])):K(e).processDungeon==K(v).processBattle?(Q(),de("div",sP,[Pe(GR)])):$e("",!0),Pe(UC),At(Pe(XR,{class:"MapUI"},null,512),[[wt,K(r).map]])])):$e("",!0),Pe(JR,{class:"IconFullscreen"})]))}}),aP=Ze(rP,[["__scopeId","data-v-ed0f6710"]]),oP={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},lP={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function cP(n,e){let t;function i(){t=$l(),t.run(()=>e.length?e(()=>{t==null||t.stop(),i()}):e())}bt(n,s=>{s&&!t?i():s||(t==null||t.stop(),t=void 0)},{immediate:!0}),Ld(()=>{t==null||t.stop()})}const qn=typeof window<"u",uP=qn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function fP(n,e,t){const i=e.length-1;if(i<0)return n===void 0?t:n;for(let s=0;s<i;s++){if(n==null)return t;n=n[e[s]]}return n==null||n[e[i]]===void 0?t:n[e[i]]}function qf(n,e,t){return n==null||!e||typeof e!="string"?t:n[e]!==void 0?n[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),fP(n,e.split("."),t))}function vp(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:n},(t,i)=>e+i)}function Xf(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function rl(n,e){return e.every(t=>n.hasOwnProperty(t))}function dP(n,e){const t={},i=new Set(Object.keys(n));for(const s of e)i.has(s)&&(t[s]=n[s]);return t}function hP(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(t,n))}function Yf(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return n+t.repeat(Math.max(0,e-n.length))}function jf(n,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-n.length))+n}function pP(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let i=0;for(;i<n.length;)t.push(n.substr(i,e)),i+=e;return t}function Ui(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const i={};for(const s in n)i[s]=n[s];for(const s in e){const r=n[s],a=e[s];if(Xf(r)&&Xf(a)){i[s]=Ui(r,a,t);continue}if(Array.isArray(r)&&Array.isArray(a)&&t){i[s]=t(r,a);continue}i[s]=a}return i}function Hs(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Hs.cache.has(n))return Hs.cache.get(n);const e=n.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Hs.cache.set(n,e),e}Hs.cache=new Map;const Ls=2.4,Kf=.2126729,Zf=.7151522,Jf=.072175,mP=.55,_P=.58,gP=.57,vP=.62,Ma=.03,Qf=1.45,MP=5e-4,xP=1.25,SP=1.25,ed=.078,td=12.82051282051282,xa=.06,nd=.001;function id(n,e){const t=(n.r/255)**Ls,i=(n.g/255)**Ls,s=(n.b/255)**Ls,r=(e.r/255)**Ls,a=(e.g/255)**Ls,o=(e.b/255)**Ls;let l=t*Kf+i*Zf+s*Jf,c=r*Kf+a*Zf+o*Jf;if(l<=Ma&&(l+=(Ma-l)**Qf),c<=Ma&&(c+=(Ma-c)**Qf),Math.abs(c-l)<MP)return 0;let u;if(c>l){const f=(c**mP-l**_P)*xP;u=f<nd?0:f<ed?f-f*td*xa:f-xa}else{const f=(c**vP-l**gP)*SP;u=f>-nd?0:f>-ed?f-f*td*xa:f+xa}return u*100}const Ba=.20689655172413793,yP=n=>n>Ba**3?Math.cbrt(n):n/(3*Ba**2)+4/29,EP=n=>n>Ba?n**3:3*Ba**2*(n-4/29);function Mp(n){const e=yP,t=e(n[1]);return[116*t-16,500*(e(n[0]/.95047)-t),200*(t-e(n[2]/1.08883))]}function xp(n){const e=EP,t=(n[0]+16)/116;return[e(t+n[1]/500)*.95047,e(t),e(t-n[2]/200)*1.08883]}const bP=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],TP=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055,AP=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],wP=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function Sp(n){const e=Array(3),t=TP,i=bP;for(let s=0;s<3;++s)e[s]=Math.round(hP(t(i[s][0]*n[0]+i[s][1]*n[1]+i[s][2]*n[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Ac(n){let{r:e,g:t,b:i}=n;const s=[0,0,0],r=wP,a=AP;e=r(e/255),t=r(t/255),i=r(i/255);for(let o=0;o<3;++o)s[o]=a[o][0]*e+a[o][1]*t+a[o][2]*i;return s}const sd=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,CP={rgb:(n,e,t,i)=>({r:n,g:e,b:t,a:i}),rgba:(n,e,t,i)=>({r:n,g:e,b:t,a:i}),hsl:(n,e,t,i)=>rd({h:n,s:e,l:t,a:i}),hsla:(n,e,t,i)=>rd({h:n,s:e,l:t,a:i}),hsv:(n,e,t,i)=>Pr({h:n,s:e,v:t,a:i}),hsva:(n,e,t,i)=>Pr({h:n,s:e,v:t,a:i})};function ai(n){if(typeof n=="number")return{r:(n&16711680)>>16,g:(n&65280)>>8,b:n&255};if(typeof n=="string"&&sd.test(n)){const{groups:e}=n.match(sd),{fn:t,values:i}=e,s=i.split(/,\s*/).map(r=>r.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(r)/100:parseFloat(r));return CP[t](...s)}else if(typeof n=="string"){let e=n.startsWith("#")?n.slice(1):n;return[3,4].includes(e.length)?e=e.split("").map(t=>t+t).join(""):[6,8].includes(e.length),PP(e)}else if(typeof n=="object"){if(rl(n,["r","g","b"]))return n;if(rl(n,["h","s","l"]))return Pr(yp(n));if(rl(n,["h","s","v"]))return Pr(n)}throw new TypeError(`Invalid color: ${n==null?n:String(n)||n.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Pr(n){const{h:e,s:t,v:i,a:s}=n,r=o=>{const l=(o+e/60)%6;return i-i*t*Math.max(Math.min(l,4-l,1),0)},a=[r(5),r(3),r(1)].map(o=>Math.round(o*255));return{r:a[0],g:a[1],b:a[2],a:s}}function rd(n){return Pr(yp(n))}function yp(n){const{h:e,s:t,l:i,a:s}=n,r=i+t*Math.min(i,1-i),a=r===0?0:2-2*i/r;return{h:e,s:a,v:r,a:s}}function Sa(n){const e=Math.round(n).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function RP(n){let{r:e,g:t,b:i,a:s}=n;return`#${[Sa(e),Sa(t),Sa(i),s!==void 0?Sa(Math.round(s*255)):""].join("")}`}function PP(n){n=LP(n);let[e,t,i,s]=pP(n,2).map(r=>parseInt(r,16));return s=s===void 0?s:s/255,{r:e,g:t,b:i,a:s}}function LP(n){return n.startsWith("#")&&(n=n.slice(1)),n=n.replace(/([^0-9a-f])/gi,"F"),(n.length===3||n.length===4)&&(n=n.split("").map(e=>e+e).join("")),n.length!==6&&(n=Yf(Yf(n,6),8,"F")),n}function DP(n,e){const t=Mp(Ac(n));return t[0]=t[0]+e*10,Sp(xp(t))}function IP(n,e){const t=Mp(Ac(n));return t[0]=t[0]-e*10,Sp(xp(t))}function UP(n){const e=ai(n);return Ac(e)[1]}function FP(n){const e=Math.abs(id(ai(0),ai(n)));return Math.abs(id(ai(16777215),ai(n)))>Math.min(e,50)?"#fff":"#000"}function Ep(n,e){return t=>Object.keys(n).reduce((i,s)=>{const a=typeof n[s]=="object"&&n[s]!=null&&!Array.isArray(n[s])?n[s]:{type:n[s]};return t&&s in t?i[s]={...a,default:t[s]}:i[s]=a,e&&!i[s].source&&(i[s].source=e),i},{})}const Lr=Symbol.for("vuetify:defaults");function kP(n){return ge(n)}function bp(){const n=vt(Lr);if(!n)throw new Error("[Vuetify] Could not find defaults instance");return n}function NP(n,e){var t,i;return typeof((t=n.props)==null?void 0:t[e])<"u"||typeof((i=n.props)==null?void 0:i[Hs(e)])<"u"}function OP(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:bp();const i=co("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=Dt(()=>{var l;return(l=t.value)==null?void 0:l[n._as??e]}),r=new Proxy(n,{get(l,c){var f,d,p,_;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=s.value)==null?void 0:f[c],u].filter(g=>g!=null):typeof c=="string"&&!NP(i.vnode,c)?((d=s.value)==null?void 0:d[c])??((_=(p=t.value)==null?void 0:p.global)==null?void 0:_[c])??u:u}}),a=ks();ja(()=>{if(s.value){const l=Object.entries(s.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});a.value=l.length?Object.fromEntries(l):void 0}else a.value=void 0});function o(){const l=HP(Lr,i);bn(Lr,Dt(()=>a.value?Ui((l==null?void 0:l.value)??{},a.value):l==null?void 0:l.value))}return{props:r,provideSubDefaults:o}}function Or(n){if(n._setup=n._setup??n.setup,!n.name)return n;if(n._setup){n.props=Ep(n.props??{},n.name)();const e=Object.keys(n.props).filter(t=>t!=="class"&&t!=="style");n.filterProps=function(i){return dP(i,e)},n.props._as=String,n.setup=function(i,s){const r=bp();if(!r.value)return n._setup(i,s);const{props:a,provideSubDefaults:o}=OP(i,i._as??n.name,r),l=n._setup(a,s);return o(),l}}return n}function BP(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(n?Or:Ye)(e)}function co(n,e){const t=gh();if(!t)throw new Error(`[Vuetify] ${n} ${e||"must be called from inside a setup function"}`);return t}let Tp=0,Aa=new WeakMap;function Ap(){const n=co("getUid");if(Aa.has(n))return Aa.get(n);{const e=Tp++;return Aa.set(n,e),e}}Ap.reset=()=>{Tp=0,Aa=new WeakMap};function HP(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:co("injectSelf");const{provides:t}=e;if(t&&n in t)return t[n]}function zP(n,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const r=co("useProxiedModel"),a=ge(n[e]!==void 0?n[e]:t),o=Hs(e),c=Dt(o!==e?()=>{var f,d,p,_;return n[e],!!(((f=r.vnode.props)!=null&&f.hasOwnProperty(e)||(d=r.vnode.props)!=null&&d.hasOwnProperty(o))&&((p=r.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${e}`)||(_=r.vnode.props)!=null&&_.hasOwnProperty(`onUpdate:${o}`)))}:()=>{var f,d;return n[e],!!((f=r.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=r.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});cP(()=>!c.value,()=>{bt(()=>n[e],f=>{a.value=f})});const u=Dt({get(){const f=n[e];return i(c.value?f:a.value)},set(f){const d=s(f),p=lt(c.value?n[e]:a.value);p===d||i(p)===f||(a.value=d,r==null||r.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?n[e]:a.value}),u}const ad="$vuetify.",od=(n,e)=>n.replace(/\{(\d+)\}/g,(t,i)=>String(e[+i])),wp=(n,e,t)=>function(i){for(var s=arguments.length,r=new Array(s>1?s-1:0),a=1;a<s;a++)r[a-1]=arguments[a];if(!i.startsWith(ad))return od(i,r);const o=i.replace(ad,""),l=n.value&&t.value[n.value],c=e.value&&t.value[e.value];let u=qf(l,o,null);return u||(`${i}${n.value}`,u=qf(c,o,null)),u||(u=i),typeof u!="string"&&(u=i),od(u,r)};function Cp(n,e){return(t,i)=>new Intl.NumberFormat([n.value,e.value],i).format(t)}function al(n,e,t){const i=zP(n,e,n[e]??t.value);return i.value=n[e]??t.value,bt(t,s=>{n[e]==null&&(i.value=t.value)}),i}function Rp(n){return e=>{const t=al(e,"locale",n.current),i=al(e,"fallback",n.fallback),s=al(e,"messages",n.messages);return{name:"vuetify",current:t,fallback:i,messages:s,t:wp(t,i,s),n:Cp(t,i),provide:Rp({current:t,fallback:i,messages:s})}}}function GP(n){const e=ks((n==null?void 0:n.locale)??"en"),t=ks((n==null?void 0:n.fallback)??"en"),i=ge({en:oP,...n==null?void 0:n.messages});return{name:"vuetify",current:e,fallback:t,messages:i,t:wp(e,t,i),n:Cp(e,t),provide:Rp({current:e,fallback:t,messages:i})}}const ld=Symbol.for("vuetify:locale");function VP(n){return n.name!=null}function WP(n){const e=n!=null&&n.adapter&&VP(n==null?void 0:n.adapter)?n==null?void 0:n.adapter:GP(n),t=$P(e,n);return{...e,...t}}function $P(n,e){const t=ge((e==null?void 0:e.rtl)??lP),i=Dt(()=>t.value[n.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:Dt(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}const Bl={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function qP(n,e){const t=[];let i=[];const s=Pp(n),r=Lp(n),a=(s.getDay()-Bl[e.slice(-2).toUpperCase()]+7)%7,o=(r.getDay()-Bl[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<a;l++){const c=new Date(s);c.setDate(c.getDate()-(a-l)),i.push(c)}for(let l=1;l<=r.getDate();l++){const c=new Date(n.getFullYear(),n.getMonth(),l);i.push(c),i.length===7&&(t.push(i),i=[])}for(let l=1;l<7-o;l++){const c=new Date(r);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&t.push(i),t}function XP(n){const e=new Date(n);for(;e.getDay()!==0;)e.setDate(e.getDate()-1);return e}function YP(n){const e=new Date(n);for(;e.getDay()!==6;)e.setDate(e.getDate()+1);return e}function Pp(n){return new Date(n.getFullYear(),n.getMonth(),1)}function Lp(n){return new Date(n.getFullYear(),n.getMonth()+1,0)}function jP(n){const e=n.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const KP=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function Dp(n){if(n==null)return new Date;if(n instanceof Date)return n;if(typeof n=="string"){let e;if(KP.test(n))return jP(n);if(e=Date.parse(n),!isNaN(e))return new Date(e)}return null}const cd=new Date(2e3,0,2);function ZP(n){const e=Bl[n.slice(-2).toUpperCase()];return vp(7).map(t=>{const i=new Date(cd);i.setDate(cd.getDate()+e+t);const s=new Intl.DateTimeFormat(n,{weekday:"short"}).format(i);return s.charAt(0).toUpperCase()+s.slice(1)})}function JP(n,e,t,i){const s=Dp(n)??new Date,r=i==null?void 0:i[e];if(typeof r=="function")return r(s,e,t);let a={};switch(e){case"fullDateWithWeekday":a={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"hours12h":a={hour:"numeric",hour12:!0};break;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":a={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"dayOfMonth":a={day:"numeric"};break;case"shortDate":a={year:"2-digit",month:"numeric",day:"numeric"};break;case"weekdayShort":a={weekday:"short"};break;case"year":a={year:"numeric"};break;default:a=r??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(t,a).format(s)}function QP(n,e){const t=n.toJsDate(e),i=t.getFullYear(),s=jf(String(t.getMonth()+1),2,"0"),r=jf(String(t.getDate()),2,"0");return`${i}-${s}-${r}`}function e2(n){const[e,t,i]=n.split("-").map(Number);return new Date(e,t-1,i)}function t2(n,e){const t=new Date(n);return t.setMinutes(t.getMinutes()+e),t}function n2(n,e){const t=new Date(n);return t.setHours(t.getHours()+e),t}function i2(n,e){const t=new Date(n);return t.setDate(t.getDate()+e),t}function s2(n,e){const t=new Date(n);return t.setDate(t.getDate()+e*7),t}function r2(n,e){const t=new Date(n);return t.setMonth(t.getMonth()+e),t}function a2(n){return n.getFullYear()}function o2(n){return n.getMonth()}function l2(n){return new Date(n.getFullYear(),n.getMonth()+1,1)}function c2(n){return n.getHours()}function u2(n){return n.getMinutes()}function f2(n){return new Date(n.getFullYear(),0,1)}function d2(n){return new Date(n.getFullYear(),11,31)}function h2(n,e){return Hl(n,e[0])&&m2(n,e[1])}function p2(n){const e=new Date(n);return e instanceof Date&&!isNaN(e.getTime())}function Hl(n,e){return n.getTime()>e.getTime()}function m2(n,e){return n.getTime()<e.getTime()}function ud(n,e){return n.getTime()===e.getTime()}function _2(n,e){return n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function g2(n,e){return n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function v2(n,e,t){const i=new Date(n),s=new Date(e);return t==="month"?i.getMonth()-s.getMonth()+(i.getFullYear()-s.getFullYear())*12:Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24))}function M2(n,e){const t=new Date(n);return t.setHours(e),t}function x2(n,e){const t=new Date(n);return t.setMinutes(e),t}function S2(n,e){const t=new Date(n);return t.setMonth(e),t}function y2(n,e){const t=new Date(n);return t.setFullYear(e),t}function E2(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate())}function b2(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate(),23,59,59,999)}class T2{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return Dp(e)}toJsDate(e){return e}toISO(e){return QP(this,e)}parseISO(e){return e2(e)}addMinutes(e,t){return t2(e,t)}addHours(e,t){return n2(e,t)}addDays(e,t){return i2(e,t)}addWeeks(e,t){return s2(e,t)}addMonths(e,t){return r2(e,t)}getWeekArray(e){return qP(e,this.locale)}startOfWeek(e){return XP(e)}endOfWeek(e){return YP(e)}startOfMonth(e){return Pp(e)}endOfMonth(e){return Lp(e)}format(e,t){return JP(e,t,this.locale,this.formats)}isEqual(e,t){return ud(e,t)}isValid(e){return p2(e)}isWithinRange(e,t){return h2(e,t)}isAfter(e,t){return Hl(e,t)}isBefore(e,t){return!Hl(e,t)&&!ud(e,t)}isSameDay(e,t){return _2(e,t)}isSameMonth(e,t){return g2(e,t)}setMinutes(e,t){return x2(e,t)}setHours(e,t){return M2(e,t)}setMonth(e,t){return S2(e,t)}setYear(e,t){return y2(e,t)}getDiff(e,t,i){return v2(e,t,i)}getWeekdays(){return ZP(this.locale)}getYear(e){return a2(e)}getMonth(e){return o2(e)}getNextMonth(e){return l2(e)}getHours(e){return c2(e)}getMinutes(e){return u2(e)}startOfDay(e){return E2(e)}endOfDay(e){return b2(e)}startOfYear(e){return f2(e)}endOfYear(e){return d2(e)}}const A2=Symbol.for("vuetify:date-options"),fd=Symbol.for("vuetify:date-adapter");function w2(n,e){const t=Ui({adapter:T2,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},n);return{options:t,instance:C2(t,e)}}function C2(n,e){const t=Kt(typeof n.adapter=="function"?new n.adapter({locale:n.locale[e.current.value]??e.current.value,formats:n.formats}):n.adapter);return bt(e.current,i=>{t.locale=n.locale[i]??i??t.locale}),t}const dd=Symbol.for("vuetify:display"),hd={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},R2=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hd;return Ui(hd,n)};function pd(n){return qn&&!n?window.innerWidth:typeof n=="object"&&n.clientWidth||0}function md(n){return qn&&!n?window.innerHeight:typeof n=="object"&&n.clientHeight||0}function _d(n){const e=qn&&!n?window.navigator.userAgent:"ssr";function t(_){return!!e.match(_)}const i=t(/android/i),s=t(/iphone|ipad|ipod/i),r=t(/cordova/i),a=t(/electron/i),o=t(/chrome/i),l=t(/edge/i),c=t(/firefox/i),u=t(/opera/i),f=t(/win/i),d=t(/mac/i),p=t(/linux/i);return{android:i,ios:s,cordova:r,electron:a,chrome:o,edge:l,firefox:c,opera:u,win:f,mac:d,linux:p,touch:uP,ssr:e==="ssr"}}function P2(n,e){const{thresholds:t,mobileBreakpoint:i}=R2(n),s=ks(md(e)),r=ks(_d(e)),a=Kt({}),o=ks(pd(e));function l(){s.value=md(),o.value=pd()}function c(){l(),r.value=_d()}return ja(()=>{const u=o.value<t.sm,f=o.value<t.md&&!u,d=o.value<t.lg&&!(f||u),p=o.value<t.xl&&!(d||f||u),_=o.value<t.xxl&&!(p||d||f||u),g=o.value>=t.xxl,m=u?"xs":f?"sm":d?"md":p?"lg":_?"xl":"xxl",h=typeof i=="number"?i:t[i],w=o.value<h;a.xs=u,a.sm=f,a.md=d,a.lg=p,a.xl=_,a.xxl=g,a.smAndUp=!u,a.mdAndUp=!(u||f),a.lgAndUp=!(u||f||d),a.xlAndUp=!(u||f||d||p),a.smAndDown=!(d||p||_||g),a.mdAndDown=!(p||_||g),a.lgAndDown=!(_||g),a.xlAndDown=!g,a.name=m,a.height=s.value,a.width=o.value,a.mobile=w,a.mobileBreakpoint=i,a.platform=r.value,a.thresholds=t}),qn&&window.addEventListener("resize",l,{passive:!0}),{...Yd(a),update:c,ssr:!!e}}const L2={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},D2={component:n=>Gt(Ip,{...n,class:"mdi"})},I2=[String,Function,Object,Array],gd=Symbol.for("vuetify:icons"),uo=Ep({icon:{type:I2},tag:{type:String,required:!0}},"icon");BP()({name:"VComponentIcon",props:uo(),setup(n,e){let{slots:t}=e;return()=>{const i=n.icon;return Pe(n.tag,null,{default:()=>{var s;return[n.icon?Pe(i,null,null):(s=t.default)==null?void 0:s.call(t)]}})}}});const U2=Or({name:"VSvgIcon",inheritAttrs:!1,props:uo(),setup(n,e){let{attrs:t}=e;return()=>Pe(n.tag,_h(t,{style:null}),{default:()=>[Pe("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(n.icon)?n.icon.map(i=>Array.isArray(i)?Pe("path",{d:i[0],"fill-opacity":i[1]},null):Pe("path",{d:i},null)):Pe("path",{d:n.icon},null)])]})}});Or({name:"VLigatureIcon",props:uo(),setup(n){return()=>Pe(n.tag,null,{default:()=>[n.icon]})}});const Ip=Or({name:"VClassIcon",props:uo(),setup(n){return()=>Pe(n.tag,{class:n.icon},null)}}),F2={svg:{component:U2},class:{component:Ip}};function k2(n){return Ui({defaultSet:"mdi",sets:{...F2,mdi:D2},aliases:{...L2,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},n)}const vd=Symbol.for("vuetify:theme");function Md(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function N2(){var i,s;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Md();const e=Md();if(!n)return{...e,isDisabled:!0};const t={};for(const[r,a]of Object.entries(n.themes??{})){const o=a.dark||r==="dark"?(i=e.themes)==null?void 0:i.dark:(s=e.themes)==null?void 0:s.light;t[r]=Ui(o,a)}return Ui(e,{...n,themes:t})}function O2(n){const e=N2(n),t=ge(e.defaultTheme),i=ge(e.themes),s=Dt(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const p=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const _ of e.variations.colors){const g=p.colors[_];if(g)for(const m of["lighten","darken"]){const h=m==="lighten"?DP:IP;for(const w of vp(e.variations[m],1))p.colors[`${_}-${m}-${w}`]=RP(h(ai(g),w))}}for(const _ of Object.keys(p.colors)){if(/^on-[a-z]/.test(_)||p.colors[`on-${_}`])continue;const g=`on-${_}`,m=ai(p.colors[_]);p.colors[g]=FP(m)}}return u}),r=Dt(()=>s.value[t.value]),a=Dt(()=>{const u=[];r.value.dark&&Xi(u,":root",["color-scheme: dark"]),Xi(u,":root",xd(r.value));for(const[_,g]of Object.entries(s.value))Xi(u,`.v-theme--${_}`,[`color-scheme: ${g.dark?"dark":"normal"}`,...xd(g)]);const f=[],d=[],p=new Set(Object.values(s.value).flatMap(_=>Object.keys(_.colors)));for(const _ of p)/^on-[a-z]/.test(_)?Xi(d,`.${_}`,[`color: rgb(var(--v-theme-${_})) !important`]):(Xi(f,`.bg-${_}`,[`--v-theme-overlay-multiplier: var(--v-theme-${_}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${_})) !important`,`color: rgb(var(--v-theme-on-${_})) !important`]),Xi(d,`.text-${_}`,[`color: rgb(var(--v-theme-${_})) !important`]),Xi(d,`.border-${_}`,[`--v-border-color: var(--v-theme-${_})`]));return u.push(...f,...d),u.map((_,g)=>g===0?_:`    ${_}`).join("")});function o(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const p=f.push(o);qn&&bt(a,()=>{p.patch(o)})}else qn?(f.addHeadObjs(Dt(o)),ja(()=>f.updateDOM())):f.addHeadObjs(o());else{let _=function(){if(typeof document<"u"&&!p){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",e.cspNonce&&g.setAttribute("nonce",e.cspNonce),p=g,document.head.appendChild(p)}p&&(p.innerHTML=a.value)};var d=_;let p=qn?document.getElementById("vuetify-theme-stylesheet"):null;qn?bt(a,_,{immediate:!0}):_()}}const c=Dt(()=>e.isDisabled?void 0:`v-theme--${t.value}`);return{install:l,isDisabled:e.isDisabled,name:t,themes:i,current:r,computedThemes:s,themeClasses:c,styles:a,global:{name:t,current:r}}}function Xi(n,e,t){n.push(`${e} {
`,...t.map(i=>`  ${i};
`),`}
`)}function xd(n){const e=n.dark?2:1,t=n.dark?1:2,i=[];for(const[s,r]of Object.entries(n.colors)){const a=ai(r);i.push(`--v-theme-${s}: ${a.r},${a.g},${a.b}`),s.startsWith("on-")||i.push(`--v-theme-${s}-overlay-multiplier: ${UP(r)>.18?e:t}`)}for(const[s,r]of Object.entries(n.variables)){const a=typeof r=="string"&&r.startsWith("#")?ai(r):void 0,o=a?`${a.r}, ${a.g}, ${a.b}`:void 0;i.push(`--v-${s}: ${o??r}`)}return i}function Up(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...t}=n,i=Ui(e,t),{aliases:s={},components:r={},directives:a={}}=i,o=kP(i.defaults),l=P2(i.display,i.ssr),c=O2(i.theme),u=k2(i.icons),f=WP(i.locale),d=w2(i.date,f);return{install:_=>{for(const g in a)_.directive(g,a[g]);for(const g in r)_.component(g,r[g]);for(const g in s)_.component(g,Or({...s[g],name:g,aliasName:s[g].name}));if(c.install(_),_.provide(Lr,o),_.provide(dd,l),_.provide(vd,c),_.provide(gd,u),_.provide(ld,f),_.provide(A2,d.options),_.provide(fd,d.instance),qn&&i.ssr)if(_.$nuxt)_.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:g}=_;_.mount=function(){const m=g(...arguments);return Zs(()=>l.update()),_.mount=g,m}}Ap.reset(),_.mixin({computed:{$vuetify(){return Kt({defaults:Ds.call(this,Lr),display:Ds.call(this,dd),theme:Ds.call(this,vd),icons:Ds.call(this,gd),locale:Ds.call(this,ld),date:Ds.call(this,fd)})}}})},defaults:o,display:l,theme:c,icons:u,locale:f,date:d}}const B2="3.4.9";Up.version=B2;function Ds(n){var i,s;const e=this.$,t=((i=e.parent)==null?void 0:i.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(t&&n in t)return t[n]}const H2=Up(),z2="modulepreload",G2=function(n){return"/app2/"+n},Sd={},V2=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.all(t.map(l=>{if(l=G2(l),l in Sd)return;Sd[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!i)for(let p=r.length-1;p>=0;p--){const _=r[p];if(_.href===l&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":z2,c||(d.as="script",d.crossOrigin=""),d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};async function W2(){(await V2(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const $2=fg();W2();lg(aP).use(H2).use($2).mount("#app");
//# sourceMappingURL=index-BAHFdhgN.js.map
