<template>
  <div class="drop-down">
  <div class="container">
    <router-link to="/index/male">
      <div class="nav-a">
      <i class="index"></i>
      <h4 class="index">首页</h4>
    </div>
    </router-link>
    <router-link to="/category/male">
    <div class="nav-a">
      <i class="category"></i>
      <h4 class="category">分类</h4>
    </div>
    </router-link>
    <div class="nav-a">
      <i class="charts"></i>
      <h4 class="charts">排行榜</h4>
    </div>
    <div class="nav-a">
      <i class="free"></i>
      <h4 class="free">免费</h4>
    </div>
    <div class="nav-a">
      <i class="whole"></i>
      <h4 class="whole">完本</h4>
    </div>
    <div class="nav-a">
      <i class="account"></i>
      <h4 class="account">账户</h4>
    </div>
  </div>
  <a href="" class="login"><span>我的书架</span></a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .drop-down {
    background: #fff;
    overflow: hidden;
    width: 10.0rem;
  }
  .drop-down .container {
    width: 8.75rem;
    margin: 0 auto;
    overflow: hidden;
  }
  .drop-down .nav-a {
    display: block;
    float: left;
    width: 1.75rem;
    height: 1.8125rem;
    text-align: center;
    padding: 0.5rem;
  }
  .drop-down i {
    display: inline-block;
    width: 0.6875rem;
    height: 0.703125rem;
    margin-bottom: 0.1875rem
  }
  .drop-down i.index {
    background: url("index.png") no-repeat;
    background-size: 0.6875rem 0.703125rem;
  }
  .drop-down i.free {
    background: url("free.png") no-repeat;
    background-size: 0.6875rem 0.703125rem;
  }
  .drop-down i.whole {
    background: url("whole.png") no-repeat;
    background-size: 0.6875rem 0.703125rem;
  }
  .drop-down i.account {
    background: url("account.png") no-repeat;
    background-size: 0.6875rem 0.703125rem;
  }
  .drop-down i.charts {
    background: url("charts.png") no-repeat;
    background-size: 0.6875rem 0.703125rem;
  }
  .drop-down i.category {
    background: url("category.png") no-repeat;
    background-size: 0.6875rem 0.703125rem;
  }
  .drop-down h4 {
    font-weight: bold;
  }
  .drop-down a.login {
    display: block;
    width: 8.75rem;
    height: 1.0rem;
    margin: 0 auto 0.3125rem;
    line-height: 1.0rem;
    text-align: center;
    border-radius: 1.5625rem;
    background: #E92737;
    margin-bottom: 0.625rem;
  }
  .drop-down a.login span {
    color: #fff;
  }
</style>
