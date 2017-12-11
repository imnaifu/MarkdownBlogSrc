## Procedure
#### Defination
A stored procedure is a segment of declarative SQL statements stored inside the database catalog.
A stored procedure can be invoked by triggers, other stored procedures(recursive), and applications such as Java, Python, PHP, etc.
- basically, it's a set of sql statement that can be called at once is sql or PHP
- can grant procedure acces to user without the access to the table, easy to control
- hard to debug and maintain and use
- not atomic, but can write transaction inside procedure
- create using `create procedure procedure_name` (need to change the delimiter, `delimiter $$`)
- invoke using `call procedure_name`
- [reference](http://www.mysqltutorial.org/introduction-to-sql-stored-procedures.aspx)

## Function
- `SHOW CREATE FUNCTION func_name` 
- `create function func_name (para_1 type_1, para_2 type_2)` (also need to change the delimiter first)
