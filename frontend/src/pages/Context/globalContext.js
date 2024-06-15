import React, { useContext, useState,useEffect } from "react";
import axios from 'axios';
import auth from "../../firebase.init";

const BASE_URL = "http://localhost:5000/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);
    const [users, setUser] = useState(null); 
    const [message,setMessage]=useState(null);
    
    const setUserGlobally = (userData) => {
        if (userData) {
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            console.log("User set globally:", userData);
        } else {
            console.error("Trying to set user globally with null or undefined value");
        }
    };
    
   
    const getUserPayload = () => {
        return users ? { user_id: users.user_id} : {};
    };
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        console.log("Current user:", users);
    }, [users]);
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const addIncome = async (income) => {
        if (users==null) {
            setError("User not then authenticated");
            return;
        }
        try {
            const payload = { ...income, ...getUserPayload() };
            const response = await axios.post(`${BASE_URL}add-income`, payload);
            console.log(response.data);
            setMessage("Income Added")
            setTimeout(() => setMessage(null), 3000);
            getIncomes();
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
        }
    };

    const getIncomes = async () => {
        if (!users) {
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
        if (users==null) {
            setError("User not then authenticated");
            return;
        }
        try {
            const payload = { ...expense, ...getUserPayload() };
            const response = await axios.post(`${BASE_URL}add-expense`, payload);
            console.log(response.data);
            setMessage("Expense Added")
            setTimeout(() => setMessage(null), 3000);
            getExpenses();
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
        }
    };

    // Get Expenses
    const getExpenses = async () => {
        if (!users) {
            setError("User not authenticated");
            return;
        }
        try {
            const payload = getUserPayload();
            const response = await axios.get(`${BASE_URL}get-expense`, { params: payload });
            console.log("Fetched Expense: ", response.data);
            setExpenses(response.data);
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
            console.error("Error fetching incomes:", err);
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
        return history;
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
            setUserGlobally ,
            users,
            logout,
            message
            
            
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
