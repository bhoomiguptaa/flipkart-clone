const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()

app.use(cors())
app.use(express.json())

/* PostgreSQL connection */

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "flipkart",
  password: "1234",
  port: 5432,
})


/* PRODUCTS DATA */

const products = [

{
id:1,
name:"iPhone 14",
price:79999,
category:"Mobiles",
stock:11,
rating:4.6,
discount:12,
description:"6.1-inch Super Retina XDR display, A15 Bionic chip, dual camera system with cinematic mode and all-day battery life.",
specs:{
display:"6.1 inch OLED",
processor:"A15 Bionic",
camera:"12MP Dual",
battery:"3279mAh",
storage:"128GB"
},
images:[
"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
"https://m.media-amazon.com/images/I/71z9a7p9wKL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"
]
},

{
id:2,
name:"Samsung Galaxy S23",
price:69999,
category:"Mobiles",
stock:8,
rating:4.5,
discount:15,
description:"6.1-inch AMOLED display with Snapdragon processor, pro-grade camera system and powerful battery performance.",
specs:{
display:"6.1 inch AMOLED",
processor:"Snapdragon 8 Gen 2",
camera:"50MP Triple",
battery:"3900mAh",
storage:"256GB"
},
images:[
"https://m.media-amazon.com/images/I/61RZDb2mQxL._SX679_.jpg",
"https://m.media-amazon.com/images/I/71goZuIha-L._SX679_.jpg",
"https://m.media-amazon.com/images/I/71YwV2kqFSL._SX679_.jpg"
]
},

{
id:3,
name:"OnePlus 11",
price:55999,
category:"Mobiles",
stock:37,
rating:4.4,
discount:18,
description:"Snapdragon 8 Gen processor smartphone with fast charging, AMOLED display and premium Hasselblad camera setup.",
specs:{
display:"6.7 inch AMOLED",
processor:"Snapdragon 8 Gen 2",
camera:"50MP Triple",
battery:"5000mAh",
storage:"256GB"
},
images:[
"https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61c2Kq7r2pL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61E4N6R7JfL._SX679_.jpg"
]
},

{
id:5,
name:"iQOO Neo 7",
price:29999,
category:"Mobiles",
stock:63,
rating:4.3,
discount:20,
description:"Gaming-focused smartphone with Dimensity processor, ultra-fast charging and smooth AMOLED display experience.",
specs:{
display:"6.78 inch AMOLED",
processor:"Dimensity 8200",
camera:"64MP Triple",
battery:"5000mAh",
storage:"128GB"
},
images:[
"https://m.media-amazon.com/images/I/61JS7lF2aqL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61a5nYl7LXL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61E7r6qKSQL._SX679_.jpg"
]
},

{
id:6,
name:"MacBook Air M2",
price:114999,
category:"Laptops",
stock:5,
rating:4.8,
discount:10,
description:"Apple M2 chip powered ultra-thin laptop with Retina display, long battery life and premium aluminum design.",
specs:{
display:"6.78 inch AMOLED",
processor:"Dimensity 8200",
camera:"64MP Triple",
battery:"5000mAh",
storage:"128GB"
},
images:[
"https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg",
"https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
"https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
]
},

{
id:8,
name:"HP Pavilion 15",
price:65999,
category:"Laptops",
stock:71,
rating:4.3,
discount:25,
description:"Reliable everyday laptop with Intel processor, 15.6-inch display and fast SSD storage for smooth performance.",
specs:{
display:"15.6 inch FHD",
processor:"Intel i5 12th Gen",
camera:"HD Webcam",
battery:"8 hrs backup",
storage:"512GB SSD"
},
images:[
"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08148716.png",
"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08148717.png",
"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08148718.png"
]
},

{
id:9,
name:"Lenovo IdeaPad Slim 5",
price:58999,
category:"Laptops",
stock:22,
rating:4.4,
discount:21,
description:"Slim lightweight laptop with powerful processor, Full HD display and long battery life for productivity.",
specs:{
display:"15.6 inch FHD",
processor:"Ryzen 5",
camera:"HD Webcam",
battery:"10 hrs backup",
storage:"512GB SSD"
},
images:[
"https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61A3yN4YhVL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61X6K8pK2CL._SX679_.jpg"
]
},

{
id:12,
name:"Boat Rockerz 550",
price:1999,
category:"Headphones",
stock:78,
rating:4.1,
discount:35,
description:"Wireless over-ear headphones with deep bass, comfortable cushions and long battery playback time.",
specs:{
display:"Over-ear design",
processor:"Bluetooth 5.0",
camera:"NA",
battery:"20 hrs playback",
storage:"Wireless"
},
images:[
"https://m.media-amazon.com/images/I/61kFL7ywsZS._SX679_.jpg",
"https://m.media-amazon.com/images/I/61z3sL3R2PL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61uQ5l5hFEL._SX679_.jpg"
]
},

{
id:14,
name:"Nike Running Shoes",
price:4999,
category:"Shoes",
stock:19,
rating:4.3,
discount:25,
description:"Lightweight breathable running shoes with durable grip sole designed for comfort and performance.",
specs:{
display:"Breathable mesh",
processor:"Lightweight sole",
camera:"NA",
battery:"NA",
storage:"Rubber outsole grip"
},
images:[
"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
"https://images.unsplash.com/photo-1528701800489-20be3c3a6d7b",
"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
]
},

{
id:15,
name:"Adidas Sneakers",
price:3999,
category:"Shoes",
stock:15,
rating:4.2,
discount:28,
description:"Stylish everyday sneakers with cushioned sole and breathable fabric ideal for casual wear.",
specs:{
display:"Comfort cushioning",
processor:"Flexible sole",
camera:"NA",
battery:"NA",
storage:"Casual wear support"
},
images:[
"https://m.media-amazon.com/images/I/61utX8kBDlL._UY695_.jpg",
"https://m.media-amazon.com/images/I/61FhQ5QqLJL._UY695_.jpg",
"https://m.media-amazon.com/images/I/61Y2xQ8hFML._UY695_.jpg"
]
},

{
id:16,
name:"Puma Sports Shoes",
price:3499,
category:"Shoes",
stock:77,
rating:4.1,
discount:32,
description:"Comfortable sports shoes with flexible sole and lightweight structure for active movement.",
specs:{
display:"Sport design",
processor:"Grip outsole",
camera:"NA",
battery:"NA",
storage:"Training support"
},
images:[
"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/376289/01/sv01/fnd/IND/w/600/h/600",
"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/376289/01/sv02/fnd/IND/w/600/h/600",
"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/376289/01/sv03/fnd/IND/w/600/h/600"
]
},

{
id:17,
name:"Samsung Galaxy Tab S8",
price:58999,
category:"Tablets",
stock:7,
rating:4.5,
discount:14,
description:"Premium Android tablet with large display, S-Pen support and powerful processor for productivity and entertainment.",
specs:{
display:"11 inch LCD",
processor:"Snapdragon 8 Gen 1",
camera:"13MP Rear",
battery:"8000mAh",
storage:"128GB"
},
images:[
"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
"https://images.unsplash.com/photo-1580910051074-3eb694886505",
"https://images.unsplash.com/photo-1603898037225-0f8d65a08f2a"
]
},

{
id:18,
name:"Apple Watch Series 8",
price:45999,
category:"Wearables",
stock:16,
rating:4.7,
discount:9,
description:"Advanced smartwatch with health tracking features, GPS support and seamless iPhone connectivity.",
specs:{
display:"Always-on Retina",
processor:"S8 chip",
camera:"NA",
battery:"18 hrs backup",
storage:"32GB"
},
images:[
"https://m.media-amazon.com/images/I/71Swqqe7XAL._SX679_.jpg",
"https://m.media-amazon.com/images/I/71z9a7p9wKL._SX679_.jpg",
"https://m.media-amazon.com/images/I/71y6z6s0xPL._SX679_.jpg"
]
},

{
id:19,
name:"Noise Smart Watch",
price:2999,
category:"Wearables",
stock:500,
rating:4.0,
discount:40,
description:"Affordable smartwatch with fitness tracking, notification alerts and long battery backup.",
specs:{
display:"1.69 inch display",
processor:"Bluetooth support",
camera:"NA",
battery:"7 days backup",
storage:"Fitness tracking"
},
images:[
"https://m.media-amazon.com/images/I/61epn29QG0L._SX679_.jpg",
"https://m.media-amazon.com/images/I/61LqY0QJvLL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61rQ2Z6wFHL._SX679_.jpg"
]
}

]

