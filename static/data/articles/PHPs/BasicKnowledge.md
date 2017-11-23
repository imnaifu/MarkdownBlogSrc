#### 1. Difference between single quote and double quote?
- singgle quote only aloow "\\" and "\'", the others are only seen as a string
- double quote can put variables and other escape character

#### 2. Difference between GET and POST method when submit form?
- if using GET, query string in the action attribute will not send.
- using GET when you want to get info from server
- using POST when you want to write info to the server
- IE has restriction on the length of URL, so can not put too many value using GET
- GET can only send ASCII code

#### 3.Get last value from array
- using end function which can return the last value 
  ~~~
  $arr = array('a','b','c');
  print_r(end($arr));
  ~~~
