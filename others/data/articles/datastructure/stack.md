#### Stack
- push
~~~
$tmp = new Vertex();
$tmp.next = $head;
$head = $tmp;
~~~

- pop
~~~
$tmp = $head;
$head = $head.next
delete or return $tmp;
~~~


