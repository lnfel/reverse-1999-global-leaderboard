const o="AIzaSyBGF2E59arX14AeWisWBTnPFskXKWS-TcI",G="1wjEllGmrOEUbwKLXkURFQSZVZyfw-J2-T_lOX2FAJiw";function I(E){return E.filter(n=>n!=="")}function O(E,n){const c=["Entry Tag","Entry Date","Username","Score","Portray","Resonance","Amplification","Name"],A=c.slice(0,4);return E==null?void 0:E.reduce((l,y,f)=>{var _;if(n!=null&&n[f]){const P=((_=n[f].values)==null?void 0:_.reduce((S,s,L)=>{let r={};const p=[s.slice(4,8),s.slice(8,12),s.slice(12,16),s.slice(16,20)].map((i,t)=>{let e={};if(i[0]||i[1]||i[2]||i[3])return e[c[4]]=i[0],e[c[5]]=i[1],e[c[6]]=i[2],e[c[7]]=i[3],e}).filter(i=>i!==void 0);return A.forEach((i,t)=>{i==="Score"&&(s[t]=Number(s[t].replace(/,/g,""))),i==="Entry Date"&&(s[t]=new Date(s[t])),r[i]=s[t]}),r.characters=p,S.push(r),S},[]))??[];n[f].values=P,l[y]=n[f]}return l},{})}export{G as P,o as a,I as f,O as p};
//# sourceMappingURL=index.Oz4jCu1M.js.map