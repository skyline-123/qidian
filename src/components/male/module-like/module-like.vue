<template>
    <div class="module-like">
      <!-- start of top -->
      <div class="top">
        <module-title :titleMore="titleMoreA">
        </module-title>
        <module-vertical-pic :verticalPicInfo="verticalPicInfo"></module-vertical-pic>
      </div>
      <!-- end of top -->
      <div class="line"></div>
      <!-- start of bottom -->
      <div class="bottom">
        <module-title :titleMore="titleMoreB">
        </module-title>
        <div class="topic-pic">
          <img src="./topic-1.jpeg" alt="topic-1.jpeg">
          <img src="./topic-2.jpeg" alt="topic-2.jpeg">
          <img src="./topic-3.jpeg" alt="topic-3.jpeg">
          <img src="./topic-4.jpeg" alt="topic-4.jpeg">
          <div class="login">
            登录后获得更多特色功能<span class="dot">·</span><a href="#nowhere">立即登录</a>
          </div>
        </div>
      </div>
      <!-- end of bottom -->
    </div>
</template>
<script>
  import title from '../../common/module-title/module-title.vue'
  import vertical from '../../common/module-vertical-pic/module-vertical-pic.vue'
  export default {
    name: 'module-like',
    data () {
      return {
        titleMoreA: {
          name: '猜你喜欢',
          more: true
        },
        titleMoreB: {
          name: '精选专题',
          more: false
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
        {url: require('./like-1.jpeg'), title: '主神崛起', author: '文抄公', category: '游戏', instalments: '连载', characters: '136.38万字', desc: '一觉醒来穿越成反派？这剧本不对！还抢了人家的妹子？又有一个强势的姐姐？剧本更不对了！居然还有主神空间，诸天万界？我一定是在做梦！吴明淡定地木着脸，继续着征程。'},
        {url: require('./like-2.jpeg'), title: '超级卡牌系统', author: '黑乎乎的老妖', category: '游戏', instalments: '连载', characters: '78.54万字', desc: '一不小心穿越到了海贼王的世界，肿么办？还好随身带着超级幻想卡牌系统，能抽取各种幻想人物。黑龙波对岩浆果实，八稚女对人妖拳法……（不知道为啥，每次写简介都感觉好无力……）'},
        {url: require('./like-3.jpeg'), title: '惊悚乐园', author: '三天两觉', category: '游戏', instalments: '连载', characters: '438.53万字', desc: '这是超越维度的游戏。亦是追寻真理的竞逐。未知的封印，鬼神的赌局……数据的抗争，人类的救赎……在那个连接着现实的虚拟世界——意识决定我们，意识选择我们，意识决定了我们的意识。现在，丢掉你的恐惧。丢掉你的私心杂念、疑问和拒信……解放你的思想。欢迎来到，惊悚乐园。《惊悚乐园》实体书现已上架ㄟ(▔,▔)ㄏ'}
      ]
    }
  }
</script>
<style>
  .module-like {
    background: #fff;
    margin-top: 0.375rem
  }
  .module-like .line {
    margin: 0 auto;
    width: 8.96875rem;
    height: 0.03125rem;
    background: #F1F1F4;
  }
  .module-like .bottom .topic-pic {
    margin: 0 auto;
    overflow: hidden;
    padding: 0 0.25rem;
    border-bottom: 2px solid #F2F2F4;
  }
  .module-like .bottom img {
    display: block;
    float: left;
    margin: 0.234375rem;
    width: 4.25rem;
    height: 2.09375rem;
  }
  .module-like .bottom .login {
    line-height: 1.5rem;
    text-align: center;
    font-size: 0.46875rem;
  }
  .module-like .bottom .login .dot {
    margin: 0.0625rem;
  }
  .module-like .bottom .login a {
    color: #4B76CE;
  }
</style>
