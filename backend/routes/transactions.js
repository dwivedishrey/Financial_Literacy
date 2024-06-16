const { addExpense, deleteExpense, getExpense } = require('../controllers/expense');
const { addIncome, deleteIncome, getIncome,fetchuser } = require('../controllers/income');
const { register,getUserIdByUid } = require('../controllers/register');
const { createPost,getAllPosts,addComment } = require('../controllers/post'); 
const { addInvestment,getInvestments } = require('../controllers/investment'); 
const { setTotalBudget, getTotalBudget } = require('../controllers/budget');
const router = require('express').Router();

router.post('/add-income', addIncome)
      .get('/get-income', getIncome)
      .delete('/delete-income/:id', deleteIncome)
      .post('/add-expense', addExpense)
      .get('/get-expense', getExpense)
      .delete('/delete-expense/:id', deleteExpense)
      .post('/register', register)
      .post('/createpost', createPost)
      .get('/posts', getAllPosts)
      .post('/addComment', addComment)
      .get('/getUserIdByUid/:uid', getUserIdByUid)
      .post('/add-investment', addInvestment)
      .get('/get-investment', getInvestments)
      .post('/set-total-budget', setTotalBudget) // Add route for setting total budget
      .get('/get-total-budget', getTotalBudget); 
    
      
module.exports = router;
