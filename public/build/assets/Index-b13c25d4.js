import{u as d,_ as l}from"./AppLayout-2a1dc567.js";import{_}from"./CityItem-5170571d.js";import{_ as m}from"./PrimaryButton-624dcca2.js";import{o as t,c as i,w as r,a as e,u,g as f,f as p,e as x,h,F as k}from"./app-425f40bf.js";import"./_plugin-vue_export-helper-c27b6911.js";const v={class:"max-w-7xl mx-auto px-16 py-8"},y={class:"flex justify-between"},C=e("h2",{class:"text-2xl font-bold"},"Cities",-1),g={class:"mt-8"},$={class:"grid grid-cols-4 gap-4"},j={__name:"Index",props:{cities:{type:Object,required:!0}},setup(c){const{isAdmin:n}=d();return(a,o)=>(t(),i(l,{title:"Cities"},{default:r(()=>[e("div",v,[e("div",y,[C,u(n)?(t(),i(m,{key:0,onClick:o[0]||(o[0]=s=>a.$inertia.visit(a.route("cities.create")))},{default:r(()=>[f("Create")]),_:1})):p("",!0)]),e("div",g,[e("div",$,[(t(!0),x(k,null,h(c.cities.data,s=>(t(),i(_,{key:s.id,city:s},null,8,["city"]))),128))])])])]),_:1}))}};export{j as default};