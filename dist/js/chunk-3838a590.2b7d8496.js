(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3838a590"],{"19ed":function(t,a,e){"use strict";e("a735")},"21d0":function(t,a,e){"use strict";e("cc90")},4044:function(t,a,e){"use strict";e("6ccd")},"6ccd":function(t,a,e){},"9da4":function(t,a,e){t.exports=e.p+"img/briant2.db546500.png"},a735:function(t,a,e){},cc90:function(t,a,e){},f593:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"c-app"},[e("TheSidebar"),e("CWrapper",[e("TheHeader"),e("div",{staticClass:"c-body"},[e("main",{staticClass:"c-main"},[e("CContainer",{attrs:{fluid:""}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{key:t.$route.path})],1)],1)],1)]),e("TheFooter")],1)],1)},i=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"c-sidebar c-sidebar-dark  c-sidebar-fixed",class:{"c-sidebar-lg-show":t.sidebarShow,"c-sidebar-minimized":t.sidebarMinimize}},[e("router-link",{staticClass:"c-sidebar-brand d-md-down-none router-link-active",attrs:{"active-class":"c-active",to:"/",target:"_self"}},[e("img",{attrs:{src:"/img/logo.cfcafe70.png",width:"50px",alt:"WSL Consultants"}})]),e("ul",{staticClass:"c-sidebar-nav h-100 ps",staticStyle:{position:"relative",overflow:"auto !important"}},["admin"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-title"},[t._v("Admin")]):t._e(),"admin"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"router-link-exact-active c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard","aria-current":"page",target:"_self",exact:""}},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-chart-line",attrs:{"aria-hidden":"true"}}),t._v(" Dashboard ")])],1):t._e(),"admin"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/newrequest",target:"_self"}},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-flag-o",attrs:{"aria-hidden":"true"}}),t._v(" New Request "),e("span",{staticClass:"badge badge-primary"},[t._v(" NEW ")])])],1):t._e(),"admin"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/newagent",target:"_self"}},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-plus-square",attrs:{"aria-hidden":"true"}}),t._v(" Add New Agent ")])],1):t._e(),"admin"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/form",target:"_self"}},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-align-justify",attrs:{"aria-hidden":"true"}}),t._v(" Student Form ")])],1):t._e(),"admin"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-dropdown"},[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"c-sidebar-nav-dropdown-toggle"},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-cubes",attrs:{"aria-hidden":"true"}}),t._v(" Leads ")]),e("b-collapse",{staticClass:"c-sidebar-nav-dropdown-items-custom",attrs:{id:"accordion-1",accordion:"my-accordion",visible:""}},[e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/all-leads",target:"_self"}},[t._v(" All Leads ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/approved",target:"_self"}},[t._v(" Approved ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/rejected",target:"_self"}},[t._v(" Rejected ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/on-hold",target:"_self"}},[t._v(" On Hold ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/in-progress",target:"_self"}},[t._v(" In Progress ")])],1)])],1):t._e(),"admin"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-dropdown"},[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-6",modifiers:{"accordion-6":!0}}],staticClass:"c-sidebar-nav-dropdown-toggle"},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-gear",attrs:{"aria-hidden":"true"}}),t._v(" Dashboard Settings ")]),e("b-collapse",{staticClass:"c-sidebar-nav-dropdown-items-custom",attrs:{id:"accordion-6",visible:"",accordion:"my-accordion"}},[e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/",target:"_self"}},[t._v(" Agents ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"time-setting",target:"_self"}},[t._v(" Login/Logout Settings ")])],1)])],1):t._e(),"Sales Agent"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-title"},[t._v(" Sales Department ")]):t._e(),"Sales Agent"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"router-link-exact-active c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard","aria-current":"page",target:"_self"}},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-bar-chart-o",attrs:{"aria-hidden":"true"}}),t._v(" Dashboard ")])],1):t._e(),"Sales Agent"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-dropdown"},[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-sales",modifiers:{"accordion-sales":!0}}],staticClass:"c-sidebar-nav-dropdown-toggle"},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-cubes",attrs:{"aria-hidden":"true"}}),t._v(" Leads ")]),e("b-collapse",{staticClass:"c-sidebar-nav-dropdown-items-custom",attrs:{id:"accordion-sales",accordion:"my-accordion",visible:""}},[e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/all-leads",target:"_self"}},[t._v(" All Leads ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/approved",target:"_self"}},[t._v(" Approved ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/rejected",target:"_self"}},[t._v(" Rejected ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/on-hold",target:"_self"}},[t._v(" On Hold ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/in-progress",target:"_self"}},[t._v(" In Progress ")])],1)])],1):t._e(),"Call Center Agent"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-title"},[t._v(" Call Center Department ")]):t._e(),"Call Center Agent"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"router-link-exact-active c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard","aria-current":"page",target:"_self"}},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-users",attrs:{"aria-hidden":"true"}}),t._v(" Dashboard ")])],1):t._e(),"Call Center Agent"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/form",target:"_self"}},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-align-justify",attrs:{"aria-hidden":"true"}}),t._v(" Student Form ")])],1):t._e(),"Call Center Agent"==t.getUser.type?e("li",{staticClass:"c-sidebar-nav-dropdown"},[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-call-center",modifiers:{"accordion-call-center":!0}}],staticClass:"c-sidebar-nav-dropdown-toggle"},[e("i",{staticClass:"c-sidebar-nav-icon fa fa-cubes",attrs:{"aria-hidden":"true"}}),t._v(" Leads ")]),e("b-collapse",{staticClass:"c-sidebar-nav-dropdown-items-custom",attrs:{id:"accordion-call-center",accordion:"my-accordion",visible:""}},[e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/all-leads",target:"_self"}},[t._v(" All Leads ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/approved",target:"_self"}},[t._v(" Approved ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/rejected",target:"_self"}},[t._v(" Rejected ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/on-hold",target:"_self"}},[t._v(" On Hold ")])],1),e("li",{staticClass:"c-sidebar-nav-item"},[e("router-link",{staticClass:"c-sidebar-nav-link",attrs:{"active-class":"c-active",to:"/dashboard/leads/in-progress",target:"_self"}},[t._v(" In Progress ")])],1)])],1):t._e(),"admin"==t.getUser.type?e("div",{staticClass:"ps__rail-x",staticStyle:{left:"0px",bottom:"0px"}},[e("div",{staticClass:"ps__thumb-x",staticStyle:{left:"0px",width:"0px"},attrs:{tabindex:"0"}})]):t._e(),"admin"==t.getUser.type?e("div",{staticClass:"ps__rail-y",staticStyle:{top:"0px",right:"0px"}},[e("div",{staticClass:"ps__thumb-y",staticStyle:{top:"0px",height:"0px"},attrs:{tabindex:"0"}})]):t._e()]),e("button",{staticClass:"c-sidebar-minimizer d-md-down-none",attrs:{type:"button"},on:{click:function(a){return t.$store.commit("set",["sidebarMinimize",!t.minimize])}}})],1)},n=[],c=e("2f62"),o=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",fontIcon:"fa fa-chart-line",user_type:"admin"},{_name:"CSidebarNavItem",name:"New Request",to:"/dashboard/newrequest",fontIcon:"fa fa-flag-o",user_type:"admin",badge:{color:"primary",text:"NEW"}},{_name:"CSidebarNavItem",name:"Add New Agent",to:"/dashboard/newagent",fontIcon:"fa fa-plus-square",user_type:"admin"},{_name:"CSidebarNavItem",name:"Student Form",to:"/form",fontIcon:"fa fa-align-justify",user_type:"admin"},{_name:"CSidebarNavTitle",_children:["Pages"]},{_name:"CSidebarNavDropdown",name:"Leads",fontIcon:"fa fa-cubes",user_type:"admin",items:[{name:"Canda Leads",to:"/"},{name:"Austria Leads ",to:"/"},{name:"Italy Leads",to:"/"},{name:"UK Leads",to:"/"},{name:"USA Leads",to:"/"},{name:"Turkey MBBS Leads",to:"/"},{name:"Italy MBBS Leads",to:"/"},{name:"Visit Visa Leads",to:"/"}]},{_name:"CSidebarNavDropdown",name:"Updates",fontIcon:"fas fa-sync",user_type:"admin",items:[{name:"Students Updates",to:"/"},{name:"New Queries",to:"/"},{name:"New Inquiries",to:"/"}]},{_name:"CSidebarNavDropdown",name:"Students",fontIcon:"fas fa-graduation-cap",user_type:"admin",items:[{name:"New Students",to:"/"},{name:"Recent Students",to:"/"},{name:"Active Students",to:"/"},{name:"Intrested Students",to:"/"}]},{_name:"CSidebarNavDropdown",name:"Sales Department",fontIcon:"fa fa-bar-chart-o",user_type:"admin",items:[{name:"Agent Status",to:"/"},{name:"Agent Status",to:"/"},{name:"Agent Status",to:"/"}]},{_name:"CSidebarNavDropdown",name:"Call Center Department",fontIcon:"fa fa-users",user_type:"admin",items:[{name:"Agent Status",to:"/"},{name:"Agent Status",to:"/"},{name:"Agent Status",to:"/"}]},{_name:"CSidebarNavDropdown",name:"Dashboard Settings",fontIcon:"fa fa-gear",user_type:"admin",items:[{name:"Admin Control",to:"/"},{name:"Admin Control",to:"/"},{name:"Admin Control",to:"/"}]}]}];function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function d(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){v(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function v(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var m={name:"TheSidebar",nav:o,computed:d(d({show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize},nav:function(){return $options.nav}},Object(c["b"])(["getUser"])),Object(c["c"])(["sidebarShow","sidebarMinimize"]))},b=m,u=e("2877"),p=Object(u["a"])(b,r,n,!1,null,null,null),g=p.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[e("div",{staticClass:"fullscreenIcon",on:{click:function(a){return t.$store.commit("toggleSidebarDesktop")}}},[e("b-icon",{attrs:{icon:t.sidebarShow?"fullscreen":"fullscreen-exit",scale:"1.2"}})],1),e("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}},[e("CIcon",{attrs:{name:"logo",height:"48",alt:"Logo"}})],1),e("CHeaderNav",{staticClass:"d-md-down-none mr-auto"}),e("CHeaderNav",{staticClass:"mr-4"},[e("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[e("CHeaderNavLink",[e("CIcon",{attrs:{name:"cil-bell"}})],1)],1),e("TheHeaderDropdownAccnt")],1),e("CSubheader",{staticClass:"px-3"},[e("CBreadcrumbRouter",{staticClass:"border-0 mb-0"})],1)],1)},C=[],_=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:t._u([{key:"toggler",fn:function(){return[s("CHeaderNavLink",[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img ",attrs:{src:e("9da4")}})])])]},proxy:!0}])},[s("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[s("strong",[t._v(t._s(t.getUser.first_name)+" Account")])]),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-bell"}}),t._v(" Updates "),s("CBadge",{staticClass:"mfs-auto",attrs:{color:"info"}},[t._v(t._s(t.itemsCount))])],1),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-task"}}),t._v(" Tasks "),s("CBadge",{staticClass:"mfs-auto",attrs:{color:"danger"}},[t._v(t._s(t.itemsCount))])],1),s("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[s("strong",[t._v("Settings")])]),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-user"}}),t._v(" Agent Profiles ")],1),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-settings"}}),t._v(" Settings ")],1),s("CDropdownDivider"),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-shield-alt"}}),t._v(" Lock Account ")],1),s("CDropdownItem",{on:{click:function(a){return a.preventDefault(),t.logout()}}},[s("CIcon",{attrs:{name:"cil-lock-locked"}}),t._v(" Logout ")],1)],1)},h=[];function w(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function k(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?w(Object(e),!0).forEach((function(a){y(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function y(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var S={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42}},computed:k({},Object(c["b"])(["getUser"])),methods:{trigger:function(){this.$refs.sendReq.click()},logout:function(){var t=this,a=this;this.$http.post("https://admin.agentmis.com/api/logout").then((function(t){console.log("s",t.data.message),a.$toast.success(t.data.message,{position:"top-right",closeButton:"button",icon:!0,rtl:!1}),a.$router.push({path:"/login"})})).catch((function(a){var e="";a.response.data.errors.email&&(e+=a.response.data.errors.email),a.response.data.errors.password&&(e+=a.response.data.errors.password),a&&t.$toast.error(e,{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}))},sendTo:function(t){window.open(t,"_blank")}}},O=S,j=(e("4044"),Object(u["a"])(O,_,h,!1,null,"c34bcce8",null)),D=j.exports,A={name:"TheHeader",components:{TheHeaderDropdownAccnt:D},computed:Object(c["c"])(["sidebarShow"])},I=A,x=(e("21d0"),Object(u["a"])(I,f,C,!1,null,null,null)),N=x.exports,L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CFooter",{attrs:{fixed:!1}},[e("div",[e("span",{staticClass:"ml-1"},[t._v(" Copyright ©"+t._s((new Date).getFullYear())+" WSL Consultants. All Rights Reserved")])]),e("div",{staticClass:"mfs-auto"},[e("span",{staticClass:"mr-1",attrs:{target:"_blank"}},[t._v("Powered by")]),e("a",{attrs:{href:"https://www.upwork.com/freelancers/~018d5c776de29047a0",target:"_blank"}},[t._v("Caps Lock Studio")])])])},P=[],U={name:"TheFooter"},H=U,T=Object(u["a"])(H,L,P,!1,null,null,null),$=T.exports,E={name:"TheContainer",components:{TheSidebar:g,TheHeader:N,TheFooter:$},created:function(){console.log("TheContainer",1)}},B=E,R=(e("19ed"),Object(u["a"])(B,s,i,!1,null,"e2df9c18",null));a["default"]=R.exports}}]);
//# sourceMappingURL=chunk-3838a590.2b7d8496.js.map