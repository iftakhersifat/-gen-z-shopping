import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../Firebase/AuthProvider';

export default function Orders() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId');
  const [product, setProduct] = useState(null);
  const { addOrder } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(console.error);
    }
  }, [productId]);

  const handleConfirmOrder = () => {
    if (!product) return;
    addOrder({
      id: Date.now().toString(),
      productId: product.id.toString(),
      title: product.title,
      price: product.price,
      image: product.image,
      date: new Date().toLocaleString()
    });
    toast.success('Order Confirmed!');
    setTimeout(() => navigate('/dashboard'), 1500);
  };

  if (!product) return <p className='text-center mt-24'>Loading product...</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-6 lg:px-0 mt-12">

    <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
    <span className="bg-linear-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Confirm Your Order</span>
    </h1>

    <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-200">
    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{product.title}</h2>

    <div className="w-full h-64 bg-gray-100 rounded-xl mb-6 flex items-center justify-center shadow-md">
      <img src={product.image} alt={product.title} className="h-full p-4 object-contain"/>
    </div>

    <p className="text-gray-700 mb-4">{product.description}</p>

    <p className="text-xl font-bold text-red-600 mb-6">Price: ${product.price}</p>

    <button onClick={handleConfirmOrder} className="btn w-full py-3 text-lg rounded-xl text-white bg-linear-to-r from-green-500 to-emerald-600 shadow-md">Confirm Order</button>
  </div>
</div>

  );
}
