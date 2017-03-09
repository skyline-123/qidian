<template>
  <div class="male">
    <div class="container">
      <div class="h-carousel">
        <h-carousel></h-carousel>
      </div>
      <div class="h-search">
        <router-link to="/search"><span></span>{{randomKeyword}}</router-link>
      </div>
    </div>
    <div class="h-navigation">
      <div class="nav-single" v-for="nav in navigations">
        <router-link to="/category">
          <img :src="nav.url" :alt="nav.name">
          <h2>{{nav.name}}</h2>
        </router-link>
      </div>
    </div>
    <v-hot></v-hot>
    <div class="insert">
      <a class="new-book">新书强推</a><a class="net-article">三江·网文新风</a>
    </div>
    <v-free></v-free>
    <v-charts></v-charts>
    <v-new></v-new>
    <v-whole></v-whole>
    <v-category></v-category>
    <v-anime></v-anime>
    <v-like></v-like>
  </div>
</template>

<script>
  import carousel from '../../components/common/carousel.vue'
  import hot from '../../components/male/module-hot/module-hot.vue'
  import free from '../../components/male/module-free/module-free.vue'
  import charts from '../../components/male/module-charts/module-charts.vue'
  import vnew from '../../components/male/module-new/module-new.vue'
  import whole from '../../components/male/module-whole/module-whole.vue'
  import category from '../../components/male/module-category/module-category.vue'
  import anime from '../../components/male/module-anime/module-anime.vue'
  import like from '../../components/male/module-like/module-like.vue'
  export default {
    name: 'index-page',
    data () {
      return {
        moduleTitle: {
          hot: {name: '热门小说', more: false},
          free: {name: '限时免费', more: true},
          charts: {name: '排行榜', more: true},
          new: {name: '新书抢鲜', more: true},
          whole: {name: '畅销完本', more: true},
          category: {name: '分类推荐', more: true},
          anime: {name: '二次元', more: true},
          like: {name: '猜你喜欢', more: false},
          topic: {name: '精选专题', more: false}
        },
        navigations: []
      }
    },
    components: {
      'h-carousel': carousel,
      'v-hot': hot,
      'v-free': free,
      'v-charts': charts,
      'v-new': vnew,
      'v-whole': whole,
      'v-category': category,
      'v-anime': anime,
      'v-like': like
    },
    computed: {
      randomKeyword () {
        return this.keyword[parseInt(Math.random() * (this.keyword.length))]
      }
    },
    created () {
      this.keyword = ['战歌之王', '超魔构筑师', '无敌天下', '网络神豪', '圣墟']
      this.navigations = [
        {url: require('../../components/header/header-nav-1.png'), name: '分类'},
        {url: require('../../components/header/header-nav-2.png'), name: '排行榜'},
        {url: require('../../components/header/header-nav-3.png'), name: '免费'},
        {url: require('../../components/header/header-nav-4.png'), name: '完本'},
        {url: require('../../components/header/header-nav-5.png'), name: '大神'}
      ]
    }
  }
</script>

<style>
  .male .container {
    margin: 0.28125rem 24px 0;
    width: auto;
  }
  .male .h-carousel {
    margin-top: 0.3125rem;
  }

  .male .h-carousel span.swiper-pagination-bullet-active {
    background-color: #E92737;
  }

  .male .h-carousel span.swiper-pagination-bullet {
    width: 0.15625rem;
    height: 0.15625rem;
  }

  .male .h-search a {
    display: block;
    width: 100%;
    height: 1.0rem;
    margin: 0.21875rem 0;
    border-radius: 0.125rem;
    line-height: 1.0rem;
    background: #fff;
    text-align: center;
  }
  a, a:link, a:visited, a:hover, a:active {
    color: #8F939B;
  }
  .male .h-search a span:nth-child(1) {
    display: inline-block;
    width: 0.921875rem;
    height: 0.921875rem;
    vertical-align: middle;
    background: url("../../components/header/header-search.png") no-repeat;
    background-size: 0.921875rem 0.921875rem;
  }
  .male .h-search a span:nth-child(2) {
    padding-top: 0.078125rem;
  }
  .male .h-navigation {
    box-sizing: border-box;
    width: 100%;
    height: 2.625rem;
    background-color: #fff;
    padding: 0.5rem 0.3125rem;
  }
  .male .h-navigation .nav-single {
    width: 1.40625rem;
    height: 1.59375rem;
    text-align: center;
    float: left;
    margin: 0 0.234375rem;
  }
  .male .h-navigation .nav-single img {
    display: inline-block;
    margin-left: 0.046875rem;
    width: 0.9375rem;
    height: 0.9375rem;
  }
  .male .h-navigation .nav-single h2 {
    margin-top: 0.046875rem;
    font-weight: bold;
  }
  /* end of header */
  div.insert {
    width: 100%;
    height: 1.90625rem;
    text-align: center;
  }
  div.insert a {
    display: inline-block;
    width: 4.25rem;
    height: 0.90625rem;
    margin-top: 0.5rem;
    line-height: 0.90625rem;
    border: 0.03125rem solid #ed424b;
    border-radius: 1.5625rem;
    color: #ed424b;
    text-align: center;
  }
  div.insert a.new-book {
    margin-right: 0.5625rem;
  }
</style>
