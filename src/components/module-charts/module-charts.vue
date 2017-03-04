<template>
  <div class="module-charts">
    <module-title :titleMore="titleMore"></module-title>
    <div class="charts-nav">
      <span :class="{active: item.isActive}" v-for="item in items" @click="toggleActive(item)">{{item.name}}</span>
    </div>
    <div class="toggle-area">
      <module-show-pic :showPicInfo="showPicInfoA" :cornerInfo="cornerInfo" v-if="items[0].isActive"></module-show-pic>
      <module-show-pic :showPicInfo="showPicInfoB" :cornerInfo="cornerInfo" v-if="items[1].isActive"></module-show-pic>
      <module-show-pic :showPicInfo="showPicInfoC" :cornerInfo="cornerInfo" v-if="items[2].isActive"></module-show-pic>
      <module-show-pic :showPicInfo="showPicInfoD" :cornerInfo="cornerInfo" v-if="items[3].isActive"></module-show-pic>
    </div>
  </div>
</template>
<script>
  import title from '../module-title/module-title.vue'
  import pic from '../module-show-pic/module-show-pic.vue'
  export default {
    name: 'module-charts',
    data () {
      return {
        titleMore: {
          name: '排行榜',
          more: true
        },
        items: [
          {name: '热销榜', isActive: true},
          {name: '风云榜', isActive: false},
          {name: '签约榜', isActive: false},
          {name: '推荐榜', isActive: false}
        ],
        cornerInfo: {
          isFree: false,
          isTop: true
        },
        showPicInfoA: [],
        showPicInfoB: [],
        showPicInfoC: [],
        showPicInfoD: []
      }
    },
    components: {
      'module-title': title,
      'module-show-pic': pic
    },
    methods: {
      toggleActive (item) {
        this.items.map(function (each) {
          each.isActive = false
          item.isActive = true
        })
      }
    },
    created () {
      this.showPicInfoA = [
        {url: require('./hot1-1.jpeg'), title: '圣墟', author: '辰东'},
        {url: require('./hot1-2.jpeg'), title: '一念永恒', author: '耳根'},
        {url: require('./hot1-3.jpeg'), title: '重生完美时代', author: '公子不歌'},
        {url: require('./hot1-4.jpeg'), title: '重生之都市修仙', author: '十里剑神'},
        {url: require('./hot1-5.jpeg'), title: '不朽凡人', author: '鹅是老五'},
        {url: require('./hot1-6.jpeg'), title: '修正聊天群', author: '圣骑士的传说'},
        {url: require('./hot1-7.jpeg'), title: '大主宰', author: '天蚕土豆'},
        {url: require('./hot1-8.jpeg'), title: '雪鹰领主', author: '我吃西红柿'},
        {url: require('./hot1-9.jpeg'), title: '天道图书馆', author: '横扫天涯'},
        {url: require('./hot1-10.jpeg'), title: '真武世界', author: '蝉茧里的牛'}
      ]
      this.showPicInfoB = [
        {url: require('./hot2-1.jpeg'), title: '盗天仙途', author: '荆柯守'},
        {url: require('./hot2-2.jpeg'), title: '极品道士下山', author: '风吹梧桐01'},
        {url: require('./hot2-3.jpeg'), title: '名侦探世界里的巫师', author: '追梦人Love平'},
        {url: require('./hot2-4.jpeg'), title: '穿梭诸天', author: '大日浴东海'},
        {url: require('./hot2-5.jpeg'), title: '长乐歌', author: '三戒大师'},
        {url: require('./hot2-6.jpeg'), title: '疯骑士的宇宙时代', author: '愤怒的松鼠'},
        {url: require('./hot2-7.jpeg'), title: '都市之神级宗师', author: '悠闲疯'},
        {url: require('./hot2-8.jpeg'), title: '从写手到巨星', author: '虫2'},
        {url: require('./hot2-9.jpeg'), title: '大宋好屠夫', author: '祝家大郎'},
        {url: require('./hot2-10.jpeg'), title: '超能重工', author: '肖邦的原罪'}
      ]
      this.showPicInfoC = [
        {url: require('./hot3-1.jpeg'), title: '有我无敌', author: '吴纯纯'},
        {url: require('./hot3-2.jpeg'), title: '末世之盗神觉醒', author: '天地一寒鸦'},
        {url: require('./hot3-3.jpeg'), title: '异世之召唤文臣武将', author: '酒池醉'},
        {url: require('./hot3-4.jpeg'), title: '最强虚拟现实', author: '饱食.QD'},
        {url: require('./hot3-5.jpeg'), title: '神级控偶师', author: '浅梦浮生'},
        {url: require('./hot3-6.jpeg'), title: 'VR革命', author: '一亿八千武'},
        {url: require('./hot3-7.jpeg'), title: '变身B站萝莉', author: '陋室咸鱼'},
        {url: require('./hot3-8.jpeg'), title: '明朝浮生记', author: '山寒'},
        {url: require('./hot3-9.jpeg'), title: '天龙英雄传', author: '吉祥白菜'},
        {url: require('./hot3-10.jpeg'), title: '大智龙王', author: '犁阳'}
      ]
      this.showPicInfoD = [
        {url: require('./hot2-1.jpeg'), title: '圣墟', author: '辰东'},
        {url: require('./hot4-2.jpeg'), title: '斗战狂潮', author: '骷髅精灵'},
        {url: require('./hot4-3.jpeg'), title: '五行天', author: '方想'},
        {url: require('./hot4-4.jpeg'), title: '一念永恒', author: '耳根'},
        {url: require('./hot4-5.jpeg'), title: '不朽凡人', author: '鹅是老五'},
        {url: require('./hot4-6.jpeg'), title: '雪鹰领主', author: '我吃西红柿'},
        {url: require('./hot4-7.jpeg'), title: '天影', author: '萧鼎'},
        {url: require('./hot4-8.jpeg'), title: '万古第一强者', author: '隐为者'},
        {url: require('./hot4-9.jpeg'), title: '道君', author: '跃千愁'},
        {url: require('./hot4-10.jpeg'), title: '修真遇美记', author: '熊飞天下'}
      ]
    }
  }
</script>
<style>
  .module-charts {
    background: #fff;
    margin-top: 0.375rem
  }

  .module-charts .toggle-area {
    margin-top: 0.59375rem;
  }

  .module-charts .charts-nav {
    padding: 0 0.5rem;
    font-size: 0;
    text-align: center;
  }

  .module-charts .charts-nav span {
    display: inline-block;
    box-sizing: border-box;
    font-size: 0.40625rem;
    height: 0.875rem;
    width: 2.21875rem;
    line-height: 0.875rem;
    color: #E92939;
    text-align: center;
    border: 0.03125rem solid #E92939;
    border-right: none;
  }

  .module-charts .charts-nav span:nth-child(1) {
    border-radius: 0.125rem 0 0 0.125rem;
  }

  .module-charts .charts-nav span:nth-child(4) {
    border-radius: 0 0.125rem 0.125rem 0;
    border-right: 0.03125rem solid #E92939;
  }

  .module-charts .charts-nav span.active {
    background-color: #E92939;
    color: #fff;
    font-weight: bold;
  }
</style>
