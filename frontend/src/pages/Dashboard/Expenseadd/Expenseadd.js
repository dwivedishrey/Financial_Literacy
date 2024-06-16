import React, { useEffect } from 'react';
import { useGlobalContext } from '../../Context/globalContext';
import Expenseform from './Expenseform';
import SetBudget from '../SetBudget/Budget';
import Header from '../components/Header';


function Expenseadd() {
  const { incomes, getIncomes, deleteIncome, users ,getExpenses} = useGlobalContext();

  useEffect(() => {
    if (users) {
      getExpenses(); // Fetch incomes when the component mounts
    }
  }, []);
  
  return (
    <div>
    
         
      <Header title="Expenses Details" />
         <hr/>
          <div className="income-content">
            <div className="form-container">
              <Expenseform />
            </div>
            <SetBudget />
           
          </div>
       
    </div>
  );
}
export default Expenseadd;
