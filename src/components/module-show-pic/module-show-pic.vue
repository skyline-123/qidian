<template>
  <div class="show-pic">
    <div class="wrapper" ref="scroll">
      <ul ref="scrollUl">
        <li v-for="(info, index) in showPicInfo" :class="{free: cornerInfo.isFree, top: cornerInfo.isTop}">
          <img :src="info.url" :alt="index">
          <h3>{{info.title}}</h3>
          <span>{{info.author}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import IScroll from 'iscroll'
  export default {
    name: 'module-show-pic',
    props: {
      showPicInfo: {
        type: Array
      },
      cornerInfo: {
        type: Object
      }
    },
    methods: {
      _initScroll () {
        this.IScroll = new IScroll(this.$refs['scroll'], {
          scrollX: true,
          preventDefault: false
        })
      }
    },
    created () {
      this.$nextTick(() => {
        this.$refs.scrollUl.style.width = (this.$refs.scrollUl.children.length * 2.7) + 'rem'
        this._initScroll()
      })
    }
  }
</script>
<style>
  .wrapper {
    position: absolute;
    width: 100%;
    height: 5rem;
    overflow: hidden;
    background: #fff;
  }
  .show-pic {
    height: 5rem;
  }
  .show-pic ul li {
    display: inline-block;
    position: relative;
    width: 2.09375rem;
    margin-left: 0.5rem;
    vertical-align: top;
    overflow: hidden;
  }
  /*ul {*/
    /*-webkit-overflow-scrolling: touch;*/
  /*}*/
  .show-pic ul li img {
    position: relative;
    width: 2.09375rem;
    height: 2.78125rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    margin-bottom: 0.21875rem;
  }

  .show-pic ul li.free:before {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    top: 0.15625rem;
    left: -0.40625rem;
    width: 1.5625rem;
    height: 0.34375rem;
    text-align: center;
    background: #336EE2;
    color: #fff;
    font-size: 0.3125rem;
    content: '限免';
    z-index: 30;
  }

  .show-pic ul li h3 {
    margin-bottom: 0.15625rem;
    font-size: 0.40625rem;
  }

  .show-pic ul li span {
    color: #868591;
    font-weight: 400;
  }

  .show-pic ul li.top:before {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    top: -0.5625rem;
    left: -0.671875rem;
    width: 1.5625rem;
    height: 0.34375rem;
    padding-top: 1rem;
    text-align: center;
    background: #848992;
    color: #fff;
    font-size: 0.3125rem;
    font-weight: 700;
    content: '';
    z-index: 30;
    text-transform: uppercase;
  }
  .show-pic ul li.top:nth-child(1):before {
    content: 'top1';
    background: #E92737;
  }
  .show-pic ul li.top:nth-child(2):before {
    content: 'top2';
    background: #EC4C25;
  }
  .show-pic ul li.top:nth-child(3):before {
    content: 'top3';
    background: #EDBC1D;
  }
  .show-pic ul li.top:nth-child(4):before {
    content: 'top4';
  }
  .show-pic ul li.top:nth-child(5):before {
    content: 'top5';
  }
  .show-pic ul li.top:nth-child(6):before {
    content: 'top6';
  }
  .show-pic ul li.top:nth-child(7):before {
    content: 'top7';
  }
  .show-pic ul li.top:nth-child(8):before {
    content: 'top8';
  }
  .show-pic ul li.top:nth-child(9):before {
    content: 'top9';
  }
  .show-pic ul li.top:nth-child(10):before {
    content: 'top10';
  }
</style>
