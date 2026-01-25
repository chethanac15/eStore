import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { SAMPLE_PRODUCTS } from '../utils/constants';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch from API
    const foundProduct = SAMPLE_PRODUCTS.find(p => p._id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      navigate('/cart');
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen"
      >
        <p className="text-lg text-gray-500">Loading...</p>
      </motion.div>
    );
  }

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <button
        onClick={() => navigate('/')}
        className="text-blue-600 hover:text-blue-800 mb-4"
      >
        ← Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-blue-600">${product.price}</span>
            <span className="text-sm text-gray-500">SKU: {product._id}</span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <h3 className="font-bold text-gray-900">Product Details</h3>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-gray-600">Stock: {product.stock} available</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="font-bold text-gray-700">Quantity:</label>
              <div className="flex items-center space-x-2 border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-4 py-2 font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;