# Nodes Python
## Introduction
> Begin by creating a new class, Node. Add an .__init__() method in the Node class that takes a value and an optional link_node (default should be None). These should be saved to the corresponding self properties (self.value and self.link_node).

```python
class Node:
    def __init__(self, value, link_node=None):
        self.value = value
        self.link_node = link_node
```

## Nodes Python Getters

- We'll need method to access the data and link within the node

```python
class Node:
    def __init__(self, value, link_node=None):
        self.value = value
        self.link_node = link_node
  
  def get_value(self):
    return self.value

  def get_link_node(self):
    return self.link_node
```

## Nodes Python Setter

- We want to allow updating the link of the node

```python
class Node:
    def __init__(self, value, link_node=None):
        self.value = value
        self.link_node = link_node
  
  def get_value(self):
    return self.value

  def get_link_node(self):
    return self.link_node

  def set_link_node(self, link_node):
    self.link_node = link_node
```

## Implementation

```python
class Node:
    def __init__(self, value, link_node=None):
        self.value = value
        self.link_node = link_node
  
  def get_value(self):
    return self.value

  def get_link_node(self):
    return self.link_node

  def set_link_node(self, link_node):
    self.link_node = link_node

# Create some Nodes 
yacko = Node("likes to yak")
wacko = Node("has a penchant for hoarding snacks")
dot = Node("enjoys spending time in movie lots")

# Set links
yacko.set_link_node(dot)
dot.set_link_node(wacko)

dots_data = yacko.get_link_node().get_value()
wackos_data = dot.get_link_node().get_value()

print(dots_data)
# enjoys spending time in movie lots

print(wackos_data)
# has a penchant for hoarding snacks
```

