(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f9b24b8"],{"4b4a":function(e,t,a){},"792c":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"all-leads-page"}},[a("div",{staticClass:"vd_content-wrapper"},[a("div",{staticClass:"vd_content clearfix"},[e._m(0),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"create-lead-modal",expression:"'create-lead-modal'"}],staticClass:"btn btn-dark btn-sm ml-auto d-block mb-2"},[e._v(" Create New Lead ")]),a("CreateNewLead"),a("div",{attrs:{id:"Country1"}},[a("div",{staticClass:"widget"},[a("div",{staticClass:"bg-white"},[a("div",{attrs:{id:"new-request-tab-c1"}},[a("CDataTable",{staticClass:"leads-table",attrs:{responsive:"",hover:!0,striped:!0,border:!0,fixed:!1,items:e.items,columnFilter:"",itemsPerPageSelect:"",itemsPerPage:20,sorter:"",fields:["first_name","whatsapp_num","phone","country","assigned_to","status",{key:"Actions",sorter:!1}],pagination:""},scopedSlots:e._u([{key:"assigned_to",fn:function(t){var s=t.item;return[a("td",[null==s.agent?a("span",{staticClass:"badge badge-pill badge-danger"},[e._v(" unassigned ")]):a("span",[e._v(" "+e._s(null==s.agent?"unassigned":s.agent.first_name)+" ")])])]}},{key:"whatsapp_num",fn:function(t){var s=t.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://api.whatsapp.com/send?phone="+s.whatsapp_num,target:"_blank",title:"Click To Open Whatsapp"}},[e._v(" "+e._s(s.whatsapp_num)+" ")])])]}},{key:"StudentName",fn:function(t){var s=t.item;return[a("td",[a("p",[e._v(" "+e._s(s.first_name+s.last_name)+" ")])])]}},{key:"PreferredCountry",fn:function(t){var s=t.item;return[a("td",[a("p",[e._v(" "+e._s(s.country)+" ")])])]}},{key:"phone",fn:function(t){var s=t.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"tel:"+s.phone,title:"Click To Make Phone Call"}},[e._v(" "+e._s(s.phone)+" ")])])]}},{key:"status",fn:function(t){var s=t.item;return[a("td",{staticClass:"status text-center"},[a("b-form-select",{attrs:{size:"sm",options:["New Lead","In Progress","Expected","Not Expected","Appllied","On Hold","Rejected"]},on:{change:function(t){return e.changeStatus(s)}},model:{value:s.status,callback:function(t){e.$set(s,"status",t)},expression:"item.status"}})],1)]}},{key:"Actions",fn:function(t){var s=t.index,n=t.item;return[a("td",{staticClass:"menu-action"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"view-details-sidebar"+s,expression:"'view-details-sidebar' + index"}],staticClass:"btn menu-icon vd_bd-green vd_green",attrs:{"data-target":"#viewAccept","data-toggle":"modal"},on:{click:function(t){return e.currentStudent(n)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-eye",attrs:{title:"View Form"}})]),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"successfully-added-modal"+s,expression:"'successfully-added-modal' + index"}],staticClass:"btn menu-icon vd_bd-yellow vd_yellow",attrs:{"data-target":"#viewAccept","data-toggle":"modal"},on:{click:function(t){return e.currentStudent(n)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-check",attrs:{title:"Assign"}})]),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"edit-lead-modal"+s,expression:"'edit-lead-modal' + index"}],staticClass:"btn edit-icon menu-icon  vd_bd-black vd_bd-black ",attrs:{item:n.id},on:{click:function(t){return e.setStudent(n)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-pen",attrs:{title:"Edit Lead"}})]),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"add-note-modal"+s,expression:"'add-note-modal' + index"}],staticClass:"btn edit-icon menu-icon  vd_bd-black vd_bd-black ",attrs:{"data-target":"#denyRequest","data-toggle":"modal",item:n.id},on:{click:function(t){return e.setStudent(n)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-book",attrs:{title:"Add Note"}})]),"admin"==e.getUser.type?a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"deny-request-modal"+s,expression:"'deny-request-modal' + index"}],staticClass:"btn menu-icon vd_bd-red vd_red",attrs:{"data-target":"#denyRequest","data-toggle":"modal",item:n.id}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-trash",attrs:{title:"Delete"},on:{click:function(t){return e.setStudent(n.id)}}})]):e._e(),a("AllPopups",{attrs:{propsindex:s}})],1)]}}])})],1)])])])],1)])])])])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vd_title-section clearfix"},[a("div",{staticClass:"vd_panel-header"},[a("h1",[a("i",{staticClass:"fas fa-cubes"}),e._v(" All Leads")])])])}],o=(a("1157"),a("08be"),a("6556"),a("f236")),r=a("7387"),i=a("3925"),d=a("bc3a"),l=a.n(d),c=a("2f62");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v={name:"NewRequest",components:{WidgetsDropdown:o["a"],AllPopups:r["a"],CreateNewLead:i["a"]},data:function(){return{items:[],deleteStudentId:""}},computed:m(m({},Object(c["b"])(["getUser"])),Object(c["c"])(["allStudent"])),methods:{getStudent:function(){var e=this;console.log(e.getUser.type);var t="";t="Sales Agent"==e.getUser.type?"https://admin.agentmis.com/api/sales-agent/expected-leads":"Call Center Agent"==e.getUser.type?"https://admin.agentmis.com/api/call-agent/expected-leads":"https://admin.agentmis.com/api/admin/expected-leads",l.a.get(t).then((function(t){console.log("data::",t.data.data),e.items=t.data.data})).catch((function(e){console.log("(error.response.status",error.response.status),console.log("errors.response.data",e.response.data.errors)}))},setStudent:function(e){this.$store.commit("SET_CURRENT_STUDENT",e)},changeStatus:function(e){var t=this,a=this;console.log(e.status);var s="";s="admin"==a.getUser.type?"https://admin.agentmis.com/api/admin/status/"+e.id:"https://admin.agentmis.com/api/sales-agent/status/"+e.id,l.a.post(s,{status:e.status}).then((function(e){console.log("data::",e.data),a.$toast.success(e.data.message,{position:"top-right",closeButton:"button",icon:!0,rtl:!1}),a.getStudent()})).catch((function(e){var a="";console.log("(error.response.status",e.response.status),console.log("errors.response.data",e.response.data.errors),console.log("errors.response.data",e.response.data),"Login Time Expire"==e.response.data.message&&(console.log("errors.response.data",e.response.data.message),localStorage.setItem("token",null)),e.response.data.errors.email&&(a+=e.response.data.errors.email),e.response.data.errors.password&&(a+=e.response.data.errors.password),e&&t.$toast.error(a,{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}))},currentStudent:function(e){this.$store.commit("SET_CURRENT_STUDENT",{}),this.$store.commit("SET_CURRENT_STUDENT",e)}},mounted:function(){var e=this;setTimeout((function(){e.getStudent()}),1e3)},watch:{allStudent:{handler:function(e,t){console.log(e,t);var a=this;1==e&&(a.getStudent(),a.$store.commit("SET_All_STUDENT",null))},deep:!0}}},b=v,f=(a("b19c"),a("2877")),g=Object(f["a"])(b,s,n,!1,null,null,null);t["default"]=g.exports},b19c:function(e,t,a){"use strict";a("4b4a")}}]);
//# sourceMappingURL=chunk-4f9b24b8.8f423735.js.map