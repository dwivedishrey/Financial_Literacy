import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../Context/globalContext';
import './Expenseform.css';

function ExpenseForm() {
    const { addExpense, error, setError, message } = useGlobalContext();
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
        addExpense(inputState);
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
                {message && <p className="error-message">{message}</p>}
                <h2>Add Expense Details 💸</h2>
                <div className="text-field">
                    <label className="text-field-label">Expense Title:</label>
                    <input
                        type="text"
                        value={title}
                        name="title"
                        onChange={handleInput('title')}
                        className="text-field-input"
                    />
                </div>
                <div className="text-field">
                    <label className="text-field-label">Expense Amount:</label>
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
                        <option value="education">Education</option>
                        <option value="groceries">Groceries</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="takeaways">Takeaways</option>
                        <option value="clothing">Clothing</option>
                        <option value="travelling">Travelling</option>
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
                <button type="submit" className="expense-submit-button">
                    Add Expense
                </button>
            </div>
        </form>
    );
}

export default ExpenseForm;
