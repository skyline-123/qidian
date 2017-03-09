<template>
  <div class="module-anime">
    <module-title :titleMore="titleMore">
    </module-title>
    <module-show-pic :showPicInfo="showPicInfo" :cornerInfo="cornerInfo"></module-show-pic>
  </div>
</template>
<script>
  import title from '../../common/module-title/module-title.vue'
  import pic from '../../common/module-show-pic/module-show-pic.vue'
  export default {
    name: 'module-anime',
    data () {
      return {
        titleMore: {name: '二次元', more: true},
        showPicInfo: [],
        cornerInfo: {
          isFree: false,
          isTop: false
        }
      }
    },
    components: {
      'module-title': title,
      'module-show-pic': pic
    },
    created () {
      this.showPicInfo = [
        {url: require('./anime-1.jpeg'), title: '变身B战萝莉', author: '陋室咸鱼'},
        {url: require('./anime-2.jpeg'), title: '在下慎二,有何贵干', author: '烂衣奸少'},
        {url: require('./anime-3.jpeg'), title: '二次元国度', author: '言叶庭'},
        {url: require('./anime-4.jpeg'), title: '综漫之主神医生', author: '一心一医'},
        {url: require('./anime-5.jpeg'), title: '王者峡谷最强小兵', author: '五斗不折腰'}
      ]
    }
  }
</script>
<style>
  .module-anime {
    margin-top: 0.21875rem;
    background: #fff;
  }
</style>
