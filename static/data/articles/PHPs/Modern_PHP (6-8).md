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
 
 
 
 
 
