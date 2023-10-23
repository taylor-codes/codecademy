# Space Complexity

Asymptotic Notation can also be used to determine the space (memory) that a program/algorithm will need. Space complexity denotes space growth in relation to the input size. Space complexity usually refers to any additional space that will be needed, and doesn’t count the space of the input. So a function could have 10 arrays passed into it, but if all it does inside is print '`Hello World!`', then it still takes O(1) space.

Example:

```python
def add_numbers(a, b):
  return a + b
```
- This function has a space complexity of 0(1) - the amount of space it needs will not change based on input
- This function also has a constant runtime of 0(1)
  - Most functions do NOT have matching space and time complexities

Another Example:

```python
def simple_loop(input_array):
  for i in input_array:
    print(i)
```
- This function has a 0(1) space complexity since no new variables are being created and therefore no more space must be allocated

A recursive function that is passed the same array or object in each call doesn’t add to the space complexity if the array or object is passed by reference (which it is in Python).

