(this["webpackJsonpreact-atidim"]=this["webpackJsonpreact-atidim"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(18),a=c.n(s),i=(c(26),c(27),c(21)),o=c(8),l=c.n(o),u=c(19),j=c(9),d=c(20),b=c.n(d),h=c(0);var m=function(e){var t=Object(n.useRef)();return Object(h.jsx)("nav",{className:"navbar navbar-light bg-light justify-content-center p-4",children:Object(h.jsxs)("div",{className:"d-flex col-md-4",children:[Object(h.jsx)("input",{ref:t,placeholder:"search...",type:"search",className:"form-control"}),Object(h.jsx)("button",{onClick:function(){e.setUserSearch(t.current.value)},className:"btn btn-outline-success",children:"Search"})]})})};var p=function(e){return Object(h.jsxs)("div",{style:{minHeight:"94vh"},className:" text-light",children:[Object(h.jsx)("div",{className:"row justify-content-center",children:e.pics_ar.map((function(e){return Object(h.jsxs)("div",{className:"col-md-5  border p-3 m-3  pic",children:[Object(h.jsx)("img",{src:e.previewURL,className:"float-start me-2 w-25"}),Object(h.jsx)("h2",{children:e.tags}),Object(h.jsxs)("div",{children:["Views: ",e.views]}),Object(h.jsxs)("div",{children:["Likes: ",e.likes]})]},e.id)}))}),Object(h.jsx)("h2",{className:"text-center p-5 text-danger",children:"Scroll to see more pics wite my lazzy tech "})]})};var f=function(e){var t=Object(n.useState)("car"),c=Object(j.a)(t,2),s=c[0],a=c[1],o=Object(n.useState)([]),d=Object(j.a)(o,2),f=d[0],v=d[1],O=[],x=2,w=!1;Object(n.useEffect)((function(){return g(s),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[s]);var g=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=".concat(t,"&image_type=photo&pretty=true"),e.next=3,b.a.get(c);case 3:n=e.sent,O=n.data.hits,N();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-1&&!w&&(w=!0,x+=2,N())},N=function(){var e=Object(i.a)(O);v(e.splice(0,x)),w=!1};return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)(m,{setUserSearch:a}),Object(h.jsx)(p,{pics_ar:f})]})};var v=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(f,{})})};a.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.f9bb71d1.chunk.js.map