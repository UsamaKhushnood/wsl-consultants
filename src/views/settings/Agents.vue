<template>
  <div class="all-agents-list">
    <div class="agents-list">
      <div
        class="agent bg-white mr-1 p-3 bg-gray-100 mb-2 align-items-center"
        v-for="(i, x) in [1, 2, 3, 4, 5]"
        :key="x"
      >
        <div class="d-flex">
          <div class="mr-3">
            <b-avatar>
              <!-- {{
              i.first_name
                .split(" ")
                .map((i) => i.charAt(0))
                .join("")                        
                .toUpperCase()
            }} -->
              AN
            </b-avatar>
          </div>
          <div>
            <h5 class="mb-0">Agent Name</h5>
            <p class="m-0 text-primary text-bold" v-if="x == 2">
              Call Center Agent
            </p>
            <p class="m-0 text-success text-bold" v-else>Sales Agent</p>
          </div>
          <div class="ml-auto align-self-baseline">
            <b-button size="sm" variant="link">
              View Profile
            </b-button>
          </div>
        </div>
        <hr />
        <div>
          <!-- for call center agent  -->
          <div class="performance" v-if="x == 2">
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold mb-0">Last Month's Leads</h6>
              <h6 class="f-14 text-bold mb-0">80</h6>
            </div>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold mb-0">This Month's Leads</h6>
              <h6 class="f-14 text-bold mb-0">50</h6>
            </div>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold mb-0">Overall Leads</h6>
              <h6 class="f-14 text-bold mb-0">130</h6>
            </div>
          </div>
          <!-- for sales agent  -->
          <div class="performance" v-else>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold text-primary mb-0">In Progress</h6>
              <h6 class="f-14 text-bold mb-0">80</h6>
            </div>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold text-blue mb-0">Expected</h6>
              <h6 class="f-14 text-bold mb-0">50</h6>
            </div>
            <div
              class="stats d-flex align-items-center justify-content-between mb-2"
            >
              <h6 class="f-14 text-bold text-success mb-0">Applied</h6>
              <h6 class="f-14 text-bold mb-0">130</h6>
            </div>
          </div>
        </div>
        <hr />
        <div class="actions d-flex">
          <b-button
            size="sm"
            variant="dark"
            class="ml-auto"
            @click="copyCredentials(x)"
            >Copy Credentials</b-button
          >
          <b-button
            size="sm"
            variant="danger"
            class="ml-1"
            @click="deleteAgents(i)"
          >
            <b-icon icon="trash"></b-icon>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.agents-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
</style>
