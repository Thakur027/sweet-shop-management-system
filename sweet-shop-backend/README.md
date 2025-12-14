# 🍬 Sweet Shop Management Backend

Sweet Shop Management Backend is a FastAPI-based backend application used to manage a sweet shop with authentication, role-based access control, inventory management, filtering, and purchase functionality.

This repository contains **backend only**. Frontend (React) is handled as a separate project.

---

## 🚀 Features

- User & Admin authentication
- Role-based access control (Admin / User)
- Admin can add, update, and delete sweets
- Users can view, filter, and purchase sweets
- Quantity-based stock management
- Purchase is automatically blocked when quantity becomes 0
- Filter sweets by category, price range, and availability
- SQLite database for persistence
- Pytest test cases included
- Swagger API documentation available

---

## 🧰 Tech Stack

- Python
- FastAPI
- SQLAlchemy
- SQLite
- Pytest

---

## 📂 Project Structure

```text
sweet-shop-backend/
│
├── app/
│   ├── main.py
│   ├── auth.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── sweets.py
│   └── __init__.py
│
├── tests/
│   ├── test_auth.py
│   ├── test_sweets.py
│   └── __init__.py
│
├── .gitignore
├── sweetshop.db
└── README.md
```





## ▶️ Run the Application


Install dependencies:
```
pip install -r requirements.txt
```
start the backend server:
```
uvicorn app.main:app --reload
```
Backend API will be available at:
```
http://127.0.0.1:8000
```
Swagger API documentation:
```
http://127.0.0.1:8000/docs
```

## 🔐 Authentication
