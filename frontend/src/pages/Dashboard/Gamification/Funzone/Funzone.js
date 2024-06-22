import React from 'react';
import './Funzone.css';
import Funbox from './Funbox';
import game3 from '../../../../assets/game3.jpg';
import game6 from '../../../../assets/game6.jpg';
import game5 from '../../../../assets/game5.jpg';
import game2 from '../../../../assets/game2.jpg';
import game7 from '../../../../assets/game7.jpg';
import game8 from '../../../../assets/game8.jpg';

const Funzone = () => {
  return (
    <div className="funzone-container">
      {/* HEADER */}
      <div className="funzone-header">
      <h2 style={{color: "white", backgroundColor: "#1e3a8a", padding: "10px 20px", borderRadius: "8px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", fontSize: "24px", fontWeight: "bold"}} className="news-title">Finance FunZone</h2>
      </div>

      {/* GRID & GAMES */}
      <div className="funzone-grid">
        <div className="grid-item">
          <Funbox
            image={game6}
            name="Stock Market Simulator Game"
            link="https://play.google.com/store/apps/details?id=com.threeinvesteers.app"
          />
        </div>
        <div className="grid-item">
          <Funbox
            image={game3}
            name="Business Empire: RichMan"
            link="https://play.google.com/store/apps/details?id=com.ttterbagames.businesssimulator"
          />
        </div>
        <div className="grid-item">
          <Funbox
            image={game8}
            name="Rat Race - Business Strategy"
            link="https://play.google.com/store/apps/details?id=com.kidapps.rat_race_2"
          />
        </div>
        <div className="grid-item">
          <Funbox
            image={game5}
            name="Money Tree: Cash Grow Game"
            link="https://play.google.com/store/apps/details?id=com.tapps.idle.clicker.upgrade.moneytree2"
          />
        </div>
        <div className="grid-item">
          <Funbox
            image={game2}
            name="Stock Game- Capitalism"
            link="https://play.google.com/store/apps/details?id=com.SyGame.Capitalism"
          />
        </div>
        <div className="grid-item">
          <Funbox
            image={game7}
            name="Tycoon-Business Empires Game"
            link="https://play.google.com/store/apps/details?id=com.michael.tycoon_company_manager"
          />
        </div>
      </div>
    </div>
  );
};

export default Funzone;

