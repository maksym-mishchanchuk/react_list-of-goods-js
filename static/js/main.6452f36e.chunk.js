(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),o=n(4),i=n(7),r=(n(12),n(13),n(2)),a=n(0),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u="alpha",b="length",j=function(){var t=Object(r.useState)(l),e=Object(i.a)(t,2),n=e[0],c=e[1];function s(t,e){return e===u?function(){return c(Object(o.a)(t).sort((function(t,e){return t.localeCompare(e)})))}:e===b?function(){return c(Object(o.a)(t).sort((function(t,e){return t.length-e.length})))}:function(){return c(Object(o.a)(n).reverse())}}return Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{onClick:s(l,u),type:"button",className:"button is-info is-light",children:"Sort alphabetically"}),Object(a.jsx)("button",{onClick:s(l,b),type:"button",className:"button is-success is-light",children:"Sort by length"}),Object(a.jsx)("button",{onClick:s(l),type:"button",className:"button is-warning is-light",children:"Reverse"}),Object(a.jsx)("button",{onClick:function(){return c([].concat(l))},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(a.jsx)("ul",{children:n.map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t})}))})]})};s.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6452f36e.chunk.js.map