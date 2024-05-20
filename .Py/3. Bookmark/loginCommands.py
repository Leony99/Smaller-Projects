from tkinter import messagebox
from pathlib import Path
import sqlite3

import functions
import mainWindow

db = Path(__file__).with_name('database.db')
conn = sqlite3.connect(db)
cursor = conn.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
email TEXT,
password TEXT,
country TEXT);""")

def sign_up(orNameEntry, orEmailEntry, orPasswordEntry, orConfPasswordEntry, orCountryEntry):
    name = orNameEntry.get()
    email = orEmailEntry.get()
    password = orPasswordEntry.get()
    confPassword = orConfPasswordEntry.get()
    country = orCountryEntry.get()

    if name == "" or email == "" or password == "" or confPassword == "" or country == "":
        messagebox.showerror("Error", "All fields are required!")
    elif password != confPassword:
        messagebox.showerror("Error", "Passwords do not match!")
    elif functions.checkEmail(email) == "invalid":
        messagebox.showerror("Error", "Please, inser a valid email!")
    else:
        cursor.execute("""SELECT email FROM users WHERE email=?""", [email])
        if cursor.fetchone() is not None:
            messagebox.showerror("Error", "Email already registered!")
        else:
            cursor.execute("""INSERT INTO users VALUES(?, ?, ?, ?, ?)""", [None, name, email, password, country])
            conn.commit()
            messagebox.showinfo("Success", "Account has been created!")

def sign_in(emailEntry, passwordEntry, window):
    email = emailEntry.get()
    password = passwordEntry.get()

    if email == "" or password == "":
        messagebox.showerror("Error", "All fields are required!")
    else:
        cursor.execute("""SELECT password FROM users WHERE email=?""", [email])
        result = cursor.fetchone()
        if result is not None:
            result = result[0]
            if result == password:
                cursor.execute("""SELECT id FROM users WHERE email=?""", [email])
                id = cursor.fetchone()[0]
                print(id)
                window.destroy()
                mainWindow.open(id)
            else:
                messagebox.showerror("Error", "Invalid password!")
        else:
            messagebox.showerror("Error", "Invalid mail!")