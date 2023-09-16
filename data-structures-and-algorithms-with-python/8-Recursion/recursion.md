# Recursion <!-- omit from toc -->
## Table of Contents <!-- omit from toc -->

- [Review](#review)
  - [Recursive Step in a Recursive Function](#recursive-step-in-a-recursive-function)
  - [Call Stack in Recursive Function](#call-stack-in-recursive-function)
  - [Base Case of a Recursive Function](#base-case-of-a-recursive-function)
  - [What is Recursion](#what-is-recursion)
  - [Execution Context of a Recursive Function](#execution-context-of-a-recursive-function)


## Review

### Recursive Step in a Recursive Function

```python
def countdown(value):
  if value <= 0:
    print("done")
  else:
    print(value)
    countdown(value-1)  #recursive step 
```

A recursive function should have a recursive step which calls the recursive function with some input that brings it closer to its base case. In the example, the recursive step is the call to `countdown()` with a decremented value.

### Call Stack in Recursive Function

Programming languages use a facility called a call stack to manage the invocation of recursive functions. Like a stack, a call stack for a recursive function calls the last function in its stack when the base case is met.

### Base Case of a Recursive Function

```
function countdown(value)
  if value is negative or zero
    print "done"
  otherwise if value is greater than zero
    print value
    call countdown with (value-1)
```

A recursive function should have a base case with a condition that stops the function from recursing indefinitely. In the example, the base case is a condition evaluating a negative or zero value to be true.

### What is Recursion

Recursion is a strategy for solving problems by defining the problem in terms of itself. A recursive function consists of two basic parts: the base case and the recursive step.

### Execution Context of a Recursive Function

An execution context of a recursive function is the set of arguments to the recursive function call. Programming languages use execution contexts to manage recursive functions.