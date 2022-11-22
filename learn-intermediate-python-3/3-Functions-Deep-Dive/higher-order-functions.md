# Intro to Higher-order Functions

## First-class Objects
- Can be stored as vars example: `uppercase = str.upper()`
- Can be passed as arguments to functions
- Can be returned by a function
- Can be stored in data structures _(e.g., list, dictionaries, etc.)_
- All functions in Python are first-class objects

---

## Higher-order Functions
Do one or both:
- Accept a function as an argument
- Have a return value that is a function 

### Functions as Arguments
```py
def total_bill(func, value):
    total = func(value)
    return total
```

### Functions as Return Values
```py
def make_box_volume_function(height):
    # defines and returns a function that takes two numeric arguments,        
    # length &  width, and returns the volume given the input height
    def volume(length, width):
        return length*width*height
 
    return volume
 
box_volume_height15 = make_box_volume_function(15)
 
print(box_volume_height15(3,2))

# Would output:
90
```