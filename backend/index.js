const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "iPhone 14",
    price: 79999,
    image: "https://dummyimage.com/300x200"
  },
  {
    id: 2,
    name: "Samsung S23",
    price: 69999,
    image: "https://dummyimage.com/300x200"
  },
  {
    id: 3,
    name: "OnePlus 11",
    price: 55999,
    image: "https://dummyimage.com/300x200"
  }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
let cart = [];

app.post("/cart", (req, res) => {

  const product = req.body;

  cart.push(product);

  res.json({
    message: "Added to cart",
    cart
  });

});

app.get("/cart", (req, res) => {

  res.json(cart);

});
app.delete("/cart/:id", (req, res) => {

  const id = Number(req.params.id);

  cart = cart.filter(item => item.id !== id);

  res.json(cart);

});