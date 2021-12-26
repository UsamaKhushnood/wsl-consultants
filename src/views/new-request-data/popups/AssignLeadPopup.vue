<template>
  <div>
    <b-modal
      :id="'successfully-added-modal' + propsindex"
      header-bg-variant="dark"
      header-text-variant="light"
      centered
      scrollable
      title="Assign To Agent"
    >
      <div class="modal-body">
        <h6>Select an Agent from Dropdown</h6>
        <form method="post">
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <div class="row"></div>
        </form>
      </div>
      <template #modal-footer="{close}">
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
            ref="cancel"
            class="float-right"
            @click="close"
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
import axios from "axios";
import Vue from "vue";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["getSelectedStudentId", "getUser"]),
  },
  mounted() {
    // Object.keys({'key': 'value'})
    // if (window.UndefinedVariable) {
    //     Object.assign(window.UndefinedVariable, {})
    // }
  },
  methods: {
    getAgents() {
      const vm = this;
      let url =
        vm.getUser.type == "admin" ? "/admin/sale-agents" : "/sale-agents";
      axios
        .get(process.env.VUE_APP_API_URL + url)
        .then((response) => {
          console.log("data::", response.data.data);
          let arr = response.data.data;
          arr.map(function(value, key) {
            let d = {
              value: value.id,
              text: value.first_name,
            };
            vm.options.push(d);
          });
        })
        .catch((errors) => {
          var err = "";
          //  this.$toast.error(errors.response.data.message, {
          //   position: "top-right",
          //   closeButton: "button",
          //   icon: true,
          //   rtl: false,
          // });
        });
    },
    assignedTo() {
      const vm = this;
      let url = vm.getUser.type == "admin" ? "/admin/assigned/" : "/assigned/";
      axios
        .post(process.env.VUE_APP_API_URL + url + this.getSelectedStudentId, {
          assigned_to: vm.selected,
        })
        .then((response) => {
          console.log("data Success::", response.data);
          console.log("data Success::", response.data.message);
          if (response.data.message) {
            Vue.$toast(response.data.message, {
              timeout: 2000,
            });
          } else {
            vm.$toast.error(response.data.error, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          }
          vm.$refs.cancel.click();
        })
        .catch((errors) => {
          // this.$toast.error(errors.response.data.message, {
          //   position: "top-right",
          //   closeButton: "button",
          //   icon: true,
          //   rtl: false,
          // });
        });
    },
  },
  created() {
    this.getAgents();
  },
};
</script>
<style lang="scsss"></style>
