"use client"

import Footer from "../../../components/footer"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

type Product = {
  id: number
  name: string
  price: number
  images: string[]
  description: string
  stock: number
  category: string
  specs: {
    display: string
    processor: string
    camera: string
    battery: string
    storage: string
  }
}

export default function ProductDetail() {

  const params = useParams()
  const router = useRouter()

  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {

    fetch(`https://flipkart-backend1-567x.onrender.com/products/${params.id}`)
      .then(res => res.json())
      .then(data => setProduct(data))

  }, [params.id])


  if (!product) return <div className="p-10">Loading...</div>


  // ADD TO CART

  const addToCart = async () => {

    await fetch("https://flipkart-backend1-567x.onrender.com/cart", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1
      })

    })

    alert("Added to cart")

  }


  // BUY NOW

  const buyNow = async () => {

    await fetch("https://flipkart-backend1-567x.onrender.com/cart", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1
      })

    })

    router.push("/checkout")

  }


  return (

    <div>

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-10 mt-6">

        {/* TOP SECTION */}

        <div className="flex gap-12">

          {/* LEFT IMAGE SECTION */}

          <div className="flex gap-6">

            {/* THUMBNAILS */}

            <div className="flex flex-col gap-3">

              {product.images.map((img, index) => (

                <img
                  key={index}
                  src={img}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 border cursor-pointer ${
                    selectedImage === index
                      ? "border-blue-500"
                      : ""
                  }`}
                />

              ))}

            </div>


            {/* MAIN IMAGE */}

            <img
              src={product.images[selectedImage]}
              className="w-80 object-contain"
            />

          </div>


          {/* RIGHT DETAILS SECTION */}

          <div>

            <h1 className="text-2xl font-bold">
              {product.name}
            </h1>


            <p className="text-green-600 text-xl mt-3">
              ₹{product.price}
            </p>


            {/* DESCRIPTION */}

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>


            {/* STOCK STATUS */}

            <p className="mt-3 font-semibold text-green-600">

              {product.stock > 5
                ? "In Stock"
                : product.stock > 0
                ? `Only ${product.stock} left`
                : "Out of Stock"}

            </p>


            {/* DELIVERY INFO */}

            <ul className="mt-4 text-gray-600">

              <li>✔ Free delivery available</li>
              <li>✔ 7-day replacement policy</li>
              <li>✔ Cash on delivery supported</li>

            </ul>


            {/* BUTTONS */}

            <div className="mt-6 flex gap-4">

              <button
                onClick={addToCart}
                className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded font-semibold shadow"
              >
                Add to Cart
              </button>


              <button
                onClick={buyNow}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold shadow"
              >
                Buy Now
              </button>

            </div>

          </div>

        </div>


        {/* SPECIFICATIONS TABLE */}

        <h2 className="mt-10 font-semibold text-lg">
          Specifications
        </h2>


        {product.specs && (

          <table className="w-full border mt-3">

            <tbody>

              <tr className="border">
                <td className="p-3 font-medium bg-gray-50">Display</td>
                <td className="p-3">{product.specs.display}</td>
              </tr>


              <tr className="border">
                <td className="p-3 font-medium bg-gray-50">Processor</td>
                <td className="p-3">{product.specs.processor}</td>
              </tr>


              <tr className="border">
                <td className="p-3 font-medium bg-gray-50">Camera</td>
                <td className="p-3">{product.specs.camera}</td>
              </tr>


              <tr className="border">
                <td className="p-3 font-medium bg-gray-50">Battery</td>
                <td className="p-3">{product.specs.battery}</td>
              </tr>


              <tr className="border">
                <td className="p-3 font-medium bg-gray-50">Storage</td>
                <td className="p-3">{product.specs.storage}</td>
              </tr>


              <tr className="border">
                <td className="p-3 font-medium bg-gray-50">Brand</td>
                <td className="p-3">{product.name.split(" ")[0]}</td>
              </tr>


              <tr className="border">
                <td className="p-3 font-medium bg-gray-50">Category</td>
                <td className="p-3">{product.category}</td>
              </tr>


              <tr className="border">
                <td className="p-3 font-medium bg-gray-50">Warranty</td>
                <td className="p-3">
                  1 Year Manufacturer Warranty
                </td>
              </tr>


              <tr className="border">
                <td className="p-3 font-medium bg-gray-50">Delivery</td>
                <td className="p-3">
                  Free Delivery Available
                </td>
              </tr>

            </tbody>

          </table>

        )}

      </div>


      <Footer />

    </div>

  )

}