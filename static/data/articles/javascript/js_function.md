## Function 类型
- 函数是对象，每个函数都是Function类型的实例
- 和其他引用类型一样有属性和方法
- 函数名仅仅是指向对象的指针
- 代码执行前，解释器已经通过一个函数声明提升(function declaration hoisting)的过程，读取并将函数声明添加到执行环境
- 函数内部有两个特殊对象
    - arguments
        - arguments.callee: 一个指针，指向拥有这个argument对象的函数，可用于递归函数消除耦合[pg.114 高级程序设计]
        - arguments.callee.caller: 指向调用当前函数的函数
    - this
        - 引用的是函数执行的环境对象
        - 当在global调用的时候，指向window对象

## 函数属性&方法
- length: 希望接受的命名参数的个数
- prototype: 
## 两种方法定义函数
1. 函数声明 
    - function abc(){}
    - function declaration hoisting (函数声明提升)：执行代码前会先读取函数声明
2. 函数表达式 
    - var abc = function(){};

argument.callee： 指向正在执行的函数的指针，用以实现递归


## js函数参数
- js的参数在内部是通过一个数组表示的，函数接收的永远是那个数组，可以通过arguments对象访问

```
function f(a, b){
    console.log(arguments);    
}
f(3,4); 
// [object Arguments] {
//   0: 3,
//   1: 4
// }

```

## expression context(表达式上下文)： e.g 变量定义
## statement context(语句上下文): e.g if 语句


## 词法(lexical)作用域(静态作用域)
- 定义时确定，而不是在运行时确定的
- JS函数是在定义环境运行，而不是在执行环境运行
- 关注函数在何处声明

## 动态作用域
- 运行时确定的
- 关注函数在何处运行
- ref: http://www.jianshu.com/p/70b38c7ab69c

## JS闭包，
- 函数嵌套函数，外层函数更像是一个class或者工厂，输入数据，返回根据这个数据定制的(customize)函数

正常来讲因为scope chain，内部能访问到外部变量，比如函数内部可以访问到global变量
而外部不可以访问到局部变量，并且内部变量在函数执行完后会被垃圾回收
闭包就是两个作用，让外部可以访问局部变量，并且让局部变量在函数执行完后依然保存在内存
1. 让外部可以访问内部变量
    - 闭包（一般来讲是个函数）更像是一个间谍，打入函数内部，因为从内部可以访问到所需变量，然后让函数返回自己到外部，就相当于把内部的变量信息成功带到了外部，从而完成了间谍的使命
2. 让内部变量保存在内存不会被垃圾回收
    - JS垃圾回收的机制是寻找没有使用的变量，将其销毁。因为闭包把变量从函数内部带了出来，所以变量不会被回收，而且，变量所依赖的环境（函数）也不会被回收 