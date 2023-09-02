import{T as u,o as p,c,w as d,a as o,i as _,b as a,u as s,g as f,n as g}from"./app-118bf072.js";import{_ as w}from"./AppLayout-7be8ade7.js";import{_ as m}from"./InputError-411795f8.js";import{_ as r}from"./InputLabel-364483c7.js";import{_ as b}from"./PrimaryButton-bcef6d33.js";import{_ as i}from"./TextInput-416cb64b.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={class:"max-w-7xl mx-auto px-16 py-8"},V=["onSubmit"],v={class:"mt-4"},y={class:"mt-4"},h={class:"mt-4"},k={class:"mt-1 flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 cursor-pointer"},$=o("span",null,"Upload Image",-1),q={class:"flex items-center justify-end mt-4"},A={__name:"Create",setup(B){const e=u({name:"",email:"",password:"",image:""}),n=()=>{e.post(route("builders.store"),{onFinish:()=>e.reset("password")})};return(N,l)=>(p(),c(w,{title:"Add Builder"},{default:d(()=>[o("div",x,[o("form",{onSubmit:_(n,["prevent"]),class:"w-1/2 mx-auto"},[o("div",null,[a(r,{for:"name",value:"Name"}),a(i,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":l[0]||(l[0]=t=>s(e).name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),o("div",v,[a(r,{for:"email",value:"Email"}),a(i,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":l[1]||(l[1]=t=>s(e).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),o("div",y,[a(r,{for:"password",value:"Password"}),a(i,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":l[2]||(l[2]=t=>s(e).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),o("div",h,[a(r,{for:"images",value:"Image"}),o("label",k,[o("input",{id:"images",onInput:l[3]||(l[3]=t=>s(e).image=t.target.files[0]),accept:"image/jpeg,image/jpg,image/png",type:"file",class:"hidden",required:""},null,32),$]),a(m,{class:"mt-2",message:s(e).errors.image},null,8,["message"])]),o("div",q,[a(b,{class:g(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[f(" Register ")]),_:1},8,["class","disabled"])])],40,V)])]),_:1}))}};export{A as default};
