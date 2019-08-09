<template>
  <ut-layout class='top-layout'>
    <ut-layout>
      <ut-affix class='fixed'  :offset-top="setting.fixedHeader?0:-999999" target='.top-layout .utear-layout'>
        <ut-header class="top-layout__header" :class="`top-layout--${setting.navTheme}`">
          <div class='nav'>
            <div>
              <div class="logo"><img src="../assets/images/logo.png" alt=""><h1>{{setting.title}}</h1></div>
            </div>
            <router-view name='nav'></router-view>
          </div>
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
export default {
  name: 'TopmenuLayout',
  data () {
    return {
      setting
    }
  }
}
</script>
<style scoped lang='less'>
@import '../assets/css/var.less';
.nav{
  position:absolute;
  display: flex;
}
.top-layout {
  height: 100%;
  /deep/ .fixed .utear-affix{
    width:100% !important;
  }
  &__sider {
    background: @navBgColor;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    position: relative;
    z-index: 2;
  }
  &__header {
    background: @white;
    position: relative;
    z-index: 1;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }
  &--dark{
    background: #3d3e3e;
    .logo h1{
      color: #fff;
    }
  }
  /deep/ .utear-layout {
    flex: 1;
  }
  /deep/ .utear-submenu.is-active{
    background: #171717;
    .utear-submenu__title,i{
      color:#fff;
    }
  }
  /deep/ .top-layout--light{
    .utear-submenu.is-active{
      background: #fff;
      .utear-submenu__title,i{
        color:#171717;
      }
    }
  }
}
.logo {
  display: flex;
  height: 64px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 24px;
  h1 {
    text-align: center;
    font-size: 20px;
    color: #002140;
    margin: 0;
    white-space: nowrap;
  }
  img {
    width: 30px;
    margin-right: 8px;
    margin-left: 5px;
  }
}
.layout-icon {
  position: absolute;
  cursor: pointer;
  transform: rotate(-180deg);
  display: block;
}
</style>
