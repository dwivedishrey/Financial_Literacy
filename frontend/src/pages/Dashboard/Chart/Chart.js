import React from 'react';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import { dateFormat } from '../../Utils/dateFormat';



function Chart() {
  const { incomes, expenses } = useGlobalContext();

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: 'Income',
        data: incomes.map((income) => {
          const { amount } = income;
          return amount;
        }),
        backgroundColor: 'green',
      },
      {
        label: 'Expenses',
        data: expenses.map((expense) => {
          const { amount } = expense;
          return amount;
        }),
        backgroundColor: 'red',
      }
    ]
  };

  return (
    <ChartStyled>
      <Bar data={data} />
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  background: #FCF6F9;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;

export default Chart;
