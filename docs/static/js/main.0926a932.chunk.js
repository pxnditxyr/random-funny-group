(this["webpackJsonprandom-funny"]=this["webpackJsonprandom-funny"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/random-funny.1b07a9ee.svg"},,,,,,,,,,,function(e,t,n){var c={"./facebook.svg":23,"./github.svg":24,"./random-funny.svg":11,"./twitter.svg":25,"./youtube.svg":26};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=a,e.exports=r,r.id=22},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/facebook.74332d12.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/github.807e98d3.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/twitter.e86d9dae.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/youtube.1bdc87ba.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(13),r=n.n(c),a=n(6),s=n(2),i=n(11),o=n(0),j=function(){return Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/",className:"link",children:" Home "})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/cats",className:"link",children:" Cats "})}),Object(o.jsx)("li",{children:Object(o.jsxs)(a.b,{to:"/home",className:"link",children:[" ",Object(o.jsx)("img",{src:i.default,alt:"cat"})," "]})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/dogs",className:"link",children:" Dogs "})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/my_memes",className:"link your-memes",children:" My Memes "})})]})})},u=n(22),l=function(){return Object(o.jsxs)("div",{className:"networks",children:[Object(o.jsx)("a",{href:"https://github.com/pxnditxyr/random-funny-group",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("img",{src:u("./github.svg").default,alt:"Github"})}),Object(o.jsx)("a",{href:"https://twitter.com/PxndxsYR",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("img",{src:u("./twitter.svg").default,alt:"Twitter"})}),Object(o.jsx)("a",{href:"https://youtube.com/channel/UCTH3gT3ql2wgy088ltFMtVw",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("img",{src:u("./youtube.svg").default,alt:"Youtube"})})]})},d=(n(27),function(){return Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{className:"header__title",children:Object(o.jsx)(a.b,{to:"/",className:"title",children:" Random Funny "})}),Object(o.jsx)(j,{}),Object(o.jsx)(l,{})]})}),b=(n(28),function(){return Object(o.jsxs)("footer",{children:[Object(o.jsx)("a",{href:"https://github.com/pxnditxyr",target:"_blank",rel:"noopener noreferrer",children:"Jose Enrique Ricaldi Juchani"}),Object(o.jsx)("a",{href:"https://github.com/Erickpick",target:"_blank",rel:"noopener noreferrer",children:"Erick Fernando Silva"}),Object(o.jsx)("a",{href:"https://github.com/crictar/",target:"_blank",rel:"noopener noreferrer",children:"Cristian Fabricio Fernandez Perez"}),Object(o.jsx)("a",{href:"https://github.com/pxnditxyr",target:"_blank",rel:"noopener noreferrer",children:"Dennis Lima"})]})}),m=n(16),h=n(3),f=n(1),x=n(14),O=function(e){var t=e.urlImage,n=e.altImage;return Object(o.jsx)("section",{className:"card__header",children:Object(o.jsx)("div",{className:"card__image",children:Object(o.jsx)("img",{src:t,alt:n})})})},p=function(e){var t=e.text;return Object(o.jsx)("section",{className:"card__body",children:Object(o.jsxs)("p",{children:[" ",t," "]})})},g=(n(29),function(e){var t=e.urlImage,n=e.altImage,c=e.text,r=e.myMeme,a=Object(x.a)().snap,s=Object(f.useRef)(null),i=Object(f.useCallback)((function(){a(s,{file:"random-meme.png"})}),[a,s]);return Object(o.jsxs)("div",{className:"meme-container",children:[Object(o.jsxs)("article",{className:"card",ref:s,children:[Object(o.jsx)(O,{urlImage:t,altImage:n}),Object(o.jsx)(p,{text:c})]}),r&&Object(o.jsx)("button",{className:"btn-save",onClick:i,children:"Download"})]})}),v=function(){return Math.floor(100*Math.random())},y=n(5),N=n.n(y),k=n(7),w=function(){var e=Object(k.a)(N.a.mark((function e(){var t,n,c,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.thecatapi.com/v1/images/search",e.next=3,fetch("https://api.thecatapi.com/v1/images/search");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,c=Object(h.a)(n,1),r=c[0],e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e){var t=Object(f.useState)({data:[],loading:!0}),n=Object(h.a)(t,2),c=n[0],r=n[1];return Object(f.useEffect)((function(){w().then((function(e){r({data:e,loading:!1})}))}),[e]),c},I=function(){var e=Object(k.a)(N.a.mark((function e(){var t,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://random.dog/woof.json",e.next=3,fetch("https://random.dog/woof.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,c=n.url,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t=Object(f.useState)({data:{},loading:!0}),n=Object(h.a)(t,2),c=n[0],r=n[1];return Object(f.useEffect)((function(){I().then((function(e){r({data:e,loading:!1})}))}),[e]),c},E=function(){var e=Object(k.a)(N.a.mark((function e(){var t,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://uselessfacts.jsph.pl/random.json?language=en",e.next=3,fetch("https://uselessfacts.jsph.pl/random.json?language=en");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,c=n.text,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){var t=Object(f.useState)({data:{},loading:!0}),n=Object(h.a)(t,2),c=n[0],r=n[1];return Object(f.useEffect)((function(){E().then((function(e){r({data:e,loading:!1})}))}),[e]),c},C=function(){var e=Object(k.a)(N.a.mark((function e(){var t,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://meowfacts.herokuapp.com/",e.next=3,fetch("https://meowfacts.herokuapp.com/");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,c=n.data,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){var t=Object(f.useState)({data:{},loading:!0}),n=Object(h.a)(t,2),c=n[0],r=n[1];return Object(f.useEffect)((function(){C().then((function(e){r({data:e,loading:!1})}))}),[e]),c},F=function(e){switch(e){case"cat":return _;case"dog":return T;case"fact":return S;case"inspirational":return M;case"randomImage":return v()%2===0?_:T;case"randomText":return v()%2===0?S:M;default:return null}},q=(n(31),n(32),function(e){var t=e.apiImage,n=e.apiText,c=Object(f.useState)(0),r=Object(h.a)(c,2),a=r[0],s=r[1],i=F(t)(a),j=i.data,u=i.loadingImage,l=Object(f.useState)(""),d=Object(h.a)(l,2),b=d[0],x=d[1];Object(f.useEffect)((function(){x("cat"===t?j.url:"string"===typeof j?j:j.url)}),[j]);var O=F(n)(a),p=O.data,v=O.loadingText,y=Object(f.useState)(""),N=Object(h.a)(y,2),k=N[0],w=N[1];Object(f.useEffect)((function(){w("fact"===t||"string"===typeof p?p:p[0])}),[p]);return Object(o.jsxs)("article",{className:"card-random",children:[Object(o.jsx)("section",{className:"card-random__header",children:Object(o.jsx)("h3",{children:" Random Generate "})}),u||v?Object(o.jsx)("span",{className:"loading",children:" Loading..."}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"card-random__body",children:Object(o.jsx)(g,{urlImage:b,altImage:t,text:k})}),Object(o.jsxs)("section",{className:"card-random__footer",children:[Object(o.jsx)("button",{className:"btn-random",onClick:function(){return s(a+1)},children:"Generate"}),Object(o.jsx)("button",{className:"btn-save",onClick:function(){return function(e,t,n){var c=JSON.parse(localStorage.getItem("memes"))||[];localStorage.setItem("memes",JSON.stringify([{id:c.length+1,urlImage:e,altImage:t,text:n}].concat(Object(m.a)(c))))}(b,t,k)},children:"Save"})]})]})]})}),J=function(e){var t=e.title,n=e.text;return Object(o.jsxs)("article",{className:"card-welcome",children:[Object(o.jsx)("section",{className:"card-welcome__header",children:Object(o.jsxs)("h3",{children:[" ",t," "]})}),Object(o.jsx)("section",{className:"card-welcome__body",children:Object(o.jsx)("div",{className:"card-welcome__text",children:Object(o.jsxs)("p",{children:[" ",n," "]})})})]})},D=(n(33),function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(q,{apiImage:"randomImage",apiText:"randomText"}),Object(o.jsxs)("div",{className:"home__welcome",children:[Object(o.jsx)(J,{title:"Welcome",text:"This is our project, where you can find thousands of random dog and cat memes !. Our goal is to declare war on stress and anxiety with memes. Come and explore our site you will have a lot of fun. The random factor included in this project makes each meme unique, and therefore, special, made just for you."}),Object(o.jsx)(J,{title:"About Us",text:"Enrique:  Erick: Enrique: Enrique: "})]})]})}),R=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{children:" Cats "}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(q,{apiImage:"cat",apiText:"randomText"}),Object(o.jsx)(q,{apiImage:"cat",apiText:"randomText"})]})]})},U=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{children:" Dogs "}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(q,{apiImage:"dog",apiText:"randomText"}),Object(o.jsx)(q,{apiImage:"dog",apiText:"randomText"})]})]})},G=n(12),L=(n(34),function(){var e=JSON.parse(localStorage.getItem("memes"))||[];return Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"my-memes__header",children:Object(o.jsx)("h1",{children:" My Memes "})}),Object(o.jsxs)("div",{className:"gallery",children:[0===e.length&&Object(o.jsx)("h2",{children:" You don't have any saved meme yet "}),e.map((function(e,t){return Object(o.jsx)(g,Object(G.a)(Object(G.a)({},e),{},{myMeme:!0}),t)}))]})]})}),Y=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:" Error 404 "}),Object(o.jsx)("h2",{children:"The page you are looking for does not exist."})]})},z=function(){return Object(o.jsxs)(a.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{path:"home",element:Object(o.jsx)(D,{})}),Object(o.jsx)(s.a,{path:"dogs",element:Object(o.jsx)(U,{})}),Object(o.jsx)(s.a,{path:"cats",element:Object(o.jsx)(R,{})}),Object(o.jsx)(s.a,{path:"my_memes",element:Object(o.jsx)(L,{})}),Object(o.jsx)(s.a,{path:"/",element:Object(o.jsx)(D,{})}),Object(o.jsx)(s.a,{path:"*",element:Object(o.jsx)(Y,{})})]}),Object(o.jsx)(b,{})]})},H=(n(35),function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(z,{})})});n(36);r.a.render(Object(o.jsx)(H,{}),document.querySelector("#root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.0926a932.chunk.js.map