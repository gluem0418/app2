var Bp=Object.defineProperty;var Hp=(n,e,t)=>e in n?Bp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Pe=(n,e,t)=>(Hp(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function zl(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const gt={},Us=[],Xn=()=>{},zp=()=>!1,Gp=/^on[^a-z]/,Ha=n=>Gp.test(n),Gl=n=>n.startsWith("onUpdate:"),kt=Object.assign,Vl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Vp=Object.prototype.hasOwnProperty,ct=(n,e)=>Vp.call(n,e),qe=Array.isArray,Fs=n=>Ga(n)==="[object Map]",yd=n=>Ga(n)==="[object Set]",et=n=>typeof n=="function",Ut=n=>typeof n=="string",za=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",Ed=n=>(Mt(n)||et(n))&&et(n.then)&&et(n.catch),bd=Object.prototype.toString,Ga=n=>bd.call(n),Wp=n=>Ga(n).slice(8,-1),Td=n=>Ga(n)==="[object Object]",Wl=n=>Ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ya=zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$p=/-(\w)/g,zs=Va(n=>n.replace($p,(e,t)=>t?t.toUpperCase():"")),qp=/\B([A-Z])/g,Ys=Va(n=>n.replace(qp,"-$1").toLowerCase()),Ad=Va(n=>n.charAt(0).toUpperCase()+n.slice(1)),_o=Va(n=>n?`on${Ad(n)}`:""),cs=(n,e)=>!Object.is(n,e),go=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},wa=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Xp=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Yp=n=>{const e=Ut(n)?Number(n):NaN;return isNaN(e)?n:e};let Ic;const ol=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ln(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ut(i)?Jp(i):Ln(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ut(n)||Mt(n))return n}const jp=/;(?![^(]*\))/g,Kp=/:([^]+)/,Zp=/\/\*[^]*?\*\//g;function Jp(n){const e={};return n.replace(Zp,"").split(jp).forEach(t=>{if(t){const i=t.split(Kp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dt(n){let e="";if(Ut(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=Dt(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",em=zl(Qp);function wd(n){return!!n||n===""}const be=n=>Ut(n)?n:n==null?"":qe(n)||Mt(n)&&(n.toString===bd||!et(n.toString))?JSON.stringify(n,Cd,2):String(n),Cd=(n,e)=>e&&e.__v_isRef?Cd(n,e.value):Fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:yd(e)?{[`Set(${e.size})`]:[...e.values()]}:Mt(e)&&!qe(e)&&!Td(e)?String(e):e;let _n;class Rd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_n,!e&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=_n;try{return _n=this,e()}finally{_n=t}}}on(){_n=this}off(){_n=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $l(n){return new Rd(n)}function tm(n,e=_n){e&&e.active&&e.effects.push(n)}function Pd(){return _n}function Ld(n){_n&&_n.cleanups.push(n)}const ql=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Dd=n=>(n.w&Di)>0,Id=n=>(n.n&Di)>0,nm=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Di},im=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];Dd(s)&&!Id(s)?s.delete(n):e[t++]=s,s.w&=~Di,s.n&=~Di}e.length=t}},Ca=new WeakMap;let ur=0,Di=1;const ll=30;let In;const is=Symbol(""),cl=Symbol("");class Xl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,tm(this,i)}run(){if(!this.active)return this.fn();let e=In,t=Ai;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=In,In=this,Ai=!0,Di=1<<++ur,ur<=ll?nm(this):Uc(this),this.fn()}finally{ur<=ll&&im(this),Di=1<<--ur,In=this.parent,Ai=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){In===this?this.deferStop=!0:this.active&&(Uc(this),this.onStop&&this.onStop(),this.active=!1)}}function Uc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Ai=!0;const Ud=[];function js(){Ud.push(Ai),Ai=!1}function Ks(){const n=Ud.pop();Ai=n===void 0?!0:n}function fn(n,e,t){if(Ai&&In){let i=Ca.get(n);i||Ca.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=ql()),Fd(s)}}function Fd(n,e){let t=!1;ur<=ll?Id(n)||(n.n|=Di,t=!Dd(n)):t=!n.has(In),t&&(n.add(In),In.deps.push(n))}function oi(n,e,t,i,s,r){const a=Ca.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&qe(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!za(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":qe(n)?Wl(t)&&o.push(a.get("length")):(o.push(a.get(is)),Fs(n)&&o.push(a.get(cl)));break;case"delete":qe(n)||(o.push(a.get(is)),Fs(n)&&o.push(a.get(cl)));break;case"set":Fs(n)&&o.push(a.get(is));break}if(o.length===1)o[0]&&ul(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ul(ql(l))}}function ul(n,e){const t=qe(n)?n:[...n];for(const i of t)i.computed&&Fc(i);for(const i of t)i.computed||Fc(i)}function Fc(n,e){(n!==In||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function sm(n,e){var t;return(t=Ca.get(n))==null?void 0:t.get(e)}const rm=zl("__proto__,__v_isRef,__isVue"),kd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(za)),kc=am();function am(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=lt(this);for(let r=0,a=this.length;r<a;r++)fn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(lt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){js();const i=lt(this)[e].apply(this,t);return Ks(),i}}),n}function om(n){const e=lt(this);return fn(e,"has",n),e.hasOwnProperty(n)}class Nd{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const s=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw"&&i===(s?r?xm:zd:r?Hd:Bd).get(e))return e;const a=qe(e);if(!s){if(a&&ct(kc,t))return Reflect.get(kc,t,i);if(t==="hasOwnProperty")return om}const o=Reflect.get(e,t,i);return(za(t)?kd.has(t):rm(t))||(s||fn(e,"get",t),r)?o:wt(o)?a&&Wl(t)?o:o.value:Mt(o)?s?Gd(o):jt(o):o}}class Od extends Nd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(Gs(r)&&wt(r)&&!wt(i))return!1;if(!this._shallow&&(!Ra(i)&&!Gs(i)&&(r=lt(r),i=lt(i)),!qe(e)&&wt(r)&&!wt(i)))return r.value=i,!0;const a=qe(e)&&Wl(t)?Number(t)<e.length:ct(e,t),o=Reflect.set(e,t,i,s);return e===lt(s)&&(a?cs(i,r)&&oi(e,"set",t,i):oi(e,"add",t,i)),o}deleteProperty(e,t){const i=ct(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&oi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!za(t)||!kd.has(t))&&fn(e,"has",t),i}ownKeys(e){return fn(e,"iterate",qe(e)?"length":is),Reflect.ownKeys(e)}}class lm extends Nd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const cm=new Od,um=new lm,fm=new Od(!0),Yl=n=>n,Wa=n=>Reflect.getPrototypeOf(n);function zr(n,e,t=!1,i=!1){n=n.__v_raw;const s=lt(n),r=lt(e);t||(cs(e,r)&&fn(s,"get",e),fn(s,"get",r));const{has:a}=Wa(s),o=i?Yl:t?Zl:xr;if(a.call(s,e))return o(n.get(e));if(a.call(s,r))return o(n.get(r));n!==s&&n.get(e)}function Gr(n,e=!1){const t=this.__v_raw,i=lt(t),s=lt(n);return e||(cs(n,s)&&fn(i,"has",n),fn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Vr(n,e=!1){return n=n.__v_raw,!e&&fn(lt(n),"iterate",is),Reflect.get(n,"size",n)}function Nc(n){n=lt(n);const e=lt(this);return Wa(e).has.call(e,n)||(e.add(n),oi(e,"add",n,n)),this}function Oc(n,e){e=lt(e);const t=lt(this),{has:i,get:s}=Wa(t);let r=i.call(t,n);r||(n=lt(n),r=i.call(t,n));const a=s.call(t,n);return t.set(n,e),r?cs(e,a)&&oi(t,"set",n,e):oi(t,"add",n,e),this}function Bc(n){const e=lt(this),{has:t,get:i}=Wa(e);let s=t.call(e,n);s||(n=lt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&oi(e,"delete",n,void 0),r}function Hc(){const n=lt(this),e=n.size!==0,t=n.clear();return e&&oi(n,"clear",void 0,void 0),t}function Wr(n,e){return function(i,s){const r=this,a=r.__v_raw,o=lt(a),l=e?Yl:n?Zl:xr;return!n&&fn(o,"iterate",is),a.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function $r(n,e,t){return function(...i){const s=this.__v_raw,r=lt(s),a=Fs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Yl:e?Zl:xr;return!e&&fn(r,"iterate",l?cl:is),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function di(n){return function(...e){return n==="delete"?!1:this}}function dm(){const n={get(r){return zr(this,r)},get size(){return Vr(this)},has:Gr,add:Nc,set:Oc,delete:Bc,clear:Hc,forEach:Wr(!1,!1)},e={get(r){return zr(this,r,!1,!0)},get size(){return Vr(this)},has:Gr,add:Nc,set:Oc,delete:Bc,clear:Hc,forEach:Wr(!1,!0)},t={get(r){return zr(this,r,!0)},get size(){return Vr(this,!0)},has(r){return Gr.call(this,r,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:Wr(!0,!1)},i={get(r){return zr(this,r,!0,!0)},get size(){return Vr(this,!0)},has(r){return Gr.call(this,r,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:Wr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=$r(r,!1,!1),t[r]=$r(r,!0,!1),e[r]=$r(r,!1,!0),i[r]=$r(r,!0,!0)}),[n,t,e,i]}const[hm,pm,mm,_m]=dm();function jl(n,e){const t=e?n?_m:mm:n?pm:hm;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ct(t,s)&&s in i?t:i,s,r)}const gm={get:jl(!1,!1)},vm={get:jl(!1,!0)},Mm={get:jl(!0,!1)},Bd=new WeakMap,Hd=new WeakMap,zd=new WeakMap,xm=new WeakMap;function Sm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ym(n){return n.__v_skip||!Object.isExtensible(n)?0:Sm(Wp(n))}function jt(n){return Gs(n)?n:Kl(n,!1,cm,gm,Bd)}function Em(n){return Kl(n,!1,fm,vm,Hd)}function Gd(n){return Kl(n,!0,um,Mm,zd)}function Kl(n,e,t,i,s){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=ym(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function wi(n){return Gs(n)?wi(n.__v_raw):!!(n&&n.__v_isReactive)}function Gs(n){return!!(n&&n.__v_isReadonly)}function Ra(n){return!!(n&&n.__v_isShallow)}function Vd(n){return wi(n)||Gs(n)}function lt(n){const e=n&&n.__v_raw;return e?lt(e):n}function $a(n){return wa(n,"__v_skip",!0),n}const xr=n=>Mt(n)?jt(n):n,Zl=n=>Mt(n)?Gd(n):n;function Wd(n){Ai&&In&&(n=lt(n),Fd(n.dep||(n.dep=ql())))}function $d(n,e){n=lt(n);const t=n.dep;t&&ul(t)}function wt(n){return!!(n&&n.__v_isRef===!0)}function ge(n){return qd(n,!1)}function ks(n){return qd(n,!0)}function qd(n,e){return wt(n)?n:new bm(n,e)}class bm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:lt(e),this._value=t?e:xr(e)}get value(){return Wd(this),this._value}set value(e){const t=this.__v_isShallow||Ra(e)||Gs(e);e=t?e:lt(e),cs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:xr(e),$d(this))}}function K(n){return wt(n)?n.value:n}const Tm={get:(n,e,t)=>K(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return wt(s)&&!wt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Xd(n){return wi(n)?n:new Proxy(n,Tm)}function Yd(n){const e=qe(n)?new Array(n.length):{};for(const t in n)e[t]=wm(n,t);return e}class Am{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return sm(lt(this._object),this._key)}}function wm(n,e,t){const i=n[e];return wt(i)?i:new Am(n,e,t)}class Cm{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Xl(e,()=>{this._dirty||(this._dirty=!0,$d(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=lt(this);return Wd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Rm(n,e,t=!1){let i,s;const r=et(n);return r?(i=n,s=Xn):(i=n.get,s=n.set),new Cm(i,s,r||!s,t)}function Ci(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){qa(r,e,t)}return s}function An(n,e,t,i){if(et(n)){const r=Ci(n,e,t,i);return r&&Ed(r)&&r.catch(a=>{qa(a,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(An(n[r],e,t,i));return s}function qa(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ci(l,null,10,[n,a,o]);return}}Pm(n,t,s,i)}function Pm(n,e,t,i=!0){console.error(n)}let Sr=!1,fl=!1;const Yt=[];let $n=0;const Ns=[];let ii=null,Ki=0;const jd=Promise.resolve();let Jl=null;function Zs(n){const e=Jl||jd;return n?e.then(this?n.bind(this):n):e}function Lm(n){let e=$n+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,s=Yt[i],r=yr(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function Ql(n){(!Yt.length||!Yt.includes(n,Sr&&n.allowRecurse?$n+1:$n))&&(n.id==null?Yt.push(n):Yt.splice(Lm(n.id),0,n),Kd())}function Kd(){!Sr&&!fl&&(fl=!0,Jl=jd.then(Jd))}function Dm(n){const e=Yt.indexOf(n);e>$n&&Yt.splice(e,1)}function Im(n){qe(n)?Ns.push(...n):(!ii||!ii.includes(n,n.allowRecurse?Ki+1:Ki))&&Ns.push(n),Kd()}function zc(n,e=Sr?$n+1:0){for(;e<Yt.length;e++){const t=Yt[e];t&&t.pre&&(Yt.splice(e,1),e--,t())}}function Zd(n){if(Ns.length){const e=[...new Set(Ns)];if(Ns.length=0,ii){ii.push(...e);return}for(ii=e,ii.sort((t,i)=>yr(t)-yr(i)),Ki=0;Ki<ii.length;Ki++)ii[Ki]();ii=null,Ki=0}}const yr=n=>n.id==null?1/0:n.id,Um=(n,e)=>{const t=yr(n)-yr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Jd(n){fl=!1,Sr=!0,Yt.sort(Um);try{for($n=0;$n<Yt.length;$n++){const e=Yt[$n];e&&e.active!==!1&&Ci(e,null,14)}}finally{$n=0,Yt.length=0,Zd(),Sr=!1,Jl=null,(Yt.length||Ns.length)&&Jd()}}function Fm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||gt;d&&(s=t.map(p=>Ut(p)?p.trim():p)),f&&(s=t.map(Xp))}let o,l=i[o=_o(e)]||i[o=_o(zs(e))];!l&&r&&(l=i[o=_o(Ys(e))]),l&&An(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,An(c,n,6,s)}}function Qd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!et(n)){const l=c=>{const u=Qd(c,e,!0);u&&(o=!0,kt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(Mt(n)&&i.set(n,null),null):(qe(r)?r.forEach(l=>a[l]=null):kt(a,r),Mt(n)&&i.set(n,a),a)}function Xa(n,e){return!n||!Ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,Ys(e))||ct(n,e))}let vn=null,Ya=null;function Pa(n){const e=vn;return vn=n,Ya=n&&n.type.__scopeId||null,e}function On(n){Ya=n}function Bn(){Ya=null}function pr(n,e=vn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Jc(-1);const r=Pa(e);let a;try{a=n(...s)}finally{Pa(r),i._d&&Jc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function vo(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:_,inheritAttrs:g}=n;let m,h;const w=Pa(n);try{if(t.shapeFlag&4){const b=s||i;m=Vn(u.call(b,b,f,r,p,d,_)),h=l}else{const b=e;m=Vn(b.length>1?b(r,{attrs:l,slots:o,emit:c}):b(r,null)),h=e.props?l:km(l)}}catch(b){_r.length=0,qa(b,n,1),m=De(Nn)}let y=m;if(h&&g!==!1){const b=Object.keys(h),{shapeFlag:C}=y;b.length&&C&7&&(a&&b.some(Gl)&&(h=Nm(h,a)),y=jn(y,h))}return t.dirs&&(y=jn(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),m=y,Pa(w),m}const km=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ha(t))&&((e||(e={}))[t]=n[t]);return e},Nm=(n,e)=>{const t={};for(const i in n)(!Gl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Om(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Gc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Xa(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Gc(i,a,c):!0:!!a;return!1}function Gc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Xa(t,r))return!0}return!1}function Bm({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Hm=Symbol.for("v-ndc"),zm=n=>n.__isSuspense;function Gm(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):Im(n)}function ja(n,e){return ec(n,null,e)}const qr={};function Et(n,e,t){return ec(n,e,t)}function ec(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:a}=gt){var o;const l=Pd()===((o=zt)==null?void 0:o.scope)?zt:null;let c,u=!1,f=!1;if(wt(n)?(c=()=>n.value,u=Ra(n)):wi(n)?(c=()=>n,i=!0):qe(n)?(f=!0,u=n.some(b=>wi(b)||Ra(b)),c=()=>n.map(b=>{if(wt(b))return b.value;if(wi(b))return ts(b);if(et(b))return Ci(b,l,2)})):et(n)?e?c=()=>Ci(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),An(n,l,3,[p])}:c=Xn,e&&i){const b=c;c=()=>ts(b())}let d,p=b=>{d=w.onStop=()=>{Ci(b,l,4)}},_;if(Tr)if(p=Xn,e?t&&An(e,l,3,[c(),f?[]:void 0,p]):c(),s==="sync"){const b=F_();_=b.__watcherHandles||(b.__watcherHandles=[])}else return Xn;let g=f?new Array(n.length).fill(qr):qr;const m=()=>{if(w.active)if(e){const b=w.run();(i||u||(f?b.some((C,F)=>cs(C,g[F])):cs(b,g)))&&(d&&d(),An(e,l,3,[b,g===qr?void 0:f&&g[0]===qr?[]:g,p]),g=b)}else w.run()};m.allowRecurse=!!e;let h;s==="sync"?h=m:s==="post"?h=()=>sn(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),h=()=>Ql(m));const w=new Xl(c,h);e?t?m():g=w.run():s==="post"?sn(w.run.bind(w),l&&l.suspense):w.run();const y=()=>{w.stop(),l&&l.scope&&Vl(l.scope.effects,w)};return _&&_.push(y),y}function Vm(n,e,t){const i=this.proxy,s=Ut(n)?n.includes(".")?eh(i,n):()=>i[n]:n.bind(i,i);let r;et(e)?r=e:(r=e.handler,t=e);const a=zt;Vs(this);const o=ec(s,r.bind(i),t);return a?Vs(a):ss(),o}function eh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ts(n,e){if(!Mt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),wt(n))ts(n.value,e);else if(qe(n))for(let t=0;t<n.length;t++)ts(n[t],e);else if(yd(n)||Fs(n))n.forEach(t=>{ts(t,e)});else if(Td(n))for(const t in n)ts(n[t],e);return n}function Tt(n,e){const t=vn;if(t===null)return n;const i=eo(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[a,o,l,c=gt]=e[r];a&&(et(a)&&(a={mounted:a,updated:a}),a.deep&&ts(o),s.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Bi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(js(),An(l,t,8,[n.el,o,n,e]),Ks())}}const yi=Symbol("_leaveCb"),Xr=Symbol("_enterCb");function Wm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fi(()=>{n.isMounted=!0}),rh(()=>{n.isUnmounting=!0}),n}const xn=[Function,Array],th={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xn,onEnter:xn,onAfterEnter:xn,onEnterCancelled:xn,onBeforeLeave:xn,onLeave:xn,onAfterLeave:xn,onLeaveCancelled:xn,onBeforeAppear:xn,onAppear:xn,onAfterAppear:xn,onAppearCancelled:xn},$m={name:"BaseTransition",props:th,setup(n,{slots:e}){const t=gh(),i=Wm();let s;return()=>{const r=e.default&&ih(e.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){for(const g of r)if(g.type!==Nn){a=g;break}}const o=lt(n),{mode:l}=o;if(i.isLeaving)return Mo(a);const c=Vc(a);if(!c)return Mo(a);const u=dl(c,o,i,t);hl(c,u);const f=t.subTree,d=f&&Vc(f);let p=!1;const{getTransitionKey:_}=c.type;if(_){const g=_();s===void 0?s=g:g!==s&&(s=g,p=!0)}if(d&&d.type!==Nn&&(!Zi(c,d)||p)){const g=dl(d,o,i,t);if(hl(d,g),l==="out-in")return i.isLeaving=!0,g.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},Mo(a);l==="in-out"&&c.type!==Nn&&(g.delayLeave=(m,h,w)=>{const y=nh(i,d);y[String(d.key)]=d,m[yi]=()=>{h(),m[yi]=void 0,delete u.delayedLeave},u.delayedLeave=w})}return a}}},qm=$m;function nh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function dl(n,e,t,i){const{appear:s,mode:r,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:g,onAppear:m,onAfterAppear:h,onAppearCancelled:w}=e,y=String(n.key),b=nh(t,n),C=(H,S)=>{H&&An(H,i,9,S)},F=(H,S)=>{const T=S[1];C(H,S),qe(H)?H.every(J=>J.length<=1)&&T():H.length<=1&&T()},L={mode:r,persisted:a,beforeEnter(H){let S=o;if(!t.isMounted)if(s)S=g||o;else return;H[yi]&&H[yi](!0);const T=b[y];T&&Zi(n,T)&&T.el[yi]&&T.el[yi](),C(S,[H])},enter(H){let S=l,T=c,J=u;if(!t.isMounted)if(s)S=m||l,T=h||c,J=w||u;else return;let $=!1;const oe=H[Xr]=D=>{$||($=!0,D?C(J,[H]):C(T,[H]),L.delayedLeave&&L.delayedLeave(),H[Xr]=void 0)};S?F(S,[H,oe]):oe()},leave(H,S){const T=String(n.key);if(H[Xr]&&H[Xr](!0),t.isUnmounting)return S();C(f,[H]);let J=!1;const $=H[yi]=oe=>{J||(J=!0,S(),oe?C(_,[H]):C(p,[H]),H[yi]=void 0,b[T]===n&&delete b[T])};b[T]=n,d?F(d,[H,$]):$()},clone(H){return dl(H,e,t,i)}};return L}function Mo(n){if(Ka(n))return n=jn(n),n.children=null,n}function Vc(n){return Ka(n)?n.children?n.children[0]:void 0:n}function hl(n,e){n.shapeFlag&6&&n.component?hl(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ih(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===ut?(a.patchFlag&128&&s++,i=i.concat(ih(a.children,e,o))):(e||a.type!==Nn)&&i.push(o!=null?jn(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Xe(n,e){return et(n)?kt({name:n.name},e,{setup:n}):n}const Ea=n=>!!n.type.__asyncLoader,Ka=n=>n.type.__isKeepAlive;function Xm(n,e){sh(n,"a",e)}function Ym(n,e){sh(n,"da",e)}function sh(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Za(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ka(s.parent.vnode)&&jm(i,e,t,s),s=s.parent}}function jm(n,e,t,i){const s=Za(e,n,i,!0);tc(()=>{Vl(i[e],s)},t)}function Za(n,e,t=zt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;js(),Vs(t);const o=An(e,t,n,a);return ss(),Ks(),o});return i?s.unshift(r):s.push(r),r}}const ci=n=>(e,t=zt)=>(!Tr||n==="sp")&&Za(n,(...i)=>e(...i),t),Km=ci("bm"),Fi=ci("m"),Zm=ci("bu"),Jm=ci("u"),rh=ci("bum"),tc=ci("um"),Qm=ci("sp"),e_=ci("rtg"),t_=ci("rtc");function n_(n,e=zt){Za("ec",n,e)}function Vt(n,e,t,i){let s;const r=t&&t[i];if(qe(n)||Ut(n)){s=new Array(n.length);for(let a=0,o=n.length;a<o;a++)s[a]=e(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(Mt(n))if(n[Symbol.iterator])s=Array.from(n,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(n);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];s[o]=e(n[c],c,o,r&&r[o])}}else s=[];return t&&(t[i]=s),s}const pl=n=>n?vh(n)?eo(n)||n.proxy:pl(n.parent):null,mr=kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>pl(n.parent),$root:n=>pl(n.root),$emit:n=>n.emit,$options:n=>nc(n),$forceUpdate:n=>n.f||(n.f=()=>Ql(n.update)),$nextTick:n=>n.n||(n.n=Zs.bind(n.proxy)),$watch:n=>Vm.bind(n)}),xo=(n,e)=>n!==gt&&!n.__isScriptSetup&&ct(n,e),i_={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(xo(i,e))return a[e]=1,i[e];if(s!==gt&&ct(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&ct(c,e))return a[e]=3,r[e];if(t!==gt&&ct(t,e))return a[e]=4,t[e];ml&&(a[e]=0)}}const u=mr[e];let f,d;if(u)return e==="$attrs"&&fn(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==gt&&ct(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,ct(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return xo(s,e)?(s[e]=t,!0):i!==gt&&ct(i,e)?(i[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==gt&&ct(n,a)||xo(e,a)||(o=r[0])&&ct(o,a)||ct(i,a)||ct(mr,a)||ct(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Wc(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ml=!0;function s_(n){const e=nc(n),t=n.proxy,i=n.ctx;ml=!1,e.beforeCreate&&$c(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:w,destroyed:y,unmounted:b,render:C,renderTracked:F,renderTriggered:L,errorCaptured:H,serverPrefetch:S,expose:T,inheritAttrs:J,components:$,directives:oe,filters:D}=e;if(c&&r_(c,i,null),a)for(const X in a){const re=a[X];et(re)&&(i[X]=re.bind(t))}if(s){const X=s.call(t,t);Mt(X)&&(n.data=jt(X))}if(ml=!0,r)for(const X in r){const re=r[X],le=et(re)?re.bind(t,t):et(re.get)?re.get.bind(t,t):Xn,de=!et(re)&&et(re.set)?re.set.bind(t):Xn,G=Lt({get:le,set:de});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>G.value,set:Z=>G.value=Z})}if(o)for(const X in o)ah(o[X],i,t,X);if(l){const X=et(l)?l.call(t):l;Reflect.ownKeys(X).forEach(re=>{En(re,X[re])})}u&&$c(u,n,"c");function z(X,re){qe(re)?re.forEach(le=>X(le.bind(t))):re&&X(re.bind(t))}if(z(Km,f),z(Fi,d),z(Zm,p),z(Jm,_),z(Xm,g),z(Ym,m),z(n_,H),z(t_,F),z(e_,L),z(rh,w),z(tc,b),z(Qm,S),qe(T))if(T.length){const X=n.exposed||(n.exposed={});T.forEach(re=>{Object.defineProperty(X,re,{get:()=>t[re],set:le=>t[re]=le})})}else n.exposed||(n.exposed={});C&&n.render===Xn&&(n.render=C),J!=null&&(n.inheritAttrs=J),$&&(n.components=$),oe&&(n.directives=oe)}function r_(n,e,t=Xn){qe(n)&&(n=_l(n));for(const i in n){const s=n[i];let r;Mt(s)?"default"in s?r=vt(s.from||i,s.default,!0):r=vt(s.from||i):r=vt(s),wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function $c(n,e,t){An(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ah(n,e,t,i){const s=i.includes(".")?eh(t,i):()=>t[i];if(Ut(n)){const r=e[n];et(r)&&Et(s,r)}else if(et(n))Et(s,n.bind(t));else if(Mt(n))if(qe(n))n.forEach(r=>ah(r,e,t,i));else{const r=et(n.handler)?n.handler.bind(t):e[n.handler];et(r)&&Et(s,r,n)}}function nc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>La(l,c,a,!0)),La(l,e,a)),Mt(e)&&r.set(e,l),l}function La(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&La(n,r,t,!0),s&&s.forEach(a=>La(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=a_[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const a_={data:qc,props:Xc,emits:Xc,methods:fr,computed:fr,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:fr,directives:fr,watch:l_,provide:qc,inject:o_};function qc(n,e){return e?n?function(){return kt(et(n)?n.call(this,this):n,et(e)?e.call(this,this):e)}:e:n}function o_(n,e){return fr(_l(n),_l(e))}function _l(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Jt(n,e){return n?[...new Set([].concat(n,e))]:e}function fr(n,e){return n?kt(Object.create(null),n,e):e}function Xc(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:kt(Object.create(null),Wc(n),Wc(e??{})):e}function l_(n,e){if(!n)return e;if(!e)return n;const t=kt(Object.create(null),n);for(const i in e)t[i]=Jt(n[i],e[i]);return t}function oh(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let c_=0;function u_(n,e){return function(i,s=null){et(i)||(i=kt({},i)),s!=null&&!Mt(s)&&(s=null);const r=oh(),a=new WeakSet;let o=!1;const l=r.app={_uid:c_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:k_,get config(){return r.config},set config(c){},use(c,...u){return a.has(c)||(c&&et(c.install)?(a.add(c),c.install(l,...u)):et(c)&&(a.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!o){const d=De(i,s);return d.appContext=r,u&&e?e(d,c):n(d,c,f),o=!0,l._container=c,c.__vue_app__=l,eo(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Er=l;try{return c()}finally{Er=null}}};return l}}let Er=null;function En(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function vt(n,e,t=!1){const i=zt||vn;if(i||Er){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Er._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&et(e)?e.call(i&&i.proxy):e}}function f_(){return!!(zt||vn||Er)}function d_(n,e,t,i=!1){const s={},r={};wa(r,Qa,1),n.propsDefaults=Object.create(null),lh(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Em(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function h_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=lt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Xa(n.emitsOptions,d))continue;const p=e[d];if(l)if(ct(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=zs(d);s[_]=gl(l,o,_,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{lh(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!ct(e,f)&&((u=Ys(f))===f||!ct(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=gl(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!ct(e,f))&&(delete r[f],c=!0)}c&&oi(n,"set","$attrs")}function lh(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ya(l))continue;const c=e[l];let u;s&&ct(s,u=zs(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Xa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=lt(t),c=o||gt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=gl(s,l,f,c[f],n,!ct(c,f))}}return a}function gl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ct(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&et(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(Vs(s),i=c[t]=l.call(null,e),ss())}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Ys(t))&&(i=!0))}return i}function ch(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!et(n)){const u=f=>{l=!0;const[d,p]=ch(f,e,!0);kt(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Mt(n)&&i.set(n,Us),Us;if(qe(r))for(let u=0;u<r.length;u++){const f=zs(r[u]);Yc(f)&&(a[f]=gt)}else if(r)for(const u in r){const f=zs(u);if(Yc(f)){const d=r[u],p=a[f]=qe(d)||et(d)?{type:d}:kt({},d);if(p){const _=Zc(Boolean,p.type),g=Zc(String,p.type);p[0]=_>-1,p[1]=g<0||_<g,(_>-1||ct(p,"default"))&&o.push(f)}}}const c=[a,o];return Mt(n)&&i.set(n,c),c}function Yc(n){return n[0]!=="$"}function jc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Kc(n,e){return jc(n)===jc(e)}function Zc(n,e){return qe(e)?e.findIndex(t=>Kc(t,n)):et(e)&&Kc(e,n)?0:-1}const uh=n=>n[0]==="_"||n==="$stable",ic=n=>qe(n)?n.map(Vn):[Vn(n)],p_=(n,e,t)=>{if(e._n)return e;const i=pr((...s)=>ic(e(...s)),t);return i._c=!1,i},fh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(uh(s))continue;const r=n[s];if(et(r))e[s]=p_(s,r,i);else if(r!=null){const a=ic(r);e[s]=()=>a}}},dh=(n,e)=>{const t=ic(e);n.slots.default=()=>t},m_=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=lt(e),wa(e,"_",t)):fh(e,n.slots={})}else n.slots={},e&&dh(n,e);wa(n.slots,Qa,1)},__=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=gt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(kt(s,e),!t&&o===1&&delete s._):(r=!e.$stable,fh(e,s)),a=e}else e&&(dh(n,e),a={default:1});if(r)for(const o in s)!uh(o)&&a[o]==null&&delete s[o]};function vl(n,e,t,i,s=!1){if(qe(n)){n.forEach((d,p)=>vl(d,e&&(qe(e)?e[p]:e),t,i,s));return}if(Ea(i)&&!s)return;const r=i.shapeFlag&4?eo(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===gt?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(Ut(c)?(u[c]=null,ct(f,c)&&(f[c]=null)):wt(c)&&(c.value=null)),et(l))Ci(l,o,12,[a,u]);else{const d=Ut(l),p=wt(l);if(d||p){const _=()=>{if(n.f){const g=d?ct(f,l)?f[l]:u[l]:l.value;s?qe(g)&&Vl(g,r):qe(g)?g.includes(r)||g.push(r):d?(u[l]=[r],ct(f,l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,ct(f,l)&&(f[l]=a)):p&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,sn(_,t)):_()}}}const sn=Gm;function g_(n){return v_(n)}function v_(n,e){const t=ol();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Xn,insertStaticContent:_}=n,g=(x,k,R,V=null,W=null,ie=null,me=!1,ae=null,_e=!!k.dynamicChildren)=>{if(x===k)return;x&&!Zi(x,k)&&(V=$e(x),Z(x,W,ie,!0),x=null),k.patchFlag===-2&&(_e=!1,k.dynamicChildren=null);const{type:fe,ref:Te,shapeFlag:E}=k;switch(fe){case Ja:m(x,k,R,V);break;case Nn:h(x,k,R,V);break;case So:x==null&&w(k,R,V,me);break;case ut:$(x,k,R,V,W,ie,me,ae,_e);break;default:E&1?C(x,k,R,V,W,ie,me,ae,_e):E&6?oe(x,k,R,V,W,ie,me,ae,_e):(E&64||E&128)&&fe.process(x,k,R,V,W,ie,me,ae,_e,Oe)}Te!=null&&W&&vl(Te,x&&x.ref,ie,k||x,!k)},m=(x,k,R,V)=>{if(x==null)i(k.el=o(k.children),R,V);else{const W=k.el=x.el;k.children!==x.children&&c(W,k.children)}},h=(x,k,R,V)=>{x==null?i(k.el=l(k.children||""),R,V):k.el=x.el},w=(x,k,R,V)=>{[x.el,x.anchor]=_(x.children,k,R,V,x.el,x.anchor)},y=({el:x,anchor:k},R,V)=>{let W;for(;x&&x!==k;)W=d(x),i(x,R,V),x=W;i(k,R,V)},b=({el:x,anchor:k})=>{let R;for(;x&&x!==k;)R=d(x),s(x),x=R;s(k)},C=(x,k,R,V,W,ie,me,ae,_e)=>{me=me||k.type==="svg",x==null?F(k,R,V,W,ie,me,ae,_e):S(x,k,W,ie,me,ae,_e)},F=(x,k,R,V,W,ie,me,ae)=>{let _e,fe;const{type:Te,props:E,shapeFlag:v,transition:O,dirs:ce}=x;if(_e=x.el=a(x.type,ie,E&&E.is,E),v&8?u(_e,x.children):v&16&&H(x.children,_e,null,V,W,ie&&Te!=="foreignObject",me,ae),ce&&Bi(x,null,V,"created"),L(_e,x,x.scopeId,me,V),E){for(const he in E)he!=="value"&&!ya(he)&&r(_e,he,null,E[he],ie,x.children,V,W,Le);"value"in E&&r(_e,"value",null,E.value),(fe=E.onVnodeBeforeMount)&&Gn(fe,V,x)}ce&&Bi(x,null,V,"beforeMount");const ue=M_(W,O);ue&&O.beforeEnter(_e),i(_e,k,R),((fe=E&&E.onVnodeMounted)||ue||ce)&&sn(()=>{fe&&Gn(fe,V,x),ue&&O.enter(_e),ce&&Bi(x,null,V,"mounted")},W)},L=(x,k,R,V,W)=>{if(R&&p(x,R),V)for(let ie=0;ie<V.length;ie++)p(x,V[ie]);if(W){let ie=W.subTree;if(k===ie){const me=W.vnode;L(x,me,me.scopeId,me.slotScopeIds,W.parent)}}},H=(x,k,R,V,W,ie,me,ae,_e=0)=>{for(let fe=_e;fe<x.length;fe++){const Te=x[fe]=ae?Ei(x[fe]):Vn(x[fe]);g(null,Te,k,R,V,W,ie,me,ae)}},S=(x,k,R,V,W,ie,me)=>{const ae=k.el=x.el;let{patchFlag:_e,dynamicChildren:fe,dirs:Te}=k;_e|=x.patchFlag&16;const E=x.props||gt,v=k.props||gt;let O;R&&Hi(R,!1),(O=v.onVnodeBeforeUpdate)&&Gn(O,R,k,x),Te&&Bi(k,x,R,"beforeUpdate"),R&&Hi(R,!0);const ce=W&&k.type!=="foreignObject";if(fe?T(x.dynamicChildren,fe,ae,R,V,ce,ie):me||re(x,k,ae,null,R,V,ce,ie,!1),_e>0){if(_e&16)J(ae,k,E,v,R,V,W);else if(_e&2&&E.class!==v.class&&r(ae,"class",null,v.class,W),_e&4&&r(ae,"style",E.style,v.style,W),_e&8){const ue=k.dynamicProps;for(let he=0;he<ue.length;he++){const Ee=ue[he],ve=E[Ee],Ae=v[Ee];(Ae!==ve||Ee==="value")&&r(ae,Ee,ve,Ae,W,x.children,R,V,Le)}}_e&1&&x.children!==k.children&&u(ae,k.children)}else!me&&fe==null&&J(ae,k,E,v,R,V,W);((O=v.onVnodeUpdated)||Te)&&sn(()=>{O&&Gn(O,R,k,x),Te&&Bi(k,x,R,"updated")},V)},T=(x,k,R,V,W,ie,me)=>{for(let ae=0;ae<k.length;ae++){const _e=x[ae],fe=k[ae],Te=_e.el&&(_e.type===ut||!Zi(_e,fe)||_e.shapeFlag&70)?f(_e.el):R;g(_e,fe,Te,null,V,W,ie,me,!0)}},J=(x,k,R,V,W,ie,me)=>{if(R!==V){if(R!==gt)for(const ae in R)!ya(ae)&&!(ae in V)&&r(x,ae,R[ae],null,me,k.children,W,ie,Le);for(const ae in V){if(ya(ae))continue;const _e=V[ae],fe=R[ae];_e!==fe&&ae!=="value"&&r(x,ae,fe,_e,me,k.children,W,ie,Le)}"value"in V&&r(x,"value",R.value,V.value)}},$=(x,k,R,V,W,ie,me,ae,_e)=>{const fe=k.el=x?x.el:o(""),Te=k.anchor=x?x.anchor:o("");let{patchFlag:E,dynamicChildren:v,slotScopeIds:O}=k;O&&(ae=ae?ae.concat(O):O),x==null?(i(fe,R,V),i(Te,R,V),H(k.children,R,Te,W,ie,me,ae,_e)):E>0&&E&64&&v&&x.dynamicChildren?(T(x.dynamicChildren,v,R,W,ie,me,ae),(k.key!=null||W&&k===W.subTree)&&hh(x,k,!0)):re(x,k,R,Te,W,ie,me,ae,_e)},oe=(x,k,R,V,W,ie,me,ae,_e)=>{k.slotScopeIds=ae,x==null?k.shapeFlag&512?W.ctx.activate(k,R,V,me,_e):D(k,R,V,W,ie,me,_e):q(x,k,_e)},D=(x,k,R,V,W,ie,me)=>{const ae=x.component=C_(x,V,W);if(Ka(x)&&(ae.ctx.renderer=Oe),R_(ae),ae.asyncDep){if(W&&W.registerDep(ae,z),!x.el){const _e=ae.subTree=De(Nn);h(null,_e,k,R)}return}z(ae,x,k,R,W,ie,me)},q=(x,k,R)=>{const V=k.component=x.component;if(Om(x,k,R))if(V.asyncDep&&!V.asyncResolved){X(V,k,R);return}else V.next=k,Dm(V.update),V.update();else k.el=x.el,V.vnode=k},z=(x,k,R,V,W,ie,me)=>{const ae=()=>{if(x.isMounted){let{next:Te,bu:E,u:v,parent:O,vnode:ce}=x,ue=Te,he;Hi(x,!1),Te?(Te.el=ce.el,X(x,Te,me)):Te=ce,E&&go(E),(he=Te.props&&Te.props.onVnodeBeforeUpdate)&&Gn(he,O,Te,ce),Hi(x,!0);const Ee=vo(x),ve=x.subTree;x.subTree=Ee,g(ve,Ee,f(ve.el),$e(ve),x,W,ie),Te.el=Ee.el,ue===null&&Bm(x,Ee.el),v&&sn(v,W),(he=Te.props&&Te.props.onVnodeUpdated)&&sn(()=>Gn(he,O,Te,ce),W)}else{let Te;const{el:E,props:v}=k,{bm:O,m:ce,parent:ue}=x,he=Ea(k);if(Hi(x,!1),O&&go(O),!he&&(Te=v&&v.onVnodeBeforeMount)&&Gn(Te,ue,k),Hi(x,!0),E&&Ce){const Ee=()=>{x.subTree=vo(x),Ce(E,x.subTree,x,W,null)};he?k.type.__asyncLoader().then(()=>!x.isUnmounted&&Ee()):Ee()}else{const Ee=x.subTree=vo(x);g(null,Ee,R,V,x,W,ie),k.el=Ee.el}if(ce&&sn(ce,W),!he&&(Te=v&&v.onVnodeMounted)){const Ee=k;sn(()=>Gn(Te,ue,Ee),W)}(k.shapeFlag&256||ue&&Ea(ue.vnode)&&ue.vnode.shapeFlag&256)&&x.a&&sn(x.a,W),x.isMounted=!0,k=R=V=null}},_e=x.effect=new Xl(ae,()=>Ql(fe),x.scope),fe=x.update=()=>_e.run();fe.id=x.uid,Hi(x,!0),fe()},X=(x,k,R)=>{k.component=x;const V=x.vnode.props;x.vnode=k,x.next=null,h_(x,k.props,V,R),__(x,k.children,R),js(),zc(),Ks()},re=(x,k,R,V,W,ie,me,ae,_e=!1)=>{const fe=x&&x.children,Te=x?x.shapeFlag:0,E=k.children,{patchFlag:v,shapeFlag:O}=k;if(v>0){if(v&128){de(fe,E,R,V,W,ie,me,ae,_e);return}else if(v&256){le(fe,E,R,V,W,ie,me,ae,_e);return}}O&8?(Te&16&&Le(fe,W,ie),E!==fe&&u(R,E)):Te&16?O&16?de(fe,E,R,V,W,ie,me,ae,_e):Le(fe,W,ie,!0):(Te&8&&u(R,""),O&16&&H(E,R,V,W,ie,me,ae,_e))},le=(x,k,R,V,W,ie,me,ae,_e)=>{x=x||Us,k=k||Us;const fe=x.length,Te=k.length,E=Math.min(fe,Te);let v;for(v=0;v<E;v++){const O=k[v]=_e?Ei(k[v]):Vn(k[v]);g(x[v],O,R,null,W,ie,me,ae,_e)}fe>Te?Le(x,W,ie,!0,!1,E):H(k,R,V,W,ie,me,ae,_e,E)},de=(x,k,R,V,W,ie,me,ae,_e)=>{let fe=0;const Te=k.length;let E=x.length-1,v=Te-1;for(;fe<=E&&fe<=v;){const O=x[fe],ce=k[fe]=_e?Ei(k[fe]):Vn(k[fe]);if(Zi(O,ce))g(O,ce,R,null,W,ie,me,ae,_e);else break;fe++}for(;fe<=E&&fe<=v;){const O=x[E],ce=k[v]=_e?Ei(k[v]):Vn(k[v]);if(Zi(O,ce))g(O,ce,R,null,W,ie,me,ae,_e);else break;E--,v--}if(fe>E){if(fe<=v){const O=v+1,ce=O<Te?k[O].el:V;for(;fe<=v;)g(null,k[fe]=_e?Ei(k[fe]):Vn(k[fe]),R,ce,W,ie,me,ae,_e),fe++}}else if(fe>v)for(;fe<=E;)Z(x[fe],W,ie,!0),fe++;else{const O=fe,ce=fe,ue=new Map;for(fe=ce;fe<=v;fe++){const je=k[fe]=_e?Ei(k[fe]):Vn(k[fe]);je.key!=null&&ue.set(je.key,fe)}let he,Ee=0;const ve=v-ce+1;let Ae=!1,Ve=0;const nt=new Array(ve);for(fe=0;fe<ve;fe++)nt[fe]=0;for(fe=O;fe<=E;fe++){const je=x[fe];if(Ee>=ve){Z(je,W,ie,!0);continue}let Be;if(je.key!=null)Be=ue.get(je.key);else for(he=ce;he<=v;he++)if(nt[he-ce]===0&&Zi(je,k[he])){Be=he;break}Be===void 0?Z(je,W,ie,!0):(nt[Be-ce]=fe+1,Be>=Ve?Ve=Be:Ae=!0,g(je,k[Be],R,null,W,ie,me,ae,_e),Ee++)}const Me=Ae?x_(nt):Us;for(he=Me.length-1,fe=ve-1;fe>=0;fe--){const je=ce+fe,Be=k[je],ze=je+1<Te?k[je+1].el:V;nt[fe]===0?g(null,Be,R,ze,W,ie,me,ae,_e):Ae&&(he<0||fe!==Me[he]?G(Be,R,ze,2):he--)}}},G=(x,k,R,V,W=null)=>{const{el:ie,type:me,transition:ae,children:_e,shapeFlag:fe}=x;if(fe&6){G(x.component.subTree,k,R,V);return}if(fe&128){x.suspense.move(k,R,V);return}if(fe&64){me.move(x,k,R,Oe);return}if(me===ut){i(ie,k,R);for(let E=0;E<_e.length;E++)G(_e[E],k,R,V);i(x.anchor,k,R);return}if(me===So){y(x,k,R);return}if(V!==2&&fe&1&&ae)if(V===0)ae.beforeEnter(ie),i(ie,k,R),sn(()=>ae.enter(ie),W);else{const{leave:E,delayLeave:v,afterLeave:O}=ae,ce=()=>i(ie,k,R),ue=()=>{E(ie,()=>{ce(),O&&O()})};v?v(ie,ce,ue):ue()}else i(ie,k,R)},Z=(x,k,R,V=!1,W=!1)=>{const{type:ie,props:me,ref:ae,children:_e,dynamicChildren:fe,shapeFlag:Te,patchFlag:E,dirs:v}=x;if(ae!=null&&vl(ae,null,R,x,!0),Te&256){k.ctx.deactivate(x);return}const O=Te&1&&v,ce=!Ea(x);let ue;if(ce&&(ue=me&&me.onVnodeBeforeUnmount)&&Gn(ue,k,x),Te&6)ye(x.component,R,V);else{if(Te&128){x.suspense.unmount(R,V);return}O&&Bi(x,null,k,"beforeUnmount"),Te&64?x.type.remove(x,k,R,W,Oe,V):fe&&(ie!==ut||E>0&&E&64)?Le(fe,k,R,!1,!0):(ie===ut&&E&384||!W&&Te&16)&&Le(_e,k,R),V&&xe(x)}(ce&&(ue=me&&me.onVnodeUnmounted)||O)&&sn(()=>{ue&&Gn(ue,k,x),O&&Bi(x,null,k,"unmounted")},R)},xe=x=>{const{type:k,el:R,anchor:V,transition:W}=x;if(k===ut){Se(R,V);return}if(k===So){b(x);return}const ie=()=>{s(R),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(x.shapeFlag&1&&W&&!W.persisted){const{leave:me,delayLeave:ae}=W,_e=()=>me(R,ie);ae?ae(x.el,ie,_e):_e()}else ie()},Se=(x,k)=>{let R;for(;x!==k;)R=d(x),s(x),x=R;s(k)},ye=(x,k,R)=>{const{bum:V,scope:W,update:ie,subTree:me,um:ae}=x;V&&go(V),W.stop(),ie&&(ie.active=!1,Z(me,x,k,R)),ae&&sn(ae,k),sn(()=>{x.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},Le=(x,k,R,V=!1,W=!1,ie=0)=>{for(let me=ie;me<x.length;me++)Z(x[me],k,R,V,W)},$e=x=>x.shapeFlag&6?$e(x.component.subTree):x.shapeFlag&128?x.suspense.next():d(x.anchor||x.el),Ne=(x,k,R)=>{x==null?k._vnode&&Z(k._vnode,null,null,!0):g(k._vnode||null,x,k,null,null,null,R),zc(),Zd(),k._vnode=x},Oe={p:g,um:Z,m:G,r:xe,mt:D,mc:H,pc:re,pbc:T,n:$e,o:n};let Fe,Ce;return e&&([Fe,Ce]=e(Oe)),{render:Ne,hydrate:Fe,createApp:u_(Ne,Fe)}}function Hi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function M_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function hh(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Ei(s[r]),o.el=a.el),t||hh(a,o)),o.type===Ja&&(o.el=a.el)}}function x_(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const S_=n=>n.__isTeleport,ut=Symbol.for("v-fgt"),Ja=Symbol.for("v-txt"),Nn=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),_r=[];let kn=null;function Q(n=!1){_r.push(kn=n?null:[])}function y_(){_r.pop(),kn=_r[_r.length-1]||null}let br=1;function Jc(n){br+=n}function ph(n){return n.dynamicChildren=br>0?kn||Us:null,y_(),br>0&&kn&&kn.push(n),n}function pe(n,e,t,i,s,r){return ph(P(n,e,t,i,s,r,!0))}function xt(n,e,t,i,s){return ph(De(n,e,t,i,s,!0))}function Ml(n){return n?n.__v_isVNode===!0:!1}function Zi(n,e){return n.type===e.type&&n.key===e.key}const Qa="__vInternal",mh=({key:n})=>n??null,ba=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ut(n)||wt(n)||et(n)?{i:vn,r:n,k:e,f:!!t}:n:null);function P(n,e=null,t=null,i=0,s=null,r=n===ut?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&mh(e),ref:e&&ba(e),scopeId:Ya,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vn};return o?(sc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ut(t)?8:16),br>0&&!a&&kn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&kn.push(l),l}const De=E_;function E_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Hm)&&(n=Nn),Ml(n)){const o=jn(n,e,!0);return t&&sc(o,t),br>0&&!r&&kn&&(o.shapeFlag&6?kn[kn.indexOf(n)]=o:kn.push(o)),o.patchFlag|=-2,o}if(I_(n)&&(n=n.__vccOpts),e){e=b_(e);let{class:o,style:l}=e;o&&!Ut(o)&&(e.class=Dt(o)),Mt(l)&&(Vd(l)&&!qe(l)&&(l=kt({},l)),e.style=Ln(l))}const a=Ut(n)?1:zm(n)?128:S_(n)?64:Mt(n)?4:et(n)?2:0;return P(n,e,t,i,s,a,r,!0)}function b_(n){return n?Vd(n)||Qa in n?kt({},n):n:null}function jn(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:a}=n,o=e?_h(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&mh(o),ref:e&&e.ref?t&&s?qe(s)?s.concat(ba(e)):[s,ba(e)]:ba(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ut?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&jn(n.ssContent),ssFallback:n.ssFallback&&jn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function T_(n=" ",e=0){return De(Ja,null,n,e)}function We(n="",e=!1){return e?(Q(),xt(Nn,null,n)):De(Nn,null,n)}function Vn(n){return n==null||typeof n=="boolean"?De(Nn):qe(n)?De(ut,null,n.slice()):typeof n=="object"?Ei(n):De(Ja,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:jn(n)}function sc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),sc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Qa in e)?e._ctx=vn:s===3&&vn&&(vn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else et(e)?(e={default:e,_ctx:vn},t=32):(e=String(e),i&64?(t=16,e=[T_(e)]):t=8);n.children=e,n.shapeFlag|=t}function _h(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Dt([e.class,i.class]));else if(s==="style")e.style=Ln([e.style,i.style]);else if(Ha(s)){const r=e[s],a=i[s];a&&r!==a&&!(qe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Gn(n,e,t,i=null){An(n,e,7,[t,i])}const A_=oh();let w_=0;function C_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||A_,r={uid:w_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ch(i,s),emitsOptions:Qd(i,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Fm.bind(null,r),n.ce&&n.ce(r),r}let zt=null;const gh=()=>zt||vn;let rc,hs,Qc="__VUE_INSTANCE_SETTERS__";(hs=ol()[Qc])||(hs=ol()[Qc]=[]),hs.push(n=>zt=n),rc=n=>{hs.length>1?hs.forEach(e=>e(n)):hs[0](n)};const Vs=n=>{rc(n),n.scope.on()},ss=()=>{zt&&zt.scope.off(),rc(null)};function vh(n){return n.vnode.shapeFlag&4}let Tr=!1;function R_(n,e=!1){Tr=e;const{props:t,children:i}=n.vnode,s=vh(n);d_(n,t,s,e),m_(n,i);const r=s?P_(n,e):void 0;return Tr=!1,r}function P_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=$a(new Proxy(n.ctx,i_));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?D_(n):null;Vs(n),js();const r=Ci(i,n,0,[n.props,s]);if(Ks(),ss(),Ed(r)){if(r.then(ss,ss),e)return r.then(a=>{eu(n,a,e)}).catch(a=>{qa(a,n,0)});n.asyncDep=r}else eu(n,r,e)}else Mh(n,e)}function eu(n,e,t){et(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=Xd(e)),Mh(n,t)}let tu;function Mh(n,e,t){const i=n.type;if(!n.render){if(!e&&tu&&!i.render){const s=i.template||nc(n).template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=kt(kt({isCustomElement:r,delimiters:o},a),l);i.render=tu(s,c)}}n.render=i.render||Xn}{Vs(n),js();try{s_(n)}finally{Ks(),ss()}}}function L_(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return fn(n,"get","$attrs"),e[t]}}))}function D_(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return L_(n)},slots:n.slots,emit:n.emit,expose:e}}function eo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Xd($a(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in mr)return mr[t](n)},has(e,t){return t in e||t in mr}}))}function I_(n){return et(n)&&"__vccOpts"in n}const Lt=(n,e)=>Rm(n,e,Tr);function Gt(n,e,t){const i=arguments.length;return i===2?Mt(e)&&!qe(e)?Ml(e)?De(n,null,[e]):De(n,e):De(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ml(t)&&(t=[t]),De(n,e,t))}const U_=Symbol.for("v-scx"),F_=()=>vt(U_),k_="3.3.8",N_="http://www.w3.org/2000/svg",Ji=typeof document<"u"?document:null,nu=Ji&&Ji.createElement("template"),O_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?Ji.createElementNS(N_,n):Ji.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ji.createTextNode(n),createComment:n=>Ji.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ji.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{nu.innerHTML=i?`<svg>${n}</svg>`:n;const o=nu.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},hi="transition",tr="animation",Ar=Symbol("_vtc"),ac=(n,{slots:e})=>Gt(qm,B_(n),e);ac.displayName="Transition";const xh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ac.props=kt({},th,xh);const zi=(n,e=[])=>{qe(n)?n.forEach(t=>t(...e)):n&&n(...e)},iu=n=>n?qe(n)?n.some(e=>e.length>1):n.length>1:!1;function B_(n){const e={};for(const $ in n)$ in xh||(e[$]=n[$]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=H_(s),g=_&&_[0],m=_&&_[1],{onBeforeEnter:h,onEnter:w,onEnterCancelled:y,onLeave:b,onLeaveCancelled:C,onBeforeAppear:F=h,onAppear:L=w,onAppearCancelled:H=y}=e,S=($,oe,D)=>{Gi($,oe?u:o),Gi($,oe?c:a),D&&D()},T=($,oe)=>{$._isLeaving=!1,Gi($,f),Gi($,p),Gi($,d),oe&&oe()},J=$=>(oe,D)=>{const q=$?L:w,z=()=>S(oe,$,D);zi(q,[oe,z]),su(()=>{Gi(oe,$?l:r),pi(oe,$?u:o),iu(q)||ru(oe,i,g,z)})};return kt(e,{onBeforeEnter($){zi(h,[$]),pi($,r),pi($,a)},onBeforeAppear($){zi(F,[$]),pi($,l),pi($,c)},onEnter:J(!1),onAppear:J(!0),onLeave($,oe){$._isLeaving=!0;const D=()=>T($,oe);pi($,f),V_(),pi($,d),su(()=>{$._isLeaving&&(Gi($,f),pi($,p),iu(b)||ru($,i,m,D))}),zi(b,[$,D])},onEnterCancelled($){S($,!1),zi(y,[$])},onAppearCancelled($){S($,!0),zi(H,[$])},onLeaveCancelled($){T($),zi(C,[$])}})}function H_(n){if(n==null)return null;if(Mt(n))return[yo(n.enter),yo(n.leave)];{const e=yo(n);return[e,e]}}function yo(n){return Yp(n)}function pi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ar]||(n[Ar]=new Set)).add(e)}function Gi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ar];t&&(t.delete(e),t.size||(n[Ar]=void 0))}function su(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let z_=0;function ru(n,e,t,i){const s=n._endId=++z_,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=G_(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,d),r()},d=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,d)}function G_(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${hi}Delay`),r=i(`${hi}Duration`),a=au(s,r),o=i(`${tr}Delay`),l=i(`${tr}Duration`),c=au(o,l);let u=null,f=0,d=0;e===hi?a>0&&(u=hi,f=a,d=r.length):e===tr?c>0&&(u=tr,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?hi:tr:null,d=u?u===hi?r.length:l.length:0);const p=u===hi&&/\b(transform|all)(,|$)/.test(i(`${hi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function au(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>ou(t)+ou(n[i])))}function ou(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function V_(){return document.body.offsetHeight}function W_(n,e,t){const i=n[Ar];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const oc=Symbol("_vod"),At={beforeMount(n,{value:e},{transition:t}){n[oc]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):nr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),nr(n,!0),i.enter(n)):i.leave(n,()=>{nr(n,!1)}):nr(n,e))},beforeUnmount(n,{value:e}){nr(n,e)}};function nr(n,e){n.style.display=e?n[oc]:"none"}function $_(n,e,t){const i=n.style,s=Ut(t);if(t&&!s){if(e&&!Ut(e))for(const r in e)t[r]==null&&xl(i,r,"");for(const r in t)xl(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),oc in n&&(i.display=r)}}const lu=/\s*!important$/;function xl(n,e,t){if(qe(t))t.forEach(i=>xl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=q_(n,e);lu.test(t)?n.setProperty(Ys(i),t.replace(lu,""),"important"):n[i]=t}}const cu=["Webkit","Moz","ms"],Eo={};function q_(n,e){const t=Eo[e];if(t)return t;let i=zs(e);if(i!=="filter"&&i in n)return Eo[e]=i;i=Ad(i);for(let s=0;s<cu.length;s++){const r=cu[s]+i;if(r in n)return Eo[e]=r}return e}const uu="http://www.w3.org/1999/xlink";function X_(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(uu,e.slice(6,e.length)):n.setAttributeNS(uu,e,t);else{const r=em(e);t==null||r&&!wd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Y_(n,e,t,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=wd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function j_(n,e,t,i){n.addEventListener(e,t,i)}function K_(n,e,t,i){n.removeEventListener(e,t,i)}const fu=Symbol("_vei");function Z_(n,e,t,i,s=null){const r=n[fu]||(n[fu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=J_(e);if(i){const c=r[e]=tg(i,s);j_(n,o,c,l)}else a&&(K_(n,o,a,l),r[e]=void 0)}}const du=/(?:Once|Passive|Capture)$/;function J_(n){let e;if(du.test(n)){e={};let i;for(;i=n.match(du);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ys(n.slice(2)),e]}let bo=0;const Q_=Promise.resolve(),eg=()=>bo||(Q_.then(()=>bo=0),bo=Date.now());function tg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;An(ng(i,t.value),e,5,[i])};return t.value=n,t.attached=eg(),t}function ng(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const hu=/^on[a-z]/,ig=(n,e,t,i,s=!1,r,a,o,l)=>{e==="class"?W_(n,i,s):e==="style"?$_(n,t,i):Ha(e)?Gl(e)||Z_(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sg(n,e,i,s))?Y_(n,e,i,r,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),X_(n,e,i,s))};function sg(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&hu.test(e)&&et(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||hu.test(e)&&Ut(t)?!1:e in n}const rg=kt({patchProp:ig},O_);let pu;function ag(){return pu||(pu=g_(rg))}const og=(...n)=>{const e=ag().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=lg(i);if(!s)return;const r=e._component;!et(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function lg(n){return Ut(n)?document.querySelector(n):n}var cg=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Sh;const to=n=>Sh=n,yh=Symbol();function Sl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var gr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(gr||(gr={}));function ug(){const n=$l(!0),e=n.run(()=>ge({}));let t=[],i=[];const s=$a({install(r){to(s),s._a=r,r.provide(yh,s),r.config.globalProperties.$pinia=s,i.forEach(a=>t.push(a)),i=[]},use(r){return!this._a&&!cg?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Eh=()=>{};function mu(n,e,t,i=Eh){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Pd()&&Ld(s),s}function ps(n,...e){n.slice().forEach(t=>{t(...e)})}const fg=n=>n();function yl(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];Sl(s)&&Sl(i)&&n.hasOwnProperty(t)&&!wt(i)&&!wi(i)?n[t]=yl(s,i):n[t]=i}return n}const dg=Symbol();function hg(n){return!Sl(n)||!n.hasOwnProperty(dg)}const{assign:Si}=Object;function pg(n){return!!(wt(n)&&n.effect)}function mg(n,e,t,i){const{state:s,actions:r,getters:a}=e,o=t.state.value[n];let l;function c(){o||(t.state.value[n]=s?s():{});const u=Yd(t.state.value[n]);return Si(u,r,Object.keys(a||{}).reduce((f,d)=>(f[d]=$a(Lt(()=>{to(t);const p=t._s.get(n);return a[d].call(p,p)})),f),{}))}return l=bh(n,c,e,t,i,!0),l}function bh(n,e,t={},i,s,r){let a;const o=Si({actions:{}},t),l={deep:!0};let c,u,f=[],d=[],p;const _=i.state.value[n];!r&&!_&&(i.state.value[n]={}),ge({});let g;function m(H){let S;c=u=!1,typeof H=="function"?(H(i.state.value[n]),S={type:gr.patchFunction,storeId:n,events:p}):(yl(i.state.value[n],H),S={type:gr.patchObject,payload:H,storeId:n,events:p});const T=g=Symbol();Zs().then(()=>{g===T&&(c=!0)}),u=!0,ps(f,S,i.state.value[n])}const h=r?function(){const{state:S}=t,T=S?S():{};this.$patch(J=>{Si(J,T)})}:Eh;function w(){a.stop(),f=[],d=[],i._s.delete(n)}function y(H,S){return function(){to(i);const T=Array.from(arguments),J=[],$=[];function oe(z){J.push(z)}function D(z){$.push(z)}ps(d,{args:T,name:H,store:C,after:oe,onError:D});let q;try{q=S.apply(this&&this.$id===n?this:C,T)}catch(z){throw ps($,z),z}return q instanceof Promise?q.then(z=>(ps(J,z),z)).catch(z=>(ps($,z),Promise.reject(z))):(ps(J,q),q)}}const b={_p:i,$id:n,$onAction:mu.bind(null,d),$patch:m,$reset:h,$subscribe(H,S={}){const T=mu(f,H,S.detached,()=>J()),J=a.run(()=>Et(()=>i.state.value[n],$=>{(S.flush==="sync"?u:c)&&H({storeId:n,type:gr.direct,events:p},$)},Si({},l,S)));return T},$dispose:w},C=jt(b);i._s.set(n,C);const L=(i._a&&i._a.runWithContext||fg)(()=>i._e.run(()=>(a=$l()).run(e)));for(const H in L){const S=L[H];if(wt(S)&&!pg(S)||wi(S))r||(_&&hg(S)&&(wt(S)?S.value=_[H]:yl(S,_[H])),i.state.value[n][H]=S);else if(typeof S=="function"){const T=y(H,S);L[H]=T,o.actions[H]=S}}return Si(C,L),Si(lt(C),L),Object.defineProperty(C,"$state",{get:()=>i.state.value[n],set:H=>{m(S=>{Si(S,H)})}}),i._p.forEach(H=>{Si(C,a.run(()=>H({store:C,app:i._a,pinia:i,options:o})))}),_&&r&&t.hydrate&&t.hydrate(C.$state,_),c=!0,u=!0,C}function ki(n,e,t){let i,s;const r=typeof e=="function";typeof n=="string"?(i=n,s=r?t:e):(s=n,i=n.id);function a(o,l){const c=f_();return o=o||(c?vt(yh,null):null),o&&to(o),o=Sh,o._s.has(i)||(r?bh(i,e,s,o):mg(i,s,o)),o._s.get(i)}return a.$id=i,a}const _g={class:"btnFlame"},gg=Xe({__name:"GreenBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(Q(),pe("div",_g,be(n.inside),1))}}),Ze=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},vg=Ze(gg,[["__scopeId","data-v-d40edbbe"]]),M={title:"Seventh Dawn",newgame:"NEW GAME",loadgame:"LOAD GAME",textYes:"YES",textNo:"NO",strLog1:"GENERAL",strLog2:"BATTLE",statusOpening:"OPENING",statusTown:"TOWN",statusDungeon:"DUNGEON",processSearch:"SEARCH",processBattle:"BATTLE",processGuild:"GUILD",menuAddMember:"Add a Member",menuRemoveMember:"Remove Member",processInn:"INN",processPub:"PUB",processChurch:"CHURCH",processSmith:"SMITH",processEquipShop:"EQUPMENT SHOP",processItemShop:"ITEM SHOP",nameDungeon1:"Forest of Envy",nameDungeon2:"Swamp of Gluttony",nameDungeon3:"Desert of Sloth",nameDungeon4:"Volcano of Wrath",nameDungeon5:"Cave of Greed",nameDungeon6:"Palace of Lust",nameDungeon7:"Tower of Pride",mainChaid:1,clsSamurai:"Samurai",clsHolyKnight:"HolyKnight",clsPriest:"Priest",clsArcher:"Archer",statusHP:"HP",statusMP:"MP",statusATK:"ATK",statusMGC:"MGC",statusDEF:"DEF",statusMDF:"MDF",statusDEX:"DEX",statusSPD:"SPD",statusnowHP:"nowHP",statusnowMP:"nowMP",wepSword:"Sword",wepAxe:"Axe",wepDagger:"Dagger",wepWand:"Wand",wepBow:"Bow",wepSpear:"Spear",MapWidth:100,MapHeight:100,MapWall:0,MapRoom:1,MapRoad:2,SetDoorUp:11,SetDoorUnder:12,SetDoorLeft:13,SetDoorRight:14,roomMinHeight:5,roomMaxHeight:15,roomMinWidth:5,roomMaxWidth:15,RoomCountMin:10,RoomCountMax:20,BlockSize:10,BlockHeight:20,meetPointCount:2,MiniHeight:300,MiniWallColor:"#02040F",MiniRoomColor:"#C2B8B2",MiniMoveColor:"#197BBD",MiniPlayerColor:"#CBEF43",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",TurnLeft:"TurnLeft",TurnRight:"TurnRight",encountMin:1,encountMax:5,encountLimit:100,monNumMin:1,monNumMax:6,minEffectTop:20,maxEffectTop:40,minEffectLeft:30,maxEffectLeft:50,initHitRate:70,monsterHitRate:75,normalDamageRate:1,critDamageRate:1.5,effectTime:1e3,normalAttackTime:400,monsterAttackTime:500,delayTime:100,awaitTime:1500,nextTime:500,actionAttack:"Attack",actionSkill:"Skill",actionMagic:"Magic",strMiss:"MISS",targetMyself:"myself",targetOneFriend:"oneFriend",targetAllFriends:"allFriends",targetRandomFriend:"randomFriend",targetOneEnemy:"oneEnemy",targetColumnEnemy:"columnEnemy",targetRowEnemy:"rowEnemy",targetAllEnemy:"allEnemy",targetRandomEnemy:"randomEnemy",targetAll:"all",effectAttack:"attack",effectHeal:"heal",effectBuff:"buff",effectDebuff:"debuff",effectCondition:"condition",effectSpecial:"special",effectDamage:"damage",effectRegeneration:"regeneration",baseFixValue:"FixValue",baseFixRate:"FixRate",returnItemId:1,itemTabAll:"All",itemTab1:"Normal",itemTab2:"Battle",itemTab3:"Special",itemBtn1:"USE",mscTitle:"maou_bgm_orchestra18",mscTown:"maou_bgm_acoustic36",mscDungeon1:"maou_bgm_fantasy01",mscBattle1:"Bite_the_Bullet",mscBattle2:"maou_bgm_fantasy15",mscBattle3:"maou_bgm_orchestra12",mscBattle4:"Strike_the_Despair",mscBattle5:"Integral-one",logEnterDungeon:"Enter the dungeon",logMonsterEncounter:"Monster Encounter",msgInGame1:"Please turn the screen horizontally.",msgInGame2:"Music plays in this game.",msgEnterDungeon:"Do you enter The ",msgAddParty1:"Do you add ",msgAddParty2:" to your party?",msgRemoveParty1:"Do you remove ",msgRemoveParty2:" from the party?",msgAddPartyError:"The party is full. Please remove someone.",msgRemovePartyError:"This character cannot remove from party.",msgSkillCostError:"Skill cost limit error test12345678901234567890"},Hn=ki("status",{state:()=>({status:M.statusOpening,processTown:M.statusTown,processDungeon:"",guildMenu:"",whichDungeon:"",musicDungeon:""})}),Dr=ki("audio",{state:()=>({currentBgm:null,audioElements:{}}),actions:{playBgm(n){this.currentBgm&&this.audioElements[this.currentBgm].pause(),this.audioElements[n]||(this.audioElements[n]=new Audio(`music/bgm/${n}.mp3`),this.audioElements[n].loop=!0),this.audioElements[n].play(),this.currentBgm=n},playSfx(n){new Audio(require(`music/se/${n}.mp3`)).play()}}}),Mg=n=>(On("data-v-e99d991b"),n=n(),Bn(),n),xg=Mg(()=>P("div",{class:"enter"},"ENTER THE CLICK",-1)),Sg=[xg],yg={key:1,class:"background"},Eg={class:"title"},bg=Xe({__name:"Opening",setup(n){const e=Hn(),t=Dr(),i=ge(!1);Fi(()=>{window.innerHeight>window.innerWidth&&(window.onload=()=>{alert(M.msgInGame1)}),window.onload=()=>{alert(M.msgInGame2)}});function s(){i.value=!0,t.playBgm(M.mscTitle)}function r(){e.status=M.statusTown,e.processTown=M.statusTown}return(a,o)=>i.value?(Q(),pe("div",yg,[P("div",Eg,be(K(M).title),1),De(vg,{class:"btnCard",id:"btn2",inside:K(M).newgame,onClick:o[0]||(o[0]=l=>r())},null,8,["inside"])])):(Q(),pe("div",{key:0,class:"background",onClick:s},Sg))}}),Tg=Ze(bg,[["__scopeId","data-v-e99d991b"]]);/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const Pt={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},_u={itemsToShow:{default:Pt.itemsToShow,type:Number},itemsToScroll:{default:Pt.itemsToScroll,type:Number},wrapAround:{default:Pt.wrapAround,type:Boolean},throttle:{default:Pt.throttle,type:Number},snapAlign:{default:Pt.snapAlign,validator(n){return["start","end","center","center-even","center-odd"].includes(n)}},transition:{default:Pt.transition,type:Number},breakpoints:{default:Pt.breakpoints,type:Object},autoplay:{default:Pt.autoplay,type:Number},pauseAutoplayOnHover:{default:Pt.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:Pt.mouseDrag,type:Boolean},touchDrag:{default:Pt.touchDrag,type:Boolean},dir:{default:Pt.dir,validator(n){return["rtl","ltr"].includes(n)}},i18n:{default:Pt.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ag({config:n,slidesCount:e}){const{snapAlign:t,wrapAround:i,itemsToShow:s=1}=n;if(i)return Math.max(e-1,0);let r;switch(t){case"start":r=e-s;break;case"end":r=e-1;break;case"center":case"center-odd":r=e-Math.ceil((s-.5)/2);break;case"center-even":r=e-Math.ceil(s/2);break;default:r=0;break}return Math.max(r,0)}function wg({config:n,slidesCount:e}){const{wrapAround:t,snapAlign:i,itemsToShow:s=1}=n;let r=0;if(t||s>e)return r;switch(i){case"start":r=0;break;case"end":r=s-1;break;case"center":case"center-odd":r=Math.floor((s-1)/2);break;case"center-even":r=Math.floor((s-2)/2);break;default:r=0;break}return r}function El({val:n,max:e,min:t}){return e<t?n:Math.min(Math.max(n,t),e)}function Cg({config:n,currentSlide:e,slidesCount:t}){const{snapAlign:i,wrapAround:s,itemsToShow:r=1}=n;let a=e;switch(i){case"center":case"center-odd":a-=(r-1)/2;break;case"center-even":a-=(r-2)/2;break;case"end":a-=r-1;break}return s?a:El({val:a,max:t-r,min:0})}function Th(n){return n?n.reduce((e,t)=>{var i;return t.type===ut?[...e,...Th(t.children)]:((i=t.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...e,t]:e},[]):[]}function Da({val:n,max:e,min:t=0}){return n>e?Da({val:n-(e+1),max:e,min:t}):n<t?Da({val:n+(e+1),max:e,min:t}):n}function Rg(n,e){let t;return e?function(...i){const s=this;t||(n.apply(s,i),t=!0,setTimeout(()=>t=!1,e))}:n}function Pg(n,e){let t;return function(...i){t&&clearTimeout(t),t=setTimeout(()=>{n(...i),t=null},e)}}function Ah(n="",e={}){return Object.entries(e).reduce((t,[i,s])=>t.replace(`{${i}}`,String(s)),n)}var Lg=Xe({name:"ARIA",setup(){const n=vt("config",jt(Object.assign({},Pt))),e=vt("currentSlide",ge(0)),t=vt("slidesCount",ge(0));return()=>Gt("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Ah(n.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:t.value}))}}),Dg=Xe({name:"Carousel",props:_u,setup(n,{slots:e,emit:t,expose:i}){var s;const r=ge(null),a=ge([]),o=ge(0),l=ge(0),c=jt(Object.assign({},Pt));let u=Object.assign({},Pt),f;const d=ge((s=n.modelValue)!==null&&s!==void 0?s:0),p=ge(0),_=ge(0),g=ge(0),m=ge(0);let h,w;En("config",c),En("slidesCount",l),En("currentSlide",d),En("maxSlide",g),En("minSlide",m),En("slideWidth",o);function y(){f=Object.assign({},n.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),n),{i18n:Object.assign(Object.assign({},u.i18n),n.i18n),breakpoints:void 0}),C(u)}function b(){if(!f||!Object.keys(f).length)return;const R=Object.keys(f).map(W=>Number(W)).sort((W,ie)=>+ie-+W);let V=Object.assign({},u);R.some(W=>{const ie=window.matchMedia(`(min-width: ${W}px)`).matches;return ie&&(V=Object.assign(Object.assign({},V),f[W])),ie}),C(V)}function C(R){Object.entries(R).forEach(([V,W])=>c[V]=W)}const F=Pg(()=>{b(),L()},16);function L(){if(!r.value)return;const R=r.value.getBoundingClientRect();o.value=R.width/c.itemsToShow}function H(){l.value<=0||(_.value=Math.ceil((l.value-1)/2),g.value=Ag({config:c,slidesCount:l.value}),m.value=wg({config:c,slidesCount:l.value}),c.wrapAround||(d.value=El({val:d.value,max:g.value,min:m.value})))}Fi(()=>{Zs(()=>L()),setTimeout(()=>L(),1e3),b(),de(),window.addEventListener("resize",F,{passive:!0}),t("init")}),tc(()=>{w&&clearTimeout(w),h&&clearInterval(h),window.removeEventListener("resize",F,{passive:!0})});let S=!1;const T={x:0,y:0},J={x:0,y:0},$=jt({x:0,y:0}),oe=ge(!1),D=ge(!1),q=()=>{oe.value=!0},z=()=>{oe.value=!1};function X(R){["INPUT","TEXTAREA","SELECT"].includes(R.target.tagName)||(S=R.type==="touchstart",S||R.preventDefault(),!(!S&&R.button!==0||Z.value)&&(T.x=S?R.touches[0].clientX:R.clientX,T.y=S?R.touches[0].clientY:R.clientY,document.addEventListener(S?"touchmove":"mousemove",re,!0),document.addEventListener(S?"touchend":"mouseup",le,!0)))}const re=Rg(R=>{D.value=!0,J.x=S?R.touches[0].clientX:R.clientX,J.y=S?R.touches[0].clientY:R.clientY;const V=J.x-T.x,W=J.y-T.y;$.y=W,$.x=V},c.throttle);function le(){const R=c.dir==="rtl"?-1:1,V=Math.sign($.x)*.4,W=Math.round($.x/o.value+V)*R;if(W&&!S){const ie=me=>{me.stopPropagation(),window.removeEventListener("click",ie,!0)};window.addEventListener("click",ie,!0)}xe(d.value-W),$.x=0,$.y=0,D.value=!1,document.removeEventListener(S?"touchmove":"mousemove",re,!0),document.removeEventListener(S?"touchend":"mouseup",le,!0)}function de(){!c.autoplay||c.autoplay<=0||(h=setInterval(()=>{c.pauseAutoplayOnHover&&oe.value||Se()},c.autoplay))}function G(){h&&(clearInterval(h),h=null),de()}const Z=ge(!1);function xe(R){const V=c.wrapAround?R:El({val:R,max:g.value,min:m.value});d.value===V||Z.value||(t("slide-start",{slidingToIndex:R,currentSlideIndex:d.value,prevSlideIndex:p.value,slidesCount:l.value}),Z.value=!0,p.value=d.value,d.value=V,w=setTimeout(()=>{if(c.wrapAround){const W=Da({val:V,max:g.value,min:0});W!==d.value&&(d.value=W,t("loop",{currentSlideIndex:d.value,slidingToIndex:R}))}t("update:modelValue",d.value),t("slide-end",{currentSlideIndex:d.value,prevSlideIndex:p.value,slidesCount:l.value}),Z.value=!1,G()},c.transition))}function Se(){xe(d.value+c.itemsToScroll)}function ye(){xe(d.value-c.itemsToScroll)}const Le={slideTo:xe,next:Se,prev:ye};En("nav",Le),En("isSliding",Z);const $e=Lt(()=>Cg({config:c,currentSlide:d.value,slidesCount:l.value}));En("slidesToScroll",$e);const Ne=Lt(()=>{const R=c.dir==="rtl"?-1:1,V=$e.value*o.value*R;return{transform:`translateX(${$.x-V}px)`,transition:`${Z.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${l.value*o.value}px`:"",width:"100%"}});function Oe(){y(),b(),H(),L(),G()}Object.keys(_u).forEach(R=>{["modelValue"].includes(R)||Et(()=>n[R],Oe)}),Et(()=>n.modelValue,R=>{R!==d.value&&xe(Number(R))}),Et(l,H),t("before-init"),y();const Fe={config:c,slidesCount:l,slideWidth:o,next:Se,prev:ye,slideTo:xe,currentSlide:d,maxSlide:g,minSlide:m,middleSlide:_};i({updateBreakpointsConfigs:b,updateSlidesData:H,updateSlideWidth:L,initDefaultConfigs:y,restartCarousel:Oe,slideTo:xe,next:Se,prev:ye,nav:Le,data:Fe});const Ce=e.default||e.slides,x=e.addons,k=jt(Fe);return()=>{const R=Th(Ce==null?void 0:Ce(k)),V=(x==null?void 0:x(k))||[];R.forEach((ae,_e)=>ae.props.index=_e);let W=R;if(c.wrapAround){const ae=R.map((fe,Te)=>jn(fe,{index:-R.length+Te,isClone:!0,key:`clone-before-${Te}`})),_e=R.map((fe,Te)=>jn(fe,{index:R.length+Te,isClone:!0,key:`clone-after-${Te}`}));W=[...ae,...R,..._e]}a.value=R,l.value=Math.max(R.length,1);const ie=Gt("ol",{class:"carousel__track",style:Ne.value,onMousedownCapture:c.mouseDrag?X:null,onTouchstartPassiveCapture:c.touchDrag?X:null},W),me=Gt("div",{class:"carousel__viewport"},ie);return Gt("section",{ref:r,class:{carousel:!0,"is-sliding":Z.value,"is-dragging":D.value,"is-hover":oe.value,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":c.i18n.ariaGallery,tabindex:"0",onMouseenter:q,onMouseleave:z},[me,V,Gt(Lg)])}}}),bl;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(bl||(bl={}));const Ig={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function Ug(n){return n in bl}const Tl=n=>{const e=vt("config",jt(Object.assign({},Pt))),t=String(n.name),i=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!Ug(t))return;const s=Ig[t],r=Gt("path",{d:s}),a=e.i18n[i]||n.title||t,o=Gt("title",a);return Gt("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":a},[o,r])};Tl.props={name:String,title:String};const Fg=(n,{slots:e,attrs:t})=>{const{next:i,prev:s}=e||{},r=vt("config",jt(Object.assign({},Pt))),a=vt("maxSlide",ge(1)),o=vt("minSlide",ge(1)),l=vt("currentSlide",ge(1)),c=vt("nav",{}),{dir:u,wrapAround:f,i18n:d}=r,p=u==="rtl",_=Gt("button",{type:"button",class:["carousel__prev",!f&&l.value<=o.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":d.ariaPreviousSlide,onClick:c.prev},(s==null?void 0:s())||Gt(Tl,{name:p?"arrowRight":"arrowLeft"})),g=Gt("button",{type:"button",class:["carousel__next",!f&&l.value>=a.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":d.ariaNextSlide,onClick:c.next},(i==null?void 0:i())||Gt(Tl,{name:p?"arrowLeft":"arrowRight"}));return[_,g]},kg=()=>{const n=vt("config",jt(Object.assign({},Pt))),e=vt("maxSlide",ge(1)),t=vt("minSlide",ge(1)),i=vt("currentSlide",ge(1)),s=vt("nav",{}),r=o=>Da({val:i.value,max:e.value,min:0})===o,a=[];for(let o=t.value;o<e.value+1;o++){const l=Gt("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(o)},"aria-label":Ah(n.i18n.ariaNavigateToSlide,{slideNumber:o+1}),onClick:()=>s.slideTo(o)}),c=Gt("li",{class:"carousel__pagination-item",key:o},l);a.push(c)}return Gt("ol",{class:"carousel__pagination"},a)};var Ng=Xe({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(n,{slots:e}){const t=vt("config",jt(Object.assign({},Pt))),i=vt("currentSlide",ge(0)),s=vt("slidesToScroll",ge(0)),r=vt("isSliding",ge(!1)),a=()=>n.index===i.value,o=()=>n.index===i.value-1,l=()=>n.index===i.value+1,c=()=>{const u=Math.floor(s.value),f=Math.ceil(s.value+t.itemsToShow-1);return n.index>=u&&n.index<=f};return()=>{var u;return Gt("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":c(),"carousel__slide--active":a(),"carousel__slide--prev":o(),"carousel__slide--next":l(),"carousel__slide--sliding":r.value},"aria-hidden":!c()},(u=e.default)===null||u===void 0?void 0:u.call(e))}}});const Og=[{cha_id:1,name:"Ace",class:"Samurai",faceGraphicUrl:"img/character/chara1face.png",poseGraphicUrl:"img/character/chara1.png",backgroundUrl:"img/character/chara1back.jpg",LV:10,exp:50,nextLvExp:100,HP:220,MP:80,ATK:70,MGC:30,DEF:50,MDF:40,DEX:60,SPD:50,Slash:10,Hit:10,Stab:0,Fire:10,Water:0,Earth:10,Wind:0,Light:0,Dark:0,equipment:{WEP:103,ARM:1003,ACC:2001},activeSkill:[101,102,103,104,105,106],passiveCost:40,passiveSkill:[1,2,3,4],equipSkill:[1,3]},{cha_id:2,name:"Sophia",class:"Holy Knight",faceGraphicUrl:"img/character/chara2face.png",poseGraphicUrl:"img/character/chara2.png",backgroundUrl:"img/character/chara2back.jpg",LV:10,exp:50,nextLvExp:1e3,HP:250,MP:100,ATK:50,MGC:40,DEF:60,MDF:60,DEX:50,SPD:50,Slash:10,Hit:10,Stab:10,Fire:0,Water:0,Earth:10,Wind:0,Light:10,Dark:0,equipment:{WEP:101,ARM:1002,ACC:2101},activeSkill:[201,202,203,204,205],passiveCost:40,passiveSkill:[2,3,4,5],equipSkill:[2,5]},{cha_id:3,name:"Miroku",class:"Priest",faceGraphicUrl:"img/character/chara3face.png",poseGraphicUrl:"img/character/chara3.png",backgroundUrl:"img/character/chara3back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:200,MP:150,ATK:40,MGC:60,DEF:40,MDF:60,DEX:40,SPD:40,Slash:0,Hit:0,Stab:0,Fire:0,Water:10,Earth:0,Wind:0,Light:10,Dark:0,equipment:{WEP:501,ARM:1201,ACC:2201},activeSkill:[301,302,303,304,305],passiveCost:40,passiveSkill:[5,6,7,8],equipSkill:[5,7]},{cha_id:4,name:"Diana",class:"Archer",faceGraphicUrl:"img/character/chara4face.png",poseGraphicUrl:"img/character/chara4.png",backgroundUrl:"img/character/chara4back.jpg",LV:10,exp:500,nextLvExp:1e3,HP:180,MP:150,ATK:60,MGC:30,DEF:40,MDF:40,DEX:60,SPD:60,Slash:0,Hit:0,Stab:10,Fire:0,Water:0,Earth:0,Wind:10,Light:0,Dark:10,equipment:{WEP:401,ARM:1301,ACC:2001},activeSkill:[401,402,403,404,405],passiveCost:40,passiveSkill:[4,7,8,9],equipSkill:[4,9]},{cha_id:5,name:"Perseus",class:"Warrior",faceGraphicUrl:"img/character/chara5face.png",poseGraphicUrl:"img/character/chara5.png",backgroundUrl:"img/character/chara5back.jpg",LV:10,exp:50,nextLvExp:1e3,HP:250,MP:50,ATK:65,MGC:20,DEF:55,MDF:40,DEX:40,SPD:30,Slash:10,Hit:10,Stab:10,Fire:0,Water:0,Earth:20,Wind:0,Light:10,Dark:0,equipment:{WEP:601,ARM:1001,ACC:2101},activeSkill:[501,502,503,504,505,506],passiveCost:40,passiveSkill:[1,2,3,4],equipSkill:[1,4]},{cha_id:6,name:"Nyx",class:"Witch",faceGraphicUrl:"img/character/chara6face.png",poseGraphicUrl:"img/character/chara6.png",backgroundUrl:"img/character/chara6back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:150,MP:200,ATK:30,MGC:80,DEF:30,MDF:70,DEX:40,SPD:40,Slash:0,Hit:0,Stab:0,Fire:20,Water:0,Earth:0,Wind:20,Light:0,Dark:10,equipment:{WEP:502,ARM:1201,ACC:2301},activeSkill:[601,602,603,604,605],passiveCost:40,passiveSkill:[9,10,11,12],equipSkill:[8,9]},{cha_id:7,name:"Raven",class:"Assassin",faceGraphicUrl:"img/character/chara7face.png",poseGraphicUrl:"img/character/chara7.png",backgroundUrl:"img/character/chara7back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:180,MP:80,ATK:70,MGC:30,DEF:40,MDF:40,DEX:80,SPD:80,Slash:20,Hit:20,Stab:20,Fire:0,Water:0,Earth:0,Wind:0,Light:0,Dark:20,equipment:{WEP:201,ARM:1301,ACC:2001},activeSkill:[701,702,703,704,705,706],passiveCost:40,passiveSkill:[13,14,15,16],equipSkill:[10,11]}],Bg=[{skill_id:1,name:"Master Of Swords",info:"When equipped with a sword, physical attack power and accuracy increase.",skill_cost:10,condition:{equipment:"WEP",kind:"sword"},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:20,target:1},{effect_type:1,effect_target:"DEX",effect_amount:10,target:1}]},{skill_id:2,name:"Body Of Steel",info:"When HP is below 50%, physical defense and magic defense increase.",skill_cost:15,condition:{character:"nowHP",under:.5},effect_number:2,skill_effect:[{effect_type:1,effect_target:"DEF",effect_amount:30,target:1},{effect_type:1,effect_target:"MDF",effect_amount:30,target:1}]},{skill_id:3,name:"Flame Blade",info:"Deals additional fire damage when attacking.",skill_cost:20,condition:{attack:.3},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:50,target:4}]},{skill_id:4,name:"Fighting Spirit",info:"When HP is below 20%, attack power and speed increase.",skill_cost:25,condition:{character:"nowHP",under:.2},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:50,target:1},{effect_type:1,effect_target:"SPD",effect_amount:50,target:1}]},{skill_id:5,name:"Ready To Counterattack",info:"被ダメージ時に確率で反撃する",skill_cost:30,condition:{counter:.3},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:100,target:4}]},{skill_id:6,name:"Divine Protection",info:"常にHPが少しずつ回復する",skill_cost:10,condition:[],effect_number:1,skill_effect:[{effect_type:9,effect_target:"HP",effect_amount:10,target:1}]},{skill_id:7,name:"God's Wrath",info:"HPが50%以下の時、聖属性の追加ダメージを与える",skill_cost:100,condition:{character:"nowHP",under:.5},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:50,target:4}]},{skill_id:8,name:"God's Mercy",info:"HPが10%以下の時、完全回復する",skill_cost:20,condition:{character:"nowHP",under:.1},effect_number:1,skill_effect:[{effect_type:9,effect_target:"HP",effect_amount:0,target:1}]},{skill_id:9,name:"Power Of God",info:"2ターンの間、自分の攻撃力と防御力を上げる",skill_cost:25,condition:{underturns:2},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:30,target:1},{effect_type:1,effect_target:"DEF",effect_amount:30,target:1}]}];class wh{constructor(e){Pe(this,"skill_id");Pe(this,"name");Pe(this,"info");Pe(this,"skill_cost");Pe(this,"condition");Pe(this,"effect_number");Pe(this,"skill_effect");Pe(this,"equip");this.skill_id=e.skill_id,this.name=e.name,this.info=e.info,this.skill_cost=e.skill_cost,this.condition=e.condition,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect,this.equip=!1}}const Ch=Bg.map(n=>new wh(n)),Hg=[{eqp_id:101,type:"WEP",kind:"Sword",attribute:1,name:"Sword",status:{ATK:10,HitRate:90}},{eqp_id:102,type:"WEP",kind:"Sword",attribute:1,name:"LongSword",status:{ATK:15,HitRate:90}},{eqp_id:103,type:"WEP",kind:"Sword",attribute:1,name:"Katana",status:{ATK:12,DEX:3,HitRate:90}},{eqp_id:110,type:"WEP",kind:"Sword",attribute:1,name:"x-Cariver",status:{ATK:100,HitRate:90,Earth:50}},{eqp_id:201,type:"WEP",kind:"Dagger",attribute:1,name:"Dagger",status:{ATK:5,DEX:5,HitRate:95}},{eqp_id:301,type:"WEP",kind:"Spear",attribute:1,name:"Spear",status:{ATK:12,HitRate:90}},{eqp_id:401,type:"WEP",kind:"Bow",attribute:3,name:"Bow",status:{ATK:5,DEX:5,HitRate:90}},{eqp_id:402,type:"WEP",kind:"Bow",attribute:7,name:"Artemis",status:{ATK:50,DEX:50,HitRate:100,Wind:50}},{eqp_id:501,type:"WEP",kind:"Wand",attribute:2,name:"Staff",status:{ATK:5,MGC:5,HitRate:85}},{eqp_id:502,type:"WEP",kind:"Wand",attribute:2,name:"Wand",status:{MGC:10,HitRate:85}},{eqp_id:510,type:"WEP",kind:"Wand",attribute:2,name:"WaWaWand",status:{MGC:100,HitRate:85,Dark:50}},{eqp_id:601,type:"WEP",kind:"Axe",attribute:1,name:"Axe",status:{ATK:15,HitRate:80}},{eqp_id:1001,type:"ARM",kind:"Armor",attribute:0,name:"Armor",status:{DEF:5,MDF:5,SPD:-5}},{eqp_id:1002,type:"ARM",kind:"Armor",attribute:0,name:"Plate Armor",status:{DEF:10,MDF:5,SPD:-10}},{eqp_id:1003,type:"ARM",kind:"Armor",attribute:0,name:"Leather Armor",status:{DEF:5,MDF:5}},{eqp_id:1020,type:"ARM",kind:"Armor",attribute:0,name:"12Armor",status:{DEF:50,MDF:50,Slash:20,Hit:20,Stab:20}},{eqp_id:1101,type:"ARM",kind:"Shield",attribute:0,name:"Shield",status:{DEF:7,MDF:3}},{eqp_id:1110,type:"ARM",kind:"Shield",attribute:0,name:"TRXShield",status:{DEF:70,MDF:30,Earth:50}},{eqp_id:1201,type:"ARM",kind:"Robe",attribute:0,name:"Robe",status:{DEF:3,MDF:7}},{eqp_id:1210,type:"ARM",kind:"Robe",attribute:8,name:"EngelRobe",status:{DEF:40,MDF:60,Light:100}},{eqp_id:1301,type:"ARM",kind:"Cloth",attribute:0,name:"Cloth",status:{DEF:4,MDF:4}},{eqp_id:1321,type:"ARM",kind:"Cloth",attribute:9,name:"NinjaSuits",status:{DEF:30,MDF:30,DEX:30,SPD:10,Dark:50}},{eqp_id:2001,type:"ACC",kind:"Bangle",attribute:0,name:"Bangle",status:{ATK:5}},{eqp_id:2101,type:"ACC",kind:"Ring",attribute:0,name:"Ring",status:{DEF:5}},{eqp_id:2151,type:"ACC",kind:"Ring",attribute:9,name:"DevilRing",status:{ATK:50,MDF:-50,Dark:100}},{eqp_id:2201,type:"ACC",kind:"Neckless",attribute:0,name:"Neckless",status:{MDF:5}},{eqp_id:2301,type:"ACC",kind:"Amulet",attribute:0,name:"Amulet",status:{MGC:5}},{eqp_id:2451,type:"ACC",kind:"Belt",attribute:0,name:"RiderBelt",status:{HP:100,MP:50,ATK:30,MGC:10,DEF:30,MDF:30,DEX:30,SPD:10,Fire:30,Water:30,Earth:30,Wind:30}},{eqp_id:2551,type:"ACC",kind:"cape",attribute:8,name:"HolyBless",status:{MP:100,MGC:50,DEF:20,MDF:50,Light:100}}];class zg{constructor(e){Pe(this,"eqp_id");Pe(this,"type");Pe(this,"kind");Pe(this,"attribute");Pe(this,"name");Pe(this,"status");this.eqp_id=e.eqp_id,this.type=e.type,this.kind=e.kind,this.attribute=e.attribute,this.name=e.name,this.status=e.status}}const vr=Hg.map(n=>new zg(n)),Gg=[{skill_id:101,name:"Zan",use:1,info:"A basic sword attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/zan.gif",anime_time:700}]},{skill_id:102,name:"Suienzan",use:1,info:"A swift sword attack that deals physical damage to one enemy.",attribute:5,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:2,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/suienzan.gif",anime_time:1050}]},{skill_id:103,name:"Kishouzan",use:1,info:"A sword attack that deals physical damage to one enemy and heals the user.",attribute:9,interval:3,consume_type:"HP",consume_amount:10,effect_number:2,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/kishouzan1.gif",anime_time:480},{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"myself",skill_anime:"effect/skill/samurai/kishouzan2.gif",anime_time:700}]},{skill_id:104,name:"Oukazan",use:1,info:"A powerful sword attack that deals physical damage to one enemies.",attribute:1,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",success_rate:1,effect_amount:1.3,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/oukazan.gif",anime_time:1200}]},{skill_id:105,name:"Hienzan",use:1,info:"A powerful sword attack that deals physical damage to one row of enemies.",attribute:4,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/samurai/hienzan.gif",anime_time:1e3}]},{skill_id:106,name:"Ryuuhasuizan",use:1,info:"A element sword attack that deals water damage to all enemies.",attribute:5,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"allEnemy",skill_anime:"effect/skill/samurai/ryuuhasuizan.gif",anime_time:1500}]},{skill_id:201,name:"Holy Strike",use:1,info:"A holy sword attack that deals light damage to one enemy and reduces their dark resistance.",attribute:8,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.4,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/holyknight/holy_strike.gif",anime_time:930}]},{skill_id:202,name:"Heal",use:0,info:"A healing spell that restores HP to one ally.",attribute:10,interval:1,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1,target:1,target_type:"oneFriend",skill_anime:"effect/skill/holyknight/heal.gif",anime_time:740}]},{skill_id:203,name:"Holy Shield",use:1,info:"A protective spell that increases the physical and magical defense of one ally for a few turns.",attribute:8,interval:2,consume_type:"MP",consume_amount:15,effect_number:2,skill_effect:[{effect_type:"buff",effect_kind:"DEF",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"effect/skill/holyknight/holy_shield.gif",anime_time:750},{effect_type:"buff",effect_kind:"MDF",effect_times:3,base_status:"MGC",effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"",anime_time:0}]},{skill_id:204,name:"Holy Light",use:1,info:"A radiant spell that deals light damage to all enemies and heals all allies.",attribute:8,interval:3,consume_type:"MP",consume_amount:20,effect_number:2,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1,target:2,target_type:"allEnemy",skill_anime:"effect/skill/holyknight/holy_light.gif",anime_time:1040},{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"allFriends",skill_anime:"",anime_time:0}]},{skill_id:205,name:"Divine Judgment",use:1,info:"A supreme spell that deals massive light damage to one enemy and has a chance to inflict instant death.",attribute:8,interval:4,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:2.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/holyknight/divine_judgment.gif",anime_time:1680}]},{skill_id:301,name:"Pray",use:0,info:"A simple prayer that restores a small amount of MP to the user.",attribute:10,interval:1,consume_type:"HP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowMP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.2,target:1,target_type:"myself",skill_anime:"effect/skill/priest/pray.gif",anime_time:980}]},{skill_id:302,name:"Cure",use:0,info:"A healing spell that restores HP to one ally and removes one negative status effect.",attribute:10,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.8,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/cure.gif",anime_time:1050}]},{skill_id:303,name:"Bless",use:1,info:"A holy spell that increases the ATK of one ally for a few turns.",attribute:8,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"buff",effect_kind:"ATK",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/bless.gif",anime_time:1040}]},{skill_id:304,name:"Regen",use:1,info:"A healing spell that restores HP to all allies gradually for a few turns.",attribute:10,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"condition",effect_kind:"regeneration",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:.3,target:1,target_type:"allFriends",skill_anime:"effect/skill/priest/regen.gif",anime_time:2080}]},{skill_id:305,name:"Resurrect",use:0,info:"A miracle spell that revives one fallen ally with some HP.",attribute:10,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"revive",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/resurrect.gif",anime_time:1470}]},{skill_id:401,name:"Arrow Shot",use:1,info:"A basic bow attack that deals physical damage to one enemy.",attribute:0,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/arrow_shot.gif",anime_time:480}]},{skill_id:402,name:"Multi Shot",use:1,info:"A bow attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:4,base_status:"ATK",success_rate:1,effect_amount:.8,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/archar/multi_shot.gif",anime_time:1600}]},{skill_id:403,name:"Piercing Shot",use:1,info:"A bow attack that deals physical damage to one column of enemies and ignores their defense.",attribute:0,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"columnEnemy",skill_anime:"effect/skill/archar/piercing_shot.gif",anime_time:880}]},{skill_id:404,name:"Poison Shot",use:1,info:"A bow attack that deals physical damage to one enemy and has a chance to inflict poison status for a few turns.",attribute:0,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/poison_shot.gif",anime_time:720}]},{skill_id:405,name:"Explosive Shot",use:1,info:"A bow attack that deals fire damage to one enemy and causes an explosion that damages nearby enemies.",attribute:4,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:2.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/explosive_shot.gif",anime_time:1400}]},{skill_id:501,name:"Wild Strike",use:1,info:"A strike attack with a weapon that deals physical damage to one enemy.",attribute:2,interval:1.5,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/wild_strike.gif",anime_time:500}]},{skill_id:502,name:"Heavy Strike",use:1,info:"A strike attack with a weapon that deals physical damage to one enemy and stun target.",attribute:2,interval:1.5,consume_type:"MP",consume_amount:8,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/heavy_strike.gif",anime_time:500}]},{skill_id:503,name:"Double Slash",use:1,info:"A swift sword attack that deals physical damage to one enemy twice.",attribute:1,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",success_rate:1,effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/double_slash.gif",anime_time:800}]},{skill_id:504,name:"Tornado Slash",use:1,info:"A fierce slash like a tornado that deals damage to row enemies.",attribute:1,interval:2.5,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/warrior/tornado_slash.gif",anime_time:900}]},{skill_id:505,name:"Explosive Strike",use:1,info:"A furious weapons blows attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:3,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:8,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/warrior/explosive_strike.gif",anime_time:1600}]},{skill_id:506,name:"Gale Road",use:1,info:"A attack that deals damage to all enemies.",attribute:5,interval:2.5,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.8,target:2,target_type:"allEnemy",skill_anime:"effect/skill/warrior/gale_road.gif",anime_time:1300}]},{skill_id:601,name:"Pillar Fire",use:1,info:"A magic fire attack that deals damage to one enemy.",attribute:4,interval:2,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/witch/PillarFire.gif",anime_time:1e3}]},{skill_id:602,name:"Windlash",use:1,info:"A magical wind blade that deals magical damage to one row of enemies.",attribute:7,interval:3,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.2,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/witch/Windlash.gif",anime_time:1e3}]},{skill_id:603,name:"Flame Tower",use:1,info:"A flame magic that deals damage to one column of enemies.",attribute:4,interval:2,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.5,target:2,target_type:"columnEnemy",skill_anime:"effect/skill/witch/FlameTower.gif",anime_time:1500}]},{skill_id:604,name:"Earthquake",use:1,info:"Raise the ground with magic and attack all enemiess.",attribute:6,interval:3,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.5,target:2,target_type:"allEnemy",skill_anime:"effect/skill/witch/Earthquake.gif",anime_time:2200}]},{skill_id:605,name:"Heaven's Roar",use:1,info:"Generates a dense thundercloud that attacks all enemies.",attribute:8,interval:4,consume_type:"MP",consume_amount:30,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:.7,target:2,target_type:"allEnemy",skill_anime:"effect/skill/witch/Heaven's Roar.gif",anime_time:3e3}]},{skill_id:701,name:"Cross Cut",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/cross_cut.gif",anime_time:600}]},{skill_id:702,name:"Dark Crescent",use:1,info:"A powerful sword flash that deals physical damage to one row of enemies.",attribute:10,interval:2,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"ATK",success_rate:1,effect_amount:.4,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/assassin/dark_crescent.gif",anime_time:1100}]},{skill_id:703,name:"Momentary Slash",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:2,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/momentary_slash.gif",anime_time:800}]},{skill_id:704,name:"Rapid Slash",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:5,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/rapid_slash.gif",anime_time:900}]},{skill_id:705,name:"Dark Cross",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:10,interval:1,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/dark_cross.gif",anime_time:800}]},{skill_id:706,name:"High Speed Slash",use:1,info:"A furious weapons blows attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:10,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/assassin/high_speed_slash.gif",anime_time:1600}]}];class Rh{constructor(e){Pe(this,"skill_id");Pe(this,"name");Pe(this,"use");Pe(this,"info");Pe(this,"attribute");Pe(this,"interval");Pe(this,"consume_type");Pe(this,"consume_amount");Pe(this,"effect_number");Pe(this,"skill_effect");this.skill_id=e.skill_id,this.name=e.name,this.use=e.use,this.info=e.info,this.attribute=e.attribute,this.interval=e.interval,this.consume_type=e.consume_type,this.consume_amount=e.consume_amount,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect}}const Ph=Gg.map(n=>new Rh(n));class on{constructor(e,t){Pe(this,"cha_id");Pe(this,"name");Pe(this,"class");Pe(this,"faceGraphicUrl");Pe(this,"poseGraphicUrl");Pe(this,"backgroundUrl");Pe(this,"LV");Pe(this,"exp");Pe(this,"nextLvExp");Pe(this,"baseStatus");Pe(this,"equipment");Pe(this,"totalStatus");Pe(this,"buffs",[]);Pe(this,"conditions",[]);Pe(this,"nowHP");Pe(this,"nowMP");Pe(this,"activeSkill");Pe(this,"passiveCost");Pe(this,"passiveSkill");this.cha_id=e.cha_id,this.name=e.name,this.class=e.class,this.faceGraphicUrl=e.faceGraphicUrl,this.poseGraphicUrl=e.poseGraphicUrl,this.backgroundUrl=e.backgroundUrl,this.LV=e.LV,this.exp=e.exp,this.nextLvExp=e.nextLvExp,this.baseStatus={HP:e.HP,MP:e.MP,ATK:e.ATK,MGC:e.MGC,DEF:e.DEF,MDF:e.MDF,DEX:e.DEX,SPD:e.SPD,HitRate:0,CritRate:0,Hate:1-t*.1,Slash:e.Slash,Stab:e.Stab,Hit:e.Hit,Fire:e.Fire,Water:e.Water,Earth:e.Earth,Wind:e.Wind,Light:e.Light,Dark:e.Dark},this.equipment={WEP:vr.find(i=>i.eqp_id===e.equipment.WEP)??null,ARM:vr.find(i=>i.eqp_id===e.equipment.ARM)??null,ACC:vr.find(i=>i.eqp_id===e.equipment.ACC)??null},this.totalStatus=this.calculateTotalStatus(),this.nowHP=this.totalStatus.HP,this.nowMP=this.totalStatus.MP,this.activeSkill=e.activeSkill.map(i=>Ph.find(s=>s.skill_id===i)),this.passiveCost=e.passiveCost,this.passiveSkill=e.passiveSkill.map(i=>{const s=Ch.find(a=>a.skill_id===i);let r;return s&&(r=new wh(s),r.equip=e.equipSkill.includes(i)),r}).filter(i=>i!==void 0)}changeEquipment(e,t){this.equipment[e]=t,this.totalStatus=this.calculateTotalStatus()}calculateTotalStatus(){let e={...this.baseStatus};for(let t in this.equipment){let i=this.equipment[t];if(i)for(let s in i.status)e[s]+=i.status[s]}e.HitRate=this.calculateHitRate(e.DEX),e.CritRate=Math.floor(e.DEX/8);for(let t of this.buffs.values())e[t.status]+=t.value;return e}calculateHitRate(e){var i,s;return((i=this.equipment.WEP)!=null&&i.status.HitRate?(s=this.equipment.WEP)==null?void 0:s.status.HitRate:M.initHitRate)+Math.floor(e/10)}updateHate(e){this.baseStatus.Hate=1-e*.1,this.totalStatus=this.calculateTotalStatus()}addBuff(e,t,i,s){const r=this.buffs.findIndex(a=>a.name===e&&a.status===t);r!==-1?(this.buffs[r].value=i,this.buffs[r].duration=s):this.buffs.push({name:e,status:t,value:i,duration:s})}removeBuff(e,t){this.buffs=this.buffs.filter(i=>!(i.name===e&&i.status===t))}updateBuffs(){this.buffs=this.buffs.map(e=>(e.duration--,e.duration<=0?null:e)).filter(e=>e!==null),this.totalStatus=this.calculateTotalStatus()}addCondition(e,t,i,s){const r=this.conditions.findIndex(a=>a.name===e&&a.status===t);r!==-1?(this.conditions[r].value=i,this.conditions[r].duration=s):this.conditions.push({name:e,status:t,value:i,duration:s})}removeCondition(e,t){this.conditions=this.conditions.filter(i=>!(i.name===e&&i.status===t))}updateConditions(){this.conditions=this.conditions.map(e=>(e.duration--,e.duration<=0?null:e)).filter(e=>e!==null)}}const lc=Og.map((n,e)=>new on(n,e)),Lh=n=>(On("data-v-194a8221"),n=n(),Bn(),n),Vg={key:0,class:"CharaCardUI"},Wg={class:"line1"},$g={class:"name"},qg={class:"leftItem"},Xg=Lh(()=>P("span",{class:"statuskinds"},"LV ",-1)),Yg={class:"line2"},jg=Lh(()=>P("span",{class:"statuskinds"},"CLASS",-1)),Kg={class:"leftItem"},Zg=Xe({__name:"CharaCard",props:{character:{type:on}},setup(n){return(e,t)=>n.character?(Q(),pe("div",Vg,[P("div",Wg,[P("span",$g,be(n.character.name),1),P("span",qg,[Xg,P("span",null,be(n.character.LV),1)])]),P("div",Yg,[jg,P("span",Kg,be(n.character.class),1)])])):We("",!0)}}),Dh=Ze(Zg,[["__scopeId","data-v-194a8221"]]),Jg={class:"progress-bar-hp"},Qg=["value","max"],e0={class:"nowHP"},t0=Xe({__name:"ProgressBarHp",props:{nowHP:{type:Number},maxHP:{type:Number}},setup(n){return(e,t)=>(Q(),pe("div",Jg,[P("progress",{class:"progress-hp",value:n.nowHP,max:n.maxHP},null,8,Qg),P("span",e0,be(n.nowHP)+"/"+be(n.maxHP),1)]))}}),no=Ze(t0,[["__scopeId","data-v-48f5d701"]]),n0={class:"progress-bar-mp"},i0=["value","max"],s0={class:"nowMP"},r0=Xe({__name:"ProgressBarMp",props:{nowMP:{type:Number},maxMP:{type:Number}},setup(n){return(e,t)=>(Q(),pe("div",n0,[P("progress",{class:"progress-mp",value:n.nowMP,max:n.maxMP},null,8,i0),P("span",s0,be(n.nowMP)+"/"+be(n.maxMP),1)]))}}),cc=Ze(r0,[["__scopeId","data-v-2ef7ebd3"]]),a0=n=>(On("data-v-75494c40"),n=n(),Bn(),n),o0=["value","max"],l0=a0(()=>P("span",{class:"next"},"NEXT",-1)),c0={class:"nextExp"},u0=Xe({__name:"ProgressBarExp",props:{exp:{type:Number},next:{type:Number}},setup(n){return(e,t)=>(Q(),pe(ut,null,[P("progress",{class:"progress-exp",value:n.exp,max:n.next},null,8,o0),l0,P("span",c0,be(n.next-n.exp),1)],64))}}),Ih=Ze(u0,[["__scopeId","data-v-75494c40"]]),Mn=n=>(On("data-v-cb774c9c"),n=n(),Bn(),n),f0={key:0,class:"CharaStatusUI"},d0={class:"hpline"},h0=Mn(()=>P("span",{class:"statuskinds"},"HP",-1)),p0={class:"progress-bar"},m0={class:"mpline"},_0=Mn(()=>P("span",{class:"statuskinds"},"MP",-1)),g0={class:"progress-bar"},v0={class:"expline"},M0=Mn(()=>P("span",{class:"statuskinds"},"EXP",-1)),x0={class:"progress-bar-exp"},S0={class:"atkline"},y0={class:"leftItem"},E0=Mn(()=>P("span",{class:"statuskinds"},"ATK",-1)),b0={class:"statusValue"},T0={class:"rightItem"},A0=Mn(()=>P("span",{class:"statuskinds"},"MGC",-1)),w0={class:"statusValue"},C0={class:"defline"},R0={class:"leftItem"},P0=Mn(()=>P("span",{class:"statuskinds"},"DEF",-1)),L0={class:"statusValue"},D0={class:"rightItem"},I0=Mn(()=>P("span",{class:"statuskinds"},"MDF",-1)),U0={class:"statusValue"},F0={class:"dexline"},k0={class:"leftItem"},N0=Mn(()=>P("span",{class:"statuskinds"},"DEX",-1)),O0={class:"statusValue"},B0={class:"rightItem"},H0=Mn(()=>P("span",{class:"statuskinds"},"SPD",-1)),z0={class:"statusValue"},G0={class:"wepline"},V0=Mn(()=>P("span",{class:"statuskinds"},"WEP",-1)),W0={class:"equipName"},$0={class:"armline"},q0=Mn(()=>P("span",{class:"statuskinds"},"ARM",-1)),X0={class:"equipName"},Y0={class:"accline"},j0=Mn(()=>P("span",{class:"statuskinds"},"ACC",-1)),K0={class:"equipName"},Z0={class:"passiveSkill"},J0=Mn(()=>P("div",{class:"statuskinds"},"PASSIVE SKILL",-1)),Q0={class:"skillList",density:"compact"},ev={key:0},tv=Xe({__name:"CharaStatus",props:{character:{type:on}},setup(n){return(e,t)=>{var i,s,r;return n.character?(Q(),pe("div",f0,[P("div",d0,[h0,P("span",p0,[De(no,{nowHP:n.character.nowHP,maxHP:n.character.totalStatus.HP},null,8,["nowHP","maxHP"])])]),P("div",m0,[_0,P("span",g0,[De(cc,{nowMP:n.character.nowMP,maxMP:n.character.totalStatus.MP},null,8,["nowMP","maxMP"])])]),P("div",v0,[M0,P("span",x0,[De(Ih,{exp:n.character.exp,next:n.character.nextLvExp},null,8,["exp","next"])])]),P("div",S0,[P("span",y0,[E0,P("span",b0,be(n.character.totalStatus.ATK),1)]),P("span",T0,[A0,P("span",w0,be(n.character.totalStatus.MGC),1)])]),P("div",C0,[P("span",R0,[P0,P("span",L0,be(n.character.totalStatus.DEF),1)]),P("span",D0,[I0,P("span",U0,be(n.character.totalStatus.MDF),1)])]),P("div",F0,[P("span",k0,[N0,P("span",O0,be(n.character.totalStatus.DEX),1)]),P("span",B0,[H0,P("span",z0,be(n.character.totalStatus.SPD),1)])]),P("div",G0,[V0,P("span",W0,be((i=n.character.equipment.WEP)==null?void 0:i.name),1)]),P("div",$0,[q0,P("span",X0,be((s=n.character.equipment.ARM)==null?void 0:s.name),1)]),P("div",Y0,[j0,P("span",K0,be((r=n.character.equipment.ACC)==null?void 0:r.name),1)]),P("div",Z0,[J0,P("ul",Q0,[(Q(!0),pe(ut,null,Vt(n.character.passiveSkill,a=>(Q(),pe("li",{key:a.skill_id,class:"skillItem"},[a.equip===!0?(Q(),pe("span",ev,be(a.name),1)):We("",!0)]))),128))])])])):We("",!0)}}}),nv=Ze(tv,[["__scopeId","data-v-cb774c9c"]]),iv="/app2/icon/slash.png",sv="/app2/icon/stab.png",rv="/app2/icon/hit.png",av="/app2/icon/fire.png",ov="/app2/icon/water.png",lv="/app2/icon/earth.png",cv="/app2/icon/wind.png",uv="/app2/icon/light.png",fv="/app2/icon/dark.png",dv=n=>(On("data-v-d1f1001b"),n=n(),Bn(),n),hv={key:0,class:"CharaStatusUI"},pv=dv(()=>P("div",{class:"statuskinds"},"RESISTANCE",-1)),mv={class:"slashline"},_v={class:"leftItem"},gv=["src"],vv={class:"elementValue"},Mv={class:"rightItem"},xv=["src"],Sv={class:"elementValue"},yv={class:"hitline"},Ev={class:"leftItem"},bv=["src"],Tv={class:"elementValue"},Av={class:"fireline"},wv={class:"leftItem"},Cv=["src"],Rv={class:"elementValue"},Pv={class:"rightItem"},Lv=["src"],Dv={class:"elementValue"},Iv={class:"earthline"},Uv={class:"leftItem"},Fv=["src"],kv={class:"elementValue"},Nv={class:"rightItem"},Ov=["src"],Bv={class:"elementValue"},Hv={class:"lightline"},zv={class:"leftItem"},Gv=["src"],Vv={class:"elementValue"},Wv={class:"rightItem"},$v=["src"],qv={class:"elementValue"},Xv=Xe({__name:"CharaSubStatus",props:{character:{type:on}},setup(n){return(e,t)=>n.character?(Q(),pe("div",hv,[pv,P("div",mv,[P("span",_v,[P("img",{class:"Icon",src:K(iv),alt:"Slash"},null,8,gv),P("span",vv,be(n.character.totalStatus.Slash),1)]),P("span",Mv,[P("img",{class:"Icon",src:K(sv),alt:"Water"},null,8,xv),P("span",Sv,be(n.character.totalStatus.Stab),1)])]),P("div",yv,[P("span",Ev,[P("img",{class:"Icon",src:K(rv),alt:"Hit"},null,8,bv),P("span",Tv,be(n.character.totalStatus.Hit),1)])]),P("div",Av,[P("span",wv,[P("img",{class:"Icon",src:K(av),alt:"Fire"},null,8,Cv),P("span",Rv,be(n.character.totalStatus.Fire),1)]),P("span",Pv,[P("img",{class:"Icon",src:K(ov),alt:"Water"},null,8,Lv),P("span",Dv,be(n.character.totalStatus.Water),1)])]),P("div",Iv,[P("span",Uv,[P("img",{class:"Icon",src:K(lv),alt:"Earth"},null,8,Fv),P("span",kv,be(n.character.totalStatus.Earth),1)]),P("span",Nv,[P("img",{class:"Icon",src:K(cv),alt:"Wind"},null,8,Ov),P("span",Bv,be(n.character.totalStatus.Wind),1)])]),P("div",Hv,[P("span",zv,[P("img",{class:"Icon",src:K(uv),alt:"Light"},null,8,Gv),P("span",Vv,be(n.character.totalStatus.Light),1)]),P("span",Wv,[P("img",{class:"Icon",src:K(fv),alt:"Dark"},null,8,$v),P("span",qv,be(n.character.totalStatus.Dark),1)])])])):We("",!0)}}),Yv=Ze(Xv,[["__scopeId","data-v-d1f1001b"]]),jv=[{eqpbag_id:1,eqp_id:103,type:"WEP",equippedBy:1},{eqpbag_id:2,eqp_id:1003,type:"ARM",equippedBy:1},{eqpbag_id:3,eqp_id:2001,type:"ACC",equippedBy:1},{eqpbag_id:4,eqp_id:101,type:"WEP",equippedBy:2},{eqpbag_id:5,eqp_id:1002,type:"ARM",equippedBy:2},{eqpbag_id:6,eqp_id:2101,type:"ACC",equippedBy:2},{eqpbag_id:7,eqp_id:501,type:"WEP",equippedBy:3},{eqpbag_id:8,eqp_id:1201,type:"ARM",equippedBy:3},{eqpbag_id:9,eqp_id:2201,type:"ACC",equippedBy:3},{eqpbag_id:10,eqp_id:401,type:"WEP",equippedBy:4},{eqpbag_id:11,eqp_id:1301,type:"ARM",equippedBy:4},{eqpbag_id:12,eqp_id:2001,type:"ACC",equippedBy:4},{eqpbag_id:13,eqp_id:601,type:"WEP",equippedBy:5},{eqpbag_id:14,eqp_id:1001,type:"ARM",equippedBy:5},{eqpbag_id:15,eqp_id:2101,type:"ACC",equippedBy:5},{eqpbag_id:16,eqp_id:502,type:"WEP",equippedBy:6},{eqpbag_id:17,eqp_id:1201,type:"ARM",equippedBy:6},{eqpbag_id:18,eqp_id:2301,type:"ACC",equippedBy:6},{eqpbag_id:19,eqp_id:201,type:"WEP",equippedBy:7},{eqpbag_id:20,eqp_id:1301,type:"ARM",equippedBy:7},{eqpbag_id:21,eqp_id:2001,type:"ACC",equippedBy:7},{eqpbag_id:22,eqp_id:102,type:"WEP",equippedBy:null},{eqpbag_id:23,eqp_id:110,type:"WEP",equippedBy:null},{eqpbag_id:24,eqp_id:301,type:"WEP",equippedBy:null},{eqpbag_id:25,eqp_id:402,type:"WEP",equippedBy:null},{eqpbag_id:26,eqp_id:510,type:"WEP",equippedBy:null},{eqpbag_id:27,eqp_id:1020,type:"ARM",equippedBy:null},{eqpbag_id:28,eqp_id:1101,type:"ARM",equippedBy:null},{eqpbag_id:29,eqp_id:1110,type:"ARM",equippedBy:null},{eqpbag_id:30,eqp_id:1210,type:"ARM",equippedBy:null},{eqpbag_id:31,eqp_id:1321,type:"ARM",equippedBy:null},{eqpbag_id:32,eqp_id:2151,type:"ACC",equippedBy:null},{eqpbag_id:33,eqp_id:2451,type:"ACC",equippedBy:null},{eqpbag_id:34,eqp_id:2551,type:"ACC",equippedBy:null}],Uh=ki("equipBag",{state:()=>({equipmentType:{},equipmentItem:{}}),actions:{setEquipBag(){for(let n of jv)this.addEquipment(n.eqpbag_id,n.eqp_id,n.type,n.equippedBy)},addEquipment(n,e,t,i){this.equipmentType[t]||(this.equipmentType[t]=[]);const s={eqpbag_id:n,eqp_id:e,type:t,equippedBy:i};this.equipmentType[t].push(s),this.equipmentItem[n]=s},removeEquipment(n){if(!this.equipmentItem[n])throw new Error(`装備 ${n} は存在しません。`);delete this.equipmentItem[n]},getEquipmentByType(n){return this.equipmentType[n]||[]},equipEquipment(n,e){const t=this.equipmentItem[n];if(!t)throw new Error(`装備 ${n} は存在しません。`);t.equippedBy=e,this.equipmentItem[n]=t},unequipOldEquipment(n,e){const t=this.equipmentType[n].find(i=>i.equippedBy===e);if(!t)throw new Error(`装備 ${n} ${e} は存在しません。`);t.equippedBy=null}}}),Fh=n=>(On("data-v-6e7e5a20"),n=n(),Bn(),n),Kv={key:0,class:"EquipmentUI"},Zv={class:"EquipmentTab"},Jv=["onClick"],Qv=Fh(()=>P("div",{class:"underLine"},null,-1)),eM={key:0},tM={class:"EquipmentTypeList",density:"compact"},nM=["onClick"],iM=["src"],sM={key:1,class:"faceFlame"},rM={class:"itemName"},aM={key:2,class:"buttonPosition"},oM=["onClick"],lM=Fh(()=>P("div",{class:"underLine"},null,-1)),cM={key:0,class:"equipment-status"},uM={class:"status-key"},fM={class:"status-value"},dM=Xe({__name:"Equipment",props:{character:{type:on}},setup(n){const e=n,t=Uh(),i=["WEP","ARM","ACC"],s=ge("WEP"),r=g=>{s.value=g,l.value=null,o.value=null},a=Lt(()=>{var g;return(g=e.character)==null?void 0:g.equipment[s.value]}),o=ge(null),l=ge(null),c=(g,m,h)=>{const w=vr.find(y=>y.eqp_id===g&&y.type===m);w&&(o.value=w,l.value=h)},u=g=>lc.find(m=>m.cha_id===g),f=g=>{const m=vr.find(h=>h.eqp_id===g);return m?m.name:null},d=g=>{var m;return((m=e.character)==null?void 0:m.cha_id)==g?"Unequip":"Equip"},p=Lt(()=>{var h;if(!o.value)return;const g={};let m;for(const w in o.value.status)m=o.value.status[w]-(((h=a.value)==null?void 0:h.status[w])||0),g[w]=m>0?"+"+String(m):String(m);return g}),_=(g,m)=>{var w,y,b;let h=e.character.cha_id;m===h?(t.equipEquipment(g,null),(w=e.character)==null||w.changeEquipment(s.value,null)):(a.value&&t.unequipOldEquipment(s.value,h),m!==null&&((y=u(m))==null||y.changeEquipment(s.value,null),console.log(u(m))),t.equipEquipment(g,h),(b=e.character)==null||b.changeEquipment(s.value,o.value)),console.log(t),console.log(e.character)};return(g,m)=>n.character?(Q(),pe("div",Kv,[P("ul",Zv,[(Q(),pe(ut,null,Vt(i,h=>P("li",{key:h,onClick:w=>r(h),class:Dt([{"selected-tab":h===s.value},"EquipmentTabItem"])},be(h),11,Jv)),64))]),Qv,s.value?(Q(),pe("div",eM,[P("ul",tM,[(Q(!0),pe(ut,null,Vt(K(t).equipmentType[s.value],h=>{var w;return Q(),pe("li",{key:h.eqpbag_id,onClick:y=>c(h.eqp_id,s.value,h.eqpbag_id),class:Dt(["EquipmentItem",{"selected-tab":o.value&&h.eqpbag_id===l.value}])},[h.equippedBy!==null?(Q(),pe("img",{key:0,class:"smallface",src:(w=u(h.equippedBy))==null?void 0:w.faceGraphicUrl,alt:"Character face"},null,8,iM)):(Q(),pe("span",sM)),P("span",rM,be(f(h.eqp_id)),1),o.value&&h.eqpbag_id===l.value?(Q(),pe("span",aM,[P("span",{class:Dt(["button-equip",{equip:n.character.cha_id!=h.equippedBy,unequip:n.character.cha_id==h.equippedBy}]),onClick:y=>_(h.eqpbag_id,h.equippedBy)},be(d(h.equippedBy)),11,oM)])):We("",!0)],10,nM)}),128))]),lM,o.value?(Q(),pe("div",cM,[p.value!==void 0?(Q(!0),pe(ut,{key:0},Vt(o.value.status,(h,w)=>(Q(),pe("div",{class:"status",key:w},[P("span",uM,be(w),1),P("span",fM,be(h),1),P("span",{class:Dt(["status-diff",{colorblue:Number(p.value[w])>=0,colorred:Number(p.value[w])<0}])},be(p.value[w]),3)]))),128)):We("",!0)])):We("",!0)])):We("",!0)])):We("",!0)}}),hM=Ze(dM,[["__scopeId","data-v-6e7e5a20"]]),pM={class:"skillInfo"},mM=Xe({__name:"SkillInfo",props:{skillInfo:{type:String}},setup(n){return(e,t)=>(Q(),pe("div",pM,be(n.skillInfo),1))}}),uc=Ze(mM,[["__scopeId","data-v-ad3c27c7"]]),_M={class:"information"},gM={class:"message"},vM=Xe({__name:"Information",props:{message:{type:String,default:null}},emits:["hideError"],setup(n,{emit:e}){const t=e;return(i,s)=>(Q(),pe("div",{class:"modal",onClick:s[0]||(s[0]=r=>t("hideError"))},[P("div",_M,[P("div",gM,be(n.message),1)])]))}}),fc=Ze(vM,[["__scopeId","data-v-fbb86de4"]]),dc=n=>(On("data-v-c1052c8f"),n=n(),Bn(),n),MM={key:0,class:"SkillUI"},xM={class:"skillSelect"},SM={class:"skillType"},yM={key:0},EM=["onClick"],bM=dc(()=>P("div",{class:"underLine"},null,-1)),TM={key:0},AM={class:"skillList",density:"compact"},wM=["onClick"],CM={key:0,class:"statuskinds"},RM={key:1,class:"marginEquip"},PM={class:"marginLeft05"},LM={class:"costValue"},DM={key:2,class:"buttonPosition"},IM=["onClick"],UM={class:"totalCost"},FM=dc(()=>P("span",{class:"statuskinds"},"TOTAL COST",-1)),kM={class:"costValue"},NM={class:"totalCost"},OM=dc(()=>P("span",{class:"statuskinds"},"SKILL COST CAP",-1)),BM={class:"costValue"},HM={key:1},zM={class:"skillList",density:"compact"},GM=["onClick"],VM={class:"marginLeft1"},WM={class:"costValue"},$M={class:"consumeType"},qM=Xe({__name:"Skill",props:{character:{type:on},processBattle:{type:Boolean}},emits:["useSkill"],setup(n,{emit:e}){const t=n,i=["PASSIVE","ACTIVE"],s=ge(!1),r=M.msgSkillCostError,a=ge(void 0);t.processBattle==!0?a.value="ACTIVE":a.value="PASSIVE";const o=h=>{a.value=h,l.value=null},l=ge(null),c=h=>{t.processBattle&&h instanceof Rh&&l.value==h&&_(h),l.value=h},u=h=>h?"Unequip":"Equip",f=ge(0),d=h=>{t.character&&(f.value=t.character.passiveSkill.filter(w=>w.equip).reduce((w,y)=>w+y.skill_cost,0),h.equip?h.equip=!1:Number(f.value)+h.skill_cost>t.character.passiveCost?s.value=!0:h.equip=!0)},p=e,_=h=>{p("useSkill",h)},g=()=>{s.value=!1},m=ge(void 0);return Et(()=>t.character,()=>{t.character!==m.value&&(l.value=null),m.value=t.character}),(h,w)=>n.character?(Q(),pe("div",MM,[P("div",xM,[P("ul",SM,[n.processBattle?(Q(),pe("li",yM,be("ACTIVE"),1)):(Q(),pe(ut,{key:1},Vt(i,y=>P("li",{key:y,onClick:b=>o(y),class:Dt({"selected-tab":y===a.value})},be(y),11,EM)),64))]),bM,a.value=="PASSIVE"?(Q(),pe("div",TM,[P("ul",AM,[(Q(!0),pe(ut,null,Vt(n.character.passiveSkill,y=>(Q(),pe("li",{key:y.skill_id,onClick:b=>c(y),class:Dt(["skillItem",{"selected-tab":y===l.value}])},[y.equip===!0?(Q(),pe("span",CM,"E")):(Q(),pe("span",RM)),P("span",PM,be(y.name),1),P("span",LM,be(y.skill_cost),1),y===l.value?(Q(),pe("span",DM,[P("span",{onClick:b=>d(y),class:Dt(["button-equip",{equip:y.equip==!1,unequip:y.equip==!0}])},be(u(y.equip)),11,IM)])):We("",!0)],10,wM))),128)),P("li",UM,[FM,P("span",kM,be(n.character.passiveSkill.filter(y=>y.equip).reduce((y,b)=>y+b.skill_cost,0)),1)]),P("li",NM,[OM,P("span",BM,be(n.character.passiveCost),1)])])])):We("",!0),Tt(De(fc,{message:K(r),onHideError:g},null,8,["message"]),[[At,s.value]]),a.value=="ACTIVE"?(Q(),pe("div",HM,[P("ul",zM,[(Q(!0),pe(ut,null,Vt(n.character.activeSkill,y=>(Q(),pe("li",{key:y.skill_id,onClick:b=>c(y),class:Dt(["skillItem",{"selected-tab":y===l.value}])},[P("span",VM,be(y.name),1),P("span",WM,be(y.consume_amount),1),P("span",$M,be(y.consume_type),1)],10,GM))),128))])])):We("",!0)]),l.value?(Q(),xt(uc,{key:0,class:"skillInfo",skillInfo:l.value.info},null,8,["skillInfo"])):We("",!0)])):We("",!0)}}),kh=Ze(qM,[["__scopeId","data-v-c1052c8f"]]),XM={key:0,class:"first"},YM={key:1,class:"second"},jM=Xe({__name:"SwitchBtn",props:{switchWord:{type:Array}},setup(n){const e=ge(!0),t=()=>{e.value=!e.value};return(i,s)=>(Q(),pe("div",{class:"outline",onClick:t},[e.value?(Q(),pe("span",XM,be(n.switchWord[0]),1)):(Q(),pe("span",YM,be(n.switchWord[1]),1))]))}}),gu=Ze(jM,[["__scopeId","data-v-187355c5"]]),KM="/app2/icon/arrow-left.png",ZM=["src"],JM=Xe({__name:"IconLeft",setup(n){return(e,t)=>(Q(),pe("img",{class:"Icon",src:K(KM),alt:"Left"},null,8,ZM))}}),QM=Ze(JM,[["__scopeId","data-v-18105755"]]),ex="/app2/icon/arrow-right.png",tx=["src"],nx=Xe({__name:"IconRight",setup(n){return(e,t)=>(Q(),pe("img",{class:"Icon",src:K(ex),alt:"Right"},null,8,tx))}}),ix=Ze(nx,[["__scopeId","data-v-ccc46121"]]),sx={class:"btnFlame"},rx=Xe({__name:"BlueBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(Q(),pe("div",sx,be(n.inside),1))}}),ax=Ze(rx,[["__scopeId","data-v-99a5fe5b"]]),ox={class:"btnFlame"},lx=Xe({__name:"RedBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(Q(),pe("div",ox,be(n.inside),1))}}),cx=Ze(lx,[["__scopeId","data-v-24ab0359"]]),ux={class:"modal"},fx={class:"confirmation"},dx={class:"message"},hx=Xe({__name:"Confirmation",props:{message:{type:String}},emits:["confirmationResponse"],setup(n,{emit:e}){const t=s=>{i("confirmationResponse",s)},i=e;return(s,r)=>(Q(),pe("div",ux,[P("div",fx,[P("div",dx,be(n.message),1),De(ax,{class:"YesBtn",inside:K(M).textYes,onClick:r[0]||(r[0]=a=>t(K(M).textYes))},null,8,["inside"]),De(cx,{class:"NoBtn",inside:K(M).textNo,onClick:r[1]||(r[1]=a=>t(K(M).textNo))},null,8,["inside"])])]))}}),hc=Ze(hx,[["__scopeId","data-v-46322d58"]]),en=(n,e)=>Math.floor(Math.random()*(e-n)+n),To=n=>Math.floor(Math.random()*n),mi=n=>new Promise(e=>setTimeout(e,n)),pt=Array(M.MapHeight).fill(M.MapWall).map(()=>Array(M.MapWidth).fill(M.MapWall)),dr=Array(M.MapHeight).fill(0).map(()=>Array(M.MapWidth).fill(0)),Ia={X:0,Y:0};function px(){let n=[],e=en(M.RoomCountMin,M.RoomCountMax),t=new Array(M.meetPointCount).fill(0),i=new Array(M.meetPointCount).fill(0);for(let s=0;s<t.length;s++)t[s]=en(M.MapWidth/4,M.MapWidth*3/4),i[s]=en(M.MapHeight/4,M.MapHeight*3/4),pt[i[s]][t[s]]=M.MapRoad;for(let s=0;s<e;s++){const r={Height:en(M.roomMinHeight,M.roomMaxHeight),Width:en(M.roomMinWidth,M.roomMaxWidth),PointX:en(2,M.MapWidth-M.roomMaxWidth-2),PointY:en(2,M.MapHeight-M.roomMaxHeight-2),Overlap:!1};r.Overlap=_x(r.Height,r.Width,r.PointX,r.PointY),n.push(r)}for(let s=0;s<e;s++)if(n[s].Overlap==!1){let r=en(n[s].PointX,n[s].PointX+n[s].Width),a=en(n[s].PointY,n[s].PointY+n[s].Height);s==0&&(Ia.X=r,Ia.Y=a),gx(r,a,t[en(0,t.length-1)],i[en(0,i.length-1)])}for(let s=0;s<pt.length;s++)for(let r=0;r<pt[s].length;r++)pt[s][r]==M.MapRoad&&mx(s,r)}function mx(n,e){si(n,e-1)&&si(n,e+1)&&(Sn(n-1,e)&&(Sn(n-1,e-1)||Sn(n-1,e+1))&&(dr[n][e]=M.SetDoorUp),Sn(n+1,e)&&(Sn(n+1,e-1)||Sn(n+1,e+1))&&(dr[n][e]=M.SetDoorUnder)),si(n-1,e)&&si(n+1,e)&&(Sn(n,e-1)&&(Sn(n-1,e-1)||Sn(n+1,e-1))&&(dr[n][e]=M.SetDoorLeft),Sn(n,e+1)&&(Sn(n-1,e+1)||Sn(n+1,e+1))&&(dr[n][e]=M.SetDoorRight))}function si(n,e){return n>=0&&n<pt.length&&e>=0&&e<pt[0].length&&pt[n][e]==M.MapWall}function Sn(n,e){return n>=0&&n<pt.length&&e>=0&&e<pt[0].length&&pt[n][e]==M.MapRoom}function _x(n,e,t,i){let s=!1;for(let r=0;r<n;r++)for(let a=0;a<e;a++)pt[i+r][t+a]==M.MapRoom?s=!0:pt[i+r][t+a]=M.MapRoom;return s}function gx(n,e,t,i){let s=n>t,r=e<=i;if(Math.floor(Math.random()*2)==0){for(;n!=t;)a(1);for(;e!=i;)a(2)}else{for(;e!=i;)a(2);for(;n!=t;)a(1)}function a(o){pt[e][n]==M.MapWall&&(pt[e][n]=M.MapRoad),o==1?n=s?n-1:n+1:e=r?e+1:e-1}}let Yr={characters:[1,5,6,3],gold:1e5,location:[570,180],home:[500,200]};const ui=ki("party",{state:()=>({characters:[],gold:Yr.gold,location:Yr.location,home:Yr.location,map:[]}),actions:{setParty(){this.characters=lc.filter(n=>Yr.characters.includes(n.cha_id)),this.map=pt}}}),fi=ki("showUI",{state:()=>({map:!0,current:!0,party:!1,character:!1,item:!1,message:!1,errorMessage:!1})}),vx=["src"],Mx=Xe({__name:"Character",props:{index:{type:Number},character:{type:on}},emits:["changeCharacter"],setup(n,{emit:e}){const t=Hn(),i=ui(),s=fi(),r=n,a=ge(0),o=ge(void 0),l=ge(!0),c=["MAIN","SUB"],u=()=>{l.value=!l.value},f=ge(!0),d=["EQUIP","SKILL"],p=()=>{f.value=!f.value},_=e,g=L=>{_("changeCharacter",L)};function m(){g("next")}function h(){g("back")}let w,y;function b(){if(t.guildMenu==M.menuAddMember){if(i.characters.length==4){y=M.msgAddPartyError,s.errorMessage=!0;return}w=M.msgAddParty1+o.value.name+M.msgAddParty2,s.message=!0}}const C=L=>{s.message=!1,L==M.textYes&&(i.characters.push(o.value),s.character=!1)},F=()=>{s.errorMessage=!1};return Et(()=>r.index,()=>{r.index&&(a.value=r.index)}),Et(()=>r.character,()=>{r.character&&(o.value=r.character)}),(L,H)=>o.value?(Q(),pe("div",{key:0,class:"CharacterUI",style:Ln({backgroundImage:"url("+o.value.backgroundUrl+")"})},[P("div",{class:"imageFlame",onClick:b},[P("img",{class:"charaimage",src:o.value.poseGraphicUrl,alt:""},null,8,vx)]),De(Dh,{class:"CharaCardUI",character:o.value},null,8,["character"]),l.value?(Q(),xt(nv,{key:0,class:"CharaStatusUI",character:o.value},null,8,["character"])):(Q(),xt(Yv,{key:1,class:"CharaSubStatusUI",character:o.value},null,8,["character"])),De(gu,{class:"ChangeStatus",onClick:u,switchWord:c}),f.value?(Q(),xt(hM,{key:2,class:"EquipmentUI",character:o.value},null,8,["character"])):(Q(),xt(kh,{key:3,class:"SkillUI",character:o.value},null,8,["character"])),De(gu,{class:"ChangeSkill",onClick:p,switchWord:d}),De(QM,{class:"IconCharaBack",onClick:h}),De(ix,{class:"IconCharaNext",onClick:m}),Tt(De(hc,{message:K(w),onConfirmationResponse:C},null,8,["message"]),[[At,K(s).message]]),Tt(De(fc,{message:K(y),onHideError:F},null,8,["message"]),[[At,K(s).errorMessage]])],4)):We("",!0)}}),Nh=Ze(Mx,[["__scopeId","data-v-c2eb9bca"]]),xx={class:"AddMember"},Sx=["onClick"],yx=["src"],Ex=Xe({__name:"AddMember",setup(n){const e=ui(),t=fi(),i=Lt(()=>lc.filter(l=>!e.characters.some(c=>c.cha_id===l.cha_id))),s=ge(void 0),r=ge(void 0);function a(l,c){s.value=l,r.value=c,t.character=!0}const o=l=>{l=="next"?(s.value=s.value==i.value.length-1?0:s.value+1,r.value=i.value[s.value]):(s.value=s.value==0?i.value.length-1:s.value-1,r.value=i.value[s.value])};return(l,c)=>(Q(),pe("div",xx,[Tt(De(K(Dg),{"items-to-show":3,"wrap-around":!0},{addons:pr(()=>[De(K(Fg)),De(K(kg))]),default:pr(()=>[(Q(!0),pe(ut,null,Vt(i.value,(u,f)=>(Q(),xt(K(Ng),{key:f},{default:pr(()=>[P("div",{class:"carousel__item",onClick:d=>a(f,u)},[De(Dh,{class:"CharaCardUI",character:u},null,8,["character"]),P("img",{class:"chara-image",src:u.poseGraphicUrl,alt:""},null,8,yx)],8,Sx)]),_:2},1024))),128))]),_:1},512),[[At,!K(t).character]]),Tt(De(Nh,{character:r.value,index:s.value,onChangeCharacter:o},null,8,["character","index"]),[[At,K(t).character]])]))}}),bx=Ze(Ex,[["__scopeId","data-v-0a4310ec"]]),wn=n=>(On("data-v-4202f880"),n=n(),Bn(),n),Tx={key:0,class:"StatusUI"},Ax={class:"nameline"},wx={class:"name"},Cx={class:"level"},Rx=wn(()=>P("span",{class:"statuskinds"},"LV ",-1)),Px={class:"hpline"},Lx=wn(()=>P("span",{class:"statuskinds"},"HP",-1)),Dx={class:"progress-bar"},Ix={class:"mpline"},Ux=wn(()=>P("span",{class:"statuskinds"},"MP",-1)),Fx={class:"progress-bar"},kx={class:"atkline"},Nx={class:"leftItem"},Ox=wn(()=>P("span",{class:"statuskinds"},"ATK",-1)),Bx={class:"itemValue"},Hx={class:"rightItem"},zx=wn(()=>P("span",{class:"statuskinds"},"MGC",-1)),Gx={class:"itemValue"},Vx={class:"defline"},Wx={class:"leftItem"},$x=wn(()=>P("span",{class:"statuskinds"},"DEF",-1)),qx={class:"itemValue"},Xx={class:"rightItem"},Yx=wn(()=>P("span",{class:"statuskinds"},"MDF",-1)),jx={class:"itemValue"},Kx={class:"dexline"},Zx={class:"leftItem"},Jx=wn(()=>P("span",{class:"statuskinds"},"DEX",-1)),Qx={class:"itemValue"},eS={class:"rightItem"},tS=wn(()=>P("span",{class:"statuskinds"},"SPD",-1)),nS={class:"itemValue"},iS={class:"wepline"},sS=wn(()=>P("span",{class:"statuskinds"},"WEP",-1)),rS={class:"equipName"},aS={class:"armline"},oS=wn(()=>P("span",{class:"statuskinds"},"ARM",-1)),lS={class:"equipName"},cS={class:"accline"},uS=wn(()=>P("span",{class:"statuskinds"},"ACC",-1)),fS={class:"equipName"},dS=Xe({__name:"Status",props:{character:{type:on}},setup(n){return(e,t)=>{var i,s,r;return n.character?(Q(),pe("div",Tx,[P("div",Ax,[P("span",wx,be(n.character.name),1),P("span",Cx,[Rx,P("span",null,be(n.character.LV),1)])]),P("div",Px,[Lx,P("span",Dx,[De(no,{nowHP:n.character.nowHP,maxHP:n.character.totalStatus.HP},null,8,["nowHP","maxHP"])])]),P("div",Ix,[Ux,P("span",Fx,[De(cc,{nowMP:n.character.nowMP,maxMP:n.character.totalStatus.MP},null,8,["nowMP","maxMP"])])]),P("div",kx,[P("span",Nx,[Ox,P("span",Bx,be(n.character.totalStatus.ATK),1)]),P("span",Hx,[zx,P("span",Gx,be(n.character.totalStatus.MGC),1)])]),P("div",Vx,[P("span",Wx,[$x,P("span",qx,be(n.character.totalStatus.DEF),1)]),P("span",Xx,[Yx,P("span",jx,be(n.character.totalStatus.MDF),1)])]),P("div",Kx,[P("span",Zx,[Jx,P("span",Qx,be(n.character.totalStatus.DEX),1)]),P("span",eS,[tS,P("span",nS,be(n.character.totalStatus.SPD),1)])]),P("div",iS,[sS,P("span",rS,be((i=n.character.equipment.WEP)==null?void 0:i.name),1)]),P("div",aS,[oS,P("span",lS,be((s=n.character.equipment.ARM)==null?void 0:s.name),1)]),P("div",cS,[uS,P("span",fS,be((r=n.character.equipment.ACC)==null?void 0:r.name),1)])])):We("",!0)}}}),hS=Ze(dS,[["__scopeId","data-v-4202f880"]]),pS={class:"CurrentUI"},mS=["onClick","onMouseover"],_S=["src"],gS=["src"],vS={class:"progress-bar-hp"},MS={class:"progress-bar-mp"},xS=Xe({__name:"Current",props:{currentCharacter:{type:on},targetCharacter:{type:Array},showCharacterEffect:{type:Array},toCharacterEffect:{type:Array,default:()=>[]},toCharacterEffectType:{type:String},showCharacterAnime:{type:Array},toCharacterAnime:{type:[String,null],default:null},selectionMode:{type:String}},emits:["selectCharacter"],setup(n,{emit:e}){const t=n,i=ui();function s(l){var c;t.selectionMode==M.targetOneFriend&&((c=t.targetCharacter)!=null&&c.includes(l)||o("over",l))}function r(l){var c;t.selectionMode==M.targetMyself?o("click"):t.selectionMode==M.targetOneFriend?(c=t.targetCharacter)!=null&&c.includes(l)?o("click",l):o("over",l):t.selectionMode==M.targetAllFriends&&o("click")}const a=e,o=(l,c=null)=>{a("selectCharacter",l,c)};return Et(()=>t.showCharacterEffect,()=>{console.log("showCharacterEffect",t.showCharacterEffect)}),Et(()=>t.toCharacterEffect,()=>{console.log("toCharacterEffect",t.toCharacterEffect)}),Et(()=>t.toCharacterEffectType,()=>{console.log("toCharacterEffectType",t.toCharacterEffectType)}),Et(()=>t.selectionMode,()=>{console.log("selectionMode",t.selectionMode)}),(l,c)=>(Q(),pe("div",pS,[(Q(!0),pe(ut,null,Vt(K(i).characters,(u,f)=>{var d;return Q(),pe("div",{class:Dt(["character",{currentCharacter:u==n.currentCharacter,targetCharacter:(d=n.targetCharacter)==null?void 0:d.includes(u)}]),onClick:p=>r(u),onMouseover:p=>s(u)},[Tt(P("div",{class:Dt(["characterEffect",{effectGreen:n.toCharacterEffectType==K(M).effectHeal,effectRed:n.toCharacterEffectType==K(M).effectDamage}])},be(n.toCharacterEffect[f]),3),[[At,n.showCharacterEffect&&n.showCharacterEffect[f]]]),Tt(P("img",{src:n.toCharacterAnime,class:"toCharacterAnime",alt:"skill effect"},null,8,_S),[[At,n.showCharacterAnime&&n.showCharacterAnime[f]]]),P("img",{class:"characterface",src:u.faceGraphicUrl},null,8,gS),P("span",vS,[De(no,{nowHP:u.nowHP,maxHP:u.totalStatus.HP},null,8,["nowHP","maxHP"])]),P("div",MS,[De(cc,{nowMP:u.nowMP,maxMP:u.totalStatus.MP},null,8,["nowMP","maxMP"])])],42,mS)}),256))]))}}),pc=Ze(xS,[["__scopeId","data-v-7069f346"]]),SS=[{item_id:1,use:2,number:1},{item_id:2,use:2,number:1},{item_id:1001,use:0,number:5},{item_id:1002,use:0,number:1},{item_id:2001,use:1,number:3},{item_id:2002,use:1,number:1}],yS=[{item_id:1,name:"Magic Circle of Return",use:2,info:"Magic circle escaping from dungeon.",attribute:0,consume:0,purchase_amount:0,selling_price:0,effect_number:0,skill_effect:[{effect_type:"special",effect_kind:"return",effect_times:1,base_status:"",success_rate:100,effect_amount:0,target:99,target_type:"other",skill_anime:"effect/item/magicCircle1.gif",anime_time:3e3}]},{item_id:2,name:"Special Item2",use:2,info:"Magic circle escaping from dungeon.",attribute:0,consume:0,purchase_amount:0,selling_price:0,effect_number:0,skill_effect:[]},{item_id:1001,name:"Healing Herb",use:0,info:"Recover 50 HP of one friend.",attribute:11,consume:1,purchase_amount:100,selling_price:50,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"FixValue",success_rate:100,effect_amount:50,target:1,target_type:"oneFriend",skill_anime:"",anime_time:500}]},{item_id:1002,name:"Normal Item2",use:0,info:"Recover 50 HP of one friend.",attribute:11,consume:1,purchase_amount:100,selling_price:50,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"FixValue",success_rate:100,effect_amount:50,target:1,target_type:"oneFriend",skill_anime:"",anime_time:500}]},{item_id:2001,name:"battle item1",use:1,info:"battle item info 1234567890.",attribute:0,consume:1,purchase_amount:100,selling_price:50,effect_number:1,skill_effect:[{effect_type:"debuff",effect_kind:"DEF",effect_times:1,base_status:"FixRate",success_rate:100,effect_amount:.2,target:2,target_type:"oneEnemy",skill_anime:"",anime_time:500}]},{item_id:2002,name:"battle item2",use:1,info:"battle item info 1234567890.",attribute:0,consume:1,purchase_amount:100,selling_price:50,effect_number:1,skill_effect:[{effect_type:"debuff",effect_kind:"DEF",effect_times:1,base_status:"FixRate",success_rate:100,effect_amount:.2,target:2,target_type:"oneEnemy",skill_anime:"",anime_time:500}]}];class ES{constructor(e){Pe(this,"item_id");Pe(this,"name");Pe(this,"use");Pe(this,"info");Pe(this,"consume");Pe(this,"attribute");Pe(this,"purchase_amount");Pe(this,"selling_price");Pe(this,"effect_number");Pe(this,"skill_effect");this.item_id=e.item_id,this.name=e.name,this.use=e.use,this.info=e.info,this.consume=e.consume,this.attribute=e.attribute,this.purchase_amount=e.purchase_amount,this.selling_price=e.selling_price,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect}}const bS=yS.map(n=>new ES(n)),TS=ki("itemBag",{state:()=>({itemBag:SS.map(n=>({...n,item:bS.find(e=>e.item_id===n.item_id)}))}),actions:{addItem(n){const e=this.itemBag.find(t=>t.item_id===n.item_id);e?e.number+=n.number:this.itemBag.push(n)},useItem(n){const e=this.itemBag.find(t=>t.item_id===n);e&&e.number>0&&(e.number-=1,e.number===0&&this.removeItem(n))},removeItem(n){const e=this.itemBag.findIndex(t=>t.item_id===n);e!==-1&&this.itemBag.splice(e,1)}}}),AS={class:"ItemBagUI"},wS={class:"itemBag"},CS={class:"selectItem"},RS={class:"tabSelect"},PS=["onClick"],LS={class:"itemBox"},DS=["onClick"],IS={class:"itemName"},US={key:0,class:"buttonPosition"},FS=["onClick"],kS={class:"itemNumber"},NS=["src"],OS=Xe({__name:"ItemBag",props:{processBattle:{type:Boolean}},emits:["useItem"],setup(n,{emit:e}){const t=Hn(),i=TS(),s=fi(),r=ui(),a=n,o=ge([]),l=ge(new Array(r.characters.length).fill(!1)),c=ge(null),u=ge(new Array(r.characters.length).fill(!1)),f=ge(new Array(r.characters.length).fill(null)),d=ge(),p=ge(""),_={tabAll:M.itemTabAll,tab1:M.itemTab1,tab2:M.itemTab2,tab3:M.itemTab3},g=ge(M.itemTabAll),m=Lt(()=>{switch(h.value=null,g.value){case M.itemTab1:return i.itemBag.filter(D=>D.use===0);case M.itemTab2:return i.itemBag.filter(D=>D.use===1);case M.itemTab3:return i.itemBag.filter(D=>D.use===2);default:return i.itemBag}}),h=ge(null),w=D=>{a.processBattle&&h.value==D&&b(D),h.value=D},y=e,b=D=>{y("useItem",D.item)},C=ge(""),F=ge(0),L=ge("");async function H(D){if(D.item.use==2){switch(D.item_id){case M.returnItemId:L.value=M.targetAll,C.value=D.item.skill_effect[0].skill_anime,F.value=D.item.skill_effect[0].anime_time;break}return}if(D.item.skill_effect.length!==0){D.item.skill_effect[0].target==1&&(p.value=D.item.skill_effect[0].target_type,p.value==M.targetAllFriends?o.value=r.characters.filter(q=>q.nowHP>0):o.value=[],await T());for(const q of D.item.skill_effect)q.target==1&&characterAssist(q,D.item.name)}}let S=null;async function T(){return new Promise(D=>{S=D})}const J=(D,q)=>{D=="over"?(o.value=[],o.value.push(q)):D=="click"&&S&&(S(),S=null)},$=()=>{setTimeout(()=>{L.value=null,oe()},F.value)},oe=()=>{h.value&&h.value.item_id==M.returnItemId&&(t.status=M.statusTown,s.item=!1,console.log("useNormalItem",h.value))};return(D,q)=>(Q(),pe("div",AS,[K(t).processDungeon==K(M).processSearch?(Q(),xt(pc,{key:0,class:"CurrentUI",targetCharacter:o.value,showCharacterEffect:u.value,toCharacterEffect:f.value,toCharacterEffectType:d.value,showCharacterAnime:l.value,toCharacterAnime:c.value,selectionMode:p.value,onSelectCharacter:J},null,8,["targetCharacter","showCharacterEffect","toCharacterEffect","toCharacterEffectType","showCharacterAnime","toCharacterAnime","selectionMode"])):We("",!0),P("div",wS,[P("div",CS,[P("ul",RS,[(Q(),pe(ut,null,Vt(_,(z,X)=>P("li",{key:X,class:Dt(["tab",{"selected-tab":g.value===z}]),onClick:re=>g.value=z},be(z),11,PS)),64))]),P("ul",LS,[(Q(!0),pe(ut,null,Vt(m.value,z=>(Q(),pe("li",{key:z.item_id,class:Dt(["itemList",{"selected-tab":h.value===z}]),onClick:X=>w(z)},[P("span",IS,be(z.item.name),1),h.value===z&&K(t).processDungeon==K(M).processSearch&&z.item.use!==1?(Q(),pe("span",US,[P("span",{onClick:X=>H(z),class:"button-equip"},be(K(M).itemBtn1),9,FS)])):We("",!0),P("span",kS,be(z.number),1)],10,DS))),128))])]),h.value?(Q(),xt(uc,{key:0,class:"skillInfo",skillInfo:h.value.item.info},null,8,["skillInfo"])):We("",!0)]),De(ac,{name:"fade"},{default:pr(()=>[L.value==K(M).targetAll&&C.value?(Q(),pe("div",{key:0,class:"gif-modal",onClick:q[1]||(q[1]=z=>L.value=null)},[P("img",{src:C.value,alt:"animation",onLoad:q[0]||(q[0]=z=>$())},null,40,NS)])):We("",!0)]),_:1})]))}}),BS=Ze(OS,[["__scopeId","data-v-e29262e8"]]),HS="/app2/icon/back.svg",zS=["src"],GS=Xe({__name:"IconBack",setup(n){return(e,t)=>(Q(),pe("img",{class:"Icon",src:K(HS),alt:"Back"},null,8,zS))}}),Oh=Ze(GS,[["__scopeId","data-v-6b7e6f2e"]]),VS="/app2/icon/bag.svg",WS=["src"],$S=Xe({__name:"IconBag",setup(n){return(e,t)=>(Q(),pe("img",{class:"Icon",src:K(VS),alt:"Bag"},null,8,WS))}}),qS=Ze($S,[["__scopeId","data-v-847f9a3f"]]),XS="/app2/icon/party.svg",YS=["src"],jS=Xe({__name:"IconParty",setup(n){return(e,t)=>(Q(),pe("img",{class:"Icon",src:K(XS),alt:"Party"},null,8,YS))}}),KS=Ze(jS,[["__scopeId","data-v-ba6ce6be"]]),ZS="/app2/icon/change.svg",JS=["src"],QS=Xe({__name:"IconChange",setup(n){return(e,t)=>(Q(),pe("img",{class:"Icon",src:K(ZS),alt:"Change"},null,8,JS))}}),ey=Ze(QS,[["__scopeId","data-v-e7f25d89"]]),ty={class:"partyUI"},ny={key:0,class:"party"},iy={class:"characters"},sy=["onClick"],ry={class:"charaflame"},ay=["src"],oy=Xe({__name:"Party",setup(n){const e=ui(),t=fi(),i=Hn(),s=()=>{d.value=!1,t.party?r():a()},r=()=>{d.value=!1,t.party=!1,t.character=!1,t.map=!0,t.current=!0},a=()=>{t.party=!0,t.character=!1,u.value=void 0,f.value=void 0},o=()=>{t.item=!t.item,t.current=!t.item,t.party=!1},l=()=>{if(d.value=!1,t.item=!1,!t.party&&!t.character&&(t.map=!1,t.current=!1),t.party){r();return}t.party=!t.party,t.character=!1},c=b=>{b=="next"?(u.value=u.value==e.characters.length-1?0:u.value+1,f.value=e.characters[u.value]):(u.value=u.value==0?e.characters.length-1:u.value-1,f.value=e.characters[u.value])},u=ge(void 0),f=ge(void 0),d=ge(!1),p=ge([]);let _,g;function m(b,C){if(i.guildMenu==M.menuRemoveMember){if(C.cha_id==M.mainChaid){g=M.msgRemovePartyError,t.errorMessage=!0;return}_=M.msgRemoveParty1+C.name+M.msgRemoveParty2,t.message=!0,f.value=C;return}if(d.value){if(p.value.includes(b)?p.value=p.value.filter(F=>F!==b):p.value.length<2&&p.value.push(b),p.value.length===2){const F=e.characters[p.value[0]];e.characters[p.value[0]]=e.characters[p.value[1]],e.characters[p.value[1]]=F;for(let L of p.value)e.characters[L].updateHate(L),console.log("partyStore.characters[order]",e.characters[L]);p.value=[]}}else u.value=b,f.value=C,t.party=!1,t.character=!0}const h=b=>{t.message=!1,b==M.textYes&&(e.characters=e.characters.filter(C=>C.cha_id!==f.value.cha_id),t.character=!1)},w=()=>{t.errorMessage=!1},y=()=>{d.value=!d.value};return(b,C)=>(Q(),pe("div",ty,[K(t).party||K(i).guildMenu==K(M).menuRemoveMember?(Q(),pe("div",ny,[P("div",iy,[(Q(!0),pe(ut,null,Vt(K(e).characters,(F,L)=>(Q(),pe("div",{key:F.cha_id,onClick:H=>m(L,F),class:Dt(["character-card",{changing:d.value&&p.value.includes(L)}])},[De(hS,{class:"StatusUI",character:F},null,8,["character"]),P("div",ry,[P("img",{src:F.poseGraphicUrl,alt:"",class:"charaimage"},null,8,ay)])],10,sy))),128))])])):We("",!0),Tt(De(Nh,{character:f.value,index:u.value,onChangeCharacter:c},null,8,["character","index"]),[[At,K(t).character]]),Tt(De(BS,{class:"ItemBag"},null,512),[[At,K(t).item]]),Tt(De(Oh,{class:"IconBack",onClick:s},null,512),[[At,K(t).party||K(t).character]]),K(i).processDungeon==K(M).processSearch&&!K(t).character?(Q(),xt(qS,{key:1,class:"IconBag",onClick:o})):We("",!0),Tt(De(ey,{class:Dt(["IconChange",{changing:d.value}]),onClick:y},null,8,["class"]),[[At,K(t).party]]),K(i).guildMenu!=K(M).menuRemoveMember?(Q(),xt(KS,{key:2,class:"IconParty",onClick:l})):We("",!0),Tt(De(hc,{message:K(_),onConfirmationResponse:h},null,8,["message"]),[[At,K(t).message]]),Tt(De(fc,{message:K(g),onHideError:w},null,8,["message"]),[[At,K(t).errorMessage]])]))}}),mc=Ze(oy,[["__scopeId","data-v-794e98f3"]]),io=n=>(On("data-v-8b8282cc"),n=n(),Bn(),n),ly={class:"information"},cy={key:0,class:"flame"},uy=io(()=>P("div",{class:"firstItem"},"Quest",-1)),fy=io(()=>P("div",{class:"secondItem"},"Accept a Quest",-1)),dy=io(()=>P("div",{class:"secondItem"},"Receive Rewards",-1)),hy=io(()=>P("div",{class:"firstItem"},"About Member",-1)),py=Xe({__name:"Guild",setup(n){const e=Hn();function t(i){e.guildMenu=i}return(i,s)=>(Q(),pe("div",ly,[K(e).guildMenu==""?(Q(),pe("div",cy,[uy,fy,dy,hy,P("div",{class:"secondItem",onClick:s[0]||(s[0]=r=>t(K(M).menuAddMember))},be(K(M).menuAddMember),1),P("div",{class:"secondItem",onClick:s[1]||(s[1]=r=>t(K(M).menuRemoveMember))},be(K(M).menuRemoveMember),1)])):We("",!0),K(e).guildMenu==K(M).menuAddMember?(Q(),xt(bx,{key:1,class:"into"})):We("",!0),K(e).guildMenu==K(M).menuRemoveMember?(Q(),xt(mc,{key:2})):We("",!0)]))}}),my=Ze(py,[["__scopeId","data-v-8b8282cc"]]),_y={},gy={class:"back"};function vy(n,e){return Q(),pe("div",gy)}const My=Ze(_y,[["render",vy],["__scopeId","data-v-c8f65fef"]]),xy=Xe({__name:"ProcessBack",setup(n){const e=Hn(),t=fi();function i(){t.message?t.message=!1:t.character?t.character=!1:e.guildMenu?e.guildMenu="":e.processTown=M.statusTown}return(s,r)=>(Q(),xt(Oh,{class:"IconBack",onClick:i}))}}),Sy={class:"flame"},yy=Xe({__name:"Flame1",props:{inside:{type:String}},setup(n){return(e,t)=>(Q(),pe("div",Sy,be(n.inside),1))}}),Al=Ze(yy,[["__scopeId","data-v-e4f577cc"]]);function Bh(){return{enterFullscreen:async()=>{try{await document.documentElement.requestFullscreen()}catch(t){console.error(t)}},exitFullscreen:async()=>{try{await document.exitFullscreen()}catch(t){console.error(t)}}}}const Ey="/app2/icon/town/guild.jpg",by="/app2/icon/town/inn.jpg",Ty="/app2/icon/town/forest.jpg",Ay="/app2/icon/town/swamp.jpg",wy="/app2/icon/town/desert.jpg",Cy="/app2/icon/town/volcano.jpg",Ry="/app2/icon/town/cave.jpg",Py="/app2/icon/town/palace.jpg",Ly="/app2/icon/town/tower.jpg",Dy={class:"town"},Iy={key:0},Uy={key:0},Fy=["src"],ky=["src"],Ny=["src"],Oy=["src"],By=["src"],Hy=["src"],zy=["src"],Gy=["src"],Vy=["src"],Wy=Xe({__name:"Town",setup(n){const{enterFullscreen:e}=Bh(),t=Hn(),i=fi(),s=Dr();Fi(()=>{s.playBgm(M.mscTown)});function r(p){t.processTown=p}let a,o;function l(p){a=M.msgEnterDungeon+p+".",o=p,i.message=!0}async function c(p){i.message=!1,p==M.textYes&&(await e(),t.status=M.statusDungeon,t.processDungeon=M.processSearch,t.whichDungeon=o)}const u=ge("");function f(p){u.value=p}function d(){u.value=""}return(p,_)=>(Q(),pe("div",Dy,[K(t).processTown==K(M).statusTown?(Q(),pe("div",Iy,[K(i).party?We("",!0):(Q(),pe("div",Uy,[P("img",{class:"guild",src:K(Ey),alt:"GUILD",onClick:_[0]||(_[0]=g=>r(K(M).processGuild)),onMouseover:_[1]||(_[1]=g=>f(K(M).processGuild)),onMouseout:_[2]||(_[2]=g=>d())},null,40,Fy),P("img",{class:"inn",src:K(by),alt:"INN",onClick:_[3]||(_[3]=g=>r(K(M).processInn)),onMouseover:_[4]||(_[4]=g=>f(K(M).processInn)),onMouseout:_[5]||(_[5]=g=>d())},null,40,ky),P("img",{class:"dungeon1",src:K(Ty),alt:"Dungeon1",onClick:_[6]||(_[6]=g=>l(K(M).nameDungeon1)),onMouseover:_[7]||(_[7]=g=>f(K(M).nameDungeon1)),onMouseout:_[8]||(_[8]=g=>d())},null,40,Ny),P("img",{class:"dungeon2",src:K(Ay),alt:"Dungeon2",onClick:_[9]||(_[9]=g=>l(K(M).nameDungeon2)),onMouseover:_[10]||(_[10]=g=>f(K(M).nameDungeon2)),onMouseout:_[11]||(_[11]=g=>d())},null,40,Oy),P("img",{class:"dungeon3",src:K(wy),alt:"Dungeon3",onClick:_[12]||(_[12]=g=>l(K(M).nameDungeon3)),onMouseover:_[13]||(_[13]=g=>f(K(M).nameDungeon3)),onMouseout:_[14]||(_[14]=g=>d())},null,40,By),P("img",{class:"dungeon4",src:K(Cy),alt:"Dungeon4",onClick:_[15]||(_[15]=g=>l(K(M).nameDungeon4)),onMouseover:_[16]||(_[16]=g=>f(K(M).nameDungeon4)),onMouseout:_[17]||(_[17]=g=>d())},null,40,Hy),P("img",{class:"dungeon5",src:K(Ry),alt:"Dungeon5",onClick:_[18]||(_[18]=g=>l(K(M).nameDungeon5)),onMouseover:_[19]||(_[19]=g=>f(K(M).nameDungeon5)),onMouseout:_[20]||(_[20]=g=>d())},null,40,zy),P("img",{class:"dungeon6",src:K(Py),alt:"Dungeon6",onClick:_[21]||(_[21]=g=>l(K(M).nameDungeon6)),onMouseover:_[22]||(_[22]=g=>f(K(M).nameDungeon6)),onMouseout:_[23]||(_[23]=g=>d())},null,40,Gy),P("img",{class:"dungeon7",src:K(Ly),alt:"Dungeon7",onClick:_[24]||(_[24]=g=>l(K(M).nameDungeon7)),onMouseover:_[25]||(_[25]=g=>f(K(M).nameDungeon7)),onMouseout:_[26]||(_[26]=g=>d())},null,40,Vy),u.value?(Q(),xt(Al,{key:0,class:"selectName",inside:u.value},null,8,["inside"])):We("",!0)])),De(mc),Tt(De(hc,{message:K(a),onConfirmationResponse:c},null,8,["message"]),[[At,K(i).message]])])):K(t).processTown==K(M).processGuild?(Q(),xt(my,{key:1,class:"into"})):K(t).processTown==K(M).processInn?(Q(),xt(My,{key:2,class:"into"})):We("",!0),K(t).processTown!=K(M).statusTown?(Q(),xt(xy,{key:3,class:"ProcessBack"})):We("",!0)]))}}),$y=Ze(Wy,[["__scopeId","data-v-0e4cd0e0"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="158",qy=0,vu=1,Xy=2,Hh=1,Yy=2,ni=3,Ii=0,ln=1,an=2,Ri=0,Os=1,Mu=2,xu=3,Su=4,jy=5,Qi=100,Ky=101,Zy=102,yu=103,Eu=104,Jy=200,Qy=201,eE=202,tE=203,wl=204,Cl=205,nE=206,iE=207,sE=208,rE=209,aE=210,oE=211,lE=212,cE=213,uE=214,fE=0,dE=1,hE=2,Ua=3,pE=4,mE=5,_E=6,gE=7,gc=0,vE=1,ME=2,Pi=0,xE=1,SE=2,yE=3,EE=4,bE=5,zh=300,Ws=301,$s=302,Rl=303,Pl=304,so=306,Ll=1e3,Un=1001,Dl=1002,tn=1003,bu=1004,Ao=1005,bn=1006,TE=1007,wr=1008,Li=1009,AE=1010,wE=1011,vc=1012,Gh=1013,bi=1014,Ti=1015,Cr=1016,Vh=1017,Wh=1018,rs=1020,CE=1021,Fn=1023,RE=1024,PE=1025,as=1026,qs=1027,LE=1028,$h=1029,DE=1030,qh=1031,Xh=1033,wo=33776,Co=33777,Ro=33778,Po=33779,Tu=35840,Au=35841,wu=35842,Cu=35843,IE=36196,Ru=37492,Pu=37496,Lu=37808,Du=37809,Iu=37810,Uu=37811,Fu=37812,ku=37813,Nu=37814,Ou=37815,Bu=37816,Hu=37817,zu=37818,Gu=37819,Vu=37820,Wu=37821,Lo=36492,$u=36494,qu=36495,UE=36283,Xu=36284,Yu=36285,ju=36286,Yh=3e3,os=3001,FE=3200,kE=3201,jh=0,NE=1,Tn="",$t="srgb",li="srgb-linear",Mc="display-p3",ro="display-p3-linear",Fa="linear",_t="srgb",ka="rec709",Na="p3",ms=7680,Ku=519,OE=512,BE=513,HE=514,zE=515,GE=516,VE=517,WE=518,$E=519,Zu=35044,Ju="300 es",Il=1035,ri=2e3,Oa=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Do=Math.PI/180,Ul=180/Math.PI;function Ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function qE(n,e){return(n%e+e)%e}function Io(n,e,t){return(1-t)*n+t*e}function Qu(n){return(n&n-1)===0&&n!==0}function Fl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,s,r,a,o,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],g=s[0],m=s[3],h=s[6],w=s[1],y=s[4],b=s[7],C=s[2],F=s[5],L=s[8];return r[0]=a*g+o*w+l*C,r[3]=a*m+o*y+l*F,r[6]=a*h+o*b+l*L,r[1]=c*g+u*w+f*C,r[4]=c*m+u*y+f*F,r[7]=c*h+u*b+f*L,r[2]=d*g+p*w+_*C,r[5]=d*m+p*y+_*F,r[8]=d*h+p*b+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=t*f+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*c-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new st;function Kh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XE(){const n=Rr("canvas");return n.style.display="block",n}const ef={};function Mr(n){n in ef||(ef[n]=!0,console.warn(n))}const tf=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nf=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[li]:{transfer:Fa,primaries:ka,toReference:n=>n,fromReference:n=>n},[$t]:{transfer:_t,primaries:ka,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ro]:{transfer:Fa,primaries:Na,toReference:n=>n.applyMatrix3(nf),fromReference:n=>n.applyMatrix3(tf)},[Mc]:{transfer:_t,primaries:Na,toReference:n=>n.convertSRGBToLinear().applyMatrix3(nf),fromReference:n=>n.applyMatrix3(tf).convertLinearToSRGB()}},YE=new Set([li,ro]),ht={enabled:!0,_workingColorSpace:li,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!YE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=jr[e].toReference,s=jr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return jr[n].primaries},getTransfer:function(n){return n===Tn?Fa:jr[n].transfer}};function Bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _s;class Zh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Rr("canvas")),_s.width=e.width,_s.height=e.height;const i=_s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bs(t[i]/255)*255):t[i]=Bs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jE=0;class Jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ko(s[a].image)):r.push(ko(s[a]))}else r=ko(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KE=0;class cn extends Js{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Un,s=Un,r=bn,a=wr,o=Fn,l=Li,c=cn.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Ir(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===os?$t:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$t?os:Yh}set encoding(e){Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===os?$t:Tn}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=zh;cn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(p+1)/2,C=(h+1)/2,F=(u+d)/4,L=(f+g)/4,H=(_+m)/4;return y>b&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=F/i,r=L/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=F/s,r=H/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=L/r,s=H/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-g)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZE extends Js{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===os?$t:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends ZE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qh extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JE extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==p||u!==_){let m=1-o;const h=l*d+c*p+u*_+f*g,w=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),F=Math.atan2(C,h*w);m=Math.sin(m*F)/C,o=Math.sin(o*F)/C}const b=o*w;if(l=l*m+d*b,c=c*m+p*b,u=u*m+_*b,f=f*m+g*b,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*p-c*d,e[t+1]=l*_+u*d+c*f-o*p,e[t+2]=c*_+u*p+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new Y,sf=new Ur;class Fr{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kr.copy(i.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Zr.subVectors(this.max,sr),gs.subVectors(e.a,sr),vs.subVectors(e.b,sr),Ms.subVectors(e.c,sr),_i.subVectors(vs,gs),gi.subVectors(Ms,vs),Vi.subVectors(gs,Ms);let t=[0,-_i.z,_i.y,0,-gi.z,gi.y,0,-Vi.z,Vi.y,_i.z,0,-_i.x,gi.z,0,-gi.x,Vi.z,0,-Vi.x,-_i.y,_i.x,0,-gi.y,gi.x,0,-Vi.y,Vi.x,0];return!Oo(t,gs,vs,Ms,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,gs,vs,Ms,Zr))?!1:(Jr.crossVectors(_i,gi),t=[Jr.x,Jr.y,Jr.z],Oo(t,gs,vs,Ms,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Cn=new Y,Kr=new Fr,gs=new Y,vs=new Y,Ms=new Y,_i=new Y,gi=new Y,Vi=new Y,sr=new Y,Zr=new Y,Jr=new Y,Wi=new Y;function Oo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Wi.fromArray(n,r);const o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const QE=new Fr,rr=new Y,Bo=new Y;class xc{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):QE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Bo)),this.expandByPoint(rr.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new Y,Ho=new Y,Qr=new Y,vi=new Y,zo=new Y,ea=new Y,Go=new Y;class ep{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ho.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Ho);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=vi.dot(this.direction),l=-vi.dot(Qr),c=vi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ho).addScaledVector(Qr,d),p}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){zo.subVectors(t,e),ea.subVectors(i,e),Go.crossVectors(zo,ea);let a=this.direction.dot(Go),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);const l=o*this.direction.dot(ea.crossVectors(vi,ea));if(l<0)return null;const c=o*this.direction.dot(zo.cross(vi));if(c<0||l+c>a)return null;const u=-o*vi.dot(Go);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,i,s,r,a,o,l,c,u,f,d,p,_,g,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,d,p,_,g,m)}set(e,t,i,s,r,a,o,l,c,u,f,d,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,g=c*f;t[0]=d+g*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,g=c*f;t[0]=d-g*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e1,e,t1)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Mi.crossVectors(i,pn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Mi.crossVectors(i,pn)),Mi.normalize(),ta.crossVectors(pn,Mi),s[0]=Mi.x,s[4]=ta.x,s[8]=pn.x,s[1]=Mi.y,s[5]=ta.y,s[9]=pn.y,s[2]=Mi.z,s[6]=ta.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],w=i[3],y=i[7],b=i[11],C=i[15],F=s[0],L=s[4],H=s[8],S=s[12],T=s[1],J=s[5],$=s[9],oe=s[13],D=s[2],q=s[6],z=s[10],X=s[14],re=s[3],le=s[7],de=s[11],G=s[15];return r[0]=a*F+o*T+l*D+c*re,r[4]=a*L+o*J+l*q+c*le,r[8]=a*H+o*$+l*z+c*de,r[12]=a*S+o*oe+l*X+c*G,r[1]=u*F+f*T+d*D+p*re,r[5]=u*L+f*J+d*q+p*le,r[9]=u*H+f*$+d*z+p*de,r[13]=u*S+f*oe+d*X+p*G,r[2]=_*F+g*T+m*D+h*re,r[6]=_*L+g*J+m*q+h*le,r[10]=_*H+g*$+m*z+h*de,r[14]=_*S+g*oe+m*X+h*G,r[3]=w*F+y*T+b*D+C*re,r[7]=w*L+y*J+b*q+C*le,r[11]=w*H+y*$+b*z+C*de,r[15]=w*S+y*oe+b*X+C*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+r*l*f-s*c*f-r*o*d+i*c*d+s*o*p-i*l*p)+g*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*f-t*o*p-r*a*f+i*a*p+r*o*u-i*c*u)+h*(-s*o*u-t*l*f+t*o*d+s*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],w=f*m*c-g*d*c+g*l*p-o*m*p-f*l*h+o*d*h,y=_*d*c-u*m*c-_*l*p+a*m*p+u*l*h-a*d*h,b=u*g*c-_*f*c+_*o*p-a*g*p-u*o*h+a*f*h,C=_*f*l-u*g*l-_*o*d+a*g*d+u*o*m-a*f*m,F=t*w+i*y+s*b+r*C;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/F;return e[0]=w*L,e[1]=(g*d*r-f*m*r-g*s*p+i*m*p+f*s*h-i*d*h)*L,e[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*h+i*l*h)*L,e[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*p-i*l*p)*L,e[4]=y*L,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*h+t*d*h)*L,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*h-t*l*h)*L,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*L,e[8]=b*L,e[9]=(_*f*r-u*g*r-_*i*p+t*g*p+u*i*h-t*f*h)*L,e[10]=(a*g*r-_*o*r+_*i*c-t*g*c-a*i*h+t*o*h)*L,e[11]=(u*o*r-a*f*r-u*i*c+t*f*c+a*i*p-t*o*p)*L,e[12]=C*L,e[13]=(u*g*s-_*f*s+_*i*d-t*g*d-u*i*m+t*f*m)*L,e[14]=(_*o*s-a*g*s-_*i*l+t*g*l+a*i*m-t*o*m)*L,e[15]=(a*f*s-u*o*s+u*i*l-t*f*l-a*i*d+t*o*d)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,_=r*f,g=a*u,m=a*f,h=o*f,w=l*c,y=l*u,b=l*f,C=i.x,F=i.y,L=i.z;return s[0]=(1-(g+h))*C,s[1]=(p+b)*C,s[2]=(_-y)*C,s[3]=0,s[4]=(p-b)*F,s[5]=(1-(d+h))*F,s[6]=(m+w)*F,s[7]=0,s[8]=(_+y)*L,s[9]=(m-w)*L,s[10]=(1-(d+g))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=xs.set(s[0],s[1],s[2]).length();const a=xs.set(s[4],s[5],s[6]).length(),o=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const c=1/r,u=1/a,f=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,t.setFromRotationMatrix(Rn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ri){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let p,_;if(o===ri)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Oa)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ri){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(a-r),d=(t+e)*c,p=(i+s)*u;let _,g;if(o===ri)_=(a+r)*f,g=-2*f;else if(o===Oa)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xs=new Y,Rn=new It,e1=new Y(0,0,0),t1=new Y(1,1,1),Mi=new Y,ta=new Y,pn=new Y,rf=new It,af=new Ur;class ao{constructor(e=0,t=0,i=0,s=ao.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ao.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n1=0;const of=new Y,Ss=new Ur,Qn=new It,na=new Y,ar=new Y,i1=new Y,s1=new Ur,lf=new Y(1,0,0),cf=new Y(0,1,0),uf=new Y(0,0,1),r1={type:"added"},a1={type:"removed"};class un extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new Y,t=new ao,i=new Ur,s=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new st}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(cf,e)}rotateZ(e){return this.rotateOnAxis(uf,e)}translateOnAxis(e,t){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(cf,e)}translateZ(e){return this.translateOnAxis(uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?na.copy(e):na.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ar,na,this.up):Qn.lookAt(na,ar,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(r1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,i1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,s1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}un.DEFAULT_UP=new Y(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new Y,ei=new Y,Vo=new Y,ti=new Y,ys=new Y,Es=new Y,ff=new Y,Wo=new Y,$o=new Y,qo=new Y;let ia=!1;class Dn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),ei.subVectors(i,t),Vo.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(ei),l=Pn.dot(Vo),c=ei.dot(ei),u=ei.dot(Vo),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);const d=1/f,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,i,s,r,a,o,l){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ti),l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),ei.subVectors(e,t),Pn.cross(ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ys.subVectors(s,i),Es.subVectors(r,i),Wo.subVectors(e,i);const l=ys.dot(Wo),c=Es.dot(Wo);if(l<=0&&c<=0)return t.copy(i);$o.subVectors(e,s);const u=ys.dot($o),f=Es.dot($o);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ys,a);qo.subVectors(e,r);const p=ys.dot(qo),_=Es.dot(qo);if(_>=0&&p<=_)return t.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Es,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return ff.subVectors(r,s),o=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(ff,o);const h=1/(m+g+d);return a=g*h,o=d*h,t.copy(i).addScaledVector(ys,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=qE(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xo(a,r,e+1/3),this.g=Xo(a,r,e),this.b=Xo(a,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=tp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return ht.fromWorkingColorSpace(Xt.copy(this),e),Math.round(rn(Xt.r*255,0,255))*65536+Math.round(rn(Xt.g*255,0,255))*256+Math.round(rn(Xt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=$t){ht.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,s=Xt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(sa);const i=Io(xi.h,sa.h,t),s=Io(xi.s,sa.s,t),r=Io(xi.l,sa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ft;ft.NAMES=tp;let o1=0;class kr extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=Os,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Cl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Cl&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class np extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new Y,ra=new dt;class Yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zu,this.updateRange={offset:0,count:-1},this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ip extends Yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sp extends Yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ls extends Yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let l1=0;const yn=new It,Yo=new un,bs=new Y,mn=new Fr,or=new Fr,Ht=new Y;class ds extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kh(e)?sp:ip)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ls(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(mn.min,or.min),mn.expandByPoint(Ht),Ht.addVectors(mn.max,or.max),mn.expandByPoint(Ht)):(mn.expandByPoint(or.min),mn.expandByPoint(or.max))}mn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),Ht.add(bs)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new Y,u[T]=new Y;const f=new Y,d=new Y,p=new Y,_=new dt,g=new dt,m=new dt,h=new Y,w=new Y;function y(T,J,$){f.fromArray(s,T*3),d.fromArray(s,J*3),p.fromArray(s,$*3),_.fromArray(a,T*2),g.fromArray(a,J*2),m.fromArray(a,$*2),d.sub(f),p.sub(f),g.sub(_),m.sub(_);const oe=1/(g.x*m.y-m.x*g.y);isFinite(oe)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(oe),w.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(oe),c[T].add(h),c[J].add(h),c[$].add(h),u[T].add(w),u[J].add(w),u[$].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,J=b.length;T<J;++T){const $=b[T],oe=$.start,D=$.count;for(let q=oe,z=oe+D;q<z;q+=3)y(i[q+0],i[q+1],i[q+2])}const C=new Y,F=new Y,L=new Y,H=new Y;function S(T){L.fromArray(r,T*3),H.copy(L);const J=c[T];C.copy(J),C.sub(L.multiplyScalar(L.dot(J))).normalize(),F.crossVectors(H,J);const oe=F.dot(u[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=oe}for(let T=0,J=b.length;T<J;++T){const $=b[T],oe=$.start,D=$.count;for(let q=oe,z=oe+D;q<z;q+=3)S(i[q+0]),S(i[q+1]),S(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new Y,r=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Yn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ds,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const df=new It,$i=new ep,aa=new xc,hf=new Y,Ts=new Y,As=new Y,ws=new Y,jo=new Y,oa=new Y,la=new dt,ca=new dt,ua=new dt,pf=new Y,mf=new Y,_f=new Y,fa=new Y,da=new Y;class Wt extends un{constructor(e=new ds,t=new np){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(jo.fromBufferAttribute(f,e),a?oa.addScaledVector(jo,u):oa.addScaledVector(jo.sub(t),u))}t.add(oa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(aa.containsPoint($i.origin)===!1&&($i.intersectSphere(aa,hf)===null||$i.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(df.copy(r).invert(),$i.copy(e.ray).applyMatrix4(df),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=a[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=w,C=y;b<C;b+=3){const F=o.getX(b),L=o.getX(b+1),H=o.getX(b+2);s=ha(this,h,e,i,c,u,f,F,L,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const w=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);s=ha(this,a,e,i,c,u,f,w,y,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=a[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=w,C=y;b<C;b+=3){const F=b,L=b+1,H=b+2;s=ha(this,h,e,i,c,u,f,F,L,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const w=m,y=m+1,b=m+2;s=ha(this,a,e,i,c,u,f,w,y,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function c1(n,e,t,i,s,r,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ii,o),l===null)return null;da.copy(o),da.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:n}}function ha(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ts),n.getVertexPosition(l,As),n.getVertexPosition(c,ws);const u=c1(n,e,t,i,Ts,As,ws,fa);if(u){s&&(la.fromBufferAttribute(s,o),ca.fromBufferAttribute(s,l),ua.fromBufferAttribute(s,c),u.uv=Dn.getInterpolation(fa,Ts,As,ws,la,ca,ua,new dt)),r&&(la.fromBufferAttribute(r,o),ca.fromBufferAttribute(r,l),ua.fromBufferAttribute(r,c),u.uv1=Dn.getInterpolation(fa,Ts,As,ws,la,ca,ua,new dt),u.uv2=u.uv1),a&&(pf.fromBufferAttribute(a,o),mf.fromBufferAttribute(a,l),_f.fromBufferAttribute(a,c),u.normal=Dn.getInterpolation(fa,Ts,As,ws,pf,mf,_f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Y,materialIndex:0};Dn.getNormal(Ts,As,ws,f.normal),u.face=f}return u}class Nr extends ds{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ls(c,3)),this.setAttribute("normal",new ls(u,3)),this.setAttribute("uv",new ls(f,2));function _(g,m,h,w,y,b,C,F,L,H,S){const T=b/L,J=C/H,$=b/2,oe=C/2,D=F/2,q=L+1,z=H+1;let X=0,re=0;const le=new Y;for(let de=0;de<z;de++){const G=de*J-oe;for(let Z=0;Z<q;Z++){const xe=Z*T-$;le[g]=xe*w,le[m]=G*y,le[h]=D,c.push(le.x,le.y,le.z),le[g]=0,le[m]=0,le[h]=F>0?1:-1,u.push(le.x,le.y,le.z),f.push(Z/L),f.push(1-de/H),X+=1}}for(let de=0;de<H;de++)for(let G=0;G<L;G++){const Z=d+G+q*de,xe=d+G+q*(de+1),Se=d+(G+1)+q*(de+1),ye=d+(G+1)+q*de;l.push(Z,xe,ye),l.push(xe,Se,ye),re+=6}o.addGroup(p,re,S),p+=re,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=Xs(n[t]);for(const s in i)e[s]=i[s]}return e}function u1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rp(n){return n.getRenderTarget()===null?n.outputColorSpace:ht.workingColorSpace}const f1={clone:Xs,merge:Qt};var d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=h1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=u1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ap extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends ap{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Do*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Rs=1;class p1 extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Cs,Rs,e,t);s.layers=this.layers,this.add(s);const r=new gn(Cs,Rs,e,t);r.layers=this.layers,this.add(r);const a=new gn(Cs,Rs,e,t);a.layers=this.layers,this.add(a);const o=new gn(Cs,Rs,e,t);o.layers=this.layers,this.add(o);const l=new gn(Cs,Rs,e,t);l.layers=this.layers,this.add(l);const c=new gn(Cs,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class op extends cn{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class m1 extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===os?$t:Tn),this.texture=new op(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nr(5,5,5),r=new fs({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ri});r.uniforms.tEquirect.value=t;const a=new Wt(s,r),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=bn),new p1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Ko=new Y,_1=new Y,g1=new st;class Yi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ko.subVectors(i,t).cross(_1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ko),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||g1.getNormalMatrix(e),s=this.coplanarPoint(Ko).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new xc,pa=new Y;class yc{constructor(e=new Yi,t=new Yi,i=new Yi,s=new Yi,r=new Yi,a=new Yi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],h=s[12],w=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,d-c,m-p,b-h).normalize(),i[1].setComponents(l+r,d+c,m+p,b+h).normalize(),i[2].setComponents(l+a,d+u,m+_,b+w).normalize(),i[3].setComponents(l-a,d-u,m-_,b-w).normalize(),i[4].setComponents(l-o,d-f,m-g,b-y).normalize(),t===ri)i[5].setComponents(l+o,d+f,m+g,b+y).normalize();else if(t===Oa)i[5].setComponents(o,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function v1(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const f=c.array,d=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class ns extends ds{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<u;h++){const w=h*d-a;for(let y=0;y<c;y++){const b=y*f-r;_.push(b,-w,0),g.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<o;w++){const y=w+c*h,b=w+c*(h+1),C=w+1+c*(h+1),F=w+1+c*h;p.push(y,b,F),p.push(b,C,F)}this.setIndex(p),this.setAttribute("position",new ls(_,3)),this.setAttribute("normal",new ls(g,3)),this.setAttribute("uv",new ls(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var M1=`#ifdef USE_ALPHAHASH
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
}`,tt={alphahash_fragment:M1,alphahash_pars_fragment:x1,alphamap_fragment:S1,alphamap_pars_fragment:y1,alphatest_fragment:E1,alphatest_pars_fragment:b1,aomap_fragment:T1,aomap_pars_fragment:A1,begin_vertex:w1,beginnormal_vertex:C1,bsdfs:R1,iridescence_fragment:P1,bumpmap_pars_fragment:L1,clipping_planes_fragment:D1,clipping_planes_pars_fragment:I1,clipping_planes_pars_vertex:U1,clipping_planes_vertex:F1,color_fragment:k1,color_pars_fragment:N1,color_pars_vertex:O1,color_vertex:B1,common:H1,cube_uv_reflection_fragment:z1,defaultnormal_vertex:G1,displacementmap_pars_vertex:V1,displacementmap_vertex:W1,emissivemap_fragment:$1,emissivemap_pars_fragment:q1,colorspace_fragment:X1,colorspace_pars_fragment:Y1,envmap_fragment:j1,envmap_common_pars_fragment:K1,envmap_pars_fragment:Z1,envmap_pars_vertex:J1,envmap_physical_pars_fragment:ub,envmap_vertex:Q1,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:sb,lightmap_fragment:rb,lightmap_pars_fragment:ab,lights_lambert_fragment:ob,lights_lambert_pars_fragment:lb,lights_pars_begin:cb,lights_toon_fragment:fb,lights_toon_pars_fragment:db,lights_phong_fragment:hb,lights_phong_pars_fragment:pb,lights_physical_fragment:mb,lights_physical_pars_fragment:_b,lights_fragment_begin:gb,lights_fragment_maps:vb,lights_fragment_end:Mb,logdepthbuf_fragment:xb,logdepthbuf_pars_fragment:Sb,logdepthbuf_pars_vertex:yb,logdepthbuf_vertex:Eb,map_fragment:bb,map_pars_fragment:Tb,map_particle_fragment:Ab,map_particle_pars_fragment:wb,metalnessmap_fragment:Cb,metalnessmap_pars_fragment:Rb,morphcolor_vertex:Pb,morphnormal_vertex:Lb,morphtarget_pars_vertex:Db,morphtarget_vertex:Ib,normal_fragment_begin:Ub,normal_fragment_maps:Fb,normal_pars_fragment:kb,normal_pars_vertex:Nb,normal_vertex:Ob,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:Hb,clearcoat_normal_fragment_maps:zb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Vb,opaque_fragment:Wb,packing:$b,premultiplied_alpha_fragment:qb,project_vertex:Xb,dithering_fragment:Yb,dithering_pars_fragment:jb,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:Zb,shadowmap_pars_fragment:Jb,shadowmap_pars_vertex:Qb,shadowmap_vertex:eT,shadowmask_pars_fragment:tT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:sT,skinnormal_vertex:rT,specularmap_fragment:aT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:cT,transmission_fragment:uT,transmission_pars_fragment:fT,uv_pars_fragment:dT,uv_pars_vertex:hT,uv_vertex:pT,worldpos_vertex:mT,background_vert:_T,background_frag:gT,backgroundCube_vert:vT,backgroundCube_frag:MT,cube_vert:xT,cube_frag:ST,depth_vert:yT,depth_frag:ET,distanceRGBA_vert:bT,distanceRGBA_frag:TT,equirect_vert:AT,equirect_frag:wT,linedashed_vert:CT,linedashed_frag:RT,meshbasic_vert:PT,meshbasic_frag:LT,meshlambert_vert:DT,meshlambert_frag:IT,meshmatcap_vert:UT,meshmatcap_frag:FT,meshnormal_vert:kT,meshnormal_frag:NT,meshphong_vert:OT,meshphong_frag:BT,meshphysical_vert:HT,meshphysical_frag:zT,meshtoon_vert:GT,meshtoon_frag:VT,points_vert:WT,points_frag:$T,shadow_vert:qT,shadow_frag:XT,sprite_vert:YT,sprite_frag:jT},we={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Wn={basic:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Qt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Qt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Qt([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Qt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Qt([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Qt([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Qt([we.common,we.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Qt([we.lights,we.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Wn.physical={uniforms:Qt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ma={r:0,b:0,g:0};function KT(n,e,t,i,s,r,a){const o=new ft(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function _(m,h){let w=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===so)?(u===void 0&&(u=new Wt(new Nr(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:Xs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,F,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ht.getTransfer(y.colorSpace)!==_t,(f!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Wt(new ns(2,2),new fs({name:"BackgroundMaterial",uniforms:Xs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,h){m.getRGB(ma,rp(n)),i.buffers.color.setClear(ma.r,ma.g,ma.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function ZT(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function f(D,q,z,X,re){let le=!1;if(a){const de=g(X,z,q);c!==de&&(c=de,p(c.object)),le=h(D,X,z,re),le&&w(D,X,z,re)}else{const de=q.wireframe===!0;(c.geometry!==X.id||c.program!==z.id||c.wireframe!==de)&&(c.geometry=X.id,c.program=z.id,c.wireframe=de,le=!0)}re!==null&&t.update(re,n.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,H(D,q,z,X),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function g(D,q,z){const X=z.wireframe===!0;let re=o[D.id];re===void 0&&(re={},o[D.id]=re);let le=re[q.id];le===void 0&&(le={},re[q.id]=le);let de=le[X];return de===void 0&&(de=m(d()),le[X]=de),de}function m(D){const q=[],z=[],X=[];for(let re=0;re<s;re++)q[re]=0,z[re]=0,X[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:z,attributeDivisors:X,object:D,attributes:{},index:null}}function h(D,q,z,X){const re=c.attributes,le=q.attributes;let de=0;const G=z.getAttributes();for(const Z in G)if(G[Z].location>=0){const Se=re[Z];let ye=le[Z];if(ye===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),Se===void 0||Se.attribute!==ye||ye&&Se.data!==ye.data)return!0;de++}return c.attributesNum!==de||c.index!==X}function w(D,q,z,X){const re={},le=q.attributes;let de=0;const G=z.getAttributes();for(const Z in G)if(G[Z].location>=0){let Se=le[Z];Se===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor));const ye={};ye.attribute=Se,Se&&Se.data&&(ye.data=Se.data),re[Z]=ye,de++}c.attributes=re,c.attributesNum=de,c.index=X}function y(){const D=c.newAttributes;for(let q=0,z=D.length;q<z;q++)D[q]=0}function b(D){C(D,0)}function C(D,q){const z=c.newAttributes,X=c.enabledAttributes,re=c.attributeDivisors;z[D]=1,X[D]===0&&(n.enableVertexAttribArray(D),X[D]=1),re[D]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,q),re[D]=q)}function F(){const D=c.newAttributes,q=c.enabledAttributes;for(let z=0,X=q.length;z<X;z++)q[z]!==D[z]&&(n.disableVertexAttribArray(z),q[z]=0)}function L(D,q,z,X,re,le,de){de===!0?n.vertexAttribIPointer(D,q,z,re,le):n.vertexAttribPointer(D,q,z,X,re,le)}function H(D,q,z,X){if(i.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const re=X.attributes,le=z.getAttributes(),de=q.defaultAttributeValues;for(const G in le){const Z=le[G];if(Z.location>=0){let xe=re[G];if(xe===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),xe!==void 0){const Se=xe.normalized,ye=xe.itemSize,Le=t.get(xe);if(Le===void 0)continue;const $e=Le.buffer,Ne=Le.type,Oe=Le.bytesPerElement,Fe=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||xe.gpuType===Gh);if(xe.isInterleavedBufferAttribute){const Ce=xe.data,x=Ce.stride,k=xe.offset;if(Ce.isInstancedInterleavedBuffer){for(let R=0;R<Z.locationSize;R++)C(Z.location+R,Ce.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let R=0;R<Z.locationSize;R++)b(Z.location+R);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let R=0;R<Z.locationSize;R++)L(Z.location+R,ye/Z.locationSize,Ne,Se,x*Oe,(k+ye/Z.locationSize*R)*Oe,Fe)}else{if(xe.isInstancedBufferAttribute){for(let Ce=0;Ce<Z.locationSize;Ce++)C(Z.location+Ce,xe.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)b(Z.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Ce=0;Ce<Z.locationSize;Ce++)L(Z.location+Ce,ye/Z.locationSize,Ne,Se,ye*Oe,ye/Z.locationSize*Ce*Oe,Fe)}}else if(de!==void 0){const Se=de[G];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(Z.location,Se);break;case 3:n.vertexAttrib3fv(Z.location,Se);break;case 4:n.vertexAttrib4fv(Z.location,Se);break;default:n.vertexAttrib1fv(Z.location,Se)}}}}F()}function S(){$();for(const D in o){const q=o[D];for(const z in q){const X=q[z];for(const re in X)_(X[re].object),delete X[re];delete q[z]}delete o[D]}}function T(D){if(o[D.id]===void 0)return;const q=o[D.id];for(const z in q){const X=q[z];for(const re in X)_(X[re].object),delete X[re];delete q[z]}delete o[D.id]}function J(D){for(const q in o){const z=o[q];if(z[D.id]===void 0)continue;const X=z[D.id];for(const re in X)_(X[re].object),delete X[re];delete z[D.id]}}function $(){oe(),u=!0,c!==l&&(c=l,p(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:oe,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:J,initAttributes:y,enableAttribute:b,disableUnusedAttributes:F}}function JT(n,e,t,i){const s=i.isWebGL2;let r;function a(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,p;if(s)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function QT(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,b=a||e.has("OES_texture_float"),C=y&&b,F=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:F}}function eA(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Yi,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,y=w*4;let b=h.clippingState||null;l.value=b,b=u(_,d,y,p);for(let C=0;C!==y;++C)b[C]=t[C];h.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,b=p;y!==g;++y,b+=4)a.copy(f[y]).applyMatrix4(w,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function tA(n){let e=new WeakMap;function t(a,o){return o===Rl?a.mapping=Ws:o===Pl&&(a.mapping=$s),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Rl||o===Pl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new m1(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class nA extends ap{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,gf=[.125,.215,.35,.446,.526,.582],es=20,Zo=new nA,vf=new ft;let Jo=null,Qo=0,el=0;const ji=(1+Math.sqrt(5))/2,Ps=1/ji,Mf=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,ji,Ps),new Y(0,ji,-Ps),new Y(Ps,0,ji),new Y(-Ps,0,ji),new Y(ji,Ps,0),new Y(-ji,Ps,0)];class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Qo,el),e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Cr,format:Fn,colorSpace:li,depthBuffer:!1},s=Sf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iA(r)),this._blurMaterial=sA(r,e,t)}return s}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,i,s){const o=new gn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vf),u.toneMapping=Pi,u.autoClear=!1;const p=new np({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Wt(new Nr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(vf),g=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):w===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;_a(s,w*y,h>2?y:0,y,y),u.setRenderTarget(s),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ws||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mf[(s-1)%Mf.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Wt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*es-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const h=[];let w=0;for(let L=0;L<es;++L){const H=L/g,S=Math.exp(-H*H/2);h.push(S),L===0?w+=S:L<m&&(w+=2*S)}for(let L=0;L<h.length;L++)h[L]=h[L]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const b=this._sizeLods[s],C=3*b*(s>y-Is?s-y+Is:0),F=4*(this._cubeSize-b);_a(t,C,F,3*b,2*b),l.setRenderTarget(t),l.render(f,Zo)}}function iA(n){const e=[],t=[],i=[];let s=n;const r=n-Is+1+gf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Is?l=gf[a-n+Is-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,h=1,w=new Float32Array(g*_*p),y=new Float32Array(m*_*p),b=new Float32Array(h*_*p);for(let F=0;F<p;F++){const L=F%3*2/3-1,H=F>2?0:-1,S=[L,H,0,L+2/3,H,0,L+2/3,H+1,0,L,H,0,L+2/3,H+1,0,L,H+1,0];w.set(S,g*_*F),y.set(d,m*_*F);const T=[F,F,F,F,F,F];b.set(T,h*_*F)}const C=new ds;C.setAttribute("position",new Yn(w,g)),C.setAttribute("uv",new Yn(y,m)),C.setAttribute("faceIndex",new Yn(b,h)),e.push(C),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sf(n,e,t){const i=new us(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sA(n,e,t){const i=new Float32Array(es),s=new Y(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

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
	`}function rA(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rl||l===Pl,u=l===Ws||l===$s;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new xf(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new xf(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function aA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function oA(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const w=p.array;g=p.version;for(let y=0,b=w.length;y<b;y+=3){const C=w[y+0],F=w[y+1],L=w[y+2];d.push(C,F,F,L,L,C)}}else if(_!==void 0){const w=_.array;g=_.version;for(let y=0,b=w.length/3-1;y<b;y+=3){const C=y+0,F=y+1,L=y+2;d.push(C,F,F,L,L,C)}}else return;const m=new(Kh(d)?sp:ip)(d,1);m.version=g;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function lA(n,e,t,i){const s=i.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){n.drawElements(r,p,o,d*l),t.update(p,r,1)}function f(d,p,_){if(_===0)return;let g,m;if(s)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,d*l,_),t.update(p,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function cA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function uA(n,e){return n[0]-e[0]}function fA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function dA(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new St,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let q=function(){oe.dispose(),r.delete(u),u.removeEventListener("dispose",q)};var p=q;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],H=u.morphAttributes.color||[];let S=0;y===!0&&(S=1),b===!0&&(S=2),C===!0&&(S=3);let T=u.attributes.position.count*S,J=1;T>e.maxTextureSize&&(J=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const $=new Float32Array(T*J*4*g),oe=new Qh($,T,J,g);oe.type=Ti,oe.needsUpdate=!0;const D=S*4;for(let z=0;z<g;z++){const X=F[z],re=L[z],le=H[z],de=T*J*4*z;for(let G=0;G<X.count;G++){const Z=G*D;y===!0&&(a.fromBufferAttribute(X,G),$[de+Z+0]=a.x,$[de+Z+1]=a.y,$[de+Z+2]=a.z,$[de+Z+3]=0),b===!0&&(a.fromBufferAttribute(re,G),$[de+Z+4]=a.x,$[de+Z+5]=a.y,$[de+Z+6]=a.z,$[de+Z+7]=0),C===!0&&(a.fromBufferAttribute(le,G),$[de+Z+8]=a.x,$[de+Z+9]=a.y,$[de+Z+10]=a.z,$[de+Z+11]=le.itemSize===4?a.w:1)}}m={count:g,texture:oe,size:new dt(T,J)},r.set(u,m),u.addEventListener("dispose",q)}let h=0;for(let y=0;y<d.length;y++)h+=d[y];const w=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",w),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let b=0;b<_;b++)g[b]=[b,0];i[u.id]=g}for(let b=0;b<_;b++){const C=g[b];C[0]=b,C[1]=d[b]}g.sort(fA);for(let b=0;b<8;b++)b<_&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(uA);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const C=o[b],F=C[0],L=C[1];F!==Number.MAX_SAFE_INTEGER&&L?(m&&u.getAttribute("morphTarget"+b)!==m[F]&&u.setAttribute("morphTarget"+b,m[F]),h&&u.getAttribute("morphNormal"+b)!==h[F]&&u.setAttribute("morphNormal"+b,h[F]),s[b]=L,w+=L):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const y=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function hA(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const cp=new cn,up=new Qh,fp=new JE,dp=new op,bf=[],Tf=[],Af=new Float32Array(16),wf=new Float32Array(9),Cf=new Float32Array(4);function Qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function oo(n,e){let t=Tf[e];t===void 0&&(t=new Int32Array(e),Tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function _A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function vA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;Cf.set(i),n.uniformMatrix2fv(this.addr,!1,Cf),Ot(t,i)}}function MA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;wf.set(i),n.uniformMatrix3fv(this.addr,!1,wf),Ot(t,i)}}function xA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;Af.set(i),n.uniformMatrix4fv(this.addr,!1,Af),Ot(t,i)}}function SA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function EA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function bA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function TA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function wA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function RA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||cp,s)}function PA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fp,s)}function LA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dp,s)}function DA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||up,s)}function IA(n){switch(n){case 5126:return pA;case 35664:return mA;case 35665:return _A;case 35666:return gA;case 35674:return vA;case 35675:return MA;case 35676:return xA;case 5124:case 35670:return SA;case 35667:case 35671:return yA;case 35668:case 35672:return EA;case 35669:case 35673:return bA;case 5125:return TA;case 36294:return AA;case 36295:return wA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return DA}}function UA(n,e){n.uniform1fv(this.addr,e)}function FA(n,e){const t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function kA(n,e){const t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function NA(n,e){const t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function OA(n,e){const t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BA(n,e){const t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HA(n,e){const t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zA(n,e){n.uniform1iv(this.addr,e)}function GA(n,e){n.uniform2iv(this.addr,e)}function VA(n,e){n.uniform3iv(this.addr,e)}function WA(n,e){n.uniform4iv(this.addr,e)}function $A(n,e){n.uniform1uiv(this.addr,e)}function qA(n,e){n.uniform2uiv(this.addr,e)}function XA(n,e){n.uniform3uiv(this.addr,e)}function YA(n,e){n.uniform4uiv(this.addr,e)}function jA(n,e,t){const i=this.cache,s=e.length,r=oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||cp,r[a])}function KA(n,e,t){const i=this.cache,s=e.length,r=oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fp,r[a])}function ZA(n,e,t){const i=this.cache,s=e.length,r=oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||dp,r[a])}function JA(n,e,t){const i=this.cache,s=e.length,r=oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||up,r[a])}function QA(n){switch(n){case 5126:return UA;case 35664:return FA;case 35665:return kA;case 35666:return NA;case 35674:return OA;case 35675:return BA;case 35676:return HA;case 5124:case 35670:return zA;case 35667:case 35671:return GA;case 35668:case 35672:return VA;case 35669:case 35673:return WA;case 5125:return $A;case 36294:return qA;case 36295:return XA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return JA}}class ew{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=IA(t.type)}}class tw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=QA(t.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Rf(n,e){n.seq.push(e),n.map[e.id]=e}function iw(n,e,t){const i=n.name,s=i.length;for(tl.lastIndex=0;;){const r=tl.exec(i),a=tl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rf(t,c===void 0?new ew(o,n,e):new tw(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new nw(o),Rf(t,f)),t=f}}}class Ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);iw(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Pf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sw=37297;let rw=0;function aw(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function ow(n){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(n);let i;switch(e===t?i="":e===Na&&t===ka?i="LinearDisplayP3ToLinearSRGB":e===ka&&t===Na&&(i="LinearSRGBToLinearDisplayP3"),n){case li:case ro:return[i,"LinearTransferOETF"];case $t:case Mc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+aw(n.getShaderSource(e),a)}else return s}function lw(n,e){const t=ow(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cw(n,e){let t;switch(e){case xE:t="Linear";break;case SE:t="Reinhard";break;case yE:t="OptimizedCineon";break;case EE:t="ACESFilmic";break;case bE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function uw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function fw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function hr(n){return n!==""}function Df(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(hw,mw)}const pw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mw(n,e){let t=tt[e];if(t===void 0){const i=pw.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(n){return n.replace(_w,gw)}function gw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Mw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case $s:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function Sw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gc:e="ENVMAP_BLENDING_MULTIPLY";break;case vE:e="ENVMAP_BLENDING_MIX";break;case ME:e="ENVMAP_BLENDING_ADD";break}return e}function yw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ew(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vw(t),c=Mw(t),u=xw(t),f=Sw(t),d=yw(t),p=t.isWebGL2?"":uw(t),_=fw(r),g=s.createProgram();let m,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hr).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hr).join(`
`),h.length>0&&(h+=`
`)):(m=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),h=[p,Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,lw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=kl(a),a=Df(a,t),a=If(a,t),o=kl(o),o=Df(o,t),o=If(o,t),a=Uf(a),o=Uf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=w+m+a,b=w+h+o,C=Pf(s,s.VERTEX_SHADER,y),F=Pf(s,s.FRAGMENT_SHADER,b);s.attachShader(g,C),s.attachShader(g,F),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function L(J){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(g).trim(),oe=s.getShaderInfoLog(C).trim(),D=s.getShaderInfoLog(F).trim();let q=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,C,F);else{const X=Lf(s,C,"vertex"),re=Lf(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+X+`
`+re)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(oe===""||D==="")&&(z=!1);z&&(J.diagnostics={runnable:q,programLog:$,vertexShader:{log:oe,prefix:m},fragmentShader:{log:D,prefix:h}})}s.deleteShader(C),s.deleteShader(F),H=new Ta(s,g),S=dw(s,g)}let H;this.getUniforms=function(){return H===void 0&&L(this),H};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(g,sw)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=F,this}let bw=0;class Tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Aw(e),t.set(e,i)),i}}class Aw{constructor(e){this.id=bw++,this.code=e,this.usedTimes=0}}function ww(n,e,t,i,s,r,a){const o=new Sc,l=new Tw,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,T,J,$,oe){const D=$.fog,q=oe.geometry,z=S.isMeshStandardMaterial?$.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),re=X&&X.mapping===so?X.image.height:null,le=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,G=de!==void 0?de.length:0;let Z=0;q.morphAttributes.position!==void 0&&(Z=1),q.morphAttributes.normal!==void 0&&(Z=2),q.morphAttributes.color!==void 0&&(Z=3);let xe,Se,ye,Le;if(le){const mt=Wn[le];xe=mt.vertexShader,Se=mt.fragmentShader}else xe=S.vertexShader,Se=S.fragmentShader,l.update(S),ye=l.getVertexShaderID(S),Le=l.getFragmentShaderID(S);const $e=n.getRenderTarget(),Ne=oe.isInstancedMesh===!0,Oe=!!S.map,Fe=!!S.matcap,Ce=!!X,x=!!S.aoMap,k=!!S.lightMap,R=!!S.bumpMap,V=!!S.normalMap,W=!!S.displacementMap,ie=!!S.emissiveMap,me=!!S.metalnessMap,ae=!!S.roughnessMap,_e=S.anisotropy>0,fe=S.clearcoat>0,Te=S.iridescence>0,E=S.sheen>0,v=S.transmission>0,O=_e&&!!S.anisotropyMap,ce=fe&&!!S.clearcoatMap,ue=fe&&!!S.clearcoatNormalMap,he=fe&&!!S.clearcoatRoughnessMap,Ee=Te&&!!S.iridescenceMap,ve=Te&&!!S.iridescenceThicknessMap,Ae=E&&!!S.sheenColorMap,Ve=E&&!!S.sheenRoughnessMap,nt=!!S.specularMap,Me=!!S.specularColorMap,je=!!S.specularIntensityMap,Be=v&&!!S.transmissionMap,ze=v&&!!S.thicknessMap,Ge=!!S.gradientMap,Ie=!!S.alphaMap,rt=S.alphaTest>0,B=!!S.alphaHash,I=!!S.extensions,U=!!q.attributes.uv1,N=!!q.attributes.uv2,te=!!q.attributes.uv3;let Re=Pi;return S.toneMapped&&($e===null||$e.isXRRenderTarget===!0)&&(Re=n.toneMapping),{isWebGL2:u,shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:xe,fragmentShader:Se,defines:S.defines,customVertexShaderID:ye,customFragmentShaderID:Le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Ne,instancingColor:Ne&&oe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:$e===null?n.outputColorSpace:$e.isXRRenderTarget===!0?$e.texture.colorSpace:li,map:Oe,matcap:Fe,envMap:Ce,envMapMode:Ce&&X.mapping,envMapCubeUVHeight:re,aoMap:x,lightMap:k,bumpMap:R,normalMap:V,displacementMap:d&&W,emissiveMap:ie,normalMapObjectSpace:V&&S.normalMapType===NE,normalMapTangentSpace:V&&S.normalMapType===jh,metalnessMap:me,roughnessMap:ae,anisotropy:_e,anisotropyMap:O,clearcoat:fe,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:he,iridescence:Te,iridescenceMap:Ee,iridescenceThicknessMap:ve,sheen:E,sheenColorMap:Ae,sheenRoughnessMap:Ve,specularMap:nt,specularColorMap:Me,specularIntensityMap:je,transmission:v,transmissionMap:Be,thicknessMap:ze,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===Os,alphaMap:Ie,alphaTest:rt,alphaHash:B,combine:S.combine,mapUv:Oe&&g(S.map.channel),aoMapUv:x&&g(S.aoMap.channel),lightMapUv:k&&g(S.lightMap.channel),bumpMapUv:R&&g(S.bumpMap.channel),normalMapUv:V&&g(S.normalMap.channel),displacementMapUv:W&&g(S.displacementMap.channel),emissiveMapUv:ie&&g(S.emissiveMap.channel),metalnessMapUv:me&&g(S.metalnessMap.channel),roughnessMapUv:ae&&g(S.roughnessMap.channel),anisotropyMapUv:O&&g(S.anisotropyMap.channel),clearcoatMapUv:ce&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&g(S.sheenRoughnessMap.channel),specularMapUv:nt&&g(S.specularMap.channel),specularColorMapUv:Me&&g(S.specularColorMap.channel),specularIntensityMapUv:je&&g(S.specularIntensityMap.channel),transmissionMapUv:Be&&g(S.transmissionMap.channel),thicknessMapUv:ze&&g(S.thicknessMap.channel),alphaMapUv:Ie&&g(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(V||_e),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:U,vertexUv2s:N,vertexUv3s:te,pointsUvs:oe.isPoints===!0&&!!q.attributes.uv&&(Oe||Ie),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:oe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&J.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===an,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:I&&S.extensions.derivatives===!0,extensionFragDepth:I&&S.extensions.fragDepth===!0,extensionDrawBuffers:I&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const J in S.defines)T.push(J),T.push(S.defines[J]);return S.isRawShaderMaterial===!1&&(w(T,S),y(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function w(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function y(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function b(S){const T=_[S.type];let J;if(T){const $=Wn[T];J=f1.clone($.uniforms)}else J=S.uniforms;return J}function C(S,T){let J;for(let $=0,oe=c.length;$<oe;$++){const D=c[$];if(D.cacheKey===T){J=D,++J.usedTimes;break}}return J===void 0&&(J=new Ew(n,T,S,r),c.push(J)),J}function F(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:C,releaseProgram:F,releaseShaderCache:L,programs:c,dispose:H}}function Cw(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Rw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,p,_,g,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function o(f,d,p,_,g,m){const h=a(f,d,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,d,p,_,g,m){const h=a(f,d,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Rw),i.length>1&&i.sort(d||kf),s.length>1&&s.sort(d||kf)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Pw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Nf,n.set(i,[a])):s>=r.length?(a=new Nf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ft};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function Dw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Iw=0;function Uw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fw(n,e){const t=new Lw,i=Dw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new Y);const r=new Y,a=new It,o=new It;function l(u,f){let d=0,p=0,_=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let g=0,m=0,h=0,w=0,y=0,b=0,C=0,F=0,L=0,H=0,S=0;u.sort(Uw);const T=f===!0?Math.PI:1;for(let $=0,oe=u.length;$<oe;$++){const D=u[$],q=D.color,z=D.intensity,X=D.distance,re=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=q.r*z*T,p+=q.g*z*T,_+=q.b*z*T;else if(D.isLightProbe){for(let le=0;le<9;le++)s.probe[le].addScaledVector(D.sh.coefficients[le],z);S++}else if(D.isDirectionalLight){const le=t.get(D);if(le.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const de=D.shadow,G=i.get(D);G.shadowBias=de.bias,G.shadowNormalBias=de.normalBias,G.shadowRadius=de.radius,G.shadowMapSize=de.mapSize,s.directionalShadow[g]=G,s.directionalShadowMap[g]=re,s.directionalShadowMatrix[g]=D.shadow.matrix,b++}s.directional[g]=le,g++}else if(D.isSpotLight){const le=t.get(D);le.position.setFromMatrixPosition(D.matrixWorld),le.color.copy(q).multiplyScalar(z*T),le.distance=X,le.coneCos=Math.cos(D.angle),le.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),le.decay=D.decay,s.spot[h]=le;const de=D.shadow;if(D.map&&(s.spotLightMap[L]=D.map,L++,de.updateMatrices(D),D.castShadow&&H++),s.spotLightMatrix[h]=de.matrix,D.castShadow){const G=i.get(D);G.shadowBias=de.bias,G.shadowNormalBias=de.normalBias,G.shadowRadius=de.radius,G.shadowMapSize=de.mapSize,s.spotShadow[h]=G,s.spotShadowMap[h]=re,F++}h++}else if(D.isRectAreaLight){const le=t.get(D);le.color.copy(q).multiplyScalar(z),le.halfWidth.set(D.width*.5,0,0),le.halfHeight.set(0,D.height*.5,0),s.rectArea[w]=le,w++}else if(D.isPointLight){const le=t.get(D);if(le.color.copy(D.color).multiplyScalar(D.intensity*T),le.distance=D.distance,le.decay=D.decay,D.castShadow){const de=D.shadow,G=i.get(D);G.shadowBias=de.bias,G.shadowNormalBias=de.normalBias,G.shadowRadius=de.radius,G.shadowMapSize=de.mapSize,G.shadowCameraNear=de.camera.near,G.shadowCameraFar=de.camera.far,s.pointShadow[m]=G,s.pointShadowMap[m]=re,s.pointShadowMatrix[m]=D.shadow.matrix,C++}s.point[m]=le,m++}else if(D.isHemisphereLight){const le=t.get(D);le.skyColor.copy(D.color).multiplyScalar(z*T),le.groundColor.copy(D.groundColor).multiplyScalar(z*T),s.hemi[y]=le,y++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;const J=s.hash;(J.directionalLength!==g||J.pointLength!==m||J.spotLength!==h||J.rectAreaLength!==w||J.hemiLength!==y||J.numDirectionalShadows!==b||J.numPointShadows!==C||J.numSpotShadows!==F||J.numSpotMaps!==L||J.numLightProbes!==S)&&(s.directional.length=g,s.spot.length=h,s.rectArea.length=w,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=F+L-H,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=S,J.directionalLength=g,J.pointLength=m,J.spotLength=h,J.rectAreaLength=w,J.hemiLength=y,J.numDirectionalShadows=b,J.numPointShadows=C,J.numSpotShadows=F,J.numSpotMaps=L,J.numLightProbes=S,s.version=Iw++)}function c(u,f){let d=0,p=0,_=0,g=0,m=0;const h=f.matrixWorldInverse;for(let w=0,y=u.length;w<y;w++){const b=u[w];if(b.isDirectionalLight){const C=s.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(h),d++}else if(b.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(h),_++}else if(b.isRectAreaLight){const C=s.rectArea[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const C=s.point[p];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),p++}else if(b.isHemisphereLight){const C=s.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:s}}function Of(n,e){const t=new Fw(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(f){i.push(f)}function o(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function kw(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Of(n,e),t.set(r,[l])):a>=o.length?(l=new Of(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class Nw extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bw=`void main() {
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
}`;function zw(n,e,t){let i=new yc;const s=new dt,r=new dt,a=new St,o=new Nw({depthPacking:kE}),l=new Ow,c={},u=t.maxTextureSize,f={[Ii]:ln,[ln]:Ii,[an]:an},d=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Bw,fragmentShader:Hw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ds;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Wt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let h=this.type;this.render=function(C,F,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const H=n.getRenderTarget(),S=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Ri),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const $=h!==ni&&this.type===ni,oe=h===ni&&this.type!==ni;for(let D=0,q=C.length;D<q;D++){const z=C[D],X=z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const re=X.getFrameExtents();if(s.multiply(re),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,X.mapSize.y=r.y)),X.map===null||$===!0||oe===!0){const de=this.type!==ni?{minFilter:tn,magFilter:tn}:{};X.map!==null&&X.map.dispose(),X.map=new us(s.x,s.y,de),X.map.texture.name=z.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const le=X.getViewportCount();for(let de=0;de<le;de++){const G=X.getViewport(de);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),J.viewport(a),X.updateMatrices(z,de),i=X.getFrustum(),b(F,L,X.camera,z,this.type)}X.isPointLightShadow!==!0&&this.type===ni&&w(X,L),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(H,S,T)};function w(C,F){const L=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new us(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(F,null,L,d,g,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(F,null,L,p,g,null)}function y(C,F,L,H){let S=null;const T=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)S=T;else if(S=L.isPointLight===!0?l:o,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const J=S.uuid,$=F.uuid;let oe=c[J];oe===void 0&&(oe={},c[J]=oe);let D=oe[$];D===void 0&&(D=S.clone(),oe[$]=D),S=D}if(S.visible=F.visible,S.wireframe=F.wireframe,H===ni?S.side=F.shadowSide!==null?F.shadowSide:F.side:S.side=F.shadowSide!==null?F.shadowSide:f[F.side],S.alphaMap=F.alphaMap,S.alphaTest=F.alphaTest,S.map=F.map,S.clipShadows=F.clipShadows,S.clippingPlanes=F.clippingPlanes,S.clipIntersection=F.clipIntersection,S.displacementMap=F.displacementMap,S.displacementScale=F.displacementScale,S.displacementBias=F.displacementBias,S.wireframeLinewidth=F.wireframeLinewidth,S.linewidth=F.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const J=n.properties.get(S);J.light=L}return S}function b(C,F,L,H,S){if(C.visible===!1)return;if(C.layers.test(F.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const $=e.update(C),oe=C.material;if(Array.isArray(oe)){const D=$.groups;for(let q=0,z=D.length;q<z;q++){const X=D[q],re=oe[X.materialIndex];if(re&&re.visible){const le=y(C,re,H,S);n.renderBufferDirect(L,null,$,le,C,X)}}}else if(oe.visible){const D=y(C,oe,H,S);n.renderBufferDirect(L,null,$,D,C,null)}}const J=C.children;for(let $=0,oe=J.length;$<oe;$++)b(J[$],F,L,H,S)}}function Gw(n,e,t){const i=t.isWebGL2;function s(){let B=!1;const I=new St;let U=null;const N=new St(0,0,0,0);return{setMask:function(te){U!==te&&!B&&(n.colorMask(te,te,te,te),U=te)},setLocked:function(te){B=te},setClear:function(te,Re,ke,mt,Kt){Kt===!0&&(te*=mt,Re*=mt,ke*=mt),I.set(te,Re,ke,mt),N.equals(I)===!1&&(n.clearColor(te,Re,ke,mt),N.copy(I))},reset:function(){B=!1,U=null,N.set(-1,0,0,0)}}}function r(){let B=!1,I=null,U=null,N=null;return{setTest:function(te){te?Oe(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(te){I!==te&&!B&&(n.depthMask(te),I=te)},setFunc:function(te){if(U!==te){switch(te){case fE:n.depthFunc(n.NEVER);break;case dE:n.depthFunc(n.ALWAYS);break;case hE:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case pE:n.depthFunc(n.EQUAL);break;case mE:n.depthFunc(n.GEQUAL);break;case _E:n.depthFunc(n.GREATER);break;case gE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}U=te}},setLocked:function(te){B=te},setClear:function(te){N!==te&&(n.clearDepth(te),N=te)},reset:function(){B=!1,I=null,U=null,N=null}}}function a(){let B=!1,I=null,U=null,N=null,te=null,Re=null,ke=null,mt=null,Kt=null;return{setTest:function(ot){B||(ot?Oe(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(ot){I!==ot&&!B&&(n.stencilMask(ot),I=ot)},setFunc:function(ot,Ft,zn){(U!==ot||N!==Ft||te!==zn)&&(n.stencilFunc(ot,Ft,zn),U=ot,N=Ft,te=zn)},setOp:function(ot,Ft,zn){(Re!==ot||ke!==Ft||mt!==zn)&&(n.stencilOp(ot,Ft,zn),Re=ot,ke=Ft,mt=zn)},setLocked:function(ot){B=ot},setClear:function(ot){Kt!==ot&&(n.clearStencil(ot),Kt=ot)},reset:function(){B=!1,I=null,U=null,N=null,te=null,Re=null,ke=null,mt=null,Kt=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,h=!1,w=null,y=null,b=null,C=null,F=null,L=null,H=null,S=new ft(0,0,0),T=0,J=!1,$=null,oe=null,D=null,q=null,z=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,le=0;const de=n.getParameter(n.VERSION);de.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(de)[1]),re=le>=1):de.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),re=le>=2);let G=null,Z={};const xe=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),ye=new St().fromArray(xe),Le=new St().fromArray(Se);function $e(B,I,U,N){const te=new Uint8Array(4),Re=n.createTexture();n.bindTexture(B,Re),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<U;ke++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(I,0,n.RGBA,1,1,N,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(I+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return Re}const Ne={};Ne[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(n.DEPTH_TEST),l.setFunc(Ua),me(!1),ae(vu),Oe(n.CULL_FACE),W(Ri);function Oe(B){d[B]!==!0&&(n.enable(B),d[B]=!0)}function Fe(B){d[B]!==!1&&(n.disable(B),d[B]=!1)}function Ce(B,I){return p[B]!==I?(n.bindFramebuffer(B,I),p[B]=I,i&&(B===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=I),B===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=I)),!0):!1}function x(B,I){let U=g,N=!1;if(B)if(U=_.get(I),U===void 0&&(U=[],_.set(I,U)),B.isWebGLMultipleRenderTargets){const te=B.texture;if(U.length!==te.length||U[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,ke=te.length;Re<ke;Re++)U[Re]=n.COLOR_ATTACHMENT0+Re;U.length=te.length,N=!0}}else U[0]!==n.COLOR_ATTACHMENT0&&(U[0]=n.COLOR_ATTACHMENT0,N=!0);else U[0]!==n.BACK&&(U[0]=n.BACK,N=!0);N&&(t.isWebGL2?n.drawBuffers(U):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}function k(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const R={[Qi]:n.FUNC_ADD,[Ky]:n.FUNC_SUBTRACT,[Zy]:n.FUNC_REVERSE_SUBTRACT};if(i)R[yu]=n.MIN,R[Eu]=n.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(R[yu]=B.MIN_EXT,R[Eu]=B.MAX_EXT)}const V={[Jy]:n.ZERO,[Qy]:n.ONE,[eE]:n.SRC_COLOR,[wl]:n.SRC_ALPHA,[aE]:n.SRC_ALPHA_SATURATE,[sE]:n.DST_COLOR,[nE]:n.DST_ALPHA,[tE]:n.ONE_MINUS_SRC_COLOR,[Cl]:n.ONE_MINUS_SRC_ALPHA,[rE]:n.ONE_MINUS_DST_COLOR,[iE]:n.ONE_MINUS_DST_ALPHA,[oE]:n.CONSTANT_COLOR,[lE]:n.ONE_MINUS_CONSTANT_COLOR,[cE]:n.CONSTANT_ALPHA,[uE]:n.ONE_MINUS_CONSTANT_ALPHA};function W(B,I,U,N,te,Re,ke,mt,Kt,ot){if(B===Ri){h===!0&&(Fe(n.BLEND),h=!1);return}if(h===!1&&(Oe(n.BLEND),h=!0),B!==jy){if(B!==w||ot!==J){if((y!==Qi||F!==Qi)&&(n.blendEquation(n.FUNC_ADD),y=Qi,F=Qi),ot)switch(B){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.ONE,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,C=null,L=null,H=null,S.set(0,0,0),T=0,w=B,J=ot}return}te=te||I,Re=Re||U,ke=ke||N,(I!==y||te!==F)&&(n.blendEquationSeparate(R[I],R[te]),y=I,F=te),(U!==b||N!==C||Re!==L||ke!==H)&&(n.blendFuncSeparate(V[U],V[N],V[Re],V[ke]),b=U,C=N,L=Re,H=ke),(mt.equals(S)===!1||Kt!==T)&&(n.blendColor(mt.r,mt.g,mt.b,Kt),S.copy(mt),T=Kt),w=B,J=!1}function ie(B,I){B.side===an?Fe(n.CULL_FACE):Oe(n.CULL_FACE);let U=B.side===ln;I&&(U=!U),me(U),B.blending===Os&&B.transparent===!1?W(Ri):W(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const N=B.stencilWrite;c.setTest(N),N&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(B){$!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),$=B)}function ae(B){B!==qy?(Oe(n.CULL_FACE),B!==oe&&(B===vu?n.cullFace(n.BACK):B===Xy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),oe=B}function _e(B){B!==D&&(re&&n.lineWidth(B),D=B)}function fe(B,I,U){B?(Oe(n.POLYGON_OFFSET_FILL),(q!==I||z!==U)&&(n.polygonOffset(I,U),q=I,z=U)):Fe(n.POLYGON_OFFSET_FILL)}function Te(B){B?Oe(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function E(B){B===void 0&&(B=n.TEXTURE0+X-1),G!==B&&(n.activeTexture(B),G=B)}function v(B,I,U){U===void 0&&(G===null?U=n.TEXTURE0+X-1:U=G);let N=Z[U];N===void 0&&(N={type:void 0,texture:void 0},Z[U]=N),(N.type!==B||N.texture!==I)&&(G!==U&&(n.activeTexture(U),G=U),n.bindTexture(B,I||Ne[B]),N.type=B,N.texture=I)}function O(){const B=Z[G];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function je(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(B){ye.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ye.copy(B))}function ze(B){Le.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Le.copy(B))}function Ge(B,I){let U=f.get(I);U===void 0&&(U=new WeakMap,f.set(I,U));let N=U.get(B);N===void 0&&(N=n.getUniformBlockIndex(I,B.name),U.set(B,N))}function Ie(B,I){const N=f.get(I).get(B);u.get(I)!==N&&(n.uniformBlockBinding(I,N,B.__bindingPointIndex),u.set(I,N))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},G=null,Z={},p={},_=new WeakMap,g=[],m=null,h=!1,w=null,y=null,b=null,C=null,F=null,L=null,H=null,S=new ft(0,0,0),T=0,J=!1,$=null,oe=null,D=null,q=null,z=null,ye.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Oe,disable:Fe,bindFramebuffer:Ce,drawBuffers:x,useProgram:k,setBlending:W,setMaterial:ie,setFlipSided:me,setCullFace:ae,setLineWidth:_e,setPolygonOffset:fe,setScissorTest:Te,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:ce,compressedTexImage3D:ue,texImage2D:Me,texImage3D:je,updateUBOMapping:Ge,uniformBlockBinding:Ie,texStorage2D:Ve,texStorage3D:nt,texSubImage2D:he,texSubImage3D:Ee,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ae,scissor:Be,viewport:ze,reset:rt}}function Vw(n,e,t,i,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(E,v){return h?new OffscreenCanvas(E,v):Rr("canvas")}function y(E,v,O,ce){let ue=1;if((E.width>ce||E.height>ce)&&(ue=ce/Math.max(E.width,E.height)),ue<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const he=v?Fl:Math.floor,Ee=he(ue*E.width),ve=he(ue*E.height);g===void 0&&(g=w(Ee,ve));const Ae=O?w(Ee,ve):g;return Ae.width=Ee,Ae.height=ve,Ae.getContext("2d").drawImage(E,0,0,Ee,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ee+"x"+ve+")."),Ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return Qu(E.width)&&Qu(E.height)}function C(E){return o?!1:E.wrapS!==Un||E.wrapT!==Un||E.minFilter!==tn&&E.minFilter!==bn}function F(E,v){return E.generateMipmaps&&v&&E.minFilter!==tn&&E.minFilter!==bn}function L(E){n.generateMipmap(E)}function H(E,v,O,ce,ue=!1){if(o===!1)return v;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he=v;if(v===n.RED&&(O===n.FLOAT&&(he=n.R32F),O===n.HALF_FLOAT&&(he=n.R16F),O===n.UNSIGNED_BYTE&&(he=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(he=n.R8UI),O===n.UNSIGNED_SHORT&&(he=n.R16UI),O===n.UNSIGNED_INT&&(he=n.R32UI),O===n.BYTE&&(he=n.R8I),O===n.SHORT&&(he=n.R16I),O===n.INT&&(he=n.R32I)),v===n.RG&&(O===n.FLOAT&&(he=n.RG32F),O===n.HALF_FLOAT&&(he=n.RG16F),O===n.UNSIGNED_BYTE&&(he=n.RG8)),v===n.RGBA){const Ee=ue?Fa:ht.getTransfer(ce);O===n.FLOAT&&(he=n.RGBA32F),O===n.HALF_FLOAT&&(he=n.RGBA16F),O===n.UNSIGNED_BYTE&&(he=Ee===_t?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function S(E,v,O){return F(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==tn&&E.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){return E===tn||E===bu||E===Ao?n.NEAREST:n.LINEAR}function J(E){const v=E.target;v.removeEventListener("dispose",J),oe(v),v.isVideoTexture&&_.delete(v)}function $(E){const v=E.target;v.removeEventListener("dispose",$),q(v)}function oe(E){const v=i.get(E);if(v.__webglInit===void 0)return;const O=E.source,ce=m.get(O);if(ce){const ue=ce[v.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&D(E),Object.keys(ce).length===0&&m.delete(O)}i.remove(E)}function D(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const O=E.source,ce=m.get(O);delete ce[v.__cacheKey],a.memory.textures--}function q(E){const v=E.texture,O=i.get(E),ce=i.get(v);if(ce.__webglTexture!==void 0&&(n.deleteTexture(ce.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(O.__webglFramebuffer[ue]))for(let he=0;he<O.__webglFramebuffer[ue].length;he++)n.deleteFramebuffer(O.__webglFramebuffer[ue][he]);else n.deleteFramebuffer(O.__webglFramebuffer[ue]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[ue])}else{if(Array.isArray(O.__webglFramebuffer))for(let ue=0;ue<O.__webglFramebuffer.length;ue++)n.deleteFramebuffer(O.__webglFramebuffer[ue]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ue=0;ue<O.__webglColorRenderbuffer.length;ue++)O.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[ue]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ue=0,he=v.length;ue<he;ue++){const Ee=i.get(v[ue]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),a.memory.textures--),i.remove(v[ue])}i.remove(v),i.remove(E)}let z=0;function X(){z=0}function re(){const E=z;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),z+=1,E}function le(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function de(E,v){const O=i.get(E);if(E.isVideoTexture&&fe(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const ce=E.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(O,E,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function G(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){Oe(O,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function Z(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){Oe(O,E,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function xe(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){Fe(O,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const Se={[Ll]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},ye={[tn]:n.NEAREST,[bu]:n.NEAREST_MIPMAP_NEAREST,[Ao]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[TE]:n.LINEAR_MIPMAP_NEAREST,[wr]:n.LINEAR_MIPMAP_LINEAR},Le={[OE]:n.NEVER,[$E]:n.ALWAYS,[BE]:n.LESS,[zE]:n.LEQUAL,[HE]:n.EQUAL,[WE]:n.GEQUAL,[GE]:n.GREATER,[VE]:n.NOTEQUAL};function $e(E,v,O){if(O?(n.texParameteri(E,n.TEXTURE_WRAP_S,Se[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Se[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Se[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ye[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ye[v.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Un||v.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,T(v.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==tn&&v.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===tn||v.minFilter!==Ao&&v.minFilter!==wr||v.type===Ti&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Cr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(E,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Ne(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",J));const ce=v.source;let ue=m.get(ce);ue===void 0&&(ue={},m.set(ce,ue));const he=le(v);if(he!==E.__cacheKey){ue[he]===void 0&&(ue[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ue[he].usedTimes++;const Ee=ue[E.__cacheKey];Ee!==void 0&&(ue[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&D(v)),E.__cacheKey=he,E.__webglTexture=ue[he].texture}return O}function Oe(E,v,O){let ce=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ce=n.TEXTURE_3D);const ue=Ne(E,v),he=v.source;t.bindTexture(ce,E.__webglTexture,n.TEXTURE0+O);const Ee=i.get(he);if(he.version!==Ee.__version||ue===!0){t.activeTexture(n.TEXTURE0+O);const ve=ht.getPrimaries(ht.workingColorSpace),Ae=v.colorSpace===Tn?null:ht.getPrimaries(v.colorSpace),Ve=v.colorSpace===Tn||ve===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const nt=C(v)&&b(v.image)===!1;let Me=y(v.image,nt,!1,u);Me=Te(v,Me);const je=b(Me)||o,Be=r.convert(v.format,v.colorSpace);let ze=r.convert(v.type),Ge=H(v.internalFormat,Be,ze,v.colorSpace,v.isVideoTexture);$e(ce,v,je);let Ie;const rt=v.mipmaps,B=o&&v.isVideoTexture!==!0,I=Ee.__version===void 0||ue===!0,U=S(v,Me,je);if(v.isDepthTexture)Ge=n.DEPTH_COMPONENT,o?v.type===Ti?Ge=n.DEPTH_COMPONENT32F:v.type===bi?Ge=n.DEPTH_COMPONENT24:v.type===rs?Ge=n.DEPTH24_STENCIL8:Ge=n.DEPTH_COMPONENT16:v.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===as&&Ge===n.DEPTH_COMPONENT&&v.type!==vc&&v.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=bi,ze=r.convert(v.type)),v.format===qs&&Ge===n.DEPTH_COMPONENT&&(Ge=n.DEPTH_STENCIL,v.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=rs,ze=r.convert(v.type))),I&&(B?t.texStorage2D(n.TEXTURE_2D,1,Ge,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Be,ze,null));else if(v.isDataTexture)if(rt.length>0&&je){B&&I&&t.texStorage2D(n.TEXTURE_2D,U,Ge,rt[0].width,rt[0].height);for(let N=0,te=rt.length;N<te;N++)Ie=rt[N],B?t.texSubImage2D(n.TEXTURE_2D,N,0,0,Ie.width,Ie.height,Be,ze,Ie.data):t.texImage2D(n.TEXTURE_2D,N,Ge,Ie.width,Ie.height,0,Be,ze,Ie.data);v.generateMipmaps=!1}else B?(I&&t.texStorage2D(n.TEXTURE_2D,U,Ge,Me.width,Me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,Be,ze,Me.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Be,ze,Me.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,U,Ge,rt[0].width,rt[0].height,Me.depth);for(let N=0,te=rt.length;N<te;N++)Ie=rt[N],v.format!==Fn?Be!==null?B?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,Ie.width,Ie.height,Me.depth,Be,Ie.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,N,Ge,Ie.width,Ie.height,Me.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?t.texSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,Ie.width,Ie.height,Me.depth,Be,ze,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,N,Ge,Ie.width,Ie.height,Me.depth,0,Be,ze,Ie.data)}else{B&&I&&t.texStorage2D(n.TEXTURE_2D,U,Ge,rt[0].width,rt[0].height);for(let N=0,te=rt.length;N<te;N++)Ie=rt[N],v.format!==Fn?Be!==null?B?t.compressedTexSubImage2D(n.TEXTURE_2D,N,0,0,Ie.width,Ie.height,Be,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,N,Ge,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?t.texSubImage2D(n.TEXTURE_2D,N,0,0,Ie.width,Ie.height,Be,ze,Ie.data):t.texImage2D(n.TEXTURE_2D,N,Ge,Ie.width,Ie.height,0,Be,ze,Ie.data)}else if(v.isDataArrayTexture)B?(I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,U,Ge,Me.width,Me.height,Me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Be,ze,Me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,Me.width,Me.height,Me.depth,0,Be,ze,Me.data);else if(v.isData3DTexture)B?(I&&t.texStorage3D(n.TEXTURE_3D,U,Ge,Me.width,Me.height,Me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Be,ze,Me.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,Me.width,Me.height,Me.depth,0,Be,ze,Me.data);else if(v.isFramebufferTexture){if(I)if(B)t.texStorage2D(n.TEXTURE_2D,U,Ge,Me.width,Me.height);else{let N=Me.width,te=Me.height;for(let Re=0;Re<U;Re++)t.texImage2D(n.TEXTURE_2D,Re,Ge,N,te,0,Be,ze,null),N>>=1,te>>=1}}else if(rt.length>0&&je){B&&I&&t.texStorage2D(n.TEXTURE_2D,U,Ge,rt[0].width,rt[0].height);for(let N=0,te=rt.length;N<te;N++)Ie=rt[N],B?t.texSubImage2D(n.TEXTURE_2D,N,0,0,Be,ze,Ie):t.texImage2D(n.TEXTURE_2D,N,Ge,Be,ze,Ie);v.generateMipmaps=!1}else B?(I&&t.texStorage2D(n.TEXTURE_2D,U,Ge,Me.width,Me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,ze,Me)):t.texImage2D(n.TEXTURE_2D,0,Ge,Be,ze,Me);F(v,je)&&L(ce),Ee.__version=he.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Fe(E,v,O){if(v.image.length!==6)return;const ce=Ne(E,v),ue=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);const he=i.get(ue);if(ue.version!==he.__version||ce===!0){t.activeTexture(n.TEXTURE0+O);const Ee=ht.getPrimaries(ht.workingColorSpace),ve=v.colorSpace===Tn?null:ht.getPrimaries(v.colorSpace),Ae=v.colorSpace===Tn||Ee===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ve=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let N=0;N<6;N++)!Ve&&!nt?Me[N]=y(v.image[N],!1,!0,c):Me[N]=nt?v.image[N].image:v.image[N],Me[N]=Te(v,Me[N]);const je=Me[0],Be=b(je)||o,ze=r.convert(v.format,v.colorSpace),Ge=r.convert(v.type),Ie=H(v.internalFormat,ze,Ge,v.colorSpace),rt=o&&v.isVideoTexture!==!0,B=he.__version===void 0||ce===!0;let I=S(v,je,Be);$e(n.TEXTURE_CUBE_MAP,v,Be);let U;if(Ve){rt&&B&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,Ie,je.width,je.height);for(let N=0;N<6;N++){U=Me[N].mipmaps;for(let te=0;te<U.length;te++){const Re=U[te];v.format!==Fn?ze!==null?rt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,te,0,0,Re.width,Re.height,ze,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,te,Ie,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,te,0,0,Re.width,Re.height,ze,Ge,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,te,Ie,Re.width,Re.height,0,ze,Ge,Re.data)}}}else{U=v.mipmaps,rt&&B&&(U.length>0&&I++,t.texStorage2D(n.TEXTURE_CUBE_MAP,I,Ie,Me[0].width,Me[0].height));for(let N=0;N<6;N++)if(nt){rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Me[N].width,Me[N].height,ze,Ge,Me[N].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Ie,Me[N].width,Me[N].height,0,ze,Ge,Me[N].data);for(let te=0;te<U.length;te++){const ke=U[te].image[N].image;rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,te+1,0,0,ke.width,ke.height,ze,Ge,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,te+1,Ie,ke.width,ke.height,0,ze,Ge,ke.data)}}else{rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ze,Ge,Me[N]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Ie,ze,Ge,Me[N]);for(let te=0;te<U.length;te++){const Re=U[te];rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,te+1,0,0,ze,Ge,Re.image[N]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,te+1,Ie,ze,Ge,Re.image[N])}}}F(v,Be)&&L(n.TEXTURE_CUBE_MAP),he.__version=ue.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ce(E,v,O,ce,ue,he){const Ee=r.convert(O.format,O.colorSpace),ve=r.convert(O.type),Ae=H(O.internalFormat,Ee,ve,O.colorSpace);if(!i.get(v).__hasExternalTextures){const nt=Math.max(1,v.width>>he),Me=Math.max(1,v.height>>he);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,he,Ae,nt,Me,v.depth,0,Ee,ve,null):t.texImage2D(ue,he,Ae,nt,Me,0,Ee,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),_e(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ue,i.get(O).__webglTexture,0,ae(v)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,ue,i.get(O).__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function x(E,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let ce=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||_e(v)){const ue=v.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Ti?ce=n.DEPTH_COMPONENT32F:ue.type===bi&&(ce=n.DEPTH_COMPONENT24));const he=ae(v);_e(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,ce,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ce,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ce,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const ce=ae(v);O&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,v.width,v.height):_e(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const ce=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ue=0;ue<ce.length;ue++){const he=ce[ue],Ee=r.convert(he.format,he.colorSpace),ve=r.convert(he.type),Ae=H(he.internalFormat,Ee,ve,he.colorSpace),Ve=ae(v);O&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ae,v.width,v.height):_e(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,Ae,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function k(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),de(v.depthTexture,0);const ce=i.get(v.depthTexture).__webglTexture,ue=ae(v);if(v.depthTexture.format===as)_e(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(v.depthTexture.format===qs)_e(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function R(E){const v=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");k(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ce]),v.__webglDepthbuffer[ce]=n.createRenderbuffer(),x(v.__webglDepthbuffer[ce],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),x(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(E,v,O){const ce=i.get(E);v!==void 0&&Ce(ce.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&R(E)}function W(E){const v=E.texture,O=i.get(E),ce=i.get(v);E.addEventListener("dispose",$),E.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=v.version,a.memory.textures++);const ue=E.isWebGLCubeRenderTarget===!0,he=E.isWebGLMultipleRenderTargets===!0,Ee=b(E)||o;if(ue){O.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ve]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)O.__webglFramebuffer[ve][Ae]=n.createFramebuffer()}else O.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ve=0;ve<v.mipmaps.length;ve++)O.__webglFramebuffer[ve]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(he)if(s.drawBuffers){const ve=E.texture;for(let Ae=0,Ve=ve.length;Ae<Ve;Ae++){const nt=i.get(ve[Ae]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&_e(E)===!1){const ve=he?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Ve=ve[Ae];O.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Ae]);const nt=r.convert(Ve.format,Ve.colorSpace),Me=r.convert(Ve.type),je=H(Ve.internalFormat,nt,Me,Ve.colorSpace,E.isXRRenderTarget===!0),Be=ae(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,je,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,O.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),x(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),$e(n.TEXTURE_CUBE_MAP,v,Ee);for(let ve=0;ve<6;ve++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)Ce(O.__webglFramebuffer[ve][Ae],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ae);else Ce(O.__webglFramebuffer[ve],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);F(v,Ee)&&L(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const ve=E.texture;for(let Ae=0,Ve=ve.length;Ae<Ve;Ae++){const nt=ve[Ae],Me=i.get(nt);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),$e(n.TEXTURE_2D,nt,Ee),Ce(O.__webglFramebuffer,E,nt,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),F(nt,Ee)&&L(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ve=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,ce.__webglTexture),$e(ve,v,Ee),o&&v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)Ce(O.__webglFramebuffer[Ae],E,v,n.COLOR_ATTACHMENT0,ve,Ae);else Ce(O.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,ve,0);F(v,Ee)&&L(ve),t.unbindTexture()}E.depthBuffer&&R(E)}function ie(E){const v=b(E)||o,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ce=0,ue=O.length;ce<ue;ce++){const he=O[ce];if(F(he,v)){const Ee=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(he).__webglTexture;t.bindTexture(Ee,ve),L(Ee),t.unbindTexture()}}}function me(E){if(o&&E.samples>0&&_e(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,ce=E.height;let ue=n.COLOR_BUFFER_BIT;const he=[],Ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(E),Ae=E.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Ve=0;Ve<v.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ve=0;Ve<v.length;Ve++){he.push(n.COLOR_ATTACHMENT0+Ve),E.depthBuffer&&he.push(Ee);const nt=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(nt===!1&&(E.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),Ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ve]),nt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ee])),Ae){const Me=i.get(v[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,O,ce,0,0,O,ce,ue,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Ve=0;Ve<v.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ve]);const nt=i.get(v[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function ae(E){return Math.min(f,E.samples)}function _e(E){const v=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function fe(E){const v=a.render.frame;_.get(E)!==v&&(_.set(E,v),E.update())}function Te(E,v){const O=E.colorSpace,ce=E.format,ue=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Il||O!==li&&O!==Tn&&(ht.getTransfer(O)===_t?o===!1?e.has("EXT_sRGB")===!0&&ce===Fn?(E.format=Il,E.minFilter=bn,E.generateMipmaps=!1):v=Zh.sRGBToLinear(v):(ce!==Fn||ue!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=re,this.resetTextureUnits=X,this.setTexture2D=de,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=xe,this.rebindTextures=V,this.setupRenderTarget=W,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=_e}function Ww(n,e,t){const i=t.isWebGL2;function s(r,a=Tn){let o;const l=ht.getTransfer(a);if(r===Li)return n.UNSIGNED_BYTE;if(r===Vh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Wh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===AE)return n.BYTE;if(r===wE)return n.SHORT;if(r===vc)return n.UNSIGNED_SHORT;if(r===Gh)return n.INT;if(r===bi)return n.UNSIGNED_INT;if(r===Ti)return n.FLOAT;if(r===Cr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===CE)return n.ALPHA;if(r===Fn)return n.RGBA;if(r===RE)return n.LUMINANCE;if(r===PE)return n.LUMINANCE_ALPHA;if(r===as)return n.DEPTH_COMPONENT;if(r===qs)return n.DEPTH_STENCIL;if(r===Il)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===LE)return n.RED;if(r===$h)return n.RED_INTEGER;if(r===DE)return n.RG;if(r===qh)return n.RG_INTEGER;if(r===Xh)return n.RGBA_INTEGER;if(r===wo||r===Co||r===Ro||r===Po)if(l===_t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===wo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===wo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Tu||r===Au||r===wu||r===Cu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Tu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Au)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===IE)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ru||r===Pu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ru)return l===_t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Pu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Lu||r===Du||r===Iu||r===Uu||r===Fu||r===ku||r===Nu||r===Ou||r===Bu||r===Hu||r===zu||r===Gu||r===Vu||r===Wu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Lu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Du)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Iu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ku)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ou)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lo||r===$u||r===qu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Lo)return l===_t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$u)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===UE||r===Xu||r===Yu||r===ju)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Lo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Xu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ju)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rs?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class $w extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ga extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qw={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Xw extends cn{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:as,u!==as&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===as&&(i=bi),i===void 0&&u===qs&&(i=rs),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yw extends Js{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,h=null;const w=[],y=[],b=new gn;b.layers.enable(1),b.viewport=new St;const C=new gn;C.layers.enable(2),C.viewport=new St;const F=[b,C],L=new $w;L.layers.enable(1),L.layers.enable(2);let H=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=w[G];return Z===void 0&&(Z=new nl,w[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=w[G];return Z===void 0&&(Z=new nl,w[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=w[G];return Z===void 0&&(Z=new nl,w[G]=Z),Z.getHandSpace()};function T(G){const Z=y.indexOf(G.inputSource);if(Z===-1)return;const xe=w[Z];xe!==void 0&&(xe.update(G.inputSource,G.frame,c||a),xe.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",$);for(let G=0;G<w.length;G++){const Z=y[G];Z!==null&&(y[G]=null,w[G].disconnect(Z))}H=null,S=null,e.setRenderTarget(m),p=null,d=null,f=null,s=null,h=null,de.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",J),s.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),h=new us(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,xe=null,Se=null;g.depth&&(Se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?qs:as,xe=g.stencil?rs:bi);const ye={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(ye),s.updateRenderState({layers:[d]}),h=new us(d.textureWidth,d.textureHeight,{format:Fn,type:Li,depthTexture:new Xw(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Le=e.properties.get(h);Le.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function $(G){for(let Z=0;Z<G.removed.length;Z++){const xe=G.removed[Z],Se=y.indexOf(xe);Se>=0&&(y[Se]=null,w[Se].disconnect(xe))}for(let Z=0;Z<G.added.length;Z++){const xe=G.added[Z];let Se=y.indexOf(xe);if(Se===-1){for(let Le=0;Le<w.length;Le++)if(Le>=y.length){y.push(xe),Se=Le;break}else if(y[Le]===null){y[Le]=xe,Se=Le;break}if(Se===-1)break}const ye=w[Se];ye&&ye.connect(xe)}}const oe=new Y,D=new Y;function q(G,Z,xe){oe.setFromMatrixPosition(Z.matrixWorld),D.setFromMatrixPosition(xe.matrixWorld);const Se=oe.distanceTo(D),ye=Z.projectionMatrix.elements,Le=xe.projectionMatrix.elements,$e=ye[14]/(ye[10]-1),Ne=ye[14]/(ye[10]+1),Oe=(ye[9]+1)/ye[5],Fe=(ye[9]-1)/ye[5],Ce=(ye[8]-1)/ye[0],x=(Le[8]+1)/Le[0],k=$e*Ce,R=$e*x,V=Se/(-Ce+x),W=V*-Ce;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(W),G.translateZ(V),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const ie=$e+V,me=Ne+V,ae=k-W,_e=R+(Se-W),fe=Oe*Ne/me*ie,Te=Fe*Ne/me*ie;G.projectionMatrix.makePerspective(ae,_e,fe,Te,ie,me),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function z(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;L.near=C.near=b.near=G.near,L.far=C.far=b.far=G.far,(H!==L.near||S!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,S=L.far);const Z=G.parent,xe=L.cameras;z(L,Z);for(let Se=0;Se<xe.length;Se++)z(xe[Se],Z);xe.length===2?q(L,b,C):L.projectionMatrix.copy(b.projectionMatrix),X(G,L,Z)};function X(G,Z,xe){xe===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(xe.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ul*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let re=null;function le(G,Z){if(u=Z.getViewerPose(c||a),_=Z,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let Se=!1;xe.length!==L.cameras.length&&(L.cameras.length=0,Se=!0);for(let ye=0;ye<xe.length;ye++){const Le=xe[ye];let $e=null;if(p!==null)$e=p.getViewport(Le);else{const Oe=f.getViewSubImage(d,Le);$e=Oe.viewport,ye===0&&(e.setRenderTargetTextures(h,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(h))}let Ne=F[ye];Ne===void 0&&(Ne=new gn,Ne.layers.enable(ye),Ne.viewport=new St,F[ye]=Ne),Ne.matrix.fromArray(Le.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Le.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set($e.x,$e.y,$e.width,$e.height),ye===0&&(L.matrix.copy(Ne.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Se===!0&&L.cameras.push(Ne)}}for(let xe=0;xe<w.length;xe++){const Se=y[xe],ye=w[xe];Se!==null&&ye!==void 0&&ye.update(Se,Z,c||a)}re&&re(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const de=new lp;de.setAnimationLoop(le),this.setAnimationLoop=function(G){re=G},this.dispose=function(){}}}function jw(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,rp(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,w,y,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),g(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,w,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=e.get(h).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,w,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kw(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,y){const b=y.program;i.uniformBlockBinding(w,b)}function c(w,y){let b=s[w.id];b===void 0&&(_(w),b=u(w),s[w.id]=b,w.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(w,C);const F=e.render.frame;r[w.id]!==F&&(d(w),r[w.id]=F)}function u(w){const y=f();w.__bindingPointIndex=y;const b=n.createBuffer(),C=w.__size,F=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const y=s[w.id],b=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let F=0,L=b.length;F<L;F++){const H=b[F];if(p(H,F,C)===!0){const S=H.__offset,T=Array.isArray(H.value)?H.value:[H.value];let J=0;for(let $=0;$<T.length;$++){const oe=T[$],D=g(oe);typeof oe=="number"?(H.__data[0]=oe,n.bufferSubData(n.UNIFORM_BUFFER,S+J,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=oe.elements[0],H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=oe.elements[0],H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=oe.elements[0]):(oe.toArray(H.__data,J),J+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,H.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,y,b){const C=w.value;if(b[y]===void 0){if(typeof C=="number")b[y]=C;else{const F=Array.isArray(C)?C:[C],L=[];for(let H=0;H<F.length;H++)L.push(F[H].clone());b[y]=L}return!0}else if(typeof C=="number"){if(b[y]!==C)return b[y]=C,!0}else{const F=Array.isArray(b[y])?b[y]:[b[y]],L=Array.isArray(C)?C:[C];for(let H=0;H<F.length;H++){const S=F[H];if(S.equals(L[H])===!1)return S.copy(L[H]),!0}}return!1}function _(w){const y=w.uniforms;let b=0;const C=16;let F=0;for(let L=0,H=y.length;L<H;L++){const S=y[L],T={boundary:0,storage:0},J=Array.isArray(S.value)?S.value:[S.value];for(let $=0,oe=J.length;$<oe;$++){const D=J[$],q=g(D);T.boundary+=q.boundary,T.storage+=q.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,L>0){F=b%C;const $=C-F;F!==0&&$-T.boundary<0&&(b+=C-F,S.__offset=b)}b+=T.storage}return F=b%C,F>0&&(b+=C-F),w.__size=b,w.__cache={},this}function g(w){const y={boundary:0,storage:0};return typeof w=="number"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class hp{constructor(e={}){const{canvas:t=XE(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;const y=this;let b=!1,C=0,F=0,L=null,H=-1,S=null;const T=new St,J=new St;let $=null;const oe=new ft(0);let D=0,q=t.width,z=t.height,X=1,re=null,le=null;const de=new St(0,0,q,z),G=new St(0,0,q,z);let Z=!1;const xe=new yc;let Se=!1,ye=!1,Le=null;const $e=new It,Ne=new dt,Oe=new Y,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return L===null?X:1}let x=i;function k(A,j){for(let ee=0;ee<A.length;ee++){const ne=A[ee],se=t.getContext(ne,j);if(se!==null)return se}return null}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_c}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",I,!1),x===null){const j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),x=k(j,A),x===null)throw k(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let R,V,W,ie,me,ae,_e,fe,Te,E,v,O,ce,ue,he,Ee,ve,Ae,Ve,nt,Me,je,Be,ze;function Ge(){R=new aA(x),V=new QT(x,R,e),R.init(V),je=new Ww(x,R,V),W=new Gw(x,R,V),ie=new cA(x),me=new Cw,ae=new Vw(x,R,W,me,V,je,ie),_e=new tA(y),fe=new rA(y),Te=new v1(x,V),Be=new ZT(x,R,Te,V),E=new oA(x,Te,ie,Be),v=new hA(x,E,Te,ie),Ve=new dA(x,V,ae),Ee=new eA(me),O=new ww(y,_e,fe,R,V,Be,Ee),ce=new jw(y,me),ue=new Pw,he=new kw(R,V),Ae=new KT(y,_e,fe,W,v,d,l),ve=new zw(y,v,V),ze=new Kw(x,ie,V,W),nt=new JT(x,R,ie,V),Me=new lA(x,R,ie,V),ie.programs=O.programs,y.capabilities=V,y.extensions=R,y.properties=me,y.renderLists=ue,y.shadowMap=ve,y.state=W,y.info=ie}Ge();const Ie=new Yw(y,x);this.xr=Ie,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const A=R.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=R.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(q,z,!1))},this.getSize=function(A){return A.set(q,z)},this.setSize=function(A,j,ee=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,z=j,t.width=Math.floor(A*X),t.height=Math.floor(j*X),ee===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(q*X,z*X).floor()},this.setDrawingBufferSize=function(A,j,ee){q=A,z=j,X=ee,t.width=Math.floor(A*ee),t.height=Math.floor(j*ee),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(de)},this.setViewport=function(A,j,ee,ne){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,j,ee,ne),W.viewport(T.copy(de).multiplyScalar(X).floor())},this.getScissor=function(A){return A.copy(G)},this.setScissor=function(A,j,ee,ne){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,j,ee,ne),W.scissor(J.copy(G).multiplyScalar(X).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){W.setScissorTest(Z=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(A=!0,j=!0,ee=!0){let ne=0;if(A){let se=!1;if(L!==null){const Ue=L.texture.format;se=Ue===Xh||Ue===qh||Ue===$h}if(se){const Ue=L.texture.type,He=Ue===Li||Ue===bi||Ue===vc||Ue===rs||Ue===Vh||Ue===Wh,Ye=Ae.getClearColor(),Ke=Ae.getClearAlpha(),it=Ye.r,Je=Ye.g,Qe=Ye.b;He?(p[0]=it,p[1]=Je,p[2]=Qe,p[3]=Ke,x.clearBufferuiv(x.COLOR,0,p)):(_[0]=it,_[1]=Je,_[2]=Qe,_[3]=Ke,x.clearBufferiv(x.COLOR,0,_))}else ne|=x.COLOR_BUFFER_BIT}j&&(ne|=x.DEPTH_BUFFER_BIT),ee&&(ne|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",I,!1),ue.dispose(),he.dispose(),me.dispose(),_e.dispose(),fe.dispose(),v.dispose(),Be.dispose(),ze.dispose(),O.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Kt),Ie.removeEventListener("sessionend",ot),Le&&(Le.dispose(),Le=null),Ft.stop()};function rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=ie.autoReset,j=ve.enabled,ee=ve.autoUpdate,ne=ve.needsUpdate,se=ve.type;Ge(),ie.autoReset=A,ve.enabled=j,ve.autoUpdate=ee,ve.needsUpdate=ne,ve.type=se}function I(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function U(A){const j=A.target;j.removeEventListener("dispose",U),N(j)}function N(A){te(A),me.remove(A)}function te(A){const j=me.get(A).programs;j!==void 0&&(j.forEach(function(ee){O.releaseProgram(ee)}),A.isShaderMaterial&&O.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ee,ne,se,Ue){j===null&&(j=Fe);const He=se.isMesh&&se.matrixWorld.determinant()<0,Ye=Fp(A,j,ee,ne,se);W.setMaterial(ne,He);let Ke=ee.index,it=1;if(ne.wireframe===!0){if(Ke=E.getWireframeAttribute(ee),Ke===void 0)return;it=2}const Je=ee.drawRange,Qe=ee.attributes.position;let bt=Je.start*it,dn=(Je.start+Je.count)*it;Ue!==null&&(bt=Math.max(bt,Ue.start*it),dn=Math.min(dn,(Ue.start+Ue.count)*it)),Ke!==null?(bt=Math.max(bt,0),dn=Math.min(dn,Ke.count)):Qe!=null&&(bt=Math.max(bt,0),dn=Math.min(dn,Qe.count));const Bt=dn-bt;if(Bt<0||Bt===1/0)return;Be.setup(se,ne,Ye,ee,Ke);let Kn,yt=nt;if(Ke!==null&&(Kn=Te.get(Ke),yt=Me,yt.setIndex(Kn)),se.isMesh)ne.wireframe===!0?(W.setLineWidth(ne.wireframeLinewidth*Ce()),yt.setMode(x.LINES)):yt.setMode(x.TRIANGLES);else if(se.isLine){let at=ne.linewidth;at===void 0&&(at=1),W.setLineWidth(at*Ce()),se.isLineSegments?yt.setMode(x.LINES):se.isLineLoop?yt.setMode(x.LINE_LOOP):yt.setMode(x.LINE_STRIP)}else se.isPoints?yt.setMode(x.POINTS):se.isSprite&&yt.setMode(x.TRIANGLES);if(se.isInstancedMesh)yt.renderInstances(bt,Bt,se.count);else if(ee.isInstancedBufferGeometry){const at=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,fo=Math.min(ee.instanceCount,at);yt.renderInstances(bt,Bt,fo)}else yt.render(bt,Bt)};function Re(A,j,ee){A.transparent===!0&&A.side===an&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,Hr(A,j,ee),A.side=Ii,A.needsUpdate=!0,Hr(A,j,ee),A.side=an):Hr(A,j,ee)}this.compile=function(A,j,ee=null){ee===null&&(ee=A),m=he.get(ee),m.init(),w.push(m),ee.traverseVisible(function(se){se.isLight&&se.layers.test(j.layers)&&(m.pushLight(se),se.castShadow&&m.pushShadow(se))}),A!==ee&&A.traverseVisible(function(se){se.isLight&&se.layers.test(j.layers)&&(m.pushLight(se),se.castShadow&&m.pushShadow(se))}),m.setupLights(y._useLegacyLights);const ne=new Set;return A.traverse(function(se){const Ue=se.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const Ye=Ue[He];Re(Ye,ee,se),ne.add(Ye)}else Re(Ue,ee,se),ne.add(Ue)}),w.pop(),m=null,ne},this.compileAsync=function(A,j,ee=null){const ne=this.compile(A,j,ee);return new Promise(se=>{function Ue(){if(ne.forEach(function(He){me.get(He).currentProgram.isReady()&&ne.delete(He)}),ne.size===0){se(A);return}setTimeout(Ue,10)}R.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let ke=null;function mt(A){ke&&ke(A)}function Kt(){Ft.stop()}function ot(){Ft.start()}const Ft=new lp;Ft.setAnimationLoop(mt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(A){ke=A,Ie.setAnimationLoop(A),A===null?Ft.stop():Ft.start()},Ie.addEventListener("sessionstart",Kt),Ie.addEventListener("sessionend",ot),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(j),j=Ie.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,j,L),m=he.get(A,w.length),m.init(),w.push(m),$e.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),xe.setFromProjectionMatrix($e),ye=this.localClippingEnabled,Se=Ee.init(this.clippingPlanes,ye),g=ue.get(A,h.length),g.init(),h.push(g),zn(A,j,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(re,le),this.info.render.frame++,Se===!0&&Ee.beginShadows();const ee=m.state.shadowsArray;if(ve.render(ee,A,j),Se===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ae.render(g,A),m.setupLights(y._useLegacyLights),j.isArrayCamera){const ne=j.cameras;for(let se=0,Ue=ne.length;se<Ue;se++){const He=ne[se];wc(g,A,He,He.viewport)}}else wc(g,A,j);L!==null&&(ae.updateMultisampleRenderTarget(L),ae.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(y,A,j),Be.resetDefaultState(),H=-1,S=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function zn(A,j,ee,ne){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xe.intersectsSprite(A)){ne&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4($e);const He=v.update(A),Ye=A.material;Ye.visible&&g.push(A,He,Ye,ee,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xe.intersectsObject(A))){const He=v.update(A),Ye=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Oe.copy(He.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4($e)),Array.isArray(Ye)){const Ke=He.groups;for(let it=0,Je=Ke.length;it<Je;it++){const Qe=Ke[it],bt=Ye[Qe.materialIndex];bt&&bt.visible&&g.push(A,He,bt,ee,Oe.z,Qe)}}else Ye.visible&&g.push(A,He,Ye,ee,Oe.z,null)}}const Ue=A.children;for(let He=0,Ye=Ue.length;He<Ye;He++)zn(Ue[He],j,ee,ne)}function wc(A,j,ee,ne){const se=A.opaque,Ue=A.transmissive,He=A.transparent;m.setupLightsView(ee),Se===!0&&Ee.setGlobalState(y.clippingPlanes,ee),Ue.length>0&&Up(se,Ue,j,ee),ne&&W.viewport(T.copy(ne)),se.length>0&&Br(se,j,ee),Ue.length>0&&Br(Ue,j,ee),He.length>0&&Br(He,j,ee),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Up(A,j,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Ue=V.isWebGL2;Le===null&&(Le=new us(1,1,{generateMipmaps:!0,type:R.has("EXT_color_buffer_half_float")?Cr:Li,minFilter:wr,samples:Ue?4:0})),y.getDrawingBufferSize(Ne),Ue?Le.setSize(Ne.x,Ne.y):Le.setSize(Fl(Ne.x),Fl(Ne.y));const He=y.getRenderTarget();y.setRenderTarget(Le),y.getClearColor(oe),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();const Ye=y.toneMapping;y.toneMapping=Pi,Br(A,ee,ne),ae.updateMultisampleRenderTarget(Le),ae.updateRenderTargetMipmap(Le);let Ke=!1;for(let it=0,Je=j.length;it<Je;it++){const Qe=j[it],bt=Qe.object,dn=Qe.geometry,Bt=Qe.material,Kn=Qe.group;if(Bt.side===an&&bt.layers.test(ne.layers)){const yt=Bt.side;Bt.side=ln,Bt.needsUpdate=!0,Cc(bt,ee,ne,dn,Bt,Kn),Bt.side=yt,Bt.needsUpdate=!0,Ke=!0}}Ke===!0&&(ae.updateMultisampleRenderTarget(Le),ae.updateRenderTargetMipmap(Le)),y.setRenderTarget(He),y.setClearColor(oe,D),y.toneMapping=Ye}function Br(A,j,ee){const ne=j.isScene===!0?j.overrideMaterial:null;for(let se=0,Ue=A.length;se<Ue;se++){const He=A[se],Ye=He.object,Ke=He.geometry,it=ne===null?He.material:ne,Je=He.group;Ye.layers.test(ee.layers)&&Cc(Ye,j,ee,Ke,it,Je)}}function Cc(A,j,ee,ne,se,Ue){A.onBeforeRender(y,j,ee,ne,se,Ue),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(y,j,ee,ne,A,Ue),se.transparent===!0&&se.side===an&&se.forceSinglePass===!1?(se.side=ln,se.needsUpdate=!0,y.renderBufferDirect(ee,j,ne,se,A,Ue),se.side=Ii,se.needsUpdate=!0,y.renderBufferDirect(ee,j,ne,se,A,Ue),se.side=an):y.renderBufferDirect(ee,j,ne,se,A,Ue),A.onAfterRender(y,j,ee,ne,se,Ue)}function Hr(A,j,ee){j.isScene!==!0&&(j=Fe);const ne=me.get(A),se=m.state.lights,Ue=m.state.shadowsArray,He=se.state.version,Ye=O.getParameters(A,se.state,Ue,j,ee),Ke=O.getProgramCacheKey(Ye);let it=ne.programs;ne.environment=A.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(A.isMeshStandardMaterial?fe:_e).get(A.envMap||ne.environment),it===void 0&&(A.addEventListener("dispose",U),it=new Map,ne.programs=it);let Je=it.get(Ke);if(Je!==void 0){if(ne.currentProgram===Je&&ne.lightsStateVersion===He)return Pc(A,Ye),Je}else Ye.uniforms=O.getUniforms(A),A.onBuild(ee,Ye,y),A.onBeforeCompile(Ye,y),Je=O.acquireProgram(Ye,Ke),it.set(Ke,Je),ne.uniforms=Ye.uniforms;const Qe=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=Ee.uniform),Pc(A,Ye),ne.needsLights=Np(A),ne.lightsStateVersion=He,ne.needsLights&&(Qe.ambientLightColor.value=se.state.ambient,Qe.lightProbe.value=se.state.probe,Qe.directionalLights.value=se.state.directional,Qe.directionalLightShadows.value=se.state.directionalShadow,Qe.spotLights.value=se.state.spot,Qe.spotLightShadows.value=se.state.spotShadow,Qe.rectAreaLights.value=se.state.rectArea,Qe.ltc_1.value=se.state.rectAreaLTC1,Qe.ltc_2.value=se.state.rectAreaLTC2,Qe.pointLights.value=se.state.point,Qe.pointLightShadows.value=se.state.pointShadow,Qe.hemisphereLights.value=se.state.hemi,Qe.directionalShadowMap.value=se.state.directionalShadowMap,Qe.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Qe.spotShadowMap.value=se.state.spotShadowMap,Qe.spotLightMatrix.value=se.state.spotLightMatrix,Qe.spotLightMap.value=se.state.spotLightMap,Qe.pointShadowMap.value=se.state.pointShadowMap,Qe.pointShadowMatrix.value=se.state.pointShadowMatrix),ne.currentProgram=Je,ne.uniformsList=null,Je}function Rc(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Ta.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Pc(A,j){const ee=me.get(A);ee.outputColorSpace=j.outputColorSpace,ee.instancing=j.instancing,ee.instancingColor=j.instancingColor,ee.skinning=j.skinning,ee.morphTargets=j.morphTargets,ee.morphNormals=j.morphNormals,ee.morphColors=j.morphColors,ee.morphTargetsCount=j.morphTargetsCount,ee.numClippingPlanes=j.numClippingPlanes,ee.numIntersection=j.numClipIntersection,ee.vertexAlphas=j.vertexAlphas,ee.vertexTangents=j.vertexTangents,ee.toneMapping=j.toneMapping}function Fp(A,j,ee,ne,se){j.isScene!==!0&&(j=Fe),ae.resetTextureUnits();const Ue=j.fog,He=ne.isMeshStandardMaterial?j.environment:null,Ye=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:li,Ke=(ne.isMeshStandardMaterial?fe:_e).get(ne.envMap||He),it=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!ee.morphAttributes.position,bt=!!ee.morphAttributes.normal,dn=!!ee.morphAttributes.color;let Bt=Pi;ne.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Bt=y.toneMapping);const Kn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,yt=Kn!==void 0?Kn.length:0,at=me.get(ne),fo=m.state.lights;if(Se===!0&&(ye===!0||A!==S)){const hn=A===S&&ne.id===H;Ee.setState(ne,A,hn)}let Ct=!1;ne.version===at.__version?(at.needsLights&&at.lightsStateVersion!==fo.state.version||at.outputColorSpace!==Ye||se.isInstancedMesh&&at.instancing===!1||!se.isInstancedMesh&&at.instancing===!0||se.isSkinnedMesh&&at.skinning===!1||!se.isSkinnedMesh&&at.skinning===!0||se.isInstancedMesh&&at.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&at.instancingColor===!1&&se.instanceColor!==null||at.envMap!==Ke||ne.fog===!0&&at.fog!==Ue||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Ee.numPlanes||at.numIntersection!==Ee.numIntersection)||at.vertexAlphas!==it||at.vertexTangents!==Je||at.morphTargets!==Qe||at.morphNormals!==bt||at.morphColors!==dn||at.toneMapping!==Bt||V.isWebGL2===!0&&at.morphTargetsCount!==yt)&&(Ct=!0):(Ct=!0,at.__version=ne.version);let Ni=at.currentProgram;Ct===!0&&(Ni=Hr(ne,j,se));let Lc=!1,er=!1,ho=!1;const Zt=Ni.getUniforms(),Oi=at.uniforms;if(W.useProgram(Ni.program)&&(Lc=!0,er=!0,ho=!0),ne.id!==H&&(H=ne.id,er=!0),Lc||S!==A){Zt.setValue(x,"projectionMatrix",A.projectionMatrix),Zt.setValue(x,"viewMatrix",A.matrixWorldInverse);const hn=Zt.map.cameraPosition;hn!==void 0&&hn.setValue(x,Oe.setFromMatrixPosition(A.matrixWorld)),V.logarithmicDepthBuffer&&Zt.setValue(x,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Zt.setValue(x,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,er=!0,ho=!0)}if(se.isSkinnedMesh){Zt.setOptional(x,se,"bindMatrix"),Zt.setOptional(x,se,"bindMatrixInverse");const hn=se.skeleton;hn&&(V.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Zt.setValue(x,"boneTexture",hn.boneTexture,ae),Zt.setValue(x,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const po=ee.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0&&V.isWebGL2===!0)&&Ve.update(se,ee,Ni),(er||at.receiveShadow!==se.receiveShadow)&&(at.receiveShadow=se.receiveShadow,Zt.setValue(x,"receiveShadow",se.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Oi.envMap.value=Ke,Oi.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),er&&(Zt.setValue(x,"toneMappingExposure",y.toneMappingExposure),at.needsLights&&kp(Oi,ho),Ue&&ne.fog===!0&&ce.refreshFogUniforms(Oi,Ue),ce.refreshMaterialUniforms(Oi,ne,X,z,Le),Ta.upload(x,Rc(at),Oi,ae)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ta.upload(x,Rc(at),Oi,ae),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Zt.setValue(x,"center",se.center),Zt.setValue(x,"modelViewMatrix",se.modelViewMatrix),Zt.setValue(x,"normalMatrix",se.normalMatrix),Zt.setValue(x,"modelMatrix",se.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const hn=ne.uniformsGroups;for(let mo=0,Op=hn.length;mo<Op;mo++)if(V.isWebGL2){const Dc=hn[mo];ze.update(Dc,Ni),ze.bind(Dc,Ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ni}function kp(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Np(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,j,ee){me.get(A.texture).__webglTexture=j,me.get(A.depthTexture).__webglTexture=ee;const ne=me.get(A);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||R.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,j){const ee=me.get(A);ee.__webglFramebuffer=j,ee.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,ee=0){L=A,C=j,F=ee;let ne=!0,se=null,Ue=!1,He=!1;if(A){const Ke=me.get(A);Ke.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(x.FRAMEBUFFER,null),ne=!1):Ke.__webglFramebuffer===void 0?ae.setupRenderTarget(A):Ke.__hasExternalTextures&&ae.rebindTextures(A,me.get(A.texture).__webglTexture,me.get(A.depthTexture).__webglTexture);const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(He=!0);const Je=me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[j])?se=Je[j][ee]:se=Je[j],Ue=!0):V.isWebGL2&&A.samples>0&&ae.useMultisampledRTT(A)===!1?se=me.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?se=Je[ee]:se=Je,T.copy(A.viewport),J.copy(A.scissor),$=A.scissorTest}else T.copy(de).multiplyScalar(X).floor(),J.copy(G).multiplyScalar(X).floor(),$=Z;if(W.bindFramebuffer(x.FRAMEBUFFER,se)&&V.drawBuffers&&ne&&W.drawBuffers(A,se),W.viewport(T),W.scissor(J),W.setScissorTest($),Ue){const Ke=me.get(A.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ke.__webglTexture,ee)}else if(He){const Ke=me.get(A.texture),it=j||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ke.__webglTexture,ee||0,it)}H=-1},this.readRenderTargetPixels=function(A,j,ee,ne,se,Ue,He){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye){W.bindFramebuffer(x.FRAMEBUFFER,Ye);try{const Ke=A.texture,it=Ke.format,Je=Ke.type;if(it!==Fn&&je.convert(it)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Je===Cr&&(R.has("EXT_color_buffer_half_float")||V.isWebGL2&&R.has("EXT_color_buffer_float"));if(Je!==Li&&je.convert(Je)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===Ti&&(V.isWebGL2||R.has("OES_texture_float")||R.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ne&&ee>=0&&ee<=A.height-se&&x.readPixels(j,ee,ne,se,je.convert(it),je.convert(Je),Ue)}finally{const Ke=L!==null?me.get(L).__webglFramebuffer:null;W.bindFramebuffer(x.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(A,j,ee=0){const ne=Math.pow(2,-ee),se=Math.floor(j.image.width*ne),Ue=Math.floor(j.image.height*ne);ae.setTexture2D(j,0),x.copyTexSubImage2D(x.TEXTURE_2D,ee,0,0,A.x,A.y,se,Ue),W.unbindTexture()},this.copyTextureToTexture=function(A,j,ee,ne=0){const se=j.image.width,Ue=j.image.height,He=je.convert(ee.format),Ye=je.convert(ee.type);ae.setTexture2D(ee,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,ee.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,ee.unpackAlignment),j.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,ne,A.x,A.y,se,Ue,He,Ye,j.image.data):j.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,ne,A.x,A.y,j.mipmaps[0].width,j.mipmaps[0].height,He,j.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,ne,A.x,A.y,He,Ye,j.image),ne===0&&ee.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(A,j,ee,ne,se=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=A.max.x-A.min.x+1,He=A.max.y-A.min.y+1,Ye=A.max.z-A.min.z+1,Ke=je.convert(ne.format),it=je.convert(ne.type);let Je;if(ne.isData3DTexture)ae.setTexture3D(ne,0),Je=x.TEXTURE_3D;else if(ne.isDataArrayTexture)ae.setTexture2DArray(ne,0),Je=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,ne.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,ne.unpackAlignment);const Qe=x.getParameter(x.UNPACK_ROW_LENGTH),bt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),dn=x.getParameter(x.UNPACK_SKIP_PIXELS),Bt=x.getParameter(x.UNPACK_SKIP_ROWS),Kn=x.getParameter(x.UNPACK_SKIP_IMAGES),yt=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,A.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,A.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,A.min.z),ee.isDataTexture||ee.isData3DTexture?x.texSubImage3D(Je,se,j.x,j.y,j.z,Ue,He,Ye,Ke,it,yt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(Je,se,j.x,j.y,j.z,Ue,He,Ye,Ke,yt.data)):x.texSubImage3D(Je,se,j.x,j.y,j.z,Ue,He,Ye,Ke,it,yt),x.pixelStorei(x.UNPACK_ROW_LENGTH,Qe),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,bt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,dn),x.pixelStorei(x.UNPACK_SKIP_ROWS,Bt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Kn),se===0&&ne.generateMipmaps&&x.generateMipmap(Je),W.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),W.unbindTexture()},this.resetState=function(){C=0,F=0,L=null,W.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mc?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===ro?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$t?os:Yh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===os?$t:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Zw extends hp{}Zw.prototype.isWebGL1Renderer=!0;class Jw extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class lr extends kr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Bf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Qw{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const eC=new Qw;class bc{constructor(e){this.manager=e!==void 0?e:eC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bc.DEFAULT_MATERIAL_NAME="__DEFAULT";class tC extends bc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Bf.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Rr("img");function l(){u(),Bf.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class nC extends bc{constructor(e){super(e)}load(e,t,i,s){const r=new cn,a=new tC(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class iC extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const il=new It,Hf=new Y,zf=new Y;class sC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hf),zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zf),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gf=new It,cr=new Y,sl=new Y;class rC extends sC{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(cr),sl.copy(i.position),sl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(sl),i.updateMatrixWorld(),s.makeTranslation(-cr.x,-cr.y,-cr.z),Gf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gf)}}class aC extends iC{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vf{constructor(e,t,i=0,s=1/0){this.ray=new ep(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Nl(e,this,i,t),i.sort(Wf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Nl(e[s],this,i,t);return i.sort(Wf),i}}function Wf(n,e){return n.distance-e.distance}function Nl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)Nl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);const pp=ki("log",{state:()=>({GENERAL:[],BATTLE:[]})});class lo{constructor(){Pe(this,"logStore",pp())}addNewLog(e,t){this.addLog(e,t)}addLog(e,t){t==0?this.logStore.GENERAL.push(e):this.logStore.BATTLE.push(e),Zs(()=>{this.scrollTop()})}scrollTop(){const e=document.querySelector(".logList");e&&(e.scrollTop=e.scrollHeight)}}const oC="/app2/icon/close.svg",lC=["src"],cC=Xe({__name:"IconClose",setup(n){return(e,t)=>(Q(),pe("img",{class:"Icon",src:K(oC),alt:"Close"},null,8,lC))}}),uC=Ze(cC,[["__scopeId","data-v-e1b07c4f"]]),fC="/app2/icon/message1.svg",dC={class:"actionLog"},hC={class:"logWindow"},pC={class:"logTab"},mC=["onClick"],_C={key:0,class:"logList",density:"compact"},gC=["src"],vC=Xe({__name:"ActionLog",setup(n){const e=pp(),t=Hn(),i=ge(!1),s=[M.strLog1,M.strLog2],r=ge(),a=c=>{r.value=c};function o(){i.value=!0}function l(){i.value=!1}return Fi(()=>{r.value=t.processDungeon==M.processBattle?M.strLog2:M.strLog1,new lo().scrollTop()}),(c,u)=>(Q(),pe("div",dC,[Tt(P("div",hC,[P("ul",pC,[(Q(),pe(ut,null,Vt(s,f=>P("li",{onClick:d=>a(f),class:Dt([{"selected-tab":f==r.value},"tabItem"])},be(f),11,mC)),64))]),De(uC,{class:"IconClose",onClick:u[0]||(u[0]=f=>l())}),r.value?(Q(),pe("ul",_C,[(Q(!0),pe(ut,null,Vt(K(e)[r.value],(f,d)=>(Q(),pe("li",{key:d,class:"logMessage"},be(f),1))),128))])):We("",!0)],512),[[At,i.value]]),Tt(P("img",{class:"iconLog",src:K(fC),alt:"Log",onClick:u[1]||(u[1]=f=>o())},null,8,gC),[[At,!i.value]])]))}}),mp=Ze(vC,[["__scopeId","data-v-b3b1444f"]]),va="/app2/img/dungeon/wall/forest1.jpg",MC="/app2/img/dungeon/wall/mable-black-p.jpg",xC="/app2/img/dungeon/wall/wood-deck-02.jpg",SC="/app2/img/dungeon/wall/stone-tile02-p.jpg",yC="/app2/img/dungeon/wall/brick1.jpg",EC="/app2/img/dungeon/wall/tesukiwashi06.jpg",bC="/app2/img/dungeon/floor/forest1.jpg",TC="/app2/img/dungeon/floor/Wonder-Marble.jpg",AC="/app2/img/dungeon/floor/wood-deck-03.jpg",wC="/app2/img/dungeon/floor/rockland3.jpg",CC="/app2/img/dungeon/floor/rockland2.jpg",RC="/app2/img/dungeon/floor/tatami02.jpg",PC="/app2/img/dungeon/door/leftdoor1.jpg",LC="/app2/img/dungeon/door/rightdoor1.jpg",_p=ki("position",{state:()=>({playerPosition:new Y})}),DC={key:0,class:"crossKey"},IC=Xe({__name:"Dungeon",setup(n){new Array(va,MC,xC,SC,yC,EC),new Array(va,TC,AC,wC,CC,RC);const e=Hn(),t=_p(),i=fi(),s=Dr(),r=ge(null),a=new lo,o=(q,z)=>a.addNewLog(q,z),l=ge(null);let c=new Jw,u=new gn(75,window.innerWidth/window.innerHeight,.1,1e3),f=new hp,d,p=new Y,_=0,g=0,m,h,w,y=[],b;Fi(()=>{px(),F(),L(),H(),window.addEventListener("keydown",J),window.addEventListener("click",T),C(),D()});const C=function(){requestAnimationFrame(C),f.render(c,u)};function F(){var z;f.setSize(window.innerWidth,window.innerHeight),(z=l.value)==null||z.appendChild(f.domElement),t.playerPosition=new Y(M.BlockSize*Ia.X,5,M.BlockSize*Ia.Y),p.copy(t.playerPosition),u.position.copy(t.playerPosition),o(M.logEnterDungeon,0);const q={point:16514559};d=new aC(q.point,12,100,1),d.position.copy(t.playerPosition),c.add(d)}function L(){switch(e.whichDungeon){case M.nameDungeon1:m=va,h=bC,w=va,e.musicDungeon=M.mscDungeon1;break}s.playBgm(e.musicDungeon)}function H(){const q=new nC,z=new ns(M.BlockSize,M.BlockHeight),X=q.load(m),re=new lr({map:X,side:an,bumpMap:X,bumpScale:.2}),le=new ns(M.BlockSize/2,M.BlockHeight/1.5),de=q.load(PC),G=q.load(LC),Z=new lr({map:de,side:an,bumpMap:de,bumpScale:.2}),xe=new lr({map:G,side:an,bumpMap:G,bumpScale:.2}),Se=new ns(M.BlockSize,M.BlockHeight/3),ye=new ns(M.BlockSize,M.BlockSize),Le=q.load(h),$e=new lr({map:Le,side:an,bumpMap:Le,bumpScale:.2}),Ne=q.load(w),Oe=new lr({map:Ne,side:an,bumpMap:Ne,bumpScale:.2});for(let Fe=0;Fe<pt.length;Fe++)for(let Ce=0;Ce<pt[Fe].length;Ce++)if(pt[Fe][Ce]==M.MapRoom||pt[Fe][Ce]==M.MapRoad){const x=new Wt(ye,$e);x.position.set(M.BlockSize*Ce,0,M.BlockSize*Fe),x.rotation.x=90*Math.PI/180,c.add(x);const k=new Wt(ye,Oe);if(k.position.set(M.BlockSize*Ce,M.BlockHeight,M.BlockSize*Fe),k.rotation.x=90*Math.PI/180,c.add(k),si(Fe-1,Ce)){const ie=new Wt(z,re);ie.position.set(M.BlockSize*Ce,M.BlockHeight/2,M.BlockSize*(Fe-.5)),c.add(ie)}if(si(Fe+1,Ce)){const ie=new Wt(z,re);ie.position.set(M.BlockSize*Ce,M.BlockHeight/2,M.BlockSize*(Fe+.5)),c.add(ie)}if(si(Fe,Ce-1)){const ie=new Wt(z,re);ie.position.set(M.BlockSize*(Ce-.5),M.BlockHeight/2,M.BlockSize*Fe),ie.rotation.y=90*Math.PI/180,c.add(ie)}if(si(Fe,Ce+1)){const ie=new Wt(z,re);ie.position.set(M.BlockSize*(Ce+.5),M.BlockHeight/2,M.BlockSize*Fe),ie.rotation.y=90*Math.PI/180,c.add(ie)}const R=new Wt(le,Z),V=new Wt(le,xe),W=new Wt(Se,re);switch(dr[Fe][Ce]){case M.SetDoorUp:R.position.set(M.BlockSize*Ce-M.BlockSize/4,M.BlockHeight/3,M.BlockSize*(Fe-.5)),c.add(R),V.position.set(M.BlockSize*Ce+M.BlockSize/4,M.BlockHeight/3,M.BlockSize*(Fe-.5)),c.add(V),S(R,V),W.position.set(M.BlockSize*Ce,M.BlockHeight/1.2,M.BlockSize*(Fe-.5)),c.add(W);break;case M.SetDoorUnder:R.position.set(M.BlockSize*Ce-M.BlockSize/4,M.BlockHeight/3,M.BlockSize*(Fe+.5)),c.add(R),V.position.set(M.BlockSize*Ce+M.BlockSize/4,M.BlockHeight/3,M.BlockSize*(Fe+.5)),c.add(V),S(R,V),W.position.set(M.BlockSize*Ce,M.BlockHeight/1.2,M.BlockSize*(Fe+.5)),c.add(W);break;case M.SetDoorLeft:R.position.set(M.BlockSize*(Ce-.5),M.BlockHeight/3,M.BlockSize*Fe+M.BlockSize/4),R.rotation.y=90*Math.PI/180,c.add(R),V.position.set(M.BlockSize*(Ce-.5),M.BlockHeight/3,M.BlockSize*Fe-M.BlockSize/4),V.rotation.y=90*Math.PI/180,c.add(V),S(R,V),W.position.set(M.BlockSize*(Ce-.5),M.BlockHeight/1.2,M.BlockSize*Fe),W.rotation.y=90*Math.PI/180,c.add(W);break;case M.SetDoorRight:R.position.set(M.BlockSize*(Ce+.5),M.BlockHeight/3,M.BlockSize*Fe+M.BlockSize/4),R.rotation.y=90*Math.PI/180,c.add(R),V.position.set(M.BlockSize*(Ce+.5),M.BlockHeight/3,M.BlockSize*Fe-M.BlockSize/4),V.rotation.y=90*Math.PI/180,c.add(V),S(R,V),W.position.set(M.BlockSize*(Ce+.5),M.BlockHeight/1.2,M.BlockSize*Fe),W.rotation.y=90*Math.PI/180,c.add(W);break}}}function S(q,z){y.push({id:b,leftDoor:q,rightDoor:z,isOpen:!1}),b+=1}const T=q=>{if(e.processDungeon==M.processBattle)return;const z=new Vf,X=new dt;X.x=q.clientX/window.innerWidth*2-1,X.y=-(q.clientY/window.innerHeight)*2+1,z.setFromCamera(X,u);const re=z.intersectObjects(y.flatMap(le=>[le.leftDoor,le.rightDoor]));if(re.length>0){const le=y.find(de=>de.leftDoor===re[0].object||de.rightDoor===re[0].object);le&&(le.isOpen||(le.leftDoor.translateOnAxis(new Y(-1,0,0),M.BlockSize/4),le.rightDoor.translateOnAxis(new Y(1,0,0),M.BlockSize/4),le.leftDoor.rotateY(-Math.PI/2.1),le.rightDoor.rotateY(Math.PI/2.1),le.leftDoor.translateOnAxis(new Y(1,0,0),M.BlockSize/4),le.rightDoor.translateOnAxis(new Y(-1,0,0),M.BlockSize/4),le.isOpen=!0))}},J=q=>{switch(q.key){case"a":case"A":$(M.TurnLeft);break;case"d":case"D":$(M.TurnRight);break;default:$(q.key)}};function $(q){if(console.log("playerMove",q),i.party||i.character||i.item||e.processDungeon==M.processBattle||!u)return;const z=new Y;u.getWorldDirection(z);let X=t.playerPosition.clone();switch(q){case M.ArrowUp:X.add(z.multiplyScalar(M.BlockSize)),re();break;case M.ArrowDown:X.sub(z.multiplyScalar(M.BlockSize)),re();break;case M.ArrowLeft:X.x+=z.z*M.BlockSize,X.z-=z.x*M.BlockSize,re();break;case M.ArrowRight:X.x-=z.z*M.BlockSize,X.z+=z.x*M.BlockSize,re();break;case M.TurnLeft:_+=Math.PI/2;break;case M.TurnRight:_-=Math.PI/2;break;default:return}if(X==t.playerPosition)return;function re(){X.x=Math.round(X.x/M.BlockSize)*M.BlockSize,X.z=Math.round(X.z/M.BlockSize)*M.BlockSize}let le=Math.floor((X.x+5)/M.BlockSize),de=Math.floor((X.z+5)/M.BlockSize);if(!si(de,le)){const G=new Vf,Z=X.clone().sub(t.playerPosition).normalize();G.set(t.playerPosition,Z);const xe=G.intersectObjects(y.flatMap(Se=>[Se.leftDoor,Se.rightDoor]));if(xe.length>0){const Se=y.find(ye=>ye.leftDoor===xe[0].object||ye.rightDoor===xe[0].object);if(Se&&!Se.isOpen&&xe[0].distance<=M.BlockSize)return}t.playerPosition.copy(X),p.copy(X),g+=en(M.encountMin,M.encountMax),g>=M.encountLimit&&(oe(),g=0)}}function oe(){o(M.logMonsterEncounter,0),i.map=!1,e.processDungeon=M.processBattle}const D=()=>{u.position.equals(p)||(u.position.lerp(p,.05),d.position.copy(p)),u.rotation.y!==_&&(u.rotation.y+=(_-u.rotation.y)*.1),requestAnimationFrame(D)};return(q,z)=>(Q(),pe(ut,null,[P("div",{ref_key:"dungeon",ref:l},null,512),K(e).processDungeon==K(M).processSearch&&!K(i).party&&!K(i).character&&!K(i).item?(Q(),pe("div",DC,[P("div",{class:"upKey",onClick:z[0]||(z[0]=X=>$(K(M).ArrowUp))}),P("div",{class:"leftKey",onClick:z[1]||(z[1]=X=>$(K(M).TurnLeft))}),P("div",{class:"rightKey",onClick:z[2]||(z[2]=X=>$(K(M).TurnRight))}),De(mp,{ref_key:"actionLog",ref:r,class:"actionLog"},null,512)])):We("",!0)],64))}}),UC=Ze(IC,[["__scopeId","data-v-46aa5377"]]),FC="/app2/img/flame/flame032401.png",kC="/app2/img/flame/flame032402.png",NC={class:"TurnOrder"},OC=["src"],BC=Xe({__name:"TurnOrder",props:{turnOrder:Array,numOrder:Number},setup(n){const e=i=>i instanceof on?FC:kC,t=i=>i instanceof on?i.faceGraphicUrl:i.GraphicUrl;return(i,s)=>(Q(),pe("div",NC,[(Q(!0),pe(ut,null,Vt(n.turnOrder,(r,a)=>Tt((Q(),pe("div",{key:a,class:Dt(["turnOrderFlame",{currentOrder:a==n.numOrder}]),style:Ln({backgroundImage:"url("+e(r)+")",zIndex:a==n.numOrder?1e3:n.turnOrder.length-a})},[P("img",{src:t(r),alt:"",class:"turnOrderImage"},null,8,OC)],6)),[[At,r.nowHP>0]])),128))]))}}),HC=Ze(BC,[["__scopeId","data-v-479fed4f"]]),Tc=n=>(On("data-v-d2f919c5"),n=n(),Bn(),n),zC=Tc(()=>P("div",{class:"result"},"RESULT",-1)),GC={class:"resultFlame"},VC={class:"expGoldLine"},WC={class:"expItem"},$C=Tc(()=>P("span",{class:"itemKinds"},"GET EXP",-1)),qC={class:"itemValue"},XC={class:"goldItem"},YC=Tc(()=>P("span",{class:"itemKinds"},"GET GOLD",-1)),jC={class:"itemValue"},KC={class:"character"},ZC={class:"characterFlame"},JC=["src"],QC={class:"rightFlame"},eR={class:"level"},tR={class:"progress-bar"},nR=Xe({__name:"BattleResult",props:{getExp:{type:Number},getGold:{type:Number}},setup(n){const e=ui(),t=fi(),i=Hn(),s=Dr();function r(){t.map=!0,i.processDungeon=M.processSearch,s.playBgm(i.musicDungeon)}return(a,o)=>(Q(),pe("div",{class:"battleResult",onClick:o[0]||(o[0]=l=>r())},[zC,P("div",GC,[P("div",VC,[P("span",WC,[$C,P("span",qC,be(n.getExp),1)]),P("span",XC,[YC,P("span",jC,be(n.getGold),1)])]),(Q(!0),pe(ut,null,Vt(K(e).characters,l=>(Q(),pe("div",KC,[P("div",ZC,[P("img",{class:"face",src:l.faceGraphicUrl},null,8,JC),P("div",QC,[P("div",eR,"LV "+be(l.LV),1),P("span",tR,[De(Ih,{exp:l.exp,next:l.nextLvExp},null,8,["exp","next"])])])])]))),256))])]))}}),iR=Ze(nR,[["__scopeId","data-v-d2f919c5"]]);class Ol{constructor(e){Pe(this,"mon_id");Pe(this,"mon_type");Pe(this,"name");Pe(this,"GraphicUrl");Pe(this,"LV");Pe(this,"HP");Pe(this,"MP");Pe(this,"ATK");Pe(this,"MGC");Pe(this,"DEF");Pe(this,"MDF");Pe(this,"DEX");Pe(this,"SPD");Pe(this,"HitRate");Pe(this,"CritRate");Pe(this,"nowHP");Pe(this,"nowMP");Pe(this,"GOLD");Pe(this,"EXP");Pe(this,"order");this.mon_id=e.mon_id,this.mon_type=e.mon_type,this.name=e.name,this.GraphicUrl=e.GraphicUrl,this.LV=e.LV,this.HP=e.HP,this.MP=e.MP,this.ATK=e.ATK,this.MGC=e.MGC,this.DEF=e.DEF,this.MDF=e.MDF,this.DEX=e.DEX,this.SPD=e.SPD,this.HitRate=M.monsterHitRate+Math.floor(this.DEX/10),this.CritRate=Math.floor(this.DEX/8),this.nowHP=e.HP,this.nowMP=e.MP,this.GOLD=e.GOLD,this.EXP=e.EXP,this.order=void 0}}const sR="/app2/img/back/lightning.gif",rR=n=>(On("data-v-0c155cb7"),n=n(),Bn(),n),aR=rR(()=>P("div",{class:"txtEncount"},"Encounter",-1)),oR=["src"],lR=Xe({__name:"ImgEncount",setup(n){return(e,t)=>(Q(),pe(ut,null,[aR,P("img",{class:"imgEncount",src:K(sR),alt:"imgEncount"},null,8,oR)],64))}}),cR=Ze(lR,[["__scopeId","data-v-0c155cb7"]]),uR="/app2/icon/AttackOrb.png",fR=["src"],dR=Xe({__name:"IconAttack",setup(n){return(e,t)=>(Q(),pe("img",{class:"Icon",src:K(uR),alt:"Attack"},null,8,fR))}}),hR=Ze(dR,[["__scopeId","data-v-c09d57d2"]]),pR="/app2/icon/SkillOrb.png",mR=["src"],_R=Xe({__name:"IconSkill",setup(n){return(e,t)=>(Q(),pe("img",{class:"Icon",src:K(pR),alt:"Attack"},null,8,mR))}}),gR=Ze(_R,[["__scopeId","data-v-b31f90eb"]]),vR="/app2/icon/MagicOrb.png",MR=["src"],xR=Xe({__name:"IconMagic",setup(n){return(e,t)=>(Q(),pe("img",{class:"Icon",src:K(vR),alt:"Magic"},null,8,MR))}}),SR=Ze(xR,[["__scopeId","data-v-5de73f17"]]),yR="/app2/effect/normal/slash.gif",ER="/app2/effect/normal/shot.gif",$f="/app2/effect/normal/hit.gif",bR="/app2/effect/monster/claw1.gif";function TR(n,e,t,i){const s=new lo,r=(f,d)=>s.addNewLog(f,d),a=ui();let o=new Array(a.characters.length).fill(null);const l=f=>a.characters.findIndex(d=>d===f);console.log("characterAssist",e,n);let c=0;switch(n.base_status==M.baseFixValue||n.base_status==M.baseFixRate?c=n.effect_amount:c=i.totalStatus[n.base_status]*n.effect_amount,n.effect_type){case M.effectHeal:switch(n.target_type){case M.targetMyself:case M.targetOneFriend:u(t[0],c,n.effect_kind);break;case M.targetAllFriends:for(let f of a.characters)u(f,c,n.effect_kind);break;case M.targetRandomFriend:break}break;case M.effectBuff:switch(n.target_type){case M.targetMyself:case M.targetOneFriend:if(!t)break;t[0].addBuff(e,n.effect_kind,c,n.effect_times),t[0].calculateTotalStatus();break;case M.targetAllFriends:for(let f of a.characters)f.addBuff(e,n.effect_kind,c,n.effect_times),f.calculateTotalStatus();break;case M.targetRandomFriend:break}break;case M.effectCondition:switch(n.target_type){case M.targetMyself:case M.targetOneFriend:t[0].addCondition(e,n.effect_kind,c,n.effect_times);break;case M.targetAllFriends:for(let f of a.characters)f.addCondition(e,n.effect_kind,c,n.effect_times);break;case M.targetRandomFriend:break}break}return o;function u(f,d,p){console.log("characterHeal",f,p,d),p==M.statusnowHP?f.nowHP=f.nowHP+d>f.totalStatus.HP?f.totalStatus.HP:f.nowHP+d:p==M.statusnowMP&&(f.nowMP=f.nowMP+d>f.totalStatus.MP?f.totalStatus.MP:f.nowMP+d),o[l(f)]=d,r("> Recovers "+f.name+"'s "+p+" by "+d,1)}}const AR={key:2,class:"BattleUI"},wR={class:"monsterGrid"},CR=["onClick","onMouseover","onMouseout"],RR=["src","onLoad"],PR=["src"],LR={key:1,class:"monsterInfo"},DR={class:"monsterName"},IR={class:"progress-bar-hp"},UR=["src"],FR=["src"],kR=["src"],NR={key:3,class:"startTurn"},OR={key:4,class:"endBattle"},BR={key:5},HR={key:3},zR=Xe({__name:"Battle",setup(n){const e=ui(),t=Dr(),i=ge(Array(6).fill(null)),s=vt("monsterList"),r=[],a=ge(Array(6).fill([])),o=ge(void 0),l=ge([]),c=ge(""),u=ge([]),f=ge(""),d=ge(0),p=ge(0),_=ge(void 0),g=ge(),m=ge([]),h=ge(new Array(e.characters.length).fill(!1)),w=ge(null),y=ge(new Array(e.characters.length).fill(!1)),b=ge(new Array(e.characters.length).fill(null)),C=ge(),F=ge(0),L=ge(0),H=ge([]),S=ge(0),T=ge("encount");let J=null;const $=ge(""),oe=jt({AttackBtn:{},SkillBtn:{}}),D=new Array(M.mscBattle1,M.mscBattle2,M.mscBattle3,M.mscBattle4,M.mscBattle5),q=I=>e.characters.findIndex(U=>U===I),z=()=>i.value.reduceRight((I,U,N)=>I==0&&U!==null?N:I,0),X=ge(null),re=new lo,le=(I,U)=>re.addNewLog(I,U);Fi(async()=>{for(de(),await mi(M.awaitTime),G(),T.value="startTurn";T.value!=="result";)T.value="startTurn",await xe()});function de(){let I;I=Math.floor(Math.random()*D.length),t.playBgm(D[I])}function G(){const I=en(M.monNumMin,M.monNumMax);for(let N=0;N<I;N++){const te=new Ol(s[To(s.length)]);r.push(te)}let U=[];for(;U.length<r.length;){const N=To(6);U.includes(N)||U.push(N)}U.forEach((N,te)=>{r[te].order=N,i.value[N]=r[te]}),console.log(r)}let Z=1;async function xe(){g.value=void 0,H.value=[...e.characters.filter(I=>I.nowHP>0),...r.filter(I=>I.nowHP>0)],H.value.sort((I,U)=>{let N=I instanceof on?I.totalStatus.SPD:I.SPD;return(U instanceof on?U.totalStatus.SPD:U.SPD)-N}),await mi(M.awaitTime);for(let I=0;I<H.value.length;I++){let U=H.value[I];if(console.log("currentTurn",U),S.value=I,Ne.value="",m.value=[],l.value=[],U.nowHP>0&&(U instanceof on?(g.value=U,await Se(U),g.value=void 0,Le=null,_.value=void 0):U instanceof Ol&&(o.value=U,await fe(U),o.value=void 0)),!r.some(N=>N.nowHP>0)){T.value="endBattle",await mi(M.awaitTime),T.value="result";break}if(!e.characters.some(N=>N.nowHP>0)){T.value="result";break}await mi(M.nextTime)}B(),Z+=1,await mi(M.nextTime)}async function Se(I){T.value="characterTurn",I.class==M.clsPriest?$.value=M.actionMagic:$.value=M.actionSkill,await ie(),T.value="",await ce(I),W(!0)}const ye=ge(!1);let Le;function $e(I){T.value="characterTurn",Le===I?(ye.value=!1,W(!0),Le=null):(W(),oe[I]={transform:"scale(1.5) translateY(-20%)",opacity:1},Le=I,I==M.actionAttack?(ye.value=!1,Ne.value=M.targetOneEnemy,_.value=i.value[z()],x(z()),T.value="selectTarget"):ye.value=!0)}const Ne=ge("");let Oe;const Fe=I=>{ye.value=!1,Oe=I,Ne.value=I.skill_effect[0].target_type,x(z()),T.value="selectTarget"},Ce=I=>T.value!="selectTarget"||!l.value?!1:l.value.includes(I);function x(I){switch(m.value=[],l.value=[],Ne.value){case M.targetMyself:m.value.push(g.value);break;case M.targetOneFriend:m.value.push(g.value);break;case M.targetAllFriends:m.value=e.characters.filter(U=>U.nowHP>0);break;case M.targetRandomFriend:break;case M.targetOneEnemy:l.value.push(i.value[I]);break;case M.targetColumnEnemy:k(I);break;case M.targetRowEnemy:R(I);break;case M.targetAllEnemy:l.value=i.value.filter(U=>U!==null);break;case M.targetRandomEnemy:l.value=i.value.filter(U=>U!==null);break}}const k=I=>{for(let U=I%3;U<i.value.length;U+=3)i.value[U]!==null&&l.value.push(i.value[U])},R=I=>{let U=I<=2?0:3,N=I<=2?2:5;for(let te=U;te<=N;te++)i.value[te]!==null&&l.value.push(i.value[te])},V=(I,U)=>{I=="over"?(m.value=[],m.value.push(U)):I=="click"&&J&&(J(),J=null)},W=(I=!1)=>{oe.AttackBtn=I?{}:{opacity:.5},oe.SkillBtn=I?{}:{opacity:.5}};async function ie(){return new Promise(I=>{J=I})}function me(I,U){i.value[I]&&(_.value=U)}function ae(I){i.value[I]&&(_.value=void 0)}function _e(I,U){i.value[I]&&(_.value=U,T.value==="selectTarget"&&(l.value.includes(i.value[I])?J&&(J(),J=null):x(I)))}async function fe(I){T.value="monsterTurn",await Ie(I,Te())}const Te=()=>{const I=e.characters.filter(ke=>ke.nowHP>0),U=I.reduce((ke,mt)=>ke+mt.totalStatus.Hate,0),N=I.map(ke=>ke.totalStatus.Hate/U),te=Math.random();let Re=0;for(let ke=0;ke<N.length;ke++)if(Re+=N[ke],te<Re)return I[ke]};let E,v,O;async function ce(I){let U,N;if(Le==M.actionAttack)le(I.name+"'s "+M.actionAttack,1),N=l.value[0],U=N.order,a.value[U]=[],he(I,N,U),E=M.normalAttackTime,nt(I),await mi(M.normalAttackTime+M.effectTime);else{le(I.name+"'s "+Oe.name,1);for(const te of Oe.skill_effect){if(E=te.anime_time,v=0,O=0,Ne.value!=te.target_type&&ue(te.target_type,I),Ne.value=te.target_type,te.target==1)b.value=TR(te,Oe.name,m.value,I),Be(te);else if(te.target==2){if(a.value=Array.from({length:6},()=>[]),te.target_type==M.targetRandomEnemy)for(let Re=1;Re<=te.effect_times;Re++)N=l.value[To(l.value.length)],U=N.order,he(I,N,U,te),O+=1;else for(let Re of l.value){U=Re.order;for(let ke=1;ke<=te.effect_times;ke++)he(I,Re,U,te),O+=1}Me(te)}v=M.effectTime+O*M.delayTime,await mi(E+v)}}for(let te of l.value)te.nowHP==0&&(i.value=i.value.map(Re=>Re===te?null:Re))}function ue(I,U){switch(m.value=[],l.value=[],I){case M.targetMyself:m.value.push(U);break;case M.targetAllFriends:m.value=e.characters.filter(N=>N.nowHP>0);break;case M.targetRandomFriend:break;case M.targetAllEnemy:l.value=i.value.filter(N=>N!==null);break;case M.targetRandomEnemy:l.value=i.value.filter(N=>N!==null);break}}function he(I,U,N,te){let Re=0,ke=0,mt=0,Kt=0,ot=0;if(ve(I.totalStatus.HitRate,U.SPD)){Le==M.actionAttack||Le==M.actionSkill&&(te==null?void 0:te.base_status)==M.statusATK?(Re=I.totalStatus.ATK,ke=U.DEF):Le==M.actionSkill&&(te==null?void 0:te.base_status)==M.statusMGC&&(Re=I.totalStatus.MGC,ke=U.MDF),Kt=Ae(I.totalStatus.CritRate,ke)?M.critDamageRate:M.normalDamageRate,mt=Le==M.actionAttack?1:te.effect_amount,ot=Math.floor((Re-ke/1.5)*mt*Kt),console.log("characterAttack",Re),ot=ot<0?0:ot;const Ft=Ee(ot);U.nowHP=ot>U.nowHP?0:U.nowHP-ot,U.nowHP==0&&(L.value+=U.EXP,F.value+=U.GOLD),a.value[N].push(Ft),le("> "+ot+" damage to "+U.name,1)}else{const Ft=Ee(M.strMiss);a.value[N].push(Ft)}}const Ee=I=>{const U={top:en(M.minEffectTop,M.maxEffectTop)+"%",left:en(M.minEffectLeft,M.maxEffectLeft)+"%"};return{effect:I,position:U,visible:!1}};function ve(I,U){let N=I-Math.floor(U/10);return Math.random()<=N/100}function Ae(I,U){let N=I-Math.floor(U/5);return Math.random()<=N/100}function Ve(I,U,N){console.log("characterHeal",I,N,U),N==M.statusnowHP?I.nowHP=I.nowHP+U>I.totalStatus.HP?I.totalStatus.HP:I.nowHP+U:N==M.statusnowMP&&(I.nowMP=I.nowMP+U>I.totalStatus.MP?I.totalStatus.MP:I.nowMP+U),b.value[q(I)]=U,O+=1,le("> Recovers "+I.name+"'s "+N+" by "+U,1)}function nt(I){if(I.equipment.WEP)switch(I.equipment.WEP.kind){case M.wepSword:case M.wepAxe:case M.wepDagger:c.value=yR;break;case M.wepWand:c.value=$f;break;case M.wepBow:case M.wepSpear:c.value=ER;break}else c.value=$f;let U=l.value[0].order;u.value[U]=!0}function Me(I){c.value=I.skill_anime;let U=l.value[0].order;if(I.target_type==M.targetOneEnemy)u.value[U]=!0;else switch(f.value=I.target_type,I.target_type){case M.targetColumnEnemy:p.value=7+U%3*27;break;case M.targetRowEnemy:d.value=15+Math.floor(U/3)*25;break;case M.targetAllEnemy:f.value=M.targetAll;break;case M.targetRandomEnemy:f.value=M.targetAll;break}}const je=(I=0)=>{setTimeout(()=>{f.value="",u.value[I]=!1,Ge()},E)};function Be(I){switch(console.log("skillEffect",I),I.target_type){case M.targetMyself:case M.targetOneFriend:let U=q(m.value[0]);w.value=I.skill_anime,h.value[U]=!0,setTimeout(()=>{h.value[U]=!1,w.value=null,ze(I.effect_type)},E);break;case M.targetAllFriends:f.value=M.targetAll,c.value=I.skill_anime,setTimeout(()=>{c.value="",f.value="",ze(I.effect_type)},E);break;case M.targetRandomFriend:break}}function ze(I){let U=M.delayTime;C.value=I;for(let N=0;N<e.characters.length;N++)console.log("applyEffectToCharacters",b.value[N],C.value),b.value[N]!=null&&(setTimeout(()=>{y.value[N]=!0,setTimeout(()=>{y.value[N]=!1,b.value[N]=null},M.effectTime)},U),U+=M.delayTime,v=M.effectTime+U)}function Ge(){let I=M.delayTime;for(let U of a.value)if(Array.isArray(U))for(let N of U)setTimeout(()=>{N.visible=!0,setTimeout(()=>{N.visible=!1},M.effectTime)},I),I+=M.delayTime}async function Ie(I,U){console.log("monsterAction",I),rt(I,U);let N=q(U);m.value=[],m.value.push(U),w.value=bR,h.value[N]=!0,setTimeout(()=>{h.value[N]=!1,w.value=null,ze(M.effectDamage)},M.monsterAttackTime),U.nowHP==0,await mi(M.monsterAttackTime+M.effectTime)}function rt(I,U){let N=0,te=0,Re=0,ke=0;ve(I.HitRate,U.totalStatus.SPD)?(N=I.ATK,te=U.totalStatus.DEF,Re=Ae(I.CritRate,te)?M.critDamageRate:M.normalDamageRate,ke=Math.floor((N-te/1.5)*Re),console.log("monsterAttack",N),ke=ke<0?0:ke,b.value[q(U)]=ke,U.nowHP=ke>U.nowHP?0:U.nowHP-ke):b.value[q(U)]=M.strMiss}function B(){m.value=[],l.value=[];for(let I of e.characters){for(let U of I.conditions)switch(U.status){case M.effectRegeneration:Ve(I,U.value,M.statusnowHP),ze(M.effectHeal),console.log(M.effectRegeneration,U);break}I.updateBuffs(),I.updateConditions()}}return(I,U)=>(Q(),pe(ut,null,[T.value=="encount"?(Q(),xt(cR,{key:0})):We("",!0),T.value=="result"?(Q(),xt(iR,{key:1,getGold:F.value,getExp:L.value},null,8,["getGold","getExp"])):We("",!0),T.value!=="encount"&&T.value!=="result"?(Q(),pe("div",AR,[De(HC,{class:"turnOrder",turnOrder:H.value,numOrder:S.value},null,8,["turnOrder","numOrder"]),P("div",wR,[(Q(!0),pe(ut,null,Vt(i.value,(N,te)=>(Q(),pe("div",{key:te,class:Dt(["monsterCell",{pickMonster:Ce(N),currentMonster:N!=null&&N==o.value}])},[N?(Q(),pe("div",{key:0,onClick:Re=>_e(te,N),onMouseover:Re=>me(te,N),onMouseout:Re=>ae(te)},[(Q(!0),pe(ut,null,Vt(a.value[te],(Re,ke)=>(Q(),pe("span",{key:ke},[Re.visible?(Q(),pe("span",{key:0,class:"monsterEffect",style:Ln(Re.position)},be(Re.effect),5)):We("",!0)]))),128)),u.value[te]?(Q(),pe("img",{key:0,src:c.value,class:"skillOneEffect",alt:"skill effect",onLoad:Re=>je(te)},null,40,RR)):We("",!0),P("img",{src:N.GraphicUrl,class:"monsterImage",alt:"monsterImage"},null,8,PR)],40,CR)):We("",!0),_.value&&_.value==N?(Q(),pe("div",LR,[P("div",DR,be(_.value.name),1),P("div",IR,[De(no,{nowHP:_.value.nowHP,maxHP:_.value.HP},null,8,["nowHP","maxHP"])])])):We("",!0)],2))),128))]),f.value==K(M).targetRowEnemy?(Q(),pe("img",{key:0,src:c.value,class:"skillRowEffect",style:Ln({top:d.value+"vh"}),alt:"skill effect",onLoad:U[0]||(U[0]=N=>je())},null,44,UR)):We("",!0),f.value==K(M).targetColumnEnemy?(Q(),pe("img",{key:1,src:c.value,class:"skillColEffect",style:Ln({left:p.value+"vw"}),alt:"skill effect",onLoad:U[1]||(U[1]=N=>je())},null,44,FR)):We("",!0),f.value==K(M).targetAll?(Q(),pe("img",{key:2,src:c.value,class:"skillAllEffect",alt:"skill effect",onLoad:U[2]||(U[2]=N=>je())},null,40,kR)):We("",!0),T.value=="startTurn"?(Q(),pe("div",NR,be(K(Z))+" Turn Start",1)):We("",!0),T.value=="endBattle"?(Q(),pe("div",OR,"Battle Ends")):We("",!0),De(pc,{class:"CurrentUI",currentCharacter:g.value,targetCharacter:m.value,showCharacterEffect:y.value,toCharacterEffect:b.value,toCharacterEffectType:C.value,showCharacterAnime:h.value,toCharacterAnime:w.value,selectionMode:Ne.value,onSelectCharacter:V},null,8,["currentCharacter","targetCharacter","showCharacterEffect","toCharacterEffect","toCharacterEffectType","showCharacterAnime","toCharacterAnime","selectionMode"]),De(mp,{ref_key:"actionLog",ref:X,class:"actionLog"},null,512),T.value=="characterTurn"||T.value=="selectTarget"?(Q(),pe("div",BR,[De(hR,{id:"IconAttack",class:"IconAttack",onClick:U[3]||(U[3]=N=>$e(K(M).actionAttack)),style:Ln(oe.AttackBtn)},null,8,["style"]),$.value==K(M).actionSkill?(Q(),xt(gR,{key:0,id:"IconAttack",class:"IconSkill",onClick:U[4]||(U[4]=N=>$e(K(M).actionSkill)),style:Ln(oe.SkillBtn)},null,8,["style"])):(Q(),xt(SR,{key:1,id:"IconAttack",class:"IconSkill",onClick:U[5]||(U[5]=N=>$e(K(M).actionSkill)),style:Ln(oe.SkillBtn)},null,8,["style"])),ye.value?(Q(),xt(kh,{key:2,class:"SkillUI",character:g.value,processBattle:ye.value,onUseSkill:Fe},null,8,["character","processBattle"])):We("",!0),K(Le)==K(M).actionSkill&&T.value=="selectTarget"?(Q(),pe("div",HR,[De(Al,{class:"attackName",inside:K(Oe).name},null,8,["inside"]),De(uc,{class:"skillInfo",skillInfo:K(Oe).info},null,8,["skillInfo"])])):We("",!0),K(Le)==K(M).actionAttack?(Q(),xt(Al,{key:4,class:"attackName",inside:K(M).actionAttack},null,8,["inside"])):We("",!0)])):We("",!0)])):We("",!0)],64))}}),GR=Ze(zR,[["__scopeId","data-v-92726f50"]]),VR="/app2/icon/playerPosition.png",WR={class:"modal"},$R=Xe({__name:"Map",setup(n){const e=_p(),t=ge(),i=ge(),s=new Image;s.src=VR;const r=ge(!1),a=()=>{if(pt.length==0||!i.value||!t.value)return;const c=i.value.getContext("2d");if(c){i.value.width=pt[0].length*3,i.value.height=pt.length*3,t.value.width=40*3,t.value.height=40*3;for(let u=0;u<pt.length;u++)for(let f=0;f<pt[u].length;f++){switch(pt[u][f]){case 0:c.fillStyle=M.MiniWallColor;break;case 1:case 2:c.fillStyle=M.MiniRoomColor;break}c.fillRect(f*3,u*3,3,3)}o()}},o=()=>{var p;if(!t.value||!i.value||!e.playerPosition)return;const c=(p=t.value)==null?void 0:p.getContext("2d"),u=i.value.getContext("2d");if(!c||!u)return;const f=Math.floor(e.playerPosition.x/M.BlockSize-1),d=Math.floor(e.playerPosition.z/M.BlockSize-1);c.clearRect(0,0,t.value.width,t.value.height),c.drawImage(i.value,f*3-20*3,d*3-20*3,40*3,40*3,0,0,40*3,40*3),c.drawImage(s,20*3,20*3,M.BlockSize,M.BlockSize),u.fillStyle=M.MiniMoveColor,u.fillRect((f+1)*3,(d+1)*3,3,3),e.playerPosition.clone()};function l(){r.value=!r.value,o(),console.log("clickMap",r)}return Et(()=>pt,()=>{Zs(a)},{immediate:!0,deep:!0}),Et(()=>e.playerPosition,()=>{o()},{immediate:!0,deep:!0}),(c,u)=>(Q(),pe("div",null,[P("canvas",{class:"miniMap",ref_key:"MapUI",ref:t,onClick:u[0]||(u[0]=f=>l())},null,512),Tt(P("div",WR,[P("canvas",{class:"fullMap",ref_key:"fullMap",ref:i,onClick:u[1]||(u[1]=f=>l())},null,512)],512),[[At,r.value]])]))}}),qR=Ze($R,[["__scopeId","data-v-a00f7274"]]),XR=[{mon_id:1,mon_type:1,name:"mon1",GraphicUrl:"img/monster/mon1.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:2,mon_type:1,name:"mon2",GraphicUrl:"img/monster/mon2.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:3,mon_type:1,name:"mon3",GraphicUrl:"img/monster/mon3.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:4,mon_type:1,name:"mon4",GraphicUrl:"img/monster/mon4.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:5,mon_type:1,name:"mon5",GraphicUrl:"img/monster/mon5.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:6,mon_type:1,name:"mon6",GraphicUrl:"img/monster/mon6.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:7,mon_type:1,name:"mon7",GraphicUrl:"img/monster/mon7.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:8,mon_type:1,name:"mon8",GraphicUrl:"img/monster/mon8.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:9,mon_type:1,name:"boss3",GraphicUrl:"img/monster/boss3.png",LV:10,HP:200,MP:8,ATK:50,MGC:50,DEF:50,MDF:50,DEX:50,SPD:50,GOLD:100,EXP:300},{mon_id:10,mon_type:1,name:"boss5",GraphicUrl:"img/monster/boss5.png",LV:20,HP:500,MP:100,ATK:100,MGC:100,DEF:100,MDF:100,DEX:100,SPD:50,GOLD:1e3,EXP:1e3}],YR="/app2/icon/fullscreen.svg",jR=["src"],KR=Xe({__name:"IconFullscreen",setup(n){const{enterFullscreen:e}=Bh(),t=ge(document.fullscreenElement!==null);return ja(()=>{document.onfullscreenchange=()=>{t.value=document.fullscreenElement!==null}}),(i,s)=>Tt((Q(),pe("img",{class:"Icon",src:K(YR),alt:"Fullscreen",onClick:s[0]||(s[0]=r=>K(e)())},null,8,jR)),[[At,!t.value]])}}),ZR=Ze(KR,[["__scopeId","data-v-7a725939"]]),JR={class:"UI"},QR={key:0},eP={key:1},tP={key:2},nP={key:0},iP={key:1},sP=Xe({__name:"App",setup(n){const e=Hn();console.log("activeSkills",Ph),console.log("passiveSkills",Ch);const t=ui();t.setParty(),console.log("party",t.characters);const i=Uh();i.setEquipBag(),console.log("equipmentType",i.equipmentType),console.log("equipmentItem",i.equipmentItem);const s=ge(XR.map(a=>new Ol(a)));En("monsterList",s.value),console.log("monsterList",s.value);const r=fi();return(a,o)=>(Q(),pe("div",JR,[K(e).status==K(M).statusOpening?(Q(),pe("div",QR,[De(Tg)])):K(e).status==K(M).statusTown?(Q(),pe("div",eP,[De($y)])):K(e).status==K(M).statusDungeon?(Q(),pe("div",tP,[K(e).processDungeon==K(M).processSearch?(Q(),pe("div",nP,[Tt(De(pc,{class:"CurrentUI"},null,512),[[At,K(r).current]]),De(mc,{class:"PartyUI"})])):K(e).processDungeon==K(M).processBattle?(Q(),pe("div",iP,[De(GR)])):We("",!0),De(UC),Tt(De(qR,{class:"MapUI"},null,512),[[At,K(r).map]])])):We("",!0),De(ZR,{class:"IconFullscreen"})]))}}),rP=Ze(sP,[["__scopeId","data-v-fdd14111"]]),aP={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},oP={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function lP(n,e){let t;function i(){t=$l(),t.run(()=>e.length?e(()=>{t==null||t.stop(),i()}):e())}Et(n,s=>{s&&!t?i():s||(t==null||t.stop(),t=void 0)},{immediate:!0}),Ld(()=>{t==null||t.stop()})}const qn=typeof window<"u",cP=qn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function uP(n,e,t){const i=e.length-1;if(i<0)return n===void 0?t:n;for(let s=0;s<i;s++){if(n==null)return t;n=n[e[s]]}return n==null||n[e[i]]===void 0?t:n[e[i]]}function qf(n,e,t){return n==null||!e||typeof e!="string"?t:n[e]!==void 0?n[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),uP(n,e.split("."),t))}function gp(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:n},(t,i)=>e+i)}function Xf(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function rl(n,e){return e.every(t=>n.hasOwnProperty(t))}function fP(n,e){const t={},i=new Set(Object.keys(n));for(const s of e)i.has(s)&&(t[s]=n[s]);return t}function dP(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(t,n))}function Yf(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return n+t.repeat(Math.max(0,e-n.length))}function jf(n,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-n.length))+n}function hP(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let i=0;for(;i<n.length;)t.push(n.substr(i,e)),i+=e;return t}function Ui(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const i={};for(const s in n)i[s]=n[s];for(const s in e){const r=n[s],a=e[s];if(Xf(r)&&Xf(a)){i[s]=Ui(r,a,t);continue}if(Array.isArray(r)&&Array.isArray(a)&&t){i[s]=t(r,a);continue}i[s]=a}return i}function Hs(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Hs.cache.has(n))return Hs.cache.get(n);const e=n.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Hs.cache.set(n,e),e}Hs.cache=new Map;const Ls=2.4,Kf=.2126729,Zf=.7151522,Jf=.072175,pP=.55,mP=.58,_P=.57,gP=.62,Ma=.03,Qf=1.45,vP=5e-4,MP=1.25,xP=1.25,ed=.078,td=12.82051282051282,xa=.06,nd=.001;function id(n,e){const t=(n.r/255)**Ls,i=(n.g/255)**Ls,s=(n.b/255)**Ls,r=(e.r/255)**Ls,a=(e.g/255)**Ls,o=(e.b/255)**Ls;let l=t*Kf+i*Zf+s*Jf,c=r*Kf+a*Zf+o*Jf;if(l<=Ma&&(l+=(Ma-l)**Qf),c<=Ma&&(c+=(Ma-c)**Qf),Math.abs(c-l)<vP)return 0;let u;if(c>l){const f=(c**pP-l**mP)*MP;u=f<nd?0:f<ed?f-f*td*xa:f-xa}else{const f=(c**gP-l**_P)*xP;u=f>-nd?0:f>-ed?f-f*td*xa:f+xa}return u*100}const Ba=.20689655172413793,SP=n=>n>Ba**3?Math.cbrt(n):n/(3*Ba**2)+4/29,yP=n=>n>Ba?n**3:3*Ba**2*(n-4/29);function vp(n){const e=SP,t=e(n[1]);return[116*t-16,500*(e(n[0]/.95047)-t),200*(t-e(n[2]/1.08883))]}function Mp(n){const e=yP,t=(n[0]+16)/116;return[e(t+n[1]/500)*.95047,e(t),e(t-n[2]/200)*1.08883]}const EP=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],bP=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055,TP=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],AP=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function xp(n){const e=Array(3),t=bP,i=EP;for(let s=0;s<3;++s)e[s]=Math.round(dP(t(i[s][0]*n[0]+i[s][1]*n[1]+i[s][2]*n[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Ac(n){let{r:e,g:t,b:i}=n;const s=[0,0,0],r=AP,a=TP;e=r(e/255),t=r(t/255),i=r(i/255);for(let o=0;o<3;++o)s[o]=a[o][0]*e+a[o][1]*t+a[o][2]*i;return s}const sd=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,wP={rgb:(n,e,t,i)=>({r:n,g:e,b:t,a:i}),rgba:(n,e,t,i)=>({r:n,g:e,b:t,a:i}),hsl:(n,e,t,i)=>rd({h:n,s:e,l:t,a:i}),hsla:(n,e,t,i)=>rd({h:n,s:e,l:t,a:i}),hsv:(n,e,t,i)=>Pr({h:n,s:e,v:t,a:i}),hsva:(n,e,t,i)=>Pr({h:n,s:e,v:t,a:i})};function ai(n){if(typeof n=="number")return{r:(n&16711680)>>16,g:(n&65280)>>8,b:n&255};if(typeof n=="string"&&sd.test(n)){const{groups:e}=n.match(sd),{fn:t,values:i}=e,s=i.split(/,\s*/).map(r=>r.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(r)/100:parseFloat(r));return wP[t](...s)}else if(typeof n=="string"){let e=n.startsWith("#")?n.slice(1):n;return[3,4].includes(e.length)?e=e.split("").map(t=>t+t).join(""):[6,8].includes(e.length),RP(e)}else if(typeof n=="object"){if(rl(n,["r","g","b"]))return n;if(rl(n,["h","s","l"]))return Pr(Sp(n));if(rl(n,["h","s","v"]))return Pr(n)}throw new TypeError(`Invalid color: ${n==null?n:String(n)||n.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Pr(n){const{h:e,s:t,v:i,a:s}=n,r=o=>{const l=(o+e/60)%6;return i-i*t*Math.max(Math.min(l,4-l,1),0)},a=[r(5),r(3),r(1)].map(o=>Math.round(o*255));return{r:a[0],g:a[1],b:a[2],a:s}}function rd(n){return Pr(Sp(n))}function Sp(n){const{h:e,s:t,l:i,a:s}=n,r=i+t*Math.min(i,1-i),a=r===0?0:2-2*i/r;return{h:e,s:a,v:r,a:s}}function Sa(n){const e=Math.round(n).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function CP(n){let{r:e,g:t,b:i,a:s}=n;return`#${[Sa(e),Sa(t),Sa(i),s!==void 0?Sa(Math.round(s*255)):""].join("")}`}function RP(n){n=PP(n);let[e,t,i,s]=hP(n,2).map(r=>parseInt(r,16));return s=s===void 0?s:s/255,{r:e,g:t,b:i,a:s}}function PP(n){return n.startsWith("#")&&(n=n.slice(1)),n=n.replace(/([^0-9a-f])/gi,"F"),(n.length===3||n.length===4)&&(n=n.split("").map(e=>e+e).join("")),n.length!==6&&(n=Yf(Yf(n,6),8,"F")),n}function LP(n,e){const t=vp(Ac(n));return t[0]=t[0]+e*10,xp(Mp(t))}function DP(n,e){const t=vp(Ac(n));return t[0]=t[0]-e*10,xp(Mp(t))}function IP(n){const e=ai(n);return Ac(e)[1]}function UP(n){const e=Math.abs(id(ai(0),ai(n)));return Math.abs(id(ai(16777215),ai(n)))>Math.min(e,50)?"#fff":"#000"}function yp(n,e){return t=>Object.keys(n).reduce((i,s)=>{const a=typeof n[s]=="object"&&n[s]!=null&&!Array.isArray(n[s])?n[s]:{type:n[s]};return t&&s in t?i[s]={...a,default:t[s]}:i[s]=a,e&&!i[s].source&&(i[s].source=e),i},{})}const Lr=Symbol.for("vuetify:defaults");function FP(n){return ge(n)}function Ep(){const n=vt(Lr);if(!n)throw new Error("[Vuetify] Could not find defaults instance");return n}function kP(n,e){var t,i;return typeof((t=n.props)==null?void 0:t[e])<"u"||typeof((i=n.props)==null?void 0:i[Hs(e)])<"u"}function NP(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ep();const i=co("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=Lt(()=>{var l;return(l=t.value)==null?void 0:l[n._as??e]}),r=new Proxy(n,{get(l,c){var f,d,p,_;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=s.value)==null?void 0:f[c],u].filter(g=>g!=null):typeof c=="string"&&!kP(i.vnode,c)?((d=s.value)==null?void 0:d[c])??((_=(p=t.value)==null?void 0:p.global)==null?void 0:_[c])??u:u}}),a=ks();ja(()=>{if(s.value){const l=Object.entries(s.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});a.value=l.length?Object.fromEntries(l):void 0}else a.value=void 0});function o(){const l=BP(Lr,i);En(Lr,Lt(()=>a.value?Ui((l==null?void 0:l.value)??{},a.value):l==null?void 0:l.value))}return{props:r,provideSubDefaults:o}}function Or(n){if(n._setup=n._setup??n.setup,!n.name)return n;if(n._setup){n.props=yp(n.props??{},n.name)();const e=Object.keys(n.props).filter(t=>t!=="class"&&t!=="style");n.filterProps=function(i){return fP(i,e)},n.props._as=String,n.setup=function(i,s){const r=Ep();if(!r.value)return n._setup(i,s);const{props:a,provideSubDefaults:o}=NP(i,i._as??n.name,r),l=n._setup(a,s);return o(),l}}return n}function OP(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(n?Or:Xe)(e)}function co(n,e){const t=gh();if(!t)throw new Error(`[Vuetify] ${n} ${e||"must be called from inside a setup function"}`);return t}let bp=0,Aa=new WeakMap;function Tp(){const n=co("getUid");if(Aa.has(n))return Aa.get(n);{const e=bp++;return Aa.set(n,e),e}}Tp.reset=()=>{bp=0,Aa=new WeakMap};function BP(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:co("injectSelf");const{provides:t}=e;if(t&&n in t)return t[n]}function HP(n,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const r=co("useProxiedModel"),a=ge(n[e]!==void 0?n[e]:t),o=Hs(e),c=Lt(o!==e?()=>{var f,d,p,_;return n[e],!!(((f=r.vnode.props)!=null&&f.hasOwnProperty(e)||(d=r.vnode.props)!=null&&d.hasOwnProperty(o))&&((p=r.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${e}`)||(_=r.vnode.props)!=null&&_.hasOwnProperty(`onUpdate:${o}`)))}:()=>{var f,d;return n[e],!!((f=r.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=r.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});lP(()=>!c.value,()=>{Et(()=>n[e],f=>{a.value=f})});const u=Lt({get(){const f=n[e];return i(c.value?f:a.value)},set(f){const d=s(f),p=lt(c.value?n[e]:a.value);p===d||i(p)===f||(a.value=d,r==null||r.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?n[e]:a.value}),u}const ad="$vuetify.",od=(n,e)=>n.replace(/\{(\d+)\}/g,(t,i)=>String(e[+i])),Ap=(n,e,t)=>function(i){for(var s=arguments.length,r=new Array(s>1?s-1:0),a=1;a<s;a++)r[a-1]=arguments[a];if(!i.startsWith(ad))return od(i,r);const o=i.replace(ad,""),l=n.value&&t.value[n.value],c=e.value&&t.value[e.value];let u=qf(l,o,null);return u||(`${i}${n.value}`,u=qf(c,o,null)),u||(u=i),typeof u!="string"&&(u=i),od(u,r)};function wp(n,e){return(t,i)=>new Intl.NumberFormat([n.value,e.value],i).format(t)}function al(n,e,t){const i=HP(n,e,n[e]??t.value);return i.value=n[e]??t.value,Et(t,s=>{n[e]==null&&(i.value=t.value)}),i}function Cp(n){return e=>{const t=al(e,"locale",n.current),i=al(e,"fallback",n.fallback),s=al(e,"messages",n.messages);return{name:"vuetify",current:t,fallback:i,messages:s,t:Ap(t,i,s),n:wp(t,i),provide:Cp({current:t,fallback:i,messages:s})}}}function zP(n){const e=ks((n==null?void 0:n.locale)??"en"),t=ks((n==null?void 0:n.fallback)??"en"),i=ge({en:aP,...n==null?void 0:n.messages});return{name:"vuetify",current:e,fallback:t,messages:i,t:Ap(e,t,i),n:wp(e,t),provide:Cp({current:e,fallback:t,messages:i})}}const ld=Symbol.for("vuetify:locale");function GP(n){return n.name!=null}function VP(n){const e=n!=null&&n.adapter&&GP(n==null?void 0:n.adapter)?n==null?void 0:n.adapter:zP(n),t=WP(e,n);return{...e,...t}}function WP(n,e){const t=ge((e==null?void 0:e.rtl)??oP),i=Lt(()=>t.value[n.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:Lt(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}const Bl={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function $P(n,e){const t=[];let i=[];const s=Rp(n),r=Pp(n),a=(s.getDay()-Bl[e.slice(-2).toUpperCase()]+7)%7,o=(r.getDay()-Bl[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<a;l++){const c=new Date(s);c.setDate(c.getDate()-(a-l)),i.push(c)}for(let l=1;l<=r.getDate();l++){const c=new Date(n.getFullYear(),n.getMonth(),l);i.push(c),i.length===7&&(t.push(i),i=[])}for(let l=1;l<7-o;l++){const c=new Date(r);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&t.push(i),t}function qP(n){const e=new Date(n);for(;e.getDay()!==0;)e.setDate(e.getDate()-1);return e}function XP(n){const e=new Date(n);for(;e.getDay()!==6;)e.setDate(e.getDate()+1);return e}function Rp(n){return new Date(n.getFullYear(),n.getMonth(),1)}function Pp(n){return new Date(n.getFullYear(),n.getMonth()+1,0)}function YP(n){const e=n.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const jP=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function Lp(n){if(n==null)return new Date;if(n instanceof Date)return n;if(typeof n=="string"){let e;if(jP.test(n))return YP(n);if(e=Date.parse(n),!isNaN(e))return new Date(e)}return null}const cd=new Date(2e3,0,2);function KP(n){const e=Bl[n.slice(-2).toUpperCase()];return gp(7).map(t=>{const i=new Date(cd);i.setDate(cd.getDate()+e+t);const s=new Intl.DateTimeFormat(n,{weekday:"short"}).format(i);return s.charAt(0).toUpperCase()+s.slice(1)})}function ZP(n,e,t,i){const s=Lp(n)??new Date,r=i==null?void 0:i[e];if(typeof r=="function")return r(s,e,t);let a={};switch(e){case"fullDateWithWeekday":a={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"hours12h":a={hour:"numeric",hour12:!0};break;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":a={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"dayOfMonth":a={day:"numeric"};break;case"shortDate":a={year:"2-digit",month:"numeric",day:"numeric"};break;case"weekdayShort":a={weekday:"short"};break;case"year":a={year:"numeric"};break;default:a=r??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(t,a).format(s)}function JP(n,e){const t=n.toJsDate(e),i=t.getFullYear(),s=jf(String(t.getMonth()+1),2,"0"),r=jf(String(t.getDate()),2,"0");return`${i}-${s}-${r}`}function QP(n){const[e,t,i]=n.split("-").map(Number);return new Date(e,t-1,i)}function e2(n,e){const t=new Date(n);return t.setMinutes(t.getMinutes()+e),t}function t2(n,e){const t=new Date(n);return t.setHours(t.getHours()+e),t}function n2(n,e){const t=new Date(n);return t.setDate(t.getDate()+e),t}function i2(n,e){const t=new Date(n);return t.setDate(t.getDate()+e*7),t}function s2(n,e){const t=new Date(n);return t.setMonth(t.getMonth()+e),t}function r2(n){return n.getFullYear()}function a2(n){return n.getMonth()}function o2(n){return new Date(n.getFullYear(),n.getMonth()+1,1)}function l2(n){return n.getHours()}function c2(n){return n.getMinutes()}function u2(n){return new Date(n.getFullYear(),0,1)}function f2(n){return new Date(n.getFullYear(),11,31)}function d2(n,e){return Hl(n,e[0])&&p2(n,e[1])}function h2(n){const e=new Date(n);return e instanceof Date&&!isNaN(e.getTime())}function Hl(n,e){return n.getTime()>e.getTime()}function p2(n,e){return n.getTime()<e.getTime()}function ud(n,e){return n.getTime()===e.getTime()}function m2(n,e){return n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function _2(n,e){return n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function g2(n,e,t){const i=new Date(n),s=new Date(e);return t==="month"?i.getMonth()-s.getMonth()+(i.getFullYear()-s.getFullYear())*12:Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24))}function v2(n,e){const t=new Date(n);return t.setHours(e),t}function M2(n,e){const t=new Date(n);return t.setMinutes(e),t}function x2(n,e){const t=new Date(n);return t.setMonth(e),t}function S2(n,e){const t=new Date(n);return t.setFullYear(e),t}function y2(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate())}function E2(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate(),23,59,59,999)}class b2{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return Lp(e)}toJsDate(e){return e}toISO(e){return JP(this,e)}parseISO(e){return QP(e)}addMinutes(e,t){return e2(e,t)}addHours(e,t){return t2(e,t)}addDays(e,t){return n2(e,t)}addWeeks(e,t){return i2(e,t)}addMonths(e,t){return s2(e,t)}getWeekArray(e){return $P(e,this.locale)}startOfWeek(e){return qP(e)}endOfWeek(e){return XP(e)}startOfMonth(e){return Rp(e)}endOfMonth(e){return Pp(e)}format(e,t){return ZP(e,t,this.locale,this.formats)}isEqual(e,t){return ud(e,t)}isValid(e){return h2(e)}isWithinRange(e,t){return d2(e,t)}isAfter(e,t){return Hl(e,t)}isBefore(e,t){return!Hl(e,t)&&!ud(e,t)}isSameDay(e,t){return m2(e,t)}isSameMonth(e,t){return _2(e,t)}setMinutes(e,t){return M2(e,t)}setHours(e,t){return v2(e,t)}setMonth(e,t){return x2(e,t)}setYear(e,t){return S2(e,t)}getDiff(e,t,i){return g2(e,t,i)}getWeekdays(){return KP(this.locale)}getYear(e){return r2(e)}getMonth(e){return a2(e)}getNextMonth(e){return o2(e)}getHours(e){return l2(e)}getMinutes(e){return c2(e)}startOfDay(e){return y2(e)}endOfDay(e){return E2(e)}startOfYear(e){return u2(e)}endOfYear(e){return f2(e)}}const T2=Symbol.for("vuetify:date-options"),fd=Symbol.for("vuetify:date-adapter");function A2(n,e){const t=Ui({adapter:b2,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},n);return{options:t,instance:w2(t,e)}}function w2(n,e){const t=jt(typeof n.adapter=="function"?new n.adapter({locale:n.locale[e.current.value]??e.current.value,formats:n.formats}):n.adapter);return Et(e.current,i=>{t.locale=n.locale[i]??i??t.locale}),t}const dd=Symbol.for("vuetify:display"),hd={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},C2=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hd;return Ui(hd,n)};function pd(n){return qn&&!n?window.innerWidth:typeof n=="object"&&n.clientWidth||0}function md(n){return qn&&!n?window.innerHeight:typeof n=="object"&&n.clientHeight||0}function _d(n){const e=qn&&!n?window.navigator.userAgent:"ssr";function t(_){return!!e.match(_)}const i=t(/android/i),s=t(/iphone|ipad|ipod/i),r=t(/cordova/i),a=t(/electron/i),o=t(/chrome/i),l=t(/edge/i),c=t(/firefox/i),u=t(/opera/i),f=t(/win/i),d=t(/mac/i),p=t(/linux/i);return{android:i,ios:s,cordova:r,electron:a,chrome:o,edge:l,firefox:c,opera:u,win:f,mac:d,linux:p,touch:cP,ssr:e==="ssr"}}function R2(n,e){const{thresholds:t,mobileBreakpoint:i}=C2(n),s=ks(md(e)),r=ks(_d(e)),a=jt({}),o=ks(pd(e));function l(){s.value=md(),o.value=pd()}function c(){l(),r.value=_d()}return ja(()=>{const u=o.value<t.sm,f=o.value<t.md&&!u,d=o.value<t.lg&&!(f||u),p=o.value<t.xl&&!(d||f||u),_=o.value<t.xxl&&!(p||d||f||u),g=o.value>=t.xxl,m=u?"xs":f?"sm":d?"md":p?"lg":_?"xl":"xxl",h=typeof i=="number"?i:t[i],w=o.value<h;a.xs=u,a.sm=f,a.md=d,a.lg=p,a.xl=_,a.xxl=g,a.smAndUp=!u,a.mdAndUp=!(u||f),a.lgAndUp=!(u||f||d),a.xlAndUp=!(u||f||d||p),a.smAndDown=!(d||p||_||g),a.mdAndDown=!(p||_||g),a.lgAndDown=!(_||g),a.xlAndDown=!g,a.name=m,a.height=s.value,a.width=o.value,a.mobile=w,a.mobileBreakpoint=i,a.platform=r.value,a.thresholds=t}),qn&&window.addEventListener("resize",l,{passive:!0}),{...Yd(a),update:c,ssr:!!e}}const P2={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},L2={component:n=>Gt(Dp,{...n,class:"mdi"})},D2=[String,Function,Object,Array],gd=Symbol.for("vuetify:icons"),uo=yp({icon:{type:D2},tag:{type:String,required:!0}},"icon");OP()({name:"VComponentIcon",props:uo(),setup(n,e){let{slots:t}=e;return()=>{const i=n.icon;return De(n.tag,null,{default:()=>{var s;return[n.icon?De(i,null,null):(s=t.default)==null?void 0:s.call(t)]}})}}});const I2=Or({name:"VSvgIcon",inheritAttrs:!1,props:uo(),setup(n,e){let{attrs:t}=e;return()=>De(n.tag,_h(t,{style:null}),{default:()=>[De("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(n.icon)?n.icon.map(i=>Array.isArray(i)?De("path",{d:i[0],"fill-opacity":i[1]},null):De("path",{d:i},null)):De("path",{d:n.icon},null)])]})}});Or({name:"VLigatureIcon",props:uo(),setup(n){return()=>De(n.tag,null,{default:()=>[n.icon]})}});const Dp=Or({name:"VClassIcon",props:uo(),setup(n){return()=>De(n.tag,{class:n.icon},null)}}),U2={svg:{component:I2},class:{component:Dp}};function F2(n){return Ui({defaultSet:"mdi",sets:{...U2,mdi:L2},aliases:{...P2,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},n)}const vd=Symbol.for("vuetify:theme");function Md(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function k2(){var i,s;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Md();const e=Md();if(!n)return{...e,isDisabled:!0};const t={};for(const[r,a]of Object.entries(n.themes??{})){const o=a.dark||r==="dark"?(i=e.themes)==null?void 0:i.dark:(s=e.themes)==null?void 0:s.light;t[r]=Ui(o,a)}return Ui(e,{...n,themes:t})}function N2(n){const e=k2(n),t=ge(e.defaultTheme),i=ge(e.themes),s=Lt(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const p=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const _ of e.variations.colors){const g=p.colors[_];if(g)for(const m of["lighten","darken"]){const h=m==="lighten"?LP:DP;for(const w of gp(e.variations[m],1))p.colors[`${_}-${m}-${w}`]=CP(h(ai(g),w))}}for(const _ of Object.keys(p.colors)){if(/^on-[a-z]/.test(_)||p.colors[`on-${_}`])continue;const g=`on-${_}`,m=ai(p.colors[_]);p.colors[g]=UP(m)}}return u}),r=Lt(()=>s.value[t.value]),a=Lt(()=>{const u=[];r.value.dark&&Xi(u,":root",["color-scheme: dark"]),Xi(u,":root",xd(r.value));for(const[_,g]of Object.entries(s.value))Xi(u,`.v-theme--${_}`,[`color-scheme: ${g.dark?"dark":"normal"}`,...xd(g)]);const f=[],d=[],p=new Set(Object.values(s.value).flatMap(_=>Object.keys(_.colors)));for(const _ of p)/^on-[a-z]/.test(_)?Xi(d,`.${_}`,[`color: rgb(var(--v-theme-${_})) !important`]):(Xi(f,`.bg-${_}`,[`--v-theme-overlay-multiplier: var(--v-theme-${_}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${_})) !important`,`color: rgb(var(--v-theme-on-${_})) !important`]),Xi(d,`.text-${_}`,[`color: rgb(var(--v-theme-${_})) !important`]),Xi(d,`.border-${_}`,[`--v-border-color: var(--v-theme-${_})`]));return u.push(...f,...d),u.map((_,g)=>g===0?_:`    ${_}`).join("")});function o(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const p=f.push(o);qn&&Et(a,()=>{p.patch(o)})}else qn?(f.addHeadObjs(Lt(o)),ja(()=>f.updateDOM())):f.addHeadObjs(o());else{let _=function(){if(typeof document<"u"&&!p){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",e.cspNonce&&g.setAttribute("nonce",e.cspNonce),p=g,document.head.appendChild(p)}p&&(p.innerHTML=a.value)};var d=_;let p=qn?document.getElementById("vuetify-theme-stylesheet"):null;qn?Et(a,_,{immediate:!0}):_()}}const c=Lt(()=>e.isDisabled?void 0:`v-theme--${t.value}`);return{install:l,isDisabled:e.isDisabled,name:t,themes:i,current:r,computedThemes:s,themeClasses:c,styles:a,global:{name:t,current:r}}}function Xi(n,e,t){n.push(`${e} {
`,...t.map(i=>`  ${i};
`),`}
`)}function xd(n){const e=n.dark?2:1,t=n.dark?1:2,i=[];for(const[s,r]of Object.entries(n.colors)){const a=ai(r);i.push(`--v-theme-${s}: ${a.r},${a.g},${a.b}`),s.startsWith("on-")||i.push(`--v-theme-${s}-overlay-multiplier: ${IP(r)>.18?e:t}`)}for(const[s,r]of Object.entries(n.variables)){const a=typeof r=="string"&&r.startsWith("#")?ai(r):void 0,o=a?`${a.r}, ${a.g}, ${a.b}`:void 0;i.push(`--v-${s}: ${o??r}`)}return i}function Ip(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...t}=n,i=Ui(e,t),{aliases:s={},components:r={},directives:a={}}=i,o=FP(i.defaults),l=R2(i.display,i.ssr),c=N2(i.theme),u=F2(i.icons),f=VP(i.locale),d=A2(i.date,f);return{install:_=>{for(const g in a)_.directive(g,a[g]);for(const g in r)_.component(g,r[g]);for(const g in s)_.component(g,Or({...s[g],name:g,aliasName:s[g].name}));if(c.install(_),_.provide(Lr,o),_.provide(dd,l),_.provide(vd,c),_.provide(gd,u),_.provide(ld,f),_.provide(T2,d.options),_.provide(fd,d.instance),qn&&i.ssr)if(_.$nuxt)_.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:g}=_;_.mount=function(){const m=g(...arguments);return Zs(()=>l.update()),_.mount=g,m}}Tp.reset(),_.mixin({computed:{$vuetify(){return jt({defaults:Ds.call(this,Lr),display:Ds.call(this,dd),theme:Ds.call(this,vd),icons:Ds.call(this,gd),locale:Ds.call(this,ld),date:Ds.call(this,fd)})}}})},defaults:o,display:l,theme:c,icons:u,locale:f,date:d}}const O2="3.4.9";Ip.version=O2;function Ds(n){var i,s;const e=this.$,t=((i=e.parent)==null?void 0:i.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(t&&n in t)return t[n]}const B2=Ip(),H2="modulepreload",z2=function(n){return"/app2/"+n},Sd={},G2=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.all(t.map(l=>{if(l=z2(l),l in Sd)return;Sd[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!i)for(let p=r.length-1;p>=0;p--){const _=r[p];if(_.href===l&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":H2,c||(d.as="script",d.crossOrigin=""),d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};async function V2(){(await G2(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const W2=ug();V2();og(rP).use(B2).use(W2).mount("#app");
//# sourceMappingURL=index-Do5xQKeI.js.map
