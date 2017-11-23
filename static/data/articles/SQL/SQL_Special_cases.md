if apply unique key to 2 columns
when insering record, if one of the column value is NULL.
the unique key law will be break

this will be error   

| year | month |
|------|-------|
| 2017 | 05    |
| 2017 | 05    |

this will not have error   

| year | month| 
|------|-------|
| 2017 | null |
| 2017 | null |
