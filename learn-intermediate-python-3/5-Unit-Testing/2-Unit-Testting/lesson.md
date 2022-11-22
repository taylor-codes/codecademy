# Unit Testing

## The assert Statement 

- Can be used to test that a condition is met
- If the condition evals. to false, an `AssertationError` is raised

```py 
# Syntax
assert <condition>, 'Message if condition is not met'
```
```py
# Example
def times_ten(number):
    return number * 100
 
result = times_ten(20)
assert result == 200, 'Expected times_ten(20) to return 200, instead got ' + str(result)
```

---

## Unit Testing

```py
# Example
# The unit we want to test
def times_ten(number):
    return number * 100
 
# A unit test function with a single test case
def test_multiply_ten_by_zero():
    assert times_ten(0) == 0, 'Expected times_ten(0) to return 0'
```

---

## Python's unittest Framework

```py
# Example
# Importing unittest framework
import unittest
 
# Function that gets tested
def times_ten(number):
    return number * 100
 
# Test class
class TestTimesTen(unittest.TestCase):
    def test_multiply_ten_by_zero(self):
        self.assertEqual(times_ten(0), 0, 'Expected times_ten(0) to return 0')
 
    def test_multiply_ten_by_one_million(self):
        self.assertEqual(times_ten(1000000), 10000000, 'Expected times_ten(1000000) to return 10000000')
 
    def test_multiply_ten_by_negative_number(self):
        self.assertEqual(times_ten(-10), -100, 'Expected add_times_ten(-10) to return -100')
 
# Run the tests
unittest.main()
```

---

## Assert Methods I: Equality and Membership

### assertEqual()

- takes two values as arguments and checks that they are equal. If they are not, the test fails
```py
# Syntax
self.assertEqual(value1, value2)
```

### assertIn()

- takes two arguments. It checks that the first argument is found in the second argument, which should be a container. If it is not found in the container, the test fails

```py
# Syntax
self.assertIn(value, container)
```

### assertTrue()

- takes a single argument and checks that the argument evaluates to `True`. If it does not evaluate to `True`, the test fails
```py
# Syntax
self.assertTrue(value)
```

---

## Assert Methods II: Quantitative Methods

### assertLess()

- takes two arguments and checks that the first argument is less than the second one. If it is not, the test will fail
```py
# Syntax
self.assertLess(value1, value2)
```

### assertAlmostEqual()

- takes two arguments and checks that their difference, when rounded to 7 decimal places, is 0. In other words, if they are almost equal. If the values are not close enough to equality, the test will fail
```py
# Syntax
self.assertAlmostEqual(value1, value2)
```

---

## Assert Methods III: Exception and Warning Methods

### assertRaises()

- takes an exception type as its first argument, a function reference as its second, and an arbitrary number of arguments as the rest
- calls the function and checks if an exception is raised as a result. The test passes if an exception is raised, is an error if another exception is raised, or fails if no exception is raised
- can be used with custom exceptions
```py
# Syntax
self.assertRaises(specificException, function, functionArguments...)
```

### assertWarns()

- takes a warning type as its first argument, a function reference as its second, and an arbitrary number of arguments for the rest
- calls the function and checks that the warning occurs. The test passes if a warning is triggered and fails if it isn’t
```py
# Syntax
self.assertWarns(specificWarningException, function, functionArguments...)
```

---

## Parameterizing Tests

By parameterizing tests, we can leverage the functionality of a single test to get a large amount of coverage of different inputs.

```py
# Example
import unittest
 
# The function we want to test
def times_ten(number):
    return number * 100
 
# Our test class
class TestTimesTen(unittest.TestCase):
 
    # A test method
    def test_times_ten(self):
        for num in [0, 1000000, -10]:
            with self.subTest():
                expected_result = num * 10
                message = 'Expected times_ten(' + str(num) + ') to return ' + str(expected_result)
                self.assertEqual(times_ten(num), expected_result, message)
```

---

## Test Fixtures

A test fixture is a mechanism for ensuring proper test setup (putting tests into a known state) and test teardown (restoring the state prior to the test running). Test fixtures guarantee that our tests are running in predictable conditions, and thus the results are reliable.

```py
# Example
def power_cycle_device():
  print('Power cycling bluetooth device...')
 
class BluetoothDeviceTests(unittest.TestCase):
  def setUp(self):
    power_cycle_device()
 
  def test_feature_a(self):
    print('Testing Feature A')
 
  def test_feature_b(self):
    print('Testing Feature B')
 
  def tearDown(self):
    power_cycle_device()
```

---

## Skipping tests

- `skipUnless` option skips the test if the condition evaluates to `False`
- `skipIf` option skips the test if the condition evaluates to `True`

```py
# Example
import sys
 
class LinuxTests(unittest.TestCase):
 
    @unittest.skipUnless(sys.platform.startswith("linux"), "This test only runs on Linux")
    def test_linux_feature(self):
        print("This test should only run on Linux")
 
    @unittest.skipIf(not sys.platform.startswith("linux"), "This test only runs on Linux")
    def test_other_linux_feature(self):
        print("This test should only run on Linux")
```

---

## Expected Failures

```py
# Example
class FeatureTests(unittest.TestCase):
 
    @unittest.expectedFailure
    def test_broken_feature(self):
        raise Exception("This test is going to fail")
```