<template>
  <div class="module-title">
    <h3>{{titleMore.name}}</h3>
    <slot name="subtitle"></slot>
    <a class="more" v-if="titleMore.more">更多</a>
  </div>
</template>
<script>
  export default {
    name: 'module-title',
    props: {
      titleMore: {
        type: Object
      }
    }
  }
</script>
<style>
  @import '../../../common/css/font/方正中粗雅宋_GBK.css';
  .module-title {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 1.75rem;
    padding: 0.6875rem 0.46875rem;
    background-color: #fff;
  }
  .module-title h3 {
    display: inline-block;
    font-size: 0.53125rem;
    font-family: "方正中粗雅宋_GBK";
    font-weight: 300;
    vertical-align: top;
  }
  .module-title h3:before {
    display: inline-block;
    content: '';
    border-left: 0.0625rem solid #ed424b;
    vertical-align: -0.0625rem;
    width: 0.34375rem;
    height: 0.46875rem;
  }
  .module-title a.more {
    display: inline-block;
    position: absolute;
    top: 0.6875rem;
    right: 0.46875rem;
    font-size: 0.46875rem;
    color: #8B8A90;
    font-weight: 400;
  }
  .module-title a.more:after {
    display: inline-block;
    vertical-align: top;
    content: '';
    width: 0.234375rem;
    height: 0.46875rem;
    margin-left: 16px;
    background: url("title-more.png") no-repeat;
    background-size: 0.234375rem 0.46875rem;
  }
</style>
