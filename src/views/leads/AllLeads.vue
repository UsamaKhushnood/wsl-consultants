<template>
  <div id="all-leads-page">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fas fa-cubes"></i> All Leads</h1>
          </div>
        </div>
        <div class="clearfix">
          <div class="row">
            <div class="col-sm-12">
              <button
                class="btn btn-dark btn-sm ml-auto d-block mb-2"
                v-b-modal="'create-lead-modal'"
        
              >
                Create New Lead
              </button>
              <CreateNewLead />
              <div id="Country1">
                <div class="widget">
                  <div class="bg-white">
                    <div id="new-request-tab-c1">
                         <table id="myTable" class="table table-striped table-bordered dt-responsive nowrap display">
                            <thead>
                            <tr>
                              <th>Id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Country</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Whatsapp Number</th>
                              <th>Assigned to</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                         
                            </tbody>

                        </table>
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'datatables.net-buttons-bs4'
  import tableData from "../tableData";
  import WidgetsDropdown from "../widgets/WidgetsDropdown";
  import AllPopups from "@/views/new-request-data/AllPopups.vue";
  import CreateNewLead from "@/views/new-request-data/popups/CreateNewLead.vue";
  import axios from 'axios';
import { mapGetters ,mapState} from 'vuex';
  export default {
    name: "NewRequest",
    components: { WidgetsDropdown, AllPopups, CreateNewLead },
    data: () => ({
      // items: tableData,
      items: [],
      deleteStudentId: '',
    }),
    computed:{
      ...mapGetters(['getUser']),
       ...mapState(['allStudent']),
    },
    methods:{
      getStudent() {
        const vm = this;
        console.log(vm.getUser.type)
        let url ='';
        if(vm.getUser.type =='Sales Agent'){
            url = process.env.VUE_APP_API_URL +"/sales-agent/students";
        }else if(vm.getUser.type =='Call Center Agent'){
            url = process.env.VUE_APP_API_URL +"/call-agent/students";
        }
        else{
            url = process.env.VUE_APP_API_URL +"/admin/students";
        }
        axios
          .get(url)
          .then((response) => {
            console.log("data::", response.data.data);
            vm.items = response.data.data
          })
          .catch((errors) => {
            var err = "";
           console.log('(error.response.status',errors.response.status)
            console.log('errors.response.data',errors.response.data.errors)
            if(errors.response.status == '401'){
              localStorage.setItem('token', null)

            }
          console.log('errors.response.data',errors.response.data)
          if(errors.response.data.message =='Login Time Expire'){
            console.log('errors.response.data',errors.response.data.message)
            localStorage.setItem('token', null)
          }
          });
      },
      setStudent(data) {
        // this.deleteStudentId = data
        this.$store.commit('SET_CURRENT_STUDENT',data)
      },
      changeStatus(item) {
        const vm = this;
        console.log(item.status)
        let url ="";
        if(vm.getUser.type =='admin'){
          url =process.env.VUE_APP_API_URL +"/admin/status/"+item.id;
        }else{
          url =process.env.VUE_APP_API_URL +"/sales-agent/status/"+item.id;
        }
        axios
          .post(url,{
            status: item.status,
            })
          .then((response) => {
            console.log("data::", response.data);
              vm.$toast.success(response.data.message, {
                position: "top-right",
                closeButton: "button",
                icon: true,
                rtl: false,
              });
              vm.getStudent()
          })
          .catch((errors) => {
          var err =''
            console.log('(error.response.status',errors.response.status)
            console.log('errors.response.data',errors.response.data.errors)
          console.log('errors.response.data',errors.response.data)
          if(errors.response.data.message =='Login Time Expire'){
            console.log('errors.response.data',errors.response.data.message)
            localStorage.setItem('token', null)
          }
            if(errors.response.data.errors.email){
              err+=errors.response.data.errors.email
            }
            if(errors.response.data.errors.password){
              err+=errors.response.data.errors.password
            }
          

            if(errors)
            this.$toast.error(err, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          });
    },
    currentStudent(data) {
      this.$store.commit("SET_CURRENT_STUDENT", {});
      this.$store.commit("SET_CURRENT_STUDENT", data);
    },
   
  },
  mounted() {
     let vm = this
    setTimeout(function(){
      vm.getStudent();
    },1000)
    
      $(function () {
        let url="";
        if(vm.getUser.type =='Sales Agent'){
            url = process.env.VUE_APP_API_URL +"/sales-agent/students";
        }else if(vm.getUser.type =='Call Center Agent'){
            url = process.env.VUE_APP_API_URL +"/call-agent/students";
        }
        else{
            url = process.env.VUE_APP_API_URL +"/admin/students";
        }
            // datatable-buttons
            var table = $('#myTable').DataTable({
                processing: true,
                serverSide: true,
                "scrollX": true,
                // dom: 'Bfrtip',
                buttons: [
                    'excel'
                ],
                ajax: {
                    url: url,
                    dataType: "json",
                    type: "GET",
                    paging: true,
                    "beforeSend": function(xhr){
                    xhr.setRequestHeader("Authorization",
                      "Bearer " + localStorage.getItem('token'));
                }
                },
                columns: [
                    {data: 'id'},
                    {data: 'first_name'},
                    {data: 'last_name'},
                    {data: 'country'},
                    {data: 'email'},
                    {data: 'phone'},
                    {data: 'whatsapp_num'},
                    {data: 'assigned_to'},
                    {data: 'status'},
                    {data: 'actions'}
                ],
                // dom: 'lBfrtip',
                // buttons: datatable_buttons,
                ordering: true,
            });
        })
    
  
  },
  watch:{
      allStudent:{
      handler:function(newVal,oldVal){
        console.log(newVal,oldVal)
          let vm = this
        // this function will trigger when ever the value of `my_state` changes
      if(newVal == true){
          vm.getStudent()
          vm.$store.commit("SET_All_STUDENT", null);
        }
      },
      deep:true
    }
    
  }
};
</script>

<style lang="scss">
#newrequest .col-sm-6.p-0.offset-sm-6 {
  padding: 5px 20px !important;
  padding-bottom: 0px !important;
}

.leads-table {
  .col-sm-6.p-0.offset-sm-6 {
    .form-inline.justify-content-sm-end {
      color: #000;
      padding: 10px 10px 0 0;
    }
  }
}
</style>
