<template>
  <div class="edit-lead-popup position-relative ">
    <b-modal
      :id="'edit-lead-modal' + propsindex"
      title="Edit Lead"
      header-bg-variant="dark"
      header-text-variant="light"
      centered
      scrollable
      @close="closeModal()"
      @hide="closeModal()"
      ref="edit_lead_modal"
    >
      <template #default>
        <div class="modal-body">
          <form class="form-group" id="myLead">
            <div class="row">
              <div class="col-6">
                <div class="form-element">
                  <label for="agentFirstName">First Name:</label>
                  <input
                    type="text"
                    v-model="propsData.first_name"
                    id="agentFirstName"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-element">
                  <label for="last_name">Last Name:</label>
                  <input
                    type="text"
                    v-model="propsData.last_name"
                    id="last_name"
                  />
                </div>
              </div>
            </div>
            <div class="form-element">
              <label for="country">Preferred Country:</label>
              <b-form-select
                v-model="propsData.country"
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
              <input type="text" v-model="propsData.phone" id="phone" />
            </div>
            <div class="form-element">
              <label for="whatsapp_num">Whatsapp Number:</label>
              <input
                type="text"
                required
                v-model="propsData.whatsapp_num"
                id="whatsapp_num"
              />
            </div>
            <div class="form-element">
              <label for="email">Email:</label>
              <input
                type="text"
                required
                v-model="propsData.email"
                id="email"
              />
            </div>
            <div class="form-element">
              <label for="cv">Student CV:</label>
              <input
                type="file"
                ref="file"
                @change="handleCvUpload($event)"
                required
                id="cv"
              />
            </div>
            <div class="form-element">
              <label for="agentFirstName">Updload Screenshots:</label>

              <VueUploadMultipleImage
                :data-images="uploadedImages"
                @upload-success="uploadImageSuccess"
                @edit-image="editImage"
                @data-change="dataChange"
                dragText="drag and drop files here"
                browseText="or select"
                primaryText="Default"
                markIsPrimaryText="Set as default"
                popupText="This image will be displayed as default"
                dropText="Drop your files here..."
              />
              <p class="badge mb-0 text-capitalize text-secondary">
                max uplaod limit is 5
              </p>
            </div>
            <div class="form-element">
              <label for="agentFirstName">Recently Uploaded:</label>
              <div class="screenshotsGallery justify-content-center">
                <a
                  v-for="(data, index) in getSelectedStudent.screen_shots"
                  :key="index"
                  :href="ImageUrl + '/screen-shot/' + data.screen_shot"
                  target="_blank"
                  class="position-relative"
                  v-b-tooltip.hover
                  title="Click to view full"
                >
                  <div
                    class="screenShotWrapper"
                    v-b-modal="'imgModal' + propsindex"
                      :style="{
                        backgroundImage: `url(${ImageUrl}/screen-shot/${data.screen_shot})`,
                      }"
                  ></div>
                  <b-button
                    variant="outline-danger"
                    size="sm"
                    class="screenShotTrash"
                    @click.prevent
                  >
                    <i class="fa fa-trash"></i>
                  </b-button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </template>
      <template #modal-footer="{close}">
        <div>
          <div class="row mt-4 mr-2 justify-content-end">
            <b-button
              variant="dark"
              class="mr-2"
              ref="cancel"
              squared
              @click="close"
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
import { getSelectedStudent } from "@/mixins/getSelectedStudent.js";

export default {
  components: {
    getSelectedStudent,
  },
  props: ["propsindex", "items"],
  data() {
    return {
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
      imageList: [],
      uploadedImages: [],
      formOverlay: false,
    };
  },
  computed: {
    ...mapGetters(["getUser", "getSelectedStudent"]),
    ...mapState(["allStudentData"]),
    getItems() {
      return this.$props.items;
    },
    ImageUrl() {
      return process.env.VUE_APP_IMAGE_STORAGE_URL;
    },
    propsData() {
      return {
        first_name: this.items.first_name,
        last_name: this.items.last_name,
        country: this.items.country,
        email: this.items.email,
        phone: this.items.phone,
        whatsapp_num: this.items.whatsapp_num,
      };
    },
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
    setStudent(data) {
      // this.deleteStudentId = data
      this.$store.commit("SET_CURRENT_STUDENT", null);
      this.$store.commit("SET_CURRENT_STUDENT", data);
      this.user_for_pro = data;
      this.selectedStudent = data;
      console.log("pro", data);
    },
    addLead() {
      const vm = this;
      let url = "";
      if (vm.getUser.type == "admin") {
        url = process.env.VUE_APP_API_URL + "/admin/new-leads/" + id;
      } else {
        url = process.env.VUE_APP_API_URL + "/new-leads/" + id;
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
          first_name: vm.first_name,
          last_name: vm.last_name,
          country: vm.country,
          email: vm.email,
          cv: vm.cv,
          screen_shot: vm.imageList,
          whatsapp_num: vm.whatsapp_num,
          phone: vm.phone,
        })
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
      this.imageList.push(fileList[0].path);
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
    closeModal() {
      console.log("modal close");
    },
  },
  watch: {
    propsData(oldVal, NewVal) {
      console.log("old", oldVal);
      console.log("new", NewVal);
    },
  },
  destroyed() {
    this.$store.commit("SET_ALL_STUDENT_DATA", null);
  },
};
</script>
<style lang="scss"></style>
