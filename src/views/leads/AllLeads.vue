<template>
  <div id="all-leads-page">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1>
              <i class="fas fa-cubes mr-2"></i
              >{{ $route.params.name ? $route.params.name : $route.name }}
            </h1>
          </div>
        </div>
        <div class="clearfix">
          <div class="row">
            <div class="col-sm-12">
              <div class="d-flex">
                <button
                  class="btn btn-dark btn-sm ml-auto d-block mb-2"
                  v-b-modal="'create-lead-modal'"
                >
                  Create New Lead
                </button>
                <button
                  class="btn btn-warning btn-sm ml-2 d-block mb-2"
                  v-b-modal="'successfully-added-modal' + 1"
                  v-if="selectedQuries.length >= 1"
                >
                  Assign {{ selectedQuries.length }}
                  {{ selectedQuries.length === 1 ? 'Lead' : 'Leads' }}
                </button>
                <button
                  class="btn btn-danger btn-sm ml-2 d-block mb-2"
                  v-b-modal="'deny-request-modal' + 1"
                  v-if="selectedQuries.length >= 1"
                >
                  Delete {{ selectedQuries.length }}
                  {{ selectedQuries.length === 1 ? 'Lead' : 'Leads' }}
                </button>
              </div>

              <CreateNewLead />
              <!-- <EditLead  /> -->

              <div id="Country1">
                <div class="widget">
                  <div class="bg-white">
                    <div id="new-request-tab-c1">
                      <CDataTable
                        responsive
                        :hover="true"
                        :striped="true"
                        :border="true"
                        :fixed="false"
                        :items="getItems"
                        columnFilter
                        itemsPerPageSelect
                        :itemsPerPage="20"
                        class="leads-table"
                        sorter
                        :fields="[
                          {
                            key: 'sr',
                            sorter: false,
                            filter: false,
                            _style: 'width: 50px',
                            label: 'Sr#',
                          },
                          {
                            key: 'select',
                            _style: 'width: 50px',
                            _classes: 'text-center',
                            filter: false,
                            sorter: false,
                          },

                          'first_name',
                          'whatsapp_num',
                          'country',
                          'assigned_to',
                          'status',
                          {
                            key: 'action',
                            sorter: false,
                          },
                        ]"
                        pagination
                      >
                        <template #select-filter="{}">
                          <td
                            class="selectionBox text-center selectAll d-flex align-items-center justify-content-center"
                            style="border: 0"
                          >
                            <input
                              type="checkbox"
                              id="selectAllCheck"
                              :checked="isAllQueriesSelect"
                              @click="selectAllQuries"
                              class=" pointer"
                            />

                            <!-- <label for="selectAllCheck" class="mb-0 pointer">
                              {{
                                isAllQueriesSelect
                                  ? 'Deselect All'
                                  : 'Select All'
                              }}
                            </label> -->
                          </td>
                        </template>
                        <template #select="{item}">
                          <td
                            class="selectionBox checkbox tableCheckbox text-center"
                          >
                            <input
                              type="checkbox"
                              :value="item.id"
                              v-model="selectedQuries"
                              @click="selectQuries"
                              class=" pointer"
                            />
                          </td>
                        </template>
                        <template #country="{item}">
                          <td class="text-center">
                            <span>
                              {{ item.country }}
                            </span>
                            <span v-show="item.website">
                              <div class="badge badge-success badge-pill ml-1">
                                Website
                              </div>
                            </span>
                          </td>
                        </template>
                        <template #sr="{index}">
                          <td class="text-center">
                            <p class="mb-0">{{ index + 1 }}</p>
                          </td>
                        </template>
                        <template #assigned_to="{item}">
                          <td class="text-center">
                            <span
                              v-if="item.agent == null"
                              class="badge badge-pill badge-danger"
                            >
                              unassigned
                            </span>
                            <span v-else>
                              {{
                                item.agent == null
                                  ? 'unassigned'
                                  : item.agent.first_name
                              }}
                            </span>
                          </td>
                        </template>
                        <template #whatsapp_num="{item}">
                          <td>
                            <a
                              :href="
                                'https://api.whatsapp.com/send?phone=' +
                                  item.whatsapp_num
                              "
                              target="_blank"
                              v-b-tooltip.hover
                              title="Click To Open Whatsapp"
                            >
                              {{ item.whatsapp_num }}
                            </a>
                          </td>
                        </template>
                        <template #PreferredCountry="{item}">
                          <td>
                            <p>
                              {{ item.country }}
                            </p>
                          </td>
                        </template>
                        <template #phone="{item}">
                          <td>
                            <a
                              :href="'tel:' + item.phone"
                              v-b-tooltip.hover
                              title="Click To Make Phone Call"
                            >
                              {{ item.phone }}
                            </a>
                          </td>
                        </template>
                        <template #status="{item}">
                          <td
                            class="status text-center"
                            style="padding: 4px 15px 0 15px;"
                          >
                            <!-- new is the default status  -->
                            <b-form-select
                              size="sm"
                              @change="changeStatus(item)"
                              v-model="item.status"
                              :options="[
                                'New Lead',
                                'In Progress',
                                'Expected',
                                'Not Expected',
                                'Applied',
                                'On Hold',
                                'Rejected',
                              ]"
                            ></b-form-select>
                            <!-- <span
                              class="badge badge-pill"
                              :class="[
                                item.status == 'In Progress'
                                  ? 'badge-success'
                                  : item.status == 'New Lead'
                                  ? 'badge-info'
                                  : item.status == 'On Hold'
                                  ? 'badge-warning'
                                  : item.status == 'Expected'
                                  ? 'badge-dark'
                                  : item.status == 'Applied'
                                  ? 'badge-success'
                                  : item.status == 'Not Expected' ||
                                    item.status == 'Rejected'
                                  ? 'badge-danger'
                                  : 'badge-warning',
                              ]"
                            >
                              {{ item.status }}
                            </span> -->
                          </td>
                        </template>
                        <template #action="{index,item}">
                          <td class="menu-action">
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-green vd_green"
                              v-b-toggle="'view-details-sidebar' + index"
                              @click="currentStudent(item)"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View Form"
                              ></i>
                            </a>
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              v-b-modal="'successfully-added-modal' + index"
                              @click="currentStudent(item)"
                            >
                              <i
                                class="fa fa-check"
                                v-b-tooltip.hover
                                title="Assign"
                              ></i>
                            </a>

                            <a
                              class="btn edit-icon menu-icon  vd_bd-black vd_bd-black "
                              v-b-modal="'edit-lead-modal' + index"
                              :item="item.id"
                              @click="setStudent(item)"
                            >
                              <i
                                v-b-tooltip.hover
                                title="Edit Lead"
                                class="fa fa-pen"
                              ></i>
                            </a>
                            <a
                              data-target="#denyRequest"
                              data-toggle="modal"
                              class="btn edit-icon menu-icon  vd_bd-black vd_bd-black "
                              v-b-modal="'add-note-modal' + index"
                              :item="item.id"
                              @click="setStudent(item)"
                            >
                              <i
                                v-b-tooltip.hover
                                title="Add Note"
                                class="fa fa-book"
                              ></i>
                            </a>
                            <a
                              data-target="#denyRequest"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'deny-request-modal' + index"
                              :item="item.id"
                              v-if="getUser.type == 'admin'"
                            >
                              <i
                                v-b-tooltip.hover
                                title="Delete"
                                @click="setStudent(item)"
                                class="fa fa-trash"
                              ></i>
                            </a>
                            <!-- <a
                              data-target="#holdRequest"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'hold-request-modal' + index"
                            >
                              <i
                                class="fa fa-pause"
                                v-b-tooltip.hover
                                title="Hold"
                              ></i>
                            </a> -->
                            <AllPopups :propsindex="index" :items="getPropUser">
                            </AllPopups>
                          </td>
                          <!-- <button v-for="pageNumber in items" :key="pageNumber" class="w3-button" v-bind:key="pageNumber" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }} </button> -->
                        </template>
                      </CDataTable>
                      <b-overlay
                        :show="formOverlay"
                        no-wrap
                        class="overlayModal"
                      >
                      </b-overlay>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'datatables.net-buttons-bs4'
