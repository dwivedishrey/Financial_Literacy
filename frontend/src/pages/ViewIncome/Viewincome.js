import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../Context/globalContext';
import { InnerLayout } from '../styles/Layout';
import IncomeItem from '../IncomeItem/IncomeItem';

function Viewincome() {
  const { incomes, getIncomes, deleteIncome, user } = useGlobalContext();
 
 
  useEffect(() => {
    if (user) {
      getIncomes();
    }
  }, [getIncomes, user]);

  return (
    <IncomePageStyled>
      <InnerLayout>
        <h1>Your Incomes</h1>
        <div className="income-content">
          {incomes.map((income) => {
            const { _id, title, amount, date, category, description, type } = income;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteIncome}
              />
            );
          })}
        </div>
      </InnerLayout>
    </IncomePageStyled>
  );
}

const IncomePageStyled = styled.div`
  .income-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default Viewincome;
