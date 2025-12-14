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
Demo credentials for testing:

Admin User
```
username: admin
password: admin123
```
Normal User
```
username: user
password: user123
```

## 👮 Admin Roles
- Add new sweets to inventory
- Update existing sweet details
- Delete sweets from the shop
- View all sweets (including out-of-stock)
- Manage stock quantity for each sweet
- Access protected admin-only routes

## 🧑‍💼 User Roles
- View available sweets
- Filter sweets by category, price, and availability
- Purchase sweets (only if quantity > 0)
- Access user-specific routes


## 🧪 Testing

Run all test cases using:
```
pytest
```
 ## 🗃️ Database Details

Database: SQLite
```
Database file: sweetshop.db
```



## 📌 Notes
- **Automatic purchase blocking:** When stock quantity reaches zero, the purchase option is disabled to prevent overselling.
- **CORS enabled:** Configured to allow seamless integration with the React frontend application.
- **Protected admin routes:** All admin-specific endpoints are secured with role-based access control to ensure only authorized users can access them.
- **Backend only repository:** This project contains backend logic and APIs; the frontend is managed separately in a dedicated React project.


## 🤖 AI Usage
Artificial Intelligence tools were used as a supportive resource during development. They helped streamline the process, improve clarity, and enhance overall quality, but the application’s logic and decisions were carefully designed and implemented by the developer.

AI contributed to:
- Exploring and applying FastAPI best practices
- Structuring REST API endpoints in a clean and maintainable way
- Improving code readability and organization
- Assisting in writing and refining test cases
- Enhancing documentation and formatting (README and project notes)
- Identifying and resolving errors more efficiently

All core business logic, API flow, and implementation details were thoughtfully reviewed, customized, and built manually to ensure the project reflects the developer’s own design and decision-making.

## 👨‍💻 Author
Shinoy Thakur
GitHub: https://github.com/Thakur027

