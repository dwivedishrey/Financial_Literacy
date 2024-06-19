import React, { useEffect } from 'react';
import Form from '../../Form/Form';
import { useGlobalContext } from '../../Context/globalContext';
import Header from '../components/Header';
import './income.css';
import girl from '../../../assets/income1.png'
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
        <div className="image-container">
          <img src={girl} alt="Girl pointing towards form" className="pointing-girl-image" />
        </div>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Incomeadd;
