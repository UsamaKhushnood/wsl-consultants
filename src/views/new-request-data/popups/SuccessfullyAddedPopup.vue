<template>
  <div>
    <b-modal
      :id="'successfully-added-modal' + propsindex"
      header-bg-variant="dark"
      header-text-variant="light"
      centered
      title="Assign To Agent"
    >
      <div class="modal-body">
        <h6>Select an Agent from Dropdown</h6>
        <form method="post">
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <div class="row"></div>
        </form>
      </div>
      <template #modal-footer="{hide}">
        <div class="w-100 d-flex">
          <b-button
            variant="success"
            size="sm"
            @click="hide"
            squared
            class="ml-auto mr-3"
            >Assign</b-button
          >
          <b-button
            variant="dark"
            size="sm"
            class="float-right"
            @click="hide"
            squared
          >
            Close
          </b-button>
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
        { value: null, text: "Agents", disabled: true },
        { value: "a", text: "Agent Name" },
        { value: "b", text: "Agent Name" },
        { value: "c", text: "Agent Name" },
        { value: "d", text: "Agent Name" },
      ],
    };
  },
};
</script>
<style lang="scsss"></style>
