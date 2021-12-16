<template>
  <div id="new-request-all-popups">
    <AssignLeadPopup :propsindex="propsindex" />
    <HoldRequestPopup :propsindex="propsindex" />
    <DenyRequestPopup :propsindex="propsindex" />
    <ViewShopSidebar :propsindex="propsindex" />
    <ViewDetailsSidebar :propsindex="propsindex" />
    <AddNotePopup :propsindex="propsindex" />
  </div>
</template>
<script>
import ViewShopSidebar from "./popups/ViewShopSidebar.vue";
import HoldRequestPopup from "./popups/HoldRequestPopup.vue";
import DenyRequestPopup from "./popups/DenyRequestPopup.vue";
import AssignLeadPopup from "./popups/AssignLeadPopup.vue";
import ViewDetailsSidebar from "./popups/ViewDetailsSidebar.vue";
import AddNotePopup from "./popups/AddNotePopup.vue";
export default {
  components: {
    AssignLeadPopup,
    DenyRequestPopup,
    HoldRequestPopup,
    ViewShopSidebar,
    ViewDetailsSidebar,
    AddNotePopup,
  },
  name: "AllPopups",
  props: ["propsindex"],
};
</script>
<style lang="scss"></style>
