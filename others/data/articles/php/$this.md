## $this
'_**$this->**_' refer to the Current Object.   
'_**$this->member**_' refer to the Non-Static Member. 

'_**self::**_' refer to Current Class.    
'_**self::member**_' refer to Static Member. 

Basically, _**$this**_ is used for referring the instance 
Non-static value belongs to the instance.
Because _**$this**_ is actually a object, so can use like _**$this->member**_.

_**self**_ is used for referring the object belongs to the class itself (like CONSTANT and static value)  
Because _**self**_ is not a object, so have use like _**self::member**_.

有一些value是class value， 有一些value是instance的value.   
eg. 有一个class named人类   

```php
class human{   
     public static human_history = '1000,000 years'; 
     //value belongs to the human class not each human
        
     public human_age = '100 years'; 
     //value belongs to one person but not the whole human   
}      
```

So I can use $this->human_age to access each human age.   
And use self::human_history to access the human history

~~~~
<?php
class Person {
    public $name = 'Jack1';
    const NAME = 'Jack2';

    function __construct($person_name) {
        $this->name = 'Jack3';
//        $this->name = $person_name;
    }

    function call(){
        echo $this->name;
    }
};

$jack = new Person('Jack0');

//Get constant
echo $jack::NAME; //Jack2

//Get property
echo $jack->name; //Jack3

//Get method
$jack->call();    //Jack3  
~~~~
