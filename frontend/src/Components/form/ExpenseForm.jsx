import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function ExpenseForm() {
    const { addExpense, getExpense } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: new Date(),
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Convert amount to a number before sending to backend
            await addExpense({ ...inputState, amount: Number(amount) });
            await getExpense();
            toast.success('Expense Recorded Successfully !');
            // Reset form after successful submission
            setInputState({
                title: '',
                amount: '',
                date: new Date(),
                category: '',
                description: '',
            });
            window.location.reload
        } catch (error) {
            toast.error('Expense Recording Failed !')
            console.error("Failed to add expense:", error);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10">
            <label className="block font-poppins text-gray-900 font-bold">
                Title
                <input
                    type="text"
                    value={title}
                    onChange={handleInput('title')}
                    placeholder="Title"
                    required
                    className="mt-1 font-poppins outline-none px-4 py-2 rounded-md border-2 border-gray-300 bg-transparent shadow-md text-gray-900 placeholder-gray-500 focus:border-black focus:ring-2 focus:ring-white w-full"
                />
            </label>
            <label className="block font-poppins text-gray-900 font-bold">
                Amount
                <input
                    type="number"
                    value={amount}
                    onChange={handleInput('amount')}
                    placeholder="Amount"
                    required
                    className="mt-1 font-poppins outline-none px-4 py-2 rounded-md border-2 border-gray-300 bg-transparent shadow-md text-gray-900 placeholder-gray-500 focus:border-black focus:ring-2 focus:ring-white w-full"
                />
            </label>
            <label className="block font-poppins text-gray-900 font-bold">
                Date
                <DatePicker
                    selected={date}
                    onChange={date => setInputState({ ...inputState, date })}
                    required
                    className="mt-1 font-poppins outline-none px-4 py-2 rounded-md border-2 border-gray-300 bg-transparent shadow-md text-gray-900 placeholder-gray-500 focus:border-black focus:ring-2 focus:ring-white w-full"
                />
            </label>
            <label className="block font-poppins text-gray-900 font-bold">
                Category
                <select
                    required
                    value={category}
                    name="category"
                    id="category"
                    onChange={handleInput('category')}
                    className="mt-1 font-poppins outline-none px-4 py-2 rounded-md border-2 border-gray-300 bg-transparent shadow-md text-gray-900 placeholder-gray-500 focus:border-black focus:ring-2 focus:ring-white w-full"
                >
                    <option value="" disabled>Select Category</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="crypto">CryptoCurrency</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="youtube">Youtube</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <div className="flex flex-col items-start w-full">
                <label className="block font-poppins text-gray-900 font-bold w-full">
                    Description
                    <textarea
                        value={description}
                        onChange={handleInput('description')}
                        placeholder="Description"
                        required
                        className="mt-1 font-poppins outline-none px-4 py-2 rounded-md border-2 border-gray-300 bg-transparent shadow-md text-gray-900 placeholder-gray-500 resize-none focus:border-black focus:ring-2 focus:ring-white w-full"
                    />
                </label>
            </div>
            <button type="submit" className="px-4 py-2 border border-black bg-white text-black rounded-md hover:bg-black hover:text-white hover:border-white transition duration-300 w-full">Add Expense</button>
        </form>
        <ToastContainer className='mt-11'/>
    </>
    );
}