<template>
  <div>
    <b-modal :id="'hold-request-modal' + propsindex" title="Hold this Request">
<div class="modal-body">
                    <form method="post">
                        <div class="form-group">
                            <select class="custom-select">
                                <option selected="">Select the hold reason</option>
                                <option value="1">Because of</option>
                                <option value="2">Because of</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="text">
                        </div>
                        <button type="submit" class="btn btn-primary btn-sm">OK</button>
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
