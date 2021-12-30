<template>
  <div class="student-form-page mt-5 ">
    <form class="form-group pb-5 position-relative" id="formStudent">
      <div class="row bg-white p-5">
        <div class="col-md-12 mb-4">
          <div class="d-flex align-items-center">
            <div class="mr-3">
              <img src="@/assets/logo.png" width="80" />
            </div>
            <div>
              <h3 class="mb-0">Student Assessment Form</h3>
              <p class="mb-0">Fill out the form carefully for registration</p>
            </div>
            <b-button
              v-if="getUser.id"
              variant="success"
              @click="getUrl()"
              class="w-25 mt-4 ml-auto "
              squared
              >Copy Url</b-button
            >
          </div>
          <hr />
        </div>
        <div class="col-md-6">
          <div class="form-element">
            <label for="fname">First Name</label>
            <input type="text" v-model="first_name" id="fname" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-element">
            <label for="lname">Last Name</label>
            <input type="text" v-model="last_name" id="lname" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="email">Email</label>
            <input type="email" v-model="email" id="email" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="phone">Phone Number</label>
            <input type="text" v-model="phone" id="phone" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="whatsapp">Whatsapp Number</label>
            <input type="text" v-model="whatsapp_num" id="whatsapp" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="preferredCountry">Preffered Country</label>
            <!-- <b-form-select
              id="preferredCountry"
              @change="getCities()"
              :options="options"
            ></b-form-select> -->
            <b-form-select
              required
              v-model="country_name"
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
        </div>
        <div class="col-12 mt-3 mb-0">
          <hr />
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="qualification">Qualification</label>
            <input type="text" v-model="qualification" id="qualification" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="passing">Passing year</label>
            <input type="text" v-model="passing" id="passing" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="majorSubject">Major Subject</label>
            <input type="text" v-model="major_sub" id="majorSubject" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="cgpa">CGPA/Percentage</label>
            <input type="text" v-model="cgpa" id="cgpa" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="occupation">Occupation</label>
            <input type="text" v-model="occupation" id="occupation" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="city">City</label>
            <b-form-select
              id="city"
              v-model="city_name"
              :options="cities_options"
            ></b-form-select>
          </div>
        </div>
        <div class="col-12 mt-3 mb-0">
          <hr />
        </div>
        <div class="col-md-12 mt-2">
          <div class="form-element">
            <label for="cv">Upload your CV</label>
            <input
              type="file"
              id="cv"
              name="test"
              @change="changeBtnStatus()"
              accept=".pdf,.doc"
            />
            <!-- <VueFileAgent
              ref="vueFileAgent"
              :theme="'list'"
              :multiple="true"
              :deletable="true"
              :meta="true"
              :accept="'.pdf'"
              :maxSize="'10MB'"
              :maxFiles="14"
              :helpText="'Choose  pdf files'"
              :errorText="{
                type: 'Invalid file type. Only images or zip Allowed',
                size: 'Files should not exceed 10MB in size',
              }"
              @select="filesSelected($event)"
              @beforedelete="onBeforeDelete($event)"
              @delete="fileDeleted($event)"
              v-model="fileRecords"
            ></VueFileAgent> -->
          </div>
        </div>
        <div class="col-md-12 mt-3">
          <div class="form-element">
            <label for="query">Any Query</label>
            <textarea type="textarea" v-model="question" id="query" rows="6">
            </textarea>
          </div>
        </div>
        <div class="col-md-12">
          <b-button
            variant="success"
            @click="addStudent()"
            class="w-25 mt-4 ml-auto d-block"
            squared
            >Submit</b-button
          >
        </div>
      </div>
      <b-overlay :show="formOverlay" no-wrap class="overlayModal"> </b-overlay>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import pakistan_cities from "./cities";
