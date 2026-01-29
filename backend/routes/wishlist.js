const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const Wishlist = require('../models/Wishlist');

// @route   GET /api/wishlist
// @desc    Get user wishlist
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        let wishlist = await Wishlist.findOne({ user: req.user.id })
            .populate('products');

        if (!wishlist) {
            wishlist = new Wishlist({ user: req.user.id, products: [] });
            await wishlist.save();
        }

        res.json(wishlist.products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT /api/wishlist/:productId
// @desc    Toggle product in wishlist
// @access  Private
router.put('/:productId', auth, async (req, res) => {
    try {
        let wishlist = await Wishlist.findOne({ user: req.user.id });

        if (!wishlist) {
            wishlist = new Wishlist({ user: req.user.id, products: [] });
        }

        // Check if product exists in wishlist
        const index = wishlist.products.indexOf(req.params.productId);

        if (index > -1) {
            // Remove
            wishlist.products.splice(index, 1);
        } else {
            // Add
            wishlist.products.push(req.params.productId);
        }

        await wishlist.save();
        await wishlist.populate('products');

        res.json(wishlist.products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
