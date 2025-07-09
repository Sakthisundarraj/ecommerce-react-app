// Format price in Indian Rupees
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Format price without currency symbol (just the number)
export const formatPriceNumber = (price) => {
  return new Intl.NumberFormat('en-IN').format(price);
};

// Get discount percentage
export const getDiscountPercentage = (originalPrice, currentPrice) => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}; 