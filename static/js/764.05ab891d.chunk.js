"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[764],{391:function(t,e,n){n.d(e,{Z:function(){return i}});var u=n(676),r="boxTimeDisplay_boxTime__ECpxK",s="boxTimeDisplay_time__8XCbo",a=n(184),i=function(t){var e=t.hours,n=t.minutes,i=t.seconds;return(0,a.jsxs)("div",{className:r,children:[e!==(0,u.Hr)(0)&&(0,a.jsxs)("p",{className:s,children:[e," "]}),(0,a.jsxs)("p",{className:s,children:[n," "]}),(0,a.jsxs)("p",{className:s,children:[i," "]})]})}},752:function(t,e,n){n.d(e,{Z:function(){return _}});var u=n(885),r=n(791),s=n(504),a=n(676),i="singleTimer_container__fRYzz",o="singleTimer_btn__81FnL",c="singleTimer_titleName__MeUsu",f="singleTimer_button__gilOt",l=n(159),d=n(391),m=n(790),h=n(184),_=function(t){var e=t.data,n=(0,r.useState)({}),_=(0,u.Z)(n,2),v=_[0],x=_[1],j=(0,r.useState)(!1),S=(0,u.Z)(j,2),p=S[0],Z=S[1],b=(0,r.useState)(""),N=(0,u.Z)(b,2),g=N[0],T=N[1],M=(0,r.useState)(""),E=(0,u.Z)(M,2),k=E[0],C=E[1],y=(0,r.useState)(""),O=(0,u.Z)(y,2),w=O[0],D=O[1],I=(0,r.useState)(""),z=(0,u.Z)(I,2),F=z[0],H=z[1],L=(0,r.useState)(""),R=(0,u.Z)(L,2),U=R[0],A=R[1],J=(0,l.Z)(),K=(0,r.useRef)(null);(0,r.useEffect)((function(){x(e)}),[e]),(0,r.useEffect)((function(){v.name?T(v.name):T("Timer"),C(v.totalTimeSum)}),[e,v]),(0,r.useEffect)((function(){var t=(0,a.f8)(k),e=t.hours,n=t.minutes,u=t.seconds;D(e),H(n),A(u)}),[k]),(0,r.useEffect)((function(){p&&(K.current=setInterval((function(){C((function(t){return t-1}))}),1e3))}),[p]),(0,r.useEffect)((function(){0===k&&Q()}),[k]);var Q=function(){clearInterval(K.current),Z(!1)};return(0,h.jsx)("div",{className:i,children:v?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.OL,{to:J<1024?"/timers":"/",className:o,children:" \u041d\u0430\u0437\u0430\u0434 "}),(0,h.jsxs)("h2",{className:c,children:[g," "]}),(0,h.jsx)(d.Z,{hours:w,minutes:F,seconds:U}),!p&&(0,h.jsx)("button",{type:"button",onClick:function(){Z(!0)},className:f,children:"start"}),p&&(0,h.jsx)("button",{type:"button",onClick:Q,className:f,children:"pause"})]}):(0,h.jsx)(m.AO,{})})}},265:function(t,e,n){n.r(e);e.default=function(t){return String(t).padStart(2,"0")}},676:function(t,e,n){n.d(e,{Hr:function(){return r.default},fS:function(){return u},f8:function(){return s},Qf:function(){return o}});var u=function(t,e,n){return 1*t+60*e+60*n*60},r=n(265),s=function(t){var e=3600;return{hours:(0,r.default)(Math.floor(t/e)),minutes:(0,r.default)(Math.floor(t%e/60)),seconds:(0,r.default)(Math.floor(t%e%60))}},a=n(265).default,i=function(t){var e=6e4,n=36e5,u=24*n;return{days:Math.floor(t/u),hours:a(Math.floor(t%u/n)),minutes:a(Math.floor(t%u%n/e)),seconds:a(Math.floor(t%u%n%e/1e3))}},o=function(t){var e=t-new Date(2022,1,24,5,0,0).getTime();return i(e)}},764:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var u=n(885),r=n(752),s=n(871),a=n(791),i=n(184),o=function(){var t=(0,a.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("timers")))&&void 0!==t?t:[]})),e=(0,u.Z)(t,1)[0],n=(0,a.useState)(""),o=(0,u.Z)(n,2),c=o[0],f=o[1],l=(0,s.UO)().id;return(0,a.useEffect)((function(){var t=e.find((function(t){return t.id===l}));t&&f(t)}),[l,e]),(0,i.jsx)(r.Z,{data:c})}}}]);
//# sourceMappingURL=764.05ab891d.chunk.js.map