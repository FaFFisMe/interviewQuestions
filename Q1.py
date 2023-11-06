def statement():
    print("\n\n\n\n\n 'Red' ○ Red set 50 THB/set \n 'Green' ○ Green set 40 THB/set \n 'Blue' ○ Blue set 30 THB/set \n 'Yellow' ○ Yellow set 50 THB/set \n 'Pink' ○ Pink set 80 THB/set \n 'Purple' ○ Purple set 90 THB/set \n 'Orange' ○ Orange set 120 THB/set \n\n Type 'done' to calcualte")


# initially ask for membership with validation


def start():
    hasMember = False
    print("\n\n\n\n\n\n\n\n\n\n")
    while True:
        Member = input("Welcome to my shop. Do you have a member card?: \n")
        if (Member == "yes"):
            hasMember = True
            break
        elif (Member == "no"):
            hasMember == False
            break
        else:
            print("sorry, the answer must be yes or no")

    order(hasMember)


def order(hasMember):
    redSet = 0
    greenSet = 0
    blueSet = 0
    yellowSet = 0
    pinkSet = 0
    purpleSet = 0
    orangeSet = 0

# this function is for inputing the customer's choice
    statement()
    while True:
        choice = None
        choice = input(":")
        choice = choice.lower()
        # self explained, could potentially use switch case
        if (choice == "red"):
            redSet = redSet + 1
            statement()
        elif (choice == "green"):
            greenSet = greenSet + 1
            statement()
        elif (choice == "blue"):
            blueSet = blueSet + 1
            statement()
        elif (choice == "yellow"):
            yellowSet = yellowSet + 1
            statement()
        elif (choice == "pink"):
            pinkSet = pinkSet + 1
            statement()
        elif (choice == "purple"):
            purpleSet = purpleSet + 1
            statement()
        elif (choice == "orange"):
            orangeSet = orangeSet + 1
            statement()
        elif (choice == "done"):
            break
        else:
            # for invalid input
            statement()
            print(
                "\n invalid option. Please input only : red, green, blue, yellow, pink, purple, orange, or done")
    print("\n\n\n\n\n\n\n\n\n\n")
    calculation(redSet, greenSet, blueSet, yellowSet,
                pinkSet, purpleSet, orangeSet, hasMember)

# this function is for calculating the discount and the sum


def calculation(redSet, greenSet, blueSet, yellowSet,
                pinkSet, purpleSet, orangeSet, hasMember):
    discount = 0

    # these condition is for finding the 5 percent discounts
    if (greenSet > 1 or pinkSet > 1 or orangeSet > 1):
        if (greenSet > 1):
            print("5%" + " discount is applied to green set")
            greenSet = greenSet * 40
            discount = greenSet * 5 / 100
            greenSet = greenSet - discount
        else:
            greenSet = greenSet * 40
        if (pinkSet > 1):
            print("5%" + " discount is applied to pink set")
            pinkSet = pinkSet * 80
            discount = pinkSet * 5 / 100
            pinkSet = pinkSet - discount
        else:
            pinkSet = pinkSet * 80
        if (orangeSet > 1):
            print("5%" + " discount is applied to orange set")
            orangeSet = orangeSet * 120
            discount = orangeSet * 5 / 100
            orangeSet = orangeSet - discount
        else:
            orangeSet = orangeSet * 120

    discount = 0
    total = (redSet * 50) + (greenSet) + (blueSet * 30) + \
        (yellowSet * 50) + (pinkSet) + \
        (purpleSet * 90) + (orangeSet)

    if (hasMember == True):
        discount = discount + 10
        print("10%" + " discount is applied to total price")
        discount = total * 10 / 100
        total = total - discount
    # incase it is a float so convert to string to print
    print("\ntotal price is " + str(total) + "฿")


start()
