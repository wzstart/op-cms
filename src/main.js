import Vue from 'vue'
import App from '@/App'
import VueUtear from 'vue-utear'
import Router from 'vue-router'
import router from './router'
import VueMeta from 'vue-meta'
import 'vue-utear/dist/vue-utear.css'
import '@/assets/css/index.less'
import store from '@/models'
import http from '@/assets/js/http'
import '@/components'
Vue.config.productionTip = false
Vue.use(VueUtear)
Vue.use(VueMeta)
Vue.use(Router)

Vue.prototype.$http = http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
