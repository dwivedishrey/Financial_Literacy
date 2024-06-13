import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../Context/globalContext';
import Button from '../../Button/Button';
import { plus } from '../../Utils/icons';
import { Formik } from 'formik';
import { Box } from '@mui/material';


function Expenseform() {
    const {addIncome, addExpense,getIncomes, error, setError,users,message} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
       
        <FormStyled onSubmit={handleSubmit}>
             <Box m="20px">
             {message && <p className='error'>{message}</p>}
            <div className="input-control">
                <input className='placeholder'
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  className='placeholder' 
                    type="text" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker className='placeholder'
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select className='placeholder' required value={category} name="category" id="category" onChange={handleInput('category')}>
                <option value="" disabled >Select Option</option>
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
            <div className="input-control">
                <textarea className='placeholder' name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Expense'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
            </Box>
       </FormStyled>
        
    )
}
const FormStyled = styled.form`
    
    display: flex;
    flex-direction: column;
    width:1250px;
    gap: 4rem;
    
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border: 2px solid black;
        background: transparent;
        background-color:#666666;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: white;
        &::placeholder{
            color: white;

        }
    }
    .placeholder{
        color:white;
    }
    .input-control{
        input{
            width: 100%;
            color:white;
        }
    }

    .selects{
        display: flex;
        
        select{
            color: white;
            &:focus, &:active{
                color: white;
            }
        }
    }

    .submit-btn{
        background-color:#4cceac;
        border-radius:5px;
        width:150px;

        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            font-size:15px;
            font-weight:600;
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;
export default Expenseform;


