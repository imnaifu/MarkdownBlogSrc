其实写这篇的时候router已经蛮熟了，只不过有些很细节的东西没留意到，还是总结下。

# vue-router是啥
也是个npm的包，vue的原生包，可能以前是一起的，我也不清楚，没用过1.0，反正现在是分开了，如果写一些小的SPA
是用不到的，中大型的会用到。用下面的方式install
> `npm install vue-router --save`

# 有啥用
路由工具，有过开发经验会知道，页面到导来导去的，如果能在一个地方管理方便的多，laravel也有自己的路由。不过我有个问题，
前后端实际都能控制路由，到底由谁来控制？
我觉得如果真的做到了前后端分离，那应该是完全交给前端的，后端仅仅做逻辑运算。不过谁知道呢，这个我没仔细研究过。
以后再看吧。

# 怎么用
vue-router虽然是原生的插件，但也是和其他插件一样的用法。

```javascript
//1. import
import Rotuer from vue-router;

//2. use
Vue.use(Router);

//3. initiate
const router = new Router({
	routes:[
		//normal way
		{ path: '/something', name: 'route-name', component: component-name }
		//redirect way
		{ path: '/another', redirect: '/something' }
	]	
})

//4. add into root instance
const vm = new Vue({
	el: '#app',
	router: router	
})

//5. use in template
<router-link to='/something'></router-link>
```

# 小技巧
- 路由的a tag的class `router-link-active` 表示当前active的路由
	- 这个acitve啊，实际上如果子路由acitve，父路由也是active
	- 比如我们有两个路由 `/user`, `/user/id`
	- 第二个路由active的时候，实际上第一个路由也是active的
- 解决方法就是加`exact`这个关键字在template，那么只有在那个指定的路由才会有active的class
```
<router-link to='/something' exact>Something<router-link>
```

