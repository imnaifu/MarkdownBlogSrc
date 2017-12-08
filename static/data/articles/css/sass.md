# Sass是啥？
一直听过，不过因为很少写CSS东西，所以懒得了解。不过，债总是要还的。  
sass是一个，怎么说，其实就是一个模板引擎，能够动态生成一个.css的文本文件的东西。因为CSS不支持各种编程语言用的变量啊，逻辑处理，函数啊之类的。
所以就有人用Ruby写了个模板引擎，就像PHP模板引擎动态生成HTML一样，这玩意能动态生成CSS。

## 有啥用？
让CSS更像一个编程语言（尽管不是)，Bootstrap就是它写的，其实这类的模板引擎有很多，这只是其中一个，可能因为它语法比较好，所以这个最火吧。
其实这玩意就是个语法糖。

## 怎么用
1. instal: `Install Ruby --> gem install sass`
2. command: 
	- `sass your-sass-file.scss` //show the converted css on the screen
	- `sass your-sass-file.scss your-css-file.css` //convert and save the result into file
	- `sass --style style-mode your-sass-file.scss your-css-file.css` //convert with mode
	- `sass --watch input.scss:output.css` //watch file
	- `sass --watch input-folder:output-folder` //watch folder

## 有哪些mode
- nested: default mode, 有缩进
- expanded: 没有缩进
- compact: 简洁格式
- compressed: 压缩的

## 基本语法
哈哈不说哦了不说了，下面的reference里面的基本语法讲的很好，参考reference2



## Reference
- [http://www.ruanyifeng.com/blog/2012/06/sass.html](http://www.ruanyifeng.com/blog/2012/06/sass.html)
- [https://segmentfault.com/a/1190000003912703](https://segmentfault.com/a/1190000003912703)
- [https://www.w3cplus.com/preprocessor/architecture-sass-project.html](https://www.w3cplus.com/preprocessor/architecture-sass-project.html)