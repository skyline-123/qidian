<template>
  <div class="module-vertical-pic">
    <ul>
      <li v-for="info in verticalPicInfo">
        <img :src="info.url" alt="info.url">
        <h4>{{info.title}}</h4>
        <p class="desc">{{info.desc}}</p>
        <div class="author-left">
          <span class="avatar"></span>
          <span class="author">{{info.author}}</span>
        </div>
        <div class="info">
          <span class="category">{{info.category}}</span>
          <span class="instalments">{{info.instalments}}</span>
          <span class="characters">{{info.characters}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'module-vertical',
    props: {
      verticalPicInfo: {
        type: Array
      }
    }
  }
</script>
<style>
  .module-vertical-pic {
    margin: 0 0.5rem;
    background: #fff;
  }
  .module-vertical-pic li {
    overflow: hidden;
    height: 3.28125rem;
    border-bottom: 1px solid #9A9C9E;
    margin-top: 0.46875rem;
  }
  .module-vertical-pic li:nth-child(1) {
    margin-top: 0;
  }
  .module-vertical-pic li:nth-child(3) {
    border-bottom: none;
  }
  .module-vertical-pic li h4 {
    font-size: 0.46875rem;
    line-height: 0.75rem;
    font-weight: 700;
  }
  .module-vertical-pic li p {
    font-size: 0.4375rem;
    height: 1.21875rem;
    line-height: 0.625rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #9A9C9E;
    margin-bottom: 0.25rem
  }
  .module-vertical-pic li img {
    float: left;
    width: 2.09375rem;
    height: 2.78125rem;
    margin-right: 0.21875rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    margin-bottom: 0.21875rem;
  }
  .module-vertical-pic .author-left {
    float: left;
  }
  .module-vertical-pic .author-left .avatar {
    display: inline-block;
    background: url('author.png') center no-repeat;
    -webkit-background-size: 0.53125rem 0.53125rem;
    background-size: 0.53125rem 0.53125rem;
    width: 0.53125rem;
    height: 0.53125rem;
    vertical-align: -0.09375rem;
  }
  .module-vertical-pic .author-left .author {
    display: inline-block;
    width: 1.9375rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.4375rem;
    line-height: 1;
    color: #9A9C9E;
  }
  .module-vertical-pic .info {
    float: right;
    font-size: 0;
  }
  .module-vertical-pic .info span {
    display: inline-block;
    font-size: 0.3125rem;
    padding: 0 0.09375rem;
    line-height: 0.46875rem;
    text-align: center;
    margin-left: 0.125rem;
    border-radius: 0.0625rem;
  }
  .module-vertical-pic .info span:nth-child(1) {
    margin-left: 0;
  }
  .module-vertical-pic .info span.category {
    border: 1px solid #D9D9D9;
    color: #9A9C9E;
  }
  .module-vertical-pic .info span.instalments {
    border: 1px solid #DB3F4F;
    color: #DB3F4F;
  }
  .module-vertical-pic .info span.characters {
    border: 1px solid #4A87E4;
    color: #4A87E4;
  }
</style>
