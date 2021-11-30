<template>
  <div id="all-leads-page">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fas fa-cubes"></i> All Leads</h1>
          </div>
        </div>
        <div class="clearfix">
          <div class="row">
            <div class="col-sm-12">
              <button
                class="btn btn-dark btn-sm ml-auto d-block mb-2"
                v-b-modal="'create-lead-modal'"
              >
                Create New Lead
              </button>
              <CreateNewLead />
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
                          { key: 'CreateDate' },
                          'StudentName',
                          'Email',
                          'Whatsapp',
                          'PhoneNo',
                          'PreferredCountry',
                          'AssignedTo',
                          'Status',
                          {
                            key: 'Actions',
                            sorter: false,
                          },
                        ]"
                        pagination
                      >
                        <template #AssignedTo="{item}">
                          <td>
                            <span
                              v-if="item.AssignedTo == 'unassigned'"
                              class="badge badge-pill badge-danger"
                            >
                              {{ item.AssignedTo }}
                            </span>
                            <span v-else>
                              {{ item.AssignedTo }}
                            </span>
                          </td>
                        </template>
                        <template #Whatsapp="{item}">
                          <td>
                            <a
                              :href="
                                'https://api.whatsapp.com/send?phone=' +
                                  item.Whatsapp
                              "
                              target="_blank"
                              v-b-tooltip.hover
                              title="Click To Open Whatsapp"
                            >
                              {{ item.Whatsapp }}
                            </a>
                          </td>
                        </template>
                        <template #Email="{item}">
                          <td>
                            <a
                              :href="'mailto:' + item.Email"
                              target="_blank"
                              v-b-tooltip.hover
                              title="Click To Send Email"
                            >
                              {{ item.Email }}
                            </a>
                          </td>
                        </template>
                        <template #PhoneNo="{item}">
                          <td>
                            <a
                              :href="'tel:' + item.PhoneNo"
                              v-b-tooltip.hover
                              title="Click To Make Phone Call"
                            >
                              {{ item.PhoneNo }}
                            </a>
                          </td>
                        </template>
                        <template #Status="{item}">
                          <td class="status text-center">
                            <span
                              class="badge badge-pill"
                              :class="[
                                item.Status.toLowerCase() == 'in progress'
                                  ? 'badge-info'
                                  : item.Status.toLowerCase() == 'approved'
                                  ? 'badge-success'
                                  : item.Status.toLowerCase() == 'rejected'
                                  ? 'badge-danger'
                                  : 'badge-warning',
                              ]"
                            >
                              {{ item.Status }}
                            </span>
                          </td>
                        </template>
                        <template #Actions="{index}">
                          <td class="menu-action">
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-green vd_green"
                              v-b-toggle="'view-details-sidebar' + index"
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
                            >
                              <i
                                class="fa fa-check"
                                v-b-tooltip.hover
                                title="Assign"
                              ></i>
                            </a>

                            <a
                              data-target="#denyRequest"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'deny-request-modal' + index"
                            >
                              <i
                                v-b-tooltip.hover
                                title="Delete"
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
import tableData from "../tableData";
import WidgetsDropdown from "../widgets/WidgetsDropdown";
import AllPopups from "@/views/new-request-data/AllPopups.vue";
import CreateNewLead from "@/views/new-request-data/popups/CreateNewLead.vue";

export default {
  name: "NewRequest",
  components: { WidgetsDropdown, AllPopups, CreateNewLead },
  data: () => ({
    items: tableData,
  }),
};
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
