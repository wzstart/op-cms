<template>
  <div class="error-container">
    <ut-row>
      <ut-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2>抱歉，你无权访问该页面</h2>
        <ut-button @click="back" type='primary'>返回</ut-button>
      </ut-col>
      <ut-col :span="12">
        <img :src="Image" width="313" height="428" alt="Girl has dropped her ice cream.">
      </ut-col>
    </ut-row>
  </div>
</template>

<script>
import Image from '@/assets/images/401.svg'
export default {
  name: 'page401',
  data () {
    return {
      Image
    }
  },
  methods: {
    back () {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="less" scoped>
  .error-container {
    width: 800px;
    margin: 100px auto;
     color: #444;
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .text-jumbo {
      padding-top: 30px;
      font-size: 60px;
      font-weight: 700;
    }
    h2{
      margin-bottom: 30px;
      color: #989898;
    }
  }
</style>
