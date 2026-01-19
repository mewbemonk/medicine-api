# 💊 Medicine API

A Node.js + Express + MongoDB based REST API for managing and searching medicines.  
This API supports filtering, searching, and serves as a backend for React or any frontend application.

---

## 📁 Project Structure

medicine_api/
├── database/
│ ├── db.js # MongoDB connection logic
│ └── med_schema.js # Mongoose schema for medicine
├── dataset/
│ └── product.json # Initial medicine data
├── route/
│ └── router.js # API routes
├── api.js # Controller logic
├── server.js # Express app entry point
├── .env # Environment variables
├── README.md # Project documentation



---

## 🚀 Features

- MongoDB connection using Mongoose
- REST API built with Express
- Medicine search using query parameters
- Case-insensitive search using regex
- Environment variable support using dotenv
- Clean folder structure (MVC-style)

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv**
- **CORS**

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/mewbemonk/medicine-api.git
cd medicine_api


2️⃣ Install dependencies

npm install


3️⃣ Create .env file (project root)

PORT=8000
DB_URL=mongodb+srv://<username>:<password>@<cluster-url>/medicineDB



4️⃣ Start the server
node server.js


Server will run on:
http://localhost:8000


📡 API Endpoints
🔹 Test API

GET /api


Response:

"medicine-api is live"


🔹 Get all medicines
GET /api

🔹 Search medicines (case-insensitive)
GET /api?q=paracetamol


Search works on:

medicine_name

generic_name

category

🔹 Filter using fields
GET /api?category=Pain & Fever
GET /api?genre=generic


🔹 Search medicines (case-insensitive)
GET /api?q=paracetamol


Search works on:

medicine_name

generic_name

category

🔹 Filter using fields
GET /api?category=Pain & Fever
GET /api?genre=generic

🧪 Example Medicine Object
{
  "medicine_name": "Paracetamol 500mg Tablet",
  "generic_name": "Paracetamol 500mg",
  "genre": "generic",
  "category": "Pain & Fever",
  "price_inr": 15,
  "image_url": "https://example.com/image.jpg"
}

🧠 Notes

This project uses "type": "module" (ES Modules)

All import paths must include .js

Folder and file names are case-sensitive

JSON imports use assert { type: "json" }

📌 Future Improvements

Pagination

Sorting

Price range filters

Authentication (JWT)

Admin panel

Deployment (Render / Railway)

👨‍💻 Author

Rishabh Pandey
Backend Developer | Node.js | MongoDB

## Medicine API

Base URL: https://medicine-api-n2rg.onrender.com/api

### Endpoints
- GET /api → List of medicines
