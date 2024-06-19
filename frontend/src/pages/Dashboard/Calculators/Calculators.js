import React from 'react';
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import "./Calculators.css";
import CalculatorBox from './Calculatorbox';
import bg from '../../../assets/cal1.png'

const style = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
 backgroundSize:'cover',
};
const Calculators = () => {
  return (
    <div className='cal-contain' style={style}>
    <div className="calculators-container">
      {/* HEADER */}
      <div className="calculators-header">
        <h2 className="calculators-title">Calculators</h2>
        <hr className="header-line" />
        <p style={{color:"black"}} className="calculators-description">
          Financial calculators are indispensable tools for anyone looking to make informed financial decisions. Whether you are planning to take out a loan, save for a future goal, or manage your daily expenses, financial calculators provide clarity and direction. They transform complex financial concepts into easily understandable numbers, helping users to visualize their financial future and make well-informed decisions.
        </p>
      </div>

      {/* GRID & CHARTS */}
      <div className="calculators-grid">
        <div className="grid-item">
          <CalculatorBox
            title="EMI Calculator"
            icon={<AttachMoneyIcon style={{ fontSize: 40 }} />}
            arrow="/dashboard/emicalc"
          />
        </div>
        <div className="grid-item">
          <CalculatorBox
            title="Mortgage Calculator"
            icon={<HomeIcon style={{ fontSize: 40 }} />}
            arrow="/dashboard/mortagecalc"
          />
        </div>
        <div className="grid-item">
          <CalculatorBox
            title="Investment Calculator"
            icon={<TrendingUpIcon style={{ fontSize: 40 }} />}
            arrow="/dashboard/investmentcalc"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Calculators;