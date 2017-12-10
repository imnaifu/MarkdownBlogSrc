## $agrv
- 传递给脚本的参数数组
- $argv[0] is the file name
- the rest is the parameter
- can be used to call a function is php script

```php
<?php
function return_max($a, $b){
    if ($a>$b){return $a;}
    else{ return $b;}
}
if ($argv[1]){
    if ($argv[1]=='return_max'){
        echo return_max($argv[2],$argv[3]);
    }
}
```

- function can be called in shell
- `php test_php.php return_max 100 99`

