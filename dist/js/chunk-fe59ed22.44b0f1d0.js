(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe59ed22"],{1513:function(s,t,a){"use strict";a("4004")},4004:function(s,t,a){},4375:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("CChartLine",{attrs:{datasets:s.defaultDatasets,options:s.defaultOptions,labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"]}})},r=[],o=a("f485"),i=a("52d7"),l=function(s){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if("undefined"===typeof s)throw new TypeError("Hex color is not defined");var a,e,r,o=s.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!o)throw new Error("".concat(s," is not a valid hex color"));return 7===s.length?(a=parseInt(s.slice(1,3),16),e=parseInt(s.slice(3,5),16),r=parseInt(s.slice(5,7),16)):(a=parseInt(s.slice(1,2),16),e=parseInt(s.slice(2,3),16),r=parseInt(s.slice(3,5),16)),"rgba(".concat(a,", ").concat(e,", ").concat(r,", ").concat(t/100,")")},n=l;function c(s,t){return Math.floor(Math.random()*(t-s+1)+s)}var g={name:"MainChartExample",components:{CChartLine:o["CChartLine"]},computed:{defaultDatasets:function(){for(var s=Object(i["a"])("success2")||"#4dbd74",t=Object(i["a"])("info")||"#20a8d8",a=Object(i["a"])("danger")||"#f86c6b",e=27,r=[],o=[],l=[],g=0;g<=e;g++)r.push(c(50,200)),o.push(c(80,100)),l.push(65);return[{label:"My First dataset",backgroundColor:n(t,10),borderColor:t,pointHoverBackgroundColor:t,borderWidth:2,data:r},{label:"My Second dataset",backgroundColor:"transparent",borderColor:s,pointHoverBackgroundColor:s,borderWidth:2,data:o},{label:"My Third dataset",backgroundColor:"transparent",borderColor:a,pointHoverBackgroundColor:a,borderWidth:1,borderDash:[8,5],data:l}]},defaultOptions:function(){return{maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}}}},d=g,u=a("2877"),p=Object(u["a"])(d,e,r,!1,null,null,null);t["default"]=p.exports},7277:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:" mb-4 "},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-12 p-4  welcomeCard bg-white "},[a("div",{staticClass:"day"},[a("h4",[s._v(" "+s._s(s.getWeekDay)+", "+s._s(s.getCurrentMonth+" "+(new Date).getDate())+" ")]),a("h1",{staticClass:"mb-0 Greetings"},[s._v(" Good "+s._s(s.getGreetings)+", "),a("br"),a("span",{staticClass:"text-capitalize"},[s._v(" "+s._s(s.getUser.first_name+" "+s.getUser.last_name)+" ")])])])])])]),"admin"==s.getUser.type||"Sales Agent"===s.getUser.type?a("WidgetsDropdown"):s._e(),"admin"!==s.getUser.type?a("div",{staticClass:"bg-white radius-10 py-3 px-3"},[a("h5",{staticClass:"agent-progress text-black text-bold"},[s._v("Your Progress")]),a("div",{staticClass:"row"},["Sales Agent"==s.getUser.type?a("div",{staticClass:"col-6"},[a("h6",{staticClass:"text-text badge badge-success"},[s._v(" For Sales Agent ")]),a("CChartPie",{attrs:{datasets:s.salesAgentData,labels:["New Leads","In Progress","On Hold","Expected","Not Expected","Applied","Rejected"]}})],1):a("div",{staticClass:"col-6"},[a("h6",{staticClass:"text-text badge badge-success"},[s._v(" For Call Center Agent ")]),a("CChartBar",{attrs:{datasets:s.callCenterAgentData,labels:"months"}})],1)])]):s._e(),"admin"==s.getUser.type?a("CRow",[a("CCol",{attrs:{md:"12"}},[a("CCard",[a("CCardHeader",[a("h5",{staticClass:"mb-0 mt-2"},[s._v("Traffic & Sales")])]),a("CCardBody",[a("CRow",[a("CCol",{attrs:{sm:"12",lg:"6"}},[a("CRow",[a("CCol",{attrs:{sm:"6"}},[a("CCallout",{attrs:{color:"info"}},[a("small",{staticClass:"text-muted"},[s._v("Total Recieved Queries")]),a("br"),a("strong",{staticClass:"h4"},[s._v("9,123")])])],1),a("CCol",{attrs:{sm:"6"}},[a("CCallout",{attrs:{color:"danger"}},[a("small",{staticClass:"text-muted"},[s._v("Total Resolved Queries")]),a("br"),a("strong",{staticClass:"h4"},[s._v("22,643")])])],1)],1),a("hr",{staticClass:"mt-0"}),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v(" Monday ")])]),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{color:"info",value:34}}),a("CProgress",{staticClass:"progress-xs",attrs:{color:"danger",value:78}})],1)]),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v(" Tuesday ")])]),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:56,color:"info"}}),a("CProgress",{staticClass:"progress-xs",attrs:{value:94,color:"danger"}})],1)]),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v(" Wednesday ")])]),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:12,color:"info"}}),a("CProgress",{staticClass:"progress-xs",attrs:{value:67,color:"danger"}})],1)]),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v(" Thursday ")])]),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:43,color:"info"}}),a("CProgress",{staticClass:"progress-xs",attrs:{value:91,color:"danger"}})],1)]),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v(" Friday ")])]),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:22,color:"info"}}),a("CProgress",{staticClass:"progress-xs",attrs:{value:73,color:"danger"}})],1)]),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v(" Saturday ")])]),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:53,color:"info"}}),a("CProgress",{staticClass:"progress-xs",attrs:{value:82,color:"danger"}})],1)]),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v(" Sunday ")])]),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:9,color:"info"}}),a("CProgress",{staticClass:"progress-xs",attrs:{value:69,color:"danger"}})],1)]),a("div",{staticClass:"legend text-center"},[a("small",[a("sup",[a("CBadge",{attrs:{shape:"pill",color:"info"}})],1),s._v(" "),a("sup",[a("CBadge",{attrs:{shape:"pill",color:"danger"}})],1),s._v(" Total Forms Status ")])])],1),a("CCol",{attrs:{sm:"12",lg:"6"}},[a("CRow",[a("CCol",{attrs:{sm:"6"}},[a("CCallout",{attrs:{color:"warning"}},[a("small",{staticClass:"text-muted"},[s._v("New Students")]),a("br"),a("strong",{staticClass:"h4"},[s._v("78,623")])])],1),a("CCol",{attrs:{sm:"6"}},[a("CCallout",{attrs:{color:"success"}},[a("small",{staticClass:"text-muted"},[s._v("Active Students")]),a("br"),a("strong",{staticClass:"h4"},[s._v("49,123")])])],1)],1),a("hr",{staticClass:"mt-0"}),a("ul",{staticClass:"horizontal-bars type-2"},[a("div",{staticClass:"progress-group"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cil-user"}}),a("span",{staticClass:"title"},[s._v("Male")]),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v("43%")])],1),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:43,color:"primary"}})],1)]),a("div",{staticClass:"progress-group mb-5"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cil-user-female"}}),a("span",{staticClass:"title"},[s._v("Female")]),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v("37%")])],1),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:37,color:"danger"}})],1)]),a("div",{staticClass:"progress-group"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cib-facebook",height:"17"}}),a("span",{staticClass:"title"},[s._v("Facebook")]),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v(" 51,223 "),a("span",{staticClass:"text-muted small"},[s._v("(15%)")])])],1),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:15,color:"success"}})],1)]),a("div",{staticClass:"progress-group"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cib-twitter",height:"17"}}),a("span",{staticClass:"title"},[s._v("Twitter")]),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v(" 37,564 "),a("span",{staticClass:"text-muted small"},[s._v("(11%)")])])],1),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:11,color:"success"}})],1)]),a("div",{staticClass:"progress-group"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cib-linkedin",height:"17"}}),a("span",{staticClass:"title"},[s._v("LinkedIn")]),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v(" 27,319 "),a("span",{staticClass:"text-muted small"},[s._v(" (8%)")])])],1),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:8,color:"success"}})],1)])])],1)],1),a("br"),a("CDataTable",{staticClass:"mb-0 table-outline",attrs:{hover:"",items:s.tableItems,fields:s.tableFields,"head-color":"light","no-sorting":""},scopedSlots:s._u([{key:"avatar",fn:function(s){var t=s.item;return a("td",{staticClass:"text-center"},[a("div",{staticClass:"c-avatar"},[a("img",{staticClass:"c-avatar-img",attrs:{src:t.avatar.url,alt:""}}),a("span",{staticClass:"c-avatar-status",class:"bg-"+(t.avatar.status||"secondary")})])])}},{key:"user",fn:function(t){var e=t.item;return a("td",{},[a("div",[s._v(s._s(e.user.name))]),a("div",{staticClass:"small text-muted"},[a("span",[e.user.new?[s._v("New")]:[s._v("Recurring")]],2),s._v(" | Registered: "+s._s(e.user.registered)+" ")])])}},{key:"country",fn:function(s){var t=s.item;return a("td",{staticClass:"text-center"},[a("CIcon",{attrs:{name:t.country.flag,height:"25"}})],1)}},{key:"progress",fn:function(t){var e=t.item;return a("td",{},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"float-left"},[a("strong",[s._v(s._s(e.progress.value)+"%")])]),a("div",{staticClass:"float-right"},[a("small",{staticClass:"text-muted"},[s._v(s._s(e.progress.period))])])]),a("CProgress",{staticClass:"progress-xs",attrs:{color:s.color(e.progress.value)},model:{value:e.progress.value,callback:function(t){s.$set(e.progress,"value",t)},expression:"item.progress.value"}})],1)}},{key:"payment",fn:function(s){var t=s.item;return a("td",{staticClass:"text-center"},[a("CIcon",{attrs:{name:t.payment.icon,height:"25"}})],1)}},{key:"activity",fn:function(t){var e=t.item;return a("td",{},[a("div",{staticClass:"small text-muted"},[s._v("Last login")]),a("strong",[s._v(s._s(e.activity))])])}}],null,!1,3681486259)})],1)],1)],1)],1):s._e(),"admin"==s.getUser.type?a("WidgetsBrand"):s._e()],1)},r=[],o=a("4375"),i=a("f236"),l=a("ed3a"),n=a("f485"),c=a("2f62");function g(s,t){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(s);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),a.push.apply(a,e)}return a}function d(s){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){u(s,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(a,t))}))}return s}function u(s,t,a){return t in s?Object.defineProperty(s,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[t]=a,s}var p={name:"Dashboard",components:{MainChartExample:o["default"],WidgetsDropdown:i["a"],WidgetsBrand:l["a"],CChartPie:n["CChartPie"],CChartBar:n["CChartBar"]},data:function(){return{selected:"Month",salesAgentDataArr:[1,10,45,51,55,8,54],tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"cif-us"},progress:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"cif-br"},progress:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"cif-in"},progress:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"cif-fr"},progress:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"cif-es"},progress:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"cif-pl"},progress:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},activity:"Last week"}],tableFields:[{key:"avatar",label:"",_classes:"text-center"},{key:"user",label:"Agents"},{key:"country",_classes:"text-center"},{key:"progress"},{key:"activity"}]}},methods:{color:function(s){var t;return s<=25?t="info":s>25&&s<=50?t="success":s>50&&s<=75?t="warning":s>75&&s<=100&&(t="danger"),t}},computed:d(d({},Object(c["b"])(["getUser"])),{},{getWeekDay:function(){var s=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),t=s[(new Date).getDay()];return t},getCurrentMonth:function(){var s=["January","February","March","April","May","June","July","August","September","October","November","December"],t=s[(new Date).getMonth()];return t},getGreetings:function(){var s=(new Date).getHours();return s<12?"Morning":s<18?"Afternoon":"Evening"},salesAgentData:function(){return[{label:"GitHub Commits",backgroundColor:["#130f40","#3498db","#e67e22","#8e44ad","#bdc3c7","#27ae60","#c0392b"],data:this.salesAgentDataArr}]}})},C=p,v=(a("b985"),a("2877")),m=Object(v["a"])(C,e,r,!1,null,null,null);t["default"]=m.exports},b985:function(s,t,a){"use strict";a("de7f")},de7f:function(s,t,a){},ed3a:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("CRow",[s.noCharts?[a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"facebook","right-header":"89k","right-footer":"friends","left-header":"459","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-facebook",height:"56"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"twitter","right-header":"973k","right-footer":"followers","left-header":"1.792","left-footer":"tweets"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-twitter",height:"56"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-linkedin",height:"56"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{"right-header":"12","right-footer":"events","left-header":"4","left-footer":"meetings",color:"warning"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cil-calendar",height:"56"}})],1)],1)]:[a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"facebook","right-header":"89k","right-footer":"friends","left-header":"459","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-facebook",height:"52"}}),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[65,59,84,84,51,55,40],label:"Friends",labels:"months"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"twitter","right-header":"973k","right-footer":"followers","left-header":"1.792","left-footer":"tweets"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-twitter",height:"52"}}),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[1,13,9,17,34,41,38],label:"Followers",labels:"months"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-linkedin",height:"52"}}),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[78,81,80,45,34,12,40],label:"Contracts",labels:"months"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{"right-header":"12","right-footer":"events","left-header":"4","left-footer":"meetings",color:"warning"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cil-calendar",height:"52"}}),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[35,23,56,22,97,23,64],label:"Followers",labels:"months"}})],1)],1)]],2)},r=[],o=a("4c27"),i={name:"WidgetsBrand",components:{CChartLineSimple:o["CChartLineSimple"]},props:{noCharts:Boolean}},l=i,n=(a("1513"),a("2877")),c=Object(n["a"])(l,e,r,!1,null,"319234b8",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-fe59ed22.44b0f1d0.js.map