## 闭包啊闭包
一年前就困惑我，直到现在才算了解个皮毛

## 定义（closure）
> This combination of a function object and a scope (a set of variable bindings) 
in which the function’s variables are resolved is called a closure in the computer science literature.

说人话就是，闭包就是一个函数和作用域的组合，这个作用域让这个函数能访问自由变量，

## 其实吧
闭包就是在函数内部作用域和全局作用域中间插入一个作用域，当然全局作用域也算是闭包，
但我们所指的闭包一般是中间插入作用域的那种

## 两个要点
1. 函数
2. 自由变量（free-variable）： 既不是函数参数，也不是函数局部变量的变量

```javascript
function Car(){
    this.name = 'a';
    let type = 'b';

    this.get = function(){
        console.log(type);
    }    
}

let c = new Car();
console.log(c.name); //'a'
console.log(c.type); //undefined
console.log(c.get()); //'b'
```
上面的例子就是一个闭包，有函数-->get，函数能访问到自由变量-->type。
当然这是简单的闭包，我们具体用的闭包要复杂一些，但原理一样。
简单说，JS也是有自动垃圾回收的，不用的会被立马回收掉，可是因为闭包，本来应该被回收的变量很可能因为别的函数的调用而继续保存。
下面让我们看一个有实用价值的闭包
> Closures are useful because they let you associate some data (the lexical environment)
with a function that operates on that data


### - 作为工厂
```javascript
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

### - 隐藏私有变量
```
var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
```

## Functional Programming
顺带讲讲函数式编程，也是逃不掉。
闭包很明显的体现的函数式编程的概念，相比于面向对象，真是难啊。
总的来说，面向对象是将函数绑定到对象，以方法的形式存在，具体的值储存在对象，通过调用方法改变对象的值。
而JS这种函数式编程，比如这个闭包，可以将变量绑定到函数，完全是反过来的。
简单来说，OOP中，函数是为对象（变量）服务的；FP中，变量是为函数服务的。

## reference
- [https://github.com/mqyqingfeng/Blog/issues/9](https://github.com/mqyqingfeng/Blog/issues/9)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [https://www.w3schools.com/js/js_function_closures.asp](https://www.w3schools.com/js/js_function_closures.asp)