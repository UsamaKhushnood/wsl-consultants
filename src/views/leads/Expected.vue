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
                      <CDataTable
                        responsive
                        :hover="true"
                        :striped="true"
                        :border="true"
                        :fixed="false"
                        :items="items"
                        columnFilter
                        itemsPerPageSelect
                        :itemsPerPage="20"
                        class="leads-table"
                        sorter
                        :fields="[
                          'first_name',
                          'whatsapp_num',
                          'phone',
                          'country',
                          'assigned_to',
                          'status',
                          {
                            key: 'Actions',
                            sorter: false,
                          },
                        ]"
                        pagination
                      >
                        <template #assigned_to="{item}">
                          <td>
                            <span
                              v-if="item.agent == null"
                              class="badge badge-pill badge-danger"
                            >
                              unassigned
                            </span>
                            <span v-else>
                              {{
                                item.agent == null
                                  ? "unassigned"
                                  : item.agent.first_name
                              }}
                            </span>
                          </td>
                        </template>
                        <template #whatsapp_num="{item}">
                          <td>
                            <a
                              :href="
                                'https://api.whatsapp.com/send?phone=' +
                                  item.whatsapp_num
                              "
                              target="_blank"
                              v-b-tooltip.hover
                              title="Click To Open Whatsapp"
                            >
                              {{ item.whatsapp_num }}
                            </a>
                          </td>
                        </template>

                        <template #StudentName="{item}">
                          <td>
                            <p>
                              {{ item.first_name + item.last_name }}
                            </p>
                          </td>
                        </template>

                        <template #PreferredCountry="{item}">
                          <td>
                            <p>
                              {{ item.country }}
                            </p>
                          </td>
                        </template>
                        <template #phone="{item}">
                          <td>
                            <a
                              :href="'tel:' + item.phone"
                              v-b-tooltip.hover
                              title="Click To Make Phone Call"
                            >
                              {{ item.phone }}
                            </a>
                          </td>
                        </template>
                        <template #status="{item}">
                          <td class="status text-center">
                            <!-- new is the default status  -->
                            <b-form-select
                              size="sm"
                              @change="changeStatus(item)"
                              v-model="item.status"
                              :options="[
                                'New Lead',
                                'In Progress',
                                'Expected',
                                'Not Expected',
                                'Appllied',
                                'On Hold',
                                'Rejected',
                              ]"
                            ></b-form-select>
                            <!-- <span
                              class="badge badge-pill"
                              :class="[
                                item.status == 'In Progress'
                                  ? 'badge-success'
                                  : item.status == 'New Lead'
                                  ? 'badge-info'
                                  : item.status == 'On Hold'
                                  ? 'badge-warning'
                                  : item.status == 'Expected'
                                  ? 'badge-dark'
                                  : item.status == 'Applied'
                                  ? 'badge-success'
                                  : item.status == 'Not Expected' ||
                                    item.status == 'Rejected'
                                  ? 'badge-danger'
                                  : 'badge-warning',
                              ]"
                            >
                              {{ item.status }}
                            </span> -->
                          </td>
                        </template>
                        <template #Actions="{index,item}">
                          <td class="menu-action">
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-green vd_green"
                              v-b-toggle="'view-details-sidebar' + index"
                              @click="currentStudent(item)"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View Form"
                              ></i>
                            </a>
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              v-b-modal="'successfully-added-modal' + index"
                              @click="currentStudent(item)"
                            >
                              <i
                                class="fa fa-check"
                                v-b-tooltip.hover
                                title="Assign"
                              ></i>
                            </a>

                            <a
                              class="btn edit-icon menu-icon  vd_bd-black vd_bd-black "
                              v-b-modal="'edit-lead-modal' + index"
                              :item="item.id"
                              @click="setStudent(item)"
                            >
                              <i
                                v-b-tooltip.hover
                                title="Edit Lead"
                                class="fa fa-pen"
                              ></i>
                            </a>
                            <a
                              data-target="#denyRequest"
                              data-toggle="modal"
                              class="btn edit-icon menu-icon  vd_bd-black vd_bd-black "
                              v-b-modal="'add-note-modal' + index"
                              :item="item.id"
                              @click="setStudent(item)"
                            >
                              <i
                                v-b-tooltip.hover
                                title="Add Note"
                                class="fa fa-book"
                              ></i>
                            </a>
                            <a
                              data-target="#denyRequest"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'deny-request-modal' + index"
                              :item="item.id"
                              v-if="getUser.type == 'admin'"
                            >
                              <i
                                v-b-tooltip.hover
                                title="Delete"
                                @click="setStudent(item.id)"
                                class="fa fa-trash"
                              ></i>
                            </a>
                            <!-- <a
                              data-target="#holdRequest"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'hold-request-modal' + index"
                            >
                              <i
                                class="fa fa-pause"
                                v-b-tooltip.hover
                                title="Hold"
                              ></i>
                            </a> -->
                            <AllPopups :propsindex="index"> </AllPopups>
                          </td>
                        </template>
                      </CDataTable>
                      <b-overlay :show="formOverlay" no-wrap class="overlayModal">
                     </b-overlay>
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
import $ from "jquery";
import "datatables.net-buttons-bs4";
import tableData from "../tableData";
import WidgetsDropdown from "../widgets/WidgetsDropdown";
import AllPopups from "@/views/new-request-data/AllPopups.vue";
import CreateNewLead from "@/views/new-request-data/popups/CreateNewLead.vue";
import axios from "axios";
import { mapGetters, mapState } from "vuex";
export default {
  name: "NewRequest",
  components: { WidgetsDropdown, AllPopups, CreateNewLead },
  data: () => ({
    // items: tableData,
    items: [],
    deleteStudentId: "",
    formOverlay: true,
  }),
  computed: {
    ...mapGetters(["getUser"]),
    ...mapState(["allStudent"]),
  },
  methods: {
    // getStudent() {
    //   const vm = this;
    //   console.log(vm.getUser.type)
    //   let url ='';
    //   if(vm.getUser.type =='Sales Agent'){
    //       url = process.env.VUE_APP_API_URL +"/sales-agent/students";
    //   }else if(vm.getUser.type =='Call Center Agent'){
    //       url = process.env.VUE_APP_API_URL +"/call-agent/students";
    //   }
    //   else{
    //       url = process.env.VUE_APP_API_URL +"/admin/students";
    //   }
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       console.log("data::", response.data.data);
    //       vm.items = response.data.data
    //     })
    //     .catch((errors) => {
    //       var err = "";
    //      console.log('(error.response.status',errors.response.status)
    //       console.log('errors.response.data',errors.response.data.errors)
    //       if(errors.response.status == '401'){
    //         localStorage.setItem('token', null)

    //       }
    //     console.log('errors.response.data',errors.response.data)
    //     if(errors.response.data.message =='Login Time Expire'){
    //       console.log('errors.response.data',errors.response.data.message)
    //       localStorage.setItem('token', null)
    //     }
    //     });
    // },
    getStudent() {
      const vm = this;
      let url = "";
      if (vm.getUser.type == "Sales Agent") {
        url = process.env.VUE_APP_API_URL + "/sales-agent/expected-leads";
      } else if (vm.getUser.type == "Call Center Agent") {
        url = process.env.VUE_APP_API_URL + "/call-agent/expected-leads";
      } else {
        url = process.env.VUE_APP_API_URL + "/admin/expected-leads";
      }
      axios
        .get(url)
        .then((response) => {
          // console.log("data::", response.data.data);
          vm.items = response.data.data;
          vm.formOverlay = false
        })
        .catch((errors) => {
          var err = "";
          vm.formOverlay = false
          console.log("(error.response.status", error.response.status);
          console.log("errors.response.data", errors.response.data.errors);

          // if (errors.response.data.message == "Login Time Expire") {
          //   console.log("errors.response.data", errors.response.data.message);
          //   localStorage.setItem("token", null);
          // }
        });
    },
    setStudent(data) {
      // this.deleteStudentId = data
      this.$store.commit("SET_CURRENT_STUDENT", data);
    },
    changeStatus(item) {
      const vm = this;
      let url = "";
      if (vm.getUser.type == "admin") {
        url = process.env.VUE_APP_API_URL + "/admin/status/" + item.id;
      } else {
        url = process.env.VUE_APP_API_URL + "/sales-agent/status/" + item.id;
      }
      axios
        .post(url, {
          status: item.status,
        })
        .then((response) => {
          // console.log("data::", response.data);
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          vm.getStudent();
        })
        .catch((errors) => {
          var err = "";
          console.log("(error.response.status", errors.response.status);
          console.log("errors.response.data", errors.response.data.errors);
          console.log("errors.response.data", errors.response.data);
         
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email;
          }
          if (errors.response.data.errors.password) {
            err += errors.response.data.errors.password;
          }

          if (errors)
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
    let vm = this;
    setTimeout(function() {
      vm.getStudent();
    }, 1000);
  },
  watch: {
    allStudent: {
      handler: function(newVal, oldVal) {
      
        let vm = this;
        // this function will trigger when ever the value of `my_state` changes
        if (newVal == true) {
          vm.getStudent();
          vm.$store.commit("SET_All_STUDENT", null);
        }
      },
      deep: true,
    },
  },
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
