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
    <!-- <div class="sidebar-wrapper"> -->
    <ul
      class="c-sidebar-nav h-100 ps"
      style="position: relative; overflow: visible !important;"
    >
      <li class="c-sidebar-nav-title" v-if="getUser.type == 'admin'">
        Admin
      </li>
      <li class="c-sidebar-nav-title" v-if="getUser.type == 'Sales Agent'">
        Sales Department
      </li>
      <li
        class="c-sidebar-nav-title"
        v-if="getUser.type == 'Call Center Agent'"
      >
        Call Center Department
      </li>
      <li class="c-sidebar-nav-item">
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
      <!-- <li class="c-sidebar-nav-item" v-if="getUser.type == 'admin'">
        <router-link
          active-class="c-active"
          to="/dashboard/newrequest"
          class="c-sidebar-nav-link"
          target="_self"
        >
          <i class="c-sidebar-nav-icon fa fa-flag-o" aria-hidden="true"></i> New
          Leads <span class="badge badge-primary"> NEW </span></router-link
        >
      </li> -->
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
      <li
        class="c-sidebar-nav-item"
        v-if="getUser.type == 'admin' || getUser.type == 'Call Center Agent'"
      >
        <router-link
          active-class="c-active"
          to="/form"
          class="c-sidebar-nav-link"
          target="_blank"
        >
          <i
            class="c-sidebar-nav-icon fa fa-align-justify"
            aria-hidden="true"
          ></i>
          Student Form
        </router-link>
      </li>
      <li class="c-sidebar-nav-dropdown">
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
              <span v-if="getUser.type == 'admin'">
                All Leads
              </span>
              <span v-else>
                My Leads
              </span>
              <div class="badge badge-primary">25</div>
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/new-leads"
              class="c-sidebar-nav-link"
              target="_self"
            >
              New Leads
              <div class="badge badge-primary">25</div>
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
              <div class="badge badge-primary">25</div>
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
              <div class="badge badge-primary">25</div>
            </router-link>
          </li>

          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/expected"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Expected
              <div class="badge badge-primary">25</div>
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/not-expected"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Not Expected
              <div class="badge badge-primary">25</div>
            </router-link>
          </li>
          <li class="c-sidebar-nav-item bg-success">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/applied"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Applied
              <div class="badge badge-primary">25</div>
            </router-link>
          </li>
          <li class="c-sidebar-nav-item bg-danger">
            <router-link
              active-class="c-active"
              to="/dashboard/leads/rejected"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Rejected
              <div class="badge badge-primary">25</div>
            </router-link>
          </li>
        </b-collapse>
      </li>

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
              to="/dashboard/agents"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Agents
            </router-link>
          </li>
          <li class="c-sidebar-nav-item">
            <router-link
              active-class="c-active"
              to="/dashboard/time-setting"
              class="c-sidebar-nav-link"
              target="_self"
            >
              Login/Logout Settings
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
    <!-- </div> -->
    <button
      type="button"
      class="c-sidebar-minimizer d-md-down-none"
      @click="$store.commit('set', ['sidebarMinimize', !minimize])"
    ></button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import nav from './_nav'

export default {
  name: 'TheSidebar',
  nav,
  computed: {
    show() {
      return this.$store.state.sidebarShow
    },
    minimize() {
      return this.$store.state.sidebarMinimize
    },
    nav() {
      return $options.nav
    },
    ...mapGetters(['getUser']),
    ...mapState(['sidebarShow', 'sidebarMinimize']),
  },
}
</script>
