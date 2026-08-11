# 🌱 Farm Fresh Product Selling Platform

A full-stack **Farm Fresh Product Selling Platform** that connects farmers and consumers directly, allowing producers to list their fresh farm products and consumers to browse available products.

The application provides user authentication, producer product management, consumer browsing, product details, and user-specific product management through a **React frontend, Node.js/Express backend, and MongoDB database**.

---

## 🚀 Live Demo

🌐 **Live Application:**
https://farm-fresh-rosy.vercel.app/

💻 **GitHub Repository:**
https://github.com/Prasath-Rama-Krishnan/Farm-fresh

---

## 🧠 Project Overview

The platform is designed to reduce the dependency on intermediaries by providing a simple way for farmers/producers to list their products and make them visible to consumers.

A producer can add details such as:

* Producer name
* Contact number
* Address
* Product name
* Product variety
* Price
* Quantity
* Product description

Consumers can browse products listed by producers and view the available product information.

Each product is associated with the user who added it, allowing the application to provide user-specific product management.

---

## ✨ Features

### 🔐 User Authentication

The application supports multiple authentication methods:

* User registration with email and password
* Secure password hashing using **bcrypt**
* Login using email and password
* **Google Sign-In**
* JWT-based authentication
* 24-hour JWT token expiration
* Password setup for Google-authenticated users

The backend implements separate registration, login, Google authentication, and password-setting endpoints.

---

### 👨‍🌾 Producer Dashboard

Producers can add and manage their farm products.

Product information includes:

* Producer name
* Contact number
* Address
* Product variety
* Product name
* Price
* Quantity
* Description

Each product is stored with the corresponding user ID and email.

---

### 🛒 Consumer Product Browsing

Consumers can browse products listed by producers.

The application provides product information so users can discover fresh farm products available from different producers.

---

### ✏️ Product Management

Producers can manage their listed products through:

* Add product
* View products
* Update product
* Delete product

The backend provides dedicated APIs for creating, retrieving, updating and deleting producer records.

---

### 👤 User-Specific Products

Each product contains a `userId` and optional `userEmail`.

The application can retrieve products belonging to a specific user, allowing producers to manage their own product listings separately from the overall product collection.

---

## 🔄 How It Works

```text
                    User
                      │
             ┌────────┴────────┐
             │                 │
          Producer          Consumer
             │                 │
             ▼                 ▼
       Add Products       Browse Products
             │                 │
             └────────┬────────┘
                      ▼
               Node.js API
                      │
                      ▼
                  MongoDB
```

### Producer Flow

```text
Register / Login
       ↓
Producer Dashboard
       ↓
Add Product
       ↓
Product Details
       ↓
MongoDB
       ↓
Manage Product
       ├── Update
       └── Delete
```

### Consumer Flow

```text
Login
  ↓
Browse Products
  ↓
View Producer/Product Details
  ↓
Explore Available Farm Products
```

---

## 🏗️ Application Architecture

```text
┌───────────────────────────────┐
│        React Frontend         │
│                               │
│  Authentication               │
│  Producer Dashboard           │
│  Consumer Dashboard           │
│  Product Pages                │
│  About / Contact              │
└───────────────┬───────────────┘
                │
              Axios
                │
                ▼
┌───────────────────────────────┐
│      Node.js + Express        │
│                               │
│  Authentication APIs          │
│  Product APIs                 │
│  JWT Authentication           │
│  CORS                         │
└───────────────┬───────────────┘
                │
             Mongoose
                │
                ▼
┌───────────────────────────────┐
│           MongoDB             │
│                               │
│  Producer/Product Data        │
│  User-related Information     │
└───────────────────────────────┘
```

---

## 🛠️ Technologies Used

| Layer                 | Technologies        |
| --------------------- | ------------------- |
| Frontend              | React 18, Vite      |
| Routing               | React Router        |
| HTTP Client           | Axios               |
| UI / Icons            | CSS, React Icons    |
| Authentication        | JWT, bcryptjs       |
| Google Authentication | Google OAuth        |
| Backend               | Node.js, Express.js |
| Database              | MongoDB, Mongoose   |
| Configuration         | dotenv              |
| Deployment            | Vercel              |

The project's `package.json` includes React, React Router, Axios, Google OAuth, JWT decoding, Express, CORS, Mongoose, JSON Web Token, Body Parser and dotenv.

---

## 📁 Project Structure

