(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34eb0fde"],{3925:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cerate-new-lead-popup position-relative "},[a("b-modal",{ref:"create_lead_modal",attrs:{id:"create-lead-modal",title:"Create New Lead","header-bg-variant":"dark","header-text-variant":"light",centered:"",scrollable:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form-group",attrs:{id:"myLead"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"agentFirstName"}},[t._v("First Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],attrs:{type:"text",id:"agentFirstName"},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}})])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"last_name"}},[t._v("Last Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],attrs:{type:"text",id:"last_name"},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}})])])]),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"country"}},[t._v("Preferred Country:")]),a("b-form-select",{attrs:{required:"",options:["Austria ","Europe","Canada","Italy","Itly MBBS","Turkey MBBS","UK","USA","Visit Canada","Visit USA"]},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"phone"}},[t._v("Phone Number:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",id:"phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"whatsapp_num"}},[t._v("Whatsapp Number:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.whatsapp_num,expression:"whatsapp_num"}],attrs:{type:"text",required:"",id:"whatsapp_num"},domProps:{value:t.whatsapp_num},on:{input:function(e){e.target.composing||(t.whatsapp_num=e.target.value)}}})]),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"email"}},[t._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",required:"",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"cv"}},[t._v("Student CV:")]),a("input",{ref:"file",attrs:{type:"file",multiple:"",required:"",id:"cv"},on:{change:function(e){return t.handleCvUpload(e)}}})])])])]},proxy:!0},{key:"modal-footer",fn:function(e){var s=e.hide;return[a("div",[a("div",{staticClass:"row mt-4 mr-2 justify-content-end"},[a("b-button",{ref:"cancel",staticClass:"mr-2",attrs:{variant:"dark",squared:""},on:{click:s}},[t._v("Cancel")]),a("b-button",{attrs:{variant:"success",squared:""},on:{click:t.addLead}},[t._v("Create")])],1)]),a("b-overlay",{staticClass:"overlayModal",attrs:{show:t.formOverlay,"no-wrap":""}})]}}])})],1)},n=[],r=a("fc5c"),i=a("b7df"),o=a("bc3a"),l=a.n(o),c=a("2f62");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={mixins:[i["a"]],data:function(){return{visibleLiveDemo:!1,first_name:"",last_name:"",country:"",email:"",phone:"",whatsapp_num:"",cv:"",screenShot:"",imageList:[],uploadedImages:[],imagesArray:[],formOverlay:!1}},computed:u({},Object(c["b"])(["getUser"])),components:{VueUploadMultipleImage:r["a"]},methods:{handleCvUpload:function(t){var e=this,a=this,s=t.target.files[0],n=new FileReader;n.readAsDataURL(s),n.onload=function(t){a.cv=t.target.result,console.log(e.cv)}},handleScreenshot:function(t){var e=this,a=this,s=t.target.files[0],n=new FileReader;n.readAsDataURL(s),n.onload=function(t){a.screenShot=t.target.result,console.log(e.screenShot)}},addLead:function(){var t=this,e=this,a="";a="Sales Agent"==e.getUser.type?"https://admin.agentmis.com/api/sales-agent/new-leads":"Call Center Agent"==e.getUser.type?"https://admin.agentmis.com/api/call-agent/new-leads":"https://admin.agentmis.com/api/admin/new-leads";for(var s=new FormData,n=(document.querySelector("#cv"),document.querySelector("#screen_shot1"),0);n<this.$refs.file.files.length;n++){var r=this.$refs.file.files[n];s.append("cv["+n+"]",r)}s.append("first_name",e.first_name),s.append("last_name",e.last_name),s.append("country",e.country),s.append("email",e.email),s.append("whatsapp_num",e.whatsapp_num),s.append("phone",e.phone),this.formOverlay=!0,l.a.post(a,s).then((function(a){t.formOverlay=!1,e.$toast.success(a.data.message,{position:"top-right",closeButton:"button",icon:!0,rtl:!1}),e.first_name="",e.last_name="",e.country="",e.email="",e.phone="",e.whatsapp_num="",e.cv="",e.screenShot="",e.imageList=[],e.$store.commit("SET_All_STUDENT",!0),e.getStudent(),e.$refs.cancel.click()})).catch((function(e){t.formOverlay=!1,e&&t.$toast.error(e.response.data.errors,{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}))},uploadImageSuccess:function(t,e,a){console.log(t,"index:",e,a,"upload success"),this.imageList.push(a[e].path)},editImage:function(t,e,a){console.log(t,"index:",e,a,"edit image")},dataChange:function(t){console.log(t,"dataChange")}}},v=p,f=a("2877"),b=Object(f["a"])(v,s,n,!1,null,null,null);e["a"]=b.exports},"6b1f":function(t,e,a){"use strict";a("f7af")},"9ddf":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"all-leads-page"}},[a("div",{staticClass:"vd_content-wrapper"},[a("div",{staticClass:"vd_content clearfix"},[t._m(0),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"create-lead-modal",expression:"'create-lead-modal'"}],staticClass:"btn btn-dark btn-sm ml-auto d-block mb-2"},[t._v(" Create New Lead ")]),a("CreateNewLead"),a("div",{attrs:{id:"Country1"}},[a("div",{staticClass:"widget"},[a("div",{staticClass:"bg-white"},[a("div",{attrs:{id:"new-request-tab-c1"}},[a("CDataTable",{staticClass:"leads-table",attrs:{responsive:"",hover:!0,striped:!0,border:!0,fixed:!1,items:t.getItems,columnFilter:"",itemsPerPageSelect:"",itemsPerPage:20,sorter:"",fields:[{key:"sr",sorter:!1,filter:!1,_style:"width:50px",label:"Sr#"},"created_at","whatsapp_num","country","assigned_to","status",{key:"action",sorter:!1}],pagination:""},scopedSlots:t._u([{key:"sr",fn:function(e){var s=e.index;return[a("td",{staticClass:"text-center"},[a("p",{staticClass:"mb-0"},[t._v(t._s(s+1))])])]}},{key:"assigned_to",fn:function(e){var s=e.item;return[a("td",[null==s.agent?a("span",{staticClass:"badge badge-pill badge-danger"},[t._v(" unassigned ")]):a("span",[t._v(" "+t._s(null==s.agent?"unassigned":s.agent.first_name)+" ")])])]}},{key:"whatsapp_num",fn:function(e){var s=e.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://api.whatsapp.com/send?phone="+s.whatsapp_num,target:"_blank",title:"Click To Open Whatsapp"}},[t._v(" "+t._s(s.whatsapp_num)+" ")])])]}},{key:"PreferredCountry",fn:function(e){var s=e.item;return[a("td",[a("p",[t._v(" "+t._s(s.country)+" ")])])]}},{key:"phone",fn:function(e){var s=e.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"tel:"+s.phone,title:"Click To Make Phone Call"}},[t._v(" "+t._s(s.phone)+" ")])])]}},{key:"status",fn:function(e){var s=e.item;return[a("td",{staticClass:"status text-center",staticStyle:{padding:"4px 15px 0 15px"}},[a("b-form-select",{attrs:{size:"sm",options:["New Lead","In Progress","Expected","Not Expected","Applied","On Hold","Rejected"]},on:{change:function(e){return t.changeStatus(s)}},model:{value:s.status,callback:function(e){t.$set(s,"status",e)},expression:"item.status"}})],1)]}},{key:"action",fn:function(e){var s=e.index,n=e.item;return[a("td",{staticClass:"menu-action"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"view-details-sidebar"+s,expression:"'view-details-sidebar' + index"}],staticClass:"btn menu-icon vd_bd-green vd_green",attrs:{"data-target":"#viewAccept","data-toggle":"modal"},on:{click:function(e){return t.currentStudent(n)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-eye",attrs:{title:"View Form"}})]),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"successfully-added-modal"+s,expression:"'successfully-added-modal' + index"}],staticClass:"btn menu-icon vd_bd-yellow vd_yellow",attrs:{"data-target":"#viewAccept","data-toggle":"modal"},on:{click:function(e){return t.currentStudent(n)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-check",attrs:{title:"Assign"}})]),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"edit-lead-modal"+s,expression:"'edit-lead-modal' + index"}],staticClass:"btn edit-icon menu-icon  vd_bd-black vd_bd-black ",attrs:{item:n.id},on:{click:function(e){return t.setStudent(n)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-pen",attrs:{title:"Edit Lead"}})]),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"add-note-modal"+s,expression:"'add-note-modal' + index"}],staticClass:"btn edit-icon menu-icon  vd_bd-black vd_bd-black ",attrs:{"data-target":"#denyRequest","data-toggle":"modal",item:n.id},on:{click:function(e){return t.setStudent(n)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-book",attrs:{title:"Add Note"}})]),"admin"==t.getUser.type?a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"deny-request-modal"+s,expression:"'deny-request-modal' + index"}],staticClass:"btn menu-icon vd_bd-red vd_red",attrs:{"data-target":"#denyRequest","data-toggle":"modal",item:n.id}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-trash",attrs:{title:"Delete"},on:{click:function(e){return t.setStudent(n)}}})]):t._e(),a("AllPopups",{attrs:{propsindex:s,items:t.getPropUser}})],1)]}}])}),a("b-overlay",{staticClass:"overlayModal",attrs:{show:t.formOverlay,"no-wrap":""}})],1)])])])],1)])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vd_title-section clearfix"},[a("div",{staticClass:"vd_panel-header"},[a("h1",[a("i",{staticClass:"fas fa-cubes"}),t._v(" All Leads")])])])}],r=(a("08be"),a("7387")),i=a("3925"),o=a("bc3a"),l=a.n(o),c=a("2f62"),d=a("b7df");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v={name:"NewRequest",components:{AllPopups:r["a"],CreateNewLead:i["a"]},mixins:[d["a"]],data:function(){return{items:[],deleteStudentId:"",formOverlay:!0,resultCount:0,user_for_pro:""}},computed:m(m(m({},Object(c["b"])(["getUser","getAllStudentData","getItems"])),Object(c["c"])(["allStudent","allStudentData"])),{},{getPropUser:function(){return this.user_for_pro}}),methods:{setStudent:function(t){this.$store.commit("SET_CURRENT_STUDENT",null),this.$store.commit("SET_CURRENT_STUDENT",t),this.user_for_pro=t,this.selectedStudent=t},changeStatus:function(t){var e=this,a=this,s="";s="admin"==a.getUser.type?"https://admin.agentmis.com/api/admin/status/"+t.id:"Call Center Agent"==a.getUser.type?"https://admin.agentmis.com/api/call-agent/status/"+t.id:"https://admin.agentmis.com/api/sales-agent/status/"+t.id,l.a.post(s,{status:t.status}).then((function(t){a.$toast.success(t.data.message,{position:"top-right",closeButton:"button",icon:!0,rtl:!1}),a.getStudent()})).catch((function(t){var a="";t&&e.$toast.error(a,{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}))},currentStudent:function(t){this.$store.commit("SET_CURRENT_STUDENT",{}),this.$store.commit("SET_CURRENT_STUDENT",t)}},mounted:function(){this.getStudent()},watch:{}},f=v,b=(a("6b1f"),a("d825"),a("2877")),g=Object(b["a"])(f,s,n,!1,null,null,null);e["default"]=g.exports},d825:function(t,e,a){"use strict";a("ed04")},ed04:function(t,e,a){},f7af:function(t,e,a){}}]);
//# sourceMappingURL=chunk-34eb0fde.9aa1dbdb.js.map