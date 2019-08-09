import Vue from 'vue'
import Icon from './base/Icon.vue'
import PageHeader from './base/PageHeader.vue'
import globalNav from './base/globalNav'
import globalHeader from './base/globalHeader.vue'
import globalFooter from './base/globalFooter.vue'
import Authorized from './base/Authorized.vue'
Vue.component(Icon.name, Icon)
Vue.component(PageHeader.name, PageHeader)
Vue.component(globalNav.name, globalNav)
Vue.component(globalHeader.name, globalHeader)
Vue.component(globalFooter.name, globalFooter)
Vue.component(Authorized.name, Authorized)
