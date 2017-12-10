## Optimization advises
### order
1. SQL
2. Index
3. Redis
4. 读写分离 (seperate read and write)
5. seperate columns
6. seperate row

---
- index, and using it correctly
- only select needed columns
- limit to needed numbers
- avoid apply function in where clause
- avoid using subquery
- avoid wildcard characters at the begining of `like` operator
    - instead of `like '%foo%'`, using `like '%foo%'`
    - The use of the % wildcard at the beginning of the LIKE pattern will prevent the database from using a suitable index if such exists.
    Since the system doesn’t know what the beginning of the name column is, it will have to perform a full table scan anyway. 
- vertical seperate: when there are many columns like 50 columns, need to seperate the table to two table with same id 
and save often used column to one table, not often used columns to another
- horizontal seperation (not a good way): turn 100 rows table to two 50 rows table
    - e.g: using hash, id%2 if = 0, put into table A; if = 1, put it to table B
    - when select, check id%2 if = 0, serarch from table A, else from table B
    
