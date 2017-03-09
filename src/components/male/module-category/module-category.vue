<template>
  <div class="module-category">
    <module-title :titleMore="titleMore">
      <span slot="subtitle" class="subtitle">起点编辑推荐</span>
    </module-title>
    <!-- start of top -->
    <div class="top">
      <div class="category-nav">
        <span :class="{active: item.isActive}" v-for="item in itemsA" @click="toggleActiveA(item)">{{item.name}}</span>
      </div>
      <div class="toggle-area">
        <module-show-pic :showPicInfo="showPicInfoA" :cornerInfo="cornerInfo" v-if="itemsA[0].isActive"></module-show-pic>
        <module-show-pic :showPicInfo="showPicInfoB" :cornerInfo="cornerInfo" v-if="itemsA[1].isActive"></module-show-pic>
        <module-show-pic :showPicInfo="showPicInfoC" :cornerInfo="cornerInfo" v-if="itemsA[2].isActive"></module-show-pic>
      </div>
    </div>
    <!-- end of top -->
    <div class="line"></div>
    <!-- start of bottom -->
    <div class="bottom">
      <div class="category-nav">
        <span :class="{active: item.isActive}" v-for="item in itemsB" @click="toggleActiveB(item)">{{item.name}}</span>
      </div>
      <div class="toggle-area">
        <module-show-pic :showPicInfo="showPicInfoD" :cornerInfo="cornerInfo" v-if="itemsB[0].isActive"></module-show-pic>
        <module-show-pic :showPicInfo="showPicInfoE" :cornerInfo="cornerInfo" v-if="itemsB[1].isActive"></module-show-pic>
        <module-show-pic :showPicInfo="showPicInfoF" :cornerInfo="cornerInfo" v-if="itemsB[2].isActive"></module-show-pic>
      </div>
    </div>
    <!-- end of bottom -->
  </div>
