<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default {
  name: 'app',
  components: {
    'v-header': header
  }
}
</script>

<style>
    @import './common/css/main.css'
</style>
