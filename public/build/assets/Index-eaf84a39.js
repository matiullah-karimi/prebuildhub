import{o as s,c as o,w as r,a as e,b as n,g as d,e as l,h as _,F as m}from"./app-118bf072.js";import{_ as u}from"./AppLayout-7be8ade7.js";import{_ as f}from"./CityItem-2e195fe9.js";import{_ as p}from"./PrimaryButton-bcef6d33.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={class:"max-w-7xl mx-auto px-16 py-8"},h={class:"flex justify-between"},v=e("h2",{class:"text-2xl font-bold"},"Cities",-1),g={class:"mt-8"},k={class:"grid grid-cols-4 gap-4"},B={__name:"Index",props:{cities:{type:Object,required:!0}},setup(c){return(i,a)=>(s(),o(u,{title:"Cities"},{default:r(()=>[e("div",x,[e("div",h,[v,n(p,{onClick:a[0]||(a[0]=t=>i.$inertia.visit(i.route("cities.create")))},{default:r(()=>[d("Create")]),_:1})]),e("div",g,[e("div",k,[(s(!0),l(m,null,_(c.cities.data,t=>(s(),o(f,{key:t.id,city:t},null,8,["city"]))),128))])])])]),_:1}))}};export{B as default};
