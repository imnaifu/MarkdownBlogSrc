# 啊哈，mixin（迷信）
当然，要讲这个的原因是因为vue里面有。但是这个概念并不是只有vue有，而是一个general的概念

# 什么是mixin
这个名词起源于冰淇淋，基本口味（巧克力，香草）mixin（混入）坚果，曲奇等等。
翻译成混入很形象，其实一直都这么用，只不过不知道这么叫而已，这其实是一个代码层面的概念。
比如在PHP里我们经常会把一些可复用的函数提取出来，塞到一个文件里，然后在需要用到的class里面require。
在给代码分层的时候，是很有用的，其实是与继承平级的概念，和继承一起解释会好理解。
```
//哺乳动物
class Mammal {
	function scream(){}
}

class Dog extend Mammal {

}

//蛐蛐
class Ququ {

}

//这里因为Dog继承Mammal，所以是有scream方法的
$dog = new Dog();
//这里ququ不是哺乳动物，所以继承哺乳动物来获得scream方法不是一个好的approch
$ququ = new Ququ();
```
那要怎样让ququ也有scream方法呢，一样的代码肯定不能写两遍。问题来了，PHP不支持多重继承
（事实上这玩意也不科学，还有多态，多你妹的态啊，好好写两个函数名不好吗，为啥非要用同一个函数名）
有两种解决方法，如果你想要纯粹的代码上的解决方法，那么新建一个class，把scream作为静态方法放进去，然后外面就能直接调用的。
或者简单点，直接建一个文件，将公共函数放进去，后面直接require就好。
> 上面讲的这个方法，就是mixin啦，实际上就是指，提取出公共的函数拿出来给其他人公用的这个概念。  

# Vue Mixin
理解了上面的概念，再看vue的mixin就很简单了。
```
//first create mixin
const myMixin = {
	mounted(){

	},
	methods: {

	},	
	computed:{

	}	
	//etc...
}

//then insert into 'mixins' (which is an array)
const vm = new Vue({
	methods:{

	},
	mixins: [myMixin]		
})
//that's all
```
所以可以在不同的组件之间，使用相同的部分。可以create一个'mixin.vue'文件，放mixin，用的时候import就好



# Reference
- [Wiki Mixin](https://zh.wikipedia.org/wiki/Mixin)
- [Vue official](https://cn.vuejs.org/v2/guide/mixins.html#%E5%9F%BA%E7%A1%80)