import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/', name: 'Home', component: () => import('../views/index/index') },
  { path: '/info', name: 'Info', component: () => import('../views/index/info') }, ,
  { path: '/search', name: 'Search', component: () => import('../views/search/index') },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
