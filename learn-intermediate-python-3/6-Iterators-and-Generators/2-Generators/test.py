def course_generator():
    yield ("Computer Science", 5)
    # Write your code below:
    yield ("Art", 10)
    yield ("Business", 15)
    
def add_five_students(courses):
  for obj in courses:
    print(obj)

add_five_students()    