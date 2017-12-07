# 简单说下这个Webpack到底是啥
是一个打包工具....

## 打包啥？
所有静态文件(except HTML)
- js, css, sass, images ...

## 怎么打包的
不知道，人家都封装好了，你就不用管了

## 好吧，有什么用
前端的功能越来越强大，所以代码量越来越多，而且参与的人越来越多，这就需要--->模块化 (which means code need to be saved as separate files)  
对很多后端语言来说，这没问题的，require的时候导入就行。但是浏览器不行，如果文件很多，一个一个的话，很慢的，best approach是合成一个文件一口气导入。
所以我们需要webpack。 BTW, 写模块化JS的时候，是有import/export的，webpack有个好处就是，import进来但是没有用到的，不会插在代码里。

## 怎么用呢
`install nodejs --> install npm --> install webpack`  
Webpack 文档很烂，和PHP有的一拼。但是封装的很好，只用操作配置文件就行，具体看网上好多（下面reference)。

## 和其他一起使用
- Vue-Cli： 里面可选用webpack来打包
- babel: babel是一个翻译工具，ES6 --> ES5, 从而保证浏览器一定能运行。 可以和webpack一起用，从而在打包的时候就顺便翻译了



## Reference 
- [http://www.jianshu.com/p/42e11515c10f](http://www.jianshu.com/p/42e11515c10f)  
- [https://zhuanlan.zhihu.com/p/27046322](https://zhuanlan.zhihu.com/p/27046322)
