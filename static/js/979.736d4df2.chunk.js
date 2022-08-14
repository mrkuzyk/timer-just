"use strict";(self.webpackChunktimer_just=self.webpackChunktimer_just||[]).push([[979],{53:function(e,t,n){n.d(t,{Hr:function(){return a},YF:function(){return i},qm:function(){return o},fS:function(){return r},f8:function(){return u}});var r=function(e){return 1*e.seconds+60*e.minutes+60*e.hours*60},a=function(e){return String(e).padStart(2,"0")},u=function(e){return{hours:a(Math.floor(e/3600)),minutes:a(Math.floor(e%3600/60)),seconds:a(Math.floor(e%3600%60))}},i=JSON.parse(localStorage.getItem("timers")),o=JSON.parse(localStorage.getItem("tempTimer"))},979:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(907);var a=n(181);function u(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n(885),o=n(791),s=n(871),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},l=n(53),m={form:"createdTimer_form__QlzA-",inputName:"createdTimer_inputName__D-Bwr",input:"createdTimer_input__VCmjI",btnBox:"createdTimer_btnBox__WDrOx",button:"createdTimer_button__0KIVw"},f=n(184),d=function(){var e=(0,o.useState)((function(){return null!==l.YF&&void 0!==l.YF?l.YF:[]})),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,o.useState)(""),d=(0,i.Z)(a,2),p=d[0],h=d[1],b=(0,o.useState)(""),x=(0,i.Z)(b,2),S=x[0],v=x[1],j=(0,o.useState)(""),g=(0,i.Z)(j,2),y=g[0],_=g[1],N=(0,o.useState)(""),w=(0,i.Z)(N,2),Z=w[0],C=w[1],T=(0,o.useState)(""),k=(0,i.Z)(T,2),I=k[0],F=k[1],A=(0,o.useState)(!1),B=(0,i.Z)(A,2),O=B[0],D=B[1],E=(0,o.useState)(""),J=(0,i.Z)(E,2),Y=J[0],M=J[1],V=(0,o.useState)(""),q=(0,i.Z)(V,2),H=q[0],U=q[1],z=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":v(r);break;case"hours":_(r);break;case"minutes":C(r);break;case"seconds":F(r)}};(0,o.useEffect)((function(){var e=(0,l.fS)({seconds:I,hours:y,minutes:Z});U(e)}),[y,Z,I]);var K=function(){v(""),_(""),C(""),F(""),U("")};(0,o.useEffect)((function(){window.localStorage.setItem("timers",JSON.stringify(n))}),[n]),(0,o.useEffect)((function(){window.localStorage.setItem("tempTimer",JSON.stringify(p))}),[p]);return(0,f.jsxs)(f.Fragment,{children:[O&&(0,f.jsx)(s.Fg,{to:"/one-time/".concat(p.id),replace:!0}),Y&&(0,f.jsx)(s.Fg,{to:"/",replace:!0}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:c(6),name:S,sum:H};r((function(e){return[].concat(u(n),[t])})),K()},className:m.form,children:[(0,f.jsxs)("div",{className:m.inputBox,children:[(0,f.jsx)("div",{children:(0,f.jsx)("label",{children:(0,f.jsx)("input",{type:"text",name:"name",value:S,onChange:z,placeholder:"Timer name",className:m.inputName,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u0442\u0430\u0439\u043c\u0435\u0440\u0430",required:!0})})}),(0,f.jsx)("label",{children:(0,f.jsx)("input",{type:"number",name:"hours",value:y,min:"0",max:"24",pattern:"[0-9]{2}",onChange:z,placeholder:"00",className:m.input,title:"\u0413\u043e\u0434\u0438\u043d\u0438"})}),(0,f.jsx)("label",{children:(0,f.jsx)("input",{type:"number",name:"minutes",value:Z,min:"0",max:"60",onChange:z,placeholder:"00",className:m.input,title:"\u0425\u0432\u0438\u043b\u0438\u043d\u0438"})}),(0,f.jsx)("label",{children:(0,f.jsx)("input",{type:"number",name:"seconds",value:I,min:"0",max:"60",onChange:z,placeholder:"00",className:m.input,title:"\u0421\u0435\u043a\u0443\u043d\u0434\u0438"})})]}),(0,f.jsxs)("div",{className:m.btnBox,children:[(0,f.jsx)("button",{type:"button",onClick:function(){M(!0)},children:"Home"}),0!==H&&(0,f.jsx)("button",{type:"submit",className:m.button,children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"}),0!==H&&(0,f.jsx)("button",{type:"submit",className:m.button,onClick:function(e){e.preventDefault();var t={id:c(6),name:S,sum:H};h(t),D(!0),K()},children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"})]})]}),(0,f.jsxs)("h2",{children:[y," - ",Z," - ",I," - ",H," "]})]})}}}]);
//# sourceMappingURL=979.736d4df2.chunk.js.map