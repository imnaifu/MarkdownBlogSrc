## 讲下vue里面prop的使用
有了vuex其实prop用的很少

## 用途
prop是父子组件传数据的渠道，当然，其实是单向的，也就是parent传，child接。

**parent传送**： 在子组件的模板中插入想要传递的data。如果只是个string那就直接插入就好（一般没必要这么做），
如果是要动态的表达式之类的，需要用`v-bind`，v-bind表示里面是个javascript表达式
```javascript
<template>
    <div id='parent'>
        <child pass_data="abc"></child> //string 'abc'
        <child2 v-bind:pass_data="abc"></child2>  //variable abc
    </div>
</template>
```
**child接收**： 子组件中需要有个props属性，用来接收父组件传入的数据。传入的数据会像保存在data里的其他数据一样可以调用。
可以是个array（正常情况），或者是object（用来加验证）,名字是父组件定义的属性的名字。
```javascript
<script>
    export default {
        props:['pass_data'] //must be same as the attribute name in parent
        //or 
        props: {
            pass_data: {
                type: String,
                required: true,
                default: 100
            }
        }
    }
</script>
```

## 需要注意的点
JS的基本类型有两种,这两种的表现是不一样的，**一个是按值传递的不可改变的原始类型，
一个是按引用传递的无论在哪里被用其实用的都是一个，改变一个也全都变的引用类型。**
- **primitive type**: String, Boolean, Number, Null, Undefined, Symbol
- **reference type**: Object, Array (inherit form object)

所以，一般来讲，不应该在子组件修改父组件的数据，当然实际上是可行的，只是不建议这么做。
因为根据父组件传入的数据的类型不同，修改时也会有不同的表现。
- 如果传入的是引用类型，那么子组件修改后，父组件也会改变，用这个数据的其他子组件也都会改变。
- 如果传入的是基本类型，那么子组件修改后，父组件不会改变，因为是按值传入的，相当于copy了这个值过去，至于以后子组件怎么处理都不会影响父组件的（看下面code）。
```javascript
Vue.component('aa', {
    props:['c'],
    template: "<div v-on:click=\"ad()\">{{ c }}</div>",
    methods: {
        ad(){
            this.c++; //child element will increase, but parent stays the same
        }
    }
    
});

Vue.component('bb', {
    data(){
        return {
            d:22
        }
    },
    template: "<div><aa v-bind:c=\"d\"></aa>{{d}}</div>"

});

vm = new Vue({
    el:'#app',
    template: "<bb>ff</bb>"
});
```



## Reference
- [Vue official](https://vuejs.org/v2/guide/components.html#Passing-Data-with-Props)