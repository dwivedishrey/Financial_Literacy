const Expense = require("../models/ExpenseModel")
const mongoose = require('mongoose');
exports.addExpense=async(req,res) => {
    const {title,amount,category,description,date,user_id}=req.body
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

        const expense = new Expense({
            title,
            amount,
            category,
            description,
            date,
            user: userId // Associate the income with the user
        });

        await expense.save();
        res.status(200).json({ message: 'Expenses added', expense });
    } catch (error) {
        
        res.status(500).json({ message: 'Server Error' });
    }
    
    
}

exports.getExpense = async (req, res) => {
    const { user_id } = req.query;
   

    // Convert the user_id to ObjectId
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
        const incomes = await Expense.find({ user: userId }).sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
       
        res.status(500).json({ message: 'Server Error' });
    }
}


exports.deleteExpense= async(req,res) =>{
    const {id}=req.params;
    ExpenseSchema .findByIdAndDelete(id)
       .then((income)=>{
        res.status(200).json({message:"ExpenseSchema  deleted successfully"})
       })
       .catch((err)=>{
        res.status(500).json({message:'Server Error'})

       })
}