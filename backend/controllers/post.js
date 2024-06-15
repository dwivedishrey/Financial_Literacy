// controllers/post.js
const database = require('../db/db');
const { ObjectId } = require('mongodb');
const Post = require("../models/PostModel");

// Create a post
exports.createPost = async (req, res) => {
    
        const { body, user_id,username } = req.body;
        const userId = user_id 
    if (userId==null) {
        return res.status(401).json({ message: 'User not is authenticated' });
    }
    try {
        const post = new Post({ body, postedBy: userId,username:username });
        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};



exports.getAllPosts = async (req, res) => {
    try {
        const db = await database.db();  // Calling the db function from the imported module
        const postCollection = db.collection('posts');
        const userCollection = db.collection('users');

        // Fetch posts
        const posts = await postCollection.find().sort({ createdAt: -1 }).toArray();

        // Populate postedBy and comments.postedBy fields
        for (const post of posts) {
            if (post.postedBy) {
                const user = await userCollection.findOne({ _id: new ObjectId(post.postedBy) }, { projection: { username: 1 } });
                post.postedBy = user ? user.username : null;
            }
            if (post.comments) {
                for (const comment of post.comments) {
                    if (comment.postedBy) {
                        const user = await userCollection.findOne({ _id: new ObjectId(comment.postedBy) }, { projection: { username: 1 } });
                        comment.postedBy = user ? user.username : null;
                    }
                }
            }
        }

        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

// Add a comment to a post
exports.addComment = async (req, res) => {
    try {
        const { postId, comment, userId ,username} = req.body;
        const post = await Post.findById(postId);
        post.comments.push({ comment, postedBy: userId,username:username });
        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add comment' });
    }
};
