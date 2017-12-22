# 自定义directive
## 啥是directive
`v-for`, `v-show`, `v-on：click` 这些都叫directive，vue允许我们自定义directive。
比如我们可以定义一个可以指定字体颜色的directive。

### globally
```
//语法
Vue.directive('directive-name', definition-object)

Vue.directive('fontColor', {
	bind(el, binding, vnode){
		//el -> element
		//binding -> variable passed in "v-on:click='value'"
		//binding.value: passed value
		//binding.arg: , 'click' is the arg

		el.style.color = binding.value
	}
})
```

### locally
```
<script>
export default {
	directives: {
		//objects inside
		fontColor: {
			bind(el, binding, vnode){
				el.style.color = binding.value
			}
		}
	}
}
</script>
```

### 使用
```
<p v-fontColor="yellow">text here</p> //font color will be yellow
```
上面只是介绍了最简单的一部分，其实这个directive跟实例一样，是有一套hook的，具体看官网。
还有一套变量，比如 `el` 表示绑定的element，都在官网。。。


# 自定义filter
Filter，额，其实filter都是自定义的，以前好像是有一些内置filter的，不过好像2.0就都扔了。

## filter是啥呢
filter是指在你的data和展现给用的data之间加了一层过滤器。比如
```
{{value | toUpper}}
```
如果我们定义了一个 `toUpper` 的filter，value就会以uppercase的形式展现出来。下面我们就定义一个。

### globally
```
Vue.filter('toUpper', function(value){
	return value.toUpperCase()
})
```
### locally
```
<script>
export default {
	filters: {
		//functions inside
		toUpper: function(value){
			return value.toUpperCase();
		}
	}
}
</script>
```

# Reference
- [Vue official](https://vuejs.org/v2/guide/custom-directive.html#ad)