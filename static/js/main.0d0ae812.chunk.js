(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){},43:function(e,t,a){e.exports=a(66)},48:function(e,t,a){},50:function(e,t){},64:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),s=(a(48),a(10)),o=a(11),m=a(14),i=a(12),u=a(15),d=a(16),p=(a(50),{}),E=Object(d.b)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return(arguments.length>1?arguments[1]:void 0).type,e}}),b=Object(d.d)(E,{},Object(d.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),g=a(42),h=a(76),v=a(78),f=a(74),N=a(69),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h1",null,"Dashboard")),l.a.createElement("div",{className:"card-body"},l.a.createElement("ul",{className:"list-group"},l.a.createElement(N.a,{to:"/welldata"},l.a.createElement("li",{className:"list-group-item mask flex-center rgba-blue-light"},l.a.createElement("h3",null,"Well Data"))),l.a.createElement(N.a,{to:"/rentalcar"},l.a.createElement("li",{className:"list-group-item mask flex-center rgba-blue-light"},l.a.createElement("h3",null,"Rental Car"))),l.a.createElement(N.a,{to:"/finalquiz"},l.a.createElement("li",{className:"list-group-item mask flex-center rgba-blue-light"},l.a.createElement("h3",null,"Final Quiz")))))))}}]),t}(n.Component),j=a(77),y=a(3),w=a.n(y),S=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:w()("navbar navbar-expand-md navbar-dark bg-primary ",{"mb-4":"/rentalcar"!==this.props.history.location.pathname})},l.a.createElement("div",{className:"container"},l.a.createElement(N.a,{to:"/",className:"navbar-brand"},"CPRG-256 Final Project"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarMain"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarMain"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(N.a,{to:"/welldata",className:"nav-link"},"Well Data")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(N.a,{to:"/rentalcar",className:"nav-link"},"Rental Car")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(N.a,{to:"/finalquiz",className:"nav-link"},"Final Quiz"))))))}}]),t}(n.Component),x=Object(j.a)(S),k=a(19),C=a(5);function R(){return l.a.createElement("div",null,l.a.createElement("img",{src:"/webtermproj/res/pics/loading.gif",alt:"Loading...",style:{width:"200px",margin:"auto",display:"block"}}),"s")}function T(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)(""),o=Object(C.a)(s,2),m=o[0],i=o[1],u=Object(n.useState)([]),d=Object(C.a)(u,2),p=d[0],E=d[1],b=Object(n.useState)([]),g=Object(C.a)(b,2),h=g[0],v=g[1],f=Object(n.useState)([]),N=Object(C.a)(f,2),O=N[0],j=N[1],y=Object(n.useState)(!1),S=Object(C.a)(y,2),x=S[0],T=S[1];Object(n.useEffect)(function(){L(),_()},[]),Object(n.useEffect)(function(){if(p.includes(r)){i("");for(var e=[],t=0;t<h.length;t++)h[t].location.trim()===r&&e.push(h[t]);j(e)}else""!==r&&(i("Well Not Found."),j([]))},[r]);var _=function(){var e=new XMLHttpRequest,t=[];e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){for(var n=e.responseText.split("\n"),l='<?xml version="1.0" encoding="UTF-8"?>\n<wellproductiondata>',r='<?xml version="1.0" encoding="UTF-8"?>\n<wellproductiondata>',c=2;c<n.length-1;c++)c<n.length/2?l+=n[c]+"\n":r+=n[c]+"\n";l+="</wellproductiondata>",r+="</wellproductiondata>";var s=a(26),o=(new s).parseFromString(l),m=(new s).parseFromString(r),i=[];i.push.apply(i,Object(k.a)(m.getElementsByTagName("productiondata"))),i.push.apply(i,Object(k.a)(o.getElementsByTagName("productiondata")));for(var u=0;u<i.length;u++){for(var d={},p=0;p<i[u].children.length;p++)d[i[u].children[p].name]=i[u].children[p].value;t.push(d)}T(!0)}},v(t),e.open("GET","res/productiondata.xml",!0),e.send()},L=function(){var e=new XMLHttpRequest,t=[];e.onreadystatechange=function(){if(4===e.readyState&&200===e.status)for(var n=e.responseText,l=(new(a(26))).parseFromString(n).getElementsByTagName("welldata"),r=0;r<l.length;r++)t.push(l[r].children[0].value.trim())},e.open("GET","res/welldata.xml",!0),e.send(),E(t)};return x?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",null,"Alberta Township Well Search")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:w()("input-group-text",{"text-danger border-danger":m}),htmlFor:"search"},"Well Location")),l.a.createElement("input",{className:w()("form-control",{"is-invalid":m}),type:"text",id:"search",value:r,onChange:function(e){return c(e.target.value)}})),l.a.createElement("h3",{className:"text-danger text-center"},""!==m?m:""),O?l.a.createElement("table",{style:{tableLayout:"fixed"},className:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Location"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Oil Production"),l.a.createElement("th",null,"Water Production"),l.a.createElement("th",null,"Gas Production")),O.map(function(e){return l.a.createElement("tr",{key:O.indexOf(e)},l.a.createElement("td",null,e.location),l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.oilproduction),l.a.createElement("td",null,e.waterproduction),l.a.createElement("td",null,e.gasproduction))}))):null))):l.a.createElement(R,null)}var _=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=new Date;return l.a.createElement("div",{className:"pt-3",style:{height:"100vh",backgroundImage:"URL(/webtermproj/res/carbg.jpg)",backgroundSize:"100% 100%",position:"relative"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 offset-3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header text-center"},l.a.createElement("h1",null,"Dodgy Brakes Car Rental ",l.a.createElement("i",{className:"fas fa-car-side"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"col-4 offset-4"},l.a.createElement(N.a,{to:"/rentalcar/rental"},l.a.createElement("button",{className:"btn btn-primary btn-lg form-control"},"Rental")))),l.a.createElement("div",{className:"card-footer text-center"},l.a.createElement("h3",null,e.toLocaleDateString()+"@"+e.getHours()+":"+e.getMinutes().toString().padStart(2,"0")))),l.a.createElement("div",{className:"list-group"})))))}}]),t}(n.Component),L=(a(31),a(29)),A=a.n(L),F=a(40),D=a(18),P=a(75),M=a(70),z=a(71),B=a(72),W=a(73),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).actionHandler=function(e){return a.setState(Object(F.a)({},e.target.name,e.target.value))},a.renderOptions=[],a.state={modal:e.openModal},a.toggle=a.toggle.bind(Object(D.a)(Object(D.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({modal:e.openModal})}},{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}}),this.props.setOpenModal(!1)}},{key:"parseOptions",value:function(e){var t=0;return this.renderOptions=[],e.roofRack&&(this.renderOptions.push("Roof Rack"),t+=5),e.bikeRack&&(this.renderOptions.push("Bike Rack"),t+=5),e.gps&&(this.renderOptions.push("GPS"),t+=10),e.childSeat&&this.renderOptions.push("Child Seat"),t}},{key:"render",value:function(){var e=this,t=this.props.summary,a=t.formItems,n=t.selectedCar,r=t.selectedOptions,c=t.days;if(a){var s=this.parseOptions(r);return l.a.createElement("div",null,l.a.createElement(P.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,size:"lg"},l.a.createElement(M.a,{toggle:this.toggle},"Rental Summary"),l.a.createElement(z.a,null,a.firstName,l.a.createElement("br",null),a.lastName,l.a.createElement("br",null),a.address,l.a.createElement("br",null),a.stateProv,l.a.createElement("br",null),a.email,l.a.createElement("br",null),a.phone,l.a.createElement("br",null),n?n.name:null," for ",c," days with",l.a.createElement("br",null),l.a.createElement("ul",{className:"list-group"},this.renderOptions.map(function(t,a){return l.a.createElement("li",{key:(new Date).getTime(),className:"list-group-item"},e.renderOptions[a])})),l.a.createElement("h3",{className:"text-"},"Total: $",((n.cost+s)*c).toFixed(2))),l.a.createElement(B.a,null,l.a.createElement(W.a,{color:"secondary",onClick:this.toggle},"Close"))))}return null}}]),t}(l.a.Component);function q(e){var t=e.name,a=e.label,n=e.cost,r=e.toggleOption,c=e.selectedOptions;return l.a.createElement("button",{type:"button",className:w()("btn btn-secondary",{"btn-info":c[t]}),onClick:function(){return r(t)}},a," (",n,"$/day)")}function G(e){var t=e.name,a=e.value,n=e.action,r=e.disabled;return l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},t)),l.a.createElement("input",{type:"text",name:t,className:"form-control",value:a,onChange:function(e){return n(e.target.value)},disabled:r}))}function X(e){var t=e.imgSrc,a=e.imgCaption,n=e.cost,r=e.selectedCar,c=e.setSelectedCar;return l.a.createElement("figure",{className:w()("rounded pb-2",{"bg-info":r.name===a}),onClick:function(){return c({name:a,cost:n})}},l.a.createElement("img",{src:t,alt:a,style:{width:"100%"}}),l.a.createElement("figcaption",{className:"text-center"},l.a.createElement("h5",null,a,l.a.createElement("small",null," $",n,"/day"))))}function H(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(C.a)(c,2),o=s[0],m=s[1],i=Object(n.useState)([]),u=Object(C.a)(i,2),d=u[0],p=u[1],E=Object(n.useState)(!1),b=Object(C.a)(E,2),g=b[0],h=b[1],v=Object(n.useState)(),f=Object(C.a)(v,2),N=f[0],O=f[1],j=Object(n.useState)(1),y=Object(C.a)(j,2),S=y[0],x=y[1],k=Object(n.useState)({name:"",value:0}),R=Object(C.a)(k,2),T=R[0],_=R[1],L=Object(n.useState)({}),F=Object(C.a)(L,2),D=F[0],P=F[1],M=Object(n.useState)(!1),z=Object(C.a)(M,2),B=z[0],W=z[1],H=Object(n.useState)({}),I=Object(C.a)(H,2),J=I[0],Q=I[1],$=Object(n.useState)({lastName:"",firstName:"",address:"",stateProv:"",email:"",phone:""}),V=Object(C.a)($,2),Y=V[0],K=V[1],Z=[{imgSrc:"/webtermproj/res/pics/compact.png",imgCaption:"Compact",cost:20},{imgSrc:"/webtermproj/res/pics/midsize.png",imgCaption:"Mid-Size",cost:25},{imgSrc:"/webtermproj/res/pics/luxury.png",imgCaption:"Luxury",cost:35},{imgSrc:"/webtermproj/res/pics/pickup.png",imgCaption:"Pickup",cost:40}],ee=["Last Name","First Name","Address","State-Prov","Email","Phone"];Object(n.useEffect)(function(){if(N){var e={lastName:N.last_name,firstName:N.first_name,address:N.address,stateProv:N.state_prov,email:N.email,phone:N.phone};K(e)}},[N]),Object(n.useEffect)(function(){var e=[];if(g)for(var t=0;t<o.length;t++)o[t].last_name.toUpperCase().startsWith(a.toUpperCase())&&e.push(o[t]);p(e)},[a]),Object(n.useEffect)(function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4===e.readyState&&200===e.status&&m(JSON.parse(e.responseText))},e.open("GET","res/rentalclients.json",!0),e.send(),h(!0)},[]);var te=function(e){var t=JSON.parse(JSON.stringify(D));t[e]=!t[e],P(t),console.log(D)};return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3 col-4 offset-lg-1 mt-3"},l.a.createElement("h3",{className:"text-center"},"Client Search"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"Last Name")),l.a.createElement("input",{type:"text",className:"form-control",name:"clientSearch",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement("div",{className:"border",style:{height:"40vh",overflowY:"scroll"}},l.a.createElement("table",{className:"table text-center",style:{maxHeight:"100%",tableLayout:"fixed"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"))),l.a.createElement("tbody",{style:{}},d.map(function(e){return l.a.createElement("tr",{className:w()("list-hover",{"bg-info":e===N}),onClick:function(){return O(e)},key:d.indexOf(e)},l.a.createElement("td",null,e.first_name),l.a.createElement("td",null,e.last_name))}))))),l.a.createElement("div",{className:"col-7"},l.a.createElement("form",null,l.a.createElement("h2",{className:"mb-3 text-center"},"Rental Information"),ee.map(function(e){return l.a.createElement(G,{key:ee.indexOf(e),name:e,value:Y[A()(e)],action:function(e){return K(e.target.name,e.target.value)},disabled:!N})})))),l.a.createElement("div",{className:"row"},Z.map(function(e){return l.a.createElement("div",{key:Z.indexOf(e),className:"col-md-3"},l.a.createElement(X,{imgSrc:e.imgSrc,imgCaption:e.imgCaption,cost:e.cost,selectedCar:T,setSelectedCar:_}))})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 offset-lg-1 mt-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"btn-group",style:{width:"100%"},role:"group"},[{name:"Roof Rack",cost:5},{name:"Bike Rack",cost:5},{name:"GPS",cost:10},{name:"Child Seat",cost:0}].map(function(e){return l.a.createElement(q,{key:e.name,name:A()(e.name),label:e.name,cost:e.cost,toggleOption:te,selectedOptions:D})}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 offset-4"},l.a.createElement("div",{className:"input-group mt-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"Days:")),l.a.createElement("input",{type:"number",name:"days",value:S,onChange:function(e){return x(e.target.value)},className:"form-control",min:"1",max:"30"})))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"btn btn-primary form-control mt-2",disabled:!N||!T.name,onClick:function(){Q({formItems:Y,selectedCar:T,selectedOptions:D,days:S}),W(!0)}},"Submit")))),l.a.createElement(U,{openModal:B,setOpenModal:W,summary:J}))}a(64);function I(e){var t=e.text,a=e.letter,n=e.num,r=e.chooseAnswer,c=e.chosenAnswers;return l.a.createElement("li",{className:w()("list-group-item",{"bg-light text-primary":c[n-1]===a}),onClick:function(){r(n,a)}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-11"},a,". ",t),l.a.createElement("div",{className:"col-md-1"},l.a.createElement("i",{className:w()({"fas fa-circle float-right mt-1 text-primary":c[n-1]===a})}))))}function J(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)([]),o=Object(C.a)(s,2),m=o[0],i=o[1],u=Object(n.useState)([]),d=Object(C.a)(u,2),p=d[0],E=d[1],b=Object(n.useState)(),g=Object(C.a)(b,2),h=g[0],v=g[1];function f(e,t){if(void 0===h){var a=Object(k.a)(p);a[e-1]=t,E(a)}}return Object(n.useEffect)(function(){var e=new XMLHttpRequest,t=[];e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){for(var n=e.responseText,l=(new(a(26))).parseFromString(n),r=l.getElementsByTagName("question"),c=0;c<r.length;c++){var s={num:"",title:"",a:"",b:"",c:"",d:""};s.num=r[c].children[0].value,s.title=r[c].children[1].value,s.a=r[c].children[2].value,s.b=r[c].children[3].value,s.c=r[c].children[4].value,s.d=r[c].children[5].value,t.push(s)}var o=l.getElementsByTagName("rightanswers");i(o[0].value.split(",")),E(new Array(r.length).fill(""))}},e.open("GET","res/FinalQuiz.xml",!0),e.send(),c(t)},[]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4 text-center"},"Final Quiz"),r.map(function(e){return l.a.createElement("div",{key:e.num,className:"mb-3"},l.a.createElement("h5",null,e.num,". ",e.title),l.a.createElement("ul",{className:"list-group"},l.a.createElement(I,{text:e.a,letter:"A",num:e.num,chooseAnswer:f,chosenAnswers:p}),l.a.createElement(I,{text:e.b,letter:"B",num:e.num,chooseAnswer:f,chosenAnswers:p}),l.a.createElement(I,{text:e.c,letter:"C",num:e.num,chooseAnswer:f,chosenAnswers:p}),l.a.createElement(I,{text:e.d,letter:"D",num:e.num,chooseAnswer:f,chosenAnswers:p})))}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{className:"btn btn-secondary form-control mb-3",onClick:function(){v(),E(new Array(m.length).fill(""))}},"Reset")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{className:"btn btn-primary form-control mb-3",onClick:function(){!function(){for(var e=0,t=0;t<m.length;t++)m[t].toUpperCase()===p[t].toUpperCase()&&e++;v(e)}()}},"Check")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("h2",{className:"text-center"},h,"/",m.length))))}var Q=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,{store:b},l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(x,null),l.a.createElement(v.a,null,l.a.createElement(f.a,{exact:!0,path:"/",component:O}),l.a.createElement(f.a,{exact:!0,path:"/welldata",component:T}),l.a.createElement(f.a,{exact:!0,path:"/rentalcar",component:_}),l.a.createElement(f.a,{exact:!0,path:"/rentalcar/rental",component:H}),l.a.createElement(f.a,{exact:!0,path:"/finalquiz",component:J})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.0d0ae812.chunk.js.map