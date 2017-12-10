1. sequence array: fast in retrieve, bad is insert
2. linked list: fast in insert, bad in retrieve

### linked list 
- head, head.value, head.next
- tail, tail.value, tail.next = null

#### insert head
```
$new_head = new vertex();
$new_head.next = $head;
$head = $new_head;
```

#### insert tail
```
$new_tail = new vertex();
$tmp = head;
while ($tmp.next != null){
  $tmp = $tmp.next
}
$tmp.next = $new_tail;
$new_tail.next = null;
```

#### insert kth
```
$new_vertex = new vertex();
$tmp = $head;
while (--$k != 0){
  $tmp = $tmp.next;
}
$hold = $tmp.next;
$tmp.next = $new_vertex;
$new_vertex.next = $hold;
```

#### remove head
```
$head = $head.next;
delet $head;
```

#### remove tail;
```
$tmp = $head;
while ($tmp.next != null){
  $pre = $tmp;
  $tmp = $tmp.next;
}
$pre.next = null;
delete $tmp;
```

#### remove kth
```
$tmp = $head;
while (--$k != 0){
  $pre = $tmp;
  $tmp = $tmp.next;
}
$pre.next = $tmp.next;
delete $tmp;
```














