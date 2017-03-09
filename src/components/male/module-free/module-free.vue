<template>
  <div class="module-free">
    <module-title :titleMore="titleMore">
      <count-down slot="subtitle"></count-down>
    </module-title>
    <module-show-pic :showPicInfo="showPicInfo" :cornerInfo="cornerInfo">
    </module-show-pic>
  </div>
</template>
<script>
  import title from '../../common/module-title/module-title.vue'
  import count from '../../common/count-down/count-down.vue'
  import pic from '../../common/module-show-pic/module-show-pic.vue'
  export default {
    name: 'module-free',
    data () {
      return {
        titleMore: {
          name: '限时免费',
          more: true
        },
        showPicInfo: [],
        cornerInfo: {
          isFree: true,
          ifTop: false
        }
      }
    },
    components: {
      'module-title': title,
      'count-down': count,
      'module-show-pic': pic
    },
    created () {
      this.showPicInfo = [
        {
          url: require('./free-01.jpeg'),
          title: '幻想世界大穿越',
          author: '辰一十一'
        },
        {
          url: require('./free-02.jpeg'),
          title: '会穿越的国王',
          author: '余大'
        },
        {
          url: require('./free-03.jpeg'),
          title: '玄镜司',
          author: '剑舞秀'
        },
        {
          url: require('./free-04.jpeg'),
          title: '位面之时空之匙',
          author: '久猫'
        },
        {
          url: require('./free-05.jpeg'),
          title: '重活一次',
          author: '妖月白狐'
        },
        {
          url: require('./free-06.jpeg'),
          title: '倾宋',
          author: '然籇'
        },
        {
          url: require('./free-07.jpeg'),
          title: '老九门',
          author: '南派三叔'
        }
      ]
    }
  }
</script>
<style>

</style>
