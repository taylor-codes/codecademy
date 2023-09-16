# Recursion vs. Iteration

## Rules

- Anything we write iteratively, we can also write recursively, and vice versa
- Recreate the algorithm using the alternative strategy

## `factorial()`

`factorial()` with recursion:
```python
# runtime: Linear - O(N)
def factorial(n):
    if n < 0:
        return ValueError("Inputs 0 or greater only")
    if n <= 1:
        return 1
    return n * factorial(n - 1)


factorial(3)
# 6
factorial(4)
# 24
factorial(0)
# 1
factorial(-1)
# ValueError "Input must be 0 or greater"
```

`factorial()` with iteration:
```python
def factorial(n):
    if n < 0:
        return ValueError("Inputs 0 or greater only")
    if n <= 1:
        return 1
    result = 1
    while n != 0:
        result = result * n
        n -= 1
    return result
```


## `fibonacci()`

`fibonacci()` with recursion:
```python
# runtime: Exponential - O(2^N)
def fibonacci(n):
  if n < 0:
    ValueError("Input 0 or greater only!")
  if n <= 1:
    return n
  return fibonacci(n - 1) + fibonacci(n - 2)

fibonacci(3)
# 2
fibonacci(7)
# 13
fibonacci(0)
# 0
```

`fibonacci()` with iteration:
```python
def fibonacci(n):
    fib_nums = [0, 1]
    if n <= len(fib_nums) - 1:
        return fib_nums[n]
    else:
        while n > len(fib_nums) - 1:
            fib_nums.append(fib_nums[-2] + fib_nums[-1])
    return fib_nums[n]
```

## `sum_digits()`

`sum_digits()` with iteration:
```python
# Linear - O(N), where "N" is the number of digits in the number
def sum_digits(n):
    if n < 0:
        ValueError("Inputs 0 or greater only!")
    result = 0
    while n is not 0:
        result += n % 10
        n = n // 10
    return result + n


sum_digits(12)
# 1 + 2
# 3
sum_digits(552)
# 5 + 5 + 2
# 12
sum_digits(123456789)
# 1 + 2 + 3 + 4...
# 45
```

`sum_digits()` with recursion:
```python
def sum_digits(n):
    if n <= 9:
        return n
    last_digit = n % 10
    return last_digit + sum_digits(n // 10)
```

## It Was Min to Be

`find_min()` with iteration:
```python
# Linear - O(N), where "N" is the number of elements in the list
def find_min(my_list):
    min = None
    for element in my_list:
        if not min or (element < min):
            min = element
    return min


find_min([42, 17, 2, -1, 67])
# -1
find_mind([])
# None
find_min([13, 72, 19, 5, 86])
# 5
```

`find_min()` with recursion:
```python
def find_min(my_list, min=None):
    if not my_list:
        return min
    if not min or my_list[0] < min:
        min = my_list[0]
    return find_min(my_list[1:], min)
```

## Taco Cat

`is_palindrome()` with iteration:
```python
def is_palindrome(my_string):
    while len(my_string) > 1:
        if my_string[0] != my_string[-1]:
            return False
        my_string = my_string[1:-1]
    return True
```

`is_palindrome()` with recursion:
```python
def is_palindrome(str):
    if len(str) < 2:
        return True
    if str[0] != str[-1]:
        return False
    return is_palindrome(str[1:-1])
```

## Multiplication? Schmultiplication!

`multiplication()` with iteration:
```python
def multiplication(num_1, num_2):
    result = 0
    for count in range(0, num_2):
        result += num_1
    return result

```

`multiplication()` with recursion:
```python
def multiplication(num_a, num_b):
    if num_a == 0 or num_b == 0:
        return 0
    return num_a + multiplication(num_a, num_b - 1)
```