import Vue from 'vue'
import Router from 'vue-router'
import Front from '@/pages/Front'
import About from '@/pages/About'
// import Area from '@/pages/Area'
import Category from '@/pages/Category'
// import Menu from '@/pages/Menu'
// import Purpose from '@/pages/Purpose'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front
    },
    // {
    //   path: '/area',
    //   name: 'area',
    //   component: Area
    // },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    }
    // {
    //   path: '/menu',
    //   name: 'menu',
    //   component: Menu
    // },
    // {
    //   path: '/purpose',
    //   name: 'purpose',
    //   component: Purpose
    // }
  ]
})
