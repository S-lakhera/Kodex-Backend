# 📦 Inventory Management API

A RESTful API built with **Node.js**, **Express 5**, and **MongoDB (Mongoose)** for managing product inventory. Supports full CRUD operations on products.

---

## 🚀 Tech Stack

| Technology | Version |
|---|---|
| Node.js | ≥ 18.x |
| Express | ^5.2.1 |
| Mongoose | ^9.6.1 |
| dotenv | ^17.4.2 |

---

## 📁 Project Structure

```
Inventory-Management/
├── server.js               # Entry point — starts the server
├── .env                    # Environment variables
├── package.json
└── src/
    ├── app.js              # Express app setup & route mounting
    ├── config/
    │   └── db.js           # MongoDB connection
    ├── models/
    │   └── product.js      # Mongoose Product schema
    ├── controllers/
    │   └── product.js      # Route handler logic
    └── routes/
        └── product.js      # Product route definitions
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Inventory-Management
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
port=3000
MONGODB_URL=your_mongodb_connection_string
```

### 4. Start the server

```bash
npm start
```

The server will start at `http://localhost:3000`.

---

## 🗄️ Product Schema

| Field | Type | Required | Default | Notes |
|---|---|---|---|---|
| `title` | String | ✅ Yes | — | Must be unique |
| `description` | String | ❌ No | — | — |
| `price` | Number | ✅ Yes | — | — |
| `quantity` | Number | ❌ No | `1` | — |
| `category` | String | ✅ Yes | `groccery` | — |
| `createdAt` | Date | Auto | — | Mongoose timestamp |
| `updatedAt` | Date | Auto | — | Mongoose timestamp |

---

## 🛣️ API Routes

Base URL: `http://localhost:3000`

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Returns server status message |

**Response:**
```json
{
  "message": "Server is running || Visit '/products' route for Inventory management"
}
```

---

### Products

All product routes are prefixed with `/products`.

---

#### 1. Get All Products

```
GET /products
```

Fetches all products from the database.

**Response `200`:**
```json
{
  "message": "Products Fetched Successfully",
  "products": [ { ...productObject } ]
}
```

---

#### 2. Create a Product

```
POST /products
```

Creates a new product.

**Request Body:**
```json
{
  "title": "Wireless Mouse",
  "description": "Ergonomic wireless mouse with USB receiver",
  "price": 799,
  "quantity": 50,
  "category" : "electronics"
}
```

**Response `201`:**
```json
{
  "message": "Product Created successfully.",
  "product": { ...savedProductObject }
}
```

---

#### 3. Get Single Product

```
GET /products/:id
```

Fetches a single product by its MongoDB `_id`.

**URL Params:**
- `id` — MongoDB ObjectId of the product

**Response `200`:**
```json
{
  "message": "Product Fetched Successfully",
  "product": { ...productObject }
}
```

---

#### 4. Update a Product

```
PUT /products/:id
```

Updates an existing product by its `_id`. Accepts any subset of product fields.

**URL Params:**
- `id` — MongoDB ObjectId of the product

**Request Body (partial update supported):**
```json
{
  "price": 999,
  "quantity": 30
}
```

**Response `200`:**
```json
{
  "message": "Product Updated Successfully",
  "product": { ...updatedProductObject }
}
```

---

#### 5. Delete a Product

```
DELETE /products/:id
```

Deletes a product by its `_id`.

**URL Params:**
- `id` — MongoDB ObjectId of the product

**Response `200`:**
```json
{
  "message": "Product deleted Successfully",
  "product": { ...deletedProductObject }
}
```

---

## ⚠️ Error Responses

All routes return a standard error response on failure:

```json
{
  "message": "internal server error"
}
```

| Status Code | Meaning |
|---|---|
| `200` | OK |
| `201` | Created |
| `500` | Internal Server Error |

---

## 📝 Notes

- All `POST`/`PUT` requests must include the `Content-Type: application/json` header.
- The `title` field is **unique** — duplicate titles will cause a `500` error (MongoDB duplicate key).
- `PUT` uses `findByIdAndUpdate` with `{ new: true }`, so the response always returns the **updated** document.
