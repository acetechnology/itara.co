import Vue from "vue";
import Router from "vue-router";
import goTo from "vuetify/es5/services/goto";
import Home from "./views/Home.vue";
import Careers from "./views/Careers.vue";

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;
    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }
    return goTo(scrollTo);
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true,
      meta: { title: "Itara.co - Home" }
    },
    {
      path: "/careers",
      name: "careers",
      component: Careers,
      props: true,
      meta: { title: "Itara.co - Careers" }
    }
  ]
});

export default router;
