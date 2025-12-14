from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_add_sweet():
    payload = {
        "name": "Kaju Katli",
        "category": "Indian",
        "price": 40,
        "quantity": 20
    }

    response = client.post("/api/sweets/add", json=payload)

    assert response.status_code == 200
    assert response.json()["name"] == "Kaju Katli"

def test_get_sweets():
    response = client.get("/api/sweets/all")
    assert response.status_code == 200
