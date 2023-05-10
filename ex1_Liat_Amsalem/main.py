from Tower import RectangularTower, TriangularTower

# the function gets the height and width of the rectangular tower
# and print the area or perimeter of the tower according to the conditions
def rectangular_tower():
    height = int(input("Enter the height of the rectangular tower: "))
    width = int(input("Enter the width of the rectangular tower: "))
    tower = RectangularTower(height, width)
    result, type_calc = tower.get_area_or_perimeter()
    print(f"The {type_calc} of the rectangular tower is {result}.")

# the function gets the height and width of the triangular tower
# and gets the chosen option from the user , sending to checking functions and print the result
def triangular_tower():
    height = int(input("Enter the height of the triangular tower: "))
    width = int(input("Enter the width of the triangular tower: "))
    tower = TriangularTower(height, width)
    while True:
        option = int(input("Choose an option:\n1. Calculate the perimeter\n2. Print the triangle\n"))
        if option == 1:
            result = tower.calculate_perimeter()
            print(f"The perimeter of the triangular tower is {result}.")
            break
        elif option == 2:
            result = tower.print_triangle()
            print(result)
            break
        else:
            print("Invalid option. Please choose again.")


if __name__ == "__main__":
    while True:
        print("Choose an option:\n1. Rectangular tower\n2. Triangular tower\n3. Exit")
        option = int(input())
        if option == 1:
            rectangular_tower()
        elif option == 2:
            triangular_tower()
        elif option == 3:
            break
        else:
            print("Invalid option. Please choose again.")
