import React, { useEffect } from 'react';

import Form from '../../Form/Form';
import { useGlobalContext } from '../../Context/globalContext';
import IncomeItem from '../../IncomeItem/IncomeItem';


function Incomeadd() {
  const { incomes, getIncomes, deleteIncome, users ,message} = useGlobalContext();

  useEffect(() => {
    if (users) {
      getIncomes(); // Fetch incomes when the component mounts
    }
  }, []);
  
  return (
    <div>
      
          <h1>Incomes</h1>
       
          <div className="income-content">
            <div className="form-container">
              <Form />
            </div>
           
          </div>
       
    </div>
  );
}
export default Incomeadd
