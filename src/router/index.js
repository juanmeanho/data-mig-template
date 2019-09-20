import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Dashboard from '../components/dashboard/Dashboard';


Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [{ 
            path: '/', 
            component: Home,
            name: 'Home'
         },
         { 
            path: '/dashboard/:nu_id/:text_id', 
            component: Dashboard,
            name: 'Dashboard'
         },
    ]
});