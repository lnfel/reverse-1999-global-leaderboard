var U=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var s=(e,t,r)=>(U(e,t,"read from private field"),r?r.call(e):t.get(e)),j=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},G=(e,t,r,o)=>(U(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r);import{_ as a}from"../chunks/preload-helper.CRk0x-X1.js";import{r as et}from"../chunks/index.CT8Tde97.js";import{p as q}from"../chunks/proxy.BjlMx0ws.js";import{b as ot,c as at,m as it,$ as st,p as nt,ag as _t,a4 as mt,g as D,s as M,ah as ut,a as dt,e as S,t as lt}from"../chunks/runtime.C2Zc6Vci.js";import{h as ct,m as ft,u as vt,s as pt}from"../chunks/render.BSFr2KKI.js";import"../chunks/disclose-version.Bg9kRutz.js";import{i as L}from"../chunks/if.MdFLc77f.js";import{a as n,t as X,b as c,f as d,s as W,c as ht,n as gt}from"../chunks/template.DJK7smhD.js";import{b as h}from"../chunks/this.BsltOBbE.js";import{p as R}from"../chunks/props.DcQzd0wf.js";import{o as Et}from"../chunks/index-client.VlGoYQNb.js";function g(e,t){let r,o;ot(()=>{r!==(r=e())&&(o&&(it(o),o=null),r&&(o=at(()=>t(r))))})}function bt(e){return class extends Pt{constructor(t){super({component:e,...t})}}}var f,_;class Pt{constructor(t){j(this,f,void 0);j(this,_,void 0);const r=q({...t.props||{},$$events:{}},!1);G(this,_,(t.hydrate?ct:ft)(t.component,{target:t.target,props:r,context:t.context,intro:t.intro,recover:t.recover})),G(this,f,r.$$events);for(const o of Object.keys(s(this,_)))o==="$set"||o==="$destroy"||o==="$on"||st(this,o,{get(){return s(this,_)[o]},set(l){s(this,_)[o]=l},enumerable:!0});s(this,_).$set=o=>{Object.assign(r,o)},s(this,_).$destroy=()=>{vt(s(this,_))}}$set(t){s(this,_).$set(t)}$on(t,r){s(this,f)[t]=s(this,f)[t]||[];const o=(...l)=>r.call(this,...l);return s(this,f)[t].push(o),()=>{s(this,f)[t]=s(this,f)[t].filter(l=>l!==o)}}$destroy(){s(this,_).$destroy()}}f=new WeakMap,_=new WeakMap;function Ot(e){return et.map(t=>t.toLowerCase().split(" ").join("-")).includes(e)||e==="stats"}const Bt={raid:Ot};var Lt=X('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Rt=X("<!> <!>",1);function At(e,t){nt(t,!0);let r=R(t,"components",15,()=>q([])),o=R(t,"data_0",3,null),l=R(t,"data_1",3,null),I=R(t,"data_2",3,null),z=R(t,"data_3",3,null);_t(()=>t.stores.page.set(t.page)),mt(()=>{t.stores,t.page,t.constructors,r(),t.form,o(),l(),I(),z(),t.stores.page.notify()});let T=S(!1),B=S(!1),F=S(null);Et(()=>{const p=t.stores.page.subscribe(()=>{D(T)&&(M(B,!0),ut().then(()=>{M(F,q(document.title||"untitled page"))}))});return M(T,!0),p});var H=Rt(),J=d(H);L(J,()=>t.constructors[1],p=>{var v=c(),b=d(v);g(()=>t.constructors[0],E=>{h(E(b,{get data(){return o()},children:(i,Dt)=>{var K=c(),Z=d(K);L(Z,()=>t.constructors[2],V=>{var P=c(),y=d(P);g(()=>t.constructors[1],x=>{h(x(y,{get data(){return l()},children:(m,It)=>{var N=c(),$=d(N);L($,()=>t.constructors[3],k=>{var O=c(),w=d(O);g(()=>t.constructors[2],C=>{h(C(w,{get data(){return I()},children:(u,Tt)=>{var Q=c(),tt=d(Q);g(()=>t.constructors[3],rt=>{h(rt(tt,{get data(){return z()},get form(){return t.form}}),A=>r()[3]=A,()=>{var A;return(A=r())==null?void 0:A[3]})}),n(u,Q)},$$slots:{default:!0}}),u=>r()[2]=u,()=>{var u;return(u=r())==null?void 0:u[2]})}),n(k,O)},k=>{var O=c(),w=d(O);g(()=>t.constructors[2],C=>{h(C(w,{get data(){return I()},get form(){return t.form}}),u=>r()[2]=u,()=>{var u;return(u=r())==null?void 0:u[2]})}),n(k,O)}),n(m,N)},$$slots:{default:!0}}),m=>r()[1]=m,()=>{var m;return(m=r())==null?void 0:m[1]})}),n(V,P)},V=>{var P=c(),y=d(P);g(()=>t.constructors[1],x=>{h(x(y,{get data(){return l()},get form(){return t.form}}),m=>r()[1]=m,()=>{var m;return(m=r())==null?void 0:m[1]})}),n(V,P)}),n(i,K)},$$slots:{default:!0}}),i=>r()[0]=i,()=>{var i;return(i=r())==null?void 0:i[0]})}),n(p,v)},p=>{var v=c(),b=d(v);g(()=>t.constructors[0],E=>{h(E(b,{get data(){return o()},get form(){return t.form}}),i=>r()[0]=i,()=>{var i;return(i=r())==null?void 0:i[0]})}),n(p,v)});var Y=W(W(J,!0));L(Y,()=>D(T),p=>{var v=Lt(),b=ht(v);L(b,()=>D(B),E=>{var i=gt(E);lt(()=>pt(i,D(F))),n(E,i)}),n(p,v)}),n(e,H),dt()}const Ft=bt(At),Ht=[()=>a(()=>import("../nodes/0.B6UQF23T.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>a(()=>import("../nodes/1.DtMMrNVu.js"),__vite__mapDeps([6,1,4,2,3,5,7,8,9,10,11]),import.meta.url),()=>a(()=>import("../nodes/2.5ejK7EGi.js"),__vite__mapDeps([12,1,4,3,13,14]),import.meta.url),()=>a(()=>import("../nodes/3.BmnSOfiT.js"),__vite__mapDeps([15,16,1,4,2,3,5,17,13,18,19,7,8,9,10,11,20,21,22,14]),import.meta.url),()=>a(()=>import("../nodes/4.CDr-FaM6.js"),__vite__mapDeps([23,24,1,4,2,3,5,17,25,26,27,13,18,19,7,8,9,10,11,28,21,29,30,14]),import.meta.url),()=>a(()=>import("../nodes/5.Bft8_6UJ.js"),__vite__mapDeps([31,1,4,2,3,5,7,8,9,10,11]),import.meta.url),()=>a(()=>import("../nodes/6.CzfCGuwT.js"),__vite__mapDeps([32,24,1,4,2,3,5,25,13]),import.meta.url),()=>a(()=>import("../nodes/7.C1OoCCOu.js"),__vite__mapDeps([33,1,3,4,5,22,2,17,18,19,20,21,9,10]),import.meta.url),()=>a(()=>import("../nodes/8.Dj54Nnvk.js"),__vite__mapDeps([34,35,1,3,4,18,20,9,10,36]),import.meta.url),()=>a(()=>import("../nodes/9.CBM9EGLU.js"),__vite__mapDeps([37,1,3,4,5]),import.meta.url),()=>a(()=>import("../nodes/10.B2IQOcwn.js"),__vite__mapDeps([38,1,3,4,5]),import.meta.url),()=>a(()=>import("../nodes/11.FaXtHKi0.js"),__vite__mapDeps([39,40,11]),import.meta.url),()=>a(()=>import("../nodes/12.DJjtdbsX.js"),__vite__mapDeps([41,16,1,4,2,3,5,17,25,26,27,18,19,42,7,8,9,10,11,28,21,29,43]),import.meta.url),()=>a(()=>import("../nodes/13.YVduOxz7.js"),__vite__mapDeps([44,40,11,10,1]),import.meta.url),()=>a(()=>import("../nodes/14.nc3SpaYu.js"),__vite__mapDeps([45,16,1,4,2,3,5,17,25,26,27,18,42,20,7,8,9,10,11,28,19,21,29,46]),import.meta.url),()=>a(()=>import("../nodes/15.Co6Z3NEX.js"),__vite__mapDeps([47,1,4,2,3,5,26,27,18,42,17]),import.meta.url),()=>a(()=>import("../nodes/16.RBcn971s.js"),__vite__mapDeps([48,1]),import.meta.url)],Jt=[],Kt={"/(main)":[9,[3]],"/(main)/leaderboard":[10,[3,4],[,5]],"/(main)/leaderboard/raid/[raid=raid]":[12,[3,4],[,5]],"/(main)/leaderboard/stats":[13,[3,4],[,5]],"/(main)/leaderboard/stats/[raid=raid]":[14,[3,4],[,5]],"/(main)/leaderboard/[...path]":[11,[3,4],[,5]],"/(main)/prototype":[-16,[3]],"/(development)/storm-pixi":[8,[2]],"/(development)/storm":[7,[2]],"/(main)/stream":[16,[3,6]]},Nt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Kt as dictionary,Nt as hooks,Bt as matchers,Ht as nodes,Ft as root,Jt as server_loads};
//# sourceMappingURL=app.6xqnEUL5.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.B6UQF23T.js","../chunks/disclose-version.Bg9kRutz.js","../chunks/render.BSFr2KKI.js","../chunks/template.DJK7smhD.js","../chunks/runtime.C2Zc6Vci.js","../chunks/svelte-head.D4WIdBQT.js","../nodes/1.DtMMrNVu.js","../chunks/stores.Ckbj9_XZ.js","../chunks/entry.BDTU8x7V.js","../chunks/index-client.VlGoYQNb.js","../chunks/paths.B_7Dn9K0.js","../chunks/control.CYgJF_JY.js","../nodes/2.5ejK7EGi.js","../chunks/snippet.D3k6wUhg.js","../assets/app.DPoU8Gvh.css","../nodes/3.BmnSOfiT.js","../chunks/index.CT8Tde97.js","../chunks/proxy.BjlMx0ws.js","../chunks/attributes.Cv1ilxUd.js","../chunks/class.C6jkPbH_.js","../chunks/this.BsltOBbE.js","../chunks/props.DcQzd0wf.js","../chunks/Storm.XODLabvX.js","../nodes/4.CDr-FaM6.js","../chunks/index.Oz4jCu1M.js","../chunks/await.BS06Sh4X.js","../chunks/if.MdFLc77f.js","../chunks/each.CZx_R7Uq.js","../chunks/LoadingSpinner.Dn8c2RTK.js","../assets/LoadingSpinner.rRSnnFtd.css","../assets/4.CMm9E_Ec.css","../nodes/5.Bft8_6UJ.js","../nodes/6.CzfCGuwT.js","../nodes/7.C1OoCCOu.js","../nodes/8.Dj54Nnvk.js","../chunks/8.CwZgqg-q.js","../chunks/preload-helper.CRk0x-X1.js","../nodes/9.CBM9EGLU.js","../nodes/10.B2IQOcwn.js","../nodes/11.FaXtHKi0.js","../chunks/index.g5YcAAdQ.js","../nodes/12.DJjtdbsX.js","../chunks/select.CM0YoJAf.js","../assets/12.TXeIis2C.css","../nodes/13.YVduOxz7.js","../nodes/14.nc3SpaYu.js","../assets/14.Dt6u5CbB.css","../nodes/15.Co6Z3NEX.js","../nodes/16.RBcn971s.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}