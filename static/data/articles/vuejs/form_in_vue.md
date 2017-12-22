# Vue 操作form
这个框架的一大理想便是让我们从DOM中走出来，把前端变成纯粹的像后端一样的只操作数据。
为啥我原来喜欢后端啊，因为爽啊，因为后端很纯粹啊，就只是数据操作，逻辑处理，如果写的复用性很好的话，会更美。
可是一旦把数据传到前端，一切就变了混杂着html,css,javascript。乱作一团啊有木有！
- 服务器接收到数据，你不知道是ajax传来的还是正常传来的。
- 最后渲染出那个样子但是你不知道是html自己，还是javascript出来的。
- 各种数据分布在各个地方，各种找啊，还有各种hidden input。  

唉，其实就好好写也是OK的，吐槽下我前面那个人留下的代码，尼玛啊，各种hack，各种乱。
hack should be the least option！！！
一个好的框架，不仅仅是方便使用，也应该约束限制一些低效，confusing的使用。

# 表格提交
大多数post请求都是表格提交，一个简单完整的web页面最基本的功能也就这两个
- 从database取数据展示出来
- client提交数据到database  
所以表格提交又常见又重要。旧的做法是直接用html的submit，数据全部从html里面拿。
这样不符合data和view的分离，而且要找到底在哪里。Vue用v-model将数据全部放在data里面，
定位容易，debug容易。

# 使用 v-model
用v-model可以将form的input动态的传入Vue instance的data,
当用户填完表的时候，实际上data已经在instance里面了，
submit的时候不需要用html的submit，而是用javascript call一个ajax将数据传出就可以了。
当然，需要preventDefault来阻止html提交。

这种方法弱化了html的功能，而将所有的数据和逻辑处理转给了javascript。
从而让html变成了真正的‘标记语言’（只是拿来做标记而已）。反正我觉得这样挺好的。

# 细节
建议将一个form里的数据放入一个object里面，更清晰易懂。 e.g `user.name, user.age`
```
<input type='text' v-model='user.name'> //string
<textarea v-model='user.name'></textarea> //string
<input type='checkbox' v-model='user.name'> //array
<input type='radio' v-model='user.name'> //string
<select v-model='user.name'> //string
    <option value='1'>1</option>
</select>

<script>
    data: {
        user: {
            name: '' //or []
        }
    }
</script>
```

# Reference
- [vue official](https://vuejs.org/v2/guide/forms.html#Basic-Usage)
- [youtube tutorial](https://www.youtube.com/watch?v=IkymKuIkajE&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=30)

