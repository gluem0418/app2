var lp=Object.defineProperty;var cp=(n,e,t)=>e in n?lp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Oe=(n,e,t)=>(cp(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function yl(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const mt={},bs=[],Gn=()=>{},up=()=>!1,fp=/^on[^a-z]/,Ra=n=>fp.test(n),El=n=>n.startsWith("onUpdate:"),Gt=Object.assign,bl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},dp=Object.prototype.hasOwnProperty,ot=(n,e)=>dp.call(n,e),$e=Array.isArray,Ts=n=>La(n)==="[object Map]",jf=n=>La(n)==="[object Set]",Je=n=>typeof n=="function",Lt=n=>typeof n=="string",Pa=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Kf=n=>(xt(n)||Je(n))&&Je(n.then)&&Je(n.catch),Zf=Object.prototype.toString,La=n=>Zf.call(n),hp=n=>La(n).slice(8,-1),Jf=n=>La(n)==="[object Object]",Tl=n=>Lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ua=yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},pp=/-(\w)/g,Ds=Da(n=>n.replace(pp,(e,t)=>t?t.toUpperCase():"")),mp=/\B([A-Z])/g,Bs=Da(n=>n.replace(mp,"-$1").toLowerCase()),Qf=Da(n=>n.charAt(0).toUpperCase()+n.slice(1)),to=Da(n=>n?`on${Qf(n)}`:""),Zi=(n,e)=>!Object.is(n,e),no=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},_a=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},_p=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let fc;const qo=()=>fc||(fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rn(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Lt(i)?Mp(i):Rn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Lt(n)||xt(n))return n}const gp=/;(?![^(]*\))/g,vp=/:([^]+)/,xp=/\/\*[^]*?\*\//g;function Mp(n){const e={};return n.replace(xp,"").split(gp).forEach(t=>{if(t){const i=t.split(vp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ot(n){let e="";if(Lt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Ot(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yp=yl(Sp);function ed(n){return!!n||n===""}const Le=n=>Lt(n)?n:n==null?"":$e(n)||xt(n)&&(n.toString===Zf||!Je(n.toString))?JSON.stringify(n,td,2):String(n),td=(n,e)=>e&&e.__v_isRef?td(n,e.value):Ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:jf(e)?{[`Set(${e.size})`]:[...e.values()]}:xt(e)&&!$e(e)&&!Jf(e)?String(e):e;let pn;class nd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pn,!e&&pn&&(this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=pn;try{return pn=this,e()}finally{pn=t}}}on(){pn=this}off(){pn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Al(n){return new nd(n)}function Ep(n,e=pn){e&&e.active&&e.effects.push(n)}function id(){return pn}function sd(n){pn&&pn.cleanups.push(n)}const wl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},rd=n=>(n.w&bi)>0,ad=n=>(n.n&bi)>0,bp=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=bi},Tp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];rd(s)&&!ad(s)?s.delete(n):e[t++]=s,s.w&=~bi,s.n&=~bi}e.length=t}},ga=new WeakMap;let tr=0,bi=1;const $o=30;let Ln;const qi=Symbol(""),Xo=Symbol("");class Cl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ep(this,i)}run(){if(!this.active)return this.fn();let e=Ln,t=vi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ln,Ln=this,vi=!0,bi=1<<++tr,tr<=$o?bp(this):dc(this),this.fn()}finally{tr<=$o&&Tp(this),bi=1<<--tr,Ln=this.parent,vi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ln===this?this.deferStop=!0:this.active&&(dc(this),this.onStop&&this.onStop(),this.active=!1)}}function dc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let vi=!0;const od=[];function Hs(){od.push(vi),vi=!1}function zs(){const n=od.pop();vi=n===void 0?!0:n}function cn(n,e,t){if(vi&&Ln){let i=ga.get(n);i||ga.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=wl()),ld(s)}}function ld(n,e){let t=!1;tr<=$o?ad(n)||(n.n|=bi,t=!rd(n)):t=!n.has(Ln),t&&(n.add(Ln),Ln.deps.push(n))}function si(n,e,t,i,s,r){const a=ga.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&$e(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!Pa(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":$e(n)?Tl(t)&&o.push(a.get("length")):(o.push(a.get(qi)),Ts(n)&&o.push(a.get(Xo)));break;case"delete":$e(n)||(o.push(a.get(qi)),Ts(n)&&o.push(a.get(Xo)));break;case"set":Ts(n)&&o.push(a.get(qi));break}if(o.length===1)o[0]&&Yo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Yo(wl(l))}}function Yo(n,e){const t=$e(n)?n:[...n];for(const i of t)i.computed&&hc(i);for(const i of t)i.computed||hc(i)}function hc(n,e){(n!==Ln||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function Ap(n,e){var t;return(t=ga.get(n))==null?void 0:t.get(e)}const wp=yl("__proto__,__v_isRef,__isVue"),cd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Pa)),pc=Cp();function Cp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=rt(this);for(let r=0,a=this.length;r<a;r++)cn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(rt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Hs();const i=rt(this)[e].apply(this,t);return zs(),i}}),n}function Rp(n){const e=rt(this);return cn(e,"has",n),e.hasOwnProperty(n)}class ud{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const s=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw"&&i===(s?r?Gp:pd:r?hd:dd).get(e))return e;const a=$e(e);if(!s){if(a&&ot(pc,t))return Reflect.get(pc,t,i);if(t==="hasOwnProperty")return Rp}const o=Reflect.get(e,t,i);return(Pa(t)?cd.has(t):wp(t))||(s||cn(e,"get",t),r)?o:yt(o)?a&&Tl(t)?o:o.value:xt(o)?s?md(o):$t(o):o}}class fd extends ud{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(Is(r)&&yt(r)&&!yt(i))return!1;if(!this._shallow&&(!va(i)&&!Is(i)&&(r=rt(r),i=rt(i)),!$e(e)&&yt(r)&&!yt(i)))return r.value=i,!0;const a=$e(e)&&Tl(t)?Number(t)<e.length:ot(e,t),o=Reflect.set(e,t,i,s);return e===rt(s)&&(a?Zi(i,r)&&si(e,"set",t,i):si(e,"add",t,i)),o}deleteProperty(e,t){const i=ot(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&si(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Pa(t)||!cd.has(t))&&cn(e,"has",t),i}ownKeys(e){return cn(e,"iterate",$e(e)?"length":qi),Reflect.ownKeys(e)}}class Pp extends ud{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Lp=new fd,Dp=new Pp,Ip=new fd(!0),Rl=n=>n,Ia=n=>Reflect.getPrototypeOf(n);function Pr(n,e,t=!1,i=!1){n=n.__v_raw;const s=rt(n),r=rt(e);t||(Zi(e,r)&&cn(s,"get",e),cn(s,"get",r));const{has:a}=Ia(s),o=i?Rl:t?Dl:ur;if(a.call(s,e))return o(n.get(e));if(a.call(s,r))return o(n.get(r));n!==s&&n.get(e)}function Lr(n,e=!1){const t=this.__v_raw,i=rt(t),s=rt(n);return e||(Zi(n,s)&&cn(i,"has",n),cn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Dr(n,e=!1){return n=n.__v_raw,!e&&cn(rt(n),"iterate",qi),Reflect.get(n,"size",n)}function mc(n){n=rt(n);const e=rt(this);return Ia(e).has.call(e,n)||(e.add(n),si(e,"add",n,n)),this}function _c(n,e){e=rt(e);const t=rt(this),{has:i,get:s}=Ia(t);let r=i.call(t,n);r||(n=rt(n),r=i.call(t,n));const a=s.call(t,n);return t.set(n,e),r?Zi(e,a)&&si(t,"set",n,e):si(t,"add",n,e),this}function gc(n){const e=rt(this),{has:t,get:i}=Ia(e);let s=t.call(e,n);s||(n=rt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&si(e,"delete",n,void 0),r}function vc(){const n=rt(this),e=n.size!==0,t=n.clear();return e&&si(n,"clear",void 0,void 0),t}function Ir(n,e){return function(i,s){const r=this,a=r.__v_raw,o=rt(a),l=e?Rl:n?Dl:ur;return!n&&cn(o,"iterate",qi),a.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Ur(n,e,t){return function(...i){const s=this.__v_raw,r=rt(s),a=Ts(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Rl:e?Dl:ur;return!e&&cn(r,"iterate",l?Xo:qi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function oi(n){return function(...e){return n==="delete"?!1:this}}function Up(){const n={get(r){return Pr(this,r)},get size(){return Dr(this)},has:Lr,add:mc,set:_c,delete:gc,clear:vc,forEach:Ir(!1,!1)},e={get(r){return Pr(this,r,!1,!0)},get size(){return Dr(this)},has:Lr,add:mc,set:_c,delete:gc,clear:vc,forEach:Ir(!1,!0)},t={get(r){return Pr(this,r,!0)},get size(){return Dr(this,!0)},has(r){return Lr.call(this,r,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:Ir(!0,!1)},i={get(r){return Pr(this,r,!0,!0)},get size(){return Dr(this,!0)},has(r){return Lr.call(this,r,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:Ir(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ur(r,!1,!1),t[r]=Ur(r,!0,!1),e[r]=Ur(r,!1,!0),i[r]=Ur(r,!0,!0)}),[n,t,e,i]}const[Fp,Np,Op,kp]=Up();function Pl(n,e){const t=e?n?kp:Op:n?Np:Fp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ot(t,s)&&s in i?t:i,s,r)}const Bp={get:Pl(!1,!1)},Hp={get:Pl(!1,!0)},zp={get:Pl(!0,!1)},dd=new WeakMap,hd=new WeakMap,pd=new WeakMap,Gp=new WeakMap;function Vp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wp(n){return n.__v_skip||!Object.isExtensible(n)?0:Vp(hp(n))}function $t(n){return Is(n)?n:Ll(n,!1,Lp,Bp,dd)}function qp(n){return Ll(n,!1,Ip,Hp,hd)}function md(n){return Ll(n,!0,Dp,zp,pd)}function Ll(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=Wp(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function xi(n){return Is(n)?xi(n.__v_raw):!!(n&&n.__v_isReactive)}function Is(n){return!!(n&&n.__v_isReadonly)}function va(n){return!!(n&&n.__v_isShallow)}function _d(n){return xi(n)||Is(n)}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function Ua(n){return _a(n,"__v_skip",!0),n}const ur=n=>xt(n)?$t(n):n,Dl=n=>xt(n)?md(n):n;function gd(n){vi&&Ln&&(n=rt(n),ld(n.dep||(n.dep=wl())))}function vd(n,e){n=rt(n);const t=n.dep;t&&Yo(t)}function yt(n){return!!(n&&n.__v_isRef===!0)}function Ae(n){return xd(n,!1)}function As(n){return xd(n,!0)}function xd(n,e){return yt(n)?n:new $p(n,e)}class $p{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:rt(e),this._value=t?e:ur(e)}get value(){return gd(this),this._value}set value(e){const t=this.__v_isShallow||va(e)||Is(e);e=t?e:rt(e),Zi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ur(e),vd(this))}}function me(n){return yt(n)?n.value:n}const Xp={get:(n,e,t)=>me(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return yt(s)&&!yt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Md(n){return xi(n)?n:new Proxy(n,Xp)}function Sd(n){const e=$e(n)?new Array(n.length):{};for(const t in n)e[t]=jp(n,t);return e}class Yp{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ap(rt(this._object),this._key)}}function jp(n,e,t){const i=n[e];return yt(i)?i:new Yp(n,e,t)}class Kp{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Cl(e,()=>{this._dirty||(this._dirty=!0,vd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=rt(this);return gd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Zp(n,e,t=!1){let i,s;const r=Je(n);return r?(i=n,s=Gn):(i=n.get,s=n.set),new Kp(i,s,r||!s,t)}function Mi(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){Fa(r,e,t)}return s}function Fn(n,e,t,i){if(Je(n)){const r=Mi(n,e,t,i);return r&&Kf(r)&&r.catch(a=>{Fa(a,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(Fn(n[r],e,t,i));return s}function Fa(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Mi(l,null,10,[n,a,o]);return}}Jp(n,t,s,i)}function Jp(n,e,t,i=!0){console.error(n)}let fr=!1,jo=!1;const qt=[];let Hn=0;const ws=[];let ei=null,Hi=0;const yd=Promise.resolve();let Il=null;function Gs(n){const e=Il||yd;return n?e.then(this?n.bind(this):n):e}function Qp(n){let e=Hn+1,t=qt.length;for(;e<t;){const i=e+t>>>1,s=qt[i],r=dr(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function Ul(n){(!qt.length||!qt.includes(n,fr&&n.allowRecurse?Hn+1:Hn))&&(n.id==null?qt.push(n):qt.splice(Qp(n.id),0,n),Ed())}function Ed(){!fr&&!jo&&(jo=!0,Il=yd.then(Td))}function em(n){const e=qt.indexOf(n);e>Hn&&qt.splice(e,1)}function tm(n){$e(n)?ws.push(...n):(!ei||!ei.includes(n,n.allowRecurse?Hi+1:Hi))&&ws.push(n),Ed()}function xc(n,e=fr?Hn+1:0){for(;e<qt.length;e++){const t=qt[e];t&&t.pre&&(qt.splice(e,1),e--,t())}}function bd(n){if(ws.length){const e=[...new Set(ws)];if(ws.length=0,ei){ei.push(...e);return}for(ei=e,ei.sort((t,i)=>dr(t)-dr(i)),Hi=0;Hi<ei.length;Hi++)ei[Hi]();ei=null,Hi=0}}const dr=n=>n.id==null?1/0:n.id,nm=(n,e)=>{const t=dr(n)-dr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Td(n){jo=!1,fr=!0,qt.sort(nm);try{for(Hn=0;Hn<qt.length;Hn++){const e=qt[Hn];e&&e.active!==!1&&Mi(e,null,14)}}finally{Hn=0,qt.length=0,bd(),fr=!1,Il=null,(qt.length||ws.length)&&Td()}}function im(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||mt;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||mt;d&&(s=t.map(m=>Lt(m)?m.trim():m)),f&&(s=t.map(_p))}let o,l=i[o=to(e)]||i[o=to(Ds(e))];!l&&r&&(l=i[o=to(Bs(e))]),l&&Fn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Fn(c,n,6,s)}}function Ad(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Je(n)){const l=c=>{const u=Ad(c,e,!0);u&&(o=!0,Gt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(xt(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>a[l]=null):Gt(a,r),xt(n)&&i.set(n,a),a)}function Na(n,e){return!n||!Ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(n,e[0].toLowerCase()+e.slice(1))||ot(n,Bs(e))||ot(n,e))}let gn=null,Oa=null;function xa(n){const e=gn;return gn=n,Oa=n&&n.type.__scopeId||null,e}function Wn(n){Oa=n}function qn(){Oa=null}function fa(n,e=gn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Rc(-1);const r=xa(e);let a;try{a=n(...s)}finally{xa(r),i._d&&Rc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function io(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:g,inheritAttrs:_}=n;let p,h;const E=xa(n);try{if(t.shapeFlag&4){const b=s||i;p=kn(u.call(b,b,f,r,m,d,g)),h=l}else{const b=e;p=kn(b.length>1?b(r,{attrs:l,slots:o,emit:c}):b(r,null)),h=e.props?l:sm(l)}}catch(b){ar.length=0,Fa(b,n,1),p=De(Ji)}let S=p;if(h&&_!==!1){const b=Object.keys(h),{shapeFlag:C}=S;b.length&&C&7&&(a&&b.some(El)&&(h=rm(h,a)),S=Ti(S,h))}return t.dirs&&(S=Ti(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),p=S,xa(E),p}const sm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ra(t))&&((e||(e={}))[t]=n[t]);return e},rm=(n,e)=>{const t={};for(const i in n)(!El(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function am(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Mc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Na(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Mc(i,a,c):!0:!!a;return!1}function Mc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Na(t,r))return!0}return!1}function om({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const lm=Symbol.for("v-ndc"),cm=n=>n.__isSuspense;function um(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):tm(n)}function Fl(n,e){return Nl(n,null,e)}const Fr={};function Et(n,e,t){return Nl(n,e,t)}function Nl(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:a}=mt){var o;const l=id()===((o=Nt)==null?void 0:o.scope)?Nt:null;let c,u=!1,f=!1;if(yt(n)?(c=()=>n.value,u=va(n)):xi(n)?(c=()=>n,i=!0):$e(n)?(f=!0,u=n.some(b=>xi(b)||va(b)),c=()=>n.map(b=>{if(yt(b))return b.value;if(xi(b))return Wi(b);if(Je(b))return Mi(b,l,2)})):Je(n)?e?c=()=>Mi(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Fn(n,l,3,[m])}:c=Gn,e&&i){const b=c;c=()=>Wi(b())}let d,m=b=>{d=E.onStop=()=>{Mi(b,l,4)}},g;if(mr)if(m=Gn,e?t&&Fn(e,l,3,[c(),f?[]:void 0,m]):c(),s==="sync"){const b=n_();g=b.__watcherHandles||(b.__watcherHandles=[])}else return Gn;let _=f?new Array(n.length).fill(Fr):Fr;const p=()=>{if(E.active)if(e){const b=E.run();(i||u||(f?b.some((C,F)=>Zi(C,_[F])):Zi(b,_)))&&(d&&d(),Fn(e,l,3,[b,_===Fr?void 0:f&&_[0]===Fr?[]:_,m]),_=b)}else E.run()};p.allowRecurse=!!e;let h;s==="sync"?h=p:s==="post"?h=()=>nn(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),h=()=>Ul(p));const E=new Cl(c,h);e?t?p():_=E.run():s==="post"?nn(E.run.bind(E),l&&l.suspense):E.run();const S=()=>{E.stop(),l&&l.scope&&bl(l.scope.effects,E)};return g&&g.push(S),S}function fm(n,e,t){const i=this.proxy,s=Lt(n)?n.includes(".")?wd(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const a=Nt;Us(this);const o=Nl(s,r.bind(i),t);return a?Us(a):$i(),o}function wd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Wi(n,e){if(!xt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),yt(n))Wi(n.value,e);else if($e(n))for(let t=0;t<n.length;t++)Wi(n[t],e);else if(jf(n)||Ts(n))n.forEach(t=>{Wi(t,e)});else if(Jf(n))for(const t in n)Wi(n[t],e);return n}function Bt(n,e){const t=gn;if(t===null)return n;const i=za(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[a,o,l,c=mt]=e[r];a&&(Je(a)&&(a={mounted:a,updated:a}),a.deep&&Wi(o),s.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Li(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Hs(),Fn(l,t,8,[n.el,o,n,e]),zs())}}/*! #__NO_SIDE_EFFECTS__ */function Ye(n,e){return Je(n)?Gt({name:n.name},e,{setup:n}):n}const da=n=>!!n.type.__asyncLoader,Cd=n=>n.type.__isKeepAlive;function dm(n,e){Rd(n,"a",e)}function hm(n,e){Rd(n,"da",e)}function Rd(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ka(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Cd(s.parent.vnode)&&pm(i,e,t,s),s=s.parent}}function pm(n,e,t,i){const s=ka(e,n,i,!0);Ol(()=>{bl(i[e],s)},t)}function ka(n,e,t=Nt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Hs(),Us(t);const o=Fn(e,t,n,a);return $i(),zs(),o});return i?s.unshift(r):s.push(r),r}}const ai=n=>(e,t=Nt)=>(!mr||n==="sp")&&ka(n,(...i)=>e(...i),t),mm=ai("bm"),Sr=ai("m"),_m=ai("bu"),gm=ai("u"),vm=ai("bum"),Ol=ai("um"),xm=ai("sp"),Mm=ai("rtg"),Sm=ai("rtc");function ym(n,e=Nt){ka("ec",n,e)}function Xt(n,e,t,i){let s;const r=t&&t[i];if($e(n)||Lt(n)){s=new Array(n.length);for(let a=0,o=n.length;a<o;a++)s[a]=e(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(xt(n))if(n[Symbol.iterator])s=Array.from(n,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(n);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];s[o]=e(n[c],c,o,r&&r[o])}}else s=[];return t&&(t[i]=s),s}const Ko=n=>n?zd(n)?za(n)||n.proxy:Ko(n.parent):null,rr=Gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ko(n.parent),$root:n=>Ko(n.root),$emit:n=>n.emit,$options:n=>kl(n),$forceUpdate:n=>n.f||(n.f=()=>Ul(n.update)),$nextTick:n=>n.n||(n.n=Gs.bind(n.proxy)),$watch:n=>fm.bind(n)}),so=(n,e)=>n!==mt&&!n.__isScriptSetup&&ot(n,e),Em={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(so(i,e))return a[e]=1,i[e];if(s!==mt&&ot(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&ot(c,e))return a[e]=3,r[e];if(t!==mt&&ot(t,e))return a[e]=4,t[e];Zo&&(a[e]=0)}}const u=rr[e];let f,d;if(u)return e==="$attrs"&&cn(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==mt&&ot(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,ot(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return so(s,e)?(s[e]=t,!0):i!==mt&&ot(i,e)?(i[e]=t,!0):ot(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==mt&&ot(n,a)||so(e,a)||(o=r[0])&&ot(o,a)||ot(i,a)||ot(rr,a)||ot(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Sc(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Zo=!0;function bm(n){const e=kl(n),t=n.proxy,i=n.ctx;Zo=!1,e.beforeCreate&&yc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:_,deactivated:p,beforeDestroy:h,beforeUnmount:E,destroyed:S,unmounted:b,render:C,renderTracked:F,renderTriggered:R,errorCaptured:$,serverPrefetch:M,expose:A,inheritAttrs:te,components:K,directives:J,filters:I}=e;if(c&&Tm(c,i,null),a)for(const X in a){const le=a[X];Je(le)&&(i[X]=le.bind(t))}if(s){const X=s.call(t,t);xt(X)&&(n.data=$t(X))}if(Zo=!0,r)for(const X in r){const le=r[X],he=Je(le)?le.bind(t,t):Je(le.get)?le.get.bind(t,t):Gn,se=!Je(le)&&Je(le.set)?le.set.bind(t):Gn,k=Pt({get:he,set:se});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>k.value,set:W=>k.value=W})}if(o)for(const X in o)Pd(o[X],i,t,X);if(l){const X=Je(l)?l.call(t):l;Reflect.ownKeys(X).forEach(le=>{yn(le,X[le])})}u&&yc(u,n,"c");function q(X,le){$e(le)?le.forEach(he=>X(he.bind(t))):le&&X(le.bind(t))}if(q(mm,f),q(Sr,d),q(_m,m),q(gm,g),q(dm,_),q(hm,p),q(ym,$),q(Sm,F),q(Mm,R),q(vm,E),q(Ol,b),q(xm,M),$e(A))if(A.length){const X=n.exposed||(n.exposed={});A.forEach(le=>{Object.defineProperty(X,le,{get:()=>t[le],set:he=>t[le]=he})})}else n.exposed||(n.exposed={});C&&n.render===Gn&&(n.render=C),te!=null&&(n.inheritAttrs=te),K&&(n.components=K),J&&(n.directives=J)}function Tm(n,e,t=Gn){$e(n)&&(n=Jo(n));for(const i in n){const s=n[i];let r;xt(s)?"default"in s?r=_t(s.from||i,s.default,!0):r=_t(s.from||i):r=_t(s),yt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function yc(n,e,t){Fn($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Pd(n,e,t,i){const s=i.includes(".")?wd(t,i):()=>t[i];if(Lt(n)){const r=e[n];Je(r)&&Et(s,r)}else if(Je(n))Et(s,n.bind(t));else if(xt(n))if($e(n))n.forEach(r=>Pd(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&Et(s,r,n)}}function kl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ma(l,c,a,!0)),Ma(l,e,a)),xt(e)&&r.set(e,l),l}function Ma(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ma(n,r,t,!0),s&&s.forEach(a=>Ma(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Am[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Am={data:Ec,props:bc,emits:bc,methods:nr,computed:nr,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:nr,directives:nr,watch:Cm,provide:Ec,inject:wm};function Ec(n,e){return e?n?function(){return Gt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function wm(n,e){return nr(Jo(n),Jo(e))}function Jo(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Kt(n,e){return n?[...new Set([].concat(n,e))]:e}function nr(n,e){return n?Gt(Object.create(null),n,e):e}function bc(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Gt(Object.create(null),Sc(n),Sc(e??{})):e}function Cm(n,e){if(!n)return e;if(!e)return n;const t=Gt(Object.create(null),n);for(const i in e)t[i]=Kt(n[i],e[i]);return t}function Ld(){return{app:null,config:{isNativeTag:up,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rm=0;function Pm(n,e){return function(i,s=null){Je(i)||(i=Gt({},i)),s!=null&&!xt(s)&&(s=null);const r=Ld(),a=new WeakSet;let o=!1;const l=r.app={_uid:Rm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:i_,get config(){return r.config},set config(c){},use(c,...u){return a.has(c)||(c&&Je(c.install)?(a.add(c),c.install(l,...u)):Je(c)&&(a.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!o){const d=De(i,s);return d.appContext=r,u&&e?e(d,c):n(d,c,f),o=!0,l._container=c,c.__vue_app__=l,za(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){hr=l;try{return c()}finally{hr=null}}};return l}}let hr=null;function yn(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function _t(n,e,t=!1){const i=Nt||gn;if(i||hr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:hr._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}function Lm(){return!!(Nt||gn||hr)}function Dm(n,e,t,i=!1){const s={},r={};_a(r,Ha,1),n.propsDefaults=Object.create(null),Dd(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:qp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Im(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=rt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Na(n.emitsOptions,d))continue;const m=e[d];if(l)if(ot(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const g=Ds(d);s[g]=Qo(l,o,g,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{Dd(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!ot(e,f)&&((u=Bs(f))===f||!ot(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Qo(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!ot(e,f))&&(delete r[f],c=!0)}c&&si(n,"set","$attrs")}function Dd(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ua(l))continue;const c=e[l];let u;s&&ot(s,u=Ds(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=rt(t),c=o||mt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Qo(s,l,f,c[f],n,!ot(c,f))}}return a}function Qo(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ot(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Je(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(Us(s),i=c[t]=l.call(null,e),$i())}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Bs(t))&&(i=!0))}return i}function Id(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Je(n)){const u=f=>{l=!0;const[d,m]=Id(f,e,!0);Gt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return xt(n)&&i.set(n,bs),bs;if($e(r))for(let u=0;u<r.length;u++){const f=Ds(r[u]);Tc(f)&&(a[f]=mt)}else if(r)for(const u in r){const f=Ds(u);if(Tc(f)){const d=r[u],m=a[f]=$e(d)||Je(d)?{type:d}:Gt({},d);if(m){const g=Cc(Boolean,m.type),_=Cc(String,m.type);m[0]=g>-1,m[1]=_<0||g<_,(g>-1||ot(m,"default"))&&o.push(f)}}}const c=[a,o];return xt(n)&&i.set(n,c),c}function Tc(n){return n[0]!=="$"}function Ac(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function wc(n,e){return Ac(n)===Ac(e)}function Cc(n,e){return $e(e)?e.findIndex(t=>wc(t,n)):Je(e)&&wc(e,n)?0:-1}const Ud=n=>n[0]==="_"||n==="$stable",Bl=n=>$e(n)?n.map(kn):[kn(n)],Um=(n,e,t)=>{if(e._n)return e;const i=fa((...s)=>Bl(e(...s)),t);return i._c=!1,i},Fd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Ud(s))continue;const r=n[s];if(Je(r))e[s]=Um(s,r,i);else if(r!=null){const a=Bl(r);e[s]=()=>a}}},Nd=(n,e)=>{const t=Bl(e);n.slots.default=()=>t},Fm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=rt(e),_a(e,"_",t)):Fd(e,n.slots={})}else n.slots={},e&&Nd(n,e);_a(n.slots,Ha,1)},Nm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=mt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(Gt(s,e),!t&&o===1&&delete s._):(r=!e.$stable,Fd(e,s)),a=e}else e&&(Nd(n,e),a={default:1});if(r)for(const o in s)!Ud(o)&&a[o]==null&&delete s[o]};function el(n,e,t,i,s=!1){if($e(n)){n.forEach((d,m)=>el(d,e&&($e(e)?e[m]:e),t,i,s));return}if(da(i)&&!s)return;const r=i.shapeFlag&4?za(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===mt?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(Lt(c)?(u[c]=null,ot(f,c)&&(f[c]=null)):yt(c)&&(c.value=null)),Je(l))Mi(l,o,12,[a,u]);else{const d=Lt(l),m=yt(l);if(d||m){const g=()=>{if(n.f){const _=d?ot(f,l)?f[l]:u[l]:l.value;s?$e(_)&&bl(_,r):$e(_)?_.includes(r)||_.push(r):d?(u[l]=[r],ot(f,l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,ot(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,nn(g,t)):g()}}}const nn=um;function Om(n){return km(n)}function km(n,e){const t=qo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Gn,insertStaticContent:g}=n,_=(x,U,P,z=null,H=null,ae=null,fe=!1,ne=null,pe=!!U.dynamicChildren)=>{if(x===U)return;x&&!Xs(x,U)&&(z=ke(x),W(x,H,ae,!0),x=null),U.patchFlag===-2&&(pe=!1,U.dynamicChildren=null);const{type:oe,ref:we,shapeFlag:y}=U;switch(oe){case Ba:p(x,U,P,z);break;case Ji:h(x,U,P,z);break;case ro:x==null&&E(U,P,z,fe);break;case ft:K(x,U,P,z,H,ae,fe,ne,pe);break;default:y&1?C(x,U,P,z,H,ae,fe,ne,pe):y&6?J(x,U,P,z,H,ae,fe,ne,pe):(y&64||y&128)&&oe.process(x,U,P,z,H,ae,fe,ne,pe,Fe)}we!=null&&H&&el(we,x&&x.ref,ae,U||x,!U)},p=(x,U,P,z)=>{if(x==null)i(U.el=o(U.children),P,z);else{const H=U.el=x.el;U.children!==x.children&&c(H,U.children)}},h=(x,U,P,z)=>{x==null?i(U.el=l(U.children||""),P,z):U.el=x.el},E=(x,U,P,z)=>{[x.el,x.anchor]=g(x.children,U,P,z,x.el,x.anchor)},S=({el:x,anchor:U},P,z)=>{let H;for(;x&&x!==U;)H=d(x),i(x,P,z),x=H;i(U,P,z)},b=({el:x,anchor:U})=>{let P;for(;x&&x!==U;)P=d(x),s(x),x=P;s(U)},C=(x,U,P,z,H,ae,fe,ne,pe)=>{fe=fe||U.type==="svg",x==null?F(U,P,z,H,ae,fe,ne,pe):M(x,U,H,ae,fe,ne,pe)},F=(x,U,P,z,H,ae,fe,ne)=>{let pe,oe;const{type:we,props:y,shapeFlag:v,transition:O,dirs:re}=x;if(pe=x.el=a(x.type,ae,y&&y.is,y),v&8?u(pe,x.children):v&16&&$(x.children,pe,null,z,H,ae&&we!=="foreignObject",fe,ne),re&&Li(x,null,z,"created"),R(pe,x,x.scopeId,fe,z),y){for(const de in y)de!=="value"&&!ua(de)&&r(pe,de,null,y[de],ae,x.children,z,H,Ie);"value"in y&&r(pe,"value",null,y.value),(oe=y.onVnodeBeforeMount)&&On(oe,z,x)}re&&Li(x,null,z,"beforeMount");const ce=Bm(H,O);ce&&O.beforeEnter(pe),i(pe,U,P),((oe=y&&y.onVnodeMounted)||ce||re)&&nn(()=>{oe&&On(oe,z,x),ce&&O.enter(pe),re&&Li(x,null,z,"mounted")},H)},R=(x,U,P,z,H)=>{if(P&&m(x,P),z)for(let ae=0;ae<z.length;ae++)m(x,z[ae]);if(H){let ae=H.subTree;if(U===ae){const fe=H.vnode;R(x,fe,fe.scopeId,fe.slotScopeIds,H.parent)}}},$=(x,U,P,z,H,ae,fe,ne,pe=0)=>{for(let oe=pe;oe<x.length;oe++){const we=x[oe]=ne?mi(x[oe]):kn(x[oe]);_(null,we,U,P,z,H,ae,fe,ne)}},M=(x,U,P,z,H,ae,fe)=>{const ne=U.el=x.el;let{patchFlag:pe,dynamicChildren:oe,dirs:we}=U;pe|=x.patchFlag&16;const y=x.props||mt,v=U.props||mt;let O;P&&Di(P,!1),(O=v.onVnodeBeforeUpdate)&&On(O,P,U,x),we&&Li(U,x,P,"beforeUpdate"),P&&Di(P,!0);const re=H&&U.type!=="foreignObject";if(oe?A(x.dynamicChildren,oe,ne,P,z,re,ae):fe||le(x,U,ne,null,P,z,re,ae,!1),pe>0){if(pe&16)te(ne,U,y,v,P,z,H);else if(pe&2&&y.class!==v.class&&r(ne,"class",null,v.class,H),pe&4&&r(ne,"style",y.style,v.style,H),pe&8){const ce=U.dynamicProps;for(let de=0;de<ce.length;de++){const Ce=ce[de],xe=y[Ce],Re=v[Ce];(Re!==xe||Ce==="value")&&r(ne,Ce,xe,Re,H,x.children,P,z,Ie)}}pe&1&&x.children!==U.children&&u(ne,U.children)}else!fe&&oe==null&&te(ne,U,y,v,P,z,H);((O=v.onVnodeUpdated)||we)&&nn(()=>{O&&On(O,P,U,x),we&&Li(U,x,P,"updated")},z)},A=(x,U,P,z,H,ae,fe)=>{for(let ne=0;ne<U.length;ne++){const pe=x[ne],oe=U[ne],we=pe.el&&(pe.type===ft||!Xs(pe,oe)||pe.shapeFlag&70)?f(pe.el):P;_(pe,oe,we,null,z,H,ae,fe,!0)}},te=(x,U,P,z,H,ae,fe)=>{if(P!==z){if(P!==mt)for(const ne in P)!ua(ne)&&!(ne in z)&&r(x,ne,P[ne],null,fe,U.children,H,ae,Ie);for(const ne in z){if(ua(ne))continue;const pe=z[ne],oe=P[ne];pe!==oe&&ne!=="value"&&r(x,ne,oe,pe,fe,U.children,H,ae,Ie)}"value"in z&&r(x,"value",P.value,z.value)}},K=(x,U,P,z,H,ae,fe,ne,pe)=>{const oe=U.el=x?x.el:o(""),we=U.anchor=x?x.anchor:o("");let{patchFlag:y,dynamicChildren:v,slotScopeIds:O}=U;O&&(ne=ne?ne.concat(O):O),x==null?(i(oe,P,z),i(we,P,z),$(U.children,P,we,H,ae,fe,ne,pe)):y>0&&y&64&&v&&x.dynamicChildren?(A(x.dynamicChildren,v,P,H,ae,fe,ne),(U.key!=null||H&&U===H.subTree)&&Od(x,U,!0)):le(x,U,P,we,H,ae,fe,ne,pe)},J=(x,U,P,z,H,ae,fe,ne,pe)=>{U.slotScopeIds=ne,x==null?U.shapeFlag&512?H.ctx.activate(U,P,z,fe,pe):I(U,P,z,H,ae,fe,pe):j(x,U,pe)},I=(x,U,P,z,H,ae,fe)=>{const ne=x.component=Ym(x,z,H);if(Cd(x)&&(ne.ctx.renderer=Fe),Km(ne),ne.asyncDep){if(H&&H.registerDep(ne,q),!x.el){const pe=ne.subTree=De(Ji);h(null,pe,U,P)}return}q(ne,x,U,P,H,ae,fe)},j=(x,U,P)=>{const z=U.component=x.component;if(am(x,U,P))if(z.asyncDep&&!z.asyncResolved){X(z,U,P);return}else z.next=U,em(z.update),z.update();else U.el=x.el,z.vnode=U},q=(x,U,P,z,H,ae,fe)=>{const ne=()=>{if(x.isMounted){let{next:we,bu:y,u:v,parent:O,vnode:re}=x,ce=we,de;Di(x,!1),we?(we.el=re.el,X(x,we,fe)):we=re,y&&no(y),(de=we.props&&we.props.onVnodeBeforeUpdate)&&On(de,O,we,re),Di(x,!0);const Ce=io(x),xe=x.subTree;x.subTree=Ce,_(xe,Ce,f(xe.el),ke(xe),x,H,ae),we.el=Ce.el,ce===null&&om(x,Ce.el),v&&nn(v,H),(de=we.props&&we.props.onVnodeUpdated)&&nn(()=>On(de,O,we,re),H)}else{let we;const{el:y,props:v}=U,{bm:O,m:re,parent:ce}=x,de=da(U);if(Di(x,!1),O&&no(O),!de&&(we=v&&v.onVnodeBeforeMount)&&On(we,ce,U),Di(x,!0),y&&Ve){const Ce=()=>{x.subTree=io(x),Ve(y,x.subTree,x,H,null)};de?U.type.__asyncLoader().then(()=>!x.isUnmounted&&Ce()):Ce()}else{const Ce=x.subTree=io(x);_(null,Ce,P,z,x,H,ae),U.el=Ce.el}if(re&&nn(re,H),!de&&(we=v&&v.onVnodeMounted)){const Ce=U;nn(()=>On(we,ce,Ce),H)}(U.shapeFlag&256||ce&&da(ce.vnode)&&ce.vnode.shapeFlag&256)&&x.a&&nn(x.a,H),x.isMounted=!0,U=P=z=null}},pe=x.effect=new Cl(ne,()=>Ul(oe),x.scope),oe=x.update=()=>pe.run();oe.id=x.uid,Di(x,!0),oe()},X=(x,U,P)=>{U.component=x;const z=x.vnode.props;x.vnode=U,x.next=null,Im(x,U.props,z,P),Nm(x,U.children,P),Hs(),xc(),zs()},le=(x,U,P,z,H,ae,fe,ne,pe=!1)=>{const oe=x&&x.children,we=x?x.shapeFlag:0,y=U.children,{patchFlag:v,shapeFlag:O}=U;if(v>0){if(v&128){se(oe,y,P,z,H,ae,fe,ne,pe);return}else if(v&256){he(oe,y,P,z,H,ae,fe,ne,pe);return}}O&8?(we&16&&Ie(oe,H,ae),y!==oe&&u(P,y)):we&16?O&16?se(oe,y,P,z,H,ae,fe,ne,pe):Ie(oe,H,ae,!0):(we&8&&u(P,""),O&16&&$(y,P,z,H,ae,fe,ne,pe))},he=(x,U,P,z,H,ae,fe,ne,pe)=>{x=x||bs,U=U||bs;const oe=x.length,we=U.length,y=Math.min(oe,we);let v;for(v=0;v<y;v++){const O=U[v]=pe?mi(U[v]):kn(U[v]);_(x[v],O,P,null,H,ae,fe,ne,pe)}oe>we?Ie(x,H,ae,!0,!1,y):$(U,P,z,H,ae,fe,ne,pe,y)},se=(x,U,P,z,H,ae,fe,ne,pe)=>{let oe=0;const we=U.length;let y=x.length-1,v=we-1;for(;oe<=y&&oe<=v;){const O=x[oe],re=U[oe]=pe?mi(U[oe]):kn(U[oe]);if(Xs(O,re))_(O,re,P,null,H,ae,fe,ne,pe);else break;oe++}for(;oe<=y&&oe<=v;){const O=x[y],re=U[v]=pe?mi(U[v]):kn(U[v]);if(Xs(O,re))_(O,re,P,null,H,ae,fe,ne,pe);else break;y--,v--}if(oe>y){if(oe<=v){const O=v+1,re=O<we?U[O].el:z;for(;oe<=v;)_(null,U[oe]=pe?mi(U[oe]):kn(U[oe]),P,re,H,ae,fe,ne,pe),oe++}}else if(oe>v)for(;oe<=y;)W(x[oe],H,ae,!0),oe++;else{const O=oe,re=oe,ce=new Map;for(oe=re;oe<=v;oe++){const qe=U[oe]=pe?mi(U[oe]):kn(U[oe]);qe.key!=null&&ce.set(qe.key,oe)}let de,Ce=0;const xe=v-re+1;let Re=!1,Ge=0;const tt=new Array(xe);for(oe=0;oe<xe;oe++)tt[oe]=0;for(oe=O;oe<=y;oe++){const qe=x[oe];if(Ce>=xe){W(qe,H,ae,!0);continue}let Be;if(qe.key!=null)Be=ce.get(qe.key);else for(de=re;de<=v;de++)if(tt[de-re]===0&&Xs(qe,U[de])){Be=de;break}Be===void 0?W(qe,H,ae,!0):(tt[Be-re]=oe+1,Be>=Ge?Ge=Be:Re=!0,_(qe,U[Be],P,null,H,ae,fe,ne,pe),Ce++)}const Se=Re?Hm(tt):bs;for(de=Se.length-1,oe=xe-1;oe>=0;oe--){const qe=re+oe,Be=U[qe],B=qe+1<we?U[qe+1].el:z;tt[oe]===0?_(null,Be,P,B,H,ae,fe,ne,pe):Re&&(de<0||oe!==Se[de]?k(Be,P,B,2):de--)}}},k=(x,U,P,z,H=null)=>{const{el:ae,type:fe,transition:ne,children:pe,shapeFlag:oe}=x;if(oe&6){k(x.component.subTree,U,P,z);return}if(oe&128){x.suspense.move(U,P,z);return}if(oe&64){fe.move(x,U,P,Fe);return}if(fe===ft){i(ae,U,P);for(let y=0;y<pe.length;y++)k(pe[y],U,P,z);i(x.anchor,U,P);return}if(fe===ro){S(x,U,P);return}if(z!==2&&oe&1&&ne)if(z===0)ne.beforeEnter(ae),i(ae,U,P),nn(()=>ne.enter(ae),H);else{const{leave:y,delayLeave:v,afterLeave:O}=ne,re=()=>i(ae,U,P),ce=()=>{y(ae,()=>{re(),O&&O()})};v?v(ae,re,ce):ce()}else i(ae,U,P)},W=(x,U,P,z=!1,H=!1)=>{const{type:ae,props:fe,ref:ne,children:pe,dynamicChildren:oe,shapeFlag:we,patchFlag:y,dirs:v}=x;if(ne!=null&&el(ne,null,P,x,!0),we&256){U.ctx.deactivate(x);return}const O=we&1&&v,re=!da(x);let ce;if(re&&(ce=fe&&fe.onVnodeBeforeUnmount)&&On(ce,U,x),we&6)Me(x.component,P,z);else{if(we&128){x.suspense.unmount(P,z);return}O&&Li(x,null,U,"beforeUnmount"),we&64?x.type.remove(x,U,P,H,Fe,z):oe&&(ae!==ft||y>0&&y&64)?Ie(oe,U,P,!1,!0):(ae===ft&&y&384||!H&&we&16)&&Ie(pe,U,P),z&&be(x)}(re&&(ce=fe&&fe.onVnodeUnmounted)||O)&&nn(()=>{ce&&On(ce,U,x),O&&Li(x,null,U,"unmounted")},P)},be=x=>{const{type:U,el:P,anchor:z,transition:H}=x;if(U===ft){ve(P,z);return}if(U===ro){b(x);return}const ae=()=>{s(P),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(x.shapeFlag&1&&H&&!H.persisted){const{leave:fe,delayLeave:ne}=H,pe=()=>fe(P,ae);ne?ne(x.el,ae,pe):pe()}else ae()},ve=(x,U)=>{let P;for(;x!==U;)P=d(x),s(x),x=P;s(U)},Me=(x,U,P)=>{const{bum:z,scope:H,update:ae,subTree:fe,um:ne}=x;z&&no(z),H.stop(),ae&&(ae.active=!1,W(fe,x,U,P)),ne&&nn(ne,U),nn(()=>{x.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},Ie=(x,U,P,z=!1,H=!1,ae=0)=>{for(let fe=ae;fe<x.length;fe++)W(x[fe],U,P,z,H)},ke=x=>x.shapeFlag&6?ke(x.component.subTree):x.shapeFlag&128?x.suspense.next():d(x.anchor||x.el),Ne=(x,U,P)=>{x==null?U._vnode&&W(U._vnode,null,null,!0):_(U._vnode||null,x,U,null,null,null,P),xc(),bd(),U._vnode=x},Fe={p:_,um:W,m:k,r:be,mt:I,mc:$,pc:le,pbc:A,n:ke,o:n};let at,Ve;return e&&([at,Ve]=e(Fe)),{render:Ne,hydrate:at,createApp:Pm(Ne,at)}}function Di({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Bm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Od(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=mi(s[r]),o.el=a.el),t||Od(a,o)),o.type===Ba&&(o.el=a.el)}}function Hm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const zm=n=>n.__isTeleport,ft=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),Ji=Symbol.for("v-cmt"),ro=Symbol.for("v-stc"),ar=[];let Un=null;function ie(n=!1){ar.push(Un=n?null:[])}function Gm(){ar.pop(),Un=ar[ar.length-1]||null}let pr=1;function Rc(n){pr+=n}function kd(n){return n.dynamicChildren=pr>0?Un||bs:null,Gm(),pr>0&&Un&&Un.push(n),n}function _e(n,e,t,i,s,r){return kd(L(n,e,t,i,s,r,!0))}function Rt(n,e,t,i,s){return kd(De(n,e,t,i,s,!0))}function tl(n){return n?n.__v_isVNode===!0:!1}function Xs(n,e){return n.type===e.type&&n.key===e.key}const Ha="__vInternal",Bd=({key:n})=>n??null,ha=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Lt(n)||yt(n)||Je(n)?{i:gn,r:n,k:e,f:!!t}:n:null);function L(n,e=null,t=null,i=0,s=null,r=n===ft?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bd(e),ref:e&&ha(e),scopeId:Oa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gn};return o?(Hl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),pr>0&&!a&&Un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Un.push(l),l}const De=Vm;function Vm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===lm)&&(n=Ji),tl(n)){const o=Ti(n,e,!0);return t&&Hl(o,t),pr>0&&!r&&Un&&(o.shapeFlag&6?Un[Un.indexOf(n)]=o:Un.push(o)),o.patchFlag|=-2,o}if(e_(n)&&(n=n.__vccOpts),e){e=Wm(e);let{class:o,style:l}=e;o&&!Lt(o)&&(e.class=Ot(o)),xt(l)&&(_d(l)&&!$e(l)&&(l=Gt({},l)),e.style=Rn(l))}const a=Lt(n)?1:cm(n)?128:zm(n)?64:xt(n)?4:Je(n)?2:0;return L(n,e,t,i,s,a,r,!0)}function Wm(n){return n?_d(n)||Ha in n?Gt({},n):n:null}function Ti(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:a}=n,o=e?Hd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Bd(o),ref:e&&e.ref?t&&s?$e(s)?s.concat(ha(e)):[s,ha(e)]:ha(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ft?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ti(n.ssContent),ssFallback:n.ssFallback&&Ti(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function qm(n=" ",e=0){return De(Ba,null,n,e)}function je(n="",e=!1){return e?(ie(),Rt(Ji,null,n)):De(Ji,null,n)}function kn(n){return n==null||typeof n=="boolean"?De(Ji):$e(n)?De(ft,null,n.slice()):typeof n=="object"?mi(n):De(Ba,null,String(n))}function mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ti(n)}function Hl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Hl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Ha in e)?e._ctx=gn:s===3&&gn&&(gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:gn},t=32):(e=String(e),i&64?(t=16,e=[qm(e)]):t=8);n.children=e,n.shapeFlag|=t}function Hd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ot([e.class,i.class]));else if(s==="style")e.style=Rn([e.style,i.style]);else if(Ra(s)){const r=e[s],a=i[s];a&&r!==a&&!($e(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function On(n,e,t,i=null){Fn(n,e,7,[t,i])}const $m=Ld();let Xm=0;function Ym(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||$m,r={uid:Xm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Id(i,s),emitsOptions:Ad(i,s),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=im.bind(null,r),n.ce&&n.ce(r),r}let Nt=null;const jm=()=>Nt||gn;let zl,is,Pc="__VUE_INSTANCE_SETTERS__";(is=qo()[Pc])||(is=qo()[Pc]=[]),is.push(n=>Nt=n),zl=n=>{is.length>1?is.forEach(e=>e(n)):is[0](n)};const Us=n=>{zl(n),n.scope.on()},$i=()=>{Nt&&Nt.scope.off(),zl(null)};function zd(n){return n.vnode.shapeFlag&4}let mr=!1;function Km(n,e=!1){mr=e;const{props:t,children:i}=n.vnode,s=zd(n);Dm(n,t,s,e),Fm(n,i);const r=s?Zm(n,e):void 0;return mr=!1,r}function Zm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Ua(new Proxy(n.ctx,Em));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Qm(n):null;Us(n),Hs();const r=Mi(i,n,0,[n.props,s]);if(zs(),$i(),Kf(r)){if(r.then($i,$i),e)return r.then(a=>{Lc(n,a,e)}).catch(a=>{Fa(a,n,0)});n.asyncDep=r}else Lc(n,r,e)}else Gd(n,e)}function Lc(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=Md(e)),Gd(n,t)}let Dc;function Gd(n,e,t){const i=n.type;if(!n.render){if(!e&&Dc&&!i.render){const s=i.template||kl(n).template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Gt(Gt({isCustomElement:r,delimiters:o},a),l);i.render=Dc(s,c)}}n.render=i.render||Gn}{Us(n),Hs();try{bm(n)}finally{zs(),$i()}}}function Jm(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return cn(n,"get","$attrs"),e[t]}}))}function Qm(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Jm(n)},slots:n.slots,emit:n.emit,expose:e}}function za(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Md(Ua(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in rr)return rr[t](n)},has(e,t){return t in e||t in rr}}))}function e_(n){return Je(n)&&"__vccOpts"in n}const Pt=(n,e)=>Zp(n,e,mr);function zt(n,e,t){const i=arguments.length;return i===2?xt(e)&&!$e(e)?tl(e)?De(n,null,[e]):De(n,e):De(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&tl(t)&&(t=[t]),De(n,e,t))}const t_=Symbol.for("v-scx"),n_=()=>_t(t_),i_="3.3.8",s_="http://www.w3.org/2000/svg",zi=typeof document<"u"?document:null,Ic=zi&&zi.createElement("template"),r_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?zi.createElementNS(s_,n):zi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>zi.createTextNode(n),createComment:n=>zi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ic.innerHTML=i?`<svg>${n}</svg>`:n;const o=Ic.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},a_=Symbol("_vtc");function o_(n,e,t){const i=n[a_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Gl=Symbol("_vod"),Ht={beforeMount(n,{value:e},{transition:t}){n[Gl]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ys(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Ys(n,!0),i.enter(n)):i.leave(n,()=>{Ys(n,!1)}):Ys(n,e))},beforeUnmount(n,{value:e}){Ys(n,e)}};function Ys(n,e){n.style.display=e?n[Gl]:"none"}function l_(n,e,t){const i=n.style,s=Lt(t);if(t&&!s){if(e&&!Lt(e))for(const r in e)t[r]==null&&nl(i,r,"");for(const r in t)nl(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),Gl in n&&(i.display=r)}}const Uc=/\s*!important$/;function nl(n,e,t){if($e(t))t.forEach(i=>nl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=c_(n,e);Uc.test(t)?n.setProperty(Bs(i),t.replace(Uc,""),"important"):n[i]=t}}const Fc=["Webkit","Moz","ms"],ao={};function c_(n,e){const t=ao[e];if(t)return t;let i=Ds(e);if(i!=="filter"&&i in n)return ao[e]=i;i=Qf(i);for(let s=0;s<Fc.length;s++){const r=Fc[s]+i;if(r in n)return ao[e]=r}return e}const Nc="http://www.w3.org/1999/xlink";function u_(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Nc,e.slice(6,e.length)):n.setAttributeNS(Nc,e,t);else{const r=yp(e);t==null||r&&!ed(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function f_(n,e,t,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=ed(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function d_(n,e,t,i){n.addEventListener(e,t,i)}function h_(n,e,t,i){n.removeEventListener(e,t,i)}const Oc=Symbol("_vei");function p_(n,e,t,i,s=null){const r=n[Oc]||(n[Oc]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=m_(e);if(i){const c=r[e]=v_(i,s);d_(n,o,c,l)}else a&&(h_(n,o,a,l),r[e]=void 0)}}const kc=/(?:Once|Passive|Capture)$/;function m_(n){let e;if(kc.test(n)){e={};let i;for(;i=n.match(kc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Bs(n.slice(2)),e]}let oo=0;const __=Promise.resolve(),g_=()=>oo||(__.then(()=>oo=0),oo=Date.now());function v_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Fn(x_(i,t.value),e,5,[i])};return t.value=n,t.attached=g_(),t}function x_(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Bc=/^on[a-z]/,M_=(n,e,t,i,s=!1,r,a,o,l)=>{e==="class"?o_(n,i,s):e==="style"?l_(n,t,i):Ra(e)?El(e)||p_(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):S_(n,e,i,s))?f_(n,e,i,r,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),u_(n,e,i,s))};function S_(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Bc.test(e)&&Je(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Bc.test(e)&&Lt(t)?!1:e in n}const y_=Gt({patchProp:M_},r_);let Hc;function E_(){return Hc||(Hc=Om(y_))}const b_=(...n)=>{const e=E_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=T_(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function T_(n){return Lt(n)?document.querySelector(n):n}var A_=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Vd;const Ga=n=>Vd=n,Wd=Symbol();function il(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var or;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(or||(or={}));function w_(){const n=Al(!0),e=n.run(()=>Ae({}));let t=[],i=[];const s=Ua({install(r){Ga(s),s._a=r,r.provide(Wd,s),r.config.globalProperties.$pinia=s,i.forEach(a=>t.push(a)),i=[]},use(r){return!this._a&&!A_?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const qd=()=>{};function zc(n,e,t,i=qd){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&id()&&sd(s),s}function ss(n,...e){n.slice().forEach(t=>{t(...e)})}const C_=n=>n();function sl(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];il(s)&&il(i)&&n.hasOwnProperty(t)&&!yt(i)&&!xi(i)?n[t]=sl(s,i):n[t]=i}return n}const R_=Symbol();function P_(n){return!il(n)||!n.hasOwnProperty(R_)}const{assign:pi}=Object;function L_(n){return!!(yt(n)&&n.effect)}function D_(n,e,t,i){const{state:s,actions:r,getters:a}=e,o=t.state.value[n];let l;function c(){o||(t.state.value[n]=s?s():{});const u=Sd(t.state.value[n]);return pi(u,r,Object.keys(a||{}).reduce((f,d)=>(f[d]=Ua(Pt(()=>{Ga(t);const m=t._s.get(n);return a[d].call(m,m)})),f),{}))}return l=$d(n,c,e,t,i,!0),l}function $d(n,e,t={},i,s,r){let a;const o=pi({actions:{}},t),l={deep:!0};let c,u,f=[],d=[],m;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={}),Ae({});let _;function p($){let M;c=u=!1,typeof $=="function"?($(i.state.value[n]),M={type:or.patchFunction,storeId:n,events:m}):(sl(i.state.value[n],$),M={type:or.patchObject,payload:$,storeId:n,events:m});const A=_=Symbol();Gs().then(()=>{_===A&&(c=!0)}),u=!0,ss(f,M,i.state.value[n])}const h=r?function(){const{state:M}=t,A=M?M():{};this.$patch(te=>{pi(te,A)})}:qd;function E(){a.stop(),f=[],d=[],i._s.delete(n)}function S($,M){return function(){Ga(i);const A=Array.from(arguments),te=[],K=[];function J(q){te.push(q)}function I(q){K.push(q)}ss(d,{args:A,name:$,store:C,after:J,onError:I});let j;try{j=M.apply(this&&this.$id===n?this:C,A)}catch(q){throw ss(K,q),q}return j instanceof Promise?j.then(q=>(ss(te,q),q)).catch(q=>(ss(K,q),Promise.reject(q))):(ss(te,j),j)}}const b={_p:i,$id:n,$onAction:zc.bind(null,d),$patch:p,$reset:h,$subscribe($,M={}){const A=zc(f,$,M.detached,()=>te()),te=a.run(()=>Et(()=>i.state.value[n],K=>{(M.flush==="sync"?u:c)&&$({storeId:n,type:or.direct,events:m},K)},pi({},l,M)));return A},$dispose:E},C=$t(b);i._s.set(n,C);const R=(i._a&&i._a.runWithContext||C_)(()=>i._e.run(()=>(a=Al()).run(e)));for(const $ in R){const M=R[$];if(yt(M)&&!L_(M)||xi(M))r||(g&&P_(M)&&(yt(M)?M.value=g[$]:sl(M,g[$])),i.state.value[n][$]=M);else if(typeof M=="function"){const A=S($,M);R[$]=A,o.actions[$]=M}}return pi(C,R),pi(rt(C),R),Object.defineProperty(C,"$state",{get:()=>i.state.value[n],set:$=>{p(M=>{pi(M,$)})}}),i._p.forEach($=>{pi(C,a.run(()=>$({store:C,app:i._a,pinia:i,options:o})))}),g&&r&&t.hydrate&&t.hydrate(C.$state,g),c=!0,u=!0,C}function Vs(n,e,t){let i,s;const r=typeof e=="function";typeof n=="string"?(i=n,s=r?t:e):(s=n,i=n.id);function a(o,l){const c=Lm();return o=o||(c?_t(Wd,null):null),o&&Ga(o),o=Vd,o._s.has(i)||(r?$d(i,e,s,o):D_(i,s,o)),o._s.get(i)}return a.$id=i,a}const I_={class:"btnFlame"},U_=Ye({__name:"GreenBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(ie(),_e("div",I_,Le(n.inside),1))}}),Qe=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},F_=Qe(U_,[["__scopeId","data-v-5e53e09c"]]),w={title:"Seventh Dawn",newgame:"NEW GAME",loadgame:"LOAD GAME",textYes:"YES",textNo:"NO",strLog1:"GENERAL",strLog2:"BATTLE",statusOpening:"OPENING",statusTown:"TOWN",processGuild:"GUILD",actionAddMember:"Add a Member",actionRemoveMember:"Remove Member",processPub:"PUB",processInn:"INN",processChurch:"CHURCH",processSmith:"SMITH",processEquipShop:"EQUPMENT SHOP",processItemShop:"ITEM SHOP",statusDungeon:"DUNGEON",processSearch:"SEARCH",processBattle:"BATTLE",mainChaid:1,clsSamurai:"Samurai",clsHolyKnight:"HolyKnight",clsPriest:"Priest",clsArcher:"Archer",MapWidth:100,MapHeight:100,MapWall:0,MapRoom:1,MapRoad:2,SetDoorUp:11,SetDoorUnder:12,SetDoorLeft:13,SetDoorRight:14,roomMinHeight:5,roomMaxHeight:15,roomMinWidth:5,roomMaxWidth:15,RoomCountMin:10,RoomCountMax:20,BlockSize:10,BlockHeight:15,meetPointCount:2,MiniHeight:300,MiniWallColor:"#02040F",MiniRoomColor:"#C2B8B2",MiniMoveColor:"#197BBD",MiniPlayerColor:"#CBEF43",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",TurnLeft:"TurnLeft",TurnRight:"TurnRight",encountMin:1,encountMax:5,encountLimit:1,monNumMin:1,monNumMax:6,minEffectTop:20,maxEffectTop:40,minEffectLeft:30,maxEffectLeft:50,initHitRate:70,monsterHitRate:75,normalDamageRate:1,critDamageRate:1.5,effectTime:1e3,normalAttackTime:400,monsterAttackTime:500,delayTime:100,awaitTime:1500,nextTime:500,strAttack:"Attack",strSkill:"Skill",strMagic:"Magic",strAtk:"ATK",strMgc:"MGC",strMiss:"MISS",logEnterDungeon:"Enter the dungeon",logMonsterEncounter:"Monster Encounter",msgAddParty1:"Do you add ",msgAddParty2:" to your party?",msgRemoveParty1:"Do you remove ",msgRemoveParty2:" from the party?",msgAddPartyError:"The party is full. Please remove someone.",msgRemovePartyError:"This character cannot remove from party.",msgSkillCostError:"Skill cost limit error test12345678901234567890"},$n=Vs("status",{state:()=>({status:w.statusOpening,process:w.processSearch,action:""})}),N_={class:"background"},O_={class:"title"},k_=Ye({__name:"Opening",setup(n){const e=$n();function t(){e.status=w.statusTown,e.process=w.statusTown}return(i,s)=>(ie(),_e("div",N_,[L("div",O_,Le(me(w).title),1),De(F_,{class:"btnCard",id:"btn2",inside:me(w).newgame,onClick:s[0]||(s[0]=r=>t())},null,8,["inside"])]))}}),B_=Qe(k_,[["__scopeId","data-v-c416639b"]]);/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const wt={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Gc={itemsToShow:{default:wt.itemsToShow,type:Number},itemsToScroll:{default:wt.itemsToScroll,type:Number},wrapAround:{default:wt.wrapAround,type:Boolean},throttle:{default:wt.throttle,type:Number},snapAlign:{default:wt.snapAlign,validator(n){return["start","end","center","center-even","center-odd"].includes(n)}},transition:{default:wt.transition,type:Number},breakpoints:{default:wt.breakpoints,type:Object},autoplay:{default:wt.autoplay,type:Number},pauseAutoplayOnHover:{default:wt.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:wt.mouseDrag,type:Boolean},touchDrag:{default:wt.touchDrag,type:Boolean},dir:{default:wt.dir,validator(n){return["rtl","ltr"].includes(n)}},i18n:{default:wt.i18n,type:Object},settings:{default(){return{}},type:Object}};function H_({config:n,slidesCount:e}){const{snapAlign:t,wrapAround:i,itemsToShow:s=1}=n;if(i)return Math.max(e-1,0);let r;switch(t){case"start":r=e-s;break;case"end":r=e-1;break;case"center":case"center-odd":r=e-Math.ceil((s-.5)/2);break;case"center-even":r=e-Math.ceil(s/2);break;default:r=0;break}return Math.max(r,0)}function z_({config:n,slidesCount:e}){const{wrapAround:t,snapAlign:i,itemsToShow:s=1}=n;let r=0;if(t||s>e)return r;switch(i){case"start":r=0;break;case"end":r=s-1;break;case"center":case"center-odd":r=Math.floor((s-1)/2);break;case"center-even":r=Math.floor((s-2)/2);break;default:r=0;break}return r}function rl({val:n,max:e,min:t}){return e<t?n:Math.min(Math.max(n,t),e)}function G_({config:n,currentSlide:e,slidesCount:t}){const{snapAlign:i,wrapAround:s,itemsToShow:r=1}=n;let a=e;switch(i){case"center":case"center-odd":a-=(r-1)/2;break;case"center-even":a-=(r-2)/2;break;case"end":a-=r-1;break}return s?a:rl({val:a,max:t-r,min:0})}function Xd(n){return n?n.reduce((e,t)=>{var i;return t.type===ft?[...e,...Xd(t.children)]:((i=t.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...e,t]:e},[]):[]}function Sa({val:n,max:e,min:t=0}){return n>e?Sa({val:n-(e+1),max:e,min:t}):n<t?Sa({val:n+(e+1),max:e,min:t}):n}function V_(n,e){let t;return e?function(...i){const s=this;t||(n.apply(s,i),t=!0,setTimeout(()=>t=!1,e))}:n}function W_(n,e){let t;return function(...i){t&&clearTimeout(t),t=setTimeout(()=>{n(...i),t=null},e)}}function Yd(n="",e={}){return Object.entries(e).reduce((t,[i,s])=>t.replace(`{${i}}`,String(s)),n)}var q_=Ye({name:"ARIA",setup(){const n=_t("config",$t(Object.assign({},wt))),e=_t("currentSlide",Ae(0)),t=_t("slidesCount",Ae(0));return()=>zt("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Yd(n.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:t.value}))}}),$_=Ye({name:"Carousel",props:Gc,setup(n,{slots:e,emit:t,expose:i}){var s;const r=Ae(null),a=Ae([]),o=Ae(0),l=Ae(0),c=$t(Object.assign({},wt));let u=Object.assign({},wt),f;const d=Ae((s=n.modelValue)!==null&&s!==void 0?s:0),m=Ae(0),g=Ae(0),_=Ae(0),p=Ae(0);let h,E;yn("config",c),yn("slidesCount",l),yn("currentSlide",d),yn("maxSlide",_),yn("minSlide",p),yn("slideWidth",o);function S(){f=Object.assign({},n.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),n),{i18n:Object.assign(Object.assign({},u.i18n),n.i18n),breakpoints:void 0}),C(u)}function b(){if(!f||!Object.keys(f).length)return;const P=Object.keys(f).map(H=>Number(H)).sort((H,ae)=>+ae-+H);let z=Object.assign({},u);P.some(H=>{const ae=window.matchMedia(`(min-width: ${H}px)`).matches;return ae&&(z=Object.assign(Object.assign({},z),f[H])),ae}),C(z)}function C(P){Object.entries(P).forEach(([z,H])=>c[z]=H)}const F=W_(()=>{b(),R()},16);function R(){if(!r.value)return;const P=r.value.getBoundingClientRect();o.value=P.width/c.itemsToShow}function $(){l.value<=0||(g.value=Math.ceil((l.value-1)/2),_.value=H_({config:c,slidesCount:l.value}),p.value=z_({config:c,slidesCount:l.value}),c.wrapAround||(d.value=rl({val:d.value,max:_.value,min:p.value})))}Sr(()=>{Gs(()=>R()),setTimeout(()=>R(),1e3),b(),se(),window.addEventListener("resize",F,{passive:!0}),t("init")}),Ol(()=>{E&&clearTimeout(E),h&&clearInterval(h),window.removeEventListener("resize",F,{passive:!0})});let M=!1;const A={x:0,y:0},te={x:0,y:0},K=$t({x:0,y:0}),J=Ae(!1),I=Ae(!1),j=()=>{J.value=!0},q=()=>{J.value=!1};function X(P){["INPUT","TEXTAREA","SELECT"].includes(P.target.tagName)||(M=P.type==="touchstart",M||P.preventDefault(),!(!M&&P.button!==0||W.value)&&(A.x=M?P.touches[0].clientX:P.clientX,A.y=M?P.touches[0].clientY:P.clientY,document.addEventListener(M?"touchmove":"mousemove",le,!0),document.addEventListener(M?"touchend":"mouseup",he,!0)))}const le=V_(P=>{I.value=!0,te.x=M?P.touches[0].clientX:P.clientX,te.y=M?P.touches[0].clientY:P.clientY;const z=te.x-A.x,H=te.y-A.y;K.y=H,K.x=z},c.throttle);function he(){const P=c.dir==="rtl"?-1:1,z=Math.sign(K.x)*.4,H=Math.round(K.x/o.value+z)*P;if(H&&!M){const ae=fe=>{fe.stopPropagation(),window.removeEventListener("click",ae,!0)};window.addEventListener("click",ae,!0)}be(d.value-H),K.x=0,K.y=0,I.value=!1,document.removeEventListener(M?"touchmove":"mousemove",le,!0),document.removeEventListener(M?"touchend":"mouseup",he,!0)}function se(){!c.autoplay||c.autoplay<=0||(h=setInterval(()=>{c.pauseAutoplayOnHover&&J.value||ve()},c.autoplay))}function k(){h&&(clearInterval(h),h=null),se()}const W=Ae(!1);function be(P){const z=c.wrapAround?P:rl({val:P,max:_.value,min:p.value});d.value===z||W.value||(t("slide-start",{slidingToIndex:P,currentSlideIndex:d.value,prevSlideIndex:m.value,slidesCount:l.value}),W.value=!0,m.value=d.value,d.value=z,E=setTimeout(()=>{if(c.wrapAround){const H=Sa({val:z,max:_.value,min:0});H!==d.value&&(d.value=H,t("loop",{currentSlideIndex:d.value,slidingToIndex:P}))}t("update:modelValue",d.value),t("slide-end",{currentSlideIndex:d.value,prevSlideIndex:m.value,slidesCount:l.value}),W.value=!1,k()},c.transition))}function ve(){be(d.value+c.itemsToScroll)}function Me(){be(d.value-c.itemsToScroll)}const Ie={slideTo:be,next:ve,prev:Me};yn("nav",Ie),yn("isSliding",W);const ke=Pt(()=>G_({config:c,currentSlide:d.value,slidesCount:l.value}));yn("slidesToScroll",ke);const Ne=Pt(()=>{const P=c.dir==="rtl"?-1:1,z=ke.value*o.value*P;return{transform:`translateX(${K.x-z}px)`,transition:`${W.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${l.value*o.value}px`:"",width:"100%"}});function Fe(){S(),b(),$(),R(),k()}Object.keys(Gc).forEach(P=>{["modelValue"].includes(P)||Et(()=>n[P],Fe)}),Et(()=>n.modelValue,P=>{P!==d.value&&be(Number(P))}),Et(l,$),t("before-init"),S();const at={config:c,slidesCount:l,slideWidth:o,next:ve,prev:Me,slideTo:be,currentSlide:d,maxSlide:_,minSlide:p,middleSlide:g};i({updateBreakpointsConfigs:b,updateSlidesData:$,updateSlideWidth:R,initDefaultConfigs:S,restartCarousel:Fe,slideTo:be,next:ve,prev:Me,nav:Ie,data:at});const Ve=e.default||e.slides,x=e.addons,U=$t(at);return()=>{const P=Xd(Ve==null?void 0:Ve(U)),z=(x==null?void 0:x(U))||[];P.forEach((ne,pe)=>ne.props.index=pe);let H=P;if(c.wrapAround){const ne=P.map((oe,we)=>Ti(oe,{index:-P.length+we,isClone:!0,key:`clone-before-${we}`})),pe=P.map((oe,we)=>Ti(oe,{index:P.length+we,isClone:!0,key:`clone-after-${we}`}));H=[...ne,...P,...pe]}a.value=P,l.value=Math.max(P.length,1);const ae=zt("ol",{class:"carousel__track",style:Ne.value,onMousedownCapture:c.mouseDrag?X:null,onTouchstartPassiveCapture:c.touchDrag?X:null},H),fe=zt("div",{class:"carousel__viewport"},ae);return zt("section",{ref:r,class:{carousel:!0,"is-sliding":W.value,"is-dragging":I.value,"is-hover":J.value,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":c.i18n.ariaGallery,tabindex:"0",onMouseenter:j,onMouseleave:q},[fe,z,zt(q_)])}}}),al;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(al||(al={}));const X_={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function Y_(n){return n in al}const ol=n=>{const e=_t("config",$t(Object.assign({},wt))),t=String(n.name),i=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!Y_(t))return;const s=X_[t],r=zt("path",{d:s}),a=e.i18n[i]||n.title||t,o=zt("title",a);return zt("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":a},[o,r])};ol.props={name:String,title:String};const j_=(n,{slots:e,attrs:t})=>{const{next:i,prev:s}=e||{},r=_t("config",$t(Object.assign({},wt))),a=_t("maxSlide",Ae(1)),o=_t("minSlide",Ae(1)),l=_t("currentSlide",Ae(1)),c=_t("nav",{}),{dir:u,wrapAround:f,i18n:d}=r,m=u==="rtl",g=zt("button",{type:"button",class:["carousel__prev",!f&&l.value<=o.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":d.ariaPreviousSlide,onClick:c.prev},(s==null?void 0:s())||zt(ol,{name:m?"arrowRight":"arrowLeft"})),_=zt("button",{type:"button",class:["carousel__next",!f&&l.value>=a.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":d.ariaNextSlide,onClick:c.next},(i==null?void 0:i())||zt(ol,{name:m?"arrowLeft":"arrowRight"}));return[g,_]},K_=()=>{const n=_t("config",$t(Object.assign({},wt))),e=_t("maxSlide",Ae(1)),t=_t("minSlide",Ae(1)),i=_t("currentSlide",Ae(1)),s=_t("nav",{}),r=o=>Sa({val:i.value,max:e.value,min:0})===o,a=[];for(let o=t.value;o<e.value+1;o++){const l=zt("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(o)},"aria-label":Yd(n.i18n.ariaNavigateToSlide,{slideNumber:o+1}),onClick:()=>s.slideTo(o)}),c=zt("li",{class:"carousel__pagination-item",key:o},l);a.push(c)}return zt("ol",{class:"carousel__pagination"},a)};var Z_=Ye({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(n,{slots:e}){const t=_t("config",$t(Object.assign({},wt))),i=_t("currentSlide",Ae(0)),s=_t("slidesToScroll",Ae(0)),r=_t("isSliding",Ae(!1)),a=()=>n.index===i.value,o=()=>n.index===i.value-1,l=()=>n.index===i.value+1,c=()=>{const u=Math.floor(s.value),f=Math.ceil(s.value+t.itemsToShow-1);return n.index>=u&&n.index<=f};return()=>{var u;return zt("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":c(),"carousel__slide--active":a(),"carousel__slide--prev":o(),"carousel__slide--next":l(),"carousel__slide--sliding":r.value},"aria-hidden":!c()},(u=e.default)===null||u===void 0?void 0:u.call(e))}}});const J_=[{cha_id:1,name:"Ace",class:"Samurai",faceGraphicUrl:"img/character/chara1face.png",poseGraphicUrl:"img/character/chara1.png",backgroundUrl:"img/character/chara1back.jpg",LV:10,exp:50,nextLvExp:100,HP:220,MP:80,ATK:70,MGC:30,DEF:50,MDF:40,DEX:60,SPD:50,Slash:10,Hit:10,Stab:0,Fire:10,Water:0,Earth:10,Wind:0,Light:0,Dark:0,equipment:{WEP:103,ARM:1003,ACC:2001},activeSkill:[1,2,3,4,5],passiveCost:40,passiveSkill:[1,2,3,4],equipSkill:[1,3]},{cha_id:2,name:"Sophia",class:"Holy Knight",faceGraphicUrl:"img/character/chara2face.png",poseGraphicUrl:"img/character/chara2.png",backgroundUrl:"img/character/chara2back.jpg",LV:10,exp:50,nextLvExp:1e3,HP:250,MP:100,ATK:50,MGC:40,DEF:60,MDF:60,DEX:50,SPD:50,Slash:10,Hit:10,Stab:10,Fire:0,Water:0,Earth:10,Wind:0,Light:10,Dark:0,equipment:{WEP:101,ARM:1002,ACC:2101},activeSkill:[6,7,8,9,10],passiveCost:40,passiveSkill:[2,3,4,5],equipSkill:[2,5]},{cha_id:3,name:"Miroku",class:"Priest",faceGraphicUrl:"img/character/chara3face.png",poseGraphicUrl:"img/character/chara3.png",backgroundUrl:"img/character/chara3back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:200,MP:150,ATK:40,MGC:60,DEF:40,MDF:60,DEX:40,SPD:40,Slash:0,Hit:0,Stab:0,Fire:0,Water:10,Earth:0,Wind:0,Light:10,Dark:0,equipment:{WEP:501,ARM:1201,ACC:2201},activeSkill:[11,12,13,14,15],passiveCost:40,passiveSkill:[5,6,7,8],equipSkill:[5,7]},{cha_id:4,name:"Diana",class:"Archer",faceGraphicUrl:"img/character/chara4face.png",poseGraphicUrl:"img/character/chara4.png",backgroundUrl:"img/character/chara4back.jpg",LV:10,exp:500,nextLvExp:1e3,HP:180,MP:150,ATK:60,MGC:30,DEF:40,MDF:40,DEX:60,SPD:60,Slash:0,Hit:0,Stab:10,Fire:0,Water:0,Earth:0,Wind:10,Light:0,Dark:10,equipment:{WEP:401,ARM:1301,ACC:2001},activeSkill:[16,17,18,19,20],passiveCost:40,passiveSkill:[4,7,8,9],equipSkill:[4,9]},{cha_id:5,name:"Perseus",class:"Warrior",faceGraphicUrl:"img/character/chara5face.png",poseGraphicUrl:"img/character/chara5.png",backgroundUrl:"img/character/chara5back.jpg",LV:10,exp:50,nextLvExp:1e3,HP:250,MP:50,ATK:65,MGC:20,DEF:55,MDF:40,DEX:40,SPD:30,Slash:10,Hit:10,Stab:10,Fire:0,Water:0,Earth:20,Wind:0,Light:10,Dark:0,equipment:{WEP:601,ARM:1001,ACC:2101},activeSkill:[1,2,3,4,5],passiveCost:40,passiveSkill:[1,2,3,4],equipSkill:[1,4]},{cha_id:6,name:"Nyx",class:"Magician",faceGraphicUrl:"img/character/chara6face.png",poseGraphicUrl:"img/character/chara6.png",backgroundUrl:"img/character/chara6back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:150,MP:200,ATK:30,MGC:80,DEF:30,MDF:70,DEX:40,SPD:40,Slash:0,Hit:0,Stab:0,Fire:20,Water:0,Earth:0,Wind:20,Light:0,Dark:10,equipment:{WEP:502,ARM:1201,ACC:2301},activeSkill:[16,17,18,19,20],passiveCost:40,passiveSkill:[9,10,11,12],equipSkill:[8,9]},{cha_id:7,name:"Raven",class:"Assassin",faceGraphicUrl:"img/character/chara7face.png",poseGraphicUrl:"img/character/chara7.png",backgroundUrl:"img/character/chara7back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:180,MP:80,ATK:70,MGC:30,DEF:40,MDF:40,DEX:80,SPD:80,Slash:20,Hit:20,Stab:20,Fire:0,Water:0,Earth:0,Wind:0,Light:0,Dark:20,equipment:{WEP:201,ARM:1301,ACC:2001},activeSkill:[21,22,23,24,25],passiveCost:40,passiveSkill:[13,14,15,16],equipSkill:[10,11]}],Q_=[{skill_id:1,name:"Master Of Swords",info:"When equipped with a sword, physical attack power and accuracy increase.",skill_cost:10,condition:{equipment:"WEP",kind:"sword"},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:20,target:1},{effect_type:1,effect_target:"DEX",effect_amount:10,target:1}]},{skill_id:2,name:"Body Of Steel",info:"When HP is below 50%, physical defense and magic defense increase.",skill_cost:15,condition:{character:"nowHP",under:.5},effect_number:2,skill_effect:[{effect_type:1,effect_target:"DEF",effect_amount:30,target:1},{effect_type:1,effect_target:"MDF",effect_amount:30,target:1}]},{skill_id:3,name:"Flame Blade",info:"Deals additional fire damage when attacking.",skill_cost:20,condition:{attack:.3},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:50,target:4}]},{skill_id:4,name:"Fighting Spirit",info:"When HP is below 20%, attack power and speed increase.",skill_cost:25,condition:{character:"nowHP",under:.2},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:50,target:1},{effect_type:1,effect_target:"SPD",effect_amount:50,target:1}]},{skill_id:5,name:"Ready To Counterattack",info:"被ダメージ時に確率で反撃する",skill_cost:30,condition:{counter:.3},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:100,target:4}]},{skill_id:6,name:"Divine Protection",info:"常にHPが少しずつ回復する",skill_cost:10,condition:[],effect_number:1,skill_effect:[{effect_type:9,effect_target:"HP",effect_amount:10,target:1}]},{skill_id:7,name:"God's Wrath",info:"HPが50%以下の時、聖属性の追加ダメージを与える",skill_cost:100,condition:{character:"nowHP",under:.5},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:50,target:4}]},{skill_id:8,name:"God's Mercy",info:"HPが10%以下の時、完全回復する",skill_cost:20,condition:{character:"nowHP",under:.1},effect_number:1,skill_effect:[{effect_type:9,effect_target:"HP",effect_amount:0,target:1}]},{skill_id:9,name:"Power Of God",info:"2ターンの間、自分の攻撃力と防御力を上げる",skill_cost:25,condition:{underturns:2},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:30,target:1},{effect_type:1,effect_target:"DEF",effect_amount:30,target:1}]}];class jd{constructor(e){Oe(this,"skill_id");Oe(this,"name");Oe(this,"info");Oe(this,"skill_cost");Oe(this,"condition");Oe(this,"effect_number");Oe(this,"skill_effect");Oe(this,"equip");this.skill_id=e.skill_id,this.name=e.name,this.info=e.info,this.skill_cost=e.skill_cost,this.condition=e.condition,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect,this.equip=!1}}const Kd=Q_.map(n=>new jd(n)),eg=[{eqp_id:101,type:"WEP",kind:"Sword",attribute:1,name:"Sword",status:{ATK:10,HitRate:90}},{eqp_id:102,type:"WEP",kind:"Sword",attribute:1,name:"LongSword",status:{ATK:15,HitRate:90}},{eqp_id:103,type:"WEP",kind:"Sword",attribute:1,name:"Katana",status:{ATK:12,DEX:3,HitRate:90}},{eqp_id:110,type:"WEP",kind:"Sword",attribute:1,name:"x-Cariver",status:{ATK:100,HitRate:90,Earth:50}},{eqp_id:201,type:"WEP",kind:"Dagger",attribute:1,name:"Dagger",status:{ATK:5,DEX:5,HitRate:95}},{eqp_id:301,type:"WEP",kind:"Spear",attribute:1,name:"Spear",status:{ATK:12,HitRate:90}},{eqp_id:401,type:"WEP",kind:"Bow",attribute:3,name:"Bow",status:{ATK:5,DEX:5,HitRate:90}},{eqp_id:402,type:"WEP",kind:"Bow",attribute:7,name:"Artemis",status:{ATK:50,DEX:50,HitRate:100,Wind:50}},{eqp_id:501,type:"WEP",kind:"Wand",attribute:2,name:"Staff",status:{ATK:5,MGC:5,HitRate:85}},{eqp_id:502,type:"WEP",kind:"Wand",attribute:2,name:"Wand",status:{MGC:10,HitRate:85}},{eqp_id:510,type:"WEP",kind:"Wand",attribute:2,name:"WaWaWand",status:{MGC:100,HitRate:85,Dark:50}},{eqp_id:601,type:"WEP",kind:"Axe",attribute:1,name:"Axe",status:{ATK:15,HitRate:80}},{eqp_id:1001,type:"ARM",kind:"Armor",attribute:0,name:"Armor",status:{DEF:5,MDF:5,SPD:-5}},{eqp_id:1002,type:"ARM",kind:"Armor",attribute:0,name:"Plate Armor",status:{DEF:10,MDF:5,SPD:-10}},{eqp_id:1003,type:"ARM",kind:"Armor",attribute:0,name:"Leather Armor",status:{DEF:5,MDF:5}},{eqp_id:1020,type:"ARM",kind:"Armor",attribute:0,name:"12Armor",status:{DEF:50,MDF:50,Slash:20,Hit:20,Stab:20}},{eqp_id:1101,type:"ARM",kind:"Shield",attribute:0,name:"Shield",status:{DEF:7,MDF:3}},{eqp_id:1110,type:"ARM",kind:"Shield",attribute:0,name:"TRXShield",status:{DEF:70,MDF:30,Earth:50}},{eqp_id:1201,type:"ARM",kind:"Robe",attribute:0,name:"Robe",status:{DEF:3,MDF:7}},{eqp_id:1210,type:"ARM",kind:"Robe",attribute:8,name:"EngelRobe",status:{DEF:40,MDF:60,Light:100}},{eqp_id:1301,type:"ARM",kind:"Cloth",attribute:0,name:"Cloth",status:{DEF:4,MDF:4}},{eqp_id:1321,type:"ARM",kind:"Cloth",attribute:9,name:"NinjaSuits",status:{DEF:30,MDF:30,DEX:30,SPD:10,Dark:50}},{eqp_id:2001,type:"ACC",kind:"Bangle",attribute:0,name:"Bangle",status:{ATK:5}},{eqp_id:2101,type:"ACC",kind:"Ring",attribute:0,name:"Ring",status:{DEF:5}},{eqp_id:2151,type:"ACC",kind:"Ring",attribute:9,name:"DevilRing",status:{ATK:50,MDF:-50,Dark:100}},{eqp_id:2201,type:"ACC",kind:"Neckless",attribute:0,name:"Neckless",status:{MDF:5}},{eqp_id:2301,type:"ACC",kind:"Amulet",attribute:0,name:"Amulet",status:{MGC:5}},{eqp_id:2451,type:"ACC",kind:"Belt",attribute:0,name:"RiderBelt",status:{HP:100,MP:50,ATK:30,MGC:10,DEF:30,MDF:30,DEX:30,SPD:10,Fire:30,Water:30,Earth:30,Wind:30}},{eqp_id:2551,type:"ACC",kind:"cape",attribute:8,name:"HolyBless",status:{MP:100,MGC:50,DEF:20,MDF:50,Light:100}}];class tg{constructor(e){Oe(this,"eqp_id");Oe(this,"type");Oe(this,"kind");Oe(this,"attribute");Oe(this,"name");Oe(this,"status");this.eqp_id=e.eqp_id,this.type=e.type,this.kind=e.kind,this.attribute=e.attribute,this.name=e.name,this.status=e.status}}const lr=eg.map(n=>new tg(n)),ng=[{skill_id:1,name:"Slash",info:"A basic sword attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/swordman/slash.gif",anime_time:500}]},{skill_id:2,name:"Double Slash",info:"A swift sword attack that deals physical damage to one enemy twice.",attribute:1,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/swordman/double_slash.gif",anime_time:650}]},{skill_id:3,name:"Cross Slash",info:"A powerful sword attack that deals physical damage to one row of enemies.",attribute:1,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/swordman/cross_slash.gif",anime_time:550}]},{skill_id:4,name:"Blaze Slash",info:"A fiery sword attack that deals fire damage to all enemies.",attribute:4,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.4,target:2,target_type:"allEnemy",skill_anime:"effect/skill/swordman/blaze_slash.gif",anime_time:1e3}]},{skill_id:5,name:"Healing Slash",info:"A sword attack that deals physical damage to one enemy and heals the user.",attribute:0,interval:3,consume_type:"HP",consume_amount:10,effect_number:2,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/swordman/healing_slash1.gif",anime_time:480},{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:.5,target:1,target_type:"myself",skill_anime:"effect/skill/swordman/healing_slash2.gif",anime_time:560}]},{skill_id:101,name:"Holy Strike",info:"A holy sword attack that deals light damage to one enemy and reduces their dark resistance.",attribute:8,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.2,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/holyknight/holy_strike.gif",anime_time:930}]},{skill_id:102,name:"Heal",info:"A healing spell that restores HP to one ally.",attribute:10,interval:1,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:1,target:1,target_type:"oneFriend",skill_anime:"effect/skill/holyknight/heal.gif",anime_time:740}]},{skill_id:103,name:"Holy Shield",info:"A protective spell that increases the physical and magical defense of one ally for a few turns.",attribute:8,interval:2,consume_type:"MP",consume_amount:15,effect_number:2,skill_effect:[{effect_type:"buff",effect_kind:"DEF",effect_times:3,base_status:"MGC",effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"effect/skill/holyknight/holy_shield.gif",anime_time:750},{effect_type:"buff",effect_kind:"MDF",effect_times:3,base_status:"MGC",effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"",anime_time:0}]},{skill_id:104,name:"Holy Light",info:"A radiant spell that deals light damage to all enemies and heals all allies.",attribute:8,interval:3,consume_type:"MP",consume_amount:20,effect_number:2,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1,target:2,target_type:"allEnemy",skill_anime:"effect/skill/holyknight/holy_light.gif",anime_time:1040},{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:.5,target:1,target_type:"allFriends",skill_anime:"",anime_time:0}]},{skill_id:105,name:"Divine Judgment",info:"A supreme spell that deals massive light damage to one enemy and has a chance to inflict instant death.",attribute:8,interval:4,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:2,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/holyknight/divine_judgment.gif",anime_time:1680}]},{skill_id:201,name:"Pray",info:"A simple prayer that restores a small amount of MP to the user.",attribute:10,interval:1,consume_type:"HP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowMP",effect_times:1,base_status:"MGC",effect_amount:.2,target:1,target_type:"myself",skill_anime:"effect/skill/priest/pray.gif",anime_time:980}]},{skill_id:202,name:"Cure",info:"A healing spell that restores HP to one ally and removes one negative status effect.",attribute:10,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:.8,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/cure.gif",anime_time:1050}]},{skill_id:203,name:"Bless",info:"A holy spell that increases the luck of one ally for a few turns.",attribute:8,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"buff",effect_kind:"LUK",effect_times:3,base_status:"MGC",effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/bless.gif",anime_time:1040}]},{skill_id:204,name:"Regen",info:"A healing spell that restores HP to all allies gradually for a few turns.",attribute:10,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"condition",effect_kind:"regeneration",effect_times:3,base_status:"MGC",effect_amount:.3,target:1,target_type:"allFriends",skill_anime:"effect/skill/priest/regen.gif",anime_time:2080}]},{skill_id:205,name:"Resurrect",info:"A miracle spell that revives one fallen ally with some HP.",attribute:10,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"revive",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:.5,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/resurrect.gif",anime_time:1470}]},{skill_id:301,name:"Arrow Shot",info:"A basic bow attack that deals physical damage to one enemy.",attribute:0,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/arrow_shot.gif",anime_time:480}]},{skill_id:302,name:"Multi Shot",info:"A bow attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:4,base_status:"ATK",effect_amount:.8,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/archar/multi_shot.gif",anime_time:1600}]},{skill_id:303,name:"Piercing Shot",info:"A bow attack that deals physical damage to one column of enemies and ignores their defense.",attribute:0,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1.5,target:2,target_type:"columnEnemy",skill_anime:"effect/skill/archar/piercing_shot.gif",anime_time:880}]},{skill_id:304,name:"Poison Shot",info:"A bow attack that deals physical damage to one enemy and has a chance to inflict poison status for a few turns.",attribute:0,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/poison_shot.gif",anime_time:720}]},{skill_id:305,name:"Explosive Shot",info:"A bow attack that deals fire damage to one enemy and causes an explosion that damages nearby enemies.",attribute:4,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",effect_amount:2.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/explosive_shot.gif",anime_time:1400}]},{skill_id:401,name:"Pillar Fire",info:"A magic fire attack that deals damage to one enemy.",attribute:4,interval:2,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/arrow_shot.gif",anime_time:1e3}]},{skill_id:402,name:"Windlash",info:"A magical wind blade that deals magical damage to one row of enemies.",attribute:7,interval:3,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:1.3,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/swordman/cross_slash.gif",anime_time:1e3}]},{skill_id:403,name:"Flame Tower",info:"A flame magic that deals damage to one column of enemies.",attribute:4,interval:2,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",effect_amount:1.8,target:2,target_type:"columnEnemy",skill_anime:"effect/skill/archar/piercing_shot.gif",anime_time:1500}]}];class Zd{constructor(e){Oe(this,"skill_id");Oe(this,"name");Oe(this,"info");Oe(this,"attribute");Oe(this,"interval");Oe(this,"consume_type");Oe(this,"consume_amount");Oe(this,"effect_number");Oe(this,"skill_effect");this.skill_id=e.skill_id,this.name=e.name,this.info=e.info,this.attribute=e.attribute,this.interval=e.interval,this.consume_type=e.consume_type,this.consume_amount=e.consume_amount,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect}}const Jd=ng.map(n=>new Zd(n));class rn{constructor(e,t){Oe(this,"cha_id");Oe(this,"name");Oe(this,"class");Oe(this,"faceGraphicUrl");Oe(this,"poseGraphicUrl");Oe(this,"backgroundUrl");Oe(this,"LV");Oe(this,"exp");Oe(this,"nextLvExp");Oe(this,"baseStatus");Oe(this,"equipment");Oe(this,"totalStatus");Oe(this,"buffs",[]);Oe(this,"conditions",[]);Oe(this,"nowHP");Oe(this,"nowMP");Oe(this,"activeSkill");Oe(this,"passiveCost");Oe(this,"passiveSkill");this.cha_id=e.cha_id,this.name=e.name,this.class=e.class,this.faceGraphicUrl=e.faceGraphicUrl,this.poseGraphicUrl=e.poseGraphicUrl,this.backgroundUrl=e.backgroundUrl,this.LV=e.LV,this.exp=e.exp,this.nextLvExp=e.nextLvExp,this.baseStatus={HP:e.HP,MP:e.MP,ATK:e.ATK,MGC:e.MGC,DEF:e.DEF,MDF:e.MDF,DEX:e.DEX,SPD:e.SPD,HitRate:0,CritRate:0,Hate:1-t*.1,Slash:e.Slash,Stab:e.Stab,Hit:e.Hit,Fire:e.Fire,Water:e.Water,Earth:e.Earth,Wind:e.Wind,Light:e.Light,Dark:e.Dark},this.equipment={WEP:lr.find(i=>i.eqp_id===e.equipment.WEP)??null,ARM:lr.find(i=>i.eqp_id===e.equipment.ARM)??null,ACC:lr.find(i=>i.eqp_id===e.equipment.ACC)??null},this.totalStatus=this.calculateTotalStatus(),this.nowHP=this.totalStatus.HP,this.nowMP=this.totalStatus.MP,this.activeSkill=e.activeSkill.map(i=>Jd.find(s=>s.skill_id===i)),this.passiveCost=e.passiveCost,this.passiveSkill=e.passiveSkill.map(i=>{const s=Kd.find(a=>a.skill_id===i);let r;return s&&(r=new jd(s),r.equip=e.equipSkill.includes(i)),r}).filter(i=>i!==void 0)}changeEquipment(e,t){this.equipment[e]=t,this.totalStatus=this.calculateTotalStatus()}calculateTotalStatus(){let e={...this.baseStatus};for(let t in this.equipment){let i=this.equipment[t];if(i)for(let s in i.status)e[s]+=i.status[s]}e.HitRate=this.calculateHitRate(e.DEX),e.CritRate=Math.floor(e.DEX/8);for(let t of this.buffs.values())e[t.status]+=t.value;return e}calculateHitRate(e){var i,s;return((i=this.equipment.WEP)!=null&&i.status.HitRate?(s=this.equipment.WEP)==null?void 0:s.status.HitRate:w.initHitRate)+Math.floor(e/10)}updateHate(e){this.baseStatus.Hate=1-e*.1,this.totalStatus=this.calculateTotalStatus()}addBuff(e,t,i,s){const r=this.buffs.findIndex(a=>a.name===e&&a.status===t);r!==-1?(this.buffs[r].value=i,this.buffs[r].duration=s):this.buffs.push({name:e,status:t,value:i,duration:s})}removeBuff(e,t){this.buffs=this.buffs.filter(i=>!(i.name===e&&i.status===t))}updateBuffs(){this.buffs=this.buffs.map(e=>(e.duration--,e.duration<=0?null:e)).filter(e=>e!==null),this.totalStatus=this.calculateTotalStatus()}addCondition(e,t,i,s){const r=this.conditions.findIndex(a=>a.name===e&&a.status===t);r!==-1?(this.conditions[r].value=i,this.conditions[r].duration=s):this.conditions.push({name:e,status:t,value:i,duration:s})}removeCondition(e,t){this.conditions=this.conditions.filter(i=>!(i.name===e&&i.status===t))}updateConditions(){this.conditions=this.conditions.map(e=>(e.duration--,e.duration<=0?null:e)).filter(e=>e!==null)}}const Vl=J_.map((n,e)=>new rn(n,e)),Qd=n=>(Wn("data-v-d05d6919"),n=n(),qn(),n),ig={key:0,class:"CharaCardUI"},sg={class:"line1"},rg={class:"name"},ag={class:"leftItem"},og=Qd(()=>L("span",{class:"statuskinds"},"LV ",-1)),lg={class:"line2"},cg=Qd(()=>L("span",{class:"statuskinds"},"CLASS",-1)),ug={class:"leftItem"},fg=Ye({__name:"CharaCard",props:{character:{type:rn}},setup(n){return(e,t)=>n.character?(ie(),_e("div",ig,[L("div",sg,[L("span",rg,Le(n.character.name),1),L("span",ag,[og,L("span",null,Le(n.character.LV),1)])]),L("div",lg,[cg,L("span",ug,Le(n.character.class),1)])])):je("",!0)}}),eh=Qe(fg,[["__scopeId","data-v-d05d6919"]]),dg={class:"progress-bar-hp"},hg=["value","max"],pg={class:"nowHP"},mg=Ye({__name:"ProgressBarHp",props:{nowHP:{type:Number},maxHP:{type:Number}},setup(n){return(e,t)=>(ie(),_e("div",dg,[L("progress",{class:"progress-hp",value:n.nowHP,max:n.maxHP},null,8,hg),L("span",pg,Le(n.nowHP)+"/"+Le(n.maxHP),1)]))}}),Va=Qe(mg,[["__scopeId","data-v-3070376b"]]),_g={class:"progress-bar-mp"},gg=["value","max"],vg={class:"nowMP"},xg=Ye({__name:"ProgressBarMp",props:{nowMP:{type:Number},maxMP:{type:Number}},setup(n){return(e,t)=>(ie(),_e("div",_g,[L("progress",{class:"progress-mp",value:n.nowMP,max:n.maxMP},null,8,gg),L("span",vg,Le(n.nowMP)+"/"+Le(n.maxMP),1)]))}}),Wl=Qe(xg,[["__scopeId","data-v-90929bea"]]),Mg=n=>(Wn("data-v-02ea92d7"),n=n(),qn(),n),Sg=["value","max"],yg=Mg(()=>L("span",{class:"next"},"NEXT",-1)),Eg={class:"nextExp"},bg=Ye({__name:"ProgressBarExp",props:{exp:{type:Number},next:{type:Number}},setup(n){return(e,t)=>(ie(),_e(ft,null,[L("progress",{class:"progress-exp",value:n.exp,max:n.next},null,8,Sg),yg,L("span",Eg,Le(n.next-n.exp),1)],64))}}),th=Qe(bg,[["__scopeId","data-v-02ea92d7"]]),vn=n=>(Wn("data-v-f76460c8"),n=n(),qn(),n),Tg={key:0,class:"CharaStatusUI"},Ag={class:"hpline"},wg=vn(()=>L("span",{class:"statuskinds"},"HP",-1)),Cg={class:"progress-bar"},Rg={class:"mpline"},Pg=vn(()=>L("span",{class:"statuskinds"},"MP",-1)),Lg={class:"progress-bar"},Dg={class:"expline"},Ig=vn(()=>L("span",{class:"statuskinds"},"EXP",-1)),Ug={class:"progress-bar-exp"},Fg={class:"atkline"},Ng={class:"leftItem"},Og=vn(()=>L("span",{class:"statuskinds"},"ATK",-1)),kg={class:"statusValue"},Bg={class:"rightItem"},Hg=vn(()=>L("span",{class:"statuskinds"},"MGC",-1)),zg={class:"statusValue"},Gg={class:"defline"},Vg={class:"leftItem"},Wg=vn(()=>L("span",{class:"statuskinds"},"DEF",-1)),qg={class:"statusValue"},$g={class:"rightItem"},Xg=vn(()=>L("span",{class:"statuskinds"},"MDF",-1)),Yg={class:"statusValue"},jg={class:"dexline"},Kg={class:"leftItem"},Zg=vn(()=>L("span",{class:"statuskinds"},"DEX",-1)),Jg={class:"statusValue"},Qg={class:"rightItem"},e0=vn(()=>L("span",{class:"statuskinds"},"SPD",-1)),t0={class:"statusValue"},n0={class:"wepline"},i0=vn(()=>L("span",{class:"statuskinds"},"WEP",-1)),s0={class:"equipName"},r0={class:"armline"},a0=vn(()=>L("span",{class:"statuskinds"},"ARM",-1)),o0={class:"equipName"},l0={class:"accline"},c0=vn(()=>L("span",{class:"statuskinds"},"ACC",-1)),u0={class:"equipName"},f0={class:"passiveSkill"},d0=vn(()=>L("div",{class:"statuskinds"},"PASSIVE SKILL",-1)),h0={class:"skillList",density:"compact"},p0={key:0},m0=Ye({__name:"CharaStatus",props:{character:{type:rn}},setup(n){return(e,t)=>{var i,s,r;return n.character?(ie(),_e("div",Tg,[L("div",Ag,[wg,L("span",Cg,[De(Va,{nowHP:n.character.nowHP,maxHP:n.character.totalStatus.HP},null,8,["nowHP","maxHP"])])]),L("div",Rg,[Pg,L("span",Lg,[De(Wl,{nowMP:n.character.nowMP,maxMP:n.character.totalStatus.MP},null,8,["nowMP","maxMP"])])]),L("div",Dg,[Ig,L("span",Ug,[De(th,{exp:n.character.exp,next:n.character.nextLvExp},null,8,["exp","next"])])]),L("div",Fg,[L("span",Ng,[Og,L("span",kg,Le(n.character.totalStatus.ATK),1)]),L("span",Bg,[Hg,L("span",zg,Le(n.character.totalStatus.MGC),1)])]),L("div",Gg,[L("span",Vg,[Wg,L("span",qg,Le(n.character.totalStatus.DEF),1)]),L("span",$g,[Xg,L("span",Yg,Le(n.character.totalStatus.MDF),1)])]),L("div",jg,[L("span",Kg,[Zg,L("span",Jg,Le(n.character.totalStatus.DEX),1)]),L("span",Qg,[e0,L("span",t0,Le(n.character.totalStatus.SPD),1)])]),L("div",n0,[i0,L("span",s0,Le((i=n.character.equipment.WEP)==null?void 0:i.name),1)]),L("div",r0,[a0,L("span",o0,Le((s=n.character.equipment.ARM)==null?void 0:s.name),1)]),L("div",l0,[c0,L("span",u0,Le((r=n.character.equipment.ACC)==null?void 0:r.name),1)]),L("div",f0,[d0,L("ul",h0,[(ie(!0),_e(ft,null,Xt(n.character.passiveSkill,a=>(ie(),_e("li",{key:a.skill_id,class:"skillItem"},[a.equip===!0?(ie(),_e("span",p0,Le(a.name),1)):je("",!0)]))),128))])])])):je("",!0)}}}),_0=Qe(m0,[["__scopeId","data-v-f76460c8"]]),g0="/app2/icon/slash.png",v0="/app2/icon/stab.png",x0="/app2/icon/hit.png",M0="/app2/icon/fire.png",S0="/app2/icon/water.png",y0="/app2/icon/earth.png",E0="/app2/icon/wind.png",b0="/app2/icon/light.png",T0="/app2/icon/dark.png",A0=n=>(Wn("data-v-79bebc05"),n=n(),qn(),n),w0={key:0,class:"CharaStatusUI"},C0=A0(()=>L("div",{class:"statuskinds"},"RESISTANCE",-1)),R0={class:"slashline"},P0={class:"leftItem"},L0=["src"],D0={class:"elementValue"},I0={class:"rightItem"},U0=["src"],F0={class:"elementValue"},N0={class:"hitline"},O0={class:"leftItem"},k0=["src"],B0={class:"elementValue"},H0={class:"fireline"},z0={class:"leftItem"},G0=["src"],V0={class:"elementValue"},W0={class:"rightItem"},q0=["src"],$0={class:"elementValue"},X0={class:"earthline"},Y0={class:"leftItem"},j0=["src"],K0={class:"elementValue"},Z0={class:"rightItem"},J0=["src"],Q0={class:"elementValue"},ev={class:"lightline"},tv={class:"leftItem"},nv=["src"],iv={class:"elementValue"},sv={class:"rightItem"},rv=["src"],av={class:"elementValue"},ov=Ye({__name:"CharaSubStatus",props:{character:{type:rn}},setup(n){return(e,t)=>n.character?(ie(),_e("div",w0,[C0,L("div",R0,[L("span",P0,[L("img",{class:"Icon",src:me(g0),alt:"Slash"},null,8,L0),L("span",D0,Le(n.character.totalStatus.Slash),1)]),L("span",I0,[L("img",{class:"Icon",src:me(v0),alt:"Water"},null,8,U0),L("span",F0,Le(n.character.totalStatus.Stab),1)])]),L("div",N0,[L("span",O0,[L("img",{class:"Icon",src:me(x0),alt:"Hit"},null,8,k0),L("span",B0,Le(n.character.totalStatus.Hit),1)])]),L("div",H0,[L("span",z0,[L("img",{class:"Icon",src:me(M0),alt:"Fire"},null,8,G0),L("span",V0,Le(n.character.totalStatus.Fire),1)]),L("span",W0,[L("img",{class:"Icon",src:me(S0),alt:"Water"},null,8,q0),L("span",$0,Le(n.character.totalStatus.Water),1)])]),L("div",X0,[L("span",Y0,[L("img",{class:"Icon",src:me(y0),alt:"Earth"},null,8,j0),L("span",K0,Le(n.character.totalStatus.Earth),1)]),L("span",Z0,[L("img",{class:"Icon",src:me(E0),alt:"Wind"},null,8,J0),L("span",Q0,Le(n.character.totalStatus.Wind),1)])]),L("div",ev,[L("span",tv,[L("img",{class:"Icon",src:me(b0),alt:"Light"},null,8,nv),L("span",iv,Le(n.character.totalStatus.Light),1)]),L("span",sv,[L("img",{class:"Icon",src:me(T0),alt:"Dark"},null,8,rv),L("span",av,Le(n.character.totalStatus.Dark),1)])])])):je("",!0)}}),lv=Qe(ov,[["__scopeId","data-v-79bebc05"]]),cv=[{eqpbag_id:1,eqp_id:103,type:"WEP",equippedBy:1},{eqpbag_id:2,eqp_id:1003,type:"ARM",equippedBy:1},{eqpbag_id:3,eqp_id:2001,type:"ACC",equippedBy:1},{eqpbag_id:4,eqp_id:101,type:"WEP",equippedBy:2},{eqpbag_id:5,eqp_id:1002,type:"ARM",equippedBy:2},{eqpbag_id:6,eqp_id:2101,type:"ACC",equippedBy:2},{eqpbag_id:7,eqp_id:501,type:"WEP",equippedBy:3},{eqpbag_id:8,eqp_id:1201,type:"ARM",equippedBy:3},{eqpbag_id:9,eqp_id:2201,type:"ACC",equippedBy:3},{eqpbag_id:10,eqp_id:401,type:"WEP",equippedBy:4},{eqpbag_id:11,eqp_id:1301,type:"ARM",equippedBy:4},{eqpbag_id:12,eqp_id:2001,type:"ACC",equippedBy:4},{eqpbag_id:13,eqp_id:601,type:"WEP",equippedBy:5},{eqpbag_id:14,eqp_id:1001,type:"ARM",equippedBy:5},{eqpbag_id:15,eqp_id:2101,type:"ACC",equippedBy:5},{eqpbag_id:16,eqp_id:502,type:"WEP",equippedBy:6},{eqpbag_id:17,eqp_id:1201,type:"ARM",equippedBy:6},{eqpbag_id:18,eqp_id:2301,type:"ACC",equippedBy:6},{eqpbag_id:19,eqp_id:201,type:"WEP",equippedBy:7},{eqpbag_id:20,eqp_id:1301,type:"ARM",equippedBy:7},{eqpbag_id:21,eqp_id:2001,type:"ACC",equippedBy:7},{eqpbag_id:22,eqp_id:102,type:"WEP",equippedBy:null},{eqpbag_id:23,eqp_id:110,type:"WEP",equippedBy:null},{eqpbag_id:24,eqp_id:301,type:"WEP",equippedBy:null},{eqpbag_id:25,eqp_id:402,type:"WEP",equippedBy:null},{eqpbag_id:26,eqp_id:510,type:"WEP",equippedBy:null},{eqpbag_id:27,eqp_id:1020,type:"ARM",equippedBy:null},{eqpbag_id:28,eqp_id:1101,type:"ARM",equippedBy:null},{eqpbag_id:29,eqp_id:1110,type:"ARM",equippedBy:null},{eqpbag_id:30,eqp_id:1210,type:"ARM",equippedBy:null},{eqpbag_id:31,eqp_id:1321,type:"ARM",equippedBy:null},{eqpbag_id:32,eqp_id:2151,type:"ACC",equippedBy:null},{eqpbag_id:33,eqp_id:2451,type:"ACC",equippedBy:null},{eqpbag_id:34,eqp_id:2551,type:"ACC",equippedBy:null}],nh=Vs("equipBag",{state:()=>({equipmentType:{},equipmentItem:{}}),actions:{setEquipBag(){for(let n of cv)this.addEquipment(n.eqpbag_id,n.eqp_id,n.type,n.equippedBy)},addEquipment(n,e,t,i){this.equipmentType[t]||(this.equipmentType[t]=[]);const s={eqpbag_id:n,eqp_id:e,type:t,equippedBy:i};this.equipmentType[t].push(s),this.equipmentItem[n]=s},removeEquipment(n){if(!this.equipmentItem[n])throw new Error(`装備 ${n} は存在しません。`);delete this.equipmentItem[n]},getEquipmentByType(n){return this.equipmentType[n]||[]},equipEquipment(n,e){const t=this.equipmentItem[n];if(!t)throw new Error(`装備 ${n} は存在しません。`);t.equippedBy=e,this.equipmentItem[n]=t},unequipOldEquipment(n,e){const t=this.equipmentType[n].find(i=>i.equippedBy===e);if(!t)throw new Error(`装備 ${n} ${e} は存在しません。`);t.equippedBy=null}}}),ih=n=>(Wn("data-v-12c1e8b1"),n=n(),qn(),n),uv={key:0,class:"EquipmentUI"},fv={class:"EquipmentTab"},dv=["onClick"],hv=ih(()=>L("div",{class:"underLine"},null,-1)),pv={key:0},mv={class:"EquipmentTypeList",density:"compact"},_v=["onClick"],gv=["src"],vv={key:1,class:"faceFlame"},xv={class:"itemName"},Mv={key:2,class:"buttonPosition"},Sv=["onClick"],yv=ih(()=>L("div",{class:"underLine"},null,-1)),Ev={key:0,class:"equipment-status"},bv={class:"status-key"},Tv={class:"status-value"},Av=Ye({__name:"Equipment",props:{character:{type:rn}},setup(n){const e=n,t=nh(),i=["WEP","ARM","ACC"],s=Ae("WEP"),r=_=>{s.value=_,l.value=null,o.value=null},a=Pt(()=>{var _;return(_=e.character)==null?void 0:_.equipment[s.value]}),o=Ae(null),l=Ae(null),c=(_,p,h)=>{const E=lr.find(S=>S.eqp_id===_&&S.type===p);E&&(o.value=E,l.value=h)},u=_=>Vl.find(p=>p.cha_id===_),f=_=>{const p=lr.find(h=>h.eqp_id===_);return p?p.name:null},d=_=>{var p;return((p=e.character)==null?void 0:p.cha_id)==_?"Unequip":"Equip"},m=Pt(()=>{var h;if(!o.value)return;const _={};let p;for(const E in o.value.status)p=o.value.status[E]-(((h=a.value)==null?void 0:h.status[E])||0),_[E]=p>0?"+"+String(p):String(p);return _}),g=(_,p)=>{var E,S,b;let h=e.character.cha_id;p===h?(t.equipEquipment(_,null),(E=e.character)==null||E.changeEquipment(s.value,null)):(a.value&&t.unequipOldEquipment(s.value,h),p!==null&&((S=u(p))==null||S.changeEquipment(s.value,null),console.log(u(p))),t.equipEquipment(_,h),(b=e.character)==null||b.changeEquipment(s.value,o.value)),console.log(t),console.log(e.character)};return(_,p)=>n.character?(ie(),_e("div",uv,[L("ul",fv,[(ie(),_e(ft,null,Xt(i,h=>L("li",{key:h,onClick:E=>r(h),class:Ot([{"selected-tab":h===s.value},"EquipmentTabItem"])},Le(h),11,dv)),64))]),hv,s.value?(ie(),_e("div",pv,[L("ul",mv,[(ie(!0),_e(ft,null,Xt(me(t).equipmentType[s.value],h=>{var E;return ie(),_e("li",{key:h.eqpbag_id,onClick:S=>c(h.eqp_id,s.value,h.eqpbag_id),class:Ot(["EquipmentItem",{"selected-tab":o.value&&h.eqpbag_id===l.value}])},[h.equippedBy!==null?(ie(),_e("img",{key:0,class:"smallface",src:(E=u(h.equippedBy))==null?void 0:E.faceGraphicUrl,alt:"Character face"},null,8,gv)):(ie(),_e("span",vv)),L("span",xv,Le(f(h.eqp_id)),1),o.value&&h.eqpbag_id===l.value?(ie(),_e("span",Mv,[L("span",{class:Ot(["button-equip",{equip:n.character.cha_id!=h.equippedBy,unequip:n.character.cha_id==h.equippedBy}]),onClick:S=>g(h.eqpbag_id,h.equippedBy)},Le(d(h.equippedBy)),11,Sv)])):je("",!0)],10,_v)}),128))]),yv,o.value?(ie(),_e("div",Ev,[m.value!==void 0?(ie(!0),_e(ft,{key:0},Xt(o.value.status,(h,E)=>(ie(),_e("div",{class:"status",key:E},[L("span",bv,Le(E),1),L("span",Tv,Le(h),1),L("span",{class:Ot(["status-diff",{colorblue:Number(m.value[E])>=0,colorred:Number(m.value[E])<0}])},Le(m.value[E]),3)]))),128)):je("",!0)])):je("",!0)])):je("",!0)])):je("",!0)}}),wv=Qe(Av,[["__scopeId","data-v-12c1e8b1"]]),Cv={class:"skillInfo"},Rv=Ye({__name:"SkillInfo",props:{skillInfo:{type:String}},setup(n){return(e,t)=>(ie(),_e("div",Cv,Le(n.skillInfo),1))}}),sh=Qe(Rv,[["__scopeId","data-v-1240da87"]]),Pv={class:"information"},Lv={class:"message"},Dv=Ye({__name:"Information",props:{message:{type:String,default:null}},emits:["hideError"],setup(n,{emit:e}){const t=e;return(i,s)=>(ie(),_e("div",{class:"modal",onClick:s[0]||(s[0]=r=>t("hideError"))},[L("div",Pv,[L("div",Lv,Le(n.message),1)])]))}}),ql=Qe(Dv,[["__scopeId","data-v-620dd0c9"]]),$l=n=>(Wn("data-v-c37a0842"),n=n(),qn(),n),Iv={key:0,class:"SkillUI"},Uv={class:"skillSelect"},Fv={class:"skillType"},Nv={key:0},Ov=["onClick"],kv=$l(()=>L("div",{class:"underLine"},null,-1)),Bv={key:0},Hv={class:"skillList",density:"compact"},zv=["onClick"],Gv={key:0,class:"statuskinds"},Vv={key:1,class:"marginEquip"},Wv={class:"marginLeft05"},qv={class:"costValue"},$v={key:2,class:"buttonPosition"},Xv=["onClick"],Yv={class:"totalCost"},jv=$l(()=>L("span",{class:"statuskinds"},"TOTAL COST",-1)),Kv={class:"costValue"},Zv={class:"totalCost"},Jv=$l(()=>L("span",{class:"statuskinds"},"SKILL COST CAP",-1)),Qv={class:"costValue"},ex={key:1},tx={class:"skillList",density:"compact"},nx=["onClick"],ix={class:"marginLeft1"},sx={class:"costValue"},rx={class:"consumeType"},ax=Ye({__name:"Skill",props:{character:{type:rn},processBattle:{type:Boolean}},emits:["useSkill"],setup(n,{emit:e}){const t=n,i=["PASSIVE","ACTIVE"],s=Ae(!1),r=w.msgSkillCostError,a=Ae(void 0);t.processBattle==!0?a.value="ACTIVE":a.value="PASSIVE";const o=p=>{a.value=p,l.value=null},l=Ae(null),c=p=>{t.processBattle&&p instanceof Zd&&l.value==p&&g(p),l.value=p},u=p=>p?"Unequip":"Equip",f=Ae(0),d=p=>{t.character&&(f.value=t.character.passiveSkill.filter(h=>h.equip).reduce((h,E)=>h+E.skill_cost,0),p.equip?p.equip=!1:Number(f.value)+p.skill_cost>t.character.passiveCost?s.value=!0:p.equip=!0)},m=e,g=p=>{m("useSkill",p)},_=()=>{s.value=!1};return(p,h)=>n.character?(ie(),_e("div",Iv,[L("div",Uv,[L("ul",Fv,[n.processBattle?(ie(),_e("li",Nv,Le("ACTIVE"),1)):(ie(),_e(ft,{key:1},Xt(i,E=>L("li",{key:E,onClick:S=>o(E),class:Ot({"selected-tab":E===a.value})},Le(E),11,Ov)),64))]),kv,a.value=="PASSIVE"?(ie(),_e("div",Bv,[L("ul",Hv,[(ie(!0),_e(ft,null,Xt(n.character.passiveSkill,E=>(ie(),_e("li",{key:E.skill_id,onClick:S=>c(E),class:Ot(["skillItem",{"selected-tab":E===l.value}])},[E.equip===!0?(ie(),_e("span",Gv,"E")):(ie(),_e("span",Vv)),L("span",Wv,Le(E.name),1),L("span",qv,Le(E.skill_cost),1),E===l.value?(ie(),_e("span",$v,[L("span",{onClick:S=>d(E),class:Ot(["button-equip",{equip:E.equip==!1,unequip:E.equip==!0}])},Le(u(E.equip)),11,Xv)])):je("",!0)],10,zv))),128)),L("li",Yv,[jv,L("span",Kv,Le(n.character.passiveSkill.filter(E=>E.equip).reduce((E,S)=>E+S.skill_cost,0)),1)]),L("li",Zv,[Jv,L("span",Qv,Le(n.character.passiveCost),1)])])])):je("",!0),Bt(De(ql,{message:me(r),onHideError:_},null,8,["message"]),[[Ht,s.value]]),a.value=="ACTIVE"?(ie(),_e("div",ex,[L("ul",tx,[(ie(!0),_e(ft,null,Xt(n.character.activeSkill,E=>(ie(),_e("li",{key:E.skill_id,onClick:S=>c(E),class:Ot(["skillItem",{"selected-tab":E===l.value}])},[L("span",ix,Le(E.name),1),L("span",sx,Le(E.consume_amount),1),L("span",rx,Le(E.consume_type),1)],10,nx))),128))])])):je("",!0)]),l.value?(ie(),Rt(sh,{key:0,class:"skillInfo",skillInfo:l.value.info},null,8,["skillInfo"])):je("",!0)])):je("",!0)}}),rh=Qe(ax,[["__scopeId","data-v-c37a0842"]]),ox={key:0,class:"equip"},lx={key:1,class:"skill"},cx=Ye({__name:"SwitchBtn",props:{switchWord:{type:Array}},setup(n){const e=Ae(!0),t=()=>{e.value=!e.value};return(i,s)=>(ie(),_e("div",{class:"outline",onClick:t},[e.value?(ie(),_e("span",ox,Le(n.switchWord[0]),1)):(ie(),_e("span",lx,Le(n.switchWord[1]),1))]))}}),Vc=Qe(cx,[["__scopeId","data-v-1d04cddf"]]),ux="/app2/icon/arrow-left.png",fx=["src"],dx=Ye({__name:"IconLeft",setup(n){return(e,t)=>(ie(),_e("img",{class:"Icon",src:me(ux),alt:"Left"},null,8,fx))}}),hx=Qe(dx,[["__scopeId","data-v-03a756fb"]]),px="/app2/icon/arrow-right.png",mx=["src"],_x=Ye({__name:"IconRight",setup(n){return(e,t)=>(ie(),_e("img",{class:"Icon",src:me(px),alt:"Right"},null,8,mx))}}),gx=Qe(_x,[["__scopeId","data-v-00b3f065"]]),vx={class:"btnFlame"},xx=Ye({__name:"BlueBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(ie(),_e("div",vx,Le(n.inside),1))}}),Mx=Qe(xx,[["__scopeId","data-v-5e9e13f0"]]),Sx={class:"btnFlame"},yx=Ye({__name:"RedBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(ie(),_e("div",Sx,Le(n.inside),1))}}),Ex=Qe(yx,[["__scopeId","data-v-84e11c42"]]),bx={class:"modal"},Tx={class:"confirmation"},Ax={class:"message"},wx=Ye({__name:"Confirmation",props:{message:{type:String}},emits:["confirmationResponse"],setup(n,{emit:e}){const t=s=>{i("confirmationResponse",s)},i=e;return(s,r)=>(ie(),_e("div",bx,[L("div",Tx,[L("div",Ax,Le(n.message),1),De(Mx,{class:"YesBtn",inside:me(w).textYes,onClick:r[0]||(r[0]=a=>t(me(w).textYes))},null,8,["inside"]),De(Ex,{class:"NoBtn",inside:me(w).textNo,onClick:r[1]||(r[1]=a=>t(me(w).textNo))},null,8,["inside"])])]))}}),ah=Qe(wx,[["__scopeId","data-v-f026d387"]]),Jt=(n,e)=>Math.floor(Math.random()*(e-n)+n),lo=n=>Math.floor(Math.random()*n),li=n=>new Promise(e=>setTimeout(e,n)),vt=Array(w.MapHeight).fill(w.MapWall).map(()=>Array(w.MapWidth).fill(w.MapWall)),ir=Array(w.MapHeight).fill(0).map(()=>Array(w.MapWidth).fill(0)),ya={X:0,Y:0};function Cx(){let n=[],e=Jt(w.RoomCountMin,w.RoomCountMax),t=new Array(w.meetPointCount).fill(0),i=new Array(w.meetPointCount).fill(0);for(let s=0;s<t.length;s++)t[s]=Jt(w.MapWidth/4,w.MapWidth*3/4),i[s]=Jt(w.MapHeight/4,w.MapHeight*3/4),vt[i[s]][t[s]]=w.MapRoad;for(let s=0;s<e;s++){const r={Height:Jt(w.roomMinHeight,w.roomMaxHeight),Width:Jt(w.roomMinWidth,w.roomMaxWidth),PointX:Jt(2,w.MapWidth-w.roomMaxWidth-2),PointY:Jt(2,w.MapHeight-w.roomMaxHeight-2),Overlap:!1};r.Overlap=Px(r.Height,r.Width,r.PointX,r.PointY),n.push(r)}for(let s=0;s<e;s++)if(n[s].Overlap==!1){let r=Jt(n[s].PointX,n[s].PointX+n[s].Width),a=Jt(n[s].PointY,n[s].PointY+n[s].Height);s==0&&(ya.X=r,ya.Y=a),Lx(r,a,t[Jt(0,t.length-1)],i[Jt(0,i.length-1)])}for(let s=0;s<vt.length;s++)for(let r=0;r<vt[s].length;r++)vt[s][r]==w.MapRoad&&Rx(s,r)}function Rx(n,e){ti(n,e-1)&&ti(n,e+1)&&(Mn(n-1,e)&&(Mn(n-1,e-1)||Mn(n-1,e+1))&&(ir[n][e]=w.SetDoorUp),Mn(n+1,e)&&(Mn(n+1,e-1)||Mn(n+1,e+1))&&(ir[n][e]=w.SetDoorUnder)),ti(n-1,e)&&ti(n+1,e)&&(Mn(n,e-1)&&(Mn(n-1,e-1)||Mn(n+1,e-1))&&(ir[n][e]=w.SetDoorLeft),Mn(n,e+1)&&(Mn(n-1,e+1)||Mn(n+1,e+1))&&(ir[n][e]=w.SetDoorRight))}function ti(n,e){return n>=0&&n<vt.length&&e>=0&&e<vt[0].length&&vt[n][e]==w.MapWall}function Mn(n,e){return n>=0&&n<vt.length&&e>=0&&e<vt[0].length&&vt[n][e]==w.MapRoom}function Px(n,e,t,i){let s=!1;for(let r=0;r<n;r++)for(let a=0;a<e;a++)vt[i+r][t+a]==w.MapRoom?s=!0:vt[i+r][t+a]=w.MapRoom;return s}function Lx(n,e,t,i){let s=n>t,r=e<=i;if(Math.floor(Math.random()*2)==0){for(;n!=t;)a(1);for(;e!=i;)a(2)}else{for(;e!=i;)a(2);for(;n!=t;)a(1)}function a(o){vt[e][n]==w.MapWall&&(vt[e][n]=w.MapRoad),o==1?n=s?n-1:n+1:e=r?e+1:e-1}}let Nr={characters:[1,2,3,4],gold:1e5,location:[570,180],home:[500,200]};const ts=Vs("party",{state:()=>({characters:[],gold:Nr.gold,location:Nr.location,home:Nr.location,map:[]}),actions:{setParty(){this.characters=Vl.filter(n=>Nr.characters.includes(n.cha_id)),this.map=vt}}}),Ci=Vs("showUI",{state:()=>({map:!0,current:!0,party:!1,character:!1,message:!1,errorMessage:!1})}),Dx=["src"],Ix=Ye({__name:"Character",props:{index:{type:Number},character:{type:rn}},emits:["changeCharacter"],setup(n,{emit:e}){const t=$n(),i=ts(),s=Ci(),r=n,a=Ae(0),o=Ae(void 0),l=Ae(!0),c=["MAIN","SUB"],u=()=>{l.value=!l.value},f=Ae(!0),d=["EQUIP","SKILL"],m=()=>{f.value=!f.value},g=e,_=R=>{g("changeCharacter",R)};function p(){_("next")}function h(){_("back")}let E,S;function b(){if(t.action==w.actionAddMember){if(i.characters.length==4){S=w.msgAddPartyError,s.errorMessage=!0;return}E=w.msgAddParty1+o.value.name+w.msgAddParty2,s.message=!0}}const C=R=>{s.message=!1,R==w.textYes&&(i.characters.push(o.value),s.character=!1)},F=()=>{s.errorMessage=!1};return Et(()=>r.index,()=>{r.index&&(a.value=r.index)}),Et(()=>r.character,()=>{r.character&&(o.value=r.character)}),(R,$)=>o.value?(ie(),_e("div",{key:0,class:"CharacterUI",style:Rn({backgroundImage:"url("+o.value.backgroundUrl+")"})},[L("div",{class:"imageFlame",onClick:b},[L("img",{class:"charaimage",src:o.value.poseGraphicUrl,alt:""},null,8,Dx)]),De(eh,{class:"CharaCardUI",character:o.value},null,8,["character"]),l.value?(ie(),Rt(_0,{key:0,class:"CharaStatusUI",character:o.value},null,8,["character"])):(ie(),Rt(lv,{key:1,class:"CharaSubStatusUI",character:o.value},null,8,["character"])),De(Vc,{class:"ChangeStatus",onClick:u,switchWord:c}),f.value?(ie(),Rt(wv,{key:2,class:"EquipmentUI",character:o.value},null,8,["character"])):(ie(),Rt(rh,{key:3,class:"SkillUI",character:o.value},null,8,["character"])),De(Vc,{class:"ChangeSkill",onClick:m,switchWord:d}),De(hx,{class:"IconCharaBack",onClick:h}),De(gx,{class:"IconCharaNext",onClick:p}),Bt(De(ah,{message:me(E),onConfirmationResponse:C},null,8,["message"]),[[Ht,me(s).message]]),Bt(De(ql,{message:me(S),onHideError:F},null,8,["message"]),[[Ht,me(s).errorMessage]])],4)):je("",!0)}}),oh=Qe(Ix,[["__scopeId","data-v-27529d74"]]),Ux={class:"AddMember"},Fx=["onClick"],Nx=["src"],Ox=Ye({__name:"AddMember",setup(n){const e=ts(),t=Ci(),i=Pt(()=>Vl.filter(l=>!e.characters.some(c=>c.cha_id===l.cha_id))),s=Ae(void 0),r=Ae(void 0);function a(l,c){s.value=l,r.value=c,t.character=!0}const o=l=>{l=="next"?(s.value=s.value==i.value.length-1?0:s.value+1,r.value=i.value[s.value]):(s.value=s.value==0?i.value.length-1:s.value-1,r.value=i.value[s.value])};return(l,c)=>(ie(),_e("div",Ux,[Bt(De(me($_),{"items-to-show":3,"wrap-around":!0},{addons:fa(()=>[De(me(j_)),De(me(K_))]),default:fa(()=>[(ie(!0),_e(ft,null,Xt(i.value,(u,f)=>(ie(),Rt(me(Z_),{key:f},{default:fa(()=>[L("div",{class:"carousel__item",onClick:d=>a(f,u)},[De(eh,{class:"CharaCardUI",character:u},null,8,["character"]),L("img",{class:"chara-image",src:u.poseGraphicUrl,alt:""},null,8,Nx)],8,Fx)]),_:2},1024))),128))]),_:1},512),[[Ht,!me(t).character]]),Bt(De(oh,{character:r.value,index:s.value,onChangeCharacter:o},null,8,["character","index"]),[[Ht,me(t).character]])]))}}),kx=Qe(Ox,[["__scopeId","data-v-52c6a66e"]]),Tn=n=>(Wn("data-v-7869943b"),n=n(),qn(),n),Bx={key:0,class:"StatusUI"},Hx={class:"nameline"},zx={class:"name"},Gx={class:"level"},Vx=Tn(()=>L("span",{class:"statuskinds"},"LV ",-1)),Wx={class:"hpline"},qx=Tn(()=>L("span",{class:"statuskinds"},"HP",-1)),$x={class:"progress-bar"},Xx={class:"mpline"},Yx=Tn(()=>L("span",{class:"statuskinds"},"MP",-1)),jx={class:"progress-bar"},Kx={class:"atkline"},Zx={class:"leftItem"},Jx=Tn(()=>L("span",{class:"statuskinds"},"ATK",-1)),Qx={class:"itemValue"},eM={class:"rightItem"},tM=Tn(()=>L("span",{class:"statuskinds"},"MGC",-1)),nM={class:"itemValue"},iM={class:"defline"},sM={class:"leftItem"},rM=Tn(()=>L("span",{class:"statuskinds"},"DEF",-1)),aM={class:"itemValue"},oM={class:"rightItem"},lM=Tn(()=>L("span",{class:"statuskinds"},"MDF",-1)),cM={class:"itemValue"},uM={class:"dexline"},fM={class:"leftItem"},dM=Tn(()=>L("span",{class:"statuskinds"},"DEX",-1)),hM={class:"itemValue"},pM={class:"rightItem"},mM=Tn(()=>L("span",{class:"statuskinds"},"SPD",-1)),_M={class:"itemValue"},gM={class:"wepline"},vM=Tn(()=>L("span",{class:"statuskinds"},"WEP",-1)),xM={class:"equipName"},MM={class:"armline"},SM=Tn(()=>L("span",{class:"statuskinds"},"ARM",-1)),yM={class:"equipName"},EM={class:"accline"},bM=Tn(()=>L("span",{class:"statuskinds"},"ACC",-1)),TM={class:"equipName"},AM=Ye({__name:"Status",props:{character:{type:rn}},setup(n){return(e,t)=>{var i,s,r;return n.character?(ie(),_e("div",Bx,[L("div",Hx,[L("span",zx,Le(n.character.name),1),L("span",Gx,[Vx,L("span",null,Le(n.character.LV),1)])]),L("div",Wx,[qx,L("span",$x,[De(Va,{nowHP:n.character.nowHP,maxHP:n.character.totalStatus.HP},null,8,["nowHP","maxHP"])])]),L("div",Xx,[Yx,L("span",jx,[De(Wl,{nowMP:n.character.nowMP,maxMP:n.character.totalStatus.MP},null,8,["nowMP","maxMP"])])]),L("div",Kx,[L("span",Zx,[Jx,L("span",Qx,Le(n.character.totalStatus.ATK),1)]),L("span",eM,[tM,L("span",nM,Le(n.character.totalStatus.MGC),1)])]),L("div",iM,[L("span",sM,[rM,L("span",aM,Le(n.character.totalStatus.DEF),1)]),L("span",oM,[lM,L("span",cM,Le(n.character.totalStatus.MDF),1)])]),L("div",uM,[L("span",fM,[dM,L("span",hM,Le(n.character.totalStatus.DEX),1)]),L("span",pM,[mM,L("span",_M,Le(n.character.totalStatus.SPD),1)])]),L("div",gM,[vM,L("span",xM,Le((i=n.character.equipment.WEP)==null?void 0:i.name),1)]),L("div",MM,[SM,L("span",yM,Le((s=n.character.equipment.ARM)==null?void 0:s.name),1)]),L("div",EM,[bM,L("span",TM,Le((r=n.character.equipment.ACC)==null?void 0:r.name),1)])])):je("",!0)}}}),wM=Qe(AM,[["__scopeId","data-v-7869943b"]]),CM="/app2/icon/back.svg",RM=["src"],PM=Ye({__name:"IconBack",setup(n){return(e,t)=>(ie(),_e("img",{class:"Icon",src:me(CM),alt:"Back"},null,8,RM))}}),lh=Qe(PM,[["__scopeId","data-v-349d9439"]]),LM="/app2/icon/party.svg",DM=["src"],IM=Ye({__name:"IconParty",setup(n){return(e,t)=>(ie(),_e("img",{class:"Icon",src:me(LM),alt:"Party"},null,8,DM))}}),UM=Qe(IM,[["__scopeId","data-v-f74292cd"]]),FM="/app2/icon/change.svg",NM=["src"],OM=Ye({__name:"IconChange",setup(n){return(e,t)=>(ie(),_e("img",{class:"Icon",src:me(FM),alt:"Change"},null,8,NM))}}),kM=Qe(OM,[["__scopeId","data-v-d5d05f56"]]),BM={key:0,class:"partyUI"},HM={class:"characters"},zM=["onClick"],GM={class:"charaflame"},VM=["src"],WM=Ye({__name:"Party",setup(n){const e=ts(),t=Ci(),i=$n(),s=()=>{f.value=!1,t.party?r():a()},r=()=>{f.value=!1,t.party=!1,t.character=!1,t.map=!0,t.current=!0},a=()=>{t.party=!0,t.character=!1,c.value=void 0,u.value=void 0},o=()=>{if(f.value=!1,!t.party&&!t.character&&(t.map=!1,t.current=!1),t.party){r();return}t.party=!t.party,t.character=!1},l=S=>{S=="next"?(c.value=c.value==e.characters.length-1?0:c.value+1,u.value=e.characters[c.value]):(c.value=c.value==0?e.characters.length-1:c.value-1,u.value=e.characters[c.value])},c=Ae(void 0),u=Ae(void 0),f=Ae(!1),d=Ae([]);let m,g;function _(S,b){if(console.log("selectCharacter"),console.log("statusStore.action",i.action),i.action==w.actionRemoveMember){if(b.cha_id==w.mainChaid){g=w.msgRemovePartyError,t.errorMessage=!0;return}m=w.msgRemoveParty1+b.name+w.msgRemoveParty2,t.message=!0,u.value=b;return}if(f.value){if(d.value.includes(S)?d.value=d.value.filter(C=>C!==S):d.value.length<2&&d.value.push(S),d.value.length===2){const C=e.characters[d.value[0]];e.characters[d.value[0]]=e.characters[d.value[1]],e.characters[d.value[1]]=C;for(let F of d.value)e.characters[F].updateHate(F),console.log("partyStore.characters[order]",e.characters[F]);d.value=[]}}else c.value=S,u.value=b,t.party=!1,t.character=!0}const p=S=>{t.message=!1,S==w.textYes&&(e.characters=e.characters.filter(b=>b.cha_id!==u.value.cha_id),t.character=!1)},h=()=>{t.errorMessage=!1},E=()=>{f.value=!f.value};return(S,b)=>(ie(),_e(ft,null,[me(t).party||me(i).action==me(w).actionRemoveMember?(ie(),_e("div",BM,[L("div",HM,[(ie(!0),_e(ft,null,Xt(me(e).characters,(C,F)=>(ie(),_e("div",{key:C.cha_id,onClick:R=>_(F,C),class:Ot(["character-card",{changing:f.value&&d.value.includes(F)}])},[De(wM,{class:"StatusUI",character:C},null,8,["character"]),L("div",GM,[L("img",{src:C.poseGraphicUrl,alt:"",class:"charaimage"},null,8,VM)])],10,zM))),128))])])):je("",!0),Bt(De(oh,{character:u.value,index:c.value,onChangeCharacter:l},null,8,["character","index"]),[[Ht,me(t).character]]),Bt(De(lh,{class:"IconBack",onClick:s},null,512),[[Ht,me(t).party||me(t).character]]),me(i).action!=me(w).actionRemoveMember?(ie(),Rt(UM,{key:1,class:"IconParty",onClick:o})):je("",!0),Bt(De(kM,{class:Ot(["IconChange",{changing:f.value}]),onClick:E},null,8,["class"]),[[Ht,me(t).party]]),Bt(De(ah,{message:me(m),onConfirmationResponse:p},null,8,["message"]),[[Ht,me(t).message]]),Bt(De(ql,{message:me(g),onHideError:h},null,8,["message"]),[[Ht,me(t).errorMessage]])],64))}}),Xl=Qe(WM,[["__scopeId","data-v-d303f998"]]),Wa=n=>(Wn("data-v-457fab3c"),n=n(),qn(),n),qM={class:"information"},$M={key:0,class:"flame"},XM=Wa(()=>L("div",{class:"firstItem"},"Quest",-1)),YM=Wa(()=>L("div",{class:"secondItem"},"Accept a Quest",-1)),jM=Wa(()=>L("div",{class:"secondItem"},"Receive Rewards",-1)),KM=Wa(()=>L("div",{class:"firstItem"},"About Member",-1)),ZM=Ye({__name:"Guild",setup(n){const e=$n();function t(i){e.action=i}return(i,s)=>(ie(),_e("div",qM,[me(e).action==""?(ie(),_e("div",$M,[XM,YM,jM,KM,L("div",{class:"secondItem",onClick:s[0]||(s[0]=r=>t(me(w).actionAddMember))},Le(me(w).actionAddMember),1),L("div",{class:"secondItem",onClick:s[1]||(s[1]=r=>t(me(w).actionRemoveMember))},Le(me(w).actionRemoveMember),1)])):je("",!0),me(e).action==me(w).actionAddMember?(ie(),Rt(kx,{key:1,class:"into"})):je("",!0),me(e).action==me(w).actionRemoveMember?(ie(),Rt(Xl,{key:2})):je("",!0)]))}}),JM=Qe(ZM,[["__scopeId","data-v-457fab3c"]]),QM={},eS={class:"back"};function tS(n,e){return ie(),_e("div",eS)}const nS=Qe(QM,[["render",tS],["__scopeId","data-v-2b223ecb"]]),iS=Ye({__name:"ProcessBack",setup(n){const e=$n(),t=Ci();function i(){t.message?t.message=!1:t.character?t.character=!1:e.action?e.action="":e.process=w.statusTown}return(s,r)=>(ie(),Rt(lh,{class:"IconBack",onClick:i}))}}),sS="/app2/icon/guild.jpg",rS="/app2/icon/pub.jpg",aS="/app2/icon/dungeon1.jpg",oS={class:"town"},lS={key:0},cS={key:0},uS=["src"],fS=["src"],dS=["src"],hS=Ye({__name:"Town",setup(n){const e=$n(),t=Ci();function i(s){if(s==w.statusDungeon){e.status=w.statusDungeon,e.process=w.processSearch;return}e.process=s}return(s,r)=>(ie(),_e("div",oS,[me(e).process==me(w).statusTown?(ie(),_e("div",lS,[me(t).party?je("",!0):(ie(),_e("div",cS,[L("img",{class:"dungeon",src:me(aS),alt:"DUNGEON",onClick:r[0]||(r[0]=a=>i(me(w).statusDungeon))},null,8,uS),L("img",{class:"guild",src:me(sS),alt:"GUILD",onClick:r[1]||(r[1]=a=>i(me(w).processGuild))},null,8,fS),L("img",{class:"pub",src:me(rS),alt:"PUB",onClick:r[2]||(r[2]=a=>i(me(w).processPub))},null,8,dS)])),De(Xl)])):me(e).process==me(w).processGuild?(ie(),Rt(JM,{key:1,class:"into"})):me(e).process==me(w).processPub?(ie(),Rt(nS,{key:2,class:"into"})):je("",!0),me(e).process!=me(w).statusTown?(ie(),Rt(iS,{key:3,class:"ProcessBack"})):je("",!0)]))}}),pS=Qe(hS,[["__scopeId","data-v-316929f6"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="158",mS=0,Wc=1,_S=2,ch=1,gS=2,Qn=3,Ai=0,an=1,_n=2,Si=0,Cs=1,qc=2,$c=3,Xc=4,vS=5,Gi=100,xS=101,MS=102,Yc=103,jc=104,SS=200,yS=201,ES=202,bS=203,ll=204,cl=205,TS=206,AS=207,wS=208,CS=209,RS=210,PS=211,LS=212,DS=213,IS=214,US=0,FS=1,NS=2,Ea=3,OS=4,kS=5,BS=6,HS=7,jl=0,zS=1,GS=2,yi=0,VS=1,WS=2,qS=3,$S=4,XS=5,uh=300,Fs=301,Ns=302,ul=303,fl=304,qa=306,dl=1e3,Dn=1001,hl=1002,Qt=1003,Kc=1004,co=1005,En=1006,YS=1007,_r=1008,Ei=1009,jS=1010,KS=1011,Kl=1012,fh=1013,_i=1014,gi=1015,gr=1016,dh=1017,hh=1018,Xi=1020,ZS=1021,In=1023,JS=1024,QS=1025,Yi=1026,Os=1027,ey=1028,ph=1029,ty=1030,mh=1031,_h=1033,uo=33776,fo=33777,ho=33778,po=33779,Zc=35840,Jc=35841,Qc=35842,eu=35843,ny=36196,tu=37492,nu=37496,iu=37808,su=37809,ru=37810,au=37811,ou=37812,lu=37813,cu=37814,uu=37815,fu=37816,du=37817,hu=37818,pu=37819,mu=37820,_u=37821,mo=36492,gu=36494,vu=36495,iy=36283,xu=36284,Mu=36285,Su=36286,gh=3e3,ji=3001,sy=3200,ry=3201,vh=0,ay=1,bn="",kt="srgb",ri="srgb-linear",Zl="display-p3",$a="display-p3-linear",ba="linear",pt="srgb",Ta="rec709",Aa="p3",rs=7680,yu=519,oy=512,ly=513,cy=514,uy=515,fy=516,dy=517,hy=518,py=519,Eu=35044,bu="300 es",pl=1035,ni=2e3,wa=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,ml=180/Math.PI;function yr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function my(n,e){return(n%e+e)%e}function go(n,e,t){return(1-t)*n+t*e}function Tu(n){return(n&n-1)===0&&n!==0}function _l(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function js(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,s,r,a,o,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],_=s[0],p=s[3],h=s[6],E=s[1],S=s[4],b=s[7],C=s[2],F=s[5],R=s[8];return r[0]=a*_+o*E+l*C,r[3]=a*p+o*S+l*F,r[6]=a*h+o*b+l*R,r[1]=c*_+u*E+f*C,r[4]=c*p+u*S+f*F,r[7]=c*h+u*b+f*R,r[2]=d*_+m*E+g*C,r[5]=d*p+m*S+g*F,r[8]=d*h+m*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,m=c*r-a*l,g=t*f+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new it;function xh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _y(){const n=vr("canvas");return n.style.display="block",n}const Au={};function cr(n){n in Au||(Au[n]=!0,console.warn(n))}const wu=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cu=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Or={[ri]:{transfer:ba,primaries:Ta,toReference:n=>n,fromReference:n=>n},[kt]:{transfer:pt,primaries:Ta,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$a]:{transfer:ba,primaries:Aa,toReference:n=>n.applyMatrix3(Cu),fromReference:n=>n.applyMatrix3(wu)},[Zl]:{transfer:pt,primaries:Aa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Cu),fromReference:n=>n.applyMatrix3(wu).convertLinearToSRGB()}},gy=new Set([ri,$a]),dt={enabled:!0,_workingColorSpace:ri,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!gy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Or[e].toReference,s=Or[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Or[n].primaries},getTransfer:function(n){return n===bn?ba:Or[n].transfer}};function Rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let as;class Mh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=vr("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rs(t[i]/255)*255):t[i]=Rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vy=0;class Sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=yr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mo(s[a].image)):r.push(Mo(s[a]))}else r=Mo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xy=0;class on extends Ws{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=Dn,s=Dn,r=En,a=_r,o=In,l=Ei,c=on.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=yr(),this.name="",this.source=new Sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ji?kt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dl:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dl:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?ji:gh}set encoding(e){cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ji?kt:bn}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=uh;on.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(m+1)/2,C=(h+1)/2,F=(u+d)/4,R=(f+_)/4,$=(g+p)/4;return S>b&&S>C?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=F/i,r=R/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=F/s,r=$/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=$/r),this.set(i,s,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class My extends Ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ji?kt:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends My{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yh extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sy extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==m||u!==g){let p=1-o;const h=l*d+c*m+u*g+f*_,E=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const C=Math.sqrt(S),F=Math.atan2(C,h*E);p=Math.sin(p*F)/C,o=Math.sin(o*F)/C}const b=o*E;if(l=l*p+d*b,c=c*p+m*b,u=u*p+g*b,f=f*p+_*b,p===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-o*m,e[t+2]=c*g+u*m+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new G,Ru=new Er;class br{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Br.subVectors(this.max,Ks),os.subVectors(e.a,Ks),ls.subVectors(e.b,Ks),cs.subVectors(e.c,Ks),ci.subVectors(ls,os),ui.subVectors(cs,ls),Ii.subVectors(os,cs);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ii.y,Ii.x,0];return!yo(t,os,ls,cs,Br)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,os,ls,cs,Br))?!1:(Hr.crossVectors(ci,ui),t=[Hr.x,Hr.y,Hr.z],yo(t,os,ls,cs,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new G,new G,new G,new G,new G,new G,new G,new G],An=new G,kr=new br,os=new G,ls=new G,cs=new G,ci=new G,ui=new G,Ii=new G,Ks=new G,Br=new G,Hr=new G,Ui=new G;function yo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ui.fromArray(n,r);const o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yy=new br,Zs=new G,Eo=new G;class Jl{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Zs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Eo)),this.expandByPoint(Zs.copy(e.center).sub(Eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new G,bo=new G,zr=new G,fi=new G,To=new G,Gr=new G,Ao=new G;class Eh{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bo.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(bo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=fi.dot(this.direction),l=-fi.dot(zr),c=fi.lengthSq(),u=Math.abs(1-a*a);let f,d,m,g;if(u>0)if(f=a*l-o,d=a*o-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(bo).addScaledVector(zr,d),m}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,s,r){To.subVectors(t,e),Gr.subVectors(i,e),Ao.crossVectors(To,Gr);let a=this.direction.dot(Ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot(Gr.crossVectors(fi,Gr));if(l<0)return null;const c=o*this.direction.dot(To.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(Ao);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,s,r,a,o,l,c,u,f,d,m,g,_,p){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,d,m,g,_,p)}set(e,t,i,s,r,a,o,l,c,u,f,d,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,_=c*f;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ey,e,by)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),di.crossVectors(i,dn),di.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),di.crossVectors(i,dn)),di.normalize(),Vr.crossVectors(dn,di),s[0]=di.x,s[4]=Vr.x,s[8]=dn.x,s[1]=di.y,s[5]=Vr.y,s[9]=dn.y,s[2]=di.z,s[6]=Vr.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],h=i[14],E=i[3],S=i[7],b=i[11],C=i[15],F=s[0],R=s[4],$=s[8],M=s[12],A=s[1],te=s[5],K=s[9],J=s[13],I=s[2],j=s[6],q=s[10],X=s[14],le=s[3],he=s[7],se=s[11],k=s[15];return r[0]=a*F+o*A+l*I+c*le,r[4]=a*R+o*te+l*j+c*he,r[8]=a*$+o*K+l*q+c*se,r[12]=a*M+o*J+l*X+c*k,r[1]=u*F+f*A+d*I+m*le,r[5]=u*R+f*te+d*j+m*he,r[9]=u*$+f*K+d*q+m*se,r[13]=u*M+f*J+d*X+m*k,r[2]=g*F+_*A+p*I+h*le,r[6]=g*R+_*te+p*j+h*he,r[10]=g*$+_*K+p*q+h*se,r[14]=g*M+_*J+p*X+h*k,r[3]=E*F+S*A+b*I+C*le,r[7]=E*R+S*te+b*j+C*he,r[11]=E*$+S*K+b*q+C*se,r[15]=E*M+S*J+b*X+C*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+r*l*f-s*c*f-r*o*d+i*c*d+s*o*m-i*l*m)+_*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*u-r*l*u)+p*(+t*c*f-t*o*m-r*a*f+i*a*m+r*o*u-i*c*u)+h*(-s*o*u-t*l*f+t*o*d+s*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],E=f*p*c-_*d*c+_*l*m-o*p*m-f*l*h+o*d*h,S=g*d*c-u*p*c-g*l*m+a*p*m+u*l*h-a*d*h,b=u*_*c-g*f*c+g*o*m-a*_*m-u*o*h+a*f*h,C=g*f*l-u*_*l-g*o*d+a*_*d+u*o*p-a*f*p,F=t*E+i*S+s*b+r*C;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/F;return e[0]=E*R,e[1]=(_*d*r-f*p*r-_*s*m+i*p*m+f*s*h-i*d*h)*R,e[2]=(o*p*r-_*l*r+_*s*c-i*p*c-o*s*h+i*l*h)*R,e[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*m-i*l*m)*R,e[4]=S*R,e[5]=(u*p*r-g*d*r+g*s*m-t*p*m-u*s*h+t*d*h)*R,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*h-t*l*h)*R,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*m+t*l*m)*R,e[8]=b*R,e[9]=(g*f*r-u*_*r-g*i*m+t*_*m+u*i*h-t*f*h)*R,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*h+t*o*h)*R,e[11]=(u*o*r-a*f*r-u*i*c+t*f*c+a*i*m-t*o*m)*R,e[12]=C*R,e[13]=(u*_*s-g*f*s+g*i*d-t*_*d-u*i*p+t*f*p)*R,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*p-t*o*p)*R,e[15]=(a*f*s-u*o*s+u*i*l-t*f*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,m=r*u,g=r*f,_=a*u,p=a*f,h=o*f,E=l*c,S=l*u,b=l*f,C=i.x,F=i.y,R=i.z;return s[0]=(1-(_+h))*C,s[1]=(m+b)*C,s[2]=(g-S)*C,s[3]=0,s[4]=(m-b)*F,s[5]=(1-(d+h))*F,s[6]=(p+E)*F,s[7]=0,s[8]=(g+S)*R,s[9]=(p-E)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=us.set(s[0],s[1],s[2]).length();const a=us.set(s[4],s[5],s[6]).length(),o=us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);const c=1/r,u=1/a,f=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,t.setFromRotationMatrix(wn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ni){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let m,g;if(o===ni)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===wa)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ni){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(a-r),d=(t+e)*c,m=(i+s)*u;let g,_;if(o===ni)g=(a+r)*f,_=-2*f;else if(o===wa)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const us=new G,wn=new Ct,Ey=new G(0,0,0),by=new G(1,1,1),di=new G,Vr=new G,dn=new G,Pu=new Ct,Lu=new Er;class Xa{constructor(e=0,t=0,i=0,s=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ty=0;const Du=new G,fs=new Er,Kn=new Ct,Wr=new G,Js=new G,Ay=new G,wy=new Er,Iu=new G(1,0,0),Uu=new G(0,1,0),Fu=new G(0,0,1),Cy={type:"added"},Ry={type:"removed"};class ln extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new G,t=new Xa,i=new Er,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new it}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wr.copy(e):Wr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Js,Wr,this.up):Kn.lookAt(Wr,Js,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Kn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ry)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Ay),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ln.DEFAULT_UP=new G(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new G,Zn=new G,wo=new G,Jn=new G,ds=new G,hs=new G,Nu=new G,Co=new G,Ro=new G,Po=new G;let qr=!1;class Pn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),Zn.subVectors(i,t),wo.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(Zn),l=Cn.dot(wo),c=Zn.dot(Zn),u=Zn.dot(wo),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,i,s,r,a,o,l){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Jn),l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),Zn.subVectors(e,t),Cn.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Cn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ds.subVectors(s,i),hs.subVectors(r,i),Co.subVectors(e,i);const l=ds.dot(Co),c=hs.dot(Co);if(l<=0&&c<=0)return t.copy(i);Ro.subVectors(e,s);const u=ds.dot(Ro),f=hs.dot(Ro);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ds,a);Po.subVectors(e,r);const m=ds.dot(Po),g=hs.dot(Po);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(hs,o);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Nu.subVectors(r,s),o=(f-u)/(f-u+(m-g)),t.copy(s).addScaledVector(Nu,o);const h=1/(p+_+d);return a=_*h,o=d*h,t.copy(i).addScaledVector(ds,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Lo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=my(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Lo(a,r,e+1/3),this.g=Lo(a,r,e),this.b=Lo(a,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=bh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return dt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(sn(Wt.r*255,0,255))*65536+Math.round(sn(Wt.g*255,0,255))*256+Math.round(sn(Wt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=kt){dt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL($r);const i=go(hi.h,$r.h,t),s=go(hi.s,$r.s,t),r=go(hi.l,$r.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new lt;lt.NAMES=bh;let Py=0;class Tr extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=Cs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Th extends Tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new G,Xr=new ct;class Vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Eu,this.updateRange={offset:0,count:-1},this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=js(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=js(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=js(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ah extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wh extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ki extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ly=0;const Sn=new Ct,Do=new ln,ps=new G,hn=new br,Qs=new br,Ft=new G;class ns extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?wh:Ah)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ki(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(hn.min,Qs.min),hn.expandByPoint(Ft),Ft.addVectors(hn.max,Qs.max),hn.expandByPoint(Ft)):(hn.expandByPoint(Qs.min),hn.expandByPoint(Qs.max))}hn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),Ft.add(ps)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new G,u[A]=new G;const f=new G,d=new G,m=new G,g=new ct,_=new ct,p=new ct,h=new G,E=new G;function S(A,te,K){f.fromArray(s,A*3),d.fromArray(s,te*3),m.fromArray(s,K*3),g.fromArray(a,A*2),_.fromArray(a,te*2),p.fromArray(a,K*2),d.sub(f),m.sub(f),_.sub(g),p.sub(g);const J=1/(_.x*p.y-p.x*_.y);isFinite(J)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(J),E.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(J),c[A].add(h),c[te].add(h),c[K].add(h),u[A].add(E),u[te].add(E),u[K].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let A=0,te=b.length;A<te;++A){const K=b[A],J=K.start,I=K.count;for(let j=J,q=J+I;j<q;j+=3)S(i[j+0],i[j+1],i[j+2])}const C=new G,F=new G,R=new G,$=new G;function M(A){R.fromArray(r,A*3),$.copy(R);const te=c[A];C.copy(te),C.sub(R.multiplyScalar(R.dot(te))).normalize(),F.crossVectors($,te);const J=F.dot(u[A])<0?-1:1;l[A*4]=C.x,l[A*4+1]=C.y,l[A*4+2]=C.z,l[A*4+3]=J}for(let A=0,te=b.length;A<te;++A){const K=b[A],J=K.start,I=K.count;for(let j=J,q=J+I;j<q;j+=3)M(i[j+0]),M(i[j+1]),M(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[m++]}return new Vn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ns,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new Ct,Fi=new Eh,Yr=new Jl,ku=new G,ms=new G,_s=new G,gs=new G,Io=new G,jr=new G,Kr=new ct,Zr=new ct,Jr=new ct,Bu=new G,Hu=new G,zu=new G,Qr=new G,ea=new G;class en extends ln{constructor(e=new ns,t=new Th){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Io.fromBufferAttribute(f,e),a?jr.addScaledVector(Io,u):jr.addScaledVector(Io.sub(t),u))}t.add(jr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Fi.copy(e.ray).recast(e.near),!(Yr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Yr,ku)===null||Fi.origin.distanceToSquared(ku)>(e.far-e.near)**2))&&(Ou.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(Ou),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],h=a[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,C=S;b<C;b+=3){const F=o.getX(b),R=o.getX(b+1),$=o.getX(b+2);s=ta(this,h,e,i,c,u,f,F,R,$),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const E=o.getX(p),S=o.getX(p+1),b=o.getX(p+2);s=ta(this,a,e,i,c,u,f,E,S,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],h=a[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,C=S;b<C;b+=3){const F=b,R=b+1,$=b+2;s=ta(this,h,e,i,c,u,f,F,R,$),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const E=p,S=p+1,b=p+2;s=ta(this,a,e,i,c,u,f,E,S,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Dy(n,e,t,i,s,r,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ai,o),l===null)return null;ea.copy(o),ea.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ea);return c<t.near||c>t.far?null:{distance:c,point:ea.clone(),object:n}}function ta(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ms),n.getVertexPosition(l,_s),n.getVertexPosition(c,gs);const u=Dy(n,e,t,i,ms,_s,gs,Qr);if(u){s&&(Kr.fromBufferAttribute(s,o),Zr.fromBufferAttribute(s,l),Jr.fromBufferAttribute(s,c),u.uv=Pn.getInterpolation(Qr,ms,_s,gs,Kr,Zr,Jr,new ct)),r&&(Kr.fromBufferAttribute(r,o),Zr.fromBufferAttribute(r,l),Jr.fromBufferAttribute(r,c),u.uv1=Pn.getInterpolation(Qr,ms,_s,gs,Kr,Zr,Jr,new ct),u.uv2=u.uv1),a&&(Bu.fromBufferAttribute(a,o),Hu.fromBufferAttribute(a,l),zu.fromBufferAttribute(a,c),u.normal=Pn.getInterpolation(Qr,ms,_s,gs,Bu,Hu,zu,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};Pn.getNormal(ms,_s,gs,f.normal),u.face=f}return u}class Ar extends ns{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(u,3)),this.setAttribute("uv",new Ki(f,2));function g(_,p,h,E,S,b,C,F,R,$,M){const A=b/R,te=C/$,K=b/2,J=C/2,I=F/2,j=R+1,q=$+1;let X=0,le=0;const he=new G;for(let se=0;se<q;se++){const k=se*te-J;for(let W=0;W<j;W++){const be=W*A-K;he[_]=be*E,he[p]=k*S,he[h]=I,c.push(he.x,he.y,he.z),he[_]=0,he[p]=0,he[h]=F>0?1:-1,u.push(he.x,he.y,he.z),f.push(W/R),f.push(1-se/$),X+=1}}for(let se=0;se<$;se++)for(let k=0;k<R;k++){const W=d+k+j*se,be=d+k+j*(se+1),ve=d+(k+1)+j*(se+1),Me=d+(k+1)+j*se;l.push(W,be,Me),l.push(be,ve,Me),le+=6}o.addGroup(m,le,M),m+=le,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=ks(n[t]);for(const s in i)e[s]=i[s]}return e}function Iy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ch(n){return n.getRenderTarget()===null?n.outputColorSpace:dt.workingColorSpace}const Uy={clone:ks,merge:Zt};var Fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends Tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fy,this.fragmentShader=Ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rh extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mn extends Rh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,xs=1;class Oy extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(vs,xs,e,t);s.layers=this.layers,this.add(s);const r=new mn(vs,xs,e,t);r.layers=this.layers,this.add(r);const a=new mn(vs,xs,e,t);a.layers=this.layers,this.add(a);const o=new mn(vs,xs,e,t);o.layers=this.layers,this.add(o);const l=new mn(vs,xs,e,t);l.layers=this.layers,this.add(l);const c=new mn(vs,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ph extends on{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ky extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ji?kt:bn),this.texture=new Ph(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ar(5,5,5),r=new es({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Si});r.uniforms.tEquirect.value=t;const a=new en(s,r),o=t.minFilter;return t.minFilter===_r&&(t.minFilter=En),new Oy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Uo=new G,By=new G,Hy=new it;class ki{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Uo.subVectors(i,t).cross(By.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hy.getNormalMatrix(e),s=this.coplanarPoint(Uo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Jl,na=new G;class ec{constructor(e=new ki,t=new ki,i=new ki,s=new ki,r=new ki,a=new ki){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],h=s[12],E=s[13],S=s[14],b=s[15];if(i[0].setComponents(l-r,d-c,p-m,b-h).normalize(),i[1].setComponents(l+r,d+c,p+m,b+h).normalize(),i[2].setComponents(l+a,d+u,p+g,b+E).normalize(),i[3].setComponents(l-a,d-u,p-g,b-E).normalize(),i[4].setComponents(l-o,d-f,p-_,b-S).normalize(),t===ni)i[5].setComponents(l+o,d+f,p+_,b+S).normalize();else if(t===wa)i[5].setComponents(o,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(na.x=s.normal.x>0?e.max.x:e.min.x,na.y=s.normal.y>0?e.max.y:e.min.y,na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zy(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ps extends ns{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const E=h*d-a;for(let S=0;S<c;S++){const b=S*f-r;g.push(b,-E,0),_.push(0,0,1),p.push(S/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const S=E+c*h,b=E+c*(h+1),C=E+1+c*(h+1),F=E+1+c*h;m.push(S,b,F),m.push(b,C,F)}this.setIndex(m),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(_,3)),this.setAttribute("uv",new Ki(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vy=`#ifdef USE_ALPHAHASH
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
#endif`,Wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yy=`#ifdef USE_AOMAP
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
#endif`,jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qy=`#ifdef USE_IRIDESCENCE
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
#endif`,eE=`#ifdef USE_BUMPMAP
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
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cE=`#define PI 3.141592653589793
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
} // validated`,uE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fE=`vec3 transformedNormal = objectNormal;
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
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_E="gl_FragColor = linearToOutputTexel( gl_FragColor );",gE=`
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
}`,vE=`#ifdef USE_ENVMAP
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
#endif`,xE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ME=`#ifdef USE_ENVMAP
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
#endif`,SE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wE=`#ifdef USE_GRADIENTMAP
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
}`,CE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,RE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DE=`uniform bool receiveShadow;
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
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,UE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kE=`PhysicalMaterial material;
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
#endif`,BE=`struct PhysicalMaterial {
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
}`,HE=`
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
#endif`,zE=`#if defined( RE_IndirectDiffuse )
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
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$E=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KE=`#if defined( USE_POINTS_UV )
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
#endif`,ZE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eb=`#ifdef USE_MORPHNORMALS
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
#endif`,tb=`#ifdef USE_MORPHTARGETS
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
#endif`,nb=`#ifdef USE_MORPHTARGETS
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
#endif`,ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lb=`#ifdef USE_NORMALMAP
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
#endif`,cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bb=`float getShadowMask() {
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
}`,Tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ab=`#ifdef USE_SKINNING
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
#endif`,wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cb=`#ifdef USE_SKINNING
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
#endif`,Rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Db=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
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
#endif`,Ub=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hb=`uniform sampler2D t2D;
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`#include <common>
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
}`,$b=`#if DEPTH_PACKING == 3200
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
}`,Xb=`#define DISTANCE
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
}`,Yb=`#define DISTANCE
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`uniform float scale;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,Qb=`#include <common>
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
}`,e1=`uniform vec3 diffuse;
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
}`,t1=`#define LAMBERT
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
}`,n1=`#define LAMBERT
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
}`,i1=`#define MATCAP
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
}`,s1=`#define MATCAP
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
}`,r1=`#define NORMAL
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
}`,a1=`#define NORMAL
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
}`,o1=`#define PHONG
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
}`,l1=`#define PHONG
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
}`,c1=`#define STANDARD
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
}`,u1=`#define STANDARD
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
}`,f1=`#define TOON
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
}`,d1=`#define TOON
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
}`,h1=`uniform float size;
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#include <common>
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
}`,_1=`uniform vec3 color;
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
}`,g1=`uniform float rotation;
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
}`,v1=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Gy,alphahash_pars_fragment:Vy,alphamap_fragment:Wy,alphamap_pars_fragment:qy,alphatest_fragment:$y,alphatest_pars_fragment:Xy,aomap_fragment:Yy,aomap_pars_fragment:jy,begin_vertex:Ky,beginnormal_vertex:Zy,bsdfs:Jy,iridescence_fragment:Qy,bumpmap_pars_fragment:eE,clipping_planes_fragment:tE,clipping_planes_pars_fragment:nE,clipping_planes_pars_vertex:iE,clipping_planes_vertex:sE,color_fragment:rE,color_pars_fragment:aE,color_pars_vertex:oE,color_vertex:lE,common:cE,cube_uv_reflection_fragment:uE,defaultnormal_vertex:fE,displacementmap_pars_vertex:dE,displacementmap_vertex:hE,emissivemap_fragment:pE,emissivemap_pars_fragment:mE,colorspace_fragment:_E,colorspace_pars_fragment:gE,envmap_fragment:vE,envmap_common_pars_fragment:xE,envmap_pars_fragment:ME,envmap_pars_vertex:SE,envmap_physical_pars_fragment:IE,envmap_vertex:yE,fog_vertex:EE,fog_pars_vertex:bE,fog_fragment:TE,fog_pars_fragment:AE,gradientmap_pars_fragment:wE,lightmap_fragment:CE,lightmap_pars_fragment:RE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:LE,lights_pars_begin:DE,lights_toon_fragment:UE,lights_toon_pars_fragment:FE,lights_phong_fragment:NE,lights_phong_pars_fragment:OE,lights_physical_fragment:kE,lights_physical_pars_fragment:BE,lights_fragment_begin:HE,lights_fragment_maps:zE,lights_fragment_end:GE,logdepthbuf_fragment:VE,logdepthbuf_pars_fragment:WE,logdepthbuf_pars_vertex:qE,logdepthbuf_vertex:$E,map_fragment:XE,map_pars_fragment:YE,map_particle_fragment:jE,map_particle_pars_fragment:KE,metalnessmap_fragment:ZE,metalnessmap_pars_fragment:JE,morphcolor_vertex:QE,morphnormal_vertex:eb,morphtarget_pars_vertex:tb,morphtarget_vertex:nb,normal_fragment_begin:ib,normal_fragment_maps:sb,normal_pars_fragment:rb,normal_pars_vertex:ab,normal_vertex:ob,normalmap_pars_fragment:lb,clearcoat_normal_fragment_begin:cb,clearcoat_normal_fragment_maps:ub,clearcoat_pars_fragment:fb,iridescence_pars_fragment:db,opaque_fragment:hb,packing:pb,premultiplied_alpha_fragment:mb,project_vertex:_b,dithering_fragment:gb,dithering_pars_fragment:vb,roughnessmap_fragment:xb,roughnessmap_pars_fragment:Mb,shadowmap_pars_fragment:Sb,shadowmap_pars_vertex:yb,shadowmap_vertex:Eb,shadowmask_pars_fragment:bb,skinbase_vertex:Tb,skinning_pars_vertex:Ab,skinning_vertex:wb,skinnormal_vertex:Cb,specularmap_fragment:Rb,specularmap_pars_fragment:Pb,tonemapping_fragment:Lb,tonemapping_pars_fragment:Db,transmission_fragment:Ib,transmission_pars_fragment:Ub,uv_pars_fragment:Fb,uv_pars_vertex:Nb,uv_vertex:Ob,worldpos_vertex:kb,background_vert:Bb,background_frag:Hb,backgroundCube_vert:zb,backgroundCube_frag:Gb,cube_vert:Vb,cube_frag:Wb,depth_vert:qb,depth_frag:$b,distanceRGBA_vert:Xb,distanceRGBA_frag:Yb,equirect_vert:jb,equirect_frag:Kb,linedashed_vert:Zb,linedashed_frag:Jb,meshbasic_vert:Qb,meshbasic_frag:e1,meshlambert_vert:t1,meshlambert_frag:n1,meshmatcap_vert:i1,meshmatcap_frag:s1,meshnormal_vert:r1,meshnormal_frag:a1,meshphong_vert:o1,meshphong_frag:l1,meshphysical_vert:c1,meshphysical_frag:u1,meshtoon_vert:f1,meshtoon_frag:d1,points_vert:h1,points_frag:p1,shadow_vert:m1,shadow_frag:_1,sprite_vert:g1,sprite_frag:v1},Pe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Bn={basic:{uniforms:Zt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Zt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Zt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Zt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Zt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Zt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Zt([Pe.points,Pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Zt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Zt([Pe.common,Pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Zt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Zt([Pe.sprite,Pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Zt([Pe.common,Pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Zt([Pe.lights,Pe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Bn.physical={uniforms:Zt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const ia={r:0,b:0,g:0};function x1(n,e,t,i,s,r,a){const o=new lt(0);let l=r===!0?0:1,c,u,f=null,d=0,m=null;function g(p,h){let E=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?_(o,l):S&&S.isColor&&(_(S,1),E=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===qa)?(u===void 0&&(u=new en(new Ar(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:ks(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,F,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=dt.getTransfer(S.colorSpace)!==pt,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new en(new Ps(2,2),new es({name:"BackgroundMaterial",uniforms:ks(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=dt.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(ia,Ch(n)),i.buffers.color.setClear(ia.r,ia.g,ia.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function M1(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function f(I,j,q,X,le){let he=!1;if(a){const se=_(X,q,j);c!==se&&(c=se,m(c.object)),he=h(I,X,q,le),he&&E(I,X,q,le)}else{const se=j.wireframe===!0;(c.geometry!==X.id||c.program!==q.id||c.wireframe!==se)&&(c.geometry=X.id,c.program=q.id,c.wireframe=se,he=!0)}le!==null&&t.update(le,n.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,$(I,j,q,X),le!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,j,q){const X=q.wireframe===!0;let le=o[I.id];le===void 0&&(le={},o[I.id]=le);let he=le[j.id];he===void 0&&(he={},le[j.id]=he);let se=he[X];return se===void 0&&(se=p(d()),he[X]=se),se}function p(I){const j=[],q=[],X=[];for(let le=0;le<s;le++)j[le]=0,q[le]=0,X[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:q,attributeDivisors:X,object:I,attributes:{},index:null}}function h(I,j,q,X){const le=c.attributes,he=j.attributes;let se=0;const k=q.getAttributes();for(const W in k)if(k[W].location>=0){const ve=le[W];let Me=he[W];if(Me===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;se++}return c.attributesNum!==se||c.index!==X}function E(I,j,q,X){const le={},he=j.attributes;let se=0;const k=q.getAttributes();for(const W in k)if(k[W].location>=0){let ve=he[W];ve===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor));const Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),le[W]=Me,se++}c.attributes=le,c.attributesNum=se,c.index=X}function S(){const I=c.newAttributes;for(let j=0,q=I.length;j<q;j++)I[j]=0}function b(I){C(I,0)}function C(I,j){const q=c.newAttributes,X=c.enabledAttributes,le=c.attributeDivisors;q[I]=1,X[I]===0&&(n.enableVertexAttribArray(I),X[I]=1),le[I]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,j),le[I]=j)}function F(){const I=c.newAttributes,j=c.enabledAttributes;for(let q=0,X=j.length;q<X;q++)j[q]!==I[q]&&(n.disableVertexAttribArray(q),j[q]=0)}function R(I,j,q,X,le,he,se){se===!0?n.vertexAttribIPointer(I,j,q,le,he):n.vertexAttribPointer(I,j,q,X,le,he)}function $(I,j,q,X){if(i.isWebGL2===!1&&(I.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const le=X.attributes,he=q.getAttributes(),se=j.defaultAttributeValues;for(const k in he){const W=he[k];if(W.location>=0){let be=le[k];if(be===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),be!==void 0){const ve=be.normalized,Me=be.itemSize,Ie=t.get(be);if(Ie===void 0)continue;const ke=Ie.buffer,Ne=Ie.type,Fe=Ie.bytesPerElement,at=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||be.gpuType===fh);if(be.isInterleavedBufferAttribute){const Ve=be.data,x=Ve.stride,U=be.offset;if(Ve.isInstancedInterleavedBuffer){for(let P=0;P<W.locationSize;P++)C(W.location+P,Ve.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let P=0;P<W.locationSize;P++)b(W.location+P);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let P=0;P<W.locationSize;P++)R(W.location+P,Me/W.locationSize,Ne,ve,x*Fe,(U+Me/W.locationSize*P)*Fe,at)}else{if(be.isInstancedBufferAttribute){for(let Ve=0;Ve<W.locationSize;Ve++)C(W.location+Ve,be.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ve=0;Ve<W.locationSize;Ve++)b(W.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Ve=0;Ve<W.locationSize;Ve++)R(W.location+Ve,Me/W.locationSize,Ne,ve,Me*Fe,Me/W.locationSize*Ve*Fe,at)}}else if(se!==void 0){const ve=se[k];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(W.location,ve);break;case 3:n.vertexAttrib3fv(W.location,ve);break;case 4:n.vertexAttrib4fv(W.location,ve);break;default:n.vertexAttrib1fv(W.location,ve)}}}}F()}function M(){K();for(const I in o){const j=o[I];for(const q in j){const X=j[q];for(const le in X)g(X[le].object),delete X[le];delete j[q]}delete o[I]}}function A(I){if(o[I.id]===void 0)return;const j=o[I.id];for(const q in j){const X=j[q];for(const le in X)g(X[le].object),delete X[le];delete j[q]}delete o[I.id]}function te(I){for(const j in o){const q=o[j];if(q[I.id]===void 0)continue;const X=q[I.id];for(const le in X)g(X[le].object),delete X[le];delete q[I.id]}}function K(){J(),u=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:te,initAttributes:S,enableAttribute:b,disableUnusedAttributes:F}}function S1(n,e,t,i){const s=i.isWebGL2;let r;function a(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,m;if(s)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function y1(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,b=a||e.has("OES_texture_float"),C=S&&b,F=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:F}}function E1(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ki,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const E=r?0:i,S=E*4;let b=h.clippingState||null;l.value=b,b=u(g,d,S,m);for(let C=0;C!==S;++C)b[C]=t[C];h.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,b=m;S!==_;++S,b+=4)a.copy(f[S]).applyMatrix4(E,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function b1(n){let e=new WeakMap;function t(a,o){return o===ul?a.mapping=Fs:o===fl&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ul||o===fl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ky(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class T1 extends Rh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=4,Gu=[.125,.215,.35,.446,.526,.582],Vi=20,Fo=new T1,Vu=new lt;let No=null,Oo=0,ko=0;const Bi=(1+Math.sqrt(5))/2,Ms=1/Bi,Wu=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Bi,Ms),new G(0,Bi,-Ms),new G(Ms,0,Bi),new G(-Ms,0,Bi),new G(Bi,Ms,0),new G(-Bi,Ms,0)];class qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(No,Oo,ko),e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:gr,format:In,colorSpace:ri,depthBuffer:!1},s=$u(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A1(r)),this._blurMaterial=w1(r,e,t)}return s}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,i,s){const o=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Vu),u.toneMapping=yi,u.autoClear=!1;const m=new Th({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new en(new Ar,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Vu),_=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):E===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const S=this._cubeSize;sa(s,E*S,h>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Fs||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;sa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Fo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wu[(s-1)%Wu.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new en(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Vi;p>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const h=[];let E=0;for(let R=0;R<Vi;++R){const $=R/_,M=Math.exp(-$*$/2);h.push(M),R===0?E+=M:R<p&&(E+=2*M)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const b=this._sizeLods[s],C=3*b*(s>S-Es?s-S+Es:0),F=4*(this._cubeSize-b);sa(t,C,F,3*b,2*b),l.setRenderTarget(t),l.render(f,Fo)}}function A1(n){const e=[],t=[],i=[];let s=n;const r=n-Es+1+Gu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Es?l=Gu[a-n+Es-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,p=2,h=1,E=new Float32Array(_*g*m),S=new Float32Array(p*g*m),b=new Float32Array(h*g*m);for(let F=0;F<m;F++){const R=F%3*2/3-1,$=F>2?0:-1,M=[R,$,0,R+2/3,$,0,R+2/3,$+1,0,R,$,0,R+2/3,$+1,0,R,$+1,0];E.set(M,_*g*F),S.set(d,p*g*F);const A=[F,F,F,F,F,F];b.set(A,h*g*F)}const C=new ns;C.setAttribute("position",new Vn(E,_)),C.setAttribute("uv",new Vn(S,p)),C.setAttribute("faceIndex",new Vn(b,h)),e.push(C),s>Es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $u(n,e,t){const i=new Qi(n,e,t);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function w1(n,e,t){const i=new Float32Array(Vi),s=new G(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Xu(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Yu(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function C1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ul||l===fl,u=l===Fs||l===Ns;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new qu(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new qu(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function R1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function P1(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let S=0,b=E.length;S<b;S+=3){const C=E[S+0],F=E[S+1],R=E[S+2];d.push(C,F,F,R,R,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,b=E.length/3-1;S<b;S+=3){const C=S+0,F=S+1,R=S+2;d.push(C,F,F,R,R,C)}}else return;const p=new(xh(d)?wh:Ah)(d,1);p.version=_;const h=r.get(f);h&&e.remove(h),r.set(f,p)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function L1(n,e,t,i){const s=i.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(r,m,o,d*l),t.update(m,r,1)}function f(d,m,g){if(g===0)return;let _,p;if(s)_=n,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](r,m,o,d*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function D1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function I1(n,e){return n[0]-e[0]}function U1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function F1(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new gt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let j=function(){J.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var m=j;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],$=u.morphAttributes.color||[];let M=0;S===!0&&(M=1),b===!0&&(M=2),C===!0&&(M=3);let A=u.attributes.position.count*M,te=1;A>e.maxTextureSize&&(te=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const K=new Float32Array(A*te*4*_),J=new yh(K,A,te,_);J.type=gi,J.needsUpdate=!0;const I=M*4;for(let q=0;q<_;q++){const X=F[q],le=R[q],he=$[q],se=A*te*4*q;for(let k=0;k<X.count;k++){const W=k*I;S===!0&&(a.fromBufferAttribute(X,k),K[se+W+0]=a.x,K[se+W+1]=a.y,K[se+W+2]=a.z,K[se+W+3]=0),b===!0&&(a.fromBufferAttribute(le,k),K[se+W+4]=a.x,K[se+W+5]=a.y,K[se+W+6]=a.z,K[se+W+7]=0),C===!0&&(a.fromBufferAttribute(he,k),K[se+W+8]=a.x,K[se+W+9]=a.y,K[se+W+10]=a.z,K[se+W+11]=he.itemSize===4?a.w:1)}}p={count:_,texture:J,size:new ct(A,te)},r.set(u,p),u.addEventListener("dispose",j)}let h=0;for(let S=0;S<d.length;S++)h+=d[S];const E=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];i[u.id]=_}for(let b=0;b<g;b++){const C=_[b];C[0]=b,C[1]=d[b]}_.sort(U1);for(let b=0;b<8;b++)b<g&&_[b][1]?(o[b][0]=_[b][0],o[b][1]=_[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(I1);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const C=o[b],F=C[0],R=C[1];F!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+b)!==p[F]&&u.setAttribute("morphTarget"+b,p[F]),h&&u.getAttribute("morphNormal"+b)!==h[F]&&u.setAttribute("morphNormal"+b,h[F]),s[b]=R,E+=R):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const S=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function N1(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Dh=new on,Ih=new yh,Uh=new Sy,Fh=new Ph,ju=[],Ku=[],Zu=new Float32Array(16),Ju=new Float32Array(9),Qu=new Float32Array(4);function qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ju[s];if(r===void 0&&(r=new Float32Array(s),ju[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ya(n,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function O1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function k1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function B1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function H1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function z1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Qu.set(i),n.uniformMatrix2fv(this.addr,!1,Qu),It(t,i)}}function G1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Ju.set(i),n.uniformMatrix3fv(this.addr,!1,Ju),It(t,i)}}function V1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Zu.set(i),n.uniformMatrix4fv(this.addr,!1,Zu),It(t,i)}}function W1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function $1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function X1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function Y1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function Z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function J1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Dh,s)}function Q1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Uh,s)}function eT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Fh,s)}function tT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ih,s)}function nT(n){switch(n){case 5126:return O1;case 35664:return k1;case 35665:return B1;case 35666:return H1;case 35674:return z1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return W1;case 35667:case 35671:return q1;case 35668:case 35672:return $1;case 35669:case 35673:return X1;case 5125:return Y1;case 36294:return j1;case 36295:return K1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}function iT(n,e){n.uniform1fv(this.addr,e)}function sT(n,e){const t=qs(e,this.size,2);n.uniform2fv(this.addr,t)}function rT(n,e){const t=qs(e,this.size,3);n.uniform3fv(this.addr,t)}function aT(n,e){const t=qs(e,this.size,4);n.uniform4fv(this.addr,t)}function oT(n,e){const t=qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lT(n,e){const t=qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cT(n,e){const t=qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uT(n,e){n.uniform1iv(this.addr,e)}function fT(n,e){n.uniform2iv(this.addr,e)}function dT(n,e){n.uniform3iv(this.addr,e)}function hT(n,e){n.uniform4iv(this.addr,e)}function pT(n,e){n.uniform1uiv(this.addr,e)}function mT(n,e){n.uniform2uiv(this.addr,e)}function _T(n,e){n.uniform3uiv(this.addr,e)}function gT(n,e){n.uniform4uiv(this.addr,e)}function vT(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Dh,r[a])}function xT(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uh,r[a])}function MT(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Fh,r[a])}function ST(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ih,r[a])}function yT(n){switch(n){case 5126:return iT;case 35664:return sT;case 35665:return rT;case 35666:return aT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return _T;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ST}}class ET{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=nT(t.type)}}class bT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=yT(t.type)}}class TT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function ef(n,e){n.seq.push(e),n.map[e.id]=e}function AT(n,e,t){const i=n.name,s=i.length;for(Bo.lastIndex=0;;){const r=Bo.exec(i),a=Bo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ef(t,c===void 0?new ET(o,n,e):new bT(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new TT(o),ef(t,f)),t=f}}}class pa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);AT(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function tf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const wT=37297;let CT=0;function RT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function PT(n){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(n);let i;switch(e===t?i="":e===Aa&&t===Ta?i="LinearDisplayP3ToLinearSRGB":e===Ta&&t===Aa&&(i="LinearSRGBToLinearDisplayP3"),n){case ri:case $a:return[i,"LinearTransferOETF"];case kt:case Zl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function nf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+RT(n.getShaderSource(e),a)}else return s}function LT(n,e){const t=PT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function DT(n,e){let t;switch(e){case VS:t="Linear";break;case WS:t="Reinhard";break;case qS:t="OptimizedCineon";break;case $S:t="ACESFilmic";break;case XS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function IT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function UT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function FT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function sr(n){return n!==""}function sf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NT=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(NT,kT)}const OT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kT(n,e){let t=et[e];if(t===void 0){const i=OT.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const BT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(n){return n.replace(BT,HT)}function HT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function of(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function GT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case Ns:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function WT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jl:e="ENVMAP_BLENDING_MULTIPLY";break;case zS:e="ENVMAP_BLENDING_MIX";break;case GS:e="ENVMAP_BLENDING_ADD";break}return e}function qT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $T(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=zT(t),c=GT(t),u=VT(t),f=WT(t),d=qT(t),m=t.isWebGL2?"":IT(t),g=UT(r),_=s.createProgram();let p,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),h.length>0&&(h+=`
`)):(p=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),h=[m,of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?et.tonemapping_pars_fragment:"",t.toneMapping!==yi?DT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,LT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=gl(a),a=sf(a,t),a=rf(a,t),o=gl(o),o=sf(o,t),o=rf(o,t),a=af(a),o=af(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=E+p+a,b=E+h+o,C=tf(s,s.VERTEX_SHADER,S),F=tf(s,s.FRAGMENT_SHADER,b);s.attachShader(_,C),s.attachShader(_,F),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(te){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(_).trim(),J=s.getShaderInfoLog(C).trim(),I=s.getShaderInfoLog(F).trim();let j=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,F);else{const X=nf(s,C,"vertex"),le=nf(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+X+`
`+le)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(J===""||I==="")&&(q=!1);q&&(te.diagnostics={runnable:j,programLog:K,vertexShader:{log:J,prefix:p},fragmentShader:{log:I,prefix:h}})}s.deleteShader(C),s.deleteShader(F),$=new pa(s,_),M=FT(s,_)}let $;this.getUniforms=function(){return $===void 0&&R(this),$};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,wT)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=F,this}let XT=0;class YT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jT(e),t.set(e,i)),i}}class jT{constructor(e){this.id=XT++,this.code=e,this.usedTimes=0}}function KT(n,e,t,i,s,r,a){const o=new Ql,l=new YT,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,A,te,K,J){const I=K.fog,j=J.geometry,q=M.isMeshStandardMaterial?K.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),le=X&&X.mapping===qa?X.image.height:null,he=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const se=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,k=se!==void 0?se.length:0;let W=0;j.morphAttributes.position!==void 0&&(W=1),j.morphAttributes.normal!==void 0&&(W=2),j.morphAttributes.color!==void 0&&(W=3);let be,ve,Me,Ie;if(he){const bt=Bn[he];be=bt.vertexShader,ve=bt.fragmentShader}else be=M.vertexShader,ve=M.fragmentShader,l.update(M),Me=l.getVertexShaderID(M),Ie=l.getFragmentShaderID(M);const ke=n.getRenderTarget(),Ne=J.isInstancedMesh===!0,Fe=!!M.map,at=!!M.matcap,Ve=!!X,x=!!M.aoMap,U=!!M.lightMap,P=!!M.bumpMap,z=!!M.normalMap,H=!!M.displacementMap,ae=!!M.emissiveMap,fe=!!M.metalnessMap,ne=!!M.roughnessMap,pe=M.anisotropy>0,oe=M.clearcoat>0,we=M.iridescence>0,y=M.sheen>0,v=M.transmission>0,O=pe&&!!M.anisotropyMap,re=oe&&!!M.clearcoatMap,ce=oe&&!!M.clearcoatNormalMap,de=oe&&!!M.clearcoatRoughnessMap,Ce=we&&!!M.iridescenceMap,xe=we&&!!M.iridescenceThicknessMap,Re=y&&!!M.sheenColorMap,Ge=y&&!!M.sheenRoughnessMap,tt=!!M.specularMap,Se=!!M.specularColorMap,qe=!!M.specularIntensityMap,Be=v&&!!M.transmissionMap,B=v&&!!M.thicknessMap,N=!!M.gradientMap,Y=!!M.alphaMap,ye=M.alphaTest>0,D=!!M.alphaHash,ge=!!M.extensions,Te=!!j.attributes.uv1,ue=!!j.attributes.uv2,Ee=!!j.attributes.uv3;let ze=yi;return M.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(ze=n.toneMapping),{isWebGL2:u,shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:be,fragmentShader:ve,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:Ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Ne,instancingColor:Ne&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ke===null?n.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:ri,map:Fe,matcap:at,envMap:Ve,envMapMode:Ve&&X.mapping,envMapCubeUVHeight:le,aoMap:x,lightMap:U,bumpMap:P,normalMap:z,displacementMap:d&&H,emissiveMap:ae,normalMapObjectSpace:z&&M.normalMapType===ay,normalMapTangentSpace:z&&M.normalMapType===vh,metalnessMap:fe,roughnessMap:ne,anisotropy:pe,anisotropyMap:O,clearcoat:oe,clearcoatMap:re,clearcoatNormalMap:ce,clearcoatRoughnessMap:de,iridescence:we,iridescenceMap:Ce,iridescenceThicknessMap:xe,sheen:y,sheenColorMap:Re,sheenRoughnessMap:Ge,specularMap:tt,specularColorMap:Se,specularIntensityMap:qe,transmission:v,transmissionMap:Be,thicknessMap:B,gradientMap:N,opaque:M.transparent===!1&&M.blending===Cs,alphaMap:Y,alphaTest:ye,alphaHash:D,combine:M.combine,mapUv:Fe&&_(M.map.channel),aoMapUv:x&&_(M.aoMap.channel),lightMapUv:U&&_(M.lightMap.channel),bumpMapUv:P&&_(M.bumpMap.channel),normalMapUv:z&&_(M.normalMap.channel),displacementMapUv:H&&_(M.displacementMap.channel),emissiveMapUv:ae&&_(M.emissiveMap.channel),metalnessMapUv:fe&&_(M.metalnessMap.channel),roughnessMapUv:ne&&_(M.roughnessMap.channel),anisotropyMapUv:O&&_(M.anisotropyMap.channel),clearcoatMapUv:re&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(M.sheenRoughnessMap.channel),specularMapUv:tt&&_(M.specularMap.channel),specularColorMapUv:Se&&_(M.specularColorMap.channel),specularIntensityMapUv:qe&&_(M.specularIntensityMap.channel),transmissionMapUv:Be&&_(M.transmissionMap.channel),thicknessMapUv:B&&_(M.thicknessMap.channel),alphaMapUv:Y&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(z||pe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:ue,vertexUv3s:Ee,pointsUvs:J.isPoints===!0&&!!j.attributes.uv&&(Fe||Y),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:W,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&te.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&M.map.isVideoTexture===!0&&dt.getTransfer(M.map.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_n,flipSided:M.side===an,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ge&&M.extensions.derivatives===!0,extensionFragDepth:ge&&M.extensions.fragDepth===!0,extensionDrawBuffers:ge&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const te in M.defines)A.push(te),A.push(M.defines[te]);return M.isRawShaderMaterial===!1&&(E(A,M),S(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function E(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function b(M){const A=g[M.type];let te;if(A){const K=Bn[A];te=Uy.clone(K.uniforms)}else te=M.uniforms;return te}function C(M,A){let te;for(let K=0,J=c.length;K<J;K++){const I=c[K];if(I.cacheKey===A){te=I,++te.usedTimes;break}}return te===void 0&&(te=new $T(n,A,M,r),c.push(te)),te}function F(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function $(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:C,releaseProgram:F,releaseShaderCache:R,programs:c,dispose:$}}function ZT(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function JT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,m,g,_,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function o(f,d,m,g,_,p){const h=a(f,d,m,g,_,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(f,d,m,g,_,p){const h=a(f,d,m,g,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||JT),i.length>1&&i.sort(d||lf),s.length>1&&s.sort(d||lf)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function QT(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new cf,n.set(i,[a])):s>=r.length?(a=new cf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function eA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new lt};break;case"SpotLight":t={position:new G,direction:new G,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function tA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nA=0;function iA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sA(n,e){const t=new eA,i=tA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new G);const r=new G,a=new Ct,o=new Ct;function l(u,f){let d=0,m=0,g=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let _=0,p=0,h=0,E=0,S=0,b=0,C=0,F=0,R=0,$=0,M=0;u.sort(iA);const A=f===!0?Math.PI:1;for(let K=0,J=u.length;K<J;K++){const I=u[K],j=I.color,q=I.intensity,X=I.distance,le=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=j.r*q*A,m+=j.g*q*A,g+=j.b*q*A;else if(I.isLightProbe){for(let he=0;he<9;he++)s.probe[he].addScaledVector(I.sh.coefficients[he],q);M++}else if(I.isDirectionalLight){const he=t.get(I);if(he.color.copy(I.color).multiplyScalar(I.intensity*A),I.castShadow){const se=I.shadow,k=i.get(I);k.shadowBias=se.bias,k.shadowNormalBias=se.normalBias,k.shadowRadius=se.radius,k.shadowMapSize=se.mapSize,s.directionalShadow[_]=k,s.directionalShadowMap[_]=le,s.directionalShadowMatrix[_]=I.shadow.matrix,b++}s.directional[_]=he,_++}else if(I.isSpotLight){const he=t.get(I);he.position.setFromMatrixPosition(I.matrixWorld),he.color.copy(j).multiplyScalar(q*A),he.distance=X,he.coneCos=Math.cos(I.angle),he.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),he.decay=I.decay,s.spot[h]=he;const se=I.shadow;if(I.map&&(s.spotLightMap[R]=I.map,R++,se.updateMatrices(I),I.castShadow&&$++),s.spotLightMatrix[h]=se.matrix,I.castShadow){const k=i.get(I);k.shadowBias=se.bias,k.shadowNormalBias=se.normalBias,k.shadowRadius=se.radius,k.shadowMapSize=se.mapSize,s.spotShadow[h]=k,s.spotShadowMap[h]=le,F++}h++}else if(I.isRectAreaLight){const he=t.get(I);he.color.copy(j).multiplyScalar(q),he.halfWidth.set(I.width*.5,0,0),he.halfHeight.set(0,I.height*.5,0),s.rectArea[E]=he,E++}else if(I.isPointLight){const he=t.get(I);if(he.color.copy(I.color).multiplyScalar(I.intensity*A),he.distance=I.distance,he.decay=I.decay,I.castShadow){const se=I.shadow,k=i.get(I);k.shadowBias=se.bias,k.shadowNormalBias=se.normalBias,k.shadowRadius=se.radius,k.shadowMapSize=se.mapSize,k.shadowCameraNear=se.camera.near,k.shadowCameraFar=se.camera.far,s.pointShadow[p]=k,s.pointShadowMap[p]=le,s.pointShadowMatrix[p]=I.shadow.matrix,C++}s.point[p]=he,p++}else if(I.isHemisphereLight){const he=t.get(I);he.skyColor.copy(I.color).multiplyScalar(q*A),he.groundColor.copy(I.groundColor).multiplyScalar(q*A),s.hemi[S]=he,S++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const te=s.hash;(te.directionalLength!==_||te.pointLength!==p||te.spotLength!==h||te.rectAreaLength!==E||te.hemiLength!==S||te.numDirectionalShadows!==b||te.numPointShadows!==C||te.numSpotShadows!==F||te.numSpotMaps!==R||te.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=h,s.rectArea.length=E,s.point.length=p,s.hemi.length=S,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=F+R-$,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=M,te.directionalLength=_,te.pointLength=p,te.spotLength=h,te.rectAreaLength=E,te.hemiLength=S,te.numDirectionalShadows=b,te.numPointShadows=C,te.numSpotShadows=F,te.numSpotMaps=R,te.numLightProbes=M,s.version=nA++)}function c(u,f){let d=0,m=0,g=0,_=0,p=0;const h=f.matrixWorldInverse;for(let E=0,S=u.length;E<S;E++){const b=u[E];if(b.isDirectionalLight){const C=s.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(h),d++}else if(b.isSpotLight){const C=s.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(h),g++}else if(b.isRectAreaLight){const C=s.rectArea[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const C=s.hemi[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:s}}function uf(n,e){const t=new sA(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(f){i.push(f)}function o(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rA(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new uf(n,e),t.set(r,[l])):a>=o.length?(l=new uf(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class aA extends Tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oA extends Tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cA=`uniform sampler2D shadow_pass;
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
}`;function uA(n,e,t){let i=new ec;const s=new ct,r=new ct,a=new gt,o=new aA({depthPacking:ry}),l=new oA,c={},u=t.maxTextureSize,f={[Ai]:an,[an]:Ai,[_n]:_n},d=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:lA,fragmentShader:cA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ns;g.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let h=this.type;this.render=function(C,F,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const $=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),te=n.state;te.setBlending(Si),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const K=h!==Qn&&this.type===Qn,J=h===Qn&&this.type!==Qn;for(let I=0,j=C.length;I<j;I++){const q=C[I],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const le=X.getFrameExtents();if(s.multiply(le),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,X.mapSize.y=r.y)),X.map===null||K===!0||J===!0){const se=this.type!==Qn?{minFilter:Qt,magFilter:Qt}:{};X.map!==null&&X.map.dispose(),X.map=new Qi(s.x,s.y,se),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const he=X.getViewportCount();for(let se=0;se<he;se++){const k=X.getViewport(se);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),te.viewport(a),X.updateMatrices(q,se),i=X.getFrustum(),b(F,R,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Qn&&E(X,R),X.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget($,M,A)};function E(C,F){const R=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(F,null,R,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(F,null,R,m,_,null)}function S(C,F,R,$){let M=null;const A=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)M=A;else if(M=R.isPointLight===!0?l:o,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const te=M.uuid,K=F.uuid;let J=c[te];J===void 0&&(J={},c[te]=J);let I=J[K];I===void 0&&(I=M.clone(),J[K]=I),M=I}if(M.visible=F.visible,M.wireframe=F.wireframe,$===Qn?M.side=F.shadowSide!==null?F.shadowSide:F.side:M.side=F.shadowSide!==null?F.shadowSide:f[F.side],M.alphaMap=F.alphaMap,M.alphaTest=F.alphaTest,M.map=F.map,M.clipShadows=F.clipShadows,M.clippingPlanes=F.clippingPlanes,M.clipIntersection=F.clipIntersection,M.displacementMap=F.displacementMap,M.displacementScale=F.displacementScale,M.displacementBias=F.displacementBias,M.wireframeLinewidth=F.wireframeLinewidth,M.linewidth=F.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const te=n.properties.get(M);te.light=R}return M}function b(C,F,R,$,M){if(C.visible===!1)return;if(C.layers.test(F.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Qn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const K=e.update(C),J=C.material;if(Array.isArray(J)){const I=K.groups;for(let j=0,q=I.length;j<q;j++){const X=I[j],le=J[X.materialIndex];if(le&&le.visible){const he=S(C,le,$,M);n.renderBufferDirect(R,null,K,he,C,X)}}}else if(J.visible){const I=S(C,J,$,M);n.renderBufferDirect(R,null,K,I,C,null)}}const te=C.children;for(let K=0,J=te.length;K<J;K++)b(te[K],F,R,$,M)}}function fA(n,e,t){const i=t.isWebGL2;function s(){let D=!1;const ge=new gt;let Te=null;const ue=new gt(0,0,0,0);return{setMask:function(Ee){Te!==Ee&&!D&&(n.colorMask(Ee,Ee,Ee,Ee),Te=Ee)},setLocked:function(Ee){D=Ee},setClear:function(Ee,ze,ut,bt,xn){xn===!0&&(Ee*=bt,ze*=bt,ut*=bt),ge.set(Ee,ze,ut,bt),ue.equals(ge)===!1&&(n.clearColor(Ee,ze,ut,bt),ue.copy(ge))},reset:function(){D=!1,Te=null,ue.set(-1,0,0,0)}}}function r(){let D=!1,ge=null,Te=null,ue=null;return{setTest:function(Ee){Ee?Fe(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(Ee){ge!==Ee&&!D&&(n.depthMask(Ee),ge=Ee)},setFunc:function(Ee){if(Te!==Ee){switch(Ee){case US:n.depthFunc(n.NEVER);break;case FS:n.depthFunc(n.ALWAYS);break;case NS:n.depthFunc(n.LESS);break;case Ea:n.depthFunc(n.LEQUAL);break;case OS:n.depthFunc(n.EQUAL);break;case kS:n.depthFunc(n.GEQUAL);break;case BS:n.depthFunc(n.GREATER);break;case HS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=Ee}},setLocked:function(Ee){D=Ee},setClear:function(Ee){ue!==Ee&&(n.clearDepth(Ee),ue=Ee)},reset:function(){D=!1,ge=null,Te=null,ue=null}}}function a(){let D=!1,ge=null,Te=null,ue=null,Ee=null,ze=null,ut=null,bt=null,xn=null;return{setTest:function(ht){D||(ht?Fe(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(ht){ge!==ht&&!D&&(n.stencilMask(ht),ge=ht)},setFunc:function(ht,Yt,Nn){(Te!==ht||ue!==Yt||Ee!==Nn)&&(n.stencilFunc(ht,Yt,Nn),Te=ht,ue=Yt,Ee=Nn)},setOp:function(ht,Yt,Nn){(ze!==ht||ut!==Yt||bt!==Nn)&&(n.stencilOp(ht,Yt,Nn),ze=ht,ut=Yt,bt=Nn)},setLocked:function(ht){D=ht},setClear:function(ht){xn!==ht&&(n.clearStencil(ht),xn=ht)},reset:function(){D=!1,ge=null,Te=null,ue=null,Ee=null,ze=null,ut=null,bt=null,xn=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,h=!1,E=null,S=null,b=null,C=null,F=null,R=null,$=null,M=new lt(0,0,0),A=0,te=!1,K=null,J=null,I=null,j=null,q=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,he=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(se)[1]),le=he>=1):se.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),le=he>=2);let k=null,W={};const be=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Me=new gt().fromArray(be),Ie=new gt().fromArray(ve);function ke(D,ge,Te,ue){const Ee=new Uint8Array(4),ze=n.createTexture();n.bindTexture(D,ze),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ut=0;ut<Te;ut++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ge,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(ge+ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ze}const Ne={};Ne[n.TEXTURE_2D]=ke(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(n.DEPTH_TEST),l.setFunc(Ea),fe(!1),ne(Wc),Fe(n.CULL_FACE),H(Si);function Fe(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function at(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function Ve(D,ge){return m[D]!==ge?(n.bindFramebuffer(D,ge),m[D]=ge,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ge),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ge)),!0):!1}function x(D,ge){let Te=_,ue=!1;if(D)if(Te=g.get(ge),Te===void 0&&(Te=[],g.set(ge,Te)),D.isWebGLMultipleRenderTargets){const Ee=D.texture;if(Te.length!==Ee.length||Te[0]!==n.COLOR_ATTACHMENT0){for(let ze=0,ut=Ee.length;ze<ut;ze++)Te[ze]=n.COLOR_ATTACHMENT0+ze;Te.length=Ee.length,ue=!0}}else Te[0]!==n.COLOR_ATTACHMENT0&&(Te[0]=n.COLOR_ATTACHMENT0,ue=!0);else Te[0]!==n.BACK&&(Te[0]=n.BACK,ue=!0);ue&&(t.isWebGL2?n.drawBuffers(Te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Te))}function U(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const P={[Gi]:n.FUNC_ADD,[xS]:n.FUNC_SUBTRACT,[MS]:n.FUNC_REVERSE_SUBTRACT};if(i)P[Yc]=n.MIN,P[jc]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(P[Yc]=D.MIN_EXT,P[jc]=D.MAX_EXT)}const z={[SS]:n.ZERO,[yS]:n.ONE,[ES]:n.SRC_COLOR,[ll]:n.SRC_ALPHA,[RS]:n.SRC_ALPHA_SATURATE,[wS]:n.DST_COLOR,[TS]:n.DST_ALPHA,[bS]:n.ONE_MINUS_SRC_COLOR,[cl]:n.ONE_MINUS_SRC_ALPHA,[CS]:n.ONE_MINUS_DST_COLOR,[AS]:n.ONE_MINUS_DST_ALPHA,[PS]:n.CONSTANT_COLOR,[LS]:n.ONE_MINUS_CONSTANT_COLOR,[DS]:n.CONSTANT_ALPHA,[IS]:n.ONE_MINUS_CONSTANT_ALPHA};function H(D,ge,Te,ue,Ee,ze,ut,bt,xn,ht){if(D===Si){h===!0&&(at(n.BLEND),h=!1);return}if(h===!1&&(Fe(n.BLEND),h=!0),D!==vS){if(D!==E||ht!==te){if((S!==Gi||F!==Gi)&&(n.blendEquation(n.FUNC_ADD),S=Gi,F=Gi),ht)switch(D){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.ONE,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,C=null,R=null,$=null,M.set(0,0,0),A=0,E=D,te=ht}return}Ee=Ee||ge,ze=ze||Te,ut=ut||ue,(ge!==S||Ee!==F)&&(n.blendEquationSeparate(P[ge],P[Ee]),S=ge,F=Ee),(Te!==b||ue!==C||ze!==R||ut!==$)&&(n.blendFuncSeparate(z[Te],z[ue],z[ze],z[ut]),b=Te,C=ue,R=ze,$=ut),(bt.equals(M)===!1||xn!==A)&&(n.blendColor(bt.r,bt.g,bt.b,xn),M.copy(bt),A=xn),E=D,te=!1}function ae(D,ge){D.side===_n?at(n.CULL_FACE):Fe(n.CULL_FACE);let Te=D.side===an;ge&&(Te=!Te),fe(Te),D.blending===Cs&&D.transparent===!1?H(Si):H(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const ue=D.stencilWrite;c.setTest(ue),ue&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(D){K!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),K=D)}function ne(D){D!==mS?(Fe(n.CULL_FACE),D!==J&&(D===Wc?n.cullFace(n.BACK):D===_S?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),J=D}function pe(D){D!==I&&(le&&n.lineWidth(D),I=D)}function oe(D,ge,Te){D?(Fe(n.POLYGON_OFFSET_FILL),(j!==ge||q!==Te)&&(n.polygonOffset(ge,Te),j=ge,q=Te)):at(n.POLYGON_OFFSET_FILL)}function we(D){D?Fe(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function y(D){D===void 0&&(D=n.TEXTURE0+X-1),k!==D&&(n.activeTexture(D),k=D)}function v(D,ge,Te){Te===void 0&&(k===null?Te=n.TEXTURE0+X-1:Te=k);let ue=W[Te];ue===void 0&&(ue={type:void 0,texture:void 0},W[Te]=ue),(ue.type!==D||ue.texture!==ge)&&(k!==Te&&(n.activeTexture(Te),k=Te),n.bindTexture(D,ge||Ne[D]),ue.type=D,ue.texture=ge)}function O(){const D=W[k];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(D){Me.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Me.copy(D))}function B(D){Ie.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ie.copy(D))}function N(D,ge){let Te=f.get(ge);Te===void 0&&(Te=new WeakMap,f.set(ge,Te));let ue=Te.get(D);ue===void 0&&(ue=n.getUniformBlockIndex(ge,D.name),Te.set(D,ue))}function Y(D,ge){const ue=f.get(ge).get(D);u.get(ge)!==ue&&(n.uniformBlockBinding(ge,ue,D.__bindingPointIndex),u.set(ge,ue))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},k=null,W={},m={},g=new WeakMap,_=[],p=null,h=!1,E=null,S=null,b=null,C=null,F=null,R=null,$=null,M=new lt(0,0,0),A=0,te=!1,K=null,J=null,I=null,j=null,q=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Fe,disable:at,bindFramebuffer:Ve,drawBuffers:x,useProgram:U,setBlending:H,setMaterial:ae,setFlipSided:fe,setCullFace:ne,setLineWidth:pe,setPolygonOffset:oe,setScissorTest:we,activeTexture:y,bindTexture:v,unbindTexture:O,compressedTexImage2D:re,compressedTexImage3D:ce,texImage2D:Se,texImage3D:qe,updateUBOMapping:N,uniformBlockBinding:Y,texStorage2D:Ge,texStorage3D:tt,texSubImage2D:de,texSubImage3D:Ce,compressedTexSubImage2D:xe,compressedTexSubImage3D:Re,scissor:Be,viewport:B,reset:ye}}function dA(n,e,t,i,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(y,v){return h?new OffscreenCanvas(y,v):vr("canvas")}function S(y,v,O,re){let ce=1;if((y.width>re||y.height>re)&&(ce=re/Math.max(y.width,y.height)),ce<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const de=v?_l:Math.floor,Ce=de(ce*y.width),xe=de(ce*y.height);_===void 0&&(_=E(Ce,xe));const Re=O?E(Ce,xe):_;return Re.width=Ce,Re.height=xe,Re.getContext("2d").drawImage(y,0,0,Ce,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Ce+"x"+xe+")."),Re}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function b(y){return Tu(y.width)&&Tu(y.height)}function C(y){return o?!1:y.wrapS!==Dn||y.wrapT!==Dn||y.minFilter!==Qt&&y.minFilter!==En}function F(y,v){return y.generateMipmaps&&v&&y.minFilter!==Qt&&y.minFilter!==En}function R(y){n.generateMipmap(y)}function $(y,v,O,re,ce=!1){if(o===!1)return v;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let de=v;if(v===n.RED&&(O===n.FLOAT&&(de=n.R32F),O===n.HALF_FLOAT&&(de=n.R16F),O===n.UNSIGNED_BYTE&&(de=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(de=n.R8UI),O===n.UNSIGNED_SHORT&&(de=n.R16UI),O===n.UNSIGNED_INT&&(de=n.R32UI),O===n.BYTE&&(de=n.R8I),O===n.SHORT&&(de=n.R16I),O===n.INT&&(de=n.R32I)),v===n.RG&&(O===n.FLOAT&&(de=n.RG32F),O===n.HALF_FLOAT&&(de=n.RG16F),O===n.UNSIGNED_BYTE&&(de=n.RG8)),v===n.RGBA){const Ce=ce?ba:dt.getTransfer(re);O===n.FLOAT&&(de=n.RGBA32F),O===n.HALF_FLOAT&&(de=n.RGBA16F),O===n.UNSIGNED_BYTE&&(de=Ce===pt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function M(y,v,O){return F(y,O)===!0||y.isFramebufferTexture&&y.minFilter!==Qt&&y.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function A(y){return y===Qt||y===Kc||y===co?n.NEAREST:n.LINEAR}function te(y){const v=y.target;v.removeEventListener("dispose",te),J(v),v.isVideoTexture&&g.delete(v)}function K(y){const v=y.target;v.removeEventListener("dispose",K),j(v)}function J(y){const v=i.get(y);if(v.__webglInit===void 0)return;const O=y.source,re=p.get(O);if(re){const ce=re[v.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&I(y),Object.keys(re).length===0&&p.delete(O)}i.remove(y)}function I(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const O=y.source,re=p.get(O);delete re[v.__cacheKey],a.memory.textures--}function j(y){const v=y.texture,O=i.get(y),re=i.get(v);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(O.__webglFramebuffer[ce]))for(let de=0;de<O.__webglFramebuffer[ce].length;de++)n.deleteFramebuffer(O.__webglFramebuffer[ce][de]);else n.deleteFramebuffer(O.__webglFramebuffer[ce]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[ce])}else{if(Array.isArray(O.__webglFramebuffer))for(let ce=0;ce<O.__webglFramebuffer.length;ce++)n.deleteFramebuffer(O.__webglFramebuffer[ce]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ce=0;ce<O.__webglColorRenderbuffer.length;ce++)O.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[ce]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ce=0,de=v.length;ce<de;ce++){const Ce=i.get(v[ce]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),a.memory.textures--),i.remove(v[ce])}i.remove(v),i.remove(y)}let q=0;function X(){q=0}function le(){const y=q;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),q+=1,y}function he(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function se(y,v){const O=i.get(y);if(y.isVideoTexture&&oe(y),y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){const re=y.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(O,y,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function k(y,v){const O=i.get(y);if(y.version>0&&O.__version!==y.version){Fe(O,y,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function W(y,v){const O=i.get(y);if(y.version>0&&O.__version!==y.version){Fe(O,y,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function be(y,v){const O=i.get(y);if(y.version>0&&O.__version!==y.version){at(O,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const ve={[dl]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[hl]:n.MIRRORED_REPEAT},Me={[Qt]:n.NEAREST,[Kc]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[YS]:n.LINEAR_MIPMAP_NEAREST,[_r]:n.LINEAR_MIPMAP_LINEAR},Ie={[oy]:n.NEVER,[py]:n.ALWAYS,[ly]:n.LESS,[uy]:n.LEQUAL,[cy]:n.EQUAL,[hy]:n.GEQUAL,[fy]:n.GREATER,[dy]:n.NOTEQUAL};function ke(y,v,O){if(O?(n.texParameteri(y,n.TEXTURE_WRAP_S,ve[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ve[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ve[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,Me[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,Me[v.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Dn||v.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Qt&&v.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Qt||v.minFilter!==co&&v.minFilter!==_r||v.type===gi&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===gr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(y,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Ne(y,v){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",te));const re=v.source;let ce=p.get(re);ce===void 0&&(ce={},p.set(re,ce));const de=he(v);if(de!==y.__cacheKey){ce[de]===void 0&&(ce[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ce[de].usedTimes++;const Ce=ce[y.__cacheKey];Ce!==void 0&&(ce[y.__cacheKey].usedTimes--,Ce.usedTimes===0&&I(v)),y.__cacheKey=de,y.__webglTexture=ce[de].texture}return O}function Fe(y,v,O){let re=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(re=n.TEXTURE_3D);const ce=Ne(y,v),de=v.source;t.bindTexture(re,y.__webglTexture,n.TEXTURE0+O);const Ce=i.get(de);if(de.version!==Ce.__version||ce===!0){t.activeTexture(n.TEXTURE0+O);const xe=dt.getPrimaries(dt.workingColorSpace),Re=v.colorSpace===bn?null:dt.getPrimaries(v.colorSpace),Ge=v.colorSpace===bn||xe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const tt=C(v)&&b(v.image)===!1;let Se=S(v.image,tt,!1,u);Se=we(v,Se);const qe=b(Se)||o,Be=r.convert(v.format,v.colorSpace);let B=r.convert(v.type),N=$(v.internalFormat,Be,B,v.colorSpace,v.isVideoTexture);ke(re,v,qe);let Y;const ye=v.mipmaps,D=o&&v.isVideoTexture!==!0,ge=Ce.__version===void 0||ce===!0,Te=M(v,Se,qe);if(v.isDepthTexture)N=n.DEPTH_COMPONENT,o?v.type===gi?N=n.DEPTH_COMPONENT32F:v.type===_i?N=n.DEPTH_COMPONENT24:v.type===Xi?N=n.DEPTH24_STENCIL8:N=n.DEPTH_COMPONENT16:v.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Yi&&N===n.DEPTH_COMPONENT&&v.type!==Kl&&v.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=_i,B=r.convert(v.type)),v.format===Os&&N===n.DEPTH_COMPONENT&&(N=n.DEPTH_STENCIL,v.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Xi,B=r.convert(v.type))),ge&&(D?t.texStorage2D(n.TEXTURE_2D,1,N,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,N,Se.width,Se.height,0,Be,B,null));else if(v.isDataTexture)if(ye.length>0&&qe){D&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,N,ye[0].width,ye[0].height);for(let ue=0,Ee=ye.length;ue<Ee;ue++)Y=ye[ue],D?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Y.width,Y.height,Be,B,Y.data):t.texImage2D(n.TEXTURE_2D,ue,N,Y.width,Y.height,0,Be,B,Y.data);v.generateMipmaps=!1}else D?(ge&&t.texStorage2D(n.TEXTURE_2D,Te,N,Se.width,Se.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se.width,Se.height,Be,B,Se.data)):t.texImage2D(n.TEXTURE_2D,0,N,Se.width,Se.height,0,Be,B,Se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,N,ye[0].width,ye[0].height,Se.depth);for(let ue=0,Ee=ye.length;ue<Ee;ue++)Y=ye[ue],v.format!==In?Be!==null?D?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Y.width,Y.height,Se.depth,Be,Y.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,N,Y.width,Y.height,Se.depth,0,Y.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Y.width,Y.height,Se.depth,Be,B,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,N,Y.width,Y.height,Se.depth,0,Be,B,Y.data)}else{D&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,N,ye[0].width,ye[0].height);for(let ue=0,Ee=ye.length;ue<Ee;ue++)Y=ye[ue],v.format!==In?Be!==null?D?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,Y.width,Y.height,Be,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,N,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Y.width,Y.height,Be,B,Y.data):t.texImage2D(n.TEXTURE_2D,ue,N,Y.width,Y.height,0,Be,B,Y.data)}else if(v.isDataArrayTexture)D?(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,N,Se.width,Se.height,Se.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Be,B,Se.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,N,Se.width,Se.height,Se.depth,0,Be,B,Se.data);else if(v.isData3DTexture)D?(ge&&t.texStorage3D(n.TEXTURE_3D,Te,N,Se.width,Se.height,Se.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Be,B,Se.data)):t.texImage3D(n.TEXTURE_3D,0,N,Se.width,Se.height,Se.depth,0,Be,B,Se.data);else if(v.isFramebufferTexture){if(ge)if(D)t.texStorage2D(n.TEXTURE_2D,Te,N,Se.width,Se.height);else{let ue=Se.width,Ee=Se.height;for(let ze=0;ze<Te;ze++)t.texImage2D(n.TEXTURE_2D,ze,N,ue,Ee,0,Be,B,null),ue>>=1,Ee>>=1}}else if(ye.length>0&&qe){D&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,N,ye[0].width,ye[0].height);for(let ue=0,Ee=ye.length;ue<Ee;ue++)Y=ye[ue],D?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Be,B,Y):t.texImage2D(n.TEXTURE_2D,ue,N,Be,B,Y);v.generateMipmaps=!1}else D?(ge&&t.texStorage2D(n.TEXTURE_2D,Te,N,Se.width,Se.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,B,Se)):t.texImage2D(n.TEXTURE_2D,0,N,Be,B,Se);F(v,qe)&&R(re),Ce.__version=de.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function at(y,v,O){if(v.image.length!==6)return;const re=Ne(y,v),ce=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+O);const de=i.get(ce);if(ce.version!==de.__version||re===!0){t.activeTexture(n.TEXTURE0+O);const Ce=dt.getPrimaries(dt.workingColorSpace),xe=v.colorSpace===bn?null:dt.getPrimaries(v.colorSpace),Re=v.colorSpace===bn||Ce===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ge=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Ge&&!tt?Se[ue]=S(v.image[ue],!1,!0,c):Se[ue]=tt?v.image[ue].image:v.image[ue],Se[ue]=we(v,Se[ue]);const qe=Se[0],Be=b(qe)||o,B=r.convert(v.format,v.colorSpace),N=r.convert(v.type),Y=$(v.internalFormat,B,N,v.colorSpace),ye=o&&v.isVideoTexture!==!0,D=de.__version===void 0||re===!0;let ge=M(v,qe,Be);ke(n.TEXTURE_CUBE_MAP,v,Be);let Te;if(Ge){ye&&D&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Y,qe.width,qe.height);for(let ue=0;ue<6;ue++){Te=Se[ue].mipmaps;for(let Ee=0;Ee<Te.length;Ee++){const ze=Te[Ee];v.format!==In?B!==null?ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,0,0,ze.width,ze.height,B,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,Y,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,0,0,ze.width,ze.height,B,N,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,Y,ze.width,ze.height,0,B,N,ze.data)}}}else{Te=v.mipmaps,ye&&D&&(Te.length>0&&ge++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Y,Se[0].width,Se[0].height));for(let ue=0;ue<6;ue++)if(tt){ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,B,N,Se[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Y,Se[ue].width,Se[ue].height,0,B,N,Se[ue].data);for(let Ee=0;Ee<Te.length;Ee++){const ut=Te[Ee].image[ue].image;ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,0,0,ut.width,ut.height,B,N,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,Y,ut.width,ut.height,0,B,N,ut.data)}}else{ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,B,N,Se[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Y,B,N,Se[ue]);for(let Ee=0;Ee<Te.length;Ee++){const ze=Te[Ee];ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,0,0,B,N,ze.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,Y,B,N,ze.image[ue])}}}F(v,Be)&&R(n.TEXTURE_CUBE_MAP),de.__version=ce.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Ve(y,v,O,re,ce,de){const Ce=r.convert(O.format,O.colorSpace),xe=r.convert(O.type),Re=$(O.internalFormat,Ce,xe,O.colorSpace);if(!i.get(v).__hasExternalTextures){const tt=Math.max(1,v.width>>de),Se=Math.max(1,v.height>>de);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,de,Re,tt,Se,v.depth,0,Ce,xe,null):t.texImage2D(ce,de,Re,tt,Se,0,Ce,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),pe(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ce,i.get(O).__webglTexture,0,ne(v)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ce,i.get(O).__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function x(y,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let re=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||pe(v)){const ce=v.depthTexture;ce&&ce.isDepthTexture&&(ce.type===gi?re=n.DEPTH_COMPONENT32F:ce.type===_i&&(re=n.DEPTH_COMPONENT24));const de=ne(v);pe(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,re,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,de,re,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const re=ne(v);O&&pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,v.width,v.height):pe(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const re=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ce=0;ce<re.length;ce++){const de=re[ce],Ce=r.convert(de.format,de.colorSpace),xe=r.convert(de.type),Re=$(de.internalFormat,Ce,xe,de.colorSpace),Ge=ne(v);O&&pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Re,v.width,v.height):pe(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Re,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Re,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),se(v.depthTexture,0);const re=i.get(v.depthTexture).__webglTexture,ce=ne(v);if(v.depthTexture.format===Yi)pe(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(v.depthTexture.format===Os)pe(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function P(y){const v=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");U(v.__webglFramebuffer,y)}else if(O){v.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[re]),v.__webglDepthbuffer[re]=n.createRenderbuffer(),x(v.__webglDepthbuffer[re],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),x(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function z(y,v,O){const re=i.get(y);v!==void 0&&Ve(re.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&P(y)}function H(y){const v=y.texture,O=i.get(y),re=i.get(v);y.addEventListener("dispose",K),y.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=v.version,a.memory.textures++);const ce=y.isWebGLCubeRenderTarget===!0,de=y.isWebGLMultipleRenderTargets===!0,Ce=b(y)||o;if(ce){O.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[xe]=[];for(let Re=0;Re<v.mipmaps.length;Re++)O.__webglFramebuffer[xe][Re]=n.createFramebuffer()}else O.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let xe=0;xe<v.mipmaps.length;xe++)O.__webglFramebuffer[xe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(de)if(s.drawBuffers){const xe=y.texture;for(let Re=0,Ge=xe.length;Re<Ge;Re++){const tt=i.get(xe[Re]);tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&pe(y)===!1){const xe=de?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){const Ge=xe[Re];O.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Re]);const tt=r.convert(Ge.format,Ge.colorSpace),Se=r.convert(Ge.type),qe=$(Ge.internalFormat,tt,Se,Ge.colorSpace,y.isXRRenderTarget===!0),Be=ne(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,qe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,O.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),x(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),ke(n.TEXTURE_CUBE_MAP,v,Ce);for(let xe=0;xe<6;xe++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)Ve(O.__webglFramebuffer[xe][Re],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re);else Ve(O.__webglFramebuffer[xe],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);F(v,Ce)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const xe=y.texture;for(let Re=0,Ge=xe.length;Re<Ge;Re++){const tt=xe[Re],Se=i.get(tt);t.bindTexture(n.TEXTURE_2D,Se.__webglTexture),ke(n.TEXTURE_2D,tt,Ce),Ve(O.__webglFramebuffer,y,tt,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),F(tt,Ce)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?xe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,re.__webglTexture),ke(xe,v,Ce),o&&v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)Ve(O.__webglFramebuffer[Re],y,v,n.COLOR_ATTACHMENT0,xe,Re);else Ve(O.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,xe,0);F(v,Ce)&&R(xe),t.unbindTexture()}y.depthBuffer&&P(y)}function ae(y){const v=b(y)||o,O=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let re=0,ce=O.length;re<ce;re++){const de=O[re];if(F(de,v)){const Ce=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(de).__webglTexture;t.bindTexture(Ce,xe),R(Ce),t.unbindTexture()}}}function fe(y){if(o&&y.samples>0&&pe(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],O=y.width,re=y.height;let ce=n.COLOR_BUFFER_BIT;const de=[],Ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(y),Re=y.isWebGLMultipleRenderTargets===!0;if(Re)for(let Ge=0;Ge<v.length;Ge++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ge=0;Ge<v.length;Ge++){de.push(n.COLOR_ATTACHMENT0+Ge),y.depthBuffer&&de.push(Ce);const tt=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(tt===!1&&(y.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ge]),tt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),Re){const Se=i.get(v[Ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,O,re,0,0,O,re,ce,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Ge=0;Ge<v.length;Ge++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ge]);const tt=i.get(v[Ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,tt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function ne(y){return Math.min(f,y.samples)}function pe(y){const v=i.get(y);return o&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function oe(y){const v=a.render.frame;g.get(y)!==v&&(g.set(y,v),y.update())}function we(y,v){const O=y.colorSpace,re=y.format,ce=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===pl||O!==ri&&O!==bn&&(dt.getTransfer(O)===pt?o===!1?e.has("EXT_sRGB")===!0&&re===In?(y.format=pl,y.minFilter=En,y.generateMipmaps=!1):v=Mh.sRGBToLinear(v):(re!==In||ce!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=le,this.resetTextureUnits=X,this.setTexture2D=se,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=be,this.rebindTextures=z,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=pe}function hA(n,e,t){const i=t.isWebGL2;function s(r,a=bn){let o;const l=dt.getTransfer(a);if(r===Ei)return n.UNSIGNED_BYTE;if(r===dh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===hh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===jS)return n.BYTE;if(r===KS)return n.SHORT;if(r===Kl)return n.UNSIGNED_SHORT;if(r===fh)return n.INT;if(r===_i)return n.UNSIGNED_INT;if(r===gi)return n.FLOAT;if(r===gr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ZS)return n.ALPHA;if(r===In)return n.RGBA;if(r===JS)return n.LUMINANCE;if(r===QS)return n.LUMINANCE_ALPHA;if(r===Yi)return n.DEPTH_COMPONENT;if(r===Os)return n.DEPTH_STENCIL;if(r===pl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ey)return n.RED;if(r===ph)return n.RED_INTEGER;if(r===ty)return n.RG;if(r===mh)return n.RG_INTEGER;if(r===_h)return n.RGBA_INTEGER;if(r===uo||r===fo||r===ho||r===po)if(l===pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zc||r===Jc||r===Qc||r===eu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Zc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===eu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ny)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===tu||r===nu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===tu)return l===pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===nu)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===iu||r===su||r===ru||r===au||r===ou||r===lu||r===cu||r===uu||r===fu||r===du||r===hu||r===pu||r===mu||r===_u)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===iu)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===su)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ru)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===au)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ou)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lu)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cu)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uu)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fu)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===du)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hu)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pu)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mu)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_u)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mo||r===gu||r===vu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===mo)return l===pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===iy||r===xu||r===Mu||r===Su)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===mo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===xu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Su)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class pA extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ra extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mA={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ra;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class _A extends on{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:Yi,u!==Yi&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Yi&&(i=_i),i===void 0&&u===Os&&(i=Xi),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gA extends Ws{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,h=null;const E=[],S=[],b=new mn;b.layers.enable(1),b.viewport=new gt;const C=new mn;C.layers.enable(2),C.viewport=new gt;const F=[b,C],R=new pA;R.layers.enable(1),R.layers.enable(2);let $=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let W=E[k];return W===void 0&&(W=new Ho,E[k]=W),W.getTargetRaySpace()},this.getControllerGrip=function(k){let W=E[k];return W===void 0&&(W=new Ho,E[k]=W),W.getGripSpace()},this.getHand=function(k){let W=E[k];return W===void 0&&(W=new Ho,E[k]=W),W.getHandSpace()};function A(k){const W=S.indexOf(k.inputSource);if(W===-1)return;const be=E[W];be!==void 0&&(be.update(k.inputSource,k.frame,c||a),be.dispatchEvent({type:k.type,data:k.inputSource}))}function te(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",K);for(let k=0;k<E.length;k++){const W=S[k];W!==null&&(S[k]=null,E[k].disconnect(W))}$=null,M=null,e.setRenderTarget(p),m=null,d=null,f=null,s=null,h=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",te),s.addEventListener("inputsourceschange",K),_.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:m}),h=new Qi(m.framebufferWidth,m.framebufferHeight,{format:In,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let W=null,be=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=_.stencil?Os:Yi,be=_.stencil?Xi:_i);const Me={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),h=new Qi(d.textureWidth,d.textureHeight,{format:In,type:Ei,depthTexture:new _A(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ie=e.properties.get(h);Ie.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function K(k){for(let W=0;W<k.removed.length;W++){const be=k.removed[W],ve=S.indexOf(be);ve>=0&&(S[ve]=null,E[ve].disconnect(be))}for(let W=0;W<k.added.length;W++){const be=k.added[W];let ve=S.indexOf(be);if(ve===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=S.length){S.push(be),ve=Ie;break}else if(S[Ie]===null){S[Ie]=be,ve=Ie;break}if(ve===-1)break}const Me=E[ve];Me&&Me.connect(be)}}const J=new G,I=new G;function j(k,W,be){J.setFromMatrixPosition(W.matrixWorld),I.setFromMatrixPosition(be.matrixWorld);const ve=J.distanceTo(I),Me=W.projectionMatrix.elements,Ie=be.projectionMatrix.elements,ke=Me[14]/(Me[10]-1),Ne=Me[14]/(Me[10]+1),Fe=(Me[9]+1)/Me[5],at=(Me[9]-1)/Me[5],Ve=(Me[8]-1)/Me[0],x=(Ie[8]+1)/Ie[0],U=ke*Ve,P=ke*x,z=ve/(-Ve+x),H=z*-Ve;W.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(H),k.translateZ(z),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const ae=ke+z,fe=Ne+z,ne=U-H,pe=P+(ve-H),oe=Fe*Ne/fe*ae,we=at*Ne/fe*ae;k.projectionMatrix.makePerspective(ne,pe,oe,we,ae,fe),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,W){W===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(W.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;R.near=C.near=b.near=k.near,R.far=C.far=b.far=k.far,($!==R.near||M!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),$=R.near,M=R.far);const W=k.parent,be=R.cameras;q(R,W);for(let ve=0;ve<be.length;ve++)q(be[ve],W);be.length===2?j(R,b,C):R.projectionMatrix.copy(b.projectionMatrix),X(k,R,W)};function X(k,W,be){be===null?k.matrix.copy(W.matrixWorld):(k.matrix.copy(be.matrixWorld),k.matrix.invert(),k.matrix.multiply(W.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(W.projectionMatrix),k.projectionMatrixInverse.copy(W.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ml*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let le=null;function he(k,W){if(u=W.getViewerPose(c||a),g=W,u!==null){const be=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ve=!1;be.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Me=0;Me<be.length;Me++){const Ie=be[Me];let ke=null;if(m!==null)ke=m.getViewport(Ie);else{const Fe=f.getViewSubImage(d,Ie);ke=Fe.viewport,Me===0&&(e.setRenderTargetTextures(h,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(h))}let Ne=F[Me];Ne===void 0&&(Ne=new mn,Ne.layers.enable(Me),Ne.viewport=new gt,F[Me]=Ne),Ne.matrix.fromArray(Ie.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ie.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(ke.x,ke.y,ke.width,ke.height),Me===0&&(R.matrix.copy(Ne.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(Ne)}}for(let be=0;be<E.length;be++){const ve=S[be],Me=E[be];ve!==null&&Me!==void 0&&Me.update(ve,W,c||a)}le&&le(k,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}const se=new Lh;se.setAnimationLoop(he),this.setAnimationLoop=function(k){le=k},this.dispose=function(){}}}function vA(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Ch(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,E,S,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,E,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===an&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===an&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,E,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xA(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,S){const b=S.program;i.uniformBlockBinding(E,b)}function c(E,S){let b=s[E.id];b===void 0&&(g(E),b=u(E),s[E.id]=b,E.addEventListener("dispose",p));const C=S.program;i.updateUBOMapping(E,C);const F=e.render.frame;r[E.id]!==F&&(d(E),r[E.id]=F)}function u(E){const S=f();E.__bindingPointIndex=S;const b=n.createBuffer(),C=E.__size,F=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=s[E.id],b=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let F=0,R=b.length;F<R;F++){const $=b[F];if(m($,F,C)===!0){const M=$.__offset,A=Array.isArray($.value)?$.value:[$.value];let te=0;for(let K=0;K<A.length;K++){const J=A[K],I=_(J);typeof J=="number"?($.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,M+te,$.__data)):J.isMatrix3?($.__data[0]=J.elements[0],$.__data[1]=J.elements[1],$.__data[2]=J.elements[2],$.__data[3]=J.elements[0],$.__data[4]=J.elements[3],$.__data[5]=J.elements[4],$.__data[6]=J.elements[5],$.__data[7]=J.elements[0],$.__data[8]=J.elements[6],$.__data[9]=J.elements[7],$.__data[10]=J.elements[8],$.__data[11]=J.elements[0]):(J.toArray($.__data,te),te+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,$.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,S,b){const C=E.value;if(b[S]===void 0){if(typeof C=="number")b[S]=C;else{const F=Array.isArray(C)?C:[C],R=[];for(let $=0;$<F.length;$++)R.push(F[$].clone());b[S]=R}return!0}else if(typeof C=="number"){if(b[S]!==C)return b[S]=C,!0}else{const F=Array.isArray(b[S])?b[S]:[b[S]],R=Array.isArray(C)?C:[C];for(let $=0;$<F.length;$++){const M=F[$];if(M.equals(R[$])===!1)return M.copy(R[$]),!0}}return!1}function g(E){const S=E.uniforms;let b=0;const C=16;let F=0;for(let R=0,$=S.length;R<$;R++){const M=S[R],A={boundary:0,storage:0},te=Array.isArray(M.value)?M.value:[M.value];for(let K=0,J=te.length;K<J;K++){const I=te[K],j=_(I);A.boundary+=j.boundary,A.storage+=j.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,R>0){F=b%C;const K=C-F;F!==0&&K-A.boundary<0&&(b+=C-F,M.__offset=b)}b+=A.storage}return F=b%C,F>0&&(b+=C-F),E.__size=b,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function p(E){const S=E.target;S.removeEventListener("dispose",p);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function h(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Nh{constructor(e={}){const{canvas:t=_y(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const S=this;let b=!1,C=0,F=0,R=null,$=-1,M=null;const A=new gt,te=new gt;let K=null;const J=new lt(0);let I=0,j=t.width,q=t.height,X=1,le=null,he=null;const se=new gt(0,0,j,q),k=new gt(0,0,j,q);let W=!1;const be=new ec;let ve=!1,Me=!1,Ie=null;const ke=new Ct,Ne=new ct,Fe=new G,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return R===null?X:1}let x=i;function U(T,V){for(let Z=0;Z<T.length;Z++){const Q=T[Z],ee=t.getContext(Q,V);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ge,!1),x===null){const V=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&V.shift(),x=U(V,T),x===null)throw U(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let P,z,H,ae,fe,ne,pe,oe,we,y,v,O,re,ce,de,Ce,xe,Re,Ge,tt,Se,qe,Be,B;function N(){P=new R1(x),z=new y1(x,P,e),P.init(z),qe=new hA(x,P,z),H=new fA(x,P,z),ae=new D1(x),fe=new ZT,ne=new dA(x,P,H,fe,z,qe,ae),pe=new b1(S),oe=new C1(S),we=new zy(x,z),Be=new M1(x,P,we,z),y=new P1(x,we,ae,Be),v=new N1(x,y,we,ae),Ge=new F1(x,z,ne),Ce=new E1(fe),O=new KT(S,pe,oe,P,z,Be,Ce),re=new vA(S,fe),ce=new QT,de=new rA(P,z),Re=new x1(S,pe,oe,H,v,d,l),xe=new uA(S,v,z),B=new xA(x,ae,z,H),tt=new S1(x,P,ae,z),Se=new L1(x,P,ae,z),ae.programs=O.programs,S.capabilities=z,S.extensions=P,S.properties=fe,S.renderLists=ce,S.shadowMap=xe,S.state=H,S.info=ae}N();const Y=new gA(S,x);this.xr=Y,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const T=P.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=P.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(j,q,!1))},this.getSize=function(T){return T.set(j,q)},this.setSize=function(T,V,Z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,q=V,t.width=Math.floor(T*X),t.height=Math.floor(V*X),Z===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(j*X,q*X).floor()},this.setDrawingBufferSize=function(T,V,Z){j=T,q=V,X=Z,t.width=Math.floor(T*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,V,Z,Q){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,V,Z,Q),H.viewport(A.copy(se).multiplyScalar(X).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,V,Z,Q){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,V,Z,Q),H.scissor(te.copy(k).multiplyScalar(X).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(T){H.setScissorTest(W=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){he=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(T=!0,V=!0,Z=!0){let Q=0;if(T){let ee=!1;if(R!==null){const Ue=R.texture.format;ee=Ue===_h||Ue===mh||Ue===ph}if(ee){const Ue=R.texture.type,He=Ue===Ei||Ue===_i||Ue===Kl||Ue===Xi||Ue===dh||Ue===hh,We=Re.getClearColor(),Xe=Re.getClearAlpha(),nt=We.r,Ke=We.g,Ze=We.b;He?(m[0]=nt,m[1]=Ke,m[2]=Ze,m[3]=Xe,x.clearBufferuiv(x.COLOR,0,m)):(g[0]=nt,g[1]=Ke,g[2]=Ze,g[3]=Xe,x.clearBufferiv(x.COLOR,0,g))}else Q|=x.COLOR_BUFFER_BIT}V&&(Q|=x.DEPTH_BUFFER_BIT),Z&&(Q|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ce.dispose(),de.dispose(),fe.dispose(),pe.dispose(),oe.dispose(),v.dispose(),Be.dispose(),B.dispose(),O.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",xn),Y.removeEventListener("sessionend",ht),Ie&&(Ie.dispose(),Ie=null),Yt.stop()};function ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=ae.autoReset,V=xe.enabled,Z=xe.autoUpdate,Q=xe.needsUpdate,ee=xe.type;N(),ae.autoReset=T,xe.enabled=V,xe.autoUpdate=Z,xe.needsUpdate=Q,xe.type=ee}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Te(T){const V=T.target;V.removeEventListener("dispose",Te),ue(V)}function ue(T){Ee(T),fe.remove(T)}function Ee(T){const V=fe.get(T).programs;V!==void 0&&(V.forEach(function(Z){O.releaseProgram(Z)}),T.isShaderMaterial&&O.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Z,Q,ee,Ue){V===null&&(V=at);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,We=sp(T,V,Z,Q,ee);H.setMaterial(Q,He);let Xe=Z.index,nt=1;if(Q.wireframe===!0){if(Xe=y.getWireframeAttribute(Z),Xe===void 0)return;nt=2}const Ke=Z.drawRange,Ze=Z.attributes.position;let St=Ke.start*nt,un=(Ke.start+Ke.count)*nt;Ue!==null&&(St=Math.max(St,Ue.start*nt),un=Math.min(un,(Ue.start+Ue.count)*nt)),Xe!==null?(St=Math.max(St,0),un=Math.min(un,Xe.count)):Ze!=null&&(St=Math.max(St,0),un=Math.min(un,Ze.count));const Ut=un-St;if(Ut<0||Ut===1/0)return;Be.setup(ee,Q,We,Z,Xe);let Xn,Mt=tt;if(Xe!==null&&(Xn=we.get(Xe),Mt=Se,Mt.setIndex(Xn)),ee.isMesh)Q.wireframe===!0?(H.setLineWidth(Q.wireframeLinewidth*Ve()),Mt.setMode(x.LINES)):Mt.setMode(x.TRIANGLES);else if(ee.isLine){let st=Q.linewidth;st===void 0&&(st=1),H.setLineWidth(st*Ve()),ee.isLineSegments?Mt.setMode(x.LINES):ee.isLineLoop?Mt.setMode(x.LINE_LOOP):Mt.setMode(x.LINE_STRIP)}else ee.isPoints?Mt.setMode(x.POINTS):ee.isSprite&&Mt.setMode(x.TRIANGLES);if(ee.isInstancedMesh)Mt.renderInstances(St,Ut,ee.count);else if(Z.isInstancedBufferGeometry){const st=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Za=Math.min(Z.instanceCount,st);Mt.renderInstances(St,Ut,Za)}else Mt.render(St,Ut)};function ze(T,V,Z){T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Rr(T,V,Z),T.side=Ai,T.needsUpdate=!0,Rr(T,V,Z),T.side=_n):Rr(T,V,Z)}this.compile=function(T,V,Z=null){Z===null&&(Z=T),p=de.get(Z),p.init(),E.push(p),Z.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),T!==Z&&T.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),p.setupLights(S._useLegacyLights);const Q=new Set;return T.traverse(function(ee){const Ue=ee.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const We=Ue[He];ze(We,Z,ee),Q.add(We)}else ze(Ue,Z,ee),Q.add(Ue)}),E.pop(),p=null,Q},this.compileAsync=function(T,V,Z=null){const Q=this.compile(T,V,Z);return new Promise(ee=>{function Ue(){if(Q.forEach(function(He){fe.get(He).currentProgram.isReady()&&Q.delete(He)}),Q.size===0){ee(T);return}setTimeout(Ue,10)}P.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let ut=null;function bt(T){ut&&ut(T)}function xn(){Yt.stop()}function ht(){Yt.start()}const Yt=new Lh;Yt.setAnimationLoop(bt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(T){ut=T,Y.setAnimationLoop(T),T===null?Yt.stop():Yt.start()},Y.addEventListener("sessionstart",xn),Y.addEventListener("sessionend",ht),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(V),V=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,V,R),p=de.get(T,E.length),p.init(),E.push(p),ke.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),be.setFromProjectionMatrix(ke),Me=this.localClippingEnabled,ve=Ce.init(this.clippingPlanes,Me),_=ce.get(T,h.length),_.init(),h.push(_),Nn(T,V,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(le,he),this.info.render.frame++,ve===!0&&Ce.beginShadows();const Z=p.state.shadowsArray;if(xe.render(Z,T,V),ve===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Re.render(_,T),p.setupLights(S._useLegacyLights),V.isArrayCamera){const Q=V.cameras;for(let ee=0,Ue=Q.length;ee<Ue;ee++){const He=Q[ee];rc(_,T,He,He.viewport)}}else rc(_,T,V);R!==null&&(ne.updateMultisampleRenderTarget(R),ne.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(S,T,V),Be.resetDefaultState(),$=-1,M=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Nn(T,V,Z,Q){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||be.intersectsSprite(T)){Q&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ke);const He=v.update(T),We=T.material;We.visible&&_.push(T,He,We,Z,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||be.intersectsObject(T))){const He=v.update(T),We=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Fe.copy(He.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(ke)),Array.isArray(We)){const Xe=He.groups;for(let nt=0,Ke=Xe.length;nt<Ke;nt++){const Ze=Xe[nt],St=We[Ze.materialIndex];St&&St.visible&&_.push(T,He,St,Z,Fe.z,Ze)}}else We.visible&&_.push(T,He,We,Z,Fe.z,null)}}const Ue=T.children;for(let He=0,We=Ue.length;He<We;He++)Nn(Ue[He],V,Z,Q)}function rc(T,V,Z,Q){const ee=T.opaque,Ue=T.transmissive,He=T.transparent;p.setupLightsView(Z),ve===!0&&Ce.setGlobalState(S.clippingPlanes,Z),Ue.length>0&&ip(ee,Ue,V,Z),Q&&H.viewport(A.copy(Q)),ee.length>0&&Cr(ee,V,Z),Ue.length>0&&Cr(Ue,V,Z),He.length>0&&Cr(He,V,Z),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ip(T,V,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Ue=z.isWebGL2;Ie===null&&(Ie=new Qi(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?gr:Ei,minFilter:_r,samples:Ue?4:0})),S.getDrawingBufferSize(Ne),Ue?Ie.setSize(Ne.x,Ne.y):Ie.setSize(_l(Ne.x),_l(Ne.y));const He=S.getRenderTarget();S.setRenderTarget(Ie),S.getClearColor(J),I=S.getClearAlpha(),I<1&&S.setClearColor(16777215,.5),S.clear();const We=S.toneMapping;S.toneMapping=yi,Cr(T,Z,Q),ne.updateMultisampleRenderTarget(Ie),ne.updateRenderTargetMipmap(Ie);let Xe=!1;for(let nt=0,Ke=V.length;nt<Ke;nt++){const Ze=V[nt],St=Ze.object,un=Ze.geometry,Ut=Ze.material,Xn=Ze.group;if(Ut.side===_n&&St.layers.test(Q.layers)){const Mt=Ut.side;Ut.side=an,Ut.needsUpdate=!0,ac(St,Z,Q,un,Ut,Xn),Ut.side=Mt,Ut.needsUpdate=!0,Xe=!0}}Xe===!0&&(ne.updateMultisampleRenderTarget(Ie),ne.updateRenderTargetMipmap(Ie)),S.setRenderTarget(He),S.setClearColor(J,I),S.toneMapping=We}function Cr(T,V,Z){const Q=V.isScene===!0?V.overrideMaterial:null;for(let ee=0,Ue=T.length;ee<Ue;ee++){const He=T[ee],We=He.object,Xe=He.geometry,nt=Q===null?He.material:Q,Ke=He.group;We.layers.test(Z.layers)&&ac(We,V,Z,Xe,nt,Ke)}}function ac(T,V,Z,Q,ee,Ue){T.onBeforeRender(S,V,Z,Q,ee,Ue),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(S,V,Z,Q,T,Ue),ee.transparent===!0&&ee.side===_n&&ee.forceSinglePass===!1?(ee.side=an,ee.needsUpdate=!0,S.renderBufferDirect(Z,V,Q,ee,T,Ue),ee.side=Ai,ee.needsUpdate=!0,S.renderBufferDirect(Z,V,Q,ee,T,Ue),ee.side=_n):S.renderBufferDirect(Z,V,Q,ee,T,Ue),T.onAfterRender(S,V,Z,Q,ee,Ue)}function Rr(T,V,Z){V.isScene!==!0&&(V=at);const Q=fe.get(T),ee=p.state.lights,Ue=p.state.shadowsArray,He=ee.state.version,We=O.getParameters(T,ee.state,Ue,V,Z),Xe=O.getProgramCacheKey(We);let nt=Q.programs;Q.environment=T.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(T.isMeshStandardMaterial?oe:pe).get(T.envMap||Q.environment),nt===void 0&&(T.addEventListener("dispose",Te),nt=new Map,Q.programs=nt);let Ke=nt.get(Xe);if(Ke!==void 0){if(Q.currentProgram===Ke&&Q.lightsStateVersion===He)return lc(T,We),Ke}else We.uniforms=O.getUniforms(T),T.onBuild(Z,We,S),T.onBeforeCompile(We,S),Ke=O.acquireProgram(We,Xe),nt.set(Xe,Ke),Q.uniforms=We.uniforms;const Ze=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=Ce.uniform),lc(T,We),Q.needsLights=ap(T),Q.lightsStateVersion=He,Q.needsLights&&(Ze.ambientLightColor.value=ee.state.ambient,Ze.lightProbe.value=ee.state.probe,Ze.directionalLights.value=ee.state.directional,Ze.directionalLightShadows.value=ee.state.directionalShadow,Ze.spotLights.value=ee.state.spot,Ze.spotLightShadows.value=ee.state.spotShadow,Ze.rectAreaLights.value=ee.state.rectArea,Ze.ltc_1.value=ee.state.rectAreaLTC1,Ze.ltc_2.value=ee.state.rectAreaLTC2,Ze.pointLights.value=ee.state.point,Ze.pointLightShadows.value=ee.state.pointShadow,Ze.hemisphereLights.value=ee.state.hemi,Ze.directionalShadowMap.value=ee.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ze.spotShadowMap.value=ee.state.spotShadowMap,Ze.spotLightMatrix.value=ee.state.spotLightMatrix,Ze.spotLightMap.value=ee.state.spotLightMap,Ze.pointShadowMap.value=ee.state.pointShadowMap,Ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.currentProgram=Ke,Q.uniformsList=null,Ke}function oc(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=pa.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function lc(T,V){const Z=fe.get(T);Z.outputColorSpace=V.outputColorSpace,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function sp(T,V,Z,Q,ee){V.isScene!==!0&&(V=at),ne.resetTextureUnits();const Ue=V.fog,He=Q.isMeshStandardMaterial?V.environment:null,We=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ri,Xe=(Q.isMeshStandardMaterial?oe:pe).get(Q.envMap||He),nt=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ke=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ze=!!Z.morphAttributes.position,St=!!Z.morphAttributes.normal,un=!!Z.morphAttributes.color;let Ut=yi;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ut=S.toneMapping);const Xn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mt=Xn!==void 0?Xn.length:0,st=fe.get(Q),Za=p.state.lights;if(ve===!0&&(Me===!0||T!==M)){const fn=T===M&&Q.id===$;Ce.setState(Q,T,fn)}let Tt=!1;Q.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Za.state.version||st.outputColorSpace!==We||ee.isInstancedMesh&&st.instancing===!1||!ee.isInstancedMesh&&st.instancing===!0||ee.isSkinnedMesh&&st.skinning===!1||!ee.isSkinnedMesh&&st.skinning===!0||ee.isInstancedMesh&&st.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&st.instancingColor===!1&&ee.instanceColor!==null||st.envMap!==Xe||Q.fog===!0&&st.fog!==Ue||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Ce.numPlanes||st.numIntersection!==Ce.numIntersection)||st.vertexAlphas!==nt||st.vertexTangents!==Ke||st.morphTargets!==Ze||st.morphNormals!==St||st.morphColors!==un||st.toneMapping!==Ut||z.isWebGL2===!0&&st.morphTargetsCount!==Mt)&&(Tt=!0):(Tt=!0,st.__version=Q.version);let Ri=st.currentProgram;Tt===!0&&(Ri=Rr(Q,V,ee));let cc=!1,$s=!1,Ja=!1;const jt=Ri.getUniforms(),Pi=st.uniforms;if(H.useProgram(Ri.program)&&(cc=!0,$s=!0,Ja=!0),Q.id!==$&&($=Q.id,$s=!0),cc||M!==T){jt.setValue(x,"projectionMatrix",T.projectionMatrix),jt.setValue(x,"viewMatrix",T.matrixWorldInverse);const fn=jt.map.cameraPosition;fn!==void 0&&fn.setValue(x,Fe.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&jt.setValue(x,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&jt.setValue(x,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,$s=!0,Ja=!0)}if(ee.isSkinnedMesh){jt.setOptional(x,ee,"bindMatrix"),jt.setOptional(x,ee,"bindMatrixInverse");const fn=ee.skeleton;fn&&(z.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),jt.setValue(x,"boneTexture",fn.boneTexture,ne),jt.setValue(x,"boneTextureSize",fn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qa=Z.morphAttributes;if((Qa.position!==void 0||Qa.normal!==void 0||Qa.color!==void 0&&z.isWebGL2===!0)&&Ge.update(ee,Z,Ri),($s||st.receiveShadow!==ee.receiveShadow)&&(st.receiveShadow=ee.receiveShadow,jt.setValue(x,"receiveShadow",ee.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Pi.envMap.value=Xe,Pi.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),$s&&(jt.setValue(x,"toneMappingExposure",S.toneMappingExposure),st.needsLights&&rp(Pi,Ja),Ue&&Q.fog===!0&&re.refreshFogUniforms(Pi,Ue),re.refreshMaterialUniforms(Pi,Q,X,q,Ie),pa.upload(x,oc(st),Pi,ne)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(pa.upload(x,oc(st),Pi,ne),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&jt.setValue(x,"center",ee.center),jt.setValue(x,"modelViewMatrix",ee.modelViewMatrix),jt.setValue(x,"normalMatrix",ee.normalMatrix),jt.setValue(x,"modelMatrix",ee.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const fn=Q.uniformsGroups;for(let eo=0,op=fn.length;eo<op;eo++)if(z.isWebGL2){const uc=fn[eo];B.update(uc,Ri),B.bind(uc,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function rp(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function ap(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,V,Z){fe.get(T.texture).__webglTexture=V,fe.get(T.depthTexture).__webglTexture=Z;const Q=fe.get(T);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const Z=fe.get(T);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,Z=0){R=T,C=V,F=Z;let Q=!0,ee=null,Ue=!1,He=!1;if(T){const Xe=fe.get(T);Xe.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(x.FRAMEBUFFER,null),Q=!1):Xe.__webglFramebuffer===void 0?ne.setupRenderTarget(T):Xe.__hasExternalTextures&&ne.rebindTextures(T,fe.get(T.texture).__webglTexture,fe.get(T.depthTexture).__webglTexture);const nt=T.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(He=!0);const Ke=fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[V])?ee=Ke[V][Z]:ee=Ke[V],Ue=!0):z.isWebGL2&&T.samples>0&&ne.useMultisampledRTT(T)===!1?ee=fe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?ee=Ke[Z]:ee=Ke,A.copy(T.viewport),te.copy(T.scissor),K=T.scissorTest}else A.copy(se).multiplyScalar(X).floor(),te.copy(k).multiplyScalar(X).floor(),K=W;if(H.bindFramebuffer(x.FRAMEBUFFER,ee)&&z.drawBuffers&&Q&&H.drawBuffers(T,ee),H.viewport(A),H.scissor(te),H.setScissorTest(K),Ue){const Xe=fe.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+V,Xe.__webglTexture,Z)}else if(He){const Xe=fe.get(T.texture),nt=V||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Xe.__webglTexture,Z||0,nt)}$=-1},this.readRenderTargetPixels=function(T,V,Z,Q,ee,Ue,He){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){H.bindFramebuffer(x.FRAMEBUFFER,We);try{const Xe=T.texture,nt=Xe.format,Ke=Xe.type;if(nt!==In&&qe.convert(nt)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ke===gr&&(P.has("EXT_color_buffer_half_float")||z.isWebGL2&&P.has("EXT_color_buffer_float"));if(Ke!==Ei&&qe.convert(Ke)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===gi&&(z.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Q&&Z>=0&&Z<=T.height-ee&&x.readPixels(V,Z,Q,ee,qe.convert(nt),qe.convert(Ke),Ue)}finally{const Xe=R!==null?fe.get(R).__webglFramebuffer:null;H.bindFramebuffer(x.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(T,V,Z=0){const Q=Math.pow(2,-Z),ee=Math.floor(V.image.width*Q),Ue=Math.floor(V.image.height*Q);ne.setTexture2D(V,0),x.copyTexSubImage2D(x.TEXTURE_2D,Z,0,0,T.x,T.y,ee,Ue),H.unbindTexture()},this.copyTextureToTexture=function(T,V,Z,Q=0){const ee=V.image.width,Ue=V.image.height,He=qe.convert(Z.format),We=qe.convert(Z.type);ne.setTexture2D(Z,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,Z.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,Z.unpackAlignment),V.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,Q,T.x,T.y,ee,Ue,He,We,V.image.data):V.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,Q,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,He,V.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,Q,T.x,T.y,He,We,V.image),Q===0&&Z.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(T,V,Z,Q,ee=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=T.max.x-T.min.x+1,He=T.max.y-T.min.y+1,We=T.max.z-T.min.z+1,Xe=qe.convert(Q.format),nt=qe.convert(Q.type);let Ke;if(Q.isData3DTexture)ne.setTexture3D(Q,0),Ke=x.TEXTURE_3D;else if(Q.isDataArrayTexture)ne.setTexture2DArray(Q,0),Ke=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,Q.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ze=x.getParameter(x.UNPACK_ROW_LENGTH),St=x.getParameter(x.UNPACK_IMAGE_HEIGHT),un=x.getParameter(x.UNPACK_SKIP_PIXELS),Ut=x.getParameter(x.UNPACK_SKIP_ROWS),Xn=x.getParameter(x.UNPACK_SKIP_IMAGES),Mt=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,T.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,T.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,T.min.z),Z.isDataTexture||Z.isData3DTexture?x.texSubImage3D(Ke,ee,V.x,V.y,V.z,Ue,He,We,Xe,nt,Mt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(Ke,ee,V.x,V.y,V.z,Ue,He,We,Xe,Mt.data)):x.texSubImage3D(Ke,ee,V.x,V.y,V.z,Ue,He,We,Xe,nt,Mt),x.pixelStorei(x.UNPACK_ROW_LENGTH,Ze),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,St),x.pixelStorei(x.UNPACK_SKIP_PIXELS,un),x.pixelStorei(x.UNPACK_SKIP_ROWS,Ut),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Xn),ee===0&&Q.generateMipmaps&&x.generateMipmap(Ke),H.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ne.setTextureCube(T,0):T.isData3DTexture?ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ne.setTexture2DArray(T,0):ne.setTexture2D(T,0),H.unbindTexture()},this.resetState=function(){C=0,F=0,R=null,H.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zl?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===$a?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?ji:gh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ji?kt:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MA extends Nh{}MA.prototype.isWebGL1Renderer=!0;class SA extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class aa extends Tr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ff={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class yA{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const EA=new yA;class nc{constructor(e){this.manager=e!==void 0?e:EA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}nc.DEFAULT_MATERIAL_NAME="__DEFAULT";class bA extends nc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ff.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=vr("img");function l(){u(),ff.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class TA extends nc{constructor(e){super(e)}load(e,t,i,s){const r=new on,a=new bA(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class AA extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const zo=new Ct,df=new G,hf=new G;class wA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hf),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pf=new Ct,er=new G,Go=new G;class CA extends wA{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),er.setFromMatrixPosition(e.matrixWorld),i.position.copy(er),Go.copy(i.position),Go.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Go),i.updateMatrixWorld(),s.makeTranslation(-er.x,-er.y,-er.z),pf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf)}}class RA extends AA{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new CA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mf{constructor(e,t,i=0,s=1/0){this.ray=new Eh(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return vl(e,this,i,t),i.sort(_f),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)vl(e[s],this,i,t);return i.sort(_f),i}}function _f(n,e){return n.distance-e.distance}function vl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)vl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);const PA="/app2/icon/close.svg",LA=["src"],DA=Ye({__name:"IconClose",setup(n){return(e,t)=>(ie(),_e("img",{class:"Icon",src:me(PA),alt:"Close"},null,8,LA))}}),IA=Qe(DA,[["__scopeId","data-v-011fa488"]]),UA="/app2/icon/message1.svg",FA=Vs("log",{state:()=>({GENERAL:[],BATTLE:[]})}),NA={class:"actionLog"},OA={class:"logWindow"},kA={class:"logTab"},BA=["onClick"],HA={key:0,class:"logList",density:"compact"},zA=["src"],GA=Ye({__name:"ActionLog",setup(n,{expose:e}){const t=FA(),i=$n(),s=Ae(!0),r=[w.strLog1,w.strLog2],a=Ae(),o=d=>{a.value=d};function l(d,m){m==0?t.GENERAL.push(d):t.BATTLE.push(d),Gs(()=>{f()})}function c(){s.value=!0}function u(){s.value=!1}function f(){const d=document.querySelector(".logList");d&&(d.scrollTop=d.scrollHeight)}return Sr(()=>{a.value=i.process==w.processBattle?w.strLog2:w.strLog1,f()}),e({addLog:l}),(d,m)=>(ie(),_e("div",NA,[Bt(L("div",OA,[L("ul",kA,[(ie(),_e(ft,null,Xt(r,g=>L("li",{onClick:_=>o(g),class:Ot([{"selected-tab":g==a.value},"tabItem"])},Le(g),11,BA)),64))]),De(IA,{class:"IconClose",onClick:m[0]||(m[0]=g=>u())}),a.value?(ie(),_e("ul",HA,[(ie(!0),_e(ft,null,Xt(me(t)[a.value],(g,_)=>(ie(),_e("li",{key:_,class:"logMessage"},Le(g),1))),128))])):je("",!0)],512),[[Ht,s.value]]),Bt(L("img",{class:"iconLog",src:me(UA),alt:"Log",onClick:m[1]||(m[1]=g=>c())},null,8,zA),[[Ht,!s.value]])]))}}),Oh=Qe(GA,[["__scopeId","data-v-f3503a53"]]),gf="/app2/img/back/wall/water03.jpg",VA="/app2/img/back/wall/mable-black-p.jpg",WA="/app2/img/back/wall/wood-deck-02.jpg",qA="/app2/img/back/wall/stone-tile02-p.jpg",$A="/app2/img/back/wall/brick1.jpg",XA="/app2/img/back/wall/tesukiwashi06.jpg",YA="/app2/img/back/floor/Wonder-Marble.jpg",jA="/app2/img/back/floor/wood-deck-03.jpg",KA="/app2/img/back/floor/rockland3.jpg",ZA="/app2/img/back/floor/rockland2.jpg",JA="/app2/img/back/floor/tatami02.jpg",QA="/app2/img/back/door/leftdoor1.jpg",ew="/app2/img/back/door/rightdoor1.jpg",kh=Vs("position",{state:()=>({playerPosition:new G})}),tw={key:0,class:"crossKey"},nw=Ye({__name:"Dungeon",setup(n){const e=new Array(gf,VA,WA,qA,$A,XA),t=new Array(gf,YA,jA,KA,ZA,JA),i=$n(),s=kh(),r=Ci(),a=Ae(null);let o=new SA,l=new mn(75,window.innerWidth/window.innerHeight,.1,1e3),c=new Nh,u,f=new G,d=0,m=0,g,_=[],p;Sr(()=>{Cx(),E(),S(),window.addEventListener("keydown",F),window.addEventListener("click",C),h(),M()});const h=function(){requestAnimationFrame(h),c.render(o,l)};function E(){var J;c.setSize(window.innerWidth,window.innerHeight),(J=a.value)==null||J.appendChild(c.domElement),s.playerPosition=new G(w.BlockSize*ya.X,5,w.BlockSize*ya.Y),f.copy(s.playerPosition),l.position.copy(s.playerPosition),te(w.logEnterDungeon);const K={point:16512459};u=new RA(K.point,20,150,1),u.position.copy(s.playerPosition),o.add(u)}function S(){g=Math.floor(Math.random()*e.length);const K=new TA,J=new Ps(w.BlockSize,w.BlockHeight),I=K.load(e[g]),j=new aa({map:I,side:_n,bumpMap:I,bumpScale:.2}),q=new Ps(w.BlockSize/2,w.BlockHeight),X=K.load(QA),le=K.load(ew),he=new aa({map:X,side:_n,bumpMap:X,bumpScale:.2}),se=new aa({map:le,side:_n,bumpMap:le,bumpScale:.2}),k=new Ps(w.BlockSize,w.BlockSize),W=K.load(t[g]),be=new aa({map:W,side:_n,bumpMap:W,bumpScale:.2});for(let ve=0;ve<vt.length;ve++)for(let Me=0;Me<vt[ve].length;Me++)if(vt[ve][Me]==w.MapRoom||vt[ve][Me]==w.MapRoad){const Ie=new en(k,be);if(Ie.position.set(w.BlockSize*Me,0,w.BlockSize*ve),Ie.rotation.x=90*Math.PI/180,o.add(Ie),ti(ve-1,Me)){const Fe=new en(J,j);Fe.position.set(w.BlockSize*Me,w.BlockHeight/2,w.BlockSize*(ve-.5)),o.add(Fe)}if(ti(ve+1,Me)){const Fe=new en(J,j);Fe.position.set(w.BlockSize*Me,w.BlockHeight/2,w.BlockSize*(ve+.5)),o.add(Fe)}if(ti(ve,Me-1)){const Fe=new en(J,j);Fe.position.set(w.BlockSize*(Me-.5),w.BlockHeight/2,w.BlockSize*ve),Fe.rotation.y=90*Math.PI/180,o.add(Fe)}if(ti(ve,Me+1)){const Fe=new en(J,j);Fe.position.set(w.BlockSize*(Me+.5),w.BlockHeight/2,w.BlockSize*ve),Fe.rotation.y=90*Math.PI/180,o.add(Fe)}const ke=new en(q,he),Ne=new en(q,se);switch(ir[ve][Me]){case w.SetDoorUp:ke.position.set(w.BlockSize*Me-w.BlockSize/4,w.BlockHeight/2,w.BlockSize*(ve-.5)),o.add(ke),Ne.position.set(w.BlockSize*Me+w.BlockSize/4,w.BlockHeight/2,w.BlockSize*(ve-.5)),o.add(Ne),b(ke,Ne);break;case w.SetDoorUnder:ke.position.set(w.BlockSize*Me-w.BlockSize/4,w.BlockHeight/2,w.BlockSize*(ve+.5)),o.add(ke),Ne.position.set(w.BlockSize*Me+w.BlockSize/4,w.BlockHeight/2,w.BlockSize*(ve+.5)),o.add(Ne),b(ke,Ne);break;case w.SetDoorLeft:ke.position.set(w.BlockSize*(Me-.5),w.BlockHeight/2,w.BlockSize*ve+w.BlockSize/4),ke.rotation.y=90*Math.PI/180,o.add(ke),Ne.position.set(w.BlockSize*(Me-.5),w.BlockHeight/2,w.BlockSize*ve-w.BlockSize/4),Ne.rotation.y=90*Math.PI/180,o.add(Ne),b(ke,Ne);break;case w.SetDoorRight:ke.position.set(w.BlockSize*(Me+.5),w.BlockHeight/2,w.BlockSize*ve+w.BlockSize/4),ke.rotation.y=90*Math.PI/180,o.add(ke),Ne.position.set(w.BlockSize*(Me+.5),w.BlockHeight/2,w.BlockSize*ve-w.BlockSize/4),Ne.rotation.y=90*Math.PI/180,o.add(Ne),b(ke,Ne);break}}}function b(K,J){_.push({id:p,leftDoor:K,rightDoor:J,isOpen:!1}),p+=1}const C=K=>{if(i.process==w.processBattle)return;const J=new mf,I=new ct;I.x=K.clientX/window.innerWidth*2-1,I.y=-(K.clientY/window.innerHeight)*2+1,J.setFromCamera(I,l);const j=J.intersectObjects(_.flatMap(q=>[q.leftDoor,q.rightDoor]));if(j.length>0){const q=_.find(X=>X.leftDoor===j[0].object||X.rightDoor===j[0].object);q&&(q.isOpen||(q.leftDoor.translateOnAxis(new G(-1,0,0),w.BlockSize/4),q.rightDoor.translateOnAxis(new G(1,0,0),w.BlockSize/4),q.leftDoor.rotateY(-Math.PI/2.1),q.rightDoor.rotateY(Math.PI/2.1),q.leftDoor.translateOnAxis(new G(1,0,0),w.BlockSize/4),q.rightDoor.translateOnAxis(new G(-1,0,0),w.BlockSize/4),q.isOpen=!0))}},F=K=>{switch(K.key){case"a":case"A":R(w.TurnLeft);break;case"d":case"D":R(w.TurnRight);break;default:R(K.key)}};function R(K){if(console.log("playerMove",K),r.party||r.character||i.process==w.processBattle||!l)return;const J=new G;l.getWorldDirection(J);let I=s.playerPosition.clone();switch(K){case w.ArrowUp:I.add(J.multiplyScalar(w.BlockSize)),j();break;case w.ArrowDown:I.sub(J.multiplyScalar(w.BlockSize)),j();break;case w.ArrowLeft:I.x+=J.z*w.BlockSize,I.z-=J.x*w.BlockSize,j();break;case w.ArrowRight:I.x-=J.z*w.BlockSize,I.z+=J.x*w.BlockSize,j();break;case w.TurnLeft:d+=Math.PI/2;break;case w.TurnRight:d-=Math.PI/2;break;default:return}if(I==s.playerPosition)return;function j(){I.x=Math.round(I.x/w.BlockSize)*w.BlockSize,I.z=Math.round(I.z/w.BlockSize)*w.BlockSize}let q=Math.floor((I.x+5)/w.BlockSize),X=Math.floor((I.z+5)/w.BlockSize);if(!ti(X,q)){const le=new mf,he=I.clone().sub(s.playerPosition).normalize();le.set(s.playerPosition,he);const se=le.intersectObjects(_.flatMap(k=>[k.leftDoor,k.rightDoor]));if(se.length>0){const k=_.find(W=>W.leftDoor===se[0].object||W.rightDoor===se[0].object);if(k&&!k.isOpen&&se[0].distance<=w.BlockSize)return}s.playerPosition.copy(I),f.copy(I),m+=Jt(w.encountMin,w.encountMax),m>=w.encountLimit&&($(),m=0)}}function $(){te(w.logMonsterEncounter),r.map=!1,i.process=w.processBattle}const M=()=>{l.position.equals(f)||(l.position.lerp(f,.05),u.position.copy(f)),l.rotation.y!==d&&(l.rotation.y+=(d-l.rotation.y)*.1),requestAnimationFrame(M)},A=Ae(null),te=K=>{A.value&&A.value.addLog(K,0)};return(K,J)=>(ie(),_e(ft,null,[L("div",{ref_key:"dungeon",ref:a},null,512),me(i).process==me(w).processSearch&&!me(r).party&&!me(r).character?(ie(),_e("div",tw,[L("div",{class:"upKey",onClick:J[0]||(J[0]=I=>R(me(w).ArrowUp))}),L("div",{class:"downKey",onClick:J[1]||(J[1]=I=>R(me(w).ArrowDown))}),L("div",{class:"leftKey",onClick:J[2]||(J[2]=I=>R(me(w).TurnLeft))}),L("div",{class:"rightKey",onClick:J[3]||(J[3]=I=>R(me(w).TurnRight))}),De(Oh,{ref_key:"actionLog",ref:A,class:"actionLog"},null,512)])):je("",!0)],64))}}),iw=Qe(nw,[["__scopeId","data-v-1eb52ff3"]]),sw="/app2/img/flame/flame032401.png",rw="/app2/img/flame/flame032402.png",aw={class:"TurnOrder"},ow=["src"],lw=Ye({__name:"TurnOrder",props:{turnOrder:Array,numOrder:Number},setup(n){const e=i=>i instanceof rn?sw:rw,t=i=>i instanceof rn?i.faceGraphicUrl:i.GraphicUrl;return(i,s)=>(ie(),_e("div",aw,[(ie(!0),_e(ft,null,Xt(n.turnOrder,(r,a)=>Bt((ie(),_e("div",{key:a,class:Ot(["turnOrderFlame",{currentOrder:a==n.numOrder}]),style:Rn({backgroundImage:"url("+e(r)+")"})},[L("img",{src:t(r),alt:"",class:"turnOrderImage"},null,8,ow)],6)),[[Ht,r.nowHP>0]])),128))]))}}),cw=Qe(lw,[["__scopeId","data-v-4bc464c4"]]),ic=n=>(Wn("data-v-91718c13"),n=n(),qn(),n),uw=ic(()=>L("div",{class:"result"},"RESULT",-1)),fw={class:"resultFlame"},dw={class:"expGoldLine"},hw={class:"expItem"},pw=ic(()=>L("span",{class:"itemKinds"},"GET EXP",-1)),mw={class:"itemValue"},_w={class:"goldItem"},gw=ic(()=>L("span",{class:"itemKinds"},"GET GOLD",-1)),vw={class:"itemValue"},xw={class:"character"},Mw={class:"characterFlame"},Sw=["src"],yw={class:"rightFlame"},Ew={class:"level"},bw={class:"progress-bar"},Tw=Ye({__name:"BattleResult",props:{getExp:{type:Number},getGold:{type:Number}},setup(n){const e=ts(),t=Ci(),i=$n();function s(){t.map=!0,i.process=w.processSearch}return(r,a)=>(ie(),_e("div",{class:"battleResult",onClick:a[0]||(a[0]=o=>s())},[uw,L("div",fw,[L("div",dw,[L("span",hw,[pw,L("span",mw,Le(n.getExp),1)]),L("span",_w,[gw,L("span",vw,Le(n.getGold),1)])]),(ie(!0),_e(ft,null,Xt(me(e).characters,o=>(ie(),_e("div",xw,[L("div",Mw,[L("img",{class:"face",src:o.faceGraphicUrl},null,8,Sw),L("div",yw,[L("div",Ew,"LV "+Le(o.LV),1),L("span",bw,[De(th,{exp:o.exp,next:o.nextLvExp},null,8,["exp","next"])])])])]))),256))])]))}}),Aw=Qe(Tw,[["__scopeId","data-v-91718c13"]]),ww={class:"CurrentUI"},Cw=["onClick","onMouseover"],Rw=["src"],Pw=["src"],Lw={class:"progress-bar-hp"},Dw={class:"progress-bar-mp"},Iw=Ye({__name:"Current",props:{currentCharacter:{type:rn},targetCharacter:{type:Array},showCharacterEffect:{type:Array},toCharacterEffect:{type:Array,default:()=>[]},toCharacterEffectType:{type:String},showCharacterAnime:{type:Array},toCharacterAnime:{type:[String,null],default:null},selectionMode:{type:String}},emits:["selectCharacter"],setup(n,{emit:e}){const t=n,i=ts();function s(l){var c;t.selectionMode=="oneFriend"&&((c=t.targetCharacter)!=null&&c.includes(l)||o("over",l))}function r(l){var c;t.selectionMode=="myself"?o("click"):t.selectionMode=="oneFriend"?(c=t.targetCharacter)!=null&&c.includes(l)?o("click",l):o("over",l):t.selectionMode=="allFriends"&&o("click")}const a=e,o=(l,c=null)=>{a("selectCharacter",l,c)};return Et(()=>t.showCharacterEffect,()=>{console.log("showCharacterEffect",t.showCharacterEffect)}),Et(()=>t.toCharacterEffect,()=>{console.log("toCharacterEffect",t.toCharacterEffect)}),Et(()=>t.toCharacterEffectType,()=>{console.log("toCharacterEffectType",t.toCharacterEffectType)}),Et(()=>t.selectionMode,()=>{console.log("selectionMode",t.selectionMode)}),(l,c)=>(ie(),_e("div",ww,[(ie(!0),_e(ft,null,Xt(me(i).characters,(u,f)=>{var d;return ie(),_e("div",{class:Ot(["character",{currentCharacter:u==n.currentCharacter,targetCharacter:(d=n.targetCharacter)==null?void 0:d.includes(u)}]),onClick:m=>r(u),onMouseover:m=>s(u)},[Bt(L("div",{class:Ot(["characterEffect",{effectGreen:n.toCharacterEffectType=="heal",effectRed:n.toCharacterEffectType=="damage"}])},Le(n.toCharacterEffect[f]),3),[[Ht,n.showCharacterEffect&&n.showCharacterEffect[f]]]),Bt(L("img",{src:n.toCharacterAnime,class:"toCharacterAnime",alt:"skill effect"},null,8,Rw),[[Ht,n.showCharacterAnime&&n.showCharacterAnime[f]]]),L("img",{class:"characterface",src:u.faceGraphicUrl},null,8,Pw),L("span",Lw,[De(Va,{nowHP:u.nowHP,maxHP:u.totalStatus.HP},null,8,["nowHP","maxHP"])]),L("div",Dw,[De(Wl,{nowMP:u.nowMP,maxMP:u.totalStatus.MP},null,8,["nowMP","maxMP"])])],42,Cw)}),256))]))}}),Bh=Qe(Iw,[["__scopeId","data-v-72f64bd1"]]);class xl{constructor(e){Oe(this,"mon_id");Oe(this,"mon_type");Oe(this,"name");Oe(this,"GraphicUrl");Oe(this,"LV");Oe(this,"HP");Oe(this,"MP");Oe(this,"ATK");Oe(this,"MGC");Oe(this,"DEF");Oe(this,"MDF");Oe(this,"DEX");Oe(this,"SPD");Oe(this,"HitRate");Oe(this,"CritRate");Oe(this,"nowHP");Oe(this,"nowMP");Oe(this,"GOLD");Oe(this,"EXP");Oe(this,"order");this.mon_id=e.mon_id,this.mon_type=e.mon_type,this.name=e.name,this.GraphicUrl=e.GraphicUrl,this.LV=e.LV,this.HP=e.HP,this.MP=e.MP,this.ATK=e.ATK,this.MGC=e.MGC,this.DEF=e.DEF,this.MDF=e.MDF,this.DEX=e.DEX,this.SPD=e.SPD,this.HitRate=w.monsterHitRate+Math.floor(this.DEX/10),this.CritRate=Math.floor(this.DEX/8),this.nowHP=e.HP,this.nowMP=e.MP,this.GOLD=e.GOLD,this.EXP=e.EXP,this.order=void 0}}const Uw="/app2/img/back/lightning.gif",Fw=n=>(Wn("data-v-bc15ef03"),n=n(),qn(),n),Nw=Fw(()=>L("div",{class:"txtEncount"},"Encounter",-1)),Ow=["src"],kw=Ye({__name:"ImgEncount",setup(n){return(e,t)=>(ie(),_e(ft,null,[Nw,L("img",{class:"imgEncount",src:me(Uw),alt:"imgEncount"},null,8,Ow)],64))}}),Bw=Qe(kw,[["__scopeId","data-v-bc15ef03"]]),Hw="/app2/icon/AttackOrb.png",zw=["src"],Gw=Ye({__name:"IconAttack",setup(n){return(e,t)=>(ie(),_e("img",{class:"Icon",src:me(Hw),alt:"Attack"},null,8,zw))}}),Vw=Qe(Gw,[["__scopeId","data-v-4fd074ac"]]),Ww="/app2/icon/SkillOrb.png",qw=["src"],$w=Ye({__name:"IconSkill",setup(n){return(e,t)=>(ie(),_e("img",{class:"Icon",src:me(Ww),alt:"Attack"},null,8,qw))}}),Xw=Qe($w,[["__scopeId","data-v-77ed884f"]]),Yw="/app2/icon/MagicOrb.png",jw=["src"],Kw=Ye({__name:"IconMagic",setup(n){return(e,t)=>(ie(),_e("img",{class:"Icon",src:me(Yw),alt:"Magic"},null,8,jw))}}),Zw=Qe(Kw,[["__scopeId","data-v-78132e60"]]),Jw="/app2/effect/normal/slash.gif",Qw="/app2/effect/normal/shot.gif",vf="/app2/effect/normal/hit.gif",eC="/app2/effect/monster/claw1.gif",tC={key:2,class:"BattleUI"},nC={class:"monsterGrid"},iC=["onClick","onMouseover"],sC=["src"],rC=["src"],aC=["src"],oC=["src"],lC=["src"],cC={key:3,class:"startTurn"},uC={key:4,class:"endBattle"},fC={key:5,class:"monsterInfo"},dC={class:"monsterName"},hC={class:"progress-bar-hp"},pC={key:6},mC={key:3},_C={class:"attackName",id:"skillName"},gC={key:4,class:"attackName",id:"normalAttackName"},vC=Ye({__name:"Battle",setup(n){const e=ts(),t=Ae(Array(6).fill(null)),i=_t("monsterList"),s=[],r=Ae(Array(6).fill([])),a=Ae(void 0),o=Ae([]),l=Ae(""),c=Ae([]),u=Ae(""),f=Ae(0),d=Ae(0),m=Ae(void 0),g=Ae(),_=Ae([]),p=Ae(new Array(e.characters.length).fill(!1)),h=Ae(null),E=Ae(new Array(e.characters.length).fill(!1)),S=Ae(new Array(e.characters.length).fill(null)),b=Ae(),C=Ae(0),F=Ae(0),R=Ae([]),$=Ae(0),M=Ae("encount");let A=null;const te=Ae(""),K=$t({AttackBtn:{},SkillBtn:{}}),J=B=>e.characters.findIndex(N=>N===B),I=t.value.findIndex(B=>B!==null);Sr(async()=>{for(await li(w.awaitTime),j(),M.value="startTurn";M.value!=="result";)M.value="startTurn",await X()});function j(){const B=Jt(w.monNumMin,w.monNumMax);for(let Y=0;Y<B;Y++){const ye=new xl(i[lo(i.length)]);s.push(ye)}let N=[];for(;N.length<s.length;){const Y=lo(6);N.includes(Y)||N.push(Y)}N.forEach((Y,ye)=>{s[ye].order=Y,t.value[Y]=s[ye]}),console.log(s)}let q=1;async function X(){g.value=void 0,R.value=[...e.characters.filter(B=>B.nowHP>0),...s.filter(B=>B.nowHP>0)],R.value.sort((B,N)=>{let Y=B instanceof rn?B.totalStatus.SPD:B.SPD;return(N instanceof rn?N.totalStatus.SPD:N.SPD)-Y}),await li(w.awaitTime);for(let B=0;B<R.value.length;B++){let N=R.value[B];if(console.log("currentTurn",N),$.value=B,W.value="",_.value=[],o.value=[],N.nowHP>0&&(N instanceof rn?(g.value=N,await le(N),g.value=void 0):N instanceof xl&&(a.value=N,await P(N),a.value=void 0)),!s.some(Y=>Y.nowHP>0)){M.value="endBattle",await li(w.awaitTime),M.value="result";break}if(!e.characters.some(Y=>Y.nowHP>0)){M.value="result";break}await li(w.nextTime)}Se(),q+=1,await li(w.nextTime)}async function le(B){M.value="characterTurn",B.class==w.clsPriest?te.value=w.strMagic:te.value=w.strSkill,await Ve(),M.value="",await ne(B),at(!0)}const he=Ae(!1);let se;function k(B){M.value="characterTurn",se===B?(he.value=!1,at(!0),se=null):(at(),K[B]={transform:"scale(1.5) translateY(-20%)",opacity:1},se=B,B==w.strAttack?(he.value=!1,W.value="oneEnemy",Ie(I),M.value="selectTarget"):he.value=!0)}const W=Ae("");let be;const ve=B=>{he.value=!1,be=B,W.value=B.skill_effect[0].target_type,Ie(I),M.value="selectTarget"},Me=B=>M.value!="selectTarget"||!o.value?!1:o.value.includes(B);function Ie(B){switch(_.value=[],o.value=[],W.value){case"myself":_.value.push(g.value);break;case"oneFriend":_.value.push(g.value);break;case"allFriends":_.value=e.characters.filter(N=>N.nowHP>0);break;case"randomFriend":break;case"oneEnemy":o.value.push(t.value[B]);break;case"columnEnemy":ke(B);break;case"rowEnemy":Ne(B);break;case"allEnemy":o.value=t.value.filter(N=>N!==null);break;case"randomEnemy":o.value=t.value.filter(N=>N!==null);break}}const ke=B=>{for(let N=B%3;N<t.value.length;N+=3)t.value[N]!==null&&o.value.push(t.value[N])},Ne=B=>{let N=B<=2?0:3,Y=B<=2?2:5;for(let ye=N;ye<=Y;ye++)t.value[ye]!==null&&o.value.push(t.value[ye])},Fe=(B,N)=>{B=="over"?(_.value=[],_.value.push(N)):B=="click"&&A&&(A(),A=null)},at=(B=!1)=>{K.AttackBtn=B?{}:{opacity:.5},K.SkillBtn=B?{}:{opacity:.5}};async function Ve(){return new Promise(B=>{A=B})}function x(B,N){t.value[B]&&M.value==="selectTarget"&&(m.value=N,Ie(B))}function U(B,N){t.value[B]&&M.value==="selectTarget"&&(m.value=N,o.value.includes(t.value[B])?A&&(A(),A=null):Ie(B))}async function P(B){M.value="monsterTurn",await Ge(B,z())}const z=()=>{const B=e.characters.filter(ge=>ge.nowHP>0),N=B.reduce((ge,Te)=>ge+Te.totalStatus.Hate,0),Y=B.map(ge=>ge.totalStatus.Hate/N),ye=Math.random();let D=0;for(let ge=0;ge<Y.length;ge++)if(D+=Y[ge],ye<D)return B[ge]};let H,ae,fe;async function ne(B){let N,Y;if(se==w.strAttack)Be(B.name+"'s "+w.strAttack),Y=o.value[0],N=Y.order,r.value[N]=[],oe(B,Y,N),ce(B),await li(w.normalAttackTime+w.effectTime);else{Be(B.name+"'s "+be.name);for(const ye of be.skill_effect){if(H=ye.anime_time,ae=0,fe=0,W.value!=ye.target_type&&pe(ye.target_type,B),W.value=ye.target_type,ye.target==1)O(B,ye,be.name);else if(ye.target==2){if(r.value=Array.from({length:6},()=>[]),ye.target_type=="randomEnemy")for(let D=1;D<=ye.effect_times;D++)Y=o.value[lo(o.value.length)],N=Y.order,oe(B,Y,N,ye),fe+=1;else for(let D of o.value){N=D.order;for(let ge=1;ge<=ye.effect_times;ge++)oe(B,D,N,ye),fe+=1}de(ye)}ae=w.effectTime+fe*w.delayTime,await li(H+ae)}}}function pe(B,N){switch(_.value=[],o.value=[],B){case"myself":_.value.push(N);break;case"allFriends":_.value=e.characters.filter(Y=>Y.nowHP>0);break;case"randomFriend":break;case"allEnemy":o.value=t.value.filter(Y=>Y!==null);break;case"randomEnemy":o.value=t.value.filter(Y=>Y!==null);break}}function oe(B,N,Y,ye){let D=0,ge=0,Te=0,ue=0,Ee=0;if(y(B.totalStatus.HitRate,N.SPD)){se==w.strAttack||se==w.strSkill&&(ye==null?void 0:ye.base_status)==w.strAtk?(D=B.totalStatus.ATK,ge=N.DEF):se==w.strSkill&&(ye==null?void 0:ye.base_status)==w.strMgc&&(D=B.totalStatus.MGC,ge=N.MDF),ue=v(B.totalStatus.CritRate,ge)?w.critDamageRate:w.normalDamageRate,Te=se==w.strAttack?1:ye.effect_amount,Ee=Math.floor((D-ge/1.5)*Te*ue),console.log("characterAttack",D),Ee=Ee<0?0:Ee;const ze=we(Ee);N.nowHP=Ee>N.nowHP?0:N.nowHP-Ee,N.nowHP==0&&(F.value+=N.EXP,C.value+=N.GOLD),r.value[Y].push(ze),Be("> "+Ee+" damage to "+N.name)}else{const ze=we(w.strMiss);r.value[Y].push(ze)}}const we=B=>{const N={top:Jt(w.minEffectTop,w.maxEffectTop)+"%",left:Jt(w.minEffectLeft,w.maxEffectLeft)+"%"};return{effect:B,position:N,visible:!1}};function y(B,N){let Y=B-Math.floor(N/10);return Math.random()<=Y/100}function v(B,N){let Y=B-Math.floor(N/5);return Math.random()<=Y/100}function O(B,N,Y){let ye=0;switch(ye=B.totalStatus[N.base_status]*N.effect_amount,N.effect_type){case"heal":switch(N.target_type){case"myself":case"oneFriend":re(_.value[0],ye,N.effect_kind);break;case"allFriends":for(let D of e.characters)re(D,ye,N.effect_kind);break}break;case"buff":switch(N.target_type){case"myself":case"oneFriend":if(!_.value)return;_.value[0].addBuff(Y,N.effect_kind,ye,N.effect_times),_.value[0].calculateTotalStatus();break;case"allFriends":for(let D of e.characters)D.addBuff(Y,N.effect_kind,ye,N.effect_times),D.calculateTotalStatus();break}break;case"condition":switch(N.target_type){case"myself":case"oneFriend":_.value[0].addCondition(Y,N.effect_kind,ye,N.effect_times);break;case"allFriends":for(let D of e.characters)D.addCondition(Y,N.effect_kind,ye,N.effect_times);break}break}Ce(N)}function re(B,N,Y){console.log("characterHeal",B,Y,N),Y=="nowHP"?B.nowHP=B.nowHP+N>B.totalStatus.HP?B.totalStatus.HP:B.nowHP+N:Y=="nowMP"&&(B.nowMP=B.nowMP+N>B.totalStatus.MP?B.totalStatus.MP:B.nowMP+N),S.value[J(B)]=N,fe+=1,Be("> Recovers "+B.name+"'s "+Y+" by "+N)}function ce(B){if(B.equipment.WEP)switch(B.equipment.WEP.kind){case"Sword":l.value=Jw;break;case"Wand":l.value=vf;break;case"Bow":l.value=Qw;break}else l.value=vf;let N=o.value[0].order;c.value[N]=!0,setTimeout(()=>{u.value="",c.value[N]=!1,Re()},w.normalAttackTime)}function de(B){l.value=B.skill_anime;let N=o.value[0].order;if(B.target_type=="oneEnemy")c.value[N]=!0;else switch(B.target_type){case"columnEnemy":u.value="column",d.value=7+N%3*27;break;case"rowEnemy":u.value="row",f.value=15+Math.floor(N/3)*25;break;case"allEnemy":u.value="all";break;case"randomEnemy":u.value="all";break}setTimeout(()=>{u.value="",c.value[N]=!1,Re()},H)}function Ce(B){switch(console.log("skillEffect",B),B.target_type){case"myself":case"oneFriend":let N=J(_.value[0]);h.value=B.skill_anime,p.value[N]=!0,setTimeout(()=>{p.value[N]=!1,h.value=null,xe(B.effect_type)},H);break;case"allFriends":u.value="all",l.value=B.skill_anime,setTimeout(()=>{l.value="",u.value="",xe(B.effect_type)},H);break}}function xe(B){let N=w.delayTime;b.value=B;for(let Y=0;Y<e.characters.length;Y++)console.log("applyEffectToCharacters",S.value[Y],b.value),S.value[Y]!=null&&(setTimeout(()=>{E.value[Y]=!0,setTimeout(()=>{E.value[Y]=!1,S.value[Y]=null},w.effectTime)},N),N+=w.delayTime,ae=w.effectTime+N)}function Re(){let B=w.delayTime;for(let N of r.value)if(Array.isArray(N))for(let Y of N)setTimeout(()=>{Y.visible=!0,setTimeout(()=>{Y.visible=!1},w.effectTime)},B),B+=w.delayTime;for(let N of o.value)N.nowHP==0&&setTimeout(()=>{t.value=t.value.map(Y=>Y===N?null:Y)},ae)}async function Ge(B,N){console.log("monsterAction",B),tt(B,N);let Y=J(N);_.value=[],_.value.push(N),h.value=eC,p.value[Y]=!0,setTimeout(()=>{p.value[Y]=!1,h.value=null,xe("damage")},w.monsterAttackTime),N.nowHP==0,await li(w.monsterAttackTime+w.effectTime)}function tt(B,N){let Y=0,ye=0,D=0,ge=0;y(B.HitRate,N.totalStatus.SPD)?(Y=B.ATK,ye=N.totalStatus.DEF,D=v(B.CritRate,ye)?w.critDamageRate:w.normalDamageRate,ge=Math.floor((Y-ye/1.5)*D),console.log("monsterAttack",Y),ge=ge<0?0:ge,S.value[J(N)]=ge,N.nowHP=ge>N.nowHP?0:N.nowHP-ge):S.value[J(N)]="MISS"}function Se(){_.value=[],o.value=[];for(let B of e.characters){for(let N of B.conditions)switch(N.status){case"regeneration":re(B,N.value,"nowHP"),xe("heal"),console.log("regeneration",N);break}B.updateBuffs(),B.updateConditions()}}const qe=Ae(null),Be=B=>{qe.value&&qe.value.addLog(B,1)};return(B,N)=>(ie(),_e(ft,null,[M.value=="encount"?(ie(),Rt(Bw,{key:0})):je("",!0),M.value=="result"?(ie(),Rt(Aw,{key:1,getGold:C.value,getExp:F.value},null,8,["getGold","getExp"])):je("",!0),M.value!=="encount"&&M.value!=="result"?(ie(),_e("div",tC,[De(cw,{class:"turnOrder",turnOrder:R.value,numOrder:$.value},null,8,["turnOrder","numOrder"]),L("div",nC,[(ie(!0),_e(ft,null,Xt(t.value,(Y,ye)=>(ie(),_e("div",{key:ye,class:Ot(["monsterCell",{pickMonster:Me(Y),currentMonster:Y!=null&&Y==a.value}])},[Y?(ie(),_e("div",{key:0,onClick:D=>U(ye,Y),onMouseover:D=>x(ye,Y)},[(ie(!0),_e(ft,null,Xt(r.value[ye],(D,ge)=>(ie(),_e("span",{key:ge},[D.visible?(ie(),_e("span",{key:0,class:"monsterEffect",style:Rn(D.position)},Le(D.effect),5)):je("",!0)]))),128)),c.value[ye]?(ie(),_e("img",{key:0,src:l.value,class:"skillOneEffect",alt:"skill effect"},null,8,sC)):je("",!0),L("img",{src:Y.GraphicUrl,class:"monsterImage",alt:"monsterImage"},null,8,rC)],40,iC)):je("",!0)],2))),128))]),u.value=="row"?(ie(),_e("img",{key:0,src:l.value,class:"skillRowEffect",style:Rn({top:f.value+"vh"}),alt:"skill effect"},null,12,aC)):je("",!0),u.value=="column"?(ie(),_e("img",{key:1,src:l.value,class:"skillColEffect",style:Rn({left:d.value+"vw"}),alt:"skill effect"},null,12,oC)):je("",!0),u.value=="all"?(ie(),_e("img",{key:2,src:l.value,class:"skillAllEffect",alt:"skill effect"},null,8,lC)):je("",!0),M.value=="startTurn"?(ie(),_e("div",cC,Le(me(q))+" Turn Start",1)):je("",!0),M.value=="endBattle"?(ie(),_e("div",uC,"Battle Ends")):je("",!0),De(Bh,{class:"CurrentUI",currentCharacter:g.value,targetCharacter:_.value,showCharacterEffect:E.value,toCharacterEffect:S.value,toCharacterEffectType:b.value,showCharacterAnime:p.value,toCharacterAnime:h.value,selectionMode:W.value,onSelectCharacter:Fe},null,8,["currentCharacter","targetCharacter","showCharacterEffect","toCharacterEffect","toCharacterEffectType","showCharacterAnime","toCharacterAnime","selectionMode"]),M.value=="selectTarget"&&m.value?(ie(),_e("div",fC,[L("div",dC,Le(m.value.name),1),L("div",hC,[De(Va,{nowHP:m.value.nowHP,maxHP:m.value.HP},null,8,["nowHP","maxHP"])])])):je("",!0),De(Oh,{ref_key:"actionLog",ref:qe,class:"actionLog"},null,512),M.value=="characterTurn"||M.value=="selectTarget"?(ie(),_e("div",pC,[De(Vw,{id:"IconAttack",class:"IconAttack",onClick:N[0]||(N[0]=Y=>k(me(w).strAttack)),style:Rn(K.AttackBtn)},null,8,["style"]),te.value=="Skill"?(ie(),Rt(Xw,{key:0,id:"IconAttack",class:"IconSkill",onClick:N[1]||(N[1]=Y=>k(me(w).strSkill)),style:Rn(K.SkillBtn)},null,8,["style"])):(ie(),Rt(Zw,{key:1,id:"IconAttack",class:"IconSkill",onClick:N[2]||(N[2]=Y=>k(me(w).strSkill)),style:Rn(K.SkillBtn)},null,8,["style"])),he.value?(ie(),Rt(rh,{key:2,class:"SkillUI",character:g.value,processBattle:he.value,onUseSkill:ve},null,8,["character","processBattle"])):je("",!0),me(se)==me(w).strSkill&&M.value=="selectTarget"?(ie(),_e("div",mC,[L("div",_C,Le(me(be).name),1),De(sh,{class:"skillInfo",skillInfo:me(be).info},null,8,["skillInfo"])])):je("",!0),me(se)==me(w).strAttack?(ie(),_e("div",gC,"Normal Attack")):je("",!0)])):je("",!0)])):je("",!0)],64))}}),xC=Qe(vC,[["__scopeId","data-v-59b7ef0d"]]),MC="/app2/icon/playerPosition.png",SC=Ye({__name:"Map",setup(n){const e=kh(),t=Ae(),i=new Image;i.src=MC;let s=null;const r=()=>{var l;if(vt.length==0||!t.value)return;const o=(l=t.value)==null?void 0:l.getContext("2d");if(o){t.value.height=w.MiniHeight;for(let c=0;c<vt.length;c++)for(let u=0;u<vt[c].length;u++){switch(vt[c][u]){case 0:o.fillStyle=w.MiniWallColor;break;case 1:case 2:o.fillStyle=w.MiniRoomColor;break}o.fillRect(u*3,c*3,3,3)}a()}},a=()=>{var l;const o=(l=t.value)==null?void 0:l.getContext("2d");o&&e.playerPosition&&(s&&(o.fillStyle=w.MiniMoveColor,o.fillRect(Math.floor(s.x/w.BlockSize-1)*3,Math.floor(s.z/w.BlockSize-1)*3,w.BlockSize,w.BlockSize)),o.drawImage(i,Math.floor(e.playerPosition.x/w.BlockSize-1)*3,Math.floor(e.playerPosition.z/w.BlockSize-1)*3,w.BlockSize,w.BlockSize),s=e.playerPosition.clone())};return Et(()=>vt,()=>{Gs(r)},{immediate:!0,deep:!0}),Et(()=>e.playerPosition,()=>{a()},{immediate:!0,deep:!0}),(o,l)=>(ie(),_e("canvas",{ref_key:"MapUI",ref:t},null,512))}}),yC=Qe(SC,[["__scopeId","data-v-6e3af01f"]]),EC=[{mon_id:1,mon_type:1,name:"mon1",GraphicUrl:"img/monster/mon1.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:2,mon_type:1,name:"mon2",GraphicUrl:"img/monster/mon2.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:3,mon_type:1,name:"mon3",GraphicUrl:"img/monster/mon3.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:4,mon_type:1,name:"mon4",GraphicUrl:"img/monster/mon4.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:5,mon_type:1,name:"mon5",GraphicUrl:"img/monster/mon5.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:6,mon_type:1,name:"mon6",GraphicUrl:"img/monster/mon6.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:7,mon_type:1,name:"mon7",GraphicUrl:"img/monster/mon7.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:8,mon_type:1,name:"mon8",GraphicUrl:"img/monster/mon8.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:9,mon_type:1,name:"boss3",GraphicUrl:"img/monster/boss3.png",LV:10,HP:200,MP:8,ATK:50,MGC:50,DEF:50,MDF:50,DEX:50,SPD:50,GOLD:100,EXP:300},{mon_id:10,mon_type:1,name:"boss5",GraphicUrl:"img/monster/boss5.png",LV:20,HP:500,MP:100,ATK:100,MGC:100,DEF:100,MDF:100,DEX:100,SPD:50,GOLD:1e3,EXP:1e3}],bC={class:"UI"},TC={key:0},AC={key:1},wC={key:2},CC={key:0},RC={key:1},PC=Ye({__name:"App",setup(n){const e=$n();console.log("activeSkills",Jd),console.log("passiveSkills",Kd);const t=ts();t.setParty(),console.log("party",t.characters);const i=nh();i.setEquipBag(),console.log("equipmentType",i.equipmentType),console.log("equipmentItem",i.equipmentItem);const s=Ae(EC.map(a=>new xl(a)));yn("monsterList",s.value),console.log("monsterList",s.value);const r=Ci();return(a,o)=>(ie(),_e("div",bC,[me(e).status==me(w).statusOpening?(ie(),_e("div",TC,[De(B_)])):me(e).status==me(w).statusTown?(ie(),_e("div",AC,[De(pS)])):me(e).status==me(w).statusDungeon?(ie(),_e("div",wC,[me(e).process==me(w).processSearch?(ie(),_e("div",CC,[Bt(De(Bh,{class:"CurrentUI"},null,512),[[Ht,me(r).current]]),De(Xl)])):me(e).process==me(w).processBattle?(ie(),_e("div",RC,[De(xC)])):je("",!0),De(iw),Bt(De(yC,{class:"MapUI"},null,512),[[Ht,me(r).map]])])):je("",!0)]))}}),LC=Qe(PC,[["__scopeId","data-v-de1773ff"]]),DC={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},IC={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function UC(n,e){let t;function i(){t=Al(),t.run(()=>e.length?e(()=>{t==null||t.stop(),i()}):e())}Et(n,s=>{s&&!t?i():s||(t==null||t.stop(),t=void 0)},{immediate:!0}),sd(()=>{t==null||t.stop()})}const zn=typeof window<"u",FC=zn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function NC(n,e,t){const i=e.length-1;if(i<0)return n===void 0?t:n;for(let s=0;s<i;s++){if(n==null)return t;n=n[e[s]]}return n==null||n[e[i]]===void 0?t:n[e[i]]}function xf(n,e,t){return n==null||!e||typeof e!="string"?t:n[e]!==void 0?n[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),NC(n,e.split("."),t))}function Hh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:n},(t,i)=>e+i)}function Mf(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function Vo(n,e){return e.every(t=>n.hasOwnProperty(t))}function OC(n,e){const t={},i=new Set(Object.keys(n));for(const s of e)i.has(s)&&(t[s]=n[s]);return t}function kC(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(t,n))}function Sf(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return n+t.repeat(Math.max(0,e-n.length))}function yf(n,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-n.length))+n}function BC(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let i=0;for(;i<n.length;)t.push(n.substr(i,e)),i+=e;return t}function wi(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const i={};for(const s in n)i[s]=n[s];for(const s in e){const r=n[s],a=e[s];if(Mf(r)&&Mf(a)){i[s]=wi(r,a,t);continue}if(Array.isArray(r)&&Array.isArray(a)&&t){i[s]=t(r,a);continue}i[s]=a}return i}function Ls(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Ls.cache.has(n))return Ls.cache.get(n);const e=n.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Ls.cache.set(n,e),e}Ls.cache=new Map;const Ss=2.4,Ef=.2126729,bf=.7151522,Tf=.072175,HC=.55,zC=.58,GC=.57,VC=.62,oa=.03,Af=1.45,WC=5e-4,qC=1.25,$C=1.25,wf=.078,Cf=12.82051282051282,la=.06,Rf=.001;function Pf(n,e){const t=(n.r/255)**Ss,i=(n.g/255)**Ss,s=(n.b/255)**Ss,r=(e.r/255)**Ss,a=(e.g/255)**Ss,o=(e.b/255)**Ss;let l=t*Ef+i*bf+s*Tf,c=r*Ef+a*bf+o*Tf;if(l<=oa&&(l+=(oa-l)**Af),c<=oa&&(c+=(oa-c)**Af),Math.abs(c-l)<WC)return 0;let u;if(c>l){const f=(c**HC-l**zC)*qC;u=f<Rf?0:f<wf?f-f*Cf*la:f-la}else{const f=(c**VC-l**GC)*$C;u=f>-Rf?0:f>-wf?f-f*Cf*la:f+la}return u*100}const Ca=.20689655172413793,XC=n=>n>Ca**3?Math.cbrt(n):n/(3*Ca**2)+4/29,YC=n=>n>Ca?n**3:3*Ca**2*(n-4/29);function zh(n){const e=XC,t=e(n[1]);return[116*t-16,500*(e(n[0]/.95047)-t),200*(t-e(n[2]/1.08883))]}function Gh(n){const e=YC,t=(n[0]+16)/116;return[e(t+n[1]/500)*.95047,e(t),e(t-n[2]/200)*1.08883]}const jC=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],KC=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055,ZC=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],JC=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function Vh(n){const e=Array(3),t=KC,i=jC;for(let s=0;s<3;++s)e[s]=Math.round(kC(t(i[s][0]*n[0]+i[s][1]*n[1]+i[s][2]*n[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function sc(n){let{r:e,g:t,b:i}=n;const s=[0,0,0],r=JC,a=ZC;e=r(e/255),t=r(t/255),i=r(i/255);for(let o=0;o<3;++o)s[o]=a[o][0]*e+a[o][1]*t+a[o][2]*i;return s}const Lf=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,QC={rgb:(n,e,t,i)=>({r:n,g:e,b:t,a:i}),rgba:(n,e,t,i)=>({r:n,g:e,b:t,a:i}),hsl:(n,e,t,i)=>Df({h:n,s:e,l:t,a:i}),hsla:(n,e,t,i)=>Df({h:n,s:e,l:t,a:i}),hsv:(n,e,t,i)=>xr({h:n,s:e,v:t,a:i}),hsva:(n,e,t,i)=>xr({h:n,s:e,v:t,a:i})};function ii(n){if(typeof n=="number")return{r:(n&16711680)>>16,g:(n&65280)>>8,b:n&255};if(typeof n=="string"&&Lf.test(n)){const{groups:e}=n.match(Lf),{fn:t,values:i}=e,s=i.split(/,\s*/).map(r=>r.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(r)/100:parseFloat(r));return QC[t](...s)}else if(typeof n=="string"){let e=n.startsWith("#")?n.slice(1):n;return[3,4].includes(e.length)?e=e.split("").map(t=>t+t).join(""):[6,8].includes(e.length),tR(e)}else if(typeof n=="object"){if(Vo(n,["r","g","b"]))return n;if(Vo(n,["h","s","l"]))return xr(Wh(n));if(Vo(n,["h","s","v"]))return xr(n)}throw new TypeError(`Invalid color: ${n==null?n:String(n)||n.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function xr(n){const{h:e,s:t,v:i,a:s}=n,r=o=>{const l=(o+e/60)%6;return i-i*t*Math.max(Math.min(l,4-l,1),0)},a=[r(5),r(3),r(1)].map(o=>Math.round(o*255));return{r:a[0],g:a[1],b:a[2],a:s}}function Df(n){return xr(Wh(n))}function Wh(n){const{h:e,s:t,l:i,a:s}=n,r=i+t*Math.min(i,1-i),a=r===0?0:2-2*i/r;return{h:e,s:a,v:r,a:s}}function ca(n){const e=Math.round(n).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function eR(n){let{r:e,g:t,b:i,a:s}=n;return`#${[ca(e),ca(t),ca(i),s!==void 0?ca(Math.round(s*255)):""].join("")}`}function tR(n){n=nR(n);let[e,t,i,s]=BC(n,2).map(r=>parseInt(r,16));return s=s===void 0?s:s/255,{r:e,g:t,b:i,a:s}}function nR(n){return n.startsWith("#")&&(n=n.slice(1)),n=n.replace(/([^0-9a-f])/gi,"F"),(n.length===3||n.length===4)&&(n=n.split("").map(e=>e+e).join("")),n.length!==6&&(n=Sf(Sf(n,6),8,"F")),n}function iR(n,e){const t=zh(sc(n));return t[0]=t[0]+e*10,Vh(Gh(t))}function sR(n,e){const t=zh(sc(n));return t[0]=t[0]-e*10,Vh(Gh(t))}function rR(n){const e=ii(n);return sc(e)[1]}function aR(n){const e=Math.abs(Pf(ii(0),ii(n)));return Math.abs(Pf(ii(16777215),ii(n)))>Math.min(e,50)?"#fff":"#000"}function qh(n,e){return t=>Object.keys(n).reduce((i,s)=>{const a=typeof n[s]=="object"&&n[s]!=null&&!Array.isArray(n[s])?n[s]:{type:n[s]};return t&&s in t?i[s]={...a,default:t[s]}:i[s]=a,e&&!i[s].source&&(i[s].source=e),i},{})}const Mr=Symbol.for("vuetify:defaults");function oR(n){return Ae(n)}function $h(){const n=_t(Mr);if(!n)throw new Error("[Vuetify] Could not find defaults instance");return n}function lR(n,e){var t,i;return typeof((t=n.props)==null?void 0:t[e])<"u"||typeof((i=n.props)==null?void 0:i[Ls(e)])<"u"}function cR(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:$h();const i=ja("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=Pt(()=>{var l;return(l=t.value)==null?void 0:l[n._as??e]}),r=new Proxy(n,{get(l,c){var f,d,m,g;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=s.value)==null?void 0:f[c],u].filter(_=>_!=null):typeof c=="string"&&!lR(i.vnode,c)?((d=s.value)==null?void 0:d[c])??((g=(m=t.value)==null?void 0:m.global)==null?void 0:g[c])??u:u}}),a=As();Fl(()=>{if(s.value){const l=Object.entries(s.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});a.value=l.length?Object.fromEntries(l):void 0}else a.value=void 0});function o(){const l=fR(Mr,i);yn(Mr,Pt(()=>a.value?wi((l==null?void 0:l.value)??{},a.value):l==null?void 0:l.value))}return{props:r,provideSubDefaults:o}}function wr(n){if(n._setup=n._setup??n.setup,!n.name)return n;if(n._setup){n.props=qh(n.props??{},n.name)();const e=Object.keys(n.props).filter(t=>t!=="class"&&t!=="style");n.filterProps=function(i){return OC(i,e)},n.props._as=String,n.setup=function(i,s){const r=$h();if(!r.value)return n._setup(i,s);const{props:a,provideSubDefaults:o}=cR(i,i._as??n.name,r),l=n._setup(a,s);return o(),l}}return n}function uR(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(n?wr:Ye)(e)}function ja(n,e){const t=jm();if(!t)throw new Error(`[Vuetify] ${n} ${e||"must be called from inside a setup function"}`);return t}let Xh=0,ma=new WeakMap;function Yh(){const n=ja("getUid");if(ma.has(n))return ma.get(n);{const e=Xh++;return ma.set(n,e),e}}Yh.reset=()=>{Xh=0,ma=new WeakMap};function fR(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ja("injectSelf");const{provides:t}=e;if(t&&n in t)return t[n]}function dR(n,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const r=ja("useProxiedModel"),a=Ae(n[e]!==void 0?n[e]:t),o=Ls(e),c=Pt(o!==e?()=>{var f,d,m,g;return n[e],!!(((f=r.vnode.props)!=null&&f.hasOwnProperty(e)||(d=r.vnode.props)!=null&&d.hasOwnProperty(o))&&((m=r.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)||(g=r.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${o}`)))}:()=>{var f,d;return n[e],!!((f=r.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=r.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});UC(()=>!c.value,()=>{Et(()=>n[e],f=>{a.value=f})});const u=Pt({get(){const f=n[e];return i(c.value?f:a.value)},set(f){const d=s(f),m=rt(c.value?n[e]:a.value);m===d||i(m)===f||(a.value=d,r==null||r.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?n[e]:a.value}),u}const If="$vuetify.",Uf=(n,e)=>n.replace(/\{(\d+)\}/g,(t,i)=>String(e[+i])),jh=(n,e,t)=>function(i){for(var s=arguments.length,r=new Array(s>1?s-1:0),a=1;a<s;a++)r[a-1]=arguments[a];if(!i.startsWith(If))return Uf(i,r);const o=i.replace(If,""),l=n.value&&t.value[n.value],c=e.value&&t.value[e.value];let u=xf(l,o,null);return u||(`${i}${n.value}`,u=xf(c,o,null)),u||(u=i),typeof u!="string"&&(u=i),Uf(u,r)};function Kh(n,e){return(t,i)=>new Intl.NumberFormat([n.value,e.value],i).format(t)}function Wo(n,e,t){const i=dR(n,e,n[e]??t.value);return i.value=n[e]??t.value,Et(t,s=>{n[e]==null&&(i.value=t.value)}),i}function Zh(n){return e=>{const t=Wo(e,"locale",n.current),i=Wo(e,"fallback",n.fallback),s=Wo(e,"messages",n.messages);return{name:"vuetify",current:t,fallback:i,messages:s,t:jh(t,i,s),n:Kh(t,i),provide:Zh({current:t,fallback:i,messages:s})}}}function hR(n){const e=As((n==null?void 0:n.locale)??"en"),t=As((n==null?void 0:n.fallback)??"en"),i=Ae({en:DC,...n==null?void 0:n.messages});return{name:"vuetify",current:e,fallback:t,messages:i,t:jh(e,t,i),n:Kh(e,t),provide:Zh({current:e,fallback:t,messages:i})}}const Ff=Symbol.for("vuetify:locale");function pR(n){return n.name!=null}function mR(n){const e=n!=null&&n.adapter&&pR(n==null?void 0:n.adapter)?n==null?void 0:n.adapter:hR(n),t=_R(e,n);return{...e,...t}}function _R(n,e){const t=Ae((e==null?void 0:e.rtl)??IC),i=Pt(()=>t.value[n.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:Pt(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}const Ml={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function gR(n,e){const t=[];let i=[];const s=Jh(n),r=Qh(n),a=(s.getDay()-Ml[e.slice(-2).toUpperCase()]+7)%7,o=(r.getDay()-Ml[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<a;l++){const c=new Date(s);c.setDate(c.getDate()-(a-l)),i.push(c)}for(let l=1;l<=r.getDate();l++){const c=new Date(n.getFullYear(),n.getMonth(),l);i.push(c),i.length===7&&(t.push(i),i=[])}for(let l=1;l<7-o;l++){const c=new Date(r);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&t.push(i),t}function vR(n){const e=new Date(n);for(;e.getDay()!==0;)e.setDate(e.getDate()-1);return e}function xR(n){const e=new Date(n);for(;e.getDay()!==6;)e.setDate(e.getDate()+1);return e}function Jh(n){return new Date(n.getFullYear(),n.getMonth(),1)}function Qh(n){return new Date(n.getFullYear(),n.getMonth()+1,0)}function MR(n){const e=n.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const SR=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function ep(n){if(n==null)return new Date;if(n instanceof Date)return n;if(typeof n=="string"){let e;if(SR.test(n))return MR(n);if(e=Date.parse(n),!isNaN(e))return new Date(e)}return null}const Nf=new Date(2e3,0,2);function yR(n){const e=Ml[n.slice(-2).toUpperCase()];return Hh(7).map(t=>{const i=new Date(Nf);i.setDate(Nf.getDate()+e+t);const s=new Intl.DateTimeFormat(n,{weekday:"short"}).format(i);return s.charAt(0).toUpperCase()+s.slice(1)})}function ER(n,e,t,i){const s=ep(n)??new Date,r=i==null?void 0:i[e];if(typeof r=="function")return r(s,e,t);let a={};switch(e){case"fullDateWithWeekday":a={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"hours12h":a={hour:"numeric",hour12:!0};break;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":a={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"dayOfMonth":a={day:"numeric"};break;case"shortDate":a={year:"2-digit",month:"numeric",day:"numeric"};break;case"weekdayShort":a={weekday:"short"};break;case"year":a={year:"numeric"};break;default:a=r??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(t,a).format(s)}function bR(n,e){const t=n.toJsDate(e),i=t.getFullYear(),s=yf(String(t.getMonth()+1),2,"0"),r=yf(String(t.getDate()),2,"0");return`${i}-${s}-${r}`}function TR(n){const[e,t,i]=n.split("-").map(Number);return new Date(e,t-1,i)}function AR(n,e){const t=new Date(n);return t.setMinutes(t.getMinutes()+e),t}function wR(n,e){const t=new Date(n);return t.setHours(t.getHours()+e),t}function CR(n,e){const t=new Date(n);return t.setDate(t.getDate()+e),t}function RR(n,e){const t=new Date(n);return t.setDate(t.getDate()+e*7),t}function PR(n,e){const t=new Date(n);return t.setMonth(t.getMonth()+e),t}function LR(n){return n.getFullYear()}function DR(n){return n.getMonth()}function IR(n){return new Date(n.getFullYear(),n.getMonth()+1,1)}function UR(n){return n.getHours()}function FR(n){return n.getMinutes()}function NR(n){return new Date(n.getFullYear(),0,1)}function OR(n){return new Date(n.getFullYear(),11,31)}function kR(n,e){return Sl(n,e[0])&&HR(n,e[1])}function BR(n){const e=new Date(n);return e instanceof Date&&!isNaN(e.getTime())}function Sl(n,e){return n.getTime()>e.getTime()}function HR(n,e){return n.getTime()<e.getTime()}function Of(n,e){return n.getTime()===e.getTime()}function zR(n,e){return n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function GR(n,e){return n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function VR(n,e,t){const i=new Date(n),s=new Date(e);return t==="month"?i.getMonth()-s.getMonth()+(i.getFullYear()-s.getFullYear())*12:Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24))}function WR(n,e){const t=new Date(n);return t.setHours(e),t}function qR(n,e){const t=new Date(n);return t.setMinutes(e),t}function $R(n,e){const t=new Date(n);return t.setMonth(e),t}function XR(n,e){const t=new Date(n);return t.setFullYear(e),t}function YR(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate())}function jR(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate(),23,59,59,999)}class KR{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return ep(e)}toJsDate(e){return e}toISO(e){return bR(this,e)}parseISO(e){return TR(e)}addMinutes(e,t){return AR(e,t)}addHours(e,t){return wR(e,t)}addDays(e,t){return CR(e,t)}addWeeks(e,t){return RR(e,t)}addMonths(e,t){return PR(e,t)}getWeekArray(e){return gR(e,this.locale)}startOfWeek(e){return vR(e)}endOfWeek(e){return xR(e)}startOfMonth(e){return Jh(e)}endOfMonth(e){return Qh(e)}format(e,t){return ER(e,t,this.locale,this.formats)}isEqual(e,t){return Of(e,t)}isValid(e){return BR(e)}isWithinRange(e,t){return kR(e,t)}isAfter(e,t){return Sl(e,t)}isBefore(e,t){return!Sl(e,t)&&!Of(e,t)}isSameDay(e,t){return zR(e,t)}isSameMonth(e,t){return GR(e,t)}setMinutes(e,t){return qR(e,t)}setHours(e,t){return WR(e,t)}setMonth(e,t){return $R(e,t)}setYear(e,t){return XR(e,t)}getDiff(e,t,i){return VR(e,t,i)}getWeekdays(){return yR(this.locale)}getYear(e){return LR(e)}getMonth(e){return DR(e)}getNextMonth(e){return IR(e)}getHours(e){return UR(e)}getMinutes(e){return FR(e)}startOfDay(e){return YR(e)}endOfDay(e){return jR(e)}startOfYear(e){return NR(e)}endOfYear(e){return OR(e)}}const ZR=Symbol.for("vuetify:date-options"),kf=Symbol.for("vuetify:date-adapter");function JR(n,e){const t=wi({adapter:KR,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},n);return{options:t,instance:QR(t,e)}}function QR(n,e){const t=$t(typeof n.adapter=="function"?new n.adapter({locale:n.locale[e.current.value]??e.current.value,formats:n.formats}):n.adapter);return Et(e.current,i=>{t.locale=n.locale[i]??i??t.locale}),t}const Bf=Symbol.for("vuetify:display"),Hf={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},eP=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Hf;return wi(Hf,n)};function zf(n){return zn&&!n?window.innerWidth:typeof n=="object"&&n.clientWidth||0}function Gf(n){return zn&&!n?window.innerHeight:typeof n=="object"&&n.clientHeight||0}function Vf(n){const e=zn&&!n?window.navigator.userAgent:"ssr";function t(g){return!!e.match(g)}const i=t(/android/i),s=t(/iphone|ipad|ipod/i),r=t(/cordova/i),a=t(/electron/i),o=t(/chrome/i),l=t(/edge/i),c=t(/firefox/i),u=t(/opera/i),f=t(/win/i),d=t(/mac/i),m=t(/linux/i);return{android:i,ios:s,cordova:r,electron:a,chrome:o,edge:l,firefox:c,opera:u,win:f,mac:d,linux:m,touch:FC,ssr:e==="ssr"}}function tP(n,e){const{thresholds:t,mobileBreakpoint:i}=eP(n),s=As(Gf(e)),r=As(Vf(e)),a=$t({}),o=As(zf(e));function l(){s.value=Gf(),o.value=zf()}function c(){l(),r.value=Vf()}return Fl(()=>{const u=o.value<t.sm,f=o.value<t.md&&!u,d=o.value<t.lg&&!(f||u),m=o.value<t.xl&&!(d||f||u),g=o.value<t.xxl&&!(m||d||f||u),_=o.value>=t.xxl,p=u?"xs":f?"sm":d?"md":m?"lg":g?"xl":"xxl",h=typeof i=="number"?i:t[i],E=o.value<h;a.xs=u,a.sm=f,a.md=d,a.lg=m,a.xl=g,a.xxl=_,a.smAndUp=!u,a.mdAndUp=!(u||f),a.lgAndUp=!(u||f||d),a.xlAndUp=!(u||f||d||m),a.smAndDown=!(d||m||g||_),a.mdAndDown=!(m||g||_),a.lgAndDown=!(g||_),a.xlAndDown=!_,a.name=p,a.height=s.value,a.width=o.value,a.mobile=E,a.mobileBreakpoint=i,a.platform=r.value,a.thresholds=t}),zn&&window.addEventListener("resize",l,{passive:!0}),{...Sd(a),update:c,ssr:!!e}}const nP={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},iP={component:n=>zt(tp,{...n,class:"mdi"})},sP=[String,Function,Object,Array],Wf=Symbol.for("vuetify:icons"),Ka=qh({icon:{type:sP},tag:{type:String,required:!0}},"icon");uR()({name:"VComponentIcon",props:Ka(),setup(n,e){let{slots:t}=e;return()=>{const i=n.icon;return De(n.tag,null,{default:()=>{var s;return[n.icon?De(i,null,null):(s=t.default)==null?void 0:s.call(t)]}})}}});const rP=wr({name:"VSvgIcon",inheritAttrs:!1,props:Ka(),setup(n,e){let{attrs:t}=e;return()=>De(n.tag,Hd(t,{style:null}),{default:()=>[De("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(n.icon)?n.icon.map(i=>Array.isArray(i)?De("path",{d:i[0],"fill-opacity":i[1]},null):De("path",{d:i},null)):De("path",{d:n.icon},null)])]})}});wr({name:"VLigatureIcon",props:Ka(),setup(n){return()=>De(n.tag,null,{default:()=>[n.icon]})}});const tp=wr({name:"VClassIcon",props:Ka(),setup(n){return()=>De(n.tag,{class:n.icon},null)}}),aP={svg:{component:rP},class:{component:tp}};function oP(n){return wi({defaultSet:"mdi",sets:{...aP,mdi:iP},aliases:{...nP,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},n)}const qf=Symbol.for("vuetify:theme");function $f(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function lP(){var i,s;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$f();const e=$f();if(!n)return{...e,isDisabled:!0};const t={};for(const[r,a]of Object.entries(n.themes??{})){const o=a.dark||r==="dark"?(i=e.themes)==null?void 0:i.dark:(s=e.themes)==null?void 0:s.light;t[r]=wi(o,a)}return wi(e,{...n,themes:t})}function cP(n){const e=lP(n),t=Ae(e.defaultTheme),i=Ae(e.themes),s=Pt(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const m=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const g of e.variations.colors){const _=m.colors[g];if(_)for(const p of["lighten","darken"]){const h=p==="lighten"?iR:sR;for(const E of Hh(e.variations[p],1))m.colors[`${g}-${p}-${E}`]=eR(h(ii(_),E))}}for(const g of Object.keys(m.colors)){if(/^on-[a-z]/.test(g)||m.colors[`on-${g}`])continue;const _=`on-${g}`,p=ii(m.colors[g]);m.colors[_]=aR(p)}}return u}),r=Pt(()=>s.value[t.value]),a=Pt(()=>{const u=[];r.value.dark&&Oi(u,":root",["color-scheme: dark"]),Oi(u,":root",Xf(r.value));for(const[g,_]of Object.entries(s.value))Oi(u,`.v-theme--${g}`,[`color-scheme: ${_.dark?"dark":"normal"}`,...Xf(_)]);const f=[],d=[],m=new Set(Object.values(s.value).flatMap(g=>Object.keys(g.colors)));for(const g of m)/^on-[a-z]/.test(g)?Oi(d,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(Oi(f,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),Oi(d,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),Oi(d,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...f,...d),u.map((g,_)=>_===0?g:`    ${g}`).join("")});function o(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const m=f.push(o);zn&&Et(a,()=>{m.patch(o)})}else zn?(f.addHeadObjs(Pt(o)),Fl(()=>f.updateDOM())):f.addHeadObjs(o());else{let g=function(){if(typeof document<"u"&&!m){const _=document.createElement("style");_.type="text/css",_.id="vuetify-theme-stylesheet",e.cspNonce&&_.setAttribute("nonce",e.cspNonce),m=_,document.head.appendChild(m)}m&&(m.innerHTML=a.value)};var d=g;let m=zn?document.getElementById("vuetify-theme-stylesheet"):null;zn?Et(a,g,{immediate:!0}):g()}}const c=Pt(()=>e.isDisabled?void 0:`v-theme--${t.value}`);return{install:l,isDisabled:e.isDisabled,name:t,themes:i,current:r,computedThemes:s,themeClasses:c,styles:a,global:{name:t,current:r}}}function Oi(n,e,t){n.push(`${e} {
`,...t.map(i=>`  ${i};
`),`}
`)}function Xf(n){const e=n.dark?2:1,t=n.dark?1:2,i=[];for(const[s,r]of Object.entries(n.colors)){const a=ii(r);i.push(`--v-theme-${s}: ${a.r},${a.g},${a.b}`),s.startsWith("on-")||i.push(`--v-theme-${s}-overlay-multiplier: ${rR(r)>.18?e:t}`)}for(const[s,r]of Object.entries(n.variables)){const a=typeof r=="string"&&r.startsWith("#")?ii(r):void 0,o=a?`${a.r}, ${a.g}, ${a.b}`:void 0;i.push(`--v-${s}: ${o??r}`)}return i}function np(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...t}=n,i=wi(e,t),{aliases:s={},components:r={},directives:a={}}=i,o=oR(i.defaults),l=tP(i.display,i.ssr),c=cP(i.theme),u=oP(i.icons),f=mR(i.locale),d=JR(i.date,f);return{install:g=>{for(const _ in a)g.directive(_,a[_]);for(const _ in r)g.component(_,r[_]);for(const _ in s)g.component(_,wr({...s[_],name:_,aliasName:s[_].name}));if(c.install(g),g.provide(Mr,o),g.provide(Bf,l),g.provide(qf,c),g.provide(Wf,u),g.provide(Ff,f),g.provide(ZR,d.options),g.provide(kf,d.instance),zn&&i.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:_}=g;g.mount=function(){const p=_(...arguments);return Gs(()=>l.update()),g.mount=_,p}}Yh.reset(),g.mixin({computed:{$vuetify(){return $t({defaults:ys.call(this,Mr),display:ys.call(this,Bf),theme:ys.call(this,qf),icons:ys.call(this,Wf),locale:ys.call(this,Ff),date:ys.call(this,kf)})}}})},defaults:o,display:l,theme:c,icons:u,locale:f,date:d}}const uP="3.4.9";np.version=uP;function ys(n){var i,s;const e=this.$,t=((i=e.parent)==null?void 0:i.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(t&&n in t)return t[n]}const fP=np(),dP="modulepreload",hP=function(n){return"/app2/"+n},Yf={},pP=function(e,t,i){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=hP(r),r in Yf)return;Yf[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":dP,a||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),a)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};async function mP(){(await pP(()=>import("./webfontloader-NopmBVuw.js").then(e=>e.w),__vite__mapDeps([]))).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}mP();const _P=w_();b_(LC).use(fP).use(_P).mount("#app");
//# sourceMappingURL=index-AmjpDZdG.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}