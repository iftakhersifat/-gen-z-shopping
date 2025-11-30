import React from 'react';
import { Link } from 'react-router';

const Products = ({ products }) => {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-0 mt-24'>
      <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800'>Featured Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <img src={product.image} alt={product.title} className="h-48 object-contain"/>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-4 text-lg">${product.price}</p>
            <Link to={`/products/${product.id}`} className="btn bg-linear-to-r from-blue-500 to-indigo-600 w-full text-white hover:bg-blue-700">More Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
