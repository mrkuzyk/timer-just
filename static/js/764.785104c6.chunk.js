"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[764],{391:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(704),u="boxTimeDisplay_boxTime__ECpxK",s="boxTimeDisplay_time__8XCbo",i=n(184),a=function(t){var e=t.hours,n=t.minutes,a=t.seconds;return(0,i.jsxs)("div",{className:u,children:[e!==(0,r.Hr)(0)&&(0,i.jsxs)("p",{className:s,children:[e," "]}),(0,i.jsxs)("p",{className:s,children:[n," "]}),(0,i.jsxs)("p",{className:s,children:[a," "]})]})}},752:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(885),u=n(791),s=n(504),i=n(704),a="singleTimer_container__fRYzz",c="singleTimer_btn__81FnL",o="singleTimer_titleName__MeUsu",f="singleTimer_button__gilOt",l=n(159),m=n(391),d=n(790),h=n(184),v=function(t){var e=t.data,n=(0,u.useState)({}),v=(0,r.Z)(n,2),_=v[0],x=v[1],p=(0,u.useState)(!1),j=(0,r.Z)(p,2),S=j[0],Z=j[1],b=(0,u.useState)(""),T=(0,r.Z)(b,2),N=T[0],g=T[1],M=(0,u.useState)(""),E=(0,r.Z)(M,2),k=E[0],y=E[1],C=(0,u.useState)(""),O=(0,r.Z)(C,2),w=O[0],D=O[1],I=(0,u.useState)(""),z=(0,r.Z)(I,2),F=z[0],H=z[1],L=(0,u.useState)(""),R=(0,r.Z)(L,2),U=R[0],A=R[1],J=(0,l.Z)(),K=(0,u.useRef)(null);(0,u.useEffect)((function(){x(e)}),[e]),(0,u.useEffect)((function(){_.name?g(_.name):g("Timer"),y(_.totalTimeSum)}),[e,_]),(0,u.useEffect)((function(){var t=(0,i.f8)(k),e=t.hours,n=t.minutes,r=t.seconds;D(e),H(n),A(r)}),[k]),(0,u.useEffect)((function(){S&&(K.current=setInterval((function(){y((function(t){return t-1}))}),1e3))}),[S]),(0,u.useEffect)((function(){0===k&&Q()}),[k]);var Q=function(){clearInterval(K.current),Z(!1)};return(0,h.jsx)("div",{className:a,children:_?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.OL,{to:J<1024?"/timers":"/",className:c,children:" \u041d\u0430\u0437\u0430\u0434 "}),(0,h.jsxs)("h2",{className:o,children:[N," "]}),(0,h.jsx)(m.Z,{hours:w,minutes:F,seconds:U}),!S&&(0,h.jsx)("button",{type:"button",onClick:function(){Z(!0)},className:f,children:"start"}),S&&(0,h.jsx)("button",{type:"button",onClick:Q,className:f,children:"pause"})]}):(0,h.jsx)(d.AO,{})})}},265:function(t,e,n){n.r(e);e.default=function(t){return String(t).padStart(2,"0")}},704:function(t,e,n){n.d(e,{Hr:function(){return u.default},fS:function(){return r},f8:function(){return s},fT:function(){return o},Qf:function(){return c}});var r=function(t,e,n){return 1*t+60*e+60*n*60},u=n(265),s=function(t){var e=3600;return{hours:(0,u.default)(Math.floor(t/e)),minutes:(0,u.default)(Math.floor(t%e/60)),seconds:(0,u.default)(Math.floor(t%e%60))}},i=n(265).default,a=function(t){var e=6e4,n=36e5,r=24*n;return{days:Math.floor(t/r),hours:i(Math.floor(t%r/n)),minutes:i(Math.floor(t%r%n/e)),seconds:i(Math.floor(t%r%n%e/1e3))}},c=function(t){var e=t-new Date(2022,1,24,5,0,0).getTime();return a(e)},o=function(t){var e=t.timers,n=t.pathname;if(e>0){var r=e[0],u=r.typeTimer,s=r.id;return"/timers"!==n?n:"/timers/".concat(u,"/").concat(s)}}},764:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var r=n(885),u=n(752),s=n(871),i=n(791),a=n(184),c=function(){var t=(0,i.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("timers")))&&void 0!==t?t:[]})),e=(0,r.Z)(t,1)[0],n=(0,i.useState)(""),c=(0,r.Z)(n,2),o=c[0],f=c[1],l=(0,s.UO)().id;return(0,i.useEffect)((function(){var t=e.find((function(t){return t.id===l}));t&&f(t)}),[l,e]),(0,a.jsx)(u.Z,{data:o})}}}]);
//# sourceMappingURL=764.785104c6.chunk.js.map