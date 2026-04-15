"use client"
import Link from "next/link"

type Props = {
  id: number
  name: string
  price: number
  images: string[]
  rating: number
  discount: number
}

export default function ProductCard({
  id,
  name,
  price,
  images,
  rating,
  discount
}: Props) {

  const originalPrice = Math.round(price / (1 - discount / 100))

  return (

<div className="bg-white shadow-sm hover:shadow-md transition duration-200 rounded-lg p-4">

      {/* Wishlist icon (Flipkart-style improvement) */}

      <div className="absolute top-3 right-3 text-gray-400">
        ♡
      </div>


      {/* Product Image */}

      <img
        src={images?.[0] || "/placeholder.png"}
        alt={name}
       className="h-44 mx-auto object-contain"
      />


      {/* Product Name */}

      <h2 className="mt-4 font-semibold text-lg">
        {name}
      </h2>


      {/* Rating Badge */}

      <div className="flex items-center gap-2 mt-1">

        <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
          ⭐ {rating}
        </span>

        <span className="text-gray-500 text-sm">
          Flipkart Assured
        </span>

      </div>


      {/* Price Section */}

      <div className="flex items-center gap-2 mt-2">

        <span className="text-green-600 font-bold text-lg">
          ₹{price}
        </span>

        <span className="line-through text-gray-400 text-sm">
          ₹{originalPrice}
        </span>

        <span className="text-green-600 text-sm font-semibold">
          {discount}% OFF
        </span>

      </div>


      {/* Delivery label */}

      <p className="text-sm text-green-600">
        Free delivery
      </p>


      {/* View Product Button */}

      {/* Buttons */}

<div className="mt-4 flex gap-2">

  <button
    onClick={() => {
      const existingCart =
        JSON.parse(localStorage.getItem("cart") || "[]")

      const newItem = {
        id,
        name,
        price,
        images,
        rating,
        discount
      }

      existingCart.push(newItem)

      localStorage.setItem(
        "cart",
        JSON.stringify(existingCart)
      )

      alert("Added to cart 🛒")
    }}
    className="w-1/2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
  >
    Add to Cart
  </button>


  <Link href={`/product/${id}`} className="w-1/2">

    <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold">

      View Product

    </button>

  </Link>

</div>

    </div>

  )

}