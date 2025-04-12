# 🔐 Secure Auth App

A secure user authentication system built using **Node.js**, **Express**, **PostgreSQL**, and **bcrypt**. This application allows users to register and log in securely, with hashed passwords stored in the database. It uses **EJS** for rendering pages and **Morgan** for HTTP request logging.

---

## 📌 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Database Setup](#-database-setup)
- [Available Routes](#-available-routes)
- [Screenshots](#-screenshots)
- [Project Structure](#-project-structure)
- [Security Notes](#-security-notes)
- [License](#-license)
- [Author](#-author)

---

## ✅ Features

- 🔒 **Secure User Registration** – stores hashed passwords using bcrypt.
- 🔑 **User Login** – compares password hashes for authentication.
- 🗃️ **PostgreSQL Database Integration** – handles user data securely.
- 📄 **EJS Templating Engine** – renders dynamic pages.
- 📝 **Morgan Logger** – logs HTTP requests for debugging.

---

## 🛠️ Tech Stack

| Technology     | Description                      |
|----------------|----------------------------------|
| Node.js        | JavaScript runtime environment   |
| Express.js     | Fast and minimalist web framework |
| PostgreSQL     | Relational database              |
| bcrypt         | Library for hashing passwords    |
| EJS            | Embedded JavaScript templating   |
| body-parser    | Parses incoming request bodies   |
| morgan         | HTTP request logger middleware   |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/secure-auth-app.git
cd secure-auth-app
