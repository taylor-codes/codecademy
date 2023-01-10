# Nodes

- Nodes are the fundamental building blocks of many data structures
- An indiv. node contains data and links to other nodes
![Alt text](https://static-assets.codecademy.com/Courses/CS102-Data-Structures-And-Algorithms/Nodes/Screen%20Shot%202021-05-07%20at%2010.46.16%20AM.png)

## Node Implementations
- Data contained withing a node can be an int, string, decimal, array, or null
- Link(s) in the node are referred to as 'pointers' because they point to another node
- Nodes usually have one or more links
    - If these links are null, it means that you have reached the end of the particular node or link path you were previously following
![Alt text](https://static-assets.codecademy.com/Courses/CS102-Data-Structures-And-Algorithms/Nodes/CS102_NodeImplementations_2_M2.svg)

## Node linking
- Nodes, most often, may only be linking to a single other node
    - Important to consider how to implement modifying or removing nodes from a data structure
    - If you were to remove a node, that node's data and any links could be lost to your app ("orphaned node")
![Alt text](https://static-assets.codecademy.com/Courses/CS102-Data-Structures-And-Algorithms/Nodes/CS102_RemovingNodes_1_M3.gif)

## Recap
- Nodes contain data, which can be a variety of data types
- Nodes also contain links to other nodes
    - If a node has no links, or if they are all null, you have reached the end of the path you were following
- Nodes can be "orphaned" if there are no existing links to them