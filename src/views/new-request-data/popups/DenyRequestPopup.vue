<template>
  <div>
    <b-modal
      :id="'deny-request-modal' + propsindex"
      title="Confirmation"
      header-bg-variant="danger"
      header-text-variant="light"
      centered
      hide-footer
    >
      <template #default="{hide}">
        <div class="modal-body">
          <h4>Are you Sure?</h4>
          <div class="row mt-4 mr-2 justify-content-end">
            <b-button variant="dark" class="mr-2" squared @click="hide"
              >Cancel</b-button
            >
            <b-button variant="danger" squared @click="hide"
              >Confirm Delete</b-button
            >
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ["propsindex"],
};
</script>
<style lang="scsss"></style>
