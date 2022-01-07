<template>
  <div class="all-agents-list">
    <div class="agents-list">
      <div
        class="agent bg-white mr-1 p-3  mb-2 align-items-center position-relative"
        v-for="(data, i) in items"
        :key="i"
      >
        <div class="d-flex">
          <div class="mr-3">
            <b-avatar>
              {{
                data.name
                  .split(' ')
                  .map((i) => i.charAt(0))
                  .join('')
                  .toUpperCase()
              }}
            </b-avatar>
          </div>
          <div>
            <h5 class="mb-0">{{ data.name }}</h5>
            <p
              class="m-0 text-primary text-bold"
              v-if="data.type == 'Call Center Agent'"
            >
              Call Center Agent
            </p>
            <p class="m-0 text-success text-bold" v-else>Sales Agent</p>
          </div>
          <div class="ml-auto align-self-baseline">
            <router-link
              active-class="c-active"
              :to="'/dashboard/agents/' + data.id"
              class="c-sidebar-nav-link p-0"
              target="_self"
              @click.native="$store.commit('SET_SELECTED_AGENT', data)"
            >
              <b-button size="sm" variant="link">
                View Profile
              </b-button>
            </router-link>
          </div>
        </div>
        <hr />
        <div>
          <!-- for call center agent  -->
          <div class="performance" v-if="data.type == 'Call Center Agent'">
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold mb-0">Last Month's Leads</h6>
              <h6 class="f-14 text-bold mb-0">
                {{ data.callAgent.last_month_leads }}
              </h6>
            </div>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold mb-0">This Month's Leads</h6>
              <h6 class="f-14 text-bold mb-0">
                {{ data.callAgent.current_month_leads }}
              </h6>
            </div>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold mb-0">Overall Leads</h6>
              <h6 class="f-14 text-bold mb-0">
                {{ data.callAgent.total_leads }}
              </h6>
            </div>
          </div>
          <!-- for sales agent  -->
          <div class="performance" v-else>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold text-primary mb-0">Assigned Leads</h6>
              <h6 class="f-14 text-bold mb-0">
                {{ data.saleAgent.assigned }}
              </h6>
            </div>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold text-primary mb-0">In Progress</h6>
              <h6 class="f-14 text-bold mb-0">
                {{ data.saleAgent.in_progress }}
              </h6>
            </div>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold text-blue mb-0">Expected</h6>
              <h6 class="f-14 text-bold mb-0">{{ data.saleAgent.expected }}</h6>
            </div>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold text-success mb-0">Applied</h6>
              <h6 class="f-14 text-bold mb-0">{{ data.saleAgent.applied }}</h6>
            </div>
          </div>
        </div>
        <hr class="Actionhr" />
        <div style="height:40px;">
          <div class="actions d-flex">
            <b-button
              size="sm"
              variant="dark"
              class="ml-auto"
              @click="copyCredentials(data)"
              >Copy Credentials</b-button
            >
            <b-button
              size="sm"
              variant="danger"
              class="ml-1"
              @click="deleteAgents(data.id)"
            >
              <b-icon icon="trash"></b-icon>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    getAgent() {
      const vm = this
      let url = ''
      url = process.env.VUE_APP_API_URL + '/admin/all-agents'
      axios
        .get(url)
        .then((response) => {
          vm.items = response.data.data
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
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
    deleteAgents(id) {
      const vm = this
      axios
        .delete(process.env.VUE_APP_API_URL + '/admin/agents/' + id)
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
          vm.getAgent()
        })
        .catch((errors) => {
          console.log(errors)
        })
    },
    copyCredentials(data) {
      const vm = this
      // first name will replace with password
      var credentials = `Email: ${data.email}\nPassword: ${data.encrypt_password}`
      navigator.clipboard.writeText(credentials).then(
        function() {
          vm.isModalVisible = false
          vm.$toast.success('Successfully Copied', {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
          // console.log(credentials);
        },
        function() {
          vm.isModalVisible = false
          vm.$toast.error('Something went wrong', {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
        }
      )
    },
  },
  created() {
    this.getAgent()
  },
}
</script>
<style scoped lang="scss">
.agents-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 8px;
  row-gap: 5px;
  .actions {
    position: absolute;
    width: 100%;
    bottom: 10px;
    right: 10px;
  }
  .Actionhr {
    position: absolute;
    bottom: 37px;
    width: 90%;
    right: 5%;
  }
}
</style>
