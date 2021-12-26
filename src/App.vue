<template>
  <div id="app">
    <button @click="openFirstDialog">open first dialog</button>
  </div>
</template>

<script>
import FirstDialog from "./business-components/first-dialog.vue";
export default {
  name: "App",
  data() {
    return {
      testData: {
        name: "andy",
        age: "18",
      },
    };
  },
  methods: {
    openFirstDialog() {
      this.$openDialog(FirstDialog, { data: this.testData }).then((data) => {
        console.log("dialog-close-data", data);
      });
    },
  },
};
</script>

<style></style>
