def create_persons_table(conn):
    with conn:
        conn.execute("""CREATE TABLE IF NOT EXISTS persons(
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER,
        height REAL);""")

def read_persons(conn):
    with conn:
        select_all = conn.execute("""SELECT * FROM persons;""")

        for line in select_all.fetchall():
            print(line)

def insert_person(conn, id, name, age, height):
    with conn:
        conn.execute("""INSERT INTO persons (id, name, age, height)
        VALUES (?, ?, ?, ?);""", (id, name, age, height))

def edit_person(conn, id, newId, newName, newAge, newHeight):
    with conn:
        conn.execute("""UPDATE persons
        SET id = ?, name = ?, age = ?, height = ?
        WHERE id = ?;""", (newId, newName, newAge, newHeight, id))

def delete_person(conn, id):
    with conn:
        conn.execute("""DELETE FROM persons WHERE id = ?;""", (id,))