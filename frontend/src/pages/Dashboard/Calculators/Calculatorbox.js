import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { textDecoration } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Calculators.css";

const CalculatorBox = ({ title, icon, arrow }) => {
  return (
    <div className="calculator-box">
      <div className="calculator-header">
        <div style={{color:"rgba(11, 11, 69, 0.912)"}} className="calculator-icon">{icon}</div>
        <h4 className="calculator-title">{title}</h4>
      </div>
      <div className="calculator-arrow-container">
        <Link style={{color:"rgba(11, 11, 69, 0.912)"}} to={arrow} className="calculator-arrow">
          <ArrowRightAltIcon />
        </Link>
      </div>
    </div>
  );
};

export default CalculatorBox;