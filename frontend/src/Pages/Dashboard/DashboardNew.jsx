import React, { useEffect, useState } from 'react';
import Chart from '../../Components/Chart/Chart';
import { useGlobalContext } from '../../context/globalContext';
import { rupee } from '../../utils/icons';
import History from '../../Components/History/History';
import ChartLine from '../../Components/Chart/ChartLine';
import ExpensesPie from '../../Components/Chart/ExpensesPie';
import IncomePie from '../../Components/Chart/IncomePie';
import { useUser } from '@clerk/clerk-react';



function DashboardNew() {
  const { totalExpense, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext();
  
  const {user} = useUser();
  console.log(user);

  const netExpense = totalExpense();
  const netIncome = totalIncome();
  const netBalance = totalBalance();


  useEffect(() => {
    getExpense();
    getIncome();
  }, []);



  return (
    <>
    <div>
      <h1 className='font-[Poppins] font-semibold text-3xl md:text-5xl mb-5'>Welcome, {user.firstName}</h1>
      <div className='flex md:flex-row gap-6 h-fit flex-col'>
        <div className="expensevsincome md:w-[50vw] md:h-[40vh] w-[80vw]">
          <ChartLine/>
        </div>
        <div className="expenses-pie md:w-[30vw] md:h-[30vh] w-[80vw]">
          <ExpensesPie/>
        </div>
        <div className='income-pie md:hidden w-[80vw]'>
          <IncomePie/>
        </div>
      </div>
      <div className="summary md:mt-[150px] flex md:flex-row  flex-col gap-10">
        <div className="status flex flex-col gap-4 mt-4 md:w-[25vw]">
          <h3 className='text-3xl font-semibold'>Summary</h3>
          <div className="balance text-3xl font-semibold border shadow-md rounded-xl h-40 p-5">
            <h3 className="balance mb-5">Balance</h3>
            <p className={` text-5xl ${netBalance < 0 ? 'text-red-500' : 'text-green-500'}`}>{netBalance < 0 ? `-₹ ${Math.abs(netBalance)}` : `+₹ ${netBalance}`}</p>
          </div>
          <div className="net-income text-3xl font-semibold border shadow-md rounded-xl h-40 p-5">
            <h3 className="income mb-5">Income</h3>
            <p className='text-4xl text-green-500'>₹ {netIncome}</p>
          </div>
          <div className="net-expense text-3xl font-semibold border shadow-md rounded-xl h-40 p-5">
            <h3 className="expense mb-5">Expense</h3>
            <p className='text-4xl text-red-500'>₹ {netExpense}</p>
          </div>
        </div>
        <div className="history md:w-[67vw]">
          <History/>
        </div>
      </div>
    </div>
    </>
  );
}

export default DashboardNew;