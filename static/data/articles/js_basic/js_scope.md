## 简单介绍下作用域(scope)
具体在函数执行会再说。
JS有一个全局作用域(global excution context)，或者叫上下文，
在浏览器环境这个全局等同于window对象
```
console.log(this === window); //true
a = 12;
console.log(this.a); //12
```
每个函数有自己的局部作用域，比如用let定义的变量
所以全局作用域里的this指的就是window (nodejs 里面 this===global)


## 作用域链(scope chain)
这玩意不仅仅和寻找变量有关，还和性能优化有关。因为找变量的过程是沿着链走的，所以变量的位置越浅，找的越快。
- 如果两个相同的变量存在于scope chain的不同部分，先找到的第一个变量覆盖shadow第二个
- indentifier查询从局部到全局
- identifier(variable)的位置越深，读写速度越慢
	- 所以局部变量优于global, 
	- 所以多次调用同一个global时，可以将global保存成local
- eval
	- 动态作用域
	- eval(string) 将string转换为code


