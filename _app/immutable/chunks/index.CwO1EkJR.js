const P="AIzaSyBGF2E59arX14AeWisWBTnPFskXKWS-TcI",y="1wjEllGmrOEUbwKLXkURFQSZVZyfw-J2-T_lOX2FAJiw";function L(l){return l.filter(e=>e!=="")}function p(l,e){return l?.reduce((a,I,c)=>{if(e?.[c]){const f=e[c].values?.reduce((i,r,o)=>{let E={};const t=["Entry Tag","Entry Date","Username","Score","Portray","Resonance","Amplification","Name"],A=t.slice(0,4),S=[r.slice(4,8),r.slice(8,12),r.slice(12,16),r.slice(16,20)].map((s,_)=>{let n={};return n[t[4]]=s[0],n[t[5]]=s[1],n[t[6]]=s[2],n[t[7]]=s[3],n});return A.forEach((s,_)=>{E[s]=r[_]}),E.characters=S,i.push(E),i},[])??[];e[c].values=f,a[I]=e[c]}return a},{})}export{y as P,P as a,L as f,p};
