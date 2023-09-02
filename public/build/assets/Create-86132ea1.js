import{T as p,o as r,c as _,w as m,a as s,i as g,b as o,u as a,m as f,v,e as c,h as x,F as y,g as b,n as h,t as w}from"./app-118bf072.js";import{_ as V}from"./AppLayout-7be8ade7.js";import{_ as l}from"./InputError-411795f8.js";import{_ as n}from"./InputLabel-364483c7.js";import{_ as C}from"./PrimaryButton-bcef6d33.js";import{_ as k}from"./TextInput-416cb64b.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={class:"max-w-7xl mx-auto px-16 py-8"},$=["onSubmit"],B={class:"mt-4"},N=s("option",{value:""},"Select Province",-1),j=["value"],F={class:"mt-4"},I={class:"mt-1 flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 cursor-pointer"},U=s("span",null,"Upload Image",-1),q={class:"flex items-center justify-end mt-4"},G={__name:"Create",props:{provinces:Array},setup(d){const e=p({name:"",image:"",province_id:""}),u=()=>{e.post(route("cities.store"),{onFinish:()=>e.reset("name","image")})};return(D,i)=>(r(),_(V,{title:"Create City"},{default:m(()=>[s("div",S,[s("form",{onSubmit:g(u,["prevent"]),class:"w-1/2 mx-auto"},[s("div",null,[o(n,{for:"name",value:"Name"}),o(k,{id:"name",modelValue:a(e).name,"onUpdate:modelValue":i[0]||(i[0]=t=>a(e).name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(l,{class:"mt-2",message:a(e).errors.name},null,8,["message"])]),s("div",B,[o(n,{for:"province_id",value:"Province"}),f(s("select",{"onUpdate:modelValue":i[1]||(i[1]=t=>a(e).province_id=t),class:"rounded border-gray-300 w-full mt-1"},[N,(r(!0),c(y,null,x(d.provinces,t=>(r(),c("option",{key:t.id,value:t.id},w(t.name),9,j))),128))],512),[[v,a(e).province_id]]),o(l,{class:"mt-2",message:a(e).errors.province_id},null,8,["message"])]),s("div",F,[o(n,{for:"images",value:"Image"}),s("label",I,[s("input",{id:"images",onInput:i[2]||(i[2]=t=>a(e).image=t.target.files[0]),accept:"image/jpeg,image/jpg,image/png",type:"file",class:"hidden",required:""},null,32),U]),o(l,{class:"mt-2",message:a(e).errors.image},null,8,["message"])]),s("div",q,[o(C,{class:h(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:m(()=>[b(" Create ")]),_:1},8,["class","disabled"])])],40,$)])]),_:1}))}};export{G as default};
