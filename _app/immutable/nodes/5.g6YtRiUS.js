import{P as g,a as m,f as R,p as h}from"../chunks/index.C6fQU7Ql.js";import"../chunks/disclose-version.Bg9kRutz.js";import{c as S,p as j,a as _,b as O,d as u,q as f,f as F,t as b,s as w,u as B,g as v,e as A}from"../chunks/custom-element.Bd7BP0Qt.js";import{a as C}from"../chunks/await.CeFd7r0I.js";import{s as D}from"../chunks/snippet.DqBexmgK.js";import{p as P}from"../chunks/props.Cda_5gBt.js";const E=async({fetch:s})=>({sheet:new Promise(async(t,n)=>{var c;const i=await s(`https://sheets.googleapis.com/v4/spreadsheets/${g}/values/F2P!B8:8?majorDimension=ROWS&key=${m}`),a=R(((c=await i.json())==null?void 0:c.values[0])??[]),l=await s(`https://sheets.googleapis.com/v4/spreadsheets/${g}/values:batchGet?ranges=F2P!C10:V&ranges=F2P!Y10:AR&ranges=F2P!AU10:BN&ranges=F2P!BQ10:CJ&ranges=F2P!CM10:DF&majorDimension=ROWS&key=${m}`),e=h(a,(await l.json()).valueRanges),r=await s(`https://sheets.googleapis.com/v4/spreadsheets/${g}/values:batchGet?ranges=FFA!C10:V&ranges=FFA!Y10:AR&ranges=FFA!AU10:BN&ranges=FFA!BQ10:CJ&ranges=FFA!CM10:DF&majorDimension=ROWS&key=${m}`),p=h(a,(await r.json()).valueRanges),d=Object.keys(e);t({headers:a,f2p:e,ffa:p,raidGroup:d})})}),H=Object.freeze(Object.defineProperty({__proto__:null,load:E},Symbol.toStringTag,{value:"Module"}));var G=u(`<pre>
        <code> </code>
    </pre> <div>sheet loaded</div>`,1),I=u("<div>loading</div>"),L=u("<!> <!>",1);function k(s,o){j(o,!0);let t=P(o,"data",7),n=P(o,"children",7);var i=L(),a=F(i);C(a,()=>t().sheet,e=>{var r=I();_(e,r)},(e,r)=>{var p=G(),d=F(p),c=v(A(d)),y=A(c);b(()=>w(y,`
            ${JSON.stringify(B(r),null,4)??""}
        `)),_(e,p)});var l=v(v(a,!0));return D(n,l),_(s,i),O({get data(){return t()},set data(e){t(e),f()},get children(){return n()},set children(e){n(e),f()}})}S(k,{data:{},children:{}},[],[],!0);export{k as component,H as universal};
//# sourceMappingURL=5.g6YtRiUS.js.map