<template>
  <div class="index">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
    <div class="to-top" ref="toTop" @click="toTop">回到顶部</div>
    <div class="recent" ref="recent">最近阅读</div>
    <div class="recent-info" ref="recentInfo">
      <div class="content" ref="content">
        <h3>最近阅读</h3>
        <div class="null">
          <img src="./null.png" height="164" width="164" alt="null.png">
        </div>
        <a href="#nowhere"><span>登录去书城</span></a>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '../../components/header/header.vue'
  import footer from '../../components/footer/footer.vue'
  import {TweenMax, Bounce} from 'gsap'
  export default {
    name: 'index-page',
    components: {
      'v-header': header,
      'v-footer': footer
    },
    methods: {
      toTop () {
        scrollTo(0, 0)
      }
    },
    mounted () {
      this.$nextTick(function () {
        window.onscroll = () => {
          let top = document.documentElement.scrollTop || document.body.scrollTop
          if (top > 1000) {
            this.$refs.toTop.style.opacity = 0.6
          } else {
            this.$refs.toTop.style.opacity = 0
          }
        }
        var oDiv = this.$refs.recent
        var info = this.$refs.recentInfo
        var content = this.$refs.content
        var disX = 0
        var disY = 0
        content.addEventListener('touchstart', function (ev) {
          ev.stopPropagation()
          ev.preventDefault()
          var oEvent = ev || event
          disX = oEvent.touches[0].clientX - content.offsetLeft
          content.addEventListener('touchmove', handlermove, false)
          content.addEventListener('touchend', handlerend, false)
          function handlermove (ev) {
            var oEvent = ev || event
            var l = oEvent.touches[0].clientX - disX
            if (l < 2) l = 2
            content.style.right = ''
            content.style.left = l + 'px'
          }
          function handlerend () {
            // var conWidth = content.offsetWidth
            // var conLeft = content.offsetLeft
            // var cliWidth = document.body.clientWidth || document.documentElement.clientWidth
            // var conRight = conWidth - (cliWidth - conLeft)
            // content.style.right = conRight + 'px'
            if (parseFloat(content.style.left) >= 2) {
              TweenMax.to(content, 0.3, {
                left: '10rem',
                onComplete () {
                  info.style.display = 'none'
                }
              })
            }
          }
        }, false)
        info.addEventListener('touchstart', function (ev) {
          ev.preventDefault()
          TweenMax.to(content, 0.3, {
            left: '10rem',
            onComplete () {
              info.style.display = 'none'
            }
          })
          // info.style.display = 'none'
        }, false)
        oDiv.addEventListener('touchstart', handlerstart, false)
        function handlerstart (ev) {
          info.style.display = 'block'
          TweenMax.to(content, 0.3, {
            left: '1.4375rem'
          })
          var oEvent = ev || event
          disX = oEvent.touches[0].clientX - oDiv.offsetLeft
          disY = oEvent.touches[0].clientY - oDiv.offsetTop
          oDiv.addEventListener('touchmove', handlermove, false)
          oDiv.addEventListener('touchend', handlerend, false)
          function handlermove (ev) {
            var oEvent = ev || event
            var l = oEvent.touches[0].clientX - disX
            var t = oEvent.touches[0].clientY - disY
            oDiv.style.left = l + 'px'
            oDiv.style.top = t + 'px'
          }
          function handlerend () {
            var cWidth = document.body.clientWidth || document.documentElement.clientWidth
            if (oDiv.offsetLeft <= (cWidth / 2 - oDiv.offsetWidth / 2)) {
              TweenMax.to(oDiv, 0.5, {left: '16px', ease: Bounce.easeOut})
            } else {
              TweenMax.to(oDiv, 0.5, {
                left: (cWidth - oDiv.offsetWidth - 16) + 'px',
                ease: Bounce.easeOut
              })
            }
          }
        }
      })
    }
  }
</script>
<style scoped>
  @import '../../common/css/main.css';
  @import '../../common/css/font/方正中粗雅宋_GBK.css';
  .to-top {
    position: fixed;
    box-sizing: border-box;
    font-size: 0.4375rem;
    color: #fff;
    text-align: center;
    padding: 0.265625rem;
    bottom: 0.25rem;
    right: 16px;
    width: 1.40625rem;
    height: 1.40625rem;
    border-radius: 50%;
    background: #515151;
    opacity: 0;
    transition: opacity .3s;
  }

  .recent {
    position: fixed;
    box-sizing: border-box;
    /*    display: none;*/
    font-size: 0.4375rem;
    color: #fff;
    text-align: center;
    padding: 0.265625rem;
    bottom: 3.125rem;
    right: 16px;
    width: 1.40625rem;
    height: 1.40625rem;
    border-radius: 50%;
    background: #E92737;
  }
  .recent-info {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 30;
    display: none;
  }
  .recent-info .content {
    width: 8.5625rem;
    position: absolute;
    height: 100%;
    background: #fff;
    opacity: 1;
    left: 10rem;
  }
  .recent-info .content h3 {
    text-align: center;
    font-family: "方正中粗雅宋_GBK";
    padding: 0.625rem;
    box-sizing: border-box;
    font-size: 32px;
  }
  .recent-info .null {
    text-align: center;
  }
  .recent-info .content img {
    width: 2.5625rem;
    height: 2.5625rem;
    margin: 2.9375rem 2.78125rem;
  }
  .recent-info a {
    display: block;
    width: 5.5rem;
    height: 1.0rem;
    margin: 0 auto 0.3125rem;
    line-height: 1.0rem;
    text-align: center;
    border-radius: 1.5625rem;
    background: #E92737;
  }
  .recent-info a span {
    color: #fff;
  }
</style>
