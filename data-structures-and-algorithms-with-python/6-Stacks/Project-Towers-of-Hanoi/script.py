from stack import Stack

print(
    """
 _________    ___   ____      ____  ________  _______     ______   
|  _   _  | .'   `.|_  _|    |_  _||_   __  ||_   __ \  .' ____ \  
|_/ | | \_|/  .-.  \ \ \  /\  / /    | |_ \_|  | |__) | | (___ \_| 
    | |    | |   | |  \ \/  \/ /     |  _| _   |  __ /   _.____`.  
   _| |_   \  `-'  /   \  /\  /     _| |__/ | _| |  \ \_| \____) | 
  |_____|   `.___.'     \/  \/     |________||____| |___|\______.' 
   ___   ________                                                  
 .'   `.|_   __  |                                                 
/  .-.  \ | |_ \_|                                                 
| |   | | |  _|                                                    
\  `-'  /_| |_                                                     
 `.___.'|_____|                                                    
 ____  ____       _       ____  _____   ___   _____                
|_   ||   _|     / \     |_   \|_   _|.'   `.|_   _|               
  | |__| |      / _ \      |   \ | | /  .-.  \ | |                 
  |  __  |     / ___ \     | |\ \| | | |   | | | |                 
 _| |  | |_  _/ /   \ \_  _| |_\   |_\  `-'  /_| |_                
|____||____||____| |____||_____|\____|`.___.'|_____|               
                                                            
"""
)

# Create the Stacks
stacks = []

left_stack = Stack("Left")
middle_stack = Stack("Middle")
right_stack = Stack("Right")

stacks.append(left_stack)
stacks.append(middle_stack)
stacks.append(right_stack)

# Set up the Game
num_disks = int(input("\nHow many disks do you want to play with?\n"))

while num_disks < 3:
    num_disks = int(input("\n\nEnter a number greater than or equal to 3"))

for disk in range(num_disks, 0, -1):
    left_stack.push(disk)

num_optimal_moves = (2**num_disks) - 1
print(f"\n\nThe fastest you can solve this game is in {num_optimal_moves} moves...")


# Get User Input
def get_input():
    choices = [stack.get_name()[0] for stack in stacks]

    while True:
        for i in range(len(stacks)):
            name = stacks[i].get_name()
            letter = choices[i]
            print(f"Enter {letter} for {name}")
        user_input = input("").upper()

        if user_input in choices:
            for i in range(len(stacks)):
                if user_input == choices[i]:
                    return stacks[i]


# Play the Game
num_user_moves = 0

while right_stack.get_size() != num_disks:
    print("\n\n...Current Stacks...")

    for i in stacks:
        i.print_items()

    while True:
        print("\nWhich stack do you want to move from?\n")
        from_stack = get_input()
        print("\nWhich stack do you want to move to?\n")
        to_stack = get_input()

        if from_stack.is_empty():
            print("\n\nInvalid move. Try again...")
        elif to_stack.is_empty() or from_stack.peek() < to_stack.peek():
            disk = from_stack.pop()
            to_stack.push(disk)
            num_user_moves += 1
            break
        else:
            print("\n\nInvalid move. Try again...")

print(
    f"n\nYou completed the game in {num_user_moves} moves, and the optimal number of moves is {num_optimal_moves}!"
)
