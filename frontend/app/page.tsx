"use client"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import Link from "next/link"

type Product = {
  id: number
  name: string
  price: number
  images: string[]
  category: string
  rating: number
  discount: number
}

export default function Home() {

  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [bannerIndex, setBannerIndex] = useState(0)


  // SALE BANNERS

  const banners = [

"https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600",

"https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1600",

"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600"

];
  // FETCH PRODUCTS

  useEffect(() => {

    fetch("https://flipkart-backend1-567x.onrender.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [])


  // AUTO SLIDER

  useEffect(() => {

    const interval = setInterval(() => {

      setBannerIndex(prev =>
        prev === banners.length - 1 ? 0 : prev + 1
      )

    }, 3000)

    return () => clearInterval(interval)

  }, [])


  // FILTER PRODUCTS

  const filteredProducts = products
    .filter(product =>
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory
    )
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )


  return (

    <div className="bg-gray-100 min-h-screen">


      {/* NAVBAR */}


      <div className="bg-blue-600 text-white px-10 py-2 flex items-center justify-center shadow-md">

        <div className="flex items-center gap-8 w-full max-w-7xl">


          {/* LOGO */}


          <div className="bg-[#2874f0] text-white flex items-center justify-between px-6 py-2">

  {/* Logo */}
  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold italic">
      Flipkart
    </span>

    <span className="text-[10px] text-yellow-300">
      Explore Plus ✨
    </span>
  </div>

  {/* Search Bar */}
  className="flex items-center bg-white rounded-sm px-3 py-2 w-[550px]"

    <input
      placeholder="Search for products, brands and more"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="outline-none text-black w-full text-sm"
    />

  </div>


</div>

          {/* RIGHT SIDE BUTTONS */}


          <div className="ml-auto flex gap-4">


            {/* ORDERS BUTTON */}


            <Link href="/orders">

              <button className="bg-white text-blue-600 px-5 py-2 rounded-sm font-semibold hover:bg-gray-100">

                Orders 📦

              </button>

            </Link>


            {/* CART BUTTON */}


            <Link href="/cart">

              <button className="bg-white text-blue-600 px-5 py-2 rounded-sm font-semibold hover:bg-gray-100">

                Cart 🛒

              </button>

            </Link>


          </div>

        </div>

      </div>


      {/* CATEGORY ICON ROW */}


      <div className="bg-white shadow flex justify-center gap-10 py-4 mt-2">

        {[

          { name: "Mobiles", icon: "📱" },

          { name: "Laptops", icon: "💻" },

          { name: "Headphones", icon: "🎧" },

          { name: "Shoes", icon: "👟" },

          { name: "Tablets", icon: "📟" },

          { name: "Wearables", icon: "⌚" }

        ].map(cat => (

          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className="flex flex-col items-center hover:text-blue-600"
          >

            <span className="text-lg">{cat.icon}</span>

            <span className="text-sm mt-1">

              {cat.name}

            </span>

          </button>

        ))}

      </div>


      {/* HERO SLIDER */}


      <div className="max-w-7xl mx-auto px-6 mt-4">

        <img
          src={banners[bannerIndex]}
          className="shadow-md w-full h-[120px] object-cover rounded-sm"
        />

      </div>


      {/* CATEGORY FILTER BUTTONS */}


      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 px-6 mt-6">

        {["All", "Mobiles", "Laptops", "Headphones", "Shoes"].map(category => (

          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded shadow transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >

            {category}

          </button>

        ))}

      </div>


      {/* SECTION TITLE */}


      <h2 className="max-w-7xl mx-auto px-6 text-xl font-semibold mt-6">

        Best Deals For You

      </h2>


      {/* PRODUCT GRID */}


      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-8">

        {filteredProducts.map(product => (

          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            images={product.images}
            rating={product.rating}
            discount={product.discount}
          />

        ))}

      </div>

    </div>

  )

}