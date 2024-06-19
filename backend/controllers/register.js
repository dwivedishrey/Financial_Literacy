const database = require('../db/db');
const { ObjectId, UUID } = require('mongodb'); // Import ObjectId from MongoDB

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Password validation regex (example)
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;



exports.register = async (req, res) => {
    const { username, email, password, uid } = req.body;
    try {
        if (!email || !uid) {
            return res.status(400).json({ message: 'Email and UID are required' });
        }

        const db = await database.db(); // Calling the db function from the imported module
        const userCollection = db.collection('users');
        
        const user_id = new ObjectId(); // Generate a new ObjectId for the user

        const newUser = { 
            user_id, 
            username: username || null,  // Use null if username is not provided
            email, 
            password: password || null, // Use null if password is not provided
            uid 
        }; 

        const result = await userCollection.insertOne(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.getUserIdByUid = async (req, res) => {
    const { uid } = req.params;
    try {
      const db = await database.db();
      const userCollection = db.collection('users');
      const user = await userCollection.findOne({ uid });
      if (user) {
        res.json({ user_id: user._id });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch user ID' });
    }
  };
