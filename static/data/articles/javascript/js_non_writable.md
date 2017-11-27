## 不可拓展对象(non-extend object)
- Object.preventExtentions(obj)
- after call this, not able to add new property/method to it
- but still able to modify/delete existing property/method
- use Object.isExtensible() to see if is extensible

## 密封对象(sealed object)
- Object.seal(obj)
- 不可拓展，同时也不能修改/删除已有属性
- isSealed() to check if is sealed

## 冻结的对象(frozen object)
- Object.freeze(obj)
- Object.isFrozen(obj)

