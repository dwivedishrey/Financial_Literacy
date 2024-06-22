import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import Header from '../components/Header';
import bg from '../../../assets/transaction2.jpg';

function Transaction() {
    const { transactionHistory } = useGlobalContext();

    const [...history] = transactionHistory();
    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    };

    return (
        <MainContain>
            <HistoryStyled>
            <h2 style={{color: "white", backgroundColor: "#1e3a8a", padding: "10px 100px", borderRadius: "8px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", fontSize: "24px", fontWeight: "bold"}} className="news-title">Transaction History</h2>
                <div className="history">
                    <table>
                        <thead>
                            <tr className="history-header">
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((item) => {
                                const { _id, title, amount, type, date, category } = item;
                                return (
                                    <tr key={_id} className="history-item">
                                        <td>{capitalizeWords(title)}</td>
                                        <td className={`amount ${type}`}>{type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}</td>
                                        <td>{new Date(date).toLocaleDateString()}</td>
                                        <td>{capitalizeWords(category)}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </HistoryStyled>
        </MainContain>
    );
}

const MainContain = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh; /* Ensure the container covers the full viewport height */
    width: 100%; /* Ensure the container covers the full viewport width */
    
    justify-content: center;
    
    padding: 30px 0;
   
`;

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
     margin-left:60px;
     margin-right:60px;


    .history {
        background: white;
        width: 100%;
        padding: 40px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: 12px 20px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    .history-header th {
        font-weight: bold;
        color: #333;
    }

    .history-item {
        transition: background-color 0.3s;
        color: #333;
    }

    .history-item:hover {
        background-color: #f0f0f0;
    }

    .amount {
        font-weight: bold;
    }

    .amount.expense {
        color: red;
    }

    .amount.income {
        color: green;
    }

    .options {
        color: #007bff;
        cursor: pointer;
    }

    .options:hover {
        text-decoration: underline;
    }
`;

export default Transaction;
