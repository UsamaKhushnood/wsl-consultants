import {debounce, includes} from "lodash";
import {events} from './bus'
import axios from 'axios'
import router from '@/router'

const Helpers = {
  install(Vue) {
    Vue.prototype.$logout = function () {
        const vm = this;
        //  vm.$store.commit("SET_SPINNER", true);
        this.$http
          .post(process.env.VUE_APP_API_URL + "/logout")
          .then((response) => {
            console.log('s',response.data.message)
            // vm.$store.commit("SET_AUTH_TOKEN", response.data.token);
            // vm.$store.commit("SET_SPINNER", false);
            // vm.$store.commit("SET_USER", response.data.userDetail.user);
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
            // vm.$store.commit("SET_SPINNER", false);
            vm.$router.push({ path: "/login" });
          })
          .catch((errors) => {
            var err = "";
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
            // vm.$store.commit('SET_SPINNER',false);
          });
    
    }
    Vue.prototype.$getStudent =function(){
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
              console.log("data::1", response.data.data);
              vm.$store.commit('SET_ALL_STUDENT_DATA',null)
              vm.$store.commit('SET_ALL_STUDENT_DATA',response.data.data)
              vm.$forceUpdate()
              // vm.$watch(response.data.data, callback, {
              //   immediate: true
              // })
              // vm.items = 
          })
          .catch((errors) => {
            var err = "";
            console.log("(error.response.status", error.response.status);
            console.log("errors.response.data", errors.response.data.errors);
  
            if (errors.response.data.message == "Login Time Expire") {
              console.log("errors.response.data", errors.response.data.message);
              localStorage.setItem("token", null);
            }
          });
      
    }
    Vue.prototype.$successMsg= function(msg){
      this.$toast.success(msg, {
        position: "top-right",
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    }
    Vue.prototype.$getAgents =function() {
      const vm = this;
      let url =
        vm.getUser.type == "admin" ? "/admin/sale-agents" : "/sale-agents";
      axios
        .get(process.env.VUE_APP_API_URL + url,{headers: {
          "Access-Control-Allow-Origin": "*",
        }
      })
        .then((response) => {
          console.log("data::", response.data.data);
          let arr = response.data.data;
          arr.map(function(value, key) {
            let d = {
              value: value.id,
              text: value.first_name,
            };
            vm.options.push(d);
          });
        })
        .catch((errors) => {
          var err = "";
          //  this.$toast.error(errors.response.data.message, {
          //   position: "top-right",
          //   closeButton: "button",
          //   icon: true,
          //   rtl: false,
          // });
        });
    }
  }
}

export default Helpers
