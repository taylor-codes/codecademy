# Exceptions

## Intro to Exceptions

- Exceptions are _runtime errors_ becauce they happen during program execution, only when the offending code is reached
- **Traceback** - summary that includes the exception type, a message, and the series of function calls preceding the exception, along with file names and line numbers

```
# Traceback Example
# --------------------------------------------------
Traceback (most recent call last):
  File "script.py", line 1, in <module>
    print(1/0)
ZeroDivisionError: division by zero
```

---

## Built-in Exceptions

**Built-in Exceptions -** exceptions that are built into the Python language

Exceptions are objects; Inherited from the `Exception` class; Derived from the `BaseException` class

---

## Raising Exceptions

Exceptions can be raised at any point in the program by using the `raise` keyword

```py
raise NameError
# or 
raise NameError('Custom Message')
```

You can also use a generic Exception with a specific message:

```py
def open_register(employee_status):
  if employee_status == 'Authorized':
    print('Successfully opened cash register')
  else:
    raise Exception('Employee does not have access!')
```

---

## Try / Except

**Exception Handling -** programs continuing to execute after encountering an exception
- accomplished using `try`/`except` clauses

```py
colors = {
    'red': '#FF0000',
    'blue': '#0000FF',
    'yellow': '#FFFF00',
}
 
for color in ('red', 'green', 'yellow'):
  try:
    print('The hex value of ' + color + ' is ' + colors[color])
  except:
    print('An exception occurred! Color does not exist.')
  print('Loop continues...')

# Output...
# The hex value of red is #FF0000
# Loop continues...
# An exception occurred! Color does not exist.
# Loop continues...
# The hex value of yellow is #FFFF00
# Loop continues...
```

---

## Catching Specific Exceptions

```py
try:
    print(undefined_var)
except NameError as errorObject:
    print('We hit a NameError')
    print(errorObject)
```

---

## Handling Multiple Exceptions

```py
try:
    # Some code to try!
except (NameError, ZeroDivisionError) as e:
    print('We hit an Exception!')
    print(e)
```
```py
try:
    # Some code to try!
except NameError:
    print('We hit a NameError Exception!')
except KeyError:
    print('We hit a TypeError Exception!')
except Exception:
    print('We hit an exception that is not a NameError or TypeError!')
```

---

## The else Clause

```py
try:
  check_password()
except ValueError:
  print('Wrong Password! Try again!')
else:
  login_user()
  # 20 other lines of imaginary code
```

---

## The finally Clause

```py
try:
  check_password()
except ValueError:
  print('Wrong Password! Try again!')
else:
  login_user()
  # 20 other lines of imaginary code
finally:
  load_footer()
```

---

## User Defined Exceptions 

```py
# Syntax
class CustomError(Exception):
    pass
```
```py
# Example
class LocationTooFarError(Exception):
   pass
 
def schedule_delivery(distance_from_store):
    if distance_from_store > 10:
        raise LocationTooFarError
    else:
        print('Scheduling the delivery...')
```

---

## Customizing User-defined Exceptions

```py
# Example
class LocationTooFarError(Exception):
   def __init__(self, distance):
       self.distance = distance
 
   def __str__(self):
        return 'Location is not within 10 km: ' + str(self.distance)
```


