import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../Context/globalContext';
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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
        console.log(inputState);
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
        <FormStyled onSubmit={handleSubmit}>
            <div className="form-container">
                {message && <Typography color="error">{message}</Typography>}
                <TextField
                    fullWidth
                    margin="normal"
                    label="Salary Title"
                    value={title}
                    name="title"
                    onChange={handleInput('title')}
                    className="text-field"
                    InputLabelProps={{
                        className: 'text-field-label', // Add a custom class for the label
                    }}
                    inputProps={{
                        className: 'text-field-input', // Add a custom class for the input
                    }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Salary Amount"
                    value={amount}
                    name="amount"
                    onChange={handleInput('amount')}
                    className="text-field"
                    InputLabelProps={{
                        className: 'text-field-label', // Add a custom class for the label
                    }}
                    inputProps={{
                        className: 'text-field-input', // Add a custom class for the input
                    }}
                />
                <FormControl fullWidth margin="normal" className="form-control">
                    <DatePicker
                        selected={date}
                        onChange={(date) => setInputState({ ...inputState, date })}
                        dateFormat="dd/MM/yyyy"
                        customInput={<StyledTextField label="Enter A Date" fullWidth className="text-field"/>}
                    />
                </FormControl>
                <FormControl fullWidth margin="normal" className="form-control">
                    <InputLabel className="text-field-label">Select Option</InputLabel>
                    <Select
                        value={category}
                        onChange={handleInput('category')}
                        label="Select Option"
                        name="category"
                        className="text-field"
                        inputProps={{
                            className: 'text-field-input', // Add a custom class for the input
                        }}
                    >
                        <MenuItem value="" disabled>Select Option</MenuItem>
                        <MenuItem value="salary">Salary</MenuItem>
                        <MenuItem value="freelancing">Freelancing</MenuItem>
                        <MenuItem value="investments">Investments</MenuItem>
                        <MenuItem value="stocks">Stocks</MenuItem>
                        <MenuItem value="bitcoin">Bitcoin</MenuItem>
                        <MenuItem value="bank">Bank Transfer</MenuItem>
                        <MenuItem value="youtube">YouTube</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Add A Reference"
                    multiline
                    rows={4}
                    value={description}
                    name="description"
                    onChange={handleInput('description')}
                    className="text-field"
                    InputLabelProps={{
                        className: 'text-field-label', // Add a custom class for the label
                    }}
                    inputProps={{
                        className: 'text-field-input', // Add a custom class for the input
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={<AddIcon />}
                    className="submit-button"
                >
                    Add Income
                </Button>
            </div>
        </FormStyled>
    );
}

const StyledTextField = styled(TextField)`
    background-color: white !important;
    color: black !important;

    .MuiInputBase-input {
        color: black !important;
    }

    .MuiInputLabel-root {
        color: black !important;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: black !important;
    }
`;

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: 0 auto;
    gap: 1rem;

    .form-container {
        margin: 20px;
    }

    .text-field {
        background-color: white;
        color: black;

        .MuiInputBase-input {
            color: black !important;
        }

        .MuiInputLabel-root {
            color: black !important;
        }

        .MuiOutlinedInput-notchedOutline {
            border-color: black !important;
        }
    }

    .form-control {
        background-color: white;

        .MuiInputBase-input {
            color: black !important;
        }

        .MuiInputLabel-root {
            color: black !important;
        }

        .MuiOutlinedInput-notchedOutline {
            border-color: black !important;
        }
    }

    .submit-button {
        margin-top: 20px;
    }
`;

export default Form;
