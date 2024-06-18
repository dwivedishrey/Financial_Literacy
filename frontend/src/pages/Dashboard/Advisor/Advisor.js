import React from 'react';
import './Advisor.css'; // Import the CSS file for styling
import Advisorbox from './Advisorbox';
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/image3.jpg";
import star from "../../../assets/star.png";

const Advisor = () => {
  return (
    <div className="advisor-container">
      {/* HEADER */}
      <div className="advisor-header">
        <h2>List of Financial Advisors</h2>
        <hr className="header-line" />
      </div>

      {/* GRID */}
      <div className="advisor-grid">
        <div className="advisor-item">
          <Advisorbox
            image={image1}
            name="Sophia Caldwell"
            ratings="4"
            price="Rs 500"
          />
        </div>
        <div className="advisor-item">
          <Advisorbox
            image={image2}
            name="Eleanor Kingsley"
            ratings="4"
            price="Rs 500"
          />
        </div>
        <div className="advisor-item">
          <Advisorbox
            image={image3}
            name="Jacqueline Marshall"
            ratings="5"
            price="Rs 500"
          />
        </div>
      </div>
    </div>
  );
};

export default Advisor;
