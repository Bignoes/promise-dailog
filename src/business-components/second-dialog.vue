<template>
  <dialog-wrap>
    <span slot="title">second dialog title</span>
    <div class="dialog-content">
      <div>second dialog content</div>
    </div>
    <template slot="footer">
      <button @click="$closeDialog({ data: 'second-dialog-data' })">
        confirm
      </button>
      <button @click="$closeDialog()">cancel</button>
    </template>
  </dialog-wrap>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
