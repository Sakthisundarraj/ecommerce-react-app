import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaStar, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNotification } from '../context/NotificationContext';
import { formatPrice } from '../utils/priceFormatter';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
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
        description: "Premium wireless headphones with active noise cancellation technology. Features include 30-hour battery life, premium sound quality, and comfortable over-ear design. Perfect for music lovers and professionals who need to focus.",
        category: "electronics",
        images: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop"
        ],
        features: [
          "Active Noise Cancellation",
          "30-hour battery life",
          "Premium sound quality",
          "Comfortable over-ear design",
          "Bluetooth 5.0 connectivity"
        ],
        rating: 4.8,
        reviews: 1247,
        inStock: true
      },
      {
        id: 2,
        name: "Smart Fitness Watch",
        price: 5999,
        originalPrice: 7999,
        description: "Advanced fitness tracking smartwatch with heart rate monitor, GPS, and water resistance. Tracks your workouts, sleep, and daily activities. Compatible with both iOS and Android devices.",
        category: "electronics",
        images: [
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1434493782177-eead54fd8f9d?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop"
        ],
        features: [
          "Heart rate monitoring",
          "GPS tracking",
          "Water resistant",
          "Sleep tracking",
          "7-day battery life"
        ],
        rating: 4.6,
        reviews: 892,
        inStock: true
      },
      {
        id: 3,
        name: "Organic Cotton T-Shirt",
        price: 899,
        originalPrice: 1299,
        description: "Comfortable and eco-friendly cotton t-shirt made from 100% organic cotton. Soft, breathable fabric that's perfect for everyday wear. Available in multiple colors and sizes.",
        category: "clothing",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop"
        ],
        features: [
          "100% organic cotton",
          "Soft and breathable",
          "Multiple colors available",
          "Eco-friendly production",
          "Machine washable"
        ],
        rating: 4.4,
        reviews: 567,
        inStock: true
      },
      {
        id: 4,
        name: "Leather Crossbody Bag",
        price: 2499,
        originalPrice: 3499,
        description: "Stylish and durable leather crossbody bag with adjustable strap. Perfect for everyday use, featuring multiple compartments for organization. Made from premium genuine leather.",
        category: "accessories",
        images: [
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop"
        ],
        features: [
          "Genuine leather",
          "Adjustable strap",
          "Multiple compartments",
          "Water resistant",
          "Lifetime warranty"
        ],
        rating: 4.7,
        reviews: 423,
        inStock: true
      },
      {
        id: 5,
        name: "Wireless Charging Pad",
        price: 1499,
        originalPrice: 1999,
        description: "Fast wireless charging pad compatible with all Qi-enabled devices. Features LED indicator and non-slip design. Charges your phone, smartwatch, and other devices efficiently.",
        category: "electronics",
        images: [
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=600&h=600&fit=crop"
        ],
        features: [
          "Qi wireless charging",
          "Fast charging support",
          "LED indicator",
          "Non-slip design",
          "Universal compatibility"
        ],
        rating: 4.3,
        reviews: 234,
        inStock: true
      },
      {
        id: 6,
        name: "Denim Jeans",
        price: 1799,
        originalPrice: 2499,
        description: "Classic fit denim jeans for everyday wear. Made from high-quality denim with stretch comfort. Available in various washes and sizes for the perfect fit.",
        category: "clothing",
        images: [
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1473966968600-fa117b5fc4e2?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=600&fit=crop"
        ],
        features: [
          "High-quality denim",
          "Stretch comfort",
          "Classic fit",
          "Multiple washes",
          "Durable construction"
        ],
        rating: 4.5,
        reviews: 789,
        inStock: true
      },
      {
        id: 7,
        name: "Sunglasses",
        price: 1299,
        originalPrice: 1899,
        description: "UV protection sunglasses with modern design. Features polarized lenses for glare reduction and comfortable frame design. Perfect for outdoor activities and fashion.",
        category: "accessories",
        images: [
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=600&fit=crop"
        ],
        features: [
          "UV400 protection",
          "Polarized lenses",
          "Modern design",
          "Comfortable fit",
          "Scratch resistant"
        ],
        rating: 4.2,
        reviews: 156,
        inStock: true
      },
      {
        id: 8,
        name: "Portable Bluetooth Speaker",
        price: 1999,
        originalPrice: 2999,
        description: "Waterproof portable speaker with deep bass and 360-degree sound. Features 20-hour battery life and can connect to multiple devices. Perfect for outdoor activities and parties.",
        category: "electronics",
        images: [
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop"
        ],
        features: [
          "Waterproof design",
          "360-degree sound",
          "20-hour battery",
          "Deep bass",
          "Multi-device pairing"
        ],
        rating: 4.6,
        reviews: 445,
        inStock: true
      }
    ];

    const foundProduct = productData.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      showSuccess(`${product.name} added to cart!`);
    }
  };

  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      showInfo(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      showSuccess(`${product.name} added to wishlist!`);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="product-detail-page">
      <div className="container">
        <Link to="/products" className="back-link">
          <FaArrowLeft /> Back to Products
        </Link>

        <div className="product-detail-content">
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
              {product.originalPrice > product.price && (
                <span className="discount-badge">
                  {discountPercentage}% OFF
                </span>
              )}
              <button
                className={`wishlist-btn ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
                onClick={handleWishlistToggle}
                aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <FaHeart />
              </button>
            </div>
            
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-header">
              <h1>{product.name}</h1>
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < Math.floor(product.rating) ? 'star filled' : 'star'}
                    />
                  ))}
                </div>
                <span className="rating-text">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="product-price">
              <span className="current-price">{formatPrice(product.price)}</span>
              {product.originalPrice > product.price && (
                <span className="original-price">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-features">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <div className="quantity-controls">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    min="1"
                    max="10"
                    className="quantity-input"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="action-buttons">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary add-to-cart-btn"
                  disabled={!product.inStock}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                
                <button
                  onClick={handleWishlistToggle}
                  className={`btn btn-secondary wishlist-btn ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
                >
                  <FaHeart /> {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
              </div>

              {!product.inStock && (
                <p className="out-of-stock">This product is currently out of stock</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 