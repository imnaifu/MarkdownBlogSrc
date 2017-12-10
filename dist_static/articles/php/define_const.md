## Difference between define('CONSTANT','constant') & const CONSTANT = 'constant'

Basically, const is used **within the class and above all the function** to define constant that are used within the class.
And define() is used **outside of the the class or within the function** to define constant that are golobally used by every file.


1. Scopelly:
  * const defined in the class can only be used within the class.
  * define() can be access globally (every other file)
    
2. Array: 
  * const can use array
  * define() cannot untill 7.0
    
3. Speed:
  * const twice faster than define()
    
4. Condition:
  * const cannot used by conditionally because has to be used in the outermost scope
  * define() can be used like
```php
  if(!define('FOO'){
      define('FOO','bar')
  }
```
