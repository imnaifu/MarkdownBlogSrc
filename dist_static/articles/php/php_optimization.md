## TOOLS
#### Apache bench
- 压力测试
  - request per second
  - time per request

- `ab -n 100 -c 10 https://google.com.sg/`
- `-n` [number]: number of request
- `-c` [number]: number of concurency

#### XHProf
- can use all the procedure of one call with a specific call id
- check if support `php --ri xhprof`

#### vld 
- view opcode

### how to show performance
1. PHP func `microtime()`
    - get start time, get end time, calculate the difference
2. Linux `time`
    - `time php test.php`
    

### PHP
1. use php original function instead of write your own
2. php function also has difference
    - `is_set()` faster than `array_key_exists()`
    - try to check the time complexity of php functions
3. do not use magic method
    - `__get()`
4. do not use `@`
    - '@' : 实际上是在那行代码前面将error report设成ignore, 然后再恢复
    - replace with `try{} throw`
5. `unset()` unused value
6. try not use `regex` 
7. avoid call function is loop
    - avoid `for ($i=0, $i<strlen($s), $i++){}`
8. PHP is not suitable for 计算密集型
9. PHP is good at connect web server and back-end service, UI  
10. use single quote when write key for the array
    - `$arr['key']` `$arr[key]` 
    - if no quote, php will search for constanct first, cost extra time
11. if access database
    - then database consume the most
12. normally 
    - for speed: memory >> database > disk > network data
    - database is also based on disk, but it is asyc, save in memory first them save to disk
    - big file must be avoid to use 
13. optimize network
    - set timeout
        - connection timeout 200ms
        - read timeout 800ms
        - write timeout 500ms
    - serial change to paralell
        - use `curl_multi_*()`
        - use swoole
14. php `gzip` compress output
    - pro: data are less
    - con: extra CPU consume
    - if >100kb use gzip, else do not use
#### final  
    - opcode cache, like APC
    - 拓展, because some of them writing by C
    - runtime optimize: HHVM 
[pecl.php.net](http://pecl.php.net)    
[COURSE](http://www.imooc.com/learn/205)
    
    
    
