"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{672:function(n,t,e){e.d(t,{O:function(){return v}});var r,a,c,i,u,s=e(689),o=e(168),p=e(87),f=e(444),l=(0,f.ZP)(p.OL)(r||(r=(0,o.Z)(["\n  color: black;\n  text-decoration: none;\n"]))),d=f.ZP.div(a||(a=(0,o.Z)(["\n  max-width: 1200px;\n  padding: 20px;\n"]))),h=f.ZP.ul(c||(c=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  gap: 18px;\n  row-gap: 24px;\n"]))),m=f.ZP.li(i||(i=(0,o.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  transition: scale 250ms linear;\n  max-height: 380px;\n  &:hover {\n    scale: 1.1;\n  }\n"]))),x=f.ZP.p(u||(u=(0,o.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  max-width: 215px;\n  max-height: 43px;\n  padding: 12px 4px;\n"]))),g=e(184),v=function(n){var t=n.movies,e=(0,s.TH)(),r=function(n){return null===n?"https://via.placeholder.com/300sx450.jpg":"https://image.tmdb.org/t/p/w300".concat(n)};return(0,g.jsx)(d,{children:(0,g.jsx)(h,{children:t.map((function(n){var t=n.id,a=n.original_title,c=n.original_name,i=n.name,u=n.title,s=n.poster_path;return(0,g.jsx)(m,{children:(0,g.jsxs)(l,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsx)("img",{src:"".concat(r(s)),alt:"".concat(u||a||i)}),(0,g.jsx)(x,{children:a||c})]})},t)}))})})}},544:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),i=e.n(c),u=e(791),s=e(672),o=e(171),p=e(184);t.default=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],f=(0,u.useState)(null),l=(0,a.Z)(f,2),d=l[0],h=l[1];return(0,u.useEffect)((function(){try{var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.wr)();case 2:t=n.sent,c(t.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(d){h(d)}}),[]),(0,p.jsxs)("main",{children:[d&&(0,p.jsx)("p",{children:"Try again"}),(0,p.jsx)("h2",{children:"Trending movies"}),e&&(0,p.jsx)(s.O,{movies:e})]})}},171:function(n,t,e){e.d(t,{Bt:function(){return x},E3:function(){return l},Mc:function(){return p},wr:function(){return s},y:function(){return h}});var r=e(861),a=e(757),c=e.n(a),i=e(243),u="0214e4f6556edfc65f2eadfc23b43510";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:u,language:"en-US"},n.next=3,i.Z.get("/trending/all/day",{params:t});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:u,language:"en-US"},n.next=3,i.Z.get("/movie/".concat(t),{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:u,language:"en-US",query:t},n.next=3,i.Z.get("/search/movie",{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:u,language:"en-US"},n.next=3,i.Z.get("/movie/".concat(t,"/credits"),{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:u,language:"en-US"},n.next=3,i.Z.get("/movie/".concat(t,"/reviews"),{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=544.ea01754a.chunk.js.map