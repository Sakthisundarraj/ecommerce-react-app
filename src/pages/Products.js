import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaSearch, FaFilter } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNotification } from '../context/NotificationContext';
import { formatPrice } from '../utils/priceFormatter';
import ScrollAnimation from '../components/ScrollAnimation';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showSuccess, showInfo } = useNotification();

  useEffect(() => {
    // Simulated product data
    const productData = [
      {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 2499,
        originalPrice: 3999,
        description: "Premium wireless headphones with noise cancellation",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
      },
      {
        id: 2,
        name: "Smart Fitness Watch",
        price: 5999,
        originalPrice: 7999,
        description: "Advanced fitness tracking with heart rate monitor",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
      },
      {
        id: 3,
        name: "Organic Cotton T-Shirt",
        price: 899,
        originalPrice: 1299,
        description: "Comfortable and eco-friendly cotton t-shirt",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
      },
      {
        id: 4,
        name: "Leather Crossbody Bag",
        price: 2499,
        originalPrice: 3499,
        description: "Stylish and durable leather bag",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop"
      },
      {
        id: 5,
        name: "Wireless Charging Pad",
        price: 1499,
        originalPrice: 1999,
        description: "Fast wireless charging for all devices",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop"
      },
      {
        id: 6,
        name: "Denim Jeans",
        price: 1799,
        originalPrice: 2499,
        description: "Classic fit denim jeans for everyday wear",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop"
      },
      {
        id: 7,
        name: "Sunglasses",
        price: 1299,
        originalPrice: 1899,
        description: "UV protection sunglasses with modern design",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop"
      },
      {
        id: 8,
        name: "Portable Bluetooth Speaker",
        price: 1999,
        originalPrice: 2999,
        description: "Waterproof portable speaker with deep bass",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"
      }
    ];
    setProducts(productData);
    setFilteredProducts(productData);
  }, []);

  useEffect(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'discount':
          return ((b.originalPrice - b.price) / b.originalPrice) - ((a.originalPrice - a.price) / a.originalPrice);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy]);

  const handleAddToCart = (product) => {
    addToCart(product);
    showSuccess(`${product.name} added to cart!`);
  };

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      showInfo(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      showSuccess(`${product.name} added to wishlist!`);
    }
  };

  const categories = ['all', 'electronics', 'clothing', 'accessories'];

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-header">
          <h1>Our Products</h1>
          <p>Discover amazing products at unbeatable prices</p>
        </div>

        <div className="filters-section">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter /> Filters
          </button>

          <div className={`filters ${showFilters ? 'filters-open' : ''}`}>
            <div className="filter-group">
              <label>Category:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Sort by:</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <ScrollAnimation key={product.id} delay={index * 0.1}>
              <div className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.originalPrice > product.price && (
                    <span className="discount-badge">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                  <button
                    className={`wishlist-btn ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
                    onClick={() => handleWishlistToggle(product)}
                    aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <FaHeart />
                  </button>
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  
                  <div className="product-price">
                    <span className="current-price">{formatPrice(product.price)}</span>
                    {product.originalPrice > product.price && (
                      <span className="original-price">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>

                  <div className="product-actions">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-primary add-to-cart-btn"
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>
                    
                    <Link to={`/product/${product.id}`} className="btn btn-secondary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 