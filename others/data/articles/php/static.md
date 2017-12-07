## Static usage

In PHP, '**static**' mainly has two usages.

1. Define class variable/method (as opposed to instance variable/method)   
and can be accessed **without instantiating class**

2. Can be used to maintain state between function calls (like javascript closure).
~~~~
function test()
{
    static $a = 0;
    echo $a;
    $a++;
}

test();  // prints 0
test();  // prints 1
test();  // prints 2
~~~~

3. so when to use static
- only if you decide that the function does not need the instance to run
