<template>
  <div id="newrequest">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-plus-square mr-3"></i>Add New Agent</h1>
          </div>
        </div>
      </div>
      <!-- content here  -->
      <div class="row">
        <div
          class="col-md-7 bg-white pt-5 px-4 pb-2"
          style="border-radius: 5px;"
        >
          <form>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-element">
                    <label for="agentFirstName">First Name:</label>
                    <input
                      type="text"
                      id="agentFirstName"
                      v-model="first_name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-element">
                    <label for="agentLastName">Last Name:</label>
                    <input type="text" id="agentLastName" v-model="last_name" />
                  </div>
                </div>
              </div>
              <div class="form-element">
                <label for="email">Enter Email:</label>
                <input type="email" id="email" v-model="email" />
              </div>
              <div class="form-element">
                <div class="row">
                  <div class="col-8">
                    <label for="password">Enter password:</label>
                    <PasswordInput :value="password" />
                  </div>
                  <div class="col-4 d-flex align-items-end">
                    <b-button variant="dark" block @click="getPassword"
                      >Generate Password
                    </b-button>
                  </div>
                </div>
              </div>
              <div class="form-element">
                <h6>Select Agent Type:</h6>
                <div class="row">
                  <div class="ml-3">
                    <b-form-radio
                      type="radio"
                      name="agentType"
                      id="callCenterAgent"
                      value="Call Center Agent"
                      v-model="agentType"
                    >
                      Call Center Agent</b-form-radio
                    >
                  </div>
                  <div class="ml-3">
                    <b-form-radio
                      type="radio"
                      name="agentType"
                      id="saleAgent"
                      value="Sales Agent"
                      v-model="agentType"
                      >Sales Agent
                    </b-form-radio>
                  </div>
                </div>
              </div>
              <div class="row">
                <b-button
                  variant="dark"
                  class="ml-auto mr-3 w-25"
                  @click.prevent="addAgent"
                  >Create</b-button
                >
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-5">
          <div class="agentsList ml-2 p-4 py-2 bg-white">
            <div class="d-flex mb-4 align-items-center justify-content-between">
              <h2>Agents List</h2>
              <b-button variant="dark" size="sm">View All</b-button>
            </div>
            <div
              class="agent d-flex p-3 bg-gray-100 mb-2 align-items-center"
              v-for="(i, x) in agents_list"
              :key="x"
            >
              <div class="mr-3">
                <b-avatar>
                  {{
                    i.first_name
                      .split(" ")
                      .map((i) => i.charAt(0))
                      .join("")
                      .toUpperCase()
                  }}
                </b-avatar>
              </div>
              <div>
                <h5 class="mb-0">{{ i.first_name }}</h5>
                <p class="m-0">{{ i.type }}</p>
              </div>
              <div class="ml-auto ">
                <b-button size="sm" variant="dark" @click="copyCredentials(x)"
                  >Copy Credentials</b-button
                >
                <b-button
                  size="sm"
                  variant="danger"
                  class="ml-1"
                  @click="deleteAgents(i.id)"
                >
                  <b-icon icon="trash"></b-icon>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import PasswordInput from "@/components/PasswordInput";
export default {
  components: { PasswordInput },
  data() {
    return {
      agentType: "Call Center Agent",
      first_name: "",
      last_name: "",
      email: "",
      password: null,
      agents_list: [],
    };
  },
  methods: {
    trigger() {
      this.$refs.sendReq.click();
    },
    addAgent() {
      const vm = this;
      //  vm.$store.commit("SET_SPINNER", true);
      this.$http
        .post(process.env.VUE_APP_API_URL + "/register", {
          type: this.agentType,
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log("s", response.data.message);
          // vm.$store.commit("SET_AUTH_TOKEN", response.data.token);
          // vm.$store.commit("SET_SPINNER", false);
          // vm.$store.commit("SET_USER", response.data.userDetail.user);
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          vm.getAgents()
          (vm.first_name = ""),
            (vm.last_name = ""),
            (vm.email = ""),
            (vm.password = "");
          // vm.$store.commit("SET_SPINNER", false);
          // vm.$router.push({ name: "Dashboard" });
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
    },
    getAgents() {
      const vm = this;
      axios
        .get(process.env.VUE_APP_API_URL + "/admin/agents")
        .then((response) => {
          console.log("data:: agggs", response.data.data);
          vm.agents_list = response.data.data;
        })
        .catch((errors) => {
          var err = "";
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email;
          }
        });
    },
    deleteAgents(id) {
      const vm = this;
      axios
        .delete(process.env.VUE_APP_API_URL + "/admin/agents/" + id)
        .then((response) => {
          vm.isModalVisible = false;
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          vm.getAgents();
        })
        .catch((errors) => {
          var err = "";
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email;
          }
        });
    },
    sendTo(url) {
      window.open(url, "_blank");
    },
    copyCredentials(index) {
      const vm = this;
      // first name will replace with password
      var credentials = `Email: ${this.agents_list[index].email}\nPassword: ${this.agents_list[index].encrypt_password}`;
      navigator.clipboard.writeText(credentials).then(
        function() {
          vm.isModalVisible = false;
          vm.$toast.success("Successfully Copied", {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          console.log(credentials)
        },
        function() {
          vm.isModalVisible = false;
          vm.$toast.error("Something went wrong", {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        }
      );
    },
    getPassword() {
      let pass = "";
      let length = 12;

      const special = "!#$%&()*+,-./:;<=>?@[\]^_|~".split("");
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const chars = new Array(26)
        .fill()
        .map((_, i) => String.fromCharCode(i + 65));

      let availableChars = [...chars];
      // ensuring at least one number in the output
      pass += this.randomPick(numbers);
      length--;
      availableChars = availableChars.concat(numbers);
      // ensuring at least one special character in the output
      pass += this.randomPick(special);
      length--;
      availableChars = availableChars.concat(special);
      for (let i = 0; i < length; i++) {
        let picked = this.randomPick(availableChars);
        if (/[A-Z]/.test(picked)) {
          let lower = Math.random();
          picked = lower < 0.5 ? picked.toLowerCase() : picked;
        }
        pass += picked;
      }
      this.password = pass;
    },
    randomPick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
  },
  created() {
    this.getAgents();
  },
};
</script>
