import Vue from 'vue'
import Router from 'vue-router'
import Front from '@/pages/Front'
import Area from '@/pages/Area'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front
    },
    {
      path: '/Area',
      name: 'Area',
      component: Area
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
