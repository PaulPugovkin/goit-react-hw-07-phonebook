(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={wrapper:"Filter_wrapper__2P9qO",input:"Filter_input__12QqW","label-text":"Filter_label-text__2DY4F"}},18:function(e,t,n){e.exports={item:"NewContact_item__1O21E",button:"NewContact_button__3UPFK"}},19:function(e,t,n){e.exports={wrapper:"UserPhoneBook_wrapper__3NhtB",list:"UserPhoneBook_list__1rePs"}},22:function(e,t,n){e.exports={wrapper:"Section_wrapper__gMIcl"}},32:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r,c,a,o=n(0),u=n(10),i=n.n(u),s=n(4),b=n(6),l=n(2),j=n(14),p=n(7),f=n(5),d=n.n(f),O=n(8),h="http://localhost:4000/contacts",m=function(){var e=Object(O.a)(d.a.mark((function e(){var t,n,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},e.next=3,fetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(O.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(O.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(b.c)("phonebook/getContacts",Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),g=Object(b.c)("phonebook/add",function(){var e=Object(O.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),_=Object(b.c)("phonebook/delete",function(){var e=Object(O.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(b.b)("phonebook/filter"),N=Object(b.d)([],(r={},Object(l.a)(r,w.fulfilled,(function(e,t){var n=t.payload;return Object(j.a)(n)})),Object(l.a)(r,g.fulfilled,(function(e,t){return[].concat(Object(j.a)(e),[t.meta.arg])})),Object(l.a)(r,_.fulfilled,(function(e,t){return Object(j.a)(e.filter((function(e){return e.id!==t.meta.arg})))})),r)),k=Object(b.d)("",Object(l.a)({},y,(function(e,t){return t.payload}))),F=Object(b.d)(!1,(c={},Object(l.a)(c,w.pending,(function(){return!0})),Object(l.a)(c,w.fulfilled,(function(){return!1})),Object(l.a)(c,w.rejected,(function(){return!1})),Object(l.a)(c,g.pending,(function(){return!0})),Object(l.a)(c,g.fulfilled,(function(){return!1})),Object(l.a)(c,g.rejected,(function(){return!1})),Object(l.a)(c,_.pending,(function(){return!0})),Object(l.a)(c,_.fulfilled,(function(){return!1})),Object(l.a)(c,_.rejected,(function(){return!1})),c)),C=Object(b.d)("",(a={},Object(l.a)(a,w.rejected,(function(){return"Something went wrong, try again later"})),Object(l.a)(a,w.pending,(function(){return""})),Object(l.a)(a,g.rejected,(function(){return"Something went wrong, try again later"})),Object(l.a)(a,g.pending,(function(){return""})),Object(l.a)(a,_.rejected,(function(){return"Something went wrong, try again later"})),Object(l.a)(a,_.pending,(function(){return""})),a)),S=Object(p.b)({items:N,filter:k,isLoading:F,onError:C}),A=Object(b.a)({reducer:{contacts:S},devTools:!1}),P=(n(32),n(22)),E=n.n(P),L=n(1),B=function(e){var t=e.children;return Object(L.jsx)("section",{className:E.a.wrapper,children:t})},D=n(20),J=n(55),T=n(9),q=n.n(T);var z=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.contacts.items})),n=Object(o.useState)(""),r=Object(D.a)(n,2),c=r[0],a=r[1],u=Object(o.useState)(""),i=Object(D.a)(u,2),b=i[0],l=i[1],j=function(e){"name"===e.target.name&&a(e.target.value),"number"===e.target.name&&l(e.target.value)},p=function(e){var n=e.toLowerCase();return t.some((function(e){return e.name.toLowerCase()===n}))};return Object(L.jsxs)("form",{className:q.a["form-wrapper"],onSubmit:function(t){if(t.preventDefault(),p(c))return alert("".concat(c," is already in your contacts"));e(g({id:Object(J.a)(),name:c,number:b})),a(""),l("")},children:[Object(L.jsxs)("label",{children:[Object(L.jsx)("span",{className:q.a["label-text"],children:"First name:"}),Object(L.jsx)("input",{onChange:j,className:q.a.input,placeholder:"Ivanov Ivan",type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(L.jsxs)("label",{children:[Object(L.jsx)("span",{className:q.a["label-text"],children:"Phone number:"}),Object(L.jsx)("input",{className:q.a.input,placeholder:"+7-999-999-99-99",type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j})]}),Object(L.jsx)("button",{type:"submit",className:q.a.button,children:"Add contact"})]})},I=n(18),U=n.n(I),Z=function(e){var t=e.name,n=e.number,r=e.id,c=Object(s.b)();return Object(L.jsxs)("li",{className:U.a.item,children:[t,": ",n," ",Object(L.jsx)("button",{className:U.a.button,type:"button",onClick:function(){return c(_(r))},children:"Delete"})]})},M=n(19),K=n.n(M),Y=function(){var e=Object(s.c)((function(e){return e.contacts})),t=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(e.items,e.filter);return Object(L.jsxs)("div",{className:K.a.wrapper,children:[Object(L.jsx)("h2",{children:"Your contacts"}),Object(L.jsx)("ul",{className:K.a.list,children:t.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(L.jsx)(Z,{name:n,number:r,id:t},t)}))})]})},G=n(13),Q=n.n(G),W=function(){var e=Object(s.c)((function(e){return e.contacts.filter})),t=Object(s.b)();return Object(L.jsx)("div",{className:Q.a.wrapper,children:Object(L.jsxs)("label",{children:[Object(L.jsx)("span",{className:Q.a["label-text"],children:"Find contact:"}),Object(L.jsx)("input",{placeholder:"Search contact",className:Q.a.input,type:"text",value:e,onChange:function(e){return t(y(e.target.value))}})]})})},$=n(21),H=(n(34),n(23)),R=n.n(H);var V=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.contacts})),n=t.items,r=t.isLoading,c=t.onError;return Object(o.useEffect)((function(){e(w())}),[]),Object(L.jsxs)(B,{children:[r&&Object(L.jsx)(R.a,{className:"spinner",type:"Grid",color:"#00BFFF",height:80,width:80}),Object(L.jsx)(z,{}),n.length>0?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(W,{}),Object(L.jsx)(Y,{})]}):Object(L.jsx)("h2",{children:"There is no contacts"}),""!==c&&Object(L.jsx)($.a,{children:$.b.error(c)})]})};i.a.render(Object(L.jsx)(o.StrictMode,{children:Object(L.jsx)(s.a,{store:A,children:Object(L.jsx)(V,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={"form-wrapper":"AddForm_form-wrapper__U2F1P",input:"AddForm_input__Pv71o","label-text":"AddForm_label-text__3KZDJ",button:"AddForm_button__1k70g"}}},[[53,1,2]]]);
//# sourceMappingURL=main.59c2ca08.chunk.js.map