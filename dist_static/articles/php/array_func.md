# List of array functions

- **count/sizeof**: returns the number of element of array
- **in_array(value, array)**: search if a value is in an array, return TRUE or FALSE

---
- **array_combine(keys, values)**: create an array by using the elements from one 'keys' array and one 'values' array (must equal number of elements)
- **array_merge(array1, [array2], [array3]...)**: merge all array into one, if same key remain last one

---
- **array_keys**: return all the keys of an array in an array
- **array_values**: return all the values of an array in an array

---
- **array_push(array, [value1], [value2]...)**: insert one or more element to the end of array
- **array_pop**: delete and return the last value of array or NULL
- **array_shift**: Removes the first element from an array, and returns the value of the removed element
- **array_unshift**: adds an element to the beginning of an array 

---
- **array_flip**: exchange the keys and values
- **array_reverse**: reverse the order of elements

---
- **array_rand(array, number)**: returns a random key from an array, or it returns an array of random keys 
- **shuffle**: randomizes the order of the element in an array

---
- **sort/rsort**: sort array in ascending/descending
- **asort/arsort**: sort associative array in ascending/descending by value
- **arsort/krsort**: sort associative array in ascending/descending by key

---
- **array_fill(start, number, value)**: fills an array with values
- **range(start, end, step)**: create an array containing a range of elements

---
- **array_search(value, array, [strict])**: returns the key of the value or FALSE
- **array_slice(array, start, [length], [preserve])**: return a selected part of array
- **array_unique**: remove duplicate value from an array
- **array_walk(array, myfunction, [parameter]...)**: runs each array element in a user-defined function
- **reset**: set the internal pointer of an array to its first element 
- **list(var1, var2...)**: assign values in an array to a list of variables

--- 
