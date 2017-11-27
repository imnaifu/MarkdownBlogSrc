## Object method
### Object.prototype.toString() 
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
### Array.prototype.pop()
- return and **remove** last element of array

```javascript
let a = [1,2,3];
let b = a.pop();
console.log(a); //[1,2]
console.log(b); //3
```

### Array.prototype.push()
- return the new length, **add** a new element to an array in the end

```javascript
let a = [1,2,3];
console.log(a.push(4,5)); //[1,2,3,4,5]
```

### Array.prototype.shift()
- return and **remove** the first element of array, all other element are shifted to lower index

```javascript
let a = [1,2,3];
let b = a.shift();
console.log(a) //[2,3]
console.log(b); //1
```

### Array.prototype.unshift()
- return the new length, **add** a new element to an array at the beginning, and unshift older elements

```javascript
let a = [1,2,3];
console.log(a.unshift(4,5)) //[4, 5, 1, 2, 3]
```

### Array.prototype.concat()
- return new array after concat

```javascript
let a = [1,2,3];
let b = [4,5,6];
console.log(a.concat(b));
```

## Number method
- **.toString()**: returns a number as a string
- **.toFixed()**: fixed to a specific number of decimals
- **.toPrecision()**: fixed to a specific number of length
- **Number()**: convert a variable to number

## String Method
- **.length**
- **.search()**: find sub string
- **.slice(a, b)**: slice string
- **.replace(a, b)**: string replace, regex also can
- **.split(separator)**: split a string in array
