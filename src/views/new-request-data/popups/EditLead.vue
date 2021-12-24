<template>
  <div class="edit-lead-popup position-relative ">
    <b-modal
      :id="'edit-lead-modal'"
      title="Edit Lead"
      header-bg-variant="dark"
      header-text-variant="light"
      centered
      ref="edit_lead_modal"
    >
      <template #default>
        <div class="modal-body">
          <form class="form-group" id="myLead">
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
              <b-form-select
                v-model="country"
                required
                :options="[
                  'Austria ',
                  'Europe',
                  'Canada',
                  'Italy',
                  'Itly MBBS',
                  'Turkey MBBS',
                  'UK',
                  'USA',
                  'Visit Canada',
                  'Visit USA',
                ]"
              >
              </b-form-select>
            </div>
            <div class="form-element">
              <label for="phone">Phone Number:</label>
              <input type="text" v-model="phone" id="phone" />
            </div>
            <div class="form-element">
              <label for="whatsapp_num">Whatsapp Number:</label>
              <input
                type="text"
                required
                v-model="whatsapp_num"
                id="whatsapp_num"
              />
            </div>
            <div class="form-element">
              <label for="email">Email:</label>
              <input type="text" required v-model="email" id="email" />
            </div>
            <div class="form-element">
              <label for="cv">Student CV:</label>
              <input type="file" ref="file" @change="handleCvUpload($event)" required id="cv" />
            </div>
            <div class="form-element">
              <label for="agentFirstName">Screenshots:</label>
                 <VueUploadMultipleImage
                :data-images="uploadedImages"
                @upload-success="uploadImageSuccess"
                @edit-image="editImage"
                @data-change="dataChange"
              />
              <p class="badge mb-0 text-capitalize text-secondary">
                max uplaod limit is 5
              </p>
            </div>
          </form>
        </div>
      </template>
      <template #modal-footer="{hide}">
        <div>
          <div class="row mt-4 mr-2 justify-content-end">
            <b-button
              variant="dark"
              class="mr-2"
              ref="cancel"
              squared
              @click="hide"
              >Cancel</b-button
            >
            <b-button variant="success" squared @click="addLead"
              >Create</b-button
            >
          </div>
        </div>
        <b-overlay :show="formOverlay" no-wrap class="overlayModal">
        </b-overlay>
      </template>
    </b-modal>
  </div>
</template>
<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import axios from "axios";
import { mapGetters, mapState } from "vuex";
export default {
    props: ["items"],
  data: () => ({
    // items: tableData,
    visibleLiveDemo: false,
    first_name: this.getItems.first_name,
    last_name: "",
    country: "",
    email: "",
    phone: "",
    whatsapp_num: "",
    cv: "",
    screenShot: "",
    imageList: [],
    uploadedImages: [],
    formOverlay: false,
  }),
  computed: {
    ...mapGetters(["getUser","getSelectedStudent"]),
    ...mapState(["allStudentData"]),
      getItems(){
        return this.$props.items
      }
  },
   components: {
    VueUploadMultipleImage,
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

    addLead() {
      const vm = this;
      let url = "";
      if (vm.getUser.type == "Sales Agent") {
        url = process.env.VUE_APP_API_URL + "/sales-agent/new-leads";
      } else if (vm.getUser.type == "Call Center Agent") {
        url = process.env.VUE_APP_API_URL + "/call-agent/new-leads";
      } else {
        url = process.env.VUE_APP_API_URL + "/admin/new-leads";
      }

      var formData = new FormData();
      var cv = document.querySelector("#cv");
      var scr = document.querySelector("#scr");
      
      // formData.append("first_name", vm.first_name);
      // formData.append("last_name", vm.last_name);
      // formData.append("country", vm.country);
      // formData.append("email", vm.email);
      // formData.append("cv", cv.files[0]);
      // formData.append("screen_shot", vm.imageList);
      // formData.append("whatsapp_num", vm.whatsapp_num);
      // formData.append("phone", vm.phone);
      this.formOverlay = true;
      axios
        .post(url, {
          first_name:vm.first_name,
         last_name: vm.last_name,
         country:vm.country,
          email:vm.email,
          cv:vm.cv,
          screen_shot:vm.imageList,
          whatsapp_num:vm.whatsapp_num,
          phone:vm.phone}
        
        )
        .then((response) => {
          this.formOverlay = false;
          console.log("data::", response.data);
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });

          (vm.first_name = ""),
            (vm.last_name = ""),
            (vm.country = ""),
            (vm.email = ""),
            (vm.phone = ""),
            (vm.whatsapp_num = ""),
            (vm.cv = ""),
            (vm.screenShot = "");
          vm.$store.commit("SET_All_STUDENT", true);
          vm.$getStudent();
          vm.$refs.cancel.click();
        })
        .catch((errors) => {
          this.formOverlay = false;
          var err = "";
          console.log(errors, "create new lead errors");
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
    uploadImageSuccess(formData, index, fileList) {
      console.log(formData, "index:", index, fileList, "upload success");
      this.imageList.push(fileList[0].path)
    },
    // beforeRemove(index, done, fileList) {
    //   console.log("index:", index, done, fileList, "before remove");
    // },
    editImage(formData, index, fileList) {
      console.log(formData, "index:", index, fileList, "edit image");
    },
    dataChange(data) {
      console.log(data, "dataChange");
    },
  },

  destroyed(){
    this.$store.commit('SET_ALL_STUDENT_DATA',null)
  }
};
</script>
<style lang="scss"></style>
