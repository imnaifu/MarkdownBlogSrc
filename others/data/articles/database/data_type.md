# Number
|Type|Length in Byte|Others|
|:----|:--------------:|--|
|TINYINT|1||
|SMALLINT|2||
|MEDIUMINT|3||
|INT|4||
|BIGINT|8||
|FLOAT(M,D)|4|display length(M), Number of decimals(D), default (10,2)|
|DOUBLE(M,D)|8|display length(M), Number of decimals(D), default (16,4)|
|DECIMAL(M,D)|8|display length(M), Number of decimals(D), default (10,0)|

#### ZEROFILL
`INT(3) ZEROFILL`  7 is displayed as 007.

#### Difference between float and decimal
- float/double represent approximate numeric data value
- decimal store exact numeric data value
- when doing comparision, float/double may be wrong

# Time
|Type|Display Format|Others|
|:----|:--------------:|--|
|YEAR(4)/YEAR(2)|YYYY/YY||
|TIME|HH:MM:SS||
|DATE|YYYY-MM-DD HH:MM:SS|can be seen as string|
|DATETIME|YYYY-MM-DD|can be seen as string|
|TIMEMSTAMP|YYYY-MM-DD HH:MM:SS|real timestamp, will change follow the timezone|

# String
|Type|Format|Others|
|:----|:--------------:|--|
|CHAR(M)|||
|VARCHAR(M)|||
|TEXT|large string|stored data are case-sensitive|
|BLOB|large binary data|stored data not case-sensitive|
|ENUM|one value||
|SET|many value seperated with ','||


