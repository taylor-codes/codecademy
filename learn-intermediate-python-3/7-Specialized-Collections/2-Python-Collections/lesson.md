# Introduction to Python Collections

## Deque

`deque` containers are similar to lists, but optimized for appending and popping data to the front and back.

```py
from collections import deque
 
bug_data = deque()
 
loaded_bug_reports = get_all_bug_reports()
 
for bug in loaded_bug_reports:
    if bug['priority'] == 'high':
        # With a deque, we can append to the front directly
        bug_data.appendleft(bug)
    else:
        bug_data.append(bug)
 
# With a deque, we can pop from the front directly
next_bug_to_fix = bug_data.popleft()
```

## Named Tuple

A `namedtuple` collection is an immuatable `tuple` object in which each element becomes self-documented.

```py
from collections import namedtuple
 
# General Structure: namedtuple(typename, field_names, *, rename=False, defaults=None, module=None)
ActorData = namedtuple('ActorData', ['name', 'birth_year', 'movie', 'movie_release_date'])

actor_data = ActorData('Leonardo DiCaprio', 1974, 'Titanic', 1997)
print(actor_data.name)
# Leonardo DiCaprio
```

## DefaultDict

A `defaultdict` allows for a default missing value in a dictionary.

```py
from collections import defaultdict
 
validate_prices = defaultdict(lambda: 'No Price Assigned')

validate_prices['jeans'] = 19.99
validate_prices['shoes'] = 24.99
validate_prices['t-shirt'] = 9.99
validate_prices['blouse'] = 19.99

print(validate_prices['jacket'])
# No Price Assigned
```

## OrderedDict

The `OrderedDict` container allows you to access values using keys while also preserving the order of the elements inside it.

```py
from collections import OrderedDict
 
orders = OrderedDict()

orders.update({'order_2905': {'type': 'shoes', 'size': 12, 'price': 22.50}})
orders.update({'order_6184': {'type': 'pants', 'size': 'medium', 'price': 14.99}})
orders.update({'order_4829': {'type': 't-shirt', 'size': 'large', 'price': 9.99}})

# Get a specific order
find_order = orders['order_2905']

# Get the data in a list format
orders_list = list(orders.items())
third_order = orders_list[2]

# Move an item to the end of the OrderedDict
orders.move_to_end('order_4829')
 
# Pop the last item in the dictionary
last_order = orders.popitem()
```

## ChainMap

`ChainMap` container allows us to store many mappings in an ordered group, but lookups (accessing the value using a key) are repeated for every mapping inside of the `ChainMap` until something is found or the end is reached.

```py
from collections import ChainMap
 
customer_info = {'name': 'Dmitri Buyer', 'age': '31', 'address': '123 Python Lane', 'phone_number': '5552930183'}
 
shirt_dimensions = {'shoulder': 20, 'chest': 42, 'torso_length': 29}
 
pants_dimensions = {'waist': 36, 'leg_length': 42.5, 'hip': 21.5, 'thigh': 25, 'bottom': 18}

customer_data = ChainMap(customer_info, shirt_dimensions, pants_dimensions)

customer_leg_length = customer_data['leg_length']

customer_size_data = customer_data.parents

customer_data['address'] = '456 ChainMap Drive' 
```

## Counter

The `Counter` container instantly counts elements for any hashable object. It stores the data as a dictionary where the keys are the elements and the values are the number of occurrences.

```py
clothes_list = ['skirt', 'hoodie', 'dress', 'blouse', 'jeans', 'shoes', 'skirt', 'skirt', 'jeans', 'hoodie', 'boots', 'jeans', 'jacket', 't-shirt', 'skirt', 'skirt', 'dress', 'shoes', 'blouse', 'hoodie', 'skirt', 'boots', 'shoes', 'boots', 'jeans', 'hoodie', 'blouse', 'hoodie', 'shoes', 'shoes', 'blouse', 'boots', 'blouse', 'hoodie', 't-shirt', 'jeans', 'dress', 'skirt', 'jacket', 'boots', 'skirt', 'dress', 'jeans', 'jeans', 'jacket', 'jeans', 'shoes', 'dress', 'hoodie', 'blouse']

from collections import Counter
 
counted_items = Counter(clothes_list)
print(counted_items)
# Counter({'skirt': 8, 'jeans': 8, 'hoodie': 7, 'blouse': 6, 'shoes': 6, 'dress': 5, 'boots': 5, 'jacket': 3, 't-shirt': 2})
```

## Container Wrappers

Wrappers are modifications to functions or classes which change the behavior in some way. They are called wrappers because they “wrap” around the existing code to modify it.

```py
class Customer:
 
  def __init__(self, name, age, address, phone_number):
    self.name = name
    self.age = age
    self.address = address
    self.phone_number = phone_number

class CustomerWrap(Customer):
 
  def __init__(self, name, age, address, phone_number):
    self.customer = Customer(name, age, address, phone_number)
 
  def display_customer_info(self):
    print('Name: ' + self.customer.name)
    print('Age: ' + str(self.customer.age))
    print('Address: ' + self.customer.address)
    print('Phone Number: ' + self.customer.phone_number)

customer = CustomerWrap('Dmitri Buyer', 38, '123 Python Avenue', '5557098603')
customer.display_customer_info()
 
# Output
# Name: Dmitri Buyer
# Age: 38
# Address: 123 Python Avenue
# Phone Number: 5557098603
```

### Container Wrappers: UserDict

The `UserDict` container wrapper creates a custom version of a dictionary. This class contains all of the functionality of a normal `dict`, except that we can access the dictionary data through the `data` property.

```py
from collections import UserDict

# Create a class which inherits from the UserDict class
class DisplayDict(UserDict):
    # A new method to increase the dictionary's functionality
    def display_info(self):
        print("Number of Keys: " + str(len(self.keys())))
        print("Keys: " + str(list(self.keys())))
        print("Number of Values: " + str(len(self.values())))
        print("Values: " + str(list(self.values())))

    # We can also overwrite a method from the dictionary class
    def clear(self):
        print("Deleting all items from the dictionary!")
        super().clear()


disp_dict = DisplayDict(
    {'user': 'Mark', 'device': 'desktop', 'num_visits': 37})

disp_dict.display_info()

disp_dict.clear()
# Number of Keys: 3
# Keys: ['user', 'device', 'num_visits']
# Number of Values: 3
# Values: ['Mark', 'desktop', 37]
# Deleting all items from the dictionary!
```

### Container Wrappers: UserList

```py
from collections import UserList
 
# Create a class which inherits from the UserList class
class CondenseList(UserList):
 
    # A new method to remove duplicate items from the list
    def condense(self):
        self.data = list(set(self.data))
        print(self.data)
 
 
    # We can also overwrite a method from the list class
    def clear(self):
        print("Deleting all items from the list!")
        super().clear()
 
condense_list = CondenseList(['t-shirt', 'jeans', 'jeans', 't-shirt', 'shoes'])
 
condense_list.condense()
 
condense_list.clear()
```

### Container Wrappers: UserString

```py
from collections import UserString
 
# Create a class which inherits from the UserString class
class IntenseString(UserString):
 
    # A new method to capitalize and add exclamation points to our string
    def exclaim(self):
        self.data = self.data.upper() + '!!!'
        return self.data
 
 
    # Overwrite the count method to only count a certain letter
    def count(self, sub=None, start=0, end=0):
        num = 0
        for let in self.data:
            if let == 'P':
                num+=1
        return num
 
 
intense_string = IntenseString("python rules")
 
print(intense_string.exclaim())
print(intense_string.count())
```
