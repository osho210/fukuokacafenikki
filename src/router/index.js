import Vue from 'vue'
import Router from 'vue-router'
import Front from '@/components/Front'
import Area from '@/components/Area'

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
    }
  ]
})
