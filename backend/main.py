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
        password TEXT,
        birthDay TEXT,
        birthMonth TEXT,
        birthYear TEXT,
        gender TEXT
    )''')
    
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
    
    # Check if the email already exists
    cursor.execute("SELECT * FROM users WHERE email = ?", (user.email,))
    if cursor.fetchone():
        conn.close()
        raise HTTPException(status_code=400, detail="Email already registered")
    
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

class UserLogin(BaseModel):
    email: str
    password: str

@app.post("/api/login")
async def login(user: UserLogin):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute("SELECT password FROM users WHERE email = ?", (user.email,))
    result = cursor.fetchone()
    conn.close()

    if not result:
        raise HTTPException(status_code=400, detail="Invalid email or password")

    stored_password = result[0]

    if not bcrypt.checkpw(user.password.encode('utf-8'), stored_password):
        raise HTTPException(status_code=400, detail="Invalid email or password")

    return {"message": "User logged in successfully!"}
