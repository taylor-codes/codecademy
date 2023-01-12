# Aggregates in Pandas

- An aggregate statistic is a way of creating a single number that describes a group of numbers
- Common aggregate statistics include mean, median, and standard deviation

## Calculating Column Statistics

- The genreal syntax for the follwoing calcutions is:

```python
df.column_name.command()
```

### Example of calculating median

```python
print(customers.age)
>> [23, 25, 31, 35, 35, 46, 62]
print(customers.age.median())
>> 35
```

### Example of calculating number of unique values

```python
print(shipments.state)
>> ['CA', 'CA', 'CA', 'CA', 'NY', 'NY', 'NJ', 'NJ', 'NJ', 'NJ', 'NJ', 'NJ', 'NJ']
print(shipments.state.nunique())
>> 3
```

### Example of calculating unique values

```python
print(inventory.color)
>> ['blue', 'blue', 'blue', 'blue', 'blue', 'green', 'green', 'orange', 'orange', 'orange']
print(inventory.color.unique())
>> ['blue', 'green', 'orange']
```
### Common commands

| Command | Description                       |
|---------|-----------------------------------|
| mean    | Average of all values in column   |
| std     | Standard deviation                |
| median  | Median                            |
| max     | Maximum value in column           |
| min     | Minimum value in column           |
| count   | Number of values in column        |
| nunique | Number of unique values in column |
| unique  | List of unique values in column   |


## Calculating Aggregate Functions

- General syntax for calculating aggregates:

```python
df.groupby('column1').column2.measurement()
```

- Suppose we have a grade book with columns `student`, `assignment_name`, and `grade` and we want to find the average grade per student:

```python
grades = df.groupby('student').grade.mean()
```

### Cleaning up / renaming columns

- The `groupby` function creates a new Series, not a DataFrame
- Use `reset_index()` to clean the data, transforming the Series to a DataFrame
    - This also make the indicies their own column
- General syntax:

```python
df.groupby('column1').column2.measurement().reset_index()
```

```python
teas_counts = teas.groupby('category').id.count().reset_index()

# Resulting column for counts of tea will be 'id'. Change it to 'counts'
teas_counts = teas_counts.rename(columns={"id": "counts"})
```

### More complex with Lambda functions

- When the operations get more complex, we can use `.apply()` and lambda functions

```python
# np.percentile can calculate any percentile over an array of values
high_earners = df.groupby('category').wage
    .apply(lambda x: np.percentile(x, 75))
    .reset_index()
```

### Groupby more than one column

- Calculate the average sales for each store on each day of the week across multiple months

```python
df.groupby(['Location', 'Day of Week'])['Total Sales'].mean().reset_index()
```

## Pivot Tables

- In Pandas, the command for pivot is:

```python
df.pivot(columns='ColumnToPivot',
         index='ColumnToBeRows',
         values='ColumnToBeValues')
```

```python
# Real example
shoe_counts_pivot = shoe_counts.pivot(columns='shoe_color', index='shoe_type', values='id').reset_index()
```

## Review

1. Let’s examine some more data from ShoeFly.com. This time, we’ll be looking at data about user visits to the website (the same dataset that you saw in the introduction to this lesson).

    The data is a DataFrame called user_visits. Use print and head() to examine the first few rows of the DataFrame.

```python
import pandas as pd

user_visits = pd.read_csv('page_visits.csv')

print(user_visits.head(10))
```

2. The column utm_source contains information about how users got to ShoeFly’s homepage. For instance, if utm_source = Facebook, then the user came to ShoeFly by clicking on an ad on Facebook.com.

    Use a groupby statement to calculate how many visits came from each of the different sources. Save your answer to the variable click_source.

```python
lick_source = user_visits.groupby('utm_source').id.count().reset_index()
```

3. Our Marketing department thinks that the traffic to our site has been changing over the past few months. Use groupby to calculate the number of visits to our site from each utm_source for each month. Save your answer to the variable click_source_by_month

```python
click_source_by_month = user_visits.groupby(['utm_source', 'month']).id.count().reset_index()
```

4. The head of Marketing is complaining that this table is hard to read. Use pivot to create a pivot table where the rows are utm_source and the columns are month. Save your results to the variable click_source_by_month_pivot.

```python
click_source_by_month_pivot = click_source_by_month.pivot(columns='month', index='utm_source', values='id').reset_index()
```