import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import Header from '../components/Header';

function History() {
    const { RecentHistory } = useGlobalContext();

    const [...history] = RecentHistory();

    return (
        <HistoryStyled>
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                const textColor = type === 'expense' ? 'red' : 'green';
                const transactionText = type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`;

                return (
                    <div key={_id} className="history-item">
                        <p style={{ color: textColor }}>
                            {title}
                        </p>
                        <p style={{ color: textColor }}>
                            {transactionText}
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
    width: 100%;

    .history-item {
        background: transparent;
        width: 100%;
        background-color: white;
        border-bottom: 2px solid black;
        padding: 10px;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }

    @media (max-width: 768px) {
        .history-item {
            font-size: 20px;
            padding: 8px;
            justify-content: space-between;
        }
    }

    @media (max-width: 576px) {
        .history-item {
            font-size: 20px;
            padding: 16px;
            justify-content: space-between;
        }
    }
`;

export default History;
