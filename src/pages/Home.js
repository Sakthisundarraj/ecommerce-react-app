import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { products } from '../data/products';
import ParticleBackground from '../components/ParticleBackground';
import ScrollAnimation from '../components/ScrollAnimation';
import { formatPrice, getDiscountPercentage } from '../utils/priceFormatter';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <ParticleBackground />
        <div className="container">
          <div className="hero-content">
            <ScrollAnimation animation="fadeInUp">
              <h1>Welcome to ShopEase</h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <p>Discover amazing products at unbeatable prices. Shop with confidence and enjoy fast, reliable delivery.</p>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary glow">
                  Shop Now
                </Link>
                <Link to="/products" className="btn btn-secondary">
                  View Categories
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <div className="section-header">
              <h2>Featured Products</h2>
              <Link to="/products" className="view-all">
                View All <FaArrowRight />
              </Link>
            </div>
          </ScrollAnimation>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <ScrollAnimation key={product.id} animation="scaleIn" delay={index * 0.1}>
                <div className="product-card card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {product.originalPrice > product.price && (
                      <span className="discount-badge">
                        {getDiscountPercentage(product.originalPrice, product.price)}% OFF
                      </span>
                    )}
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < Math.floor(product.rating) ? 'star filled' : 'star'}
                          />
                        ))}
                      </div>
                      <span className="rating-text">({product.reviews} reviews)</span>
                    </div>
                    <div className="product-price">
                      <span className="current-price">{formatPrice(product.price)}</span>
                      {product.originalPrice > product.price && (
                        <span className="original-price">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2>Shop by Category</h2>
          </ScrollAnimation>
          <div className="categories-grid">
            <ScrollAnimation animation="scaleIn" delay={0.1}>
              <div className="category-card">
                <div className="category-icon">📱</div>
                <h3>Electronics</h3>
                <p>Latest gadgets and tech accessories</p>
                <Link to="/products" className="category-link">
                  Explore Electronics
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scaleIn" delay={0.2}>
              <div className="category-card">
                <div className="category-icon">👕</div>
                <h3>Clothing</h3>
                <p>Trendy fashion for every style</p>
                <Link to="/products" className="category-link">
                  Explore Clothing
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scaleIn" delay={0.3}>
              <div className="category-card">
                <div className="category-icon">🏠</div>
                <h3>Home & Kitchen</h3>
                <p>Everything for your perfect home</p>
                <Link to="/products" className="category-link">
                  Explore Home & Kitchen
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scaleIn" delay={0.4}>
              <div className="category-card">
                <div className="category-icon">💪</div>
                <h3>Sports & Fitness</h3>
                <p>Stay active and healthy</p>
                <Link to="/products" className="category-link">
                  Explore Sports & Fitness
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <ScrollAnimation animation="fadeInUp" delay={0.1}>
              <div className="feature">
                <div className="feature-icon floating">🚚</div>
                <h3>Free Shipping</h3>
                <p>Free shipping on orders over ₹2,000</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <div className="feature">
                <div className="feature-icon floating">🔄</div>
                <h3>Easy Returns</h3>
                <p>30-day return policy for your peace of mind</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.3}>
              <div className="feature">
                <div className="feature-icon floating">🔒</div>
                <h3>Secure Payment</h3>
                <p>Your payment information is always secure</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <div className="feature">
                <div className="feature-icon floating">💬</div>
                <h3>24/7 Support</h3>
                <p>Get help whenever you need it</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 