const { Pool } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "flipkart",
  password: "1234",
  port: 5432,
})
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [

{ id: 1, name: "iPhone 14", price: 79999, category: "Mobiles", image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg" },

{ id: 2, name: "Samsung Galaxy S23", price: 69999, category: "Mobiles", image: "https://m.media-amazon.com/images/I/61VfL-aiToL._SL1500_.jpg" },

{ id: 3, name: "OnePlus 11", price: 55999, category: "Mobiles", image: "https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg" },

{ id: 4, name: "MacBook Air M2", price: 114999, category: "Laptops", image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg" },

{ id: 5, name: "Dell XPS 13", price: 99999, category: "Laptops", image: "https://m.media-amazon.com/images/I/61uA2UVnYWL._SL1500_.jpg" },

{ id: 6, name: "HP Pavilion Laptop", price: 65999, category: "Laptops", image: "https://m.media-amazon.com/images/I/71w4eKp4a0L._SL1500_.jpg" },

{ id: 7, name: "Sony WH-1000XM5", price: 29999, category: "Headphones", image: "https://m.media-amazon.com/images/I/61vJtKBb6oL._SL1500_.jpg" },

{ id: 8, name: "Boat Rockerz 550", price: 1999, category: "Headphones", image: "https://m.media-amazon.com/images/I/61kFL7ywsZS._SL1500_.jpg" },

{ id: 9, name: "JBL Tune 760NC", price: 7999, category: "Headphones", image: "https://m.media-amazon.com/images/I/61v0HjG8xYL._SL1500_.jpg" },

{ id: 10, name: "Nike Running Shoes", price: 4999, category: "Shoes", image: "https://m.media-amazon.com/images/I/71e0n0uY9pL._UL1500_.jpg" },

{ id: 11, name: "Adidas Sneakers", price: 3999, category: "Shoes", image: "https://m.media-amazon.com/images/I/61utX8kBDlL._UL1500_.jpg" },

{ id: 12, name: "Puma Sports Shoes", price: 3499, category: "Shoes", image: "https://m.media-amazon.com/images/I/71Qn5v3i7-L._UL1500_.jpg" },

{ id: 13, name: "Realme Narzo 60", price: 15999, category: "Mobiles", image: "https://m.media-amazon.com/images/I/71WkDp--uqL._SL1500_.jpg" },

{ id: 14, name: "iQOO Neo 7", price: 29999, category: "Mobiles", image: "https://m.media-amazon.com/images/I/61JS7lF2aqL._SL1500_.jpg" },

{ id: 15, name: "Lenovo IdeaPad Slim 5", price: 58999, category: "Laptops", image: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1500_.jpg" },

{ id: 16, name: "Asus VivoBook 15", price: 52999, category: "Laptops", image: "https://m.media-amazon.com/images/I/71pXJX9Y1XL._SL1500_.jpg" }

]

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
let cart = [];

app.post("/cart", async (req, res) => {

  const { name, price, image } = req.body

  const existing = await pool.query(
    "SELECT * FROM cart WHERE name = $1",
    [name]
  )

  if (existing.rows.length > 0) {

    await pool.query(
      "UPDATE cart SET quantity = quantity + 1 WHERE name = $1",
      [name]
    )

  } else {

    await pool.query(
      "INSERT INTO cart(name, price, image, quantity) VALUES($1,$2,$3,$4)",
      [name, price, image, 1]
    )

  }

  res.json({ message: "Cart updated" })

})

app.get("/cart", (req, res) => {

  res.json(cart);

});
app.delete("/cart/:id", (req, res) => {

  const id = Number(req.params.id);

  cart = cart.filter(item => item.id !== id);

  res.json(cart);

});
app.post("/order", async (req, res) => {

  const { address } = req.body

  try {

    await pool.query(
      "INSERT INTO orders(address) VALUES($1)",
      [address]
    )

    res.json({ message: "Order placed successfully" })

  } catch (error) {

    console.log(error)

    res.status(500).json({ error: "Database error" })

  }

})