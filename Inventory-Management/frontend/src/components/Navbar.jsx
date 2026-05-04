import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-5 px-10'>
      <div></div>
      <div className='text-3xl font-bold uppercase underline underline-offset-4 '>All Products</div>
      <div className='border rounded-xl border-gray-300 px-4 py-2 hover:bg-amber-50/5 cursor-pointer active:scale-95 transition-transform ' >Add New Product</div>
    </div>
  )
}

export default Navbar
