-- USERS TABLE

CREATE TABLE users (

id SERIAL PRIMARY KEY,

name TEXT NOT NULL,

email TEXT UNIQUE NOT NULL

);


-- PRODUCTS TABLE

CREATE TABLE products (

id SERIAL PRIMARY KEY,

name TEXT NOT NULL,

price INTEGER NOT NULL,

category TEXT,

description TEXT,

stock INTEGER,

rating DECIMAL(2,1),

discount INTEGER,

images JSON,

specs JSON,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


-- CART TABLE

CREATE TABLE cart (

id SERIAL PRIMARY KEY,

user_id INTEGER REFERENCES users(id),

product_id INTEGER REFERENCES products(id),

quantity INTEGER DEFAULT 1

);


-- ORDERS TABLE

CREATE TABLE orders (

id SERIAL PRIMARY KEY,

user_id INTEGER REFERENCES users(id),

total_amount INTEGER,

address TEXT,

status TEXT DEFAULT 'Placed',

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


-- ORDER ITEMS TABLE

CREATE TABLE order_items (

id SERIAL PRIMARY KEY,

order_id INTEGER REFERENCES orders(id),

product_id INTEGER REFERENCES products(id),

quantity INTEGER,

price INTEGER

);