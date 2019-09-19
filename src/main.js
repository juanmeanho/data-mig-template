import Vue from 'vue'
import router from './router';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vue-material-design-icons/styles.css';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import MinusIcon from 'vue-material-design-icons/Minus.vue';
import ArrowDown from 'vue-material-design-icons/ArrowDown.vue';

import VueRouter from 'vue-router'

Vue.use(VueRouter)
 
Vue.component('menu-icon', MenuIcon);
Vue.component('minus-icon', MinusIcon);
Vue.component('arrow-down', ArrowDown);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
