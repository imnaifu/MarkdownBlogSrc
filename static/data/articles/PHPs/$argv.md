## $agrv
- 传递给脚本的参数数组
- $argv[0] is the file name
- the rest is the parameter
- can be used to call a function is php script

``` php
   <?php
  5 function return_max($a, $b){
  6   if ($a>$b){return $a;}
  7   else{ return $b;}
  8 }
  9
 10 if ($argv[1]){
 11     if ($argv[1]=='return_max'){
 12       echo return_max($argv[2],$argv[3]);
 13     }
 14 }
```

- function can be called in shell
- `php test_php.php return_max 100 99`

