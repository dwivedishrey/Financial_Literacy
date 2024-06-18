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
                // Determine text and color based on transaction type
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
    
    .history-item {
        background: transparent;
        width:350px;
        background-color: white;
        border-bottom: 2px solid black;
        margin-left: 20px;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History;
