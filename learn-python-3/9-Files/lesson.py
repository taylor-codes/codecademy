# Reading a File
import csv  # * import csv
with open('real_cool_document.txt') as cool_doc:
    cool_contents = cool_doc.read()
    # * Can also do:
    # * print(cool_doc.read())
print(cool_contents)


# ------------------------------------------------------
# Iterating Through Lines
with open('keats_sonnet.txt') as keats_sonnet:
    for line in keats_sonnet.readlines():
        print(line)

# ------------------------------------------------------
# Reading a Line
with open('millay_sonnet.txt') as sonnet_doc:
    first_line = sonnet_doc.readline()
    second_line = sonnet_doc.readline()
    print(second_line)

# ------------------------------------------------------
# Writing a File
with open('generated_file.txt', 'w') as gen_file:
    gen_file.write("What an incredible file!")

# ! If there is already a file called generated_file.txt
# ! it will completely overwrite that file

# ------------------------------------------------------
# Appending to a File
with open('generated_file.txt', 'a') as gen_file:
    gen_file.write("... and it still is")

# ------------------------------------------------------
# Reading a CSV File
# * import csv

list_of_email_addresses = []
with open('users.csv', newline='') as users_csv:
    user_reader = csv.DictReader(users_csv)
    for row in user_reader:
        list_of_email_addresses.append(row['Email'])

# ------------------------------------------------------
# Reading Different Types of CSV Files
# * import csv

with open('addresses.csv', newline='') as addresses_csv:
    address_reader = csv.DictReader(addresses_csv, delimiter=';')
    for row in address_reader:
        print(row['Address'])

# ------------------------------------------------------
# Writing a CSV File
big_list = [{'name': 'Fredrick Stein', 'userid': 6712359021, 'is_admin': False}, {'name': 'Wiltmore Denis', 'userid': 2525942, 'is_admin': False}, {
    'name': 'Greely Plonk', 'userid': 15890235, 'is_admin': False}, {'name': 'Dendris Stulo', 'userid': 572189563, 'is_admin': True}]

with open('output.csv', 'w') as output_csv:
    fields = ['name', 'userid', 'is_admin']
    output_writer = csv.DictWriter(output_csv, fieldnames=fields)

    output_writer.writeheader()
    for item in big_list:
        output_writer.writerow(item)

# ------------------------------------------------------
# Reading a JSON File
# * import json

with open('purchase_14781239.json') as purchase_json:
    purchase_data = json.load(purchase_json)

print(purchase_data['user'])

# ------------------------------------------------------
# Writing a JSON File
turn_to_json = {
    'eventId': 674189,
    'dateTime': '2015-02-12T09:23:17.511Z',
    'chocolate': 'Semi-sweet Dark',
    'isTomatoAFruit': True
}

# * import json

with open('output.json', 'w') as json_file:
    json.dump(turn_to_json, json_file)
