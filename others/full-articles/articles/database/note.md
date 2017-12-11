### SQL note
1. **ON DUPLICATE KEY UPDATE**
    * do the update when there is a duplicate clash on unique key or primary key
    
2. **SHOW VARIABLE**
    * show the value of MySQL system config variables
    
3. **mysql dump**
    * used to backup table or database, or to transfer the table or database to other server
    * `mysqldump -u username -p database_name table_name > path/to/file.sql`

4. **mysql import**
    * used to import data from a backup file
    * `mysql -u username -p database_name < /path/to/file.sql`
    * can just one table or whole database, depends on the file.
