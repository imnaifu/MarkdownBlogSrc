### Magic method
CalL back, when access something that does not exist or cannot access, call the function below.   
1. **__get()**: when access a attribute which does not exist, this method will be called.    
2. **__set()**: when set an attribute which does not exist, this method will be called.   
3. **__call()**: same usage, apply to method.   
4. **__callStatic()**: same, apply to static method (must be static also).   
5. **__toString()**: when you try to echo or print a class object, this method is called.   
6. **__invoke()**: when you try to use a class object as a function, this method is returned.   
