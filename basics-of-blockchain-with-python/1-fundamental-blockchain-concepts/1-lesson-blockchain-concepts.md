# Intro to Blockchain Concepts

## What is Blockchain?

- Block - individ. transaction or piece of data that is being stored within the blockchain
- Blockchain - cont. growing list ("chain") of records ("block") which are linked chronologically and secured using cryptography

## The Blockchain Network

- Blockchain Network - used interchangeably with "blockchain"; Represents the entire blockchain from the structure itself to the network that is part of it
- Decentralization - concept in which participants work together to validate transactions without relying on a central authority
- Participant - client that owns a copy of the blockchain and verifyies transactions across the network

## Propeties in a Block

- Timestamp - the time the block is created determines the location of it on the blockchain
- Transaction Data - information to be securely store in the block
- Hash - unique code produced by combining all the contents within the block itself (also known as the digital footprint)
- Previous Hash - ea. block has a reference to the block prior to its hash. This is what makes the blockchain unique because this link will be broken if a block is tampered with

## Hashing

- Deterministic - the same input will always produce the same output, but that output cannot prodcue the original input
- Hash - calculated string of letters and numbers produced from a specific input
- Hash Function - function that takes in an input of a random size, performs hashing on the input, and generates a seemingly random output of a fixed size ("hash")

## The Genesis Block

- Genesis Block - first block on the blockchain and it is typically hard-coded into the blockchain structure. It does not have a previous hash

