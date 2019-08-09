/* disable-eslit no-use-v-if-with-v-for*/
<template>
  <div class="page-header">
    <ut-breadcrumb class="page-header__breadcrumb" v-if='breadcrumbList'>
      <template v-for="item in breadcrumbList">
        <ut-breadcrumb-item  :key='item.title' v-if='item.href' :to='item.href'>{{item.title}}</ut-breadcrumb-item>
      <ut-breadcrumb-item :key='item.title' v-else>{{item.title}}</ut-breadcrumb-item>
      </template>

    </ut-breadcrumb>
    <div class="page-header__detail">
      <div class="page-header__logo" v-if="$slots.logo">
        <slot name='logo'></slot>
      </div>
      <div class="page-header__main">
        <div class="row" v-if="$slots.actions||$slots.title">
          <div class="page-header__title" v-if="$slots.title">
             <slot name='title'></slot>
          </div>
          <div class="page-header__actions" v-if="$slots.actions">
             <slot name='actions'></slot>
          </div>
        </div>
        <div class="row" v-if="$slots.content||$slots['extra-content']">
          <div class="page-header__content" v-if="$slots.content">
             <slot name='content'></slot>
          </div>
          <div class="page-header__extra-content" v-if="$slots['extra-content']">
            <slot name='extra-content'></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pageHeader',
  props: {
    breadcrumbList: Array
  }
}
</script>
<style lang='less' scoped>
  .page-header{
    background: #fff;
    padding: 16px 32px 0;
    border-bottom: 1px solid #e8e8e8;
    &__breadcrumb{
      margin-bottom: 16px;
    }
    &__detail,.row{
      display: flex;
    }
    &__actions, &__content, &__extra-content, &__main, &__title{
      flex: 1;
    }
    &__logo{
      flex: 0 1 auto;
      margin-right: 16px;
      padding-top: 1px;
      margin-bottom: 16px;
    }
    &__actions, &__content, &__extra-content, &__logo, &__title{
      margin-bottom: 16px;
    }
    &__extra-content{
      text-align: right;
      &::before,&::after{
        content: " ";
        display: table;
      }
    }
    &__title{
      flex: 1;
      font-size: 20px;
      font-weight: 500;
      color: rgba(0,0,0,.85);
    }
    &__actions{
      text-align: right;
      flex: 1;
      margin-left: 56px;
      min-width: 266px;
    }
  }
</style>
