(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6561c204"],{"14e8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"rejected-leads-page"}},[a("div",{staticClass:"vd_content-wrapper"},[a("div",{staticClass:"vd_content clearfix"},[e._m(0),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{attrs:{id:"Country1"}},[a("div",{staticClass:"widget"},[a("div",{staticClass:"bg-white"},[a("div",{attrs:{id:"new-request-tab-c1"}},[a("CDataTable",{staticClass:"leads-table",attrs:{responsive:"",hover:!0,striped:!0,border:!0,fixed:!1,items:e.items,columnFilter:"",itemsPerPageSelect:"",itemsPerPage:20,sorter:"",fields:["first_name","whatsapp_num","phone","country","assigned_to","status",{key:"Actions",sorter:!1}],pagination:""},scopedSlots:e._u([{key:"assigned_to",fn:function(t){var n=t.item;return[a("td",[null==n.agent?a("span",{staticClass:"badge badge-pill badge-danger"},[e._v(" unassigned ")]):a("span",[e._v(" "+e._s(null==n.agent?"unassigned":n.agent.first_name)+" ")])])]}},{key:"whatsapp_num",fn:function(t){var n=t.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://api.whatsapp.com/send?phone="+n.whatsapp_num,target:"_blank",title:"Click To Open Whatsapp"}},[e._v(" "+e._s(n.whatsapp_num)+" ")])])]}},{key:"Email",fn:function(t){var n=t.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"mailto:"+n.email,target:"_blank",title:"Click To Send Email"}},[e._v(" "+e._s(n.email)+" ")])])]}},{key:"StudentName",fn:function(t){var n=t.item;return[a("td",[a("p",[e._v(" "+e._s(n.first_name+n.last_name)+" ")])])]}},{key:"PreferredCountry",fn:function(t){var n=t.item;return[a("td",[a("p",[e._v(" "+e._s(n.country)+" ")])])]}},{key:"phone",fn:function(t){var n=t.item;return[a("td",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"tel:"+n.phone,title:"Click To Make Phone Call"}},[e._v(" "+e._s(n.phone)+" ")])])]}},{key:"status",fn:function(t){var n=t.item;return[a("td",{staticClass:"status text-center"},[a("b-form-select",{attrs:{size:"sm",options:["New Lead","In Progress","Expected","Not Expected","Applied","On Hold","Rejected"]},on:{change:function(t){return e.changeStatus(n)}},model:{value:n.status,callback:function(t){e.$set(n,"status",t)},expression:"item.status"}})],1)]}},{key:"Actions",fn:function(t){var n=t.index,s=t.item;return[a("td",{staticClass:"menu-action"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"view-details-sidebar"+n,expression:"'view-details-sidebar' + index"}],staticClass:"btn menu-icon vd_bd-green vd_green",attrs:{"data-target":"#viewAccept","data-toggle":"modal"},on:{click:function(t){return e.currentStudent(s)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-eye",attrs:{title:"View Form"}})]),"admin"===e.getUser.type?a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"successfully-added-modal"+n,expression:"'successfully-added-modal' + index"}],staticClass:"btn menu-icon vd_bd-yellow vd_yellow",attrs:{"data-target":"#viewAccept","data-toggle":"modal"},on:{click:function(t){return e.currentStudent(s)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-check",attrs:{title:"Assign"}})]):e._e(),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"edit-lead-modal"+n,expression:"'edit-lead-modal' + index"}],staticClass:"btn edit-icon menu-icon  vd_bd-black vd_bd-black ",attrs:{item:s.id},on:{click:function(t){return e.setStudent(s)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-pen",attrs:{title:"Edit Lead"}})]),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"add-note-modal"+n,expression:"'add-note-modal' + index"}],staticClass:"btn edit-icon menu-icon  vd_bd-black vd_bd-black ",attrs:{"data-target":"#denyRequest","data-toggle":"modal",item:s.id},on:{click:function(t){return e.setStudent(s)}}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-book",attrs:{title:"Add Note"}})]),"admin"==e.getUser.type?a("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"deny-request-modal"+n,expression:"'deny-request-modal' + index"}],staticClass:"btn menu-icon vd_bd-red vd_red",attrs:{"data-target":"#denyRequest","data-toggle":"modal",item:s.id}},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fa fa-trash",attrs:{title:"Delete"},on:{click:function(t){return e.setStudent(s.id)}}})]):e._e(),a("AllPopups",{attrs:{propsindex:n}})],1)]}}])}),a("b-overlay",{staticClass:"overlayModal",attrs:{show:e.formOverlay,"no-wrap":""}})],1)])])])])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vd_title-section clearfix"},[a("div",{staticClass:"vd_panel-header"},[a("h1",[a("i",{staticClass:"fas fa-cubes"}),e._v(" Rejected Leads")])])])}],r=a("2f62"),i=(a("6556"),a("f236")),o=a("7387"),l=a("3925"),d=a("bc3a"),c=a.n(d);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v={name:"NewRequest",components:{WidgetsDropdown:i["a"],AllPopups:o["a"],CreateNewLead:l["a"]},data:function(){return{items:[],deleteStudentId:"",formOverlay:!0}},computed:u({},Object(r["b"])(["getUser"])),methods:{getStudent:function(){var e=this;e.formOverlay=!0;var t="";t="Sales Agent"==e.getUser.type?"https://admin.agentmis.com/api/sales-agent/rejected-leads":"Call Center Agent"==e.getUser.type?"https://admin.agentmis.com/api/call-agent/rejected-leads":"https://admin.agentmis.com/api/admin/rejected-leads",c.a.get(t).then((function(t){e.items=t.data.data,e.formOverlay=!1})).catch((function(t){e.formOverlay=!1}))},setStudent:function(e){this.$store.commit("SET_CURRENT_STUDENT",e)},currentStudent:function(e){this.$store.commit("SET_CURRENT_STUDENT",e)},changeStatus:function(e){var t=this,a=this,n="";n="admin"==a.getUser.type?"https://admin.agentmis.com/api/admin/status/"+e.id:"https://admin.agentmis.com/api/sales-agent/status/"+e.id,c.a.post(n,{status:e.status}).then((function(e){a.$toast.success(e.data.message,{position:"top-right",closeButton:"button",icon:!0,rtl:!1}),a.getStudent()})).catch((function(e){e&&t.$toast.error(e,{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}))}},mounted:function(){this.getStudent()}},f=v,g=(a("1be6"),a("2877")),h=Object(g["a"])(f,n,s,!1,null,null,null);t["default"]=h.exports},"1be6":function(e,t,a){"use strict";a("559c")},3925:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cerate-new-lead-popup position-relative "},[a("b-modal",{ref:"create_lead_modal",attrs:{id:"create-lead-modal",title:"Create New Lead","header-bg-variant":"dark","header-text-variant":"light",centered:"",scrollable:""},scopedSlots:e._u([{key:"default",fn:function(){return[a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form-group",attrs:{id:"myLead"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"agentFirstName"}},[e._v("First Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],attrs:{type:"text",id:"agentFirstName"},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}})])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"last_name"}},[e._v("Last Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],attrs:{type:"text",id:"last_name"},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}})])])]),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"country"}},[e._v("Preferred Country:")]),a("b-form-select",{attrs:{required:"",options:["Austria ","Europe","Canada","Italy","Itly MBBS","Turkey MBBS","UK","USA","Visit Canada","Visit USA"]},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"phone"}},[e._v("Phone Number:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",id:"phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"whatsapp_num"}},[e._v("Whatsapp Number:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.whatsapp_num,expression:"whatsapp_num"}],attrs:{type:"text",required:"",id:"whatsapp_num"},domProps:{value:e.whatsapp_num},on:{input:function(t){t.target.composing||(e.whatsapp_num=t.target.value)}}})]),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"email"}},[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",required:"",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"cv"}},[e._v("Student CV:")]),a("input",{ref:"file",attrs:{type:"file",required:"",id:"cv"},on:{change:function(t){return e.handleCvUpload(t)}}})]),a("div",{staticClass:"form-element"},[a("label",{attrs:{for:"agentFirstName"}},[e._v("Screenshots:")]),a("VueUploadMultipleImage",{attrs:{"data-images":e.uploadedImages,dragText:"drag and drop files here",browseText:"or select",primaryText:"Default",markIsPrimaryText:"Set as default",popupText:"This image will be displayed as default",dropText:"Drop your files here..."},on:{"upload-success":e.uploadImageSuccess,"edit-image":e.editImage,"data-change":e.dataChange}}),a("p",{staticClass:"badge mb-0 text-capitalize text-secondary"},[e._v(" max uplaod limit is 5 ")])],1)])])]},proxy:!0},{key:"modal-footer",fn:function(t){var n=t.hide;return[a("div",[a("div",{staticClass:"row mt-4 mr-2 justify-content-end"},[a("b-button",{ref:"cancel",staticClass:"mr-2",attrs:{variant:"dark",squared:""},on:{click:n}},[e._v("Cancel")]),a("b-button",{attrs:{variant:"success",squared:""},on:{click:e.addLead}},[e._v("Create")])],1)]),a("b-overlay",{staticClass:"overlayModal",attrs:{show:e.formOverlay,"no-wrap":""}})]}}])})],1)},s=[],r=a("fc5c"),i=a("b7df"),o=a("bc3a"),l=a.n(o),d=a("2f62");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={mixins:[i["a"]],data:function(){return{visibleLiveDemo:!1,first_name:"",last_name:"",country:"",email:"",phone:"",whatsapp_num:"",cv:"",screenShot:"",imageList:[],uploadedImages:[],formOverlay:!1}},computed:m({},Object(d["b"])(["getUser"])),components:{VueUploadMultipleImage:r["a"]},methods:{handleCvUpload:function(e){var t=this,a=this,n=e.target.files[0],s=new FileReader;s.readAsDataURL(n),s.onload=function(e){a.cv=e.target.result,console.log(t.cv)}},handleScreenshot:function(e){var t=this,a=this,n=e.target.files[0],s=new FileReader;s.readAsDataURL(n),s.onload=function(e){a.screenShot=e.target.result,console.log(t.screenShot)}},addLead:function(){var e=this,t=this,a="";a="Sales Agent"==t.getUser.type?"https://admin.agentmis.com/api/sales-agent/new-leads":"Call Center Agent"==t.getUser.type?"https://admin.agentmis.com/api/call-agent/new-leads":"https://admin.agentmis.com/api/admin/new-leads";new FormData,document.querySelector("#cv"),document.querySelector(".image-input");this.formOverlay=!0,l.a.post(a,{first_name:t.first_name,last_name:t.last_name,country:t.country,email:t.email,cv:t.cv,screen_shot:t.imageList,whatsapp_num:t.whatsapp_num,phone:t.phone}).then((function(a){e.formOverlay=!1,t.$toast.success(a.data.message,{position:"top-right",closeButton:"button",icon:!0,rtl:!1}),t.first_name="",t.last_name="",t.country="",t.email="",t.phone="",t.whatsapp_num="",t.cv="",t.screenShot="",t.imageList=[],t.$store.commit("SET_All_STUDENT",!0),t.getStudent(),t.$refs.cancel.click()})).catch((function(t){e.formOverlay=!1,t&&e.$toast.error(t.response.data.errors,{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}))},uploadImageSuccess:function(e,t,a){console.log(e,"index:",t,a,"upload success"),this.imageList.push(a[t].path)},editImage:function(e,t,a){console.log(e,"index:",t,a,"edit image")},dataChange:function(e){console.log(e,"dataChange")}}},v=p,f=a("2877"),g=Object(f["a"])(v,n,s,!1,null,null,null);t["a"]=g.exports},"559c":function(e,t,a){},6556:function(e,t,a){"use strict";var n=[{CreateDate:"9-Oct-2021",StudentName:"Student Name",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:null,AssignedTo:"Agent",PhoneNo:"+999-999999-9"},{CreateDate:"9-Oct-2021",StudentName:"Student Name2",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:"Rejected",AssignedTo:"unassigned",PhoneNo:"+999-999999-9"},{CreateDate:"9-Oct-2021",StudentName:"Student Name3",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:"Approved",AssignedTo:"Agent",PhoneNo:"+999-999999-9"},{CreateDate:"9-Oct-2021",StudentName:"Student Name4",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:"On Hold",AssignedTo:"Agent",PhoneNo:"+999-999999-9"},{CreateDate:"9-Oct-2021",StudentName:"Student Name4",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:"Approved",AssignedTo:"unassigned",PhoneNo:"+999-999999-9"},{CreateDate:"9-Oct-2021",StudentName:"Student Name4",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:"Approved",AssignedTo:"Agent",PhoneNo:"+999-999999-9"},{CreateDate:"9-Oct-2021",StudentName:"Student Name4",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:"In Progress",AssignedTo:"Agent",PhoneNo:"+999-999999-9"},{CreateDate:"9-Oct-2021",StudentName:"Student Name4",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:"In Progress",AssignedTo:"Agent",PhoneNo:"+999-999999-9"},{CreateDate:"9-Oct-2021",StudentName:"Student Name4",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:"In Progress",AssignedTo:"Agent",PhoneNo:"+999-999999-9"},{CreateDate:"9-Oct-2021",StudentName:"Student Name4",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:"In Progress",AssignedTo:"Agent",PhoneNo:"+999-999999-9"},{CreateDate:"9-Oct-2021",StudentName:"Student Name4",Email:"student@gmail.com",Whatsapp:"+999-999999-9",PreferredCountry:"USA",Status:"In Progress",AssignedTo:"Agent",PhoneNo:"+999-999999-9"}];t["a"]=n}}]);
//# sourceMappingURL=chunk-6561c204.9056374a.js.map