import designer from "../../example/page/designer.vue";
let vuePrint = {};
vuePrint.install = function(Vue, options) {
  Vue.prototype.$msg = "Hello I am install.js";
  Vue.prototype.$myMethod = function(arr) {
    if (arr.length < 0) {
      return false;
    } else {
      arr = arr.join("---INSTALL---");
      return arr;
    }
  };
  Vue.component(designer.name, designer); // testPanel.name 组件的name属性
};
export default vuePrint;
