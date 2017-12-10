## Difference between InnoDB and MyISAM
1. InnoDB support 'transaction' (atomic process)
2. InnoDB support `foreign key` 
3. if don't need the feature provided by InnoDb, chose MyISAM
4. because MyISAM is a little faster than InnoDB

|Engine|Transaction|Lock|Avoid|
|--|--|--|--|
|MyISAM|not support|table-level|many insert|
|Innodb|support|row-level|none|


### DML, DDL
- DDL is **Data Definition Language** : it is used to define data structures.
    - For example, with SQL, it would be instructions such as `create table`, `alter table`, ...
    
- DML is **Data Manipulation Language** : it is used to manipulate data itself.
    - For example, with SQL, it would be instructions such as `insert`, `update`, `delete`, ...
