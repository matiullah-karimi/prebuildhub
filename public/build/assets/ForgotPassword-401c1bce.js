import{T as u,o as l,e as m,b as e,u as t,w as o,F as c,Z as f,t as _,f as p,a,n as g,g as w,i as x}from"./app-4988de1a.js";import{A as y}from"./AuthenticationCard-9438630d.js";import{_ as b}from"./AuthenticationCardLogo-a533b67d.js";import{_ as k}from"./InputError-68073f1a.js";import{_ as h}from"./InputLabel-00232903.js";import{_ as V}from"./PrimaryButton-38a9fcbb.js";import{_ as v}from"./TextInput-8344b10d.js";import"./_plugin-vue_export-helper-c27b6911.js";const F=a("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},D={__name:"ForgotPassword",props:{status:String},setup(r){const s=u({email:""}),n=()=>{s.post(route("password.email"))};return(S,i)=>(l(),m(c,null,[e(t(f),{title:"Forgot Password"}),e(y,null,{logo:o(()=>[e(b)]),default:o(()=>[F,r.status?(l(),m("div",N,_(r.status),1)):p("",!0),a("form",{onSubmit:x(n,["prevent"])},[a("div",null,[e(h,{for:"email",value:"Email"}),e(v,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":i[0]||(i[0]=d=>t(s).email=d),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(k,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),a("div",C,[e(V,{class:g({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{D as default};