## 哈哈哈，强大的Vue
Vue为了不让你直接操作，真是想尽了以前办法，就是不让你碰DOM这个小婊砸，竭尽所能的把数据拿出来。今天就讲其中一个很强大的API。

## ref & $refs
网上找了找没看到几个讲这个的，我觉得这个很重要也很强大啊，算了我自己总结吧。
> By adding a ref attribute to any element within the template, we can **refer** to these elements on our Vue instance. More specifically, we can access the DOM elements.

## 获取node
一般来讲我们是怎么在javascript里面拿到节点的。
- pure js: document.querySelector('.example');
- Jquery: $('.example');
上面都会返回一个节点类型的object，里面有各种属性。

## Vue获取node
Vue没有用那些css selector，而是直接在tag上加一个ref attribute。然后将这个节点的信息加入到`vm.$refs`里面。
如下面的代码，p节点可以通过`vm.$refs.my_ref`访问。
```html
<p ref='my_ref'>test</p>
<script type="text/javascript">
    var vm = new Vue({
        methods: {
            console.log(this.$refs.my_ref.innerHTML); //test
        }
    });
</script>
```

## 优缺点
Advantage: 
- Very vueful，清晰易懂。

Disadvantage:
- 获取节点没问题，修改节点其实有点小风险
- 只能拿一个节点（同一个ref只会拿最后一个），因为没法使用css selector（不过，与v-for一起用可以拿多个)

## 与v-model
我们知道v-model可以将input类型（input（text, radio, checkbox...）, textarea, select)的输入绑定data里的property。
我觉得ref更像是一个补充吧，因为v-model只能传数据，ref却可以把整个节点传入。


## Reference
- [https://codingexplained.com/coding/front-end/vue-js/accessing-dom-refs](https://codingexplained.com/coding/front-end/vue-js/accessing-dom-refs)
- [https://vuejs.org/v2/api/#ref](https://vuejs.org/v2/api/#ref)