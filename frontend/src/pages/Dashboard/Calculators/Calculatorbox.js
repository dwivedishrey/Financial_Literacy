import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Calculators.css";

const CalculatorBox = ({ title, icon, arrow, backgroundImage }) => {
  return (
    <div
      className="calculator-box"
      style={{
        backgroundImage: `linear-gradient(to left, transparent 40%, rgba(236, 236, 236, 0.9) 98%), url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="overlay"></div>
      <div className="calculator-header">
        <div
          style={{ color: "rgba(11, 11, 69, 0.912)" }}
          className="calculator-icon"
        >
          {icon}
        </div>
        <h4 className="calculator-title">{title}</h4>
      </div>
      <div className="calculator-arrow-container">
        <Link
          style={{ color: "rgba(11, 11, 69, 0.912)" }}
          to={arrow}
          className="calculator-arrow"
        >
          <ArrowRightAltIcon />
        </Link>
      </div>
    </div>
  );
};

export default CalculatorBox;
