"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[279],{152:function(e,s,a){a.d(s,{Z:function(){return l}});var i=a(504),n="timerTypeDefinition_navLink__B-JP9",t="timerTypeDefinition_active__bABUd",r="timerTypeDefinition_homeList__D6Lsb timerTypeDefinition_navLink__B-JP9",c=a(184),l=function(e){var s=e.page,a=e.typeTimer,l=e.id,o=e.children;return console.log("list"===s),(0,c.jsxs)(c.Fragment,{children:["single"===a&&(0,c.jsx)(i.OL,{to:"/timers/single/".concat(l),className:"list"===s?function(e){return e.isActive?"".concat(t," ").concat(n):n}:r,children:o}),"interval"===a&&(0,c.jsx)(i.OL,{to:"/timers/interval/".concat(l),className:"list"===s?function(e){return e.isActive?"".concat(t," ").concat(n):n}:r,children:o})]})}},265:function(e,s,a){a.r(s);s.default=function(e){return String(e).padStart(2,"0")}},676:function(e,s,a){a.d(s,{Hr:function(){return n.default},fS:function(){return i},f8:function(){return t},Qf:function(){return l}});var i=function(e,s,a){return 1*e+60*s+60*a*60},n=a(265),t=function(e){var s=3600;return{hours:(0,n.default)(Math.floor(e/s)),minutes:(0,n.default)(Math.floor(e%s/60)),seconds:(0,n.default)(Math.floor(e%s%60))}},r=a(265).default,c=function(e){var s=6e4,a=36e5,i=24*a;return{days:Math.floor(e/i),hours:r(Math.floor(e%i/a)),minutes:r(Math.floor(e%i%a/s)),seconds:r(Math.floor(e%i%a%s/1e3))}},l=function(e){var s=e-new Date(2022,1,24,5,0,0).getTime();return c(s)}},279:function(e,s,a){a.r(s),a.d(s,{default:function(){return Z}});var i=a(885),n=a(476),t=a(152),r=a(791),c={list:"homeTimerList_list__mh7ym",items:"homeTimerList_items__MaMb+"},l=a(184),o=function(){var e=(0,r.useState)((function(){return JSON.parse(localStorage.getItem("timers"))})),s=(0,i.Z)(e,1)[0];return(0,l.jsx)("div",{className:c.boxSavedList,children:s.length>0?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{className:c.list,children:s.map((function(e){var s=e.id,a=e.name,i=e.totalTimeSum,n=e.typeTimer;return(0,l.jsx)("li",{className:c.items,children:(0,l.jsxs)(t.Z,{id:s,typeTimer:n,page:"home",children:[a||"Timer",(0,l.jsx)("br",{}),i," / ",n]})},s)}))})}):(0,l.jsx)(n.Z,{})})},m=a(676),_="warTime_boxWar__NJBB8",h="warTime_title__qo8Qz",d="warTime_boxWarTime__9lUD4",u="warTime_day__iYd3G",x="warTime_span__9aoa8",f="warTime_boxTime__9MM4k",j="warTime_time__DJ2yD",N="warTime_spanTime__6IjOU",v=function(){var e=(0,r.useState)(Date.now()),s=(0,i.Z)(e,2),a=s[0],n=s[1];(0,r.useEffect)((function(){setInterval((function(){n(Date.now())}),1e3)}),[]);var t=(0,m.Qf)(a),c=t.days,o=t.hours,v=t.minutes,p=t.seconds;return(0,l.jsxs)("div",{className:_,children:[(0,l.jsx)("h2",{className:h,children:"\u0427\u0430\u0441 \u043f\u043e\u0432\u043d\u043e\u043c\u0430\u0441\u0448\u0442\u0430\u0431\u043d\u043e\u0433\u043e \u0432\u0442\u043e\u0440\u0433\u043d\u0435\u043d\u043d\u044f \u0432 \u0423\u043a\u0440\u0430\u0457\u043d\u0443"}),(0,l.jsxs)("div",{className:d,children:[(0,l.jsxs)("p",{className:u,children:[c,(0,l.jsx)("span",{className:x,children:"\u0434\u043d\u0456\u0432"})]}),(0,l.jsxs)("div",{className:f,children:[(0,l.jsxs)("p",{className:j,children:[o," ",(0,l.jsx)("span",{className:N,children:":"})," "]}),(0,l.jsxs)("p",{className:j,children:[v," ",(0,l.jsx)("span",{className:N,children:":"})," "]}),(0,l.jsxs)("p",{className:j,children:[p," "]})]})]})]})},p=a(159),T=a(504),y="home_container__H4r93",L="home_boxAuthorization__ykMtn",b="home_authorization__w8Ih6",g="home_boxCreate__PTGXy",w="home_createTitle__J11kz",D="home_createList__nlLCQ",M="home_createItems__DLYXJ",S="home_navLink__PzNyF",k="home_createSpan__+3yKG",U="home_box__uNV0U",J="home_saved__Hh21G",O="home_boxSaved__qbKIp",I="home_savedTitle__apU2d",Z=function(){var e=(0,p.Z)();return(0,l.jsxs)("div",{className:y,children:[(0,l.jsxs)("div",{className:L,children:[(0,l.jsx)(T.OL,{to:"/login",className:b,children:" \u0423\u0432\u0456\u0439\u0442\u0438 "}),(0,l.jsx)(T.OL,{to:"/register",className:b,children:" \u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f "})]}),(0,l.jsxs)("div",{className:g,children:[(0,l.jsx)("h2",{className:w,children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0442\u0430\u0439\u043c\u0435\u0440"}),(0,l.jsxs)("ul",{className:D,children:[(0,l.jsx)("li",{className:M,children:(0,l.jsx)(T.rU,{to:"create/simple",className:S,children:"\u041f\u0440\u043e\u0441\u0442\u0438\u0439 \u0442\u0430\u0439\u043c\u0435\u0440"})}),(0,l.jsx)("li",{className:M,children:(0,l.jsx)(T.rU,{to:"create/interval",className:S,children:"\u0406\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044c\u043d\u0438\u0439 \u0442\u0430\u0439\u043c\u0435\u0440"})}),(0,l.jsx)("li",{className:M,children:(0,l.jsx)(T.rU,{to:"create/stopwatch",className:S,children:"\u0421\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0456\u0440"})}),(0,l.jsx)("li",{className:M,children:(0,l.jsx)(T.rU,{to:"/create",className:S,children:(0,l.jsx)("span",{className:k,children:"..."})})})]})]}),e<1024?(0,l.jsxs)("div",{className:U,children:[(0,l.jsx)(T.OL,{to:"/timers",className:J,children:" \u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0456 \u0442\u0430\u0439\u043c\u0435\u0440\u0438 "}),e>480&&(0,l.jsx)(v,{})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:O,children:[(0,l.jsx)("h2",{className:I,children:"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0456 \u0442\u0430\u0439\u043c\u0435\u0440\u0438"}),(0,l.jsx)(o,{})]}),(0,l.jsx)(v,{})]})]})}}}]);
//# sourceMappingURL=279.f97c7293.chunk.js.map