import type { NextConfig } from "next"

const nextConfig: NextConfig = {

  output: "standalone",

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dummyimage.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.puma.com" },
      { protocol: "https", hostname: "ssl-product-images.www8-hp.com" }
    ]
  }

}

export default nextConfig