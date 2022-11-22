
weight = input("Enter the total weight of your package: ")
weight = float(weight)


#* Ground Shipping
ground_fc = 20.00
if (weight <= 2):
    cost = (weight * 1.50) + ground_fc
elif (weight > 2) and (weight <= 6):
    cost = (weight * 3.00) + ground_fc
elif (weight > 6) and (weight <= 10):
    cost = (weight * 4.00) + ground_fc
elif (weight > 10):
    cost = (weight * 4.75) + ground_fc
else: print("ERROR: Something's not right...")

print('Ground Shipping Total Cost: $' + str(round(cost, 2)))

#* Ground Premium Shipping
ground_p_fc = 125.00
print("Ground Shipping Premium Total Cost: $" + str(round(ground_p_fc, 2)))

#* Drone Shipping
drone_fc = 0.00
if (weight <= 2):
    cost = (weight * 4.50) + drone_fc
elif (weight > 2) and (weight <= 6):
    cost = (weight * 9.00) + drone_fc
elif (weight > 6) and (weight <= 10):
    cost = (weight * 12.00) + drone_fc
elif (weight > 10):
    cost = (weight * 14.25) + drone_fc
else: print("ERROR: Something's not right...")

print('Drone Shipping Total Cost: $' + str(round(cost, 2)))
