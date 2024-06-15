import React, { useEffect } from 'react';
import { useGlobalContext } from '../../Context/globalContext';
import Expenseform from './Expenseform';


function Expenseadd() {
  const { incomes, getIncomes, deleteIncome, users ,getExpenses} = useGlobalContext();

  useEffect(() => {
    if (users) {
      getExpenses(); // Fetch incomes when the component mounts
    }
  }, []);
  
  return (
    <div>
      
          <h1>Expenses</h1>
         
          <div className="income-content">
            <div className="form-container">
              <Expenseform />
            </div>
           
          </div>
       
    </div>
  );
}
export default Expenseadd;
