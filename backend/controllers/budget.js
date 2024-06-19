const Budget = require('../models/BudgetModel');





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
    try {
        // Ensure user_id is valid
        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const budget = await Budget.findOne({ user: user_id });
        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }
        
        res.status(200).json(budget);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

