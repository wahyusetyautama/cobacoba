import{Q as g,a as p,b as _}from"./QCard.c4fa545a.js";import{R as k,O as w,r as c,S as V,U as h,V as n,W as x,an as I,a3 as u,X as e,a2 as N,Y as i,Z as Q}from"./index.9dafe3c6.js";import{u as U}from"./use-meta.6e4b83a8.js";import{b as P,c as f,n as v}from"./function.626c708b.js";import"./use-form.473e5b63.js";const q={class:"absolute-center",style:{width:"350px"}},C=Q(" e-Umum155 "),T=k({__name:"GuestLogin",setup(B){U({title:"Masuk",titleTemplate:a=>`${a} - e-Umum 155`,meta:{description:{name:"description",content:"Masuk ke aplikasi e Umum 155"},keywords:{name:"keywords",content:"Aplikasi e Umum 155"}}});const m=x(),d=P(),s=w({NIP:null,password:null}),o=c(!1);d.localStorage.getItem("auth")&&m.push("/dashboard");const l=c(!0);function b(){o.value=!0,f.get("/sanctum/csrf-cookie").then(()=>{f.post("login",s).then(()=>{d.localStorage.set("auth",!0),m.push("/dashboard"),o.value=!1}).catch(a=>{v(a.response.data),o.value=!1})}).catch(a=>{v(a.response.data),o.value=!1})}return(a,t)=>{const y=I("guest-layout");return V(),h(y,null,{default:n(()=>[u("div",q,[C,e(_,{flat:"",bordered:"",class:"q-pa-lg my-card"},{default:n(()=>[e(g,{onSubmit:b,class:"q-gutter-md"},{default:n(()=>[e(p,{filled:"",type:"text",modelValue:s.NIP,"onUpdate:modelValue":t[0]||(t[0]=r=>s.NIP=r),label:"NIP"},null,8,["modelValue"]),e(p,{filled:"",type:l.value?"password":"text",modelValue:s.password,"onUpdate:modelValue":t[2]||(t[2]=r=>s.password=r),label:"Password"},{append:n(()=>[e(N,{name:l.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=r=>l.value=!l.value)},null,8,["name"])]),_:1},8,["type","modelValue"]),u("div",null,[e(i,{label:"Masuk",type:"submit",loading:o.value,color:"primary",class:"q-mr-sm"},null,8,["loading"]),e(i,{label:"Daftar",to:"/register",color:"primary",flat:"",class:"q-ml-sm"})]),u("div",null,[e(i,{label:"Lupa password?",to:"/forgot-password",flat:"",color:"primary"})])]),_:1})]),_:1})])]),_:1})}}});export{T as default};
