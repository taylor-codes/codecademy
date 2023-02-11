# Doubly Linked Lists with Python

- Doubly Linked List (DLL) - sequential chain of nodes with pointers to the previous node as well as the next node (have tail and head properties)
- DLLs have 03 elements (value, pointer to head node, pointer to tail node)
- DLL Examples:
    - A music player with “next” and “previous” buttons
    - An app that shows you where your subway is on the train line
    - The “undo” and “redo” functionality in a web browser

## Node Class and Constructor

```python
class Node:
    def __init__(self, value, next_node=None, prev_node=None):
        self.value = value
        self.next_node = next_node
        self.prev_node = prev_node

    def set_next_node(self, next_node):
        self.next_node = next_node

    def get_next_node(self):
        return self.next_node

    def set_prev_node(self, prev_node):
        self.prev_node = prev_node

    def get_prev_node(self):
        return self.prev_node

    def get_value(self):
        return self.value


class DoublyLinkedList:
    def __init__(self):
        self.head_node = None
        self.tail_node = None
```

## Adding to the Head

Steps for adding to the head of a DLL:

1. Start by checking to see if there is a current head to the list
1. If there is (meaning the list is not empty), then we want to reset the pointers at the head of the list:
    - Set the current head’s previous node to the new head
    - Set the new head’s next node to the current head
1. Update the head property to be the new head
1. Finally, if there isn’t a current tail to the list (meaning the list was empty):
    - Update the tail property to be the new head since that node will be both the head and tail of the list

```python
class DoublyLinkedList:
    def __init__(self):
        self.head_node = None
        self.tail_node = None

    def add_to_head(self, new_value):
        new_head = Node(new_value)
        current_head = self.head_node

        if current_head != None:
            current_head.set_prev_node(new_head)
            new_head.set_next_node(current_head)

        self.head_node = new_head

        if self.tail_node == None:
            self.tail_node = new_head
```

## Adding to the Tail

Steps for adding to the head of a DLL:

1. Start by checking to see if there is a current tail to the list
1. If there is (meaning the list is not empty), then we want to reset the pointers at the tail of the list:
    - Set the current tail’s next node to the new tail
    - Set the new tail’s previous node to the current tail
1. Update the tail property to be the new tail
1. Finally, if there isn’t a current head to the list (meaning the list was empty):
    - Update the head property to be the new tail since that node will be both the head and tail

```python
class DoublyLinkedList:
    def __init__(self):
        self.head_node = None
        self.tail_node = None
    
    def add_to_tail(self, new_value):
        new_tail = Node(new_value)
        current_tail = self.tail_node

        # For an existing tail node
        if current_tail != None:
            current_tail.set_next_node(new_tail)
            new_tail.set_prev_node(current_tail)

        self.tail_node = new_tail

        # If there was not an existing head node
        if self.head_node == None:
            self.head_node = new_tail
```

## Removing the Head

Steps for removing the head of a DLL:

1. Start by checking if there’s a current head to the list.
    - If there isn’t, the list is empty, so there’s nothing to remove and the method ends
1. Otherwise, update the list’s head to be the current head’s next node
1. If the updated head is not `None` (meaning the list had more than one element when we started):
    - Set the head’s previous node to `None` since there should be no node before the head of the list
1. If the removed head was also the tail of the list (meaning there was only one element in the list):
    - Call `.remove_tail()` to make the necessary changes to the tail of the list
1. Return the removed head’s value

```python
class DoublyLinkedList:
    def __init__(self):
        self.head_node = None
        self.tail_node = None

    def remove_head(self):
        removed_head = self.head_node

        # If there is no head node
        if removed_head == None:
            return None
        
        # If there is a head node
        self.head_node = removed_head.next_node

        if self.head_node != None:
            self.head_node.set_prev_node(None)

        if self.tail_node == removed_head:
            self.remove_tail()

        return removed_head.get_value()
```

## Removing the Tail

Steps for removing the tail of a DLL:

1. Start by checking if there’s a current tail to the list.
    - If there isn’t, The list is empty, so there’s nothing to remove, and the method ends
1. Otherwise, update the list’s tail to be the current tail’s previous node
1. If the updated tail is not `None` (meaning the list had more than one element when we started):
    - Set the tail’s next node to `None` since there should be no node after the tail of the list
1. If the removed tail was also the head of the list (meaning there was only one element in the list):
    - Call `.remove_head()` to make the necessary changes to the head of the list
1. Finally, return the old tail’s data

```python
class DoublyLinkedList:
    def __init__(self):
        self.head_node = None
        self.tail_node = None

def remove_tail(self):
        removed_tail = self.tail_node

        # If there is no tail node
        if removed_tail == None:
            return None

        # If there is a tail node
        self.tail_node = removed_tail.prev_node

        if self.tail_node != None:
            self.tail_node.set_next_node(None)

        if self.head_node == removed_tail:
            self.remove_head()
        
        return removed_tail.get_value()
```

## Removing by Value

Steps for removing a node by it's value:

1. Iterate through the list to find the matching node
1. If there is no matching element in the list:
    - Return `None`
1. If there is a matching node, we will then check to see if it is the head or tail of the list:
    - If so, call the corresponding `.remove_head()` or `.remove_tail()` method
1. If not, that means the node was somewhere in the middle of the list. In that case:
    - Remove it by resetting the pointers of its previous and next nodes
1. Finally, return the node’s value property

```python
class DoublyLinkedList:
    def __init__(self):
        self.head_node = None
        self.tail_node = None

    def remove_by_value(self, value_to_remove):
        node_to_remove = None

        current_node = self.head_node
        while current_node is not None:
            if current_node.get_value() == value_to_remove:
                node_to_remove = current_node
                break
            current_node = current_node.get_next_node()
        
        if node_to_remove is None:
            return None

        if node_to_remove == self.head_node:
            self.remove_head()
        elif node_to_remove == self.tail_node:
            self.remove_tail()
        else:
            next_node = node_to_remove.get_next_node()
            prev_node = node_to_remove.get_prev_node()

            next_node.set_prev_node(prev_node)
            prev_node.set_next_node(next_node)

        return node_to_remove
```

