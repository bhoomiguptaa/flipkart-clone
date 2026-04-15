"use client"

import { useEffect, useState } from "react"

type Order = {
  id: number
  address: string
}

export default function OrdersPage() {

  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {

    fetch("https://flipkart-backend1-567x.onrender.com/orders")
      .then(res => res.json())
      .then(data => setOrders(data))

  }, [])


  return (

    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-6">

      <h1 className="text-2xl font-bold mb-6">
        Your Orders
      </h1>


      {orders.length === 0 ? (

        <p>No orders placed yet</p>

      ) : (

        orders.map(order => (

          <div
            key={order.id}
            className="border-b py-4 flex justify-between"
          >

            <div>

              <p className="font-semibold">
                Order ID: #{order.id}
              </p>

              <p className="text-gray-600 text-sm">
                Address: {order.address}
              </p>

            </div>


            <span className="text-green-600 font-medium">
              Confirmed ✅
            </span>

          </div>

        ))

      )}

    </div>

  )

}