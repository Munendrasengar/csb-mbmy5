(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(0),r=c(2),n=c.n(r),d=c(7),o=(c(13),c(3)),s=c(1);function a(){var e=Object(o.b)(),t=[{id:100,name:"Cosmetics",productList:[{_id:1,name:"Hair Oil",price:122},{_id:2,name:"Face wash",price:123}]},{id:200,name:"Household",productList:[{_id:3,name:"Hair Oil",price:122},{_id:4,name:"Face wash",price:123}]}],c=Object(i.useState)((new Date).valueOf()),r=Object(d.a)(c,2);r[0],r[1];return Object(s.jsx)(s.Fragment,{children:t.map((function(t){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h6",{children:t.name}),Object(s.jsxs)("div",{className:"coso",children:[Object(s.jsxs)("div",{className:"real",children:[Object(s.jsxs)("h6",{children:["Name: ",t.productList[0].name]}),Object(s.jsxs)("h6",{children:["Price:",t.productList[0].price," "]}),Object(s.jsx)("button",{onClick:function(){return e({type:"Add_Item",payload:[t.productList[0]._id,t.productList[0]]})},children:"Add to the cart"}),Object(s.jsx)("button",{onClick:function(){return e({type:"Remove_item",payload:[t.productList[0]._id]})},children:"Remove from cart"})]}),Object(s.jsxs)("div",{className:"coso1",children:[Object(s.jsxs)("h6",{children:["Name:",t.productList[1].name]}),Object(s.jsxs)("h6",{children:["Price:",t.productList[1].price]}),Object(s.jsx)("button",{onClick:function(){return e({type:"Add_Item",payload:[t.productList[1]._id,t.productList[1]]})},children:"Add to the cart"}),Object(s.jsx)("button",{onClick:function(){return e({type:"Remove_item",payload:[t.productList[1]._id]})},children:"Remove from cart"})]})]})]})}))})}var l=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(a,{})})},m=c(8),u={item:{}};var j=Object(m.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Add_Item":return e.item[t.payload[0]]=t.payload[1],console.log("state.item========>>",e.item),{item:e.item};case"Remove_item":return delete e.item[t.payload[0]],console.log("Remove state.item========>>",e.item),{item:e.item};default:return e}})),p=document.getElementById("root");n.a.render(Object(s.jsxs)(i.StrictMode,{children:[Object(s.jsx)(o.a,{store:j,children:Object(s.jsx)(l,{})})," "]}),p)}},[[19,1,2]]]);
//# sourceMappingURL=main.bc363058.chunk.js.map