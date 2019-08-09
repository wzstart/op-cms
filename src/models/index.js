import Vue from 'vue'
import Vuex from 'vuex'
import footer from './modules/footer'
import header from './modules/header'
import nav from './modules/nav'
import user from './modules/user'
import authorized from './modules/authorized'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    footer,
    header,
    nav,
    user,
    authorized
  },
  strict: debug
})
