"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[789],{265:function(e,t){t.Z=function(e){return String(e).padStart(2,"0")}},109:function(e,t,n){var s=n(265);t.Z=function(e){return{hours:(0,s.Z)(Math.floor(e/3600)),minutes:(0,s.Z)(Math.floor(e%3600/60)),seconds:(0,s.Z)(Math.floor(e%3600%60))}}},789:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var s=n(885),r=n(791),u=n(504),c=n(871),i=n(109),a=n(265),o="oneTimer_box__T8Hg1",l="oneTimer_time__Xa99Q",f="oneTimer_link__JUxQB",h=n(184),m=function(){var e=(0,r.useState)((function(){return JSON.parse(localStorage.getItem("timers"))})),t=(0,s.Z)(e,1)[0],n=(0,c.UO)().id,m=(0,r.useState)(""),d=(0,s.Z)(m,2),j=d[0],x=d[1],Z=(0,r.useState)(""),p=(0,s.Z)(Z,2),S=p[0],_=p[1],v=(0,r.useState)(""),b=(0,s.Z)(v,2),k=b[0],N=b[1],g=(0,r.useState)(""),T=(0,s.Z)(g,2),C=T[0],E=T[1],U=(0,r.useState)(""),I=(0,s.Z)(U,2),M=I[0],w=I[1],y=(0,r.useState)(!1),J=(0,s.Z)(y,2),O=J[0],Q=J[1],B=(0,r.useRef)(null);(0,r.useEffect)((function(){var e=t.find((function(e){return e.id===n}));e&&(_(e.name),x(e.sum))}),[n,t]),(0,r.useEffect)((function(){var e=(0,i.Z)(j),t=e.hours,n=e.minutes,s=e.seconds;N(t),E(n),w(s)}),[j]),(0,r.useEffect)((function(){O&&(B.current=setInterval((function(){x((function(e){return e-1}))}),1e3))}),[O]);var F=function(){clearInterval(B.current),Q(!1)};return(0,r.useEffect)((function(){0===j&&F()}),[j]),(0,h.jsxs)("div",{children:[S?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("h2",{children:[S," "]}),(0,h.jsxs)("div",{className:o,children:[k!==(0,a.Z)(0)&&(0,h.jsxs)("p",{className:l,children:[k," "]}),(0,h.jsxs)("p",{className:l,children:[C," "]}),(0,h.jsxs)("p",{className:l,children:[M," "]})]}),!O&&(0,h.jsx)("button",{type:"button",onClick:function(){Q(!0)},children:"start"}),O&&(0,h.jsx)("button",{type:"button",onClick:F,children:"pause"})]}):(0,h.jsx)("h1",{children:"\u041d\u0415\u041c\u0410"}),(0,h.jsx)(u.rU,{to:"/timers",className:f,children:" Timers "}),(0,h.jsx)(u.rU,{to:"/home",className:f,children:" home "})]})}}}]);
//# sourceMappingURL=789.c03b981d.chunk.js.map