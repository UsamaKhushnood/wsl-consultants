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
            <input type="text" id="fname" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-element">
            <label for="lname">Last Name</label>
            <input type="text" id="lname" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="whatsapp">Whatsapp Number</label>
            <input type="text" id="whatsapp" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="city">City</label>
            <b-form-select
              id="city"
              v-model="selected"
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
            <input type="text" id="qualification" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="passing">Passing year</label>
            <input type="text" id="passing" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="majorSubject">Major Subject</label>
            <input type="text" id="majorSubject" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="cgpa">CGPA/Percentage</label>
            <input type="text" id="cgpa" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="occupation">Occupation</label>
            <input type="text" id="occupation" />
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-element">
            <label for="preferredCountry">Preffered Country</label>
            <b-form-select
              id="preferredCountry"
              v-model="selected"
              :options="options"
            ></b-form-select>
          </div>
        </div>
        <div class="col-12 mt-3 mb-0">
          <hr />
        </div>
        <div class="col-md-12 mt-2">
          <div class="form-element">
            <label for="cv">Upload your CV</label>
            <VueFileAgent v-model="filesData"></VueFileAgent>
          </div>
        </div>
        <div class="col-md-12 mt-3">
          <div class="form-element">
            <label for="query">Any Query</label>
            <textarea type="textarea" id="query" rows="6"> </textarea>
          </div>
        </div>
        <div class="col-md-12">
          <b-button variant="success" class="w-25 mt-4 ml-auto d-block" squared
            >Submit</b-button
          >
        </div>
      </div>
    </form>
  </div>
</template>
<script>
// import VueFileAgent from "vue-file-agent";
// import VueFileAgentStyles from "vue-file-agent/dist/vue-file-agent.css";
export default {
  // components: { VueFileAgent },
  data() {
    return {
      selected: null,
      filesData: null,
      options: ["Lahore", "Karachi", "Islamabad", "Multan"],
    };
  },
};
</script>
<style lang="scss">
.student-form-page {
  width: 800px;
  margin: 0 auto;
}
</style>
