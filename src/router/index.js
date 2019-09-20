import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import Policy from "../components/dashboard/Policy";
import Flow from "../components/dashboard/Flow";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home"
    },
    {
      path: "/policy/",
      component: Policy,
      name: "Policy"
    },
    {
      path: "/flow/",
      component: Flow,
      name: "Flow"
    }
  ]
});
