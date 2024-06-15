import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import { Box, Button, TextField, MenuItem, FormControl, InputLabel, Select, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AddIcon from '@mui/icons-material/Add';
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

    const handleDateChange = date => {
        setInputState({ ...inputState, purchaseDate: date });
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
        <FormStyled onSubmit={handleSubmit}>
            <Box m="20px">
                {message && <Typography color="error">{message}</Typography>}
                <FormControl fullWidth margin="normal">
                    <InputLabel>Type of Investment</InputLabel>
                    <Select
                        value={type}
                        onChange={handleInput('type')}
                        label="Type of Investment"
                    >
                        <MenuItem value=""><em>Select Type of Investment</em></MenuItem>
                        <MenuItem value="stocks">Stocks</MenuItem>
                        <MenuItem value="bonds">Bonds</MenuItem>
                        <MenuItem value="mutualFunds">Mutual Funds</MenuItem>
                        <MenuItem value="realEstate">Real Estate</MenuItem>
                        <MenuItem value="crypto">Cryptocurrency</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Investment Amount"
                    type="number"
                    value={amount}
                    onChange={handleInput('amount')}
                />
                <FormControl fullWidth margin="normal">
                    <DatePicker
                        selected={purchaseDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        customInput={<TextField label="Purchase Date" fullWidth />}
                    />
                </FormControl>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Current Value"
                    type="number"
                    value={currentValue}
                    onChange={handleInput('currentValue')}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Expected Growth"
                    type="number"
                    value={expectedGrowth}
                    onChange={handleInput('expectedGrowth')}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={handleInput('description')}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                   
                    sx={{ mt: 2 }}
                >
                  <AddIcon />   Add Investment
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

export default PortfolioForm;

