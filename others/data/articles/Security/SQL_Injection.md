## PHP prevent SQL injection
1. use place holder in the query 
    - `select * from table where id=?`
    - all the input are seen as one, so it's safe
2. add_slashes() and add quote in the parameter
    - `select * from table where id='{$_GET['id']}'`
    - quote is needed because 
    if someone want to inject, they must close the single quote,
    but with the add_slashes(), they can not close the single quote
    so it's safe
    
