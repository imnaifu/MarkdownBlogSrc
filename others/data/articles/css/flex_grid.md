## CSS布局
今早看了讲解Flex和Grid布局的视频，总算有点入门，大概介绍下。

## 背景
MDN讲Flex还是draft阶段，但实际上浏览器都已经实现了。。（讲真，浏览器这种一超多强的制度真是挺好的）。
好吧不说废话，flex和grid都是一种布局模式，与之对应的是以前的各种的不符合人性的float,absolute之类的定位模式。
因为以前那些真的很不好用，所以才有bootstrap那些row，然后就有了现在的flex&grid，真是互相学习啊。

## 弹性盒子（Flexible Box）
flex布局适合小规模布局，是一维的，要么水平方向，要么垂直方向。具体有哪些语法我不细说，下面的第二个reference讲很详细。
我来说说它到底能做什么。传统的布局模式是非弹性的，你想要个内部等间距的平均分配的div就只能手写padding,width什么的。
有了这个就不用了，给出一些要求，他会自适应分配padding和width，而且装不下还可以自动移到下一行，很方便实用，很像bootstrap的row。


## 网格布局（Grid）
网格布局适合整体的大规模布局，很像以前的table布局（事物真是螺旋上升）。
与flex只能操作一个方向不同，grid可以操作两个方向，还可以覆盖。

## 啊我又回来了
为什么回来了，因为之前只是停留在理论，终于去把flex和grid实践了一下，也就是重写了这个框架的布局。
与其说重写布局，或者叫原来根本没有布局。有了grid，css才第一次有了整体的布局系统吧，以前都是div加position强行布局，一团乱。
gird的出现说明终于有人意识到了，我们并不需要精确到pixel的定位系统，把页面分成等分的块更为实用。
一层grid确实是二维的，但是grid允许嵌套，多层grid就是三维立体的布局了啊，真是太好用了。
以前写CSS真是头昏眼胀，自从用了grid,那种流畅的感觉还是很爽的。

## 详细介绍下grid
grid就是个网格系统，分为两个part，container和item,每个里面可以设置很多属性。
有个很好用的点就是他可以覆盖，并且可以嵌套。网格本身只是把某个部分分成网格，但你的div想要占用哪些网格是可以自己定义的(好用在这)
![grid_sample.png](grid_sample.png)


## Reference
- [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- [https://zhuanlan.zhihu.com/p/25303493](https://zhuanlan.zhihu.com/p/25303493)
- [http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [https://www.youtube.com/watch?v=jV8B24rSN5o](https://www.youtube.com/watch?v=jV8B24rSN5o)
- [https://www.youtube.com/watch?v=JJSoEo8JSnc](https://www.youtube.com/watch?v=JJSoEo8JSnc)