import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import { rupee } from '../../utils/icons';
import ExpenseItem from '../../Components/ExpenseItem/ExpenseItem';
import ExpenseForm from '../../Components/form/ExpenseForm';
import { useUser } from '@clerk/clerk-react';

function Expenses() {
  const { addExpense, expenses, getExpense, deleteExpense,totalExpense } = useGlobalContext();

  const {user} = useUser();
  const userId = user.id;

  useEffect(() => {
    if(userId){
      getExpense(userId);
    }
  }, [userId]);

  const handleAddExpense = (incomeData) => {
    addExpense({...incomeData,userId});
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="md:text-5xl text-3xl font-bold font-[Poppins] text-center mb-6">Expenses</h1>
      <h2 className='font-[Poppins] font-bold text-xl md:text-3xl mt-5 md:mb-5 md:mt-5 items-center border-2 border-white justify-center flex'>Total Expense:  <span className='text-red-500 ml-3'>{rupee} {totalExpense()}</span> </h2>
      <div className="income-content flex flex-col lg:flex-row gap-6">
        <div className="form-container lg:w-1/3">
          <ExpenseForm onSubmit={handleAddExpense}/>
        </div>
        <div className="incomes lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {expenses.length > 0 ? (
            expenses.map((expense) => {
              const { _id, title, amount, date, category, description } = expense;
              return (
                <ExpenseItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  deleteItem={deleteExpense}
                />
              );
            })
          ) : (
            <p className="text-center text-gray-500 col-span-full">No Expense records found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Expenses;