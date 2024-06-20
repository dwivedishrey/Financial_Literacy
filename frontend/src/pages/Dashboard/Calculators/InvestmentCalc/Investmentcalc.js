import React, { useState } from "react";
import { Slider, Typography, Table, TableCell, TableRow } from "@mui/material";
import { Pie } from "react-chartjs-2";
import "../EmiCalc/Emicalc.css";
import TableDetails from "./TableDetails";
import SliderMarks from "./SliderMarks";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);



function InvestmentCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(7);
  const [timePeriod, setTimePeriod] = useState(10);
  const maxInvestment = 100000;
  const maxReturnRate = 30;
  const maxTimePeriod = 50;

  const annualRate = expectedReturnRate / 100;
  const months = timePeriod * 12;
  const futureValue = Math.round(
    monthlyInvestment *
      ((Math.pow(1 + annualRate / 12, months) - 1) / (annualRate / 12)) *
      (1 + annualRate / 12)
  );
  const totalInvestment = monthlyInvestment * months;
  const estimatedReturns = futureValue - totalInvestment;

  return (
    <div className="calc">
      <div className="calApp">
        <h1 className="calHeading">
          <u>Investment Calculator</u>
        </h1>

        <div className="slider-container">
          <Typography gutterBottom>
            <strong>Monthly Investment</strong>
          </Typography>
          <Slider
            value={monthlyInvestment}
            marks={SliderMarks.marksAmt}
            onChange={(event, value) => setMonthlyInvestment(value)}
            defaultValue={monthlyInvestment}
            max={maxInvestment}
            className="slider"
          />
        </div>
        <div className="slider-container">
          <Typography gutterBottom>
            <strong>Expected Return Rate %</strong>
          </Typography>
          <Slider
            value={expectedReturnRate}
            marks={SliderMarks.marksInt}
            onChange={(event, value) => setExpectedReturnRate(value)}
            defaultValue={expectedReturnRate}
            max={maxReturnRate}
            className="slider"
          />
        </div>
        <div className="slider-container">
          <Typography gutterBottom>
            <strong>Time Period (Years)</strong>
          </Typography>
          <Slider
            value={timePeriod}
            marks={SliderMarks.marksTenure}
            onChange={(event, value) => setTimePeriod(value)}
            defaultValue={timePeriod}
            max={maxTimePeriod}
            className="slider"
          />
        </div>
        <div className="table-container">
          <Table>
            <TableRow>
            <div className="table-con">
              <TableCell className="table-details">
                <TableDetails
                  monthlyInvestment={monthlyInvestment}
                  expectedReturnRate={expectedReturnRate}
                  timePeriod={timePeriod}
                  totalInvestment={totalInvestment}
                  estimatedReturns={estimatedReturns}
                  futureValue={futureValue}
                />
              </TableCell>
              </div>
              <TableCell className="table-details">
                <Pie
                  data={{
                    labels: ["Estimated Returns", "Total Investment"],
                    datasets: [
                      {
                        data: [estimatedReturns, totalInvestment],
                        backgroundColor: ["#254336", "#3AA6B9"],
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                  }}
                  className="pie-chart"
                />
              </TableCell>
            </TableRow>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default InvestmentCalculator;

