# Doubly Linked Lists

- Comprised of a series of nodes
- Ea. node contains data and 2 links (one to prev. node, one to next node)
- Head node prev. node pointer set to `null`
- Tail node next node pointer set to `null`

## Adding to the List

- Kinda complicated (have to keep track of and set the node's prev. pointer as well as update the tail of the list)

### Adding to the head

- First check to see if there is a current head node
    - If not, cool, make the new node the head and tail of the list and set both pointers to `null`
- If there is a current head node:
    - Set the current head's prev pointer to the new head
    - Set the new head's pointer to the current head
    - Set the new head's prev. pointer to `null`

### Adding to the tail

- If the list is empty, cool, make the new node the head and tail of the list and set both pointers to `null`
- If not empty:
    - Set the current tail's pointer to the new tail
    - Set the new tail's prev. pointer to the current tail
    - Set the new tail's pointer to `null`

### Visual for adding the the head and tail
![Alt text](https://static-assets.codecademy.com/Courses/CS102-Data-Structures-And-Algorithms/DoublyLinkedLists/CS102_AddingHeadTail2_2_M9.svg)

## Removing from the List

- Kinda difficult to remove the current head
- Easy to remove the current tail

## Removing the head

- Must update the pointer at the beginning of the list
- Set the prev. pointer of the new head to `null`
- Update the head property of the list

## Removing the tail
- Update the pointer at the end of the list
- Set next pointer of the new tail to `null`
- Update tail property of the list
![Alt text](https://static-assets.codecademy.com/Courses/CS102-Data-Structures-And-Algorithms/DoublyLinkedLists/CS102_RemovingHeadTail2_1_M10%20%282%29.svg)

## Removing from the middle of the list

- Set the removed node’s preceding node’s next pointer to its following node
- Set the removed node’s following node’s previous pointer to its preceding node
![Alt text](https://static-assets.codecademy.com/Courses/CS102-Data-Structures-And-Algorithms/DoublyLinkedLists/CS102_RemovingTheMiddle2_1_M11%20%282%29.svg)
