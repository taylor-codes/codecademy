# Object Oriented Programming

## Introduction

**Programming Paradigm -** a way to classify different programming languages and the unique features that they offer
- Object Oriented Programming is one of the most popular programming paradigms

**Object Oriented Programming (OOP):**
- Gives the ability to create programs around classes and objects
- Core pillars or OOP: _inheritance, polymorphism, abstraction, encapsulation_

---

## Inheritance

Parent-child Entity Relationships
```py
# Syntax
# --------------------------------------------------
class ParentClass:
  #class methods/properties...
 
class ChildClass(ParentClass):
  #class methods/properties...

# Example
# --------------------------------------------------
class Animal:               # Parent Class
  def eat(self): 
    print("Nom Nom Nom...eating food!")

class Dog(Animal):          # Child Class
  def bark(self):
    print('Bark!')
 
class Cat(Animal):          # Child Class
  def meow(self):
    print('Meow!')

fluffy = Dog()
zoomie = Cat()
 
fluffy.eat() # Nom Nom Nom...eating food!
zoomie.eat() # Nom Nom Nom...eating food!
```

### Overriding Methods

When implementing inheritance, a child class may want to change the behavior of a method from its parent class.

**Overridden Method -** [in a subclass] has the same definition as the parent class but contains different behavior

```py
# Example
# --------------------------------------------------
class Animal:
  def __init__(self, name):
    self.name = name
 
  def make_noise(self):
    print("{} says, Grrrr".format(self.name))
 
pet1 = Animal("Rex")
pet1.make_noise() # Rex says, Grrrr

class Cat(Animal):
 
  def make_noise(self):         # Overriding Method
    print("{} says, Meow!".format(self.name))
 
pet2 = Cat("Maisy")
pet2.make_noise() # Maisy says, Meow!
```

**super()**

When overriding methods we sometimes want to still access the behavior of the parent method.

```py
# Example
# --------------------------------------------------
class Animal:
  def __init__(self, name, sound="Grrrr"):
    self.name = name
    self.sound = sound
 
  def make_noise(self):
    print("{} says, {}".format(self.name, self.sound))
 
class Cat(Animal):
  def __init__(self, name):
    super().__init__(name, "Meow!") 
 
pet_cat = Cat("Rachel")
pet_cat.make_noise() # Rachel says, Meow!
```

### Multiple Inheritance

This is when a subclass inherits from more than one superclass. One form of multiple inheritance is when there are multiple levels of inheritance. This means a class inherits members from its superclass and its super-superclass.

```py
# Example
# --------------------------------------------------
class Animal:
  def __init__(self, name):
    self.name = name
 
  def say_hi(self):
    print("{} says, Hi!".format(self.name))
 
class Cat(Animal):
  pass
 
class Angry_Cat(Cat):
  pass
 
my_pet = Angry_Cat("Mr. Cranky")
my_pet.say_hi() # Mr. Cranky says, Hi!
```

Another form of multiple inhertance involves a subclass that inherits directly from two classes and can use the attributes and methods of both.

```py
# Example
# --------------------------------------------------
class Animal:
  def __init__(self, name):
    self.name = name
 
class Dog(Animal):
  def action(self):
    print("{} wags tail. Awwww".format(self.name))
 
class Wolf(Animal):
  def action(self):
    print("{} bites. OUCH!".format(self.name))
 
class Hybrid(Dog, Wolf):
  def action(self):
    super().action()
    Wolf.action(self)
 
my_pet = Hybrid("Fluffy")
my_pet.action() # Fluffy wags tail. Awwww
                # Fluffy bites. OUCH!
```

---

## Polymorphism

**Polymorphism -** the ability to apply an identical operation onto different types of objects

In the below example, the identical method name, `make_noise()`, with different behaviors is a form of polymorphism. With the classes instantiated and added to a list, we are able to iterate through the list and call `.make_noise()`. This is done without needing to know what type of class `.make_noise()` belongs to.

```py
# Example
# --------------------------------------------------
class Animal:
  def __init__(self, name):
    self.name = name
 
  def make_noise(self):
    print("{} says, Grrrr".format(self.name))
 
class Cat(Animal):
 
  def make_noise(self):
    print("{} says, Meow!".format(self.name))
 
class Robot:
 
  def make_noise(self):
    print("beep.boop...BEEEEP!!!")

an_animal = Animal("Bear")
my_pet = Cat("Maisy")
my_vacuum = Robot()
objects = [an_animal, my_pet, my_vacuum]
for o in objects:
  o.make_noise()
 
# OUTPUT
# "Bear says, Grrrr"
# "Maisy says, Meow!"
# "beep.boop...BEEEEP!!!"
```

