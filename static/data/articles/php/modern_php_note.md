### Namespaces  
- Each modern PHP component and framework organizes its code beneath its own globally unique vendor namespace so that it does not conflict
with common class names used by other vendors.   
- so any class, interface, function live beneath the namespace   
- ` namespace Symfony\component\HttpFoundation; `
- ` Vendor_name\Subnamespace_level_1\Subnamespace_level_2; `

Namespace has nothing to do with the file system.    
It's a structure you create yourself which used to specify the exact class, constant or function you would like to access.

The detail about namespace can be seen [here](http://www.runoob.com/php/php-namespace.html)



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


### PHP-FIG (PHP Framework Interop Group)

### PSR (PHP Standard Recommendation)
- PSR-1: Basic code style
- PSR-2: Strict code style
- PSR-3: Logger interface (most famous monolog/monolog)
- PSR-4: Autoloading
- SPL: Standard PHP Library

### Component
- Packagist (vendor_name/package_name)
- Composer
- Semantic Versioning Scheme (语义化版本控制)
  - First number is the major release number, break backward compatibility (like PHP 5 to PHP 7)
  - Second number is the minor release number, is incremented when updated with minor features that do not break backward compatibility
  - Third and final number is the patch release number, is incremented when receives backward-compatible bug fixes
  
### Sanitize Input
- `htmlentities($input, ENT_QUOTES) //second parameter is to encode single quotes`
- Prevent from SQL injection
- `filter_var(), filter_input()` Can sanitize different forms of input: email, URL, integers, floats, HTML ...


### Password Security
- Hash user password with bcrypt
- `password_hash()`
- `password_get_info()`
- `password_needs_rehash()`
- `password_verify()`


### Date, Times and Time Zones
- use DateTime, DateInterval and DateTimeZone Classes


### Databases
- PDO (PHP Data Object)

### Transactions
- Transaction is a collection of SQL queries that are either all executed successfully or not excuted at all


### Streams
- A stream is a transfer of data between an origin and destination
- The origin and destination can be a file, command-line process, network connection, temporary memory, standard input or output
or any other resource avaliable via PHP's stream wrappers
- Stream is a very general concept which we often use but we don't realize
- Every stream has a scheme and a target.
- like: <scheme>://<target>
- `$jaon = file_get_contents('http://www.baidu.com?format=json') //a traditional url is actually a PHP stream wrapper indentifier
is disguise`
- default PHP stream wrapper is file://
- others are `php://stdin`, `php://stdout`, `php://memory`, `php://temp`
- can create a stream context with the `stream_context_create()` function
- can send a HTTP POST request with `file_get_contents()` function


### Errors and Exceptions
- An exception is an object of class Exception that is thrown when you encounter an irreparable situation from which you can not recover
- A component flip/whoops
~~~
throw new Exception('Something Wrong');
try{

}catch (){

}finally{

}
~~~



### Hosting
- Shared servers
- Virtual private server
- dedicated servers
- PaaS (Platforms as a service)

### Provisioning
- After choose a host, then is to configure and provision the server for PHP application
- It's art, not science. Depends entirely on your application's needs


### PHP-FPM (PHP FastCGI Process Manager)
- is a software that manages a pool of related PHP processes that receive and handle requests from a web server.
- it create one master process (usually run by the operating system's root user) that controls how and when HTTP requests are 
forwarded to one or more child processes. 
- The PHP-FPM master process also controls when child PHP processes are created (to answer additioanl web application traffic) 
and destroyed (if they are too old or no longer necessary)
- Each PHP-FPM pool process lives longer than a single HTTP request, and it can handle 10, 50, 100, 500 or more HTTP requests.


### nginx (pronounced 'in gen ex')
- much simpler to configure and often use less system memory


### Virtual Host
- A virtual host is a group of settings that tell nginx application's domain name, where the PHP application lives on the filesystem,
and how to forward HTTP requests to the PHP-FPM pool


### Tuning
- Tune PHP's configuration with settings appropriate for application and production server
- php.ini
- memory
 - the memory_limit setting in the php.ini file determines the maximum amount of system memory that can be used by a single PHP process
 - run top to see realtime stats for running processes.
 - invoke the `memory_get_peak_usage()` php function at the tail end of a php script to output the maximum amount of memory consumed by
 current script
 - Apache Bench or Seige to stress-test PHP applications under production-like conditions
 
 ### Zend OPcache
 - How a typical PHP script is processed for every HTTP request.
  - nginx forwards an HTTP request to PHP-FPM
  - PHP-FPM assigns the request to a child PHP process
  - The PHP process finds the appropriate PHP scripts
  - reads the scripts and compiles into opcode (or bytecode) format
  - executes the compiled PHP opcode to generate an HTTP response
  - response is returned to nginx
  - nginx returns the HTTP response to HTTP client
 - PHP resque is a job queue manager
 
 ### Session
 - If your session data is stored on disk, this prevents you from scaling PHP across additional servers.
 - If your session data is, instead, stored on a central Memcached or Redis data store, it can be accessed from any number 
 of distributed PHP-FPM servers
 - PECL Memcached extension 
 
 
 
 
 
### Test
- Unit test
- If we know each piece works well on its own, we can be confident it also works well when integrated into the whole application.

#### Test-Driven Development (TDD)
- Write tests before you write application code.

#### Behavior-Driven Development (BDD)
- Behavior-driven development means that you write stories that describe how your application behaves.

#### PHPUnit
- Your PHPUnit test are grouped into test cases, and your test cases are grouped into test suites.
- PHPUnit runs your test suites with a test runner


### Profiling
- Profiling is how we analyze application performance.

#### Benchmark (检测)
- A benchmarking tool allows you to test your application performance externally, much as an application user would with a web browser.
- Benchmarking tools let you set the number of concurrent users and total number of requests that hit a specific application URL.
- When the benchmarking tool finishes, it tells you the number of requests per second that your application sustained (among ohter statics)
- If you find a particular URL sustains only a small number of requests per second, you may have a performance issue.
- I the performance issue is not immediately obvious, you use a profiler


### HHVM (Hip Hop Virtual Machine)
- An alternative PHP engine (originally was Zend)
- Its just-in-time (JIT) compiler provides performance many times better than PHP-FPM

### HacK
- A new server-side language that is modification of PHP language
- A dialect of PHP and not a new language
