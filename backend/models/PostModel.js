const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    postedBy: {
        type: ObjectId,
        ref: "users" // Ensure this matches the correct model name for users
    },
    username:{
        type:String,
        ref:"users"
    },
    comments: [{
        comment: { type: String },
        postedBy: { type: ObjectId, ref: "users" } ,
        username:{      type:String,
            ref:"users"}   // Reference to the User model
    }]

}, { timestamps: true });

// Export the model
module.exports = mongoose.model("Post", postSchema);
