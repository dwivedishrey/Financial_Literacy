const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connection = await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected");
        return connection.connection.db; // Return the database connection object
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error; // Throw the error to handle it in the caller function
    }
};
async function getUserCollection() {
    const database = await connectDB();
    return database.collection('users');
  }
module.exports = { db,getUserCollection, };
