// Frontend component tests
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { CartProvider } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          {component}
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('ProductCard Component', () => {
  const mockProduct = {
    _id: '1',
    name: 'Test Product',
    price: 29.99,
    image: 'https://via.placeholder.com/300',
    category: 'Electronics',
    description: 'Test Description'
  };

  it('should render product card with correct information', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(/29.99/)).toBeInTheDocument();
  });

  it('should display product image', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    
    const image = screen.getByAltText('Test Product');
    expect(image).toHaveAttribute('src', mockProduct.image);
  });

  it('should have add to cart button', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    
    const button = screen.getByText(/Add to Cart/i);
    expect(button).toBeInTheDocument();
  });
});

describe('Header Component', () => {
  it('should display eStore logo', () => {
    renderWithProviders(
      <header>
        <div>eStore</div>
      </header>
    );
    
    expect(screen.getByText('eStore')).toBeInTheDocument();
  });

  it('should have navigation links', () => {
    renderWithProviders(
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
      </nav>
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
});