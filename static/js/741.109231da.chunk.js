"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[741],{633:function(e,t){t.Z=function(e,t,n){return 1*e+60*t+60*n*60}},741:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(982),a=n(885),i=n(791),u=n(871),o=n(984),s=n(633),c={form:"createSingleTimer_form__of1-y",inputName:"createSingleTimer_inputName__9klcd",input:"createSingleTimer_input__XYY2X",btnBox:"createSingleTimer_btnBox__b5pfL",button:"createSingleTimer_button__Qwr0+"},l=n(184),m=function(){var e=(0,i.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("timers")))&&void 0!==e?e:[]})),t=(0,a.Z)(e,2),n=t[0],m=t[1],f=(0,i.useState)(""),p=(0,a.Z)(f,2),d=p[0],h=p[1],b=(0,i.useState)(!1),x=(0,a.Z)(b,2),S=x[0],g=x[1],v=(0,i.useState)(!1),j=(0,a.Z)(v,2),y=j[0],_=j[1],Z=(0,i.useState)("single"),N=(0,a.Z)(Z,1)[0],k=(0,i.useState)(""),w=(0,a.Z)(k,2),C=w[0],T=w[1],I=(0,i.useState)(""),A=(0,a.Z)(I,2),B=A[0],E=A[1],F=(0,i.useState)(""),J=(0,a.Z)(F,2),O=J[0],U=J[1],X=(0,i.useState)(""),Y=(0,a.Z)(X,2),D=Y[0],H=Y[1],L=(0,i.useState)(""),Q=(0,a.Z)(L,2),R=Q[0],V=Q[1],q=(0,i.useState)(""),z=(0,a.Z)(q,2),G=z[0],K=z[1],M=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":T(r);break;case"hours":E(r);break;case"minutes":U(r);break;case"seconds":H(r)}};(0,i.useEffect)((function(){var e=(0,s.Z)(D,O,B);K(e)}),[B,O,D]),(0,i.useEffect)((function(){window.localStorage.setItem("timers",JSON.stringify(n))}),[n]),(0,i.useEffect)((function(){window.localStorage.setItem("single",JSON.stringify(d))}),[d]);var P=function(){T(""),E(""),U(""),H(""),K("")};return(0,l.jsxs)(l.Fragment,{children:[y&&(0,l.jsx)(u.Fg,{to:"/timers/single",replace:!0}),R&&(0,l.jsx)(u.Fg,{to:"/",replace:!0}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:(0,o.x0)(6),typeTimer:N,name:C,totalTimeSum:G};S&&m((function(e){return[].concat((0,r.Z)(n),[t])})),h(t),_(!0),P()},className:c.form,children:[(0,l.jsxs)("div",{className:c.inputBox,children:[(0,l.jsx)("div",{children:(0,l.jsx)("label",{children:(0,l.jsx)("input",{type:"text",name:"name",value:C,onChange:M,placeholder:"Timer name",className:c.inputName,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u0442\u0430\u0439\u043c\u0435\u0440\u0430"})})}),(0,l.jsx)("label",{children:(0,l.jsx)("input",{type:"number",name:"hours",value:B,min:"0",max:"23",pattern:"[0-9]{2}",onChange:M,placeholder:"00",className:c.input,title:"\u0413\u043e\u0434\u0438\u043d\u0438"})}),(0,l.jsx)("label",{children:(0,l.jsx)("input",{type:"number",name:"minutes",value:O,min:"0",max:"59",onChange:M,placeholder:"00",className:c.input,title:"\u0425\u0432\u0438\u043b\u0438\u043d\u0438"})}),(0,l.jsx)("label",{children:(0,l.jsx)("input",{type:"number",name:"seconds",value:D,min:"0",max:"59",onChange:M,placeholder:"00",className:c.input,title:"\u0421\u0435\u043a\u0443\u043d\u0434\u0438"})})]}),(0,l.jsxs)("label",{children:[" \u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",(0,l.jsx)("input",{type:"checkbox",name:"handleChange",checked:S,onChange:function(e){g((function(e){return!e}))}})]}),(0,l.jsxs)("div",{className:c.btnBox,children:[(0,l.jsx)("button",{type:"button",onClick:function(){V(!0)},children:"Home"}),0!==G&&(0,l.jsx)("button",{type:"submit",className:c.button,children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"})]})]})]})}},982:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(907);var a=n(181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=741.109231da.chunk.js.map