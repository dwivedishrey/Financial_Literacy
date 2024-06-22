import React, { useState } from "react";
import { Slider, Typography, Table, TableCell, TableRow } from "@mui/material";
import { Pie } from "react-chartjs-2";
import "../EmiCalc/Emicalc.css";
import TableDetails from "./TableDetails";
import SliderMarks from "./SliderMarks";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function Mortagecalc() {
  const [pAmount, setpAmount] = useState(2755000);
  const [interest, setInterest] = useState(7);
  const [duration, setDuration] = useState(147);
  const maxValue = 6000000;
  const intMax = 20;
  const maxDuration = 360;

  const intr = interest / 1200;
  const emi = duration
    ? Math.round((pAmount * intr) / (1 - Math.pow(1 / (1 + intr), duration)))
    : 0;
  const totalAmt = duration * emi;
  const TotalAmountCredit = Math.round(
    (emi / intr) * (1 - Math.pow(1 + intr, -duration))
  );
  const TotalAmountofInterest = Math.round(totalAmt - TotalAmountCredit);

  return (
    <div className="calc">
      <div className="calApp">
        <h1 className="calHeading">
          <u>Mortage Calculator</u>
        </h1>

        <div className="slider-container">
          <Typography gutterBottom>
            <strong>Loan Amount</strong>
          </Typography>
          <Slider
            value={pAmount}
            marks={SliderMarks.marksAmt}
            onChange={(event, vAmt) => {
              setpAmount(vAmt);
            }}
            defaultValue={pAmount}
            max={maxValue}
            className="slider"
          />
        </div>
        <div className="slider-container">
          <Typography gutterBottom>
            <strong>Interest Rate%</strong>
          </Typography>
          <Slider
            value={interest}
            marks={SliderMarks.marksInt}
            onChange={(event, vInt) => {
              setInterest(vInt);
            }}
            defaultValue={interest}
            max={intMax}
            className="slider"
          />
        </div>
        <div className="slider-container">
          <Typography gutterBottom>
            <strong>Tenure (Months)</strong>
          </Typography>
          <Slider
            value={duration}
            marks={SliderMarks.marksTenure}
            onChange={(event, vDur) => {
              setDuration(vDur);
            }}
            defaultValue={duration}
            max={maxDuration}
            className="slider"
          />
        </div>
        <div className="table-container">
          <Table style={{ width: "100%" }}>
            <TableRow>
            <div className="table-con">
              <TableCell style={{ width: "50%" }} className="table-details">
                <TableDetails
                  pAmount={pAmount}
                  interest={interest}
                  duration={duration}
                  emi={emi}
                  TotalAmountofInterest={TotalAmountofInterest}
                />
              </TableCell>
              </div>
              <TableCell style={{ width: "50%" }} className="pie-chart">
                <Pie
                  data={{
                    labels: ["Principle", "Total Interest"],
                    datasets: [
                      {
                        data: [pAmount, TotalAmountofInterest],
                        backgroundColor: ["#83B4FF", "#3AA6B9"],
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

export default Mortagecalc;


