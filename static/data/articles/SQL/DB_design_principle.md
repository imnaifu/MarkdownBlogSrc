## Database design principles

### basic rules
1. no redundant
    - same data should not save twice in two different places
2. must have unique primary key, cannot be null
3. for composite key, none of them should be null
4. should not using item1, item2, item3 as column, should create another table called 'item' and apply one to many relation to it.
5. non-key column should dependent on primary key and only primary key
6. follow
    - first normal form (1NF)
    - second normal form (2NF)
    - third normal form(3NF)

### design pattern
1. **one to one** 
    - basically not much usage, if too may column, can seperate to two tables
    - can use the original table to save the essential value, and the seperate table to save optional value
    - becasue it's optional, so may save some memory
    
2. **one to many**
    - one teacher table, one class table
    - one teacher may teach many class
    - so class table should have an teacher_id 
    
3. **many to many** 
    - must use an relation table to save the relations
    - one teacher may teache many students, and one students may be teached be many teacher
    - so must have an teacher_student relation table which save the teacher__id and students__id
    - so you know that this student and teacher are connected
[reference](https://www.ntu.edu.sg/home/ehchua/programming/sql/Relational_Database_Design.html)
