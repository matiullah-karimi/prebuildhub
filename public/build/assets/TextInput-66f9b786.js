import{d as n,z as r,o as l,e as d}from"./app-42f91745.js";const p=["value"],c={__name:"TextInput",props:{modelValue:String},emits:["update:modelValue"],setup(u,{expose:t}){const e=n(null);return r(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(a,o)=>(l(),d("input",{ref_key:"input",ref:e,class:"border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm",value:u.modelValue,onInput:o[0]||(o[0]=s=>a.$emit("update:modelValue",s.target.value))},null,40,p))}};export{c as _};
