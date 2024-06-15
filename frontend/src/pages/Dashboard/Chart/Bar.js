import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import { format } from 'date-fns';

function BarChart() {
  const { incomes, expenses } = useGlobalContext();

  const incomeByMonth = incomes.reduce((acc, income) => {
    const month = format(new Date(income.date), 'yyyy-MM');
    acc[month] = (acc[month] || 0) + income.amount;
    return acc;
  }, {});

  const expenseByMonth = expenses.reduce((acc, expense) => {
    const month = format(new Date(expense.date), 'yyyy-MM');
    acc[month] = (acc[month] || 0) + expense.amount;
    return acc;
  }, {});

  const months = Array.from(new Set([...Object.keys(incomeByMonth), ...Object.keys(expenseByMonth)])).sort();

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: months.map(month => incomeByMonth[month] || 0),
        backgroundColor: 'green',
      },
      {
        label: 'Expenses',
        data: months.map(month => expenseByMonth[month] || 0),
        backgroundColor: 'red',
      }
    ]
  };

  return (
    <BarChartStyled>
      <Bar data={data} />
    </BarChartStyled>
  );
}

const BarChartStyled = styled.div`
  background: #FCF6F9;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;

export default BarChart;
