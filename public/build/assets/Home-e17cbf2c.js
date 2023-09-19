import{_ as g}from"./AppLayout-58f192f8.js";import{_ as h}from"./PrimaryButton-9d77d40d.js";import{_ as f}from"./TextInput-fe7fe076.js";import{o as s,e as i,b as r,w as m,g as x,a as t,p as b,F as d,h as u,c as _,t as p,f as y}from"./app-da572fff.js";import{_ as v}from"./PropertyItem-e3c8771f.js";import{_ as $}from"./BuilderItem-7831fd20.js";import{_ as w}from"./CityItem-83ca6da0.js";import{_ as A}from"./ContactForm-9c696a3a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputError-023e68e7.js";import"./InputLabel-d505ac95.js";import"./TextArea-b2741a45.js";const k={class:"grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-2"},S={__name:"SearchBar",setup(e){return(o,a)=>(s(),i("div",k,[r(f,{class:"px-4 h-14 lg:col-span-3",type:"text",placeholder:"Ex: 2104 Charmaine Lane Amarillo"}),r(h,{class:"h-14 text-center"},{default:m(()=>[x("Search")]),_:1})]))}},j={class:"bg-white bg-cover bg-center",style:{"background-image":"url('/images/hero1.jpg')"}},V={class:"relative isolate px-6 pt-12 lg:px-8 backdrop-brightness-50"},B=b('<div class="mx-auto max-w-2xl py-12"><div class="hidden sm:mb-8 sm:flex sm:justify-center"><div class="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20"> A hub for finding your new property. <a href="#" class="font-semibold text-orange-600"></a></div></div><div class="text-center"><h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Your Hub For Your Preconstruction Projects</h1><p class="mt-6 text-lg leading-8 text-white">A great plateform to buy, sell and rent your properties without any agent or commisions.</p></div></div>',1),P={class:"w-full lg:w-1/2 mx-auto"},F=t("div",{class:"mt-12"},"_",-1),C={__name:"Hero",setup(e){return(o,a)=>(s(),i("div",j,[t("div",V,[B,t("div",P,[r(S)]),F])]))}},H={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]"},N={__name:"PropertyList",props:{data:Object},setup(e){return(o,a)=>(s(),i("div",H,[(s(!0),i(d,null,u(e.data,l=>(s(),_(v,{key:l.id,property:l},null,8,["property"]))),128))]))}},L={class:"flex flex-col lg:flex-row justify-between items-center lg:items-end"},O={class:"grid grid-cols-1 text-left"},E={class:"mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"},T={class:"text-slate-400 max-w-xl"},Y={key:0,class:"hidden lg:flex"},D=["href"],n={__name:"ListTitle",props:{title:String,description:String,url:String},setup(e){return(o,a)=>(s(),i("div",L,[t("div",O,[t("h3",E,p(e.title),1),t("p",T,p(e.description),1)]),e.url?(s(),i("div",Y,[t("a",{class:"text-blue-600 text-lg cursor-pointer",href:e.url},"View All",8,D)])):y("",!0)]))}},Q={class:"container"},U={class:"grid grid-cols-4 gap-4 mt-6"},q=t("a",{class:"lg:hidden text-blue-600 text-lg cursor-pointer",href:"/builders"},"View All",-1),z={__name:"FeaturedBuilders",props:{builders:Array},setup(e){return(o,a)=>(s(),i("div",Q,[r(n,{title:"Search by Builder",description:"Search for your preconstruction projects by best builders in the town",url:"/builders"}),t("div",U,[(s(!0),i(d,null,u(e.builders,l=>(s(),_($,{builder:l,key:l.name},null,8,["builder"]))),128))]),q]))}},G={class:"container"},I={class:"grid grid-cols-4 gap-4 mt-6"},J=["href"],K={__name:"FeaturedCities",props:{cities:Array},setup(e){return(o,a)=>(s(),i("div",G,[r(n,{title:"Search by City",description:"Search for your preconstruction projects by city",url:"/cities"}),t("div",I,[(s(!0),i(d,null,u(e.cities,l=>(s(),_(w,{city:l,key:l.name},null,8,["city"]))),128))]),t("a",{class:"mt-4 lg:hidden lg:mt-0 text-blue-600 text-lg cursor-pointer",href:o.url},"View All",8,J)]))}},M={class:"container px-4 lg:px-16 lg:max-w-7xl mx-auto"},R=["href"],W={class:"mt-16"},X={class:"mt-16"},Z={class:"container mt-16 pb-4"},tt={class:"grid grid-cols-1"},et={class:"mt-6 w-full lg:w-2/4 text-left"},gt={__name:"Home",props:{properties:Object,builders:Array,cities:Array},setup(e){const o=e,a=[{title:"Featured Projects",description:"A great plateform to buy, sell and rent your properties without any agent or commisions.",data:o.properties.featured,url:"/properties?featured=1"},{title:"Upcoming Projects",description:"A great plateform to buy, sell and rent your properties without any agent or commisions.",data:o.properties.upcoming,url:"/properties?upcoming=1"},{title:"Sold Out Projects",description:"A great plateform to buy, sell and rent your properties without any agent or commisions.",data:o.properties.sold,url:"/properties?sold=1"}];return(l,st)=>(s(),_(g,{title:"Home"},{default:m(()=>[r(C),t("div",M,[(s(),i(d,null,u(a,c=>t("div",{class:"mt-8 lg:mt-16",key:c.title},[r(n,{title:c.title,description:c.description,url:c.url},null,8,["title","description","url"]),r(N,{data:c.data},null,8,["data"]),t("a",{class:"lg:hidden text-blue-600 text-lg cursor-pointer mt-4",href:c.url},"View All",8,R)])),64)),t("div",W,[r(z,{builders:e.builders},null,8,["builders"])]),t("div",X,[r(K,{cities:e.cities},null,8,["cities"])]),t("div",Z,[t("div",tt,[r(n,{title:"Have any Question?",description:"Please contact us by filling the below form and we’ll get back to you as soon as possible."}),t("div",et,[r(A)])])])])]),_:1}))}};export{gt as default};
