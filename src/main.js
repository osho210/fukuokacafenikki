// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/common.css'
import './assets/style/frontContent.css'
import './assets/style/categoryPage.css'
import gv from './mixins/globalValiables'
import VueCarousel from 'vue-carousel'
Vue.mixin(gv)
Vue.use(VueCarousel)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
