"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[315],{391:function(t,e,n){n.d(e,{Z:function(){return i}});var u=n(704),r="boxTimeDisplay_boxTime__ECpxK",s="boxTimeDisplay_time__8XCbo",a=n(184),i=function(t){var e=t.hours,n=t.minutes,i=t.seconds;return(0,a.jsxs)("div",{className:r,children:[e!==(0,u.Hr)(0)&&(0,a.jsxs)("p",{className:s,children:[e," "]}),(0,a.jsxs)("p",{className:s,children:[n," "]}),(0,a.jsxs)("p",{className:s,children:[i," "]})]})}},626:function(t,e,n){n.d(e,{Z:function(){return v}});var u=n(885),r=n(791),s=n(504),a=n(704),i="intervalTimer_container__2AmuY",c="intervalTimer_btn__OuyoB",o="intervalTimer_titleName__6WUJI",f="intervalTimer_button__3gSsc",l=n(159),m=n(391),d=n(790),h=n(184),v=function(t){var e=t.data,n=(0,r.useState)({}),v=(0,u.Z)(n,2),S=v[0],Z=v[1],_=(0,r.useState)(""),x=(0,u.Z)(_,2),j=x[0],p=x[1],b=(0,r.useState)(""),N=(0,u.Z)(b,2),T=N[0],E=N[1],k=(0,r.useState)(""),y=(0,u.Z)(k,2),M=y[0],g=y[1],C=(0,r.useState)(""),w=(0,u.Z)(C,2),I=w[0],O=w[1],D=(0,r.useState)(""),A=(0,u.Z)(D,2),H=A[0],J=A[1],R=(0,r.useState)(""),B=(0,u.Z)(R,2),F=B[0],K=B[1],L=(0,r.useState)(""),Q=(0,u.Z)(L,2),U=Q[0],W=Q[1],X=(0,r.useState)(""),Y=(0,u.Z)(X,2),q=Y[0],z=Y[1],G=(0,r.useState)(""),P=(0,u.Z)(G,2),V=P[0],$=P[1],tt=(0,r.useState)(0),et=(0,u.Z)(tt,2),nt=et[0],ut=et[1],rt=(0,r.useState)(!1),st=(0,u.Z)(rt,2),at=st[0],it=st[1],ct=(0,r.useState)(!1),ot=(0,u.Z)(ct,2),ft=ot[0],lt=ot[1],mt=(0,r.useState)(!1),dt=(0,u.Z)(mt,2),ht=dt[0],vt=dt[1],St=(0,r.useRef)(null),Zt=at||ft,_t=(0,l.Z)(),xt="00";(0,r.useEffect)((function(){Z(e)}),[e]),(0,r.useEffect)((function(){var t=S.workSum,e=S.restSum,n=S.numbOfRepeat,u=S.name;E(t),g(e),n&&ut(n-1),p(u||"Timer")}),[S]),(0,r.useEffect)((function(){var t=(0,a.f8)(T),e=t.hours,n=t.minutes,u=t.seconds;O(e),J(n),K(u)}),[T]),(0,r.useEffect)((function(){var t=(0,a.f8)(M),e=t.hours,n=t.minutes,u=t.seconds;W(e),z(n),$(u)}),[M]),(0,r.useEffect)((function(){nt&&0===nt||at&&(St.current=setInterval((function(){E((function(t){return t-1}))}),1e3))}),[at]),(0,r.useEffect)((function(){0===T&&(bt(),it(!1),lt(!0))}),[T]),(0,r.useEffect)((function(){ft&&(St.current=setInterval((function(){g((function(t){return t-1}))}),1e3))}),[ft]),(0,r.useEffect)((function(){0===M&&(bt(),lt(!1)),0===M&&nt&&vt(!0)}),[M]),(0,r.useEffect)((function(){ht&&nt&&(jt(),it(!0))}),[ht]);var jt=function(){if(nt>=1){var t=S.workSum,e=S.restSum;ut((function(t){return t-1})),E(t),g(e),pt()}},pt=function(){0!==T&&it(!0),0===T&&0!==M&&lt(!0),nt&&vt(!1)},bt=function(){clearInterval(St.current),it(!1),0===T&&lt(!1)};return(0,h.jsx)("div",{className:i,children:S?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.OL,{to:_t<1024?"/timers":"/",className:c,children:" \u041d\u0430\u0437\u0430\u0434 "}),(0,h.jsxs)("h2",{className:o,children:[j," "]}),at&&(0,h.jsx)(m.Z,{hours:I,minutes:H,seconds:F}),ft&&(0,h.jsx)(m.Z,{hours:U,minutes:q,seconds:V}),!ft&&!at&&(0,h.jsx)(m.Z,{hours:xt,minutes:xt,seconds:xt}),!Zt&&(0,h.jsx)("button",{type:"button",onClick:pt,className:f,children:"\u0421\u0442\u0430\u0440\u0442"}),Zt&&(0,h.jsx)("button",{type:"button",onClick:bt,className:f,children:"\u041f\u0430\u0443\u0437\u0430"})]}):(0,h.jsx)(d.AO,{})})}},265:function(t,e,n){n.r(e);e.default=function(t){return String(t).padStart(2,"0")}},704:function(t,e,n){n.d(e,{Hr:function(){return r.default},fS:function(){return u},f8:function(){return s},fT:function(){return o},Qf:function(){return c}});var u=function(t,e,n){return 1*t+60*e+60*n*60},r=n(265),s=function(t){var e=3600;return{hours:(0,r.default)(Math.floor(t/e)),minutes:(0,r.default)(Math.floor(t%e/60)),seconds:(0,r.default)(Math.floor(t%e%60))}},a=n(265).default,i=function(t){var e=6e4,n=36e5,u=24*n;return{days:Math.floor(t/u),hours:a(Math.floor(t%u/n)),minutes:a(Math.floor(t%u%n/e)),seconds:a(Math.floor(t%u%n%e/1e3))}},c=function(t){var e=t-new Date(2022,1,24,5,0,0).getTime();return i(e)},o=function(t){var e=t.timers,n=t.pathname;if(e>0){var u=e[0],r=u.typeTimer,s=u.id;return"/timers"!==n?n:"/timers/".concat(r,"/").concat(s)}}},315:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});var u=n(885),r=n(791),s=n(626),a=n(184),i=function(){var t=(0,r.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("interval")))&&void 0!==t?t:""})),e=(0,u.Z)(t,1)[0];return(0,a.jsx)(s.Z,{data:e})}}}]);
//# sourceMappingURL=315.36ccfcf2.chunk.js.map