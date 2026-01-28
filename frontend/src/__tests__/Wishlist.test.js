import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { WishlistProvider, useWishlist } from '../contexts/WishlistContext';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import '@testing-library/jest-dom';

// Mock toast
jest.mock('react-hot-toast', () => ({
    toast: {
        success: jest.fn(),
        error: jest.fn()
    }
}));

const TestComponent = () => {
    const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const product = { _id: '1', name: 'Test Product' };

    return (
        <div>
            <div data-testid="wishlist-count">{wishlist.length}</div>
            <button onClick={() => addToWishlist(product)}>Add</button>
            <button onClick={() => removeFromWishlist('1')}>Remove</button>
            <div data-testid="is-in-wishlist">{isInWishlist('1') ? 'Yes' : 'No'}</div>
        </div>
    );
};

const renderWithProviders = (ui, user = { _id: '123' }) => {
    return render(
        <AuthContext.Provider value={{ user }}>
            <WishlistProvider>
                {ui}
            </WishlistProvider>
        </AuthContext.Provider>
    );
};

describe('Wishlist Context', () => {
    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    test('adds item to wishlist', () => {
        renderWithProviders(<TestComponent />);

        fireEvent.click(screen.getByText('Add'));

        expect(screen.getByTestId('wishlist-count')).toHaveTextContent('1');
        expect(screen.getByTestId('is-in-wishlist')).toHaveTextContent('Yes');
        expect(toast.success).toHaveBeenCalledWith('Added to wishlist');
    });

    test('removes item from wishlist', () => {
        renderWithProviders(<TestComponent />);

        // Add first
        fireEvent.click(screen.getByText('Add'));
        expect(screen.getByTestId('wishlist-count')).toHaveTextContent('1');

        // Remove
        fireEvent.click(screen.getByText('Remove'));
        expect(screen.getByTestId('wishlist-count')).toHaveTextContent('0');
        expect(screen.getByTestId('is-in-wishlist')).toHaveTextContent('No');
    });

    test('toggles item (add then remove)', () => {
        renderWithProviders(<TestComponent />);

        fireEvent.click(screen.getByText('Add')); // 1
        fireEvent.click(screen.getByText('Add')); // Toggle remove

        expect(screen.getByTestId('wishlist-count')).toHaveTextContent('0');
        expect(toast.success).toHaveBeenCalledWith('Removed from wishlist');
    });

    test('prevents adding if not logged in', () => {
        renderWithProviders(<TestComponent />, null);

        fireEvent.click(screen.getByText('Add'));

        expect(screen.getByTestId('wishlist-count')).toHaveTextContent('0');
        expect(toast.error).toHaveBeenCalledWith('Please login to use wishlist');
    });
});
