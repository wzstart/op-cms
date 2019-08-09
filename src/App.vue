<template>
  <div id="app">
    <template v-if='setting.layout==="base"&&$route.path!=="/login"'>
      <base-layout></base-layout>
    </template>
    <template v-if='setting.layout==="topMenu"&&$route.path!=="/login"'>
      <topmenu-layout></topmenu-layout>
    </template>
    <template v-if='$route.path==="/login"'>
      <router-view name='content'></router-view>
      <div class="utear-layout-footer"><router-view name='footer'></router-view></div>
    </template>
  </div>
</template>

<script>
import TopmenuLayout from '@/layout/TopmenuLayout'
import BaseLayout from '@/layout/BaseLayout'
import setting from '@/defaultSetting.json'
export default {
  name: 'App',
  data () {
    return {
      setting
    }
  },
  mounted () {
    this.$store.dispatch('fetchAuthList')
  },
  components: {
    TopmenuLayout,
    BaseLayout
  }
}
</script>
<style>
  html,body,#app{
    height:100%;
    display: flex;
    flex-direction: column;
  }
</style>
