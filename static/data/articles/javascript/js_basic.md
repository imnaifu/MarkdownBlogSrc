# js basic types：
- undefined
- null
- boolean
- string
- number 
- object 

# typeof 
#### 是一个操作符，不是函数
possible return values:
- undefined
- boolean
- string
- number
- object 
- function

# js函数参数
- js的参数在内部是通过一个数组表示的，函数接收的永远是那个数组，可以通过arguments对象访问


# 基本类型&引用类型
- 基本类型存在栈内存空间，复制时会创建新对象
- 引用类型存在堆内存空间，复制时只会多创建一个连接
- 所有函数的参数都是按值传递的，也就是把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样，基本类型值的传递如同基本类型变量的复制一样，引用类型值的传递，就如同引用类型变量的复制一样 (!important)
- 判断哪种引用类型 -> use 'instanceof'
- 判断是哪种基本类型 -> user 'typeof'

### 基本类型：
- number 
- string 
- null
- undefined
- boolean
### 引用类型
- object
- array
- function
- regex

ref:http://www.jianshu.com/p/d9bef2e83163


### expression context(表达式上下文)： e.g 变量定义
### statement context(语句上下文): e.g if 语句

## 判断是否是array: Array.isArray(value)
## array 栈&队列方法
- .push(): push in the end
- .pop(): pop from the end
- .shift(): shift from the beginning
- .unshift(): add into the beginning
## 排序方法
- .reverse(): reverse the array order
- .sort(): sort the array by calling toString() method for every element, can add compare method as parameter
## 操作方法   
- .concat(): 创建一个副本，将接收到的参数添加到副本的尾部
- .slice(): 创建一个副本，切片，default到尾部
- .splice() 拼接: 添加，删除，替换，inplace
## 位置方法
- indexOf(): return index of array, using ===
## 迭代方法
- .every():
- .some():
- .filter():
- .forEach():
- .map():
- .reduce():

## Date()
- var start = Date.now();
- doSomething();
- var end = Date.now();
- var result = end - start

# Regex 类型
# Function 类型
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

# 函数属性&方法
- .length: 希望接受的命名参数的个数
- .prototype: 

# Boolean类型
- 是与布尔值对应的引用类型
- Boolean类型的实例重写了valueOf()方法，返回基本类型true or false

# Number类型
- Number类型是与数字值对应的引用类型
- 重写了valueOf()，返回对象表示的基本类型的数值

# String类型
- String类型是字符串对象的包装类型
- .length属性
- slice()
- substr()
- substring()
- indexOf
- trim(): 删除前置后缀所有空格

# 内置对象
- Global: 不属于任何其他对象的属性和方法，都是它的属性和方法
    - isNaN()
    - encodeURI(), encodeURIComponent, decodeURI(), decodeURIComponent
    - eval(): 解释器函数

- Math
    - Math.min(), Math.max()
        - Math.max.apply(Math, array)
    - ceil(), floor(), round()
    - random()
    


