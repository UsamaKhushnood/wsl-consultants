(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75cef5c0"],{"647f":function(a,t,e){"use strict";e("aa95")},a53b:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"student-form-page mt-5"},[e("form",{staticClass:"form-group pb-5 position-relative",attrs:{id:"formStudent"}},[e("div",{staticClass:"row bg-white p-5"},[e("div",{staticClass:"col-md-12 mb-4"},[e("div",{staticClass:"d-flex align-items-center"},[a._m(0),a._m(1),a.getUser.id?e("b-button",{staticClass:"w-25 mt-4 ml-auto",attrs:{variant:"success",squared:""},on:{click:function(t){return a.getUrl()}}},[a._v("Copy Url")]):a._e()],1),e("hr")]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"fname"}},[a._v("First Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.first_name,expression:"first_name"}],attrs:{type:"text",id:"fname"},domProps:{value:a.first_name},on:{input:function(t){t.target.composing||(a.first_name=t.target.value)}}})])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"lname"}},[a._v("Last Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.last_name,expression:"last_name"}],attrs:{type:"text",id:"lname"},domProps:{value:a.last_name},on:{input:function(t){t.target.composing||(a.last_name=t.target.value)}}})])]),e("div",{staticClass:"col-md-6 mt-2"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"email"}},[a._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:a.email},on:{input:function(t){t.target.composing||(a.email=t.target.value)}}})])]),e("div",{staticClass:"col-md-6 mt-2"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"phone"}},[a._v("Phone Number")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.phone,expression:"phone"}],attrs:{type:"text",id:"phone"},domProps:{value:a.phone},on:{input:function(t){t.target.composing||(a.phone=t.target.value)}}})])]),e("div",{staticClass:"col-md-6 mt-2"},[e("div",{staticClass:"form-element"},[a._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:a.whatsapp_num,expression:"whatsapp_num"}],attrs:{type:"text",id:"whatsapp"},domProps:{value:a.whatsapp_num},on:{input:function(t){t.target.composing||(a.whatsapp_num=t.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.showWhatsappErr,expression:"showWhatsappErr"}],staticClass:"error-msg text-danger f-12"},[a._v("Whatsapp is required")])])]),e("div",{staticClass:"col-md-6 mt-2"},[e("div",{staticClass:"form-element"},[a._m(3),e("b-form-select",{attrs:{required:"",options:["Austria ","Europe","Canada","Italy","Itly MBBS","Turkey MBBS","UK","USA","Visit Canada","Visit USA"]},model:{value:a.country_name,callback:function(t){a.country_name=t},expression:"country_name"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.showPrefferedCountryErr,expression:"showPrefferedCountryErr"}],staticClass:"error-msg text-danger f-12"},[a._v("Preffered Country is required")])],1)]),a._m(4),e("div",{staticClass:"col-md-6 mt-2"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"qualification"}},[a._v("Qualification")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.qualification,expression:"qualification"}],attrs:{type:"text",id:"qualification"},domProps:{value:a.qualification},on:{input:function(t){t.target.composing||(a.qualification=t.target.value)}}})])]),e("div",{staticClass:"col-md-6 mt-2"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"passing"}},[a._v("Passing year")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.passing,expression:"passing"}],attrs:{type:"text",id:"passing"},domProps:{value:a.passing},on:{input:function(t){t.target.composing||(a.passing=t.target.value)}}})])]),e("div",{staticClass:"col-md-6 mt-2"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"majorSubject"}},[a._v("Major Subject")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.major_sub,expression:"major_sub"}],attrs:{type:"text",id:"majorSubject"},domProps:{value:a.major_sub},on:{input:function(t){t.target.composing||(a.major_sub=t.target.value)}}})])]),e("div",{staticClass:"col-md-6 mt-2"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"cgpa"}},[a._v("CGPA/Percentage")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.cgpa,expression:"cgpa"}],attrs:{type:"text",id:"cgpa"},domProps:{value:a.cgpa},on:{input:function(t){t.target.composing||(a.cgpa=t.target.value)}}})])]),e("div",{staticClass:"col-md-6 mt-2"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"occupation"}},[a._v("Occupation")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.occupation,expression:"occupation"}],attrs:{type:"text",id:"occupation"},domProps:{value:a.occupation},on:{input:function(t){t.target.composing||(a.occupation=t.target.value)}}})])]),e("div",{staticClass:"col-md-6 mt-2"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"city"}},[a._v("City")]),e("b-form-select",{attrs:{id:"city",options:a.cities_options},model:{value:a.city_name,callback:function(t){a.city_name=t},expression:"city_name"}})],1)]),a._m(5),e("div",{staticClass:"col-md-12 mt-2"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"cv"}},[a._v("Upload your CV")]),e("input",{attrs:{type:"file",id:"cv",name:"test",accept:".pdf,.doc"},on:{change:function(t){return a.changeBtnStatus()}}})])]),e("div",{staticClass:"col-md-12 mt-3"},[e("div",{staticClass:"form-element"},[e("label",{attrs:{for:"query"}},[a._v("Any Query")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.question,expression:"question"}],attrs:{type:"textarea",id:"query",rows:"6"},domProps:{value:a.question},on:{input:function(t){t.target.composing||(a.question=t.target.value)}}})])]),e("div",{staticClass:"col-md-12"},[e("b-button",{staticClass:"w-25 mt-4 ml-auto d-block",attrs:{variant:"success",squared:""},on:{click:function(t){return a.addStudent()}}},[a._v("Submit")])],1)]),e("b-overlay",{staticClass:"overlayModal",attrs:{show:a.formOverlay,"no-wrap":""}})],1)])},n=[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"mr-3"},[r("img",{attrs:{src:e("cf05"),width:"80"}})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("h3",{staticClass:"mb-0"},[a._v("Student Assessment Form")]),e("p",{staticClass:"mb-0"},[a._v("Fill out the form carefully for registration")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("label",{attrs:{for:"whatsapp"}},[a._v("Whatsapp Number "),e("span",{staticClass:"text-danger"},[a._v("*")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("label",{attrs:{for:"preferredCountry"}},[a._v("Preffered Country "),e("span",{staticClass:"text-danger"},[a._v("*")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"col-12 mt-3 mb-0"},[e("hr")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"col-12 mt-3 mb-0"},[e("hr")])}],i=e("bc3a"),o=e.n(i),s=e("2f62"),l=["Abbottabad","Adezai","Ali Bandar","Amir Chah","Attock","Ayubia","Bahawalpur","Baden","Bagh","Bahawalnagar","Burewala","Banda Daud Shah","Bannu district|Bannu","Batagram","Bazdar","Bela","Bellpat","Bhag","Bhakkar","Bhalwal","Bhimber","Birote","Buner","Burj","Chiniot","Chachro","Chagai","Chah Sandan","Chailianwala","Chakdara","Chakku","Chakwal","Chaman","Charsadda","Chhatr","Chichawatni","Chitral","Dadu","Dera Ghazi Khan","Dera Ismail Khan","Dalbandin","Dargai","Darya Khan","Daska","Dera Bugti","Dhana Sar","Digri","Dina City|Dina","Dinga",", Pakistan|Diplo","Diwana","Dokri","Drosh","Duki","Dushi","Duzab","Faisalabad","Fateh Jang","Ghotki","Gwadar","Gujranwala","Gujrat","Gadra","Gajar","Gandava","Garhi Khairo","Garruck","Ghakhar Mandi","Ghanian","Ghauspur","Ghazluna","Girdan","Gulistan","Gwash","Hyderabad","Hala","Haripur","Hab Chauki","Hafizabad","Hameedabad","Hangu","Harnai","Hasilpur","Haveli Lakha","Hinglaj","Hoshab","Islamabad","Islamkot","Ispikan","Jacobabad","Jamshoro","Jhang","Jhelum","Jamesabad","Jampur","Janghar","Jati(Mughalbhin)","Jauharabad","Jhal","Jhal Jhao","Jhatpat","Jhudo","Jiwani","Jungshahi","Karachi","Kotri","Kalam","Kalandi","Kalat","Kamalia","Kamararod","Kamber","Kamokey","Kanak","Kandi","Kandiaro","Kanpur","Kapip","Kappar","Karak City","Karodi","Kashmor","Kasur","Katuri","Keti Bandar","Khairpur","Khanaspur","Khanewal","Kharan","kharian","Khokhropur","Khora","Khushab","Khuzdar","Kikki","Klupro","Kohan","Kohat","Kohistan","Kohlu","Korak","Korangi","Kot Sarae","Kotli","Lahore","Larkana","Lahri","Lakki Marwat","Lasbela","Latamber","Layyah","Leiah","Liari","Lodhran","Loralai","Lower Dir","Shadan Lund","Multan","Mandi Bahauddin","Mansehra","Mian Chanu","Mirpur",", Pakistan|Moro","Mardan","Mach","Madyan","Malakand","Mand","Manguchar","Mashki Chah","Maslti","Mastuj","Mastung","Mathi","Matiari","Mehar","Mekhtar","Merui","Mianwali","Mianez","Mirpur Batoro","Mirpur Khas","Mirpur Sakro","Mithi","Mongora","Murgha Kibzai","Muridke","Musa Khel Bazar","Muzaffar Garh","Muzaffarabad","Nawabshah","Nazimabad","Nowshera","Nagar Parkar","Nagha Kalat","Nal","Naokot","Nasirabad","Nauroz Kalat","Naushara","Nur Gamma","Nushki","Nuttal","Okara","Ormara","Peshawar","Panjgur","Pasni City","Paharpur","Palantuk","Pendoo","Piharak","Pirmahal","Pishin","Plandri","Pokran","Pounch","Quetta","Qambar","Qamruddin Karez","Qazi Ahmad","Qila Abdullah","Qila Ladgasht","Qila Safed","Qila Saifullah","Rawalpindi","Rabwah","Rahim Yar Khan","Rajan Pur","Rakhni","Ranipur","Ratodero","Rawalakot","Renala Khurd","Robat Thana","Rodkhan","Rohri","Sialkot","Sadiqabad","Safdar Abad- (Dhaban Singh)","Sahiwal","Saidu Sharif","Saindak","Sakrand","Sanjawi","Sargodha","Saruna","Shabaz Kalat","Shadadkhot","Shahbandar","Shahpur","Shahpur Chakar","Shakargarh","Shangla","Sharam Jogizai","Sheikhupura","Shikarpur","Shingar","Shorap","Sibi","Sohawa","Sonmiani","Sooianwala","Spezand","Spintangi","Sui","Sujawal","Sukkur","Suntsar","Surab","Swabi","Swat","Tando Adam","Tando Bago","Tangi","Tank City","Tar Ahamd Rind","Thalo","Thatta","Toba Tek Singh","Tordher","Tujal","Tump","Turbat","Umarao","Umarkot","Upper Dir","Uthal","Vehari","Veirwaro","Vitakri","Wadh","Wah Cantt","Warah","Washap","Wasjuk","Wazirabad","Yakmach","Zhob","Other"],u=l,c=e("b7df");function d(a){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d(a)}function p(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function m(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){h(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function h(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var f={name:"StudentForm",mixins:[c["a"]],data:function(){var a;return a={showWhatsappErr:!1,showPrefferedCountryErr:!1,selected:null,showBtn:!1,fileRecords:"",uploadUrl:"",uploadHeaders:{"X-Test-Header":"vue-file-agent"},fileRecordsForUpload:[],first_name:null,last_name:null,email:null,phone:null,whatsapp_num:null,qualification:null,passing:null,cgpa:null},h(a,"passing",null),h(a,"major_sub",null),h(a,"occupation",null),h(a,"question",null),h(a,"cities",null),h(a,"countries",null),h(a,"country_name",null),h(a,"city_name",null),h(a,"options",[]),h(a,"cities_options",[]),h(a,"formOverlay",!1),h(a,"uploadHeaders",{"X-Test-Header":"vue-file-agent"}),a},computed:m({},Object(s["b"])(["getUser"])),methods:{trigger:function(){this.$refs.sendReq.click()},changeBtnStatus:function(){this.showBtn=!0},resetfeilds:function(){var a=this;a.first_name=null,a.last_name=null,a.country=null,a.qualification=null,a.cgpa=null,a.major_sub=null,a.passing=null,a.occupation=null,a.question=null,a.country=null,a.city=null,a.email=null,a.cv=null,a.whatsapp_num=null,a.phone=null,a.showWhatsappErr=!1,a.showPrefferedCountryErr=!1},addStudent:function(){var a=this,t="";a.showWhatsappErr=!1,a.showPrefferedCountryErr=!1;var e=[];if((null!=a.whatsapp_num?""===a.whatsapp_num.trim():null===a.whatsapp_num)&&(a.showWhatsappErr=!0,e.push("Whatsapp is Required"),console.log(e)),(a.country_name?""===a.country_name.trim():null===a.country_name)&&(a.showPrefferedCountryErr=!0,e.push("Prefferred Country is Required")),e.length>0)return console.log("validate form please"),void e.forEach((function(t){a.$toast.error(t,{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}));a.formOverlay=!0,t=a.getUser.type?"admin"==a.getUser.type?"https://admin.agentmis.com/api/admin/students":"https://admin.agentmis.com/api/call-agent/students":"https://admin.agentmis.com/api/students";var r=new FormData,n=document.querySelector("#cv");r.append("first_name",a.first_name),r.append("last_name",a.last_name),r.append("qualification",a.qualification),r.append("cgpa",a.cgpa),r.append("major_sub",a.major_sub),r.append("passing_year",a.passing),r.append("occupation",a.occupation),r.append("question",a.question),r.append("country",a.country_name),r.append("city",a.city_name),r.append("email",a.email),r.append("whatsapp_num",a.whatsapp_num),r.append("phone",a.phone),r.append("call_agent_id",this.$route.query.call_agent_id?atob(this.$route.query.call_agent_id):a.getUser.id),"undefined"!=typeof n.files[0]&&(console.log(d(n.files[0])),r.append("cv",n.files?n.files[0]:"")),o.a.post(t,r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){a.formOverlay=!1,a.BtnStatus=!1,a.getStudent(),a.$toast.success("Add Student Successfully",{position:"top-right",closeButton:"button",icon:!0,rtl:!1}),a.resetfeilds(),a.$refs.formStudent.reset()})).catch((function(t){a.formOverlay=!1,t.response&&a.$toast.error(t.response.data.message,{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}))},sendTo:function(a){window.open(a,"_blank")},getUrl:function(){var a=this,t="".concat("https://agentmis.com/form?call_agent_id="+btoa(this.getUser.id));navigator.clipboard.writeText(t).then((function(){a.isModalVisible=!1,a.$toast.success("Successfully Copied",{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}),(function(){a.isModalVisible=!1,a.$toast.error("Something went wrong",{position:"top-right",closeButton:"button",icon:!0,rtl:!1})}))},handleCvUpload:function(a){var t=this,e=this,r=a.target.files[0],n=new FileReader;n.readAsDataURL(r),n.onload=function(a){e.fileRecords=a.target.result,console.log(t.fileRecords)}},uploadFiles:function(){this.$refs.vueFileAgent.upload(this.uploadUrl,this.uploadHeaders,this.fileRecordsForUpload),this.fileRecordsForUpload=[]},deleteUploadedFile:function(a){this.$refs.vueFileAgent.deleteUpload(this.uploadUrl,this.uploadHeaders,a)},filesSelected:function(a){var t=a.filter((function(a){return!a.error}));this.fileRecordsForUpload=this.fileRecordsForUpload.concat(t)},onBeforeDelete:function(a){var t=this.fileRecordsForUpload.indexOf(a);if(-1!==t){this.fileRecordsForUpload.splice(t,1);var e=this.fileRecords.indexOf(a);-1!==e&&this.fileRecords.splice(e,1)}else confirm("Are you sure you want to delete?")&&this.$refs.vueFileAgent.deleteFileRecord(a)},fileDeleted:function(a){var t=this.fileRecordsForUpload.indexOf(a);-1!==t?this.fileRecordsForUpload.splice(t,1):this.deleteUploadedFile(a)}},created:function(){this.cities_options=u}},g=f,v=(e("647f"),e("2877")),b=Object(v["a"])(g,r,n,!1,null,null,null);t["default"]=b.exports},aa95:function(a,t,e){},b7df:function(a,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e("2f62"),n=e("bc3a"),i=e.n(n);function o(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function s(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){l(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function l(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var u={computed:s({},Object(r["b"])(["getSelectedStudent","getUser"])),data:function(){return{selectedStudentMix:""}},methods:{getStudent:function(){var a=this;console.log(a.getUser.type);var t="";t="Sales Agent"==a.getUser.type?"https://admin.agentmis.com/api/sales-agent/students":"Call Center Agent"==a.getUser.type?"https://admin.agentmis.com/api/call-agent/students":"https://admin.agentmis.com/api/admin/students",i.a.get(t).then((function(t){console.log("data::",t.data.data),a.$store.commit("SET_ITEMS",t.data.data),a.getLeadCounts()})).catch((function(a){console.log("(error.response.status",error.response.status),console.log("errors.response.data",a.response.data.errors)}))},getLeadCounts:function(){var a=this;console.log(a.getUser.type);var t="";t="https://admin.agentmis.com/api/count-leads",i.a.get(t).then((function(t){console.log("data::",t.data.data),a.$store.commit("SET_LEADS",t.data.data),a.formOverlay=!1})).catch((function(a){console.log("(error.response.status",error.response.status),console.log("errors.response.data",a.response.data.errors)}))}},mounted:function(){},created:function(){}}},cf05:function(a,t,e){a.exports=e.p+"img/logo.cfcafe70.png"}}]);
//# sourceMappingURL=chunk-75cef5c0.96d61d57.js.map