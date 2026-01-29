const request = require('supertest');
const express = require('express');
const productRoutes = require('../routes/products');
const Product = require('../models/Product');
const Review = require('../models/Review');

// Mock Auth Middleware
jest.mock('../middleware/auth', () => ({
    auth: (req, res, next) => next(),
    admin: (req, res, next) => next()
}));

// Mock Models
jest.mock('../models/Product');
jest.mock('../models/Review');

const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

describe('Product Details API', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/products/:id', () => {
        it('should return product with reviews and related products', async () => {
            const mockProductData = {
                _id: 'prod1',
                name: 'Test Product',
                category: 'electronics',
                isActive: true
            };

            const mockProduct = {
                ...mockProductData,
                toObject: jest.fn().mockReturnValue(mockProductData)
            };

            const mockReviews = [{ _id: 'rev1', comment: 'Great!', user: { name: 'User' } }];
            const mockRelated = [{ _id: 'prod2', name: 'Related Product' }];

            // Mock Product.findById
            Product.findById.mockResolvedValue(mockProduct);

            // Mock Review.find().populate()
            const mockPopulate = jest.fn().mockResolvedValue(mockReviews);
            Review.find.mockReturnValue({
                populate: mockPopulate
            });

            // Mock Product.find().limit()
            const mockLimit = jest.fn().mockResolvedValue(mockRelated);
            Product.find.mockReturnValue({
                sort: jest.fn().mockReturnThis(), // handle potential sort in other calls if needed
                limit: mockLimit,
                skip: jest.fn().mockReturnThis()
            });

            const res = await request(app).get('/api/products/prod1');

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data._id).toBe('prod1');
            expect(res.body.data.reviews).toEqual(mockReviews);
            expect(res.body.data.relatedProducts).toEqual(mockRelated);

            // Verify calls
            expect(Product.findById).toHaveBeenCalledWith('prod1');
            expect(Review.find).toHaveBeenCalledWith({ product: 'prod1' });
            expect(Product.find).toHaveBeenCalledWith(expect.objectContaining({
                category: 'electronics',
                _id: { $ne: 'prod1' }
            }));
        });

        it('should return 404 if product not found', async () => {
            Product.findById.mockResolvedValue(null);

            const res = await request(app).get('/api/products/nonexistent');

            expect(res.status).toBe(404);
            expect(res.body.success).toBe(false);
        });

        it('should return 404 if product is inactive', async () => {
            Product.findById.mockResolvedValue({ isActive: false });

            const res = await request(app).get('/api/products/inactive');

            expect(res.status).toBe(404);
        });
    });
});
