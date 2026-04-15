"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function OrderSuccess() {

  const params = useSearchParams()

  const orderId = params.get("id")

  return (

    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-10 mt-10 text-center">

      <h1 className="text-3xl font-bold text-green-600">

        Order Placed Successfully 🎉

      </h1>


      <p className="mt-4 text-lg">

        Your Order ID is:

      </p>


      <div className="text-2xl font-semibold mt-2">

        #{orderId}

      </div>


      <Link href="/">

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">

          Continue Shopping

        </button>

      </Link>

    </div>

  )
}