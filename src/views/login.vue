<template>
  <div class="login-layout">
    <div class="layouts-user-layout-top">
      <div class="layouts-user-layout-header">
        <img alt="logo" class="layouts-user-layout-logo" src="../assets/images/logo.png">
        <span class="layouts-user-layout-title">{{setting.title}}</span>
        </div>
    </div>
    <div class="login-main" @keyup.enter="login">
      <ut-input placeholder="用户名或邮箱"></ut-input>
      <ut-input type='password' class="password" placeholder="密码"></ut-input>
      <div class="tool"><ut-checkbox>自动登录</ut-checkbox><a href="" style="float: right;"><span>忘记密码</span></a></div>
      <button @click ="login"  type="submit" class="login-btn"><span>登录</span></button>
    </div>
  </div>
</template>
<script>
import setting from '@/defaultSetting'
export default {
  data () {
    return {
      setting
    }
  },
  methods: {
    login () {
      console.log('登录')
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style scoped lang='less'>
.login-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5;
  background-image: url('../assets/images/background.svg');
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  justify-content: center;
}
.layouts-user-layout {
  &-top {
    text-align: center;
  }
  &-header {
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: center;
  }
  &-logo {
    height: 44px;
    vertical-align: top;
    margin-right: 16px;
  }
  &-title {
    font-size: 28px;
    color: rgba(0,0,0,.85);
    font-family: Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;
    font-weight: 600;
    position: relative;
    top: 2px;
  }
}
.login-main{
    width: 368px;
    margin: 0 auto;
    margin-top: 50px;
}
.password{
  margin-top: 30px;
}
.tool{
  margin-top: 20px;
  a{
    color: #1890ff;
    background-color: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color .3s;
  }
}
.login-btn{
  line-height: 1.5;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    height: 32px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    position: relative;
    box-shadow: 0 2px 0 rgba(0,0,0,.015);
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border: 1px solid #d9d9d9;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
    height: 40px;
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 0 rgba(0,0,0,.035);
    width: 100%;
    margin-top: 24px;
    outline: 0;
    &:hover{
      color: #fff;
      background-color: #40a9ff;
      border-color: #40a9ff;
    }
}
</style>
