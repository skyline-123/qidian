<template>
  <div class="header">
    <div class="container">
      <div class="h-top">
        <a href="#nowhere"><h1>起点中文网</h1></a>
        <div class="t-male-female">
          <span class="male active">男生</span><span class="female">女生</span>
        </div>
        <div class="t-info">
          <span class="user"></span><span class="bookcase"></span>
        </div>
      </div>
      <div class="h-carousel">
        <h-carousel></h-carousel>
      </div>
      <div class="h-search">
        <a href="#nowhere" @click="enterSearch"><span></span>{{randomKeyword}}</a>
      </div>
    </div>
    <div class="search-info" v-show="isSearchInfo">
    	<div class="search-top">
    	    <span class="search-logo"></span>
    		<input type="text" :placeholder="randomKeyword">
    		<a href="#nowhere" @click="cancelSearch">取消</a>
    	</div>
    	<div class="search-title">
    		大家都在搜
    	</div>
    	<div class="search-tag">
    		<a href="#nowhere" v-for="tag in searchTags">{{tag.name}}</a>
    	</div>
    </div>
    <div class="h-navigation">
      <div class="nav-single" v-for="nav in navigations">
        <router-link to="/nav">
        <img :src="nav.url" :alt="nav.name">
        <h2>{{nav.name}}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import carousel from '../carousel.vue'
  export default {
    name: 'header',
    data () {
      return {
        keyword: [],
        isSearchInfo: false,
        searchTags: [],
        navigations: []
      }
    },
    computed: {
      randomKeyword () {
        return this.keyword[parseInt(Math.random() * (this.keyword.length))]
      }
    },
    components: {
      'h-carousel': carousel
    },
    methods: {
      cancelSearch () {
        this.isSearchInfo = false
      },
      enterSearch () {
        this.isSearchInfo = true
      }
    },
    created () {
      this.keyword = ['战歌之王', '超魔构筑师', '无敌天下', '网络神豪', '圣墟']
      this.navigations = [
        {url: require('./header-nav-1.png'), name: '分类'},
        {url: require('./header-nav-2.png'), name: '排行榜'},
        {url: require('./header-nav-3.png'), name: '免费'},
        {url: require('./header-nav-4.png'), name: '完本'},
        {url: require('./header-nav-5.png'), name: '大神'}
      ]
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
    }
  }
</script>
<style>
  .header .container {
    margin: 0.28125rem 24px 0;
    width: auto;
  }

  [data-dpr="1"] .header .container {
    margin: 0.28125rem 12px 0;
  }

  .header .h-top {
    position: relative;
    overflow: hidden;
  }

  .header .h-top h1 {
    float: left;
    width: 3.03125rem;
    height: 0.84375rem;
    color: transparent;
    background: url("header-logo.png") no-repeat;
    background-size: 100%;
  }

  .header .h-top .t-male-female {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -1.40625rem;
  }

  .header .h-top .t-male-female span {
    display: inline-block;
    padding: 0 0.3125rem;
    line-height: 0.78125rem;
    border: 0.03125rem solid #ed424b;
    text-align: center;
    font-weight: normal;
    color: #ed424b;
  }

  .header .h-top .t-male-female span.male {
    border-right: none;
    border-radius: 0.125rem 0 0 0.125rem;
  }

  .header .h-top .t-male-female span.female {
    border-left: none;
    border-radius: 0 0.125rem 0.125rem 0;
  }

  .header .h-top .t-male-female span.active {
    background-color: #ed424b;
    color: #fff;
    font-weight: bold;
  }

  .header .h-top .t-info {
    float: right;
    display: inline-block;
  }

  .header .h-top .t-info span {
    display: inline-block;
    width: 0.84375rem;
    height: 0.84375rem;
  }

  .header .h-top .t-info .user {
    background: url("header-user.png");
    background-size: 0.84375rem 0.84375rem;
    margin-right: 0.375rem;
  }

  .header .h-top .t-info .bookcase {
    background: url("header-bookcase.png");
    background-size: 0.84375rem 0.84375rem;
  }

  .header .h-carousel {
    margin-top: 0.3125rem;
  }

  .header .h-carousel span.swiper-pagination-bullet-active {
    background-color: #E92737;
  }

  .header .h-carousel span.swiper-pagination-bullet {
    width: 0.15625rem;
    height: 0.15625rem;
  }

  .header .h-search a {
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
  .header .h-search a span:nth-child(1) {
  	display: inline-block;
  	width: 0.921875rem;
  	height: 0.921875rem;
  	vertical-align: middle;
  	background: url("header-search.png") no-repeat;
  	background-size: 0.921875rem 0.921875rem;
  }
  .header .h-search a span:nth-child(2) {
  	padding-top: 0.078125rem;
  }
  .header .search-info {
  	position: fixed;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  	background: #FFFFFF;
  	z-index: 100;
    overflow: hidden;
  }
  .header .search-info .search-top {
  	height: 1.34375rem;
  	width: 100%;
  	position: relative;
  	border-bottom: 0.03125rem solid #ECEDEF;
  }
  .header .search-info input[type="text"] {
  	position: absolute;
  	box-sizing: border-box;
  	width: 7.65625rem;
  	height: 0.96875rem;
  	top: 0;
  	bottom: 0;
  	margin: auto 0;
  	left: 0.53125rem;
  	padding: 0 1.0rem;
  	background: #F5F6F9;
  	border-color: transparent;
  	border-radius: 0.125rem;
  	font-size: 0.375rem;
  	background-color: #F4F5F8;
  	background: url("search-logo.png") no-repeat #F5F6F9;
  	background-size: 0.921875rem 0.921875rem;
  }
  .header .search-info .search-top a {
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
  .header .search-info .search-title {
  	box-sizing: border-box;
  	width: 100%;
  	height: 1.375rem;
  	color: #86878A;
  	font-size: 0.375rem;
  	background-color: #F6F6F6;
  	padding: 0.6875rem 7.46875rem 0 0.5rem;
  }
  .header .search-tag {
  	box-sizing: border-box;
  	width: 100%;
  	height: 5.125rem;
    padding: 0.140625rem 1.65625rem 0.375rem 0.5rem;
  }
  .header .search-tag a {
  	display: inline-block;
  	margin: 0.25rem 0.25rem 0 0;
  	padding: 0 0.328125rem;
  	line-height: 0.84375rem;
  	border: 1px solid #848992;
  	border-radius: 1.5625rem;
  	color: #848992;
  }
  .header .h-navigation {
    box-sizing: border-box;
    width: 100%;
    height: 2.625rem;
    background-color: #fff;
    padding: 0.5rem 0.3125rem;
  }
  .header .h-navigation .nav-single {
    width: 1.40625rem;
    height: 1.59375rem;
    text-align: center;
    float: left;
    margin: 0 0.234375rem;
  }
  .header .h-navigation .nav-single img {
    display: inline-block;
    margin-left: 0.046875rem;
    width: 0.9375rem;
    height: 0.9375rem;
  }
  .header .h-navigation .nav-single h2 {
    margin-top: 0.046875rem;
    font-weight: bold;
  }
</style>
