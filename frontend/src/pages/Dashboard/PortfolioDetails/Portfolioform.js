import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../Context/globalContext';
import './Portfolioform.css';

function PortfolioForm() {
    const { addInvestment, message, setError } = useGlobalContext();
    const [inputState, setInputState] = useState({
        type: '',
        amount: '',
        purchaseDate: '',
        currentValue: '',
        expectedGrowth: '',
        description: '',
    });

    const { type, amount, purchaseDate, currentValue, expectedGrowth, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        addInvestment(inputState);
        setInputState({
            type: '',
            amount: '',
            purchaseDate: '',
            currentValue: '',
            expectedGrowth: '',
            description: '',
        });
    };

    return (
        <form className="form-styled" onSubmit={handleSubmit}>
            <div className="portfolio-form-container">
                {message && <p className="error-message">{message}</p>}
                <h2>Add Investment Details 💸</h2>
                <div className="form-control">
                    <label className="text-field-label">Type of Investment:</label>
                    <select
                        value={type}
                        onChange={handleInput('type')}
                        name="type"
                        className="text-field-input"
                    >
                        <option value="" disabled>Select Type of Investment:</option>
                        <option value="stocks">Stocks</option>
                        <option value="bonds">Bonds</option>
                        <option value="mutualFunds">Mutual Funds</option>
                        <option value="realEstate">Real Estate</option>
                        <option value="crypto">Cryptocurrency</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="text-field">
                    <label className="text-field-label">Investment Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        name="amount"
                        onChange={handleInput('amount')}
                        className="text-field-input"
                    />
                </div>
                <div className="form-control">
                    <label className="text-field-label">Purchase Date:</label>
                    <DatePicker
                        selected={purchaseDate}
                        onChange={(date) => setInputState({ ...inputState, purchaseDate: date })}
                        dateFormat="dd/MM/yyyy"
                        className="text-field-input date-input"
                    />
                </div>
                <div className="text-field">
                    <label className="text-field-label">Current Value:</label>
                    <input
                        type="number"
                        value={currentValue}
                        name="currentValue"
                        onChange={handleInput('currentValue')}
                        className="text-field-input"
                    />
                </div>
                <div className="text-field">
                    <label className="text-field-label">Expected Growth:</label>
                    <input
                        type="number"
                        value={expectedGrowth}
                        name="expectedGrowth"
                        onChange={handleInput('expectedGrowth')}
                        className="text-field-input"
                    />
                </div>
                <div className="text-field">
                    <label className="text-field-label">Description:</label>
                    <textarea
                        value={description}
                        name="description"
                        onChange={handleInput('description')}
                        rows={4}
                        className="text-field-input"
                    />
                </div>
                <button type="submit" className="submit-button">
                    Add Investment
                </button>
            </div>
        </form>
    );
}

export default PortfolioForm;
