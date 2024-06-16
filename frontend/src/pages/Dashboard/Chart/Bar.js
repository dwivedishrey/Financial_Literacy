import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import { format } from 'date-fns';

function BarChart() {
  const { incomes, expenses } = useGlobalContext();

  // Sort incomes and expenses by date
  incomes.sort((a, b) => new Date(a.date) - new Date(b.date));
  expenses.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Calculate cumulative income and expenses
  let cumulativeIncome = 0;
  const cumulativeIncomeData = incomes.map(income => {
    cumulativeIncome += income.amount;
    return cumulativeIncome;
  });

  let cumulativeExpenses = 0;
  const cumulativeExpenseData = expenses.map(expense => {
    cumulativeExpenses += expense.amount;
    return cumulativeExpenses;
  });

  // Determine labels based on dates
  const incomeLabels = incomes.map(income => format(new Date(income.date), 'MMM yyyy'));
  const expenseLabels = expenses.map(expense => format(new Date(expense.date), 'MMM yyyy'));

  // Combine labels and data for income and expenses
  const labels = Array.from(new Set([...incomeLabels, ...expenseLabels])).sort();
  const incomeData = Array(labels.length).fill(0);
  const expenseData = Array(labels.length).fill(0);

  incomeLabels.forEach((label, index) => {
    const idx = labels.indexOf(label);
    incomeData[idx] = cumulativeIncomeData[index];
  });

  expenseLabels.forEach((label, index) => {
    const idx = labels.indexOf(label);
    expenseData[idx] = cumulativeExpenseData[index];
  });

  // Prepare data for bar chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Cumulative Income',
        backgroundColor: 'green',
        data: incomeData,
      },
      {
        label: 'Cumulative Expenses',
        backgroundColor: 'red',
        data: expenseData,
      },
    ],
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
