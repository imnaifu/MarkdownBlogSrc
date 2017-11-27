## JSONP(JSON with Padding)
- It's a method get data without worrying cross-domain issues
```php
    <?php 
    $callBack = $_GET['callBack'];
    $ret = "{$callBack}(123);";
    echo $ret;
    exit;
```
```javascript
    function abc(val){
        alert(val);
    }
    "<script src='abc.php?callBack=abc'></script>"
```