import React, { useState, useContext } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-income`, income);
            setIncomes([...incomes, response.data]);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const getIncome = async () => {
        try {
            const response =  await axios.get(`${BASE_URL}get-income`);
            setIncomes(response.data)
        } catch (error) {
            setError(err.response.data.message);
        }
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            incomes
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}
