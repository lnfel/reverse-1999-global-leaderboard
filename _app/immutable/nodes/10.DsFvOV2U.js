import"../chunks/disclose-version.Bg9kRutz.js";import{p as Rt,e as J,t as u,a as Bt,s as R,g as d,G as c,D as Mt,aa as Ot}from"../chunks/runtime.C2Zc6Vci.js";import{d as zt,s as p}from"../chunks/render.BSFr2KKI.js";import{p as B}from"../chunks/proxy.BjlMx0ws.js";import{a as At}from"../chunks/await.BS06Sh4X.js";import{i as P}from"../chunks/if.MdFLc77f.js";import{e as A,i as E}from"../chunks/each.CZx_R7Uq.js";import{a as i,t as m,$ as Et,s as r,c as t,b as x,f as k}from"../chunks/template.DJK7smhD.js";import{h as Gt}from"../chunks/svelte-head.D4WIdBQT.js";import{s as K,h as It}from"../chunks/attributes.Cv1ilxUd.js";import{s as qt,t as Ft}from"../chunks/class.C6jkPbH_.js";import{b as Jt}from"../chunks/select.CM0YoJAf.js";import{u as Kt,s as Wt,p as Ht}from"../chunks/stores.DQhdrtSK.js";import{b as Qt}from"../chunks/paths.3tJfktJx.js";import{o as Vt,g as Xt}from"../chunks/entry.BCwrQinH.js";import{o as Yt}from"../chunks/index-client.CPyGcluf.js";import{L as Zt}from"../chunks/LoadingSpinner.Dn8c2RTK.js";const $t=["Rank","Username","Score","Team","Entry Tag","Entry Date"],te={37:{thumbnail:"https://www.prydwen.gg/static/a9df0a9f798cde750e47fe7b40c4cb61/60b4d/64_icon.webp"},6:{thumbnail:"https://www.prydwen.gg/static/c3b16c3397767b4737aa9bb4ff4ffafc/60b4d/65_icon.webp"},"A Knight":{thumbnail:"https://www.prydwen.gg/static/12a9276bf3b49bb3cdde0543129d129f/60b4d/7_icon.webp"},Lilya:{thumbnail:"https://www.prydwen.gg/static/54312ecf859812f00722a142e9f6a8a2/60b4d/4_icon.webp"},Regulus:{thumbnail:"https://www.prydwen.gg/static/7837f8320689ec0c511ca55ac3f48fbf/60b4d/3_icon.webp"},"Tooth Fairy":{thumbnail:"https://www.prydwen.gg/static/dffcad8d709f386addef5085f913fa0e/60b4d/56_icon.webp"},"Kaalaa Baunaa":{thumbnail:"https://www.prydwen.gg/static/c746ac1cf15c943191df0b3f0938dec9/60b4d/62_icon.webp"},Pickles:{thumbnail:"https://www.prydwen.gg/static/b2f0e0c2a66f1d950723a013bb843f4e/60b4d/54_icon.webp"},Necrologist:{thumbnail:"https://www.prydwen.gg/static/44afab4c5d9e66ecb0f48194fbde44ba/60b4d/20_icon.webp"},"Balloon Party":{thumbnail:"https://www.prydwen.gg/static/7c5aacbd1d7debf7b5e171ef5b8eb21d/60b4d/19_icon.webp"},Bkornblume:{thumbnail:"https://www.prydwen.gg/static/f5c8a1e76ffa90a6a3cc1628543264e7/60b4d/16_icon.webp"},Spathodea:{thumbnail:"https://www.prydwen.gg/static/dbceab4cd300e4d053571a25c9ace92b/60b4d/65_icon.webp"},Sweetheart:{thumbnail:"https://www.prydwen.gg/static/ebe0a115613ed47b1bb61dda6861207d/60b4d/13_icon.webp"},Melania:{thumbnail:"https://www.prydwen.gg/static/4abbfd75d20606a1f0b2f2eb6ada77a2/60b4d/53_icon.webp"},Jessica:{thumbnail:"https://www.prydwen.gg/static/d1016961dc8a59f5bc3a3d6d62ba841b/60b4d/58_icon.webp"},"Jiu Niangzi":{thumbnail:"https://www.prydwen.gg/static/865bb8cb048103c43d16b2d45d000a4e/60b4d/69_icon.webp"},"An-an Lee":{thumbnail:"https://www.prydwen.gg/static/0b86bc3c4710ab7fb76f3c30adfd1283/60b4d/0_icon.webp"},"Ms. NewBabel":{thumbnail:"https://www.prydwen.gg/static/ac2895e23af4900d682d5fd3ebfd2bda/60b4d/11_icon.webp"},Ezra:{thumbnail:"https://www.prydwen.gg/static/8069d3e37cdd5917d78f9bd188c5e4b3/60b4d/66_icon.webp"},Shamane:{thumbnail:"https://www.prydwen.gg/static/141d00528dcb72b350cfc725386985fa/60b4d/60_icon.webp"},Leilani:{thumbnail:"https://www.prydwen.gg/static/30e7f4de8a38e2c4e5fb61ee96527b52/60b4d/41_icon.webp"},"Darley Clatter":{thumbnail:"https://www.prydwen.gg/static/e2d29a713c58c599f6a55423eb08e5fa/60b4d/45_icon.webp"}},ee=async({parent:f,params:o,url:b})=>({headers:$t,characterMap:te,categories:["f2p","ffa"],category:b.searchParams.get("category")??"f2p"}),Be=Object.freeze(Object.defineProperty({__proto__:null,load:ee},Symbol.toStringTag,{value:"Module"}));function ae(f,o){const b=new URLSearchParams(window.location.search);b.set("category",f.currentTarget.value);const S=new URL(window.location.toString());S.search=b.toString(),console.log(S.toString()),o(S.toString())}function re(f){f.stopPropagation();const o=f.currentTarget.closest(".character");o&&(o.dataset.current=o.dataset.state==="open"?"inactive":"active",document.querySelectorAll('.character[data-state="open"]:not([data-current="inactive"])').forEach(S=>{S.dataset.state="close"}),o.dataset.state=o.dataset.state==="open"?"close":"open")}var se=m('<option class="svelte-pt40hr"> </option>'),ne=(f,o,b)=>o(b().toLowerCase()),oe=m('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up w-4 h-4 svelte-pt40hr"><path d="m18 15-6-6-6 6" class="svelte-pt40hr"></path></svg>'),ce=m('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4 svelte-pt40hr"><path d="m6 9 6 6 6-6" class="svelte-pt40hr"></path></svg>'),ie=m('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down w-4 h-4 svelte-pt40hr"><path d="m7 15 5 5 5-5" class="svelte-pt40hr"></path><path d="m7 9 5-5 5 5" class="svelte-pt40hr"></path></svg>'),le=m('<th scope="col" class="text-lg whitespace-nowrap text-white bg-tuscany-600 svelte-pt40hr"><button type="button" class="flex items-center gap-1 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 px-4 py-2 svelte-pt40hr"><span class="svelte-pt40hr"> </span> <!></button></th>'),de=m('<th scope="col" class="px-4 py-2 text-lg whitespace-nowrap text-white bg-tuscany-600 svelte-pt40hr"> </th>'),pe=m('<div data-state="close" data-current="inactive" class="character group dropdown relative svelte-pt40hr"><button aria-label="Toggle team info" type="button" class="outline-none svelte-pt40hr"><img loading="lazy" width="40" height="40" class="inline w-10 h-10 svelte-pt40hr"></button> <div class="dropdown-content group-data-[state=close]:hidden absolute left-1/2 -translate-x-1/2 z-10 text-white bg-tuscany-600 p-2 space-y-2 svelte-pt40hr"><div class="crimson-text-bold tracking-wide svelte-pt40hr"> </div> <ul class="text-sm svelte-pt40hr"><li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4 svelte-pt40hr"><div class="svelte-pt40hr">Resonance level</div> <div class="svelte-pt40hr"> </div></li> <li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4 svelte-pt40hr"><div class="svelte-pt40hr">Portray</div> <div class="svelte-pt40hr"> </div></li> <li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4 svelte-pt40hr"><div class="svelte-pt40hr">Amplification</div> <div class="svelte-pt40hr"> </div></li></ul></div></div>'),ve=m('<tr class="raid-entry odd:bg-tuscany-200 even:bg-tuscany-100 svelte-pt40hr"><td class="raid-entry-rank px-4 py-2 dark:text-slate-800 svelte-pt40hr"></td><td class="raid-entry-username px-4 py-2 dark:text-slate-800 svelte-pt40hr"> </td><td class="raid-entry-score px-4 py-2 dark:text-slate-800 svelte-pt40hr"> </td><td class="raid-entry-characters dark:text-slate-800 svelte-pt40hr"><div class="flex items-center min-w-48 px-4 py-2 svelte-pt40hr"></div></td><td class="px-4 py-2 dark:text-slate-800 svelte-pt40hr"> </td><td class="px-4 py-2 dark:text-slate-800 svelte-pt40hr"> </td></tr>'),we=m('<tr class="svelte-pt40hr"><td colspan="6" class="skeleton crimson-text-regular tracking-wider border border-tuscany-600 svelte-pt40hr"><div class="flex items-center justify-center gap-2 py-6 svelte-pt40hr"><!> <span class="svelte-pt40hr">Loading ranking data</span></div></td></tr>'),he=m('<main class="flex-grow space-y-6 svelte-pt40hr"><h3 class="crimson-text-bold text-tuscany-600 dark:text-white text-2xl px-10 md:px-0 svelte-pt40hr"> </h3> <div class="flex items-center gap-2 px-10 md:px-0 svelte-pt40hr"><label for="category" class="svelte-pt40hr">Category</label> <select name="category" id="category" class="appearance-none cursor-pointer text-white text-sm bg-tuscany-600 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 pl-4 pr-8 py-1 bg-[right_0.5rem_center] bg-no-repeat bg-[length:1.5em_1.5em] svelte-pt40hr"></select></div> <div class="table-container overflow-x-auto svelte-pt40hr"><table class="w-full text-left border-collapse border border-tuscany-600 svelte-pt40hr"><thead class="svelte-pt40hr"><tr class="svelte-pt40hr"></tr></thead><tbody><!></tbody></table></div></main>');function Me(f,o){Rt(o,!0);const b={};Kt(b);const S=()=>Wt(Ht,"$page",b);let T=J(B(o.data.category)),_=J(void 0),W=J("pending"),y=B({column:"score",order:"descending"});function ot(a,e){return a.column==="username"&&(a.order==="ascending"?e.sort((s,n)=>new Intl.Collator("en").compare(s.Username,n.Username)):e.sort((s,n)=>new Intl.Collator("en").compare(n.Username,s.Username))),a.column==="score"&&(a.order==="ascending"?e.sort((s,n)=>s.Score-n.Score):e.sort((s,n)=>n.Score-s.Score)),a.column==="entry date"&&(a.order==="ascending"?e.sort((s,n)=>s["Entry Date"].valueOf()-n["Entry Date"].valueOf()):e.sort((s,n)=>n["Entry Date"].valueOf()-s["Entry Date"].valueOf())),e}async function ct(a){y.column===a&&(y.order=y.order==="ascending"?"descending":"ascending"),y.column=a}Vt(async()=>{R(T,B(new URL(window.location.toString()).searchParams.get("category")??"f2p")),R(_,B((await o.data.sheet).raidGroup.find(a=>a.toLowerCase().split(" ").join("-")===window.location.pathname.replace(`${Qt}/leaderboard/`,"").replace("/",""))))}),Yt(async()=>{R(_,B((await o.data.sheet).raidGroup.find(a=>a.toLowerCase().split(" ").join("-")===S().params.raid))),o.data.sheet.then(a=>{var e,s;d(_)&&setTimeout(()=>{R(W,"resolved")},((s=(e=a[d(T)][d(_)])==null?void 0:e.values)==null?void 0:s.length)??0*410)})});var H=he();Gt(a=>{u(()=>Et.title=`${d(_)??""} | Outside the suitcase`)});var Q=t(H),it=t(Q),V=r(r(Q,!0)),lt=t(V),G=r(r(lt,!0));G.__change=[ae,Xt],A(G,73,()=>o.data.categories??[],E,(a,e,s)=>{var n=se(),v,g=t(n);u(()=>p(g,c(e).toUpperCase())),u(()=>{v!==(v=c(e))&&(n.value=(n.__value=c(e))==null?"":c(e))}),i(a,n)});var dt=r(r(V,!0)),pt=t(dt),X=t(pt),vt=t(X),Y=(a,e)=>{let s=()=>e==null?void 0:e().name,n=Mt(()=>Ot(e==null?void 0:e().sortable,()=>!1));var v=x(),g=k(v);P(g,()=>d(n),w=>{var l=le(),h=t(l);h.__click=[ne,ct,s];var M=t(h),U=t(M),I=r(r(M,!0));P(I,()=>y.column===s().toLowerCase(),L=>{var j=x(),O=k(j);P(O,()=>y.order==="ascending",N=>{var D=oe();i(N,D)},N=>{var D=ce();i(N,D)}),i(L,j)},L=>{var j=ie();i(L,j)}),u(()=>{Ft(h,"bg-tuscany-500",y.column===s().toLowerCase()),p(U,s())}),i(w,l)},w=>{var l=de(),h=t(l);u(()=>p(h,s())),i(w,l)}),i(a,v)};A(vt,73,()=>o.data.headers,E,(a,e,s)=>{var n=x(),v=k(n);P(v,()=>["Username","Score","Entry Date"].includes(c(e)),g=>{var w=x(),l=k(w);Y(l,()=>({name:c(e),sortable:!0})),i(g,w)},g=>{var w=x(),l=k(w);Y(l,()=>({name:c(e)})),i(g,w)}),i(a,n)});var Z=r(X),wt=t(Z);At(wt,()=>o.data.sheet,a=>{var e=we(),s=t(e),n=t(s),v=t(n);Zt(v,{}),i(a,e)},(a,e)=>{var s=x(),n=k(s);P(n,()=>d(_),v=>{var g=x(),w=k(g);A(w,65,()=>{var l;return ot(y,((l=d(e)[d(T)][d(_)])==null?void 0:l.values)??[])},E,(l,h,M)=>{var U=ve();K(U,"style",`--animation-order: ${c(M)+1};`);var I=t(U),L=r(I),j=t(L),O=r(L),N=t(O);u(()=>p(N,c(h).Score.toLocaleString()));var D=r(O),ht=t(D);A(ht,73,()=>c(h).characters,E,(mt,C,ge)=>{var tt=x(),ft=k(tt);P(ft,()=>{var z;return(z=o.data.characterMap)==null?void 0:z[c(C).Name]},z=>{var et=pe(),q=t(et);q.__click=[re];var F=t(q),_t=r(r(q,!0)),at=t(_t),yt=t(at),xt=r(r(at,!0)),rt=t(xt),kt=t(rt),St=r(r(kt,!0)),Ct=t(St),st=r(r(rt,!0)),Lt=t(st),jt=r(r(Lt,!0)),Dt=t(jt),Pt=r(r(st,!0)),Tt=t(Pt),Ut=r(r(Tt,!0)),Nt=t(Ut);u(()=>{var nt;K(F,"src",((nt=o.data.characterMap[c(C).Name])==null?void 0:nt.thumbnail)??""),K(F,"alt",c(C).Name),p(yt,c(C).Name),p(Ct,c(C).Resonance),p(Dt,c(C).Portray),p(Nt,c(C).Amplification)}),It(F),i(z,et)}),i(mt,tt)});var $=r(D),bt=t($),gt=r($),ut=t(gt);u(()=>p(ut,c(h)["Entry Date"].toLocaleDateString("en-CA"))),u(()=>{p(j,c(h).Username),p(bt,c(h)["Entry Tag"])}),i(l,U)}),i(v,g)}),i(a,s)}),u(()=>{p(it,d(_)??"Raid Title"),qt(Z,`${(d(W)==="pending"?"loading":"loaded")??""} svelte-pt40hr`)}),Jt(G,()=>d(T),a=>R(T,a)),i(f,H),Bt()}zt(["change","click"]);export{Me as component,Be as universal};
//# sourceMappingURL=10.DsFvOV2U.js.map