"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[285],{152:function(t,e,i){i.d(e,{Z:function(){return m}});var n=i(504),s="timerTypeDefinition_navLink__B-JP9",r="timerTypeDefinition_active__bABUd",c="timerTypeDefinition_homeList__D6Lsb timerTypeDefinition_navLink__B-JP9",a=i(184),m=function(t){var e=t.page,i=t.typeTimer,m=t.id,l=t.children;return(0,a.jsxs)(a.Fragment,{children:["single"===i&&(0,a.jsx)(n.OL,{to:"/timers/single/".concat(m),className:"list"===e?function(t){return t.isActive?"".concat(r," ").concat(s):s}:c,children:l}),"interval"===i&&(0,a.jsx)(n.OL,{to:"/timers/interval/".concat(m),className:"list"===e?function(t){return t.isActive?"".concat(r," ").concat(s):s}:c,children:l})]})}},285:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var n=i(885),s=i(476),r=i(152),c=i(159),a=i(791),m=i(504),l=i(871),o="timersList_container__5p3CB",u="timersList_btn__k+GmK",_="timersList_list__0tvtJ",d="timersList_items__FySy8",f=i(184),h=function(){var t=(0,a.useState)((function(){return JSON.parse(localStorage.getItem("timers"))})),e=(0,n.Z)(t,1)[0],i=(0,a.useState)(!0),h=(0,n.Z)(i,2),j=h[0],p=h[1],v=(0,l.TH)().pathname,x=(0,c.Z)();(0,a.useEffect)((function(){j&&p(!1)}),[j]);var g=e[0],L=g.typeTimer,T=g.id,y="/timers"!==v?v:"/timers/".concat(L,"/").concat(T);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:o,children:[x<1024&&(0,f.jsx)(m.OL,{to:"/",className:u,children:" \u041d\u0430\u0437\u0430\u0434 "}),e.length>0?(0,f.jsxs)(f.Fragment,{children:[j&&x>1023&&(0,f.jsx)(l.Fg,{to:y}),(0,f.jsx)("ul",{className:_,children:e.map((function(t){var e=t.id,i=t.name,n=t.totalTimeSum,s=t.typeTimer;return(0,f.jsx)("li",{className:d,children:(0,f.jsxs)(r.Z,{id:e,typeTimer:s,page:"list",children:[i||"Timer",(0,f.jsx)("br",{}),n," / ",s]})},e)}))})]}):(0,f.jsx)(s.Z,{})]}),(0,f.jsx)(l.j3,{})]})}}}]);
//# sourceMappingURL=285.3321895e.chunk.js.map