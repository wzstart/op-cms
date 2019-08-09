<template>
  <div class="global-footer">

    <div class="links">
      <slot></slot>
      <div>Copyright <icon name='copyright' :size='14'></icon>{{copyright}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'globalFooter',
  props: {
    copyright: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.links{
  font-size: 13px;
  text-align: center;
  color:rgba(0, 0, 0, .5);
}
</style>
