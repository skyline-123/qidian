<template>
  <div class="charts-male">
    <div class="container" v-for="(item, index) in content">
      <img :src="item.img" alt="index" class="left">
      <ol>
        <li>{{item.listA}}<span class="right"></span></li>
        <li>{{item.listB}}<span class="right"></span></li>
        <li>{{item.listC}}<span class="right"></span></li>
        <li>{{item.listD}}<span class="right"></span></li>
        <li>{{item.listE}}<span class="right"></span></li>
      </ol>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        content: [
          {
            img: require('./原创风云榜.png'),
            listA: '盗天仙途',
            listB: '穿梭诸天',
            listC: '名侦探世界里的巫师',
            listD: '极品道士下山',
            listE: '长乐歌'
          },
          {
            img: require('./畅销榜.png'),
            listA: '圣墟',
            listB: '一念永恒',
            listC: '雪鹰领主',
            listD: '不朽凡人',
            listE: '龙王传说'
          },
          {
            img: require('./点击榜.png'),
            listA: '吞噬星空',
            listB: '遮天',
            listC: '斗破苍穹',
            listD: '舞动乾坤',
            listE: '我欲封天'
          },
          {
            img: require('./推荐榜.png'),
            listA: '圣墟',
            listB: '斗战狂潮',
            listC: '五行天',
            listD: '不朽凡人',
            listE: '一念永恒'
          },
          {
            img: require('./打赏榜.png'),
            listA: '调教大宋',
            listB: '重活指肆意人生',
            listC: '圣墟',
            listD: '仙界归来',
            listE: '最强炊事兵'
          },
          {
            img: require('./更新榜.png'),
            listA: '白袍总管',
            listB: '位面ol之另一个世界',
            listC: '武林大帝',
            listD: '综艺娱乐之王',
            listE: '透视医皇'
          },
          {
            img: require('./签约榜.png'),
            listA: '道君',
            listB: '级道天魔',
            listC: '娱乐大喷子',
            listD: '最强时空大反派',
            listE: '英雄联盟之传奇正盛'
          },
          {
            img: require('./新书榜.png'),
            listA: '异世界大药房',
            listB: '欧皇崛起',
            listC: '战神狄青',
            listD: '云中掠过',
            listE: '宇宙交易系统'
          },
          {
            img: require('./新人榜.png'),
            listA: '陵都镖局',
            listB: '红尘霓梦之资本帝国',
            listC: '王者系统之吾仙',
            listD: '龙出南洋',
            listE: '梦亿人生'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .charts-male {
    background: #F2F4F8;
  }
  .charts-male .container {
    margin-bottom: 0.375rem;
    overflow: hidden;
    background: #fff;
  }
  .charts-male .left {
    display: block;
    float: left;
    width: 3.75rem;
    height: 5.625rem;
  }
  .charts-male ol {
    margin-left: 3.75rem;
  }
  .charts-male ol li {
    display: block;
    position: relative;
    line-height: 1.15625rem;
    margin-left: 1.03125rem;
    border-bottom: 0.03125rem solid #EFEFF1;
    font-size: 0.44rem;
    font-weight: bolder;
  }
  .charts-male ol li:nth-child(1):before {
    display: inline-block;
    position: absolute;
    content: '1.';
    left: -0.625rem;
  }
  .charts-male ol li:nth-child(2):before {
    display: inline-block;
    position: absolute;
    content: '2.';
    left: -0.625rem;
  }
  .charts-male ol li:nth-child(3):before {
    display: inline-block;
    position: absolute;
    content: '3.';
    left: -0.625rem;
  }
  .charts-male ol li:nth-child(4):before {
    display: inline-block;
    position: absolute;
    content: '4.';
    left: -0.625rem;
  }
  .charts-male ol li:nth-child(5):before {
    display: inline-block;
    position: absolute;
    content: '5.';
    left: -0.625rem;
  }
  .charts-male ol li:nth-child(5) {
    border: none;
  }
  .charts-male ol li span.right {
    display: inline-block;
    width: 0.234375rem;
    height: 0.46875rem;
    margin: 0.3125rem 0.5625rem 0 0;
    background: url("arrow-right.png") no-repeat center center;
    background-size: 0.234375rem 0.46875rem;
    float: right;
  }
</style>
