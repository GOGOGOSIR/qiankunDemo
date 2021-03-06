const routes = [
  {
    path: '/app-vue-history/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/app-vue-history/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
]

export default routes
