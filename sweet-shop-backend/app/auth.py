from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    username: str
    password: str

@router.post("/login")
def login(data: LoginRequest):
    # DEMO ROLE LOGIC
    if data.username == "admin":
        role = "admin"
    else:
        role = "user"

    return {
        "username": data.username,
        "role": role
    }
