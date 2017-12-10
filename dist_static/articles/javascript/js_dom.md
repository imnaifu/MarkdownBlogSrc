# JS操作DOM的API

## node节点类型
- 1 -> element 元素节点
- 2 -> attribute 特性节点
- 3 -> text 文本节点

## document 类型
- 表示整个HTML页面
- document对象是window对象的一个属性
- nodeType = 9
- attribute有
	- URL: 完整的URL
	- domain: 域名 
		- 可设置，只能往更松散的方向设置
		- 只能设置同一个域的域名
	- referrer: 来源页面

## element 类型
- nodeType = 1
- nodeName = tagName
- nodeValue = null
- parentNode
- HTMLElement继承Element, 并添加了一些属性
	- attribute
 	- getAttribute()
 	- setAttribute()
 	- removeAttribute()
- 分清属性(property)和特性(attribute)
- 属性是object的property
- 特性是HTML元素的attribute
- 可以通过obejct.property set/get 存在的property，自定义的不可以，只能通过getAttribute()/setAttribute()
- 还是建议通过设置property来改变attribute
- HTML5标准，自定义attribute应该用'data-'

## text 类型
- nodeType = 3
- nodeName = '#text'
- nodeValue
- parentNode -> element
- childNode -> not support
- 操作方法：
    - document.createTextNode()
    - element.normalize(): 合并文本节点
    - splitText(): 分割文本节点

## comment 类型
- nodeType = 8
- nodeName = '#comment'
- nodeValue -> 注释的内容
- parentNode -> document/element
- childNode -> not support
- 与text类型继承相同的基类

## CDATASection 类型(XML only)
- nodeType = 4
- nodeName = '#cdata-section'
- nodeValue -> content

## documentType 类型
## documentFragment 类型
## attr 类型 (不建议直接操作)
- nodeType = 11
- nodeName = attr name
- nodeValue = attr value
- parentNode = null
- childNode -> not support
- properties:
    - .name = nodeName 
    - .value = nodeValue
    - .specified = boolean
- document.querySelector('#div');
- document.querySelectorAll('.div');


## HTML5 new
- document.getEelementSByClassName()
- classList
    - classList.add()
    - classList.contains()
    - classList.remove()
    - classList.toggle()


## DOM性能
- 现场更新使用文档碎片一次性加入
- use innerHTML instead of createElement/appendChild
- 事件代理，任何冒泡的事件都不仅仅可以在时间目标上进行处理，任何祖先节点也能处理
- 谨慎使用HTMLCollection
- HTML集合： 包含DOM节点引用的类数组对象， e.g. document.getElementByName()的返回值就是
    - 并不是真正的数组，只有一个length属性，并且可以通过下标访问
    - use toArray()缓存集合到数组会更快
    - 如果只是很小的集合，那么缓存length就足够
- DOM Tree & Render Tree
    - DOM Tree 的每一个需要显示的节点在渲染树中至少存在一个对应的节点（隐藏的DOM元素在渲染树中没有节点）
    - Once 两个树构建完成，浏览器变开始paint页面元素
    - 重排(reflow) 重绘(repaint)
















