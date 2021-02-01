import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/app-vue-hash/home'
  },
  // {
  //   path: '/',
  //   redirect: '/NewHouse/NewHouse/GardenIndex'
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
