# What is EDA?

- EDA = Exploratory Data Analysis
- EDA is about getting curious about your data
- EDA is the important first step towards analysis and model building

## Goals of EDA

- Main goals of EDA are:
    - Uncover the data structure and determine how it's coded
    - Inspect and get to know the data by summarizing and visualizing it
    - Detect outliers, missing data, and other anomalies and decide how/whether to address these issues
    - Find new avenues for analysis and further research
    - Prepare for model building or analysis:
        - Check assumptions
        - Select features
        - Choose an appropriate method

## EDA Techniques

- The EDA process generally involves strategies that fall into the following three categories:
    - Data inspection
    - Numerical summarization
    - Data visualization 

### Data inspection

- Data inspection is an important first step of any analysis. This can help illuminate potential issues or avenues for further investigation.
- `print(data.head())`

### Numerical summarization

- Numerical summaries are a great way to condense the information we have into a more reasonable amount of space
- For numerical data, this allows us to get a sense of scale, spread, and central tendency
- For categorical data, this gives us information about the number of categories and frequencies of each
- `data.describe(include = 'all')`

### Data visualization

- Visual summaries can provide even more context and detail in a small amount of space
- Histograms, scatterplots, etc

## EDA as a cyclical process

> Though EDA is commonly performed at the start of a project — before any analysis or model building — you may find yourself revisiting EDA again and again. It is quite common for more questions and problems to emerge during an analysis (or even EDA itself!). EDA is also a great tool for tuning a predictive model to improve its’ accuracy. It is therefore useful to think of EDA as a cycle rather than a linear process in a data science workflow.

