import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { Trash2, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    if (wishlist.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                <div className="bg-red-50 p-6 rounded-full mb-6">
                    <Heart size={48} className="text-red-500 fill-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h2>
                <p className="text-gray-600 mb-8 max-w-sm">
                    Seems like you haven't saved any items yet. Browse our products and find something you love!
                </p>
                <Link
                    to="/products"
                    className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex items-center">
                <Heart className="mr-3 text-red-500 fill-red-500" />
                My Wishlist ({wishlist.length})
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {wishlist.map((product) => (
                        <motion.div
                            key={product._id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow"
                        >
                            <div className="relative aspect-square bg-gray-50 overflow-hidden">
                                <img
                                    src={product.imageUrl || product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <button
                                    onClick={() => removeFromWishlist(product._id)}
                                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors"
                                    title="Remove from wishlist"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>

                            <div className="p-5">
                                <Link to={`/product/${product._id}`}>
                                    <h3 className="font-bold text-lg text-gray-800 mb-1 hover:text-primary truncate">
                                        {product.name}
                                    </h3>
                                </Link>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xl font-bold text-primary">
                                        ${product.price}
                                    </span>

                                    <button
                                        onClick={() => addToCart(product)}
                                        className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                                    >
                                        <ShoppingCart size={16} />
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default WishlistPage;
