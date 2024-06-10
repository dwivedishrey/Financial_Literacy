const { addExpense, deleteExpense, getExpense } = require('../controllers/expense');
const { addIncome, deleteIncome, getIncome,fetchuser } = require('../controllers/income');
const { register } = require('../controllers/register');

const router = require('express').Router();

router.post('/add-income', addIncome)
      .get('/get-income', getIncome)
      .delete('/delete-income/:id', deleteIncome)
      .post('/add-expense', addExpense)
      .get('/get-expense', getExpense)
      .delete('/delete-expense/:id', deleteExpense)
      .post('/register', register)
      
     

module.exports = router;
