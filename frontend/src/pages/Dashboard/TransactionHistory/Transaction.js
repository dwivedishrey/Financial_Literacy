import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import Header from '../components/Header';

function Transaction() {
    const { transactionHistory } = useGlobalContext();

    const [...history] = transactionHistory();

    return (
        <HistoryStyled>
            <Header title="Transaction History" />
            <hr/>
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="history-item">
                        <p style={{ color: 'blue' }}>
                            {title}
                        </p>
                        <p style={{ color: 'blue' }}>
                            {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                );
            })}
        </HistoryStyled>
    );
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item {
        background: transparent;
        width: 1000px;
        background-color: white;
        border: 2px solid black;
        margin-left: 30px;
        padding: 0.5rem;
        border-radius: 5px;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default Transaction;
