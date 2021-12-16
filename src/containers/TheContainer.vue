<template>
  <div class="c-app">
    <TheSidebar />
    <CWrapper>
      <TheHeader />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
          <b-overlay
            :show="false"
            variant="light"
            opacity="0.7"
            spinner-variant="primary"
            no-wrap
            class="overlayModal"
          >
          </b-overlay>
        </main>
      </div>
      <TheFooter />
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";

export default {
  name: "TheContainer",
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
  },
  created() {
    console.log("TheContainer", 1);
    console.log("Login Time Expire", 1);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.c-body {
  margin-top: 40px;
}

.c-main {
  overflow: auto;
  height: calc(100vh - 160px);
}
</style>
