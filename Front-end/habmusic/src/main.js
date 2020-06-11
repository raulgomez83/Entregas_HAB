import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vue from "vue-";

Vue.component("vue-", vue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
