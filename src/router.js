import Vue from 'vue'
import Router from 'vue-router'
import Error from './views/Error.vue'
import Home from './views/Home.vue'
import Units from './views/Units.vue'
import Contact from './views/Contact.vue'
import Unit_detail from './views/Unit_detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '*',
      name: 'Error',
      component: Error
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/units',
      name: 'Units',
      component: Units,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/units/:unitId',
      name: 'Unit_detail',
      component: Unit_detail,
    },
  ]
})