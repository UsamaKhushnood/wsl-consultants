<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="primary" :header="allLeadHeader" text="All Leads">
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
              <CIcon name="cil-settings"/>
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="primary"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="info" :header="allAppliedHeader" text="Applied">
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
            :caret="false"
          >
            <template #toggler-content>
              <CIcon name="cil-location-pin"/>
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[1, 18, 9, 17, 34, 22, 11]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="All Leads"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="warning"
        :header="allExpectedHeader"
        text="Expected"
      >
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
              <CIcon name="cil-settings"/>
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            class="mt-3"
            style="height:70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            :options="{ elements: { line: { borderWidth: 2.5 }}}"
            point-hover-background-color="warning"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="danger"
        :header="allProgressHeader"
        text="In Progress"
      >
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
             <CIcon name="cil-settings"/>
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartBarSimple
            class="mt-3 mx-3"
            style="height:70px"
            background-color="rgb(250, 152, 152)"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'WidgetsDropdown',
  components: { CChartLineSimple, CChartBarSimple },
  data(){
    return{
      allLeadHeader:'',
      allProgressHeader:'',
      allAppliedHeader:'',
      allExpectedHeader:'',

    }
  },
  computed:{
    ...mapGetters(["getUser"])
  },
   mounted(){
    this.getCounts()
  },
    methods:{
    getCounts(){
      const vm = this;
      let url = "";
      if (vm.getUser.type == "admin") {
        url = process.env.VUE_APP_API_URL + "/admin/counter" ;
      }else if(vm.getUser.type == "Sales Agent"){
        url = process.env.VUE_APP_API_URL + "/sales-agent/counter";
      }
       else {
        url = process.env.VUE_APP_API_URL + "/call-agent/counter";
      }
      axios
        .get(url)
        .then((response) => {
            console.log("data::1", response.data.data);
            vm.allLeadHeader = response.data.data.allLeads.toString()
            vm.allProgressHeader = response.data.data.inProgress.toString()
            vm.allExpectedHeader = response.data.data.expected.toString()
            vm.allAppliedHeader = response.data.data.applied.toString()
            // vm.$watch(response.data.data, callback, {
            //   immediate: true
            // })
            // vm.items = 
        })
        .catch((errors) => {
          var err = "";
          console.log("(error.response.status", error.response.status);
          console.log("errors.response.data", errors.response.data.errors);

          // if (errors.response.data.message == "Login Time Expire") {
          //   console.log("errors.response.data", errors.response.data.message);
          //   localStorage.setItem("token", null);
          // }
        });
    }
  }
}
</script>
