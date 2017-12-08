## 背景
这两个函数一直出现，因为只是函数，而不是基本概念，所以一直在逃避这俩家伙，到'this'的时候，终于逃不掉了，好吧来看看。

## 区别
这两个函数其实是一个作用，只不过是传入参数的方法不一样，apply传入一整个数组，call传入一个个变量。

## 用法
首先，函数在JS中也是Object，而call/apply就是函数的方法。这个方法的作用，简单来说，就是动态改变this。
...好吧和没说一样，看代码吧(From w3school)
```
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}
person.fullName.call(myObject);  // Will return "Mary Doe"
```
说人话就是，现在有两个object，A想要调用一个方法，可是这个方法在B上面，自己没有。
于是便用B的那个方法的call方法，将第一个参数（也就是this的指向）设为A，这样就实现了用B的方法操作A的对象。

## 呵呵
不得不说，程序员真是懒癌的代表啊，其实我觉得为什么不直接写一个公有的函数来搞定这种事，可能这个有更深入的用法我还不知道吧。

## reference
- [https://www.w3schools.com/js/js_function_call.asp](https://www.w3schools.com/js/js_function_call.asp)
