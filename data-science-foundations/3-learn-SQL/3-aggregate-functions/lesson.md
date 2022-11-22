# Aggregate Functions

- Aggregates - calculations performed on multiple rows of a table
- Some aggregates are: COUNT(), SUM(), MAX()/MIN(), AVG(), ROUND()

## Count

- `COUNT()` - Takes the name of a column as an argument and counts the number of non-empty values in that column

```sql
SELECT COUNT(*) 
FROM fake_apps
WHERE price = 0;
```

## Sum

- `SUM()` - Takes the name of a column as an argument and returns the sum of all the values in that column

```sql
SELECT SUM(downloads)
FROM fake_apps;
```

## Max / Min

- These functions return the highest and lowest values in a column, respectively

## Average

- `AVG()` - used to calculate the average value of a particular column

## Round

- `ROUND()` - rounds the values in the column to the number of decimal places specified by the integer
- Takes 2 arguments: column name, integer 

```sql
SELECT ROUND(AVG(price), 2)
FROM fake_apps;
```

## Group By

- `GROUP BY` - an SQL clause used in collaboration with the `SELECT` statement to arrange identical data into groups
- The `GROUP BY` statement comes after any `WHERE` statements, but before `ORDER BY` or `LIMIT`

```sql
SELECT category, SUM(downloads)
FROM fake_apps
GROUP BY category;
```

- SQL lets us use column reference(s) in GROUP BY clauses 

```sql
SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY category, price;

-- Translates to:

SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY 1, 2; -- This is a column reference
```

## Having

- In addition to being able to group data using `GROUP BY`, SQL also allows you to filter which groups to include and which to exclude

```sql
SELECT year,
   genre,
   COUNT(name)
FROM movies
GROUP BY 1, 2
HAVING COUNT(name) > 10;
```

- When we want to limit the results of a query based on values of the individual rows, use `WHERE`
- When we want to limit the results of a query based on an aggregate property, use `HAVING`
- `HAVING` statement always comes after `GROUP BY`, but before `ORDER BY `and `LIMIT`