import ast

def read(list):
    if list.stat().st_size == 0:
        print("The list is empty!")
    else:
        with open(list, "r") as openList:
          for item in openList:
            print(item, end = "")

def write(list, name, age):
    actualLine = 1
    with open(list, "r") as openList:
        for line in openList:
            actualLine += 1

    person = {"Index": actualLine, "Name": name, "Age": age}

    with open(list, "a") as openList:
        openList.write(str(person) + "\n")

def edit(list, index, newName, newAge):
    person = {"Index": index, "Name": newName, "Age": newAge}
    items = []

    with open(list, "r") as openList:
        openList.seek(0)
        for line in openList:
            items.append(ast.literal_eval(line))

    with open(list, "w") as openList:
        for item in items:
            if item["Index"] == index:
                openList.write(str(person) + "\n")
            else:
                openList.write(str(item) + "\n")

def exclude(list, index):
    items = []

    with open(list, "r") as openList:
        openList.seek(0)
        for line in openList:
            items.append(ast.literal_eval(line))

    with open(list, "w") as openList:
        for item in items:
            if item["Index"] < index:
                openList.write(str(item) + "\n")
            elif item["Index"] > index:
                item["Index"] -= 1
                openList.write(str(item) + "\n")