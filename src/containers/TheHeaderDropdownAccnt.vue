<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="@/assets/avatar/briant2.png"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Account</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-bell"/> Updates
      <CBadge color="info" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <!-- <CDropdownItem>
      <CIcon name="cil-envelope-open" /> Messages
      <CBadge color="success" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem> -->
    <CDropdownItem>
      <CIcon name="cil-task" /> Tasks
      <CBadge color="danger" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <!-- <CDropdownItem>
      <CIcon name="cil-comment-square" /> Comments
      <CBadge color="warning" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem> -->
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-user" /> Agent Profiles
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-settings" /> Settings
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem>
      <CIcon name="cil-shield-alt" /> Lock Account
    </CDropdownItem>
    <CDropdownItem @click.prevent="logout()">

      <CIcon name="cil-lock-locked"  /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  },
  methods: {
    trigger() {
      this.$refs.sendReq.click();
    },
    logout() {
      const vm = this;
      //  vm.$store.commit("SET_SPINNER", true);
      this.$http
        .post(process.env.VUE_APP_API_URL + "/logout")
        .then((response) => {
          console.log('s',response.data.message)
          // vm.$store.commit("SET_AUTH_TOKEN", response.data.token);
          // vm.$store.commit("SET_SPINNER", false);
          // vm.$store.commit("SET_USER", response.data.userDetail.user);
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          // vm.$store.commit("SET_SPINNER", false);
          vm.$router.push({ path: "/login" });
        })
        .catch((errors) => {
          var err = "";
          if (errors.response.data.errors.email) {
            err += errors.response.data.errors.email;
          }
          if (errors.response.data.errors.password) {
            err += errors.response.data.errors.password;
          }
          if (errors)
            this.$toast.error(err, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          // vm.$store.commit('SET_SPINNER',false);
        });
    },
    sendTo(url) {
      window.open(url, "_blank");
    },
  },
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>