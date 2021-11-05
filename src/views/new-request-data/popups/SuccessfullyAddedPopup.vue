<template>
  <div>
    <b-modal :id="'successfully-added-modal' + propsindex" title="Successfully Added">
      <div class="modal-body">
        <form method="post">
          <div class="form-group">
            <input type="text" placeholder="Username" />
          </div>

          <div class="form-group">
            <input type="text" placeholder="Password" />
          </div>

          <div class="form-group">
            <input type="text" placeholder="Re-enter Password" />
          </div>
          <button type="submit" class="btn btn-primary btn-sm">ACCEPT</button>
        </form>
      </div>
      <template #modal-footer="{hide}">
        <div class="w-100">
          <b-button variant="dark" size="sm" class="float-right" @click="hide" squared>
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ["propsindex"],
};
</script>
<style lang="scsss"></style>
