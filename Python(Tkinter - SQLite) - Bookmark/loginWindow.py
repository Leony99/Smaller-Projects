from tkinter import Tk, Label, Frame, Entry, Button
from pathlib import Path
from PIL import ImageTk

import functions
import loginCommands

def open():
    #window
    window = Tk()
    functions.centralizeAndResize(window, 400, 550)
    window.resizable(width=False, height=False)
    window.title("Bookmark")

    #window background label
    libraryBG = ImageTk.PhotoImage(file = Path(__file__).with_name("library.jpg"))
    bgLabel = Label(window, image=libraryBG)
    bgLabel.pack()

    #form
    formFrame = Frame(bgLabel, width=300, height=450, borderwidth=3, relief="solid", bg="white")
    formFrame.place(relx=0.5, rely=0.5, anchor="center")

    #signIn form
    signInHeader = Label(formFrame, text="Bookmark", font=("Helvetica", 14, "bold"), bg="white")
    signInHeader.place(relx=0.5, rely=0.05, anchor="center")

    emailEntry = Entry(formFrame, font=("Helvetica", 12), bd=0, fg="grey")
    emailEntry.place(relx=0.5, rely=0.125, anchor="center")
    emailEntry.insert(0, "Email")
    functions.emailEntryFocus(emailEntry)
    emailFrame = Frame(formFrame, width=185, height=2, bg="black")
    emailFrame.place(relx=0.5, rely=0.15, anchor="center")

    passwordEntry = Entry(formFrame, font=("Helvetica", 12), bd=0, fg="grey")
    passwordEntry.place(relx=0.5, rely=0.21, anchor="center")
    passwordEntry.insert(0, "Password")
    functions.passwordEntryFocus(passwordEntry)
    passwordFrame = Frame(formFrame, width=185, height=2, bg="black")
    passwordFrame.place(relx=0.5, rely=0.235, anchor="center")

    signInButton = Button(formFrame, text="Sign in", font=("Helvetica", 12, "bold"), cursor='hand2', bd=0, bg="black", fg="white",
                          command=lambda:loginCommands.sign_in(emailEntry, passwordEntry, window))
    signInButton.place(relx=0.5, rely=0.31, anchor="center")

    #signUp form
    orLabel = Label(formFrame, text='---------------------  OR  ---------------------', font=("Helvetica", 12, "bold"), bg='white')
    orLabel.place(relx=0.5, rely=0.4, anchor="center")

    orNameEntry = Entry(formFrame, font=("Helvetica", 12), bd=0, fg="grey")
    orNameEntry.place(relx=0.5, rely=0.475, anchor="center")
    orNameEntry.insert(0, "Name")
    functions.nameEntryFocus(orNameEntry)
    orNameFrame = Frame(formFrame, width=185, height=2, bg="black")
    orNameFrame.place(relx=0.5, rely=0.5, anchor="center")

    orEmailEntry = Entry(formFrame, font=("Helvetica", 12), bd=0, fg="grey")
    orEmailEntry.place(relx=0.5, rely=0.56, anchor="center")
    orEmailEntry.insert(0, "Email")
    functions.emailEntryFocus(orEmailEntry)
    orEmailFrame = Frame(formFrame, width=185, height=2, bg="black")
    orEmailFrame.place(relx=0.5, rely=0.585, anchor="center")

    orPasswordEntry = Entry(formFrame, font=("Helvetica", 12), bd=0, fg="grey")
    orPasswordEntry.place(relx=0.5, rely=0.645, anchor="center")
    orPasswordEntry.insert(0, "Password")
    functions.passwordEntryFocus(orPasswordEntry)
    orPasswordFrame = Frame(formFrame, width=185, height=2, bg="black")
    orPasswordFrame.place(relx=0.5, rely=0.67, anchor="center")

    orConfPasswordEntry = Entry(formFrame, font=("Helvetica", 12), bd=0, fg="grey")
    orConfPasswordEntry.place(relx=0.5, rely=0.73, anchor="center")
    orConfPasswordEntry.insert(0, "Confirm password")
    functions.confirmPasswordEntryFocus(orConfPasswordEntry)
    orConfPasswordFrame = Frame(formFrame, width=185, height=2, bg="black")
    orConfPasswordFrame.place(relx=0.5, rely=0.755, anchor="center")

    orCountryEntry = Entry(formFrame, font=("Helvetica", 12), bd=0, fg="grey")
    orCountryEntry.place(relx=0.5, rely=0.815, anchor="center")
    orCountryEntry.insert(0, "Country")
    functions.countryEntryFocus(orCountryEntry)
    orCountryFrame = Frame(formFrame, width=185, height=2, bg="black")
    orCountryFrame.place(relx=0.5, rely=0.84, anchor="center")

    signUpButton = Button(formFrame, text="Sign up", font=("Helvetica", 12, "bold"), cursor='hand2', bd=0, bg="black", fg="white",
                          command=lambda:loginCommands.sign_up(orNameEntry, orEmailEntry, orPasswordEntry, orConfPasswordEntry, orCountryEntry))
    signUpButton.place(relx=0.5, rely=0.915, anchor="center")

    window.mainloop()