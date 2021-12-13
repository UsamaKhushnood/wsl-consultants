<template>
  <div id="newrequest">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-flag-o"></i> New Leads</h1>
          </div>
        </div>

        <div class="dashboardPanels clearfix">
          <WidgetsDropdown />
        </div>
        <div class="clearfix">
          <div class="row">
            <div class="col-sm-12 tabs">
              <button
                class="btn btn-dark btn-sm ml-auto d-block mb-2"
                v-b-modal="'create-lead-modal'"
              >
                Create New Lead
              </button>
              <CreateNewLead />
              <div id="Country1" class="active tab-pane  in">
                <div class="tabs widget">
                  <div class="tab-content">
                    <div id="new-request-tab-c1" class="tab-pane active">
                      <CDataTable
                        responsive
                        :hover="true"
                        :striped="true"
                        :border="true"
                        :fixed="false"
                        :items="items"
                        columnFilter
                        itemsPerPageSelect
                        :itemsPerPage="10"
                        class="leads-table"
                        sorter
                        :fields="[
                          'CreateDate',
                          'StudentName',
                          'Email',
                          'Whatsapp',
                          'PhoneNo',
                          'PreferredCountry',
                          'AssignedTo',
                          'Status',
                          'Actions',
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
                            <b-form-select
                              v-if="item.Status === null"
                              size="sm"
                              v-model="item.Status"
                              :options="[
                                'Matured',
                                'in progress',
                                'Approved',
                                'Rejected',
                                'On Hold',
                              ]"
                            ></b-form-select>
                            <span
                              v-else
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
                            <AllPopups :propsindex="index"> </AllPopups>
                          </td>
                        </template>
                      </CDataTable>
                      <!-- pd-20 end -->
                    </div>
                  </div>
                  <!-- tab-content end -->
                </div>
                <!-- tabs widget -->
              </div>
              <!-- #Country1 -->
            </div>
          </div>
          <!-- row -->
        </div>
        <!-- .vd_content-section -->
      </div>
      <!-- .vd_content -->

      <!-- .vd_container -->
    </div>
  </div>
</template>

<script>
import tableData from "./tableData";
import WidgetsDropdown from "./widgets/WidgetsDropdown";
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
</style>
