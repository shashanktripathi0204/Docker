from random import randint

min_num = int(input("Enter the min number: "))
max_num = int(input("Enter the max number: "))

if(max_num < min_num):
    print("Invalid Input - shutting down...")
else:
    rnd_num = randint(min_num, max_num)
    print(rnd_num)