import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import axios from 'axios'

const App = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products")
        setProducts(res.data.products)
      } catch (err) {
        console.error("Failed to fetch products:", err)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className=''>
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {products.map(prod => <ProductCard key={prod.id} product={prod} />)}
      </div>

    </div>
  )
}

export default App
