# 来吧逃不了的，一场恶战
今天让我们谈谈JS的一大难点（也是奇葩点，这时候才想起PHP的好啊，JS真是难啊T_T）
作用域！！！！以及与作用域有关的各种

## JS是词法作用域（lexical scope）
卧槽勒，这特么是什么啊，我特么用PHP的时候知道什么是局部作用域，什么是Global作用域，而且很好理解啊，
可是这个lexical是什么鬼啊，想念PHP的好。其实大多数语言（包括PHP）都是词法作用域，只有少数比如bash是动态的。
要是JS全是词法作用域就很好办了，就没有这么多问题了，可是问题就在于JS不全是啊，this这个东西特么是动态的啊！！！
竟然特么的是动态的！！！你说恶不恶心！！官方就这么说

> this是在函数调用的时候绑定的，它到底是什么完全取决于函数在哪里调用  

特么的，不是说好的词法的么，怎么说变就变！！算了，就记住this的用法是动态的好了。
然后我们解释this就有了两个方向

1. 一个是从使用的方向，也就是根据this出现的地方来判断this到底指向哪里。
2. 从语言底层说来判断，也就是跟着JS语言本身到底是怎么判断this指的什么来判断this指的是什么。。。。玛德好累。
这个很复杂，也很难理解，我看了下决定放弃，具体在这里[https://github.com/mqyqingfeng/Blog/issues/7](https://github.com/mqyqingfeng/Blog/issues/7)

大多数讲this的都会选择第一种讲解方式，下面我也会这样

## 插个题外话，PHP的作用域
PHP的作用域清晰明了简单易懂，就是函数里面的访问不到外面的，外面的更不可能拿到里面的，
里面要拿到外面的就要global，或者以参数的形式弄进去。外面的拿不到里面的，也根本没有必要拿到里面的。
天啊太好理解了。说白了，JS的this设计，确实是个缺陷。
```
<?php

$a = 1;
function func(){
	$b = 2;
	echo $a
	$c = function (){
		$d = 3;
		echo $b;
	};
	$c();
}

func();
//$a, $b都是访问不到的
```
## 再插个题外话
那为啥JS这么复杂，因为JS的函数没那么单纯，PHP里面变量是变量，是拿来储存的，函数就是改变变量值的方法。
JS不是啊，JS函数是一等公民，函数本身也是拿来储存的，特烦人。  
之前看过一个科幻电影，讲语言本身是会影响我们的思维方式的，大概意思是，有一种外星生物的语言是非线性的，
所以他们的思维也是非线性的，地球人完全无法理解。  
同理因为面向对象的编程方式更贴近现实，所以更好理解，相比之下函数式编程就。。。  
不过啊还是要学啊，多一门语言思维也会更开阔呢

## 回到JS
刚才所说JS是词法作用域，究竟是什么意思，就是说作用域在编译的时候就已经定好了，而不是在运行时才确定的。
与之相对应的是动态作用域，有个解释很好
```
//lexical scope
function foo() {
	print a;  
} 
function bar() { 
	var a = 3; 
	foo(); 
}
var a = 2;
bar(); // 2
```
```
//dynamic scope
function foo() {
	print a;  
} 
function bar() { 
	var a = 3; 
	foo(); 
}
var a = 2;
bar(); // 3

```
## 好的我们正式开始讲this....
没办法啊，因为this扯到的东西真是太多了，背景太强大。




# 每个语言都有自己的this，又特么都不一样尼玛
好吧今天让我们来说说JS的this  
虽说每个语言的this都不一样，但其实也是大同小异，细节不一样而已，
一般指的都是当前对象

## 先来谈谈作用域(scope)
JS有一个全局作用域(global excution context)，或者叫上下文，
在浏览器环境这个全局等同于window对象
```
console.log(this === window); //true
a = 12;
console.log(this.a); //12
```
每个函数有自己的局部作用域，比如用let定义的变量
所以全局作用域里的this指的就是window (nodejs 里面 this===global)

## 函数里的this
这特么就是复杂的地方了




this 
- 函数运行时自动生成的对象
- 只能在函数内部使用
- 指的是调用函数的对象

1. 全局函数: this -> window
2. 函数作为对象方法： this -> 对象
3. 函数作为构造函数: this -> 用这个构造函数生成的对象


## reference
- [https://sdk.cn/news/7237](https://sdk.cn/news/7237)
- [http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)
- [https://github.com/mqyqingfeng/Blog/issues/7](https://github.com/mqyqingfeng/Blog/issues/7)
- [https://www.zhihu.com/question/19636194](https://www.zhihu.com/question/19636194)