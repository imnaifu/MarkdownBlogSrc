## 唉一切的一切得起源只是我想看懂箭头函数
结果就看懂this,要看懂this就要懂scope，为了懂scope就要懂原型链，为了原型链就到了这里。。。。
唉，都是泪啊

## 刚看到消息，我的半马竟然是在凌晨四点半开跑，我勒个去去啊T_T
伤心欲绝的我继续回来讲

## 今天的重点是！！原型的水平关系
之前我们讲了原型链，也就是原型之间的垂直关系，这次是水平关系。
也就是原型，实例和构造函数。  
简单来说：
- 实例的'\_\_proto\_\_' ---> 原型
- 构造函数的prototype ---> 原型
- 原型的constructor ---> 构造函数
- new构造函数 ---> 实例
好吧，一点也不简单，具体看下面这张图(盗图的)
![](prototype.png)

# 玛德让我们来讲讲什么是new
别的语言都是new一个class来生成一个属于这个class的对象，JS又是不走寻常路，new特么的一个function！唉。
Anyway,不能像理解其他语言的new一样来理解JS的new。

## new 更像是一个函数
new比起操作符，更像是一个函数，它的输入变量是一个函数（也就是所谓的构造函数），return一个Object对象的实例。
当你使用new的时候，实际上发生了这些：
1. 创建了一个新的对象
2. 将该对象的原型设为构造函数的prototype
3. 将this指向新的对象
4. 返回对象（如果构造函数没有返回其他的情况下）

```
//如果new是一个函数
function new(constructorFunc){
    let obj = {}; //创建一个对象

    //将返回对象原型设为构造函数的prototype    
    Object.setPrototypeOf(obj, constructorFunc.prototype); 

    //下面这行还没看懂，暂时先留着
    return Constructor.apply(obj, args) || obj;  // 执行函数，改变 this 指向新的对象
}
```

所以说无论是构造函数还是实例，指向的都是原型。


## reference
- [https://github.com/mqyqingfeng/Blog/issues/48](https://github.com/mqyqingfeng/Blog/issues/48)