import { getSelectedStudentMix } from '@/mixins/getSelectedStudent.js'
export default {
  mixins:[getSelectedStudentMix],
  data() {
    return {
      selected: null,
      showBtn: false,
      fileRecords: "",
      uploadUrl: "",
      uploadHeaders: { "X-Test-Header": "vue-file-agent" },
      fileRecordsForUpload: [], // maintain an upload queue
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      whatsapp_num: null,
      qualification: null,
      passing: null,
      cgpa: null,
      passing: null,
      major_sub: null,
      occupation: null,
      question: null,
      cities: null,
      countries: null,
      country_name: null,
      city_name: null,
      options: [],
      cities_options: [],
      formOverlay: false,
      uploadHeaders: { "X-Test-Header": "vue-file-agent" },
      // options: ["Lahore", "Karachi", "Islamabad", "Multan"],
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    // 	isDisabled: function(){
    // 	return !this.showBtn;
    // }
  },

  methods: {
    trigger() {
      this.$refs.sendReq.click();
    },
    changeBtnStatus() {
      this.showBtn =true;
    },
    resetfeilds() {
      let vm =this;
       vm.first_name = ''; 
       vm.last_name = ''; 
      vm.country = ''; 
       vm.qualification = ''; 
       vm.cgpa = ''; 
       vm.major_sub = ''; 
       vm.passing = ''; 
       vm.occupation = ''; 
       vm.question = ''; 
       vm.country = ''; 
        vm.city = ''; 
        vm.email = ''; 
       vm.cv = ''; 
       vm.whatsapp_num = ''; 
       vm.phone = ''; 
    },
    addStudent() {
      // this.uploadFiles();
      this.formOverlay = true;
      let call_agent_id = "";
      const vm = this;
      let url = "";
      if (vm.getUser.type) {
        url =
          vm.getUser.type == "admin"
            ? process.env.VUE_APP_API_URL + "/admin/students"
            : process.env.VUE_APP_API_URL + "/call-agent/students";
      } else {
        url = process.env.VUE_APP_API_URL + "/students";
      }
       var formData = new FormData();
      var cv = document.querySelector("#cv");
      formData.append("first_name", vm.first_name);
      formData.append("last_name", vm.last_name);
      formData.append("qualification", vm.qualification);
      formData.append("cgpa", vm.cgpa);
      formData.append("major_sub", vm.major_sub);
      formData.append("passing_year", vm.passing);
      formData.append("occupation", vm.occupation);
      formData.append("question", vm.question);
      formData.append("country", vm.country_name);
      formData.append("city", vm.city_name);
      formData.append("email", vm.email);
      formData.append("whatsapp_num", vm.whatsapp_num);
      formData.append("phone", vm.phone);
      formData.append("call_agent_id", this.$route.query.call_agent_id
            ? atob(this.$route.query.call_agent_id)
            : vm.getUser.id);
            if(typeof cv.files[0] != "undefined"){
              console.log(typeof cv.files[0])
              formData.append("cv", cv.files ? cv.files[0] : "");
            }
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
     
          vm.formOverlay = false;
          vm.BtnStatus = false;
          // vm.$store.commit("SET_SPINNER", false);
          vm.getStudent();
          vm.$toast.success("Add Student Successfully", {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          vm.resetfeilds()
          vm.$refs.formStudent.reset() 
          // vm.$store.commit('SET_SPINNER',false);
        })
        .catch((errors) => {
          vm.formOverlay = false;
          if(errors.response){
            vm.$toast.error(errors.response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          }
          // vm.$store.commit('SET_SPINNER',false);
        });
    },
    sendTo(url) {
      window.open(url, "_blank");
    },

    getUrl() {
      const vm = this;
      // first name will replace with password

      var credentials = `${process.env.VUE_APP_URL +
        "form?call_agent_id=" +
        btoa(this.getUser.id)}`;
      navigator.clipboard.writeText(credentials).then(
        function() {
          vm.isModalVisible = false;
          vm.$toast.success("Successfully Copied", {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
         
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
    handleCvUpload(event) {
      let vm = this;
      var image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        vm.fileRecords = e.target.result;
        console.log(this.fileRecords);
      };
    },
    uploadFiles: function() {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.upload(
        this.uploadUrl,
        this.uploadHeaders,
        this.fileRecordsForUpload
      );
      this.fileRecordsForUpload = [];
    },
    deleteUploadedFile: function(fileRecord) {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.deleteUpload(
        this.uploadUrl,
        this.uploadHeaders,
        fileRecord
      );
    },
    filesSelected: function(fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter(
        (fileRecord) => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords
      );
    },
    onBeforeDelete: function(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
        this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
        if (k !== -1) this.fileRecords.splice(k, 1);
      } else {
        if (confirm("Are you sure you want to delete?")) {
          this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
        }
      }
    },
    fileDeleted: function(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        this.deleteUploadedFile(fileRecord);
      }
    },
  },
  created() {
    //  this.$store.commit('SET_SPINNER',false);
    // this.getCountries();
    this.cities_options = pakistan_cities;
    if (!this.$route.query.call_agent_id) {
      if (!this.getUser) {
        this.$router.push({ path: "/login" });
      }
    }
  },
};
</script>
<style lang="scss">
.student-form-page {
  width: 800px;
  margin: 0 auto;
}
button.btn.w-25.mt-4.ml-auto.btn-success.rounded-0 {
  float: right;
}
</style>
