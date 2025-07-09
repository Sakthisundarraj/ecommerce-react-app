import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNotification } from '../context/NotificationContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const { getWishlistCount } = useWishlist();
  const { showInfo } = useNotification();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = getWishlistCount();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleWishlistClick = () => {
    if (wishlistCount === 0) {
      showInfo('Your wishlist is empty. Add some products to get started!');
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <h1>ShopHub</h1>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/products" className="nav-link" onClick={closeMenu}>
              Products
            </Link>
            <Link to="/cart" className="nav-link" onClick={closeMenu}>
              Cart
            </Link>
            <Link to="/wishlist" className="nav-link" onClick={closeMenu}>
              Wishlist
            </Link>
          </nav>

          <div className="header-actions">
            <Link 
              to="/wishlist" 
              className="action-btn wishlist-btn"
              onClick={handleWishlistClick}
            >
              <FaHeart />
              {wishlistCount > 0 && (
                <span className="badge wishlist-badge">{wishlistCount}</span>
              )}
            </Link>

            <Link to="/cart" className="action-btn cart-btn">
              <FaShoppingCart />
              {cartItemCount > 0 && (
                <span className="badge cart-badge">{cartItemCount}</span>
              )}
            </Link>

            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 