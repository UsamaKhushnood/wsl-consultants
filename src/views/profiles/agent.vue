<template>
  <div class="agent-profile">
    <div class="row">
      <div class="col-6">
        <div class="d-flex bg-black py-3 px-3 radius-10 text-white">
          <div class="mr-3">
            <b-avatar size="lg">
              {{
                  getAgent.name
                          ? getAgent.name.split(' ').map(function(str) { return str ? str[0].toUpperCase() : " ";}).join('')
                          : "Agent Name"
                  
              }}
            </b-avatar>
          </div>
          <div>
            <h5 class="mb-0"> {{getAgent.name}}</h5>
            <p class="m-0 text-primary text-bold">
              {{ getAgent.type }}
            </p>
            <!-- <p class="m-0 text-success text-bold">Sales Agent</p> -->
          </div>
          <div class="ml-auto align-self-baseline">
            <p v-if="getAgent.created_at">
              Created At:
              <span class="text-bold"> {{ getAgent.created_at }}</span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <!-- warpper  -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="bg-white radius-10 py-3 px-3">
          <h5 class="agent-progress text-black text-bold">Agent's Progress</h5>
          <div class="row">
            <div
              class="col-6"
              v-if="getAgent.type === 'Sales Agent'"
            >
              <h6 class="text-text badge badge-dark f-14">
                {{
                  items.length > 0
                    ? "Total Leads:" + items.length
                    : "No Leads Assgined yet"
                }}
              </h6>
              <CChartPie
                :datasets="salesAgentData"
                :labels="[
                  'New Leads',
                  'In Progress',
                  'On Hold',
                  'Expected',
                  'Not Expected',
                  'Applied',
                  'Rejected',
                ]"
              />
            </div>
            <div class="col-6" v-else>
              <!-- <h6 class="text-text badge badge-success">
                Call Center Agent
              </h6> -->
              <CChartBar :datasets="callCenterAgentData" labels="months" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- warpper  -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="bg-white radius-10 py-3 px-3">
          <h5 class="agent-progress text-black text-bold">
            Agent's Leads
          </h5>
          <CDataTable
            responsive
            :hover="true"
            :striped="true"
            :border="true"
            :fixed="false"
            :items="items"
            columnFilter
            itemsPerPageSelect
            :itemsPerPage="5"
            class="leads-table"
            sorter
            :fields="[
              'first_name',
              'whatsapp_num',
              'phone',
              'country',
              'status',
              {
                key: 'action',
                sorter: false,
                filter: false,
              },
            ]"
            pagination
          >
            <!-- <template #assigned_to="{item}">
              <td>
                <span
                  v-if="item.agent == null"
                  class="badge badge-pill badge-danger"
                >
                  unassigned
                </span>
                <span v-else>
                  {{
                    item.agent == null ? "unassigned" : item.agent.first_name
                  }}
                </span>
              </td>
            </template> -->
            <template #whatsapp_num="{item}">
              <td>
                <a
                  :href="
                    'https://api.whatsapp.com/send?phone=' + item.whatsapp_num
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
                <span
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
                </span>
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
                  <i class="fa fa-eye" v-b-tooltip.hover title="View Form"></i>
                </a>
                <a
                  data-target="#viewAccept"
                  data-toggle="modal"
                  class="btn menu-icon vd_bd-yellow vd_yellow"
                  v-b-modal="'successfully-added-modal' + index"
                  @click="currentStudent(item)"
                >
                  <i class="fa fa-check" v-b-tooltip.hover title="Assign"></i>
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

                <AllPopups :propsindex="index"> </AllPopups>
              </td>
            </template>
          </CDataTable>
        </div>
      </div>
    </div>
    <!-- warpper  -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="bg-white radius-10 py-3 px-3">
          <h5 class="agent-progress text-black text-bold">
            Agent's Login History
          </h5>
          <CDataTable
            :items="history"
            :fields="['day', 'login_time', 'logout_time']"
            itemsPerPageSelect
            :itemsPerPage="itemsPerPage"
            striped
            hover
            sorter
            pagination
          >
          </CDataTable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getSelectedStudentMix } from "@/mixins/getSelectedStudent.js";
