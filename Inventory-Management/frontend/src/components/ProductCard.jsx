import React from 'react';
import { Pencil, Trash2, Tag } from 'lucide-react'; // Optional: using lucide-react for icons

const ProductCard = ({ product, onEdit, onDelete }) => {
  
  // Destructuring for cleaner code
  const { 
    title = "Product Title", 
    description = "Brief product description goes here...", 
    category = "General", 
    price = "0.00", 
    stock = 0,
    image = "https://static.vecteezy.com/system/resources/thumbnails/044/424/989/small/premium-quality-pure-white-product-package-box-with-natural-light-ultra-clear-digital-render-free-photo.jpeg" 
  } = product || {};

  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
        <img 
          className="object-contain h-full w-full p-4 transition-transform duration-300 group-hover:scale-105" 
          src={image} 
          alt={title} 
        />
        {/* Stock Badge */}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-semibold ${
          stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {stock > 0 ? `In Stock: ${stock}` : 'Out of Stock'}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <div className="flex items-center gap-1 text-xs font-medium text-blue-600 uppercase tracking-wider mb-2">
          <Tag size={12} />
          {category}
        </div>
        
        <h3 className="font-bold text-lg text-gray-900 truncate mb-1">{title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 h-10">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-bold text-gray-900">${price}</span>
        </div>

        {/* Admin Actions */}
        <div className="grid grid-cols-2 gap-3 mt-6 border-t pt-4">
          <button
            onClick={() => onEdit(product)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-lg font-medium transition-colors border border-transparent hover:border-blue-200"
          >
            <Pencil size={16} />
            Edit
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-red-50 text-red-600 border border-red-200 hover:border-red-300 rounded-lg font-medium transition-colors"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;