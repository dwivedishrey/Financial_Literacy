import React, { useState } from 'react';
import './Rewards.css';
import Rewardbox from './Rewardbox';

const Rewards = () => {
  const [referralCode] = useState("ACRTIONSFHSHJTYOIU");

  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralCode);
    alert("Referral code copied to clipboard!");
  };

  return (
    <div className="rewards-container">
      {/* HEADER */}
      <div className="rewards-header">
      <h2 style={{color: "white", backgroundColor: "#1e3a8a", padding: "10px 20px", borderRadius: "8px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", fontSize: "24px", fontWeight: "bold"}} className="news-title">Reward Store</h2>

    
        <p style={{color:"black"}} className="rewards-subtitle">Unlock Exclusive Rewards as You Learn and Play</p>
      </div>
      
      {/* GRID & REWARDS */}
      <div className="rewards-grid">
        <div className="grid-item">
          <Rewardbox
            title="Amazon Vouchers"
            price="200 points"
          />
        </div>
        <div className="grid-item">
          <Rewardbox
            title="Flipkart Vouchers"
            price="180 points"
          />
        </div>
        <div className="grid-item">
          <Rewardbox
            title="Myntra Vouchers"
            price="150 points"
          />
        </div>
      </div>
      
      <div className="referral-section">
        <h2 style={{color:"black"}} className="referral-title">Earn more rewards by sharing with your friends</h2>
        <div className="referral-content">
          <p style={{color:"black"}} className="referral-info">1 Referral = 10 points</p>
          <div className="referral-code-container">
            <input
              value={referralCode}
              readOnly
              className="referral-code-input"
            />
            <button className="copy-button" onClick={handleCopyClick}>Tap to Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;

