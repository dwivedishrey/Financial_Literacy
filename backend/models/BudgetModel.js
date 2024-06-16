const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
  totalBudget:{
    type:Number,
    required:true,
    maxLength:20,
  }
 
});



module.exports=mongoose.model('Budget',BudgetSchema)