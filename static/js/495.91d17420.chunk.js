"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[495],{265:function(e,n){n.Z=function(e){return String(e).padStart(2,"0")}},109:function(e,n,t){var s=t(265);n.Z=function(e){return{hours:(0,s.Z)(Math.floor(e/3600)),minutes:(0,s.Z)(Math.floor(e%3600/60)),seconds:(0,s.Z)(Math.floor(e%3600%60))}}},495:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var s=t(885),r=t(791),u=t(504),c=t(109),i=t(265),o="oneOffTimer_box__3zkkR",a="oneOffTimer_time__XL81n",f="oneOffTimer_link__uqb9A",l=t(184),m=function(){var e=(0,r.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("tempTimer")))&&void 0!==e?e:""})),n=(0,s.Z)(e,1)[0],t=(0,r.useState)(""),m=(0,s.Z)(t,2),h=m[0],d=m[1],j=(0,r.useState)(""),Z=(0,s.Z)(j,2),p=Z[0],x=Z[1],v=(0,r.useState)(""),S=(0,s.Z)(v,2),_=S[0],k=S[1],b=(0,r.useState)(""),N=(0,s.Z)(b,2),g=N[0],T=N[1],C=(0,r.useState)(""),E=(0,s.Z)(C,2),O=E[0],I=E[1],M=(0,r.useState)(!1),w=(0,s.Z)(M,2),y=w[0],R=w[1];console.log(n);var q=(0,r.useRef)(null);(0,r.useEffect)((function(){d(n.sum),n.name?x(n.name):x("Timer")}),[n.name,n.sum]),(0,r.useEffect)((function(){var e=(0,c.Z)(h),n=e.hours,t=e.minutes,s=e.seconds;k(n),T(t),I(s)}),[h]),(0,r.useEffect)((function(){y&&(q.current=setInterval((function(){d((function(e){return e-1}))}),1e3))}),[y]);var z=function(){clearInterval(q.current),R(!1)};return(0,r.useEffect)((function(){0===h&&z()}),[h]),(0,l.jsxs)("div",{children:[n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h2",{children:[p," "]}),(0,l.jsxs)("div",{className:o,children:[_!==(0,i.Z)(0)&&(0,l.jsxs)("p",{className:a,children:[_," "]}),(0,l.jsxs)("p",{className:a,children:[g," "]}),(0,l.jsxs)("p",{className:a,children:[O," "]})]}),(0,l.jsxs)("p",{children:[p," "]}),!y&&(0,l.jsx)("button",{type:"button",onClick:function(){R(!0)},children:"start"}),y&&(0,l.jsx)("button",{type:"button",onClick:z,children:"pause"})]}):(0,l.jsx)("h1",{children:"\u041d\u0415\u041c\u0410"}),(0,l.jsx)(u.rU,{to:"/home",className:f,children:" home "})]})}}}]);
//# sourceMappingURL=495.91d17420.chunk.js.map