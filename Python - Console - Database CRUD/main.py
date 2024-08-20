import sqlite3
from pathlib import Path
import functions

if __name__ == "__main__":

    db = Path(__file__).with_name('database.db')
    conn = sqlite3.connect(db)
    functions.create_persons_table(conn)

    i = 0
    while i != 4:
        print("====================List====================")
        functions.read_persons(conn)
        print("============================================\n[1]Write\n[2]Edit\n[3]Exclude\n[4]Close\n============================================")
        i = int(input("insert the option: "))

        if i == 1:
            id = int(input("\nInsert the id: "))
            name = input("Insert the name: ")
            age = int(input("Insert the age: "))
            height = float(input("Insert the height: "))
            functions.insert_person(conn, id, name, age, height)
            print("\nPerson added!\n\n\n")

        if i == 2:
            id = int(input("\nInsert the id of the person to edit: "))
            newId = int(input("Insert the new id: "))
            newName = input("Insert the new name: ")
            newAge = int(input("Insert the new age: "))
            newHeight = float(input("Insert the new height: "))
            functions.edit_person(conn, id,newId, newName, newAge, newHeight)
            print("\nPerson updated!\n\n\n")

        if i == 3:
            id = int(input("\nInsert the id of the person to exclude: "))
            functions.delete_person(conn, id)
            print("\nPerson excluded!\n\n\n")