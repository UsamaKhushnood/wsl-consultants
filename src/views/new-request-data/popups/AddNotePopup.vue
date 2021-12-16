<template>
  <div>
    <b-modal
      :id="'add-note-modal' + propsindex"
      title="Add Note"
      header-bg-variant="primary"
      header-text-variant="light"
      centered
      hide-footer
    >
      <template #default="{hide}">
        <div class="modal-body">
          <div>
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Enter Important Notes about the Student"
              rows="5"
            ></b-form-textarea>
          </div>
          <div class="row mt-4 mr-2 justify-content-end">
            <b-button variant="dark" ref="cancel" class="mr-2" squared @click="hide"
              >Cancel</b-button
            >
            <b-button variant="primary" squared @click="addNote"
              >Add Note</b-button
            >
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  props: ["propsindex", "item"],
  computed: {
    ...mapGetters(["getSelectedStudentId"]),
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    addNote() {
      const vm = this;
      axios
        .post(
          process.env.VUE_APP_API_URL +
            "/admin/notes" ,
            {
              note:vm.text,
              student_id:vm.getSelectedStudentId,
            }
        )
        .then((response) => {
            vm.$refs.cancel.click()
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        })
        .catch((errors) => {
          var err = "";
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email;
          }
        });
    },
  },
};
</script>
<style lang="scsss"></style>
