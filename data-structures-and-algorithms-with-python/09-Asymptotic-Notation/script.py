from linkedlist import LinkedList


# Fill in Function
def find_max(linked_list):
    print("--------------------------")
    print("Finding the maximum value of:\n{0}".format(linked_list.stringify_list()))
    # Write Code Here
    head = linked_list.get_head_node()
    val1 = head.data
    val2 = head.next.data
    max = max(val1, val2)

    head = head.next.next
    while head != None:
        if head.data > max:
            max = head.data
        head = head.next
    return max


# Test Cases
ll = LinkedList(6)
ll.insert_beginning(32)
ll.insert_beginning(-12)
ll.insert_beginning(48)
ll.insert_beginning(2)
ll.insert_beginning(1)
print("The maximum value in this linked list is {0}\n".format(find_max(ll)))

ll_2 = LinkedList(60)
ll_2.insert_beginning(12)
ll_2.insert_beginning(22)
ll_2.insert_beginning(-10)
print("The maximum value in this linked list is {0}\n".format(find_max(ll_2)))

ll_3 = LinkedList("A")
ll_3.insert_beginning("X")
ll_3.insert_beginning("V")
ll_3.insert_beginning("L")
ll_3.insert_beginning("D")
ll_3.insert_beginning("Q")
print("The maximum value in this linked list is {0}\n".format(find_max(ll_3)))

# Runtime
runtime = "Replace"
print("The runtime of find_max is O({0})".format(runtime))
