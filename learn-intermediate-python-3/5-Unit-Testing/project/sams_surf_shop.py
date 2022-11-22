import string
import unittest
import surfshop


class Test(unittest.TestCase):
    def setUp(self):
        self.Cart = surfshop.ShoppingCart

    def test_add_surfboards(self):
        string1 = 'Successfully added 1 surfboard to cart!'
        self.assertEqual(self.Cart.add_surfboards(1), string1, 'Expected add_surfboards(1) to return: Successfully added 1 surfboard to cart!')

unittest.main()
