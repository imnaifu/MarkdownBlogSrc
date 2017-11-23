### Fiddler
- packet catching program
- and can also simulate request GET || POST
- GET
    - `GET http://www.google.com HTTP/1.1`
    - `Host: www.google.com`
- POST
    - `POST /something/index.php HTTP/1.1`
    - `HOST:`
    - `Content-type:`
    - `Content-length`
    - `[space]`
    - `id=bla&name=bla`
    
### submit form
- file_get_content
- fopen 

~~~ php
    <?php 
$postData = array(
    'title'   => '我是file_get_contents 构造器',
    'content' => "我是file_get_contents构造的数据内容",
    'publish' => "发布",
    );
$postData = http_build_query($postData);

$ops = array(
    'http' => array(
        'method'    => 'POST',
        'header'    => 'Host:localhost\r\n' . 
                        "Content-type:application/-form-urlencoded\r\n" . 
                        "Content-length:" . strlen($postData) ."\r\n",
        'content'   => $postData,
        ) 
    );
$context = stream_context_create($osp);

// file_get_contents("http://localhost/http/post.php",false,$context);
$fp = fopen("http://localhost/http/post.php", 'r', false, $context);
fclose($fp);
~~~
