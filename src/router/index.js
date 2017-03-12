import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../page/index/index.vue'
import femalePage from '../page/index/female.vue'
import malePage from '../page/index/male.vue'
import searchPage from '../page/search-page/search-page.vue'
import category from '../page/category-page/category-page.vue'
import cMale from '../page/category-page/male.vue'
import cFemale from '../page/category-page/female.vue'
import charts from '../page/charts-page/charts-page.vue'
import chMale from '../page/charts-page/male.vue'
import chFemale from '../page/charts-page/female.vue'
import free from '../page/free-page/free-page.vue'
import whole from '../page/whole-page/whole-page.vue'
import author from '../page/author-page/author-page.vue'
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
    path: '/charts',
    name: 'chartsPage',
    component: charts,
    children: [
      {
        path: 'male',
        component: chMale
      },
      {
        path: 'female',
        component: chFemale
      }
    ]
  },
  {
    path: '/search',
    name: 'searchPage',
    component: searchPage
  },
  {
    name: 'freePage',
    path: '/free',
    component: free
  },
  {
    name: 'wholePage',
    path: '/whole',
    component: whole
  },
  {
    name: 'authorPage',
    path: '/author',
    component: author
  },
  {
    path: '*',
    redirect: '/index/male'
  }
]

export default new VueRouter({
  routes
})
