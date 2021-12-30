<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div>
          <!-- <img src="@/assets/avatar/briant2.png" class="c-avatar-img " /> -->
          <b-avatar> </b-avatar>
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong v-if="getUser.first_name"
        >{{ getUser.first_name }} Account</strong
      >
    </CDropdownHeader>
    <!-- <CDropdownItem> -->
    <!-- <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>{{getUser.first_name}} Account</strong>
    </CDropdownHeader> -->
    <!-- <CDropdownItem>
      <CIcon name="cil-bell"/> Updates
      <CBadge color="info" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem> -->
    <!-- <CDropdownItem>
      <CIcon name="cil-envelope-open" /> Messages
      <CBadge color="success" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem> -->
    <!-- <CDropdownItem>
      <CIcon name="cil-task" /> Tasks
      <CBadge color="danger" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem> -->
    <!-- <CDropdownItem>
      <CIcon name="cil-comment-square" /> Comments
      <CBadge color="warning" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem> -->
    <CDropdownHeader
      tag="div"
      v-if="getUser.type == 'admin'"
      class="text-center"
      color="light"
    >
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <router-link v-if="getUser.type == 'admin'" to="/dashboard/agents">
        <CIcon name="cil-user" /> Agent Profiles</router-link
      >
    </CDropdownItem>
    <CDropdownItem>
      <router-link v-if="getUser.type == 'admin'" to="/dashboard/time-setting">
        <CIcon name="cil-settings" /> Settings</router-link
      >
    </CDropdownItem>
    <CDropdownDivider />
    <!-- <CDropdownItem>
      <CIcon name="cil-shield-alt" /> Lock Account
    </CDropdownItem> -->
    <CDropdownItem @click.prevent="logout()">
      <CIcon name="cil-lock-locked" /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheHeaderDropdownAccnt',
  data() {
    return {
      itemsCount: 42,
    }
  },
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    trigger() {
      this.$refs.sendReq.click()
    },
    logout() {
      const vm = this
      //  vm.$store.commit("SET_SPINNER", true);
      this.$http
        .post(process.env.VUE_APP_API_URL + '/logout')
        .then((response) => {
          // vm.$store.commit("SET_AUTH_TOKEN", response.data.token);
          // vm.$store.commit("SET_SPINNER", false);
          // vm.$store.commit("SET_USER", response.data.userDetail.user);
          vm.$toast.success(response.data.message, {
            position: 'top-right',
            closeButton: 'button',
            icon: true,
            rtl: false,
          })
          // vm.$store.commit("SET_SPINNER", false);
          vm.$router.push({ path: '/login' })
        })
        .catch((errors) => {
          var err = ''

          if (errors)
            this.$toast.error(errors.message, {
              position: 'top-right',
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
          // vm.$store.commit('SET_SPINNER',false);
        })
    },
    sendTo(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>
