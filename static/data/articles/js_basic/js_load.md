1. 最新版本浏览器支持并行下载js文件，但是运行依然是阻塞的单进程
- 因此优化建议将js文件放在‘body'前面
2. HTTP请求会带来额外的性能开销，请求1个100kb的文件要比请求4个25kb的要快
- 所以对于外链请求建议多个文件合并一个

非阻塞加载js:
3. defer attribute
- 指明本元素所含的脚本不会修改DOM
- 等待页面完成以后执行
4. async
- 异步加载脚本，加载完后自动执行
5. 动态加载脚本
- var script = document.createElement('script');
- script.type = 'text/javascript';
- script.text = 'code here';
- documnet.body.appendChild(script);


defer & async
- both should be used with src, means only when include scripts
- normal script without defer and async 
    - HTML will pause to wait for the script to download and execute
- async
    - download the file during HTML parsing
    - execute the file when it finish downloading and stopping the parsing of HTML
    - execute without order
- defer
    - download the file during HTML parsing
    - execute after the parser completed
    - execute by order 
- ref: http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html


