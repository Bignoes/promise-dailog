export default (Vue, component, propsData = {}) => {
  const app = document.querySelector("#app");
  const div = document.createElement("div", {});
  const el = document.createElement("div");
  div.appendChild(el);
  app.appendChild(div);

  const ComponentConstructor = Vue.extend(component);
  let instance = new ComponentConstructor({
    propsData,
    parent: app.__vue__,
  }).$mount(el);

  const destroyDialog = () => {
    if (instance && div.parentNode) {
      instance.$destroy();
      instance = null;
      div.parentNode && div.parentNode.removeChild(div);
    }
  };

  return new Promise((resolve) => {
    instance.$once("close", (...arg) => {
      destroyDialog();
      resolve(...arg);
    });
  });
};
