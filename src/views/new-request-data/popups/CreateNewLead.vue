<template>
  <div class="cerate-new-lead-popup">
    <b-modal
      :id="'create-lead-modal'"
      title="Create New Lead"
      header-bg-variant="dark"
      header-text-variant="light"
      centered
    >
      <template #default>
        <div class="modal-body">
          <form class="form-group">
            <div class="row">
              <div class="col-6">
                <div class="form-element">
                  <label for="agentFirstName">First Name:</label>
                  <input type="text" id="agentFirstName" />
                </div>
              </div>
              <div class="col-6">
                <div class="form-element">
                  <label for="agentFirstName">Last Name:</label>
                  <input type="text" id="agentFirstName" />
                </div>
              </div>
            </div>
            <div class="form-element">
              <label for="agentFirstName">Preferred Country:</label>
              <input type="text" id="agentFirstName" />
            </div>
            <div class="form-element">
              <label for="agentFirstName">Phone Number:</label>
              <input type="text" id="agentFirstName" />
            </div>
            <div class="form-element">
              <label for="agentFirstName">Whatsapp Number:</label>
              <input type="text" id="agentFirstName" />
            </div>
            <div class="form-element">
              <label for="agentFirstName">Email:</label>
              <input type="text" id="agentFirstName" />
            </div>
            <div class="form-element">
              <label for="agentFirstName">Student CV:</label>
              <input type="file" id="agentFirstName" />
            </div>
          </form>
        </div>
      </template>
      <template #modal-footer="{hide}">
        <div>
          <div class="row mt-4 mr-2 justify-content-end">
            <b-button variant="dark" class="mr-2" squared @click="hide"
              >Cancel</b-button
            >
            <b-button variant="success" squared @click="hide">Create</b-button>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
