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
