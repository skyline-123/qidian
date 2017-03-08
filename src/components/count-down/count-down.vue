<template>
  <time class="count-down">
    <span ref="d" class="active after"></span>
    <span ref="h" class="after"></span>
    <span ref="m" class="after"></span>
    <span ref="s"></span>
  </time>
</template>

<script>
  import {countTime} from './countTime'
  export default {
    name: 'count-down',
    mounted () {
      countTime(this.$refs.d, this.$refs.h, this.$refs.m, this.$refs.s, '2017/3/14,15:47:11')
    }
  }
</script>

<style>
  .count-down {
    font-size: 0;
  }
  .count-down span {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 0.4375rem;
    height: 0.4375rem;
    line-height: 0.4375rem;
    margin-right: 0.1875rem;
    font-size: 7px;
    font-weight: bolder;
    color: #fff;
    background: #252830;
    text-align: center;
    border-radius: 0.078125rem;
  }
  [data-dpr="2"] .count-down span {
    font-size: 14px;
  }
  [data-dpr="3"] .count-down span {
    font-size: 28px;
  }
  .count-down span.after:after {
    position: absolute;
    right: -0.125rem;
    top: 0.078125rem;
    content: ':';
    color: black;
  }
  .count-down span.active {
    background: #E72A3C;
  }
</style>
