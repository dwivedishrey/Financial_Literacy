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
    <div className="Calc">
      <div className="CalApp">
        <h1 className="CalHeading">
          <u>Mortage Calculator</u>
        </h1>

        <div>
          <Typography gutterBottom>
            <strong>Loan Amount</strong>
          </Typography>
          <PrettoSlider
            value={pAmount}
            marks={SliderMarks.marksAmt}
            onChange={(event, vAmt) => {
              setpAmount(vAmt);
            }}
            defaultValue={pAmount}
            max={maxValue}
          />
        </div>
        <div>
          <Typography gutterBottom>
            <strong>Interest Rate%</strong>
          </Typography>
          <PrettoSlider
            value={interest}
            marks={SliderMarks.marksInt}
            onChange={(event, vInt) => {
              setInterest(vInt);
            }}
            defaultValue={interest}
            max={intMax}
          />
        </div>
        <div>
          <Typography gutterBottom>
            <strong>Tenure (Months)</strong>
          </Typography>
          <PrettoSlider
            value={duration}
            marks={SliderMarks.marksTenure}
            onChange={(event, vDur) => {
              setDuration(vDur);
            }}
            defaultValue={duration}
            max={maxDuration}
          />
        </div>
        <div>
          <Table style={{ width: "100%" }}>
            <TableRow>
              <TableCell style={{ width: "50%" }}>
                <TableDetails
                  pAmount={pAmount}
                  interest={interest}
                  duration={duration}
                  emi={emi}
                  TotalAmountofInterest={TotalAmountofInterest}
                />
              </TableCell>
              <TableCell style={{ width: "50%" }}>
                <Pie
                  data={{
                    labels: ["Principle", "Total Interest"],
                    datasets: [
                      {
                        data: [pAmount, TotalAmountofInterest],
                        backgroundColor: ["#83B4FF", "3AA6B9"],
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
