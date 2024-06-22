import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../Context/globalContext';
import { Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './Form.css'

function Form() {
    const { addIncome, getIncomes, error, setError, users, message } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('');
    };

    const handleSubmit = e => {
        e.preventDefault();
       
        addIncome(inputState);

        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        });
    };

    return (
        <form className="form-styled" onSubmit={handleSubmit}>
            
            <div className="form-container">
                
                <h2>Add Income Details 💸</h2>
                {message && <p className="income-message">{message}</p>}
                <div className="text-field">
                    <label className="text-field-label">Salary Title:</label>
                    <input
                        type="text"
                        value={title}
                        name="title"
                        onChange={handleInput('title')}
                        className="text-field-input"
                    />
                </div>
                <div className="text-field">
                    <label className="text-field-label">Salary Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        name="amount"
                        onChange={handleInput('amount')}
                        className="text-field-input"
                    />
                </div>
                <div className="form-control">
                    <label className="text-field-label">Enter A Date:</label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setInputState({ ...inputState, date })}
                        dateFormat="dd/MM/yyyy"
                        className="text-field-input date-input"
                    />
                </div>
                <div className="form-control">
                    <label className="text-field-label">Select Option:</label>
                    <select
                        value={category}
                        onChange={handleInput('category')}
                        name="category"
                        className="text-field-input"
                    >
                        <option value="" disabled>Select Option:</option>
                        <option value="salary">Salary</option>
                        <option value="freelancing">Freelancing</option>
                        <option value="investments">Investments</option>
                        <option value="stocks">Stocks</option>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="bank">Bank Transfer</option>
                        <option value="youtube">YouTube</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="text-field">
                    <label className="text-field-label">Add A Reference:</label>
                    <textarea
                        value={description}
                        name="description"
                        onChange={handleInput('description')}
                        rows={4}
                        className="text-field-input"
                    />
                </div>
                <button type="submit" className="income-submit-button">
                    Add Income
                </button>
            </div>
        </form>
    );
}

export default Form;
