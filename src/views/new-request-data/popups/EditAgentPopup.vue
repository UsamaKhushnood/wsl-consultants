<template>
  <div class="edit-agent-profile">
    <b-modal
      :id="'edit-agent-modal' + propsindex"
      title="Edit Agent"
      header-bg-variant="primary"
      header-text-variant="light"
      centered
      scrollable
      hide-footer
    >
      <template #default="{hide}">
        <div class="modal-body">
          <div class="agent-details">
            <div class="form-element">
              <label for="agentFirstName">Name:</label>
              <input type="text" v-model="agent_name" id="agentFirstName" />
            </div>
            <div class="form-element mt-2">
              <label for="agentFirstName">Email:</label>
              <input type="text" v-model="agent_email" id="agentFirstName" />
            </div>
            <div class="form-element mt-2">
              <label for="agentFirstName">Password:</label>
              <input type="text" v-model="agent_password" id="agentFirstName" />
            </div>
          </div>
          <div class="row mt-4 mr-2 justify-content-end">
            <b-button
              variant="dark"
              ref="cancel"
              class="mr-2"
              squared
              @click="hide"
              >Cancel</b-button
            >
            <b-button variant="primary" squared @click="updateDetails"
              >Update</b-button
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
export default {
  props: ['propsindex'],
  data() {
    return {
      formOverlay: false,
    }
  },
  methods: {
    updateDetails() {
      console.log('updated')
    },
  },
}
</script>
<style lang="scss"></style>
