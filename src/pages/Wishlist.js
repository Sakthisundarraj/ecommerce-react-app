import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import { formatPrice } from '../utils/priceFormatter';
import './Wishlist.css';

const Wishlist = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showSuccess, showInfo } = useNotification();

  const handleAddToCart = (product) => {
    addToCart(product);
    showSuccess(`${product.name} added to cart!`);
  };

  const handleRemoveFromWishlist = (product) => {
    removeFromWishlist(product.id);
    showInfo(`${product.name} removed from wishlist`);
  };

  const handleClearWishlist = () => {
    clearWishlist();
    showInfo('Wishlist cleared');
  };

  if (items.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="container">
          <div className="empty-wishlist">
            <div className="empty-wishlist-icon">
              <FaHeart />
            </div>
            <h2>Your wishlist is empty</h2>
            <p>Start adding products to your wishlist to save them for later.</p>
            <Link to="/products" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="wishlist-header">
          <Link to="/products" className="back-link">
            <FaArrowLeft /> Back to Products
          </Link>
          <h1>My Wishlist</h1>
          <button onClick={handleClearWishlist} className="clear-wishlist-btn">
            Clear Wishlist
          </button>
        </div>

        <div className="wishlist-content">
          <div className="wishlist-items">
            {items.map(item => (
              <div key={item.id} className="wishlist-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                  {item.originalPrice > item.price && (
                    <span className="discount-badge">
                      {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  
                  <div className="item-price">
                    <span className="current-price">{formatPrice(item.price)}</span>
                    {item.originalPrice > item.price && (
                      <span className="original-price">{formatPrice(item.originalPrice)}</span>
                    )}
                  </div>
                </div>

                <div className="item-actions">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-primary add-to-cart-btn"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  
                  <button
                    onClick={() => handleRemoveFromWishlist(item)}
                    className="btn btn-secondary remove-btn"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="wishlist-summary">
            <h3>Wishlist Summary</h3>
            <div className="summary-item">
              <span>Total Items:</span>
              <span>{items.length}</span>
            </div>
            <div className="summary-item">
              <span>Total Value:</span>
              <span>{formatPrice(items.reduce((total, item) => total + item.price, 0))}</span>
            </div>
            
            <div className="wishlist-actions">
              <Link to="/products" className="btn btn-secondary">
                Continue Shopping
              </Link>
              <Link to="/cart" className="btn btn-primary">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist; 