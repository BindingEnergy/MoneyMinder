import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {useUser} from "@clerk/clerk-react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const {user} = useUser();
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(user){
            getIncome();
            getExpense();
        }
    },[user]);

    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-income`,{
                ...income,
                userId:user.id
            });
            setIncomes([...incomes, response.data]);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const getIncome = async () => {
        try {
            const response =  await axios.get(`${BASE_URL}get-income`,{
                params:{userId:user.id}
            });
            setIncomes(response.data)
            totalIncome()
        } catch (error) {
            setError(err.response.data.message);
        }
    }

    const deleteIncome = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}delete-income/${id}`);
            getIncome();
        } catch (error) {
            console.error("Error deleting income:", error);
        }
    };

    const totalIncome = ()=>{
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += parseFloat(income.amount) || 0;
        })

        return totalIncome;
    }

    //expenses
    const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${BASE_URL}add-expense`, {
                ...expense,
                userId:user.id
            });
            setExpenses([...expenses, response.data]);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const getExpense = async () => {
        try {
            const response =  await axios.get(`${BASE_URL}get-expense`,{
                params:{userId:user.id}
            });
            setExpenses(response.data)
            totalExpense()
        } catch (error) {
            setError(err.response.data.message);
        }
    }

    const deleteExpense = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);
            getExpense();
        } catch (error) {
            console.error("Error deleting expense:", error);
            
        }
    };

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense += parseFloat(expense.amount) || 0;
        });
    
        return totalExpense;
    };
    
    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    const transactionHistory = () => {
        const incomeHistory = incomes.map((income) => ({
            ...income,
            type: 'income',
        }));
    
        const expenseHistory = expenses.map((expense) => ({
            ...expense,
            type: 'expense',
        }));
    
        const history = [...incomeHistory, ...expenseHistory];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
    
        return history.slice(0,4);
    };

    
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            expenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}
