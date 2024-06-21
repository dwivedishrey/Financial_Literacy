const Budget = require('../models/BudgetModel');

const mongoose = require('mongoose');
const { users } = require('../db/db');
exports.setTotalBudget = async (req, res) => {
    const { user_id, totalBudget } = req.body;
    try {
        // Ensure user_id and totalBudget are valid
        if (!user_id || totalBudget === undefined) {
            return res.status(400).json({ message: 'User ID and total budget are required' });
        }

        const budget = await Budget.findOneAndUpdate(
            { user: user_id },
            { totalBudget },
            { new: true, upsert: true } // Create a new document if none exists
        );
        
        res.status(200).json(budget);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



exports.getTotalBudget = async (req, res) => {
    const { user_id } = req.query;
    console.log('Received user_id:', user_id);

    // Convert the user_id to ObjectId
    let userId;
    try {
        userId = user_id ? new mongoose.Types.ObjectId(user_id) : null;
    } catch (error) {
        console.error('Invalid user_id format:', error);
        return res.status(400).json({ message: 'Invalid user_id format' });
    }

    // Log the converted userId for debugging
    console.log('Converted userId:', userId);

    if (!userId) {
        return res.status(401).json({ message: 'User is not authenticated' });
    }

    try {
        const budget = await Budget.findOne({ user: userId });
        if (!budget) {
            // If no budget is found, return a default budget
            console.log('No budget found for user:', userId);
            return res.status(200).json({ totalBudget: 0 });
        }
        
        res.status(200).json({ totalBudget: budget.totalBudget });
    } catch (error) {
        console.error('Error fetching total budget:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};
