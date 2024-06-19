import React from 'react';
import './Rewardbox.css';

const Rewardbox = ({ title, price }) => {
  return (
    <div className="rewardbox-container">
      <div className="rewardbox-content">
        <h4  className="rewardbox-title">{title}</h4>
        <p style={{color:"black"}} className="rewardbox-price">{price}</p>
      </div>
      <div className="get-button-container">
        <a href="#" className="get-button">Get</a>
      </div>
    </div>
  );
};

export default Rewardbox;

