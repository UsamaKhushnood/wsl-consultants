<template>
  <div>
    <div class=" mb-4 ">
      <div class="row m-0">
        <div class="col-12 p-4  welcomeCard bg-white ">
          <div class="day">
            <h4>
              {{ getWeekDay }},
              {{ getCurrentMonth + " " + new Date().getDate() }}
            </h4>
            <h1 class="mb-0 Greetings">
              Good {{ getGreetings }}, <br />
              <span class="text-capitalize">
                {{ getUser.first_name + " " + getUser.last_name }}
              </span>
            </h1>
          </div>
        </div>
        <!-- <div class="col-4"></div> -->
      </div>
    </div>
    <WidgetsDropdown
      v-if="getUser.type == 'admin' || getUser.type === 'Sales Agent'"
    />
    <div class="bg-white radius-10 py-3 px-3" v-if="getUser.type !== 'admin'">
      <h5 class="agent-progress text-black text-bold">Your Progress</h5>
      <div class="row">
        <div class="col-6" v-if="getUser.type == 'Sales Agent'">
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
        <div class="col-6" v-else>
          <h6 class="text-text badge badge-success">
            For Call Center Agent
          </h6>
          <CChartBar :datasets="callCenterAgentData" labels="months" />
        </div>
      </div>
    </div>
    <CRow v-if="getUser.type == 'admin'">
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <h5 class="mb-0 mt-2">Traffic &amp; Sales</h5>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="info">
                      <small class="text-muted">Total Recieved Queries</small
                      ><br />
                      <strong class="h4">9,123</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="danger">
                      <small class="text-muted">Total Resolved Queries</small
                      ><br />
                      <strong class="h4">22,643</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Monday
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" color="info" :value="34" />
                    <CProgress class="progress-xs" color="danger" :value="78" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Tuesday
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="56" color="info" />
                    <CProgress class="progress-xs" :value="94" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Wednesday
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="12" color="info" />
                    <CProgress class="progress-xs" :value="67" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Thursday
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="43" color="info" />
                    <CProgress class="progress-xs" :value="91" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Friday
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="22" color="info" />
                    <CProgress class="progress-xs" :value="73" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Saturday
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="53" color="info" />
                    <CProgress class="progress-xs" :value="82" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Sunday
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="9" color="info" />
                    <CProgress class="progress-xs" :value="69" color="danger" />
                  </div>
                </div>
                <div class="legend text-center">
                  <small>
                    <sup><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                    &nbsp;&nbsp;
                    <sup
                      ><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup
                    >
                    Total Forms Status
                  </small>
                </div>
              </CCol>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="warning">
                      <small class="text-muted">New Students</small><br />
                      <strong class="h4">78,623</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="success">
                      <small class="text-muted">Active Students</small><br />
                      <strong class="h4">49,123</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <ul class="horizontal-bars type-2">
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon name="cil-user" class="progress-group-icon" />
                      <span class="title">Male</span>
                      <span class="ml-auto font-weight-bold">43%</span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="43"
                        color="primary"
                      />
                    </div>
                  </div>
                  <div class="progress-group mb-5">
                    <div class="progress-group-header">
                      <CIcon
                        name="cil-user-female"
                        class="progress-group-icon"
                      />
                      <span class="title">Female</span>
                      <span class="ml-auto font-weight-bold">37%</span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="37"
                        color="danger"
                      />
                    </div>
                  </div>
                  <!-- <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon name="cil-globe-alt" class="progress-group-icon" />
                      <span class="title">Organic Search</span>
                      <span class="ml-auto font-weight-bold">
                        191,235 <span class="text-muted small">(56%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="56"
                        color="success"
                      />
                    </div>
                  </div> -->
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-facebook"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Facebook</span>
                      <span class="ml-auto font-weight-bold">
                        51,223 <span class="text-muted small">(15%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="15"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-twitter"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Twitter</span>
                      <span class="ml-auto font-weight-bold">
                        37,564 <span class="text-muted small">(11%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="11"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-linkedin"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">LinkedIn</span>
                      <span class="ml-auto font-weight-bold">
                        27,319 <span class="text-muted small">&nbsp;(8%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="8"
                        color="success"
                      />
                    </div>
                  </div>
                  <!-- <div class="divider text-center">
                    <CButton color="link" size="sm" class="text-muted">
                      <CIcon name="cil-options" />
                    </CButton>
                  </div> -->
                </ul>
              </CCol>
            </CRow>
            <br />
            <CDataTable
              class="mb-0 table-outline"
              hover
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
            >
              <td slot="avatar" class="text-center" slot-scope="{ item }">
                <div class="c-avatar">
                  <img :src="item.avatar.url" class="c-avatar-img" alt="" />
                  <span
                    class="c-avatar-status"
                    :class="`bg-${item.avatar.status || 'secondary'}`"
                  ></span>
                </div>
              </td>
              <td slot="user" slot-scope="{ item }">
                <div>{{ item.user.name }}</div>
                <div class="small text-muted">
                  <span>
                    <template v-if="item.user.new">New</template>
                    <template v-else>Recurring</template>
                  </span>
                  | Registered: {{ item.user.registered }}
                </div>
              </td>
              <td slot="country" slot-scope="{ item }" class="text-center">
                <CIcon :name="item.country.flag" height="25" />
              </td>
              <td slot="progress" slot-scope="{ item }">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{ item.progress.value }}%</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{ item.progress.period }}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.progress.value"
                  :color="color(item.progress.value)"
                />
              </td>
              <td slot="payment" slot-scope="{ item }" class="text-center">
                <CIcon :name="item.payment.icon" height="25" />
              </td>
              <td slot="activity" slot-scope="{ item }">
                <div class="small text-muted">Last login</div>
                <strong>{{ item.activity }}</strong>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <WidgetsBrand v-if="getUser.type == 'admin'" />
  </div>
</template>

<script>
import MainChartExample from "./charts/MainChartExample";
import WidgetsDropdown from "./widgets/WidgetsDropdown";
import WidgetsBrand from "./widgets/WidgetsBrand";
import { CChartPie, CChartBar } from "@coreui/vue-chartjs";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand,
    CChartPie,
    CChartBar,
  },
  data() {
    return {
      selected: "Month",
      salesAgentDataArr: [1, 10, 45, 51, 55, 8, 54],
      tableItems: [
        {
          avatar: { url: "img/avatars/1.jpg", status: "success" },
          user: {
            name: "Yiorgos Avraamu",
            new: true,
            registered: "Jan 1, 2015",
          },
          country: { name: "USA", flag: "cif-us" },
          progress: { value: 50, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "10 sec ago",
        },
        {
          avatar: { url: "img/avatars/2.jpg", status: "danger" },
          user: {
            name: "Avram Tarasios",
            new: false,
            registered: "Jan 1, 2015",
          },
          country: { name: "Brazil", flag: "cif-br" },
          progress: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "5 minutes ago",
        },
        {
          avatar: { url: "img/avatars/3.jpg", status: "warning" },
          user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2015" },
          country: { name: "India", flag: "cif-in" },
          progress: { value: 74, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "1 hour ago",
        },
        {
          avatar: { url: "img/avatars/4.jpg", status: "" },
          user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2015" },
          country: { name: "France", flag: "cif-fr" },
          progress: { value: 98, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last month",
        },
        {
          avatar: { url: "img/avatars/5.jpg", status: "success" },
          user: {
            name: "Agapetus Tadeáš",
            new: true,
            registered: "Jan 1, 2015",
          },
          country: { name: "Spain", flag: "cif-es" },
          progress: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last week",
        },
        {
          avatar: { url: "img/avatars/6.jpg", status: "danger" },
          user: {
            name: "Friderik Dávid",
            new: true,
            registered: "Jan 1, 2015",
          },
          country: { name: "Poland", flag: "cif-pl" },
          progress: { value: 43, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last week",
        },
      ],
      tableFields: [
        { key: "avatar", label: "", _classes: "text-center" },
        { key: "user", label: "Agents" },
        { key: "country", _classes: "text-center" },
        { key: "progress" },
        { key: "activity" },
      ],
    };
  },
  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    },
  },
  computed: {
    ...mapGetters(["getUser"]),
    getWeekDay() {
      var weekday = new Array(
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      );
      var day = weekday[new Date().getDay()];
      return day;
    },
    getCurrentMonth() {
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var month = months[new Date().getMonth()];
      return month;
    },
    getGreetings() {
      var curHr = new Date().getHours();
      if (curHr < 12) {
        return "Morning";
      } else if (curHr < 18) {
        return "Afternoon";
      } else {
        return "Evening";
      }
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
  },
};
</script>
<style lang="scss">
.welcomeCard {
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  .day h4 {
    font-family: "Lato", sans-serif;
    font-weight: 900;
  }
  h1.Greetings {
    font-family: "Lora", serif;
    font-size: 40px;
    line-height: 40px;
  }
}
</style>
