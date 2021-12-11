<template>
  <div
    class="c-sidebar c-sidebar-dark  c-sidebar-fixed"
    :class="{
      'c-sidebar-lg-show': sidebarShow,
      'c-sidebar-minimized': sidebarMinimize,
    }"
  >
    <router-link
      active-class="c-active"
      to="/"
      class="c-sidebar-brand d-md-down-none router-link-active"
      target="_self"
      ><img src="/img/logo.cfcafe70.png" width="50px" alt="WSL Consultants"
    /></router-link>
    <ul
      class="c-sidebar-nav h-100 ps"
      style="position: relative; overflow: auto !important;"
    >
      <li class="c-sidebar-nav-title" v-if="getUser.type == 'admin'">Admin</li>
      <li class="c-sidebar-nav-item" v-if="getUser.type == 'admin'">
        <router-link
          active-class="c-active"
          to="/dashboard"
          aria-current="page"
          class="router-link-exact-active c-sidebar-nav-link"
          target="_self"
          exact
        >
          <i class="c-sidebar-nav-icon fa fa-chart-line" aria-hidden="true"></i>
          Dashboard
        </router-link>
      </li>
      <li class="c-sidebar-nav-item" v-if="getUser.type == 'admin'">
        <router-link
          active-class="c-active"
          to="/dashboard/newrequest"
          class="c-sidebar-nav-link"
          target="_self"
        >
          <i class="c-sidebar-nav-icon fa fa-flag-o" aria-hidden="true"></i> New
          Request <span class="badge badge-primary"> NEW </span></router-link
        >
      </li>
      <li class="c-sidebar-nav-item" v-if="getUser.type == 'admin'">
        <router-link
          active-class="c-active"
          to="/dashboard/newagent"
          class="c-sidebar-nav-link"
          target="_self"
        >
          <i
            class="c-sidebar-nav-icon fa fa-plus-square"
            aria-hidden="true"
          ></i>
          Add New Agent
        </router-link>
      </li>
      <li class="c-sidebar-nav-item" v-if="getUser.type == 'admin'">
        <router-link
          active-class="c-active"
          to="/form"
          class="c-sidebar-nav-link"
          target="_self"
        >
          <i
            class="c-sidebar-nav-icon fa fa-align-justify"
            aria-hidden="true"
          ></i>
          Student Form
        </router-link>
      </li>
      <li class="c-sidebar-nav-dropdown" v-if="getUser.type == 'admin'">
        <a class="c-sidebar-nav-dropdown-toggle" v-b-toggle.accordion-1>
          <i class="c-sidebar-nav-icon fa fa-cubes" aria-hidden="true"></i>
          Leads
        </a>
        <b-collapse
          id="accordion-1"
          accordion="my-accordion"
          visible
          class="c-sidebar-nav-dropdown-items-custom"
        >
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/all-leads"
              class="c-sidebar-nav-link"
              target="_self"
            >
              All Leads
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/approved"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Approved
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/rejected"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Rejected
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/on-hold"
              class="c-sidebar-nav-link"
              target="_self"
            >
              On Hold
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/in-progress"
              class="c-sidebar-nav-link"
              target="_self"
            >
              In Progress
            </router-link>
          </li>
        </b-collapse>
      </li>

      <!-- <li class="c-sidebar-nav-dropdown" v-if="getUser.type == 'admin'">
        <a class="c-sidebar-nav-dropdown-toggle" v-b-toggle.accordion-3>
          <i
            class="c-sidebar-nav-icon fas fa-graduation-cap"
            aria-hidden="true"
          ></i>
          Registered Students
        </a>
        <b-collapse
          id="accordion-3"
          visible
          accordion="my-accordion"
          class="c-sidebar-nav-dropdown-items-custom"
        >
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/"
              class="c-sidebar-nav-link"
              target="_self"
            >
              New Students
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Recent Students
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Active Students
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Intrested Students
            </router-link>
          </li>
        </b-collapse>
      </li> -->
      <li class="c-sidebar-nav-dropdown" v-if="getUser.type == 'admin'">
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
            <router-link
              active-class="c-active"
              to="/"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Agents
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="time-setting"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Login/Logout Settings
            </router-link>
          </li>
        </b-collapse>
      </li>

      
      <li class="c-sidebar-nav-title" v-if="getUser.type == 'Sales Agent'">
        Sales Department
      </li>

      <li class="c-sidebar-nav-item" v-if="getUser.type == 'Sales Agent'">
        <!-- Dashboard/Sales  -->
        <router-link
          active-class="c-active"
          to="/dashboard"
          aria-current="page"
          class="router-link-exact-active c-sidebar-nav-link"
          target="_self"
        >
          <i
            class="c-sidebar-nav-icon fa fa-bar-chart-o"
            aria-hidden="true"
          ></i>
          Dashboard
        </router-link>
      </li>
      <li class="c-sidebar-nav-dropdown" v-if="getUser.type == 'Sales Agent'">
        <a class="c-sidebar-nav-dropdown-toggle" v-b-toggle.accordion-sales>
          <i class="c-sidebar-nav-icon fa fa-cubes" aria-hidden="true"></i>
          Leads
        </a>
        <b-collapse
          id="accordion-sales"
          accordion="my-accordion"
          visible
          class="c-sidebar-nav-dropdown-items-custom"
        >
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/all-leads"
              class="c-sidebar-nav-link"
              target="_self"
            >
              All Leads
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/approved"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Approved
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/rejected"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Rejected
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/on-hold"
              class="c-sidebar-nav-link"
              target="_self"
            >
              On Hold
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/in-progress"
              class="c-sidebar-nav-link"
              target="_self"
            >
              In Progress
            </router-link>
          </li>
        </b-collapse>
      </li>

      <li class="c-sidebar-nav-title" v-if="getUser.type == 'Call Center Agent'">
        Call Center Department
      </li>
      <li class="c-sidebar-nav-item" v-if="getUser.type == 'Call Center Agent'">
        <!-- Dashboard/CallCenter -->
        <router-link
          active-class="c-active"
          to="/dashboard"
          aria-current="page"
          class="router-link-exact-active c-sidebar-nav-link"
          target="_self"
        >
          <i class="c-sidebar-nav-icon fa fa-users" aria-hidden="true"></i>
          Dashboard
        </router-link>
      </li>

      <li class="c-sidebar-nav-item" v-if="getUser.type == 'Call Center Agent'">
        <router-link
          active-class="c-active"
          to="/form"
          class="c-sidebar-nav-link"
          target="_self"
        >
          <i
            class="c-sidebar-nav-icon fa fa-align-justify"
            aria-hidden="true"
          ></i>
          Student Form
        </router-link>
      </li>

      <li class="c-sidebar-nav-dropdown" v-if="getUser.type == 'Call Center Agent'">
        <a
          class="c-sidebar-nav-dropdown-toggle"
          v-b-toggle.accordion-call-center
        >
          <i class="c-sidebar-nav-icon fa fa-cubes" aria-hidden="true"></i>
          Leads
        </a>
        <b-collapse
          id="accordion-call-center"
          accordion="my-accordion"
          visible
          class="c-sidebar-nav-dropdown-items-custom"
        >
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/all-leads"
              class="c-sidebar-nav-link"
              target="_self"
            >
              All Leads
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/approved"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Approved
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/rejected"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Rejected
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/on-hold"
              class="c-sidebar-nav-link"
              target="_self"
            >
              On Hold
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/in-progress"
              class="c-sidebar-nav-link"
              target="_self"
            >
              In Progress
            </router-link>
          </li>
        </b-collapse>
      </li>

      <div
        class="ps__rail-x"
        style="left: 0px; bottom: 0px;"
        v-if="getUser.type == 'admin'"
      >
        <div
          class="ps__thumb-x"
          tabindex="0"
          style="left: 0px; width: 0px;"
        ></div>
      </div>
      <div
        class="ps__rail-y"
        style="top: 0px; right: 0px;"
        v-if="getUser.type == 'admin'"
      >
        <div
          class="ps__thumb-y"
          tabindex="0"
          style="top: 0px; height: 0px;"
        ></div>
      </div>
    </ul>
    <button
      type="button"
      class="c-sidebar-minimizer d-md-down-none"
      @click="$store.commit('set', ['sidebarMinimize', !minimize])"
    ></button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
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
    ...mapGetters(["getUser"]),
    ...mapState(["sidebarShow", "sidebarMinimize"]),
  },
};
</script>
