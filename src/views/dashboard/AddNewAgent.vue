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
          class="col-md-6 bg-white pt-5 px-4 pb-2"
          style="border-radius: 5px;"
        >
          <form>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-element">
                    <label for="agentFirstName">First Name:</label>
                    <input type="text" id="agentFirstName" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-element">
                    <label for="agentLastName">Last Name:</label>
                    <input type="text" id="agentLastName" />
                  </div>
                </div>
              </div>
              <div class="form-element">
                <label for="email">Enter Email:</label>
                <input type="text" id="email" />
              </div>
              <div class="form-element">
                <label for="password">Enter password:</label>
                <input type="text" id="=password" />
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
                <b-button variant="dark" class="ml-auto mr-3 w-25"
                  >Create</b-button
                >
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <div class="agentsList ml-2 p-4 py-2 bg-white">
            <h2 class="text-center mb-4">Agents List</h2>
            <div
              class="agent row p-3 bg-gray-100 mb-2 align-items-center"
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
    };
  },
};
</script>
