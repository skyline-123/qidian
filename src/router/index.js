import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../page/index.vue'
import nav from '../page/navigation.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/index', name: 'index', component: index },
    { path: '/nav', name: 'navigation', component: nav },
    { path: '*', redirect: '/index' }
  ]
})
