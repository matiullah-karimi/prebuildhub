import{T as d,o as p,e as f,a as t,b as a,u as s,n as u,w as g,g as b,i as _}from"./app-5c2bb889.js";import{_ as m}from"./InputError-efc3b706.js";import{_ as r}from"./InputLabel-f7f6e786.js";import{_ as V}from"./PrimaryButton-3ec4ff85.js";import{_ as n}from"./TextInput-313a6498.js";import{_ as y}from"./TextArea-045c11c2.js";const v=["onSubmit"],j={class:"col-span-2"},k={class:"col-span-2"},w={class:""},C={__name:"ContactForm",props:{propertyId:{type:Number,required:!1}},setup(i){const e=d({name:"",email:"",subject:"",message:"",property_id:i.propertyId}),c=()=>{e.post(route("contacts.store"),{onFinish:()=>e.reset(...Object.keys(e))})};return(q,l)=>(p(),f("form",{onSubmit:_(c,["prevent"]),class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},[t("div",{class:u({"col-span-2":i.propertyId})},[a(r,{for:"name",value:"Name"}),a(n,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":l[0]||(l[0]=o=>s(e).name=o),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.name},null,8,["message"])],2),t("div",{class:u({"col-span-2":i.propertyId})},[a(r,{for:"email",value:"Email"}),a(n,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":l[1]||(l[1]=o=>s(e).email=o),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.email},null,8,["message"])],2),t("div",j,[a(r,{for:"subject",value:"Subject"}),a(n,{id:"subject",modelValue:s(e).subject,"onUpdate:modelValue":l[2]||(l[2]=o=>s(e).subject=o),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"subject"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.subject},null,8,["message"])]),t("div",k,[a(r,{for:"message",value:"Message"}),a(y,{id:"message",modelValue:s(e).message,"onUpdate:modelValue":l[3]||(l[3]=o=>s(e).message=o),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.message},null,8,["message"])]),t("div",w,[a(V,{class:u({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:g(()=>[b(" Send Message ")]),_:1},8,["class","disabled"])])],40,v))}};export{C as _};