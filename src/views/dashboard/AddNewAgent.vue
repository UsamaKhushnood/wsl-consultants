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
                <label for="password">Enter password:</label>
                <input type="password" id="=password" v-model="password" />
              </div>
              <div class="form-element">
                <h6>Select Agent Type:</h6>
                <div class="row">
                  <div class="ml-3">
                    <b-form-radio
                      type="radio"
                      name="agentType"
                      id="callCenterAgent"
                      value="callCenterAgent"
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
                      value="saleAgent"
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
              v-for="(i, x) in 4"
              :key="x"
            >
              <div class="mr-3">
                <b-avatar></b-avatar>
              </div>
              <div>
                <h5 class="mb-0">Agent Name</h5>
                <p class="m-0">agent role</p>
              </div>
              <div class="ml-auto ">
                <b-button size="sm" variant="dark">Copy Credentials</b-button>
                <b-button size="sm" variant="danger" class="ml-1">
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
export default {
  data() {
    return {
      agentType: "callCenterAgent",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
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
    sendTo(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
