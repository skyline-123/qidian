<template>
  <swiper :options="swiperOption" ref="mySwiperA">
    <!-- 幻灯内容 -->
    <swiper-slide><img src="../header/header-carousel-1.jpeg" alt="1.jpeg"></swiper-slide>
    <swiper-slide><img src="../header/header-carousel-2.jpeg" alt="2.jpeg"></swiper-slide>
    <swiper-slide><img src="../header/header-carousel-3.jpeg" alt="3.jpeg"></swiper-slide>
    <swiper-slide><img src="../header/header-carousel-4.jpeg" alt="4"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
  import Vue from 'vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  Vue.use(VueAwesomeSwiper)
  export default {
    name: 'header-carousel',
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: false,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          loop: true
        }
      }
    }
  }
</script>
<style scoped>
  img {
  	display: block;
    width: 100%;
    height: 2.90625rem;
  }
</style>
