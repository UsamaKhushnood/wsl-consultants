import { mapGetters } from 'vuex'
import axios from 'axios'
export const getSelectedStudentMix = {
  computed: {
    ...mapGetters(['getSelectedStudent', 'getUser']),
  },
  data() {
    return {
      selectedStudentMix: '',
      leadsType: this.$route.params.type,
    }
  },
  methods: {
    getStudent() {
      const vm = this
      console.log(vm.getUser.type)
      let url = ''
      if (this.leadsType === 'all-leads') {
        if (vm.getUser.type == 'Sales Agent') {
          url = process.env.VUE_APP_API_URL + '/sales-agent/students'
        } else if (vm.getUser.type == 'Call Center Agent') {
          url = process.env.VUE_APP_API_URL + '/call-agent/students'
        } else {
          url = process.env.VUE_APP_API_URL + '/admin/students'
        }
      } else {
        if (vm.getUser.type == 'Sales Agent') {
          url = process.env.VUE_APP_API_URL + `/sales-agent/${this.leadsType}`
        } else if (vm.getUser.type == 'Call Center Agent') {
          url = process.env.VUE_APP_API_URL + `/call-agent/${this.leadsType}`
        } else {
          url = process.env.VUE_APP_API_URL + `/admin/${this.leadsType}`
        }
      }

      axios
        .get(url)
        .then((response) => {
          console.log('data::', response.data.data)
          // vm.items = response.data.data;
          vm.$store.commit('SET_ITEMS', response.data.data)
          vm.getLeadCounts()
        })
        .catch((errors) => {
          console.log('(error.response.status', error.response.status)
          console.log('errors.response.data', errors.response.data.errors)
        })
    },
    getLeadCounts() {
      const vm = this
      console.log(vm.getUser.type)
      let url = ''
      url = process.env.VUE_APP_API_URL + '/count-leads'
      axios
        .get(url)
        .then((response) => {
          console.log('data::', response.data.data)
          vm.$store.commit('SET_LEADS', response.data.data)
          vm.formOverlay = false
        })
        .catch((errors) => {
          console.log('(error.response.status', error.response.status)
          console.log('errors.response.data', errors.response.data.errors)
        })
    },
  },
  mounted() {
    this.leadsType = this.$route.params.type
  },
  created() {
    // this.getStudent()
  },
}
