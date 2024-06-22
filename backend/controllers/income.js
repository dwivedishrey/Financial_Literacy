const Income = require("../models/IncomeModel");
const mongoose = require('mongoose');
const { users } = require('../db/db');

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date, user_id} = req.body;
    
    
    // Convert the user_id to ObjectId
    const userId = user_id 
    

    if (userId==null) {
        return res.status(401).json({ message: 'User not is authenticated' });
    }

    try {
        if (!title || !category || !description || !date ) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number' });
        }

        const income = new Income({
            title,
            amount,
            category,
            description,
            date,
            user: userId // Associate the income with the user
        });

        await income.save();
        res.status(200).json({ message: 'Income added', income });
    } catch (error) {
       
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.getIncome = async (req, res) => {
    const { user_id } = req.query;
    

    // Convert the user_id to ObjectId
    let userId;
    try {
        userId = user_id ? new mongoose.Types.ObjectId(user_id) : null;
    } catch (error) {
        return res.status(400).json({ message: 'Invalid user_id format' });
    }

    // Log the converted userId for debugging
   

    if (!userId) {
        return res.status(401).json({ message: 'User is not authenticated' });
    }

    try {
        const incomes = await Income.find({ user: userId }).sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
      
        res.status(500).json({ message: 'Server Error' });
    }
}


exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    const userId = req.body.user_id;

    // Ensure user ID is provided
    if (!userId) {
        return res.status(401).json({ message: 'User not authenticated' });
    }

    try {
        // Find the income by ID and user ID to ensure the income belongs to the user
        const income = await Income.findOneAndDelete({ _id: id, user: userId });

        if (!income) {
            return res.status(404).json({ message: 'Income not found' });
        }

        res.status(200).json({ message: "Income deleted successfully" });
    } catch (error) {
        
        res.status(500).json({ message: 'Server Error' });
    }
};




