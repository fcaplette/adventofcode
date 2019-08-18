import re


def main():
    # Get a list of parsed coordinates and extremes coordinates (x, y)
    coordinates = parse_coordinates_from_file(
        "coordinates.txt")

    cleaned_coordinates = parse_data_from_coordinates(coordinates)

    display(cleaned_coordinates)


def display(coordinates):
    width = 100

    new_coordinates = coordinates
    has_gotten_in = False

    for time in range(100000):
        new_coordinates = apply_velocity_to_coordinates(new_coordinates)
        min_x = min([coordinate["position"]["x"]
                     for coordinate in coordinates])
        min_y = min([coordinate["position"]["y"]
                     for coordinate in coordinates])
        max_x = max([coordinate["position"]["x"]
                     for coordinate in coordinates])
        max_y = max([coordinate["position"]["y"]
                     for coordinate in coordinates])

        if(min_x + width >= max_x and min_y + width >= max_y):
            has_gotten_in = True
            for y in range(min_y, max_y + 1):
                for x in range(min_x, max_x + 1):
                    if(x, y) in [(coordinate["position"]["x"], coordinate["position"]["y"]) for coordinate in coordinates]:
                        print("#", end="")
                    else:
                        print(".", end="")
                print("", end="\n")
        else:
            if(has_gotten_in):
                break

        print(f'{time + 1} seconds')


def parse_coordinates_from_file(name):
    coordinates = []

    with open(name) as coordinate_file:
        for line in coordinate_file:
            coordinates.append(line)

    return coordinates


def apply_velocity_to_coordinates(cleaned_coordinates):
    # This function must take the struct of all points
    # and apply the velocity to each point. Return an updated
    # version of the positions
    new_coordinates = cleaned_coordinates

    for coordinate in new_coordinates:
        coordinate["position"]["x"] = coordinate["position"]["x"] + \
            coordinate["velocity"]["x"]
        coordinate["position"]["y"] = coordinate["position"]["y"] + \
            coordinate["velocity"]["y"]

    return new_coordinates


def parse_data_from_coordinates(coordinates):
    cleaned_coordinates = []

    for coordinate in coordinates:
        list_of_coordinates = re.findall('-?\d+', coordinate)

        posX = int(list_of_coordinates[0])
        posY = int(list_of_coordinates[1])

        velocityX = int(list_of_coordinates[2])
        velocityY = int(list_of_coordinates[3])

        cleaned_coordinates.append({
            "position": {
                "x": posX,
                "y": posY
            },
            "velocity": {
                "x": velocityX,
                "y": velocityY
            }
        })
    return cleaned_coordinates


if __name__ == "__main__":
    main()
