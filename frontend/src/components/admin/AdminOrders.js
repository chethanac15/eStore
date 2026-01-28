import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const MOCK_ORDERS = [
    { id: 'ORD-001', customer: 'John Doe', email: 'john@example.com', date: '2023-10-25', total: 129.99, status: 'Delivered', items: 3 },
    { id: 'ORD-002', customer: 'Jane Smith', email: 'jane@example.com', date: '2023-10-26', total: 45.50, status: 'Processing', items: 1 },
    { id: 'ORD-003', customer: 'Bob Wilson', email: 'bob@example.com', date: '2023-10-27', total: 299.00, status: 'Pending', items: 2 },
];

const STATUS_COLORS = {
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Processing': 'bg-blue-100 text-blue-800',
    'Shipped': 'bg-purple-100 text-purple-800',
    'Delivered': 'bg-green-100 text-green-800',
    'Cancelled': 'bg-red-100 text-red-800',
};

const AdminOrders = () => {
    const [orders, setOrders] = useState(MOCK_ORDERS);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleStatusUpdate = (id, newStatus) => {
        setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
        toast.success(`Order ${id} updated to ${newStatus}`);
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Orders Management</h2>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b bg-gray-50 text-gray-600 text-sm">
                            <th className="p-3">Order ID</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Customer</th>
                            <th className="p-3">Items</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-medium">{order.id}</td>
                                <td className="p-3 text-sm text-gray-600">{order.date}</td>
                                <td className="p-3">
                                    <div className="text-sm font-medium">{order.customer}</div>
                                    <div className="text-xs text-gray-500">{order.email}</div>
                                </td>
                                <td className="p-3 text-sm">{order.items}</td>
                                <td className="p-3 font-medium">${order.total}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 text-xs rounded-full ${STATUS_COLORS[order.status] || 'bg-gray-100'}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <select
                                        className="text-sm border rounded p-1"
                                        value={order.status}
                                        onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Processing">Processing</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOrders;
