import{_ as h}from"./AppLayout-bb66d837.js";import{_ as g}from"./PrimaryButton-be3fb67f.js";import{o as s,e as i,b as r,w as m,g as f,a as t,p as x,F as d,h as u,c as _,t as p,f as y}from"./app-6033e376.js";import{_ as b}from"./PropertyItem-adc45abf.js";import{_ as v}from"./BuilderItem-debd5847.js";import{_ as $}from"./CityItem-2febee11.js";import{_ as w}from"./ContactForm-1ba0acef.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputError-5588aa74.js";import"./InputLabel-9e23f215.js";import"./TextInput-24df68ad.js";import"./TextArea-4a2d656d.js";const j={class:"flex justify-start items-center py-4 relative gap-2"},k=t("input",{class:"text-sm leading-none text-left text-gray-600 px-4 h-14 w-full border rounded-lg border-gray-300 outline-none",type:"text",placeholder:"Ex: 2104 Charmaine Lane Amarillo"},null,-1),S={__name:"SearchBar",setup(e){return(o,n)=>(s(),i("div",j,[k,r(g,{class:"h-14"},{default:m(()=>[f("Search")]),_:1})]))}},A={class:"bg-white bg-cover bg-center",style:{"background-image":"url('/images/hero1.jpg')"}},B={class:"relative isolate px-6 pt-12 lg:px-8 backdrop-brightness-50"},P=x('<div class="mx-auto max-w-2xl py-12"><div class="hidden sm:mb-8 sm:flex sm:justify-center"><div class="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20"> A hub for finding your new property. <a href="#" class="font-semibold text-indigo-600"></a></div></div><div class="text-center"><h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Your Hub For Your Preconstruction Projects</h1><p class="mt-6 text-lg leading-8 text-white">A great plateform to buy, sell and rent your properties without any agent or commisions.</p></div></div>',1),F={class:"w-1/2 mx-auto"},V=t("div",{class:"mt-12"},"_",-1),C={__name:"Hero",setup(e){return(o,n)=>(s(),i("div",A,[t("div",B,[P,t("div",F,[r(S)]),V])]))}},H={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]"},N={__name:"PropertyList",props:{data:Object},setup(e){return(o,n)=>(s(),i("div",H,[(s(!0),i(d,null,u(e.data,a=>(s(),_(b,{key:a.id,property:a},null,8,["property"]))),128))]))}},L={class:"flex justify-between items-end"},O={class:"grid grid-cols-1 text-left"},E={class:"mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"},T={class:"text-slate-400 max-w-xl"},Y={key:0},D=["href"],l={__name:"ListTitle",props:{title:String,description:String,url:String},setup(e){return(o,n)=>(s(),i("div",L,[t("div",O,[t("h3",E,p(e.title),1),t("p",T,p(e.description),1)]),e.url?(s(),i("div",Y,[t("a",{class:"text-blue-600 text-lg cursor-pointer",href:e.url},"View All",8,D)])):y("",!0)]))}},Q={class:"container"},U={class:"grid grid-cols-4 gap-4 mt-6"},q={__name:"FeaturedBuilders",props:{builders:Array},setup(e){return(o,n)=>(s(),i("div",Q,[r(l,{title:"Search by Builder",description:"Search for your preconstruction projects by best builders in the town",url:"/builders"}),t("div",U,[(s(!0),i(d,null,u(e.builders,a=>(s(),_(v,{builder:a,key:a.name},null,8,["builder"]))),128))])]))}},z={class:"container"},G={class:"grid grid-cols-4 gap-4 mt-6"},I={__name:"FeaturedCities",props:{cities:Array},setup(e){return(o,n)=>(s(),i("div",z,[r(l,{title:"Search by City",description:"Search for your preconstruction projects by city",url:"/cities"}),t("div",G,[(s(!0),i(d,null,u(e.cities,a=>(s(),_($,{city:a,key:a.name},null,8,["city"]))),128))])]))}},J={class:"container px-16 max-w-7xl mx-auto"},K={class:"mt-16"},M={class:"mt-16"},R={class:"container mt-16 pb-4"},W={class:"grid grid-cols-1"},X={class:"mt-6 w-2/4 text-left"},_t={__name:"Home",props:{properties:Object,builders:Array,cities:Array},setup(e){const o=e,n=[{title:"Featured Projects",description:"A great plateform to buy, sell and rent your properties without any agent or commisions.",data:o.properties.featured,url:"/properties?featured=1"},{title:"Upcoming Projects",description:"A great plateform to buy, sell and rent your properties without any agent or commisions.",data:o.properties.upcoming,url:"/properties?upcoming=1"},{title:"Sold Out Projects",description:"A great plateform to buy, sell and rent your properties without any agent or commisions.",data:o.properties.sold,url:"/properties?sold=1"}];return(a,Z)=>(s(),_(h,{title:"Home"},{default:m(()=>[r(C),t("div",J,[(s(),i(d,null,u(n,c=>t("div",{class:"mt-16",key:c.title},[r(l,{title:c.title,description:c.description,url:c.url},null,8,["title","description","url"]),r(N,{data:c.data},null,8,["data"])])),64)),t("div",K,[r(q,{builders:e.builders},null,8,["builders"])]),t("div",M,[r(I,{cities:e.cities},null,8,["cities"])]),t("div",R,[t("div",W,[r(l,{title:"Have any Question?",description:"Please contact us by filling the below form and we’ll get back to you as soon as possible."}),t("div",X,[r(w)])])])])]),_:1}))}};export{_t as default};
