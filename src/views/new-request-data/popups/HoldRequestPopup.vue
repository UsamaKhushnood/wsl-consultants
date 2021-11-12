<template>
  <div>
    <b-modal
      :id="'hold-request-modal' + propsindex"
      title="Confirmation"
      header-bg-variant="danger"
      header-text-variant="light"
      centered
      hide-footer
    >
      <template #default="{hide}">
        <div class="modal-body">
          <h4>Select Reason for hold</h4>
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <div class="row mt-4 mr-2 justify-content-end">
            <b-button variant="dark" class="mr-2" squared @click="hide"
              >Cancel</b-button
            >
            <b-button variant="danger" squared @click="hide"
              >Set on Hold</b-button
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
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Select Reason", disabled: true },
        { value: "a", text: "reason" },
        { value: "b", text: "reason" },
        { value: "c", text: "reason" },
        { value: "d", text: "reason" },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
