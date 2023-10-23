# Hash Maps <!-- omit from toc -->
## Table of Contents <!-- omit from toc -->
- [1. Maps](#1-maps)
- [2. Hash Functions](#2-hash-functions)
- [3. Basic Hash Maps](#3-basic-hash-maps)
- [4. Collisions](#4-collisions)
  - [4.1. Open addressing](#41-open-addressing)
    - [4.1.1. Other open addressing techniques](#411-other-open-addressing-techniques)
- [5. Review](#5-review)

## 1. Maps 

- Being a map means relating two pieces of information
- Each key that is used can only be the key to a single value

## 2. Hash Functions

- A hash function takes a string (or some type of data) as input and returns an array index as output

## 3. Basic Hash Maps

- Concoction for a basic hash map
  - some sort of associated data
  - an array of a fixed size to insert that data into
  - a hash function that translates the keys of the array into indexes into the array
- *Hash Bucket* - storage location at the index given by the hash

## 4. Collisions

- *Hash Collision* - the result of a hash function producing the same hash for two different keys
- Resolving hash collisions:
  - Separate chaining - avoids collions by updating the underlying data structure
  - Savings keys
  - Open addressing: linear probing

### 4.1. Open addressing

- Stick to the array as the underlying data structure, but continue looking for a new index to save the data if the first result of the hash function has a different key's data
- *Probing* - common method of open addressing; continuing to find new array indices in a fixed sequence until an empty index is found

#### 4.1.1. Other open addressing techniques

- In a quadratic probing open addressing system, we add increasingly large numbers to the hash code
  - At the first collision we just add 1, but if the hash collides there too we add 4 ,and the third time we add 9
  - Having a probe sequence change over time like this avoids clustering
- *Clustering* - result of a single hash collision causing additional hash collisions

## 5. Review

- A hash map is:
  - Built on top of an array using a special indexing system
  - A key-value storage with fast assignments and lookups
  - A table that represents a map from a set of keys to a set of values
- Hash maps accomplish all of the above by using a hash function
- A hash collision is when a hash function returns the same index for two different keys
- Two important hash collision strategies are:
  - Separate chaining, where each array index points to a different data structure
  - Open addressing, where a collision triggers a probing sequence to find where to store the value for a given key