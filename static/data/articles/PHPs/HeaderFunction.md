### header($string);

- 必须在任何实际的输出被发送之前调用 header() 函数
- header (): sent a raw http header to client side.

1. 
~~~
//页面跳转
header('Location: http://www.example.com/');
~~~

2. 
~~~
//提示用户保存一个生成的 PDF 文件（Content-Disposition 报头用于提供一个推荐的文件名，并强制浏览器显示保存对话框）
header("Content-type:application/pdf");
// 文件将被称为 downloaded.pdf
header("Content-Disposition:attachment;filename='downloaded.pdf'");
// PDF 源在 original.pdf 中
readfile("original.pdf");
~~~

3.
~~~
//用户可能会设置一些选项来更改浏览器的默认缓存设置。通过发送上面的报头，您可以覆盖任何这些设置，强制浏览器不进行缓存！
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-cache");
header("Pragma: no-cache");
~~~
