"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[586],{391:function(t,e,n){n.d(e,{Z:function(){return i}});var u=n(676),r="boxTimeDisplay_boxTime__ECpxK",s="boxTimeDisplay_time__8XCbo",a=n(184),i=function(t){var e=t.hours,n=t.minutes,i=t.seconds;return(0,a.jsxs)("div",{className:r,children:[e!==(0,u.Hr)(0)&&(0,a.jsxs)("p",{className:s,children:[e," "]}),(0,a.jsxs)("p",{className:s,children:[n," "]}),(0,a.jsxs)("p",{className:s,children:[i," "]})]})}},626:function(t,e,n){n.d(e,{Z:function(){return v}});var u=n(885),r=n(791),s=n(504),a=n(676),i="intervalTimer_container__2AmuY",c="intervalTimer_btn__OuyoB",o="intervalTimer_titleName__6WUJI",f="intervalTimer_button__3gSsc",l=n(159),m=n(391),d=n(268),h=n(184),v=function(t){var e=t.data,n=(0,r.useState)({}),v=(0,u.Z)(n,2),S=v[0],Z=v[1],_=(0,r.useState)(""),x=(0,u.Z)(_,2),j=x[0],p=x[1],b=(0,r.useState)(""),E=(0,u.Z)(b,2),N=E[0],T=E[1],k=(0,r.useState)(""),M=(0,u.Z)(k,2),g=M[0],y=M[1],C=(0,r.useState)(""),w=(0,u.Z)(C,2),I=w[0],O=w[1],D=(0,r.useState)(""),H=(0,u.Z)(D,2),J=H[0],R=H[1],U=(0,r.useState)(""),A=(0,u.Z)(U,2),B=A[0],F=A[1],K=(0,r.useState)(""),L=(0,u.Z)(K,2),Q=L[0],W=L[1],X=(0,r.useState)(""),Y=(0,u.Z)(X,2),q=Y[0],z=Y[1],G=(0,r.useState)(""),P=(0,u.Z)(G,2),V=P[0],$=P[1],tt=(0,r.useState)(0),et=(0,u.Z)(tt,2),nt=et[0],ut=et[1],rt=(0,r.useState)(!1),st=(0,u.Z)(rt,2),at=st[0],it=st[1],ct=(0,r.useState)(!1),ot=(0,u.Z)(ct,2),ft=ot[0],lt=ot[1],mt=(0,r.useState)(!1),dt=(0,u.Z)(mt,2),ht=dt[0],vt=dt[1],St=(0,r.useRef)(null),Zt=at||ft,_t=(0,l.Z)(),xt="00";(0,r.useEffect)((function(){Z(e)}),[e]),(0,r.useEffect)((function(){var t=S.workSum,e=S.restSum,n=S.numbOfRepeat,u=S.name;T(t),y(e),n&&ut(n-1),p(u||"Timer")}),[S]),(0,r.useEffect)((function(){var t=(0,a.f8)(N),e=t.hours,n=t.minutes,u=t.seconds;O(e),R(n),F(u)}),[N]),(0,r.useEffect)((function(){var t=(0,a.f8)(g),e=t.hours,n=t.minutes,u=t.seconds;W(e),z(n),$(u)}),[g]),(0,r.useEffect)((function(){nt&&0===nt||at&&(St.current=setInterval((function(){T((function(t){return t-1}))}),1e3))}),[at]),(0,r.useEffect)((function(){0===N&&(bt(),it(!1),lt(!0))}),[N]),(0,r.useEffect)((function(){ft&&(St.current=setInterval((function(){y((function(t){return t-1}))}),1e3))}),[ft]),(0,r.useEffect)((function(){0===g&&(bt(),lt(!1)),0===g&&nt&&vt(!0)}),[g]),(0,r.useEffect)((function(){ht&&nt&&(jt(),it(!0))}),[ht]);var jt=function(){if(nt>=1){var t=S.workSum,e=S.restSum;ut((function(t){return t-1})),T(t),y(e),pt()}},pt=function(){0!==N&&it(!0),0===N&&0!==g&&lt(!0),nt&&vt(!1)},bt=function(){clearInterval(St.current),it(!1),0===N&&lt(!1)};return(0,h.jsx)("div",{className:i,children:S?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.OL,{to:_t<1024?"/timers":"/",className:c,children:" \u041d\u0430\u0437\u0430\u0434 "}),(0,h.jsxs)("h2",{className:o,children:[j," "]}),at&&(0,h.jsx)(m.Z,{hours:I,minutes:J,seconds:B}),ft&&(0,h.jsx)(m.Z,{hours:Q,minutes:q,seconds:V}),!ft&&!at&&(0,h.jsx)(m.Z,{hours:xt,minutes:xt,seconds:xt}),!Zt&&(0,h.jsx)("button",{type:"button",onClick:pt,className:f,children:"\u0421\u0442\u0430\u0440\u0442"}),Zt&&(0,h.jsx)("button",{type:"button",onClick:bt,className:f,children:"\u041f\u0430\u0443\u0437\u0430"})]}):(0,h.jsx)(d.Z,{})})}},265:function(t,e,n){n.r(e);e.default=function(t){return String(t).padStart(2,"0")}},676:function(t,e,n){n.d(e,{Hr:function(){return r.default},fS:function(){return u},f8:function(){return s},Qf:function(){return c}});var u=function(t,e,n){return 1*t+60*e+60*n*60},r=n(265),s=function(t){var e=3600;return{hours:(0,r.default)(Math.floor(t/e)),minutes:(0,r.default)(Math.floor(t%e/60)),seconds:(0,r.default)(Math.floor(t%e%60))}},a=n(265).default,i=function(t){var e=6e4,n=36e5,u=24*n;return{days:Math.floor(t/u),hours:a(Math.floor(t%u/n)),minutes:a(Math.floor(t%u%n/e)),seconds:a(Math.floor(t%u%n%e/1e3))}},c=function(t){var e=t-new Date(2022,1,24,5,0,0).getTime();return i(e)}},586:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var u=n(885),r=n(871),s=n(791),a=n(626),i=n(184),c=function(){var t=(0,s.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("timers")))&&void 0!==t?t:[]})),e=(0,u.Z)(t,1)[0],n=(0,s.useState)(""),c=(0,u.Z)(n,2),o=c[0],f=c[1],l=(0,r.UO)().id;return(0,s.useEffect)((function(){var t=e.find((function(t){return t.id===l}));t&&f(t)}),[l,e]),(0,i.jsx)(a.Z,{data:o})}}}]);
//# sourceMappingURL=586.d9e64a1d.chunk.js.map