# Flipkart Clone – Full Stack E-Commerce Platform

## Project Overview

This project is a Flipkart-style e-commerce web application built as part of the **SDE Intern Fullstack Assignment**.

It replicates core Flipkart functionality including:

• Product browsing
• Cart management
• Checkout flow
• Order placement
• Order history tracking

The application demonstrates full-stack architecture using **Next.js, Express.js, and PostgreSQL** with deployment on **Vercel and Render**.

---

## Live Deployment Links

Frontend (Vercel):

https://flipkart-clone-e78w.vercel.app/

Backend API (Render):

https://flipkart-backend1-567x.onrender.com/products

---

## Tech Stack

Frontend

• Next.js (React)
• Tailwind CSS

Backend

• Node.js
• Express.js

Database

• PostgreSQL (Render)

Deployment

• Frontend → Vercel
• Backend → Render

---

## Features Implemented

### Product Listing Page

• Flipkart-style product grid layout
• Search products by name
• Filter products by category
• Ratings display
• Discount badges
• Stock availability indicator

---

### Product Detail Page

• Image carousel with thumbnails
• Product description
• Specifications table
• Price + discount display
• Stock status indicator
• Add to Cart button
• Buy Now button

---

### Shopping Cart

• View added products
• Increase quantity
• Decrease quantity
• Remove products
• Cart subtotal calculation
• Cart total calculation

---

### Checkout Flow

• Shipping address form
• Order summary preview
• Place order functionality
• Order confirmation page
• Unique order ID generated

---

## Database Schema

PostgreSQL tables used:

• cart
• orders

Supports:

• Quantity tracking
• Order placement
• Order history storage
• Automatic cart clearing after order placement

---

## API Routes

Products

GET /products
GET /products/:id

Cart

GET /cart
POST /cart
PUT /cart/:id
DELETE /cart/:id

Orders

POST /order
GET /orders

---

## Assumptions Made

• A default user is assumed to be logged in
• Authentication not required as per assignment instructions
• Sample product data seeded in backend
• PostgreSQL used for cart and orders storage

---

## How to Run Locally

Clone repository

git clone <your-repository-link>

Install dependencies

npm install

Run frontend

npm run dev

Run backend server

node server.js

Open browser

http://localhost:3000

---

## Example Test Routes

/cart
/checkout
/orders
/order-success?id=12

---

## Future Improvements (Bonus Scope)

• User authentication
• Wishlist feature
• Order history dashboard
• Email notifications
• Payment gateway integration

---

## Author

Developed by **Bhoomi**
