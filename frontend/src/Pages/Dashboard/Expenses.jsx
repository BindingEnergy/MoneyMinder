import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../../Components/form/Form';
import IncomeItem from '../../Components/IncomeItem/IncomeItem';
import { rupee } from '../../utils/icons';

function Expenses() {
  const { addIncome, incomes, getIncome, deleteIncome,totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncome();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="md:text-5xl text-3xl font-bold font-[Poppins] text-center mb-6">Incomes</h1>
      <h2 className='font-[Poppins] font-bold text-xl md:text-3xl mt-5 md:mb-5 md:mt-5 items-center border-2 border-white justify-center flex'>Total Income:  <span className='text-green-400 ml-3'>{rupee} {totalIncome()}</span> </h2>
      <div className="income-content flex flex-col lg:flex-row gap-6">
        <div className="form-container lg:w-1/3">
          <Form />
        </div>
        <div className="incomes lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {incomes.length > 0 ? (
            incomes.map((income) => {
              const { _id, title, amount, date, category, description } = income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  deleteItem={deleteIncome}
                />
              );
            })
          ) : (
            <p className="text-center text-gray-500 col-span-full">No income records found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Expenses;