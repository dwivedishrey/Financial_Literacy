import React, { useContext, useState,useEffect } from "react";
import axios from 'axios';
import auth from "../../firebase.init";

const BASE_URL = "http://localhost:5000/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null); // Store user information
    
    const setUserGlobally = (userData) => {
        if (userData) {
            setUser(userData);
            console.log("User set globally:", userData);
        } else {
            console.error("Trying to set user globally with null or undefined value");
        }
    };
    // Ensure user ID is present in the request
    console.log(user)
    const getUserPayload = () => {
        return user ? { user_id: user} : {};
    };
   

    // Add Income
    const addIncome = async (income) => {
        if (user==null) {
            setError("User not then authenticated");
            return;
        }
        try {
            const payload = { ...income, ...getUserPayload() };
            const response = await axios.post(`${BASE_URL}add-income`, payload);
            console.log(response.data);
            getIncomes();
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
        }
    };

    // Get Incomes
    const getIncomes = async () => {
        if (!user) {
            setError("User not authenticated");
            return;
        }
        try {
             const payload = getUserPayload();
            const response = await axios.get(`${BASE_URL}get-income`, { params: payload });
            console.log("Fetched Incomes: ", response.data);
            setIncomes(response.data);
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
            console.error("Error fetching incomes:", err);
        }
    };

    // Delete Income
    const deleteIncome = async (id) => {
        try {
            const payload = { ...getUserPayload() };
            await axios.delete(`${BASE_URL}delete-income/${id}`, { data: payload });
            getIncomes();
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
        }
    };

    // Total Income
    const totalIncome = () => {
        return incomes.reduce((acc, income) => acc + income.amount, 0);
    };

    // Add Expense
    const addExpense = async (expense) => {
        try {
            const payload = { ...expense, ...getUserPayload() };
            const response = await axios.post(`${BASE_URL}add-expense`, payload);
            getExpenses();
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
        }
    };

    // Get Expenses
    const getExpenses = async () => {
        try {
            const response = await axios.post(`${BASE_URL}get-expense`, getUserPayload());
            setExpenses(response.data);
            console.log(response.data);
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
            console.error("Error fetching expenses:", err);
        }
    };

    // Delete Expense
    const deleteExpense = async (id) => {
        try {
            const payload = { ...getUserPayload() };
            await axios.delete(`${BASE_URL}delete-expense/${id}`, { data: payload });
            getExpenses();
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
        }
    };

    // Total Expenses
    const totalExpenses = () => {
        return expenses.reduce((acc, expense) => acc + expense.amount, 0);
    };

    // Total Balance
    const totalBalance = () => {
        return totalIncome() - totalExpenses();
    };

    // Transaction History
    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history.slice(0, 3);
    };

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError,
            setUserGlobally 
            
            
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
