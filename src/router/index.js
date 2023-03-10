import Vue from 'vue'
import Router from 'vue-router'
import Front from '@/pages/Front'
import About from '@/pages/About'
import Area from '@/pages/Area'
import Category from '@/pages/Category'
import Menu from '@/pages/Menu'
import Purpose from '@/pages/Purpose'
import Contact from '@/pages/Contact'
import PurposeDate from '@/pages/PurposeDate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/purpose',
      name: 'purpose',
      component: Purpose
    },
    {
      path: '/purpose/date',
      name: 'purposeDate',
      component: PurposeDate
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/area',
      name: 'area',
      component: Area
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
