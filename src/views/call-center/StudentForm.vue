<template>
  <div class="student-form-page mt-5">
    <form class="form-group pb-5">
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
            <b-form-select
              id="preferredCountry"
              @change="getCities()"
              v-model="country_name"
              :options="options"
            ></b-form-select>
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
            <VueFileAgent
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
            ></VueFileAgent>
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
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      selected: null,
      fileRecords: [],
      uploadUrl: '',
      uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
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
      uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
      // options: ["Lahore", "Karachi", "Islamabad", "Multan"],
    };
  },

  methods: {
    trigger() {
      this.$refs.sendReq.click();
    },
    addStudent() {
      this.uploadFiles();
      const vm = this;
      axios
        .post(process.env.VUE_APP_API_URL + "/students", {
          cv: this.filesData.tusUpload.url,
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
          whatsapp_num: this.whatsapp_num,
          qualification: this.qualification,
          passing_year: this.passing,
          cgpa: this.cgpa,
          major_sub: this.major_sub,
          occupation: this.occupation,
          question: this.question,
          city: this.city_name,
          country: this.country_name,
        })
        .then((response) => {
          console.log("data::", response.data);
          // vm.$store.commit("SET_SPINNER", false);
          vm.$toast.success("Add Student Successfully", {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          // vm.$store.commit('SET_SPINNER',false);
        })
        .catch((errors) => {
          console.log('c',errors.response.data.message)
            vm.$toast.error(errors.response.data.message, {
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
    getCities() {
      const vm = this;
      axios
        .post(process.env.VUE_APP_API_URL +"/cities",{
         'country_name' :vm.country_name 
        })
        .then((response) => {
          console.log("data::", response.data);
          vm.cities_options = response.data.data
        })
        .catch((errors) => {
          var err = "";
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email;
          }
        });
    },
    getCountries() {
      const vm = this;
      axios
        .get(process.env.VUE_APP_API_URL + "/countries")
        .then((response) => {
          console.log("data::", response.data.data);
          const token = response.data.token;
          // vm.$store.commit("SET_SPINNER", false);
          vm.options = response.data.data
          // vm.$router.push({ name: "Dashboard" });
        })
        .catch((errors) => {
          var err = "";
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email;
          }
        });
    },
      uploadFiles: function () {
        // Using the default uploader. You may use another uploader instead.
        this.$refs.vueFileAgent.upload(this.uploadUrl, this.uploadHeaders, this.fileRecordsForUpload);
        this.fileRecordsForUpload = [];
      },
      deleteUploadedFile: function (fileRecord) {
        // Using the default uploader. You may use another uploader instead.
        this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord);
      },
      filesSelected: function (fileRecordsNewlySelected) {
        var validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
        this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
      },
      onBeforeDelete: function (fileRecord) {
        var i = this.fileRecordsForUpload.indexOf(fileRecord);
        if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
          this.fileRecordsForUpload.splice(i, 1);
          var k = this.fileRecords.indexOf(fileRecord);
          if (k !== -1) this.fileRecords.splice(k, 1);
        } else {
          if (confirm('Are you sure you want to delete?')) {
            this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
          }
        }
      },
      fileDeleted: function (fileRecord) {
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
    this.getCountries()
  }

};
</script>
<style lang="scss">
.student-form-page {
  width: 800px;
  margin: 0 auto;
}
</style>
