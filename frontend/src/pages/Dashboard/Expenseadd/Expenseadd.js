import React, { useEffect } from 'react';
import { useGlobalContext } from '../../Context/globalContext';
import Expenseform from './Expenseform';
import girl from '../../../assets/t1.png'
import './Expense.css';
function Expenseadd() {
  const { incomes, getIncomes, deleteIncome, users ,getExpenses} = useGlobalContext();

  useEffect(() => {
    if (users) {
      getExpenses(); // Fetch incomes when the component mounts
    }
  }, []);
  const style = {
    backgroundImage: `url(${girl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
   backgroundSize:'cover',
  };
  return (
    <div style={style} className="expense-container"> 

          <div className="expense-content">
            
            <div className="form-container">
              <Expenseform />
            </div>
  
          </div>
       
    </div>
  );
}
export default Expenseadd;
