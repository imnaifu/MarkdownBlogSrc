## curl

- allows you to connect and communicate to many different types of servers with many different types of protocols.
libcurl currently supports the http, https, ftp, gopher, telnet, dict, file, and ldap protocols.
libcurl also supports HTTPS certificates, HTTP POST, HTTP PUT, FTP uploading (this can also be done with PHP's ftp extension),
HTTP form based upload, proxies, cookies, and user+password authentication.

- basic usage
    1. Initialize a curl session
    2. Set various options for the session
    3. Execute and fetch/send data from/to server
    4. Close the session
```php
<?php
//step1
$cSession = curl_init(); 
//step2
curl_setopt($cSession,CURLOPT_URL,"http://www.google.com/search?q=curl");
curl_setopt($cSession,CURLOPT_RETURNTRANSFER,true);
curl_setopt($cSession,CURLOPT_HEADER, false); 
//step3
$result=curl_exec($cSession);
//step4
curl_close($cSession);
//step5
echo $result;
?>
```
- useful in 爬虫
