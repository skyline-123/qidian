<template>
  <div class="category-page">
    <nav-top :titleLink="titleLink"></nav-top>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from '../../components/footer/footer.vue'
  import top from '../../components/common/nav-top/nav-top.vue'
  export default {
    name: 'category-page',
    data () {
      return {
        titleLink: {
          title: '分类',
          linkM: '/category/male',
          linkF: '/category/female'
        }
      }
    },
    components: {
      'v-footer': footer,
      'nav-top': top
    },
    mounted () {
      window.onscroll = null
    }
  }
</script>

<style scoped>
  .category-page {
    background: #fff;
  }
</style>
