import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const MOCK_USERS = [
    { _id: '1', name: 'Admin User', email: 'admin@estore.com', role: 'admin', joinDate: '2023-01-15' },
    { _id: '2', name: 'John Doe', email: 'john@example.com', role: 'user', joinDate: '2023-05-20' },
    { _id: '3', name: 'Jane Smith', email: 'jane@example.com', role: 'user', joinDate: '2023-08-10' },
];

const AdminUsers = () => {
    const [users, setUsers] = useState(MOCK_USERS);

    const toggleRole = (id) => {
        setUsers(users.map(u =>
            u._id === id ? { ...u, role: u.role === 'admin' ? 'user' : 'admin' } : u
        ));
        toast.success('User role updated');
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUsers(users.filter(u => u._id !== id));
            toast.success('User deleted');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">User Management</h2>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b bg-gray-50 text-gray-600 text-sm">
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Joined</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-medium">{user.name}</td>
                                <td className="p-3 text-sm text-gray-600">{user.email}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 text-xs rounded-full ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="p-3 text-sm text-gray-500">{user.joinDate}</td>
                                <td className="p-3 space-x-2">
                                    <button
                                        onClick={() => toggleRole(user._id)}
                                        className="text-primary hover:text-green-700 text-sm underline"
                                    >
                                        {user.role === 'admin' ? 'Demote' : 'Promote'}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="text-red-600 hover:text-red-800 text-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;
