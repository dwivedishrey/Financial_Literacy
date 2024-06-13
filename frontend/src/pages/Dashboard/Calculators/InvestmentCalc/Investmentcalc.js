import React, { useState } from "react";
import { Slider, Typography, Table, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Pie } from "react-chartjs-2";
import "../EmiCalc/Emicalc.css";
import TableDetails from "./TableDetails";
import SliderMarks from "./SliderMarks";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Styled Slider component
const PrettoSlider = styled(Slider)(({ theme }) => ({
  color: "MediumVioletRed",
  height: 10,
  "& .MuiSlider-thumb": {
    height: 25,
    width: 25,
    backgroundColor: "white",
    border: "3px solid black",
    marginTop: -9,
    marginLeft: -9,
  },
  "& .MuiSlider-track": {
    height: 10,
    borderRadius: 4,
  },
  "& .MuiSlider-rail": {
    height: 10,
    borderRadius: 4,
  },
}));

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
    <div className="Calc">
    <div className="CalApp">
      <h1 className="CalHeading">
        <u>Investment Calculator</u>
      </h1>

      <div>
        <Typography gutterBottom>
          <strong>Monthly Investment</strong>
        </Typography>
        <PrettoSlider
          value={monthlyInvestment}
          marks={SliderMarks.marksAmt}
          onChange={(event, value) => setMonthlyInvestment(value)}
          defaultValue={monthlyInvestment}
          max={maxInvestment}
        />
      </div>
      <div>
        <Typography gutterBottom>
          <strong>Expected Return Rate %</strong>
        </Typography>
        <PrettoSlider
          value={expectedReturnRate}
          marks={SliderMarks.marksInt}
          onChange={(event, value) => setExpectedReturnRate(value)}
          defaultValue={expectedReturnRate}
          max={maxReturnRate}
        />
      </div>
      <div>
        <Typography gutterBottom>
          <strong>Time Period (Years)</strong>
        </Typography>
        <PrettoSlider
          value={timePeriod}
          marks={SliderMarks.marksTenure}
          onChange={(event, value) => setTimePeriod(value)}
          defaultValue={timePeriod}
          max={maxTimePeriod}
        />
      </div>
      <div>
        <Table>
          <TableRow>
            <TableCell>
              <TableDetails
                monthlyInvestment={monthlyInvestment}
                expectedReturnRate={expectedReturnRate}
                timePeriod={timePeriod}
                totalInvestment={totalInvestment}
                estimatedReturns={estimatedReturns}
                futureValue={futureValue}
              />
            </TableCell>
            <TableCell>
              <Pie
               
               data={{
                labels: ["Estimated Returns", "Total Investment"],
                 datasets: [
                   {
                    data: [estimatedReturns, totalInvestment],
                    backgroundColor: ["#254336", "3AA6B9"],
                   },
                 ],
               }}
               options={{
                 maintainAspectRatio: false,
                 responsive: true,
               }}
               width={200}
               height={200}
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
