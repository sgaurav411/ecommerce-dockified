(this.webpackJsonpdemoreact=this.webpackJsonpdemoreact||[]).push([[0],{47:function(t,e,c){},48:function(t,e,c){},75:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),r=c(18),s=c.n(r),a=(c(47),c(48),c(11)),o=c(25),j=c.n(o),d=c(35),l=c(41),b=c(7),h=c(1),u=Object(b.b)((function(t){return{params:t.shop.cart}}))((function(t){console.log(t);var e=t.params;console.log(e);return Object(h.jsxs)("div",{className:"CARTLOOKSLIKE",children:[Object(h.jsx)("h1",{children:"Current Cart Contents"}),e.map((function(t){return Object(h.jsxs)("div",{className:"CheckOut",children:[Object(h.jsxs)("h3",{children:["Item description : ",t.description]}),Object(h.jsxs)("h3",{children:["Contribution : ",t.active,"*",t.price," = ",t.active*t.price]})]})}))]})})),O=c(10),p="ADD_TO_CART",x="REMOVER_FROM_CART",m=function(t){return{type:p,payload:{obj:t}}},f=c(14),v=c(36),T=c(12),C={product:[{id:1,name:"Prod 1",price:1e5,link:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",description:" HEADPHONES",active:0},{id:2,name:"Prod 2",price:2e3,link:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",description:"WATCH",active:0},{id:3,name:"Prod 3",price:3e3,link:"https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",description:"CAMERA",active:0},{id:4,name:"Prod 4",price:4e3,link:"https://petapixel.com/assets/uploads/2017/03/product1.jpeg",description:"SHOES",active:0},{id:5,name:"Prod 5",price:5e3,link:"https://www.gizbot.com/images/2020-09/realme-7_159921061900.jpg",description:"PHONE",active:0},{id:6,name:"Prod 6",price:6e3,link:"https://www.kvstech.com/img/service/product.jpg",description:"CUBE",active:0}],cart:[]},g=c(15),w=c.n(g),E=function(t,e){switch(console.log("IN THE SHOP REDUCER, THE CURRENT STATE IS"),e.type){case p:console.log("ADDING TO CART ");for(var c=t.cart,n=0;n<c.length;n++)if(c[n].id===e.payload.obj.id)return c[n].quantity=c[n].quantity+1,console.log(c),Object(T.a)(Object(T.a)({},t),{},{cart:c});return c.push(e.payload.obj),e.payload.obj.quantity=1,console.log(c),Object(T.a)(Object(T.a)({},t),{},{cart:c});case x:var i=t.cart;return i=i.filter((function(t){return t.id!==e.payload.id?t:t.quantity>1?(t.quantity-=1,t):void 0})),Object(T.a)(Object(T.a)({},t),{},{cart:i});default:return C}},y=Object(f.combineReducers)({shop:E}),D=Object(f.createStore)(y,Object(v.composeWithDevTools)()),A=c(37),M=c(38),H=c(21),I=c(42),R=c(40),N=function(t){Object(I.a)(c,t);var e=Object(R.a)(c);function c(t){var n;return Object(A.a)(this,c),(n=e.call(this,t)).doTheMath=n.doTheMath.bind(Object(H.a)(n)),n}return Object(M.a)(c,[{key:"doTheMath",value:function(){var t=0;return this.props.inTheCart.forEach((function(e){t+=e.active*e.price})),Object(h.jsxs)("div",{children:["Total : ",t]})}},{key:"render",value:function(){return this.doTheMath()}}]),c}(i.a.Component),P=(Object(b.b)((function(t){return{inTheCart:Object(a.a)(t.shop.cart)}}))(N),Object(b.b)((function(t){return{items:Object(a.a)(t.shop.product),cart_contents:Object(a.a)(t.shop.cart)}}))((function(t,e){Object(b.c)();e=t.cart_contents,t=t.items;var c=Object(n.useState)([]),i=Object(l.a)(c,2),r=i[0],s=i[1];Object(n.useEffect)(Object(d.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w()("http://localhost:3001/getProducts");case 2:e=t.sent,s(e.data);case 4:case"end":return t.stop()}}),t)}))),[]);var a=function(t){var c=!1;return e.forEach((function(e){c=c||t.id===e.id&&e.quantity>0})),c?e.map((function(e){return t.id===e.id&&e.quantity>0?Object(h.jsxs)("div",{className:"ButttonCART",children:[Object(h.jsx)("button",{onClick:function(){D.dispatch(m(t))},children:"+"}),Object(h.jsx)("a",{children:t.quantity}),Object(h.jsx)("button",{onClick:function(){var e;D.dispatch((e=t.id,{type:x,payload:{id:e}}))},children:"-"})]}):c?void 0:Object(h.jsx)("div",{className:"ButtonCART",children:Object(h.jsx)("button",{onClick:function(){D.dispatch(m(t))},children:"ADD TO CART"})})})):Object(h.jsx)("div",{className:"ButtonCART",children:Object(h.jsx)("button",{onClick:function(){D.dispatch(m(t))},children:"ADD TO CART"})})};return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"PROD",children:r.map((function(t){return Object(h.jsxs)("div",{className:"Box",children:[Object(h.jsxs)("text",{children:["$",t.price]}),Object(h.jsx)("img",{src:t.imglink,width:"300px",height:"200px"}),a(t)]},t.id)}))}),Object(h.jsx)("div",{className:"amountsTo",children:function(){var t=0;return e.forEach((function(e){t+=e.quantity*e.price})),Object(h.jsxs)("div",{children:["TOTAL :  ",t," "]})}()}),Object(h.jsx)("div",{children:Object(h.jsx)(O.b,{to:{pathname:"/summary"},children:Object(h.jsx)("button",{type:"button",children:"SUMMARIZE"})})})]})}))),k=c(3),S=(Object(b.b)((function(t){return{params:Object(a.a)(t.shop.cart)}}))((function(t){var e=t.params,c=0;return e.forEach((function(t){c+=t.active})),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:" Demo E-Commerce "}),Object(h.jsxs)("p",{children:["Total Items in the Cart : ",c]})]})})),function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"ADD PRODUCTS TO LIST"})}),Object(h.jsx)("div",{className:"INPUT FORM",children:Object(h.jsxs)("form",{action:"http://localhost:3001/insert",method:"POST",children:[Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"ProductName",children:Object(h.jsx)("h3",{children:"TITLE"})}),Object(h.jsx)("input",{class:"form-control",name:"title"})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"Price",children:Object(h.jsx)("h3",{children:"PRICE"})}),Object(h.jsx)("input",{class:"form-control",name:"price"})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"ID",children:Object(h.jsx)("h3",{children:"ID"})}),Object(h.jsx)("input",{class:"form-control",name:"ID"})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"DESCRIPTION",children:Object(h.jsx)("h3",{children:"QUANTITY"})}),Object(h.jsx)("input",{class:"form-control",name:"quantity"})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"LINK",children:Object(h.jsx)("h3",{children:"IMAGE LINK"})}),Object(h.jsx)("input",{class:"form-control",name:"imgLink"})]}),Object(h.jsx)("button",{class:"btn btn-primary",children:Object(h.jsx)("h1",{children:"SUBMIT"})})]})})]})});var q=function(){return Object(h.jsx)(O.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"HEADING",children:Object(h.jsx)("h1",{children:"DEMO E-Commerce"})}),Object(h.jsx)(k.a,{path:"/addProduct",component:S}),Object(h.jsx)(k.a,{path:"/",exact:!0,component:P}),Object(h.jsx)(k.a,{path:"/summary",component:u})]})})},B=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;c(t),n(t),i(t),r(t),s(t)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(b.a,{store:D,children:Object(h.jsx)(q,{})})}),document.getElementById("root")),B()}},[[75,1,2]]]);
//# sourceMappingURL=main.bf242466.chunk.js.map