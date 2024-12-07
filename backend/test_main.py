import pytest
import sqlite3
import bcrypt
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

# Fixture to set up and tear down a test database
@pytest.fixture(autouse=True)
def setup_test_database():
    """
    Set up a temporary SQLite database for testing.
    """
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    # Create a test users table
    cursor.execute("CREATE TABLE IF NOT EXISTS users (email TEXT, password TEXT)")
    # Insert a test user with a hashed password
    hashed_password = bcrypt.hashpw("testpassword".encode("utf-8"), bcrypt.gensalt())
    cursor.execute("INSERT INTO users (email, password) VALUES (?, ?)", ("test@example.com", hashed_password))
    conn.commit()
    conn.close()
    yield
    # Teardown the database after tests
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("DROP TABLE users")
    conn.close()

def test_successful_login():
    """
    Test login with valid credentials.
    """
    user_data = {"email": "test@example.com", "password": "testpassword"}
    response = client.post("/api/login", json=user_data)
    assert response.status_code == 200
    assert response.json() == {"message": "User logged in successfully!"}

def test_invalid_email():
    """
    Test login with an email not in the database.
    """
    user_data = {"email": "invalid@example.com", "password": "testpassword"}
    response = client.post("/api/login", json=user_data)
    assert response.status_code == 400
    assert response.json()["detail"] == "Invalid email or password"

def test_invalid_password():
    """
    Test login with a wrong password.
    """
    user_data = {"email": "test@example.com", "password": "wrongpassword"}
    response = client.post("/api/login", json=user_data)
    assert response.status_code == 400
    assert response.json()["detail"] == "Invalid email or password"

def test_empty_email_field():
    """
    Test login with an empty email field.
    """
    user_data = {"email": "", "password": "testpassword"}
    response = client.post("/api/login", json=user_data)
    assert response.status_code == 400

def test_empty_password_field():
    """
    Test login with an empty password field.
    """
    user_data = {"email": "test@example.com", "password": ""}
    response = client.post("/api/login", json=user_data)
    assert response.status_code == 400
