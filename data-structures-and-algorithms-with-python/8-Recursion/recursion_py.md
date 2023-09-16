# Recursion with Python

## Building Our Own Call Stack

- Replicate what's happening in the call stack with an **iterative function** that sums every number from 1 to the given input

```python
sum_to_one(4)
# 10
sum_to_one(11)
# 66
```
- Call stack is abstracted away from the user in Python
- The call stack stores each function until those functions resolve in a LIFO order

```python
call_stack = []
recursive_func()
call_stack = [recursive_func_1]

# within the body of recursive_func, another call to recursive_func()
call_stack = [recursive_func_1, recursive_func_2]
# the body of the second call to recursive_func resolves...
call_stack = [recursive_func_1]
# the body of the original call to recursive_func resolves...
call_stack = [] 
```

- Execution contexts are a mapping between variable names and their values within the function during execution
- Use a list for the call stack and a dictionary for each execution context

### Final result
```python
def sum_to_one(n):
    result = 1
    call_stack = []

    while n != 1:
        execution_context = {"n_value": n}
        call_stack.append(execution_context)
        n -= 1
        print(call_stack)
    print("BASE CASE REACHED")

    while call_stack:
        return_value = call_stack[-1]
        call_stack.pop()
        print(call_stack)
        print("Adding {0} to {1}...".format(return_value["n_value"], result))
        result += return_value["n_value"]

    return result, call_stack


sum_to_one(4)
```

## Sum to One with Recursion 

- We want a function that takes an integer as an input and returns the sum of all numbers from the input down to 1

```python
sum_to_one(4)
# 4 + 3 + 2 + 1
# 10
```
- If we were to write that iteratively...

```python
def sum_to_one(n):
    result = 0
    for num in range(n, 0, -1):
        result += num
    return result


sum_to_one(4)
# num is set to 4, 3, 2, and 1
# 10
```
- We can think of each recursive call as an interation of the loop above. We want a recursive function that will produce the following function calls:

```python
recursive_sum_to_one(4)
recursive_sum_to_one(3)
recursive_sum_to_one(2)
recursive_sum_to_one(1)
```

- Every recursive function needs a base case when the function does not recurse, and a recursive step, when the recursing function moves towards the base case
  - Base case: the integer given as input is 1
  - Recursive step: the recursive function call is passed an argument 01 less than the last function call

### Final result
```python
def sum_to_one(n):
    if n == 1:
        return n
    else:
        print("Recursing with input: {0}".format(n))
        return n + sum_to_one(n - 1)


print(sum_to_one(7))
# Recursing with input: 7
# Recursing with input: 6
# Recursing with input: 5
# Recursing with input: 4
# Recursing with input: 3
# Recursing with input: 2
# 28
```

## Recursion and Big O

- We’d like a function `factorial` that, given a positive integer as input, returns the product of every integer from 1 up to the input. If the input is less than 2, return 1

```python
factorial(4)
# 4 * 3 * 2 * 1
# 24
```
- We'll also need to evaluate the Big O runtime of the function
  - Are we recursing once more for each new element in the list? That’s linear or `O(N)`
    - See the example of `sum_to_one()` below when we add 01 to the input
```python
sum_to_one(4)
# recursive call to sum_to_one(3)
# recursive call to sum_to_one(2)
# recursive call to sum_to_one(1)

# Let's increase the input...

sum_to_one(5)
# recursive call to sum_to_one(4)
# recursive call to sum_to_one(3)
# recursive call to sum_to_one(2)
# recursive call to sum_to_one(1)
```

### Final result
```python
def factorial(n):
    if n < 2:
        return 1
    else:
        return n * factorial(n - 1)


print(factorial(12))
# 479001600
print(factorial(100000))
# RecursionError: maximum recursion depth exceeded
```

## Stack Over-Whoa!

- We ended up with a stack overflow (`RecursionError`) at the end of the last exercise - recursion has costs
  - Each recursion call spends time on the call stack
  - Even when there is room for any reasonable input, recursive functions tend to be at least a little less efficient than comparable iterative solutions because of the call stack
- Recursion forces us to distill a task into its smallest piece, the base case, and the smallest step to get there, the recursive step
- Compare two solutions to a single problem: producing a power set
  - A power set is a list of all subsets of the values in a list

```python
power_set(['a', 'b', 'c'])
# [
#   ['a', 'b', 'c'], 
#   ['a', 'b'], 
#   ['a', 'c'], 
#   ['a'], 
#   ['b', 'c'], 
#   ['b'], 
#   ['c'], 
#   []
# ]
```

- Producing subsets requires a runtime of at least `O(2^N)`

### Final result (with recursion)

```python
def power_set(my_list):
    if len(my_list) == 0:
        return [[]]
    power_set_without_first = power_set(my_list[1:])
    with_first = [[my_list[0]] + rest for rest in power_set_without_first]
    return with_first + power_set_without_first


universities = ["MIT", "UCLA", "Stanford", "NYU"]
power_set_of_universities = power_set(universities)

for set in power_set_of_universities:
    print(set)

# ['MIT', 'UCLA', 'Stanford', 'NYU']
# ['MIT', 'UCLA', 'Stanford']
# ['MIT', 'UCLA', 'NYU']
# ['MIT', 'UCLA']
# ['MIT', 'Stanford', 'NYU']
# ['MIT', 'Stanford']
# ['MIT', 'NYU']
# ['MIT']
# ['UCLA', 'Stanford', 'NYU']
# ['UCLA', 'Stanford']
# ['UCLA', 'NYU']
# ['UCLA']
# ['Stanford', 'NYU']
# ['Stanford']
# ['NYU']
# []
```

