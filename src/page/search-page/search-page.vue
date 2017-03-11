<template>
  <div class="search-info">
    <div class="search-top">
      <span class="search-logo"></span>
      <input type="text" :placeholder="randomKeyword" ref="search-input">
      <a href="javascript:window.history.go(-1)">取消</a>
    </div>
    <div class="search-title">
      大家都在搜
    </div>
    <div class="search-tag">
      <a href="#nowhere" v-for="tag in searchTags">{{tag.name}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        keyword: [],
        searchTags: []
      }
    },
    created () {
      this.keyword = ['战歌之王', '超魔构筑师', '无敌天下', '网络神豪', '圣墟']
      this.searchTags = [
        {name: '我真不是开玩笑'},
        {name: '超级传奇商店'},
        {name: '料理王'},
        {name: '悟空看私聊'},
        {name: '怪物乐园'},
        {name: '今宋'},
        {name: '盗天仙途'},
        {name: '真理大帝'},
        {name: '法神降临'},
        {name: '杀神永生'}
      ]
    },
    computed: {
      randomKeyword () {
        return this.keyword[parseInt(Math.random() * (this.keyword.length))]
      }
    },
    // methods: {
    //   back () {
    //     if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
    //       window.location.href = window.document.referrer  // 解决iPhone的后退问题
    //     } else { window.history.go(-1) }
    //   }
    // },
    mounted () {
      this.$refs['search-input'].focus()
    }
  }
</script>

<style scoped>
  .search-info {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    z-index: 100;
    overflow: hidden;
  }
  .search-info .search-top {
    height: 1.34375rem;
    width: 100%;
    position: relative;
    border-bottom: 0.03125rem solid #ECEDEF;
  }
  .search-info input[type="text"] {
    position: absolute;
    box-sizing: border-box;
    width: 7.65625rem;
    height: 0.96875rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 0.53125rem;
    padding: 0 1.0rem;
    border-color: transparent;
    border-radius: 0.125rem;
    font-size: 0.375rem;
    background: url("../../components/header/search-logo.png") no-repeat #F5F6F9;
    background-size: 0.921875rem 0.921875rem;
  }
  .search-info .search-top a {
    position: absolute;
    width: 0.8125rem;
    height: 0.5rem;
    line-height: 0.5rem;
    top: 0;
    bottom: 0;
    right: 0.5rem;
    margin: auto 0;
    font-size: 0.375rem;
  }
  .search-info .search-title {
    box-sizing: border-box;
    width: 100%;
    height: 1.375rem;
    color: #86878A;
    font-size: 0.375rem;
    background-color: #F6F6F6;
    padding: 0.6875rem 7.46875rem 0 0.5rem;
  }
  .search-tag {
    box-sizing: border-box;
    width: 100%;
    height: 5.125rem;
    padding: 0.140625rem 1.65625rem 0.375rem 0.5rem;
  }
  .search-tag a {
    display: inline-block;
    margin: 0.25rem 0.25rem 0 0;
    padding: 0 0.328125rem;
    line-height: 0.84375rem;
    border: 1px solid #848992;
    border-radius: 1.5625rem;
    color: #848992;
  }
</style>
