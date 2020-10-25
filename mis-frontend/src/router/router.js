import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Main layour views
import Public from '../views/Public.vue';
import Private from '../views/Private.vue';

// Private views
import Dashboard from '../views/private/Dashboard.vue';
import Identities from '../views/private/Identities.vue';
import Domains from '../views/private/Domains.vue';
import Roles from '../views/private/Roles.vue';

const routes = [
  {
    path: '/',
    name: 'Public',
    component: Public,
  },
  {
    path: '/private',
    component: Private,
    children: [
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/identities',
        component: Identities,
      },
      {
        path: '/domains',
        component: Domains,
      },
      {
        path: '/roles',
        component: Roles,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