import AllPopups from '@/views/new-request-data/AllPopups.vue'
import CreateNewLead from '@/views/new-request-data/popups/CreateNewLead.vue'
import axios from 'axios'
import { mapGetters, mapState } from 'vuex'
import { getSelectedStudentMix } from '@/mixins/getSelectedStudent.js'

export default {
  name: 'NewRequest',
  components: { AllPopups, CreateNewLead },
  mixins: [getSelectedStudentMix],
  data: () => ({
    items: [],
    selectedQuries: [],
    deleteStudentId: '',
    formOverlay: true,
    isAllQueriesSelect: false,
    resultCount: 0,
    user_for_pro: '',
  }),
  computed: {
    ...mapGetters(['getUser', 'getAllStudentData', 'getItems']),
    ...mapState(['allStudent', 'allStudentData']),

    getPropUser() {
      return this.user_for_pro
    },
  },
  methods: {
    selectAllQuries() {
      if (this.isAllQueriesSelect) {
        this.selectedQuries = []
        this.isAllQueriesSelect = false
      } else {
        this.selectedQuries = []
        for (var item in this.getItems) {
          this.selectedQuries.push(this.getItems[item].id)
        }
        this.isAllQueriesSelect = true
      }
    },
    selectQuries() {
      if (this.selectedQuries.length !== this.getItems.length) {
        this.isAllQueriesSelect = false
      } else {
        this.isAllQueriesSelect = true
      }
    },
    setStudent(data) {
      // this.deleteStudentId = data
      this.$store.commit('SET_CURRENT_STUDENT', null)
      this.$store.commit('SET_CURRENT_STUDENT', data)
      this.user_for_pro = data
      this.selectedStudent = data
    },
    changeStatus(item) {
      const vm = this
      let url = ''
      if (vm.getUser.type == 'admin') {
        url = process.env.VUE_APP_API_URL + '/admin/status/' + item.id
      } else if (vm.getUser.type == 'Call Center Agent') {
        url = process.env.VUE_APP_API_URL + '/call-agent/status/' + item.id
      } else {
        url = process.env.VUE_APP_API_URL + '/sales-agent/status/' + item.id
      }
      axios
        .post(url, {
          status: item.status,
        })
        .then((response) => {
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
          vm.getStudent()
        })
        .catch((errors) => {
          var err = ''
          if (errors)
            this.$toast.error(err, {
              position: 'top-right',
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
        })
    },
    currentStudent(data) {
      this.$store.commit('SET_CURRENT_STUDENT', {})
      this.$store.commit('SET_CURRENT_STUDENT', data)
    },
  },
  mounted() {
    this.getStudent()
    console.log(this.$route.params.type, 'route info')
  },
  watch: {
    // getAllStudentData: function (val) {
    //   this.getAllStudentData = val
    // },
  },
}
</script>

<style lang="scss">
#newrequest .col-sm-6.p-0.offset-sm-6 {
  padding: 5px 20px !important;
  padding-bottom: 0px !important;
}

.leads-table {
  .col-sm-6.p-0.offset-sm-6 {
    .form-inline.justify-content-sm-end {
      color: #000;
      padding: 10px 10px 0 0;
    }
  }
}
</style>
<style lang="css">
.current {
  color: teal;
}
</style>
