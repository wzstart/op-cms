<template>
  <div class="global-header" :class='[`global-header--${setting.navTheme}`,`global-header--${setting.layout}`]'>
    <div class="tool" v-if='setting.help'>
      <icon name='question-circle' size='21' @click.native="goTo(setting.help)"></icon>
    </div>
    <div class="tool" v-if='setting.notice'>
      <notice-icon @clear='clear' @item-click='itemClick'>
        <notice-icon-tab v-for='data in navIcon.list'
         :empty-image='data.emptyImage'
         :list='data.list'
         :title='data.title'
         :key='data.title'>
        </notice-icon-tab>
      </notice-icon>
    </div>
    <ut-dropdown>
        <div class="user-info tool">
          <div class="avatar">
            <img :src="userInfo.avatar" alt="avatar">
          </div>
          <span>{{userInfo.userName}}</span>
        </div>
        <template slot='dropdown'>
            <ut-dropdown-item class='user-info-nav' @click.native='goTo(item.path)' v-for='item in userInfo.list' :key='item.title'>{{item.title}}</ut-dropdown-item>
            <ut-dropdown-item class='user-info-nav' divided>退出登录</ut-dropdown-item>
        </template>
    </ut-dropdown>
  </div>
</template>

<script>
import NoticeIcon from './NoticeIcon'
import NoticeIconTab from './NoticeIconTab'
import setting from '@/defaultSetting'
export default {
  name: 'globalHeader',
  props: {
    userInfo: Object,
    navIcon: Object
  },
  components: {
    NoticeIcon,
    NoticeIconTab
  },
  data () {
    return {
      setting
    }
  },
  methods: {
    goTo (path) {
      if (/http/.test(path)) {
        location.href = path
      } else {
        this.$router.push(path)
      }
    },
    clear (idx) {
      this.$emit('clear', idx)
    },
    itemClick (item, idx) {
      this.$emit('item-click', item, idx)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .global-header{
    display: flex;
    justify-content: flex-end;
    &--dark&--topMenu{
      color:#fff;
      .tool:hover{
        background: #1890ff;
      }
    }
  }
  .avatar{
    display: flex;
    align-items: center;
    margin-right: 8px;
    img{
      width: 35px;
      height:35px;
      border-radius: 50%;
      border:1px solid #eee;
    }
  }
  .tool{
    width: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover{
      background: #d9ecff;
    }
  }
  .user-info{
    width: auto;
    padding: 0 16px;
    font-size: 14px;
  }
  .user-info-nav{
    font-size: 13px;
  }
</style>
