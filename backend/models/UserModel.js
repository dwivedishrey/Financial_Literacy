const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: mongoose.Types.ObjectId // Generate a default ObjectId if not provided
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
    
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema); // Use singular form for the model name

