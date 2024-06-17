import React, { useEffect } from 'react';
import Form from '../../Form/Form';
import { useGlobalContext } from '../../Context/globalContext';
import Header from '../components/Header';
import './income.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
function Incomeadd() {
  const { getIncomes, users } = useGlobalContext();

  useEffect(() => {
    if (users) {
      getIncomes(); // Fetch incomes when the component mounts
    }
  }, []);

  return (
    
      <div className="income-container">
         
      <div className="income-content">
     
       
     
        <div className="form-container">
          <Form />
        </div>
      </div>
      </div>
    
  );
}

export default Incomeadd;
