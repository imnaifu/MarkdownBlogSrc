# 呵呵，原型链
逃不掉的原型链，这几乎是JS底层的基础。我觉得是一个很恶心的设计啦，其实JS很多设计都是，因为当初设计的人真的就把JS当一个纯粹的浏览器脚本语言来用啊，谁知道可以做这么多东西。

## 所以什么是原型链
原型链就是........原型的链！！！yeah！！  
哈哈这可不是开玩笑的哦，原型链就是原型连起来的链。先别管这么构造函数，实例，那些都是原型的水平方向的连接，原型链是垂直方向的一个连着一个的。

## 所以原型链有什么用？
继承（inheritance），就这么一个用途，拿来作为继承的。都不知道应不应该叫做继承，感觉实际上JS里面根本没有继承，因为特么根本没有class啊！
所谓的最新的es6的类，也只是一个syntax sugar。JS很多特性都是这样，根本不应该有，强行模仿出来一个类似的。
所谓的继承，也只是一个调用的关系。

## 什么是JS的继承
就是说我现在是一个对象，不知道是谁调用了我的一个方法，或者变量,Ok。
1. 我在我自己的里面找，也就是在构造方法里面找，找到了就用，找不到下一步。
2. 在我的原型里面找。
3. 原型里找到了就用，找不到，就沿着原型链往上找。最终找到Object的原型，也就是null，停止，找不到返回错误。

## 等等，什么是原型。
啊，刚刚讲了原型链，忘了讲什么是原型了。原型可以看做是由同一个构造函数出来的实例所共享的属性和方法的集合，可以通过__proto__访问。
说白了，原型也是个对象，对应一般的OOP语言的父类，而构造函数本身相当于子类。每一个函数都有个原型，实际上是每个函数都有个父类，
只是这个父类里面有没有东西而已，有就是继承了。
```
function A(b){
    this.b = b
}

A.prototype.c = 'c';

let a1 = A('1');
let a2 = A('2');

a1.b; //'1'
a2.b; //'2'

a1.c; //'c'
a2.c; //'c'
```

## 好继续刚才JS的继承   
但是问题来了，这样就只是完成了一层的继承(或者根本不叫继承，公用方法而已)，要怎么实现多层继承呢。

## 先说究竟原型是拿来干什么的？
从一个角度看原型是拿来做继承的，另一个角度看原型是拿来存放一个共有的方法属性的，第二种理解比较贴切，因为就像上面说的，其实JS里面根本没有继承这个东西。
你们有一些共同的属性和方法，这本身看起来像继承而已。所以重点来了！!

> **JS里面继承的一种方式就是将子类的原型换成父类对象**

这里就是超级重点，也是我之前一直理解错误的地方。原型是存共有方法的地方，将原型换成你要继承的父类，就相当于继承了啊！卧槽，真是天才。
所以一个单纯的继承关系是`子类-->父类-->父类的原型`
```
function Animal(){
    
}

function Dog(){

}

//inherit
Dog.prototype = new Animal()
//or this is official way of doing it 
Dog.prototype = Object.create(Animal.prototype);

//这样同时也改变了构造函数的指向，所以我们要讲构造函数指回来
Dog.prototype.constructor = Dog;
//这样就完成了一次继承
//关系是 Dog --> Animal --> Animal_prototype
//这种继承有个缺点，就是子类可以改变父类的属性或方法，不做详细讨论。
```

## 这里插个小插曲，null和undefied有什么差别
这里不讲他们具体用法的差别，就说为什么设计出这两个。
- null所表达的含义是，此处不应该有值，所以Object的原型是null，因为不应该存在。
- undefined表示，此处应该有值，但是这个值现在不存在，等待赋值。
所以看出来了吧，是有很本质的区别。

## 所以看出来了吧
所谓的继承，只是原型的方法与变量按父子关系传递而已。
因为一般的继承，是将父类的属性方法复制到子类。但实际上原型链只是一个指针，属性和方法还在原来的父类里面。

## 玛德，总算写完了，真心难

## reference
- [https://zhuanlan.zhihu.com/p/22787302](https://zhuanlan.zhihu.com/p/22787302)
- [https://github.com/mqyqingfeng/Blog/issues/16](https://github.com/mqyqingfeng/Blog/issues/16)
- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance)
- [http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
