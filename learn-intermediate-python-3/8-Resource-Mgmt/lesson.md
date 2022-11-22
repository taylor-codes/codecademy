# Introduction to Resource Management

Computer resources need to managed just as resources in our daily lives. Some of the resources that can be managed on a computer are:

1. Memory
1. Storage
1. Power

These resources are limited. Computer resources can be managed with Context Managers. A Context Manager is an object that takes care of the assigning and releasing of resources (files, DB connections, etc.).

## The `with` Statement

- The `with` statement is the most common and pythonic way of invoking context managers in python
- Serves as a context manager where files are automatically closed after script completion

```py
with open("file_name.txt", "w") as file:
   file.write("How you gonna win when you ain't right within?")
```

## Class Based Context Managers

- One of two appraoches to creating context managers
- Requires that the `__enter__()` and `__exit__()` methods are implemented
    - `__enter__()` - allows for the setup of context managers
        - Begins the runtime context (the period of time in which a scriot runs)
    - `__exit__()` - ensures the breakdown of the context manager
    
```py
class ContextManager:
  def __init__(self):
    print('Initializing class...')
 
  def __enter__(self):
    print('Entering context...')
 
  def __exit__(self, *exc):
    print('Exiting context...')

with ContextManager() as cm:
  print('Code inside with statement')

# Initializing class...
# Entering context...
# Code inside with statement
# Exiting context...
```

### Working with Files

```py
class WorkWithFile:
  def __init__(self, file, mode):
    self.file = file
    self.mode = mode
 
  def __enter__(self):
    self.opened_file = open(self.file, self.mode)
    return self.opened_file
 
  def __exit__(self, *exc):
    self.opened_file.close()

with WorkWithFile("file.txt", "r") as file:
  print(file.read())
```

## Handling Exceptions

- The `__exit__` method has three required arguments (in addition to self):
  1. Exception type (`AttributeError` or `NameError`)
  1. Exeception value
  1. Traceback

```py
 def __exit__(self, exc_type, exc_val, traceback):
   print(exc_type)
   print(exc_val)
   print(traceback)
   self.opened_file.close()
```
- An exception that occurs in a context manager can be handled in two ways:
  1. If you want to throw an error:
      - Return `False` after the `.close()` method
      - do nothing
  1. If you want to suppress the error:
      - Return `True` after the `.close()` method
  
```py
def __exit__(self, exc_type, exc_val, traceback):
  print(exc_type, exc_val, traceback)
  print("The exception has been handled")
  self.file.close()
  return True

with OpenFile("file.txt", "r") as file:
  # .see is not a real method
  print(file.see())
 
with OpenFile("file.txt", "r") as file:
  print(file.read())

# <class 'AttributeError'> '_io.TextIOWrapper' object has no attribute 'see' <traceback object at 0x7fedf822d180>
# The exception has been handled
# None None None
```

## Introduction to Contextlib

- The `contextlib` module allows for the creation of a context manager with the use of a generator function and the contextlib decorator - `@contextmanager`

```py
from contextlib import contextmanager
 
@contextmanager
def open_file_contextlib(file, mode):
  opened_file = open(file, mode)
  try:
    yield opened_file
  finally:
    opened_file.close()

with open_file_contextlib('file.txt', 'w') as opened_file:
  opened_file.write('We just made a context manager using contexlib')
```

### Contextlib Error Handling

- There are two main ways to deal with errors:
  1. To throw an error and stop execution of the program:
      - Do nothing by excluding an `except` block
  1. To catch errors and continue the execution of the program:
      - Handle the excepetion via and `except` block

```py
from contextlib import contextmanager
 
@contextmanager
def open_file_contextlib(file, mode):
  open_file = open(file, mode)
 
try:
   yield open_file
 
 # Exception Handling
 except Exception as exception:
   print('We hit an error: ' + str(exception))
 
 finally:
   open_file.close()
 
with open_file_contextlib('file.txt', 'w') as opened_file:
 opened_file.sign('We just made a context manager using contexlib')

# We hit an error: '_io.TextIOWrapper' object has no attribute 'sign'
```

## Nested Context Managers

```py
with open('teacher.txt', 'w') as teacher, open('student.txt', 'r') as student:
 teacher.write(student.read())
```