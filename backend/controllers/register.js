const database = require('../db/db');
const { ObjectId, UUID } = require('mongodb'); // Import ObjectId from MongoDB


exports.register = async (req, res) => {
    const { username, email, password,uid } = req.body;
    try {
        const db = await database.db(); // Calling the db function from the imported module
        const userCollection = db.collection('users');
        
        const user_id = new ObjectId(); // Generate a new ObjectId for the user
        const newUser = { user_id, username, email, password,uid}; // Include user_id in the user object
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
