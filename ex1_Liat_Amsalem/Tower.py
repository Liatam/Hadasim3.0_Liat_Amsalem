import math


# Create a class Tower with attributes height and width.
class Tower:
    def __init__(self, height, width):
        self.height = height
        self.width = width


# Create a class RectangularTower that inherits from Tower.
class RectangularTower(Tower):
    def __init__(self, height, width):
        super().__init__(height, width)

    # the function returns the area or perimeter of the tower according to the conditions.
    def get_area_or_perimeter(self):
        if (self.height - self.width) > 5 or self.width == self.height:
            return 2 * self.height + 2 * self.width, "perimeter"
        else:
            return self.height * self.width, "area"


# Create a class TriangularTower that inherits from Tower.
class TriangularTower(Tower):
    def __init__(self, height, width):
        super().__init__(height, width)

    # the function returns the perimeter of the tower.
    def calculate_perimeter(self):
        side_of_triangle = math.hypot(self.width, self.height)
        perimeter = self.width + (2 * side_of_triangle)
        return perimeter

    # the function prints the triangle.
    def print_triangle(self):
        if self.width % 2 == 0 or self.width > 2 * self.height:
            return "The triangle cannot be printed."

        triangle = ""
        odd_nums = [odd_num for odd_num in range(3, self.width, 2)]
        num_lines = (self.height - 2) // len(odd_nums) if len(odd_nums) != 0 else self.height - 2
        remainder = (self.height - 2) % len(odd_nums)

        # top of triangle
        triangle += " " * (self.width // 2) + "*" + "\n"

        # middle of triangle
        if remainder != 0 and len(odd_nums) != 0:
            for _ in range(remainder):
                triangle += " " * ((self.width - 3) // 2) + "*" * 3 + "\n"

        for odd_num in odd_nums:
            for _ in range(num_lines):
                triangle += " " * ((self.width - odd_num) // 2) + "*" * odd_num + "\n"

        # bottom of triangle
        triangle += "*" * self.width
        return triangle
