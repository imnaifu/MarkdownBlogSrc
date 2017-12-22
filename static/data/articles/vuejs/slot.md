# Vue的slot
唉Vue的功能太多了，继续介绍一个组件里面会用到的功能-内容分发。

# slot
大概是这样的，如果想要传数据给子组件，像我们之前说的，需要在父组件那里自定义个属性，
并且在子组件用props接收。如果想要传html给子组件呢，当然也是可以这样做的，只不过有些‘不那么好看’。
所以就有了slot！！ hooray！！美其名曰内容分发，就是传html给子组件啊。
因为理论上，父组件对子组件的内容是没有控制力的，但是如果子组件的内容来自父组件，那不就有了！

# 用法
## 1. whole slot
子组件`<slot></slot>`里面（包括slot tag）全部被父组件写入子组件的内容替换。 
```html
//parent
<template>
    <child>
        <h2>I will show</h2>
        <p>I will show also</p>
    </child>  
</template>

//child
<template>
    <div>
        <slot></slot>
    </div>
</template>

//final result
<div>
    <h2>I will show</h2>
    <p>I will show also</p>
</div>
```

## 2.named slot
父组件传入的内容可以分成几个命名的部分，子组件可以分开用
```
//parent
<template>
    <child>
        <h2 slot='first'>I will show</h2>
        <p slot='second'>I will show also</p>
    </child>  
</template>

//child
<template>
    <div>
        <slot name='first'></slot>
        <p>I'm in the middle</p>
        <slot name='second'></slot>
    </div>
</template>

//final result
<div>
    <h2>I will show</h2>
    <p>I'm in the middle</p>
    <p>I will show also</p>
</div>
```

# In a nutshell
我们一般使用子组件，是把其当做一个整体，由子组自身决定到底要show什么。
但是这种分发的方法，却只是将子组件当成模板，真正决定要show的内容，还是完全来子父组件（强大的父权制度）。
**正常使用组件允许我们在一个父组件里插入多个子组件，而使用slot允许我们的子组件被多个父组件定制调用（传入不同的html）**


# Reference
- [Vue official](https://vuejs.org/v2/guide/components.html#Single-Slot)
- [Youtube tutorial](https://www.youtube.com/watch?v=F44OoFk8spg&index=27&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa)
