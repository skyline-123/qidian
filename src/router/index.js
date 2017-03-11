import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../page/index/index.vue'
import femalePage from '../page/index/female.vue'
import malePage from '../page/index/male.vue'
import searchPage from '../page/search-page/search-page.vue'
import category from '../page/category-page/category-page.vue'
import cMale from '../page/category-page/male.vue'
import cFemale from '../page/category-page/female.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
        path: 'male',
        component: malePage
      },
      {
        path: 'female',
        component: femalePage
      }
    ]
  },
  {
    path: '/category',
    name: 'navigation',
    component: category,
    children: [
      {
        path: 'male',
        component: cMale
      },
      {
        path: 'female',
        component: cFemale
      }
    ]
  },
  {
    path: '/search',
    name: 'searchPace',
    component: searchPage
  },
  {
    path: '*',
    redirect: '/index/male'
  }
]

export default new VueRouter({
  routes
})
