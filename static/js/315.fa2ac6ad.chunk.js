"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[315],{626:function(e,t,n){n.d(t,{Z:function(){return m}});var s=n(885),u=n(791),r=n(504),c=n(109),a=n(265),i="intervalTimer_box__1fHDK",o="intervalTimer_time__lVLTU",f="intervalTimer_link__IMVCe",l=n(184),m=function(e){var t=e.data,n=(0,u.useState)({}),m=(0,s.Z)(n,2),d=m[0],h=m[1],Z=(0,u.useState)(""),S=(0,s.Z)(Z,2),v=S[0],j=S[1],x=(0,u.useState)(""),p=(0,s.Z)(x,2),_=p[0],N=p[1],k=(0,u.useState)(""),E=(0,s.Z)(k,2),b=E[0],C=E[1],I=(0,u.useState)(""),T=(0,s.Z)(I,2),g=T[0],w=T[1],M=(0,u.useState)(""),y=(0,s.Z)(M,2),U=y[0],V=y[1],D=(0,u.useState)(""),F=(0,s.Z)(D,2),H=F[0],J=F[1],K=(0,u.useState)(""),L=(0,s.Z)(K,2),O=L[0],R=L[1],q=(0,u.useState)(""),z=(0,s.Z)(q,2),A=z[0],B=z[1],G=(0,u.useState)(""),P=(0,s.Z)(G,2),Q=P[0],W=P[1],X=(0,u.useState)(!1),Y=(0,s.Z)(X,2),$=Y[0],ee=Y[1],te=(0,u.useState)(!1),ne=(0,s.Z)(te,2),se=ne[0],ue=ne[1],re=(0,u.useRef)(null),ce=$||se;(0,u.useEffect)((function(){h(t)}),[t]),(0,u.useEffect)((function(){N(d.workSum),C(d.restSum),d.name?j(d.name):j("Timer")}),[d.name,d.restSum,d.workSum]),(0,u.useEffect)((function(){var e=(0,c.Z)(_),t=e.hours,n=e.minutes,s=e.seconds;w(t),V(n),J(s)}),[_]),(0,u.useEffect)((function(){var e=(0,c.Z)(b),t=e.hours,n=e.minutes,s=e.seconds;R(t),B(n),W(s)}),[b]),(0,u.useEffect)((function(){$&&(re.current=setInterval((function(){N((function(e){return e-1}))}),1e3))}),[$]),(0,u.useEffect)((function(){0===_&&(ae(),ue(!0))}),[_]),(0,u.useEffect)((function(){se&&(re.current=setInterval((function(){C((function(e){return e-1}))}),1e3))}),[se]),(0,u.useEffect)((function(){0===b&&ae()}),[b]);var ae=function(){clearInterval(re.current),ee(!1),0===_&&ue(!1)};return(0,l.jsxs)("div",{children:[d?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h2",{children:[v," "]}),(0,l.jsxs)("div",{className:i,children:[g!==(0,a.Z)(0)&&(0,l.jsxs)("p",{className:o,children:[g," "]}),(0,l.jsxs)("p",{className:o,children:[U," "]}),(0,l.jsxs)("p",{className:o,children:[H," "]})]}),(0,l.jsxs)("div",{className:i,children:[O!==(0,a.Z)(0)&&(0,l.jsxs)("p",{className:o,children:[O," "]}),(0,l.jsxs)("p",{className:o,children:[A," "]}),(0,l.jsxs)("p",{className:o,children:[Q," "]})]}),(0,l.jsxs)("p",{children:[v," "]}),!ce&&(0,l.jsx)("button",{type:"button",onClick:function(){0!==_&&ee(!0),0===_&&0!==b&&ue(!0)},children:"start"}),ce&&(0,l.jsx)("button",{type:"button",onClick:ae,children:"pause"})]}):(0,l.jsx)("h1",{children:"\u041d\u0415\u041c\u0410"}),(0,l.jsx)(r.rU,{to:"/home",className:f,children:" home "})]})}},265:function(e,t){t.Z=function(e){return String(e).padStart(2,"0")}},109:function(e,t,n){var s=n(265);t.Z=function(e){return{hours:(0,s.Z)(Math.floor(e/3600)),minutes:(0,s.Z)(Math.floor(e%3600/60)),seconds:(0,s.Z)(Math.floor(e%3600%60))}}},315:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var s=n(885),u=n(791),r=n(626),c=n(184),a=function(){var e=(0,u.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("interval")))&&void 0!==e?e:""})),t=(0,s.Z)(e,1)[0];return(0,c.jsx)(r.Z,{data:t})}}}]);
//# sourceMappingURL=315.fa2ac6ad.chunk.js.map