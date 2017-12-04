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

### 1. this在全局
this在全局作用域指向的是window对象（浏览器）
```
console.log(this); //[Object Window]
console.log(this instanceof Object); //true

var a = 1;
console.log(this.a); //1

//below are the same
console.log(this.Math.random());
console.log(Math.random()); 
```

### 2. 作为函数调用
同上也是绑定到全局对象，也就是window
```
var x = 1;
function a(){
	console.log(this.x);
}
a(); //1
```

### 3.作为对象方法调用
this 绑定到该对象
```
var a = {
	x: 1,
	f: function (x){
		this.x = this.x + x;
		console.log(this.x);
	}
}
a.f(2); //3
```

### 4. 作为构造函数调用
this 绑定到新创建的对象
```
function A(a){
	this.a = a;
}
let aa = new A(2);
console.log(aa.a); //2
```

## reference
- [https://sdk.cn/news/7237](https://sdk.cn/news/7237)
- [http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)
- [https://github.com/mqyqingfeng/Blog/issues/7](https://github.com/mqyqingfeng/Blog/issues/7)
- [https://www.zhihu.com/question/19636194](https://www.zhihu.com/question/19636194)
- [https://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/index.html](https://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/index.html)