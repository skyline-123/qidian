<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="footer-link">
        <a href="#nowhere">客户端</a>
        <a href="#nowhere" class="active">触屏版</a>
        <a href="#nowhere">电脑版</a>
        <a href="#nowhere">帮助</a>
        <a href="#nowhere">反馈</a>
      </div>
    <div class="copy">copyright © 2002-2017 m.qidian.com</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'footer'
  }
</script>
<style>
  .footer {
    background: #fff;
    text-align: center;
    padding-bottom: 0.3125rem
  }
  .footer .footer-wrapper {
    width: 8.84375rem;
    margin: 0 auto;
    font-size: 0;
  }
  .footer .footer-wrapper .footer-link {
    margin-left: 0.90625rem;
  }
  .footer .footer-wrapper a {
    line-height: 1.5rem;
    margin-right: 0.53125rem;
    font-size: 0.40625rem;
  }
  .footer .footer-wrapper a.active {
    color: #313035;
  }
  .footer span, .footer .copy {
    font-size: 0.375rem;
    color: #D1D1D3;
  }
</style>
