// Import Post Schema
const Post = require('../models/post');

// Creating a Create Post Controller
const createPost = async(req, res) => {
    // Destructuring the body of request
    const { title, author, description, likes, comments } = req.body;

    try {
        const post = await Post.create({
            title, 
            author, 
            description, 
            likes, 
            comments,
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Export the Post Controller
module.exports = createPost;