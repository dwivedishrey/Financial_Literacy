import React, { useContext, useState,useEffect } from "react";
import axios from 'axios';
import auth from "../../firebase.init";

const BASE_URL = "https://financial-literacy-be3z.onrender.com/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);
    const [users, setUser] = useState(null); 
    const [message,setMessage]=useState(null);
    const [investments, setInvestments] = useState([]);
    const [totalBudget, setTotalBudgetState] = useState(0);
    const [upcomingPayments, setUpcomingPayments] = useState([]);
    

    const setUserGlobally = (userData) => {
        if (userData) {
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            
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
 
    
    // useEffect(() => {
    //     console.log("Current user:", users);
    // }, [users]);
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
           
            setIncomes(response.data);
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
            // console.error("Error fetching incomes:", err);
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
    const RecentHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history.slice(0, 3);
    };
    const addInvestment = async (investment) => {
        
        if (users==null) {
         
            setError("User not authenticated");
            return;
        }
        try {
            
            const payload = { ...investment, ...getUserPayload() };
            const response = await axios.post(`${BASE_URL}add-investment`, payload);
          
            setMessage("Investment Added");
            setTimeout(() => setMessage(null), 3000);
            getInvestments();
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
        }
    };
    
    const getInvestments = async () => {
        if (!users) {
            setError("User not authenticated");
            return;
        }
        try {
            const payload = getUserPayload();
            const response = await axios.get(`${BASE_URL}get-investment`, { params: payload });
         
            setInvestments(response.data);
            const today = new Date();
            const upcoming = response.data.filter(investment => {
              const paymentDate = new Date(investment.purchaseDate);
              const timeDiff = paymentDate.getTime() - today.getTime();
              const daysDiff = timeDiff / (1000 * 3600 * 24);
              return daysDiff <= 7 && daysDiff >= 0;
            });
            setUpcomingPayments(upcoming);
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
            console.error("Error fetching investments:", err);
        }
    };
    
    // Delete Investment
    const deleteInvestment = async (id) => {
        try {
            const payload = { ...getUserPayload() };
            await axios.delete(`${BASE_URL}delete-investment/${id}`, { data: payload });
            getInvestments();
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
        }
    };
    
    // Total Investments
    const totalInvestments = () => {
        return investments.reduce((acc, investment) => acc + investment.currentValue, 0);
    };
    const setTotalBudget = async (budget) => {
        if (users == null) {
            setError("User not authenticated");
            return;
        }
        try {
            const payload = { totalBudget: budget, ...getUserPayload() };
            const response = await axios.post(`${BASE_URL}set-total-budget`, payload);
            
            setMessage("Total Budget Set");
            setTimeout(() => setMessage(null), 3000);
            getTotalBudget();
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
        }
    };
    const getTotalBudget = async () => {
        if (!users) {
            setError("User not authenticated");
            return;
        }
        try {
            const payload = getUserPayload();
            const response = await axios.get(`${BASE_URL}get-total-budget`, { params: payload });
          
            setTotalBudgetState(response.data.totalBudget !== undefined ? response.data.totalBudget : 0); // Set to default value if not present
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
            console.error("Error fetching total budget:", err);
        }
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
            message,
            addInvestment,
            getInvestments,
            investments,
            deleteInvestment,
            totalInvestments,
            upcomingPayments,
            setTotalBudget,
            getTotalBudget,
            totalBudget,
            RecentHistory,
            
            
            
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
