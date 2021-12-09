<template>
  <div class="login-logout-settings">
    <div class="row">
      <div class="col-12">
        <h3>Set Login/Logout Time</h3>
      </div>
      <div class="col-3">
        <label for="">Start Time</label>
        <b-form-timepicker v-model="startTime" locale="en"></b-form-timepicker>
      </div>
      <div class="col-3">
        <label for="">End Time</label>
        <b-form-timepicker v-model="endTime" locale="en"></b-form-timepicker>
      </div>
      <div class="col-12">
        <b-button variant="dark" size="sm" @click="changeTime()" class="mt-4">Save Changes</b-button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 bg-white pt-4">
        <h3 class="text-bold mb-4">Login History</h3>
        <CDataTable
          :items="[
            {
              LoginTime: '8:00 AM',
              LogoutTime: '5:00 PM',
              AgentName: ' Agent Name',
              Date: '12-12-2021',
              Department: 'Call Center',
            },
            {
              LoginTime: '8:00 AM',
              LogoutTime: '5:00 PM',
              AgentName: ' Agent Name',
              Date: '12-12-2021',
              Department: 'Sales Team',
            },
            {
              LoginTime: '8:00 AM',
              LogoutTime: '5:00 PM',
              AgentName: ' Agent Name',
              Date: '12-12-2021',
              Department: 'Sales Team',
            },
            {
              LoginTime: '8:00 AM',
              LogoutTime: '5:00 PM',
              AgentName: ' Agent Name',
              Date: '12-12-2021',
              Department: 'Call Center',
            },
            {
              LoginTime: '8:00 AM',
              LogoutTime: '5:00 PM',
              AgentName: ' Agent Name',
              Date: '12-12-2021',
              Department: 'Call Center',
            },
            {
              LoginTime: '8:00 AM',
              LogoutTime: '5:00 PM',
              AgentName: ' Agent Name',
              Date: '12-12-2021',
              Department: 'Call Center',
            },
            {
              LoginTime: '8:00 AM',
              LogoutTime: '5:00 PM',
              AgentName: ' Agent Name',
              Date: '12-12-2021',
              Department: 'Call Center',
            },
            {
              LoginTime: '8:00 AM',
              LogoutTime: '5:00 PM',
              AgentName: ' Agent Name',
              Date: '12-12-2021',
              Department: 'Call Center',
            },
          ]"
          :fields="[
            'Date',
            'AgentName',
            'Department',
            'LoginTime',
            'LogoutTime',
          ]"
          columnFilter
          itemsPerPageSelect
          itemsPerPage="5"
          striped
          hover
          sorter
          pagination
        >
          <template #Department="{item}">
            <td>
              <span
                class="badge badge-pill"
                :class="[
                  item.Department.toLowerCase() == 'call center'
                    ? 'badge-primary'
                    : 'badge-warning',
                ]"
                >{{ item.Department }}</span
              >
            </td>
          </template>
        </CDataTable>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      startTime: "08:00:00",
      endTime: "17:00:00",
    };
  },
  methods:{
    changeTime() {
      const vm = this;

      axios
        .post(process.env.VUE_APP_API_URL +"/admin/login-time",{
          login_time: vm.startTime,
          logout_time: vm.endTime,
          })
        .then((response) => {
          console.log("data::", response.data);
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
        })
        .catch((errors) => {
        var err =''
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
  }
};
</script>
