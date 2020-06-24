import "babel-polyfill";
import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import "aos/dist/aos.css";
import Vuelidate from "vuelidate";
import "nprogress/nprogress.css";

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      once: true
    });
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
