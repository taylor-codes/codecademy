# Asymptotic Notation?

- A program's efficiency is defined by its *runtime*
- **Asymptotic Notation** - general way to deine a program's runtime, given variable factors *i.e.: different programming languages, processors, hardware, etc*
- The runtime is calculated by determining the number of instructions the computer will perform based on the input, *N*
  - If there is a second input, that shall be noted as *M*

## What is Asymptotic Notation?

- A program that takes 12 nanoseconds on one computer could take 45 milliseconds on another
  - We need a more general way to gauge a program’s runtime - enter Asymptotic Notation
- We can calculate a program’s runtime by looking at how many instructions the computer has to perform based on the size of the program’s input: *N*
  - A program that has input of size N may tell the computer to run 5N<sup>2</sup>+3N+2 instructions
  - All constants are dropped with Asymptotic Notation; resulting formula looks like this: N<sup>2</sup>+N
- hree different ways we could describe the runtime of this program: big Theta or Θ(N<sup>2</sup>), big O or O(N<sup>2</sup>), big Omega or Ω(N<sup>2</sup>)
- Execution Count - the number of times a statement is executed by a program

## Big Theta (Θ)

- Denoted by Θ
- Used when a program has only one case in terms of runtime
- Example:
  ```
  # pseudocode for a function that prints the values in a list
  Function with input that is a list of size N:
    For each value in list:
        Print the value
  ```
    - The number of instructions the computer has to perform is based on how many iterations the loop will do because if the loop does more iterations, then the computer will perform instructions
    - With a list of size N, the program has a runtime of N because the program has to print a value N times, Θ(N)
- More complicated example:
  ```
  Function that has integer input N:
    Set a count variable to 0
    Loop while N is not equal to 1:
        Increment count
        N = N/2
    Return count
  ```
    - In every case, with an integer N, the loop will iterate log<sub>2</sub>(N) times, Θ(log N)

## Common Runtimes

Below is a list of common runtimes that run from fastest to slowest:

- **Θ(1)**: This is *constant* runtime. This is the runtime when a program will always do the same thing regardless of the input. For instance, a program that only prints “hello, world” runs in `Θ(1)` because the program will always just print “hello, world”
- **Θ(log N)**: This is *logarithmic* runtime. You will see this runtime in search algorithms
- **Θ(N)**: This is *linear* runtime. You will often see this when you have to iterate through an entire dataset
- **Θ(N*logN)**: You will see this runtime in sorting algorithms
- **Θ(N<sup>2</sup>)**: This is an example of a *polynomial* runtime. When N is raised to the 2nd power, it’s known as a quadratic runtime. You will see this runtime when you have to search through a two-dimensional dataset (like a matrix) or nested loops
- **Θ(2<sup>N</sup>)**: This is *exponential* runtime. You will often see this runtime in recursive algorithms
- **Θ(N!)**: This is *factorial* runtime. You will often see this runtime when you have to generate all of the different permutations of something. For instance, a program that generates all the different ways to order the letters “abcd” would run in this runtime

## Big Omega (Ω) and Big O (O)

- A program can have a best and worst case for a runtime
- Use big Omega or Ω to describe the best case and big O or O to describe the worst case
- Example:
    ```
    Function with input that is a list of size N:
        For each value in the list:
            If value is equal to 12:
                Return True
        Return False
    ```
    - If the first value in the list was 12, then the loop would only iterate once
    - If 12 wasn’t in the list at all, the loop would iterate 1000 times
    - If the input was a list of size N, the loop could iterate anywhere from 1 to N times depending on where 12 is in the list (or if it’s in the list at all)
    - In the best case, it has a constant runtime and in the worst case it has a linear runtime
    - There are many ways we could describe the runtime of this program:
      - This program has a best case runtime of Θ(1)
      - This program has a worst case runtime of Θ(N)
      - This program has a runtime of Ω(1)
      - This program has a runtime O(N)
    - Saying that this program has a runtime of Θ(N) is not true because the program does not have a linear runtime in every case, only the *worst* case
- When describing runtime, people typically discuss the worst case
  - In technical interviews, you will usually only be asked for the big O of a program

## Adding Runtimes

It is sometimes difficult to find the runtime of a complex program.

Example:

```
Function that takes a positive integer N:
    Set a variable i equal to 1
    Loop until i is equal to N:
        Print i
        Increment i
    
    Set a count variable to 0
    Loop while N is not equal to 1:
        Increment count
        N = N/2
    Return count
```

We can divide the program into two chunks:
- In the first loop, we iterate until we reach N. Thus the runtime of the first loop is Θ(N)
- However, the second loop, as demonstrated in a previous exercise, runs in Θ(log N)

Now, we can add the runtimes together, so the runtime is Θ(N) + Θ(log N).

However, when analyzing the runtime of a program, we only care about the slowest part of the program, and because Θ(N) is slower than Θ(log N), we would actually just say the runtime of this program is Θ(N).
- It is also appropriate to say the runtime is O(N) because if it runs in Θ(N) for every case, then it also runs in Θ(N) for the worst case. Most of the time people will just use big O notation

## Review

- We use asymptotic notation to describe the runtime of a program
  - The three types of asymptotic notation are big Theta, big Omega, and big O
- We use big Theta (Θ) to describe the runtime if the runtime of the program is the same in every case
- The different common runtimes from fastest to slowest are: Θ(1), Θ(log N), Θ(N), Θ(N log N), Θ(N<sup>2</sup>), Θ(2<sup>N</sup>), Θ(N!)
- We use big Omega (Ω) to describe the best-case running time of a program
- We use big O (O) to describe the worst-case running time of a program
- We typically describe a program’s running time in terms of big O
- When finding the runtime of a program with multiple steps, you can divide the program into different sections and add the runtimes of the various sections. You can then take the slowest runtime and use that runtime to describe the entire program
- When analyzing the runtime of a program, we care about which part of the program is the slowest
