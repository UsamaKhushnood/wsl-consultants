import { mapGetters } from "vuex";
export const getSelectedStudent = {
  computed: {
    ...mapGetters(["getSelectedStudent", "getUser"]),
  },
  data(){
    return{
      selectedStudentMix:''
    }
  },
  methods:{
   
  },
  mounted() {
    console.log("mixin is working", this.getSelectedStudent);
  },
};
