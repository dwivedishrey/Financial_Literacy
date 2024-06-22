import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import { format } from 'date-fns';
import { Chart as ChartJs, ArcElement, Tooltip, Legend, CategoryScale, LineElement, PointElement } from 'chart.js'; 

// Register necessary components
ChartJs.register(ArcElement, Tooltip, Legend, CategoryScale, LineElement, PointElement);

function LineChart() {
  const { incomes, expenses } = useGlobalContext();

  // Calculate income by month
  const incomeByMonth = incomes.reduce((acc, income) => {
    const month = format(new Date(income.date), 'yyyy-MM');
    acc[month] = (acc[month] || 0) + income.amount;
    return acc;
  }, {});

  // Calculate expenses by month
  const expenseByMonth = expenses.reduce((acc, expense) => {
    const month = format(new Date(expense.date), 'yyyy-MM');
    acc[month] = (acc[month] || 0) + expense.amount;
    return acc;
  }, {});

  // Combine all unique months from income and expenses, then sort
  const months = Array.from(new Set([...Object.keys(incomeByMonth), ...Object.keys(expenseByMonth)])).sort();

  // Prepare data for line chart
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: months.map(month => incomeByMonth[month] || 0),
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Expenses',
        data: months.map(month => expenseByMonth[month] || 0),
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
        },
      },
    },
  };

  return (
    <LineChartStyled>
      <Line data={data} options={options} />
    </LineChartStyled>
  );
}

const LineChartStyled = styled.div`
  background: #FCF6F9;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  width: 100%; /* Adjust width to take full width of its container */
  height: 200px; /* Fixed height, adjust as necessary */
  margin-top: 20px; /* Adjust spacing */
`;

export default LineChart;
