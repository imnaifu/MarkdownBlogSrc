## Error(基类，其他类型均继承此类)
- evalError: when using eval()
- rangeError: when 超出范围
- referenceError: 找不到对象
- syntaxError: 语法错误的字符串传入eval()
- typeError: 意外类型 e.g var a = new 10
- URIError: when using encodeURI, decodeURI if uri format not correct
- can be used in try/catch (error instanceof TypeError)
- try{}catch(){}
- throw
	- throw '123'
	- throw new Error('e')
	- customizedError.prototype = new Error() //inherit
- 判断语句时，尽量使用typeof, instanceof
	- typeof a == 'function'
	- a instanceof Array
- url最长2048





