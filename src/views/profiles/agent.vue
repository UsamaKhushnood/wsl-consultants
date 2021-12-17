<template>
  <div class="agent-profile">
    <div class="row">
      <div class="col-6">
        <div class="d-flex bg-black py-3 px-3 radius-10 text-white">
          <div class="mr-3">
            <b-avatar size="lg">
              <!-- {{
              i.first_name
                .split(" ")
                .map((i) => i.charAt(0))
                .join("")                        
                .toUpperCase()
            }} -->
              AN
            </b-avatar>
          </div>
          <div>
            <h5 class="mb-0">Agent Name</h5>
            <p class="m-0 text-primary text-bold">
              Call Center Agent
            </p>
            <!-- <p class="m-0 text-success text-bold">Sales Agent</p> -->
          </div>
          <div class="ml-auto align-self-baseline">
            <p>Created At: <span class="text-bold"> 12-Dec-2021</span></p>
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
            <div class="col-6">
              <h6 class="text-text badge badge-success">
                For Sales Agent
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
            <div class="col-6">
              <h6 class="text-text badge badge-success">
                For Call Center Agent
              </h6>
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
            :items="[...allStudentData]"
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
                <span
                  class="badge badge-pill"
                  :class="[
                    item.status == 'In Progress' || item.status == 'New Lead'
                      ? 'badge-info'
                      : item.status == 'On Hold'
                      ? 'badge-warning'
                      : item.status == 'Expected' || item.status == 'Applied'
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
            :items="[
              { Day: 'Monday', LoginTime: '8:00AM', LogoutTime: '4:00PM' },
              { Day: 'Tuesday', LoginTime: '8:00AM', LogoutTime: '4:00PM' },
              {
                Day: 'Wednesday',
                LoginTime: '8:00AM',
                LogoutTime: '4:00PM',
              },
              {
                Day: 'Thursday',
                LoginTime: '8:00AM',
                LogoutTime: '4:00PM',
              },
              { Day: 'Friday', LoginTime: '8:00AM', LogoutTime: '4:00PM' },
              {
                Day: 'Saturday',
                LoginTime: '8:00AM',
                LogoutTime: '4:00PM',
              },
              { Day: 'Sunday', LoginTime: '8:00AM', LogoutTime: '4:00PM' },
            ]"
            :fields="['Day', 'LoginTime', 'LogoutTime']"
            itemsPerPageSelect
            itemsPerPage="7"
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
import { CChartPie } from "@coreui/vue-chartjs";
import { CChartBar } from "@coreui/vue-chartjs";
import AllPopups from "@/views/new-request-data/AllPopups";
import { mapGetters, mapState } from "vuex";
export default {
  components: { CChartPie, CChartBar, AllPopups },
  data() {
    return {
      items: [],
      deleteStudentId: "",
      currentPage: 1,
      itemsPerPage: 3,
      resultCount: 0,
    };
  },
  computed: {
    ...mapGetters(["getUser", "getAllStudent", "getAllStudentData"]),
    ...mapState(["allStudent", "allStudentData"]),
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
          data: [10, 25, 15, 5, 2, 10, 1],
        },
      ];
    },
    callCenterAgentData() {
      return [
        {
          label: "Total Leads",
          backgroundColor: "#130f40",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 54],
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
          // if (errors.response.data.message == "Login Time Expire") {
          //   console.log("errors.response.data", errors.response.data.message);
          //   localStorage.setItem("token", null);
          // }
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
  watch: {
    // getAllStudentData: function (val) {
    //   this.getAllStudentData = val
    // },
  },
  created() {
    this.$getStudent();
  },
};
</script>
