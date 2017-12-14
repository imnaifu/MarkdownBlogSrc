1. for/while loop boundary should be defined befor the loop
    - means do not using `for($i=1; $<=sizeof($arr); $i++)`
2. if static can be used, use static
3. switch better than if else
4. use `file_get_contents()` instead of `fopen`, `fwrite`, `fclose`
5. `?:` is faster than `if else`
6. `.` connection is better than `"this is $val"`
7. single quote faster than double, cause double quote will search the variable inside
8. `$row['id']` faster than `$row[id]`
