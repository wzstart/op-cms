import setting from '@/defaultSetting.json'
import Router from 'vue-router'
import footer from '@/layout/_base/Footer.vue'
import header from '@/layout/_base/Header.vue'
import nav from '@/layout/_base/Nav.vue'
import { createRoutes } from '@/common/utils'
/* global ROUTER_LIST */
const Components = {
  footer,
  header,
  nav
}
const routeList = createRoutes(ROUTER_LIST)
setting.homeURI && routeList.unshift({ path: '/', redirect: setting.homeURI })
const routes = routeList.concat([ {
  path: '/404',
  components: {
    content: () => import('@/layout/_errorPage/404')
  }
}, {
  path: '/401',
  components: {
    content: () => import('@/layout/_errorPage/401')
  }
}, {
  path: '(.+)',
  redirect: '/404'
}])
routes.forEach((val, idx) => {
  const dataMap = val;
  ['header', 'footer', 'nav'].forEach(item => {
    val.components && !val.components[item] && (dataMap.components[item] = Components[item])
    item === 'nav' && (dataMap.props = { nav: { mode: setting.layout === 'topMenu' ? 'horizontal' : 'vertical', theme: setting.navTheme } })
  })
})
export default new Router({ routes })
