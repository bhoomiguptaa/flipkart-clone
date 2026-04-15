"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export default function CheckoutPage() {

  const router = useRouter()

  const [cart, setCart] = useState<CartItem[]>([])
  const [address, setAddress] = useState("")

  useEffect(() => {

    fetch("https://flipkart-backend1-567x.onrender.com/cart")
      .then(res => res.json())
      .then(data => setCart(data))

  }, [])


  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const delivery = subtotal > 500 ? 0 : 40

  const total = subtotal + delivery


  const placeOrder = async () => {

    if (!address) {
      alert("Please enter address")
      return
    }

    const response = await fetch(
      "https://flipkart-backend1-567x.onrender.com/order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ address })
      }
    )

    const data = await response.json()

    router.push(`/order-success?id=${data.orderId}`)
  }


  return (

    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-6">

      <h1 className="text-2xl font-bold mb-6">
        Checkout
      </h1>


      {/* ADDRESS */}

      <textarea
        placeholder="Enter shipping address"
        className="border w-full p-3 rounded"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />


      {/* ORDER SUMMARY */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Order Summary
      </h2>

      {cart.map(item => (

        <div
          key={item.id}
          className="flex justify-between border-b py-2"
        >

          <span>
            {item.name} × {item.quantity}
          </span>

          <span>
            ₹{item.price * item.quantity}
          </span>

        </div>

      ))}


      {/* PRICE BREAKDOWN */}

      <div className="mt-6 space-y-2">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span className="text-green-600">
            {delivery === 0 ? "Free" : `₹${delivery}`}
          </span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>


      {/* PLACE ORDER BUTTON */}

      <button
        onClick={placeOrder}
        className="bg-green-600 text-white px-6 py-3 mt-6 rounded"
      >
        Confirm Order
      </button>

    </div>

  )
}