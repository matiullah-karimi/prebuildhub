import{d as p,x as H,o as t,e as a,a as l,r as N,b as s,w as o,g as r,t as b,s as R,n as w,k as O,T as Q,l as Y,y as D,c as y,K as I,f as u,u as F,F as U,h as z,O as P}from"./app-425f40bf.js";import{a as G,_ as W}from"./DialogModal-17050584.js";import{_ as B}from"./InputError-5ec475ea.js";import{_ as $}from"./PrimaryButton-624dcca2.js";import{_ as C}from"./SecondaryButton-1730f78c.js";import{_ as L}from"./TextInput-f9874292.js";import{_ as j}from"./DangerButton-6ef79739.js";import{_ as J}from"./InputLabel-fe376933.js";import"./SectionTitle-186ab745.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-2655aafe.js";const X={class:"mt-4"},h={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(g,{emit:x}){const c=p(!1),e=H({password:"",error:"",processing:!1}),i=p(null),v=()=>{axios.get(route("password.confirmation")).then(n=>{n.data.confirmed?x("confirmed"):(c.value=!0,setTimeout(()=>i.value.focus(),250))})},_=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,d(),O().then(()=>x("confirmed"))}).catch(n=>{e.processing=!1,e.error=n.response.data.errors.password[0],i.value.focus()})},d=()=>{c.value=!1,e.password="",e.error=""};return(n,m)=>(t(),a("span",null,[l("span",{onClick:v},[N(n.$slots,"default")]),s(G,{show:c.value,onClose:d},{title:o(()=>[r(b(g.title),1)]),content:o(()=>[r(b(g.content)+" ",1),l("div",X,[s(L,{ref_key:"passwordInput",ref:i,modelValue:e.password,"onUpdate:modelValue":m[0]||(m[0]=T=>e.password=T),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:R(_,["enter"])},null,8,["modelValue","onKeyup"]),s(B,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[s(C,{onClick:d},{default:o(()=>[r(" Cancel ")]),_:1}),s($,{class:w(["ml-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:_},{default:o(()=>[r(b(g.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},Z={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},ee={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},te={key:2,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},oe=l("div",{class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[l("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),ae={key:3},se={key:0},re={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ne={key:0,class:"font-semibold"},le={key:1},ce=["innerHTML"],ie={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ue={class:"font-semibold"},de=["innerHTML"],me={key:1,class:"mt-4"},fe={key:1},pe=l("div",{class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[l("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),_e={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 rounded-lg"},ve={class:"mt-5"},ye={key:0},he={key:1},Ve={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(g){const x=g,c=p(!1),e=p(!1),i=p(!1),v=p(null),_=p(null),d=p([]),n=Q({code:""}),m=Y(()=>{var f;return!c.value&&((f=I().props.auth.user)==null?void 0:f.two_factor_enabled)});D(m,()=>{m.value||(n.reset(),n.clearErrors())});const T=()=>{c.value=!0,P.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([M(),q(),S()]),onFinish:()=>{c.value=!1,e.value=x.requiresConfirmation}})},M=()=>axios.get(route("two-factor.qr-code")).then(f=>{v.value=f.data.svg}),q=()=>axios.get(route("two-factor.secret-key")).then(f=>{_.value=f.data.secretKey}),S=()=>axios.get(route("two-factor.recovery-codes")).then(f=>{d.value=f.data}),K=()=>{n.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,v.value=null,_.value=null}})},E=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>S())},V=()=>{i.value=!0,P.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{i.value=!1,e.value=!1}})};return(f,A)=>(t(),y(W,null,{title:o(()=>[r(" Two Factor Authentication ")]),description:o(()=>[r(" Add additional security to your account using two factor authentication. ")]),content:o(()=>[m.value&&!e.value?(t(),a("h3",Z," You have enabled two factor authentication. ")):m.value&&e.value?(t(),a("h3",ee," Finish enabling two factor authentication. ")):(t(),a("h3",te," You have not enabled two factor authentication. ")),oe,m.value?(t(),a("div",ae,[v.value?(t(),a("div",se,[l("div",re,[e.value?(t(),a("p",ne," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(t(),a("p",le," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),l("div",{class:"mt-4 p-2 inline-block bg-white",innerHTML:v.value},null,8,ce),_.value?(t(),a("div",ie,[l("p",ue,[r(" Setup Key: "),l("span",{innerHTML:_.value},null,8,de)])])):u("",!0),e.value?(t(),a("div",me,[s(J,{for:"code",value:"Code"}),s(L,{id:"code",modelValue:F(n).code,"onUpdate:modelValue":A[0]||(A[0]=k=>F(n).code=k),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:R(K,["enter"])},null,8,["modelValue","onKeyup"]),s(B,{message:F(n).errors.code,class:"mt-2"},null,8,["message"])])):u("",!0)])):u("",!0),d.value.length>0&&!e.value?(t(),a("div",fe,[pe,l("div",_e,[(t(!0),a(U,null,z(d.value,k=>(t(),a("div",{key:k},b(k),1))),128))])])):u("",!0)])):u("",!0),l("div",ve,[m.value?(t(),a("div",he,[s(h,{onConfirmed:K},{default:o(()=>[e.value?(t(),y($,{key:0,type:"button",class:w(["mr-3",{"opacity-25":c.value}]),disabled:c.value},{default:o(()=>[r(" Confirm ")]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),s(h,{onConfirmed:E},{default:o(()=>[d.value.length>0&&!e.value?(t(),y(C,{key:0,class:"mr-3"},{default:o(()=>[r(" Regenerate Recovery Codes ")]),_:1})):u("",!0)]),_:1}),s(h,{onConfirmed:S},{default:o(()=>[d.value.length===0&&!e.value?(t(),y(C,{key:0,class:"mr-3"},{default:o(()=>[r(" Show Recovery Codes ")]),_:1})):u("",!0)]),_:1}),s(h,{onConfirmed:V},{default:o(()=>[e.value?(t(),y(C,{key:0,class:w({"opacity-25":i.value}),disabled:i.value},{default:o(()=>[r(" Cancel ")]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),s(h,{onConfirmed:V},{default:o(()=>[e.value?u("",!0):(t(),y(j,{key:0,class:w({"opacity-25":i.value}),disabled:i.value},{default:o(()=>[r(" Disable ")]),_:1},8,["class","disabled"]))]),_:1})])):(t(),a("div",ye,[s(h,{onConfirmed:T},{default:o(()=>[s($,{type:"button",class:w({"opacity-25":c.value}),disabled:c.value},{default:o(()=>[r(" Enable ")]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Ve as default};
