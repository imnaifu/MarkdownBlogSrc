# Session Cookie 大总结    

![img](http://harttle.com/assets/img/blog/cookie.png)    
[ref_1](http://harttle.com/2015/08/10/cookie-session.html)    
[ref_2](http://blog.csdn.net/colzer/article/details/8686966)   

### Session
- saved in the server side (file/database/memcache or whatever)
- once user login, create one session, and sent the session_id to user (which they can use in the cookie for every request later)
- on that specific session_id, save user info (like ID), which can be used to identify specific user later
- so actually session have to be used with the help of cookie (or a technique called 'URL-rewrite')


### Cookie
- saved in the client side (like browser)
- a pair of key and values like json 
- basiclly have 2 type
  1. session cookie, used to save session_id only
     - saved in memory, dismiss when browser closed   
  2. persistant cookie, used to save other info (which is not sensitive info)   
     - saved in disk, can do multi-process communation 
