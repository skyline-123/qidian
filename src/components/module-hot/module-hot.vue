<template>
  <div class="module-hot">
    <module-title :titleMore="titleMore">
      <span slot="subtitle" class="subtitle">起点编辑推荐</span>
    </module-title>
    <module-show-pic :showPicInfo="showPicInfo" :cornerInfo="cornerInfo"></module-show-pic>
  </div>
</template>

<script>
  import title from '../module-title/module-title.vue'
  import pic from '../module-show-pic/module-show-pic.vue'
  export default {
    name: 'module-hot',
    data () {
      return {
        titleMore: {name: '热门小说', more: false},
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
        {
          url: require('./hot-01.jpeg'),
          title: '垂钓诸天',
          author: '道在不可鸣'
        },
        {
          url: require('./hot-02.jpeg'),
          title: '寻找走丢的舰娘',
          author: '海底熔岩'
        },
        {
          url: require('./hot-03.jpeg'),
          title: '末日之巨龙饲主',
          author: '冰糖哪吒'
        },
        {
          url: require('./hot-04.jpeg'),
          title: '绝对选项',
          author: '梨落秋溪'
        },
        {
          url: require('./hot-05.jpeg'),
          title: '美食供应商',
          author: '会做菜的猫'
        },
        {
          url: require('./hot-06.jpeg'),
          title: '英雄联盟之胜者联盟',
          author: '爱开大差'
        },
        {
          url: require('./hot-07.jpeg'),
          title: '隋末阴雄',
          author: '指云笑天道1'
        }
      ]
    }
  }
</script>

<style>
  .module-hot {
    margin-top: 0.21875rem;
  }
  .module-hot span.subtitle {
    margin-left: 0.15625rem;
    font-size: 0.375rem;
    color: #8A8C93;
    vertical-align: bottom;
  }
</style>
