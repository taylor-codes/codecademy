import robot_race_functions as rr
from collections import deque, Counter, namedtuple
from time import time, sleep

maze_file_name = 'maze_data_1.csv'
seconds_between_turns = 0.3
max_turns = 35

# Initialize the robot race
maze_data = rr.read_maze(maze_file_name)
rr.print_maze(maze_data)
walls, goal, bots = rr.process_maze_init(maze_data)

# Populate a deque of all robot commands for the provided maze
robot_moves = deque()
num_of_turns = 0
while not rr.is_race_over(bots) and num_of_turns < max_turns:
    # For every bot in the list of bots, if the bot has not reached the end, add a new move to the robot_moves deque
    # Add your code below!

    num_of_turns += 1

# Count the number of moves based on the robot names
# Add your code below!


# Count the number of collisions by robot name
# Add your code below!


# Create a namedtuple to keep track of our robots' points
# Add your code below!


# Calculate the scores (moves + collisions) for each robot and append it to bot_scores
bot_scores = []
# Add your code below!


# Populate a dict to keep track of the robot movements
bot_data = {}
# Add your code below!


# Move the robots and update the map based on the moves deque
while len(robot_moves) > 0:
    # Make sure to pop moves from the front of the deque
    # Add your code below!

    # Update the maze characters based on the robot positions and print it to the console
    rr.update_maze_characters(maze_data, bots)
    rr.print_maze(maze_data)
    sleep(seconds_between_turns - time() % seconds_between_turns)

# Print out the results!
# rr.print_results(bot_scores)
