<template>
  <div class="cerate-new-lead-popup position-relative ">
    <b-modal
      :id="'create-lead-modal'"
      title="Create New Lead"
      header-bg-variant="dark"
      header-text-variant="light"
      centered
      scrollable
      ref="create_lead_modal"
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
              <label for="country"
                >Preferred Country: <span class="text-danger">*</span></label
              >
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
              <span class="error-msg text-danger f-12" v-show="showWhatsappErr"
                >Preffered Country is required</span
              >
            </div>
            <div class="form-element">
              <label for="phone">Phone Number:</label>
              <input type="text" v-model="phone" id="phone" />
            </div>
            <div class="form-element">
              <label for="whatsapp_num"
                >Whatsapp Number: <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                required
                v-model="whatsapp_num"
                id="whatsapp_num"
              />
              <span class="error-msg text-danger f-12" v-show="showWhatsappErr"
                >Whatsapp is required</span
              >
            </div>
            <div class="form-element">
              <label for="email">Email:</label>
              <input type="text" required v-model="email" id="email" />
            </div>
            <div class="form-element">
              <label for="cv"
                >Student CV: <span class="text-danger">*</span></label
              >
              <input
                type="file"
                ref="file"
                @change="handleCvUpload($event)"
                multiple
                required
                id="cv"
              />
              <span class="error-msg text-danger f-12" v-show="showWhatsappErr"
                >CV is required</span
              >
            </div>
            <!-- <div class="form-element">
              <label for="agentFirstName">Screenshots:</label
             
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
            </div>-->
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
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import { getSelectedStudentMix } from '@/mixins/getSelectedStudent.js'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  mixins: [getSelectedStudentMix],
  data: () => ({
    // items: tableData,
    visibleLiveDemo: false,
    first_name: '',
    last_name: '',
    country: null,
    email: '',
    phone: '',
    whatsapp_num: '',
    cv: null,
    screenShot: '',
    imageList: [],
    uploadedImages: [],
    imagesArray: [],
    formOverlay: false,
    showWhatsappErr: false,
    showPrefferedCountryErr: false,
    showCVErr: false,
    errors: [],
  }),
  computed: {
    ...mapGetters(['getUser']),
  },
  components: {
    VueUploadMultipleImage,
  },
  methods: {
    handleCvUpload(event) {
      let vm = this
      var image = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        vm.cv = e.target.result
        console.log(this.cv)
      }
    },
    handleScreenshot(event) {
      let vm = this
      var images = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(images)
      reader.onload = (e) => {
        vm.screenShot = e.target.result
        console.log(this.screenShot)
      }
    },

    addLead() {
      const vm = this
      let url = ''
      vm.showWhatsappErr = false
      vm.showCVErr = false
      vm.showPrefferedCountryErr = false
      vm.errors = []
      if (
        vm.whatsapp_num != null
          ? vm.whatsapp_num.trim() === ''
          : '' || vm.whatsapp_num === null
      ) {
        vm.showWhatsappErr = true
        vm.errors.push('Whatsapp is Required')
        console.log(vm.errors)
      }
      if (vm.cv ? vm.cv.trim() === '' : '' || vm.cv === null) {
        vm.showCVErr = true
        vm.errors.push('CV is Required')
      }
      if (vm.country ? vm.country.trim() === '' : '' || vm.country === null) {
        vm.showPrefferedCountryErr = true
        vm.errors.push('Preffered Country is Required')
      }
      if (vm.errors.length > 0) {
        console.log('validate form please')
        vm.errors.forEach((error) => {
          vm.$toast.error(error, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
        })

        return
      } else {
        if (vm.getUser.type == 'Sales Agent') {
          url = process.env.VUE_APP_API_URL + '/sales-agent/new-leads'
        } else if (vm.getUser.type == 'Call Center Agent') {
          url = process.env.VUE_APP_API_URL + '/call-agent/new-leads'
        } else {
          url = process.env.VUE_APP_API_URL + '/admin/new-leads'
        }

        var formData = new FormData()
        var cv1 = document.querySelector('#cv')
        // var scr = document.querySelector("#scr");
        // var scr = document.querySelector(".image-input");
        var scr = document.querySelector('#screen_shot1')

        for (var i = 0; i < this.$refs.file.files.length; i++) {
          let file = this.$refs.file.files[i]
          formData.append('cv[' + i + ']', file)
        }

        formData.append('first_name', vm.first_name)
        formData.append('last_name', vm.last_name)
        formData.append('country', vm.country)
        formData.append('email', vm.email)
        // formData.append("cv",  typeof cv1.files[0] !="undefined" ? cv1.files[0] : "");
        // formData.append("screen_shot", [vm.imageList]);
        formData.append('whatsapp_num', vm.whatsapp_num)
        formData.append('phone', vm.phone)
        this.formOverlay = true
        axios
          .post(url, formData)
          .then((response) => {
            this.formOverlay = false
            // console.log("data::", response.data);
            vm.$toast.success(response.data.message, {
              position: 'top-right',
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
            ;(vm.first_name = ''),
              (vm.last_name = ''),
              (vm.country = null),
              (vm.email = ''),
              (vm.phone = ''),
              (vm.whatsapp_num = ''),
              (vm.cv = null),
              (vm.screenShot = '')
            vm.imageList = []
            vm.$store.commit('SET_All_STUDENT', true)
            vm.getStudent()
            // vm.$getStudent();
            vm.$refs.cancel.click()
          })
          .catch((errors) => {
            this.formOverlay = false

            if (errors)
              this.$toast.error(errors.response.data.errors, {
                position: 'top-right',
                closeButton: 'button',
                icon: true,
                rtl: false,
              })
          })
      }
    },
    uploadImageSuccess(formData, index, fileList) {
      console.log(formData, 'index:', index, fileList, 'upload success')
      this.imageList.push(fileList[index].path)
    },
    // beforeRemove(index, done, fileList) {
    //   console.log("index:", index, done, fileList, "before remove");
    // },
    editImage(formData, index, fileList) {
      console.log(formData, 'index:', index, fileList, 'edit image')
    },
    dataChange(data) {
      console.log(data, 'dataChange')
    },
  },
}
</script>
<style lang="scss"></style>
