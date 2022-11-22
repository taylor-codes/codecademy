""" 
For the first code challenge, we are going to create a 
method that tests whether the result of taking the power of 
one number to another number provides an answer which is 
greater than 5000. We will use a conditional statement to 
return True if the result is greater than 5000 or return 
False if it is not. In order to accomplish this, we will 
need the following steps:

1. Define the function to accept two input parameters called 
    base and exponent

2. Calculate the result of base to the power of exponent

3. Use an if statement to test if the result is greater than 
    5000. If it is then return True. Otherwise, return False

"""

def greaterThanFiveThousand(base, exponent):

    yofx = (base ** exponent)

    print(str(base) + ' ^ ' + str(exponent) + ' = ' + str(yofx))

    if ( yofx > 5000):
        return True
    else:
        return False

base = int(input("Input base: "))
exponent = int(input("Input exponent: "))

print(greaterThanFiveThousand(base, exponent))