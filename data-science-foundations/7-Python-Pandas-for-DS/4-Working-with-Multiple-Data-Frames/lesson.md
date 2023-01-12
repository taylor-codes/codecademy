# Working with Multiple Data Frames

## Inner Merge

- The `.merge()` method looks for columns that are common between two DataFrames and then looks for rows where those column’s values are the same. It then combines the matching rows into a single row in a new table.

```python
import pandas as pd

# Two DataFranmes that we want to merge:
sales = pd.read_csv('sales.csv')
targets = pd.read_csv('targets.csv')

# Merge 'em (this returns a new DF):
sales_vs_targets = pd.merge(sales, targets)

# Extra - do some manipulation:
crushing_it = sales_vs_targets[sales_vs_targets.revenue > sales_vs_targets.target]
```

- Each DataFrame has it's own `.merge()` method
    - Generally used when joining more than 3 DFs together because we can "chain" the commands

```python
import pandas as pd

# Three DataFranmes that we want to merge:
sales = pd.read_csv('sales.csv')
targets = pd.read_csv('targets.csv')
men_women = pd.read_csv('men_women_sales.csv') 

# Merge 'em:
all_data = sales.merge(targets).merge(men_women)

# Extra - do some manipulation:
results = all_data[(all_data.revenue > all_data.target) & (all_data.women > all_data.men)]
```

## Merge on Specific Columns

- In some cases, the columns on which the merge is performed won't always have different names. Example:
    - Generally, the `products` and `customers` DataFrames would not have the columns `product_id` or `customer_id`. Instead, they would both be called `id` and it would be implied that the id was the `product_id` for the `products` table and `customer_id` for the `customers` table. 
- One way to address this is by using `.rename()`

```python
import pandas as pd

# Two DataFranmes that we want to merge:
orders = pd.read_csv('orders.csv')      # Columns: id, product_id, customer_id, quantity, timestamp
products = pd.read_csv('products.csv')  # Columns: id, description, price

# Merge 'em (and rename)
orders_products = pd.merge(orders, products.rename(columns={'id': 'product_id'}))
```

- There is another option if we don't want to use `.rename()`
- We can use the keywords `left_on` and `right_on` to specify which columns we want to perform the merge on
    - Left is specified first, right second
- Use the `suffixes` keyword to change the column names

```python
import pandas as pd

# Two DataFranmes that we want to merge:
orders = pd.read_csv('orders.csv')
products = pd.read_csv('products.csv')

# Merge 'em:
orders_products = pd.merge(orders, products, left_on='product_id', right_on='id', suffixes=['_orders', '_products'])
```

## Mismatched Merges

- When there is a mismatch for a merge of two dataframes, the rows that have no match will simply not be included in the result dataframe.
- By default the `pd.merge()` method performs an inner merge, which means that it will only return a row if there is a matching value in both dataframes.

## Outer Merge

- To fix the issues with mismathed inner joins, we can use an outer join
- An outer join will include all rows from both tables, even if they don't match
    - Any missing values are filled in with `None` or `nan`

```python
import pandas as pd

# Two DataFranmes that we want to merge:
store_a = pd.read_csv('store_a.csv')
store_b = pd.read_csv('store_b.csv')

# Perform an Outer Merge:
store_a_b_outer = pd.merge(store_a, store_b, how='outer')
```

## Left and Right Merge

### Left Merge
- A Left Merge includes all rows from the first (left) table, but only rows from the second (right) table that match the first table
```python
import pandas as pd

store_a = pd.read_csv('store_a.csv')
store_b = pd.read_csv('store_b.csv')

store_a_b_left = pd.merge(store_a, store_b, how='left')
```

### Right Merge
- A Right Merge includes all rows from the second (right) table, but only rows from the first (left) table that match the second table

```python
import pandas as pd

store_a = pd.read_csv('store_a.csv')
store_b = pd.read_csv('store_b.csv')

store_b_a_left = pd.merge(store_a, store_b, how='right')
```

## Concatenate DataFrames

- When we need to reconstruct a single DataFrame from multiple smaller DataFrames, we can use the method `pd.concat([df1, df2, df3, ...])`

```python
import pandas as pd

# Two DFs to concatenate:
bakery = pd.read_csv('bakery.csv')
ice_cream = pd.read_csv('ice_cream.csv')

# Concatenate 'em
menu = pd.concat([bakery, ice_cream])
```
---
# Review

**Step 1:**

Cool T-Shirts Inc. just created a website for ordering their products. They want you to analyze two datasets for them:
- visits contains information on all visits to their landing page
- checkouts contains all users who began to checkout on their website

We want to know the amount of time from a user’s initial visit to the website to when they start to check out.

Use merge to combine visits and checkouts and save it to the variable v_to_c.

**Step 2:**

In order to calculate the time between visiting and checking out, define a column of v_to_c called time that calculates the difference between checkout_time and visit_time for every row.

**Step 3:**

Use .mean() to calculate the average time to checkout and print that value to the terminal.

**Solution:**

```python
import pandas as pd

visits = pd.read_csv('visits.csv', parse_dates=[1])
checkouts = pd.read_csv('checkouts.csv', parse_dates=[1])

# Step 1
v_to_c = visits.merge(checkouts)
# print(v_to_c)

# Step 2
v_to_c['time'] = v_to_c.checkout_time - v_to_c.visit_time
# print(v_to_c)

# Step 3
print(v_to_c['time'].mean())
```
