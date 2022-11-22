# Instantiation
cool_instance = CoolClass()

# -------------------------------------
# Object-Oriented Programming
print(type(cool_instance))
# prints "<class '__main__.CoolClass'>"
# * __main__ means “this current file that we’re running”

# -------------------------------------
# Class Variables


class Musician:
    title = "Rockstar"


drummer = Musician()
print(drummer.title)
# prints "Rockstar"

# -------------------------------------
# Methods


class Dog:
    dog_time_dilation = 7

    def time_explanation(self):
        print("Dogs experience {} years for every 1 human year.".format(
            self.dog_time_dilation))


pipi_pitbull = Dog()
pipi_pitbull.time_explanation()
# Prints "Dogs experience 7 years for every 1 human year."
# * First argument in a method is always the object that is calling the method ('self')
# * Methods always have at least this one argument

# -------------------------------------
# Methods with Arguments


class DistanceConverter:
    kms_in_a_mile = 1.609

    def how_many_kms(self, miles):
        return miles * self.kms_in_a_mile


converter = DistanceConverter()
kms_in_5_miles = converter.how_many_kms(5)
print(kms_in_5_miles)
# prints "8.045"

# -------------------------------------
# Constructors


class Shouter:
    def __init__(self, phrase):
        # make sure phrase is a string
        if type(phrase) == str:

            # then shout it out
            print(phrase.upper())


shout1 = Shouter("shout")
# prints "SHOUT"
# * __init__ is used to initialize a newly created object. It is called every time the class is instantiated.

# -------------------------------------
# Attribute Functions
hasattr(attributeless, "fake_attribute")
# returns False

getattr(attributeless, "other_fake_attribute", 800)
# returns 800, the default value

# -------------------------------------
# String Representation


class Employee():
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return self.name


argus = Employee("Argus Filch")
print(argus)
# prints "Argus Filch"
# * __repr__() can only have one parameter, self, and must return a string