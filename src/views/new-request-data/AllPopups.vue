<template>
  <div id="new-request-all-popups">
      <SuccessfullyAddedPopup  :propsindex="propsindex"/>
      <HoldRequestPopup :propsindex="propsindex" />
      <DenyRequestPopup :propsindex="propsindex" />
      <ViewShopSidebar :propsindex="propsindex" />
  </div>
</template>
<script>
import ViewShopSidebar from './popups/ViewShopSidebar.vue'
import HoldRequestPopup from './popups/HoldRequestPopup.vue'
import DenyRequestPopup from './popups/DenyRequestPopup.vue'
import SuccessfullyAddedPopup from './popups/SuccessfullyAddedPopup.vue'
export default {
components: { SuccessfullyAddedPopup, DenyRequestPopup, HoldRequestPopup, ViewShopSidebar },
  name: "AllPopups",
  props: ['propsindex'],
};
</script>
<style lang="scss"></style>
