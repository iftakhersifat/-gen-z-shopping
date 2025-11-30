import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';

export default function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (!product) return <p className='text-center'>Product not found</p>;

  return (
    <div className='max-w-6xl mx-auto px-6 md:px-6 lg:px-0 mt-24'>
      <div className="grid md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.title} className="w-full h-96 object-contain" />
        <div>
          <h1 className='text-2xl font-bold'>{product.title}</h1>
          <p className='mt-4'>{product.description}</p>
          <p className='mt-4 text-xl font-semibold'>${product.price}</p>
          <Link to="/dashboard" className="btn btn-primary mt-4">Go to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
