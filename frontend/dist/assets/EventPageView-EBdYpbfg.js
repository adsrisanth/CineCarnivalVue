import{_ as p,u as x,o as _,i as m,a as o,b as a,d as t,e as r,F as u,f,t as i,j as h,w as v,E as g,p as w,h as y,k as b}from"./index-9nvinqpn.js";const l=s=>(w("data-v-9d349e7b"),s=s(),y(),s),k={class:"min-h-[100vh] event-list-container bg-[rgb(0,0,0)] flex flex-col gap-8 justify-center py-4 ssm:pb-12 px-8"},j=l(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"text-gray-300 hover:text-gray-100 w-8 h-8"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})],-1)),C=[j],E=l(()=>t("span",{class:"text-center font-montserrat text-[#6cb9b2] font-extrabold tracking-wide text-[40px] sm:text-[46px] relative mt-[74px]"},"Cine Carnival Events",-1)),V={class:"flex justify-center max-md:gap-8 max-ssm:md-6 md:gap-12 flex-wrap sm:mt-12"},I={class:"poster relative top-0 left-0 w-full h-full overflow-hidden"},S=["src","alt"],B={class:"details flex flex-col justify-center gap-4 py-2 pb-4"},L={class:"flex flex-col text-center font-montserrat"},N={class:"py-1 text-gray-200 tracking-wide"},R={class:"py-1 text-gray-300 tracking-wide"},D={class:"flex justify-center"},F={class:"view-btn px-5 font-bold font-montserrat py-2 rounded-3xl text-gray-300 hover:text-gray-100 tracking-wide transition-all hover:transition-all flex justify-center relative text-center w-min"},M={__name:"EventPageView",setup(s){const c=x();return _(()=>{document.title="Events - Cine Carnival",document.querySelector(".event-list-container").scrollIntoView({behavior:"instant"})}),(P,n)=>{const d=m("RouterLink");return o(),a("div",k,[t("button",{onClick:n[0]||(n[0]=e=>r(c).back()),to:{name:"home",params:{to:"group"}},class:"arrow-icon-prev fixed top-5 left-5 duration-500"},C),E,t("div",V,[(o(!0),a(u,null,f(r(g),e=>(o(),a("div",{key:e.index,class:"card relative w-[380px] h-[480px] rounded-3xl overflow-hidden shadow-md"},[t("div",I,[t("img",{src:e.image,alt:e.title,class:"md:w-[280px] md:h-[380px] object-contain"},null,8,S)]),t("div",B,[t("div",L,[t("span",N,i(e.title),1),t("span",R,i(e.category),1)]),t("div",D,[t("button",F,[h(d,{to:{name:"single-event",params:{index:e.index,title:e.title}}},{default:v(()=>[b("View")]),_:2},1032,["to"])])])])]))),128))])])}}},T=p(M,[["__scopeId","data-v-9d349e7b"]]);export{T as default};