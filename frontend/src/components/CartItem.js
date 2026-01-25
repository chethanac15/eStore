import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item._id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item._id);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)} each</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          -
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          +
        </button>
      </div>
      <div className="text-right">
        <p className="font-semibold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 text-sm mt-1"
        >
          Remove
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;