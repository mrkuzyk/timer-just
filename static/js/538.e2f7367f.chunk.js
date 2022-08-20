"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[538],{633:function(e,t){t.Z=function(e,t,n){return 1*e+60*t+60*n*60}},538:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(982),r=n(885),u=n(791),i=n(871),s=n(984),o=n(633),l={form:"createIntervalTimer_form__bNsx2",inputName:"createIntervalTimer_inputName__zca1M",input:"createIntervalTimer_input__93cG2",btnBox:"createIntervalTimer_btnBox__OyaDZ",button:"createIntervalTimer_button__f90ue"},c=n(184),m=function(){var e=(0,u.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("exp")))&&void 0!==e?e:[]})),t=(0,r.Z)(e,2),n=t[0],m=t[1],p=(0,u.useState)(""),d=(0,r.Z)(p,2),f=d[0],x=d[1],b=(0,u.useState)(""),h=(0,r.Z)(b,2),v=h[0],S=h[1],j=(0,u.useState)(""),y=(0,r.Z)(j,2),g=y[0],Z=y[1],k=(0,u.useState)(""),N=(0,r.Z)(k,2),w=N[0],_=N[1],C=(0,u.useState)(""),I=(0,r.Z)(C,2),T=I[0],E=I[1],B=(0,u.useState)(""),H=(0,r.Z)(B,2),M=H[0],A=H[1],O=(0,u.useState)(""),D=(0,r.Z)(O,2),F=D[0],J=D[1],U=(0,u.useState)(""),q=(0,r.Z)(U,2),z=q[0],G=q[1],R=(0,u.useState)(!1),V=(0,r.Z)(R,2),K=V[0],L=V[1],P=(0,u.useState)(""),Q=(0,r.Z)(P,2),W=Q[0],X=Q[1],Y=(0,u.useState)(""),$=(0,r.Z)(Y,2),ee=$[0],te=$[1],ne=(0,u.useState)(""),ae=(0,r.Z)(ne,2),re=ae[0],ue=ae[1],ie=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":S(a);break;case"workHours":Z(a);break;case"workMinutes":_(a);break;case"workSeconds":E(a);break;case"restHours":A(a);break;case"restMinutes":J(a);break;case"restSeconds":G(a)}};(0,u.useEffect)((function(){var e=(0,o.Z)(T,w,g);te(e)}),[T,w,g]),(0,u.useEffect)((function(){var e=(0,o.Z)(z,F,M);ue(e)}),[z,F,M]);var se=function(){S(""),Z(""),_(""),E(""),A(""),J(""),G(""),te(""),ue("")};(0,u.useEffect)((function(){window.localStorage.setItem("exp",JSON.stringify(n))}),[n]),(0,u.useEffect)((function(){window.localStorage.setItem("tempTimerExp",JSON.stringify(f))}),[f]);return(0,c.jsxs)(c.Fragment,{children:[K&&(0,c.jsx)(i.Fg,{to:"/exp/".concat(f.id),replace:!0}),W&&(0,c.jsx)(i.Fg,{to:"/",replace:!0}),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:(0,s.x0)(6),name:v,workSum:ee,restSum:re};m((function(e){return[].concat((0,a.Z)(n),[t])})),se()},className:l.form,children:[(0,c.jsxs)("div",{className:l.inputBox,children:[(0,c.jsx)("div",{children:(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"text",name:"name",value:v,onChange:ie,placeholder:"Timer name",className:l.inputName,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u0442\u0430\u0439\u043c\u0435\u0440\u0430",required:!0})})}),(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"number",name:"workHours",value:g,min:"0",max:"23",pattern:"[0-9]{2}",onChange:ie,placeholder:"00",className:l.input,title:"\u0413\u043e\u0434\u0438\u043d\u0438"})}),(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"number",name:"workMinutes",value:w,min:"0",max:"59",onChange:ie,placeholder:"00",className:l.input,title:"\u0425\u0432\u0438\u043b\u0438\u043d\u0438"})}),(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"number",name:"workSeconds",value:T,min:"0",max:"59",onChange:ie,placeholder:"00",className:l.input,title:"\u0421\u0435\u043a\u0443\u043d\u0434\u0438"})})]}),(0,c.jsxs)("div",{className:l.inputBox,children:[(0,c.jsx)("p",{children:"\u0412\u0456\u0434\u043f\u043e\u0447\u0438\u043d\u043e\u043a"}),(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"number",name:"restHours",value:M,min:"0",max:"23",pattern:"[0-9]{2}",onChange:ie,placeholder:"00",className:l.input,title:"\u0413\u043e\u0434\u0438\u043d\u0438"})}),(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"number",name:"restMinutes",value:F,min:"0",max:"59",onChange:ie,placeholder:"00",className:l.input,title:"\u0425\u0432\u0438\u043b\u0438\u043d\u0438"})}),(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"number",name:"restSeconds",value:z,min:"0",max:"59",onChange:ie,placeholder:"00",className:l.input,title:"\u0421\u0435\u043a\u0443\u043d\u0434\u0438"})})]}),(0,c.jsxs)("div",{className:l.btnBox,children:[(0,c.jsx)("button",{type:"button",onClick:function(){X(!0)},children:"Home"}),0!==ee&&(0,c.jsx)("button",{type:"submit",className:l.button,children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"}),0!==ee&&(0,c.jsx)("button",{type:"submit",className:l.button,onClick:function(e){e.preventDefault();var t={id:(0,s.x0)(6),name:v,workSum:ee,restSum:re};x(t),L(!0),se()},children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"})]})]})]})}},982:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(907);var r=n(181);function u(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},984:function(e,t,n){n.d(t,{x0:function(){return a}});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=538.e2f7367f.chunk.js.map