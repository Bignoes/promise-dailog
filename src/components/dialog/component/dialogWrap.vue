<template>
  <div class="dw-dialog-wrap">
    <div class="dw-dialog-container">
      <div class="dw-dialog-header">
        <slot name="title"></slot>
        <img
          @click="$parent.$closeDialog()"
          class="close-icon"
          :src="CloseIcon"
          alt=""
        />
      </div>
      <div class="dw-dialog-content">
        <slot></slot>
      </div>
      <div v-if="$slots.footer" class="dw-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "../icon/close.png";
export default {
  data() {
    return {
      CloseIcon,
    };
  },
};
</script>
<style scoped>
.dw-dialog-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}
.dw-dialog-container {
  position: relative;
  min-height: 200px;
  min-width: 300px;
  margin: auto;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: 80px;
}
.dw-dialog-header {
  position: relative;
  padding-left: 20px;

  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  color: #333333;
  line-height: 42px;

  background: #f8f8f8;
  border-bottom: 1px solid #eeeeee;
}

.dw-dialog-content {
  padding: 20px;
  box-sizing: border-box;
}

.dw-dialog-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 0 20px;

  background: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.28);
  box-sizing: border-box;
}

.close-icon {
  position: absolute;
  top: 50%;
  right: 10px;

  width: 32px;
  height: 32px;

  transform: translateY(-50%);
  cursor: pointer;
}
</style>
