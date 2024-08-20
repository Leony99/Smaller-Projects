from pathlib import Path
import os
import functions

if __name__ == "__main__":

    list = Path(__file__).with_name('list.txt')
    if not os.path.exists(list):
        open(list, "x")

    i = 0
    while i != 4:
        print("====================List====================")
        functions.read(list)
        print("============================================\n[1]Write\n[2]Edit\n[3]Exclude\n[4]Close\n============================================")
        i = int(input("insert the option: "))

        if i == 1:
            name = input("\nInsert the name: ")
            age = int(input("Insert the age: "))
            functions.write(list, name, age)
            print("Item added!\n\n\n")

        if i == 2:
            index = int(input("\nInsert the index of the item to edit: "))
            newName = input("Insert the new name: ")
            newAge = int(input("Insert the new age: "))
            functions.edit(list, index, newName, newAge)
            print("Item updated!\n\n\n")

        if i == 3:
            index = int(input("\nInsert the index of the item to exclude: "))
            functions.exclude(list, index)
            print("Item excluded!\n\n\n")