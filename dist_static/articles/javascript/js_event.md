## 事件(event)
- 用户或者浏览器自身执行的某种动作 (load, click)
- 响应某个事件的程序就叫事件处理程序 (onclick, onload)

## 事件冒泡
- click a tag, 点击事件首先被a元素收到，接着向DOM树上层冒泡，被li收到，然后是ul，一直到document乃至windows