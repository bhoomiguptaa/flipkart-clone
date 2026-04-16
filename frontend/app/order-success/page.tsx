"use client"

export const dynamic = "force-dynamic"

import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function OrderSuccess() {

  const params = useSearchParams()

  const orderId = params.get("id")

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-10 text-center">

        <h1 className="text-3xl font-bold text-green-600">
          Order Placed Successfully 🎉
        </h1>

        <p className="mt-4 text-lg">
          Order ID:
          <span className="font-semibold">
            {" "} {orderId ?? "Not Available"}
          </span>
        </p>

        <Link href="/">
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
            Continue Shopping
          </button>
        </Link>

      </div>

    </div>

  )

}