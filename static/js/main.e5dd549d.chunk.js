(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),o=a.n(r),l=(a(9),a(2)),s=(a(10),a(0));function i(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(s.jsxs)("div",{class:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{class:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(s.jsx)("label",{class:"form-check-label",for:"flexSwitchCheckDefault",children:"light"===e.mode?"Enable Dark Mode":"Enable Light Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(s.jsx)("h1",{children:e.heading}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=n.toUpperCase();r(e)},children:"Convert to Uppercase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=n.toLowerCase();r(e)},children:"Convert to Lowercase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){r("")},children:"Clear"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=n.split(/[ ]+/);r(e.join(" "))},children:"Remove Extra Space"})]}),Object(s.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(s.jsx)("h2",{children:"Your text summary"}),Object(s.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(s.jsx)("h2",{children:"Preview"}),Object(s.jsx)("p",{children:n})]})]})}var d=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"TextUtils",aboutText:"About",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#000000"):(n("light"),document.body.style.backgroundColor="white")}}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsx)(b,{heading:"Write your text here",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.e5dd549d.chunk.js.map