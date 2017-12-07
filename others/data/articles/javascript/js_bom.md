#JS操作Browser的API
## window
- 既是global对象
- 又是通过js访问浏览器的窗口的一个接口

## 系统对话框
- alert（）
- confirm()
- prompt() //prompt with input area
- print()
- find()

## location
每次修改location的属性(hash除外)，都会加载新的url，并且在历史记录里加上新的  
如果想让用户不能回到原来的页面，要使用locaiton.replace(url)
- assign(): 立即打开新的url并在浏览器历史记录里生成一条记录
    - window.location = 'url' 调用assign()
    - location.href = 'url' 调用assign()
- location.hash = ''
- location.search = ''
- location.hostname = ''
- location.pathname = ''
- location.port = ''
- location.reload() //重新加载，可能从缓存
- location.reload(true) //从服务器重新加载

## navigator
- 检查浏览器类型，是否启用cookie，语言等等

## screen
- 窗口的宽度，高度等等

## history
- .back() == .go(-1)
- .forward() == .go(1)
- .length()
    - history.length == 0 //打开窗口的第一个页面
    