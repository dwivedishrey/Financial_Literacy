import React, { useEffect } from 'react';
import girl from '../../../assets/t1.png'

import './Portfolioadd.css';
import PortfolioForm from './Portfolioform';
const style = {
  backgroundImage: `url(${girl})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
 backgroundSize:'cover',
};
function Portfolioadd() {
  
  return (
    <div style={style} className="portfolio-container"> 

          <div className="portfolio-content">
            <div className="form-container">
              <PortfolioForm />
            </div>
  
          </div>
       
    </div>
  );
}
export default Portfolioadd;
