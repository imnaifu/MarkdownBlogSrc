终于可以好好总结一下什么是同步异步，什么是阻塞非阻塞，小激动

# 首先把同步异步和阻塞非阻塞分开
实际上这两者描述的是通信过程，所以我们假设有一个client，一个server

## 阻塞非阻塞是对发送方而言的  
client发送请求到server
- 等待结果的时候什么也不做 -> 阻塞(blocking)（因为什么也不做）
- 不等待结果，发了就发了 -> 非阻塞(non-blocking)（就像UDP一样，不管有没有收到)


## 同步异步是对接收方（服务方）而言的
server收到请求，然后开始处理
- 处理完了主动通知发送方 -> 异步(Asynchronous)
- 处理完了就放在那里，等发送方询问在回复 -> 同步(Synchronous)

## AJAX
一般的AJAX就是一个异步非阻塞的请求，发送后不管了
如果有回调函数(callback)，那么在收到回复后就用callback处理
如果没有，那就那样了,没有然后了

## NodeJS
- 异步非阻塞

# 什么是回调
- 回调函数本质上提供了一种与常规的上层调用下层代码相反的模式，使得底层代码也有机会反调高层的代码，提升了代码能力  
- 是event-driven的基础，这样code就不是按顺序从上到下执行，而是可以由外来事件触发执行
- 用到了控制反转(IoC Inversion of Control)的设计模式, don't call me, I call u
- 同时也是实现OCP(Open Close Principle 开闭原则)的方法之一。（对拓展开放，对修改关闭）

# Promise
一步步走下来，就直接把promise讲了吧

## 为什么要有promise
callback很好用啊（是啊！我还是这么觉得），不过有一种情况（特么的只有一种情况，虽然经常发生）
也就是多个异步请求级联的时候，callback是很麻烦的，这就需要你在一个callback里面写上下一个请求，
在再这个callback里面写下下一个请求...（确实很烦）  
```
getData1(data1 => {
  getData2(data1, data2 => {
    getData3(data2, data3 => {
      getData4(data3, data4 => {
        getData5(data4, data5 => {
          // 终于取到data5了
        })
      })
    })
  })
})
```
于是就出现了Promise!可以把它看做一个代理（agent），这样当你再需要级联异步请求的时候，就不用在上一个的callback里面写下一个请求了
```
getData1()
.then(getData2)
.then(getData3)
.then(getData4)
.then(getData5)
.then(data => {
  // 取到最终data了
})
```

