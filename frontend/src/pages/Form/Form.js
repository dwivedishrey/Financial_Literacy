import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../Context/globalContext';
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import 'react-datepicker/dist/react-datepicker.css'; 

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
        <FormStyled onSubmit={handleSubmit}>
            <Box m="20px">
                {message && <Typography color="error">{message}</Typography>}
                <TextField
            fullWidth
            margin="normal"
            label="Salary Title"
            value={title}
            name="title"
           
            onChange={handleInput('title')}
            InputLabelProps={{
                sx: { color: 'black' }, // Set your desired label color here
            }}
            sx={{
                backgroundColor:'white',
                '& label.Mui-focused': {
                    color: 'black', // Set focused label color here if needed
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: 'black', // Set underline color when focused
                },
            }}
        />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Salary Amount"
                    type="number"
                    value={amount}
                    name="amount"
                    onChange={handleInput('amount')}
                    InputLabelProps={{
                        sx: { color: 'black' }, // Set your desired label color here
                    }}
                    sx={{
                        '& label.Mui-focused': {
                            color: 'black', // Set focused label color here if needed
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'black', // Set underline color when focused
                        },
                    }}
                />
                <FormControl fullWidth margin="normal">
                <DatePicker
            selected={inputState.date}
           
            dateFormat="dd/MM/yyyy"
            customInput={<TextField label="Enter A Date"  InputLabelProps={{
                sx: { color: 'black' }, // Set label color
            }}
            sx={{
                '& .react-datepicker-wrapper .react-datepicker__input-container .react-datepicker__input-container input': {
                    color: 'black', // Set input text color
                },
                '& .react-datepicker-wrapper .react-datepicker__input-container .react-datepicker__input-container input:focus': {
                    borderBottomColor: 'black', // Set input underline color when focused
                },
            }} fullWidth />}
            InputLabelProps={{
                sx: { color: 'black' }, // Set label color
            }}
            sx={{
                '& .react-datepicker-wrapper .react-datepicker__input-container .react-datepicker__input-container input': {
                    color: 'black', // Set input text color
                },
                '& .react-datepicker-wrapper .react-datepicker__input-container .react-datepicker__input-container input:focus': {
                    borderBottomColor: 'black', // Set input underline color when focused
                },
            }}
        />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Select Option</InputLabel>
                    <Select
                        value={category}
                        onChange={handleInput('category')}
                        label="Select Option"
                        name="category"
                        InputLabelProps={{
                            sx: { color: 'black' }, // Set your desired label color here
                        }}
                        sx={{
                            '& label.Mui-focused': {
                                color: 'black', // Set focused label color here if needed
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'black', // Set underline color when focused
                            },
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
                    InputLabelProps={{
                        sx: { color: 'black' }, // Set your desired label color here
                    }}
                    sx={{
                        '& label.Mui-focused': {
                            color: 'black', // Set focused label color here if needed
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'black', // Set underline color when focused
                        },
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={<AddIcon />}
                    sx={{ mt: 2 }}
                >
                    Add Income
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

export default Form;
