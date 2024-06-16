import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import { Chart as ChartJs, ArcElement, Tooltip, Legend, CategoryScale } from 'chart.js'; 

// Register necessary components
ChartJs.register(ArcElement, Tooltip, Legend, CategoryScale);

function Pieincome() {
  const { incomes } = useGlobalContext();

  const incomeCategories = incomes.reduce((acc, income) => {
    acc[income.category] = (acc[income.category] || 0) + income.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(incomeCategories),
    datasets: [
      {
        data: Object.values(incomeCategories),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const category = tooltipItem.label;
            const value = tooltipItem.raw;
            return `${category}: Rs ${value}`;
          },
        },
      },
    },
  };

  return (
    <PieChartStyled>
      <Pie data={data} options={options} />
    </PieChartStyled>
  );
}

const PieChartStyled = styled.div`
background: #FCF6F9;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  width: 200px;
  height: 200px;
 
`;

export default Pieincome;
