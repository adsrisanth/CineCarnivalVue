import{l as k,r as i,_ as f,a as c,b as d,E as v,p as m,h as g,d as t,m as y,u as S,o as h,e as C,t as o,F as I,f as B,q as V,v as R,j,g as G,s as w}from"./index-9nvinqpn.js";const M=k("register-store",()=>({currentIndex:i(0)})),b=e=>(m("data-v-dfd1ef7c"),e=e(),g(),e),$=b(()=>t("span",{class:"actual-text"}," Register ",-1)),E=b(()=>t("span",{"aria-hidden":"true",class:"hover-text"}," Register ",-1)),D=[$,E],L={__name:"EventRegisterBtn",setup(e){const r=M(),x=()=>{console.log(v[r.currentIndex].register),window.open(v[r.currentIndex].register)};return(_,u)=>(c(),d("button",{onClick:x,class:"button","data-text":"Awesome"},D))}},N=f(L,[["__scopeId","data-v-dfd1ef7c"]]),p=e=>(m("data-v-17638018"),e=e(),g(),e),q={class:"min-h-[100vh] event-container bg-[rgb(0,0,0)] flex flex-col ssm:pb-12"},A={class:"flex flex-col justify-center"},F={class:"poster flex justify-start"},z=["src","alt"],T={class:"poster-data flex flex-col h-full sm:gap-32 gap-12 place-items-start flex-wrap max-sm:flex-col justify-between sm:px-12 sm:pl-[125px] px-8 sm:py-10 py-8"},U=w('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-300 hover:text-gray-100 w-10 h-10 xl:w-12 xl:h-12" data-v-17638018><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-17638018></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-17638018></g><g id="SVGRepo_iconCarrier" data-v-17638018><path d="M16 8L8 16M12 12L16 16M8 8L10 10" class="stroke-gray-200" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-17638018></path></g></svg>',1),H=[U],J={class:"flex flex-col flex-left tracking-wider"},K={class:"flex flex-col gap-10"},O={class:"flex flex-col"},P={class:"font-semibold font-robotoslab text-[30px] opacity-90",style:{filter:"drop-shadow(0 0 15px rgb(255, 255, 255))"}},Q={class:"font-bold font-merriweather md:text-[52px] sm:text-[47px] max-ssm:text-[42px] text-[35px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},W={class:"opacity-85 font-montserrat text-[25px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},X={class:"opacity-85 font-montserrat text-[25px]"},Y=p(()=>t("br",null,null,-1)),Z={class:"opacity-85 font-semibold font-montserrat text-[30px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},tt={class:"flex flex-col gap-12"},et={class:"flex flex-col gap-1"},st=p(()=>t("span",{class:"font-bold text-[25px] sm:text-[30px] tracking-wide font-merriweather"},"Description",-1)),ot={class:"pl-4 text-[18px] max-ssm:text-[16px]"},at={class:"guidelines flex flex-col gap-1"},nt=p(()=>t("span",{class:"font-bold text-[25px] tracking-wide sm:text-[30px] font-merriweather"},"Guidelines",-1)),lt={class:"pl-4 text-[18px] max-ssm:text-[16px]"},it={class:"list-disc pl-4"},rt={class:"flex justify-center flex-col gap-4"},ct={class:"flex gap-3 text-center"},dt={class:"checkbox-wrapper-12"},pt={class:"cbx"},xt=["checked"],_t=p(()=>t("label",{for:"cbx-12"},null,-1)),ut=p(()=>t("svg",{fill:"none",viewBox:"0 0 15 14",height:"14",width:"15"},[t("path",{d:"M2 8.36364L6.23077 12L13 2"})],-1)),vt=w('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-17638018><defs data-v-17638018><filter id="goo-12" data-v-17638018><feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic" data-v-17638018></feGaussianBlur><feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur" data-v-17638018></feColorMatrix><feBlend in2="goo-12" in="SourceGraphic" data-v-17638018></feBlend></filter></defs></svg>',1),ht={key:0,class:"pt-2"},ft={__name:"EventView",setup(e){const r=y(),x=S(),_=i(0),u=i(""),s=i({});i("");const a=i(!1);return h(()=>{document.querySelector(".event-container").scrollIntoView({behavior:"smooth"})}),h(()=>{_.value=r.params.index,u.value=r.params.title,s.value=v[_.value],document.title=`${u.value} -Cine Carnival`}),(mt,n)=>(c(),d("div",q,[t("div",A,[t("div",F,[t("img",{src:s.value.poster,alt:s.value.title,class:"w-[100%] min-h-[400px] max-md:min-h-[300px] max-sm:min-h-[280px] max-vsm:min-h-[200px] object-fill"},null,8,z)]),t("div",T,[t("button",{onClick:n[0]||(n[0]=l=>C(x).back()),to:{name:"home",params:{to:"group"}},class:"arrow-icon-prev z-50 absolute float-right right-10 -mt-4 duration-500 max-md:right-5"},H),t("div",J,[t("div",K,[t("div",O,[t("span",P,o(s.value.club_name),1),t("span",Q,o(s.value.title),1),t("span",W,o(s.value.type),1),t("span",X,o(s.value.category),1),Y,t("span",Z,o(s.value.date),1)]),t("div",tt,[t("div",et,[st,t("span",ot,o(s.value.description),1)]),t("div",at,[nt,t("span",lt,[t("ul",it,[(c(!0),d(I,null,B(s.value.guidelines,l=>(c(),d("li",{key:l},o(l),1))),128))])])]),t("div",rt,[t("div",ct,[t("div",dt,[t("div",pt,[V(t("input",{checked:a.value,"onUpdate:modelValue":n[1]||(n[1]=l=>a.value=l),type:"checkbox",id:"cbx-12"},null,8,xt),[[R,a.value]]),_t,ut]),vt]),t("button",{onClick:n[2]||(n[2]=l=>a.value=!a.value),class:"text-lg relative -mt-0.5 font-montserrat text-gray-300"},"I agree to the guidelines")]),a.value?(c(),d("div",ht,[j(N)])):G("",!0)])])])])])])]))}},wt=f(ft,[["__scopeId","data-v-17638018"]]);export{wt as default};