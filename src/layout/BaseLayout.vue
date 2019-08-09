<template>
  <ut-layout class='base-layout'>
    <ut-sider :class="['base-layout__sider',`base-layout--${setting.navTheme}`]" :style='{width:!navCollapse?"200px":"64px"}'>
      <div class="logo"><img src="../assets/images/logo.png" alt=""><h1 v-if='!navCollapse'>{{setting.title}}</h1></div>
      <router-view name='nav'></router-view>
    </ut-sider>
    <ut-layout class="base-content">
      <ut-affix ref='fixed' :offset-top="setting.fixedHeader?0:-999999" target='.base-content'>
        <ut-header class="base-layout__header" >
          <icon name='outdent' @click.native='clickNav' :style='{transform:!navCollapse? "rotate(-180deg)":"rotate(0)"}' class="layout-icon"></icon>
          <router-view name='header'></router-view>
        </ut-header>
      </ut-affix>
      <ut-content><router-view name='content'></router-view></ut-content>
      <ut-footer><router-view name='footer'></router-view></ut-footer>
    </ut-layout>
  </ut-layout>
</template>
<script>
import setting from '@/defaultSetting'
import { mapGetters } from 'vuex'
export default {
  name: 'Baselayout',
  data () {
    return {
      setting
    }
  },
  watch: {
    navCollapse (val) {
      const LEFT = val ? '65px' : '200px'
      const $dom = this.$refs.fixed.$el.querySelector('.utear-affix')
      if ($dom) {
        $dom.style.width = `calc(100% - ${LEFT})`
        $dom.style.left = LEFT
      }
    }
  },
  computed: {
    ...mapGetters({
      navCollapse: 'navCollapse'
    })
  },
  methods: {
    clickNav () {
      this.$store.dispatch({
        type: 'toggleCollapse'
      })
    }
  }
}
</script>
<style scoped lang='less'>
  @import '../assets/css/var.less';
  .base-layout{
    height: 100%;
    &--dark{
      background: @navBgColor;
    }
    &--light{
      .logo {
        background: #fff;
        border-bottom: 1px solid #eee;
        h1 {
          color: #002140;
        }
      }
    }
    &__sider{
      box-shadow: 2px 0 6px rgba(0,21,41,.08);
      position: relative;
      z-index: 2;
    }
    &__header{
      background: @white;
      position: relative;
      z-index: 1;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);
    }
    /deep/ .utear-layout{
      flex:1;
    }
    /deep/ .utear-menu--dark{
      background:shade(@navBgColor,20%);
      & .utear-submenu .utear-menu{
          background:shade(@navBgColor,40%);
      }
    }
    /deep/ .utear-affix {
      transition: all 0.3s ease;
    }
  }
  .logo{
    display: flex;
    height: 64px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    h1{
      text-align: center;
      font-size: 20px;
      color:@white;
      margin: 0;
      white-space: nowrap;
    }
    img{
      width:30px;
      margin-right: 8px;
      margin-left:5px;
    }
  }
  .layout-icon{
    position: absolute;
    cursor: pointer;
    transform: rotate(-180deg);
    display: block;
  }
</style>
