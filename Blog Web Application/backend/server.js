// Import necessary modules or dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Create an instance of Express App
const app = express();

// Middleware
app.use(express.json());

// Add the Routes
app.use('/api/posts/', require('./src/routes/post'));

// Connect to MongoDB or DataBase
mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((error) => {
        console.log('Error in connecting to MongoDB:', error.message);
    });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});