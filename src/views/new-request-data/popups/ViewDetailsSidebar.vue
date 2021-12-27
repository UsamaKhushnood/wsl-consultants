<template>
  <div>
    <b-sidebar
      :id="'view-details-sidebar' + propsindex"
      class="viewProjectSidebar rightSidebar"
      :class="'viewProjectSidebar' + propsindex"
      backdrop-variant="dark"
      backdrop
      shadow
      no-header
      bg-variant="white"
      right
    >
      <template #default="{ hide }">
        <div
          class="d-flex text-light align-items-center justify-content-center px-3 py-2 modalHeader bg-dark"
        >
          <b-button size="sm" ref="model_hide" @click="hide"
            ><i class="fa fa-arrow-circle-right"></i
          ></b-button>
          <h4 class="mx-auto">Student Details</h4>
        </div>
        <div
          class="d-flex align-items-center justify-content-center bg-danger vd_white headerSecondary"
        >
          <div class="col-md-2 pdng5-0 col-md-offset-3 text-center">
            <h6 class="mrgn0">
              Student Form ID:
              <span>{{ getSelectedStudent.id }}</span>
            </h6>
          </div>
          <div class="col-md-2 pdng5-0 text-center">
            <h6 class="mrgn0">
              Preferred Country:
              <span>{{ getSelectedStudent.country }}</span>
            </h6>
          </div>
          <div class="col-md-2 pdng5-0 text-center">
            <h6 class="mrgn0">
              <!-- Status: -->
              <!-- <span>{{getSelectedStudent.status}}</span> -->
            </h6>
          </div>
        </div>

        <!-- Sidebar Body  -->
        <div class="modal-body h100">
          <div class="row mr-0">
            <div class="col-sm-3 text-center">
              <div class="userAvatar vd_bg-light-grey">
                <div class="avatarBackground">
                  <img src="@/assets/avatar/avatarBg.png" alt="" />
                </div>
                <div class="userImageWrapper">
                  <b-avatar variant="danger" size="80"></b-avatar>
                </div>

                <h4>
                  {{
                    getSelectedStudent.first_name +
                      " " +
                      getSelectedStudent.last_name
                  }}
                </h4>
              </div>

              <!-- Panel widget start -->
              <b-card
                border-variant="dark"
                header="Contact Details"
                header-bg-variant="dark"
                header-text-variant="white"
                align="center"
                class="mt-2 mb-2"
              >
                <b-card-text>
                  <a
                    class="btn btn-success btn-sm"
                    :href="
                      'https://api.whatsapp.com/send?phone=' +
                        getSelectedStudent.whatsapp_num
                    "
                    target="_blank"
                    v-b-tooltip.hover
                    title="Click To Open Whatsapp"
                  >
                    <i class="fa fa-whatsapp"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-sm ml-2"
                    :href="'mailto:' + getSelectedStudent.email"
                    target="_blank"
                    v-b-tooltip.hover
                    title="Click To Send Email"
                  >
                    <i class="far fa-envelope"></i>
                  </a>

                  <a
                    class="btn btn-danger btn-sm ml-2"
                    :href="'tel:' + getSelectedStudent.phone"
                    v-b-tooltip.hover
                    title="Click To Make Phone Call"
                  >
                    <i class="fa fa-phone-alt"></i>
                  </a>
                </b-card-text>
              </b-card>
              <b-card
                v-show="getSelectedStudent.student_info != null"
                border-variant="dark"
                header="Student Query"
                header-bg-variant="danger"
                header-text-variant="white"
                align="center"
                class="mt-2 mb-2"
              >
                <b-card-text>
                  <p>
                    {{
                      getSelectedStudent.student_info == null
                        ? ""
                        : getSelectedStudent.student_info.query
                    }}
                  </p>
                </b-card-text>
              </b-card>
              <b-card
                v-show="
                  getSelectedStudent.notes
                    ? getSelectedStudent.notes.length > 0
                    : false
                "
                border-variant="primary"
                header="Student Notes"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center"
                class="mt-2 mb-2"
              >
                <b-card-text>
                  <p
                    v-for="(data, index) in getSelectedStudent.notes"
                    :key="index"
                  >
                    {{ data.note }}
                  </p>
                </b-card-text>
              </b-card>

              <!-- Panel widget end -->
            </div>
            <div class="col-sm-9 ">
              <div
                class="row messageArea vd_bd-light-grey panel pdng10 align-items-center border"
              >
                <div class="col-sm-4 align-self-baseline">
                  <h6
                    class="font-bold bg-warning d-flex justify-content-center p-1 radius-10 text-dark"
                    style="width: fit-content"
                    v-if="getSelectedStudent.created_at"
                  >
                    Created Date:
                  </h6>
                  <p v-if="getSelectedStudent.created_at">
                    {{ getSelectedStudent.created_at }}
                  </p>
                </div>
                <div class="col-sm-4 brdLeft" v-if="getUser.type == 'admin'">
                  <h6
                    class="font-bold bg-primary d-flex justify-content-center p-1 radius-10 text-white"
                    style="width: fit-content"
                  >
                    Call Center
                  </h6>

                  <div class="text-center mb-2">
                    <b-avatar variant="dark" size="80">
                      {{
                        "Agent Name"
                          .split(" ")
                          .map((i) => i.charAt(0))
                          .join("")
                          .toUpperCase()
                      }}</b-avatar
                    >
                  </div>
                  <h4 class="text-center">{{getSelectedStudent.call_agent.first_name}}</h4>
                  <div class="text-center">
                    <router-link
                      active-class="c-active"
                      :to="
                        '/dashboard/agents/' + getSelectedStudent.call_agent_id
                      "
                      @click.native="getCurrentAgent(getSelectedStudent.call_agent)"
                      class="c-sidebar-nav-link"
                      target="_self"
                    >
                      <b-button class="mrgn0 text-center btn-sm" variant="dark">
                        Agent Profile
                      </b-button>
                    </router-link>
                  </div>
                </div>
                <div
                  class="col-sm-4 brdLeft"
                  v-if="getUser.type == 'admin' && getSelectedStudent.agent"
                >
                  <h6
                    class="font-bold bg-warning d-flex justify-content-center p-1 radius-10 text-dark"
                    style="width: fit-content"
                  >
                    Assing To
                  </h6>
                  <div class="text-center mb-2">
                    <b-avatar variant="dark" size="80">
                      {{
                        getSelectedStudent.agent
                          ? getSelectedStudent.agent.first_name
                          : "Agent Name"
                              .split(" ")
                              .map((i) => i.charAt(0))
                              .join("")
                              .toUpperCase()
                      }}</b-avatar
                    >
                  </div>
                  <h4 class="text-center">
                    {{ getSelectedStudent.agent.first_name }}
                  </h4>
                  <div class="text-center">
                    <router-link
                      active-class="c-active"
                      :to="
                        '/dashboard/agents/' + getSelectedStudent.assigned_to
                      "
                      class="c-sidebar-nav-link"
                      target="_self"
                    >
                      <b-button class="mrgn0 text-center btn-sm" variant="dark">
                        Agent Profile
                      </b-button>
                    </router-link>
                  </div>
                </div>
              </div>

              <hr class="mrgn10-0" />
              <h5>Student Email</h5>
              <p>{{ getSelectedStudent.email }}</p>
              <h5>Student Phone</h5>
              <p>{{ getSelectedStudent.phone }}</p>
              <h5>Cv</h5>
              <div v-if="getSelectedStudent.student_info">
                <h5>Qualification</h5>
                <p>{{ getSelectedStudent.student_info.qualification }}</p>
                <h5>CGPA</h5>
                <p>{{ getSelectedStudent.student_info.cgpa }}</p>
                <h5>Major Subjects</h5>
                <p>{{ getSelectedStudent.student_info.major_sub }}</p>
                <h5>Passing Year</h5>
                <p>{{ getSelectedStudent.student_info.passing_year }}</p>
              </div>
              <div v-if="getSelectedStudent.cv" class="mb-4">
                <a
                  :href="ImageUrl + '/student/' + getSelectedStudent.cv"
                  download
                  class="mb-4"
                  >Download CV</a
                >
              </div>
              <h5 v-if="getSelectedStudent.screen_shot">Screenshot</h5>
              <div>
                <div class="screenshotsGallery">
                  <a
                    v-for="(data, index) in getSelectedStudent.screen_shots"
                    :key="index"
                    :href="ImageUrl + '/screen-shot/' + data.screen_shot"
                    target="_blank"
                    class="position-relative"
                    v-b-tooltip.hover
                    title="Click to view full"
                  >
                    <div
                      class="screenShotWrapper"
                      v-b-modal="'imgModal' + propsindex"
                      :style="{
                        backgroundImage: `url(${ImageUrl}/screen-shot/${data.screen_shot})`,
                      }"
                    ></div>
                    <b-button
                      variant="outline-danger"
                      size="sm"
                      class="screenShotTrash"
                      @click.prevent="deleteScreenShot(data.id)"
                    >
                      <i class="fa fa-trash"></i>
                    </b-button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
