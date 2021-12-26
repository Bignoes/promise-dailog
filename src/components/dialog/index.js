import OpenDialog from "./dialog";
import DialogWrap from './component/dialogWrap.vue'

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$openDialog = (comp, propsData) => OpenDialog(Vue, comp, propsData);

  Vue.component("dialog-wrap", DialogWrap)

  Vue.mixin({
    methods: {
      $closeDialog(...arg) {
        this.$emit('close', ...arg)
      }
    }
  });
}

// auto plugin install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use({
    install
  });
}

// export default
export default {
  install
};
