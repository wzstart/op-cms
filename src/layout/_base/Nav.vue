<template>
  <global-nav :data='navList' router :mode='mode' :theme='theme'></global-nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navs',
  props: {
    mode: {
      type: String,
      default: ''
    },
    theme: String
  },
  computed: mapGetters({
    navList: 'navList'
  })
}
</script>
