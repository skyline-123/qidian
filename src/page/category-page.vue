<template>
  <div class="category-page">
    <p>哦,施工地带,被你看到啦~~~</p>
    <p>对这个项目有兴趣?一起合作开发吧怕</p>
    <a href="https://github.com/skyline-123/qidian">猛戳这里</a>
    <hr>
    <span @click="back">返回首页</span>
  </div>
</template>

<script>
  export default {
    methods: {
      back () {
        if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
          window.location.href = window.document.referrer  // 解决iPhone的后退问题
        } else { window.history.go(-1) }
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 14px;
    color: blue;
  }
  a {
    font-size: 18px;
    color: red;
    font-weight: bolder;
  }
  span {
    font-size: 0.46875rem;
    display: block;
  }
</style>
