#### queue (last in first out)
- enque
~~~
$tmp = new vertex();
$tail.next = $tmp;
$tail = $tmp;
~~~

- deque
~~~
$tmp = $head;
$head = $head.next;
delete or return $head;
~~~
