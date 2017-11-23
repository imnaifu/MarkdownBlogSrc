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
