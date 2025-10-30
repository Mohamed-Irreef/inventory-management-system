# inventory-management-system

# 🏭 StockFlow – MERN Inventory Management System

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
## 📸 Development Video

🎥 **Project Demo Video:** [Watch on GitHub](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/development.mp4?raw=true)

## 📸 Screenshots 

### 1. StockFlow Landing Page
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/landing.png)

### 2. StockFlow Admin Registration
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/signup.png)

### 3. StockFlow Company Registration
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/regsitration.png)

### 4. Inventory Dashboard 
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/dashboard1.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/dashboard2.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/dashboard3.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/dashboard4.png)

### 5. Inventory Page
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/inventory.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/inventory2.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/iventory-order-form1.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/iventory-order-form2.png)

### 6. Orders Management Page
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/orders-management.png)

### 7. Vendors Management
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/vendors-management.png)

### 8. Inbound Shipments
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/receiving.png)

### 9. Dispatch Page
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/dispatch.png)

### 10. Returns Management Page
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/returns.png)

### 11. Warehouse Map Page
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/warehouse-map1.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/warehouse-map2.png)

### 12. Dashboard Reports
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/reports1.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/reports2.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/reports3.png)

### 13. Support Page
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/supports.png)

### 14. Settings Page 
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/settings1.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/settings2.png)

### 15. Assistant Bot 
![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/dashboard-chatbot.png)

![Dashboard Screenshot](https://github.com/Mohamed-Irreef/inventory-management-system/blob/main/client/src/assets/screenshots/dashboard-chatbot2.png)

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
