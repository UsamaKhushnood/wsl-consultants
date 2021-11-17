<template>
  <div
    data-v-4686fdc4=""
    class="c-sidebar c-sidebar-dark c-sidebar-lg-show c-sidebar-fixed"
  >
    <a
      href="/"
      class="c-sidebar-brand d-md-down-none router-link-active"
      target="_self"
      ><img src="/img/logo.cfcafe70.png" width="50px" alt="WSL Consultants"
    /></a>
    <ul class="c-sidebar-nav h-100 ps" style="position: relative;">
      <li class="c-sidebar-nav-item">
        <a
          href="/dashboard"
          aria-current="page"
          class="router-link-exact-active c-active c-sidebar-nav-link"
          target="_self"
        >
          <i class="c-sidebar-nav-icon fa fa-chart-line" aria-hidden="true"></i>
          Dashboard
        </a>
      </li>
      <li class="c-sidebar-nav-item">
        <a
          href="/dashboard/newrequest"
          class="c-sidebar-nav-link"
          target="_self"
        >
          <i class="c-sidebar-nav-icon fa fa-flag-o" aria-hidden="true"></i> New
          Request <span class="badge badge-primary"> NEW </span></a
        >
      </li>
      <li class="c-sidebar-nav-item">
        <a href="/dashboard/newagent" class="c-sidebar-nav-link" target="_self">
          <i
            class="c-sidebar-nav-icon fa fa-plus-square"
            aria-hidden="true"
          ></i>
          Add New Agent
        </a>
      </li>
      <li class="c-sidebar-nav-item">
        <a href="/form" class="c-sidebar-nav-link" target="_self">
          <i
            class="c-sidebar-nav-icon fa fa-align-justify"
            aria-hidden="true"
          ></i>
          Student Form
        </a>
      </li>
      <li class="c-sidebar-nav-title">Pages</li>
      <li class="c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-dropdown-toggle" v-b-toggle.accordion-1>
          <i class="c-sidebar-nav-icon fa fa-cubes" aria-hidden="true"></i>
          Leads
        </a>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          class="c-sidebar-nav-dropdown-items-custom"
        >
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Canda Leads
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Austria Leads
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Italy Leads
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              UK Leads
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              USA Leads
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Turkey MBBS Leads
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Italy MBBS Leads
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Visit Visa Leads
            </a>
          </li>
        </b-collapse>
      </li>
      <li class="c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-dropdown-toggle" v-b-toggle.accordion-2>
          <i class="c-sidebar-nav-icon fas fa-sync" aria-hidden="true"></i>
          Updates
        </a>
        <b-collapse
          id="accordion-2"
          visible
          accordion="my-accordion"
          class="c-sidebar-nav-dropdown-items-custom"
        >
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Students Updates
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              New Queries
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              New Inquiries
            </a>
          </li>
        </b-collapse>
      </li>
      <li class="c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-dropdown-toggle" v-b-toggle.accordion-3>
          <i
            class="c-sidebar-nav-icon fas fa-graduation-cap"
            aria-hidden="true"
          ></i>
          Students
        </a>
        <b-collapse
          id="accordion-3"
          visible
          accordion="my-accordion"
          class="c-sidebar-nav-dropdown-items-custom"
        >
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              New Students
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Recent Students
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Active Students
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Intrested Students
            </a>
          </li>
        </b-collapse>
      </li>
      <li class="c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-dropdown-toggle" v-b-toggle.accordion-4>
          <i
            class="c-sidebar-nav-icon fa fa-bar-chart-o"
            aria-hidden="true"
          ></i>
          Sales Department
        </a>
        <b-collapse
          id="accordion-4"
          visible
          accordion="my-accordion"
          class="c-sidebar-nav-dropdown-items-custom"
        >
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Agent Status
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Agent Status
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Agent Status
            </a>
          </li>
        </b-collapse>
      </li>
      <li class="c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-dropdown-toggle" v-b-toggle.accordion-5>
          <i class="c-sidebar-nav-icon fa fa-users" aria-hidden="true"></i>
          Call Center Department
        </a>
        <b-collapse
          id="accordion-5"
          visible
          accordion="my-accordion"
          class="c-sidebar-nav-dropdown-items-custom"
        >
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Agent Status
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Agent Status
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Agent Status
            </a>
          </li>
        </b-collapse>
      </li>
      <li class="c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-dropdown-toggle" v-b-toggle.accordion-6>
          <i class="c-sidebar-nav-icon fa fa-gear" aria-hidden="true"></i>
          Dashboard Settings
        </a>
        <b-collapse
          id="accordion-6"
          visible
          accordion="my-accordion"
          class="c-sidebar-nav-dropdown-items-custom"
        >
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Admin Control
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Admin Control
            </a>
          </li>
          <li class="c-sidebar-nav-item">
            <a href="/" class="c-sidebar-nav-link" target="_self">
              Admin Control
            </a>
          </li>
        </b-collapse>
      </li>
      <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
        <div
          class="ps__thumb-x"
          tabindex="0"
          style="left: 0px; width: 0px;"
        ></div>
      </div>
      <div class="ps__rail-y" style="top: 0px; right: 0px;">
        <div
          class="ps__thumb-y"
          tabindex="0"
          style="top: 0px; height: 0px;"
        ></div>
      </div>
    </ul>
    <button type="button" class="c-sidebar-minimizer d-md-down-none"></button>
  </div>
</template>

<script>
import nav from "./_nav";

export default {
  name: "TheSidebar",
  nav,
  computed: {
    show() {
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    },
    nav() {
      return $options.nav;
    },
  },
};
</script>
