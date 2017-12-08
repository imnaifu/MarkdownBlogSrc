# JavaScript Hoisting!!Hoary!!
和PHP不同，JS可以先使用再声明。
```
foo();

function foo(){
    console.log('work for me!'); 
}
```
为什么能这么不科学呢！因为JS有一个叫提升(hosting)的东西。  
提升可用于变量或者函数，但仅仅是提升声明，而不用于初始化。   

## 什么是声明，什么是初始化
一般我们都在声明的时候顺便初始化了，所以不常区分这两个，实际上是分成两个部分的
```
var a; //这是一个声明
a = 1; //这是初始化

var b = 2; //statement + initiate

//函数声明
function abc (){
        
} 

console.log(c) //undefined
//因为这是变量声明，不是函数声明，
var c = function (){
    
}

```

## 提升仅用于声明，不用于初始化
```
console.log(a); //undefined
var a = 1;

//相当于

var a;
console.log(a); //undefined
a = 1; //这个初始化不会提升
```


## reference
- [https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)