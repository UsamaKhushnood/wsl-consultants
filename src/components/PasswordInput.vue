<template>
  <div class="position-relative">
    <input
      :type="visible ? 'text' : 'password'"
      id="=password"
      v-model="password"
    />
    <b-icon
      icon="eye"
      class="fa-2x passwordEyeIcon"
      v-if="visible === false"
      @click="visible = true"
    ></b-icon>
    <b-icon
      v-else
      icon="eye-slash"
      class="fa-2x passwordEyeIcon"
      @click="visible = false"
    ></b-icon>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {
      visible: true,
    };
  },
  computed: {
    password() {
      return this.value;
    },
  },
};
</script>

<style scoped>
.passwordEyeIcon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
</style>
