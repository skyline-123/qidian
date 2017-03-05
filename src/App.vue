<template>
  <div id="app">
    <v-header></v-header>
    <v-hot></v-hot>
    <div class="insert">
      <a class="new-book">新书强推</a><a class="net-article">三江·网文新风</a>
    </div>
    <v-free></v-free>
    <v-charts></v-charts>
    <v-new></v-new>
    <v-whole></v-whole>
    <v-catalogue></v-catalogue>
    <v-anime></v-anime>
    <v-like></v-like>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import hot from './components/module-hot/module-hot.vue'
  import free from './components/module-free/module-free.vue'
  import charts from './components/module-charts/module-charts.vue'
  import vnew from './components/module-new/module-new.vue'
  import whole from './components/module-whole/module-whole.vue'
  import catalogue from './components/module-catalogue/module-catalogue.vue'
  import anime from './components/module-anime/module-anime.vue'
  import like from './components/module-like/module-like.vue'
  import footer from './components/footer/footer.vue'
  export default {
    data () {
      return {
        moduleTitle: {
          hot: {name: '热门小说', more: false},
          free: {name: '限时免费', more: true},
          charts: {name: '排行榜', more: true},
          new: {name: '新书抢鲜', more: true},
          whole: {name: '畅销完本', more: true},
          catalogue: {name: '分类推荐', more: true},
          anime: {name: '二次元', more: true},
          like: {name: '猜你喜欢', more: false},
          topic: {name: '精选专题', more: false}
        }
      }
    },
    name: 'app',
    components: {
      'v-header': header,
      'v-hot': hot,
      'v-free': free,
      'v-charts': charts,
      'v-new': vnew,
      'v-whole': whole,
      'v-catalogue': catalogue,
      'v-anime': anime,
      'v-like': like,
      'v-footer': footer
    }
  }
</script>

<style>
  @import './common/css/main.css';
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