</template>
<script>
  import title from '../../common/module-title/module-title.vue'
  import pic from '../../common/module-show-pic/module-show-pic.vue'
  export default {
    name: 'module-category',
    data () {
      return {
        titleMore: {name: '热门小说', more: true},
        showPicInfo: [],
        cornerInfo: {
          isFree: false,
          isTop: false
        },
        itemsA: [
          {name: '玄幻奇幻', isActive: true},
          {name: '武侠仙侠', isActive: false},
          {name: '都市职场', isActive: false}
        ],
        itemsB: [
          {name: '历史军事', isActive: true},
          {name: '游戏体育', isActive: false},
          {name: '科幻灵异', isActive: false}
        ],
        showPicInfoA: [],
        showPicInfoB: [],
        showPicInfoC: []
      }
    },
    components: {
      'module-title': title,
      'module-show-pic': pic
    },
    methods: {
      toggleActiveA (item) {
        this.itemsA.map(function (each) {
          each.isActive = false
          item.isActive = true
        })
      },
      toggleActiveB (item) {
        this.itemsB.map(function (each) {
          each.isActive = false
          item.isActive = true
        })
      }
    },
    created () {
      this.showPicInfoA = [
        {url: require('./category1-1.jpeg'), title: '有我无敌', author: '吴纯纯'},
        {url: require('./category1-2.jpeg'), title: '神级控偶师', author: '浅梦浮生'},
        {url: require('./category1-3.jpeg'), title: '玄界澡堂', author: '黄山忆'},
        {url: require('./category1-4.jpeg'), title: '超武补习空间', author: '私下的细语者'},
        {url: require('./category1-5.jpeg'), title: '剑巫纪', author: '中二的菌菇'}
      ]
      this.showPicInfoB = [
        {url: require('./category2-1.jpeg'), title: '寒天帝', author: '烽仙'},
        {url: require('./category2-2.jpeg'), title: '洪荒之冥河问道', author: '神仙爱凡尘'},
        {url: require('./category2-3.jpeg'), title: '大海界', author: '夜星藏'},
        {url: require('./category2-4.jpeg'), title: '洪荒之功德天榜', author: '神奇明月'},
        {url: require('./category2-5.jpeg'), title: '白袍总管', author: '萧舒'}
      ]
      this.showPicInfoC = [
        {url: require('./category3-1.jpeg'), title: '我真不是开玩笑', author: '曾经用有的方向感'},
        {url: require('./category3-2.jpeg'), title: '神级法则', author: '落烟火'},
        {url: require('./category3-3.jpeg'), title: '变身本子漫画家', author: '妙笔生污'},
        {url: require('./category3-4.jpeg'), title: '超级传奇商店', author: '二将'},
        {url: require('./category3-5.jpeg'), title: '金牌主持', author: '奥比椰'}
      ]
      this.showPicInfoD = [
        {url: require('./category4-1.jpeg'), title: '春秋我为王', author: '七月新番'},
        {url: require('./category4-2.jpeg'), title: '远征欧洲', author: '鲶鱼头'},
        {url: require('./category4-3.jpeg'), title: '乱入白蛇', author: '苏五十'},
        {url: require('./category4-4.jpeg'), title: '大宋最强教官', author: '约翰牛'},
        {url: require('./category4-5.jpeg'), title: '特战神犬', author: '云中野鹤'}
      ]
      this.showPicInfoE = [
        {url: require('./category5-1.jpeg'), title: '帝国崛起之全面战争', author: '帝国咆哮'},
        {url: require('./category5-2.jpeg'), title: '超级写轮眼', author: '姜打炮'},
        {url: require('./category5-3.jpeg'), title: '极品BUG狩猎者', author: '江画湖'},
        {url: require('./category5-4.jpeg'), title: '三国之诸天万界', author: '熊二先生'},
        {url: require('./category5-5.jpeg'), title: 'NBA大帝', author: '流浪的河'}
      ]
      this.showPicInfoF = [
        {url: require('./category6-1.jpeg'), title: '穿越黑棺', author: '望月声'},
        {url: require('./category6-2.jpeg'), title: '君临三千世界', author: '易子七'},
        {url: require('./category6-3.jpeg'), title: '恐怖二次元', author: '索索咬豚豚'},
        {url: require('./category6-4.jpeg'), title: '真理大帝', author: '树上土豆'},
        {url: require('./category6-5.jpeg'), title: '猛鬼相亲系统', author: '云夷后主'}
      ]
    }
  }
</script>
<style>
  .module-category {
    margin-top: 0.21875rem;
    background: #fff;
  }
  .module-category span.subtitle {
    margin-left: 0.15625rem;
    font-size: 0.375rem;
    color: #8A8C93;
    vertical-align: bottom;
  }
  .module-category .line {
    margin: 0 auto;
    width: 8.96875rem;
    height: 0.03125rem;
    background: #F1F1F4;
  }
  .module-category .bottom {
    margin-top: 0.53125rem;
  }
  .module-category .toggle-area {
    margin-top: 0.59375rem;
  }
  .module-category .category-nav {
    padding: 0 0.5rem;
    font-size: 0;
    text-align: center;
  }
  .module-category .category-nav span {
    display: inline-block;
    box-sizing: border-box;
    font-size: 0.40625rem;
    height: 0.875rem;
    width: 2.96875rem;
    line-height: 0.875rem;
    color: #E92939;
    text-align: center;
    border: 0.03125rem solid #E92939;
    border-right: none;
  }

  .module-category .category-nav span:nth-child(1) {
    border-radius: 0.125rem 0 0 0.125rem;
  }

  .module-category .category-nav span:nth-child(3) {
    border-radius: 0 0.125rem 0.125rem 0;
    border-right: 0.03125rem solid #E92939;
  }

  .module-category .category-nav span.active {
    background-color: #E92939;
    color: #fff;
    font-weight: bold;
  }
</style>
