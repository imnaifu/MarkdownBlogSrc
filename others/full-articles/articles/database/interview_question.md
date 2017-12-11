### Select second largest number from table
~~~ sql
select max(number) from table where number < (select max(number) from table)
~~~

### Difference SQL & NoSQL
- SQL -> MySQL
- NoSQL -> MongoDB, Redis
- SQL -> Table
- NoSQL -> Key-value Pair


### Mater-Slave && MySQL-Proxy
- Master-Slave (主从分离): To synchronize data   
    - Whatever changed in master database, also changed in slave
- MySQL-Proxy (读写分离): To seperate write and read
    - Every write request goes to the master
    - Every select request goes to multiple slaves
![img](http://heylinux.com/wp-content/uploads/2011/06/mysql-master-salve-proxy.jpg)

