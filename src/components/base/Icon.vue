<template>
  <i :class="className" :style=styleCalc></i>
</template>
<script>
export default {
  name: 'icon',
  props: {
    size: {
      type: [Number, String],
      default: 20
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    className () {
      return ['utear-pro-icon', `pro-icon-${this.name}`]
    },
    styleCalc () {
      return { 'font-size': this.size + 'px' }
    }
  }
}
</script>
