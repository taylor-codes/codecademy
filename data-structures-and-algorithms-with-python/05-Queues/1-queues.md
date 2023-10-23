# Queues

## Conceptual

Queues:
- Contain data nodes
- Support three main operations:
    - Enqueue - adds data to the back of the queue
    - Dequeue - removes and provides data from the front of the queue
    - Peek - provides data on the front of the queue
- Can be implemented using a linked list or array
- Bounded queues have a limted size
- Enqueueing onto a full queue causes a queue overflow
- Process data FIFO

## Python Intro

- A queue is a data structure that contains an ordered set of data that follows FIFO protocol
- Three essential methods:
    - `enqueue()` - adds a new node to the tail of the queue
    - `dequeue()` - removes a node from the head of the queue and returns its value
    - `peek()` - view the head of the queue without returning it

## Size

- Bounded queue's have size limits while other queues do not

## Enqueue

- Scenarious to think about for enqueue-ing:
    1. The queue is empty, so the node we’re adding is both the head and tail of the queue
    1. The queue has at least one other node, so the added node becomes the new tail
    1. The queue is full, so the node will not get added because we don’t want queue “overflow”

## Dequeue

- Scenarious to think about for dequeue-ing:
    1. The queue is empty, so we cannot remove or return any nodes lest we run into queue “underflow”
    1. The queue has one node, so when we remove it, the queue will be empty and we need to reset the queue’s head and tail to None
    1. The queue has more than one node, and we just remove the head node and reset the head to the following node
