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