## No Nested Lists Anymore, I Want Them to Turn Flat

- Use recursion to solve another problem involving lists, `flatten()`
- We want to write a function that removes nested lists within a list but keeps the values contained

```python
nested_planets = [
    "mercury",
    "venus",
    ["earth"],
    "mars",
    [["jupiter", "saturn"]],
    "uranus",
    ["neptune", "pluto"],
]

flatten(nested_planets)
# ['mercury',
#  'venus',
#  'earth',
#  'mars',
#  'jupiter',
#  'saturn',
#  'uranus',
#  'neptune',
#  'pluto']

```

- There are two scenarios we need to evaluate:
  - The element in the list is a list itself
    - More to do there
  - The element is not a list
    - All good

### Final result

```python
def flatten(my_list):
    result = []
    for i in my_list:
        if isinstance(i, list):
            print("List found!")
            flat_list = flatten(i)
            result += flat_list
        else:
            result.append(i)
    return result


planets = [
    "mercury",
    "venus",
    ["earth"],
    "mars",
    [["jupiter", "saturn"]],
    "uranus",
    ["neptune", "pluto"],
]

print(flatten(planets))

# List found!
# List found!
# List found!
# List found!
# ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
```

## Fibonacci? Fibonaccu!

- Explore a problem which pushes us to use multiple recursive calls within the function definition
- Fibonacci numbers are integers which follow a specific sequence: the next Fibonacci number is the sum of the previous two Fibonacci numbers
- Base case: 
  - The Fibonacci Sequence starts with `0` and `1` respectively
  - If our function receives an input in that range, we don’t need to do any work
  - If we receive an input greater than 1:
    - This recursive step requires two previous Fibonacci numbers to calculate the current Fibonacci number; we need two recursive calls in our recursive step

```python
fibonacci(3) == fibonacci(1) + fibonacci(2) 
```

### Final result

```python
def fibonacci(n):
    if n == 1:
        return n
    if n == 0:
        return n
    return fibonacci(n - 2) + fibonacci(n - 1)


print(fibonacci(10))

# 55
```

- The Big O runtime of fibonacci() is exponential (`0(2^N)`)
  - Each recursive step will branch into two recursive calls, which take approximately `N` recursive steps to conclude. Thus, `2` calls to the `N` degree or `O(2^N)`

## Recursive Data Structures

- Data structures can also be recursive
- Trees are a recursive data structure because their definition is self-referential - a tree is a data structure which contains a piece of data and references to other trees
- We’re going to write a recursive function that builds a special type of tree: a *binary search tree*
- Binary search trees:
  - Reference two children at most per tree node
  - The “left” child of the tree must contain a value lesser than its parent
  - The “right” child of the tree must contain a value greater than its parent

```python
bst_tree_node = {"data": 42}
bst_tree_node["left_child"] = {"data": 36}
bst_tree_node["right_child"] = {"data": 73}

bst_tree_node["data"] > bst_tree_node["left_child"]["data"]
# True
bst_tree_node["data"] < bst_tree_node["right_child"]["data"]
# True
```

- We can also assume our function will receive a sorted list of values as input
- Base case:
  - Return `"No Child"` to represent the lack of node Recursive step: The input list must be divided into two halves
  - Find the middle index of the list
  - Store the value located at the middle index
  - Make a tree node with a `"data"` key set to the value
  - Assign tree node’s `"left child"` to a recursive call using the left half of the list
  - Assign tree node’s `"right child"` to a recursive call using the right half of the list
  - Return the tree node

### Final result

```python
def build_bst(my_list):
    if len(my_list) == 0:
        return "No Child"

    middle_idx = len(my_list) // 2
    middle_value = my_list[middle_idx]

    print("Middle index: {0}".format(middle_idx))
    print("Middle value: {0}".format(middle_value))

    tree_node = {"data": middle_value}
    tree_node["left_child"] = build_bst(my_list[:middle_idx])
    tree_node["right_child"] = build_bst(my_list[middle_idx + 1 :])

    return tree_node


sorted_list = [12, 13, 14, 15, 16]
binary_search_tree = build_bst(sorted_list)
print(binary_search_tree)

# Middle index: 2
# Middle value: 14
# Middle index: 1
# Middle value: 13
# Middle index: 0
# Middle value: 12
# Middle index: 1
# Middle value: 16
# Middle index: 0
# Middle value: 15
# {'data': 14, 'left_child': {'data': 13, 'left_child': {'data': 12, 'left_child': 'No Child', 'right_child': 'No Child'}, 'right_child': 'No Child'}, 'right_child': {'data': 16, 'left_child': {'data': 15, 'left_child': 'No Child', 'right_child': 'No Child'}, 'right_child': 'No Child'}}
```