const ExpenseSchema = require("../models/ExpenseModel")

exports.addExpense=async(req,res) => {
    const {title,amount,category,description,date}=req.body
    const income= ExpenseSchema ({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        if(!title || !category || !description || !date){
            return res.status(400).json({message:'all fields are required'})
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message:'Amount must be positive number'})
        }
        await income.save()
        res.status(200).json({message:'ExpenseSchema  added'})
    }catch(error){
        res.status(500).json({message:'Server Error'})
    }
    console.log(income)
}

exports.getExpense= async(req,res) =>{
    try{
        const incomes= await ExpenseSchema .find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }
    catch(error){
        res.status(500).json({message:'Server Error'})
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