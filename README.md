# qidian

> A Vue.js project 模仿起点中文网手机站,回顾vue的学习,强化书写独立模块能力

## demo
[请用手机查看获取最佳浏览效果](https://skyline-123.github.io/)

![demo1](https://d3uepj124s5rcx.cloudfront.net/items/3d2p0c1F1N093v0a053w/demo1.gif?v=53c25946)

![demo2](https://d3uepj124s5rcx.cloudfront.net/items/2f3C1Q161B240y0U1g2L/demo2.gif?v=7145ffaa)

![demo3](https://d3uepj124s5rcx.cloudfront.net/items/2y3U0z061e411Y162q0s/demo3.gif?v=69ee8d16)

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

正在开发中

## 目录结构
使用官方webpack模板,这里展示src的文件夹目录结构.文件夹具体文件名不再赘述.

	src/  
	|--common/  
	|  |--css/  
	|     |--font  
	|--components/
	|  |--common/
	|  |  |--count-down
	|  |  |--module-show-pic
	|  |  |--module-title
	|  |  |--module-vertical-pic
    |  |  |--drop-down
    |  |  |--nav-top
	|  |  |--carousel.vue
	|  |--header
	|  |--footer
	|  |--male/
	|     |--module-anime
	|     |--module-category
	|     |--module-charts
	|     |--module-free
	|     |--module-hot
	|     |--module-like
	|     |--module-new
	|     |--module-whole
	|--page/
	|  |--index
	|  |--search-page
    |--category-page/
    |  |--charts-page
    |  |--free-page
    |  |--whole-page
    |  |--author-page
	|--router
	   

## 组件抽象
**组件具体位置请查看文件目录**  
重新安排了目录结构为了扩展以后的女生页面,但是下表显示的核心组件不会有很大的改动.只是男女生版面的不同.

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
|10|module-category|组合模块: 分类推荐|
|11|module-anime|组合模块: 二次元|
|12|module-like|组合模块: 猜你喜欢(精选专题)|
|13|count-down|显示免费中的倒计时模块(本地)|
|14|carousel.vue|header中的轮播图模块|

## 开发中的功能

**开发中的功能在dev分支,demo中也会同步更新,master分支更新得看进度**
1. header中的导航页面
2. 女生页面

## 问题解决
### 解决iPhone下无法后退页面的问题.
```javascript
	methods: {
	      back () {
	        if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
	          window.location.href = window.document.referrer  // 解决iPhone的后退问题
	        } else { window.history.go(-1) }
	      }
    }
```
### 解决页面中文字体引入问题
由于每个模块的小标题使用的中文字体都是方正中粗雅宋,使用css3@font-face引入整个中文字体文件或者使用图片替代都不是很好的解决办法.因为已经将标题模块抽象出来,需要绑定标题内容即可渲染字体出来.最后使用了[fontmin](https://github.com/ecomfe/fontmin)引入字体子集的方法,解决了这个问题.日后维护工作需要维护所有需要使用字体的文字.

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
