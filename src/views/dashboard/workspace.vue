<template>
  <div>
    <page-header :breadcrumb-list='breadcrumbList'>
      <template slot='logo'><ut-avatar style='width:65px;height:65px;border-radius:50%'  src='http://img.zcool.cn/community/01b38d554100a6000001e71bcdb382.jpg'></ut-avatar></template>
      <template slot='content'>
        <div class='content-title'>早安，XXXX，祝你开心每一天！</div>
        <span>交互专家 | APUS－XXXXX－某某平台部－某某技术部</span>
      </template>
      <template slot="extra-content">
        <div class="statItem"><p>项目数</p><p>56</p></div>
        <div class="statItem"><p>团队内排名</p><p>8<span> / 24</span></p></div>
        <div class="statItem"><p>项目访问</p><p>2,223</p></div>
      </template>
    </page-header>
    <div class="workspace-content" >
      <ut-card shadow='never' class="workspace-grid" :body-style='{padding:0}'>
        <div slot='header'><span style='font-size:16px'>进行中的项目</span></div>
        <ut-card-grid style='width:25%;cursor: pointer;' v-for='i in 11' :key='i'>
          <ut-avatar style='width:25px;height:25px' src='https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png'></ut-avatar> <span style="display:inline-block;margin-left:16px">Bootstrap</span>
          <div style='margin-top:16px;'>那时候我只会想自己想要什么，从不想自己拥有什么</div>
        </ut-card-grid>
      </ut-card>
      <ut-card shadow='never'>
        <div slot='header'><span style='font-size:16px'>进行中的项目</span></div>
        <ut-list divided>
          <ut-list-item v-for='i in 8' :key='i'>
            <ut-avatar slot='avatar' src='http://img.zcool.cn/community/01b38d554100a6000001e71bcdb382.jpg'></ut-avatar>
            <div slot='title'>XXXX 在 高逼格设计天团 新建项目 六月迭代</div>
            <div slot='description'>{{i}}天前</div>
          </ut-list-item>
        </ut-list>
      </ut-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dashboard',
  data () {
    return {
      breadcrumbList: [{
        title: '首页'
      }, {
        title: 'Dashboard'
      }, {
        title: '工作台'
      }]
    }
  }
}
</script>
<style lang='less' scoped>
  .content-title{
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(0,0,0,.85);
    margin-bottom: 12px;
  }
  .statItem{
    padding: 0 16px;
    text-align: left;
    position: relative;
    display: inline-block;
    &>p{
      color: rgba(0,0,0,.85);
      font-size: 30px;
      line-height: 38px;
      margin: 0;
      &>span{
        color: rgba(0,0,0,.45);
        font-size: 20px;
      }
      &:first-child{
        color: rgba(0,0,0,.45);
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 4px;
      }
    }
  }
  .workspace-content{
    padding: 16px;
  }
  .workspace-grid{
    margin-bottom:16px;
    /deep/ .utear-card-header{
      margin-bottom:-1px;
    }
  }
  .workspace-content{
     /deep/ .utear-card{
      border:0;
    }
  }
</style>
