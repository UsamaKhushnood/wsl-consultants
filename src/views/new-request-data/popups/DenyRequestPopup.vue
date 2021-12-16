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
            <b-button variant="dark" ref="cancel" class="mr-2" squared @click="hide"
              >Cancel</b-button
            >
            <b-button variant="danger" squared @click="deleteStudent"
              >Confirm Delete</b-button
            >
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex';
export default {
  props: ["propsindex","item"],
  computed:{
    ...mapGetters(['getSelectedStudentId'])
  },

  methods:{
      deleteStudent() {
      const vm = this;
      axios
        .delete(process.env.VUE_APP_API_URL +"/admin/students/"+this.getSelectedStudentId)
        .then((response) => {
             vm.$refs.cancel.click();
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
  }

};
</script>
<style lang="scsss"></style>
