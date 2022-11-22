# Built-In Higher-Order Functions

## Map
Base structure: `returned_map_object = map(function, iterable)`

Example:
```py
def double(x):
 return x*2
 
int_list = [3, 6, 9]
 
doubled = map(double, int_list)
 
print(list(doubled))
# Output:
[6, 12, 18]
```

---

## Filter

```py
books = [["Burgess", 1985],
         ["Orwell", "Nineteen Eighty-four"],
         ["Murakami", "1Q85"],
         ["Orwell", 1984],
         ["Burgess", "Nineteen Eighty-five"],
         ["Murakami", 1985]]


string_titles = filter(lambda book: type(book[1]) == str, books)

string_titles_list = list(string_titles)

print(string_titles_list)

# Output:
[['Orwell', 'Nineteen Eighty-four'], ['Murakami', '1Q85'], ['Burgess', 'Nineteen Eighty-five']]
```

---

## Reduce

```py
letters = ['r', 'e', 'd', 'u', 'c', 'e']

from functools import reduce

word = reduce(lambda x, y: x + y, letters)


print(word)

# Output:
reduce
```