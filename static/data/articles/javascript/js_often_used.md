## Object method

#### Object.prototype.toString() 
- return a string representation of object
- which is rewrote for string, array, number object
- can also rewrite for your own


```javascript
let num = 15;
let arr = ['a', 'b', 'c'];
let str = 'abc';
console.log(num.toString()); //"15"
console.log(arr.toString()); //"a,b,c"
console.log(str.toString()); //"abc"

//rewrite
function Dog(name, color){
    this.name = name;
    this.color = color;
}
Dog.prototype.toString = function(){
    let ret = "Dog - " + this.name + this.color; 
    return ret;
}
```


## Array method

#### Array.prototype.pop()
- return and **remove** last element of array

```javascript
let a = [1,2,3];
let b = a.pop();
console.log(a); //[1,2]
console.log(b); //3
```

#### Array.prototype.push()
- return the new length, **add** a new element to an array in the end

```javascript
let a = [1,2,3];
console.log(a.push(4,5)); //[1,2,3,4,5]
```

#### Array.prototype.shift()
- return and **remove** the first element of array, all other element are shifted to lower index

```javascript
let a = [1,2,3];
let b = a.shift();
console.log(a) //[2,3]
console.log(b); //1
```

#### Array.prototype.unshift()
- return the new length, **add** a new element to an array at the beginning, and unshift older elements

```javascript
let a = [1,2,3];
console.log(a.unshift(4,5)) //[4, 5, 1, 2, 3]
```

#### Array.prototype.concat()
- return new array after concat

```javascript
let a = [1,2,3];
let b = [4,5,6];
console.log(a.concat(b));
```

## Number method

#### Number.protype.toFixed([digits])
- return a string fixed to a specific number of decimals, default 0

```
let num = 12.36;
console.log(num.toFixed(1)); //12.4
```

#### Number.prototype.toPrecision([precision])
- return a string fixed to a specific number of length
- fixed to 有效数字

```
let num1 = 1.25;
let num2 = 0.03;

console.log(num1.toPrecision(2)); //1.3
console.log(num2.toPrecision(2)); //0.030
```

## String Method
#### String.prototype.search(regexp)
- return index of first regex match of the string, if not found then -1

#### String.prototype.slice(start, [end])
- return new string from(include) start to(not include) end
- if omit end, will all the way to the end  

```
let str = '012345';
let str1 = str.slice(1, 4);// '123'
let str2 = str.slice(1); //'12345'
```

#### String.prototype.replace(regex|substr, newstr|function)
- return new string with some or all replaced

#### String.prototype.split([separator], [limit])
- return array of strings split at each separator point
- if separator is '', then separate all character


```
let str = '12,34,56';
let arr1 = str.split(','); //['12', '34', '56'];
let arr2 = str.split(); //['12,34,56'];
let arr3 = str.split(''); //['1','2',',','3','4',',','5','6']
let arr4 = str.split(',', 2) //['12','34']
```
