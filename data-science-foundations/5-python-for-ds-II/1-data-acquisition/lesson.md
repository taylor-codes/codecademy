# Introduction

- Data acquisition (or data mining) is the process of gathering data
- Data can be categorized into Primary data and Secondary data:
    - Primary data is data collected by the indiv. or org. who will be doing the analysis
    - Secondary data is data collected by someone else and is typocayll puclished for public use

## Making API requests in Python

```python
import requests

r = requests.get('https://api.census.gov/data/2020/acs/acs5?get=NAME,B08303_001E,B08303_013E&for=county:*&in=state:36')

r_text = r.text
print(r_text)

r_json = r.json()
print(r_json)
```

## Converting JSON to CSV
```python
import requests
import csv


r = requests.get('https://api.census.gov/data/2020/acs/acs5?get=NAME,B08303_001E,B08303_013E&for=county:*&in=state:36')

r_json = r.json()

with open('commute_data.csv', mode='w', newline='') as file:
  writer = csv.writer(file)
  writer.writerows(r.json())
```

## Exploring Data with pandas
```python
import pandas

# Create a pandas DataFrame
commute_df = pandas.read_csv('commute_data.csv')

# Rename the columns of the DataFrame
commute_df.columns = ['name', 'total_commuters', 'something_else', 'state', 'county']

# Print the first few rows of the DataFrame
print(commute_df.head())
```

## Simulating binomial distribution

- Binomial events always have 2 possible outcomes, which we refer to as success and failure
- We can use the `random.binomial()` method from the `numpy` library in Python to simulate this
- To use the `random.binomial()` method, we have to tell it how many trials we want to simulate (`n`) and the probability of ‘success’ in a single trial (`p`), and how many experiments to run

```python
import numpy

print(numpy.random.binomial(n = 100, p = 0.8, size = 500))
```