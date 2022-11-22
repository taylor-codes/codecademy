# Modifying DataFrames

## Adding a Column

- One way that we can add a new column is by giving a list of the same length as the existing DataFrame

```python
df['Quantity'] = [100, 150, 50, 35]
```

- We can also add a new column that is the same for all rows in the DataFrame (applies the same value to ea row in the column)

```python
df['In Stock?'] = True
```

- Columns can be added by performing a function on the existing columns

```python
df['Sales Tax'] = df.Price * 0.075
```

## Performing Column Operations

- We can use the `apply` function to apply a function to every value in a particular column

```python
# Overwrite the existing 'Name' columns by applying the function upper to every row in 'Name'
df['Name'] = df.Name.apply(str.upper)
```

## Reviewing Lambda Functions

- A lambda function is a way of defining a function in a single line of code

```python
mylambda = lambda x: (x * 2) + 3
print(mylambda(5))
# > 13

stringlambda = lambda x: x.lower()
print(stringlambda("Oh Hi Mark!"))
# > "oh hi mark!"
```

```python
# Create a lambda function mylambda that returns the first and last letters of a string, assuming the string is at least 2 characters long.

mylambda = lambda x: '{}{}'.format(x[0], x[-1])
print(mylambda('This is a string'))
# > Tg
```

### If Statements

- We can make our lambdas more complex by using a modified form of an if statement

```python
# lambda x: [OUTCOME IF TRUE] if [CONDITIONAL] else [OUTCOME IF FALSE]
myfunction = lambda x: 40 + (x - 40) * 1.50 if x > 40 else x
```

## Applying a Lambda to a Column

```python
# Create a lambda function get_last_name which takes a string with someone’s first and last name (i.e., John Smith), and returns just the last name (i.e., Smith)
get_last_name = lambda x: x.split(' ')[-1]
df['last_name'] = df.name.apply(get_last_name)
```

## Applying a Lambda to a Row

- If we use apply without specifying a single column and add the argument `axis=1`, the input to our lambda function will be an entire row, not a column
- To access particular values of the row, we use the syntax `row.column_name` or `row[‘column_name’]`

```python
# This adds a new column and applies a lambda function for each row of that new column
df['Price with Tax'] = df.apply(lambda row:
     row['Price'] * 1.075
     if row['Is taxed?'] == 'Yes'
     else row['Price'],
     axis=1
)
```
```python
total_earned = lambda row: (row.hourly_wage * 40) + ((row.hourly_wage * 1.5) * (row.hours_worked - 40)) \
	if row.hours_worked > 40 \
  else row.hourly_wage * row.hours_worked
  
df['total_earned'] = df.apply(total_earned, axis = 1)
```

## Renaming Columns

- You can change all of the column names at once by setting the `.columns` property to a different list

```python
df.columns = ['First Name', 'Age']
```

- You also can rename individual columns by using the `.rename` method
- `{'old_column_name1': 'new_column_name1', 'old_column_name2': 'new_column_name2'}`

```python
df.rename(columns={
    'name': 'First Name',
    'age': 'Age'},
    inplace=True)
```

## Review

1. Once more, you’ll be the data analyst for ShoeFly.com, a fictional online shoe store. More messy order data has been loaded into the variable `orders`. Examine the first 5 rows of the data using print and `.head()`.
```python
print(orders.head(5))
```

2. Many of our customers want to buy vegan shoes (shoes made from materials that do not come from animals). Add a new column called `shoe_source`, which is `vegan` if the materials is not `leather` and `animal` otherwise.

```python
shoe_source = lambda row: 'vegan' if row.shoe_material != 'leather' else 'animal'
orders['shoe_source'] = orders.apply(shoe_source, axis=1)
```

3. Our marketing department wants to send out an email to each customer. Using the columns `last_name` and `gender` create a column called `salutation` which contains `Dear Mr. <last_name>` for men and `Dear Ms. <last_name>` for women.

```python
salutation = lambda row: 'Dear Ms. {}'.format(row.last_name) if row.gender == 'female' else 'Dear Mr. {}'.format(row.last_name)
orders['salutation'] = orders.apply(salutation, axis=1)
print(orders.head(5))
```