import React from 'react';
import './Advisorbox.css'; // Import the CSS file for styling
import star from "../../../assets/star.png";

const Advisorbox = ({ image, name, ratings, price }) => {
  return (
    <div className="advisorbox-container">
      <div className="advisorbox-content">
        <img src={image} alt={name} className="advisor-image" />
        <h4 className="advisor-name">{name}</h4>
      </div>
      <div className="advisorbox-details">
        <div className="advisor-ratings">
          <img src={star} alt="star" className="star-icon" />
          <p style={{color:"black",fontSize:"20px",fontWeight:"600"}}>{ratings}</p>
        </div>
        <p style={{color:"black"}} className="advisor-price">{price}</p>
        <button className="connect-button">Connect Now</button>
      </div>
    </div>
  );
};

export default Advisorbox;
