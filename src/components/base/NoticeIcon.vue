<template>
  <ut-popover trigger='click' class="notice-icon" placement="bottom-end">
    <ut-badge :dot='dot' v-model='count' :max='max'>
      <icon name='bell' :size='21'></icon>
    </ut-badge>
    <template slot='content'>
      <ut-tabs style='tabs' class='notice-icon__tabs'  ref='tabs' v-loading='loading' v-model='currentTab'>
        <slot></slot>
        <div slot='addonAfter' v-if='dataList&&dataList[currentTab-1]&&dataList[currentTab-1].list.length' @click='clearMessage' class="notice-icon__clear">清空消息</div>
      </ut-tabs>
    </template>
  </ut-popover>
</template>
<script>
export default {
  name: 'notice-icon',
  data () {
    return {
      currentTab: 1,
      dataList: []
    }
  },
  props: {
    dot: Boolean,
    loading: Boolean,
    max: Number
  },
  methods: {
    clearMessage () {
      this.$emit('clear', this.currentTab)
    }
  },
  computed: {
    count () {
      let count = 0
      this.dataList.forEach(val => {
        count += val.list.length || 0
      })
      return count
    }
  }
}
</script>

<style lang='less' scoped>
  .notice-icon{
    /deep/ .utear-popover__rel{
      display: flex;
      justify-items:center;
      align-content: center;
    }
    /deep/ .utear-list-item {
        padding: 8px 16px;
    }
    /deep/ .utear-badge{
      height: 21px;
      line-height: 21px;
    }
    &__tabs{
      /deep/ .utear-tabs__item{
        width: 130px;
        text-align: center;
        padding: 10px 0;
      }
    }
  }
  .notice-icon__clear{
    cursor: pointer;
    text-align:center;
    border-top:1px solid #eee;
    padding:10px 0;
    margin-bottom: -18px;
  }
  .notice-icon__tabs{
    margin:-15px -10px 0 -10px;
    font-size:14px;
    width: auto !important;
    /deep/ .utear-tabs__after{
      margin-top: 0;
    }
    /deep/ .utear-tabs__header{
      margin-bottom: 0;
    }
    /deep/ .utear-list-item{
      cursor: pointer;
      &:hover{
        background: #ebf7ff;
      }
    }
  }
</style>
