import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Orders = () => {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = React.useState([]);

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <h1 className="text-3xl font-bold mb-4">Please Login</h1>
        <p className="text-gray-600">You need to login to view your orders</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold text-gray-900">My Orders</h1>
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No orders yet</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold">Order #{order.id}</h3>
              <p className="text-gray-600">Status: {order.status}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Orders;