```text
Farm-fresh/
│
├── Backend/
│   ├── index.js
│   ├── producerdb.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│   └── test-*.js
│
├── api/
│
├── public/
│
├── src/
│   ├── Auth/
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── context/
│   ├── images/
│   ├── router/
│   │
│   ├── About.jsx
│   ├── BuyProducts.jsx
│   ├── Consumer.jsx
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Producer.jsx
│   ├── Contact.jsx
│   ├── Instruction.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

The current repository contains dedicated authentication, components, context, configuration, routing and product-related pages on the frontend, along with a separate `Backend` directory.

---

## 🔐 Authentication Flow

### Email & Password

```text
User Registration
       ↓
Email + Password
       ↓
Password Hashing
       ↓
User Created
       ↓
Login
       ↓
Password Verification
       ↓
JWT Token
       ↓
Authenticated User
```

Passwords are hashed with bcrypt before being stored, and successful login generates a JWT token with a 24-hour expiration.

### Google Sign-In

```text
User
 ↓
Google Sign-In
 ↓
Google Account Information
 ↓
Backend /google-auth
 ↓
Create or Update User
 ↓
JWT Token
 ↓
Authenticated User
```

The project also supports linking password authentication to an existing Google-authenticated account.

---

## 📦 Product Data Model

Each producer/product record contains:

```text
name
number
address
variety
productName
price
quantity
description
userId
userEmail
dateAdded
```

The product schema uses MongoDB through Mongoose and automatically records the product creation date.

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint        | Description                     |
| ------ | --------------- | ------------------------------- |
| POST   | `/register`     | Register a new user             |
| POST   | `/login`        | Login with email and password   |
| POST   | `/google-auth`  | Authenticate using Google       |
| POST   | `/set-password` | Set a password for Google users |

### Product Management

| Method | Endpoint               | Description                      |
| ------ | ---------------------- | -------------------------------- |
| POST   | `/producer`            | Add a new product                |
| GET    | `/getproducer`         | Get all products                 |
| GET    | `/getproducer/:userId` | Get products for a specific user |
| PUT    | `/producer/:id`        | Update a product                 |
| DELETE | `/producer/:id`        | Delete a product                 |

### Health Check

| Method | Endpoint  | Description              |
| ------ | --------- | ------------------------ |
| GET    | `/health` | Check backend/API status |

These endpoints are implemented directly in the project's Express backend.

---

## ⚙️ Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/Prasath-Rama-Krishnan/Farm-fresh.git

cd Farm-fresh
```

---

### 2. Frontend Setup

Install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

The project uses Vite for frontend development.

---

### 3. Backend Setup

Open a new terminal:

```bash
cd Backend

npm install
```

Start the backend:

```bash
npm start
```

The backend uses port **5172** by default when no `PORT` environment variable is provided.

Backend:

```text
http://localhost:5172
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `Backend` folder.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5172
FRONTEND_URLS=http://localhost:5173
```

> ⚠️ Do not commit your `.env` file or private credentials to GitHub.

The backend reads the MongoDB connection string and JWT secret from environment variables and includes retry/error handling for MongoDB connectivity.

---

## 🌐 Deployment

The frontend is deployed using **Vercel**.

🌐 **Live Application:**

https://farm-fresh-rosy.vercel.app/

The backend is configured to support the deployed Vercel frontend through CORS and also supports Vercel/serverless deployment scenarios.

---

## 📚 Key Learning Outcomes

Through this project, I gained practical experience in:

* Building a full-stack MERN application
* Developing React components
* React Router navigation
* Creating REST APIs with Express.js
* Working with MongoDB and Mongoose
* Implementing JWT authentication
* Password hashing with bcrypt
* Google OAuth integration
* Managing user-specific data
* CRUD operations
* Connecting frontend and backend
* Handling environment variables
* Deploying a React application using Vercel
* Implementing responsive user interfaces

---

## 🔮 Future Improvements

* Add online payment integration
* Add product image uploads
* Add product search and filtering
* Add shopping cart functionality
* Add order management
* Add producer verification
* Add consumer reviews and ratings
* Add product availability tracking
* Add email notifications for orders
* Add an admin dashboard
* Add location-based product discovery

---

## 👨‍💻 Author

### Prasath R

**Computer Science & Engineering**

🌐 **Portfolio:**
https://portfolio-005.vercel.app/

💼 **LinkedIn:**
https://www.linkedin.com/in/prasath-ramakrishnan-567a71295

💻 **GitHub:**
https://github.com/Prasath-Rama-Krishnan

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

**Thanks for checking out the project!**
