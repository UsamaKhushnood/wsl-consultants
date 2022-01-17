<template>
  <div id="onhold-leads-page">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fas fa-cubes"></i> On Hold Leads</h1>
          </div>
        </div>
        <div class="clearfix">
          <div class="row">
            <div class="col-sm-12">
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
                        :items="items"
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
                            _style: 'width:50px',
                            label: 'Sr#',
                          },
                          'created_at',
                          'whatsapp_num',
                          'country',
                          'assigned_to',
                          'status',
                          {
                            key: 'Actions',
                            sorter: false,
                          },
                        ]"
                        pagination
                      >
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
                            <span v-show="item.website">
                              <div class="badge badge-success badge-pill ml-1">
                                Website
                              </div>
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
                        <template #Email="{item}">
                          <td>
                            <a
                              :href="'mailto:' + item.email"
                              target="_blank"
                              v-b-tooltip.hover
                              title="Click To Send Email"
                            >
                              {{ item.email }}
                            </a>
                          </td>
                        </template>
                        <template #StudentName="{item}">
                          <td>
                            <p>
                              {{ item.first_name + item.last_name }}
                            </p>
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
                        <template #Actions="{index,item}">
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
                              v-if="getUser.type === 'admin'"
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
                                @click="setStudent(item.id)"
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
                            <AllPopups :propsindex="index"> </AllPopups>
                          </td>
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
import { mapGetters } from 'vuex'
import AllPopups from '@/views/new-request-data/AllPopups.vue'
import axios from 'axios'
export default {
  name: 'NewRequest',
  components: { AllPopups },
  data: () => ({
    // items: tableData,
    items: [],
    deleteStudentId: '',
    formOverlay: true,
  }),
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    getStudent() {
      const vm = this
      let url = ''
      if (vm.getUser.type == 'Sales Agent') {
        url = process.env.VUE_APP_API_URL + '/sales-agent/hold-leads'
      } else if (vm.getUser.type == 'Call Center Agent') {
        url = process.env.VUE_APP_API_URL + '/call-agent/hold-leads'
      } else {
        url = process.env.VUE_APP_API_URL + '/admin/hold-leads'
      }
      axios
        .get(url)
        .then((response) => {
          // console.log("data::", response.data.data);
          vm.items = response.data.data
          vm.formOverlay = false
        })
        .catch((errors) => {
          console.log(errors)
          vm.formOverlay = false
        })
    },
    setStudent(data) {
      // this.deleteStudentId = data
      this.$store.commit('SET_CURRENT_STUDENT', data)
    },

    currentStudent(data) {
      this.$store.commit('SET_CURRENT_STUDENT', data)
    },
    changeStatus(item) {
      const vm = this
      let url = ''
      if (vm.getUser.type == 'admin') {
        url = process.env.VUE_APP_API_URL + '/admin/status/' + item.id
      } else {
        url = process.env.VUE_APP_API_URL + '/sales-agent/status/' + item.id
      }
      axios
        .post(url, {
          status: item.status,
        })
        .then((response) => {
          // console.log("data::", response.data);
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
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email
          }
          if (errors.response.data.errors.password) {
            err += errors.response.data.errors.password
          }
          if (errors)
            this.$toast.error(err, {
              position: 'top-right',
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
        })
    },
  },
  mounted() {
    this.getStudent()
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
