(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06c3b786"],{1481:function(t,e,a){"use strict";a("3834")},"1ada":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"onhold-leads-page"}},[a("div",{staticClass:"vd_content-wrapper"},[a("div",{staticClass:"vd_content clearfix"},[t._m(0),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{attrs:{id:"Country1"}},[a("div",{staticClass:"widget"},[a("div",{staticClass:"bg-white"},[a("div",{attrs:{id:"new-request-tab-c1"}},[a("CDataTable",{staticClass:"leads-table",attrs:{responsive:"",hover:!0,striped:!0,border:!0,fixed:!1,items:t.items,columnFilter:"",itemsPerPageSelect:"",itemsPerPage:20,sorter:"",fields:[{key:"sr",sorter:!1,filter:!1,_style:"width:50px",label:"Sr#"},"created_at","whatsapp_num","country","assigned_to","status",{key:"Actions",sorter:!1}],pagination:""},scopedSlots:t._u([{key:"sr",fn:function(e){var s=e.index;return[a("td",{staticClass:"text-center"},[a("p",{staticClass:"mb-0"},[t._v(t._s(s+1))])])]}},{key:"assigned_to",fn:function(e){var s=e.item;return[a("td",[null==s.agent?a("span",{staticClass:"badge badge-pill badge-danger"},[t._v(" unassigned ")]):a("span",[t._v(" "+t._s(null==s.agent?"unassigned":s.agent.first_name)+" ")])])]}},{key:"whatsapp_num",fn:function(e){var s=e.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://api.whatsapp.com/send?phone="+s.whatsapp_num,target:"_blank",title:"Click To Open Whatsapp"}},[t._v(" "+t._s(s.whatsapp_num)+" ")])])]}},{key:"Email",fn:function(e){var s=e.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"mailto:"+s.email,target:"_blank",title:"Click To Send Email"}},[t._v(" "+t._s(s.email)+" ")])])]}},{key:"StudentName",fn:function(e){var s=e.item;return[a("td",[a("p",[t._v(" "+t._s(s.first_name+s.last_name)+" ")])])]}},{key:"PreferredCountry",fn:function(e){var s=e.item;return[a("td",[a("p",[t._v(" "+t._s(s.country)+" ")])])]}},{key:"phone",fn:function(e){var s=e.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"tel:"+s.phone,title:"Click To Make Phone Call"}},[t._v(" "+t._s(s.phone)+" ")])])]}},{key:"status",fn:function(e){var s=e.item;return[a("td",{staticClass:"status text-center",staticStyle:{padding:"4px 15px 0 15px"}},[a("b-form-select",{attrs:{size:"sm",options:["New Lead","In Progress","Expected","Not Expected","Applied","On Hold","Rejected"]},on:{change:function(e){return t.changeStatus(s)}},model:{value:s.status,callback:function(e){t.$set(s,"status",e)},expression:"item.status"}})],1)]}},{key:"Actions",fn:function(e){var s=e.index,i=e.item;return[a("td",{staticClass:"menu-action"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"view-details-sidebar"+s,expression:"'view-details-sidebar' + index"}],staticClass:"btn menu-icon vd_bd-green vd_green",attrs:{"data-target":"#viewAccept","data-toggle":"modal"},on:{click:function(e){return t.currentStudent(i)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-eye",attrs:{title:"View Form"}})]),"admin"===t.getUser.type?a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"successfully-added-modal"+s,expression:"'successfully-added-modal' + index"}],staticClass:"btn menu-icon vd_bd-yellow vd_yellow",attrs:{"data-target":"#viewAccept","data-toggle":"modal"},on:{click:function(e){return t.currentStudent(i)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-check",attrs:{title:"Assign"}})]):t._e(),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"edit-lead-modal"+s,expression:"'edit-lead-modal' + index"}],staticClass:"btn edit-icon menu-icon  vd_bd-black vd_bd-black ",attrs:{item:i.id},on:{click:function(e){return t.setStudent(i)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-pen",attrs:{title:"Edit Lead"}})]),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"add-note-modal"+s,expression:"'add-note-modal' + index"}],staticClass:"btn edit-icon menu-icon  vd_bd-black vd_bd-black ",attrs:{"data-target":"#denyRequest","data-toggle":"modal",item:i.id},on:{click:function(e){return t.setStudent(i)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-book",attrs:{title:"Add Note"}})]),"admin"==t.getUser.type?a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"deny-request-modal"+s,expression:"'deny-request-modal' + index"}],staticClass:"btn menu-icon vd_bd-red vd_red",attrs:{"data-target":"#denyRequest","data-toggle":"modal",item:i.id}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-trash",attrs:{title:"Delete"},on:{click:function(e){return t.setStudent(i.id)}}})]):t._e(),a("AllPopups",{attrs:{propsindex:s}})],1)]}}])}),a("b-overlay",{staticClass:"overlayModal",attrs:{show:t.formOverlay,"no-wrap":""}})],1)])])])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vd_title-section clearfix"},[a("div",{staticClass:"vd_panel-header"},[a("h1",[a("i",{staticClass:"fas fa-cubes"}),t._v(" On Hold Leads")])])])}],n=a("2f62"),r=a("7387"),o=a("bc3a"),d=a.n(o);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){u(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m={name:"NewRequest",components:{AllPopups:r["a"]},data:function(){return{items:[],deleteStudentId:"",formOverlay:!0}},computed:c({},Object(n["b"])(["getUser"])),methods:{getStudent:function(){var t=this,e="";e="Sales Agent"==t.getUser.type?"https://admin.agentmis.com/api/sales-agent/hold-leads":"Call Center Agent"==t.getUser.type?"https://admin.agentmis.com/api/call-agent/hold-leads":"https://admin.agentmis.com/api/admin/hold-leads",d.a.get(e).then((function(e){t.items=e.data.data,t.formOverlay=!1})).catch((function(e){console.log(e),t.formOverlay=!1}))},setStudent:function(t){this.$store.commit("SET_CURRENT_STUDENT",t)},currentStudent:function(t){this.$store.commit("SET_CURRENT_STUDENT",t)},changeStatus:function(t){var e=this,a=this,s="";s="admin"==a.getUser.type?"https://admin.agentmis.com/api/admin/status/"+t.id:"https://admin.agentmis.com/api/sales-agent/status/"+t.id,d.a.post(s,{status:t.status}).then((function(t){a.$toast.success(t.data.message,{position:"top-right",closeButton:"button",icon:!0,rtl:!1}),a.getStudent()})).catch((function(t){var a="";t.response.data.errors.email&&(a+=t.response.data.errors.email),t.response.data.errors.password&&(a+=t.response.data.errors.password),t&&e.$toast.error(a,{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}))}},mounted:function(){this.getStudent()}},p=m,v=(a("1481"),a("2877")),f=Object(v["a"])(p,s,i,!1,null,null,null);e["default"]=f.exports},3834:function(t,e,a){}}]);
//# sourceMappingURL=chunk-06c3b786.ff0f7232.js.map