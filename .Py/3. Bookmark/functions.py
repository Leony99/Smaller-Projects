import re
from tkinter import END
from win32api import GetMonitorInfo, MonitorFromPoint

def centralizeAndResize(window, width, height):
    monitor_info = GetMonitorInfo(MonitorFromPoint((0,0)))
    work_area = monitor_info.get("Work")

    x = (work_area[2]/2) - (width/2)
    y = (work_area[3]/2) - (height/2)

    window.geometry('%dx%d+%d+%d' % (width, height, x, y))

def emailEntryFocus(emailEntry):
    def focusIn(event):
        if emailEntry.get()=='Email':
            emailEntry.delete(0, END)
            emailEntry.config(fg="black")

    def focusOut(event):
        if emailEntry.get()=='':
            emailEntry.insert(0, "Email")
            emailEntry.config(fg="grey")

    emailEntry.bind('<FocusIn>', focusIn)
    emailEntry.bind('<FocusOut>', focusOut)

def passwordEntryFocus(passwordEntry):
    def focusIn(event):
        if passwordEntry.get()=='Password':
            passwordEntry.delete(0, END)
            passwordEntry.config(fg="black")
            passwordEntry.config(show='*')

    def focusOut(event):
        if passwordEntry.get()=="":
            passwordEntry.insert(0, "Password")
            passwordEntry.config(fg="grey")
            passwordEntry.config(show='')

    passwordEntry.bind('<FocusIn>', focusIn)
    passwordEntry.bind('<FocusOut>', focusOut)

def nameEntryFocus(orNameEntry):
    def focusIn(event):
        if orNameEntry.get()=='Name':
            orNameEntry.delete(0, END)
            orNameEntry.config(fg="black")

    def focusOut(event):
        if orNameEntry.get()=='':
            orNameEntry.insert(0, "Name")
            orNameEntry.config(fg="grey")

    orNameEntry.bind('<FocusIn>', focusIn)
    orNameEntry.bind('<FocusOut>', focusOut)

def confirmPasswordEntryFocus(passwordEntry):
    def focusIn(event):
        if passwordEntry.get()=='Confirm password':
            passwordEntry.delete(0, END)
            passwordEntry.config(fg="black")
            passwordEntry.config(show='*')

    def focusOut(event):
        if passwordEntry.get()=="":
            passwordEntry.insert(0, "Confirm password")
            passwordEntry.config(fg="grey")
            passwordEntry.config(show='')

    passwordEntry.bind('<FocusIn>', focusIn)
    passwordEntry.bind('<FocusOut>', focusOut)

def countryEntryFocus(orCountryEntry):
    def focusIn(event):
        if orCountryEntry.get()=='Country':
            orCountryEntry.delete(0, END)
            orCountryEntry.config(fg="black")

    def focusOut(event):
        if orCountryEntry.get()=='':
            orCountryEntry.insert(0, "Country")
            orCountryEntry.config(fg="grey")

    orCountryEntry.bind('<FocusIn>', focusIn)
    orCountryEntry.bind('<FocusOut>', focusOut)

def checkEmail(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'

    if(re.fullmatch(regex, email)):
        return "valid"
    else:
        return "invalid"