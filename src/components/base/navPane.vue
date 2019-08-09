<template>
  <ut-nav-sub :index='data.id' v-if='data.children'>
    <template slot='title'>
      <icon :name='data.icon' :size='17' style="margin-right:5px;"></icon><span slot='title'>{{data.title}}</span>
    </template>
    <navPane v-for="item in data.children" :key='item.id' :data='item'></navPane>
  </ut-nav-sub>
  <ut-nav-item v-else :key='data.id' :index='data.path'>{{data.title}}</ut-nav-item>
</template>
<script>
import Icon from './Icon'
export default {
  name: 'navPane',
  props: {
    data: Object
  },
  components: {
    Icon
  }
}
</script>
