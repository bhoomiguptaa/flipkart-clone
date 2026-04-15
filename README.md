# Flipkart Clone – Full Stack E-Commerce Platform

## Project Overview

This project is a Flipkart-style e-commerce web application built as part of the SDE Intern Fullstack Assignment.
It replicates core Flipkart functionality including product browsing, cart management, checkout flow, and order placement.

The application focuses on real-world architecture, database schema design, and UI similarity to Flipkart.

---

# Tech Stack

Frontend:

* Next.js (React)
* Tailwind CSS

Backend:

* Node.js
* Express.js

Database:

* PostgreSQL

Deployment:

* Frontend: Vercel
* Backend: Render

---

# Features Implemented

## Product Listing Page

* Flipkart-style product grid layout
* Search products by name
* Filter products by category
* Ratings display
* Discount badges
* Stock availability indicator

---

## Product Detail Page

* Image carousel with thumbnails
* Product description
* Specifications table
* Price + discount display
* Stock status indicator
* Add to Cart button
* Buy Now button

---

## Shopping Cart

* View added products
* Increase quantity
* Decrease quantity
* Remove products
* Cart subtotal calculation
* Cart total calculation

---

## Checkout Flow

* Shipping address form
* Order summary preview
* Place order functionality
* Order confirmation page
* Unique order ID generated

---

# Database Schema

The database contains the following tables:

users
products
cart
orders
order_items

Relationships:

users → cart
users → orders
orders → order_items
products → order_items

Supports:

* Multiple product images
* Specifications stored in JSON
* Stock tracking
* Quantity tracking
* Order history structure

---

# API Routes

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

# Assumptions Made

* A default user is assumed to be logged in
* Authentication was not required as per assignment instructions
* Sample product data was seeded manually
* PostgreSQL JSON fields used for specs and images

---

# How to Run Locally

Clone repository

git clone <your-repo-link>

Install frontend dependencies

npm install

Run frontend

npm run dev

Run backend server

node server.js

Open browser

http://localhost:3000

---

# Deployment Links

Frontend:

(Add Vercel link here)

Backend:

(Add Render link here)

---

# Future Improvements (Bonus Scope)

* User authentication
* Wishlist feature
* Order history dashboard
* Email notifications
* Payment gateway integration
