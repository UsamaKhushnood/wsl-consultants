(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c7216a7"],{"2f9e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"approved-leads-page"}},[a("div",{staticClass:"vd_content-wrapper"},[a("div",{staticClass:"vd_content clearfix"},[t._m(0),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{attrs:{id:"Country1"}},[a("div",{staticClass:"widget"},[a("div",{staticClass:"bg-white"},[a("div",{attrs:{id:"new-request-tab-c1"}},[a("CDataTable",{staticClass:"leads-table",attrs:{responsive:"",hover:!0,striped:!0,border:!0,fixed:!1,items:t.items,columnFilter:"",itemsPerPageSelect:"",itemsPerPage:20,sorter:"",fields:[{key:"CreateDate"},"StudentName","Email","Whatsapp","PhoneNo","PreferredCountry","AssignedTo","Status",{key:"Actions",sorter:!1}],pagination:""},scopedSlots:t._u([{key:"AssignedTo",fn:function(e){var s=e.item;return[a("td",[null==s.agent?a("span",{staticClass:"badge badge-pill badge-danger"},[t._v(" unassigned ")]):a("span",[t._v(" "+t._s(null==s.agent?"unassigned":s.agent.first_name)+" ")])])]}},{key:"Whatsapp",fn:function(e){var s=e.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://api.whatsapp.com/send?phone="+s.whatsapp_num,target:"_blank",title:"Click To Open Whatsapp"}},[t._v(" "+t._s(s.whatsapp_num)+" ")])])]}},{key:"Email",fn:function(e){var s=e.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"mailto:"+s.email,target:"_blank",title:"Click To Send Email"}},[t._v(" "+t._s(s.email)+" ")])])]}},{key:"StudentName",fn:function(e){var s=e.item;return[a("td",[a("p",[t._v(" "+t._s(s.first_name+s.last_name)+" ")])])]}},{key:"CreateDate",fn:function(e){var s=e.item;return[a("td",[a("p",[t._v(" "+t._s(s.created_at)+" ")])])]}},{key:"PreferredCountry",fn:function(e){var s=e.item;return[a("td",[a("p",[t._v(" "+t._s(s.country)+" ")])])]}},{key:"PhoneNo",fn:function(e){var s=e.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"tel:"+s.phone,title:"Click To Make Phone Call"}},[t._v(" "+t._s(s.phone)+" ")])])]}},{key:"Status",fn:function(e){var s=e.item;return[a("td",{staticClass:"status text-center"},["Sales Agent"===t.getUser.type||"admin"===t.getUser.type?a("b-form-select",{attrs:{size:"sm",options:["Matured","in progress","Approved","Rejected","On Hold"]},on:{change:function(e){return t.changeStatus(s)}},model:{value:s.status,callback:function(e){t.$set(s,"status",e)},expression:"item.status"}}):t._e(),a("span",{staticClass:"badge badge-pill",class:["in progress"==s.status?"badge-info":"approved"==s.status?"badge-success":"rejected"==s.status?"badge-danger":"badge-warning"]},[t._v(" "+t._s(s.status)+" ")])],1)]}},{key:"Actions",fn:function(e){var s=e.index,n=e.item;return[a("td",{staticClass:"menu-action"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"view-details-sidebar"+s,expression:"'view-details-sidebar' + index"}],staticClass:"btn menu-icon vd_bd-green vd_green",attrs:{"data-target":"#viewAccept","data-toggle":"modal"},on:{click:function(e){return t.currentStudent(n)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-eye",attrs:{title:"View Form"}})]),"admin"===t.getUser.type?a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"successfully-added-modal"+s,expression:"'successfully-added-modal' + index"}],staticClass:"btn menu-icon vd_bd-yellow vd_yellow",attrs:{"data-target":"#viewAccept","data-toggle":"modal"},on:{click:function(e){return t.currentStudent(n)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-check",attrs:{title:"Assign"}})]):t._e(),"admin"==t.getUser.type?a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"deny-request-modal"+s,expression:"'deny-request-modal' + index"}],staticClass:"btn menu-icon vd_bd-red vd_red",attrs:{"data-target":"#denyRequest","data-toggle":"modal",item:n.id}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-trash",attrs:{title:"Delete"},on:{click:function(e){return t.setStudent(n.id)}}})]):t._e(),a("AllPopups",{attrs:{propsindex:s}})],1)]}}])})],1)])])])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vd_title-section clearfix"},[a("div",{staticClass:"vd_panel-header"},[a("h1",[a("i",{staticClass:"fas fa-cubes"}),t._v(" Approved Leads")])])])}],r=(a("6556"),a("f236")),i=a("7387"),o=a("3925"),d=a("bc3a"),c=a.n(d),l=a("2f62");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v={name:"NewRequest",components:{WidgetsDropdown:r["a"],AllPopups:i["a"],CreateNewLead:o["a"]},data:function(){return{items:[],deleteStudentId:""}},computed:p({},Object(l["b"])(["getUser"])),methods:{getStudent:function(){var t=this;c.a.get("https://admin.agentmis.com/api/admin/students").then((function(e){console.log("data::",e.data.data),t.items=e.data.data.approved})).catch((function(t){t.response.data.errors.email&&t.response.data.errors.email}))},setStudent:function(t){this.$store.commit("SET_CURRENT_STUDENT",t)},currentStudent:function(t){console.log(t),this.$store.commit("SET_CURRENT_STUDENT",t)},changeStatus:function(t){var e=this,a=this;console.log(t.status);var s="";s="admin"==a.getUser.type?"https://admin.agentmis.com/api/admin/status/"+t.id:"https://admin.agentmis.com/api/sales-agent/status/"+t.id,c.a.post(s,{status:t.status}).then((function(t){console.log("data::",t.data),a.$toast.success(t.data.message,{position:"top-right",closeButton:"button",icon:!0,rtl:!1}),a.getStudent()})).catch((function(t){var a="";t.response.data.errors.email&&(a+=t.response.data.errors.email),t.response.data.errors.password&&(a+=t.response.data.errors.password),t&&e.$toast.error(a,{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}))}},mounted:function(){this.getStudent()}},f=v,g=(a("a8d6"),a("2877")),b=Object(g["a"])(f,s,n,!1,null,null,null);e["default"]=b.exports},"902b":function(t,e,a){},a8d6:function(t,e,a){"use strict";a("902b")}}]);
//# sourceMappingURL=chunk-0c7216a7.a186fb3c.js.map