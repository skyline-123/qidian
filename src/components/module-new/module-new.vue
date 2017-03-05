<template>
  <div class="module-new">
    <module-title :titleMore="titleMore">
      <span class="subtitle" slot="subtitle">24小时热销新书</span>
    </module-title>
    <module-vertical-pic :verticalPicInfo="verticalPicInfo"></module-vertical-pic>
  </div>
</template>
<script>
  import title from '../module-title/module-title.vue'
  import vertical from '../module-vertical-pic/module-vertical-pic.vue'
  export default {
    data () {
      return {
        titleMore: {
          name: '新书抢鲜',
          more: true
        },
        verticalPicInfo: []
      }
    },
    components: {
      'module-title': title,
      'module-vertical-pic': vertical
    },
    created () {
      this.verticalPicInfo = [
        {url: require('./new-1.jpeg'), title: '娱乐之荒野食神', author: '祥瑞御妹', catalogue: '玄幻', instalments: '完本', characters: '48.25万字', desc: '离开自动化的电器之都，远离雾霾弥漫的繁华都市，他要周游世界，去孤岛、沼泽、山脉、雨林……挑战最刺激的冒险，寻找最原始的美食！碳烤得喷香的海龙虾和帝王蟹，香煎得金黄的松茸与鸡枞菇，油焖得香糯可口的驼峰跟熊掌，荷叶盘上新鲜美味的松露与鱼子酱。我是尼古拉斯-狗爷，这里是《荒野食神》。我将展示给你看怎样从世界上某些环境最恶劣的地方上生存的很滋润。在我的节目里，狩猎、冒险、美食、明星、求生、美景、探宝……应有尽有。“什么，你说普大帝要来参加荒野食神？OMG，他会不会开着坦克来当保镖。”“什么，你说奥观海不服气也要来？让他等着先，都要卸任的人了还争什么争。”郑重声明：平行世界，请勿对号入座！'},
        {url: require('./new-2.jpeg'), title: '黑卡', author: '萧瑟良', catalogue: '都市', instalments: '连载', characters: '114.82万字', desc: '一张神秘的黑卡，每周都会发放不同的额度，石磊必须在一周时间内将所有额度消费完毕，否则，将迎接黑卡的惩罚。“花钱真的是个体力活……”——石磊如是说。“先定一个小目标，比方说先花掉它一个亿……”——石磊踌躇满志的说。“我这辈子最后悔的，就是有花不完的钱，不花还不行……”——石磊最后说。普通群:欢迎加入美貌如花萧瑟良读者群，群号码：362092559舵主及以上群:423794083，欢迎诸位加入'},
        {url: require('./new-3.jpeg'), title: '名侦探世界里的巫师', author: '追梦人Love平', catalogue: '二次元', instalments: '连载', characters: '114.82万字', desc: '一个末法时代的鬼巫师车祸被撞死，灵魂穿越，发现自己来了日本，附体在了一个日本人的身上。正想着要在日本闯出一个名堂来，结果顺手拿起一份报纸扫了一眼——工藤新一，日本平成年代的福尔摩斯，警察的救世主？卧槽，老子怎么穿到二次元的世界里了？嗯，总而言之，这是一个巫师在柯南世界里充当路人甲的故事……PS：作者菌另外有完本作品《炼鬼修仙》653万字，《邪道鬼尊》365万字，《我的机械章鱼》218万字。闲着无聊的朋友们，可以去看下。好吧，还有一本《最后的修仙者》，此书被封中，所以无视掉吧……群号：512240405~'}
      ]
    }
  }
</script>
<style>
  .module-new {
    background: #fff;
    margin-top: 0.59375rem;
  }
  .module-new span.subtitle {
    margin-left: 0.15625rem;
    font-size: 0.375rem;
    color: #8A8C93;
    vertical-align: bottom;
  }
</style>
