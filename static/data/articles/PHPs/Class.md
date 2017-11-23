### function type:
- Public : access anywhere
- Protected : this class or child class
- Private : only this class, child class can not

### Static （静态）:
- 声明类成员或方法为 static ，就可以不实例化类而直接访问，静态成员属于类，不属于任何对象实例，但类的对象实例都能共享。
- "self" is to class
- "$this" is to object
- static property: 
    - if outside the class, class_name :: property_name; if inside the class, self :: property_name 

    - static method: 
    - if outside the class, class_name :: method_name() or $var = new Class_name(), $var->method_name() like normal way;
    - if inside the class, self :: method_name()
  
### Abstract Class （抽象类）:
- 不能实例化，只能拿来继承

**Constant（常量）:**
- outside the class, use define (CON, '123');
- inside the class, use const CON='123';

~~~
Class darling {
    var $variable = 'abc'; //this is called property
    function love(){
        echo $this->variable; //you can call the class property inside the class by using '$this'
    }
}
~~~
~~~
__construct ( ) {
    // 实例化一个类之前执行的方法
    // like cos_class_init ( )
}

__destruct ( ) { 
    // 销毁一个类之前执行的方法
    // like cos_class_exit ( ) 
}
~~~





