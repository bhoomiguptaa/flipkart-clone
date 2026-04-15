"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export default function CartPage() {

  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart items
  const loadCart = () => {

    fetch("https://flipkart-backend1-567x.onrender.com/cart")
      .then(res => res.json())
      .then(data => setCart(data))

  }

  useEffect(() => {

    loadCart()

  }, [])


  // Increase quantity
  const increaseQty = async (item: CartItem) => {

    await fetch(`https://flipkart-backend1-567x.onrender.com/cart/${item.id}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        change: 1
      })

    })

    loadCart()

  }


  // Decrease quantity
  const decreaseQty = async (item: CartItem) => {

    await fetch(`https://flipkart-backend1-567x.onrender.com/cart/${item.id}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        change: -1
      })

    })

    loadCart()

  }


  // Remove product
  const removeItem = async (id: number) => {

    await fetch(`https://flipkart-backend1-567x.onrender.com/cart/${id}`, {

      method: "DELETE"

    })

    loadCart()

  }


  // Total price calculation
  const totalPrice = cart.reduce((sum, item) => {

    return sum + item.price * item.quantity

  }, 0)


  return (

    <div className="bg-gray-100 min-h-screen p-6">

      <div className="max-w-6xl mx-auto flex gap-6">

        {/* LEFT SIDE CART ITEMS */}

        <div className="flex-1">

          {cart.length === 0 ? (

            <div className="bg-white p-8 rounded shadow text-center">

              Cart is empty 😔

            </div>

          ) : (

            cart.map(item => (

              <div
                key={item.id}
                className="bg-white p-5 rounded shadow flex gap-6 mb-4"
              >

                <img
                  src={item.image}
                  className="w-32 object-contain"
                />


                <div className="flex-1">

                  <h2 className="font-semibold text-lg">

                    {item.name}

                  </h2>


                  <p className="text-green-600 font-bold mt-2">

                    ₹{item.price}

                  </p>


                  {/* Quantity buttons */}

                  <div className="flex gap-3 mt-4 items-center">

                    <button
                      onClick={() => decreaseQty(item)}
                      className="px-3 border rounded"
                    >
                      −
                    </button>

                    {item.quantity}

                    <button
                      onClick={() => increaseQty(item)}
                      className="px-3 border rounded"
                    >
                      +
                    </button>

                  </div>


                  {/* Remove button */}

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 mt-3"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))

          )}

        </div>


        {/* RIGHT SIDE PRICE SUMMARY */}

        <div className="w-80 bg-white p-6 rounded shadow h-fit">

  <h2 className="font-semibold text-lg mb-4 border-b pb-2">
    Price Details
  </h2>


  {/* Subtotal */}

  <div className="flex justify-between mb-2">
    <span>Subtotal</span>
    <span>₹{totalPrice}</span>
  </div>


  {/* Delivery */}

  <div className="flex justify-between mb-2">
    <span>Delivery Charges</span>
    <span className="text-green-600">Free</span>
  </div>


  {/* Discount */}

  <div className="flex justify-between mb-2">
    <span>Discount</span>
    <span className="text-green-600">− ₹0</span>
  </div>


  <hr className="my-3" />


  {/* Final Total */}

  <div className="flex justify-between font-semibold text-lg">
    <span>Total Amount</span>
    <span>₹{totalPrice}</span>
  </div>


  {/* Place Order Button */}

  <Link href="/checkout">

    <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded mt-6 font-semibold">

      Place Order

    </button>

  </Link>

</div>

      </div>

    </div>

  )

}