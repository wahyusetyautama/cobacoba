import{d as J,n as R,r as f,w as y,a as s,aG as S,P as he,h as k,aH as we,aI as ke,aJ as qe,ac as be,t as X,c as _e,T as j,b as Pe,g as Te,aF as ye}from"./index.9dafe3c6.js";import{u as Se,a as Ee,b as Be,c as De,d as xe,e as Fe}from"./use-prevent-scroll.ab33211b.js";import{r as W,m as Ce,l as He}from"./QCard.c4fa545a.js";function Me(){let e;return J(()=>{e=void 0}),{registerTick(n){e=n,R(()=>{e===n&&(e(),e=void 0)})},removeTick(){e=void 0}}}const Re={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ne(e,n){const i=f(n.value);return y(n,g=>{R(()=>{i.value=g})}),{transition:s(()=>"q-transition--"+(i.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:s(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const E=[];function Ve(e){return E.find(n=>n.__qPortalInnerRef.value!==null&&n.__qPortalInnerRef.value.contains(e))}function Ie(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return S(e)}else if(e.__qPortalInnerRef!==void 0){const i=S(e);return i!==void 0&&i.$options.name==="QPopupProxy"?(e.hide(n),i):e}e=S(e)}while(e!=null)}function Ue(e,n,i){for(;i!==0&&e!==void 0&&e!==null;){if(e.__qPortalInnerRef!==void 0){if(i--,e.$options.name==="QMenu"){e=Ie(e,n);continue}e.hide(n)}e=S(e)}}function $e(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ze(e,n,i,g){const l=f(!1),a=f(!1);let o=null;const h={},r=g===!0&&$e(e);function b(c){if(c===!0){W(h),a.value=!0;return}a.value=!1,l.value===!1&&(r===!1&&o===null&&(o=ke()),l.value=!0,E.push(e.proxy),Ce(h))}function u(c){if(a.value=!1,c!==!0)return;W(h),l.value=!1;const w=E.indexOf(e.proxy);w!==-1&&E.splice(w,1),o!==null&&(qe(o),o=null)}return he(()=>{u(!0)}),e.proxy.__qPortalInnerRef=n,{showPortal:b,hidePortal:u,portalIsActive:l,portalIsAccessible:a,renderPortal:()=>r===!0?i():l.value===!0?[k(we,{to:o},i())]:void 0}}const m=[];let q;function Le(e){q=e.keyCode===27}function Oe(){q===!0&&(q=!1)}function Qe(e){q===!0&&(q=!1,be(e,27)===!0&&m[m.length-1](e))}function Y(e){window[e]("keydown",Le),window[e]("blur",Oe),window[e]("keyup",Qe),q=!1}function Ae(e){X.is.desktop===!0&&(m.push(e),m.length===1&&Y("addEventListener"))}function N(e){const n=m.indexOf(e);n>-1&&(m.splice(n,1),m.length===0&&Y("removeEventListener"))}const v=[];function Z(e){v[v.length-1](e)}function Ge(e){X.is.desktop===!0&&(v.push(e),v.length===1&&document.body.addEventListener("focusin",Z))}function V(e){const n=v.indexOf(e);n>-1&&(v.splice(n,1),v.length===0&&document.body.removeEventListener("focusin",Z))}let T=0;const Ke={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},U={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Je=_e({name:"QDialog",inheritAttrs:!1,props:{...Se,...Re,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Ee,"shake","click","escape-key"],setup(e,{slots:n,emit:i,attrs:g}){const l=Te(),a=f(null),o=f(!1),h=f(!1),r=f(!1);let b,u=null,c,w;const I=s(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:$}=Fe(),{registerTimeout:z,removeTimeout:L}=Be(),{registerTick:ee,removeTick:O}=Me(),{showPortal:Q,hidePortal:A,portalIsAccessible:te,renderPortal:ne}=ze(l,a,ge,!0),{hide:P}=De({showing:o,hideOnRouteChange:I,handleShow:de,handleHide:fe,processOnMount:!0}),{addToHistory:ie,removeFromHistory:oe}=xe(o,P,I),ae=s(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ke[e.position]}`+(r.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),se=s(()=>"q-transition--"+(e.transitionShow===void 0?U[e.position][0]:e.transitionShow)),le=s(()=>"q-transition--"+(e.transitionHide===void 0?U[e.position][1]:e.transitionHide)),ue=s(()=>h.value===!0?le.value:se.value),G=s(()=>`--q-transition-duration: ${e.transitionDuration}ms`),B=s(()=>o.value===!0&&e.seamless!==!0),re=s(()=>e.autoClose===!0?{onClick:me}:{}),ce=s(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${B.value===!0?"modal":"seamless"}`,g.class]);y(o,t=>{R(()=>{h.value=t})}),y(()=>e.maximized,t=>{o.value===!0&&F(t)}),y(B,t=>{$(t),t===!0?(Ge(C),Ae(x)):(V(C),N(x))});function de(t){L(),O(),ie(),u=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,F(e.maximized),Q(),r.value=!0,e.noFocus!==!0&&(document.activeElement!==null&&document.activeElement.blur(),ee(_)),z(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:d,bottom:H}=document.activeElement.getBoundingClientRect(),{innerHeight:p}=window,M=window.visualViewport!==void 0?window.visualViewport.height:p;d>0&&H>M/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-M,H>=p?1/0:Math.ceil(document.scrollingElement.scrollTop+H-M/2))),document.activeElement.scrollIntoView()}w=!0,a.value.click(),w=!1}Q(!0),r.value=!1,i("show",t)},e.transitionDuration)}function fe(t){L(),O(),oe(),K(!0),r.value=!0,A(),u!==null&&(u.focus(),u=null),z(()=>{A(!0),r.value=!1,i("hide",t)},e.transitionDuration)}function _(t){He(()=>{let d=a.value;d===null||d.contains(document.activeElement)===!0||(d=d.querySelector(t||"[autofocus], [data-autofocus]")||d,d.focus({preventScroll:!0}))})}function D(){_(),i("shake");const t=a.value;t!==null&&(t.classList.remove("q-animate--scale"),t.classList.add("q-animate--scale"),clearTimeout(b),b=setTimeout(()=>{a.value!==null&&(t.classList.remove("q-animate--scale"),_())},170))}function x(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&D():(i("escape-key"),P()))}function K(t){clearTimeout(b),(t===!0||o.value===!0)&&(F(!1),e.seamless!==!0&&($(!1),V(C),N(x))),t!==!0&&(u=null)}function F(t){t===!0?c!==!0&&(T<1&&document.body.classList.add("q-body--dialog"),T++,c=!0):c===!0&&(T<2&&document.body.classList.remove("q-body--dialog"),T--,c=!1)}function me(t){w!==!0&&(P(t),i("click",t))}function ve(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?P(t):e.noShake!==!0&&D()}function C(t){e.allowFocusOutside!==!0&&te.value===!0&&ye(a.value,t.target)!==!0&&_('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:_,shake:D,__updateRefocusTarget(t){u=t||null}}),J(K);function ge(){return k("div",{...g,class:ce.value},[k(j,{name:"q-transition--fade",appear:!0},()=>B.value===!0?k("div",{class:"q-dialog__backdrop fixed-full",style:G.value,"aria-hidden":"true",onMousedown:ve}):null),k(j,{name:ue.value,appear:!0},()=>o.value===!0?k("div",{ref:a,class:ae.value,style:G.value,tabindex:-1,...re.value},Pe(n.default)):null)])}return ne}});export{Je as Q,Me as a,Ne as b,ze as c,Ge as d,N as e,Ie as f,Ae as g,Ve as h,Ue as i,E as p,V as r,Re as u};
