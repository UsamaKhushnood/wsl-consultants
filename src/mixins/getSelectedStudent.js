import { mapGetters } from "vuex";
import axios from "axios";
export const getSelectedStudentMix = {
  computed: {
    ...mapGetters(["getSelectedStudent", "getUser"]),
  },
  data(){
    return{
      selectedStudentMix:''
    }
  },
  methods:{
    getStudent() {
      const vm = this;
      console.log(vm.getUser.type);
      let url = "";
        if (vm.getUser.type == "Sales Agent") {
          url = process.env.VUE_APP_API_URL + "/sales-agent/students";
        } else if (vm.getUser.type == "Call Center Agent") {
          url = process.env.VUE_APP_API_URL + "/call-agent/students";
        } else {
          url = process.env.VUE_APP_API_URL + "/admin/students";
        }
      axios
        .get(url)
        .then((response) => {
          console.log("data::", response.data.data);
          // vm.items = response.data.data;
          vm.$store.commit('SET_ITEMS',response.data.data)
          vm.getLeadCounts()
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
      },
    getLeadCounts() {
      const vm = this;
      console.log(vm.getUser.type);
      let url = "";
        url = process.env.VUE_APP_API_URL + "/count-leads";
      axios
        .get(url)
        .then((response) => {
          console.log("data::", response.data.data);
          vm.$store.commit('SET_LEADS',response.data.data)
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
      },
  },
  mounted() {
  
  },
  created(){
    // this.getStudent()
  }

};
