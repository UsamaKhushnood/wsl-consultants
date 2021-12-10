<template>
  <div class="cerate-new-lead-popup">
    <b-modal
      :id="'create-lead-modal'"
      title="Create New Lead"
      header-bg-variant="dark"
      header-text-variant="light"
      centered
      ref="create_lead_modal"
    >
      <template #default>
        <div class="modal-body">
          <form class="form-group">
            <div class="row">
              <div class="col-6">
                <div class="form-element">
                  <label for="agentFirstName">First Name:</label>
                  <input type="text" v-model="first_name" id="agentFirstName" />
                </div>
              </div>
              <div class="col-6">
                <div class="form-element">
                  <label for="last_name">Last Name:</label>
                  <input type="text" v-model="last_name" id="last_name" />
                </div>
              </div>
            </div>
            <div class="form-element">
              <label for="country">Preferred Country:</label>
              <input type="text" v-model="country" id="country" />
            </div>
            <div class="form-element">
              <label for="phone">Phone Number:</label>
              <input type="text" v-model="phone" id="phone" />
            </div>
            <div class="form-element">
              <label for="whatsapp_num">Whatsapp Number:</label>
              <input type="text" v-model="whatsapp_num" id="whatsapp_num" />
            </div>
            <div class="form-element">
              <label for="email">Email:</label>
              <input type="text" v-model="email" id="email" />
            </div>
            <div class="form-element">
              <label for="cv">Student CV:</label>
              <input
                type="file"
                ref="file"
                @change="handleCvUpload($event)"
                id="cv"
              />
            </div>
            <div class="form-element">
              <label for="agentFirstName">Screenshots:</label>
              <input
                type="file"
                ref="screen"
                @change="handleScreenshot($event)"
                id="agentFirstName"
              />
            </div>
          </form>
        </div>
      </template>
      <template #modal-footer="{hide}">
        <div>
          <div class="row mt-4 mr-2 justify-content-end">
            <b-button variant="dark" class="mr-2" ref="cancel" squared @click="hide"
              >Cancel</b-button
            >
            <b-button variant="success" squared @click="addLead"
              >Create</b-button
            >
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    // items: tableData,
    visibleLiveDemo: false,
    first_name: "",
    last_name: "",
    country: "",
    email: "",
    phone: "",
    whatsapp_num: "",
    cv: "",
    screenShot: "",
  }),
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    handleCvUpload(event) {
      let vm = this;
      var image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        vm.cv = e.target.result;
        console.log(this.cv);
      };
    },
    handleScreenshot(event) {
      let vm = this;
      var images = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(images);
      reader.onload = (e) => {
        vm.screenShot = e.target.result;
        console.log(this.screenShot);
      };
    },
    getStudent() {
      const vm = this;
      console.log(vm.getUser.type)
      let url ='';
      if(vm.getUser.type =='Sales Agent'){
          url = process.env.VUE_APP_API_URL +"/sales-agent/students";
      }else if(vm.getUser.type =='Call Center Agent'){
          url = process.env.VUE_APP_API_URL +"/call-agent/students";
      }
      else{
          url = process.env.VUE_APP_API_URL +"/admin/students";
      }
      axios
        .get(url)
        .then((response) => {
          console.log("data::", response.data.data);
          vm.items = response.data.data.allLead
        })
        .catch((errors) => {
          var err = "";
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email;
          }
        });
    },
    addLead() {
      const vm = this;
      let url =
        vm.getUser.type == "admin"
          ? process.env.VUE_APP_API_URL + "/admin/new-leads"
          : process.env.VUE_APP_API_URL + "/sales-agent/new-leads";
      axios
        .post(url, {
          first_name: vm.first_name,
          last_name: vm.last_name,
          country: vm.country,
          email: vm.email,
          phone: vm.phone,
          whatsapp_num: vm.whatsapp_num,
          cv: vm.cv,
          screen_shot: vm.screenShot,
        })
        .then((response) => {
          console.log("data::", response.data);
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });

          vm.first_name = "",
          vm.last_name = "",
          vm.country = "",
          vm.email = "",
          vm.phone = "",
          vm.whatsapp_num = "",
          vm.cv = "",
          vm.screenShot = "";
          vm.$store.commit("SET_All_STUDENT", true);
          vm.getStudent()
          vm.$refs.cancel.click()
       
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
        });
    },
  },
};
</script>
<style lang="scss"></style>
