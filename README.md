# qidian

> A Vue.js project 模仿起点中文网手机站,回顾vue的学习,强化书写独立模块能力

## 移动端自适应方案
选择的是某宝的flexible库. [flexible](https://github.com/amfe/lib-flexible)
```javascript
var width = docEl.getBoundingClientRect().width;
if (width / dpr > 540) {
    width = 540 * dpr;
}
var rem = width / 10;
docEl.style.fontSize = rem + 'px';
flexible.rem = win.rem = rem;
```
由于以上代码的原因,当页面宽度超过一定范围的时候,元素大小是不会随着页面的放大而放大.主要是适配移动端的解决方案.所以本项目网页在pc端的浏览效果会出现部分元素无法撑满格子的现象.解决这个bug不困难,相应width设置为100%就可以解决.此次项目重心是兼容移动端,所以没有对pc端的视觉效果做兼容处理.

## 依赖
- iscroll
- vue
- vue-awesome-swiper 
- vue-router

### iscroll

用于module-show-pic模块展示横向图片滚动.

选择iscroll的原因:

1. css代码```-webkit-overflow-scrolling: touch```导致iPhone手机的导航条出现.
2. ```overflow-x: auto```的用户体验相当糟糕.

iscroll有许多设计缺陷.其中的preventDefault()默认阻止了所有用户事件,导致左右滑动的时候并不能上下滑动页面.只能设置为false解决.这是妥协的做法.

### vue

基于vue框架开发,感谢尤大的开发.用vue框架开发效率真的提升很多.当然,需要继续学习对比其他主流框架.

### vue-awesome-swiper

适用于header部分轮播图

### vue-router

开发到女生页面时有用.

## 组件抽象
|序号|模块|功能|
|---|---|---| 
|01|header|头部|
|02|footer|尾部|
|03|module-title|每个模块的标题,props为titleMore对象,传入name和more属性|
|04|module-show-pic|横向展示图片模块,props为showPicInfo数组和cornerInfo对象.分布传入图片信息和左上角标注信息.|
|05|module-vertical-pic|纵向展示图片模块,props为verticalPicInfo数组,传入详细的图片,作者,分类,字数,连载等信息.|
|06|module-hot|组合模块:热门小说|
|07|module-free|组合模块:限时免费|
|08|module-charts|组合模块:排行榜|
|09|module-new|组合模块:新书抢鲜|
|10|module-catalogue|组合模块: 分类推荐|
|11|module-anime|组合模块: 二次元|
|12|module-like|组合模块: 猜你喜欢(精选专题)|
|13|count-down|显示免费中的倒计时模块(本地)|
|14|carousel.vueheader|中的轮播图模块|

##开发中的功能

1. header中的导航页面


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