/* GET PRODUCTS */

app.get("/products", (req, res) => {
  res.json(products)
})

/* ADD TO CART */

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

/* GET CART ITEMS */

app.get("/cart", async (req, res) => {

  const result = await pool.query(
    "SELECT * FROM cart ORDER BY id ASC"
  )

  res.json(result.rows)

})
/* GET CART */
/* GET SINGLE PRODUCT */
app.get("/products/:id", (req, res) => {

  const id = parseInt(req.params.id)

  const product = products.find(p => p.id === id)

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    })
  }

  res.json(product)

})



/* DELETE CART ITEM */

app.delete("/cart/:id", async (req, res) => {

  const id = Number(req.params.id)

  await pool.query(
    "DELETE FROM cart WHERE id = $1",
    [id]
  )

  const result = await pool.query("SELECT * FROM cart")

  res.json(result.rows)

})
app.put("/cart/:id", async (req, res) => {

  const id = Number(req.params.id)
  const { change } = req.body

  // get current quantity first

  const current = await pool.query(
    "SELECT quantity FROM cart WHERE id = $1",
    [id]
  )

  if (current.rows.length === 0) {
    return res.json([])
  }

  const newQuantity = current.rows[0].quantity + change

  // prevent quantity < 1

  if (newQuantity < 1) {

    await pool.query(
      "DELETE FROM cart WHERE id = $1",
      [id]
    )

  } else {

    await pool.query(
      "UPDATE cart SET quantity = $1 WHERE id = $2",
      [newQuantity, id]
    )

  }

  const result = await pool.query("SELECT * FROM cart")

  res.json(result.rows)

})


/* PLACE ORDER */

app.post("/order", async (req, res) => {

  const { address } = req.body

  const result = await pool.query(
    "INSERT INTO orders(address) VALUES($1) RETURNING id",
    [address]
  )
  

  /* CLEAR CART AFTER ORDER */

  await pool.query("DELETE FROM cart")

  res.json({
    message: "Order placed successfully",
    orderId: result.rows[0].id
  })

})
app.get("/orders", async (req, res) => {

  const result = await pool.query(
    "SELECT * FROM orders ORDER BY id DESC"
  )

  res.json(result.rows)

})


/* START SERVER */

app.listen(5000, () => {
  console.log("Server running on port 5000")
})