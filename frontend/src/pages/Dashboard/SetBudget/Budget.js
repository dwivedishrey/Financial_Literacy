import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useGlobalContext } from '../../Context/globalContext';
import './Budget.css';

function SetBudget() {
  const { setTotalBudget, message } = useGlobalContext();
  const [budget, setBudget] = useState('');

  const handleInput = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = () => {
    setTotalBudget(budget);
    setBudget(''); // Clear the budget input field
  };

  return (
    <div className="set-budget-container">
      <h4>Set Your Total Budget</h4>
      <input
        type="number"
        className="budget-input"
        placeholder="Enter Total Budget"
        value={budget}
        onChange={handleInput}
      />
      <button className="set-budget-button" onClick={handleSubmit}>
        Set Budget
      </button>
      
    </div>
  );
}

export default SetBudget;
