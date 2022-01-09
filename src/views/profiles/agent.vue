<template>
  <div class="agent-profile">
    <div class="row">
      <div class="col-6">
        <div class="d-flex bg-black py-3 px-3 radius-10 text-white">
          <div class="mr-3">
            <b-avatar size="lg">
              {{
                getAgent.name
                  ? getAgent.name
                      .split(' ')
                      .map(function(str) {
                        return str ? str[0].toUpperCase() : ' '
                      })
                      .join('')
                  : 'Agent Name'
              }}
            </b-avatar>
          </div>
          <div>
            <h5 class="mb-0">{{ getAgent.name }}</h5>
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
        <div class="bg-white radius-10 py-3 px-3 position-relative">
          <div class="d-flex align-items-center ">
            <h5 class="agent-progress text-black text-bold">
              Agent's Progress
            </h5>
            <b-button-group size="sm" class="ml-auto">
              <b-button class="bg-gradient-primary" @click="filterBy('yesterday')">Yesterday</b-button>
              <b-button class="bg-danger" @click=" filterBy('weekly')">Weekly</b-button>
              <b-button class="bg-black-active"  @click="filterBy('monthly')">Monthly</b-button>
              <b-button
                class="ml-1 bg-xing"
                @click="showDatePicker = !showDatePicker"
              >
                {{ showDatePicker ? 'Close' : 'Open' }} Date Picker</b-button
              >
            </b-button-group>
          </div>
          <div class="row">
            <div class="col-6" v-if="getAgent.type === 'Sales Agent'">
              <h6 class="text-text badge badge-dark f-14">
                {{
                  items.length > 0
                    ? 'Total Leads:' + items.length
                    : 'No Leads Assgined yet'
                }}
              </h6>
              <CChartPie
              v-if="items.length > 0"
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
            <div class="col-6">
              <div class="datePicker position-relative" v-show="showDatePicker">
                <div class="closeBtn" @click="showDatePicker = false">
                  <b-icon icon="x"></b-icon>
                </div>
                <DatePicker
                  v-model="range"
                  :model-config="modelConfig"
                  @input="eventOnDate"
              
                  title-position="right"
                  color="red"
                  is-dark
                  is-range
                />
              </div>
            </div>
          </div>
          <div class="showResults">
            <h6>
              <span class="resultLable"> Showing Results from:</span>
              <span style="color: #1f1498">{{ range.start }} </span>
              <span style="margin: 0 15px;">to</span>
              <span style="color:#036466">{{ range.end }}</span>
            </h6>
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
            :itemsPerPage="20"
            class="leads-table"
            sorter
            :fields="[
              {
                key: 'sr',
                sorter: false,
                filter: false,
                _style: 'width:50px',
                label: 'Sr#',
              },
              'created_at',
              'whatsapp_num',
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
            <template #sr="{index}">
              <td class="text-center">
                <p class="mb-0">{{ index + 1 }}</p>
              </td>
            </template>
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
import { getSelectedStudentMix } from '@/mixins/getSelectedStudent.js'
import { CChartPie } from '@coreui/vue-chartjs'
import { CChartBar } from '@coreui/vue-chartjs'
import AllPopups from '@/views/new-request-data/AllPopups'
import { mapGetters, mapState } from 'vuex'
import axios from 'axios'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import Vue from "vue";
import moment from "moment";


