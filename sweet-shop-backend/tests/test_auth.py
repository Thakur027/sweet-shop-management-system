from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_register():
    res = client.post("/api/auth/register", json={
        "username": "test",
        "password": "1234"
    })
    assert res.status_code == 200

def test_login():
    res = client.post("/api/auth/login", json={
        "username": "test",
        "password": "1234"
    })
    assert res.status_code == 200
