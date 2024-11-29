import pytest
from fastapi.testclient import TestClient
from main import app  # Assuming your FastAPI app is in 'main.py'

client = TestClient(app)

@pytest.fixture(scope="module")
def create_user():
    # Register a new user before each test
    user_data = {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "password": "password123",
        "birthDay": "15",
        "birthMonth": "05",
        "birthYear": "1990",
        "gender": "Male"
    }

    response = client.post("/api/register", json=user_data)
    assert response.status_code == 200
    assert response.json() == {"message": "User registered successfully!"}
    return user_data

def test_register(create_user):
    # This test is covered by the fixture `create_user`
    pass

def test_login(create_user):
    login_data = {
        "email": create_user["email"],
        "password": create_user["password"]
    }

    # Attempt to log in with the registered user
    response = client.post("/api/login", json=login_data)
    
    assert response.status_code == 200
    assert response.json() == {"message": "User logged in successfully!"}

def test_register_with_existing_email():
    user_data = {
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "john.doe@example.com",  # Same email as created earlier
        "password": "newpassword123",
        "birthDay": "10",
        "birthMonth": "10",
        "birthYear": "1992",
        "gender": "Female"
    }

    # Attempt to register with an email that's already in use
    response = client.post("/api/register", json=user_data)
    
    assert response.status_code == 400
    assert response.json() == {"detail": "Email already registered"}

def test_get_profile(create_user):
    # Simulate login first by posting login request
    login_data = {
        "email": create_user["email"],
        "password": create_user["password"]
    }
    login_response = client.post("/api/login", json=login_data)
    assert login_response.status_code == 200

    # Now, check the profile
    response = client.get("/api/getprofile")
    
    assert response.status_code == 200
    assert "email" in response.json()  # Check if profile contains email
    assert response.json()["email"] == create_user["email"]
