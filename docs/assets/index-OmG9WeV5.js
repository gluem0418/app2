var fp=Object.defineProperty;var dp=(n,e,t)=>e in n?fp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ue=(n,e,t)=>(dp(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Al(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const gt={},ws=[],Wn=()=>{},hp=()=>!1,pp=/^on[^a-z]/,La=n=>pp.test(n),wl=n=>n.startsWith("onUpdate:"),Wt=Object.assign,Cl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},mp=Object.prototype.hasOwnProperty,ct=(n,e)=>mp.call(n,e),Ye=Array.isArray,Cs=n=>Ia(n)==="[object Map]",Jf=n=>Ia(n)==="[object Set]",tt=n=>typeof n=="function",Ut=n=>typeof n=="string",Da=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Qf=n=>(xt(n)||tt(n))&&tt(n.then)&&tt(n.catch),ed=Object.prototype.toString,Ia=n=>ed.call(n),_p=n=>Ia(n).slice(8,-1),td=n=>Ia(n)==="[object Object]",Rl=n=>Ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,da=Al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},gp=/-(\w)/g,Us=Ua(n=>n.replace(gp,(e,t)=>t?t.toUpperCase():"")),vp=/\B([A-Z])/g,zs=Ua(n=>n.replace(vp,"-$1").toLowerCase()),nd=Ua(n=>n.charAt(0).toUpperCase()+n.slice(1)),so=Ua(n=>n?`on${nd(n)}`:""),Ji=(n,e)=>!Object.is(n,e),ro=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},va=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Mp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let mc;const Yo=()=>mc||(mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rn(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ut(i)?Ep(i):Rn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ut(n)||xt(n))return n}const xp=/;(?![^(]*\))/g,Sp=/:([^]+)/,yp=/\/\*[^]*?\*\//g;function Ep(n){const e={};return n.replace(yp,"").split(xp).forEach(t=>{if(t){const i=t.split(Sp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ht(n){let e="";if(Ut(n))e=n;else if(Ye(n))for(let t=0;t<n.length;t++){const i=Ht(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tp=Al(bp);function id(n){return!!n||n===""}const Re=n=>Ut(n)?n:n==null?"":Ye(n)||xt(n)&&(n.toString===ed||!tt(n.toString))?JSON.stringify(n,sd,2):String(n),sd=(n,e)=>e&&e.__v_isRef?sd(n,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:Jf(e)?{[`Set(${e.size})`]:[...e.values()]}:xt(e)&&!Ye(e)&&!td(e)?String(e):e;let _n;class rd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_n,!e&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=_n;try{return _n=this,e()}finally{_n=t}}}on(){_n=this}off(){_n=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Pl(n){return new rd(n)}function Ap(n,e=_n){e&&e.active&&e.effects.push(n)}function ad(){return _n}function od(n){_n&&_n.cleanups.push(n)}const Ll=n=>{const e=new Set(n);return e.w=0,e.n=0,e},ld=n=>(n.w&bi)>0,cd=n=>(n.n&bi)>0,wp=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=bi},Cp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];ld(s)&&!cd(s)?s.delete(n):e[t++]=s,s.w&=~bi,s.n&=~bi}e.length=t}},Ma=new WeakMap;let ir=0,bi=1;const jo=30;let Ln;const qi=Symbol(""),Ko=Symbol("");class Dl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ap(this,i)}run(){if(!this.active)return this.fn();let e=Ln,t=vi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ln,Ln=this,vi=!0,bi=1<<++ir,ir<=jo?wp(this):_c(this),this.fn()}finally{ir<=jo&&Cp(this),bi=1<<--ir,Ln=this.parent,vi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ln===this?this.deferStop=!0:this.active&&(_c(this),this.onStop&&this.onStop(),this.active=!1)}}function _c(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let vi=!0;const ud=[];function Gs(){ud.push(vi),vi=!1}function Vs(){const n=ud.pop();vi=n===void 0?!0:n}function fn(n,e,t){if(vi&&Ln){let i=Ma.get(n);i||Ma.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Ll()),fd(s)}}function fd(n,e){let t=!1;ir<=jo?cd(n)||(n.n|=bi,t=!ld(n)):t=!n.has(Ln),t&&(n.add(Ln),Ln.deps.push(n))}function si(n,e,t,i,s,r){const a=Ma.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ye(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!Da(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ye(n)?Rl(t)&&o.push(a.get("length")):(o.push(a.get(qi)),Cs(n)&&o.push(a.get(Ko)));break;case"delete":Ye(n)||(o.push(a.get(qi)),Cs(n)&&o.push(a.get(Ko)));break;case"set":Cs(n)&&o.push(a.get(qi));break}if(o.length===1)o[0]&&Zo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Zo(Ll(l))}}function Zo(n,e){const t=Ye(n)?n:[...n];for(const i of t)i.computed&&gc(i);for(const i of t)i.computed||gc(i)}function gc(n,e){(n!==Ln||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function Rp(n,e){var t;return(t=Ma.get(n))==null?void 0:t.get(e)}const Pp=Al("__proto__,__v_isRef,__isVue"),dd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Da)),vc=Lp();function Lp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=lt(this);for(let r=0,a=this.length;r<a;r++)fn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(lt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Gs();const i=lt(this)[e].apply(this,t);return Vs(),i}}),n}function Dp(n){const e=lt(this);return fn(e,"has",n),e.hasOwnProperty(n)}class hd{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const s=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw"&&i===(s?r?$p:gd:r?_d:md).get(e))return e;const a=Ye(e);if(!s){if(a&&ct(vc,t))return Reflect.get(vc,t,i);if(t==="hasOwnProperty")return Dp}const o=Reflect.get(e,t,i);return(Da(t)?dd.has(t):Pp(t))||(s||fn(e,"get",t),r)?o:At(o)?a&&Rl(t)?o:o.value:xt(o)?s?vd(o):Yt(o):o}}class pd extends hd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(Fs(r)&&At(r)&&!At(i))return!1;if(!this._shallow&&(!xa(i)&&!Fs(i)&&(r=lt(r),i=lt(i)),!Ye(e)&&At(r)&&!At(i)))return r.value=i,!0;const a=Ye(e)&&Rl(t)?Number(t)<e.length:ct(e,t),o=Reflect.set(e,t,i,s);return e===lt(s)&&(a?Ji(i,r)&&si(e,"set",t,i):si(e,"add",t,i)),o}deleteProperty(e,t){const i=ct(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&si(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Da(t)||!dd.has(t))&&fn(e,"has",t),i}ownKeys(e){return fn(e,"iterate",Ye(e)?"length":qi),Reflect.ownKeys(e)}}class Ip extends hd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Up=new pd,Fp=new Ip,kp=new pd(!0),Il=n=>n,Fa=n=>Reflect.getPrototypeOf(n);function Dr(n,e,t=!1,i=!1){n=n.__v_raw;const s=lt(n),r=lt(e);t||(Ji(e,r)&&fn(s,"get",e),fn(s,"get",r));const{has:a}=Fa(s),o=i?Il:t?kl:dr;if(a.call(s,e))return o(n.get(e));if(a.call(s,r))return o(n.get(r));n!==s&&n.get(e)}function Ir(n,e=!1){const t=this.__v_raw,i=lt(t),s=lt(n);return e||(Ji(n,s)&&fn(i,"has",n),fn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Ur(n,e=!1){return n=n.__v_raw,!e&&fn(lt(n),"iterate",qi),Reflect.get(n,"size",n)}function Mc(n){n=lt(n);const e=lt(this);return Fa(e).has.call(e,n)||(e.add(n),si(e,"add",n,n)),this}function xc(n,e){e=lt(e);const t=lt(this),{has:i,get:s}=Fa(t);let r=i.call(t,n);r||(n=lt(n),r=i.call(t,n));const a=s.call(t,n);return t.set(n,e),r?Ji(e,a)&&si(t,"set",n,e):si(t,"add",n,e),this}function Sc(n){const e=lt(this),{has:t,get:i}=Fa(e);let s=t.call(e,n);s||(n=lt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&si(e,"delete",n,void 0),r}function yc(){const n=lt(this),e=n.size!==0,t=n.clear();return e&&si(n,"clear",void 0,void 0),t}function Fr(n,e){return function(i,s){const r=this,a=r.__v_raw,o=lt(a),l=e?Il:n?kl:dr;return!n&&fn(o,"iterate",qi),a.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function kr(n,e,t){return function(...i){const s=this.__v_raw,r=lt(s),a=Cs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Il:e?kl:dr;return!e&&fn(r,"iterate",l?Ko:qi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function oi(n){return function(...e){return n==="delete"?!1:this}}function Np(){const n={get(r){return Dr(this,r)},get size(){return Ur(this)},has:Ir,add:Mc,set:xc,delete:Sc,clear:yc,forEach:Fr(!1,!1)},e={get(r){return Dr(this,r,!1,!0)},get size(){return Ur(this)},has:Ir,add:Mc,set:xc,delete:Sc,clear:yc,forEach:Fr(!1,!0)},t={get(r){return Dr(this,r,!0)},get size(){return Ur(this,!0)},has(r){return Ir.call(this,r,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:Fr(!0,!1)},i={get(r){return Dr(this,r,!0,!0)},get size(){return Ur(this,!0)},has(r){return Ir.call(this,r,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:Fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=kr(r,!1,!1),t[r]=kr(r,!0,!1),e[r]=kr(r,!1,!0),i[r]=kr(r,!0,!0)}),[n,t,e,i]}const[Op,Bp,Hp,zp]=Np();function Ul(n,e){const t=e?n?zp:Hp:n?Bp:Op;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ct(t,s)&&s in i?t:i,s,r)}const Gp={get:Ul(!1,!1)},Vp={get:Ul(!1,!0)},Wp={get:Ul(!0,!1)},md=new WeakMap,_d=new WeakMap,gd=new WeakMap,$p=new WeakMap;function qp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xp(n){return n.__v_skip||!Object.isExtensible(n)?0:qp(_p(n))}function Yt(n){return Fs(n)?n:Fl(n,!1,Up,Gp,md)}function Yp(n){return Fl(n,!1,kp,Vp,_d)}function vd(n){return Fl(n,!0,Fp,Wp,gd)}function Fl(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=Xp(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Mi(n){return Fs(n)?Mi(n.__v_raw):!!(n&&n.__v_isReactive)}function Fs(n){return!!(n&&n.__v_isReadonly)}function xa(n){return!!(n&&n.__v_isShallow)}function Md(n){return Mi(n)||Fs(n)}function lt(n){const e=n&&n.__v_raw;return e?lt(e):n}function ka(n){return va(n,"__v_skip",!0),n}const dr=n=>xt(n)?Yt(n):n,kl=n=>xt(n)?vd(n):n;function xd(n){vi&&Ln&&(n=lt(n),fd(n.dep||(n.dep=Ll())))}function Sd(n,e){n=lt(n);const t=n.dep;t&&Zo(t)}function At(n){return!!(n&&n.__v_isRef===!0)}function xe(n){return yd(n,!1)}function Rs(n){return yd(n,!0)}function yd(n,e){return At(n)?n:new jp(n,e)}class jp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:lt(e),this._value=t?e:dr(e)}get value(){return xd(this),this._value}set value(e){const t=this.__v_isShallow||xa(e)||Fs(e);e=t?e:lt(e),Ji(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:dr(e),Sd(this))}}function J(n){return At(n)?n.value:n}const Kp={get:(n,e,t)=>J(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return At(s)&&!At(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Ed(n){return Mi(n)?n:new Proxy(n,Kp)}function bd(n){const e=Ye(n)?new Array(n.length):{};for(const t in n)e[t]=Jp(n,t);return e}class Zp{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Rp(lt(this._object),this._key)}}function Jp(n,e,t){const i=n[e];return At(i)?i:new Zp(n,e,t)}class Qp{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Dl(e,()=>{this._dirty||(this._dirty=!0,Sd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=lt(this);return xd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function em(n,e,t=!1){let i,s;const r=tt(n);return r?(i=n,s=Wn):(i=n.get,s=n.set),new Qp(i,s,r||!s,t)}function xi(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){Na(r,e,t)}return s}function Fn(n,e,t,i){if(tt(n)){const r=xi(n,e,t,i);return r&&Qf(r)&&r.catch(a=>{Na(a,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(Fn(n[r],e,t,i));return s}function Na(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){xi(l,null,10,[n,a,o]);return}}tm(n,t,s,i)}function tm(n,e,t,i=!0){console.error(n)}let hr=!1,Jo=!1;const Xt=[];let Gn=0;const Ps=[];let ei=null,Hi=0;const Td=Promise.resolve();let Nl=null;function Ws(n){const e=Nl||Td;return n?e.then(this?n.bind(this):n):e}function nm(n){let e=Gn+1,t=Xt.length;for(;e<t;){const i=e+t>>>1,s=Xt[i],r=pr(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function Ol(n){(!Xt.length||!Xt.includes(n,hr&&n.allowRecurse?Gn+1:Gn))&&(n.id==null?Xt.push(n):Xt.splice(nm(n.id),0,n),Ad())}function Ad(){!hr&&!Jo&&(Jo=!0,Nl=Td.then(Cd))}function im(n){const e=Xt.indexOf(n);e>Gn&&Xt.splice(e,1)}function sm(n){Ye(n)?Ps.push(...n):(!ei||!ei.includes(n,n.allowRecurse?Hi+1:Hi))&&Ps.push(n),Ad()}function Ec(n,e=hr?Gn+1:0){for(;e<Xt.length;e++){const t=Xt[e];t&&t.pre&&(Xt.splice(e,1),e--,t())}}function wd(n){if(Ps.length){const e=[...new Set(Ps)];if(Ps.length=0,ei){ei.push(...e);return}for(ei=e,ei.sort((t,i)=>pr(t)-pr(i)),Hi=0;Hi<ei.length;Hi++)ei[Hi]();ei=null,Hi=0}}const pr=n=>n.id==null?1/0:n.id,rm=(n,e)=>{const t=pr(n)-pr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Cd(n){Jo=!1,hr=!0,Xt.sort(rm);try{for(Gn=0;Gn<Xt.length;Gn++){const e=Xt[Gn];e&&e.active!==!1&&xi(e,null,14)}}finally{Gn=0,Xt.length=0,wd(),hr=!1,Nl=null,(Xt.length||Ps.length)&&Cd()}}function am(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||gt;d&&(s=t.map(m=>Ut(m)?m.trim():m)),f&&(s=t.map(Mp))}let o,l=i[o=so(e)]||i[o=so(Us(e))];!l&&r&&(l=i[o=so(zs(e))]),l&&Fn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Fn(c,n,6,s)}}function Rd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!tt(n)){const l=c=>{const u=Rd(c,e,!0);u&&(o=!0,Wt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(xt(n)&&i.set(n,null),null):(Ye(r)?r.forEach(l=>a[l]=null):Wt(a,r),xt(n)&&i.set(n,a),a)}function Oa(n,e){return!n||!La(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,zs(e))||ct(n,e))}let vn=null,Ba=null;function Sa(n){const e=vn;return vn=n,Ba=n&&n.type.__scopeId||null,e}function kn(n){Ba=n}function Nn(){Ba=null}function ha(n,e=vn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ic(-1);const r=Sa(e);let a;try{a=n(...s)}finally{Sa(r),i._d&&Ic(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ao(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:_,inheritAttrs:g}=n;let p,h;const E=Sa(n);try{if(t.shapeFlag&4){const b=s||i;p=Hn(u.call(b,b,f,r,m,d,_)),h=l}else{const b=e;p=Hn(b.length>1?b(r,{attrs:l,slots:o,emit:c}):b(r,null)),h=e.props?l:om(l)}}catch(b){lr.length=0,Na(b,n,1),p=Pe(Qi)}let y=p;if(h&&g!==!1){const b=Object.keys(h),{shapeFlag:C}=y;b.length&&C&7&&(a&&b.some(wl)&&(h=lm(h,a)),y=Ti(y,h))}return t.dirs&&(y=Ti(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),p=y,Sa(E),p}const om=n=>{let e;for(const t in n)(t==="class"||t==="style"||La(t))&&((e||(e={}))[t]=n[t]);return e},lm=(n,e)=>{const t={};for(const i in n)(!wl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function cm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?bc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Oa(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?bc(i,a,c):!0:!!a;return!1}function bc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Oa(t,r))return!0}return!1}function um({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const fm=Symbol.for("v-ndc"),dm=n=>n.__isSuspense;function hm(n,e){e&&e.pendingBranch?Ye(n)?e.effects.push(...n):e.effects.push(n):sm(n)}function Ha(n,e){return Bl(n,null,e)}const Nr={};function wt(n,e,t){return Bl(n,e,t)}function Bl(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:a}=gt){var o;const l=ad()===((o=Bt)==null?void 0:o.scope)?Bt:null;let c,u=!1,f=!1;if(At(n)?(c=()=>n.value,u=xa(n)):Mi(n)?(c=()=>n,i=!0):Ye(n)?(f=!0,u=n.some(b=>Mi(b)||xa(b)),c=()=>n.map(b=>{if(At(b))return b.value;if(Mi(b))return Wi(b);if(tt(b))return xi(b,l,2)})):tt(n)?e?c=()=>xi(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Fn(n,l,3,[m])}:c=Wn,e&&i){const b=c;c=()=>Wi(b())}let d,m=b=>{d=E.onStop=()=>{xi(b,l,4)}},_;if(gr)if(m=Wn,e?t&&Fn(e,l,3,[c(),f?[]:void 0,m]):c(),s==="sync"){const b=r_();_=b.__watcherHandles||(b.__watcherHandles=[])}else return Wn;let g=f?new Array(n.length).fill(Nr):Nr;const p=()=>{if(E.active)if(e){const b=E.run();(i||u||(f?b.some((C,N)=>Ji(C,g[N])):Ji(b,g)))&&(d&&d(),Fn(e,l,3,[b,g===Nr?void 0:f&&g[0]===Nr?[]:g,m]),g=b)}else E.run()};p.allowRecurse=!!e;let h;s==="sync"?h=p:s==="post"?h=()=>sn(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),h=()=>Ol(p));const E=new Dl(c,h);e?t?p():g=E.run():s==="post"?sn(E.run.bind(E),l&&l.suspense):E.run();const y=()=>{E.stop(),l&&l.scope&&Cl(l.scope.effects,E)};return _&&_.push(y),y}function pm(n,e,t){const i=this.proxy,s=Ut(n)?n.includes(".")?Pd(i,n):()=>i[n]:n.bind(i,i);let r;tt(e)?r=e:(r=e.handler,t=e);const a=Bt;ks(this);const o=Bl(s,r.bind(i),t);return a?ks(a):Xi(),o}function Pd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Wi(n,e){if(!xt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),At(n))Wi(n.value,e);else if(Ye(n))for(let t=0;t<n.length;t++)Wi(n[t],e);else if(Jf(n)||Cs(n))n.forEach(t=>{Wi(t,e)});else if(td(n))for(const t in n)Wi(n[t],e);return n}function Et(n,e){const t=vn;if(t===null)return n;const i=Wa(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[a,o,l,c=gt]=e[r];a&&(tt(a)&&(a={mounted:a,updated:a}),a.deep&&Wi(o),s.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Li(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Gs(),Fn(l,t,8,[n.el,o,n,e]),Vs())}}/*! #__NO_SIDE_EFFECTS__ */function qe(n,e){return tt(n)?Wt({name:n.name},e,{setup:n}):n}const pa=n=>!!n.type.__asyncLoader,Ld=n=>n.type.__isKeepAlive;function mm(n,e){Dd(n,"a",e)}function _m(n,e){Dd(n,"da",e)}function Dd(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(za(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ld(s.parent.vnode)&&gm(i,e,t,s),s=s.parent}}function gm(n,e,t,i){const s=za(e,n,i,!0);Hl(()=>{Cl(i[e],s)},t)}function za(n,e,t=Bt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Gs(),ks(t);const o=Fn(e,t,n,a);return Xi(),Vs(),o});return i?s.unshift(r):s.push(r),r}}const ai=n=>(e,t=Bt)=>(!gr||n==="sp")&&za(n,(...i)=>e(...i),t),vm=ai("bm"),ns=ai("m"),Mm=ai("bu"),xm=ai("u"),Sm=ai("bum"),Hl=ai("um"),ym=ai("sp"),Em=ai("rtg"),bm=ai("rtc");function Tm(n,e=Bt){za("ec",n,e)}function jt(n,e,t,i){let s;const r=t&&t[i];if(Ye(n)||Ut(n)){s=new Array(n.length);for(let a=0,o=n.length;a<o;a++)s[a]=e(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(xt(n))if(n[Symbol.iterator])s=Array.from(n,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(n);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];s[o]=e(n[c],c,o,r&&r[o])}}else s=[];return t&&(t[i]=s),s}const Qo=n=>n?Wd(n)?Wa(n)||n.proxy:Qo(n.parent):null,or=Wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Qo(n.parent),$root:n=>Qo(n.root),$emit:n=>n.emit,$options:n=>zl(n),$forceUpdate:n=>n.f||(n.f=()=>Ol(n.update)),$nextTick:n=>n.n||(n.n=Ws.bind(n.proxy)),$watch:n=>pm.bind(n)}),oo=(n,e)=>n!==gt&&!n.__isScriptSetup&&ct(n,e),Am={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(oo(i,e))return a[e]=1,i[e];if(s!==gt&&ct(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&ct(c,e))return a[e]=3,r[e];if(t!==gt&&ct(t,e))return a[e]=4,t[e];el&&(a[e]=0)}}const u=or[e];let f,d;if(u)return e==="$attrs"&&fn(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==gt&&ct(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,ct(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return oo(s,e)?(s[e]=t,!0):i!==gt&&ct(i,e)?(i[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==gt&&ct(n,a)||oo(e,a)||(o=r[0])&&ct(o,a)||ct(i,a)||ct(or,a)||ct(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Tc(n){return Ye(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let el=!0;function wm(n){const e=zl(n),t=n.proxy,i=n.ctx;el=!1,e.beforeCreate&&Ac(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:_,activated:g,deactivated:p,beforeDestroy:h,beforeUnmount:E,destroyed:y,unmounted:b,render:C,renderTracked:N,renderTriggered:D,errorCaptured:j,serverPrefetch:x,expose:w,inheritAttrs:Q,components:oe,directives:_e,filters:F}=e;if(c&&Cm(c,i,null),a)for(const Y in a){const te=a[Y];tt(te)&&(i[Y]=te.bind(t))}if(s){const Y=s.call(t,t);xt(Y)&&(n.data=Yt(Y))}if(el=!0,r)for(const Y in r){const te=r[Y],pe=tt(te)?te.bind(t,t):tt(te.get)?te.get.bind(t,t):Wn,de=!tt(te)&&tt(te.set)?te.set.bind(t):Wn,z=It({get:pe,set:de});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>z.value,set:X=>z.value=X})}if(o)for(const Y in o)Id(o[Y],i,t,Y);if(l){const Y=tt(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(te=>{yn(te,Y[te])})}u&&Ac(u,n,"c");function W(Y,te){Ye(te)?te.forEach(pe=>Y(pe.bind(t))):te&&Y(te.bind(t))}if(W(vm,f),W(ns,d),W(Mm,m),W(xm,_),W(mm,g),W(_m,p),W(Tm,j),W(bm,N),W(Em,D),W(Sm,E),W(Hl,b),W(ym,x),Ye(w))if(w.length){const Y=n.exposed||(n.exposed={});w.forEach(te=>{Object.defineProperty(Y,te,{get:()=>t[te],set:pe=>t[te]=pe})})}else n.exposed||(n.exposed={});C&&n.render===Wn&&(n.render=C),Q!=null&&(n.inheritAttrs=Q),oe&&(n.components=oe),_e&&(n.directives=_e)}function Cm(n,e,t=Wn){Ye(n)&&(n=tl(n));for(const i in n){const s=n[i];let r;xt(s)?"default"in s?r=vt(s.from||i,s.default,!0):r=vt(s.from||i):r=vt(s),At(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Ac(n,e,t){Fn(Ye(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Id(n,e,t,i){const s=i.includes(".")?Pd(t,i):()=>t[i];if(Ut(n)){const r=e[n];tt(r)&&wt(s,r)}else if(tt(n))wt(s,n.bind(t));else if(xt(n))if(Ye(n))n.forEach(r=>Id(r,e,t,i));else{const r=tt(n.handler)?n.handler.bind(t):e[n.handler];tt(r)&&wt(s,r,n)}}function zl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ya(l,c,a,!0)),ya(l,e,a)),xt(e)&&r.set(e,l),l}function ya(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ya(n,r,t,!0),s&&s.forEach(a=>ya(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Rm[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Rm={data:wc,props:Cc,emits:Cc,methods:sr,computed:sr,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:sr,directives:sr,watch:Lm,provide:wc,inject:Pm};function wc(n,e){return e?n?function(){return Wt(tt(n)?n.call(this,this):n,tt(e)?e.call(this,this):e)}:e:n}function Pm(n,e){return sr(tl(n),tl(e))}function tl(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Jt(n,e){return n?[...new Set([].concat(n,e))]:e}function sr(n,e){return n?Wt(Object.create(null),n,e):e}function Cc(n,e){return n?Ye(n)&&Ye(e)?[...new Set([...n,...e])]:Wt(Object.create(null),Tc(n),Tc(e??{})):e}function Lm(n,e){if(!n)return e;if(!e)return n;const t=Wt(Object.create(null),n);for(const i in e)t[i]=Jt(n[i],e[i]);return t}function Ud(){return{app:null,config:{isNativeTag:hp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dm=0;function Im(n,e){return function(i,s=null){tt(i)||(i=Wt({},i)),s!=null&&!xt(s)&&(s=null);const r=Ud(),a=new WeakSet;let o=!1;const l=r.app={_uid:Dm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:a_,get config(){return r.config},set config(c){},use(c,...u){return a.has(c)||(c&&tt(c.install)?(a.add(c),c.install(l,...u)):tt(c)&&(a.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!o){const d=Pe(i,s);return d.appContext=r,u&&e?e(d,c):n(d,c,f),o=!0,l._container=c,c.__vue_app__=l,Wa(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){mr=l;try{return c()}finally{mr=null}}};return l}}let mr=null;function yn(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function vt(n,e,t=!1){const i=Bt||vn;if(i||mr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:mr._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&tt(e)?e.call(i&&i.proxy):e}}function Um(){return!!(Bt||vn||mr)}function Fm(n,e,t,i=!1){const s={},r={};va(r,Va,1),n.propsDefaults=Object.create(null),Fd(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Yp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function km(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=lt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Oa(n.emitsOptions,d))continue;const m=e[d];if(l)if(ct(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const _=Us(d);s[_]=nl(l,o,_,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{Fd(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!ct(e,f)&&((u=zs(f))===f||!ct(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=nl(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!ct(e,f))&&(delete r[f],c=!0)}c&&si(n,"set","$attrs")}function Fd(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(da(l))continue;const c=e[l];let u;s&&ct(s,u=Us(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Oa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=lt(t),c=o||gt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=nl(s,l,f,c[f],n,!ct(c,f))}}return a}function nl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ct(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&tt(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(ks(s),i=c[t]=l.call(null,e),Xi())}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===zs(t))&&(i=!0))}return i}function kd(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!tt(n)){const u=f=>{l=!0;const[d,m]=kd(f,e,!0);Wt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return xt(n)&&i.set(n,ws),ws;if(Ye(r))for(let u=0;u<r.length;u++){const f=Us(r[u]);Rc(f)&&(a[f]=gt)}else if(r)for(const u in r){const f=Us(u);if(Rc(f)){const d=r[u],m=a[f]=Ye(d)||tt(d)?{type:d}:Wt({},d);if(m){const _=Dc(Boolean,m.type),g=Dc(String,m.type);m[0]=_>-1,m[1]=g<0||_<g,(_>-1||ct(m,"default"))&&o.push(f)}}}const c=[a,o];return xt(n)&&i.set(n,c),c}function Rc(n){return n[0]!=="$"}function Pc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Lc(n,e){return Pc(n)===Pc(e)}function Dc(n,e){return Ye(e)?e.findIndex(t=>Lc(t,n)):tt(e)&&Lc(e,n)?0:-1}const Nd=n=>n[0]==="_"||n==="$stable",Gl=n=>Ye(n)?n.map(Hn):[Hn(n)],Nm=(n,e,t)=>{if(e._n)return e;const i=ha((...s)=>Gl(e(...s)),t);return i._c=!1,i},Od=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Nd(s))continue;const r=n[s];if(tt(r))e[s]=Nm(s,r,i);else if(r!=null){const a=Gl(r);e[s]=()=>a}}},Bd=(n,e)=>{const t=Gl(e);n.slots.default=()=>t},Om=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=lt(e),va(e,"_",t)):Od(e,n.slots={})}else n.slots={},e&&Bd(n,e);va(n.slots,Va,1)},Bm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=gt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(Wt(s,e),!t&&o===1&&delete s._):(r=!e.$stable,Od(e,s)),a=e}else e&&(Bd(n,e),a={default:1});if(r)for(const o in s)!Nd(o)&&a[o]==null&&delete s[o]};function il(n,e,t,i,s=!1){if(Ye(n)){n.forEach((d,m)=>il(d,e&&(Ye(e)?e[m]:e),t,i,s));return}if(pa(i)&&!s)return;const r=i.shapeFlag&4?Wa(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===gt?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(Ut(c)?(u[c]=null,ct(f,c)&&(f[c]=null)):At(c)&&(c.value=null)),tt(l))xi(l,o,12,[a,u]);else{const d=Ut(l),m=At(l);if(d||m){const _=()=>{if(n.f){const g=d?ct(f,l)?f[l]:u[l]:l.value;s?Ye(g)&&Cl(g,r):Ye(g)?g.includes(r)||g.push(r):d?(u[l]=[r],ct(f,l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,ct(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,sn(_,t)):_()}}}const sn=hm;function Hm(n){return zm(n)}function zm(n,e){const t=Yo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Wn,insertStaticContent:_}=n,g=(M,I,R,G=null,H=null,ce=null,he=!1,se=null,ue=!!I.dynamicChildren)=>{if(M===I)return;M&&!Ys(M,I)&&(G=We(M),X(M,H,ce,!0),M=null),I.patchFlag===-2&&(ue=!1,I.dynamicChildren=null);const{type:ae,ref:be,shapeFlag:S}=I;switch(ae){case Ga:p(M,I,R,G);break;case Qi:h(M,I,R,G);break;case lo:M==null&&E(I,R,G,he);break;case dt:oe(M,I,R,G,H,ce,he,se,ue);break;default:S&1?C(M,I,R,G,H,ce,he,se,ue):S&6?_e(M,I,R,G,H,ce,he,se,ue):(S&64||S&128)&&ae.process(M,I,R,G,H,ce,he,se,ue,Se)}be!=null&&H&&il(be,M&&M.ref,ce,I||M,!I)},p=(M,I,R,G)=>{if(M==null)i(I.el=o(I.children),R,G);else{const H=I.el=M.el;I.children!==M.children&&c(H,I.children)}},h=(M,I,R,G)=>{M==null?i(I.el=l(I.children||""),R,G):I.el=M.el},E=(M,I,R,G)=>{[M.el,M.anchor]=_(M.children,I,R,G,M.el,M.anchor)},y=({el:M,anchor:I},R,G)=>{let H;for(;M&&M!==I;)H=d(M),i(M,R,G),M=H;i(I,R,G)},b=({el:M,anchor:I})=>{let R;for(;M&&M!==I;)R=d(M),s(M),M=R;s(I)},C=(M,I,R,G,H,ce,he,se,ue)=>{he=he||I.type==="svg",M==null?N(I,R,G,H,ce,he,se,ue):x(M,I,H,ce,he,se,ue)},N=(M,I,R,G,H,ce,he,se)=>{let ue,ae;const{type:be,props:S,shapeFlag:v,transition:B,dirs:re}=M;if(ue=M.el=a(M.type,ce,S&&S.is,S),v&8?u(ue,M.children):v&16&&j(M.children,ue,null,G,H,ce&&be!=="foreignObject",he,se),re&&Li(M,null,G,"created"),D(ue,M,M.scopeId,he,G),S){for(const fe in S)fe!=="value"&&!da(fe)&&r(ue,fe,null,S[fe],ce,M.children,G,H,Le);"value"in S&&r(ue,"value",null,S.value),(ae=S.onVnodeBeforeMount)&&Bn(ae,G,M)}re&&Li(M,null,G,"beforeMount");const le=Gm(H,B);le&&B.beforeEnter(ue),i(ue,I,R),((ae=S&&S.onVnodeMounted)||le||re)&&sn(()=>{ae&&Bn(ae,G,M),le&&B.enter(ue),re&&Li(M,null,G,"mounted")},H)},D=(M,I,R,G,H)=>{if(R&&m(M,R),G)for(let ce=0;ce<G.length;ce++)m(M,G[ce]);if(H){let ce=H.subTree;if(I===ce){const he=H.vnode;D(M,he,he.scopeId,he.slotScopeIds,H.parent)}}},j=(M,I,R,G,H,ce,he,se,ue=0)=>{for(let ae=ue;ae<M.length;ae++){const be=M[ae]=se?mi(M[ae]):Hn(M[ae]);g(null,be,I,R,G,H,ce,he,se)}},x=(M,I,R,G,H,ce,he)=>{const se=I.el=M.el;let{patchFlag:ue,dynamicChildren:ae,dirs:be}=I;ue|=M.patchFlag&16;const S=M.props||gt,v=I.props||gt;let B;R&&Di(R,!1),(B=v.onVnodeBeforeUpdate)&&Bn(B,R,I,M),be&&Li(I,M,R,"beforeUpdate"),R&&Di(R,!0);const re=H&&I.type!=="foreignObject";if(ae?w(M.dynamicChildren,ae,se,R,G,re,ce):he||te(M,I,se,null,R,G,re,ce,!1),ue>0){if(ue&16)Q(se,I,S,v,R,G,H);else if(ue&2&&S.class!==v.class&&r(se,"class",null,v.class,H),ue&4&&r(se,"style",S.style,v.style,H),ue&8){const le=I.dynamicProps;for(let fe=0;fe<le.length;fe++){const Ae=le[fe],ve=S[Ae],Ce=v[Ae];(Ce!==ve||Ae==="value")&&r(se,Ae,ve,Ce,H,M.children,R,G,Le)}}ue&1&&M.children!==I.children&&u(se,I.children)}else!he&&ae==null&&Q(se,I,S,v,R,G,H);((B=v.onVnodeUpdated)||be)&&sn(()=>{B&&Bn(B,R,I,M),be&&Li(I,M,R,"updated")},G)},w=(M,I,R,G,H,ce,he)=>{for(let se=0;se<I.length;se++){const ue=M[se],ae=I[se],be=ue.el&&(ue.type===dt||!Ys(ue,ae)||ue.shapeFlag&70)?f(ue.el):R;g(ue,ae,be,null,G,H,ce,he,!0)}},Q=(M,I,R,G,H,ce,he)=>{if(R!==G){if(R!==gt)for(const se in R)!da(se)&&!(se in G)&&r(M,se,R[se],null,he,I.children,H,ce,Le);for(const se in G){if(da(se))continue;const ue=G[se],ae=R[se];ue!==ae&&se!=="value"&&r(M,se,ae,ue,he,I.children,H,ce,Le)}"value"in G&&r(M,"value",R.value,G.value)}},oe=(M,I,R,G,H,ce,he,se,ue)=>{const ae=I.el=M?M.el:o(""),be=I.anchor=M?M.anchor:o("");let{patchFlag:S,dynamicChildren:v,slotScopeIds:B}=I;B&&(se=se?se.concat(B):B),M==null?(i(ae,R,G),i(be,R,G),j(I.children,R,be,H,ce,he,se,ue)):S>0&&S&64&&v&&M.dynamicChildren?(w(M.dynamicChildren,v,R,H,ce,he,se),(I.key!=null||H&&I===H.subTree)&&Hd(M,I,!0)):te(M,I,R,be,H,ce,he,se,ue)},_e=(M,I,R,G,H,ce,he,se,ue)=>{I.slotScopeIds=se,M==null?I.shapeFlag&512?H.ctx.activate(I,R,G,he,ue):F(I,R,G,H,ce,he,ue):V(M,I,ue)},F=(M,I,R,G,H,ce,he)=>{const se=M.component=Zm(M,G,H);if(Ld(M)&&(se.ctx.renderer=Se),Qm(se),se.asyncDep){if(H&&H.registerDep(se,W),!M.el){const ue=se.subTree=Pe(Qi);h(null,ue,I,R)}return}W(se,M,I,R,H,ce,he)},V=(M,I,R)=>{const G=I.component=M.component;if(cm(M,I,R))if(G.asyncDep&&!G.asyncResolved){Y(G,I,R);return}else G.next=I,im(G.update),G.update();else I.el=M.el,G.vnode=I},W=(M,I,R,G,H,ce,he)=>{const se=()=>{if(M.isMounted){let{next:be,bu:S,u:v,parent:B,vnode:re}=M,le=be,fe;Di(M,!1),be?(be.el=re.el,Y(M,be,he)):be=re,S&&ro(S),(fe=be.props&&be.props.onVnodeBeforeUpdate)&&Bn(fe,B,be,re),Di(M,!0);const Ae=ao(M),ve=M.subTree;M.subTree=Ae,g(ve,Ae,f(ve.el),We(ve),M,H,ce),be.el=Ae.el,le===null&&um(M,Ae.el),v&&sn(v,H),(fe=be.props&&be.props.onVnodeUpdated)&&sn(()=>Bn(fe,B,be,re),H)}else{let be;const{el:S,props:v}=I,{bm:B,m:re,parent:le}=M,fe=pa(I);if(Di(M,!1),B&&ro(B),!fe&&(be=v&&v.onVnodeBeforeMount)&&Bn(be,le,I),Di(M,!0),S&&He){const Ae=()=>{M.subTree=ao(M),He(S,M.subTree,M,H,null)};fe?I.type.__asyncLoader().then(()=>!M.isUnmounted&&Ae()):Ae()}else{const Ae=M.subTree=ao(M);g(null,Ae,R,G,M,H,ce),I.el=Ae.el}if(re&&sn(re,H),!fe&&(be=v&&v.onVnodeMounted)){const Ae=I;sn(()=>Bn(be,le,Ae),H)}(I.shapeFlag&256||le&&pa(le.vnode)&&le.vnode.shapeFlag&256)&&M.a&&sn(M.a,H),M.isMounted=!0,I=R=G=null}},ue=M.effect=new Dl(se,()=>Ol(ae),M.scope),ae=M.update=()=>ue.run();ae.id=M.uid,Di(M,!0),ae()},Y=(M,I,R)=>{I.component=M;const G=M.vnode.props;M.vnode=I,M.next=null,km(M,I.props,G,R),Bm(M,I.children,R),Gs(),Ec(),Vs()},te=(M,I,R,G,H,ce,he,se,ue=!1)=>{const ae=M&&M.children,be=M?M.shapeFlag:0,S=I.children,{patchFlag:v,shapeFlag:B}=I;if(v>0){if(v&128){de(ae,S,R,G,H,ce,he,se,ue);return}else if(v&256){pe(ae,S,R,G,H,ce,he,se,ue);return}}B&8?(be&16&&Le(ae,H,ce),S!==ae&&u(R,S)):be&16?B&16?de(ae,S,R,G,H,ce,he,se,ue):Le(ae,H,ce,!0):(be&8&&u(R,""),B&16&&j(S,R,G,H,ce,he,se,ue))},pe=(M,I,R,G,H,ce,he,se,ue)=>{M=M||ws,I=I||ws;const ae=M.length,be=I.length,S=Math.min(ae,be);let v;for(v=0;v<S;v++){const B=I[v]=ue?mi(I[v]):Hn(I[v]);g(M[v],B,R,null,H,ce,he,se,ue)}ae>be?Le(M,H,ce,!0,!1,S):j(I,R,G,H,ce,he,se,ue,S)},de=(M,I,R,G,H,ce,he,se,ue)=>{let ae=0;const be=I.length;let S=M.length-1,v=be-1;for(;ae<=S&&ae<=v;){const B=M[ae],re=I[ae]=ue?mi(I[ae]):Hn(I[ae]);if(Ys(B,re))g(B,re,R,null,H,ce,he,se,ue);else break;ae++}for(;ae<=S&&ae<=v;){const B=M[S],re=I[v]=ue?mi(I[v]):Hn(I[v]);if(Ys(B,re))g(B,re,R,null,H,ce,he,se,ue);else break;S--,v--}if(ae>S){if(ae<=v){const B=v+1,re=B<be?I[B].el:G;for(;ae<=v;)g(null,I[ae]=ue?mi(I[ae]):Hn(I[ae]),R,re,H,ce,he,se,ue),ae++}}else if(ae>v)for(;ae<=S;)X(M[ae],H,ce,!0),ae++;else{const B=ae,re=ae,le=new Map;for(ae=re;ae<=v;ae++){const Xe=I[ae]=ue?mi(I[ae]):Hn(I[ae]);Xe.key!=null&&le.set(Xe.key,ae)}let fe,Ae=0;const ve=v-re+1;let Ce=!1,Ge=0;const Je=new Array(ve);for(ae=0;ae<ve;ae++)Je[ae]=0;for(ae=B;ae<=S;ae++){const Xe=M[ae];if(Ae>=ve){X(Xe,H,ce,!0);continue}let Ne;if(Xe.key!=null)Ne=le.get(Xe.key);else for(fe=re;fe<=v;fe++)if(Je[fe-re]===0&&Ys(Xe,I[fe])){Ne=fe;break}Ne===void 0?X(Xe,H,ce,!0):(Je[Ne-re]=ae+1,Ne>=Ge?Ge=Ne:Ce=!0,g(Xe,I[Ne],R,null,H,ce,he,se,ue),Ae++)}const Me=Ce?Vm(Je):ws;for(fe=Me.length-1,ae=ve-1;ae>=0;ae--){const Xe=re+ae,Ne=I[Xe],Ve=Xe+1<be?I[Xe+1].el:G;Je[ae]===0?g(null,Ne,R,Ve,H,ce,he,se,ue):Ce&&(fe<0||ae!==Me[fe]?z(Ne,R,Ve,2):fe--)}}},z=(M,I,R,G,H=null)=>{const{el:ce,type:he,transition:se,children:ue,shapeFlag:ae}=M;if(ae&6){z(M.component.subTree,I,R,G);return}if(ae&128){M.suspense.move(I,R,G);return}if(ae&64){he.move(M,I,R,Se);return}if(he===dt){i(ce,I,R);for(let S=0;S<ue.length;S++)z(ue[S],I,R,G);i(M.anchor,I,R);return}if(he===lo){y(M,I,R);return}if(G!==2&&ae&1&&se)if(G===0)se.beforeEnter(ce),i(ce,I,R),sn(()=>se.enter(ce),H);else{const{leave:S,delayLeave:v,afterLeave:B}=se,re=()=>i(ce,I,R),le=()=>{S(ce,()=>{re(),B&&B()})};v?v(ce,re,le):le()}else i(ce,I,R)},X=(M,I,R,G=!1,H=!1)=>{const{type:ce,props:he,ref:se,children:ue,dynamicChildren:ae,shapeFlag:be,patchFlag:S,dirs:v}=M;if(se!=null&&il(se,null,R,M,!0),be&256){I.ctx.deactivate(M);return}const B=be&1&&v,re=!pa(M);let le;if(re&&(le=he&&he.onVnodeBeforeUnmount)&&Bn(le,I,M),be&6)Te(M.component,R,G);else{if(be&128){M.suspense.unmount(R,G);return}B&&Li(M,null,I,"beforeUnmount"),be&64?M.type.remove(M,I,R,H,Se,G):ae&&(ce!==dt||S>0&&S&64)?Le(ae,I,R,!1,!0):(ce===dt&&S&384||!H&&be&16)&&Le(ue,I,R),G&&ge(M)}(re&&(le=he&&he.onVnodeUnmounted)||B)&&sn(()=>{le&&Bn(le,I,M),B&&Li(M,null,I,"unmounted")},R)},ge=M=>{const{type:I,el:R,anchor:G,transition:H}=M;if(I===dt){Ee(R,G);return}if(I===lo){b(M);return}const ce=()=>{s(R),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(M.shapeFlag&1&&H&&!H.persisted){const{leave:he,delayLeave:se}=H,ue=()=>he(R,ce);se?se(M.el,ce,ue):ue()}else ce()},Ee=(M,I)=>{let R;for(;M!==I;)R=d(M),s(M),M=R;s(I)},Te=(M,I,R)=>{const{bum:G,scope:H,update:ce,subTree:he,um:se}=M;G&&ro(G),H.stop(),ce&&(ce.active=!1,X(he,M,I,R)),se&&sn(se,I),sn(()=>{M.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Le=(M,I,R,G=!1,H=!1,ce=0)=>{for(let he=ce;he<M.length;he++)X(M[he],I,R,G,H)},We=M=>M.shapeFlag&6?We(M.component.subTree):M.shapeFlag&128?M.suspense.next():d(M.anchor||M.el),Be=(M,I,R)=>{M==null?I._vnode&&X(I._vnode,null,null,!0):g(I._vnode||null,M,I,null,null,null,R),Ec(),wd(),I._vnode=M},Se={p:g,um:X,m:z,r:ge,mt:F,mc:j,pc:te,pbc:w,n:We,o:n};let ke,He;return e&&([ke,He]=e(Se)),{render:Be,hydrate:ke,createApp:Im(Be,ke)}}function Di({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Gm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hd(n,e,t=!1){const i=n.children,s=e.children;if(Ye(i)&&Ye(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=mi(s[r]),o.el=a.el),t||Hd(a,o)),o.type===Ga&&(o.el=a.el)}}function Vm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const Wm=n=>n.__isTeleport,dt=Symbol.for("v-fgt"),Ga=Symbol.for("v-txt"),Qi=Symbol.for("v-cmt"),lo=Symbol.for("v-stc"),lr=[];let Un=null;function ie(n=!1){lr.push(Un=n?null:[])}function $m(){lr.pop(),Un=lr[lr.length-1]||null}let _r=1;function Ic(n){_r+=n}function zd(n){return n.dynamicChildren=_r>0?Un||ws:null,$m(),_r>0&&Un&&Un.push(n),n}function me(n,e,t,i,s,r){return zd(P(n,e,t,i,s,r,!0))}function bt(n,e,t,i,s){return zd(Pe(n,e,t,i,s,!0))}function sl(n){return n?n.__v_isVNode===!0:!1}function Ys(n,e){return n.type===e.type&&n.key===e.key}const Va="__vInternal",Gd=({key:n})=>n??null,ma=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ut(n)||At(n)||tt(n)?{i:vn,r:n,k:e,f:!!t}:n:null);function P(n,e=null,t=null,i=0,s=null,r=n===dt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Gd(e),ref:e&&ma(e),scopeId:Ba,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vn};return o?(Vl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ut(t)?8:16),_r>0&&!a&&Un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Un.push(l),l}const Pe=qm;function qm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===fm)&&(n=Qi),sl(n)){const o=Ti(n,e,!0);return t&&Vl(o,t),_r>0&&!r&&Un&&(o.shapeFlag&6?Un[Un.indexOf(n)]=o:Un.push(o)),o.patchFlag|=-2,o}if(i_(n)&&(n=n.__vccOpts),e){e=Xm(e);let{class:o,style:l}=e;o&&!Ut(o)&&(e.class=Ht(o)),xt(l)&&(Md(l)&&!Ye(l)&&(l=Wt({},l)),e.style=Rn(l))}const a=Ut(n)?1:dm(n)?128:Wm(n)?64:xt(n)?4:tt(n)?2:0;return P(n,e,t,i,s,a,r,!0)}function Xm(n){return n?Md(n)||Va in n?Wt({},n):n:null}function Ti(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:a}=n,o=e?Vd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Gd(o),ref:e&&e.ref?t&&s?Ye(s)?s.concat(ma(e)):[s,ma(e)]:ma(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dt?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ti(n.ssContent),ssFallback:n.ssFallback&&Ti(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ym(n=" ",e=0){return Pe(Ga,null,n,e)}function Ke(n="",e=!1){return e?(ie(),bt(Qi,null,n)):Pe(Qi,null,n)}function Hn(n){return n==null||typeof n=="boolean"?Pe(Qi):Ye(n)?Pe(dt,null,n.slice()):typeof n=="object"?mi(n):Pe(Ga,null,String(n))}function mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ti(n)}function Vl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Vl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Va in e)?e._ctx=vn:s===3&&vn&&(vn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:vn},t=32):(e=String(e),i&64?(t=16,e=[Ym(e)]):t=8);n.children=e,n.shapeFlag|=t}function Vd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ht([e.class,i.class]));else if(s==="style")e.style=Rn([e.style,i.style]);else if(La(s)){const r=e[s],a=i[s];a&&r!==a&&!(Ye(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Bn(n,e,t,i=null){Fn(n,e,7,[t,i])}const jm=Ud();let Km=0;function Zm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||jm,r={uid:Km++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kd(i,s),emitsOptions:Rd(i,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=am.bind(null,r),n.ce&&n.ce(r),r}let Bt=null;const Jm=()=>Bt||vn;let Wl,as,Uc="__VUE_INSTANCE_SETTERS__";(as=Yo()[Uc])||(as=Yo()[Uc]=[]),as.push(n=>Bt=n),Wl=n=>{as.length>1?as.forEach(e=>e(n)):as[0](n)};const ks=n=>{Wl(n),n.scope.on()},Xi=()=>{Bt&&Bt.scope.off(),Wl(null)};function Wd(n){return n.vnode.shapeFlag&4}let gr=!1;function Qm(n,e=!1){gr=e;const{props:t,children:i}=n.vnode,s=Wd(n);Fm(n,t,s,e),Om(n,i);const r=s?e_(n,e):void 0;return gr=!1,r}function e_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=ka(new Proxy(n.ctx,Am));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?n_(n):null;ks(n),Gs();const r=xi(i,n,0,[n.props,s]);if(Vs(),Xi(),Qf(r)){if(r.then(Xi,Xi),e)return r.then(a=>{Fc(n,a,e)}).catch(a=>{Na(a,n,0)});n.asyncDep=r}else Fc(n,r,e)}else $d(n,e)}function Fc(n,e,t){tt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=Ed(e)),$d(n,t)}let kc;function $d(n,e,t){const i=n.type;if(!n.render){if(!e&&kc&&!i.render){const s=i.template||zl(n).template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Wt(Wt({isCustomElement:r,delimiters:o},a),l);i.render=kc(s,c)}}n.render=i.render||Wn}{ks(n),Gs();try{wm(n)}finally{Vs(),Xi()}}}function t_(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return fn(n,"get","$attrs"),e[t]}}))}function n_(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return t_(n)},slots:n.slots,emit:n.emit,expose:e}}function Wa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ed(ka(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in or)return or[t](n)},has(e,t){return t in e||t in or}}))}function i_(n){return tt(n)&&"__vccOpts"in n}const It=(n,e)=>em(n,e,gr);function Vt(n,e,t){const i=arguments.length;return i===2?xt(e)&&!Ye(e)?sl(e)?Pe(n,null,[e]):Pe(n,e):Pe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&sl(t)&&(t=[t]),Pe(n,e,t))}const s_=Symbol.for("v-scx"),r_=()=>vt(s_),a_="3.3.8",o_="http://www.w3.org/2000/svg",zi=typeof document<"u"?document:null,Nc=zi&&zi.createElement("template"),l_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?zi.createElementNS(o_,n):zi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>zi.createTextNode(n),createComment:n=>zi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Nc.innerHTML=i?`<svg>${n}</svg>`:n;const o=Nc.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},c_=Symbol("_vtc");function u_(n,e,t){const i=n[c_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const $l=Symbol("_vod"),Tt={beforeMount(n,{value:e},{transition:t}){n[$l]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):js(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),js(n,!0),i.enter(n)):i.leave(n,()=>{js(n,!1)}):js(n,e))},beforeUnmount(n,{value:e}){js(n,e)}};function js(n,e){n.style.display=e?n[$l]:"none"}function f_(n,e,t){const i=n.style,s=Ut(t);if(t&&!s){if(e&&!Ut(e))for(const r in e)t[r]==null&&rl(i,r,"");for(const r in t)rl(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),$l in n&&(i.display=r)}}const Oc=/\s*!important$/;function rl(n,e,t){if(Ye(t))t.forEach(i=>rl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=d_(n,e);Oc.test(t)?n.setProperty(zs(i),t.replace(Oc,""),"important"):n[i]=t}}const Bc=["Webkit","Moz","ms"],co={};function d_(n,e){const t=co[e];if(t)return t;let i=Us(e);if(i!=="filter"&&i in n)return co[e]=i;i=nd(i);for(let s=0;s<Bc.length;s++){const r=Bc[s]+i;if(r in n)return co[e]=r}return e}const Hc="http://www.w3.org/1999/xlink";function h_(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Hc,e.slice(6,e.length)):n.setAttributeNS(Hc,e,t);else{const r=Tp(e);t==null||r&&!id(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function p_(n,e,t,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=id(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function m_(n,e,t,i){n.addEventListener(e,t,i)}function __(n,e,t,i){n.removeEventListener(e,t,i)}const zc=Symbol("_vei");function g_(n,e,t,i,s=null){const r=n[zc]||(n[zc]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=v_(e);if(i){const c=r[e]=S_(i,s);m_(n,o,c,l)}else a&&(__(n,o,a,l),r[e]=void 0)}}const Gc=/(?:Once|Passive|Capture)$/;function v_(n){let e;if(Gc.test(n)){e={};let i;for(;i=n.match(Gc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zs(n.slice(2)),e]}let uo=0;const M_=Promise.resolve(),x_=()=>uo||(M_.then(()=>uo=0),uo=Date.now());function S_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Fn(y_(i,t.value),e,5,[i])};return t.value=n,t.attached=x_(),t}function y_(n,e){if(Ye(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Vc=/^on[a-z]/,E_=(n,e,t,i,s=!1,r,a,o,l)=>{e==="class"?u_(n,i,s):e==="style"?f_(n,t,i):La(e)?wl(e)||g_(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):b_(n,e,i,s))?p_(n,e,i,r,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),h_(n,e,i,s))};function b_(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Vc.test(e)&&tt(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Vc.test(e)&&Ut(t)?!1:e in n}const T_=Wt({patchProp:E_},l_);let Wc;function A_(){return Wc||(Wc=Hm(T_))}const w_=(...n)=>{const e=A_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=C_(i);if(!s)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function C_(n){return Ut(n)?document.querySelector(n):n}var R_=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let qd;const $a=n=>qd=n,Xd=Symbol();function al(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var cr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(cr||(cr={}));function P_(){const n=Pl(!0),e=n.run(()=>xe({}));let t=[],i=[];const s=ka({install(r){$a(s),s._a=r,r.provide(Xd,s),r.config.globalProperties.$pinia=s,i.forEach(a=>t.push(a)),i=[]},use(r){return!this._a&&!R_?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Yd=()=>{};function $c(n,e,t,i=Yd){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&ad()&&od(s),s}function os(n,...e){n.slice().forEach(t=>{t(...e)})}const L_=n=>n();function ol(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];al(s)&&al(i)&&n.hasOwnProperty(t)&&!At(i)&&!Mi(i)?n[t]=ol(s,i):n[t]=i}return n}const D_=Symbol();function I_(n){return!al(n)||!n.hasOwnProperty(D_)}const{assign:pi}=Object;function U_(n){return!!(At(n)&&n.effect)}function F_(n,e,t,i){const{state:s,actions:r,getters:a}=e,o=t.state.value[n];let l;function c(){o||(t.state.value[n]=s?s():{});const u=bd(t.state.value[n]);return pi(u,r,Object.keys(a||{}).reduce((f,d)=>(f[d]=ka(It(()=>{$a(t);const m=t._s.get(n);return a[d].call(m,m)})),f),{}))}return l=jd(n,c,e,t,i,!0),l}function jd(n,e,t={},i,s,r){let a;const o=pi({actions:{}},t),l={deep:!0};let c,u,f=[],d=[],m;const _=i.state.value[n];!r&&!_&&(i.state.value[n]={}),xe({});let g;function p(j){let x;c=u=!1,typeof j=="function"?(j(i.state.value[n]),x={type:cr.patchFunction,storeId:n,events:m}):(ol(i.state.value[n],j),x={type:cr.patchObject,payload:j,storeId:n,events:m});const w=g=Symbol();Ws().then(()=>{g===w&&(c=!0)}),u=!0,os(f,x,i.state.value[n])}const h=r?function(){const{state:x}=t,w=x?x():{};this.$patch(Q=>{pi(Q,w)})}:Yd;function E(){a.stop(),f=[],d=[],i._s.delete(n)}function y(j,x){return function(){$a(i);const w=Array.from(arguments),Q=[],oe=[];function _e(W){Q.push(W)}function F(W){oe.push(W)}os(d,{args:w,name:j,store:C,after:_e,onError:F});let V;try{V=x.apply(this&&this.$id===n?this:C,w)}catch(W){throw os(oe,W),W}return V instanceof Promise?V.then(W=>(os(Q,W),W)).catch(W=>(os(oe,W),Promise.reject(W))):(os(Q,V),V)}}const b={_p:i,$id:n,$onAction:$c.bind(null,d),$patch:p,$reset:h,$subscribe(j,x={}){const w=$c(f,j,x.detached,()=>Q()),Q=a.run(()=>wt(()=>i.state.value[n],oe=>{(x.flush==="sync"?u:c)&&j({storeId:n,type:cr.direct,events:m},oe)},pi({},l,x)));return w},$dispose:E},C=Yt(b);i._s.set(n,C);const D=(i._a&&i._a.runWithContext||L_)(()=>i._e.run(()=>(a=Pl()).run(e)));for(const j in D){const x=D[j];if(At(x)&&!U_(x)||Mi(x))r||(_&&I_(x)&&(At(x)?x.value=_[j]:ol(x,_[j])),i.state.value[n][j]=x);else if(typeof x=="function"){const w=y(j,x);D[j]=w,o.actions[j]=x}}return pi(C,D),pi(lt(C),D),Object.defineProperty(C,"$state",{get:()=>i.state.value[n],set:j=>{p(x=>{pi(x,j)})}}),i._p.forEach(j=>{pi(C,a.run(()=>j({store:C,app:i._a,pinia:i,options:o})))}),_&&r&&t.hydrate&&t.hydrate(C.$state,_),c=!0,u=!0,C}function is(n,e,t){let i,s;const r=typeof e=="function";typeof n=="string"?(i=n,s=r?t:e):(s=n,i=n.id);function a(o,l){const c=Um();return o=o||(c?vt(Xd,null):null),o&&$a(o),o=qd,o._s.has(i)||(r?jd(i,e,s,o):F_(i,s,o)),o._s.get(i)}return a.$id=i,a}const k_={class:"btnFlame"},N_=qe({__name:"GreenBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(ie(),me("div",k_,Re(n.inside),1))}}),Ze=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},O_=Ze(N_,[["__scopeId","data-v-d40edbbe"]]),A={title:"Seventh Dawn",newgame:"NEW GAME",loadgame:"LOAD GAME",textYes:"YES",textNo:"NO",strLog1:"GENERAL",strLog2:"BATTLE",statusOpening:"OPENING",statusTown:"TOWN",statusDungeon:"DUNGEON",processSearch:"SEARCH",processBattle:"BATTLE",processGuild:"GUILD",menuAddMember:"Add a Member",menuRemoveMember:"Remove Member",processInn:"INN",processPub:"PUB",processChurch:"CHURCH",processSmith:"SMITH",processEquipShop:"EQUPMENT SHOP",processItemShop:"ITEM SHOP",nameDungeon1:"Forest of Envy",nameDungeon2:"Swamp of Gluttony",nameDungeon3:"Desert of Sloth",nameDungeon4:"Volcano of Wrath",nameDungeon5:"Cave of Greed",nameDungeon6:"Palace of Lust",nameDungeon7:"Tower of Pride",mainChaid:1,clsSamurai:"Samurai",clsHolyKnight:"HolyKnight",clsPriest:"Priest",clsArcher:"Archer",MapWidth:100,MapHeight:100,MapWall:0,MapRoom:1,MapRoad:2,SetDoorUp:11,SetDoorUnder:12,SetDoorLeft:13,SetDoorRight:14,roomMinHeight:5,roomMaxHeight:15,roomMinWidth:5,roomMaxWidth:15,RoomCountMin:10,RoomCountMax:20,BlockSize:10,BlockHeight:20,meetPointCount:2,MiniHeight:300,MiniWallColor:"#02040F",MiniRoomColor:"#C2B8B2",MiniMoveColor:"#197BBD",MiniPlayerColor:"#CBEF43",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",TurnLeft:"TurnLeft",TurnRight:"TurnRight",encountMin:1,encountMax:5,encountLimit:100,monNumMin:1,monNumMax:6,minEffectTop:20,maxEffectTop:40,minEffectLeft:30,maxEffectLeft:50,initHitRate:70,monsterHitRate:75,normalDamageRate:1,critDamageRate:1.5,effectTime:1e3,normalAttackTime:400,monsterAttackTime:500,delayTime:100,awaitTime:1500,nextTime:500,strAttack:"Attack",strSkill:"Skill",strMagic:"Magic",strAtk:"ATK",strMgc:"MGC",strMiss:"MISS",itemTabAll:"All",itemTab1:"Normal",itemTab2:"Battle",itemTab3:"Special",mscTitle:"maou_bgm_orchestra18",mscTown:"maou_bgm_acoustic36",mscDungeon1:"maou_bgm_fantasy01",mscBattle1:"Bite_the_Bullet",mscBattle2:"maou_bgm_fantasy15",mscBattle3:"maou_bgm_orchestra12",mscBattle4:"Strike_the_Despair",mscBattle5:"Integral-one",logEnterDungeon:"Enter the dungeon",logMonsterEncounter:"Monster Encounter",msgInGame1:"Please turn the screen horizontally.",msgInGame2:"Music plays in this game.",msgEnterDungeon:"Do you enter The ",msgAddParty1:"Do you add ",msgAddParty2:" to your party?",msgRemoveParty1:"Do you remove ",msgRemoveParty2:" from the party?",msgAddPartyError:"The party is full. Please remove someone.",msgRemovePartyError:"This character cannot remove from party.",msgSkillCostError:"Skill cost limit error test12345678901234567890"},qn=is("status",{state:()=>({status:A.statusOpening,processTown:A.statusTown,processDungeon:A.processSearch,guildMenu:"",whichDungeon:"",musicDungeon:""})}),Er=is("audio",{state:()=>({currentBgm:null,audioElements:{}}),actions:{playBgm(n){this.currentBgm&&this.audioElements[this.currentBgm].pause(),this.audioElements[n]||(this.audioElements[n]=new Audio(`music/bgm/${n}.mp3`),this.audioElements[n].loop=!0),this.audioElements[n].play(),this.currentBgm=n},playSfx(n){new Audio(require(`music/se/${n}.mp3`)).play()}}}),B_=n=>(kn("data-v-e99d991b"),n=n(),Nn(),n),H_=B_(()=>P("div",{class:"enter"},"ENTER THE CLICK",-1)),z_=[H_],G_={key:1,class:"background"},V_={class:"title"},W_=qe({__name:"Opening",setup(n){const e=qn(),t=Er(),i=xe(!1);ns(()=>{window.innerHeight>window.innerWidth&&(window.onload=()=>{alert(A.msgInGame1)}),window.onload=()=>{alert(A.msgInGame2)}});function s(){i.value=!0,t.playBgm(A.mscTitle)}function r(){e.status=A.statusTown,e.processTown=A.statusTown}return(a,o)=>i.value?(ie(),me("div",G_,[P("div",V_,Re(J(A).title),1),Pe(O_,{class:"btnCard",id:"btn2",inside:J(A).newgame,onClick:o[0]||(o[0]=l=>r())},null,8,["inside"])])):(ie(),me("div",{key:0,class:"background",onClick:s},z_))}}),$_=Ze(W_,[["__scopeId","data-v-e99d991b"]]);/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const Pt={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},qc={itemsToShow:{default:Pt.itemsToShow,type:Number},itemsToScroll:{default:Pt.itemsToScroll,type:Number},wrapAround:{default:Pt.wrapAround,type:Boolean},throttle:{default:Pt.throttle,type:Number},snapAlign:{default:Pt.snapAlign,validator(n){return["start","end","center","center-even","center-odd"].includes(n)}},transition:{default:Pt.transition,type:Number},breakpoints:{default:Pt.breakpoints,type:Object},autoplay:{default:Pt.autoplay,type:Number},pauseAutoplayOnHover:{default:Pt.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:Pt.mouseDrag,type:Boolean},touchDrag:{default:Pt.touchDrag,type:Boolean},dir:{default:Pt.dir,validator(n){return["rtl","ltr"].includes(n)}},i18n:{default:Pt.i18n,type:Object},settings:{default(){return{}},type:Object}};function q_({config:n,slidesCount:e}){const{snapAlign:t,wrapAround:i,itemsToShow:s=1}=n;if(i)return Math.max(e-1,0);let r;switch(t){case"start":r=e-s;break;case"end":r=e-1;break;case"center":case"center-odd":r=e-Math.ceil((s-.5)/2);break;case"center-even":r=e-Math.ceil(s/2);break;default:r=0;break}return Math.max(r,0)}function X_({config:n,slidesCount:e}){const{wrapAround:t,snapAlign:i,itemsToShow:s=1}=n;let r=0;if(t||s>e)return r;switch(i){case"start":r=0;break;case"end":r=s-1;break;case"center":case"center-odd":r=Math.floor((s-1)/2);break;case"center-even":r=Math.floor((s-2)/2);break;default:r=0;break}return r}function ll({val:n,max:e,min:t}){return e<t?n:Math.min(Math.max(n,t),e)}function Y_({config:n,currentSlide:e,slidesCount:t}){const{snapAlign:i,wrapAround:s,itemsToShow:r=1}=n;let a=e;switch(i){case"center":case"center-odd":a-=(r-1)/2;break;case"center-even":a-=(r-2)/2;break;case"end":a-=r-1;break}return s?a:ll({val:a,max:t-r,min:0})}function Kd(n){return n?n.reduce((e,t)=>{var i;return t.type===dt?[...e,...Kd(t.children)]:((i=t.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...e,t]:e},[]):[]}function Ea({val:n,max:e,min:t=0}){return n>e?Ea({val:n-(e+1),max:e,min:t}):n<t?Ea({val:n+(e+1),max:e,min:t}):n}function j_(n,e){let t;return e?function(...i){const s=this;t||(n.apply(s,i),t=!0,setTimeout(()=>t=!1,e))}:n}function K_(n,e){let t;return function(...i){t&&clearTimeout(t),t=setTimeout(()=>{n(...i),t=null},e)}}function Zd(n="",e={}){return Object.entries(e).reduce((t,[i,s])=>t.replace(`{${i}}`,String(s)),n)}var Z_=qe({name:"ARIA",setup(){const n=vt("config",Yt(Object.assign({},Pt))),e=vt("currentSlide",xe(0)),t=vt("slidesCount",xe(0));return()=>Vt("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Zd(n.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:t.value}))}}),J_=qe({name:"Carousel",props:qc,setup(n,{slots:e,emit:t,expose:i}){var s;const r=xe(null),a=xe([]),o=xe(0),l=xe(0),c=Yt(Object.assign({},Pt));let u=Object.assign({},Pt),f;const d=xe((s=n.modelValue)!==null&&s!==void 0?s:0),m=xe(0),_=xe(0),g=xe(0),p=xe(0);let h,E;yn("config",c),yn("slidesCount",l),yn("currentSlide",d),yn("maxSlide",g),yn("minSlide",p),yn("slideWidth",o);function y(){f=Object.assign({},n.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),n),{i18n:Object.assign(Object.assign({},u.i18n),n.i18n),breakpoints:void 0}),C(u)}function b(){if(!f||!Object.keys(f).length)return;const R=Object.keys(f).map(H=>Number(H)).sort((H,ce)=>+ce-+H);let G=Object.assign({},u);R.some(H=>{const ce=window.matchMedia(`(min-width: ${H}px)`).matches;return ce&&(G=Object.assign(Object.assign({},G),f[H])),ce}),C(G)}function C(R){Object.entries(R).forEach(([G,H])=>c[G]=H)}const N=K_(()=>{b(),D()},16);function D(){if(!r.value)return;const R=r.value.getBoundingClientRect();o.value=R.width/c.itemsToShow}function j(){l.value<=0||(_.value=Math.ceil((l.value-1)/2),g.value=q_({config:c,slidesCount:l.value}),p.value=X_({config:c,slidesCount:l.value}),c.wrapAround||(d.value=ll({val:d.value,max:g.value,min:p.value})))}ns(()=>{Ws(()=>D()),setTimeout(()=>D(),1e3),b(),de(),window.addEventListener("resize",N,{passive:!0}),t("init")}),Hl(()=>{E&&clearTimeout(E),h&&clearInterval(h),window.removeEventListener("resize",N,{passive:!0})});let x=!1;const w={x:0,y:0},Q={x:0,y:0},oe=Yt({x:0,y:0}),_e=xe(!1),F=xe(!1),V=()=>{_e.value=!0},W=()=>{_e.value=!1};function Y(R){["INPUT","TEXTAREA","SELECT"].includes(R.target.tagName)||(x=R.type==="touchstart",x||R.preventDefault(),!(!x&&R.button!==0||X.value)&&(w.x=x?R.touches[0].clientX:R.clientX,w.y=x?R.touches[0].clientY:R.clientY,document.addEventListener(x?"touchmove":"mousemove",te,!0),document.addEventListener(x?"touchend":"mouseup",pe,!0)))}const te=j_(R=>{F.value=!0,Q.x=x?R.touches[0].clientX:R.clientX,Q.y=x?R.touches[0].clientY:R.clientY;const G=Q.x-w.x,H=Q.y-w.y;oe.y=H,oe.x=G},c.throttle);function pe(){const R=c.dir==="rtl"?-1:1,G=Math.sign(oe.x)*.4,H=Math.round(oe.x/o.value+G)*R;if(H&&!x){const ce=he=>{he.stopPropagation(),window.removeEventListener("click",ce,!0)};window.addEventListener("click",ce,!0)}ge(d.value-H),oe.x=0,oe.y=0,F.value=!1,document.removeEventListener(x?"touchmove":"mousemove",te,!0),document.removeEventListener(x?"touchend":"mouseup",pe,!0)}function de(){!c.autoplay||c.autoplay<=0||(h=setInterval(()=>{c.pauseAutoplayOnHover&&_e.value||Ee()},c.autoplay))}function z(){h&&(clearInterval(h),h=null),de()}const X=xe(!1);function ge(R){const G=c.wrapAround?R:ll({val:R,max:g.value,min:p.value});d.value===G||X.value||(t("slide-start",{slidingToIndex:R,currentSlideIndex:d.value,prevSlideIndex:m.value,slidesCount:l.value}),X.value=!0,m.value=d.value,d.value=G,E=setTimeout(()=>{if(c.wrapAround){const H=Ea({val:G,max:g.value,min:0});H!==d.value&&(d.value=H,t("loop",{currentSlideIndex:d.value,slidingToIndex:R}))}t("update:modelValue",d.value),t("slide-end",{currentSlideIndex:d.value,prevSlideIndex:m.value,slidesCount:l.value}),X.value=!1,z()},c.transition))}function Ee(){ge(d.value+c.itemsToScroll)}function Te(){ge(d.value-c.itemsToScroll)}const Le={slideTo:ge,next:Ee,prev:Te};yn("nav",Le),yn("isSliding",X);const We=It(()=>Y_({config:c,currentSlide:d.value,slidesCount:l.value}));yn("slidesToScroll",We);const Be=It(()=>{const R=c.dir==="rtl"?-1:1,G=We.value*o.value*R;return{transform:`translateX(${oe.x-G}px)`,transition:`${X.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${l.value*o.value}px`:"",width:"100%"}});function Se(){y(),b(),j(),D(),z()}Object.keys(qc).forEach(R=>{["modelValue"].includes(R)||wt(()=>n[R],Se)}),wt(()=>n.modelValue,R=>{R!==d.value&&ge(Number(R))}),wt(l,j),t("before-init"),y();const ke={config:c,slidesCount:l,slideWidth:o,next:Ee,prev:Te,slideTo:ge,currentSlide:d,maxSlide:g,minSlide:p,middleSlide:_};i({updateBreakpointsConfigs:b,updateSlidesData:j,updateSlideWidth:D,initDefaultConfigs:y,restartCarousel:Se,slideTo:ge,next:Ee,prev:Te,nav:Le,data:ke});const He=e.default||e.slides,M=e.addons,I=Yt(ke);return()=>{const R=Kd(He==null?void 0:He(I)),G=(M==null?void 0:M(I))||[];R.forEach((se,ue)=>se.props.index=ue);let H=R;if(c.wrapAround){const se=R.map((ae,be)=>Ti(ae,{index:-R.length+be,isClone:!0,key:`clone-before-${be}`})),ue=R.map((ae,be)=>Ti(ae,{index:R.length+be,isClone:!0,key:`clone-after-${be}`}));H=[...se,...R,...ue]}a.value=R,l.value=Math.max(R.length,1);const ce=Vt("ol",{class:"carousel__track",style:Be.value,onMousedownCapture:c.mouseDrag?Y:null,onTouchstartPassiveCapture:c.touchDrag?Y:null},H),he=Vt("div",{class:"carousel__viewport"},ce);return Vt("section",{ref:r,class:{carousel:!0,"is-sliding":X.value,"is-dragging":F.value,"is-hover":_e.value,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":c.i18n.ariaGallery,tabindex:"0",onMouseenter:V,onMouseleave:W},[he,G,Vt(Z_)])}}}),cl;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(cl||(cl={}));const Q_={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function eg(n){return n in cl}const ul=n=>{const e=vt("config",Yt(Object.assign({},Pt))),t=String(n.name),i=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!eg(t))return;const s=Q_[t],r=Vt("path",{d:s}),a=e.i18n[i]||n.title||t,o=Vt("title",a);return Vt("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":a},[o,r])};ul.props={name:String,title:String};const tg=(n,{slots:e,attrs:t})=>{const{next:i,prev:s}=e||{},r=vt("config",Yt(Object.assign({},Pt))),a=vt("maxSlide",xe(1)),o=vt("minSlide",xe(1)),l=vt("currentSlide",xe(1)),c=vt("nav",{}),{dir:u,wrapAround:f,i18n:d}=r,m=u==="rtl",_=Vt("button",{type:"button",class:["carousel__prev",!f&&l.value<=o.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":d.ariaPreviousSlide,onClick:c.prev},(s==null?void 0:s())||Vt(ul,{name:m?"arrowRight":"arrowLeft"})),g=Vt("button",{type:"button",class:["carousel__next",!f&&l.value>=a.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":d.ariaNextSlide,onClick:c.next},(i==null?void 0:i())||Vt(ul,{name:m?"arrowLeft":"arrowRight"}));return[_,g]},ng=()=>{const n=vt("config",Yt(Object.assign({},Pt))),e=vt("maxSlide",xe(1)),t=vt("minSlide",xe(1)),i=vt("currentSlide",xe(1)),s=vt("nav",{}),r=o=>Ea({val:i.value,max:e.value,min:0})===o,a=[];for(let o=t.value;o<e.value+1;o++){const l=Vt("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(o)},"aria-label":Zd(n.i18n.ariaNavigateToSlide,{slideNumber:o+1}),onClick:()=>s.slideTo(o)}),c=Vt("li",{class:"carousel__pagination-item",key:o},l);a.push(c)}return Vt("ol",{class:"carousel__pagination"},a)};var ig=qe({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(n,{slots:e}){const t=vt("config",Yt(Object.assign({},Pt))),i=vt("currentSlide",xe(0)),s=vt("slidesToScroll",xe(0)),r=vt("isSliding",xe(!1)),a=()=>n.index===i.value,o=()=>n.index===i.value-1,l=()=>n.index===i.value+1,c=()=>{const u=Math.floor(s.value),f=Math.ceil(s.value+t.itemsToShow-1);return n.index>=u&&n.index<=f};return()=>{var u;return Vt("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":c(),"carousel__slide--active":a(),"carousel__slide--prev":o(),"carousel__slide--next":l(),"carousel__slide--sliding":r.value},"aria-hidden":!c()},(u=e.default)===null||u===void 0?void 0:u.call(e))}}});const sg=[{cha_id:1,name:"Ace",class:"Samurai",faceGraphicUrl:"img/character/chara1face.png",poseGraphicUrl:"img/character/chara1.png",backgroundUrl:"img/character/chara1back.jpg",LV:10,exp:50,nextLvExp:100,HP:220,MP:80,ATK:70,MGC:30,DEF:50,MDF:40,DEX:60,SPD:50,Slash:10,Hit:10,Stab:0,Fire:10,Water:0,Earth:10,Wind:0,Light:0,Dark:0,equipment:{WEP:103,ARM:1003,ACC:2001},activeSkill:[101,102,103,104,105,106],passiveCost:40,passiveSkill:[1,2,3,4],equipSkill:[1,3]},{cha_id:2,name:"Sophia",class:"Holy Knight",faceGraphicUrl:"img/character/chara2face.png",poseGraphicUrl:"img/character/chara2.png",backgroundUrl:"img/character/chara2back.jpg",LV:10,exp:50,nextLvExp:1e3,HP:250,MP:100,ATK:50,MGC:40,DEF:60,MDF:60,DEX:50,SPD:50,Slash:10,Hit:10,Stab:10,Fire:0,Water:0,Earth:10,Wind:0,Light:10,Dark:0,equipment:{WEP:101,ARM:1002,ACC:2101},activeSkill:[201,202,203,204,205],passiveCost:40,passiveSkill:[2,3,4,5],equipSkill:[2,5]},{cha_id:3,name:"Miroku",class:"Priest",faceGraphicUrl:"img/character/chara3face.png",poseGraphicUrl:"img/character/chara3.png",backgroundUrl:"img/character/chara3back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:200,MP:150,ATK:40,MGC:60,DEF:40,MDF:60,DEX:40,SPD:40,Slash:0,Hit:0,Stab:0,Fire:0,Water:10,Earth:0,Wind:0,Light:10,Dark:0,equipment:{WEP:501,ARM:1201,ACC:2201},activeSkill:[301,302,303,304,305],passiveCost:40,passiveSkill:[5,6,7,8],equipSkill:[5,7]},{cha_id:4,name:"Diana",class:"Archer",faceGraphicUrl:"img/character/chara4face.png",poseGraphicUrl:"img/character/chara4.png",backgroundUrl:"img/character/chara4back.jpg",LV:10,exp:500,nextLvExp:1e3,HP:180,MP:150,ATK:60,MGC:30,DEF:40,MDF:40,DEX:60,SPD:60,Slash:0,Hit:0,Stab:10,Fire:0,Water:0,Earth:0,Wind:10,Light:0,Dark:10,equipment:{WEP:401,ARM:1301,ACC:2001},activeSkill:[401,402,403,404,405],passiveCost:40,passiveSkill:[4,7,8,9],equipSkill:[4,9]},{cha_id:5,name:"Perseus",class:"Warrior",faceGraphicUrl:"img/character/chara5face.png",poseGraphicUrl:"img/character/chara5.png",backgroundUrl:"img/character/chara5back.jpg",LV:10,exp:50,nextLvExp:1e3,HP:250,MP:50,ATK:65,MGC:20,DEF:55,MDF:40,DEX:40,SPD:30,Slash:10,Hit:10,Stab:10,Fire:0,Water:0,Earth:20,Wind:0,Light:10,Dark:0,equipment:{WEP:601,ARM:1001,ACC:2101},activeSkill:[501,502,503,504,505,506],passiveCost:40,passiveSkill:[1,2,3,4],equipSkill:[1,4]},{cha_id:6,name:"Nyx",class:"Witch",faceGraphicUrl:"img/character/chara6face.png",poseGraphicUrl:"img/character/chara6.png",backgroundUrl:"img/character/chara6back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:150,MP:200,ATK:30,MGC:80,DEF:30,MDF:70,DEX:40,SPD:40,Slash:0,Hit:0,Stab:0,Fire:20,Water:0,Earth:0,Wind:20,Light:0,Dark:10,equipment:{WEP:502,ARM:1201,ACC:2301},activeSkill:[601,602,603,604,605],passiveCost:40,passiveSkill:[9,10,11,12],equipSkill:[8,9]},{cha_id:7,name:"Raven",class:"Assassin",faceGraphicUrl:"img/character/chara7face.png",poseGraphicUrl:"img/character/chara7.png",backgroundUrl:"img/character/chara7back.jpg",LV:10,exp:950,nextLvExp:1e3,HP:180,MP:80,ATK:70,MGC:30,DEF:40,MDF:40,DEX:80,SPD:80,Slash:20,Hit:20,Stab:20,Fire:0,Water:0,Earth:0,Wind:0,Light:0,Dark:20,equipment:{WEP:201,ARM:1301,ACC:2001},activeSkill:[701,702,703,704,705,706],passiveCost:40,passiveSkill:[13,14,15,16],equipSkill:[10,11]}],rg=[{skill_id:1,name:"Master Of Swords",info:"When equipped with a sword, physical attack power and accuracy increase.",skill_cost:10,condition:{equipment:"WEP",kind:"sword"},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:20,target:1},{effect_type:1,effect_target:"DEX",effect_amount:10,target:1}]},{skill_id:2,name:"Body Of Steel",info:"When HP is below 50%, physical defense and magic defense increase.",skill_cost:15,condition:{character:"nowHP",under:.5},effect_number:2,skill_effect:[{effect_type:1,effect_target:"DEF",effect_amount:30,target:1},{effect_type:1,effect_target:"MDF",effect_amount:30,target:1}]},{skill_id:3,name:"Flame Blade",info:"Deals additional fire damage when attacking.",skill_cost:20,condition:{attack:.3},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:50,target:4}]},{skill_id:4,name:"Fighting Spirit",info:"When HP is below 20%, attack power and speed increase.",skill_cost:25,condition:{character:"nowHP",under:.2},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:50,target:1},{effect_type:1,effect_target:"SPD",effect_amount:50,target:1}]},{skill_id:5,name:"Ready To Counterattack",info:"被ダメージ時に確率で反撃する",skill_cost:30,condition:{counter:.3},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:100,target:4}]},{skill_id:6,name:"Divine Protection",info:"常にHPが少しずつ回復する",skill_cost:10,condition:[],effect_number:1,skill_effect:[{effect_type:9,effect_target:"HP",effect_amount:10,target:1}]},{skill_id:7,name:"God's Wrath",info:"HPが50%以下の時、聖属性の追加ダメージを与える",skill_cost:100,condition:{character:"nowHP",under:.5},effect_number:1,skill_effect:[{effect_type:9,effect_target:"ATK",effect_amount:50,target:4}]},{skill_id:8,name:"God's Mercy",info:"HPが10%以下の時、完全回復する",skill_cost:20,condition:{character:"nowHP",under:.1},effect_number:1,skill_effect:[{effect_type:9,effect_target:"HP",effect_amount:0,target:1}]},{skill_id:9,name:"Power Of God",info:"2ターンの間、自分の攻撃力と防御力を上げる",skill_cost:25,condition:{underturns:2},effect_number:2,skill_effect:[{effect_type:1,effect_target:"ATK",effect_amount:30,target:1},{effect_type:1,effect_target:"DEF",effect_amount:30,target:1}]}];class Jd{constructor(e){Ue(this,"skill_id");Ue(this,"name");Ue(this,"info");Ue(this,"skill_cost");Ue(this,"condition");Ue(this,"effect_number");Ue(this,"skill_effect");Ue(this,"equip");this.skill_id=e.skill_id,this.name=e.name,this.info=e.info,this.skill_cost=e.skill_cost,this.condition=e.condition,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect,this.equip=!1}}const Qd=rg.map(n=>new Jd(n)),ag=[{eqp_id:101,type:"WEP",kind:"Sword",attribute:1,name:"Sword",status:{ATK:10,HitRate:90}},{eqp_id:102,type:"WEP",kind:"Sword",attribute:1,name:"LongSword",status:{ATK:15,HitRate:90}},{eqp_id:103,type:"WEP",kind:"Sword",attribute:1,name:"Katana",status:{ATK:12,DEX:3,HitRate:90}},{eqp_id:110,type:"WEP",kind:"Sword",attribute:1,name:"x-Cariver",status:{ATK:100,HitRate:90,Earth:50}},{eqp_id:201,type:"WEP",kind:"Dagger",attribute:1,name:"Dagger",status:{ATK:5,DEX:5,HitRate:95}},{eqp_id:301,type:"WEP",kind:"Spear",attribute:1,name:"Spear",status:{ATK:12,HitRate:90}},{eqp_id:401,type:"WEP",kind:"Bow",attribute:3,name:"Bow",status:{ATK:5,DEX:5,HitRate:90}},{eqp_id:402,type:"WEP",kind:"Bow",attribute:7,name:"Artemis",status:{ATK:50,DEX:50,HitRate:100,Wind:50}},{eqp_id:501,type:"WEP",kind:"Wand",attribute:2,name:"Staff",status:{ATK:5,MGC:5,HitRate:85}},{eqp_id:502,type:"WEP",kind:"Wand",attribute:2,name:"Wand",status:{MGC:10,HitRate:85}},{eqp_id:510,type:"WEP",kind:"Wand",attribute:2,name:"WaWaWand",status:{MGC:100,HitRate:85,Dark:50}},{eqp_id:601,type:"WEP",kind:"Axe",attribute:1,name:"Axe",status:{ATK:15,HitRate:80}},{eqp_id:1001,type:"ARM",kind:"Armor",attribute:0,name:"Armor",status:{DEF:5,MDF:5,SPD:-5}},{eqp_id:1002,type:"ARM",kind:"Armor",attribute:0,name:"Plate Armor",status:{DEF:10,MDF:5,SPD:-10}},{eqp_id:1003,type:"ARM",kind:"Armor",attribute:0,name:"Leather Armor",status:{DEF:5,MDF:5}},{eqp_id:1020,type:"ARM",kind:"Armor",attribute:0,name:"12Armor",status:{DEF:50,MDF:50,Slash:20,Hit:20,Stab:20}},{eqp_id:1101,type:"ARM",kind:"Shield",attribute:0,name:"Shield",status:{DEF:7,MDF:3}},{eqp_id:1110,type:"ARM",kind:"Shield",attribute:0,name:"TRXShield",status:{DEF:70,MDF:30,Earth:50}},{eqp_id:1201,type:"ARM",kind:"Robe",attribute:0,name:"Robe",status:{DEF:3,MDF:7}},{eqp_id:1210,type:"ARM",kind:"Robe",attribute:8,name:"EngelRobe",status:{DEF:40,MDF:60,Light:100}},{eqp_id:1301,type:"ARM",kind:"Cloth",attribute:0,name:"Cloth",status:{DEF:4,MDF:4}},{eqp_id:1321,type:"ARM",kind:"Cloth",attribute:9,name:"NinjaSuits",status:{DEF:30,MDF:30,DEX:30,SPD:10,Dark:50}},{eqp_id:2001,type:"ACC",kind:"Bangle",attribute:0,name:"Bangle",status:{ATK:5}},{eqp_id:2101,type:"ACC",kind:"Ring",attribute:0,name:"Ring",status:{DEF:5}},{eqp_id:2151,type:"ACC",kind:"Ring",attribute:9,name:"DevilRing",status:{ATK:50,MDF:-50,Dark:100}},{eqp_id:2201,type:"ACC",kind:"Neckless",attribute:0,name:"Neckless",status:{MDF:5}},{eqp_id:2301,type:"ACC",kind:"Amulet",attribute:0,name:"Amulet",status:{MGC:5}},{eqp_id:2451,type:"ACC",kind:"Belt",attribute:0,name:"RiderBelt",status:{HP:100,MP:50,ATK:30,MGC:10,DEF:30,MDF:30,DEX:30,SPD:10,Fire:30,Water:30,Earth:30,Wind:30}},{eqp_id:2551,type:"ACC",kind:"cape",attribute:8,name:"HolyBless",status:{MP:100,MGC:50,DEF:20,MDF:50,Light:100}}];class og{constructor(e){Ue(this,"eqp_id");Ue(this,"type");Ue(this,"kind");Ue(this,"attribute");Ue(this,"name");Ue(this,"status");this.eqp_id=e.eqp_id,this.type=e.type,this.kind=e.kind,this.attribute=e.attribute,this.name=e.name,this.status=e.status}}const ur=ag.map(n=>new og(n)),lg=[{skill_id:101,name:"Zan",use:1,info:"A basic sword attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/zan.gif",anime_time:700}]},{skill_id:102,name:"Suienzan",use:1,info:"A swift sword attack that deals physical damage to one enemy.",attribute:5,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:2,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/suienzan.gif",anime_time:1050}]},{skill_id:103,name:"Kishouzan",use:1,info:"A sword attack that deals physical damage to one enemy and heals the user.",attribute:9,interval:3,consume_type:"HP",consume_amount:10,effect_number:2,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/kishouzan1.gif",anime_time:480},{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"myself",skill_anime:"effect/skill/samurai/kishouzan2.gif",anime_time:700}]},{skill_id:104,name:"Oukazan",use:1,info:"A powerful sword attack that deals physical damage to one enemies.",attribute:1,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",success_rate:1,effect_amount:1.3,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/samurai/oukazan.gif",anime_time:1200}]},{skill_id:105,name:"Hienzan",use:1,info:"A powerful sword attack that deals physical damage to one row of enemies.",attribute:4,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/samurai/hienzan.gif",anime_time:1e3}]},{skill_id:106,name:"Ryuuhasuizan",use:1,info:"A element sword attack that deals water damage to all enemies.",attribute:5,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"allEnemy",skill_anime:"effect/skill/samurai/ryuuhasuizan.gif",anime_time:1500}]},{skill_id:201,name:"Holy Strike",use:1,info:"A holy sword attack that deals light damage to one enemy and reduces their dark resistance.",attribute:8,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.4,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/holyknight/holy_strike.gif",anime_time:930}]},{skill_id:202,name:"Heal",use:0,info:"A healing spell that restores HP to one ally.",attribute:10,interval:1,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1,target:1,target_type:"oneFriend",skill_anime:"effect/skill/holyknight/heal.gif",anime_time:740}]},{skill_id:203,name:"Holy Shield",use:1,info:"A protective spell that increases the physical and magical defense of one ally for a few turns.",attribute:8,interval:2,consume_type:"MP",consume_amount:15,effect_number:2,skill_effect:[{effect_type:"buff",effect_kind:"DEF",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"effect/skill/holyknight/holy_shield.gif",anime_time:750},{effect_type:"buff",effect_kind:"MDF",effect_times:3,base_status:"MGC",effect_amount:1.2,target:1,target_type:"oneFriend",skill_anime:"",anime_time:0}]},{skill_id:204,name:"Holy Light",use:1,info:"A radiant spell that deals light damage to all enemies and heals all allies.",attribute:8,interval:3,consume_type:"MP",consume_amount:20,effect_number:2,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1,target:2,target_type:"allEnemy",skill_anime:"effect/skill/holyknight/holy_light.gif",anime_time:1040},{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"allFriends",skill_anime:"",anime_time:0}]},{skill_id:205,name:"Divine Judgment",use:1,info:"A supreme spell that deals massive light damage to one enemy and has a chance to inflict instant death.",attribute:8,interval:4,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:2.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/holyknight/divine_judgment.gif",anime_time:1680}]},{skill_id:301,name:"Pray",use:0,info:"A simple prayer that restores a small amount of MP to the user.",attribute:10,interval:1,consume_type:"HP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowMP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.2,target:1,target_type:"myself",skill_anime:"effect/skill/priest/pray.gif",anime_time:980}]},{skill_id:302,name:"Cure",use:0,info:"A healing spell that restores HP to one ally and removes one negative status effect.",attribute:10,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"heal",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.8,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/cure.gif",anime_time:1050}]},{skill_id:303,name:"Bless",use:1,info:"A holy spell that increases the ATK of one ally for a few turns.",attribute:8,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"buff",effect_kind:"ATK",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/bless.gif",anime_time:1040}]},{skill_id:304,name:"Regen",use:1,info:"A healing spell that restores HP to all allies gradually for a few turns.",attribute:10,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"condition",effect_kind:"regeneration",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:.3,target:1,target_type:"allFriends",skill_anime:"effect/skill/priest/regen.gif",anime_time:2080}]},{skill_id:305,name:"Resurrect",use:0,info:"A miracle spell that revives one fallen ally with some HP.",attribute:10,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"revive",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:.5,target:1,target_type:"oneFriend",skill_anime:"effect/skill/priest/resurrect.gif",anime_time:1470}]},{skill_id:401,name:"Arrow Shot",use:1,info:"A basic bow attack that deals physical damage to one enemy.",attribute:0,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/arrow_shot.gif",anime_time:480}]},{skill_id:402,name:"Multi Shot",use:1,info:"A bow attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:4,base_status:"ATK",success_rate:1,effect_amount:.8,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/archar/multi_shot.gif",anime_time:1600}]},{skill_id:403,name:"Piercing Shot",use:1,info:"A bow attack that deals physical damage to one column of enemies and ignores their defense.",attribute:0,interval:2,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"columnEnemy",skill_anime:"effect/skill/archar/piercing_shot.gif",anime_time:880}]},{skill_id:404,name:"Poison Shot",use:1,info:"A bow attack that deals physical damage to one enemy and has a chance to inflict poison status for a few turns.",attribute:0,interval:2.5,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/poison_shot.gif",anime_time:720}]},{skill_id:405,name:"Explosive Shot",use:1,info:"A bow attack that deals fire damage to one enemy and causes an explosion that damages nearby enemies.",attribute:4,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:2.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/archar/explosive_shot.gif",anime_time:1400}]},{skill_id:501,name:"Wild Strike",use:1,info:"A strike attack with a weapon that deals physical damage to one enemy.",attribute:2,interval:1.5,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/wild_strike.gif",anime_time:500}]},{skill_id:502,name:"Heavy Strike",use:1,info:"A strike attack with a weapon that deals physical damage to one enemy and stun target.",attribute:2,interval:1.5,consume_type:"MP",consume_amount:8,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/heavy_strike.gif",anime_time:500}]},{skill_id:503,name:"Double Slash",use:1,info:"A swift sword attack that deals physical damage to one enemy twice.",attribute:1,interval:1.5,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",success_rate:1,effect_amount:1,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/warrior/double_slash.gif",anime_time:800}]},{skill_id:504,name:"Tornado Slash",use:1,info:"A fierce slash like a tornado that deals damage to row enemies.",attribute:1,interval:2.5,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/warrior/tornado_slash.gif",anime_time:900}]},{skill_id:505,name:"Explosive Strike",use:1,info:"A furious weapons blows attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:3,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:8,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/warrior/explosive_strike.gif",anime_time:1600}]},{skill_id:506,name:"Gale Road",use:1,info:"A attack that deals damage to all enemies.",attribute:5,interval:2.5,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.8,target:2,target_type:"allEnemy",skill_anime:"effect/skill/warrior/gale_road.gif",anime_time:1300}]},{skill_id:601,name:"Pillar Fire",use:1,info:"A magic fire attack that deals damage to one enemy.",attribute:4,interval:2,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/witch/PillarFire.gif",anime_time:1e3}]},{skill_id:602,name:"Windlash",use:1,info:"A magical wind blade that deals magical damage to one row of enemies.",attribute:7,interval:3,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.2,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/witch/Windlash.gif",anime_time:1e3}]},{skill_id:603,name:"Flame Tower",use:1,info:"A flame magic that deals damage to one column of enemies.",attribute:4,interval:2,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.5,target:2,target_type:"columnEnemy",skill_anime:"effect/skill/witch/FlameTower.gif",anime_time:1500}]},{skill_id:604,name:"Earthquake",use:1,info:"Raise the ground with magic and attack all enemiess.",attribute:6,interval:3,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"MGC",success_rate:1,effect_amount:1.5,target:2,target_type:"allEnemy",skill_anime:"effect/skill/witch/Earthquake.gif",anime_time:2200}]},{skill_id:605,name:"Heaven's Roar",use:1,info:"Generates a dense thundercloud that attacks all enemies.",attribute:8,interval:4,consume_type:"MP",consume_amount:30,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"MGC",success_rate:1,effect_amount:.7,target:2,target_type:"allEnemy",skill_anime:"effect/skill/witch/Heaven's Roar.gif",anime_time:3e3}]},{skill_id:701,name:"Cross Cut",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:5,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/cross_cut.gif",anime_time:600}]},{skill_id:702,name:"Dark Crescent",use:1,info:"A powerful sword flash that deals physical damage to one row of enemies.",attribute:10,interval:2,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:3,base_status:"ATK",success_rate:1,effect_amount:.4,target:2,target_type:"rowEnemy",skill_anime:"effect/skill/assassin/dark_crescent.gif",anime_time:1100}]},{skill_id:703,name:"Momentary Slash",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:10,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:1,base_status:"ATK",success_rate:1,effect_amount:2,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/momentary_slash.gif",anime_time:800}]},{skill_id:704,name:"Rapid Slash",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:1,interval:1,consume_type:"MP",consume_amount:15,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:5,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/rapid_slash.gif",anime_time:900}]},{skill_id:705,name:"Dark Cross",use:1,info:"A basic attack that deals physical damage to one enemy.",attribute:10,interval:1,consume_type:"MP",consume_amount:20,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:2,base_status:"ATK",success_rate:1,effect_amount:1.5,target:2,target_type:"oneEnemy",skill_anime:"effect/skill/assassin/dark_cross.gif",anime_time:800}]},{skill_id:706,name:"High Speed Slash",use:1,info:"A furious weapons blows attack that deals physical damage to multiple enemies randomly.",attribute:0,interval:3,consume_type:"MP",consume_amount:25,effect_number:1,skill_effect:[{effect_type:"attack",effect_kind:"nowHP",effect_times:10,base_status:"ATK",success_rate:1,effect_amount:.5,target:2,target_type:"randomEnemy",skill_anime:"effect/skill/assassin/high_speed_slash.gif",anime_time:1600}]}];class eh{constructor(e){Ue(this,"skill_id");Ue(this,"name");Ue(this,"use");Ue(this,"info");Ue(this,"attribute");Ue(this,"interval");Ue(this,"consume_type");Ue(this,"consume_amount");Ue(this,"effect_number");Ue(this,"skill_effect");this.skill_id=e.skill_id,this.name=e.name,this.use=e.use,this.info=e.info,this.attribute=e.attribute,this.interval=e.interval,this.consume_type=e.consume_type,this.consume_amount=e.consume_amount,this.effect_number=e.effect_number,this.skill_effect=e.skill_effect}}const th=lg.map(n=>new eh(n));class on{constructor(e,t){Ue(this,"cha_id");Ue(this,"name");Ue(this,"class");Ue(this,"faceGraphicUrl");Ue(this,"poseGraphicUrl");Ue(this,"backgroundUrl");Ue(this,"LV");Ue(this,"exp");Ue(this,"nextLvExp");Ue(this,"baseStatus");Ue(this,"equipment");Ue(this,"totalStatus");Ue(this,"buffs",[]);Ue(this,"conditions",[]);Ue(this,"nowHP");Ue(this,"nowMP");Ue(this,"activeSkill");Ue(this,"passiveCost");Ue(this,"passiveSkill");this.cha_id=e.cha_id,this.name=e.name,this.class=e.class,this.faceGraphicUrl=e.faceGraphicUrl,this.poseGraphicUrl=e.poseGraphicUrl,this.backgroundUrl=e.backgroundUrl,this.LV=e.LV,this.exp=e.exp,this.nextLvExp=e.nextLvExp,this.baseStatus={HP:e.HP,MP:e.MP,ATK:e.ATK,MGC:e.MGC,DEF:e.DEF,MDF:e.MDF,DEX:e.DEX,SPD:e.SPD,HitRate:0,CritRate:0,Hate:1-t*.1,Slash:e.Slash,Stab:e.Stab,Hit:e.Hit,Fire:e.Fire,Water:e.Water,Earth:e.Earth,Wind:e.Wind,Light:e.Light,Dark:e.Dark},this.equipment={WEP:ur.find(i=>i.eqp_id===e.equipment.WEP)??null,ARM:ur.find(i=>i.eqp_id===e.equipment.ARM)??null,ACC:ur.find(i=>i.eqp_id===e.equipment.ACC)??null},this.totalStatus=this.calculateTotalStatus(),this.nowHP=this.totalStatus.HP,this.nowMP=this.totalStatus.MP,this.activeSkill=e.activeSkill.map(i=>th.find(s=>s.skill_id===i)),this.passiveCost=e.passiveCost,this.passiveSkill=e.passiveSkill.map(i=>{const s=Qd.find(a=>a.skill_id===i);let r;return s&&(r=new Jd(s),r.equip=e.equipSkill.includes(i)),r}).filter(i=>i!==void 0)}changeEquipment(e,t){this.equipment[e]=t,this.totalStatus=this.calculateTotalStatus()}calculateTotalStatus(){let e={...this.baseStatus};for(let t in this.equipment){let i=this.equipment[t];if(i)for(let s in i.status)e[s]+=i.status[s]}e.HitRate=this.calculateHitRate(e.DEX),e.CritRate=Math.floor(e.DEX/8);for(let t of this.buffs.values())e[t.status]+=t.value;return e}calculateHitRate(e){var i,s;return((i=this.equipment.WEP)!=null&&i.status.HitRate?(s=this.equipment.WEP)==null?void 0:s.status.HitRate:A.initHitRate)+Math.floor(e/10)}updateHate(e){this.baseStatus.Hate=1-e*.1,this.totalStatus=this.calculateTotalStatus()}addBuff(e,t,i,s){const r=this.buffs.findIndex(a=>a.name===e&&a.status===t);r!==-1?(this.buffs[r].value=i,this.buffs[r].duration=s):this.buffs.push({name:e,status:t,value:i,duration:s})}removeBuff(e,t){this.buffs=this.buffs.filter(i=>!(i.name===e&&i.status===t))}updateBuffs(){this.buffs=this.buffs.map(e=>(e.duration--,e.duration<=0?null:e)).filter(e=>e!==null),this.totalStatus=this.calculateTotalStatus()}addCondition(e,t,i,s){const r=this.conditions.findIndex(a=>a.name===e&&a.status===t);r!==-1?(this.conditions[r].value=i,this.conditions[r].duration=s):this.conditions.push({name:e,status:t,value:i,duration:s})}removeCondition(e,t){this.conditions=this.conditions.filter(i=>!(i.name===e&&i.status===t))}updateConditions(){this.conditions=this.conditions.map(e=>(e.duration--,e.duration<=0?null:e)).filter(e=>e!==null)}}const ql=sg.map((n,e)=>new on(n,e)),nh=n=>(kn("data-v-194a8221"),n=n(),Nn(),n),cg={key:0,class:"CharaCardUI"},ug={class:"line1"},fg={class:"name"},dg={class:"leftItem"},hg=nh(()=>P("span",{class:"statuskinds"},"LV ",-1)),pg={class:"line2"},mg=nh(()=>P("span",{class:"statuskinds"},"CLASS",-1)),_g={class:"leftItem"},gg=qe({__name:"CharaCard",props:{character:{type:on}},setup(n){return(e,t)=>n.character?(ie(),me("div",cg,[P("div",ug,[P("span",fg,Re(n.character.name),1),P("span",dg,[hg,P("span",null,Re(n.character.LV),1)])]),P("div",pg,[mg,P("span",_g,Re(n.character.class),1)])])):Ke("",!0)}}),ih=Ze(gg,[["__scopeId","data-v-194a8221"]]),vg={class:"progress-bar-hp"},Mg=["value","max"],xg={class:"nowHP"},Sg=qe({__name:"ProgressBarHp",props:{nowHP:{type:Number},maxHP:{type:Number}},setup(n){return(e,t)=>(ie(),me("div",vg,[P("progress",{class:"progress-hp",value:n.nowHP,max:n.maxHP},null,8,Mg),P("span",xg,Re(n.nowHP)+"/"+Re(n.maxHP),1)]))}}),qa=Ze(Sg,[["__scopeId","data-v-48f5d701"]]),yg={class:"progress-bar-mp"},Eg=["value","max"],bg={class:"nowMP"},Tg=qe({__name:"ProgressBarMp",props:{nowMP:{type:Number},maxMP:{type:Number}},setup(n){return(e,t)=>(ie(),me("div",yg,[P("progress",{class:"progress-mp",value:n.nowMP,max:n.maxMP},null,8,Eg),P("span",bg,Re(n.nowMP)+"/"+Re(n.maxMP),1)]))}}),Xl=Ze(Tg,[["__scopeId","data-v-2ef7ebd3"]]),Ag=n=>(kn("data-v-75494c40"),n=n(),Nn(),n),wg=["value","max"],Cg=Ag(()=>P("span",{class:"next"},"NEXT",-1)),Rg={class:"nextExp"},Pg=qe({__name:"ProgressBarExp",props:{exp:{type:Number},next:{type:Number}},setup(n){return(e,t)=>(ie(),me(dt,null,[P("progress",{class:"progress-exp",value:n.exp,max:n.next},null,8,wg),Cg,P("span",Rg,Re(n.next-n.exp),1)],64))}}),sh=Ze(Pg,[["__scopeId","data-v-75494c40"]]),Mn=n=>(kn("data-v-cb774c9c"),n=n(),Nn(),n),Lg={key:0,class:"CharaStatusUI"},Dg={class:"hpline"},Ig=Mn(()=>P("span",{class:"statuskinds"},"HP",-1)),Ug={class:"progress-bar"},Fg={class:"mpline"},kg=Mn(()=>P("span",{class:"statuskinds"},"MP",-1)),Ng={class:"progress-bar"},Og={class:"expline"},Bg=Mn(()=>P("span",{class:"statuskinds"},"EXP",-1)),Hg={class:"progress-bar-exp"},zg={class:"atkline"},Gg={class:"leftItem"},Vg=Mn(()=>P("span",{class:"statuskinds"},"ATK",-1)),Wg={class:"statusValue"},$g={class:"rightItem"},qg=Mn(()=>P("span",{class:"statuskinds"},"MGC",-1)),Xg={class:"statusValue"},Yg={class:"defline"},jg={class:"leftItem"},Kg=Mn(()=>P("span",{class:"statuskinds"},"DEF",-1)),Zg={class:"statusValue"},Jg={class:"rightItem"},Qg=Mn(()=>P("span",{class:"statuskinds"},"MDF",-1)),e0={class:"statusValue"},t0={class:"dexline"},n0={class:"leftItem"},i0=Mn(()=>P("span",{class:"statuskinds"},"DEX",-1)),s0={class:"statusValue"},r0={class:"rightItem"},a0=Mn(()=>P("span",{class:"statuskinds"},"SPD",-1)),o0={class:"statusValue"},l0={class:"wepline"},c0=Mn(()=>P("span",{class:"statuskinds"},"WEP",-1)),u0={class:"equipName"},f0={class:"armline"},d0=Mn(()=>P("span",{class:"statuskinds"},"ARM",-1)),h0={class:"equipName"},p0={class:"accline"},m0=Mn(()=>P("span",{class:"statuskinds"},"ACC",-1)),_0={class:"equipName"},g0={class:"passiveSkill"},v0=Mn(()=>P("div",{class:"statuskinds"},"PASSIVE SKILL",-1)),M0={class:"skillList",density:"compact"},x0={key:0},S0=qe({__name:"CharaStatus",props:{character:{type:on}},setup(n){return(e,t)=>{var i,s,r;return n.character?(ie(),me("div",Lg,[P("div",Dg,[Ig,P("span",Ug,[Pe(qa,{nowHP:n.character.nowHP,maxHP:n.character.totalStatus.HP},null,8,["nowHP","maxHP"])])]),P("div",Fg,[kg,P("span",Ng,[Pe(Xl,{nowMP:n.character.nowMP,maxMP:n.character.totalStatus.MP},null,8,["nowMP","maxMP"])])]),P("div",Og,[Bg,P("span",Hg,[Pe(sh,{exp:n.character.exp,next:n.character.nextLvExp},null,8,["exp","next"])])]),P("div",zg,[P("span",Gg,[Vg,P("span",Wg,Re(n.character.totalStatus.ATK),1)]),P("span",$g,[qg,P("span",Xg,Re(n.character.totalStatus.MGC),1)])]),P("div",Yg,[P("span",jg,[Kg,P("span",Zg,Re(n.character.totalStatus.DEF),1)]),P("span",Jg,[Qg,P("span",e0,Re(n.character.totalStatus.MDF),1)])]),P("div",t0,[P("span",n0,[i0,P("span",s0,Re(n.character.totalStatus.DEX),1)]),P("span",r0,[a0,P("span",o0,Re(n.character.totalStatus.SPD),1)])]),P("div",l0,[c0,P("span",u0,Re((i=n.character.equipment.WEP)==null?void 0:i.name),1)]),P("div",f0,[d0,P("span",h0,Re((s=n.character.equipment.ARM)==null?void 0:s.name),1)]),P("div",p0,[m0,P("span",_0,Re((r=n.character.equipment.ACC)==null?void 0:r.name),1)]),P("div",g0,[v0,P("ul",M0,[(ie(!0),me(dt,null,jt(n.character.passiveSkill,a=>(ie(),me("li",{key:a.skill_id,class:"skillItem"},[a.equip===!0?(ie(),me("span",x0,Re(a.name),1)):Ke("",!0)]))),128))])])])):Ke("",!0)}}}),y0=Ze(S0,[["__scopeId","data-v-cb774c9c"]]),E0="/app2/icon/slash.png",b0="/app2/icon/stab.png",T0="/app2/icon/hit.png",A0="/app2/icon/fire.png",w0="/app2/icon/water.png",C0="/app2/icon/earth.png",R0="/app2/icon/wind.png",P0="/app2/icon/light.png",L0="/app2/icon/dark.png",D0=n=>(kn("data-v-d1f1001b"),n=n(),Nn(),n),I0={key:0,class:"CharaStatusUI"},U0=D0(()=>P("div",{class:"statuskinds"},"RESISTANCE",-1)),F0={class:"slashline"},k0={class:"leftItem"},N0=["src"],O0={class:"elementValue"},B0={class:"rightItem"},H0=["src"],z0={class:"elementValue"},G0={class:"hitline"},V0={class:"leftItem"},W0=["src"],$0={class:"elementValue"},q0={class:"fireline"},X0={class:"leftItem"},Y0=["src"],j0={class:"elementValue"},K0={class:"rightItem"},Z0=["src"],J0={class:"elementValue"},Q0={class:"earthline"},ev={class:"leftItem"},tv=["src"],nv={class:"elementValue"},iv={class:"rightItem"},sv=["src"],rv={class:"elementValue"},av={class:"lightline"},ov={class:"leftItem"},lv=["src"],cv={class:"elementValue"},uv={class:"rightItem"},fv=["src"],dv={class:"elementValue"},hv=qe({__name:"CharaSubStatus",props:{character:{type:on}},setup(n){return(e,t)=>n.character?(ie(),me("div",I0,[U0,P("div",F0,[P("span",k0,[P("img",{class:"Icon",src:J(E0),alt:"Slash"},null,8,N0),P("span",O0,Re(n.character.totalStatus.Slash),1)]),P("span",B0,[P("img",{class:"Icon",src:J(b0),alt:"Water"},null,8,H0),P("span",z0,Re(n.character.totalStatus.Stab),1)])]),P("div",G0,[P("span",V0,[P("img",{class:"Icon",src:J(T0),alt:"Hit"},null,8,W0),P("span",$0,Re(n.character.totalStatus.Hit),1)])]),P("div",q0,[P("span",X0,[P("img",{class:"Icon",src:J(A0),alt:"Fire"},null,8,Y0),P("span",j0,Re(n.character.totalStatus.Fire),1)]),P("span",K0,[P("img",{class:"Icon",src:J(w0),alt:"Water"},null,8,Z0),P("span",J0,Re(n.character.totalStatus.Water),1)])]),P("div",Q0,[P("span",ev,[P("img",{class:"Icon",src:J(C0),alt:"Earth"},null,8,tv),P("span",nv,Re(n.character.totalStatus.Earth),1)]),P("span",iv,[P("img",{class:"Icon",src:J(R0),alt:"Wind"},null,8,sv),P("span",rv,Re(n.character.totalStatus.Wind),1)])]),P("div",av,[P("span",ov,[P("img",{class:"Icon",src:J(P0),alt:"Light"},null,8,lv),P("span",cv,Re(n.character.totalStatus.Light),1)]),P("span",uv,[P("img",{class:"Icon",src:J(L0),alt:"Dark"},null,8,fv),P("span",dv,Re(n.character.totalStatus.Dark),1)])])])):Ke("",!0)}}),pv=Ze(hv,[["__scopeId","data-v-d1f1001b"]]),mv=[{eqpbag_id:1,eqp_id:103,type:"WEP",equippedBy:1},{eqpbag_id:2,eqp_id:1003,type:"ARM",equippedBy:1},{eqpbag_id:3,eqp_id:2001,type:"ACC",equippedBy:1},{eqpbag_id:4,eqp_id:101,type:"WEP",equippedBy:2},{eqpbag_id:5,eqp_id:1002,type:"ARM",equippedBy:2},{eqpbag_id:6,eqp_id:2101,type:"ACC",equippedBy:2},{eqpbag_id:7,eqp_id:501,type:"WEP",equippedBy:3},{eqpbag_id:8,eqp_id:1201,type:"ARM",equippedBy:3},{eqpbag_id:9,eqp_id:2201,type:"ACC",equippedBy:3},{eqpbag_id:10,eqp_id:401,type:"WEP",equippedBy:4},{eqpbag_id:11,eqp_id:1301,type:"ARM",equippedBy:4},{eqpbag_id:12,eqp_id:2001,type:"ACC",equippedBy:4},{eqpbag_id:13,eqp_id:601,type:"WEP",equippedBy:5},{eqpbag_id:14,eqp_id:1001,type:"ARM",equippedBy:5},{eqpbag_id:15,eqp_id:2101,type:"ACC",equippedBy:5},{eqpbag_id:16,eqp_id:502,type:"WEP",equippedBy:6},{eqpbag_id:17,eqp_id:1201,type:"ARM",equippedBy:6},{eqpbag_id:18,eqp_id:2301,type:"ACC",equippedBy:6},{eqpbag_id:19,eqp_id:201,type:"WEP",equippedBy:7},{eqpbag_id:20,eqp_id:1301,type:"ARM",equippedBy:7},{eqpbag_id:21,eqp_id:2001,type:"ACC",equippedBy:7},{eqpbag_id:22,eqp_id:102,type:"WEP",equippedBy:null},{eqpbag_id:23,eqp_id:110,type:"WEP",equippedBy:null},{eqpbag_id:24,eqp_id:301,type:"WEP",equippedBy:null},{eqpbag_id:25,eqp_id:402,type:"WEP",equippedBy:null},{eqpbag_id:26,eqp_id:510,type:"WEP",equippedBy:null},{eqpbag_id:27,eqp_id:1020,type:"ARM",equippedBy:null},{eqpbag_id:28,eqp_id:1101,type:"ARM",equippedBy:null},{eqpbag_id:29,eqp_id:1110,type:"ARM",equippedBy:null},{eqpbag_id:30,eqp_id:1210,type:"ARM",equippedBy:null},{eqpbag_id:31,eqp_id:1321,type:"ARM",equippedBy:null},{eqpbag_id:32,eqp_id:2151,type:"ACC",equippedBy:null},{eqpbag_id:33,eqp_id:2451,type:"ACC",equippedBy:null},{eqpbag_id:34,eqp_id:2551,type:"ACC",equippedBy:null}],rh=is("equipBag",{state:()=>({equipmentType:{},equipmentItem:{}}),actions:{setEquipBag(){for(let n of mv)this.addEquipment(n.eqpbag_id,n.eqp_id,n.type,n.equippedBy)},addEquipment(n,e,t,i){this.equipmentType[t]||(this.equipmentType[t]=[]);const s={eqpbag_id:n,eqp_id:e,type:t,equippedBy:i};this.equipmentType[t].push(s),this.equipmentItem[n]=s},removeEquipment(n){if(!this.equipmentItem[n])throw new Error(`装備 ${n} は存在しません。`);delete this.equipmentItem[n]},getEquipmentByType(n){return this.equipmentType[n]||[]},equipEquipment(n,e){const t=this.equipmentItem[n];if(!t)throw new Error(`装備 ${n} は存在しません。`);t.equippedBy=e,this.equipmentItem[n]=t},unequipOldEquipment(n,e){const t=this.equipmentType[n].find(i=>i.equippedBy===e);if(!t)throw new Error(`装備 ${n} ${e} は存在しません。`);t.equippedBy=null}}}),ah=n=>(kn("data-v-6e7e5a20"),n=n(),Nn(),n),_v={key:0,class:"EquipmentUI"},gv={class:"EquipmentTab"},vv=["onClick"],Mv=ah(()=>P("div",{class:"underLine"},null,-1)),xv={key:0},Sv={class:"EquipmentTypeList",density:"compact"},yv=["onClick"],Ev=["src"],bv={key:1,class:"faceFlame"},Tv={class:"itemName"},Av={key:2,class:"buttonPosition"},wv=["onClick"],Cv=ah(()=>P("div",{class:"underLine"},null,-1)),Rv={key:0,class:"equipment-status"},Pv={class:"status-key"},Lv={class:"status-value"},Dv=qe({__name:"Equipment",props:{character:{type:on}},setup(n){const e=n,t=rh(),i=["WEP","ARM","ACC"],s=xe("WEP"),r=g=>{s.value=g,l.value=null,o.value=null},a=It(()=>{var g;return(g=e.character)==null?void 0:g.equipment[s.value]}),o=xe(null),l=xe(null),c=(g,p,h)=>{const E=ur.find(y=>y.eqp_id===g&&y.type===p);E&&(o.value=E,l.value=h)},u=g=>ql.find(p=>p.cha_id===g),f=g=>{const p=ur.find(h=>h.eqp_id===g);return p?p.name:null},d=g=>{var p;return((p=e.character)==null?void 0:p.cha_id)==g?"Unequip":"Equip"},m=It(()=>{var h;if(!o.value)return;const g={};let p;for(const E in o.value.status)p=o.value.status[E]-(((h=a.value)==null?void 0:h.status[E])||0),g[E]=p>0?"+"+String(p):String(p);return g}),_=(g,p)=>{var E,y,b;let h=e.character.cha_id;p===h?(t.equipEquipment(g,null),(E=e.character)==null||E.changeEquipment(s.value,null)):(a.value&&t.unequipOldEquipment(s.value,h),p!==null&&((y=u(p))==null||y.changeEquipment(s.value,null),console.log(u(p))),t.equipEquipment(g,h),(b=e.character)==null||b.changeEquipment(s.value,o.value)),console.log(t),console.log(e.character)};return(g,p)=>n.character?(ie(),me("div",_v,[P("ul",gv,[(ie(),me(dt,null,jt(i,h=>P("li",{key:h,onClick:E=>r(h),class:Ht([{"selected-tab":h===s.value},"EquipmentTabItem"])},Re(h),11,vv)),64))]),Mv,s.value?(ie(),me("div",xv,[P("ul",Sv,[(ie(!0),me(dt,null,jt(J(t).equipmentType[s.value],h=>{var E;return ie(),me("li",{key:h.eqpbag_id,onClick:y=>c(h.eqp_id,s.value,h.eqpbag_id),class:Ht(["EquipmentItem",{"selected-tab":o.value&&h.eqpbag_id===l.value}])},[h.equippedBy!==null?(ie(),me("img",{key:0,class:"smallface",src:(E=u(h.equippedBy))==null?void 0:E.faceGraphicUrl,alt:"Character face"},null,8,Ev)):(ie(),me("span",bv)),P("span",Tv,Re(f(h.eqp_id)),1),o.value&&h.eqpbag_id===l.value?(ie(),me("span",Av,[P("span",{class:Ht(["button-equip",{equip:n.character.cha_id!=h.equippedBy,unequip:n.character.cha_id==h.equippedBy}]),onClick:y=>_(h.eqpbag_id,h.equippedBy)},Re(d(h.equippedBy)),11,wv)])):Ke("",!0)],10,yv)}),128))]),Cv,o.value?(ie(),me("div",Rv,[m.value!==void 0?(ie(!0),me(dt,{key:0},jt(o.value.status,(h,E)=>(ie(),me("div",{class:"status",key:E},[P("span",Pv,Re(E),1),P("span",Lv,Re(h),1),P("span",{class:Ht(["status-diff",{colorblue:Number(m.value[E])>=0,colorred:Number(m.value[E])<0}])},Re(m.value[E]),3)]))),128)):Ke("",!0)])):Ke("",!0)])):Ke("",!0)])):Ke("",!0)}}),Iv=Ze(Dv,[["__scopeId","data-v-6e7e5a20"]]),Uv={class:"skillInfo"},Fv=qe({__name:"SkillInfo",props:{skillInfo:{type:String}},setup(n){return(e,t)=>(ie(),me("div",Uv,Re(n.skillInfo),1))}}),oh=Ze(Fv,[["__scopeId","data-v-ad3c27c7"]]),kv={class:"information"},Nv={class:"message"},Ov=qe({__name:"Information",props:{message:{type:String,default:null}},emits:["hideError"],setup(n,{emit:e}){const t=e;return(i,s)=>(ie(),me("div",{class:"modal",onClick:s[0]||(s[0]=r=>t("hideError"))},[P("div",kv,[P("div",Nv,Re(n.message),1)])]))}}),Yl=Ze(Ov,[["__scopeId","data-v-fbb86de4"]]),jl=n=>(kn("data-v-0ca1a072"),n=n(),Nn(),n),Bv={key:0,class:"SkillUI"},Hv={class:"skillSelect"},zv={class:"skillType"},Gv={key:0},Vv=["onClick"],Wv=jl(()=>P("div",{class:"underLine"},null,-1)),$v={key:0},qv={class:"skillList",density:"compact"},Xv=["onClick"],Yv={key:0,class:"statuskinds"},jv={key:1,class:"marginEquip"},Kv={class:"marginLeft05"},Zv={class:"costValue"},Jv={key:2,class:"buttonPosition"},Qv=["onClick"],eM={class:"totalCost"},tM=jl(()=>P("span",{class:"statuskinds"},"TOTAL COST",-1)),nM={class:"costValue"},iM={class:"totalCost"},sM=jl(()=>P("span",{class:"statuskinds"},"SKILL COST CAP",-1)),rM={class:"costValue"},aM={key:1},oM={class:"skillList",density:"compact"},lM=["onClick"],cM={class:"marginLeft1"},uM={class:"costValue"},fM={class:"consumeType"},dM=qe({__name:"Skill",props:{character:{type:on},processBattle:{type:Boolean}},emits:["useSkill"],setup(n,{emit:e}){const t=n,i=["PASSIVE","ACTIVE"],s=xe(!1),r=A.msgSkillCostError,a=xe(void 0);t.processBattle==!0?a.value="ACTIVE":a.value="PASSIVE";const o=p=>{a.value=p,l.value=null},l=xe(null),c=p=>{t.processBattle&&p instanceof eh&&l.value==p&&_(p),l.value=p},u=p=>p?"Unequip":"Equip",f=xe(0),d=p=>{t.character&&(f.value=t.character.passiveSkill.filter(h=>h.equip).reduce((h,E)=>h+E.skill_cost,0),p.equip?p.equip=!1:Number(f.value)+p.skill_cost>t.character.passiveCost?s.value=!0:p.equip=!0)},m=e,_=p=>{m("useSkill",p)},g=()=>{s.value=!1};return(p,h)=>n.character?(ie(),me("div",Bv,[P("div",Hv,[P("ul",zv,[n.processBattle?(ie(),me("li",Gv,Re("ACTIVE"),1)):(ie(),me(dt,{key:1},jt(i,E=>P("li",{key:E,onClick:y=>o(E),class:Ht({"selected-tab":E===a.value})},Re(E),11,Vv)),64))]),Wv,a.value=="PASSIVE"?(ie(),me("div",$v,[P("ul",qv,[(ie(!0),me(dt,null,jt(n.character.passiveSkill,E=>(ie(),me("li",{key:E.skill_id,onClick:y=>c(E),class:Ht(["skillItem",{"selected-tab":E===l.value}])},[E.equip===!0?(ie(),me("span",Yv,"E")):(ie(),me("span",jv)),P("span",Kv,Re(E.name),1),P("span",Zv,Re(E.skill_cost),1),E===l.value?(ie(),me("span",Jv,[P("span",{onClick:y=>d(E),class:Ht(["button-equip",{equip:E.equip==!1,unequip:E.equip==!0}])},Re(u(E.equip)),11,Qv)])):Ke("",!0)],10,Xv))),128)),P("li",eM,[tM,P("span",nM,Re(n.character.passiveSkill.filter(E=>E.equip).reduce((E,y)=>E+y.skill_cost,0)),1)]),P("li",iM,[sM,P("span",rM,Re(n.character.passiveCost),1)])])])):Ke("",!0),Et(Pe(Yl,{message:J(r),onHideError:g},null,8,["message"]),[[Tt,s.value]]),a.value=="ACTIVE"?(ie(),me("div",aM,[P("ul",oM,[(ie(!0),me(dt,null,jt(n.character.activeSkill,E=>(ie(),me("li",{key:E.skill_id,onClick:y=>c(E),class:Ht(["skillItem",{"selected-tab":E===l.value}])},[P("span",cM,Re(E.name),1),P("span",uM,Re(E.consume_amount),1),P("span",fM,Re(E.consume_type),1)],10,lM))),128))])])):Ke("",!0)]),l.value?(ie(),bt(oh,{key:0,class:"skillInfo",skillInfo:l.value.info},null,8,["skillInfo"])):Ke("",!0)])):Ke("",!0)}}),lh=Ze(dM,[["__scopeId","data-v-0ca1a072"]]),hM={key:0,class:"first"},pM={key:1,class:"second"},mM=qe({__name:"SwitchBtn",props:{switchWord:{type:Array}},setup(n){const e=xe(!0),t=()=>{e.value=!e.value};return(i,s)=>(ie(),me("div",{class:"outline",onClick:t},[e.value?(ie(),me("span",hM,Re(n.switchWord[0]),1)):(ie(),me("span",pM,Re(n.switchWord[1]),1))]))}}),Xc=Ze(mM,[["__scopeId","data-v-187355c5"]]),_M="/app2/icon/arrow-left.png",gM=["src"],vM=qe({__name:"IconLeft",setup(n){return(e,t)=>(ie(),me("img",{class:"Icon",src:J(_M),alt:"Left"},null,8,gM))}}),MM=Ze(vM,[["__scopeId","data-v-18105755"]]),xM="/app2/icon/arrow-right.png",SM=["src"],yM=qe({__name:"IconRight",setup(n){return(e,t)=>(ie(),me("img",{class:"Icon",src:J(xM),alt:"Right"},null,8,SM))}}),EM=Ze(yM,[["__scopeId","data-v-ccc46121"]]),bM={class:"btnFlame"},TM=qe({__name:"BlueBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(ie(),me("div",bM,Re(n.inside),1))}}),AM=Ze(TM,[["__scopeId","data-v-99a5fe5b"]]),wM={class:"btnFlame"},CM=qe({__name:"RedBtn",props:{inside:{type:String}},setup(n){return(e,t)=>(ie(),me("div",wM,Re(n.inside),1))}}),RM=Ze(CM,[["__scopeId","data-v-24ab0359"]]),PM={class:"modal"},LM={class:"confirmation"},DM={class:"message"},IM=qe({__name:"Confirmation",props:{message:{type:String}},emits:["confirmationResponse"],setup(n,{emit:e}){const t=s=>{i("confirmationResponse",s)},i=e;return(s,r)=>(ie(),me("div",PM,[P("div",LM,[P("div",DM,Re(n.message),1),Pe(AM,{class:"YesBtn",inside:J(A).textYes,onClick:r[0]||(r[0]=a=>t(J(A).textYes))},null,8,["inside"]),Pe(RM,{class:"NoBtn",inside:J(A).textNo,onClick:r[1]||(r[1]=a=>t(J(A).textNo))},null,8,["inside"])])]))}}),Kl=Ze(IM,[["__scopeId","data-v-46322d58"]]),en=(n,e)=>Math.floor(Math.random()*(e-n)+n),fo=n=>Math.floor(Math.random()*n),li=n=>new Promise(e=>setTimeout(e,n)),pt=Array(A.MapHeight).fill(A.MapWall).map(()=>Array(A.MapWidth).fill(A.MapWall)),rr=Array(A.MapHeight).fill(0).map(()=>Array(A.MapWidth).fill(0)),ba={X:0,Y:0};function UM(){let n=[],e=en(A.RoomCountMin,A.RoomCountMax),t=new Array(A.meetPointCount).fill(0),i=new Array(A.meetPointCount).fill(0);for(let s=0;s<t.length;s++)t[s]=en(A.MapWidth/4,A.MapWidth*3/4),i[s]=en(A.MapHeight/4,A.MapHeight*3/4),pt[i[s]][t[s]]=A.MapRoad;for(let s=0;s<e;s++){const r={Height:en(A.roomMinHeight,A.roomMaxHeight),Width:en(A.roomMinWidth,A.roomMaxWidth),PointX:en(2,A.MapWidth-A.roomMaxWidth-2),PointY:en(2,A.MapHeight-A.roomMaxHeight-2),Overlap:!1};r.Overlap=kM(r.Height,r.Width,r.PointX,r.PointY),n.push(r)}for(let s=0;s<e;s++)if(n[s].Overlap==!1){let r=en(n[s].PointX,n[s].PointX+n[s].Width),a=en(n[s].PointY,n[s].PointY+n[s].Height);s==0&&(ba.X=r,ba.Y=a),NM(r,a,t[en(0,t.length-1)],i[en(0,i.length-1)])}for(let s=0;s<pt.length;s++)for(let r=0;r<pt[s].length;r++)pt[s][r]==A.MapRoad&&FM(s,r)}function FM(n,e){ti(n,e-1)&&ti(n,e+1)&&(xn(n-1,e)&&(xn(n-1,e-1)||xn(n-1,e+1))&&(rr[n][e]=A.SetDoorUp),xn(n+1,e)&&(xn(n+1,e-1)||xn(n+1,e+1))&&(rr[n][e]=A.SetDoorUnder)),ti(n-1,e)&&ti(n+1,e)&&(xn(n,e-1)&&(xn(n-1,e-1)||xn(n+1,e-1))&&(rr[n][e]=A.SetDoorLeft),xn(n,e+1)&&(xn(n-1,e+1)||xn(n+1,e+1))&&(rr[n][e]=A.SetDoorRight))}function ti(n,e){return n>=0&&n<pt.length&&e>=0&&e<pt[0].length&&pt[n][e]==A.MapWall}function xn(n,e){return n>=0&&n<pt.length&&e>=0&&e<pt[0].length&&pt[n][e]==A.MapRoom}function kM(n,e,t,i){let s=!1;for(let r=0;r<n;r++)for(let a=0;a<e;a++)pt[i+r][t+a]==A.MapRoom?s=!0:pt[i+r][t+a]=A.MapRoom;return s}function NM(n,e,t,i){let s=n>t,r=e<=i;if(Math.floor(Math.random()*2)==0){for(;n!=t;)a(1);for(;e!=i;)a(2)}else{for(;e!=i;)a(2);for(;n!=t;)a(1)}function a(o){pt[e][n]==A.MapWall&&(pt[e][n]=A.MapRoad),o==1?n=s?n-1:n+1:e=r?e+1:e-1}}let Or={characters:[1,5,6,7],gold:1e5,location:[570,180],home:[500,200]};const ss=is("party",{state:()=>({characters:[],gold:Or.gold,location:Or.location,home:Or.location,map:[]}),actions:{setParty(){this.characters=ql.filter(n=>Or.characters.includes(n.cha_id)),this.map=pt}}}),Ci=is("showUI",{state:()=>({map:!0,current:!0,party:!1,character:!1,item:!1,message:!1,errorMessage:!1})}),OM=["src"],BM=qe({__name:"Character",props:{index:{type:Number},character:{type:on}},emits:["changeCharacter"],setup(n,{emit:e}){const t=qn(),i=ss(),s=Ci(),r=n,a=xe(0),o=xe(void 0),l=xe(!0),c=["MAIN","SUB"],u=()=>{l.value=!l.value},f=xe(!0),d=["EQUIP","SKILL"],m=()=>{f.value=!f.value},_=e,g=D=>{_("changeCharacter",D)};function p(){g("next")}function h(){g("back")}let E,y;function b(){if(t.guildMenu==A.menuAddMember){if(i.characters.length==4){y=A.msgAddPartyError,s.errorMessage=!0;return}E=A.msgAddParty1+o.value.name+A.msgAddParty2,s.message=!0}}const C=D=>{s.message=!1,D==A.textYes&&(i.characters.push(o.value),s.character=!1)},N=()=>{s.errorMessage=!1};return wt(()=>r.index,()=>{r.index&&(a.value=r.index)}),wt(()=>r.character,()=>{r.character&&(o.value=r.character)}),(D,j)=>o.value?(ie(),me("div",{key:0,class:"CharacterUI",style:Rn({backgroundImage:"url("+o.value.backgroundUrl+")"})},[P("div",{class:"imageFlame",onClick:b},[P("img",{class:"charaimage",src:o.value.poseGraphicUrl,alt:""},null,8,OM)]),Pe(ih,{class:"CharaCardUI",character:o.value},null,8,["character"]),l.value?(ie(),bt(y0,{key:0,class:"CharaStatusUI",character:o.value},null,8,["character"])):(ie(),bt(pv,{key:1,class:"CharaSubStatusUI",character:o.value},null,8,["character"])),Pe(Xc,{class:"ChangeStatus",onClick:u,switchWord:c}),f.value?(ie(),bt(Iv,{key:2,class:"EquipmentUI",character:o.value},null,8,["character"])):(ie(),bt(lh,{key:3,class:"SkillUI",character:o.value},null,8,["character"])),Pe(Xc,{class:"ChangeSkill",onClick:m,switchWord:d}),Pe(MM,{class:"IconCharaBack",onClick:h}),Pe(EM,{class:"IconCharaNext",onClick:p}),Et(Pe(Kl,{message:J(E),onConfirmationResponse:C},null,8,["message"]),[[Tt,J(s).message]]),Et(Pe(Yl,{message:J(y),onHideError:N},null,8,["message"]),[[Tt,J(s).errorMessage]])],4)):Ke("",!0)}}),ch=Ze(BM,[["__scopeId","data-v-c2eb9bca"]]),HM={class:"AddMember"},zM=["onClick"],GM=["src"],VM=qe({__name:"AddMember",setup(n){const e=ss(),t=Ci(),i=It(()=>ql.filter(l=>!e.characters.some(c=>c.cha_id===l.cha_id))),s=xe(void 0),r=xe(void 0);function a(l,c){s.value=l,r.value=c,t.character=!0}const o=l=>{l=="next"?(s.value=s.value==i.value.length-1?0:s.value+1,r.value=i.value[s.value]):(s.value=s.value==0?i.value.length-1:s.value-1,r.value=i.value[s.value])};return(l,c)=>(ie(),me("div",HM,[Et(Pe(J(J_),{"items-to-show":3,"wrap-around":!0},{addons:ha(()=>[Pe(J(tg)),Pe(J(ng))]),default:ha(()=>[(ie(!0),me(dt,null,jt(i.value,(u,f)=>(ie(),bt(J(ig),{key:f},{default:ha(()=>[P("div",{class:"carousel__item",onClick:d=>a(f,u)},[Pe(ih,{class:"CharaCardUI",character:u},null,8,["character"]),P("img",{class:"chara-image",src:u.poseGraphicUrl,alt:""},null,8,GM)],8,zM)]),_:2},1024))),128))]),_:1},512),[[Tt,!J(t).character]]),Et(Pe(ch,{character:r.value,index:s.value,onChangeCharacter:o},null,8,["character","index"]),[[Tt,J(t).character]])]))}}),WM=Ze(VM,[["__scopeId","data-v-0a4310ec"]]),Tn=n=>(kn("data-v-4202f880"),n=n(),Nn(),n),$M={key:0,class:"StatusUI"},qM={class:"nameline"},XM={class:"name"},YM={class:"level"},jM=Tn(()=>P("span",{class:"statuskinds"},"LV ",-1)),KM={class:"hpline"},ZM=Tn(()=>P("span",{class:"statuskinds"},"HP",-1)),JM={class:"progress-bar"},QM={class:"mpline"},ex=Tn(()=>P("span",{class:"statuskinds"},"MP",-1)),tx={class:"progress-bar"},nx={class:"atkline"},ix={class:"leftItem"},sx=Tn(()=>P("span",{class:"statuskinds"},"ATK",-1)),rx={class:"itemValue"},ax={class:"rightItem"},ox=Tn(()=>P("span",{class:"statuskinds"},"MGC",-1)),lx={class:"itemValue"},cx={class:"defline"},ux={class:"leftItem"},fx=Tn(()=>P("span",{class:"statuskinds"},"DEF",-1)),dx={class:"itemValue"},hx={class:"rightItem"},px=Tn(()=>P("span",{class:"statuskinds"},"MDF",-1)),mx={class:"itemValue"},_x={class:"dexline"},gx={class:"leftItem"},vx=Tn(()=>P("span",{class:"statuskinds"},"DEX",-1)),Mx={class:"itemValue"},xx={class:"rightItem"},Sx=Tn(()=>P("span",{class:"statuskinds"},"SPD",-1)),yx={class:"itemValue"},Ex={class:"wepline"},bx=Tn(()=>P("span",{class:"statuskinds"},"WEP",-1)),Tx={class:"equipName"},Ax={class:"armline"},wx=Tn(()=>P("span",{class:"statuskinds"},"ARM",-1)),Cx={class:"equipName"},Rx={class:"accline"},Px=Tn(()=>P("span",{class:"statuskinds"},"ACC",-1)),Lx={class:"equipName"},Dx=qe({__name:"Status",props:{character:{type:on}},setup(n){return(e,t)=>{var i,s,r;return n.character?(ie(),me("div",$M,[P("div",qM,[P("span",XM,Re(n.character.name),1),P("span",YM,[jM,P("span",null,Re(n.character.LV),1)])]),P("div",KM,[ZM,P("span",JM,[Pe(qa,{nowHP:n.character.nowHP,maxHP:n.character.totalStatus.HP},null,8,["nowHP","maxHP"])])]),P("div",QM,[ex,P("span",tx,[Pe(Xl,{nowMP:n.character.nowMP,maxMP:n.character.totalStatus.MP},null,8,["nowMP","maxMP"])])]),P("div",nx,[P("span",ix,[sx,P("span",rx,Re(n.character.totalStatus.ATK),1)]),P("span",ax,[ox,P("span",lx,Re(n.character.totalStatus.MGC),1)])]),P("div",cx,[P("span",ux,[fx,P("span",dx,Re(n.character.totalStatus.DEF),1)]),P("span",hx,[px,P("span",mx,Re(n.character.totalStatus.MDF),1)])]),P("div",_x,[P("span",gx,[vx,P("span",Mx,Re(n.character.totalStatus.DEX),1)]),P("span",xx,[Sx,P("span",yx,Re(n.character.totalStatus.SPD),1)])]),P("div",Ex,[bx,P("span",Tx,Re((i=n.character.equipment.WEP)==null?void 0:i.name),1)]),P("div",Ax,[wx,P("span",Cx,Re((s=n.character.equipment.ARM)==null?void 0:s.name),1)]),P("div",Rx,[Px,P("span",Lx,Re((r=n.character.equipment.ACC)==null?void 0:r.name),1)])])):Ke("",!0)}}}),Ix=Ze(Dx,[["__scopeId","data-v-4202f880"]]),Ux="/app2/icon/back.svg",Fx=["src"],kx=qe({__name:"IconBack",setup(n){return(e,t)=>(ie(),me("img",{class:"Icon",src:J(Ux),alt:"Back"},null,8,Fx))}}),uh=Ze(kx,[["__scopeId","data-v-6b7e6f2e"]]),Nx="/app2/icon/bag.svg",Ox=["src"],Bx=qe({__name:"IconBag",setup(n){return(e,t)=>(ie(),me("img",{class:"Icon",src:J(Nx),alt:"Bag"},null,8,Ox))}}),Hx=Ze(Bx,[["__scopeId","data-v-847f9a3f"]]),zx="/app2/icon/party.svg",Gx=["src"],Vx=qe({__name:"IconParty",setup(n){return(e,t)=>(ie(),me("img",{class:"Icon",src:J(zx),alt:"Party"},null,8,Gx))}}),Wx=Ze(Vx,[["__scopeId","data-v-ba6ce6be"]]),$x="/app2/icon/change.svg",qx=["src"],Xx=qe({__name:"IconChange",setup(n){return(e,t)=>(ie(),me("img",{class:"Icon",src:J($x),alt:"Change"},null,8,qx))}}),Yx=Ze(Xx,[["__scopeId","data-v-e7f25d89"]]),jx={key:0,class:"partyUI"},Kx={class:"characters"},Zx=["onClick"],Jx={class:"charaflame"},Qx=["src"],eS=qe({__name:"Party",setup(n){const e=ss(),t=Ci(),i=qn(),s=()=>{d.value=!1,t.party?r():a()},r=()=>{d.value=!1,t.party=!1,t.character=!1,t.map=!0,t.current=!0},a=()=>{t.party=!0,t.character=!1,u.value=void 0,f.value=void 0},o=()=>{t.item=!t.item},l=()=>{if(d.value=!1,!t.party&&!t.character&&(t.map=!1,t.current=!1),t.party){r();return}t.party=!t.party,t.character=!1},c=b=>{b=="next"?(u.value=u.value==e.characters.length-1?0:u.value+1,f.value=e.characters[u.value]):(u.value=u.value==0?e.characters.length-1:u.value-1,f.value=e.characters[u.value])},u=xe(void 0),f=xe(void 0),d=xe(!1),m=xe([]);let _,g;function p(b,C){if(i.guildMenu==A.menuRemoveMember){if(C.cha_id==A.mainChaid){g=A.msgRemovePartyError,t.errorMessage=!0;return}_=A.msgRemoveParty1+C.name+A.msgRemoveParty2,t.message=!0,f.value=C;return}if(d.value){if(m.value.includes(b)?m.value=m.value.filter(N=>N!==b):m.value.length<2&&m.value.push(b),m.value.length===2){const N=e.characters[m.value[0]];e.characters[m.value[0]]=e.characters[m.value[1]],e.characters[m.value[1]]=N;for(let D of m.value)e.characters[D].updateHate(D),console.log("partyStore.characters[order]",e.characters[D]);m.value=[]}}else u.value=b,f.value=C,t.party=!1,t.character=!0}const h=b=>{t.message=!1,b==A.textYes&&(e.characters=e.characters.filter(C=>C.cha_id!==f.value.cha_id),t.character=!1)},E=()=>{t.errorMessage=!1},y=()=>{d.value=!d.value};return(b,C)=>(ie(),me(dt,null,[J(t).party||J(i).guildMenu==J(A).menuRemoveMember?(ie(),me("div",jx,[P("div",Kx,[(ie(!0),me(dt,null,jt(J(e).characters,(N,D)=>(ie(),me("div",{key:N.cha_id,onClick:j=>p(D,N),class:Ht(["character-card",{changing:d.value&&m.value.includes(D)}])},[Pe(Ix,{class:"StatusUI",character:N},null,8,["character"]),P("div",Jx,[P("img",{src:N.poseGraphicUrl,alt:"",class:"charaimage"},null,8,Qx)])],10,Zx))),128))])])):Ke("",!0),Et(Pe(ch,{character:f.value,index:u.value,onChangeCharacter:c},null,8,["character","index"]),[[Tt,J(t).character]]),Et(Pe(uh,{class:"IconBack",onClick:s},null,512),[[Tt,J(t).party||J(t).character]]),Et(Pe(Hx,{class:"IconBag",onClick:o},null,512),[[Tt,!J(t).character]]),Et(Pe(Yx,{class:Ht(["IconChange",{changing:d.value}]),onClick:y},null,8,["class"]),[[Tt,J(t).party]]),J(i).guildMenu!=J(A).menuRemoveMember?(ie(),bt(Wx,{key:1,class:"IconParty",onClick:l})):Ke("",!0),Et(Pe(Kl,{message:J(_),onConfirmationResponse:h},null,8,["message"]),[[Tt,J(t).message]]),Et(Pe(Yl,{message:J(g),onHideError:E},null,8,["message"]),[[Tt,J(t).errorMessage]])],64))}}),Zl=Ze(eS,[["__scopeId","data-v-4d5f2666"]]),Xa=n=>(kn("data-v-8b8282cc"),n=n(),Nn(),n),tS={class:"information"},nS={key:0,class:"flame"},iS=Xa(()=>P("div",{class:"firstItem"},"Quest",-1)),sS=Xa(()=>P("div",{class:"secondItem"},"Accept a Quest",-1)),rS=Xa(()=>P("div",{class:"secondItem"},"Receive Rewards",-1)),aS=Xa(()=>P("div",{class:"firstItem"},"About Member",-1)),oS=qe({__name:"Guild",setup(n){const e=qn();function t(i){e.guildMenu=i}return(i,s)=>(ie(),me("div",tS,[J(e).guildMenu==""?(ie(),me("div",nS,[iS,sS,rS,aS,P("div",{class:"secondItem",onClick:s[0]||(s[0]=r=>t(J(A).menuAddMember))},Re(J(A).menuAddMember),1),P("div",{class:"secondItem",onClick:s[1]||(s[1]=r=>t(J(A).menuRemoveMember))},Re(J(A).menuRemoveMember),1)])):Ke("",!0),J(e).guildMenu==J(A).menuAddMember?(ie(),bt(WM,{key:1,class:"into"})):Ke("",!0),J(e).guildMenu==J(A).menuRemoveMember?(ie(),bt(Zl,{key:2})):Ke("",!0)]))}}),lS=Ze(oS,[["__scopeId","data-v-8b8282cc"]]),cS={},uS={class:"back"};function fS(n,e){return ie(),me("div",uS)}const dS=Ze(cS,[["render",fS],["__scopeId","data-v-c8f65fef"]]),hS=qe({__name:"ProcessBack",setup(n){const e=qn(),t=Ci();function i(){t.message?t.message=!1:t.character?t.character=!1:e.guildMenu?e.guildMenu="":e.processTown=A.statusTown}return(s,r)=>(ie(),bt(uh,{class:"IconBack",onClick:i}))}}),pS={class:"flame"},mS=qe({__name:"Flame1",props:{inside:{type:String}},setup(n){return(e,t)=>(ie(),me("div",pS,Re(n.inside),1))}}),fl=Ze(mS,[["__scopeId","data-v-e4f577cc"]]);function fh(){return{enterFullscreen:async()=>{try{await document.documentElement.requestFullscreen()}catch(t){console.error(t)}},exitFullscreen:async()=>{try{await document.exitFullscreen()}catch(t){console.error(t)}}}}const _S="/app2/icon/town/guild.jpg",gS="/app2/icon/town/inn.jpg",vS="/app2/icon/town/forest.jpg",MS="/app2/icon/town/swamp.jpg",xS="/app2/icon/town/desert.jpg",SS="/app2/icon/town/volcano.jpg",yS="/app2/icon/town/cave.jpg",ES="/app2/icon/town/palace.jpg",bS="/app2/icon/town/tower.jpg",TS={class:"town"},AS={key:0},wS={key:0},CS=["src"],RS=["src"],PS=["src"],LS=["src"],DS=["src"],IS=["src"],US=["src"],FS=["src"],kS=["src"],NS=qe({__name:"Town",setup(n){const{enterFullscreen:e}=fh(),t=qn(),i=Ci(),s=Er();ns(()=>{s.playBgm(A.mscTown)});function r(m){t.processTown=m}let a,o;function l(m){a=A.msgEnterDungeon+m+".",o=m,i.message=!0}async function c(m){i.message=!1,m==A.textYes&&(await e(),t.status=A.statusDungeon,t.processDungeon=A.processSearch,t.whichDungeon=o)}const u=xe("");function f(m){u.value=m}function d(){u.value=""}return(m,_)=>(ie(),me("div",TS,[J(t).processTown==J(A).statusTown?(ie(),me("div",AS,[J(i).party?Ke("",!0):(ie(),me("div",wS,[P("img",{class:"guild",src:J(_S),alt:"GUILD",onClick:_[0]||(_[0]=g=>r(J(A).processGuild)),onMouseover:_[1]||(_[1]=g=>f(J(A).processGuild)),onMouseout:_[2]||(_[2]=g=>d())},null,40,CS),P("img",{class:"inn",src:J(gS),alt:"INN",onClick:_[3]||(_[3]=g=>r(J(A).processInn)),onMouseover:_[4]||(_[4]=g=>f(J(A).processInn)),onMouseout:_[5]||(_[5]=g=>d())},null,40,RS),P("img",{class:"dungeon1",src:J(vS),alt:"Dungeon1",onClick:_[6]||(_[6]=g=>l(J(A).nameDungeon1)),onMouseover:_[7]||(_[7]=g=>f(J(A).nameDungeon1)),onMouseout:_[8]||(_[8]=g=>d())},null,40,PS),P("img",{class:"dungeon2",src:J(MS),alt:"Dungeon2",onClick:_[9]||(_[9]=g=>l(J(A).nameDungeon2)),onMouseover:_[10]||(_[10]=g=>f(J(A).nameDungeon2)),onMouseout:_[11]||(_[11]=g=>d())},null,40,LS),P("img",{class:"dungeon3",src:J(xS),alt:"Dungeon3",onClick:_[12]||(_[12]=g=>l(J(A).nameDungeon3)),onMouseover:_[13]||(_[13]=g=>f(J(A).nameDungeon3)),onMouseout:_[14]||(_[14]=g=>d())},null,40,DS),P("img",{class:"dungeon4",src:J(SS),alt:"Dungeon4",onClick:_[15]||(_[15]=g=>l(J(A).nameDungeon4)),onMouseover:_[16]||(_[16]=g=>f(J(A).nameDungeon4)),onMouseout:_[17]||(_[17]=g=>d())},null,40,IS),P("img",{class:"dungeon5",src:J(yS),alt:"Dungeon5",onClick:_[18]||(_[18]=g=>l(J(A).nameDungeon5)),onMouseover:_[19]||(_[19]=g=>f(J(A).nameDungeon5)),onMouseout:_[20]||(_[20]=g=>d())},null,40,US),P("img",{class:"dungeon6",src:J(ES),alt:"Dungeon6",onClick:_[21]||(_[21]=g=>l(J(A).nameDungeon6)),onMouseover:_[22]||(_[22]=g=>f(J(A).nameDungeon6)),onMouseout:_[23]||(_[23]=g=>d())},null,40,FS),P("img",{class:"dungeon7",src:J(bS),alt:"Dungeon7",onClick:_[24]||(_[24]=g=>l(J(A).nameDungeon7)),onMouseover:_[25]||(_[25]=g=>f(J(A).nameDungeon7)),onMouseout:_[26]||(_[26]=g=>d())},null,40,kS),u.value?(ie(),bt(fl,{key:0,class:"selectName",inside:u.value},null,8,["inside"])):Ke("",!0)])),Pe(Zl),Et(Pe(Kl,{message:J(a),onConfirmationResponse:c},null,8,["message"]),[[Tt,J(i).message]])])):J(t).processTown==J(A).processGuild?(ie(),bt(lS,{key:1,class:"into"})):J(t).processTown==J(A).processInn?(ie(),bt(dS,{key:2,class:"into"})):Ke("",!0),J(t).processTown!=J(A).statusTown?(ie(),bt(hS,{key:3,class:"ProcessBack"})):Ke("",!0)]))}}),OS=Ze(NS,[["__scopeId","data-v-0e4cd0e0"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="158",BS=0,Yc=1,HS=2,dh=1,zS=2,Qn=3,Ai=0,ln=1,an=2,Si=0,Ls=1,jc=2,Kc=3,Zc=4,GS=5,Gi=100,VS=101,WS=102,Jc=103,Qc=104,$S=200,qS=201,XS=202,YS=203,dl=204,hl=205,jS=206,KS=207,ZS=208,JS=209,QS=210,ey=211,ty=212,ny=213,iy=214,sy=0,ry=1,ay=2,Ta=3,oy=4,ly=5,cy=6,uy=7,Ql=0,fy=1,dy=2,yi=0,hy=1,py=2,my=3,_y=4,gy=5,hh=300,Ns=301,Os=302,pl=303,ml=304,Ya=306,_l=1e3,Dn=1001,gl=1002,tn=1003,eu=1004,ho=1005,En=1006,vy=1007,vr=1008,Ei=1009,My=1010,xy=1011,ec=1012,ph=1013,_i=1014,gi=1015,Mr=1016,mh=1017,_h=1018,Yi=1020,Sy=1021,In=1023,yy=1024,Ey=1025,ji=1026,Bs=1027,by=1028,gh=1029,Ty=1030,vh=1031,Mh=1033,po=33776,mo=33777,_o=33778,go=33779,tu=35840,nu=35841,iu=35842,su=35843,Ay=36196,ru=37492,au=37496,ou=37808,lu=37809,cu=37810,uu=37811,fu=37812,du=37813,hu=37814,pu=37815,mu=37816,_u=37817,gu=37818,vu=37819,Mu=37820,xu=37821,vo=36492,Su=36494,yu=36495,wy=36283,Eu=36284,bu=36285,Tu=36286,xh=3e3,Ki=3001,Cy=3200,Ry=3201,Sh=0,Py=1,bn="",Gt="srgb",ri="srgb-linear",tc="display-p3",ja="display-p3-linear",Aa="linear",_t="srgb",wa="rec709",Ca="p3",ls=7680,Au=519,Ly=512,Dy=513,Iy=514,Uy=515,Fy=516,ky=517,Ny=518,Oy=519,wu=35044,Cu="300 es",vl=1035,ni=2e3,Ra=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mo=Math.PI/180,Ml=180/Math.PI;function br(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function By(n,e){return(n%e+e)%e}function xo(n,e,t){return(1-t)*n+t*e}function Ru(n){return(n&n-1)===0&&n!==0}function xl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ks(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,s,r,a,o,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],g=s[0],p=s[3],h=s[6],E=s[1],y=s[4],b=s[7],C=s[2],N=s[5],D=s[8];return r[0]=a*g+o*E+l*C,r[3]=a*p+o*y+l*N,r[6]=a*h+o*b+l*D,r[1]=c*g+u*E+f*C,r[4]=c*p+u*y+f*N,r[7]=c*h+u*b+f*D,r[2]=d*g+m*E+_*C,r[5]=d*p+m*y+_*N,r[8]=d*h+m*b+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,m=c*r-a*l,_=t*f+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*c-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const So=new rt;function yh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hy(){const n=xr("canvas");return n.style.display="block",n}const Pu={};function fr(n){n in Pu||(Pu[n]=!0,console.warn(n))}const Lu=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Du=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[ri]:{transfer:Aa,primaries:wa,toReference:n=>n,fromReference:n=>n},[Gt]:{transfer:_t,primaries:wa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ja]:{transfer:Aa,primaries:Ca,toReference:n=>n.applyMatrix3(Du),fromReference:n=>n.applyMatrix3(Lu)},[tc]:{transfer:_t,primaries:Ca,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Du),fromReference:n=>n.applyMatrix3(Lu).convertLinearToSRGB()}},zy=new Set([ri,ja]),ht={enabled:!0,_workingColorSpace:ri,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Br[e].toReference,s=Br[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Br[n].primaries},getTransfer:function(n){return n===bn?Aa:Br[n].transfer}};function Ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cs;class Eh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=xr("canvas")),cs.width=e.width,cs.height=e.height;const i=cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ds(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ds(t[i]/255)*255):t[i]=Ds(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gy=0;class bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=br(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eo(s[a].image)):r.push(Eo(s[a]))}else r=Eo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Eo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vy=0;class cn extends $s{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Dn,s=Dn,r=En,a=vr,o=In,l=Ei,c=cn.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=br(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ki?Gt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _l:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _l:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?Ki:xh}set encoding(e){fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ki?Gt:bn}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=hh;cn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(m+1)/2,C=(h+1)/2,N=(u+d)/4,D=(f+g)/4,j=(_+p)/4;return y>b&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=N/i,r=D/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=N/s,r=j/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=D/r,s=j/r),this.set(i,s,r,t),this}let E=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(f-g)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wy extends $s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ki?Gt:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Wy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Th extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $y extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==m||u!==_){let p=1-o;const h=l*d+c*m+u*_+f*g,E=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),N=Math.atan2(C,h*E);p=Math.sin(p*N)/C,o=Math.sin(o*N)/C}const b=o*E;if(l=l*p+d*b,c=c*p+m*b,u=u*p+_*b,f=f*p+g*b,p===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*m-c*d,e[t+1]=l*_+u*d+c*f-o*m,e[t+2]=c*_+u*m+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new $,Iu=new Tr;class Ar{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),zr.subVectors(this.max,Zs),us.subVectors(e.a,Zs),fs.subVectors(e.b,Zs),ds.subVectors(e.c,Zs),ci.subVectors(fs,us),ui.subVectors(ds,fs),Ii.subVectors(us,ds);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ii.y,Ii.x,0];return!To(t,us,fs,ds,zr)||(t=[1,0,0,0,1,0,0,0,1],!To(t,us,fs,ds,zr))?!1:(Gr.crossVectors(ci,ui),t=[Gr.x,Gr.y,Gr.z],To(t,us,fs,ds,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new $,new $,new $,new $,new $,new $,new $,new $],An=new $,Hr=new Ar,us=new $,fs=new $,ds=new $,ci=new $,ui=new $,Ii=new $,Zs=new $,zr=new $,Gr=new $,Ui=new $;function To(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ui.fromArray(n,r);const o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qy=new Ar,Js=new $,Ao=new $;class nc{constructor(e=new $,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Ao)),this.expandByPoint(Js.copy(e.center).sub(Ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new $,wo=new $,Vr=new $,fi=new $,Co=new $,Wr=new $,Ro=new $;class Ah{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wo.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(wo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=fi.dot(this.direction),l=-fi.dot(Vr),c=fi.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(wo).addScaledVector(Vr,d),m}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,s,r){Co.subVectors(t,e),Wr.subVectors(i,e),Ro.crossVectors(Co,Wr);let a=this.direction.dot(Ro),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot(Wr.crossVectors(fi,Wr));if(l<0)return null;const c=o*this.direction.dot(Co.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(Ro);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,s,r,a,o,l,c,u,f,d,m,_,g,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,d,m,_,g,p)}set(e,t,i,s,r,a,o,l,c,u,f,d,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,g=c*f;t[0]=d+g*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,g=c*f;t[0]=d-g*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xy,e,Yy)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),di.crossVectors(i,pn),di.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),di.crossVectors(i,pn)),di.normalize(),$r.crossVectors(pn,di),s[0]=di.x,s[4]=$r.x,s[8]=pn.x,s[1]=di.y,s[5]=$r.y,s[9]=pn.y,s[2]=di.z,s[6]=$r.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],g=i[6],p=i[10],h=i[14],E=i[3],y=i[7],b=i[11],C=i[15],N=s[0],D=s[4],j=s[8],x=s[12],w=s[1],Q=s[5],oe=s[9],_e=s[13],F=s[2],V=s[6],W=s[10],Y=s[14],te=s[3],pe=s[7],de=s[11],z=s[15];return r[0]=a*N+o*w+l*F+c*te,r[4]=a*D+o*Q+l*V+c*pe,r[8]=a*j+o*oe+l*W+c*de,r[12]=a*x+o*_e+l*Y+c*z,r[1]=u*N+f*w+d*F+m*te,r[5]=u*D+f*Q+d*V+m*pe,r[9]=u*j+f*oe+d*W+m*de,r[13]=u*x+f*_e+d*Y+m*z,r[2]=_*N+g*w+p*F+h*te,r[6]=_*D+g*Q+p*V+h*pe,r[10]=_*j+g*oe+p*W+h*de,r[14]=_*x+g*_e+p*Y+h*z,r[3]=E*N+y*w+b*F+C*te,r[7]=E*D+y*Q+b*V+C*pe,r[11]=E*j+y*oe+b*W+C*de,r[15]=E*x+y*_e+b*Y+C*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15];return _*(+r*l*f-s*c*f-r*o*d+i*c*d+s*o*m-i*l*m)+g*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*u-r*l*u)+p*(+t*c*f-t*o*m-r*a*f+i*a*m+r*o*u-i*c*u)+h*(-s*o*u-t*l*f+t*o*d+s*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],E=f*p*c-g*d*c+g*l*m-o*p*m-f*l*h+o*d*h,y=_*d*c-u*p*c-_*l*m+a*p*m+u*l*h-a*d*h,b=u*g*c-_*f*c+_*o*m-a*g*m-u*o*h+a*f*h,C=_*f*l-u*g*l-_*o*d+a*g*d+u*o*p-a*f*p,N=t*E+i*y+s*b+r*C;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=E*D,e[1]=(g*d*r-f*p*r-g*s*m+i*p*m+f*s*h-i*d*h)*D,e[2]=(o*p*r-g*l*r+g*s*c-i*p*c-o*s*h+i*l*h)*D,e[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*m-i*l*m)*D,e[4]=y*D,e[5]=(u*p*r-_*d*r+_*s*m-t*p*m-u*s*h+t*d*h)*D,e[6]=(_*l*r-a*p*r-_*s*c+t*p*c+a*s*h-t*l*h)*D,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*m+t*l*m)*D,e[8]=b*D,e[9]=(_*f*r-u*g*r-_*i*m+t*g*m+u*i*h-t*f*h)*D,e[10]=(a*g*r-_*o*r+_*i*c-t*g*c-a*i*h+t*o*h)*D,e[11]=(u*o*r-a*f*r-u*i*c+t*f*c+a*i*m-t*o*m)*D,e[12]=C*D,e[13]=(u*g*s-_*f*s+_*i*d-t*g*d-u*i*p+t*f*p)*D,e[14]=(_*o*s-a*g*s-_*i*l+t*g*l+a*i*p-t*o*p)*D,e[15]=(a*f*s-u*o*s+u*i*l-t*f*l-a*i*d+t*o*d)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,m=r*u,_=r*f,g=a*u,p=a*f,h=o*f,E=l*c,y=l*u,b=l*f,C=i.x,N=i.y,D=i.z;return s[0]=(1-(g+h))*C,s[1]=(m+b)*C,s[2]=(_-y)*C,s[3]=0,s[4]=(m-b)*N,s[5]=(1-(d+h))*N,s[6]=(p+E)*N,s[7]=0,s[8]=(_+y)*D,s[9]=(p-E)*D,s[10]=(1-(d+g))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const a=hs.set(s[4],s[5],s[6]).length(),o=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);const c=1/r,u=1/a,f=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,t.setFromRotationMatrix(wn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ni){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let m,_;if(o===ni)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ra)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ni){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(a-r),d=(t+e)*c,m=(i+s)*u;let _,g;if(o===ni)_=(a+r)*f,g=-2*f;else if(o===Ra)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hs=new $,wn=new Lt,Xy=new $(0,0,0),Yy=new $(1,1,1),di=new $,$r=new $,pn=new $,Uu=new Lt,Fu=new Tr;class Ka{constructor(e=0,t=0,i=0,s=Ka.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ka.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jy=0;const ku=new $,ps=new Tr,Kn=new Lt,qr=new $,Qs=new $,Ky=new $,Zy=new Tr,Nu=new $(1,0,0),Ou=new $(0,1,0),Bu=new $(0,0,1),Jy={type:"added"},Qy={type:"removed"};class un extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new $,t=new Ka,i=new Tr,s=new $(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new rt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qr.copy(e):qr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Qs,qr,this.up):Kn.lookAt(qr,Qs,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Kn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qy)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,Ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Zy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}un.DEFAULT_UP=new $(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new $,Zn=new $,Po=new $,Jn=new $,ms=new $,_s=new $,Hu=new $,Lo=new $,Do=new $,Io=new $;let Xr=!1;class Pn{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),Zn.subVectors(i,t),Po.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(Zn),l=Cn.dot(Po),c=Zn.dot(Zn),u=Zn.dot(Po),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,i,s,r,a,o,l){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Jn),l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),Zn.subVectors(e,t),Cn.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Cn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ms.subVectors(s,i),_s.subVectors(r,i),Lo.subVectors(e,i);const l=ms.dot(Lo),c=_s.dot(Lo);if(l<=0&&c<=0)return t.copy(i);Do.subVectors(e,s);const u=ms.dot(Do),f=_s.dot(Do);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ms,a);Io.subVectors(e,r);const m=ms.dot(Io),_=_s.dot(Io);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(_s,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Hu.subVectors(r,s),o=(f-u)/(f-u+(m-_)),t.copy(s).addScaledVector(Hu,o);const h=1/(p+g+d);return a=g*h,o=d*h,t.copy(i).addScaledVector(ms,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Uo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=By(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Uo(a,r,e+1/3),this.g=Uo(a,r,e),this.b=Uo(a,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=wh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ht.fromWorkingColorSpace(qt.copy(this),e),Math.round(rn(qt.r*255,0,255))*65536+Math.round(rn(qt.g*255,0,255))*256+Math.round(rn(qt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Gt){ht.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Yr);const i=xo(hi.h,Yr.h,t),s=xo(hi.s,Yr.s,t),r=xo(hi.l,Yr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new ut;ut.NAMES=wh;let eE=0;class wr extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=br(),this.name="",this.type="Material",this.blending=Ls,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=hl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dl&&(i.blendSrc=this.blendSrc),this.blendDst!==hl&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ch extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new $,jr=new ft;class $n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wu,this.updateRange={offset:0,count:-1},this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Rh extends $n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ph extends $n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zi extends $n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tE=0;const Sn=new Lt,Fo=new un,gs=new $,mn=new Ar,er=new Ar,Ot=new $;class rs extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?Ph:Rh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(mn.min,er.min),mn.expandByPoint(Ot),Ot.addVectors(mn.max,er.max),mn.expandByPoint(Ot)):(mn.expandByPoint(er.min),mn.expandByPoint(er.max))}mn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ot.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(e,c),Ot.add(gs)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new $,u[w]=new $;const f=new $,d=new $,m=new $,_=new ft,g=new ft,p=new ft,h=new $,E=new $;function y(w,Q,oe){f.fromArray(s,w*3),d.fromArray(s,Q*3),m.fromArray(s,oe*3),_.fromArray(a,w*2),g.fromArray(a,Q*2),p.fromArray(a,oe*2),d.sub(f),m.sub(f),g.sub(_),p.sub(_);const _e=1/(g.x*p.y-p.x*g.y);isFinite(_e)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(_e),E.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(_e),c[w].add(h),c[Q].add(h),c[oe].add(h),u[w].add(E),u[Q].add(E),u[oe].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,Q=b.length;w<Q;++w){const oe=b[w],_e=oe.start,F=oe.count;for(let V=_e,W=_e+F;V<W;V+=3)y(i[V+0],i[V+1],i[V+2])}const C=new $,N=new $,D=new $,j=new $;function x(w){D.fromArray(r,w*3),j.copy(D);const Q=c[w];C.copy(Q),C.sub(D.multiplyScalar(D.dot(Q))).normalize(),N.crossVectors(j,Q);const _e=N.dot(u[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=_e}for(let w=0,Q=b.length;w<Q;++w){const oe=b[w],_e=oe.start,F=oe.count;for(let V=_e,W=_e+F;V<W;V+=3)x(i[V+0]),x(i[V+1]),x(i[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new $,r=new $,a=new $,o=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[m++]}return new $n(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rs,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new Lt,Fi=new Ah,Kr=new nc,Gu=new $,vs=new $,Ms=new $,xs=new $,ko=new $,Zr=new $,Jr=new ft,Qr=new ft,ea=new ft,Vu=new $,Wu=new $,$u=new $,ta=new $,na=new $;class zt extends un{constructor(e=new rs,t=new Ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(ko.fromBufferAttribute(f,e),a?Zr.addScaledVector(ko,u):Zr.addScaledVector(ko.sub(t),u))}t.add(Zr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Fi.copy(e.ray).recast(e.near),!(Kr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Kr,Gu)===null||Fi.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(zu.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(zu),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=a[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,C=y;b<C;b+=3){const N=o.getX(b),D=o.getX(b+1),j=o.getX(b+2);s=ia(this,h,e,i,c,u,f,N,D,j),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const E=o.getX(p),y=o.getX(p+1),b=o.getX(p+2);s=ia(this,a,e,i,c,u,f,E,y,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=a[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,C=y;b<C;b+=3){const N=b,D=b+1,j=b+2;s=ia(this,h,e,i,c,u,f,N,D,j),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const E=p,y=p+1,b=p+2;s=ia(this,a,e,i,c,u,f,E,y,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function nE(n,e,t,i,s,r,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ai,o),l===null)return null;na.copy(o),na.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(na);return c<t.near||c>t.far?null:{distance:c,point:na.clone(),object:n}}function ia(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,vs),n.getVertexPosition(l,Ms),n.getVertexPosition(c,xs);const u=nE(n,e,t,i,vs,Ms,xs,ta);if(u){s&&(Jr.fromBufferAttribute(s,o),Qr.fromBufferAttribute(s,l),ea.fromBufferAttribute(s,c),u.uv=Pn.getInterpolation(ta,vs,Ms,xs,Jr,Qr,ea,new ft)),r&&(Jr.fromBufferAttribute(r,o),Qr.fromBufferAttribute(r,l),ea.fromBufferAttribute(r,c),u.uv1=Pn.getInterpolation(ta,vs,Ms,xs,Jr,Qr,ea,new ft),u.uv2=u.uv1),a&&(Vu.fromBufferAttribute(a,o),Wu.fromBufferAttribute(a,l),$u.fromBufferAttribute(a,c),u.normal=Pn.getInterpolation(ta,vs,Ms,xs,Vu,Wu,$u,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new $,materialIndex:0};Pn.getNormal(vs,Ms,xs,f.normal),u.face=f}return u}class Cr extends rs{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Zi(c,3)),this.setAttribute("normal",new Zi(u,3)),this.setAttribute("uv",new Zi(f,2));function _(g,p,h,E,y,b,C,N,D,j,x){const w=b/D,Q=C/j,oe=b/2,_e=C/2,F=N/2,V=D+1,W=j+1;let Y=0,te=0;const pe=new $;for(let de=0;de<W;de++){const z=de*Q-_e;for(let X=0;X<V;X++){const ge=X*w-oe;pe[g]=ge*E,pe[p]=z*y,pe[h]=F,c.push(pe.x,pe.y,pe.z),pe[g]=0,pe[p]=0,pe[h]=N>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(X/D),f.push(1-de/j),Y+=1}}for(let de=0;de<j;de++)for(let z=0;z<D;z++){const X=d+z+V*de,ge=d+z+V*(de+1),Ee=d+(z+1)+V*(de+1),Te=d+(z+1)+V*de;l.push(X,ge,Te),l.push(ge,Ee,Te),te+=6}o.addGroup(m,te,x),m+=te,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=Hs(n[t]);for(const s in i)e[s]=i[s]}return e}function iE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lh(n){return n.getRenderTarget()===null?n.outputColorSpace:ht.workingColorSpace}const sE={clone:Hs,merge:Qt};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=aE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=iE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dh extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends Dh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,ys=1;class oE extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Ss,ys,e,t);s.layers=this.layers,this.add(s);const r=new gn(Ss,ys,e,t);r.layers=this.layers,this.add(r);const a=new gn(Ss,ys,e,t);a.layers=this.layers,this.add(a);const o=new gn(Ss,ys,e,t);o.layers=this.layers,this.add(o);const l=new gn(Ss,ys,e,t);l.layers=this.layers,this.add(l);const c=new gn(Ss,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ih extends cn{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lE extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ki?Gt:bn),this.texture=new Ih(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cr(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Si});r.uniforms.tEquirect.value=t;const a=new zt(s,r),o=t.minFilter;return t.minFilter===vr&&(t.minFilter=En),new oE(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const No=new $,cE=new $,uE=new rt;class Oi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=No.subVectors(i,t).cross(cE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(No),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uE.getNormalMatrix(e),s=this.coplanarPoint(No).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new nc,sa=new $;class sc{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],m=s[8],_=s[9],g=s[10],p=s[11],h=s[12],E=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,d-c,p-m,b-h).normalize(),i[1].setComponents(l+r,d+c,p+m,b+h).normalize(),i[2].setComponents(l+a,d+u,p+_,b+E).normalize(),i[3].setComponents(l-a,d-u,p-_,b-E).normalize(),i[4].setComponents(l-o,d-f,p-g,b-y).normalize(),t===ni)i[5].setComponents(l+o,d+f,p+g,b+y).normalize();else if(t===Ra)i[5].setComponents(o,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(sa.x=s.normal.x>0?e.max.x:e.min.x,sa.y=s.normal.y>0?e.max.y:e.min.y,sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fE(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class $i extends rs{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,m=[],_=[],g=[],p=[];for(let h=0;h<u;h++){const E=h*d-a;for(let y=0;y<c;y++){const b=y*f-r;_.push(b,-E,0),g.push(0,0,1),p.push(y/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const y=E+c*h,b=E+c*(h+1),C=E+1+c*(h+1),N=E+1+c*h;m.push(y,b,N),m.push(b,C,N)}this.setIndex(m),this.setAttribute("position",new Zi(_,3)),this.setAttribute("normal",new Zi(g,3)),this.setAttribute("uv",new Zi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.widthSegments,e.heightSegments)}}var dE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hE=`#ifdef USE_ALPHAHASH
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
#endif`,pE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vE=`#ifdef USE_AOMAP
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
#endif`,ME=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EE=`#ifdef USE_IRIDESCENCE
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
#endif`,bE=`#ifdef USE_BUMPMAP
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
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,IE=`#define PI 3.141592653589793
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
} // validated`,UE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FE=`vec3 transformedNormal = objectNormal;
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
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",zE=`
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
}`,GE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,XE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZE=`#ifdef USE_GRADIENTMAP
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
}`,JE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,QE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n1=`uniform bool receiveShadow;
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
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,s1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l1=`PhysicalMaterial material;
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
#endif`,c1=`struct PhysicalMaterial {
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
}`,u1=`
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
#endif`,f1=`#if defined( RE_IndirectDiffuse )
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,g1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x1=`#if defined( USE_POINTS_UV )
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
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
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
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,A1=`#ifdef USE_MORPHTARGETS
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
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
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
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y1=`float getShadowMask() {
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
}`,j1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,Q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ib=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ub=`uniform sampler2D t2D;
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`#include <common>
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
}`,_b=`#if DEPTH_PACKING == 3200
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
}`,gb=`#define DISTANCE
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
}`,vb=`#define DISTANCE
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`uniform float scale;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Eb=`#include <common>
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
}`,bb=`uniform vec3 diffuse;
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
}`,Tb=`#define LAMBERT
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
}`,Ab=`#define LAMBERT
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
}`,wb=`#define MATCAP
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
}`,Cb=`#define MATCAP
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
}`,Rb=`#define NORMAL
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
}`,Pb=`#define NORMAL
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
}`,Lb=`#define PHONG
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
}`,Db=`#define PHONG
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
}`,Ib=`#define STANDARD
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
}`,Ub=`#define STANDARD
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
}`,Fb=`#define TOON
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
}`,kb=`#define TOON
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
}`,Nb=`uniform float size;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Hb=`uniform vec3 color;
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
}`,zb=`uniform float rotation;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:dE,alphahash_pars_fragment:hE,alphamap_fragment:pE,alphamap_pars_fragment:mE,alphatest_fragment:_E,alphatest_pars_fragment:gE,aomap_fragment:vE,aomap_pars_fragment:ME,begin_vertex:xE,beginnormal_vertex:SE,bsdfs:yE,iridescence_fragment:EE,bumpmap_pars_fragment:bE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:AE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:CE,color_fragment:RE,color_pars_fragment:PE,color_pars_vertex:LE,color_vertex:DE,common:IE,cube_uv_reflection_fragment:UE,defaultnormal_vertex:FE,displacementmap_pars_vertex:kE,displacementmap_vertex:NE,emissivemap_fragment:OE,emissivemap_pars_fragment:BE,colorspace_fragment:HE,colorspace_pars_fragment:zE,envmap_fragment:GE,envmap_common_pars_fragment:VE,envmap_pars_fragment:WE,envmap_pars_vertex:$E,envmap_physical_pars_fragment:i1,envmap_vertex:qE,fog_vertex:XE,fog_pars_vertex:YE,fog_fragment:jE,fog_pars_fragment:KE,gradientmap_pars_fragment:ZE,lightmap_fragment:JE,lightmap_pars_fragment:QE,lights_lambert_fragment:e1,lights_lambert_pars_fragment:t1,lights_pars_begin:n1,lights_toon_fragment:s1,lights_toon_pars_fragment:r1,lights_phong_fragment:a1,lights_phong_pars_fragment:o1,lights_physical_fragment:l1,lights_physical_pars_fragment:c1,lights_fragment_begin:u1,lights_fragment_maps:f1,lights_fragment_end:d1,logdepthbuf_fragment:h1,logdepthbuf_pars_fragment:p1,logdepthbuf_pars_vertex:m1,logdepthbuf_vertex:_1,map_fragment:g1,map_pars_fragment:v1,map_particle_fragment:M1,map_particle_pars_fragment:x1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:y1,morphcolor_vertex:E1,morphnormal_vertex:b1,morphtarget_pars_vertex:T1,morphtarget_vertex:A1,normal_fragment_begin:w1,normal_fragment_maps:C1,normal_pars_fragment:R1,normal_pars_vertex:P1,normal_vertex:L1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:k1,opaque_fragment:N1,packing:O1,premultiplied_alpha_fragment:B1,project_vertex:H1,dithering_fragment:z1,dithering_pars_fragment:G1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:W1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:q1,shadowmap_vertex:X1,shadowmask_pars_fragment:Y1,skinbase_vertex:j1,skinning_pars_vertex:K1,skinning_vertex:Z1,skinnormal_vertex:J1,specularmap_fragment:Q1,specularmap_pars_fragment:eb,tonemapping_fragment:tb,tonemapping_pars_fragment:nb,transmission_fragment:ib,transmission_pars_fragment:sb,uv_pars_fragment:rb,uv_pars_vertex:ab,uv_vertex:ob,worldpos_vertex:lb,background_vert:cb,background_frag:ub,backgroundCube_vert:fb,backgroundCube_frag:db,cube_vert:hb,cube_frag:pb,depth_vert:mb,depth_frag:_b,distanceRGBA_vert:gb,distanceRGBA_frag:vb,equirect_vert:Mb,equirect_frag:xb,linedashed_vert:Sb,linedashed_frag:yb,meshbasic_vert:Eb,meshbasic_frag:bb,meshlambert_vert:Tb,meshlambert_frag:Ab,meshmatcap_vert:wb,meshmatcap_frag:Cb,meshnormal_vert:Rb,meshnormal_frag:Pb,meshphong_vert:Lb,meshphong_frag:Db,meshphysical_vert:Ib,meshphysical_frag:Ub,meshtoon_vert:Fb,meshtoon_frag:kb,points_vert:Nb,points_frag:Ob,shadow_vert:Bb,shadow_frag:Hb,sprite_vert:zb,sprite_frag:Gb},we={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},zn={basic:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ut(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Qt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Qt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ut(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Qt([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Qt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Qt([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Qt([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Qt([we.common,we.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Qt([we.lights,we.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};zn.physical={uniforms:Qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ra={r:0,b:0,g:0};function Vb(n,e,t,i,s,r,a){const o=new ut(0);let l=r===!0?0:1,c,u,f=null,d=0,m=null;function _(p,h){let E=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),E=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ya)?(u===void 0&&(u=new zt(new Cr(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:Hs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ht.getTransfer(y.colorSpace)!==_t,(f!==y||d!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new zt(new $i(2,2),new ts({name:"BackgroundMaterial",uniforms:Hs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){p.getRGB(ra,Lh(n)),i.buffers.color.setClear(ra.r,ra.g,ra.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function Wb(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function f(F,V,W,Y,te){let pe=!1;if(a){const de=g(Y,W,V);c!==de&&(c=de,m(c.object)),pe=h(F,Y,W,te),pe&&E(F,Y,W,te)}else{const de=V.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==de)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=de,pe=!0)}te!==null&&t.update(te,n.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,j(F,V,W,Y),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function g(F,V,W){const Y=W.wireframe===!0;let te=o[F.id];te===void 0&&(te={},o[F.id]=te);let pe=te[V.id];pe===void 0&&(pe={},te[V.id]=pe);let de=pe[Y];return de===void 0&&(de=p(d()),pe[Y]=de),de}function p(F){const V=[],W=[],Y=[];for(let te=0;te<s;te++)V[te]=0,W[te]=0,Y[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:Y,object:F,attributes:{},index:null}}function h(F,V,W,Y){const te=c.attributes,pe=V.attributes;let de=0;const z=W.getAttributes();for(const X in z)if(z[X].location>=0){const Ee=te[X];let Te=pe[X];if(Te===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(Te=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(Te=F.instanceColor)),Ee===void 0||Ee.attribute!==Te||Te&&Ee.data!==Te.data)return!0;de++}return c.attributesNum!==de||c.index!==Y}function E(F,V,W,Y){const te={},pe=V.attributes;let de=0;const z=W.getAttributes();for(const X in z)if(z[X].location>=0){let Ee=pe[X];Ee===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(Ee=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(Ee=F.instanceColor));const Te={};Te.attribute=Ee,Ee&&Ee.data&&(Te.data=Ee.data),te[X]=Te,de++}c.attributes=te,c.attributesNum=de,c.index=Y}function y(){const F=c.newAttributes;for(let V=0,W=F.length;V<W;V++)F[V]=0}function b(F){C(F,0)}function C(F,V){const W=c.newAttributes,Y=c.enabledAttributes,te=c.attributeDivisors;W[F]=1,Y[F]===0&&(n.enableVertexAttribArray(F),Y[F]=1),te[F]!==V&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,V),te[F]=V)}function N(){const F=c.newAttributes,V=c.enabledAttributes;for(let W=0,Y=V.length;W<Y;W++)V[W]!==F[W]&&(n.disableVertexAttribArray(W),V[W]=0)}function D(F,V,W,Y,te,pe,de){de===!0?n.vertexAttribIPointer(F,V,W,te,pe):n.vertexAttribPointer(F,V,W,Y,te,pe)}function j(F,V,W,Y){if(i.isWebGL2===!1&&(F.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const te=Y.attributes,pe=W.getAttributes(),de=V.defaultAttributeValues;for(const z in pe){const X=pe[z];if(X.location>=0){let ge=te[z];if(ge===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(ge=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(ge=F.instanceColor)),ge!==void 0){const Ee=ge.normalized,Te=ge.itemSize,Le=t.get(ge);if(Le===void 0)continue;const We=Le.buffer,Be=Le.type,Se=Le.bytesPerElement,ke=i.isWebGL2===!0&&(Be===n.INT||Be===n.UNSIGNED_INT||ge.gpuType===ph);if(ge.isInterleavedBufferAttribute){const He=ge.data,M=He.stride,I=ge.offset;if(He.isInstancedInterleavedBuffer){for(let R=0;R<X.locationSize;R++)C(X.location+R,He.meshPerAttribute);F.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let R=0;R<X.locationSize;R++)b(X.location+R);n.bindBuffer(n.ARRAY_BUFFER,We);for(let R=0;R<X.locationSize;R++)D(X.location+R,Te/X.locationSize,Be,Ee,M*Se,(I+Te/X.locationSize*R)*Se,ke)}else{if(ge.isInstancedBufferAttribute){for(let He=0;He<X.locationSize;He++)C(X.location+He,ge.meshPerAttribute);F.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let He=0;He<X.locationSize;He++)b(X.location+He);n.bindBuffer(n.ARRAY_BUFFER,We);for(let He=0;He<X.locationSize;He++)D(X.location+He,Te/X.locationSize,Be,Ee,Te*Se,Te/X.locationSize*He*Se,ke)}}else if(de!==void 0){const Ee=de[z];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(X.location,Ee);break;case 3:n.vertexAttrib3fv(X.location,Ee);break;case 4:n.vertexAttrib4fv(X.location,Ee);break;default:n.vertexAttrib1fv(X.location,Ee)}}}}N()}function x(){oe();for(const F in o){const V=o[F];for(const W in V){const Y=V[W];for(const te in Y)_(Y[te].object),delete Y[te];delete V[W]}delete o[F]}}function w(F){if(o[F.id]===void 0)return;const V=o[F.id];for(const W in V){const Y=V[W];for(const te in Y)_(Y[te].object),delete Y[te];delete V[W]}delete o[F.id]}function Q(F){for(const V in o){const W=o[V];if(W[F.id]===void 0)continue;const Y=W[F.id];for(const te in Y)_(Y[te].object),delete Y[te];delete W[F.id]}}function oe(){_e(),u=!0,c!==l&&(c=l,m(c.object))}function _e(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:oe,resetDefaultState:_e,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:Q,initAttributes:y,enableAttribute:b,disableUnusedAttributes:N}}function $b(n,e,t,i){const s=i.isWebGL2;let r;function a(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,m;if(s)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function qb(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,b=a||e.has("OES_texture_float"),C=y&&b,N=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:N}}function Xb(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Oi,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const E=r?0:i,y=E*4;let b=h.clippingState||null;l.value=b,b=u(_,d,y,m);for(let C=0;C!==y;++C)b[C]=t[C];h.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,b=m;y!==g;++y,b+=4)a.copy(f[y]).applyMatrix4(E,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Yb(n){let e=new WeakMap;function t(a,o){return o===pl?a.mapping=Ns:o===ml&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===pl||o===ml)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lE(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class jb extends Dh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,qu=[.125,.215,.35,.446,.526,.582],Vi=20,Oo=new jb,Xu=new ut;let Bo=null,Ho=0,zo=0;const Bi=(1+Math.sqrt(5))/2,Es=1/Bi,Yu=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,Bi,Es),new $(0,Bi,-Es),new $(Es,0,Bi),new $(-Es,0,Bi),new $(Bi,Es,0),new $(-Bi,Es,0)];class ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Bo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bo,Ho,zo),e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Mr,format:In,colorSpace:ri,depthBuffer:!1},s=Ku(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kb(r)),this._blurMaterial=Zb(r,e,t)}return s}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,i,s){const o=new gn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Xu),u.toneMapping=yi,u.autoClear=!1;const m=new Ch({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new zt(new Cr,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Xu),g=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):E===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;aa(s,E*y,h>2?y:0,y,y),u.setRenderTarget(s),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ns||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;aa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Oo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yu[(s-1)%Yu.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):Vi;p>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const h=[];let E=0;for(let D=0;D<Vi;++D){const j=D/g,x=Math.exp(-j*j/2);h.push(x),D===0?E+=x:D<p&&(E+=2*x)}for(let D=0;D<h.length;D++)h[D]=h[D]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const b=this._sizeLods[s],C=3*b*(s>y-As?s-y+As:0),N=4*(this._cubeSize-b);aa(t,C,N,3*b,2*b),l.setRenderTarget(t),l.render(f,Oo)}}function Kb(n){const e=[],t=[],i=[];let s=n;const r=n-As+1+qu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-As?l=qu[a-n+As-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,g=3,p=2,h=1,E=new Float32Array(g*_*m),y=new Float32Array(p*_*m),b=new Float32Array(h*_*m);for(let N=0;N<m;N++){const D=N%3*2/3-1,j=N>2?0:-1,x=[D,j,0,D+2/3,j,0,D+2/3,j+1,0,D,j,0,D+2/3,j+1,0,D,j+1,0];E.set(x,g*_*N),y.set(d,p*_*N);const w=[N,N,N,N,N,N];b.set(w,h*_*N)}const C=new rs;C.setAttribute("position",new $n(E,g)),C.setAttribute("uv",new $n(y,p)),C.setAttribute("faceIndex",new $n(b,h)),e.push(C),s>As&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ku(n,e,t){const i=new es(n,e,t);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Zb(n,e,t){const i=new Float32Array(Vi),s=new $(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Zu(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ju(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Jb(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===pl||l===ml,u=l===Ns||l===Os;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new ju(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new ju(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Qb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function eT(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,h=g.length;p<h;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let y=0,b=E.length;y<b;y+=3){const C=E[y+0],N=E[y+1],D=E[y+2];d.push(C,N,N,D,D,C)}}else if(_!==void 0){const E=_.array;g=_.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const C=y+0,N=y+1,D=y+2;d.push(C,N,N,D,D,C)}}else return;const p=new(yh(d)?Ph:Rh)(d,1);p.version=g;const h=r.get(f);h&&e.remove(h),r.set(f,p)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function tT(n,e,t,i){const s=i.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(r,m,o,d*l),t.update(m,r,1)}function f(d,m,_){if(_===0)return;let g,p;if(s)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,o,d*l,_),t.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function nT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function iT(n,e){return n[0]-e[0]}function sT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function rT(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new Mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let V=function(){_e.dispose(),r.delete(u),u.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],j=u.morphAttributes.color||[];let x=0;y===!0&&(x=1),b===!0&&(x=2),C===!0&&(x=3);let w=u.attributes.position.count*x,Q=1;w>e.maxTextureSize&&(Q=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const oe=new Float32Array(w*Q*4*g),_e=new Th(oe,w,Q,g);_e.type=gi,_e.needsUpdate=!0;const F=x*4;for(let W=0;W<g;W++){const Y=N[W],te=D[W],pe=j[W],de=w*Q*4*W;for(let z=0;z<Y.count;z++){const X=z*F;y===!0&&(a.fromBufferAttribute(Y,z),oe[de+X+0]=a.x,oe[de+X+1]=a.y,oe[de+X+2]=a.z,oe[de+X+3]=0),b===!0&&(a.fromBufferAttribute(te,z),oe[de+X+4]=a.x,oe[de+X+5]=a.y,oe[de+X+6]=a.z,oe[de+X+7]=0),C===!0&&(a.fromBufferAttribute(pe,z),oe[de+X+8]=a.x,oe[de+X+9]=a.y,oe[de+X+10]=a.z,oe[de+X+11]=pe.itemSize===4?a.w:1)}}p={count:g,texture:_e,size:new ft(w,Q)},r.set(u,p),u.addEventListener("dispose",V)}let h=0;for(let y=0;y<d.length;y++)h+=d[y];const E=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let b=0;b<_;b++)g[b]=[b,0];i[u.id]=g}for(let b=0;b<_;b++){const C=g[b];C[0]=b,C[1]=d[b]}g.sort(sT);for(let b=0;b<8;b++)b<_&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(iT);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const C=o[b],N=C[0],D=C[1];N!==Number.MAX_SAFE_INTEGER&&D?(p&&u.getAttribute("morphTarget"+b)!==p[N]&&u.setAttribute("morphTarget"+b,p[N]),h&&u.getAttribute("morphNormal"+b)!==h[N]&&u.setAttribute("morphNormal"+b,h[N]),s[b]=D,E+=D):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const y=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function aT(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Fh=new cn,kh=new Th,Nh=new $y,Oh=new Ih,Qu=[],ef=[],tf=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Qu[s];if(r===void 0&&(r=new Float32Array(s),Qu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Za(n,e){let t=ef[e];t===void 0&&(t=new Int32Array(e),ef[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function cT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function uT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function fT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;sf.set(i),n.uniformMatrix2fv(this.addr,!1,sf),kt(t,i)}}function dT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;nf.set(i),n.uniformMatrix3fv(this.addr,!1,nf),kt(t,i)}}function hT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;tf.set(i),n.uniformMatrix4fv(this.addr,!1,tf),kt(t,i)}}function pT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function _T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function gT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function vT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function ST(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function yT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Fh,s)}function ET(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Nh,s)}function bT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Oh,s)}function TT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kh,s)}function AT(n){switch(n){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return _T;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return MT;case 36295:return xT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return TT}}function wT(n,e){n.uniform1fv(this.addr,e)}function CT(n,e){const t=qs(e,this.size,2);n.uniform2fv(this.addr,t)}function RT(n,e){const t=qs(e,this.size,3);n.uniform3fv(this.addr,t)}function PT(n,e){const t=qs(e,this.size,4);n.uniform4fv(this.addr,t)}function LT(n,e){const t=qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function DT(n,e){const t=qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function IT(n,e){const t=qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function UT(n,e){n.uniform1iv(this.addr,e)}function FT(n,e){n.uniform2iv(this.addr,e)}function kT(n,e){n.uniform3iv(this.addr,e)}function NT(n,e){n.uniform4iv(this.addr,e)}function OT(n,e){n.uniform1uiv(this.addr,e)}function BT(n,e){n.uniform2uiv(this.addr,e)}function HT(n,e){n.uniform3uiv(this.addr,e)}function zT(n,e){n.uniform4uiv(this.addr,e)}function GT(n,e,t){const i=this.cache,s=e.length,r=Za(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Fh,r[a])}function VT(n,e,t){const i=this.cache,s=e.length,r=Za(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nh,r[a])}function WT(n,e,t){const i=this.cache,s=e.length,r=Za(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Oh,r[a])}function $T(n,e,t){const i=this.cache,s=e.length,r=Za(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kh,r[a])}function qT(n){switch(n){case 5126:return wT;case 35664:return CT;case 35665:return RT;case 35666:return PT;case 35674:return LT;case 35675:return DT;case 35676:return IT;case 5124:case 35670:return UT;case 35667:case 35671:return FT;case 35668:case 35672:return kT;case 35669:case 35673:return NT;case 5125:return OT;case 36294:return BT;case 36295:return HT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return $T}}class XT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=AT(t.type)}}class YT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=qT(t.type)}}class jT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function rf(n,e){n.seq.push(e),n.map[e.id]=e}function KT(n,e,t){const i=n.name,s=i.length;for(Go.lastIndex=0;;){const r=Go.exec(i),a=Go.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rf(t,c===void 0?new XT(o,n,e):new YT(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new jT(o),rf(t,f)),t=f}}}class _a{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);KT(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function af(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ZT=37297;let JT=0;function QT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function eA(n){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(n);let i;switch(e===t?i="":e===Ca&&t===wa?i="LinearDisplayP3ToLinearSRGB":e===wa&&t===Ca&&(i="LinearSRGBToLinearDisplayP3"),n){case ri:case ja:return[i,"LinearTransferOETF"];case Gt:case tc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function of(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+QT(n.getShaderSource(e),a)}else return s}function tA(n,e){const t=eA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nA(n,e){let t;switch(e){case hy:t="Linear";break;case py:t="Reinhard";break;case my:t="OptimizedCineon";break;case _y:t="ACESFilmic";break;case gy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function iA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ar).join(`
`)}function sA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ar(n){return n!==""}function lf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(n){return n.replace(aA,lA)}const oA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lA(n,e){let t=nt[e];if(t===void 0){const i=oA.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(n){return n.replace(cA,uA)}function uA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function dA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Os:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function pA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case fy:e="ENVMAP_BLENDING_MIX";break;case dy:e="ENVMAP_BLENDING_ADD";break}return e}function mA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _A(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fA(t),c=dA(t),u=hA(t),f=pA(t),d=mA(t),m=t.isWebGL2?"":iA(t),_=sA(r),g=s.createProgram();let p,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ar).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ar).join(`
`),h.length>0&&(h+=`
`)):(p=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),h=[m,ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?nt.tonemapping_pars_fragment:"",t.toneMapping!==yi?nA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,tA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),a=Sl(a),a=lf(a,t),a=cf(a,t),o=Sl(o),o=lf(o,t),o=cf(o,t),a=uf(a),o=uf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=E+p+a,b=E+h+o,C=af(s,s.VERTEX_SHADER,y),N=af(s,s.FRAGMENT_SHADER,b);s.attachShader(g,C),s.attachShader(g,N),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(Q){if(n.debug.checkShaderErrors){const oe=s.getProgramInfoLog(g).trim(),_e=s.getShaderInfoLog(C).trim(),F=s.getShaderInfoLog(N).trim();let V=!0,W=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,C,N);else{const Y=of(s,C,"vertex"),te=of(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+Y+`
`+te)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(_e===""||F==="")&&(W=!1);W&&(Q.diagnostics={runnable:V,programLog:oe,vertexShader:{log:_e,prefix:p},fragmentShader:{log:F,prefix:h}})}s.deleteShader(C),s.deleteShader(N),j=new _a(s,g),x=rA(s,g)}let j;this.getUniforms=function(){return j===void 0&&D(this),j};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,ZT)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=N,this}let gA=0;class vA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MA(e),t.set(e,i)),i}}class MA{constructor(e){this.id=gA++,this.code=e,this.usedTimes=0}}function xA(n,e,t,i,s,r,a){const o=new ic,l=new vA,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function p(x,w,Q,oe,_e){const F=oe.fog,V=_e.geometry,W=x.isMeshStandardMaterial?oe.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),te=Y&&Y.mapping===Ya?Y.image.height:null,pe=_[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,z=de!==void 0?de.length:0;let X=0;V.morphAttributes.position!==void 0&&(X=1),V.morphAttributes.normal!==void 0&&(X=2),V.morphAttributes.color!==void 0&&(X=3);let ge,Ee,Te,Le;if(pe){const mt=zn[pe];ge=mt.vertexShader,Ee=mt.fragmentShader}else ge=x.vertexShader,Ee=x.fragmentShader,l.update(x),Te=l.getVertexShaderID(x),Le=l.getFragmentShaderID(x);const We=n.getRenderTarget(),Be=_e.isInstancedMesh===!0,Se=!!x.map,ke=!!x.matcap,He=!!Y,M=!!x.aoMap,I=!!x.lightMap,R=!!x.bumpMap,G=!!x.normalMap,H=!!x.displacementMap,ce=!!x.emissiveMap,he=!!x.metalnessMap,se=!!x.roughnessMap,ue=x.anisotropy>0,ae=x.clearcoat>0,be=x.iridescence>0,S=x.sheen>0,v=x.transmission>0,B=ue&&!!x.anisotropyMap,re=ae&&!!x.clearcoatMap,le=ae&&!!x.clearcoatNormalMap,fe=ae&&!!x.clearcoatRoughnessMap,Ae=be&&!!x.iridescenceMap,ve=be&&!!x.iridescenceThicknessMap,Ce=S&&!!x.sheenColorMap,Ge=S&&!!x.sheenRoughnessMap,Je=!!x.specularMap,Me=!!x.specularColorMap,Xe=!!x.specularIntensityMap,Ne=v&&!!x.transmissionMap,Ve=v&&!!x.thicknessMap,ze=!!x.gradientMap,De=!!x.alphaMap,st=x.alphaTest>0,O=!!x.alphaHash,U=!!x.extensions,L=!!V.attributes.uv1,k=!!V.attributes.uv2,K=!!V.attributes.uv3;let ye=yi;return x.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(ye=n.toneMapping),{isWebGL2:u,shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:ge,fragmentShader:Ee,defines:x.defines,customVertexShaderID:Te,customFragmentShaderID:Le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Be,instancingColor:Be&&_e.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:We===null?n.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:ri,map:Se,matcap:ke,envMap:He,envMapMode:He&&Y.mapping,envMapCubeUVHeight:te,aoMap:M,lightMap:I,bumpMap:R,normalMap:G,displacementMap:d&&H,emissiveMap:ce,normalMapObjectSpace:G&&x.normalMapType===Py,normalMapTangentSpace:G&&x.normalMapType===Sh,metalnessMap:he,roughnessMap:se,anisotropy:ue,anisotropyMap:B,clearcoat:ae,clearcoatMap:re,clearcoatNormalMap:le,clearcoatRoughnessMap:fe,iridescence:be,iridescenceMap:Ae,iridescenceThicknessMap:ve,sheen:S,sheenColorMap:Ce,sheenRoughnessMap:Ge,specularMap:Je,specularColorMap:Me,specularIntensityMap:Xe,transmission:v,transmissionMap:Ne,thicknessMap:Ve,gradientMap:ze,opaque:x.transparent===!1&&x.blending===Ls,alphaMap:De,alphaTest:st,alphaHash:O,combine:x.combine,mapUv:Se&&g(x.map.channel),aoMapUv:M&&g(x.aoMap.channel),lightMapUv:I&&g(x.lightMap.channel),bumpMapUv:R&&g(x.bumpMap.channel),normalMapUv:G&&g(x.normalMap.channel),displacementMapUv:H&&g(x.displacementMap.channel),emissiveMapUv:ce&&g(x.emissiveMap.channel),metalnessMapUv:he&&g(x.metalnessMap.channel),roughnessMapUv:se&&g(x.roughnessMap.channel),anisotropyMapUv:B&&g(x.anisotropyMap.channel),clearcoatMapUv:re&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&g(x.sheenRoughnessMap.channel),specularMapUv:Je&&g(x.specularMap.channel),specularColorMapUv:Me&&g(x.specularColorMap.channel),specularIntensityMapUv:Xe&&g(x.specularIntensityMap.channel),transmissionMapUv:Ne&&g(x.transmissionMap.channel),thicknessMapUv:Ve&&g(x.thicknessMap.channel),alphaMapUv:De&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(G||ue),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:L,vertexUv2s:k,vertexUv3s:K,pointsUvs:_e.isPoints===!0&&!!V.attributes.uv&&(Se||De),fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:_e.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:X,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&Q.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Se&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:U&&x.extensions.derivatives===!0,extensionFragDepth:U&&x.extensions.fragDepth===!0,extensionDrawBuffers:U&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Q in x.defines)w.push(Q),w.push(x.defines[Q]);return x.isRawShaderMaterial===!1&&(E(w,x),y(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function E(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function b(x){const w=_[x.type];let Q;if(w){const oe=zn[w];Q=sE.clone(oe.uniforms)}else Q=x.uniforms;return Q}function C(x,w){let Q;for(let oe=0,_e=c.length;oe<_e;oe++){const F=c[oe];if(F.cacheKey===w){Q=F,++Q.usedTimes;break}}return Q===void 0&&(Q=new _A(n,w,x,r),c.push(Q)),Q}function N(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function D(x){l.remove(x)}function j(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:C,releaseProgram:N,releaseShaderCache:D,programs:c,dispose:j}}function SA(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function yA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function df(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,m,_,g,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=p),e++,h}function o(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||yA),i.length>1&&i.sort(d||df),s.length>1&&s.sort(d||df)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function EA(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new hf,n.set(i,[a])):s>=r.length?(a=new hf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new ut};break;case"SpotLight":t={position:new $,direction:new $,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function TA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let AA=0;function wA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CA(n,e){const t=new bA,i=TA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new $);const r=new $,a=new Lt,o=new Lt;function l(u,f){let d=0,m=0,_=0;for(let oe=0;oe<9;oe++)s.probe[oe].set(0,0,0);let g=0,p=0,h=0,E=0,y=0,b=0,C=0,N=0,D=0,j=0,x=0;u.sort(wA);const w=f===!0?Math.PI:1;for(let oe=0,_e=u.length;oe<_e;oe++){const F=u[oe],V=F.color,W=F.intensity,Y=F.distance,te=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=V.r*W*w,m+=V.g*W*w,_+=V.b*W*w;else if(F.isLightProbe){for(let pe=0;pe<9;pe++)s.probe[pe].addScaledVector(F.sh.coefficients[pe],W);x++}else if(F.isDirectionalLight){const pe=t.get(F);if(pe.color.copy(F.color).multiplyScalar(F.intensity*w),F.castShadow){const de=F.shadow,z=i.get(F);z.shadowBias=de.bias,z.shadowNormalBias=de.normalBias,z.shadowRadius=de.radius,z.shadowMapSize=de.mapSize,s.directionalShadow[g]=z,s.directionalShadowMap[g]=te,s.directionalShadowMatrix[g]=F.shadow.matrix,b++}s.directional[g]=pe,g++}else if(F.isSpotLight){const pe=t.get(F);pe.position.setFromMatrixPosition(F.matrixWorld),pe.color.copy(V).multiplyScalar(W*w),pe.distance=Y,pe.coneCos=Math.cos(F.angle),pe.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),pe.decay=F.decay,s.spot[h]=pe;const de=F.shadow;if(F.map&&(s.spotLightMap[D]=F.map,D++,de.updateMatrices(F),F.castShadow&&j++),s.spotLightMatrix[h]=de.matrix,F.castShadow){const z=i.get(F);z.shadowBias=de.bias,z.shadowNormalBias=de.normalBias,z.shadowRadius=de.radius,z.shadowMapSize=de.mapSize,s.spotShadow[h]=z,s.spotShadowMap[h]=te,N++}h++}else if(F.isRectAreaLight){const pe=t.get(F);pe.color.copy(V).multiplyScalar(W),pe.halfWidth.set(F.width*.5,0,0),pe.halfHeight.set(0,F.height*.5,0),s.rectArea[E]=pe,E++}else if(F.isPointLight){const pe=t.get(F);if(pe.color.copy(F.color).multiplyScalar(F.intensity*w),pe.distance=F.distance,pe.decay=F.decay,F.castShadow){const de=F.shadow,z=i.get(F);z.shadowBias=de.bias,z.shadowNormalBias=de.normalBias,z.shadowRadius=de.radius,z.shadowMapSize=de.mapSize,z.shadowCameraNear=de.camera.near,z.shadowCameraFar=de.camera.far,s.pointShadow[p]=z,s.pointShadowMap[p]=te,s.pointShadowMatrix[p]=F.shadow.matrix,C++}s.point[p]=pe,p++}else if(F.isHemisphereLight){const pe=t.get(F);pe.skyColor.copy(F.color).multiplyScalar(W*w),pe.groundColor.copy(F.groundColor).multiplyScalar(W*w),s.hemi[y]=pe,y++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=_;const Q=s.hash;(Q.directionalLength!==g||Q.pointLength!==p||Q.spotLength!==h||Q.rectAreaLength!==E||Q.hemiLength!==y||Q.numDirectionalShadows!==b||Q.numPointShadows!==C||Q.numSpotShadows!==N||Q.numSpotMaps!==D||Q.numLightProbes!==x)&&(s.directional.length=g,s.spot.length=h,s.rectArea.length=E,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=N+D-j,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=j,s.numLightProbes=x,Q.directionalLength=g,Q.pointLength=p,Q.spotLength=h,Q.rectAreaLength=E,Q.hemiLength=y,Q.numDirectionalShadows=b,Q.numPointShadows=C,Q.numSpotShadows=N,Q.numSpotMaps=D,Q.numLightProbes=x,s.version=AA++)}function c(u,f){let d=0,m=0,_=0,g=0,p=0;const h=f.matrixWorldInverse;for(let E=0,y=u.length;E<y;E++){const b=u[E];if(b.isDirectionalLight){const C=s.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(h),d++}else if(b.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(h),_++}else if(b.isRectAreaLight){const C=s.rectArea[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const C=s.hemi[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:s}}function pf(n,e){const t=new CA(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(f){i.push(f)}function o(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function RA(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new pf(n,e),t.set(r,[l])):a>=o.length?(l=new pf(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class PA extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LA extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
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
}`;function UA(n,e,t){let i=new sc;const s=new ft,r=new ft,a=new Mt,o=new PA({depthPacking:Ry}),l=new LA,c={},u=t.maxTextureSize,f={[Ai]:ln,[ln]:Ai,[an]:an},d=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:DA,fragmentShader:IA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new rs;_.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dh;let h=this.type;this.render=function(C,N,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const j=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(Si),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const oe=h!==Qn&&this.type===Qn,_e=h===Qn&&this.type!==Qn;for(let F=0,V=C.length;F<V;F++){const W=C[F],Y=W.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const te=Y.getFrameExtents();if(s.multiply(te),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,Y.mapSize.y=r.y)),Y.map===null||oe===!0||_e===!0){const de=this.type!==Qn?{minFilter:tn,magFilter:tn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new es(s.x,s.y,de),Y.map.texture.name=W.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const pe=Y.getViewportCount();for(let de=0;de<pe;de++){const z=Y.getViewport(de);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),Q.viewport(a),Y.updateMatrices(W,de),i=Y.getFrustum(),b(N,D,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===Qn&&E(Y,D),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(j,x,w)};function E(C,N){const D=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new es(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(N,null,D,d,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(N,null,D,m,g,null)}function y(C,N,D,j){let x=null;const w=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)x=w;else if(x=D.isPointLight===!0?l:o,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const Q=x.uuid,oe=N.uuid;let _e=c[Q];_e===void 0&&(_e={},c[Q]=_e);let F=_e[oe];F===void 0&&(F=x.clone(),_e[oe]=F),x=F}if(x.visible=N.visible,x.wireframe=N.wireframe,j===Qn?x.side=N.shadowSide!==null?N.shadowSide:N.side:x.side=N.shadowSide!==null?N.shadowSide:f[N.side],x.alphaMap=N.alphaMap,x.alphaTest=N.alphaTest,x.map=N.map,x.clipShadows=N.clipShadows,x.clippingPlanes=N.clippingPlanes,x.clipIntersection=N.clipIntersection,x.displacementMap=N.displacementMap,x.displacementScale=N.displacementScale,x.displacementBias=N.displacementBias,x.wireframeLinewidth=N.wireframeLinewidth,x.linewidth=N.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Q=n.properties.get(x);Q.light=D}return x}function b(C,N,D,j,x){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Qn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const oe=e.update(C),_e=C.material;if(Array.isArray(_e)){const F=oe.groups;for(let V=0,W=F.length;V<W;V++){const Y=F[V],te=_e[Y.materialIndex];if(te&&te.visible){const pe=y(C,te,j,x);n.renderBufferDirect(D,null,oe,pe,C,Y)}}}else if(_e.visible){const F=y(C,_e,j,x);n.renderBufferDirect(D,null,oe,F,C,null)}}const Q=C.children;for(let oe=0,_e=Q.length;oe<_e;oe++)b(Q[oe],N,D,j,x)}}function FA(n,e,t){const i=t.isWebGL2;function s(){let O=!1;const U=new Mt;let L=null;const k=new Mt(0,0,0,0);return{setMask:function(K){L!==K&&!O&&(n.colorMask(K,K,K,K),L=K)},setLocked:function(K){O=K},setClear:function(K,ye,Fe,mt,Kt){Kt===!0&&(K*=mt,ye*=mt,Fe*=mt),U.set(K,ye,Fe,mt),k.equals(U)===!1&&(n.clearColor(K,ye,Fe,mt),k.copy(U))},reset:function(){O=!1,L=null,k.set(-1,0,0,0)}}}function r(){let O=!1,U=null,L=null,k=null;return{setTest:function(K){K?Se(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(K){U!==K&&!O&&(n.depthMask(K),U=K)},setFunc:function(K){if(L!==K){switch(K){case sy:n.depthFunc(n.NEVER);break;case ry:n.depthFunc(n.ALWAYS);break;case ay:n.depthFunc(n.LESS);break;case Ta:n.depthFunc(n.LEQUAL);break;case oy:n.depthFunc(n.EQUAL);break;case ly:n.depthFunc(n.GEQUAL);break;case cy:n.depthFunc(n.GREATER);break;case uy:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}L=K}},setLocked:function(K){O=K},setClear:function(K){k!==K&&(n.clearDepth(K),k=K)},reset:function(){O=!1,U=null,L=null,k=null}}}function a(){let O=!1,U=null,L=null,k=null,K=null,ye=null,Fe=null,mt=null,Kt=null;return{setTest:function(ot){O||(ot?Se(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(ot){U!==ot&&!O&&(n.stencilMask(ot),U=ot)},setFunc:function(ot,Dt,On){(L!==ot||k!==Dt||K!==On)&&(n.stencilFunc(ot,Dt,On),L=ot,k=Dt,K=On)},setOp:function(ot,Dt,On){(ye!==ot||Fe!==Dt||mt!==On)&&(n.stencilOp(ot,Dt,On),ye=ot,Fe=Dt,mt=On)},setLocked:function(ot){O=ot},setClear:function(ot){Kt!==ot&&(n.clearStencil(ot),Kt=ot)},reset:function(){O=!1,U=null,L=null,k=null,K=null,ye=null,Fe=null,mt=null,Kt=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,g=[],p=null,h=!1,E=null,y=null,b=null,C=null,N=null,D=null,j=null,x=new ut(0,0,0),w=0,Q=!1,oe=null,_e=null,F=null,V=null,W=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,pe=0;const de=n.getParameter(n.VERSION);de.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(de)[1]),te=pe>=1):de.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),te=pe>=2);let z=null,X={};const ge=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),Te=new Mt().fromArray(ge),Le=new Mt().fromArray(Ee);function We(O,U,L,k){const K=new Uint8Array(4),ye=n.createTexture();n.bindTexture(O,ye),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<L;Fe++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(U,0,n.RGBA,1,1,k,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(U+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return ye}const Be={};Be[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Be[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(n.DEPTH_TEST),l.setFunc(Ta),he(!1),se(Yc),Se(n.CULL_FACE),H(Si);function Se(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function ke(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function He(O,U){return m[O]!==U?(n.bindFramebuffer(O,U),m[O]=U,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=U),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=U)),!0):!1}function M(O,U){let L=g,k=!1;if(O)if(L=_.get(U),L===void 0&&(L=[],_.set(U,L)),O.isWebGLMultipleRenderTargets){const K=O.texture;if(L.length!==K.length||L[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Fe=K.length;ye<Fe;ye++)L[ye]=n.COLOR_ATTACHMENT0+ye;L.length=K.length,k=!0}}else L[0]!==n.COLOR_ATTACHMENT0&&(L[0]=n.COLOR_ATTACHMENT0,k=!0);else L[0]!==n.BACK&&(L[0]=n.BACK,k=!0);k&&(t.isWebGL2?n.drawBuffers(L):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(L))}function I(O){return p!==O?(n.useProgram(O),p=O,!0):!1}const R={[Gi]:n.FUNC_ADD,[VS]:n.FUNC_SUBTRACT,[WS]:n.FUNC_REVERSE_SUBTRACT};if(i)R[Jc]=n.MIN,R[Qc]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(R[Jc]=O.MIN_EXT,R[Qc]=O.MAX_EXT)}const G={[$S]:n.ZERO,[qS]:n.ONE,[XS]:n.SRC_COLOR,[dl]:n.SRC_ALPHA,[QS]:n.SRC_ALPHA_SATURATE,[ZS]:n.DST_COLOR,[jS]:n.DST_ALPHA,[YS]:n.ONE_MINUS_SRC_COLOR,[hl]:n.ONE_MINUS_SRC_ALPHA,[JS]:n.ONE_MINUS_DST_COLOR,[KS]:n.ONE_MINUS_DST_ALPHA,[ey]:n.CONSTANT_COLOR,[ty]:n.ONE_MINUS_CONSTANT_COLOR,[ny]:n.CONSTANT_ALPHA,[iy]:n.ONE_MINUS_CONSTANT_ALPHA};function H(O,U,L,k,K,ye,Fe,mt,Kt,ot){if(O===Si){h===!0&&(ke(n.BLEND),h=!1);return}if(h===!1&&(Se(n.BLEND),h=!0),O!==GS){if(O!==E||ot!==Q){if((y!==Gi||N!==Gi)&&(n.blendEquation(n.FUNC_ADD),y=Gi,N=Gi),ot)switch(O){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jc:n.blendFunc(n.ONE,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,C=null,D=null,j=null,x.set(0,0,0),w=0,E=O,Q=ot}return}K=K||U,ye=ye||L,Fe=Fe||k,(U!==y||K!==N)&&(n.blendEquationSeparate(R[U],R[K]),y=U,N=K),(L!==b||k!==C||ye!==D||Fe!==j)&&(n.blendFuncSeparate(G[L],G[k],G[ye],G[Fe]),b=L,C=k,D=ye,j=Fe),(mt.equals(x)===!1||Kt!==w)&&(n.blendColor(mt.r,mt.g,mt.b,Kt),x.copy(mt),w=Kt),E=O,Q=!1}function ce(O,U){O.side===an?ke(n.CULL_FACE):Se(n.CULL_FACE);let L=O.side===ln;U&&(L=!L),he(L),O.blending===Ls&&O.transparent===!1?H(Si):H(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const k=O.stencilWrite;c.setTest(k),k&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ae(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(O){oe!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),oe=O)}function se(O){O!==BS?(Se(n.CULL_FACE),O!==_e&&(O===Yc?n.cullFace(n.BACK):O===HS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),_e=O}function ue(O){O!==F&&(te&&n.lineWidth(O),F=O)}function ae(O,U,L){O?(Se(n.POLYGON_OFFSET_FILL),(V!==U||W!==L)&&(n.polygonOffset(U,L),V=U,W=L)):ke(n.POLYGON_OFFSET_FILL)}function be(O){O?Se(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function S(O){O===void 0&&(O=n.TEXTURE0+Y-1),z!==O&&(n.activeTexture(O),z=O)}function v(O,U,L){L===void 0&&(z===null?L=n.TEXTURE0+Y-1:L=z);let k=X[L];k===void 0&&(k={type:void 0,texture:void 0},X[L]=k),(k.type!==O||k.texture!==U)&&(z!==L&&(n.activeTexture(L),z=L),n.bindTexture(O,U||Be[O]),k.type=O,k.texture=U)}function B(){const O=X[z];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(O){Te.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Te.copy(O))}function Ve(O){Le.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Le.copy(O))}function ze(O,U){let L=f.get(U);L===void 0&&(L=new WeakMap,f.set(U,L));let k=L.get(O);k===void 0&&(k=n.getUniformBlockIndex(U,O.name),L.set(O,k))}function De(O,U){const k=f.get(U).get(O);u.get(U)!==k&&(n.uniformBlockBinding(U,k,O.__bindingPointIndex),u.set(U,k))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},z=null,X={},m={},_=new WeakMap,g=[],p=null,h=!1,E=null,y=null,b=null,C=null,N=null,D=null,j=null,x=new ut(0,0,0),w=0,Q=!1,oe=null,_e=null,F=null,V=null,W=null,Te.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Se,disable:ke,bindFramebuffer:He,drawBuffers:M,useProgram:I,setBlending:H,setMaterial:ce,setFlipSided:he,setCullFace:se,setLineWidth:ue,setPolygonOffset:ae,setScissorTest:be,activeTexture:S,bindTexture:v,unbindTexture:B,compressedTexImage2D:re,compressedTexImage3D:le,texImage2D:Me,texImage3D:Xe,updateUBOMapping:ze,uniformBlockBinding:De,texStorage2D:Ge,texStorage3D:Je,texSubImage2D:fe,texSubImage3D:Ae,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ce,scissor:Ne,viewport:Ve,reset:st}}function kA(n,e,t,i,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,v){return h?new OffscreenCanvas(S,v):xr("canvas")}function y(S,v,B,re){let le=1;if((S.width>re||S.height>re)&&(le=re/Math.max(S.width,S.height)),le<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const fe=v?xl:Math.floor,Ae=fe(le*S.width),ve=fe(le*S.height);g===void 0&&(g=E(Ae,ve));const Ce=B?E(Ae,ve):g;return Ce.width=Ae,Ce.height=ve,Ce.getContext("2d").drawImage(S,0,0,Ae,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Ae+"x"+ve+")."),Ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return Ru(S.width)&&Ru(S.height)}function C(S){return o?!1:S.wrapS!==Dn||S.wrapT!==Dn||S.minFilter!==tn&&S.minFilter!==En}function N(S,v){return S.generateMipmaps&&v&&S.minFilter!==tn&&S.minFilter!==En}function D(S){n.generateMipmap(S)}function j(S,v,B,re,le=!1){if(o===!1)return v;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let fe=v;if(v===n.RED&&(B===n.FLOAT&&(fe=n.R32F),B===n.HALF_FLOAT&&(fe=n.R16F),B===n.UNSIGNED_BYTE&&(fe=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(fe=n.R8UI),B===n.UNSIGNED_SHORT&&(fe=n.R16UI),B===n.UNSIGNED_INT&&(fe=n.R32UI),B===n.BYTE&&(fe=n.R8I),B===n.SHORT&&(fe=n.R16I),B===n.INT&&(fe=n.R32I)),v===n.RG&&(B===n.FLOAT&&(fe=n.RG32F),B===n.HALF_FLOAT&&(fe=n.RG16F),B===n.UNSIGNED_BYTE&&(fe=n.RG8)),v===n.RGBA){const Ae=le?Aa:ht.getTransfer(re);B===n.FLOAT&&(fe=n.RGBA32F),B===n.HALF_FLOAT&&(fe=n.RGBA16F),B===n.UNSIGNED_BYTE&&(fe=Ae===_t?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function x(S,v,B){return N(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==tn&&S.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function w(S){return S===tn||S===eu||S===ho?n.NEAREST:n.LINEAR}function Q(S){const v=S.target;v.removeEventListener("dispose",Q),_e(v),v.isVideoTexture&&_.delete(v)}function oe(S){const v=S.target;v.removeEventListener("dispose",oe),V(v)}function _e(S){const v=i.get(S);if(v.__webglInit===void 0)return;const B=S.source,re=p.get(B);if(re){const le=re[v.__cacheKey];le.usedTimes--,le.usedTimes===0&&F(S),Object.keys(re).length===0&&p.delete(B)}i.remove(S)}function F(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const B=S.source,re=p.get(B);delete re[v.__cacheKey],a.memory.textures--}function V(S){const v=S.texture,B=i.get(S),re=i.get(v);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(B.__webglFramebuffer[le]))for(let fe=0;fe<B.__webglFramebuffer[le].length;fe++)n.deleteFramebuffer(B.__webglFramebuffer[le][fe]);else n.deleteFramebuffer(B.__webglFramebuffer[le]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[le])}else{if(Array.isArray(B.__webglFramebuffer))for(let le=0;le<B.__webglFramebuffer.length;le++)n.deleteFramebuffer(B.__webglFramebuffer[le]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let le=0;le<B.__webglColorRenderbuffer.length;le++)B.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[le]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let le=0,fe=v.length;le<fe;le++){const Ae=i.get(v[le]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),a.memory.textures--),i.remove(v[le])}i.remove(v),i.remove(S)}let W=0;function Y(){W=0}function te(){const S=W;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),W+=1,S}function pe(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function de(S,v){const B=i.get(S);if(S.isVideoTexture&&ae(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const re=S.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(B,S,v);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function z(S,v){const B=i.get(S);if(S.version>0&&B.__version!==S.version){Se(B,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function X(S,v){const B=i.get(S);if(S.version>0&&B.__version!==S.version){Se(B,S,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function ge(S,v){const B=i.get(S);if(S.version>0&&B.__version!==S.version){ke(B,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const Ee={[_l]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},Te={[tn]:n.NEAREST,[eu]:n.NEAREST_MIPMAP_NEAREST,[ho]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[vy]:n.LINEAR_MIPMAP_NEAREST,[vr]:n.LINEAR_MIPMAP_LINEAR},Le={[Ly]:n.NEVER,[Oy]:n.ALWAYS,[Dy]:n.LESS,[Uy]:n.LEQUAL,[Iy]:n.EQUAL,[Ny]:n.GEQUAL,[Fy]:n.GREATER,[ky]:n.NOTEQUAL};function We(S,v,B){if(B?(n.texParameteri(S,n.TEXTURE_WRAP_S,Ee[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Ee[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Ee[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Te[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Te[v.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Dn||v.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,w(v.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==tn&&v.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===tn||v.minFilter!==ho&&v.minFilter!==vr||v.type===gi&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Mr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(S,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Be(S,v){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",Q));const re=v.source;let le=p.get(re);le===void 0&&(le={},p.set(re,le));const fe=pe(v);if(fe!==S.__cacheKey){le[fe]===void 0&&(le[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),le[fe].usedTimes++;const Ae=le[S.__cacheKey];Ae!==void 0&&(le[S.__cacheKey].usedTimes--,Ae.usedTimes===0&&F(v)),S.__cacheKey=fe,S.__webglTexture=le[fe].texture}return B}function Se(S,v,B){let re=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(re=n.TEXTURE_3D);const le=Be(S,v),fe=v.source;t.bindTexture(re,S.__webglTexture,n.TEXTURE0+B);const Ae=i.get(fe);if(fe.version!==Ae.__version||le===!0){t.activeTexture(n.TEXTURE0+B);const ve=ht.getPrimaries(ht.workingColorSpace),Ce=v.colorSpace===bn?null:ht.getPrimaries(v.colorSpace),Ge=v.colorSpace===bn||ve===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Je=C(v)&&b(v.image)===!1;let Me=y(v.image,Je,!1,u);Me=be(v,Me);const Xe=b(Me)||o,Ne=r.convert(v.format,v.colorSpace);let Ve=r.convert(v.type),ze=j(v.internalFormat,Ne,Ve,v.colorSpace,v.isVideoTexture);We(re,v,Xe);let De;const st=v.mipmaps,O=o&&v.isVideoTexture!==!0,U=Ae.__version===void 0||le===!0,L=x(v,Me,Xe);if(v.isDepthTexture)ze=n.DEPTH_COMPONENT,o?v.type===gi?ze=n.DEPTH_COMPONENT32F:v.type===_i?ze=n.DEPTH_COMPONENT24:v.type===Yi?ze=n.DEPTH24_STENCIL8:ze=n.DEPTH_COMPONENT16:v.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ji&&ze===n.DEPTH_COMPONENT&&v.type!==ec&&v.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=_i,Ve=r.convert(v.type)),v.format===Bs&&ze===n.DEPTH_COMPONENT&&(ze=n.DEPTH_STENCIL,v.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Yi,Ve=r.convert(v.type))),U&&(O?t.texStorage2D(n.TEXTURE_2D,1,ze,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,ze,Me.width,Me.height,0,Ne,Ve,null));else if(v.isDataTexture)if(st.length>0&&Xe){O&&U&&t.texStorage2D(n.TEXTURE_2D,L,ze,st[0].width,st[0].height);for(let k=0,K=st.length;k<K;k++)De=st[k],O?t.texSubImage2D(n.TEXTURE_2D,k,0,0,De.width,De.height,Ne,Ve,De.data):t.texImage2D(n.TEXTURE_2D,k,ze,De.width,De.height,0,Ne,Ve,De.data);v.generateMipmaps=!1}else O?(U&&t.texStorage2D(n.TEXTURE_2D,L,ze,Me.width,Me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,Ne,Ve,Me.data)):t.texImage2D(n.TEXTURE_2D,0,ze,Me.width,Me.height,0,Ne,Ve,Me.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){O&&U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,ze,st[0].width,st[0].height,Me.depth);for(let k=0,K=st.length;k<K;k++)De=st[k],v.format!==In?Ne!==null?O?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,De.width,De.height,Me.depth,Ne,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,ze,De.width,De.height,Me.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,De.width,De.height,Me.depth,Ne,Ve,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,ze,De.width,De.height,Me.depth,0,Ne,Ve,De.data)}else{O&&U&&t.texStorage2D(n.TEXTURE_2D,L,ze,st[0].width,st[0].height);for(let k=0,K=st.length;k<K;k++)De=st[k],v.format!==In?Ne!==null?O?t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,De.width,De.height,Ne,De.data):t.compressedTexImage2D(n.TEXTURE_2D,k,ze,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?t.texSubImage2D(n.TEXTURE_2D,k,0,0,De.width,De.height,Ne,Ve,De.data):t.texImage2D(n.TEXTURE_2D,k,ze,De.width,De.height,0,Ne,Ve,De.data)}else if(v.isDataArrayTexture)O?(U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,ze,Me.width,Me.height,Me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ne,Ve,Me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,Me.width,Me.height,Me.depth,0,Ne,Ve,Me.data);else if(v.isData3DTexture)O?(U&&t.texStorage3D(n.TEXTURE_3D,L,ze,Me.width,Me.height,Me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ne,Ve,Me.data)):t.texImage3D(n.TEXTURE_3D,0,ze,Me.width,Me.height,Me.depth,0,Ne,Ve,Me.data);else if(v.isFramebufferTexture){if(U)if(O)t.texStorage2D(n.TEXTURE_2D,L,ze,Me.width,Me.height);else{let k=Me.width,K=Me.height;for(let ye=0;ye<L;ye++)t.texImage2D(n.TEXTURE_2D,ye,ze,k,K,0,Ne,Ve,null),k>>=1,K>>=1}}else if(st.length>0&&Xe){O&&U&&t.texStorage2D(n.TEXTURE_2D,L,ze,st[0].width,st[0].height);for(let k=0,K=st.length;k<K;k++)De=st[k],O?t.texSubImage2D(n.TEXTURE_2D,k,0,0,Ne,Ve,De):t.texImage2D(n.TEXTURE_2D,k,ze,Ne,Ve,De);v.generateMipmaps=!1}else O?(U&&t.texStorage2D(n.TEXTURE_2D,L,ze,Me.width,Me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,Ve,Me)):t.texImage2D(n.TEXTURE_2D,0,ze,Ne,Ve,Me);N(v,Xe)&&D(re),Ae.__version=fe.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ke(S,v,B){if(v.image.length!==6)return;const re=Be(S,v),le=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+B);const fe=i.get(le);if(le.version!==fe.__version||re===!0){t.activeTexture(n.TEXTURE0+B);const Ae=ht.getPrimaries(ht.workingColorSpace),ve=v.colorSpace===bn?null:ht.getPrimaries(v.colorSpace),Ce=v.colorSpace===bn||Ae===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ge=v.isCompressedTexture||v.image[0].isCompressedTexture,Je=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let k=0;k<6;k++)!Ge&&!Je?Me[k]=y(v.image[k],!1,!0,c):Me[k]=Je?v.image[k].image:v.image[k],Me[k]=be(v,Me[k]);const Xe=Me[0],Ne=b(Xe)||o,Ve=r.convert(v.format,v.colorSpace),ze=r.convert(v.type),De=j(v.internalFormat,Ve,ze,v.colorSpace),st=o&&v.isVideoTexture!==!0,O=fe.__version===void 0||re===!0;let U=x(v,Xe,Ne);We(n.TEXTURE_CUBE_MAP,v,Ne);let L;if(Ge){st&&O&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,De,Xe.width,Xe.height);for(let k=0;k<6;k++){L=Me[k].mipmaps;for(let K=0;K<L.length;K++){const ye=L[K];v.format!==In?Ve!==null?st?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,K,0,0,ye.width,ye.height,Ve,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,K,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,K,0,0,ye.width,ye.height,Ve,ze,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,K,De,ye.width,ye.height,0,Ve,ze,ye.data)}}}else{L=v.mipmaps,st&&O&&(L.length>0&&U++,t.texStorage2D(n.TEXTURE_CUBE_MAP,U,De,Me[0].width,Me[0].height));for(let k=0;k<6;k++)if(Je){st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Me[k].width,Me[k].height,Ve,ze,Me[k].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,De,Me[k].width,Me[k].height,0,Ve,ze,Me[k].data);for(let K=0;K<L.length;K++){const Fe=L[K].image[k].image;st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,K+1,0,0,Fe.width,Fe.height,Ve,ze,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,K+1,De,Fe.width,Fe.height,0,Ve,ze,Fe.data)}}else{st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Ve,ze,Me[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,De,Ve,ze,Me[k]);for(let K=0;K<L.length;K++){const ye=L[K];st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,K+1,0,0,Ve,ze,ye.image[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,K+1,De,Ve,ze,ye.image[k])}}}N(v,Ne)&&D(n.TEXTURE_CUBE_MAP),fe.__version=le.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function He(S,v,B,re,le,fe){const Ae=r.convert(B.format,B.colorSpace),ve=r.convert(B.type),Ce=j(B.internalFormat,Ae,ve,B.colorSpace);if(!i.get(v).__hasExternalTextures){const Je=Math.max(1,v.width>>fe),Me=Math.max(1,v.height>>fe);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,fe,Ce,Je,Me,v.depth,0,Ae,ve,null):t.texImage2D(le,fe,Ce,Je,Me,0,Ae,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ue(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,le,i.get(B).__webglTexture,0,se(v)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,le,i.get(B).__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function M(S,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let re=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||ue(v)){const le=v.depthTexture;le&&le.isDepthTexture&&(le.type===gi?re=n.DEPTH_COMPONENT32F:le.type===_i&&(re=n.DEPTH_COMPONENT24));const fe=se(v);ue(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,re,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,re,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const re=se(v);B&&ue(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,v.width,v.height):ue(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const re=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let le=0;le<re.length;le++){const fe=re[le],Ae=r.convert(fe.format,fe.colorSpace),ve=r.convert(fe.type),Ce=j(fe.internalFormat,Ae,ve,fe.colorSpace),Ge=se(v);B&&ue(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Ce,v.width,v.height):ue(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Ce,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function I(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),de(v.depthTexture,0);const re=i.get(v.depthTexture).__webglTexture,le=se(v);if(v.depthTexture.format===ji)ue(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(v.depthTexture.format===Bs)ue(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function R(S){const v=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");I(v.__webglFramebuffer,S)}else if(B){v.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[re]),v.__webglDepthbuffer[re]=n.createRenderbuffer(),M(v.__webglDepthbuffer[re],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),M(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(S,v,B){const re=i.get(S);v!==void 0&&He(re.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&R(S)}function H(S){const v=S.texture,B=i.get(S),re=i.get(v);S.addEventListener("dispose",oe),S.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=v.version,a.memory.textures++);const le=S.isWebGLCubeRenderTarget===!0,fe=S.isWebGLMultipleRenderTargets===!0,Ae=b(S)||o;if(le){B.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(o&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ve]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)B.__webglFramebuffer[ve][Ce]=n.createFramebuffer()}else B.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ve=0;ve<v.mipmaps.length;ve++)B.__webglFramebuffer[ve]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(fe)if(s.drawBuffers){const ve=S.texture;for(let Ce=0,Ge=ve.length;Ce<Ge;Ce++){const Je=i.get(ve[Ce]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&ue(S)===!1){const ve=fe?v:[v];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Ge=ve[Ce];B.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Ce]);const Je=r.convert(Ge.format,Ge.colorSpace),Me=r.convert(Ge.type),Xe=j(Ge.internalFormat,Je,Me,Ge.colorSpace,S.isXRRenderTarget===!0),Ne=se(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,B.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),M(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),We(n.TEXTURE_CUBE_MAP,v,Ae);for(let ve=0;ve<6;ve++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)He(B.__webglFramebuffer[ve][Ce],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce);else He(B.__webglFramebuffer[ve],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);N(v,Ae)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const ve=S.texture;for(let Ce=0,Ge=ve.length;Ce<Ge;Ce++){const Je=ve[Ce],Me=i.get(Je);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),We(n.TEXTURE_2D,Je,Ae),He(B.__webglFramebuffer,S,Je,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),N(Je,Ae)&&D(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?ve=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,re.__webglTexture),We(ve,v,Ae),o&&v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)He(B.__webglFramebuffer[Ce],S,v,n.COLOR_ATTACHMENT0,ve,Ce);else He(B.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,ve,0);N(v,Ae)&&D(ve),t.unbindTexture()}S.depthBuffer&&R(S)}function ce(S){const v=b(S)||o,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let re=0,le=B.length;re<le;re++){const fe=B[re];if(N(fe,v)){const Ae=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(fe).__webglTexture;t.bindTexture(Ae,ve),D(Ae),t.unbindTexture()}}}function he(S){if(o&&S.samples>0&&ue(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,re=S.height;let le=n.COLOR_BUFFER_BIT;const fe=[],Ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(S),Ce=S.isWebGLMultipleRenderTargets===!0;if(Ce)for(let Ge=0;Ge<v.length;Ge++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ge=0;Ge<v.length;Ge++){fe.push(n.COLOR_ATTACHMENT0+Ge),S.depthBuffer&&fe.push(Ae);const Je=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Je===!1&&(S.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),Ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ge]),Je===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ae])),Ce){const Me=i.get(v[Ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,B,re,0,0,B,re,le,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Ge=0;Ge<v.length;Ge++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ge]);const Je=i.get(v[Ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function se(S){return Math.min(f,S.samples)}function ue(S){const v=i.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ae(S){const v=a.render.frame;_.get(S)!==v&&(_.set(S,v),S.update())}function be(S,v){const B=S.colorSpace,re=S.format,le=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===vl||B!==ri&&B!==bn&&(ht.getTransfer(B)===_t?o===!1?e.has("EXT_sRGB")===!0&&re===In?(S.format=vl,S.minFilter=En,S.generateMipmaps=!1):v=Eh.sRGBToLinear(v):(re!==In||le!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}this.allocateTextureUnit=te,this.resetTextureUnits=Y,this.setTexture2D=de,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=ge,this.rebindTextures=G,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=He,this.useMultisampledRTT=ue}function NA(n,e,t){const i=t.isWebGL2;function s(r,a=bn){let o;const l=ht.getTransfer(a);if(r===Ei)return n.UNSIGNED_BYTE;if(r===mh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===_h)return n.UNSIGNED_SHORT_5_5_5_1;if(r===My)return n.BYTE;if(r===xy)return n.SHORT;if(r===ec)return n.UNSIGNED_SHORT;if(r===ph)return n.INT;if(r===_i)return n.UNSIGNED_INT;if(r===gi)return n.FLOAT;if(r===Mr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Sy)return n.ALPHA;if(r===In)return n.RGBA;if(r===yy)return n.LUMINANCE;if(r===Ey)return n.LUMINANCE_ALPHA;if(r===ji)return n.DEPTH_COMPONENT;if(r===Bs)return n.DEPTH_STENCIL;if(r===vl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===by)return n.RED;if(r===gh)return n.RED_INTEGER;if(r===Ty)return n.RG;if(r===vh)return n.RG_INTEGER;if(r===Mh)return n.RGBA_INTEGER;if(r===po||r===mo||r===_o||r===go)if(l===_t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===po)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===po)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===go)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tu||r===nu||r===iu||r===su)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===tu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===iu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===su)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ay)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ru||r===au)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ru)return l===_t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===au)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ou||r===lu||r===cu||r===uu||r===fu||r===du||r===hu||r===pu||r===mu||r===_u||r===gu||r===vu||r===Mu||r===xu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ou)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===du)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_u)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xu)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vo||r===Su||r===yu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===vo)return l===_t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Su)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wy||r===Eu||r===bu||r===Tu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===vo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Eu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class OA extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oa extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BA={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class HA extends cn{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:ji,u!==ji&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ji&&(i=_i),i===void 0&&u===Bs&&(i=Yi),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zA extends $s{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,_=null;const g=t.getContextAttributes();let p=null,h=null;const E=[],y=[],b=new gn;b.layers.enable(1),b.viewport=new Mt;const C=new gn;C.layers.enable(2),C.viewport=new Mt;const N=[b,C],D=new OA;D.layers.enable(1),D.layers.enable(2);let j=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=E[z];return X===void 0&&(X=new Vo,E[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=E[z];return X===void 0&&(X=new Vo,E[z]=X),X.getGripSpace()},this.getHand=function(z){let X=E[z];return X===void 0&&(X=new Vo,E[z]=X),X.getHandSpace()};function w(z){const X=y.indexOf(z.inputSource);if(X===-1)return;const ge=E[X];ge!==void 0&&(ge.update(z.inputSource,z.frame,c||a),ge.dispatchEvent({type:z.type,data:z.inputSource}))}function Q(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",oe);for(let z=0;z<E.length;z++){const X=y[z];X!==null&&(y[z]=null,E[z].disconnect(X))}j=null,x=null,e.setRenderTarget(p),m=null,d=null,f=null,s=null,h=null,de.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",oe),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:m}),h=new es(m.framebufferWidth,m.framebufferHeight,{format:In,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,ge=null,Ee=null;g.depth&&(Ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=g.stencil?Bs:ji,ge=g.stencil?Yi:_i);const Te={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Te),s.updateRenderState({layers:[d]}),h=new es(d.textureWidth,d.textureHeight,{format:In,type:Ei,depthTexture:new HA(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Le=e.properties.get(h);Le.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function oe(z){for(let X=0;X<z.removed.length;X++){const ge=z.removed[X],Ee=y.indexOf(ge);Ee>=0&&(y[Ee]=null,E[Ee].disconnect(ge))}for(let X=0;X<z.added.length;X++){const ge=z.added[X];let Ee=y.indexOf(ge);if(Ee===-1){for(let Le=0;Le<E.length;Le++)if(Le>=y.length){y.push(ge),Ee=Le;break}else if(y[Le]===null){y[Le]=ge,Ee=Le;break}if(Ee===-1)break}const Te=E[Ee];Te&&Te.connect(ge)}}const _e=new $,F=new $;function V(z,X,ge){_e.setFromMatrixPosition(X.matrixWorld),F.setFromMatrixPosition(ge.matrixWorld);const Ee=_e.distanceTo(F),Te=X.projectionMatrix.elements,Le=ge.projectionMatrix.elements,We=Te[14]/(Te[10]-1),Be=Te[14]/(Te[10]+1),Se=(Te[9]+1)/Te[5],ke=(Te[9]-1)/Te[5],He=(Te[8]-1)/Te[0],M=(Le[8]+1)/Le[0],I=We*He,R=We*M,G=Ee/(-He+M),H=G*-He;X.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(H),z.translateZ(G),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const ce=We+G,he=Be+G,se=I-H,ue=R+(Ee-H),ae=Se*Be/he*ce,be=ke*Be/he*ce;z.projectionMatrix.makePerspective(se,ue,ae,be,ce,he),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function W(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;D.near=C.near=b.near=z.near,D.far=C.far=b.far=z.far,(j!==D.near||x!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),j=D.near,x=D.far);const X=z.parent,ge=D.cameras;W(D,X);for(let Ee=0;Ee<ge.length;Ee++)W(ge[Ee],X);ge.length===2?V(D,b,C):D.projectionMatrix.copy(b.projectionMatrix),Y(z,D,X)};function Y(z,X,ge){ge===null?z.matrix.copy(X.matrixWorld):(z.matrix.copy(ge.matrixWorld),z.matrix.invert(),z.matrix.multiply(X.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ml*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let te=null;function pe(z,X){if(u=X.getViewerPose(c||a),_=X,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let Ee=!1;ge.length!==D.cameras.length&&(D.cameras.length=0,Ee=!0);for(let Te=0;Te<ge.length;Te++){const Le=ge[Te];let We=null;if(m!==null)We=m.getViewport(Le);else{const Se=f.getViewSubImage(d,Le);We=Se.viewport,Te===0&&(e.setRenderTargetTextures(h,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(h))}let Be=N[Te];Be===void 0&&(Be=new gn,Be.layers.enable(Te),Be.viewport=new Mt,N[Te]=Be),Be.matrix.fromArray(Le.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Le.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(We.x,We.y,We.width,We.height),Te===0&&(D.matrix.copy(Be.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ee===!0&&D.cameras.push(Be)}}for(let ge=0;ge<E.length;ge++){const Ee=y[ge],Te=E[ge];Ee!==null&&Te!==void 0&&Te.update(Ee,X,c||a)}te&&te(z,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),_=null}const de=new Uh;de.setAnimationLoop(pe),this.setAnimationLoop=function(z){te=z},this.dispose=function(){}}}function GA(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Lh(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,E,y,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),g(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,E,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===ln&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===ln&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,E,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=y*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VA(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,y){const b=y.program;i.uniformBlockBinding(E,b)}function c(E,y){let b=s[E.id];b===void 0&&(_(E),b=u(E),s[E.id]=b,E.addEventListener("dispose",p));const C=y.program;i.updateUBOMapping(E,C);const N=e.render.frame;r[E.id]!==N&&(d(E),r[E.id]=N)}function u(E){const y=f();E.__bindingPointIndex=y;const b=n.createBuffer(),C=E.__size,N=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],b=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let N=0,D=b.length;N<D;N++){const j=b[N];if(m(j,N,C)===!0){const x=j.__offset,w=Array.isArray(j.value)?j.value:[j.value];let Q=0;for(let oe=0;oe<w.length;oe++){const _e=w[oe],F=g(_e);typeof _e=="number"?(j.__data[0]=_e,n.bufferSubData(n.UNIFORM_BUFFER,x+Q,j.__data)):_e.isMatrix3?(j.__data[0]=_e.elements[0],j.__data[1]=_e.elements[1],j.__data[2]=_e.elements[2],j.__data[3]=_e.elements[0],j.__data[4]=_e.elements[3],j.__data[5]=_e.elements[4],j.__data[6]=_e.elements[5],j.__data[7]=_e.elements[0],j.__data[8]=_e.elements[6],j.__data[9]=_e.elements[7],j.__data[10]=_e.elements[8],j.__data[11]=_e.elements[0]):(_e.toArray(j.__data,Q),Q+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,x,j.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,y,b){const C=E.value;if(b[y]===void 0){if(typeof C=="number")b[y]=C;else{const N=Array.isArray(C)?C:[C],D=[];for(let j=0;j<N.length;j++)D.push(N[j].clone());b[y]=D}return!0}else if(typeof C=="number"){if(b[y]!==C)return b[y]=C,!0}else{const N=Array.isArray(b[y])?b[y]:[b[y]],D=Array.isArray(C)?C:[C];for(let j=0;j<N.length;j++){const x=N[j];if(x.equals(D[j])===!1)return x.copy(D[j]),!0}}return!1}function _(E){const y=E.uniforms;let b=0;const C=16;let N=0;for(let D=0,j=y.length;D<j;D++){const x=y[D],w={boundary:0,storage:0},Q=Array.isArray(x.value)?x.value:[x.value];for(let oe=0,_e=Q.length;oe<_e;oe++){const F=Q[oe],V=g(F);w.boundary+=V.boundary,w.storage+=V.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=b,D>0){N=b%C;const oe=C-N;N!==0&&oe-w.boundary<0&&(b+=C-N,x.__offset=b)}b+=w.storage}return N=b%C,N>0&&(b+=C-N),E.__size=b,E.__cache={},this}function g(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Bh{constructor(e={}){const{canvas:t=Hy(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const y=this;let b=!1,C=0,N=0,D=null,j=-1,x=null;const w=new Mt,Q=new Mt;let oe=null;const _e=new ut(0);let F=0,V=t.width,W=t.height,Y=1,te=null,pe=null;const de=new Mt(0,0,V,W),z=new Mt(0,0,V,W);let X=!1;const ge=new sc;let Ee=!1,Te=!1,Le=null;const We=new Lt,Be=new ft,Se=new $,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return D===null?Y:1}let M=i;function I(T,q){for(let Z=0;Z<T.length;Z++){const ee=T[Z],ne=t.getContext(ee,q);if(ne!==null)return ne}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",U,!1),M===null){const q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&q.shift(),M=I(q,T),M===null)throw I(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&M instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let R,G,H,ce,he,se,ue,ae,be,S,v,B,re,le,fe,Ae,ve,Ce,Ge,Je,Me,Xe,Ne,Ve;function ze(){R=new Qb(M),G=new qb(M,R,e),R.init(G),Xe=new NA(M,R,G),H=new FA(M,R,G),ce=new nT(M),he=new SA,se=new kA(M,R,H,he,G,Xe,ce),ue=new Yb(y),ae=new Jb(y),be=new fE(M,G),Ne=new Wb(M,R,be,G),S=new eT(M,be,ce,Ne),v=new aT(M,S,be,ce),Ge=new rT(M,G,se),Ae=new Xb(he),B=new xA(y,ue,ae,R,G,Ne,Ae),re=new GA(y,he),le=new EA,fe=new RA(R,G),Ce=new Vb(y,ue,ae,H,v,d,l),ve=new UA(y,v,G),Ve=new VA(M,ce,G,H),Je=new $b(M,R,ce,G),Me=new tT(M,R,ce,G),ce.programs=B.programs,y.capabilities=G,y.extensions=R,y.properties=he,y.renderLists=le,y.shadowMap=ve,y.state=H,y.info=ce}ze();const De=new zA(y,M);this.xr=De,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const T=R.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=R.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(V,W,!1))},this.getSize=function(T){return T.set(V,W)},this.setSize=function(T,q,Z=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,W=q,t.width=Math.floor(T*Y),t.height=Math.floor(q*Y),Z===!0&&(t.style.width=T+"px",t.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(V*Y,W*Y).floor()},this.setDrawingBufferSize=function(T,q,Z){V=T,W=q,Y=Z,t.width=Math.floor(T*Z),t.height=Math.floor(q*Z),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(de)},this.setViewport=function(T,q,Z,ee){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,q,Z,ee),H.viewport(w.copy(de).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,q,Z,ee){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,q,Z,ee),H.scissor(Q.copy(z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){H.setScissorTest(X=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(T=!0,q=!0,Z=!0){let ee=0;if(T){let ne=!1;if(D!==null){const Ie=D.texture.format;ne=Ie===Mh||Ie===vh||Ie===gh}if(ne){const Ie=D.texture.type,Oe=Ie===Ei||Ie===_i||Ie===ec||Ie===Yi||Ie===mh||Ie===_h,$e=Ce.getClearColor(),je=Ce.getClearAlpha(),it=$e.r,Qe=$e.g,et=$e.b;Oe?(m[0]=it,m[1]=Qe,m[2]=et,m[3]=je,M.clearBufferuiv(M.COLOR,0,m)):(_[0]=it,_[1]=Qe,_[2]=et,_[3]=je,M.clearBufferiv(M.COLOR,0,_))}else ee|=M.COLOR_BUFFER_BIT}q&&(ee|=M.DEPTH_BUFFER_BIT),Z&&(ee|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",U,!1),le.dispose(),fe.dispose(),he.dispose(),ue.dispose(),ae.dispose(),v.dispose(),Ne.dispose(),Ve.dispose(),B.dispose(),De.dispose(),De.removeEventListener("sessionstart",Kt),De.removeEventListener("sessionend",ot),Le&&(Le.dispose(),Le=null),Dt.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=ce.autoReset,q=ve.enabled,Z=ve.autoUpdate,ee=ve.needsUpdate,ne=ve.type;ze(),ce.autoReset=T,ve.enabled=q,ve.autoUpdate=Z,ve.needsUpdate=ee,ve.type=ne}function U(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function L(T){const q=T.target;q.removeEventListener("dispose",L),k(q)}function k(T){K(T),he.remove(T)}function K(T){const q=he.get(T).programs;q!==void 0&&(q.forEach(function(Z){B.releaseProgram(Z)}),T.isShaderMaterial&&B.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,Z,ee,ne,Ie){q===null&&(q=ke);const Oe=ne.isMesh&&ne.matrixWorld.determinant()<0,$e=op(T,q,Z,ee,ne);H.setMaterial(ee,Oe);let je=Z.index,it=1;if(ee.wireframe===!0){if(je=S.getWireframeAttribute(Z),je===void 0)return;it=2}const Qe=Z.drawRange,et=Z.attributes.position;let yt=Qe.start*it,dn=(Qe.start+Qe.count)*it;Ie!==null&&(yt=Math.max(yt,Ie.start*it),dn=Math.min(dn,(Ie.start+Ie.count)*it)),je!==null?(yt=Math.max(yt,0),dn=Math.min(dn,je.count)):et!=null&&(yt=Math.max(yt,0),dn=Math.min(dn,et.count));const Nt=dn-yt;if(Nt<0||Nt===1/0)return;Ne.setup(ne,ee,$e,Z,je);let Xn,St=Je;if(je!==null&&(Xn=be.get(je),St=Me,St.setIndex(Xn)),ne.isMesh)ee.wireframe===!0?(H.setLineWidth(ee.wireframeLinewidth*He()),St.setMode(M.LINES)):St.setMode(M.TRIANGLES);else if(ne.isLine){let at=ee.linewidth;at===void 0&&(at=1),H.setLineWidth(at*He()),ne.isLineSegments?St.setMode(M.LINES):ne.isLineLoop?St.setMode(M.LINE_LOOP):St.setMode(M.LINE_STRIP)}else ne.isPoints?St.setMode(M.POINTS):ne.isSprite&&St.setMode(M.TRIANGLES);if(ne.isInstancedMesh)St.renderInstances(yt,Nt,ne.count);else if(Z.isInstancedBufferGeometry){const at=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,eo=Math.min(Z.instanceCount,at);St.renderInstances(yt,Nt,eo)}else St.render(yt,Nt)};function ye(T,q,Z){T.transparent===!0&&T.side===an&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,Lr(T,q,Z),T.side=Ai,T.needsUpdate=!0,Lr(T,q,Z),T.side=an):Lr(T,q,Z)}this.compile=function(T,q,Z=null){Z===null&&(Z=T),p=fe.get(Z),p.init(),E.push(p),Z.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),T!==Z&&T.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),p.setupLights(y._useLegacyLights);const ee=new Set;return T.traverse(function(ne){const Ie=ne.material;if(Ie)if(Array.isArray(Ie))for(let Oe=0;Oe<Ie.length;Oe++){const $e=Ie[Oe];ye($e,Z,ne),ee.add($e)}else ye(Ie,Z,ne),ee.add(Ie)}),E.pop(),p=null,ee},this.compileAsync=function(T,q,Z=null){const ee=this.compile(T,q,Z);return new Promise(ne=>{function Ie(){if(ee.forEach(function(Oe){he.get(Oe).currentProgram.isReady()&&ee.delete(Oe)}),ee.size===0){ne(T);return}setTimeout(Ie,10)}R.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Fe=null;function mt(T){Fe&&Fe(T)}function Kt(){Dt.stop()}function ot(){Dt.start()}const Dt=new Uh;Dt.setAnimationLoop(mt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(T){Fe=T,De.setAnimationLoop(T),T===null?Dt.stop():Dt.start()},De.addEventListener("sessionstart",Kt),De.addEventListener("sessionend",ot),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(q),q=De.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,q,D),p=fe.get(T,E.length),p.init(),E.push(p),We.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ge.setFromProjectionMatrix(We),Te=this.localClippingEnabled,Ee=Ae.init(this.clippingPlanes,Te),g=le.get(T,h.length),g.init(),h.push(g),On(T,q,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(te,pe),this.info.render.frame++,Ee===!0&&Ae.beginShadows();const Z=p.state.shadowsArray;if(ve.render(Z,T,q),Ee===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ce.render(g,T),p.setupLights(y._useLegacyLights),q.isArrayCamera){const ee=q.cameras;for(let ne=0,Ie=ee.length;ne<Ie;ne++){const Oe=ee[ne];cc(g,T,Oe,Oe.viewport)}}else cc(g,T,q);D!==null&&(se.updateMultisampleRenderTarget(D),se.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(y,T,q),Ne.resetDefaultState(),j=-1,x=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function On(T,q,Z,ee){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ge.intersectsSprite(T)){ee&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(We);const Oe=v.update(T),$e=T.material;$e.visible&&g.push(T,Oe,$e,Z,Se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ge.intersectsObject(T))){const Oe=v.update(T),$e=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Se.copy(Oe.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4(We)),Array.isArray($e)){const je=Oe.groups;for(let it=0,Qe=je.length;it<Qe;it++){const et=je[it],yt=$e[et.materialIndex];yt&&yt.visible&&g.push(T,Oe,yt,Z,Se.z,et)}}else $e.visible&&g.push(T,Oe,$e,Z,Se.z,null)}}const Ie=T.children;for(let Oe=0,$e=Ie.length;Oe<$e;Oe++)On(Ie[Oe],q,Z,ee)}function cc(T,q,Z,ee){const ne=T.opaque,Ie=T.transmissive,Oe=T.transparent;p.setupLightsView(Z),Ee===!0&&Ae.setGlobalState(y.clippingPlanes,Z),Ie.length>0&&ap(ne,Ie,q,Z),ee&&H.viewport(w.copy(ee)),ne.length>0&&Pr(ne,q,Z),Ie.length>0&&Pr(Ie,q,Z),Oe.length>0&&Pr(Oe,q,Z),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ap(T,q,Z,ee){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Ie=G.isWebGL2;Le===null&&(Le=new es(1,1,{generateMipmaps:!0,type:R.has("EXT_color_buffer_half_float")?Mr:Ei,minFilter:vr,samples:Ie?4:0})),y.getDrawingBufferSize(Be),Ie?Le.setSize(Be.x,Be.y):Le.setSize(xl(Be.x),xl(Be.y));const Oe=y.getRenderTarget();y.setRenderTarget(Le),y.getClearColor(_e),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear();const $e=y.toneMapping;y.toneMapping=yi,Pr(T,Z,ee),se.updateMultisampleRenderTarget(Le),se.updateRenderTargetMipmap(Le);let je=!1;for(let it=0,Qe=q.length;it<Qe;it++){const et=q[it],yt=et.object,dn=et.geometry,Nt=et.material,Xn=et.group;if(Nt.side===an&&yt.layers.test(ee.layers)){const St=Nt.side;Nt.side=ln,Nt.needsUpdate=!0,uc(yt,Z,ee,dn,Nt,Xn),Nt.side=St,Nt.needsUpdate=!0,je=!0}}je===!0&&(se.updateMultisampleRenderTarget(Le),se.updateRenderTargetMipmap(Le)),y.setRenderTarget(Oe),y.setClearColor(_e,F),y.toneMapping=$e}function Pr(T,q,Z){const ee=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,Ie=T.length;ne<Ie;ne++){const Oe=T[ne],$e=Oe.object,je=Oe.geometry,it=ee===null?Oe.material:ee,Qe=Oe.group;$e.layers.test(Z.layers)&&uc($e,q,Z,je,it,Qe)}}function uc(T,q,Z,ee,ne,Ie){T.onBeforeRender(y,q,Z,ee,ne,Ie),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ne.onBeforeRender(y,q,Z,ee,T,Ie),ne.transparent===!0&&ne.side===an&&ne.forceSinglePass===!1?(ne.side=ln,ne.needsUpdate=!0,y.renderBufferDirect(Z,q,ee,ne,T,Ie),ne.side=Ai,ne.needsUpdate=!0,y.renderBufferDirect(Z,q,ee,ne,T,Ie),ne.side=an):y.renderBufferDirect(Z,q,ee,ne,T,Ie),T.onAfterRender(y,q,Z,ee,ne,Ie)}function Lr(T,q,Z){q.isScene!==!0&&(q=ke);const ee=he.get(T),ne=p.state.lights,Ie=p.state.shadowsArray,Oe=ne.state.version,$e=B.getParameters(T,ne.state,Ie,q,Z),je=B.getProgramCacheKey($e);let it=ee.programs;ee.environment=T.isMeshStandardMaterial?q.environment:null,ee.fog=q.fog,ee.envMap=(T.isMeshStandardMaterial?ae:ue).get(T.envMap||ee.environment),it===void 0&&(T.addEventListener("dispose",L),it=new Map,ee.programs=it);let Qe=it.get(je);if(Qe!==void 0){if(ee.currentProgram===Qe&&ee.lightsStateVersion===Oe)return dc(T,$e),Qe}else $e.uniforms=B.getUniforms(T),T.onBuild(Z,$e,y),T.onBeforeCompile($e,y),Qe=B.acquireProgram($e,je),it.set(je,Qe),ee.uniforms=$e.uniforms;const et=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(et.clippingPlanes=Ae.uniform),dc(T,$e),ee.needsLights=cp(T),ee.lightsStateVersion=Oe,ee.needsLights&&(et.ambientLightColor.value=ne.state.ambient,et.lightProbe.value=ne.state.probe,et.directionalLights.value=ne.state.directional,et.directionalLightShadows.value=ne.state.directionalShadow,et.spotLights.value=ne.state.spot,et.spotLightShadows.value=ne.state.spotShadow,et.rectAreaLights.value=ne.state.rectArea,et.ltc_1.value=ne.state.rectAreaLTC1,et.ltc_2.value=ne.state.rectAreaLTC2,et.pointLights.value=ne.state.point,et.pointLightShadows.value=ne.state.pointShadow,et.hemisphereLights.value=ne.state.hemi,et.directionalShadowMap.value=ne.state.directionalShadowMap,et.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,et.spotShadowMap.value=ne.state.spotShadowMap,et.spotLightMatrix.value=ne.state.spotLightMatrix,et.spotLightMap.value=ne.state.spotLightMap,et.pointShadowMap.value=ne.state.pointShadowMap,et.pointShadowMatrix.value=ne.state.pointShadowMatrix),ee.currentProgram=Qe,ee.uniformsList=null,Qe}function fc(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=_a.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function dc(T,q){const Z=he.get(T);Z.outputColorSpace=q.outputColorSpace,Z.instancing=q.instancing,Z.instancingColor=q.instancingColor,Z.skinning=q.skinning,Z.morphTargets=q.morphTargets,Z.morphNormals=q.morphNormals,Z.morphColors=q.morphColors,Z.morphTargetsCount=q.morphTargetsCount,Z.numClippingPlanes=q.numClippingPlanes,Z.numIntersection=q.numClipIntersection,Z.vertexAlphas=q.vertexAlphas,Z.vertexTangents=q.vertexTangents,Z.toneMapping=q.toneMapping}function op(T,q,Z,ee,ne){q.isScene!==!0&&(q=ke),se.resetTextureUnits();const Ie=q.fog,Oe=ee.isMeshStandardMaterial?q.environment:null,$e=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ri,je=(ee.isMeshStandardMaterial?ae:ue).get(ee.envMap||Oe),it=ee.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qe=!!Z.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),et=!!Z.morphAttributes.position,yt=!!Z.morphAttributes.normal,dn=!!Z.morphAttributes.color;let Nt=yi;ee.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Nt=y.toneMapping);const Xn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=Xn!==void 0?Xn.length:0,at=he.get(ee),eo=p.state.lights;if(Ee===!0&&(Te===!0||T!==x)){const hn=T===x&&ee.id===j;Ae.setState(ee,T,hn)}let Ct=!1;ee.version===at.__version?(at.needsLights&&at.lightsStateVersion!==eo.state.version||at.outputColorSpace!==$e||ne.isInstancedMesh&&at.instancing===!1||!ne.isInstancedMesh&&at.instancing===!0||ne.isSkinnedMesh&&at.skinning===!1||!ne.isSkinnedMesh&&at.skinning===!0||ne.isInstancedMesh&&at.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&at.instancingColor===!1&&ne.instanceColor!==null||at.envMap!==je||ee.fog===!0&&at.fog!==Ie||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Ae.numPlanes||at.numIntersection!==Ae.numIntersection)||at.vertexAlphas!==it||at.vertexTangents!==Qe||at.morphTargets!==et||at.morphNormals!==yt||at.morphColors!==dn||at.toneMapping!==Nt||G.isWebGL2===!0&&at.morphTargetsCount!==St)&&(Ct=!0):(Ct=!0,at.__version=ee.version);let Ri=at.currentProgram;Ct===!0&&(Ri=Lr(ee,q,ne));let hc=!1,Xs=!1,to=!1;const Zt=Ri.getUniforms(),Pi=at.uniforms;if(H.useProgram(Ri.program)&&(hc=!0,Xs=!0,to=!0),ee.id!==j&&(j=ee.id,Xs=!0),hc||x!==T){Zt.setValue(M,"projectionMatrix",T.projectionMatrix),Zt.setValue(M,"viewMatrix",T.matrixWorldInverse);const hn=Zt.map.cameraPosition;hn!==void 0&&hn.setValue(M,Se.setFromMatrixPosition(T.matrixWorld)),G.logarithmicDepthBuffer&&Zt.setValue(M,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Zt.setValue(M,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Xs=!0,to=!0)}if(ne.isSkinnedMesh){Zt.setOptional(M,ne,"bindMatrix"),Zt.setOptional(M,ne,"bindMatrixInverse");const hn=ne.skeleton;hn&&(G.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Zt.setValue(M,"boneTexture",hn.boneTexture,se),Zt.setValue(M,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const no=Z.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0&&G.isWebGL2===!0)&&Ge.update(ne,Z,Ri),(Xs||at.receiveShadow!==ne.receiveShadow)&&(at.receiveShadow=ne.receiveShadow,Zt.setValue(M,"receiveShadow",ne.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Pi.envMap.value=je,Pi.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Xs&&(Zt.setValue(M,"toneMappingExposure",y.toneMappingExposure),at.needsLights&&lp(Pi,to),Ie&&ee.fog===!0&&re.refreshFogUniforms(Pi,Ie),re.refreshMaterialUniforms(Pi,ee,Y,W,Le),_a.upload(M,fc(at),Pi,se)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(_a.upload(M,fc(at),Pi,se),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Zt.setValue(M,"center",ne.center),Zt.setValue(M,"modelViewMatrix",ne.modelViewMatrix),Zt.setValue(M,"normalMatrix",ne.normalMatrix),Zt.setValue(M,"modelMatrix",ne.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const hn=ee.uniformsGroups;for(let io=0,up=hn.length;io<up;io++)if(G.isWebGL2){const pc=hn[io];Ve.update(pc,Ri),Ve.bind(pc,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function lp(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function cp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,q,Z){he.get(T.texture).__webglTexture=q,he.get(T.depthTexture).__webglTexture=Z;const ee=he.get(T);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=Z===void 0,ee.__autoAllocateDepthBuffer||R.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,q){const Z=he.get(T);Z.__webglFramebuffer=q,Z.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,Z=0){D=T,C=q,N=Z;let ee=!0,ne=null,Ie=!1,Oe=!1;if(T){const je=he.get(T);je.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(M.FRAMEBUFFER,null),ee=!1):je.__webglFramebuffer===void 0?se.setupRenderTarget(T):je.__hasExternalTextures&&se.rebindTextures(T,he.get(T.texture).__webglTexture,he.get(T.depthTexture).__webglTexture);const it=T.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Oe=!0);const Qe=he.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?ne=Qe[q][Z]:ne=Qe[q],Ie=!0):G.isWebGL2&&T.samples>0&&se.useMultisampledRTT(T)===!1?ne=he.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[Z]:ne=Qe,w.copy(T.viewport),Q.copy(T.scissor),oe=T.scissorTest}else w.copy(de).multiplyScalar(Y).floor(),Q.copy(z).multiplyScalar(Y).floor(),oe=X;if(H.bindFramebuffer(M.FRAMEBUFFER,ne)&&G.drawBuffers&&ee&&H.drawBuffers(T,ne),H.viewport(w),H.scissor(Q),H.setScissorTest(oe),Ie){const je=he.get(T.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+q,je.__webglTexture,Z)}else if(Oe){const je=he.get(T.texture),it=q||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,je.__webglTexture,Z||0,it)}j=-1},this.readRenderTargetPixels=function(T,q,Z,ee,ne,Ie,Oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=he.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&($e=$e[Oe]),$e){H.bindFramebuffer(M.FRAMEBUFFER,$e);try{const je=T.texture,it=je.format,Qe=je.type;if(it!==In&&Xe.convert(it)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=Qe===Mr&&(R.has("EXT_color_buffer_half_float")||G.isWebGL2&&R.has("EXT_color_buffer_float"));if(Qe!==Ei&&Xe.convert(Qe)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===gi&&(G.isWebGL2||R.has("OES_texture_float")||R.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-ee&&Z>=0&&Z<=T.height-ne&&M.readPixels(q,Z,ee,ne,Xe.convert(it),Xe.convert(Qe),Ie)}finally{const je=D!==null?he.get(D).__webglFramebuffer:null;H.bindFramebuffer(M.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(T,q,Z=0){const ee=Math.pow(2,-Z),ne=Math.floor(q.image.width*ee),Ie=Math.floor(q.image.height*ee);se.setTexture2D(q,0),M.copyTexSubImage2D(M.TEXTURE_2D,Z,0,0,T.x,T.y,ne,Ie),H.unbindTexture()},this.copyTextureToTexture=function(T,q,Z,ee=0){const ne=q.image.width,Ie=q.image.height,Oe=Xe.convert(Z.format),$e=Xe.convert(Z.type);se.setTexture2D(Z,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,Z.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,Z.unpackAlignment),q.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,ee,T.x,T.y,ne,Ie,Oe,$e,q.image.data):q.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,ee,T.x,T.y,q.mipmaps[0].width,q.mipmaps[0].height,Oe,q.mipmaps[0].data):M.texSubImage2D(M.TEXTURE_2D,ee,T.x,T.y,Oe,$e,q.image),ee===0&&Z.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(T,q,Z,ee,ne=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=T.max.x-T.min.x+1,Oe=T.max.y-T.min.y+1,$e=T.max.z-T.min.z+1,je=Xe.convert(ee.format),it=Xe.convert(ee.type);let Qe;if(ee.isData3DTexture)se.setTexture3D(ee,0),Qe=M.TEXTURE_3D;else if(ee.isDataArrayTexture)se.setTexture2DArray(ee,0),Qe=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,ee.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,ee.unpackAlignment);const et=M.getParameter(M.UNPACK_ROW_LENGTH),yt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),dn=M.getParameter(M.UNPACK_SKIP_PIXELS),Nt=M.getParameter(M.UNPACK_SKIP_ROWS),Xn=M.getParameter(M.UNPACK_SKIP_IMAGES),St=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,St.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,St.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,T.min.x),M.pixelStorei(M.UNPACK_SKIP_ROWS,T.min.y),M.pixelStorei(M.UNPACK_SKIP_IMAGES,T.min.z),Z.isDataTexture||Z.isData3DTexture?M.texSubImage3D(Qe,ne,q.x,q.y,q.z,Ie,Oe,$e,je,it,St.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),M.compressedTexSubImage3D(Qe,ne,q.x,q.y,q.z,Ie,Oe,$e,je,St.data)):M.texSubImage3D(Qe,ne,q.x,q.y,q.z,Ie,Oe,$e,je,it,St),M.pixelStorei(M.UNPACK_ROW_LENGTH,et),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,yt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,dn),M.pixelStorei(M.UNPACK_SKIP_ROWS,Nt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Xn),ne===0&&ee.generateMipmaps&&M.generateMipmap(Qe),H.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?se.setTextureCube(T,0):T.isData3DTexture?se.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?se.setTexture2DArray(T,0):se.setTexture2D(T,0),H.unbindTexture()},this.resetState=function(){C=0,N=0,D=null,H.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tc?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===ja?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?Ki:xh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ki?Gt:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class WA extends Bh{}WA.prototype.isWebGL1Renderer=!0;class $A extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class tr extends wr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const mf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qA{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const XA=new qA;class ac{constructor(e){this.manager=e!==void 0?e:XA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ac.DEFAULT_MATERIAL_NAME="__DEFAULT";class YA extends ac{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mf.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=xr("img");function l(){u(),mf.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class jA extends ac{constructor(e){super(e)}load(e,t,i,s){const r=new cn,a=new YA(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class KA extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wo=new Lt,_f=new $,gf=new $;class ZA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_f.setFromMatrixPosition(e.matrixWorld),t.position.copy(_f),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vf=new Lt,nr=new $,$o=new $;class JA extends ZA{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),i.position.copy(nr),$o.copy(i.position),$o.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($o),i.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),vf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}}class QA extends KA{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new JA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mf{constructor(e,t,i=0,s=1/0){this.ray=new Ah(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return yl(e,this,i,t),i.sort(xf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)yl(e[s],this,i,t);return i.sort(xf),i}}function xf(n,e){return n.distance-e.distance}function yl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)yl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);const ew="/app2/icon/close.svg",tw=["src"],nw=qe({__name:"IconClose",setup(n){return(e,t)=>(ie(),me("img",{class:"Icon",src:J(ew),alt:"Close"},null,8,tw))}}),iw=Ze(nw,[["__scopeId","data-v-e1b07c4f"]]),sw="/app2/icon/message1.svg",rw=is("log",{state:()=>({GENERAL:[],BATTLE:[]})}),aw={class:"actionLog"},ow={class:"logWindow"},lw={class:"logTab"},cw=["onClick"],uw={key:0,class:"logList",density:"compact"},fw=["src"],dw=qe({__name:"ActionLog",setup(n,{expose:e}){const t=rw(),i=qn(),s=xe(!0),r=[A.strLog1,A.strLog2],a=xe(),o=d=>{a.value=d};function l(d,m){m==0?t.GENERAL.push(d):t.BATTLE.push(d),Ws(()=>{f()})}function c(){s.value=!0}function u(){s.value=!1}function f(){const d=document.querySelector(".logList");d&&(d.scrollTop=d.scrollHeight)}return ns(()=>{a.value=i.process==A.processBattle?A.strLog2:A.strLog1,f()}),e({addLog:l}),(d,m)=>(ie(),me("div",aw,[Et(P("div",ow,[P("ul",lw,[(ie(),me(dt,null,jt(r,_=>P("li",{onClick:g=>o(_),class:Ht([{"selected-tab":_==a.value},"tabItem"])},Re(_),11,cw)),64))]),Pe(iw,{class:"IconClose",onClick:m[0]||(m[0]=_=>u())}),a.value?(ie(),me("ul",uw,[(ie(!0),me(dt,null,jt(J(t)[a.value],(_,g)=>(ie(),me("li",{key:g,class:"logMessage"},Re(_),1))),128))])):Ke("",!0)],512),[[Tt,s.value]]),Et(P("img",{class:"iconLog",src:J(sw),alt:"Log",onClick:m[1]||(m[1]=_=>c())},null,8,fw),[[Tt,!s.value]])]))}}),Hh=Ze(dw,[["__scopeId","data-v-98f61e70"]]),la="/app2/img/dungeon/wall/forest1.jpg",hw="/app2/img/dungeon/wall/mable-black-p.jpg",pw="/app2/img/dungeon/wall/wood-deck-02.jpg",mw="/app2/img/dungeon/wall/stone-tile02-p.jpg",_w="/app2/img/dungeon/wall/brick1.jpg",gw="/app2/img/dungeon/wall/tesukiwashi06.jpg",vw="/app2/img/dungeon/floor/forest1.jpg",Mw="/app2/img/dungeon/floor/Wonder-Marble.jpg",xw="/app2/img/dungeon/floor/wood-deck-03.jpg",Sw="/app2/img/dungeon/floor/rockland3.jpg",yw="/app2/img/dungeon/floor/rockland2.jpg",Ew="/app2/img/dungeon/floor/tatami02.jpg",bw="/app2/img/dungeon/door/leftdoor1.jpg",Tw="/app2/img/dungeon/door/rightdoor1.jpg",zh=is("position",{state:()=>({playerPosition:new $})}),Aw={key:0,class:"crossKey"},ww=qe({__name:"Dungeon",setup(n){new Array(la,hw,pw,mw,_w,gw),new Array(la,Mw,xw,Sw,yw,Ew);const e=qn(),t=zh(),i=Ci(),s=Er(),r=xe(null);let a=new $A,o=new gn(75,window.innerWidth/window.innerHeight,.1,1e3),l=new Bh,c,u=new $,f=0,d=0,m,_,g,p=[],h;ns(()=>{UM(),y(),b(),C(),window.addEventListener("keydown",j),window.addEventListener("click",D),E(),Q()});const E=function(){requestAnimationFrame(E),l.render(a,o)};function y(){var V;l.setSize(window.innerWidth,window.innerHeight),(V=r.value)==null||V.appendChild(l.domElement),t.playerPosition=new $(A.BlockSize*ba.X,5,A.BlockSize*ba.Y),u.copy(t.playerPosition),o.position.copy(t.playerPosition),_e(A.logEnterDungeon);const F={point:16514559};c=new QA(F.point,12,100,1),c.position.copy(t.playerPosition),a.add(c)}function b(){switch(e.whichDungeon){case A.nameDungeon1:m=la,_=vw,g=la,e.musicDungeon=A.mscDungeon1;break}s.playBgm(e.musicDungeon)}function C(){const F=new jA,V=new $i(A.BlockSize,A.BlockHeight),W=F.load(m),Y=new tr({map:W,side:an,bumpMap:W,bumpScale:.2}),te=new $i(A.BlockSize/2,A.BlockHeight/1.5),pe=F.load(bw),de=F.load(Tw),z=new tr({map:pe,side:an,bumpMap:pe,bumpScale:.2}),X=new tr({map:de,side:an,bumpMap:de,bumpScale:.2}),ge=new $i(A.BlockSize,A.BlockHeight/3),Ee=new $i(A.BlockSize,A.BlockSize),Te=F.load(_),Le=new tr({map:Te,side:an,bumpMap:Te,bumpScale:.2}),We=F.load(g),Be=new tr({map:We,side:an,bumpMap:We,bumpScale:.2});for(let Se=0;Se<pt.length;Se++)for(let ke=0;ke<pt[Se].length;ke++)if(pt[Se][ke]==A.MapRoom||pt[Se][ke]==A.MapRoad){const He=new zt(Ee,Le);He.position.set(A.BlockSize*ke,0,A.BlockSize*Se),He.rotation.x=90*Math.PI/180,a.add(He);const M=new zt(Ee,Be);if(M.position.set(A.BlockSize*ke,A.BlockHeight,A.BlockSize*Se),M.rotation.x=90*Math.PI/180,a.add(M),ti(Se-1,ke)){const H=new zt(V,Y);H.position.set(A.BlockSize*ke,A.BlockHeight/2,A.BlockSize*(Se-.5)),a.add(H)}if(ti(Se+1,ke)){const H=new zt(V,Y);H.position.set(A.BlockSize*ke,A.BlockHeight/2,A.BlockSize*(Se+.5)),a.add(H)}if(ti(Se,ke-1)){const H=new zt(V,Y);H.position.set(A.BlockSize*(ke-.5),A.BlockHeight/2,A.BlockSize*Se),H.rotation.y=90*Math.PI/180,a.add(H)}if(ti(Se,ke+1)){const H=new zt(V,Y);H.position.set(A.BlockSize*(ke+.5),A.BlockHeight/2,A.BlockSize*Se),H.rotation.y=90*Math.PI/180,a.add(H)}const I=new zt(te,z),R=new zt(te,X),G=new zt(ge,Y);switch(rr[Se][ke]){case A.SetDoorUp:I.position.set(A.BlockSize*ke-A.BlockSize/4,A.BlockHeight/3,A.BlockSize*(Se-.5)),a.add(I),R.position.set(A.BlockSize*ke+A.BlockSize/4,A.BlockHeight/3,A.BlockSize*(Se-.5)),a.add(R),N(I,R),G.position.set(A.BlockSize*ke,A.BlockHeight/1.2,A.BlockSize*(Se-.5)),a.add(G);break;case A.SetDoorUnder:I.position.set(A.BlockSize*ke-A.BlockSize/4,A.BlockHeight/3,A.BlockSize*(Se+.5)),a.add(I),R.position.set(A.BlockSize*ke+A.BlockSize/4,A.BlockHeight/3,A.BlockSize*(Se+.5)),a.add(R),N(I,R),G.position.set(A.BlockSize*ke,A.BlockHeight/1.2,A.BlockSize*(Se+.5)),a.add(G);break;case A.SetDoorLeft:I.position.set(A.BlockSize*(ke-.5),A.BlockHeight/3,A.BlockSize*Se+A.BlockSize/4),I.rotation.y=90*Math.PI/180,a.add(I),R.position.set(A.BlockSize*(ke-.5),A.BlockHeight/3,A.BlockSize*Se-A.BlockSize/4),R.rotation.y=90*Math.PI/180,a.add(R),N(I,R),G.position.set(A.BlockSize*(ke-.5),A.BlockHeight/1.2,A.BlockSize*Se),G.rotation.y=90*Math.PI/180,a.add(G);break;case A.SetDoorRight:I.position.set(A.BlockSize*(ke+.5),A.BlockHeight/3,A.BlockSize*Se+A.BlockSize/4),I.rotation.y=90*Math.PI/180,a.add(I),R.position.set(A.BlockSize*(ke+.5),A.BlockHeight/3,A.BlockSize*Se-A.BlockSize/4),R.rotation.y=90*Math.PI/180,a.add(R),N(I,R),G.position.set(A.BlockSize*(ke+.5),A.BlockHeight/1.2,A.BlockSize*Se),G.rotation.y=90*Math.PI/180,a.add(G);break}}}function N(F,V){p.push({id:h,leftDoor:F,rightDoor:V,isOpen:!1}),h+=1}const D=F=>{if(e.processDungeon==A.processBattle)return;const V=new Mf,W=new ft;W.x=F.clientX/window.innerWidth*2-1,W.y=-(F.clientY/window.innerHeight)*2+1,V.setFromCamera(W,o);const Y=V.intersectObjects(p.flatMap(te=>[te.leftDoor,te.rightDoor]));if(Y.length>0){const te=p.find(pe=>pe.leftDoor===Y[0].object||pe.rightDoor===Y[0].object);te&&(te.isOpen||(te.leftDoor.translateOnAxis(new $(-1,0,0),A.BlockSize/4),te.rightDoor.translateOnAxis(new $(1,0,0),A.BlockSize/4),te.leftDoor.rotateY(-Math.PI/2.1),te.rightDoor.rotateY(Math.PI/2.1),te.leftDoor.translateOnAxis(new $(1,0,0),A.BlockSize/4),te.rightDoor.translateOnAxis(new $(-1,0,0),A.BlockSize/4),te.isOpen=!0))}},j=F=>{switch(F.key){case"a":case"A":x(A.TurnLeft);break;case"d":case"D":x(A.TurnRight);break;default:x(F.key)}};function x(F){if(console.log("playerMove",F),i.party||i.character||e.processDungeon==A.processBattle||!o)return;const V=new $;o.getWorldDirection(V);let W=t.playerPosition.clone();switch(F){case A.ArrowUp:W.add(V.multiplyScalar(A.BlockSize)),Y();break;case A.ArrowDown:W.sub(V.multiplyScalar(A.BlockSize)),Y();break;case A.ArrowLeft:W.x+=V.z*A.BlockSize,W.z-=V.x*A.BlockSize,Y();break;case A.ArrowRight:W.x-=V.z*A.BlockSize,W.z+=V.x*A.BlockSize,Y();break;case A.TurnLeft:f+=Math.PI/2;break;case A.TurnRight:f-=Math.PI/2;break;default:return}if(W==t.playerPosition)return;function Y(){W.x=Math.round(W.x/A.BlockSize)*A.BlockSize,W.z=Math.round(W.z/A.BlockSize)*A.BlockSize}let te=Math.floor((W.x+5)/A.BlockSize),pe=Math.floor((W.z+5)/A.BlockSize);if(!ti(pe,te)){const de=new Mf,z=W.clone().sub(t.playerPosition).normalize();de.set(t.playerPosition,z);const X=de.intersectObjects(p.flatMap(ge=>[ge.leftDoor,ge.rightDoor]));if(X.length>0){const ge=p.find(Ee=>Ee.leftDoor===X[0].object||Ee.rightDoor===X[0].object);if(ge&&!ge.isOpen&&X[0].distance<=A.BlockSize)return}t.playerPosition.copy(W),u.copy(W),d+=en(A.encountMin,A.encountMax),d>=A.encountLimit&&(w(),d=0)}}function w(){_e(A.logMonsterEncounter),i.map=!1,e.processDungeon=A.processBattle}const Q=()=>{o.position.equals(u)||(o.position.lerp(u,.05),c.position.copy(u)),o.rotation.y!==f&&(o.rotation.y+=(f-o.rotation.y)*.1),requestAnimationFrame(Q)},oe=xe(null),_e=F=>{oe.value&&oe.value.addLog(F,0)};return(F,V)=>(ie(),me(dt,null,[P("div",{ref_key:"dungeon",ref:r},null,512),J(e).processDungeon==J(A).processSearch&&!J(i).party&&!J(i).character?(ie(),me("div",Aw,[P("div",{class:"upKey",onClick:V[0]||(V[0]=W=>x(J(A).ArrowUp))}),P("div",{class:"downKey",onClick:V[1]||(V[1]=W=>x(J(A).ArrowDown))}),P("div",{class:"leftKey",onClick:V[2]||(V[2]=W=>x(J(A).TurnLeft))}),P("div",{class:"rightKey",onClick:V[3]||(V[3]=W=>x(J(A).TurnRight))}),Pe(Hh,{ref_key:"actionLog",ref:oe,class:"actionLog"},null,512)])):Ke("",!0)],64))}}),Cw=Ze(ww,[["__scopeId","data-v-0c911276"]]),Rw="/app2/img/flame/flame032401.png",Pw="/app2/img/flame/flame032402.png",Lw={class:"TurnOrder"},Dw=["src"],Iw=qe({__name:"TurnOrder",props:{turnOrder:Array,numOrder:Number},setup(n){const e=i=>i instanceof on?Rw:Pw,t=i=>i instanceof on?i.faceGraphicUrl:i.GraphicUrl;return(i,s)=>(ie(),me("div",Lw,[(ie(!0),me(dt,null,jt(n.turnOrder,(r,a)=>Et((ie(),me("div",{key:a,class:Ht(["turnOrderFlame",{currentOrder:a==n.numOrder}]),style:Rn({backgroundImage:"url("+e(r)+")"})},[P("img",{src:t(r),alt:"",class:"turnOrderImage"},null,8,Dw)],6)),[[Tt,r.nowHP>0]])),128))]))}}),Uw=Ze(Iw,[["__scopeId","data-v-4bc464c4"]]),oc=n=>(kn("data-v-35b7f0f8"),n=n(),Nn(),n),Fw=oc(()=>P("div",{class:"result"},"RESULT",-1)),kw={class:"resultFlame"},Nw={class:"expGoldLine"},Ow={class:"expItem"},Bw=oc(()=>P("span",{class:"itemKinds"},"GET EXP",-1)),Hw={class:"itemValue"},zw={class:"goldItem"},Gw=oc(()=>P("span",{class:"itemKinds"},"GET GOLD",-1)),Vw={class:"itemValue"},Ww={class:"character"},$w={class:"characterFlame"},qw=["src"],Xw={class:"rightFlame"},Yw={class:"level"},jw={class:"progress-bar"},Kw=qe({__name:"BattleResult",props:{getExp:{type:Number},getGold:{type:Number}},setup(n){const e=ss(),t=Ci(),i=qn(),s=Er();function r(){t.map=!0,i.processDungeon=A.processSearch,s.playBgm(i.musicDungeon)}return(a,o)=>(ie(),me("div",{class:"battleResult",onClick:o[0]||(o[0]=l=>r())},[Fw,P("div",kw,[P("div",Nw,[P("span",Ow,[Bw,P("span",Hw,Re(n.getExp),1)]),P("span",zw,[Gw,P("span",Vw,Re(n.getGold),1)])]),(ie(!0),me(dt,null,jt(J(e).characters,l=>(ie(),me("div",Ww,[P("div",$w,[P("img",{class:"face",src:l.faceGraphicUrl},null,8,qw),P("div",Xw,[P("div",Yw,"LV "+Re(l.LV),1),P("span",jw,[Pe(sh,{exp:l.exp,next:l.nextLvExp},null,8,["exp","next"])])])])]))),256))])]))}}),Zw=Ze(Kw,[["__scopeId","data-v-35b7f0f8"]]),Jw={class:"CurrentUI"},Qw=["onClick","onMouseover"],eC=["src"],tC=["src"],nC={class:"progress-bar-hp"},iC={class:"progress-bar-mp"},sC=qe({__name:"Current",props:{currentCharacter:{type:on},targetCharacter:{type:Array},showCharacterEffect:{type:Array},toCharacterEffect:{type:Array,default:()=>[]},toCharacterEffectType:{type:String},showCharacterAnime:{type:Array},toCharacterAnime:{type:[String,null],default:null},selectionMode:{type:String}},emits:["selectCharacter"],setup(n,{emit:e}){const t=n,i=ss();function s(l){var c;t.selectionMode=="oneFriend"&&((c=t.targetCharacter)!=null&&c.includes(l)||o("over",l))}function r(l){var c;t.selectionMode=="myself"?o("click"):t.selectionMode=="oneFriend"?(c=t.targetCharacter)!=null&&c.includes(l)?o("click",l):o("over",l):t.selectionMode=="allFriends"&&o("click")}const a=e,o=(l,c=null)=>{a("selectCharacter",l,c)};return wt(()=>t.showCharacterEffect,()=>{console.log("showCharacterEffect",t.showCharacterEffect)}),wt(()=>t.toCharacterEffect,()=>{console.log("toCharacterEffect",t.toCharacterEffect)}),wt(()=>t.toCharacterEffectType,()=>{console.log("toCharacterEffectType",t.toCharacterEffectType)}),wt(()=>t.selectionMode,()=>{console.log("selectionMode",t.selectionMode)}),(l,c)=>(ie(),me("div",Jw,[(ie(!0),me(dt,null,jt(J(i).characters,(u,f)=>{var d;return ie(),me("div",{class:Ht(["character",{currentCharacter:u==n.currentCharacter,targetCharacter:(d=n.targetCharacter)==null?void 0:d.includes(u)}]),onClick:m=>r(u),onMouseover:m=>s(u)},[Et(P("div",{class:Ht(["characterEffect",{effectGreen:n.toCharacterEffectType=="heal",effectRed:n.toCharacterEffectType=="damage"}])},Re(n.toCharacterEffect[f]),3),[[Tt,n.showCharacterEffect&&n.showCharacterEffect[f]]]),Et(P("img",{src:n.toCharacterAnime,class:"toCharacterAnime",alt:"skill effect"},null,8,eC),[[Tt,n.showCharacterAnime&&n.showCharacterAnime[f]]]),P("img",{class:"characterface",src:u.faceGraphicUrl},null,8,tC),P("span",nC,[Pe(qa,{nowHP:u.nowHP,maxHP:u.totalStatus.HP},null,8,["nowHP","maxHP"])]),P("div",iC,[Pe(Xl,{nowMP:u.nowMP,maxMP:u.totalStatus.MP},null,8,["nowMP","maxMP"])])],42,Qw)}),256))]))}}),Gh=Ze(sC,[["__scopeId","data-v-72f64bd1"]]);class El{constructor(e){Ue(this,"mon_id");Ue(this,"mon_type");Ue(this,"name");Ue(this,"GraphicUrl");Ue(this,"LV");Ue(this,"HP");Ue(this,"MP");Ue(this,"ATK");Ue(this,"MGC");Ue(this,"DEF");Ue(this,"MDF");Ue(this,"DEX");Ue(this,"SPD");Ue(this,"HitRate");Ue(this,"CritRate");Ue(this,"nowHP");Ue(this,"nowMP");Ue(this,"GOLD");Ue(this,"EXP");Ue(this,"order");this.mon_id=e.mon_id,this.mon_type=e.mon_type,this.name=e.name,this.GraphicUrl=e.GraphicUrl,this.LV=e.LV,this.HP=e.HP,this.MP=e.MP,this.ATK=e.ATK,this.MGC=e.MGC,this.DEF=e.DEF,this.MDF=e.MDF,this.DEX=e.DEX,this.SPD=e.SPD,this.HitRate=A.monsterHitRate+Math.floor(this.DEX/10),this.CritRate=Math.floor(this.DEX/8),this.nowHP=e.HP,this.nowMP=e.MP,this.GOLD=e.GOLD,this.EXP=e.EXP,this.order=void 0}}const rC="/app2/img/back/lightning.gif",aC=n=>(kn("data-v-0c155cb7"),n=n(),Nn(),n),oC=aC(()=>P("div",{class:"txtEncount"},"Encounter",-1)),lC=["src"],cC=qe({__name:"ImgEncount",setup(n){return(e,t)=>(ie(),me(dt,null,[oC,P("img",{class:"imgEncount",src:J(rC),alt:"imgEncount"},null,8,lC)],64))}}),uC=Ze(cC,[["__scopeId","data-v-0c155cb7"]]),fC="/app2/icon/AttackOrb.png",dC=["src"],hC=qe({__name:"IconAttack",setup(n){return(e,t)=>(ie(),me("img",{class:"Icon",src:J(fC),alt:"Attack"},null,8,dC))}}),pC=Ze(hC,[["__scopeId","data-v-c09d57d2"]]),mC="/app2/icon/SkillOrb.png",_C=["src"],gC=qe({__name:"IconSkill",setup(n){return(e,t)=>(ie(),me("img",{class:"Icon",src:J(mC),alt:"Attack"},null,8,_C))}}),vC=Ze(gC,[["__scopeId","data-v-b31f90eb"]]),MC="/app2/icon/MagicOrb.png",xC=["src"],SC=qe({__name:"IconMagic",setup(n){return(e,t)=>(ie(),me("img",{class:"Icon",src:J(MC),alt:"Magic"},null,8,xC))}}),yC=Ze(SC,[["__scopeId","data-v-5de73f17"]]),EC="/app2/effect/normal/slash.gif",bC="/app2/effect/normal/shot.gif",Sf="/app2/effect/normal/hit.gif",TC="/app2/effect/monster/claw1.gif",AC={key:2,class:"BattleUI"},wC={class:"monsterGrid"},CC=["onClick","onMouseover","onMouseout"],RC=["src","onLoad"],PC=["src"],LC=["src"],DC=["src"],IC=["src"],UC={key:3,class:"startTurn"},FC={key:4,class:"endBattle"},kC={key:5,class:"monsterInfo"},NC={class:"monsterName"},OC={class:"progress-bar-hp"},BC={key:6},HC={key:3},zC=qe({__name:"Battle",setup(n){const e=ss(),t=Er(),i=xe(Array(6).fill(null)),s=vt("monsterList"),r=[],a=xe(Array(6).fill([])),o=xe(void 0),l=xe([]),c=xe(""),u=xe([]),f=xe(""),d=xe(0),m=xe(0),_=xe(void 0),g=xe(),p=xe([]),h=xe(new Array(e.characters.length).fill(!1)),E=xe(null),y=xe(new Array(e.characters.length).fill(!1)),b=xe(new Array(e.characters.length).fill(null)),C=xe(),N=xe(0),D=xe(0),j=xe([]),x=xe(0),w=xe("encount");let Q=null;const oe=xe(""),_e=Yt({AttackBtn:{},SkillBtn:{}}),F=new Array(A.mscBattle1,A.mscBattle2,A.mscBattle3,A.mscBattle4,A.mscBattle5),V=U=>e.characters.findIndex(L=>L===U),W=()=>i.value.reduceRight((U,L,k)=>U==0&&L!==null?k:U,0);ns(async()=>{for(Y(),await li(A.awaitTime),te(),w.value="startTurn";w.value!=="result";)w.value="startTurn",await de()});function Y(){let U;U=Math.floor(Math.random()*F.length),t.playBgm(F[U])}function te(){const U=en(A.monNumMin,A.monNumMax);for(let k=0;k<U;k++){const K=new El(s[fo(s.length)]);r.push(K)}let L=[];for(;L.length<r.length;){const k=fo(6);L.includes(k)||L.push(k)}L.forEach((k,K)=>{r[K].order=k,i.value[k]=r[K]}),console.log(r)}let pe=1;async function de(){g.value=void 0,j.value=[...e.characters.filter(U=>U.nowHP>0),...r.filter(U=>U.nowHP>0)],j.value.sort((U,L)=>{let k=U instanceof on?U.totalStatus.SPD:U.SPD;return(L instanceof on?L.totalStatus.SPD:L.SPD)-k}),await li(A.awaitTime);for(let U=0;U<j.value.length;U++){let L=j.value[U];if(console.log("currentTurn",L),x.value=U,Te.value="",p.value=[],l.value=[],L.nowHP>0&&(L instanceof on?(g.value=L,await z(L),g.value=void 0,ge=null,_.value=void 0):L instanceof El&&(o.value=L,await he(L),o.value=void 0)),!r.some(k=>k.nowHP>0)){w.value="endBattle",await li(A.awaitTime),w.value="result";break}if(!e.characters.some(k=>k.nowHP>0)){w.value="result";break}await li(A.nextTime)}De(),pe+=1,await li(A.nextTime)}async function z(U){w.value="characterTurn",U.class==A.clsPriest?oe.value=A.strMagic:oe.value=A.strSkill,await R(),w.value="",await S(U),I(!0)}const X=xe(!1);let ge;function Ee(U){w.value="characterTurn",ge===U?(X.value=!1,I(!0),ge=null):(I(),_e[U]={transform:"scale(1.5) translateY(-20%)",opacity:1},ge=U,U==A.strAttack?(X.value=!1,Te.value="oneEnemy",_.value=i.value[W()],Se(W()),w.value="selectTarget"):X.value=!0)}const Te=xe("");let Le;const We=U=>{X.value=!1,Le=U,Te.value=U.skill_effect[0].target_type,Se(W()),w.value="selectTarget"},Be=U=>w.value!="selectTarget"||!l.value?!1:l.value.includes(U);function Se(U){switch(p.value=[],l.value=[],Te.value){case"myself":p.value.push(g.value);break;case"oneFriend":p.value.push(g.value);break;case"allFriends":p.value=e.characters.filter(L=>L.nowHP>0);break;case"randomFriend":break;case"oneEnemy":l.value.push(i.value[U]);break;case"columnEnemy":ke(U);break;case"rowEnemy":He(U);break;case"allEnemy":l.value=i.value.filter(L=>L!==null);break;case"randomEnemy":l.value=i.value.filter(L=>L!==null);break}}const ke=U=>{for(let L=U%3;L<i.value.length;L+=3)i.value[L]!==null&&l.value.push(i.value[L])},He=U=>{let L=U<=2?0:3,k=U<=2?2:5;for(let K=L;K<=k;K++)i.value[K]!==null&&l.value.push(i.value[K])},M=(U,L)=>{U=="over"?(p.value=[],p.value.push(L)):U=="click"&&Q&&(Q(),Q=null)},I=(U=!1)=>{_e.AttackBtn=U?{}:{opacity:.5},_e.SkillBtn=U?{}:{opacity:.5}};async function R(){return new Promise(U=>{Q=U})}function G(U,L){i.value[U]&&(_.value=L)}function H(U){i.value[U]&&(_.value=void 0)}function ce(U,L){i.value[U]&&(_.value=L,w.value==="selectTarget"&&(l.value.includes(i.value[U])?Q&&(Q(),Q=null):Se(U)))}async function he(U){w.value="monsterTurn",await Ve(U,se())}const se=()=>{const U=e.characters.filter(Fe=>Fe.nowHP>0),L=U.reduce((Fe,mt)=>Fe+mt.totalStatus.Hate,0),k=U.map(Fe=>Fe.totalStatus.Hate/L),K=Math.random();let ye=0;for(let Fe=0;Fe<k.length;Fe++)if(ye+=k[Fe],K<ye)return U[Fe]};let ue,ae,be;async function S(U){let L,k;if(ge==A.strAttack)O(U.name+"'s "+A.strAttack),k=l.value[0],L=k.order,a.value[L]=[],B(U,k,L),ue=A.normalAttackTime,Ce(U),await li(A.normalAttackTime+A.effectTime);else{O(U.name+"'s "+Le.name);for(const K of Le.skill_effect){if(ue=K.anime_time,ae=0,be=0,Te.value!=K.target_type&&v(K.target_type,U),Te.value=K.target_type,K.target==1)Ae(U,K,Le.name);else if(K.target==2){if(a.value=Array.from({length:6},()=>[]),K.target_type=="randomEnemy")for(let ye=1;ye<=K.effect_times;ye++)k=l.value[fo(l.value.length)],L=k.order,B(U,k,L,K),be+=1;else for(let ye of l.value){L=ye.order;for(let Fe=1;Fe<=K.effect_times;Fe++)B(U,ye,L,K),be+=1}Ge(K)}ae=A.effectTime+be*A.delayTime,await li(ue+ae)}}for(let K of l.value)K.nowHP==0&&(i.value=i.value.map(ye=>ye===K?null:ye))}function v(U,L){switch(p.value=[],l.value=[],U){case"myself":p.value.push(L);break;case"allFriends":p.value=e.characters.filter(k=>k.nowHP>0);break;case"randomFriend":break;case"allEnemy":l.value=i.value.filter(k=>k!==null);break;case"randomEnemy":l.value=i.value.filter(k=>k!==null);break}}function B(U,L,k,K){let ye=0,Fe=0,mt=0,Kt=0,ot=0;if(le(U.totalStatus.HitRate,L.SPD)){ge==A.strAttack||ge==A.strSkill&&(K==null?void 0:K.base_status)==A.strAtk?(ye=U.totalStatus.ATK,Fe=L.DEF):ge==A.strSkill&&(K==null?void 0:K.base_status)==A.strMgc&&(ye=U.totalStatus.MGC,Fe=L.MDF),Kt=fe(U.totalStatus.CritRate,Fe)?A.critDamageRate:A.normalDamageRate,mt=ge==A.strAttack?1:K.effect_amount,ot=Math.floor((ye-Fe/1.5)*mt*Kt),console.log("characterAttack",ye),ot=ot<0?0:ot;const Dt=re(ot);L.nowHP=ot>L.nowHP?0:L.nowHP-ot,L.nowHP==0&&(D.value+=L.EXP,N.value+=L.GOLD),a.value[k].push(Dt),O("> "+ot+" damage to "+L.name)}else{const Dt=re(A.strMiss);a.value[k].push(Dt)}}const re=U=>{const L={top:en(A.minEffectTop,A.maxEffectTop)+"%",left:en(A.minEffectLeft,A.maxEffectLeft)+"%"};return{effect:U,position:L,visible:!1}};function le(U,L){let k=U-Math.floor(L/10);return Math.random()<=k/100}function fe(U,L){let k=U-Math.floor(L/5);return Math.random()<=k/100}function Ae(U,L,k){let K=0;switch(K=U.totalStatus[L.base_status]*L.effect_amount,L.effect_type){case"heal":switch(L.target_type){case"myself":case"oneFriend":ve(p.value[0],K,L.effect_kind);break;case"allFriends":for(let ye of e.characters)ve(ye,K,L.effect_kind);break}break;case"buff":switch(L.target_type){case"myself":case"oneFriend":if(!p.value)return;p.value[0].addBuff(k,L.effect_kind,K,L.effect_times),p.value[0].calculateTotalStatus();break;case"allFriends":for(let ye of e.characters)ye.addBuff(k,L.effect_kind,K,L.effect_times),ye.calculateTotalStatus();break}break;case"condition":switch(L.target_type){case"myself":case"oneFriend":p.value[0].addCondition(k,L.effect_kind,K,L.effect_times);break;case"allFriends":for(let ye of e.characters)ye.addCondition(k,L.effect_kind,K,L.effect_times);break}break}Me(L)}function ve(U,L,k){console.log("characterHeal",U,k,L),k=="nowHP"?U.nowHP=U.nowHP+L>U.totalStatus.HP?U.totalStatus.HP:U.nowHP+L:k=="nowMP"&&(U.nowMP=U.nowMP+L>U.totalStatus.MP?U.totalStatus.MP:U.nowMP+L),b.value[V(U)]=L,be+=1,O("> Recovers "+U.name+"'s "+k+" by "+L)}function Ce(U){if(U.equipment.WEP)switch(U.equipment.WEP.kind){case"Sword":case"Axe":case"Dagger":c.value=EC;break;case"Wand":c.value=Sf;break;case"Bow":case"Spear":c.value=bC;break}else c.value=Sf;let L=l.value[0].order;u.value[L]=!0}function Ge(U){c.value=U.skill_anime;let L=l.value[0].order;if(U.target_type=="oneEnemy")u.value[L]=!0;else switch(U.target_type){case"columnEnemy":f.value="column",m.value=7+L%3*27;break;case"rowEnemy":f.value="row",d.value=15+Math.floor(L/3)*25;break;case"allEnemy":f.value="all";break;case"randomEnemy":f.value="all";break}}const Je=(U=0)=>{setTimeout(()=>{f.value="",u.value[U]=!1,Ne()},ue)};function Me(U){switch(console.log("skillEffect",U),U.target_type){case"myself":case"oneFriend":let L=V(p.value[0]);E.value=U.skill_anime,h.value[L]=!0,setTimeout(()=>{h.value[L]=!1,E.value=null,Xe(U.effect_type)},ue);break;case"allFriends":f.value="all",c.value=U.skill_anime,setTimeout(()=>{c.value="",f.value="",Xe(U.effect_type)},ue);break}}function Xe(U){let L=A.delayTime;C.value=U;for(let k=0;k<e.characters.length;k++)console.log("applyEffectToCharacters",b.value[k],C.value),b.value[k]!=null&&(setTimeout(()=>{y.value[k]=!0,setTimeout(()=>{y.value[k]=!1,b.value[k]=null},A.effectTime)},L),L+=A.delayTime,ae=A.effectTime+L)}function Ne(){let U=A.delayTime;for(let L of a.value)if(Array.isArray(L))for(let k of L)setTimeout(()=>{k.visible=!0,setTimeout(()=>{k.visible=!1},A.effectTime)},U),U+=A.delayTime}async function Ve(U,L){console.log("monsterAction",U),ze(U,L);let k=V(L);p.value=[],p.value.push(L),E.value=TC,h.value[k]=!0,setTimeout(()=>{h.value[k]=!1,E.value=null,Xe("damage")},A.monsterAttackTime),L.nowHP==0,await li(A.monsterAttackTime+A.effectTime)}function ze(U,L){let k=0,K=0,ye=0,Fe=0;le(U.HitRate,L.totalStatus.SPD)?(k=U.ATK,K=L.totalStatus.DEF,ye=fe(U.CritRate,K)?A.critDamageRate:A.normalDamageRate,Fe=Math.floor((k-K/1.5)*ye),console.log("monsterAttack",k),Fe=Fe<0?0:Fe,b.value[V(L)]=Fe,L.nowHP=Fe>L.nowHP?0:L.nowHP-Fe):b.value[V(L)]="MISS"}function De(){p.value=[],l.value=[];for(let U of e.characters){for(let L of U.conditions)switch(L.status){case"regeneration":ve(U,L.value,"nowHP"),Xe("heal"),console.log("regeneration",L);break}U.updateBuffs(),U.updateConditions()}}const st=xe(null),O=U=>{st.value&&st.value.addLog(U,1)};return(U,L)=>(ie(),me(dt,null,[w.value=="encount"?(ie(),bt(uC,{key:0})):Ke("",!0),w.value=="result"?(ie(),bt(Zw,{key:1,getGold:N.value,getExp:D.value},null,8,["getGold","getExp"])):Ke("",!0),w.value!=="encount"&&w.value!=="result"?(ie(),me("div",AC,[Pe(Uw,{class:"turnOrder",turnOrder:j.value,numOrder:x.value},null,8,["turnOrder","numOrder"]),P("div",wC,[(ie(!0),me(dt,null,jt(i.value,(k,K)=>(ie(),me("div",{key:K,class:Ht(["monsterCell",{pickMonster:Be(k),currentMonster:k!=null&&k==o.value}])},[k?(ie(),me("div",{key:0,onClick:ye=>ce(K,k),onMouseover:ye=>G(K,k),onMouseout:ye=>H(K)},[(ie(!0),me(dt,null,jt(a.value[K],(ye,Fe)=>(ie(),me("span",{key:Fe},[ye.visible?(ie(),me("span",{key:0,class:"monsterEffect",style:Rn(ye.position)},Re(ye.effect),5)):Ke("",!0)]))),128)),u.value[K]?(ie(),me("img",{key:0,src:c.value,class:"skillOneEffect",alt:"skill effect",onLoad:ye=>Je(K)},null,40,RC)):Ke("",!0),P("img",{src:k.GraphicUrl,class:"monsterImage",alt:"monsterImage"},null,8,PC)],40,CC)):Ke("",!0)],2))),128))]),f.value=="row"?(ie(),me("img",{key:0,src:c.value,class:"skillRowEffect",style:Rn({top:d.value+"vh"}),alt:"skill effect",onLoad:L[0]||(L[0]=k=>Je())},null,44,LC)):Ke("",!0),f.value=="column"?(ie(),me("img",{key:1,src:c.value,class:"skillColEffect",style:Rn({left:m.value+"vw"}),alt:"skill effect",onLoad:L[1]||(L[1]=k=>Je())},null,44,DC)):Ke("",!0),f.value=="all"?(ie(),me("img",{key:2,src:c.value,class:"skillAllEffect",alt:"skill effect",onLoad:L[2]||(L[2]=k=>Je())},null,40,IC)):Ke("",!0),w.value=="startTurn"?(ie(),me("div",UC,Re(J(pe))+" Turn Start",1)):Ke("",!0),w.value=="endBattle"?(ie(),me("div",FC,"Battle Ends")):Ke("",!0),Pe(Gh,{class:"CurrentUI",currentCharacter:g.value,targetCharacter:p.value,showCharacterEffect:y.value,toCharacterEffect:b.value,toCharacterEffectType:C.value,showCharacterAnime:h.value,toCharacterAnime:E.value,selectionMode:Te.value,onSelectCharacter:M},null,8,["currentCharacter","targetCharacter","showCharacterEffect","toCharacterEffect","toCharacterEffectType","showCharacterAnime","toCharacterAnime","selectionMode"]),_.value?(ie(),me("div",kC,[P("div",NC,Re(_.value.name),1),P("div",OC,[Pe(qa,{nowHP:_.value.nowHP,maxHP:_.value.HP},null,8,["nowHP","maxHP"])])])):Ke("",!0),Pe(Hh,{ref_key:"actionLog",ref:st,class:"actionLog"},null,512),w.value=="characterTurn"||w.value=="selectTarget"?(ie(),me("div",BC,[Pe(pC,{id:"IconAttack",class:"IconAttack",onClick:L[3]||(L[3]=k=>Ee(J(A).strAttack)),style:Rn(_e.AttackBtn)},null,8,["style"]),oe.value=="Skill"?(ie(),bt(vC,{key:0,id:"IconAttack",class:"IconSkill",onClick:L[4]||(L[4]=k=>Ee(J(A).strSkill)),style:Rn(_e.SkillBtn)},null,8,["style"])):(ie(),bt(yC,{key:1,id:"IconAttack",class:"IconSkill",onClick:L[5]||(L[5]=k=>Ee(J(A).strSkill)),style:Rn(_e.SkillBtn)},null,8,["style"])),X.value?(ie(),bt(lh,{key:2,class:"SkillUI",character:g.value,processBattle:X.value,onUseSkill:We},null,8,["character","processBattle"])):Ke("",!0),J(ge)==J(A).strSkill&&w.value=="selectTarget"?(ie(),me("div",HC,[Pe(fl,{class:"attackName",inside:J(Le).name},null,8,["inside"]),Pe(oh,{class:"skillInfo",skillInfo:J(Le).info},null,8,["skillInfo"])])):Ke("",!0),J(ge)==J(A).strAttack?(ie(),bt(fl,{key:4,class:"attackName",inside:"Normal Attack"})):Ke("",!0)])):Ke("",!0)])):Ke("",!0)],64))}}),GC=Ze(zC,[["__scopeId","data-v-562648bf"]]),VC="/app2/icon/playerPosition.png",WC={class:"modal"},$C=qe({__name:"Map",setup(n){const e=zh(),t=xe(),i=xe(),s=new Image;s.src=VC;const r=xe(!1),a=()=>{if(pt.length==0||!i.value||!t.value)return;const c=i.value.getContext("2d");if(c){i.value.width=pt[0].length*3,i.value.height=pt.length*3,t.value.width=40*3,t.value.height=40*3;for(let u=0;u<pt.length;u++)for(let f=0;f<pt[u].length;f++){switch(pt[u][f]){case 0:c.fillStyle=A.MiniWallColor;break;case 1:case 2:c.fillStyle=A.MiniRoomColor;break}c.fillRect(f*3,u*3,3,3)}o()}},o=()=>{var m;if(!t.value||!i.value||!e.playerPosition)return;const c=(m=t.value)==null?void 0:m.getContext("2d"),u=i.value.getContext("2d");if(!c||!u)return;const f=Math.floor(e.playerPosition.x/A.BlockSize-1),d=Math.floor(e.playerPosition.z/A.BlockSize-1);c.clearRect(0,0,t.value.width,t.value.height),c.drawImage(i.value,f*3-20*3,d*3-20*3,40*3,40*3,0,0,40*3,40*3),c.drawImage(s,20*3,20*3,A.BlockSize,A.BlockSize),u.fillStyle=A.MiniMoveColor,u.fillRect((f+1)*3,(d+1)*3,3,3),e.playerPosition.clone()};function l(){r.value=!r.value,o(),console.log("clickMap",r)}return wt(()=>pt,()=>{Ws(a)},{immediate:!0,deep:!0}),wt(()=>e.playerPosition,()=>{o()},{immediate:!0,deep:!0}),(c,u)=>(ie(),me("div",null,[P("canvas",{class:"miniMap",ref_key:"MapUI",ref:t,onClick:u[0]||(u[0]=f=>l())},null,512),Et(P("div",WC,[P("canvas",{class:"fullMap",ref_key:"fullMap",ref:i,onClick:u[1]||(u[1]=f=>l())},null,512)],512),[[Tt,r.value]])]))}}),qC=Ze($C,[["__scopeId","data-v-a00f7274"]]),XC=[{mon_id:1,mon_type:1,name:"mon1",GraphicUrl:"img/monster/mon1.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:2,mon_type:1,name:"mon2",GraphicUrl:"img/monster/mon2.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:3,mon_type:1,name:"mon3",GraphicUrl:"img/monster/mon3.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:4,mon_type:1,name:"mon4",GraphicUrl:"img/monster/mon4.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:5,mon_type:1,name:"mon5",GraphicUrl:"img/monster/mon5.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:6,mon_type:1,name:"mon6",GraphicUrl:"img/monster/mon6.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:7,mon_type:1,name:"mon7",GraphicUrl:"img/monster/mon7.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:8,mon_type:1,name:"mon8",GraphicUrl:"img/monster/mon8.png",LV:1,HP:20,MP:8,ATK:10,MGC:10,DEF:10,MDF:10,DEX:10,SPD:10,GOLD:10,EXP:10},{mon_id:9,mon_type:1,name:"boss3",GraphicUrl:"img/monster/boss3.png",LV:10,HP:200,MP:8,ATK:50,MGC:50,DEF:50,MDF:50,DEX:50,SPD:50,GOLD:100,EXP:300},{mon_id:10,mon_type:1,name:"boss5",GraphicUrl:"img/monster/boss5.png",LV:20,HP:500,MP:100,ATK:100,MGC:100,DEF:100,MDF:100,DEX:100,SPD:50,GOLD:1e3,EXP:1e3}],YC="/app2/icon/fullscreen.svg",jC=["src"],KC=qe({__name:"IconFullscreen",setup(n){const{enterFullscreen:e}=fh(),t=xe(document.fullscreenElement!==null);return Ha(()=>{document.onfullscreenchange=()=>{t.value=document.fullscreenElement!==null}}),(i,s)=>Et((ie(),me("img",{class:"Icon",src:J(YC),alt:"Fullscreen",onClick:s[0]||(s[0]=r=>J(e)())},null,8,jC)),[[Tt,!t.value]])}}),ZC=Ze(KC,[["__scopeId","data-v-7a725939"]]),JC={class:"UI"},QC={key:0},eR={key:1},tR={key:2},nR={key:0},iR={key:1},sR=qe({__name:"App",setup(n){const e=qn();console.log("activeSkills",th),console.log("passiveSkills",Qd);const t=ss();t.setParty(),console.log("party",t.characters);const i=rh();i.setEquipBag(),console.log("equipmentType",i.equipmentType),console.log("equipmentItem",i.equipmentItem);const s=xe(XC.map(a=>new El(a)));yn("monsterList",s.value),console.log("monsterList",s.value);const r=Ci();return(a,o)=>(ie(),me("div",JC,[J(e).status==J(A).statusOpening?(ie(),me("div",QC,[Pe($_)])):J(e).status==J(A).statusTown?(ie(),me("div",eR,[Pe(OS)])):J(e).status==J(A).statusDungeon?(ie(),me("div",tR,[J(e).processDungeon==J(A).processSearch?(ie(),me("div",nR,[Et(Pe(Gh,{class:"CurrentUI"},null,512),[[Tt,J(r).current]]),Pe(Zl)])):J(e).processDungeon==J(A).processBattle?(ie(),me("div",iR,[Pe(GC)])):Ke("",!0),Pe(Cw),Et(Pe(qC,{class:"MapUI"},null,512),[[Tt,J(r).map]])])):Ke("",!0),Pe(ZC,{class:"IconFullscreen"})]))}}),rR=Ze(sR,[["__scopeId","data-v-edf96551"]]),aR={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},oR={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function lR(n,e){let t;function i(){t=Pl(),t.run(()=>e.length?e(()=>{t==null||t.stop(),i()}):e())}wt(n,s=>{s&&!t?i():s||(t==null||t.stop(),t=void 0)},{immediate:!0}),od(()=>{t==null||t.stop()})}const Vn=typeof window<"u",cR=Vn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function uR(n,e,t){const i=e.length-1;if(i<0)return n===void 0?t:n;for(let s=0;s<i;s++){if(n==null)return t;n=n[e[s]]}return n==null||n[e[i]]===void 0?t:n[e[i]]}function yf(n,e,t){return n==null||!e||typeof e!="string"?t:n[e]!==void 0?n[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),uR(n,e.split("."),t))}function Vh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:n},(t,i)=>e+i)}function Ef(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function qo(n,e){return e.every(t=>n.hasOwnProperty(t))}function fR(n,e){const t={},i=new Set(Object.keys(n));for(const s of e)i.has(s)&&(t[s]=n[s]);return t}function dR(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(t,n))}function bf(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return n+t.repeat(Math.max(0,e-n.length))}function Tf(n,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-n.length))+n}function hR(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let i=0;for(;i<n.length;)t.push(n.substr(i,e)),i+=e;return t}function wi(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const i={};for(const s in n)i[s]=n[s];for(const s in e){const r=n[s],a=e[s];if(Ef(r)&&Ef(a)){i[s]=wi(r,a,t);continue}if(Array.isArray(r)&&Array.isArray(a)&&t){i[s]=t(r,a);continue}i[s]=a}return i}function Is(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Is.cache.has(n))return Is.cache.get(n);const e=n.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Is.cache.set(n,e),e}Is.cache=new Map;const bs=2.4,Af=.2126729,wf=.7151522,Cf=.072175,pR=.55,mR=.58,_R=.57,gR=.62,ca=.03,Rf=1.45,vR=5e-4,MR=1.25,xR=1.25,Pf=.078,Lf=12.82051282051282,ua=.06,Df=.001;function If(n,e){const t=(n.r/255)**bs,i=(n.g/255)**bs,s=(n.b/255)**bs,r=(e.r/255)**bs,a=(e.g/255)**bs,o=(e.b/255)**bs;let l=t*Af+i*wf+s*Cf,c=r*Af+a*wf+o*Cf;if(l<=ca&&(l+=(ca-l)**Rf),c<=ca&&(c+=(ca-c)**Rf),Math.abs(c-l)<vR)return 0;let u;if(c>l){const f=(c**pR-l**mR)*MR;u=f<Df?0:f<Pf?f-f*Lf*ua:f-ua}else{const f=(c**gR-l**_R)*xR;u=f>-Df?0:f>-Pf?f-f*Lf*ua:f+ua}return u*100}const Pa=.20689655172413793,SR=n=>n>Pa**3?Math.cbrt(n):n/(3*Pa**2)+4/29,yR=n=>n>Pa?n**3:3*Pa**2*(n-4/29);function Wh(n){const e=SR,t=e(n[1]);return[116*t-16,500*(e(n[0]/.95047)-t),200*(t-e(n[2]/1.08883))]}function $h(n){const e=yR,t=(n[0]+16)/116;return[e(t+n[1]/500)*.95047,e(t),e(t-n[2]/200)*1.08883]}const ER=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],bR=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055,TR=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],AR=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function qh(n){const e=Array(3),t=bR,i=ER;for(let s=0;s<3;++s)e[s]=Math.round(dR(t(i[s][0]*n[0]+i[s][1]*n[1]+i[s][2]*n[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function lc(n){let{r:e,g:t,b:i}=n;const s=[0,0,0],r=AR,a=TR;e=r(e/255),t=r(t/255),i=r(i/255);for(let o=0;o<3;++o)s[o]=a[o][0]*e+a[o][1]*t+a[o][2]*i;return s}const Uf=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,wR={rgb:(n,e,t,i)=>({r:n,g:e,b:t,a:i}),rgba:(n,e,t,i)=>({r:n,g:e,b:t,a:i}),hsl:(n,e,t,i)=>Ff({h:n,s:e,l:t,a:i}),hsla:(n,e,t,i)=>Ff({h:n,s:e,l:t,a:i}),hsv:(n,e,t,i)=>Sr({h:n,s:e,v:t,a:i}),hsva:(n,e,t,i)=>Sr({h:n,s:e,v:t,a:i})};function ii(n){if(typeof n=="number")return{r:(n&16711680)>>16,g:(n&65280)>>8,b:n&255};if(typeof n=="string"&&Uf.test(n)){const{groups:e}=n.match(Uf),{fn:t,values:i}=e,s=i.split(/,\s*/).map(r=>r.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(r)/100:parseFloat(r));return wR[t](...s)}else if(typeof n=="string"){let e=n.startsWith("#")?n.slice(1):n;return[3,4].includes(e.length)?e=e.split("").map(t=>t+t).join(""):[6,8].includes(e.length),RR(e)}else if(typeof n=="object"){if(qo(n,["r","g","b"]))return n;if(qo(n,["h","s","l"]))return Sr(Xh(n));if(qo(n,["h","s","v"]))return Sr(n)}throw new TypeError(`Invalid color: ${n==null?n:String(n)||n.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Sr(n){const{h:e,s:t,v:i,a:s}=n,r=o=>{const l=(o+e/60)%6;return i-i*t*Math.max(Math.min(l,4-l,1),0)},a=[r(5),r(3),r(1)].map(o=>Math.round(o*255));return{r:a[0],g:a[1],b:a[2],a:s}}function Ff(n){return Sr(Xh(n))}function Xh(n){const{h:e,s:t,l:i,a:s}=n,r=i+t*Math.min(i,1-i),a=r===0?0:2-2*i/r;return{h:e,s:a,v:r,a:s}}function fa(n){const e=Math.round(n).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function CR(n){let{r:e,g:t,b:i,a:s}=n;return`#${[fa(e),fa(t),fa(i),s!==void 0?fa(Math.round(s*255)):""].join("")}`}function RR(n){n=PR(n);let[e,t,i,s]=hR(n,2).map(r=>parseInt(r,16));return s=s===void 0?s:s/255,{r:e,g:t,b:i,a:s}}function PR(n){return n.startsWith("#")&&(n=n.slice(1)),n=n.replace(/([^0-9a-f])/gi,"F"),(n.length===3||n.length===4)&&(n=n.split("").map(e=>e+e).join("")),n.length!==6&&(n=bf(bf(n,6),8,"F")),n}function LR(n,e){const t=Wh(lc(n));return t[0]=t[0]+e*10,qh($h(t))}function DR(n,e){const t=Wh(lc(n));return t[0]=t[0]-e*10,qh($h(t))}function IR(n){const e=ii(n);return lc(e)[1]}function UR(n){const e=Math.abs(If(ii(0),ii(n)));return Math.abs(If(ii(16777215),ii(n)))>Math.min(e,50)?"#fff":"#000"}function Yh(n,e){return t=>Object.keys(n).reduce((i,s)=>{const a=typeof n[s]=="object"&&n[s]!=null&&!Array.isArray(n[s])?n[s]:{type:n[s]};return t&&s in t?i[s]={...a,default:t[s]}:i[s]=a,e&&!i[s].source&&(i[s].source=e),i},{})}const yr=Symbol.for("vuetify:defaults");function FR(n){return xe(n)}function jh(){const n=vt(yr);if(!n)throw new Error("[Vuetify] Could not find defaults instance");return n}function kR(n,e){var t,i;return typeof((t=n.props)==null?void 0:t[e])<"u"||typeof((i=n.props)==null?void 0:i[Is(e)])<"u"}function NR(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:jh();const i=Ja("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=It(()=>{var l;return(l=t.value)==null?void 0:l[n._as??e]}),r=new Proxy(n,{get(l,c){var f,d,m,_;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=s.value)==null?void 0:f[c],u].filter(g=>g!=null):typeof c=="string"&&!kR(i.vnode,c)?((d=s.value)==null?void 0:d[c])??((_=(m=t.value)==null?void 0:m.global)==null?void 0:_[c])??u:u}}),a=Rs();Ha(()=>{if(s.value){const l=Object.entries(s.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});a.value=l.length?Object.fromEntries(l):void 0}else a.value=void 0});function o(){const l=BR(yr,i);yn(yr,It(()=>a.value?wi((l==null?void 0:l.value)??{},a.value):l==null?void 0:l.value))}return{props:r,provideSubDefaults:o}}function Rr(n){if(n._setup=n._setup??n.setup,!n.name)return n;if(n._setup){n.props=Yh(n.props??{},n.name)();const e=Object.keys(n.props).filter(t=>t!=="class"&&t!=="style");n.filterProps=function(i){return fR(i,e)},n.props._as=String,n.setup=function(i,s){const r=jh();if(!r.value)return n._setup(i,s);const{props:a,provideSubDefaults:o}=NR(i,i._as??n.name,r),l=n._setup(a,s);return o(),l}}return n}function OR(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(n?Rr:qe)(e)}function Ja(n,e){const t=Jm();if(!t)throw new Error(`[Vuetify] ${n} ${e||"must be called from inside a setup function"}`);return t}let Kh=0,ga=new WeakMap;function Zh(){const n=Ja("getUid");if(ga.has(n))return ga.get(n);{const e=Kh++;return ga.set(n,e),e}}Zh.reset=()=>{Kh=0,ga=new WeakMap};function BR(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ja("injectSelf");const{provides:t}=e;if(t&&n in t)return t[n]}function HR(n,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const r=Ja("useProxiedModel"),a=xe(n[e]!==void 0?n[e]:t),o=Is(e),c=It(o!==e?()=>{var f,d,m,_;return n[e],!!(((f=r.vnode.props)!=null&&f.hasOwnProperty(e)||(d=r.vnode.props)!=null&&d.hasOwnProperty(o))&&((m=r.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)||(_=r.vnode.props)!=null&&_.hasOwnProperty(`onUpdate:${o}`)))}:()=>{var f,d;return n[e],!!((f=r.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=r.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});lR(()=>!c.value,()=>{wt(()=>n[e],f=>{a.value=f})});const u=It({get(){const f=n[e];return i(c.value?f:a.value)},set(f){const d=s(f),m=lt(c.value?n[e]:a.value);m===d||i(m)===f||(a.value=d,r==null||r.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?n[e]:a.value}),u}const kf="$vuetify.",Nf=(n,e)=>n.replace(/\{(\d+)\}/g,(t,i)=>String(e[+i])),Jh=(n,e,t)=>function(i){for(var s=arguments.length,r=new Array(s>1?s-1:0),a=1;a<s;a++)r[a-1]=arguments[a];if(!i.startsWith(kf))return Nf(i,r);const o=i.replace(kf,""),l=n.value&&t.value[n.value],c=e.value&&t.value[e.value];let u=yf(l,o,null);return u||(`${i}${n.value}`,u=yf(c,o,null)),u||(u=i),typeof u!="string"&&(u=i),Nf(u,r)};function Qh(n,e){return(t,i)=>new Intl.NumberFormat([n.value,e.value],i).format(t)}function Xo(n,e,t){const i=HR(n,e,n[e]??t.value);return i.value=n[e]??t.value,wt(t,s=>{n[e]==null&&(i.value=t.value)}),i}function ep(n){return e=>{const t=Xo(e,"locale",n.current),i=Xo(e,"fallback",n.fallback),s=Xo(e,"messages",n.messages);return{name:"vuetify",current:t,fallback:i,messages:s,t:Jh(t,i,s),n:Qh(t,i),provide:ep({current:t,fallback:i,messages:s})}}}function zR(n){const e=Rs((n==null?void 0:n.locale)??"en"),t=Rs((n==null?void 0:n.fallback)??"en"),i=xe({en:aR,...n==null?void 0:n.messages});return{name:"vuetify",current:e,fallback:t,messages:i,t:Jh(e,t,i),n:Qh(e,t),provide:ep({current:e,fallback:t,messages:i})}}const Of=Symbol.for("vuetify:locale");function GR(n){return n.name!=null}function VR(n){const e=n!=null&&n.adapter&&GR(n==null?void 0:n.adapter)?n==null?void 0:n.adapter:zR(n),t=WR(e,n);return{...e,...t}}function WR(n,e){const t=xe((e==null?void 0:e.rtl)??oR),i=It(()=>t.value[n.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:It(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}const bl={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function $R(n,e){const t=[];let i=[];const s=tp(n),r=np(n),a=(s.getDay()-bl[e.slice(-2).toUpperCase()]+7)%7,o=(r.getDay()-bl[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<a;l++){const c=new Date(s);c.setDate(c.getDate()-(a-l)),i.push(c)}for(let l=1;l<=r.getDate();l++){const c=new Date(n.getFullYear(),n.getMonth(),l);i.push(c),i.length===7&&(t.push(i),i=[])}for(let l=1;l<7-o;l++){const c=new Date(r);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&t.push(i),t}function qR(n){const e=new Date(n);for(;e.getDay()!==0;)e.setDate(e.getDate()-1);return e}function XR(n){const e=new Date(n);for(;e.getDay()!==6;)e.setDate(e.getDate()+1);return e}function tp(n){return new Date(n.getFullYear(),n.getMonth(),1)}function np(n){return new Date(n.getFullYear(),n.getMonth()+1,0)}function YR(n){const e=n.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const jR=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function ip(n){if(n==null)return new Date;if(n instanceof Date)return n;if(typeof n=="string"){let e;if(jR.test(n))return YR(n);if(e=Date.parse(n),!isNaN(e))return new Date(e)}return null}const Bf=new Date(2e3,0,2);function KR(n){const e=bl[n.slice(-2).toUpperCase()];return Vh(7).map(t=>{const i=new Date(Bf);i.setDate(Bf.getDate()+e+t);const s=new Intl.DateTimeFormat(n,{weekday:"short"}).format(i);return s.charAt(0).toUpperCase()+s.slice(1)})}function ZR(n,e,t,i){const s=ip(n)??new Date,r=i==null?void 0:i[e];if(typeof r=="function")return r(s,e,t);let a={};switch(e){case"fullDateWithWeekday":a={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"hours12h":a={hour:"numeric",hour12:!0};break;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":a={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"dayOfMonth":a={day:"numeric"};break;case"shortDate":a={year:"2-digit",month:"numeric",day:"numeric"};break;case"weekdayShort":a={weekday:"short"};break;case"year":a={year:"numeric"};break;default:a=r??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(t,a).format(s)}function JR(n,e){const t=n.toJsDate(e),i=t.getFullYear(),s=Tf(String(t.getMonth()+1),2,"0"),r=Tf(String(t.getDate()),2,"0");return`${i}-${s}-${r}`}function QR(n){const[e,t,i]=n.split("-").map(Number);return new Date(e,t-1,i)}function eP(n,e){const t=new Date(n);return t.setMinutes(t.getMinutes()+e),t}function tP(n,e){const t=new Date(n);return t.setHours(t.getHours()+e),t}function nP(n,e){const t=new Date(n);return t.setDate(t.getDate()+e),t}function iP(n,e){const t=new Date(n);return t.setDate(t.getDate()+e*7),t}function sP(n,e){const t=new Date(n);return t.setMonth(t.getMonth()+e),t}function rP(n){return n.getFullYear()}function aP(n){return n.getMonth()}function oP(n){return new Date(n.getFullYear(),n.getMonth()+1,1)}function lP(n){return n.getHours()}function cP(n){return n.getMinutes()}function uP(n){return new Date(n.getFullYear(),0,1)}function fP(n){return new Date(n.getFullYear(),11,31)}function dP(n,e){return Tl(n,e[0])&&pP(n,e[1])}function hP(n){const e=new Date(n);return e instanceof Date&&!isNaN(e.getTime())}function Tl(n,e){return n.getTime()>e.getTime()}function pP(n,e){return n.getTime()<e.getTime()}function Hf(n,e){return n.getTime()===e.getTime()}function mP(n,e){return n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function _P(n,e){return n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function gP(n,e,t){const i=new Date(n),s=new Date(e);return t==="month"?i.getMonth()-s.getMonth()+(i.getFullYear()-s.getFullYear())*12:Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24))}function vP(n,e){const t=new Date(n);return t.setHours(e),t}function MP(n,e){const t=new Date(n);return t.setMinutes(e),t}function xP(n,e){const t=new Date(n);return t.setMonth(e),t}function SP(n,e){const t=new Date(n);return t.setFullYear(e),t}function yP(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate())}function EP(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate(),23,59,59,999)}class bP{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return ip(e)}toJsDate(e){return e}toISO(e){return JR(this,e)}parseISO(e){return QR(e)}addMinutes(e,t){return eP(e,t)}addHours(e,t){return tP(e,t)}addDays(e,t){return nP(e,t)}addWeeks(e,t){return iP(e,t)}addMonths(e,t){return sP(e,t)}getWeekArray(e){return $R(e,this.locale)}startOfWeek(e){return qR(e)}endOfWeek(e){return XR(e)}startOfMonth(e){return tp(e)}endOfMonth(e){return np(e)}format(e,t){return ZR(e,t,this.locale,this.formats)}isEqual(e,t){return Hf(e,t)}isValid(e){return hP(e)}isWithinRange(e,t){return dP(e,t)}isAfter(e,t){return Tl(e,t)}isBefore(e,t){return!Tl(e,t)&&!Hf(e,t)}isSameDay(e,t){return mP(e,t)}isSameMonth(e,t){return _P(e,t)}setMinutes(e,t){return MP(e,t)}setHours(e,t){return vP(e,t)}setMonth(e,t){return xP(e,t)}setYear(e,t){return SP(e,t)}getDiff(e,t,i){return gP(e,t,i)}getWeekdays(){return KR(this.locale)}getYear(e){return rP(e)}getMonth(e){return aP(e)}getNextMonth(e){return oP(e)}getHours(e){return lP(e)}getMinutes(e){return cP(e)}startOfDay(e){return yP(e)}endOfDay(e){return EP(e)}startOfYear(e){return uP(e)}endOfYear(e){return fP(e)}}const TP=Symbol.for("vuetify:date-options"),zf=Symbol.for("vuetify:date-adapter");function AP(n,e){const t=wi({adapter:bP,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},n);return{options:t,instance:wP(t,e)}}function wP(n,e){const t=Yt(typeof n.adapter=="function"?new n.adapter({locale:n.locale[e.current.value]??e.current.value,formats:n.formats}):n.adapter);return wt(e.current,i=>{t.locale=n.locale[i]??i??t.locale}),t}const Gf=Symbol.for("vuetify:display"),Vf={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},CP=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Vf;return wi(Vf,n)};function Wf(n){return Vn&&!n?window.innerWidth:typeof n=="object"&&n.clientWidth||0}function $f(n){return Vn&&!n?window.innerHeight:typeof n=="object"&&n.clientHeight||0}function qf(n){const e=Vn&&!n?window.navigator.userAgent:"ssr";function t(_){return!!e.match(_)}const i=t(/android/i),s=t(/iphone|ipad|ipod/i),r=t(/cordova/i),a=t(/electron/i),o=t(/chrome/i),l=t(/edge/i),c=t(/firefox/i),u=t(/opera/i),f=t(/win/i),d=t(/mac/i),m=t(/linux/i);return{android:i,ios:s,cordova:r,electron:a,chrome:o,edge:l,firefox:c,opera:u,win:f,mac:d,linux:m,touch:cR,ssr:e==="ssr"}}function RP(n,e){const{thresholds:t,mobileBreakpoint:i}=CP(n),s=Rs($f(e)),r=Rs(qf(e)),a=Yt({}),o=Rs(Wf(e));function l(){s.value=$f(),o.value=Wf()}function c(){l(),r.value=qf()}return Ha(()=>{const u=o.value<t.sm,f=o.value<t.md&&!u,d=o.value<t.lg&&!(f||u),m=o.value<t.xl&&!(d||f||u),_=o.value<t.xxl&&!(m||d||f||u),g=o.value>=t.xxl,p=u?"xs":f?"sm":d?"md":m?"lg":_?"xl":"xxl",h=typeof i=="number"?i:t[i],E=o.value<h;a.xs=u,a.sm=f,a.md=d,a.lg=m,a.xl=_,a.xxl=g,a.smAndUp=!u,a.mdAndUp=!(u||f),a.lgAndUp=!(u||f||d),a.xlAndUp=!(u||f||d||m),a.smAndDown=!(d||m||_||g),a.mdAndDown=!(m||_||g),a.lgAndDown=!(_||g),a.xlAndDown=!g,a.name=p,a.height=s.value,a.width=o.value,a.mobile=E,a.mobileBreakpoint=i,a.platform=r.value,a.thresholds=t}),Vn&&window.addEventListener("resize",l,{passive:!0}),{...bd(a),update:c,ssr:!!e}}const PP={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},LP={component:n=>Vt(sp,{...n,class:"mdi"})},DP=[String,Function,Object,Array],Xf=Symbol.for("vuetify:icons"),Qa=Yh({icon:{type:DP},tag:{type:String,required:!0}},"icon");OR()({name:"VComponentIcon",props:Qa(),setup(n,e){let{slots:t}=e;return()=>{const i=n.icon;return Pe(n.tag,null,{default:()=>{var s;return[n.icon?Pe(i,null,null):(s=t.default)==null?void 0:s.call(t)]}})}}});const IP=Rr({name:"VSvgIcon",inheritAttrs:!1,props:Qa(),setup(n,e){let{attrs:t}=e;return()=>Pe(n.tag,Vd(t,{style:null}),{default:()=>[Pe("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(n.icon)?n.icon.map(i=>Array.isArray(i)?Pe("path",{d:i[0],"fill-opacity":i[1]},null):Pe("path",{d:i},null)):Pe("path",{d:n.icon},null)])]})}});Rr({name:"VLigatureIcon",props:Qa(),setup(n){return()=>Pe(n.tag,null,{default:()=>[n.icon]})}});const sp=Rr({name:"VClassIcon",props:Qa(),setup(n){return()=>Pe(n.tag,{class:n.icon},null)}}),UP={svg:{component:IP},class:{component:sp}};function FP(n){return wi({defaultSet:"mdi",sets:{...UP,mdi:LP},aliases:{...PP,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},n)}const Yf=Symbol.for("vuetify:theme");function jf(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function kP(){var i,s;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jf();const e=jf();if(!n)return{...e,isDisabled:!0};const t={};for(const[r,a]of Object.entries(n.themes??{})){const o=a.dark||r==="dark"?(i=e.themes)==null?void 0:i.dark:(s=e.themes)==null?void 0:s.light;t[r]=wi(o,a)}return wi(e,{...n,themes:t})}function NP(n){const e=kP(n),t=xe(e.defaultTheme),i=xe(e.themes),s=It(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const m=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const _ of e.variations.colors){const g=m.colors[_];if(g)for(const p of["lighten","darken"]){const h=p==="lighten"?LR:DR;for(const E of Vh(e.variations[p],1))m.colors[`${_}-${p}-${E}`]=CR(h(ii(g),E))}}for(const _ of Object.keys(m.colors)){if(/^on-[a-z]/.test(_)||m.colors[`on-${_}`])continue;const g=`on-${_}`,p=ii(m.colors[_]);m.colors[g]=UR(p)}}return u}),r=It(()=>s.value[t.value]),a=It(()=>{const u=[];r.value.dark&&Ni(u,":root",["color-scheme: dark"]),Ni(u,":root",Kf(r.value));for(const[_,g]of Object.entries(s.value))Ni(u,`.v-theme--${_}`,[`color-scheme: ${g.dark?"dark":"normal"}`,...Kf(g)]);const f=[],d=[],m=new Set(Object.values(s.value).flatMap(_=>Object.keys(_.colors)));for(const _ of m)/^on-[a-z]/.test(_)?Ni(d,`.${_}`,[`color: rgb(var(--v-theme-${_})) !important`]):(Ni(f,`.bg-${_}`,[`--v-theme-overlay-multiplier: var(--v-theme-${_}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${_})) !important`,`color: rgb(var(--v-theme-on-${_})) !important`]),Ni(d,`.text-${_}`,[`color: rgb(var(--v-theme-${_})) !important`]),Ni(d,`.border-${_}`,[`--v-border-color: var(--v-theme-${_})`]));return u.push(...f,...d),u.map((_,g)=>g===0?_:`    ${_}`).join("")});function o(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const m=f.push(o);Vn&&wt(a,()=>{m.patch(o)})}else Vn?(f.addHeadObjs(It(o)),Ha(()=>f.updateDOM())):f.addHeadObjs(o());else{let _=function(){if(typeof document<"u"&&!m){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",e.cspNonce&&g.setAttribute("nonce",e.cspNonce),m=g,document.head.appendChild(m)}m&&(m.innerHTML=a.value)};var d=_;let m=Vn?document.getElementById("vuetify-theme-stylesheet"):null;Vn?wt(a,_,{immediate:!0}):_()}}const c=It(()=>e.isDisabled?void 0:`v-theme--${t.value}`);return{install:l,isDisabled:e.isDisabled,name:t,themes:i,current:r,computedThemes:s,themeClasses:c,styles:a,global:{name:t,current:r}}}function Ni(n,e,t){n.push(`${e} {
`,...t.map(i=>`  ${i};
`),`}
`)}function Kf(n){const e=n.dark?2:1,t=n.dark?1:2,i=[];for(const[s,r]of Object.entries(n.colors)){const a=ii(r);i.push(`--v-theme-${s}: ${a.r},${a.g},${a.b}`),s.startsWith("on-")||i.push(`--v-theme-${s}-overlay-multiplier: ${IR(r)>.18?e:t}`)}for(const[s,r]of Object.entries(n.variables)){const a=typeof r=="string"&&r.startsWith("#")?ii(r):void 0,o=a?`${a.r}, ${a.g}, ${a.b}`:void 0;i.push(`--v-${s}: ${o??r}`)}return i}function rp(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...t}=n,i=wi(e,t),{aliases:s={},components:r={},directives:a={}}=i,o=FR(i.defaults),l=RP(i.display,i.ssr),c=NP(i.theme),u=FP(i.icons),f=VR(i.locale),d=AP(i.date,f);return{install:_=>{for(const g in a)_.directive(g,a[g]);for(const g in r)_.component(g,r[g]);for(const g in s)_.component(g,Rr({...s[g],name:g,aliasName:s[g].name}));if(c.install(_),_.provide(yr,o),_.provide(Gf,l),_.provide(Yf,c),_.provide(Xf,u),_.provide(Of,f),_.provide(TP,d.options),_.provide(zf,d.instance),Vn&&i.ssr)if(_.$nuxt)_.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:g}=_;_.mount=function(){const p=g(...arguments);return Ws(()=>l.update()),_.mount=g,p}}Zh.reset(),_.mixin({computed:{$vuetify(){return Yt({defaults:Ts.call(this,yr),display:Ts.call(this,Gf),theme:Ts.call(this,Yf),icons:Ts.call(this,Xf),locale:Ts.call(this,Of),date:Ts.call(this,zf)})}}})},defaults:o,display:l,theme:c,icons:u,locale:f,date:d}}const OP="3.4.9";rp.version=OP;function Ts(n){var i,s;const e=this.$,t=((i=e.parent)==null?void 0:i.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(t&&n in t)return t[n]}const BP=rp(),HP="modulepreload",zP=function(n){return"/app2/"+n},Zf={},GP=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.all(t.map(l=>{if(l=zP(l),l in Zf)return;Zf[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!i)for(let m=r.length-1;m>=0;m--){const _=r[m];if(_.href===l&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":HP,c||(d.as="script",d.crossOrigin=""),d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((m,_)=>{d.addEventListener("load",m),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};async function VP(){(await GP(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}VP();const WP=P_();w_(rR).use(BP).use(WP).mount("#app");
//# sourceMappingURL=index-OmG9WeV5.js.map
