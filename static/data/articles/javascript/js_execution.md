# 又是一个很重要的点
这篇和event loop一起，就是全部有关JS执行的内容。event loop是宏观，这篇是微观。

## 先介绍
Event loop是线程级别的JS运行，包括和浏览器的互动，以及对内存的操作。而今天要讲的是函数级别的运行方式。
先贴个抄袭的一段话,from IBM

> “JavaScript 中的函数既可以被当作普通函数执行，也可以作为对象的方法执行，这是导致 this 含义如此丰富的主要原因。
一个函数被执行时，会创建一个执行环境（ExecutionContext），函数的所有的行为均发生在此执行环境中，
构建该执行环境时，JavaScript 首先会创建 arguments变量，
其中包含调用函数时传入的参数。接下来创建作用域链。然后初始化变量，
首先初始化函数的形参表，值为 arguments变量中对应的值，
如果 arguments变量中没有对应值，则该形参初始化为 undefined。
如果该函数中含有内部函数，则初始化这些内部函数。如果没有，
继续初始化该函数内定义的局部变量，需要注意的是此时这些变量初始化为 undefined，
其赋值操作在执行环境（ExecutionContext）创建成功后，函数执行时才会执行，
这点对于我们理解 JavaScript 中的变量作用域非常重要，鉴于篇幅，我们先不在这里讨论这个话题
最后为 this变量赋值，如前所述，会根据函数调用方式的不同，赋给this全局对象，当前对象等。
至此函数的执行环境（ExecutionContext）创建成功，
函数开始逐行执行，所需变量均从之前构建好的执行环境（ExecutionContext）中读取。

## 佩服佩服！一段话而已就全部讲清楚了
剩下我要做的就是把每句话拉出来解释就行了

## 首先，执行环境（execution context)或者叫执行上下文
这就是第一步，在event loop里面我们有讲，函数运行第一步是将函数压入stack，
而压入stack后的第一步就是创建执行环境。
1. 创建arguments变量

## 什么是arguments变量
argument 是一个对象，你pass到函数的变量实际上都存在arguments里面并且在函数内部可以调用, 就像PHP里面的$argv
```
function run(a, b){
    console.log(argument);
    //object{
    // 0:'aa',
    // 1:'bb' 
    //}
}

run('aa', 'bb');

```