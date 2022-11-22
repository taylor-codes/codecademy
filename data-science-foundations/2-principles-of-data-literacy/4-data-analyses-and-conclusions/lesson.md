# Data Analyses and Conclusions

- The point of data analysis is to discover useful information, inform conclusions, and support decision-making
- Data analysis lets us evaluate the presence, strength, and direction of relationships between different variables in our data
- Five types of data analysis:
    1. Descriptive analysis
    1. Exploratory analysis
    1. Inferential analysis
    1. Casual analysis
    1. Predictive analysis

## Descriptive Analysis

- Descriptive analysis lets us _describe_, _summarize_, and _visualize_ data so that patterns can emerge
- Usually the first step in our analysis process
- Include measures of central tendency _(e.g., mean, median, mode)_ and spread _(e.g., range, quartiles, variance, standard deviation, distribution)_, which are referred to as _descriptives_

## Exploratory Analysis
- With exploratory analysis, we look for relationships between variables in our dataset
- Next step in the analysis process after descriptive analytics
- Exploratory analyses cannot tell us why something happened: _correlation is not the same as causation_

### Exploratory Analysis: Clustering

- Clustering algorithms, are useful tools for exploratory analysis
- These _unsupervised machine learning techniques_ “learn” patterns from untagged data help us see relationships between many variables at once
- Principal Component Analysis (PCA) - Compressing variables into principal components that can be plotted against each other

## Inferential Analysis

- Inferential analysis lets us test a hypothesis on a sample of a population and then extend our conclusions to the whole population
- Rules:
    - Sample size must be big enough compared to the total population size (10% is a good rule-of-thumb)
    - Our sample must be randomly selected and representative of the total population
    - We can only test one hypothesis at a time

## Casual Analysis

- Causal analysis helps identify is one thing has caused another 
- Causal analysis generally relies on carefully designed experiments, but we can sometimes also do causal analysis with observational data
- Experiments that support causal analysis:
    - Only change one variable at a time
    - Carefully control all other variables
    - Are repeated multiple times with the same results
![](https://static-assets.codecademy.com/Courses/data-literacy/analyses/ex6-science-flow.svg)

### Causal Analysis with Observational Data

- Sometimes we need to establish causation when actual experimentation is impossible, when we don't want to repeat it for reason such as, the necessary experiments may be too difficult, too expensive, or unethical
- Causal inference with observational data requires:
    - Advanced techniques to identify a causal effect
    - Meeting very strict conditions
    - Appropriate statistical tests

## Predictive Analysis

- Predictive analysis uses data and _supervised machine learning techniques_ to identify the likelihood of future outcomes
- Popular supervised machine learning techniques include regression models, support vector machines, and deep learning convolutional neural networks
- _An algorithm can only be as good as the data used to train the algorithm_

### Predictive Analysis: Challenges

- Recommendation algorithms are excellent for making low-risk predictions
    - In contrast, predicting whether someone will commit a crime is a high-risk prediction, especially if the prediction is used for criminal sentencing or deciding to grant someone parole

---

# Bias in Data Analysis

>Bias is everywhere in data. The key to combatting bias is knowing what to look out for.

- Biases are systematic errors in thinking influenced by cultural and personal experiences
- Biases distort our perception and cause us to make incorrect decisions
- Automation bias stems from the idea that computers or machines are more trustworthy than humans because they are more objective
    - Following GPS instructions against your better judgment is one example of automation bias

## Bias in data collection

- Data collection is subject to selection bias _(also called sample bias)_
    - Selection bias occurs when study subjects (i.e., the sample) are not representative of the population
- Historical bias — systematic influence based on historic social and cultural beliefs

## Bias in building and optimizing algorithms

- Algorithmic bias arises when an algorithm produces systematic and repeatable errors that lead to unfair outcomes, such as privileging one group over another
    - Can be initiated through selection bias and then reinforced and perpetuated by other bias types
- Testing an algorithm with a non-representative dataset leads to evaluation bias

## Bias in interpreting results and drawing conclusions

- Bias also influences the final stages of data analysis: interpreting results and drawing conclusions
- Confirmation bias is our tendency to seek out information that supports our views
    - Influences data analysis when we consciously or unconsciously interpret results in a way that supports our original hypothesis
    - To limit confirmation bias, clearly state hypotheses and goals before starting an analysis, and then honestly evaluate how they influenced our interpretation and reporting of results
- Overgeneralization bias is inappropriately extending observations made with one dataset to other datasets, leading to overinterpreting results and unjustified extrapolation
    - To limit overgeneralization bias, be thoughtful when interpreting data, only extend results beyond the dataset used to generate them when it is justified, and only extend results to the proper population
- Reporting bias is the human tendency to only report or share results that affirm our beliefs or hypotheses, also known as “positive” results
    - To limit reporting bias, report negative results and cite others who do, too