import { getSelectedStudentMix } from "@/mixins/getSelectedStudent.js";
import usersData from "./userData";
import axios from "axios";
export default {
  props: ["propsindex"],
  mixins: [getSelectedStudentMix],
  components: {},
  data: () => ({
    items: usersData,
    gallery: [
      {
        src: "../../../assets/images/auth-background.png",
        description: "Star Night Sky Ravine by Mark Basarab, from Unsplash.",
        alt: "Blue starry night photo.",
        thumbnailWidth: "220px",
      },
      {
        src: "../../../assets/images/auth-background.png",
        description: "Star Night Sky Ravine by Mark Basarab, from Unsplash.",
        alt: "Blue starry night photo.",
        thumbnailWidth: "220px",
      },
      {
        src: "../../../assets/images/auth-background.png",
        description: "Star Night Sky Ravine by Mark Basarab, from Unsplash.",
        alt: "Blue starry night photo.",
        thumbnailWidth: "220px",
      },
      {
        src: "../../../assets/images/auth-background.png",
        description: "Star Night Sky Ravine by Mark Basarab, from Unsplash.",
        alt: "Blue starry night photo.",
        thumbnailWidth: "220px",
      },
    ],
  }),
  computed: {
    // ...mapGetters(["getSelectedStudent", "getUser"]),
    ImageUrl() {
      return process.env.VUE_APP_IMAGE_STORAGE_URL;
    },
  },
  methods: {
    getBadge(status) {
      return status === "Active"
        ? "success"
        : status === "Inactive"
        ? "secondary"
        : status === "Pending"
        ? "warning"
        : status === "Banned"
        ? "danger"
        : "primary";
    },
    getCurrentAgent(data){
      this.$store.commit("SET_CURRENT_AGENT", null);
      this.$store.commit("SET_CURRENT_AGENT", data);
    },
    deleteScreenShot(id) {
      const vm = this;
      var url = "";

      if (vm.getUser.type == "admin") {
        url = "/admin/screen-shot-delete/";
      } else {
        url = "/screen-shot-delete/";
      }
      axios
        .post(process.env.VUE_APP_API_URL + url + id)
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          vm.$getStudent();
          vm.$refs.model_hide.click();
        })
        .catch((errors) => {
          var err = "";
        });
    },
  },
};
</script>
<style lang="scss">
.modalHeader {
  h4 {
    text-transform: uppercase;
  }
}

.headerSecondary h6 {
  font-size: 13px;
  padding: 5px 0;
}

.screenshotsGallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  column-gap: 10px;
  row-gap: 10px;
}

.screenShotWrapper {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2),
    0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12) !important;
}

.screenShotTrash {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 25px;
  height: 25px;
  font-size: 13px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
