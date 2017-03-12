<template>
  <div class="charts-page">
    <nav-top :titleLink="titleLink"></nav-top>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import top from '../../components/common/nav-top/nav-top.vue'
  import footer from '../../components/footer/footer.vue'
  export default {
    name: 'charts-page',
    data () {
      return {
        titleLink: {
          title: '排行榜',
          linkM: '/charts/male',
          linkF: '/charts/female'
        }
      }
    },
    components: {
      'nav-top': top,
      'v-footer': footer
    }
  }
</script>

<style scoped>
  .charts-page {
    background: #fff;
  }
</style>
