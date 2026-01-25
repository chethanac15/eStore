import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const { user } = useAuth();
  const [orders, setOrders] = React.useState([]);

  // Check if user is admin
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-700">Total Orders</h3>
          <p className="text-3xl font-bold text-blue-600">{orders.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-700">Pending Orders</h3>
          <p className="text-3xl font-bold text-orange-600">0</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-700">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-600">$0</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Order ID</th>
                <th className="text-left p-3">Customer</th>
                <th className="text-left p-3">Amount</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">${order.amount}</td>
                  <td className="p-3">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </motion.div>
  );
};

export default Admin;