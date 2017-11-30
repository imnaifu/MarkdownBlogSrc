# JavaScript的终极奥义之它到底是怎么运行的
终于看到了接近这个语言底层的所谓的运行方式

## Single thread, non-blocking, asynchronous
- JS设计成单线程与其用途有关，浏览器环境更适合单线程，可以避免同时操作DOM
- single call stack == single call thread == onething at a time

## 基本组成部分
- 堆(heap)：存数据，变量，常量等等
- 栈(execution stack)：程序运行的基本单位，每当一个函数运行时，就将其压入栈内，运行结束弹出
- 队列(task queue)：等待运行的程序(函数),当主线程(stack)清空的时候，被压入栈内运行
- 外部API(provieded by browser)：JS是单线程，但是JS可以把一些任务给浏览器执行，自己等待其异步返回就好
> wow, 这些基本的数据结构真有用啊

## Call stack block
因为是单线程，所以执行同步任务时会block住主程序，所以我们不能使用while(true)这种loop，
因为其他的在queue里面的都不会执行了，因为stack永远不是空的，解决方法就是对慢的部分使用异步

## 所以到底是怎么运行的(event loop)
First, 一步一步按照代码顺序走，如果有异步的就和callback一起扔给浏览器API，浏览器完成后会把异步请求callback放入queue。
当所有同步任务执行完后(stack清空时)，会把队列里面的按顺序执行，这就是所谓的event loop

## 有哪些是异步请求
- Ajax
- Event like click and so on
- setTimeOut(funciton, time)

![event loop](event_loop.png =500x*)


### Reference
- [http://www.ruanyifeng.com/blog/2014/10/event-loop.html](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
- [https://zhuanlan.zhihu.com/p/29116364](https://zhuanlan.zhihu.com/p/29116364)
- [https://www.youtube.com/watch?v=6MXRNXXgP_0](https://www.youtube.com/watch?v=6MXRNXXgP_0)