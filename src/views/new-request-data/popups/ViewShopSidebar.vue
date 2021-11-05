<template>
  <div>
    <b-sidebar
      :id="'view-shop-sidebar' + propsindex"
      class="view-shop-sidebar rightSidebar"
      :class="'view-shop-sidebar' + propsindex"
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
          <h4 class="mx-auto">View Shop</h4>
        </div>
        <div
          class="d-flex align-items-center justify-content-center bg-success vd_white headerSecondary"
        >
          <div class="col-md-2 pdng5-0 col-md-offset-3 text-center">
            <h6 class="mrgn0">
              Shop ID:
              <span>112223443</span>
            </h6>
          </div>
          <div class="col-md-2 pdng5-0 text-center">
            <h6 class="mrgn0">
              Shop Status:
              <span>
                Active
              </span>
            </h6>
          </div>
          <div class="col-md-2 pdng5-0 text-center">
            <h6 class="mrgn0">
              View Profile
              <!-- <span>2.500 €</span> -->
            </h6>
          </div>
        </div>

        <!-- Sidebar Body  -->
        <div class="modal-body h100">
          <div class="row">
            <div class="col-sm-3 text-center">
              <div class="box box-primary">
                <div class="box-body box-profile">
                  <img
                    class="profile-user-img img-responsive img-circle"
                    src="@/assets/avatar/briant3.png"
                    alt="User profile picture"
                  />

                  <h3 class="profile-username text-center">Shop Name</h3>

                  <!--  <p class="text-muted text-center">Software Engineer</p> -->

                  <ul class="list-group list-group-unbordered text-left">
                    <li class="list-group-item">
                      <b>Company Type</b> <a class="pull-right">Ltd.</a>
                    </li>
                    <li class="list-group-item">
                      <b>E-mail</b>
                      <!--<a class="pull-right">543</a>-->
                    </li>
                    <li class="list-group-item">
                      <b>Phone</b>
                      <!--<a class="pull-right">13,287</a>-->
                    </li>
                  </ul>

                  <!--<a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>-->
                </div>
                <!-- /.box-body -->
              </div>

              <!-- Panel widget start -->

              <b-card
                border-variant="primary"
                header="About Me"
                header-bg-variant="primary"
                header-text-variant="white"
                align="left"
                class="mt-2 mb-2"
              >
                <b-card-text>
                  <div class="">
                    <!-- /.box-header -->
                    <div class="box-body ">
                      <strong
                        ><i class="fa fa-book margin-r-5"></i> Work Time</strong
                      >

                      <p class="text-muted">
                        B.S. in Computer Science from the University of
                        Tennessee at Knoxville
                      </p>

                      <hr />

                      <strong
                        ><i class="fa fa-map-marker margin-r-5"></i>
                        Location</strong
                      >

                      <p class="text-muted">Malibu, California</p>

                      <hr />

                      <strong
                        ><i class="fa fa-pencil margin-r-5"></i> Cusine</strong
                      >

                      <p>
                        <span class="mr-1 badge badge-danger">UI Design</span>
                        <span class="mr-1 badge badge-success">Coding</span>
                        <span class="mr-1 badge badge-info">Javascript</span>
                        <span class="mr-1 badge badge-warning">PHP</span>
                        <span class="mr-1 badge badge-primary">Node.js</span>
                      </p>

                      <hr />

                      <strong
                        ><i class="fa fa-file-text-o margin-r-5"></i>
                        Notes</strong
                      >

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam fermentum enim neque.
                      </p>
                    </div>
                    <!-- /.box-body -->
                  </div>
                </b-card-text>
              </b-card>
            </div>
            <div
              class="col-md-9"
            >
              <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                  <li >
                    <a href="#activity" data-toggle="tab" aria-expanded="true" class="active"
                      >Shop Info</a
                    >
                  </li>
                  <li class="">
                    <a href="#timeline" data-toggle="tab" aria-expanded="false"
                      >Documents</a
                    >
                  </li>
                  <li class="">
                    <a href="#reviews" data-toggle="tab" aria-expanded="false"
                      >Owner Info</a
                    >
                  </li>
                  <!--<li class=""><a href="#settings" data-toggle="tab" aria-expanded="false">Setting</a></li>
              <li class=""><a href="#upgrade" data-toggle="tab" aria-expanded="false">Upgrade</a></li>-->
                </ul>
                <div class="tab-content" style="    background-color: #ebf0f547;">
                  <div class="tab-pane active" id="activity">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="col-md-12 info-com-container">
                          <span class="info-com-h">Shop Information:</span>
                          <div class="row">
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"
                                ><b>Company Name</b></span
                              >
                              <span>Online Systems</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"
                                ><b>Company Type</b></span
                              >
                              <span>Software</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 info-com-container">
                          <div class="row">
                            <div class="col-md-6 info-com-col">
                              <span class="info-com-tag"><b>Address</b></span>
                              <span
                                >Germany – Niedersachsen – Hannover<br />Lange
                                Laube 1 A<br />30159 Hannover</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 info-com-container">
                          <div class="row">
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>ST-Nr.</b></span>
                              <span>123443</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>UMST-ID</b></span>
                              <span>34344343434</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>HRB</b></span>
                              <span>434343</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 info-com-container">
                          <div class="row">
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"
                                ><b>Service Category</b></span
                              >
                              <span>Support</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"
                                ><b>Subcategory</b></span
                              >
                              <span
                                >Website - Server – PC<br />WebCam –
                                Printer</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 info-com-container">
                          <div class="row">
                            <div class="col-md-6 info-com-col">
                              <span class="info-com-tag"
                                ><b>Service Area</b></span
                              >
                              <span>Germany – Niedersachsen - Hannover</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 info-com-container">
                          <div class="row">
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"
                                ><b>Created Date</b></span
                              >
                              <span>10.10.2020</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>Employees</b></span>
                              <span>25</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>Offices</b></span>
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 info-com-container">
                          <div class="row">
                            <div class="col-md-6 info-com-col">
                              <span class="info-com-tag"><b>Office 1</b></span>
                              <span
                                >Germany – Niedersachsen – Hannover<br />Lange
                                Laube 1 A<br />30159 Hannover</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 info-com-container no-border">
                          <div class="row">
                            <div class="col-md-6 info-com-col">
                              <span class="info-com-tag"><b>Office 2</b></span>
                              <span
                                >Germany – Niedersachsen – Hannover<br />Lange
                                Laube 1 A<br />30159 Hannover</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="timeline">
                    <!-- The timeline -->
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="col-sm-12">
                          <span class="info-com-h doc-com-h">Documents:</span>
                        </div>
                        <div class="col-md-12 doc-com-container">
                          <div class="row d-flex">
                            <div class="col-sm-2 doc-img-col">
                              <div class="doc-img">
                                <img src="@/assets/images/Picture1.png" />
                              </div>
                            </div>
                            <div class="col-sm-3 info-com-col">
                              <span class="info-com-tag"
                                ><b>Document Title</b></span
                              >
                              <span class="doc-fl-det"
                                >From 12.10.2020 – 2MB</span
                              >
                            </div>
                            <div class="col-md-1 info-com-col doc-view-right">
                              <a class="btn menu-icon vd_bd-green vd_green">
                                <i
                                  data-original-title="view"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  class="fa fa-eye"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 doc-com-container">
                          <div class="row d-flex">
                            <div class="col-sm-2 doc-img-col">
                              <div class="doc-img">
                                <img src="@/assets/images/Picture1.png" />
                              </div>
                            </div>
                            <div class="col-sm-3 info-com-col">
                              <span class="info-com-tag"
                                ><b>Document Title</b></span
                              >
                              <span class="doc-fl-det"
                                >From 12.10.2020 – 2MB</span
                              >
                            </div>
                            <div class="col-md-1 info-com-col doc-view-right">
                              <a class="btn menu-icon vd_bd-green vd_green">
                                <i
                                  data-original-title="view"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  class="fa fa-eye"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 doc-com-container">
                          <div class="row d-flex">
                            <div class="col-sm-2 doc-img-col">
                              <div class="doc-img">
                                <img src="@/assets/images/Picture2.png" />
                              </div>
                            </div>
                            <div class="col-sm-3 info-com-col">
                              <span class="info-com-tag"
                                ><b>Document Title</b></span
                              >
                              <span class="doc-fl-det"
                                >From 12.10.2020 – 2MB</span
                              >
                            </div>
                            <div class="col-md-1 info-com-col doc-view-right">
                              <a class="btn menu-icon vd_bd-green vd_green">
                                <i
                                  data-original-title="view"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  class="fa fa-eye"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.tab-pane -->

                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="reviews">
                    <!-- Small boxes (Stat box) -->

                    <div class="row">
                      <div class="col-sm-12">
                        <div class="col-md-12 info-com-container">
                          <span class="info-com-h">Owner Information:</span>
                          <div class="row">
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>Gender</b></span>
                              <span>Mr.</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>Name</b></span>
                              <span>John</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>Lastname</b></span>
                              <span>Doe</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 info-com-container">
                          <div class="row">
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>Bank</b></span>
                              <span>Postbank</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>IBAN</b></span>
                              <span>DE3433434334r3434r34rr44</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>BIC</b></span>
                              <span>BCSSSSGFER</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 info-com-container no-border">
                          <div class="row">
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"
                                ><b>Online Payment</b></span
                              >
                              <span>Yes</span>
                            </div>
                            <div class="col-md-3 info-com-col">
                              <span class="info-com-tag"><b>Provider</b></span>
                              <span>Payppal@Paypal.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.tab-pane -->

                  <div class="tab-pane" id="settings">
                    <div class="row docs-premium-template">
                      <div class="col-sm-12 col-md-12">
                        <div class="box box-solid">
                          <div class="box-body">
                            <h4
                              style="background-color:#f7f7f7; font-size: 18px; text-align: center; padding: 7px 10px; margin-top: 0;"
                            >
                              How to receive the Orders
                            </h4>
                            <div class="media"></div>

                            <div class="media-body text-center">
                              <div class="clearfix">
                                <label>
                                  <input
                                    type="radio"
                                    name="r3"
                                    class="flat-red"
                                    id="show1"
                                  />
                                  By Fax
                                </label>
                                <label style="margin-left: 40px;">
                                  <input
                                    type="radio"
                                    name="r3"
                                    class="flat-red"
                                    id="show2"
                                  />
                                  By E-Mail
                                </label>
                                <label style="margin-left: 40px;">
                                  <input
                                    type="radio"
                                    name="r3"
                                    class="flat-red"
                                    id="show3"
                                  />
                                  BY UMTS
                                </label>
                              </div>
                              <div id="div1" style="display: none;">
                                <br /><br />
                                <div class="col-md-1"></div>
                                <div class="col-md-1"></div>

                                <div class="col-md-8">
                                  <input
                                    type="text"
                                    placeholder=""
                                    class="form-control"
                                    id="how_much"
                                  />
                                </div>
                                <div class="col-md-1">
                                  <a href="#" class="btn btn-primary">Save</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /.tab-pane -->
              </div>
              <!-- /.tab-content -->
            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  props: ["propsindex"],
  data: () => ({}),
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
