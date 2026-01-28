import React from 'react';

const AdminStats = () => {
    // Determine stats from (mock) data or props
    // For now hardcoded for visual scaffolding
    const stats = [
        { label: 'Total Sales', value: '$12,450', change: '+12%', color: 'from-blue-500 to-blue-600' },
        { label: 'Total Orders', value: '156', change: '+8%', color: 'from-purple-500 to-purple-600' },
        { label: 'Total Products', value: '45', change: '+2', color: 'from-orange-500 to-orange-600' },
        { label: 'New Users', value: '34', change: '+15%', color: 'from-green-500 to-green-600' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-l-transparent hover:shadow-lg transition-shadow relative overflow-hidden">
                    {/* Background decoration */}
                    <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 bg-gradient-to-br ${stat.color}`}></div>

                    <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</h3>
                    <div className="mt-2 flex items-baseline">
                        <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                        <span className="ml-2 text-sm font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">{stat.change}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminStats;
