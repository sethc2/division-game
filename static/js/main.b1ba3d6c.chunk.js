(this["webpackJsonpdivision-game"]=this["webpackJsonpdivision-game"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),l=n.n(i),c=n(4),s=n.n(c),d=(n(9),n(2)),o=(n(10),n(0));function r(e){return Math.floor(Math.random()*Math.floor(e))}function f(e){var t=r(e)+1,n=r(e)+1;return{divisor:t,quotient:n,dividend:t*n}}var j=function(){var e=Object(i.useState)(0),t=Object(d.a)(e,2),n=t[0],l=t[1],c=Object(i.useState)(0),s=Object(d.a)(c,2),j=s[0],x=s[1],u=Object(i.useState)(f(9)),a=Object(d.a)(u,2),b=a[0],h=a[1],y=Object(i.useMemo)((function(){var e=new Set;for(e.add(b.quotient);e.size<4;)e.add(r(9)+1);return Array.from(e).sort((function(e,t){return e-t}))}),[b]),O=b.dividend,v=b.divisor,m=b.quotient,p=Object(i.useState)(null),g=Object(d.a)(p,2),w=g[0],S=g[1],C=function(e){S(e),e===m?(null===w&&l(n+1),window.setTimeout((function(){S(null),h(f(9))}),1e3)):x(j+1)},k=w===m;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{style:{display:"flex",flex:1},children:[Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1,alignItems:"flex-end",justifyContent:"flex-end"},children:[Object(o.jsx)("div",{style:{flex:1}}),Object(o.jsx)("div",{style:{flex:1,fontSize:32,padding:6,marginTop:19},children:v}),Object(o.jsx)("div",{style:{flex:1}})]}),Object(o.jsxs)("div",{style:{display:"flex",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"flex-start"},children:[Object(o.jsx)("div",{style:{flex:1,fontSize:32,display:"flex",alignItems:"flex-end",borderBottom:"1px solid black",padding:6,width:"20%",color:null===w?"gray":k?"green":"red"},children:w||"?"}),Object(o.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[Object(o.jsx)("div",{style:{padding:6,flex:"none",borderLeft:"1px solid black",fontSize:32},children:O}),Object(o.jsx)("div",{style:{flex:1}})]}),Object(o.jsx)("div",{style:{flex:1}})]})]}),Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1,justifyContent:"stretch",alignItems:"center",width:"100%"},children:[Object(o.jsxs)("div",{style:{display:"flex",flex:1,width:"100%"},children:[Object(o.jsx)("button",{style:{width:"50%",fontSize:24},onClick:function(){k||C(y[0])},children:y[0]}),Object(o.jsx)("button",{style:{width:"50%",fontSize:24},onClick:function(){k||C(y[1])},children:y[1]})]}),Object(o.jsxs)("div",{style:{display:"flex",flex:1,width:"100%"},children:[Object(o.jsx)("button",{style:{width:"50%",fontSize:24},onClick:function(){k||C(y[2])},children:y[2]}),Object(o.jsx)("button",{style:{width:"50%",fontSize:24},onClick:function(){k||C(y[3])},children:y[3]})]})]}),Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1,alignItems:"center",justifyContent:"space-evenly"},children:[Object(o.jsxs)("div",{children:["Nubmer correct: ",n]}),Object(o.jsxs)("div",{children:["Number wrong: ",j]})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,i=t.getFID,l=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),l(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),x()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b1ba3d6c.chunk.js.map