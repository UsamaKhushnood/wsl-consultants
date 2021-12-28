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
        <b-button variant="dark" size="sm" @click="changeTime()" class="mt-4"
          >Save Changes</b-button
        >
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 bg-white pt-4">
        <h3 class="text-bold mb-4">Login History</h3>
        <CDataTable
          :items="items"
          :fields="[
            'created_at',
            'first_name',
            'type',
            'login_time',
            'logout_time',
          ]"
          columnFilter
          itemsPerPageSelect
          itemsPerPage="5"
          striped
          hover
          sorter
          pagination
        >
          <template #first_name="{item}">
            <td>
              <p>
                {{ item.first_name }}
              </p>
            </td>
          </template>

          <template #type="{item}">
            <td>
              <p>
                {{ item.type }}
              </p>
            </td>
          </template>
          <template #Department="{item}">
            <td>
              <span
                class="badge badge-pill"
                :class="[
                  item.Department.toLowerCase() == 'call center'
                    ? 'badge-primary'
                    : 'badge-warning',
                ]"
                >{{ item.type }}</span
              >
            </td>
          </template>
        </CDataTable>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      startTime: "08:00:00",
      endTime: "17:00:00",
    };
  },
  methods: {
    changeTime() {
      const vm = this;

      axios
        .post(process.env.VUE_APP_API_URL + "/admin/login-time", {
          login_time: vm.startTime,
          logout_time: vm.endTime,
        })
        .then((response) => {
          // console.log("data::", response.data);
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        })
        .catch((errors) => {
          var err = "";
        
          if (errors)
            this.$toast.error(err, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
        });
    },
    getTime() {
      const vm = this;
      let url = process.env.VUE_APP_API_URL + "/admin/get-time";
      axios
        .get(url)
        .then((response) => {
          // console.log("data::", response.data.data);
          vm.startTime = response.data.data.login_time;
          vm.endTime = response.data.data.logout_time;
        })
        .catch((errors) => {
          var err = "";
        
        });
    },
    getAllLoginList() {
      const vm = this;
      let url = process.env.VUE_APP_API_URL + "/admin/login-history";
      axios
        .get(url)
        .then((response) => {
          // console.log("data::", response.data.data);
          vm.items = response.data.data;
        })
        .catch((errors) => {
          var err = "";
          console.log(errors)
          // if (errors.response.data.message == "Login Time Expire") {
          //   localStorage.setItem("token", null);
          // }
        });
    },
  },
  created() {
    this.getTime();
    this.getAllLoginList();
  },
};
</script>
