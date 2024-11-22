from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import bcrypt
from stockAPI import applyStrategy
from typing import List

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
        gender TEXT,
        investidor TEXT
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

class UserLogin(BaseModel):
    email: str
    password: str

class UserProfileUpdate(BaseModel):
    nome: str
    email: str
    dataNascimento: str
    genero: str
    tipoInvestidor: str

class UserQuizResult(BaseModel):
    resultado: str

class Ticker(BaseModel):
    tickerName: str

authenticated_user_email = None  # Variable to store authenticated user's email

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
    global authenticated_user_email
    authenticated_user_email = user.email  # Automatically log in the user after registration
    return {"message": "User registered successfully!"}

# Login route
@app.post("/api/login")
async def login(user: UserLogin):
    global authenticated_user_email
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

    authenticated_user_email = user.email  # Store authenticated user's email
    return {"message": "User logged in successfully!"}

# Get profile route
@app.get("/api/getprofile")
async def get_profile():
    global authenticated_user_email
    if not authenticated_user_email:
        raise HTTPException(status_code=401, detail="User not authenticated")

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute("SELECT username, email, birthDay, birthMonth, birthYear, gender, investidor FROM users WHERE email = ?", (authenticated_user_email,))
    result = cursor.fetchone()
    conn.close()

    if not result:
        raise HTTPException(status_code=404, detail="User not found")

    nome = result[0]
    email = result[1]
    dataNascimento = f"{result[2]}/{result[3]}/{result[4]}"
    genero = result[5]
    tipoInvestidor = result[6]  # This is a placeholder. Replace with actual logic to fetch 'tipoInvestidor'

    return {
        "nome": nome,
        "email": email,
        "dataNascimento": dataNascimento,
        "genero": genero,
        "tipoInvestidor": tipoInvestidor
    }

@app.post("/api/updateprofile")
async def update_profile(user: UserProfileUpdate):
    global authenticated_user_email
    if not authenticated_user_email:
        raise HTTPException(status_code=401, detail="User not authenticated")

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    birthDay, birthMonth, birthYear = user.dataNascimento.split('/')

    try:
        cursor.execute("""
            UPDATE users
            SET username = ?, email = ?, birthDay = ?, birthMonth = ?, birthYear = ?, gender = ?, investidor = ?
            WHERE email = ?
        """, (user.nome, user.email, birthDay, birthMonth, birthYear, user.genero, user.tipoInvestidor, authenticated_user_email))
        conn.commit()
    except sqlite3.Error as e:
        conn.close()
        print(f"SQLite error: {e.args[0]}")  # Log the error message
        raise HTTPException(status_code=500, detail=f"Update failed: {e.args[0]}")
    
    conn.close()
    authenticated_user_email = user.email  # Update the authenticated user's email if it was changed
    return {"message": "Profile updated successfully!"}

@app.post("/api/quizresult")
async def quiz_result(user: UserQuizResult):
    global authenticated_user_email
    if not authenticated_user_email:
        raise HTTPException(status_code=401, detail="User not authenticated")

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    try:
        cursor.execute("""
            UPDATE users
            SET investidor = ?
            WHERE email = ?
        """, (user.resultado, authenticated_user_email))
        conn.commit()
    except sqlite3.Error as e:
        conn.close()
        print(f"SQLite error: {e.args[0]}")  # Log the error message
        raise HTTPException(status_code=500, detail=f"Update failed: {e.args[0]}")
    
    conn.close()
    return {"message": "Investment type updated successfully!"}

@app.post("/api/simulateStrategy")
async def simulateStrategy(ticker: Ticker):
    simulatedResult = applyStrategy([ticker.tickerName])[0]
    simulatedResult = simulatedResult['Total Return'].to_list()
    return {'values': simulatedResult}