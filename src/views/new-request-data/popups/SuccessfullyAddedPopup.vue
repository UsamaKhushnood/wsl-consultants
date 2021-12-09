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
            @click="assignedTo"
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
import axios from 'axios'
import { mapGetters } from 'vuex';
export default {
  props: ["propsindex"],
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Agents", disabled: true },
        // { value: "a", text: "Agent Name" },
        // { value: "b", text: "Agent Name" },
        // { value: "c", text: "Agent Name" },
        // { value: "d", text: "Agent Name" },
      ],
    };
  },
  computed:{
    ...mapGetters(['getSelectedStudent','getUser'])
  },
   methods:{
    getAgents() {
      const vm = this;
      axios
        .get(process.env.VUE_APP_API_URL +"/admin/sale-agents")
        .then((response) => {
          console.log("data::", response.data.data);
          let arr = response.data.data;
          arr.map(function(value, key) {
            let d = {
              value:value.id,
              text:value.first_name,
            }
            vm.options.push(d);
          });
         
        })
        .catch((errors) => {
          var err = "";
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email;
          }
        });
    },
    assignedTo() {
      const vm = this;
      axios
        .post(process.env.VUE_APP_API_URL +"/admin/assigned/"+this.getSelectedStudent.id,{
          assigned_to: vm.selected,
        })
        .then((response) => {
          console.log("data::", response.data);
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
        })
        .catch((errors) => {
        var err =''
          if(errors.response.data.errors.email){
            err+=errors.response.data.errors.email
          }
          if(errors.response.data.errors.password){
            err+=errors.response.data.errors.password
          }
          if(errors)
          this.$toast.error(err, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        });
    },
  },
  created(){
    if(this.getUser.type =='admin'){
      this.getAgents()
    }
  }
};
</script>
<style lang="scsss"></style>
