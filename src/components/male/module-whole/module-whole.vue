<template>
  <div class="module-whole">
    <module-title :titleMore="titleMore">
      <span class="subtitle" slot="subtitle">一周热销完本书</span>
    </module-title>
    <module-vertical-pic :verticalPicInfo="verticalPicInfo"></module-vertical-pic>
  </div>
</template>
<script>
  import title from '../../common/module-title/module-title.vue'
  import vertical from '../../common/module-vertical-pic/module-vertical-pic.vue'
  export default {
    name: 'module-whole',
    data () {
      return {
        titleMore: {
          name: '畅销完本',
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
        {url: require('./whole-1.jpeg'), title: '完美世界', author: '辰东', category: '玄幻', instalments: '完本', characters: '658.34万字', desc: '一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！一个少年从大荒中走出，一切从这里开始……'},
        {url: require('./whole-2.jpeg'), title: '最强弃少', author: '鹅是老五', category: '仙侠', instalments: '完本', characters: '704.38万字', desc: '叶默蓦然清醒过来的时候，才发现周围的一切似乎都变了，美女师父也不见了。他也发现了自己成了被世家抛弃的弃子，被别人退婚的苦逼,还是被女人站在讲台上拿着他情书羞辱的对象......但是这些都不重要，最重要的是他还记忆起了另外一件原本不属于他的可怕的事情。'},
        {url: require('./whole-3.jpeg'), title: '国际供应商', author: '二将', category: '都市', instalments: '完本', characters: '334.92万字', desc: '灰暗的过到二十六岁的方远山，由于家庭的原因，走投无路之下想到了出国镀金。应客户需求，到亚马逊丛林拍照的他碰见了一件很古怪的事情，然后他竟然发现自己拥有了一个神奇的地方，从此他走上全球供应商的道路，开启了自己彪悍的人生。=========================新书已上传，《超级传奇商店》，希望喜欢的书友可以点击，收藏、推荐，二将在这里拜谢了。=========书友群：512341036；vip全订群：343892078欢迎大家来水。'}
      ]
    }
  }
</script>
<style>
  .module-whole {
    background: #fff;
    margin-top: 0.375rem
  }
  .module-whole span.subtitle {
    margin-left: 0.15625rem;
    font-size: 0.375rem;
    color: #8A8C93;
    vertical-align: bottom;
  }
</style>
