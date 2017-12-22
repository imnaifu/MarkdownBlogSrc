# biu~ 动态组件
啥是动态组件，具体来讲就是如果想要实现从多个组件中选一个来show，那么使用动态组件会方便（我觉得`v-if`也可以实现，没试过）。

# 用法
有下面这样的父组件，如果我想要同一时刻只show其中一个子组件，要咋整呢？
```
<teamplate>
    <parent>
        <child1></child1>
        <child2></child2>
        <child2></child3>
    </parent>
</teamplate>
```
哈哈，用动态组件改成这样，用`is`属性来判断
```
<teamplate>
    <parent>
        //this will show child1
        <component is='child1'></component>
        //this will show dynamic child depending on child_name
        <component v-bind:is='child_name'></component>        
    </parent>
</teamplate>
<script>
    export default {
        data(){
            return {
                child_name: 'child1'
            }
        }
    }
</script>
```

# keep-alive
动态组件有个小问题啊就是，状态不保留。
比如你三个child是三个form，那么如果在其中一个form填了数据，切换到另外一个再，原来那个填的数据就gone了。
当然这说不定也是你想要的，不过如果想保留的话，就要在外面加上`keep-alive`。没啥好讲的就是这么简单。
```
<teamplate>
    <parent>
        <keep-alive>
            //状态会保留
            <component v-bind:is='child_name'></component>        
        </keep-alive>
    </parent>
</teamplate>
```

# Reference
- [vue official](https://vuejs.org/v2/guide/components.html#Dynamic-Components)
- [youtube turorial](https://www.youtube.com/watch?v=09n2945JW_0&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=28)