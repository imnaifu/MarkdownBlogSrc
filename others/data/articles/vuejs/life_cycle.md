## 哈哈生命周期，vue的一大重点
当然也是好用的原因之一啦，因为根据整个周期，提供了很多钩子（hook）函数（我也不知道哪里像钩子了- -）。
总之就是在不同的时间点提供了接口，以便我们可以往里面插入自己想要运行的code。

## 什么是挂载(mount)
- [What is mounting in react](https://stackoverflow.com/questions/31556450/what-is-mounting-in-react-js)
找了好久终于找到定义，挂载实际上指的是节点挂载在DOM tree。
Vue和其他很多框架一样，会用一个叫虚拟DOM（virtual DOM）的东西，挂载在Vue里面指的就是，创建好一个虚拟节点以后挂载在真正的DOM的过程。

## hooks
### creation flow
- **beforeCreate()**: 
    - vue instance刚刚创建，各种data,computed method都没创建的时候
    - Called synchronously immediately after the instance has been initialized, before data observation and event/watcher setup.

- **created()**: 
    - vue instance创建好了，并且其中的data, mounted, computed之类的也都初始化了，但是还没$el还没好
    - Called synchronously after the instance is created.

- **beforeMount()**： 
    - 这时instance已经好了，$el也准备好了
    - Called right before the mounting begins

- **mounted()**： 
    - 挂载完成，DOM被$el取代，这时就相当于JQuery的document.ready
    - Called after the instance has been mounted, where el is replaced by the newly created vm.$el.
    - 注意的是，如果使用组件，子组件此时并未挂载，这里的mounted只是说根组件挂载好了，如果想用在子组件也挂载好，需要`$nextTick()`

```javascript
mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
  })
}
```
![](creation_flow.png)

### update flow 
- **beforeUpdate()**:
    - 当数据发生改变并且还未改变DOM时
    - Called when the data changes, before the virtual DOM is re-rendered and patched.
- **updated()**:
    - 当数据发生改变并且已经改变DOM时
    - Called after a data change causes the virtual DOM to be re-rendered and patched.
![](update_flow.png)

### destroy flow (rarely used)
- **beforeDestroy()**： 
    - `app.$destroy();`
    - Called right before a Vue instance is destroyed. At this stage the instance is still fully functional.
- **destroyed()**：
    - Called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance have been unbound, all event listeners have been removed, and all child Vue instances have also been destroyed.
![](destroy_flow.png)


## 使用方法
### Creation
- 不需要DOM的时候使用，因为这时候DOM还没好
- Use creation hooks if you need to set things up in your component both during client rendering and server rendering. You will not have access to the DOM or the target mounting element (this.$el) inside of creation hooks.

### Mounting
- 在需要DOM好的时候立马进行操作的时候使用
- 如果是进行异步从服务器拿data，要放在created，而不是这里
- Use if: You need to access or modify the DOM of your component immediately before or after the initial render.
- Do not use if: You need to fetch some data for your component on initialization. Use created (or created + activated for keep-alive components) for this instead, especially if you need that data during server-side rendering.

### Updating
- 一般是你想知道什么时候重新渲染的时候用，一般拿来debug
- Use if: You need to know when your component re-renders, perhaps for debugging or profiling.
- Do not use if: You need to know when a reactive property on your component changes. Use computed properties or watchers for that instead.
    
## 图
最后放图
![](lifecycle.png)


## Reference
- [https://segmentfault.com/a/1190000008010666](https://segmentfault.com/a/1190000008010666)
- [https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
- [https://github.com/koucxz/blog/issues/3](https://github.com/koucxz/blog/issues/3)
- [何时使用lifecycle hook](https://alligator.io/vuejs/component-lifecycle/)
- [mvvm实现](https://github.com/DMQ/mvvm)
- [双向数据绑定](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00147574857851718682c42639f466a934ad9d4f485d1f2000)