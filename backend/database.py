import sqlite3
from flask import g

db_name = "journal.db"

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(db_name)
    return db

def init_db():
    db = sqlite3.connect(db_name)
    cursor = db.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS journal_entries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date DATE,
            account TEXT,
            description TEXT,
            debit REAL,
            credit REAL
        )
    """)
    db.commit()
    db.close()