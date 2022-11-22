# Intro to Python Sets

- `set` - a group of unordered elements with no duplicates
- `frozenset` - immutable version of a `set`; does no include methods to modify the `frozenset` in any way

## Creating a Set

There are multiple ways to create a `set`: 

1. passing an iterable object into its constructor
1. by using curly braces
1. using a set comprehension

```py
# Creating a set with curly braces
music_genres = {'country', 'punk', 'rap', 'techno', 'pop', 'latin'}
 
# Creating a set from a list using set()
music_genres_2 = set(['country', 'punk', 'rap', 'techno', 'pop', 'latin'])

# Creating a set using a set comprehension
items = ['country', 'punk', 'rap', 'techno', 'pop', 'latin']
 
music_genres = {category for category in items if category[0] == 'p'}
print(music_genres)

# Output
{'punk', 'pop'}
```

## Creating a Frozenset

- `frozenset` can only be created from its constructor

```py
# Creating a frozenset from a list
frozen_music_genres = frozenset(['country', 'punk', 'rap', 'techno', 'pop', 'latin'])
```

## Adding to a Set

Two ways to add elements to a `set`:

1. using the `.add()` method
    - adds a single element
1. using the `.update()` method
    - can add multiple elemnts

**Things to note:**
- Neither of the methods above add a duplicate element
- `frozenset` cannot have items added to it (it's immutable)  

```py
# Example using the .add() method
# Create a set to hold the song tags
song_tags = {'country', 'folk', 'acoustic'}
 
# Add a new tag to the set and try to add a duplicate.
song_tags.add('guitar')
song_tags.add('country')
 
print(song_tags)
# {'country', 'acoustic', 'guitar', 'folk'}
```
```py
# Example using the .update() method
# Create a set to hold the song tags
song_tags = {'country', 'folk', 'acoustic'}
 
# Add more tags using a hashable object (such as a list of elements)
other_tags = ['live', 'blues', 'acoustic']
song_tags.update(other_tags)
 
print(song_tags)
# {'acoustic', 'folk', 'country', 'live', 'blues'}
```

## Removing From a Set

There are two ways to remove elemetns from a `set`:

1. using the `.remove()` method
    - throws `KeyError` if element is not found
1. using the `.discard` method
    - doesn't throw an error if element is not found
- Neither of these methods work for a `frozenset`

```py
# Example using the .remove() method
# Given a list of song tags
song_tags = {'guitar', 'acoustic', 'folk', 'country', 'live', 'blues'}
 
# Remove an existing element
song_tags.remove('folk')
print(song_tags)
# {'blues', 'acoustic', 'country', 'guitar', 'live'}
```
```py
# Example using the .discard() method
# Given a list of song tags
song_tags = {'guitar', 'acoustic', 'folk', 'country', 'live', 'blues'}
 
# Try removing an existing element but with the discard method
song_tags.discard('guitar')
print(song_tags)
# {'folk', 'acoustic', 'blues', 'live', 'country'}
```

## Finding Elements in a Set

- The `in` keyword can be used to determine if an element exists in either a `set` or `frozenset`

```py
# Given a list of song tags
song_tags = {'guitar', 'acoustic', 'folk', 'country', 'live', 'blues'}
 
# Print the result of testing whether 'country' is in the set of tags or not
print('country' in song_tags)
# True

frozen_tags = frozenset(song_tags)
print('rock' in frozen_tags)
# False
```
---

# Introduction to Set Operations

## Set Union

We can merge two or more of a `set` by:

1. using the `.union()` method
1. using the `|` operator
- A new set is returned when the above options are used
    - Note that the return value takes the form of the left operand

```py
# Example using .union()
# Given a set and frozenset of song tags for two python related hits
prepare_to_py = {'rock', 'heavy metal', 'electric guitar', 'synth'}
 
py_and_dry = frozenset({'classic', 'rock', 'electric guitar', 'rock and roll'})
 
# Get the union using the .union() method
combined_tags = prepare_to_py.union(py_and_dry)
print(combined_tags)
# {'electric guitar', 'classic', 'heavy metal', 'rock and roll', 'rock', 'synth'}
```
```py
# Get the union using the | operator
frozen_combined_tags = py_and_dry | prepare_to_py
print(frozen_combined_tags)
# frozenset({'electric guitar', 'rock and roll', 'rock', 'synth', 'heavy metal', 'classic'})
```

## Set Intersection

A set intersection returns what sets have in common. It can be performed in two ways:

1. using the `.intersection()` method
1. using the `&` operator

```py
# Given a set and frozenset of song tags for two python related hits
prepare_to_py = {'rock', 'heavy metal', 'electric guitar', 'synth'}
 
py_and_dry = frozenset({'classic', 'rock', 'electric guitar', 'rock and roll'})
 
# Find the intersection between them while providing the `frozenset` first.
frozen_intersected_tags = py_and_dry.intersection(prepare_to_py)
print(frozen_intersected_tags)
# frozenset({'electric guitar', 'rock'})
```

The  `.intersection_update()` method is also availble to update the original `set` instead of returning a new one

## Set Difference

A Set Difference returns a set or frozenset, which contains only the elements from the first set which are not found in the second set. This can be done by:

1. using the `.difference()` method
1. using the `-` operand

The  `.difference_update()` method is also availble to update the original `set` instead of returning a new one

```py
# Given a set and frozenset of song tags for two python related hits
prepare_to_py = {'rock', 'heavy metal', 'electric guitar', 'synth'}
 
py_and_dry = frozenset({'classic', 'rock', 'electric guitar', 'rock and roll'})
 
# Find the elements which are only in prepare_to_py
only_in_prepare_to_py = prepare_to_py.difference(py_and_dry)
print(only_in_prepare_to_py)
# {'heavy metal', 'synth'}
```

## Symmetric Difference

A Symmetric Difference returns elements that are unique to each set. This can be done by:

1. using the `symmetric_difference()` method
1. using the `^` operand

The  `.difference_update()` method is also availble to update the original `set` instead of returning a new one.

```py
# Given a set and frozenset of song tags for two python related hits
prepare_to_py = {'rock', 'heavy metal', 'electric guitar', 'synth'}
 
py_and_dry = frozenset({'classic', 'rock', 'electric guitar', 'rock and roll'})
 
# Find the elements which are exclusive to each song and not shared using the method
exclusive_tags = prepare_to_py.symmetric_difference(py_and_dry)
print(exclusive_tags)
# {'heavy metal', 'synth', 'rock and roll', 'classic'}
```


