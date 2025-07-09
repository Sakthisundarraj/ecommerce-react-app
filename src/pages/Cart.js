import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/priceFormatter';
import './Cart.css';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 2000 ? 0 : 299; // Free shipping over ₹2,000
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <FaShoppingCart />
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <Link to="/products" className="back-link">
            <FaArrowLeft /> Continue Shopping
          </Link>
          <h1>Shopping Cart</h1>
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">{formatPrice(item.price)}</p>
                </div>
                <div className="item-quantity">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      disabled={item.quantity >= 10}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="item-total">
                  <span className="total-price">{formatPrice(item.price * item.quantity)}</span>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Subtotal ({items.length} items):</span>
              <span>{formatPrice(calculateSubtotal())}</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>{calculateShipping() === 0 ? 'Free' : formatPrice(calculateShipping())}</span>
            </div>
            <div className="summary-total">
              <span>Total:</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>
            
            {calculateSubtotal() < 2000 && (
              <div className="free-shipping-notice">
                <p>Add ₹{formatPrice(2000 - calculateSubtotal())} more for free shipping!</p>
              </div>
            )}

            <div className="cart-actions">
              <Link to="/checkout" className="btn btn-primary checkout-btn">
                Proceed to Checkout
              </Link>
              <Link to="/products" className="btn btn-secondary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 