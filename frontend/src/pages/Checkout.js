import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <h1 className="text-3xl font-bold mb-4">Please Login</h1>
        <p className="text-gray-600">You need to login to checkout</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
      <CheckoutForm />
    </motion.div>
  );
};

export default Checkout;