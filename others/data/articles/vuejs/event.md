# 这篇讲事件，主要讲自定义事件
先讲源头和为什么，上一篇讲了props，用来将父组件的数据传给子组件，那子组件怎样传数据给父组件呢？
有个很恶心的做法，就是，监听，唉没办法，我觉得组件通讯，如果不用vuex，是一件挺麻烦的事。
具体做法就是，子组件想要传数据给父组件的时候，就`$emit`一个自定义事件，然后将数据放入。
想要获得数据的父组件用`$on`监听那个自定义事件，从中取得数据。


```javascript
    
    //parent here 
    <parent>
        <child v-on:customize_event="get_event_from_child"></child>
    </parent>
    <script>
        export default {
            methods: {
                get_event_from_child(){
                    console.log(arguments);//['data1 here', 'data2 here']
                }
            }
        }
    </script>


    //child here
    <div>
        <button v-on:click='call_parent'>call</button>
    </div>
    <script>
        export default {
            methods: {
                call_parent(){
                    this.$emit('customize_event', 'data1 here', 'data2 here');
                }
            }
        }
    </script>

```

# 关于$event这个特殊变量
我看了很深，也找了半天，几乎没有什么文章介绍这个，相信用的也不多，我的结论是，不要用，完全不要出现这个。
这个点太细了，其实我是不想花这么多时间来看的，一下子体会到了高中班主任对我的评语，爱较真，真的是看不明白就不想停下来。
总之这个$event代表的是事件本身
```
abc($event)；
function abc(e){
    e.preventDefault()
}
```
这种使用完全可以用event modifier to replace，所以完全不要使用这玩意。

# 坑
在这里`<child v-on:customize_event="get_event_from_child"></child>`
call回调的时候，这样放不加括号是最完美的而且也是最好的，没有为什么，老子试出来的。
然后如果多个参数，就在callback函数里面用arguments来取数据，如果只有一个，随便的定义个变量直接取就好。

# 粽子
这个自定义事件的方法成功解决了子组件传给父组件的问题，但是解决的这个方法，真的不是太好。

# BUS总线
自定义事件可以用来解决子组件传给父组件的问题，但兄弟之间或者其他乱七八糟的关系就不行了，而且多了也麻烦。
然后就有一种叫做总线的方法（学好通信原理走遍天下都不怕），将所有的事件的触发和监听都放在这里。
总线这个，也只是个局部到全局的抽象，实际上的方法还是子组件创建自定义事件，父组件监听。
实际上总线就是新创建一个vue instance。
```javascript
const bus = new Vue({});

//child emit event
bus.$emit();

//parent or siblings or whomever listening event
bus.on();
```

## Reference
- [Vue official](https://vuejs.org/v2/guide/events.html#ad)
- [One issue I found](https://github.com/vuejs/vue/issues/5735)