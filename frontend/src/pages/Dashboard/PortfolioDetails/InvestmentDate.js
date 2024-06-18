import React, { useEffect } from 'react';
import { useGlobalContext } from "../../Context/globalContext";
import './InvestmentDate.css';

const UpcomingPayments = () => {
  const { getInvestments, upcomingPayments } = useGlobalContext();

  useEffect(() => {
    getInvestments();
  }, []);
  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };
  return (
    <div className="upcoming-payments">
      {upcomingPayments.length > 0 ? (
        upcomingPayments.map(investment => (
          <div key={investment._id} className="payment-item">
            <h3>{capitalizeWords(investment.type)}</h3>
            <p>Amount: Rs {investment.amount}</p>
            <p>Payment Date: {new Date(investment.purchaseDate).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No upcoming payments.</p>
      )}
    </div>
  );
};

export default UpcomingPayments;
