(this["webpackJsonpreact-films-app"]=this["webpackJsonpreact-films-app"]||[]).push([[0],{26:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),r=a(13),n=a.n(r),i=a(4),l=a.n(i),m=a(14),o=a(15),j=a(16),d=a(19),u=a(18),h=(a(26),a(20)),p=a(0);var f=function(e){var t=new Date(e.show.premiered).getFullYear(),a=e.show.summary.replace("<p>","").replace("</p>","").replace("<b>","").replace("</b>","").slice(0,160),c=e.show.genres.map((function(e,t){return Object(p.jsx)("li",{children:e},t)}));return Object(p.jsxs)("div",{className:"film-card",children:[Object(p.jsx)("img",{src:e.show.image.medium,alt:""}),Object(p.jsxs)("div",{className:"movie-column",children:[Object(p.jsx)("div",{className:"film-card__title",children:e.show.name}),Object(p.jsx)("div",{className:"film-card__year",children:t}),Object(p.jsx)("ul",{className:"film-card__genre",children:c}),Object(p.jsxs)("div",{className:"film-card__summary",children:[a,"..."]})]})]})};var b=function(e){return Object(p.jsx)("div",{className:"films",children:e.films.map((function(e){return Object(p.jsx)(f,Object(h.a)({},e),e.show.id)}))})},v=a(17),O=a.n(v),x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={films:[]},e.getFilms=Object(m.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://api.tvmaze.com/search/shows?q=spider-man");case 2:a=t.sent,e.setState({films:a.data});case 4:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getFilms()}},{key:"render",value:function(){var e=this.state.films;return Object(p.jsx)("div",{className:"container",children:e.length?Object(p.jsx)(b,{films:e}):Object(p.jsx)("h2",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})}}]),a}(s.a.Component);n.a.render(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.649f6ee2.chunk.js.map