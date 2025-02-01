from tkinter import Entry, Label, Toplevel, messagebox, ttk
from pathlib import Path
import sqlite3

import functions
import loginWindow

db = Path(__file__).with_name('database.db')
conn = sqlite3.connect(db)
cursor = conn.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS books(
userId INTEGER,
bookName TEXT,
bookAuthor TEXT,
actualPage INTEGER);""")

def logout(window):
    window.destroy()
    loginWindow.open()

def setHeaderInfo(id, nameLabel, emailLabel, countryLabel):
    cursor.execute("""SELECT * FROM users WHERE id=?""", [id])
    info = cursor.fetchone()

    nameLabel.config(text=info[1])
    emailLabel.config(text=info[2])
    countryLabel.config(text=info[4])

def setTreeviewInfo(id, treeview):
    cursor.execute("""SELECT * FROM books WHERE userId=?""", [id])
    books = cursor.fetchall()

    for item in treeview.get_children():
      treeview.delete(item)

    for book in books:
        treeview.insert("", "end",values=(book[1], book[2], book[3]))

def addBook(id, treeview):
    addWindow = Toplevel()
    addWindow.title("Add book")
    functions.centralizeAndResize(addWindow, 430, 220)
    addWindow.resizable(False, False)

    nameLabel = Label(addWindow, text='Book name:', font=("Helvetica", 12, "bold"))
    nameLabel.grid(row=1, column=0, padx=30, pady=15, sticky="w")
    nameEntry = Entry(addWindow, font=("Helvetica", 12), width=24)
    nameEntry.grid(row=1, column=1, pady=15, padx=10)

    authorLabel = Label(addWindow, text='Author name', font=("Helvetica", 12, "bold"))
    authorLabel.grid(row=2, column=0, padx=30, pady=15, sticky="w")
    authorEntry = Entry(addWindow, font=("Helvetica", 12), width=24)
    authorEntry.grid(row=2, column=1, pady=15, padx=10)

    pageLabel = Label(addWindow, text='Actual page', font=("Helvetica", 12, "bold"))
    pageLabel.grid(row=3, column=0, padx=30, pady=15, sticky="w")
    pageEntry = Entry(addWindow, font=("Helvetica", 12), width=24)
    pageEntry.grid(row=3, column=1, pady=15, padx=10)

    addButton = ttk.Button(addWindow, text="Add", command=lambda:add())
    addButton.grid(row=7, columnspan=2, pady=15)

    def add():
        bookName = nameEntry.get()
        bookAuthor = authorEntry.get()
        actualPage = pageEntry.get()

        if bookName == "" or bookAuthor == "" or actualPage == "":
            messagebox.showerror("Error", "All fields are required!")
        else:
            cursor.execute("""INSERT INTO books (userId, bookName, bookAuthor, actualPage)
            VALUES (?, ?, ?, ?);""", (id, bookName, bookAuthor, int(actualPage)))
            conn.commit()

            setTreeviewInfo(id, treeview)
            addWindow.destroy()

def editBook(id, treeview):
    indexing = treeview.focus()
    content = treeview.item(indexing)

    if content["values"] != "":
        editWindow = Toplevel()
        editWindow.title("edit book")
        functions.centralizeAndResize(editWindow,430,220)
        editWindow.resizable(False, False)

        nameLabel = Label(editWindow, text='Book name:', font=("Helvetica", 12, "bold"))
        nameLabel.grid(row=1, column=0, padx=30, pady=15, sticky="w")
        nameEntry = Entry(editWindow, font=("Helvetica", 12), width=24)
        nameEntry.insert(0, content["values"][0])
        nameEntry.grid(row=1, column=1, pady=15, padx=10)

        authorLabel = Label(editWindow, text='Author name', font=("Helvetica", 12, "bold"))
        authorLabel.grid(row=2, column=0, padx=30, pady=15, sticky="w")
        authorEntry = Entry(editWindow, font=("Helvetica", 12), width=24)
        authorEntry.insert(0, content["values"][1])
        authorEntry.grid(row=2, column=1, pady=15, padx=10)

        pageLabel = Label(editWindow, text='Actual page', font=("Helvetica", 12, "bold"))
        pageLabel.grid(row=3, column=0, padx=30, pady=15, sticky="w")
        pageEntry = Entry(editWindow, font=("Helvetica", 12), width=24)
        pageEntry.insert(0, content["values"][2])
        pageEntry.grid(row=3, column=1, pady=15, padx=10)

        addButton = ttk.Button(editWindow, text="Edit", command=lambda:edit())
        addButton.grid(row=7, columnspan=2, pady=15)

        def edit():
            bookName = nameEntry.get()
            bookAuthor = authorEntry.get()
            actualPage = pageEntry.get()

            if bookName == "" or bookAuthor == "" or actualPage == "":
                messagebox.showerror("Error", "All fields are required!")
            else:
                cursor.execute("""UPDATE books SET bookName=?, bookAuthor=?, actualPage=?
                WHERE userId = ? AND bookName=? AND bookAuthor=? AND actualPage=?;""",
                (bookName, bookAuthor, actualPage, id, content["values"][0], content["values"][1], int(content["values"][2])))
                conn.commit()

                setTreeviewInfo(id, treeview)
                editWindow.destroy()

    else:
        messagebox.showwarning("warning", "Select a book!")

def excludeBook(id, treeview):
    indexing = treeview.focus()
    content = treeview.item(indexing)

    if content["values"] != "":
        cursor.execute("""DELETE FROM books
        WHERE userId=? AND bookName=? AND bookAuthor=? AND actualPage=?;""",
        (id, content["values"][0], content["values"][1], int(content["values"][2])))
        conn.commit()

        setTreeviewInfo(id, treeview)

    else:
        messagebox.showwarning("warning", "Select a book!")