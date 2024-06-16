import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Typography, Button } from '@mui/material';
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

    

    const handleSubmit = e => {
        e.preventDefault();
        console.log("button clicked")
        console.log(inputState); 
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
                <FormControl fullWidth margin="normal" className="form-control">
                    <InputLabel className="text-field-label">Type of Investment</InputLabel>
                    <Select
                        value={type}
                        onChange={handleInput('type')}
                        label="Type of Investment"
                        className="text-field"
                        inputProps={{
                            className: 'text-field-input',
                        }}
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
                    value={amount}
                    onChange={handleInput('amount')}
                    className="text-field"
                    InputLabelProps={{
                        className: 'text-field-label',
                    }}
                    inputProps={{
                        className: 'text-field-input',
                    }}
                />
                <FormControl fullWidth margin="normal" className="form-control">
                    <DatePicker
                        selected={purchaseDate}
                        onChange={(purchaseDate) => setInputState({ ...inputState, purchaseDate })}
                        dateFormat="dd/MM/yyyy"
                        customInput={<StyledTextField label="Purchase Date" fullWidth className="text-field"/>}
                    />
                </FormControl>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Current Value"
                    value={currentValue}
                    onChange={handleInput('currentValue')}
                    className="text-field"
                    InputLabelProps={{
                        className: 'text-field-label',
                    }}
                    inputProps={{
                        className: 'text-field-input',
                    }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Expected Growth"
                    value={expectedGrowth}
                    onChange={handleInput('expectedGrowth')}
                    className="text-field"
                    InputLabelProps={{
                        className: 'text-field-label',
                    }}
                    inputProps={{
                        className: 'text-field-input',
                    }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={handleInput('description')}
                    className="text-field"
                    InputLabelProps={{
                        className: 'text-field-label',
                    }}
                    inputProps={{
                        className: 'text-field-input',
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={<AddIcon />}
                    className="submit-button"
                >
                    Add Investment
                </Button>
            </Box>
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

export default PortfolioForm;
