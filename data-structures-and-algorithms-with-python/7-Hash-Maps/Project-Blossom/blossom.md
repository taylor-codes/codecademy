# Blossom

The language of the flowers has a long history and has often been a topic resigned to the domain of dusty books in a thrift bookseller or a library. With Blossom, we want to give people lightning fast access to all of the possible meanings of their favorite flowers.

In this project, we are going to implement a hash map to relate the names of flowers to their meanings. In order to avoid collisions when our hashing function collides the names of two flowers, we are going to use separate chaining. We will implement the Linked List data structure for each of these separate chains.

Building out the Hash Map

The underlying data structure for Blossom is going to be a key-value store that uses the common names for flowers as the key and saves the floral meaning of the flower as the value.

In order to implement this functionality, we’re going to build out a hash map with separate chains of linked lists at every index.