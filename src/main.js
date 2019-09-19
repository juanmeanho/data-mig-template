import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "vue-material-design-icons/styles.css";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import MinusIcon from "vue-material-design-icons/Minus.vue";
import ArrowDown from "vue-material-design-icons/ArrowDown.vue";
import "./ml";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.component("menu-icon", MenuIcon);
Vue.component("minus-icon", MinusIcon);
Vue.component("arrow-down", ArrowDown);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
