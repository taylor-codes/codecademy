# Building a Mini Blockchain

## Representing Transactions

Transactions for the program are formatted as:

```
amount:30
sender: Alice
receiver: Bob
```

The best way to store the above transaction in Python would be to use a Python dictionary.

## Creating Blocks

Since blocks can be represented as objects, we'll create a Block Class which we can easily use to create new blocks.

A Block contains the following properties:

- Timestamp
- Transaction
- Hash
- Previous Hash
- Nonce

## Hashing and SHA-256

We'll need to learn how to hash stuff before moving on...

```py
# import sha256
from hashlib import sha256

# text to hash
text = "I am excited to learn about blockchain!"

hash_result = sha256(text.encode())

# print result
print(hash_result.hexdigest())

# 32ad45b332a7e5869d6d5aac178a1af413b04b206047709ea021df8d4d21ff56
```

## Creating the Blockchain Class

We'll represent the blockchain as an object. The blockchain has the following properties:

- Chain
- Unverified Transactions
- Genesis Block