export default {
  mixins: [getSelectedStudentMix],
  components: { CChartPie, CChartBar, AllPopups, DatePicker },
  data() {
    return {
      moment: moment,
      filterByRange: false,
      showDatePicker: true,
      items: [],
      deleteStudentId: '',
      currentPage: 1,
      itemsPerPage: 3,
      resultCount: 0,
      history: [],
      salesAgentDataArr: [],
      callCenterAgentDataArr: [],
      range: {
        start: '04-Jan-2022',
        end: '21-Jan-2022',
      },
      modelConfig: {
        type: 'string',
        mask: 'DD-MMM-YYYY', // Uses 'iso' if missing
      },
    }
  },

  computed: {
    ...mapGetters(['getUser', 'getAllStudent', 'getAgent', 'getCurrentAgent']),
    ...mapState(['allStudent', 'allStudentData']), // "getAllStudentData"
    /* eslint-disable */ totalPages: function() {
      if (this.resultCount == 0) {
        return 1
      } else {
        return Math.ceil(this.resultCount / this.itemsPerPage)
      }
    },
    /* eslint-disable */
    paginate: function() {
      if (!this.articles || this.articles.length != this.articles.length) {
        return
      }
      this.resultCount = this.articles.length
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages
      }
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
      return this.articles.slice(index, index + this.itemsPerPage)
    },
    salesAgentData() {
      return [
        {
          label: 'GitHub Commits',
          backgroundColor: [
            '#130f40',
            '#3498db',
            '#e67e22',
            '#8e44ad',
            '#bdc3c7',
            '#27ae60',
            '#c0392b',
          ],
          data: this.salesAgentDataArr,
        },
      ]
    },
    callCenterAgentData() {
      return [
        {
          label: 'Total Leads',
          backgroundColor: '#130f40',
          data: this.callCenterAgentDataArr,
        },
      ]
    },
  },

  methods: {
    setPage: function(pageNumber) {
      this.currentPage = pageNumber
    },
    async eventOnDate() {
      let vm = this
   
     let payload = {
        start_date: vm.range.start,
        end_date: vm.range.end,
      }
     
    },

    filterBy(data) {
       const vm = this
      let url = ''

      if(this.filterByRange ===true){
        url = process.env.VUE_APP_API_URL + '/admin/filter/' + vm.getAgent.id+'?start_date='+moment(vm.range.start).format('MM-DD-YYYY')+'&&end_date='+moment(vm.range.end).format("MM-DD-YYYY")
      }else{
        url = process.env.VUE_APP_API_URL + '/admin/filter/' + this.getAgent.id+'?q='+data
      }
       
      axios
        .get(url)
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
          vm.items = []
          vm.items = response.data.data
          if(this.getAgent.type =='Sales Agent'){
            vm.salesAgentDataArr.push(response.data.graph.new_lead)
            vm.salesAgentDataArr.push(response.data.graph.in_progress)
            vm.salesAgentDataArr.push(response.data.graph.on_hold)
            vm.salesAgentDataArr.push(response.data.graph.expected)
            vm.salesAgentDataArr.push(response.data.graph.not_expected)
            vm.salesAgentDataArr.push(response.data.graph.applied)
            vm.salesAgentDataArr.push(response.data.graph.rejected)
          }else{
              vm.callCenterAgentDataArr=[]
            $.each(response.data.graph, function(index, data) {
            vm.callCenterAgentDataArr.push(data)
          })
          }
          vm.filterByRange=false
        })
        .catch((errors) => {
          var err = ''
          if (errors)
          vm.filterByRange=false
          this.$toast.error(errors.response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
      });
      
    },

    setStudent(data) {
      // this.deleteStudentId = data
      this.$store.commit('SET_CURRENT_STUDENT', null)
      this.$store.commit('SET_CURRENT_STUDENT', data)
    },

    changeStatus(item) {
      const vm = this
      let url = ''
      if (vm.getUser.type == 'admin') {
        url = process.env.VUE_APP_API_URL + '/admin/status/' + item.id
      } else {
        url = process.env.VUE_APP_API_URL + '/sales-agent/status/' + item.id
      }
      axios
        .post(url, {
          status: item.status,
        })
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
          vm.getStudent()
        })
        .catch((errors) => {
          var err = ''

            if (errors)
              this.$toast.error(errors.response.data.message, {
                position: 'top-right',
                closeButton: 'button',
                icon: true,
                rtl: false,
        })
      })
    },
    currentStudent(data) {
      this.$store.commit('SET_CURRENT_STUDENT', {})
      this.$store.commit('SET_CURRENT_STUDENT', data)
    },
    getAgentHistory(id) {
      const vm = this
      // console.log(vm.getAllStudentData);
      axios
        .get(process.env.VUE_APP_API_URL + '/admin/agent-login-history/' + id)
        // .get(process.env.VUE_APP_API_URL +"/admin/agent-login-history/"+vm.getAllStudentData)
        .then((response) => {
          // console.log("data::", response.data.data);
          vm.history = response.data.data
        })
        .catch((errors) => {
          var err = ''
        })
    },
    getAgentLeads(id) {
      const vm = this
      axios
        .get(process.env.VUE_APP_API_URL + '/admin/agent-leads/' + id)
        .then((response) => {
          // console.log("data::", response.data.data);
          vm.items = response.data.data
        })
        .catch((errors) => {
          var err = ''
        })
    },
    getSaleAgentCounts(id) {
      const vm = this
      axios
        .get(process.env.VUE_APP_API_URL + '/admin/sale-agent-chart/' + id)
        .then((response) => {
          // console.log("salesAgentDataArr::", response.data.data);
          vm.salesAgentDataArr.push(response.data.data.new_lead)
          vm.salesAgentDataArr.push(response.data.data.in_progress)
          vm.salesAgentDataArr.push(response.data.data.on_hold)
          vm.salesAgentDataArr.push(response.data.data.expected)
          vm.salesAgentDataArr.push(response.data.data.not_expected)
          vm.salesAgentDataArr.push(response.data.data.applied)
          vm.salesAgentDataArr.push(response.data.data.rejected)
        })
        .catch((errors) => {
          var err = ''
        })
    },

    getCallAgentCounts(id) {
      const vm = this
      axios
        .get(process.env.VUE_APP_API_URL + '/admin/call-agent-chart/' + id)
        .then((response) => {
          // console.log("callCenterAgentDataArr::", response.data.data);
          $.each(response.data.data, function(index, data) {
            vm.callCenterAgentDataArr.push(data)
          })
        })
        .catch((errors) => {
          var err = ''
        })
    },
  },
  mounted() {
    let vm = this
    // this.getAgentLeads(id);
  },
  watch: {
    // getAllStudentData: function (val) {
    //   this.getAllStudentData = val
    // },
     range(NewVal,oldVal) {
      // console.log("old", oldVal);
      this.filterByRange=true
      this.filterBy(null)
      // console.log("new", NewVal);
    },
  },
  created() {
    var id = this.$route.params.id
    this.$getStudent()
    this.getAgentHistory(id)
    this.getAgentLeads(id)
    this.getSaleAgentCounts(id)
    this.getCallAgentCounts(id)
  },
}
</script>
<style lang="scss">
.datePicker {
  display: flex;
  justify-content: end;
  margin-top: 10px;
  margin-right: 0px;
  .closeBtn {
    position: absolute;
    top: -3px;
    right: 255px;
    background: #1a202c;
    font-size: 20px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}

.showResults {
  h6 {
    color: #000;
    text-align: right;
    margin-bottom: 0;
    font-size: 18px;
    span.resultLable {
      margin-right: 10px;
      text-decoration: underline;
    }
    span {
      font-weight: 700;
    }
  }
}
</style>
