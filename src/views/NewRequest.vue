<template>
  <div id="newrequest">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-flag-o"></i> New Request</h1>
          </div>
        </div>

        <div class="dashboardPanels clearfix">
          <WidgetsDropdown />
        </div>
        <div class="vd_content-section clearfix">
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
                  <ul class="nav nav-tabs widget">
                    <li>
                      <a
                        data-toggle="tab"
                        href="#new-request-tab-c1"
                        class="active"
                      >
                        All Leads
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#request-hold-tab-c1">
                        Unassigned
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#accepted-request-tab-c1">
                        In Process
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#denied-request-tab-c1">
                        Matured
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
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
                        :itemsPerPage="5"
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
                            <a
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
                            </a>
                            <AllPopups :propsindex="index"> </AllPopups>
                          </td>
                        </template>
                      </CDataTable>
                      <!-- pd-20 end -->
                    </div>

                    <!-- new-request-tab SECTION 1 END -->

                    <div id="request-hold-tab-c1" class="tab-pane">
                      <CDataTable
                        :hover="true"
                        :striped="true"
                        :border="true"
                        :fixed="false"
                        :items="items"
                        columnFilter
                        itemsPerPageSelect
                        :itemsPerPage="5"
                        sorter
                        :fields="[
                          'StudentName',
                          'Country',
                          'Type',
                          'PhoneNo',
                          'Options',
                        ]"
                        :items-per-page="10"
                        pagination
                      >
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-green vd_green"
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
                                title="Denied"
                                class="fa fa-trash"
                              ></i>
                            </a>
                            <a
                              data-target="#onAccept"
                              data-toggle="modal"
                              href="javascript:void(0);"
                            >
                              <span class="badge badge-danger">On Hold</span>
                            </a>
                          </td>
                        </template>
                      </CDataTable>
                      <!-- pd-20 end -->
                    </div>

                    <!-- request-hold-tab SECTION 1 END -->

                    <div id="accepted-request-tab-c1" class="tab-pane">
                      <CDataTable
                        :hover="true"
                        :striped="true"
                        :border="true"
                        :fixed="false"
                        :items="items"
                        columnFilter
                        itemsPerPageSelect
                        :itemsPerPage="5"
                        sorter
                        :fields="[
                          'StudentName',
                          'Country',
                          'Type',
                          'PhoneNo',
                          'Options',
                        ]"
                        :items-per-page="10"
                        pagination
                      >
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-green vd_green"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View Form"
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
                                title="Denied"
                                class="fa fa-minus-circle"
                              ></i>
                            </a>
                            <a
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
                            </a>
                            <a
                              data-target="#onAccept"
                              data-toggle="modal"
                              href="javascript:void(0);"
                            >
                              <span class="badge badge-success">Accepted</span>
                            </a>
                          </td>
                        </template>
                      </CDataTable>
                      <!-- pd-20 end -->
                    </div>

                    <!-- accepted-request-tab SECTION 1 END -->

                    <div id="denied-request-tab-c1" class="tab-pane">
                      <CDataTable
                        :hover="true"
                        :striped="true"
                        :border="true"
                        :fixed="false"
                        :items="items"
                        columnFilter
                        itemsPerPageSelect
                        :itemsPerPage="5"
                        sorter
                        pagination
                        :fields="[
                          'StudentName',
                          'Country',
                          'Type',
                          'PhoneNo',
                          'Options',
                        ]"
                      >
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-green vd_green"
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
                                title="Accept"
                              ></i>
                            </a>
                            <a
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
                            </a>
                            <a
                              data-target="#onAccept"
                              data-toggle="modal"
                              href="javascript:void(0);"
                            >
                              <span class="badge badge-danger">Denied</span>
                            </a>
                          </td>
                        </template>
                      </CDataTable>
                      <!-- pd-20 end -->
                    </div>

                    <!-- denied-request-tab SECTION 1 END -->
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
