(window.webpackJsonpgeeks_trust_challenges=window.webpackJsonpgeeks_trust_challenges||[]).push([[0],{48:function(e,t,n){e.exports=n(83)},53:function(e,t,n){},71:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(13),l=n.n(i),o=n(6),r=n(7),s=n(8),u=n(9),h=n(1),p=n(10),m=(n(53),n(16)),v=n.n(m),d=n(19),b=n(2),f=n(21),S=n.n(f),O=(n(71),function(e){return console.log("Prop status: ",e.status),"success"==e.status?c.a.createElement("div",{className:"result"},c.a.createElement("h1",null,"Found Falcone!"),c.a.createElement("p",null,"You got me the damn Falcone!"),c.a.createElement("p",null,"Time Taken: ",e.count),c.a.createElement("p",null,"Planet Found: ",e.planetName),c.a.createElement("button",{onClick:function(){return window.location.reload()}},"Not satisfied? Try your luck again")):c.a.createElement("div",{className:"result"},c.a.createElement("h1",null,"Not found Falcone!"),c.a.createElement("p",null,"Time Taken: ",e.count),c.a.createElement("button",{onClick:function(){return window.location.reload()}},"Retry"))}),E="https://findfalcone.herokuapp.com/",j={"Content-Type":"application/json",Accept:"application/json"},g=function(){var e=Object(d.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(E).concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(v.a.mark(function e(t,n){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("".concat(E).concat(t),n,{headers:j});case 3:return a=e.sent,console.log("Response of poster: ",a),e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}(),N=n(22);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w={distToPlanets:function(e){var t={};return e.forEach(function(e){t[e.name]=e.distance}),t},vehSpeeds:function(e){var t={};return e.forEach(function(e){t[e.name]={speed:e.speed,distance:e.max_distance}}),t},getCount:function(e){var t=0,n=e.planSelection1,a=e.planSelection2,c=e.planSelection3,i=e.planSelection4,l=e.vehSelection1,o=e.vehSelection2,r=e.vehSelection3,s=e.vehSelection4,u=e.vehiclesSpeed,h=e.planetDistance;return l&&(t+=h[n]/u[l].speed),o&&(t+=h[a]/u[o].speed),r&&(t+=h[c]/u[r].speed),s&&(t+=h[i]/u[s].speed),t},setVehicle:function(e){return e.map(function(e){return D({},e)})},resetDestinationVehicles:function(e,t,n){var a;n.setState((a={},Object(b.a)(a,e,w.setVehicle(n.state.vehicles)),Object(b.a)(a,t,""),a))},reduceVehicleCount:function(e,t,n){var a=n.state,c=a.vehSelection1,i=a.vehSelection2,l=a.vehSelection3,o=a.vehSelection4;return e.map(function(e){return e.name===t&&e.totalNumber--,e.name===c&&(e.totalNumber--,-1===e.totalNumber&&(e.totalNumber=0,w.resetDestinationVehicles("destination1Vehicles","vehSelection1",n))),e.name===i&&(e.totalNumber--,-1===e.totalNumber&&(e.totalNumber=0,w.resetDestinationVehicles("destination2Vehicles","vehSelection2",n))),e.name===l&&(e.totalNumber--,-1===e.totalNumber&&(e.totalNumber=0,w.resetDestinationVehicles("destination3Vehicles","vehSelection3",n))),e.name===o&&(e.totalNumber--,-1===e.totalNumber&&(e.totalNumber=0,w.resetDestinationVehicles("destination4Vehicles","vehSelection4",n))),e})},getVehiclesObject:function(e,t,n,a){if(n.length)return e.map(function(e){return e.max_distance<a.state.planetDistance[t]||0===e.totalNumber&&e.name!==n?{value:e.name,label:"".concat(e.name," (").concat(e.totalNumber,")"),itemClassName:"disabled"}:{value:e.name,label:"".concat(e.name," (").concat(e.totalNumber,")")}});var c=a.state,i=c.vehSelection1,l=c.vehSelection2,o=c.vehSelection3,r=c.vehSelection4;return a.state.vehicles.map(function(e){var n=D({},e);return i===n.name&&n.totalNumber--,l===n.name&&n.totalNumber--,o===n.name&&n.totalNumber--,r===n.name&&n.totalNumber--,n.max_distance<a.state.planetDistance[t]||0===n.totalNumber?{value:n.name,label:"".concat(n.name," (").concat(n.totalNumber,")"),itemClassName:"disabled"}:{value:n.name,label:"".concat(n.name," (").concat(n.totalNumber,")")}})},getFilteredVehicles:function(e,t){switch(e){case"Destination1":return w.getVehiclesObject(t.state.destination1Vehicles,t.state.planSelection1,t.state.vehSelection1,t);case"Destination2":return w.getVehiclesObject(t.state.destination2Vehicles,t.state.planSelection2,t.state.vehSelection2,t);case"Destination3":return w.getVehiclesObject(t.state.destination3Vehicles,t.state.planSelection3,t.state.vehSelection3,t);case"Destination4":return w.getVehiclesObject(t.state.destination4Vehicles,t.state.planSelection4,t.state.vehSelection4,t);default:return t.state.vehicles.map(function(e){return{value:e.name,label:"".concat(e.name," (").concat(e.totalNumber,")")}})}},planetObject:function(e,t){var n=t.state,a=n.planSelection1,c=n.planSelection2,i=n.planSelection3,l=n.planSelection4,o="";return t.state.planets.map(function(t){return(o=t.name)===e?{value:o,label:o}:o!==a&&o!==c&&o!==i&&o!==l?{value:o,label:o}:{}}).filter(function(e){return 0!==Object.keys(e).length})},errorNotification:function(e){N.NotificationManager.info(e,"Incorrect selection. Please retry",3e3)},submitJson:function(){var e=Object(d.a)(v.a.mark(function e(t){var n,a,i,o,r,s,u,h,p,m,d;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,a=n.planSelection1,i=n.planSelection2,o=n.planSelection3,r=n.planSelection4,s=n.vehSelection1,u=n.vehSelection2,h=n.vehSelection3,p=n.vehSelection4,""===a||""===i||""===o||""===r||""===s||""===u||""===h||""===p){e.next=11;break}return e.next=4,V("token",{});case 4:return m=e.sent,e.next=7,V("find",{token:m.token,planet_names:[a,i,o,r],vehicle_names:[s,u,h,p]});case 7:d=e.sent,l.a.render(c.a.createElement(O,{status:d.status,count:w.getCount(t.state),planetName:d.planet_name}),document.getElementById("root")),e.next=12;break;case 11:w.errorNotification("Incorrect selection error.");case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getDestinationAndVehiclesJson:function(){var e=Object(d.a)(v.a.mark(function e(t){var n,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("planets");case 2:return n=e.sent,t.setState({planets:n,planetDistance:w.distToPlanets(n)}),e.next=6,g("vehicles");case 6:a=e.sent,t.setState({vehicles:a,vehiclesSpeed:w.vehSpeeds(a)});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateVehicleObject:function(){var e=Object(d.a)(v.a.mark(function e(t,n,a,c){var i,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.state[t].length){e.next=3;break}return e.next=3,c.setState((l={},Object(b.a)(l,n,w.setVehicle(c.state.vehicles)),Object(b.a)(l,t,""),l));case 3:c.setState((i={},Object(b.a)(i,t,a),Object(b.a)(i,n,w.reduceVehicleCount(c.state[n],a,c)),i));case 4:case"end":return e.stop()}},e)}));return function(t,n,a,c){return e.apply(this,arguments)}}()},k=(n(77),n(46)),P=n(43),C=n.n(P),x=function(e){var t=e.allProps,n=t.destination,a=t.vehicleClass,i=t.vehicles,l=t.vehSelection;return c.a.createElement("div",{className:a},c.a.createElement(C.a,{name:a,options:i,value:l,onChange:function(t){return e.vehicleSelectFun(t,n)}}))};function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var T=function(e){var t=e.destination,n=e.vehicleClass,a=e.options,i=e.allProps,l=i.planetSelect,o=i.vehicleSelect,r={option:function(e,t){return _({},e,{borderBottom:"1px dotted pink",backgroundColor:"black",color:t.isSelected?"green":"white",padding:20})},control:function(){return{width:200}},singleValue:function(e,t){return _({},e,{opacity:t.isDisabled?.5:1,transition:"opacity 300ms"})}};return c.a.createElement("div",null,c.a.createElement("h4",null,t),c.a.createElement(k.a,{name:"select"+n,options:a,styles:r,onChange:function(e){return l(e,t)}}),c.a.createElement(x,{vehicleSelectFun:o,allProps:e}))},B=function(e){var t=e.self,n=e.self.state,a=n.vehSelection1,i=n.planSelection1,l=n.vehSelection2,o=n.planSelection2,r=n.vehSelection3,s=n.planSelection3,u=n.vehSelection4,h=n.planSelection4;return c.a.createElement("div",null,c.a.createElement("div",{className:"count"},c.a.createElement("span",null,"Time :",w.getCount(t.state)," ")),c.a.createElement(T,{destination:"Destination1",vehicleClass:"radBtn1",vehSelection:a,options:w.planetObject(i,t),vehicles:i?w.getFilteredVehicles("Destination1",t):[],allProps:e}),c.a.createElement(T,{destination:"Destination2",vehicleClass:"radBtn2",vehSelection:l,options:w.planetObject(o,t),vehicles:o?w.getFilteredVehicles("Destination2",t):[],allProps:e}),c.a.createElement(T,{destination:"Destination3",vehicleClass:"radBtn3",vehSelection:r,options:w.planetObject(s,t),vehicles:s?w.getFilteredVehicles("Destination3",t):[],allProps:e}),c.a.createElement(T,{destination:"Destination4",vehicleClass:"radBtn4",vehSelection:u,options:w.planetObject(h,t),vehicles:h?w.getFilteredVehicles("Destination4",t):[],allProps:e}))},J=(n(79),function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"Get me the damn Falcon!")),c.a.createElement("div",{className:"header-options"},c.a.createElement("div",{className:"reset"},c.a.createElement("button",{className:"reset-button",onClick:function(){return window.location.reload()}},"Reset"))))}),I=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"&copy Finding Falcone 2021"))},A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).planetSelect=n.planetSelect.bind(Object(h.a)(n)),n.vehicleSelect=n.vehicleSelect.bind(Object(h.a)(n)),n.state={planets:[],vehicles:[],planSelection1:"",planSelection2:"",planSelection3:"",planSelection4:"",vehSelection1:"",vehSelection2:"",vehSelection3:"",vehSelection4:"",destination1Vehicles:[],destination2Vehicles:[],destination3Vehicles:[],destination4Vehicles:[],vehiclesSpeed:{},planetDistance:{}},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){w.getDestinationAndVehiclesJson(this)}},{key:"vehicleSelect",value:function(e,t){switch(t){case"Destination1":w.updateVehicleObject("vehSelection1","destination1Vehicles",e,this);break;case"Destination2":w.updateVehicleObject("vehSelection2","destination2Vehicles",e,this);break;case"Destination3":w.updateVehicleObject("vehSelection3","destination3Vehicles",e,this);break;case"Destination4":w.updateVehicleObject("vehSelection4","destination4Vehicles",e,this)}}},{key:"planetSelect",value:function(e,t){var n=w.setVehicle(this.state.vehicles);switch(t){case"Destination1":this.setState({planSelection1:e.value,destination1Vehicles:n,vehSelection1:""});break;case"Destination2":this.setState({planSelection2:e.value,destination2Vehicles:n,vehSelection2:""});break;case"Destination3":this.setState({planSelection3:e.value,destination3Vehicles:n,vehSelection3:""});break;case"Destination4":this.setState({planSelection4:e.value,destination4Vehicles:n,vehSelection4:""})}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"container"},c.a.createElement(N.NotificationContainer,null),c.a.createElement("div",{className:"header"},c.a.createElement(J,null),c.a.createElement("div",{className:"hint"},c.a.createElement("p",null,"Be careful in what you choose :}"))),c.a.createElement("div",{className:"select"},c.a.createElement(B,{self:this,planetSelect:this.planetSelect,vehicleSelect:this.vehicleSelect})),c.a.createElement("div",{className:"go-button"},c.a.createElement("button",{type:"button",onClick:function(){return w.submitJson(e)}},"Go!")),c.a.createElement("div",{className:"footer"},c.a.createElement(I,null)))}}]),t}(a.Component),R=n(20),G=n(5),M=function(){return c.a.createElement(R.a,null,c.a.createElement(G.c,null,c.a.createElement(G.a,{exact:!0,path:"/"},c.a.createElement(A,null))))};n(82);l.a.render(c.a.createElement(R.a,null,c.a.createElement(M,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.ebe47046.chunk.js.map