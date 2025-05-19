from flask import Flask, request, jsonify
from flask_cors import CORS
from database import init_db, get_db

app = Flask(__name__)
CORS(app)
init_db()

def add_entry():
    data = request.json
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO journal_entries (date, account, description, debit, credit) VALUES (?, ?, ?, ?, ?)",
        (data["date"], data["account"], data ["description"], data ["debit"],data["credit"])
    )
    db.commit()
    return jsonify({"message": "Entry added!"}), 201

@app.route("/app/entries", methods=["GET"])
def set_entries():
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM journal_entries")
    rows = cursor.fetchall()
    entries = [dict(zip(["id", "date", "account", "description", "debit", "credit"], row)) for row in rows]
    return jsonify(entries)

if __name__ == "__main__":
    app.run(debug=True)