# Manipulation

## Relational Databases

- Relational Database - database that Organizes information into one or more tables
- Table - a collection of data organized into rows and columns
- Column - Set of data values of a particular type
- Row - Single record in a table
- Data stored in a relational database is there a certain type
    - Common types include: _INTEGER, TEXT, DATE (YYYY-MM-DD), REAL (decimal value)_

## Statements

- Statement - Text that a database recognizes as a valid command
- Statements always in a semicolon, `;`

```sql
-- Example of a statement
CREATE TABLE table_name (
   column_1 data_type, 
   column_2 data_type, 
   column_3 data_type
);
```
- Breaking down the above statement:
    - `CREATE TABLE` is a clause
        - Causes perform specific tasks in SQL; can alo be referred to as commands
    - `table_name` == name of the table
    - `(column_1 data_type, column_2 data_type, column_3 data_type)` is a parameter
        - A parameter is a list of columns, data types, or values that are passed to a clause as an argument

- `CREATE` statements allow us to create a new table in the database
- `INSERT` statement inserts a new row into a table

```sql
-- INSERT example
INSERT INTO celebs (id, name, age) 
VALUES (2, 'Beyonce Knowles', 33); 
```

- `SELECT` statements are used to fetch data from a database
- The `ALTER TABLE` statement adds a new column to a table

```sql
-- ALTER TABLE example
ALTER TABLE celebs 
ADD COLUMN twitter_handle TEXT;
```

- The `UPDATE` statement edits a row in a table

```sql
-- UPDATE example
UPDATE celebs 
SET twitter_handle = '@taylorswift13' 
WHERE id = 4; 
```

- The `DELETE FROM` statement deletes one or more rows from a table

```sql
-- DELETE FROM example
DELETE FROM celebs 
WHERE twitter_handle IS NULL;
```

## Constraints

- Constraints that add information about how a column can be used are invoked after specifying the data type for a column
- Can be used to tell the DB to reject inserted data that does not adhere to a certain restriction 

```sql
CREATE TABLE celebs (
   id INTEGER PRIMARY KEY, 
   name TEXT UNIQUE,
   date_of_birth TEXT NOT NULL,
   date_of_death TEXT DEFAULT 'Not Applicable'
);
```

- `PRIMARY KEY` columns can be used to uniquely identify the row
- `UNIQUE` columns have a different value for every row
- `NOT NULL` columns must have a value
- `DEFAULT` columns take an additional argument that will be the assumed value for an inserted row if the new row does not specify a value for that column