<template>
  <div>
    <b-modal
      :id="'add-note-modal' + propsindex"
      title="Add Note"
      header-bg-variant="primary"
      header-text-variant="light"
      centered
      scrollable
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
          <div class="form-element">
            <label for="agentFirstName" class="label-divider"
              ><span class="labelTxt">Add Screenshots</span></label
            >
            <!-- check documentation here  -->
            <!-- https://vuejsexamples.com/a-simple-upload-multiple-image-component-for-vuejs/ -->
            <div class="text-center">
              <VueUploadMultipleImage
                dragText="drag and drop files here"
                browseText="or select"
                primaryText="Default"
                markIsPrimaryText="Set as default"
                popupText="This image will be displayed as default"
                dropText="Drop your files here..."
                :data-images="uploadedImages"
                @upload-success="uploadImageSuccess"
                @edit-image="editImage"
                @data-change="dataChange"
              />
              <p class="badge mb-0 text-capitalize text-secondary">
                max uplaod limit is 5
              </p>
            </div>
          </div>
            <div class="form-element">
              <label for="cv">Student CV:</label>
              <input
                type="file"
                ref="file"
                multiple
                required
                id="cv"
              />
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
            <b-button variant="primary" squared @click="addNote"
              >Add Note</b-button
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
import axios from 'axios'
import { mapGetters } from 'vuex'
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import { getSelectedStudentMix } from '@/mixins/getSelectedStudent.js'
export default {
  props: ['propsindex', 'item'],
  mixins:[getSelectedStudentMix],
  computed: {
    ...mapGetters(['getSelectedStudentId', 'getUser']),
  },
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      text: '',
      uploadedImages: [],
      imageList: [],
      formOverlay: false,
    }
  },
  methods: {
    addNote() {
      const vm = this
      if (vm.text == '' && vm.imageList.length == 0 && this.$refs.file.files.length < 0) {
        alert('please Add one Value')
        return
      } else {
        this.formOverlay = true
        let url = vm.getUser.type == 'admin' ? '/admin/notes' : '/notes'

        var formData = new FormData();
      formData.append("student_id", vm.getSelectedStudentId);

        for( var i = 0; i < this.$refs.file.files.length; i++ ){
                let file = this.$refs.file.files[i];
                formData.append('cv[' + i + ']', file);
            }
        //  for multi cvs
        if(this.$refs.file.files.length > 0){
          axios
          .post(process.env.VUE_APP_API_URL + url, formData)
          .then((response) => {
              vm.$refs.cancel.click()
              this.formOverlay = false
              vm.$toast.success('Notes Add Successfully', {
                position: 'top-right',
                closeButton: 'button',
                icon: true,
                rtl: false,
              })
              vm.text = ''
              vm.imageList = []
              vm.getStudent()
          })

        }
        
        // for the screenshot
        axios
          .post(process.env.VUE_APP_API_URL + url, {
            student_id: vm.getSelectedStudentId,
            note: vm.text,
            screen_shot: vm.imageList,
          })
          .then((response) => {
            vm.$refs.cancel.click()
            this.formOverlay = false
            vm.$toast.success('Notes Add Successfully', {
              position: 'top-right',
              closeButton: 'button',
              icon: true,
              rtl: false,
            })

            vm.text = ''
            vm.imageList = []
            vm.getStudent()
          })
          .catch((errors) => {
            var err = ''
           
          })
      }
    },
    uploadImageSuccess(formData, index, fileList) {
      console.log(formData, 'index:', index, fileList, 'upload success')
      this.imageList.push(fileList[index].path)
    },
    // beforeRemove(index, done, fileList) {
    //   console.log("index:", index, done, fileList, "before remove");
    // },
    editImage(formData, index, fileList) {
      console.log(formData, 'index:', index, fileList, 'edit image')
    },
    dataChange(data) {
      console.log(data, 'dataChange')
    },
  },
}
</script>
<style lang="scss"></style>
