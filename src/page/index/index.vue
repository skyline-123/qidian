<template>
  <div class="index">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from '../../components/header/header.vue'
  import footer from '../../components/footer/footer.vue'
  export default {
    name: 'index-page',
    components: {
      'v-header': header,
      'v-footer': footer
    }
  }
</script>

<style>
  @import '../../common/css/main.css';
</style>
