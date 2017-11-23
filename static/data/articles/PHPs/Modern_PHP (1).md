### Namespaces  
- Each modern PHP component and framework organizes its code beneath its own globally unique vendor namespace so that it does not conflict
with common class names used by other vendors.   
- so any class, interface, function live beneath the namespace   
- ` namespace Symfony\component\HttpFoundation; `
- ` Vendor_name\Subnamespace_level_1\Subnamespace_level_2; `

### Interface
- An interface is a contract between two PHP component that lets one object depend not on what another object is but, instead, on what 
another object can do. An inter face decouples our code from its dependencies, and it allows our code to depend on any third-party code
that implements the expected interface.
~~~
public function add_document(Document $document){
    $id = $document->get_id();
    $content = $document->get_content();
}

interface Document{
    public function get_id();
    public function get_content();
}
~~~

### Traits
- Trait is a mix of class and interface
- It's a prtial class implementation (i.e., constants, properties, and methods) that can be mixed into one or more exsiting PHP class.
Traits work double duty: they say what a class can do (like a interface), and they provide a modular implementation (like a class)
- PHP original class inheritance model allow you to extend the generalized root class to create specialized classes that inherit their
immediate parent's implementation.
- But some time we need two unrelated class to exhibit similar behavior.
- i.e. A RetailStor and a Car class are not the same. But they need the same geocodable functions for display on a map.
- So here comes the trait


### Generator
- Generator are simple iterators.
- Like Python iterator, it use yield to return value
- Most of the time, it deals with large number of values to save memory. Because it only use 1 value memory each time.
~~~ 
<?php
function make_range($length){
    for($i=0; $i<$length; $i++){
        yield $i;
    }
}
~~~

### Closures & Anonymous function
- A closure is a function that encapsulates its surrounding state at the time it is crated.
- The encapsulated state exists inside the closure even when the closure lives after its original enviroment ceases to exist.
- Closure is like the javascript closure which can remain state;
~~~
$closure = function($name){
    return echo 'Hello. '.$name;
};
echo $closure('naifu');
~~~ 

### Zend OPcache
- Zend OPcache is a PHP built-in bytecode cache.
- PHP is an iterpreted language. When the PHP interpreter executes a PHP script, the interpreter parses the PHP script code,
compiles the PHP code into a set of existing Zend Opcodes (machine-code instructions), and executes the bytecode. This happens
for each PHP file during every request. 
- A bytecode cache stores precompiled PHP bytecode. This means the PHP interpreter does not need to read, parse, and compile PHP 
code on every request. Instead, the PHP interpreter can read the precompiled bytecode from memory and excute it immediately.


