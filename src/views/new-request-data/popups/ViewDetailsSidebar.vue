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
          <b-button size="sm" @click="hide"
            ><i class="fa fa-arrow-circle-right"></i
          ></b-button>
          <h4 class="mx-auto">Student Details</h4>
        </div>
        <div
          class="d-flex align-items-center justify-content-center bg-danger vd_white headerSecondary"
        >
          <div class="col-md-2 pdng5-0 col-md-offset-3 text-center" >
            <h6 class="mrgn0">
              Student Form ID:
              <span>{{getSelectedStudent.id}}</span>
            </h6>
          </div>
          <div class="col-md-2 pdng5-0 text-center">
            <h6 class="mrgn0">
              Preferred Country:
              <span>{{getSelectedStudent.country}}</span>
            </h6>
          </div>
          <div class="col-md-2 pdng5-0 text-center">
            <h6 class="mrgn0">
              Status:
              <span>{{getSelectedStudent.status}}</span>
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

                <h4>{{ getSelectedStudent.first_name +' '+getSelectedStudent.last_name}}</h4>
              </div>

              <!-- Panel widget start -->
              <b-card
                border-variant="dark"
                header="Contact Details"
                header-bg-variant="dark"
                header-text-variant="white"
                align="center"
                class="mt-2"
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
                border-variant="primary"
                header="Student Notes"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center"
                class="mt-2 mb-2"
              >
                <b-card-text>
                  <p>
                    {{
                      getSelectedStudent.student_info != null
                        ? getSelectedStudent.student_info.query
                        : ""
                    }}
                  </p>
                </b-card-text>
              </b-card>

              <!-- Panel widget end -->
            </div>
            <div class="col-sm-9 ">
              <div
                class="row messageArea vd_bd-light-grey panel pdng10 align-items-center border"
              >
                <div class="col-sm-4"></div>
                <div class="col-sm-4 brdLeft">
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
                  <h4 class="text-center">Agent's Name</h4>
                  <div class="text-center">
                    <b-button class="mrgn0 text-center btn-sm" variant="dark">
                      Agent Profile
                    </b-button>
                  </div>
                </div>
                <div class="col-sm-4 brdLeft">
                  <h6
                    class="font-bold bg-warning d-flex justify-content-center p-1 radius-10 text-dark"
                    style="width: fit-content"
                  >
                    Assing To
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
                  <h4 class="text-center">Agent's Name</h4>
                  <div class="text-center">
                    <b-button class="mrgn0 text-center btn-sm" variant="dark">
                      Agent Profile
                    </b-button>
                  </div>
                </div>
              </div>
         
              <hr class="mrgn10-0" />
              <h5>Student Email</h5>
               <p>{{getSelectedStudent.email}}</p>
              <h5>Student Phone</h5>
              <p>{{getSelectedStudent.phone}}</p>
              <div class="" v-if="getSelectedStudent.student_info">
                <h5>Qualification</h5>
                <p>{{getSelectedStudent.student_info.qualification}}</p>
                <h5>CGPA</h5>
                <p>{{getSelectedStudent.student_info.cgpa}}</p>
                 <h5>Major Subjects</h5>
                <p>{{getSelectedStudent.student_info.major_sub}}</p>
                 <h5>Passing Year</h5>
                <p>{{getSelectedStudent.student_info.passing_year}}</p>
               
              </div>
         
            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import usersData from "./userData";
export default {
  props: ["propsindex"],
  data: () => ({
    items: usersData,
  }),
  computed: {
    ...mapGetters(["getSelectedStudent"]),
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
</style>
