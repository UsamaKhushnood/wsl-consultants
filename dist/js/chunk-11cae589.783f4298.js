(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11cae589"],{"4c27":function(t,e,r){"use strict";r.r(e),r.d(e,"CChartLineSimple",(function(){return h})),r.d(e,"CChartBarSimple",(function(){return j})),r.d(e,"CChartLineExample",(function(){return H})),r.d(e,"CChartBarExample",(function(){return $})),r.d(e,"CChartDoughnutExample",(function(){return z})),r.d(e,"CChartRadarExample",(function(){return X})),r.d(e,"CChartPieExample",(function(){return ot})),r.d(e,"CChartPolarAreaExample",(function(){return ct}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CChartLine",{attrs:{datasets:t.computedDatasets,options:t.computedOptions,labels:t.labels}})},n=[],a=r("f485"),l=r("52d7"),s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(t),o=Object(l["a"])(r,e);return o||t},i=s,c=function t(e,r){for(var o=0,n=Object.keys(r);o<n.length;o++){var a=n[o];r[a]instanceof Object&&Object.assign(r[a],t(e[a],r[a]))}return Object.assign(e||{},r),e},u=c;function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var C={name:"CChartLineSimple",components:{CChartLine:a["CChartLine"]},props:p(p({},a["CChartLine"].props),{},{borderColor:{type:String,default:"rgba(255,255,255,.55)"},backgroundColor:{type:String,default:"transparent"},dataPoints:{type:Array,default:function(){return[10,22,34,46,58,70,46,23,45,78,34,12]}},label:{type:String,default:"Sales"},pointed:Boolean,pointHoverBackgroundColor:String}),computed:{pointHoverColor:function(){return this.pointHoverBackgroundColor?this.pointHoverBackgroundColor:"transparent"!==this.backgroundColor?this.backgroundColor:this.borderColor},defaultDatasets:function(){return[{data:this.dataPoints,borderColor:i(this.borderColor),backgroundColor:i(this.backgroundColor),pointBackgroundColor:i(this.pointHoverColor),pointHoverBackgroundColor:i(this.pointHoverColor),label:this.label}]},pointedOptions:function(){return{scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,this.dataPoints)-5,max:Math.max.apply(Math,this.dataPoints)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}},straightOptions:function(){return{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}}},defaultOptions:function(){var t=this.pointed?this.pointedOptions:this.straightOptions;return Object.assign({},t,{maintainAspectRatio:!1,legend:{display:!1}})},computedDatasets:function(){return u(this.defaultDatasets,this.datasets||{})},computedOptions:function(){return u(this.defaultOptions,this.options||{})}}},g=C,b=r("2877"),m=Object(b["a"])(g,o,n,!1,null,null,null),h=m.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CChartBar",{attrs:{datasets:t.computedDatasets,options:t.computedOptions,labels:t.labels}})},O=[];function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var k={name:"CChartBarSimple",components:{CChartBar:a["CChartBar"]},props:D(D({},a["CChartBar"].props),{},{backgroundColor:{type:String,default:"rgba(0,0,0,.2)"},pointHoverBackgroundColor:String,dataPoints:{type:Array,default:function(){return[10,22,34,46,58,70,46,23,45,78,34,12]}},label:{type:String,default:"Sales"},pointed:Boolean}),computed:{defaultDatasets:function(){return[{data:this.dataPoints,backgroundColor:i(this.backgroundColor),pointHoverBackgroundColor:i(this.pointHoverBackgroundColor),label:this.label,barPercentage:.5,categoryPercentage:1}]},defaultOptions:function(){return{maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}}},computedDatasets:function(){return u(this.defaultDatasets,this.datasets||{})},computedOptions:function(){return u(this.defaultOptions,this.options||{})}}},w=k,S=Object(b["a"])(w,y,O,!1,null,null,null),j=S.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CChartLine",{attrs:{datasets:t.defaultDatasets,labels:"months"}})},B=[],_={name:"CChartLineExample",components:{CChartLine:a["CChartLine"]},computed:{defaultDatasets:function(){return[{label:"Data One",backgroundColor:"rgb(228,102,81,0.9)",data:[30,39,10,50,30,70,35]},{label:"Data Two",backgroundColor:"rgb(0,216,255,0.9)",data:[39,80,40,35,40,20,45]}]}}},E=_,A=Object(b["a"])(E,P,B,!1,null,null,null),H=A.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CChartBar",{attrs:{datasets:t.defaultDatasets,labels:"months"}})},I=[],R={name:"CChartBarExample",components:{CChartBar:a["CChartBar"]},computed:{defaultDatasets:function(){return[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]}}},M=R,J=Object(b["a"])(M,L,I,!1,null,null,null),$=J.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CChartDoughnut",{attrs:{datasets:t.defaultDatasets,labels:["VueJs","EmberJs","ReactJs","AngularJs"]}})},F=[],T={name:"CChartDoughnutExample",components:{CChartDoughnut:a["CChartDoughnut"]},computed:{defaultDatasets:function(){return[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}}},U=T,V=Object(b["a"])(U,W,F,!1,null,null,null),z=V.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CChartRadar",{attrs:{datasets:t.defaultDatasets,options:t.defaultOptions,labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"]}})},q=[],K={name:"CChartRadarExample",components:{CChartRadar:a["CChartRadar"]},computed:{defaultDatasets:function(){return[{label:"2019",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",tooltipLabelColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"2020",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",tooltipLabelColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},defaultOptions:function(){return{aspectRatio:1.5}}}},N=K,Q=Object(b["a"])(N,G,q,!1,null,null,null),X=Q.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CChartPie",{attrs:{datasets:t.defaultDatasets,labels:["VueJs","EmberJs","ReactJs","AngularJs"]}})},Z=[],tt={name:"CChartPieExample",components:{CChartPie:a["CChartPie"]},computed:{defaultDatasets:function(){return[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}}},et=tt,rt=Object(b["a"])(et,Y,Z,!1,null,null,null),ot=rt.exports,nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CChartPolarArea",{attrs:{datasets:t.defaultDatasets,options:t.defaultOptions,labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"]}})},at=[],lt={name:"CChartPolarAreaExample",components:{CChartPolarArea:a["CChartPolarArea"]},computed:{defaultDatasets:function(){return[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"rgba(179,181,198,1)",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"rgba(255,99,132,1)",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},defaultOptions:function(){return{aspectRatio:1.5}}}},st=lt,it=Object(b["a"])(st,nt,at,!1,null,null,null),ct=it.exports},"52d7":function(t,e,r){"use strict";var o=function(){for(var t={},e=document.styleSheets,r="",o=e.length-1;o>-1;o--){for(var n=e[o].cssRules,a=n.length-1;a>-1;a--)if(".ie-custom-properties"===n[a].selectorText){r=n[a].cssText;break}if(r)break}return r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}")),r.split(";").forEach((function(e){if(e){var r=e.split(": ")[0],o=e.split(": ")[1];r&&o&&(t["--".concat(r.trim())]=o.trim())}})),t},n=o,a=10,l=function(){return Boolean(document.documentMode)&&document.documentMode>=a},s=function(t){return t.match(/^--.*/i)},i=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(s(t)&&l()){var o=n();e=o[t]}else e=window.getComputedStyle(r,null).getPropertyValue(t).replace(/^\s/,"");return e};e["a"]=i},f236:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CRow",[r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetDropdown",{attrs:{color:"primary",header:t.allLeadHeader,text:"All Leads"},scopedSlots:t._u([{key:"default",fn:function(){return[r("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[r("CIcon",{attrs:{name:"cil-settings"}})]},proxy:!0}])},[r("CDropdownItem",[t._v("Action")]),r("CDropdownItem",[t._v("Another action")]),r("CDropdownItem",[t._v("Something else here...")]),r("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[r("CChartLineSimple",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"},attrs:{pointed:"","data-points":[65,59,84,84,51,55,40],"point-hover-background-color":"primary",label:"Members",labels:"months"}})]},proxy:!0}])})],1),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetDropdown",{attrs:{color:"info",header:t.allAppliedHeader,text:"Applied"},scopedSlots:t._u([{key:"default",fn:function(){return[r("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end",caret:!1},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[r("CIcon",{attrs:{name:"cil-location-pin"}})]},proxy:!0}])},[r("CDropdownItem",[t._v("Action")]),r("CDropdownItem",[t._v("Another action")]),r("CDropdownItem",[t._v("Something else here...")]),r("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[r("CChartLineSimple",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"},attrs:{pointed:"","data-points":[1,18,9,17,34,22,11],"point-hover-background-color":"info",options:{elements:{line:{tension:1e-5}}},label:"All Leads",labels:"months"}})]},proxy:!0}])})],1),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetDropdown",{attrs:{color:"warning",header:t.allExpectedHeader,text:"Expected"},scopedSlots:t._u([{key:"default",fn:function(){return[r("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[r("CIcon",{attrs:{name:"cil-settings"}})]},proxy:!0}])},[r("CDropdownItem",[t._v("Action")]),r("CDropdownItem",[t._v("Another action")]),r("CDropdownItem",[t._v("Something else here...")]),r("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[r("CChartLineSimple",{staticClass:"mt-3",staticStyle:{height:"70px"},attrs:{"background-color":"rgba(255,255,255,.2)","data-points":[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},"point-hover-background-color":"warning",label:"Members",labels:"months"}})]},proxy:!0}])})],1),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetDropdown",{attrs:{color:"danger",header:t.allProgressHeader,text:"In Progress"},scopedSlots:t._u([{key:"default",fn:function(){return[r("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[r("CIcon",{attrs:{name:"cil-settings"}})]},proxy:!0}])},[r("CDropdownItem",[t._v("Action")]),r("CDropdownItem",[t._v("Another action")]),r("CDropdownItem",[t._v("Something else here...")]),r("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[r("CChartBarSimple",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"},attrs:{"background-color":"rgb(250, 152, 152)",label:"Members",labels:"months"}})]},proxy:!0}])})],1)],1)},n=[],a=r("4c27"),l=r("bc3a"),s=r.n(l),i=r("2f62");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={name:"WidgetsDropdown",components:{CChartLineSimple:a["CChartLineSimple"],CChartBarSimple:a["CChartBarSimple"]},data:function(){return{allLeadHeader:"",allProgressHeader:"",allAppliedHeader:"",allExpectedHeader:""}},computed:u({},Object(i["b"])(["getUser"])),mounted:function(){this.getCounts()},methods:{getCounts:function(){var t=this,e="";e="admin"==t.getUser.type?"https://admin.agentmis.com/api/admin/counter":"Sales Agent"==t.getUser.type?"https://admin.agentmis.com/api/sales-agent/counter":"https://admin.agentmis.com/api/call-agent/counter",s.a.get(e).then((function(e){console.log("data::1",e.data.data),t.allLeadHeader=e.data.data.allLeads.toString(),t.allProgressHeader=e.data.data.inProgress.toString(),t.allExpectedHeader=e.data.data.expected.toString(),t.allAppliedHeader=e.data.data.applied.toString()})).catch((function(t){console.log("(error.response.status",error.response.status),console.log("errors.response.data",t.response.data.errors)}))}}},f=p,C=r("2877"),g=Object(C["a"])(f,o,n,!1,null,null,null);e["a"]=g.exports}}]);
//# sourceMappingURL=chunk-11cae589.783f4298.js.map