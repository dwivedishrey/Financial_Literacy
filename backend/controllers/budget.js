const Budget = require('../models/BudgetModel');

exports.setTotalBudget = async (req, res) => {
    const { user_id, totalBudget } = req.body;
    try {
        const budget = await Budget.findOneAndUpdate(
            { user: user_id },
            { totalBudget },
            { new: true, upsert: true }
        );
        res.status(200).json(budget);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getTotalBudget = async (req, res) => {
    const { user_id } = req.query;
    try {
        const budget = await Budget.findOne({ user: user_id });
        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }
        res.status(200).json(budget);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
