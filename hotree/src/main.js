import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/global.css";
import FormPartAbout from "../src/components/FormPartAbout.vue"


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: {
    FormPartAbout
  },
  render: h => h(App)
}).$mount("#app");
