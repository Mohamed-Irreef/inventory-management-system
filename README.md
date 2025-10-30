# inventory-management-system

# 🏭 StockFlow – Intelligent Inventory Management System

StockFlow is a full-featured **MERN-based Inventory Management System** designed to simplify stock tracking, automate reordering, and visualize product locations through an **interactive warehouse map**.
It helps businesses efficiently manage their inventory, avoid shortages, and maintain real-time visibility over warehouse operations.

---

## 🚀 Features

* **Automatic Reordering System**
  Automatically places restock requests when product quantities drop below a predefined threshold.

* **Interactive Warehouse Map**
  Visually track the location of each product in the warehouse using an intuitive map interface.

* **Product Management**
  Add, update, delete, and search products with category and supplier filters.

* **Smart Dashboard**
  Real-time insights on stock levels, sales analytics, and reorder predictions.

* **Multi-User Authentication**
  Role-based access for Admin, Manager, and Staff with JWT authentication.

* **Responsive UI**
  Clean and modern interface designed with ReactJS and TailwindCSS for seamless user experience.

* **Secure Backend**
  Built using Express.js and Node.js with MongoDB as the database.

---

## 🧠 Tech Stack

**Frontend:** React.js, Konva js, Context API, Tailwind CSS
**Backend:** Node.js, Express.js
**Database:** MongoDB
**Authentication:** JWT (JSON Web Tokens)
**Version Control:** Git & GitHub

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Mohamed-Irreef/inventory-management-system.git
cd inventory-management-system
```

### 2. Install dependencies

```bash
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
```

### 3. Configure environment variables

Create a `.env` file inside both `server` and `client` directories:

```bash
# Example (server/.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Start the application

```bash
# Run backend
cd server
npm start

# Run frontend
cd ../client
npm start
```

The app will be running at
👉 Frontend: `http://localhost:3000`
👉 Backend: `http://localhost:5000`

---

## 🗺️ System Overview

```
User → React Frontend → Express.js API → MongoDB
                     ↳ Auto Reorder Engine
                     ↳ Warehouse Map Module
```

---

## 📸 Screenshots (optional)


![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/signup.png)
---

## 🧩 Folder Structure (example)

```
inventory-management-system/
├── client/        # React frontend
├── server/        # Node.js backend
├── .gitignore
├── README.md
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repo
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch and open a Pull Request

---

## 🪪 License

This project is licensed under the **MIT License** — you’re free to use, modify, and distribute it.

---

## 👨‍💻 Developed by

**Mohamed Irreef S**
MERN Stack Developer | Public Speaker | Motivator
🌐 [LinkedIn](https://www.linkedin.com/in/-mohamed-ireef-s-23-/)
💻 [GitHub](https://github.com/Mohamed-Irreef)
