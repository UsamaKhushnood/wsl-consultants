import { mapGetters } from "vuex";
export const getSelectedStudent = {
  computed: {
    ...mapGetters(["getSelectedStudent", "getUser"]),
  },
  mounted() {
    console.log("mixin is working", this.getSelectedStudent);
  },
};
