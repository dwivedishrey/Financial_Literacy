import React, { useState } from "react";
import { Slider, Typography, Table, TableCell, TableRow } from "@mui/material";
import { Pie } from "react-chartjs-2";
import "./Emicalc.css";
import TableDetails from "./TableDetails";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SliderMarks from "./SliderMarks";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function Emicalc() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/dashboard/calculators');
  };
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
      <button className="go-back-button" onClick={handleGoBack}>
          <ArrowBackIcon className="go-back-button-icon" />
         Back 
        </button>
        <h1 className="calHeading">
          <u>EMI Calculator</u>
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
        
          <Table style={{ width: "100%",color:"black" }}>
            <TableRow>
            <div className="table-con">
              <TableCell style={{ width: "50%",color:"black" }}>
                <TableDetails style={{color:"black"}}
                  pAmount={pAmount}
                  interest={interest}
                  duration={duration}
                  emi={emi}
                  TotalAmountofInterest={TotalAmountofInterest}
                />
              </TableCell>
              </div>
              <TableCell style={{ width: "50%" }}>
                <Pie
                  data={{
                    labels: ["Total Interest", "Total Amount"],
                    datasets: [
                      {
                        data: [TotalAmountofInterest, pAmount],
                        backgroundColor: ["#3F51B5", "#2196F3"],
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

export default Emicalc;
