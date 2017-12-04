## 闭包啊闭包
一年前就困惑我，直到现在才算了解个皮毛

## 定义（closure)
> This combination of a function object and a scope (a set of variable bindings) in which the function’s variables are resolved is called a closure in the computer science literature.
说人话就是，闭包就是一个函数和作用域的组合，这个作用域让这个函数能访问自由变量，
自由变量就是既不是函数参数，也不是函数局部变量的变量

## 其实吧
闭包就是在函数内部作用域和全局作用域中间插入一个作用域，当然全局作用域也算是闭包，
但我们所指的闭包一般是中间插入作用域的那种


## reference
- [https://github.com/mqyqingfeng/Blog/issues/9](https://github.com/mqyqingfeng/Blog/issues/9)