<template>
  <dialog-wrap>
    <span slot="title">first dialog title</span>
    <div class="dialog-content">
      <div>first dialog content</div>
      <div>props data</div>
      <pre>{{ data }}</pre>
      <button @click="openSecondDialog">open second dialog</button>
    </div>
    <template slot="footer">
      <button @click="$closeDialog({ data: 'first-dialog-data' })">
        confirm
      </button>
      <button @click="$closeDialog()">cancel</button>
    </template>
  </dialog-wrap>
</template>

<script>
import SencondDialog from "./second-dialog.vue";
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    openSecondDialog() {
      this.$openDialog(SencondDialog).then((data) => {
        if (data) {
          //
        } else {
          //
        }
      });
    },
  },
};
</script>
<style lang="less" scoped></style>
