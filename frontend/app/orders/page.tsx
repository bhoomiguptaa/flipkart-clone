"use client"

import { useEffect, useState } from "react"

type Order = {
  id: number
  address: string
}

export default function OrdersPage() {

  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {

    fetch("http://localhost:5000/orders")
      .then(res => res.json())
      .then(data => setOrders(data))

  }, [])

  return (

    <div className="max-w-4xl mx-auto mt-8">

      <h1 className="text-2xl font-bold mb-6">
        Order History
      </h1>

      {orders.length === 0 ? (

        <p>No previous orders found</p>

      ) : (

        orders.map(order => (

          <div
            key={order.id}
            className="border p-4 mb-4 rounded shadow"
          >

            <p>Order ID: #{order.id}</p>
            <p>Address: {order.address}</p>

          </div>

        ))

      )}

    </div>

  )

}