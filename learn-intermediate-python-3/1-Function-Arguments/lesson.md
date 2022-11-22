# Function Arguments

## Function Arguments: A Recap

3 common types of functions in Python: _positional, keyword, and default arguments_

**Positional Arguments:**
```py
def print_name(first_name, last_name): 
  print(first_name, last_name)
 
print_name('Jiho', 'Baggins')
```

**Keyword Arguments:**
```py
def print_name(first_name, last_name): 
  print(first_name, last_name)
 
print_name(last_name='Baggins', first_name='Jiho')
```

**Default Arguments:**
```py
def print_name(first_name='Jiho', last_name='Baggins'): 
  print(first_name, last_name)
 
print_name()
```

## Variable number of arguments: *args

**Unapcking Operator: (`*`)** _allows you to give functions a variable number of args_

**Syntax:**
```py
def my_function(*args):
  print(args)
```

## Variable number of arguments: `**kwargs`

**Syntax:**
```py
def arbitrary_keyword_args(**kwargs):
  print(kwargs)
```

## Using a Combo of Args

**Order of args which Python reads:** _standard postional args, `*args`, Standard keyword args, `**kwargs`_
```py
def print_animals(animal1, animal2, *args, animal4, **kwargs):
  print(animal1, animal2)
  print(args)
  print(animal4)
  print(kwargs)
```

## Function Call Unpacking & Beyond

We can also use unpacking operators in function calls:

```py
my_num_list = [3, 6, 9]
 
def sum(num1, num2, num3):
  print(num1 + num2 + num3)
 
sum(*my_num_list)

# Outputs 18
```

## Python Gotcha: Mutable Arguments

**Gotcha:** _counterintuitive feature of a programming language that often leads to mistakes in programs_

### Mutable Objects

**Mutable Object:** _various containers in Python tjhat are intended to be changed_

- Mutable object ex: _list, sets, dictionaries_
- Immutable object ex: _integers, foats, tuples, strings_

When a function is called (with a default mutable arguemnt), the default values we provide for parameters are only created once, and used for each subsequent call of the function.

#### Example
```py
def createStudent(name, age, grades=[]):
    return {
        'name': name,
        'age': age,
        'grades': grades
    }
```
```py
def addGrade(student, grade):
    student['grades'].append(grade)
    # To help visualize the grades we have added a print statement
    print(student['grades'])
```

```py
addGrade(chrisley, 90)
addGrade(dallas, 100)

# Expected  
[90]
[100]

# Returned
[90]
[90, 100]
```

#### Solution
Use `None` as a special value to indicate that we did not recieve anything

```py
def createStudent(name, age, grades=None):
  if grades is None:
    grades = []
  return {
    'name': name,
    'age': age,
    'grades': grades
  }
 
def addGrade(student, grade):
    student['grades'].append(grade)
    # To help visualize the grades we have added a print statement
    print(student['grades'])
```
```py
chrisley = createStudent('Chrisley', 15)
dallas = createStudent('Dallas', 16)
 
addGrade(chrisley, 90)
addGrade(dallas, 100)

# Returned
[90]
[100]
```

