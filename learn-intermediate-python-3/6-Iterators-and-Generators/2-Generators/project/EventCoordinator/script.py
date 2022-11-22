guests = {}


def read_guestlist(file_name):
  text_file = open(file_name, 'r')
  x = None
  while True:
    if x is not None:
      line_data = x.strip().split(",")
    else:
      line_data = text_file.readline().strip().split(",")
    if len(line_data) < 2:
      # If no more lines, close file
      text_file.close()
      break
    name = line_data[0]
    age = int(line_data[1])
    guests[name] = age
    x = yield name

guestlist = read_guestlist('guest_list.txt')

print("--- Guest List ---")
for name in range (0, 10):
  print(next(guestlist))

print(guestlist.send("Jane,35"))
# print(next(guestlist))

for guest in guestlist:
  print(guest)

print('\n')
print("--- Guest List (over 21) ---")

guests_over_21 = (guest for guest in guests if guests[guest] >= 21)
for i in guests_over_21:
  print(i)

def table_one():
  for i in range(0, 5):
    yield ("Chicken", "Table 1", "Seat {}".format(i))
def table_two():
  for i in range(0, 5):
    yield ("Beef", "Table 2", "Seat {}".format(i))
def table_three():
  for i in range(0, 5):
    yield ("Fish", "Table 3", "Seat {}".format(i))

def all_tables():
  yield from table_one()
  yield from table_two()
  yield from table_three()

table_assign = all_tables()

def assign_tables(list_of_guests):
  for name in list_of_guests:
    yield (name, next(table_assign))

guest_assignment = assign_tables(guests)

print('\n')
print("--- Guest Table Assignment ---")
for g in guest_assignment:
  print(g)