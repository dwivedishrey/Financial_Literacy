import React, { useEffect } from 'react';
import Form from '../../Form/Form';
import { useGlobalContext } from '../../Context/globalContext';
import Header from '../components/Header';
import './income.css';

function Incomeadd() {
  const { getIncomes, users } = useGlobalContext();

  useEffect(() => {
    if (users) {
      getIncomes(); // Fetch incomes when the component mounts
    }
  }, []);

  return (
    <div className="background-image">
      <Header title="Income Details" />
      <hr />
      <div className="income-content">
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Incomeadd;
