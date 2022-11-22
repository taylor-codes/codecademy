# Multiple Tables

## Combining Tables with SQL

- SQL can combine tables by performing a `JOIN`
- A simple `JOIN` is often called an 'inner join'

```sql
SELECT * FROM orders JOIN subscriptions ON orders.subscription_id = subscriptions.subscription_id WHERE description = 'Fashion Magazine';
```

## Left Joins

- A `LEFT JOIN` keeps all rows from the first table, regarldless of whether there is a matching row in the second table

```sql
SELECT * FROM newspaper LEFT JOIN online ON newspaper.id = online.id;
```

## Primary Key vs Foreign Key

- A Primary Key is a column that uniquley identifies each row of a table
- PK Requirements:
    - none of the values can be null
    - each value must be unique
    - a table cannot have more than one PK column
- When the primary key for one table appears in a different table, it is called a foreign key
- The most common types of joins will be joining a foreign key from one table with the primary key from another table

```sql
-- Inner Join on classes PK and students FK
SELECT * FROM classes JOIN students ON classes.id = students.class_id;
```

## Cross Join

- A `CROSS JOIN` combines all of the rows of one table with all rows of another table

```sql
SELECT * FROM newspaper CROSS JOIN months;
```

## Union

- The `UNION` operator allows you to stack one dataset on top of another
- Strict rules for appending data in SQL:
    - Tables must have the same number of columns
    - Columns must have the same data types in the same order as the first table

```sql
SELECT * FROM newspaper UNION SELECT * FROM online;
```

## With

```sql
WITH previous_query AS (
    SELECT customer_id, COUNT(subscription_id) AS 'subscriptions'
    FROM orders
    GROUP BY customer_id
)
SELECT customers.customer_name, previous_query.subscriptions FROM previous_query JOIN customers ON customers.customer_id = previous_query.customer_id;
```