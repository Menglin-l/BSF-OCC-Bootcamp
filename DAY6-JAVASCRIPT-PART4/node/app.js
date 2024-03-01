//Main application - app.js

// Import necessary modules
const products = require('./product');
const cart = require('./cart');
const order = require('./order');
const calculateTotal = require('./order');

// Add products to the cart
cart.addToCart(products[0]);
cart.addToCart(products[2]);

// Display the cart items
console.log('Cart Items:', cart.getCartItems());

// Calculate and display the order amount
const totalAmount = calculateTotal(cart.getCartItems());
console.log('Total order amount', totalAmount);