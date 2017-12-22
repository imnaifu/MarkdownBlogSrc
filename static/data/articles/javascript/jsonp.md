## JSONP(JSON with Padding)
- It's a method get data without worrying cross-domain issues
- 一般来讲Ajax call只能用在同源（相同域名）
- 如果要从别的domain拿data，就需要JSONP
- 利用的是'script'标签可以不同源

```php
//other.php
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
"<script src='other.php?callBack=abc'></script>"
```