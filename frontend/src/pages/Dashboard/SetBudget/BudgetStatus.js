import React, { useEffect } from 'react';
import { useGlobalContext } from '../../Context/globalContext';
import './Budget.css';

function BudgetStatus() {
  const { totalBudget, totalExpenses, getTotalBudget,users } = useGlobalContext();
  useEffect(() => {
    if (users) {
        getTotalBudget(); // Fetch i=budget when the component mounts
    }
}, []);
 
  return (
    <div className="budget-status-container">
      <div className="budget-status-details">
        <p className="total-budget">Total Budget: Rs {totalBudget}</p>
        <p className="current-spending">Current Spending: Rs {totalExpenses()}</p>
        <p
          className={`budget-status ${totalExpenses() > totalBudget ? 'exceeded' : 'within'}`}
        >
          {totalExpenses() > totalBudget ? 'Budget Exceeded' : 'Within Budget'}
        </p>
      </div>
    </div>
  );
}

export default BudgetStatus;

