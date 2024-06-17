import React, { useEffect } from 'react';
import { useGlobalContext } from '../../Context/globalContext';
import Expenseform from './Expenseform';

import './Expense.css';
function Expenseadd() {
  const { incomes, getIncomes, deleteIncome, users ,getExpenses} = useGlobalContext();

  useEffect(() => {
    if (users) {
      getExpenses(); // Fetch incomes when the component mounts
    }
  }, []);
  
  return (
    <div className="expense-container"> 

          <div className="expense-content">
            <div className="form-container">
              <Expenseform />
            </div>
  
          </div>
       
    </div>
  );
}
export default Expenseadd;
