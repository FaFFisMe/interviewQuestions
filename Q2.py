import math


def get_coordinates():
    coordinates = []
# loop until get x and y is done
    while True:
        x_str = input("Enter x coordinate (or 'done' to finish): ")

        if (x_str.lower()) == 'done':
            break

        y_str = input("Enter y coordinate: ")

        try:
            x = float(x_str)
            y = float(y_str)
            coordinates.append([x, y])
        except ValueError:
            print("Invalid input. Please enter valid numeric coordinates.")
# return the array
    return coordinates


def get_circles():
    coordinates = []
# loop until get x, y, radius is done
    while True:
        x_str = input("Enter x coordinate (or 'done' to finish): ")

        if (x_str.lower()) == 'done':
            break

        y_str = input("Enter y coordinate: ")
        radius_str = input("Enter radius: ")

        try:
            x = float(x_str)
            y = float(y_str)
            radius = float(radius_str)
            coordinates.append([x, y, radius])
        except ValueError:
            print("Invalid input. Please enter valid numeric coordinates.")
# return the array
    return coordinates


def is_inside_circle(point, circle):
    # Calculate the distance between the point and the center of the circle
    x, y, r = circle
    # Euclidean distance between the given point and the center of the circle using the Pythagorean theorem.
    distance = math.sqrt((point[0] - x) ** 2 + (point[1] - y) ** 2)

    # Check if the point is inside the circle (including the border) (True or False)
    return distance <= r


def points_inside_circles(points, circles):
    result = []
    # loop in for each circle to find all point
    for circle in circles:
        points_inside = []
        # all the points per circle
        for point in points:
            if is_inside_circle(point, circle):
                points_inside.append(point)
        result.append(points_inside)

    return result


# get input for points
print("\nplease input coordinates for points\n")
points = get_coordinates()
# get input for circles
print("\nplease input coordinates for circles\n")
circles = get_circles()

# put both arrays into the function to find the result
result = points_inside_circles(points, circles)

# print all the results
for i, points_inside_circle in enumerate(result):
    print(f"Points inside Circle {i + 1}: {points_inside_circle}")
