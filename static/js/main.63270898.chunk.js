(this["webpackJsonpgithub-filter"]=this["webpackJsonpgithub-filter"]||[]).push([[0],{17:function(e,t,r){},19:function(e,t,r){},20:function(e,t,r){},21:function(e,t,r){},22:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(10),s=r.n(c),i=r(4),l=r.n(i),o=r(7),u=r(2),d=r(3),j=r(5),b=r(11),f={webisteTitle:"github repositery search",greetingText:"hello, please enter github username to begin repository search",owner:"-By Chirag Kandpal",userameSearchLabel:"github username",errorText:"user not found",repoNotPresent:"Repositories for selected filter combination are not found",applyFilter:"apply filters",clearFilterSort:"clear filters & sort",sortBy:"Sort By",tableIssueTitle:"owner:",tableOpenTitle:"Open issues:",tableWatcherTitle:"watcher:",tableStargazerTitle:"Stargazers",tableDescTitle:"description:",sortData:[{starCountText:"star count (asc)",sortDirection:"asc",sortName:"star"},{starCountText:"star count (dec)",sortDirection:"dec",sortName:"star"},{starCountText:"open issue count (asc)",sortDirection:"asc",sortName:"open"},{starCountText:"open issue count (dec)",sortDirection:"dec",sortName:"open"},{starCountText:"watcher count (asc)",sortDirection:"asc",sortName:"watcher"},{starCountText:"watcher count (dec)",sortDirection:"dec",sortName:"watcher"}]},p=(r(17),r(0)),h=function(e){var t=e.tableArrayProps;return Object(p.jsx)("div",{className:"repo-table__container",children:t.map((function(e){var t=e.id,r=Object(b.a)(e,["id"]);return Object(p.jsxs)("div",{className:"repo-card",children:[Object(p.jsx)("img",{className:"avatar-img",src:r.owner.avatar_url,width:"50",height:"50",alt:"owner-img"}),Object(p.jsxs)("div",{className:"text-data-wrapper",children:[Object(p.jsx)("h4",{children:r.name}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:f.tableIssueTitle})," ",r.owner.login?r.owner.login:"none"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:f.tableOpenTitle})," ",r.open_issues_count?r.open_issues_count:"none"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:f.tableWatcherTitle})," ",r.watchers_count?r.watchers_count:"none"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:f.tableStargazerTitle})," ",r.stargazers_count?r.stargazers_count:"none"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:f.tableDescTitle})," ",r.description?"".concat(r.description.slice(0,100)).concat(r.description.length>=100&&"..."):"none"]})]})]},t)}))})},O=function(e){var t=document.querySelectorAll('[data-filter-list="filter-list"]'),r=e.closest('[data-filter-wrapper="filter-wrapper"]').querySelector('[data-filter-list="filter-list"]');t.forEach((function(e){e!==r&&e.classList.add("hide"),e===r&&e.classList.toggle("hide")}))},m=(r(19),function(e){var t=e.repoResponseProp,r=Object(a.useState)([]),n=Object(u.a)(r,2),c=n[0],s=n[1],i=Object(a.useState)([]),l=Object(u.a)(i,2),o=l[0],b=l[1],m=Object(a.useState)([]),x=Object(u.a)(m,2),v=x[0],N=x[1],g=Object(a.useState)([]),w=Object(u.a)(g,2),C=w[0],S=w[1],_=Object(a.useState)([]),y=Object(u.a)(_,2),T=y[0],k=y[1],D=Object(a.useState)(!1),z=Object(u.a)(D,2),A=z[0],E=z[1],F=Object(a.useState)(null),L=Object(u.a)(F,2),P=L[0],B=L[1],I=Object(a.useState)(null),R=Object(u.a)(I,2),q=R[0],W=R[1],J=Object(a.useState)(null),G=Object(u.a)(J,2),K=G[0],M=G[1],U=Object(a.useState)(null),H=Object(u.a)(U,2),Q=H[0],V=H[1],X=Object(a.useState)(null),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=Object(a.useState)({repoName:null,starCount:null,openCount:null,watcher:null}),te=Object(u.a)(ee,2),re=te[0],ae=te[1],ne=Object(a.useRef)(null),ce=t;Object(a.useEffect)((function(){W(null),B(null),M(null),V(null),$(null)}),[t]),Object(a.useEffect)((function(){s(Object(j.a)(ce))}),[t,ce]),Object(a.useEffect)((function(){var e,r=function(e){var r=t.map((function(t){return t[e]})),a=Object(j.a)(Array.from(new Set(r)));return a.sort((function(e,t){return e-t})),a};b((e="name",t.map((function(t){return t[e]})))),N(r("stargazers_count")),S(r("open_issues_count")),k(r("watchers_count"))}),[t]),Object(a.useEffect)((function(){var e=function(e){A&&ne.current&&!ne.current.contains(e.target)&&E(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[A]);var se=function(e){e?(Object.entries(re).forEach((function(e){var t=Object(u.a)(e,2),r=t[0],a=t[1];null!==a&&(ce=ce.filter((function(e){return"repoName"===r?a===e.name:"starCount"===r?a===e.stargazers_count:"openCount"===r?a===e.open_issues_count:"watcher"===r?a===e.watchers_count:void 0})))})),s(Object(j.a)(ce))):(ae({repoName:null,starCount:null,openCount:null,watcher:null}),B(null),W(null),M(null),V(null),$(null),s(Object(j.a)(t)))},ie=function(e){var t=e.dataset.filterType;"repo-name"===t&&(ae(Object(d.a)(Object(d.a)({},re),{},{repoName:e.dataset.filterName?e.dataset.filterName:null})),W(e.dataset.filterName?e.dataset.filterName:null)),"stargaze"===t&&(ae(Object(d.a)(Object(d.a)({},re),{},{starCount:e.dataset.filterName?Number(e.dataset.filterName):null})),M(e.dataset.filterName?e.dataset.filterName:null)),"open-issue"===t&&(ae(Object(d.a)(Object(d.a)({},re),{},{openCount:e.dataset.filterName?Number(e.dataset.filterName):null})),V(e.dataset.filterName?e.dataset.filterName:null)),"watcher"===t&&(ae(Object(d.a)(Object(d.a)({},re),{},{watcher:e.dataset.filterName?Number(e.dataset.filterName):null})),$(e.dataset.filterName?e.dataset.filterName:null)),O(e)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"filter-sort__container",children:[Object(p.jsxs)("div",{className:"filter-sort__filter-wrapper",children:["repository:"," ",Object(p.jsxs)("div",{"data-filter-wrapper":"filter-wrapper",className:"filter-each-wrapper",children:[Object(p.jsx)("div",{className:"active-filter",onClick:function(e){return O(e.currentTarget)},children:q||"All"}),Object(p.jsxs)("div",{"data-filter-list":"filter-list",className:"filter-list-container overlap-clear hide",children:[Object(p.jsx)("div",{className:"filter-option","data-filter-name":null,"data-filter-type":"repo-name",onClick:function(e){return ie(e.target)},children:"All"}),o&&o.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"filter-option","data-filter-name":e,"data-filter-type":"repo-name",onClick:function(e){return ie(e.target)},children:e})},e)}))]})]}),Object(p.jsxs)("div",{className:"count-filter",children:[Object(p.jsxs)("div",{"data-filter-wrapper":"filter-wrapper",className:"filter-each-wrapper",children:["Starsgazers:",Object(p.jsx)("div",{className:"active-filter",onClick:function(e){return O(e.currentTarget)},children:K||"All"}),Object(p.jsxs)("div",{"data-filter-list":"filter-list",className:"filter-list-container hide",children:[Object(p.jsx)("div",{className:"filter-option","data-filter-name":null,"data-filter-type":"stargaze",onClick:function(e){return ie(e.target)},children:"All"}),v&&v.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"filter-option","data-filter-name":e,"data-filter-type":"stargaze",onClick:function(e){return ie(e.target)},children:e})},e)}))]})]}),Object(p.jsxs)("div",{"data-filter-wrapper":"filter-wrapper",className:"filter-each-wrapper",children:["Open issues:",Object(p.jsx)("div",{className:"active-filter",onClick:function(e){return O(e.currentTarget)},children:Q||"All"}),Object(p.jsxs)("div",{"data-filter-list":"filter-list",className:"filter-list-container hide",children:[Object(p.jsx)("div",{className:"filter-option","data-filter-name":null,"data-filter-type":"open-issue",onClick:function(e){return ie(e.target)},children:"All"}),C&&C.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"filter-option","data-filter-name":e,"data-filter-type":"open-issue",onClick:function(e){return ie(e.target)},children:e})},e)}))]})]}),Object(p.jsxs)("div",{"data-filter-wrapper":"filter-wrapper",className:"filter-each-wrapper",children:["Watchers:",Object(p.jsx)("div",{className:"active-filter",onClick:function(e){return O(e.currentTarget)},children:Z||"All"}),Object(p.jsxs)("div",{"data-filter-list":"filter-list",className:"filter-list-container hide",children:[Object(p.jsx)("div",{className:"filter-option","data-filter-name":null,"data-filter-type":"watcher",onClick:function(e){return ie(e.target)},children:"All"}),T&&T.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"filter-option","data-filter-name":e,"data-filter-type":"watcher",onClick:function(e){return ie(e.target)},children:e})},e)}))]})]})]})]}),Object(p.jsx)("button",{className:"btn-blue btn-all",onClick:function(){return se(!0)},children:f.applyFilter}),Object(p.jsx)("button",{className:"btn-clear btn-all",onClick:function(){return se(!1)},children:f.clearFilterSort}),c.length>0&&Object(p.jsxs)("div",{className:"filter-sort__sort-wrapper",children:[f.sortBy,Object(p.jsxs)("div",{className:"sort-body",ref:ne,onClick:function(){E(!A)},children:[Object(p.jsx)("div",{className:"current-sort js-selected-sort",children:P||"None"}),A&&Object(p.jsx)("ul",{className:"sort-list",children:Object(p.jsx)("li",{children:f.sortData.map((function(e,t){var r=e.starCountText,a=e.sortDirection,n=e.sortName;return Object(p.jsx)("div",{"data-sort-direction":a,"data-sort-name":n,onClick:function(e){return function(e){ce=c;var t=e.target,r="asc"===t.dataset.sortDirection,a="star"===t.dataset.sortName?"stargazers_count":"open"===t.dataset.sortName?"open_issues_count":"watcher"===t.dataset.sortName?"watchers_count":"";ce=ce.sort((function(e,t){return r?e[a]-t[a]:t[a]-e[a]})),s(Object(j.a)(ce)),B(t.textContent),E(!1)}(e)},children:r},t)}))})})]})]})]}),c.length>0?Object(p.jsx)(h,{tableArrayProps:c}):Object(p.jsx)("div",{className:"filter-error-msg",children:f.repoNotPresent})]})}),x=function(){var e=Object(o.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t,"/repos"),{method:"GET"});case 3:if(!(r=e.sent).ok){e.next=15;break}return e.next=7,r.json();case 7:if(!((a=e.sent).length>0)){e.next=12;break}return e.abrupt("return",a);case 12:return e.abrupt("return",0);case 13:e.next=16;break;case 15:throw new Error("user does not exist");case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",-1);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),v=(r(20),function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)([]),s=Object(u.a)(c,2),i=s[0],d=s[1],j=Object(a.useState)(!1),b=Object(u.a)(j,2),h=b[0],O=b[1],v=Object(a.useState)(""),N=Object(u.a)(v,2),g=N[0],w=N[1];Object(a.useEffect)((function(){r||d([])}),[r]);var C=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(r);case 2:(t=e.sent).length>0?(d(t),O(!1)):0===t?(d([]),w("No repository found the user: ".concat(r)),O(!0)):-1===t&&(d([]),w("invalid username"),O(!0));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"username-search__container",children:[Object(p.jsxs)("div",{className:"search-label",children:[Object(p.jsx)("label",{children:f.userameSearchLabel}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{value:r,onChange:function(e){return n(e.target.value)},type:"text",placeholder:"Username",required:!0}),Object(p.jsx)("button",{className:"btn-all btn-blue",onClick:C,children:"Search"}),r&&Object(p.jsx)("button",{className:"btn-all btn-clear",onClick:function(){n(""),O(!1),d([])},children:"Clear"})]})]}),r.length<=0&&Object(p.jsxs)("div",{className:"start-page-text",children:[Object(p.jsx)("p",{children:f.greetingText}),Object(p.jsx)("p",{children:f.owner})]}),h&&Object(p.jsx)("div",{className:"start-page-text",children:g})]}),i.length>0&&Object(p.jsx)(m,{repoResponseProp:i})]})}),N=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,24)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))},g=(r(21),function(){return Object(p.jsx)("h1",{className:"title",children:f.webisteTitle})});r(22);s.a.render(Object(p.jsxs)(n.a.StrictMode,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(v,{})]}),document.getElementById("root")),N()}},[[23,1,2]]]);
//# sourceMappingURL=main.63270898.chunk.js.map