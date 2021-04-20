import Vue from 'vue'
import App from './App.vue'
import vuePrintDesigner from '../src'
import VueRouter from 'vue-router'
import Designer from './page/designer.vue'
import Index from './page/index.vue'
import install from "./page/install.vue";
import vuePrint from "../src/install/install.js";

Vue.use(VueRouter)
Vue.use(vuePrintDesigner)
Vue.use(vuePrint);
const routes = [
  { path: "/", component: Index },
  { path: "/designer", component: Designer },
  { path: "/install", component: install }
];
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
