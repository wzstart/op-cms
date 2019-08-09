<template>
  <div>
    <template v-if='authorized&&authInited'>
      <slot></slot>
    </template>
    <span v-else-if='!authInited'>认证中...</span>
    <page401 v-else></page401>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import page401 from '../../layout/_errorPage/401'
import pathToRegexp from 'path-to-regexp'
export default {
  name: 'Authorized',
  created () {
    if (!this.authorized && this.authInited) {
      this.$message.error('你无权访问当前页面')
    }
  },
  components: {
    page401
  },
  computed: {
    ...mapGetters(['authList', 'authInited', 'authDisable']),
    authorized () {
      return this.authDisable || this.checkRoute
    },
    checkRoute () {
      return this.authList.some(val => {
        return pathToRegexp(val).test(this.$route.path)
      })
    }
  }
}
</script>
