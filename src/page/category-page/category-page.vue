<template>
  <div class="category-page">
    <div class="c-top">
      <a class="back" href="javascript:window.history.go(-1)">
        <span class="back-btn"></span>
      </a>
      <div class="t-male-female">
        <router-link to="/category/male"><span class="male">男生</span></router-link><router-link to="/category/female"><span class="female">女生</span></router-link>
      </div>
      <div class="right-tool">
        <router-link to="/search"><a href="/search"><span class="search"></span></a></router-link>
        <span class="drop-down" @click="dropDown" :class="{active: btnActive}"></span>
      </div>
      <div class="drop-down-content" ref="down" style="height: 0px">
        <drop-down></drop-down>
      </div>
      <div class="drop-down-bg" ref="dropDownBg"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import dropDown from '../../components/common/drop-down/drop-down.vue'
  import {TweenMax} from 'gsap'
  import male from './male.vue'
  export default {
    name: 'category-page',
    data () {
      return {
        btnActive: false
      }
    },
    components: {
      'drop-down': dropDown,
      male
    },
    methods: {
      dropDown () {
        if (parseInt(this.$refs.down.style.height) === 0) {
          this.btnActive = true
          this.$refs.dropDownBg.style.display = 'block'
          this.$refs.down.addEventListener('touchstart', (event) => {
            console.log(event)
            event.preventDefault()
          }, false)
          this.$refs.dropDownBg.addEventListener('touchstart', (event) => {
            console.log(event)
            event.preventDefault()
          }, false)
          TweenMax.to('.drop-down-content', 0.15, {
            height: '8rem'
          })
        } else {
          this.btnActive = false
          this.$refs.dropDownBg.style.display = 'none'
          TweenMax.to('.drop-down-content', 0.15, {
            height: '0.0rem'
          })
        }
      }
    },
    mounted () {
      window.onscroll = null
    }
  }
</script>

<style scoped>
  .category-page {
    background: #fff;
  }
  .c-top {
    position: relative;
    width: 100%;
    border-bottom: 0.03125rem solid #EFEFEF;
  }
  .c-top .back {
    display: inline-block;
    position: relative;
    width: 1.34375rem;
    height: 1.34375rem;
    text-align: center;
  }
  .c-top .back .back-btn {
    position: absolute;
    display: inline-block;
    width: 0.3125rem;
    height: 0.46875rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 0.46875rem;
    background: url("arrow-left.png");
    background-size: 0.3125rem 0.46875rem;
  }
  .t-male-female {
    position: absolute;
    top: 0.28125rem;
    left: 50%;
    margin-left: -1.40625rem;
  }
  .t-male-female span {
    display: inline-block;
    padding: 0 0.3125rem;
    line-height: 0.78125rem;
    border: 0.03125rem solid #ed424b;
    text-align: center;
    font-weight: normal;
    color: #ed424b;
  }

  .t-male-female span.male {
    border-right: none;
    border-radius: 0.125rem 0 0 0.125rem;
  }

  .t-male-female span.female {
    border-left: none;
    border-radius: 0 0.125rem 0.125rem 0;
  }

  .t-male-female .router-link-active span {
    background-color: #ed424b;
    color: #fff;
    font-weight: bold;
  }
  .right-tool {
    float: right;
    height: 1.34375rem;
  }
  .right-tool a {
    display: inline-block;
    height: 1.34375rem;;
  }
  .right-tool .search {
    display: inline-block;
    width: 1.34375rem;
    height: 1.34375rem;
    background: url(search.png) center center no-repeat;
    background-size: 0.53125rem 0.53125rem;
  }
  .right-tool .drop-down {
    position: relative;
    display: inline-block;
    width: 1.34375rem;
    height: 1.34375rem;
  }
  .right-tool .drop-down:before {
    display: inline-block;
    content: "";
    position: absolute;
    border-top: 0.03125rem solid #272930;
    width: 0.625rem;
    top: 0.46875rem;
    left: 0.15625rem;
    transition: all .15s;
  }
  .right-tool .drop-down:after {
    display: inline-block;
    content: "";
    position: absolute;
    height: 0.125rem;
    width: 0.625rem;
    border-top: 0.03125rem solid #272930;
    border-bottom: 0.03125rem solid #272930;
    top: 0.625rem;
    left: 0.15625rem;
    transition: all .15s;
  }

  .right-tool .drop-down.active:hover:after {
    top: 0.625rem;
    left: 0.125rem;
    border-bottom: none;
    transform: rotate(45deg);
  }
  .right-tool .drop-down.active:hover:before {
    top: 0.625rem;
    left: 0.15625rem;
    transform: rotate(-45deg);
  }
  .drop-down-content {
    position: absolute;
    overflow: hidden;
    top: 1.44rem;
    left: 0;
    z-index: 2;
  }
  .drop-down-bg {
    position: fixed;
    top: 1.5rem;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: none;
  }
</style>
