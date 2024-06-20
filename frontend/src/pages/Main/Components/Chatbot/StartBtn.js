import React from 'react'
import Queries from './Queries';
import './Chatbot.css';
export default function StartBtn(props) {

    const handlePreference = (preference) => {
        const link = Queries[preference].link;
        window.location.href = link;
    }

    return (
        <div className="start-btn-container">
            <button className='start-btn' onClick={() => handlePreference("investment")}>Investment</button>
            <button className='start-btn' onClick={() => handlePreference("budgeting")}>Budgeting</button>
            <button className='start-btn' onClick={() => handlePreference("loans")}>Loans</button>
            <button className='start-btn' onClick={() => handlePreference("savings")}>Contact a Financial Expert</button>
        </div >
    );
}
