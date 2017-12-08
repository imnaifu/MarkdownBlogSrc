#### doubly linkedlist
- insert head 

```php
$tmp = new vertex();
$tmp.next = $head;
$head.prev = $tmp;
$head = $tmp
```

- insert tail  
```php
$new = new vertex();
$tmp = $head;
while ($tmp.next != null){
	$tmp = $tmp.next
}
$new.next = null
$new.prev = $tmp;
$tmp.next = $new
```

- insert kth  
```php
$new = $new vertex();
$tmp = $head;
while (--$k ! = 0){
	$tmp = $tmp.next
}
$new.prev = $tmp
$new.next = $tmp.next
$tmp.next.pre = $new
$tmp.next = $new;
```
