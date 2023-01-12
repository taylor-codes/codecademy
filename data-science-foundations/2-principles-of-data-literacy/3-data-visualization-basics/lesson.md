# Data Viz Basics

## From Data Type to Chart Type
![](https://static-assets.codecademy.com/Courses/data-literacy/data-viz-basics/1654.svg)

- The first example is a change over time – that can be perfect for a line chart or a bar chart
- The second example compares a part to the whole; A pie chart is the classic (sometimes controversial) choice, but newer options include waffle and donut charts
- The third example is a distribution – the spread of data points in one variable; histogram is the classic choice for visualizing a distribution
- The fourth example is a direct comparison of two variables to help understand a trend. This is perfect for a scatterplot, with or without a trend line

## Univariate Charts

- Univariate charts help us visualize a change in one variable
    - Often that means measuring “how much,” which can either be a count or a distribution

![](https://static-assets.codecademy.com/Courses/data-literacy/data-viz-basics/1655.png)

- A common chart for counts is the bar graph
    - A bar chart translates the difference in count to a difference in bar height
- Histograms measure the distribution, or spread, of a variable
- A more “math-forward” way to visualize distributions is a box plot or violin plot. These visualizations make percentile and quartile values obvious

## Aesthetic Properties I: the Menu
![](https://static-assets.codecademy.com/Courses/data-literacy/data-viz-basics/Screen%20Shot%202022-03-07%20at%209.48.10%20PM.png)

- Aesthetic properties are the attributes we use to communicate data visually:
    - Position, size, shape, color/pattern

## Aesthetic Properties II: Information Redundancy

- Information redundancy - encoding the same information in different visual properties
    - Helps key data points to stand out

---

# Misleading and Confusing Graphs

## Axes

- Break - A break starts the count at a number that’s not zero, or jumps ahead – this can distort the amount of difference between data points by removing context, and make small differences in data seem bigger
![](https://static-assets.codecademy.com/Courses/data-literacy/misleading-confusing-charts/axis_break_1666.svg)

## Scaling

- Scaling - refers to the distances between numbers on an axis
- Linear Scale - where numbers count up by a consistent interval
- Logarithmic Scale - common for showing exponential growth that won’t fit on the page with a linear scale, but it’s almost never a good choice for a general audience
![](https://static-assets.codecademy.com/Courses/data-literacy/misleading-confusing-charts/1667-1.png)

## Color Scales

- Sequential Scales - colors in a sequence; used to show a variable increasing or decreasing in intensity or amount, like income, depth, or percent of population that owns a chinchilla
![](https://static-assets.codecademy.com/Courses/data-literacy/misleading-confusing-charts/Color-scale-1.svg)
- Divergent scales - anchored by colors from opposite sides of the color wheel, a.k.a. complementary colors; used to visualize data where the middle is a baseline, and either side represents a contrasting change
![](https://static-assets.codecademy.com/Courses/data-literacy/misleading-confusing-charts/Color-scale-2.svg)
- Categorical scales - use a variety of colors to differentiate categories without assigning a rank or order to them; for categorical data, like types of vegetables in a supermarket, or different treatments tested in a controlled study, or organizational blocks on a calendar
![](https://static-assets.codecademy.com/Courses/data-literacy/misleading-confusing-charts/Color-scale-3.svg)

## Color Associations

- We tend to view darker colors as “more” and lighter colors as “less"
- Switching up colors that have existing cultural associations can reduce harmful stereotyping
