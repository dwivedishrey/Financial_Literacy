import React, { useEffect } from 'react';


import './Portfolioadd.css';
import PortfolioForm from './Portfolioform';
function Portfolioadd() {
  
  return (
    <div className="portfolio-container"> 

          <div className="portfolio-content">
            <div className="form-container">
              <PortfolioForm />
            </div>
  
          </div>
       
    </div>
  );
}
export default Portfolioadd;
