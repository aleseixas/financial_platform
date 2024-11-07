from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import bcrypt

app = FastAPI()

# Enable CORS for your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust as necessary
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the SQLite database
def init_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT,
        password TEXT
    )''')
    
    # Check and add new columns if they don't exist
    cursor.execute("PRAGMA table_info(users)")
    columns = [column[1] for column in cursor.fetchall()]
    
    if 'birthDay' not in columns:
        cursor.execute('''ALTER TABLE users ADD COLUMN birthDay TEXT''')
    if 'birthMonth' not in columns:
        cursor.execute('''ALTER TABLE users ADD COLUMN birthMonth TEXT''')
    if 'birthYear' not in columns:
        cursor.execute('''ALTER TABLE users ADD COLUMN birthYear TEXT''')
    if 'gender' not in columns:
        cursor.execute('''ALTER TABLE users ADD COLUMN gender TEXT''')
    
    conn.commit()
    conn.close()

init_db()

# Pydantic model for request data validation
class UserRegister(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str
    birthDay: str
    birthMonth: str
    birthYear: str
    gender: str

# Registration route
@app.post("/api/register")
async def register(user: UserRegister):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    # Hash the password
    hashed_password = bcrypt.hashpw(user.password.encode('utf-8'), bcrypt.gensalt())

    try:
        cursor.execute("INSERT INTO users (username, email, password, birthDay, birthMonth, birthYear, gender) VALUES (?, ?, ?, ?, ?, ?, ?)",
                       (user.firstName, user.email, hashed_password, user.birthDay, user.birthMonth, user.birthYear, user.gender))
        conn.commit()
    except sqlite3.Error as e:
        conn.close()
        print(f"SQLite error: {e.args[0]}")  # Log the error message
        raise HTTPException(status_code=500, detail=f"Registration failed: {e.args[0]}")
    conn.close()
    return {"message": "User registered successfully!"}
