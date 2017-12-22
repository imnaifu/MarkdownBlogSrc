# Stream
- A stream is a resource object which exhibits streamable behavior. 
- It's abstraction of resource.
- A stream is referenced as `<scheme>://<target>`.   
- `<scheme>` is the name of the wrapper, and `<target>` will vary depending on the wrapper’s syntax.

### Stream Type
- file:// (default)
- http/https
- ftp/ftps
- php
- zip


#### http stream
- `http://`
- [HTTP Content Options](http://php.net/manual/en/context.http.php)
- stream_context_create()
- create the content of stream
```php
<?php
$opts = array(
  'http'=>array(
    'method'=>"POST",
    'header'=> "Auth: SecretAuthTokenrn" .
        "Content-type: application/x-www-form-urlencodedrn" .
              "Content-length: " . strlen("Hello World"),
    'content' => 'Hello World'
  )
);
$default = stream_context_get_default($opts);
readfile('http://localhost/dev/streams/php_input.php');
```
- http_build_query() //生成 URL-encode 之后的请求字符串

#### php stream
- php's own stream to access its I/O
- `php://stdin`
- `php://stdout`
- `php://stderr`
- `php://input`

