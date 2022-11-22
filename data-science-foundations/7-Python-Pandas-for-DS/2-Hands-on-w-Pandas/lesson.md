# Introduction to Pandas and NumPy

- Pandas is a popular lib for work with data
- NumPy is an open0source Python lib that facilitate efficient numerical operation on large quantities of data

## Create a DataFrame

- A DataFrame is an obj that store data as rows and cols
- Ea. col has a name and ea. row has an index (an integer)

### Create a DataFrame by passing in a dictionary

```python
import pandas as pd

df1 = pd.DataFrame({
  'Product ID': [1, 2, 3, 4],
  'Product Name': ['t-shirt', 't-shirt', 'skirt', 'skirt'],
  'Color': ['blue', 'green', 'red', 'black']
})
```

### Create a DataFrame by passing in a list of lists

```python
import pandas as pd

df2 = pd.DataFrame([
  [1, 'San Diego', 100],
  [2, 'Los Angeles', 120],
  [3, 'San Francisco', 90],
  [4, 'Sacramento', 115]
], columns = ['Store ID', 'Location', 'Number of Employees'])
```

## Loading and Saving CSVs

- Data is loaded from a CSV into a DF by using `.read_csv()`
- Data is saved to a CSV by using `.to_csv()`

```python
import pandas as pd

df = pd.read_csv('sample.csv')
```

## Inspect a DataFrame

- The `.head()` method will display the first 5 rows (default) of a DataFrame
- The `.info()` method will give some stats on the columns

```python
import pandas as pd

df = pd.read_csv('imdb.csv')
print(df.head())
print(df.info())
```

## Selecting a Column

- There are two ways to select a column 
  1. Select it as if you were selecting a value from a dictionary using a key: `df['age']` where age is the column of a DataFrame named `df`
  1. If the name of the column follows naming standars for a variable, you can select the column by using the `df.age` notation
- When a single column is selected, we called this a 'Series'

## Selecting Multiple Columns

- To select 2+ columns of a DataFrame, use a list of columns names

```python
clinic_north_south = df[['clinic_north', 'clinic_south']]
```

## Selecting a Row

- To select a row, use the row number (0-indexed) with this notation: `df.iloc[1]` (this selected the 2nd row)
- When we select a single row, the result is a Series

### Selecting Multiple Rows

- There are many ways to select multiple row (like list slicing)

```pyhton
# Select rows 3-6
df.iloc[3:7]

# Select rows 0-3
df.iloc[:4]

# Select 3rd to last row and all following
df.iloc[-3:]
```

## Select Rows with Logic

- We can select a subset of a DataFrame by using logical statements: `df[df.ColumnName == desired_value]`

```python
january = df[df.month == 'January']
```

- Multiple logical statements can be combined too!
- conditions must be in parens

```python
march_april = df[(df.month == 'March') | (df.month == 'April')]
```

- There's also the `.isin()` method which check a list of values

```python
january_february_march = df[df.month.isin(['January', 'February', 'March'])]
```

## Setting indices

- When selecting a subset of a DataFrame using logic, things can get messy (the indicies (or row numbers))
- Use the `.reset_index` method to clean things up
- This will give us a new DataFrame with a new set of indicies, but also creates a new column with the old indicies
  - Use the `drop=True` keyword to drop the old indicies columns
- You can also use the `inplace=True` to replace the existing DataFrame

```python
df2 = df.loc[[1, 3, 5]]
df3 = df2.reset_index(inplace=True, drop=True)
```
