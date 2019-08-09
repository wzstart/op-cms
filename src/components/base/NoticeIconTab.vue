<template>
<ut-tab-pane :label='label' style='width:390px'>
    <ut-list :min-height='200' :max-height='300' divided>
      <ut-list-item v-for='(item,idx) in list' :key='item.id||idx' @click.native='itemClick(item,idx)'>
        <ut-avatar v-if='item.avatar' style='background:#fff' :src="item.avatar" slot='avatar'></ut-avatar>
        <div slot='title'>{{item.title}} <ut-tag v-if='item.extra' :type='item.status'>{{item.extra}}</ut-tag>  </div>
        <div slot='description'>
          <div>{{item.description}}</div>
          <span class="datetime">{{item.datetime}}</span>
        </div>
      </ut-list-item>
      <div slot='empty'>
        <img :src="emptyImage" alt="not found">
        <p>{{emptyText||`你已查看所有${title}`}}</p>
      </div>
    </ut-list>
</ut-tab-pane>
</template>
<script>
export default {
  name: 'NoticeIconTab',
  props: {
    title: String,
    emptyText: String,
    emptyImage: {
      type: String,
      default: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
    },
    list: Array
  },
  created () {
    this.parent.dataList.push({ list: this.list, title: this.title })
  },
  watch: {
    list () {
      let index = null
      this.parent.dataList.forEach((item, idx) => {
        if (item.title === this.title) {
          index = idx
        }
      })
      this.$set(this.parent.dataList[index], 'list', this.list)
    }
  },
  methods: {
    itemClick (item, idx) {
      this.parent.$emit('item-click', item, idx)
    }
  },
  computed: {
    label () {
      if (!this.list.length) {
        return this.title
      } else {
        return this.title + '(' + this.list.length + ')'
      }
    },
    parent () {
      let parent = this.$parent
      while (parent.$options.name !== 'notice-icon') {
        parent = parent.$parent
      }
      return parent
    }
  }
}
</script>
<style scoped lang='less'>
  .datetime{
    font-size: 12px;
  }
  .not-found{
    text-align: center;
    display: flex;
    min-height: 200px;
    justify-content: center;
    align-items: center;
  }
</style>
