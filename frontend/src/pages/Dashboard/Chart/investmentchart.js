import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';

function InvestmentPieChart() {
  const { investments } = useGlobalContext();

  const investmentCategories = investments.reduce((acc, investment) => {
    acc[investment.type] = (acc[investment.type] || 0) + investment.currentValue;
    return acc;
  }, {});

  const data = {
    labels: [...Object.keys(investmentCategories)],
    datasets: [
      {
        data: [...Object.values(investmentCategories)],
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

  return (
    <PieChartStyled>
      <Pie data={data} />
    </PieChartStyled>
  );
}

const PieChartStyled = styled.div`
  background: #FCF6F9;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  width: 300px;
  height: 250px;
  margin-left: 20px;
  margin-top: 10px;
`;

export default InvestmentPieChart;
