import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Admin from '../../pages/Admin';
import AdminProducts from '../admin/AdminProducts';
import AdminOrders from '../admin/AdminOrders';
import AdminUsers from '../admin/AdminUsers';
import { AuthProvider } from '../../contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// Mocks
jest.mock('../../contexts/AuthContext', () => ({
    useAuth: () => ({
        user: { name: 'Admin', role: 'admin', email: 'admin@estore.com' },
        logout: jest.fn()
    })
}));

describe('Admin Dashboard', () => {
    test('renders dashboard by default', () => {
        render(
            <BrowserRouter>
                <Admin />
            </BrowserRouter>
        );
        expect(screen.getByText('Admin Panel')).toBeInTheDocument();
        expect(screen.getByText('Overview of your store\'s dashboard')).toBeInTheDocument();
        expect(screen.getByText('Total Sales')).toBeInTheDocument();
    });

    test('can switch to Products tab', () => {
        render(
            <BrowserRouter>
                <Admin />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByTestId('nav-products'));

        expect(screen.getByText('Products Management')).toBeInTheDocument();
    });

    test('can switch to Orders tab', () => {
        render(
            <BrowserRouter>
                <Admin />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByTestId('nav-orders'));

        expect(screen.getByText('Orders Management')).toBeInTheDocument();
    });

    test('can switch to Users tab', () => {
        render(
            <BrowserRouter>
                <Admin />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByTestId('nav-users'));

        expect(screen.getByText('User Management')).toBeInTheDocument();
    });
});

describe('Admin Sub-Components', () => {
    test('AdminProducts functionality', () => {
        render(<AdminProducts />);

        // Check list view
        expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();

        // Click Add Product
        fireEvent.click(screen.getByText('Add Product'));
        expect(screen.getByText('Add New Product')).toBeInTheDocument();

        // Fill form
        fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'New Item' } });
        fireEvent.change(screen.getByLabelText('Price'), { target: { value: '99' } });

        // Save
        fireEvent.click(screen.getByText('Save Product'));

        // Should return to list and see new item
        expect(screen.getByText('New Item')).toBeInTheDocument();
    });

    test('AdminUsers functionality', () => {
        render(<AdminUsers />);
        expect(screen.getByText('Admin User')).toBeInTheDocument();
        // Check role badge
        expect(screen.getByText('admin')).toBeInTheDocument();
    });

    test('AdminOrders functionality', () => {
        render(<AdminOrders />);
        expect(screen.getByText('ORD-001')).toBeInTheDocument();
        // Check status - might be multiple 'Delivered' (badge + option)
        const statusElements = screen.getAllByText('Delivered');
        expect(statusElements.length).toBeGreaterThan(0);
    });
});
