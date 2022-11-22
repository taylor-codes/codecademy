# Generators

- Generator - _allows for the creation of iterators without having to implement `__iter__()` and `__next__()` methods_
- Two types: _Generator functions, Generator Expressions_

## yield vs. return

- Instead of using `return`, generator functions use `yield`
- Any code after a `yield` expression executes on the next iteration

```py
# Example
def course_generator():
  yield 'Computer Science'
  yield 'Art'
  yield 'Business'

courses = course_generator()
for course in courses:
    print(course)

# Output
Computer Science
Art
Business
```

## next() and StopIteration

- `next()` - _causes a generator to resume execution until the next `yield` is found_
- `StopIteration` - _raised when no additional `yield` is found_
```py
# Example
def prize_generator():
  student_info = {
    "Joan Stark": 355,
    "Billy Mars": 45,
    "Tori Rivers": 18,
    "Kyle Newman": 25
  }

  # Notice that we are not printing info here.
  # The function will suspend execution!  
  for student in student_info:
    name = student
    id = student_info[name]
    if id % 3 == 0 and id % 5 == 0:
      yield student + " gets prize C"
    elif id % 3 == 0:
      yield student + " gets prize A"
    elif id % 5 == 0:
      yield student + " gets prize B"

prizes = prize_generator()
print(next(prizes))
print(next(prizes))
print(next(prizes))
print(next(prizes))

# Output
Joan Stark gets prize B
Billy Mars gets prize C
Tori Rivers gets prize A
Kyle Newman gets prize B

# Adding additonal print(next(prizes))
print(next(prizes))

# Output
StopIteration
```

## Generator Expressions

- Allow for a clean, single-line definition and creation of an iterator
- Kinda similar to list comprehensions

```py
# Example
a_generator = (i*i for i in range(4))

print(a_generator)
# <generator object <genexpr> at 0x7f82e0e4d4c0>

for i in a_generator:
    print(i)
# 0
# 1
# 4
# 9
```

## Generator Methods: send()

- `.send()` - _method that allows you to send a value to a generator using the `yield` expression_

```py
# Example

def count_generator():
  while True:
    n = yield
    print(n)
 
my_generator = count_generator()
next(my_generator) # 1st Iteration Output: 
next(my_generator) # 2nd Iteration Output: None
my_generator.send(3) # 3rd Iteration Output: 3
next(my_generator) # 4th Iteration Output: None
```
```py
# Example 
# The .send() method can control the value of the generator when a second variable is introduced

def generator():
  count = 0
  while True:
    n = yield count
    if n is not None:
      count = n
    count += 1
 
my_generator = generator()
print(next(my_generator)) # Output: 0
print(next(my_generator)) # Output: 1
print(my_generator.send(3)) # Output: 4
print(next(my_generator)) # Output: 5
```

## Generator Methods: throw()

- `.throw()` - _provides the ability to thgrow an exception inside the generator from the caller point_

```py 
# Example
def student_counter():
  for i in range(1,5001):
    yield i

student_generator = student_counter()
for student_id in student_generator:
  # Write your code below:
  if student_id > 3:
    student_generator.throw(ValueError, "Invalid student ID")
  print(student_id)

# Output
"""
1
2
3
Traceback (most recent call last):
  File "script.py", line 9, in <module>
    student_generator.throw(ValueError, "Invalid student ID")
  File "script.py", line 3, in student_counter
    yield i
ValueError: Invalid student ID
"""
```

## Generator Methods: close()

- `.close()` - _used to terminate a generator early_

```py
# Example

def generator():
  i = 0
  while True:
    yield i
    i += 1
 
my_generator = generator()
next(my_generator)
next(my_generator)
my_generator.close()
next(my_generator) # raises StopGenerator exception
```

## Connecting Generators

- `yield from` - _statement that is used to connect generators_

```py
# Example

def cs_courses():
    yield 'Computer Science'
    yield 'Artificial Intelligence'
 
def art_courses():
    yield 'Intro to Art'
    yield 'Selecting Mediums'
 
 
def all_courses():
    yield from cs_courses()
    yield from art_courses()
 
combined_generator = all_courses()

print(next(combined_generator)) # Computer Science
print(next(combined_generator)) # Artificial Intelligence
print(next(combined_generator)) # Intro to Art
print(next(combined_generator)) # Selecting Mediums
```

## Generator Pipelines

- Generator pipelines - _allow you to use multiple generators to perform a series of operations all within one expression_

```py
# Example
def number_generator():
  i = 0
  while True:
    yield i
    i += 1
 
def even_number_generator(numbers):
  for n in numbers:
    if n % 2 == 0:
      yield n
 
even_numbers = even_number_generator(number_generator())
 
for e in even_numbers:
  print(e)
  if e == 100:
    break
```

