const Investment = require("../models/InvestmentModel");
const mongoose = require('mongoose');

exports.addInvestment = async (req, res) => {
    const { type, amount, purchaseDate, currentValue, expectedGrowth, description, user_id } = req.body;

    const userId = user_id;

    if (userId == null) {
        return res.status(401).json({ message: 'User is not authenticated' });
    }

    try {
        if (!type || !purchaseDate || !currentValue || !expectedGrowth || !description || !amount) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number' });
        }

        const investment = new Investment({
            type,
            amount,
            purchaseDate,
            currentValue,
            expectedGrowth,
            description,
            user: userId,
        });

        await investment.save();
        res.status(200).json({ message: 'Investment added', investment });
    } catch (error) {
        
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getInvestments = async (req, res) => {
    const { user_id } = req.query;
   

    let userId;
    try {
        userId = user_id ? new mongoose.Types.ObjectId(user_id) : null;
    } catch (error) {
        return res.status(400).json({ message: 'Invalid user_id format' });
    }


    if (!userId) {
        return res.status(401).json({ message: 'User is not authenticated' });
    }

    try {
        const investments = await Investment.find({ user: userId }).sort({ createdAt: -1 });
        res.status(200).json(investments);
    } catch (error) {
       
        res.status(500).json({ message: 'Server Error' });
    }
};