import { CChartPie } from "@coreui/vue-chartjs";
import { CChartBar } from "@coreui/vue-chartjs";
import AllPopups from "@/views/new-request-data/AllPopups";
import { mapGetters, mapState } from "vuex";
import axios from "axios";
export default {
  mixins:[getSelectedStudentMix],
  components: { CChartPie, CChartBar, AllPopups },
  data() {
    return {
      items: [],
      deleteStudentId: "",
      currentPage: 1,
      itemsPerPage: 3,
      resultCount: 0,
      history: [],
      salesAgentDataArr: [],
      callCenterAgentDataArr: [],
    };
  },
  computed: {
    ...mapGetters(["getUser", "getAllStudent", "getAgent","getCurrentAgent"]),
    ...mapState(["allStudent", "allStudentData"]), // "getAllStudentData"
    /* eslint-disable */ totalPages: function() {
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
    salesAgentData() {
      return [
        {
          label: "GitHub Commits",
          backgroundColor: [
            "#130f40",
            "#3498db",
            "#e67e22",
            "#8e44ad",
            "#bdc3c7",
            "#27ae60",
            "#c0392b",
          ],
          data: this.salesAgentDataArr,
        },
      ];
    },
    callCenterAgentData() {
      return [
        {
          label: "Total Leads",
          backgroundColor: "#130f40",
          data: this.callCenterAgentDataArr,
        },
      ];
    },
  },

  methods: {
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

          if (errors)
            this.$toast.error(errors.response.data.message, {
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
    getAgentHistory(id) {
      const vm = this;
      // console.log(vm.getAllStudentData);
      axios
        .get(process.env.VUE_APP_API_URL + "/admin/agent-login-history/" + id)
        // .get(process.env.VUE_APP_API_URL +"/admin/agent-login-history/"+vm.getAllStudentData)
        .then((response) => {
          // console.log("data::", response.data.data);
          vm.history = response.data.data;
        })
        .catch((errors) => {
          var err = "";
        });
    },
    getAgentLeads(id) {
      const vm = this;
      axios
        .get(process.env.VUE_APP_API_URL + "/admin/agent-leads/" + id)
        .then((response) => {
          // console.log("data::", response.data.data);
          vm.items = response.data.data;
        })
        .catch((errors) => {
          var err = "";
        });
    },
    getSaleAgentCounts(id) {
      const vm = this;
      axios
        .get(process.env.VUE_APP_API_URL + "/admin/sale-agent-chart/" + id)
        .then((response) => {
          // console.log("salesAgentDataArr::", response.data.data);
          vm.salesAgentDataArr.push(response.data.data.new_lead);
          vm.salesAgentDataArr.push(response.data.data.in_progress);
          vm.salesAgentDataArr.push(response.data.data.on_hold);
          vm.salesAgentDataArr.push(response.data.data.expected);
          vm.salesAgentDataArr.push(response.data.data.not_expected);
          vm.salesAgentDataArr.push(response.data.data.applied);
          vm.salesAgentDataArr.push(response.data.data.rejected);
        })
        .catch((errors) => {
          var err = "";
        });
    },

    getCallAgentCounts(id) {
      const vm = this;
      axios
        .get(process.env.VUE_APP_API_URL + "/admin/call-agent-chart/" + id)
        .then((response) => {
          // console.log("callCenterAgentDataArr::", response.data.data);
            $.each(response.data.data,function(index,data){
            vm.callCenterAgentDataArr.push(data)
          })
        })
        .catch((errors) => {
          var err = "";
        });
    },
  },
  mounted() {
    let vm = this;
    // this.getAgentLeads(id);
  },
  watch: {
    // getAllStudentData: function (val) {
    //   this.getAllStudentData = val
    // },
  },
  created() {
    var id = this.$route.params.id;
    this.$getStudent();
    this.getAgentHistory(id);
    this.getAgentLeads(id);
    this.getSaleAgentCounts(id);
    this.getCallAgentCounts(id);
  },
};
</script>
