# 🎨 Sweet Shop Frontend

Sweet Shop Frontend is a React-based web application that provides the user interface for the Sweet Shop Management System. It connects to the FastAPI backend to enable authentication, role-based access, browsing sweets, filtering, and purchasing.

---

## 🚀 Features

- User authentication with backend API (JWT-based)  
- Role-based UI (Admin / User)  
- Admin dashboard to add, update, and delete sweets  
- User interface to view, filter, and purchase sweets  
- Real-time stock updates (purchase disabled when quantity = 0)  
- Filtering options by category, price range, and availability  
- Responsive design for desktop and mobile  
- Testing setup with React Testing Library and Jest  

---

## 🧰 Tech Stack
- React (v19+) – core library for building the UI  
- React DOM – rendering components to the browser  
- React Scripts (CRA) – development and build configuration  
- Testing Library (React, DOM, Jest, User Event) – for writing and running tests  
- Web Vitals – performance monitoring and optimization  
- CSS / Material-UI – styling and responsive design  

---

## 📂 Project Structure
```text
sweet-shop-frontend/
│
├── public/              
├── src/
│   ├── components/      
│   ├── pages/           
│   ├── services/        
│   ├── App.js           
│   ├── index.js        
│   └── styles/          
├── package.json
├── README.md
└── node_modules/
```
## ▶️ Setup & Usage
Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

## Installation
- Install dependencies
```
npm install
```
## Run in development
```

npm start
```
- App runs at: http://localhost:3000

- Connects to backend API at: http://127.0.0.1:8000
## Build for production
```bash
npm run build
```
- Optimized build will be created in the build/ folder.

## Testing
```bash
npm test
```
- Runs tests in watch mode using React Testing Library and Jest.

## 🔗 Backend Integration
This frontend communicates with the Sweet Shop Backend (FastAPI).

- Backend repo:https://github.com/Thakur027/sweet-shop-backend

- API base URL: http://127.0.0.1:8000

Ensure backend is running before starting the frontend.
## 📌 Notes
- CORS enabled: Backend allows requests from frontend domain.

- Environment variables: Configure API base URL in .env file if needed.

- Role-based UI: Admin routes and components are protected.

- Stock logic: Purchase button disabled when quantity reaches zero.

## 👨‍💻 Author
- Name: Shinoy Thakur

- GitHub: Thakur027



