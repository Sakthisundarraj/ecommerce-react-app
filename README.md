# ShopEase - Modern Ecommerce Website

A fully functional ecommerce website built with React.js featuring a modern, responsive design and complete shopping experience.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Product Catalog**: Browse products with filtering and search functionality
- **Shopping Cart**: Add, remove, and manage cart items with quantity controls
- **Product Details**: Detailed product pages with features and reviews
- **Checkout Process**: Multi-step checkout with shipping and payment forms
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Local Storage**: Cart persists between browser sessions
- **Toast Notifications**: User-friendly feedback for actions

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **React Router** - Navigation and routing
- **React Icons** - Icon library
- **React Hot Toast** - Toast notifications
- **CSS3** - Styling with modern CSS features
- **Local Storage** - Data persistence

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   ├── Header.css
│   ├── Footer.js       # Site footer
│   └── Footer.css
├── context/            # React context
│   └── CartContext.js  # Shopping cart state management
├── data/               # Static data
│   └── products.js     # Product catalog
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Home.css
│   ├── Products.js     # Product listing
│   ├── Products.css
│   ├── ProductDetail.js # Individual product page
│   ├── ProductDetail.css
│   ├── Cart.js         # Shopping cart
│   ├── Cart.css
│   ├── Checkout.js     # Checkout process
│   └── Checkout.css
├── App.js              # Main app component
├── App.css
├── index.js            # App entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project files**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🎯 Key Features Explained

### Shopping Cart

- Add products to cart from product listings or detail pages
- Adjust quantities in cart
- Remove items individually or clear entire cart
- Cart data persists in localStorage

### Product Management

- Browse all products with category filtering
- Search products by name or description
- Sort by price, rating, or name
- View detailed product information

### Checkout Process

- Two-step checkout (shipping → payment)
- Form validation for required fields
- Order summary with tax and shipping calculations
- Free shipping on orders over $50

### Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Collapsible navigation menu

## 🎨 Customization

### Adding Products

Edit `src/data/products.js` to add new products:

```javascript
{
  id: 9,
  name: "New Product",
  price: 99.99,
  originalPrice: 129.99,
  image: "product-image-url",
  category: "Electronics",
  rating: 4.5,
  reviews: 50,
  description: "Product description",
  features: ["Feature 1", "Feature 2"],
  inStock: true
}
```

### Styling

- Modify CSS files to change colors, fonts, and layout
- Global styles in `src/index.css`
- Component-specific styles in respective `.css` files

### Features

- Add new pages by creating components in `src/pages/`
- Extend cart functionality in `src/context/CartContext.js`
- Add new routes in `src/App.js`

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify/Vercel

1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Deploy automatically on push

### Deploy to GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/repository-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d build"`
4. Run `npm run deploy`

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the browser console for errors
2. Ensure all dependencies are installed
3. Try clearing browser cache and localStorage
4. Create an issue with detailed description

---

**Happy Shopping! 🛒✨**
