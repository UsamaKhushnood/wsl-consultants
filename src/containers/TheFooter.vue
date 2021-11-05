<template>
  <CFooter :fixed="false">
    <div>
      <!-- <a href="https://coreui.io" target="_blank">CoreUI</a> -->
      <span class="ml-1">
        Copyright &copy;{{ new Date().getFullYear() }} WSL Consultants. All
        Rights Reserved</span
      >
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://coreui.io/vue">CoreUI for Vue</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
