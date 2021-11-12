<template>
  <CFooter :fixed="false">
    <div>
      <span class="ml-1">
        Copyright &copy;{{ new Date().getFullYear() }} WSL Consultants. All
        Rights Reserved</span
      >
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://www.upwork.com/freelancers/~018d5c776de29047a0" target="_blank">Caps Lock Studio</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
