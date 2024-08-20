from tkinter import Button, Frame, Scrollbar, Tk, Label, ttk
from pathlib import Path
from PIL import ImageTk

import functions
import mainWindowCommands

def open(id):
    #window
    window = Tk()
    functions.centralizeAndResize(window, 700, 500)
    window.resizable(width=False, height=False)
    window.title("Bookmark")

    #window background label
    libraryBG = ImageTk.PhotoImage(file = Path(__file__).with_name("library.jpg"))
    bgLabel = Label(window, image=libraryBG)
    bgLabel.pack()

    #Header frame
    headerFrame = Frame(bgLabel, width=400, height=80, borderwidth=3, relief="solid", bg="white")
    headerFrame.place(relx=0.5, y=30, anchor="n")

    labelName = Label(headerFrame, text="Name:", font=("Helvetica", 12), bg="white")
    labelName.place(x=0, y=0)
    nameLabel = Label(headerFrame, text="getname", font=("Helvetica", 12), bg="white")
    nameLabel.place(x=60, y=0)

    labelEmail = Label(headerFrame, text="Email:", font=("Helvetica", 12), bg="white")
    labelEmail.place(x=0, y=25)
    emailLabel = Label(headerFrame, text="getemail", font=("Helvetica", 12), bg="white")
    emailLabel.place(x=60, y=25)

    labelCountry = Label(headerFrame, text="Country:", font=("Helvetica", 12), bg="white")
    labelCountry.place(x=0, y=50)
    countryLabel = Label(headerFrame, text="getcountry", font=("Helvetica", 12), bg="white")
    countryLabel.place(x=60, y=50)

    btnExit = Button(headerFrame, text="Log out", font=("Helvetica", 12, "bold"), cursor='hand2', bd=0, bg="black", fg="white",
                     command=lambda:mainWindowCommands.logout(window))
    btnExit.place(x=300, y=22)

    #control books frame
    controlBooksFrame = Frame(bgLabel, width=600, height=80, borderwidth=3, relief="solid", bg="white")
    controlBooksFrame.place(relx=0.5, y=140, anchor="n")

    addBtn = Button(controlBooksFrame, text="Add book", font=("Helvetica", 12, "bold"), cursor='hand2', bd=0, bg="black", fg="white",
                    command=lambda:mainWindowCommands.addBook(id, treeview))
    addBtn.grid(row=0, column=0, padx=10, pady=10)

    editBtn = Button(controlBooksFrame, text="Edit book", font=("Helvetica", 12, "bold"), cursor='hand2', bd=0, bg="black", fg="white",
                     command=lambda:mainWindowCommands.editBook(id, treeview))
    editBtn.grid(row=0, column=1, padx=10, pady=10)

    excludeBtn = Button(controlBooksFrame, text="Exclude book", font=("Helvetica", 12, "bold"), cursor='hand2', bd=0, bg="black", fg="white",
                        command=lambda:mainWindowCommands.excludeBook(id, treeview))
    excludeBtn.grid(row=0, column=2, padx=10, pady=10)

    #Books frame
    booksFrame = Frame(bgLabel, width=600, height=300, borderwidth=3, relief="solid", bg="white")
    booksFrame.place(relx=0.5, y=220, anchor="n")

    scrollbarY = Scrollbar(booksFrame, orient="vertical")

    treeview = ttk.Treeview(booksFrame, columns=("Book name", "Book author", "Actual page"), show="headings", yscrollcommand=scrollbarY.set)
    treeview.heading("Book name", text="Book name")
    treeview.heading("Book author", text="Book author")
    treeview.heading("Actual page", text="Actual page")
    treeview.column("Book name", anchor="center")
    treeview.column("Book author", anchor="center")
    treeview.column("Actual page", anchor="center")
    scrollbarY.config(command=treeview.yview)
    scrollbarY.pack(side="right", fill="y")
    treeview.pack()

    mainWindowCommands.setHeaderInfo(id, nameLabel, emailLabel, countryLabel)
    mainWindowCommands.setTreeviewInfo(id, treeview)

    window.mainloop()