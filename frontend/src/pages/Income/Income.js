import React, { useEffect } from 'react';
import styled from "styled-components";

import Form from '../Form/Form';
import { useGlobalContext } from '../Context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import { InnerLayout } from '../styles/Layout';
import Message from '../Dashboard/Message/Message';

function Income() {
  const { incomes, getIncomes, deleteIncome, users } = useGlobalContext();

  useEffect(() => {
    if (users) {
      getIncomes(); // Fetch incomes when the component mounts
    }
  }, []);
  
  return (
    <div>
      <IncomeStyled>
        <InnerLayout>
          <h1>Incomes</h1>
         <Message/>
          <div className="income-content">
            <div className="form-container">
              <Form />
            </div>
            <div className="incomes">
              {incomes.map((income) => {
                const { _id, title, amount, date, category, description, type} = income;
                return <IncomeItem
                  key={ _id }
                  id={ _id }
                  title={ title }
                  description={ description }
                  amount={ amount }
                  date={ date }
                  type={ type }
                  category={ category }
                  indicatorColor="var(--color-green)"
                  deleteItem={ deleteIncome }
                />
              })}
            </div>
          </div>
        </InnerLayout>
      </IncomeStyled>
    </div>
  );
}

const IncomeStyled = styled.div`
display: flex;

.total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--color-green);
    }
}
.income-content{
    display: flex;
    gap: 2rem;
    .incomes{
        flex: 1;
    }
}
`;

export default Income;
