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
                        :items="getAllStudentData"
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
                            key: 'action',
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
                        <template #PreferredCountry="{item}">
                          <td>
                            <p>
                              {{ item.country }}
                            </p>
                          </td>
                        </template>
                        <template #PhoneNo="{item}">
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
                                'Applied',
                                'On Hold',
                                'Rejected',
                              ]"
                            ></b-form-select>
                            <!-- <span
                              class="badge badge-pill"
                              :class="[
                                item.status == 'In Progress' ||
                                item.status == 'Rejected' ||
                                item.status == 'New Lead' ||
                                item.status == 'On Hold'
                                  ? 'badge-info'
                                  : item.status == 'Expected' ||
                                    item.status == 'Approved'
                                  ? 'badge-success'
                                  : item.status == 'Not Expected'
                                  ? 'badge-danger'
                                  : 'badge-warning',
                              ]"
                            >
                              {{ item.status }}
                            </span> -->
                          </td>
                        </template>
                        <template #action="{index,item}">
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
                                class="fa fa-pen"
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
                                @click="setStudent(item)"
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
                          <!-- <button v-for="pageNumber in items" :key="pageNumber" class="w3-button" v-bind:key="pageNumber" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }} </button> -->
                        </template>
                      </CDataTable>
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
    currentPage: 1,
    itemsPerPage: 3,
    resultCount: 0,
  }),
  computed: {
    ...mapGetters(["getUser", "getAllStudent", "getAllStudentData"]),
    ...mapState(["allStudent"]),
    /* eslint-disable */
    totalPages: function() {
      if (this.resultCount == 0) {
        return 1;
      } else {
        return Math.ceil(this.resultCount / this.itemsPerPage);
      }
    },
    /* eslint-disable */
    paginate: function() {
      if (!this.articles || this.articles.length != this.articles.length) {
        return;
      }
      this.resultCount = this.articles.length;
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages;
      }
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
      return this.articles.slice(index, index + this.itemsPerPage);
    },
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
    setPage: function(pageNumber) {
      this.currentPage = pageNumber;
    },

    setStudent(data) {
      // this.deleteStudentId = data
      this.$store.commit("SET_CURRENT_STUDENT", null);
      this.$store.commit("SET_CURRENT_STUDENT", data);
    },
    changeStatus(item) {
      const vm = this;
      console.log(item.status);
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
          console.log("data::", response.data);
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          vm.$getStudent();
        })
        .catch((errors) => {
          var err = "";
          console.log("(error.response.status", errors.response.status);
          console.log("errors.response.data", errors.response.data.errors);
          console.log("errors.response.data", errors.response.data);
          if (errors.response.data.message == "Login Time Expire") {
            console.log("errors.response.data", errors.response.data.message);
            localStorage.setItem("token", null);
          }
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
  },
  created() {
    this.$getStudent();
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
<style lang="css">
.current {
  color: teal;
}
</style>
