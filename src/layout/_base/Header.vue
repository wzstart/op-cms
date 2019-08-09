<template>
  <global-header :user-info='userInfo' :nav-icon='navIcon' @item-click='itemClick' @clear='clearMsg'></global-header>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'headers',
  computed: mapGetters({
    userInfo: 'userInfo',
    navIcon: 'navIcon'
  }),
  methods: {
    clearMsg (idx) {
      this.$store.dispatch('clearMessage', idx - 1)
    },
    itemClick (item, idx) {
      console.log(item, idx)
    }
  }
}
</script>
