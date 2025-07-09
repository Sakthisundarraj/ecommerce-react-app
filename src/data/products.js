export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 5999,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    features: ["Bluetooth 5.0", "Active Noise Cancellation", "30-hour battery", "Quick Charge"],
    inStock: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 14999,
    originalPrice: 18999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.3,
    reviews: 89,
    description: "Advanced fitness tracking with heart rate monitoring and GPS.",
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day battery"],
    inStock: true
  },
  {
    id: 3,
    name: "Premium Coffee Maker",
    price: 10999,
    originalPrice: 14999,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
    category: "Home & Kitchen",
    rating: 4.7,
    reviews: 156,
    description: "Programmable coffee maker with built-in grinder and thermal carafe.",
    features: ["Built-in Grinder", "Programmable Timer", "Thermal Carafe", "12-cup capacity"],
    inStock: true
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 1899,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Clothing",
    rating: 4.2,
    reviews: 203,
    description: "Comfortable organic cotton t-shirt available in multiple colors.",
    features: ["100% Organic Cotton", "Multiple Colors", "Sizes XS-XXL", "Machine Washable"],
    inStock: true
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 2999,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.1,
    reviews: 67,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    features: ["15W Fast Charging", "Qi Compatible", "LED Indicator", "Non-slip Base"],
    inStock: true
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    price: 1499,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    category: "Home & Kitchen",
    rating: 4.6,
    reviews: 342,
    description: "Insulated water bottle that keeps drinks cold for 24 hours.",
    features: ["24-hour Cold", "12-hour Hot", "BPA Free", "32oz Capacity"],
    inStock: true
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    price: 5999,
    originalPrice: 7499,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.4,
    reviews: 94,
    description: "High-precision gaming mouse with customizable RGB lighting.",
    features: ["25K DPI Sensor", "RGB Lighting", "7 Programmable Buttons", "50-hour battery"],
    inStock: true
  },
  {
    id: 8,
    name: "Yoga Mat",
    price: 2499,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    category: "Sports & Fitness",
    rating: 4.3,
    reviews: 178,
    description: "Non-slip yoga mat perfect for home workouts and studio sessions.",
    features: ["Non-slip Surface", "6mm Thickness", "72\" x 24\"", "Eco-friendly"],
    inStock: true
  }
];

export const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Sports & Fitness"
];

export const getProductsByCategory = (category) => {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
}; 