import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import Header from '../components/Header';
import bg from '../../../assets/t4.png'
import { background } from '@chakra-ui/react';
const style = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
   backgroundSize:'cover',
   backgroundAttachment:'fixed'
  };
function Transaction() {
    const { transactionHistory } = useGlobalContext();

    const [...history] = transactionHistory();
    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
      };
    return (
        <div className='main-contain' style={style}>
        <HistoryStyled >
        <h2 style={{color: "white", backgroundColor: "#1e3a8a",fontSize: "24px", padding: "10px 20px", borderRadius: "8px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  fontWeight: "bold"}} className="news-title">Transactions History</h2>

            
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
                            const { _id, title, amount, type, date,category } = item;
                            return (
                                <tr key={_id} className="history-item">
                                    <td>{capitalizeWords(title)}</td>
                                    <td className={`amount ${type}`}>{type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}</td>
                                    <td>{new Date(date).toLocaleDateString()}</td>
                                    <td >{capitalizeWords(category)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </HistoryStyled>
        </div>
    );
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    hr {
        width: 100%;
        border: none;
        border-top: 1px solid #ccc;
        margin: 10px 0;
    }

    .history {
        background: linear-gradient(135deg, #ffffff 0%, #9aa8eb 100%);
        width:90%;
        padding: 30px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow-x: auto;
       
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: 12px 15px;
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
