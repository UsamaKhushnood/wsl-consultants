
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
  }
}

export default Helpers
