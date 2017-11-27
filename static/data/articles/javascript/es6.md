# 'let' keyword
scope within the '{}'
```javscript
if (true){
	var a = 1;
	let b = 2;
}
//a = 1
//b = undefined
```

# 'const'
create read-only constant value, if redefine will return silent error


# Template literal
instead of using double quote or single quote, using `` instead to quote the string
it's like PHP double quote, allow variable inside by using ${var_name}
```
let example = '123';
console.log(`this is a ${example}`);
```

# Arrow function
```
//old:
let add = function(a,b){
	return a+b;
}
console.log(add(2,3));//5
//new (with arrow):
let add = (a,b) => {
	return a+b;
}
console.log(add(2,3));//5	
```
### scope issue with 'this':
```
//old way:
let person = {
	name: 'abc',
	sayName: function(){
		console.log(this.name);
	}
}
//new way:
let person = {
	name: 'abc';
	sayName(){
		console.log(this.name);
		//working
	}
	sayName: () => {
		console.log(this.name);
		//not working because in arrow function 'this' 
		//refer to parent scope not 'person'
	}
}
```
### Why arrow function is useful
```
let person = {
	name: 'abc',
	hobbies: ['game', 'sports'],
	showHobbies: function (){
		this.hobbies.forEach(function(hobby){
			console.log(`${this.name} like ${hobby}`);
			//not working, 'this' means nothing here 
		}); 
	}
	showHobbies: function(){
		let _this = this; //save this
		this.hobbies.forEach(function(hobby){
			console.log(`${_this.name} like ${hobby}`);
			//old working way by save 'this' to '_this'
		})
	}
	showHobbies: function(){
		this.hobbies.forEach((hobby)=>{
			console.log(`${this.name} like ${hobby}`);
			//arrow function way, because 'this' refer to parent
		})
	}
}
```

# Spread operator &&　Rest parameters:
### (grama: '...name') 

### Rest parameters
- set a values => array
```
let b = function(a, ...args){
	console.log(a, args);
}
b(1, 2, 3, 4); //1 [2,3,4]
```

## Spread operator
- array => set of values
```
let numbers = [1,2,3,4];
let b = Math.max(...numbers);
let c = Math.max(1,2,3,4);
console.log(b, c); //4 4
```

# Destructing
- array
```
let a = [1, 2, 3, 4];
console.log(a[0]) //1
let [b, c, d] = a;
console.log(b,c,d) //1,2,3
let [bb, cc, ...dd] = a;
console.log(bb, cc, dd); //1, 2, [3,4]
```
- object
```
let a = {
	name： 'aa',
	age: 30
}
{name: myName, age} = a;
console.log(myName, age); //'aa', 30
```

## gulp & babel
- 打包编译成es2015


# Promise
- It's an API rule
```
let myPromise = new Promise((resolve, reject) => {
	
});
```














