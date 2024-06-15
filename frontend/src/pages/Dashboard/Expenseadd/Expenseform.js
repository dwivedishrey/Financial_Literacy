import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../Context/globalContext';
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Expenseform() {
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
        <FormStyled onSubmit={handleSubmit}>
            <Box m="20px">
                {message && <Typography color="error">{message}</Typography>}
                <TextField
                    fullWidth
                    margin="normal"
                    label="Expense Title"
                    value={title}
                    name="title"
                    onChange={handleInput('title')}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Expense Amount"
                    type="number"
                    value={amount}
                    name="amount"
                    onChange={handleInput('amount')}
                />
                <FormControl fullWidth margin="normal">
                    <DatePicker
                        selected={date}
                        onChange={(date) => setInputState({ ...inputState, date })}
                        dateFormat="dd/MM/yyyy"
                        customInput={<TextField label="Enter A Date" fullWidth />}
                    />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Select Option</InputLabel>
                    <Select
                        value={category}
                        onChange={handleInput('category')}
                        label="Select Option"
                        name="category"
                    >
                        <MenuItem value="" disabled>Select Option</MenuItem>
                        <MenuItem value="education">Education</MenuItem>
                        <MenuItem value="groceries">Groceries</MenuItem>
                        <MenuItem value="health">Health</MenuItem>
                        <MenuItem value="subscriptions">Subscriptions</MenuItem>
                        <MenuItem value="takeaways">Takeaways</MenuItem>
                        <MenuItem value="clothing">Clothing</MenuItem>
                        <MenuItem value="travelling">Travelling</MenuItem>
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
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={<AddIcon />}
                    sx={{ mt: 2 }}
                >
                    Add Expense
                </Button>
            </Box>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: 0 auto;
    gap: 1rem;
`;

export default Expenseform;
