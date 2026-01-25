import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Cart = () => {
  const { isAuthenticated } = useAuth();
  const [cartItems, setCartItems] = React.useState([]);

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-3xl font-bold mb-4">Please Login</h1>
        <p className="text-gray-600 mb-8">You need to login to view your cart</p>
        <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Go to Login
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <span>{item.name}</span>
                <span className="font-bold">${item.price}</span>
              </div>
            ))}
          </div>
          <Link to="/checkout" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 block text-center">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;