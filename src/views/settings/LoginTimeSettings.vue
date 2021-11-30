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
        <b-button variant="dark" size="sm" class="mt-4">Save Changes</b-button>
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
export default {
  data() {
    return {
      startTime: "08:00:00",
      endTime: "17:00:00",
    };
  },
};
</script>
