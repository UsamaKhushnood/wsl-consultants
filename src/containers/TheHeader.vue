<template>
  <CHeader fixed with-subheader light>
    <div class="fullscreenIcon" @click="$store.commit('toggleSidebarDesktop')">
      <b-icon
        :icon="sidebarShow ? 'fullscreen' : 'fullscreen-exit'"
        scale="1.2"
      ></b-icon>
    </div>

    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo" />
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <!-- <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
          Admin
        </CHeaderNavLink>
      </CHeaderNavItem> -->
      <!-- <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/users" exact>
          Call Center Department
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink>
          Sales Department
        </CHeaderNavLink>
      </CHeaderNavItem> -->
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-bell" />
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt />
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0" />
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import { mapState } from 'vuex'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt,
  },
  computed: mapState(['sidebarShow']),
}
</script>
<style>
.fullscreenIcon {
  width: 45px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