### Dunder Methods

- Examples: _`__init__()`, `__repr()__`_
- Derived from the Double UNDERscores that surround the name

Defining a class’s dunder methods is a way to perform _operator overloading_.

The below example has the class Animal with a dunder method, `.__add__()`. This defines the `+` operator behavior when used on objects of this class type.

```py
# Example
# --------------------------------------------------
class Animal:
  def __init__(self, name):
    self.name = name
 
  def __repr__(self):
    return self.name
 
  def __add__(self, another_animal):
    return Animal(self.name + another_animal.name)
 
a1 = Animal("Horse")
a2 = Animal("Penguin")
a3 = a1 + a2
print(a1) # Prints "Horse"
print(a2) # Prints "Penguin"
print(a3) # Prints "HorsePenguin"
```

---

## Abstraction

**Abstraction -** helps with the design of code by defining necessary behaviors to be implemented within a class structure
- alleviates issues like classes starting to share functionality, or losing sight of a class's inheritance structure

**For the below example:**
- `Cat` and `Dog` classes inherit from `Animal` class
- `Animal` class inherits from `ABC` _(Abstract Base Class)_ class
  - First step to making `Animal` abstract
  - Second step is to add the imported decorator, `@abstractmethod` 

```py
# Example
# --------------------------------------------------
from abc import ABC, abstractmethod
 
class Animal(ABC):
  def __init__(self, name):
    self.name = name
 
  @abstractmethod
  def make_noise(self):
    pass
 
class Cat(Animal):
  def make_noise(self):
    print("{} says, Meow!".format(self.name))
 
class Dog(Animal):
  def make_noise(self):
    print("{} says, Woof!".format(self.name))
 
kitty = Cat("Maisy")
doggy = Dog("Amber")
kitty.make_noise() # "Maisy says, Meow!"
doggy.make_noise() # "Amber says, Woof!"
```
The abstraction process defines what an Animal is but does not allow the creation of one.
```py
an_animal = Animal("Scruffy")
 
# TypeError: Can't instantiate abstract class Animal with abstract method make_noise
```

---

## Encapsulation

**Encapsulation -** the process of making objects and data hidden inside the object they relate to
- Accomplished with access modifiers (_Public, Protected, Private)_
  - Public: can be accessed from anywhere
  - Protected: can only be accessed from code within the same module
    - Defined by using a single leading underscore (`self._x`)
  - Private: can only be accessed from code within the class
    - Defined by using a double leading underscore (`self.__x`)
    - This is called _name mangling_
    - Members have their names modified in the background to `obj._Classname__x`

### Getters, Setters and Deleters

- One way to implement encapsulation where the state of class attributes can be handled within the class

```py
# Example
# --------------------------------------------------
class Animal:
  def __init__(self, name):
    self._name = name
    self._age = None
 
  def get_age(self):
    return self._age
 
  def set_age(self, new_age):
    if isinstance(new_age, int):
      self._age = new_age
    else:
      raise TypeError
 
  def delete_age(self):
    print("_age Deleted")
    del self._age


a = Animal("Rufus")
print(a.get_age()) # None
 
a.set_age(10)
print(a.get_age()) # 10
 
a.set_age("Ten") # Raises a TypeError
 
a.delete_age() # "_age Deleted"
print(a.get_age()) # Raises a AttributeError
```

---

## The @property Decorator

The most pythonic way to define getters, setters, and deleters is by using the @property decorator.

```py
# Example
# # --------------------------------------------------
class Box:
 def __init__(self, weight):
   self.__weight = weight
 
 @property
 def weight(self):
   """Docstring for the 'weight' property"""
   return self.__weight
 
 
 @weight.setter
 def weight(self, weight):
   if weight >= 0:
     self.__weight = weight
 
 @weight.deleter
 def weight(self):
   del self.__weight
```
Breakdown:
- First, we have renamed all of our methods to simply be `weight()`
- Then we denoted our getter with a `@property`. This marks the property to be used as a prefix for decorating the setter and deleter methods
- Lastly, we use `@weight.setter` and `@weight.deleter` to define our setter and deleter methods, respectively

```py
box = Box(10)
 
box.weight = 5
 
del box.weight
```
