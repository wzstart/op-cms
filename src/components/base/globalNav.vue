<template>
  <div>
      <ut-nav :theme='theme' unique-opened :mode='mode' :router='router' :collapse=navCollapse>
        <navPane :data='item' v-for='item in data' :key='item.id'></navPane>
      </ut-nav>
  </div>
</template>
<script>
import navPane from './navPane'
import { mapGetters } from 'vuex'
export default {
  name: 'globalNav',
  props: {
    data: Array,
    router: Boolean,
    mode: String,
    theme: String
  },
  components: {
    navPane
  },
  computed: {
    ...mapGetters({
      navCollapse: 'navCollapse'
    })
  }
}
</script>
